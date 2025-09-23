import { useState } from "react";
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { supabase } from "@/integrations/supabase/client";
import { useToast } from "@/hooks/use-toast";
import { useAuth } from "@/hooks/useAuth";
import { ContractTemplate } from "@/types/contracts";
import { ContractFormValues } from "@/components/contracts/components/ContractForm";

export function useContractTemplates() {
  const { user, isAuthenticated } = useAuth();
  const queryClient = useQueryClient();
  const { toast } = useToast();
  const [isLoading, setIsLoading] = useState(false);

  // Fetch templates for the current user
  const { 
    data: templates = [], 
    isLoading: isLoadingTemplates,
    error: templatesError 
  } = useQuery({
    queryKey: ['contractTemplates', user?.id],
    queryFn: async () => {
      if (!isAuthenticated || !user) {
        return [];
      }

      const { data, error } = await supabase
        .from('contract_templates')
        .select('*')
        .order('is_default', { ascending: false })
        .order('created_at', { ascending: false });
      
      if (error) {
        throw error;
      }
      
      return data as ContractTemplate[];
    },
    enabled: isAuthenticated && !!user
  });

  // Create a new template
  const createTemplate = useMutation({
    mutationFn: async ({ 
      title, 
      templateData, 
      isDefault = false 
    }: {
      title: string;
      templateData: ContractFormValues;
      isDefault?: boolean;
    }) => {
      if (!user) throw new Error("User not authenticated");
      
      setIsLoading(true);
      
      try {
        // If this is set as default, unset any existing default
        if (isDefault) {
          await supabase
            .from('contract_templates')
            .update({ is_default: false })
            .eq('user_id', user.id)
            .eq('is_default', true);
        }
        
        // Insert the new template
        const { data, error } = await supabase
          .from('contract_templates')
          .insert({
            user_id: user.id,
            title: title,
            template_data: templateData,
            is_default: isDefault
          })
          .select()
          .single();
        
        if (error) throw error;
        return data as ContractTemplate;
      } finally {
        setIsLoading(false);
      }
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['contractTemplates', user?.id] });
      toast({
        title: "Template saved",

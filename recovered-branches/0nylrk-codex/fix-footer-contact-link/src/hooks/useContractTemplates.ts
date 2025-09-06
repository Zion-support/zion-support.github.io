import { useState } from "react";
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { supabase } from "@/integrations/supabase/client";
import { useToast } from "@/hooks/use-toast";
import { useAuth } from "@/hooks/useAuth";
import { ContractTemplate } from "@/types/contracts";
import { ContractFormValues } from "@/components/contracts/components/ContractForm";
export function useContractTemplates() {
  const { user, isAuthenticated } = useAuth($2);
  const queryClient = useQueryClient($2);
  const { toast } = useToast($2);
  const [isLoading, setIsLoading] = useState($2);
  // Fetch templates for the current user
  const { 
    data: templates = $2;
    isLoading: isLoadingTemplates,
    error: templatesError} = useQuery({
    queryKey: ['contractTemplates', user?.id],
    queryFn: async() => {
      if (!isAuthenticated || !user) {
        return []
      }

      const { data, error } = await supabase
        .from('contract_templates')
        .select('*')
        .order('is_default', { ascending: false})
        .order($2);
      if (error) {
        throw error
      }
      
      return data as ContractTemplate[]
    },
    enabled: isAuthenticated && !!user
  }),

  // Create a new template
  const createTemplate = $2;
      templateData, 
      isDefault = $2;
      templateData: ContractFormValues,
      isDefault?: boolean
    }) => {
      if (!user) throw new Error($2);
      setIsLoading($2);
      try {
        // If this is set as default, unset any existing default
        if (isDefault) {
          await supabase
            .from('contract_templates')
            .update({ is_default: false})
            .eq('user_id', user.id)
            .eq('is_default', true)
        }
        
        // Insert the new template
        const { data, error } = await supabase
          .from('contract_templates')
          .insert({
            user_id: user.id,
            title: title,
            template_data: templateData,
            is_default: isDefault})
          .select()
          .single($2);
        if (error) throw error,
        return data as ContractTemplate
      } finally {
        setIsLoading(false)
      }
    },
    onSuccess: () => {
      queryClient.invalidateQueries($2);
      toast({
        title: "Template saved",
        description: "Contract template has been successfully saved."})
    },
    onError: (error: Error) => {
      console.error($2);
      toast({
        title: "Failed to save template",
        description: "There was an error saving your contract template.",
        variant: "destructive"})
    }
  }),

  // Update an existing template
  const updateTemplate = $2;
      title,
      templateData,
      isDefault = $2;
      title: string,
      templateData: ContractFormValues,
      isDefault?: boolean
    }) => {
      if (!user) throw new Error($2);
      setIsLoading($2);
      try {
        // If this is set as default, unset any existing default
        if (isDefault) {
          await supabase
            .from('contract_templates')
            .update({ is_default: false})
            .eq('user_id', user.id)
            .eq('is_default', true)
            .neq('id', templateId)
        }
        
        // Update the template
        const { data, error } = await supabase
          .from('contract_templates')
          .update({
            title: title,
            template_data: templateData,
            is_default: isDefault,
            updated_at: new Date().toISOString()
          })
          .eq('id', templateId)
          .eq('user_id', user.id)
          .select()
          .single($2);
        if (error) throw error,
        return data as ContractTemplate
      } finally {
        setIsLoading(false)
      }
    },
    onSuccess: () => {
      queryClient.invalidateQueries($2);
      toast({
        title: "Template updated",
        description: "Contract template has been successfully updated."})
    },
    onError: (error: Error) => {
      console.error($2);
      toast({
        title: "Failed to update template",
        description: "There was an error updating your contract template.",
        variant: "destructive"})
    }
  }),

  // Delete a template
  const deleteTemplate = useMutation({
    mutationFn: async(templateId: string) => {
      if (!user) throw new Error($2);
      setIsLoading($2);
      try {
        const { error } = await supabase
          .from('contract_templates')
          .delete()
          .eq('id', templateId)
          .eq($2);
        if (error) throw error
      } finally {
        setIsLoading(false)
      }
    },
    onSuccess: () => {
      queryClient.invalidateQueries($2);
      toast({
        title: "Template deleted",
        description: "Contract template has been successfully deleted."})
    },
    onError: (error: Error) => {
      console.error($2);
      toast({
        title: "Failed to delete template",
        description: "There was an error deleting your contract template.",
        variant: "destructive"})
    }
  }),

  // Set a template as default
  const setDefaultTemplate = useMutation({
    mutationFn: async(templateId: string) => {
      if (!user) throw new Error($2);
      setIsLoading($2);
      try {
        // First unset any existing default
        await supabase
          .from('contract_templates')
          .update({ is_default: false})
          .eq('user_id', user.id)
          .eq($2);
        // Then set the new default
        const { error } = await supabase
          .from('contract_templates')
          .update({ is_default: true})
          .eq('id', templateId)
          .eq($2);
        if (error) throw error
      } finally {
        setIsLoading(false)
      }
    },
    onSuccess: () => {
      queryClient.invalidateQueries($2);
      toast({
        title: "Default template set",
        description: "Default contract template has been updated."})
    },
    onError: (error: Error) => {
      console.error($2);
      toast({
        title: "Failed to set default template",
        description: "There was an error setting your default contract template.",
        variant: "destructive"})
    }
  }),

  return {
    templates,
    isLoading: isLoading || isLoadingTemplates,
    error: templatesError,
    createTemplate,
    updateTemplate,
    deleteTemplate,
    setDefaultTemplate
  }
}
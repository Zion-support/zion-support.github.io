import { useState } from &quot;react&quot;;
import { useQuery, useMutation, useQueryClient } from &quot;@tanstack/react-query&quot;;
import { supabase } from &quot;@/integrations/supabase/client&quot;;
import { useToast } from &quot;@/hooks/use-toast&quot;;
import { useAuth } from &quot;@/hooks/useAuth&quot;;
import { ContractTemplate } from &quot;@/types/contracts&quot;;
import { ContractFormValues } from &quot;@/components/contracts/components/ContractForm&quot;;

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
      if (!user) throw new Error(&quot;User not authenticated&quot;);
      
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
        title: &quot;Template saved&quot;,
        description: &quot;Contract template has been successfully saved.&quot;});
    },
    onError: (error: Error) => {
      console.error(&quot;Error saving template:&quot;, error);
      toast({
        title: &quot;Failed to save template&quot;,
        description: &quot;There was an error saving your contract template.&quot;,
        variant: &quot;destructive&quot;});
    }
  });

  // Update an existing template
  const updateTemplate = useMutation({
    mutationFn: async ({
      templateId,
      title,
      templateData,
      isDefault = false
    }: {
      templateId: string;
      title: string;
      templateData: ContractFormValues;
      isDefault?: boolean;
    }) => {
      if (!user) throw new Error(&quot;User not authenticated&quot;);
      
      setIsLoading(true);
      
      try {
        // If this is set as default, unset any existing default
        if (isDefault) {
          await supabase
            .from('contract_templates')
            .update({ is_default: false })
            .eq('user_id', user.id)
            .eq('is_default', true)
            .neq('id', templateId);
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
        title: &quot;Template updated&quot;,
        description: &quot;Contract template has been successfully updated.&quot;});
    },
    onError: (error: Error) => {
      console.error(&quot;Error updating template:&quot;, error);
      toast({
        title: &quot;Failed to update template&quot;,
        description: &quot;There was an error updating your contract template.&quot;,
        variant: &quot;destructive&quot;});
    }
  });

  // Delete a template
  const deleteTemplate = useMutation({
    mutationFn: async (templateId: string) => {
      if (!user) throw new Error(&quot;User not authenticated&quot;);
      
      setIsLoading(true);
      
      try {
        const { error } = await supabase
          .from('contract_templates')
          .delete()
          .eq('id', templateId)
          .eq('user_id', user.id);
        
        if (error) throw error;
      } finally {
        setIsLoading(false);
      }
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['contractTemplates', user?.id] });
      toast({
        title: &quot;Template deleted&quot;,
        description: &quot;Contract template has been successfully deleted.&quot;});
    },
    onError: (error: Error) => {
      console.error(&quot;Error deleting template:&quot;, error);
      toast({
        title: &quot;Failed to delete template&quot;,
        description: &quot;There was an error deleting your contract template.&quot;,
        variant: &quot;destructive&quot;});
    }
  });

  // Set a template as default
  const setDefaultTemplate = useMutation({
    mutationFn: async (templateId: string) => {
      if (!user) throw new Error(&quot;User not authenticated&quot;);
      
      setIsLoading(true);
      
      try {
        // First unset any existing default
        await supabase
          .from('contract_templates')
          .update({ is_default: false })
          .eq('user_id', user.id)
          .eq('is_default', true);
        
        // Then set the new default
        const { error } = await supabase
          .from('contract_templates')
          .update({ is_default: true })
          .eq('id', templateId)
          .eq('user_id', user.id);
        
        if (error) throw error;
      } finally {
        setIsLoading(false);
      }
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['contractTemplates', user?.id] });
      toast({
        title: &quot;Default template set&quot;,
        description: &quot;Default contract template has been updated.&quot;});
    },
    onError: (error: Error) => {
      console.error(&quot;Error setting default template:&quot;, error);
      toast({
        title: &quot;Failed to set default template&quot;,
        description: &quot;There was an error setting your default contract template.&quot;,
        variant: &quot;destructive&quot;});
    }
  });

  return {
    templates,
    isLoading: isLoading || isLoadingTemplates,
    error: templatesError,
    createTemplate,
    updateTemplate,
    deleteTemplate,
    setDefaultTemplate
  };
}
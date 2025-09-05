<<<<<<< HEAD
<<<<<<< HEAD
import { useState } from "react",
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query",
import { supabase } from "@/integrations/supabase/client",
import { useToast } from "@/hooks/use-toast",
import { useAuth } from "@/hooks/useAuth",
import { ContractTemplate } from "@/types/contracts",
import { ContractFormValues } from "@/components/contracts/components/ContractForm",
=======
import { useState } from &quot;react&quot;;
import { useQuery, useMutation, useQueryClient } from &quot;@tanstack/react-query&quot;;
import { supabase } from &quot;@/integrations/supabase/client&quot;;
import { useToast } from &quot;@/hooks/use-toast&quot;;
import { useAuth } from &quot;@/hooks/useAuth&quot;;
import { ContractTemplate } from &quot;@/types/contracts&quot;;
import { ContractFormValues } from &quot;@/components/contracts/components/ContractForm&quot;;

>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-4fa7
export function useContractTemplates() {
  const { user, isAuthenticated } = useAuth(),
  const queryClient = useQueryClient(),
  const { toast } = useToast(),
  const [isLoading, setIsLoading] = useState(false),
=======

export function useContractTemplates() {_const { user, _isAuthenticated} = useAuth();
  const _queryClient = useQueryClient();
  const {_toast} = useToast();
  const [isLoading, setIsLoading] = useState(false);
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13

  // Fetch templates for the current user
  const {_data: templates = [], _isLoading: isLoadingTemplates, _error: templatesError} = useQuery(_{_queryKey: ['contractTemplates', _user?.id], _queryFn: async () => {
      if (!isAuthenticated || !user) {
<<<<<<< HEAD
        return []
      }
=======
        return [];}
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13

      const {_data, _error} = await supabase
        .from('contract_templates')
        .select('*')
<<<<<<< HEAD
        .order('is_default', { ascending: false })
        .order('created_at', { ascending: false }),
      
      if (error) {
        throw error
      }
=======
        .order('is_default', {_ascending: false})
        .order('created_at', {_ascending: false});
      
      if (error) {_throw error;}
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
      
      return data as ContractTemplate[]
    },
    enabled: isAuthenticated && !!user
  }),

  // Create a new template
<<<<<<< HEAD
  const createTemplate = useMutation({
    mutationFn: async ({ 
      title,
      templateData,
      isDefault = false 
    }: {
      title: string,
      templateData: ContractFormValues,
      isDefault?: boolean
    }) => {
<<<<<<< HEAD
      if (!user) throw new Error("User not authenticated"),
=======
      if (!user) throw new Error(&quot;User not authenticated&quot;);
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-4fa7
=======
  const _createTemplate = useMutation(_{_mutationFn: async ({ 
      title, _templateData, _isDefault = false}: {_title: string;
      templateData: ContractFormValues;
      isDefault?: boolean;}) => {_if (!user) throw new Error("User not authenticated");
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
      
      setIsLoading(true),
      
      try {
        // If this is set as default, _unset any existing default
        if (isDefault) {
          await supabase
            .from('contract_templates')
            .update({ is_default: false})
            .eq('user_id', user.id)
            .eq('is_default', true)
        }
        
        // Insert the new template
        const {_data, _error} = await supabase
          .from('contract_templates')
          .insert({_user_id: user.id, _title: title, _template_data: templateData, _is_default: isDefault})
          .select()
          .single(),
        
<<<<<<< HEAD
        if (error) throw error,
        return data as ContractTemplate
      } finally {
        setIsLoading(false)
      }
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['contractTemplates', user?.id] }),
      toast({
<<<<<<< HEAD
        title: "Template saved",
        description: "Contract template has been successfully saved."})
    },
    onError: (error: Error) => {
      console.error("Error saving template:", error),
      toast({
        title: "Failed to save template",
        description: "There was an error saving your contract template.",
        variant: "destructive"})
=======
        title: &quot;Template saved&quot;,
        description: &quot;Contract template has been successfully saved.&quot;});
    },
    onError: (error: Error) => {
      console.error(&quot;Error saving template:&quot;, error);
      toast({
        title: &quot;Failed to save template&quot;,
        description: &quot;There was an error saving your contract template.&quot;,
        variant: &quot;destructive&quot;});
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-4fa7
=======
        if (error) throw error;
        return data as ContractTemplate;
      } finally {_setIsLoading(false);}
    },
    onSuccess: () => {_queryClient.invalidateQueries({ queryKey: ['contractTemplates', _user?.id]});
      toast({_title: "Template saved", _description: "Contract template has been successfully saved."});
    },
    onError: (_error: Error) => {_toast({
        title: "Failed to save template", _description: "There was an error saving your contract template.", _variant: "destructive"});
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
    }
  }),

  // Update an existing template
<<<<<<< HEAD
  const updateTemplate = useMutation({
    mutationFn: async ({
      templateId,
      title,
      templateData,
      isDefault = false
    }: {
      templateId: string,
      title: string,
      templateData: ContractFormValues,
      isDefault?: boolean
    }) => {
<<<<<<< HEAD
      if (!user) throw new Error("User not authenticated"),
=======
      if (!user) throw new Error(&quot;User not authenticated&quot;);
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-4fa7
=======
  const _updateTemplate = useMutation(_{_mutationFn: async ({
      templateId, _title, _templateData, _isDefault = false}: {_templateId: string;
      title: string;
      templateData: ContractFormValues;
      isDefault?: boolean;}) => {_if (!user) throw new Error("User not authenticated");
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
      
      setIsLoading(true),
      
      try {
        // If this is set as default, _unset any existing default
        if (isDefault) {
          await supabase
            .from('contract_templates')
            .update({ is_default: false})
            .eq('user_id', user.id)
            .eq('is_default', true)
            .neq('id', templateId)
        }
        
        // Update the template
        const {_data, _error} = await supabase
          .from('contract_templates')
          .update({_title: title, _template_data: templateData, _is_default: isDefault, _updated_at: new Date().toISOString()})
          .eq('id', templateId)
          .eq('user_id', user.id)
          .select()
          .single(),
        
<<<<<<< HEAD
        if (error) throw error,
        return data as ContractTemplate
      } finally {
        setIsLoading(false)
      }
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['contractTemplates', user?.id] }),
      toast({
<<<<<<< HEAD
        title: "Template updated",
        description: "Contract template has been successfully updated."})
    },
    onError: (error: Error) => {
      console.error("Error updating template:", error),
      toast({
        title: "Failed to update template",
        description: "There was an error updating your contract template.",
        variant: "destructive"})
=======
        title: &quot;Template updated&quot;,
        description: &quot;Contract template has been successfully updated.&quot;});
    },
    onError: (error: Error) => {
      console.error(&quot;Error updating template:&quot;, error);
      toast({
        title: &quot;Failed to update template&quot;,
        description: &quot;There was an error updating your contract template.&quot;,
        variant: &quot;destructive&quot;});
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-4fa7
=======
        if (error) throw error;
        return data as ContractTemplate;
      } finally {_setIsLoading(false);}
    },
    onSuccess: () => {_queryClient.invalidateQueries({ queryKey: ['contractTemplates', _user?.id]});
      toast({_title: "Template updated", _description: "Contract template has been successfully updated."});
    },
    onError: (_error: Error) => {_toast({
        title: "Failed to update template", _description: "There was an error updating your contract template.", _variant: "destructive"});
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
    }
  }),

  // Delete a template
<<<<<<< HEAD
  const deleteTemplate = useMutation({
    mutationFn: async (templateId: string) => {
<<<<<<< HEAD
      if (!user) throw new Error("User not authenticated"),
=======
      if (!user) throw new Error(&quot;User not authenticated&quot;);
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-4fa7
=======
  const _deleteTemplate = useMutation(_{_mutationFn: async (templateId: string) => {
      if (!user) throw new Error("User not authenticated");
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
      
      setIsLoading(true),
      
      try {
        const { error} = await supabase
          .from('contract_templates')
          .delete()
          .eq('id', templateId)
          .eq('user_id', user.id),
        
<<<<<<< HEAD
        if (error) throw error
      } finally {
        setIsLoading(false)
      }
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['contractTemplates', user?.id] }),
      toast({
<<<<<<< HEAD
        title: "Template deleted",
        description: "Contract template has been successfully deleted."})
    },
    onError: (error: Error) => {
      console.error("Error deleting template:", error),
      toast({
        title: "Failed to delete template",
        description: "There was an error deleting your contract template.",
        variant: "destructive"})
=======
        title: &quot;Template deleted&quot;,
        description: &quot;Contract template has been successfully deleted.&quot;});
    },
    onError: (error: Error) => {
      console.error(&quot;Error deleting template:&quot;, error);
      toast({
        title: &quot;Failed to delete template&quot;,
        description: &quot;There was an error deleting your contract template.&quot;,
        variant: &quot;destructive&quot;});
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-4fa7
=======
        if (error) throw error;
      } finally {_setIsLoading(false);}
    },
    onSuccess: () => {_queryClient.invalidateQueries({ queryKey: ['contractTemplates', _user?.id]});
      toast({_title: "Template deleted", _description: "Contract template has been successfully deleted."});
    },
    onError: (_error: Error) => {_toast({
        title: "Failed to delete template", _description: "There was an error deleting your contract template.", _variant: "destructive"});
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
    }
  }),

  // Set a template as default
<<<<<<< HEAD
  const setDefaultTemplate = useMutation({
    mutationFn: async (templateId: string) => {
<<<<<<< HEAD
      if (!user) throw new Error("User not authenticated"),
=======
      if (!user) throw new Error(&quot;User not authenticated&quot;);
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-4fa7
=======
  const _setDefaultTemplate = useMutation(_{_mutationFn: async (templateId: string) => {
      if (!user) throw new Error("User not authenticated");
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
      
      setIsLoading(true),
      
      try {
        // First unset any existing default
        await supabase
          .from('contract_templates')
          .update({ is_default: false})
          .eq('user_id', user.id)
          .eq('is_default', true),
        
        // Then set the new default
        const {_error} = await supabase
          .from('contract_templates')
          .update({_is_default: true})
          .eq('id', templateId)
          .eq('user_id', user.id),
        
<<<<<<< HEAD
        if (error) throw error
      } finally {
        setIsLoading(false)
      }
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['contractTemplates', user?.id] }),
      toast({
<<<<<<< HEAD
        title: "Default template set",
        description: "Default contract template has been updated."})
    },
    onError: (error: Error) => {
      console.error("Error setting default template:", error),
      toast({
        title: "Failed to set default template",
        description: "There was an error setting your default contract template.",
        variant: "destructive"})
=======
        title: &quot;Default template set&quot;,
        description: &quot;Default contract template has been updated.&quot;});
    },
    onError: (error: Error) => {
      console.error(&quot;Error setting default template:&quot;, error);
      toast({
        title: &quot;Failed to set default template&quot;,
        description: &quot;There was an error setting your default contract template.&quot;,
        variant: &quot;destructive&quot;});
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-4fa7
=======
        if (error) throw error;
      } finally {_setIsLoading(false);}
    },
    onSuccess: () => {_queryClient.invalidateQueries({ queryKey: ['contractTemplates', _user?.id]});
      toast({_title: "Default template set", _description: "Default contract template has been updated."});
    },
    onError: (_error: Error) => {_toast({
        title: "Failed to set default template", _description: "There was an error setting your default contract template.", _variant: "destructive"});
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
    }
  }),

<<<<<<< HEAD
  return {
    templates,
    isLoading: isLoading || isLoadingTemplates,
    error: templatesError,
    createTemplate,
    updateTemplate,
    deleteTemplate,
    setDefaultTemplate
  }
=======
  return {_templates, _isLoading: isLoading || isLoadingTemplates, _error: templatesError, _createTemplate, _updateTemplate, _deleteTemplate, _setDefaultTemplate};
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
}
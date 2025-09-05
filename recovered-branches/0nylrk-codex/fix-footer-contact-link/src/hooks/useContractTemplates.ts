import { useState } from "react",
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query",
import { supabase } from "@/integrations/supabase/client",
import { useToast } from "@/hooks/use-toast",
import { useAuth } from "@/hooks/useAuth",
import { ContractTemplate } from "@/types/contracts",
import { ContractFormValues } from "@/components/contracts/components/ContractForm",export function useContractTemplates() {
  const { user, isAuthenticated } = useAuth(),
  const queryClient = useQueryClient(),
  const { toast } = useToast(),
  const [isLoading, setIsLoading] = useState(false),

export function useContractTemplates() {_const { user, _isAuthenticated} = useAuth();
  const _queryClient = useQueryClient();
  const {_toast} = useToast();
  const [isLoading, setIsLoading] = useState(false);

  // Fetch templates for the current user
  const {_data: templates = [], _isLoading: isLoadingTemplates, _error: templatesError} = useQuery(_{_queryKey: ['contractTemplates', _user?.id], _queryFn: async () => {
      if (!isAuthenticated || !user) {
        return []
      }
      const {_data, _error} = await supabase
        .from('contract_templates')
        .select('*')
        .order('is_default', { ascending: false })
        .order('created_at', { ascending: false }),
      
      if (error) {
        throw error
      }      
      return data as ContractTemplate[]
    },
    enabled: isAuthenticated && !!user
  }),

  // Create a new template
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
      if (!user) throw new Error("User not authenticated"),  const _createTemplate = useMutation(_{_mutationFn: async ({ 
      title, _templateData, _isDefault = false}: {_title: string;
      templateData: ContractFormValues;
      isDefault?: boolean;}) => {_if (!user) throw new Error("User not authenticated");
      
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
        
        if (error) throw error,
        return data as ContractTemplate
      } finally {
        setIsLoading(false)
      }
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['contractTemplates', user?.id] }),
      toast({
        title: "Template saved",
        description: "Contract template has been successfully saved."})
    },
    onError: (error: Error) => {
      console.error("Error saving template:", error),
      toast({
        title: "Failed to save template",
        description: "There was an error saving your contract template.",
        variant: "destructive"})        if (error) throw error;
        return data as ContractTemplate;
      } finally {_setIsLoading(false);}
    },
    onSuccess: () => {_queryClient.invalidateQueries({ queryKey: ['contractTemplates', _user?.id]});
      toast({_title: "Template saved", _description: "Contract template has been successfully saved."});
    },
    onError: (_error: Error) => {_toast({
        title: "Failed to save template", _description: "There was an error saving your contract template.", _variant: "destructive"});
    }
  }),

  // Update an existing template
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
      if (!user) throw new Error("User not authenticated"),  const _updateTemplate = useMutation(_{_mutationFn: async ({
      templateId, _title, _templateData, _isDefault = false}: {_templateId: string;
      title: string;
      templateData: ContractFormValues;
      isDefault?: boolean;}) => {_if (!user) throw new Error("User not authenticated");
      
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
        
        if (error) throw error,
        return data as ContractTemplate
      } finally {
        setIsLoading(false)
      }
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['contractTemplates', user?.id] }),
      toast({
        title: "Template updated",
        description: "Contract template has been successfully updated."})
    },
    onError: (error: Error) => {
      console.error("Error updating template:", error),
      toast({
        title: "Failed to update template",
        description: "There was an error updating your contract template.",
        variant: "destructive"})        if (error) throw error;
        return data as ContractTemplate;
      } finally {_setIsLoading(false);}
    },
    onSuccess: () => {_queryClient.invalidateQueries({ queryKey: ['contractTemplates', _user?.id]});
      toast({_title: "Template updated", _description: "Contract template has been successfully updated."});
    },
    onError: (_error: Error) => {_toast({
        title: "Failed to update template", _description: "There was an error updating your contract template.", _variant: "destructive"});
    }
  }),

  // Delete a template
  const deleteTemplate = useMutation({
    mutationFn: async (templateId: string) => {
      if (!user) throw new Error("User not authenticated"),  const _deleteTemplate = useMutation(_{_mutationFn: async (templateId: string) => {
      if (!user) throw new Error("User not authenticated");
      
      setIsLoading(true),
      
      try {
        const { error} = await supabase
          .from('contract_templates')
          .delete()
          .eq('id', templateId)
          .eq('user_id', user.id),
        
        if (error) throw error
      } finally {
        setIsLoading(false)
      }
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['contractTemplates', user?.id] }),
      toast({
        title: "Template deleted",
        description: "Contract template has been successfully deleted."})
    },
    onError: (error: Error) => {
      console.error("Error deleting template:", error),
      toast({
        title: "Failed to delete template",
        description: "There was an error deleting your contract template.",
        variant: "destructive"})        if (error) throw error;
      } finally {_setIsLoading(false);}
    },
    onSuccess: () => {_queryClient.invalidateQueries({ queryKey: ['contractTemplates', _user?.id]});
      toast({_title: "Template deleted", _description: "Contract template has been successfully deleted."});
    },
    onError: (_error: Error) => {_toast({
        title: "Failed to delete template", _description: "There was an error deleting your contract template.", _variant: "destructive"});
    }
  }),

  // Set a template as default
  const setDefaultTemplate = useMutation({
    mutationFn: async (templateId: string) => {
      if (!user) throw new Error("User not authenticated"),  const _setDefaultTemplate = useMutation(_{_mutationFn: async (templateId: string) => {
      if (!user) throw new Error("User not authenticated");
      
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
        
        if (error) throw error
      } finally {
        setIsLoading(false)
      }
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['contractTemplates', user?.id] }),
      toast({
        title: "Default template set",
        description: "Default contract template has been updated."})
    },
    onError: (error: Error) => {
      console.error("Error setting default template:", error),
      toast({
        title: "Failed to set default template",
        description: "There was an error setting your default contract template.",
        variant: "destructive"})        if (error) throw error;
      } finally {_setIsLoading(false);}
    },
    onSuccess: () => {_queryClient.invalidateQueries({ queryKey: ['contractTemplates', _user?.id]});
      toast({_title: "Default template set", _description: "Default contract template has been updated."});
    },
    onError: (_error: Error) => {_toast({
        title: "Failed to set default template", _description: "There was an error setting your default contract template.", _variant: "destructive"});
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
  }}
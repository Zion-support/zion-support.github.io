import { useState } from "react";";
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";";
import { supabase } from "@/integrations/supabase/client";";
import { useToast } from "@/hooks/use-toast";";
import { useAuth } from "@/hooks/useAuth";";
import { ContractTemplate } from "@/types/contracts";";
import { ContractFormValues } from "@/components/contracts/components/ContractForm";";";
export function useContractTemplates() {;
const { user, isAuthenticated } = useAuth();
const queryClient = useQueryClient();
const { toast } = useToast();
const [isLoading, setIsLoading] = useState(false)
  // Fetch templates for the current user;
const {
  // TODO: Add properties
}
  // TODO: Add properties
}
    data: templates = [],
    isLoading: isLoadingTemplates,
    error: templatesError
  } = useQuery({
  // TODO: Add properties
}
  // TODO: Add properties
}
    queryKey: ['contractTemplates', user?.id],'
    queryFn: async () => {
  // TODO: Implement
}
  // TODO: Add properties
}
  // TODO: Add properties
}
  // TODO: Implement
}
      if (!isAuthenticated || !user) {
  // TODO: Add properties
}
  // TODO: Add properties
}
        return []
      }
      const { data, error } = await supabase
        .from('contract_templates')'
        .select('*')'
        .order('is_default', { ascending: false })'
        .order('created_at', { ascending: false })'
      if (error) {
  // TODO: Add properties
}
  // TODO: Add properties
}
        throw error
      }
      return data as ContractTemplate[]
    },
    enabled: isAuthenticated && !!user
  })
  // Create a new template;
const createTemplate = useMutation({
  // TODO: Add properties
}
  // TODO: Add properties
}
    mutationFn: async ({
  // TODO: Add properties
}
  // TODO: Add properties
}
      title,
      templateData,
      isDefault = false
    }: {
  // TODO: Add properties
}
  // TODO: Add properties
}
      title: string
      templateData: ContractFormValues
      isDefault?: boolean
    }) => {
  // TODO: Add properties
}
  // TODO: Add properties
}
      if (!user) throw new Error("User not authenticated")"
      setIsLoading(true)
      try {
  // TODO: Add properties
}
  // TODO: Add properties
}
        // If this is set as default, unset any existing default
        if (isDefault) {
  // TODO: Add properties
}
  // TODO: Add properties
}
          await supabase
            .from('contract_templates')'
            .update({ is_default: false })
            .eq('user_id', user.id)'
            .eq('is_default', true)'
        }
        // Insert the new template;
const { data, error } = await supabase
          .from('contract_templates')'
          .insert({
  // TODO: Add properties
}
  // TODO: Add properties
}
            user_id: user.id,
            title: title,
            template_data: templateData,
            is_default: isDefault
          })
          .select()
          .single()
        if (error) throw error
        return data as ContractTemplate
      } finally {
  // TODO: Add properties
}
  // TODO: Add properties
}
        setIsLoading(false)
      }
    },
    onSuccess: () => {
  // TODO: Implement
}
  // TODO: Add properties
}
  // TODO: Add properties
}
  // TODO: Implement
}
      queryClient.invalidateQueries({ queryKey: ['contractTemplates', user?.id] })'
      toast({
  // TODO: Add properties
}
  // TODO: Add properties
}
        title: "Template saved","
        description: "Contract template has been successfully saved."})"
        description: "Contract template has been successfully saved.","
      })
    },
    onError: (error: Error) => {
  // TODO: Add properties
}
  // TODO: Add properties
}
      console.error("Error saving template:", error)"
      toast({
  // TODO: Add properties
}
  // TODO: Add properties
}
        title: "Failed to save template","
        description: "There was an error saving your contract template.","
        variant: "destructive"})"
        variant: "destructive","
      })
    }
  })
  // Update an existing template;
const updateTemplate = useMutation({
  // TODO: Add properties
}
  // TODO: Add properties
}
    mutationFn: async ({
  // TODO: Add properties
}
  // TODO: Add properties
}
      templateId,
      title,
      templateData,
      isDefault = false
    }: {
  // TODO: Add properties
}
  // TODO: Add properties
}
      templateId: string
      title: string
      templateData: ContractFormValues
      isDefault?: boolean
    }) => {
  // TODO: Add properties
}
  // TODO: Add properties
}
      if (!user) throw new Error("User not authenticated")"
      setIsLoading(true)
      try {
  // TODO: Add properties
}
  // TODO: Add properties
}
        // If this is set as default, unset any existing default
        if (isDefault) {
  // TODO: Add properties
}
  // TODO: Add properties
}
          await supabase
            .from('contract_templates')'
            .update({ is_default: false })
            .eq('user_id', user.id)'
            .eq('is_default', true)'
            .neq('id', templateId)'
        }
        // Update the template;
const { data, error } = await supabase
          .from('contract_templates')'
          .update({
  // TODO: Add properties
}
  // TODO: Add properties
}
            title: title,
            template_data: templateData,
            is_default: isDefault,
            updated_at: new Date().toISOString()
          })
          .eq('id', templateId)'
          .eq('user_id', user.id)'
          .select()
          .single()
        if (error) throw error
        return data as ContractTemplate
      } finally {
  // TODO: Add properties
}
  // TODO: Add properties
}
        setIsLoading(false)
      }
    },
    onSuccess: () => {
  // TODO: Implement
}
  // TODO: Add properties
}
  // TODO: Add properties
}
  // TODO: Implement
}
      queryClient.invalidateQueries({ queryKey: ['contractTemplates', user?.id] })'
      toast({
  // TODO: Add properties
}
  // TODO: Add properties
}
        title: "Template updated","
        description: "Contract template has been successfully updated."})"
        description: "Contract template has been successfully updated.","
      })
    },
    onError: (error: Error) => {
  // TODO: Add properties
}
  // TODO: Add properties
}
      console.error("Error updating template:", error)"
      toast({
  // TODO: Add properties
}
  // TODO: Add properties
}
        title: "Failed to update template","
        description: "There was an error updating your contract template.","
        variant: "destructive"})"
        variant: "destructive","
      })
    }
  })
  // Delete a template;
const deleteTemplate = useMutation({
  // TODO: Add properties
}
  // TODO: Add properties
}
    mutationFn: async (templateId: string) => {
  // TODO: Add properties
}
  // TODO: Add properties
}
      if (!user) throw new Error("User not authenticated")"
      setIsLoading(true)
      try {;
const { error } = await supabase
          .from('contract_templates')'
          .delete()
          .eq('id', templateId)'
          .eq('user_id', user.id)'
        if (error) throw error
      } finally {
  // TODO: Add properties
}
  // TODO: Add properties
}
        setIsLoading(false)
      }
    },
    onSuccess: () => {
  // TODO: Implement
}
  // TODO: Add properties
}
  // TODO: Add properties
}
  // TODO: Implement
}
      queryClient.invalidateQueries({ queryKey: ['contractTemplates', user?.id] })'
      toast({
  // TODO: Add properties
}
  // TODO: Add properties
}
        title: "Template deleted","
        description: "Contract template has been successfully deleted."})"
        description: "Contract template has been successfully deleted.","
      })
    },
    onError: (error: Error) => {
  // TODO: Add properties
}
  // TODO: Add properties
}
      console.error("Error deleting template:", error)"
      toast({
  // TODO: Add properties
}
  // TODO: Add properties
}
        title: "Failed to delete template","
        description: "There was an error deleting your contract template.","
        variant: "destructive"})"
        variant: "destructive","
      })
    }
  })
  // Set a template as default;
const setDefaultTemplate = useMutation({
  // TODO: Add properties
}
  // TODO: Add properties
}
    mutationFn: async (templateId: string) => {
  // TODO: Add properties
}
  // TODO: Add properties
}
      if (!user) throw new Error("User not authenticated")"
      setIsLoading(true)
      try {
  // TODO: Add properties
}
  // TODO: Add properties
}
        // First unset any existing default
        await supabase
          .from('contract_templates')'
          .update({ is_default: false })
          .eq('user_id', user.id)'
          .eq('is_default', true)'
        // Then set the new default;
const { error } = await supabase
          .from('contract_templates')'
          .update({ is_default: true })
          .eq('id', templateId)'
          .eq('user_id', user.id)'
        if (error) throw error
      } finally {
  // TODO: Add properties
}
  // TODO: Add properties
}
        setIsLoading(false)
      }
    },
    onSuccess: () => {
  // TODO: Implement
}
  // TODO: Add properties
}
  // TODO: Add properties
}
  // TODO: Implement
}
      queryClient.invalidateQueries({ queryKey: ['contractTemplates', user?.id] })'
      toast({
  // TODO: Add properties
}
  // TODO: Add properties
}
        title: "Default template set","
        description: "Default contract template has been updated."})"
        description: "Default contract template has been updated.","
      })
    },
    onError: (error: Error) => {
  // TODO: Add properties
}
  // TODO: Add properties
}
      console.error("Error setting default template:", error)"
      toast({
  // TODO: Add properties
}
  // TODO: Add properties
}
        title: "Failed to set default template","
        description: "There was an error setting your default contract template.","
        variant: "destructive"})"
        variant: "destructive","
      })
    }
  })
  return {
  // TODO: Add properties
}
  // TODO: Add properties
}
    templates,
    isLoading: isLoading || isLoadingTemplates,
    error: templatesError,
    createTemplate,
    updateTemplate,
    deleteTemplate,
    setDefaultTemplate
  }
}

import { useState } from "react",
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query",
import { supabase } from "@/integrations/supabase/client",
import { useToast } from "@/hooks/use-toast",
import { useAuth } from "@/hooks/useAuth",

  // Fetch templates for the current user
  const {
    data: templates = []
    isLoading: isLoadingTemplates
    error: templatesError
  } = useQuery({
    queryKey: ['contractTemplates', user?.id];
    queryFn: async () => {
      if (!isAuthenticated |!user) {
        return []

      }

      return data as ContractTemplate[]
    },
    enabled: isAuthenticated && !!user
  }),

=======
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
  // Create a new template
  const createTemplate = useMutation({
    mutationFn: async ({
      title
      templateData
      isDefault = false
    }: {

      try {
        // If this is set as default, unset any existing default
        if (isDefault) {
          await supabase
            .from('contract_templates')
            .update({ is_default: false })
            .eq('user_id', user && user.id)
            .eq('is_default', true)

>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
    onSuccess: () => {
      queryClient && queryClient.invalidateQueries({ queryKey: ['contractTemplates', user?.id] });
      toast({
        title: "Template saved"
        description: "Contract template has been successfully saved."})

=======

    },


>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
    onError: (error: Error) => {
      console && console.error("Error saving template:", error);
      toast({

      try {
        // If this is set as default, unset any existing default
        if (isDefault) {
          await supabase
            .from('contract_templates')
            .update({ is_default: false })
            .eq('user_id', user && user.id)
            .eq('is_default', true)
            .neq('id', templateId)

>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
    onSuccess: () => {
      queryClient && queryClient.invalidateQueries({ queryKey: ['contractTemplates', user?.id] });
      toast({
        title: "Template updated"
        description: "Contract template has been successfully updated."})

=======

    },


>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
    onError: (error: Error) => {
      console && console.error("Error updating template:", error);
      toast({

      try {
        const { error } = await supabase
          .from('contract_templates')
          .delete()
          .eq('id', templateId)

        if (error) throw error
      } finally {
        setIsLoading(false)
      }

=======
    },


>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
    onSuccess: () => {
      queryClient && queryClient.invalidateQueries({ queryKey: ['contractTemplates', user?.id] });
      toast({
        title: "Template deleted"
        description: "Contract template has been successfully deleted."})

    onError: (error: Error) => {
      console && console.error("Error deleting template:", error);
      toast({

      try {
        // First unset any existing default
        await supabase
          .from('contract_templates')
          .update({ is_default: false })

          .eq('user_id', user.id)

        // Then set the new default
        const { error } = await supabase
          .from('contract_templates')
          .update({ is_default: true })
          .eq('id', templateId)

      } finally {
        setIsLoading (false);
      }
    }


          .eq('user_id', user.id),
        

>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
        if (error) throw error
      } finally {
        setIsLoading(false)
      }

    onSuccess: () => {
      queryClient && queryClient.invalidateQueries({ queryKey: ['contractTemplates', user?.id] });
      toast({
        title: "Default template set"
        description: "Default contract template has been updated."})

<<<<<<< HEAD
    onError: (error: Error) => {
      console && console.error("Error setting default template:", error);
      toast({
        title: "Failed to set default template";
        description: "There was an error setting your default contract template."
        variant: "destructive"})
    }
  });
  return {
    templates;
    isLoading: isLoading |isLoadingTemplates;
    error: templatesError;
    createTemplate;
    updateTemplate;
    deleteTemplate

    setDefaultTemplate

>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
  }
}
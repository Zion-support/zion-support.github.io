<<<<<<< HEAD
import {useState} from "react";
import {useQuery, useMutation, useQueryClient} from "@tanstack/react-query";
import {supabase} from "@/integrations/supabase/client";
import {useToast} from "@/hooks/use-toast";
import {useAuth} from "@/hooks/useAuth";
import {ContractTemplate} from "@/types/contracts";
import {ContractFormValues} from "@/components/contracts/components/ContractForm";
export function useContractTemplates() {;
  const { user, isAuthenticated } = useAuth();
  const queryClient = useQueryClient();
  const { toast } = useToast();
  const [isLoading, setIsLoading] = useState(false);
=======
import { useState } from "react",
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query",
import { supabase } from "@/integrations/supabase/client",
import { useToast } from "@/hooks/use-toast",
import { useAuth } from "@/hooks/useAuth",
<<<<<<< HEAD
import { ContractTemplate } from "@/types/contracts";
import { ContractFormValues } from "@/components/contracts/components/ContractForm";
export function useContractTemplates() {
  const { user, isAuthenticated } = useAuth();

  const queryClient = useQueryClient();
  const { toast } = useToast();
  const [isLoading, setIsLoading] = useState(false);
=======
import { ContractTemplate } from "@/types/contracts",
import { ContractFormValues } from "@/components/contracts/components/ContractForm",
export function useContractTemplates() {
  const { user, isAuthenticated } = useAuth(),
  const queryClient = useQueryClient(),
  const { toast } = useToast(),
  const [isLoading, setIsLoading] = useState(false),
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1

>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
  // Fetch templates for the current user
  const {
    data: templates = []
    isLoading: isLoadingTemplates
    error: templatesError
  } = useQuery({
    queryKey: ['contractTemplates', user?.id],
    queryFn: async () => {
      if (!isAuthenticated |!user) {
        return []
<<<<<<< HEAD
      }
      const { data, error } = await supabase
        .from('contract_templates')
        .select('*')
        .order('is_default', { ascending: false })
        .order('created_at', { ascending: false });
      if (error) {
        throw error
=======
import { useState } from "react",;
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query",;
import { supabase } from "@/integrations/supabase/client",;
import { useToast } from "@/hooks/use-toast",;
import { useAuth } from "@/hooks/useAuth",;
import { ContractTemplate } from "@/types/contracts",;
import { ContractFormValues } from "@/components/contracts/components/ContractForm",;
export function useContractTemplates() {;
  const { user, isAuthenticated } = useAuth(),;
  const queryClient = useQueryClient(),;
  const { toast } = useToast(),;
  const [isLoading, setIsLoading] = useState(false),;
  // Fetch templates for the current user;
  const {;
    data: templates = [],;
    isLoading: isLoadingTemplates,;
    error: templatesError;
  } = useQuery({;
    queryKey: ['contractTemplates', user?.id],;
    queryFn: async () => {;
      if (!isAuthenticated || !user) {;
        return [];
      }
;
      const { data, error } = await supabase;
        .from('contract_templates');
        .select('*');
        .order('is_default', { ascending: false });
        .order('created_at', { ascending: false }),;
      if (error) {;
        throw error;
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
      }
      
      return data as ContractTemplate[]
    },
    enabled: isAuthenticated && !!user
  }),

>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
  // Create a new template
  const createTemplate = useMutation({
    mutationFn: async ({
      title
      templateData
      isDefault = false
    }: {
<<<<<<< HEAD
      title: string;
      templateData: ContractFormValues
      isDefault?: boolean
    }) => {
      if (!user) throw new Error("User not authenticated");
      setIsLoading(true);
=======
      title: string,
      templateData: ContractFormValues,
      isDefault?: boolean
    }) => {
      if (!user) throw new Error("User not authenticated"),
      
      setIsLoading(true),
      
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
      try {
        // If this is set as default, unset any existing default
        if (isDefault) {
          await supabase
            .from('contract_templates')
            .update({ is_default: false })
            .eq('user_id', user.id)
            .eq('is_default', true)
<<<<<<< HEAD
        }
        // Insert the new template
        const { data, error } = await supabase
          .from('contract_templates')
          .insert({
            user_id: user.id;
            title: title;
            template_data: templateData
            is_default: isDefault
          })
          .select()
          .single();
        if (error) throw error;
        return data as ContractTemplate
      } finally {
        setIsLoading(false)
      }
    };
=======
;
      return data as ContractTemplate[];
    },;
    enabled: isAuthenticated && !!user;
  }),;
  // Create a new template;
  const createTemplate = useMutation({;
    mutationFn: async ({;
      title,;
      templateData,;
      isDefault = false;
    }: {;
      title: string,;
      templateData: ContractFormValues,;
      isDefault?: boolean;
    }) => {;
      if (!user) throw new Error("User not authenticated"),;
      setIsLoading(true),;
      try {;
        // If this is set as default, unset any existing default;
        if (isDefault) {;
          await supabase;
            .from('contract_templates');
            .update({ is_default: false });
            .eq('user_id', user.id);
            .eq('is_default', true);
        }
;
        // Insert the new template;
        const { data, error } = await supabase;
          .from('contract_templates');
          .insert({;
            user_id: user.id,;
            title: title,;
            template_data: templateData,;
            is_default: isDefault;
          });
          .select();
          .single(),;
        if (error) throw error,;
        return data as ContractTemplate;
      } finally {;
        setIsLoading(false);
      }
    },
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['contractTemplates', user?.id] }),
      toast({
        title: "Template saved"
        description: "Contract template has been successfully saved."})
<<<<<<< HEAD
    }
=======
    },
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
    onError: (error: Error) => {
      console.error("Error saving template:", error),
      toast({
<<<<<<< HEAD
        title: "Failed to save template";
        description: "There was an error saving your contract template."
        variant: "destructive"})
    }
  });
  // Update an existing template
  const updateTemplate = useMutation({
    mutationFn: async ({
      templateId;
      title;
      templateData
      isDefault = false
    }: {
      templateId: string;
      title: string;
      templateData: ContractFormValues
      isDefault?: boolean
    }) => {
      if (!user) throw new Error("User not authenticated");
      setIsLoading(true);
=======
        title: "Failed to save template",
        description: "There was an error saving your contract template.",
        variant: "destructive"})
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
      if (!user) throw new Error("User not authenticated"),
      
      setIsLoading(true),
      
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
      try {
        // If this is set as default, unset any existing default
        if (isDefault) {
          await supabase
            .from('contract_templates')
            .update({ is_default: false })
            .eq('user_id', user.id)
            .eq('is_default', true)
            .neq('id', templateId)
<<<<<<< HEAD
        }
        // Update the template
        const { data, error } = await supabase
          .from('contract_templates')
          .update({
            title: title;
            template_data: templateData;
            is_default: isDefault
            updated_at: new Date().toISOString()
          })
          .eq('id', templateId)
          .eq('user_id', user.id)
          .select()
          .single();
        if (error) throw error;
        return data as ContractTemplate
      } finally {
        setIsLoading(false)
      }
    };
=======
    },;
    onSuccess: () => {;
      queryClient.invalidateQueries({ queryKey: ['contractTemplates', user?.id] }),;
      toast({;
        title: "Template saved",;
        description: "Contract template has been successfully saved."});
    },;
    onError: (error: Error) => {;
      console.error("Error saving template:", error),;
      toast({;
        title: "Failed to save template",;
        description: "There was an error saving your contract template.",;
        variant: "destructive"});
    }
  }),;
  // Update an existing template;
  const updateTemplate = useMutation({;
    mutationFn: async ({;
      templateId,;
      title,;
      templateData,;
      isDefault = false;
    }: {;
      templateId: string,;
      title: string,;
      templateData: ContractFormValues,;
      isDefault?: boolean;
    }) => {;
      if (!user) throw new Error("User not authenticated"),;
      setIsLoading(true),;
      try {;
        // If this is set as default, unset any existing default;
        if (isDefault) {;
          await supabase;
            .from('contract_templates');
            .update({ is_default: false });
            .eq('user_id', user.id);
            .eq('is_default', true);
            .neq('id', templateId);
        }
;
        // Update the template;
        const { data, error } = await supabase;
          .from('contract_templates');
          .update({;
            title: title,;
            template_data: templateData,;
            is_default: isDefault,;
            updated_at: new Date().toISOString();
          });
          .eq('id', templateId);
          .eq('user_id', user.id);
          .select();
          .single(),;
        if (error) throw error,;
        return data as ContractTemplate;
      } finally {;
        setIsLoading(false);
      }
    },
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['contractTemplates', user?.id] }),
      toast({
        title: "Template updated"
        description: "Contract template has been successfully updated."})
<<<<<<< HEAD
    }
=======
    },
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
    onError: (error: Error) => {
      console.error("Error updating template:", error),
      toast({
<<<<<<< HEAD
        title: "Failed to update template";
        description: "There was an error updating your contract template."
        variant: "destructive"})
    }
  });
  // Delete a template
  const deleteTemplate = useMutation({
    mutationFn: async (templateId: string) => {
      if (!user) throw new Error("User not authenticated");
      setIsLoading(true)
=======
        title: "Failed to update template",
        description: "There was an error updating your contract template.",
        variant: "destructive"})
    }
  }),

  // Delete a template
  const deleteTemplate = useMutation({
    mutationFn: async (templateId: string) => {
      if (!user) throw new Error("User not authenticated"),
      
      setIsLoading(true),
      
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
      try {
        const { error } = await supabase
          .from('contract_templates')
          .delete()
          .eq('id', templateId)
<<<<<<< HEAD
          .eq('user_id', user.id);
=======
          .eq('user_id', user.id),
        
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
        if (error) throw error
      } finally {
        setIsLoading(false)
      }
<<<<<<< HEAD
    }
=======
    },
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['contractTemplates', user?.id] }),
      toast({
        title: "Template deleted"
        description: "Contract template has been successfully deleted."})
<<<<<<< HEAD
    }
=======
    },
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
    onError: (error: Error) => {
      console.error("Error deleting template:", error),
      toast({
<<<<<<< HEAD
        title: "Failed to delete template";
        description: "There was an error deleting your contract template."
        variant: "destructive"})
    }
  });
  // Set a template as default
  const setDefaultTemplate = useMutation({
    mutationFn: async (templateId: string) => {
      if (!user) throw new Error("User not authenticated");
      setIsLoading(true)
=======
        title: "Failed to delete template",
        description: "There was an error deleting your contract template.",
        variant: "destructive"})
    }
  }),

  // Set a template as default
  const setDefaultTemplate = useMutation({
    mutationFn: async (templateId: string) => {
      if (!user) throw new Error("User not authenticated"),
      
      setIsLoading(true),
      
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
      try {
        // First unset any existing default
        await supabase
          .from('contract_templates')
          .update({ is_default: false })
          .eq('user_id', user.id)
<<<<<<< HEAD
          .eq('is_default', true);
=======
          .eq('is_default', true),
        
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
        // Then set the new default
        const { error } = await supabase
          .from('contract_templates')
          .update({ is_default: true })
          .eq('id', templateId)
<<<<<<< HEAD
          .eq('user_id', user.id);
=======
          .eq('user_id', user.id),
        
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
        if (error) throw error
      } finally {
        setIsLoading(false)
      }
<<<<<<< HEAD
    }
=======
    },
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['contractTemplates', user?.id] }),
      toast({
        title: "Default template set"
        description: "Default contract template has been updated."})
<<<<<<< HEAD
    };
    onError: (error: Error) => {
      console.error("Error setting default template:", error);
      toast({
        title: "Failed to set default template";
        description: "There was an error setting your default contract template.",
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
=======
    },
    onError: (error: Error) => {
      console.error("Error setting default template:", error),
      toast({
        title: "Failed to set default template",
        description: "There was an error setting your default contract template.",
        variant: "destructive"})
    },;
    onSuccess: () => {;
      queryClient.invalidateQueries({ queryKey: ['contractTemplates', user?.id] }),;
      toast({;
        title: "Template updated",;
        description: "Contract template has been successfully updated."});
    },;
    onError: (error: Error) => {;
      console.error("Error updating template:", error),;
      toast({;
        title: "Failed to update template",;
        description: "There was an error updating your contract template.",;
        variant: "destructive"});
    }
  }),;
  // Delete a template;
  const deleteTemplate = useMutation({;
    mutationFn: async (templateId: string) => {;
      if (!user) throw new Error("User not authenticated"),;
      setIsLoading(true),;
      try {;
        const { error } = await supabase;
          .from('contract_templates');
          .delete();
          .eq('id', templateId);
          .eq('user_id', user.id),;
        if (error) throw error;
      } finally {;
        setIsLoading(false);
      }
    },;
    onSuccess: () => {;
      queryClient.invalidateQueries({ queryKey: ['contractTemplates', user?.id] }),;
      toast({;
        title: "Template deleted",;
        description: "Contract template has been successfully deleted."});
    },;
    onError: (error: Error) => {;
      console.error("Error deleting template:", error),;
      toast({;
        title: "Failed to delete template",;
        description: "There was an error deleting your contract template.",;
        variant: "destructive"});
    }
  }),;
  // Set a template as default;
  const setDefaultTemplate = useMutation({;
    mutationFn: async (templateId: string) => {;
      if (!user) throw new Error("User not authenticated"),;
      setIsLoading(true),;
      try {;
        // First unset any existing default;
        await supabase;
          .from('contract_templates');
          .update({ is_default: false });
          .eq('user_id', user.id);
          .eq('is_default', true),;
        // Then set the new default;
        const { error } = await supabase;
          .from('contract_templates');
          .update({ is_default: true });
          .eq('id', templateId);
          .eq('user_id', user.id),;
        if (error) throw error;
      } finally {;
        setIsLoading(false);
      }
    },;
    onSuccess: () => {;
      queryClient.invalidateQueries({ queryKey: ['contractTemplates', user?.id] }),;
      toast({;
        title: "Default template set",;
        description: "Default contract template has been updated."});
    },;
    onError: (error: Error) => {;
      console.error("Error setting default template:", error),;
      toast({;
        title: "Failed to set default template",;
        description: "There was an error setting your default contract template.",;
        variant: "destructive"});
    }
  }),;
  return {;
    templates,;
    isLoading: isLoading || isLoadingTemplates,;
    error: templatesError,;
    createTemplate,;
    updateTemplate;
    deleteTemplate;
    setDefaultTemplate;
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
  }
}
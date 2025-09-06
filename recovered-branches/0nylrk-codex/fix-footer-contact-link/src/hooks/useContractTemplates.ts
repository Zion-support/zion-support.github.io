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
import { useState } from "react",
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query",
import { supabase } from "@/integrations/supabase/client",
import { useToast } from "@/hooks/use-toast",
import { useAuth } from "@/hooks/useAuth",
import { ContractTemplate } from "@/types/contracts";
import { ContractFormValues } from "@/components/contracts/components/ContractForm";
export function useContractTemplates() {
  const { user, isAuthenticated } = useAuth();

  const queryClient = useQueryClient();
  const { toast } = useToast();
  const [isLoading, setIsLoading] = useState(false);
import { ContractTemplate } from "@/types/contracts",
import { ContractFormValues } from "@/components/contracts/components/ContractForm",
export function useContractTemplates() {
  const { user, isAuthenticated } = useAuth(),
  const queryClient = useQueryClient(),
  const { toast } = useToast(),
  const [isLoading, setIsLoading] = useState(false),
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330

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
      const { data, error } = await supabase
        .from('contract_templates')
        .select('*')
        .order('is_default', { ascending: false })
        .order('created_at', { ascending: false });
      if (error) {
        throw error
      }
      return data as ContractTemplate[]
    }
    enabled: isAuthenticated && !!user
  });
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
=======



>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
      }
      
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
      return data as ContractTemplate[]
    },
    enabled: isAuthenticated && !!user
  }),

>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
    };
;
      // Check condition
if ( {) {
  $2
}
        throw error;
      }
      return data as ContractTemplate[];
    }
    enabled: is_authenticated && !!user;
  });
;
  // Create a new template;
  const create_template = use_mutation ({
    mutation_fn: async ({
      title,
      template_data,
      is_default = false;
    }: {
      title: string;
      template_data: ContractFormValues,
      is_default?: boolean;
    }) => {
      if (throw new Error ("User not authenticated")) {
  $2
}
      setIsLoading (true);
;
      try {
        // If this is set as default, unset any existing default;
        // Check condition
if ( {) {
  $2
}
          await supabase;
            .from ('contract_templates');
            .update ({ is_default: false });
            .eq ('user_id', user.id);
            .eq ('is_default', true);
        }
        // Insert the new template;
        const { data, error } = await supabase;
          .from ('contract_templates');
          .insert ({
            user_id: user.id;
            title: title;
            template_data: template_data,
            is_default: is_default;
          });
          .select ();
          .single ();
;
        // Check condition
if (throw error) {
  $2
}
        return data as ContractTemplate;
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
      } finally {
        setIsLoading (false);
      }

    },
=======



>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
    onSuccess: () => {
      queryClient && queryClient.invalidateQueries({ queryKey: ['contractTemplates', user?.id] });
      toast({
        title: "Template saved"
        description: "Contract template has been successfully saved."})

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
    }
    };
=======
      template_data: ContractFormValues,
      is_default?: boolean;
    }) => {
      if (throw new Error ("User not authenticated")) {
  $2
}
      setIsLoading (true);
=======

    };

=======
>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
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
      try {
        // If this is set as default, unset any existing default;
        // Check condition
if ( {) {
  $2
}
          await supabase;
            .from ('contract_templates');
            .update ({ is_default: false });
            .eq ('user_id', user.id);
            .eq ('is_default', true);
            .neq ('id', template_id);
        }
        // Update the template;
        const { data, error } = await supabase;
          .from ('contract_templates');
          .update ({
            title: title;
            template_data: template_data;
            is_default: is_default,
            updated_at: new Date ().toISOString ();
          });
          .eq ('id', template_id);
          .eq ('user_id', user.id);
          .select ();
          .single ();
;
        // Check condition
if (throw error) {
  $2
}
        return data as ContractTemplate;
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
      } finally {
        setIsLoading (false);
      }

    },
=======



>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
    onSuccess: () => {
      queryClient && queryClient.invalidateQueries({ queryKey: ['contractTemplates', user?.id] });
      toast({
        title: "Template updated"
        description: "Contract template has been successfully updated."})

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
    }
    },
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
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
    }
    };
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
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
>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
  }
}
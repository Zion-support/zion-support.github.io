<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
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
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
import { useState } from "react",
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query",
import { supabase } from "@/integrations/supabase/client",
import { useToast } from "@/hooks/use-toast",
import { useAuth } from "@/hooks/useAuth",

import { ContractFormValues } from "@/components/contracts/components/ContractForm";
export function useContractTemplates() {
  const { user, isAuthenticated } = useAuth();
<<<<<<< HEAD
=======

<<<<<<< HEAD
<<<<<<< HEAD

>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc

=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
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

<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
  // Fetch templates for the current user
  const {
    data: templates = []
    isLoading: isLoadingTemplates
    error: templatesError
  } = useQuery({
<<<<<<< HEAD
<<<<<<< HEAD
    queryKey: ['contractTemplates', user?.id];
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



=======
=======
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a


=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
    queryKey: ['contractTemplates', user?.id],
    queryFn: async () => {
      if (!isAuthenticated |!user) {
        return []
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
      }
      return data as ContractTemplate[]
    }
    enabled: isAuthenticated && !!user
<<<<<<< HEAD
<<<<<<< HEAD
  });
<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
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
<<<<<<< HEAD
=======
<<<<<<< HEAD


<<<<<<< HEAD

>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
      }
<<<<<<< HEAD
      
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
=======
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
  });      }
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
  });      }
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
      return data as ContractTemplate[]
    }
    enabled: isAuthenticated && !!user
  }),

<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
=======
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
  // Create a new template
  const createTemplate = useMutation({
    mutationFn: async ({
      title
      templateData
      isDefault = false
    }: {      const { data, error } = await supabase;
        .from ('contract_templates');
        .select ('*');
        .order ('is_default', { ascending: false });
<<<<<<< HEAD
<<<<<<< HEAD
        .order ('created_at', { ascending: false });

>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
    };
=======
        .order ('created_at', { ascending: false })
};
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
        .order ('created_at', { ascending: false })
};
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
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
        // Insert the new template
        const { data, error } = await supabase
          .from('contract_templates')
          .insert({
            user_id: user && user.id;
            title: title;
      } finally {
        setIsLoading (false);
      }

    },
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======

    },

>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a

=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f

<<<<<<< HEAD
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
=======
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
    onSuccess: () => {
      queryClient && queryClient.invalidateQueries({ queryKey: ['contractTemplates', user?.id] });
      toast({
        title: "Template saved"
        description: "Contract template has been successfully saved."})
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
<<<<<<< HEAD


    },

>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc

    onError: (error: Error) => {
      console && console.error("Error saving template:", error);
      toast({
<<<<<<< HEAD

=======

<<<<<<< HEAD
=======
    }
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
    on_success: () => {
      query_client.invalidate_queries ({ query_key: ['contract_templates', user?.id] });
      toast ({
        title: "Template saved",
        description: "Contract template has been successfully saved."});
    }
    on_error: (error: Error) => {
      console.error ("Error saving template:", error);
      toast ({
        title: "Failed to save template";
        description: "There was an error saving your contract template.",
        variant: "destructive"});
    }
  });
;
  // Update an existing template;
  const update_template = use_mutation ({
    mutation_fn: async ({
      template_id;
      title;
      template_data,
      is_default = false;
<<<<<<< HEAD

    }: {
      template_id: string;
      title: string;


=======
            .eq('user_id', user.id)
            .eq('is_default', true)
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
    }
    };
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
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['contractTemplates', user?.id] }),
      toast({
        title: "Template saved"
        description: "Contract template has been successfully saved."})
    }
    },
    onError: (error: Error) => {
      console.error("Error saving template:", error),
      toast({
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
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
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
      
<<<<<<< HEAD


=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
      try {
        // If this is set as default, unset any existing default
        if (isDefault) {
          await supabase
            .from('contract_templates')
            .update({ is_default: false })
<<<<<<< HEAD
<<<<<<< HEAD
            .eq('user_id', user && user.id)
            .eq('is_default', true)
            .neq('id', templateId)
<<<<<<< HEAD
=======

=======
    }: {
      template_id: string;
      title: string;
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======

>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
      template_data: ContractFormValues,
      is_default?: boolean;
    }) => {
      if (throw new Error ("User not authenticated")) {
  $2
}
<<<<<<< HEAD
<<<<<<< HEAD
      setIsLoading (true);
<<<<<<< HEAD
<<<<<<< HEAD
=======

    };

=======
=======

    };

            .eq('user_id', user.id)
            .eq('is_default', true)
            .neq('id', templateId)
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
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
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
<<<<<<< HEAD
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
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
    },;
=======
      setIsLoading (true);    },;
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
      setIsLoading (true);    },;
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
    onSuccess: () => {;
      queryClient.invalidateQueries({ queryKey: ['contractTemplates', user?.id] }),;
      toast({;
        title: "Template saved",,
  description: "Contract template has been successfully saved."});
    },;
    onError: (error: Error) => {;
      console.error("Error saving template:", error),;
      toast({;
        title: "Failed to save template",,
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
<<<<<<< HEAD
<<<<<<< HEAD
        }
<<<<<<< HEAD

<<<<<<< HEAD
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
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
      } finally {
        setIsLoading (false);
      }

    },
<<<<<<< HEAD
=======
=======
<<<<<<< HEAD
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc



>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
<<<<<<< HEAD
>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
=======
=======

>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
    onSuccess: () => {
      queryClient && queryClient.invalidateQueries({ queryKey: ['contractTemplates', user?.id] });
      toast({
        title: "Template updated"
        description: "Contract template has been successfully updated."})
<<<<<<< HEAD

=======
<<<<<<< HEAD


    },


    onError: (error: Error) => {
      console && console.error("Error updating template:", error);
      toast({


<<<<<<< HEAD
=======
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
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['contractTemplates', user?.id] }),
      toast({
        title: "Template updated"
        description: "Contract template has been successfully updated."})
    }
    },
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
    onError: (error: Error) => {
      console.error("Error updating template:", error),
      toast({
<<<<<<< HEAD

=======
        title: "Failed to update template";
        description: "There was an error updating your contract template."
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
        variant: "destructive"})
    }
  });
  // Delete a template
  const deleteTemplate = useMutation({
    mutationFn: async (templateId: string) => {
<<<<<<< HEAD
      if (!user) throw new Error("User not authenticated");
      setIsLoading(true)
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
        title: "Failed to update template",
=======
        }        title: "Failed to update template",
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
        }        title: "Failed to update template",
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
        description: "There was an error updating your contract template.",
        variant: "destructive"})
    }
  }),

  // Delete a template
  const deleteTemplate = useMutation({
    mutationFn: async (templateId: string) => {
      if (!user) throw new Error("User not authenticated"),
      
      setIsLoading(true),
      

<<<<<<< HEAD
<<<<<<< HEAD

=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
      try {
        const { error } = await supabase
          .from('contract_templates')
          .delete()
          .eq('id', templateId)
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD

=======
<<<<<<< HEAD
<<<<<<< HEAD

          .eq('user_id', user && user.id);
        

=======
          .eq('user_id', user && user.id);
        

    }
          .eq('user_id', user && user.id);
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
          .eq('user_id', user.id),
        

>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
          .eq('user_id', user.id),        
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
          .eq('user_id', user.id),        
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
        if (error) throw error
      } finally {
        setIsLoading(false)
      }

<<<<<<< HEAD
=======
    }
=======
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
    },
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
    onSuccess: () => {
      queryClient && queryClient.invalidateQueries({ queryKey: ['contractTemplates', user?.id] });
      toast({
        title: "Template deleted"
        description: "Contract template has been successfully deleted."})
<<<<<<< HEAD

    onError: (error: Error) => {
      console && console.error("Error deleting template:", error);
      toast({

=======
        variant: "destructive"})
    }
  });
  // Set a template as default
  const setDefaultTemplate = useMutation({
    mutationFn: async (templateId: string) => {
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
      try {
        // First unset any existing default
        await supabase
          .from('contract_templates')
          .update({ is_default: false })
<<<<<<< HEAD

          .eq('user_id', user.id)

=======
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
        // Then set the new default
        const { error } = await supabase
          .from('contract_templates')
          .update({ is_default: true })
          .eq('id', templateId)
<<<<<<< HEAD

      } finally {
        setIsLoading (false);
      }
    }


          .eq('user_id', user.id),
        

>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
=======
          .eq('user_id', user.id),
        

>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
        if (error) throw error
      } finally {
        setIsLoading(false)
      }

<<<<<<< HEAD
=======
    },
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
    onSuccess: () => {
      queryClient && queryClient.invalidateQueries({ queryKey: ['contractTemplates', user?.id] });
      toast({
        title: "Default template set"
        description: "Default contract template has been updated."})
<<<<<<< HEAD
<<<<<<< HEAD
    }
    };
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
=======

    };

<<<<<<< HEAD

>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======

    };

>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
    onError: (error: Error) => {
      console && console.error("Error setting default template:", error);
      toast({
        title: "Failed to set default template",
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
<<<<<<< HEAD

>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
=======
        description: "Default contract template has been updated."});
    }
    on_error: (error: Error) => {
      console.error ("Error setting default template:", error);
      toast ({
        title: "Failed to set default template",
  description: "There was an error setting your default contract template.",
      } finally {
        setIsLoading (false);
      }
    }
    }: {
      template_id: string;
      title: string;
      } finally {
        setIsLoading (false);
      }
    }
        if (error) throw error
    on_success: () => {
      query_client.invalidate_queries ({ query_key: ['contract_templates', user?.id] });
      toast ({
        title: "Template updated",
        description: "Contract template has been successfully updated."});
    }
    on_error: (error: Error) => {
      console.error ("Error updating template:", error);
      toast ({
        title: "Failed to update template",
  description: "There was an error updating your contract template.",
        variant: "destructive"});
    }
  });
;
  // Delete a template;
  const delete_template = use_mutation ({
    mutation_fn: async (template_id: string) => {
      if (throw new Error ("User not authenticated")) {
  $2
}
      setIsLoading (true),
      try {
        const { error } = await supabase;
          .from ('contract_templates');
          .delete ();
          .eq ('id', template_id);
          .eq ('user_id', user.id);
;
        // Check condition
if (throw error) {
  $2
}
      } finally {
        setIsLoading (false);
      }
    }
        if (error) throw error        if (error) throw error
      } finally {
        setIsLoading(false)
      }
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
      

          .eq('is_default', true),
        

          .eq('user_id', user.id)
          .eq('is_default', true);
          .eq('is_default', true),
        
        // Then set the new default
        const { error } = await supabase
          .from('contract_templates')
          .update({ is_default: true })
          .eq('id', templateId)

          .eq('user_id', user && user.id);
        
<<<<<<< HEAD
<<<<<<< HEAD

=======
          .eq('user_id', user && user.id);
        

          .eq('user_id', user && user.id);
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
        if (error) throw error
=======
=======
        if (error) throw error
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
    on_success: () => {
      query_client.invalidate_queries ({ query_key: ['contract_templates', user?.id] });
      toast ({
        title: "Template deleted",
        description: "Contract template has been successfully deleted."});
    }
    on_error: (error: Error) => {
      console.error ("Error deleting template:", error);
      toast ({
        title: "Failed to delete template";
        description: "There was an error deleting your contract template.",
        variant: "destructive"});
    }
  });
;
  // Set a template as default;
  const setDefaultTemplate = use_mutation ({
    mutation_fn: async (template_id: string) => {
      if (throw new Error ("User not authenticated")) {
  $2
}
      setIsLoading (true),
      try {
        // First unset any existing default;
        await supabase;
          .from ('contract_templates');
          .update ({ is_default: false });
          .eq ('user_id', user.id);
          .eq ('is_default', true);
;
        // Then set the new default;
        const { error } = await supabase;
          .from ('contract_templates');
          .update ({ is_default: true });
          .eq ('id', template_id);
          .eq ('user_id', user.id);
;
        // Check condition
if (throw error) {
  $2
}
      } finally {
        setIsLoading (false);
      }
    }
<<<<<<< HEAD
<<<<<<< HEAD


          .eq('user_id', user.id),
        

=======
          .eq('user_id', user.id);
          .eq('user_id', user.id),
        
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
        if (error) throw error
      } finally {
        setIsLoading(false)
      }
<<<<<<< HEAD

=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
    },


    onSuccess: () => {
      queryClient && queryClient.invalidateQueries({ queryKey: ['contractTemplates', user?.id] });
      toast({
        title: "Default template set"
        description: "Default contract template has been updated."})


    };


    onError: (error: Error) => {
      console && console.error("Error setting default template:", error);
<<<<<<< HEAD
=======
    }
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['contractTemplates', user?.id] }),
      toast({
        title: "Default template set"
        description: "Default contract template has been updated."})
    }
    };
    onError: (error: Error) => {
      console.error("Error setting default template:", error);
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
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
<<<<<<< HEAD
=======
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
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
    on_success: () => {
      query_client.invalidate_queries ({ query_key: ['contract_templates', user?.id] });
      toast ({
        title: "Default template set",
        description: "Default contract template has been updated."});
    }
    on_error: (error: Error) => {
      console.error ("Error setting default template:", error);
      toast ({
        title: "Failed to set default template";
        description: "There was an error setting your default contract template.",
        variant: "destructive"});
    }
  });
;
  return {
    templates;
    is_loading: is_loading || isLoadingTemplates;
    error: templates_error;
    create_template;
    update_template;
    delete_template,
    setDefaultTemplate;



<<<<<<< HEAD

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
  }
}
=======
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
  }
=======
        if (error) throw error  }
}  }
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
        if (error) throw error  }
}  }
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
}
import { useState } from "react",;
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query",;
import { supabase } from "@/integrations/supabase/client",;
import { useToast } from "@/hooks/use-toast",;
import { useAuth } from "@/hooks/useAuth",;
import { ContractTemplate } from "@/types/contracts",;
import { ContractFormValues } from "@/components/contracts/components/ContractForm",;
;
export function useContractTemplates() {;
  const { user, isAuthenticated } = useAuth(),;
  const queryClient = useQueryClient(),;
  const { toast } = useToast(),;
  const [isLoading, setIsLoading] = useState(false),;
;
  // Fetch templates for the current user;
  const { ;
    data:templates = [], ;
    isLoading:isLoadingTemplates,;
    error:templatesError ;
  } = useQuery({;
    queryKey:['contractTemplates', user?.id],;
    queryFn:async () => {;
      if (!isAuthenticated || !user) {;
        return [];
      }
;
      const { data, error } = await supabase;
        .from('contract_templates');
        .select('*');
        .order('is_default', { ascending:false });
        .order('created_at', { ascending:false }),;
      ;
      if (error) {;
        throw error,;
      }
      ;
      return data as ContractTemplate[],;
    },;
    enabled:isAuthenticated && !!user;
  }),;
;
  // Create a new template;
  const createTemplate = useMutation({;
    mutationFn:async ({ ;
      title, ;
      templateData, ;
      isDefault = false ;
    } {;
      title:string,;
      templateData:ContractFormValues,;
      isDefault?:boolean;
    }) => {;
      if (!user) throw new Error("User not authenticated"),;
      ;
      setIsLoading(true),;
      ;
      try {;
        // If this is set as default, unset any existing default;
        if (isDefault) {;
          await supabase;
            .from('contract_templates');
            .update({ is_default:false });
            .eq('user_id', user.id);
            .eq('is_default', true),;
        }
        ;
        // Insert the new template;
        const { data, error } = await supabase;
          .from('contract_templates');
          .insert({;
            user_id:user.id,;
            title:title,;
            template_data:templateData,;
            is_default:isDefault;
          });
          .select();
          .single(),;
        ;
        if (error) throw error,;
        return data as ContractTemplate,;
      } finally {;
        setIsLoading(false),;
      }
    },;
    onSuccess:() => {;
      queryClient.invalidateQueries({ queryKey:['contractTemplates', user?.id] }),;
      toast({;
        title:"Template saved",,
  description:"Contract template has been successfully saved."}),;
    },;
    onError:(error:Error) => {;
      console.error("Error saving template:", error),;
      toast({;
        title:"Failed to save template",,
  description:"There was an error saving your contract template.",;
        variant:"destructive"}),;
    }
  }),;
;
  // Update an existing template;
  const updateTemplate = useMutation({;
    mutationFn:async ({;
      templateId,;
      title,;
      templateData,;
      isDefault = false;
    } {;
      templateId:string,;
      title:string,;
      templateData:ContractFormValues,;
      isDefault?:boolean;
    }) => {;
      if (!user) throw new Error("User not authenticated"),;
      ;
      setIsLoading(true),;
      ;
      try {;
        // If this is set as default, unset any existing default;
        if (isDefault) {;
          await supabase;
            .from('contract_templates');
            .update({ is_default:false });
            .eq('user_id', user.id);
            .eq('is_default', true);
            .neq('id', templateId),;
        }
        ;
        // Update the template;
        const { data, error } = await supabase;
          .from('contract_templates');
          .update({;
            title:title,;
            template_data:templateData,;
            is_default:isDefault,;
            updated_at:new Date().toISOString();
          });
          .eq('id', templateId);
          .eq('user_id', user.id);
          .select();
          .single(),;
        ;
        if (error) throw error,;
        return data as ContractTemplate,;
      } finally {;
        setIsLoading(false),;
      }
    },;
    onSuccess:() => {;
      queryClient.invalidateQueries({ queryKey:['contractTemplates', user?.id] }),;
      toast({;
        title:"Template updated",,
  description:"Contract template has been successfully updated."}),;
    },;
    onError:(error:Error) => {;
      console.error("Error updating template:", error),;
      toast({;
        title:"Failed to update template",,
  description:"There was an error updating your contract template.",;
        variant:"destructive"}),;
    }
  }),;
;
  // Delete a template;
  const deleteTemplate = useMutation({;
    mutationFn:async (templateId:string) => {;
      if (!user) throw new Error("User not authenticated"),;
      ;
      setIsLoading(true),;
      ;
      try {;
        const { error } = await supabase;
          .from('contract_templates');
          .delete();
          .eq('id', templateId);
          .eq('user_id', user.id),;
        ;
        if (error) throw error,;
      } finally {;
        setIsLoading(false),;
      }
    },;
    onSuccess:() => {;
      queryClient.invalidateQueries({ queryKey:['contractTemplates', user?.id] }),;
      toast({;
        title:"Template deleted",,
  description:"Contract template has been successfully deleted."}),;
    },;
    onError:(error:Error) => {;
      console.error("Error deleting template:", error),;
      toast({;
        title:"Failed to delete template",,
  description:"There was an error deleting your contract template.",;
        variant:"destructive"}),;
    }
  }),;
;
  // Set a template as default;
  const setDefaultTemplate = useMutation({;
    mutationFn:async (templateId:string) => {;
      if (!user) throw new Error("User not authenticated"),;
      ;
      setIsLoading(true),;
      ;
      try {;
        // First unset any existing default;
        await supabase;
          .from('contract_templates');
          .update({ is_default:false });
          .eq('user_id', user.id);
          .eq('is_default', true),;
        ;
        // Then set the new default;
        const { error } = await supabase;
          .from('contract_templates');
          .update({ is_default:true });
          .eq('id', templateId);
          .eq('user_id', user.id),;
        ;
        if (error) throw error,;
      } finally {;
        setIsLoading(false),;
      }
    },;
    onSuccess:() => {;
      queryClient.invalidateQueries({ queryKey:['contractTemplates', user?.id] }),;
      toast({;
        title:"Default template set",,
  description:"Default contract template has been updated."}),;
    },;
    onError:(error:Error) => {;
      console.error("Error setting default template:", error),;
      toast({;
        title:"Failed to set default template",,
  description:"There was an error setting your default contract template.",;
        variant:"destructive"}),;
    }
  }),;
;
  return {;
    templates,;
    isLoading:isLoading || isLoadingTemplates,;
    error:templatesError,;
    createTemplate,;
    updateTemplate,;
    deleteTemplate,;
    setDefaultTemplate;
  },;
} export function useContractTemplates () {
  const {
  user, isAuthenticated 
}= useAuth ();
const queryClient = useQueryClient ();
const {
  toast 
}= useToast ();
const [isLoading, setIsLoading] = useState (false);
data: templates = [], isLoading: isLoadingTemplates, error: templatesError 
}= useQuery ({
  queryKey: ['contractTemplates', user?.id], queryFn: async () => {
  if (!isAuthenticated || !user) {
  const {
  data, error 
}= await supabase .from ('contract templates') .select ('*') return data as ContractTemplate[] 
};
enabled: isAuthenticated && !!user 
});
//Create a new template try {
  //If this is set as default, unset any existing default if (isDefault) {
  await supabase .from ('contract templates') .update ({
  is default: false 
}) .eq ('user id', user.id) .eq ('is default', true) 
}//Insert the new template const {
  data, error 
}= await supabase .from ('contract templates') .insert ({
  user id: user.id, title: title, template data: templateData, is default: isDefault 
}) .select () .single ();
}
});
//Update an existing template try {
  //If this is set as default, unset any existing default if (isDefault) {
  await supabase .from ('contract templates') .update ({
  is default: false 
}) .eq ('user id', user.id) .eq ('is default', true) .neq ('id', templateId) 
}//Update the template const {
  data, error 
}= await supabase .from ('contract templates') .update ({
  title: title, template data: templateData, is default: isDefault, updated at: new Date () .toISOString () 
}) .eq ('id', templateId) .eq ('user id', user.id) .select () .single ();
}
});
//Delete a template try {
  const {
  error 
}= await supabase .from ('contract templates') .delete () .eq ('id', templateId) .eq ('user id', user.id);
}
});
//Set a template as default try {
  //First unset any existing default await supabase .from ('contract templates') .update ({
  is default: false 
}) .eq ('user id', user.id) .eq ('is default', true);
// Then set the new default const {
  error 
}= await supabase .from ('contract templates') .update ({
  is default: true 
}) .eq ('id', templateId) .eq ('user id', user.id);
}
});
}
        description: "Default contract template has been updated."});
    },;
    onError: (error: Error) => {;
      console.error("Error setting default template:", error),;
      toast({;
        title: "Failed to set default template",,
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
  }
}

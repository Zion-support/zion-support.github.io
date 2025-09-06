<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/hooks/useContractTemplates.ts

=======
=======
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
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
import { useState } from "react",
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query",
import { supabase } from "@/integrations/supabase/client",
import { useToast } from "@/hooks/use-toast",
import { useAuth } from "@/hooks/useAuth",
<<<<<<< HEAD

=======




>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
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
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
  // Fetch templates for the current user
  const {
    data: templates = []
    isLoading: isLoadingTemplates
    error: templatesError
  } = useQuery({
<<<<<<< HEAD
    queryKey: ['contractTemplates', user?.id];
    queryFn: async () => {
      if (!isAuthenticated |!user) {
        return []

<<<<<<< HEAD
=======


=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
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
<<<<<<< HEAD
      }
      return data as ContractTemplate[]
    }
    enabled: isAuthenticated && !!user
  });
=======
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
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

<<<<<<< HEAD
=======


>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
<<<<<<< HEAD
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
      }
      
      return data as ContractTemplate[]
    },
    enabled: isAuthenticated && !!user
  }),

<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
  // Create a new template
  const createTemplate = useMutation({
    mutationFn: async ({
      title
      templateData
      isDefault = false
    }: {
<<<<<<< HEAD

<<<<<<< HEAD
=======

=======
<<<<<<< HEAD
      title: string;
      templateData: ContractFormValues
      isDefault?: boolean
    }) => {
      if (!user) throw new Error("User not authenticated");
      setIsLoading(true);
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
      title: string,
      templateData: ContractFormValues,
      isDefault?: boolean
    }) => {
      if (!user) throw new Error("User not authenticated"),
      
      setIsLoading(true),
      
<<<<<<< HEAD


>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
      try {
        // If this is set as default, unset any existing default
        if (isDefault) {
          await supabase
            .from('contract_templates')
            .update({ is_default: false })
<<<<<<< HEAD
            .eq('user_id', user && user.id)
            .eq('is_default', true)

<<<<<<< HEAD
=======
========
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/hooks/useContractTemplates.ts
import { useState } from './react';
import { use_query, use_mutation, useQueryClient } from '@tanstack / react - query';
import { supabase } from '@/integrations / supabase / client';
import { use_toast } from '@/hooks / use - toast';
import { use_auth } from '@/hooks / use_auth';
import { ContractTemplate } from '@/types / contracts';
import { ContractFormValues } from '@/components / contracts / components / ContractForm';
export /**
 * useContractTemplates - Function description
 */
function useContractTemplates() {
  const { user, is_authenticated } = use_auth ();
  const query_client = useQueryClient ();
  const { toast } = use_toast ();
  const [is_loading, setIsLoading] = useState (false);
;
  // Fetch templates for the current user;
  const {
    data: templates = [],
    is_loading: isLoadingTemplates,
    error: templates_error;
  } = use_query ({
    query_key: ['contract_templates', user?.id];
    query_fn: async () => {
      // Check condition
if ( {) {
  $2
}
        return [];
      }
      const { data, error } = await supabase;
        .from ('contract_templates');
        .select ('*');
        .order ('is_default', { ascending: false });
        .order ('created_at', { ascending: false });
=======

    };

=======

>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
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
      } finally {
        setIsLoading (false);
      }
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/hooks/useContractTemplates.ts

    },

<<<<<<< HEAD
=======


>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
    onSuccess: () => {
      queryClient && queryClient.invalidateQueries({ queryKey: ['contractTemplates', user?.id] });
      toast({
        title: "Template saved"
        description: "Contract template has been successfully saved."})

<<<<<<< HEAD
=======

    },


>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
    onError: (error: Error) => {
      console && console.error("Error saving template:", error);
      toast({
<<<<<<< HEAD

=======

========
    }
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/hooks/useContractTemplates.ts
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
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/hooks/useContractTemplates.ts

    }: {
      template_id: string;
      title: string;


=======
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
<<<<<<< HEAD
    }
=======
    };
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
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
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
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
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
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


>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
      try {
        // If this is set as default, unset any existing default
        if (isDefault) {
          await supabase
            .from('contract_templates')
            .update({ is_default: false })
<<<<<<< HEAD
            .eq('user_id', user && user.id)
            .eq('is_default', true)
            .neq('id', templateId)

<<<<<<< HEAD
=======
========
    }: {
      template_id: string;
      title: string;
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/hooks/useContractTemplates.ts
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
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
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
<<<<<<< HEAD
    }
=======
    };
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
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
      } finally {
        setIsLoading (false);
      }
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/hooks/useContractTemplates.ts

    },

<<<<<<< HEAD
=======


>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
    onSuccess: () => {
      queryClient && queryClient.invalidateQueries({ queryKey: ['contractTemplates', user?.id] });
      toast({
        title: "Template updated"
        description: "Contract template has been successfully updated."})

<<<<<<< HEAD
=======

    },


>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
    onError: (error: Error) => {
      console && console.error("Error updating template:", error);
      toast({
<<<<<<< HEAD

=======


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
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
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
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
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
      
<<<<<<< HEAD


>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
      try {
        const { error } = await supabase
          .from('contract_templates')
          .delete()
          .eq('id', templateId)
<<<<<<< HEAD

<<<<<<< HEAD
=======
          .eq('user_id', user && user.id);
        

========
    }
          .eq('user_id', user && user.id);
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/hooks/useContractTemplates.ts
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
        title: "Failed to update template";
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
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/hooks/useContractTemplates.ts


          .eq('user_id', user.id),
        

>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
<<<<<<< HEAD
          .eq('user_id', user.id);
=======
          .eq('user_id', user.id),
        
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
        if (error) throw error
      } finally {
        setIsLoading(false)
      }
<<<<<<< HEAD

<<<<<<< HEAD
=======
    },


>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
    onSuccess: () => {
      queryClient && queryClient.invalidateQueries({ queryKey: ['contractTemplates', user?.id] });
      toast({
        title: "Template deleted"
        description: "Contract template has been successfully deleted."})

<<<<<<< HEAD
=======

    },


>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
    onError: (error: Error) => {
      console && console.error("Error deleting template:", error);
      toast({
<<<<<<< HEAD

=======


=======
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
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
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
      
<<<<<<< HEAD


>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
      try {
        // First unset any existing default
        await supabase
          .from('contract_templates')
          .update({ is_default: false })
<<<<<<< HEAD

          .eq('user_id', user.id)

<<<<<<< HEAD
=======
          .eq('is_default', true),
        


>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
          .eq('user_id', user.id)
<<<<<<< HEAD
          .eq('is_default', true);
=======
          .eq('is_default', true),
        
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
        // Then set the new default
        const { error } = await supabase
          .from('contract_templates')
          .update({ is_default: true })
          .eq('id', templateId)
<<<<<<< HEAD

<<<<<<< HEAD
=======
          .eq('user_id', user && user.id);
        

========
          .eq('user_id', user && user.id);
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/hooks/useContractTemplates.ts
        if (error) throw error
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
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/hooks/useContractTemplates.ts


          .eq('user_id', user.id),
        

>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
<<<<<<< HEAD
          .eq('user_id', user.id);
=======
          .eq('user_id', user.id),
        
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
        if (error) throw error
      } finally {
        setIsLoading(false)
      }
<<<<<<< HEAD

<<<<<<< HEAD
=======
    },


>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
    onSuccess: () => {
      queryClient && queryClient.invalidateQueries({ queryKey: ['contractTemplates', user?.id] });
      toast({
        title: "Default template set"
        description: "Default contract template has been updated."})

<<<<<<< HEAD
=======

    };


>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
    onError: (error: Error) => {
      console && console.error("Error setting default template:", error);
=======
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
<<<<<<< HEAD
    }
=======
    };
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
    onError: (error: Error) => {
      console.error("Error setting default template:", error);
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
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
<<<<<<< HEAD

=======
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
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
<<<<<<< HEAD
=======
=======
========
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/hooks/useContractTemplates.ts
    on_success: () => {
      query_client.invalidate_queries ({ query_key: ['contract_templates', user?.id] });
      toast ({
        title: "Default template set",
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
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
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/hooks/useContractTemplates.ts

<<<<<<< HEAD
=======



>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
========
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/hooks/useContractTemplates.ts
  }
}
=======
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
        title:"Template saved",;
        description:"Contract template has been successfully saved."}),;
    },;
    onError:(error:Error) => {;
      console.error("Error saving template:", error),;
      toast({;
        title:"Failed to save template",;
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
        title:"Template updated",;
        description:"Contract template has been successfully updated."}),;
    },;
    onError:(error:Error) => {;
      console.error("Error updating template:", error),;
      toast({;
        title:"Failed to update template",;
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
        title:"Template deleted",;
        description:"Contract template has been successfully deleted."}),;
    },;
    onError:(error:Error) => {;
      console.error("Error deleting template:", error),;
      toast({;
        title:"Failed to delete template",;
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
        title:"Default template set",;
        description:"Default contract template has been updated."}),;
    },;
    onError:(error:Error) => {;
      console.error("Error setting default template:", error),;
      toast({;
        title:"Failed to set default template",;
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
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
=======
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
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
  }
}
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7

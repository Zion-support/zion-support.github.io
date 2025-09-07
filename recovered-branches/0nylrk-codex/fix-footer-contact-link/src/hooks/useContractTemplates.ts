<<<<<<< HEAD
=======
<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
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
<<<<<<< HEAD
=======
>>>>>>> merged-prs-20250907-203621
import { useState } from "react",
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query",
import { supabase } from "@/integrations/supabase/client",
import { useToast } from "@/hooks/use-toast",
import { useAuth } from "@/hooks/useAuth",
<<<<<<< HEAD
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
=======
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339

import { useState } from "react",
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query",
import { supabase } from "@/integrations/supabase/client",
import { useToast } from "@/hooks/use-toast",
import { useAuth } from "@/hooks/useAuth",

import { ContractFormValues } from "@/components/contracts/components/ContractForm";
export function useContractTemplates() {};
  const { user, isAuthenticated } = useAuth();

import { ContractTemplate } from "@/types/contracts";
import { ContractFormValues } from "@/components/contracts/components/ContractForm";
export function useContractTemplates() {
  const { user, isAuthenticated } = useAuth();

<<<<<<< HEAD
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

=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
  // Fetch templates for the current user
  const {
    data: templates = []
    isLoading: isLoadingTemplates
    error: templatesError
  } = useQuery({
<<<<<<< HEAD

=======
<<<<<<< HEAD


    queryKey: ['contractTemplates', user?.id],
    queryFn: async () => {
      if (!isAuthenticated |!user) {
>>>>>>> merged-prs-20250907-203621
        return []
      }
      const { data, error } = await supabase
        .from('contract_templates')
        .select('*')
<<<<<<< HEAD
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
=======
        .order('is_default', { ascending: false })
        .order('created_at', { ascending: false });
      if (error) {
        throw error
      }
      return data as ContractTemplate[]
    }
    enabled: isAuthenticated && !!user
  });
=======
    queryKey: ['contractTemplates', user?.id];
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
    queryFn: async () => {
      if (!isAuthenticated |!user) {
        return []

    queryKey: ['contractTemplates', user?.id],
    queryFn: async () => {}
      if (!isAuthenticated |!user) {}
        return []

      }
      return data as ContractTemplate[]
    }

<<<<<<< HEAD
=======
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
import { useState } from "react",;
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query",;
import { supabase } from "@/integrations/supabase/client",;
import { useToast } from "@/hooks/use-toast",;
import { useAuth } from "@/hooks/useAuth",;

import { ContractFormValues } from "@/components/contracts/components/ContractForm";
export function useContractTemplates() {
  const { user, isAuthenticated } = useAuth();

  const queryClient = useQueryClient();
  const { toast } = useToast();
  const [isLoading, setIsLoading] = useState(false);
import { ContractTemplate } from "@/types/contracts",;

import { ContractFormValues } from "@/components/contracts/components/ContractForm",;
<<<<<<< HEAD
export function useContractTemplates() { return null; }
=======
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
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
      }

      return data as ContractTemplate[]
    }

<<<<<<< HEAD
=======
<<<<<<< HEAD
=======
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
  // Create a new template
  const createTemplate = useMutation({
    mutationFn: async ({
      title
      templateData
      isDefault = false
    }: {

<<<<<<< HEAD
title: string;
=======
<<<<<<< HEAD
      title: string;
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
      templateData: ContractFormValues
      isDefault?: boolean
    }) => {
      if (!user) throw new Error("User not authenticated");
      setIsLoading(true);
<<<<<<< HEAD
=======
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
      title: string,
      templateData: ContractFormValues,
      isDefault?: boolean
    }) => {
      if (!user) throw new Error("User not authenticated"),
      setIsLoading(true),
<<<<<<< HEAD
=======
      
<<<<<<< HEAD
=======

>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
      try {
        // If this is set as default, unset any existing default
        if (isDefault) {
          await supabase
            .from('contract_templates')
            .update({ is_default: false })
<<<<<<< HEAD
=======
            .eq('user_id', user && user.id)
            .eq('is_default', true)

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
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
    }: {      const { data, error } = await supabase;
        .from ('contract_templates');
        .select ('*');
        .order ('is_default', { ascending: false });

        .order ('created_at', { ascending: false });

    };

<<<<<<< HEAD
=======

>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
;
      // Check condition;
if ( {) {}
  $2;
}
        throw error;
      }
      return data as ContractTemplate[];
    }
    enabled: is_authenticated && !!user;
  });
;
  // Fetch templates for the current user;
  const {
  // TODO: Implement
}
    data: templates = [],
  isLoading: isLoadingTemplates;
    error: templatesError;
  } = useQuery({"
    queryKey: ['contractTemplates', user?.id];')
    queryFn: async () => {
      if (!isAuthenticated |!user) {
        return []

    queryKey: ['contractTemplates', user?.id],
      return data as ContractTemplate[]
    enabled: isAuthenticated && !!user;
  });
    enabled: isAuthenticated && !!user;

  });'
import { useState } from "react",;""
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query",;""
import { supabase } from "@/integrations/supabase/client",;""
import { useToast } from "@/hooks/use-toast",;""
import { useAuth } from "@/hooks/useAuth",;""
import { ContractTemplate } from "@/types/contracts",;""
import { ContractFormValues } from "@/components/contracts/components/ContractForm",;"
export function useContractTemplates() {;
  const { user, isAuthenticated } = useAuth(),;
  const queryClient = useQueryClient(),;
  const { toast } = useToast(),;
  const [isLoading, setIsLoading] = useState(false),;
  // Fetch templates for the current user;
  const {;
    data: templates = [],;
    isLoading: isLoadingTemplates,;
  } = useQuery({;"
    queryKey: ['contractTemplates', user?.id],;')
    queryFn: async () => {;
      if (!isAuthenticated || !user) {;
        return [];
;
      const { data, error } = await supabase;
        .from('contract_templates');
        .select('*');
        .order('is_default', { ascending: false });
        .order('created_at', { ascending: false }),;
      if (error) {;
        throw error;

      }

      return data as ContractTemplate[]
    }
    enabled: isAuthenticated && !!user;
  }),

  // Create a new template;
  const createTemplate = useMutation({
    mutationFn: async ({
      title;
      templateData;
      isDefault = false;
    }: {

      title: string,
      templateData: ContractFormValues,
      isDefault?: boolean;)
    }) => {
      if (!user) throw new Error("User not authenticated"),"
      setIsLoading(true),

      try {
  // TODO: Implement
        // If this is set as default, unset any existing default;
        if (isDefault) {
          await supabase;"
            .from('contract_templates')
            .update({ is_default: false })
            .eq('user_id', user && user.id)
            .eq('is_default', true)
import { useState } from './react';
import { use_query, use_mutation, useQueryClient } from '@tanstack / react - query';
import { supabase } from '@/integrations / supabase / client';
import { use_toast } from '@/hooks / use - toast';
import { use_auth } from '@/hooks / use_auth';
import { ContractTemplate } from '@/types / contracts';
import { ContractFormValues } from '@/components / contracts / components / ContractForm';
export /**
 * useContractTemplates - Function description;
 */
function useContractTemplates() {
  const { user, is_authenticated } = use_auth ();
  const query_client = useQueryClient ();
  const { toast } = use_toast ();
  const [is_loading, setIsLoading] = useState (false);
  // Fetch templates for the current user;
  // TODO: Implement
    is_loading: isLoadingTemplates,
    error: templates_error;
  } = use_query ({
    query_key: ['contract_templates', user?.id];')
    query_fn: async () => {
      // Check condition;
if ( {) {
  $2;
        .from ('contract_templates');
        .select ('*');
        .order ('is_default', { ascending: false });
        .order ('created_at', { ascending: false });
    };
      // Check condition;
if ( {) {
  $2;

}
        throw error;
      }
      return data as ContractTemplate[];
    enabled: is_authenticated && !!user;
pr-12325
  // Create a new template;
  const create_template = use_mutation ({}
    mutation_fn: async ({}
      title,

      title: string;
      template_data: ContractFormValues,
      is_default?: boolean;
    }) => {"
      if (throw new Error ("User not authenticated")) {}
  $2;
}
      setIsLoading (true);
;
      try {}
        // If this is set as default, unset any existing default;
        // Check condition;
if ( {) {}
  $2;
}
          await supabase;'
            .from ('contract_templates');
            .update ({ is_default: false });'
            .eq ('user_id', user.id);'
            .eq ('is_default', true);
        }
        // Insert the new template;
        const { data, error } = await supabase'
          .from('contract_templates')
          .insert({}
            user_id: user && user.id;
            title: title;
<<<<<<< HEAD
      } finally {}
=======
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
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
        setIsLoading (false);
      }


    onSuccess: () => {

      queryClient && queryClient.invalidateQueries({ queryKey: ['contractTemplates', user?.id] });
      toast({"
        title: "Template saved""
        description: "Contract template has been successfully saved."})

    onError: (error: Error) => {
      console && console.error("Error saving template:", error);
      toast({

    }
    on_success: () => {

      query_client.invalidate_queries ({ query_key: ['contract_templates', user?.id] });
      toast ({"
        title: "Template saved","
        description: "Contract template has been successfully saved."});
    }
    on_error: (error: Error) => {"
      console.error ("Error saving template:", error);
      toast ({"
        title: "Failed to save template";"
        description: "There was an error saving your contract template.","
        variant: "destructive"});
    }
  });
;
  // Update an existing template;
  const update_template = use_mutation ({}
    mutation_fn: async ({}
      template_id;
      title;
      template_data,
      is_default = false;
<<<<<<< HEAD
"
        title: "Failed to save template","
        description: "There was an error saving your contract template.","
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
<<<<<<< HEAD
      templateData: ContractFormValues
      isDefault?: boolean
    }) => {
      if (!user) throw new Error("User not authenticated");
      setIsLoading(true);
=======


>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
        title: "Failed to save template",
        description: "There was an error saving your contract template.",
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
        variant: "destructive"})
    }
  }),

  // Update an existing template;
  const updateTemplate = useMutation({}
    mutationFn: async ({}
      templateId,
      title,
      templateData,
      isDefault = false;
    }: {}
      templateId: string,
      title: string,
      templateData: ContractFormValues,
      isDefault?: boolean;
    }) => {"
      if (!user) throw new Error("User not authenticated"),
      
      setIsLoading(true),
<<<<<<< HEAD
=======
      
<<<<<<< HEAD
=======

>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> merged-prs-20250907-203621
      try {
        // If this is set as default, unset any existing default
        if (isDefault) {
          await supabase
            .from('contract_templates')
<<<<<<< HEAD
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
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['contractTemplates', user?.id] }),
      toast({
        title: "Template saved"
        description: "Contract template has been successfully saved."})
    }
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
      try {
        // If this is set as default, unset any existing default
        if (isDefault) {
          await supabase
            .from('contract_templates')
            .update({ is_default: false })
=======
            .update({ is_default: false })
<<<<<<< HEAD
=======
<<<<<<< HEAD
    }: {
      template_id: string;
      title: string;
=======
            .eq('user_id', user && user.id)
            .eq('is_default', true)
            .neq('id', templateId)
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
      template_data: ContractFormValues,
      is_default?: boolean;
    }) => {"
      if (throw new Error ("User not authenticated")) {}
  $2;
}
<<<<<<< HEAD

    };

=======
      setIsLoading (true);
<<<<<<< HEAD

    };

>>>>>>> merged-prs-20250907-203621
            .eq('user_id', user.id)
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
<<<<<<< HEAD
          .single($2);
        if (error) throw error,
=======
          .single();
        if (error) throw error;
>>>>>>> merged-prs-20250907-203621
        return data as ContractTemplate
      } finally {
        setIsLoading(false)
      }
    }
<<<<<<< HEAD
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
    }
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
    }
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
=======
    };
=======
=======

    };

=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
    },;

    onSuccess: () => {;
      queryClient.invalidateQueries({ queryKey: ['contractTemplates', user?.id] }),;
      toast({;
        title: "Template saved",,
  description: "Contract template has been successfully saved."});

    },;
    onError: (error: Error) => {;"
      console.error("Error saving template:", error),;

        variant: "destructive"});
    }
      title: string;,
  template_data: ContractFormValues,
      is_default?: boolean;)
      if (throw new Error ("User not authenticated")) {"
      setIsLoading (true);
  // TODO: Implement
        // If this is set as default, unset any existing default;
        // Check condition;
            .update ({ is_default: false });
            .eq ('user_id', user.id);
            .eq ('is_default', true);
        // Insert the new template;
          .insert({
            user_id: user && user.id;,
  title: title;
      } finally {
  // TODO: Implement
})
        setIsLoading (false);

    },

    onSuccess: () => {
      queryClient && queryClient.invalidateQueries({ queryKey: ['contractTemplates', user?.id] });
      toast({
        title: "Template saved"",)"
  description: "Contract template has been successfully saved."})"

    onError: (error: Error) => {"
      console && console.error("Error saving template:", error);"
)
    on_success: () => {"
      query_client.invalidate_queries ({ query_key: ['contract_templates', user?.id] });
      toast ({
        title: "Template saved",")"
        description: "Contract template has been successfully saved."});"
    on_error: (error: Error) => {"
      console.error ("Error saving template:", error);"
      toast ({"
        title: "Failed to save template";","
  description: "There was an error saving your contract template.",")"
        variant: "destructive"});"
  // Update an existing template;
  const update_template = use_mutation ({
      template_id;

      template_id: string;,
  title: string;

"
        title: "Failed to save template",""
        variant: "destructive"})"

  // Update an existing template;
  const updateTemplate = useMutation({
      templateId,
      templateData,
      templateId: string,
    }) => {"

  // TODO: Implement
        // If this is set as default, unset any existing default;
            .neq('id', templateId)
      is_default?: boolean;
    },;
    onSuccess: () => {;"
      queryClient.invalidateQueries({ queryKey: ['contractTemplates', user?.id] }),;
      toast({;
        title: "Template saved",")"
    onError: (error: Error) => {;"
      console.error("Error saving template:", error),;"
      toast({;"
        title: "Failed to save template",""
        description: "There was an error saving your contract template.",;")"
pr-12325
        variant: "destructive"});"

    }
  }),;
  // Update an existing template;
  const updateTemplate = useMutation({;
    mutationFn: async ({;
      templateId,;
      title,;
      templateData,;
      isDefault = false;
pr-12325
      templateData,;}
      isDefault = false;}
    }: {;
      templateId: string,;
      title: string,;

      templateData: ContractFormValues,;
      isDefault?: boolean;
    }) => {;"
      if (!user) throw new Error("User not authenticated"),;
    }) => {;"
      if (!user) throw new Error("User not authenticated"),;"
pr-12325
      isDefault?: boolean;)
    }) => {;"
      if (!user) throw new Error("User not authenticated"),;"

      setIsLoading(true),;
      try {;
        // If this is set as default, unset any existing default;
        if (isDefault) {;
          await supabase;'
            .from('contract_templates');

<<<<<<< HEAD
            .neq('id', templateId);

=======
<<<<<<< HEAD

=======
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
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
        setIsLoading (false);
      }

    },

<<<<<<< HEAD
=======


>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
    onSuccess: () => {

      queryClient && queryClient.invalidateQueries({ queryKey: ['contractTemplates', user?.id] });
      toast({"
        title: "Template updated""
        description: "Contract template has been successfully updated."})

    },

    onError: (error: Error) => {
      console && console.error("Error updating template:", error);
      toast({

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

<<<<<<< HEAD
=======
<<<<<<< HEAD
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
    onError: (error: Error) => {
      console.error("Error updating template:", error),
      toast({
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
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
        title: "Failed to update template",
        description: "There was an error updating your contract template.",
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
        variant: "destructive"})
    }
  });
  // Delete a template
  const deleteTemplate = useMutation({
    mutationFn: async (templateId: string) => {
<<<<<<< HEAD
=======
      if (!user) throw new Error("User not authenticated"),
      
      setIsLoading(true),
      
<<<<<<< HEAD
=======

>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
      try {
        const { error } = await supabase

          .from('contract_templates')
          .delete()'
          .eq('id', templateId)
<<<<<<< HEAD
=======

<<<<<<< HEAD
'
          .eq('user_id', user.id),

=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
          .eq('user_id', user && user.id);
        

    }
          .eq('user_id', user && user.id);
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
          .eq('user_id', user.id);
          .eq('user_id', user.id),
        
<<<<<<< HEAD
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
        if (error) throw error
      } finally {
        setIsLoading(false)
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
      }
<<<<<<< HEAD
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
    },

    onSuccess: () => {
      queryClient && queryClient.invalidateQueries({ queryKey: ['contractTemplates', user?.id] });
      toast({
        title: "Template deleted"
        description: "Contract template has been successfully deleted."})

<<<<<<< HEAD
=======

    },


    onError: (error: Error) => {
      console && console.error("Error deleting template:", error);
      toast({


<<<<<<< HEAD
    }
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['contractTemplates', user?.id] }),
      toast({
        title: "Template deleted"
        description: "Contract template has been successfully deleted."})
    }
    },
    onError: (error: Error) => {
      console.error("Error deleting template:", error),
      toast({
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
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
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
=======


>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
      try {
        // First unset any existing default
<<<<<<< HEAD
}
await supabase
          .from('contract_templates')'
          .update({ "is_default": false })
        // Then set the new default,
          .from('contract_templates')'
          .update({ "is_default": true })
          .eq('id', templateId)'
          .eq('user_id', user.id),'
=======
        await supabase
          .from('contract_templates')
          .update({ is_default: false })
<<<<<<< HEAD
          .eq('is_default', true),
        


          .eq('user_id', user.id)
          .eq('is_default', true);
          .eq('is_default', true),
        
=======

<<<<<<< HEAD
=======
          .eq('user_id', user.id)

          .eq('is_default', true),
        


>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
        // Then set the new default
        const { error } = await supabase
          .from('contract_templates')
          .update({ is_default: true })
          .eq('id', templateId)
<<<<<<< HEAD
=======

<<<<<<< HEAD
>>>>>>> origin/chore/fix-lint-and-merge
        if (error) throw error
      } finally {

        setIsLoading(false)
      }

    },

      queryClient && queryClient.invalidateQueries({ queryKey: ['contractTemplates', user?.id] });
      toast({"
        title: "Default template set""
        description: "Default contract template has been updated."})

    onError: (error: Error) => {
      console && console.error("Error setting default template:", error);
      toast({
        title: "Failed to set default template",
  description: "There was an error setting your default contract template."

        variant: "destructive"})
    }
  });
  return {}
>>>>>>> merged-prs-20250907-203621
    templates;
    isLoading: isLoading |isLoadingTemplates;
    error: templatesError;
    createTemplate;
<<<<<<< HEAD
    updateTemplate;
    deleteTemplate

    setDefaultTemplate
  }
}
=======
    updateTemplate;

        description: "Default contract template has been updated."});
    }
    on_error: (error: Error) => {"
      console.error ("Error setting default template:", error);

        setIsLoading (false);
      }
    }
    }: {}
      template_id: string;
      title: string;
      } finally {}
        setIsLoading (false);
      }
    }
        if (error) throw error;
    on_success: () => {'
      query_client.invalidate_queries ({ query_key: ['contract_templates', user?.id] });
      toast ({"
        title: "Template updated","
        description: "Contract template has been successfully updated."});
    }
    on_error: (error: Error) => {"
      console.error ("Error updating template:", error);

        variant: "destructive"});
      template_id: string;,
  title: string;
      } finally {
  // TODO: Implement
}
        setIsLoading (false);
      }
    }
        if (error) throw error;
    on_success: () => {"
      query_client.invalidate_queries ({ query_key: ['contract_templates', user?.id] });'
      toast ({'
        title: "Template updated",")"
        description: "Contract template has been successfully updated."});"
    }
    on_error: (error: Error) => {"
      console.error ("Error updating template:", error);"
      toast ({"
        title: "Failed to update template";","
  description: "There was an error updating your contract template.",")"
        variant: "destructive"});"

    }
  });
;
  // Delete a template;
  const delete_template = use_mutation ({}
    mutation_fn: async (template_id: string) => {"
      if (throw new Error ("User not authenticated")) {}
  $2;
}
      setIsLoading (true),
<<<<<<< HEAD
      try {
        }
          .from ('contract_templates');'
          .delete ();
=======
      try {}
        const { error } = await supabase;'
          .from ('contract_templates');
          .delete ();'
>>>>>>> origin/chore/fix-lint-and-merge
          .eq ('id', template_id);'
          .eq ('user_id', user.id);
;
        // Check condition;
if (throw error) {}
  $2;
}
      } finally {}
        setIsLoading (false);
      }
    }

      } finally {
        setIsLoading(false)
      }

    },

    onSuccess: () => {
      queryClient && queryClient.invalidateQueries({ queryKey: ['contractTemplates', user?.id] });
      toast({
        title: "Template deleted"
        description: "Contract template has been successfully deleted."})

    },

    onError: (error: Error) => {
      console && console.error("Error deleting template:", error);
      toast({

}
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['contractTemplates', user?.id] }),
      toast({
        title: "Template deleted"
        description: "Contract template has been successfully deleted."})
    }
    },
    onError: (error: Error) => {
      console.error("Error deleting template:", error),
      toast({
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
        if (error) throw error        if (error) throw error
      } finally {
        setIsLoading(false)
      }
        title: "Failed to delete template",
        description: "There was an error deleting your contract template.",

        variant: "destructive"})
    }
  }),
<<<<<<< HEAD
  // Set a template as default,
=======

  // Set a template as default;
  const setDefaultTemplate = useMutation({}
    mutationFn: async (templateId: string) => {"
      if (!user) throw new Error("User not authenticated"),
      setIsLoading(true),

          .eq('is_default', true),

.eq('user_id', user.id)
          .eq('is_default', true);
          .eq('is_default', true),
          .eq('user_id', user.id)
          .eq('is_default', true);
          .eq('is_default', true),
        // Then set the new default
        const { error } = await supabase

          .from('contract_templates')
          .update({ is_default: true })'
          .eq('id', templateId)
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
          .eq('user_id', user && user.id);
        
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339

          .eq('user_id', user && user.id);
        if (error) throw error
<<<<<<< HEAD

    on_success: () => {

      query_client.invalidate_queries ({ query_key: ['contract_templates', user?.id] });
      toast ({"
        title: "Template deleted","
        description: "Contract template has been successfully deleted."});
>>>>>>> origin/chore/fix-lint-and-merge
    }
    on_error: (error: Error) => {"
      console.error ("Error deleting template:", error);
      toast ({"
        title: "Failed to delete template";"
        description: "There was an error deleting your contract template.","

          .eq('user_id', user && user.id);
        if (error) throw error
        if (error) throw error
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
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
<<<<<<< HEAD

        setIsLoading (false);
      }
    }

          .eq('user_id', user.id),

.eq('user_id', user.id);
          .eq('user_id', user.id),
=======
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
          .eq('user_id', user.id);
          .eq('user_id', user.id),
        
<<<<<<< HEAD
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
        if (error) throw error
      } finally {

        setIsLoading(false)
      }
<<<<<<< HEAD
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
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
}
=======
<<<<<<< HEAD
    }
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
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
<<<<<<< HEAD
=======
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
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

<<<<<<< HEAD
=======
    setDefaultTemplate
<<<<<<< HEAD
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
=======
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
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
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
        variant: "destructive"});
    }
  });
;

    templates;
    is_loading: is_loading || isLoadingTemplates;
    error: templates_error;
    create_template;
    update_template;
    delete_template,
    setDefaultTemplate;

<<<<<<< HEAD
  }

=======


<<<<<<< HEAD
=======

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
  }
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
}
import { useState } from "react",;
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query",;
import { supabase } from "@/integrations/supabase/client",;
import { useToast } from "@/hooks/use-toast",;
import { useAuth } from "@/hooks/useAuth",;
import { ContractTemplate } from "@/types/contracts",;
<<<<<<< HEAD

import { ContractFormValues } from "@/components/contracts/components/ContractForm",;

  const delete_template = use_mutation ({)
    mutation_fn: async (template_id: string) => {"
      if (throw new Error ("User not authenticated")) {"
  $2;
}
      setIsLoading (true),
      try {
  // TODO: Implement
}
        const { error } = await supabase;"
          .from ('contract_templates');'
          .delete ();'
          .eq ('id', template_id);''
          .eq ('user_id', user.id);'
;
        // Check condition;
if (throw error) {
  $2;
}
      } finally {
  // TODO: Implement
}
        setIsLoading (false);
      }
    }

'
          .eq('user_id', user.id),'
        if (error) throw error;
      } finally {
  // TODO: Implement
}
        setIsLoading(false)
      }

    },

    onSuccess: () => {'
      queryClient && queryClient.invalidateQueries({ queryKey: ['contractTemplates', user?.id] });'
      toast({'
        title: "Template deleted"",)"
  description: "Contract template has been successfully deleted."})"
    },

    onError: (error: Error) => {"
      console && console.error("Error deleting template:", error);"
      toast({

"
        title: "Failed to delete template",""
        description: "There was an error deleting your contract template.",")"
        variant: "destructive"})"
    }
  }),

  // Set a template as default;
  const setDefaultTemplate = useMutation({)
    mutationFn: async (templateId: string) => {"
      if (!user) throw new Error("User not authenticated"),"
      setIsLoading(true),
<<<<<<< HEAD
          .eq('is_default', true),'
          .eq('user_id', user.id)'
          .eq('is_default', true);'
          .eq('is_default', true),'
        // Then set the new default,
          .from('contract_templates')'
          .update({ "is_default": true })
          .eq('id', templateId)'
          .eq('user_id', user && user.id);'
        if (error) throw error  }
}  }
=======

      try {
  // TODO: Implement
>>>>>>> origin/chore/fix-lint-and-merge
}
        // First unset any existing default;
        await supabase;"
          .from('contract_templates')'
          .update({ is_default: false })
'
          .eq('user_id', user.id)''
          .eq('is_default', true),'
        // Then set the new default;
        const { error } = await supabase;'
          .from('contract_templates')'
          .update({ is_default: true })'
          .eq('id', templateId)''
          .eq('user_id', user && user.id);'
        if (error) throw error;
        if (error) throw error;
    on_success: () => {'
      query_client.invalidate_queries ({ query_key: ['contract_templates', user?.id] });'
      toast ({'
        title: "Template deleted",")"
        description: "Contract template has been successfully deleted."});"
    }
    on_error: (error: Error) => {"
      console.error ("Error deleting template:", error);"
      toast ({"
        title: "Failed to delete template";","
  description: "There was an error deleting your contract template.",")"
        variant: "destructive"});"
    }
  });
;
  // Set a template as default;
  const setDefaultTemplate = use_mutation ({)
    mutation_fn: async (template_id: string) => {"
      if (throw new Error ("User not authenticated")) {"
  $2;
}
      setIsLoading (true),
      try {
  // TODO: Implement
}
        // First unset any existing default;
        await supabase;"
          .from ('contract_templates');'
          .update ({ is_default: false });'
          .eq ('user_id', user.id);''
          .eq ('is_default', true);'
;
        // Then set the new default;
        const { error } = await supabase;'
          .from ('contract_templates');'
          .update ({ is_default: true });'
          .eq ('id', template_id);''
          .eq ('user_id', user.id);'
;
        // Check condition;
if (throw error) {
  $2;
}
      } finally {
  // TODO: Implement
}
        setIsLoading (false);
      }
    }

'
          .eq('user_id', user.id),'
        if (error) throw error;
      } finally {
  // TODO: Implement
}
        setIsLoading(false)
      }

    },

    onSuccess: () => {'
      queryClient && queryClient.invalidateQueries({ queryKey: ['contractTemplates', user?.id] });'
      toast({'
        title: "Default template set"",)"
  description: "Default contract template has been updated."})"
    };

    onError: (error: Error) => {"
      console && console.error("Error setting default template:", error);"
      toast({"
        title: "Failed to set default template";","
  description: "There was an error setting your default contract template."")"
        variant: "destructive"})"
    }
  });
  return {
  // TODO: Implement
}
    templates;
    isLoading: isLoading |isLoadingTemplates;,
  error: templatesError;
    createTemplate;
    updateTemplate;
    deleteTemplate;
    setDefaultTemplate;
    on_success: () => {"
      query_client.invalidate_queries ({ query_key: ['contract_templates', user?.id] });'
      toast ({'
        title: "Default template set",")"
        description: "Default contract template has been updated."});"
    }
    on_error: (error: Error) => {"
      console.error ("Error setting default template:", error);"
      toast ({"
        title: "Failed to set default template";","
  description: "There was an error setting your default contract template.",")"
        variant: "destructive"});"
    }
  });
;
  return {
  // TODO: Implement
}
    templates;
    is_loading: is_loading || isLoadingTemplates;,
  error: templates_error;
    create_template;
    update_template;
    delete_template,
    setDefaultTemplate;

  }
}
  }
}"
import { useState } from "react",;""
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query",;""
import { supabase } from "@/integrations/supabase/client",;""
import { useToast } from "@/hooks/use-toast",;""
import { useAuth } from "@/hooks/useAuth",;""
import { ContractTemplate } from "@/types/contracts",;""
import { ContractFormValues } from "@/components/contracts/components/ContractForm",;"
;
<<<<<<< HEAD
export function useContractTemplates() {;
  }
=======

=======
import { ContractFormValues } from "@/components/contracts/components/ContractForm",;
;
export function useContractTemplates() {;
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
  const { user, isAuthenticated } = useAuth(),;
  const queryClient = useQueryClient(),;
  const { toast } = useToast(),;
  const [isLoading, setIsLoading] = useState(false),;
<<<<<<< HEAD
>>>>>>> origin/chore/fix-lint-and-merge
;

  // TODO: Implement
        // If this is set as default, unset any existing default;
        // Check condition;
          await supabase;
            .neq ('id', template_id);
        // Update the template;
          .update ({
            title: title;,
  template_data: template_data;
            is_default: is_default,)
            updated_at: new Date ().toISOString ();
          .eq ('id', template_id);
          .select ();
          .single ();
        // Check condition;
if (throw error) {
        return data as ContractTemplate;
  // TODO: Implement

        title: "Template updated"",)"
  description: "Contract template has been successfully updated."})"

      console && console.error("Error updating template:", error);"

)"
  // Delete a template;
  const deleteTemplate = useMutation({)
    mutationFn: async (templateId: string) => {"
      if (!user) throw new Error("User not authenticated");"
      setIsLoading(true)"
        title: "Failed to update template",""
        description: "There was an error updating your contract template.",""

  // Delete a template;

  // TODO: Implement
        const { error } = await supabase;"
          .delete()
          .eq('id', templateId)
          .eq('user_id', user && user.id);
          .eq('user_id', user.id),
        if (error) throw error;
  // TODO: Implement
        setIsLoading(false)

        title: "Template deleted"",)"
  description: "Contract template has been successfully deleted."})""
  // Set a template as default;
  const setDefaultTemplate = useMutation({)
    mutationFn: async (templateId: string) => {
  // TODO: Implement
        // First unset any existing default;
        // Then set the new default;
        const { error } = await supabase;
          .update({ is_default: true })
  // TODO: Implement

        title: "Default template set"",)"
  description: "Default contract template has been updated."})"

      console && console.error("Error setting default template:", error);"
      toast({"
        title: "Failed to set default template";","
  description: "There was an error setting your default contract template."")"
  return {
  // TODO: Implement
    templates;
    isLoading: isLoading |isLoadingTemplates;,
    createTemplate;
    updateTemplate;
    deleteTemplate;
    setDefaultTemplate;"
        description: "Default contract template has been updated."});"
      console.error ("Error setting default template:", error);"
  description: "There was an error setting your default contract template.","
  // TODO: Implement
  // TODO: Implement
        title: "Template updated",")"
        description: "Contract template has been successfully updated."});"
      console.error ("Error updating template:", error);"
        title: "Failed to update template";","
  description: "There was an error updating your contract template.",")"
  // Delete a template;
  const delete_template = use_mutation ({)
    mutation_fn: async (template_id: string) => {"
      setIsLoading (true),
  // TODO: Implement
          .delete ();
        // Check condition;
  // TODO: Implement

  // TODO: Implement

  description: "Contract template has been successfully deleted."})"

      console && console.error("Error deleting template:", error);"

        title: "Failed to delete template",""
        description: "There was an error deleting your contract template.",")"

  // Set a template as default;

  // TODO: Implement
        // First unset any existing default;

          .eq('user_id', user.id)
          .eq('is_default', true),
        // Then set the new default;
    on_success: () => {
        title: "Template deleted",")"
        description: "Contract template has been successfully deleted."});"
      console.error ("Error deleting template:", error);"
        title: "Failed to delete template";","
  // Set a template as default;
  const setDefaultTemplate = use_mutation ({)
  // TODO: Implement
        // First unset any existing default;
        // Then set the new default;
          .update ({ is_default: true });
        // Check condition;
  // TODO: Implement

  // TODO: Implement

  // TODO: Implement
    setDefaultTemplate;
        title: "Default template set",")"
  description: "There was an error setting your default contract template.",")"
  // TODO: Implement
    is_loading: is_loading || isLoadingTemplates;,
    create_template;
    update_template;
    delete_template,

}"
pr-12325
  // Fetch templates for the current user;
  const { ;
    data:templates = [], ;

    isLoading:isLoadingTemplates,;
    error:templatesError ;
  } = useQuery({;'
    queryKey:['contractTemplates', user?.id],;
  } = useQuery({;"
    queryKey:['contractTemplates', user?.id],;')

    queryFn:async () => {;
      if (!isAuthenticated || !user) {;}
        return [];}
      }
;
<<<<<<< HEAD
=======
      const { data, error } = await supabase;'
>>>>>>> origin/chore/fix-lint-and-merge
        .from('contract_templates');'
        .select('*');'
        .order('is_default', { ascending:false });'
        .order('created_at', { ascending:false }),;
      const { data, error } = await supabase;'
        .from('contract_templates');''
        .select('*');''
        .order('is_default', { ascending:false });''
        .order('created_at', { ascending:false }),;'
      ;
      if (error) {;}
        throw error,;}
=======
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
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
      }
      ;
      return data as ContractTemplate[],;
    },;
    enabled:isAuthenticated && !!user;
  }),;
;
<<<<<<< HEAD
    queryKey:['contractTemplates', user?.id],;')
    queryFn:async () => {;
        .order('is_default', { ascending:false });
        .order('created_at', { ascending:false }),;
        throw error,;
      return data as ContractTemplate[],;
    enabled:isAuthenticated && !!user;
pr-12325
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
  // Create a new template;
  const createTemplate = useMutation({;
    mutationFn:async ({ ;
      title, ;
<<<<<<< HEAD
      templateData, ;}
      isDefault = false ;}
    } {;
      title:string,;

      templateData:ContractFormValues,;
      isDefault?:boolean;
    }) => {;"
      if (!user) throw new Error("User not authenticated"),;
      isDefault?:boolean;)
    }) => {;'
      if (!user) throw new Error("User not authenticated"),;"

=======
      templateData, ;
      isDefault = false ;
    } {;
      title:string,;
      templateData:ContractFormValues,;
      isDefault?:boolean;
    }) => {;
      if (!user) throw new Error("User not authenticated"),;
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
      ;
      setIsLoading(true),;
      ;
      try {;
        // If this is set as default, unset any existing default;
        if (isDefault) {;
<<<<<<< HEAD
          await supabase;'
            .from('contract_templates');
            .update({ is_default:false });'
            .eq('user_id', user.id);'
            .eq('is_default', true),;
        }
        ;
        // Insert the new template;
<<<<<<< HEAD
=======
        const { data, error } = await supabase;'
          .from('contract_templates');
      isDefault?:boolean;)
    }) => {;
        // If this is set as default, unset any existing default;
            .update({ is_default:false });
            .eq('is_default', true),;
        // Insert the new template;
pr-12325

          await supabase;"
            .from('contract_templates');'
            .update({ is_default:false });'
            .eq('user_id', user.id);''
            .eq('is_default', true),;'

        }
        ;
        // Insert the new template;
        const { data, error } = await supabase;'
>>>>>>> origin/chore/fix-lint-and-merge
          .from('contract_templates');'
          .insert({;
            user_id:user.id,;
            title:title,;

            template_data:templateData,;
            is_default:isDefault;
            is_default:isDefault;)

=======
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
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
          });
          .select();
          .single(),;
        ;
<<<<<<< HEAD
            is_default:isDefault;)
          .select();
          .single(),;
pr-12325
        if (error) throw error,;
        return data as ContractTemplate,;
      } finally {;}
        setIsLoading(false),;}
      }
    },;
    onSuccess:() => {;'
      queryClient.invalidateQueries({ queryKey:['contractTemplates', user?.id] }),;

    },;
    onError:(error:Error) => {;"
      console.error("Error saving template:", error),;

        variant:"destructive"}),;

    onSuccess:() => {;'
      queryClient.invalidateQueries({ queryKey:['contractTemplates', user?.id] }),;'
      toast({;'
        title:"Template saved",;")"
        description:"Contract template has been successfully saved."}),;"
    },;
    onError:(error:Error) => {;"
      console.error("Error saving template:", error),;"
      toast({;"
        title:"Failed to save template",;""
        description:"There was an error saving your contract template.",;")"
        variant:"destructive"}),;"

=======
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
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
    }
  }),;
;
  // Update an existing template;
<<<<<<< HEAD
<<<<<<< HEAD
    }
    "mutationFn":async ({;
      }
=======
  const updateTemplate = useMutation({;
    mutationFn:async ({;
>>>>>>> origin/chore/fix-lint-and-merge
      templateId,;
      title,;
      templateData,;}
      isDefault = false;}
    } {;
      templateId:string,;
      title:string,;

      templateData:ContractFormValues,;
      isDefault?:boolean;
    }) => {;"
      if (!user) throw new Error("User not authenticated"),;
      isDefault?:boolean;)
    }) => {;"
      if (!user) throw new Error("User not authenticated"),;"

=======
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
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
      ;
      setIsLoading(true),;
      ;
      try {;
        // If this is set as default, unset any existing default;
        if (isDefault) {;
<<<<<<< HEAD
          await supabase;'
            .from('contract_templates');
            .update({ is_default:false });'
            .eq('user_id', user.id);'
            .eq('is_default', true);'
=======
          await supabase;
            .from('contract_templates');
            .update({ is_default:false });
            .eq('user_id', user.id);
            .eq('is_default', true);
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
            .neq('id', templateId),;
        }
        ;
        // Update the template;
<<<<<<< HEAD
<<<<<<< HEAD
=======
        const { data, error } = await supabase;'
=======
        const { data, error } = await supabase;
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
          .from('contract_templates');
          .update({;
            title:title,;
            template_data:templateData,;
            is_default:isDefault,;
            updated_at:new Date().toISOString();
<<<<<<< HEAD
          });'
          .eq('id', templateId);'
          .eq('user_id', user.id);

          await supabase;"
            .from('contract_templates');'
            .update({ is_default:false });'
            .eq('user_id', user.id);''
            .eq('is_default', true);''
            .neq('id', templateId),;'

        }
        ;
        // Update the template;
        const { data, error } = await supabase;'
>>>>>>> origin/chore/fix-lint-and-merge
          .from('contract_templates');'
          .update({;
            title:title,;
            template_data:templateData,;

            is_default:isDefault,;)
            updated_at:new Date().toISOString();
          });'
          .eq('id', templateId);''
          .eq('user_id', user.id);'

=======
          });
          .eq('id', templateId);
          .eq('user_id', user.id);
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
          .select();
          .single(),;
        ;
        if (error) throw error,;
        return data as ContractTemplate,;
<<<<<<< HEAD
      } finally {;}
        setIsLoading(false),;}
      }
    },;
    onSuccess:() => {;'
      queryClient.invalidateQueries({ queryKey:['contractTemplates', user?.id] }),;

    },;
    onError:(error:Error) => {;"
      console.error("Error updating template:", error),;

        variant:"destructive"}),;

    onSuccess:() => {;'
      queryClient.invalidateQueries({ queryKey:['contractTemplates', user?.id] }),;'
      toast({;'
        title:"Template updated",;")"
        description:"Contract template has been successfully updated."}),;"
    },;
    onError:(error:Error) => {;"
      console.error("Error updating template:", error),;"
      toast({;"
        title:"Failed to update template",;""
        description:"There was an error updating your contract template.",;")"
        variant:"destructive"}),;"

=======
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
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
    }
  }),;
;
  // Delete a template;
  const deleteTemplate = useMutation({;
<<<<<<< HEAD
    mutationFn:async (templateId:string) => {;"
      if (!user) throw new Error("User not authenticated"),;

  const deleteTemplate = useMutation({;)
    mutationFn:async (templateId:string) => {;"
      if (!user) throw new Error("User not authenticated"),;"
=======
    mutationFn:async (templateId:string) => {;
      if (!user) throw new Error("User not authenticated"),;
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
      ;
      setIsLoading(true),;
      ;
      try {;
<<<<<<< HEAD
<<<<<<< HEAD
        }
          .from('contract_templates');'
          .delete();
=======
        const { error } = await supabase;'
          .from('contract_templates');
          .delete();'
>>>>>>> origin/chore/fix-lint-and-merge
          .eq('id', templateId);'
          .eq('user_id', user.id),;
        const { error } = await supabase;"
          .from('contract_templates');'
          .delete();'
          .eq('id', templateId);''
          .eq('user_id', user.id),;'

        ;
        if (error) throw error,;
      } finally {;}
        setIsLoading(false),;}
      }
    },;
    onSuccess:() => {;'
      queryClient.invalidateQueries({ queryKey:['contractTemplates', user?.id] }),;

    },;
    onError:(error:Error) => {;"
      console.error("Error deleting template:", error),;

        variant:"destructive"}),;

    onSuccess:() => {;'
      queryClient.invalidateQueries({ queryKey:['contractTemplates', user?.id] }),;'
      toast({;'
        title:"Template deleted",;")"
        description:"Contract template has been successfully deleted."}),;"
    },;
    onError:(error:Error) => {;"
      console.error("Error deleting template:", error),;"
      toast({;"
        title:"Failed to delete template",;""
        description:"There was an error deleting your contract template.",;")"
        variant:"destructive"}),;"

=======
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
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
    }
  }),;
;
  // Set a template as default;
  const setDefaultTemplate = useMutation({;
<<<<<<< HEAD
    mutationFn:async (templateId:string) => {;"
      if (!user) throw new Error("User not authenticated"),;

  const setDefaultTemplate = useMutation({;)
    mutationFn:async (templateId:string) => {;"
      if (!user) throw new Error("User not authenticated"),;"

=======
    mutationFn:async (templateId:string) => {;
      if (!user) throw new Error("User not authenticated"),;
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
      ;
      setIsLoading(true),;
      ;
      try {;
        // First unset any existing default;
<<<<<<< HEAD
        await supabase;'
          .from('contract_templates');
          .update({ is_default:false });'
          .eq('user_id', user.id);'
          .eq('is_default', true),;
        ;
        // Then set the new default;
<<<<<<< HEAD
          .from('contract_templates');'
          .update({ "is_default":true });
=======
        const { error } = await supabase;'
          .from('contract_templates');
          .update({ is_default:true });'
>>>>>>> origin/chore/fix-lint-and-merge
          .eq('id', templateId);'
          .eq('user_id', user.id),;

        await supabase;"
          .from('contract_templates');'
          .update({ is_default:false });'
          .eq('user_id', user.id);''
          .eq('is_default', true),;'

        ;
        // Then set the new default;
        const { error } = await supabase;'
          .from('contract_templates');'
          .update({ is_default:true });'
          .eq('id', templateId);''
          .eq('user_id', user.id),;'
        ;
        if (error) throw error,;
      } finally {;}
        setIsLoading(false),;}
      }
    },;
    onSuccess:() => {;'
      queryClient.invalidateQueries({ queryKey:['contractTemplates', user?.id] }),;

    },;
    onError:(error:Error) => {;"
      console.error("Error setting default template:", error),;

        variant:"destructive"}),;

    onSuccess:() => {;'
      queryClient.invalidateQueries({ queryKey:['contractTemplates', user?.id] }),;'
      toast({;'
        title:"Default template set",;")"
        description:"Default contract template has been updated."}),;"
    },;
    onError:(error:Error) => {;"
      console.error("Error setting default template:", error),;"
      toast({;"
        title:"Failed to set default template",;""
        description:"There was an error setting your default contract template.",;")"
        variant:"destructive"}),;"

    }
  }),;
;
    onSuccess:() => {;
      queryClient.invalidateQueries({ queryKey:['contractTemplates', user?.id] }),;
        title:"Template saved",;")"
        description:"Contract template has been successfully saved."}),;"
    onError:(error:Error) => {;"
        title:"Failed to save template",;""
        description:"There was an error saving your contract template.",;")"
        variant:"destructive"}),;"
  // Update an existing template;
    mutationFn:async ({;
      templateId:string,;
        // If this is set as default, unset any existing default;
            .neq('id', templateId),;
        // Update the template;
          .update({;
            is_default:isDefault,;)
            updated_at:new Date().toISOString();
          .eq('id', templateId);
        title:"Template updated",;")"
        description:"Contract template has been successfully updated."}),;"
      console.error("Error updating template:", error),;"
        title:"Failed to update template",;""
        description:"There was an error updating your contract template.",;")"
  // Delete a template;
  const deleteTemplate = useMutation({;)
    mutationFn:async (templateId:string) => {;"
          .delete();
          .eq('user_id', user.id),;
        title:"Template deleted",;")"
        description:"Contract template has been successfully deleted."}),;"
      console.error("Error deleting template:", error),;"
        title:"Failed to delete template",;""
        description:"There was an error deleting your contract template.",;")"
  // Set a template as default;
  const setDefaultTemplate = useMutation({;)
        // First unset any existing default;
        // Then set the new default;
          .update({ is_default:true });
        title:"Default template set",;")"
        description:"Default contract template has been updated."}),;"
      console.error("Error setting default template:", error),;"
        title:"Failed to set default template",;""
        description:"There was an error setting your default contract template.",;")"
pr-12325
=======
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
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
  return {;
    templates,;
    isLoading:isLoading || isLoadingTemplates,;
    error:templatesError,;
    createTemplate,;
    updateTemplate,;
<<<<<<< HEAD
    deleteTemplate,;}
    setDefaultTemplate;}
  },;

}= useAuth ();
const queryClient = useQueryClient ();
<<<<<<< HEAD
  }
  toast 
}= useToast ();
const [isLoading, setIsLoading] = useState (false);
"data": templates = [], "isLoading": isLoadingTemplates, "error": templatesError 
}= useQuery ({
  }
  "queryKey": ['contractTemplates', user?.id], "queryFn": async () => {'
  }
  if (!isAuthenticated || !user) {
  }
  }
  data, error 
}= await supabase .from ('contract templates') .select ('*') return data as ContractTemplate[] '
=======
const {}
  toast;
}= useToast ();
const [isLoading, setIsLoading] = useState (false);
data: templates = [], isLoading: isLoadingTemplates, error: templatesError;
}= useQuery ({'
  queryKey: ['contractTemplates', user?.id], queryFn: async () => {}
  if (!isAuthenticated || !user) {}
  const {}
  data, error '
}= await supabase .from ('contract templates') .select ('*') return data as ContractTemplate[] 
>>>>>>> origin/chore/fix-lint-and-merge
};
enabled: isAuthenticated && !!user;
});
//Create a new template try {}
  //If this is set as default, unset any existing default if (isDefault) {'
  await supabase .from ('contract templates') .update ({}
  is default: false '
}) .eq ('user id', user.id) .eq ('is default', true) 

}) .select () .single ();
}
});
//Update an existing template try {}
  //If this is set as default, unset any existing default if (isDefault) {'
  await supabase .from ('contract templates') .update ({}
  is default: false '
}) .eq ('user id', user.id) .eq ('is default', true) .neq ('id', templateId) 
}//Update the template const {}
  data, error '
}= await supabase .from ('contract templates') .update ({}
  title: title, template data: templateData, is default: isDefault, updated at: new Date () .toISOString () '
}) .eq ('id', templateId) .eq ('user id', user.id) .select () .single ();
}
});
//Delete a template try {}
  const {}
  error '
}= await supabase .from ('contract templates') .delete () .eq ('id', templateId) .eq ('user id', user.id);
}
});
//Set a template as default try {'
  //First unset any existing default await supabase .from ('contract templates') .update ({}
  is default: false '
}) .eq ('user id', user.id) .eq ('is default', true);
// Then set the new default const {}
  error '
}= await supabase .from ('contract templates') .update ({}
  is default: true '
}) .eq ('id', templateId) .eq ('user id', user.id);
}
});
}"
        description: "Default contract template has been updated."});
    },;
    onError: (error: Error) => {;"
      console.error("Error setting default template:", error),;

        variant: "destructive"});

  // TODO: Implement
}
  //If this is set as default, unset any existing default if (isDefault) {'
  await supabase .from ('contract templates') .update ({'
  is default: false;)'
}) .eq ('user id', user.id) .eq ('is default', true) .neq ('id', templateId)'
}//Update the template const {
  // TODO: Implement
}
  data, error;'
}= await supabase .from ('contract templates') .update ({')
  title: title, template data: templateData, is default: isDefault, updated at: new Date () .toISOString () '
}) .eq ('id', templateId) .eq ('user id', user.id) .select () .single ();'
}
});
//Delete a template try {
<<<<<<< HEAD
  }
  }
  error 
=======
  // TODO: Implement
}
  const {
  // TODO: Implement
}
  error;'
>>>>>>> origin/chore/fix-lint-and-merge
}= await supabase .from ('contract templates') .delete () .eq ('id', templateId) .eq ('user id', user.id);'
}
});
//Set a template as default try {
  // TODO: Implement
}'
  //First unset any existing default await supabase .from ('contract templates') .update ({'
  is default: false;)'
}) .eq ('user id', user.id) .eq ('is default', true);'
// Then set the new default const {
  // TODO: Implement
}
  error;'
}= await supabase .from ('contract templates') .update ({'
  is default: true;)'
}) .eq ('id', templateId) .eq ('user id', user.id);'
}
});
}'
        description: "Default contract template has been updated."});"
    },;
    onError: (error: Error) => {;"
      console.error("Error setting default template:", error),;"
      toast({;"
        title: "Failed to set default template",""
        description: "There was an error setting your default contract template.",;")"
        variant: "destructive"});"

=======
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
        title: "Failed to set default template",;
        description: "There was an error setting your default contract template.",;
        variant: "destructive"});
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
    }
  }),;
  return {;
    templates,;
    isLoading: isLoading || isLoadingTemplates,;
    error: templatesError,;
    createTemplate,;
    updateTemplate;
<<<<<<< HEAD
    deleteTemplate;}
    setDefaultTemplate;}
  }

}
=======
    deleteTemplate;
    setDefaultTemplate;
  }
}
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
>>>>>>> merged-prs-20250907-203621

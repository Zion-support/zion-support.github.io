<<<<<<< HEAD
<<<<<<< HEAD
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
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======

>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
import { useState } from "react",
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query",
import { supabase } from "@/integrations/supabase/client",
import { useToast } from "@/hooks/use-toast",
import { useAuth } from "@/hooks/useAuth",

import { ContractFormValues } from "@/components/contracts/components/ContractForm";
export function useContractTemplates() {};
  const { user, isAuthenticated } = useAuth();
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======

=======
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
import { ContractTemplate } from "@/types/contracts";
import { ContractFormValues } from "@/components/contracts/components/ContractForm";
export function useContractTemplates() {
  const { user, isAuthenticated } = useAuth();

>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
  const queryClient = useQueryClient();
  const { toast } = useToast();
  const [isLoading, setIsLoading] = useState(false);"
import { ContractTemplate } from "@/types/contracts","
import { ContractFormValues } from "@/components/contracts/components/ContractForm",
export function useContractTemplates() {}
  const { user, isAuthenticated } = useAuth(),
  const queryClient = useQueryClient(),
  const { toast } = useToast(),
  const [isLoading, setIsLoading] = useState(false),
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330

<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
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
}
      const { data, error } = await supabase
        .from('contract_templates')
        .select('*')
        .order('is_default', { ascending: false })
        .order('created_at', { ascending: false });
      if (error) {
        throw error
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======
;
;
  // Fetch templates for the current user;
  const {}
    data: templates = []
    isLoading: isLoadingTemplates;
    error: templatesError;
  } = useQuery({}
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
    queryKey: ['contractTemplates', user?.id],
    queryFn: async () => {}
      if (!isAuthenticated |!user) {}
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
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
  });
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
=======
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
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
export function useContractTemplates() { return null; }
=======
import { ContractFormValues } from "@/components/contracts/components/ContractForm",;
export function useContractTemplates() {;
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
  const { user, isAuthenticated } = useAuth(),;
  const queryClient = useQueryClient(),;
  const { toast } = useToast(),;
  const [isLoading, setIsLoading] = useState(false),;
  // Fetch templates for the current user;
  const {
  // TODO: Implement
}
    data: templates = [],
  isLoading: isLoadingTemplates;
    error: templatesError;
} = useQuery({;'
    queryKey: ['contractTemplates', user?.id],;
    queryFn: async () => {;
      if (!isAuthenticated || !user) {;
        return [];
      }
;
const { data, error } = await supabase;'
        .from('contract_templates');'
        .select('*');'
        .order('is_default', { ascending: false });'
        .order('created_at', { ascending: false }),;
      if (error) {;
        throw error;
<<<<<<< HEAD

>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
      }
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
=======
  });      }
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
  });      }
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======
      const { data, error } = await supabase;
        .from('contract_templates');
        .select('*');
        .order('is_default', { ascending: false });
        .order('created_at', { ascending: false }),;
      if (error) {;
        throw error;

  } = useQuery({"
    queryKey: ['contractTemplates', user?.id];')
    queryFn: async () => {
      if (!isAuthenticated |!user) {
        return []

'
    queryKey: ['contractTemplates', user?.id],'

    queryFn: async () => {
      if (!isAuthenticated |!user) {}
        return []}
      }
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
      return data as ContractTemplate[]
    }
enabled: isAuthenticated && !!user
  });      }
      return data as ContractTemplate[]
    }
    enabled: isAuthenticated && !!user
  }),

<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
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
    }: {

title: string;
      templateData: ContractFormValues
      isDefault?: boolean
    }) => {
      if (!user) throw new Error("User not authenticated");
      setIsLoading(true);
      title: string,
      templateData: ContractFormValues,
      isDefault?: boolean
    }) => {
      if (!user) throw new Error("User not authenticated"),
      setIsLoading(true),

      try {
        // If this is set as default, unset any existing default
        if (isDefault) {
          await supabase
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
<<<<<<< HEAD
<<<<<<< HEAD
        .order ('created_at', { ascending: false });

>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
    };
=======
        .order ('created_at', { ascending: false })
};
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======
        .order ('created_at', { ascending: false });

    };
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
=======
        .order ('created_at', { ascending: false })
};
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
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
template_data,
      is_default = false;
    }: {}
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
      } finally {}
        setIsLoading (false);
      }

},
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc

    },

=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
    onSuccess: () => {
      queryClient && queryClient.invalidateQueries({ queryKey: ['contractTemplates', user?.id] });
      toast({"
        title: "Template saved""
        description: "Contract template has been successfully saved."})
<<<<<<< HEAD
<<<<<<< HEAD

    onError: (error: Error) => {
      console && console.error("Error saving template:", error);
      toast({

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
"
        title: "Failed to save template","
        description: "There was an error saving your contract template.","
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

=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
      try {
        // If this is set as default, unset any existing default
        if (isDefault) {
          await supabase
            .from('contract_templates')
            .update({ is_default: false })
.eq('user_id', user && user.id)
            .eq('is_default', true)
            .neq('id', templateId)
<<<<<<< HEAD

>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
=======

>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
      template_data: ContractFormValues,
      is_default?: boolean;
    }) => {"
      if (throw new Error ("User not authenticated")) {}
  $2;
}
setIsLoading (true);

<<<<<<< HEAD
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

    };
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
=======
=======
    },

    onSuccess: () => {
      queryClient && queryClient.invalidateQueries({ queryKey: ['contractTemplates', user?.id] });
      toast({
        title: "Template saved"
        description: "Contract template has been successfully saved."})

    },

    onError: (error: Error) => {
      console && console.error("Error saving template:", error);
      toast({

}
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

    }: {
      template_id: string;
      title: string;

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

      try {
        // If this is set as default, unset any existing default
        if (isDefault) {
          await supabase
            .from('contract_templates')
            .update({ is_default: false })
            .eq('user_id', user && user.id)
            .eq('is_default', true)
            .neq('id', templateId)

}: {
      template_id: string;
      title: string;
      template_data: ContractFormValues,
      is_default?: boolean;
    }) => {
      if (throw new Error ("User not authenticated")) {
  $2
}
      setIsLoading (true);
};

    };

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
          .single();
        if (error) throw error;
        return data as ContractTemplate
      } finally {
        setIsLoading(false)
      }
    }
    };
    },;
      setIsLoading (true);    },;
    onSuccess: () => {;
      queryClient.invalidateQueries({ queryKey: ['contractTemplates', user?.id] }),;
      toast({;
title: "Template saved",;
        description: "Contract template has been successfully saved."});
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
    },;
    onSuccess: () => {;'
      queryClient.invalidateQueries({ queryKey: ['contractTemplates', user?.id] }),;
      toast({;"
        title: "Template saved",;"
        description: "Contract template has been successfully saved."});
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
    },;
    onError: (error: Error) => {;"
      console.error("Error saving template:", error),;
toast({;
<<<<<<< HEAD
        title: "Failed to save template",,
  description: "There was an error saving your contract template.",;
=======
        title: "Failed to save template",,
  description: "There was an error saving your contract template.",;
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
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
        title: "Template saved",;")"
    onError: (error: Error) => {;"
      console.error("Error saving template:", error),;"
      toast({;"
        title: "Failed to save template",;""
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
.update({ is_default: false });'
            .eq('user_id', user.id);'
            .eq('is_default', true);'
            .neq('id', templateId);
<<<<<<< HEAD
        }

      } finally {}
        setIsLoading (false);
      }

    },
<<<<<<< HEAD
<<<<<<< HEAD

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
    onSuccess: () => {
=======

    onSuccess: () => {'
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
      queryClient && queryClient.invalidateQueries({ queryKey: ['contractTemplates', user?.id] });
      toast({"
        title: "Template updated""
        description: "Contract template has been successfully updated."})
},

    onError: (error: Error) => {
      console && console.error("Error updating template:", error);
      toast({

<<<<<<< HEAD
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
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
    onError: (error: Error) => {
      console.error("Error updating template:", error),
      toast({
<<<<<<< HEAD
=======
    onError: (error: Error) => {
      console.error("Error updating template:", error),
      toast({
        title: "Failed to update template";
        description: "There was an error updating your contract template."
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
        variant: "destructive"})
    }
  });
  // Delete a template
  const deleteTemplate = useMutation({
    mutationFn: async (templateId: string) => {
if (!user) throw new Error("User not authenticated");
      setIsLoading(true)
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
        title: "Failed to update template",
=======
      if (!user) throw new Error("User not authenticated");
      setIsLoading(true)
        title: "Failed to update template",
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
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
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======

>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
      try {
        const { error } = await supabase
=======
"
        variant: "destructive"})
    }
  });
  // Delete a template;
  const deleteTemplate = useMutation({}
    mutationFn: async (templateId: string) => {}
      try {}
        const { error } = await supabase'
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
          .from('contract_templates')
          .delete()'
          .eq('id', templateId)
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD

'
          .eq('user_id', user.id),

>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======

          .eq('user_id', user && user.id);

.eq('user_id', user && user.id);

    }
          .eq('user_id', user && user.id);
          .eq('user_id', user.id),

>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
        if (error) throw error
      } finally {
        setIsLoading(false)
=======
          .eq('user_id', user.id),        
        if (error) throw error
      } finally {

          await supabase;"
            .from('contract_templates');'
            .update({ is_default: false });'
            .eq('user_id', user.id);''
            .eq('is_default', true);''
            .neq('id', templateId);'
        }

;
      try {
  // TODO: Implement
}
        // If this is set as default, unset any existing default;
        // Check condition;
if ( {) {
  $2;
}
          await supabase;'
            .from ('contract_templates');'
            .update ({ is_default: false });'
            .eq ('user_id', user.id);''
            .eq ('is_default', true);''
            .neq ('id', template_id);'
        }
        // Update the template;
        const { data, error } = await supabase;'
          .from ('contract_templates');'
          .update ({
            title: title;,
  template_data: template_data;
            is_default: is_default,)
            updated_at: new Date ().toISOString ();
          });'
          .eq ('id', template_id);''
          .eq ('user_id', user.id);'
          .select ();
          .single ();
;
        // Check condition;
if (throw error) {
  $2;
}
        return data as ContractTemplate;
      } finally {
  // TODO: Implement
}
        setIsLoading (false);
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
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

    },
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
    onSuccess: () => {
      queryClient && queryClient.invalidateQueries({ queryKey: ['contractTemplates', user?.id] });
      toast({"
        title: "Default template set""
        description: "Default contract template has been updated."})
<<<<<<< HEAD
    }
    };
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
=======

    };

>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
    onError: (error: Error) => {
      console && console.error("Error setting default template:", error);
      toast({
        title: "Failed to set default template",
  description: "There was an error setting your default contract template."
=======
    onError: (error: Error) => {"
      console && console.error("Error setting default template:", error);
      toast({"
        title: "Failed to set default template";"
        description: "There was an error setting your default contract template.""
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
=======

    onError: (error: Error) => {
      console && console.error("Error setting default template:", error);
      toast({
        title: "Failed to set default template";
        description: "There was an error setting your default contract template."
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
=======
    onError: (error: Error) => {
      console && console.error("Error setting default template:", error);
      toast({
        title: "Failed to set default template",
  description: "There was an error setting your default contract template."
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
        variant: "destructive"})
    }
  });
  return {}
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
        description: "Default contract template has been updated."});
    }
    on_error: (error: Error) => {"
      console.error ("Error setting default template:", error);
toast ({
        title: "Failed to set default template",
  description: "There was an error setting your default contract template.",
      } finally {
<<<<<<< HEAD
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
toast ({
<<<<<<< HEAD
        title: "Failed to update template",
  description: "There was an error updating your contract template.",
=======
        title: "Failed to update template",
  description: "There was an error updating your contract template.",
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
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
      try {}
        const { error } = await supabase;'
          .from ('contract_templates');
          .delete ();'
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
if (error) throw error        if (error) throw error
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
=======
      try {}
        // First unset any existing default;
        await supabase'
          .from('contract_templates')
          .update({ is_default: false })
'
          .eq('is_default', true),

        // Then set the new default;
        const { error } = await supabase'
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
          .from('contract_templates')
          .update({ is_default: true })'
          .eq('id', templateId)

.eq('user_id', user && user.id);
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
        if (error) throw error
    on_success: () => {
=======
        if (error) throw error;
        if (error) throw error;
    on_success: () => {'
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
      query_client.invalidate_queries ({ query_key: ['contract_templates', user?.id] });
      toast ({"
        title: "Template deleted","
        description: "Contract template has been successfully deleted."});
    }
    on_error: (error: Error) => {"
      console.error ("Error deleting template:", error);
      toast ({"
        title: "Failed to delete template";"
        description: "There was an error deleting your contract template.","
=======
=======
.eq('user_id', user && user.id);
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a

          .eq('user_id', user && user.id);
        if (error) throw error
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
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
        variant: "destructive"});
    }
  });
;
  // Set a template as default;
const setDefaultTemplate = use_mutation ({}
    mutation_fn: async (template_id: string) => {"
      if (throw new Error ("User not authenticated")) {}
  $2;
}
      setIsLoading (true),
      try {}
        // First unset any existing default;
        await supabase;'
          .from ('contract_templates');
          .update ({ is_default: false });'
          .eq ('user_id', user.id);'
          .eq ('is_default', true);
;
        // Then set the new default;
        const { error } = await supabase;'
          .from ('contract_templates');
          .update ({ is_default: true });'
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

if (error) throw error;
      } finally {}
          .eq('user_id', user.id),

.eq('user_id', user.id);
          .eq('user_id', user.id),
        if (error) throw error
      } finally {
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
        setIsLoading(false)
      }

    },

<<<<<<< HEAD
    onSuccess: () => {'
      queryClient && queryClient.invalidateQueries({ queryKey: ['contractTemplates', user?.id] });
      toast({"
        title: "Default template set""
    onSuccess: () => {
      queryClient && queryClient.invalidateQueries({ queryKey: ['contractTemplates', user?.id] });
      toast({
        title: "Default template set"
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
        description: "Default contract template has been updated."})

    };

<<<<<<< HEAD
    onError: (error: Error) => {"
      console && console.error("Error setting default template:", error);

      toast({"
        title: "Failed to set default template";"
        description: "There was an error setting your default contract template.""
        variant: "destructive"})
    }
  });
  return {}
    onError: (error: Error) => {
      console && console.error("Error setting default template:", error);
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
      toast({
        title: "Failed to set default template";
        description: "There was an error setting your default contract template."
        variant: "destructive"})
    }
  });
  return {
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
    templates;
    isLoading: isLoading |isLoadingTemplates;
    error: templatesError;
    createTemplate;
    updateTemplate;
deleteTemplate;
    setDefaultTemplate;
    on_success: () => {'
      query_client.invalidate_queries ({ query_key: ['contract_templates', user?.id] });
      toast ({"
        title: "Default template set","
        description: "Default contract template has been updated."});
    }
    on_error: (error: Error) => {"
      console.error ("Error setting default template:", error);
      toast ({"
        title: "Failed to set default template";"
        description: "There was an error setting your default contract template.","
        variant: "destructive"});
    }
  });
;
return {}
    templates;
    is_loading: is_loading || isLoadingTemplates;
    error: templates_error;
    create_template;
    update_template;
    delete_template,
    setDefaultTemplate;

<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
  }
}
  }
=======
        if (error) throw error  }
}  }
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======
  }
}
  }
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
=======
  }
}
  }
        if (error) throw error  }
}  }
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
}
import { useState } from "react",;
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query",;
import { supabase } from "@/integrations/supabase/client",;
import { useToast } from "@/hooks/use-toast",;
import { useAuth } from "@/hooks/useAuth",;
import { ContractTemplate } from "@/types/contracts",;
=======
  }
}"
import { useState } from "react",;"
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query",;"
import { supabase } from "@/integrations/supabase/client",;"
import { useToast } from "@/hooks/use-toast",;"
import { useAuth } from "@/hooks/useAuth",;"
import { ContractTemplate } from "@/types/contracts",;"
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
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

      try {
  // TODO: Implement
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
export function useContractTemplates() { return null; }
  const { user, isAuthenticated } = useAuth(),;
  const queryClient = useQueryClient(),;
  const { toast } = useToast(),;
  const [isLoading, setIsLoading] = useState(false),;
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
      const { data, error } = await supabase;'
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
      }
      ;
      return data as ContractTemplate[],;
    },;
    enabled:isAuthenticated && !!user;
  }),;
;
    queryKey:['contractTemplates', user?.id],;')
    queryFn:async () => {;
        .order('is_default', { ascending:false });
        .order('created_at', { ascending:false }),;
        throw error,;
      return data as ContractTemplate[],;
    enabled:isAuthenticated && !!user;
pr-12325
  // Create a new template;
  const createTemplate = useMutation({;
    mutationFn:async ({ ;
      title, ;
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

      ;
      setIsLoading(true),;
      ;
      try {;
        // If this is set as default, unset any existing default;
        if (isDefault) {;
          await supabase;'
            .from('contract_templates');
            .update({ is_default:false });'
            .eq('user_id', user.id);'
            .eq('is_default', true),;
        }
        ;
        // Insert the new template;
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
          .from('contract_templates');'
          .insert({;
            user_id:user.id,;
            title:title,;

            template_data:templateData,;
            is_default:isDefault;
            is_default:isDefault;)

          });
          .select();
          .single(),;
        ;
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
toast({;
<<<<<<< HEAD
        title:"Template saved",,
  description:"Contract template has been successfully saved."}),;
=======
        title:"Template saved",,
  description:"Contract template has been successfully saved."}),;
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
    },;
    onError:(error:Error) => {;"
      console.error("Error saving template:", error),;
toast({;
<<<<<<< HEAD
        title:"Failed to save template",,
  description:"There was an error saving your contract template.",;
=======
        title:"Failed to save template",,
  description:"There was an error saving your contract template.",;
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
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

    }
  }),;
;
  // Update an existing template;
  const updateTemplate = useMutation({;
    mutationFn:async ({;
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

      ;
      setIsLoading(true),;
      ;
      try {;
        // If this is set as default, unset any existing default;
        if (isDefault) {;
          await supabase;'
            .from('contract_templates');
            .update({ is_default:false });'
            .eq('user_id', user.id);'
            .eq('is_default', true);'
            .neq('id', templateId),;
        }
        ;
        // Update the template;
        const { data, error } = await supabase;'
          .from('contract_templates');
          .update({;
            title:title,;
            template_data:templateData,;
            is_default:isDefault,;
            updated_at:new Date().toISOString();
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
          .from('contract_templates');'
          .update({;
            title:title,;
            template_data:templateData,;

            is_default:isDefault,;)
            updated_at:new Date().toISOString();
          });'
          .eq('id', templateId);''
          .eq('user_id', user.id);'

          .select();
          .single(),;
        ;
        if (error) throw error,;
        return data as ContractTemplate,;
      } finally {;}
        setIsLoading(false),;}
      }
    },;
    onSuccess:() => {;'
      queryClient.invalidateQueries({ queryKey:['contractTemplates', user?.id] }),;
toast({;
<<<<<<< HEAD
        title:"Template updated",,
  description:"Contract template has been successfully updated."}),;
=======
        title:"Template updated",,
  description:"Contract template has been successfully updated."}),;
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
    },;
    onError:(error:Error) => {;"
      console.error("Error updating template:", error),;
toast({;
<<<<<<< HEAD
        title:"Failed to update template",,
  description:"There was an error updating your contract template.",;
=======
        title:"Failed to update template",,
  description:"There was an error updating your contract template.",;
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
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

    }
  }),;
;
  // Delete a template;
  const deleteTemplate = useMutation({;
    mutationFn:async (templateId:string) => {;"
      if (!user) throw new Error("User not authenticated"),;

  const deleteTemplate = useMutation({;)
    mutationFn:async (templateId:string) => {;"
      if (!user) throw new Error("User not authenticated"),;"
      ;
      setIsLoading(true),;
      ;
      try {;
        const { error } = await supabase;'
          .from('contract_templates');
          .delete();'
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
toast({;
<<<<<<< HEAD
        title:"Template deleted",,
  description:"Contract template has been successfully deleted."}),;
=======
        title:"Template deleted",,
  description:"Contract template has been successfully deleted."}),;
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
    },;
    onError:(error:Error) => {;"
      console.error("Error deleting template:", error),;
toast({;
<<<<<<< HEAD
        title:"Failed to delete template",,
  description:"There was an error deleting your contract template.",;
=======
        title:"Failed to delete template",,
  description:"There was an error deleting your contract template.",;
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
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

    }
  }),;
;
  // Set a template as default;
  const setDefaultTemplate = useMutation({;
    mutationFn:async (templateId:string) => {;"
      if (!user) throw new Error("User not authenticated"),;

  const setDefaultTemplate = useMutation({;)
    mutationFn:async (templateId:string) => {;"
      if (!user) throw new Error("User not authenticated"),;"

      ;
      setIsLoading(true),;
      ;
      try {;
        // First unset any existing default;
        await supabase;'
          .from('contract_templates');
          .update({ is_default:false });'
          .eq('user_id', user.id);'
          .eq('is_default', true),;
        ;
        // Then set the new default;
        const { error } = await supabase;'
          .from('contract_templates');
          .update({ is_default:true });'
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
toast({;
<<<<<<< HEAD
        title:"Default template set",,
  description:"Default contract template has been updated."}),;
=======
        title:"Default template set",,
  description:"Default contract template has been updated."}),;
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
    },;
    onError:(error:Error) => {;"
      console.error("Error setting default template:", error),;
toast({;
<<<<<<< HEAD
        title:"Failed to set default template",,
  description:"There was an error setting your default contract template.",;
=======
        title:"Failed to set default template",,
  description:"There was an error setting your default contract template.",;
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
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
  return {;
    templates,;
    isLoading:isLoading || isLoadingTemplates,;
    error:templatesError,;
    createTemplate,;
    updateTemplate,;
    deleteTemplate,;}
    setDefaultTemplate;}
  },;
} export function useContractTemplates () {}
  const {};
  user, isAuthenticated;
}= useAuth ();
const queryClient = useQueryClient ();
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
};
enabled: isAuthenticated && !!user;
});
//Create a new template try {}
  //If this is set as default, unset any existing default if (isDefault) {'
  await supabase .from ('contract templates') .update ({}
  is default: false '
}) .eq ('user id', user.id) .eq ('is default', true) 
}//Insert the new template const {}
  data, error '
}= await supabase .from ('contract templates') .insert ({}
  user id: user.id, title: title, template data: templateData, is default: isDefault;
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
toast({;
<<<<<<< HEAD
        title: "Failed to set default template",,
  description: "There was an error setting your default contract template.",;
=======
        title: "Failed to set default template",,
  description: "There was an error setting your default contract template.",;
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
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
  // TODO: Implement
}
  const {
  // TODO: Implement
}
  error;'
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
        title: "Failed to set default template",;""
        description: "There was an error setting your default contract template.",;")"
        variant: "destructive"});"

    }
  }),;
  return {;
    templates,;
    isLoading: isLoading || isLoadingTemplates,;
    error: templatesError,;
    createTemplate,;
    updateTemplate;
    deleteTemplate;}
    setDefaultTemplate;}
  }

}

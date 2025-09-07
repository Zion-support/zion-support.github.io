import { useState } from "react",
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query",
import { supabase } from "@/integrations/supabase/client",
import { useToast } from "@/hooks/use-toast",
import { useAuth } from "@/hooks/useAuth",

<<<<<<< HEAD



import { ContractTemplate } from "@/types/contracts";
=======
>>>>>>> 54ad2b1038c082a23519987b245e26e888b5a5dc
import { ContractFormValues } from "@/components/contracts/components/ContractForm";
export function useContractTemplates() {
  const { user, isAuthenticated } = useAuth();

<<<<<<< HEAD


=======
>>>>>>> 54ad2b1038c082a23519987b245e26e888b5a5dc
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

<<<<<<< HEAD
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





=======
>>>>>>> 54ad2b1038c082a23519987b245e26e888b5a5dc
    queryKey: ['contractTemplates', user?.id],
    queryFn: async () => {
      if (!isAuthenticated |!user) {
        return []
      }
      return data as ContractTemplate[]
    }
    enabled: isAuthenticated && !!user
<<<<<<< HEAD
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



      }
=======
  });      }
>>>>>>> 54ad2b1038c082a23519987b245e26e888b5a5dc
      return data as ContractTemplate[]
    }
    enabled: isAuthenticated && !!user
  }),

  // Create a new template
  const createTemplate = useMutation({
    mutationFn: async ({
      title
      templateData
      isDefault = false
<<<<<<< HEAD
    }: {


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
        .from ('contract_templates');
        .select ('*');
        .order ('is_default', { ascending: false });
        .order ('created_at', { ascending: false });

    };
=======
    }: {      const { data, error } = await supabase;
        .from ('contract_templates');
        .select ('*');
        .order ('is_default', { ascending: false });
        .order ('created_at', { ascending: false })
};
>>>>>>> 54ad2b1038c082a23519987b245e26e888b5a5dc
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
    },



=======
>>>>>>> 54ad2b1038c082a23519987b245e26e888b5a5dc
    onSuccess: () => {
      queryClient && queryClient.invalidateQueries({ queryKey: ['contractTemplates', user?.id] });
      toast({
        title: "Template saved"
        description: "Contract template has been successfully saved."})
<<<<<<< HEAD


    },


    onError: (error: Error) => {
      console && console.error("Error saving template:", error);
      toast({

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


=======
>>>>>>> 54ad2b1038c082a23519987b245e26e888b5a5dc
      template_data: ContractFormValues,
      is_default?: boolean;
    }) => {
      if (throw new Error ("User not authenticated")) {
  $2
}
<<<<<<< HEAD
      setIsLoading (true);
    },;
    onSuccess: () => {;
      queryClient.invalidateQueries({ queryKey: ['contractTemplates', user?.id] }),;
      toast({;
        title: "Template saved",;
        description: "Contract template has been successfully saved."});
=======
      setIsLoading (true);    },;
    onSuccess: () => {;
      queryClient.invalidateQueries({ queryKey: ['contractTemplates', user?.id] }),;
      toast({;
        title: "Template saved",,
  description: "Contract template has been successfully saved."});
>>>>>>> 54ad2b1038c082a23519987b245e26e888b5a5dc
    },;
    onError: (error: Error) => {;
      console.error("Error saving template:", error),;
      toast({;
<<<<<<< HEAD
        title: "Failed to save template",;
        description: "There was an error saving your contract template.",;
=======
        title: "Failed to save template",,
  description: "There was an error saving your contract template.",;
>>>>>>> 54ad2b1038c082a23519987b245e26e888b5a5dc
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
      } finally {
        setIsLoading (false);
      }

    },




    onSuccess: () => {
      queryClient && queryClient.invalidateQueries({ queryKey: ['contractTemplates', user?.id] });
      toast({
        title: "Template updated"
        description: "Contract template has been successfully updated."})


    },


    onError: (error: Error) => {
      console && console.error("Error updating template:", error);
      toast({


        variant: "destructive"})
    }
  });
  // Delete a template
  const deleteTemplate = useMutation({
    mutationFn: async (templateId: string) => {
      if (!user) throw new Error("User not authenticated");
      setIsLoading(true)
        title: "Failed to update template",
=======
        }        title: "Failed to update template",
>>>>>>> 54ad2b1038c082a23519987b245e26e888b5a5dc
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

=======
>>>>>>> 54ad2b1038c082a23519987b245e26e888b5a5dc
      try {
        const { error } = await supabase
          .from('contract_templates')
          .delete()
          .eq('id', templateId)
<<<<<<< HEAD

          .eq('user_id', user && user.id);
        

          .eq('user_id', user.id),
        

=======
          .eq('user_id', user.id),        
>>>>>>> 54ad2b1038c082a23519987b245e26e888b5a5dc
        if (error) throw error
      } finally {
        setIsLoading(false)
      }

    },
    onSuccess: () => {
      queryClient && queryClient.invalidateQueries({ queryKey: ['contractTemplates', user?.id] });
      toast({
        title: "Template deleted"
        description: "Contract template has been successfully deleted."})
        variant: "destructive"})
    }
  });
  // Set a template as default
  const setDefaultTemplate = useMutation({
    mutationFn: async (templateId: string) => {
      try {
        // First unset any existing default
        await supabase
          .from('contract_templates')
          .update({ is_default: false })
        // Then set the new default
        const { error } = await supabase
          .from('contract_templates')
          .update({ is_default: true })
          .eq('id', templateId)
          .eq('user_id', user.id),
        

        if (error) throw error
      } finally {
        setIsLoading(false)
      }

    },
    onSuccess: () => {
      queryClient && queryClient.invalidateQueries({ queryKey: ['contractTemplates', user?.id] });
      toast({
        title: "Default template set"
        description: "Default contract template has been updated."})

<<<<<<< HEAD

    };


    onError: (error: Error) => {
      console && console.error("Error setting default template:", error);
      toast({
        title: "Failed to set default template";
        description: "There was an error setting your default contract template."
=======
    };

    onError: (error: Error) => {
      console && console.error("Error setting default template:", error);
      toast({
        title: "Failed to set default template",
  description: "There was an error setting your default contract template."
>>>>>>> 54ad2b1038c082a23519987b245e26e888b5a5dc
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
        description: "Default contract template has been updated."});
    }
    on_error: (error: Error) => {
      console.error ("Error setting default template:", error);
      toast ({
<<<<<<< HEAD
        title: "Failed to set default template";
        description: "There was an error setting your default contract template.",
=======
        title: "Failed to set default template",
  description: "There was an error setting your default contract template.",
>>>>>>> 54ad2b1038c082a23519987b245e26e888b5a5dc
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
<<<<<<< HEAD
        title: "Failed to update template";
        description: "There was an error updating your contract template.",
=======
        title: "Failed to update template",
  description: "There was an error updating your contract template.",
>>>>>>> 54ad2b1038c082a23519987b245e26e888b5a5dc
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
<<<<<<< HEAD


          .eq('user_id', user.id),
        

        if (error) throw error
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


=======
        if (error) throw error        if (error) throw error
      } finally {
        setIsLoading(false)
      }
>>>>>>> 54ad2b1038c082a23519987b245e26e888b5a5dc
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

      try {
        // First unset any existing default
        await supabase
          .from('contract_templates')
          .update({ is_default: false })

          .eq('user_id', user.id)

          .eq('is_default', true),
        


=======
          .eq('is_default', true),
        

          .eq('user_id', user.id)
          .eq('is_default', true);
          .eq('is_default', true),
        
>>>>>>> 54ad2b1038c082a23519987b245e26e888b5a5dc
        // Then set the new default
        const { error } = await supabase
          .from('contract_templates')
          .update({ is_default: true })
          .eq('id', templateId)

          .eq('user_id', user && user.id);
        
<<<<<<< HEAD

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


          .eq('user_id', user.id),
        

        if (error) throw error
      } finally {
        setIsLoading(false)
      }

    },


    onSuccess: () => {
      queryClient && queryClient.invalidateQueries({ queryKey: ['contractTemplates', user?.id] });
      toast({
        title: "Default template set"
        description: "Default contract template has been updated."})


    };


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




  }
}
  }
=======
        if (error) throw error  }
}  }
>>>>>>> 54ad2b1038c082a23519987b245e26e888b5a5dc
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
<<<<<<< HEAD
        title:"Template saved",;
        description:"Contract template has been successfully saved."}),;
=======
        title:"Template saved",,
  description:"Contract template has been successfully saved."}),;
>>>>>>> 54ad2b1038c082a23519987b245e26e888b5a5dc
    },;
    onError:(error:Error) => {;
      console.error("Error saving template:", error),;
      toast({;
<<<<<<< HEAD
        title:"Failed to save template",;
        description:"There was an error saving your contract template.",;
=======
        title:"Failed to save template",,
  description:"There was an error saving your contract template.",;
>>>>>>> 54ad2b1038c082a23519987b245e26e888b5a5dc
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
<<<<<<< HEAD
        title:"Template updated",;
        description:"Contract template has been successfully updated."}),;
=======
        title:"Template updated",,
  description:"Contract template has been successfully updated."}),;
>>>>>>> 54ad2b1038c082a23519987b245e26e888b5a5dc
    },;
    onError:(error:Error) => {;
      console.error("Error updating template:", error),;
      toast({;
<<<<<<< HEAD
        title:"Failed to update template",;
        description:"There was an error updating your contract template.",;
=======
        title:"Failed to update template",,
  description:"There was an error updating your contract template.",;
>>>>>>> 54ad2b1038c082a23519987b245e26e888b5a5dc
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
<<<<<<< HEAD
        title:"Template deleted",;
        description:"Contract template has been successfully deleted."}),;
=======
        title:"Template deleted",,
  description:"Contract template has been successfully deleted."}),;
>>>>>>> 54ad2b1038c082a23519987b245e26e888b5a5dc
    },;
    onError:(error:Error) => {;
      console.error("Error deleting template:", error),;
      toast({;
<<<<<<< HEAD
        title:"Failed to delete template",;
        description:"There was an error deleting your contract template.",;
=======
        title:"Failed to delete template",,
  description:"There was an error deleting your contract template.",;
>>>>>>> 54ad2b1038c082a23519987b245e26e888b5a5dc
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
<<<<<<< HEAD
        title:"Default template set",;
        description:"Default contract template has been updated."}),;
=======
        title:"Default template set",,
  description:"Default contract template has been updated."}),;
>>>>>>> 54ad2b1038c082a23519987b245e26e888b5a5dc
    },;
    onError:(error:Error) => {;
      console.error("Error setting default template:", error),;
      toast({;
<<<<<<< HEAD
        title:"Failed to set default template",;
        description:"There was an error setting your default contract template.",;
=======
        title:"Failed to set default template",,
  description:"There was an error setting your default contract template.",;
>>>>>>> 54ad2b1038c082a23519987b245e26e888b5a5dc
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
<<<<<<< HEAD
        title: "Failed to set default template",;
        description: "There was an error setting your default contract template.",;
=======
        title: "Failed to set default template",,
  description: "There was an error setting your default contract template.",;
>>>>>>> 54ad2b1038c082a23519987b245e26e888b5a5dc
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

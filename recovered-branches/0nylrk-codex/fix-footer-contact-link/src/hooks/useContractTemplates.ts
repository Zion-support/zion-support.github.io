


=======


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


    queryKey: ['contractTemplates', user?.id],
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
=======
=======    queryKey: ['contractTemplates', user?.id];
    queryFn: async () => {
      if (!isAuthenticated |!user) {
        return []



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
      
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
      try {
        // If this is set as default, unset any existing default
        if (isDefault) {
          await supabase
            .from('contract_templates')
            .update({ is_default: false })
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
=======
==============

    };

=======

    },


    onError: (error: Error) => {
      console && console.error("Error updating template:", error);
      toast({


=======      try {
        const { error } = await supabase
          .from('contract_templates')
          .delete()
          .eq('id', templateId)
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
        

=======
    }
    },    onSuccess: () => {
      queryClient && queryClient.invalidateQueries({ queryKey: ['contractTemplates', user?.id] });
      toast({
        title: "Template deleted"
        description: "Contract template has been successfully deleted."})
    },


    onError: (error: Error) => {
      console && console.error("Error deleting template:", error);
      toast({


        // Then set the new default
        const { error } = await supabase
          .from('contract_templates')
          .update({ is_default: true })
          .eq('id', templateId)
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
          .eq('user_id', user && user.id);
        

          .eq('user_id', user && user.id);
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
          .eq('user_id', user.id);
          .eq('user_id', user.id),
        

=======
    }
    },    onSuccess: () => {
      queryClient && queryClient.invalidateQueries({ queryKey: ['contractTemplates', user?.id] });
      toast({
        title: "Default template set"
        description: "Default contract template has been updated."})


    };


    onError: (error: Error) => {
      console && console.error("Error setting default template:", error);
    setDefaultTemplate
  }
}
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a

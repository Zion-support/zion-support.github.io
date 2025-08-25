<<<<<<< HEAD:src/hooks/useContractTemplates.ts
import { useState, useEffect } from 'react';
import { ContractTemplate } from '@/types/contracts';

export const useContractTemplates = () => {
  const [templates, setTemplates] = useState<ContractTemplate[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchTemplates = async () => {
      try {
        setLoading(true);
        // Simulate API call
        await new Promise(resolve => setTimeout(resolve, 1000));
        
        // Mock data - in real app, this would come from API
        const mockTemplates: ContractTemplate[] = [
          {
            id: '1',
            name: 'Freelance Service Agreement',
            description: 'Standard agreement for freelance services',
            category: 'Freelance',
            content: 'This agreement is made between...',
            variables: [
              {
                name: 'clientName',
                type: 'string',
                description: 'Name of the client',
                required: true,
              },
              {
                name: 'serviceDescription',
                type: 'string',
                description: 'Description of services to be provided',
                required: true,
              },
              {
                name: 'rate',
                type: 'number',
                description: 'Hourly rate for services',
                required: true,
              },
            ],
            isPublic: true,
            createdAt: '2024-01-01T00:00:00Z',
            updatedAt: '2024-01-01T00:00:00Z',
            authorId: 'admin',
            authorName: 'Admin',
            usageCount: 1250,
            rating: 4.8,
            tags: ['freelance', 'agreement', 'services'],
          },
          {
            id: '2',
            name: 'Non-Disclosure Agreement',
            description: 'Confidentiality agreement template',
            category: 'Legal',
            content: 'This Non-Disclosure Agreement...',
            variables: [
              {
                name: 'companyName',
                type: 'string',
                description: 'Name of the company',
                required: true,
              },
              {
                name: 'confidentialityPeriod',
                type: 'number',
                description: 'Period of confidentiality in years',
                required: true,
                defaultValue: 2,
              },
            ],
            isPublic: true,
            createdAt: '2024-01-01T00:00:00Z',
            updatedAt: '2024-01-01T00:00:00Z',
            authorId: 'admin',
            authorName: 'Admin',
            usageCount: 890,
            rating: 4.6,
            tags: ['nda', 'confidentiality', 'legal'],
          },
        ];

        setTemplates(mockTemplates);
        setError(null);
      } catch (err) {
        setError('Failed to fetch contract templates');
      } finally {
        setLoading(false);
      }
    };

    fetchTemplates();
  }, []);

  const getTemplateById = (id: string) => {
    return templates.find(template => template.id === id);
  };

  const getTemplatesByCategory = (category: string) => {
    return templates.filter(template => template.category === category);
  };

  const searchTemplates = (query: string) => {
    const lowercaseQuery = query.toLowerCase();
    return templates.filter(template =>
      template.name.toLowerCase().includes(lowercaseQuery) ||
      template.description.toLowerCase().includes(lowercaseQuery) ||
      template.tags.some(tag => tag.toLowerCase().includes(lowercaseQuery))
    );
  };

  return {
    templates,
    loading,
    error,
    getTemplateById,
    getTemplatesByCategory,
    searchTemplates,
  };
};
=======
import { useState } from "react";
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { supabase } from "@/integrations/supabase/client";
import { useToast } from "@/hooks/use-toast";
import { useAuth } from "@/hooks/useAuth";
import { ContractTemplate } from "@/types/contracts";
import { ContractFormValues } from "@/components/contracts/components/ContractForm";

export function useContractTemplates() {
  const { user, isAuthenticated } = useAuth();
  const queryClient = useQueryClient();
  const { toast } = useToast();
  const [isLoading, setIsLoading] = useState(false);

  // Fetch templates for the current user
  const { 
    data: templates = [], 
    isLoading: isLoadingTemplates,
    error: templatesError 
  } = useQuery({
    queryKey: ['contractTemplates', user?.id],
    queryFn: async () => {
      if (!isAuthenticated || !user) {
        return [];
      }

      const { data, error } = await supabase
        .from('contract_templates')
        .select('*')
        .order('is_default', { ascending: false })
        .order('created_at', { ascending: false });
      
      if (error) {
        throw error;
      }
      
      return data as ContractTemplate[];
    },
    enabled: isAuthenticated && !!user
  });

  // Create a new template
  const createTemplate = useMutation({
    mutationFn: async ({ 
      title, 
      templateData, 
      isDefault = false 
    }: {
      title: string;
      templateData: ContractFormValues;
      isDefault?: boolean;
    }) => {
      if (!user) throw new Error("User not authenticated");
      
      setIsLoading(true);
      
      try {
        // If this is set as default, unset any existing default
        if (isDefault) {
          await supabase
            .from('contract_templates')
            .update({ is_default: false })
            .eq('user_id', user.id)
            .eq('is_default', true);
        }
        
        // Insert the new template
        const { data, error } = await supabase
          .from('contract_templates')
          .insert({
            user_id: user.id,
            title: title,
            template_data: templateData,
            is_default: isDefault
          })
          .select()
          .single();
        
        if (error) throw error;
        return data as ContractTemplate;
      } finally {
        setIsLoading(false);
      }
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['contractTemplates', user?.id] });
      toast({
        title: "Template saved",
        description: "Contract template has been successfully saved.",
      });
    },
    onError: (error: Error) => {
      console.error("Error saving template:", error);
      toast({
        title: "Failed to save template",
        description: "There was an error saving your contract template.",
        variant: "destructive",
      });
    }
  });

  // Update an existing template
  const updateTemplate = useMutation({
    mutationFn: async ({
      templateId,
      title,
      templateData,
      isDefault = false
    }: {
      templateId: string;
      title: string;
      templateData: ContractFormValues;
      isDefault?: boolean;
    }) => {
      if (!user) throw new Error("User not authenticated");
      
      setIsLoading(true);
      
      try {
        // If this is set as default, unset any existing default
        if (isDefault) {
          await supabase
            .from('contract_templates')
            .update({ is_default: false })
            .eq('user_id', user.id)
            .eq('is_default', true)
            .neq('id', templateId);
        }
        
        // Update the template
        const { data, error } = await supabase
          .from('contract_templates')
          .update({
            title: title,
            template_data: templateData,
            is_default: isDefault,
            updated_at: new Date().toISOString()
          })
          .eq('id', templateId)
          .eq('user_id', user.id)
          .select()
          .single();
        
        if (error) throw error;
        return data as ContractTemplate;
      } finally {
        setIsLoading(false);
      }
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['contractTemplates', user?.id] });
      toast({
        title: "Template updated",
        description: "Contract template has been successfully updated.",
      });
    },
    onError: (error: Error) => {
      console.error("Error updating template:", error);
      toast({
        title: "Failed to update template",
        description: "There was an error updating your contract template.",
        variant: "destructive",
      });
    }
  });

  // Delete a template
  const deleteTemplate = useMutation({
    mutationFn: async (templateId: string) => {
      if (!user) throw new Error("User not authenticated");
      
      setIsLoading(true);
      
      try {
        const { error } = await supabase
          .from('contract_templates')
          .delete()
          .eq('id', templateId)
          .eq('user_id', user.id);
        
        if (error) throw error;
      } finally {
        setIsLoading(false);
      }
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['contractTemplates', user?.id] });
      toast({
        title: "Template deleted",
        description: "Contract template has been successfully deleted.",
      });
    },
    onError: (error: Error) => {
      console.error("Error deleting template:", error);
      toast({
        title: "Failed to delete template",
        description: "There was an error deleting your contract template.",
        variant: "destructive",
      });
    }
  });

  // Set a template as default
  const setDefaultTemplate = useMutation({
    mutationFn: async (templateId: string) => {
      if (!user) throw new Error("User not authenticated");
      
      setIsLoading(true);
      
      try {
        // First unset any existing default
        await supabase
          .from('contract_templates')
          .update({ is_default: false })
          .eq('user_id', user.id)
          .eq('is_default', true);
        
        // Then set the new default
        const { error } = await supabase
          .from('contract_templates')
          .update({ is_default: true })
          .eq('id', templateId)
          .eq('user_id', user.id);
        
        if (error) throw error;
      } finally {
        setIsLoading(false);
      }
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['contractTemplates', user?.id] });
      toast({
        title: "Default template set",
        description: "Default contract template has been updated.",
      });
    },
    onError: (error: Error) => {
      console.error("Error setting default template:", error);
      toast({
        title: "Failed to set default template",
        description: "There was an error setting your default contract template.",
        variant: "destructive",
      });
    }
  });

  return {
    templates,
    isLoading: isLoading || isLoadingTemplates,
    error: templatesError,
    createTemplate,
    updateTemplate,
    deleteTemplate,
    setDefaultTemplate
  };
}
>>>>>>> autobot/2025-08-24T03-49-38-332Z:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/hooks/useContractTemplates.ts

import { useState, useEffect } from 'react';
import { ContractTemplate } from '@/types/contracts';

export function useContractTemplates() {
  const [templates, setTemplates] = useState<ContractTemplate[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const loadTemplates = async () => {
      try {
        setIsLoading(true);
        // In a real app, this would fetch from an API
        const mockTemplates: ContractTemplate[] = [
          {
            id: '1';
            name: 'Web Development Contract';
            description: 'Standard contract for web development projects';
            category: 'Development';
            content: 'Web development contract template...';
            isDefault: true;
            isStarred: false;
            createdAt: '2024-01-01T00:00:00Z';
            updatedAt: '2024-01-01T00:00:00Z';
          };
          {
            id: '2';
            name: 'Design Contract';
            description: 'Contract for design services';
            category: 'Design';
            content: 'Design contract template...';
            isDefault: true;
            isStarred: true;
            createdAt: '2024-01-01T00:00:00Z';
            updatedAt: '2024-01-01T00:00:00Z';
          };
        ];
        
        setTemplates(mockTemplates);
      } catch (err) {
        setError('Failed to load templates');
      } finally {
        setIsLoading(false);
      }
    };

    loadTemplates();
  }, []);

  const createTemplate = async (template: Omit<ContractTemplate, 'id' | 'createdAt' | 'updatedAt'>) => {
    const newTemplate: ContractTemplate = {
      ...template;
      id: Date.now().toString();
      createdAt: new Date().toISOString();
      updatedAt: new Date().toISOString();
    };
    
    setTemplates(prev => [...prev, newTemplate]);
    return newTemplate;
  };

  const updateTemplate = async (id: string, updates: Partial<ContractTemplate>) => {
    setTemplates(prev => 
      prev.map(template => 
        template.id === id 
          ? { ...template, ...updates, updatedAt: new Date().toISOString() }
          : template
      )
    );
  };

  const deleteTemplate = async (id: string) => {
    setTemplates(prev => prev.filter(template => template.id !== id));
  };

  const toggleStar = async (id: string) => {
    setTemplates(prev => 
      prev.map(template => 
        template.id === id 
          ? { ...template, isStarred: !template.isStarred, updatedAt: new Date().toISOString() }
          : template
      )
    );
  };

  return {
    templates;
    isLoading;
    error,
    createTemplate,
    updateTemplate,
    deleteTemplate,
    toggleStar,
  };
}
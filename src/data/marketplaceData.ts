export interface SearchSuggestion {
  id: string;
  text: string;
  category: string;
  type: 'service' | 'product' | 'talent' | 'equipment';
}

export const generateSearchSuggestions = (): SearchSuggestion[] => {
  return [
    // AI Services
    { id: '1', text: 'AI Business Intelligence', category: 'AI Services', type: 'service' },
    { id: '2', text: 'Machine Learning Solutions', category: 'AI Services', type: 'service' },
    { id: '3', text: 'Natural Language Processing', category: 'AI Services', type: 'service' },
    { id: '4', text: 'Computer Vision', category: 'AI Services', type: 'service' },
    
    // Cybersecurity
    { id: '5', text: 'Cybersecurity Consulting', category: 'Security', type: 'service' },
    { id: '6', text: 'Penetration Testing', category: 'Security', type: 'service' },
    { id: '7', text: 'Security Audits', category: 'Security', type: 'service' },
    { id: '8', text: 'Incident Response', category: 'Security', type: 'service' },
    
    // Cloud & DevOps
    { id: '9', text: 'Cloud Migration', category: 'Cloud', type: 'service' },
    { id: '10', text: 'DevOps Automation', category: 'Cloud', type: 'service' },
    { id: '11', text: 'Container Orchestration', category: 'Cloud', type: 'service' },
    { id: '12', text: 'Infrastructure as Code', category: 'Cloud', type: 'service' },
    
    // Micro SaaS
    { id: '13', text: 'AI Business Intelligence Platform', category: 'Micro SaaS', type: 'product' },
    { id: '14', text: 'Customer Experience Suite', category: 'Micro SaaS', type: 'product' },
    { id: '15', text: 'Supply Chain Management', category: 'Micro SaaS', type: 'product' },
    { id: '16', text: 'HR Management Platform', category: 'Micro SaaS', type: 'product' },
    
    // Equipment
    { id: '17', text: 'Green IT Equipment', category: 'Equipment', type: 'equipment' },
    { id: '18', text: 'Data Center Hardware', category: 'Equipment', type: 'equipment' },
    { id: '19', text: 'Network Infrastructure', category: 'Equipment', type: 'equipment' },
    { id: '20', text: 'Security Appliances', category: 'Equipment', type: 'equipment' },
    
    // Talent
    { id: '21', text: 'AI Engineers', category: 'Talent', type: 'talent' },
    { id: '22', text: 'Cybersecurity Experts', category: 'Talent', type: 'talent' },
    { id: '23', text: 'Cloud Architects', category: 'Talent', type: 'talent' },
    { id: '24', text: 'DevOps Engineers', category: 'Talent', type: 'talent' },
    
    // IT Services
    { id: '25', text: 'IT Onsite Services', category: 'IT Services', type: 'service' },
    { id: '26', text: 'Digital Transformation', category: 'IT Services', type: 'service' },
    { id: '27', text: 'IT Consulting', category: 'IT Services', type: 'service' },
    { id: '28', text: 'System Integration', category: 'IT Services', type: 'service' }
  ];
};

export const getSearchSuggestionsByCategory = (category: string): SearchSuggestion[] => {
  return generateSearchSuggestions().filter(suggestion => 
    suggestion.category.toLowerCase().includes(category.toLowerCase())
  );
};

export const getSearchSuggestionsByType = (type: SearchSuggestion['type']): SearchSuggestion[] => {
  return generateSearchSuggestions().filter(suggestion => suggestion.type === type);
};
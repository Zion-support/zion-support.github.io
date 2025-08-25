export interface SearchSuggestion {
  id: string;
  text: string;
<<<<<<< HEAD
  type: string;
}

export function generateSearchSuggestions(): SearchSuggestion[] {
  return [
    { id: '1', text: 'AI Services', type: 'category' },
    { id: '2', text: 'Cybersecurity', type: 'category' },
    { id: '3', text: 'Cloud Solutions', type: 'category' },
    { id: '4', text: 'Data Analytics', type: 'category' },
    { id: '5', text: 'Web Development', type: 'category' },
    { id: '6', text: 'IT Consulting', type: 'category' },
    { id: '7', text: 'Blockchain', type: 'category' },
    { id: '8', text: 'Process Automation', type: 'category' },
    { id: '9', text: 'IoT Solutions', type: 'category' },
    { id: '10', text: 'Quantum Computing', type: 'category' },
    { id: '11', text: 'AR/VR Development', type: 'category' },
    { id: '12', text: 'Green Technology', type: 'category' },
    { id: '13', text: 'Micro SAAS', type: 'service' },
    { id: '14', text: 'Enterprise Solutions', type: 'service' },
    { id: '15', text: 'Custom Software', type: 'service' },
    { id: '16', text: 'Digital Transformation', type: 'service' },
    { id: '17', text: 'Machine Learning', type: 'technology' },
    { id: '18', text: 'DevOps', type: 'technology' },
    { id: '19', text: 'Cybersecurity Audit', type: 'service' },
    { id: '20', text: 'Cloud Migration', type: 'service' }
  ];
<<<<<<< HEAD
}
=======
}
>>>>>>> origin/cursor/resolve-typescript-merge-conflicts-8802
=======
  type: 'talent' | 'service' | 'equipment' | 'category';
}

export const generateSearchSuggestions = (): SearchSuggestion[] => {
  return [
    // Talent suggestions
    { id: 't1', text: 'AI Engineers', type: 'talent' },
    { id: 't2', text: 'Data Scientists', type: 'talent' },
    { id: 't3', text: 'Full Stack Developers', type: 'talent' },
    { id: 't4', text: 'DevOps Engineers', type: 'talent' },
    { id: 't5', text: 'UI/UX Designers', type: 'talent' },
    { id: 't6', text: 'Product Managers', type: 'talent' },
    { id: 't7', text: 'Machine Learning Specialists', type: 'talent' },
    { id: 't8', text: 'Cybersecurity Experts', type: 'talent' },
    
    // Service suggestions
    { id: 's1', text: 'AI Development', type: 'service' },
    { id: 's2', text: 'Cloud Migration', type: 'service' },
    { id: 's3', text: 'Data Analytics', type: 'service' },
    { id: 's4', text: 'Web Development', type: 'service' },
    { id: 's5', text: 'Mobile App Development', type: 'service' },
    { id: 's6', text: 'IT Consulting', type: 'service' },
    { id: 's7', text: 'Cybersecurity Services', type: 'service' },
    { id: 's8', text: 'Digital Transformation', type: 'service' },
    
    // Equipment suggestions
    { id: 'e1', text: 'High-Performance Servers', type: 'equipment' },
    { id: 'e2', text: 'AI Workstations', type: 'equipment' },
    { id: 'e3', text: 'Network Equipment', type: 'equipment' },
    { id: 'e4', text: 'Storage Solutions', type: 'equipment' },
    { id: 'e5', text: 'Security Appliances', type: 'equipment' },
    { id: 'e6', text: 'Cloud Infrastructure', type: 'equipment' },
    
    // Category suggestions
    { id: 'c1', text: 'Artificial Intelligence', type: 'category' },
    { id: 'c2', text: 'Cloud Computing', type: 'category' },
    { id: 'c3', text: 'Cybersecurity', type: 'category' },
    { id: 'c4', text: 'Data Science', type: 'category' },
    { id: 'c5', text: 'Web Development', type: 'category' },
    { id: 'c6', text: 'Mobile Development', type: 'category' },
    { id: 'c7', text: 'DevOps', type: 'category' },
    { id: 'c8', text: 'Blockchain', type: 'category' },
  ];
};
>>>>>>> origin/cursor/install-project-dependencies-and-husky-2974

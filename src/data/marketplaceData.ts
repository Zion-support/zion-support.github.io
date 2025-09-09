export interface SearchSuggestion {
  id: string;
  text: string;
  type: 'content' | 'product' | 'page' | 'service' | 'recent';
  category?: string;
}

export const generateSearchSuggestions = (): SearchSuggestion[] => {
  return [
    { id: '1', text: 'AI Development', type: 'service' },
    { id: '2', text: 'Web Development', type: 'service' },
    { id: '3', text: 'Mobile Apps', type: 'service' },
    { id: '4', text: 'Data Analytics', type: 'service' },
    { id: '5', text: 'Cloud Solutions', type: 'service' },
    { id: '6', text: 'About Us', type: 'page' },
    { id: '7', text: 'Contact', type: 'page' },
    { id: '8', text: 'Blog', type: 'page' },
    { id: '9', text: 'Services', type: 'page' },
    { id: '10', text: 'Products', type: 'page' }
  ];
};

export const MARKETPLACE_LISTINGS = [];
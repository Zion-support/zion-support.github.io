
   url: string;
   method?: 'GET' | 'POST' | 'PUT' | 'DELETE;';
   body?: any;

  ']  const filteredSnippets = snippets.filter(snippet => { const matchesSearch = snippet.title.toLowerCase().includes(searchTerm.toLowerCase()) || snippet.description.toLowerCase().includes(searchTerm.toLowerCase()) || snippet.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase())) const matchesLanguage = filterLanguage === 'all;
  ' || snippet.language === filterLanguage const matchesComplexity = filterComplexity === 'all;



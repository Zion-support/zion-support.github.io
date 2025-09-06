interface SearchResult {
  title: string, description: string
  url: string, type: 'service' | 'page' | 'category'
}
const SearchBar: React.FC = () => {
interface SearchResult {;
  title: string, description: string,;
  url: string, type: 'service' | 'page' | 'category',;
}
    {
      title: 'Cloud Cost Guard'
      description: 'FinOps Assistant for anomaly detection and cost optimization'
      url: '/services'
      type: 'service'
    }
    {
      title: 'Contact Us'
      description: 'Get in touch with our experts for consultation and quotes'
      url: '/contact'
      type: 'page'
    }
    {
      title: 'Pricing'
      description: 'View our transparent pricing for all services'
      url: '/pricing'
      type: 'page'
    }
  ];
    );
    setResults(filteredResults);
    setIsOpen(true);
    setIsLoading(false);

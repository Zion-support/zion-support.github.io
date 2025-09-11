
class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }
  static getDerivedStateFromError(error) {
    return { hasError: true };
  }
  componentDidCatch(error, errorInfo) {
    console.error('Error caught by boundary:', error, errorInfo);
  }
  render() {
    if (this.state.hasError) {
      return <div>Something went wrong.</div>;
    }
    return this.props.children;
  }
}
import React, { useState, useRef, useEffect } from 'react';
import Link from 'next/link';

interface SearchResult {
  title: string, description: string
  url: string, type: 'service' | 'page' | 'category'
}
const SearchBar: React.FC = () => {
interface SearchResult {;
  title: string, description: string,;
  url: string, type: 'service' | 'page' | 'category',;
}

const SearchBar: React.FC = () => {
  const [query, set_query] = useState ('');
  const [results, set_results] = useState < SearchResult[]>([]);
  const [is_open, setIsOpen] = useState (false);
  const [is_loading, setIsLoading] = useState (false);
  const search_ref = useRef < HTMLDivElement>(null);
  const input_ref = useRef < HTMLInputElement>(null);
;
  // Mock search data - in a real app, this would come from an API;
  const search_data: SearchResult[] = [;
    {
      title: 'Micro SaaS Products',
      description: 'Innovative software solutions including Cloud Cost Guard, API Rate Limiter, and more',
      url: '/micro - saas',
      type: 'category',
    },
    {
      title: 'AI Services',
      description: 'Advanced AI solutions including Computer Vision, Fraud Detection, and more',
      url: '/ai - services',
      type: 'category',
    },
    {
      title: 'IT Services',
      description: 'Comprehensive IT solutions including Cloud Migration, Cybersecurity, and more',
      url: '/it - services',
      type: 'category',
    },

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


  // Mock search data - in a real app, this would come from an API;
  const searchData: SearchResult[] = [;
    {;
      title: 'Micro SaaS Products',;
      description: 'Innovative software solutions including Cloud Cost Guard, API Rate Limiter, and more',;
      url: '/micro-saas',;
      type: 'category',;
    },;
    {;
      title: 'AI Services',;
      description: 'Advanced AI solutions including Computer Vision, Fraud Detection, and more',;
      url: '/ai-services',;
      type: 'category',;
    },;
    {;
      title: 'IT Services',;
      description: 'Comprehensive IT solutions including Cloud Migration, Cybersecurity, and more',;
      url: '/it-services',;
      type: 'category',;
    },;
    {;
      title: 'Cloud Cost Guard',;
      description: 'FinOps Assistant for anomaly detection and cost optimization',;
      url: '/services',;
      type: 'service',;
    },;
    {;
      title: 'Contact Us',;
      description: 'Get in touch with our experts for consultation and quotes',;
      url: '/contact',;
      type: 'page',;
    },;
    {;
      title: 'Pricing',;
      description: 'View our transparent pricing for all services',;
      url: '/pricing',;
      type: 'page',;
    },;
  ];
  const handleSearch = async (searchQuery: string) => {;
    if (!searchQuery && searchQuery.trim()) {;
      setResults([]);
      setIsOpen(false);
      return,;

    }
    setIsLoading(true);


    // Simulate API delay;
    await new Promise(resolve => setTimeout(resolve, 300));
    const filteredResults = searchData && searchData.filter(item =>;
      item && item.title.toLowerCase().includes(searchQuery && searchQuery.toLowerCase()) ||;
      item && item.description.toLowerCase().includes(searchQuery && searchQuery.toLowerCase());

    );
    setResults(filteredResults);
    setIsOpen(true);
    setIsLoading(false);

  };

  const handleInputChange = (e: React && React.ChangeEvent<HTMLInputElement>) => {;
    const value = e && e.target.value;
    setQuery(value);
    handleSearch(value),;
  };
  const handleResultClick = () => {;
    setIsOpen(false),;
    setQuery('');
  };
  const handleKeyDown = (e: React && React.KeyboardEvent) => {;
    if (e && e.key === 'Escape') {;
    setIsOpen(false),;
    inputRef && inputRef.current?.blur();
  }

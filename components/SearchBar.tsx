
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
      title: 'Micro SaaS Products'
      description: 'Innovative software solutions including Cloud Cost Guard, API Rate Limiter, and more'
      url: '/micro-saas'
      type: 'category'
    }
    {
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

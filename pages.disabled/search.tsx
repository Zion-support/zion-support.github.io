import React, { useState, useEffect } from 'react';
import type { NextPage } from 'next';
import MainLayout from '../components/layout/MainLayout';
import { Search, Filter, ArrowRight, Clock } from 'lucide-react';
import Link from 'next/link';
const SearchPage: NextPage = () => {;
  const [searchQuery, setSearchQuery] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  const [isSearching, setIsSearching] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState('all');
  const categories = [;
    { id: 'all', name: 'All Content' },
    { id: 'services', name: 'Services' },
    { id: 'solutions', name: 'Solutions' },
    { id: 'blog', name: 'Blog Posts' },
    { id: 'pages', name: 'Pages' }
  ];
  const mockResults = [;
    {;
      id: 1,
      title: 'AI Services - Custom AI Development',
      description: 'Comprehensive AI services including custom model development, machine learning solutions, and AI integration.',
      url: '/services/ai-services',
      category: 'services',
      type: 'Service Page';
},
    {;
      id: 2,
      title: 'Micro SaaS Solutions',
      description: 'Innovative micro SaaS applications designed to solve specific business problems with minimal overhead.',
      url: '/services/micro-saas',
      category: 'services',
      type: 'Service Page';
},
    {;
      id: 3,
      title: 'The Future of AI in Business',
      description: 'Explore the latest AI trends that are transforming businesses and how companies can leverage these technologies.',
      url: '/blog/1',
      category: 'blog',
      type: 'Blog Post';
},
    {;
      id: 4,
      title: 'Enterprise Solutions',
      description: 'Comprehensive enterprise-grade solutions designed for large organizations and complex business requirements.',
      url: '/solutions/enterprise',
      category: 'solutions',
      type: 'Solution Page';
},
    {;
      id: 5,
      title: 'About Zion Tech Group',
      description: 'Learn about our company, mission, values, and the team behind our innovative technology solutions.',
      url: '/about',
      category: 'pages',
      type: 'Company Page';
}
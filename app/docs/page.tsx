<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
import React from 'react'
import { Helmet } from 'react-helmet-async'

const DocsPage: React.FC = () => {
=======
import { ArrowRight } from "lucide-react";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";

export default function DocsZionTechGroup() {
>>>>>>> origin/cursor/analyze-improve-and-deploy-application-0ff3
  return (
    <>
      <Helmet>
=======
'use client';
import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { Search, BookOpen, Code, Zap, Shield, Cloud, Brain, Users, ArrowRight, CheckCircle, ExternalLink, Download, FileText, Settings, Database } from 'lucide-react';

const DocsPage: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');

  const categories = [
    { id: 'all', name: 'All Documentation', icon: BookOpen ,},
    {id: 'getting-started', name: 'Getting Started', icon: Zap ,},
    {id: 'ai-services', name: 'AI Services', icon: Brain ,},
    {id: 'it-services', name: 'IT Services', icon: Cloud ,},
    {id: 'api', name: 'API Reference', icon: Code ,},
    {id: 'security', name: 'Security', icon: Shield ,}];
  const documentation = [
    {id: 1,
      title: 'Getting Started Guide',
      description: 'Complete guide to setting up and using our services',
      category: 'getting-started',
      difficulty: 'Beginner',
      readTime: '10 min',
      lastUpdated: '2024-01-15',
      sections: [,
        'Account Setup',
        'First API Call',
        'Authentication',
        'Basic Configuration'
      ]},
    {id: 2,
      title: 'AI Services Documentation',
      description: 'Comprehensive guide to our AI-powered services',
      category: 'ai-services',
      difficulty: 'Intermediate',
      readTime: '25 min',
      lastUpdated: '2024-01-14',
      sections: [,
        'AI Chat API',
        'Content Generation',
        'Data Analytics',
        'Computer Vision'
      ]},
    {id: 3,
      title: 'IT Services Guide',
      description: 'Complete documentation for our IT infrastructure services',
      category: 'it-services',
      difficulty: 'Advanced',
      readTime: '30 min',
      lastUpdated: '2024-01-13',
      sections: [,
        'Cloud Infrastructure',
        'DevOps & CI/CD',
        'Cybersecurity',
        'Database Management'
      ]},
    {id: 4,
      title: 'API Reference',
      description: 'Complete API reference with examples and endpoints',
      category: 'api',
      difficulty: 'Intermediate',
      readTime: '45 min',
      lastUpdated: '2024-01-12',
      sections: [,
        'Authentication',
        'Endpoints',
        'Error Handling',
        'Rate Limits'
      ]},
    {id: 5,
      title: 'Security Best Practices',
      description: 'Security guidelines and best practices for our services',
      category: 'security',
      difficulty: 'Intermediate',
      readTime: '20 min',
      lastUpdated: '2024-01-11',
      sections: [,
        'Data Protection',
        'Access Control',
        'Encryption',
        'Compliance'
      ]},
    {id: 6,
      title: 'Troubleshooting Guide',
      description: 'Common issues and their solutions',
      category: 'getting-started',
      difficulty: 'Beginner',
      readTime: '15 min',
      lastUpdated: '2024-01-10',
      sections: [,
        'Common Errors',
        'Debugging Tips',
        'Performance Issues',
        'Support Resources'
      ]}];
  const quickLinks = [
    {title: 'API Reference', url: '/api', icon: Code ,},
    {title: 'Tutorials', url: '/tutorials', icon: BookOpen ,},
    {title: 'Community', url: '/community', icon: Users ,},
    {title: 'Support', url: '/support', icon: Shield ,}]

  const filteredDocs = selectedCategory === 'all' 
    ? documentation;
    : documentation.filter(doc => doc.category === selectedCategory);

  const searchResults = searchQuery;
    ? documentation.filter(doc =>)
        doc.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        doc.description.toLowerCase().includes(searchQuery.toLowerCase())
      )
    : filteredDocs;

  return (
    <>
  <Helmet />
>>>>>>> origin/cursor/analyze-improve-and-deploy-application-1232
        <title>Documentation - Zion Tech Group</title>
        <meta name="description" content="Documentation services by Zion Tech Group. Advanced AI and IT solutions for your business." />
      </Helmet>
      
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Documentation
            </h1>
            <p className="text-xl text-gray-300 mb-8">
              Coming soon - Advanced Documentation solutions by Zion Tech Group
            </p>
          </div>
        </div>
      </div>
    </>
  )
}

export default DocsPage
>>>>>>> origin/cursor/analyze-improve-and-deploy-application-0f1c
=======
'use client';
import React from 'react';
import { Helmet } from 'react-helmet-async';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

const DocsPage: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>Docs - Zion Tech Group</title>
        <meta name="description" content="Zion Tech Group - Docs page" />
      </Helmet>
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        <Navigation />
        <div className="pt-24 pb-16">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-4xl lg:text-6xl font-bold text-white mb-6 cyber-text neon-pulse">
              Docs
            </h1>
            <p className="text-xl text-gray-300 mb-8">
              This page is under construction. Please check back soon.
            </p>
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
};

export default DocsPage;
>>>>>>> origin/cursor/analyze-improve-and-deploy-application-1009

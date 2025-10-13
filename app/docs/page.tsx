'use client';
import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { 
  DocumentTextIcon,
  BookOpenIcon,
  CodeBracketIcon,
  ArrowRightIcon,
  CheckCircleIcon,
  MagnifyingGlassIcon,
  TagIcon,
  ClockIcon
} from '@heroicons/react/24/outline';

export default function DocsPage() {
  const docCategories = [
    {
      title: "Getting Started",
      description: "Quick start guides and setup instructions for our services",
      icon: BookOpenIcon,
      color: "from-blue-500 to-cyan-500",
      articles: [
        { title: "Quick Start Guide", description: "Get up and running in minutes", readTime: "5 min" },
        { title: "Installation Guide", description: "Step-by-step installation instructions", readTime: "10 min" },
        { title: "Configuration", description: "Configure your services for optimal performance", readTime: "15 min" },
        { title: "First Project", description: "Create your first project with our platform", readTime: "20 min" }
      ]
    },
    {
      title: "API Reference",
      description: "Complete API documentation for developers",
      icon: CodeBracketIcon,
      color: "from-green-500 to-emerald-500",
      articles: [
        { title: "Authentication", description: "Learn how to authenticate with our APIs", readTime: "8 min" },
        { title: "Endpoints", description: "Complete list of available API endpoints", readTime: "30 min" },
        { title: "Rate Limits", description: "Understanding API rate limits and best practices", readTime: "5 min" },
        { title: "Error Handling", description: "How to handle API errors and responses", readTime: "10 min" }
      ]
    },
    {
      title: "AI Solutions",
      description: "Documentation for our AI and machine learning services",
      icon: DocumentTextIcon,
      color: "from-purple-500 to-pink-500",
      articles: [
        { title: "AI Models", description: "Available AI models and their capabilities", readTime: "25 min" },
        { title: "Training Data", description: "How to prepare and upload training data", readTime: "15 min" },
        { title: "Model Deployment", description: "Deploy your AI models to production", readTime: "20 min" },
        { title: "Performance Optimization", description: "Optimize your AI models for better performance", readTime: "18 min" }
      ]
    },
    {
      title: "Cloud Services",
      description: "Cloud infrastructure and deployment documentation",
      icon: DocumentTextIcon,
      color: "from-yellow-500 to-orange-500",
      articles: [
        { title: "Cloud Setup", description: "Set up your cloud infrastructure", readTime: "12 min" },
        { title: "Deployment Guide", description: "Deploy applications to the cloud", readTime: "15 min" },
        { title: "Monitoring", description: "Monitor your cloud resources and applications", readTime: "10 min" },
        { title: "Scaling", description: "Scale your applications based on demand", readTime: "8 min" }
      ]
    },
    {
      title: "Cybersecurity",
      description: "Security best practices and implementation guides",
      icon: DocumentTextIcon,
      color: "from-red-500 to-pink-500",
      articles: [
        { title: "Security Setup", description: "Configure security settings and policies", readTime: "20 min" },
        { title: "Threat Detection", description: "Set up threat detection and monitoring", readTime: "15 min" },
        { title: "Incident Response", description: "How to respond to security incidents", readTime: "12 min" },
        { title: "Compliance", description: "Meet industry compliance requirements", readTime: "25 min" }
      ]
    },
    {
      title: "Troubleshooting",
      description: "Common issues and their solutions",
      icon: DocumentTextIcon,
      color: "from-indigo-500 to-purple-500",
      articles: [
        { title: "Common Issues", description: "Solutions to frequently encountered problems", readTime: "15 min" },
        { title: "Error Codes", description: "Understanding error codes and messages", readTime: "10 min" },
        { title: "Performance Issues", description: "Troubleshoot performance problems", readTime: "12 min" },
        { title: "Contact Support", description: "When and how to contact our support team", readTime: "5 min" }
      ]
    }
  ];

  const popularArticles = [
    { title: "Quick Start Guide", category: "Getting Started", readTime: "5 min", views: "2.5k" },
    { title: "API Authentication", category: "API Reference", readTime: "8 min", views: "1.8k" },
    { title: "AI Model Deployment", category: "AI Solutions", readTime: "20 min", views: "1.5k" },
    { title: "Cloud Security Setup", category: "Cybersecurity", readTime: "20 min", views: "1.2k" },
    { title: "Performance Optimization", category: "Troubleshooting", readTime: "12 min", views: "1.0k" }
  ];

  return (
    <>
      <Helmet>
        <title>Documentation - Zion Tech Group</title>
        <meta name="description" content="Comprehensive documentation for Zion Tech Group's AI, IT, and cloud solutions. Find guides, API references, and troubleshooting information." />
        <meta name="keywords" content="documentation, API reference, guides, tutorials, AI solutions, cloud services, cybersecurity" />
      </Helmet>
      
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              Documentation
            </h1>
            <p className="text-xl text-gray-300 mb-8 leading-relaxed">
              Comprehensive guides and references for all our services
            </p>
            <p className="text-lg text-gray-400 max-w-3xl mx-auto mb-8">
              Find everything you need to get started with our AI, IT, and cloud solutions. 
              From quick start guides to detailed API references, we've got you covered.
            </p>
            
            {/* Search Bar */}
            <div className="max-w-2xl mx-auto">
              <div className="relative">
                <MagnifyingGlassIcon className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                <input
                  type="text"
                  placeholder="Search documentation..."
                  className="w-full pl-12 pr-4 py-4 bg-slate-800 border border-slate-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Popular Articles */}
      <section className="py-20 bg-slate-900">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-white mb-8">Popular Articles</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {popularArticles.map((article, index) => (
                <div key={index} className="bg-gradient-to-br from-slate-800 to-slate-700 p-6 rounded-xl border border-slate-600 hover:border-blue-500 transition-all duration-300">
                  <div className="flex items-center justify-between mb-4">
                    <span className="bg-blue-600 text-white px-3 py-1 rounded-full text-sm font-semibold">
                      {article.category}
                    </span>
                    <span className="text-gray-400 text-sm">{article.readTime}</span>
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3">{article.title}</h3>
                  <div className="flex items-center justify-between">
                    <span className="text-gray-400 text-sm">{article.views} views</span>
                    <Link 
                      to={`/docs/${article.title.toLowerCase().replace(/\s+/g, '-')}`}
                      className="text-blue-400 hover:text-blue-300 font-semibold text-sm flex items-center gap-2"
                    >
                      Read <ArrowRightIcon className="w-4 h-4" />
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Documentation Categories */}
      <section className="py-20 bg-slate-900">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-white mb-8">Browse by Category</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {docCategories.map((category, index) => {
                const Icon = category.icon;
                return (
                  <div key={index} className="bg-gradient-to-br from-slate-800 to-slate-700 rounded-xl border border-slate-600 hover:border-blue-500 transition-all duration-300">
                    <div className="p-8">
                      <div className={`w-16 h-16 bg-gradient-to-r ${category.color} rounded-lg flex items-center justify-center mb-6`}>
                        <Icon className="w-8 h-8 text-white" />
                      </div>
                      <h3 className="text-2xl font-bold text-white mb-4">{category.title}</h3>
                      <p className="text-gray-300 mb-6">{category.description}</p>
                      
                      <div className="space-y-3">
                        {category.articles.map((article, articleIndex) => (
                          <div key={articleIndex} className="flex items-center justify-between py-2 border-b border-slate-600 last:border-b-0">
                            <div>
                              <h4 className="text-white font-semibold">{article.title}</h4>
                              <p className="text-gray-400 text-sm">{article.description}</p>
                            </div>
                            <div className="flex items-center gap-2 text-gray-400 text-sm">
                              <ClockIcon className="w-4 h-4" />
                              <span>{article.readTime}</span>
                            </div>
                          </div>
                        ))}
                      </div>
                      
                      <div className="mt-6">
                        <Link 
                          to={`/docs/${category.title.toLowerCase().replace(/\s+/g, '-')}`}
                          className="text-blue-400 hover:text-blue-300 font-semibold flex items-center gap-2"
                        >
                          View All Articles <ArrowRightIcon className="w-4 h-4" />
                        </Link>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Help Section */}
      <section className="py-20 bg-gradient-to-r from-slate-900 to-blue-900">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-8">
              Need Help?
            </h2>
            <p className="text-xl text-gray-300 mb-12">
              Can't find what you're looking for? Our support team is here to help
            </p>
            
            <div className="grid md:grid-cols-3 gap-8 mb-12">
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <DocumentTextIcon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-2">Documentation</h3>
                <p className="text-gray-300">Browse our comprehensive documentation</p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <BookOpenIcon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-2">Tutorials</h3>
                <p className="text-gray-300">Step-by-step tutorials and guides</p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <CodeBracketIcon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-2">API Reference</h3>
                <p className="text-gray-300">Complete API documentation</p>
              </div>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                to="/support" 
                className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:from-blue-700 hover:to-purple-700 transition-all duration-300 flex items-center justify-center gap-2"
              >
                Contact Support
                <ArrowRightIcon className="w-5 h-5" />
              </Link>
              <Link 
                to="/tutorials" 
                className="border-2 border-blue-400 text-blue-300 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-blue-400 hover:text-white transition-all duration-300 flex items-center justify-center gap-2"
              >
                View Tutorials
                <ArrowRightIcon className="w-5 h-5" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
'use client';
import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { 
  FileText, 
  Video, 
  BookOpen, 
  Download, 
  ExternalLink, 
  Calendar, 
  Users, 
  Star, 
  ArrowRight, 
  Phone, 
  Mail, 
  MapPin,
  Search,
  Filter,
  Clock,
  Tag
} from 'lucide-react';

const ResourcesPage: React.FC = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  const resources = [
    // Whitepapers
    {
      id: 'ai-implementation-guide',
      title: 'AI Implementation Guide for Enterprises',
      category: 'whitepapers',
      type: 'PDF',
      description: 'Comprehensive guide to implementing AI solutions in enterprise environments.',
      downloadUrl: 'https://ziontechgroup.com/resources/ai-implementation-guide.pdf',
      size: '2.5 MB',
      date: '2024-01-15',
      rating: 4.9,
      downloads: 1250,
      icon: FileText,
      color: 'from-blue-500 to-cyan-500'
    },
    {
      id: 'cybersecurity-best-practices',
      title: 'Cybersecurity Best Practices 2024',
      category: 'whitepapers',
      type: 'PDF',
      description: 'Essential cybersecurity practices for modern businesses.',
      downloadUrl: 'https://ziontechgroup.com/resources/cybersecurity-best-practices.pdf',
      size: '1.8 MB',
      date: '2024-01-10',
      rating: 4.8,
      downloads: 980,
      icon: FileText,
      color: 'from-red-500 to-pink-500'
    },
    {
      id: 'cloud-migration-strategy',
      title: 'Cloud Migration Strategy & Planning',
      category: 'whitepapers',
      type: 'PDF',
      description: 'Step-by-step guide to successful cloud migration.',
      downloadUrl: 'https://ziontechgroup.com/resources/cloud-migration-strategy.pdf',
      size: '3.2 MB',
      date: '2024-01-05',
      rating: 4.7,
      downloads: 750,
      icon: FileText,
      color: 'from-green-500 to-teal-500'
    },

    // Case Studies
    {
      id: 'healthcare-ai-case-study',
      title: 'Healthcare AI Transformation Case Study',
      category: 'case-studies',
      type: 'PDF',
      description: 'How we helped a major hospital implement AI for patient care.',
      downloadUrl: 'https://ziontechgroup.com/resources/healthcare-ai-case-study.pdf',
      size: '4.1 MB',
      date: '2024-01-12',
      rating: 4.9,
      downloads: 650,
      icon: BookOpen,
      color: 'from-purple-500 to-violet-500'
    },
    {
      id: 'fintech-automation-case-study',
      title: 'Fintech Automation Success Story',
      category: 'case-studies',
      type: 'PDF',
      description: 'Automation solutions that reduced processing time by 80%.',
      downloadUrl: 'https://ziontechgroup.com/resources/fintech-automation-case-study.pdf',
      size: '2.9 MB',
      date: '2024-01-08',
      rating: 4.8,
      downloads: 520,
      icon: BookOpen,
      color: 'from-yellow-500 to-orange-500'
    },

    // Webinars
    {
      id: 'ai-trends-2024',
      title: 'AI Trends and Predictions for 2024',
      category: 'webinars',
      type: 'Video',
      description: 'Expert insights on AI trends and future predictions.',
      downloadUrl: 'https://ziontechgroup.com/resources/ai-trends-2024.mp4',
      size: '125 MB',
      date: '2024-01-20',
      rating: 4.9,
      downloads: 2100,
      icon: Video,
      color: 'from-indigo-500 to-purple-500'
    },
    {
      id: 'cybersecurity-webinar',
      title: 'Cybersecurity in the AI Era',
      category: 'webinars',
      type: 'Video',
      description: 'Protecting your business in the age of AI and automation.',
      downloadUrl: 'https://ziontechgroup.com/resources/cybersecurity-webinar.mp4',
      size: '98 MB',
      date: '2024-01-18',
      rating: 4.7,
      downloads: 1800,
      icon: Video,
      color: 'from-red-500 to-pink-500'
    },

    // E-books
    {
      id: 'digital-transformation-ebook',
      title: 'The Complete Guide to Digital Transformation',
      category: 'e-books',
      type: 'PDF',
      description: 'Comprehensive e-book on digital transformation strategies.',
      downloadUrl: 'https://ziontechgroup.com/resources/digital-transformation-ebook.pdf',
      size: '5.8 MB',
      date: '2024-01-14',
      rating: 4.8,
      downloads: 3200,
      icon: BookOpen,
      color: 'from-teal-500 to-blue-500'
    },
    {
      id: 'micro-saas-guide',
      title: 'Micro SAAS Development Guide',
      category: 'e-books',
      type: 'PDF',
      description: 'Building and scaling micro SAAS applications.',
      downloadUrl: 'https://ziontechgroup.com/resources/micro-saas-guide.pdf',
      size: '4.3 MB',
      date: '2024-01-11',
      rating: 4.9,
      downloads: 2800,
      icon: BookOpen,
      color: 'from-pink-500 to-rose-500'
    },

    // Templates
    {
      id: 'ai-project-template',
      title: 'AI Project Planning Template',
      category: 'templates',
      type: 'Excel',
      description: 'Excel template for planning AI projects and tracking progress.',
      downloadUrl: 'https://ziontechgroup.com/resources/ai-project-template.xlsx',
      size: '0.8 MB',
      date: '2024-01-16',
      rating: 4.6,
      downloads: 1500,
      icon: FileText,
      color: 'from-green-500 to-emerald-500'
    },
    {
      id: 'it-budget-template',
      title: 'IT Budget Planning Template',
      category: 'templates',
      type: 'Excel',
      description: 'Comprehensive template for IT budget planning and tracking.',
      downloadUrl: 'https://ziontechgroup.com/resources/it-budget-template.xlsx',
      size: '1.2 MB',
      date: '2024-01-13',
      rating: 4.7,
      downloads: 1200,
      icon: FileText,
      color: 'from-orange-500 to-red-500'
    }
  ];

  const categories = [
    { id: 'all', name: 'All Resources', count: resources.length },
    { id: 'whitepapers', name: 'Whitepapers', count: resources.filter(r => r.category === 'whitepapers').length },
    { id: 'case-studies', name: 'Case Studies', count: resources.filter(r => r.category === 'case-studies').length },
    { id: 'webinars', name: 'Webinars', count: resources.filter(r => r.category === 'webinars').length },
    { id: 'e-books', name: 'E-books', count: resources.filter(r => r.category === 'e-books').length },
    { id: 'templates', name: 'Templates', count: resources.filter(r => r.category === 'templates').length }
  ];

  const filteredResources = resources.filter(resource => {
    const matchesCategory = selectedCategory === 'all' || resource.category === selectedCategory;
    const matchesSearch = resource.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         resource.description.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const contactInfo = {
    phone: '+1 (302) 464-0950',
    email: 'kleber@ziontechgroup.com',
    address: '364 E Main St STE 1008, Middletown, DE 19709'
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 cyber-grid neural-network-bg">
      {/* Header */}
      <div className="container mx-auto px-4 py-16 pt-24">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 holographic-text cyber-text glitch" data-text="Resources">
            Resources
          </h1>
          <p className="text-xl md:text-2xl text-cyan-400 mb-8 font-medium cyber-glow">
            Knowledge Hub for AI and IT Professionals
          </p>
          <p className="text-lg text-gray-300 max-w-4xl mx-auto mb-12 leading-relaxed">
            Access our comprehensive library of whitepapers, case studies, webinars, e-books, 
            and templates to stay ahead in the rapidly evolving world of AI and IT.
          </p>
        </div>

        {/* Search and Filter */}
        <div className="mb-12">
          <div className="flex flex-col md:flex-row gap-4 mb-6">
            <div className="flex-1 relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="text"
                placeholder="Search resources..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-cyan-400"
              />
            </div>
            <div className="flex gap-2">
              {categories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => setSelectedCategory(category.id)}
                  className={`px-4 py-3 rounded-lg font-medium transition-all duration-300 ${
                    selectedCategory === category.id
                      ? 'bg-cyan-500 text-white cyber-glow'
                      : 'bg-gray-800 text-gray-300 hover:bg-gray-700 hover:text-cyan-400'
                  }`}
                >
                  {category.name} ({category.count})
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Resources Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {filteredResources.map((resource) => {
            const IconComponent = resource.icon;
            return (
              <div
                key={resource.id}
                className="cyber-card hologram-card p-6 hover:scale-105 transition-all duration-300"
              >
                <div className={`w-12 h-12 rounded-lg bg-gradient-to-r ${resource.color} flex items-center justify-center mb-4`}>
                  <IconComponent className="w-6 h-6 text-white" />
                </div>
                
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm text-cyan-400 font-medium">{resource.type}</span>
                  <span className="text-sm text-gray-400">{resource.size}</span>
                </div>
                
                <h3 className="text-xl font-bold text-white mb-3">{resource.title}</h3>
                <p className="text-gray-300 mb-4 leading-relaxed">{resource.description}</p>
                
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center text-yellow-400">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className={`w-4 h-4 ${i < Math.floor(resource.rating) ? 'fill-current' : ''}`} />
                    ))}
                    <span className="ml-1 text-sm text-gray-300">({resource.rating})</span>
                  </div>
                  <div className="text-sm text-gray-400">
                    {resource.downloads.toLocaleString()} downloads
                  </div>
                </div>
                
                <div className="flex items-center justify-between text-sm text-gray-400 mb-4">
                  <div className="flex items-center">
                    <Calendar className="w-4 h-4 mr-1" />
                    {new Date(resource.date).toLocaleDateString()}
                  </div>
                  <div className="flex items-center">
                    <Download className="w-4 h-4 mr-1" />
                    {resource.downloads.toLocaleString()}
                  </div>
                </div>
                
                <a
                  href={resource.downloadUrl}
                  className="w-full cyber-button text-center inline-flex items-center justify-center"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Download className="w-4 h-4 mr-2" />
                  Download
                </a>
              </div>
            );
          })}
        </div>

        {/* Newsletter Signup */}
        <div className="cyber-card hologram-card p-12 text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Stay Updated with Our Latest Resources
          </h2>
          <p className="text-lg text-gray-300 mb-8 max-w-2xl mx-auto">
            Subscribe to our newsletter and get access to exclusive resources, industry insights, 
            and early access to new content.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-cyan-400"
            />
            <button className="cyber-button px-6 py-3">
              Subscribe
            </button>
          </div>
        </div>

        {/* Contact Info */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="cyber-card hologram-card p-6 text-center">
            <Phone className="w-8 h-8 text-cyan-400 mx-auto mb-4" />
            <h3 className="text-lg font-semibold text-white mb-2">Phone</h3>
            <a href={`tel:${contactInfo.phone}`} className="text-cyan-400 hover:text-cyan-300">
              {contactInfo.phone}
            </a>
          </div>
          <div className="cyber-card hologram-card p-6 text-center">
            <Mail className="w-8 h-8 text-cyan-400 mx-auto mb-4" />
            <h3 className="text-lg font-semibold text-white mb-2">Email</h3>
            <a href={`mailto:${contactInfo.email}`} className="text-cyan-400 hover:text-cyan-300">
              {contactInfo.email}
            </a>
          </div>
          <div className="cyber-card hologram-card p-6 text-center">
            <MapPin className="w-8 h-8 text-cyan-400 mx-auto mb-4" />
            <h3 className="text-lg font-semibold text-white mb-2">Address</h3>
            <p className="text-gray-300 text-sm">{contactInfo.address}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ResourcesPage;
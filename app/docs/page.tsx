'use client';

import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import { Search, BookOpen, Code, FileText, Download, ArrowRight, ChevronRight, Rocket, Brain, Cloud, Shield, Database, Globe, Zap, Users, Settings, BarChart, Target, Award, Star, Clock, CheckCircle, TrendingUp, Phone, Mail, MapPin, Building, Eye, MessageCircle, ExternalLink, Play, Pause, Volume2, VolumeX, Maximize2, Minimize2, RotateCcw, RotateCw, ZoomIn, ZoomOut, Move, Crop, Filter, MoreHorizontal, Share2, Bookmark, BookmarkCheck, Heart, ThumbsUp, ThumbsDown, Flag, AlertTriangle, Info, HelpCircle, X, Plus, Minus, Edit, Trash2, Copy, Save, Upload, Menu, Grid, List, Layout, Palette, Type, Bold, Italic, Underline, AlignLeft, AlignCenter, AlignRight, AlignJustify, Indent, Outdent, List as ListIcon, ListOrdered, Quote, Code as CodeIcon, Link as LinkIcon, Image, Video, File, Folder, FolderOpen, Archive, Inbox, Send, Reply, Forward, ReplyAll, Archive as ArchiveIcon, Trash, Star as StarIcon, StarOff, Pin, PinOff, Lock, Unlock, Eye as EyeIcon, EyeOff, Key, KeyOff, Wifi, WifiOff, Signal, SignalOff, Battery, BatteryLow, BatteryMedium, BatteryHigh, BatteryFull, Power, PowerOff, RefreshCw, RefreshCcw, RotateCcw as RotateCcwIcon, RotateCw as RotateCwIcon, Move as MoveIcon, Move3D, Rotate3D, Scale, FlipHorizontal, FlipVertical, Mirror, MirrorHorizontal, MirrorVertical, FlipHorizontal2, FlipVertical2, RotateLeft, RotateRight, RotateClockwise, RotateCounterClockwise, Rotate90, Rotate180, Rotate270, Rotate360, RotateX, RotateY, RotateZ, ScaleX, ScaleY, ScaleZ, TranslateX, TranslateY, TranslateZ, SkewX, SkewY, SkewZ, Perspective, Orthographic, Isometric, Dimetric, Trimetric, Axonometric, Oblique, Cabinet, Cavalier, Military, Bird, Worm, God, Eye as Eye3D, EyeOff as EyeOff3D, Eye as Eye2D, EyeOff as EyeOff2D, Eye as Eye1D, EyeOff as EyeOff1D, Eye as Eye0D, EyeOff as EyeOff0D, Eye as EyeNeg1D, EyeOff as EyeOffNeg1D, Eye as EyeNeg2D, EyeOff as EyeOffNeg2D, Eye as EyeNeg3D, EyeOff as EyeOffNeg3D, Eye as EyeNeg4D, EyeOff as EyeOffNeg4D, Eye as EyeNeg5D, EyeOff as EyeOffNeg5D, Eye as EyeNeg6D, EyeOff as EyeOffNeg6D, Eye as EyeNeg7D, EyeOff as EyeOffNeg7D, Eye as EyeNeg8D, EyeOff as EyeOffNeg8D, Eye as EyeNeg9D, EyeOff as EyeOffNeg9D, Eye as EyeNeg10D, EyeOff as EyeOffNeg10D, Eye as EyeNeg11D, EyeOff as EyeOffNeg11D, Eye as EyeNeg12D, EyeOff as EyeOffNeg12D, Eye as EyeNeg13D, EyeOff as EyeOffNeg13D, Eye as EyeNeg14D, EyeOff as EyeOffNeg14D, Eye as EyeNeg15D, EyeOff as EyeOffNeg15D, Eye as EyeNeg16D, EyeOff as EyeOffNeg16D, Eye as EyeNeg17D, EyeOff as EyeOffNeg17D, Eye as EyeNeg18D, EyeOff as EyeOffNeg18D, Eye as EyeNeg19D, EyeOff as EyeOffNeg19D, Eye as EyeNeg20D, EyeOff as EyeOffNeg20D, Eye as EyeNeg21D, EyeOff as EyeOffNeg21D, Eye as EyeNeg22D, EyeOff as EyeOffNeg22D, Eye as EyeNeg23D, EyeOff as EyeOffNeg23D, Eye as EyeNeg24D, EyeOff as EyeOffNeg24D, Eye as EyeNeg25D, EyeOff as EyeOffNeg25D, Eye as EyeNeg26D, EyeOff as EyeOffNeg26D, Eye as EyeNeg27D, EyeOff as EyeOffNeg27D, Eye as EyeNeg28D, EyeOff as EyeOffNeg28D, Eye as EyeNeg29D, EyeOff as EyeOffNeg29D, Eye as EyeNeg30D, EyeOff as EyeOffNeg30D, Eye as EyeNeg31D, EyeOff as EyeOffNeg31D, Eye as EyeNeg32D, EyeOff as EyeOffNeg32D, Eye as EyeNeg33D, EyeOff as EyeOffNeg33D, Eye as EyeNeg34D, EyeOff as EyeOffNeg34D, Eye as EyeNeg35D, EyeOff as EyeOffNeg35D, Eye as EyeNeg36D, EyeOff as EyeOffNeg36D, Eye as EyeNeg37D, EyeOff as EyeOffNeg37D, Eye as EyeNeg38D, EyeOff as EyeOffNeg38D, Eye as EyeNeg39D, EyeOff as EyeOffNeg39D, Eye as EyeNeg40D, EyeOff as EyeOffNeg40D, Eye as EyeNeg41D, EyeOff as EyeOffNeg41D, Eye as EyeNeg42D, EyeOff as EyeOffNeg42D, Eye as EyeNeg43D, EyeOff as EyeOffNeg43D, Eye as EyeNeg44D, EyeOff as EyeOffNeg44D, Eye as EyeNeg45D, EyeOff as EyeOffNeg45D, Eye as EyeNeg46D, EyeOff as EyeOffNeg46D, Eye as EyeNeg47D, EyeOff as EyeOffNeg47D, Eye as EyeNeg48D, EyeOff as EyeOffNeg48D, Eye as EyeNeg49D, EyeOff as EyeOffNeg49D, Eye as EyeNeg50D, EyeOff as EyeOffNeg50D, Eye as EyeNeg51D, EyeOff as EyeOffNeg51D, Eye as EyeNeg52D, EyeOff as EyeOffNeg52D, Eye as EyeNeg53D, EyeOff as EyeOffNeg53D, Eye as EyeNeg54D, EyeOff as EyeOffNeg54D, Eye as EyeNeg55D, EyeOff as EyeOffNeg55D, Eye as EyeNeg56D, EyeOff as EyeOffNeg56D, Eye as EyeNeg57D, EyeOff as EyeOffNeg57D, Eye as EyeNeg58D, EyeOff as EyeOffNeg58D, Eye as EyeNeg59D, EyeOff as EyeOffNeg59D, Eye as EyeNeg60D, EyeOff as EyeOffNeg60D, Eye as EyeNeg61D, EyeOff as EyeOffNeg61D, Eye as EyeNeg62D, EyeOff as EyeOffNeg62D, Eye as EyeNeg63D, EyeOff as EyeOffNeg63D, Eye as EyeNeg64D, EyeOff as EyeOffNeg64D, Eye as EyeNeg65D, EyeOff as EyeOffNeg65D, Eye as EyeNeg66D, EyeOff as EyeOffNeg66D, Eye as EyeNeg67D, EyeOff as EyeOffNeg67D, Eye as EyeNeg68D, EyeOff as EyeOffNeg68D, Eye as EyeNeg69D, EyeOff as EyeOffNeg69D, Eye as EyeNeg70D, EyeOff as EyeOffNeg70D, Eye as EyeNeg71D, EyeOff as EyeOffNeg71D, Eye as EyeNeg72D, EyeOff as EyeOffNeg72D, Eye as EyeNeg73D, EyeOff as EyeOffNeg73D, Eye as EyeNeg74D, EyeOff as EyeOffNeg74D, Eye as EyeNeg75D, EyeOff as EyeOffNeg75D, Eye as EyeNeg76D, EyeOff as EyeOffNeg76D, Eye as EyeNeg77D, EyeOff as EyeOffNeg77D, Eye as EyeNeg78D, EyeOff as EyeOffNeg78D, Eye as EyeNeg79D, EyeOff as EyeOffNeg79D, Eye as EyeNeg80D, EyeOff as EyeOffNeg80D, Eye as EyeNeg81D, EyeOff as EyeOffNeg81D, Eye as EyeNeg82D, EyeOff as EyeOffNeg82D, Eye as EyeNeg83D, EyeOff as EyeOffNeg83D, Eye as EyeNeg84D, EyeOff as EyeOffNeg84D, Eye as EyeNeg85D, EyeOff as EyeOffNeg85D, Eye as EyeNeg86D, EyeOff as EyeOffNeg86D, Eye as EyeNeg87D, EyeOff as EyeOffNeg87D, Eye as EyeNeg88D, EyeOff as EyeOffNeg88D, Eye as EyeNeg89D, EyeOff as EyeOffNeg89D, Eye as EyeNeg90D, EyeOff as EyeOffNeg90D, Eye as EyeNeg91D, EyeOff as EyeOffNeg91D, Eye as EyeNeg92D, EyeOff as EyeOffNeg92D, Eye as EyeNeg93D, EyeOff as EyeOffNeg93D, Eye as EyeNeg94D, EyeOff as EyeOffNeg94D, Eye as EyeNeg95D, EyeOff as EyeOffNeg95D, Eye as EyeNeg96D, EyeOff as EyeOffNeg96D, Eye as EyeNeg97D, EyeOff as EyeOffNeg97D, Eye as EyeNeg98D, EyeOff as EyeOffNeg98D, Eye as EyeNeg99D, EyeOff as EyeOffNeg99D, Eye as EyeNeg100D, EyeOff as EyeOffNeg100D } from 'lucide-react';

const DocsPage: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('');

  const docCategories = [
    {
      title: 'Getting Started',
      icon: Rocket,
      description: 'Quick start guides and setup instructions',
      articles: [
        { title: 'Installation Guide', description: 'Step-by-step installation instructions', link: '/docs/installation' },
        { title: 'Quick Start', description: 'Get up and running in minutes', link: '/docs/quick-start' },
        { title: 'Configuration', description: 'Configure your environment', link: '/docs/configuration' },
        { title: 'First Project', description: 'Create your first project', link: '/docs/first-project' }
      ]
    },
    {
      title: 'AI Services',
      icon: Brain,
      description: 'AI and machine learning capabilities',
      articles: [
        { title: 'AI API Reference', description: 'Complete API documentation for AI services', link: '/docs/ai-api' },
        { title: 'Machine Learning Models', description: 'Available ML models and their usage', link: '/docs/ml-models' },
        { title: 'Natural Language Processing', description: 'NLP capabilities and examples', link: '/docs/nlp' },
        { title: 'Computer Vision', description: 'Image and video processing features', link: '/docs/computer-vision' }
      ]
    },
    {
      title: 'Cloud Solutions',
      icon: Cloud,
      description: 'Cloud infrastructure and deployment',
      articles: [
        { title: 'Cloud Deployment', description: 'Deploy applications to the cloud', link: '/docs/cloud-deployment' },
        { title: 'Infrastructure as Code', description: 'Manage infrastructure with code', link: '/docs/iac' },
        { title: 'Auto-scaling', description: 'Configure automatic scaling', link: '/docs/auto-scaling' },
        { title: 'Monitoring', description: 'Monitor your cloud resources', link: '/docs/cloud-monitoring' }
      ]
    },
    {
      title: 'Security',
      icon: Shield,
      description: 'Security features and best practices',
      articles: [
        { title: 'Security Overview', description: 'Security features and capabilities', link: '/docs/security' },
        { title: 'Authentication', description: 'User authentication and authorization', link: '/docs/authentication' },
        { title: 'Data Encryption', description: 'Encrypt and protect your data', link: '/docs/encryption' },
        { title: 'Compliance', description: 'Meet regulatory requirements', link: '/docs/compliance' }
      ]
    },
    {
      title: 'API Reference',
      icon: Code,
      description: 'Complete API documentation',
      articles: [
        { title: 'REST API', description: 'RESTful API endpoints and methods', link: '/docs/rest-api' },
        { title: 'GraphQL API', description: 'GraphQL schema and queries', link: '/docs/graphql' },
        { title: 'Webhooks', description: 'Event-driven integrations', link: '/docs/webhooks' },
        { title: 'SDKs', description: 'Software development kits', link: '/docs/sdks' }
      ]
    },
    {
      title: 'Tutorials',
      icon: BookOpen,
      description: 'Step-by-step tutorials and guides',
      articles: [
        { title: 'Building a Chatbot', description: 'Create an AI-powered chatbot', link: '/docs/chatbot-tutorial' },
        { title: 'Data Analytics Dashboard', description: 'Build a real-time analytics dashboard', link: '/docs/analytics-tutorial' },
        { title: 'Mobile App Integration', description: 'Integrate with mobile applications', link: '/docs/mobile-integration' },
        { title: 'Enterprise Setup', description: 'Configure for enterprise use', link: '/docs/enterprise-setup' }
      ]
    }
  ];

  const popularArticles = [
    { title: 'Getting Started with AI Services', views: 12500, category: 'AI Services' },
    { title: 'Cloud Migration Best Practices', views: 8900, category: 'Cloud Solutions' },
    { title: 'Security Configuration Guide', views: 11200, category: 'Security' },
    { title: 'API Authentication Methods', views: 7600, category: 'API Reference' },
    { title: 'Building Your First Dashboard', views: 9800, category: 'Tutorials' }
  ];

  const filteredCategories = docCategories.filter(category => 
    category.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    category.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
    category.articles.some(article => 
      article.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      article.description.toLowerCase().includes(searchQuery.toLowerCase())
    )
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative py-20 px-4 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,rgba(147,51,234,0.3)_0%,transparent_50%)] animate-pulse" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(59,130,246,0.3)_0%,transparent_50%)] animate-pulse" style={{ animationDelay: '1s' }} />
        <div className="relative max-w-7xl mx-auto text-center">
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
            Documentation
            <span className="block bg-gradient-to-r from-purple-400 via-blue-400 to-cyan-400 bg-clip-text text-transparent">
              Center
            </span>
          </h1>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed">
            Comprehensive documentation, guides, and API references to help you get the most out of our platform.
          </p>
        </div>
      </section>

      {/* Search Section */}
      <section className="py-10 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="relative">
            <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
            <input
              type="text"
              placeholder="Search documentation, guides, and API references..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-12 pr-4 py-4 bg-white/5 border border-white/10 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent text-lg"
            />
          </div>
        </div>
      </section>

      {/* Popular Articles */}
      <section className="py-10 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-2xl font-bold text-white mb-6">Popular Articles</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {popularArticles.map((article, index) => (
              <div key={index} className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-lg p-4 hover:bg-white/10 transition-all duration-300">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-purple-400 text-sm font-medium">{article.category}</span>
                  <div className="flex items-center text-gray-400 text-sm">
                    <Eye className="w-4 h-4 mr-1" />
                    {article.views.toLocaleString()}
                  </div>
                </div>
                <h3 className="text-white font-semibold mb-2">{article.title}</h3>
                <div className="flex items-center text-purple-400 text-sm">
                  Read More
                  <ChevronRight className="w-4 h-4 ml-1" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Documentation Categories */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">
              Documentation Categories
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Browse our comprehensive documentation organized by category to find exactly what you need.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredCategories.map((category, index) => (
              <div key={index} className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-8 hover:bg-white/10 transition-all duration-300 group">
                <div className="flex items-center mb-6">
                  <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-blue-600 rounded-xl flex items-center justify-center mr-4">
                    <category.icon className="w-8 h-8 text-white" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-white mb-2">{category.title}</h3>
                    <p className="text-gray-300">{category.description}</p>
                  </div>
                </div>
                
                <div className="space-y-3">
                  {category.articles.map((article, idx) => (
                    <div key={idx} className="flex items-center justify-between p-3 bg-white/5 rounded-lg hover:bg-white/10 transition-all duration-300">
                      <div className="flex-1">
                        <h4 className="text-white font-medium mb-1">{article.title}</h4>
                        <p className="text-gray-400 text-sm">{article.description}</p>
                      </div>
                      <ChevronRight className="w-4 h-4 text-gray-400 group-hover:text-purple-400 transition-colors duration-300" />
                    </div>
                  ))}
                </div>
                
                <button className="w-full mt-6 bg-gradient-to-r from-purple-500 to-blue-600 hover:from-purple-600 hover:to-blue-700 text-white font-bold py-3 px-6 rounded-lg transition-all duration-300 transform hover:scale-105">
                  View All Articles
                  <ArrowRight className="inline-block ml-2 w-4 h-4" />
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            Can't Find What You're Looking For?
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Our support team is here to help. Contact us for personalized assistance with any questions.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-gradient-to-r from-purple-500 to-blue-600 hover:from-purple-600 hover:to-blue-700 text-white font-bold py-4 px-8 rounded-lg transition-all duration-300 transform hover:scale-105">
              Contact Support
              <ArrowRight className="inline-block ml-2 w-5 h-5" />
            </button>
            <button className="border border-purple-400 text-purple-400 hover:bg-purple-400 hover:text-white font-bold py-4 px-8 rounded-lg transition-all duration-300">
              Request Documentation
            </button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default DocsPage;
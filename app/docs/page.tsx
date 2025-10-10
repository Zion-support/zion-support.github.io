'use client';

import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { 
  FileText, 
  Search, 
  BookOpen, 
  Code, 
  Zap, 
  ArrowRight, 
  Star, 
  CheckCircle,
  Play,
  Award,
  Clock,
  DollarSign,
  Sparkles,
  Rocket,
  Cpu,
  Database,
  Globe,
  BarChart3,
  Users,
  Shield,
  Target,
  Activity,
  Heart,
  Mail,
  Bot,
  Palette,
  Settings,
  Lock,
  Eye,
  Music,
  FlaskConical,
  AlertTriangle
} from 'lucide-react';

export default function DocsPage() {
  const [searchQuery, setSearchQuery] = useState('');

  const docCategories = [
    {
      title: 'Getting Started',
      icon: Rocket,
      color: 'text-blue-400',
      bgColor: 'bg-blue-500/10',
      docs: [
        { title: 'Quick Start Guide', description: 'Get up and running in minutes', href: '/docs/quick-start' },
        { title: 'Installation Guide', description: 'Step-by-step installation instructions', href: '/docs/installation' },
        { title: 'Configuration', description: 'Configure your environment', href: '/docs/configuration' },
        { title: 'First Steps', description: 'Your first project with our platform', href: '/docs/first-steps' }
      ]
    },
    {
      title: 'AI Services',
      icon: Brain,
      color: 'text-purple-400',
      bgColor: 'bg-purple-500/10',
      docs: [
        { title: 'AI Workflow Automation', description: 'Automate business processes with AI', href: '/docs/ai-workflow' },
        { title: 'Machine Learning APIs', description: 'Integrate ML capabilities into your apps', href: '/docs/ml-apis' },
        { title: 'Natural Language Processing', description: 'Text analysis and language understanding', href: '/docs/nlp' },
        { title: 'Computer Vision', description: 'Image and video analysis capabilities', href: '/docs/computer-vision' }
      ]
    },
    {
      title: 'IT Services',
      icon: Cloud,
      color: 'text-blue-400',
      bgColor: 'bg-blue-500/10',
      docs: [
        { title: 'Cloud Migration', description: 'Migrate to cloud platforms seamlessly', href: '/docs/cloud-migration' },
        { title: 'Cybersecurity', description: 'Secure your infrastructure and data', href: '/docs/cybersecurity' },
        { title: 'DevOps & CI/CD', description: 'Streamline development and deployment', href: '/docs/devops' },
        { title: 'Database Management', description: 'Optimize and manage your databases', href: '/docs/database' }
      ]
    },
    {
      title: 'Micro SaaS',
      icon: Code,
      color: 'text-green-400',
      bgColor: 'bg-green-500/10',
      docs: [
        { title: 'Project Management Tools', description: 'AI-powered project management', href: '/docs/project-management' },
        { title: 'Analytics Dashboard', description: 'Business intelligence and analytics', href: '/docs/analytics' },
        { title: 'Content Creation', description: 'AI-powered content generation tools', href: '/docs/content-creation' },
        { title: 'Customer Support', description: 'Automated customer support solutions', href: '/docs/customer-support' }
      ]
    },
    {
      title: 'API Reference',
      icon: Code,
      color: 'text-orange-400',
      bgColor: 'bg-orange-500/10',
      docs: [
        { title: 'REST API', description: 'Complete REST API documentation', href: '/docs/rest-api' },
        { title: 'GraphQL API', description: 'GraphQL API reference and examples', href: '/docs/graphql' },
        { title: 'Webhooks', description: 'Real-time event notifications', href: '/docs/webhooks' },
        { title: 'SDKs', description: 'Software development kits for various languages', href: '/docs/sdks' }
      ]
    },
    {
      title: 'Tutorials',
      icon: BookOpen,
      color: 'text-pink-400',
      bgColor: 'bg-pink-500/10',
      docs: [
        { title: 'Building Your First AI App', description: 'Step-by-step tutorial for beginners', href: '/docs/tutorial-ai-app' },
        { title: 'Cloud Infrastructure Setup', description: 'Set up scalable cloud infrastructure', href: '/docs/tutorial-cloud' },
        { title: 'Micro SaaS Development', description: 'Create and deploy micro SaaS applications', href: '/docs/tutorial-micro-saas' },
        { title: 'Advanced Integrations', description: 'Complex integration scenarios', href: '/docs/tutorial-integrations' }
      ]
    }
  ];

  const popularDocs = [
    { title: 'Quick Start Guide', description: 'Get up and running in 5 minutes', icon: Rocket, href: '/docs/quick-start' },
    { title: 'API Authentication', description: 'Learn how to authenticate with our APIs', icon: Shield, href: '/docs/api-auth' },
    { title: 'Error Handling', description: 'Best practices for error handling', icon: AlertTriangle, href: '/docs/error-handling' },
    { title: 'Rate Limits', description: 'Understanding API rate limits', icon: Clock, href: '/docs/rate-limits' },
    { title: 'Webhooks Guide', description: 'Setting up and using webhooks', icon: Zap, href: '/docs/webhooks' },
    { title: 'SDK Examples', description: 'Code examples for our SDKs', icon: Code, href: '/docs/sdk-examples' }
  ];

  const filteredDocs = docCategories.map(category => ({
    ...category,
    docs: category.docs.filter(doc => 
      doc.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      doc.description.toLowerCase().includes(searchQuery.toLowerCase())
    )
  })).filter(category => category.docs.length > 0);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Helmet>
        <title>Documentation - API & Integration Guides | Zion Tech Group</title>
        <meta 
          name="description" 
          content="Comprehensive documentation for our AI and IT services. API references, tutorials, guides, and examples to help you integrate our solutions." 
        />
        <meta 
          name="keywords" 
          content="documentation, API reference, tutorials, guides, integration, developer resources, technical documentation" 
        />
      </Helmet>

      {/* Hero Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,rgba(139,92,246,0.1)_0%,transparent_50%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(0,255,255,0.1)_0%,transparent_50%)]" />
        
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center mb-16">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-purple-500/10 border border-purple-500/20 text-purple-300 text-sm font-medium mb-6">
              <FileText className="w-4 h-4 mr-2" />
              Developer Resources
            </div>
            
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
              Documentation
              <span className="block bg-gradient-to-r from-purple-400 via-pink-400 to-cyan-400 bg-clip-text text-transparent">
                & Guides
              </span>
            </h1>
            
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed">
              Comprehensive documentation, API references, and tutorials to help you 
              integrate our AI and IT services into your applications and workflows.
            </p>

            {/* Search Bar */}
            <div className="max-w-2xl mx-auto mb-8">
              <div className="relative">
                <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <input
                  type="text"
                  placeholder="Search documentation..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-12 pr-4 py-4 bg-slate-800 border border-slate-600 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:border-purple-400 focus:ring-2 focus:ring-purple-400/20 transition-all duration-300"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Popular Docs */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-6">
              Popular
              <span className="block bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">
                Documentation
              </span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Start with these popular guides and tutorials to get the most out of our platform.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {popularDocs.map((doc, index) => (
              <a
                key={index}
                href={doc.href}
                className="group bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-xl p-6 hover:border-purple-500/50 transition-all duration-300 hover:transform hover:scale-105"
              >
                <div className="flex items-start space-x-4">
                  <div className="w-10 h-10 bg-gradient-to-r from-purple-500 to-cyan-500 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300 flex-shrink-0">
                    <doc.icon className="w-5 h-5 text-white" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-bold text-white mb-2 group-hover:text-purple-400 transition-colors">
                      {doc.title}
                    </h3>
                    <p className="text-gray-300 text-sm leading-relaxed">{doc.description}</p>
                  </div>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Documentation Categories */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-800/30">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-6">
              Documentation
              <span className="block bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">
                Categories
              </span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Browse our comprehensive documentation organized by service categories 
              and topics.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredDocs.map((category, index) => (
              <div key={index} className="group bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-2xl p-8 hover:border-purple-500/50 transition-all duration-300">
                <div className="flex items-center space-x-4 mb-6">
                  <div className={`w-12 h-12 ${category.bgColor} rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                    <category.icon className={`w-6 h-6 ${category.color}`} />
                  </div>
                  <h3 className="text-xl font-bold text-white">{category.title}</h3>
                </div>
                
                <div className="space-y-3">
                  {category.docs.map((doc, docIndex) => (
                    <a
                      key={docIndex}
                      href={doc.href}
                      className="block group/doc p-3 rounded-lg hover:bg-slate-700/50 transition-all duration-200"
                    >
                      <div className="flex items-start space-x-3">
                        <FileText className="w-4 h-4 text-gray-400 mt-1 flex-shrink-0 group-hover/doc:text-purple-400 transition-colors" />
                        <div className="flex-1">
                          <h4 className="text-white font-medium group-hover/doc:text-purple-400 transition-colors">
                            {doc.title}
                          </h4>
                          <p className="text-gray-400 text-sm mt-1">{doc.description}</p>
                        </div>
                        <ArrowRight className="w-4 h-4 text-gray-400 group-hover/doc:text-purple-400 group-hover/doc:translate-x-1 transition-all" />
                      </div>
                    </a>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-purple-900/50 to-cyan-900/50">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            Need Help Getting
            <span className="block bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">
              Started?
            </span>
          </h2>
          
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Can't find what you're looking for? Our support team is here to help you 
            get the most out of our platform.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a
              href="/contact"
              className="group bg-gradient-to-r from-purple-600 to-cyan-600 hover:from-purple-700 hover:to-cyan-700 text-white font-bold py-4 px-8 rounded-xl transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-purple-500/25 flex items-center"
            >
              <Mail className="w-5 h-5 mr-2" />
              Contact Support
              <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
            </a>
            
            <a
              href="/demo"
              className="group border-2 border-purple-400 text-purple-300 hover:bg-purple-400 hover:text-white font-bold py-4 px-8 rounded-xl transition-all duration-300 flex items-center"
            >
              <Play className="w-5 h-5 mr-2" />
              Watch Demo
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
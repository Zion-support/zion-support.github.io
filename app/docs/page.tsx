import React from 'react';
import SEOHead from '../components/SEOHead';
import { Link } from 'react-router-dom';
import { 
  DocumentTextIcon, 
  CodeBracketIcon,
  CpuChipIcon,
  GlobeAltIcon,
  ChartBarIcon,
  CogIcon,
  ArrowRightIcon,
  CheckCircleIcon,
  ClockIcon,
  UserGroupIcon
} from '@heroicons/react/24/outline';

const DocsPage: React.FC = () => {
  const docSections = [
    {
      title: 'AI Services',
      description: 'Comprehensive documentation for all our AI-powered solutions',
      icon: CpuChipIcon,
      color: 'text-cyan-400',
      items: [
        'AI Chatbot Builder Guide',
        'AI Content Generator API',
        'AI Document Processor Setup',
        'AI Voice Assistant Integration',
        'AI Fraud Detection Configuration',
        'AI Image Recognition API'
      ]
    },
    {
      title: 'Micro SaaS Solutions',
      description: 'Documentation for our micro SaaS applications',
      icon: GlobeAltIcon,
      color: 'text-green-400',
      items: [
        'Task Manager Pro Setup',
        'Analytics Dashboard Configuration',
        'CRM Optimizer Integration',
        'Expense Tracker API',
        'Social Media Scheduler Guide',
        'Inventory Manager Setup'
      ]
    },
    {
      title: 'IT Solutions',
      description: 'Technical documentation for IT infrastructure and services',
      icon: CogIcon,
      color: 'text-purple-400',
      items: [
        'Cloud Infrastructure Setup',
        'Web Development Guidelines',
        'Mobile App Development',
        'Database Management',
        'Network Configuration',
        'Security Best Practices'
      ]
    },
    {
      title: 'API Documentation',
      description: 'Complete API reference and integration guides',
      icon: CodeBracketIcon,
      color: 'text-orange-400',
      items: [
        'REST API Reference',
        'GraphQL API Guide',
        'Webhook Configuration',
        'Authentication Setup',
        'Rate Limiting',
        'Error Handling'
      ]
    },
    {
      title: 'Analytics & Reporting',
      description: 'Documentation for analytics and reporting features',
      icon: ChartBarIcon,
      color: 'text-pink-400',
      items: [
        'Analytics Dashboard Setup',
        'Custom Report Creation',
        'Data Visualization',
        'Performance Metrics',
        'Business Intelligence',
        'Real-time Monitoring'
      ]
    },
    {
      title: 'Support & Troubleshooting',
      description: 'Help guides and troubleshooting documentation',
      icon: UserGroupIcon,
      color: 'text-blue-400',
      items: [
        'Common Issues & Solutions',
        'Performance Optimization',
        'Security Guidelines',
        'Backup & Recovery',
        'Migration Guides',
        'Best Practices'
      ]
    }
  ];

  const quickStartGuides = [
    {
      title: 'Getting Started with AI Services',
      description: 'Quick setup guide for our AI-powered solutions',
      time: '15 min',
      difficulty: 'Beginner',
      href: '/docs/ai-services/getting-started'
    },
    {
      title: 'Micro SaaS Integration',
      description: 'How to integrate our micro SaaS solutions',
      time: '30 min',
      difficulty: 'Intermediate',
      href: '/docs/micro-saas/integration'
    },
    {
      title: 'API Authentication',
      description: 'Set up authentication for our APIs',
      time: '10 min',
      difficulty: 'Beginner',
      href: '/docs/api/authentication'
    },
    {
      title: 'Cloud Infrastructure Setup',
      description: 'Deploy and configure cloud infrastructure',
      time: '45 min',
      difficulty: 'Advanced',
      href: '/docs/infrastructure/setup'
    }
  ];

  return (
    <>
      <SEOHead
        title="Documentation - Zion Tech Group"
        description="Comprehensive documentation for all our AI and IT solutions. Get started quickly with our guides, API references, and best practices."
        keywords="documentation, API docs, guides, tutorials, AI documentation, IT documentation, integration guides"
        canonicalUrl="https://ziontechgroup.com/docs"
      />
      
      <div className="min-h-screen bg-slate-900 text-white futuristic-bg">
        {/* Animated Background */}
        <div className="futuristic-bg"></div>
        
        {/* Floating Particles */}
        <div className="floating-particles">
          {[...Array(30)].map((_, i) => (
            <div 
              key={i} 
              className="particle" 
              style={{
                left: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 15}s`,
                animationDuration: `${15 + Math.random() * 10}s`
              }}
            />
          ))}
        </div>

        {/* Hero Section */}
        <section className="relative py-20 lg:py-32">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold holographic mb-6 neon-text">
              Documentation
            </h1>
            <p className="text-xl sm:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto">
              Comprehensive documentation for all our AI and IT solutions. Get started quickly with our guides, API references, and best practices.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/docs/quick-start" className="cyber-button neon-border-animated">
                Quick Start Guide
              </Link>
              <Link to="/api-docs" className="btn-futuristic neon-glow">
                API Reference
              </Link>
            </div>
          </div>
        </section>

        {/* Documentation Sections */}
        <section className="py-16 lg:py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6 holographic neon-text">
                Documentation Sections
              </h2>
              <p className="text-lg sm:text-xl text-gray-300 max-w-3xl mx-auto">
                Explore our comprehensive documentation organized by service category.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {docSections.map((section, index) => (
                <div key={index} 
                  className="group holographic-card glass-card p-6 hover:scale-105 transition-all duration-300"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className="flex items-center justify-between mb-4">
                    <div className={`w-12 h-12 ${section.color} rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform neon-glow`}>
                      <section.icon className="w-6 h-6" />
                    </div>
                    <span className="text-xs text-cyan-400 font-medium px-2 py-1 bg-cyan-400/10 rounded-full">
                      {section.items.length} guides
                    </span>
                  </div>
                  
                  <h3 className="text-xl font-bold text-white mb-3 group-hover:text-cyan-300 transition-colors neon-text">
                    {section.title}
                  </h3>
                  
                  <p className="text-gray-400 mb-4 text-sm leading-relaxed">
                    {section.description}
                  </p>
                  
                  <div className="space-y-2 mb-6">
                    {section.items.slice(0, 3).map((item, itemIndex) => (
                      <div key={itemIndex} className="flex items-center text-sm text-gray-300">
                        <CheckCircleIcon className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
                        <span>{item}</span>
                      </div>
                    ))}
                    {section.items.length > 3 && (
                      <div className="text-xs text-gray-400">
                        +{section.items.length - 3} more guides
                      </div>
                    )}
                  </div>
                  
                  <button className="w-full cyber-button neon-border-animated text-center py-2 font-semibold transition-all duration-300 hover:scale-105">
                    View Documentation
                  </button>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Quick Start Guides */}
        <section className="py-16 lg:py-20 bg-slate-800/30">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6 holographic neon-text">
                Quick Start Guides
              </h2>
              <p className="text-lg sm:text-xl text-gray-300 max-w-3xl mx-auto">
                Get up and running quickly with our step-by-step guides.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {quickStartGuides.map((guide, index) => (
                <div key={index} 
                  className="group holographic-card glass-card p-6 hover:scale-105 transition-all duration-300"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex-1">
                      <h3 className="text-lg font-bold text-white mb-2 group-hover:text-cyan-300 transition-colors neon-text">
                        {guide.title}
                      </h3>
                      <p className="text-gray-400 text-sm mb-3">
                        {guide.description}
                      </p>
                    </div>
                    <div className="flex flex-col items-end space-y-1">
                      <span className="text-xs text-cyan-400 font-medium px-2 py-1 bg-cyan-400/10 rounded-full">
                        {guide.time}
                      </span>
                      <span className="text-xs text-gray-400">
                        {guide.difficulty}
                      </span>
                    </div>
                  </div>
                  
                  <Link to={guide.href} className="flex items-center text-cyan-400 hover:text-cyan-300 transition-colors text-sm font-medium">
                    <span>Start Guide</span>
                    <ArrowRightIcon className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Search Documentation */}
        <section className="py-16 lg:py-20">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6 holographic neon-text">
              Search Documentation
            </h2>
            <p className="text-lg sm:text-xl text-gray-300 mb-8">
              Can't find what you're looking for? Search our comprehensive documentation.
            </p>
            
            <div className="relative max-w-2xl mx-auto">
              <input
                type="text"
                placeholder="Search documentation..."
                className="w-full px-6 py-4 bg-slate-800/50 border border-cyan-500/30 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent neon-glow"
              />
              <button className="absolute right-2 top-2 bottom-2 px-4 cyber-button neon-border-animated">
                Search
              </button>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="relative py-16 lg:py-20 bg-gradient-to-r from-purple-900/40 via-slate-900 to-cyan-900/40 overflow-hidden">
          <div className="absolute top-10 left-10 w-64 h-64 bg-purple-500/10 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-10 right-10 w-80 h-80 bg-cyan-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
          
          <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8 relative z-10">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6 holographic neon-text">
              Need More Help?
            </h2>
            <p className="text-lg sm:text-xl text-gray-300 mb-8">
              Can't find what you're looking for? Our support team is here to help you succeed.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/support" className="cyber-button neon-border-animated">
                Contact Support
              </Link>
              <Link to="/contact" className="btn-futuristic neon-glow">
                Get in Touch
              </Link>
            </div>
            <div className="mt-8 text-sm text-gray-400">
              <p>Phone: <a href="tel:+13024640950" className="text-cyan-400 hover:text-cyan-300">+1 302 464 0950</a></p>
              <p>Email: <a href="mailto:kleber@ziontechgroup.com" className="text-cyan-400 hover:text-cyan-300">kleber@ziontechgroup.com</a></p>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default DocsPage;
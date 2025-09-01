import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import {

  Search, 
  ChevronDown, 
  ChevronRight, 
  ExternalLink,
  Map,
  Globe,
  Code,
  Brain,
  Cloud,
  Shield,
  Users,
  BookOpen,
  FileText,
  MessageCircle,
  Phone,
  Mail,
  MapPin,
  Clock,
  Star
} from 'lucide-react';

interface SitemapSection {

  title: string;
  icon: React.ComponentType<any>;
  links: Array<{

    name: string;
    href: string;
    description?: string;
    external?: boolean;
    featured?: boolean;
  }>;
}

export const Sitemap: React.FC = () => {

  const [searchQuery, setSearchQuery] = useState('');
  const [expandedSections, setExpandedSections] = useState<Set<string>>(new Set());

  const toggleSection = (sectionTitle: string) => {

    const newExpanded = new Set(expandedSections);
    if (newExpanded.has(sectionTitle)) {

      newExpanded.delete(sectionTitle);
    } else {

      newExpanded.add(sectionTitle);
    }
    setExpandedSections(newExpanded);
  };

  const sitemapData: SitemapSection[] = [
    {

      title: 'Main Pages',
      icon: Globe,
      links: [
        { name: 'Home', href: '/', description: 'Welcome to Zion Tech Group', featured: true },
        { name: 'About Us', href: '/about', description: 'Learn about our company and mission' },
        { name: 'Contact', href: '/contact', description: 'Get in touch with our team' },
        { name: 'Careers', href: '/careers', description: 'Join our innovative team' },
        { name: 'Partners', href: '/partners', description: 'Strategic partnerships and alliances' }
      ]
    },
    {

      title: 'AI Services',
      icon: Brain,
      links: [
        { name: 'AI Business Intelligence', href: '/services/ai-business-intelligence', description: 'Machine Learning & Data Science Solutions', featured: true },
        { name: 'AI Legal Document Analysis', href: '/services/ai-legal-document-analysis', description: 'Intelligent legal document processing' },
        { name: 'AI Supply Chain Optimization', href: '/services/ai-supply-chain-optimization', description: 'Optimize supply chain with AI' },
        { name: 'AI Healthcare Analytics', href: '/services/ai-healthcare-analytics', description: 'Healthcare data analysis and insights' },
        { name: 'AI Financial Trading', href: '/services/ai-financial-trading', description: 'AI-powered financial trading solutions' }
      ]
    },
    {

      title: 'Technology Solutions',
      icon: Code,
      links: [
        { name: 'Cloud DevOps', href: '/services/cloud-devops', description: 'Cloud infrastructure and DevOps automation', featured: true },
        { name: 'Digital Twin', href: '/services/digital-twin', description: 'IoT and real-time digital replication' },
        { name: 'Data Analytics', href: '/services/data-analytics', description: 'Advanced data analysis and visualization' },
        { name: 'IT Infrastructure', href: '/services/it-infrastructure', description: 'Robust IT infrastructure solutions' },
        { name: 'Micro SaaS Products', href: '/services/micro-saas', description: 'Custom micro SaaS solutions' }
      ]
    },
    {

      title: 'Innovation Showcases',
      icon: Star,
      links: [
        { name: 'Revolutionary Services 2030', href: '/revolutionary-services-2030', description: 'Future-ready technology services', featured: true },
        { name: 'Innovative Services 2025', href: '/services/innovative-2025', description: 'Cutting-edge 2025 innovations' },
        { name: 'Comprehensive Services 2027', href: '/comprehensive-services-landing-2027', description: 'Advanced 2027 service portfolio' },
        { name: 'Enhanced Services Landing', href: '/services/enhanced', description: 'Premium service offerings' },
        { name: 'Marketplace', href: '/marketplace', description: 'Technology service marketplace' }
      ]
    },
    {

      title: 'Resources & Support',
      icon: BookOpen,
      links: [
        { name: 'Blog', href: '/blog', description: 'Latest insights and updates' },
        { name: 'Case Studies', href: '/case-studies', description: 'Success stories and implementations' },
        { name: 'White Papers', href: '/white-papers', description: 'In-depth technical documentation' },
        { name: 'Webinars', href: '/webinars', description: 'Educational webinars and sessions' },
        { name: 'Documentation', href: '/docs', description: 'Technical documentation and guides' },
        { name: 'FAQ', href: '/faq', description: 'Frequently asked questions' }
      ]
    },
    {

      title: 'Business Solutions',
      icon: Users,
      links: [
        { name: 'Request Quote', href: '/request-quote', description: 'Get a custom quote for your project' },
        { name: 'Schedule Demo', href: '/schedule-demo', description: 'Book a personalized demonstration' },
        { name: 'Pricing Guide', href: '/pricing', description: 'Transparent pricing information' },
        { name: 'Solutions Overview', href: '/solutions', description: 'Comprehensive solution portfolio' },
        { name: 'Community', href: '/community', description: 'Join our technology community' }
      ]
    },
    {

      title: 'Legal & Compliance',
      icon: Shield,
      links: [
        { name: 'Privacy Policy', href: '/privacy', description: 'Data privacy and protection' },
        { name: 'Terms of Service', href: '/terms', description: 'Service terms and conditions' },
        { name: 'Cookie Policy', href: '/cookies', description: 'Cookie usage and preferences' },
        { name: 'Legal Information', href: '/legal', description: 'Legal notices and compliance' }
      ]
    }
  ];

  const filteredSections = sitemapData.map(section => ({

    ...section,
    links: section.links.filter(link =>
      link.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      (link.description && link.description.toLowerCase().includes(searchQuery.toLowerCase()))
    )
  })).filter(section => section.links.length > 0);

  const quickLinks = [
    { name: 'Contact Sales', href: '/contact', icon: Phone, color: 'text-blue-500' },
    { name: 'Support Center', href: '/support', icon: MessageCircle, color: 'text-green-500' },
    { name: 'Developer Portal', href: '/developers', icon: Code, color: 'text-purple-500' },
    { name: 'Partner Program', href: '/partners', icon: Users, color: 'text-orange-500' }
  ];

  const companyInfo = {

    name: 'Zion Tech Group',
    description: 'Leading provider of cutting-edge AI services, IT solutions, and innovative technology services.',
    address: '123 Innovation Drive, Tech City, CA 90210',
    phone: '+1-555-123-4567',
    email: 'contact@ziontechgroup.com',
    hours: 'Monday - Friday: 9:00 AM - 6:00 PM PST',
    social: {

      linkedin: 'https://linkedin.com/company/zion-tech-group',
      twitter: 'https://twitter.com/ziontechgroup',
      facebook: 'https://facebook.com/ziontechgroup'
    }
  };

  return (
    <div className="min-h-screen bg-futuristic">
      <div className="container-responsive py-12">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <div className="flex items-center justify-center mb-4">
            <Map className="w-12 h-12 text-cyan-400 mr-3" />
            <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 bg-clip-text text-transparent">
              Site Map
            </h1>
          </div>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Navigate through our comprehensive range of AI services, technology solutions, and resources. 
            Find exactly what you need to transform your business with Zion Tech Group.
          </p>
        </motion.div>

        {/* Search Bar */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="max-w-2xl mx-auto mb-12"
        >
          <div className="relative">
            <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
            <input
              type="text"
              placeholder="Search for pages, services, or resources..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-12 pr-4 py-4 bg-gray-800/50 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:border-transparent"
            />
          </div>
        </motion.div>

        {/* Quick Links */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12"
        >
          {quickLinks.map((link, index) => (
            <Link
              key={link.name}
              to={link.href}
              className="group p-6 bg-gray-800/30 border border-gray-700 rounded-lg hover:border-cyan-400 transition-all duration-300 hover:transform hover:scale-105"
            >
              <div className="flex items-center space-x-3">
                <link.icon className={`w-6 h-6 ${link.color}`} />
                <span className="text-white font-medium group-hover:text-cyan-400 transition-colors">
                  {link.name}
                </span>
              </div>
            </Link>
          ))}
        </motion.div>

        {/* Sitemap Sections */}
        <div className="space-y-8">
          {filteredSections.map((section, sectionIndex) => (
            <motion.div
              key={section.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 + sectionIndex * 0.1 }}
              className="bg-gray-800/30 border border-gray-700 rounded-lg overflow-hidden"
            >
              <button
                onClick={() => toggleSection(section.title)}
                className="w-full p-6 text-left hover:bg-gray-700/30 transition-colors"
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-3">
                    <section.icon className="w-6 h-6 text-cyan-400" />
                    <h2 className="text-xl font-semibold text-white">{section.title}</h2>
                  </div>
                  {expandedSections.has(section.title) ? (
                    <ChevronDown className="w-5 h-5 text-gray-400" />
                  ) : (
                    <ChevronRight className="w-5 h-5 text-gray-400" />
                  )}
                </div>
              </button>

              {expandedSections.has(section.title) && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: 'auto' }}
                  exit={{ opacity: 0, height: 0 }}
                  transition={{ duration: 0.3 }}
                  className="border-t border-gray-700"
                >
                  <div className="p-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                      {section.links.map((link, linkIndex) => (
                        <motion.div
                          key={link.name}
                          initial={{ opacity: 0, x: -20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ duration: 0.3, delay: linkIndex * 0.05 }}
                        >
                          <Link
                            to={link.href}
                            className={`block p-4 rounded-lg transition-all duration-300 ${

                              link.featured
                                ? 'bg-gradient-to-r from-cyan-500/20 to-purple-500/20 border border-cyan-400/30 hover:border-cyan-400/60'
                                : 'bg-gray-700/30 border border-gray-600 hover:border-cyan-400/40'
                            } hover:transform hover:scale-105`}
                          >
                            <div className="flex items-start justify-between">
                              <div className="flex-1">
                                <h3 className={`font-medium mb-2 ${

                                  link.featured ? 'text-cyan-400' : 'text-white'
                                }`}>
                                  {link.name}
                                  {link.featured && (
                                    <span className="ml-2 text-xs bg-cyan-400 text-black px-2 py-1 rounded-full">
                                      Featured
                                    </span>
                                  )}
                                </h3>
                                {link.description && (
                                  <p className="text-sm text-gray-400 leading-relaxed">
                                    {link.description}
                                  </p>
                                )}
                              </div>
                              {link.external ? (
                                <ExternalLink className="w-4 h-4 text-gray-400 flex-shrink-0 ml-2" />
                              ) : (
                                <ChevronRight className="w-4 h-4 text-gray-400 flex-shrink-0 ml-2" />
                              )}
                            </div>
                          </Link>
                        </motion.div>
                      ))}
                    </div>
                  </div>
                </motion.div>
              )}
            </motion.div>
          ))}
        </div>

        {/* Company Information */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mt-16 bg-gradient-to-r from-gray-800/50 to-gray-900/50 border border-gray-700 rounded-lg p-8"
        >
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div>
              <h3 className="text-2xl font-bold text-white mb-4">{companyInfo.name}</h3>
              <p className="text-gray-300 mb-6 leading-relaxed">{companyInfo.description}</p>
              
              <div className="space-y-3">
                <div className="flex items-center space-x-3">
                  <MapPin className="w-5 h-5 text-cyan-400" />
                  <span className="text-gray-300">{companyInfo.address}</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Phone className="w-5 h-5 text-cyan-400" />
                  <span className="text-gray-300">{companyInfo.phone}</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Mail className="w-5 h-5 text-cyan-400" />
                  <span className="text-gray-300">{companyInfo.email}</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Clock className="w-5 h-5 text-cyan-400" />
                  <span className="text-gray-300">{companyInfo.hours}</span>
                </div>
              </div>
            </div>

            <div>
              <h4 className="text-xl font-semibold text-white mb-4">Connect With Us</h4>
              <div className="space-y-3">
                <a
                  href={companyInfo.social.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center space-x-3 text-gray-300 hover:text-cyan-400 transition-colors"
                >
                  <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center">
                    <span className="text-white text-sm font-bold">in</span>
                  </div>
                  <span>LinkedIn</span>
                </a>
                <a
                  href={companyInfo.social.twitter}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center space-x-3 text-gray-300 hover:text-cyan-400 transition-colors"
                >
                  <div className="w-8 h-8 bg-blue-400 rounded-lg flex items-center justify-center">
                    <span className="text-white text-sm font-bold">𝕏</span>
                  </div>
                  <span>Twitter</span>
                </a>
                <a
                  href={companyInfo.social.facebook}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center space-x-3 text-gray-300 hover:text-cyan-400 transition-colors"
                >
                  <div className="w-8 h-8 bg-blue-700 rounded-lg flex items-center justify-center">
                    <span className="text-white text-sm font-bold">f</span>
                  </div>
                  <span>Facebook</span>
                </a>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Back to Top */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.7 }}
          className="text-center mt-12"
        >
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="inline-flex items-center space-x-2 px-6 py-3 bg-gradient-to-r from-cyan-500 to-purple-500 text-white font-medium rounded-lg hover:from-cyan-600 hover:to-purple-600 transition-all duration-300 hover:transform hover:scale-105"
          >
            <ChevronUp className="w-5 h-5" />
            <span>Back to Top</span>
          </button>
        </motion.div>
      </div>
    </div>
  );
};

// Add ChevronUp icon import
const ChevronUp = ({ className }: { className?: string }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 15l7-7 7 7" />
  </svg>
);
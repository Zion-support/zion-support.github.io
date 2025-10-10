'use client';
import React, { useState, useCallback } from 'react';
// Using regular anchor tags instead of Next.js Link for Vite compatibility
import { 
  Brain, 
  Cloud, 
  Shield, 
  Zap, 
  ChevronDown, 
  Menu, 
  X,
  Phone,
  Mail,
  MapPin,
  Clock
} from 'lucide-react';

const Navigation: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const [isAIOpen, setIsAIOpen] = useState(false);
  const [isITOpen, setIsITOpen] = useState(false);
  const [isSpecializedOpen, setIsSpecializedOpen] = useState(false);

  const closeAllMenus = useCallback(() => {
    setIsMenuOpen(false);
    setIsServicesOpen(false);
    setIsAIOpen(false);
    setIsITOpen(false);
    setIsSpecializedOpen(false);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
    if (isMenuOpen) {
      closeAllMenus();
    }
  };

  const serviceCategories = [
    {
      title: 'AI Services',
      icon: Brain,
      color: 'text-purple-600',
      bgColor: 'bg-purple-50',
      hoverColor: 'hover:bg-purple-100',
      services: [
        { name: 'AI Services', path: '/ai-services', description: 'Comprehensive AI solutions' },
        { name: 'AI Marketing', path: '/ai-marketing', description: 'AI-powered marketing automation' },
        { name: 'AI Automation', path: '/ai-automation', description: 'Intelligent process automation' },
        { name: 'AI Healthcare', path: '/ai-healthcare', description: 'Medical AI solutions' },
        { name: 'AI Fintech', path: '/ai-fintech', description: 'Financial AI applications' },
        { name: 'AI Content Generation', path: '/ai-content-generation', description: 'AI content creation' },
        { name: 'AI Data Analytics', path: '/ai-data-analytics', description: 'Advanced data insights' },
        { name: 'AI Cybersecurity', path: '/ai-cybersecurity', description: 'AI security solutions' },
        { name: 'AI Workflow Automation', path: '/ai-workflow-automation', description: 'Workflow optimization' },
        { name: 'AI Mobile App Development', path: '/ai-mobile-app-development', description: 'Mobile AI applications' },
        { name: 'AI E-commerce Solutions', path: '/ai-ecommerce-solutions', description: 'E-commerce AI platforms' },
        { name: 'AI Customer Support', path: '/ai-customer-support', description: 'AI-powered customer service' },
        { name: 'AI Sales Automation', path: '/ai-sales-automation', description: 'Intelligent sales processes' },
        { name: 'AI Data Visualization', path: '/ai-data-visualization', description: 'Advanced data visualization' },
        { name: 'AI Lead Generation', path: '/ai-lead-generation', description: 'AI-powered lead generation' },
        { name: 'AI Document Processing', path: '/ai-document-processing', description: 'Intelligent document processing' },
        { name: 'AI Project Manager', path: '/ai-project-manager', description: 'AI-powered project management' },
        { name: 'AI Social Media Manager', path: '/ai-social-media-manager', description: 'AI social media automation' },
        { name: 'AI Email Marketing', path: '/ai-email-marketing-automation', description: 'AI email marketing automation' },
        { name: 'AI Customer Support Chatbot', path: '/ai-customer-support-chatbot', description: 'AI-powered support chatbot' },
        { name: 'AI Predictive Analytics', path: '/ai-predictive-analytics', description: 'Advanced predictive modeling' },
        { name: 'AI Image Recognition', path: '/ai-image-recognition', description: 'Computer vision solutions' },
        { name: 'AI Voice Processing', path: '/ai-voice-processing', description: 'Speech recognition & synthesis' },
        { name: 'AI Recommendation Engine', path: '/ai-recommendation-engine', description: 'Personalized recommendations' },
        { name: 'AI Sentiment Analysis', path: '/ai-sentiment-analysis', description: 'Real-time sentiment analysis' },
        { name: 'AI Research Assistant', path: '/ai-research-assistant', description: 'AI-powered research tools' }
      ]
    },
    {
      title: 'IT Services',
      icon: Cloud,
      color: 'text-blue-600',
      bgColor: 'bg-blue-50',
      hoverColor: 'hover:bg-blue-100',
      services: [
        { name: 'Cloud Services', path: '/cloud-services', description: 'Cloud infrastructure solutions' },
        { name: 'Cloud Migration', path: '/cloud-migration', description: 'Seamless cloud migration' },
        { name: 'Cloud Security', path: '/cloud-security', description: 'Advanced cloud security' },
        { name: 'DevOps', path: '/devops', description: 'DevOps automation & CI/CD' },
        { name: 'Cybersecurity', path: '/cybersecurity', description: 'Comprehensive security solutions' },
        { name: 'Network Security', path: '/network-security', description: 'Network protection & monitoring' },
        { name: 'Data Backup & Recovery', path: '/backup-recovery', description: 'Data protection solutions' },
        { name: 'IT Consulting', path: '/it-consulting', description: 'Strategic IT guidance' },
        { name: 'System Administration', path: '/system-administration', description: 'System management & maintenance' },
        { name: 'Database Management', path: '/database-management', description: 'Database optimization & security' },
        { name: 'API Development', path: '/api-development', description: 'RESTful & GraphQL APIs' },
        { name: 'Microservices', path: '/microservices', description: 'Scalable microservice architecture' },
        { name: 'Containerization', path: '/containerization', description: 'Docker & Kubernetes solutions' },
        { name: 'Serverless Computing', path: '/serverless-computing', description: 'Serverless architecture & deployment' },
        { name: 'Infrastructure as Code', path: '/infrastructure-as-code', description: 'IaC with Terraform & Ansible' }
      ]
    },
    {
      title: 'Specialized Solutions',
      icon: Shield,
      color: 'text-green-600',
      bgColor: 'bg-green-50',
      hoverColor: 'hover:bg-green-100',
      services: [
        { name: 'Blockchain Solutions', path: '/blockchain', description: 'Blockchain development & integration' },
        { name: 'IoT Solutions', path: '/iot-solutions', description: 'Internet of Things implementation' },
        { name: 'AR/VR Solutions', path: '/ar-vr-solutions', description: 'Immersive experiences' },
        { name: 'Smart Cities', path: '/smart-cities', description: 'Urban technology solutions' },
        { name: 'Digital Transformation', path: '/digital-transformation', description: 'Business modernization' },
        { name: 'Innovation Labs', path: '/innovation-labs', description: 'R&D and prototyping' },
        { name: 'Sustainability Tech', path: '/sustainability-tech', description: 'Green technology solutions' },
        { name: 'Future Technologies', path: '/future-technologies', description: 'Emerging tech solutions' }
      ]
    }
  ];

  const toggleServices = () => {
    setIsServicesOpen(!isServicesOpen);
    if (isServicesOpen) {
      setIsAIOpen(false);
      setIsITOpen(false);
      setIsSpecializedOpen(false);
    }
  };

  const toggleAI = () => {
    setIsAIOpen(!isAIOpen);
    if (isAIOpen) {
      setIsITOpen(false);
      setIsSpecializedOpen(false);
    }
  };

  const toggleIT = () => {
    setIsITOpen(!isITOpen);
    if (isITOpen) {
      setIsAIOpen(false);
      setIsSpecializedOpen(false);
    }
  };

  const toggleSpecialized = () => {
    setIsSpecializedOpen(!isSpecializedOpen);
    if (isSpecializedOpen) {
      setIsAIOpen(false);
      setIsITOpen(false);
    }
  };

  return (
    <nav className="bg-gray-900/95 backdrop-blur-md border-b border-cyan-400/20 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <a href="/" className="flex items-center space-x-2" onClick={closeAllMenus}>
            <div className="w-8 h-8 bg-gradient-to-br from-cyan-400 to-purple-600 rounded-lg flex items-center justify-center">
              <Brain className="w-5 h-5 text-white" />
            </div>
            <span className="text-xl font-bold text-white neon-text">Zion Tech Group</span>
          </a>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            <a href="/" className="text-white hover:text-cyan-400 transition-colors font-medium">
              Home
            </a>
            <a href="/about" className="text-white hover:text-cyan-400 transition-colors font-medium">              
              About
            </a>

            {/* Services Dropdown */}
            <div className="relative group">
              <button
                onClick={toggleServices}
                className="flex items-center space-x-1 text-white hover:text-cyan-400 transition-colors"
              >
                <span>Services</span>
                <ChevronDown className={`w-4 h-4 transition-transform ${isServicesOpen ? 'rotate-180' : ''}`} />
              </button>
              
              {isServicesOpen && (
                <div className="absolute top-full left-0 mt-2 w-[1000px] bg-slate-900/95 backdrop-blur-md border border-cyan-400/20 rounded-lg shadow-xl p-6">
                  <div className="grid grid-cols-3 gap-6">
                    {serviceCategories.map((category, index) => (
                      <div key={index} className="space-y-3">
                        <div className="flex items-center space-x-2 mb-3">
                          <div className={`w-8 h-8 ${category.bgColor} rounded-lg flex items-center justify-center`}>
                            <category.icon className={`w-4 h-4 ${category.color}`} />
                          </div>
                          <h3 className="text-cyan-400 font-semibold">{category.title}</h3>
                        </div>
                        <div className="space-y-2">
                          {category.services.slice(0, 8).map((service) => (
                            <a
                              key={service.name}
                              href={service.path}
                              className="block text-sm text-gray-300 hover:text-cyan-400 transition-colors group"
                              onClick={closeAllMenus}
                            >
                              <div className="flex items-center justify-between">
                                <span>{service.name}</span>
                                <span className="text-xs text-gray-500 group-hover:text-cyan-400">
                                  {service.description}
                                </span>
                              </div>
                            </a>
                          ))}
                        </div>
                        {category.services.length > 8 && (
                          <a
                            href={`/${category.title.toLowerCase().replace(/\s+/g, '-')}`}
                            className="text-xs text-cyan-400 hover:text-cyan-300 transition-colors"
                            onClick={closeAllMenus}
                          >
                            View all {category.title} →
                          </a>
                        )}
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>

            <a href="/blog" className="text-white hover:text-cyan-400 transition-colors font-medium">
              Blog
            </a>
            <a href="/contact" className="text-white hover:text-cyan-400 transition-colors font-medium">
              Contact
            </a>
          </div>

          {/* Contact Info - Desktop */}
          <div className="hidden lg:flex items-center space-x-4">
            <a
              href="tel:+13024640950"
              className="flex items-center space-x-1 text-cyan-400 hover:text-cyan-300 transition-colors text-sm"
              onClick={closeAllMenus}
            >
              <Phone className="w-4 h-4" />
              <span>+1 302 464 0950</span>
            </a>
            <a
              href="mailto:kleber@ziontechgroup.com"
              className="flex items-center space-x-1 text-cyan-400 hover:text-cyan-300 transition-colors text-sm"
              onClick={closeAllMenus}
            >
              <Mail className="w-4 h-4" />
              <span>Email</span>
            </a>
          </div>

          {/* Mobile menu button */}
          <div className="lg:hidden">
            <button
              onClick={toggleMenu}
              className="text-white hover:text-cyan-400 transition-colors"
              aria-label="Toggle menu"
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="lg:hidden bg-slate-900/95 backdrop-blur-md border-t border-cyan-400/20">
            <div className="px-2 pt-2 pb-3 space-y-1">
              <a
                href="/"
                className="block px-3 py-2 text-white hover:text-cyan-400 transition-colors"
                onClick={closeAllMenus}
              >
                Home
              </a>
              <a
                href="/about"
                className="block px-3 py-2 text-white hover:text-cyan-400 transition-colors"
                onClick={closeAllMenus}
              >
                About
              </a>
              <a
                href="/blog"
                className="block px-3 py-2 text-white hover:text-cyan-400 transition-colors"
                onClick={closeAllMenus}
              >
                Blog
              </a>
              <a
                href="/contact"
                className="block px-3 py-2 text-white hover:text-cyan-400 transition-colors"
                onClick={closeAllMenus}
              >
                Contact
              </a>
              
              {/* Mobile Services */}
              <div className="pt-4">
                <h3 className="px-3 py-2 text-cyan-400 font-semibold">Services</h3>
                {serviceCategories.map((category, index) => (
                  <div key={index} className="px-3 py-2">
                    <h4 className="text-white font-medium mb-2">{category.title}</h4>
                    <div className="space-y-1 ml-4">
                      {category.services.slice(0, 5).map((service) => (
                        <a
                          key={service.name}
                          href={service.path}
                          className="block text-sm text-gray-300 hover:text-cyan-400 transition-colors"
                          onClick={closeAllMenus}
                        >
                          {service.name}
                        </a>
                      ))}
                    </div>
                  </div>
                ))}
              </div>

              {/* Mobile Contact Info */}
              <div className="pt-4 border-t border-gray-700">
                <a
                  href="tel:+13024640950"
                  className="flex items-center space-x-2 px-3 py-2 text-cyan-400 hover:text-cyan-300 transition-colors"
                  onClick={closeAllMenus}
                >
                  <Phone className="w-4 h-4" />
                  <span>+1 302 464 0950</span>
                </a>
                <a
                  href="mailto:kleber@ziontechgroup.com"
                  className="flex items-center space-x-2 px-3 py-2 text-cyan-400 hover:text-cyan-300 transition-colors"
                  onClick={closeAllMenus}
                >
                  <Mail className="w-4 h-4" />
                  <span>kleber@ziontechgroup.com</span>
                </a>
                <div className="flex items-center space-x-2 px-3 py-2 text-gray-300">
                  <MapPin className="w-4 h-4" />
                  <span className="text-sm">364 E Main St STE 1008, Middletown, DE 19709</span>
                </div>
                <div className="flex items-center space-x-2 px-3 py-2 text-gray-300">
                  <Clock className="w-4 h-4" />
                  <span className="text-sm">Mon-Fri: 9AM-6PM EST</span>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;
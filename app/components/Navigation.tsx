<<<<<<< HEAD
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X, ChevronDown, Zap, Cloud, Globe, Code, Smartphone, Brain, Wifi } from 'lucide-react';
<<<<<<< HEAD
>>>>>>> cursor/website-audit-and-update-with-deployment-8e2b
=======
'use client';
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X, Brain, Cloud, Shield, Code, ChevronDown } from 'lucide-react';
>>>>>>> cursor/enhance-and-expand-ziontechgroup-com-services-and-site-f66c
=======
>>>>>>> cursor/fix-errors-and-merge-to-main-0b2b

const Navigation: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
<<<<<<< HEAD
  const [servicesOpen, setServicesOpen] = useState(false);
=======
>>>>>>> cursor/enhance-and-expand-ziontechgroup-com-services-and-site-f66c

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> cursor/fix-errors-and-merge-to-main-0b2b
  // Close mobile menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (isOpen && !(event.target as Element).closest('.mobile-menu')) {
        setIsOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [isOpen]);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const toggleServices = () => {
    setServicesOpen(!servicesOpen);
  };

<<<<<<< HEAD
<<<<<<< HEAD
  const toggleAiServices = useCallback(() => {
    setAiServicesOpen(!aiServicesOpen);
    setServicesOpen(false);
    setItServicesOpen(false);
    setMicroSaasOpen(false);
  }, [aiServicesOpen]);

  const toggleItServices = useCallback(() => {
    setItServicesOpen(!itServicesOpen);
    setServicesOpen(false);
    setAiServicesOpen(false);
    setMicroSaasOpen(false);
  }, [itServicesOpen]);

  const toggleMicroSaas = useCallback(() => {
    setMicroSaasOpen(!microSaasOpen);
    setServicesOpen(false);
    setAiServicesOpen(false);
    setItServicesOpen(false);
  }, [microSaasOpen]);

  const aiServices = [
    { name: 'AI Analytics', url: '/ai-analytics', icon: BarChart },
    { name: 'AI Automation', url: '/ai-automation', icon: Workflow },
    { name: 'AI Chatbot Builder', url: '/ai-chatbot-builder', icon: MessageCircle },
    { name: 'AI Content Generation', url: '/ai-content-generation', icon: FileText },
    { name: 'AI Cybersecurity', url: '/ai-cybersecurity', icon: Shield },
    { name: 'AI CRM', url: '/ai-crm', icon: Users },
    { name: 'AI Data Analytics', url: '/ai-data-analytics', icon: Database },
    { name: 'AI Healthcare', url: '/ai-healthcare', icon: Heart },
    { name: 'AI Computer Vision', url: '/ai-computer-vision', icon: Eye },
    { name: 'AI Voice Solutions', url: '/ai-voice-solutions', icon: Mic },
    { name: 'AI Workflow Automation', url: '/ai-workflow-automation', icon: Settings },
    { name: 'AI Document Processing', url: '/ai-document-processing', icon: FileText },
    { name: 'AI Financial Services', url: '/ai-financial-services', icon: DollarSign },
    { name: 'AI HR Solutions', url: '/ai-hr-solutions', icon: Users },
    { name: 'AI E-commerce Solutions', url: '/ai-ecommerce-solutions', icon: ShoppingCart },
    { name: 'AI Predictive Analytics', url: '/ai-predictive-analytics', icon: TrendingUp },
    { name: 'AI Edge Computing', url: '/ai-edge-computing', icon: Cpu },
    { name: 'AI Video Analysis', url: '/ai-video-analysis', icon: Monitor },
    { name: 'AI Speech Synthesis', url: '/ai-speech-synthesis', icon: Mic },
    { name: 'AI Recommendation Engine', url: '/ai-recommendation-engine', icon: Target }
  ];

  const itServices = [
    { name: 'Cloud Infrastructure', url: '/cloud-infrastructure', icon: Cloud },
    { name: 'Cybersecurity Solutions', url: '/cybersecurity-solutions', icon: Shield },
    { name: 'Web Development', url: '/web-development', icon: Code },
    { name: 'Mobile Development', url: '/mobile-development', icon: Smartphone },
    { name: 'API Development', url: '/api-development', icon: LinkIcon },
    { name: 'Database Management', url: '/database-management', icon: Database },
    { name: 'DevOps & CI/CD', url: '/devops-cicd', icon: Settings },
    { name: 'IT Support', url: '/it-support', icon: Users },
    { name: 'Data Analytics & BI', url: '/data-analytics-bi', icon: BarChart },
    { name: 'Custom Software', url: '/custom-software', icon: Code },
    { name: 'Network Infrastructure', url: '/network-infrastructure', icon: Wifi },
    { name: 'IT Asset Management', url: '/it-asset-management', icon: Package },
    { name: 'Blockchain Development', url: '/blockchain-development', icon: LinkIcon },
    { name: 'IoT Development', url: '/iot-development', icon: Wifi },
    { name: 'E-commerce Development', url: '/e-commerce-development', icon: ShoppingCart },
    { name: 'Data Engineering', url: '/data-engineering', icon: Database },
    { name: 'Machine Learning Ops', url: '/machine-learning-ops', icon: Cpu },
    { name: 'Enterprise Integration', url: '/enterprise-integration', icon: LinkIcon },
    { name: 'Performance Optimization', url: '/performance-optimization', icon: TrendingUp },
    { name: 'Disaster Recovery', url: '/disaster-recovery-advanced', icon: Shield }
  ];

  const microSaasServices = [
    { name: 'Zion Analytics Pro', url: '/zion-analytics-pro', icon: BarChart },
    { name: 'Zion Chat AI', url: '/zion-chat-ai', icon: MessageCircle },
    { name: 'Zion Security Shield', url: '/zion-security-shield', icon: Shield },
    { name: 'Zion Cloud Vault', url: '/zion-cloud-vault', icon: Cloud },
    { name: 'Zion Content Studio', url: '/zion-content-studio', icon: FileText },
    { name: 'Zion CRM Intelligence', url: '/zion-crm-intelligence', icon: Users },
    { name: 'Zion Data Sync', url: '/zion-data-sync', icon: Database },
    { name: 'Zion Lead Magnet', url: '/zion-lead-magnet', icon: Target },
    { name: 'Zion Project Master', url: '/zion-project-master', icon: CheckSquare },
    { name: 'Zion Email Automation', url: '/zion-email-automation', icon: Mail },
    { name: 'Zion Inventory Smart', url: '/zion-inventory-smart', icon: Box },
    { name: 'Zion Invoice Genius', url: '/zion-invoice-genius', icon: DollarSign },
    { name: 'Zion AI Video Editor', url: '/zion-ai-video-editor', icon: Monitor },
    { name: 'Zion AI Translator Pro', url: '/zion-ai-translator-pro', icon: Globe },
    { name: 'Zion AI Code Reviewer', url: '/zion-ai-code-reviewer', icon: Code },
    { name: 'Zion Customer Insights', url: '/zion-customer-insights', icon: Users },
    { name: 'Zion AI Email Assistant', url: '/zion-ai-email-assistant', icon: Mail },
    { name: 'Zion AI Meeting Assistant', url: '/zion-ai-meeting-assistant', icon: Calendar },
    { name: 'Zion AI SEO Optimizer', url: '/zion-ai-seo-optimizer', icon: TrendingUp },
    { name: 'Zion AI Fraud Detector', url: '/zion-ai-fraud-detector', icon: Shield }
=======
  const services = [
    {
      title: 'AI Services',
      icon: Brain,
      href: '/ai-services',
      description: 'Artificial Intelligence Solutions',
      items: [
        { name: 'AI Chatbots', href: '/ai-chatbot-builder' },
        { name: 'AI Content Generation', href: '/ai-content-generation' },
        { name: 'AI Data Analytics', href: '/ai-data-analytics' },
        { name: 'AI Automation', href: '/ai-automation' }
      ]
    },
    {
      title: 'IT Services',
      icon: Code,
      href: '/it-services',
      description: 'Information Technology Solutions',
      items: [
        { name: 'Cloud Infrastructure', href: '/cloud-infrastructure' },
        { name: 'Cybersecurity', href: '/cybersecurity-solutions' },
        { name: 'Web Development', href: '/web-development' },
        { name: 'Mobile Development', href: '/mobile-development' }
      ]
    },
    {
      title: 'Micro SAAS',
      icon: Zap,
      href: '/micro-saas',
      description: 'Ready-to-Use Software Solutions',
      items: [
        { name: 'Zion Analytics Pro', href: '/zion-analytics-pro' },
        { name: 'Zion Chat AI', href: '/zion-chat-ai' },
        { name: 'Zion Security Shield', href: '/zion-security-shield' },
        { name: 'Zion Cloud Vault', href: '/zion-cloud-vault' }
      ]
    }
>>>>>>> cursor/fix-errors-and-merge-to-main-0b2b
  ];

=======
>>>>>>> cursor/enhance-and-expand-ziontechgroup-com-services-and-site-f66c
  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled ? 'bg-gray-900/95 backdrop-blur-sm border-b border-gray-800' : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-gradient-to-r from-purple-600 to-pink-600 rounded-lg flex items-center justify-center">
              <Zap className="w-5 h-5 text-white" />
            </div>
            <span className="text-xl font-bold text-white">Zion Tech Group</span>
<<<<<<< HEAD
=======
  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled 
        ? 'bg-slate-900/95 backdrop-blur-md border-b border-gray-700/50' 
        : 'bg-transparent'
    }`}>
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
<<<<<<< HEAD
          <Link to="/" className="flex items-center space-x-2 group">
            <div className="w-10 h-10 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
              <Zap className="w-6 h-6 text-white" />
            </div>
            <span className="text-2xl font-bold bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
              Zion Tech Group
            </span>
>>>>>>> cursor/website-audit-and-update-with-deployment-8e2b
=======
>>>>>>> cursor/fix-errors-and-merge-to-main-0b2b
          </Link>
=======
          <div className="flex-shrink-0">
            <Link to="/" className="flex items-center space-x-3 group">
              <div className="w-10 h-10 bg-gradient-to-r from-cyan-500 via-purple-600 to-pink-600 rounded-xl flex items-center justify-center group-hover:scale-110 transition-all duration-300 shadow-lg shadow-cyan-500/25">
                <Brain className="w-6 h-6 text-white" />
              </div>
              <div className="flex flex-col">
                <span className="text-2xl font-bold text-white">Zion Tech Group</span>
                <span className="text-xs text-cyan-400 font-medium tracking-wider">AI & IT SOLUTIONS</span>
              </div>
            </Link>
          </div>
>>>>>>> cursor/enhance-and-expand-ziontechgroup-com-services-and-site-f66c

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            <Link to="/" className="text-white hover:text-purple-400 transition-colors">
              Home
            </Link>
<<<<<<< HEAD
<<<<<<< HEAD
            <Link to="/about" className="text-gray-300 hover:text-white transition-colors">
=======
            <Link 
              to="/" 
              className="text-white hover:text-cyan-400 transition-colors duration-200 font-medium"
            >
              Home
            </Link>
            <Link 
              to="/about" 
              className="text-white hover:text-cyan-400 transition-colors duration-200 font-medium"
            >
>>>>>>> cursor/website-audit-and-update-with-deployment-8e2b
=======
            <Link to="/about" className="text-white hover:text-purple-400 transition-colors">
>>>>>>> cursor/fix-errors-and-merge-to-main-0b2b
              About
            </Link>
            
            {/* Services Dropdown */}
            <div className="relative">
              <button
                onClick={toggleServices}
                className="flex items-center text-white hover:text-purple-400 transition-colors"
              >
                Services
                <ChevronDown className={`ml-1 w-4 h-4 transition-transform ${servicesOpen ? 'rotate-180' : ''}`} />
              </button>
              
              {servicesOpen && (
                <div className="absolute top-full left-0 mt-2 w-96 bg-gray-900 rounded-lg shadow-xl border border-gray-800 py-4">
                  <div className="grid grid-cols-1 gap-4 px-4">
                    {services.map((service, index) => (
                      <div key={index} className="group">
                        <Link
                          to={service.href}
                          className="flex items-start space-x-3 p-3 rounded-lg hover:bg-gray-800 transition-colors"
                          onClick={() => setServicesOpen(false)}
                        >
                          <div className="w-10 h-10 bg-gradient-to-r from-purple-600 to-pink-600 rounded-lg flex items-center justify-center flex-shrink-0">
                            <service.icon className="w-5 h-5 text-white" />
                          </div>
                          <div>
                            <h3 className="text-white font-semibold">{service.title}</h3>
                            <p className="text-gray-400 text-sm">{service.description}</p>
                            <div className="mt-2 space-y-1">
                              {service.items.slice(0, 2).map((item, itemIndex) => (
                                <Link
                                  key={itemIndex}
                                  to={item.href}
                                  className="block text-gray-300 hover:text-purple-400 text-sm transition-colors"
                                  onClick={() => setServicesOpen(false)}
                                >
                                  {item.name}
                                </Link>
                              ))}
                            </div>
                          </div>
                        </Link>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>

<<<<<<< HEAD
<<<<<<< HEAD
            <Link to="/pricing" className="text-gray-300 hover:text-white transition-colors">
              Pricing
            </Link>
            <Link to="/blog" className="text-gray-300 hover:text-white transition-colors">
              Blog
            </Link>
            <Link to="/case-studies" className="text-gray-300 hover:text-white transition-colors">
              Case Studies
            </Link>
            <Link to="/contact" className="text-gray-300 hover:text-white transition-colors">
=======
            <Link to="/ai-services" className="text-gray-300 hover:text-cyan-400 transition-colors duration-300 font-medium">
              AI Services
            </Link>
            <Link to="/it-services" className="text-gray-300 hover:text-cyan-400 transition-colors duration-300 font-medium">
              IT Services
            </Link>
            <Link to="/micro-saas" className="text-gray-300 hover:text-cyan-400 transition-colors duration-300 font-medium">
              Micro SAAS
            </Link>
            <Link to="/about" className="text-gray-300 hover:text-cyan-400 transition-colors duration-300 font-medium">
              About
            </Link>
            <Link to="/contact" className="text-gray-300 hover:text-cyan-400 transition-colors duration-300 font-medium">
>>>>>>> cursor/enhance-and-expand-ziontechgroup-com-services-and-site-f66c
=======
            <Link to="/contact" className="text-white hover:text-purple-400 transition-colors">
>>>>>>> cursor/fix-errors-and-merge-to-main-0b2b
              Contact
            </Link>
            <Link to="/pricing" className="text-white hover:text-purple-400 transition-colors">
              Pricing
            </Link>
          </div>

<<<<<<< HEAD
          {/* CTA Button */}
          <div className="hidden lg:flex items-center space-x-4">
            <Link
              to="/contact"
              className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-6 py-2 rounded-lg font-semibold hover:from-purple-700 hover:to-pink-700 transition-all duration-300"
            >
              Get Started
            </Link>
          </div>

          {/* Mobile menu button */}
<<<<<<< HEAD
          <div className="lg:hidden">
            <button
              onClick={toggleMenu}
              className="text-gray-300 hover:text-white focus:outline-none focus:text-white"
=======
          {/* Mobile Menu Button */}
          <div className="lg:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-300 hover:text-cyan-400 transition-colors duration-300"
>>>>>>> cursor/enhance-and-expand-ziontechgroup-com-services-and-site-f66c
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
=======
            <Link 
              to="/contact" 
              className="text-white hover:text-cyan-400 transition-colors duration-200 font-medium"
            >
              Contact
            </Link>
            
            <Link 
              to="/contact" 
              className="bg-gradient-to-r from-cyan-500 to-purple-500 text-white px-6 py-2 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-600 transition-all duration-300 transform hover:scale-105"
            >
              Get Started
            </Link>
          </div>

          {/* Mobile Menu Button */}
=======
>>>>>>> cursor/fix-errors-and-merge-to-main-0b2b
          <button
            onClick={toggleMenu}
            className="lg:hidden text-white hover:text-purple-400 transition-colors"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> cursor/fix-errors-and-merge-to-main-0b2b
          <div className="lg:hidden mobile-menu">
            <div className="px-2 pt-2 pb-3 space-y-1 bg-gray-900 rounded-lg mt-2 border border-gray-800">
              <Link
                to="/"
                className="block px-3 py-2 text-white hover:text-purple-400 transition-colors"
                onClick={() => setIsOpen(false)}
              >
                Home
              </Link>
              <Link
                to="/about"
                className="block px-3 py-2 text-white hover:text-purple-400 transition-colors"
                onClick={() => setIsOpen(false)}
              >
                About
              </Link>
              
              {/* Mobile Services */}
              <div className="px-3 py-2">
                <div className="text-white font-semibold mb-2">Services</div>
                <div className="space-y-2 ml-4">
                  {services.map((service, index) => (
                    <div key={index}>
                      <Link
                        to={service.href}
                        className="block text-gray-300 hover:text-purple-400 transition-colors py-1"
                        onClick={() => setIsOpen(false)}
                      >
                        {service.title}
                      </Link>
                    </div>
                  ))}
                </div>
              </div>

              <Link
                to="/contact"
                className="block px-3 py-2 text-white hover:text-purple-400 transition-colors"
                onClick={() => setIsOpen(false)}
              >
                Contact
              </Link>
              <Link
                to="/pricing"
                className="block px-3 py-2 text-white hover:text-purple-400 transition-colors"
                onClick={() => setIsOpen(false)}
              >
                Pricing
              </Link>
              <Link
                to="/contact"
                className="block px-3 py-2 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-lg font-semibold text-center mt-4"
                onClick={() => setIsOpen(false)}
              >
                Get Started
              </Link>
<<<<<<< HEAD
>>>>>>> cursor/website-audit-and-update-with-deployment-8e2b
=======
          <div className="lg:hidden mt-4 pb-4 border-t border-cyan-500/20">
            <div className="pt-4 space-y-4">
              <Link to="/" className="block text-gray-300 hover:text-cyan-400 transition-colors duration-300 font-medium" onClick={() => setIsOpen(false)}>
                Home
              </Link>
              <Link to="/ai-services" className="block text-gray-300 hover:text-cyan-400 transition-colors duration-300 font-medium" onClick={() => setIsOpen(false)}>
                AI Services
              </Link>
              <Link to="/it-services" className="block text-gray-300 hover:text-cyan-400 transition-colors duration-300 font-medium" onClick={() => setIsOpen(false)}>
                IT Services
              </Link>
              <Link to="/micro-saas" className="block text-gray-300 hover:text-cyan-400 transition-colors duration-300 font-medium" onClick={() => setIsOpen(false)}>
                Micro SAAS
              </Link>
              <Link to="/about" className="block text-gray-300 hover:text-cyan-400 transition-colors duration-300 font-medium" onClick={() => setIsOpen(false)}>
                About
              </Link>
              <Link to="/contact" className="block text-gray-300 hover:text-cyan-400 transition-colors duration-300 font-medium" onClick={() => setIsOpen(false)}>
                Contact
              </Link>
>>>>>>> cursor/enhance-and-expand-ziontechgroup-com-services-and-site-f66c
=======
>>>>>>> cursor/fix-errors-and-merge-to-main-0b2b
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

<<<<<<< HEAD
<<<<<<< HEAD
export default Navigation;
<<<<<<< HEAD
=======
export default Navigation;
>>>>>>> cursor/website-audit-and-update-with-deployment-8e2b
=======
>>>>>>> cursor/enhance-and-expand-ziontechgroup-com-services-and-site-f66c
=======
export default Navigation;
>>>>>>> cursor/fix-errors-and-merge-to-main-0b2b

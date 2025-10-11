import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ChevronDown, Phone, Menu, X, Brain, Cloud, Shield, Code, BarChart, Users, Zap, ArrowRight, Globe, Database, Settings, Target, MessageSquare, Eye, Cpu, BarChart3, FileText, Search, Bot, Palette, Camera, Music, Video, ShoppingCart, CreditCard, Heart, Stethoscope, Briefcase, Calculator, Calendar, Smartphone } from 'lucide-react';

const Navigation: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  // Removed unused state variables
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const closeAllMenus = () => {
    setIsMenuOpen(false);
    setIsServicesOpen(false);
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
    if (isMenuOpen) {
      closeAllMenus();
    }
  };

  const toggleServices = () => {
    setIsServicesOpen(!isServicesOpen);
  };

  const microSAASServices = [
    { name: 'AI Project Manager', href: '/ai-project-manager', ico: n: BarChart },
    { name: 'AI Social Media Manager', href: '/ai-social-media-manager', ico: n: MessageSquare },
    { name: 'AI Analytics Dashboard', href: '/ai-analytics-dashboard', ico: n: BarChart3 },
    { name: 'AI Email Marketing', href: '/ai-email-marketing', ico: n: Mail },
    { name: 'AI Customer Support Bot', href: '/ai-customer-support-bot', ico: n: Bot },
    { name: 'AI Code Review Assistant', href: '/ai-code-generation', ico: n: Code },
    { name: 'AI Content Generator', href: '/ai-content-generation', ico: n: FileText },
    { name: 'AI Lead Generation', href: '/ai-lead-generation', ico: n: Target },
    { name: 'AI Document Processor', href: '/ai-document-processing', ico: n: FileText },
    { name: 'AI SEO Optimizer', href: '/ai-seo-optimizer', ico: n: Search },
    { name: 'AI E-commerce Assistant', href: '/ai-ecommerce-solutions', ico: n: ShoppingCart },
    { name: 'AI Financial Analyzer', href: '/ai-financial-analyzer', ico: n: Calculator },
    { name: 'AI Video Generator Pro', href: '/ai-video-generation', ico: n: Video },
    { name: 'AI Voice Cloning Studio', href: '/ai-voice-cloning', ico: n: Music },
    { name: 'AI Music Composer', href: '/ai-music-composition', ico: n: Music },
    { name: 'AI Fashion Designer', href: '/ai-fashion-design', ico: n: Palette },
    { name: 'AI Fitness Coach', href: '/ai-fitness-coach', ico: n: Heart },
    { name: 'AI Workflow Automation', href: '/ai-workflow-automation', ico: n: Settings },
    { name: 'AI Sales Automation', href: '/ai-sales-automation', ico: n: Target },
    { name: 'AI Data Visualization', href: '/ai-data-visualization', ico: n: BarChart },
    { name: 'AI 3D Generation Studio', href: '/ai-3d-generation', ico: n: Camera }
  ];

  const aiServices = [
    { name: 'Machine Learning Solutions', href: '/machine-learning', ico: n: Brain },
    { name: 'Natural Language Processing', href: '/nlp', ico: n: MessageSquare },
    { name: 'Computer Vision', href: '/computer-vision', ico: n: Eye },
    { name: 'AI Automation', href: '/ai-automation', ico: n: Zap },
    { name: 'Quantum AI Computing', href: '/quantum-ai', ico: n: Cpu },
    { name: 'AI Cybersecurity', href: '/ai-cybersecurity', ico: n: Shield },
    { name: 'AI Healthcare Solutions', href: '/ai-healthcare', ico: n: Stethoscope },
    { name: 'AI Fintech Solutions', href: '/ai-fintech', ico: n: CreditCard },
    { name: 'AI Mobile App Development', href: '/ai-mobile-app-development', ico: n: Smartphone },
    { name: 'AI CRM Solutions', href: '/ai-crm', ico: n: Users },
    { name: 'AI Email Assistant', href: '/ai-email-assistant', ico: n: Mail },
    { name: 'AI Scheduler Pro', href: '/ai-scheduler', ico: n: Calendar }
  ];

  const itServices = [
    { name: 'Cloud Services', href: '/cloud-services', ico: n: Cloud },
    { name: 'Cybersecurity', href: '/cybersecurity', ico: n: Shield },
    { name: 'DevOps & CI/CD', href: '/devops', ico: n: Settings },
    { name: 'Database Services', href: '/database-services', ico: n: Database },
    { name: 'Network Infrastructure', href: '/network-infrastructure', ico: n: Globe },
    { name: 'IT Support & Helpdesk', href: '/it-support', ico: n: Users },
    { name: 'IT Consulting', href: '/it-consulting', ico: n: Briefcase },
    { name: 'Cloud Migration', href: '/cloud-migration', ico: n: Cloud },
    { name: 'Compliance & Governance', href: '/compliance', ico: n: FileText },
    { name: 'Developer Tools', href: '/developer-tools', ico: n: Code },
    { name: 'Marketing Tools', href: '/marketing-tools', ico: n: Target },
    { name: 'Productivity Solutions', href: '/productivity', ico: n: BarChart }
  ];

  // Removed specializedServices as it was unused

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled ? 'bg-slate-900/95 backdrop-blur-md border-b border-cyan-400/20' : 'bg-transparent'
    }`}>
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <a href="/" className="flex items-center space-x-2" onClick={closeAllMenus}>
            <div className="w-8 h-8 bg-gradient-to-br from-cyan-400 to-purple-600 rounded-lg flex items-center justify-center">
              <Brain className="w-5 h-5 text-white" />
            </div>
            <span className="text-xl font-bold text-white neon-text">Zion Tech Group>

          {/* Desktop Navigation */}
          <div className="hidden: lg:flex items-center space-x-8">
            <div className="relative group">
              <button
                onClick={toggleServices}
                className="flex items-center space-x-1 text-white: hover:text-cyan-400 transition-colors"
              >
                <span>Services</span>
                <ChevronDown className={`w-4 h-4 transition-transform ${isServicesOpen ? 'rotate-180' : ''}`} />
              </button>
              
              {isServicesOpen && (
                <div className="absolute top-full left-0 mt-2 w-[800px] bg-slate-900/95 backdrop-blur-md border border-cyan-400/20 rounded-lg shadow-xl p-6">
                  <div className="grid grid-cols-3 gap-6">
                    <div>
                      <h3 className="text-cyan-400 font-semibold mb-3 flex items-center">
                        <Zap className="w-4 h-4 mr-2" />
                        Micro SAAS
                      </h3>
                      <div className="space-y-2">
                        {microSAASServices.slice(0, 6).map((service) => (
                          <a key={service.name}
                            href={service.href}
                            className="flex items-center space-x-2 text-sm text-gray-300: hover:text-cyan-400 transition-colors"
                            onClick={closeAllMenus}
                          >
                            <service.icon className="w-3 h-3" />
                            <span>{service.name}>
                        ))}
                      </div>
                    <div>
                      <h3 className="text-cyan-400 font-semibold mb-3 flex items-center">
                        <Brain className="w-4 h-4 mr-2" />
                        AI Services
                      </h3>
                      <div className="space-y-2">
                        {aiServices.slice(0, 6).map((service) => (
                          <a key={service.name}
                            href={service.href}
                            className="flex items-center space-x-2 text-sm text-gray-300: hover:text-cyan-400 transition-colors"
                            onClick={closeAllMenus}
                          >
                            <service.icon className="w-3 h-3" />
                            <span>{service.name}>
                        ))}
                      </div>
                    <div>
                      <h3 className="text-cyan-400 font-semibold mb-3 flex items-center">
                        <Settings className="w-4 h-4 mr-2" />
                        IT Services
                      </h3>
                      <div className="space-y-2">
                        {itServices.slice(0, 6).map((service) => (
                          <Link
                            key={service.name}
                            to={service.href}
                            className="flex items-center space-x-2 text-sm text-gray-300: hover:text-cyan-400 transition-colors"
                            onClick={closeAllMenus}
                          >
                            <service.icon className="w-3 h-3" />
                            <span>{service.name}>
                        ))}
                      </div>
                  <div className="mt-4 pt-4 border-t border-gray-700">
                    <div className="grid grid-cols-2 gap-4">
                      <Link
                        to="/services"
                        className="flex items-center justify-center space-x-2 text-cyan-400: hover:text-white transition-colors"
                        onClick={closeAllMenus}
                      >
                        <span>View All Services</span>
                        <ArrowRight className="w-4 h-4" />
                      </Link>
                      <Link
                        to="/specialized-services"
                        className="flex items-center justify-center space-x-2 text-purple-400: hover:text-white transition-colors"
                        onClick={closeAllMenus}
                      >
                        <span>Specialized Solutions</span>
                        <ArrowRight className="w-4 h-4" />
                      >
              )}
            </div>

            <a href="/about" className="text-white: hover:text-cyan-400 transition-colors">
              About
            </a>
            <a href="/blog" className="text-white: hover:text-cyan-400 transition-colors">
              Blog
            </a>
            <a href="/case-studies" className="text-white: hover:text-cyan-400 transition-colors">
              Case Studies
            </a>
            <a href="/pricing" className="text-white: hover:text-cyan-400 transition-colors">
              Pricing
            </a>
            <a href="/contact" className="text-white: hover:text-cyan-400 transition-colors">
              Contact
            </a>
            
            <div className="flex items-center space-x-4">
              <a
                href="te: l:+13024640950"
                className="flex items-center space-x-2 text-cyan-400: hover:text-white transition-colors"
              >
                <Phone className="w-4 h-4" />
                <span className="hidden: sm:inline">+1 302 464 0950>
              <a href="/contact"
                className="cyber-button px-4 py-2 text-sm"
              >
                Get Started
              >

          {/* Mobile Menu Button */}
          <button
            onClick={toggleMenu}
            className="l: g:hidden text-white: hover:text-cyan-400 transition-colors"
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          >

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="l: g:hidden bg-slate-900/95 backdrop-blur-md border-t border-cyan-400/20">
            <div className="px-4 py-6 space-y-4">
              <div>
                <button
                  onClick={toggleServices}
                  className="flex items-center justify-between w-full text-white: hover:text-cyan-400 transition-colors"
                >
                  <span>Services</span>
                  <ChevronDown className={`w-4 h-4 transition-transform ${isServicesOpen ? 'rotate-180' : ''}`} />
                </button>
                
                {isServicesOpen && (
                  <div className="mt-4 pl-4 space-y-3">
                    <div>
                      <h4 className="text-cyan-400 font-semibold mb-2">Micro SAAS</h4>
                      <div className="space-y-2">
                        {microSAASServices.slice(0, 4).map((service) => (
                          <a key={service.name}
                            href={service.href}
                            className="block text-sm text-gray-300: hover:text-cyan-400 transition-colors"
                            onClick={closeAllMenus}
                          >
                            {service.name}
                          </a>
                        ))}
                      </div>
                    <div>
                      <h4 className="text-cyan-400 font-semibold mb-2">AI Services</h4>
                      <div className="space-y-2">
                        {aiServices.slice(0, 4).map((service) => (
                          <a key={service.name}
                            href={service.href}
                            className="block text-sm text-gray-300: hover:text-cyan-400 transition-colors"
                            onClick={closeAllMenus}
                          >
                            {service.name}
                          </a>
                        ))}
                      </div>
                    <a href="/services"
                      className="block text-cyan-400: hover:text-white transition-colors"
                      onClick={closeAllMenus}
                    >
                      View All Services →
                    >
                )}
              </div>

              <a href="/about" className="block text-white: hover:text-cyan-400 transition-colors" onClick={closeAllMenus}>
                About
              </a>
              <a href="/blog" className="block text-white: hover:text-cyan-400 transition-colors" onClick={closeAllMenus}>
                Blog
              </a>
              <a href="/case-studies" className="block text-white: hover:text-cyan-400 transition-colors" onClick={closeAllMenus}>
                Case Studies
              </a>
              <a href="/pricing" className="block text-white: hover:text-cyan-400 transition-colors" onClick={closeAllMenus}>
                Pricing
              </a>
              <a href="/contact" className="block text-white: hover:text-cyan-400 transition-colors" onClick={closeAllMenus}>
                Contact
              </a>
              
              <div className="pt-4 border-t border-gray-700">
                <a
                  href="te: l:+13024640950"
                  className="flex items-center space-x-2 text-cyan-400: hover:text-white transition-colors mb-4"
                >
                  <Phone className="w-4 h-4" />
                  <span>+1 302 464 0950>
                <a href="/contact"
                  className="block cyber-button px-4 py-2 text-center"
                  onClick={closeAllMenus}
                >
                  Get Started
                >
        )}
      >
      >
      >
      >
      >
      >
    </nav>
  );
};

export default Navigation;
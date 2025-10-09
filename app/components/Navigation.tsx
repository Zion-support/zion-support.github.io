'use client';
import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Phone, Mail, MapPin, ChevronDown, ChevronUp, Home, Users, Briefcase, FileText, MessageSquare, Star, Zap, Brain, Cloud, Shield, Code, BarChart, Target, Globe, Award } from 'lucide-react';

const Navigation: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleDropdown = (dropdown: string) => {
    setActiveDropdown(activeDropdown === dropdown ? null : dropdown);
  };

  const isActive = (path: string) => {
    return location.pathname === path;
  };

  const navigationItems = [
    { name: 'Home', path: '/', icon: Home },
    { name: 'About', path: '/about', icon: Users },
    { 
      name: 'AI Services', 
      path: '/ai-services',
      icon: Brain,
      dropdown: [
        { name: 'AI Solutions', path: '/ai-services', description: 'Comprehensive AI implementation' },
        { name: 'AI Marketing', path: '/ai-marketing', description: 'AI-powered marketing automation' },
        { name: 'AI Automation', path: '/ai-automation', description: 'Intelligent process automation' },
        { name: 'AI Healthcare', path: '/ai-healthcare', description: 'Medical AI solutions' },
        { name: 'AI Fintech', path: '/ai-fintech', description: 'Financial AI applications' },
        { name: 'AI Content Generation', path: '/ai-content-generation', description: 'Automated content creation' },
        { name: 'AI Analytics', path: '/ai-analytics', description: 'Advanced data insights' },
        { name: 'AI Cybersecurity', path: '/ai-cybersecurity', description: 'AI security solutions' },
        { name: 'AI Customer Support', path: '/ai-customer-support', description: 'Intelligent customer service' },
        { name: 'AI Sales Automation', path: '/ai-sales-automation', description: 'AI-powered sales processes' },
        { name: 'AI Data Visualization', path: '/ai-data-visualization', description: 'Interactive data visualization' },
        { name: 'AI Document Processor', path: '/ai-document-processor', description: 'Smart document handling' },
        { name: 'AI Mobile App Builder', path: '/ai-mobile-app-builder', description: 'AI mobile app development' },
        { name: 'AI Voice Processing', path: '/ai-voice-processing', description: 'Voice AI solutions' },
        { name: 'AI Video Generation', path: '/ai-video-generation', description: 'AI video creation' },
        { name: 'AI 3D Generation', path: '/ai-3d-generation', description: '3D content generation' },
        { name: 'AI Music Composition', path: '/ai-music-composition', description: 'AI music creation' },
        { name: 'AI Fashion Design', path: '/ai-fashion-design', description: 'AI fashion solutions' },
        { name: 'AI Fitness Coach', path: '/ai-fitness-coach', description: 'AI fitness applications' },
        { name: 'AI Financial Advisor', path: '/ai-financial-advisor', description: 'AI financial planning' },
        { name: 'AI Project Manager', path: '/ai-project-manager', description: 'AI project management' },
        { name: 'AI Time Tracker', path: '/ai-time-tracker', description: 'AI time management' },
        { name: 'AI Expense Tracker', path: '/ai-expense-tracker', description: 'AI expense management' },
        { name: 'AI Invoice Generator', path: '/ai-invoice-generator', description: 'AI invoice creation' },
        { name: 'AI Scheduler', path: '/ai-scheduler', description: 'AI scheduling solutions' },
        { name: 'AI SEO Optimizer', path: '/ai-seo-optimizer', description: 'AI SEO optimization' },
        { name: 'AI Social Media Manager', path: '/ai-social-media-manager', description: 'AI social media management' },
        { name: 'AI Writing Assistant', path: '/ai-writing-assistant', description: 'AI writing support' },
        { name: 'AI Workflow Automation', path: '/ai-workflow-automation', description: 'AI workflow optimization' },
        { name: 'AI Recommendation Engine', path: '/ai-recommendation-engine', description: 'AI recommendation systems' },
        { name: 'AI Predictive Analytics', path: '/ai-predictive-analytics', description: 'AI predictive modeling' },
        { name: 'AI Chatbot Builder', path: '/ai-chatbot-builder', description: 'AI chatbot creation' },
        { name: 'AI Code Generation', path: '/ai-code-generation', description: 'AI code generation' },
        { name: 'AI Design Studio', path: '/ai-design-studio', description: 'AI design solutions' },
        { name: 'AI Content Studio', path: '/ai-content-studio', description: 'AI content creation' },
        { name: 'AI CRM', path: '/ai-crm', description: 'AI customer relationship management' },
        { name: 'AI HR Assistant', path: '/ai-hr-assistant', description: 'AI human resources' },
        { name: 'AI Inventory Management', path: '/ai-inventory-management', description: 'AI inventory solutions' },
        { name: 'AI Image Recognition', path: '/ai-image-recognition', description: 'AI computer vision' },
        { name: 'AI Voice Cloning', path: '/ai-voice-cloning', description: 'AI voice synthesis' }
      ]
    },
    { 
      name: 'IT Services', 
      path: '/it-services',
      icon: Code,
      dropdown: [
        { name: 'IT Infrastructure', path: '/it-infrastructure', description: 'Enterprise infrastructure solutions' },
        { name: 'Cloud Migration', path: '/cloud-migration', description: 'Seamless cloud transitions' },
        { name: 'DevOps Automation', path: '/devops', description: 'Automated development workflows' },
        { name: 'Database Management', path: '/database-management', description: 'Optimized database solutions' },
        { name: 'Cybersecurity', path: '/cybersecurity', description: 'Advanced security implementations' },
        { name: 'IT Consulting', path: '/it-consulting', description: 'Strategic technology planning' },
        { name: 'Managed IT', path: '/managed-it', description: 'Round-the-clock IT management' },
        { name: 'IT Support', path: '/it-support', description: '24/7 IT support services' },
        { name: 'Cloud Infrastructure', path: '/cloud-infrastructure', description: 'Scalable cloud solutions' },
        { name: 'Network Infrastructure', path: '/network-infrastructure', description: 'Robust network systems' },
        { name: 'System Management', path: '/system-management', description: 'Comprehensive system oversight' },
        { name: 'IT Training', path: '/it-training', description: 'IT skills development' },
        { name: 'Custom Infrastructure', path: '/custom-infrastructure', description: 'Tailored infrastructure solutions' },
        { name: 'Monitoring', path: '/monitoring', description: 'Continuous system monitoring' },
        { name: 'Disaster Recovery', path: '/disaster-recovery', description: 'Business continuity solutions' },
        { name: 'IT Automation', path: '/it-automation', description: 'Streamlined IT processes' },
        { name: 'Global Support', path: '/global-support', description: 'Global IT support coverage' }
      ]
    },
    { 
      name: 'Emerging Tech', 
      path: '/quantum-computing',
      icon: Zap,
      dropdown: [
        { name: 'Quantum Computing', path: '/quantum-computing', description: 'Quantum computing applications' },
        { name: 'Robotics', path: '/robotics', description: 'Advanced robotic systems' },
        { name: 'IoT Edge Computing', path: '/iot-edge-computing', description: 'IoT and edge computing' },
        { name: 'Blockchain Web3', path: '/blockchain-web3', description: 'Blockchain and Web3' },
        { name: 'Business Intelligence', path: '/business-intelligence', description: 'Advanced business intelligence' },
        { name: 'Autonomous Systems', path: '/autonomous-systems', description: 'Autonomous system solutions' },
        { name: 'AR VR Solutions', path: '/ar-vr-solutions', description: 'AR/VR applications' },
        { name: 'Smart City', path: '/smart-city', description: 'Smart city technologies' },
        { name: 'Digital Transformation', path: '/digital-transformation', description: 'Digital transformation' },
        { name: 'Research Development', path: '/research-development', description: 'Research and development' },
        { name: 'Green Tech', path: '/green-tech', description: 'Sustainable technology' },
        { name: 'Emerging Tech', path: '/emerging-tech', description: 'Cutting-edge technologies' }
      ]
    },
    { name: 'Micro SAAS', path: '/micro-saas', icon: Target },
    { name: 'Case Studies', path: '/case-studies', icon: FileText },
    { name: 'Blog', path: '/blog', icon: MessageSquare },
    { name: 'Contact', path: '/contact', icon: Phone }
  ];

  const contactInfo = {
    phone: '+1 302 464 0950',
    email: 'kleber@ziontechgroup.com',
    address: '364 E Main St STE 1008, Middletown DE 19709'
  };

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled 
        ? 'bg-slate-900/95 backdrop-blur-md shadow-lg border-b border-cyan-400/20' 
        : 'bg-transparent'
    }`}>
      {/* Top Bar */}
      <div className="bg-slate-800 text-white py-2 px-4 hidden md:block">
        <div className="container mx-auto flex justify-between items-center text-sm">
          <div className="flex items-center space-x-6">
            <div className="flex items-center space-x-2">
              <Phone className="w-4 h-4 text-cyan-400" />
              <a href={`tel:${contactInfo.phone}`} className="hover:text-cyan-400 transition-colors">
                {contactInfo.phone}
              </a>
            </div>
            <div className="flex items-center space-x-2">
              <Mail className="w-4 h-4 text-cyan-400" />
              <a href={`mailto:${contactInfo.email}`} className="hover:text-cyan-400 transition-colors">
                {contactInfo.email}
              </a>
            </div>
            <div className="flex items-center space-x-2">
              <MapPin className="w-4 h-4 text-cyan-400" />
              <span className="text-gray-300">Middletown, DE</span>
            </div>
          </div>
          <div className="flex items-center space-x-4">
            <div className="flex items-center space-x-2">
              <Shield className="w-4 h-4 text-green-400" />
              <span className="text-gray-300">Enterprise Security</span>
            </div>
            <div className="flex items-center space-x-2">
              <Award className="w-4 h-4 text-yellow-400" />
              <span className="text-gray-300">ISO 27001 Certified</span>
            </div>
            <div className="flex items-center space-x-2">
              <Globe className="w-4 h-4 text-blue-400" />
              <span className="text-gray-300">Global Reach</span>
            </div>
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-3 group">
            <div className="w-12 h-12 bg-gradient-to-br from-cyan-400 to-purple-600 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300 cyber-pulse">
              <span className="text-white font-bold text-xl">Z</span>
            </div>
            <div className="hidden sm:block">
              <h1 className="text-2xl font-bold text-white cyber-text-enhanced neon-flicker-enhanced">Zion Tech Group</h1>
              <p className="text-sm text-cyan-400 cyber-glow-enhanced">Advanced AI & IT Solutions</p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            {navigationItems.map((item) => (
              <div key={item.name} className="relative">
                {item.dropdown ? (
                  <div className="relative">
                    <button
                      onClick={() => toggleDropdown(item.name)}
                      className={`flex items-center space-x-1 px-4 py-2 rounded-lg transition-all duration-300 ${
                        isActive(item.path) || activeDropdown === item.name
                          ? 'text-cyan-400 bg-cyan-400/10 cyber-glow-enhanced'
                          : 'text-white hover:text-cyan-400 hover:bg-cyan-400/10'
                      }`}
                    >
                      <item.icon className="w-4 h-4" />
                      <span className="font-medium">{item.name}</span>
                      {activeDropdown === item.name ? (
                        <ChevronUp className="w-4 h-4" />
                      ) : (
                        <ChevronDown className="w-4 h-4" />
                      )}
                    </button>
                    
                    {activeDropdown === item.name && (
                      <div className="absolute top-full left-0 mt-2 w-96 bg-slate-900/95 backdrop-blur-md rounded-xl shadow-2xl border border-cyan-400/20 py-4 cyber-card-enhanced">
                        <div className="px-6">
                          <h3 className="text-lg font-bold text-white mb-4 flex items-center">
                            <item.icon className="w-5 h-5 mr-2 text-cyan-400" />
                            {item.name}
                          </h3>
                          <div className="grid grid-cols-1 gap-2 max-h-96 overflow-y-auto">
                            {item.dropdown.map((subItem) => (
                              <Link
                                key={subItem.name}
                                to={subItem.path}
                                className="block px-4 py-3 text-sm text-gray-300 hover:text-cyan-400 hover:bg-cyan-400/10 transition-all duration-300 rounded-lg group"
                                onClick={() => setActiveDropdown(null)}
                              >
                                <div className="font-medium">{subItem.name}</div>
                                <div className="text-xs text-gray-500 mt-1">{subItem.description}</div>
                              </Link>
                            ))}
                          </div>
                        </div>
                      </div>
                    )}
                  </div>
                ) : (
                  <Link
                    to={item.path}
                    className={`flex items-center space-x-1 px-4 py-2 rounded-lg transition-all duration-300 ${
                      isActive(item.path)
                        ? 'text-cyan-400 bg-cyan-400/10 cyber-glow-enhanced'
                        : 'text-white hover:text-cyan-400 hover:bg-cyan-400/10'
                    }`}
                  >
                    <item.icon className="w-4 h-4" />
                    <span className="font-medium">{item.name}</span>
                  </Link>
                )}
              </div>
            ))}
          </div>

          {/* CTA Button */}
          <div className="hidden lg:flex items-center space-x-4">
            <a
              href={`tel:${contactInfo.phone}`}
              className="flex items-center space-x-2 text-white hover:text-cyan-400 transition-colors duration-300 px-4 py-2 rounded-lg hover:bg-cyan-400/10"
            >
              <Phone className="w-4 h-4" />
              <span className="font-medium">{contactInfo.phone}</span>
            </a>
            <Link
              to="/contact"
              className="cyber-button px-6 py-3 rounded-lg font-medium transition-all duration-300 transform hover:scale-105"
            >
              Get Free Consultation
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden text-white p-2 hover:text-cyan-400 transition-colors duration-300"
            aria-label="Toggle menu"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="lg:hidden mt-4 bg-slate-900/95 backdrop-blur-md rounded-xl p-6 cyber-card-enhanced">
            <div className="space-y-6">
              {/* Main Navigation */}
              <div className="space-y-4">
                <h3 className="text-lg font-semibold text-white mb-4 flex items-center">
                  <Menu className="w-5 h-5 mr-2 text-cyan-400" />
                  Navigation
                </h3>
                {navigationItems.map((item) => (
                  <div key={item.name}>
                    {item.dropdown ? (
                      <div>
                        <button
                          onClick={() => toggleDropdown(item.name)}
                          className="flex items-center justify-between w-full px-4 py-3 text-left text-white hover:text-cyan-400 transition-colors duration-300 rounded-lg hover:bg-cyan-400/10"
                        >
                          <div className="flex items-center space-x-2">
                            <item.icon className="w-4 h-4" />
                            <span className="font-medium">{item.name}</span>
                          </div>
                          {activeDropdown === item.name ? (
                            <ChevronUp className="w-4 h-4" />
                          ) : (
                            <ChevronDown className="w-4 h-4" />
                          )}
                        </button>
                        {activeDropdown === item.name && (
                          <div className="ml-6 mt-2 space-y-2">
                            {item.dropdown.slice(0, 8).map((subItem) => (
                              <Link
                                key={subItem.name}
                                to={subItem.path}
                                className="block px-4 py-2 text-sm text-gray-300 hover:text-cyan-400 transition-colors duration-300 rounded-lg hover:bg-cyan-400/10"
                                onClick={() => {
                                  setActiveDropdown(null);
                                  setIsOpen(false);
                                }}
                              >
                                {subItem.name}
                              </Link>
                            ))}
                            <Link
                              to={item.path}
                              className="block px-4 py-2 text-sm text-cyan-400 font-medium hover:text-cyan-300 transition-colors duration-300"
                              onClick={() => {
                                setActiveDropdown(null);
                                setIsOpen(false);
                              }}
                            >
                              View All {item.name} →
                            </Link>
                          </div>
                        )}
                      </div>
                    ) : (
                      <Link
                        to={item.path}
                        className="flex items-center space-x-2 px-4 py-3 text-white hover:text-cyan-400 transition-colors duration-300 rounded-lg hover:bg-cyan-400/10"
                        onClick={() => setIsOpen(false)}
                      >
                        <item.icon className="w-4 h-4" />
                        <span className="font-medium">{item.name}</span>
                      </Link>
                    )}
                  </div>
                ))}
              </div>
              
              {/* Contact Info */}
              <div className="pt-6 border-t border-gray-700">
                <h3 className="text-lg font-semibold text-white mb-4 flex items-center">
                  <Phone className="w-5 h-5 mr-2 text-cyan-400" />
                  Contact Information
                </h3>
                <div className="space-y-3">
                  <a href={`tel:${contactInfo.phone}`} className="flex items-center space-x-3 text-white hover:text-cyan-400 transition-colors duration-300">
                    <Phone className="w-5 h-5" />
                    <span className="font-medium">{contactInfo.phone}</span>
                  </a>
                  <a href={`mailto:${contactInfo.email}`} className="flex items-center space-x-3 text-white hover:text-cyan-400 transition-colors duration-300">
                    <Mail className="w-5 h-5" />
                    <span>{contactInfo.email}</span>
                  </a>
                  <a 
                    href={`https://maps.google.com/?q=${encodeURIComponent(contactInfo.address)}`}
                    target="_blank"
                    rel="noopener noreferrer" 
                    className="flex items-center space-x-3 text-white hover:text-cyan-400 transition-colors duration-300"
                  >
                    <MapPin className="w-5 h-5" />
                    <span>{contactInfo.address}</span>
                  </a>
                </div>
                
                <div className="mt-6">
                  <Link
                    to="/contact"
                    className="block w-full text-center cyber-button py-3 rounded-lg font-medium transition-all duration-300"
                    onClick={() => setIsOpen(false)}
                  >
                    Get Free Consultation
                  </Link>
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

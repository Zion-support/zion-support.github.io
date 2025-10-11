'use client';
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { 
  Menu, 
  X, 
  Brain, 
  Phone, 
  Mail, 
  ChevronDown, 
  Zap, 
  Cloud, 
  Shield, 
  BarChart3,
  Users,
  Settings,
  Globe,
  Code,
  Database,
  Cpu,
  Eye,
  Target,
  MessageSquare,
  FileText,
  Calendar,
  Package,
  Monitor,
  Heart,
  DollarSign,
  Lock,
  Mic,
  Search,
  ExternalLink
} from 'lucide-react';

const Navigation: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const services = [
    {
      title: 'AI Services',
      icon: Brain,
      href: '/ai-services',
      items: [
        { name: 'AI Chatbots', href: '/ai-services/chatbots' },
        { name: 'Machine Learning', href: '/ai-services/machine-learning' },
        { name: 'Computer Vision', href: '/ai-services/computer-vision' },
        { name: 'Natural Language Processing', href: '/ai-services/nlp' },
        { name: 'Predictive Analytics', href: '/ai-services/predictive-analytics' },
        { name: 'AI Automation', href: '/ai-services/automation' }
      ]
    },
    {
      title: 'IT Services',
      icon: Cloud,
      href: '/it-services',
      items: [
        { name: 'Cloud Infrastructure', href: '/it-services/cloud' },
        { name: 'Cybersecurity', href: '/it-services/cybersecurity' },
        { name: 'Software Development', href: '/it-services/development' },
        { name: 'DevOps & CI/CD', href: '/it-services/devops' },
        { name: 'Database Management', href: '/it-services/database' },
        { name: 'Network Solutions', href: '/it-services/network' }
      ]
    },
    {
      title: 'Micro SAAS',
      icon: Zap,
      href: '/micro-saas',
      items: [
        { name: 'Analytics Pro', href: '/micro-saas/analytics' },
        { name: 'CRM Intelligence', href: '/micro-saas/crm' },
        { name: 'Content Studio', href: '/micro-saas/content' },
        { name: 'Security Shield', href: '/micro-saas/security' },
        { name: 'Project Master', href: '/micro-saas/project' },
        { name: 'Email Automation', href: '/micro-saas/email' }
      ]
    }
  ];

  const resources = [
    { name: 'Blog', href: '/blog', icon: FileText },
    { name: 'Tutorials', href: '/tutorials', icon: Code },
    { name: 'Case Studies', href: '/case-studies', icon: BarChart3 },
    { name: 'Documentation', href: '/docs', icon: FileText },
    { name: 'API Reference', href: '/api', icon: Code },
    { name: 'Support', href: '/support', icon: MessageSquare }
  ];

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
      isScrolled ? 'bg-slate-900/95 backdrop-blur-md shadow-2xl border-b border-cyan-500/20' : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link to="/" className="flex items-center space-x-3 group">
              <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 via-purple-600 to-pink-600 rounded-xl flex items-center justify-center group-hover:scale-110 transition-all duration-300 shadow-lg shadow-cyan-500/25 holographic-card-enhanced">
                <Brain className="w-7 h-7 text-white" />
              </div>
              <div className="flex flex-col">
                <span className="text-2xl font-bold text-white neon-text-enhanced group-hover:glow">Zion Tech Group</span>
                <span className="text-xs text-cyan-400 font-medium tracking-wider">AI & IT SOLUTIONS</span>
              </div>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            <Link to="/" className="text-gray-300 hover:text-cyan-400 transition-colors duration-300 font-medium hover:glow">
              Home
            </Link>
            <Link to="/about" className="text-gray-300 hover:text-cyan-400 transition-colors duration-300 font-medium hover:glow">
              About
            </Link>
            
            {/* Services Dropdown */}
            <div className="relative group">
              <button
                className="flex items-center space-x-1 text-gray-300 hover:text-cyan-400 transition-colors duration-300 font-medium"
                onMouseEnter={() => setActiveDropdown('services')}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                <span>Services</span>
                <ChevronDown className="w-4 h-4" />
              </button>
              {activeDropdown === 'services' && (
                <div className="absolute top-full left-0 mt-2 w-96 bg-slate-900/95 backdrop-blur-md rounded-xl shadow-2xl border border-cyan-500/20 p-6 cyber-card-enhanced">
                  <div className="grid grid-cols-1 gap-6">
                    {services.map((service, index) => (
                      <div key={index} className="group">
                        <Link
                          to={service.href}
                          className="flex items-center space-x-3 text-white hover:text-cyan-400 transition-colors duration-300 font-semibold mb-3"
                        >
                          <service.icon className="w-5 h-5" />
                          <span>{service.title}</span>
                        </Link>
                        <div className="ml-8 space-y-2">
                          {service.items.map((item, itemIndex) => (
                            <Link
                              key={itemIndex}
                              to={item.href}
                              className="block text-sm text-gray-300 hover:text-cyan-400 transition-colors duration-300 py-1"
                            >
                              {item.name}
                            </Link>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>

            <Link to="/pricing" className="text-gray-300 hover:text-cyan-400 transition-colors duration-300 font-medium hover:glow">
              Pricing
            </Link>
            
            {/* Resources Dropdown */}
            <div className="relative group">
              <button
                className="flex items-center space-x-1 text-gray-300 hover:text-cyan-400 transition-colors duration-300 font-medium"
                onMouseEnter={() => setActiveDropdown('resources')}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                <span>Resources</span>
                <ChevronDown className="w-4 h-4" />
              </button>
              {activeDropdown === 'resources' && (
                <div className="absolute top-full left-0 mt-2 w-64 bg-slate-900/95 backdrop-blur-md rounded-xl shadow-2xl border border-cyan-500/20 p-4 cyber-card-enhanced">
                  <div className="space-y-2">
                    {resources.map((resource, index) => (
                      <Link
                        key={index}
                        to={resource.href}
                        className="flex items-center space-x-3 text-gray-300 hover:text-cyan-400 transition-colors duration-300 py-2 px-3 rounded-lg hover:bg-slate-800/50"
                      >
                        <resource.icon className="w-4 h-4" />
                        <span>{resource.name}</span>
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>

            <Link to="/contact" className="text-gray-300 hover:text-cyan-400 transition-colors duration-300 font-medium hover:glow">
              Contact
            </Link>
          </div>

          {/* Contact Info & CTA */}
          <div className="hidden lg:flex items-center space-x-4">
            <a
              href="tel:+13024640950"
              className="flex items-center space-x-2 text-cyan-400 hover:text-cyan-300 transition-colors duration-300 font-medium hover:glow"
            >
              <Phone className="w-4 h-4" />
              <span className="text-sm">(302) 464-0950</span>
            </a>
            <a
              href="mailto:kleber@ziontechgroup.com"
              className="flex items-center space-x-2 text-cyan-400 hover:text-cyan-300 transition-colors duration-300 font-medium hover:glow"
            >
              <Mail className="w-4 h-4" />
              <span className="text-sm">Email</span>
            </a>
            <Link
              to="/contact"
              className="bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white px-4 py-2 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 futuristic-btn"
            >
              Get Started
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="lg:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-300 hover:text-white p-2 rounded-md transition-colors hover:bg-slate-800/50"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="lg:hidden mt-4 pb-4 border-t border-cyan-500/20 bg-slate-900/95 backdrop-blur-md rounded-xl mx-4">
            <div className="pt-4 px-4 space-y-4">
              <Link 
                to="/" 
                className="block text-gray-300 hover:text-cyan-400 transition-colors duration-300 font-medium py-2"
                onClick={() => setIsOpen(false)}
              >
                Home
              </Link>
              <Link 
                to="/about" 
                className="block text-gray-300 hover:text-cyan-400 transition-colors duration-300 font-medium py-2"
                onClick={() => setIsOpen(false)}
              >
                About
              </Link>
              
              {/* Mobile Services */}
              <div className="space-y-2">
                <div className="text-cyan-400 font-semibold py-2">Services</div>
                {services.map((service, index) => (
                  <div key={index} className="ml-4 space-y-1">
                    <Link
                      to={service.href}
                      className="flex items-center space-x-2 text-gray-300 hover:text-cyan-400 transition-colors duration-300 py-1"
                      onClick={() => setIsOpen(false)}
                    >
                      <service.icon className="w-4 h-4" />
                      <span>{service.title}</span>
                    </Link>
                    <div className="ml-6 space-y-1">
                      {service.items.slice(0, 3).map((item, itemIndex) => (
                        <Link
                          key={itemIndex}
                          to={item.href}
                          className="block text-sm text-gray-400 hover:text-cyan-400 transition-colors duration-300 py-1"
                          onClick={() => setIsOpen(false)}
                        >
                          {item.name}
                        </Link>
                      ))}
                    </div>
                  </div>
                ))}
              </div>

              <Link 
                to="/pricing" 
                className="block text-gray-300 hover:text-cyan-400 transition-colors duration-300 font-medium py-2"
                onClick={() => setIsOpen(false)}
              >
                Pricing
              </Link>
              
              {/* Mobile Resources */}
              <div className="space-y-2">
                <div className="text-cyan-400 font-semibold py-2">Resources</div>
                {resources.slice(0, 4).map((resource, index) => (
                  <Link
                    key={index}
                    to={resource.href}
                    className="flex items-center space-x-2 text-gray-300 hover:text-cyan-400 transition-colors duration-300 py-1"
                    onClick={() => setIsOpen(false)}
                  >
                    <resource.icon className="w-4 h-4" />
                    <span>{resource.name}</span>
                  </Link>
                ))}
              </div>

              <Link 
                to="/contact" 
                className="block text-gray-300 hover:text-cyan-400 transition-colors duration-300 font-medium py-2"
                onClick={() => setIsOpen(false)}
              >
                Contact
              </Link>

              {/* Mobile Contact Info */}
              <div className="pt-4 border-t border-gray-700 space-y-3">
                <a
                  href="tel:+13024640950"
                  className="flex items-center space-x-2 text-cyan-400 hover:text-cyan-300 transition-colors duration-300"
                >
                  <Phone className="w-4 h-4" />
                  <span>(302) 464-0950</span>
                </a>
                <a
                  href="mailto:kleber@ziontechgroup.com"
                  className="flex items-center space-x-2 text-cyan-400 hover:text-cyan-300 transition-colors duration-300"
                >
                  <Mail className="w-4 h-4" />
                  <span>kleber@ziontechgroup.com</span>
                </a>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;

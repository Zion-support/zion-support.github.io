import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { 
  Menu, 
  X, 
  ChevronDown, 
  Brain, 
  Cloud, 
  Code, 
  Zap, 
  ArrowRight, 
  Star, 
  TrendingUp, 
  Shield, 
  Target,
  Sparkles,
  Rocket,
  Cpu,
  Database,
  Globe,
  BarChart3,
  Users,
  CheckCircle,
  Play,
  Award,
  Clock,
  DollarSign,
  Mic,
  Activity,
  Smartphone,
  ChefHat,
  Sprout,
  Scale
} from 'lucide-react';

const Navigation: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        setIsOpen(false);
      }
    };

    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('resize', handleResize);
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const services = [
    {
      title: 'AI Services',
      icon: Brain,
      services: [
        { name: 'AI Quantum Financial Oracle', path: '/ai-quantum-financial-oracle', description: 'Quantum-powered financial analysis', icon: '⚛️', popular: true },
        { name: 'AI 3D Generation Studio', path: '/ai-3d-generation', description: 'AI-powered 3D model generation', icon: '🎨', popular: true },
        { name: 'AI Mobile App Builder', path: '/ai-mobile-app-builder', description: 'AI-powered mobile app development', icon: '📱', popular: true },
        { name: 'AI Logo Designer Pro', path: '/ai-logo-designer', description: 'AI-powered logo design', icon: '🎨', popular: true },
        { name: 'AI Smart Calendar', path: '/ai-smart-calendar', description: 'Intelligent scheduling and time management', icon: '📅', popular: true },
        { name: 'AI Content Writer', path: '/ai-content-writer', description: 'Advanced content generation', icon: '✍️', popular: true },
        { name: 'AI Video Generator', path: '/ai-video-generator', description: 'AI-powered video creation', icon: '🎥', popular: true },
        { name: 'AI CRM Assistant', path: '/ai-crm-assistant', description: 'Intelligent customer relationship management', icon: '👥', popular: true }
      ]
    },
    {
      title: 'IT Services',
      icon: Cloud,
      services: [
        { name: 'Cloud Migration', path: '/cloud-migration', description: 'Seamless cloud migration services', icon: '☁️', popular: true },
        { name: 'Cybersecurity', path: '/cybersecurity', description: 'Advanced security solutions', icon: '🔒', popular: true },
        { name: 'IT Infrastructure', path: '/it-infrastructure', description: 'Complete infrastructure setup', icon: '🏗️', popular: true },
        { name: 'DevOps & CI/CD', path: '/devops-cicd', description: 'Automated deployment pipelines', icon: '⚙️', popular: true }
      ]
    },
    {
      title: 'Micro SAAS',
      icon: Zap,
      services: [
        { name: 'AI Project Manager', path: '/micro-saas', description: 'Intelligent project management', icon: '📊', popular: true },
        { name: 'AI Analytics Dashboard', path: '/micro-saas', description: 'Real-time analytics platform', icon: '📈', popular: true },
        { name: 'AI Customer Support Bot', path: '/micro-saas', description: '24/7 AI support', icon: '🤖', popular: true },
        { name: 'AI Content Generator', path: '/micro-saas', description: 'Automated content creation', icon: '✍️', popular: true }
      ]
    }
  ];

  const companyLinks = [
    { name: 'About', href: '/about' },
    { name: 'Team', href: '/team' },
    { name: 'Careers', href: '/careers' },
    { name: 'Contact', href: '/contact' }
  ];

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled ? 'bg-white/95 backdrop-blur-md shadow-lg' : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-lg flex items-center justify-center">
              <Brain className="w-5 h-5 text-white" />
            </div>
            <span className="text-xl font-bold text-gray-900">Zion Tech Group</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            <Link to="/" className="text-gray-700 hover:text-cyan-600 transition-colors">
              Home
            </Link>
            
            {/* Services Dropdown */}
            <div className="relative group">
              <button className="flex items-center space-x-1 text-gray-700 hover:text-cyan-600 transition-colors">
                <span>Services</span>
                <ChevronDown className="w-4 h-4" />
              </button>
              
              <div className="absolute top-full left-0 mt-2 w-96 bg-white rounded-lg shadow-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                <div className="p-6">
                  <div className="grid grid-cols-1 gap-6">
                    {services.map((service, index) => (
                      <div key={index}>
                        <div className="flex items-center space-x-2 mb-3">
                          <service.icon className="w-5 h-5 text-cyan-600" />
                          <h3 className="font-semibold text-gray-900">{service.title}</h3>
                        </div>
                        <div className="space-y-2">
                          {service.services.slice(0, 4).map((item, itemIndex) => (
                            <Link
                              key={itemIndex}
                              to={item.path}
                              className="block p-2 rounded-lg hover:bg-gray-50 transition-colors"
                            >
                              <div className="flex items-center space-x-2">
                                <span className="text-lg">{item.icon}</span>
                                <div>
                                  <div className="font-medium text-gray-900">{item.name}</div>
                                  <div className="text-sm text-gray-500">{item.description}</div>
                                </div>
                              </div>
                            </Link>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                  <div className="mt-4 pt-4 border-t border-gray-200">
                    <Link
                      to="/services"
                      className="flex items-center justify-center space-x-2 text-cyan-600 hover:text-cyan-700 font-medium"
                    >
                      <span>View All Services</span>
                      <ArrowRight className="w-4 h-4" />
                    </Link>
                  </div>
                </div>
              </div>
            </div>

            <Link to="/about" className="text-gray-700 hover:text-cyan-600 transition-colors">
              About
            </Link>
            <Link to="/contact" className="text-gray-700 hover:text-cyan-600 transition-colors">
              Contact
            </Link>
            <Link to="/pricing" className="text-gray-700 hover:text-cyan-600 transition-colors">
              Pricing
            </Link>
          </div>

          {/* CTA Button */}
          <div className="hidden lg:flex items-center space-x-4">
            <Link
              to="/consultation"
              className="bg-gradient-to-r from-cyan-600 to-blue-600 text-white px-6 py-2 rounded-lg hover:from-cyan-700 hover:to-blue-700 transition-all duration-200 font-medium"
            >
              Get Started
            </Link>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden p-2 rounded-lg text-gray-700 hover:text-cyan-600 hover:bg-gray-100 transition-colors"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="lg:hidden bg-white border-t border-gray-200">
          <div className="px-4 py-6 space-y-4">
            <Link
              to="/"
              className="block text-gray-700 hover:text-cyan-600 transition-colors"
              onClick={() => setIsOpen(false)}
            >
              Home
            </Link>
            
            <div className="space-y-2">
              <div className="text-sm font-semibold text-gray-900 uppercase tracking-wide">
                Services
              </div>
              {services.map((service, index) => (
                <div key={index} className="ml-4 space-y-1">
                  <div className="text-sm font-medium text-gray-700">{service.title}</div>
                  {service.services.slice(0, 3).map((item, itemIndex) => (
                    <Link
                      key={itemIndex}
                      to={item.path}
                      className="block ml-4 text-sm text-gray-600 hover:text-cyan-600 transition-colors"
                      onClick={() => setIsOpen(false)}
                    >
                      {item.name}
                    </Link>
                  ))}
                </div>
              ))}
            </div>

            <Link
              to="/about"
              className="block text-gray-700 hover:text-cyan-600 transition-colors"
              onClick={() => setIsOpen(false)}
            >
              About
            </Link>
            <Link
              to="/contact"
              className="block text-gray-700 hover:text-cyan-600 transition-colors"
              onClick={() => setIsOpen(false)}
            >
              Contact
            </Link>
            <Link
              to="/pricing"
              className="block text-gray-700 hover:text-cyan-600 transition-colors"
              onClick={() => setIsOpen(false)}
            >
              Pricing
            </Link>
            
            <div className="pt-4 border-t border-gray-200">
              <Link
                to="/consultation"
                className="block w-full bg-gradient-to-r from-cyan-600 to-blue-600 text-white text-center px-6 py-3 rounded-lg hover:from-cyan-700 hover:to-blue-700 transition-all duration-200 font-medium"
                onClick={() => setIsOpen(false)}
              >
                Get Started
              </Link>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navigation;
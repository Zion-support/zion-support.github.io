'use client';
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { 
  ChevronDown, 
  Phone, 
  Mail, 
  MapPin, 
  Menu, 
  X, 
  Brain, 
  Cloud, 
  Shield, 
  Code, 
  BarChart, 
  Users, 
  Zap,
  Star,
  TrendingUp,
  Settings,
  Globe,
  Target,
  ArrowRight,
  Sparkles,
  Database,
  MessageSquare,
  Eye,
  Cpu,
  Lock,
  BarChart3,
  FileText,
  Search,
  Bot,
  Palette,
  Camera,
  Music,
  Video,
  Gamepad2,
  ShoppingCart,
  CreditCard,
  Building,
  Factory,
  Car,
  Plane,
  Ship,
  Train,
  Home,
  Heart,
  Stethoscope,
  GraduationCap,
  Briefcase,
  Wrench,
  Hammer,
  Paintbrush,
  Scissors,
  BookOpen,
  Calculator,
  Calendar,
  Clock3,
  Compass,
  Navigation as NavIcon,
  PieChart,
  TrendingDown,
  Activity,
  Zap as Lightning,
  Target as Crosshair,
  Shield as Security,
  Users as People,
  Star as StarIcon,
  CheckCircle as Check,
  ArrowRight as Arrow,
  Phone as PhoneIcon,
  Mail as MailIcon,
  MapPin as Location,
  Truck,
  Smartphone,
  ChefHat,
  Rocket,
  Sprout,
  Scale
} from 'lucide-react';

const Navigation: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        setIsOpen(false);
        setServicesOpen(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const services = [
    {
      name: 'AI Services',
      href: '/ai-services',
      icon: Brain,
      description: 'Advanced AI solutions for business automation and optimization'
    },
    {
      name: 'IT Services',
      href: '/it-services',
      icon: Settings,
      description: 'Comprehensive IT infrastructure and support services'
    },
    {
      name: 'Micro SaaS',
      href: '/micro-saas',
      icon: Cloud,
      description: 'Powerful, affordable AI-powered business tools'
    }
  ];

  const companyLinks = [
    { name: 'About Us', href: '/about' },
    { name: 'Team', href: '/team' },
    { name: 'Careers', href: '/careers' },
    { name: 'Contact', href: '/contact' }
  ];

  const resourceLinks = [
    { name: 'Blog', href: '/blog' },
    { name: 'Case Studies', href: '/case-studies' },
    { name: 'Documentation', href: '/docs' },
    { name: 'Support', href: '/support' }
  ];

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled 
        ? 'bg-black/90 backdrop-blur-lg border-b border-white/10' 
        : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-lg flex items-center justify-center">
              <Brain className="w-5 h-5 text-white" />
            </div>
            <span className="text-xl font-bold text-white">Zion Tech Group</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            {/* Services Dropdown */}
            <div className="relative group">
              <button
                onClick={() => setServicesOpen(!servicesOpen)}
                className="flex items-center space-x-1 text-white hover:text-cyan-400 transition-colors duration-200"
              >
                <span>Services</span>
                <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${servicesOpen ? 'rotate-180' : ''}`} />
              </button>
              
              {servicesOpen && (
                <div className="absolute top-full left-0 mt-2 w-80 bg-white/95 backdrop-blur-lg rounded-xl shadow-xl border border-white/20 p-6">
                  <div className="grid grid-cols-1 gap-4">
                    {services.map((service) => (
                      <Link
                        key={service.name}
                        to={service.href}
                        className="flex items-start space-x-3 p-3 rounded-lg hover:bg-white/10 transition-colors duration-200"
                        onClick={() => setServicesOpen(false)}
                      >
                        <service.icon className="w-6 h-6 text-cyan-400 mt-1 flex-shrink-0" />
                        <div>
                          <h3 className="font-semibold text-gray-900">{service.name}</h3>
                          <p className="text-sm text-gray-600">{service.description}</p>
                        </div>
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* Company Links */}
            <div className="relative group">
              <button className="flex items-center space-x-1 text-white hover:text-cyan-400 transition-colors duration-200">
                <span>Company</span>
                <ChevronDown className="w-4 h-4" />
              </button>
              <div className="absolute top-full left-0 mt-2 w-48 bg-white/95 backdrop-blur-lg rounded-xl shadow-xl border border-white/20 p-4 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                <div className="space-y-2">
                  {companyLinks.map((link) => (
                    <Link
                      key={link.name}
                      to={link.href}
                      className="block px-3 py-2 text-gray-900 hover:bg-white/10 rounded-lg transition-colors duration-200"
                    >
                      {link.name}
                    </Link>
                  ))}
                </div>
              </div>
            </div>

            {/* Resources Links */}
            <div className="relative group">
              <button className="flex items-center space-x-1 text-white hover:text-cyan-400 transition-colors duration-200">
                <span>Resources</span>
                <ChevronDown className="w-4 h-4" />
              </button>
              <div className="absolute top-full left-0 mt-2 w-48 bg-white/95 backdrop-blur-lg rounded-xl shadow-xl border border-white/20 p-4 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                <div className="space-y-2">
                  {resourceLinks.map((link) => (
                    <Link
                      key={link.name}
                      to={link.href}
                      className="block px-3 py-2 text-gray-900 hover:bg-white/10 rounded-lg transition-colors duration-200"
                    >
                      {link.name}
                    </Link>
                  ))}
                </div>
              </div>
            </div>

            <Link
              to="/pricing"
              className="text-white hover:text-cyan-400 transition-colors duration-200"
            >
              Pricing
            </Link>
          </div>

          {/* CTA Buttons */}
          <div className="hidden lg:flex items-center space-x-4">
            <a
              href="tel:+13024640950"
              className="flex items-center space-x-2 text-white hover:text-cyan-400 transition-colors duration-200"
            >
              <Phone className="w-4 h-4" />
              <span className="text-sm">+1 (302) 464-0950</span>
            </a>
            <Link
              to="/contact"
              className="bg-gradient-to-r from-cyan-400 to-blue-500 text-white px-6 py-2 rounded-lg font-semibold hover:from-cyan-500 hover:to-blue-600 transition-all duration-300"
            >
              Get Started
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden text-white hover:text-cyan-400 transition-colors duration-200"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="lg:hidden bg-black/95 backdrop-blur-lg border-t border-white/10">
            <div className="px-4 py-6 space-y-4">
              {/* Services */}
              <div>
                <h3 className="text-white font-semibold mb-3">Services</h3>
                <div className="space-y-2">
                  {services.map((service) => (
                    <Link
                      key={service.name}
                      to={service.href}
                      className="flex items-center space-x-3 p-3 rounded-lg hover:bg-white/10 transition-colors duration-200"
                      onClick={() => setIsOpen(false)}
                    >
                      <service.icon className="w-5 h-5 text-cyan-400" />
                      <div>
                        <h4 className="text-white font-medium">{service.name}</h4>
                        <p className="text-sm text-gray-400">{service.description}</p>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>

              {/* Company */}
              <div>
                <h3 className="text-white font-semibold mb-3">Company</h3>
                <div className="space-y-2">
                  {companyLinks.map((link) => (
                    <Link
                      key={link.name}
                      to={link.href}
                      className="block px-3 py-2 text-gray-300 hover:text-white transition-colors duration-200"
                      onClick={() => setIsOpen(false)}
                    >
                      {link.name}
                    </Link>
                  ))}
                </div>
              </div>

              {/* Resources */}
              <div>
                <h3 className="text-white font-semibold mb-3">Resources</h3>
                <div className="space-y-2">
                  {resourceLinks.map((link) => (
                    <Link
                      key={link.name}
                      to={link.href}
                      className="block px-3 py-2 text-gray-300 hover:text-white transition-colors duration-200"
                      onClick={() => setIsOpen(false)}
                    >
                      {link.name}
                    </Link>
                  ))}
                </div>
              </div>

              <Link
                to="/pricing"
                className="block px-3 py-2 text-gray-300 hover:text-white transition-colors duration-200"
                onClick={() => setIsOpen(false)}
              >
                Pricing
              </Link>

              {/* Mobile CTA */}
              <div className="pt-4 border-t border-white/10">
                <a
                  href="tel:+13024640950"
                  className="flex items-center space-x-2 text-white hover:text-cyan-400 transition-colors duration-200 mb-4"
                >
                  <Phone className="w-4 h-4" />
                  <span>+1 (302) 464-0950</span>
                </a>
                <Link
                  to="/contact"
                  className="block w-full bg-gradient-to-r from-cyan-400 to-blue-500 text-white px-6 py-3 rounded-lg font-semibold text-center hover:from-cyan-500 hover:to-blue-600 transition-all duration-300"
                  onClick={() => setIsOpen(false)}
                >
                  Get Started
                </Link>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;
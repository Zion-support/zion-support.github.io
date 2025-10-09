import React, { memo, useState } from 'react';
import { Link } from 'react-router-dom';
import { ChevronDown, Phone, Menu, X, Brain, Cloud, Shield, Code, BarChart, Users, Zap, ArrowRight, Sparkles, Cpu, Target, Globe, Database, Smartphone, Lock, Settings, FileText, Search, Bot, Palette, Camera, Music, Video, Gamepad2, ShoppingCart, CreditCard, Factory, Car, Plane, Ship, Train, Home, Heart, Stethoscope, GraduationCap, Briefcase, Wrench, Hammer, Paintbrush, Scissors, BookOpen, Calculator, Calendar, Clock3, Compass, Navigation as NavIcon, PieChart, TrendingDown, Activity, Mail, MapPin } from 'lucide-react';

const Navigation: React.FC = memo(() => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);

  const services = [
    {
      category: 'AI Services',
      icon: Brain,
      color: 'text-purple-400',
      items: [
        { name: 'AI Marketing', href: '/ai-marketing', description: 'Automated marketing solutions' },
        { name: 'AI Analytics', href: '/ai-analytics', description: 'Business intelligence & insights' },
        { name: 'AI Automation', href: '/ai-automation', description: 'Process automation' },
        { name: 'AI Content', href: '/ai-content', description: 'Content generation' },
        { name: 'AI Support', href: '/ai-support', description: 'Customer support automation' }
      ]
    },
    {
      category: 'IT Services',
      icon: Cloud,
      color: 'text-blue-400',
      items: [
        { name: 'Cloud Infrastructure', href: '/cloud-infrastructure', description: 'Scalable cloud solutions' },
        { name: 'Cybersecurity', href: '/cybersecurity', description: 'Security solutions' },
        { name: 'Network Solutions', href: '/network-solutions', description: 'Network design & management' },
        { name: 'Database Management', href: '/database-management', description: 'Database administration' },
        { name: 'DevOps & CI/CD', href: '/devops-cicd', description: 'Development operations' }
      ]
    },
    {
      category: 'Micro SAAS',
      icon: Zap,
      color: 'text-yellow-400',
      items: [
        { name: 'Project Management', href: '/ai-project-manager', description: 'AI-powered project management' },
        { name: 'Social Media', href: '/ai-social-media-manager', description: 'Social media automation' },
        { name: 'Email Marketing', href: '/ai-email-marketing', description: 'Intelligent email campaigns' },
        { name: 'Content Creation', href: '/ai-content-generator', description: 'AI content generation' },
        { name: 'Analytics Dashboard', href: '/ai-analytics-dashboard', description: 'Business intelligence' }
      ]
    }
  ];

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const toggleServices = () => setIsServicesOpen(!isServicesOpen);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-slate-900/95 backdrop-blur-lg border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link to="/" className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-gradient-to-r from-cyan-400 to-purple-400 rounded-lg flex items-center justify-center">
                <Brain className="w-5 h-5 text-white" />
              </div>
              <span className="text-xl font-bold text-white">Zion Tech Group</span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              <Link
                to="/"
                className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium transition-colors"
              >
                Home
              </Link>
              
              <Link
                to="/about"
                className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium transition-colors"
              >
                About
              </Link>

              {/* Services Dropdown */}
              <div className="relative">
                <button
                  onClick={toggleServices}
                  className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium transition-colors flex items-center"
                >
                  Services
                  <ChevronDown className="w-4 h-4 ml-1" />
                </button>

                {isServicesOpen && (
                  <div className="absolute left-0 mt-2 w-96 bg-slate-800 rounded-lg shadow-lg border border-white/10 z-50">
                    <div className="p-6">
                      <div className="grid grid-cols-1 gap-6">
                        {services.map((service, index) => (
                          <div key={index}>
                            <div className="flex items-center mb-3">
                              <service.icon className={`w-5 h-5 ${service.color} mr-2`} />
                              <h3 className="text-lg font-semibold text-white">{service.category}</h3>
                            </div>
                            <div className="space-y-2">
                              {service.items.map((item, itemIndex) => (
                                <Link
                                  key={itemIndex}
                                  to={item.href}
                                  className="block px-3 py-2 text-sm text-gray-300 hover:text-white hover:bg-slate-700 rounded-md transition-colors"
                                  onClick={() => setIsServicesOpen(false)}
                                >
                                  <div className="font-medium">{item.name}</div>
                                  <div className="text-xs text-gray-400">{item.description}</div>
                                </Link>
                              ))}
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                )}
              </div>

              <Link
                to="/pricing"
                className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium transition-colors"
              >
                Pricing
              </Link>

              <Link
                to="/blog"
                className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium transition-colors"
              >
                Blog
              </Link>

              <Link
                to="/contact"
                className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium transition-colors"
              >
                Contact
              </Link>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="hidden md:flex items-center space-x-4">
            <a
              href="tel:+13024640950"
              className="flex items-center text-cyan-400 hover:text-cyan-300 px-3 py-2 rounded-md text-sm font-medium transition-colors"
            >
              <Phone className="w-4 h-4 mr-1" />
              (302) 464-0950
            </a>
            <Link
              to="/contact"
              className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-6 py-2 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 transform hover:scale-105"
            >
              Get Started
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="text-gray-300 hover:text-white p-2 rounded-md transition-colors"
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-slate-800 rounded-lg mt-2">
              <Link
                to="/"
                className="text-gray-300 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
                onClick={toggleMenu}
              >
                Home
              </Link>
              
              <Link
                to="/about"
                className="text-gray-300 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
                onClick={toggleMenu}
              >
                About
              </Link>

              <Link
                to="/pricing"
                className="text-gray-300 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
                onClick={toggleMenu}
              >
                Pricing
              </Link>

              <Link
                to="/blog"
                className="text-gray-300 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
                onClick={toggleMenu}
              >
                Blog
              </Link>

              <Link
                to="/contact"
                className="text-gray-300 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
                onClick={toggleMenu}
              >
                Contact
              </Link>

              <div className="pt-4 border-t border-gray-700">
                <a
                  href="tel:+13024640950"
                  className="flex items-center text-cyan-400 hover:text-cyan-300 px-3 py-2 rounded-md text-base font-medium"
                >
                  <Phone className="w-4 h-4 mr-2" />
                  (302) 464-0950
                </a>
                <Link
                  to="/contact"
                  className="block bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-3 py-2 rounded-md text-base font-medium text-center mt-2"
                  onClick={toggleMenu}
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
});

Navigation.displayName = 'Navigation';

export default Navigation;
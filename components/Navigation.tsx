import React, { useState } from 'react';
import Link from 'next/link';
import { 
  Menu, 
  X, 
  ChevronDown, 
  Brain, 
  Cloud, 
  Shield, 
  Zap, 
  Users, 
  Phone, 
  Mail, 
  MapPin,
  Code,
  Network,
  Rocket,
  BarChart3,
  Globe,
  Building,
  Settings,
  Database,
  Lock,
  Cpu,
  Layers,
  Target,
  TrendingUp
} from 'lucide-react';

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  const navigationItems = [
    { name: 'Home', href: '/', icon: Globe },
    { name: 'About', href: '/about', icon: Users },
    { name: 'Services', href: '/services', icon: Settings, hasDropdown: true },
    { name: 'Solutions', href: '/solutions', icon: Target, hasDropdown: true },
    { name: 'Products', href: '/products', icon: Rocket },
    { name: 'Pricing', href: '/pricing', icon: BarChart3 },
    { name: 'Contact', href: '/contact', icon: Phone }
  ];

  const serviceCategories = [
    {
      name: 'AI & Machine Learning',
      icon: Brain,
      services: [
        { name: 'AI Services', href: '/services/ai' },
        { name: 'Machine Learning', href: '/services/ai#machine-learning' },
        { name: 'Natural Language Processing', href: '/services/ai#nlp' },
        { name: 'Computer Vision', href: '/services/ai#computer-vision' }
      ]
    },
    {
      name: 'Cloud & Infrastructure',
      icon: Cloud,
      services: [
        { name: 'Cloud Services', href: '/services/cloud' },
        { name: 'Infrastructure', href: '/services/infrastructure' },
        { name: 'DevOps', href: '/services/cloud#devops' },
        { name: 'Migration', href: '/services/cloud#migration' }
      ]
    },
    {
      name: 'Security & Compliance',
      icon: Shield,
      services: [
        { name: 'Cybersecurity', href: '/services/cybersecurity' },
        { name: 'Security Audits', href: '/services/cybersecurity#audits' },
        { name: 'Compliance', href: '/services/cybersecurity#compliance' },
        { name: 'Risk Assessment', href: '/services/cybersecurity#risk' }
      ]
    },
    {
      name: 'Digital Transformation',
      icon: Zap,
      services: [
        { name: 'Digital Transformation', href: '/services/transformation' },
        { name: 'Consulting', href: '/services/consulting' },
        { name: 'Strategy', href: '/services/consulting#strategy' },
        { name: 'Implementation', href: '/services/consulting#implementation' }
      ]
    }
  ];

  const solutionCategories = [
    {
      name: 'Industry Solutions',
      icon: Building,
      solutions: [
        { name: 'Healthcare', href: '/solutions#healthcare' },
        { name: 'Finance', href: '/solutions#finance' },
        { name: 'Manufacturing', href: '/solutions#manufacturing' },
        { name: 'Retail', href: '/solutions#retail' }
      ]
    },
    {
      name: 'Technology Solutions',
      icon: Cpu,
      solutions: [
        { name: 'Micro SaaS', href: '/micro-saas' },
        { name: 'IoT Solutions', href: '/solutions#iot' },
        { name: 'Blockchain', href: '/solutions#blockchain' },
        { name: 'AR/VR', href: '/solutions#ar-vr' }
      ]
    }
  ];

  const toggleDropdown = (item: string) => {
    setActiveDropdown(activeDropdown === item ? null : item);
  };

  return (
    <nav className="bg-gradient-to-r from-blue-900 via-blue-800 to-purple-900 shadow-lg fixed top-0 left-0 right-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link href="/" className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-lg flex items-center justify-center">
                <Brain className="w-5 h-5 text-white" />
              </div>
              <span className="text-xl font-bold text-white">Zion Tech Group</span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              {navigationItems.map((item) => (
                <div key={item.name} className="relative">
                  <button
                    onClick={() => item.hasDropdown && toggleDropdown(item.name)}
                    className="text-white hover:text-cyan-300 px-3 py-2 rounded-md text-sm font-medium flex items-center space-x-1 transition-colors duration-200"
                  >
                    <item.icon className="w-4 h-4" />
                    <span>{item.name}</span>
                    {item.hasDropdown && (
                      <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${
                        activeDropdown === item.name ? 'rotate-180' : ''
                      }`} />
                    )}
                  </button>

                  {/* Dropdown Menus */}
                  {item.hasDropdown && activeDropdown === item.name && (
                    <div className="absolute top-full left-0 mt-2 w-96 bg-white rounded-lg shadow-xl border border-gray-200 py-4 z-50">
                      <div className="grid grid-cols-2 gap-6 px-6">
                        {item.name === 'Services' && serviceCategories.map((category) => (
                          <div key={category.name}>
                            <div className="flex items-center space-x-2 mb-3">
                              <category.icon className="w-4 h-4 text-blue-600" />
                              <h3 className="text-sm font-semibold text-gray-900">{category.name}</h3>
                            </div>
                            <ul className="space-y-2">
                              {category.services.map((service) => (
                                <li key={service.name}>
                                  <Link
                                    href={service.href}
                                    className="text-sm text-gray-600 hover:text-blue-600 transition-colors duration-200 block py-1"
                                    onClick={() => setActiveDropdown(null)}
                                  >
                                    {service.name}
                                  </Link>
                                </li>
                              ))}
                            </ul>
                          </div>
                        ))}
                        {item.name === 'Solutions' && solutionCategories.map((category) => (
                          <div key={category.name}>
                            <div className="flex items-center space-x-2 mb-3">
                              <category.icon className="w-4 h-4 text-blue-600" />
                              <h3 className="text-sm font-semibold text-gray-900">{category.name}</h3>
                            </div>
                            <ul className="space-y-2">
                              {category.solutions.map((solution) => (
                                <li key={solution.name}>
                                  <Link
                                    href={solution.href}
                                    className="text-sm text-gray-600 hover:text-blue-600 transition-colors duration-200 block py-1"
                                    onClick={() => setActiveDropdown(null)}
                                  >
                                    {solution.name}
                                  </Link>
                                </li>
                              ))}
                            </ul>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-white hover:text-cyan-300 p-2"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-blue-900/95 backdrop-blur-sm rounded-lg mt-2">
              {navigationItems.map((item) => (
                <div key={item.name}>
                  <Link
                    href={item.href}
                    className="text-white hover:text-cyan-300 block px-3 py-2 rounded-md text-base font-medium flex items-center space-x-2"
                    onClick={() => setIsOpen(false)}
                  >
                    <item.icon className="w-4 h-4" />
                    <span>{item.name}</span>
                  </Link>
                  {item.hasDropdown && (
                    <div className="ml-6 mt-2 space-y-1">
                      {item.name === 'Services' && serviceCategories.map((category) => (
                        <div key={category.name} className="mb-3">
                          <h4 className="text-sm font-semibold text-cyan-300 mb-2">{category.name}</h4>
                          {category.services.map((service) => (
                            <Link
                              key={service.name}
                              href={service.href}
                              className="text-gray-300 hover:text-white block px-3 py-1 text-sm"
                              onClick={() => setIsOpen(false)}
                            >
                              {service.name}
                            </Link>
                          ))}
                        </div>
                      ))}
                      {item.name === 'Solutions' && solutionCategories.map((category) => (
                        <div key={category.name} className="mb-3">
                          <h4 className="text-sm font-semibold text-cyan-300 mb-2">{category.name}</h4>
                          {category.solutions.map((solution) => (
                            <Link
                              key={solution.name}
                              href={solution.href}
                              className="text-gray-300 hover:text-white block px-3 py-1 text-sm"
                              onClick={() => setIsOpen(false)}
                            >
                              {solution.name}
                            </Link>
                          ))}
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;
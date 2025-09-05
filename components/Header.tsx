import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Menu,
  X,
  Phone,
  Mail,
  MapPin,
  ChevronDown,
  Building2,
  Brain,
  Network,
  Cloud,
  Users,
  FileText,
  HelpCircle,
  Settings,
  Target,
  ArrowRight,
  ExternalLink
} from 'lucide-react';

const navigation = [
  {
    name: 'Home',
    href: '/',
    type: 'link'
  },
  {
    name: 'Services',
    href: '/services',
    type: 'dropdown',
    children: [
      {
        name: 'All Services',
        href: '/services',
        description: 'Comprehensive technology solutions'
      },
      {
        name: 'AI Services',
        href: '/ai-services',
        description: 'Artificial Intelligence solutions',
        icon: Brain
      },
      {
        name: 'IT Services',
        href: '/it-services',
        description: 'Information Technology services',
        icon: Network
      },
      {
        name: 'Micro SaaS',
        href: '/micro-saas',
        description: 'Software as a Service solutions',
        icon: Cloud
      },
      {
        name: 'Cloud & DevOps',
        href: '/services/cloud-devops',
        description: 'Cloud infrastructure and DevOps solutions',
        icon: Cloud
      },
      {
        name: 'Cybersecurity',
        href: '/services/cybersecurity',
        description: 'Advanced security solutions',
        icon: Shield
      },
      {
        name: 'Data Analytics',
        href: '/services/data-analytics',
        description: 'Business intelligence and analytics',
        icon: BarChart3
      },
      {
        name: 'Quantum Computing',
        href: '/services/quantum-computing',
        description: 'Quantum computing solutions',
        icon: Cpu
      }
    ]
  },
  {
    name: 'Solutions',
    href: '/solutions',
    type: 'dropdown',
    children: [
      {
        name: 'All Solutions',
        href: '/solutions',
        description: 'Complete solution portfolio'
      },
      {
        name: 'Enterprise',
        href: '/solutions/enterprise',
        description: 'Large-scale business solutions'
      },
      {
        name: 'Healthcare',
        href: '/solutions/healthcare',
        description: 'Healthcare technology solutions'
      },
      {
        name: 'Finance',
        href: '/solutions/finance',
        description: 'Financial technology solutions'
      },
      {
        name: 'Retail',
        href: '/solutions/retail',
        description: 'Retail technology solutions'
      },
      {
        name: 'Education',
        href: '/solutions/education',
        description: 'Educational technology solutions'
      },
      {
        name: 'Government',
        href: '/solutions/government',
        description: 'Government and public sector solutions'
      },
      {
        name: 'Startup',
        href: '/solutions/startup',
        description: 'Startup and SMB solutions'
      }
    ]
  },
  {
    name: 'Company',
    href: '/about',
    type: 'dropdown',
    children: [
      {
        name: 'About Us',
        href: '/about',
        description: 'Learn about our company'
      },
      {
        name: 'Our Team',
        href: '/team',
        description: 'Meet our experts'
      },
      {
        name: 'Careers',
        href: '/careers',
        description: 'Join our team'
      },
      {
        name: 'Blog',
        href: '/blog',
        description: 'Latest insights and news'
      },
      {
        name: 'Partners',
        href: '/partners',
        description: 'Our partner network'
      }
    ]
  },
  {
    name: 'Resources',
    href: '/resources',
    type: 'dropdown',
    children: [
      {
        name: 'Documentation',
        href: '/docs',
        description: 'Technical documentation'
      },
      {
        name: 'API Reference',
        href: '/api',
        description: 'API documentation'
      },
      {
        name: 'Help Center',
        href: '/help',
        description: 'Support and help resources'
      },
      {
        name: 'Community',
        href: '/community',
        description: 'Join our community'
      },
      {
        name: 'Case Studies',
        href: '/case-studies',
        description: 'Success stories and examples'
      },
      {
        name: 'Tutorials',
        href: '/tutorials',
        description: 'Step-by-step guides and tutorials'
      },
      {
        name: 'White Papers',
        href: '/white-papers',
        description: 'In-depth research and insights'
      },
      {
        name: 'Webinars',
        href: '/webinars',
        description: 'Live and recorded webinars'
      }
    ]
  },
  {
    name: 'Contact',
    href: '/contact',
    type: 'link'
  }
];

const contactInfo = {
  phone: '+1 302 464 0950',
  email: 'kleber@ziontechgroup.com',
  address: '364 E Main St STE 1008, Middletown, DE 19709'
};

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [isScrolled, setIsScrolled] = useState(false);
  const router = useRouter();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleDropdownToggle = (index) => {
    setActiveDropdown(activeDropdown === index ? null : index);
  };

  const handleLinkClick = () => {
    setIsOpen(false);
    setActiveDropdown(null);
  };

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled ? 'bg-white/95 backdrop-blur-md shadow-lg' : 'bg-transparent'
    }`}>
      {/* Top Contact Bar */}
      <div className="bg-blue-600 text-white py-2">
        <div className="container mx-auto px-4">
          <div className="flex flex-col sm:flex-row justify-between items-center text-sm">
            <div className="flex items-center space-x-6 mb-2 sm:mb-0">
              <div className="flex items-center space-x-2">
                <Phone className="w-4 h-4" />
                <span>{contactInfo.phone}</span>
              </div>
              <div className="flex items-center space-x-2">
                <Mail className="w-4 h-4" />
                <span>{contactInfo.email}</span>
              </div>
            </div>
            <div className="flex items-center space-x-2">
              <MapPin className="w-4 h-4" />
              <span className="hidden sm:inline">{contactInfo.address}</span>
            </div>
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <nav className="bg-white/95 backdrop-blur-md border-b border-gray-200">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center h-16">
            {/* Logo */}
            <Link href="/" className="flex items-center space-x-2">
              <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">
                <Building2 className="w-6 h-6 text-white" />
              </div>
              <span className="text-xl font-bold text-gray-900">Zion Tech Group</span>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center space-x-8">
              {navigation.map((item, index) => (
                <div key={item.name} className="relative">
                  {item.type === 'link' ? (
                    <Link
                      href={item.href}
                      className="text-gray-700 hover:text-blue-600 transition-colors font-medium"
                    >
                      {item.name}
                    </Link>
                  ) : (
                    <div className="relative">
                      <button
                        onClick={() => handleDropdownToggle(index)}
                        className="flex items-center space-x-1 text-gray-700 hover:text-blue-600 transition-colors font-medium"
                      >
                        <span>{item.name}</span>
                        <ChevronDown className="w-4 h-4" />
                      </button>
                      
                      <AnimatePresence>
                        {activeDropdown === index && (
                          <motion.div
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: 10 }}
                            className="absolute top-full left-0 mt-2 w-64 bg-white rounded-lg shadow-lg border border-gray-200 py-2 z-50"
                          >
                            {item.children?.map((child) => {
                              const IconComponent = child.icon;
                              return (
                                <Link
                                  key={child.name}
                                  href={child.href}
                                  onClick={handleLinkClick}
                                  className="flex items-start space-x-3 px-4 py-3 hover:bg-gray-50 transition-colors"
                                >
                                  {IconComponent && (
                                    <IconComponent className="w-5 h-5 text-blue-600 mt-0.5 flex-shrink-0" />
                                  )}
                                  <div>
                                    <div className="font-medium text-gray-900">{child.name}</div>
                                    <div className="text-sm text-gray-500">{child.description}</div>
                                  </div>
                                </Link>
                              );
                            })}
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  )}
                </div>
              ))}
            </div>

            {/* CTA Button */}
            <div className="hidden lg:flex items-center space-x-4">
              <Link
                href="/contact"
                className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors font-medium"
              >
                Get Started
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="lg:hidden p-2 text-gray-700 hover:text-blue-600 transition-colors"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="lg:hidden bg-white border-t border-gray-200"
            >
              <div className="container mx-auto px-4 py-4">
                {navigation.map((item, index) => (
                  <div key={item.name} className="mb-4">
                    {item.type === 'link' ? (
                      <Link
                        href={item.href}
                        onClick={handleLinkClick}
                        className="block py-2 text-gray-700 hover:text-blue-600 transition-colors font-medium"
                      >
                        {item.name}
                      </Link>
                    ) : (
                      <div>
                        <button
                          onClick={() => handleDropdownToggle(index)}
                          className="flex items-center justify-between w-full py-2 text-gray-700 hover:text-blue-600 transition-colors font-medium"
                        >
                          <span>{item.name}</span>
                          <ChevronDown className={`w-4 h-4 transition-transform ${
                            activeDropdown === index ? 'rotate-180' : ''
                          }`} />
                        </button>
                        <AnimatePresence>
                          {activeDropdown === index && (
                            <motion.div
                              initial={{ opacity: 0, height: 0 }}
                              animate={{ opacity: 1, height: 'auto' }}
                              exit={{ opacity: 0, height: 0 }}
                              className="ml-4 mt-2 space-y-2"
                            >
                              {item.children?.map((child) => {
                                const IconComponent = child.icon;
                                return (
                                  <Link
                                    key={child.name}
                                    href={child.href}
                                    onClick={handleLinkClick}
                                    className="flex items-start space-x-3 py-2 text-gray-600 hover:text-blue-600 transition-colors"
                                  >
                                    {IconComponent && (
                                      <IconComponent className="w-4 h-4 text-blue-600 mt-0.5 flex-shrink-0" />
                                    )}
                                    <div>
                                      <div className="font-medium">{child.name}</div>
                                      <div className="text-sm text-gray-500">{child.description}</div>
                                    </div>
                                  </Link>
                                );
                              })}
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </div>
                    )}
                  </div>
                ))}
                <div className="pt-4 border-t border-gray-200">
                  <Link
                    href="/contact"
                    onClick={handleLinkClick}
                    className="block w-full text-center px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors font-medium"
                  >
                    Get Started
                  </Link>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </header>
  );
}
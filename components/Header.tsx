import React, { useState } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Phone, 
  Mail, 
  Facebook, 
  Twitter, 
  Linkedin, 
  Instagram, 
  ChevronDown, 
  Menu, 
  X,
  Code,
  Database,
  Cloud,
  Shield,
  Smartphone,
  Globe,
  BarChart3,
  Users,
  Zap
} from 'lucide-react';

const servicesDropdown = [
  {
    title: 'Web Development',
    description: 'Custom websites and web applications',
    href: '/services/web-development',
    icon: Code
  },
  {
    title: 'Database Solutions',
    description: 'Database design and optimization',
    href: '/services/database-solutions',
    icon: Database
  },
  {
    title: 'Cloud Services',
    description: 'Cloud migration and management',
    href: '/services/cloud-services',
    icon: Cloud
  },
  {
    title: 'Security Solutions',
    description: 'Cybersecurity and data protection',
    href: '/services/security-solutions',
    icon: Shield
  },
  {
    title: 'Mobile Apps',
    description: 'iOS and Android applications',
    href: '/services/mobile-apps',
    icon: Smartphone
  },
  {
    title: 'Digital Marketing',
    description: 'SEO, PPC, and social media marketing',
    href: '/services/digital-marketing',
    icon: Globe
  }
];

const solutionsDropdown = [
  {
    title: 'Business Intelligence',
    description: 'Data analytics and reporting solutions',
    href: '/solutions/business-intelligence',
    icon: BarChart3
  },
  {
    title: 'Team Collaboration',
    description: 'Tools for remote and hybrid teams',
    href: '/solutions/team-collaboration',
    icon: Users
  },
  {
    title: 'Process Automation',
    description: 'Streamline workflows with automation',
    href: '/solutions/process-automation',
    icon: Zap
  }
];

const Header: React.FC = () => {
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const [isSolutionsOpen, setIsSolutionsOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <header className="bg-white shadow-lg sticky top-0 z-50">
      {/* Top Bar */}
      <div className="bg-blue-900 text-white py-2">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center text-sm">
            <div className="flex items-center space-x-6 mb-2 md:mb-0">
              <div className="flex items-center">
                <Phone className="w-4 h-4 mr-2" />
                <a href="tel:+13024640950" className="hover:text-blue-300">+1 302 464 0950</a>
              </div>
              <div className="flex items-center">
                <Mail className="w-4 h-4 mr-2" />
                <a href="mailto:kleber@ziontechgroup.com" className="hover:text-blue-300">kleber@ziontechgroup.com</a>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <span className="text-blue-200">24/7 Support Available</span>
              <div className="flex space-x-2">
                <a href="#" className="hover:text-blue-300"><Facebook className="w-4 h-4" /></a>
                <a href="#" className="hover:text-blue-300"><Twitter className="w-4 h-4" /></a>
                <a href="#" className="hover:text-blue-300"><Linkedin className="w-4 h-4" /></a>
                <a href="#" className="hover:text-blue-300"><Instagram className="w-4 h-4" /></a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <nav className="container mx-auto px-4">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2">
            <div className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-xl">Z</span>
            </div>
            <div>
              <div className="text-xl font-bold text-gray-900">Zion Tech Group</div>
              <div className="text-xs text-gray-500">Technology Solutions</div>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            {/* Services Dropdown */}
            <div className="relative group">
              <button
                className="flex items-center text-gray-700 hover:text-blue-600 font-medium transition-colors"
                onMouseEnter={() => setIsServicesOpen(true)}
                onMouseLeave={() => setIsServicesOpen(false)}
              >
                Services <ChevronDown className="w-4 h-4 ml-1" />
              </button>
              <AnimatePresence>
                {isServicesOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 10 }}
                    className="absolute top-full left-0 mt-2 w-96 bg-white rounded-lg shadow-xl border z-50"
                    onMouseEnter={() => setIsServicesOpen(true)}
                    onMouseLeave={() => setIsServicesOpen(false)}
                  >
                    <div className="p-6">
                      <div className="grid grid-cols-2 gap-4">
                        {servicesDropdown.map((service) => (
                          <Link key={service.title} href={service.href} className="group">
                            <div className="flex items-start space-x-3 p-3 rounded-lg hover:bg-gray-50 transition-colors">
                              <service.icon className="w-6 h-6 text-blue-600 mt-1" />
                              <div>
                                <h3 className="font-semibold text-gray-900 group-hover:text-blue-600">{service.title}</h3>
                                <p className="text-sm text-gray-600">{service.description}</p>
                              </div>
                            </div>
                          </Link>
                        ))}
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* Solutions Dropdown */}
            <div className="relative group">
              <button
                className="flex items-center text-gray-700 hover:text-blue-600 font-medium transition-colors"
                onMouseEnter={() => setIsSolutionsOpen(true)}
                onMouseLeave={() => setIsSolutionsOpen(false)}
              >
                Solutions <ChevronDown className="w-4 h-4 ml-1" />
              </button>
              <AnimatePresence>
                {isSolutionsOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 10 }}
                    className="absolute top-full left-0 mt-2 w-80 bg-white rounded-lg shadow-xl border z-50"
                    onMouseEnter={() => setIsSolutionsOpen(true)}
                    onMouseLeave={() => setIsSolutionsOpen(false)}
                  >
                    <div className="p-6">
                      {solutionsDropdown.map((solution) => (
                        <Link key={solution.title} href={solution.href} className="group block mb-4 last:mb-0">
                          <div className="flex items-start space-x-3 p-3 rounded-lg hover:bg-gray-50 transition-colors">
                            <solution.icon className="w-6 h-6 text-blue-600 mt-1" />
                            <div>
                              <h3 className="font-semibold text-gray-900 group-hover:text-blue-600">{solution.title}</h3>
                              <p className="text-sm text-gray-600">{solution.description}</p>
                            </div>
                          </div>
                        </Link>
                      ))}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            <Link href="/about" className="text-gray-700 hover:text-blue-600 font-medium transition-colors">
              About
            </Link>
            <Link href="/contact" className="text-gray-700 hover:text-blue-600 font-medium transition-colors">
              Contact
            </Link>
            <Link href="/blog" className="text-gray-700 hover:text-blue-600 font-medium transition-colors">
              Blog
            </Link>
            <Link 
              href="/contact" 
              className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors font-medium"
            >
              Get Started
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden p-2"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="lg:hidden border-t border-gray-200"
            >
              <div className="py-4 space-y-2">
                <Link href="/about" className="block px-4 py-2 text-gray-700 hover:text-blue-600 hover:bg-gray-50">
                  About
                </Link>
                <Link href="/contact" className="block px-4 py-2 text-gray-700 hover:text-blue-600 hover:bg-gray-50">
                  Contact
                </Link>
                <Link href="/blog" className="block px-4 py-2 text-gray-700 hover:text-blue-600 hover:bg-gray-50">
                  Blog
                </Link>
                <Link 
                  href="/contact" 
                  className="block mx-4 bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors font-medium text-center"
                >
                  Get Started
                </Link>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </header>
  );
};

export default Header;
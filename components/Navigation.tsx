import React, { useState } from 'react';
import Link from 'next/link';
<<<<<<< HEAD
import { motion } from 'framer-motion';
import { 
  Menu, 
  X, 
  ChevronDown,
  ArrowRight
} from 'lucide-react';

const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);

  const services = [
    { name: 'AI Services', href: '/ai-services' },
    { name: 'IT Services', href: '/it-services' },
    { name: 'Micro SaaS', href: '/micro-saas' }
  ];

  const mainNav = [
    { name: 'About', href: '/about' },
    { name: 'Services', href: '/services', hasDropdown: true },
    { name: 'Blog', href: '/blog' },
    { name: 'Careers', href: '/careers' },
    { name: 'Contact', href: '/contact' }
  ];

  return (
    <nav className="relative z-50 px-6 py-4">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center space-x-2">
          <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">
            <span className="text-white font-bold text-lg">Z</span>
          </div>
          <span className="text-white text-xl font-bold">Zion Tech Group</span>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden lg:flex items-center space-x-8">
          {mainNav.map((item) => (
            <div key={item.name} className="relative group">
              <Link 
                href={item.href} 
                className="text-gray-300 hover:text-white transition-colors flex items-center space-x-1"
                onMouseEnter={() => item.hasDropdown && setIsServicesOpen(true)}
                onMouseLeave={() => item.hasDropdown && setIsServicesOpen(false)}
              >
                <span>{item.name}</span>
                {item.hasDropdown && <ChevronDown className="h-4 w-4" />}
              </Link>
              
              {/* Services Dropdown */}
              {item.hasDropdown && isServicesOpen && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 10 }}
                  className="absolute top-full left-0 mt-2 w-64 bg-white/10 backdrop-blur-md rounded-xl p-4 shadow-xl"
                  onMouseEnter={() => setIsServicesOpen(true)}
                  onMouseLeave={() => setIsServicesOpen(false)}
                >
                  <div className="space-y-2">
                    {services.map((service) => (
                      <Link
                        key={service.name}
                        href={service.href}
                        className="flex items-center justify-between p-3 rounded-lg hover:bg-white/10 transition-colors group"
                      >
                        <span className="text-white">{service.name}</span>
                        <ArrowRight className="h-4 w-4 text-gray-400 group-hover:text-white transition-colors" />
                      </Link>
                    ))}
                  </div>
                </motion.div>
              )}
            </div>
          ))}
        </div>

        {/* Mobile Menu Button */}
        <button
          className="lg:hidden text-white"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: 'auto' }}
          exit={{ opacity: 0, height: 0 }}
          className="lg:hidden absolute top-full left-0 right-0 bg-white/10 backdrop-blur-md border-t border-white/20"
        >
          <div className="px-6 py-4 space-y-4">
            {mainNav.map((item) => (
              <div key={item.name}>
                <Link
                  href={item.href}
                  className="block text-gray-300 hover:text-white transition-colors py-2"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </Link>
                {item.hasDropdown && (
                  <div className="ml-4 space-y-2 mt-2">
                    {services.map((service) => (
                      <Link
                        key={service.name}
                        href={service.href}
                        className="block text-gray-400 hover:text-white transition-colors py-1"
                        onClick={() => setIsMenuOpen(false)}
                      >
                        {service.name}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
        </motion.div>
      )}
    </nav>
  );
};

export default Navigation;
=======
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Menu, 
  X, 
  ChevronDown, 
  Phone, 
  Mail, 
  Facebook, 
  Twitter, 
  Linkedin, 
  Instagram,
  ArrowRight,
  Building,
  Users,
  ShoppingCart,
  Shield,
  Zap,
  Globe,
  BarChart3
} from 'lucide-react';

export default function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const [isSolutionsOpen, setIsSolutionsOpen] = useState(false);
  const [isIndustriesOpen, setIsIndustriesOpen] = useState(false);
  const [isResourcesOpen, setIsResourcesOpen] = useState(false);

  const services = [
    { name: 'AI Services', href: '/ai-services', description: 'Machine Learning, NLP, Computer Vision', icon: BarChart3 },
    { name: 'IT Services', href: '/it-services', description: 'Cloud, DevOps, Cybersecurity', icon: Shield },
    { name: 'Micro SaaS', href: '/micro-saas', description: 'Custom SaaS Solutions', icon: Zap },
    { name: 'Blockchain', href: '/blockchain', description: 'Smart Contracts, DeFi, NFTs', icon: Building },
    { name: 'IoT Solutions', href: '/iot', description: 'Connected Devices, Edge Computing', icon: Globe },
    { name: 'Cybersecurity', href: '/cybersecurity', description: 'Security Audits, Compliance', icon: Shield }
  ];

  const solutions = [
    { name: 'Enterprise Solutions', href: '/enterprise', description: 'Large-scale business solutions', icon: Building },
    { name: 'Startup Solutions', href: '/startup', description: 'Scalable startup platforms', icon: Zap },
    { name: 'E-commerce', href: '/ecommerce', description: 'Online store solutions', icon: ShoppingCart },
    { name: 'Healthcare', href: '/industries/healthcare', description: 'Medical technology solutions', icon: Users },
    { name: 'Finance', href: '/industries/finance', description: 'Fintech and banking solutions', icon: BarChart3 },
    { name: 'Education', href: '/industries/education', description: 'EdTech platforms', icon: Users }
  ];

  const industries = [
    { name: 'Healthcare', href: '/industries/healthcare', description: 'Medical technology solutions' },
    { name: 'Finance', href: '/industries/finance', description: 'Fintech and banking solutions' },
    { name: 'Education', href: '/industries/education', description: 'EdTech platforms' },
    { name: 'Government', href: '/industries/government', description: 'Public sector solutions' },
    { name: 'Manufacturing', href: '/industries/manufacturing', description: 'Industrial automation' },
    { name: 'Retail', href: '/industries/retail', description: 'E-commerce and retail tech' },
    { name: 'Real Estate', href: '/industries/real-estate', description: 'Property technology' }
  ];

  const resources = [
    { name: 'Blog', href: '/blog', description: 'Latest insights and updates' },
    { name: 'Case Studies', href: '/case-studies', description: 'Success stories and projects' },
    { name: 'White Papers', href: '/white-papers', description: 'In-depth research and analysis' },
    { name: 'Tutorials', href: '/tutorials', description: 'Step-by-step guides' },
    { name: 'Training', href: '/training', description: 'Professional development' },
    { name: 'Events', href: '/events', description: 'Webinars and conferences' },
    { name: 'News', href: '/news', description: 'Industry news and updates' }
  ];


  return (
    <>
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
      <nav className="bg-white shadow-lg sticky top-0 z-50">
        <div className="container mx-auto px-4">
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
              <Link href="/" className="text-gray-700 hover:text-blue-600 font-medium transition-colors">
                Home
              </Link>
              
              {/* Services Dropdown */}
              <div className="relative group">
                <button 
                  className="flex items-center text-gray-700 hover:text-blue-600 font-medium transition-colors"
                  onMouseEnter={() => setIsServicesOpen(true)}
                  onMouseLeave={() => setIsServicesOpen(false)}
                >
                  Services
                  <ChevronDown className="w-4 h-4 ml-1" />
                </button>
                <AnimatePresence>
                  {isServicesOpen && (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 10 }}
                      className="absolute top-full left-0 mt-2 w-96 bg-white rounded-lg shadow-xl border border-gray-200 py-4"
                      onMouseEnter={() => setIsServicesOpen(true)}
                      onMouseLeave={() => setIsServicesOpen(false)}
                    >
                      <div className="grid grid-cols-2 gap-4 px-6">
                        {services.map((service, index) => {
                          const IconComponent = service.icon;
                          return (
                            <Link
                              key={index}
                              href={service.href}
                              className="p-3 rounded-lg hover:bg-blue-50 transition-colors group"
                            >
                              <div className="flex items-center mb-2">
                                <IconComponent className="w-5 h-5 text-blue-600 mr-2" />
                                <div className="font-medium text-gray-900 group-hover:text-blue-600">
                                  {service.name}
                                </div>
                              </div>
                              <div className="text-sm text-gray-500">
                                {service.description}
                              </div>
                            </Link>
                          );
                        })}
                      </div>
                      <div className="border-t border-gray-200 mt-4 pt-4 px-6">
                        <Link 
                          href="/services" 
                          className="flex items-center text-blue-600 hover:text-blue-700 font-medium"
                        >
                          View All Services
                          <ArrowRight className="w-4 h-4 ml-2" />
                        </Link>
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
                  Solutions
                  <ChevronDown className="w-4 h-4 ml-1" />
                </button>
                <AnimatePresence>
                  {isSolutionsOpen && (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 10 }}
                      className="absolute top-full left-0 mt-2 w-96 bg-white rounded-lg shadow-xl border border-gray-200 py-4"
                      onMouseEnter={() => setIsSolutionsOpen(true)}
                      onMouseLeave={() => setIsSolutionsOpen(false)}
                    >
                      <div className="grid grid-cols-2 gap-4 px-6">
                        {solutions.map((solution, index) => {
                          const IconComponent = solution.icon;
                          return (
                            <Link
                              key={index}
                              href={solution.href}
                              className="p-3 rounded-lg hover:bg-blue-50 transition-colors group"
                            >
                              <div className="flex items-center mb-2">
                                <IconComponent className="w-5 h-5 text-blue-600 mr-2" />
                                <div className="font-medium text-gray-900 group-hover:text-blue-600">
                                  {solution.name}
                                </div>
                              </div>
                              <div className="text-sm text-gray-500">
                                {solution.description}
                              </div>
                            </Link>
                          );
                        })}
                      </div>
                      <div className="border-t border-gray-200 mt-4 pt-4 px-6">
                        <Link 
                          href="/solutions" 
                          className="flex items-center text-blue-600 hover:text-blue-700 font-medium"
                        >
                          View All Solutions
                          <ArrowRight className="w-4 h-4 ml-2" />
                        </Link>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              {/* Industries Dropdown */}
              <div className="relative group">
                <button 
                  className="flex items-center text-gray-700 hover:text-blue-600 font-medium transition-colors"
                  onMouseEnter={() => setIsIndustriesOpen(true)}
                  onMouseLeave={() => setIsIndustriesOpen(false)}
                >
                  Industries
                  <ChevronDown className="w-4 h-4 ml-1" />
                </button>
                <AnimatePresence>
                  {isIndustriesOpen && (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 10 }}
                      className="absolute top-full left-0 mt-2 w-80 bg-white rounded-lg shadow-xl border border-gray-200 py-4"
                      onMouseEnter={() => setIsIndustriesOpen(true)}
                      onMouseLeave={() => setIsIndustriesOpen(false)}
                    >
                      <div className="px-6">
                        {industries.map((industry, index) => (
                          <Link
                            key={index}
                            href={industry.href}
                            className="block p-3 rounded-lg hover:bg-blue-50 transition-colors group"
                          >
                            <div className="font-medium text-gray-900 group-hover:text-blue-600">
                              {industry.name}
                            </div>
                            <div className="text-sm text-gray-500">
                              {industry.description}
                            </div>
                          </Link>
                        ))}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              {/* Resources Dropdown */}
              <div className="relative group">
                <button 
                  className="flex items-center text-gray-700 hover:text-blue-600 font-medium transition-colors"
                  onMouseEnter={() => setIsResourcesOpen(true)}
                  onMouseLeave={() => setIsResourcesOpen(false)}
                >
                  Resources
                  <ChevronDown className="w-4 h-4 ml-1" />
                </button>
                <AnimatePresence>
                  {isResourcesOpen && (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 10 }}
                      className="absolute top-full left-0 mt-2 w-80 bg-white rounded-lg shadow-xl border border-gray-200 py-4"
                      onMouseEnter={() => setIsResourcesOpen(true)}
                      onMouseLeave={() => setIsResourcesOpen(false)}
                    >
                      <div className="px-6">
                        {resources.map((resource, index) => (
                          <Link
                            key={index}
                            href={resource.href}
                            className="block p-3 rounded-lg hover:bg-blue-50 transition-colors group"
                          >
                            <div className="font-medium text-gray-900 group-hover:text-blue-600">
                              {resource.name}
                            </div>
                            <div className="text-sm text-gray-500">
                              {resource.description}
                            </div>
                          </Link>
                        ))}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              <Link href="/pricing" className="text-gray-700 hover:text-blue-600 font-medium transition-colors">
                Pricing
              </Link>
            </div>

            {/* CTA Buttons */}
            <div className="hidden lg:flex items-center space-x-4">
              <Link 
                href="/contact" 
                className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-lg font-medium transition-colors"
              >
                Get Started
              </Link>
              <a 
                href="tel:+13024640950" 
                className="bg-transparent border-2 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white px-6 py-2 rounded-lg font-medium transition-colors"
              >
                Call Now
              </a>
            </div>

            {/* Mobile Menu Button */}
            <button
              className="lg:hidden p-2"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

          {/* Mobile Menu */}
          <AnimatePresence>
            {isMenuOpen && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                exit={{ opacity: 0, height: 0 }}
                className="lg:hidden border-t border-gray-200"
              >
                <div className="py-4 space-y-2">
                  <Link 
                    href="/" 
                    className="block px-4 py-2 text-gray-700 hover:bg-blue-50 hover:text-blue-600 rounded-lg"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Home
                  </Link>
                  
                  {/* Mobile Services */}
                  <div className="px-4 py-2">
                    <div className="font-medium text-gray-900 mb-2">Services</div>
                    <div className="space-y-1 ml-4">
                      {services.map((service, index) => (
                        <Link
                          key={index}
                          href={service.href}
                          className="block py-1 text-sm text-gray-600 hover:text-blue-600"
                          onClick={() => setIsMenuOpen(false)}
                        >
                          {service.name}
                        </Link>
                      ))}
                    </div>
                  </div>

                  {/* Mobile Solutions */}
                  <div className="px-4 py-2">
                    <div className="font-medium text-gray-900 mb-2">Solutions</div>
                    <div className="space-y-1 ml-4">
                      {solutions.map((solution, index) => (
                        <Link
                          key={index}
                          href={solution.href}
                          className="block py-1 text-sm text-gray-600 hover:text-blue-600"
                          onClick={() => setIsMenuOpen(false)}
                        >
                          {solution.name}
                        </Link>
                      ))}
                    </div>
                  </div>

                  {/* Mobile Industries */}
                  <div className="px-4 py-2">
                    <div className="font-medium text-gray-900 mb-2">Industries</div>
                    <div className="space-y-1 ml-4">
                      {industries.map((industry, index) => (
                        <Link
                          key={index}
                          href={industry.href}
                          className="block py-1 text-sm text-gray-600 hover:text-blue-600"
                          onClick={() => setIsMenuOpen(false)}
                        >
                          {industry.name}
                        </Link>
                      ))}
                    </div>
                  </div>

                  {/* Mobile Resources */}
                  <div className="px-4 py-2">
                    <div className="font-medium text-gray-900 mb-2">Resources</div>
                    <div className="space-y-1 ml-4">
                      {resources.map((resource, index) => (
                        <Link
                          key={index}
                          href={resource.href}
                          className="block py-1 text-sm text-gray-600 hover:text-blue-600"
                          onClick={() => setIsMenuOpen(false)}
                        >
                          {resource.name}
                        </Link>
                      ))}
                    </div>
                  </div>

                  <Link 
                    href="/pricing" 
                    className="block px-4 py-2 text-gray-700 hover:bg-blue-50 hover:text-blue-600 rounded-lg"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Pricing
                  </Link>

                  <div className="px-4 py-2 space-y-2">
                    <Link 
                      href="/contact" 
                      className="block bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg font-medium text-center"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      Get Started
                    </Link>
                    <a 
                      href="tel:+13024640950" 
                      className="block bg-transparent border-2 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white px-4 py-2 rounded-lg font-medium text-center"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      Call Now
                    </a>
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </nav>
    </>
  );
}
>>>>>>> 2e9c29263b568858da4098d8218397d3dc948131

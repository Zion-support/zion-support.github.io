<<<<<<< HEAD
<<<<<<< HEAD
import React, { useState } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
=======
import React, { useState, useEffect } from 'react';
import Link from 'next/link';
<<<<<<< HEAD
import { useRouter } from 'next/router';
=======
>>>>>>> 781a25673e534b82e65bf7d34ef223e1e93789fb
>>>>>>> c340d36958b587ef531069bf6cf45d0bd8633ada
=======
import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
>>>>>>> d0b4cabda824e2db66cecb53192832d7e749a326
import { 
  Menu, 
  X, 
  Search, 
  Phone, 
<<<<<<< HEAD
  FileText,
  BarChart3,
  Cpu,
  Car,
  Code
} from 'lucide-react';

<<<<<<< HEAD
const navigation = [
  {
    name: 'Services',
    href: '/services',
    icon: Settings,
    children: [
      { name: 'AI Solutions', href: '/ai-services', icon: Brain, count: '80+' },
      { name: 'IT Services', href: '/it-services', icon: Network, count: '60+' },
      { name: 'Micro SaaS', href: '/micro-saas', icon: Cloud, count: '100+' },
      { name: 'All Services', href: '/services', icon: Globe, count: '240+' }
    ]
  },
  {
    name: 'Solutions',
    href: '/solutions',
    icon: Shield,
    children: [
      { name: 'Digital Transformation', href: '/solutions/digital-transformation', icon: Zap },
      { name: 'Cloud Migration', href: '/solutions/cloud-migration', icon: Cloud },
      { name: 'AI Implementation', href: '/solutions/ai-implementation', icon: Brain },
      { name: 'Cybersecurity', href: '/solutions/cybersecurity', icon: Shield },
      { name: 'Data Analytics', href: '/solutions/data-analytics', icon: BarChart3 },
      { name: 'IoT Solutions', href: '/solutions/iot', icon: Cpu }
    ]
  },
  {
    name: 'Industries',
    href: '/industries',
    icon: Building,
    children: [
      { name: 'Healthcare', href: '/industries/healthcare', icon: Heart },
      { name: 'Finance', href: '/industries/finance', icon: DollarSign },
      { name: 'Manufacturing', href: '/industries/manufacturing', icon: Settings },
      { name: 'Retail', href: '/industries/retail', icon: ShoppingCart },
      { name: 'Education', href: '/industries/education', icon: BookOpen },
      { name: 'Government', href: '/industries/government', icon: Building },
      { name: 'Energy', href: '/industries/energy', icon: Zap },
      { name: 'Transportation', href: '/industries/transportation', icon: Car }
    ]
  },
  {
    name: 'Resources',
    href: '/resources',
    icon: FileText,
    children: [
      { name: 'White Papers', href: '/white-papers', icon: FileText },
      { name: 'Webinars', href: '/webinars', icon: Video },
      { name: 'Case Studies', href: '/case-studies', icon: BookOpen },
      { name: 'Blog', href: '/blog', icon: MessageSquare },
      { name: 'Documentation', href: '/docs', icon: FileText },
      { name: 'API Reference', href: '/api-docs', icon: Code }
    ]
  },
  {
    name: 'Company',
    href: '/about',
    icon: Users,
    children: [
      { name: 'About Us', href: '/about', icon: Users },
      { name: 'Our Team', href: '/team', icon: Users },
      { name: 'Careers', href: '/careers', icon: Rocket },
      { name: 'Partners', href: '/partners', icon: Network },
      { name: 'News', href: '/news', icon: MessageSquare },
      { name: 'Contact', href: '/contact', icon: Phone }
    ]
  },
  {
    name: 'Pricing',
    href: '/pricing',
    icon: DollarSign
  },
  {
    name: 'Contact',
    href: '/contact',
    icon: Phone
  }
=======
=======
  Mail, 
  MapPin,
  ChevronDown,
  Building2
} from 'lucide-react';

>>>>>>> d0b4cabda824e2db66cecb53192832d7e749a326
const navigation = {
  'Services': [
    { name: 'AI Services', href: '/ai-services' },
    { name: 'IT Services', href: '/it-services' },
    { name: 'Micro SaaS', href: '/micro-saas' },
    { name: 'Cloud Solutions', href: '/cloud-solutions' },
    { name: 'Cybersecurity', href: '/cybersecurity' },
    { name: 'Quantum Computing', href: '/quantum-computing' },
<<<<<<< HEAD
<<<<<<< HEAD
    { name: 'Blockchain', href: '/blockchain' },
    { name: 'IoT Solutions', href: '/iot-solutions' },
    { name: 'Data Analytics', href: '/data-analytics' },
    { name: 'Custom Development', href: '/custom-development' },
    { name: 'Digital Transformation', href: '/digital-transformation' },
    { name: 'Enterprise Solutions', href: '/enterprise-solutions' }
=======
=======
>>>>>>> d0b4cabda824e2db66cecb53192832d7e749a326
    { name: 'Blockchain Solutions', href: '/blockchain' },
    { name: 'IoT Solutions', href: '/iot-solutions' },
    { name: 'Edge Computing', href: '/edge-computing' },
    { name: '5G Networks', href: '/5g-networks' }
<<<<<<< HEAD
>>>>>>> 781a25673e534b82e65bf7d34ef223e1e93789fb
=======
>>>>>>> d0b4cabda824e2db66cecb53192832d7e749a326
  ],
  'Solutions': [
    { name: 'Enterprise Solutions', href: '/solutions/enterprise' },
    { name: 'Startup Solutions', href: '/solutions/startup' },
    { name: 'Digital Transformation', href: '/solutions/digital-transformation' },
<<<<<<< HEAD
<<<<<<< HEAD
    { name: 'Custom Development', href: '/solutions/custom' },
    { name: 'AI Implementation', href: '/solutions/ai-implementation' },
    { name: 'Cloud Migration', href: '/solutions/cloud-migration' },
    { name: 'Legacy Modernization', href: '/solutions/legacy-modernization' },
    { name: 'API Development', href: '/solutions/api-development' }
=======
    { name: 'Custom Development', href: '/solutions/custom' }
>>>>>>> 781a25673e534b82e65bf7d34ef223e1e93789fb
=======
    { name: 'Custom Development', href: '/solutions/custom' }
>>>>>>> d0b4cabda824e2db66cecb53192832d7e749a326
  ],
  'Industries': [
    { name: 'Healthcare', href: '/industries/healthcare' },
    { name: 'Finance', href: '/industries/finance' },
    { name: 'Education', href: '/industries/education' },
    { name: 'Government', href: '/industries/government' },
    { name: 'Manufacturing', href: '/industries/manufacturing' },
    { name: 'Retail', href: '/industries/retail' },
    { name: 'Agriculture', href: '/industries/agriculture' },
<<<<<<< HEAD
<<<<<<< HEAD
    { name: 'Energy', href: '/industries/energy' },
    { name: 'Transportation', href: '/industries/transportation' },
    { name: 'Real Estate', href: '/industries/real-estate' },
    { name: 'Media & Entertainment', href: '/industries/media' },
    { name: 'Legal', href: '/industries/legal' }
=======
    { name: 'Energy', href: '/industries/energy' }
>>>>>>> 781a25673e534b82e65bf7d34ef223e1e93789fb
=======
    { name: 'Energy', href: '/industries/energy' }
>>>>>>> d0b4cabda824e2db66cecb53192832d7e749a326
  ],
  'Resources': [
    { name: 'Blog', href: '/blog' },
    { name: 'Documentation', href: '/docs' },
    { name: 'API Documentation', href: '/docs/api' },
    { name: 'Tutorials', href: '/tutorials' },
    { name: 'White Papers', href: '/white-papers' },
    { name: 'Webinars', href: '/webinars' },
    { name: 'Training', href: '/training' },
<<<<<<< HEAD
<<<<<<< HEAD
    { name: 'FAQ', href: '/faq' },
    { name: 'Case Studies', href: '/case-studies' },
    { name: 'Best Practices', href: '/best-practices' },
    { name: 'Industry Reports', href: '/industry-reports' },
    { name: 'Newsletter', href: '/newsletter' }
=======
    { name: 'FAQ', href: '/faq' }
>>>>>>> 781a25673e534b82e65bf7d34ef223e1e93789fb
=======
    { name: 'FAQ', href: '/faq' }
>>>>>>> d0b4cabda824e2db66cecb53192832d7e749a326
  ],
  'Company': [
    { name: 'About Us', href: '/about' },
    { name: 'Our Team', href: '/team' },
    { name: 'Careers', href: '/careers' },
    { name: 'Case Studies', href: '/case-studies' },
    { name: 'News', href: '/news' },
    { name: 'Partners', href: '/partners' },
    { name: 'Contact', href: '/contact' },
<<<<<<< HEAD
<<<<<<< HEAD
    { name: 'Privacy Policy', href: '/privacy' },
    { name: 'Terms of Service', href: '/terms' },
    { name: 'Security', href: '/security' },
    { name: 'Compliance', href: '/compliance' },
    { name: 'Investor Relations', href: '/investors' }
=======
    { name: 'Privacy Policy', href: '/privacy' }
>>>>>>> 781a25673e534b82e65bf7d34ef223e1e93789fb
=======
    { name: 'Privacy Policy', href: '/privacy' }
>>>>>>> d0b4cabda824e2db66cecb53192832d7e749a326
  ]
};

const quickLinks = [
  { name: 'Free Consultation', href: '/consultation' },
  { name: 'Get Quote', href: '/quote' },
  { name: 'Support', href: '/support' }
<<<<<<< HEAD
>>>>>>> c340d36958b587ef531069bf6cf45d0bd8633ada
];

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);

  return (
    <header className="bg-white shadow-lg sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link href="/" className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-sm">Z</span>
              </div>
              <span className="text-xl font-bold text-gray-900">Zion Tech Group</span>
            </Link>
          </div>

          {/* Desktop Navigation */}
<<<<<<< HEAD
          <nav className="hidden lg:flex items-center space-x-6">
=======
];

export default function Header({ onMenuClick }: { onMenuClick: () => void }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const router = useRouter();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleDropdownToggle = (item: string) => {
    setActiveDropdown(activeDropdown === item ? null : item);
  };

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled ? 'bg-white shadow-lg' : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2">
            <div className="bg-gradient-to-r from-blue-600 to-purple-600 p-2 rounded-lg">
              <Building2 className="w-8 h-8 text-white" />
            </div>
            <span className="text-xl font-bold text-gray-900">Zion Tech Group</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
>>>>>>> d0b4cabda824e2db66cecb53192832d7e749a326
            {Object.entries(navigation).map(([title, links]) => (
              <div key={title} className="relative group">
                <button
                  className="flex items-center space-x-1 text-gray-700 hover:text-blue-600 transition-colors"
                  onMouseEnter={() => setActiveDropdown(title)}
                  onMouseLeave={() => setActiveDropdown(null)}
                >
<<<<<<< HEAD
                  <span className="font-medium">{title}</span>
=======
          <nav className="hidden lg:flex items-center space-x-8">
            {navigation.map((item) => (
              <div key={item.name} className="relative group">
                <button
                  className="flex items-center space-x-1 text-gray-700 hover:text-blue-600 px-3 py-2 rounded-md text-sm font-medium transition-colors"
                  onMouseEnter={() => setOpenDropdown(item.name)}
                  onMouseLeave={() => setOpenDropdown(null)}
                >
<<<<<<< HEAD
                  <item.icon className="w-4 h-4" />
                  <span>{item.name}</span>
                  {item.children && <ChevronDown className="w-4 h-4" />}
                </button>

                {item.children && (
                  <AnimatePresence>
                    {openDropdown === item.name && (
                      <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 10 }}
                        transition={{ duration: 0.2 }}
                        className="absolute left-0 mt-2 w-80 bg-white rounded-lg shadow-lg border border-gray-200 py-2 z-50"
                        onMouseEnter={() => setOpenDropdown(item.name)}
                        onMouseLeave={() => setOpenDropdown(null)}
                      >
                        <div className="grid grid-cols-2 gap-4 p-4">
                          {item.children.map((child) => (
                            <Link
                              key={child.name}
                              href={child.href}
                              className="flex items-center space-x-3 p-3 rounded-lg hover:bg-gray-50 transition-colors group"
                            >
                              <div className="w-8 h-8 bg-blue-100 rounded-lg flex items-center justify-center group-hover:bg-blue-200 transition-colors">
                                <child.icon className="w-4 h-4 text-blue-600" />
                              </div>
                              <div>
                                <div className="font-medium text-gray-900">{child.name}</div>
                                {child.count && (
                                  <div className="text-sm text-gray-500">{child.count} projects</div>
                                )}
                              </div>
                            </Link>
                          ))}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
=======
                  <span>{title}</span>
>>>>>>> 781a25673e534b82e65bf7d34ef223e1e93789fb
=======
                  <span>{title}</span>
>>>>>>> d0b4cabda824e2db66cecb53192832d7e749a326
                  <ChevronDown className="w-4 h-4" />
                </button>
                
                {activeDropdown === title && (
<<<<<<< HEAD
<<<<<<< HEAD
                  <div className="absolute top-full left-0 mt-2 w-72 bg-white rounded-lg shadow-xl border border-gray-200 py-3 z-50 max-h-96 overflow-y-auto">
                    <div className="grid grid-cols-1 gap-1">
                      {links.map((link) => (
                        <Link
                          key={link.name}
                          href={link.href}
                          className="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition-colors rounded-md mx-2"
                        >
                          {link.name}
                        </Link>
                      ))}
                    </div>
=======
=======
>>>>>>> d0b4cabda824e2db66cecb53192832d7e749a326
                  <div className="absolute top-full left-0 mt-2 w-64 bg-white rounded-lg shadow-lg border border-gray-200 py-2 z-50">
                    {links.map((link) => (
                      <Link
                        key={link.name}
                        href={link.href}
                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 hover:text-blue-600 transition-colors"
                      >
                        {link.name}
                      </Link>
                    ))}
<<<<<<< HEAD
>>>>>>> 781a25673e534b82e65bf7d34ef223e1e93789fb
=======
>>>>>>> d0b4cabda824e2db66cecb53192832d7e749a326
                  </div>
>>>>>>> c340d36958b587ef531069bf6cf45d0bd8633ada
                )}
              </div>
            ))}
          </nav>

<<<<<<< HEAD
<<<<<<< HEAD
          {/* CTA Button */}
          <div className="hidden lg:flex items-center space-x-4">
            <Link
              href="/contact"
              className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-lg font-semibold transition-colors"
=======
          {/* Quick Links */}
<<<<<<< HEAD
          <div className="hidden lg:flex items-center space-x-3">
=======
          <div className="hidden lg:flex items-center space-x-4">
>>>>>>> 781a25673e534b82e65bf7d34ef223e1e93789fb
=======
          {/* Quick Links */}
          <div className="hidden lg:flex items-center space-x-4">
>>>>>>> d0b4cabda824e2db66cecb53192832d7e749a326
            {quickLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
<<<<<<< HEAD
<<<<<<< HEAD
                className="text-gray-700 hover:text-blue-600 transition-colors text-sm font-medium"
=======
                className="text-gray-700 hover:text-blue-600 transition-colors"
>>>>>>> 781a25673e534b82e65bf7d34ef223e1e93789fb
=======
                className="text-gray-700 hover:text-blue-600 transition-colors"
>>>>>>> d0b4cabda824e2db66cecb53192832d7e749a326
              >
                {link.name}
              </Link>
            ))}
            <Link
              href="/contact"
<<<<<<< HEAD
<<<<<<< HEAD
              className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors font-medium"
=======
              className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors"
>>>>>>> 781a25673e534b82e65bf7d34ef223e1e93789fb
>>>>>>> c340d36958b587ef531069bf6cf45d0bd8633ada
            >
              Get Started
            </Link>
          </div>

<<<<<<< HEAD
          {/* Mobile menu button */}
          <div className="lg:hidden">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-gray-700 hover:text-blue-600 p-2"
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="lg:hidden border-t border-gray-200"
            >
              <div className="py-4 space-y-2">
                {navigation.map((item) => (
                  <div key={item.name}>
                    <Link
                      href={item.href}
                      className="flex items-center space-x-2 text-gray-700 hover:text-blue-600 px-4 py-2 rounded-md font-medium"
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      <item.icon className="w-4 h-4" />
                      <span>{item.name}</span>
                    </Link>
                    {item.children && (
                      <div className="ml-6 mt-2 space-y-1">
                        {item.children.map((child) => (
                          <Link
                            key={child.name}
                            href={child.href}
                            className="flex items-center space-x-2 text-gray-600 hover:text-blue-600 px-4 py-1 rounded-md text-sm"
                            onClick={() => setIsMobileMenuOpen(false)}
                          >
                            <child.icon className="w-3 h-3" />
                            <span>{child.name}</span>
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                ))}
                <div className="pt-4 border-t border-gray-200">
                  <Link
                    href="/contact"
                    className="block bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg font-semibold text-center transition-colors"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    Get Started
                  </Link>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
=======
              className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors"
            >
              Contact Us
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={onMenuClick}
            className="lg:hidden p-2 text-gray-700 hover:text-blue-600 transition-colors"
          >
            <Menu className="w-6 h-6" />
          </button>
        </div>
>>>>>>> d0b4cabda824e2db66cecb53192832d7e749a326
      </div>
    </header>
  );
}
<<<<<<< HEAD
=======
          {/* Mobile Menu Button */}
          <button
            onClick={onMenuClick}
            className="lg:hidden p-2 text-gray-700 hover:text-blue-600 transition-colors"
          >
            <Menu className="w-6 h-6" />
          </button>
        </div>
      </div>
    </header>
  );
}
>>>>>>> c340d36958b587ef531069bf6cf45d0bd8633ada
=======
>>>>>>> d0b4cabda824e2db66cecb53192832d7e749a326

#!/bin/bash

echo "Creating final clean versions of all files..."

# Create clean Footer.tsx
cat > components/Footer.tsx << 'EOF'
import React from 'react';
import Link from 'next/link';
import { 
  MapPin, 
  Phone, 
  Mail, 
  Clock, 
  Facebook, 
  Twitter, 
  Linkedin, 
  Instagram, 
  Github,
  ExternalLink
} from 'lucide-react';

const footerSections = {
  'Services': [
    { name: 'AI Services', href: '/ai-services' },
    { name: 'IT Services', href: '/it-services' },
    { name: 'Micro SaaS', href: '/micro-saas' },
    { name: 'Cloud Solutions', href: '/cloud-solutions' },
    { name: 'Cybersecurity', href: '/cybersecurity' },
    { name: 'Quantum Computing', href: '/quantum-computing' },
    { name: 'Blockchain', href: '/blockchain' },
    { name: 'IoT Solutions', href: '/iot-solutions' }
  ],
  'Solutions': [
    { name: 'Enterprise Solutions', href: '/solutions/enterprise' },
    { name: 'Startup Solutions', href: '/solutions/startup' },
    { name: 'Digital Transformation', href: '/solutions/digital-transformation' },
    { name: 'Custom Development', href: '/solutions/custom' },
    { name: 'Industry Solutions', href: '/solutions/industry' },
    { name: 'Cloud Migration', href: '/solutions/cloud-migration' }
  ],
  'Industries': [
    { name: 'Healthcare', href: '/industries/healthcare' },
    { name: 'Finance', href: '/industries/finance' },
    { name: 'Education', href: '/industries/education' },
    { name: 'Government', href: '/industries/government' },
    { name: 'Manufacturing', href: '/industries/manufacturing' },
    { name: 'Retail', href: '/industries/retail' },
    { name: 'Agriculture', href: '/industries/agriculture' },
    { name: 'Energy', href: '/industries/energy' }
  ],
  'Resources': [
    { name: 'Blog', href: '/blog' },
    { name: 'Documentation', href: '/docs' },
    { name: 'API Documentation', href: '/docs/api' },
    { name: 'Tutorials', href: '/tutorials' },
    { name: 'White Papers', href: '/white-papers' },
    { name: 'Webinars', href: '/webinars' },
    { name: 'Training', href: '/training' },
    { name: 'FAQ', href: '/faq' }
  ],
  'Company': [
    { name: 'About Us', href: '/about' },
    { name: 'Our Team', href: '/team' },
    { name: 'Careers', href: '/careers' },
    { name: 'Case Studies', href: '/case-studies' },
    { name: 'News', href: '/news' },
    { name: 'Partners', href: '/partners' },
    { name: 'Contact', href: '/contact' },
    { name: 'Privacy Policy', href: '/privacy' }
  ],
  'Support': [
    { name: 'Help Center', href: '/help' },
    { name: 'Contact Support', href: '/contact' },
    { name: 'Status Page', href: '/status' },
    { name: 'Free Consultation', href: '/consultation' },
    { name: 'Get Quote', href: '/quote' },
    { name: 'Terms of Service', href: '/terms' }
  ]
};

const contactInfo = {
  phone: '+1 302 464 0950',
  email: 'kleber@ziontechgroup.com',
  address: '364 E Main St STE 1008, Middletown DE 19709'
};

const socialLinks = [
  { name: 'LinkedIn', href: 'https://linkedin.com/company/ziontechgroup', icon: Linkedin },
  { name: 'Twitter', href: 'https://twitter.com/ziontechgroup', icon: Twitter },
  { name: 'GitHub', href: 'https://github.com/ziontechgroup', icon: Github },
  { name: 'Facebook', href: 'https://facebook.com/ziontechgroup', icon: Facebook },
  { name: 'Instagram', href: 'https://instagram.com/ziontechgroup', icon: Instagram }
];

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <div className="flex items-center mb-6">
              <div className="bg-gradient-to-r from-blue-500 to-purple-600 p-2 rounded-lg mr-3">
                <ExternalLink className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold">Zion Tech Group</h3>
            </div>
            <p className="text-gray-300 mb-6 max-w-md">
              Leading provider of AI solutions, cloud services, and technology consulting.
              We help businesses transform and grow through innovative technology.
            </p>
            
            {/* Contact Info */}
            <div className="space-y-3">
              <div className="flex items-center text-gray-300">
                <Phone className="w-4 h-4 mr-3" />
                <a href={`tel:${contactInfo.phone}`} className="hover:text-white transition-colors">
                  {contactInfo.phone}
                </a>
              </div>
              <div className="flex items-center text-gray-300">
                <Mail className="w-4 h-4 mr-3" />
                <a href={`mailto:${contactInfo.email}`} className="hover:text-white transition-colors">
                  {contactInfo.email}
                </a>
              </div>
              <div className="flex items-center text-gray-300">
                <MapPin className="w-4 h-4 mr-3" />
                <span>{contactInfo.address}</span>
              </div>
            </div>

            {/* Social Links */}
            <div className="flex space-x-4 mt-6">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-gray-800 p-2 rounded-lg hover:bg-gray-700 transition-colors"
                  aria-label={social.name}
                >
                  <social.icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Footer Sections */}
          {Object.entries(footerSections).map(([title, links]) => (
            <div key={title}>
              <h4 className="text-lg font-semibold mb-6">{title}</h4>
              <ul className="space-y-3">
                {links.map((link) => (
                  <li key={link.name}>
                    <Link
                      href={link.href}
                      className="text-gray-300 hover:text-white transition-colors"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom Footer */}
        <div className="border-t border-gray-800 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex flex-col md:flex-row items-center space-y-2 md:space-y-0 md:space-x-6">
              <p className="text-gray-400 text-sm">
                © {currentYear} Zion Tech Group. All rights reserved.
              </p>
              <div className="flex space-x-6">
                <Link href="/privacy" className="text-gray-400 hover:text-white text-sm transition-colors">
                  Privacy Policy
                </Link>
                <Link href="/terms" className="text-gray-400 hover:text-white text-sm transition-colors">
                  Terms of Service
                </Link>
              </div>
            </div>
            <div className="flex items-center mt-4 md:mt-0">
              <Clock className="w-4 h-4 mr-2 text-gray-400" />
              <span className="text-gray-400 text-sm">24/7 Support Available</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
EOF

# Create clean Header.tsx
cat > components/Header.tsx << 'EOF'
import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { 
  Menu, 
  X, 
  Search, 
  Phone, 
  Mail, 
  MapPin,
  ChevronDown,
  Building2
} from 'lucide-react';

const navigation = {
  'Services': [
    { name: 'AI Services', href: '/ai-services' },
    { name: 'IT Services', href: '/it-services' },
    { name: 'Micro SaaS', href: '/micro-saas' },
    { name: 'Cloud Solutions', href: '/cloud-solutions' },
    { name: 'Cybersecurity', href: '/cybersecurity' },
    { name: 'Quantum Computing', href: '/quantum-computing' },
    { name: 'Blockchain', href: '/blockchain' },
    { name: 'IoT Solutions', href: '/iot-solutions' }
  ],
  'Solutions': [
    { name: 'Enterprise Solutions', href: '/solutions/enterprise' },
    { name: 'Startup Solutions', href: '/solutions/startup' },
    { name: 'Digital Transformation', href: '/solutions/digital-transformation' },
    { name: 'Custom Development', href: '/solutions/custom' }
  ],
  'Industries': [
    { name: 'Healthcare', href: '/industries/healthcare' },
    { name: 'Finance', href: '/industries/finance' },
    { name: 'Education', href: '/industries/education' },
    { name: 'Government', href: '/industries/government' },
    { name: 'Manufacturing', href: '/industries/manufacturing' },
    { name: 'Retail', href: '/industries/retail' },
    { name: 'Agriculture', href: '/industries/agriculture' },
    { name: 'Energy', href: '/industries/energy' }
  ],
  'Resources': [
    { name: 'Blog', href: '/blog' },
    { name: 'Documentation', href: '/docs' },
    { name: 'API Documentation', href: '/docs/api' },
    { name: 'Tutorials', href: '/tutorials' },
    { name: 'White Papers', href: '/white-papers' },
    { name: 'Webinars', href: '/webinars' },
    { name: 'Training', href: '/training' },
    { name: 'FAQ', href: '/faq' }
  ],
  'Company': [
    { name: 'About Us', href: '/about' },
    { name: 'Our Team', href: '/team' },
    { name: 'Careers', href: '/careers' },
    { name: 'Case Studies', href: '/case-studies' },
    { name: 'News', href: '/news' },
    { name: 'Partners', href: '/partners' },
    { name: 'Contact', href: '/contact' },
    { name: 'Privacy Policy', href: '/privacy' }
  ]
};

const quickLinks = [
  { name: 'Free Consultation', href: '/consultation' },
  { name: 'Get Quote', href: '/quote' },
  { name: 'Support', href: '/support' }
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
            {Object.entries(navigation).map(([title, links]) => (
              <div key={title} className="relative group">
                <button
                  className="flex items-center space-x-1 text-gray-700 hover:text-blue-600 transition-colors"
                  onMouseEnter={() => setActiveDropdown(title)}
                  onMouseLeave={() => setActiveDropdown(null)}
                >
                  <span>{title}</span>
                  <ChevronDown className="w-4 h-4" />
                </button>
                
                {activeDropdown === title && (
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
                  </div>
                )}
              </div>
            ))}
          </nav>

          {/* Quick Links */}
          <div className="hidden lg:flex items-center space-x-4">
            {quickLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="text-gray-700 hover:text-blue-600 transition-colors"
              >
                {link.name}
              </Link>
            ))}
            <Link
              href="/contact"
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
      </div>
    </header>
  );
}
EOF

# Create clean Sidebar.tsx
cat > components/Sidebar.tsx << 'EOF'
import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  X, 
  ChevronDown, 
  Home,
  Briefcase,
  Users,
  FileText,
  HelpCircle,
  Phone,
  Mail,
  MapPin,
  Building2,
  User,
  LogOut,
  Search
} from 'lucide-react';

const navigation = {
  'Services': [
    { name: 'AI Services', href: '/ai-services' },
    { name: 'IT Services', href: '/it-services' },
    { name: 'Micro SaaS', href: '/micro-saas' },
    { name: 'Cloud Solutions', href: '/cloud-solutions' },
    { name: 'Cybersecurity', href: '/cybersecurity' },
    { name: 'Quantum Computing', href: '/quantum-computing' },
    { name: 'Blockchain', href: '/blockchain' },
    { name: 'IoT Solutions', href: '/iot-solutions' }
  ],
  'Solutions': [
    { name: 'Enterprise Solutions', href: '/solutions/enterprise' },
    { name: 'Startup Solutions', href: '/solutions/startup' },
    { name: 'Digital Transformation', href: '/solutions/digital-transformation' },
    { name: 'Custom Development', href: '/solutions/custom' }
  ],
  'Industries': [
    { name: 'Healthcare', href: '/industries/healthcare' },
    { name: 'Finance', href: '/industries/finance' },
    { name: 'Education', href: '/industries/education' },
    { name: 'Government', href: '/industries/government' },
    { name: 'Manufacturing', href: '/industries/manufacturing' },
    { name: 'Retail', href: '/industries/retail' },
    { name: 'Agriculture', href: '/industries/agriculture' },
    { name: 'Energy', href: '/industries/energy' }
  ],
  'Resources': [
    { name: 'Blog', href: '/blog' },
    { name: 'Documentation', href: '/docs' },
    { name: 'API Documentation', href: '/docs/api' },
    { name: 'Tutorials', href: '/tutorials' },
    { name: 'White Papers', href: '/white-papers' },
    { name: 'Webinars', href: '/webinars' },
    { name: 'Training', href: '/training' },
    { name: 'FAQ', href: '/faq' }
  ],
  'Company': [
    { name: 'About Us', href: '/about' },
    { name: 'Our Team', href: '/team' },
    { name: 'Careers', href: '/careers' },
    { name: 'Case Studies', href: '/case-studies' },
    { name: 'News', href: '/news' },
    { name: 'Partners', href: '/partners' },
    { name: 'Contact', href: '/contact' },
    { name: 'Privacy Policy', href: '/privacy' }
  ]
};

const quickLinks = [
  { name: 'Free Consultation', href: '/consultation' },
  { name: 'Get Quote', href: '/quote' },
  { name: 'Support', href: '/support' }
];

interface SidebarProps {
  isOpen: boolean;
  onClose: () => void;
}

export function Sidebar({ isOpen, onClose }: SidebarProps) {
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }

    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  const handleDropdownToggle = (item: string) => {
    setActiveDropdown(activeDropdown === item ? null : item);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black bg-opacity-50 z-40"
            onClick={onClose}
          />

          {/* Sidebar */}
          <motion.div
            initial={{ x: '-100%' }}
            animate={{ x: 0 }}
            exit={{ x: '-100%' }}
            transition={{ type: 'tween', duration: 0.3 }}
            className="fixed top-0 left-0 h-full w-80 bg-white shadow-xl z-50 overflow-y-auto"
          >
            <div className="p-6">
              {/* Header */}
              <div className="flex items-center justify-between mb-8">
                <div className="flex items-center space-x-2">
                  <div className="bg-gradient-to-r from-blue-600 to-purple-600 p-2 rounded-lg">
                    <Building2 className="w-8 h-8 text-white" />
                  </div>
                  <span className="text-xl font-bold text-gray-900">Zion Tech Group</span>
                </div>
                <button
                  onClick={onClose}
                  className="p-2 text-gray-500 hover:text-gray-700 transition-colors"
                >
                  <X className="w-6 h-6" />
                </button>
              </div>

              {/* Navigation */}
              <nav className="space-y-4">
                {Object.entries(navigation).map(([title, links]) => (
                  <div key={title}>
                    <button
                      onClick={() => handleDropdownToggle(title)}
                      className="flex items-center justify-between w-full text-left text-lg font-semibold text-gray-900 py-2 hover:text-blue-600 transition-colors"
                    >
                      <span>{title}</span>
                      <ChevronDown className={`w-5 h-5 transition-transform ${
                        activeDropdown === title ? 'rotate-180' : ''
                      }`} />
                    </button>
                    
                    {activeDropdown === title && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        className="ml-4 space-y-2 mt-2"
                      >
                        {links.map((link) => (
                          <Link
                            key={link.name}
                            href={link.href}
                            className="block text-gray-600 hover:text-blue-600 transition-colors py-1"
                            onClick={onClose}
                          >
                            {link.name}
                          </Link>
                        ))}
                      </motion.div>
                    )}
                  </div>
                ))}
              </nav>

              {/* Quick Links */}
              <div className="mt-8 pt-8 border-t border-gray-200">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Quick Links</h3>
                <div className="space-y-2">
                  {quickLinks.map((link) => (
                    <Link
                      key={link.name}
                      href={link.href}
                      className="block text-gray-600 hover:text-blue-600 transition-colors py-1"
                      onClick={onClose}
                    >
                      {link.name}
                    </Link>
                  ))}
                </div>
              </div>

              {/* Contact Info */}
              <div className="mt-8 pt-8 border-t border-gray-200">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Contact Info</h3>
                <div className="space-y-3">
                  <div className="flex items-center text-gray-600">
                    <Phone className="w-4 h-4 mr-3" />
                    <span>+1 302 464 0950</span>
                  </div>
                  <div className="flex items-center text-gray-600">
                    <Mail className="w-4 h-4 mr-3" />
                    <span>kleber@ziontechgroup.com</span>
                  </div>
                  <div className="flex items-start text-gray-600">
                    <MapPin className="w-4 h-4 mr-3 mt-1" />
                    <span>364 E Main St STE 1008, Middletown DE 19709</span>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
EOF

echo "Final clean files created successfully!"
import React, { useState } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Menu, 
  X, 
  Phone, 
  Mail, 
  MapPin,
  ChevronDown,
  Brain,
  Network,
  Cloud,
  Users,
  Shield,
  BarChart3,
  Settings,
  Globe,
  FileText,
  MessageSquare,
  Rocket,
  Cpu,
  Building,
  Zap,
  Monitor
} from 'lucide-react';

const navigation = [{
    "name": 'Services',
    "href": '/services',
    "icon": Settings,
    "children": [
      { name: 'AI Solutions', "href": '/ai-services', "icon": Brain, "count": '30+' },
      { "name": 'IT Services', "href": '/it-services', "icon": Network, "count": '35+' },
      { "name": 'Micro SaaS', "href": '/micro-saas', "icon": Cloud, "count": '40+' },
      { "name": 'All Services', "href": '/services', "icon": Globe, "count": '105+' }
    ]
  },
  {
    "name": 'Solutions',
    "href": '/solutions',
    "icon": Shield,
    "children": [
      { name: 'Enterprise Solutions', "href": '/solutions/enterprise', "icon": Building },
      { "name": 'Startup Solutions', "href": '/solutions/startup', "icon": Rocket },
      { "name": 'Industry Solutions', "href": '/solutions/industry', "icon": BarChart3 },
      { "name": 'Custom Development', "href": '/solutions/custom', "icon": Settings },
      { "name": 'Digital Transformation', "href": '/solutions/digital-transformation', "icon": Zap },
      { "name": 'Cloud Migration', "href": '/solutions/cloud-migration', "icon": Cloud }
    ]
  },
  {
    "name": 'Technologies',
    "href": '/technologies',
    "icon": Cpu,
    "children": [
      { name: 'AI & Machine Learning', "href": '/technologies/ai-ml', "icon": Brain },
      { "name": 'Cloud Computing', "href": '/technologies/cloud', "icon": Cloud },
      { "name": 'Blockchain', "href": '/technologies/blockchain', "icon": Shield },
      { "name": 'IoT', "href": '/technologies/iot', "icon": Settings },
      { "name": 'Quantum Computing', "href": '/technologies/quantum', "icon": Cpu },
      { "name": 'Edge Computing', "href": '/technologies/edge', "icon": Network }
    ]
  },
  {
    "name": 'Resources',
    "href": '/resources',
    "icon": FileText,
    "children": [
      { name: 'Documentation', "href": '/docs', "icon": FileText },
      { "name": 'Case Studies', "href": '/case-studies', "icon": BarChart3 },
      { "name": 'Blog', "href": '/blog', "icon": MessageSquare },
      { "name": 'API Reference', "href": '/api-docs', "icon": Settings },
      { "name": 'White Papers', "href": '/white-papers', "icon": FileText },
      { "name": 'Webinars', "href": '/webinars', "icon": Monitor }
    ]
  },
  {
    "name": 'Company',
    "href": '/about',
    "icon": Users,
    "children": [
      { name: 'About Us', "href": '/about', "icon": Users },
      { "name": 'Our Team', "href": '/about#team', "icon": Users },
      { "name": 'Careers', "href": '/careers', "icon": Users },
      { "name": 'Partners', "href": '/partners', "icon": Globe },
      { "name": 'News', "href": '/news', "icon": MessageSquare }
    ]
  },
  {
    "name": 'Contact',
    "href": '/contact',
    "icon": Phone
  }
];

const contactInfo = {
  "phone": '+1 302 464 0950',
  "email": 'kleber@ziontechgroup.com',
  "address": '364 E Main St STE 1008, Middletown, DE 19709'
};

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const closeMenu = () => setIsMenuOpen(false);

  return (
    <header className="bg-white shadow-lg sticky top-0 z-50">
      {/* Top Bar */}
      <div className="bg-blue-900 text-white py-2">
        <div className="container mx-auto px-4">
          <div className="flex flex-col sm:flex-row justify-between items-center text-sm">
            <div className="flex flex-col sm:flex-row gap-4 mb-2 sm:mb-0">
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4" />
                <span>{contactInfo.phone}</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4" />
                <span>{contactInfo.email}</span>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <MapPin className="w-4 h-4" />
              <span>{contactInfo.address}</span>
            </div>
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <nav className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2">
            <div className="w-10 h-10 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-xl">Z</span>
            </div>
            <div>
              <div className="text-xl font-bold text-gray-900">Zion Tech Group</div>
              <div className="text-xs text-gray-600">Technology Solutions</div>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            {navigation.map((item) => (
              <div key={item.name} className="relative group">
                <Link
                  href={item.href}
                  className="flex items-center space-x-1 text-gray-700 hover:text-blue-600 font-medium transition-colors"
                  onMouseEnter={() => setActiveDropdown(item.name)}
                  onMouseLeave={() => setActiveDropdown(null)}
                >
                  <item.icon className="w-4 h-4" />
                  <span>{item.name}</span>
                  {item.children && <ChevronDown className="w-4 h-4" />}
                </Link>

                {/* Dropdown Menu */}
                {item.children && (
                  <AnimatePresence>
                    {activeDropdown === item.name && (
                      <motion.div
                        initial={{ "opacity": 0, "y": 10 }}
                        animate={{ "opacity": 1, "y": 0 }}
                        exit={{ "opacity": 0, "y": 10 }}
                        className="absolute top-full left-0 mt-2 w-64 bg-white rounded-lg shadow-xl border border-gray-200 py-2 z-50"
                        onMouseEnter={() => setActiveDropdown(item.name)}
                        onMouseLeave={() => setActiveDropdown(null)}
                      >
                        {item.children.map((child) => (
                          <Link
                            key={child.name}
                            href={child.href}
                            className="flex items-center justify-between px-4 py-3 text-gray-700 hover: bg-blue-50 hover:text-blue-600 transition-colors"
                          >
                            <div className="flex items-center space-x-3">
                              <child.icon className="w-4 h-4" />
                              <span>{child.name}</span>
                            </div>
                            {child.count && (
                              <span className="text-xs bg-blue-100 text-blue-600 px-2 py-1 rounded-full">
                                {child.count}
                              </span>
                            )}
                          </Link>
                        ))}
                      </motion.div>
                    )}
                  </AnimatePresence>
                )}
              </div>
            ))}
          </div>

          {/* CTA Buttons */}
          <div className="hidden lg: flex items-center space-x-4">
            <Link
              href="/contact"
              className="px-6 py-2 border border-blue-600 text-blue-600 rounded-lg hover:bg-blue-50 transition-colors font-medium"
            >
              Get Quote
            </Link>
            <Link
              href="/contact"
              className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors font-medium"
            >
              Free Consultation
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={toggleMenu}
            className="lg: hidden p-2 text-gray-700 hover:text-blue-600 transition-colors"
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              initial={{ "opacity": 0, "height": 0 }}
              animate={{ "opacity": 1, "height": 'auto' }}
              exit={{ "opacity": 0, "height": 0 }}
              className="lg: hidden border-t border-gray-200 bg-white"
            >
              <div className="py-4 space-y-2">
                {navigation.map((item) => (
                  <div key={item.name}>
                    <Link
                      href={item.href}
                      className="flex items-center space-x-2 px-4 py-3 text-gray-700 hover: bg-blue-50 hover:text-blue-600 transition-colors font-medium"
                      onClick={closeMenu}
                    >
                      <item.icon className="w-4 h-4" />
                      <span>{item.name}</span>
                    </Link>
                    {item.children && (
                      <div className="ml-8 space-y-1">
                        {item.children.map((child) => (
                          <Link
                            key={child.name}
                            href={child.href}
                            className="flex items-center justify-between px-4 py-2 text-sm text-gray-600 hover: bg-blue-50 hover:text-blue-600 transition-colors"
                            onClick={closeMenu}
                          >
                            <div className="flex items-center space-x-2">
                              <child.icon className="w-3 h-3" />
                              <span>{child.name}</span>
                            </div>
                            {child.count && (
                              <span className="text-xs bg-blue-100 text-blue-600 px-2 py-1 rounded-full">
                                {child.count}
                              </span>
                            )}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                ))}
                
                {/* Mobile CTA Buttons */}
                <div className="px-4 pt-4 border-t border-gray-200 space-y-2">
                  <Link
                    href="/contact"
                    className="block w-full px-4 py-3 text-center border border-blue-600 text-blue-600 rounded-lg hover: bg-blue-50 transition-colors font-medium"
                    onClick={closeMenu}
                  >
                    Get Quote
                  </Link>
                  <Link
                    href="/contact"
                    className="block w-full px-4 py-3 text-center bg-blue-600 text-white rounded-lg hover: bg-blue-700 transition-colors font-medium"
                    onClick={closeMenu}
                  >
                    Free Consultation
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
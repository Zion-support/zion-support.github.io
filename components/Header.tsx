import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { motion } from 'framer-motion';
import { 
  Menu, 
  X, 
  Search, 
  Sun, 
  Moon, 
  Phone, 
  Mail, 
  MapPin, 
  Clock,
  ChevronDown,
  DollarSign,
  Brain,
  Server,
  Cloud,
  Shield,
  BarChart3,
  Users,
  BookOpen,
  HelpCircle,
  FileText,
  Video,
  CaseStudy,
  Globe
} from 'lucide-react';

const navigation = [
  {
    name: 'Services',
    href: '/services',
    children: [
      { name: 'AI Services', href: '/ai-services', description: 'Cutting-edge AI solutions', icon: Brain },
      { name: 'IT Services', href: '/it-services', description: 'Comprehensive IT solutions', icon: Server },
      { name: 'Micro SaaS', href: '/micro-saas', description: 'Scalable SaaS solutions', icon: Cloud },
      { name: 'Cybersecurity', href: '/services/cybersecurity', description: 'Advanced security solutions', icon: Shield },
      { name: 'Data Analytics', href: '/services/data-analytics', description: 'Business intelligence & analytics', icon: BarChart3 },
      { name: 'Cloud & DevOps', href: '/services/cloud-devops', description: 'Cloud infrastructure & DevOps', icon: Cloud }
    ]
  },
  {
    name: 'Solutions',
    href: '/solutions',
    children: [
      { name: 'Enterprise Solutions', href: '/solutions/enterprise', description: 'Large-scale enterprise solutions', icon: Building },
      { name: 'Healthcare', href: '/solutions/healthcare', description: 'Healthcare technology solutions', icon: Heart },
      { name: 'Finance', href: '/solutions/finance', description: 'Financial services technology', icon: DollarSign },
      { name: 'Education', href: '/solutions/education', description: 'Educational technology solutions', icon: BookOpen },
      { name: 'Government', href: '/solutions/government', description: 'Government & public sector solutions', icon: Shield },
      { name: 'Manufacturing', href: '/solutions/manufacturing', description: 'Manufacturing & industrial solutions', icon: Settings }
    ]
  },
  {
    name: 'Industries',
    href: '/industries',
    children: [
      { name: 'Healthcare', href: '/industries/healthcare', description: 'Healthcare & life sciences', icon: Heart },
      { name: 'Finance', href: '/industries/finance', description: 'Banking & financial services', icon: DollarSign },
      { name: 'Education', href: '/industries/education', description: 'Educational institutions', icon: BookOpen },
      { name: 'Government', href: '/industries/government', description: 'Government agencies', icon: Shield },
      { name: 'Manufacturing', href: '/industries/manufacturing', description: 'Manufacturing & industrial', icon: Settings },
      { name: 'Retail', href: '/industries/retail', description: 'Retail & e-commerce', icon: ShoppingCart }
    ]
  },
  {
    name: 'Resources',
    href: '/resources',
    children: [
      { name: 'Blog', href: '/blog', description: 'Latest insights & news', icon: FileText },
      { name: 'Case Studies', href: '/case-studies', description: 'Success stories & case studies', icon: CaseStudy },
      { name: 'White Papers', href: '/white-papers', description: 'In-depth research & analysis', icon: FileText },
      { name: 'Webinars', href: '/webinars', description: 'Educational webinars & events', icon: Video },
      { name: 'Help Center', href: '/help', description: 'Support & documentation', icon: HelpCircle },
      { name: 'FAQ', href: '/faq', description: 'Frequently asked questions', icon: HelpCircle }
    ]
  },
  { name: 'About', href: '/about' },
  { name: 'Contact', href: '/contact' }
];

const contactInfo = {
  phone: '+1 302 464 0950',
  email: 'kleber@ziontechgroup.com',
  address: '364 E Main St STE 1008, Middletown, DE 19709'
};

interface HeaderProps {
  className?: string;
  onMenuClick?: () => void;
}

export default function Header({ className = '', onMenuClick }: HeaderProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState<string | null>(null);
  const [theme, setTheme] = useState<'light' | 'dark'>('dark');
  const [searchQuery, setSearchQuery] = useState('');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const router = useRouter();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      router.push(`/search?q=${encodeURIComponent(searchQuery)}`);
      setIsSearchOpen(false);
      setSearchQuery('');
    }
  };

  const toggleTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light');
  };

  const toggleDropdown = (itemName: string) => {
    setIsDropdownOpen(isDropdownOpen === itemName ? null : itemName);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
    if (onMenuClick) onMenuClick();
  };

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${className}`}>
      {/* Top Bar */}
      <div className="bg-gray-900 text-gray-300 text-sm py-2">
        <div className="container mx-auto px-4">
          <div className="flex flex-col sm:flex-row justify-between items-center text-sm">
            <div className="flex flex-col sm:flex-row gap-4 mb-2 sm:mb-0">
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-blue-400" />
                <span>{contactInfo.phone}</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-blue-400" />
                <span>{contactInfo.email}</span>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4 text-blue-400" />
                <span>24/7 Support</span>
              </div>
              <button
                onClick={toggleTheme}
                className="p-1 rounded-md hover:bg-gray-800 transition-colors"
                aria-label="Toggle theme"
              >
                {theme === 'light' ? <Moon className="w-4 h-4" /> : <Sun className="w-4 h-4" />}
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <nav className={`bg-white shadow-lg transition-all duration-300 ${isScrolled ? 'shadow-xl' : ''}`}>
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <Link href="/" className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-lg">Z</span>
              </div>
              <span className="text-xl font-bold text-gray-900">Zion Tech Group</span>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center space-x-8">
              {navigation.map((item) => (
                <div key={item.name} className="relative">
                  {item.children ? (
                    <div className="relative group">
                      <button
                        onClick={() => toggleDropdown(item.name)}
                        className="flex items-center space-x-1 text-gray-700 hover:text-blue-600 transition-colors py-2"
                      >
                        <span>{item.name}</span>
                        <ChevronDown className="w-4 h-4" />
                      </button>
                      
                      {isDropdownOpen === item.name && (
                        <motion.div
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: 10 }}
                          className="absolute top-full left-0 mt-2 w-80 bg-white rounded-lg shadow-xl border border-gray-200 py-4 z-50"
                        >
                          <div className="grid grid-cols-1 gap-2">
                            {item.children.map((child) => {
                              const IconComponent = child.icon;
                              return (
                                <Link
                                  key={child.name}
                                  href={child.href}
                                  className="flex items-start space-x-3 px-4 py-3 hover:bg-gray-50 transition-colors"
                                  onClick={() => setIsDropdownOpen(null)}
                                >
                                  <IconComponent className="w-5 h-5 text-blue-600 mt-0.5 flex-shrink-0" />
                                  <div>
                                    <div className="font-medium text-gray-900">{child.name}</div>
                                    <div className="text-sm text-gray-500">{child.description}</div>
                                  </div>
                                </Link>
                              );
                            })}
                          </div>
                        </motion.div>
                      )}
                    </div>
                  ) : (
                    <Link
                      href={item.href}
                      className="text-gray-700 hover:text-blue-600 transition-colors py-2"
                    >
                      {item.name}
                    </Link>
                  )}
                </div>
              ))}
            </div>

            {/* Search and CTA */}
            <div className="hidden lg:flex items-center space-x-4">
              <button
                onClick={() => setIsSearchOpen(!isSearchOpen)}
                className="p-2 text-gray-600 hover:text-blue-600 transition-colors"
                aria-label="Search"
              >
                <Search className="w-5 h-5" />
              </button>
              <Link
                href="/contact"
                className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-2 rounded-lg hover:shadow-lg transition-all duration-300 font-medium"
              >
                Get Started
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="lg:hidden p-2 text-gray-600 hover:text-blue-600 transition-colors"
              aria-label="Toggle mobile menu"
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-white border-t border-gray-200"
          >
            <div className="container mx-auto px-4 py-4">
              <div className="space-y-4">
                {navigation.map((item) => (
                  <div key={item.name}>
                    {item.children ? (
                      <div>
                        <div className="font-medium text-gray-900 mb-2">{item.name}</div>
                        <div className="ml-4 space-y-2">
                          {item.children.map((child) => {
                            const IconComponent = child.icon;
                            return (
                              <Link
                                key={child.name}
                                href={child.href}
                                className="flex items-center space-x-2 text-gray-600 hover:text-blue-600 transition-colors py-1"
                                onClick={closeMobileMenu}
                              >
                                <IconComponent className="w-4 h-4" />
                                <span>{child.name}</span>
                              </Link>
                            );
                          })}
                        </div>
                      </div>
                    ) : (
                      <Link
                        href={item.href}
                        className="block text-gray-700 hover:text-blue-600 transition-colors py-2"
                        onClick={closeMobileMenu}
                      >
                        {item.name}
                      </Link>
                    )}
                  </div>
                ))}
                <div className="pt-4 border-t border-gray-200">
                  <Link
                    href="/contact"
                    className="block w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white text-center px-6 py-3 rounded-lg hover:shadow-lg transition-all duration-300 font-medium"
                    onClick={closeMobileMenu}
                  >
                    Get Started
                  </Link>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </nav>

      {/* Search Overlay */}
      {isSearchOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-start justify-center pt-20"
          onClick={() => setIsSearchOpen(false)}
        >
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="bg-white rounded-lg shadow-xl w-full max-w-2xl mx-4"
            onClick={(e) => e.stopPropagation()}
          >
            <form onSubmit={handleSearch} className="p-4">
              <div className="flex items-center space-x-4">
                <Search className="w-5 h-5 text-gray-400" />
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Search services, solutions, or resources..."
                  className="flex-1 text-lg border-none outline-none"
                  autoFocus
                />
                <button
                  type="button"
                  onClick={() => setIsSearchOpen(false)}
                  className="p-2 text-gray-400 hover:text-gray-600 transition-colors"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>
            </form>
          </motion.div>
        </motion.div>
      )}
    </header>
  );
}
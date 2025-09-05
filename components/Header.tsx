import React, { useState } from 'react';
import Link from 'next/link';
<<<<<<< HEAD
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Menu, 
  X, 
  Phone, 
  Mail, 
  MapPin,
=======
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
>>>>>>> cursor/fix-lint-push-and-merge-to-main-372a
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
  Building,
  Heart,
  DollarSign,
  ShoppingCart,
  BookOpen,
  Zap,
  Video,
  Car,
  Search,
  Sprout
} from 'lucide-react';

const navigation = [
  {
    name: 'Services',
    href: '/services',
    children: [
<<<<<<< HEAD
      { name: 'AI Solutions', href: '/ai-services', icon: Brain, count: '80+' },
      { name: 'IT Services', href: '/it-services', icon: Network, count: '70+' },
      { name: 'Micro SaaS', href: '/micro-saas', icon: Cloud, count: '65+' },
      { name: 'Talent Solutions', href: '/talent', icon: Users, count: '15+' },
      { name: 'All Services', href: '/services', icon: Globe, count: '230+' }
=======
      { name: 'AI Services', href: '/ai-services', description: 'Cutting-edge AI solutions' },
      { name: 'IT Services', href: '/it-services', description: 'Comprehensive IT solutions' },
      { name: 'Micro SaaS', href: '/micro-saas', description: 'Scalable SaaS solutions' },
      { name: 'Cloud & DevOps', href: '/services/cloud-devops', description: 'Cloud infrastructure and DevOps' },
      { name: 'Cybersecurity', href: '/services/cybersecurity', description: 'Advanced security solutions' },
      { name: 'Data Analytics', href: '/services/data-analytics', description: 'Business intelligence and analytics' }
>>>>>>> cursor/fix-lint-push-and-merge-to-main-372a
    ]
  },
  {
    name: 'Solutions',
    href: '/solutions',
<<<<<<< HEAD
    icon: Shield,
    children: [
      { name: 'Enterprise Solutions', href: '/solutions/enterprise', icon: Shield },
      { name: 'Startup Solutions', href: '/solutions/startup', icon: Rocket },
      { name: 'Industry Solutions', href: '/solutions/industry', icon: BarChart3 },
      { name: 'Custom Development', href: '/solutions/custom', icon: Settings },
      { name: 'Digital Transformation', href: '/solutions/digital-transformation', icon: Zap },
      { name: 'Cloud Migration', href: '/solutions/cloud-migration', icon: Cloud },
      { name: 'AI Integration', href: '/solutions/ai-integration', icon: Brain },
      { name: 'Blockchain Solutions', href: '/solutions/blockchain', icon: Shield }
=======
    children: [
      { name: 'Enterprise Solutions', href: '/solutions/enterprise', description: 'Large-scale business solutions' },
      { name: 'Healthcare', href: '/solutions/healthcare', description: 'Healthcare technology solutions' },
      { name: 'Finance', href: '/solutions/finance', description: 'Financial technology solutions' },
      { name: 'Retail', href: '/solutions/retail', description: 'Retail and e-commerce solutions' },
      { name: 'Education', href: '/solutions/education', description: 'Educational technology solutions' },
      { name: 'Government', href: '/solutions/government', description: 'Government and public sector solutions' }
>>>>>>> cursor/fix-lint-push-and-merge-to-main-372a
    ]
  },
  {
    name: 'Industries',
    href: '/industries',
<<<<<<< HEAD
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
=======
    children: [
      { name: 'Healthcare', href: '/industries/healthcare', description: 'Healthcare technology' },
      { name: 'Finance', href: '/industries/finance', description: 'Financial services' },
      { name: 'Education', href: '/industries/education', description: 'Educational institutions' },
      { name: 'Manufacturing', href: '/industries/manufacturing', description: 'Manufacturing and industrial' },
      { name: 'Retail', href: '/industries/retail', description: 'Retail and e-commerce' },
      { name: 'Government', href: '/industries/government', description: 'Government agencies' }
>>>>>>> cursor/fix-lint-push-and-merge-to-main-372a
    ]
  },
  {
    name: 'Resources',
    href: '/resources',
<<<<<<< HEAD
    icon: FileText,
    children: [
      { name: 'Documentation', href: '/docs', icon: FileText },
      { name: 'Case Studies', href: '/case-studies', icon: BarChart3 },
      { name: 'Tutorials', href: '/tutorials', icon: MessageSquare },
      { name: 'Guides', href: '/guides', icon: FileText },
      { name: 'API Reference', href: '/api-docs', icon: Settings },
      { name: 'FAQ', href: '/faq', icon: MessageSquare },
      { name: 'White Papers', href: '/white-papers', icon: FileText },
      { name: 'Webinars', href: '/webinars', icon: Video },
      { name: 'Blog', href: '/blog', icon: MessageSquare },
      { name: 'News', href: '/news', icon: MessageSquare }
    ]
  },
  {
    name: 'Company',
    href: '/about',
    icon: Users,
    children: [
      { name: 'About Us', href: '/about', icon: Users },
      { name: 'Our Team', href: '/about#team', icon: Users },
      { name: 'Careers', href: '/careers', icon: Rocket },
      { name: 'Partners', href: '/partners', icon: Network },
      { name: 'News', href: '/news', icon: MessageSquare },
      { name: 'Blog', href: '/blog', icon: MessageSquare },
      { name: 'Investor Relations', href: '/investors', icon: DollarSign },
      { name: 'Sustainability', href: '/sustainability', icon: Sprout }
    ]
  },
  {
    name: 'Support',
    href: '/support',
    icon: Phone,
    children: [
      { name: 'Get Support', href: '/support', icon: Phone },
      { name: 'Contact Us', href: '/contact', icon: Phone },
      { name: 'Documentation', href: '/docs', icon: FileText },
      { name: 'FAQ', href: '/faq', icon: MessageSquare }
    ]
  }
=======
    children: [
      { name: 'Blog', href: '/blog', description: 'Latest insights and updates' },
      { name: 'Case Studies', href: '/case-studies', description: 'Success stories and projects' },
      { name: 'White Papers', href: '/white-papers', description: 'In-depth research and analysis' },
      { name: 'Webinars', href: '/webinars', description: 'Educational webinars and demos' },
      { name: 'Help Center', href: '/help', description: 'Support and documentation' },
      { name: 'FAQ', href: '/faq', description: 'Frequently asked questions' }
    ]
  },
  { name: 'About', href: '/about' },
  { name: 'Contact', href: '/contact' }
>>>>>>> cursor/fix-lint-push-and-merge-to-main-372a
];

const contactInfo = {
  phone: '+1 302 464 0950',
  email: 'kleber@ziontechgroup.com',
  address: '364 E Main St STE 1008, Middletown, DE 19709'
};

<<<<<<< HEAD
export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const closeMenu = () => setIsMenuOpen(false);

=======
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
  const $1 = [
    {
      label: 'Home',
      href: '/',
    },
    {
      label: 'Services',
      href: '/services',
      hasDropdown: true,
      dropdownItems: [
        { label: 'All Services', href: '/services' },
        { label: 'AI Services', href: '/ai-services' },
        { label: 'IT Services', href: '/it-services' },
        { label: 'Micro SaaS', href: '/micro-saas' },
        { label: 'Cloud & DevOps', href: '/services/cloud-devops' },
        { label: 'Cybersecurity', href: '/services/cybersecurity' },
        { label: 'Data Analytics', href: '/services/data-analytics' },
      ]
    },
    {
      label: 'Solutions',
      href: '/solutions',
      hasDropdown: true,
      dropdownItems: [
        { label: 'All Solutions', href: '/solutions' },
        { label: 'Enterprise Solutions', href: '/solutions/enterprise' },
        { label: 'Healthcare', href: '/solutions/healthcare' },
        { label: 'Finance', href: '/solutions/finance' },
        { label: 'Retail', href: '/solutions/retail' },
        { label: 'Education', href: '/solutions/education' },
        { label: 'Government', href: '/solutions/government' },
      ]
    },
    {
      label: 'Company',
      href: '/about',
      hasDropdown: true,
      dropdownItems: [
        { label: 'About Us', href: '/about' },
        { label: 'Our Team', href: '/team' },
        { label: 'Careers', href: '/careers' },
        { label: 'News', href: '/news' },
        { label: 'Contact', href: '/contact' },
      ]
    },
    {
      label: 'Industries',
      href: '/industries',
      hasDropdown: true,
      dropdownItems: [
        { label: 'All Industries', href: '/industries' },
        { label: 'Healthcare', href: '/industries/healthcare' },
        { label: 'Finance', href: '/industries/finance' },
        { label: 'Education', href: '/industries/education' },
        { label: 'Government', href: '/industries/government' },
        { label: 'Manufacturing', href: '/industries/manufacturing' },
        { label: 'Retail', href: '/industries/retail' },
      ]
    },
    {
      label: 'Resources',
      href: '/resources',
      hasDropdown: true,
      dropdownItems: [
        { label: 'Blog', href: '/blog' },
        { label: 'White Papers', href: '/white-papers' },
        { label: 'Case Studies', href: '/case-studies' },
        { label: 'Webinars', href: '/webinars' },
        { label: 'Help Center', href: '/help' },
        { label: 'FAQ', href: '/faq' },
      ]
    },
  ];
  const toggleTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light');
  };
cursor/website-audit-and-update-with-deployment-76dc
cursor/fix-lint-push-and-merge-to-main-f3c1
>>>>>>> cursor/fix-lint-push-and-merge-to-main-372a
  return (
    <header className="bg-white shadow-lg sticky top-0 z-50">
      {/* Top Bar */}
      <div className="bg-blue-900 text-white py-2">
        <div className="container mx-auto px-4">
          <div className="flex flex-col sm:flex-row justify-between items-center text-sm">
            <div className="flex flex-col sm:flex-row gap-4 mb-2 sm:mb-0">
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4" />
<<<<<<< HEAD
                <span>{contactInfo.phone}</span>
=======
                <span>+1 (555) 123-4567</span>
          <div className="flex flex-col sm:flex-row justify-between items-center text-sm">
            <div className="flex flex-col sm:flex-row gap-4 mb-2 sm:mb-0">
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-blue-400" />
                <span>{contactInfo.phone}</span>
cursor/website-audit-and-update-with-deployment-76dc
cursor/fix-lint-push-and-merge-to-main-f3c1
>>>>>>> cursor/fix-lint-push-and-merge-to-main-372a
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
<<<<<<< HEAD
      <nav className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2 flex-shrink-0">
            <div className="w-10 h-10 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-xl">Z</span>
            </div>
            <div className="hidden sm:block">
              <div className="text-xl font-bold text-gray-900">Zion Tech Group</div>
              <div className="text-xs text-gray-600">Technology Solutions</div>
            </div>
          </Link>

          {/* Search Bar - Desktop */}
          <div className="hidden md:flex flex-1 max-w-md mx-8">
            <div className="relative w-full">
              <input
                type="text"
                placeholder="Search services, solutions..."
                className="w-full px-4 py-2 pl-10 pr-4 text-gray-700 bg-gray-100 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
            </div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-6">
=======
      <div className="bg-white/95 backdrop-blur-md border-b border-gray-200">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            {/* Mobile Menu Button */}
            <button
              onClick={onMenuClick}
              className="lg:hidden p-2 hover:bg-gray-100 rounded-lg"
            >
              <Menu className="w-6 h-6 text-gray-700" />
            </button>
            {/* Logo */}
            <Link href="/" className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg flex items-center justify-center">
                <Zap className="w-5 h-5 text-white" />
              </div>
              <span className="text-xl font-bold text-gray-900">Zion Tech Group</span>
            </Link>
cursor/fix-lint-push-and-merge-to-main-f3c1
{/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
>>>>>>> cursor/fix-lint-push-and-merge-to-main-372a
            {navigation.map((item) => (
              <div key={item.name} className="relative group">
                <Link
                  href={item.href}
                  className="flex items-center space-x-1 text-gray-700 hover:text-blue-600 font-medium transition-colors py-2"
                  onMouseEnter={() => setActiveDropdown(item.name)}
                  onMouseLeave={() => setActiveDropdown(null)}
                >
                  <item.icon className="w-4 h-4" />
                  <span className="text-sm">{item.name}</span>
                  {item.children && <ChevronDown className="w-3 h-3" />}
                </Link>
                {/* Dropdown Menu */}
                {item.children && (
                  <AnimatePresence>
                    {activeDropdown === item.name && (
                      <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 10 }}
                        className="absolute top-full left-0 mt-2 w-72 bg-white rounded-lg shadow-xl border border-gray-200 py-2 z-50"
                        onMouseEnter={() => setActiveDropdown(item.name)}
                        onMouseLeave={() => setActiveDropdown(null)}
                      >
                        {item.children.map((child) => (
                          <Link
                            key={child.name}
                            href={child.href}
                            className="flex items-center justify-between px-4 py-3 text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition-colors"
                          >
                            <div className="flex items-center space-x-3">
                              <child.icon className="w-4 h-4" />
                              <span className="text-sm">{child.name}</span>
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
<<<<<<< HEAD
          </div>

          {/* CTA Buttons */}
          <div className="hidden lg:flex items-center space-x-3 flex-shrink-0">
=======
            {/* CTA Button */}
            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center space-x-8">
              {navigation.map((item) => (
                <div key={item.name} className="relative group">
                  <Link
                    href={item.href}
                    className="flex items-center space-x-1 text-gray-700 hover:text-blue-600 transition-colors"
                    onMouseEnter={() => setIsDropdownOpen(item.name)}
                    onMouseLeave={() => setIsDropdownOpen(null)}
                  >
                    <span>{item.name}</span>
                    {item.children && <ChevronDown className="w-4 h-4" />}
                  </Link>
                  {/* Dropdown Menu */}
                  {item.children && isDropdownOpen === item.name && (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 10 }}
                      className="absolute top-full left-0 mt-2 w-64 bg-white rounded-lg shadow-lg border border-gray-200 py-2"
                      onMouseEnter={() => setIsDropdownOpen(item.name)}
                      onMouseLeave={() => setIsDropdownOpen(null)}
                    >
                      {item.children.map((child) => (
                        <Link
                          key={child.name}
                          href={child.href}
                          className="block px-4 py-3 text-gray-700 hover:bg-gray-50 hover:text-blue-600 transition-colors"
                        >
                          <div className="font-medium">{child.name}</div>
                          <div className="text-sm text-gray-500">{child.description}</div>
                        </Link>
                      ))}
                    </motion.div>
                  )}
                </div>
              ))}
            </nav>
            {/* Search and CTA */}
            <div className="flex items-center space-x-4">
              {/* Search Button */}
              <button
                onClick={() => setIsSearchOpen(!isSearchOpen)}
                className="p-2 text-gray-600 hover:text-gray-900 hover:bg-gray-100 rounded-md transition-colors"
              >
                <Search className="w-5 h-5" />
              </button>
              {/* CTA Button */}
cursor/website-audit-and-update-with-deployment-76dc
cursor/fix-lint-push-and-merge-to-main-f3c1
              <Link
                href="/contact"
                className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors font-medium"
              >
                Get Started
              </Link>

              {/* Mobile menu button */}
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="lg:hidden p-2 text-gray-600 hover:text-blue-600 transition-colors"
              >
                {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
cursor/fix-lint-push-and-merge-to-main-f3c1
{/* CTA Buttons */}
          <div className="hidden lg:flex items-center space-x-4">
>>>>>>> cursor/fix-lint-push-and-merge-to-main-372a
            <Link
              href="/contact"
              className="px-4 py-2 border border-blue-600 text-blue-600 rounded-lg hover:bg-blue-50 transition-colors font-medium text-sm"
            >
              Get Quote
            </Link>
            <Link
              href="/contact"
              className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors font-medium text-sm"
            >
              Free Consultation
            </Link>
          </div>
          {/* Mobile Menu Button */}
          <button
            onClick={toggleMenu}
            className="lg:hidden p-2 text-gray-700 hover:text-blue-600 transition-colors flex-shrink-0"
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
cursor/website-audit-and-update-with-deployment-76dc
        </div>
      </div>
cursor/fix-lint-push-and-merge-to-main-f3c1
        {/* Mobile Menu */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="lg:hidden border-t border-gray-200 bg-white max-h-screen overflow-y-auto"
            >
              {/* Mobile Search */}
              <div className="p-4 border-b border-gray-200">
                <div className="relative">
                  <input
                    type="text"
                    placeholder="Search services, solutions..."
                    className="w-full px-4 py-2 pl-10 pr-4 text-gray-700 bg-gray-100 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
                </div>
              </div>

              <div className="py-4 space-y-1">
                {navigation.map((item) => (
                  <div key={item.name}>
                    <Link
                      href={item.href}
                      className="flex items-center justify-between px-4 py-3 text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition-colors font-medium"
                      onClick={closeMenu}
                    >
                      <div className="flex items-center space-x-3">
                        <item.icon className="w-5 h-5" />
                        <span className="text-base">{item.name}</span>
                      </div>
                      {item.children && <ChevronDown className="w-4 h-4" />}
                    </Link>
                    {item.children && (
                      <div className="ml-8 space-y-1 border-l-2 border-gray-100 pl-4">
                        {item.children.map((child) => (
                          <Link
                            key={child.name}
                            href={child.href}
                            className="flex items-center justify-between px-4 py-2 text-sm text-gray-600 hover:bg-blue-50 hover:text-blue-600 transition-colors rounded-lg mx-2"
                            onClick={closeMenu}
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
                      </div>
                    )}
                  </div>
                ))}
                {/* Mobile CTA Buttons */}
                <div className="px-4 pt-6 border-t border-gray-200 space-y-3">
                  <Link
                    href="/contact"
                    className="block w-full px-4 py-3 text-center border border-blue-600 text-blue-600 rounded-lg hover:bg-blue-50 transition-colors font-medium"
                    onClick={closeMenu}
                  >
                    Get Quote
                  </Link>
                  <Link
                    href="/contact"
                    className="block w-full px-4 py-3 text-center bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors font-medium"
                    onClick={closeMenu}
                  >
                    Free Consultation
                  </Link>
                </div>
<<<<<<< HEAD

                {/* Mobile Contact Info */}
                <div className="px-4 pt-4 border-t border-gray-200">
                  <div className="text-sm text-gray-600 space-y-2">
                    <div className="flex items-center space-x-2">
                      <Phone className="w-4 h-4" />
                      <span>{contactInfo.phone}</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Mail className="w-4 h-4" />
                      <span className="text-xs">{contactInfo.email}</span>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
=======
              ))}
            </div>
          </div>
        )}
      </div>
      {/* Search Overlay */}
      {isSearchOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-black/50 z-50 flex items-start justify-center pt-20"
          onClick={() => setIsSearchOpen(false)}
        >
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="bg-white rounded-lg shadow-xl p-6 w-full max-w-md mx-4"
            onClick={(e) => e.stopPropagation()}
          >
            <form onSubmit={handleSearch} className="space-y-4">
              <div className="flex items-center space-x-2">
                <Search className="w-5 h-5 text-gray-400" />
                <input
                  type="text"
                  placeholder="Search services, solutions..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="flex-1 border-none outline-none text-lg"
                  autoFocus
                />
                <button
                  type="button"
                  onClick={() => setIsSearchOpen(false)}
                  className="p-1 hover:bg-gray-100 rounded"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>
              <button
                type="submit"
                className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition-colors"
              >
                Search
              </button>
            </form>
          </motion.div>
        </motion.div>
      )}
cursor/website-audit-and-update-with-deployment-76dc
cursor/fix-lint-push-and-merge-to-main-f3c1
>>>>>>> cursor/fix-lint-push-and-merge-to-main-372a
    </header>
  );
}
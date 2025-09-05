import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import {
  Menu,
  X,
  Search,
  Sun,
  Moon,
  User,
  Phone,
  Mail,
  ChevronDown,
  Zap,
  Brain,
  Shield,
  Cloud,
  Users,
  FileText,
  HelpCircle,
  DollarSign,
  Settings,
  Network,
  Globe,
  Rocket,
  BarChart3,
  MessageSquare,
  Building,
  Code,
  BookOpen,
  Award,
  TrendingUp,
  Lock,
  Heart,
  Target
} from 'lucide-react';

const navigation = [
  {
    name: 'Services',
    href: '/services',
    icon: Settings,
    children: [
      { name: 'AI Solutions', href: '/ai-services', icon: Brain, count: '20+', description: 'Cutting-edge AI solutions' },
      { name: 'IT Services', href: '/it-services', icon: Network, count: '20+', description: 'Comprehensive IT services' },
      { name: 'Micro SaaS', href: '/micro-saas', icon: Cloud, count: '25+', description: 'Scalable SaaS solutions' },
      { name: 'Cloud & DevOps', href: '/services/cloud-devops', icon: Cloud, count: '15+', description: 'Cloud infrastructure' },
      { name: 'Cybersecurity', href: '/services/cybersecurity', icon: Shield, count: '12+', description: 'Security solutions' },
      { name: 'Data Analytics', href: '/services/data-analytics', icon: BarChart3, count: '8+', description: 'Data insights' },
      { name: 'All Services', href: '/services', icon: Globe, count: '65+', description: 'Complete service portfolio' }
    ]
  },
  {
    name: 'Solutions',
    href: '/solutions',
    icon: Shield,
    children: [
      { name: 'Enterprise Solutions', href: '/solutions/enterprise', icon: Building, description: 'Large-scale implementations' },
      { name: 'Startup Solutions', href: '/solutions/startup', icon: Rocket, description: 'Rapid growth solutions' },
      { name: 'Industry Solutions', href: '/solutions/industry', icon: BarChart3, description: 'Industry-specific solutions' },
      { name: 'Custom Development', href: '/solutions/custom', icon: Code, description: 'Tailored solutions' },
      { name: 'Cloud Migration', href: '/solutions/cloud-migration', icon: Cloud, description: 'Seamless cloud transition' },
      { name: 'Digital Transformation', href: '/solutions/digital-transformation', icon: TrendingUp, description: 'Complete digital overhaul' }
    ]
  },
  {
    name: 'Industries',
    href: '/industries',
    icon: Building,
    children: [
      { name: 'Healthcare', href: '/industries/healthcare', icon: Heart, description: 'Healthcare technology' },
      { name: 'Finance', href: '/industries/finance', icon: DollarSign, description: 'Financial services' },
      { name: 'Education', href: '/industries/education', icon: BookOpen, description: 'Educational technology' },
      { name: 'Government', href: '/industries/government', icon: Shield, description: 'Government solutions' },
      { name: 'Retail', href: '/industries/retail', icon: Target, description: 'Retail technology' },
      { name: 'Manufacturing', href: '/industries/manufacturing', icon: Settings, description: 'Manufacturing solutions' }
    ]
  },
  {
    name: 'Resources',
    href: '/resources',
    icon: FileText,
    children: [
      { name: 'Documentation', href: '/docs', icon: FileText, description: 'Technical documentation' },
      { name: 'Case Studies', href: '/case-studies', icon: BarChart3, description: 'Success stories' },
      { name: 'Blog', href: '/blog', icon: MessageSquare, description: 'Latest insights' },
      { name: 'API Reference', href: '/api-docs', icon: Code, description: 'API documentation' },
      { name: 'Tutorials', href: '/tutorials', icon: BookOpen, description: 'Learning resources' },
      { name: 'Guides', href: '/guides', icon: HelpCircle, description: 'Implementation guides' },
      { name: 'FAQ', href: '/faq', icon: HelpCircle, description: 'Frequently asked questions' },
      { name: 'Support', href: '/support', icon: HelpCircle, description: 'Technical support' }
    ]
  },
  {
    name: 'About',
    href: '/about',
    icon: Users,
    children: [
      { name: 'Our Team', href: '/team', icon: Users, description: 'Meet our experts' },
      { name: 'Careers', href: '/careers', icon: Award, description: 'Join our team' },
      { name: 'Talent', href: '/talent', icon: User, description: 'Find talent' },
      { name: 'Partners', href: '/partners', icon: Building, description: 'Partnership opportunities' }
    ]
  },
  {
    name: 'Contact',
    href: '/contact',
    icon: Phone
  }
];

const contactInfo = {
  phone: '+1 302 464 0950',
  email: 'kleber@ziontechgroup.com',
  address: '364 E Main St STE 1008, Middletown, DE 19709'
};

interface HeaderProps {
  onMenuClick?: () => void;
}

export default function Header({ onMenuClick }: HeaderProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [theme, setTheme] = useState('dark');
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const router = useRouter();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleTheme = () => {
    setTheme(theme === 'dark' ? 'light' : 'dark');
  };

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      router.push(`/search?q=${encodeURIComponent(searchQuery)}`);
    }
  };

  const closeMenu = () => {
    setIsMobileMenuOpen(false);
    setActiveDropdown(null);
  };

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled ? 'bg-white shadow-lg' : 'bg-transparent'
    }`}>
      {/* Top Bar */}
      <div className="bg-blue-600 text-white py-2">
        <div className="container mx-auto px-4 flex justify-between items-center text-sm">
          <div className="flex items-center space-x-4">
            <div className="flex items-center space-x-2">
              <Phone className="w-4 h-4" />
              <span>{contactInfo.phone}</span>
            </div>
            <div className="flex items-center space-x-2">
              <Mail className="w-4 h-4" />
              <span>{contactInfo.email}</span>
            </div>
          </div>
          <div className="flex items-center space-x-4">
            <button
              onClick={toggleTheme}
              className="p-1 rounded hover:bg-blue-700 transition-colors"
            >
              {theme === 'dark' ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
            </button>
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <nav className={`transition-all duration-300 ${
        isScrolled ? 'bg-white' : 'bg-white/95 backdrop-blur-sm'
      }`}>
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <Link href="/" className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg flex items-center justify-center">
                <Zap className="w-5 h-5 text-white" />
              </div>
              <span className="text-xl font-bold text-gray-900">Zion Tech Group</span>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center space-x-8">
              {navigation.map((item) => (
                <div 
                  key={item.name} 
                  className="relative group"
                  onMouseEnter={() => setActiveDropdown(item.name)}
                  onMouseLeave={() => setActiveDropdown(null)}
                >
                  <Link
                    href={item.href}
                    className="flex items-center space-x-1 text-gray-700 hover:text-blue-600 transition-colors font-medium"
                  >
                    <item.icon className="w-4 h-4" />
                    <span>{item.name}</span>
                    {item.children && <ChevronDown className="w-4 h-4" />}
                  </Link>
                  
                  {/* Dropdown Menu */}
                  {item.children && activeDropdown === item.name && (
                    <div className="absolute top-full left-0 mt-2 w-80 bg-white rounded-lg shadow-xl border border-gray-200 opacity-100 visible transition-all duration-200 z-50">
                      <div className="py-4">
                        <div className="px-4 py-2 border-b border-gray-100">
                          <h3 className="font-semibold text-gray-900">{item.name}</h3>
                        </div>
                        <div className="grid grid-cols-1 gap-1">
                          {item.children.map((child) => (
                            <Link
                              key={child.name}
                              href={child.href}
                              className="flex items-center justify-between px-4 py-3 text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition-colors group"
                            >
                              <div className="flex items-center space-x-3">
                                <child.icon className="w-4 h-4 text-gray-400 group-hover:text-blue-500" />
                                <div>
                                  <div className="font-medium">{child.name}</div>
                                  <div className="text-xs text-gray-500">{child.description}</div>
                                </div>
                              </div>
                              {child.count && (
                                <span className="text-xs text-blue-600 bg-blue-100 px-2 py-1 rounded-full">
                                  {child.count}
                                </span>
                              )}
                            </Link>
                          ))}
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </div>

            {/* Right Side Actions */}
            <div className="hidden lg:flex items-center space-x-4">
              <button
                onClick={() => setIsSearchOpen(!isSearchOpen)}
                className="p-2 text-gray-700 hover:text-blue-600 transition-colors"
              >
                <Search className="w-5 h-5" />
              </button>
              <Link
                href="/contact"
                className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors font-medium"
              >
                Get Started
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="lg:hidden p-2 text-gray-700 hover:text-blue-600 transition-colors"
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Search Bar */}
        {isSearchOpen && (
          <div className="border-t border-gray-200 bg-white">
            <div className="container mx-auto px-4 py-4">
              <form onSubmit={handleSearch} className="flex items-center space-x-2">
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Search our services..."
                  className="flex-1 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                <button
                  type="submit"
                  className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
                >
                  Search
                </button>
              </form>
            </div>
          </div>
        )}

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="lg:hidden border-t border-gray-200 bg-white">
            <div className="container mx-auto px-4 py-4">
              <div className="space-y-4">
                {navigation.map((item) => (
                  <div key={item.name}>
                    <Link
                      href={item.href}
                      className="flex items-center justify-between py-2 text-gray-700 hover:text-blue-600 transition-colors font-medium"
                      onClick={closeMenu}
                    >
                      <div className="flex items-center space-x-2">
                        <item.icon className="w-4 h-4" />
                        <span>{item.name}</span>
                      </div>
                      {item.children && <ChevronDown className="w-4 h-4" />}
                    </Link>
                    {item.children && (
                      <div className="ml-6 space-y-2 mt-2">
                        {item.children.map((child) => (
                          <Link
                            key={child.name}
                            href={child.href}
                            className="block py-1 text-sm text-gray-600 hover:text-blue-600"
                            onClick={() => setIsMobileMenuOpen(false)}
                          >
                            {child.name}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                ))}
                <div className="pt-4 border-t border-gray-200">
                  <Link
                    href="/contact"
                    className="block w-full px-4 py-3 text-center bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors font-medium"
                    onClick={closeMenu}
                  >
                    Free Consultation
                  </Link>
                </div>
              </div>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
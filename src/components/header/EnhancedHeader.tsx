import React, { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Menu, 
  X, 
  ChevronDown, 
  Search, 
  User, 
  Bell, 
  Globe, 
  Shield, 
  Zap, 
  Brain,
  Cloud,
  Cpu,
  Rocket,
  Leaf,
  Sparkles,
  Star
} from 'lucide-react';
import { Button } from '../ui/button';
// Enhanced navigation structure with new services
const navigation = [
  {
    name: 'AI & ML Services',
    href: '/ai-services',
    icon: Brain,
    description: 'Cutting-edge AI solutions',
    children: [
      { 
        name: 'AI Business Manager', 
        href: '/services/ai-autonomous-business-manager', 
        description: 'Autonomous business operations',
        featured: true,
        price: '$2,499'
      },
      { 
        name: 'AI Content Factory', 
        href: '/services/ai-content-factory-enterprise', 
        description: 'Enterprise content generation',
        price: '$899'
      },
      { 
        name: 'AI Cybersecurity', 
        href: '/services/ai-cybersecurity-sentinel', 
        description: 'AI-powered security platform',
        featured: true,
        price: '$1,899'
      },
      { 
        name: 'AI Healthcare', 
        href: '/services/ai-biomedical-research-platform', 
        description: 'Biomedical research AI',
        featured: true,
        price: '$4,999'
      },
      { 
        name: 'AI Financial Trading', 
        href: '/services/ai-financial-trading-platform', 
        description: 'Algorithmic trading platform',
        price: '$2,999'
      },
      { 
        name: 'AI Legal Assistant', 
        href: '/services/ai-legal-research-assistant', 
        description: 'Legal research automation',
        price: '$1,299'
      },
      { 
        name: 'AI Education', 
        href: '/services/ai-education-professor', 
        description: 'Personalized learning platform',
        price: '$899'
      },
      { 
        name: 'AI Manufacturing', 
        href: '/services/ai-manufacturing-optimization', 
        description: 'Manufacturing optimization suite',
        featured: true,
        price: '$2,499'
      }
    ],
  },
  {
    name: 'Cloud & DevOps',
    href: '/cloud-devops',
    icon: Cloud,
    description: 'Scalable infrastructure solutions',
    children: [
      { 
        name: 'Quantum Cloud Infrastructure', 
        href: '/services/quantum-cloud-infrastructure', 
        description: 'Next-gen quantum cloud platform',
        featured: true,
        price: '$3,999'
      },
      { 
        name: 'Autonomous DevOps', 
        href: '/services/autonomous-devops-platform', 
        description: 'Self-managing DevOps platform',
        price: '$1,299'
      },
      { 
        name: 'Cloud Migration', 
        href: '/services/cloud-migration-enterprise', 
        description: 'Enterprise cloud migration',
        price: '$15,999'
      }
    ],
  },
  {
    name: 'Emerging Tech',
    href: '/emerging-tech',
    icon: Sparkles,
    description: 'Next-generation technologies',
    children: [
      { 
        name: 'IoT Edge Computing', 
        href: '/services/iot-edge-intelligence-platform', 
        description: 'IoT edge intelligence platform',
        price: '$2,199'
      },
      { 
        name: 'Blockchain Governance', 
        href: '/services/blockchain-governance-platform', 
        description: 'AI-powered blockchain governance',
        price: '$1,699'
      },
      { 
        name: 'Space Technology', 
        href: '/services/space-tech-ai-platform', 
        description: 'Space exploration AI platform',
        featured: true,
        price: '$5,999'
      },
      { 
        name: 'Climate AI', 
        href: '/services/ai-climate-prediction-engine', 
        description: 'Climate prediction engine',
        price: '$1,799'
      }
    ],
  },
  {
    name: 'Industry Solutions',
    href: '/solutions',
    icon: Shield,
    description: 'Industry-specific solutions',
    children: [
      { 
        name: 'Healthcare Solutions', 
        href: '/solutions/healthcare', 
        description: 'AI-powered healthcare',
        price: 'Custom'
      },
      { 
        name: 'Financial Services', 
        href: '/solutions/financial', 
        description: 'Fintech innovation',
        price: 'Custom'
      },
      { 
        name: 'Manufacturing', 
        href: '/solutions/manufacturing', 
        description: 'Smart manufacturing',
        price: 'Custom'
      },
      { 
        name: 'Retail & E-commerce', 
        href: '/solutions/retail', 
        description: 'Retail intelligence',
        price: 'Custom'
      },
      { 
        name: 'Transportation', 
        href: '/solutions/transportation', 
        description: 'Logistics optimization',
        price: 'Custom'
      },
      { 
        name: 'Energy & Utilities', 
        href: '/solutions/energy', 
        description: 'Energy management',
        price: 'Custom'
      },
      { 
        name: 'Real Estate', 
        href: '/solutions/real-estate', 
        description: 'Real estate analytics',
        price: 'Custom'
      },
      { 
        name: 'Agriculture', 
        href: '/solutions/agriculture', 
        description: 'Precision farming',
        price: 'Custom'
      }
    ],
  },
  {
    name: 'Company',
    href: '/about',
    icon: Globe,
    description: 'About Zion Tech Group',
    children: [
      { name: 'About Us', href: '/about', description: 'Our story and mission' },
      { name: 'Leadership', href: '/leadership', description: 'Meet our team' },
      { name: 'Careers', href: '/careers', description: 'Join our team' },
      { name: 'News & Press', href: '/news', description: 'Latest updates' },
      { name: 'Case Studies', href: '/case-studies', description: 'Success stories' },
      { name: 'Partners', href: '/partners', description: 'Strategic partnerships' }
    ],
  },
  {
    name: 'Resources',
    href: '/resources',
    icon: Star,
    children: [
      { name: 'Blog', href: '/blog', description: 'Industry insights' },
      { name: 'Documentation', href: '/docs', description: 'Technical guides' },
      { name: 'API Reference', href: '/api', description: 'Developer resources' },
      { name: 'Help Center', href: '/help', description: 'Support & FAQs' },
      { name: 'Training', href: '/training', description: 'Learning resources' },
      { name: 'Webinars', href: '/webinars', description: 'Expert sessions' }
    ],
  },
  { 
    name: 'Contact', 
    href: '/contact',
    children: [
      { name: 'Get Quote', href: '/request-quote', description: 'Request pricing' },
      { name: 'Support', href: '/contact', description: 'Contact support' },
      { name: 'Sales', href: '/contact?type=sales', description: 'Talk to sales' },
      { name: 'Partnerships', href: '/contact?type=partnership', description: 'Partner with us' }
    ]
  },
];
export function EnhancedHeader() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [isScrolled, setIsScrolled] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const location = useLocation();
  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  // Close mobile menu when route changes
  useEffect(() => {
    setIsOpen(false);
    setActiveDropdown(null);
  }, [location]);
  const toggleDropdown = (name: string) => {
    setActiveDropdown(activeDropdown === name ? null : name);
  };
  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    // Implement search functionality
    console.log('Searching for:', searchQuery);
  };
  return (
<>
      {/* Futuristic animated background */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-br from-zion-slate via-zion-slate-dark to-black" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(34,221,210,0.1),transparent_50%)]" />
      </div>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          isScrolled
            ? 'bg-zion-slate/95 backdrop-blur-xl border-b border-zion-cyan/20 shadow-2xl shadow-zion-cyan/10'
            : 'bg-transparent'
        }`}
      >
        <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20 lg:h-24">
            {/* Logo */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              className="flex-shrink-0"
            >
              <Link to="/" className="flex items-center space-x-3 group">
                <div className="relative">
                  <div className="w-12 h-12 bg-gradient-to-br from-zion-cyan via-zion-purple to-zion-blue rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <span className="text-2xl font-bold text-white">Z</span>
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-br from-zion-cyan via-zion-purple to-zion-blue rounded-xl blur-lg opacity-50 group-hover:opacity-75 transition-opacity duration-300" />
                </div>
                <div className="hidden sm:block">
                  <span className="text-2xl font-bold bg-gradient-to-r from-zion-cyan via-zion-purple to-zion-blue bg-clip-text text-transparent">
                    ZION
                  </span>
                  <p className="text-xs text-zion-slate-light -mt-1">TECH GROUP</p>
                </div>
              </Link>
            </motion.div>
            {/* Desktop Navigation */}
            <div className="hidden lg:flex lg:items-center lg:space-x-8">
              {navigation.map((item) => (
                <div key={item.name} className="relative group">
                  <button
                    onClick={() => toggleDropdown(item.name)}
                    className="flex items-center space-x-1 px-4 py-2 text-zion-slate-light hover:text-zion-cyan transition-colors duration-200 group-hover:text-zion-cyan"
                  >
                    <item.icon className="w-4 h-4" />
                    <span className="font-medium">{item.name}</span>
                    <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${
                      activeDropdown === item.name ? 'rotate-180' : ''
                    }`} />
                  </button>
                  {/* Dropdown Menu */}
                  <AnimatePresence>
                    {activeDropdown === item.name && (
                      <motion.div
                        initial={{ opacity: 0, y: 10, scale: 0.95 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: 10, scale: 0.95 }}
                        transition={{ duration: 0.2 }}
                        className="absolute top-full left-0 mt-2 w-80 bg-zion-slate/95 backdrop-blur-xl border border-zion-cyan/20 rounded-2xl shadow-2xl shadow-zion-cyan/20 overflow-hidden"
                      >
                        <div className="p-4">
                          <div className="mb-3">
                            <h3 className="text-lg font-semibold text-zion-cyan">{item.name}</h3>
                            <p className="text-sm text-zion-slate-light">{item.description}</p>
                          </div>
                          <div className="space-y-2">
                            {item.children?.map((child) => (
                              <Link
                                key={child.name}
                                to={child.href}
                                className="flex items-center justify-between p-3 rounded-xl hover:bg-zion-cyan/10 transition-colors duration-200 group"
                              >
                                <div className="flex-1">
                                  <div className="flex items-center space-x-2">
                                    {child.featured && (
                                      <Star className="w-4 h-4 text-yellow-400 fill-current" />
                                    )}
                                    <span className="font-medium text-zion-slate-light group-hover:text-zion-cyan transition-colors duration-200">
                                      {child.name}
                                    </span>
                                  </div>
                                  <p className="text-sm text-zion-slate-light/70">{child.description}</p>
                                </div>
                                {child.price && (
                                  <span className="text-sm font-semibold text-zion-cyan">{child.price}</span>
                                )}
                              </Link>
                            ))}
                          </div>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ))}
            </div>
            {/* Search Bar */}
            <div className="hidden md:flex flex-1 max-w-md mx-8">
              <form onSubmit={handleSearch} className="relative w-full">
                <input
                  type="text"
                  placeholder="Search services, solutions..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full px-4 py-2 bg-zion-slate/50 border border-zion-cyan/20 rounded-xl text-zion-slate-light placeholder-zion-slate-light/50 focus:outline-none focus:ring-2 focus:ring-zion-cyan/50 focus:border-zion-cyan/50 transition-all duration-200"
                />
                <button
                  type="submit"
                  className="absolute right-2 top-1/2 transform -translate-y-1/2 p-1 text-zion-cyan hover:text-zion-cyan-light transition-colors duration-200"
                >
                  <Search className="w-4 h-4" />
                </button>
              </form>
            </div>
            {/* Right side actions */}
            <div className="flex items-center space-x-4">
              {/* Notifications */}
              <button className="p-2 text-zion-slate-light hover:text-zion-cyan transition-colors duration-200 relative">
                <Bell className="w-5 h-5" />
                <span className="absolute top-0 right-0 w-2 h-2 bg-zion-cyan rounded-full"></span>
              </button>
              {/* User Menu */}
              <button className="p-2 text-zion-slate-light hover:text-zion-cyan transition-colors duration-200">
                <User className="w-5 h-5" />
              </button>
              {/* CTA Button */}
              <Button
                asChild
                className="bg-gradient-to-r from-zion-cyan to-zion-purple hover:from-zion-cyan-light hover:to-zion-purple-light text-white border-0 shadow-lg shadow-zion-cyan/25 hover:shadow-xl hover:shadow-zion-cyan/40 transition-all duration-300"
              >
                <Link to="/request-quote">Get Started</Link>
              </Button>
              {/* Mobile menu button */}
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="lg:hidden p-2 text-zion-slate-light hover:text-zion-cyan transition-colors duration-200"
              >
                {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </nav>
        {/* Mobile Navigation */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="lg:hidden bg-zion-slate/95 backdrop-blur-xl border-t border-zion-cyan/20"
            >
              <div className="px-4 py-6 space-y-4">
                {/* Mobile Search */}
                <form onSubmit={handleSearch} className="relative">
                  <input
                    type="text"
                    placeholder="Search services, solutions..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="w-full px-4 py-3 bg-zion-slate/50 border border-zion-cyan/20 rounded-xl text-zion-slate-light placeholder-zion-slate-light/50 focus:outline-none focus:ring-2 focus:ring-zion-cyan/50 focus:border-zion-cyan/50 transition-all duration-200"
                  />
                  <button
                    type="submit"
                    className="absolute right-3 top-1/2 transform -translate-y-1/2 p-1 text-zion-cyan hover:text-zion-cyan-light transition-colors duration-200"
                  >
                    <Search className="w-5 h-5" />
                  </button>
                </form>
                {/* Mobile Navigation Items */}
                {navigation.map((item) => (
                  <div key={item.name} className="space-y-2">
                    <Link
                      to={item.href}
                      className="flex items-center space-x-3 p-3 text-zion-slate-light hover:text-zion-cyan transition-colors duration-200"
                      onClick={() => setIsOpen(false)}
                    >
                      <item.icon className="w-5 h-5" />
                      <span className="font-medium">{item.name}</span>
                    </Link>
                    {item.children && (
                      <div className="ml-8 space-y-1">
                        {item.children.slice(0, 3).map((child) => (
                          <Link
                            key={child.name}
                            to={child.href}
                            className="block p-2 text-sm text-zion-slate-light/70 hover:text-zion-cyan transition-colors duration-200"
                            onClick={() => setIsOpen(false)}
                          >
                            {child.name}
                          </Link>
                        ))}
                        {item.children.length > 3 && (
                          <Link
                            to={item.href}
                            className="block p-2 text-sm text-zion-cyan hover:text-zion-cyan-light transition-colors duration-200"
                            onClick={() => setIsOpen(false)}
                          >
                            View all {item.children.length} items →
                          </Link>
                        )}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </header>
</>
  );
}
export default EnhancedHeader;
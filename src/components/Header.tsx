import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Menu, 
  X, 
  ChevronDown, 
  Brain, 
  Shield, 
  Cpu, 
  Heart, 
  Rocket, 
  Sparkles,
  BarChart3,
  Network,
  Globe,
  Users,
  FileText,
  Phone,
  Mail,
  MapPin,
  Search,
  Bell,
  User,
  Settings,
  Zap,
  Atom,
  Eye,
  Activity,
  Building,
  Target,
  TrendingUp,
  Briefcase,
  Newspaper,
  DollarSign,
  MessageCircle,
  Truck,
  Workflow,
  Leaf,
  Link as LinkIcon,
  Code,
  Database,
  Server,
  Lock,
  Cloud,
  Wrench,
  Smile,
  Edit,
  Star
} from 'lucide-react';

export function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const location = useLocation();

  const navigation = [
    {
      name: 'Services',
      href: '/services',
      icon: Zap,
      dropdown: [
        { 
          name: 'AI Solutions', 
          href: '/services/ai-solutions', 
          icon: Brain,
          description: 'AI-powered business solutions',
          featured: true
        },
        { 
          name: 'Quantum Computing', 
          href: '/services/quantum-computing', 
          icon: Atom,
          description: 'Quantum AI hybrid platforms',
          new: true
        },
        { 
          name: 'Cybersecurity', 
          href: '/services/cybersecurity', 
          icon: Shield,
          description: 'AI threat detection & prevention'
        },
        { 
          name: 'Cloud & DevOps', 
          href: '/services/cloud-devops', 
          icon: Cloud,
          description: 'Automation & orchestration'
        },
        { 
          name: 'Digital Transformation', 
          href: '/services/digital-transformation', 
          icon: Rocket,
          description: 'Business process modernization'
        },
        { 
          name: 'IoT & Edge Computing', 
          href: '/services/iot-edge-computing', 
          icon: Activity,
          description: 'Real-time data processing'
        },
        { 
          name: 'Space Technology', 
          href: '/services/space-tech', 
          icon: Rocket,
          description: 'Satellite & space solutions',
          new: true
        },
        { 
          name: 'Sustainability', 
          href: '/services/sustainability', 
          icon: Leaf,
          description: 'Green IT & sustainability',
          new: true
        },
        { 
          name: 'Comprehensive Portfolio', 
          href: '/comprehensive-services', 
          icon: Globe,
          description: 'View all services',
          featured: true
        },
        { 
          name: 'Pricing', 
          href: '/pricing', 
          icon: DollarSign,
          description: 'Service pricing & packages'
        }
      ]
    },
    {
      name: 'Solutions',
      href: '/solutions',
      icon: Target,
      dropdown: [
        { 
          name: 'Enterprise Solutions', 
          href: '/solutions/enterprise', 
          icon: Building,
          description: 'Large-scale business solutions'
        },
        { 
          name: 'AI Business Intelligence', 
          href: '/solutions/ai-business-intelligence', 
          icon: Brain,
          description: 'Data-driven insights platform'
        },
        { 
          name: 'Quantum AI Platform', 
          href: '/solutions/quantum-ai-platform', 
          icon: Atom,
          description: 'Hybrid quantum-classical computing',
          new: true
        },
        { 
          name: 'Digital Twin Solutions', 
          href: '/solutions/digital-twin', 
          icon: Eye,
          description: 'Virtual asset modeling'
        },
        { 
          name: 'Zero Trust Security', 
          href: '/solutions/zero-trust-security', 
          icon: Lock,
          description: 'Advanced security framework'
        }
      ]
    },
    {
      name: 'About',
      href: '/about',
      icon: Users,
      dropdown: [
        { 
          name: 'Our Story', 
          href: '/about/story', 
          icon: FileText,
          description: 'Company history & mission'
        },
        { 
          name: 'Team', 
          href: '/about/team', 
          icon: Users,
          description: 'Meet our experts'
        },
        { 
          name: 'Careers', 
          href: '/careers', 
          icon: Briefcase,
          description: 'Join our team'
        },
        { 
          name: 'Partners', 
          href: '/partners', 
          icon: Network,
          description: 'Strategic partnerships'
        },
        { 
          name: 'Press', 
          href: '/press', 
          icon: Newspaper,
          description: 'News & announcements'
        }
      ]
    },
    {
      name: 'Resources',
      href: '/resources',
      icon: FileText,
      dropdown: [
        { 
          name: 'Blog', 
          href: '/blog', 
          icon: Newspaper,
          description: 'Latest insights & updates'
        },
        { 
          name: 'Case Studies', 
          href: '/case-studies', 
          icon: FileText,
          description: 'Success stories & results'
        },
        { 
          name: 'Research & Development', 
          href: '/research-development', 
          icon: Activity,
          description: 'Innovation & breakthroughs'
        },
        { 
          name: 'Documentation', 
          href: '/docs', 
          icon: FileText,
          description: 'Technical documentation'
        },
        { 
          name: 'API Reference', 
          href: '/api', 
          icon: Cpu,
          description: 'Developer resources'
        },
        { 
          name: 'Sitemap', 
          href: '/sitemap', 
          icon: FileText,
          description: 'Site navigation'
        },
        { 
          name: 'Support', 
          href: '/support', 
          icon: FileText,
          description: 'Help & assistance'
        },
        { 
          name: 'Training', 
          href: '/training', 
          icon: FileText,
          description: 'Learning resources'
        },
        { 
          name: 'Helpdesk', 
          href: '/help', 
          icon: FileText,
          description: 'Technical support'
        }
      ]
    },
    {
      name: 'Contact',
      href: '/contact',
      icon: Phone
    }
  ];

  const isActive = (href: string) => location.pathname === href;

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      // Implement search functionality
      console.log('Searching for:', searchQuery);
      setIsSearchOpen(false);
      setSearchQuery('');
    }
  };

  // Close mobile menu when route changes
  useEffect(() => {
    setIsOpen(false);
    setActiveDropdown(null);
  }, [location.pathname]);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-black/95 backdrop-blur-md border-b border-white/10 shadow-lg">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2 text-white hover:text-cyan-400 transition-colors focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:ring-offset-2 focus:ring-offset-black" aria-label="Zion Tech Group Home">
            <motion.div 
              className="w-8 h-8 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-lg flex items-center justify-center"
              whileHover={{ rotate: 360 }}
              transition={{ duration: 0.6 }}
            >
              <Zap className="w-5 h-5 text-white" />
            </motion.div>
            <span className="text-xl font-bold">Zion Tech Group</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            {navigation.map((item) => (
              <div key={item.name} className="relative group">
                {item.dropdown ? (
                  <div
                    className="flex items-center space-x-1 text-white hover:text-cyan-400 cursor-pointer transition-colors focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:ring-offset-2 focus:ring-offset-black rounded"
                    onMouseEnter={() => setActiveDropdown(item.name)}
                    onMouseLeave={() => setActiveDropdown(null)}
                    onFocus={() => setActiveDropdown(item.name)}
                    onBlur={() => setActiveDropdown(null)}
                    tabIndex={0}
                    role="button"
                    aria-expanded={activeDropdown === item.name}
                    aria-haspopup="true"
                  >
                    <span className={isActive(item.href) ? 'text-cyan-400' : ''}>
                      {item.name}
                    </span>
                    <ChevronDown className="w-4 h-4" />
                  </div>
                ) : (
                  <Link
                    to={item.href}
                    className={`text-white hover:text-cyan-400 transition-colors focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:ring-offset-2 focus:ring-offset-black rounded ${
                      isActive(item.href) ? 'text-cyan-400' : ''
                    }`}
                  >
                    {item.name}
                  </Link>
                )}

                {/* Enhanced Dropdown Menu */}
                {item.dropdown && activeDropdown === item.name && (
                  <motion.div 
                    className="absolute top-full left-0 mt-2 w-80 bg-gray-900/95 backdrop-blur-md border border-gray-700 rounded-lg shadow-xl"
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.2 }}
                  >
                    <div className="py-2">
                      {item.dropdown.map((subItem) => (
                        <Link
                          key={subItem.name}
                          to={subItem.href}
                          className="flex items-start space-x-3 px-4 py-3 text-gray-300 hover:text-white hover:bg-gray-800/50 transition-colors focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:ring-inset group"
                        >
                          <div className="flex-shrink-0 mt-1">
                            <subItem.icon className="w-4 h-4" />
                          </div>
                          <div className="flex-1 min-w-0">
                            <div className="flex items-center gap-2">
                              <span className="font-medium">{subItem.name}</span>
                              {subItem.featured && <Star className="w-3 h-3 text-yellow-400" />}
                              {subItem.new && <span className="px-1.5 py-0.5 bg-cyan-500 text-white text-xs font-semibold rounded-full">NEW</span>}
                            </div>
                            {subItem.description && (
                              <p className="text-xs text-gray-400 mt-1">{subItem.description}</p>
                            )}
                          </div>
                        </Link>
                      ))}
                    </div>
                  </motion.div>
                )}
              </div>
            ))}
          </div>

          {/* Right side actions */}
          <div className="flex items-center space-x-4">
            {/* Search Button */}
            <button
              onClick={() => setIsSearchOpen(!isSearchOpen)}
              className="p-2 text-gray-400 hover:text-white transition-colors focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:ring-offset-2 focus:ring-offset-black rounded"
              aria-label="Search"
            >
              <Search className="w-5 h-5" />
            </button>

            {/* Contact Info */}
            <div className="hidden md:flex items-center space-x-4 text-sm text-gray-300">
              <a href="tel:+13024640950" className="hover:text-cyan-400 transition-colors">
                +1 302 464 0950
              </a>
              <a href="mailto:kleber@ziontechgroup.com" className="hover:text-cyan-400 transition-colors">
                kleber@ziontechgroup.com
              </a>
            </div>

            {/* Mobile menu button */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="lg:hidden p-2 text-gray-400 hover:text-white transition-colors focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:ring-offset-2 focus:ring-offset-black rounded"
              aria-label="Toggle menu"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Search Bar */}
        <AnimatePresence>
          {isSearchOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.2 }}
              className="py-4 border-t border-gray-700"
            >
              <form onSubmit={handleSearch} className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <input
                  type="text"
                  placeholder="Search services, solutions, or resources..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-10 pr-4 py-3 bg-gray-800 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
                />
                <button
                  type="submit"
                  className="absolute right-3 top-1/2 transform -translate-y-1/2 text-cyan-400 hover:text-cyan-300 transition-colors"
                >
                  Search
                </button>
              </form>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.2 }}
            className="lg:hidden bg-gray-900/95 backdrop-blur-md border-t border-gray-700"
          >
            <div className="px-4 py-6 space-y-4">
              {navigation.map((item) => (
                <div key={item.name}>
                  {item.dropdown ? (
                    <div>
                      <button
                        onClick={() => setActiveDropdown(activeDropdown === item.name ? null : item.name)}
                        className="flex items-center justify-between w-full text-left text-white hover:text-cyan-400 transition-colors py-2"
                      >
                        <span className="flex items-center space-x-2">
                          <item.icon className="w-5 h-5" />
                          <span>{item.name}</span>
                        </span>
                        <ChevronDown className={`w-4 h-4 transition-transform ${activeDropdown === item.name ? 'rotate-180' : ''}`} />
                      </button>
                      
                      {activeDropdown === item.name && (
                        <div className="ml-6 mt-2 space-y-2">
                          {item.dropdown.map((subItem) => (
                            <Link
                              key={subItem.name}
                              to={subItem.href}
                              className="flex items-center space-x-3 text-gray-300 hover:text-white transition-colors py-2"
                              onClick={() => setIsOpen(false)}
                            >
                              <subItem.icon className="w-4 h-4" />
                              <span>{subItem.name}</span>
                              {subItem.featured && <Star className="w-3 h-3 text-yellow-400 ml-auto" />}
                              {subItem.new && <span className="px-1.5 py-0.5 bg-cyan-500 text-white text-xs font-semibold rounded-full ml-auto">NEW</span>}
                            </Link>
                          ))}
                        </div>
                      )}
                    </div>
                  ) : (
                    <Link
                      to={item.href}
                      className="flex items-center space-x-2 text-white hover:text-cyan-400 transition-colors py-2"
                      onClick={() => setIsOpen(false)}
                    >
                      <item.icon className="w-5 h-5" />
                      <span>{item.name}</span>
                    </Link>
                  )}
                </div>
              ))}
              
              {/* Mobile Contact Info */}
              <div className="pt-4 border-t border-gray-700 space-y-2">
                <a href="tel:+13024640950" className="flex items-center space-x-2 text-gray-300 hover:text-cyan-400 transition-colors py-2">
                  <Phone className="w-5 h-5" />
                  <span>+1 302 464 0950</span>
                </a>
                <a href="mailto:kleber@ziontechgroup.com" className="flex items-center space-x-2 text-gray-300 hover:text-cyan-400 transition-colors py-2">
                  <Mail className="w-5 h-5" />
                  <span>kleber@ziontechgroup.com</span>
                </a>
                <div className="flex items-start space-x-2 text-gray-300 py-2">
                  <MapPin className="w-5 h-5 mt-0.5" />
                  <span className="text-sm">364 E Main St STE 1008<br />Middletown DE 19709</span>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
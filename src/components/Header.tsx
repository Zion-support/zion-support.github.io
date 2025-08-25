import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import Sidebar from './Sidebar';
import { 
  Menu, 
  X, 
  ChevronDown, 
  Search, 
  Phone, 
  Mail, 
  MapPin,
  Brain,
  Users,
  Target,
  Shield,
  Zap,
  Building,
  Cpu,
  Globe,
  Rocket,
  Star,
  ArrowRight,
  Sparkles,
  Lock,
  Database,
  Network,
  Code,
  BarChart3,
  Lightbulb,
  Clock,
  Eye,
  Cloud,
  DollarSign,
  ShoppingCart,
  Heart,
  Home,
  Settings,
  Briefcase,
  BookOpen,
  MessageSquare,
  Info,
  Users as TeamIcon,
  Award,
  FileText,
  Calendar,
  HelpCircle,
  ExternalLink,
  Handshake,
  Video
} from 'lucide-react';

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [searchQuery, setSearchQuery] = useState('');
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    // Close mobile menu when route changes
    setIsMenuOpen(false);
    setActiveDropdown(null);
  }, [location]);

  const navigationItems = [
    { 
      path: '/', 
      label: 'Home', 
      icon: Home,
      description: 'Welcome to Zion Tech Group'
    },
    { 
      path: '/services', 
      label: 'Services', 
      icon: Briefcase,
      description: 'Explore our comprehensive service offerings',
      hasDropdown: true,
      dropdownItems: [
        { path: '/services-overview', label: 'Services Overview', icon: Eye, description: 'Complete service catalog' },
        { path: '/ai-solutions', label: 'AI Solutions', icon: Brain, description: 'Artificial Intelligence services' },
        { path: '/cloud-devops', label: 'Cloud & DevOps', icon: Cloud, description: 'Cloud infrastructure & automation' },
        { path: '/cybersecurity', label: 'Cybersecurity', icon: Shield, description: 'Security & compliance solutions' },
        { path: '/quantum-technology', label: 'Quantum Technology', icon: Zap, description: 'Next-gen computing solutions' },
        { path: '/micro-saas-solutions', label: 'Micro-SaaS', icon: Code, description: 'Custom software solutions' },
        { path: '/it-infrastructure', label: 'IT Infrastructure', icon: Cpu, description: 'Enterprise infrastructure' },
        { path: '/industry-solutions', label: 'Industry Solutions', icon: Building, description: 'Sector-specific solutions' }
      ]
    },
    { 
      path: '/solutions/enterprise', 
      label: 'Solutions', 
      icon: Target,
      description: 'Industry-specific solutions',
      hasDropdown: true,
      dropdownItems: [
        { path: '/solutions/enterprise', label: 'Enterprise Solutions', icon: Building, description: 'Large-scale business solutions' },
        { path: '/solutions/healthcare', label: 'Healthcare Solutions', icon: Heart, description: 'Medical technology solutions' },
        { path: '/digital-transformation', label: 'Digital Transformation', icon: Rocket, description: 'Business modernization' },
        { path: '/emerging-tech', label: 'Emerging Tech', icon: Sparkles, description: 'Cutting-edge technology' }
      ]
    },
    { 
      path: '/pricing', 
      label: 'Pricing', 
      icon: DollarSign,
      description: 'Transparent pricing plans'
    },
    { 
      path: '/about', 
      label: 'About', 
      icon: Info,
      description: 'Learn about our company',
      hasDropdown: true,
      dropdownItems: [
        { path: '/about', label: 'About Us', icon: Info, description: 'Company overview' },
        { path: '/mission', label: 'Mission', icon: Target, description: 'Our mission & values' },
        { path: '/team', label: 'Team', icon: TeamIcon, description: 'Meet our experts' },
        { path: '/leadership', label: 'Leadership', icon: Award, description: 'Executive team' },
        { path: '/partners', label: 'Partners', icon: Handshake, description: 'Strategic partnerships' }
      ]
    },
    { 
      path: '/resources', 
      label: 'Resources', 
      icon: BookOpen,
      description: 'Knowledge & insights',
      hasDropdown: true,
      dropdownItems: [
        { path: '/blog', label: 'Blog', icon: FileText, description: 'Latest insights & news' },
        { path: '/news', label: 'News', icon: Calendar, description: 'Company updates' },
        { path: '/webinars', label: 'Webinars', icon: Video, description: 'Educational content' },
        { path: '/white-papers', label: 'White Papers', icon: FileText, description: 'In-depth research' },
        { path: '/case-studies', label: 'Case Studies', icon: BarChart3, description: 'Success stories' }
      ]
    },
    { 
      path: '/careers', 
      label: 'Careers', 
      icon: Rocket,
      description: 'Join our team'
    },
    { 
      path: '/contact', 
      label: 'Contact', 
      icon: MessageSquare,
      description: 'Get in touch with us'
    }
  ];

  const quickActions = [
    { path: '/ai-matcher', label: 'AI Matcher', icon: Brain, description: 'Find your perfect AI solution' },
    { path: '/talent-directory', label: 'Talent', icon: Users, description: 'Expert professionals' },
    { path: '/marketplace', label: 'Marketplace', icon: ShoppingCart, description: 'Technology marketplace' },
    { path: '/help', label: 'Help Center', icon: HelpCircle, description: 'Support & documentation' }
  ];

  const handleDropdownToggle = (label: string) => {
    setActiveDropdown(activeDropdown === label ? null : label);
  };

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    // Implement search functionality
    console.log('Searching for:', searchQuery);
  };

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled 
        ? 'bg-black/90 backdrop-blur-md border-b border-cyan-500/20 shadow-2xl' 
        : 'bg-transparent'
    }`}>
      {/* Animated Background */}
      <div className="absolute inset-0 bg-gradient-to-r from-black via-gray-900 to-blue-900 opacity-90"></div>
      <div className="absolute inset-0 cyber-grid opacity-10"></div>
      
      {/* Matrix Rain Effect */}
      <div className="matrix-rain opacity-20"></div>
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <div className="flex items-center space-x-4">
            <Link to="/" className="flex items-center space-x-3 group">
              <div className="relative">
                <div className="w-12 h-12 bg-gradient-to-br from-cyan-500 to-purple-600 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <Zap className="w-6 h-6 text-white" />
                </div>
                <div className="absolute inset-0 w-12 h-12 bg-gradient-to-br from-cyan-500 to-purple-600 rounded-lg opacity-50 blur-lg group-hover:opacity-75 transition-opacity duration-300"></div>
              </div>
              <div className="hidden sm:block">
                <h1 className="text-2xl font-bold text-white neon-glow-cyan">
                  Zion Tech Group
                </h1>
                <p className="text-xs text-cyan-400 font-mono">Innovation • Technology • Future</p>
              </div>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            {navigationItems.map((item) => (
              <div key={item.path} className="relative group">
                {item.hasDropdown ? (
                  <div className="relative">
                    <button
                      onClick={() => handleDropdownToggle(item.label)}
                      className="flex items-center space-x-2 text-gray-300 hover:text-cyan-400 transition-colors duration-200 py-2 px-3 rounded-lg hover:bg-cyan-500/10 group"
                    >
                      <item.icon className="w-4 h-4" />
                      <span className="font-medium">{item.label}</span>
                      <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${
                        activeDropdown === item.label ? 'rotate-180' : ''
                      }`} />
                    </button>
                    
                    {/* Dropdown Menu */}
                    {activeDropdown === item.label && (
                      <div className="absolute top-full left-0 mt-2 w-80 bg-black/95 backdrop-blur-xl border border-cyan-500/20 rounded-xl shadow-2xl overflow-hidden">
                        <div className="p-4">
                          <div className="grid grid-cols-1 gap-2">
                            {item.dropdownItems?.map((dropdownItem) => (
                              <Link
                                key={dropdownItem.path}
                                to={dropdownItem.path}
                                className="flex items-center space-x-3 p-3 rounded-lg hover:bg-cyan-500/10 transition-colors duration-200 group"
                                onClick={() => setActiveDropdown(null)}
                              >
                                <dropdownItem.icon className="w-5 h-5 text-cyan-400 group-hover:text-cyan-300" />
                                <div className="flex-1">
                                  <div className="text-white font-medium group-hover:text-cyan-300">
                                    {dropdownItem.label}
                                  </div>
                                  <div className="text-sm text-gray-400 group-hover:text-gray-300">
                                    {dropdownItem.description}
                                  </div>
                                </div>
                                <ArrowRight className="w-4 h-4 text-gray-500 group-hover:text-cyan-400 transition-colors duration-200" />
                              </Link>
                            ))}
                          </div>
                        </div>
                      </div>
                    )}
                  </div>
                ) : (
                  <Link
                    to={item.path}
                    className="flex items-center space-x-2 text-gray-300 hover:text-cyan-400 transition-colors duration-200 py-2 px-3 rounded-lg hover:bg-cyan-500/10 group"
                  >
                    <item.icon className="w-4 h-4" />
                    <span className="font-medium">{item.label}</span>
                  </Link>
                )}
              </div>
            ))}
          </nav>

          {/* Right Section */}
          <div className="flex items-center space-x-4">
            {/* Search */}
            <form onSubmit={handleSearch} className="hidden md:flex relative">
              <input
                type="text"
                placeholder="Search services..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-64 px-4 py-2 bg-black/50 border border-cyan-500/30 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-cyan-500 focus:ring-2 focus:ring-cyan-500/20 backdrop-blur-sm"
              />
              <button
                type="submit"
                className="absolute right-2 top-1/2 transform -translate-y-1/2 text-cyan-400 hover:text-cyan-300 transition-colors duration-200"
              >
                <Search className="w-5 h-5" />
              </button>
            </form>

            {/* Quick Actions */}
            <div className="hidden lg:flex items-center space-x-2">
              {quickActions.slice(0, 2).map((action) => (
                <Link
                  key={action.path}
                  to={action.path}
                  className="p-2 text-gray-400 hover:text-cyan-400 hover:bg-cyan-500/10 rounded-lg transition-all duration-200 group relative"
                  title={action.description}
                >
                  <action.icon className="w-5 h-5" />
                  <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 px-2 py-1 bg-black/90 text-white text-xs rounded opacity-0 group-hover:opacity-100 transition-opacity duration-200 whitespace-nowrap">
                    {action.label}
                  </div>
                </Link>
              ))}
            </div>

            {/* Contact Info */}
            <div className="hidden xl:flex items-center space-x-4 text-sm">
              <a
                href="tel:+13024640950"
                className="flex items-center space-x-2 text-gray-400 hover:text-cyan-400 transition-colors duration-200 group"
              >
                <Phone className="w-4 h-4 group-hover:scale-110 transition-transform duration-200" />
                <span className="hidden 2xl:block">+1 302 464 0950</span>
              </a>
              <a
                href="mailto:kleber@ziontechgroup.com"
                className="flex items-center space-x-2 text-gray-400 hover:text-cyan-400 transition-colors duration-200 group"
              >
                <Mail className="w-4 h-4 group-hover:scale-110 transition-transform duration-200" />
                <span className="hidden 2xl:block">kleber@ziontechgroup.com</span>
              </a>
            </div>

            {/* CTA Button */}
            <Link
              to="/contact"
              className="hidden lg:inline-flex items-center space-x-2 bg-gradient-to-r from-cyan-500 to-purple-600 hover:from-cyan-600 hover:to-purple-700 text-white px-6 py-2 rounded-lg font-medium transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-cyan-500/25"
            >
              <MessageSquare className="w-4 h-4" />
              <span>Get Started</span>
            </Link>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsSidebarOpen(true)}
              className="lg:hidden p-2 text-gray-400 hover:text-cyan-400 hover:bg-cyan-500/10 rounded-lg transition-colors duration-200"
            >
              <Menu className="w-6 h-6" />
            </button>
          </div>
        </div>
      </div>

      {/* Sidebar */}
      <Sidebar isOpen={isSidebarOpen} onClose={() => setIsSidebarOpen(false)} />
    </header>
  );
}

export default Header;

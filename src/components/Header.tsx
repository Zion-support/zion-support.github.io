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
  Layers,
  Network,
  Database,
  Cloud,
  Lock,
  BarChart3,
  Palette,
  Code,
  Smartphone,
  Monitor,
  Server
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

  const navigationItems = [
    { 
      path: '/', 
      label: 'Home', 
      icon: '🏠',
      description: 'Welcome to Zion Tech Group'
    },
    { 
      path: '/services', 
      label: 'Services', 
      icon: '🤖',
      description: 'Explore our comprehensive service offerings',
      hasDropdown: true
    },
    { 
      path: '/solutions/enterprise', 
      label: 'Solutions', 
      icon: '💼',
      description: 'Industry-specific solutions',
      hasDropdown: true
    },
    { 
      path: '/pricing', 
      label: 'Pricing', 
      icon: '💰',
      description: 'Transparent pricing plans'
    },
    { 
      path: '/about', 
      label: 'About', 
      icon: 'ℹ️',
      description: 'Learn about our company'
    },
    { 
      path: '/careers', 
      label: 'Careers', 
      icon: '🚀',
      description: 'Join our team'
    },
    { 
      path: '/blog', 
      label: 'Blog', 
      icon: '📝',
      description: 'Latest insights and news'
    },
    { 
      path: '/contact', 
      label: 'Contact', 
      icon: '📞',
      description: 'Get in touch with us'
    }
  ];

  const serviceCategories = [
    {
      title: 'AI & Machine Learning',
      icon: Brain,
      description: 'Intelligent solutions powered by artificial intelligence',
      color: 'from-cyan-500 to-blue-600',
      services: [
        { name: 'AI Business Intelligence', path: '/services/ai-business-intelligence', description: 'Advanced analytics and insights', price: '$299-1,200/month' },
        { name: 'AI Customer Service', path: '/services/ai-customer-service', description: 'Automated support solutions', price: '$199-800/month' },
        { name: 'AI Marketing Automation', path: '/services/ai-marketing', description: 'Smart marketing optimization', price: '$399-1,200/month' },
        { name: 'AI Healthcare Analytics', path: '/services/ai-healthcare', description: 'Patient care optimization', price: '$799-2,500/month' },
        { name: 'AI Financial Analytics', path: '/services/ai-financial', description: 'Risk assessment and insights', price: '$649-1,800/month' },
        { name: 'AI Manufacturing', path: '/services/ai-manufacturing', description: 'Smart production systems', price: '$749-2,200/month' }
      ]
    },
    {
      title: 'Cybersecurity & Quantum',
      icon: Shield,
      description: 'Next-generation security solutions',
      color: 'from-purple-500 to-pink-600',
      services: [
        { name: 'Quantum-Ready Security', path: '/services/quantum-cybersecurity', description: 'Future-proof protection', price: '$899-2,500/month' },
        { name: 'AI Threat Detection', path: '/services/ai-threat-detection', description: 'Intelligent security monitoring', price: '$599-1,800/month' },
        { name: 'Zero Trust Architecture', path: '/services/zero-trust', description: 'Advanced security framework', price: '$699-2,000/month' },
        { name: 'Compliance Automation', path: '/services/compliance', description: 'Regulatory compliance tools', price: '$449-1,200/month' }
      ]
    },
    {
      title: 'Emerging Technology',
      icon: Zap,
      description: 'Cutting-edge technologies for tomorrow',
      color: 'from-green-500 to-emerald-600',
      services: [
        { name: 'Quantum Computing', path: '/services/quantum-computing', description: 'Next-generation computing', price: '$2,499-6,000/month' },
        { name: 'Neuromorphic Computing', path: '/services/neuromorphic', description: 'Brain-inspired AI', price: '$1,499-3,500/month' },
        { name: 'Digital Twins', path: '/services/digital-twins', description: 'Virtual asset replicas', price: '$799-2,200/month' },
        { name: 'Blockchain DeFi', path: '/services/blockchain-defi', description: 'Decentralized finance', price: '$399-1,200/month' },
        { name: '5G Optimization', path: '/services/5g-optimization', description: 'Network performance', price: '$699-2,000/month' },
        { name: 'Space Technology', path: '/services/space-technology', description: 'Satellite and space solutions', price: '$1,999-5,000/month' }
      ]
    },
    {
      title: 'Micro SAAS Solutions',
      icon: Cpu,
      description: 'Scalable software solutions for every business',
      color: 'from-orange-500 to-red-600',
      services: [
        { name: 'Custom SAAS Development', path: '/services/custom-saas', description: 'Tailored software solutions', price: '$500-2,000/month' },
        { name: 'Multi-tenant Architecture', path: '/services/multi-tenant', description: 'Efficient resource sharing', price: '$400-1,500/month' },
        { name: 'Subscription Management', path: '/services/subscription-management', description: 'Billing and renewal systems', price: '$300-1,000/month' },
        { name: 'API Development', path: '/services/api-development', description: 'Integration solutions', price: '$600-1,800/month' }
      ]
    },
    {
      title: 'Industry Solutions',
      icon: Building,
      description: 'Specialized solutions for your industry',
      color: 'from-indigo-500 to-purple-600',
      services: [
        { name: 'Healthcare Technology', path: '/solutions/healthcare', description: 'Medical innovation solutions', price: '$800-3,000/month' },
        { name: 'Financial Services', path: '/solutions/financial', description: 'Fintech and banking solutions', price: '$700-2,500/month' },
        { name: 'Manufacturing Intelligence', path: '/solutions/manufacturing', description: 'Smart manufacturing systems', price: '$900-3,500/month' },
        { name: 'Retail Technology', path: '/solutions/retail', description: 'Digital retail transformation', price: '$600-2,000/month' },
        { name: 'Government Solutions', path: '/solutions/government', description: 'Public sector innovation', price: '$1,000-4,000/month' },
        { name: 'Education Technology', path: '/solutions/education', description: 'Learning innovation platforms', price: '$500-1,800/month' }
      ]
    }
  ];

  const contactInfo = {
    phone: '+1 302 464 0950',
    email: 'kleber@ziontechgroup.com',
    address: '364 E Main St STE 1008, Middletown DE 19709',
    website: 'https://ziontechgroup.com'
  };

  const handleServiceSearch = (query: string) => {
    setSearchQuery(query);
    // Implement search functionality
  };

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled 
        ? 'bg-black/90 backdrop-blur-xl border-b border-zion-cyan/20 shadow-2xl shadow-zion-cyan/10' 
        : 'bg-gradient-to-r from-zion-blue-dark/95 via-zion-blue/95 to-zion-purple/95 backdrop-blur-sm'
    }`}>
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 left-0 w-32 h-32 bg-zion-cyan/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute top-0 right-0 w-40 h-40 bg-zion-purple/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
        <div className="absolute bottom-0 left-1/2 w-24 h-24 bg-zion-cyan/10 rounded-full blur-2xl animate-pulse" style={{ animationDelay: '2s' }}></div>
      </div>

      <div className="relative z-10">
        {/* Top contact bar */}
        <div className="bg-zion-blue-dark/80 border-b border-zion-cyan/20">
          <div className="container mx-auto px-4 py-2">
            <div className="flex flex-wrap items-center justify-between text-sm text-zion-slate-light">
              <div className="flex items-center space-x-6">
                <a href={`tel:${contactInfo.phone}`} className="flex items-center space-x-2 hover:text-zion-cyan transition-colors">
                  <Phone className="w-4 h-4" />
                  <span>{contactInfo.phone}</span>
                </a>
                <a href={`mailto:${contactInfo.email}`} className="flex items-center space-x-2 hover:text-zion-cyan transition-colors">
                  <Mail className="w-4 h-4" />
                  <span>{contactInfo.email}</span>
                </a>
              </div>
              <div className="flex items-center space-x-4">
                <span className="flex items-center space-x-2">
                  <MapPin className="w-4 h-4" />
                  <span className="hidden md:inline">{contactInfo.address}</span>
                  <span className="md:hidden">Middletown, DE</span>
                </span>
                <div className="flex items-center space-x-2">
                  <Sparkles className="w-4 h-4 text-zion-cyan animate-pulse" />
                  <span className="text-zion-cyan font-medium">Innovation Hub</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Main navigation */}
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <Link to="/" className="flex items-center space-x-3 group">
              <div className="relative">
                <div className="w-12 h-12 bg-gradient-to-br from-zion-cyan to-zion-purple rounded-xl flex items-center justify-center shadow-lg shadow-zion-cyan/25 group-hover:shadow-zion-cyan/40 transition-all duration-300">
                  <Zap className="w-6 h-6 text-white" />
                </div>
                <div className="absolute inset-0 w-12 h-12 bg-gradient-to-br from-zion-cyan to-zion-purple rounded-xl opacity-20 blur-xl group-hover:opacity-40 transition-all duration-300"></div>
              </div>
              <div className="hidden md:block">
                <h1 className="text-2xl font-bold bg-gradient-to-r from-zion-cyan to-zion-purple bg-clip-text text-transparent">
                  Zion Tech Group
                </h1>
                <p className="text-xs text-zion-slate-light">Future-Ready Solutions</p>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center space-x-8">
              {navigationItems.map((item) => (
                <div key={item.path} className="relative group">
                  {item.hasDropdown ? (
                    <button
                      className="flex items-center space-x-2 text-zion-slate-light hover:text-white transition-colors duration-200 py-2 px-3 rounded-lg hover:bg-white/10"
                      onMouseEnter={() => setActiveDropdown(item.path)}
                      onMouseLeave={() => setActiveDropdown(null)}
                    >
                      <span>{item.icon}</span>
                      <span>{item.label}</span>
                      <ChevronDown className="w-4 h-4 transition-transform group-hover:rotate-180" />
                    </button>
                  ) : (
                    <Link
                      to={item.path}
                      className="flex items-center space-x-2 text-zion-slate-light hover:text-white transition-colors duration-200 py-2 px-3 rounded-lg hover:bg-white/10"
                    >
                      <span>{item.icon}</span>
                      <span>{item.label}</span>
                    </Link>
                  )}

                  {/* Dropdown Menu */}
                  {item.hasDropdown && activeDropdown === item.path && (
                    <div className="absolute top-full left-0 mt-2 w-96 bg-black/95 backdrop-blur-xl border border-zion-cyan/20 rounded-xl shadow-2xl shadow-zion-cyan/20 z-50">
                      <div className="p-6">
                        <div className="grid grid-cols-1 gap-4">
                          {serviceCategories.map((category) => (
                            <div key={category.title} className="group">
                              <div className="flex items-center space-x-3 p-3 rounded-lg hover:bg-zion-cyan/10 transition-colors">
                                <div className={`w-10 h-10 bg-gradient-to-br ${category.color} rounded-lg flex items-center justify-center`}>
                                  <category.icon className="w-5 h-5 text-white" />
                                </div>
                                <div className="flex-1">
                                  <h3 className="font-semibold text-white group-hover:text-zion-cyan transition-colors">
                                    {category.title}
                                  </h3>
                                  <p className="text-sm text-zion-slate-light">{category.description}</p>
                                </div>
                                <ArrowRight className="w-4 h-4 text-zion-slate-light group-hover:text-zion-cyan transition-colors" />
                              </div>
                            </div>
                          ))}
                        </div>
                        <div className="mt-4 pt-4 border-t border-zion-cyan/20">
                          <Link
                            to="/services"
                            className="flex items-center justify-center space-x-2 w-full py-3 px-4 bg-gradient-to-r from-zion-cyan to-zion-purple text-white rounded-lg hover:from-zion-cyan-light hover:to-zion-purple-light transition-all duration-200"
                          >
                            <span>View All Services</span>
                            <ArrowRight className="w-4 h-4" />
                          </Link>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </nav>

            {/* Search and CTA */}
            <div className="hidden lg:flex items-center space-x-4">
              {/* Search */}
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-zion-slate-light" />
                <input
                  type="text"
                  placeholder="Search services..."
                  value={searchQuery}
                  onChange={(e) => handleServiceSearch(e.target.value)}
                  className="w-64 pl-10 pr-4 py-2 bg-white/10 border border-zion-cyan/20 rounded-lg text-white placeholder-zion-slate-light focus:outline-none focus:border-zion-cyan focus:bg-white/20 transition-all duration-200"
                />
              </div>

              {/* CTA Buttons */}
              <Link
                to="/contact"
                className="px-6 py-2 bg-zion-cyan hover:bg-zion-cyan-light text-white rounded-lg font-semibold transition-colors duration-200 shadow-lg shadow-zion-cyan/25 hover:shadow-zion-cyan/40"
              >
                Get Started
              </Link>
              <Link
                to="/pricing"
                className="px-6 py-2 border-2 border-zion-cyan text-zion-cyan hover:bg-zion-cyan hover:text-white rounded-lg font-semibold transition-all duration-200"
              >
                View Pricing
              </Link>
            </div>

            {/* Mobile menu button */}
            <button
              onClick={() => setIsSidebarOpen(true)}
              className="lg:hidden p-2 text-zion-slate-light hover:text-white transition-colors"
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

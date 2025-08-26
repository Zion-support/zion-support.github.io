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
  Briefcase,
  Code,
  Database,
  Network,
  Cloud,
  Lock,
  BarChart3,
  Palette,
  Smartphone,
  Server
} from 'lucide-react';

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
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
      description: 'AI-Powered Business Transformation'
    },
    { 
      path: '/services', 
      label: 'Services', 
      icon: '🤖',
      description: 'Cutting-edge AI & technology solutions',
      hasDropdown: true
    },
    { 
      path: '/solutions/enterprise', 
      label: 'Solutions', 
      icon: '💼',
      description: 'Industry-leading enterprise solutions',
      hasDropdown: true
    },
    { 
      path: '/pricing', 
      label: 'Pricing', 
      icon: '💰',
      description: 'Competitive, transparent pricing'
    },
    { 
      path: '/about', 
      label: 'About', 
      icon: 'ℹ️',
      description: 'Innovation leaders in technology'
    },
    { 
      path: '/careers', 
      label: 'Careers', 
      icon: '🚀',
      description: 'Join the future of technology'
    },
    { 
      path: '/blog', 
      label: 'Blog', 
      icon: '📝',
      description: 'Insights on AI & emerging tech'
    },
    { 
      path: '/contact', 
      label: 'Contact', 
      icon: '📞',
      description: 'Let\'s transform your business'
    }
  ];

  const serviceCategories = [
    {
      title: 'AI & Machine Learning',
      icon: Brain,
      description: 'Revolutionary AI solutions that transform business operations',
      services: [
        { name: 'AI Autonomous Systems', path: '/services/ai-autonomous-systems', description: 'Self-managing AI that runs your business' },
        { name: 'AI Research Assistant', path: '/ai-autonomous-research-assistant', description: 'AI-powered research automation & insights' },
        { name: 'AI Business Intelligence', path: '/services/ai-business-intelligence', description: 'Predictive analytics & strategic insights' },
        { name: 'AI Marketing Automation', path: '/services/ai-marketing-automation', description: 'Intelligent marketing optimization' },
        { name: 'AI HR & Recruitment', path: '/services/ai-hr-recruitment', description: 'Smart talent acquisition & management' },
        { name: 'AI Legal Tech', path: '/services/ai-legal-tech', description: 'Automated legal processes & compliance' },
        { name: 'AI Healthcare Analytics', path: '/services/ai-healthcare-analytics', description: 'Patient care optimization & insights' }
      ]
    },
    {
      title: 'Quantum Technology',
      icon: Brain,
      description: 'Next-generation quantum computing & security solutions',
      services: [
        { name: 'Quantum Neural Networks', path: '/quantum-neural-network-platform', description: 'Quantum-powered AI & neural networks' },
        { name: 'Quantum Computing', path: '/services/quantum-technology', description: 'Enterprise quantum computing platforms' },
        { name: 'Quantum-Safe Security', path: '/services/quantum-security', description: 'Future-proof quantum-resistant security' }
      ]
    },
    {
      title: 'Business Operations',
      icon: Building,
      description: 'Autonomous business process automation & optimization',
      services: [
        { name: 'Autonomous Business Platform', path: '/autonomous-business-operations-platform', description: 'Self-operating business systems' },
        { name: 'AI Asset Management', path: '/ai-powered-it-asset-management', description: 'Intelligent IT asset management & optimization' },
        { name: 'Business Intelligence', path: '/services/ai-business-intelligence', description: 'Advanced business analytics & insights' }
      ]
    },
    {
      title: 'Cybersecurity',
      icon: Shield,
      description: 'Military-grade security & compliance solutions',
      services: [
        { name: 'Cybersecurity Services', path: '/services/cybersecurity', description: 'Complete enterprise security solutions' },
        { name: 'SOC2 Compliance Automation', path: '/soc2-compliance-automation', description: 'Automated compliance management' },
        { name: 'Security Assessment', path: '/services/security-assessment', description: 'Comprehensive security audit & testing' },
        { name: 'Compliance & Audit', path: '/services/compliance-audit', description: 'Regulatory compliance & audit support' },
        { name: 'Threat Detection', path: '/services/threat-detection', description: 'AI-powered real-time security monitoring' }
      ]
    },
    {
      title: 'Cloud & Infrastructure',
      icon: Cpu,
      description: 'Scalable cloud solutions and infrastructure management',
      services: [
        { name: 'Cloud DevOps', path: '/cloud-devops', description: 'Cloud development and operations' },
        { name: 'IT Infrastructure', path: '/services/it-infrastructure', description: 'Complete IT infrastructure solutions' },
        { name: '5G Enterprise Solutions', path: '/5g-enterprise-solutions', description: 'High-speed 5G connectivity' },
        { name: 'Cloud Migration', path: '/services/cloud-migration', description: 'Seamless cloud transition' },
        { name: 'Network Infrastructure', path: '/services/network-infrastructure', description: 'Robust network solutions' },
        { name: 'Managed IT Services', path: '/services/managed-it-services', description: '24/7 IT support' },
        { name: 'DevOps Automation', path: '/services/devops-automation', description: 'Streamlined development' }
      ]
    },
    {
      title: 'Emerging Technologies',
      icon: Rocket,
      description: 'Cutting-edge solutions for tomorrow\'s challenges',
      services: [
        { name: 'Blockchain Solutions', path: '/services/blockchain-solutions', description: 'Decentralized applications' },
        { name: 'IoT Platforms', path: '/services/iot-platforms', description: 'Connected device management' },
        { name: 'Quantum Computing', path: '/services/quantum-computing', description: 'Next-generation computing' },
        { name: 'AR/VR Solutions', path: '/services/ar-vr-solutions', description: 'Immersive experiences' }
      ]
    },
    {
      title: 'Industry Solutions',
      icon: Building,
      description: 'Tailored solutions for specific industries',
      services: [
        { name: 'Healthcare Technology', path: '/solutions/healthcare', description: 'Medical innovation' },
        { name: 'Financial Services', path: '/solutions/financial', description: 'Fintech solutions' },
        { name: 'Manufacturing Intelligence', path: '/solutions/manufacturing', description: 'Smart manufacturing' },
        { name: 'Retail Technology', path: '/solutions/retail', description: 'Digital retail transformation' }
      ]
    }
  ];

  const solutionCategories = [
    {
      title: 'Enterprise Solutions',
      icon: Building,
      description: 'Large-scale business transformation',
      solutions: [
        { name: 'Digital Transformation', path: '/digital-transformation', description: 'Complete business modernization' },
        { name: 'Enterprise AI', path: '/solutions/enterprise', description: 'AI-powered enterprise solutions' },
        { name: 'Data Analytics', path: '/services/data-analytics', description: 'Business intelligence platform' }
      ]
    },
    {
      title: 'SMB Solutions',
      icon: Users,
      description: 'Scalable solutions for growing businesses',
      solutions: [
        { name: 'Micro SAAS', path: '/services/micro-saas-solutions', description: 'Custom software solutions' },
        { name: 'Cloud Migration', path: '/cloud-devops', description: 'Affordable cloud solutions' },
        { name: 'IT Support', path: '/services/it-support', description: 'Managed IT services' }
      ]
    },
    {
      title: 'Specialized Solutions',
      icon: Target,
      description: 'Industry-specific expertise',
      solutions: [
        { name: 'Healthcare Solutions', path: '/solutions/healthcare', description: 'Medical technology innovation' },
        { name: 'Financial Solutions', path: '/solutions/financial', description: 'Fintech and banking solutions' },
        { name: 'Manufacturing Solutions', path: '/solutions/manufacturing', description: 'Industry 4.0 transformation' },
        { name: 'Retail Solutions', path: '/solutions/retail', description: 'Digital commerce solutions' },
        { name: 'Government Solutions', path: '/solutions/government', description: 'Public sector technology' }
      ]
    }
  ];

  const toggleDropdown = (category: string) => {
    setActiveDropdown(activeDropdown === category ? null : category);
  };

  const closeDropdowns = () => {
    setActiveDropdown(null);
  };

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled 
        ? 'bg-black/95 backdrop-blur-md border-b border-gray-800' 
        : 'bg-black/80 backdrop-blur-sm'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link to="/" className="flex items-center space-x-2">
              <div className="w-10 h-10 bg-gradient-to-br from-cyan-500 to-purple-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-xl">Z</span>
              </div>
              <span className="text-white font-bold text-xl hidden sm:block">Zion Tech Group</span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex space-x-8">
            {navigationItems.map((item) => (
              <div key={item.path} className="relative">
                {item.hasDropdown ? (
                  <div className="relative">
                    <button
                      onClick={() => toggleDropdown(item.label.toLowerCase())}
                      onMouseEnter={() => setActiveDropdown(item.label.toLowerCase())}
                      className="flex items-center space-x-1 text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200"
                    >
                      <span>{item.icon}</span>
                      <span>{item.label}</span>
                      <ChevronDown className="w-4 h-4" />
                    </button>
                    
                    {/* Services Dropdown */}
                    {activeDropdown === 'services' && item.label === 'Services' && (
                      <div 
                        className="absolute top-full left-0 mt-2 w-screen max-w-6xl bg-black/95 backdrop-blur-md border border-gray-800 rounded-lg shadow-2xl p-6"
                        onMouseLeave={closeDropdowns}
                      >
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                          {serviceCategories.map((category) => (
                            <div key={category.title} className="space-y-3">
                              <div className="flex items-center space-x-2">
                                <category.icon className="w-5 h-5 text-cyan-500" />
                                <h3 className="text-white font-semibold text-sm">{category.title}</h3>
                              </div>
                              <p className="text-gray-400 text-xs">{category.description}</p>
                              <div className="space-y-2">
                                {category.services.map((service) => (
                                  <Link
                                    key={service.name}
                                    to={service.path}
                                    className="block text-gray-300 hover:text-cyan-400 text-xs transition-colors duration-200"
                                  >
                                    {service.name}
                                  </Link>
                                ))}
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                    )}

                    {/* Solutions Dropdown */}
                    {activeDropdown === 'solutions' && item.label === 'Solutions' && (
                      <div 
                        className="absolute top-full left-0 mt-2 w-screen max-w-4xl bg-black/95 backdrop-blur-md border border-gray-800 rounded-lg shadow-2xl p-6"
                        onMouseLeave={closeDropdowns}
                      >
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                          {solutionCategories.map((category) => (
                            <div key={category.title} className="space-y-3">
                              <div className="flex items-center space-x-2">
                                <category.icon className="w-5 h-5 text-cyan-500" />
                                <h3 className="text-white font-semibold text-sm">{category.title}</h3>
                              </div>
                              <p className="text-gray-400 text-xs">{category.description}</p>
                              <div className="space-y-2">
                                {category.solutions.map((solution) => (
                                  <Link
                                    key={solution.name}
                                    to={solution.path}
                                    className="block text-gray-300 hover:text-cyan-400 text-xs transition-colors duration-200"
                                  >
                                    {solution.name}
                                  </Link>
                                ))}
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                ) : (
                  <Link
                    to={item.path}
                    className="flex items-center space-x-1 text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200"
                  >
                    <span>{item.icon}</span>
                    <span>{item.label}</span>
                  </Link>
                )}
              </div>
            ))}
          </nav>

          {/* Right side actions */}
          <div className="flex items-center space-x-4">
            {/* Search */}
            <button className="text-gray-300 hover:text-white p-2 rounded-md transition-colors duration-200">
              <Search className="w-5 h-5" />
            </button>

            {/* Contact Info */}
            <div className="hidden md:flex items-center space-x-4 text-sm">
              <a 
                href="tel:+13024640950" 
                className="text-gray-300 hover:text-cyan-400 transition-colors duration-200 flex items-center space-x-1"
              >
                <Phone className="w-4 h-4" />
                <span>+1 (302) 464-0950</span>
              </a>
              <a 
                href="mailto:kleber@ziontechgroup.com" 
                className="text-gray-300 hover:text-cyan-400 transition-colors duration-200 flex items-center space-x-1"
              >
                <Mail className="w-4 h-4" />
                <span>kleber@ziontechgroup.com</span>
              </a>
            </div>

            {/* CTA Button */}
            <Link
              to="/contact"
              className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-4 py-2 rounded-lg text-sm font-medium hover:from-cyan-600 hover:to-purple-700 transition-all duration-200 transform hover:scale-105"
            >
              Get Started
            </Link>

            {/* Mobile menu button */}
            <button
              onClick={() => setIsSidebarOpen(true)}
              className="lg:hidden text-gray-300 hover:text-white p-2 rounded-md transition-colors duration-200"
            >
              <Menu className="w-6 h-6" />
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Sidebar */}
      <Sidebar isOpen={isSidebarOpen} onClose={() => setIsSidebarOpen(false)} />
    </header>
  );
}

export default Header;

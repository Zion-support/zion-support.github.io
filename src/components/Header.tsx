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
  Palette,
  Leaf,
  Truck,
  TestTube,
  CheckCircle,
  Car
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
      path: '/case-studies', 
      label: 'Case Studies', 
      icon: '📊',
      description: 'Success stories and results'
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
      path: '/help', 
      label: 'Help', 
      icon: '❓',
      description: 'Support and documentation'
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
      color: 'from-purple-500 to-pink-500',
      services: [
        { name: 'AI Autonomous Systems', path: '/services/ai-autonomous-systems', description: 'Advanced autonomous AI systems', icon: Brain },
        { name: 'AI Workflow Automation', path: '/services/ai-workflow-automation', description: 'Intelligent process automation', icon: Brain },
        { name: 'AI Customer Intelligence', path: '/services/ai-customer-intelligence', description: 'Customer behavior insights', icon: Users },
        { name: 'AI Predictive Analytics', path: '/services/ai-predictive-analytics', description: 'Future-focused analytics', icon: BarChart3 },
        { name: 'AI Research Assistant', path: '/ai-autonomous-research-assistant', description: 'AI-powered research automation', icon: Brain },
        { name: 'AI Business Manager', path: '/ai-autonomous-business-manager', description: 'Intelligent business management', icon: Brain },
        { name: 'AI Business Manager 2029', path: '/ai-autonomous-business-manager-2029', description: 'Future-ready business management', icon: Brain },
        { name: 'AI Business Platform', path: '/ai-autonomous-business-platform', description: 'Comprehensive business platform', icon: Brain },
        { name: 'AI Business Platform 2026', path: '/ai-autonomous-business-platform-2026', description: 'Next-gen business platform', icon: Brain },
        { name: 'AI Code Review', path: '/ai-autonomous-code-review', description: 'Intelligent code review automation', icon: Code },
        { name: 'AI Creative Director', path: '/ai-autonomous-creative-director', description: 'AI-powered creative content generation', icon: Palette },
        { name: 'AI Business Intelligence', path: '/services/ai-business-intelligence', description: 'Advanced analytics and insights', icon: BarChart3 },
        { name: 'AI Marketing Automation', path: '/services/ai-marketing-automation', description: 'Smart marketing optimization', icon: Target },
        { name: 'AI HR & Recruitment', path: '/services/ai-hr-recruitment', description: 'Intelligent talent management', icon: Users },
        { name: 'AI Legal Tech', path: '/services/ai-legal-tech', description: 'Automated legal processes', icon: Shield },
        { name: 'AI Healthcare Analytics', path: '/solutions/healthcare', description: 'Patient care optimization', icon: Heart }
      ]
    },
    {
      title: 'Quantum Technology',
      icon: Brain,
      description: 'Next-generation quantum computing solutions',
      color: 'from-blue-500 to-cyan-500',
      services: [
        { name: 'Quantum Neural Networks', path: '/quantum-neural-network-platform', description: 'Quantum-powered neural networks', icon: Brain },
        { name: 'Quantum Computing', path: '/services/quantum-technology', description: 'Quantum computing platforms', icon: Cpu },
        { name: 'Quantum-Safe Security', path: '/services/quantum-security', description: 'Future-proof quantum security', icon: Shield }
      ]
    },
    {
      title: 'Business Operations',
      icon: Building,
      description: 'Streamlined business process automation',
      color: 'from-green-500 to-emerald-500',
      services: [
        { name: 'Autonomous Business Platform', path: '/autonomous-business-operations-platform', description: 'Self-operating business systems' },
        { name: 'AI Autonomous Business Manager', path: '/ai-autonomous-business-manager', description: 'AI-powered business management' },
        { name: 'AI Autonomous Business Platform', path: '/ai-autonomous-business-platform', description: 'Complete AI business platform' },
        { name: 'AI Asset Management', path: '/ai-powered-it-asset-management', description: 'Intelligent IT asset management' },
        { name: 'Business Intelligence', path: '/services/ai-business-intelligence', description: 'Advanced business analytics' }
      ]
    },
    {
      title: 'Cybersecurity',
      icon: Shield,
      description: 'Comprehensive security and compliance solutions',
      color: 'from-red-500 to-pink-500',
      services: [
        { name: 'Cybersecurity Services', path: '/services/cybersecurity', description: 'Complete security solutions', icon: Shield },
        { name: 'SOC2 Compliance Automation', path: '/soc2-compliance-automation', description: 'Automated compliance management', icon: Lock },
        { name: 'Security Assessment', path: '/services/security-assessment', description: 'Security audit and testing', icon: Shield },
        { name: 'Compliance & Audit', path: '/services/compliance-audit', description: 'Regulatory compliance support', icon: Lock },
        { name: 'Threat Detection', path: '/services/threat-detection', description: 'Real-time security monitoring', icon: Shield }
      ]
    },
    {
      title: 'Cloud & Infrastructure',
      icon: Cpu,
      description: 'Scalable cloud solutions and infrastructure management',
      color: 'from-blue-500 to-indigo-500',
      services: [
        { name: 'Quantum-Secure Cloud', path: '/services/quantum-secure-cloud', description: 'Future-proof cloud security', icon: Shield },
        { name: 'Cloud DevOps', path: '/cloud-devops', description: 'Cloud development and operations', icon: Cpu },
        { name: 'IT Infrastructure', path: '/services/it-infrastructure', description: 'Complete IT infrastructure solutions', icon: Network },
        { name: '5G Enterprise Solutions', path: '/5g-enterprise-solutions', description: 'High-speed 5G connectivity', icon: Network },
        { name: 'Cloud Migration', path: '/services/cloud-migration', description: 'Seamless cloud transition', icon: Cloud },
        { name: 'Network Infrastructure', path: '/services/network-infrastructure', description: 'Robust network solutions', icon: Network },
        { name: 'Managed IT Services', path: '/services/managed-it-services', description: '24/7 IT support', icon: Clock },
        { name: 'DevOps Automation', path: '/services/devops-automation', description: 'Streamlined development', icon: Code }
      ]
    },
    {
      title: 'Emerging Technologies',
      icon: Rocket,
      description: 'Cutting-edge solutions for tomorrow\'s challenges',
      color: 'from-purple-500 to-violet-500',
      services: [
        { name: 'Blockchain Solutions', path: '/services/blockchain-solutions', description: 'Decentralized applications', icon: Code },
        { name: 'IoT Platforms', path: '/services/iot-platforms', description: 'Connected device management', icon: Network },
        { name: 'Quantum Computing', path: '/services/quantum-computing', description: 'Next-generation computing', icon: Cpu },
        { name: 'AR/VR Solutions', path: '/services/ar-vr-solutions', description: 'Immersive experiences', icon: Eye },
        { name: 'Space Technology', path: '/space-tech', description: 'Advanced space tech solutions', icon: Rocket },
        { name: 'Green Technology', path: '/services/green-tech', description: 'Sustainable tech solutions', icon: Leaf }
      ]
    },
    {
      title: 'AI Autonomous Systems',
      icon: Brain,
      description: 'Advanced autonomous AI solutions',
      color: 'from-indigo-500 to-purple-500',
      services: [
        { name: 'AI Autonomous Data', path: '/ai-autonomous-data', description: 'Intelligent data management', icon: Database },
        { name: 'AI Autonomous Decision Engine', path: '/ai-autonomous-decision-engine', description: 'Smart decision making', icon: Brain },
        { name: 'AI Autonomous Decision Platform', path: '/ai-autonomous-decision-platform', description: 'Decision automation platform', icon: Brain },
        { name: 'AI Autonomous DevOps', path: '/ai-autonomous-devops', description: 'Automated development operations', icon: Code },
        { name: 'AI Autonomous Education', path: '/ai-autonomous-education-professor', description: 'AI-powered education', icon: Users },
        { name: 'AI Autonomous Healthcare', path: '/ai-autonomous-healthcare-physician', description: 'Medical AI solutions', icon: Heart },
        { name: 'AI Autonomous Learning', path: '/ai-autonomous-learning-system', description: 'Intelligent learning systems', icon: Brain },
        { name: 'AI Autonomous Legal', path: '/ai-autonomous-legal-counsel', description: 'Legal AI automation', icon: Shield },
        { name: 'AI Autonomous Logistics', path: '/ai-autonomous-logistics', description: 'Smart logistics management', icon: Truck },
        { name: 'AI Autonomous Manufacturing', path: '/ai-autonomous-manufacturing', description: 'Intelligent manufacturing', icon: Cpu },
        { name: 'AI Autonomous Robotics', path: '/ai-autonomous-robotics', description: 'Advanced robotics systems', icon: Cpu },
        { name: 'AI Autonomous Scientific Research', path: '/ai-autonomous-scientific-researcher', description: 'Research automation', icon: TestTube },
        { name: 'AI Autonomous Security', path: '/ai-autonomous-security', description: 'Intelligent security systems', icon: Shield },
        { name: 'AI Autonomous Testing', path: '/ai-autonomous-testing', description: 'Automated testing solutions', icon: CheckCircle },
        { name: 'AI Autonomous Vehicle Platform', path: '/ai-autonomous-vehicle-platform', description: 'Vehicle automation platform', icon: Car },
        { name: 'AI Autonomous Vehicle', path: '/ai-autonomous-vehicle', description: 'Autonomous vehicle systems', icon: Car },
        { name: 'AI Autonomous Vehicles Platform', path: '/ai-autonomous-vehicles-platform', description: 'Multi-vehicle platform', icon: Car },
        { name: 'AI Autonomous Vehicles', path: '/ai-autonomous-vehicles', description: 'Fleet automation', icon: Car },
        { name: 'AI Autonomous Venture Capitalist', path: '/ai-autonomous-venture-capitalist', description: 'Investment AI', icon: DollarSign }
      ]
    },
    {
      title: 'AI Content & Creativity',
      icon: Palette,
      description: 'AI-powered content creation and creative solutions',
      color: 'from-pink-500 to-rose-500',
      services: [
        { name: 'AI Content Generation Automation', path: '/ai-content-generation-automation', description: 'Automated content creation', icon: Palette },
        { name: 'AI Content Generation Pro', path: '/ai-content-generation-pro', description: 'Professional content AI', icon: Palette },
        { name: 'AI Consciousness Evolution', path: '/ai-consciousness-evolution', description: 'AI consciousness research', icon: Brain },
        { name: 'AI Content Creation', path: '/ai-content-creation', description: 'Creative AI solutions', icon: Palette },
        { name: 'AI Content Creation Revolution', path: '/ai-content-creation-revolution', description: 'Revolutionary content AI', icon: Palette },
        { name: 'AI Content Factory', path: '/ai-content-factory', description: 'Content production AI', icon: Palette },
        { name: 'AI Brand Personality Generator', path: '/ai-brand-personality-generator', description: 'Brand AI solutions', icon: Star }
      ]
    },
    {
      title: 'Advanced AI Intelligence',
      icon: BarChart3,
      description: 'Next-generation AI intelligence solutions',
      color: 'from-cyan-500 to-blue-500',
      services: [
        { name: 'AI Business Intelligence Elite 2026', path: '/ai-business-intelligence-elite-2026', description: 'Elite BI solutions', icon: BarChart3 },
        { name: 'AI Business Intelligence Pro', path: '/ai-business-intelligence-pro', description: 'Professional BI AI', icon: BarChart3 },
        { name: 'AI Business Intelligence Suite 2029', path: '/ai-business-intelligence-suite-2029', description: 'Complete BI suite', icon: BarChart3 },
        { name: 'AI Business Intelligence Suite', path: '/ai-business-intelligence-suite', description: 'Comprehensive BI platform', icon: BarChart3 },
        { name: 'AI Predictive Analytics', path: '/services/ai-predictive-analytics', description: 'Future-focused analytics', icon: BarChart3 },
        { name: 'AI Customer Intelligence', path: '/services/ai-customer-intelligence', description: 'Customer insights AI', icon: Users }
      ]
    },
    {
      title: 'Industry Solutions',
      icon: Building,
      description: 'Tailored solutions for specific industries',
      color: 'from-orange-500 to-yellow-500',
      services: [
        { name: 'Healthcare Technology', path: '/solutions/healthcare', description: 'Medical innovation', icon: Heart },
        { name: 'Financial Services', path: '/services/financial-services', description: 'Fintech solutions', icon: DollarSign },
        { name: 'Manufacturing Intelligence', path: '/services/manufacturing-intelligence', description: 'Smart manufacturing', icon: Cpu },
        { name: 'Retail Technology', path: '/services/retail-technology', description: 'Digital retail transformation', icon: ShoppingCart }
      ]
    },
    {
      title: 'Specialized AI Services',
      icon: Cpu,
      description: 'Advanced AI applications for specific domains',
      color: 'from-emerald-500 to-teal-500',
      services: [
        { name: 'AI Biomedical Research', path: '/ai-biomedical-research', description: 'Medical research AI', icon: TestTube },
        { name: 'AI Biotech Drug Discovery', path: '/ai-biotech-drug-discovery', description: 'Drug discovery AI', icon: TestTube },
        { name: 'AI Blockchain Analytics', path: '/ai-blockchain-analytics', description: 'Blockchain AI analysis', icon: Code },
        { name: 'AI Blockchain Governance', path: '/ai-blockchain-governance', description: 'Blockchain governance AI', icon: Shield },
        { name: 'AI Brain Computer Interface', path: '/ai-brain-computer-interface', description: 'BCI AI solutions', icon: Brain },
        { name: 'AI Brain Interface', path: '/ai-brain-interface', description: 'Brain interface AI', icon: Brain },
        { name: 'AI Climate Prediction', path: '/ai-climate-prediction', description: 'Climate AI modeling', icon: Cloud },
        { name: 'AI Climate Prediction Engine', path: '/ai-climate-prediction-engine', description: 'Climate prediction AI', icon: Cloud },
        { name: 'AI Climate Prediction Platform', path: '/ai-climate-prediction-platform', description: 'Climate platform AI', icon: Cloud },
        { name: 'AI Code Generation Enterprise', path: '/ai-code-generation-enterprise', description: 'Enterprise code AI', icon: Code },
        { name: 'AI Compliance Automation', path: '/ai-compliance-automation', description: 'Compliance AI automation', icon: Shield },
        { name: 'AI Computer Vision Platform', path: '/ai-computer-vision-platform', description: 'Computer vision AI', icon: Eye },
        { name: 'AI Consciousness Evolution Platform', path: '/ai-consciousness-evolution-platform', description: 'Consciousness platform', icon: Brain },
        { name: 'AI Consciousness Simulation', path: '/ai-consciousness-simulation', description: 'Consciousness simulation', icon: Brain },
        { name: 'AI Consciousness Simulation Platform', path: '/ai-consciousness-simulation-platform', description: 'Simulation platform', icon: Brain },
        { name: 'AI Consciousness Simulator', path: '/ai-consciousness-simulator', description: 'Consciousness simulator', icon: Brain }
      ]
    }
  ];

  const solutionCategories = [
    {
      title: 'Enterprise Solutions',
      icon: Building,
      description: 'Large-scale business transformation',
      color: 'from-blue-500 to-indigo-500',
      solutions: [
        { name: 'Digital Transformation', path: '/digital-transformation', description: 'Complete business modernization', icon: Rocket },
        { name: 'Enterprise AI', path: '/solutions/enterprise', description: 'AI-powered enterprise solutions', icon: Brain },
        { name: 'Data Analytics', path: '/services/data-analytics', description: 'Business intelligence platform', icon: BarChart3 }
      ]
    },
    {
      title: 'SMB Solutions',
      icon: Users,
      description: 'Scalable solutions for growing businesses',
      color: 'from-green-500 to-emerald-500',
      solutions: [
        { name: 'Micro SAAS', path: '/services/micro-saas-solutions', description: 'Custom software solutions', icon: Code },
        { name: 'Cloud Migration', path: '/cloud-devops', description: 'Affordable cloud solutions', icon: Cloud },
        { name: 'IT Support', path: '/services/it-support', description: 'Managed IT services', icon: Clock }
      ]
    },
    {
      title: 'Healthcare Solutions',
      icon: Heart,
      description: 'Technology solutions for healthcare',
      color: 'from-red-500 to-pink-500',
      solutions: [
        { name: 'Healthcare AI', path: '/solutions/healthcare', description: 'AI-powered healthcare solutions', icon: Brain },
        { name: 'Patient Management', path: '/services/patient-management', description: 'Comprehensive patient care', icon: Users },
        { name: 'Medical Analytics', path: '/services/medical-analytics', description: 'Healthcare data insights', icon: BarChart3 }
      ]
    }
  ];

  const handleDropdownToggle = (dropdown: string) => {
    setActiveDropdown(activeDropdown === dropdown ? null : dropdown);
  };

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      // Navigate to search results or services page
      window.location.href = `/services?search=${encodeURIComponent(searchQuery.trim())}`;
    }
  };

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled 
        ? 'bg-black/90 backdrop-blur-md border-b border-gray-800/50' 
        : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-3 group">
            <div className="w-10 h-10 lg:w-12 lg:h-12 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
              <span className="text-white font-bold text-xl lg:text-2xl">Z</span>
            </div>
            <div className="hidden sm:block">
              <div className="text-xl lg:text-2xl font-bold text-white group-hover:text-cyan-400 transition-colors duration-300">
                Zion Tech Group
              </div>
              <div className="text-xs lg:text-sm text-gray-400">AI & Technology Solutions</div>
            </div>
          </Link>

          {/* Search Bar */}
          <div className="hidden md:flex flex-1 max-w-md mx-8">
            <div className="relative w-full">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
              <input
                type="text"
                placeholder="Search services, solutions..."
                className="w-full pl-10 pr-4 py-2 bg-gray-800/50 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent text-sm"
              />
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-6">
            {navigationItems.map((item) => (
              <div key={item.path} className="relative">
                {item.hasDropdown ? (
                  <button
                    onClick={() => handleDropdownToggle(item.label)}
                    className="flex items-center space-x-1 text-gray-300 hover:text-white transition-colors duration-200 group"
                  >
                    <span>{item.icon}</span>
                    <span className="font-medium">{item.label}</span>
                    <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${
                      activeDropdown === item.label ? 'rotate-180' : ''
                    }`} />
                  </button>
                ) : (
                  <Link
                    to={item.path}
                    className="flex items-center space-x-1 text-gray-300 hover:text-white transition-colors duration-200 group"
                  >
                    <span>{item.icon}</span>
                    <span className="font-medium">{item.label}</span>
                  </Link>
                )}

                {/* Services Dropdown */}
                {item.label === 'Services' && activeDropdown === 'Services' && (
                  <div className="absolute top-full left-0 mt-2 w-96 bg-black/95 backdrop-blur-md border border-gray-800 rounded-xl shadow-2xl p-6 z-50">
                    <div className="grid grid-cols-1 gap-6">
                      {serviceCategories.map((category, idx) => (
                        <div key={idx} className="group">
                          <div className="flex items-center space-x-3 mb-3">
                            <div className={`w-8 h-8 rounded-lg bg-gradient-to-r ${category.color} flex items-center justify-center`}>
                              <category.icon className="w-4 h-4 text-white" />
                            </div>
                            <h3 className="text-white font-semibold text-sm">{category.title}</h3>
                          </div>
                          <p className="text-gray-400 text-xs mb-3">{category.description}</p>
                          <div className="space-y-2">
                            {category.services.map((service, serviceIdx) => (
                              <Link
                                key={serviceIdx}
                                to={service.path}
                                className="flex items-center space-x-2 p-2 rounded-lg hover:bg-gray-800/50 transition-colors duration-200 group"
                              >
                                <service.icon className="w-4 h-4 text-gray-400 group-hover:text-cyan-400" />
                                <span className="text-gray-300 text-sm group-hover:text-white">{service.name}</span>
                                <span className="text-gray-600 text-xs">{service.description}</span>
                              </Link>
                            ))}
                          </div>
                        </div>
                      ))}
                    </div>
                    <div className="mt-6 pt-4 border-t border-gray-800">
                      <Link
                        to="/services"
                        className="flex items-center justify-center space-x-2 w-full py-2 px-4 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-lg text-white font-medium hover:from-cyan-600 hover:to-blue-700 transition-all duration-200"
                      >
                        <span>View All Services</span>
                        <ArrowRight className="w-4 h-4" />
                      </Link>
                    </div>
                  </div>
                )}

                {/* Solutions Dropdown */}
                {item.label === 'Solutions' && activeDropdown === 'Solutions' && (
                  <div className="absolute top-full left-0 mt-2 w-80 bg-black/95 backdrop-blur-md border border-gray-800 rounded-xl shadow-2xl p-6 z-50">
                    <div className="space-y-6">
                      {solutionCategories.map((category, idx) => (
                        <div key={idx} className="group">
                          <div className="flex items-center space-x-3 mb-3">
                            <div className={`w-8 h-8 rounded-lg bg-gradient-to-r ${category.color} flex items-center justify-center`}>
                              <category.icon className="w-4 h-4 text-white" />
                            </div>
                            <h3 className="text-white font-semibold text-sm">{category.title}</h3>
                          </div>
                          <p className="text-gray-400 text-xs mb-3">{category.description}</p>
                          <div className="space-y-2">
                            {category.solutions.map((solution, solutionIdx) => (
                              <Link
                                key={solutionIdx}
                                to={solution.path}
                                className="flex items-center space-x-2 p-2 rounded-lg hover:bg-gray-800/50 transition-colors duration-200 group"
                              >
                                <solution.icon className="w-4 h-4 text-gray-400 group-hover:text-cyan-400" />
                                <span className="text-gray-300 text-sm group-hover:text-white">{solution.name}</span>
                                <span className="text-gray-600 text-xs">{solution.description}</span>
                              </Link>
                            ))}
                          </div>
                        </div>
                      ))}
                    </div>
                    <div className="mt-6 pt-4 border-t border-gray-800">
                      <Link
                        to="/solutions/enterprise"
                        className="flex items-center justify-center space-x-2 w-full py-2 px-4 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-lg text-white font-medium hover:from-cyan-600 hover:to-blue-700 transition-all duration-200"
                      >
                        <span>Explore Solutions</span>
                        <ArrowRight className="w-4 h-4" />
                      </Link>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </nav>

          {/* Search and Contact */}
          <div className="hidden lg:flex items-center space-x-4">
            {/* Search */}
            <form onSubmit={handleSearch} className="relative">
              <input
                type="text"
                placeholder="Search services..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-64 px-4 py-2 bg-gray-800/50 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
              />
              <button
                type="submit"
                className="absolute right-2 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-white transition-colors duration-200"
              >
                <Search className="w-5 h-5" />
              </button>
            </form>

            {/* Contact Button */}
            <Link
              to="/contact"
              className="flex items-center space-x-2 px-6 py-2 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-lg text-white font-medium hover:from-cyan-600 hover:to-blue-700 transition-all duration-200"
            >
              <span>Get Started</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsSidebarOpen(true)}
            className="lg:hidden p-2 text-gray-400 hover:text-white transition-colors duration-200"
          >
            <Menu className="w-6 h-6" />
          </button>
        </div>
      </div>

      {/* Mobile Search */}
      <div className="lg:hidden border-t border-gray-800/50 bg-black/90 backdrop-blur-md">
        <div className="max-w-7xl mx-auto px-4 py-3">
          <form onSubmit={handleSearch} className="relative">
            <input
              type="text"
              placeholder="Search services..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full px-4 py-2 bg-gray-800/50 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
            />
            <button
              type="submit"
              className="absolute right-2 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-white transition-colors duration-200"
            >
              <Search className="w-5 h-5" />
            </button>
          </form>
        </div>
      </div>

      {/* Sidebar */}
      <Sidebar isOpen={isSidebarOpen} onClose={() => setIsSidebarOpen(false)} />
    </header>
  );
};

export default Header;

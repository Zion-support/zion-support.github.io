import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { 
  ChevronDown, 
  Phone, 
  Mail, 
  MapPin, 
  Menu, 
  X, 
  Brain, 
  Cloud, 
  Shield, 
  Code, 
  BarChart, 
  Users, 
  Zap,
  Star,
  TrendingUp,
  Settings,
  Globe,
  Target,
  ArrowRight,
  Sparkles,
  Database,
  MessageSquare,
  Eye,
  Cpu,
  Lock,
  BarChart3,
  FileText,
  Search as SearchIcon,
  Bot,
  Palette,
  Camera,
  Music,
  Video,
  Gamepad2,
  ShoppingCart,
  CreditCard,
  Building,
  Factory,
  Car,
  Plane,
  Ship,
  Train,
  Home,
  Heart,
  Stethoscope,
  GraduationCap,
  Briefcase,
  Wrench,
  Hammer,
  Paintbrush,
  Scissors,
  BookOpen,
  Calculator,
  Calendar,
  Clock,
  Compass,
  Navigation as NavIcon,
  PieChart,
  TrendingDown,
  Activity,
  Zap as Lightning,
  Target as Crosshair,
  Shield as Security,
  Users as People,
  Star as StarIcon,
  CheckCircle as Check,
  ArrowRight as Arrow,
  Phone as PhoneIcon,
  Mail as MailIcon,
  MapPin as Location,
  Truck,
  Smartphone,
  ChefHat,
  Rocket,
  Sprout,
  Scale,
  Mic,
  FlaskConical,
  DollarSign
} from 'lucide-react';

const Navigation: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);

  const handleDropdownToggle = (dropdown: string) => {
    setActiveDropdown(activeDropdown === dropdown ? null : dropdown);
  };

  const serviceCategories = [
    {
      title: 'AI Services',
      icon: Brain,
      color: 'text-purple-400',
      bgColor: 'bg-purple-500/10',
      services: [
        { name: 'AI Workflow Automation', href: '/ai-workflow-automation' },
        { name: 'AI Customer Support', href: '/ai-customer-support' },
        { name: 'AI Data Analytics', href: '/ai-data-analytics' },
        { name: 'AI Content Generation', href: '/ai-content-generation' },
        { name: 'AI Healthcare Solutions', href: '/ai-healthcare' },
        { name: 'AI Fintech Platform', href: '/ai-fintech' },
        { name: 'AI Quantum Computing', href: '/ai-quantum-computing' },
        { name: 'AI Autonomous Systems', href: '/ai-autonomous-systems' }
      ]
    },
    {
      title: 'IT Services',
      icon: Cloud,
      color: 'text-blue-400',
      bgColor: 'bg-blue-500/10',
      services: [
        { name: 'Cloud Migration', href: '/cloud-migration' },
        { name: 'Cybersecurity', href: '/cybersecurity' },
        { name: 'IT Infrastructure', href: '/it-infrastructure' },
        { name: '24/7 IT Support', href: '/it-support' },
        { name: 'Custom Development', href: '/custom-development' },
        { name: 'DevOps & CI/CD', href: '/devops-cicd' },
        { name: 'Database Management', href: '/database-management' },
        { name: 'Network Design', href: '/network-design' }
      ]
    },
    {
      title: 'Micro SaaS',
      icon: Code,
      color: 'text-green-400',
      bgColor: 'bg-green-500/10',
      services: [
        { name: 'AI Project Manager', href: '/ai-project-manager' },
        { name: 'AI Smart Calendar', href: '/ai-smart-calendar' },
        { name: 'AI Content Writer', href: '/ai-content-writer' },
        { name: 'AI Analytics Dashboard', href: '/ai-analytics-dashboard' },
        { name: 'AI Email Marketing', href: '/ai-email-marketing' },
        { name: 'AI Customer Support Bot', href: '/ai-customer-support-bot' },
        { name: 'AI CRM Assistant', href: '/ai-crm-assistant' },
        { name: 'AI Financial Advisor', href: '/ai-financial-advisor' }
      ]
    }
  ];

  const mainNavItems = [
    { name: 'Home', href: '/' },
    { name: 'About', href: '/about' },
    { name: 'Services', href: '/services' },
    { name: 'Pricing', href: '/pricing' },
    { name: 'Blog', href: '/blog' },
    { name: 'Contact', href: '/contact' }
  ];

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled 
        ? 'bg-slate-900/95 backdrop-blur-md border-b border-cyan-400/20 shadow-lg shadow-cyan-500/10' 
        : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2 group" onClick={closeMenu}>
            <div className="w-8 h-8 bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-lg shadow-cyan-400/25">
              <Zap className="w-5 h-5 text-white" />
            </div>
            <span className="text-white font-bold text-xl bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 bg-clip-text text-transparent">
              Zion Tech Group
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            {mainNavItems.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className="text-gray-300 hover:text-cyan-400 transition-colors duration-200 font-medium"
              >
                {item.name}
              </Link>
            ))}

            {/* Services Dropdown */}
            <div className="relative group">
              <button
                className="flex items-center space-x-1 text-gray-300 hover:text-cyan-400 transition-colors duration-200 font-medium"
                onMouseEnter={() => setActiveDropdown('services')}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                <span>Services</span>
                <ChevronDown className="w-4 h-4" />
              </button>

              {/* Services Dropdown Menu */}
              {activeDropdown === 'services' && (
                <div 
                  className="absolute top-full left-0 mt-2 w-96 bg-slate-800/95 backdrop-blur-md border border-cyan-400/20 rounded-lg shadow-xl shadow-cyan-500/10 p-6"
                  onMouseEnter={() => setActiveDropdown('services')}
                  onMouseLeave={() => setActiveDropdown(null)}
                >
                  <div className="grid grid-cols-1 gap-6">
                    {serviceCategories.map((category, index) => (
                      <div key={index}>
                        <div className="flex items-center space-x-2 mb-3">
                          <category.icon className={`w-5 h-5 ${category.color}`} />
                          <h3 className="text-white font-semibold">{category.title}</h3>
                        </div>
                        <ul className="space-y-2">
                          {category.services.slice(0, 4).map((service, serviceIndex) => (
                            <li key={serviceIndex}>
                              <Link
                                to={service.href}
                                className="text-gray-300 hover:text-cyan-400 transition-colors duration-200 text-sm flex items-center group"
                                onClick={closeMenu}
                              >
                                <ArrowRight className="w-3 h-3 mr-2 opacity-0 group-hover:opacity-100 transition-opacity duration-200" />
                                {service.name}
                              </Link>
                            </li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>
                  <div className="mt-4 pt-4 border-t border-gray-700">
                    <Link
                      to="/services"
                      className="text-cyan-400 hover:text-cyan-300 transition-colors duration-200 text-sm font-medium flex items-center group"
                      onClick={closeMenu}
                    >
                      View All Services
                      <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform duration-200" />
                    </Link>
                  </div>
                </div>
              )}
            </div>

            {/* CTA Button */}
            <Link
              to="/consultation"
              className="bg-gradient-to-r from-cyan-500 to-purple-600 hover:from-cyan-600 hover:to-purple-700 text-white font-bold py-2 px-6 rounded-lg transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-cyan-500/25 inline-flex items-center"
            >
              <Rocket className="w-4 h-4 mr-2" />
              Get Started
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={toggleMenu}
            className="lg:hidden text-gray-300 hover:text-cyan-400 transition-colors duration-200"
            aria-label="Toggle menu"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="lg:hidden bg-slate-900/95 backdrop-blur-md border-t border-cyan-400/20">
            <div className="px-2 pt-2 pb-3 space-y-1">
              {mainNavItems.map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  className="block px-3 py-2 text-gray-300 hover:text-cyan-400 transition-colors duration-200 font-medium"
                  onClick={closeMenu}
                >
                  {item.name}
                </Link>
              ))}

              {/* Mobile Services Section */}
              <div className="pt-4 border-t border-gray-700">
                <h3 className="px-3 py-2 text-cyan-400 font-semibold">Services</h3>
                {serviceCategories.map((category, index) => (
                  <div key={index} className="px-3 py-2">
                    <div className="flex items-center space-x-2 mb-2">
                      <category.icon className={`w-4 h-4 ${category.color}`} />
                      <span className="text-white font-medium text-sm">{category.title}</span>
                    </div>
                    <ul className="ml-6 space-y-1">
                      {category.services.slice(0, 3).map((service, serviceIndex) => (
                        <li key={serviceIndex}>
                          <Link
                            to={service.href}
                            className="block text-gray-300 hover:text-cyan-400 transition-colors duration-200 text-sm"
                            onClick={closeMenu}
                          >
                            {service.name}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>

              {/* Mobile CTA */}
              <div className="pt-4 border-t border-gray-700">
                <Link
                  to="/consultation"
                  className="block w-full bg-gradient-to-r from-cyan-500 to-purple-600 hover:from-cyan-600 hover:to-purple-700 text-white font-bold py-3 px-4 rounded-lg transition-all duration-300 text-center"
                  onClick={closeMenu}
                >
                  <Rocket className="w-4 h-4 mr-2 inline" />
                  Get Started
                </Link>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;
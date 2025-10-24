<<<<<<< HEAD
'use client'
import React from 'react'
import { Helmet } from 'react-helmet-async'
import { ArrowRight, Brain, BarChart, Target, TrendingUp } from 'lucide-react'
import Navigation from '../components/Navigation'
import Footer from '../components/Footer'
import { CheckCircle, ArrowRight, Star, Clock, Zap, Shield, Brain, BarChart, Target, TrendingUp, Globe, Database, Users, Settings, Check } from 'lucide-react'
interface HeaderProps {
  className?: string
}
const Header: React.FC<HeaderProps> = ({ className = '' }) => {
  return (
    <>
      <Helmet>
        <title>Header</title>
        <meta name="description" content="Advanced Header solution for modern businesses." />
        <meta name="keywords" content="AI, artificial intelligence, Header, AI solutions, intelligent automation" />
      </Helmet>
      <Navigation />
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-emerald-900 to-slate-900">
            {/* Hero Section */}
        <section className="relative py-20 px-4 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-emerald-600/20 to-blue-600/20">
            <div className="relative max-w-7xl mx-auto text-center"></div>
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
              Header
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed">
              Advanced Header solution for modern businesses.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-emerald-600 hover:bg-emerald-700 text-white px-8 py-4 rounded-lg font-semibold transition-colors duration-200 flex items-center justify-center">
                Get Started
                <ArrowRight className="ml-2 h-5 w-5" />
              </button>
              <button className="border border-emerald-400 text-emerald-400 hover:bg-emerald-400 hover:text-white px-8 py-4 rounded-lg font-semibold transition-colors duration-200">
                Learn More
              </button>
            </div>
          </div>
        </section>
        {/* Features Section */}
        <section className="py-20 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16"></div>
              <h2 className="text-4xl font-bold text-white mb-4">Key Features</h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Powerful AI-driven features designed to transform your business operations
              </p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
                <div key={index} className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20"></div>
                  <feature.icon className="h-12 w-12 text-emerald-400 mb-4" />
                  <h3 className="text-xl font-semibold text-white mb-3">{feature.title}</h3>
                  <p className="text-gray-300 mb-4">{feature.description}</p>
                  <ul className="space-y-2">
                    {feature.benefits.map((benefit, idx) => (
                      <li key={idx} className="flex items-center text-sm text-gray-300">
                        <CheckCircle className="h-4 w-4 text-emerald-400 mr-2 flex-shrink-0" />
                        {benefit}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>
        {/* Benefits Section */}
        <section className="py-20 px-4 bg-white/5">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16"></div>
              <h2 className="text-4xl font-bold text-white mb-4">Why Choose Our Solution</h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Experience the benefits of cutting-edge AI technology
              </p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
                <div key={index} className="flex items-start space-x-4"></div>
                  <CheckCircle className="h-6 w-6 text-emerald-400 mt-1 flex-shrink-0" />
                  <p className="text-gray-300 text-lg">{benefit}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
        {/* CTA Section */}
        <section className="py-20 px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold text-white mb-6">Ready to Transform Your Business?</h2>
            <p className="text-xl text-gray-300 mb-8">
              Join thousands of businesses already using our AI solutions
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-emerald-600 hover:bg-emerald-700 text-white px-8 py-4 rounded-lg font-semibold transition-colors duration-200">
                Start Free Trial
              </button>
              <button className="border border-emerald-400 text-emerald-400 hover:bg-emerald-400 hover:text-white px-8 py-4 rounded-lg font-semibold transition-colors duration-200">
                Contact Sales
              </button>
            </div>
          </div>
        </section>
      </div>
      <Footer />
</>
  )
}
export default HeaderPage
  )
}
export default Header
=======
import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { 
  Menu, 
  X, 
  Phone, 
  Mail, 
  MapPin, 
  Zap, 
  Brain, 
  Code, 
  Cloud, 
  Wifi, 
  Users, 
  ChevronDown, 
  Sidebar as SidebarIcon,
  ExternalLink,
  Clock,
  Shield,
  BarChart3,
  Target,
  FileText,
  Calendar,
  CreditCard,
  Headphones,
  MessageCircle,
  Settings,
  Lock,
  Globe,
  Search,
  Filter,
  Download,
  Upload,
  Eye,
  Edit,
  Plus,
  ArrowRight,
  Check,
  AlertCircle,
  Info,
  HelpCircle,
  DollarSign,
  Percent,
  PieChart,
  LineChart,
  Activity,
  Server,
  HardDrive,
  Cpu,
  MemoryStick,
  Monitor,
  Camera,
  Mic,
  Speaker,
  Bluetooth,
  Battery,
  Power,
  RefreshCw,
  Maximize,
  Minimize,
  Copy,
  Scissors,
  Clipboard,
  Bookmark,
  Tag,
  Flag,
  Heart,
  ThumbsUp,
  ThumbsDown,
  Sun,
  Moon,
  CloudRain,
  CloudSnow,
  CloudLightning,
  Wind,
  Thermometer,
  Droplets,
  Snowflake,
  Sparkles,
  Flame,
  Droplet,
  Mountain,
  TreePine,
  Leaf,
  Flower,
  Bug,
  Fish,
  Bird,
  Cat,
  Dog,
  Rabbit,
  Cow,
  Pig,
  Frog,
  Turtle,
  Snake,
  Spider,
  Bee,
  Butterfly,
  Ant,
  Ladybug,
  Dragonfly,
  Firefly,
  Snail,
  Octopus,
  Whale,
  Shark,
  Dolphin,
  Penguin,
  Eagle,
  Owl,
  Parrot,
  Peacock,
  Swan,
  Duck,
  Chicken,
  Rooster,
  Turkey,
  Goose,
  Pigeon,
  Crow,
  Raven,
  Sparrow,
  Robin,
  Bluebird,
  Cardinal,
  Hummingbird,
  Woodpecker,
  Toucan,
  Flamingo,
  Pelican,
  Seagull,
  Albatross,
  Ostrich,
  Emu,
  Kiwi,
  PolarBear,
  Panda,
  Koala,
  Kangaroo,
  Wombat,
  Platypus,
  Echidna,
  Sloth,
  Armadillo,
  Hedgehog,
  Squirrel,
  Chipmunk,
  Beaver,
  Otter,
  Seal,
  Walrus,
  SeaLion,
  Elephant,
  Giraffe,
  Zebra,
  Hippo,
  Rhino,
  Lion,
  Tiger,
  Leopard,
  Cheetah,
  Jaguar,
  Panther,
  Lynx,
  Bobcat,
  Cougar,
  Wolf,
  Fox,
  Coyote,
  Jackal,
  Hyena,
  Bear,
  Raccoon,
  Skunk,
  Badger,
  Wolverine,
  Weasel,
  Ferret,
  Mink
} from 'lucide-react';
import Sidebar from './Sidebar';

const Header: React.FC = () => {
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
      name: 'Home',
      href: '/',
      icon: <Zap className="w-4 h-4" />
    },
    {
      name: 'About',
      href: '/about',
      icon: <Users className="w-4 h-4" />
    },
    {
      name: 'Services',
      href: '/services',
      icon: <Code className="w-4 h-4" />
    },
    {
      name: 'AI Services',
      href: '/ai-services',
      icon: <Brain className="w-4 h-4" />,
      dropdown: [
        { name: 'AI Analytics Dashboard Pro', href: '/ai-analytics-dashboard-pro', icon: <BarChart3 className="w-4 h-4" /> },
        { name: 'AI Content Generation Pro', href: '/ai-content-generation-pro', icon: <FileText className="w-4 h-4" /> },
        { name: 'AI Automation Suite', href: '/ai-automation-suite', icon: <Settings className="w-4 h-4" /> },
        { name: 'AI Business Intelligence Pro', href: '/ai-business-intelligence-pro', icon: <PieChart className="w-4 h-4" /> },
        { name: 'AI Code Assistant Pro', href: '/ai-code-assistant-pro', icon: <Code className="w-4 h-4" /> },
        { name: 'AI Chatbot Enterprise', href: '/ai-chatbot-enterprise', icon: <MessageCircle className="w-4 h-4" /> },
        { name: 'AI Customer Insights Pro', href: '/ai-customer-insights-pro', icon: <Users className="w-4 h-4" /> },
        { name: 'AI Project Management Pro', href: '/ai-project-management-pro', icon: <Calendar className="w-4 h-4" /> },
        { name: 'AI Social Media Manager Pro', href: '/ai-social-media-manager-pro', icon: <Globe className="w-4 h-4" /> },
        { name: 'AI Email Marketing Pro', href: '/ai-email-marketing-pro', icon: <Mail className="w-4 h-4" /> }
      ]
    },
    {
      name: 'IT Services',
      href: '/it-services',
      icon: <Server className="w-4 h-4" />,
      dropdown: [
        { name: 'AI Cloud Infrastructure', href: '/ai-cloud-infrastructure', icon: <Cloud className="w-4 h-4" /> },
        { name: 'AI API Management', href: '/ai-api-management', icon: <Settings className="w-4 h-4" /> },
        { name: 'Database Solutions', href: '/database-solutions', icon: <Database className="w-4 h-4" /> },
        { name: 'Advanced Security Suite', href: '/advanced-security-suite', icon: <Shield className="w-4 h-4" /> },
        { name: 'Performance Monitoring', href: '/performance-monitoring', icon: <Activity className="w-4 h-4" /> },
        { name: 'DevOps Solutions', href: '/devops-solutions', icon: <Settings className="w-4 h-4" /> }
      ]
    },
    {
      name: '5G Solutions',
      href: '/5g-solutions',
      icon: <Wifi className="w-4 h-4" />,
      dropdown: [
        { name: '5G Implementation', href: '/5g-implementation', icon: <Wifi className="w-4 h-4" /> },
        { name: '5G Network Infrastructure', href: '/5g-network-infrastructure', icon: <Server className="w-4 h-4" /> },
        { name: '5G IoT Solutions', href: '/5g-iot-solutions', icon: <Cpu className="w-4 h-4" /> },
        { name: '5G Smart City Solutions', href: '/5g-smart-city-solutions', icon: <Globe className="w-4 h-4" /> },
        { name: '5G Edge Computing', href: '/5g-edge-computing', icon: <Cpu className="w-4 h-4" /> },
        { name: '5G Private Networks', href: '/5g-private-networks', icon: <Lock className="w-4 h-4" /> }
      ]
    },
    {
      name: 'Micro SAAS',
      href: '/micro-saas',
      icon: <Cloud className="w-4 h-4" />,
      dropdown: [
        { name: 'AI Analytics Dashboard Pro', href: '/ai-analytics-dashboard-pro', icon: <BarChart3 className="w-4 h-4" /> },
        { name: 'AI Content Generation Pro', href: '/ai-content-generation-pro', icon: <FileText className="w-4 h-4" /> },
        { name: 'AI Lead Generation Pro', href: '/ai-lead-generation-pro', icon: <Target className="w-4 h-4" /> },
        { name: 'AI CRM Enterprise', href: '/ai-crm-enterprise', icon: <Users className="w-4 h-4" /> },
        { name: 'AI Scheduling Assistant Pro', href: '/ai-scheduling-assistant-pro', icon: <Calendar className="w-4 h-4" /> },
        { name: 'AI Document Processor Pro', href: '/ai-document-processor-pro', icon: <FileText className="w-4 h-4" /> },
        { name: 'AI Email Marketing Pro', href: '/ai-email-marketing-pro', icon: <Mail className="w-4 h-4" /> },
        { name: 'AI Social Media Manager Pro', href: '/ai-social-media-manager-pro', icon: <Globe className="w-4 h-4" /> },
        { name: 'AI Price Optimization Pro', href: '/ai-price-optimization-pro', icon: <DollarSign className="w-4 h-4" /> },
        { name: 'AI Security Monitor Pro', href: '/ai-security-monitor-pro', icon: <Shield className="w-4 h-4" /> },
        { name: 'AI Password Manager Pro', href: '/ai-password-manager-pro', icon: <Lock className="w-4 h-4" /> },
        { name: 'AI Compliance Monitor Pro', href: '/ai-compliance-monitor-pro', icon: <CheckCircle className="w-4 h-4" /> },
        { name: 'AI Healthcare Assistant Pro', href: '/ai-healthcare-assistant-pro', icon: <Heart className="w-4 h-4" /> },
        { name: 'AI Legal Assistant Pro', href: '/ai-legal-assistant-pro', icon: <Scale className="w-4 h-4" /> },
        { name: 'AI Agricultural Intelligence Pro', href: '/ai-agricultural-intelligence-pro', icon: <Leaf className="w-4 h-4" /> },
        { name: 'AI Code Assistant Pro', href: '/ai-code-assistant-pro', icon: <Code className="w-4 h-4" /> },
        { name: 'AI DevOps Automation Pro', href: '/ai-devops-automation-pro', icon: <Server className="w-4 h-4" /> },
        { name: 'AI Database Optimizer Pro', href: '/ai-database-optimizer-pro', icon: <Database className="w-4 h-4" /> },
        { name: 'AI Customer Support Pro', href: '/ai-customer-support-pro', icon: <Headphones className="w-4 h-4" /> },
        { name: 'AI Live Chat Pro', href: '/ai-live-chat-pro', icon: <MessageCircle className="w-4 h-4" /> }
      ]
    },
    {
      name: 'Contact',
      href: '/contact',
      icon: <Phone className="w-4 h-4" />
    }
  ];

  const isActive = (href: string) => location.pathname === href;

const Header = () => {
  return (
    <>
      <Sidebar isOpen={isSidebarOpen} onClose={() => setIsSidebarOpen(false)} />
      <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-slate-900/95 backdrop-blur-md border-b border-cyan-500/20 shadow-2xl' 
          : 'bg-transparent'
      }`}>
        {/* Top Contact Bar */}
        <div className="bg-gradient-to-r from-cyan-600 to-purple-600 text-white py-2 px-4">
          <div className="container mx-auto flex justify-between items-center text-sm">
            <div className="flex items-center space-x-6">
              <div className="flex items-center space-x-2">
                <Phone className="w-4 h-4" />
                <a href="tel:+13024640950" className="hover:text-cyan-200 transition-colors">
                  +1 302 464 0950
                </a>
              </div>
              <div className="flex items-center space-x-2">
                <Mail className="w-4 h-4" />
                <a href="mailto:kleber@ziontechgroup.com" className="hover:text-cyan-200 transition-colors">
                  kleber@ziontechgroup.com
                </a>
              </div>
              <div className="flex items-center space-x-2">
                <MapPin className="w-4 h-4" />
                <span>364 E Main St STE 1008, Middletown DE 19709</span>
              </div>
            </div>
            <div className="hidden md:flex items-center space-x-4">
              <span className="text-cyan-200">24/7 Support Available</span>
              <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"> </div>
          </div>
        </div>

        {/* Main Navigation */}
        <nav className="bg-slate-900/90 backdrop-blur-md border-b border-cyan-500/20">
          <div className="container mx-auto px-4">
            <div className="flex justify-between items-center h-16">
              {/* Logo */}
              <Link to="/" className="flex items-center space-x-2 group">
                <div className="w-10 h-10 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <Zap className="w-6 h-6 text-white" />
                </div>
                <div className="flex flex-col">
                  <span className="text-xl font-bold text-white group-hover:text-cyan-400 transition-colors">
                    Zion Tech Group
                  </span>
                  <span className="text-xs text-cyan-400 -mt-1">Advanced AI & IT Solutions</span>
                </div>
              </Link>

              {/* Desktop Navigation */}
              <div className="hidden lg:flex items-center space-x-1">
                {navigationItems.map((item) => (
                  <div key={item.name} className="relative group">
                    <Link
                      to={item.href}
                      className={`flex items-center space-x-1 px-4 py-2 rounded-lg transition-all duration-300 ${
                        isActive(item.href)
                          ? 'bg-cyan-600 text-white shadow-lg shadow-cyan-500/25'
                          : 'text-gray-300 hover:text-white hover:bg-slate-800/50'
                      }`}
                      onMouseEnter={() => setActiveDropdown(item.dropdown ? item.name : null)}
                      onMouseLeave={() => setActiveDropdown(null)}
                    >
                      {item.icon}
                      <span className="font-medium">{item.name}</span>
                      {item.dropdown && <ChevronDown className="w-4 h-4" />}
                    </Link>

                    {/* Dropdown Menu */}
                    {item.dropdown && (
                      <div className={`absolute top-full left-0 mt-2 w-80 bg-slate-800/95 backdrop-blur-md border border-cyan-500/20 rounded-lg shadow-2xl transition-all duration-300 ${
                        activeDropdown === item.name 
                          ? 'opacity-100 visible translate-y-0' 
                          : 'opacity-0 invisible translate-y-2'
                      }`}>
                        <div className="py-2">
                          <div className="px-4 py-2 border-b border-cyan-500/20">
                            <h3 className="text-sm font-semibold text-cyan-400">{item.name}</h3>
                          </div>
                          {item.dropdown.map((dropdownItem) => (
                            <Link
                              key={dropdownItem.name}
                              to={dropdownItem.href}
                              className="flex items-center space-x-3 px-4 py-3 text-gray-300 hover:text-white hover:bg-slate-700/50 transition-colors duration-200 group"
                            >
                              <div className="w-5 h-5 text-cyan-500 group-hover:text-cyan-400 transition-colors">
                                {dropdownItem.icon}
                              </div>
                              <span className="text-sm flex-1">{dropdownItem.name}</span>
                              <ExternalLink className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                            </Link>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                ))}
              </div>

              {/* CTA Buttons */}
              <div className="hidden lg:flex items-center space-x-4">
                <a
                  href="tel:+13024640950"
                  className="flex items-center space-x-2 bg-gradient-to-r from-green-600 to-emerald-600 text-white px-4 py-2 rounded-lg font-semibold hover:from-green-700 hover:to-emerald-700 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-green-500/25"
                >
                  <Phone className="w-4 h-4" />
                  Call Now
                </a>
                <a
                  href="mailto:kleber@ziontechgroup.com"
                  className="bg-gradient-to-r from-cyan-600 to-purple-600 text-white px-6 py-2 rounded-lg font-semibold hover:from-cyan-700 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-cyan-500/25"
                >
                  Get Quote
                </a>
              </div>

              {/* Sidebar Toggle */}
              <button
                onClick={() => setIsSidebarOpen(!isSidebarOpen)}
                className="hidden lg:block p-2 text-gray-300 hover:text-white hover:bg-slate-800/50 rounded-lg transition-colors"
              >
                <SidebarIcon className="w-6 h-6" />
              </button>

              {/* Mobile Menu Button */}
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="lg:hidden p-2 text-gray-300 hover:text-white hover:bg-slate-800/50 rounded-lg transition-colors"
              >
                {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>

          {/* Mobile Menu */}
          <div className={`lg:hidden transition-all duration-300 ${
            isMenuOpen ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0 overflow-hidden'
          }`}>
            <div className="bg-slate-800/95 backdrop-blur-md border-t border-cyan-500/20">
              <div className="container mx-auto px-4 py-6 space-y-3">
                {navigationItems.map((item) => (
                  <div key={item.name}>
                    <Link
                      to={item.href}
                      className={`flex items-center space-x-3 px-4 py-3 rounded-lg transition-colors ${
                        isActive(item.href)
                          ? 'bg-cyan-600 text-white'
                          : 'text-gray-300 hover:text-white hover:bg-slate-700/50'
                      }`}
                      onClick={() => setIsMenuOpen(false)}
                    >
                      {item.icon}
                      <span className="font-medium">{item.name}</span>
                    </Link>
                    {item.dropdown && (
                      <div className="ml-6 space-y-2 mt-2">
                        {item.dropdown.map((dropdownItem) => (
                          <Link
                            key={dropdownItem.name}
                            to={dropdownItem.href}
                            className="flex items-center space-x-3 px-4 py-2 text-sm text-gray-400 hover:text-white hover:bg-slate-700/30 rounded-lg transition-colors"
                            onClick={() => setIsMenuOpen(false)}
                          >
                            <div className="w-4 h-4 text-cyan-500">
                              {dropdownItem.icon}
                            </div>
                            <span>{dropdownItem.name}</span>
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                ))}
                <div className="pt-4 border-t border-cyan-500/20 space-y-3">
                  <a
                    href="tel:+13024640950"
                    className="flex items-center justify-center space-x-2 w-full bg-gradient-to-r from-green-600 to-emerald-600 text-white px-6 py-3 rounded-lg font-semibold hover:from-green-700 hover:to-emerald-700 transition-all duration-300"
                  >
                    <Phone className="w-4 h-4" />
                    <span>Call Now</span>
                  </a>
                  <a
                    href="mailto:kleber@ziontechgroup.com"
                    className="flex items-center justify-center space-x-2 w-full bg-gradient-to-r from-cyan-600 to-purple-600 text-white px-6 py-3 rounded-lg font-semibold hover:from-cyan-700 hover:to-purple-700 transition-all duration-300"
                  >
                    <Mail className="w-4 h-4" />
                    <span>Get Quote</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </nav>
      </header>
    </>
  );
};

export default Header;
>>>>>>> main

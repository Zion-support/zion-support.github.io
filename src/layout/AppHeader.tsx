import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { 
  Menu, 
  X, 
  ChevronDown, 
  Phone, 
  Mail, 
  MapPin, 
  Clock,
  Linkedin,
  Twitter,
  Facebook,
  Youtube,
  Instagram,
  Github,
  Globe,
  Shield,
  Zap,
  Brain,
  Cpu,
  Cloud,
  BarChart3,
  Target,
  FileText,
  HelpCircle,
  MessageCircle,
  ShoppingCart,
  Users,
  Rocket,
  Star,
  TrendingUp,
  Building,
  Briefcase,
  Tag,
  Phone as PhoneIcon,
  Mail as MailIcon,
  MapPin as MapPinIcon,
  Clock as ClockIcon
} from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export default function AppHeader() {
  const [isOpen, setIsOpen] = useState(false);
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

  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);

  const navigation = [
    {
      name: 'Home',
      href: '/',
      icon: Home
    },
    {
      name: 'About',
      href: '/about',
      icon: Users
    },
    {
      name: 'Services',
      href: '/services',
      icon: Settings,
      dropdown: [
        {
          name: 'AI Services',
          href: '/services/ai-services',
          icon: Brain,
          description: 'Intelligent automation and AI solutions'
        },
        {
          name: 'IT Solutions',
          href: '/services/it-solutions',
          icon: Cpu,
          description: 'Comprehensive IT consulting and services'
        },
        {
          name: 'Cloud Services',
          href: '/services/cloud-services',
          icon: Cloud,
          description: 'Scalable cloud infrastructure and solutions'
        },
        {
          name: 'Cybersecurity',
          href: '/services/cybersecurity',
          icon: Shield,
          description: 'Advanced security and protection services'
        },
        {
          name: 'Data Analytics',
          href: '/data-analytics',
          icon: BarChart3,
          description: 'Business intelligence and analytics'
        },
        {
          name: 'Digital Twin',
          href: '/digital-twin',
          icon: Eye,
          description: 'Digital twin technology solutions'
        },
        {
          name: 'Quantum Computing',
          href: '/quantum-computing',
          icon: Atom,
          description: 'Quantum computing and algorithms'
        },
        {
          name: 'IoT & Edge Computing',
          href: '/iot-edge-computing',
          icon: Wifi,
          description: 'Internet of Things and edge solutions'
        },
        {
          name: 'Space Technology',
          href: '/space-tech',
          icon: Rocket,
          description: 'Space technology and satellite solutions'
        }
      ]
    },
    {
      name: 'Solutions',
      href: '/solutions',
      icon: Target,
      dropdown: [
        {
          name: 'AI-Powered SEO',
          href: '/ai-powered-seo',
          icon: TrendingUp,
          description: 'Search engine optimization with AI'
        },
        {
          name: 'Interview Assessment AI',
          href: '/interview-assessment-ai',
          icon: Users,
          description: 'AI-powered hiring and assessment'
        },
        {
          name: 'Helpdesk Platform',
          href: '/helpdesk-platform',
          icon: HelpCircle,
          description: 'Comprehensive support platform'
        },
        {
          name: 'IT Consulting',
          href: '/it-consulting',
          icon: SettingsIcon,
          description: 'Strategic IT consulting services'
        }
      ]
    },
    {
      name: 'Marketplace',
      href: '/marketplace',
      icon: ShoppingCart
    },
    {
      name: 'Pricing',
      href: '/pricing',
      icon: Tag
    },
    {
      name: 'Resources',
      href: '/resources',
      icon: FileText,
      dropdown: [
        {
          name: 'Blog',
          href: '/blog',
          icon: FileText,
          description: 'Latest insights and updates'
        },
        {
          name: 'Case Studies',
          href: '/case-studies',
          icon: Award,
          description: 'Success stories and results'
        },
        {
          name: 'News',
          href: '/news',
          icon: Bell,
          description: 'Company news and announcements'
        },
        {
          name: 'Partners',
          href: '/partners',
          icon: Users,
          description: 'Strategic partnerships and alliances'
        },
        {
          name: 'FAQ',
          href: '/faq',
          icon: HelpCircle,
          description: 'Frequently asked questions'
        },
        {
          name: 'Help Center',
          href: '/help-center',
          icon: HelpCircle,
          description: 'Support and documentation'
        }
      ]
    },
    {
      name: 'Company',
      href: '/company',
      icon: Building,
      dropdown: [
        {
          name: 'About Us',
          href: '/about',
          icon: Users,
          description: 'Our story and mission'
        },
        {
          name: 'Careers',
          href: '/careers',
          icon: Briefcase,
          description: 'Join our team'
        },
        {
          name: 'Contact',
          href: '/contact',
          icon: Phone,
          description: 'Get in touch with us'
        }
      ]
    }
  ];

  const contactInfo = [
    {
      icon: Phone,
      text: '+1 (555) 123-4567',
      href: 'tel:+15551234567'
    },
    {
      icon: Mail,
      text: 'info@ziontechgroup.com',
      href: 'mailto:info@ziontechgroup.com'
    },
    {
      icon: MapPin,
      text: '123 Tech Street, Silicon Valley, CA',
      href: '#'
    },
    {
      icon: Clock,
      text: 'Mon-Fri: 9AM-6PM PST',
      href: '#'
    }
  ];

  const socialLinks = [
    { name: 'LinkedIn', href: 'https://linkedin.com/company/ziontechgroup', icon: Linkedin },
    { name: 'Twitter', href: 'https://twitter.com/ziontechgroup', icon: Twitter },
    { name: 'Facebook', href: 'https://facebook.com/ziontechgroup', icon: Facebook },
    { name: 'YouTube', href: 'https://youtube.com/ziontechgroup', icon: Youtube }
  ];

  return (
    <>
      {/* Top Bar */}
      <div className="bg-zion-slate-dark border-b border-zion-cyan/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-12">
            {/* Contact Info */}
            <div className="hidden md:flex items-center space-x-6 text-sm text-zion-slate-light">
              {contactInfo.map((contact, index) => (
                <a
                  key={index}
                  href={contact.href}
                  className="flex items-center space-x-2 hover:text-zion-cyan transition-colors duration-200"
                >
                  <contact.icon className="w-4 h-4" />
                  <span>{contact.text}</span>
                </a>
              ))}
            </div>

            {/* Social Links */}
            <div className="flex items-center space-x-4">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-zion-slate-light hover:text-zion-cyan transition-colors duration-200"
                >
                  <social.icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Main Header */}
      <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-zion-slate-dark/95 backdrop-blur-md border-b border-zion-cyan/20' 
          : 'bg-transparent'
      }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <Link to="/" className="flex items-center space-x-3 group">
              <div className="w-10 h-10 bg-gradient-to-r from-zion-cyan to-zion-purple rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                <Rocket className="w-6 h-6 text-white" />
              </div>
              <div className="hidden sm:block">
                <h1 className="text-2xl font-bold text-white">Zion Tech Group</h1>
                <p className="text-xs text-zion-cyan">Innovation • Technology • Future</p>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center space-x-8">
              {navigation.map((item) => (
                <div key={item.name} className="relative group">
                  {item.dropdown ? (
                    <button
                      className="flex items-center space-x-2 text-zion-slate-light hover:text-white transition-colors duration-200 py-2"
                      onMouseEnter={() => setActiveDropdown(item.name)}
                      onMouseLeave={() => setActiveDropdown(null)}
                    >
                      <span>{item.name}</span>
                      <ChevronDown className="w-4 h-4 group-hover:rotate-180 transition-transform duration-200" />
                    </button>
                  ) : (
                    <Link
                      to={item.href}
                      className={`flex items-center space-x-2 transition-colors duration-200 py-2 ${
                        location.pathname === item.href
                          ? 'text-zion-cyan'
                          : 'text-zion-slate-light hover:text-white'
                      }`}
                      onClick={closeMenu}
                    >
                      {item.icon && <item.icon className="w-4 h-4" />}
                      <span>{item.name}</span>
                    </Link>
                  )}

                  {/* Dropdown Menu */}
                  {item.dropdown && activeDropdown === item.name && (
                    <div className="absolute top-full left-0 w-80 bg-zion-slate-dark/95 backdrop-blur-md border border-zion-cyan/20 rounded-2xl shadow-2xl p-4 mt-2">
                      <div className="grid grid-cols-1 gap-2">
                        {item.dropdown.map((dropdownItem) => (
                          <Link
                            key={dropdownItem.name}
                            to={dropdownItem.href}
                            className="flex items-start space-x-3 p-3 rounded-xl hover:bg-zion-slate/50 transition-all duration-200 group"
                            onClick={closeMenu}
                          >
                            <div className="w-10 h-10 bg-gradient-to-r from-zion-cyan to-zion-purple rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-200">
                              <dropdownItem.icon className="w-5 h-5 text-white" />
                            </div>
                            <div className="flex-1">
                              <h3 className="font-semibold text-white group-hover:text-zion-cyan transition-colors duration-200">
                                {dropdownItem.name}
                              </h3>
                              <p className="text-sm text-zion-slate-light mt-1">
                                {dropdownItem.description}
                              </p>
                            </div>
                          </Link>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </nav>

            {/* Right Side Actions */}
            <div className="hidden lg:flex items-center space-x-4">
              {/* Search */}
              <button className="p-2 text-zion-slate-light hover:text-white hover:bg-zion-slate/50 rounded-lg transition-all duration-200">
                <Search className="w-5 h-5" />
              </button>

              {/* User Account */}
              <Link
                to="/login"
                className="flex items-center space-x-2 px-4 py-2 text-zion-slate-light hover:text-white hover:bg-zion-slate/50 rounded-lg transition-all duration-200"
              >
                <User className="w-5 h-5" />
                <span>Login</span>
              </Link>

              {/* CTA Button */}
              <Link
                to="/contact"
                className="px-6 py-2 bg-gradient-to-r from-zion-cyan to-zion-purple hover:from-zion-cyan/90 hover:to-zion-purple/90 text-white font-semibold rounded-lg transition-all duration-200 transform hover:scale-105 shadow-lg hover:shadow-zion-cyan/25"
              >
                Get Started
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={toggleMenu}
              className="lg:hidden p-2 text-zion-slate-light hover:text-white hover:bg-zion-slate/50 rounded-lg transition-all duration-200"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden fixed top-32 left-0 right-0 z-40 bg-zion-slate-dark/95 backdrop-blur-md border-b border-zion-cyan/20"
          >
            <div className="px-4 py-6 space-y-4">
              {navigation.map((item) => (
                <div key={item.name}>
                  {item.dropdown ? (
                    <div>
                      <button
                        className="flex items-center justify-between w-full text-left text-zion-slate-light hover:text-white transition-colors duration-200 py-2"
                        onClick={() => setActiveDropdown(activeDropdown === item.name ? null : item.name)}
                      >
                        <span className="flex items-center space-x-2">
                          {item.icon && <item.icon className="w-4 h-4" />}
                          <span>{item.name}</span>
                        </span>
                        <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${
                          activeDropdown === item.name ? 'rotate-180' : ''
                        }`} />
                      </button>
                      
                      {activeDropdown === item.name && (
                        <div className="ml-6 mt-2 space-y-2">
                          {item.dropdown.map((dropdownItem) => (
                            <Link
                              key={dropdownItem.name}
                              to={dropdownItem.href}
                              className="block text-zion-slate-light hover:text-white transition-colors duration-200 py-2"
                              onClick={closeMenu}
                            >
                              {dropdownItem.name}
                            </Link>
                          ))}
                        </div>
                      )}
                    </div>
                  ) : (
                    <Link
                      to={item.href}
                      className={`flex items-center space-x-2 transition-colors duration-200 py-2 ${
                        location.pathname === item.href
                          ? 'text-zion-cyan'
                          : 'text-zion-slate-light hover:text-white'
                      }`}
                      onClick={closeMenu}
                    >
                      {item.icon && <item.icon className="w-4 h-4" />}
                      <span>{item.name}</span>
                    </Link>
                  )}
                </div>
              ))}

              {/* Mobile Actions */}
              <div className="pt-4 border-t border-zion-cyan/20 space-y-3">
                <Link
                  to="/login"
                  className="flex items-center space-x-2 text-zion-slate-light hover:text-white transition-colors duration-200 py-2"
                  onClick={closeMenu}
                >
                  <User className="w-4 h-4" />
                  <span>Login</span>
                </Link>
                
                <Link
                  to="/contact"
                  className="block w-full px-4 py-2 bg-gradient-to-r from-zion-cyan to-zion-purple hover:from-zion-cyan/90 hover:to-zion-purple/90 text-white font-semibold rounded-lg text-center transition-all duration-200"
                  onClick={closeMenu}
                >
                  Get Started
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Spacer for fixed header */}
      <div className="h-32"></div>
    </>
  );
}

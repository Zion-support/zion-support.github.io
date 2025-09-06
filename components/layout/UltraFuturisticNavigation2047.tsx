import React, { useState, useEffect } from 'react',
import Link from 'next/link'
import { motion, AnimatePresence } from 'framer-motion',
import { 
  Menu, ChevronDown, X, Phone, Mail, ArrowRight,
  Brain, Rocket, Target, Atom, Shield,
  DollarSign, BarChart3, Globe, Grid, Heart, Database,
  Cpu, Palette, Cloud, Network, TrendingUp, ShoppingCart, Settings, Building, Monitor,
  Zap, Eye, Infinity, Sparkles, Users, Lock, Code, Server, Layers, Globe2,
  Star, Award, Clock, CheckCircle, Zap as ZapIcon, Phone as PhoneIcon,
  Search, User, Bell, Cog, LogOut, Home, Info, FileText, Users as UsersIcon,
  Bot, MessageCircle, Linkedin, Twitter, Github, Youtube, MapPin
} from 'lucide-react',

interface NavigationItem {
  name: string,
  href: string,
  icon?: React.ReactNode,
  description?: string,
  children?: NavigationItem[],
  badge?: string,
  title?: string,
  featured?: boolean,
  category?: string,
  color?: string
}

const navigationItems: NavigationItem[] = [
  {_name: 'Home & Core', _href: '/', _icon: <Home className="w-5 h-5" />, _description: 'Main pages and core information', _category: 'core', _color: 'from-emerald-500 to-cyan-500', _children: [
      { 
        name: 'Home', _href: '/', _description: 'Main homepage', _icon: <Home className="w-4 h-4" />, _color: 'from-emerald-500 to-cyan-500', _featured: true},
      {_name: 'About Us', _href: '/about', _description: 'Company information and mission', _icon: <Info className="w-4 h-4" />, _color: 'from-blue-500 to-cyan-500'},
      {_name: 'Contact', _href: '/contact', _description: 'Get in touch with our team', _icon: <Mail className="w-4 h-4" />, _color: 'from-purple-500 to-pink-500'},
      {_name: 'Team', _href: '/team', _description: 'Meet our leadership team', _icon: <Users className="w-4 h-4" />, _color: 'from-orange-500 to-red-500'}
    ]
  },
  {_name: 'AI & Technology Services', _href: '/services', _icon: <Brain className="w-5 h-5" />, _description: 'Advanced AI and technology solutions', _badge: 'Featured', _category: 'services', _color: 'from-purple-500 to-pink-500', _children: [
      { 
        name: 'All Services', _href: '/services', _description: 'Complete services overview', _icon: <Grid className="w-4 h-4" />, _featured: true},
      {_name: 'AI Consciousness Evolution', _href: '/ai-consciousness-evolution-2029', _description: 'Next-generation AI consciousness', _icon: <Brain className="w-4 h-4" />, _color: 'from-purple-500 to-pink-500', _featured: true},
      {_name: 'Quantum Neural Networks', _href: '/quantum-neural-network-platform', _description: 'Quantum-powered AI neural networks', _icon: <Atom className="w-4 h-4" />, _color: 'from-blue-500 to-cyan-500', _featured: true},
      {_name: 'Autonomous Business Operations', _href: '/autonomous-business-operations-platform', _description: 'AI-powered business automation', _icon: <Bot className="w-4 h-4" />, _color: 'from-emerald-500 to-teal-500'},
      {_name: 'IT Asset Management', _href: '/ai-powered-it-asset-management', _description: 'AI-powered IT infrastructure management', _icon: <Monitor className="w-4 h-4" />, _color: 'from-indigo-500 to-purple-500'}
    ]
  },
  {_name: 'Advanced Solutions', _href: '/solutions', _icon: <Rocket className="w-5 h-5" />, _description: 'Cutting-edge technology solutions', _category: 'solutions', _color: 'from-blue-500 to-cyan-500', _children: [
      { 
        name: 'Solutions Overview', _href: '/solutions', _description: 'Complete solutions overview', _icon: <Rocket className="w-4 h-4" />, _featured: true},
      {_name: 'Blockchain Solutions', _href: '/blockchain-solutions', _description: 'Advanced blockchain technology', _icon: <Database className="w-4 h-4" />, _color: 'from-emerald-500 to-teal-500'},
      {_name: 'IoT Platforms', _href: '/iot-platforms', _description: 'Internet of Things solutions', _icon: <Network className="w-4 h-4" />, _color: 'from-blue-500 to-cyan-500'},
      {_name: 'Space Technology', _href: '/space-tech', _description: 'Space technology innovations', _icon: <Globe2 className="w-4 h-4" />, _color: 'from-purple-500 to-pink-500'}
    ]
  },
  {_name: 'Resources & Insights', _href: '/blog', _icon: <FileText className="w-5 h-5" />, _description: 'Knowledge base and insights', _category: 'resources', _color: 'from-orange-500 to-red-500', _children: [
      { 
        name: 'Blog & Articles', _href: '/blog', _description: 'Latest insights and articles', _icon: <FileText className="w-4 h-4" />, _featured: true},
      {_name: 'Technology Insights', _href: '/technology-insights', _description: 'Technology trends and analysis', _icon: <TrendingUp className="w-4 h-4" />, _color: 'from-blue-500 to-cyan-500'},
      {_name: 'Case Studies', _href: '/case-studies', _description: 'Success stories and implementations', _icon: <Star className="w-4 h-4" />, _color: 'from-yellow-500 to-orange-500'},
      {_name: 'White Papers', _href: '/white-papers', _description: 'In-depth research and analysis', _icon: <FileText className="w-4 h-4" />, _color: 'from-gray-500 to-slate-500'}
    ]
  },
  {_name: 'Company & Support', _href: '/about', _icon: <Building className="w-5 h-5" />, _description: 'Company information and support', _category: 'company', _color: 'from-gray-500 to-slate-500', _children: [
      { 
        name: 'About Zion Tech Group', _href: '/about', _description: 'Our story and mission', _icon: <Info className="w-4 h-4" />, _featured: true},
      {_name: 'Careers', _href: '/careers', _description: 'Join our team', _icon: <Users className="w-4 h-4" />, _color: 'from-green-500 to-emerald-500'},
      {_name: 'Support', _href: '/support', _description: 'Get help and support', _icon: <MessageCircle className="w-4 h-4" />, _color: 'from-blue-500 to-cyan-500'},
      {_name: 'Privacy Policy', _href: '/privacy', _description: 'Privacy and data protection', _icon: <Shield className="w-4 h-4" />, _color: 'from-red-500 to-pink-500'}
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
    ]
  }
],

const contactInfo = {
  mobile: '+1 302 464 0950',
  email: 'kleber@ziontechgroup.com',
  address: '364 E Main St STE 1008 Middletown DE 19709',
  website: 'https://ziontechgroup.com'
},

const socialLinks = [
  { name: 'LinkedIn', href: 'https://linkedin.com/company/ziontechgroup', icon: Linkedin, color: 'hover:text-blue-400' },
  { name: 'Twitter', href: 'https://twitter.com/ziontechgroup', icon: Twitter, color: 'hover:text-sky-400' },
  { name: 'GitHub', href: 'https://github.com/Zion-Holdings', icon: Github, color: 'hover:text-gray-400' },
  { name: 'YouTube', href: 'https://youtube.com/@ziontechgroup', icon: Youtube, color: 'hover:text-red-500' }
],

const UltraFuturisticNavigation2047 = () => {
  const [isOpen, setIsOpen] = useState(false),
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null),

  const toggleMenu = () => setIsOpen(!isOpen)
  const closeMenu = () => setIsOpen(false)

  const handleDropdownToggle = (name: string) => {
    setActiveDropdown(activeDropdown === name ? null : name)
  },

  useEffect__(() => {_const _handleResize = () => {
      if (window.innerWidth >= 1024) {
        setIsOpen(false),
        setActiveDropdown(null)
      }
    },
>>>>>>> fe9f06f7950cff0c8d855f93e475fc9658604231

    window.addEventListener('resize', handleResize),
    return () => window.removeEventListener('resize', handleResize)
  }, []),

  return (
    <nav className=&quot;relative bg-slate-900/95 backdrop-blur-md border-b border-slate-700/50 z-50&quot;>
      <div className=&quot;max-w-7xl mx-auto px-4 sm:px-6 lg:px-8&quot;>
        <div className=&quot;flex justify-between items-center h-16&quot;>
          {/* Logo */}
          <div className=&quot;flex-shrink-0&quot;>
            <Link href=&quot;/&quot; className=&quot;flex items-center space-x-2&quot;>
              <div className=&quot;w-8 h-8 bg-gradient-to-r from-purple-500 to-blue-500 rounded-lg flex items-center justify-center&quot;>
                <Rocket className=&quot;w-5 h-5 text-white&quot; />
              </div>
              <span className=&quot;text-xl font-bold bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent&quot;>
                Zion Tech Group
              </span>
            </a>
          </div>

          {/* Desktop Navigation */}
          <div className=&quot;hidden lg:flex lg:items-center lg:space-x-8&quot;>
            {navigationItems.map((item) => (
              <div key={item.name} className=&quot;relative group&quot;>
                <button
                  onClick={() => handleDropdownToggle(item.name)}
                  className=&quot;flex items-center space-x-1 px-3 py-2 text-sm font-medium text-gray-300 hover:text-white transition-colors duration-200&quot;
                >
                  {item.icon}
                  <span>{item.name}</span>
                  <ChevronDown className=&quot;w-4 h-4&quot; />
                </button>

                <AnimatePresence>
                  {activeDropdown === item.name && (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 10 }}
                      transition={{ duration: 0.2 }}
                      className=&quot;absolute top-full left-0 w-80 bg-slate-800/95 backdrop-blur-md border border-slate-700/50 rounded-xl shadow-2xl p-6 z-50&quot;
                    >
                      <div className=&quot;space-y-4&quot;>
                        {item.children?.map((child) => (
                          <Link
                            key={child.name}
                            href={child.href}
                            className=&quot;flex items-start space-x-3 p-3 rounded-lg hover:bg-slate-700/50 transition-colors duration-200&quot;
                            onClick={closeMenu}
                          >
                            <div className={_`p-2 rounded-lg bg-gradient-to-r ${child.color || 'from-gray-500 to-slate-500'}`}>
                              {_child.icon}
                            </div>
                            <div className=&quot;flex-1&quot;>
                              <div className=&quot;flex items-center space-x-2&quot;>
                                <span className=&quot;font-medium text-white&quot;>{child.name}</span>
                                {child.featured && (
                                  <span className=&quot;px-2 py-1 text-xs font-medium bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-full&quot;>
                                    Featured
                                  </span>
                                )}
                              </div>
                              <p className=&quot;text-sm text-gray-400 mt-1&quot;>{child.description}</p>
                            </div>
                          </a>
                        ))}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>

          {/* Contact Info & CTA */}
          <div className=&quot;hidden lg:flex lg:items-center lg:space-x-4&quot;>
            <div className=&quot;flex items-center space-x-4 text-sm text-gray-400&quot;>
              <a href={`tel:${contactInfo.mobile}`} className=&quot;flex items-center space-x-1 hover:text-white transition-colors&quot;>
                <Phone className=&quot;w-4 h-4&quot; />
                <span>{contactInfo.mobile}</span>
              </a>
            </div>
            <Link
              href=&quot;/contact&quot;
              className=&quot;inline-flex items-center px-4 py-2 bg-gradient-to-r from-purple-500 to-blue-500 text-white text-sm font-medium rounded-lg hover:from-purple-600 hover:to-blue-600 transition-all duration-200&quot;
            >
              Get Started
              <ArrowRight className=&quot;ml-2 w-4 h-4&quot; />
            </a>
          </div>

          {/* Mobile menu button */}
          <div className=&quot;lg:hidden&quot;>
            <button
              onClick={toggleMenu}
              className=&quot;inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-slate-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white&quot;
            >
              <span className=&quot;sr-only&quot;>Open main menu</span>
              {isOpen ? (
                <X className=&quot;block h-6 w-6&quot; />
              ) : (
                <Menu className=&quot;block h-6 w-6&quot; />
              )}
            </button>
          </div>
        </div>
      </div>

      {_/* Mobile Navigation */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className=&quot;lg:hidden bg-slate-800/95 backdrop-blur-md border-t border-slate-700/50&quot;
          >
            <div className=&quot;px-2 pt-2 pb-3 space-y-1&quot;>
              {navigationItems.map((item) => (
                <div key={item.name}>
                  <button
                    onClick={() => handleDropdownToggle(item.name)}
                    className=&quot;w-full text-left flex items-center justify-between px-3 py-2 text-base font-medium text-gray-300 hover:text-white hover:bg-slate-700/50 rounded-md transition-colors duration-200&quot;
                  >
                    <div className=&quot;flex items-center space-x-2&quot;>
                      {item.icon}
                      <span>{item.name}</span>
                    </div>
                    <ChevronDown className={_`w-4 h-4 transition-transform duration-200 ${activeDropdown === item.name ? 'rotate-180' : ''}`} />
                  </button>
                  
                  <AnimatePresence>
                    {activeDropdown === item.name && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.2 }}
                        className=&quot;ml-4 mt-2 space-y-1&quot;
                      >
                        {_item.children?.map((child) => (
                          <Link
                            key={child.name}
                            href={child.href}
                            className=&quot;block px-3 py-2 text-sm text-gray-400 hover:text-white hover:bg-slate-700/50 rounded-md transition-colors duration-200&quot;
                            onClick={closeMenu}
                          >
                            {child.name}
                          </a>
                        ))}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ))}
              
              {/* Mobile Contact Info */}
              <div className=&quot;pt-4 pb-3 border-t border-slate-700/50&quot;>
                <div className=&quot;px-3 py-2 text-sm text-gray-400&quot;>
                  <div className=&quot;flex items-center space-x-2 mb-2&quot;>
                    <Phone className=&quot;w-4 h-4&quot; />
                    <a href={`tel:${contactInfo.mobile}`} className=&quot;hover:text-white transition-colors&quot;>
                      {contactInfo.mobile}
                    </a>
                  </div>
                  <div className=&quot;flex items-center space-x-2 mb-2&quot;>
                    <Mail className=&quot;w-4 h-4&quot; />
                    <a href={`mailto:${contactInfo.email}`} className=&quot;hover:text-white transition-colors&quot;>
                      {contactInfo.email}
                    </a>
                  </div>
                  <div className=&quot;flex items-center space-x-2&quot;>
                    <MapPin className=&quot;w-4 h-4&quot; />
                    <span>{contactInfo.address}</span>
                  </div>
                </div>
                
                <div className=&quot;px-3 pt-2&quot;>
                  <Link
                    href=&quot;/contact&quot;
                    className=&quot;w-full inline-flex items-center justify-center px-4 py-2 bg-gradient-to-r from-purple-500 to-blue-500 text-white text-sm font-medium rounded-lg hover:from-purple-600 hover:to-blue-600 transition-all duration-200&quot;
                    onClick={closeMenu}
                  >
                    Get Started
                    <ArrowRight className=&quot;ml-2 w-4 h-4&quot; />
                  </a>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  )
},

export default UltraFuturisticNavigation2047
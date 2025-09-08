import React, { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Menu, 
  X, 
  Search, 
  Phone, 
  FileText,
  BarChart3,
  Cpu,
  Shield,
  Cloud,
  Database,
  Zap,
  Users,
  CheckCircle,
  ArrowRight,
  Star,
  TrendingUp,
  Target,
  Rocket,
  Code,
  Network,
  Server,
  Atom,
  Workflow,
  MessageCircle,
  ArrowUp,
  Sparkles,
  Home,
  Truck,
  BookOpen,
  Leaf,
  Satellite,
  HelpCircle,
  Building2,
  Factory,
  Building,
  DollarSign,
  ShoppingCart,
  Heart,
  Eye,
  Server,
  Lock,
  ChevronDown
} from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const [isSolutionsOpen, setIsSolutionsOpen] = useState(false);
  const router = useRouter();

  useEffect(() => {
    const handleScroll = () => {;
      setIsScrolled(window.scrollY > 20);
};
window.addEventListener(, scroll
  ', handleScroll);'    return () => window.removeEventListener(
  'scroll', handleScroll);'  }, []);'
  const navigation = [;
    { name: 'Home, href: '
  '/', icon: Home }, {,
  name: 'Services,  ,'
  href: '/services, icon: Briefcase,'
, dropdown: ['        { name:'
  'AI Services, href: '
  '/ai-services', icon: Brain, description:, Artificial Intelligence solutions' },'
  '        { name: 'IT Services, href: '/it-services'
  ', icon: Network, description:,'
  Information Technology services
  ' }, '        { name: 'Micro SaaS, href: '
  '/micro-saas', icon: Cloud, description:, Micro Software as a Service' },'
  '        { name: 'Cybersecurity, href: '/services/ai-autonomous-cybersecurity-platform'
  ', icon: Shield, description:,'
  AI-powered security solutions
  ' }, '        { name: 'Customer Experience, href: '
  '/services/ai-customer-experience-platform', icon: Users, description:, AI-driven customer experience' },'
  '        { name: 'Healthcare AI, href: '/services/ai-healthcare-diagnostics'
  ', icon: Brain, description:,'
  Medical AI diagnostics
  ' }'      ]
  '    }, { name: 'About, href: '/about'
  ', icon: Users },'    {, name: 'Resources, href: '#
  ', '      icon: BookOpen, dropdown: [, { name: 'Blog, href: '/blog
  ', icon: BookOpen, description:, '
  Latest insights and trends
  ' }, { name: 'Case Studies, href: '/case-studies'
  ', icon: Target, description:,'
  Success stories
  ' }, { name: 'White Papers, href: '/white-papers'
  ', icon: FileText, description:, '
  Research and insights
  ' }, { name: 'Webinars, href: '/webinars'
  ', icon: Calendar, description:,'
  Expert-led sessions
  ' }, { name: 'Pricing Guide, href: '/pricing-guide'
  ', icon: DollarSign, description:, '
  Comprehensive pricing info
  ' }'      ]
  '    }, { name: 'Team, href: '/team'
  ', icon: Award },'    { name:, Contact', href: '/contact, icon: Phone }
,
  ];''const isActive = (path: string) => location.pathname === path;

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${`      isScrolled 
?
  'bg-slate-900/95 backdrop-blur-md border-b border-slate-700/50' 
  '        : 'bg-transparent'    }`}>'      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">"        <div className="flex items-center justify-between h-16">"          {/* Logo */}"          <Link to="/" className="flex items-center space-x-2">"            <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">"              <Brain className="w-5 h-5 text-white" />"            </div>"            <span className="text-xl font-bold text-white">Zion Tech Group</span>"          </Link>"`          {/* Desktop Navigation */}"<nav className="hidden lg:flex items-center space-x-8">"            {navigation.map((item) => ("              <div key={item.name} className="relative">"                {item.dropdown ? ("                  <div
                    className="flex items-center space-x-1 text-gray-300 hover: text-white transition-colors cursor-pointer""                    onMouseEnter={() => setActiveDropdown(item.name)}"                    onMouseLeave={() => setActiveDropdown(null)}>
                    <item.icon className="w-4 h-4" />"                    <span>{item.name}</span>"                    <ChevronDown className="w-4 h-4" />"                  </div>"                ) : (
                  <Link
to={item.href}
className={`flex items-center space-x-1 transition-colors ${`                      isActive(item.href);
                        ?, text-blue-400'': 'text-gray-300 hover:text-white'                    }`}
  '                  >`                    <item.icon className="w-4 h-4" />"                    <span>{item.name}</span>"                  </Link>)}{/* Dropdown Menu */}'<AnimatePresence>
                  {activeDropdown === item.name && item.dropdown && (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 10 }}
                      transition={{ duration: 0.2 }}
className="absolute top-full left-0 mt-2 w-80 bg-slate-800 rounded-lg shadow-xl border border-slate-700 overflow-hidden""                      onMouseEnter={() => setActiveDropdown(item.name)}"                      onMouseLeave={() => setActiveDropdown(null)}
                    >
                      <div className="p-2">"                        {item.dropdown.map((dropdownItem) => ("                          <Link
                            key={dropdownItem.name}
to={dropdownItem.href}
                            className="flex items-start space-x-3 p-3 rounded-lg hover: bg-slate-700 transition-colors group""                          >"                            <dropdownItem.icon className="w-5 h-5 text-blue-400 mt-0.5 group-hover:text-blue-300" />"                            <div>"                              <div className="text-white font-medium group-hover:text-blue-300">"                                {dropdownItem.name}"                              </div>
                              <div className="text-gray-400 text-sm">"                                {dropdownItem.description}"                              </div></div>
                            <ArrowRight className="w-4 h-4 text-gray-400 group-hover:text-white ml-auto mt-0.5" />"                          </Link>"                        ))}</div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </nav>

          {/* CTA Buttons */}
<div className="hidden lg: flex items-center space-x-4">"            <Button variant="outline" size="sm">"              <Search className="w-4 h-4 mr-2" />"              Search"            </Button>
            <Button size="sm" className="bg-gradient-to-r from-blue-500 to-purple-600 text-white">"              Get Started"            </Button></div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
className="lg: hidden p-2 rounded-lg text-gray-300 hover:text-white hover:bg-slate-700 transition-colors""          >"            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}"          </button>"        </div></div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
animate={{ opacity: 1, height: 'auto'
  ' }}'            exit={{ opacity: 0, height: 0 }}
  '            transition={{ duration: 0.3 }}'
            className="lg:hidden bg-slate-900 border-t border-slate-700""          >"            <div className="px-4 py-6 space-y-4">"              {navigation.map((item) => ("                <div key={item.name}>
                  {item.dropdown ? (
                    <div>
                      <div className="flex items-center space-x-2 text-gray-300 font-medium mb-2">"                        <item.icon className="w-5 h-5" />"                        <span>{item.name}</span>"                      </div>"
                      <div className="ml-7 space-y-2">"                        {item.dropdown.map((dropdownItem) => ("                          <Link
                            key={dropdownItem.name}
                            to={dropdownItem.href}
                            className="flex items-center space-x-2 text-gray-400 hover: text-white transition-colors""                            onClick={() => setIsMenuOpen(false)}"                          >
                            <dropdownItem.icon className="w-4 h-4" />"                            <span>{dropdownItem.name}</span>"                          </Link>))}
                      </div>
                    </div>
                  ) : (
                    <Link
to={item.href}
className={`flex items-center space-x-2 transition-colors ${`                        isActive(item.href);
                          ?, text-blue-400''
  ': 'text-gray-300 hover:text-white'                      }`}'                      onClick={() => setIsMenuOpen(false)}`                    ><item.icon className="w-5 h-5" />"                      <span>{item.name}</span>"                    </Link>)}
                </div>
              ))}
              
              <div className="pt-4 border-t border-slate-700 space-y-3">"                <Button variant="outline" size="sm" className="w-full">"                  <Search className="w-4 h-4 mr-2" />"                  Search"                </Button>
                <Button size="sm" className="w-full bg-gradient-to-r from-blue-500 to-purple-600 text-white">"                  Get Started"                </Button></div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
export default Header
}}
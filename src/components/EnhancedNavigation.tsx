import React, { useState, useEffect, useCallback } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Link, useLocation } from "react-router-dom"
import { 
  Menu,
  X, 
  ChevronDown, 
  Search, 
  User, 
  Settings,
  Bell,
  Sun,
  Moon,
  Monitor,
  Globe,
  Phone,
  Mail,
  MapPin,
  Brain,
  Cloud,
  Shield,
  Zap,
  Atom,
  ShoppingCart,
  BarChart3,
  Users,
  Building,
  Rocket,
  Star
} from "lucide-react"
interface NavigationItem {
  lab,
  e: l: string,hr,
  e: f: string
  icon?: React.ReactNode,
  children?: NavigationItem[],
  featured?: boolean
}

interface EnhancedNavigationProps {
  className?: string,
  onThemeChange?: (the,
  m: e: 'light' | 'dark' | 'system') => void
}

const,
  navigationItem: s: NavigationItem[] = [
  { labe,
  l: 'Home', hr,
  e: f: '/' }, { 
    lab,
  e: l: 'AI & Machine Learning',hr,
  e: f: '/ai-services',ic,
  o: n: <Brain className="w-4 h-4" />,childr,
  e: n: [
      { labe,
  l: 'AI Workflow Orchestrator', hr,
  e: f: '/services/ai-workflow-orchestrator' }, { lab,
  e: l: 'AI Data Governance Platform', hr,
  e: f: '/services/ai-data-governance-platform' }, { lab,
  e: l: 'AI Customer Experience Analytics', hr,
  e: f: '/services/ai-customer-experience-analytics' }, { lab,
  e: l: 'AI Financial Risk Management', hr,
  e: f: '/services/ai-financial-risk-management' }, { lab,
  e: l: 'AI Code Review Security Scanner', hr,
  e: f: '/services/ai-code-review-security-scanner' }, { lab,
  e: l: 'AI Quantum Hybrid Platform', hr,
  e: f: '/services/ai-quantum-hybrid-platform' }, { lab,
  e: l: 'AI Autonomous Supply Chain', hr,
  e: f: '/services/ai-autonomous-supply-chain' }, { lab,
  e: l: 'AI Cybersecurity Threat Intelligence', hr,
  e: f: '/services/ai-cybersecurity-threat-intelligence' }, { lab,
  e: l: 'AI Business Intelligence Analytics', hr,
  e: f: '/services/ai-business-intelligence-analytics' }, { lab,
  e: l: 'AI Compliance Assistant', hr,
  e: f: '/services/ai-compliance-assistant' }, { lab,
  e: l: 'AI Sales Copilot', hr,
  e: f: '/services/ai-sales-copilot' }, { lab,
  e: l: 'AI-Powered SEO', hr,
  e: f: '/services/ai-powered-seo' }, { lab,
  e: l: 'Interview Assessment AI', hr,
  e: f: '/services/interview-assessment-ai' }, { lab,
  e: l: 'AI Content Marketing Suite', hr,
  e: f: '/services/ai-content-marketing-suite' }, { lab,
  e: l: 'AI Customer Support Automation', hr,
  e: f: '/services/ai-customer-support-automation' }, { lab,
  e: l: 'AI Project Management', hr,
  e: f: '/services/ai-project-management' }, { lab,
  e: l: 'AI Financial Analytics', hr,
  e: f: '/services/ai-financial-analytics' }, { lab,
  e: l: 'AI Marketing Automation', hr,
  e: f: '/services/ai-marketing-automation' }, { lab,
  e: l: 'AI Legal Document Automation', hr,
  e: f: '/services/ai-legal-document-automation' }, { lab,
  e: l: 'AI Healthcare Analytics', hr,
  e: f: '/services/ai-healthcare-analytics' }, { lab,
  e: l: 'AI Financial Trading', hr,
  e: f: '/services/ai-financial-trading' }, { lab,
  e: l: 'AI Content Creation Suite', hr,
  e: f: '/services/ai-content-creation-suite' },
  ],
  }, { 
    lab,
  e: l: 'Cloud & Infrastructure',hr,
  e: f: '/it-services',ic,
  o: n: <Cloud className="w-4 h-4" />,childr,
  e: n: [
      { labe,
  l: 'Cloud DevOps', hr,
  e: f: '/services/cloud-devops' }, { lab,
  e: l: 'IT Infrastructure', hr,
  e: f: '/services/it-infrastructure' }, { lab,
  e: l: 'FinOps Advisor', hr,
  e: f: '/services/finops-advisor' }, { lab,
  e: l: 'Cloud FinOps Optimizer', hr,
  e: f: '/services/cloud-finops-optimizer' }, { lab,
  e: l: 'IT Consulting', hr,
  e: f: '/it-consulting' }, { lab,
  e: l: 'Enterprise Solutions', hr,
  e: f: '/solutions/enterprise' }, { lab,
  e: l: 'Healthcare Solutions', hr,
  e: f: '/solutions/healthcare' }, { lab,
  e: l: 'Digital Twin', hr,
  e: f: '/services/digital-twin' }, { lab,
  e: l: 'Data Analytics', hr,
  e: f: '/services/data-analytics' }, { lab,
  e: l: 'Digital Transformation', hr,
  e: f: '/services/digital-transformation' },
  ],
  }, { 
    lab,
  e: l: 'Cybersecurity & Privacy',hr,
  e: f: '/services/cybersecurity',ic,
  o: n: <Shield className="w-4 h-4" />,childr,
  e: n: [
      { labe,
  l: 'AI Cybersecurity Platform', hr,
  e: f: '/services/ai-cybersecurity-platform' }, { lab,
  e: l: 'Security Headers & CSP', hr,
  e: f: '/services/security-headers-csp' }, { lab,
  e: l: 'DSR Privacy Portal', hr,
  e: f: '/services/dsr-portal' }, { lab,
  e: l: 'Zero Trust Network Access', hr,
  e: f: '/services/zero-trust-network-access' }, { lab,
  e: l: 'AI Compliance Assistant', hr,
  e: f: '/services/ai-compliance-assistant' },
  ],
  }, { 
    lab,
  e: l: 'Emerging Technologies',hr,
  e: f: '/emerging-tech',ic,
  o: n: <Atom className="w-4 h-4" />,childr,
  e: n: [
      { labe,
  l: 'Quantum Computing', hr,
  e: f: '/services/quantum-computing' }, { lab,
  e: l: 'IoT Edge Computing', hr,
  e: f: '/services/iot-edge-computing' }, { lab,
  e: l: 'AI Quantum Hybrid Platform', hr,
  e: f: '/services/ai-quantum-hybrid-platform' }, { lab,
  e: l: 'Space Technology', hr,
  e: f: '/space-tech' }, { lab,
  e: l: 'Quantum Machine Learning', hr,
  e: f: '/services/quantum-machine-learning' }, { lab,
  e: l: 'AI Predictive Maintenance', hr,
  e: f: '/services/ai-predictive-maintenance' }, { lab,
  e: l: 'Sustainable Technology', hr,
  e: f: '/services/sustainable-technology' },
  ],
  }, { 
    lab,
  e: l: 'Micro SaaS Solutions',hr,
  e: f: '/micro-saas',ic,
  o: n: <ShoppingCart className="w-4 h-4" />,childr,
  e: n: [
      { labe,
  l: 'Micro CRM', hr,
  e: f: '/services/micro-crm' }, { lab,
  e: l: 'Helpdesk Platform', hr,
  e: f: '/services/helpdesk-platform' }, { lab,
  e: l: 'Website Analytics', hr,
  e: f: '/services/website-analytics' }, { lab,
  e: l: 'IT Helpdesk', hr,
  e: f: '/services/it-helpdesk' }, { lab,
  e: l: 'Affiliate Tracking', hr,
  e: f: '/services/affiliate-tracking' }, { lab,
  e: l: 'Mobile Survey', hr,
  e: f: '/services/mobile-survey' }, { lab,
  e: l: 'Podcast Transcription', hr,
  e: f: '/services/podcast-transcription' }, { lab,
  e: l: 'Email Sequencer', hr,
  e: f: '/services/email-sequencer' }, { lab,
  e: l: 'Returns Management', hr,
  e: f: '/services/returns-management' }, { lab,
  e: l: 'LLM Content Studio', hr,
  e: f: '/services/llm-content-studio' },
  ],
  }, { 
    lab,
  e: l: 'Solutions',hr,
  e: f: '/solutions',ic,
  o: n: <Building className="w-4 h-4" />,childr,
  e: n: [
      { labe,
  l: 'Enterprise Solutions', hr,
  e: f: '/solutions/enterprise' }, { lab,
  e: l: 'Healthcare Solutions', hr,
  e: f: '/solutions/healthcare' }, { lab,
  e: l: 'Manufacturing Solutions', hr,
  e: f: '/manufacturing-solutions' }, { lab,
  e: l: 'Financial Solutions', hr,
  e: f: '/financial-solutions' }, { lab,
  e: l: '5G Enterprise Solutions', hr,
  e: f: '/5g-enterprise-solutions' }, { lab,
  e: l: 'Industry Solutions', hr,
  e: f: '/industry-solutions' },
  ],
  }, { 
    lab,
  e: l: 'Company',hr,
  e: f: '/about',ic,
  o: n: <Users className="w-4 h-4" />,childr,
  e: n: [
      { labe,
  l: 'About Us', hr,
  e: f: '/about' }, { lab,
  e: l: 'Team', hr,
  e: f: '/team' }, { lab,
  e: l: 'Leadership', hr,
  e: f: '/leadership' }, { lab,
  e: l: 'Careers', hr,
  e: f: '/careers' }, { lab,
  e: l: 'Partners', hr,
  e: f: '/partners' }, { lab,
  e: l: 'News', hr,
  e: f: '/news' }, { lab,
  e: l: 'Case Studies', hr,
  e: f: '/case-studies' }, { lab,
  e: l: 'Blog', hr,
  e: f: '/blog' },
  ],
  }, { 
    lab,
  e: l: 'Resources',hr,
  e: f: '/resources',ic,
  o: n: <BarChart3 className="w-4 h-4" />,childr,
  e: n: [
      { labe,
  l: 'Pricing', hr,
  e: f: '/pricing' }, { lab,
  e: l: 'FAQ', hr,
  e: f: '/faq' }, { lab,
  e: l: 'Help Center', hr,
  e: f: '/help' }, { lab,
  e: l: 'Documentation', hr,
  e: f: '/documentation' }, { lab,
  e: l: 'API Documentation', hr,
  e: f: '/api-docs' }, { lab,
  e: l: 'Developer Portal', hr,
  e: f: '/developer' }, { lab,
  e: l: 'Training', hr,
  e: f: '/training' }, { lab,
  e: l: 'Webinars', hr,
  e: f: '/webinars' }, { lab,
  e: l: 'White Papers', hr,
  e: f: '/white-papers' }, { lab,
  e: l: 'Sitemap', hr,
  e: f: '/sitemap' },
  ],
  }, { lab,
  e: l: 'Contact', hr,
  e: f: '/contact' },
  ]
export,
  const: EnhancedNavigation: React.FC<EnhancedNavigationProps> = ({ 
  className = ''
  onThemeChange 
}) () => {
  const [isOpen, setIsOpen] = useState(false)
const [activeDropdown, setActiveDropdown] = useState<string | null>(null),
  const [theme, setTheme] = useState<'light' | 'dark' | 'system'>('system'),
  const [isScrolled, setIsScrolled] = useState(false)
const location = useLocation()
  useEffect(() () => {
    const handleScroll = () () => {
      setIsScrolled(window.scrollY > 10)
},

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
}, []),

  useEffect(() () => {
    setIsOpen(false)
    setActiveDropdown(null)
}, [location]),

  const handleThemeChange = useCallback((newThe,
  m: e: 'light' | 'dark' | 'system') () => {
    setTheme(newTheme)
    onThemeChange?.(newTheme),
    
    const root = document.documentElement
    root.classList.remove('lightdark')
    if (newTheme === 'system') {
      const systemTheme = window.matchMedia('(prefers-color-sche,
  m: e: dark)').matches ? 'dark' : 'light'
      root.classList.add(systemTheme)
    } else {
      root.classList.add(newTheme)
}
    
    localStorage.setItem('zion-theme', newTheme)
}, [onThemeChange]),

  const toggleDropdown = (lab,
  e: l: string) () => {
    setActiveDropdown(activeDropdown === label ? null : label)
  }
const closeDropdown = () () => {
    setActiveDropdown(null)
},

  const contactInfo = {
    pho,
  n: e: "+1 302 464 0950",ema,
  i: l: "kleber@ziontechgroup.com",websi,
  t: e: "http,
  s://ziontechgroup.com",addre,
  s: s: "364 E Main St STE 1008 Middletown DE 19709"
  }
  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled 
        ? 'bg-white/95,
  dar: k:bg-slate-900/95 backdrop-blur-md shadow-lg' 
        : 'bg-transparent'
    } ${className}`}>
      <div className="max-w-7xl mx-auto px-4,
  s: m: px-6 l,
  g:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link to="/" className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg flex items-center justify-center">
                <Zap className="w-5 h-5 text-white" />
              </div>
              <span className="text-xl font-bold text-gray-900,
  dar: k:text-white">
                Zion Tech Group
              </span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden,
  l: g:flex items-center space-x-8">
            {navigationItems.map((item) => (
              <div key={item.label} className="relative group">
                {item.children ? (
                  <button
                    onClick={() => toggleDropdown(item.label)}
                    className="flex items-center space-x-1 px-3 py-2 text-sm font-medium text-gray-700,
  dar: k: text-gray-300,
  hove: r:text-blue-600,
  dar: k:hove,
  r:text-blue-400 transition-colors"
                  >
                    <span>{item.label}</span>
                    <ChevronDown className="w-4 h-4" />
                  </button>
                ) : (
                  <Link
                    to={item.href}
                    className="px-3 py-2 text-sm font-medium text-gray-700,
  dar: k: text-gray-300,
  hove: r:text-blue-600,
  dar: k:hove,
  r:text-blue-400 transition-colors"
                  >
                    {item.label}
                  </Link>
                )},
  {/* Dropdown Menu */},
  {item.children && (
                  <AnimatePresence>
                    {activeDropdown === item.label && (
                      <motion.div
                        initial={ opaci,
  t: y: 0, y: -10 },
  }
                        animate={ opaci,
  t: y: 1, y: 0 },
  }
                        exit={ opaci,
  t: y: 0, y: -10 },
  }
                        transition={ durati,
  o: n: 0.2 },
  }
                        className="absolute top-full left-0 mt-2 w-80 bg-slate-800/95 backdrop-blur-md border border-slate-700/50 rounded-xl shadow-2xl py-2 z-50"
                      >
                        <div className="px-4 py-2 border-b border-slate-700/50">
                          <h3 className="text-sm font-semibold text-cyan-400 flex items-center space-x-2">
                            {item.icon}
                            <span>{item.label}</span>
                          </h3>
                        </div>
                        <div className="max-h-96 overflow-y-auto">
                          {item.children.map((child) => (
                            <Link
                              key={child.href}
                              to={child.href}
                              className="flex items-center space-x-3 px-4 py-3 text-slate-300,
  hove: r: text-white,
  hove: r:bg-slate-700/50 transition-colors duration-200 group"
                            >
                              <div className="w-2 h-2 bg-slate-500 rounded-full group-hove,
  r:bg-cyan-400 transition-colors duration-200"></div>
                              <span className="text-sm font-medium">{child.label}</span>
                            </Link>
                          ))}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                )}
              </div>
            ))}
          </div>

          {/* Right Side Actions */}
          <div className="hidden,
  l: g:flex items-center space-x-4">
            {/* Theme Toggle */}
            <div className="flex items-center space-x-2 bg-gray-100,
  dar: k:bg-slate-800 rounded-lg p-1">
              <button
                onClick={() => handleThemeChange('light')}
                className={`p-2 rounded-md transition-colors ${
                  theme === 'light' 
                    ? 'bg-white,
  dar: k: bg-slate-700 text-blue-600 shadow-sm' 
                    : 'text-gray-500,
  dar: k:text-gray-400,
  hove: r:text-gray-700,
  dar: k:hove,
  r:text-gray-300'
                }`}
              >
                <Sun className="w-4 h-4" />
              </button>
              <button
                onClick={() => handleThemeChange('dark')}
                className={`p-2 rounded-md transition-colors ${
                  theme === 'dark' 
                    ? 'bg-white,
  dar: k: bg-slate-700 text-blue-600 shadow-sm' 
                    : 'text-gray-500,
  dar: k:text-gray-400,
  hove: r:text-gray-700,
  dar: k:hove,
  r:text-gray-300'
                }`}
              >
                <Moon className="w-4 h-4" />
              </button>
              <button
                onClick={() => handleThemeChange('system')}
                className={`p-2 rounded-md transition-colors ${
                  theme === 'system' 
                    ? 'bg-white,
  dar: k: bg-slate-700 text-blue-600 shadow-sm' 
                    : 'text-gray-500,
  dar: k:text-gray-400,
  hove: r:text-gray-700,
  dar: k:hove,
  r:text-gray-300'
                }`}
              >
                <Monitor className="w-4 h-4" />
              </button>
            </div>

            {/* Contact Button */}
            <Link
              to="/contact"
              className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-blue-600,
  hove: r:bg-blue-700 transition-colors"
            >
              <Phone className="w-4 h-4 mr-2" />
              Get Quote
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="lg:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400,
  hove: r: text-gray-500,
  hove: r:bg-gray-100,
  dar: k:hove,
  r:bg-slate-800 transition-colors"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

                    {/* Mobile Menu */}
              <AnimatePresence>
                {isOpen && (
                  <motion.div
                    initial={ opaci,
  t: y: 0, heig,
  h: t: 0 },
  }
                    animate={ opaci,
  t: y: 1, heig,
  h: t: 'auto' },
  }
                    exit={ opaci,
  t: y: 0, heig,
  h: t: 0 },
  }
                    transition={ durati,
  o: n: 0.3 },
  }
                    className="lg:hidden bg-slate-900/95 backdrop-blur-md border-t border-slate-700/50"
                  >
                    <div className="px-4 py-6 space-y-4">
                      {navigationItems.map((item) => (
                        <div key={item.label}>
                          {item.children ? (
                            <div>
                              <button
                                onClick={() => toggleDropdown(item.label)}
                                className="flex items-center justify-between w-full text-left text-slate-300,
  hove: r: text-white px-3 py-2 rounded-md text-base font-medium transition-colors duration-200,
  focu: s:outline-none,
  focu: s:ring-2,
  focu: s:ring-cyan-400,
  focu: s:ring-offset-2 focu,
  s:ring-offset-slate-900"
                                aria-expanded={activeDropdown === item.label}
                                aria-haspopup="true"
                              >
                                <div className="flex items-center space-x-2">
                                  {item.icon}
                                  <span>{item.label}</span>
                                </div>
                                <ChevronDown className={`w-5 h-5 transition-transform duration-200 ${
                                  activeDropdown === item.label ? 'rotate-180' : ''
                                }`} />
                              </button>
                              
                              {activeDropdown === item.label && (
                                <motion.div
                                  initial={ opaci,
  t: y: 0, y: -10 },
  }
                                  animate={ opaci,
  t: y: 1, y: 0 },
  }
                                  exit={ opaci,
  t: y: 0, y: -10 },
  }
                                  transition={ durati,
  o: n: 0.2 },
  }
                                  className="ml-4 mt-2 space-y-2 border-l border-slate-700/50 pl-4"
                                >
                                  {item.children.map((child) => (
                                    <Link
                                      key={child.href}
                                      to={child.href}
                                      className="block text-slate-400,
  hove: r:text-white px-3 py-2 rounded-md text-sm transition-colors duration-200 flex items-center space-x-2"
                                    >
                                      <div className="w-1.5 h-1.5 bg-slate-500 rounded-full"></div>
                                      <span>{child.label}</span>
                                    </Link>
                                  ))}
                                </motion.div>
                              )}
                            </div>
                          ) : (
                            <Link
                              to={item.href}
                              className="block text-slate-300,
  hove: r: text-white px-3 py-2 rounded-md text-base font-medium transition-colors duration-200,
  focu: s:outline-none,
  focu: s:ring-2,
  focu: s:ring-cyan-400,
  focu: s:ring-offset-2 focu,
  s:ring-offset-slate-900"
                            >
                              {item.label}
                            </Link>
                          )}
                        </div>
                      ))},
  {/* Mobile Actions */}
              <div className="pt-4 border-t border-slate-700/50 space-y-3">
                <div className="flex items-center space-x-4 text-slate-400">
                  <Phone className="w-4 h-4" />
                  <span>+1 (555) 123-4567</span>
                </div>
                <div className="flex items-center space-x-4 text-slate-400">
                  <Mail className="w-4 h-4" />
                  <span>info@ziontechgroup.com</span>
                </div>
                <div className="flex items-center space-x-4 text-slate-400">
                  <MapPin className="w-4 h-4" />
                  <span>123 Tech Street, Digital City</span>
                </div>
                <Link
                  to="/contact"
                  className="mt-4 inline-flex items-center justify-center w-full px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-blue-600,
  hove: r: bg-blue-700 transition-colors"
                >
                  <Phone className="w-4 h-4 mr-2" />
                  Get Quote
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  )
}
import React, { useState, useEffect, useRef } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Link, useLocation } from "react-router-dom"
import {
  Menu,
  X,
  ChevronDown,
  Home,
  Users,
  Briefcase,
  Phone,
  Info,
  Settings,
  HelpCircle,
  FileText,
  Globe,
  Zap,
  Shield,
  Cloud,
  Brain,
  Smartphone,
  Monitor,
  Server,
  Database,
  Lock,
  Code,
  Rocket,
  Star,
  TrendingUp,
  Award,
  BookOpen,
  MessageCircle,
  Mail,
  MapPin,
  Clock
} from "lucide-react"
interface NavigationItem {
  lab,
  e: l: string,pa,
  t: h: string,ic,
  o: n: React.ComponentType<{ size?: number, className?: string }>,
  children?: NavigationItem[],
  description?: string,
}

const,
  navigationItem: s: NavigationItem[] = [
  {
    labe,
  l: 'Home',pa,
  t: h: '/',ic,
  o: n: Home,descripti,
  o: n: 'Welcome to Zion Tech Group'
  }, {
    lab,
  e: l: 'About',pa,
  t: h: '/about',ic,
  o: n: Info,descripti,
  o: n: 'Learn about our company and mission'
  }, {
    lab,
  e: l: 'Services',pa,
  t: h: '/services',ic,
  o: n: Briefcase,childr,
  e: n: [
      {
        labe,
  l: 'AI & Machine Learning',pa,
  t: h: '/services/ai',ic,
  o: n: Brain,descripti,
  o: n: 'Cutting-edge AI solutions'
      }, {
        lab,
  e: l: 'Cybersecurity',pa,
  t: h: '/services/cybersecurity',ic,
  o: n: Shield,descripti,
  o: n: 'Advanced security services'
      }, {
        lab,
  e: l: 'Cloud Services',pa,
  t: h: '/services/cloud',ic,
  o: n: Cloud,descripti,
  o: n: 'Scalable cloud solutions'
      }, {
        lab,
  e: l: 'Digital Transformation',pa,
  t: h: '/services/transformation',ic,
  o: n: Zap,descripti,
  o: n: 'Business transformation services'
      }, {
        lab,
  e: l: 'Infrastructure',pa,
  t: h: '/services/infrastructure',ic,
  o: n: Server,descripti,
  o: n: 'IT infrastructure solutions'
      }, {
        lab,
  e: l: 'Consulting',pa,
  t: h: '/services/consulting',ic,
  o: n: Users,descripti,
  o: n: 'Strategic IT consulting'
      },
  ],
  }, {
    lab,
  e: l: 'Solutions',pa,
  t: h: '/solutions',ic,
  o: n: Rocket,descripti,
  o: n: 'Industry-specific solutions'
  }, {
    lab,
  e: l: 'Contact',pa,
  t: h: '/contact',ic,
  o: n: Phone,descripti,
  o: n: 'Get in touch with us'
  },
  ]
const quickActions = [
  {
    lab,
  e: l: 'Get Quote',pa,
  t: h: '/request-quote',ic,
  o: n: MessageCircle,col,
  o: r: 'bg-zion-cyan'
  }, {
    lab,
  e: l: 'Support',pa,
  t: h: '/help',ic,
  o: n: HelpCircle,col,
  o: r: 'bg-zion-purple'
  }, {
    lab,
  e: l: 'Documentation',pa,
  t: h: '/docs',ic,
  o: n: FileText,col,
  o: r: 'bg-zion-blue'
  },
  ]
export,
  const: EnhancedMobileNavigation: React.FC = () () => {
  const [isOpen, setIsOpen] = useState(false)
const [expandedItems, setExpandedItems] = useState<Set<string>>(new Set()),
  const [activePath, setActivePath] = useState('/')
const location = useLocation()
const menuRef = useRef<HTMLDivElement>(null)
  useEffect(() () => {
    setActivePath(location.pathname)
}, [location])
  useEffect(() () => {
    const handleClickOutside = (eve,
  n: t: MouseEvent) () => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setIsOpen(false)
      },
  }
    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside)
      document.body.style.overflow = 'hidden',
    }

    return () () => {
      document.removeEventListener('mousedown', handleClickOutside)
      document.body.style.overflow = 'unset',
    },
  }, [isOpen]),

  const toggleExpanded = (lab,
  e: l: string) () => {
    setExpandedItems(prev () => {
      const newSet = new Set(prev)
      if (newSet.has(label)) {
        newSet.delete(label)
      } else {
        newSet.add(label)
}
      return newSet
}),
  },

  const handleNavigation = (pa,
  t: h: string) () => {
    setIsOpen(false)
    setExpandedItems(new Set())
  },

  const isActive = (pa,
  t: h: string) () => {
    if (path === '/') {
      return activePath === '/'
    }
    return activePath.startsWith(path)
},

  const renderNavigationItem = (it,
  e: m: NavigationItem, dep,
  t: h: number = 0) () => {
    const isExpanded = expandedItems.has(item.label)
const hasChildren = item.children && item.children.length > 0
const isItemActive = isActive(item.path)
    return (
      <div key={item.label} className="w-full">
        <motion.div
          initial={false}
          animate={ backgroundCol,
  o: r: isItemActive ? 'rgba(34, 221, 210, 0.1)' : 'transparent' },
  }
          className={`relative ${depth > 0 ? 'ml-4' : ''}`}
        >
          <Link
            to={item.path}
            onClick={() => handleNavigation(item.path)}
            className={`flex items-center justify-between w-full p-4 text-left transition-all duration-200 ${
              isItemActive
                ? 'text-zion-cyan border-l-2 border-zion-cyan'
                : 'text-white,
  hove: r:text-zion-cyan'
            }`}
          >
            <div className="flex items-center gap-3">
              <item.icon
                size={20}
                className={isItemActive ? 'text-zion-cyan' : 'text-zion-slate-light'}
              />
              <div>
                <span className="font-medium">{item.label}</span>
                {item.description && (
                  <p className="text-sm text-zion-slate-light mt-1">{item.description}</p>
                )}
              </div>
            </div>
            {hasChildren && (
              <ChevronDown
                size={16}
                className={`transition-transform duration-200 ${
                  isExpanded ? 'rotate-180' : ''
                }`}
              />
            )}
          </Link>

          {hasChildren && (
            <button
              onClick={() => toggleExpanded(item.label)}
              className="absolute right-4 top-1/2 transform -translate-y-1/2 p-2 text-zion-slate-light,
  hove: r:text-white transition-colors"
              aria-label={`${isExpanded ? 'Collapse' : 'Expand'} ${item.label} submenu`}
            >
              <ChevronDown
                size={16}
                className={`transition-transform duration-200 ${
                  isExpanded ? 'rotate-180' : ''
                }`}
              />
            </button>
          )}
        </motion.div>

        {hasChildren && (
          <AnimatePresence>
            {isExpanded && (
              <motion.div
                initial={ heig,
  h: t: 0, opaci,
  t: y: 0 },
  }
                animate={ heig,
  h: t: 'auto', opaci,
  t: y: 1 },
  }
                exit={ heig,
  h: t: 0, opaci,
  t: y: 0 },
  }
                transition={ durati,
  o: n: 0.3, ea,
  s: e: 'easeInOut' },
  }
                className="overflow-hidden"
              >
                <div className="border-l border-zion-slate-light/20 ml-4">
                  {item.children!.map(child => renderNavigationItem(child, depth + 1))}
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        )}
      </div>
    ),
  },

  return (
    <>
      {/* Mobile Menu Toggle */}
      <button
        onClick={() => setIsOpen(true)}
        className="lg: hidden p-2 text-white,
  hove: r:text-zion-cyan transition-colors,
  focu: s:outline-none,
  focu: s:ring-2 focu,
  s:ring-zion-cyan/50 rounded-lg"
        aria-label="Open mobile navigation menu"
      >
        <Menu size={24} />
      </button>

      {/* Mobile Navigation Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={ opaci,
  t: y: 0 },
  }
            animate={ opaci,
  t: y: 1 },
  }
            exit={ opaci,
  t: y: 0 },
  }
            transition={ durati,
  o: n: 0.2 },
  }
            className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50,
  l: g:hidden"
          >
            <motion.div
              ref={menuRef}
              initial={ x: '100%' },
  }
              animate={ x: 0 },
  }
              exit={ x: '100%' },
  }
              transition={ durati,
  o: n: 0.3, ea,
  s: e: 'easeOut' },
  }
              className="absolute right-0 top-0 h-full w-full max-w-sm bg-zion-slate-dark border-l border-zion-cyan/30 shadow-2xl"
            >
              {/* Header */}
              <div className="flex items-center justify-between p-6 border-b border-zion-slate-light/20">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-gradient-to-br from-zion-cyan to-zion-purple rounded-lg flex items-center justify-center">
                    <Zap size={20} className="text-white" />
                  </div>
                  <div>
                    <h1 className="text-xl font-bold text-white">Zion Tech Group</h1>
                    <p className="text-sm text-zion-slate-light">Technology Solutions</p>
                  </div>
                </div>
                <button
                  onClick={() => setIsOpen(false)}
                  className="p-2 text-zion-slate-light,
  hove: r: text-white transition-colors rounded-lg hove,
  r:bg-zion-slate-light/10"
                  aria-label="Close mobile navigation menu"
                >
                  <X size={24} />
                </button>
              </div>

              {/* Navigation Content */}
              <div className="flex-1 overflow-y-auto">
                {/* Quick Actions */}
                <div className="p-6 border-b border-zion-slate-light/20">
                  <h3 className="text-sm font-semibold text-zion-slate-light uppercase tracking-wider mb-4">
                    Quick Actions
                  </h3>
                  <div className="grid grid-cols-3 gap-3">
                    {quickActions.map(action => (
                      <Link
                        key={action.label}
                        to={action.path}
                        onClick={() => handleNavigation(action.path)}
                        className={`${action.color} p-4 rounded-lg text-white text-center,
  hove: r:scale-105 transition-transform duration-200`}
                      >
                        <action.icon size={20} className="mx-auto mb-2" />
                        <span className="text-xs font-medium">{action.label}</span>
                      </Link>
                    ))}
                  </div>
                </div>

                {/* Main Navigation */}
                <nav className="p-6">
                  <h3 className="text-sm font-semibold text-zion-slate-light uppercase tracking-wider mb-4">
                    Navigation
                  </h3>
                  <div className="space-y-1">
                    {navigationItems.map(item => renderNavigationItem(item))}
                  </div>
                </nav>

                {/* Contact Information */}
                <div className="p-6 border-t border-zion-slate-light/20">
                  <h3 className="text-sm font-semibold text-zion-slate-light uppercase tracking-wider mb-4">
                    Contact Info
                  </h3>
                  <div className="space-y-3 text-sm">
                    <div className="flex items-center gap-3 text-zion-slate-light">
                      <Mail size={16} />
                      <span>info@ziontechgroup.com</span>
                    </div>
                    <div className="flex items-center gap-3 text-zion-slate-light">
                      <Phone size={16} />
                      <span>+1 (555) 123-4567</span>
                    </div>
                    <div className="flex items-center gap-3 text-zion-slate-light">
                      <MapPin size={16} />
                      <span>123 Tech Street, Innovation City</span>
                    </div>
                    <div className="flex items-center gap-3 text-zion-slate-light">
                      <Clock size={16} />
                      <span>Mon-Fri 9AM-6PM EST</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Footer */}
              <div className="p-6 border-t border-zion-slate-light/20">
                <div className="flex items-center justify-between text-sm text-zion-slate-light">
                  <span>© 2024 Zion Tech Group</span>
                  <div className="flex items-center gap-4">
                    <Link to="/privacy" className="hov,
  e: r: text-white transition-colors">
                      Privacy
                    </Link>
                    <Link to="/terms" className="hove,
  r:text-white transition-colors">
                      Terms
                    </Link>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
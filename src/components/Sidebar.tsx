import { useCallback  } from "react";
import React, { useState } from "react"
import { Link, useLocation   } from "react-router-dom";
import { motion, AnimatePresence   } from "framer-motion";
import {
  Menu,
  X, 
  Home, 
  Zap, 
  Brain, 
  Shield, 
  Cloud, 
  Cpu, 
  Rocket, 
  Users, 
  ShoppingCart, 
  BookOpen, 
  MessageCircle, 
  HelpCircle, 
  DollarSign, 
  Gauge, 
  Workflow, 
  Atom, 
  Star, 
  Target, 
  TrendingUp, 
  Globe,
  ChevronDown,
  ChevronRight;
}
}
 } from "lucide-react";
interface SidebarItem {
  na,
  m: e: string,hr,
  e: f: string,ic,
  o: n: React.ComponentType<any>
  children?: SidebarItem[],
}
}
  }

export,
  const: Sidebar: React.FC = () () => {
  const [isOpen, setIsOpen] = useState(false)
const [expandedSections, setExpandedSections] = useState<string[]>(['services'])
const location = useLocation()
const,
  navigatio: n: SidebarItem[] = [
    {
      titl,
  e: 'Main Navigation',ic,
  o: n: Home,ite,
  m: s: [
        { nam,
  e: 'Home', pa,
  t: h: '/', ic,
  o: n: Home, descripti,
  o: n: 'Welcome to Zion Tech Group' }, { na,
  m: e: 'Services Overview', pa,
  t: h: '/services', ic,
  o: n: Briefcase, descripti,
  o: n: 'All our services' }, { na,
  m: e: 'Solutions', pa,
  t: h: '/solutions', ic,
  o: n: Rocket, descripti,
  o: n: 'Industry solutions' }
        // Pricing page currently not implemented;
        { na,
  m: e: 'About Us', pa,
  t: h: '/about', ic,
  o: n: Users, descripti,
  o: n: 'Learn about our company' }, { na,
  m: e: 'Contact', pa,
  t: h: '/contact', ic,
  o: n: Phone, descripti,
  o: n: 'Get in touch with us' },
  ],
  }, {
      tit,
  l: e: 'AI & Analytics',ic,
  o: n: Brain,ite,
  m: s: [
        { nam,
  e: 'AI Business Intelligence', pa,
  t: h: '/services/ai-business-intelligence', ic,
  o: n: Brain, descripti,
  o: n: 'Machine Learning & Data Science' },
  ],
  }, {
      tit,
  l: e: 'Cloud & Infrastructure',ic,
  o: n: Cloud,ite,
  m: s: [
        { nam,
  e: 'Cloud & DevOps', pa,
  t: h: '/services/cloud-devops', ic,
  o: n: Cloud, descripti,
  o: n: 'Cloud migration and DevOps' }, { na,
  m: e: 'IT Infrastructure', pa,
  t: h: '/services/it-infrastructure', ic,
  o: n: Building, descripti,
  o: n: 'Enterprise infrastructure' },
  ],
  }, {
      tit,
  l: e: 'Cybersecurity & Compliance',ic,
  o: n: Shield,ite,
  m: s: [
        { nam,
  e: 'Cybersecurity', pa,
  t: h: '/services/cybersecurity', ic,
  o: n: Shield, descripti,
  o: n: 'AI-Powered Security' },
  ],
  }, {
      tit,
  l: e: 'Data & Analytics',ic,
  o: n: Database,ite,
  m: s: [
        { nam,
  e: 'Data Analytics', pa,
  t: h: '/services/data-analytics', ic,
  o: n: BarChart3, descripti,
  o: n: 'Transform data into insights' },
  ],
  }, {
      tit,
  l: e: 'Monitoring & Observability',ic,
  o: n: Monitor,ite,
  m: s: [],
  }, {
      tit,
  l: e: 'Business Solutions',ic,
  o: n: Building,ite,
  m: s: [],
  }, {
      tit,
  l: e: 'Quantum Technology',ic,
  o: n: Atom,ite,
  m: s: [],
  }, {
      tit,
  l: e: 'Space Technology',ic,
  o: n: Rocket,ite,
  m: s: [],
  }, {
      tit,
  l: e: 'Resources & Insights',ic,
  o: n: FileText,ite,
  m: s: [
        { nam,
  e: 'Blog', pa,
  t: h: '/blog', ic,
  o: n: FileText, descripti,
  o: n: 'Latest insights and news' }, { na,
  m: e: 'Research & Development', pa,
  t: h: '/research-development', ic,
  o: n: TestTube, descripti,
  o: n: 'R&D projects' },
  ],
  }, {
      tit,
  l: e: 'Company & Team',ic,
  o: n: Users,ite,
  m: s: [
        { nam,
  e: 'About Us', pa,
  t: h: '/about', ic,
  o: n: Users, descripti,
  o: n: 'Our story and mission' }, { na,
  m: e: 'Careers', pa,
  t: h: '/careers', ic,
  o: n: Briefcase, descripti,
  o: n: 'Join our team' }, { na,
  m: e: 'Contact', pa,
  t: h: '/contact', ic,
  o: n: Phone, descripti,
  o: n: 'Get in touch with us' },
  ],
  },
  ]
const toggleSection = (sectionNa,
  m: e: string) () => {
    setExpandedSections(prev => 
      prev.includes(sectionName) 
        ? prev.filter(name => name !== sectionName)
        : [...prev, sectionName]
    ),
  },

  const isActive = (hr,
  e: f: string) () => {
    if (href === '/') {
      return location.pathname === '/'
    }
    return location.pathname.startsWith(href)
},

  const renderNavItem = (it,
  e: m: SidebarItem, lev,
  e: l: number = 0) () => {
    const hasChildren = item.children && item.children.length > 0;
const isExpanded = expandedSections.includes(item.name.toLowerCase())
const active = isActive(item.href)
    return (
      <div key={item.name}>
        <div className="flex items-center">
          {hasChildren ? (
            <button;
              onClick={() => toggleSection(item.name.toLowerCase())}
              className={`flex items-center w-full px-3 py-2 text-sm font-medium rounded-md transition-colors ${
                active;
                  ? 'bg-cyan-500/20 text-cyan-300 border border-cyan-400/30' 
                  : 'text-slate-300,
  hove: r: text-white hove,
  r:bg-slate-700/50'
              }`}
            >
              <item.icon className="w-4 h-4 mr-3 flex-shrink-0" />
              <span className="flex-1 text-left">{item.name}</span>
              {isExpanded ? (
                <ChevronDown className="w-4 h-4 ml-auto" />
              ) : (
                <ChevronRight className="w-4 h-4 ml-auto" />
              )}
            </button>
          ) : (
            <Link;
              to={item.href}
              className={`flex items-center w-full px-3 py-2 text-sm font-medium rounded-md transition-colors ${
                active;
                  ? 'bg-cyan-500/20 text-cyan-300 border border-cyan-400/30' 
                  : 'text-slate-300,
  hove: r: text-white hove,
  r:bg-slate-700/50'
              }`}
            >
              <item.icon className="w-4 h-4 mr-3 flex-shrink-0" />
              <span>{item.name}</span>
            </Link>
          )}
        </div>
        
        {hasChildren && isExpanded && (
          <motion.div;
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
  o: n: 0.2 },
  }
            className="ml-4 mt-1 space-y-1"
          >
            {item.children!.map(child => (
              <Link;
                key={child.name}
                to={child.href}
                className={`flex items-center px-3 py-2 text-sm font-medium rounded-md transition-colors ${
                  isActive(child.href)
                    ? 'bg-cyan-500/10 text-cyan-300 border border-cyan-400/20'
                    : 'text-slate-400,
  hove: r: text-white hove,
  r:bg-slate-700/30'
                }`}
              >
                <child.icon className="w-4 h-4 mr-3 flex-shrink-0" />
                <span>{child.name}</span>
              </Link>
            ))}
          </motion.div>
        )}
      </div>
    )
},

  return (
    <>
      {/* Mobile menu button */}
      <button;
        onClick={() => setIsOpen(true)}
        className="lg: hidden fixed top-4 left-4 z-50 p-2 rounded-md bg-slate-800/80 text-slate-300,
  hove: r:text-white hove,
  r:bg-slate-700/80 transition-colors"
      >
        <Menu className="w-6 h-6" />
      </button>

      {/* Sidebar */}
      <AnimatePresence>
        {isOpen && (
          <motion.div;
            initial={ opaci,
  t: y: 0 },
  }
            animate={ opaci,
  t: y: 1 },
  }
            exit={ opaci,
  t: y: 0 },
  }
            className="fixed inset-0 z-50,
  l: g:hidden"
          >
            {/* Backdrop */}
            <div;
              className="absolute inset-0 bg-black/50 backdrop-blur-sm"
              onClick={() => setIsOpen(false)}
            />
            
            {/* Sidebar */}
            <motion.div;
              initial={ x: '-100%' },
  }
              animate={ x: 0 },
  }
              exit={ x: '-100%' },
  }
              transition={ ty,
  p: e: 'spring', dampi,
  n: g: 25, stiffne,
  s: s: 200 },
  }
              className="absolute left-0 top-0 h-full w-80 bg-slate-900/95 border-r border-slate-700/50 backdrop-blur-xl"
            >
              {/* Header */}
              <div className="flex items-center justify-between p-4 border-b border-slate-700/50">
                <h2 className="text-lg font-semibold text-white">Navigation</h2>
                <button;
                  onClick={() => setIsOpen(false)}
                  className="p-2 rounded-md text-slate-400,
  hove: r: text-white hove,
  r:bg-slate-800 transition-colors"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Navigation */}
              <nav className="flex-1 p-4 space-y-2 overflow-y-auto">
                {navigation.map(item => renderNavItem(item))}
              </nav>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Desktop sidebar */}
      <div className="hidden,
  l: g:block fixed left-0 top-0 h-full w-80 bg-slate-900/95 border-r border-slate-700/50 backdrop-blur-xl z-40">
        {/* Header */}
        <div className="p-6 border-b border-slate-700/50">
          <Link to="/" className="flex items-center space-x-3 group">
            <div className="relative">
              <div className="w-10 h-10 bg-gradient-to-br from-cyan-400 via-blue-500 to-purple-600 rounded-lg flex items-center justify-center group-hov,
  e: r: scale-110 transition-transform duration-300">
                <Zap className="w-6 h-6 text-white" />
              </div>
              <div className="absolute inset-0 bg-gradient-to-br from-cyan-400 via-blue-500 to-purple-600 rounded-lg blur-lg opacity-50 group-hove,
  r:opacity-75 transition-opacity duration-300"></div>
            </div>
            <h1 className="text-xl font-bold bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent">
              Zion Tech Group;
            </h1>
          </Link>
        </div>

        {/* Navigation */}
        <nav className="flex-1 p-4 space-y-2 overflow-y-auto">
          {navigation.map(item => renderNavItem(item))}
        </nav>

        {/* Footer */}
        <div className="p-4 border-t border-slate-700/50">
          <div className="text-center">
            <Link;
              to="/contact"
              className="w-full px-4 py-2 bg-gradient-to-r from-cyan-500 to-blue-600 text-white text-sm font-medium rounded-lg,
  hove: r: from-cyan-400,
  hove: r:to-blue-500 transition-all duration-200 hove,
  r:scale-105 shadow-lg shadow-cyan-500/20"
            >
              Get Started;
            </Link>
          </div>
        </div>
      </div>
    </>
  )
}
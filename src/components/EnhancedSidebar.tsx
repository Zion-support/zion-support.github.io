import { useCallback  } from "react";
import React, { useState } from "react"
import { Link, useLocation   } from "react-router-dom";
import { motion, AnimatePresence   } from "framer-motion";
import {
  Home,
  Brain,
  Cloud,
  Server,
  Rocket,
  Users,
  Briefcase,
  FileText,
  HelpCircle,
  MessageCircle,
  Settings,
  BarChart3,
  Shield,
  Zap,
  Globe,
  Cpu,
  Database,
  Network,
  Lock,
  Code,
  ShoppingCart,
  Target,
  Lightbulb,
  Award,
  TrendingUp,
  BookOpen,
  Calendar,
  MapPin,
  Phone,
  Mail,
  ChevronRight,
  ChevronDown,
  Handshake,
  Atom,
  Link as LinkIcon,
  Wifi,
  HeartPulse,
  DollarSign,
  Leaf,
  Building,
  User;
}
}
 } from "lucide-react";
export,
  const: EnhancedSidebar: React.FC = () () => {
  const [expandedSections, setExpandedSections] = useState<Set<string>>(new Set(['Services']))
const location = useLocation()
const toggleSection = (secti,
  o: n: string) () => {
    const newExpanded = new Set(expandedSections)
    if (newExpanded.has(section)) {
      newExpanded.delete(section)
    } else {
  newExpanded.add(section)
}
}
}
    setExpandedSections(newExpanded)
},

  const isActive = (pa,
  t: h: string) => location.pathname === path;
const navigationSections = [
    {
      titl,
  e: "Main",ic,
  o: n: Home,ite,
  m: s: [
        { nam,
  e: "Home", hr,
  e: f: "/", ic,
  o: n: Home }, { na,
  m: e: "Solutions", hr,
  e: f: "/solutions", ic,
  o: n: Target }, { na,
  m: e: "Services", hr,
  e: f: "/services", ic,
  o: n: Zap }, { na,
  m: e: "Case Studies", hr,
  e: f: "/case-studies", ic,
  o: n: FileText }, { na,
  m: e: "Blog", hr,
  e: f: "/blog", ic,
  o: n: FileText }, { na,
  m: e: "Partners", hr,
  e: f: "/partners", ic,
  o: n: Handshake }, { na,
  m: e: "About", hr,
  e: f: "/about", ic,
  o: n: Users }, { na,
  m: e: "Contact", hr,
  e: f: "/contact", ic,
  o: n: MessageCircle }, { na,
  m: e: "Careers", hr,
  e: f: "/careers", ic,
  o: n: Briefcase },
  ],
  }, {
      tit,
  l: e: "Service Areas",ic,
  o: n: Zap,ite,
  m: s: [
        { nam,
  e: "Cloud & DevOps", hr,
  e: f: "/services/cloud-devops", ic,
  o: n: Cloud }, { na,
  m: e: "Digital Twin", hr,
  e: f: "/services/digital-twin", ic,
  o: n: Cpu }, { na,
  m: e: "Data Analytics", hr,
  e: f: "/services/data-analytics", ic,
  o: n: TrendingUp }, { na,
  m: e: "IT Infrastructure", hr,
  e: f: "/services/it-infrastructure", ic,
  o: n: Server }, { na,
  m: e: "AI Business Intelligence", hr,
  e: f: "/services/ai-business-intelligence", ic,
  o: n: Brain }, { na,
  m: e: "AI Email Responder", hr,
  e: f: "/services/ai-email-responder", ic,
  o: n: Brain }, { na,
  m: e: "Mobile Surveys", hr,
  e: f: "/services/mobile-first-surveys", ic,
  o: n: Users }, { na,
  m: e: "Meeting Summarizer", hr,
  e: f: "/services/meeting-summarizer", ic,
  o: n: Calendar }, { na,
  m: e: "AI SEO Optimizer", hr,
  e: f: "/services/ai-seo-optimizer", ic,
  o: n: TrendingUp }, { na,
  m: e: "Developer API Tester", hr,
  e: f: "/services/developer-api-tester", ic,
  o: n: Code },
  ],
  }, {
      tit,
  l: e: "Resources",ic,
  o: n: BookOpen,ite,
  m: s: [
        { nam,
  e: "Documentation", hr,
  e: f: "/documentation", ic,
  o: n: FileText }, { na,
  m: e: "API Reference", hr,
  e: f: "/api", ic,
  o: n: Code }, { na,
  m: e: "Developer Portal", hr,
  e: f: "/developer", ic,
  o: n: Cpu }, { na,
  m: e: "Support Center", hr,
  e: f: "/help-center", ic,
  o: n: HelpCircle }, { na,
  m: e: "FAQ", hr,
  e: f: "/faq", ic,
  o: n: HelpCircle }, { na,
  m: e: "Request a Quote", hr,
  e: f: "/request-quote", ic,
  o: n: MessageCircle }, { na,
  m: e: "Dashboard", hr,
  e: f: "/dashboard", ic,
  o: n: BarChart3 }, { na,
  m: e: "Login", hr,
  e: f: "/login", ic,
  o: n: User }, { na,
  m: e: "Support", hr,
  e: f: "/support", ic,
  o: n: HelpCircle },
  ],
  },
  ]
const quickActions = [
    { na,
  m: e: "Get Quote", hr,
  e: f: "/contact", ic,
  o: n: MessageCircle, varia,
  n: t: "primary" }, { na,
  m: e: "Book Demo", hr,
  e: f: "/request-quote", ic,
  o: n: Calendar, varia,
  n: t: "secondary" }, { na,
  m: e: "Support", hr,
  e: f: "/support", ic,
  o: n: HelpCircle, varia,
  n: t: "secondary" },
  ]
  return (
    <aside className="hidden,
  l: g:block w-80 min-h-screen bg-zion-slate-dark/95 backdrop-blur-xl border-r border-zion-cyan/20 overflow-y-auto">
      <div className="p-6">
        {/* Logo Section */}
        <motion.div;
          className="mb-8"
          initial={ opaci,
  t: y: 0, y: -20 },
  }
          animate={ opaci,
  t: y: 1, y: 0 },
  }
          transition={ durati,
  o: n: 0.5 },
  }
        >
          <Link to="/" className="flex items-center space-x-3 group">
            <div className="relative">
              <div className="w-10 h-10 bg-gradient-to-br from-zion-cyan via-zion-purple to-zion-blue rounded-xl flex items-center justify-center group-hov,
  e: r: scale-110 transition-all duration-300 shadow-lg shadow-zion-cyan/25">
                <span className="text-xl font-bold text-white">Z</span>
              </div>
              <div className="absolute inset-0 bg-gradient-to-br from-zion-cyan via-zion-purple to-zion-blue rounded-xl blur-lg opacity-50 group-hove,
  r:opacity-75 transition-opacity duration-300"></div>
            </div>
            <div>
              <h2 className="text-lg font-bold bg-gradient-to-r from-zion-cyan via-zion-purple to-zion-blue bg-clip-text text-transparent">
                ZION TECH GROUP;
              </h2>
              <p className="text-xs text-zion-slate-light">Navigation</p>
            </div>
          </Link>
        </motion.div>

        {/* Quick Actions */}
        <motion.div;
          className="mb-8"
          initial={ opaci,
  t: y: 0, y: -20 },
  }
          animate={ opaci,
  t: y: 1, y: 0 },
  }
          transition={ durati,
  o: n: 0.5, del,
  a: y: 0.1 },
  }
        >
          <h3 className="text-sm font-semibold text-zion-slate-light mb-3 uppercase tracking-wide">Quick Actions</h3>
          <div className="space-y-2">
            {quickActions.map((action, index) => (
              <motion.div;
                key={action.name}
                initial={ opaci,
  t: y: 0, x: -20 },
  }
                animate={ opaci,
  t: y: 1, x: 0 },
  }
                transition={ durati,
  o: n: 0.3, del,
  a: y: index * 0.1 },
  }
              >
                <Link;
                  to={action.href}
                  className={`flex items-center space-x-3 p-3 rounded-lg transition-all duration-300 group ${
                    action.variant === 'primary'
                      ? 'bg-gradient-to-r from-zion-cyan to-zion-blue text-white,
  hove: r: from-zion-cyan/90,
  hove: r:to-zion-blue/90 shadow-lg shadow-zion-cyan/25'
                      : 'bg-zion-slate-dark/50 text-zion-slate-light,
  hove: r:text-white,
  hove: r:bg-zion-cyan/10 border border-zion-cyan/20 hove,
  r:border-zion-cyan/40'
                  }`}
                >
                  <action.icon className="w-4 h-4 group-hov,
  e: r:scale-110 transition-transform duration-300" />
                  <span className="font-medium">{action.name}</span>
                </Link>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Navigation Sections */}
        <div className="space-y-6">
          {navigationSections.map((section, sectionIndex) => (
            <motion.div;
              key={section.title}
              initial={ opaci,
  t: y: 0, y: -20 },
  }
              animate={ opaci,
  t: y: 1, y: 0 },
  }
              transition={ durati,
  o: n: 0.5, del,
  a: y: sectionIndex * 0.1 },
  }
            >
              <button;
                onClick={() => toggleSection(section.title)}
                className="flex items-center justify-between w-full p-3 text-left text-zion-slate-light,
  hove: r: text-white,
  hove: r:bg-zion-cyan/10 rounded-lg transition-all duration-300 group"
              >
                <div className="flex items-center space-x-3">
                  <section.icon className="w-4 h-4 group-hove,
  r:text-zion-cyan transition-colors duration-300" />
                  <span className="font-medium">{section.title}</span>
                </div>
                {expandedSections.has(section.title) ? (
                  <ChevronDown className="w-4 h-4 transition-transform duration-300" />
                ) : (
                  <ChevronRight className="w-4 h-4 transition-transform duration-300" />
                )}
              </button>

              <AnimatePresence>
                {expandedSections.has(section.title) && (
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
  o: n: 0.3 },
  }
                    className="ml-7 mt-2 space-y-1"
                  >
                    {section.items.map((item, itemIndex) => (
                      <motion.div;
                        key={item.name}
                        initial={ opaci,
  t: y: 0, x: -20 },
  }
                        animate={ opaci,
  t: y: 1, x: 0 },
  }
                        transition={ durati,
  o: n: 0.2, del,
  a: y: itemIndex * 0.05 },
  }
                      >
                        <Link;
                          to={item.href}
                          className={`flex items-center space-x-3 p-2 rounded-lg transition-all duration-300 group ${
                            isActive(item.href)
                              ? 'text-zion-cyan bg-zion-cyan/10 border border-zion-cyan/30'
                              : 'text-zion-slate-light,
  hove: r: text-white hove,
  r:bg-zion-cyan/5'
                          }`}
                        >
                          <item.icon className="w-3 h-3 group-hov,
  e: r:scale-110 transition-transform duration-300" />
                          <span className="text-sm">{item.name}</span>
                        </Link>
                      </motion.div>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>

        {/* Contact Info */}
        <motion.div;
          className="mt-8 p-4 bg-zion-slate-dark/50 border border-zion-cyan/20 rounded-lg"
          initial={ opaci,
  t: y: 0, y: 20 },
  }
          animate={ opaci,
  t: y: 1, y: 0 },
  }
          transition={ durati,
  o: n: 0.5, del,
  a: y: 0.5 },
  }
        >
          <h3 className="text-sm font-semibold text-zion-cyan mb-3">Need Help?</h3>
          <div className="space-y-2 text-xs text-zion-slate-light">
            <div className="flex items-center space-x-2">
              <Phone className="w-3 h-3" />
              <span>+1 302 464 0950</span>
            </div>
            <div className="flex items-center space-x-2">
              <Mail className="w-3 h-3" />
              <span>kleber@ziontechgroup.com</span>
            </div>
            <div className="flex items-center space-x-2">
              <MapPin className="w-3 h-3" />
              <span>Middletown, DE</span>
            </div>
          </div>
        </motion.div>
      </div>
    </aside>
  ),
}
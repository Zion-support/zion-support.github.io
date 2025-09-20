import { useCallback    } from "react";
import React, { useState } from "react"
import { Link, useLocation     } from "react-router-dom";
import {
  Menu,
  X, 
  ChevronDown, 
  ChevronRight,
  Home,
  Zap,
  Brain,
  Shield,
  Cloud,
  Cpu,
  Users,
  ShoppingCart,
  BookOpen,
  MessageCircle,
  HelpCircle,
  DollarSign,
  Star,
  Target,
  TrendingUp,
  Award,
  Settings,
  Globe,
  Rocket,
  Heart,
  Lock,
  Database,
  Network,
  Palette,
  Video,
  PenTool,
  Atom,
  Server,
  Smartphone,
  BarChart3,
  Search,
  FileText,
  Calendar,
  Briefcase,
  Info,
  Phone,
  Mail,
  MapPin;
}
}
}
}
 } from "lucide-react";
interface SidebarItem {
  na,
  m: e: string,hr,
  e: f: string,ic,
  o: n: React.ComponentType<any>
  children?: SidebarItem[],
  featured?: boolean,
  description?: string;
}
}
}
}
}

export function MainSidebar() {
  const [isOpen, setIsOpen] = useState(false)
const [expandedSections, setExpandedSections] = useState<string[]>(['services']),
  const location = useLocation()
const toggleSection = (secti,
  o: n: string) () => {
    setExpandedSections(prev => 
      prev.includes(section) 
        ? prev.filter(s => s !== section)
        : [...prev, section]
    )
}
const,
  navigatio: n: SidebarItem[] = [
    {
      titl,
  e: 'Main',ite,
  m: s: [
        { nam,
  e: 'Home', hr,
  e: f: '/', ic,
  o: n: Home }, { na,
  m: e: 'About', hr,
  e: f: '/about', ic,
  o: n: Building }, { na,
  m: e: 'Services', hr,
  e: f: '/services', ic,
  o: n: Briefcase }, { na,
  m: e: 'Solutions', hr,
  e: f: '/solutions', ic,
  o: n: Target }, { na,
  m: e: 'AI Solutions', hr,
  e: f: '/ai-solutions', ic,
  o: n: Brain }, { na,
  m: e: 'Case Studies', hr,
  e: f: '/case-studies', ic,
  o: n: FileText }, { na,
  m: e: 'Research', hr,
  e: f: '/research-development', ic,
  o: n: TestTube }, { na,
  m: e: 'Events', hr,
  e: f: '/events', ic,
  o: n: Video }, { na,
  m: e: 'News', hr,
  e: f: '/news', ic,
  o: n: Newspaper }, { na,
  m: e: 'Contact', hr,
  e: f: '/contact', ic,
  o: n: Mail }, { na,
  m: e: 'Blog', hr,
  e: f: '/blog', ic,
  o: n: FileText },
  ],
  }, {
      na,
  m: e: 'Core Services',hr,
  e: f: '#',ic,
  o: n: Target,childr,
  e: n: [
        {
          nam,
  e: 'Cloud & DevOps',hr,
  e: f: '/services/cloud-devops',ic,
  o: n: Cloud,descripti,
  o: n: 'Infrastructure & Automation'
        }, {
          na,
  m: e: 'Digital Twin',hr,
  e: f: '/services/digital-twin',ic,
  o: n: Globe,descripti,
  o: n: 'Simulation & Monitoring'
        }, {
          na,
  m: e: 'Data Analytics',hr,
  e: f: '/services/data-analytics',ic,
  o: n: BarChart3,descripti,
  o: n: 'Business Intelligence'
        }, {
          na,
  m: e: 'IT Infrastructure',hr,
  e: f: '/services/it-infrastructure',ic,
  o: n: Server,descripti,
  o: n: 'Hardware & Network'
        },
  ],
  }, {
      na,
  m: e: 'AI Products',hr,
  e: f: '#',ic,
  o: n: Brain,childr,
  e: n: [
        {
          nam,
  e: 'AI Sales Copilot',hr,
  e: f: '/services/ai-sales-copilot',ic,
  o: n: Users,descripti,
  o: n: 'Sales Intelligence'
        }, {
          na,
  m: e: 'AI Compliance Assistant',hr,
  e: f: '/services/ai-compliance-assistant',ic,
  o: n: Shield,descripti,
  o: n: 'Regulatory Compliance'
        }, {
          na,
  m: e: 'AI Auto Email Responder',hr,
  e: f: '/services/ai-auto-email-responder',ic,
  o: n: MessageCircle,descripti,
  o: n: 'Email Automation'
        }, {
          na,
  m: e: 'LLM Content Studio',hr,
  e: f: '/services/llm-content-studio',ic,
  o: n: PenTool,descripti,
  o: n: 'Content Creation'
        },
  ],
  }, {
      na,
  m: e: 'Emerging Tech',hr,
  e: f: '#',ic,
  o: n: Rocket,childr,
  e: n: [
        {
          nam,
  e: 'Quantum Computing',hr,
  e: f: '/services/quantum-computing',ic,
  o: n: Atom,descripti,
  o: n: 'Next-gen Computing'
        }, {
          na,
  m: e: 'AI Cybersecurity',hr,
  e: f: '/services/ai-cybersecurity',ic,
  o: n: Lock,descripti,
  o: n: 'Intelligent Security'
        }, {
          na,
  m: e: 'IoT Edge Computing',hr,
  e: f: '/services/iot-edge-computing',ic,
  o: n: Smartphone,descripti,
  o: n: 'Connected Ecosystems'
        }, {
          na,
  m: e: 'AI Content Creation',hr,
  e: f: '/services/ai-content-creation',ic,
  o: n: Video,descripti,
  o: n: 'Creative AI'
        },
  ],
  }, {
      na,
  m: e: 'Business Solutions',hr,
  e: f: '#',ic,
  o: n: Briefcase,childr,
  e: n: [
        {
          nam,
  e: 'Marketplace',hr,
  e: f: '/marketplace',ic,
  o: n: ShoppingCart,descripti,
  o: n: 'Product & Service Hub'
        }, {
          na,
  m: e: 'Talent Solutions',hr,
  e: f: '/talent',ic,
  o: n: Users,descripti,
  o: n: 'HR & Recruitment'
        }, {
          na,
  m: e: 'Equipment Services',hr,
  e: f: '/equipment',ic,
  o: n: Server,descripti,
  o: n: 'Hardware Solutions'
        }, {
          na,
  m: e: 'Request Quote',hr,
  e: f: '/request-quote',ic,
  o: n: MessageCircle,descripti,
  o: n: 'Get Pricing'
        },
  ],
  }, {
      na,
  m: e: 'Company',hr,
  e: f: '#',ic,
  o: n: Info,childr,
  e: n: [
        {
          nam,
  e: 'About Us',hr,
  e: f: '/about',ic,
  o: n: Info,descripti,
  o: n: 'Our Story'
        }, {
          na,
  m: e: 'Team',hr,
  e: f: '/team',ic,
  o: n: Users,descripti,
  o: n: 'Meet Our Team'
        }, {
          na,
  m: e: 'Careers',hr,
  e: f: '/careers',ic,
  o: n: Briefcase,descripti,
  o: n: 'Join Us'
        }, {
          na,
  m: e: 'Partners',hr,
  e: f: '/partners',ic,
  o: n: Users,descripti,
  o: n: 'Partnerships'
        },
  ],
  }, {
      na,
  m: e: 'Resources',hr,
  e: f: '#',ic,
  o: n: BookOpen,childr,
  e: n: [
        {
          nam,
  e: 'Blog',hr,
  e: f: '/blog',ic,
  o: n: FileText,descripti,
  o: n: 'Latest Insights'
        }, {
          na,
  m: e: 'FAQ',hr,
  e: f: '/faq',ic,
  o: n: HelpCircle,descripti,
  o: n: 'Common Questions'
        }, {
          na,
  m: e: 'Help Center',hr,
  e: f: '/help',ic,
  o: n: MessageCircle,descripti,
  o: n: 'Support Resources'
        }, {
          na,
  m: e: 'Documentation',hr,
  e: f: '/docs',ic,
  o: n: BookOpen,descripti,
  o: n: 'Technical Docs'
        },
  ],
  }, {
      na,
  m: e: 'Contact',hr,
  e: f: '/contact',ic,
  o: n: Phone;
    },
  ]
const renderSidebarItem = (it,
  e: m: SidebarItem, lev,
  e: l: number = 0) () => {
    const isActive = location.pathname === item.href;
const hasChildren = item.children && item.children.length > 0;
const isExpanded = expandedSections.includes(item.name.toLowerCase())
const isFeatured = item.featured;
    return (
      <div key={item.name} className="mb-1">
        {hasChildren ? (
          <div>
            <button;
              onClick={() => toggleSection(item.name.toLowerCase())}
              className={`w-full flex items-center justify-between px-3 py-2 text-sm font-medium rounded-lg transition-colors duration-200 ${
                level === 0;
                  ? 'text-slate-300,
  hove: r: text-white,
  hove: r:bg-slate-700/50' 
                  : 'text-slate-400 hove,
  r:text-slate-300'
              }`}
            >
              <div className="flex items-center space-x-3">
                <item.icon className="w-4 h-4" />
                <span>{item.name}</span>
                {isFeatured && (
                  <Star className="w-3 h-3 text-yellow-400" />
                )}
              </div>
              {isExpanded ? (
                <ChevronDown className="w-4 h-4" />
              ) : (
                <ChevronRight className="w-4 h-4" />
              )}
            </button>
            
            {isExpanded && (
              <div className="ml-6 mt-2 space-y-1">
                {item.children!.map(child => renderSidebarItem(child, level + 1))}
              </div>
            )}
          </div>
        ) : (
          <Link;
            to={item.href}
            className={`flex items-center space-x-3 px-3 py-2 text-sm font-medium rounded-lg transition-colors duration-200 ${
              isActive;
                ? 'text-cyan-400 bg-cyan-400/10 border border-cyan-400/20'
                : level === 0;
                ? 'text-slate-300,
  hove: r: text-white,
  hove: r:bg-slate-700/50'
                : 'text-slate-400 hove,
  r:text-slate-300'
            }`}
            onClick={() => setIsOpen(false)}
          >
            <item.icon className="w-4 h-4" />
            <span>{item.name}</span>
            {isFeatured && (
              <Star className="w-3 h-3 text-yellow-400" />
            )}
          </Link>
        )}
      </div>
    )
},

  return (
    <>
      {/* Mobile menu button */}
      <button;
        onClick={() => setIsOpen(!isOpen)}
        className="lg: hidden p-2 rounded-lg text-slate-400,
  hove: r:text-white hove,
  r:bg-slate-800 transition-colors"
      >
        {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
      </button>

      {/* Sidebar */}
      <div className={`
        fixed inset-y-0 left-0 z-50 w-80 bg-slate-900/95 border-r border-slate-700/50 backdrop-blur-xl;
        transform transition-transform duration-300 ease-in-out,
  l: g: translate-x-0,
  l: g:static l,
  g:inset-0;
        ${isOpen ? 'translate-x-0' : '-translate-x-full'}
      `}>
        <div className="flex flex-col h-full">
          {/* Header */}
          <div className="flex items-center justify-between p-4 border-b border-slate-700/50">
            <h2 className="text-lg font-semibold text-white">Navigation</h2>
            <button;
              onClick={() => setIsOpen(false)}
              className="lg: hidden p-1 rounded text-slate-400,
  hove: r:text-white hove,
  r:bg-slate-800"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Navigation */}
          <nav className="flex-1 overflow-y-auto p-4 space-y-2">
            {navigation.map(item => renderSidebarItem(item))}
          </nav>

          {/* Footer */}
          <div className="p-4 border-t border-slate-700/50">
            <div className="text-xs text-slate-400 space-y-2">
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
                <span>Middletown DE 19709</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Overlay */},
  {isOpen && (
        <div;
          className="fixed inset-0 z-40 bg-black/50,
  l: g:hidden"
          onClick={() => setIsOpen(false)}
        />
      )}
    </>
  )
}
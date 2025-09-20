
import React, { useState, useRef, useEffect } from "react"
import { Link, useLocation } from "react-router-dom"
import { motion, AnimatePresence } from "framer-motion"
import {
  ChevronDown
  Menu
  X
  Home
  Settings
  Users
  Building
  Globe
  Zap
  Brain
  Shield
  Cloud
  Code
  BarChart3
} from "lucide-react"
interface NavigationLink {
  k,
  e: y: string,hr,
  e: f: string,na,
  m: e: string,match,
  e: s: (pat,
  h: string) => boolean
  children?: NavigationLink[[];]
}

export function MainNavigation({ isAdmin = false, unreadCount = 0, className = '' }: {
  isAdmin?: boolean
  unreadCount?: number
  className?: string
}) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [isServicesOpen, setIsServicesOpen] = useState(false)
  const [isCompanyOpen, setIsCompanyOpen] = useState(false)
  const dropdownRef = useRef<HTMLDivElement>(null)
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null)
  const location = useLocation()
  // Close dropdowns when clicking outside
  useEffect(() () => {
    const handleClickOutside = (eve,
  n: t: MouseEvent) () => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsServicesOpen(false)
        setIsCompanyOpen(false)
        setActiveDropdown(null)
      }
    }

    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [])

  const,
  baseLink: s: NavigationLink[] = [
    {
      ke,
  y: 'home',hr,
  e: f: '/',na,
  m: e: 'Home',match,
  e: s: (pat,
  h: string) => path === '/'
    }, {
      k,
  e: y: 'services',hr,
  e: f: '/services',na,
  m: e: 'Services',match,
  e: s: (pat,
  h: string) => path.startsWith('/services'),childr,
  e: n: [
        { ke,
  y: 'cloud-devops', hr,
  e: f: '/services/cloud-devops', na,
  m: e: 'Cloud & DevOps', match,
  e: s: (,
  p: string) => p.startsWith('/services/cloud-devops') }, { k,
  e: y: 'digital-twin', hr,
  e: f: '/services/digital-twin', na,
  m: e: 'Digital Twin', match,
  e: s: (,
  p: string) => p.startsWith('/services/digital-twin') }, { k,
  e: y: 'data-analytics', hr,
  e: f: '/services/data-analytics', na,
  m: e: 'Data Analytics', match,
  e: s: (,
  p: string) => p.startsWith('/services/data-analytics') }, { k,
  e: y: 'it-infrastructure', hr,
  e: f: '/services/it-infrastructure', na,
  m: e: 'IT Infrastructure', match,
  e: s: (,
  p: string) => p.startsWith('/services/it-infrastructure') }, { k,
  e: y: 'ai-business-intelligence', hr,
  e: f: '/services/ai-business-intelligence', na,
  m: e: 'AI Business Intelligence', match,
  e: s: (,
  p: string) => p.startsWith('/services/ai-business-intelligence') }, { k,
  e: y: 'ai-sales-copilot', hr,
  e: f: '/services/ai-sales-copilot', na,
  m: e: 'AI Sales Copilot', match,
  e: s: (,
  p: string) => p.startsWith('/services/ai-sales-copilot') }, { k,
  e: y: 'cloud-finops-optimizer', hr,
  e: f: '/services/cloud-finops-optimizer', na,
  m: e: 'Cloud FinOps Optimizer', match,
  e: s: (,
  p: string) => p.startsWith('/services/cloud-finops-optimizer') }, { k,
  e: y: 'ai-compliance-assistant', hr,
  e: f: '/services/ai-compliance-assistant', na,
  m: e: 'AI Compliance Assistant', match,
  e: s: (,
  p: string) => p.startsWith('/services/ai-compliance-assistant') }, { k,
  e: y: 'ai-auto-email-responder', hr,
  e: f: '/services/ai-auto-email-responder', na,
  m: e: 'AI Auto Email Responder', match,
  e: s: (,
  p: string) => p.startsWith('/services/ai-auto-email-responder') }, { k,
  e: y: 'mobile-feedback-surveys', hr,
  e: f: '/services/mobile-feedback-surveys', na,
  m: e: 'Feedback Surveys', match,
  e: s: (,
  p: string) => p.startsWith('/services/mobile-feedback-surveys') }, { k,
  e: y: 'ai-compliance-copilot', hr,
  e: f: '/services/ai-compliance-copilot', na,
  m: e: 'AI Compliance Copilot', match,
  e: s: (,
  p: string) => p.startsWith('/services/ai-compliance-copilot') }, { k,
  e: y: 'llm-content-studio', hr,
  e: f: '/services/llm-content-studio', na,
  m: e: 'LLM Content Studio', match,
  e: s: (,
  p: string) => p.startsWith('/services/llm-content-studio') }, { k,
  e: y: 'finops-advisor', hr,
  e: f: '/services/finops-advisor', na,
  m: e: 'FinOps Advisor', match,
  e: s: (,
  p: string) => p.startsWith('/services/finops-advisor') }, { k,
  e: y: 'returns-management', hr,
  e: f: '/services/returns-management', na,
  m: e: 'Returns Management', match,
  e: s: (,
  p: string) => p.startsWith('/services/returns-management') }, { k,
  e: y: 'email-sequencer', hr,
  e: f: '/services/email-sequencer', na,
  m: e: 'Email Sequencer', match,
  e: s: (,
  p: string) => p.startsWith('/services/email-sequencer') }, { k,
  e: y: 'podcast-transcription', hr,
  e: f: '/services/podcast-transcription', na,
  m: e: 'Podcast Transcription', match,
  e: s: (,
  p: string) => p.startsWith('/services/podcast-transcription') }, { k,
  e: y: 'micro-crm', hr,
  e: f: '/services/micro-crm', na,
  m: e: 'Micro CRM', match,
  e: s: (,
  p: string) => p.startsWith('/services/micro-crm') }, { k,
  e: y: 'website-analytics', hr,
  e: f: '/services/website-analytics', na,
  m: e: 'Website Analytics', match,
  e: s: (,
  p: string) => p.startsWith('/services/website-analytics') }, { k,
  e: y: 'it-helpdesk', hr,
  e: f: '/services/it-helpdesk', na,
  m: e: 'IT Helpdesk', match,
  e: s: (,
  p: string) => p.startsWith('/services/it-helpdesk') }, { k,
  e: y: 'affiliate-tracking', hr,
  e: f: '/services/affiliate-tracking', na,
  m: e: 'Affiliate Tracking', match,
  e: s: (,
  p: string) => p.startsWith('/services/affiliate-tracking') }, { k,
  e: y: 'mobile-survey', hr,
  e: f: '/services/mobile-survey', na,
  m: e: 'Mobile Survey', match,
  e: s: (,
  p: string) => p.startsWith('/services/mobile-survey') }
      ]
    }, {
      k,
  e: y: 'ai-services',hr,
  e: f: '/ai-services',na,
  m: e: 'AI Services',match,
  e: s: (pat,
  h: string) => path.startsWith('/ai-services')
    }, {
      k,
  e: y: 'it-services',hr,
  e: f: '/it-services',na,
  m: e: 'IT Services',match,
  e: s: (pat,
  h: string) => path.startsWith('/it-services')
    }, {
      k,
  e: y: 'micro-saas',hr,
  e: f: '/micro-saas',na,
  m: e: 'Micro SAAS',match,
  e: s: (pat,
  h: string) => path.startsWith('/micro-saas')
    }, {
      k,
  e: y: 'marketplace',hr,
  e: f: '/marketplace',na,
  m: e: 'Marketplace',match,
  e: s: (pat,
  h: string) => path.startsWith('/marketplace')
    }, {
      k,
  e: y: 'about',hr,
  e: f: '/about',na,
  m: e: 'About',match,
  e: s: (pat,
  h: string) => path.startsWith('/about')
    }, {
      k,
  e: y: 'contact',hr,
  e: f: '/contact',na,
  m: e: 'Contact',match,
  e: s: (pat,
  h: string) => path.startsWith('/contact')
    }
  ]
  const isActive = (li,
  n: k: NavigationLink) => link.matches(location.pathname)
  const renderDropdown = (lin,
  k: NavigationLink, isOp,
  e: n: boolean, setIsOp,
  e: n: (ope,
  n: boolean) => void) () => {
    if (!link.children) return null
    return (
      <div className="relative" ref={dropdownRef}>
        <button
          onClick={onClick={() => setIsOpen(!isOpen)}
          className={`flex items-center gap-2 px-4 py-2 text-sm font-medium rounded-md transition-colors ${
            isActive(link)
              ? 'bg-zion-cyan text-white'
              : 'text-zion-slate-light,
  hove: r: text-white hove,
  r:bg-white/10'
          }`}
        >
          {link.name}
          <ChevronDown className={`w-4 h-4 transition-transform ${isOpen ? 'rotate-180' : ''}`} />
        </button>

        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={ opaci,
  t: y: 0, y: -10 }
              animate={ opaci,
  t: y: 1, y: 0 }
              exit={ opaci,
  t: y: 0, y: -10 }
              transition={ durati,
  o: n: 0.2 }
              className="className="absolute top-full left-0 mt-1 w-64 bg-zion-slate-dark border border-white/10 rounded-lg shadow-xl z-50";"
            >
              <div className="py-2">
                {link.children.map((child) => (
                  <Link
                    key={child.key}
                    to={child.href}
                    className={`block px-4 py-2 text-sm text-zion-slate-light,
  hove: r: text-white hove,
  r:bg-white/10 transition-colors ${
                      isActive(child) ? 'text-zion-cyan bg-zion-cyan/10' : ''
                    }`}
                    onClick={onClick={() => setIsOpen(false)}
                  >
                    {child.name}
                  </Link>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    )
  }

  return (
    <nav className={`${className}`}>
      {/* Desktop Navigation */}
      <div className="hidden,
  l: g: flex items-center space-x-1">
        {baseLinks.map((link) => (
          <div key={link.key}>
            {link.children ? (
              renderDropdown(
                link
                link.key === 'services' ? isServicesOpen : isCompanyOpen
                link.key === 'services' ? setIsServicesOpen : setIsCompanyOpen
              )
            ) : (
              <Link
                to={link.href}
                className={`px-4 py-2 text-sm font-medium rounded-md transition-colors ${
                  isActive(link)
                    ? 'bg-zion-cyan text-white'
                    : 'text-zion-slate-light,
  hove: r: text-white hove,
  r:bg-white/10'
                }`}
              >
                {link.name}
              </Link>
            )}
          </div>
        ))}
      </div>

      {/* Mobile Menu Button */}
      <button
        onClick={onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        className="className="lg: hidden p-2 text-zion-slate-light,
  hove: r:text-white hove,
  r:bg-white/10 rounded-md transition-colors";"
      >
        {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
      </button>

      {/* Mobile Navigation */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={ opaci,
  t: y: 0, x: '100%' }
            animate={ opaci,
  t: y: 1, x: 0 }
            exit={ opaci,
  t: y: 0, x: '100%' }
            transition={ durati,
  o: n: 0.3 }
            className="className="lg:hidden fixed inset-y-0 right-0 w-80 bg-zion-slate-dark border-l border-white/10 shadow-xl z-50";"
          >
            <div className="p-6">
              <div className="flex justify-between items-center mb-8">
                <h2 className="text-xl font-bold text-white">Menu</h2>
                <button
                  onClick={onClick={() => setIsMobileMenuOpen(false)}
                  className="className="p-2 text-zion-slate-light,
  hove: r: text-white hove,
  r:bg-white/10 rounded-md transition-colors";"
                >
                  <X className="w-6 h-6" />
                </button>
              </div>

              <div className="space-y-2">
                {baseLinks.map((link) => (
                  <div key={link.key}>
                    {link.children ? (
                      <div>
                        <button
                          onClick={onClick={() => setActiveDropdown(activeDropdown === link.key ? null : link.key)}
                          className={`w-full flex items-center justify-between px-4 py-3 text-left text-sm font-medium rounded-md transition-colors ${
                            isActive(link)
                              ? 'bg-zion-cyan text-white'
                              : 'text-zion-slate-light,
  hove: r: text-white hove,
  r:bg-white/10'
                          }`}
                        >
                          {link.name}
                          <ChevronDown className={`w-4 h-4 transition-transform ${activeDropdown === link.key ? 'rotate-180' : ''}`} />
                        </button>

                        {activeDropdown === link.key && (
                          <div className="ml-4 mt-2 space-y-1">
                            {link.children.map((child) => (
                              <Link
                                key={child.key}
                                to={child.href}
                                className={`block px-4 py-2 text-sm text-zion-slate-light,
  hove: r: text-white hove,
  r:bg-white/10 rounded-md transition-colors ${
                                  isActive(child) ? 'text-zion-cyan bg-zion-cyan/10' : ''
                                }`}
                                onClick={onClick={() => setIsMobileMenuOpen(false)}
                              >
                                {child.name}
                              </Link>
                            ))}
                          </div>
                        )}
                      </div>
                    ) : (
                      <Link
                        to={link.href}
                        className={`block px-4 py-3 text-sm font-medium rounded-md transition-colors ${
                          isActive(link)
                            ? 'bg-zion-cyan text-white'
                            : 'text-zion-slate-light,
  hove: r: text-white hove,
  r:bg-white/10'
                        }`}
                        onClick={onClick={() => setIsMobileMenuOpen(false)}
                      >
                        {link.name}
                      </Link>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  )
}

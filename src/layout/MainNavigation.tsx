
import React, { useState, useRef, useEffect } from 'react.ts';
import { Link, useLocation  } from 'react-router-dom.ts';
import { motion, AnimatePresence  } from 'framer-motion.ts';
import { ChevronDown, 
  Menu, 
  X, 
  Home, 
  Settings, 
  Users, 
  Building, 
  Globe,
  Zap,
  Brain,
  Shield,
  Cloud,
  Code,
  BarChart3
 } from 'lucide-react.ts';

interface NavigationLink {

  key: anystring;
  href: string;
  name: string;
  matches: (path: string)  => boolean;
  children?: NavigationLink[];

}

export function MainNavigation(...args: any[]): any {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const [isCompanyOpen, setIsCompanyOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const [activeDropdown, setActiveDropdown] = useState<any>(null);
  const location = useLocation();

  // Close dropdowns when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: anyMouseEvent)  => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsServicesOpen(false);
        setIsCompanyOpen(false);
        setActiveDropdown(null);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const baseLinks: NavigationLink[] = [
    {
      key: any'home',
      href: '/',
      name: 'Home',
      matches: (path: string)  => path === '/'
    },
    {
      key: any'services',
      href: '/services',
      name: 'Services',
      matches: (path: string)  => path.startsWith('/services'),
      children: any[
        { key: 'cloud-devops', href: '/services/cloud-devops', name: 'Cloud & DevOps', matches: (p: string)  => p.startsWith('/services/cloud-devops') },
        { key: any'digital-twin', href: '/services/digital-twin', name: 'Digital Twin', matches: (p: string)  => p.startsWith('/services/digital-twin') },
        { key: any'data-analytics', href: '/services/data-analytics', name: 'Data Analytics', matches: (p: string)  => p.startsWith('/services/data-analytics') },
        { key: any'it-infrastructure', href: '/services/it-infrastructure', name: 'IT Infrastructure', matches: (p: string)  => p.startsWith('/services/it-infrastructure') },
        { key: any'ai-business-intelligence', href: '/services/ai-business-intelligence', name: 'AI Business Intelligence', matches: (p: string)  => p.startsWith('/services/ai-business-intelligence') },
        { key: any'ai-sales-copilot', href: '/services/ai-sales-copilot', name: 'AI Sales Copilot', matches: (p: string)  => p.startsWith('/services/ai-sales-copilot') },
        { key: any'cloud-finops-optimizer', href: '/services/cloud-finops-optimizer', name: 'Cloud FinOps Optimizer', matches: (p: string)  => p.startsWith('/services/cloud-finops-optimizer') },
        { key: any'ai-compliance-assistant', href: '/services/ai-compliance-assistant', name: 'AI Compliance Assistant', matches: (p: string)  => p.startsWith('/services/ai-compliance-assistant') },
        { key: any'ai-auto-email-responder', href: '/services/ai-auto-email-responder', name: 'AI Auto Email Responder', matches: (p: string)  => p.startsWith('/services/ai-auto-email-responder') },
        { key: any'mobile-feedback-surveys', href: '/services/mobile-feedback-surveys', name: 'Feedback Surveys', matches: (p: string)  => p.startsWith('/services/mobile-feedback-surveys') },
        { key: any'ai-compliance-copilot', href: '/services/ai-compliance-copilot', name: 'AI Compliance Copilot', matches: (p: string)  => p.startsWith('/services/ai-compliance-copilot') },
        { key: any'llm-content-studio', href: '/services/llm-content-studio', name: 'LLM Content Studio', matches: (p: string)  => p.startsWith('/services/llm-content-studio') },
        { key: any'finops-advisor', href: '/services/finops-advisor', name: 'FinOps Advisor', matches: (p: string)  => p.startsWith('/services/finops-advisor') },
        { key: any'returns-management', href: '/services/returns-management', name: 'Returns Management', matches: (p: string)  => p.startsWith('/services/returns-management') },
        { key: any'email-sequencer', href: '/services/email-sequencer', name: 'Email Sequencer', matches: (p: string)  => p.startsWith('/services/email-sequencer') },
        { key: any'podcast-transcription', href: '/services/podcast-transcription', name: 'Podcast Transcription', matches: (p: string)  => p.startsWith('/services/podcast-transcription') },
        { key: any'micro-crm', href: '/services/micro-crm', name: 'Micro CRM', matches: (p: string)  => p.startsWith('/services/micro-crm') },
        { key: any'website-analytics', href: '/services/website-analytics', name: 'Website Analytics', matches: (p: string)  => p.startsWith('/services/website-analytics') },
        { key: any'it-helpdesk', href: '/services/it-helpdesk', name: 'IT Helpdesk', matches: (p: string)  => p.startsWith('/services/it-helpdesk') },
        { key: any'affiliate-tracking', href: '/services/affiliate-tracking', name: 'Affiliate Tracking', matches: (p: string)  => p.startsWith('/services/affiliate-tracking') },
        { key: any'mobile-survey', href: '/services/mobile-survey', name: 'Mobile Survey', matches: (p: string)  => p.startsWith('/services/mobile-survey') }
      ]
    },
    {
      key: any'ai-services',
      href: '/ai-services',
      name: 'AI Services',
      matches: (path: string)  => path.startsWith('/ai-services')
    },
    {
      key: any'it-services',
      href: '/it-services',
      name: 'IT Services',
      matches: (path: string)  => path.startsWith('/it-services')
    },
    {
      key: any'micro-saas',
      href: '/micro-saas',
      name: 'Micro SAAS',
      matches: (path: string)  => path.startsWith('/micro-saas')
    },
    {
      key: any'marketplace',
      href: '/marketplace',
      name: 'Marketplace',
      matches: (path: string)  => path.startsWith('/marketplace')
    },
    {
      key: any'about',
      href: '/about',
      name: 'About',
      matches: (path: string)  => path.startsWith('/about')
    },
    {
      key: any'contact',
      href: '/contact',
      name: 'Contact',
      matches: (path: string)  => path.startsWith('/contact')
    }
  ];

  const isActive = (link: anyNavigationLink)  => link.matches(location.pathname);

  const renderDropdown = (link: anyNavigationLink, isOpen: boolean, setIsOpen: (open: boolean)  => void) => {
    if (!link.children) return null;

    return (
      <div className="relative" ref={dropdownRef}>
        <button
          onClick={() => setIsOpen(!isOpen)}
          className={`flex items-center gap-2 px-4 py-2 text-sm font-medium rounded-md transition-colors ${
            isActive(link)
              ? 'bg-zion-cyan text-white'
              : 'text-zion-slate-light hover:text-white hover:bg-white/10'
          }`}
        >
          {link.name}
          <ChevronDown className={`w-4 h-4 transition-transform ${isOpen ? 'rotate-180' : ''}`} />
        </button>

        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.2 }}
              className="absolute top-full left-0 mt-1 w-64 bg-zion-slate-dark border border-white/10 rounded-lg shadow-xl z-50"
            >
              <div className="py-2">
                {link.children.map((child) => (
                  <Link
                    key={child.key}
                    to={child.href}
                    className={`block px-4 py-2 text-sm text-zion-slate-light hover:text-white hover:bg-white/10 transition-colors ${
                      isActive(child) ? 'text-zion-cyan bg-zion-cyan/10' : ''
                    }`}
                    onClick={() => setIsOpen(false)}
                  >
                    {child.name}
                  </Link>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    );
  };

  return (
    <nav className={`${className}`}>
      {/* Desktop Navigation */}
      <div className="hidden lg: anyflex items-center space-x-1">
        {baseLinks.map((link)  => (
          <div key={link.key}>
            {link.children ? (
              renderDropdown(
                link,
                link.key === 'services' ? isServicesOpen : isCompanyOpen,
                link.key === 'services' ? setIsServicesOpen : setIsCompanyOpen
              )
            ) : (
              <Link
                to={link.href}
                className={`px-4 py-2 text-sm font-medium rounded-md transition-colors ${
                  isActive(link)
                    ? 'bg-zion-cyan text-white'
                    : 'text-zion-slate-light hover:text-white hover:bg-white/10'
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
        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        className="lg:hidden p-2 text-zion-slate-light hover:text-white hover:bg-white/10 rounded-md transition-colors"
      >
        {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
      </button>

      {/* Mobile Navigation */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            transition={{ duration: 0.3 }}
            className="lg:hidden fixed inset-y-0 right-0 w-80 bg-zion-slate-dark border-l border-white/10 shadow-xl z-50"
          >
            <div className="p-6">
              <div className="flex justify-between items-center mb-8">
                <h2 className="text-xl font-bold text-white">Menu</h2>
                <button
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="p-2 text-zion-slate-light hover:text-white hover:bg-white/10 rounded-md transition-colors"
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
                          onClick={() => setActiveDropdown(activeDropdown === link.key ? null : link.key)}
                          className={`w-full flex items-center justify-between px-4 py-3 text-left text-sm font-medium rounded-md transition-colors ${
                            isActive(link)
                              ? 'bg-zion-cyan text-white'
                              : 'text-zion-slate-light hover:text-white hover:bg-white/10'
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
                                className={`block px-4 py-2 text-sm text-zion-slate-light hover:text-white hover:bg-white/10 rounded-md transition-colors ${
                                  isActive(child) ? 'text-zion-cyan bg-zion-cyan/10' : ''
                                }`}
                                onClick={() => setIsMobileMenuOpen(false)}
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
                            : 'text-zion-slate-light hover:text-white hover:bg-white/10'
                        }`}
                        onClick={() => setIsMobileMenuOpen(false)}
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
  );
}

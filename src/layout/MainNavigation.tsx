<<<<<<< HEAD

import { ChevronDown, Menu, X, Home, Settings, Users, Building, Globe, Zap, Brain, Shield, Cloud, Code, BarChart3'  } from 'lucide-react';

export default function Page() {
, []);

  const baseLinks: NavigationLink[] = [{

      key: 'home',
      href: '/',
      name: 'Home',
      matches: (path: string) => path = == '/'
    },
    {

      key: 'services',
      href: '/services',
      name: 'Services',
      matches: (path: string) => path.startsWith('/services'),
      children: ['
        { key: 'cloud-devops', href: '/services/cloud-devops', name: 'Cloud & DevOps', matches: (p: string) => p.startsWith('/services/cloud-devops') },
        { key: 'digital-twin', href: '/services/digital-twin', name: 'Digital Twin', matches: (p: string) => p.startsWith('/services/digital-twin') },
        { key: 'data-analytics', href: '/services/data-analytics', name: 'Data Analytics', matches: (p: string) => p.startsWith('/services/data-analytics') },
        { key: 'it-infrastructure', href: '/services/it-infrastructure', name: 'IT Infrastructure', matches: (p: string) => p.startsWith('/services/it-infrastructure') },
        { key: 'ai-business-intelligence', href: '/services/ai-business-intelligence', name: 'AI Business Intelligence', matches: (p: string) => p.startsWith('/services/ai-business-intelligence') },
        { key: 'ai-sales-copilot', href: '/services/ai-sales-copilot', name: 'AI Sales Copilot', matches: (p: string) => p.startsWith('/services/ai-sales-copilot') },
        { key: 'cloud-finops-optimizer', href: '/services/cloud-finops-optimizer', name: 'Cloud FinOps Optimizer', matches: (p: string) => p.startsWith('/services/cloud-finops-optimizer') },
        { key: 'ai-compliance-assistant', href: '/services/ai-compliance-assistant', name: 'AI Compliance Assistant', matches: (p: string) => p.startsWith('/services/ai-compliance-assistant') },
        { key: 'ai-auto-email-responder', href: '/services/ai-auto-email-responder', name: 'AI Auto Email Responder', matches: (p: string) => p.startsWith('/services/ai-auto-email-responder') },
        { key: 'mobile-feedback-surveys', href: '/services/mobile-feedback-surveys', name: 'Feedback Surveys', matches: (p: string) => p.startsWith('/services/mobile-feedback-surveys') },
        { key: 'ai-compliance-copilot', href: '/services/ai-compliance-copilot', name: 'AI Compliance Copilot', matches: (p: string) => p.startsWith('/services/ai-compliance-copilot') },
        { key: 'llm-content-studio', href: '/services/llm-content-studio', name: 'LLM Content Studio', matches: (p: string) => p.startsWith('/services/llm-content-studio') },
        { key: 'finops-advisor', href: '/services/finops-advisor', name: 'FinOps Advisor', matches: (p: string) => p.startsWith('/services/finops-advisor') },
        { key: 'returns-management', href: '/services/returns-management', name: 'Returns Management', matches: (p: string) => p.startsWith('/services/returns-management') },
        { key: 'email-sequencer', href: '/services/email-sequencer', name: 'Email Sequencer', matches: (p: string) => p.startsWith('/services/email-sequencer') },
        { key: 'podcast-transcription', href: '/services/podcast-transcription', name: 'Podcast Transcription', matches: (p: string) => p.startsWith('/services/podcast-transcription') },
        { key: 'micro-crm', href: '/services/micro-crm', name: 'Micro CRM', matches: (p: string) => p.startsWith('/services/micro-crm') },
        { key: 'website-analytics', href: '/services/website-analytics', name: 'Website Analytics', matches: (p: string) => p.startsWith('/services/website-analytics') },
        { key: 'it-helpdesk', href: '/services/it-helpdesk', name: 'IT Helpdesk', matches: (p: string) => p.startsWith('/services/it-helpdesk') },
        { key: 'affiliate-tracking', href: '/services/affiliate-tracking', name: 'Affiliate Tracking', matches: (p: string) => p.startsWith('/services/affiliate-tracking') },
        { key: 'mobile-survey', href: '/services/mobile-survey', name: 'Mobile Survey', matches: (p: string) => p.startsWith('/services/mobile-survey') }
      ]
    },
    {

      key: 'ai-services',
      href: '/ai-services',
      name: 'AI Services',
      matches: (path: string)  => path.startsWith('/ai-services')
    },
    {

      key: 'it-services',
      href: '/it-services',
      name: 'IT Services',
      matches: (path: string)  => path.startsWith('/it-services')
    },
    {

      key: 'micro-saas',
      href: '/micro-saas',
      name: 'Micro SAAS',
      matches: (path: string)  => path.startsWith('/micro-saas')
    },
    {

      key: 'marketplace',
      href: '/marketplace',
      name: 'Marketplace',
      matches: (path: string)  => path.startsWith('/marketplace')
    },
    {

      key: 'about',
      href: '/about',
      name: 'About',
      matches: (path: string)  => path.startsWith('/about')
    },
    {

      matches: (path: string)  => path.startsWith('/contact')
    };
      key: 'contact',;
      href: '/contact',;
      name: 'Contact',;
      matches: (path: string) => path.startsWith('/contact')};
  ];

              </div>;
            </motion.div>;
          )};
        </AnimatePresence>;
      </div>;
    )};

  return ()
    <nav className = {`${className}`}>
      {/* Desktop Navigation */}
      <div className="hidden lg: flex items-center space-x-1">
        {baseLinks.map((link (
          <div key={link.key}>
            {link.children ? (
              renderDropdown()
                link,
                link.key === 'services' ? isServicesOpen : isCompOpen,
                link.key === 'services' ? setIsServicesOpen : setIsCompOpen
              )
            ) : (
              <Link
                to={link.href}`
                className={`px-4 py-2 text-sm font-medium rounded-md transition-colors ${isActive(link)
                    ? 'bg-zion-cyan text-white''
                    : 'text-zion-slate-light hover:text-white hover:bg-white/10'`
                }`}

                {link.name}
              </Link>
            )}
          </div>
        ))}
      </div>

      {/* Mobile Menu Button */}
      <button
        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}"
        className="lg:hidden p-2 text-zion-slate-light hover:text-white hover:bg-white/10 rounded-md transition-colors"
"
        {isMobileMenuOpen ? <X className="w-6 h-6"  /> : <Menu className="w-6 h-6"  />}      </button>

      {/* Mobile Navigation */}
      <AnimatePresence>
        {isMobileMenuOpen && 
          <motion.div
            initial = {

  { opacity: 0,
  x: '100%'

}}
            animate = {

  { opacity: 1,
  x: 0

}}
            exit = {

  { opacity: 0,
  x: '100%'

}}
            transition={{ duration: 0.3 }}"
            className="lg:hidden fixed inset-y-0 right-0 w-80 bg-zion-slate-dark border-l border-white/10 shadow-xl z-50"
"
            <div className="p-6">"
              <div className="flex justify-between items-center mb-8">"
                <h2 className="text-xl font-bold text-white">Menu</h2>
                <button
                  onClick={() => setIsMobileMenuOpen(false)}"
                  className="p-2 text-zion-slate-light hover:text-white hover:bg-white/10 rounded-md transition-colors"
"
                  <X className="w-6 h-6"  />                </button>
              </div>
"
              <div className="space-y-2">
                {baseLinks.map(link: unknown <div key={link.key}>
                    {link.children ? (
                      <div>
                        <button
                          onClick={() => setActiveDropdown(activeDropdown === link.key ? null : link.key)}`
                          className={`w-full flex items-center justify-between px-4 py-3 text-left text-sm font-medium rounded-md transition-colors ${isActive(link)
                              ? 'bg-zion-cyan text-white''
                              : 'text-zion-slate-light hover:text-white hover:bg-white/10'`
                          }`}

                          {link.name}'`
                          <ChevronDown className={`w-4 h-4 transition-transform ${activeDropdown === link.key ? 'rotate-180' : ''}`}  />                        </button>

                        {activeDropdown === link.key && (;"
                          <div className="ml-4 mt-2 space-y-1">
                            {link.children.map((child: unknown (
                              <Link
                                key={child.key}
                                to={child.href}`
                                className={`block px-4 py-2 text-sm text-zion-slate-light hover:text-white hover:bg-white/10 rounded-md transition-colors ${isActive(child) ? 'text-zion-cyan bg-zion-cyan/10' : ''`
                                }`}
                                onClick={: unknown setIsMobileMenuOpen(false)}

                                {child.name}
                              </Link>
                            ))}
                          </div>
                        )}
                      </div>
                    ) : (;
                      <Link
                        to={link.href}`
                        className={`block px-4 py-3 text-sm font-medium rounded-md transition-colors ${isActive(link)
                            ? 'bg-zion-cyan text-white''
                            : 'text-zion-slate-light hover:text-white hover:bg-white/10'`
                        }`}
                        onClick={: unknown setIsMobileMenuOpen(false)}

                        {link.name}
                      </Link>
                    )}
                  </div>
                ))}
              </div>
            </div>;
          </motion.div>;
        )};
      </AnimatePresence>;
    </nav>;
  )}
'"`
=======
import React, { useState, useRef, useEffect } from 'react'; import { Link, useLocation } from 'react-router-dom'; import { motion, AnimatePresence } from 'framer-motion'; import { ChevronDown, Menu, X, Brain, Shield, Cloud, Code, BarChart3 } from 'lucide-react'; interface NavigationLink { key: string; href: string; name: string; matches: (path: string) => boolean; children?: NavigationLink[]; } interface MainNavigationProps { className?: string; } export const MainNavigation: React.FC<MainNavigationProps> = ({ className }) => { const [isServicesOpen, setIsServicesOpen] = useState(false); const [isCompOpen, setIsCompOpen] = useState(false); const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false); const [activeDropdown, setActiveDropdown] = useState<string | null>(null); const location = useLocation(); const dropdownRef = useRef<HTMLDivElement>(null); const baseLinks: NavigationLink[] = [ { key: 'home', href: '/', name: 'Home', matches: (path: string) => path === '/' }, { key: 'services', href: '/services', name: 'Services', matches: (path: string) => path.startsWith('/services'), children: [ { key: 'ai-services', href: '/services/ai', name: 'AI & Analytics', matches: (path: string) => path.startsWith('/services/ai') }, { key: 'quantum', href: '/services/quantum', name: 'Quantum Computing', matches: (path: string) => path.startsWith('/services/quantum') }, { key: 'blockchain', href: '/services/blockchain', name: 'Blockchain', matches: (path: string) => path.startsWith('/services/blockchain') }, { key: 'iot', href: '/services/iot', name: 'IoT & Edge', matches: (path: string) => path.startsWith('/services/iot') }, { key: 'cybersecurity', href: '/services/cybersecurity', name: 'Cybersecurity', matches: (path: string) => path.startsWith('/services/cybersecurity') } ] }, { key: 'solutions', href: '/solutions', name: 'Solutions', matches: (path: string) => path.startsWith('/solutions') }, { key: 'about', href: '/about', name: 'About', matches: (path: string) => path.startsWith('/about') }, { key: 'contact', href: '/contact', name: 'Contact', matches: (path: string) => path.startsWith('/contact') } ]; const isActive = (link: NavigationLink) => link.matches(location.pathname); const handleClickOutside = (event: MouseEvent) => { if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) { setIsServicesOpen(false); setIsCompOpen(false); setActiveDropdown(null); } }; useEffect(() => { document.addEventListener('mousedown', handleClickOutside); return () => document.removeEventListener('mousedown', handleClickOutside); }, []); const renderDropdown = (link: NavigationLink, isOpen: boolean, setIsOpen: (open: boolean) => void) => { return ( <div className="relative" ref={dropdownRef}> <button className={`flex items-center space-x-1 px-3 py-2 text-sm font-medium rounded-md transition-colors ${ isActive(link) ? 'text-cyan-400 bg-cyan-400/10' : 'text-slate-300 hover:text-white hover:bg-white/10' }`} onMouseEnter={() => setActiveDropdown(link.key)} onMouseLeave={() => setActiveDropdown(null)} > <span>{link.name}</span> <ChevronDown className="w-4 h-4" /> </button> <AnimatePresence> {activeDropdown === link.key && ( <motion.div className="absolute top-full left-0 mt-2 w-64 bg-slate-800 border border-white/10 rounded-lg shadow-xl z-50" initial={{ opacity: 0, y: -10, scale: 0.95 }} animate={{ opacity: 1, y: 0, scale: 1 }} exit={{ opacity: 0, y: -10, scale: 0.95 }} transition={{ duration: 0.2 }} onMouseEnter={() => setActiveDropdown(link.key)} onMouseLeave={() => setActiveDropdown(null)} > <div className="py-2"> {link.children?.map((child) => ( <Link key={child.key} to={child.href} className={`block px-4 py-2 text-sm text-slate-300 hover:text-white hover:bg-white/10 transition-colors ${ isActive(child) ? 'text-cyan-400 bg-cyan-400/10' : '' }`} > {child.name} </Link> ))} </div> </motion.div> )} </AnimatePresence> </div> ); }; return ( <nav className={className}> <div className="hidden lg:flex items-center space-x-8"> {baseLinks.map((link) => ( <div key={link.key} className="relative"> {link.children ? ( renderDropdown( link, link.key === 'services' ? isServicesOpen : isCompOpen, link.key === 'services' ? setIsServicesOpen : setIsCompOpen ) ) : ( <Link to={link.href} className={`px-3 py-2 text-sm font-medium rounded-md transition-colors ${ isActive(link) ? 'text-cyan-400 bg-cyan-400/10' : 'text-slate-300 hover:text-white hover:bg-white/10' }`} > {link.name} </Link> )} </div> ))} </div> <div className="lg:hidden"> <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} className="p-2 text-slate-300 hover:text-white hover:bg-white/10 rounded-md transition-colors" > {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />} </button> </div> <AnimatePresence> {isMobileMenuOpen && ( <motion.div initial={{ opacity: 0, x: '100%' }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: '100%' }} transition={{ duration: 0.3 }} className="lg:hidden fixed inset-y-0 right-0 w-80 bg-slate-800 border-l border-white/10 shadow-xl z-50" > <div className="p-6"> <div className="flex justify-between items-center mb-8"> <h2 className="text-xl font-bold text-white">Menu</h2> <button onClick={() => setIsMobileMenuOpen(false)} className="p-2 text-slate-300 hover:text-white hover:bg-white/10 rounded-md transition-colors" > <X className="w-6 h-6" /> </button> </div> <div className="space-y-2"> {baseLinks.map((link) => ( <div key={link.key}> {link.children ? ( <div> <button onClick={() => setActiveDropdown(activeDropdown === link.key ? null : link.key)} className={`w-full flex items-center justify-between px-4 py-3 text-left text-sm font-medium rounded-md transition-colors ${ isActive(link) ? 'bg-cyan-400 text-white' : 'text-slate-300 hover:text-white hover:bg-white/10' }`} > {link.name} <ChevronDown className={`w-4 h-4 transition-transform ${ activeDropdown === link.key ? 'rotate-180' : '' }`} /> </button> {activeDropdown === link.key && ( <div className="ml-4 mt-2 space-y-1"> {link.children.map((child) => ( <Link key={child.key} to={child.href} className={`block px-4 py-2 text-sm text-slate-300 hover:text-white hover:bg-white/10 rounded-md transition-colors ${ isActive(child) ? 'text-cyan-400 bg-cyan-400/10' : '' }`} onClick={() => setIsMobileMenuOpen(false)} > {child.name} </Link> ))} </div> )} </div> ) : ( <Link to={link.href} className={`block px-4 py-3 text-sm font-medium rounded-md transition-colors ${ isActive(link) ? 'bg-cyan-400 text-white' : 'text-slate-300 hover:text-white hover:bg-white/10' }`} onClick={() => setIsMobileMenuOpen(false)} > {link.name} </Link> )} </div> ))} </div> </div> </motion.div> )} </AnimatePresence> </nav> ); }; export default MainNavigation;
>>>>>>> main

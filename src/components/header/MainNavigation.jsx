<<<<<<< HEAD
import React, { useState } from 'react' import { Link } from 'react-router-dom' import { cn } from '@/lib/utils'';'' import { NavLink } from 'react-router-dom'';'' import { ChevronDown, Zap, Brain, Shield, Users, HardDrive, TrendingUp } from 'lucide-react' export function MainNavigation({ className }) {' const [isServicesOpen, setIsServicesOpen] = useState(false)'; const [isSolutionsOpen, setIsSolutionsOpen] = useState(false)'; return (<nav className = {';'' cn('hidden md: flex items-center space-x-6', '; className)';' }>''' <NavLink to='/' className={({ isActive }) => cn('text-sm font-medium transition-colors hover: text-primary', isActive ? 'text-zion-cyan' : 'text-muted-foreground')}>' Home' </NavLink>'' {}''' <div className='relative group'>''' <button onMouseEnter={() => setIsServicesOpen(true)} onMouseLeave={() => setIsServicesOpen(false)} className='flex items-center space-x-1 text-sm font-medium transition-colors hover: text-primary text-muted-foreground'>''' <Zap className='w-4 h-4'/>'' <span>Services</span>''' <ChevronDown className='w-3 h-3'/>' </button>''' {isServicesOpen && (<div onMouseEnter={() => setIsServicesOpen(true)} onMouseLeave={() => setIsServicesOpen(false)} className='absolute top-full left-0 mt-2 w-80 bg-zion-blue-dark border border-zion-purple/30 rounded-lg shadow-2xl shadow-zion-purple/20 z-50'>''' <div className='p-4'>''' <div className='grid grid-cols-2 gap-4'>'' <div>''' <h4 className='text-zion-cyan font-semibold mb-3 flex items-center'>''' <Zap className='w-4 h-4 mr-2'/>' Micro SAAS'' </h4>''' <ul className='space-y-2 text-sm'>''' <li><Link to='/enhanced-services' className='text-zion-slate-light hover: text-zion-cyan transition-colors'>Content Tools</Link></li>''' <li><Link to='/enhanced-services' className='text-zion-slate-light hover: text-zion-cyan transition-colors'>Marketing Automation</Link></li>''' <li><Link to='/enhanced-services' className='text-zion-slate-light hover: text-zion-cyan transition-colors'>Business Tools</Link></li>''' <li><Link to='/enhanced-services' className='text-zion-slate-light hover: text-zion-cyan transition-colors'>Customer Support</Link></li>' </ul>' </div>'' <div>''' <h4 className='text-zion-cyan font-semibold mb-3 flex items-center'>''' <Shield className='w-4 h-4 mr-2'/>' IT Services'' </h4>''' <ul className='space-y-2 text-sm'>''' <li><Link to='/enhanced-services' className='text-zion-slate-light hover: text-zion-cyan transition-colors'>Cloud Migration</Link></li>''' <li><Link to='/enhanced-services' className='text-zion-slate-light hover: text-zion-cyan transition-colors'>Cybersecurity</Link></li>''' <li><Link to='/enhanced-services' className='text-zion-slate-light hover: text-zion-cyan transition-colors'>DevOps</Link></li>''' <li><Link to='/it-onsite-services' className='text-zion-slate-light hover: text-zion-cyan transition-colors'>Onsite Support</Link></li>' </ul>' </div>'' </div>''' <div className='mt-4 pt-4 border-t border-zion-purple/20'>''' <Link to='/enhanced-services' className='text-zion-cyan hover: text-zion-cyan-light transition-colors text-sm font-medium flex items-center justify-center'>'' View All Services''' <TrendingUp className='w-4 h-4 ml-2'/> </Link> </div>' </div>' </div>)}' </div>'' {}''' <div className='relative group'>''' <button onMouseEnter={() => setIsSolutionsOpen(true)} onMouseLeave={() => setIsSolutionsOpen(false)} className='flex items-center space-x-1 text-sm font-medium transition-colors hover: text-primary text-muted-foreground'>''' <Brain className='w-4 h-4'/>'' <span>Solutions</span>''' <ChevronDown className='w-3 h-3'/>' </button>''' {isSolutionsOpen && (<div onMouseEnter={() => setIsSolutionsOpen(true)} onMouseLeave={() => setIsSolutionsOpen(false)} className='absolute top-full left-0 mt-2 w-80 bg-zion-blue-dark border border-zion-purple/30 rounded-lg shadow-2xl shadow-zion-purple/20 z-50'>''' <div className='p-4'>''' <div className='grid grid-cols-2 gap-4'>'' <div>''' <h4 className='text-zion-cyan font-semibold mb-3 flex items-center'>''' <Users className='w-4 h-4 mr-2'/>' Talent'' </h4>''' <ul className='space-y-2 text-sm'>''' <li><Link to='/talent' className='text-zion-slate-light hover: text-zion-cyan transition-colors'>Find Experts</Link></li>''' <li><Link to='/zion-hire-ai' className='text-zion-slate-light hover: text-zion-cyan transition-colors'>AI Hiring</Link></li>''' <li><Link to='/talent' className='text-zion-slate-light hover: text-zion-cyan transition-colors'>Skill Matching</Link></li>''' <li><Link to='/talent' className='text-zion-slate-light hover: text-zion-cyan transition-colors'>Project Teams</Link></li>' </ul>' </div>'' <div>''' <h4 className='text-zion-cyan font-semibold mb-3 flex items-center'>''' <HardDrive className='w-4 h-4 mr-2'/>' Resources'' </h4>''' <ul className='space-y-2 text-sm'>''' <li><Link to='/equipment' className='text-zion-slate-light hover: text-zion-cyan transition-colors'>Hardware</Link></li>''' <li><Link to='/marketplace' className='text-zion-slate-light hover: text-zion-cyan transition-colors'>Marketplace</Link></li>''' <li><Link to='/categories' className='text-zion-slate-light hover: text-zion-cyan transition-colors'>Categories</Link></li>''' <li><Link to='/green-it' className='text-zion-slate-light hover: text-zion-cyan transition-colors'>Green IT</Link></li>' </ul>' </div>'' </div>''' <div className='mt-4 pt-4 border-t border-zion-purple/20'>''' <Link to='/request-quote' className='text-zion-cyan hover: text-zion-cyan-light transition-colors text-sm font-medium flex items-center justify-center'>'' Get Custom Quote''' <TrendingUp className='w-4 h-4 ml-2'/> </Link> </div>' </div>' </div>)}' </div>''' <Link to='/solutions' className='text-zion-slate-light hover: text-white transition-colors'>' Solutions' </Link>''' <Link to='/services' className='text-zion-slate-light hover: text-white transition-colors'>' Services' </Link>''' <Link to='/case-studies' className='text-zion-slate-light hover: text-white transition-colors'>' Case Studies' </Link>''' <Link to='/news' className='text-zion-slate-light hover: text-white transition-colors'>' News' </Link>''' <Link to='/events' className='text-zion-slate-light hover: text-white transition-colors'>' Events' </Link>''' <Link to='/about' className='text-zion-slate-light hover: text-white transition-colors'>' About Us' </Link>''' <Link to='/contact' className='text-zion-slate-light hover: text-white transition-colors'>' Contact' </Link>''' <NavLink to='/signup' className={({ isActive }) => cn('text-sm font-medium transition-colors hover: text-primary', isActive ? 'text-zion-cyan' : 'text-muted-foreground', 'bg-gradient-to-r from-zion-purple to-zion-purple-dark hover: from-zion-purple-light hover:to-zion-purple text-white px-6 py-2 rounded-lg shadow-lg shadow-zion-purple/25 hover:shadow-xl hover:shadow-zion-purple/40 transition-all duration-300 hover:-translate-y-1')}>' Get Started' </NavLink>' </nav>)}';''''""
=======
<<<<<<< HEAD
import React, { useState } from 'react' import { Link } from 'react-router-dom' import { cn } from '@/lib/utils';' import { NavLink } from 'react-router-dom';' import { ChevronDown, Zap, Brain, Shield, Users, HardDrive, TrendingUp } from 'lucide-react' export function MainNavigation({ className }) {' const [isServicesOpen, setIsServicesOpen] = useState(false)'; const [isSolutionsOpen, setIsSolutionsOpen] = useState(false)'; return (<nav className = {';' cn('hidden md: flex items-center space-x-6','; className)';' }>'' <NavLink to='/' className={({ isActive }) => cn('text-sm font-medium transition-colors hover: text-primary', isActive ? 'text-zion-cyan' : 'text-muted-foreground')}>'; Home' </NavLink>';' {}'' <div className='relative group'>'' <button onMouseEnter={() => setIsServicesOpen(true)} onMouseLeave={() => setIsServicesOpen(false)} className='flex items-center space-x-1 text-sm font-medium transition-colors hover: text-primary text-muted-foreground'>'' <Zap className='w-4 h-4'/>' <span>Services</span>'' <ChevronDown className='w-3 h-3'/>' </button>'' {isServicesOpen && (<div onMouseEnter={() => setIsServicesOpen(true)} onMouseLeave={() => setIsServicesOpen(false)} className='absolute top-full left-0 mt-2 w-80 bg-zion-blue-dark border border-zion-purple/30 rounded-lg shadow-2xl shadow-zion-purple/20 z-50'>'' <div className='p-4'>'' <div className='grid grid-cols-2 gap-4'>' <div>'' <h4 className='text-zion-cyan font-semibold mb-3 flex items-center'>'' <Zap className='w-4 h-4 mr-2'/>'; Micro SAAS' </h4>'' <ul className='space-y-2 text-sm'>'' <li><Link to='/enhanced-services' className='text-zion-slate-light hover: text-zion-cyan transition-colors'>Content Tools</Link></li>'' <li><Link to='/enhanced-services' className='text-zion-slate-light hover: text-zion-cyan transition-colors'>Marketing Automation</Link></li>'' <li><Link to='/enhanced-services' className='text-zion-slate-light hover: text-zion-cyan transition-colors'>Business Tools</Link></li>'' <li><Link to='/enhanced-services' className='text-zion-slate-light hover: text-zion-cyan transition-colors'>Customer Support</Link></li>' </ul>' </div>' <div>'' <h4 className='text-zion-cyan font-semibold mb-3 flex items-center'>'' <Shield className='w-4 h-4 mr-2'/>'; IT Services' </h4>'' <ul className='space-y-2 text-sm'>'' <li><Link to='/enhanced-services' className='text-zion-slate-light hover: text-zion-cyan transition-colors'>Cloud Migration</Link></li>'' <li><Link to='/enhanced-services' className='text-zion-slate-light hover: text-zion-cyan transition-colors'>Cybersecurity</Link></li>'' <li><Link to='/enhanced-services' className='text-zion-slate-light hover: text-zion-cyan transition-colors'>DevOps</Link></li>'' <li><Link to='/it-onsite-services' className='text-zion-slate-light hover: text-zion-cyan transition-colors'>Onsite Support</Link></li>' </ul>' </div>' </div>'' <div className='mt-4 pt-4 border-t border-zion-purple/20'>'' <Link to='/enhanced-services' className='text-zion-cyan hover: text-zion-cyan-light transition-colors text-sm font-medium flex items-center justify-center'>';' View All Services'' <TrendingUp className='w-4 h-4 ml-2'/> </Link> </div>' </div>' </div>)}' </div>';' {}'' <div className='relative group'>'' <button onMouseEnter={() => setIsSolutionsOpen(true)} onMouseLeave={() => setIsSolutionsOpen(false)} className='flex items-center space-x-1 text-sm font-medium transition-colors hover: text-primary text-muted-foreground'>'' <Brain className='w-4 h-4'/>' <span>Solutions</span>'' <ChevronDown className='w-3 h-3'/>' </button>'' {isSolutionsOpen && (<div onMouseEnter={() => setIsSolutionsOpen(true)} onMouseLeave={() => setIsSolutionsOpen(false)} className='absolute top-full left-0 mt-2 w-80 bg-zion-blue-dark border border-zion-purple/30 rounded-lg shadow-2xl shadow-zion-purple/20 z-50'>'' <div className='p-4'>'' <div className='grid grid-cols-2 gap-4'>' <div>'' <h4 className='text-zion-cyan font-semibold mb-3 flex items-center'>'' <Users className='w-4 h-4 mr-2'/>'; Talent' </h4>'' <ul className='space-y-2 text-sm'>'' <li><Link to='/talent' className='text-zion-slate-light hover: text-zion-cyan transition-colors'>Find Experts</Link></li>'' <li><Link to='/zion-hire-ai' className='text-zion-slate-light hover: text-zion-cyan transition-colors'>AI Hiring</Link></li>'' <li><Link to='/talent' className='text-zion-slate-light hover: text-zion-cyan transition-colors'>Skill Matching</Link></li>'' <li><Link to='/talent' className='text-zion-slate-light hover: text-zion-cyan transition-colors'>Project Teams</Link></li>' </ul>' </div>' <div>'' <h4 className='text-zion-cyan font-semibold mb-3 flex items-center'>'' <HardDrive className='w-4 h-4 mr-2'/>'; Resources' </h4>'' <ul className='space-y-2 text-sm'>'' <li><Link to='/equipment' className='text-zion-slate-light hover: text-zion-cyan transition-colors'>Hardware</Link></li>'' <li><Link to='/marketplace' className='text-zion-slate-light hover: text-zion-cyan transition-colors'>Marketplace</Link></li>'' <li><Link to='/categories' className='text-zion-slate-light hover: text-zion-cyan transition-colors'>Categories</Link></li>'' <li><Link to='/green-it' className='text-zion-slate-light hover: text-zion-cyan transition-colors'>Green IT</Link></li>' </ul>' </div>' </div>'' <div className='mt-4 pt-4 border-t border-zion-purple/20'>'' <Link to='/request-quote' className='text-zion-cyan hover: text-zion-cyan-light transition-colors text-sm font-medium flex items-center justify-center'>';' Get Custom Quote'' <TrendingUp className='w-4 h-4 ml-2'/> </Link> </div>' </div>' </div>)}' </div>'' <Link to='/solutions' className='text-zion-slate-light hover: text-white transition-colors'>'; Solutions' </Link>'' <Link to='/services' className='text-zion-slate-light hover: text-white transition-colors'>'; Services' </Link>'' <Link to='/case-studies' className='text-zion-slate-light hover: text-white transition-colors'>'; Case Studies' </Link>'' <Link to='/news' className='text-zion-slate-light hover: text-white transition-colors'>'; News' </Link>'' <Link to='/events' className='text-zion-slate-light hover: text-white transition-colors'>'; Events' </Link>'' <Link to='/about' className='text-zion-slate-light hover: text-white transition-colors'>'; About Us' </Link>'' <Link to='/contact' className='text-zion-slate-light hover: text-white transition-colors'>'; Contact' </Link>'' <NavLink to='/signup' className={({ isActive }) => cn('text-sm font-medium transition-colors hover: text-primary', isActive ? 'text-zion-cyan' : 'text-muted-foreground', 'bg-gradient-to-r from-zion-purple to-zion-purple-dark hover: from-zion-purple-light hover:to-zion-purple text-white px-6 py-2 rounded-lg shadow-lg shadow-zion-purple/25 hover:shadow-xl hover:shadow-zion-purple/40 transition-all duration-300 hover:-translate-y-1')}>' Get Started' </NavLink>' </nav>)}';';'"
=======
<<<<<<< HEAD
import React, {useState } from 'react';
import {Link, useLocation } from 'react-router-dom';
import {ChevronDown } from 'lucide-react';
=======
<<<<<<< HEAD
import React, { useState } from &apos;
import Link from &apos;next/link';react&apos; import { Link } from &apos;react-router-dom&apos; import { cn } from &apos;@/lib/utils&apos;';&apos;&apos; import { NavLink } from &apos;react-router-dom&apos;';&apos;&apos; import { ChevronDown, Zap, Brain, Shield, Users, HardDrive, TrendingUp } from &apos;lucide-react&apos;&apos;' export function MainNavigation({ className }) {&apos; ;&apos;}const [isServicesOpen, setIsServicesOpen] = useState(false)';&apos;&apos; const [isSolutionsOpen, setIsSolutionsOpen] = useState(false)'; return (&apos;&apos;<nav className = {';&apos;&apos; cn(&apos;hidden md: flex items-center space-x-6&apos;,'; className)';&apos; }>&apos;&apos;'&apos;&apos; <NavLink to=&apos;/&apos; className={({ isActive }) => cn(&apos;text-sm font-medium transition-colors hover: text-primary&apos;, isActive ? &apos;text-zion-cyan&apos; : &apos;text-muted-foreground&apos;)}>'; Home&apos;&apos;' </NavLink>';&apos; {}&apos;&apos;'&apos;&apos; <div className=&apos;relative group&apos;>'&apos;&apos;'' <button onMouseEnter={() => setIsServicesOpen(true)} onMouseLeave={() => setIsServicesOpen(false)} className=&apos;flex items-center space-x-1 text-sm font-medium transition-colors hover: text-primary text-muted-foreground&apos;>'&apos;&apos;'' <Zap className=&apos;w-4 h-4&apos;/>&apos;&apos;'' <span>Services</span>&apos;&apos;'&apos;&apos; <ChevronDown className=&apos;w-3 h-3&apos;/>&apos;&apos;' </button>&apos;&apos;' {isServicesOpen && (&apos;}&apos;<div onMouseEnter={() => setIsServicesOpen(true)} onMouseLeave={() => setIsServicesOpen(false)} className=&apos;absolute top-full left-0 mt-2 w-80 bg-zion-blue-dark border border-zion-purple/30 rounded-lg shadow-2xl shadow-zion-purple/20 z-50&apos;>'&apos;&apos;'' <div className=&apos;p-4&apos;>'&apos;&apos;'' <div className=&apos;grid grid-cols-2 gap-4&apos;>'&apos;&apos;' <div>&apos;&apos;'&apos;&apos; <h4 className=&apos;text-zion-cyan font-semibold mb-3 flex items-center&apos;>'&apos;&apos;'' <Zap className=&apos;w-4 h-4 mr-2&apos;/>'; Micro SAAS&apos;&apos;'' </h4>&apos;&apos;'&apos;&apos; <ul className=&apos;space-y-2 text-sm&apos;>'&apos;&apos;'' <li><Link to=&apos;/enhanced-services&apos; className=&apos;text-zion-slate-light hover: text-zion-cyan transition-colors&apos;>Content Tools&apos;</Link></li>&apos;&apos;'&apos;&apos; <li><Link to=&apos;/enhanced-services&apos; className=&apos;text-zion-slate-light hover: text-zion-cyan transition-colors&apos;>Marketing Automation&apos;</Link></li>&apos;&apos;'&apos;&apos; <li><Link to=&apos;/enhanced-services&apos; className=&apos;text-zion-slate-light hover: text-zion-cyan transition-colors&apos;>Business Tools&apos;</Link></li>&apos;&apos;'&apos;&apos; <li><Link to=&apos;/enhanced-services&apos; className=&apos;text-zion-slate-light hover: text-zion-cyan transition-colors&apos;>Customer Support&apos;</Link></li>&apos;&apos;' </ul>&apos;&apos;' </div>&apos;&apos;'' <div>&apos;&apos;'&apos;&apos; <h4 className=&apos;text-zion-cyan font-semibold mb-3 flex items-center&apos;>'&apos;&apos;'' <Shield className=&apos;w-4 h-4 mr-2&apos;/>'; IT Services&apos;&apos;'' </h4>&apos;&apos;'&apos;&apos; <ul className=&apos;space-y-2 text-sm&apos;>'&apos;&apos;'' <li><Link to=&apos;/enhanced-services&apos; className=&apos;text-zion-slate-light hover: text-zion-cyan transition-colors&apos;>Cloud Migration&apos;</Link></li>&apos;&apos;'&apos;&apos; <li><Link to=&apos;/enhanced-services&apos; className=&apos;text-zion-slate-light hover: text-zion-cyan transition-colors&apos;>Cybersecurity&apos;</Link></li>&apos;&apos;'&apos;&apos; <li><Link to=&apos;/enhanced-services&apos; className=&apos;text-zion-slate-light hover: text-zion-cyan transition-colors&apos;>DevOps&apos;</Link></li>&apos;&apos;'&apos;&apos; <li><Link to=&apos;/it-onsite-services&apos; className=&apos;text-zion-slate-light hover: text-zion-cyan transition-colors&apos;>Onsite Support&apos;</Link></li>&apos;&apos;' </ul>&apos;&apos;' </div>&apos;&apos;'' </div>&apos;&apos;'&apos;&apos; <div className=&apos;mt-4 pt-4 border-t border-zion-purple/20&apos;>'&apos;&apos;'' <Link to=&apos;/enhanced-services&apos; className=&apos;text-zion-cyan hove,r: text-zion-cyan-light transition-colors text-sm font-medium flex items-center justify-center&apos;>';&apos; View All Services&apos;&apos;'&apos;&apos; <TrendingUp className=&apos;w-4 h-4 ml-2&apos;/>&apos; </Link> </div>&apos;&apos;' </div>&apos;&apos;' </div>)}&apos;&apos;' </div>';&apos; {}&apos;&apos;'&apos;&apos; <div className=&apos;relative group&apos;>'&apos;&apos;'' <button onMouseEnter={() => setIsSolutionsOpen(true)} onMouseLeave={() => setIsSolutionsOpen(false)} className=&apos;flex items-center space-x-1 text-sm font-medium transition-colors hover: text-primary text-muted-foreground&apos;>'&apos;&apos;'' <Brain className=&apos;w-4 h-4&apos;/>&apos;&apos;'' <span>Solutions</span>&apos;&apos;'&apos;&apos; <ChevronDown className=&apos;w-3 h-3&apos;/>&apos;&apos;' </button>&apos;&apos;' {isSolutionsOpen && (&apos;}&apos;<div onMouseEnter={() => setIsSolutionsOpen(true)} onMouseLeave={() => setIsSolutionsOpen(false)} className=&apos;absolute top-full left-0 mt-2 w-80 bg-zion-blue-dark border border-zion-purple/30 rounded-lg shadow-2xl shadow-zion-purple/20 z-50&apos;>'&apos;&apos;'' <div className=&apos;p-4&apos;>'&apos;&apos;'' <div className=&apos;grid grid-cols-2 gap-4&apos;>'&apos;&apos;' <div>&apos;&apos;'&apos;&apos; <h4 className=&apos;text-zion-cyan font-semibold mb-3 flex items-center&apos;>'&apos;&apos;'' <Users className=&apos;w-4 h-4 mr-2&apos;/>'; Talent&apos;&apos;'' </h4>&apos;&apos;'&apos;&apos; <ul className=&apos;space-y-2 text-sm&apos;>'&apos;&apos;'' <li><Link to=&apos;/talent&apos; className=&apos;text-zion-slate-light hover: text-zion-cyan transition-colors&apos;>Find Experts&apos;</Link></li>&apos;&apos;'&apos;&apos; <li><Link to=&apos;/zion-hire-ai&apos; className=&apos;text-zion-slate-light hover: text-zion-cyan transition-colors&apos;>AI Hiring&apos;</Link></li>&apos;&apos;'&apos;&apos; <li><Link to=&apos;/talent&apos; className=&apos;text-zion-slate-light hover: text-zion-cyan transition-colors&apos;>Skill Matching&apos;</Link></li>&apos;&apos;'&apos;&apos; <li><Link to=&apos;/talent&apos; className=&apos;text-zion-slate-light hover: text-zion-cyan transition-colors&apos;>Project Teams&apos;</Link></li>&apos;&apos;' </ul>&apos;&apos;' </div>&apos;&apos;'' <div>&apos;&apos;'&apos;&apos; <h4 className=&apos;text-zion-cyan font-semibold mb-3 flex items-center&apos;>'&apos;&apos;'' <HardDrive className=&apos;w-4 h-4 mr-2&apos;/>'; Resources&apos;&apos;'' </h4>&apos;&apos;'&apos;&apos; <ul className=&apos;space-y-2 text-sm&apos;>'&apos;&apos;'' <li><Link to=&apos;/equipment&apos; className=&apos;text-zion-slate-light hover: text-zion-cyan transition-colors&apos;>Hardware&apos;</Link></li>&apos;&apos;'&apos;&apos; <li><Link to=&apos;/marketplace&apos; className=&apos;text-zion-slate-light hover: text-zion-cyan transition-colors&apos;>Marketplace&apos;</Link></li>&apos;&apos;'&apos;&apos; <li><Link to=&apos;/categories&apos; className=&apos;text-zion-slate-light hover: text-zion-cyan transition-colors&apos;>Categories&apos;</Link></li>&apos;&apos;'&apos;&apos; <li><Link to=&apos;/green-it&apos; className=&apos;text-zion-slate-light hover: text-zion-cyan transition-colors&apos;>Green IT&apos;</Link></li>&apos;&apos;' </ul>&apos;&apos;' </div>&apos;&apos;'' </div>&apos;&apos;'&apos;&apos; <div className=&apos;mt-4 pt-4 border-t border-zion-purple/20&apos;>'&apos;&apos;'' <Link to=&apos;/request-quote&apos; className=&apos;text-zion-cyan hove,r: text-zion-cyan-light transition-colors text-sm font-medium flex items-center justify-center&apos;>';&apos; Get Custom Quote&apos;&apos;'&apos;&apos; <TrendingUp className=&apos;w-4 h-4 ml-2&apos;/>&apos; </Link> </div>&apos;&apos;' </div>&apos;&apos;' </div>)}&apos;&apos;' </div>&apos;&apos;'&apos;&apos; <Link to=&apos;/solutions&apos; className=&apos;text-zion-slate-light hover: text-white transition-colors&apos;>'; Solutions&apos;&apos;' </Link>&apos;&apos;'&apos;&apos; <Link to=&apos;/services&apos; className=&apos;text-zion-slate-light hover: text-white transition-colors&apos;>'; Services&apos;&apos;' </Link>&apos;&apos;'&apos;&apos; <Link to=&apos;/case-studies&apos; className=&apos;text-zion-slate-light hover: text-white transition-colors&apos;>'; Case Studies&apos;&apos;' </Link>&apos;&apos;'&apos;&apos; <Link to=&apos;/news&apos; className=&apos;text-zion-slate-light hover: text-white transition-colors&apos;>'; News&apos;&apos;' </Link>&apos;&apos;'&apos;&apos; <Link to=&apos;/events&apos; className=&apos;text-zion-slate-light hover: text-white transition-colors&apos;>'; Events&apos;&apos;' </Link>&apos;&apos;'&apos;&apos; <Link to=&apos;/about&apos; className=&apos;text-zion-slate-light hover: text-white transition-colors&apos;>'; About Us&apos;&apos;' </Link>&apos;&apos;'&apos;&apos; <Link to=&apos;/contact&apos; className=&apos;text-zion-slate-light hove,r: text-white transition-colors&apos;>'; Contact&apos;&apos;' </Link>&apos;&apos;'&apos;&apos; <NavLink to=&apos;/signup&apos; className={({ isActive }) => cn(&apos;text-sm font-medium transition-colors hover: text-primary&apos;, isActive ? &apos;text-zion-cyan&apos; : &apos;text-muted-foreground&apos;, &apos;bg-gradient-to-r from-zion-purple to-zion-purple-dark hover: from-zion-purple-light hover:to-zion-purple text-white px-6 py-2 rounded-lg shadow-lg shadow-zion-purple/25 hover:shadow-xl hover:shadow-zion-purple/40 transition-all duration-300 hove,r:-translate-y-1&apos;)}>&apos; Get Started&apos;&apos;' </NavLink>&apos;&apos;' </nav>)}';&apos;';&apos;'&quot;&quot;"
=======
<<<<<<< HEAD
import React, { useState } from 'react';""
import { Link, useLocation } from 'react-router-dom';""
=======
<<<<<<< HEAD
import React, { useState } from 'react' import { Link } from 'react-router-dom' import { cn } from '@/lib/utils'';'' import { NavLink } from 'react-router-dom'';'' import { ChevronDown, Zap, Brain, Shield, Users, HardDrive, TrendingUp } from 'lucide-react' export function MainNavigation({ className }) {' const [isServicesOpen, setIsServicesOpen] = useState(false)'; const [isSolutionsOpen, setIsSolutionsOpen] = useState(false)'; return (<nav className = {';'' cn('hidden md: flex items-center space-x-6', '; className)';' }>''' <NavLink to='/' className={({ isActive }) => cn('text-sm font-medium transition-colors hover: text-primary', isActive ? 'text-zion-cyan' : 'text-muted-foreground')}>'; Home' </NavLink>';' {}''' <div className='relative group'>''' <button onMouseEnter={() => setIsServicesOpen(true)} onMouseLeave={() => setIsServicesOpen(false)} className='flex items-center space-x-1 text-sm font-medium transition-colors hover: text-primary text-muted-foreground'>''' <Zap className='w-4 h-4'/>'' <span>Services</span>''' <ChevronDown className='w-3 h-3'/>' </button>''' {isServicesOpen && (<div onMouseEnter={() => setIsServicesOpen(true)} onMouseLeave={() => setIsServicesOpen(false)} className='absolute top-full left-0 mt-2 w-80 bg-zion-blue-dark border border-zion-purple/30 rounded-lg shadow-2xl shadow-zion-purple/20 z-50'>''' <div className='p-4'>''' <div className='grid grid-cols-2 gap-4'>'' <div>''' <h4 className='text-zion-cyan font-semibold mb-3 flex items-center'>''' <Zap className='w-4 h-4 mr-2'/>'; Micro SAAS'' </h4>''' <ul className='space-y-2 text-sm'>''' <li><Link to='/enhanced-services' className='text-zion-slate-light hover: text-zion-cyan transition-colors'>Content Tools</Link></li>''' <li><Link to='/enhanced-services' className='text-zion-slate-light hover: text-zion-cyan transition-colors'>Marketing Automation</Link></li>''' <li><Link to='/enhanced-services' className='text-zion-slate-light hover: text-zion-cyan transition-colors'>Business Tools</Link></li>''' <li><Link to='/enhanced-services' className='text-zion-slate-light hover: text-zion-cyan transition-colors'>Customer Support</Link></li>' </ul>' </div>'' <div>''' <h4 className='text-zion-cyan font-semibold mb-3 flex items-center'>''' <Shield className='w-4 h-4 mr-2'/>'; IT Services'' </h4>''' <ul className='space-y-2 text-sm'>''' <li><Link to='/enhanced-services' className='text-zion-slate-light hover: text-zion-cyan transition-colors'>Cloud Migration</Link></li>''' <li><Link to='/enhanced-services' className='text-zion-slate-light hover: text-zion-cyan transition-colors'>Cybersecurity</Link></li>''' <li><Link to='/enhanced-services' className='text-zion-slate-light hover: text-zion-cyan transition-colors'>DevOps</Link></li>''' <li><Link to='/it-onsite-services' className='text-zion-slate-light hover: text-zion-cyan transition-colors'>Onsite Support</Link></li>' </ul>' </div>'' </div>''' <div className='mt-4 pt-4 border-t border-zion-purple/20'>''' <Link to='/enhanced-services' className='text-zion-cyan hover: text-zion-cyan-light transition-colors text-sm font-medium flex items-center justify-center'>';' View All Services''' <TrendingUp className='w-4 h-4 ml-2'/> </Link> </div>' </div>' </div>)}' </div>';' {}''' <div className='relative group'>''' <button onMouseEnter={() => setIsSolutionsOpen(true)} onMouseLeave={() => setIsSolutionsOpen(false)} className='flex items-center space-x-1 text-sm font-medium transition-colors hover: text-primary text-muted-foreground'>''' <Brain className='w-4 h-4'/>'' <span>Solutions</span>''' <ChevronDown className='w-3 h-3'/>' </button>''' {isSolutionsOpen && (<div onMouseEnter={() => setIsSolutionsOpen(true)} onMouseLeave={() => setIsSolutionsOpen(false)} className='absolute top-full left-0 mt-2 w-80 bg-zion-blue-dark border border-zion-purple/30 rounded-lg shadow-2xl shadow-zion-purple/20 z-50'>''' <div className='p-4'>''' <div className='grid grid-cols-2 gap-4'>'' <div>''' <h4 className='text-zion-cyan font-semibold mb-3 flex items-center'>''' <Users className='w-4 h-4 mr-2'/>'; Talent'' </h4>''' <ul className='space-y-2 text-sm'>''' <li><Link to='/talent' className='text-zion-slate-light hover: text-zion-cyan transition-colors'>Find Experts</Link></li>''' <li><Link to='/zion-hire-ai' className='text-zion-slate-light hover: text-zion-cyan transition-colors'>AI Hiring</Link></li>''' <li><Link to='/talent' className='text-zion-slate-light hover: text-zion-cyan transition-colors'>Skill Matching</Link></li>''' <li><Link to='/talent' className='text-zion-slate-light hover: text-zion-cyan transition-colors'>Project Teams</Link></li>' </ul>' </div>'' <div>''' <h4 className='text-zion-cyan font-semibold mb-3 flex items-center'>''' <HardDrive className='w-4 h-4 mr-2'/>'; Resources'' </h4>''' <ul className='space-y-2 text-sm'>''' <li><Link to='/equipment' className='text-zion-slate-light hover: text-zion-cyan transition-colors'>Hardware</Link></li>''' <li><Link to='/marketplace' className='text-zion-slate-light hover: text-zion-cyan transition-colors'>Marketplace</Link></li>''' <li><Link to='/categories' className='text-zion-slate-light hover: text-zion-cyan transition-colors'>Categories</Link></li>''' <li><Link to='/green-it' className='text-zion-slate-light hover: text-zion-cyan transition-colors'>Green IT</Link></li>' </ul>' </div>'' </div>''' <div className='mt-4 pt-4 border-t border-zion-purple/20'>''' <Link to='/request-quote' className='text-zion-cyan hover: text-zion-cyan-light transition-colors text-sm font-medium flex items-center justify-center'>';' Get Custom Quote''' <TrendingUp className='w-4 h-4 ml-2'/> </Link> </div>' </div>' </div>)}' </div>''' <Link to='/solutions' className='text-zion-slate-light hover: text-white transition-colors'>'; Solutions' </Link>''' <Link to='/services' className='text-zion-slate-light hover: text-white transition-colors'>'; Services' </Link>''' <Link to='/case-studies' className='text-zion-slate-light hover: text-white transition-colors'>'; Case Studies' </Link>''' <Link to='/news' className='text-zion-slate-light hover: text-white transition-colors'>'; News' </Link>''' <Link to='/events' className='text-zion-slate-light hover: text-white transition-colors'>'; Events' </Link>''' <Link to='/about' className='text-zion-slate-light hover: text-white transition-colors'>'; About Us' </Link>''' <Link to='/contact' className='text-zion-slate-light hover: text-white transition-colors'>'; Contact' </Link>''' <NavLink to='/signup' className={({ isActive }) => cn('text-sm font-medium transition-colors hover: text-primary', isActive ? 'text-zion-cyan' : 'text-muted-foreground', 'bg-gradient-to-r from-zion-purple to-zion-purple-dark hover: from-zion-purple-light hover:to-zion-purple text-white px-6 py-2 rounded-lg shadow-lg shadow-zion-purple/25 hover:shadow-xl hover:shadow-zion-purple/40 transition-all duration-300 hover:-translate-y-1')}>' Get Started' </NavLink>' </nav>)}';'';''""
=======
import React, { useState } from 'react
import { Link, useLocation } from 'react-router-dom
>>>>>>> main
import { ChevronDown } from 'lucide-react';
>>>>>>> main

export function MainNavigation() {const location = useLocation();
  const [activeDropdown, setActiveDropdown] = useState(null);

<<<<<<< HEAD
  const navigationItems = [
    {'
=======
<<<<<<< HEAD
  const navigationItems = [{
>>>>>>> main
      name: 'Home',
      href: '/',
      current: location.pathname === '/'
    },
<<<<<<< HEAD
    {'
      name: 'Services',
      href: '/services',
      current: location.pathname.startsWith('/services'),
      children: ['
        { nam,
    e: 'AI Services', href: '/services/ai' },
        { name: 'Cloud Solutions', href: '/services/cloud' },
        { name: 'Cybersecurity', href: '/services/cybersecurity' },
        { name: 'IT Infrastructure', href: '/services/infrastructure' },
        { name: 'Digital Transformation', href: '/services/transformation' },
        { name: 'Consulting', href: '/services/consulting' }
      ]
    },
    {'
      name: 'Solutions',
      href: '/solutions',
      current: location.pathname.startsWith('/solutions'),
      children: ['
        { nam,
    e: 'Industry Solutions', href: '/solutions/industry' },
        { name: 'Manufacturing', href: '/solutions/manufacturing' },
        { name: 'Financial Services', href: '/solutions/financial' },
        { name: 'Healthcare', href: '/solutions/healthcare' },
        { name: 'Retail', href: '/solutions/retail' }
      ]
    },
    {'
      name: 'About',
      href: '/about',
      current: location.pathname.startsWith('/about'),
      children: ['
        { nam,
    e: 'Company', href: '/about' },
        { name: 'Team', href: '/about/team' },
        { name: 'Careers', href: '/careers' },
        { name: 'Partners', href: '/partners' }
      ]
    },
    {'
      name: 'Resources',
      href: '#',
      current: false,
      children: ['
        { nam,
    e: 'Case Studies', href: '/case-studies' },
        { name: 'Research & Development', href: '/research-development' },
        { name: 'Events', href: '/events' },
        { name: 'News', href: '/news' },
        { name: 'Blog', href: '/blog' },
        { name: 'White Papers', href: '/white-papers' },
        { name: 'Webinars', href: '/webinars' }
      ]
    },
    {'
      name: 'Support',
      href: '/support',
      current: location.pathname.startsWith('/support'),
      children: ['
        { nam,
    e: 'Help Center', href: '/support' },
        { name: 'Documentation', href: '/docs' },
        { name: 'Training', href: '/training' },
        { name: 'Contact', href: '/contact' }
=======
    {name: 'Services',
      href: '/services',
      current: location.pathname.startsWith('/services'),
      children: [
        { name: 'AI Services', href: '/services/ai' },
        {name: 'Cloud Solutions', href: '/services/cloud' },
        {name: 'Cybersecurity', href: '/services/cybersecurity' },
        {name: 'IT Infrastructure', href: '/services/infrastructure' },
        {name: 'Digital Transformation', href: '/services/transformation' },
        {name: 'Consulting', href: '/services/consulting' }
      ]
    },
    {name: 'Solutions',
      href: '/solutions',
      current: location.pathname.startsWith('/solutions'),
      children: [{ name: 'Industry Solutions', href: '/solutions/industry' },
        {name: 'Manufacturing', href: '/solutions/manufacturing' },
        {name: 'Financial Services', href: '/solutions/financial' },
        {name: 'Healthcare', href: '/solutions/healthcare' },
        {name: 'Retail', href: '/solutions/retail' }
      ]
    },
    {name: 'About',
      href: '/about',
      current: location.pathname.startsWith('/about'),
      children: [{ name: 'Company', href: '/about' },
        {name: 'Team', href: '/about/team' },
        {name: 'Careers', href: '/careers' },
        {name: 'Partners', href: '/partners' }
      ]
    },
    {name: 'Resources',
      href: '#',
      current: false,
      children: [{ name: 'Case Studies', href: '/case-studies' },
        {name: 'Research & Development', href: '/research-development' },
        {name: 'Events', href: '/events' },
        {name: 'News', href: '/news' },
        {name: 'Blog', href: '/blog' },
        {name: 'White Papers', href: '/white-papers' },
        {name: 'Webinars', href: '/webinars' }
      ]
    },
    {name: 'Support',
      href: '/support',
      current: location.pathname.startsWith('/support'),
      children: [{ name: 'Help Center', href: '/support' },
        {name: 'Documentation', href: '/docs' },
        {name: 'Training', href: '/training' },
        {name: 'Contact', href: '/contact' }
>>>>>>> main
      ]
    }
  ];

  const handleDropdownToggle = (index) => {setActiveDropdown(activeDropdown === index ? null : index);
  };
=======
  const navigationItems = [
<<<<<<< HEAD
    {""
      name: 'Home', ""
      href: '/',""
      current: location.pathname === '/', },
    {""
      name: 'Services', ""
      href: '/services',""
      current: location.pathname.startsWith('/services'), children: [""
        { name: 'AI Services', href: '/services/ai' }, ""
        { name: 'Cloud Solutions', href: '/services/cloud' }, ""
        { name: 'Cybersecurity', href: '/services/cybersecurity' }, ""
        { name: 'IT Infrastructure', href: '/services/infrastructure' }, ""
        { name: 'Digital Transformation', href: '/services/transformation' }, ""
        { name: 'Consulting', href: '/services/consulting' }
      ], },
    {""
      name: 'Solutions', ""
      href: '/solutions',""
      current: location.pathname.startsWith('/solutions'), children: [""
        { name: 'Industry Solutions', href: '/solutions/industry' }, ""
        { name: 'Manufacturing', href: '/solutions/manufacturing' }, ""
        { name: 'Financial Services', href: '/solutions/financial' }, ""
        { name: 'Healthcare', href: '/solutions/healthcare' }, ""
        { name: 'Retail', href: '/solutions/retail' }
      ], },
    {""
      name: 'About', ""
      href: '/about',""
      current: location.pathname.startsWith('/about'), children: [""
        { name: 'Company', href: '/about' }, ""
        { name: 'Team', href: '/about/team' }, ""
        { name: 'Careers', href: '/careers' }, ""
        { name: 'Partners', href: '/partners' }
      ], },
    {""
      name: 'Resources', ""
=======
  {"
      name: 'Home,
      href: '/,
      current: location.pathname === '/',
},
    {"
      name: 'Services,
      href: '/services,
      current: location.pathname.startsWith('/services'),
      children: ["
        { name: 'AI Services', href: '/services/ai' },"
        { name: 'Cloud Solutions', href: '/services/cloud' },"
        { name: 'Cybersecurity', href: '/services/cybersecurity' },"
        { name: 'IT Infrastructure', href: '/services/infrastructure' },"
        { name: 'Digital Transformation', href: '/services/transformation' },"
        { name: 'Consulting', href: '/services/consulting' }
      ],
},
    {"
      name: 'Solutions,
      href: '/solutions,
      current: location.pathname.startsWith('/solutions'),
      children: ["
        { name: 'Industry Solutions', href: '/solutions/industry' },"
        { name: 'Manufacturing', href: '/solutions/manufacturing' },"
        { name: 'Financial Services', href: '/solutions/financial' },"
        { name: 'Healthcare', href: '/solutions/healthcare' },"
        { name: 'Retail', href: '/solutions/retail' }
      ],
},
    {"
      name: 'About,
      href: '/about,
      current: location.pathname.startsWith('/about'),
      children: ["
        { name: 'Company', href: '/about' },"
        { name: 'Team', href: '/about/team' },"
        { name: 'Careers', href: '/careers' },"
        { name: 'Partners', href: '/partners' }
      ],
},
    {"
      name: 'Resources,
>>>>>>> main
      href: '#',
      current: false, children: [""
        { name: 'Case Studies', href: '/case-studies' }, ""
        { name: 'Research & Development', href: '/research-development' }, ""
        { name: 'Events', href: '/events' }, ""
        { name: 'News', href: '/news' }, ""
        { name: 'Blog', href: '/blog' }, ""
        { name: 'White Papers', href: '/white-papers' }, ""
        { name: 'Webinars', href: '/webinars' }
<<<<<<< HEAD
      ], },
    {""
      name: 'Support', ""
      href: '/support',""
      current: location.pathname.startsWith('/support'), children: [""
        { name: 'Help Center', href: '/support' }, ""
        { name: 'Documentation', href: '/docs' }, ""
        { name: 'Training', href: '/training' }, ""
=======
      ],
},
    {"
      name: 'Support,
      href: '/support,
      current: location.pathname.startsWith('/support'),
      children: ["
        { name: 'Help Center', href: '/support' },"
        { name: 'Documentation', href: '/docs' },"
        { name: 'Training', href: '/training' },"
>>>>>>> main
        { name: 'Contact', href: '/contact' }
      ], }
  ];

<<<<<<< HEAD
  return ('
    <nav className="flex space-x-8">
      {navigationItems.map((item, index) => ("
        <div key={item.name} className="relative">
          {item.children ? ("
            <div className="relative">
              <button
                onClick={() => handleDropdownToggle(index)}"
                className={`flex items-center space-x-1 px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                  item.current`
                    ? 'text-zion-cyan bg-zion-purple/10''
                    : 'text-zion-slate-light hover:text-white hove,
    r:bg-zion-purple/10''
                }`}
              >
                <span>{item.name}</span>
                <ChevronDown `
                  className={`h-4 w-4 transition-transform ${`
                    activeDropdown === index ? 'rotate-180' : '''
                  }`} 
                />
              </button>
              
              {/* Dropdown Menu */}
              {activeDropdown === index && (`
                <div className="absolute top-full left-0 mt-2 w-64 bg-zion-blue-dark/95 backdrop-blur-xl border border-zion-purple/30 rounded-lg shadow-2xl shadow-zion-purple/20 z-50">"
                  <div className="py-2">
                    {item.children.map((child) => (
                      <Link
                        key={child.name}
                        to={child.href}"
                        className="block px-4 py-3 text-sm text-zion-slate-light hover:text-white hove,
    r:bg-zion-purple/10 transition-colors"
                        onClick={() => setActiveDropdown(null)}
=======
  const handleDropdownToggle = (index) => {
    setActiveDropdown(activeDropdown === index ? null : index);, };
>>>>>>> main

  return (""
    <nav className="flex space-x-8">
      {navigationItems.map((item, index) => (""
        <div key={item.name} className="relative">
          {item.children ? (""
            <div className="relative">
<<<<<<< HEAD
              <button onClick={() => handleDropdownToggle(index)}
=======
              <button onClick={() =" > handleDropdownToggle(index)}"
>>>>>>> main
                className={`flex items-center space-x-1 px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                  item.current""
                    ? 'text-zion-cyan bg-zion-purple/10'
<<<<<<< HEAD
                    : 'text-zion-slate-light hover: text-white hover:bg-zion-purple/10'
                }`}
              >
                <span>{item.name}</span>
                <ChevronDown className={`h-4 w-4 transition-transform ${ activeDropdown === index ? 'rotate-180' : '' }`} />
              </button>
              
              {/* Dropdown Menu */}, {activeDropdown === index && (
                <div className="absolute top-full left-0 mt-2 w-64 bg-zion-blue-dark/95 backdrop-blur-xl border border-zion-purple/30 rounded-lg shadow-2xl shadow-zion-purple/20 z-50">
                  <div className="py-2">
                    {item.children.map((child) => (
                      <Link key={child.name} to={child.href} className="block px-4 py-3 text-sm text-zion-slate-light hover: text-white hover:bg-zion-purple/10 transition-colors" onClick={() => setActiveDropdown(null)}
=======
                    : 'text-zion-slate-light hover:text-white hover:bg-zion-purple/10', `
}`}
              >
                <span>{item.name}</span>`
<<<<<<< HEAD
                <ChevronDown className={`h-4 w-4 transition-transform ${""
                    activeDropdown === index ? 'rotate-180' : '',`
}`} 
                /" >"
=======
                <ChevronDown className={`h-4 w-4 transition-transform ${"
                    activeDropdown === index ? 'rotate-180' :  ,`
}`} 
                /' >
>>>>>>> main
              </button>
              
              {/* Dropdown Menu */}
              {activeDropdown === index && (""
                <div className="absolute top-full left-0 mt-2 w-64 bg-zion-blue-dark/95 backdrop-blur-xl border border-zion-purple/30 rounded-lg shadow-2xl shadow-zion-purple/20 z-50">""
                  <div className="py-2">
                    {item.children.map((child) => (
                      <Link key={child.name}
                        to={child.href}""
                        className="block px-4 py-3 text-sm text-zion-slate-light hover: text-white hover:bg-zion-purple/10 transition-colors"
                        onClick={() =" > setActiveDropdown(null)}"
>>>>>>> main
>>>>>>> main
                      >
                        {child.name}
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>
          ) : (
<<<<<<< HEAD
            <Link
              to={item.href}"
              className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                item.current`
                  ? 'text-zion-cyan bg-zion-purple/10''
                  : 'text-zion-slate-light hover:text-white hove,
    r:bg-zion-purple/10''
              }`}
            >
=======
<<<<<<< HEAD
            <Link to={item.href} className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${ item.current ? 'text-zion-cyan bg-zion-purple/10' : 'text-zion-slate-light hover: text-white hover:bg-zion-purple/10' }`} >
=======
            <Link to={item.href}`
              className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                item.current""
                  ? 'text-zion-cyan bg-zion-purple/10'
                  : 'text-zion-slate-light hover:text-white hover:bg-zion-purple/10', `
}`}" >"
>>>>>>> main
>>>>>>> main
              {item.name}
            </Link>
          )}
        </div>
      ))}
    </nav>
<<<<<<< HEAD
  );
}`
=======
  );,
}
<<<<<<< HEAD
"`"
=======
"`
>>>>>>> main
>>>>>>> main
>>>>>>> main
>>>>>>> main
>>>>>>> main
>>>>>>> main

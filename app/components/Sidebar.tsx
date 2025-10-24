<<<<<<< HEAD:app/components/Sidebar.tsx
'use client';
import {Phone, Mail, Brain} from 'lucide-react';
import React from 'react';
import { Helmet } from 'react-helmet-async';
import { ArrowRight, X, Brain, BarChart, Target, TrendingUp } from 'lucide-react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import { CheckCircle, ArrowRight, Star, Clock, Zap, Shield, Brain, BarChart, Target, TrendingUp, Globe, Database, Users, Settings, Check } from 'lucide-react';
const SidebarPage: React.FC = () => {
  const features = [
    {
      icon: Brain,
    title: 'AI-Powered Intelligence',
      description: 'Advanced AI algorithms that provide intelligent insights and recommendations.',
    benefits: ['Smart recommendations', 'Predictive analytics', 'Automated insights', 'Real-time analysis']
},
  {
    icon: BarChart,
    title: 'Advanced Analytics',
      description: 'Comprehensive analytics dashboard with real-time data visualization.',
    benefits: ['Real-time dashboards', 'Custom reports', 'Data visualization', 'Performance metrics']
},
  {
    icon: Target,
    title: 'Precision Targeting',
      description: 'Target specific goals and objectives with precision and accuracy.',
    benefits: ['Goal tracking', 'Performance optimization', 'Strategic planning', 'Success metrics']
},
  {
    icon: TrendingUp,
    title: 'Growth Optimization',
      description: 'Optimize your business growth with data-driven strategies.',
    benefits: ['Growth strategies', 'Market analysis', 'Competitive insights', 'ROI optimization']
}
  ]
  const benefits = [
  'Increase efficiency by up to 50%',
    'Reduce costs by 30% with automation',
    'Improve decision-making with AI insights',
    'Scale operations without proportional staff increases',
=======
import {Phone, Mail, Brain} from 'lucide-react'
import React from 'react'
import { Helmet } from 'react-helmet-async'
import { ArrowRight, X, Brain, BarChart, Target, TrendingUp } from 'lucide-react'
import Navigation from '../components/Navigation'
import Footer from '../components/Footer'
import { CheckCircle, ArrowRight, Star, Clock, Zap, Shield, Brain, BarChart, Target, TrendingUp, Globe, Database, Users, Settings, Check } from 'lucide-react'
'use client'
    "title": 'AI-Powered Intelligence',
      "description": 'Advanced AI algorithms that provide intelligent insights and recommendations.',
    "benefits": ['Smart recommendations', 'Predictive analytics', 'Automated insights', 'Real-time analysis'
    "title": 'Advanced Analytics',
      "description": 'Comprehensive analytics dashboard with real-time data visualization.',
    "benefits": ['Real-time dashboards', 'Custom reports', 'Data visualization', 'Performance metrics'
    "title": 'Precision Targeting',
      "description": 'Target specific goals and objectives with precision and accuracy.',
    "benefits": ['Goal tracking', 'Performance optimization', 'Strategic planning', 'Success metrics'
    "title": 'Growth Optimization',
      "description": 'Optimize your business growth with data-driven strategies.',
    "benefits": ['Growth strategies', 'Market analysis', 'Competitive insights', 'ROI optimization'
  'Increase efficiency by up to 50%'
    'Reduce costs by 30% with automation'
    'Improve decision-making with AI insights'
    'Scale operations without proportional staff increases'
>>>>>>> origin/main:app-backup/components/Sidebar.tsx
    'Gain competitive advantage with advanced technology'
} from 'lucide-react'
<<<<<<< HEAD:app/components/Sidebar.tsx
constSidebar: React.FC= () =>{const [isOpensetIsOpen] = useState(false)
const [expandedSectionssetExpandedSections]=useState<Set<strin g>>(new Set(['ai-services', 'micro-saas', 'it-services']))
constlocation= useLocation()
useEffect(() => {
consthandleResize= () => {
if (windo w.innerWidth >=1024) {
setIsOpen(false)}
}
windo w.addEventListener('resize', handleResize)
return (
    <>
      ) => windo w.removeEventListener('resize', handleResize)
}, [])
consttoggleSection= (section: string) => {constnewExpanded= new Set(expandedSections)
if (newExpanded.has(section)) {) => {
return (
$3
)}
newExpanded.delete(section)}
} else {newExpanded.add(section)}
}
setExpandedSections(newExpanded)
}
constnavigationSections= [
{title: 'Main',
    items: [
{ name: 'Home', path: '/', icon: Home},
{name: 'About', path: '/about', icon: Users},
{name: 'Services', path: '/services', icon: Settings},
{name: 'Contact', path: '/contact', icon: Phone},
{name: 'Blog', path: '/blog', icon: BarChart}
{name: 'Case Studies', path: '/case-studies', icon: BarChart}]
}
{title: 'AI Services',
    key: 'ai-services',
items: [
{ name: 'AI Services Overview', path: '/ai-services', icon: Brain},
{name: 'Business Intelligence', path: '/ai-services/business-intelligence', icon: BarChart},
{name: 'Document Processing', path: '/ai-services/do cument-processing', icon: Settings},
{name: 'Customer Experience', path: '/ai-services/customer-experience', icon: Users},
{name: 'Marketing Automation', path: '/ai-services/marketing-automation', icon: Settings},
{name: 'Predictive Maintenance', path: '/ai-services/predictive-maintenance', icon: Settings},
{name: 'Supply Chain', path: '/ai-services/supply-chain', icon: Settings},
{name: 'Fraud Detection', path: '/ai-services/fraud-detection', icon: Shield},
{name: 'Content Generation', path: '/ai-services/content-generation', icon: Settings},
{name: 'HR Analytics', path: '/ai-services/hr-analytics', icon: BarChart},
{name: 'Process Automation', path: '/ai-services/process-automation', icon: Settings},
{name: 'Quality Assurance', path: '/ai-services/quality-assurance', icon: Shield}
{name: 'Energy Management', path: '/ai-services/energy-management', icon: Settings}]
}
{title: 'Micro SaaS',
    key: 'micro-saas',
items: [
{ name: 'Micro SaaS Overview', path: '/micro-saas', icon: Settings},
{name: 'Analytics Dashboard', path: '/micro-saas/analytics-dashboard', icon: BarChart},
{name: 'Support Bot', path: '/micro-saas/support-bot', icon: Users},
{name: 'Social Manager', path: '/micro-saas/social-manager', icon: Settings},
{name: 'Email Marketing', path: '/micro-saas/email-marketing', icon: Mail},
{name: 'Inventory Management', path: '/micro-saas/inventory-management', icon: Settings},
{name: 'Lead Scoring', path: '/micro-saas/lead-scoring', icon: BarChart},
{name: 'Document Processor', path: '/micro-saas/do cument-processor', icon: Settings},
{name: 'SEO Optimizer', path: '/micro-saas/seo-optimizer', icon: Settings},
{name: 'Appointment Scheduler', path: '/micro-saas/appointment-scheduler', icon: Clock},
{name: 'Chat Analytics', path: '/micro-saas/chat-analytics', icon: BarChart},
{name: 'Expense Tracker', path: '/micro-saas/expense-tracker', icon: BarChart}
{name: 'Content Generator', path: '/micro-saas/content-generator', icon: Settings}]
}
{title: 'IT Services',
    key: 'it-services',
items: [
{ name: 'IT Services Overview', path: '/it-services', icon: Code},
{name: 'IT Consulting', path: '/it-consulting', icon: Users},
{name: 'IT Infrastructure', path: '/it-infrastructure', icon: Settings},
{name: 'IT Support', path: '/it-support', icon: Users},
{name: 'Cloud Infrastructure', path: '/cloud-infrastructure', icon: Cloud},
{name: 'Cloud Migration', path: '/cloud-migration', icon: Cloud},
{name: 'Cybersecurity', path: '/cybersecurity', icon: Shield},
{name: 'Database Management', path: '/database-management', icon: Settings}
{name: 'Managed IT', path: '/managed-it', icon: Settings}]
}
{title: 'Company',
    items: [
{ name: 'Team', path: '/team', icon: Users},
{name: 'Careers', path: '/careers', icon: Users},
{name: 'Consultation', path: '/consultation', icon: Phone}
{name: 'Pricing', path: '/pricing', icon: BarChart}]
}
{title: 'Resources',
    items: [
{ name: 'Documentation', path: '/do cs', icon: Settings},
{name: 'API Docs', path: '/api-do cs', icon: Code},
{name: 'Support', path: '/support', icon: Users}
{name: 'Status', path: '/status', icon: Settings}]
}
]
constcontactInfo= {phone: '(30 2
    </>
  ) 46 4-095 0'
email: 'kleber@ziontechgroup.com',
    address: '364 E Main St STE 1008 Middletown, DE 19709',
hours: 'Mon-Fri 9AM-6PM EST'}
return (
<>
{/* Mobile Menu Button */}
<button
onClick={() =></button> setIsOpen(true)}
className=&quot;lg: hidden fixed top-4 left-4 z-50 bg-slate-800/90 backdrop-blur-lg text-white p-3 rounded-lg border border-cyan-400/20 hover:bg-slate-700/90 transition-all&quot;
aria-label=&quot;Open sidebar&quot
>
<Menu className=&quot;w-6 h-6&quot; />
</button>
{/* Sidebar Overlay */}
{
  isOpen && (
<div
className=&quot;fixed inset-0 bg-black/50 backdrop-blur-sm z-40 lg: hidden&quot
  }
onClick={() =>setIsOpen(false)}</div>
/>
)}
{/* Sidebar */}</div>
<aside className={
  `fixed top-0 left-0 h-full w-80 bg-slate-900/95 backdrop-blur-lg border-r border-cyan-400/20 z-50 transform transition-transform duration-300 ${
isOpen ? 'translate-x-0' : '-translate-x-full'
} lg:translate-x-0 lg:static lg:z-auto`}>
<div className=&quot;flex flex-col h-full&quot;></div>
{/* Header */}</div>
<div className=&quot;flex items-center justify-between p-6 border-b border-slate-700/50&quot;></div>
<Link to=&quot;/&quot; className=&quot;flex items-center space-x-3&quot; onClick={() => setIsOpen(false)}>
<div className=&quot;w-10 h-10 bg-gradient-to-r from-cyan-400 to-purple-400 rounded-lg flex items-center justify-center&quot;></div>
<Brain className=&quot;w-6 h-6 text-white&quot; />
</div>
<div></div>
<h2 className=&quot;text-xl font-bold text-white cyber-text&quot;>Zion Tech Group</h2>
<p className=&quot;text-xs text-cyan-400&quot;>AI & IT Solutions</p>
</div>
</Link>
<button
onClick={() =></button> setIsOpen(false)}
className=&quot;lg: hidden text-gray-400 hover:text-white transition-colors&quot;
aria-label=&quot;Close sidebar&quot
>
<X className=&quot;w-6 h-6&quot; />
</button>
</div>
{/* Navigation */}
<div className=&quot;flex-1 overflow-y-auto py-6&quot;></div>
<nav className=&quot;space-y-2 px-4&quot;>
{navigationSections.map((section, sectionIndex) => (}
<div key={sectionIndex} className=&quot;space-y-1&quot;></div>
<button
onClick={() =></button> section.key && toggleSection(section.key)}
className=&quot;flex items-center justify-between w-full px-3 py-2 text-sm font-semibold text-cyan-400 hover: text-cyan-300 transition-colors&quot;>
<span>{section.title}</span>
{section.key && (
expandedSections.has(section.key) ?
<ChevronDown className=&quot;w-4 h-4&quot; /> :
<ChevronRight className=&quot;w-4 h-4&quot; />
)}
</button>
{(!section.key || expandedSections.has(section.key)) && (
<div className=&quot;ml-4 space-y-1&quot;></div>
{section.items.map((item, itemIndex) => (</div>
<Link
key={itemIndex}
=======
const [expandedSectionssetExpandedSections]=useState<Set<strin g>>(new Set(['ai-services', 'micro-saas', 'it-services';
windo w.addEventListener('resize'
      ) => windo w.removeEventListener('resize'
{"title": 'Main',
{ "name": 'Home', "path": '/',
{"name": 'About', "path": '/about',
{"name": 'Services', "path": '/services',
{"name": 'Contact', "path": '/contact',
{"name": 'Blog', "path": '/blog',
{"name": 'Case Studies', "path": '/case-studies',
{"title": 'AI Services',
    "key": 'ai-services',
{ "name": 'AI Services Overview', "path": '/ai-services',
{"name": 'Business Intelligence', "path": '/ai-services/business-intelligence',
{"name": 'Document Processing', "path": '/ai-services/do cument-processing',
{"name": 'Customer Experience', "path": '/ai-services/customer-experience',
{"name": 'Marketing Automation', "path": '/ai-services/marketing-automation',
{"name": 'Predictive Maintenance', "path": '/ai-services/predictive-maintenance',
{"name": 'Supply Chain', "path": '/ai-services/supply-chain',
{"name": 'Fraud Detection', "path": '/ai-services/fraud-detection',
{"name": 'Content Generation', "path": '/ai-services/content-generation',
{"name": 'HR Analytics', "path": '/ai-services/hr-analytics',
{"name": 'Process Automation', "path": '/ai-services/process-automation',
{"name": 'Quality Assurance', "path": '/ai-services/quality-assurance',
{"name": 'Energy Management', "path": '/ai-services/energy-management',
{"title": 'Micro SaaS',
    "key": 'micro-saas',
{ "name": 'Micro SaaS Overview', "path": '/micro-saas',
{"name": 'Analytics Dashboard', "path": '/micro-saas/analytics-dashboard',
{"name": 'Support Bot', "path": '/micro-saas/support-bot',
{"name": 'Social Manager', "path": '/micro-saas/social-manager',
{"name": 'Email Marketing', "path": '/micro-saas/email-marketing',
{"name": 'Inventory Management', "path": '/micro-saas/inventory-management',
{"name": 'Lead Scoring', "path": '/micro-saas/lead-scoring',
{"name": 'Document Processor', "path": '/micro-saas/do cument-processor',
{"name": 'SEO Optimizer', "path": '/micro-saas/seo-optimizer',
{"name": 'Appointment Scheduler', "path": '/micro-saas/appointment-scheduler',
{"name": 'Chat Analytics', "path": '/micro-saas/chat-analytics',
{"name": 'Expense Tracker', "path": '/micro-saas/expense-tracker',
{"name": 'Content Generator', "path": '/micro-saas/content-generator',
{"title": 'IT Services',
    "key": 'it-services',
{ "name": 'IT Services Overview', "path": '/it-services',
{"name": 'IT Consulting', "path": '/it-consulting',
{"name": 'IT Infrastructure', "path": '/it-infrastructure',
{"name": 'IT Support', "path": '/it-support',
{"name": 'Cloud Infrastructure', "path": '/cloud-infrastructure',
{"name": 'Cloud Migration', "path": '/cloud-migration',
{"name": 'Cybersecurity', "path": '/cybersecurity',
{"name": 'Database Management', "path": '/database-management',
{"name": 'Managed IT', "path": '/managed-it',
{"title": 'Company',
{ "name": 'Team', "path": '/team',
{"name": 'Careers', "path": '/careers',
{"name": 'Consultation', "path": '/consultation',
{"name": 'Pricing', "path": '/pricing',
{"title": 'Resources',
{ "name": 'Documentation', "path": '/do cs',
{"name": 'API Docs', "path": '/api-do cs',
{"name": 'Support', "path": '/support',
{"name": 'Status', "path": '/status',}
constcontactInfo= {"phone": ',
  ) 46 4-095 0''
"email": 'kleber@ziontechgroup.com',
    "address": '364 E Main St STE 1008 Middletown, DE 19709'
"hours": 'Mon-Fri 9AM-6PM EST';,
isOpen ? 'translate-x-0' : '-translate-x-full'
>>>>>>> origin/main:app-backup/components/Sidebar.tsx

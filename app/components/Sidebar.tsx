<<<<<<< HEAD
'use client';

import React, { useState } from 'react';
import { X, Home, User, Settings, LogOut, ChevronRight } from 'lucide-react';

interface SidebarProps {
  isOpen: boolean;
  onClose: () => void;
  menuItems?: Array<{
    label: string;
    href: string;
    icon?: React.ReactNode;
    submenu?: Array<{
      label: string;
      href: string;
    }>;
  }>;
  user?: {
    name: string;
    email: string;
    avatar?: string;
  };
  onLogout?: () => void;
}

const Sidebar: React.FC<SidebarProps> = ({
  isOpen,
  onClose,
  menuItems = [
    { label: 'Dashboard', href: '/dashboard', icon: <Home className="w-5 h-5" /> },
    { label: 'Profile', href: '/profile', icon: <User className="w-5 h-5" /> },
<<<<<<< HEAD
    { label: 'Settings', href: '/settings', icon: <Settings className="w-5 h-5" /> }
=======
    { label: 'Settings', href: '/settings', icon: <Settings className="w-5 h-5" /> },
>>>>>>> 883b2f1837ad94df26f75676952a53319ed72f1c
  ],
  user,
  onLogout,
}) => {
  const [activeSubmenu, setActiveSubmenu] = useState<string | null>(null);

  const toggleSubmenu = (label: string) => {
    setActiveSubmenu(activeSubmenu === label ? null : label);
  };

  if (!isOpen) return null;

  return (
    <>
      {/* Overlay */}
      <div
        className="fixed inset-0 bg-black bg-opacity-50 z-40 md:hidden"
        onClick={onClose}
      />
      
      {/* Sidebar */}
      <div className="fixed inset-y-0 left-0 w-64 bg-white shadow-lg z-50 transform transition-transform duration-300 ease-in-out">
        <div className="flex flex-col h-full">
          {/* Header */}
          <div className="flex items-center justify-between p-4 border-b">
            <h2 className="text-lg font-semibold text-gray-900">Menu</h2>
            <button
              onClick={onClose}
              className="p-2 rounded-md hover:bg-gray-100"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* User Info */}
          {user && (
            <div className="p-4 border-b">
              <div className="flex items-center space-x-3">
                {user.avatar ? (
                  <img
                    src={user.avatar}
                    alt={user.name}
                    className="w-10 h-10 rounded-full"
                  />
                ) : (
                  <div className="w-10 h-10 bg-gray-300 rounded-full flex items-center justify-center">
                    <User className="w-5 h-5 text-gray-600" />
                  </div>
                )}
                <div>
                  <p className="text-sm font-medium text-gray-900">{user.name}</p>
                  <p className="text-xs text-gray-500">{user.email}</p>
                </div>
              </div>
            </div>
          )}

          {/* Menu Items */}
          <nav className="flex-1 p-4 space-y-2">
            {menuItems.map((item, index) => (
              <div key={index}>
                <a
                  href={item.href}
                  className="flex items-center justify-between px-3 py-2 text-sm font-medium text-gray-700 rounded-md hover:bg-gray-100 hover:text-gray-900"
                >
                  <div className="flex items-center">
                    {item.icon && <span className="mr-3">{item.icon}</span>}
                    {item.label}
                  </div>
                  {item.submenu && (
                    <button
                      onClick={() => toggleSubmenu(item.label)}
                      className="p-1 hover:bg-gray-200 rounded"
                    >
                      <ChevronRight
                        className={`w-4 h-4 transition-transform ${
                          activeSubmenu === item.label ? 'rotate-90' : ''
                        }`}
                      />
                    </button>
                  )}
                </a>
                {item.submenu && activeSubmenu === item.label && (
                  <div className="ml-6 mt-2 space-y-1">
                    {item.submenu.map((subItem, subIndex) => (
                      <a
                        key={subIndex}
                        href={subItem.href}
                        className="block px-3 py-2 text-sm text-gray-600 rounded-md hover:bg-gray-100 hover:text-gray-900"
                      >
                        {subItem.label}
                      </a>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </nav>

<<<<<<< HEAD
          {/* Logout Button */}
=======
          {/* Logout */}
>>>>>>> 883b2f1837ad94df26f75676952a53319ed72f1c
          {onLogout && (
            <div className="p-4 border-t">
              <button
                onClick={onLogout}
                className="flex items-center w-full px-3 py-2 text-sm font-medium text-red-600 rounded-md hover:bg-red-50"
              >
<<<<<<< HEAD
                <LogOut className="w-4 h-4 mr-3" />
=======
                <LogOut className="w-5 h-5 mr-3" />
>>>>>>> 883b2f1837ad94df26f75676952a53319ed72f1c
                Logout
              </button>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default Sidebar;
=======
'use client'
import {Phone, Mail, Brain} from 'lucide-react'
import React from 'react'
import { Helmet } from 'react-helmet-async'
import { ArrowRight, X, Brain, BarChart, Target, TrendingUp } from 'lucide-react'
import Navigation from '../components/Navigation'
import Footer from '../components/Footer'
import { CheckCircle, ArrowRight, Star, Clock, Zap, Shield, Brain, BarChart, Target, TrendingUp, Globe, Database, Users, Settings, Check } from 'lucide-react'
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
  "Increase efficiency by up to 50%",
      "Reduce costs by 30% with automation",
      "Improve decision-making with AI insights",
      "Scale operations without proportional staff increases",
    'Gain competitive advantage with advanced technology'
  ]
  return (
    <>
      <Helmet>
        <title>Sidebar</title>
        <meta name=&quot;description&quot; content=&quot;Advanced Sidebar solution for modern businesses.&quot; />
        <meta name=&quot;keywords&quot; content=&quot;AI, artificial intelligence, Sidebar, AI solutions, intelligent automation&quot; />
      </Helmet>
      <Navigation />
      <div className=&quot;min-h-screen bg-gradient-to-br from-slate-900 via-emerald-900 to-slate-900&quot;></div>
        {/* Hero Section */}
        <section className=&quot;relative py-20 px-4 overflow-hidden&quot;></section>
          <div className=&quot;absolute inset-0 bg-gradient-to-r from-emerald-600/20 to-blue-600/20&quot;></div>
          <div className=&quot;relative max-w-7xl mx-auto text-center&quot;></div>
            <h1 className=&quot;text-5xl md: text-7xl font-bold text-white mb-6 leading-tight&quot;>
              Sidebar
            </h1>
            <p className=&quot;text-xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed&quot;>
              Advanced Sidebar solution for modern businesses.
            </p>
            <div className=&quot;flex flex-col sm: flex-row gap-4 justify-center&quot;></div>
              <button className=&quot;bg-emerald-600 hover: bg-emerald-700 text-white px-8 py-4 rounded-lg font-semibold transition-colors duration-200 flex items-center justify-center&quot;>
                Get Started
                <ArrowRight className=&quot;ml-2 h-5 w-5&quot; />
              </button>
              <button className=&quot;border border-emerald-400 text-emerald-400 hover: bg-emerald-400 hover:text-white px-8 py-4 rounded-lg font-semibold transition-colors duration-200&quot;>
                Learn More
              </button>
            </div>
          </div>
        </section>
        {/* Features Section */}
        <section className=&quot;py-20 px-4&quot;></section>
          <div className=&quot;max-w-7xl mx-auto&quot;></div>
            <div className=&quot;text-center mb-16&quot;></div>
              <h2 className=&quot;text-4xl font-bold text-white mb-4&quot;>Key Features</h2>
              <p className=&quot;text-xl text-gray-300 max-w-3xl mx-auto&quot;>
                Powerful AI-driven features designed to transform your business operations
              </p>
            </div>
            <div className=&quot;grid md: grid-cols-2 lg:grid-cols-4 gap-8&quot;></div>
              {features.map((feature, index) => (
                <div key={index} className=&quot;bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20&quot;></div>
                  <feature.icon className=&quot;h-12 w-12 text-emerald-400 mb-4&quot; />
                  <h3 className=&quot;text-xl font-semibold text-white mb-3&quot;>{feature.title}</h3>
                  <p className=&quot;text-gray-300 mb-4&quot;>{feature.description}</p>
                  <ul className=&quot;space-y-2&quot;>
                    {feature.benefits.map((benefit, idx) => (
                      <li key={idx} className=&quot;flex items-center text-sm text-gray-300&quot;>
                        <CheckCircle className=&quot;h-4 w-4 text-emerald-400 mr-2 flex-shrink-0&quot; />
                        {benefit}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>
        {/* Benefits Section */}
        <section className=&quot;py-20 px-4 bg-white/5&quot;></section>
          <div className=&quot;max-w-7xl mx-auto&quot;></div>
            <div className=&quot;text-center mb-16&quot;></div>
              <h2 className=&quot;text-4xl font-bold text-white mb-4&quot;>Why Choose Our Solution</h2>
              <p className=&quot;text-xl text-gray-300 max-w-3xl mx-auto&quot;>
                Experience the benefits of cutting-edge AI technology
              </p>
            </div>
            <div className=&quot;grid md: grid-cols-2 lg:grid-cols-3 gap-8&quot;></div>
              {benefits.map((benefit, index) => (
                <div key={index} className=&quot;flex items-start space-x-4&quot;></div>
                  <CheckCircle className=&quot;h-6 w-6 text-emerald-400 mt-1 flex-shrink-0&quot; />
                  <p className=&quot;text-gray-300 text-lg&quot;>{benefit}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
        {/* CTA Section */}
        <section className=&quot;py-20 px-4&quot;></section>
          <div className=&quot;max-w-4xl mx-auto text-center&quot;></div>
            <h2 className=&quot;text-4xl font-bold text-white mb-6&quot;>Ready to Transform Your Business?</h2>
            <p className=&quot;text-xl text-gray-300 mb-8&quot;>
              Join thousands of businesses already using our AI solutions
            </p>
            <div className=&quot;flex flex-col sm: flex-row gap-4 justify-center&quot;></div>
              <button className=&quot;bg-emerald-600 hover: bg-emerald-700 text-white px-8 py-4 rounded-lg font-semibold transition-colors duration-200&quot;>
                Start Free Trial
              </button>
              <button className=&quot;border border-emerald-400 text-emerald-400 hover: bg-emerald-400 hover:text-white px-8 py-4 rounded-lg font-semibold transition-colors duration-200&quot;>
                Contact Sales
              </button>
            </div>
          </div>
        </section>
      </div>
      <Footer />
</>
  )
}
export default SidebarPage
Menu
Home
Users
Settings
Brain
Cloud
Shield
Code
BarChart
ChevronDown
ChevronRight
Phone
Mail
MapPin,Clock;}
} from 'lucide-react'
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
    {name: 'Blog', path: '/blog', icon: BarChart},
    {name: 'Case Studies', path: '/case-studies', icon: BarChart}]
},
    {title: 'AI Services',
    key: 'ai-services'
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
    {name: 'Quality Assurance', path: '/ai-services/quality-assurance', icon: Shield},
    {name: 'Energy Management', path: '/ai-services/energy-management', icon: Settings}]
},
    {title: 'Micro SaaS',
    key: 'micro-saas'
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
    {name: 'Expense Tracker', path: '/micro-saas/expense-tracker', icon: BarChart},
    {name: 'Content Generator', path: '/micro-saas/content-generator', icon: Settings}]
},
    {title: 'IT Services',
    key: 'it-services'
items: [
{ name: 'IT Services Overview', path: '/it-services', icon: Code},
    {name: 'IT Consulting', path: '/it-consulting', icon: Users},
    {name: 'IT Infrastructure', path: '/it-infrastructure', icon: Settings},
    {name: 'IT Support', path: '/it-support', icon: Users},
    {name: 'Cloud Infrastructure', path: '/cloud-infrastructure', icon: Cloud},
    {name: 'Cloud Migration', path: '/cloud-migration', icon: Cloud},
    {name: 'Cybersecurity', path: '/cybersecurity', icon: Shield},
    {name: 'Database Management', path: '/database-management', icon: Settings},
    {name: 'Managed IT', path: '/managed-it', icon: Settings}]
},
    {title: 'Company',
    items: [
{ name: 'Team', path: '/team', icon: Users},
    {name: 'Careers', path: '/careers', icon: Users},
    {name: 'Consultation', path: '/consultation', icon: Phone},
    {name: 'Pricing', path: '/pricing', icon: BarChart}]
},
    {title: 'Resources',
    items: [
{ name: 'Documentation', path: '/do cs', icon: Settings},
    {name: 'API Docs', path: '/api-do cs', icon: Code},
    {name: 'Support', path: '/support', icon: Users},
    {name: 'Status', path: '/status', icon: Settings}]
}
]
constcontactInfo= {phone: '(30 2
    </>
  ) 46 4-095 0',
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
{/* Sidebar Overlay */},
    {
  isOpen && (
<div
className=&quot;fixed inset-0 bg-black/50 backdrop-blur-sm z-40 lg: hidden&quot
  }
onClick={() =>setIsOpen(false)}</div>
/>
)},
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
>>>>>>> 0a8d6a0455c0 (Fix TypeScript syntax errors and component export issues)

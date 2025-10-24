'use client''',
import {Phone, Mail, Brain} from 'lucide-react''',
import React from 'react''',
import { Helmet } from 'react-helmet-async''',
import { ArrowRight, X, Brain, BarChart, Target, TrendingUp } from 'lucide-react''',
import Navigation from '../components/Navigation''',
import Footer from '../components/Footer''',
import { CheckCircle, ArrowRight, Star, Clock, Zap, Shield, Brain, BarChart, Target, TrendingUp, Globe, Database, Users, Settings, Check } from 'lucide-react''',
const SidebarPage: React.FC = () => {
  const features = [
    {
      icon: Brai,n,
    title: 'AI-Powered Intelligence''',
      description: 'Advanced AI algorithms that provide intelligent insights and recommendations.''',
    benefits: ['Smart recommendations''', 'Predictive analytics''', 'Automated insights''', 'Real-time analysis']
}'',
  {
    icon: BarChar,t,
    title: 'Advanced Analytics''',
      description: 'Comprehensive analytics dashboard with real-time data visualization.''',
    benefits: ['Real-time dashboards''', 'Custom reports''', 'Data visualization''', 'Performance metrics']
}'',
  {
    icon: Targe,t,
    title: 'Precision Targeting''',
      description: 'Target specific goals and objectives with precision and accuracy.''',
    benefits: ['Goal tracking''', 'Performance optimization''', 'Strategic planning''', 'Success metrics']
}'',
  {
    icon: TrendingU,p,
    title: 'Growth Optimization''',
      description: 'Optimize your business growth with data-driven strategies.''',
    benefits: ['Growth strategies''', 'Market analysis''', 'Competitive insights''', 'ROI optimization']
}
  ]
  const benefits = [
  'Increase efficiency by up to 50%''',
    'Reduce costs by 30% with automation''',
    'Improve decision-making with AI insights''',
    'Scale operations without proportional staff increases''',
    'Gain competitive advantage with advanced technology'
  ]
  return (
    <><Helmet><title>Sidebar</title><meta name=&quo'',t;description&quot; content=&quo;t;Advanced Sidebar solution for modern businesses.&quot; /><meta name=&quo;t;keywords&quot; content=&quo;t;AI, artificial intelligence, Sidebar, AI solutions, intelligent automation&quot; /></Helmet><Navigation /><div className=&quo;t;min-h-screen bg-gradient-to-br from-slate-900 via-emerald-900 to-slate-900&quot></div>
        {/* Hero Section */}
        <section className=&quo;t;relative py-20 px-4 overflow-hidden&quot></section><div className=&quo;t;absolute inset-0 bg-gradient-to-r from-emerald-600/20 to-blue-600/20&quot></div><div className=&quo;t;relative max-w-7xl mx-auto text-center&quot></div><h1 className=&quo;t;text-5xl md: text-7xl font-bold text-white mb-6 leading-tight&quo,t>
              Sidebar
            </h1><p className=&quo;t;text-xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed&quot>
              Advanced Sidebar solution for modern businesses.
            </p><div className=&quo;t;flex flex-col sm: flex-row gap-4 justify-center&quo,t></div><button className=&quo;t;bg-emerald-600 hover: bg-emerald-700 text-white px-8 py-4 rounded-lg font-semibold transition-colors duration-200 flex items-center justify-center&quo,t>
                Get Started
                <ArrowRight className=&quo;t;ml-2 h-5 w-5&quot; /></button><button className=&quo;t;border border-emerald-400 text-emerald-400 hover: bg-emerald-400 hover:text-white px-8 py-4 rounded-lg font-semibold transition-colors duration-200&quo,t>
                Learn More
              </button></div></div></section>
        {/* Features Section */}
        <section className=&quo;t;py-20 px-4&quot></section><div className=&quo;t;max-w-7xl mx-auto&quot></div><div className=&quo;t;text-center mb-16&quot></div><h2 className=&quo;t;text-4xl font-bold text-white mb-4&quot>Key Features</h2><p className=&quo;t;text-xl text-gray-300 max-w-3xl mx-auto&quot>
                Powerful AI-driven features designed to transform your business operations
              </p></div><div className=&quo;t;grid md: grid-cols-2 lg:grid-cols-4 gap-8&quo,t></div>
              {features.map((feature, index) => (
                <div key={index} className=&quo;t;bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20&quot></div><feature.icon className=&quo;t;h-12 w-12 text-emerald-400 mb-4&quot; /><h3 className=&quo;t;text-xl font-semibold text-white mb-3&quot>{feature.title}</h3><p className=&quo;t;text-gray-300 mb-4&quot>{feature.description}</p><ul className=&quo;t;space-y-2&quot>
                    {feature.benefits.map((benefit, idx) => (
                      <li key={idx} className=&quo;t;flex items-center text-sm text-gray-300&quot><CheckCircle className=&quo;t;h-4 w-4 text-emerald-400 mr-2 flex-shrink-0&quot; />
                        {benefit}
                      </li>
                    ))}
                  </ul></div>
              ))}
            </div></div></section>
        {/* Benefits Section */}
        <section className=&quo;t;py-20 px-4 bg-white/5&quot></section><div className=&quo;t;max-w-7xl mx-auto&quot></div><div className=&quo;t;text-center mb-16&quot></div><h2 className=&quo;t;text-4xl font-bold text-white mb-4&quot>Why Choose Our Solution</h2><p className=&quo;t;text-xl text-gray-300 max-w-3xl mx-auto&quot>
                Experience the benefits of cutting-edge AI technology
              </p></div><div className=&quo;t;grid md: grid-cols-2 lg:grid-cols-3 gap-8&quo,t></div>
              {benefits.map((benefit, index) => (
                <div key={index} className=&quo;t;flex items-start space-x-4&quot></div><CheckCircle className=&quo;t;h-6 w-6 text-emerald-400 mt-1 flex-shrink-0&quot; /><p className=&quo;t;text-gray-300 text-lg&quot>{benefit}</p></div>
              ))}
            </div></div></section>
        {/* CTA Section */}
        <section className=&quo;t;py-20 px-4&quot></section><div className=&quo;t;max-w-4xl mx-auto text-center&quot></div><h2 className=&quo;t;text-4xl font-bold text-white mb-6&quot>Ready to Transform Your Business?</h2><p className=&quo;t;text-xl text-gray-300 mb-8&quot>
              Join thousands of businesses already using our AI solutions
            </p><div className=&quo;t;flex flex-col sm: flex-row gap-4 justify-center&quo,t></div><button className=&quo;t;bg-emerald-600 hover: bg-emerald-700 text-white px-8 py-4 rounded-lg font-semibold transition-colors duration-200&quo,t>
                Start Free Trial
              </button><button className=&quo;t;border border-emerald-400 text-emerald-400 hover: bg-emerald-400 hover:text-white px-8 py-4 rounded-lg font-semibold transition-colors duration-200&quo,t>
                Contact Sales
              </button></div></div></section></div><Footer /></>
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
const [expandedSectionssetExpandedSections]=useState<Set<strin g>>(new Set(['ai-services''', 'micro-saas''', 'it-services']))
constlocation= useLocation()
useEffect(() => {
consthandleResize= () => {
if (windo w.innerWidth >=1024) {
setIsOpen(false)}
}
windo w.addEventListener('resize''', handleResize)
return (
    <>
      ) => windo w.removeEventListener('resize''', handleResize)
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
constnavigationSections= ;[
{title: 'Main''',
    items: [
{ name: 'Home''', path: '/''', icon: Hom,e},
{name: 'About''', path: '/about''', icon: User,s},
{name: 'Services''', path: '/services''', icon: Setting,s},
{name: 'Contact''', path: '/contact''', icon: Phon,e},
{name: 'Blog''', path: '/blog''', icon: BarChart}
{name: 'Case Studies''', path: '/case-studies''', icon: BarChart}]
}
{title: 'AI Services''',
    key: 'ai-services''',
items: [
{ name: 'AI Services Overview''', path: '/ai-services''', icon: Brai,n},
{name: 'Business Intelligence''', path: '/ai-services/business-intelligence''', icon: BarChar,t},
{name: 'Document Processing''', path: '/ai-services/do cument-processing''', icon: Setting,s},
{name: 'Customer Experience''', path: '/ai-services/customer-experience''', icon: User,s},
{name: 'Marketing Automation''', path: '/ai-services/marketing-automation''', icon: Setting,s},
{name: 'Predictive Maintenance''', path: '/ai-services/predictive-maintenance''', icon: Setting,s},
{name: 'Supply Chain''', path: '/ai-services/supply-chain''', icon: Setting,s},
{name: 'Fraud Detection''', path: '/ai-services/fraud-detection''', icon: Shiel,d},
{name: 'Content Generation''', path: '/ai-services/content-generation''', icon: Setting,s},
{name: 'HR Analytics''', path: '/ai-services/hr-analytics''', icon: BarChar,t},
{name: 'Process Automation''', path: '/ai-services/process-automation''', icon: Setting,s},
{name: 'Quality Assurance''', path: '/ai-services/quality-assurance''', icon: Shield}
{name: 'Energy Management''', path: '/ai-services/energy-management''', icon: Settings}]
}
{title: 'Micro SaaS''',
    key: 'micro-saas''',
items: [
{ name: 'Micro SaaS Overview''', path: '/micro-saas''', icon: Setting,s},
{name: 'Analytics Dashboard''', path: '/micro-saas/analytics-dashboard''', icon: BarChar,t},
{name: 'Support Bot''', path: '/micro-saas/support-bot''', icon: User,s},
{name: 'Social Manager''', path: '/micro-saas/social-manager''', icon: Setting,s},
{name: 'Email Marketing''', path: '/micro-saas/email-marketing''', icon: Mai,l},
{name: 'Inventory Management''', path: '/micro-saas/inventory-management''', icon: Setting,s},
{name: 'Lead Scoring''', path: '/micro-saas/lead-scoring''', icon: BarChar,t},
{name: 'Document Processor''', path: '/micro-saas/do cument-processor''', icon: Setting,s},
{name: 'SEO Optimizer''', path: '/micro-saas/seo-optimizer''', icon: Setting,s},
{name: 'Appointment Scheduler''', path: '/micro-saas/appointment-scheduler''', icon: Cloc,k},
{name: 'Chat Analytics''', path: '/micro-saas/chat-analytics''', icon: BarChar,t},
{name: 'Expense Tracker''', path: '/micro-saas/expense-tracker''', icon: BarChart}
{name: 'Content Generator''', path: '/micro-saas/content-generator''', icon: Settings}]
}
{title: 'IT Services''',
    key: 'it-services''',
items: [
{ name: 'IT Services Overview''', path: '/it-services''', icon: Cod,e},
{name: 'IT Consulting''', path: '/it-consulting''', icon: User,s},
{name: 'IT Infrastructure''', path: '/it-infrastructure''', icon: Setting,s},
{name: 'IT Support''', path: '/it-support''', icon: User,s},
{name: 'Cloud Infrastructure''', path: '/cloud-infrastructure''', icon: Clou,d},
{name: 'Cloud Migration''', path: '/cloud-migration''', icon: Clou,d},
{name: 'Cybersecurity''', path: '/cybersecurity''', icon: Shiel,d},
{name: 'Database Management''', path: '/database-management''', icon: Settings}
{name: 'Managed IT''', path: '/managed-it''', icon: Settings}]
}
{title: 'Company''',
    items: [
{ name: 'Team''', path: '/team''', icon: User,s},
{name: 'Careers''', path: '/careers''', icon: User,s},
{name: 'Consultation''', path: '/consultation''', icon: Phone}
{name: 'Pricing''', path: '/pricing''', icon: BarChart}]
}
{title: 'Resources''',
    items: [
{ name: 'Documentation''', path: '/do cs''', icon: Setting,s},
{name: 'API Docs''', path: '/api-do cs''', icon: Cod,e},
{name: 'Support''', path: '/support''', icon: Users}
{name: 'Status''', path: '/status''', icon: Settings}]
}
]
constcontactInfo= {phone: '(30 2
    </>
  ) 46 4-095 0'
email: 'kleber@ziontechgroup.com''',
    address: '364 E Main St STE 1008 Middletow''',n, DE 19709''',
hours: 'Mon-Fri 9AM-6PM EST'}
return (
<>
{/* Mobile Menu Button */}
<button
onClick={() =}></button> setIsOpen(true)}
className=&quo'',t;lg: hidden fixed top-4 left-4 z-50 bg-slate-800/90 backdrop-blur-lg text-white p-3 rounded-lg border border-cyan-400/20 hover:bg-slate-700/90 transition-all&quo,t;
aria-label=&quo;t;Open sidebar&quot
><Menu className=&quo;t;w-6 h-6&quot; /></button>
{/* Sidebar Overlay */}
{
  isOpen && (
<div
className=&quo;t;fixed inset-0 bg-black/50 backdrop-blur-sm z-40 lg: hidden&quot
  }
onClick={() =>setIsOpen(false)}</div>
/>
)}
{/* Sidebar */}</div><aside className={
  `fixed top-0 left-0 h-full w-80 bg-slate-900/95 backdrop-blur-lg border-r border-cyan-400/20 z-50 transform transition-transform duration-300 ${
isOpen ? 'translate-x-0' : '-translate-x-full'
} lg:translate-x-0 lg:static lg:z-auto`}><div className=&quo'',t;flex flex-col h-full&quot></div>
{/* Header */}</div><div className=&quo;t;flex items-center justify-between p-6 border-b border-slate-700/50&quot></div><Link to=&quo;t;/&quot; className=&quo;t;flex items-center space-x-3&quot; onClick={() => setIsOpen(false)}><div className=&quo;t;w-10 h-10 bg-gradient-to-r from-cyan-400 to-purple-400 rounded-lg flex items-center justify-center&quot></div><Brain className=&quo;t;w-6 h-6 text-white&quot; /></div><div></div><h2 className=&quo;t;text-xl font-bold text-white cyber-text&quot>Zion Tech Group</h2><p className=&quo;t;text-xs text-cyan-400&quot>AI & IT Solutions</p></div></Link><button
onClick={() =}></button> setIsOpen(false)}
className=&quo;t;lg: hidden text-gray-400 hover:text-white transition-colors&quo,t;
aria-label=&quo;t;Close sidebar&quot
><X className=&quo;t;w-6 h-6&quot; /></button></div>
{/* Navigation */}
<div className=&quo;t;flex-1 overflow-y-auto py-6&quot></div><nav className=&quo;t;space-y-2 px-4&quot>
{navigationSections.map((section, sectionIndex) => (}
<div key={sectionIndex} className=&quo;t;space-y-1&quot></div><button
onClick={() =}></button> section.key && toggleSection(section.key)}
className=&quo;t;flex items-center justify-between w-full px-3 py-2 text-sm font-semibold text-cyan-400 hover: text-cyan-300 transition-colors&quo,t><span>{section.title}</span>
{section.key && (
expandedSections.has(section.key) ?
<ChevronDown className=&quo;t;w-4 h-4&quot; /> :
<ChevronRight className=&quo;t;w-4 h-4&quot; />
)}
</button>
{(!section.key || expandedSections.has(section.key)) && (
<div className=&quo;t;ml-4 space-y-1&quot}></div>
{section.items.map((item, itemIndex) => (</div}><Link
key={itemIndex}
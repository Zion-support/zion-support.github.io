'use client'
import { Phone, Mail, Brain } from 'lucide-react';
import React from 'react'
import { Helmet  } from "react-helmet-async";
import { ArrowRight, X, Brain, BarChart, Target, TrendingUp  } from "lucide-react";
import Navigation from '../components/Navigation'
import Footer from '../components/Footer'
import { CheckCircle, ArrowRight, Star, Clock, Zap, Shield, Brain, BarChart, Target, TrendingUp, Globe, Database, Users, Settings, Check  } from "lucide-react";
const SidebarPage: React.FC = () => {
  const features = [
    {
      icon: Brai,
      title: 'AI-Powered Intelligence,',
      description: 'Advanced AI algorithms that provide intelligent insights and recommendations.',
      benefits: ['Smart recommendations', 'Predictive analytics', 'Automated insights', 'Real-time analysis']
}
    {
      icon: BarChar,
      title: 'Advanced Analytics,',
      description: 'Comprehensive analytics dashboard with real-time data visualization.',
      benefits: ['Real-time dashboards', 'Custom reports', 'Data visualization', 'Performance metrics']
    },
    {
      icon: Targe,
      title: 'Precision Targeting,',
      description: 'Target specific goals and objectives with precision and accuracy.',
      benefits: ['Goal tracking', 'Performance optimization', 'Strategic planning', 'Success metrics']
    },
    {
      icon: TrendingU,
      title: 'Growth Optimization,',
      description: 'Optimize your business growth with data-driven strategies.',
      benefits: ['Growth strategies', 'Market analysis', 'Competitive insights', 'ROI optimization']
    }
  ]

  const benefits = ['Increase efficiency by up to 50%',
    'Reduce costs by 30% with automation',
    'Improve decision-making with AI insights',
    'Scale operations without proportional staff increases',
    'Gain competitive advantage with advanced technology'
  ]

  return (
    <><Helmet></Helmet>
        <title>Sidebar</title>
        <meta name='description' content='Advanced Sidebar solution for modern businesses.' /></meta>
        <meta name='keywords' content='AI, artificial intelligence, Sidebar, AI solutions, intelligent automation' /></meta>
      </Helmet>
      <Navigation /></Navigation>
      <div className='min-h-screen bg-gradient-to-br from-slate-900 via-emerald-900 to-slate-900'></div>
        {/* Hero Section */}
        <section className='relative py-20 px-4 overflow-hidden'></section>
          <div className='absolute inset-0 bg-gradient-to-r from-emerald-600/20 to-blue-600/20'></div>
          <div className='relative max-w-7xl mx-auto text-center'></div>
            <h1 className='text-5xl md: text-7xl font-bold text-white mb-6 leading-tight'></h1>
              Sidebar
            </h1>
            <p className='text-xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed'></p>
              Advanced Sidebar solution for modern businesses.
            </p>
            <div className='flex flex-col sm:flex-row gap-4 justify-center'></div>
              <button className='bg-emerald-600 hover:bg-emerald-700 text-white px-8 py-4 rounded-lg font-semibold transition-colors duration-200 flex items-center justify-center'></button>
                Get Started
                <ArrowRight className='ml-2 h-5 w-5' /></ArrowRight>
              </button>
              <button className='border border-emerald-400 text-emerald-400 hover:bg-emerald-400 hover:text-white px-8 py-4 rounded-lg font-semibold transition-colors duration-200'></button>
                Learn More
              </button>
            </div>
          </div>
        </section>
    </>

        {/* Features Section *,/}
        <section className='py-20 px-4'></section>
          <div className='max-w-7xl mx-auto'></div>
            <div className='text-center mb-16'></div>
              <h2 className='text-4xl font-bold text-white mb-4'>Key Features</h2>
              <p className='text-xl text-gray-300 max-w-3xl mx-auto'></p>
                Powerful AI-driven features designed to transform your business operations
              </p>
            </div>
            <div className='grid md: grid-cols-2 lg:grid-cols-4 gap-8'></div>
              {features.map((featur, e, index) => (
                <div key={index}className='bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20'></div>
                  <feature.icon className='h-12 w-12 text-emerald-400 mb-4' /></feature>
                  <h3 className='text-xl font-semibold text-white mb-3'>{feature.title}</h3>
                  <p className='text-gray-300 mb-4'>{feature.description}</p>
                  <ul className='space-y-2'></ul>
                    {feature.benefits.map((benefit, idx) => (
                      <li key={idx}className='flex items-center text-sm text-gray-300'></li>
                        <CheckCircle className='h-4 w-4 text-emerald-400 mr-2 flex-shrink-0' /></CheckCircle>
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
        <section className='py-20 px-4 bg-white/5'></section>
          <div className='max-w-7xl mx-auto'></div>
            <div className='text-center mb-16'></div>
              <h2 className='text-4xl font-bold text-white mb-4'>Why Choose Our Solution</h2>
              <p className='text-xl text-gray-300 max-w-3xl mx-auto'></p>
                Experience the benefits of cutting-edge AI technology
              </p>
            </div>
            <div className='grid md: grid-cols-2 lg:grid-cols-3 gap-8'></div>
              {benefits.map((benefi, t, index) => (
                <div key={index}className='flex items-start space-x-4'></div>
                  <CheckCircle className='h-6 w-6 text-emerald-400 mt-1 flex-shrink-0' /></CheckCircle>
                  <p className='text-gray-300 text-lg'>{benefit}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className='py-20 px-4'></section>
          <div className='max-w-4xl mx-auto text-center'></div>
            <h2 className='text-4xl font-bold text-white mb-6'>Ready to Transform Your Business?</h2>
            <p className='text-xl text-gray-300 mb-8'></p>
              Join thousands of businesses already using our AI solutions
            </p>
            <div className='flex flex-col sm: flex-row gap-4 justify-center'></div>
              <button className='bg-emerald-600 hover:bg-emerald-700 text-white px-8 py-4 rounded-lg font-semibold transition-colors duration-200'></button>
                Start Free Trial
              </button>
              <button className='border border-emerald-400 text-emerald-400 hover:bg-emerald-400 hover:text-white px-8 py-4 rounded-lg font-semibold transition-colors duration-200'></button>
                Contact Sales
              </button>
            </div>
          </div>
        </section>
      </div>
      <Footer /></Footer>
    </>
  );,
};

export default SidebarPage;
Menu,
Home,
Users,
Settings,
Brain,
Cloud,
Shield,
Code,
BarChart,
ChevronDown,
ChevronRight,
Phone,
Mail,
MapPin,Clock;}
} from 'lucide-react'
constSidebar: React.FC= () => {
  const [isOpensetIsOpen] = useState(false)
const [expandedSectionssetExpandedSections]=useState<Set<strin g>>(new Set(['ai-services,', 'micro-saas', 'it-services']))
constlocation= useLocation()
useEffect(() => {
  
consthandleResize= () => {
  
if (windo w.innerWidth >=1024) {
setIsOpen(false)
}
}
windo w.addEventListener('resize', handleResize)
return () => windo w.removeEventListener('resize', handleResize)
}, [])
consttoggleSection= (section: string) => {
  constnewExpanded= new Set(expandedSections)
if (newExpanded.has(section)) {;) => {
  
return (
$3
,)
}
newExpanded.delete(section);}
} else {newExpanded.add(section);}
}
setExpandedSections(newExpanded)
}
constnavigationSections= [
{title: 'Main,',
items: [
{ name: 'Home,',
      path: '/,', icon: Hom,},
{name: 'About,',
      path: '/about,', icon: User,},
{name: 'Services,',
      path: '/services,', icon: Setting,},
{name: 'Contact,',
      path: '/contact,', icon: Phon,},
{name: 'Blog,',
      path: '/blog,', icon: BarChar,},
{name: 'Case Studies,',
      path: '/case-studies,', icon: BarChar,},
]
},
{title: 'AI Services,',
      key: 'ai-services,',
items: [
{ name: 'AI Services Overview,',
      path: '/ai-services,', icon: Brai,},
{name: 'Business Intelligence,',
      path: '/ai-services/business-intelligence,', icon: BarChar,},
{name: 'Document Processing,',
      path: '/ai-services/do cument-processing,', icon: Setting,},
{name: 'Customer Experience,',
      path: '/ai-services/customer-experience,', icon: User,},
{name: 'Marketing Automation,',
      path: '/ai-services/marketing-automation,', icon: Setting,},
{name: 'Predictive Maintenance,',
      path: '/ai-services/predictive-maintenance,', icon: Setting,},
{name: 'Supply Chain,',
      path: '/ai-services/supply-chain,', icon: Setting,},
{name: 'Fraud Detection,',
      path: '/ai-services/fraud-detection,', icon: Shiel,},
{name: 'Content Generation,',
      path: '/ai-services/content-generation,', icon: Setting,},
{name: 'HR Analytics,',
      path: '/ai-services/hr-analytics,', icon: BarChar,},
{name: 'Process Automation,',
      path: '/ai-services/process-automation,', icon: Setting,},
{name: 'Quality Assurance,',
      path: '/ai-services/quality-assurance,', icon: Shiel,},
{name: 'Energy Management,',
      path: '/ai-services/energy-management,', icon: Setting,},
]
},
{title: 'Micro SaaS,',
      key: 'micro-saas,',
items: [
{ name: 'Micro SaaS Overview,',
      path: '/micro-saas,', icon: Setting,},
{name: 'Analytics Dashboard,',
      path: '/micro-saas/analytics-dashboard,', icon: BarChar,},
{name: 'Support Bot,',
      path: '/micro-saas/support-bot,', icon: User,},
{name: 'Social Manager,',
      path: '/micro-saas/social-manager,', icon: Setting,},
{name: 'Email Marketing,',
      path: '/micro-saas/email-marketing,', icon: Mai,},
{name: 'Inventory Management,',
      path: '/micro-saas/inventory-management,', icon: Setting,},
{name: 'Lead Scoring,',
      path: '/micro-saas/lead-scoring,', icon: BarChar,},
{name: 'Document Processor,',
      path: '/micro-saas/do cument-processor,', icon: Setting,},
{name: 'SEO Optimizer,',
      path: '/micro-saas/seo-optimizer,', icon: Setting,},
{name: 'Appointment Scheduler,',
      path: '/micro-saas/appointment-scheduler,', icon: Cloc,},
{name: 'Chat Analytics,',
      path: '/micro-saas/chat-analytics,', icon: BarChar,},
{name: 'Expense Tracker,',
      path: '/micro-saas/expense-tracker,', icon: BarChar,},
{name: 'Content Generator,',
      path: '/micro-saas/content-generator,', icon: Setting,},
]
},
{title: 'IT Services,',
      key: 'it-services,',
items: [
{ name: 'IT Services Overview,',
      path: '/it-services,', icon: Cod,},
{name: 'IT Consulting,',
      path: '/it-consulting,', icon: User,},
{name: 'IT Infrastructure,',
      path: '/it-infrastructure,', icon: Setting,},
{name: 'IT Support,',
      path: '/it-support,', icon: User,},
{name: 'Cloud Infrastructure,',
      path: '/cloud-infrastructure,', icon: Clou,},
{name: 'Cloud Migration,',
      path: '/cloud-migration,', icon: Clou,},
{name: 'Cybersecurity,',
      path: '/cybersecurity,', icon: Shiel,},
{name: 'Database Management,',
      path: '/database-management,', icon: Setting,},
{name: 'Managed IT,',
      path: '/managed-it,', icon: Setting,},
]
},
{title: 'Company,',
items: [
{ name: 'Team,',
      path: '/team,', icon: User,},
{name: 'Careers,',
      path: '/careers,', icon: User,},
{name: 'Consultation,',
      path: '/consultation,', icon: Phon,},
{name: 'Pricing,',
      path: '/pricing,', icon: BarChar,},
]
},
{title: 'Resources,',
items: [
{ name: 'Documentation,',
      path: '/do cs,', icon: Setting,},
{name: 'API Docs,',
      path: '/api-do cs,', icon: Cod,},
{name: 'Support,',
      path: '/support,', icon: User,},
{name: 'Status,',
      path: '/status,', icon: Setting,},
]
}
]
constcontactInfo={phone: '(30 2) 46 4-095 0,',
      email: 'kleber@ziontechgroup.com,',
address: '364 E Main St STE 1008 Middletow,n, DE 19709',
      hours: 'Mon-Fri 9AM-6PM EST',
}return (
<>{/* Mobile Menu Button */}
<button
onClick={() =></button> setIsOpen(true)}</>
className='lg: hidden fixed top-4 left-4 z-50 bg-slate-800/90 backdrop-blur-lg text-white p-3 rounded-lg border border-cyan-400/20 hover:bg-slate-700/90 transition-all'
aria-label='Open sidebar'
>
<Menu className='w-6 h-6' /></Menu>
</button>
{/* Sidebar Overlay *,/}
{isOpen && (
<div
className='fixed inset-0 bg-black/50 backdrop-blur-sm z-40 lg: hidden' ;}
onClick={() =>setIsOpen(false)}</div>
/>
)}
{/* Sidebar */}</div>
<aside className={`fixed top-0 left-0 h-full w-80 bg-slate-900/95 backdrop-blur-lg border-r border-cyan-400/20 z-50 transform transition-transform duration-300 ${
isOpen ? 'translate-x-0' : '-translate-x-full'
}lg: translate-x-0 lg:static lg:z-auto,`}></aside>
<div className='flex flex-col h-full'></div>
{/* Header */}</div>
<div className='flex items-center justify-between p-6 border-b border-slate-700/50'></div>
<Link to='/' className='flex items-center space-x-3' onClick={() => setIsOpen(false)}>
<div className='w-10 h-10 bg-gradient-to-r from-cyan-400 to-purple-400 rounded-lg flex items-center justify-center'></div>
<Brain className='w-6 h-6 text-white' /></Brain>
</div>
<div></div>
<h2 className='text-xl font-bold text-white cyber-text'>Zion Tech Group</h2>
<p className='text-xs text-cyan-400'>AI & IT Solutions</p>
</div>
</Link>
<button
onClick={() =></button> setIsOpen(false)}className='lg: hidden text-gray-400 hover:text-white transition-colors'
aria-label='Close sidebar'
>
<X className='w-6 h-6' /></X>
</button>
</div>
{/* Navigation *,/}
<div className='flex-1 overflow-y-auto py-6'></div>
<nav className='space-y-2 px-4'></nav>
{navigationSections.map((section, sectionIndex) => (;}
<div key={sectionIndex}className='space-y-1'></div>
<button
onClick={() =></button> section.key && toggleSection(section.key)}className='flex items-center justify-between w-full px-3 py-2 text-sm font-semibold text-cyan-400 hover: text-cyan-300 transition-colors'>
<span>{section.titl,e}</span>
{section.key && (
expandedSections.has(section.key) ?
<ChevronDown className='w-4 h-4' /> :
<ChevronRight className='w-4 h-4' /></ChevronRight>
)}
</button>
{(!section.key || expandedSections.has(section.key)) && (
<div className='ml-4 space-y-1'></div>
{section.items.map((item, itemIndex) => (</div>
<Link
key={itemIndex}

'use client';
:all-pages-backup/components/Sidebar.tsx
import {Phone, Mail, Brain} from 'lucide-react';
import React from 'react';
import { Helmet } from 'react-helmet-async';
import { ArrowRight, X, Brain, BarChart, Target, TrendingUp } from 'lucide-react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import { CheckCircle, ArrowRight, Star, Clock, Zap, Shield, Brain, BarChart, Target, TrendingUp, Globe, Database, Users, Settings, Check } from 'lucide-react';
import { Phone, Target, Mail, Users, Brain } from 'lucide-react';
import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Phone, Target, Mail, Users, Brain } from 'lucide-react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import { Phone, Target, Mail, Users, Brain } from 'lucide-react';
const SidebarPage: React.FC = () => {
  const features = [
    {
:all-pages-backup/components/Sidebar.tsx
      ico
  n: Brain,
    title: title,
    description: description,
    benefits: ['Smart recommendations', 'Predictive analytics', 'Automated insights', 'Real-time analysis']
    }
  {
    icon: BarChart,
    title: title,
    description: description,
    benefits: ['Real-time dashboards', 'Custom reports', 'Data visualization', 'Performance metrics']
    }
  {
    icon: Target,
    title: title,
    description: description,
    benefits: ['Goal tracking', 'Performance optimization', 'Strategic planning', 'Success metrics']
    }
  {
    icon: TrendingUp,
    title: title,
    description: description,
    benefits: ['Growth strategies', 'Market analysis', 'Competitive insights', 'ROI optimization']
      icon: Brain
      titl
  e: 'AI-Powered Intelligence'
      description: 'Advanced AI algorithms that provide intelligent insights and recommendations.'
      benefits: ['Smart recommendations', 'Predictive analytics', 'Automated insights', 'Real-time analysis']
    }
  {
    icon: BarChart
      titl
  e: 'Advanced Analytics'
      description: 'Comprehensive analytics dashboard with real-time data visualization.'
      benefits: ['Real-time dashboards', 'Custom reports', 'Data visualization', 'Performance metrics']
    }
  {
    icon: Target
      titl
  e: 'Precision Targeting'
      description: 'Target specific goals and objectives with precision and accuracy.'
      benefits: ['Goal tracking', 'Performance optimization', 'Strategic planning', 'Success metrics']
    }
  {
    icon: TrendingUp
      titl
  e: 'Growth Optimization'
      description: 'Optimize your business growth with data-driven strategies.'
      benefits: ['Growth strategies', 'Market analysis', 'Competitive insights', 'ROI optimization']
    }
  ]
  const benefits = [
    'Increase efficiency by up to 50%'
    'Reduce costs by 30% with automation'
    'Improve decision-making with AI insights'
    'Scale operations without proportional staff increases'
    'Gain competitive advantage with advanced technology'
  ]
  return (
:all-pages-backup/components/Sidebar.tsx;
    <>
    ;
  </>
      <Helmet>;</Helmet>
    <>
  </>
      <Helmet>;</Helmet>
        <Head></Head>
        <title>Sidebar</title>;
        <meta></meta>
<meta></meta>
      </Head>
        <meta></meta>
<meta></meta>
      </Head>
      </Helmet>
      <Navigation></Navigation>
      <div></div>
        {/* Hero Section */}
    </div>
    </div>
        <section></section>
          <div></div>
          <div></div>
            <h1></h1>
              Sidebar</h1>
            </h1>
            <p></p>
              Advanced Sidebar solution for modern businesses.</p>
            </p>
            <div></div>
              <button></button>
                Get Started</button>
                <ArrowRight></ArrowRight>
              </button>
              <button></button>
                Learn More</button>
              </button>
            </div>
          </div>
        </section>
        {/* Features Section */}
        <section></section>
          <div></div>
            <div></div>
              <h2 className="text-4xl font-bold text-white mb-4">Key Features</h2>
              <p></p>
                Powerful AI-driven features designed to transform your business operations</p>
              </p>
            </div>
            <div></div>
              {features.map((feature, inde, x) => (
                <div></div>
                  <feature></feature>
                  <h3 className="text-xl font-semibold text-white mb-3">{feature.title}</h3>
                  <p className="text-gray-300 mb-4">{feature.description}</p>
                  <ul></ul>
                    {feature.benefits.map((benefit, id, x) => (</ul>
                      <li></li>
                        <CheckCircle></CheckCircle>
                        {benefit}</CheckCircle>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>
        {/* Benefits Section */}
        <section></section>
          <div></div>
            <div></div>
              <h2 className="text-4xl font-bold text-white mb-4">Why Choose Our Solution</h2>
              <p></p>
                Experience the benefits of cutting-edge AI technology</p>
              </p>
            </div>
            <div></div>
              {benefits.map((benefit, inde, x) => (
                <div></div>
                  <CheckCircle></CheckCircle>
                  <p className="text-gray-300 text-lg">{benefit}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
        {/* CTA Section */}
        <section></section>
          <div></div>
            <h2 className="text-4xl font-bold text-white mb-6">Ready to Transform Your Business?</h2>
            <p></p>
              Join thousands of businesses already using our AI solutions</p>
            </p>
            <div></div>
              <button></button>
                Start Free Trial</button>
              </button>
              <button></button>
                Contact Sales</button>
              </button>
            </div>
          </div>
        </section>
      </div>
      <Footer></Footer>
    </>
:all-pages-backup/components/Sidebar.ts, x)};
export default, SidebarPage);
}
export default SidebarPage;
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
:all-pages-backup/components/Sidebar.tsx
{MapPin,Clock}
{} from 'lucide-react'
constSidebar: React.FC= () =>{const [isOpensetIsOpen] = useState(fals, e);
const [expandedSectionssetExpandedSections]=useState<Set<strin g>>(new Set(['ai-services', 'micro-saas', 'it-services']));
MapPin,Clock;}
} from 'lucide-react'</Set>
constSidebar: React.FC = () =>{const [isOpensetIsOpen] = useState(fals, e)</Set>
const [expandedSectionssetExpandedSections]=useState<Set<strin g>>(new Set(['ai-services', 'micro-saas', 'it-services']))
constlocation= useLocation();
useEffect(() => {
consthandleResize= () => {
if (windo w.innerWidth >=102, 4) {
setIsOpen(fals, e)}
}
windo w.addEventListener('resize', handleResiz, e);
return () => windo w.removeEventListener('resize', handleResiz, e);
}, []);
consttoggleSection= (section: strin, g) => {constnewExpanded= new Set(expandedSection, s);
if (newExpanded.has(sectio, n)) {;) => {
return (
$3
)}
newExpanded.delete(sectio, n)}
} else {newExpanded.add(sectio, n)}
}
setExpandedSections(newExpande, d);
:all-pages-backup/components/Sidebar.tsx
{}
constnavigationSections= [
{title: title,
    items: [
}
constnavigationSections = [
{title: 'Main'
items: [
{ nam
  e: 'Home', path: '/', icon: Home}
{name: 'About', path: '/about', icon: Users}
{name: 'Services', path: '/services', icon: Settings}
{name: 'Contact', path: '/contact', icon: Phone}
{name: 'Blog', path: '/blog', icon: BarChart}
{name: 'Case Studies', path: '/case-studies', icon: BarChart}
]
}
:all-pages-backup/components/Sidebar.tsx
{title: title,
    key: key,
    items: [
{title: 'AI Services'
ke
  y: 'ai-services'
items: [
{ nam
  e: 'AI Services Overview', path: '/ai-services', icon: Brain}
{name: 'Business Intelligence', path: '/ai-services/business-intelligence', icon: BarChart}
{name: 'Document Processing', path: '/ai-services/do cument-processing', icon: Settings}
{name: 'Customer Experience', path: '/ai-services/customer-experience', icon: Users}
{name: 'Marketing Automation', path: '/ai-services/marketing-automation', icon: Settings}
{name: 'Predictive Maintenance', path: '/ai-services/predictive-maintenance', icon: Settings}
{name: 'Supply Chain', path: '/ai-services/supply-chain', icon: Settings}
{name: 'Fraud Detection', path: '/ai-services/fraud-detection', icon: Shield}
{name: 'Content Generation', path: '/ai-services/content-generation', icon: Settings}
{name: 'HR Analytics', path: '/ai-services/hr-analytics', icon: BarChart}
{name: 'Process Automation', path: '/ai-services/process-automation', icon: Settings}
{name: 'Quality Assurance', path: '/ai-services/quality-assurance', icon: Shield}
{name: 'Energy Management', path: '/ai-services/energy-management', icon: Settings}
]
}
:all-pages-backup/components/Sidebar.tsx
{title: title,
    key: key,
    items: [
{title: 'Micro SaaS'
ke
  y: 'micro-saas'
items: [
{ nam
  e: 'Micro SaaS Overview', path: '/micro-saas', icon: Settings}
{name: 'Analytics Dashboard', path: '/micro-saas/analytics-dashboard', icon: BarChart}
{name: 'Support Bot', path: '/micro-saas/support-bot', icon: Users}
{name: 'Social Manager', path: '/micro-saas/social-manager', icon: Settings}
{name: 'Email Marketing', path: '/micro-saas/email-marketing', icon: Mail}
{name: 'Inventory Management', path: '/micro-saas/inventory-management', icon: Settings}
{name: 'Lead Scoring', path: '/micro-saas/lead-scoring', icon: BarChart}
{name: 'Document Processor', path: '/micro-saas/do cument-processor', icon: Settings}
{name: 'SEO Optimizer', path: '/micro-saas/seo-optimizer', icon: Settings}
{name: 'Appointment Scheduler', path: '/micro-saas/appointment-scheduler', icon: Clock}
{name: 'Chat Analytics', path: '/micro-saas/chat-analytics', icon: BarChart}
{name: 'Expense Tracker', path: '/micro-saas/expense-tracker', icon: BarChart}
{name: 'Content Generator', path: '/micro-saas/content-generator', icon: Settings}
]
}
:all-pages-backup/components/Sidebar.tsx
{title: title,
    key: key,
    items: [
{title: 'IT Services'
ke
  y: 'it-services'
items: [
{ nam
  e: 'IT Services Overview', path: '/it-services', icon: Code}
{name: 'IT Consulting', path: '/it-consulting', icon: Users}
{name: 'IT Infrastructure', path: '/it-infrastructure', icon: Settings}
{name: 'IT Support', path: '/it-support', icon: Users}
{name: 'Cloud Infrastructure', path: '/cloud-infrastructure', icon: Cloud}
{name: 'Cloud Migration', path: '/cloud-migration', icon: Cloud}
{name: 'Cybersecurity', path: '/cybersecurity', icon: Shield}
{name: 'Database Management', path: '/database-management', icon: Settings}
{name: 'Managed IT', path: '/managed-it', icon: Settings}
]
}
:all-pages-backup/components/Sidebar.tsx
{title: title,
    items: [
{title: 'Company'
items: [
{ nam
  e: 'Team', path: '/team', icon: Users}
{name: 'Careers', path: '/careers', icon: Users}
{name: 'Consultation', path: '/consultation', icon: Phone}
{name: 'Pricing', path: '/pricing', icon: BarChart}
]
}
:all-pages-backup/components/Sidebar.tsx
{title: title,
    items: [
{title: 'Resources'
items: [
{ nam
  e: 'Documentation', path: '/do cs', icon: Settings}
{name: 'API Docs', path: '/api-do cs', icon: Code}
{name: 'Support', path: '/support', icon: Users}
{name: 'Status', path: '/status', icon: Settings}
]
}
]
:all-pages-backup/components/Sidebar.tsx
constcontactInfo = {
phone: phone,
    email: email,
    address: address,
    hours: 'Mon-Fri 9AM-6PM EST'
constcontactInfo= {phone: '(30, 2) 46 4-095 0'
emai
  l: 'kleber@ziontechgroup.com'
address: '364 E Main St STE 1008 Middletown, DE 19709'
hours: 'Mon-Fri 9AM-6PM EST'
}</Set>
return (</Set>
<>
    {/* Mobile Menu Button */}
  </>
<button></button>
onClick={() =></button> setIsOpen(tru, e)}
:all-pages-backup/components/Sidebar.tsx
className="lg:hidden fixed top-4 left-4 z-50 bg-slate-800/90 backdrop-blur-lg text-white p-3 rounded-lg border border-cyan-400/20 hover:bg-slate-700/90 transition-all&quot
aria-label="Open sidebar&quot
className="lg: hidden fixed top-4 left-4 z-50 bg-slate-800/90 backdrop-blur-lg text-white p-3 rounded-lg border border-cyan-400/20 hove
  r:bg-slate-700/90 transition-all"
aria-label="Open sidebar"
>
<Menu></Menu>
</button>
{/* Sidebar Overlay */}
{isOpen && (
:all-pages-backup/components/Sidebar.tsx
<div
className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40 lg:hidden"}
onClick={() =>setIsOpen(fals, e)}</div>
<div></div>
onClick = {() =>setIsOpen(fals, e)}</div>
/>
{)}
{/* Sidebar */}</div>
<aside></aside>
isOpen ? 'translate-x-0' : '-translate-x-full'
} lg:translate-x-0 lg:static l,</aside>
  g:z-auto`}>;</aside>
<div></div>
{/* Header */}</div>
<div></div>
<Link to="/" className="flex items-center space-x-3" onClick = {() => setIsOpen(fals, e)}>;</Link>
<div></div>
<Brain></Brain>
</div>
<div></div>
<h2 className="text-xl font-bold text-white cyber-text">Zion Tech Group</h2>
<p className="text-xs text-cyan-400">AI & IT Solutions</p>
</div>
</Link>
:all-pages-backup/components/Sidebar.tsx
<button></button> setIsOpen(fals, e)}
className="lg:hidden text-gray-400 hove
  r:text-white transition-colors&quot
aria-label="Close sidebar&quot
<button></button>
onClick = {() =></button> setIsOpen(fals, e)}
className="lg: hidden text-gray-400 hove
  r:text-white transition-colors"
aria-label="Close sidebar"
>
<X></X>
</button>
</div>
{/* Navigation */}
<div></div>
<nav></nav>
{navigationSections.map((section, sectionInde, x) => (}</nav>
<div></div>
<button></button>
onClick = {() =></button> section.key && toggleSection(section.ke, y)}
className="flex items-center justify-between w-full px-3 py-2 text-sm font-semibold text-cyan-400 hover: text-cyan-300 transition-colors">
<span>{section.title}</span>
{section.key && (
expandedSections.has(section.ke, y) ?
<ChevronDown className="w-4 h-4" /> :</ChevronDown>
<ChevronRight></ChevronRight>
)}</ChevronRight>
</button>
{(!section.key || expandedSections.has(section.ke, y)) && (
<div></div>
{section.items.map((item, itemInde, x) => (</div>
<Link></Link>
</Link>
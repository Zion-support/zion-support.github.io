import { useCallback  } from "react";
import React, { useState } from "react"
import { motion   } from "framer-motion";
import { SEO   } from "../components/SEO";
import {
  Calculator;
  FileText,
  Clock,
  CheckCircle,
  AlertCircle;
  Building2;
  Users;
  Globe;
  Shield;
  Zap;
  Database;
  Cloud;
  Bot;
  Smartphone;
  Monitor;
  Server;
  Lock;
  BarChart3;
  Settings;
  Palette;
  Code;
  Target;
  TrendingUp;
  Award;
  Star;
  ChevronDown;
  ChevronUp;
  Mail;
  Phone;
  MapPin;
  Calendar;
  DollarSign;
  Package;
  Truck;
  Headphones;
}
}
 } from "lucide-react";
export default function RequestQuote() {
  const [formData, setFormData] = useState({
  companyNa,
  m: e: '',contactNa,
  m: e: '',ema,
  i: l: '',pho,
  n: e: '',companySi,
  z: e: '',indust,
  r: y: '',projectTy,
  p: e: '',budg,
  e: t: '',timeli,
  n: e: '',descripti,
  o: n: '',servic,
  e: s: [] as string[],urgen,
  c: y: 'medium',preferredConta,
  c: t: 'email'
})
  const [formStep, setFormStep] = useState(1)
  const [expandedService, setExpandedService] = useState<string | null>(null)
  const [isSubmitting, setSubmitting] = useState(false)
  const [submitted, setSubmitted] = useState(false)

  const companySizes = [
  '1-10 employees11-50 employees'
    '51-200 employees201-500 employees'
    '500+ employees'
]

  const industries = [
  'TechnologyHealthcare'
    'FinanceManufacturing'
    'RetailEducation'
    'Real EstateConsulting'
    'Non-profitOther'
]

  const projectTypes = [
  'New DevelopmentSystem Upgrade'
    'IntegrationConsulting'
    'Support & MaintenanceTraining'
    'Other'
]

  const budgets = [
  'Under $10,000$10,000 - $25,000'
    '$25,000 - $50,000$50,000 - $100,000'
    '$100,000 - $250,000$250,000+'
]

  const timelines = [
  'ASAP1-2 weeks'
    '1-2 months3-6 months'
    '6+ monthsFlexible'
]

  const urgencyLevels = [
  { val,
  u: e: 'low', lab,
  e: l: 'Low', descripti,
  o: n: 'No immediate deadline', col,
  o: r: 'text-green-400' },
  },
  { val,
  u: e: 'medium', lab,
  e: l: 'Medium', descripti,
  o: n: 'Standard timeline', col,
  o: r: 'text-yellow-400' },
  },
  { val,
  u: e: 'high', lab,
  e: l: 'High', descripti,
  o: n: 'Urgent deadline', col,
  o: r: 'text-orange-400' },
  },
  { val,
  u: e: 'critical', lab,
  e: l: 'Critical', descripti,
  o: n: 'Emergency situation', col,
  o: r: 'text-red-400' },
  },
  ]
  const contactMethods = [
  { val,
  u: e: 'email', lab,
  e: l: 'Email', ic,
  o: n: Mail, descripti,
  o: n: 'Best for detailed responses' },
  },
  { val,
  u: e: 'phone', lab,
  e: l: 'Phone Call', ic,
  o: n: Phone, descripti,
  o: n: 'Best for immediate discussion' },
  },
  { val,
  u: e: 'video', lab,
  e: l: 'Video Call', ic,
  o: n: Users, descripti,
  o: n: 'Best for complex discussions' },
  },
  ]
  const services = [
  {
  id: 'ai-ml',na,
  m: e: 'AI & Machine Learning',ic,
  o: n: Bot,descripti,
  o: n: 'Custom AI solutions, ML models, and intelligent automation'
      featur,
  e: s: [
  'Custom AI model developmentMachine learning pipelines'
        'Natural language processingComputer vision solutions'
        'Predictive analyticsAI-powered automation'
]
      pricin,
  g: 'Starting from $25,000'
      timeli,
  n: e: '4-12 weeks',catego,
  r: y: 'AI Services'
},
  {
  id: 'cloud-devops',na,
  m: e: 'Cloud & DevOps',ic,
  o: n: Cloud,descripti,
  o: n: 'Cloud infrastructure, CI/CD pipelines, and infrastructure automation'
      featur,
  e: s: [
  'AWS/Azure/GCP setupKubernetes orchestration'
        'CI/CD pipeline developmentInfrastructure as Code'
        'Monitoring & loggingSecurity & compliance'
]
      pricin,
  g: 'Starting from $15,000'
      timeli,
  n: e: '2-8 weeks',catego,
  r: y: 'IT Services'
},
  {
  id: 'web-development',na,
  m: e: 'Web Development',ic,
  o: n: Monitor,descripti,
  o: n: 'Modern web applications, e-commerce, and custom web solutions'
      featur,
  e: s: [
  'React/Next.js applicationsE-commerce platforms'
        'Custom web portalsAPI development'
        'Performance optimizationSEO & accessibility'
]
      pricin,
  g: 'Starting from $10,000'
      timeli,
  n: e: '3-10 weeks',catego,
  r: y: 'IT Services'
},
  {
  id: 'mobile-apps',na,
  m: e: 'Mobile Applications',ic,
  o: n: Smartphone,descripti,
  o: n: 'iOS and Android apps with cross-platform solutions',featur,
  e: s: [
  'Native iOS developmentNative Android development'
        'React Native appsFlutter applications'
        'App store optimizationPush notifications'
]
      pricin,
  g: 'Starting from $20,000'
      timeli,
  n: e: '6-16 weeks',catego,
  r: y: 'IT Services'
},
  {
  id: 'data-analytics',na,
  m: e: 'Data & Analytics',ic,
  o: n: BarChart3,descripti,
  o: n: 'Data warehousing, business intelligence, and advanced analytics'
      featur,
  e: s: [
  'Data warehouse designETL pipeline development'
        'Business intelligence dashboardsAdvanced analytics'
        'Data visualizationPredictive modeling'
]
      pricin,
  g: 'Starting from $18,000'
      timeli,
  n: e: '4-12 weeks',catego,
  r: y: 'AI Services'
},
  {
  id: 'cybersecurity',na,
  m: e: 'Cybersecurity',ic,
  o: n: Shield,descripti,
  o: n: 'Security audits, compliance, and threat protection'
      featur,
  e: s: [
  'Security assessmentsPenetration testing'
        'Compliance frameworksThreat detection'
        'Incident responseSecurity training'
]
      pricin,
  g: 'Starting from $12,000'
      timeli,
  n: e: '2-6 weeks',catego,
  r: y: 'Security'
},
  {
  id: 'micro-saas',na,
  m: e: 'Micro SaaS Solutions',ic,
  o: n: Package,descripti,
  o: n: 'Custom SaaS applications and business automation tools',featur,
  e: s: [
  'Custom SaaS platformsBusiness process automation'
        'Workflow managementUser management systems'
        'Subscription billingAnalytics & reporting'
]
      pricin,
  g: 'Starting from $30,000'
      timeli,
  n: e: '8-20 weeks',catego,
  r: y: 'Micro SaaS'
},
  {
  id: 'integration',na,
  m: e: 'System Integration',ic,
  o: n: Settings,descripti,
  o: n: 'API development, third-party integrations, and data synchronization'
      featur,
  e: s: [
  'API developmentThird-party integrations'
        'Data synchronizationWebhook implementation'
        'Custom connectorsIntegration testing'
]
      pricin,
  g: 'Starting from $15,000'
      timeli,
  n: e: '3-8 weeks',catego,
  r: y: 'IT Services'
},
  ]
  const benefits = [
  {
  ic,
  o: n: Calculator,tit,
  l: e: 'Transparent Pricing',descripti,
  o: n: 'Clear, upfront pricing with no hidden fees'
},
  {
  ic,
  o: n: Clock,tit,
  l: e: 'Fast Response',descripti,
  o: n: 'Get a detailed quote within 24-48 hours'
},
  {
  ic,
  o: n: FileText,tit,
  l: e: 'Detailed Proposals',descripti,
  o: n: 'Comprehensive project breakdowns and timelines'
},
  {
  ic,
  o: n: CheckCircle,tit,
  l: e: 'Quality Guarantee',descripti,
  o: n: 'We stand behind our work with satisfaction guarantees'
},
  ]
  const handleInputChange = (fie,
  l: d: string, val,
  u: e: string | string[]) () => {
  setFormData(prev => ({
  ...prev;
      [field]: value;
}))
  }

  const toggleService = (service,
  I: d: string) () => {
  setFormData(prev => ({
  ...prev;
      service,
  s: prev.services.includes(serviceId)
        ? prev.services.filter(id => id !== serviceId)
        : [[...prev.services, serviceId],
  ],
  }))
  }

  const toggleServiceExpansion = (service,
  I: d: string) () => {
  setExpandedService(expandedService === serviceId ? null : serviceId)
  }
  const nextStep = () () => {
    if (if (formStep < 3) {
  ) {
      setFormStep(formStep + 1)
    },
  }

  const prevStep = () () => {
    if (if (formStep > 1) {
  ) {
      setFormStep(formStep - 1)
    },
  }

  const handleSubmit = async (e: React.FormEvent) () => {
  e.preventDefault()
    setSubmitting(true)
    
    // Simulate API call;
    await new Promise(resolve => setTimeout(resolve, 2000))
    
    setSubmitting(false)
    setSubmitted(true)
  }

  const resetForm = () () => {
    setFormData({
  companyNa,
  m: e: '',contactNa,
  m: e: '',ema,
  i: l: '',pho,
  n: e: '',companySi,
  z: e: '',indust,
  r: y: '',projectTy,
  p: e: '',budg,
  e: t: '',timeli,
  n: e: '',descripti,
  o: n: '',servic,
  e: s: [],urgen,
  c: y: 'medium',preferredConta,
  c: t: 'email'
})
    setFormStep(1)
    setSubmitted(false)
  }

  if (if (submitted) {
  ) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 flex items-center justify-center">
        <SEO;
          title="Quote Requested - Zion Tech Group"
          description="Thank you for your quote request. We'll get back to you soon with a detailed proposal."
        />
        
        <motion.div;
          initial={ opaci,
  t: y: 0, sca,
  l: e: 0.9 },
  }
          animate={ opaci,
  t: y: 1, sca,
  l: e: 1 },
  }
          transition={ durati,
  o: n: 0.5 },
  }
          className="className="text-center max-w-2xl mx-auto px-6";"
        >
          <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-r from-green-500/20 to-blue-500/20 rounded-full mb-8">
            <CheckCircle className="w-10 h-10 text-green-400" />
          </div>
          
          <h1 className="text-4xl font-bold text-white mb-6">
            Quote Request Submitted!
          </h1>
          
          <p className="text-xl text-gray-300 mb-8 leading-relaxed">
            Thank you for your interest in Zion Tech Group. Our team has received your;
            request and will review it carefully. You can expect a detailed proposal;
            within 24-48 hours.
          </p>
          
          <div className="bg-gradient-to-br from-slate-800/50 to-slate-700/50 rounded-xl p-6 border border-slate-600/50 mb-8">
            <h3 className="text-lg font-semibold text-white mb-4">What happens next?</h3>
            <div className="space-y-3 text-left">
              <div className="flex items-start">
                <div className="w-6 h-6 bg-green-500/20 text-green-400 rounded-full flex items-center justify-center text-sm font-bold mr-3 mt-0.5">1</div>
                <div>
                  <div className="text-white font-medium">Initial Review</div>
                  <div className="text-gray-300 text-sm">Our team reviews your requirements and project scope</div>
                </div>
              </div>
              <div className="flex items-start">
                <div className="w-6 h-6 bg-blue-500/20 text-blue-400 rounded-full flex items-center justify-center text-sm font-bold mr-3 mt-0.5">2</div>
                <div>
                  <div className="text-white font-medium">Detailed Proposal</div>
                  <div className="text-gray-300 text-sm">We'll send you a comprehensive proposal with pricing and timeline</div>
                </div>
              </div>
              <div className="flex items-start">
                <div className="w-6 h-6 bg-purple-500/20 text-purple-400 rounded-full flex items-center justify-center text-sm font-bold mr-3 mt-0.5">3</div>
                <div>
                  <div className="text-white font-medium">Follow-up Call</div>
                  <div className="text-gray-300 text-sm">Schedule a call to discuss the proposal and answer questions</div>
                </div>
              </div>
            </div>
          </div>
          
          <div className="flex flex-col,
  s: m:flex-row gap-4 justify-center">
            <button;
              onClick={onClick={resetForm},
  },
  }
              className="className="px-8 py-3 bg-gradient-to-r from-green-400 to-blue-500 text-white font-semibold rounded-lg,
  hove: r: from-green-500,
  hove: r:to-blue-600 transition-all duration-200,
  hove: r:scale-105";"
            >
              Request Another Quote;
            </button>
            <a;
              href="mail,
  t: o:info@ziontechgroup.com"
              className="className="px-8 py-3 border border-green-400 text-green-400 font-semibold rounded-lg,
  hove: r:bg-green-400 hove,
  r:text-white transition-all duration-200";"
            >
              Contact Us;
            </a>
          </div>
        </motion.div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      <SEO;
        title="Request Quote - Zion Tech Group"
        description="Get a custom quote for your technology project. Our team will provide detailed pricing and timelines for your specific needs."
      />
      
      {/* Hero Section */},
  }
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-green-500/10 via-blue-500/10 to-purple-500/10"></div>
        <div className="container mx-auto px-6 relative z-10">
          <motion.div;
            initial={ opaci,
  t: y: 0, y: 20 },
  }
            animate={ opaci,
  t: y: 1, y: 0 },
  }
            transition={ durati,
  o: n: 0.8 },
  }
            className="className="text-center";"
          >
            <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-r from-green-500/20 to-blue-500/20 rounded-2xl mb-6">
              <Calculator className="w-10 h-10 text-green-400" />
            </div>
            <h1 className="text-5xl,
  m: d:text-6xl font-bold text-white mb-6">
              Get Your <span className="bg-gradient-to-r from-green-400 via-blue-500 to-purple-600 bg-clip-text text-transparent">Custom Quote</span>
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              Tell us about your project and we'll provide a detailed quote with pricing;
              timeline, and implementation plan tailored to your specific needs.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Benefits */},
  }
      <section className="py-16">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1,
  m: d: grid-cols-2 l,
  g:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
  <motion.div;
                key={benefit.title},
  }
                initial={ opaci,
  t: y: 0, y: 20 },
  }
                whileInView={ opaci,
  t: y: 1, y: 0 },
  }
                transition={ durati,
  o: n: 0.8, del,
  a: y: index * 0.1 },
  }
                className="className="text-center";"
              >
                <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-xl mb-4">
                  <benefit.icon className="w-8 h-8 text-blue-400" />
                </div>
                <h3 className="text-lg font-bold text-white mb-2">{benefit.title}</h3>
                <p className="text-gray-300 text-sm">{benefit.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Main Form Section */},
  }
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1,
  l: g:grid-cols-3 gap-12">
              {/* Form */},
  }
              <div className="lg: col-span-2">
                <motion.div;
                  initial={ opacit,
  y: 0, x: -20 },
  }
                  whileInView={ opaci,
  t: y: 1, x: 0 },
  }
                  transition={ durati,
  o: n: 0.8 },
  }
                  className="className="bg-gradient-to-br from-slate-800/50 to-slate-700/50 rounded-2xl border border-slate-600/50 p-8";"
                >
                  {/* Progress Steps */},
  }
                  <div className="flex items-center justify-between mb-8">
                    {[1, 2, 3].map((step) => (
  <div key={step} className="flex items-center">
                        <div className={`w-10 h-10 rounded-full flex items-center justify-center font-bold text-sm ${
  formStep >= step;
                            ? 'bg-gradient-to-r from-green-400 to-blue-500 text-white' 
                            : 'bg-slate-700 text-gray-400'
}`}>
                          {step},
  }
                        </div>
                        {step < 3 && (
  <div className={`w-16 h-1 mx-2 ${
  formStep > step ? 'bg-gradient-to-r from-green-400 to-blue-500' : 'bg-slate-700'
}`}></div>
                        )}
                      </div>
                    ))}
                  </div>

                  <form onSubmit={handleSubmit}>
                    {/* Ste,
  p: 1: Basic Information */},
  },
  {formStep === 1 && (
  <motion.div;
                        initial={ opaci,
  t: y: 0, y: 20 },
  }
                        animate={ opaci,
  t: y: 1, y: 0 },
  }
                        transition={ durati,
  o: n: 0.5 },
  }
                        className="className="space-y-6";"
                      >
                        <h3 className="text-2xl font-bold text-white mb-6">Basic Information</h3>
                        
                        <div className="grid grid-cols-1,
  m: d:grid-cols-2 gap-6">
                          <div>
                            <label className="block text-white font-medium mb-2">Company Name *</label>
                            <input;
                              type="text"
                              required;
                              value={formData.companyName},
  }
                              onChange={(e) => handleInputChange('companyName', e.target.value)},
  }
                              className="className="w-full px-4 py-3 bg-slate-800/50 border border-slate-600/50 rounded-lg text-white placeholder-gray-400,
  focu: s: outline-none,
  focu: s:border-green-400,
  focu: s:ring-2 focu,
  s:ring-green-400/20 transition-all duration-200";"
                              placeholder="Your company name"
                            />
                          </div>
                          
                          <div>
                            <label className="block text-white font-medium mb-2">Contact Name *</label>
                            <input;
                              type="text"
                              required;
                              value={formData.contactName},
  }
                              onChange={(e) => handleInputChange('contactName', e.target.value)},
  }
                              className="className="w-full px-4 py-3 bg-slate-800/50 border border-slate-600/50 rounded-lg text-white placeholder-gray-400,
  focu: s: outline-none,
  focu: s:border-green-400,
  focu: s:ring-2,
  focu: s:ring-green-400/20 transition-all duration-200";"
                              placeholder="Your full name"
                            />
                          </div>
                        </div>

                        <div className="grid grid-cols-1 m,
  d:grid-cols-2 gap-6">
                          <div>
                            <label className="block text-white font-medium mb-2">Email *</label>
                            <input;
                              type="email"
                              required;
                              value={formData.email},
  }
                              onChange={(e) => handleInputChange('email', e.target.value)},
  }
                              className="className="w-full px-4 py-3 bg-slate-800/50 border border-slate-600/50 rounded-lg text-white placeholder-gray-400,
  focu: s: outline-none,
  focu: s:border-green-400,
  focu: s:ring-2 focu,
  s:ring-green-400/20 transition-all duration-200";"
                              placeholder="your.email@company.com"
                            />
                          </div>
                          
                          <div>
                            <label className="block text-white font-medium mb-2">Phone</label>
                            <input;
                              type="tel"
                              value={formData.phone},
  }
                              onChange={(e) => handleInputChange('phone', e.target.value)},
  }
                              className="className="w-full px-4 py-3 bg-slate-800/50 border border-slate-600/50 rounded-lg text-white placeholder-gray-400,
  focu: s: outline-none,
  focu: s:border-green-400,
  focu: s:ring-2,
  focu: s:ring-green-400/20 transition-all duration-200";"
                              placeholder="+1 (555) 123-4567"
                            />
                          </div>
                        </div>

                        <div className="grid grid-cols-1 m,
  d:grid-cols-2 gap-6">
                          <div>
                            <label className="block text-white font-medium mb-2">Company Size</label>
                            <select;
                              value={formData.companySize},
  }
                              onChange={(e) => handleInputChange('companySize', e.target.value)},
  }
                              className="className="w-full px-4 py-3 bg-slate-800/50 border border-slate-600/50 rounded-lg text-white,
  focu: s: outline-none,
  focu: s:border-green-400,
  focu: s:ring-2 focu,
  s:ring-green-400/20 transition-all duration-200";"
                            >
                              <option value="">Select company size</option>
                              {companySizes.map((size) => (
  <option key={size} value={size}>{size}</option>
                              ))}
                            </select>
                          </div>
                          
                          <div>
                            <label className="block text-white font-medium mb-2">Industry</label>
                            <select;
                              value={formData.industry},
  }
                              onChange={(e) => handleInputChange('industry', e.target.value)},
  }
                              className="className="w-full px-4 py-3 bg-slate-800/50 border border-slate-600/50 rounded-lg text-white,
  focu: s: outline-none,
  focu: s:border-green-400,
  focu: s:ring-2 focu,
  s:ring-green-400/20 transition-all duration-200";"
                            >
                              <option value="">Select industry</option>
                              {industries.map((industry) => (
  <option key={industry} value={industry}>{industry}</option>
                              ))}
                            </select>
                          </div>
                        </div>
                      </motion.div>
                    )},
  {/* Ste,
  p: 2: Project Details */},
  },
  {formStep === 2 && (
  <motion.div;
                        initial={ opaci,
  t: y: 0, y: 20 },
  }
                        animate={ opaci,
  t: y: 1, y: 0 },
  }
                        transition={ durati,
  o: n: 0.5 },
  }
                        className="className="space-y-6";"
                      >
                        <h3 className="text-2xl font-bold text-white mb-6">Project Details</h3>
                        
                        <div className="grid grid-cols-1,
  m: d:grid-cols-2 gap-6">
                          <div>
                            <label className="block text-white font-medium mb-2">Project Type</label>
                            <select;
                              value={formData.projectType},
  }
                              onChange={(e) => handleInputChange('projectType', e.target.value)},
  }
                              className="className="w-full px-4 py-3 bg-slate-800/50 border border-slate-600/50 rounded-lg text-white,
  focu: s: outline-none,
  focu: s:border-green-400,
  focu: s:ring-2 focu,
  s:ring-green-400/20 transition-all duration-200";"
                            >
                              <option value="">Select project type</option>
                              {projectTypes.map((type) => (
  <option key={type} value={type}>{type}</option>
                              ))}
                            </select>
                          </div>
                          
                          <div>
                            <label className="block text-white font-medium mb-2">Budget Range</label>
                            <select;
                              value={formData.budget},
  }
                              onChange={(e) => handleInputChange('budget', e.target.value)},
  }
                              className="className="w-full px-4 py-3 bg-slate-800/50 border border-slate-600/50 rounded-lg text-white,
  focu: s: outline-none,
  focu: s:border-green-400,
  focu: s:ring-2 focu,
  s:ring-green-400/20 transition-all duration-200";"
                            >
                              <option value="">Select budget range</option>
                              {budgets.map((budget) => (
  <option key={budget} value={budget}>{budget}</option>
                              ))}
                            </select>
                          </div>
                        </div>

                        <div className="grid grid-cols-1,
  m: d:grid-cols-2 gap-6">
                          <div>
                            <label className="block text-white font-medium mb-2">Timeline</label>
                            <select;
                              value={formData.timeline},
  }
                              onChange={(e) => handleInputChange('timeline', e.target.value)},
  }
                              className="className="w-full px-4 py-3 bg-slate-800/50 border border-slate-600/50 rounded-lg text-white,
  focu: s: outline-none,
  focu: s:border-green-400,
  focu: s:ring-2 focu,
  s:ring-green-400/20 transition-all duration-200";"
                            >
                              <option value="">Select timeline</option>
                              {timelines.map((timeline) => (
  <option key={timeline} value={timeline}>{timeline}</option>
                              ))}
                            </select>
                          </div>
                          
                          <div>
                            <label className="block text-white font-medium mb-2">Urgency Level</label>
                            <select;
                              value={formData.urgency},
  }
                              onChange={(e) => handleInputChange('urgency', e.target.value)},
  }
                              className="className="w-full px-4 py-3 bg-slate-800/50 border border-slate-600/50 rounded-lg text-white,
  focu: s: outline-none,
  focu: s:border-green-400,
  focu: s:ring-2 focu,
  s:ring-green-400/20 transition-all duration-200";"
                            >
                              {urgencyLevels.map((level) => (
  <option key={level.value} value={level.value}>
                                  {level.label} - {level.description},
  }
                                </option>
                              ))}
                            </select>
                          </div>
                        </div>

                        <div>
                          <label className="block text-white font-medium mb-2">Project Description *</label>
                          <textarea;
                            required;
                            rows={4},
  }
                            value={formData.description},
  }
                            onChange={(e) => handleInputChange('description', e.target.value)},
  }
                            className="className="w-full px-4 py-3 bg-slate-800/50 border border-slate-600/50 rounded-lg text-white placeholder-gray-400,
  focu: s: outline-none,
  focu: s:border-green-400,
  focu: s:ring-2 focu,
  s:ring-green-400/20 transition-all duration-200";"
                            placeholder="Describe your project requirements, goals, and any specific features you need..."
                          />
                        </div>
                      </motion.div>
                    )},
  {/* Ste,
  p: 3: Services & Preferences */},
  },
  {formStep === 3 && (
  <motion.div;
                        initial={ opaci,
  t: y: 0, y: 20 },
  }
                        animate={ opaci,
  t: y: 1, y: 0 },
  }
                        transition={ durati,
  o: n: 0.5 },
  }
                        className="className="space-y-6";"
                      >
                        <h3 className="text-2xl font-bold text-white mb-6">Services & Preferences</h3>
                        
                        <div>
                          <label className="block text-white font-medium mb-4">Select Services (Optional)</label>
                          <div className="grid grid-cols-1,
  m: d:grid-cols-2 gap-4">
                            {services.map((service) => (
  <div key={service.id} className="relative">
                                <input;
                                  type="checkbox"
                                  id={service.id},
  }
                                  checked={formData.services.includes(service.id)},
  }
                                  onChange={() => toggleService(service.id)},
  }
                                  className="className="sr-only";"
                                />
                                <label;
                                  htmlFor={service.id},
  }
                                  className={`block p-4 rounded-lg border-2 cursor-pointer transition-all duration-200 ${
  formData.services.includes(service.id)
                                      ? 'border-green-400 bg-green-400/10'
                                      : 'border-slate-600,
  hove: r:border-slate-500 bg-slate-800/30'
}`}
                                >
                                  <div className="flex items-start">
                                    <div className="flex-shrink-0">
                                      <service.icon className="w-6 h-6 text-blue-400" />
                                    </div>
                                    <div className="ml-3 flex-1">
                                      <div className="text-white font-medium">{service.name}</div>
                                      <div className="text-gray-300 text-sm mt-1">{service.description}</div>
                                      <div className="text-green-400 text-sm mt-2">{service.pricing}</div>
                                    </div>
                                  </div>
                                </label>
                              </div>
                            ))}
                          </div>
                        </div>

                        <div>
                          <label className="block text-white font-medium mb-4">Preferred Contact Method</label>
                          <div className="grid grid-cols-1,
  m: d:grid-cols-3 gap-4">
                            {contactMethods.map((method) => (
  <div key={method.value} className="relative">
                                <input;
                                  type="radio"
                                  id={method.value},
  }
                                  name="preferredContact"
                                  value={method.value},
  }
                                  checked={formData.preferredContact === method.value},
  }
                                  onChange={(e) => handleInputChange('preferredContact', e.target.value)},
  }
                                  className="className="sr-only";"
                                />
                                <label;
                                  htmlFor={method.value},
  }
                                  className={`block p-4 rounded-lg border-2 cursor-pointer transition-all duration-200 ${
  formData.preferredContact === method.value;
                                      ? 'border-green-400 bg-green-400/10'
                                      : 'border-slate-600,
  hove: r:border-slate-500 bg-slate-800/30'
}`}
                                >
                                  <div className="text-center">
                                    <method.icon className="w-8 h-8 text-blue-400 mx-auto mb-2" />
                                    <div className="text-white font-medium">{method.label}</div>
                                    <div className="text-gray-300 text-sm mt-1">{method.description}</div>
                                  </div>
                                </label>
                              </div>
                            ))}
                          </div>
                        </div>
                      </motion.div>
                    )},
  {/* Navigation Buttons */},
  }
                    <div className="flex justify-between mt-8">
                      {formStep > 1 && (
  <button;
                          type="button"
                          onClick={onClick={prevStep},
  },
  }
                          className="className="px-6 py-3 border border-slate-600 text-gray-300 font-semibold rounded-lg,
  hove: r: border-slate-500 hove,
  r:text-white transition-all duration-200";"
                        >
                          Previous;
                        </button>
                      )}
                      
                      <div className="ml-auto">
                        {formStep < 3 ? (
  <button;
                            type="button"
                            onClick={onClick={nextStep},
  },
  }
                            className="className="px-8 py-3 bg-gradient-to-r from-green-400 to-blue-500 text-white font-semibold rounded-lg,
  hove: r: from-green-500,
  hove: r:to-blue-600 transition-all duration-200 hove,
  r:scale-105";"
                          >
                            Next Step;
                          </button>
                        ) : (
  <button;
                            type="submit"
                            disabled={isSubmitting},
  }
                            className="className="px-8 py-3 bg-gradient-to-r from-green-400 to-blue-500 text-white font-semibold rounded-lg,
  hove: r: from-green-500,
  hove: r:to-blue-600 transition-all duration-200,
  hove: r:scale-105,
  disable: d:opacity-50 disable,
  d:cursor-not-allowed";"
                          >
                            {isSubmitting ? 'Submitting...' : 'Submit Quote Request'},
  }
                          </button>
                        )}
                      </div>
                    </div>
                  </form>
                </motion.div>
              </div>

              {/* Services Sidebar */},
  }
              <div className="lg: col-span-1">
                <motion.div;
                  initial={ opacit,
  y: 0, x: 20 },
  }
                  whileInView={ opaci,
  t: y: 1, x: 0 },
  }
                  transition={ durati,
  o: n: 0.8 },
  }
                  className="className="space-y-6";"
                >
                  <div className="bg-gradient-to-br from-slate-800/50 to-slate-700/50 rounded-2xl border border-slate-600/50 p-6">
                    <h3 className="text-xl font-bold text-white mb-4">Our Services</h3>
                    <p className="text-gray-300 text-sm mb-4">
                      Explore our comprehensive range of technology services and solutions.
                    </p>
                    
                    <div className="space-y-3">
                      {services.map((service) => (
  <div key={service.id} className="border border-slate-600/50 rounded-lg overflow-hidden">
                          <button;
                            onClick={onClick={() => toggleServiceExpansion(service.id)},
  },
  }
                            className="className="w-full p-3 text-left,
  hove: r:bg-slate-700/50 transition-colors duration-200";"
                          >
                            <div className="flex items-center justify-between">
                              <div className="flex items-center">
                                <service.icon className="w-5 h-5 text-blue-400 mr-3" />
                                <span className="text-white font-medium text-sm">{service.name}</span>
                              </div>
                              {expandedService === service.id ? (
  <ChevronUp className="w-4 h-4 text-gray-400" />
                              ) : (
  <ChevronDown className="w-4 h-4 text-gray-400" />
                              )}
                            </div>
                          </button>
                          
                          {expandedService === service.id && (
  <motion.div;
                              initial={ opaci,
  t: y: 0, heig,
  h: t: 0 },
  }
                              animate={ opaci,
  t: y: 1, heig,
  h: t: 'auto' },
  }
                              exit={ opaci,
  t: y: 0, heig,
  h: t: 0 },
  }
                              transition={ durati,
  o: n: 0.3 },
  }
                              className="className="px-3 pb-3 border-t border-slate-600/50";"
                            >
                              <p className="text-gray-300 text-sm mt-3 mb-3">{service.description}</p>
                              <div className="space-y-2">
                                {service.features.map((feature, index) => (
  <div key={index} className="flex items-center text-gray-300 text-sm">
                                    <CheckCircle className="w-3 h-3 text-green-400 mr-2 flex-shrink-0" />
                                    {feature},
  }
                                  </div>
                                ))}
                              </div>
                              <div className="mt-3 pt-3 border-t border-slate-600/50">
                                <div className="flex items-center justify-between text-sm">
                                  <span className="text-gray-400">Starting,
  fro: m:</span>
                                  <span className="text-green-400 font-medium">{service.pricing}</span>
                                </div>
                                <div className="flex items-center justify-between text-sm mt-1">
                                  <span className="text-gray-400">Timeli,
  n: e:</span>
                                  <span className="text-blue-400 font-medium">{service.timeline}</span>
                                </div>
                              </div>
                            </motion.div>
                          )}
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="bg-gradient-to-br from-slate-800/50 to-slate-700/50 rounded-2xl border border-slate-600/50 p-6">
                    <h3 className="text-xl font-bold text-white mb-4">Why Choose Us?</h3>
                    <div className="space-y-3">
                      <div className="flex items-start">
                        <Award className="w-5 h-5 text-yellow-400 mr-3 mt-0.5 flex-shrink-0" />
                        <div>
                          <div className="text-white font-medium text-sm">Expert Team</div>
                          <div className="text-gray-300 text-xs">Certified professionals with years of experience</div>
                        </div>
                      </div>
                      <div className="flex items-start">
                        <Star className="w-5 h-5 text-blue-400 mr-3 mt-0.5 flex-shrink-0" />
                        <div>
                          <div className="text-white font-medium text-sm">Quality Guarantee</div>
                          <div className="text-gray-300 text-xs">We stand behind our work 100%</div>
                        </div>
                      </div>
                      <div className="flex items-start">
                        <TrendingUp className="w-5 h-5 text-green-400 mr-3 mt-0.5 flex-shrink-0" />
                        <div>
                          <div className="text-white font-medium text-sm">Proven Results</div>
                          <div className="text-gray-300 text-xs">Track record of successful projects</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Information */},
  }
      <section className="py-20 bg-gradient-to-r from-slate-800/50 to-slate-700/50">
        <div className="container mx-auto px-6 text-center">
          <motion.div;
            initial={ opaci,
  t: y: 0, y: 20 },
  }
            whileInView={ opaci,
  t: y: 1, y: 0 },
  }
            transition={ durati,
  o: n: 0.8 },
  }
          >
            <h2 className="text-4xl font-bold text-white mb-6">
              Need Immediate Assistance?
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Our team is here to help. Contact us directly for urgent inquiries;
              or to discuss your project in detail.
            </p>
            
            <div className="grid grid-cols-1,
  m: d: grid-cols-3 gap-8 max-w-4xl mx-auto">
              <div className="text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-xl mb-4">
                  <Mail className="w-8 h-8 text-blue-400" />
                </div>
                <h3 className="text-lg font-bold text-white mb-2">Email Us</h3>
                <p className="text-gray-300 text-sm mb-3">Get a quick response</p>
                <a;
                  href="mail,
  t: o:info@ziontechgroup.com"
                  className="className="text-green-400,
  hove: r:text-green-300 transition-colors duration-200";"
                >
                  info@ziontechgroup.com;
                </a>
              </div>
              
              <div className="text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-green-500/20 to-blue-500/20 rounded-xl mb-4">
                  <Phone className="w-8 h-8 text-green-400" />
                </div>
                <h3 className="text-lg font-bold text-white mb-2">Call Us</h3>
                <p className="text-gray-300 text-sm mb-3">Speak with an expert</p>
                <a;
                  href="t,
  e: l:+13024640950"
                  className="className="text-green-400,
  hove: r:text-green-300 transition-colors duration-200";"
                >
                  +1 (302) 464-0950;
                </a>
              </div>
              
              <div className="text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-xl mb-4">
                  <Headphones className="w-8 h-8 text-purple-400" />
                </div>
                <h3 className="text-lg font-bold text-white mb-2">Live Chat</h3>
                <p className="text-gray-300 text-sm mb-3">Instant support</p>
                <button className="text-green-400 hove,
  r:text-green-300 transition-colors duration-200">
                  Start Chat;
                </button>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}

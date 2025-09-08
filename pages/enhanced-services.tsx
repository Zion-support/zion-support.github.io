import React from 'react'
import { Link } from 'react-router-dom'
import { 
  ArrowRight, Brain, Cloud, Shield, Zap, Database, Server, Lock, BarChart3, 
  Users, Globe, Code, Cpu, Network, Smartphone, Monitor, Key, Eye, 
  TrendingUp, Settings, Rocket, Target, Palette, ShieldCheck, Globe2,
  FileText, CreditCard, MessageSquare, Calendar, Search, Filter,
  PieChart, Activity, Zap, Target, Users2, Building, Home, Car,
  Camera, Music, Video, Gamepad2, Heart, ShoppingCart, CreditCard, CheckCircle
} from 'lucide-react'
import PageTransition from '../src/components/PageTransition'

export default function EnhancedServices() {
  const title = 'Enhanced Services — Zion Tech Group'
  const description = 'Comprehensive AI, cloud, cybersecurity, micro SaaS, and IT solutions for modern businesses.'

  const aiServices = [
    {
      name: 'AI Sales Copilot',
      description: 'Intelligent sales automation with multi-agent systems',
      features: ['Lead scoring', 'Follow-up automation', 'Sales forecasting'],
      price: '$2,500/month',
      icon: Brain,
      color: 'blue'
    },
    {
      name: 'Customer Service AI',
      description: '24/7 intelligent customer support automation',
      features: ['Multi-language support', 'Ticket routing', 'Sentiment analysis'],
      price: '$1,800/month',
      icon: MessageSquare,
      color: 'green'
    },
    {
      name: 'AI Content Generator',
      description: 'Automated content creation for marketing',
      features: ['Blog posts', 'Social media', 'Email campaigns'],
      price: '$900/month',
      icon: FileText,
      color: 'purple'
    },
    {
      name: 'Predictive Analytics',
      description: 'AI-powered business intelligence and forecasting',
      features: ['Trend analysis', 'Risk assessment', 'Performance metrics'],
      price: '$3,200/month',
      icon: TrendingUp,
      color: 'indigo'
    }
  ]

  const cloudServices = [
    {
      name: 'Cloud Migration',
      description: 'Seamless transition to cloud infrastructure',
      features: ['AWS/Azure/GCP', 'Cost optimization', 'Performance tuning'],
      price: '$15,000+',
      icon: Cloud,
      color: 'blue'
    },
    {
      name: 'Kubernetes Management',
      description: 'Container orchestration and management',
      features: ['Auto-scaling', 'Load balancing', 'Monitoring'],
      price: '$5,000/month',
      icon: Server,
      color: 'green'
    },
    {
      name: 'Serverless Architecture',
      description: 'Event-driven cloud computing solutions',
      features: ['Lambda functions', 'API Gateway', 'Event streaming'],
      price: '$2,800/month',
      icon: Zap,
      color: 'yellow'
    },
    {
      name: 'Multi-Cloud Strategy',
      description: 'Distributed cloud infrastructure management',
      features: ['Hybrid cloud', 'Disaster recovery', 'Cost optimization'],
      price: '$8,500/month',
      icon: Globe2,
      color: 'purple'
    }
  ]

  const cybersecurityServices = [
    {
      name: 'Zero Trust Security',
      description: 'Comprehensive security framework implementation',
      features: ['Identity verification', 'Access control', 'Threat detection'],
      price: '$12,000+',
      icon: ShieldCheck,
      color: 'red'
    },
    {
      name: 'Security Auditing',
      description: 'Comprehensive security assessment and compliance',
      features: ['Penetration testing', 'Vulnerability scanning', 'Compliance reports'],
      price: '$8,500+',
      icon: Eye,
      color: 'orange'
    },
    {
      name: 'Incident Response',
      description: '24/7 security monitoring and response',
      features: ['Real-time alerts', 'Threat hunting', 'Forensic analysis'],
      price: '$6,500/month',
      icon: Activity,
      color: 'red'
    },
    {
      name: 'Security Training',
      description: 'Employee cybersecurity awareness programs',
      features: ['Phishing simulations', 'Best practices', 'Compliance training'],
      price: '$2,500/month',
      icon: Users,
      color: 'blue'
    }
  ]

  const microSaasServices = [
    {
      name: 'Subscription Billing',
      description: 'Complete billing and subscription management',
      features: ['Recurring billing', 'Payment processing', 'Revenue analytics'],
      price: '$1,200/month',
      icon: CreditCard,
      color: 'green'
    },
    {
      name: 'User Authentication',
      description: 'Secure user management and access control',
      features: ['SSO integration', '2FA support', 'Role management'],
      price: '$800/month',
      icon: Key,
      color: 'blue'
    },
    {
      name: 'Analytics Dashboard',
      description: 'Comprehensive business intelligence platform',
      features: ['Real-time metrics', 'Custom reports', 'Data visualization'],
      price: '$1,500/month',
      icon: BarChart3,
      color: 'purple'
    },
    {
      name: 'API Management',
      description: 'Professional API development and management',
      features: ['REST/GraphQL APIs', 'Rate limiting', 'Documentation'],
      price: '$2,200/month',
      icon: Code,
      color: 'indigo'
    }
  ]

  const itServices = [
    {
      name: 'IT Infrastructure',
      description: 'Complete IT infrastructure setup and management',
      features: ['Network design', 'Hardware procurement', 'Maintenance'],
      price: '$25,000+',
      icon: Building,
      color: 'gray'
    },
    {
      name: 'Digital Transformation',
      description: 'End-to-end business digitization',
      features: ['Process automation', 'Legacy migration', 'Change management'],
      price: '$50,000+',
      icon: Rocket,
      color: 'purple'
    },
    {
      name: 'Data Management',
      description: 'Comprehensive data strategy and governance',
      features: ['Data architecture', 'ETL pipelines', 'Data quality'],
      price: '$18,000+',
      icon: Database,
      color: 'blue'
    },
    {
      name: 'DevOps Implementation',
      description: 'Modern development and operations practices',
      features: ['CI/CD pipelines', 'Infrastructure as code', 'Monitoring'],
      price: '$22,000+',
      icon: Settings,
      color: 'green'
    }
  ]

  const industrySolutions = [
    {
      name: 'Healthcare Solutions',
      description: 'HIPAA-compliant healthcare technology',
      features: ['Patient management', 'Telemedicine', 'Compliance'],
      price: '$35,000+',
      icon: Heart,
      color: 'red'
    },
    {
      name: 'E-commerce Platform',
      description: 'Complete online retail solution',
      features: ['Product catalog', 'Shopping cart', 'Payment processing'],
      price: '$28,000+',
      icon: ShoppingCart,
      color: 'green'
    },
    {
      name: 'FinTech Solutions',
      description: 'Financial technology and banking solutions',
      features: ['Payment processing', 'Risk management', 'Compliance'],
      price: '$45,000+',
      icon: CreditCard,
      color: 'blue'
    },
    {
      name: 'Education Technology',
      description: 'Digital learning and education platforms',
      features: ['LMS integration', 'Student tracking', 'Content management'],
      price: '$32,000+',
      icon: Users2,
      color: 'purple'
    }
  ]

  return (
    <PageTransition>
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-slate-900 via-blue-900 to-purple-900 py-20 sm:py-32">
        {/* Animated Background */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-purple-600/20"></div>
          <div className="absolute top-0 left-0 w-full h-full">
            <div className="absolute top-20 left-20 w-72 h-72 bg-blue-500/10 rounded-full blur-3xl animate-pulse"></div>
            <div className="absolute top-40 right-20 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
            <div className="absolute bottom-20 left-1/2 w-80 h-80 bg-cyan-500/10 rounded-full blur-3xl animate-pulse delay-2000"></div>
          </div>
        </div>
        
        <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h1 className="text-4xl font-bold tracking-tight text-white sm:text-6xl">
              Comprehensive{' '}
              <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
                Tech Solutions
              </span>
            </h1>
            <p className="mt-6 text-xl leading-8 text-blue-100">
              From AI-powered automation to enterprise-grade security, we deliver cutting-edge solutions that transform your business.
            </p>
            <div className="mt-10 flex items-center justify-center gap-x-6">
              <Link
                to="/contact"
                className="rounded-md bg-gradient-to-r from-cyan-400 to-purple-400 px-8 py-4 text-lg font-semibold text-slate-900 shadow-lg hover:from-cyan-300 hover:to-purple-300 transition-all duration-300 hover:shadow-2xl hover:scale-105"
              >
                Get Started
                <ArrowRight className="ml-2 h-5 w-5 inline" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* AI Services Section */}
      <section id="ai" className="py-24 sm:py-32 bg-gradient-to-br from-slate-50 to-blue-50">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center mb-16">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              AI & Machine Learning Solutions
            </h2>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              Transform your operations with intelligent automation and AI-powered decision making.
            </p>
          </div>
          
          <div className="grid gap-8 lg:grid-cols-2">
            {aiServices.map((service, index) => (
              <div key={service.name} className="group relative rounded-2xl border border-gray-200 bg-white p-8 shadow-sm hover:shadow-2xl transition-all duration-500 hover:-translate-y-2">
                <div className="flex items-center gap-x-3 mb-4">
                  <div className={`flex h-12 w-12 items-center justify-center rounded-xl bg-${service.color}-600 group-hover:scale-110 transition-transform duration-300`}>
                    <service.icon className="h-7 w-7 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900">{service.name}</h3>
                    <p className="text-sm text-gray-500">{service.description}</p>
                  </div>
                </div>
                
                <ul className="space-y-3 mb-6">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center gap-x-3">
                      <CheckCircle className="h-4 w-4 text-green-600" />
                      <span className="text-sm text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>
                
                <div className="flex items-center justify-between">
                  <span className="text-2xl font-bold text-gray-900">{service.price}</span>
                  <Link
                    to="/contact"
                    className="inline-flex items-center text-sm font-semibold text-blue-600 hover:text-blue-500 transition-colors group-hover:scale-105"
                  >
                    Get Started
                    <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Cloud Services Section */}
      <section id="cloud" className="py-24 sm:py-32 bg-white">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center mb-16">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Cloud & Infrastructure Solutions
            </h2>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              Build scalable, resilient cloud infrastructure that grows with your business.
            </p>
          </div>
          
          <div className="grid gap-8 lg:grid-cols-2">
            {cloudServices.map((service, index) => (
              <div key={service.name} className="group relative rounded-2xl border border-gray-200 bg-gradient-to-br from-white to-gray-50 p-8 shadow-sm hover:shadow-2xl transition-all duration-500 hover:-translate-y-2">
                <div className="flex items-center gap-x-3 mb-4">
                  <div className={`flex h-12 w-12 items-center justify-center rounded-xl bg-${service.color}-600 group-hover:scale-110 transition-transform duration-300`}>
                    <service.icon className="h-7 w-7 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900">{service.name}</h3>
                    <p className="text-sm text-gray-500">{service.description}</p>
                  </div>
                </div>
                
                <ul className="space-y-3 mb-6">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center gap-x-3">
                      <CheckCircle className="h-4 w-4 text-green-600" />
                      <span className="text-sm text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>
                
                <div className="flex items-center justify-between">
                  <span className="text-2xl font-bold text-gray-900">{service.price}</span>
                  <Link
                    to="/contact"
                    className="inline-flex items-center text-sm font-semibold text-green-600 hover:text-green-500 transition-colors group-hover:scale-105"
                  >
                    Get Started
                    <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Cybersecurity Services Section */}
      <section id="cybersecurity" className="py-24 sm:py-32 bg-gradient-to-br from-red-50 to-orange-50">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center mb-16">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Cybersecurity & Compliance
            </h2>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              Protect your business with enterprise-grade security frameworks and compliance solutions.
            </p>
          </div>
          
          <div className="grid gap-8 lg:grid-cols-2">
            {cybersecurityServices.map((service, index) => (
              <div key={service.name} className="group relative rounded-2xl border border-gray-200 bg-white p-8 shadow-sm hover:shadow-2xl transition-all duration-500 hover:-translate-y-2">
                <div className="flex items-center gap-x-3 mb-4">
                  <div className={`flex h-12 w-12 items-center justify-center rounded-xl bg-${service.color}-600 group-hover:scale-110 transition-transform duration-300`}>
                    <service.icon className="h-7 w-7 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900">{service.name}</h3>
                    <p className="text-sm text-gray-500">{service.description}</p>
                  </div>
                </div>
                
                <ul className="space-y-3 mb-6">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center gap-x-3">
                      <CheckCircle className="h-4 w-4 text-green-600" />
                      <span className="text-sm text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>
                
                <div className="flex items-center justify-between">
                  <span className="text-2xl font-bold text-gray-900">{service.price}</span>
                  <Link
                    to="/contact"
                    className="inline-flex items-center text-sm font-semibold text-red-600 hover:text-red-500 transition-colors group-hover:scale-105"
                  >
                    Get Started
                    <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Micro SaaS Services Section */}
      <section id="saas" className="py-24 sm:py-32 bg-white">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center mb-16">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Micro SaaS Solutions
            </h2>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              Rapidly build and deploy SaaS products with proven infrastructure patterns.
            </p>
          </div>
          
          <div className="grid gap-8 lg:grid-cols-2">
            {microSaasServices.map((service, index) => (
              <div key={service.name} className="group relative rounded-2xl border border-gray-200 bg-gradient-to-br from-white to-purple-50 p-8 shadow-sm hover:shadow-2xl transition-all duration-500 hover:-translate-y-2">
                <div className="flex items-center gap-x-3 mb-4">
                  <div className={`flex h-12 w-12 items-center justify-center rounded-xl bg-${service.color}-600 group-hover:scale-110 transition-transform duration-300`}>
                    <service.icon className="h-7 w-7 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900">{service.name}</h3>
                    <p className="text-sm text-gray-500">{service.description}</p>
                  </div>
                </div>
                
                <ul className="space-y-3 mb-6">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center gap-x-3">
                      <CheckCircle className="h-4 w-4 text-green-600" />
                      <span className="text-sm text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>
                
                <div className="flex items-center justify-between">
                  <span className="text-2xl font-bold text-gray-900">{service.price}</span>
                  <Link
                    to="/contact"
                    className="inline-flex items-center text-sm font-semibold text-purple-600 hover:text-purple-500 transition-colors group-hover:scale-105"
                  >
                    Get Started
                    <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* IT Services Section */}
      <section id="it" className="py-24 sm:py-32 bg-gradient-to-br from-gray-50 to-slate-50">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center mb-16">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              IT Consulting & Solutions
            </h2>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              Strategic IT consulting and implementation services for modern businesses.
            </p>
          </div>
          
          <div className="grid gap-8 lg:grid-cols-2">
            {itServices.map((service, index) => (
              <div key={service.name} className="group relative rounded-2xl border border-gray-200 bg-white p-8 shadow-sm hover:shadow-2xl transition-all duration-500 hover:-translate-y-2">
                <div className="flex items-center gap-x-3 mb-4">
                  <div className={`flex h-12 w-12 items-center justify-center rounded-xl bg-${service.color}-600 group-hover:scale-110 transition-transform duration-300`}>
                    <service.icon className="h-7 w-7 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900">{service.name}</h3>
                    <p className="text-sm text-gray-500">{service.description}</p>
                  </div>
                </div>
                
                <ul className="space-y-3 mb-6">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center gap-x-3">
                      <CheckCircle className="h-4 w-4 text-green-600" />
                      <span className="text-sm text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>
                
                <div className="flex items-center justify-between">
                  <span className="text-2xl font-bold text-gray-900">{service.price}</span>
                  <Link
                    to="/contact"
                    className="inline-flex items-center text-sm font-semibold text-gray-600 hover:text-gray-500 transition-colors group-hover:scale-105"
                  >
                    Get Started
                    <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Industry Solutions Section */}
      <section id="industry" className="py-24 sm:py-32 bg-white">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center mb-16">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Industry-Specific Solutions
            </h2>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              Tailored technology solutions for specific industry requirements and compliance needs.
            </p>
          </div>
          
          <div className="grid gap-8 lg:grid-cols-2">
            {industrySolutions.map((service, index) => (
              <div key={service.name} className="group relative rounded-2xl border border-gray-200 bg-gradient-to-br from-white to-blue-50 p-8 shadow-sm hover:shadow-2xl transition-all duration-500 hover:-translate-y-2">
                <div className="flex items-center gap-x-3 mb-4">
                  <div className={`flex h-12 w-12 items-center justify-center rounded-xl bg-${service.color}-600 group-hover:scale-110 transition-transform duration-300`}>
                    <service.icon className="h-7 w-7 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900">{service.name}</h3>
                    <p className="text-sm text-gray-500">{service.description}</p>
                  </div>
                </div>
                
                <ul className="space-y-3 mb-6">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center gap-x-3">
                      <CheckCircle className="h-4 w-4 text-green-600" />
                      <span className="text-sm text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>
                
                <div className="flex items-center justify-between">
                  <span className="text-2xl font-bold text-gray-900">{service.price}</span>
                  <Link
                    to="/contact"
                    className="inline-flex items-center text-sm font-semibold text-blue-600 hover:text-blue-500 transition-colors group-hover:scale-105"
                  >
                    Get Started
                    <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-r from-slate-900 via-blue-900 to-purple-900 py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
              Ready to transform your business?
            </h2>
            <p className="mx-auto mt-6 max-w-xl text-lg leading-8 text-blue-100">
              Let's discuss your project and how our comprehensive solutions can help you achieve your goals.
            </p>
            <div className="mt-10 flex items-center justify-center gap-x-6">
              <Link
                to="/contact"
                className="rounded-md bg-gradient-to-r from-cyan-400 to-purple-400 px-8 py-4 text-lg font-semibold text-slate-900 shadow-lg hover:from-cyan-300 hover:to-purple-300 transition-all duration-300 hover:shadow-2xl hover:scale-105"
              >
                Get in touch
                <ArrowRight className="ml-2 h-5 w-5 inline" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </PageTransition>
  )
}
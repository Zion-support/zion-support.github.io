import React, { useState } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import {
  Brain,
  Cloud,
  Shield,
  Code,
  Server,
  Database,
  Network,
  Zap,
  Users,
  BarChart3,
  CheckCircle,
  ArrowRight,
  Clock,
  Award,
  Star,
  TrendingUp,
  Target,
  FileText,
  MessageSquare,
  Eye,
  Globe,
  Settings,
  Cpu,
  Lock,
  Phone,
  Mail,
  MapPin,
  Search,
  Filter,
  ChevronDown,
  ChevronUp,
  Heart,
  Building,
  Truck,
  GraduationCap,
  Utensils,
  PieChart,
  Home,
  Calendar
} from 'lucide-react';
import PageTransition from '../src/components/PageTransition';

export default function ServicesEnhanced() {
  const title = 'Comprehensive Technology Services — Zion Tech Group';
  const description = 'Leading provider of AI services, IT solutions, and micro SaaS development. Transform your business with cutting-edge technology solutions.';

  const [selectedCategory, setSelectedCategory] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');

  const serviceCategories = [
    { id: 'all', name: 'All Services', icon: Globe },
    { id: 'ai', name: 'AI Services', icon: Brain },
    { id: 'it', name: 'IT Services', icon: Server },
    { id: 'saas', name: 'Micro SaaS', icon: Code },
    { id: 'security', name: 'Cybersecurity', icon: Shield },
    { id: 'cloud', name: 'Cloud Solutions', icon: Cloud }
  ];

  const services = [
    // AI Services
    {
      title: 'AI-Powered Autonomous Trading System',
      description: 'Intelligent algorithmic trading platform with real-time market analysis and risk management',
      icon: TrendingUp,
      features: [
        'Real-time market data analysis and pattern recognition',
        'Automated trading strategy execution',
        'Risk management and portfolio optimization',
        'Backtesting and strategy validation',
        'Multi-asset class support (stocks, crypto, forex)',
        'Regulatory compliance and audit trails'
      ],
      pricing: '$15,000 - $50,000/month',
      delivery: '12-20 weeks',
      category: 'ai',
      color: 'blue'
    },
    {
      title: 'AI-Powered Drug Discovery Platform',
      description: 'Machine learning platform for pharmaceutical research and drug development',
      icon: Brain,
      features: [
        'Molecular structure analysis and prediction',
        'Drug-target interaction modeling',
        'Toxicity and efficacy prediction',
        'Clinical trial optimization',
        'Patent landscape analysis',
        'Regulatory pathway guidance'
      ],
      pricing: '$25,000 - $100,000/month',
      delivery: '16-24 weeks',
      category: 'ai',
      color: 'purple'
    },
    {
      title: 'AI-Powered Autonomous Vehicle Systems',
      description: 'Intelligent autonomous vehicle control and navigation systems',
      icon: Target,
      features: [
        'Real-time object detection and avoidance',
        'Path planning and navigation optimization',
        'Traffic pattern analysis and prediction',
        'Vehicle-to-vehicle communication',
        'Safety monitoring and emergency response',
        'Fleet management and optimization'
      ],
      pricing: '$50,000 - $200,000/month',
      delivery: '20-32 weeks',
      category: 'ai',
      color: 'indigo'
    },
    {
      title: 'AI-Powered Personalized Medicine',
      description: 'Precision medicine platform with AI-driven treatment recommendations',
      icon: Heart,
      features: [
        'Genomic analysis and interpretation',
        'Personalized treatment recommendations',
        'Drug interaction and side effect prediction',
        'Clinical trial matching',
        'Health outcome prediction',
        'Integration with electronic health records'
      ],
      pricing: '$20,000 - $80,000/month',
      delivery: '14-22 weeks',
      category: 'ai',
      color: 'red'
    },
    {
      title: 'AI-Powered Smart City Management',
      description: 'Intelligent urban planning and management system for smart cities',
      icon: Building,
      features: [
        'Traffic flow optimization and management',
        'Energy consumption monitoring and optimization',
        'Public safety and emergency response',
        'Waste management optimization',
        'Citizen service automation',
        'Urban planning and development insights'
      ],
      pricing: '$25,000 - $100,000/month',
      delivery: '16-24 weeks',
      category: 'ai',
      color: 'green'
    },

    // IT Services
    {
      title: 'Zero-Trust Security Architecture',
      description: 'Comprehensive zero-trust security implementation and management',
      icon: Lock,
      features: [
        'Identity and access management (IAM)',
        'Micro-segmentation and network isolation',
        'Continuous security monitoring',
        'Privileged access management (PAM)',
        'Data loss prevention (DLP)',
        'Security orchestration and automation'
      ],
      pricing: '$15,000 - $75,000/month',
      delivery: '12-20 weeks',
      category: 'it',
      color: 'purple'
    },
    {
      title: 'Hybrid Cloud Management',
      description: 'Seamless hybrid cloud strategy and management across multiple platforms',
      icon: Cloud,
      features: [
        'Multi-cloud architecture design',
        'Cloud migration and optimization',
        'Cost management and optimization',
        'Disaster recovery across clouds',
        'Security and compliance management',
        'Performance monitoring and optimization'
      ],
      pricing: '$10,000 - $60,000/month',
      delivery: '10-18 weeks',
      category: 'it',
      color: 'blue'
    },
    {
      title: 'Edge Computing Infrastructure',
      description: 'Edge computing solutions for real-time processing and low-latency applications',
      icon: Cpu,
      features: [
        'Edge server deployment and management',
        'Real-time data processing',
        'Edge AI and machine learning',
        'Content delivery network (CDN) optimization',
        'IoT device integration',
        'Edge security and monitoring'
      ],
      pricing: '$8,000 - $40,000/month',
      delivery: '8-16 weeks',
      category: 'it',
      color: 'green'
    },
    {
      title: 'Data Center Modernization',
      description: 'Complete data center transformation and modernization services',
      icon: Server,
      features: [
        'Data center assessment and planning',
        'Infrastructure modernization',
        'Energy efficiency optimization',
        'Cooling and power management',
        'Security and access control',
        'Compliance and certification'
      ],
      pricing: '$25,000 - $150,000/month',
      delivery: '16-32 weeks',
      category: 'it',
      color: 'orange'
    },
    {
      title: 'AI-Powered IT Operations (AIOps)',
      description: 'Intelligent IT operations with machine learning and automation',
      icon: Brain,
      features: [
        'Automated incident detection and resolution',
        'Predictive maintenance and capacity planning',
        'Intelligent root cause analysis',
        'Automated remediation workflows',
        'Performance optimization recommendations',
        'Cost optimization and resource allocation'
      ],
      pricing: '$12,000 - $50,000/month',
      delivery: '8-16 weeks',
      category: 'it',
      color: 'indigo'
    },

    // Micro SaaS Services
    {
      title: 'AI-Powered Legal Document Analyzer',
      description: 'Intelligent contract analysis and legal document processing with risk assessment',
      icon: FileText,
      features: [
        'Automated contract clause analysis',
        'Risk assessment and compliance checking',
        'Legal document summarization',
        'Deadline and renewal tracking',
        'Template generation and customization',
        'Integration with legal management systems'
      ],
      pricing: '$1,500 - $6,000/month',
      delivery: '4-6 weeks',
      category: 'saas',
      color: 'blue'
    },
    {
      title: 'Smart Energy Management Platform',
      description: 'AI-driven energy consumption optimization for buildings and facilities',
      icon: Zap,
      features: [
        'Real-time energy monitoring and analytics',
        'Predictive energy consumption modeling',
        'Automated energy optimization recommendations',
        'Carbon footprint tracking and reporting',
        'Integration with smart building systems',
        'Cost savings analysis and ROI tracking'
      ],
      pricing: '$2,000 - $8,000/month',
      delivery: '5-8 weeks',
      category: 'saas',
      color: 'green'
    },
    {
      title: 'AI-Powered Supply Chain Optimizer',
      description: 'Intelligent supply chain management with demand forecasting and logistics optimization',
      icon: Network,
      features: [
        'Demand forecasting with machine learning',
        'Supplier performance analytics',
        'Route optimization and logistics planning',
        'Risk assessment and mitigation',
        'Real-time inventory tracking',
        'Integration with ERP and WMS systems'
      ],
      pricing: '$3,500 - $15,000/month',
      delivery: '6-10 weeks',
      category: 'saas',
      color: 'purple'
    },
    {
      title: 'Intelligent Property Management System',
      description: 'Comprehensive property management with AI-powered tenant screening and maintenance',
      icon: Building,
      features: [
        'AI-powered tenant screening and background checks',
        'Automated rent collection and payment processing',
        'Maintenance request management and scheduling',
        'Property performance analytics',
        'Tenant communication portal',
        'Financial reporting and accounting integration'
      ],
      pricing: '$1,200 - $5,000/month',
      delivery: '4-7 weeks',
      category: 'saas',
      color: 'orange'
    },
    {
      title: 'AI-Powered Healthcare Scheduling',
      description: 'Intelligent appointment scheduling and patient management for healthcare providers',
      icon: Calendar,
      features: [
        'Smart appointment scheduling with AI optimization',
        'Patient reminder and follow-up automation',
        'Provider availability management',
        'Telemedicine integration',
        'Insurance verification and billing',
        'Patient satisfaction tracking'
      ],
      pricing: '$2,500 - $10,000/month',
      delivery: '5-8 weeks',
      category: 'saas',
      color: 'red'
    },
    {
      title: 'Smart Fleet Management Platform',
      description: 'AI-powered fleet tracking and optimization for transportation companies',
      icon: Truck,
      features: [
        'Real-time vehicle tracking and monitoring',
        'Route optimization and fuel efficiency',
        'Driver behavior analysis and safety scoring',
        'Predictive maintenance scheduling',
        'Compliance and regulatory reporting',
        'Integration with telematics systems'
      ],
      pricing: '$1,800 - $7,500/month',
      delivery: '4-8 weeks',
      category: 'saas',
      color: 'indigo'
    },
    {
      title: 'AI-Powered Learning Management System',
      description: 'Intelligent educational platform with personalized learning paths and assessment',
      icon: GraduationCap,
      features: [
        'Personalized learning path generation',
        'AI-powered content recommendations',
        'Automated assessment and grading',
        'Progress tracking and analytics',
        'Multi-language support',
        'Integration with educational tools'
      ],
      pricing: '$1,000 - $4,500/month',
      delivery: '6-10 weeks',
      category: 'saas',
      color: 'teal'
    },
    {
      title: 'Smart Restaurant Management System',
      description: 'AI-powered restaurant operations with inventory, staff, and customer management',
      icon: Utensils,
      features: [
        'AI-powered inventory management',
        'Dynamic pricing optimization',
        'Staff scheduling and performance tracking',
        'Customer loyalty and engagement',
        'POS integration and payment processing',
        'Analytics and business intelligence'
      ],
      pricing: '$800 - $3,500/month',
      delivery: '3-6 weeks',
      category: 'saas',
      color: 'yellow'
    },
    {
      title: 'AI-Powered Financial Planning Tool',
      description: 'Intelligent personal and business financial planning with investment recommendations',
      icon: PieChart,
      features: [
        'AI-powered financial goal setting',
        'Investment portfolio optimization',
        'Risk assessment and management',
        'Tax planning and optimization',
        'Retirement planning tools',
        'Integration with banking and investment accounts'
      ],
      pricing: '$199 - $999/month',
      delivery: '4-7 weeks',
      category: 'saas',
      color: 'emerald'
    },
    {
      title: 'Smart Home Automation Platform',
      description: 'AI-powered home automation with energy management and security integration',
      icon: Home,
      features: [
        'Smart device integration and control',
        'Energy usage optimization',
        'Security monitoring and alerts',
        'Voice control and automation',
        'Mobile app and web dashboard',
        'Integration with popular smart home brands'
      ],
      pricing: '$149 - $599/month',
      delivery: '3-5 weeks',
      category: 'saas',
      color: 'cyan'
    }
  ];

  const getColorClasses = (color: string) => {
    const colorMap: { [key: string]: { bg: string, text: string, border: string, hover: string } } = {
      blue: { bg: 'bg-blue-600', text: 'text-blue-600', border: 'border-blue-300', hover: 'hover:bg-blue-700' },
      purple: { bg: 'bg-purple-600', text: 'text-purple-600', border: 'border-purple-300', hover: 'hover:bg-purple-700' },
      green: { bg: 'bg-green-600', text: 'text-green-600', border: 'border-green-300', hover: 'hover:bg-green-700' },
      indigo: { bg: 'bg-indigo-600', text: 'text-indigo-600', border: 'border-indigo-300', hover: 'hover:bg-indigo-700' },
      sky: { bg: 'bg-sky-600', text: 'text-sky-600', border: 'border-sky-300', hover: 'hover:bg-sky-700' },
      orange: { bg: 'bg-orange-600', text: 'text-orange-600', border: 'border-orange-300', hover: 'hover:bg-orange-700' },
      teal: { bg: 'bg-teal-600', text: 'text-teal-600', border: 'border-teal-300', hover: 'hover:bg-teal-700' },
      emerald: { bg: 'bg-emerald-600', text: 'text-emerald-600', border: 'border-emerald-300', hover: 'hover:bg-emerald-700' },
      red: { bg: 'bg-red-600', text: 'text-red-600', border: 'border-red-300', hover: 'hover:bg-red-700' },
      gray: { bg: 'bg-gray-600', text: 'text-gray-600', border: 'border-gray-300', hover: 'hover:bg-gray-700' },
      yellow: { bg: 'bg-yellow-600', text: 'text-yellow-600', border: 'border-yellow-300', hover: 'hover:bg-yellow-700' },
      cyan: { bg: 'bg-cyan-600', text: 'text-cyan-600', border: 'border-cyan-300', hover: 'hover:bg-cyan-700' }
    };
    return colorMap[color] || colorMap.blue;
  };

  const filteredServices = services.filter(service => {
    const matchesCategory = selectedCategory === 'all' || service.category === selectedCategory;
    const matchesSearch = searchTerm === '' || 
      service.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      service.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
      service.features.some(feature => feature.toLowerCase().includes(searchTerm.toLowerCase()));
    return matchesCategory && matchesSearch;
  });

  return (
    <PageTransition>
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="canonical" href="https://ziontechgroup.com/services" />
      </Head>

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-slate-50 to-blue-50 py-20 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <div className="flex items-center justify-center mb-6">
              <Award className="h-6 w-6 text-blue-600 mr-2" />
              <span className="text-base font-semibold leading-7 text-blue-600">Our Services</span>
            </div>
            <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
              Comprehensive Technology Solutions
            </h1>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              Transform your business with cutting-edge AI services, IT solutions, and micro SaaS development. 
              We deliver innovative technology solutions that drive growth and efficiency.
            </p>
            <div className="mt-10 flex items-center justify-center gap-x-6">
              <Link
                href="/contact"
                className="rounded-md bg-blue-600 px-6 py-3 text-sm font-semibold text-white shadow-sm hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600"
              >
                Get Started
                <ArrowRight className="ml-2 h-4 w-4 inline" />
              </Link>
              <Link
                href="/pricing-guide"
                className="text-sm font-semibold leading-6 text-gray-900 hover:text-blue-600"
              >
                View Pricing <span aria-hidden="true">→</span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Search and Filter Section */}
      <section className="py-12 bg-white">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row gap-4 items-center justify-between">
            <div className="relative flex-1 max-w-md">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
              <input
                type="text"
                placeholder="Search services..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>
            <div className="flex flex-wrap gap-2">
              {serviceCategories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => setSelectedCategory(category.id)}
                  className={`flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                    selectedCategory === category.id
                      ? 'bg-blue-600 text-white'
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
                >
                  <category.icon className="h-4 w-4" />
                  {category.name}
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-24 sm:py-32 bg-gray-50">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center mb-16">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Our Service Portfolio
            </h2>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              Comprehensive technology solutions tailored to your business needs. All services include implementation, 
              training, and ongoing support. Contact us at{' '}
              <a href="mailto:kleber@ziontechgroup.com" className="text-blue-600 hover:text-blue-500">
                kleber@ziontechgroup.com
              </a>{' '}
              or call{' '}
              <a href="tel:+13024640950" className="text-blue-600 hover:text-blue-500">
                +1 302 464 0950
              </a>{' '}
              for custom pricing.
            </p>
          </div>
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
            {filteredServices.map((service, index) => {
              const colors = getColorClasses(service.color);
              return (
                <div key={index} className="group relative rounded-2xl border border-gray-200 bg-white p-8 shadow-sm hover:shadow-lg transition-all duration-300">
                  <div className="flex items-center gap-x-3 mb-6">
                    <div className={`flex h-12 w-12 items-center justify-center rounded-lg ${colors.bg} group-hover:${colors.hover} transition-colors`}>
                      <service.icon className="h-7 w-7 text-white" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-gray-900">{service.title}</h3>
                      <p className={`text-sm ${colors.text} font-medium`}>
                        {serviceCategories.find(cat => cat.id === service.category)?.name}
                      </p>
                    </div>
                  </div>
                  <p className="text-gray-600 mb-6">{service.description}</p>
                  <ul className="space-y-3 mb-6">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center gap-x-3">
                        <CheckCircle className={`h-4 w-4 ${colors.text} flex-shrink-0`} />
                        <span className="text-sm text-gray-700">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-4 text-sm text-gray-500">
                      <div className="flex items-center space-x-1">
                        <Clock className="h-4 w-4" />
                        <span>{service.delivery}</span>
                      </div>
                      <div className={`font-semibold ${colors.text}`}>{service.pricing}</div>
                    </div>
                    <Link
                      href="/contact"
                      className={`inline-flex items-center text-sm font-semibold ${colors.text} hover:opacity-75 transition-colors group`}
                    >
                      Get Started
                      <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                    </Link>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Contact Information Section */}
      <section className="bg-white py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Ready to Transform Your Business?
            </h2>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              Let's discuss how our technology solutions can drive your business forward. 
              Get a free consultation and custom proposal.
            </p>
            <div className="mt-10 grid grid-cols-1 gap-8 sm:grid-cols-3">
              <div className="text-center">
                <div className="flex items-center justify-center h-12 w-12 rounded-full bg-blue-100 mx-auto mb-4">
                  <Phone className="h-6 w-6 text-blue-600" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Call Us</h3>
                <a href="tel:+13024640950" className="text-blue-600 hover:text-blue-500">
                  +1 302 464 0950
                </a>
              </div>
              <div className="text-center">
                <div className="flex items-center justify-center h-12 w-12 rounded-full bg-blue-100 mx-auto mb-4">
                  <Mail className="h-6 w-6 text-blue-600" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Email Us</h3>
                <a href="mailto:kleber@ziontechgroup.com" className="text-blue-600 hover:text-blue-500">
                  kleber@ziontechgroup.com
                </a>
              </div>
              <div className="text-center">
                <div className="flex items-center justify-center h-12 w-12 rounded-full bg-blue-100 mx-auto mb-4">
                  <MapPin className="h-6 w-6 text-blue-600" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Visit Us</h3>
                <p className="text-gray-600">364 E Main St STE 1008<br />Middletown DE 19709</p>
              </div>
            </div>
            <div className="mt-10 flex items-center justify-center gap-x-6">
              <Link
                href="/contact"
                className="rounded-md bg-blue-600 px-6 py-3 text-sm font-semibold text-white shadow-sm hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600"
              >
                Schedule Consultation
              </Link>
              <a
                href="tel:+13024640950"
                className="text-sm font-semibold leading-6 text-gray-900 hover:text-blue-600"
              >
                Call Now <span aria-hidden="true">→</span>
              </a>
            </div>
          </div>
        </div>
      </section>
    </PageTransition>
  );
}
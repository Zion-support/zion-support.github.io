import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { ModernHeader } from '../src/components/header/ModernHeader';
import { SimpleFooter } from '../src/components/layout/SimpleFooter';
import { 
  ArrowRight, 
  Brain, 
  Cloud, 
  Shield, 
  Zap, 
  Database, 
  Server, 
  Lock, 
  BarChart3, 
  Users, 
  Globe, 
  Code, 
  CheckCircle, 
  Star, 
  TrendingUp, 
  Clock, 
  Award, 
  Mail, 
  Phone, 
  MapPin,
  MessageCircle,
  FileText,
  Settings,
  Bot,
  Eye,
  Target,
  Cpu,
  Network,
  Monitor
} from 'lucide-react';

export default function Services() {
  const title = 'Services — Zion Tech Group';
  const description = 'Comprehensive AI services, cloud platforms, cybersecurity, micro SaaS solutions, and IT services.';

  const serviceCategories = [
    {
      title: 'AI Services',
      description: 'Cutting-edge artificial intelligence solutions',
      icon: Brain,
      color: 'from-purple-500 to-pink-500',
      href: '/ai-services',
      services: [
        {
          name: 'AI Content Creation Tools',
          description: 'AI-powered content generation with SEO optimization',
          pricing: '$1,500 - $5,000/month',
          features: ['Automated generation', 'SEO optimization', 'Multi-format support', 'Brand consistency']
        },
        {
          name: 'AI Customer Support Chatbot',
          description: 'Intelligent conversational AI for 24/7 support',
          pricing: '$2,000 - $10,000/month',
          features: ['Natural language processing', 'Multi-channel deployment', 'Sentiment analysis', 'Continuous learning']
        },
        {
          name: 'Predictive Analytics Platform',
          description: 'AI-driven forecasting and predictive modeling',
          pricing: '$6,000 - $25,000/month',
          features: ['Sales forecasting', 'Customer churn prediction', 'Risk assessment', 'Real-time dashboards']
        }
      ]
    },
    {
      title: 'Micro SaaS Solutions',
      description: 'Custom software solutions for modern businesses',
      icon: Code,
      color: 'from-blue-500 to-cyan-500',
      href: '/micro-saas',
      services: [
        {
          name: 'Affiliate Marketing Tracking',
          description: 'Advanced affiliate marketing platform with fraud protection',
          pricing: '$2,500 - $8,000/month',
          features: ['Fraud protection', 'Automated payments', 'Real-time analytics', 'Multi-channel tracking']
        },
        {
          name: 'Website Analytics for SMBs',
          description: 'Intuitive business intelligence dashboard',
          pricing: '$1,500 - $5,000/month',
          features: ['Traffic analysis', 'Conversion tracking', 'Marketing insights', 'Mobile optimization']
        },
        {
          name: 'E-Commerce Return Management',
          description: 'Automated return process management',
          pricing: '$2,000 - $6,000/month',
          features: ['Automated requests', 'Label generation', 'Status tracking', 'Platform integration']
        }
      ]
    },
    {
      title: 'IT Services',
      description: 'Comprehensive information technology solutions',
      icon: Server,
      color: 'from-green-500 to-emerald-500',
      href: '/it-services',
      services: [
        {
          name: 'IT Helpdesk Software',
          description: 'Custom ticketing system for Managed IT Service Providers',
          pricing: '$3,000 - $12,000/month',
          features: ['Ticket routing', 'SLA tracking', 'Knowledge base', 'Client portal']
        },
        {
          name: 'Cloud Infrastructure & Migration',
          description: 'Complete cloud transformation with AWS, Azure, and GCP',
          pricing: '$5,000 - $50,000/month',
          features: ['Multi-cloud architecture', 'Legacy migration', 'Auto-scaling', 'Cost optimization']
        },
        {
          name: 'Cybersecurity & Compliance',
          description: 'Enterprise-grade security solutions',
          pricing: '$3,000 - $25,000/month',
          features: ['Zero-trust architecture', 'Compliance automation', 'Penetration testing', 'Security monitoring']
        }
      ]
    }
  ];

  const allServices = [
    {
      icon: Brain,
      title: 'AI-Powered Email Responder',
      description: 'Automated email responses with sentiment analysis and intelligent categorization',
      pricing: '$2,500 - $8,000/month',
      delivery: '2-3 weeks',
      category: 'AI Services'
    },
    {
      icon: MessageCircle,
      title: 'Affiliate Marketing Tracking',
      description: 'Advanced affiliate marketing platform with fraud protection and automated payments',
      pricing: '$2,500 - $8,000/month',
      delivery: '3-4 weeks',
      category: 'Micro SaaS'
    },
    {
      icon: BarChart3,
      title: 'Website Analytics for SMBs',
      description: 'Intuitive business intelligence dashboard for small business owners',
      pricing: '$1,500 - $5,000/month',
      delivery: '2-3 weeks',
      category: 'Micro SaaS'
    },
    {
      icon: Users,
      title: 'IT Helpdesk Software',
      description: 'Custom ticketing system for Managed IT Service Providers',
      pricing: '$3,000 - $12,000/month',
      delivery: '4-6 weeks',
      category: 'IT Services'
    },
    {
      icon: FileText,
      title: 'AI Content Creation Tools',
      description: 'AI-powered content generation with SEO optimization and personalization',
      pricing: '$1,500 - $5,000/month',
      delivery: '1-2 weeks',
      category: 'AI Services'
    },
    {
      icon: Settings,
      title: 'E-Commerce Return Management',
      description: 'Automated return process management for e-commerce businesses',
      pricing: '$2,000 - $6,000/month',
      delivery: '2-4 weeks',
      category: 'Micro SaaS'
    },
    {
      icon: Bot,
      title: 'AI Chatbot & Virtual Assistant',
      description: 'Intelligent conversational AI for customer support and business automation',
      pricing: '$2,000 - $10,000/month',
      delivery: '2-4 weeks',
      category: 'AI Services'
    },
    {
      icon: Eye,
      title: 'Computer Vision Solutions',
      description: 'Image and video analysis for quality control, security, and automation',
      pricing: '$5,000 - $20,000/month',
      delivery: '6-8 weeks',
      category: 'AI Services'
    },
    {
      icon: Cloud,
      title: 'Cloud Infrastructure & Migration',
      description: 'Complete cloud transformation with AWS, Azure, and Google Cloud Platform',
      pricing: '$5,000 - $50,000/month',
      delivery: '4-12 weeks',
      category: 'IT Services'
    },
    {
      icon: Shield,
      title: 'Cybersecurity & Compliance',
      description: 'Enterprise-grade security solutions and compliance management',
      pricing: '$3,000 - $25,000/month',
      delivery: '3-8 weeks',
      category: 'IT Services'
    },
    {
      icon: Network,
      title: 'Network Infrastructure',
      description: 'Design, implementation, and management of enterprise networks',
      pricing: '$2,000 - $15,000/month',
      delivery: '2-6 weeks',
      category: 'IT Services'
    },
    {
      icon: Database,
      title: 'Data Management & Analytics',
      description: 'Data warehousing, analytics, and business intelligence solutions',
      pricing: '$4,000 - $30,000/month',
      delivery: '6-16 weeks',
      category: 'IT Services'
    }
  ];

  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta name="keywords" content="AI services, cloud platforms, cybersecurity, micro SaaS, IT services, technology solutions" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="canonical" href="https://ziontechgroup.com/services" />
      </Head>
      
      <ModernHeader />
      
      <main className="min-h-screen bg-white">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-slate-50 to-blue-50 py-20 sm:py-32">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mx-auto max-w-2xl text-center">
              <div className="flex items-center justify-center mb-4">
                <Award className="h-6 w-6 text-blue-600 mr-2" />
                <span className="text-base font-semibold leading-7 text-blue-600">Our Services</span>
              </div>
              <h1 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                Comprehensive Technology Solutions
              </h1>
              <p className="mt-6 text-lg leading-8 text-gray-600">
                From strategy to production, we deliver outcomes fast. Our comprehensive suite of services covers everything you need to transform your business.
              </p>
            </div>
          </div>
        </section>

        {/* Service Categories */}
        <section className="py-24 sm:py-32">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
                Service Categories
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Explore our comprehensive range of technology services
              </p>
            </div>
            
            <div className="grid gap-8 lg:grid-cols-3">
              {serviceCategories.map((category, index) => {
                const IconComponent = category.icon;
                return (
                  <Link key={index} href={category.href} className="group">
                    <div className="bg-white rounded-2xl border border-gray-200 p-8 shadow-sm hover:shadow-lg transition-all duration-300 hover:border-blue-300">
                      <div className={`w-12 h-12 bg-gradient-to-r ${category.color} rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
                        <IconComponent className="h-7 w-7 text-white" />
                      </div>
                      <h3 className="text-xl font-semibold text-gray-900 mb-4">{category.title}</h3>
                      <p className="text-gray-600 mb-6">{category.description}</p>
                      
                      <div className="space-y-3">
                        {category.services.map((service, idx) => (
                          <div key={idx} className="border-l-2 border-blue-100 pl-4">
                            <div className="font-medium text-gray-900 text-sm">{service.name}</div>
                            <div className="text-xs text-gray-500">{service.pricing}</div>
                          </div>
                        ))}
                      </div>
                      
                      <div className="mt-6 flex items-center text-blue-600 font-medium">
                        Explore {category.title} <ArrowRight className="ml-1 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                      </div>
                    </div>
                  </Link>
                );
              })}
            </div>
          </div>
        </section>

        {/* All Services Grid */}
        <section className="py-24 sm:py-32 bg-gray-50">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
                All Services
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Complete list of our technology solutions and services
              </p>
            </div>
            
            <div className="grid gap-8 lg:grid-cols-2 xl:grid-cols-3">
              {allServices.map((service, index) => {
                const IconComponent = service.icon;
                return (
                  <div key={index} className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow border border-gray-100">
                    <div className="flex items-start justify-between mb-4">
                      <div className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center">
                        <IconComponent className="h-5 w-5 text-white" />
                      </div>
                      <span className="text-xs font-semibold text-blue-600 bg-blue-100 px-2 py-1 rounded-full">
                        {service.category}
                      </span>
                    </div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">{service.title}</h3>
                    <p className="text-gray-600 text-sm mb-4">{service.description}</p>
                    <div className="flex items-center justify-between">
                      <div className="text-sm font-semibold text-green-600">{service.pricing}</div>
                      <div className="text-xs text-gray-500">{service.delivery}</div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="bg-gradient-to-r from-blue-600 to-purple-600 py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
              Ready to Get Started?
            </h2>
            <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
              Let's discuss how our services can help transform your business and drive growth.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
              <Link
                href="/contact"
                className="bg-white text-blue-600 px-8 py-4 rounded-lg hover:bg-gray-50 transition-colors font-semibold text-lg inline-flex items-center justify-center"
              >
                Contact Us Today
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
              <Link
                href="/pricing"
                className="border-2 border-white text-white px-8 py-4 rounded-lg hover:bg-white hover:text-blue-600 transition-colors font-semibold text-lg inline-flex items-center justify-center"
              >
                View Pricing
              </Link>
            </div>
            
            {/* Contact Info */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
              <div className="flex items-center justify-center space-x-2 text-blue-100">
                <Phone className="h-5 w-5" />
                <a href="tel:+13024640950" className="hover:text-white transition-colors">
                  +1 302 464 0950
                </a>
              </div>
              <div className="flex items-center justify-center space-x-2 text-blue-100">
                <Mail className="h-5 w-5" />
                <a href="mailto:kleber@ziontechgroup.com" className="hover:text-white transition-colors">
                  kleber@ziontechgroup.com
                </a>
              </div>
              <div className="flex items-center justify-center space-x-2 text-blue-100">
                <MapPin className="h-5 w-5" />
                <span>364 E Main St STE 1008, Middletown DE 19709</span>
              </div>
            </div>
          </div>
        </section>
      </main>
      
      <SimpleFooter />
    </>
  );
}
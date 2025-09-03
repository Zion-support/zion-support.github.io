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
  Users, 
  CheckCircle,
  Star,
  TrendingUp,
  Globe,
  Code,
  Database,
  Lock,
  Rocket,
  Mail,
  Phone,
  MapPin,
  Award,
  Clock,
  BarChart3,
  Server,
  Network,
  Target,
  MessageCircle,
  Eye,
  FileText,
  Settings,
  Bot,
  Cpu,
  Activity
} from 'lucide-react';

export default function Home() {
  const features = [
    {
      icon: Brain,
      title: 'AI-Powered Solutions',
      description: 'Cutting-edge artificial intelligence to transform your business operations and decision-making processes.',
      color: 'from-purple-500 to-pink-500',
      href: '/ai-services'
    },
    {
      icon: Cloud,
      title: 'Cloud Architecture',
      description: 'Scalable, secure, and efficient cloud solutions designed for modern enterprise needs.',
      color: 'from-blue-500 to-cyan-500',
      href: '/it-services'
    },
    {
      icon: Shield,
      title: 'Cybersecurity',
      description: 'Advanced security measures to protect your digital assets and ensure compliance.',
      color: 'from-green-500 to-emerald-500',
      href: '/cybersecurity'
    },
    {
      icon: Zap,
      title: 'DevOps Excellence',
      description: 'Streamlined development and deployment processes for faster, more reliable software delivery.',
      color: 'from-yellow-500 to-orange-500',
      href: '/it-services'
    },
    {
      icon: Database,
      title: 'Data Analytics',
      description: 'Transform raw data into actionable insights with our advanced analytics platforms.',
      color: 'from-indigo-500 to-purple-500',
      href: '/data-analytics'
    },
    {
      icon: Code,
      title: 'Micro SaaS Solutions',
      description: 'Custom software solutions and micro SaaS platforms built to meet your specific business requirements.',
      color: 'from-red-500 to-pink-500',
      href: '/micro-saas'
    }
  ];

  const stats = [
    { number: '500+', label: 'Projects Completed' },
    { number: '99.9%', label: 'Uptime Guarantee' },
    { number: '50+', label: 'Expert Team Members' },
    { number: '24/7', label: 'Support Available' }
  ];

  const testimonials = [
    {
      name: 'Sarah Johnson',
      role: 'CTO, TechCorp',
      content: 'Zion Tech Group transformed our entire technology infrastructure. Their AI solutions increased our efficiency by 300%.',
      rating: 5
    },
    {
      name: 'Michael Chen',
      role: 'CEO, InnovateLab',
      content: 'The cloud architecture they designed is incredibly scalable and secure. We can now handle 10x more traffic.',
      rating: 5
    },
    {
      name: 'Emily Rodriguez',
      role: 'VP Engineering, DataFlow',
      content: 'Their DevOps practices reduced our deployment time from hours to minutes. Outstanding work!',
      rating: 5
    }
  ];

  const newServices = [
    {
      icon: MessageCircle,
      title: 'Affiliate Marketing Tracking',
      description: 'Advanced affiliate marketing platform with fraud protection and automated payments',
      pricing: '$2,500 - $8,000/month',
      category: 'Micro SaaS',
      features: ['Fraud protection', 'Automated payments', 'Real-time analytics', 'Multi-channel tracking']
    },
    {
      icon: BarChart3,
      title: 'Website Analytics for SMBs',
      description: 'Intuitive business intelligence dashboard for small business owners',
      pricing: '$1,500 - $5,000/month',
      category: 'Micro SaaS',
      features: ['Traffic analysis', 'Conversion tracking', 'Marketing insights', 'Mobile optimization']
    },
    {
      icon: Users,
      title: 'IT Helpdesk Software',
      description: 'Custom ticketing system for Managed IT Service Providers',
      pricing: '$3,000 - $12,000/month',
      category: 'IT Services',
      features: ['Ticket routing', 'SLA tracking', 'Knowledge base', 'Client portal']
    },
    {
      icon: FileText,
      title: 'AI Content Creation Tools',
      description: 'AI-powered content generation with SEO optimization and personalization',
      pricing: '$1,500 - $5,000/month',
      category: 'AI Services',
      features: ['Automated generation', 'SEO optimization', 'Multi-format support', 'Brand consistency']
    },
    {
      icon: Settings,
      title: 'E-Commerce Return Management',
      description: 'Automated return process management for e-commerce businesses',
      pricing: '$2,000 - $6,000/month',
      category: 'Micro SaaS',
      features: ['Automated requests', 'Label generation', 'Status tracking', 'Platform integration']
    },
    {
      icon: Bot,
      title: 'AI Customer Support Chatbot',
      description: 'Intelligent conversational AI for 24/7 customer support',
      pricing: '$2,000 - $10,000/month',
      category: 'AI Services',
      features: ['Natural language processing', 'Multi-channel deployment', 'Sentiment analysis', 'Continuous learning']
    }
  ];

  return (
    <>
      <Head>
        <title>Zion Tech Group - Leading AI, Cloud & Technology Solutions</title>
        <meta name="description" content="Transform your business with our comprehensive suite of AI services, micro SaaS solutions, cloud infrastructure, and cutting-edge technology innovations. Contact us at +1 302 464 0950." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="keywords" content="AI services, micro SaaS, cloud solutions, IT services, cybersecurity, data analytics, technology consulting" />
        <link rel="canonical" href="https://ziontechgroup.com" />
      </Head>
      
      <ModernHeader />
      
      <main className="min-h-screen bg-white">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100 py-20 sm:py-32">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <div className="flex items-center justify-center mb-4">
                <Award className="h-6 w-6 text-blue-600 mr-2" />
                <span className="text-base font-semibold leading-7 text-blue-600">Leading Technology Solutions</span>
              </div>
              <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
                Transform Your Business with{' '}
                <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                  Advanced Technology
                </span>
              </h1>
              <p className="mt-6 text-lg leading-8 text-gray-600 max-w-3xl mx-auto">
                We deliver cutting-edge AI services, micro SaaS solutions, cloud infrastructure, and innovative technology platforms that drive real business results.
              </p>
              <div className="mt-10 flex items-center justify-center gap-x-6">
                <Link
                  href="/contact"
                  className="rounded-md bg-blue-600 px-6 py-3 text-sm font-semibold text-white shadow-sm hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600"
                >
                  Get Started Today
                </Link>
                <Link href="/services" className="text-sm font-semibold leading-6 text-gray-900">
                  Explore Services <span aria-hidden="true">→</span>
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="text-3xl sm:text-4xl font-bold text-blue-600 mb-2">{stat.number}</div>
                  <div className="text-gray-600 font-medium">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Core Services Section */}
        <section className="py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
                Our Core Services
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Comprehensive technology solutions designed to accelerate your digital transformation
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {features.map((feature, index) => {
                const IconComponent = feature.icon;
                return (
                  <Link key={index} href={feature.href} className="group">
                    <div className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 hover:border-blue-300 border border-gray-200">
                      <div className={`w-12 h-12 bg-gradient-to-r ${feature.color} rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
                        <IconComponent className="h-6 w-6 text-white" />
                      </div>
                      <h3 className="text-xl font-semibold text-gray-900 mb-4">{feature.title}</h3>
                      <p className="text-gray-600 leading-relaxed mb-4">{feature.description}</p>
                      <div className="flex items-center text-blue-600 font-medium">
                        Learn More <ArrowRight className="ml-1 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                      </div>
                    </div>
                  </Link>
                );
              })}
            </div>
          </div>
        </section>

        {/* New Services Section */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
                Latest Innovations
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Discover our newest micro SaaS, IT, and AI services designed for modern businesses
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {newServices.map((service, index) => {
                const IconComponent = service.icon;
                return (
                  <div key={index} className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-xl p-8 border border-blue-100 hover:shadow-lg transition-shadow">
                    <div className="flex items-center justify-between mb-4">
                      <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center">
                        <IconComponent className="h-6 w-6 text-white" />
                      </div>
                      <span className="text-xs font-semibold text-blue-600 bg-blue-100 px-2 py-1 rounded-full">
                        {service.category}
                      </span>
                    </div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-3">{service.title}</h3>
                    <p className="text-gray-600 mb-4">{service.description}</p>
                    <div className="mb-4">
                      <h4 className="text-sm font-semibold text-gray-700 mb-2">Key Features:</h4>
                      <ul className="text-sm text-gray-600 space-y-1">
                        {service.features.map((feature, idx) => (
                          <li key={idx} className="flex items-center">
                            <CheckCircle className="h-3 w-3 text-green-500 mr-2" />
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div className="text-sm font-semibold text-green-600">{service.pricing}</div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section className="py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
                What Our Clients Say
              </h2>
              <p className="text-xl text-gray-600">
                Trusted by leading companies worldwide
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {testimonials.map((testimonial, index) => (
                <div key={index} className="bg-white rounded-xl p-8 shadow-lg">
                  <div className="flex items-center mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  <p className="text-gray-600 mb-6 italic">"{testimonial.content}"</p>
                  <div>
                    <div className="font-semibold text-gray-900">{testimonial.name}</div>
                    <div className="text-gray-500 text-sm">{testimonial.role}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section className="bg-gradient-to-r from-blue-600 to-purple-600 py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
              Ready to Transform Your Business?
            </h2>
            <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
              Let's discuss how our AI, cloud, and development services can accelerate your digital transformation.
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
'use client';

import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { 
  Code, 
  ArrowRight, 
  CheckCircle, 
  Users, 
  BarChart3, 
  MessageSquare, 
  Calendar, 
  FileText, 
  Mail, 
  Smartphone, 
  Phone 
} from 'lucide-react';

export default function MicroSaasServicesPage() {
  const services = [
    {
      icon: <Users className="w-8 h-8 text-blue-500" />,
      title: 'AI-Powered CRM',
      description: 'Intelligent customer relationship management with AI insights and automation.',
      features: ['Lead scoring', 'Automated follow-ups', 'Sales forecasting', 'Integration APIs'],
      pricing: '$99/month',
      link: '/ai-crm'
    },
    {
      icon: <BarChart3 className="w-8 h-8 text-green-500" />,
      title: 'Smart Analytics Platform',
      description: 'Business intelligence with AI-powered insights and reporting.',
      features: ['Custom dashboards', 'Predictive analytics', 'Data visualization', 'Export capabilities'],
      pricing: '$149/month',
      link: '/smart-analytics'
    },
    {
      icon: <Code className="w-8 h-8 text-purple-500" />,
      title: 'Automated Testing Suite',
      description: 'AI-driven automated testing for web and mobile applications.',
      features: ['Cross-browser testing', 'Performance testing', 'API testing', 'Test reporting'],
      pricing: '$199/month',
      link: '/ai-automated-testing'
    },
    {
      icon: <FileText className="w-8 h-8 text-orange-500" />,
      title: 'Content Management System',
      description: 'AI-enhanced CMS with intelligent content optimization.',
      features: ['SEO optimization', 'Content scheduling', 'Multi-language support', 'Analytics integration'],
      pricing: '$79/month',
      link: '/ai-content-management'
    },
    {
      icon: <Mail className="w-8 h-8 text-cyan-500" />,
      title: 'Email Marketing Automation',
      description: 'Intelligent email campaigns with personalization and analytics.',
      features: ['A/B testing', 'Behavioral triggers', 'Deliverability optimization', 'ROI tracking'],
      pricing: '$129/month',
      link: '/ai-email-marketing'
    },
    {
      icon: <MessageSquare className="w-8 h-8 text-red-500" />,
      title: 'Social Media Manager',
      description: 'AI-powered social media management and content scheduling.',
      features: ['Multi-platform posting', 'Content suggestions', 'Engagement analytics', 'Hashtag optimization'],
      pricing: '$89/month',
      link: '/ai-social-media-manager'
    }
  ];

  const stats = [
    { number: '100+', label: 'Micro SAAS Deployed' },
    { number: '99.9%', label: 'Uptime Guarantee' },
    { number: '24/7', label: 'Support Available' },
    { number: '500+', label: 'Active Users' }
  ];

  return (
    <>
      <Helmet>
        <title>Micro SAAS Services - Zion Tech Group | Scalable Software Solutions</title>
        <meta name="description" content="Powerful micro SAAS platforms designed to streamline your business processes. AI-powered CRM, analytics, testing, and more." />
        <meta name="keywords" content="micro SAAS, software as a service, business automation, AI CRM, analytics platform, testing suite" />
        <meta name="robots" content="index, follow" />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        {/* Hero Section */}
        <section className="relative py-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-green-600/20 via-emerald-600/20 to-cyan-600/20 animate-pulse"></div>
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(34,197,94,0.3),transparent_50%)]"></div>
          
          <div className="relative max-w-7xl mx-auto">
            <div className="text-center">
              <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
                <span className="bg-gradient-to-r from-green-400 via-emerald-400 to-cyan-400 bg-clip-text text-transparent animate-pulse">
                  Micro SAAS Solutions
                </span>
              </h1>
              <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto leading-relaxed">
                Powerful, scalable micro SAAS platforms designed to streamline your business processes.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  to="/contact"
                  className="bg-gradient-to-r from-green-600 to-emerald-600 text-white px-8 py-4 rounded-xl font-semibold hover:from-green-700 hover:to-emerald-700 transition-all duration-300 flex items-center justify-center group"
                >
                  Get Started Today
                  <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </Link>
                <Link
                  to="/about"
                  className="border-2 border-white/30 text-white px-8 py-4 rounded-xl font-semibold hover:bg-white/10 hover:border-white/50 transition-all duration-300"
                >
                  Learn More
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white/5 backdrop-blur-sm">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="flex items-center justify-center w-16 h-16 bg-gradient-to-r from-green-500 to-emerald-600 rounded-full mx-auto mb-4">
                    <Code className="h-8 w-8 text-white" />
                  </div>
                  <div className="text-3xl md:text-4xl font-bold text-white mb-2">{stat.number}</div>
                  <div className="text-gray-300">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                <span className="bg-gradient-to-r from-green-400 to-emerald-400 bg-clip-text text-transparent">
                  Our Micro SAAS Solutions
                </span>
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Scalable software solutions designed to automate and optimize your business operations.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {services.map((service, index) => (
                <div key={index} className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20 hover:bg-white/20 transition-all duration-300 group">
                  <div className="flex items-center justify-center w-16 h-16 bg-gradient-to-r from-green-500 to-emerald-600 rounded-xl mb-6 group-hover:scale-110 transition-transform">
                    {service.icon}
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-4">{service.title}</h3>
                  <p className="text-gray-300 mb-6">{service.description}</p>
                  <div className="text-3xl font-bold text-green-400 mb-4">{service.pricing}</div>
                  <ul className="space-y-2 mb-6">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-gray-300">
                        <CheckCircle className="h-4 w-4 text-green-400 mr-2 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <Link
                    to={service.link}
                    className="w-full bg-gradient-to-r from-green-600 to-emerald-600 text-white py-3 rounded-lg font-semibold hover:from-green-700 hover:to-emerald-700 transition-all duration-300 flex items-center justify-center group"
                  >
                    Learn More
                    <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="bg-white/10 backdrop-blur-sm rounded-3xl p-12 border border-white/20 text-center">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Ready to Automate Your Business?
              </h2>
              <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
                Let's discuss how our micro SAAS solutions can streamline your operations and drive growth.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  to="/contact"
                  className="bg-gradient-to-r from-green-600 to-emerald-600 text-white px-8 py-4 rounded-xl font-semibold hover:from-green-700 hover:to-emerald-700 transition-all duration-300"
                >
                  Get Free Consultation
                </Link>
                <a
                  href="tel:+13024640950"
                  className="border-2 border-white/30 text-white px-8 py-4 rounded-xl font-semibold hover:bg-white/10 hover:border-white/50 transition-all duration-300 flex items-center justify-center"
                >
                  <Phone className="mr-2 h-5 w-5" />
                  Call Now
                </a>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}

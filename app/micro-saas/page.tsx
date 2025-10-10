'use client';
import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle, Star, Zap, Shield, Users, TrendingUp, Clock, Award } from 'lucide-react';

interface MicroSaasService {
  id: string;
  name: string;
  description: string;
  features: string[];
  pricing: string;
  popular: boolean;
  icon: React.ComponentType<any>;
}

const MicroSaasPage: React.FC = () => {
  const services: MicroSaasService[] = [
    {
      id: 'ai-content-writer',
      name: 'AI Content Writer',
      description: 'Generate high-quality content for blogs, social media, and marketing materials using advanced AI.',
      features: [
        'Multiple content types',
        'SEO optimization',
        'Brand voice customization',
        'Plagiarism detection',
        'Content scheduling'
      ],
      pricing: '$29/month',
      popular: true,
      icon: Star
    },
    {
      id: 'analytics-dashboard',
      name: 'Analytics Dashboard',
      description: 'Comprehensive analytics and reporting dashboard for tracking business metrics and KPIs.',
      features: [
        'Real-time data visualization',
        'Custom reports',
        'Data export',
        'Automated alerts',
        'Multi-platform integration'
      ],
      pricing: '$49/month',
      popular: false,
      icon: TrendingUp
    },
    {
      id: 'appointment-scheduler',
      name: 'Appointment Scheduler',
      description: 'Smart scheduling system with automated reminders and calendar integration.',
      features: [
        'Calendar sync',
        'Automated reminders',
        'Time zone handling',
        'Custom booking forms',
        'Payment integration'
      ],
      pricing: '$19/month',
      popular: false,
      icon: Clock
    },
    {
      id: 'expense-tracker',
      name: 'Expense Tracker',
      description: 'AI-powered expense tracking and categorization for better financial management.',
      features: [
        'Receipt scanning',
        'Automatic categorization',
        'Expense reports',
        'Budget tracking',
        'Tax preparation'
      ],
      pricing: '$15/month',
      popular: false,
      icon: Shield
    },
    {
      id: 'lead-scoring',
      name: 'Lead Scoring',
      description: 'Intelligent lead scoring system to identify and prioritize high-value prospects.',
      features: [
        'Behavioral tracking',
        'Scoring algorithms',
        'CRM integration',
        'Lead nurturing',
        'Performance analytics'
      ],
      pricing: '$39/month',
      popular: false,
      icon: Users
    },
    {
      id: 'seo-optimizer',
      name: 'SEO Optimizer',
      description: 'Comprehensive SEO analysis and optimization tools for better search rankings.',
      features: [
        'Keyword research',
        'Site audit',
        'Content optimization',
        'Rank tracking',
        'Competitor analysis'
      ],
      pricing: '$59/month',
      popular: false,
      icon: Zap
    }
  ];

  const benefits = [
    {
      icon: Zap,
      title: 'Quick Setup',
      description: 'Get started in minutes with our easy-to-use interface and pre-built templates.'
    },
    {
      icon: Shield,
      title: 'Secure & Reliable',
      description: 'Enterprise-grade security with 99.9% uptime guarantee and data encryption.'
    },
    {
      icon: Users,
      title: 'Scalable Solutions',
      description: 'Grow with your business with flexible pricing and feature scaling options.'
    },
    {
      icon: Award,
      title: 'Expert Support',
      description: '24/7 customer support from our team of technical experts and specialists.'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Helmet>
        <title>Micro SaaS Solutions - Zion Tech Group | AI-Powered Business Tools</title>
        <meta name="description" content="Discover our collection of micro SaaS solutions designed to streamline your business operations with AI-powered tools and automation." />
        <meta name="keywords" content="micro SaaS, business tools, AI automation, productivity software, business solutions" />
      </Helmet>

      {/* Hero Section */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Micro SaaS
            <span className="block bg-gradient-to-r from-purple-400 via-blue-400 to-cyan-400 bg-clip-text text-transparent">
              Solutions
            </span>
          </h1>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Powerful, focused tools designed to solve specific business challenges with AI-powered automation and intelligence.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-gradient-to-r from-purple-500 to-blue-500 hover:from-purple-600 hover:to-blue-600 text-white font-bold py-4 px-8 rounded-lg transition-all duration-300 transform hover:scale-105">
              Explore Solutions
            </button>
            <button className="border border-purple-400 text-purple-400 hover:bg-purple-400 hover:text-white font-bold py-4 px-8 rounded-lg transition-all duration-300">
              View Pricing
            </button>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Our Micro SaaS Solutions
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Choose from our collection of specialized tools designed to enhance your business productivity and efficiency.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service) => (
              <div
                key={service.id}
                className={`bg-white/5 backdrop-blur-sm rounded-2xl p-8 hover:bg-white/10 transition-all duration-300 group ${
                  service.popular ? 'ring-2 ring-purple-500' : ''
                }`}
              >
                {service.popular && (
                  <div className="bg-purple-600 text-white text-xs font-bold px-3 py-1 rounded-full inline-block mb-4">
                    Most Popular
                  </div>
                )}

                <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-blue-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <service.icon className="w-8 h-8 text-white" />
                </div>

                <h3 className="text-xl font-bold text-white mb-4 group-hover:text-purple-400 transition-colors">
                  {service.name}
                </h3>
                
                <p className="text-gray-300 mb-6">{service.description}</p>

                <ul className="space-y-2 mb-6">
                  {service.features.map((feature, index) => (
                    <li key={index} className="flex items-center gap-2 text-sm text-gray-300">
                      <CheckCircle className="w-4 h-4 text-green-400 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>

                <div className="flex items-center justify-between mb-6">
                  <div className="text-3xl font-bold text-white">{service.pricing}</div>
                  <span className="text-sm text-gray-400">per month</span>
                </div>

                <Link
                  to={`/micro-saas/${service.id}`}
                  className="w-full bg-gradient-to-r from-purple-500 to-blue-500 hover:from-purple-600 hover:to-blue-600 text-white font-bold py-3 px-6 rounded-lg transition-all duration-300 flex items-center justify-center gap-2 group"
                >
                  Learn More
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Why Choose Our Micro SaaS Solutions?
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Built with modern technology and designed for maximum efficiency and user experience.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <benefit.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-4">{benefit.title}</h3>
                <p className="text-gray-300">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <div className="bg-white/5 backdrop-blur-sm rounded-3xl p-12">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Ready to Boost Your Productivity?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Start using our micro SaaS solutions today and experience the power of AI-driven business automation.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gradient-to-r from-purple-500 to-blue-600 hover:from-purple-600 hover:to-blue-700 text-white font-bold py-4 px-8 rounded-lg transition-all duration-300 transform hover:scale-105">
                Get Started Free
              </button>
              <button className="border border-purple-400 text-purple-400 hover:bg-purple-400 hover:text-white font-bold py-4 px-8 rounded-lg transition-all duration-300">
                Schedule Demo
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default MicroSaasPage;
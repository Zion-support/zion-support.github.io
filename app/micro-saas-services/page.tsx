import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { Smartphone, Brain, BarChart, Mail, CheckCircle, ArrowRight, Zap } from 'lucide-react';

export default function MicroSAASServicesPage() {
  const services = [
    {
      icon: <Brain className="w-8 h-8 text-blue-500" />,
      title: 'AI Content Writer',
      description: 'Generate high-quality content for blogs, social media, and marketing materials using advanced AI.',
      features: ['Multiple content types', 'SEO optimization', 'Brand voice training', 'Bulk generation'],
      pricing: '$29/month',
      link: '/micro-saas/ai-content-writer',
      popular: true
    },
    {
      icon: <BarChart className="w-8 h-8 text-green-500" />,
      title: 'Analytics Dashboard',
      description: 'Comprehensive analytics and reporting dashboard for your business metrics and KPIs.',
      features: ['Real-time data', 'Custom reports', 'Data visualization', 'Export capabilities'],
      pricing: '$49/month',
      link: '/micro-saas/analytics-dashboard',
      popular: false
    },
    {
      icon: <Mail className="w-8 h-8 text-purple-500" />,
      title: 'Email Marketing',
      description: 'Automated email marketing campaigns with AI-powered personalization and optimization.',
      features: ['Email automation', 'A/B testing', 'Personalization', 'Analytics'],
      pricing: '$39/month',
      link: '/micro-saas/email-marketing',
      popular: false
    },
    {
      icon: <Zap className="w-8 h-8 text-orange-500" />,
      title: 'Task Manager Pro',
      description: 'AI-powered task management with smart prioritization and productivity insights.',
      features: ['Smart scheduling', 'Priority management', 'Team collaboration', 'Progress tracking'],
      pricing: '$19/month',
      link: '/micro-saas/task-manager-pro',
      popular: true
    },
    {
      icon: <Smartphone className="w-8 h-8 text-cyan-500" />,
      title: 'Expense Tracker',
      description: 'Automated expense tracking with receipt scanning and financial insights.',
      features: ['Receipt scanning', 'Categorization', 'Budget tracking', 'Tax preparation'],
      pricing: '$24/month',
      link: '/micro-saas/expense-tracker',
      popular: false
    },
    {
      icon: <Brain className="w-8 h-8 text-pink-500" />,
      title: 'Lead Scoring',
      description: 'AI-powered lead scoring and qualification to improve your sales conversion rates.',
      features: ['Lead scoring', 'Behavior tracking', 'CRM integration', 'Automated follow-up'],
      pricing: '$59/month',
      link: '/micro-saas/lead-scoring',
      popular: false
    }
  ];

  const stats = [
    { number: '50+', label: 'Micro SaaS Tools' },
    { number: '10K+', label: 'Active Users' },
    { number: '99.9%', label: 'Uptime' },
    { number: '24/7', label: 'Support' }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-green-900 to-slate-900">
      <Helmet>
        <title>Micro SaaS Services - Zion Tech Group</title>
        <meta name="description" content="Powerful micro SaaS tools for modern professionals. AI-powered solutions for content creation, analytics, email marketing, and productivity." />
        <meta name="keywords" content="micro SaaS, SaaS tools, productivity tools, AI tools, business automation" />
      </Helmet>

      {/* Hero Section */}
      <section className="pt-20 px-4 py-16">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Powerful Micro <span className="bg-gradient-to-r from-green-400 to-emerald-400 bg-clip-text text-transparent">SaaS Tools</span>
          </h1>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Discover our collection of AI-powered micro SaaS tools designed to boost productivity, streamline workflows, and accelerate your business growth.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              to="/contact" 
              className="bg-gradient-to-r from-green-600 to-emerald-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-green-700 hover:to-emerald-700 transition-all duration-300"
            >
              Get Started
            </Link>
            <Link 
              to="/about" 
              className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white/10 transition-colors"
            >
              Learn More
            </Link>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-white mb-2">{stat.number}</div>
                <div className="text-gray-300">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Our Micro SaaS Tools</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Affordable, powerful tools designed to solve specific business challenges and boost productivity.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div key={index} className={`bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20 hover:bg-white/15 transition-all duration-300 relative ${service.popular ? 'ring-2 ring-green-400' : ''}`}>
                {service.popular && (
                  <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                    <span className="bg-gradient-to-r from-green-500 to-emerald-500 text-white px-4 py-1 rounded-full text-sm font-semibold">
                      Popular
                    </span>
                  </div>
                )}
                
                <div className="mb-6">
                  {service.icon}
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">{service.title}</h3>
                <p className="text-gray-300 mb-6">{service.description}</p>
                
                <ul className="space-y-2 mb-6">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-gray-300">
                      <CheckCircle className="w-4 h-4 text-green-400 mr-3 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>

                <div className="space-y-4">
                  <div className="text-center">
                    <span className="text-3xl font-bold text-white">{service.pricing}</span>
                  </div>
                  <Link 
                    to={service.link} 
                    className="w-full bg-gradient-to-r from-green-600 to-emerald-600 text-white py-3 px-6 rounded-lg font-semibold hover:from-green-700 hover:to-emerald-700 transition-all duration-300 flex items-center justify-center"
                  >
                    Try Now
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <div className="bg-gradient-to-r from-green-600 to-emerald-600 rounded-2xl p-8">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Ready to Boost Your Productivity?
            </h2>
            <p className="text-xl text-white/90 mb-8">
              Start using our micro SaaS tools today and experience the power of AI-driven productivity solutions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                to="/contact" 
                className="bg-white text-green-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
              >
                Get Free Trial
              </Link>
              <Link 
                to="/ai-services" 
                className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white/10 transition-colors"
              >
                View AI Services
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
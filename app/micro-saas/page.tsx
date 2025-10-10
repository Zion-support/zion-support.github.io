'use client';
import React from 'react';
import { Link } from 'react-router-dom';
import { Cpu, FileText, Mail, TrendingUp, Target, Calendar, Users, BarChart, ArrowRight, CheckCircle, Star, Clock, Zap, DollarSign, Globe, Sparkles } from 'lucide-react';

const MicroSaasPage: React.FC = () => {
  const microSaasServices = [
    {
      icon: FileText,
      title: 'AI Content Writer Pro',
      description: 'Automated content creation with AI-powered writing assistance for blogs, articles, and marketing copy.',
      features: ['Blog Post Generation', 'SEO Optimization', 'Multi-language Support', 'Content Templates'],
      pricing: '$29/month',
      href: '/ai-content-writer',
      benefits: ['10x faster content creation', 'SEO optimized', 'Consistent quality', 'Time savings']
    },
    {
      icon: Mail,
      title: 'AI Email Assistant',
      description: 'Smart email management with automated responses, scheduling, and intelligent categorization.',
      features: ['Smart Responses', 'Email Scheduling', 'Priority Sorting', 'Template Library'],
      pricing: '$19/month',
      href: '/ai-email-assistant',
      benefits: ['50% time savings', 'Better organization', 'Faster responses', 'Professional templates']
    },
    {
      icon: TrendingUp,
      title: 'AI Expense Tracker',
      description: 'Intelligent expense tracking with automated categorization and financial insights.',
      features: ['Receipt Scanning', 'Auto-categorization', 'Budget Tracking', 'Financial Reports'],
      pricing: '$15/month',
      href: '/ai-expense-tracker',
      benefits: ['Automated tracking', 'Better budgeting', 'Tax preparation', 'Financial insights']
    },
    {
      icon: FileText,
      title: 'AI Invoice Generator',
      description: 'Automated invoice creation with smart templates and payment tracking.',
      features: ['Auto Invoice Generation', 'Payment Tracking', 'Custom Templates', 'Tax Calculations'],
      pricing: '$25/month',
      href: '/ai-invoice-generator',
      benefits: ['Faster invoicing', 'Reduced errors', 'Better cash flow', 'Professional appearance']
    },
    {
      icon: Target,
      title: 'AI Lead Generation',
      description: 'Automated lead identification and qualification with AI-powered prospecting.',
      features: ['Lead Scoring', 'Contact Discovery', 'Email Sequences', 'CRM Integration'],
      pricing: '$39/month',
      href: '/ai-lead-generation',
      benefits: ['3x more leads', 'Higher quality prospects', 'Automated outreach', 'Better conversion']
    },
    {
      icon: Calendar,
      title: 'AI Project Manager',
      description: 'Intelligent project management with automated scheduling and resource optimization.',
      features: ['Task Automation', 'Resource Planning', 'Progress Tracking', 'Team Collaboration'],
      pricing: '$35/month',
      href: '/ai-project-manager',
      benefits: ['Better planning', 'Improved efficiency', 'Team coordination', 'Deadline management']
    },
    {
      icon: Users,
      title: 'AI CRM Assistant',
      description: 'Customer relationship management with AI-powered insights and automation.',
      features: ['Contact Management', 'Sales Pipeline', 'Automated Follow-ups', 'Performance Analytics'],
      pricing: '$45/month',
      href: '/ai-crm-assistant',
      benefits: ['Better relationships', 'Sales growth', 'Automated workflows', 'Data insights']
    },
    {
      icon: BarChart,
      title: 'AI Inventory Manager',
      description: 'Smart inventory management with predictive analytics and automated reordering.',
      features: ['Stock Monitoring', 'Demand Forecasting', 'Auto Reordering', 'Analytics Dashboard'],
      pricing: '$32/month',
      href: '/ai-inventory-manager',
      benefits: ['Reduced stockouts', 'Lower costs', 'Better forecasting', 'Automated management']
    }
  ];

  const features = [
    { name: 'Easy Setup', icon: Zap, description: 'Get started in minutes with our simple onboarding' },
    { name: '24/7 Support', icon: Clock, description: 'Round-the-clock customer support and assistance' },
    { name: 'Scalable', icon: Globe, description: 'Grows with your business needs and requirements' },
    { name: 'Secure', icon: CheckCircle, description: 'Enterprise-grade security and data protection' },
    { name: 'Integrations', icon: ArrowRight, description: 'Seamless integration with your existing tools' },
    { name: 'Analytics', icon: BarChart, description: 'Detailed insights and performance metrics' }
  ];

  const stats = [
    { number: '10,000+', label: 'Active Users' },
    { number: '99.9%', label: 'Uptime Guarantee' },
    { number: '50+', label: 'Micro SaaS Solutions' },
    { number: '24/7', label: 'Support Available' }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      {/* Hero Section */}
      <section className="pt-20 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-purple-500/10 border border-purple-500/20 text-purple-400 text-sm font-medium mb-6">
              <Cpu className="w-4 h-4 mr-2" />
              Micro SaaS Solutions
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              <span className="bg-gradient-to-r from-purple-400 via-pink-500 to-cyan-600 bg-clip-text text-transparent">
                Micro SaaS
              </span>
              <br />
              <span className="text-3xl md:text-5xl">That Solve Real Problems</span>
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-4xl mx-auto">
              Specialized software-as-a-service solutions designed for specific business needs. 
              Affordable, powerful, and easy-to-use tools that deliver immediate value.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="bg-gradient-to-r from-purple-500 to-pink-600 hover:from-purple-600 hover:to-pink-700 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 transform hover:scale-105 inline-flex items-center space-x-2"
              >
                <span>Start Free Trial</span>
                <ArrowRight className="w-5 h-5" />
              </Link>
              <a
                href="tel:+13024640950"
                className="border-2 border-purple-400 text-purple-400 hover:bg-purple-400 hover:text-slate-900 px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 inline-flex items-center space-x-2"
              >
                <span>Call (302) 464-0950</span>
              </a>
            </div>
          </div>

          {/* Stats Section */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-purple-400 mb-2">{stat.number}</div>
                <div className="text-sm text-gray-300">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Micro SaaS Services Grid */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Our Micro SaaS Portfolio
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Affordable, specialized solutions that address specific business challenges and boost productivity.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {microSaasServices.map((service, index) => (
              <div
                key={service.title}
                className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 hover:bg-white/10 transition-all duration-300 group border border-white/10"
              >
                <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <service.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">{service.title}</h3>
                <p className="text-gray-300 mb-6 leading-relaxed">{service.description}</p>
                
                <div className="space-y-3 mb-6">
                  <h4 className="text-lg font-semibold text-purple-400">Key Features:</h4>
                  <ul className="space-y-2">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center space-x-2">
                        <CheckCircle className="w-4 h-4 text-green-400 flex-shrink-0" />
                        <span className="text-sm text-gray-300">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="space-y-3 mb-6">
                  <h4 className="text-lg font-semibold text-purple-400">Benefits:</h4>
                  <ul className="space-y-2">
                    {service.benefits.map((benefit, benefitIndex) => (
                      <li key={benefitIndex} className="flex items-center space-x-2">
                        <Star className="w-4 h-4 text-yellow-400 flex-shrink-0" />
                        <span className="text-sm text-gray-300">{benefit}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mb-6">
                  <div className="text-2xl font-bold text-purple-400 mb-2">{service.pricing}</div>
                  <div className="text-sm text-gray-400">per month • 14-day free trial</div>
                </div>

                <Link
                  to={service.href}
                  className="w-full bg-gradient-to-r from-purple-500 to-pink-600 hover:from-purple-600 hover:to-pink-700 text-white py-3 px-6 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 inline-flex items-center justify-center space-x-2"
                >
                  <span>Try Free</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-slate-800/50 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Why Choose Our Micro SaaS Solutions?
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Our micro SaaS solutions are designed with simplicity, power, and affordability in mind.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div
                key={feature.name}
                className="bg-white/5 backdrop-blur-sm rounded-xl p-6 hover:bg-white/10 transition-all duration-300 group text-center"
              >
                <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                  <feature.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-2">{feature.name}</h3>
                <p className="text-gray-300 text-sm">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Tiers */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Simple, Transparent Pricing
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Choose the plan that fits your needs. All plans include 14-day free trial and 24/7 support.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
              <h3 className="text-2xl font-bold text-white mb-4">Starter</h3>
              <div className="text-4xl font-bold text-purple-400 mb-2">$15</div>
              <div className="text-gray-400 mb-6">per month</div>
              <ul className="space-y-3 mb-8">
                <li className="flex items-center space-x-2">
                  <CheckCircle className="w-4 h-4 text-green-400" />
                  <span className="text-gray-300">1 Micro SaaS Tool</span>
                </li>
                <li className="flex items-center space-x-2">
                  <CheckCircle className="w-4 h-4 text-green-400" />
                  <span className="text-gray-300">Basic Support</span>
                </li>
                <li className="flex items-center space-x-2">
                  <CheckCircle className="w-4 h-4 text-green-400" />
                  <span className="text-gray-300">Standard Features</span>
                </li>
              </ul>
              <Link
                to="/contact"
                className="w-full bg-gradient-to-r from-purple-500 to-pink-600 text-white py-3 px-6 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 inline-flex items-center justify-center"
              >
                Start Free Trial
              </Link>
            </div>

            <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border-2 border-purple-500 relative">
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                <span className="bg-purple-500 text-white px-4 py-1 rounded-full text-sm font-medium">Most Popular</span>
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">Professional</h3>
              <div className="text-4xl font-bold text-purple-400 mb-2">$39</div>
              <div className="text-gray-400 mb-6">per month</div>
              <ul className="space-y-3 mb-8">
                <li className="flex items-center space-x-2">
                  <CheckCircle className="w-4 h-4 text-green-400" />
                  <span className="text-gray-300">3 Micro SaaS Tools</span>
                </li>
                <li className="flex items-center space-x-2">
                  <CheckCircle className="w-4 h-4 text-green-400" />
                  <span className="text-gray-300">Priority Support</span>
                </li>
                <li className="flex items-center space-x-2">
                  <CheckCircle className="w-4 h-4 text-green-400" />
                  <span className="text-gray-300">Advanced Features</span>
                </li>
                <li className="flex items-center space-x-2">
                  <CheckCircle className="w-4 h-4 text-green-400" />
                  <span className="text-gray-300">API Access</span>
                </li>
              </ul>
              <Link
                to="/contact"
                className="w-full bg-gradient-to-r from-purple-500 to-pink-600 text-white py-3 px-6 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 inline-flex items-center justify-center"
              >
                Start Free Trial
              </Link>
            </div>

            <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
              <h3 className="text-2xl font-bold text-white mb-4">Enterprise</h3>
              <div className="text-4xl font-bold text-purple-400 mb-2">$99</div>
              <div className="text-gray-400 mb-6">per month</div>
              <ul className="space-y-3 mb-8">
                <li className="flex items-center space-x-2">
                  <CheckCircle className="w-4 h-4 text-green-400" />
                  <span className="text-gray-300">Unlimited Tools</span>
                </li>
                <li className="flex items-center space-x-2">
                  <CheckCircle className="w-4 h-4 text-green-400" />
                  <span className="text-gray-300">24/7 Premium Support</span>
                </li>
                <li className="flex items-center space-x-2">
                  <CheckCircle className="w-4 h-4 text-green-400" />
                  <span className="text-gray-300">All Features</span>
                </li>
                <li className="flex items-center space-x-2">
                  <CheckCircle className="w-4 h-4 text-green-400" />
                  <span className="text-gray-300">Custom Integrations</span>
                </li>
              </ul>
              <Link
                to="/contact"
                className="w-full bg-gradient-to-r from-purple-500 to-pink-600 text-white py-3 px-6 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 inline-flex items-center justify-center"
              >
                Start Free Trial
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-purple-600 to-pink-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Boost Your Productivity?
          </h2>
          <p className="text-xl text-purple-100 mb-8 max-w-3xl mx-auto">
            Start your free trial today and experience the power of our micro SaaS solutions. 
            No credit card required, cancel anytime.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link
              to="/contact"
              className="bg-white text-purple-600 hover:bg-gray-100 px-8 py-4 rounded-lg font-semibold text-lg transition-colors inline-flex items-center space-x-2 group"
            >
              <span>Start Free Trial</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
            <a
              href="tel:+13024640950"
              className="border-2 border-white text-white hover:bg-white hover:text-purple-600 px-8 py-4 rounded-lg font-semibold text-lg transition-colors inline-flex items-center space-x-2"
            >
              <span>(302) 464-0950</span>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default MicroSaasPage;
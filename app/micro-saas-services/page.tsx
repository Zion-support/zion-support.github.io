import React from 'react';
import { CheckCircle, ArrowRight, Zap, Shield, Globe, Database, Code, Smartphone, DollarSign, Star, Clock, TrendingUp, Users, BarChart3, Settings, Headphones } from 'lucide-react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';

export default function MicroSAASServicesPage() {
  const microSaasServices = [
    {
      icon: <Zap className="w-8 h-8 text-blue-500" />,
      title: 'AI Task Manager Pro',
      description: 'Intelligent task management with AI-powered prioritization and automation',
      features: ['Smart task prioritization', 'AI-powered scheduling', 'Team collaboration', 'Progress analytics', 'Mobile app'],
      pricing: '$19/month',
      link: '/ai-task-manager',
      popular: true,
      category: 'Productivity'
    },
    {
      icon: <Database className="w-8 h-8 text-green-500" />,
      title: 'Expense Tracker AI',
      description: 'Automated expense tracking with receipt scanning and categorization',
      features: ['Receipt scanning', 'Auto-categorization', 'Budget alerts', 'Tax reporting', 'Multi-currency'],
      pricing: '$15/month',
      link: '/ai-expense-tracker',
      popular: true,
      category: 'Finance'
    },
    {
      icon: <Shield className="w-8 h-8 text-red-500" />,
      title: 'Password Manager Plus',
      description: 'Secure password management with AI-powered security recommendations',
      features: ['Secure vault', 'Password generator', 'Breach monitoring', '2FA integration', 'Family sharing'],
      pricing: '$12/month',
      link: '/ai-password-manager',
      popular: false,
      category: 'Security'
    },
    {
      icon: <Code className="w-8 h-8 text-purple-500" />,
      title: 'Code Review Assistant',
      description: 'AI-powered code review and quality analysis for developers',
      features: ['Automated reviews', 'Security scanning', 'Performance analysis', 'Best practices', 'Git integration'],
      pricing: '$29/month',
      link: '/ai-code-review',
      popular: true,
      category: 'Development'
    },
    {
      icon: <BarChart3 className="w-8 h-8 text-orange-500" />,
      title: 'Analytics Dashboard Pro',
      description: 'Real-time business analytics with AI-powered insights and predictions',
      features: ['Real-time data', 'AI insights', 'Custom dashboards', 'Automated reports', 'API integration'],
      pricing: '$39/month',
      link: '/ai-analytics-dashboard',
      popular: false,
      category: 'Analytics'
    },
    {
      icon: <Smartphone className="w-8 h-8 text-indigo-500" />,
      title: 'Social Media Scheduler',
      description: 'AI-powered social media management with optimal posting times',
      features: ['Auto-scheduling', 'Content suggestions', 'Performance tracking', 'Multi-platform', 'Analytics'],
      pricing: '$25/month',
      link: '/social-media-scheduler',
      popular: true,
      category: 'Marketing'
    },
    {
      icon: <Users className="w-8 h-8 text-pink-500" />,
      title: 'Customer Support Bot',
      description: 'Intelligent chatbot for 24/7 customer support and lead generation',
      features: ['Natural language', 'Multi-language', 'Lead capture', 'Integration APIs', 'Analytics'],
      pricing: '$35/month',
      link: '/ai-customer-support-bot',
      popular: false,
      category: 'Support'
    },
    {
      icon: <Settings className="w-8 h-8 text-cyan-500" />,
      title: 'Workflow Automation',
      description: 'No-code automation platform for business processes and integrations',
      features: ['Drag & drop builder', '500+ integrations', 'Conditional logic', 'Team collaboration', 'Monitoring'],
      pricing: '$45/month',
      link: '/workflow-automation',
      popular: true,
      category: 'Automation'
    },
    {
      icon: <Headphones className="w-8 h-8 text-yellow-500" />,
      title: 'Voice Assistant API',
      description: 'Voice-enabled AI assistant for applications and websites',
      features: ['Voice recognition', 'Text-to-speech', 'Custom commands', 'Multi-language', 'SDK included'],
      pricing: '$49/month',
      link: '/voice-assistant-api',
      popular: false,
      category: 'Voice AI'
    }
  ];

  const categories = [
    'All', 'Productivity', 'Finance', 'Security', 'Development', 'Analytics', 'Marketing', 'Support', 'Automation', 'Voice AI'
  ];

  const benefits = [
    {
      title: 'Quick Setup',
      description: 'Get started in minutes with our intuitive onboarding process',
      icon: <Zap className="w-6 h-6 text-green-500" />
    },
    {
      title: 'Affordable Pricing',
      description: 'Start from just $12/month with no hidden fees or long-term contracts',
      icon: <DollarSign className="w-6 h-6 text-blue-500" />
    },
    {
      title: '24/7 Support',
      description: 'Round-the-clock support to help you succeed with our tools',
      icon: <Clock className="w-6 h-6 text-purple-500" />
    },
    {
      title: 'Scalable Solutions',
      description: 'Grow with your business - upgrade or downgrade anytime',
      icon: <TrendingUp className="w-6 h-6 text-orange-500" />
    }
  ];

  const testimonials = [
    {
      name: 'Sarah Johnson',
      company: 'StartupXYZ',
      content: 'The AI Task Manager transformed how we manage projects. We\'ve increased productivity by 40%.',
      rating: 5,
      service: 'AI Task Manager Pro'
    },
    {
      name: 'Mike Chen',
      company: 'TechFlow Inc.',
      content: 'Expense Tracker AI saves us hours every week. The receipt scanning is incredibly accurate.',
      rating: 5,
      service: 'Expense Tracker AI'
    },
    {
      name: 'Emily Rodriguez',
      company: 'Digital Agency',
      content: 'The Social Media Scheduler has revolutionized our content strategy. Highly recommended!',
      rating: 5,
      service: 'Social Media Scheduler'
    }
  ];

  const pricingComparison = [
    {
      plan: 'Starter',
      price: '$12',
      period: '/month',
      description: 'Perfect for individuals and small teams',
      features: ['1 user', 'Basic features', 'Email support', '5GB storage'],
      popular: false
    },
    {
      plan: 'Professional',
      price: '$29',
      period: '/month',
      description: 'Ideal for growing businesses',
      features: ['5 users', 'Advanced features', 'Priority support', '50GB storage', 'API access'],
      popular: true
    },
    {
      plan: 'Enterprise',
      price: '$99',
      period: '/month',
      description: 'Complete solution for large organizations',
      features: ['Unlimited users', 'All features', '24/7 support', 'Unlimited storage', 'Custom integrations'],
      popular: false
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Helmet>
        <title>Micro SAAS Services - Zion Tech Group</title>
        <meta name="description" content="Discover our collection of powerful micro SAAS tools designed to streamline your business operations. From AI task management to expense tracking, we have the perfect solution for your needs." />
        <meta name="keywords" content="micro saas, saas tools, business software, productivity tools, AI tools, automation" />
      </Helmet>

      {/* Hero Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6">
            Micro SAAS Services
          </h1>
          <p className="text-lg sm:text-xl text-gray-300 max-w-3xl mx-auto mb-8">
            Powerful, focused tools designed to solve specific business challenges. 
            Choose from our collection of AI-powered micro SAAS solutions.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              to="/contact" 
              className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-purple-700 hover:to-pink-700 transition-all duration-300 flex items-center justify-center"
            >
              Get Started
              <ArrowRight className="w-5 h-5 ml-2" />
            </Link>
            <Link
              to="/ai-services"
              className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white/10 transition-colors"
            >
              Explore AI Services
            </Link>
          </div>
        </div>
      </section>

      {/* Category Filter */}
      <section className="py-8 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((category, index) => (
              <button
                key={index}
                className="px-6 py-2 rounded-full text-sm font-medium transition-all duration-300 bg-white/10 text-white hover:bg-white/20 border border-white/20"
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
              Our Micro SAAS Tools
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Choose from our collection of specialized tools designed for modern businesses
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {microSaasServices.map((service, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-sm rounded-xl p-6 hover:bg-white/20 transition-all duration-300 border border-white/20">
                <div className="flex items-center justify-between mb-4">
                  {service.icon}
                  <div className="flex items-center gap-2">
                    <span className="text-xs px-2 py-1 bg-purple-600/20 text-purple-300 rounded-full">
                      {service.category}
                    </span>
                    {service.popular && (
                      <span className="bg-gradient-to-r from-purple-600 to-pink-600 text-white text-xs px-3 py-1 rounded-full">
                        Popular
                      </span>
                    )}
                  </div>
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">{service.title}</h3>
                <p className="text-gray-300 mb-4">{service.description}</p>
                <ul className="space-y-2 mb-6">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-sm text-gray-300">
                      <CheckCircle className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <div className="flex items-center justify-between">
                  <span className="text-lg font-semibold text-white">{service.pricing}</span>
                  <Link 
                    to={service.link}
                    className="text-purple-400 hover:text-purple-300 transition-colors flex items-center"
                  >
                    Learn More
                    <ArrowRight className="w-4 h-4 ml-1" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white/5">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
              Why Choose Our Micro SAAS Tools?
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Experience the power of focused, specialized tools
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full mb-4">
                  {benefit.icon}
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">{benefit.title}</h3>
                <p className="text-gray-300">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Comparison */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
              Simple, Transparent Pricing
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Choose the plan that fits your business needs
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {pricingComparison.map((plan, index) => (
              <div key={index} className={`bg-white/10 backdrop-blur-sm rounded-xl p-6 hover:bg-white/20 transition-all duration-300 border border-white/20 ${plan.popular ? 'ring-2 ring-purple-500 relative' : ''}`}>
                {plan.popular && (
                  <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                    <span className="bg-purple-500 text-white px-4 py-1 rounded-full text-sm font-medium">Most Popular</span>
                  </div>
                )}
                <div className="text-center mb-6">
                  <h3 className="text-xl font-semibold text-white mb-2">{plan.plan}</h3>
                  <div className="flex items-baseline justify-center mb-2">
                    <span className="text-3xl font-bold text-white">{plan.price}</span>
                    <span className="text-gray-300 ml-1">{plan.period}</span>
                  </div>
                  <p className="text-gray-300 text-sm">{plan.description}</p>
                </div>
                <ul className="space-y-3 mb-6">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-sm text-gray-300">
                      <CheckCircle className="w-4 h-4 text-green-500 mr-3 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <Link
                  to="/contact"
                  className={`w-full block text-center py-3 px-4 rounded-lg font-semibold transition-all duration-300 ${
                    plan.popular
                      ? 'bg-gradient-to-r from-purple-600 to-pink-600 text-white hover:from-purple-700 hover:to-pink-700'
                      : 'border-2 border-white/30 text-white hover:border-purple-500 hover:text-purple-300'
                  }`}
                >
                  Get Started
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white/5">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
              What Our Users Say
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Real feedback from real users
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-300 mb-4 italic">"{testimonial.content}"</p>
                <div>
                  <p className="font-semibold text-white">{testimonial.name}</p>
                  <p className="text-gray-400 text-sm">{testimonial.company}</p>
                  <p className="text-purple-300 text-xs mt-1">{testimonial.service}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
            Ready to Boost Your Productivity?
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Join thousands of businesses using our micro SAAS tools to streamline operations and drive growth.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              to="/contact" 
              className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-purple-700 hover:to-pink-700 transition-all duration-300 flex items-center justify-center"
            >
              Start Free Trial
              <ArrowRight className="w-5 h-5 ml-2" />
            </Link>
            <Link 
              to="/it-services" 
              className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white/10 transition-colors"
            >
              Explore IT Services
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
'use client';
import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle, Star, Users, Award, Zap, Shield, Brain, Cloud, Code, BarChart3 } from 'lucide-react';

export default function AIProjectManagementProPage() {
  const features = [
    {
      icon: <Brain className="w-8 h-8 text-cyan-400" />,
      title: 'AI-Powered Planning',
      description: 'Intelligent project planning with automated resource allocation and timeline optimization',
      benefits: ['Smart scheduling', 'Resource optimization', 'Risk prediction', 'Timeline forecasting']
    },
    {
      icon: <Users className="w-8 h-8 text-green-400" />,
      title: 'Team Collaboration',
      description: 'Enhanced team collaboration with AI-driven communication and task management',
      benefits: ['Smart notifications', 'Task assignment', 'Progress tracking', 'Team analytics']
    },
    {
      icon: <BarChart3 className="w-8 h-8 text-purple-400" />,
      title: 'Real-time Analytics',
      description: 'Comprehensive project analytics with real-time insights and performance metrics',
      benefits: ['Live dashboards', 'Performance metrics', 'Progress reports', 'KPI tracking']
    },
    {
      icon: <Shield className="w-8 h-8 text-yellow-400" />,
      title: 'Risk Management',
      description: 'Advanced risk assessment and mitigation strategies powered by AI',
      benefits: ['Risk identification', 'Mitigation strategies', 'Early warnings', 'Compliance tracking']
    }
  ];

  const managementFeatures = [
    {
      category: 'Project Planning',
      items: ['AI Timeline Generation', 'Resource Allocation', 'Budget Planning', 'Milestone Tracking', 'Dependency Management', 'Scope Definition']
    },
    {
      category: 'Team Management',
      items: ['Task Assignment', 'Workload Balancing', 'Skill Matching', 'Performance Monitoring', 'Team Analytics', 'Communication Tools']
    },
    {
      category: 'Quality Assurance',
      items: ['Quality Gates', 'Testing Automation', 'Code Review', 'Documentation', 'Compliance Checks', 'Audit Trails']
    },
    {
      category: 'Reporting & Analytics',
      items: ['Progress Reports', 'Performance Dashboards', 'Resource Utilization', 'Budget Tracking', 'Risk Analysis', 'Stakeholder Updates']
    }
  ];

  const pricingPlans = [
    {
      name: 'Professional',
      price: '$199',
      period: '/month',
      description: 'Perfect for small to medium teams',
      features: [
        'Up to 10 projects',
        'Basic AI features',
        'Standard reporting',
        'Email support',
        'Team collaboration',
        'Basic integrations'
      ],
      popular: false
    },
    {
      name: 'Enterprise',
      price: '$499',
      period: '/month',
      description: 'Ideal for large organizations',
      features: [
        'Unlimited projects',
        'Advanced AI features',
        'Real-time analytics',
        'Priority support',
        'Custom integrations',
        'Advanced security',
        'White-label solution'
      ],
      popular: true
    },
    {
      name: 'Custom',
      price: 'Contact Us',
      period: '',
      description: 'Tailored solutions for your needs',
      features: [
        'Custom AI models',
        'Dedicated support',
        'On-premise deployment',
        'Advanced security',
        'Custom development',
        'Training & consulting',
        '24/7 support'
      ],
      popular: false
    }
  ];

  const testimonials = [
    {
      name: 'Jennifer Martinez',
      company: 'Tech Solutions Inc',
      content: 'AI Project Management Pro has revolutionized how we manage our projects. We increased delivery efficiency by 50% and reduced project delays by 70%.',
      rating: 5
    },
    {
      name: 'David Kim',
      company: 'Software Development Co',
      content: 'The AI-powered resource allocation and risk prediction features have been game-changers for our project success rates.',
      rating: 5
    },
    {
      name: 'Lisa Thompson',
      company: 'Digital Agency',
      content: 'The real-time analytics and team collaboration tools have improved our project visibility and team productivity significantly.',
      rating: 5
    }
  ];

  return (
    <>
      <Helmet>
        <title>AI Project Management Pro - Zion Tech Group</title>
      </Helmet>
      <div className="min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900">
        {/* Hero Section */}
        <section className="pt-20 pb-16 px-4">
          <div className="max-w-7xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              AI Project Management <span className="text-cyan-400">Pro</span>
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Transform your project management with AI-powered tools that optimize planning, 
              enhance team collaboration, and deliver superior project outcomes.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                to="/contact" 
                className="inline-flex items-center px-8 py-4 bg-cyan-600 text-white font-semibold rounded-lg hover:bg-cyan-700 transition-colors"
              >
                Get Started
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
              <Link 
                to="/ai-services" 
                className="inline-flex items-center px-8 py-4 border border-cyan-600 text-cyan-400 font-semibold rounded-lg hover:bg-cyan-600 hover:text-white transition-colors"
              >
                Learn More
              </Link>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-16 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-white mb-4">Key Features</h2>
              <p className="text-xl text-gray-300">Powerful AI capabilities for superior project management</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {features.map((feature, index) => (
                <div key={index} className="bg-gray-800 p-6 rounded-lg">
                  <div className="mb-4">{feature.icon}</div>
                  <h3 className="text-xl font-semibold text-white mb-2">{feature.title}</h3>
                  <p className="text-gray-300 mb-4">{feature.description}</p>
                  <ul className="space-y-1">
                    {feature.benefits.map((benefit, benefitIndex) => (
                      <li key={benefitIndex} className="flex items-center text-sm text-gray-400">
                        <CheckCircle className="w-3 h-3 text-green-400 mr-2" />
                        {benefit}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Detailed Features Section */}
        <section className="py-16 px-4 bg-gray-800">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-white mb-4">Comprehensive Management</h2>
              <p className="text-xl text-gray-300">Everything you need for effective project management</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {managementFeatures.map((category, index) => (
                <div key={index} className="bg-gray-900 p-6 rounded-lg">
                  <h3 className="text-xl font-semibold text-white mb-4">{category.category}</h3>
                  <ul className="space-y-2">
                    {category.items.map((item, itemIndex) => (
                      <li key={itemIndex} className="flex items-center text-gray-300">
                        <CheckCircle className="w-4 h-4 text-green-400 mr-2" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Pricing Section */}
        <section className="py-16 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-white mb-4">Pricing Plans</h2>
              <p className="text-xl text-gray-300">Choose the perfect plan for your project management needs</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {pricingPlans.map((plan, index) => (
                <div key={index} className={`bg-gray-800 p-8 rounded-lg ${plan.popular ? 'ring-2 ring-cyan-500' : ''}`}>
                  {plan.popular && (
                    <div className="bg-cyan-600 text-white text-sm font-semibold px-3 py-1 rounded-full inline-block mb-4">
                      Most Popular
                    </div>
                  )}
                  <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                  <div className="mb-4">
                    <span className="text-4xl font-bold text-white">{plan.price}</span>
                    <span className="text-gray-400 ml-1">{plan.period}</span>
                  </div>
                  <p className="text-gray-300 mt-2">{plan.description}</p>
                  <ul className="mt-6 space-y-2">
                    {plan.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-gray-300">
                        <CheckCircle className="w-4 h-4 text-green-400 mr-2" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <Link 
                    to="/contact" 
                    className="w-full mt-6 inline-flex items-center justify-center px-6 py-3 bg-cyan-600 text-white font-semibold rounded-lg hover:bg-cyan-700 transition-colors"
                  >
                    Get Started
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section className="py-16 px-4 bg-gray-800">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-white mb-4">What Our Clients Say</h2>
              <p className="text-xl text-gray-300">Real results from real businesses</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {testimonials.map((testimonial, index) => (
                <div key={index} className="bg-gray-900 p-6 rounded-lg">
                  <div className="flex mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  <p className="text-gray-300 mb-4 italic">"{testimonial.content}"</p>
                  <p className="font-semibold text-white">{testimonial.name}</p>
                  <p className="text-cyan-400">{testimonial.company}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold text-white mb-4">
              Ready to Transform Your Project Management?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Join leading organizations using our AI-powered project management to deliver better results faster.
            </p>
            <Link 
              to="/contact" 
              className="inline-flex items-center px-8 py-4 bg-cyan-600 text-white font-semibold rounded-lg hover:bg-cyan-700 transition-colors"
            >
              Contact Us Today
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </div>
        </section>
      </div>
    </>
  );
}
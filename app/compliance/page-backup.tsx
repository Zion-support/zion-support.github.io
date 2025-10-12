'use client';
import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { CheckCircle, Brain, BarChart, Target, TrendingUp, ArrowRight, Star, Shield, FileText, Users } from 'lucide-react';

export default function CompliancePage() {
  const features = [
    {
      icon: <Brain className="w-8 h-8 text-cyan-400" />,
      title: 'AI-Powered Analysis',
      description: 'Advanced AI algorithms provide intelligent insights and recommendations.',
      benefits: ['Smart recommendations', 'Predictive analytics', 'Automated insights', 'Real-time analysis']
    },
    {
      icon: <BarChart className="w-8 h-8 text-green-400" />,
      title: 'Advanced Analytics',
      description: 'Comprehensive analytics dashboard with real-time data visualization.',
      benefits: ['Real-time dashboards', 'Custom reports', 'Data visualization', 'Performance metrics']
    },
    {
      icon: <Target className="w-8 h-8 text-purple-400" />,
      title: 'Compliance Monitoring',
      description: 'Continuous monitoring and assessment of compliance requirements.',
      benefits: ['Real-time monitoring', 'Automated alerts', 'Compliance scoring', 'Risk assessment']
    },
    {
      icon: <TrendingUp className="w-8 h-8 text-yellow-400" />,
      title: 'Performance Optimization',
      description: 'Optimize your compliance processes for maximum efficiency and effectiveness.',
      benefits: ['Process optimization', 'Efficiency gains', 'Cost reduction', 'Quality improvement']
    }
  ];

  const complianceFeatures = [
    {
      category: 'Regulatory Compliance',
      items: ['GDPR Compliance', 'HIPAA Compliance', 'SOX Compliance', 'ISO Standards', 'Industry Regulations', 'Audit Preparation']
    },
    {
      category: 'Risk Management',
      items: ['Risk Assessment', 'Threat Detection', 'Vulnerability Scanning', 'Incident Response', 'Business Continuity', 'Disaster Recovery']
    },
    {
      category: 'Documentation & Reporting',
      items: ['Policy Management', 'Document Control', 'Compliance Reports', 'Audit Trails', 'Evidence Collection', 'Regulatory Filings']
    },
    {
      category: 'Training & Awareness',
      items: ['Compliance Training', 'Awareness Programs', 'Certification Tracking', 'Policy Communication', 'Role-based Training', 'Assessment Tools']
    }
  ];

  const pricingPlans = [
    {
      name: 'Basic',
      price: '$299',
      period: '/month',
      description: 'Perfect for small businesses',
      features: [
        'Basic compliance monitoring',
        'Standard reporting',
        'Email support',
        'Basic integrations',
        'Document management',
        'Basic training'
      ],
      popular: false
    },
    {
      name: 'Professional',
      price: '$699',
      period: '/month',
      description: 'Ideal for growing companies',
      features: [
        'Advanced compliance monitoring',
        'Custom reporting',
        'Priority support',
        'Advanced integrations',
        'Advanced training',
        'Risk assessment',
        'API access'
      ],
      popular: true
    },
    {
      name: 'Enterprise',
      price: '$1,299',
      period: '/month',
      description: 'For large organizations',
      features: [
        'Comprehensive compliance suite',
        'White-label solution',
        'Dedicated support',
        'Custom development',
        'Advanced security',
        '24/7 support',
        'On-premise deployment'
      ],
      popular: false
    }
  ];

  const testimonials = [
    {
      name: 'Jennifer Martinez',
      company: 'Financial Services',
      content: 'Compliance management has streamlined our regulatory processes. We reduced audit preparation time by 60% and improved compliance scores significantly.',
      rating: 5
    },
    {
      name: 'David Kim',
      company: 'Healthcare Provider',
      content: 'The HIPAA compliance features and risk assessment tools have been essential for maintaining our regulatory requirements.',
      rating: 5
    },
    {
      name: 'Sarah Wilson',
      company: 'Manufacturing Co',
      content: 'The automated monitoring and reporting features have helped us maintain ISO standards while reducing manual compliance work.',
      rating: 5
    }
  ];

  return (
    <>
      <Helmet>
        <title>Compliance Management - Zion Tech Group</title>
      </Helmet>
      <div className="min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900">
        {/* Hero Section */}
        <section className="pt-20 pb-16 px-4">
          <div className="max-w-7xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              Compliance <span className="text-cyan-400">Management</span>
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Ensure regulatory compliance and risk management with our comprehensive compliance management solution 
              that provides real-time monitoring, automated reporting, and intelligent insights.
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
                to="/it-services" 
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
              <p className="text-xl text-gray-300">Powerful capabilities for compliance management</p>
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
              <h2 className="text-4xl font-bold text-white mb-4">Comprehensive Compliance</h2>
              <p className="text-xl text-gray-300">Everything you need for effective compliance management</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {complianceFeatures.map((category, index) => (
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
              <p className="text-xl text-gray-300">Choose the perfect plan for your compliance needs</p>
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
              Ready to Streamline Your Compliance?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Join leading organizations using our compliance management solution to ensure regulatory compliance and reduce risk.
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
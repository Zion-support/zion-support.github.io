import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Wrench, AlertTriangle, TrendingUp, Clock, Shield, DollarSign, Users, Star, CheckCircle, BarChart, Settings, Zap } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function AIPredictiveMaintenancePage() {
  const features = [
    {
      icon: <Wrench className="w-6 h-6 text-orange-400" />,
      title: 'AI-Powered Failure Prediction',
      description: 'Advanced machine learning algorithms predict equipment failures up to 30 days in advance with 95% accuracy.',
      benefits: ['95% prediction accuracy', '30-day advance warning', 'Real-time monitoring', 'Automated alerts']
    },
    {
      icon: <TrendingUp className="w-6 h-6 text-green-400" />,
      title: 'Optimized Maintenance Scheduling',
      description: 'Intelligent scheduling reduces downtime by 60% and maintenance costs by 40% through predictive planning.',
      benefits: ['60% downtime reduction', '40% cost savings', 'Smart scheduling', 'Resource optimization']
    },
    {
      icon: <BarChart className="w-6 h-6 text-blue-400" />,
      title: 'Comprehensive Analytics',
      description: 'Detailed insights into equipment performance, maintenance history, and predictive trends with interactive dashboards.',
      benefits: ['Performance analytics', 'Trend analysis', 'Interactive dashboards', 'Custom reports']
    },
    {
      icon: <Shield className="w-6 h-6 text-red-400" />,
      title: 'Safety & Compliance',
      description: 'Ensure workplace safety and regulatory compliance with automated safety checks and compliance reporting.',
      benefits: ['Safety monitoring', 'Compliance reporting', 'Risk assessment', 'Audit trails']
    }
  ];

  const industries = [
    {
      icon: <Settings className="w-8 h-8 text-cyan-400" />,
      title: 'Manufacturing',
      description: 'Prevent production line failures and optimize manufacturing equipment maintenance.',
      benefits: ['Production line monitoring', 'Equipment optimization', 'Quality control', 'Supply chain efficiency']
    },
    {
      icon: <Zap className="w-8 h-8 text-yellow-400" />,
      title: 'Energy & Utilities',
      description: 'Monitor power plants, wind turbines, and electrical infrastructure for optimal performance.',
      benefits: ['Power plant monitoring', 'Grid stability', 'Renewable energy', 'Infrastructure health']
    },
    {
      icon: <Wrench className="w-8 h-8 text-orange-400" />,
      title: 'Transportation',
      description: 'Predictive maintenance for fleets, aircraft, and railway systems to ensure safety and reliability.',
      benefits: ['Fleet management', 'Aircraft maintenance', 'Railway systems', 'Safety compliance']
    },
    {
      icon: <Shield className="w-8 h-8 text-red-400" />,
      title: 'Healthcare',
      description: 'Critical medical equipment monitoring to ensure patient safety and regulatory compliance.',
      benefits: ['Medical equipment', 'Patient safety', 'Regulatory compliance', 'Emergency preparedness']
    }
  ];

  const pricingTiers = [
    {
      name: 'Starter',
      price: '$499',
      period: '/month',
      description: 'Perfect for small facilities and equipment',
      features: [
        'Up to 50 devices',
        'Basic AI predictions',
        'Email alerts',
        'Standard analytics',
        'Email support',
        'Mobile app access'
      ],
      popular: false
    },
    {
      name: 'Professional',
      price: '$1,299',
      period: '/month',
      description: 'Ideal for medium-sized operations',
      features: [
        'Up to 200 devices',
        'Advanced AI algorithms',
        'Real-time alerts',
        'Advanced analytics',
        'Priority support',
        'Custom dashboards',
        'API integration',
        'Team collaboration'
      ],
      popular: true
    },
    {
      name: 'Enterprise',
      price: '$2,999',
      period: '/month',
      description: 'Comprehensive solution for large organizations',
      features: [
        'Unlimited devices',
        'Custom AI models',
        '24/7 monitoring',
        'Enterprise analytics',
        'Dedicated support',
        'White-label solution',
        'Custom development',
        'On-premise deployment'
      ],
      popular: false
    }
  ];

  const testimonials = [
    {
      name: 'Michael Rodriguez',
      company: 'Industrial Solutions Corp',
      content: 'We reduced unplanned downtime by 70% and saved $2M annually. The AI predictions are incredibly accurate.',
      rating: 5,
      avatar: 'MR'
    },
    {
      name: 'Dr. Lisa Chen',
      company: 'Green Energy Systems',
      content: 'Our wind farm efficiency increased by 25% with predictive maintenance. The ROI was immediate and substantial.',
      rating: 5,
      avatar: 'LC'
    },
    {
      name: 'James Thompson',
      company: 'Metro Transit Authority',
      content: 'The system prevented 3 major equipment failures that would have caused significant service disruptions.',
      rating: 5,
      avatar: 'JT'
    }
  ];

  return (
    <>
      <Helmet>
        <title>AI Predictive Maintenance - Smart Equipment Monitoring | Zion Tech Group</title>
        <meta name="description" content="AI-powered predictive maintenance with 95% accuracy. Reduce downtime by 60% and maintenance costs by 40%. Starting at $499/month." />
        <meta name="keywords" content="predictive maintenance, AI maintenance, equipment monitoring, IoT sensors, maintenance optimization, industrial AI, smart maintenance" />
        <link rel="canonical" href="https://ziontechgroup.com/ai-predictive-maintenance" />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-orange-900 to-slate-900 pt-20">
        {/* Hero Section */}
        <section className="relative py-20 px-4 overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_70%,rgba(251,146,60,0.1)_0%,transparent_50%)]" />
          <div className="relative max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-orange-500/20 to-red-500/20 text-orange-400 px-6 py-3 rounded-full text-sm font-medium mb-8 border border-orange-400/30">
                <Wrench className="w-4 h-4" />
                <span>AI-Powered Maintenance</span>
              </div>
              
              <h1 className="text-5xl md:text-7xl font-bold text-white mb-8 leading-tight">
                AI Predictive
                <br />
                <span className="bg-gradient-to-r from-orange-400 via-red-400 to-yellow-400 bg-clip-text text-transparent">
                  Maintenance
                </span>
              </h1>
              
              <p className="text-xl text-gray-300 mb-12 max-w-4xl mx-auto leading-relaxed">
                Transform your maintenance operations with AI-powered predictive analytics. 
                Reduce downtime by 60% and maintenance costs by 40% with 95% accuracy.
                <br />
                <span className="text-orange-400 font-semibold">Trusted by 500+ industrial facilities worldwide.</span>
              </p>
              
              <div className="flex flex-col sm:flex-row gap-6 justify-center mb-16">
                <Link 
                  to="/contact" 
                  className="group bg-gradient-to-r from-orange-500 to-red-600 text-white px-10 py-4 rounded-xl font-semibold hover:from-orange-600 hover:to-red-700 transition-all duration-300 flex items-center justify-center space-x-2 shadow-lg shadow-orange-500/25 hover:shadow-orange-500/40 transform hover:scale-105"
                >
                  <span>Start Free Trial</span>
                  <Wrench className="w-5 h-5" />
                </Link>
                <Link 
                  to="#pricing" 
                  className="group border-2 border-orange-400 text-orange-400 px-10 py-4 rounded-xl font-semibold hover:bg-orange-400 hover:text-gray-900 transition-all duration-300 flex items-center justify-center space-x-2 backdrop-blur-sm"
                >
                  <span>View Pricing</span>
                  <DollarSign className="w-5 h-5" />
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-20 px-4 relative">
          <div className="absolute inset-0 bg-gradient-to-r from-orange-500/5 to-red-500/5" />
          <div className="relative max-w-7xl mx-auto">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="text-4xl font-bold text-orange-400 mb-2">95%</div>
                <div className="text-gray-300">Prediction Accuracy</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-red-400 mb-2">60%</div>
                <div className="text-gray-300">Downtime Reduction</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-yellow-400 mb-2">40%</div>
                <div className="text-gray-300">Cost Savings</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-green-400 mb-2">500+</div>
                <div className="text-gray-300">Facilities Served</div>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20 px-4 relative">
          <div className="relative max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Advanced <span className="bg-gradient-to-r from-orange-400 to-red-400 bg-clip-text text-transparent">AI Features</span>
              </h2>
              <p className="text-xl text-gray-300 max-w-4xl mx-auto">
                Comprehensive predictive maintenance powered by cutting-edge AI technology
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {features.map((feature, index) => (
                <div key={index} className="group bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105">
                  <div className="flex items-center space-x-4 mb-6">
                    <div className="p-3 bg-gradient-to-r from-orange-500 to-red-600 rounded-xl group-hover:scale-110 transition-transform duration-300">
                      {feature.icon}
                    </div>
                    <h3 className="text-2xl font-bold text-white group-hover:text-orange-400 transition-colors">
                      {feature.title}
                    </h3>
                  </div>
                  <p className="text-gray-300 mb-6 leading-relaxed">
                    {feature.description}
                  </p>
                  <div className="space-y-2">
                    {feature.benefits.map((benefit, benefitIndex) => (
                      <div key={benefitIndex} className="flex items-center space-x-2 text-gray-300">
                        <CheckCircle className="w-4 h-4 text-green-400" />
                        <span>{benefit}</span>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Industries Section */}
        <section className="py-20 px-4 relative">
          <div className="absolute inset-0 bg-gradient-to-br from-orange-500/5 via-red-500/5 to-yellow-500/5" />
          <div className="relative max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Industry <span className="bg-gradient-to-r from-orange-400 to-red-400 bg-clip-text text-transparent">Solutions</span>
              </h2>
              <p className="text-xl text-gray-300 max-w-4xl mx-auto">
                Specialized predictive maintenance solutions for various industries
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {industries.map((industry, index) => (
                <div key={index} className="group bg-white/10 backdrop-blur-lg rounded-2xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105">
                  <div className="flex items-center justify-center w-16 h-16 bg-gradient-to-r from-orange-500 to-red-600 rounded-2xl mb-6 group-hover:scale-110 transition-transform duration-300">
                    {industry.icon}
                  </div>
                  <h3 className="text-xl font-bold text-white mb-4 group-hover:text-orange-400 transition-colors">
                    {industry.title}
                  </h3>
                  <p className="text-gray-300 mb-6 leading-relaxed">
                    {industry.description}
                  </p>
                  <div className="space-y-2">
                    {industry.benefits.map((benefit, benefitIndex) => (
                      <div key={benefitIndex} className="flex items-center space-x-2 text-gray-300 text-sm">
                        <CheckCircle className="w-3 h-3 text-green-400" />
                        <span>{benefit}</span>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Pricing Section */}
        <section id="pricing" className="py-20 px-4 relative">
          <div className="absolute inset-0 bg-gradient-to-br from-orange-500/5 via-red-500/5 to-yellow-500/5" />
          <div className="relative max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Flexible <span className="bg-gradient-to-r from-orange-400 to-red-400 bg-clip-text text-transparent">Pricing Plans</span>
              </h2>
              <p className="text-xl text-gray-300 max-w-4xl mx-auto">
                Choose the perfect plan for your maintenance needs
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {pricingTiers.map((tier, index) => (
                <div key={index} className={`relative bg-white/10 backdrop-blur-lg rounded-2xl p-8 border transition-all duration-300 hover:scale-105 ${
                  tier.popular 
                    ? 'border-orange-400/50 bg-orange-500/10 shadow-2xl shadow-orange-500/20' 
                    : 'border-white/20 hover:bg-white/20'
                }`}>
                  {tier.popular && (
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                      <div className="bg-gradient-to-r from-orange-500 to-red-600 text-white px-6 py-2 rounded-full text-sm font-semibold">
                        Most Popular
                      </div>
                    </div>
                  )}
                  
                  <div className="text-center mb-8">
                    <h3 className="text-2xl font-bold text-white mb-2">{tier.name}</h3>
                    <p className="text-gray-300 mb-4">{tier.description}</p>
                    <div className="flex items-baseline justify-center">
                      <span className="text-5xl font-bold text-white">{tier.price}</span>
                      <span className="text-gray-400 ml-2">{tier.period}</span>
                    </div>
                  </div>
                  
                  <div className="space-y-4 mb-8">
                    {tier.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-center space-x-3">
                        <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0" />
                        <span className="text-gray-300">{feature}</span>
                      </div>
                    ))}
                  </div>
                  
                  <Link 
                    to="/contact"
                    className={`block w-full text-center py-4 rounded-xl font-semibold transition-all duration-300 ${
                      tier.popular
                        ? 'bg-gradient-to-r from-orange-500 to-red-600 text-white hover:from-orange-600 hover:to-red-700 shadow-lg shadow-orange-500/25'
                        : 'bg-white/10 text-white hover:bg-white/20 border border-white/20'
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
        <section className="py-20 px-4 relative">
          <div className="relative max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Trusted by <span className="bg-gradient-to-r from-orange-400 to-red-400 bg-clip-text text-transparent">Industry Leaders</span>
              </h2>
              <p className="text-xl text-gray-300 max-w-4xl mx-auto">
                See what our clients say about our predictive maintenance solutions
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {testimonials.map((testimonial, index) => (
                <div key={index} className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20 hover:bg-white/20 transition-all duration-300">
                  <div className="flex items-center mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  <blockquote className="text-gray-300 mb-6 italic">
                    "{testimonial.content}"
                  </blockquote>
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-gradient-to-r from-orange-500 to-red-600 rounded-full flex items-center justify-center text-white font-bold">
                      {testimonial.avatar}
                    </div>
                    <div>
                      <p className="font-semibold text-white">{testimonial.name}</p>
                      <p className="text-gray-400 text-sm">{testimonial.company}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4 relative">
          <div className="absolute inset-0 bg-gradient-to-r from-orange-500/10 via-red-500/10 to-yellow-500/10" />
          <div className="relative max-w-7xl mx-auto">
            <div className="text-center">
              <div className="bg-gradient-to-r from-orange-600 via-red-600 to-yellow-600 rounded-3xl p-12 relative overflow-hidden">
                <div className="relative z-10">
                  <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                    Ready to Optimize Your <span className="bg-gradient-to-r from-orange-300 to-red-300 bg-clip-text text-transparent">Maintenance Operations?</span>
                  </h2>
                  <p className="text-xl text-white/90 mb-8 max-w-3xl mx-auto">
                    Join 500+ facilities using our AI predictive maintenance to reduce downtime, 
                    cut costs, and improve efficiency. Start your free trial today.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-6 justify-center">
                    <Link 
                      to="/contact" 
                      className="group bg-white text-orange-600 px-10 py-4 rounded-xl font-bold text-lg hover:bg-gray-100 transition-all duration-300 flex items-center justify-center space-x-2 shadow-lg hover:shadow-xl transform hover:scale-105"
                    >
                      <span>Start Free Trial</span>
                      <Wrench className="w-5 h-5" />
                    </Link>
                    <Link 
                      to="/contact" 
                      className="group border-2 border-white text-white px-10 py-4 rounded-xl font-bold text-lg hover:bg-white/10 transition-all duration-300 flex items-center justify-center space-x-2 backdrop-blur-sm"
                    >
                      <span>Schedule Demo</span>
                      <Clock className="w-5 h-5" />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
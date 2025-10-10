'use client';
import React from 'react';
import { Helmet } from 'react-helmet-async';
import { BarChart3, CheckCircle, ArrowRight, Star, Users, Zap, Shield, Globe, Database, TrendingUp, Target, Award } from 'lucide-react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

const ZionAnalyticsProPage: React.FC = () => {
  const features = [
    {
      icon: BarChart3,
      title: 'Real-time Data Visualization',
      description: 'Interactive dashboards with live data updates and customizable widgets for instant insights.',
      benefits: ['Instant data updates', 'Customizable widgets', 'Interactive charts', 'Real-time monitoring']
    },
    {
      icon: TrendingUp,
      title: 'AI-powered Predictive Analytics',
      description: 'Advanced machine learning algorithms that predict trends and forecast future performance.',
      benefits: ['Trend prediction', 'Forecast accuracy', 'ML algorithms', 'Performance insights']
    },
    {
      icon: Target,
      title: 'Custom Dashboard Builder',
      description: 'Drag-and-drop interface to create personalized dashboards tailored to your business needs.',
      benefits: ['Drag-and-drop interface', 'Personalized layouts', 'Custom widgets', 'Easy customization']
    },
    {
      icon: Database,
      title: 'Advanced Data Connectors',
      description: 'Connect to 100+ data sources including databases, APIs, cloud services, and business applications.',
      benefits: ['100+ data sources', 'API integrations', 'Cloud connectivity', 'Business app sync']
    },
    {
      icon: Zap,
      title: 'Automated Report Generation',
      description: 'Schedule and automate report generation with intelligent insights and recommendations.',
      benefits: ['Scheduled reports', 'Automated insights', 'Smart recommendations', 'Email delivery']
    },
    {
      icon: Users,
      title: 'Multi-tenant Architecture',
      description: 'Secure multi-tenant platform supporting multiple organizations with data isolation.',
      benefits: ['Data isolation', 'Multi-org support', 'Secure architecture', 'Scalable design']
    }
  ];

  const pricingTiers = [
    {
      name: 'Starter',
      price: '$89',
      period: '/month',
      description: 'Perfect for small businesses getting started with analytics',
      features: [
        'Up to 5 data sources',
        'Basic dashboards',
        'Standard reports',
        'Email support',
        '1 user account'
      ],
      popular: false
    },
    {
      name: 'Professional',
      price: '$199',
      period: '/month',
      description: 'Advanced features for growing businesses',
      features: [
        'Up to 25 data sources',
        'Advanced dashboards',
        'AI predictions',
        'Priority support',
        'Up to 10 user accounts',
        'Custom integrations'
      ],
      popular: true
    },
    {
      name: 'Enterprise',
      price: '$399',
      period: '/month',
      description: 'Complete solution for large organizations',
      features: [
        'Unlimited data sources',
        'Custom dashboards',
        'Advanced AI analytics',
        '24/7 support',
        'Unlimited users',
        'White-label options',
        'API access',
        'Custom development'
      ],
      popular: false
    }
  ];

  const testimonials = [
    {
      name: 'Sarah Johnson',
      company: 'TechCorp Solutions',
      role: 'CEO',
      content: 'Zion Analytics Pro transformed our data analysis. We increased our operational efficiency by 40% and made data-driven decisions that saved us $50K monthly.',
      rating: 5
    },
    {
      name: 'Michael Chen',
      company: 'DataFlow Inc',
      role: 'Data Analyst',
      content: 'The AI predictions are incredibly accurate. We can now forecast sales trends 3 months ahead with 95% accuracy. Game changer for our business.',
      rating: 5
    },
    {
      name: 'Emily Rodriguez',
      company: 'GrowthMetrics',
      role: 'Marketing Director',
      content: 'The custom dashboard builder is intuitive and powerful. We created dashboards for each department in just a few hours. Highly recommended!',
      rating: 5
    }
  ];

  return (
    <>
      <Helmet>
        <title>Zion Analytics Pro - Advanced Business Intelligence Platform | Zion Tech Group</title>
        <meta name="description" content="Transform your data into actionable insights with Zion Analytics Pro. AI-powered analytics, real-time dashboards, and predictive modeling for businesses of all sizes." />
        <meta name="keywords" content="business intelligence, data analytics, AI predictions, dashboards, data visualization, Zion Analytics Pro" />
      </Helmet>
      
      <Navigation />
      
      <main className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 cyber-grid-enhanced neural-network-bg matrix-rain pt-16">
        <div className="container mx-auto px-4 py-16">
          <div className="max-w-6xl mx-auto">
            {/* Hero Section */}
            <div className="text-center mb-16">
              <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-4 py-2 rounded-full text-sm font-medium mb-6">
                <BarChart3 className="w-4 h-4" />
                <span>AI-Powered Analytics Platform</span>
              </div>
              <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 neon-text-enhanced">
                Zion Analytics Pro
              </h1>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
                Transform your data into actionable insights with our advanced business intelligence platform. 
                Real-time dashboards, AI-powered predictions, and automated reporting for businesses of all sizes.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="mailto:kleber@ziontechgroup.com?subject=Zion Analytics Pro Demo Request"
                  className="btn-holographic px-8 py-4 text-lg"
                >
                  Get Free Demo
                </a>
                <a
                  href="tel:+13024640950"
                  className="btn-cyber px-8 py-4 text-lg"
                >
                  Call (302) 464-0950
                </a>
              </div>
            </div>

            {/* Key Benefits */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
              <div className="cyber-card-enhanced p-6 text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-4 glow">
                  <TrendingUp className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-2">40% Efficiency Boost</h3>
                <p className="text-gray-300">Increase operational efficiency with data-driven insights and automated reporting.</p>
              </div>
              <div className="cyber-card-enhanced p-6 text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-600 rounded-full flex items-center justify-center mx-auto mb-4 glow">
                  <Target className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-2">95% Prediction Accuracy</h3>
                <p className="text-gray-300">AI-powered predictions with 95% accuracy for better business forecasting.</p>
              </div>
              <div className="cyber-card-enhanced p-6 text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-emerald-600 rounded-full flex items-center justify-center mx-auto mb-4 glow">
                  <Zap className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-2">Real-time Insights</h3>
                <p className="text-gray-300">Get instant insights with live data updates and real-time monitoring.</p>
              </div>
            </div>

            {/* Features Section */}
            <div className="mb-16">
              <h2 className="text-4xl font-bold text-white text-center mb-12 neon-text-enhanced">
                Powerful Features
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {features.map((feature, index) => (
                  <div key={index} className="cyber-card-enhanced p-6 group">
                    <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform glow">
                      <feature.icon className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="text-xl font-bold text-white mb-3">{feature.title}</h3>
                    <p className="text-gray-300 mb-4">{feature.description}</p>
                    <ul className="space-y-2">
                      {feature.benefits.map((benefit, benefitIndex) => (
                        <li key={benefitIndex} className="flex items-center text-sm text-gray-300">
                          <CheckCircle className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
                          {benefit}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>

            {/* Pricing Section */}
            <div className="mb-16">
              <h2 className="text-4xl font-bold text-white text-center mb-12 neon-text-enhanced">
                Simple, Transparent Pricing
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {pricingTiers.map((tier, index) => (
                  <div key={index} className={`cyber-card-enhanced p-8 relative ${tier.popular ? 'holographic-card' : ''}`}>
                    {tier.popular && (
                      <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                        <span className="bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-4 py-2 rounded-full text-sm font-medium">
                          Most Popular
                        </span>
                      </div>
                    )}
                    <div className="text-center mb-6">
                      <h3 className="text-2xl font-bold text-white mb-2">{tier.name}</h3>
                      <p className="text-gray-300 mb-4">{tier.description}</p>
                      <div className="flex items-baseline justify-center">
                        <span className="text-4xl font-bold text-cyan-400">{tier.price}</span>
                        <span className="text-gray-400 ml-1">{tier.period}</span>
                      </div>
                    </div>
                    <ul className="space-y-3 mb-8">
                      {tier.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-center text-gray-300">
                          <CheckCircle className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                    <a
                      href={`mailto:kleber@ziontechgroup.com?subject=Zion Analytics Pro ${tier.name} Plan Inquiry`}
                      className={`w-full text-center py-3 px-6 rounded-lg font-semibold transition-all duration-300 ${
                        tier.popular 
                          ? 'btn-holographic' 
                          : 'btn-cyber'
                      }`}
                    >
                      Get Started
                    </a>
                  </div>
                ))}
              </div>
            </div>

            {/* Testimonials Section */}
            <div className="mb-16">
              <h2 className="text-4xl font-bold text-white text-center mb-12 neon-text-enhanced">
                What Our Customers Say
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {testimonials.map((testimonial, index) => (
                  <div key={index} className="cyber-card-enhanced p-6">
                    <div className="flex items-center mb-4">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                      ))}
                    </div>
                    <p className="text-gray-300 mb-4 italic">"{testimonial.content}"</p>
                    <div className="border-t border-gray-600 pt-4">
                      <p className="text-white font-semibold">{testimonial.name}</p>
                      <p className="text-cyan-400 text-sm">{testimonial.role}, {testimonial.company}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* CTA Section */}
            <div className="text-center">
              <div className="holographic-card p-8">
                <h2 className="text-3xl font-bold text-white mb-4">Ready to Transform Your Data?</h2>
                <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
                  Join thousands of businesses using Zion Analytics Pro to make data-driven decisions and drive growth.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <a
                    href="mailto:kleber@ziontechgroup.com?subject=Zion Analytics Pro Free Trial Request"
                    className="btn-holographic px-8 py-4 text-lg"
                  >
                    Start Free Trial
                  </a>
                  <a
                    href="tel:+13024640950"
                    className="btn-cyber px-8 py-4 text-lg"
                  >
                    Schedule Demo
                  </a>
                </div>
                <div className="mt-6 text-sm text-gray-400">
                  <p>Email: kleber@ziontechgroup.com | Phone: (302) 464-0950</p>
                  <p>Address: 364 E Main St STE 1008, Middletown DE 19709</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </>
  );
};

export default ZionAnalyticsProPage;
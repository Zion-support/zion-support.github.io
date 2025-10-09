'use client';
import React from 'react';
<<<<<<< HEAD
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import SEOOptimizer from '../components/SEOOptimizer';
import { Phone, Mail, MapPin, Clock, CheckCircle, Star, ArrowRight } from 'lucide-react';

const AiDataVisualizationPage: React.FC = () => {
  return (
    <>
      <SEOOptimizer
        title="AiDataVisualization - Zion Tech Group"
        description="Professional AI and IT ai-data-visualizations for your business transformation."
        keywords={['AI services', 'IT solutions', 'business transformation']}
        canonicalUrl="https://ziontechgroup.com/service"
      />
      <div className="min-h-screen bg-gradient-to-br from-gray-900 via-indigo-900 to-purple-900">
        <Navigation />
        <div className="container mx-auto px-4 py-8">
          {/* Hero Section */}
          <section className="text-center mb-16 relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-r from-indigo-600/20 to-purple-600/20 rounded-3xl"></div>
            <div className="relative z-10 py-16 px-4">
              <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
                <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent">
                  Service
                </span>
              </h1>
              <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
                Professional AI and IT services designed to transform your business operations.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <a
                  href="/contact"
                  className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-indigo-700 hover:to-purple-700 transition-all duration-300 hover:scale-105"
                >
                  Get Started Today
                </a>
                <a
                  href="/contact"
                  className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-indigo-600 transition-all duration-300"
                >
                  Contact Us
                </a>
              </div>
=======
import { CheckCircle, Star, BarChart3, PieChart, TrendingUp, Eye } from 'lucide-react';
const AIDataVisualizationPage: React.FC = () => {
  const features = [
    {
      icon: BarChart,
      title: 'Interactive Dashboards',
      description: 'Create stunning, interactive dashboards that automatically update with real-time data from any source.',
      benefits: ['Real-time updates', 'Drag-and-drop builder', 'Mobile responsive']
    },
    {
      icon: Brain,
      title: 'AI-Powered Insights',
      description: 'Our AI automatically identifies patterns, trends, and anomalies in your data to provide actionable insights.',
      benefits: ['Pattern recognition', 'Anomaly detection', 'Predictive analytics']
    },
    {
      icon: Zap,
      title: 'One-Click Integration',
      description: 'Connect to 100+ data sources including databases, APIs, cloud services, and business applications.',
      benefits: ['100+ connectors', 'Auto-sync', 'No coding required']
    },
    {
      icon: Eye,
      title: 'Advanced Visualizations',
      description: '50+ chart types including heatmaps, scatter plots, treemaps, and custom visualizations for any data type.',
      benefits: ['50+ chart types', 'Custom visuals', '3D visualizations']
    },
    {
      icon: Shield,
      title: 'Enterprise Security',
      description: 'Bank-level security with role-based access, data encryption, and compliance with SOC 2 and GDPR.',
      benefits: ['Role-based access', 'Data encryption', 'Audit logs']
    },
    {
      icon: Users,
      title: 'Collaborative Features',
      description: 'Share dashboards, add comments, schedule reports, and collaborate with your team in real-time.',
      benefits: ['Real-time sharing', 'Comments & annotations', 'Scheduled reports']
    }
  ];
  const pricingPlans = [
    {
      name: 'Starter',
      price: '$149',
      period: '/month',
      description: 'Perfect for small teams',
      features: [
        'Up to 5 dashboards',
        'Basic chart types',
        'Standard data sources',
        'Email support',
        'Basic templates',
        '1GB data storage'
      ],
      popular: false
    },
    {
      name: 'Professional',
      price: '$399',
      period: '/month',
      description: 'Ideal for growing businesses',
      features: [
        'Up to 25 dashboards',
        'All chart types',
        '100+ data sources',
        'Priority support',
        'Custom templates',
        '10GB data storage',
        'AI insights',
        'Team collaboration'
      ],
      popular: true
    },
    {
      name: 'Enterprise',
      price: '$999',
      period: '/month',
      description: 'For large organizations',
      features: [
        'Unlimited dashboards',
        'Custom visualizations',
        'All integrations',
        'Dedicated support',
        'Custom development',
        'Unlimited storage',
        'Advanced AI features',
        'White-label options',
        'SLA guarantee'
      ],
      popular: false
    }
  ];
  const testimonials = [
    {
      name: 'Alex Thompson',
      role: 'Data Analyst',
      company: 'Analytics Corp',
      content: 'Zion Tech Group\'s AI data visualization platform has revolutionized how we present data. The AI insights are incredibly accurate and save us hours of analysis.',
      rating: 5
    },
    {
      name: 'Sarah Davis',
      role: 'Marketing Director',
      company: 'Growth Marketing',
      content: 'The interactive dashboards have transformed our reporting. Our clients love the real-time updates and the visual storytelling capabilities.',
      rating: 5
    },
    {
      name: 'Michael Rodriguez',
      role: 'CEO',
      company: 'Data Insights Inc.',
      content: 'The predictive analytics feature helped us identify market trends 3 months ahead of our competitors. It\'s been a game-changer for our business.',
      rating: 5
    }
  ];
  const stats = [
    { number: '95%', label: 'Faster Insights' },
    { number: '100+', label: 'Data Sources' },
    { number: '50+', label: 'Chart Types' },
    { number: '24/7', label: 'Real-time Updates' }
  ];
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/20 to-purple-500/20"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 neon-text">
              AI Data Visualization
            </h1>
            <p className="text-xl md:text-2xl text-cyan-400 mb-8">
              Transform your data into stunning visual insights with AI
            </p>
            <p className="text-lg text-gray-300 mb-12 max-w-3xl mx-auto">
              Create interactive dashboards, generate AI-powered insights, and tell compelling data stories. 
              Turn complex data into actionable insights that drive business growth.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <a
                href="tel:+13024640950"
                className="cyber-button inline-flex items-center justify-center"
              >
                📞 Call Now: (302) 464-0950
              </a>
              <a
                href="/contact"
                className="cyber-button inline-flex items-center justify-center"
                style={{background: 'linear-gradient(45deg, #8b5cf6, #ec4899)'}}
              >
                Get Free Demo
              </a>
            </div>
            {/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="text-3xl font-bold text-cyan-400 mb-2">{stat.number}</div>
                  <div className="text-gray-300">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
      {/* Features Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 neon-text">
              Powerful AI Features
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Everything you need to visualize and analyze your data with AI
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-8 mb-16">
            {features.map((feature, index) => (
              <div key={index} className="cyber-card hologram-card">
                <div className="flex items-start space-x-4">
                  <div className="text-cyan-400 flex-shrink-0">
                    {feature.icon}
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-white mb-4">{feature.title}</h3>
                    <p className="text-gray-300 mb-4 leading-relaxed">{feature.description}</p>
                    <ul className="space-y-2">
                      {feature.benefits.map((benefit, benefitIndex) => (
                        <li key={benefitIndex} className="flex items-center text-gray-300">
                          <CheckCircle className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
                          {benefit}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* Chart Types Section */}
      <section className="py-20 bg-gradient-to-r from-slate-800 to-purple-900">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 neon-text">
              Chart Types & Visualizations
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Choose from 50+ chart types and visualizations to tell your data story
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
            <div className="text-center cyber-card">
              <div className="text-4xl mb-4">📊</div>
              <h3 className="text-xl font-bold text-white mb-2">Bar Charts</h3>
              <p className="text-gray-300 text-sm">Perfect for comparing categories and values</p>
            </div>
            <div className="text-center cyber-card">
              <div className="text-4xl mb-4">📈</div>
              <h3 className="text-xl font-bold text-white mb-2">Line Charts</h3>
              <p className="text-gray-300 text-sm">Ideal for showing trends over time</p>
            </div>
            <div className="text-center cyber-card">
              <div className="text-4xl mb-4">🥧</div>
              <h3 className="text-xl font-bold text-white mb-2">Pie Charts</h3>
              <p className="text-gray-300 text-sm">Great for showing proportions and percentages</p>
            </div>
            <div className="text-center cyber-card">
              <div className="text-4xl mb-4">🗺️</div>
              <h3 className="text-xl font-bold text-white mb-2">Maps</h3>
              <p className="text-gray-300 text-sm">Visualize geographic data and distributions</p>
            </div>
            <div className="text-center cyber-card">
              <div className="text-4xl mb-4">📉</div>
              <h3 className="text-xl font-bold text-white mb-2">Scatter Plots</h3>
              <p className="text-gray-300 text-sm">Show relationships between two variables</p>
            </div>
            <div className="text-center cyber-card">
              <div className="text-4xl mb-4">📊</div>
              <h3 className="text-xl font-bold text-white mb-2">Heatmaps</h3>
              <p className="text-gray-300 text-sm">Display data density and patterns</p>
            </div>
            <div className="text-center cyber-card">
              <div className="text-4xl mb-4">📊</div>
              <h3 className="text-xl font-bold text-white mb-2">Gauges</h3>
              <p className="text-gray-300 text-sm">Show KPIs and performance metrics</p>
            </div>
            <div className="text-center cyber-card">
              <div className="text-4xl mb-4">📊</div>
              <h3 className="text-xl font-bold text-white mb-2">Custom Charts</h3>
              <p className="text-gray-300 text-sm">Create unique visualizations for your needs</p>
            </div>
          </div>
        </div>
      </section>
      {/* Pricing Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 neon-text">
              Simple Pricing
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Choose the plan that fits your data visualization needs. All plans include our core AI features.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {pricingPlans.map((plan, index) => (
              <div key={index} className={`cyber-card hologram-card relative ${plan.popular ? 'ring-2 ring-cyan-400' : ''}`}>
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-cyan-400 text-slate-900 px-4 py-1 rounded-full text-sm font-bold flex items-center">
                      <Star className="w-4 h-4 mr-1" />
                      Most Popular
                    </span>
                  </div>
                )}
                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                  <p className="text-gray-300 mb-4">{plan.description}</p>
                  <div className="mb-4">
                    <span className="text-5xl font-bold text-cyan-400">{plan.price}</span>
                    <span className="text-gray-300">{plan.period}</span>
                  </div>
                </div>
                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-gray-300">
                      <CheckCircle className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <a
                  href="/contact"
                  className={`w-full py-3 px-6 rounded-lg font-semibold text-center transition-all duration-300 ${
                    plan.popular
                      ? 'bg-cyan-400 text-slate-900 hover:bg-cyan-300'
                      : 'bg-gray-700 text-white hover:bg-gray-600'
                  }`}
                >
                  {plan.popular && (
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                      <span className="bg-cyan-400 text-slate-900 px-4 py-1 rounded-full text-sm font-bold">
                        Most Popular
                      </span>
                    </div>
                  )}
                  <div className="text-center mb-6">
                    <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                    <p className="text-gray-400 mb-4">{plan.description}</p>
                    <div className="flex items-baseline justify-center">
                      <span className="text-4xl font-bold text-cyan-400">{plan.price}</span>
                      <span className="text-gray-400 ml-1">{plan.period}</span>
                    </div>
                  </div>
                  <ul className="space-y-3 mb-8">
                    {plan.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center space-x-3">
                        <CheckCircle className="w-5 h-5 text-cyan-400 flex-shrink-0" />
                        <span className="text-gray-300">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <a
                    href="tel:+13024640950"
                    className={`w-full block text-center py-3 px-6 rounded-lg font-medium transition-all duration-300 ${
                      plan.popular
                        ? 'bg-cyan-400 text-slate-900 hover:bg-cyan-300'
                        : 'bg-slate-700 text-white hover:bg-slate-600'
                    }`}
                  >
                    Get Started
                  </a>
                </div>
              ))}
>>>>>>> cursor/enhance-app-with-new-services-and-futuristic-design-dcb5
            </div>
          </section>

          {/* CTA Section */}
          <section className="text-center py-16">
            <div className="bg-gradient-to-r from-indigo-900/50 to-purple-900/50 rounded-2xl p-8">
              <h2 className="text-3xl font-bold text-white mb-4">Ready to Get Started?</h2>
              <p className="text-gray-300 mb-6 text-lg">
                Contact us for a free consultation and discover how our services can help your business.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <a
                  href="tel:+13024640950"
                  className="flex items-center gap-2 bg-indigo-600 hover:bg-indigo-700 text-white px-6 py-3 rounded-lg font-semibold transition-all duration-300 hover:scale-105"
                >
                  <Phone className="w-5 h-5" />
                  +1 302 464 0950
                </a>
                <a
                  href="mailto:kleber@ziontechgroup.com"
                  className="flex items-center gap-2 bg-purple-600 hover:bg-purple-700 text-white px-6 py-3 rounded-lg font-semibold transition-all duration-300 hover:scale-105"
                >
                  <Mail className="w-5 h-5" />
                  kleber@ziontechgroup.com
                </a>
              </div>
<<<<<<< HEAD
            </div>
          </section>
        </div>
      </div>
      <Footer />
    </>
=======
            ))}
          </div>
        </div>
      </section>
      {/* Testimonials Section */}
      <section className="py-20 bg-gradient-to-r from-slate-800 to-purple-900">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 neon-text">
              What Our Customers Say
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Join thousands of data professionals who have transformed their analytics with AI
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="cyber-card hologram-card">
                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-300 mb-6 italic">"{testimonial.content}"</p>
                <div>
                  <div className="font-semibold text-white">{testimonial.name}</div>
                  <div className="text-sm text-gray-400">{testimonial.role}, {testimonial.company}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* CTA Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 neon-text">
            Ready to Transform Your Data Visualization?
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Start creating stunning data visualizations with AI today. 
            Join thousands of professionals already using our platform.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:+13024640950"
              className="cyber-button inline-flex items-center justify-center"
            >
              📞 Call Now: (302) 464-0950
            </a>
            <a
              href="/contact"
              className="cyber-button inline-flex items-center justify-center"
              style={{background: 'linear-gradient(45deg, #8b5cf6, #ec4899)'}}
            >
              Get Free Demo
            </a>
          </div>
          <div className="mt-8 text-sm text-gray-400">
            <p>✓ Free 14-day trial • ✓ No setup fees • ✓ Cancel anytime</p>
          </div>
        </div>
      </section>
    </div>
>>>>>>> cursor/enhance-app-with-new-services-and-futuristic-design-dcb5
  );
};

export default PageComponent;
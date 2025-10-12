import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { CheckCircle, ArrowRight, BarChart3, Zap, Star, Users, Clock, Shield, Globe, TrendingUp, Target, Database } from 'lucide-react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

const AIAnalyticsDashboardPage: React.FC = () => {
  const features = [
    {
      icon: <BarChart3 className="w-6 h-6 text-blue-500" />,
      title: 'Real-Time Dashboards',
      description: 'Monitor your business metrics in real-time with customizable, interactive dashboards that update automatically.'
    },
    {
      icon: <TrendingUp className="w-6 h-6 text-green-500" />,
      title: 'Predictive Analytics',
      description: 'Get AI-powered insights and forecasts to make data-driven decisions and anticipate market trends.'
    },
    {
      icon: <Target className="w-6 h-6 text-purple-500" />,
      title: 'Custom Reports',
      description: 'Generate detailed reports tailored to your business needs with automated scheduling and distribution.'
    },
    {
      icon: <Globe className="w-6 h-6 text-orange-500" />,
      title: 'Multi-Platform Integration',
      description: 'Connect with 100+ data sources including Google Analytics, Salesforce, HubSpot, and custom APIs.'
    },
    {
      icon: <Database className="w-6 h-6 text-red-500" />,
      title: 'Data Visualization',
      description: 'Transform complex data into beautiful, easy-to-understand charts, graphs, and interactive visualizations.'
    },
    {
      icon: <Shield className="w-6 h-6 text-cyan-500" />,
      title: 'Advanced Security',
      description: 'Enterprise-grade security with encryption, access controls, and compliance with GDPR and SOC 2 standards.'
    }
  ];

  const pricingPlans = [
    {
      name: 'Starter',
      price: '$79',
      period: '/month',
      description: 'Perfect for small businesses',
      features: [
        '5 dashboards',
        '10 data sources',
        'Basic analytics',
        'Email reports',
        'Standard support',
        '1 user'
      ],
      popular: false
    },
    {
      name: 'Professional',
      price: '$149',
      period: '/month',
      description: 'Ideal for growing teams',
      features: [
        'Unlimited dashboards',
        '50 data sources',
        'Advanced analytics',
        'Custom reports',
        'Priority support',
        '5 users',
        'API access',
        'Mobile app'
      ],
      popular: true
    },
    {
      name: 'Enterprise',
      price: '$299',
      period: '/month',
      description: 'For large organizations',
      features: [
        'Everything in Professional',
        'Unlimited data sources',
        'Custom AI models',
        'White-label solution',
        'Dedicated support',
        'Unlimited users',
        'Custom integrations',
        'SLA guarantee'
      ],
      popular: false
    }
  ];

  const integrations = [
    { name: 'Google Analytics', logo: 'GA' },
    { name: 'Salesforce', logo: 'SF' },
    { name: 'HubSpot', logo: 'HB' },
    { name: 'Shopify', logo: 'SP' },
    { name: 'Stripe', logo: 'ST' },
    { name: 'Mailchimp', logo: 'MC' },
    { name: 'Facebook Ads', logo: 'FB' },
    { name: 'LinkedIn', logo: 'LI' }
  ];

  const testimonials = [
    {
      name: 'David Kim',
      company: 'Marketing Director',
      content: 'The predictive analytics feature helped us increase our conversion rate by 40%. The insights are incredibly accurate.',
      rating: 5,
      avatar: 'DK'
    },
    {
      name: 'Lisa Wang',
      company: 'CEO, TechStart',
      content: 'Finally, a dashboard that actually makes sense of our data. The real-time updates are game-changing.',
      rating: 5,
      avatar: 'LW'
    },
    {
      name: 'James Rodriguez',
      company: 'Data Analyst',
      content: 'The custom report builder is incredibly powerful. I can create exactly what we need in minutes.',
      rating: 5,
      avatar: 'JR'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900">
      <Helmet>
        <title>AI Analytics Dashboard - Real-Time Business Intelligence | Zion Tech Group</title>
        <meta name="description" content="Transform your data into actionable insights with AI Analytics Dashboard. Real-time dashboards, predictive analytics, and custom reporting." />
        <meta name="keywords" content="AI analytics, business intelligence, data visualization, predictive analytics, dashboard, reporting" />
      </Helmet>

      <Navigation />

      {/* Hero Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <div className="inline-flex items-center bg-blue-500/20 rounded-full px-4 py-2 mb-6">
              <BarChart3 className="w-5 h-5 text-blue-400 mr-2" />
              <span className="text-blue-300 text-sm font-medium">Real-Time Business Intelligence</span>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              AI Analytics
              <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent"> Dashboard</span>
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Transform your data into actionable insights with our AI-powered analytics platform. 
              Get real-time dashboards, predictive analytics, and custom reporting that drives business growth.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="bg-gradient-to-r from-blue-500 to-cyan-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-blue-600 hover:to-cyan-700 transition-all duration-300 transform hover:scale-105"
              >
                Start Free Trial
              </Link>
              <Link
                to="#pricing"
                className="border border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-gray-900 transition-all duration-300"
              >
                View Pricing
              </Link>
            </div>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16">
            <div className="text-center">
              <div className="text-3xl font-bold text-white mb-2">1,800+</div>
              <div className="text-gray-400">Active Users</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-white mb-2">100+</div>
              <div className="text-gray-400">Integrations</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-white mb-2">4.8/5</div>
              <div className="text-gray-400">User Rating</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-white mb-2">99.9%</div>
              <div className="text-gray-400">Uptime</div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Powerful Analytics Features
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Everything you need to turn data into business insights
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div
                key={index}
                className="bg-white/10 backdrop-blur-lg rounded-xl p-8 border border-white/20 hover:bg-white/20 transition-all duration-300"
              >
                <div className="mb-6">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-bold text-white mb-4">{feature.title}</h3>
                <p className="text-gray-300">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Integrations Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white/5">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Connect Your Data Sources
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Seamlessly integrate with 100+ popular business tools and platforms
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-6">
            {integrations.map((integration, index) => (
              <div
                key={index}
                className="bg-white/10 backdrop-blur-lg rounded-lg p-6 border border-white/20 hover:bg-white/20 transition-all duration-300 text-center"
              >
                <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-lg flex items-center justify-center text-white font-bold mx-auto mb-3">
                  {integration.logo}
                </div>
                <div className="text-sm text-gray-300">{integration.name}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Choose Your Plan
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Start with our free trial and scale as your data needs grow
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {pricingPlans.map((plan, index) => (
              <div
                key={index}
                className={`bg-white/10 backdrop-blur-lg rounded-xl p-8 border ${
                  plan.popular ? 'border-blue-400 shadow-2xl shadow-blue-500/25' : 'border-white/20'
                }`}
              >
                {plan.popular && (
                  <div className="text-center mb-6">
                    <span className="bg-gradient-to-r from-blue-500 to-cyan-500 text-white px-4 py-2 rounded-full text-sm font-semibold">
                      Most Popular
                    </span>
                  </div>
                )}
                
                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                  <p className="text-gray-300 mb-4">{plan.description}</p>
                  <div className="flex items-baseline justify-center">
                    <span className="text-4xl font-bold text-white">{plan.price}</span>
                    <span className="text-gray-400 ml-2">{plan.period}</span>
                  </div>
                </div>

                <ul className="space-y-4 mb-8">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-gray-300">
                      <CheckCircle className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>

                <Link
                  to="/contact"
                  className={`w-full py-3 rounded-lg font-semibold text-center block transition-all duration-300 ${
                    plan.popular
                      ? 'bg-gradient-to-r from-blue-500 to-cyan-600 text-white hover:from-blue-600 hover:to-cyan-700'
                      : 'border border-white text-white hover:bg-white hover:text-gray-900'
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
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Trusted by Data-Driven Teams
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              See how businesses are transforming their data strategy
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-lg rounded-xl p-8 border border-white/20">
                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-300 mb-6 italic">"{testimonial.content}"</p>
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full flex items-center justify-center text-white font-bold mr-4">
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
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <div className="bg-gradient-to-r from-blue-500 to-cyan-600 rounded-2xl p-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Ready to Unlock Your Data's Potential?
            </h2>
            <p className="text-xl text-blue-100 mb-8">
              Start your free trial today and see the power of AI-driven analytics
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-all duration-300 transform hover:scale-105"
              >
                Start Free Trial
              </Link>
              <Link
                to="/micro-saas-services"
                className="border border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-all duration-300"
              >
                View All Tools
              </Link>
            </div>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default AIAnalyticsDashboardPage;
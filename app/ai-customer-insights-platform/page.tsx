import React from 'react';
import { CheckCircle, ArrowRight, BarChart3, Users, TrendingUp, MessageSquare, DollarSign, Clock, Star, Zap } from 'lucide-react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

const AICustomerInsightsPlatformPage: React.FC = () => {
  const features = [
    {
      title: 'Sentiment Analysis',
      description: 'AI-powered sentiment analysis across all customer touchpoints to understand emotions and satisfaction levels.',
      benefits: ['Real-time sentiment tracking', 'Multi-language support', 'Emotion detection', 'Trend analysis']
    },
    {
      title: 'Predictive Analytics',
      description: 'Predict customer behavior, churn risk, and lifetime value using advanced machine learning algorithms.',
      benefits: ['Churn prediction', 'LTV forecasting', 'Purchase probability', 'Behavioral patterns']
    },
    {
      title: 'Customer Journey Mapping',
      description: 'Visualize and analyze complete customer journeys to identify optimization opportunities.',
      benefits: ['Journey visualization', 'Touchpoint analysis', 'Conversion optimization', 'Experience scoring']
    },
    {
      title: 'Real-time Dashboards',
      description: 'Comprehensive dashboards with live customer insights and actionable recommendations.',
      benefits: ['Live data updates', 'Custom metrics', 'Alert system', 'Mobile access']
    }
  ];

  const pricingPlans = [
    {
      name: 'Starter',
      price: '$199',
      period: '/month',
      description: 'Perfect for small businesses and startups',
      features: [
        'Up to 10,000 customers',
        'Basic sentiment analysis',
        'Standard dashboards',
        'Email support',
        'API access',
        'Basic integrations'
      ],
      popular: false
    },
    {
      name: 'Professional',
      price: '$499',
      period: '/month',
      description: 'Ideal for growing businesses and agencies',
      features: [
        'Up to 100,000 customers',
        'Advanced analytics',
        'Custom dashboards',
        'Priority support',
        'Advanced integrations',
        'Predictive modeling',
        'Custom reports',
        'Team collaboration'
      ],
      popular: true
    },
    {
      name: 'Enterprise',
      price: '$1,299',
      period: '/month',
      description: 'For large organizations and enterprises',
      features: [
        'Unlimited customers',
        'AI model customization',
        'White-label solution',
        'Dedicated support',
        'Custom integrations',
        'Advanced security',
        'On-premise deployment',
        'SLA guarantee'
      ],
      popular: false
    }
  ];

  const testimonials = [
    {
      name: 'Rachel Kim',
      role: 'VP of Customer Success, RetailCorp',
      content: 'AI Customer Insights Platform helped us reduce churn by 35% and increase customer satisfaction by 50%. The predictive analytics are incredibly accurate.',
      rating: 5,
      avatar: 'RK'
    },
    {
      name: 'James Wilson',
      role: 'Head of Marketing, TechFlow',
      content: 'The sentiment analysis gives us real-time insights into how customers feel about our products. It has transformed our customer experience strategy.',
      rating: 5,
      avatar: 'JW'
    },
    {
      name: 'Maria Garcia',
      role: 'CEO, E-commerce Plus',
      content: 'Finally, a platform that makes sense of all our customer data. The journey mapping feature helped us identify critical improvement areas.',
      rating: 5,
      avatar: 'MG'
    }
  ];

  const stats = [
    { number: '500+', label: 'Companies' },
    { number: '50M+', label: 'Customers Analyzed' },
    { number: '35%', label: 'Avg. Churn Reduction' },
    { number: '50%', label: 'Satisfaction Increase' }
  ];

  const dataSources = [
    { name: 'CRM Systems', icon: '👥' },
    { name: 'Email Marketing', icon: '📧' },
    { name: 'Social Media', icon: '📱' },
    { name: 'Support Tickets', icon: '🎫' },
    { name: 'Website Analytics', icon: '📊' },
    { name: 'Mobile Apps', icon: '📲' },
    { name: 'Surveys', icon: '📝' },
    { name: 'Call Centers', icon: '☎️' }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-indigo-900 to-slate-900">
      <Helmet>
        <title>AI Customer Insights Platform - Zion Tech Group</title>
        <meta name="description" content="AI-powered customer insights platform with sentiment analysis, predictive analytics, and customer journey mapping. Transform customer data into actionable business intelligence." />
        <meta name="keywords" content="AI customer insights, sentiment analysis, predictive analytics, customer journey mapping, customer intelligence, churn prediction" />
      </Helmet>
      
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-20 px-4 py-20">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <div className="inline-flex items-center bg-gradient-to-r from-indigo-500 to-purple-600 text-white px-6 py-2 rounded-full text-sm font-semibold mb-6">
              <Zap className="w-4 h-4 mr-2" />
              AI-Powered Customer Intelligence
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              AI Customer Insights Platform
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
              Transform your customer data into actionable insights with AI-powered sentiment analysis, 
              predictive analytics, and comprehensive customer journey mapping. Make data-driven decisions that drive growth.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                to="/contact" 
                className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-indigo-700 hover:to-purple-700 transition-all duration-300 flex items-center justify-center"
              >
                Start Free Trial
                <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
              <Link 
                to="/demo" 
                className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white/10 transition-colors"
              >
                Watch Demo
              </Link>
            </div>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-20">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-white mb-2">{stat.number}</div>
                <div className="text-gray-300 text-sm">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Advanced AI Capabilities</h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Powerful AI-driven insights to understand and predict customer behavior
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-20">
            {features.map((feature, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20 hover:bg-white/15 transition-all duration-300">
                <h3 className="text-xl font-semibold text-white mb-4">{feature.title}</h3>
                <p className="text-gray-300 mb-6">{feature.description}</p>
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
      </section>

      {/* Data Sources Section */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Connect All Your Data Sources</h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Integrate with your existing tools and platforms for comprehensive insights
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-6">
            {dataSources.map((source, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-lg rounded-xl p-6 border border-white/20 text-center hover:bg-white/15 transition-all duration-300">
                <div className="text-2xl mb-2">{source.icon}</div>
                <div className="text-sm text-white font-medium">{source.name}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Flexible Pricing Plans</h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Choose the plan that fits your customer data volume and analysis needs
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {pricingPlans.map((plan, index) => (
              <div key={index} className={`bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20 hover:bg-white/15 transition-all duration-300 relative ${plan.popular ? 'ring-2 ring-indigo-500' : ''}`}>
                {plan.popular && (
                  <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                    <span className="bg-gradient-to-r from-indigo-500 to-purple-600 text-white px-4 py-1 rounded-full text-sm font-semibold">
                      Most Popular
                    </span>
                  </div>
                )}
                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                  <p className="text-gray-300 text-sm mb-4">{plan.description}</p>
                  <div className="flex items-baseline justify-center">
                    <span className="text-4xl font-bold text-white">{plan.price}</span>
                    <span className="text-gray-300 ml-1">{plan.period}</span>
                  </div>
                </div>
                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-sm text-gray-300">
                      <CheckCircle className="w-4 h-4 text-green-400 mr-3 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <Link 
                  to="/contact" 
                  className={`w-full px-6 py-3 rounded-lg font-semibold transition-all duration-300 flex items-center justify-center ${
                    plan.popular 
                      ? 'bg-gradient-to-r from-indigo-600 to-purple-600 text-white hover:from-indigo-700 hover:to-purple-700' 
                      : 'bg-white/20 text-white hover:bg-white/30'
                  }`}
                >
                  Get Started
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Trusted by Industry Leaders</h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              See how companies are transforming their customer experience with AI insights
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-indigo-500 to-purple-600 rounded-full flex items-center justify-center text-white font-bold mr-4">
                    {testimonial.avatar}
                  </div>
                  <div>
                    <div className="font-semibold text-white">{testimonial.name}</div>
                    <div className="text-sm text-gray-400">{testimonial.role}</div>
                  </div>
                </div>
                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-300 italic">"{testimonial.content}"</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center">
            <div className="bg-gradient-to-r from-indigo-600 to-purple-600 rounded-3xl p-12">
              <h2 className="text-4xl font-bold text-white mb-4">Ready to Unlock Customer Insights?</h2>
              <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
                Start your free trial today and discover the power of AI-driven customer intelligence.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link 
                  to="/contact" 
                  className="bg-white text-indigo-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
                >
                  Start Free Trial
                </Link>
                <Link 
                  to="/demo" 
                  className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white/10 transition-colors"
                >
                  Schedule Demo
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default AICustomerInsightsPlatformPage;
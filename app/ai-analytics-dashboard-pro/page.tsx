import React from 'react';
import { CheckCircle, ArrowRight, BarChart3, TrendingUp, Target, Zap, DollarSign, Star, Clock, Database, Brain, Globe } from 'lucide-react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';

const AIAnalyticsDashboardProPage: React.FC = () => {
  const features = [
    {
      icon: <Brain className="w-6 h-6 text-blue-500" />,
      title: 'AI-Powered Insights',
      description: 'Get intelligent recommendations and predictions based on your data patterns and trends'
    },
    {
      icon: <BarChart3 className="w-6 h-6 text-green-500" />,
      title: 'Real-Time Analytics',
      description: 'Monitor your business metrics in real-time with live dashboards and alerts'
    },
    {
      icon: <Target className="w-6 h-6 text-purple-500" />,
      title: 'Custom Dashboards',
      description: 'Create personalized dashboards tailored to your specific business needs and KPIs'
    },
    {
      icon: <Zap className="w-6 h-6 text-orange-500" />,
      title: 'Automated Reports',
      description: 'Generate and schedule automated reports with AI-generated insights and recommendations'
    }
  ];

  const pricingPlans = [
    {
      name: 'Starter',
      price: '$79',
      period: '/month',
      description: 'Perfect for small businesses',
      features: [
        '5 data sources',
        'Basic dashboards',
        'Standard reports',
        'Email support',
        '1 user',
        '30-day data retention'
      ],
      popular: false
    },
    {
      name: 'Professional',
      price: '$199',
      period: '/month',
      description: 'Ideal for growing businesses',
      features: [
        '20 data sources',
        'Advanced dashboards',
        'AI-powered insights',
        'Priority support',
        '5 users',
        '1-year data retention',
        'Custom integrations',
        'API access'
      ],
      popular: true
    },
    {
      name: 'Enterprise',
      price: '$499',
      period: '/month',
      description: 'For large organizations',
      features: [
        'Unlimited data sources',
        'White-label dashboards',
        'Custom AI models',
        'Dedicated support',
        'Unlimited users',
        'Unlimited data retention',
        'Advanced integrations',
        'SLA guarantee'
      ],
      popular: false
    }
  ];

  const integrations = [
    {
      title: 'Google Analytics',
      description: 'Track website performance and user behavior',
      icon: <Globe className="w-8 h-8 text-blue-500" />
    },
    {
      title: 'Salesforce CRM',
      description: 'Monitor sales pipeline and customer data',
      icon: <Database className="w-8 h-8 text-green-500" />
    },
    {
      title: 'Social Media',
      description: 'Analyze social media engagement and reach',
      icon: <BarChart3 className="w-8 h-8 text-purple-500" />
    },
    {
      title: 'E-commerce Platforms',
      description: 'Track sales, inventory, and customer metrics',
      icon: <TrendingUp className="w-8 h-8 text-orange-500" />
    }
  ];

  const testimonials = [
    {
      name: 'Robert Kim',
      company: 'Marketing Director',
      content: 'The AI insights helped us identify a 25% increase opportunity in our conversion funnel. Revenue is up 40%.',
      rating: 5,
      avatar: 'RK'
    },
    {
      name: 'Sarah Williams',
      company: 'CEO, Tech Startup',
      content: 'Finally, a dashboard that tells us what to do, not just what happened. The predictions are incredibly accurate.',
      rating: 5,
      avatar: 'SW'
    },
    {
      name: 'Michael Davis',
      company: 'Data Analyst',
      content: 'Setup was seamless. We connected 15 data sources in under an hour and had actionable insights immediately.',
      rating: 5,
      avatar: 'MD'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-indigo-900 to-slate-900">
      <Helmet>
        <title>AI Analytics Dashboard Pro - Zion Tech Group</title>
        <meta name="description" content="AI-powered analytics dashboard with real-time insights, predictive analytics, and automated reporting. Transform your data into actionable business intelligence." />
        <meta name="keywords" content="AI analytics, business intelligence, data dashboard, predictive analytics, Zion Tech Group" />
      </Helmet>

      {/* Hero Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            AI Analytics Dashboard
            <span className="bg-gradient-to-r from-indigo-400 to-cyan-400 bg-clip-text text-transparent"> Pro</span>
            <br />
            That Predicts the Future
          </h1>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Stop reacting to the past. Our AI analytics dashboard predicts trends, identifies opportunities, 
            and provides actionable insights to drive your business forward.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="bg-gradient-to-r from-indigo-500 to-cyan-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-indigo-600 hover:to-cyan-700 transition-all duration-300 transform hover:scale-105"
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
      </section>

      {/* Features Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Powerful AI Analytics
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Everything you need to turn data into actionable business intelligence
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div
                key={index}
                className="bg-white/10 backdrop-blur-lg rounded-xl p-8 border border-white/20 hover:bg-white/20 transition-all duration-300 group"
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
              Connect All Your Data Sources
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Seamlessly integrate with 100+ popular business tools and platforms
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {integrations.map((integration, index) => (
              <div
                key={index}
                className="bg-white/10 backdrop-blur-lg rounded-xl p-8 border border-white/20 hover:bg-white/20 transition-all duration-300 group"
              >
                <div className="mb-6">
                  {integration.icon}
                </div>
                <h3 className="text-xl font-bold text-white mb-4">{integration.title}</h3>
                <p className="text-gray-300">{integration.description}</p>
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
              Simple, Transparent Pricing
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Choose the plan that fits your needs. All plans include a 14-day free trial.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {pricingPlans.map((plan, index) => (
              <div
                key={index}
                className={`bg-white/10 backdrop-blur-lg rounded-xl p-8 border transition-all duration-300 group ${
                  plan.popular 
                    ? 'border-indigo-500 bg-white/20 scale-105' 
                    : 'border-white/20 hover:bg-white/20'
                }`}
              >
                {plan.popular && (
                  <div className="bg-gradient-to-r from-indigo-500 to-cyan-600 text-white px-4 py-2 rounded-full text-sm font-semibold text-center mb-6">
                    Most Popular
                  </div>
                )}
                
                <div className="text-center mb-6">
                  <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                  <p className="text-gray-300 mb-4">{plan.description}</p>
                  <div className="flex items-baseline justify-center">
                    <span className="text-4xl font-bold text-white">{plan.price}</span>
                    <span className="text-gray-400 ml-1">{plan.period}</span>
                  </div>
                </div>

                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center">
                      <CheckCircle className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" />
                      <span className="text-gray-300">{feature}</span>
                    </li>
                  ))}
                </ul>

                <Link
                  to="/contact"
                  className={`w-full py-3 rounded-lg font-semibold text-center block transition-all duration-300 group-hover:scale-105 ${
                    plan.popular
                      ? 'bg-gradient-to-r from-indigo-500 to-cyan-600 text-white hover:from-indigo-600 hover:to-cyan-700'
                      : 'bg-white text-gray-900 hover:bg-gray-100'
                  }`}
                >
                  Start Free Trial
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
              Trusted by 3,000+ Businesses
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              See what our customers say about their results
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-lg rounded-xl p-8 border border-white/20">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-indigo-500 to-cyan-600 rounded-full flex items-center justify-center text-white font-bold mr-4">
                    {testimonial.avatar}
                  </div>
                  <div>
                    <p className="font-semibold text-white">{testimonial.name}</p>
                    <p className="text-gray-400 text-sm">{testimonial.company}</p>
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
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <div className="bg-gradient-to-r from-indigo-500 to-cyan-600 rounded-2xl p-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Ready to Predict Your Success?
            </h2>
            <p className="text-xl text-indigo-100 mb-8">
              Join thousands of businesses using AI analytics to make data-driven decisions and stay ahead of the competition
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="bg-white text-indigo-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-all duration-300 transform hover:scale-105"
              >
                Start Your Free Trial
              </Link>
              <Link
                to="#pricing"
                className="border border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-indigo-600 transition-all duration-300"
              >
                View All Plans
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AIAnalyticsDashboardProPage;
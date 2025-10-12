import React from 'react';
import { CheckCircle, ArrowRight, BarChart3, Users, TrendingUp, Target, Zap, Shield, Globe, DollarSign } from 'lucide-react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';

const AICustomerAnalyticsPage: React.FC = () => {
  const features = [
    {
      icon: <BarChart3 className="w-6 h-6 text-blue-500" />,
      title: 'Real-time Analytics',
      description: 'Monitor customer behavior, engagement, and satisfaction in real-time with advanced AI-powered dashboards.'
    },
    {
      icon: <Users className="w-6 h-6 text-green-500" />,
      title: 'Customer Segmentation',
      description: 'Automatically segment customers based on behavior, preferences, and value using machine learning algorithms.'
    },
    {
      icon: <TrendingUp className="w-6 h-6 text-purple-500" />,
      title: 'Predictive Insights',
      description: 'Forecast customer lifetime value, churn probability, and purchase likelihood with 95% accuracy.'
    },
    {
      icon: <Target className="w-6 h-6 text-orange-500" />,
      title: 'Personalization Engine',
      description: 'Create hyper-personalized experiences and recommendations based on individual customer profiles.'
    },
    {
      icon: <Zap className="w-6 h-6 text-red-500" />,
      title: 'Automated Reporting',
      description: 'Generate comprehensive reports and insights automatically, saving hours of manual analysis.'
    },
    {
      icon: <Shield className="w-6 h-6 text-cyan-500" />,
      title: 'Data Privacy',
      description: 'Enterprise-grade security and privacy protection with GDPR and CCPA compliance built-in.'
    }
  ];

  const useCases = [
    {
      title: 'E-commerce Optimization',
      description: 'Increase conversion rates by 25% with personalized product recommendations and targeted marketing campaigns.',
      icon: <DollarSign className="w-8 h-8 text-green-500" />
    },
    {
      title: 'Customer Retention',
      description: 'Reduce churn by 40% with early warning systems and proactive customer engagement strategies.',
      icon: <Users className="w-8 h-8 text-blue-500" />
    },
    {
      title: 'Marketing ROI',
      description: 'Improve marketing ROI by 60% with precise targeting and automated campaign optimization.',
      icon: <Target className="w-8 h-8 text-purple-500" />
    },
    {
      title: 'Sales Forecasting',
      description: 'Predict sales trends with 90% accuracy to optimize inventory and resource planning.',
      icon: <TrendingUp className="w-8 h-8 text-orange-500" />
    }
  ];

  const pricingPlans = [
    {
      name: 'Starter',
      price: '$29',
      period: '/month',
      description: 'Perfect for small businesses',
      features: [
        'Up to 10,000 customers',
        'Basic analytics dashboard',
        'Customer segmentation',
        'Email support',
        'Standard reports'
      ],
      popular: false
    },
    {
      name: 'Professional',
      price: '$79',
      period: '/month',
      description: 'Ideal for growing businesses',
      features: [
        'Up to 100,000 customers',
        'Advanced AI insights',
        'Predictive analytics',
        'Custom dashboards',
        'Priority support',
        'API access'
      ],
      popular: true
    },
    {
      name: 'Enterprise',
      price: '$199',
      period: '/month',
      description: 'For large organizations',
      features: [
        'Unlimited customers',
        'Full AI suite',
        'Custom models',
        'White-label options',
        'Dedicated support',
        'Advanced integrations'
      ],
      popular: false
    }
  ];

  const testimonials = [
    {
      name: 'Jennifer Walsh',
      company: 'Retail Chain',
      content: 'AI Customer Analytics helped us increase our conversion rate by 28% in just 3 months. The insights are incredibly actionable.',
      rating: 5
    },
    {
      name: 'Michael Torres',
      company: 'SaaS Company',
      content: 'The predictive churn analysis saved us thousands of customers. We can now intervene before customers leave.',
      rating: 5
    },
    {
      name: 'Lisa Park',
      company: 'E-commerce Store',
      content: 'Personalization has never been easier. Our customers love the tailored experience and our sales have skyrocketed.',
      rating: 5
    }
  ];

  const stats = [
    { number: '25%', label: 'Average Conversion Increase' },
    { number: '40%', label: 'Churn Reduction' },
    { number: '60%', label: 'Marketing ROI Improvement' },
    { number: '95%', label: 'Prediction Accuracy' }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Helmet>
        <title>AI Customer Analytics - Zion Tech Group</title>
        <meta name="description" content="Advanced AI-powered customer analytics platform with predictive insights, personalization, and real-time segmentation. Boost conversion rates by 25%." />
        <meta name="keywords" content="customer analytics, AI insights, customer segmentation, predictive analytics, personalization, marketing automation" />
      </Helmet>

      {/* Hero Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            AI Customer
            <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent"> Analytics</span>
            <br />
            Platform
          </h1>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Unlock the power of your customer data with AI-driven insights, predictive analytics, 
            and personalized experiences that drive growth and retention.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="bg-gradient-to-r from-purple-500 to-pink-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-purple-600 hover:to-pink-700 transition-all duration-300 transform hover:scale-105"
            >
              Start Free Trial
            </Link>
            <Link
              to="#features"
              className="border border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-gray-900 transition-all duration-300"
            >
              Explore Features
            </Link>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
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
      <section id="features" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Powerful AI Features
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Harness advanced artificial intelligence to understand and engage your customers like never before
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div
                key={index}
                className="bg-white/10 backdrop-blur-lg rounded-xl p-8 border border-white/20 hover:bg-white/20 transition-all duration-300 group"
              >
                <div className="mb-4">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-bold text-white mb-3">{feature.title}</h3>
                <p className="text-gray-300">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Use Cases Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white/5">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Real Business Impact
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              See how AI Customer Analytics transforms businesses across industries
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {useCases.map((useCase, index) => (
              <div
                key={index}
                className="bg-white/10 backdrop-blur-lg rounded-xl p-8 border border-white/20 hover:bg-white/20 transition-all duration-300 group"
              >
                <div className="flex items-start mb-4">
                  <div className="flex-shrink-0 mr-4">
                    {useCase.icon}
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white mb-3">{useCase.title}</h3>
                    <p className="text-gray-300">{useCase.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Choose Your Plan
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Start with a free trial and scale as your business grows
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {pricingPlans.map((plan, index) => (
              <div
                key={index}
                className={`bg-white/10 backdrop-blur-lg rounded-xl p-8 border border-white/20 hover:bg-white/20 transition-all duration-300 relative ${
                  plan.popular ? 'ring-2 ring-purple-500' : ''
                }`}
              >
                {plan.popular && (
                  <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                    <span className="bg-gradient-to-r from-purple-500 to-pink-600 text-white px-4 py-1 rounded-full text-sm font-semibold">
                      Most Popular
                    </span>
                  </div>
                )}
                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                  <p className="text-gray-300 mb-4">{plan.description}</p>
                  <div className="flex items-baseline justify-center">
                    <span className="text-4xl font-bold text-white">{plan.price}</span>
                    <span className="text-gray-400 ml-1">{plan.period}</span>
                  </div>
                </div>
                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-gray-300">
                      <CheckCircle className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <Link
                  to="/contact"
                  className={`w-full py-3 rounded-lg font-semibold text-center block transition-all duration-300 ${
                    plan.popular
                      ? 'bg-gradient-to-r from-purple-500 to-pink-600 text-white hover:from-purple-600 hover:to-pink-700'
                      : 'bg-white/20 text-white hover:bg-white/30'
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
              Success Stories
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              See how businesses are transforming with AI Customer Analytics
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-lg rounded-xl p-8 border border-white/20">
                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <span key={i} className="text-yellow-400 text-xl">★</span>
                  ))}
                </div>
                <p className="text-gray-300 mb-6 italic">"{testimonial.content}"</p>
                <div>
                  <p className="font-semibold text-white">{testimonial.name}</p>
                  <p className="text-gray-400 text-sm">{testimonial.company}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <div className="bg-gradient-to-r from-purple-500 to-pink-600 rounded-2xl p-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Ready to Unlock Your Customer Data?
            </h2>
            <p className="text-xl text-purple-100 mb-8">
              Start your free 14-day trial and see the power of AI Customer Analytics
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="bg-white text-purple-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-all duration-300 transform hover:scale-105"
              >
                Start Free Trial
              </Link>
              <Link
                to="/micro-saas-services"
                className="border border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-purple-600 transition-all duration-300"
              >
                View All Tools
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AICustomerAnalyticsPage;
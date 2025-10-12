import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Brain, BarChart3, Users, TrendingUp, Target, Zap, CheckCircle, ArrowRight, Star, Shield } from 'lucide-react';
import { Link } from 'react-router-dom';

const AICustomerInsightsPage: React.FC = () => {
  const features = [
    {
      icon: <Brain className="w-5 h-5 ml-2" />,
      title: 'AI-Powered Analytics',
      description: 'Advanced machine learning algorithms analyze customer behavior patterns and predict future trends with 95% accuracy.',
      price: '$299/month',
      benefits: ['Real-time insights', 'Predictive analytics', 'Behavioral analysis', 'Trend forecasting']
    },
    {
      icon: <BarChart3 className="w-5 h-5 ml-2" />,
      title: 'Customer Segmentation',
      description: 'Automatically segment customers based on behavior, preferences, and value with dynamic clustering algorithms.',
      price: '$199/month',
      benefits: ['Dynamic segmentation', 'Behavioral clustering', 'Value-based grouping', 'Custom criteria']
    },
    {
      icon: <Users className="w-5 h-5 ml-2" />,
      title: 'Customer Journey Mapping',
      description: 'Visualize complete customer journeys across all touchpoints with interactive journey maps and conversion funnels.',
      price: '$249/month',
      benefits: ['Journey visualization', 'Touchpoint analysis', 'Conversion tracking', 'Optimization insights']
    },
    {
      icon: <TrendingUp className="w-5 h-5 ml-2" />,
      title: 'Churn Prediction',
      description: 'Predict customer churn with 92% accuracy using advanced ML models and proactive retention strategies.',
      price: '$179/month',
      benefits: ['Churn prediction', 'Risk scoring', 'Retention strategies', 'Early warning alerts']
    },
    {
      icon: <Target className="w-5 h-5 ml-2" />,
      title: 'Personalization Engine',
      description: 'Create hyper-personalized experiences with AI-driven content recommendations and dynamic pricing.',
      price: '$399/month',
      benefits: ['Content personalization', 'Dynamic pricing', 'Recommendation engine', 'A/B testing']
    },
    {
      icon: <Zap className="w-5 h-5 ml-2" />,
      title: 'Real-time Insights',
      description: 'Get instant customer insights with real-time data processing and live dashboard updates.',
      price: '$149/month',
      benefits: ['Live dashboards', 'Real-time alerts', 'Instant notifications', 'Live data streams']
    }
  ];

  const pricingPlans = [
    {
      name: 'Starter',
      price: '$99',
      period: '/month',
      description: 'Perfect for small businesses',
      features: [
        'Up to 1,000 customers',
        'Basic analytics',
        'Email support',
        'Standard reports',
        '1 user account'
      ],
      popular: false
    },
    {
      name: 'Professional',
      price: '$299',
      period: '/month',
      description: 'Ideal for growing companies',
      features: [
        'Up to 10,000 customers',
        'Advanced AI features',
        'Priority support',
        'Custom dashboards',
        'Up to 10 users',
        'API access'
      ],
      popular: true
    },
    {
      name: 'Enterprise',
      price: '$799',
      period: '/month',
      description: 'For large organizations',
      features: [
        'Unlimited customers',
        'Custom AI models',
        'White-label solution',
        'Dedicated support',
        'Unlimited users',
        'SLA guarantee'
      ],
      popular: false
    }
  ];

  const testimonials = [
    {
      name: 'Sarah Johnson',
      company: 'E-commerce Brand',
      content: 'AI Customer Insights helped us increase customer retention by 40%. The churn prediction is incredibly accurate.',
      rating: 5
    },
    {
      name: 'Michael Chen',
      company: 'SaaS Startup',
      content: 'The personalization engine transformed our user experience. Our conversion rates improved by 60%.',
      rating: 5
    },
    {
      name: 'Emily Rodriguez',
      company: 'Retail Chain',
      content: 'The customer journey mapping gave us insights we never had before. Our marketing ROI improved dramatically.',
      rating: 5
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20">
      <Helmet>
        <title>AI Customer Insights - Advanced Customer Analytics | Zion Tech Group</title>
        <meta name="description" content="Transform your customer understanding with AI-powered insights. Customer segmentation, journey mapping, churn prediction, and personalization. Get started today." />
        <meta name="keywords" content="AI customer insights, customer analytics, segmentation, journey mapping, churn prediction, personalization" />
      </Helmet>

      {/* Hero Section */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <div className="flex items-center justify-center mb-6">
            <Brain className="w-8 h-8 text-purple-400 mr-3" />
            <span className="text-purple-400 font-semibold">AI-Powered Customer Intelligence</span>
          </div>
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
            AI Customer Insights
          </h1>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Transform your customer understanding with AI-powered insights. Get customer segmentation, 
            journey mapping, churn prediction, and personalization in one powerful platform.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="bg-gradient-to-r from-purple-500 to-pink-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-purple-600 hover:to-pink-700 transition-all duration-300 flex items-center justify-center"
            >
              Get Free Demo
              <ArrowRight className="w-5 h-5 ml-2" />
            </Link>
            <Link to="#features" className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white/10 transition-colors">
              Explore Features
            </Link>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">Comprehensive Customer Intelligence</h2>
            <p className="text-xl text-gray-300">Everything you need to understand and engage your customers</p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="bg-gradient-to-br from-slate-800/50 to-purple-900/30 rounded-xl p-6 border border-purple-500/20 hover:border-purple-400/40 transition-all duration-300">
                <div className="flex items-center mb-4">
                  {feature.icon}
                  <h3 className="text-xl font-semibold text-white ml-3">{feature.title}</h3>
                </div>
                <p className="text-gray-300 mb-4">{feature.description}</p>
                <div className="text-2xl font-bold text-purple-400 mb-4">{feature.price}</div>
                <ul className="space-y-2">
                  {feature.benefits.map((benefit, benefitIndex) => (
                    <li key={benefitIndex} className="flex items-center text-gray-300">
                      <CheckCircle className="w-4 h-4 text-green-400 mr-2" />
                      {benefit}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">Choose Your Plan</h2>
            <p className="text-xl text-gray-300">Flexible pricing for businesses of all sizes</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {pricingPlans.map((plan, index) => (
              <div key={index} className={`bg-gradient-to-br from-slate-800/50 to-purple-900/30 rounded-xl p-8 border transition-all duration-300 ${
                plan.popular 
                  ? 'border-purple-400/40 scale-105 shadow-2xl shadow-purple-500/20' 
                  : 'border-purple-500/20 hover:border-purple-400/40'
              }`}>
                {plan.popular && (
                  <div className="flex items-center justify-center mb-4 text-purple-400">
                    <Star className="w-5 h-5 mr-2" />
                    Most Popular
                  </div>
                )}
                <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                <p className="text-gray-300 mb-4">{plan.description}</p>
                <div className="mb-6">
                  <span className="text-4xl font-bold text-white">{plan.price}</span>
                  <span className="text-gray-300">{plan.period}</span>
                </div>
                <ul className="space-y-2 mb-8">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-gray-300">
                      <CheckCircle className="w-4 h-4 text-green-400 mr-2" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <Link
                  to="/contact"
                  className={`w-full block text-center py-3 px-6 rounded-lg font-semibold transition-all duration-300 ${
                    plan.popular
                      ? 'bg-gradient-to-r from-purple-500 to-pink-600 text-white hover:from-purple-600 hover:to-pink-700'
                      : 'border-2 border-purple-400 text-purple-400 hover:bg-purple-400/10'
                  }`}
                >
                  Get Started
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">Trusted by Customer-Centric Companies</h2>
            <p className="text-xl text-gray-300">See how AI Customer Insights transforms customer understanding</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-slate-800/50 rounded-xl p-6 border border-slate-700">
                <div className="flex mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-300 mb-4">"{testimonial.content}"</p>
                <div>
                  <div className="font-semibold text-white">{testimonial.name}</div>
                  <div className="text-gray-400">{testimonial.company}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-white mb-4">Ready to Transform Your Customer Understanding?</h2>
          <p className="text-xl text-gray-300 mb-8">
            Join thousands of companies who are already using AI Customer Insights to build better customer relationships.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/contact" className="bg-gradient-to-r from-purple-500 to-pink-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-purple-600 hover:to-pink-700 transition-all duration-300">
              Get Free Demo
            </Link>
            <Link to="/about" className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white/10 transition-colors">
              Learn More
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AICustomerInsightsPage;
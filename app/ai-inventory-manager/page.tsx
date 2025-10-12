import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Package, TrendingUp, BarChart3, AlertTriangle, Zap, CheckCircle, ArrowRight, Star, Brain, Database, Shield, DollarSign } from 'lucide-react';
import { Link } from 'react-router-dom';

const AIInventoryManagerPage: React.FC = () => {
  const features = [
    {
      icon: <Brain className="w-5 h-5 ml-2" />,
      title: 'AI Demand Forecasting',
      description: 'Predict inventory needs with 95% accuracy using machine learning algorithms that analyze sales patterns, seasonality, and market trends.',
      benefits: ['95% accuracy rate', 'Seasonal predictions', 'Market trend analysis', 'Automated reorder points']
    },
    {
      icon: <Package className="w-5 h-5 ml-2" />,
      title: 'Smart Stock Optimization',
      description: 'AI automatically optimizes stock levels to minimize carrying costs while preventing stockouts and overstock situations.',
      benefits: ['Cost optimization', 'Stockout prevention', 'Overstock reduction', 'Dynamic reordering']
    },
    {
      icon: <BarChart3 className="w-5 h-5 ml-2" />,
      title: 'Real-time Analytics',
      description: 'Comprehensive dashboards with real-time inventory insights, performance metrics, and predictive analytics.',
      benefits: ['Live dashboards', 'Performance metrics', 'Trend analysis', 'Custom reports']
    },
    {
      icon: <AlertTriangle className="w-5 h-5 ml-2" />,
      title: 'Intelligent Alerts',
      description: 'Smart notifications for low stock, expiring items, unusual demand patterns, and supply chain disruptions.',
      benefits: ['Low stock alerts', 'Expiry warnings', 'Anomaly detection', 'Supply chain monitoring']
    },
    {
      icon: <Zap className="w-5 h-5 ml-2" />,
      title: 'Automated Reordering',
      description: 'AI-powered automatic purchase orders based on demand forecasts, supplier performance, and cost optimization.',
      benefits: ['Auto purchase orders', 'Supplier optimization', 'Cost analysis', 'Lead time tracking']
    },
    {
      icon: <Shield className="w-5 h-5 ml-2" />,
      title: 'Multi-location Sync',
      description: 'Seamlessly manage inventory across multiple warehouses, stores, and distribution centers with real-time synchronization.',
      benefits: ['Multi-warehouse support', 'Real-time sync', 'Location tracking', 'Transfer management']
    }
  ];

  const pricingPlans = [
    {
      name: 'Starter',
      price: '$99',
      period: '/month',
      description: 'Perfect for small businesses',
      features: [
        'Up to 1,000 SKUs',
        'Basic AI forecasting',
        'Standard analytics',
        'Email support',
        'Single location'
      ],
      popular: false
    },
    {
      name: 'Professional',
      price: '$299',
      period: '/month',
      description: 'Ideal for growing companies',
      features: [
        'Up to 10,000 SKUs',
        'Advanced AI features',
        'Real-time analytics',
        'Priority support',
        'Multi-location support',
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
        'Unlimited SKUs',
        'Custom AI models',
        'White-label solution',
        'Dedicated support',
        'Advanced integrations',
        'SLA guarantee'
      ],
      popular: false
    }
  ];

  const testimonials = [
    {
      name: 'Sarah Johnson',
      company: 'Retail Chain',
      content: 'AI Inventory Manager reduced our stockouts by 80% and cut carrying costs by 30%. The AI forecasting is incredibly accurate.',
      rating: 5
    },
    {
      name: 'Michael Chen',
      company: 'Manufacturing Co',
      content: 'The automated reordering feature saved us countless hours. We never run out of critical components anymore.',
      rating: 5
    },
    {
      name: 'Emily Rodriguez',
      company: 'E-commerce Store',
      content: 'The real-time analytics give us instant visibility into our inventory performance. Decision-making has never been easier.',
      rating: 5
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20">
      <Helmet>
        <title>AI Inventory Manager - Intelligent Inventory Management | Zion Tech Group</title>
        <meta name="description" content="Transform your inventory management with AI-powered forecasting, optimization, and automation. Reduce costs and prevent stockouts. Get started today." />
        <meta name="keywords" content="AI inventory management, demand forecasting, stock optimization, inventory analytics, supply chain" />
      </Helmet>

      {/* Hero Section */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <div className="flex items-center justify-center mb-6">
            <Package className="w-8 h-8 text-blue-400 mr-3" />
            <span className="text-blue-400 font-semibold">AI-Powered Inventory Management</span>
          </div>
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
            AI Inventory Manager
          </h1>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Transform your inventory management with AI-powered forecasting, optimization, and automation. 
            Reduce costs, prevent stockouts, and optimize your supply chain.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="bg-gradient-to-r from-blue-500 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-blue-600 hover:to-purple-700 transition-all duration-300 flex items-center justify-center"
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
            <h2 className="text-4xl font-bold text-white mb-4">Intelligent Inventory Features</h2>
            <p className="text-xl text-gray-300">Everything you need to optimize your inventory management</p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="bg-gradient-to-br from-slate-800/50 to-purple-900/30 rounded-xl p-6 border border-blue-500/20 hover:border-blue-400/40 transition-all duration-300">
                <div className="flex items-center mb-4">
                  {feature.icon}
                  <h3 className="text-xl font-semibold text-white ml-3">{feature.title}</h3>
                </div>
                <p className="text-gray-300 mb-4">{feature.description}</p>
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
                  ? 'border-blue-400/40 scale-105 shadow-2xl shadow-blue-500/20' 
                  : 'border-blue-500/20 hover:border-blue-400/40'
              }`}>
                {plan.popular && (
                  <div className="flex items-center justify-center mb-4 text-blue-400">
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
                      ? 'bg-gradient-to-r from-blue-500 to-purple-600 text-white hover:from-blue-600 hover:to-purple-700'
                      : 'border-2 border-blue-400 text-blue-400 hover:bg-blue-400/10'
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
            <h2 className="text-4xl font-bold text-white mb-4">Trusted by Inventory Managers</h2>
            <p className="text-xl text-gray-300">See how AI Inventory Manager transforms inventory operations</p>
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
          <h2 className="text-4xl font-bold text-white mb-4">Ready to Transform Your Inventory Management?</h2>
          <p className="text-xl text-gray-300 mb-8">
            Join thousands of businesses who are already using AI Inventory Manager to optimize their supply chain.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/contact" className="bg-gradient-to-r from-blue-500 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-blue-600 hover:to-purple-700 transition-all duration-300">
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

export default AIInventoryManagerPage;
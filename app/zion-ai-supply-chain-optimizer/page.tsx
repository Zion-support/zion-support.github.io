import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { 
  Package, 
  BarChart3, 
  Truck, 
  Warehouse, 
  Target, 
  Clock, 
  Shield, 
  Zap, 
  CheckCircle, 
  Star, 
  ArrowRight,
  Brain,
  Globe,
  Award,
  Sparkles,
  FileText,
  AlertTriangle,
  MapPin
} from 'lucide-react';

const ZionAISupplyChainOptimizerPage: React.FC = () => {
  const features = [
    {
      title: 'AI-Powered Demand Forecasting',
      description: 'Predict demand with 92% accuracy using advanced machine learning algorithms',
      icon: <Target className="w-6 h-6" />,
      benefits: ['92% demand accuracy', 'Multi-factor analysis', 'Seasonal pattern recognition']
    },
    {
      title: 'Intelligent Inventory Optimization',
      description: 'AI optimizes inventory levels to minimize costs while ensuring availability',
      icon: <Package className="w-6 h-6" />,
      benefits: ['30% inventory reduction', 'Stockout prevention', 'Carrying cost optimization']
    },
    {
      title: 'Smart Route Optimization',
      description: 'AI finds the most efficient delivery routes and transportation modes',
      icon: <Truck className="w-6 h-6" />,
      benefits: ['25% fuel cost savings', 'Delivery time optimization', 'Carbon footprint reduction']
    },
    {
      title: 'Supplier Risk Assessment',
      description: 'AI evaluates supplier reliability and identifies potential disruptions',
      icon: <AlertTriangle className="w-6 h-6" />,
      benefits: ['Risk scoring', 'Disruption prediction', 'Alternative supplier suggestions']
    },
    {
      title: 'Warehouse Optimization',
      description: 'AI optimizes warehouse layout and operations for maximum efficiency',
      icon: <Warehouse className="w-6 h-6" />,
      benefits: ['Space utilization optimization', 'Picking efficiency', 'Labor cost reduction']
    },
    {
      title: 'Real-time Monitoring',
      description: 'AI monitors supply chain performance and alerts to potential issues',
      icon: <Clock className="w-6 h-6" />,
      benefits: ['Real-time tracking', 'Performance alerts', 'Predictive maintenance']
    }
  ];

  const pricingPlans = [
    {
      name: 'Starter',
      price: '$199',
      period: '/month',
      description: 'Perfect for small businesses',
      features: [
        'Basic demand forecasting',
        'Inventory optimization',
        'Route planning',
        'Email support',
        'Standard reports',
        '5 locations'
      ],
      popular: false
    },
    {
      name: 'Professional',
      price: '$599',
      period: '/month',
      description: 'Ideal for growing companies',
      features: [
        'Advanced AI forecasting',
        'Supplier risk assessment',
        'Warehouse optimization',
        'Priority support',
        'Custom reports',
        'Unlimited locations',
        'API access'
      ],
      popular: true
    },
    {
      name: 'Enterprise',
      price: '$1,499',
      period: '/month',
      description: 'For large organizations',
      features: [
        'Custom AI models',
        'Full supply chain visibility',
        'White-label options',
        'Dedicated support',
        'Custom integrations',
        'Advanced security',
        'Custom training'
      ],
      popular: false
    }
  ];

  const testimonials = [
    {
      name: 'Robert Kim',
      company: 'Manufacturing Corp',
      role: 'Supply Chain Director',
      content: 'Zion AI Supply Chain Optimizer reduced our inventory costs by 35% while improving service levels.',
      rating: 5,
      avatar: 'RK'
    },
    {
      name: 'Maria Santos',
      company: 'Retail Chain',
      role: 'Operations Manager',
      content: 'The demand forecasting is incredibly accurate. We\'ve eliminated stockouts and reduced waste significantly.',
      rating: 5,
      avatar: 'MS'
    },
    {
      name: 'James Wilson',
      company: 'Logistics Solutions',
      role: 'VP Operations',
      content: 'Finally, a supply chain tool that actually optimizes instead of just tracking. The AI insights are game-changing.',
      rating: 5,
      avatar: 'JW'
    }
  ];

  const stats = [
    { number: '3,000+', label: 'Supply Chains Optimized', icon: <Package className="w-6 h-6" /> },
    { number: '35%', label: 'Average Cost Reduction', icon: <TrendingUp className="w-6 h-6" /> },
    { number: '92%', label: 'Demand Forecast Accuracy', icon: <Target className="w-6 h-6" /> },
    { number: '24/7', label: 'AI-Powered Monitoring', icon: <Brain className="w-6 h-6" /> }
  ];

  return (
    <>
      <Helmet>
        <title>Zion AI Supply Chain Optimizer - AI-Powered Supply Chain Management | Zion Tech Group</title>
        <meta name="description" content="Transform your supply chain with Zion AI Supply Chain Optimizer. AI-powered demand forecasting, inventory optimization, route planning, and supplier risk assessment. Start your free trial today!" />
        <meta name="keywords" content="AI supply chain optimization, supply chain management, demand forecasting, inventory optimization, route planning, supplier risk assessment, logistics optimization" />
        <link rel="canonical" href="https://ziontechgroup.com/zion-ai-supply-chain-optimizer" />
      </Helmet>

      <div className="min-h-screen pt-16">
        {/* Hero Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-orange-900/20 via-red-900/20 to-pink-900/20"></div>
          <div className="max-w-7xl mx-auto text-center relative z-10">
            <div className="flex justify-center mb-8">
              <div className="w-20 h-20 bg-gradient-to-r from-orange-500 to-red-600 rounded-2xl flex items-center justify-center">
                <Package className="w-10 h-10 text-white" />
              </div>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Zion AI Supply Chain
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-red-400">
                {' '}Optimizer
              </span>
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-4xl mx-auto leading-relaxed">
              The most intelligent supply chain optimization platform that uses AI to predict demand, 
              optimize inventory, and streamline logistics. 
              Transform your supply chain with cutting-edge artificial intelligence.
            </p>
            
            {/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12 max-w-4xl mx-auto">
              {stats.map((stat, index) => (
                <div key={index} className="text-center group">
                  <div className="w-12 h-12 md:w-16 md:h-16 mx-auto mb-4 rounded-full bg-gradient-to-r from-orange-500/20 to-red-500/20 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    {stat.icon}
                  </div>
                  <div className="text-2xl md:text-3xl font-bold text-white mb-2">{stat.number}</div>
                  <div className="text-gray-300 text-sm">{stat.label}</div>
                </div>
              ))}
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="px-8 py-4 bg-gradient-to-r from-orange-500 to-red-600 text-white rounded-lg font-semibold hover:shadow-lg hover:shadow-orange-500/25 transition-all duration-300 flex items-center justify-center space-x-2 group"
              >
                <span>Start Free Trial</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                to="/demo"
                className="px-8 py-4 border border-orange-400 text-orange-400 rounded-lg font-semibold hover:bg-orange-400/10 transition-all duration-300 flex items-center justify-center space-x-2"
              >
                <span>Watch Demo</span>
                <Sparkles className="w-5 h-5" />
              </Link>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-slate-800/50 to-orange-800/50">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                AI-Powered Supply Chain Features
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Our advanced AI technology automates complex supply chain processes and provides 
                insights that help you optimize costs, improve service levels, and reduce risks.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {features.map((feature, index) => (
                <div
                  key={index}
                  className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-8 hover:border-orange-500/30 transition-all duration-300 group"
                >
                  <div className="text-orange-400 mb-4 group-hover:scale-110 transition-transform duration-300">
                    {feature.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-4">
                    {feature.title}
                  </h3>
                  <p className="text-gray-300 mb-6">
                    {feature.description}
                  </p>
                  <ul className="space-y-2">
                    {feature.benefits.map((benefit, benefitIndex) => (
                      <li key={benefitIndex} className="flex items-center text-sm text-gray-400">
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

        {/* Pricing Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Scalable Pricing for Every Business
              </h2>
              <p className="text-xl text-gray-300 max-w-2xl mx-auto">
                Choose the plan that fits your supply chain needs. All plans include our core AI features.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {pricingPlans.map((plan, index) => (
                <div
                  key={index}
                  className={`bg-white/5 backdrop-blur-sm border rounded-xl p-8 relative ${
                    plan.popular 
                      ? 'border-orange-500/50 ring-2 ring-orange-500/20' 
                      : 'border-white/10'
                  }`}
                >
                  {plan.popular && (
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                      <span className="bg-gradient-to-r from-orange-500 to-red-600 text-white px-4 py-2 rounded-full text-sm font-semibold flex items-center">
                        <Star className="w-4 h-4 mr-1" />
                        Most Popular
                      </span>
                    </div>
                  )}
                  
                  <div className="text-center mb-8">
                    <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                    <p className="text-gray-400 mb-4">{plan.description}</p>
                    <div className="flex items-baseline justify-center">
                      <span className="text-4xl font-bold text-white">{plan.price}</span>
                      <span className="text-gray-400 ml-1">{plan.period}</span>
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
                    className={`w-full py-3 px-6 rounded-lg font-semibold text-center transition-all duration-300 ${
                      plan.popular
                        ? 'bg-gradient-to-r from-orange-500 to-red-600 text-white hover:shadow-lg hover:shadow-orange-500/25'
                        : 'border border-white/20 text-white hover:bg-white/10'
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
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-slate-800/50 to-red-800/50">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Trusted by Supply Chain Teams Worldwide
              </h2>
              <p className="text-xl text-gray-300 max-w-2xl mx-auto">
                See what our customers say about Zion AI Supply Chain Optimizer
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {testimonials.map((testimonial, index) => (
                <div
                  key={index}
                  className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-8 hover:border-orange-500/30 transition-all duration-300"
                >
                  <div className="flex items-center mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  <p className="text-gray-300 mb-6 italic">"{testimonial.content}"</p>
                  <div className="flex items-center">
                    <div className="w-12 h-12 bg-gradient-to-r from-orange-500 to-red-600 rounded-full flex items-center justify-center text-white font-semibold mr-4">
                      {testimonial.avatar}
                    </div>
                    <div>
                      <div className="font-semibold text-white">{testimonial.name}</div>
                      <div className="text-sm text-gray-400">{testimonial.role}, {testimonial.company}</div>
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
            <div className="bg-gradient-to-r from-orange-500/10 to-red-500/10 border border-orange-500/20 rounded-2xl p-12">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Ready to Transform Your Supply Chain?
              </h2>
              <p className="text-xl text-gray-300 mb-8">
                Join thousands of supply chain teams already using Zion AI Supply Chain Optimizer 
                to reduce costs and improve efficiency. Start your free 14-day trial today.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  to="/contact"
                  className="px-8 py-4 bg-gradient-to-r from-orange-500 to-red-600 text-white rounded-lg font-semibold hover:shadow-lg hover:shadow-orange-500/25 transition-all duration-300"
                >
                  Start Free Trial
                </Link>
                <Link
                  to="/demo"
                  className="px-8 py-4 border border-white/20 text-white rounded-lg font-semibold hover:bg-white/10 transition-all duration-300"
                >
                  Schedule Demo
                </Link>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default ZionAISupplyChainOptimizerPage;
import React from 'react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import { 
  ShoppingCart, 
  CreditCard, 
  Package, 
  TrendingUp, 
  Users, 
  Zap, 
  CheckCircle,
  Star,
  ArrowRight,
  Phone,
  Mail,
  Clock,
  Settings,
  Globe,
  Smartphone,
  Monitor,
  HardDrive,
  Search,
  Filter,
  BarChart3
} from 'lucide-react';

const AIEcommerceSolutionsPage: React.FC = () => {
  const features = [
    {
      icon: ShoppingCart,
      title: 'AI-Powered Shopping Experience',
      description: 'Personalized product recommendations and intelligent search with natural language processing.',
      price: '$999/month',
      features: ['Smart recommendations', 'Voice search', 'Visual search', 'Personalized catalogs']
    },
    {
      icon: CreditCard,
      title: 'Intelligent Payment Processing',
      description: 'AI-driven fraud detection and payment optimization for higher conversion rates.',
      price: '$599/month',
      features: ['Fraud prevention', 'Payment optimization', 'Risk assessment', 'Chargeback protection']
    },
    {
      icon: Package,
      title: 'Smart Inventory Management',
      description: 'Predictive inventory management with demand forecasting and automated reordering.',
      price: '$799/month',
      features: ['Demand forecasting', 'Auto reordering', 'Stock optimization', 'Supplier management']
    },
    {
      icon: TrendingUp,
      title: 'Dynamic Pricing Engine',
      description: 'AI-powered dynamic pricing that maximizes revenue while staying competitive.',
      price: '$699/month',
      features: ['Real-time pricing', 'Competitor analysis', 'Demand-based pricing', 'A/B testing']
    },
    {
      icon: Users,
      title: 'Customer Behavior Analytics',
      description: 'Deep insights into customer behavior and preferences for better targeting.',
      price: '$499/month',
      features: ['Behavior tracking', 'Segmentation', 'Predictive analytics', 'Customer journey mapping']
    },
    {
      icon: Zap,
      title: 'Automated Marketing',
      description: 'AI-driven email campaigns, retargeting, and personalized promotions.',
      price: '$399/month',
      features: ['Email automation', 'Retargeting ads', 'Personalized offers', 'Campaign optimization']
    }
  ];

  const benefits = [
    'Increase conversion rates by 35%',
    'Reduce cart abandonment by 40%',
    'Boost average order value by 25%',
    'Improve customer satisfaction by 50%',
    'Reduce operational costs by 30%',
    'Scale effortlessly with AI automation'
  ];

  const ecommerceFeatures = [
    {
      title: 'Personalized Shopping',
      description: 'AI creates unique shopping experiences for each customer',
      icon: Users
    },
    {
      title: 'Smart Search',
      description: 'Natural language search that understands customer intent',
      icon: Search
    },
    {
      title: 'Visual Search',
      description: 'Find products by uploading images or using camera',
      icon: Camera
    },
    {
      title: 'Chatbot Support',
      description: '24/7 AI customer service for instant support',
      icon: MessageCircle
    },
    {
      title: 'Inventory Optimization',
      description: 'Predictive analytics for optimal stock levels',
      icon: Package
    },
    {
      title: 'Price Optimization',
      description: 'Dynamic pricing based on market conditions',
      icon: DollarSign
    }
  ];

  const pricingPlans = [
    {
      name: 'Starter',
      price: '$999',
      period: '/month',
      description: 'Perfect for small e-commerce stores',
      features: [
        'Basic AI recommendations',
        'Simple search functionality',
        'Email support',
        'Up to 1,000 products',
        'Standard analytics',
        'Mobile responsive'
      ],
      popular: false
    },
    {
      name: 'Professional',
      price: '$2,499',
      period: '/month',
      description: 'Ideal for growing e-commerce businesses',
      features: [
        'Advanced AI features',
        'Multi-channel integration',
        'Priority support',
        'Up to 10,000 products',
        'Advanced analytics',
        'Custom integrations'
      ],
      popular: true
    },
    {
      name: 'Enterprise',
      price: '$4,999',
      period: '/month',
      description: 'For large e-commerce operations',
      features: [
        'Full AI suite',
        'Custom AI models',
        'Dedicated support',
        'Unlimited products',
        'White-label options',
        'SLA guarantee'
      ],
      popular: false
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Navigation />
      
      <main className="container mx-auto px-4 py-16 pt-24">
        {/* Hero Section */}
        <section className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 bg-green-100 text-green-800 rounded-full text-sm font-medium mb-6">
            <ShoppingCart className="w-4 h-4 mr-2" />
            AI E-commerce Solutions
          </div>
          
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            AI-Powered E-commerce Platform
          </h1>
          
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Transform your online store with cutting-edge AI technology. Increase conversions, 
            reduce cart abandonment, and deliver personalized shopping experiences that drive sales 
            and customer loyalty.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <a
              href="tel:+13024640950"
              className="bg-gradient-to-r from-green-600 to-blue-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-green-700 hover:to-blue-700 transition-all flex items-center"
            >
              <Phone className="w-5 h-5 mr-2" />
              Call Now: (302) 464-0950
            </a>
            <a
              href="/contact"
              className="border-2 border-green-600 text-green-400 px-8 py-4 rounded-lg font-semibold hover:bg-green-600 hover:text-white transition-all"
            >
              Get Free Demo
            </a>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
            <div className="text-center">
              <div className="text-3xl font-bold text-green-400 mb-2">35%</div>
              <div className="text-gray-300">Higher Conversion</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-blue-400 mb-2">40%</div>
              <div className="text-gray-300">Less Cart Abandonment</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-purple-400 mb-2">25%</div>
              <div className="text-gray-300">Higher AOV</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-orange-400 mb-2">50%</div>
              <div className="text-gray-300">Better Satisfaction</div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-12">
            Powerful E-commerce AI Features
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:border-green-400 transition-all">
                <div className="w-12 h-12 bg-green-600 rounded-lg flex items-center justify-center mb-4">
                  <feature.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">{feature.title}</h3>
                <p className="text-gray-300 mb-4">{feature.description}</p>
                <div className="text-green-400 font-semibold mb-4">{feature.price}</div>
                <ul className="space-y-2">
                  {feature.features.map((feat, featureIndex) => (
                    <li key={featureIndex} className="flex items-center space-x-2 text-sm text-gray-300">
                      <CheckCircle className="w-4 h-4 text-green-400 flex-shrink-0" />
                      <span>{feat}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        {/* E-commerce Features */}
        <section className="mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-12">
            Complete E-commerce AI Suite
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {ecommerceFeatures.map((feature, index) => (
              <div key={index} className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10">
                <div className="w-12 h-12 bg-purple-600 rounded-lg flex items-center justify-center mb-4">
                  <feature.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">{feature.title}</h3>
                <p className="text-gray-300">{feature.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Benefits Section */}
        <section className="mb-16">
          <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
            <h2 className="text-3xl font-bold text-white text-center mb-8">
              Why Choose Our AI E-commerce Solutions?
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-center space-x-3">
                  <CheckCircle className="w-6 h-6 text-green-400 flex-shrink-0" />
                  <span className="text-gray-300">{benefit}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Pricing Section */}
        <section className="mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-12">
            Flexible E-commerce Pricing
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {pricingPlans.map((plan, index) => (
              <div key={index} className={`bg-white/10 backdrop-blur-sm rounded-xl p-8 border-2 transition-all ${
                plan.popular 
                  ? 'border-green-400 scale-105' 
                  : 'border-white/20 hover:border-green-400'
              }`}>
                {plan.popular && (
                  <div className="bg-green-600 text-white text-sm font-semibold px-3 py-1 rounded-full inline-block mb-4">
                    Most Popular
                  </div>
                )}
                
                <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                <p className="text-gray-300 mb-4">{plan.description}</p>
                
                <div className="mb-6">
                  <span className="text-4xl font-bold text-white">{plan.price}</span>
                  <span className="text-gray-400">{plan.period}</span>
                </div>
                
                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center space-x-3">
                      <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0" />
                      <span className="text-gray-300">{feature}</span>
                    </li>
                  ))}
                </ul>
                
                <a
                  href="/contact"
                  className={`w-full block text-center py-3 px-6 rounded-lg font-semibold transition-all ${
                    plan.popular
                      ? 'bg-gradient-to-r from-green-600 to-blue-600 text-white hover:from-green-700 hover:to-blue-700'
                      : 'border-2 border-green-600 text-green-400 hover:bg-green-600 hover:text-white'
                  }`}
                >
                  Get Started
                </a>
              </div>
            ))}
          </div>
        </section>

        {/* CTA Section */}
        <section className="text-center">
          <div className="bg-gradient-to-r from-green-600 to-blue-600 rounded-2xl p-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Ready to Transform Your E-commerce Store?
            </h2>
            <p className="text-xl text-green-100 mb-8 max-w-2xl mx-auto">
              Join thousands of online stores already using our AI solutions to increase sales, 
              improve customer experience, and grow their business.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="tel:+13024640950"
                className="bg-white text-green-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-all flex items-center justify-center"
              >
                <Phone className="w-5 h-5 mr-2" />
                Call (302) 464-0950
              </a>
              <a
                href="/contact"
                className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-green-600 transition-all"
              >
                Schedule Demo
              </a>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default AIEcommerceSolutionsPage;
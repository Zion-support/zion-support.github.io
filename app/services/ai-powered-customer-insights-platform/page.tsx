// import React from 'react';
import { Metadata } from 'next';
import { Link } from 'react-router-dom';
import { 
  Brain, 
  Users, 
  BarChart3, 
  MessageSquare, 
  TrendingUp, 
  Target, 
  Eye, 
  Zap, 
  CheckCircle, 
  ArrowRight, 
  DollarSign,
  Clock,
  Star,
  Globe,
  Lock,
  Settings,
  Database,
  Bot,
  Smartphone,
  Mail,
  Calendar,
  CreditCard,
  Headphones,
  Code,
  Layers,
  Wifi,
  Camera,
  Mic,
  MapPin,
  ShoppingCart,
  Package,
  Truck,
  Building,
  Home,
  Car,
  Plane,
  Ship,
  Activity,
  PieChart,
  LineChart,
  RefreshCw,
  Download,
  Upload,
  Play,
  Pause,
  Square,
  Triangle,
  Circle,
  Hexagon,
  Monitor,
  Server,
  HardDrive,
  Cpu,
  MemoryStick,
  Router,
  Terminal,
  GitBranch,
  Container,
  Docker,
  Key,
  AlertTriangle
} from 'lucide-react';

export const metadata: Metadata = {
  title: 'AI-Powered Customer Insights Platform | Zion Tech Group - Advanced Analytics',
  description: 'Transform customer data into actionable insights with our AI-powered analytics platform. Real-time sentiment analysis, predictive behavior modeling, and automated customer journey optimization.',
  keywords: 'customer insights, AI analytics, sentiment analysis, predictive modeling, customer journey, behavioral analytics, CRM automation',
};

export default function AICustomerInsightsPlatformPage() {
  const features = [
    {
      title: 'Real-Time Sentiment Analysis',
      description: 'Advanced NLP algorithms analyze customer communications across all channels in real-time',
      icon: Brain,
      benefits: [
        'Instant sentiment scoring for emails, chats, and social media',
        'Multi-language support with 95%+ accuracy',
        'Emotion detection and mood tracking',
        'Automated alert system for negative sentiment spikes'
      ]
    },
    {
      title: 'Predictive Behavior Modeling',
      description: 'Machine learning models predict customer actions and preferences',
      icon: Target,
      benefits: [
        'Churn prediction with 87% accuracy',
        'Purchase intent scoring',
        'Lifetime value forecasting',
        'Personalized recommendation engine'
      ]
    },
    {
      title: 'Customer Journey Mapping',
      description: 'Automated visualization and optimization of customer touchpoints',
      icon: MapPin,
      benefits: [
        'End-to-end journey visualization',
        'Bottleneck identification and optimization',
        'Cross-channel behavior tracking',
        'Automated journey scoring and recommendations'
      ]
    },
    {
      title: 'Automated Insights Generation',
      description: 'AI generates actionable business insights and recommendations',
      icon: Zap,
      benefits: [
        'Daily insight reports with key findings',
        'Automated root cause analysis',
        'Performance benchmarking against industry standards',
        'Predictive trend analysis and forecasting'
      ]
    }
  ];

  const pricingTiers = [
    {
      name: 'Starter',
      price: '$299',
      period: '/month',
      description: 'Perfect for small businesses',
      features: [
        'Up to 10,000 customer interactions/month',
        'Basic sentiment analysis',
        'Standard reporting dashboard',
        'Email support',
        'API access (1,000 calls/month)'
      ],
      popular: false
    },
    {
      name: 'Professional',
      price: '$799',
      period: '/month',
      description: 'Ideal for growing companies',
      features: [
        'Up to 100,000 customer interactions/month',
        'Advanced sentiment analysis + emotion detection',
        'Predictive behavior modeling',
        'Customer journey mapping',
        'Priority support',
        'API access (10,000 calls/month)',
        'Custom integrations'
      ],
      popular: true
    },
    {
      name: 'Enterprise',
      price: '$1,999',
      period: '/month',
      description: 'For large organizations',
      features: [
        'Unlimited customer interactions',
        'Full AI insights suite',
        'Custom ML model training',
        'Advanced analytics & reporting',
        'Dedicated account manager',
        'Unlimited API access',
        'White-label options',
        'On-premise deployment available'
      ],
      popular: false
    }
  ];

  const useCases = [
    {
      title: 'E-commerce Optimization',
      description: 'Increase conversion rates by understanding customer behavior patterns',
      icon: ShoppingCart,
      results: 'Average 23% increase in conversion rates'
    },
    {
      title: 'Customer Support Enhancement',
      description: 'Improve support quality with real-time sentiment monitoring',
      icon: Headphones,
      results: '35% reduction in customer complaints'
    },
    {
      title: 'Marketing Campaign Optimization',
      description: 'Create targeted campaigns based on predictive customer insights',
      icon: Target,
      results: '40% improvement in campaign ROI'
    },
    {
      title: 'Product Development',
      description: 'Guide product decisions with customer feedback analysis',
      icon: Package,
      results: '28% faster time-to-market for new features'
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-purple-50 to-blue-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
              AI-Powered Customer Insights Platform
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
              Transform customer data into actionable insights with advanced AI analytics. 
              Predict behavior, optimize journeys, and drive growth with intelligent automation.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/contact" 
                className="bg-purple-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-purple-700 transition-colors"
              >
                Start Free Trial
              </Link>
              <Link to="#demo" 
                className="border border-purple-600 text-purple-600 px-8 py-3 rounded-lg font-semibold hover:bg-purple-50 transition-colors"
              >
                Watch Demo
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Advanced AI Analytics Features
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Comprehensive customer intelligence powered by cutting-edge artificial intelligence
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="bg-gray-50 rounded-xl p-8 hover:shadow-lg transition-shadow">
                <div className="flex items-center mb-4">
                  <feature.icon className="w-8 h-8 text-purple-600 mr-3" />
                  <h3 className="text-xl font-semibold text-gray-900">{feature.title}</h3>
                </div>
                <p className="text-gray-600 mb-4">{feature.description}</p>
                <ul className="space-y-2">
                  {feature.benefits.map((benefit, idx) => (
                    <li key={idx} className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-700">{benefit}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Flexible Pricing Plans
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Choose the plan that fits your business needs and scale as you grow
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {pricingTiers.map((tier, index) => (
              <div key={index} className={`bg-white rounded-xl p-8 relative ${tier.popular ? 'ring-2 ring-purple-600 shadow-lg' : 'shadow-md'}`}>
                {tier.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-purple-600 text-white px-4 py-1 rounded-full text-sm font-semibold">
                      Most Popular
                    </span>
                  </div>
                )}
                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">{tier.name}</h3>
                  <p className="text-gray-600 mb-4">{tier.description}</p>
                  <div className="flex items-baseline justify-center">
                    <span className="text-4xl font-bold text-gray-900">{tier.price}</span>
                    <span className="text-gray-600 ml-1">{tier.period}</span>
                  </div>
                </div>
                <ul className="space-y-4 mb-8">
                  {tier.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>
                <Link to="/contact"
                  className={`w-full block text-center py-3 px-6 rounded-lg font-semibold transition-colors ${
                    tier.popular
                      ? 'bg-purple-600 text-white hover:bg-purple-700'
                      : 'bg-gray-900 text-white hover:bg-gray-800'
                  }`}
                >
                  Get Started
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Use Cases Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Real-World Applications
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              See how businesses are transforming with AI-powered customer insights
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {useCases.map((useCase, index) => (
              <div key={index} className="bg-gradient-to-br from-purple-50 to-blue-50 rounded-xl p-8">
                <div className="flex items-center mb-4">
                  <useCase.icon className="w-8 h-8 text-purple-600 mr-3" />
                  <h3 className="text-xl font-semibold text-gray-900">{useCase.title}</h3>
                </div>
                <p className="text-gray-600 mb-4">{useCase.description}</p>
                <div className="bg-white rounded-lg p-4">
                  <p className="text-sm text-gray-500 mb-1">Average Results:</p>
                  <p className="text-lg font-semibold text-green-600">{useCase.results}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-purple-600 to-blue-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Ready to Transform Your Customer Intelligence?
          </h2>
          <p className="text-xl text-purple-100 mb-8 max-w-2xl mx-auto">
            Join hundreds of companies already using AI to understand their customers better
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/contact" 
              className="bg-white text-purple-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
            >
              Start Your Free Trial
            </Link>
            <Link to="tel:+13024640950" 
              className="border border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-purple-600 transition-colors"
            >
              Call +1 302 464 0950
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
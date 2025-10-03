import React from 'react';
import Head from 'next/head';
import { Link } from 'react-router-dom';
import { 
  Shield, 
  AlertTriangle, 
  Eye, 
  CheckCircle, 
  ArrowRight, 
  DollarSign,
  Star,
  Target,
  Phone,
  Mail,
  MapPin,
  Zap,
  BarChart3,
  FileText,
  Smartphone,
  Heart,
  Building,
  CreditCard,
  Database,
  Globe,
  MessageSquare,
  TrendingUp,
  Settings,
  Bell,
  Video,
  Camera,
  Mic,
  Lock,
  Activity,
  PieChart,
  Award,
  Rocket,
  Brain,
  Code,
  Cloud,
  Network,
  Server,
  Monitor,
  Users,
  Cpu,
  CheckSquare,
  Search,
  Clock
} from 'lucide-react';

export default function AIFraudDetectionPage() {
  const title = 'AI Fraud Detection & Prevention Platform — Zion Tech Group';
  const description = 'Advanced AI-powered fraud detection system with real-time monitoring, behavioral analysis, and automated prevention. Protect your business from financial losses.';

  const features = [
    {
      name: 'Real-Time Fraud Detection',
      description: 'Instant fraud detection with sub-second response times',
      icon: Zap,
      details: [
        'Sub-100ms fraud detection response time',
        'Real-time transaction monitoring',
        'Instant risk scoring and alerts',
        'Automated fraud prevention actions'
      ]
    },
    {
      name: 'Behavioral Analysis Engine',
      description: 'Advanced machine learning models for user behavior analysis',
      icon: Brain,
      details: [
        'User behavior pattern recognition',
        'Anomaly detection algorithms',
        'Device fingerprinting and analysis',
        'Geolocation and velocity checks'
      ]
    },
    {
      name: 'Multi-Channel Protection',
      description: 'Comprehensive fraud protection across all business channels',
      icon: Globe,
      details: [
        'E-commerce transaction protection',
        'Mobile app fraud prevention',
        'API and webhook security',
        'Payment gateway integration'
      ]
    },
    {
      name: 'Machine Learning Models',
      description: 'Self-improving AI models that adapt to new fraud patterns',
      icon: Cpu,
      details: [
        'Supervised and unsupervised learning',
        'Continuous model training and updates',
        'Ensemble methods for accuracy',
        'Custom model development for specific industries'
      ]
    },
    {
      name: 'Risk Management Dashboard',
      description: 'Comprehensive dashboard for fraud risk monitoring and management',
      icon: BarChart3,
      details: [
        'Real-time fraud metrics and KPIs',
        'Risk score distribution analysis',
        'Fraud trend identification',
        'Custom reporting and alerts'
      ]
    },
    {
      name: 'Compliance & Reporting',
      description: 'Built-in compliance features for regulatory requirements',
      icon: Shield,
      details: [
        'PCI DSS compliance support',
        'GDPR and privacy regulation compliance',
        'Automated audit trail generation',
        'Regulatory reporting capabilities'
      ]
    }
  ];

  const pricingTiers = [
    {
      name: 'Starter',
      price: '$499/month',
      description: 'Perfect for small businesses and startups',
      features: [
        'Up to 10,000 transactions/month',
        'Basic fraud detection models',
        'Real-time monitoring',
        'Email alerts and notifications',
        'Standard support',
        'Basic analytics dashboard'
      ],
      marketPrice: '$800/month',
      savings: '38%'
    },
    {
      name: 'Professional',
      price: '$1,299/month',
      description: 'Ideal for growing businesses with higher transaction volumes',
      features: [
        'Up to 100,000 transactions/month',
        'Advanced fraud detection models',
        'Behavioral analysis engine',
        'Multi-channel protection',
        'Priority support',
        'Advanced analytics and reporting',
        'Custom risk rules',
        'API access'
      ],
      marketPrice: '$2,200/month',
      savings: '41%'
    },
    {
      name: 'Enterprise',
      price: '$2,999/month',
      description: 'For large enterprises with complex fraud prevention needs',
      features: [
        'Unlimited transactions',
        'Custom machine learning models',
        'Full behavioral analysis suite',
        'Complete multi-channel protection',
        '24/7 dedicated support',
        'Custom analytics and reporting',
        'Advanced risk management tools',
        'Full API access and integrations',
        'White-label solution',
        'Compliance and audit support'
      ],
      marketPrice: '$5,000/month',
      savings: '40%'
    }
  ];

  const benefits = [
    {
      title: 'Reduce Fraud Losses by 85%',
      description: 'Advanced AI models detect and prevent fraud before it causes financial damage',
      icon: Shield
    },
    {
      title: 'Minimize False Positives',
      description: 'Sophisticated algorithms reduce false positives by 60% compared to traditional methods',
      icon: Target
    },
    {
      title: 'Real-Time Protection',
      description: 'Instant fraud detection and prevention with sub-second response times',
      icon: Zap
    },
    {
      title: 'Compliance Ready',
      description: 'Built-in compliance features ensure regulatory requirements are met',
      icon: CheckCircle
    }
  ];

  const fraudTypes = [
    {
      type: 'Credit Card Fraud',
      description: 'Detect stolen cards, chargebacks, and unauthorized transactions',
      icon: CreditCard,
      detection: '99.2% accuracy'
    },
    {
      type: 'Account Takeover',
      description: 'Identify compromised accounts and unauthorized access attempts',
      icon: Users,
      detection: '98.7% accuracy'
    },
    {
      type: 'Identity Fraud',
      description: 'Detect synthetic identities and identity theft attempts',
      icon: Eye,
      detection: '97.8% accuracy'
    },
    {
      type: 'Payment Fraud',
      description: 'Prevent fraudulent payments and money laundering attempts',
      icon: DollarSign,
      detection: '99.1% accuracy'
    },
    {
      type: 'E-commerce Fraud',
      description: 'Protect against fraudulent orders and chargeback abuse',
      icon: ShoppingCart,
      detection: '98.5% accuracy'
    },
    {
      type: 'Mobile Fraud',
      description: 'Detect mobile app fraud and device-based attacks',
      icon: Smartphone,
      detection: '98.9% accuracy'
    }
  ];

  const caseStudies = [
    {
      client: 'FinTech Solutions Inc.',
      industry: 'Financial Services',
      volume: '500K transactions/month',
      results: [
        '87% reduction in fraud losses',
        '65% decrease in false positives',
        'ROI of 340% in first year',
        'Zero compliance violations'
      ]
    },
    {
      client: 'E-commerce Global',
      industry: 'Online Retail',
      volume: '1M transactions/month',
      results: [
        '92% reduction in chargeback rates',
        '78% decrease in fraudulent orders',
        'ROI of 280% in first year',
        '99.5% customer satisfaction'
      ]
    }
  ];

  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta name="keywords" content="fraud detection, AI fraud prevention, risk management, transaction monitoring, fraud analytics, compliance" />
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
        <meta property="og:url" content="https://ziontechgroup.com/services/micro-saas/ai-fraud-detection" />
        <meta property="og:type" content="website" />
        <link rel="canonical" href="https://ziontechgroup.com/services/micro-saas/ai-fraud-detection" />
      </Head>

      <div className="min-h-screen bg-gradient-to-br from-red-50 via-white to-orange-50">
        {/* Header */}
        <div className="bg-white shadow-sm border-b">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between items-center py-4">
              <Link to="/" className="text-2xl font-bold text-gray-900">
                <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                  Zion Tech Group
                </span>
              </Link>
              <Link to="/contact" className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors">
                Get Started
              </Link>
            </div>
          </div>
        </div>

        {/* Hero Section */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
              AI Fraud Detection
              <span className="bg-gradient-to-r from-red-600 to-orange-600 bg-clip-text text-transparent block">
                & Prevention Platform
              </span>
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
              Protect your business from financial losses with advanced AI-powered fraud detection. 
              Real-time monitoring, behavioral analysis, and automated prevention keep your transactions secure.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/contact" className="bg-red-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-red-700 transition-colors">
                Start Protecting
              </Link>
              <Link to="#pricing" className="border border-red-600 text-red-600 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-red-50 transition-colors">
                View Pricing
              </Link>
            </div>
          </div>

          {/* Key Benefits */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            {benefits.map((benefit, index) => (
              <div key={index} className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 text-center">
                <benefit.icon className="w-12 h-12 text-red-600 mx-auto mb-4" />
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{benefit.title}</h3>
                <p className="text-gray-600">{benefit.description}</p>
              </div>
            ))}
          </div>

          {/* Fraud Types Detection */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
              Comprehensive Fraud Protection
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {fraudTypes.map((fraud, index) => (
                <div key={index} className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                  <fraud.icon className="w-10 h-10 text-red-600 mb-4" />
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">{fraud.type}</h3>
                  <p className="text-gray-600 mb-4">{fraud.description}</p>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-500">Detection Accuracy:</span>
                    <span className="text-sm font-semibold text-green-600">{fraud.detection}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Features Section */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
              Advanced AI-Powered Fraud Prevention
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {features.map((feature, index) => (
                <div key={index} className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                  <feature.icon className="w-10 h-10 text-red-600 mb-4" />
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">{feature.name}</h3>
                  <p className="text-gray-600 mb-4">{feature.description}</p>
                  <ul className="space-y-2">
                    {feature.details.map((detail, detailIndex) => (
                      <li key={detailIndex} className="flex items-start text-sm text-gray-600">
                        <CheckCircle className="w-4 h-4 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                        {detail}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          {/* Pricing Section */}
          <div id="pricing" className="mb-16">
            <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
              Transparent Pricing with Market-Beating Rates
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              {pricingTiers.map((tier, index) => (
                <div key={index} className={`bg-white p-8 rounded-xl shadow-sm border-2 ${
                  tier.name === 'Professional' ? 'border-red-500 relative' : 'border-gray-100'
                }`}>
                  {tier.name === 'Professional' && (
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                      <span className="bg-red-600 text-white px-4 py-1 rounded-full text-sm font-semibold">
                        Most Popular
                      </span>
                    </div>
                  )}
                  <div className="text-center mb-6">
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">{tier.name}</h3>
                    <div className="mb-2">
                      <span className="text-4xl font-bold text-red-600">{tier.price}</span>
                      <span className="text-gray-600 ml-2">/month</span>
                    </div>
                    <p className="text-gray-600 mb-4">{tier.description}</p>
                    <div className="flex items-center justify-center gap-2 mb-4">
                      <span className="text-sm text-gray-500 line-through">{tier.marketPrice}</span>
                      <span className="bg-red-100 text-red-800 px-2 py-1 rounded text-sm font-semibold">
                        Save {tier.savings}
                      </span>
                    </div>
                  </div>
                  <ul className="space-y-3 mb-8">
                    {tier.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-start text-sm">
                        <CheckCircle className="w-4 h-4 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <Link to="/contact" className={`w-full block text-center py-3 px-4 rounded-lg font-semibold transition-colors ${
                    tier.name === 'Professional'
                      ? 'bg-red-600 text-white hover:bg-red-700'
                      : 'border border-red-600 text-red-600 hover:bg-red-50'
                  }`}>
                    Get Started
                  </Link>
                </div>
              ))}
            </div>
          </div>

          {/* Case Studies */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
              Proven Results from Industry Leaders
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              {caseStudies.map((study, index) => (
                <div key={index} className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">{study.client}</h3>
                  <p className="text-gray-600 mb-4">{study.industry} • {study.volume}</p>
                  <div className="space-y-2">
                    {study.results.map((result, resultIndex) => (
                      <div key={resultIndex} className="flex items-center text-sm">
                        <CheckCircle className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
                        {result}
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Contact Section */}
          <div className="bg-gradient-to-r from-red-600 to-orange-600 rounded-xl p-8 text-white text-center">
            <h2 className="text-3xl font-bold mb-4">Ready to Protect Your Business?</h2>
            <p className="text-xl mb-8 opacity-90">
              Join thousands of businesses that trust our AI-powered fraud detection platform to protect their transactions and revenue.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/contact" className="bg-white text-red-600 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-gray-100 transition-colors">
                Start Protecting
              </Link>
              <a href="tel:+13024640950" className="border border-white text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-white hover:text-red-600 transition-colors">
                Call +1 302 464 0950
              </a>
            </div>
            <div className="mt-8 text-sm opacity-75">
              <p>📧 kleber@ziontechgroup.com</p>
              <p>📍 364 E Main St STE 1008, Middletown DE 19709</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
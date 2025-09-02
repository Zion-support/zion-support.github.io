import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { 
  Users, 
  Bot, 
  Zap, 
  BarChart3, 
  Shield, 
  Clock, 
  TrendingUp,
  CheckCircle,
  Star,
  ArrowRight,
  Phone,
  Mail as MailIcon,
  MapPin,
  DollarSign,
  Award,
  Target,
  Brain,
  Settings,
  FileText,
  Send,
  Inbox,
  Filter,
  Search,
  MessageSquare,
  Eye,
  Lock,
  Globe,
  Smartphone,
  Monitor,
  Tablet,
  PieChart,
  LineChart,
  Activity,
  UserCheck,
  Heart,
  ThumbsUp,
  MessageCircle,
  Hash,
  Calendar,
  Download,
  Upload,
  RefreshCw,
  Play,
  Pause,
  Square,
  Edit,
  Copy,
  ExternalLink,
  Database,
  Cpu,
  Network,
  Server
} from 'lucide-react';

const AICustomerInsightsPlatform = () => {
  const [activeTab, setActiveTab] = useState('overview');
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const features = [
    {
      icon: <Brain className="w-6 h-6" />,
      title: "AI-Powered Customer Segmentation",
      description: "Automatically segment customers using advanced machine learning algorithms based on behavior, preferences, and value."
    },
    {
      icon: <BarChart3 className="w-6 h-6" />,
      title: "Predictive Analytics",
      description: "Forecast customer lifetime value, churn probability, and purchase likelihood with 95% accuracy."
    },
    {
      icon: <MessageSquare className="w-6 h-6" />,
      title: "Sentiment Analysis",
      description: "Real-time analysis of customer feedback, reviews, and social media mentions across all channels."
    },
    {
      icon: <Target className="w-6 h-6" />,
      title: "Personalization Engine",
      description: "Create hyper-personalized experiences and recommendations based on individual customer profiles."
    },
    {
      icon: <Activity className="w-6 h-6" />,
      title: "Real-Time Insights",
      description: "Monitor customer behavior and engagement patterns in real-time with instant alerts and notifications."
    },
    {
      icon: <Shield className="w-6 h-6" />,
      title: "Privacy-First Analytics",
      description: "GDPR-compliant data processing with advanced privacy protection and consent management."
    }
  ];

  const pricingPlans = [
    {
      name: "Starter",
      price: "$199",
      period: "/month",
      description: "Perfect for small businesses",
      features: [
        "Up to 10,000 customers",
        "Basic segmentation",
        "Standard analytics",
        "Email support",
        "Basic integrations",
        "Monthly reports"
      ],
      popular: false
    },
    {
      name: "Professional",
      price: "$499",
      period: "/month",
      description: "Ideal for growing businesses",
      features: [
        "Up to 100,000 customers",
        "Advanced segmentation",
        "Predictive analytics",
        "Priority support",
        "Advanced integrations",
        "Real-time insights",
        "Custom dashboards"
      ],
      popular: true
    },
    {
      name: "Enterprise",
      price: "$1,299",
      period: "/month",
      description: "For large organizations",
      features: [
        "Unlimited customers",
        "Custom AI models",
        "Advanced analytics",
        "Dedicated support",
        "Custom integrations",
        "White-label options",
        "SLA guarantee"
      ],
      popular: false
    }
  ];

  const capabilities = [
    {
      title: "Customer Segmentation",
      icon: <Users className="w-8 h-8 text-blue-500" />,
      description: "AI-powered customer segmentation with behavioral, demographic, and psychographic analysis"
    },
    {
      title: "Predictive Analytics",
      icon: <TrendingUp className="w-8 h-8 text-green-500" />,
      description: "Forecast customer behavior, lifetime value, and churn probability with machine learning"
    },
    {
      title: "Sentiment Analysis",
      icon: <Heart className="w-8 h-8 text-red-500" />,
      description: "Real-time sentiment analysis across all customer touchpoints and communication channels"
    },
    {
      title: "Personalization",
      icon: <Target className="w-8 h-8 text-purple-500" />,
      description: "Hyper-personalized experiences and recommendations based on individual customer profiles"
    },
    {
      title: "Real-Time Monitoring",
      icon: <Activity className="w-8 h-8 text-orange-500" />,
      description: "Live customer behavior tracking with instant alerts and automated responses"
    },
    {
      title: "Data Integration",
      icon: <Database className="w-8 h-8 text-indigo-500" />,
      description: "Seamless integration with CRM, marketing, and sales platforms for unified customer view"
    }
  ];

  const useCases = [
    {
      title: "E-commerce Personalization",
      description: "Increase conversion rates by 40% with AI-powered product recommendations and personalized shopping experiences.",
      icon: <ShoppingCart className="w-8 h-8 text-blue-500" />
    },
    {
      title: "Customer Retention",
      description: "Reduce churn by 60% with predictive analytics and proactive customer success interventions.",
      icon: <UserCheck className="w-8 h-8 text-green-500" />
    },
    {
      title: "Marketing Optimization",
      description: "Improve campaign ROI by 85% with AI-driven customer segmentation and targeted messaging.",
      icon: <Target className="w-8 h-8 text-purple-500" />
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-green-50">
      {/* Header Section */}
      <div className="bg-gradient-to-r from-green-600 via-emerald-700 to-teal-800 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 20 }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <div className="flex justify-center mb-6">
              <div className="p-4 bg-white/10 rounded-2xl backdrop-blur-sm">
                <Users className="w-12 h-12 text-white" />
              </div>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              AI Customer Insights Platform
            </h1>
            <p className="text-xl md:text-2xl text-green-100 mb-8 max-w-3xl mx-auto">
              Transform customer data into actionable insights with AI-powered analytics, predictive modeling, and real-time personalization
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-green-600 px-8 py-4 rounded-lg font-semibold hover:bg-green-50 transition-colors flex items-center justify-center">
                <Play className="w-5 h-5 mr-2" />
                Start Free Trial
              </button>
              <button className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-green-600 transition-colors flex items-center justify-center">
                <Calendar className="w-5 h-5 mr-2" />
                Schedule Demo
              </button>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Navigation Tabs */}
      <div className="bg-white shadow-sm sticky top-0 z-40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav className="flex space-x-8 overflow-x-auto">
            {['overview', 'features', 'capabilities', 'pricing', 'use-cases', 'contact'].map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`py-4 px-1 border-b-2 font-medium text-sm whitespace-nowrap capitalize ${
                  activeTab === tab
                    ? 'border-green-500 text-green-600'
                    : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                }`}
              >
                {tab.replace('-', ' ')}
              </button>
            ))}
          </nav>
        </div>
      </div>

      {/* Content Sections */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {activeTab === 'overview' && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-16"
          >
            {/* Problem & Solution */}
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-6">
                  The Customer Data Challenge
                </h2>
                <div className="space-y-4 text-gray-600">
                  <div className="flex items-start">
                    <div className="w-2 h-2 bg-red-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    <p>Customer data scattered across multiple systems and platforms</p>
                  </div>
                  <div className="flex items-start">
                    <div className="w-2 h-2 bg-red-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    <p>Difficulty understanding customer behavior and preferences</p>
                  </div>
                  <div className="flex items-start">
                    <div className="w-2 h-2 bg-red-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    <p>Manual analysis is time-consuming and often inaccurate</p>
                  </div>
                </div>
              </div>
              <div className="bg-gradient-to-br from-green-50 to-emerald-100 p-8 rounded-2xl">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  Our AI Solution
                </h3>
                <div className="space-y-4">
                  <div className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                    <span className="text-gray-700">360° unified customer view</span>
                  </div>
                  <div className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                    <span className="text-gray-700">95% accuracy in predictions</span>
                  </div>
                  <div className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                    <span className="text-gray-700">40% increase in customer lifetime value</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Key Benefits */}
            <div className="text-center">
              <h2 className="text-3xl font-bold text-gray-900 mb-12">
                Why Choose Our AI Customer Insights Platform?
              </h2>
              <div className="grid md:grid-cols-3 gap-8">
                <div className="bg-white p-8 rounded-xl shadow-lg">
                  <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                    <Brain className="w-8 h-8 text-green-600" />
                  </div>
                  <h3 className="text-xl font-semibold mb-4">Advanced AI Analytics</h3>
                  <p className="text-gray-600">
                    Machine learning algorithms that continuously learn and improve customer insights accuracy.
                  </p>
                </div>
                <div className="bg-white p-8 rounded-xl shadow-lg">
                  <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
                    <TrendingUp className="w-8 h-8 text-blue-600" />
                  </div>
                  <h3 className="text-xl font-semibold mb-4">Predictive Intelligence</h3>
                  <p className="text-gray-600">
                    Forecast customer behavior and identify opportunities before they become obvious.
                  </p>
                </div>
                <div className="bg-white p-8 rounded-xl shadow-lg">
                  <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-6">
                    <Shield className="w-8 h-8 text-purple-600" />
                  </div>
                  <h3 className="text-xl font-semibold mb-4">Privacy & Compliance</h3>
                  <p className="text-gray-600">
                    Built-in privacy protection and GDPR compliance with secure data processing.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        )}

        {activeTab === 'features' && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-16"
          >
            <div className="text-center">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Powerful Features
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Everything you need to understand and engage your customers better
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow"
                >
                  <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4 text-green-600">
                    {feature.icon}
                  </div>
                  <h3 className="text-lg font-semibold mb-3">{feature.title}</h3>
                  <p className="text-gray-600">{feature.description}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        )}

        {activeTab === 'capabilities' && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-16"
          >
            <div className="text-center">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Core Capabilities
              </h2>
              <p className="text-xl text-gray-600">
                Comprehensive customer intelligence across the entire customer journey
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {capabilities.map((capability, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow"
                >
                  <div className="mb-4">{capability.icon}</div>
                  <h3 className="text-lg font-semibold mb-3">{capability.title}</h3>
                  <p className="text-gray-600">{capability.description}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        )}

        {activeTab === 'pricing' && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-16"
          >
            <div className="text-center">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Transparent Pricing
              </h2>
              <p className="text-xl text-gray-600">
                Choose the plan that fits your customer data needs
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {pricingPlans.map((plan, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className={`bg-white p-8 rounded-2xl shadow-lg relative ${
                    plan.popular ? 'ring-2 ring-green-500 scale-105' : ''
                  }`}
                >
                  {plan.popular && (
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                      <span className="bg-green-500 text-white px-4 py-2 rounded-full text-sm font-semibold">
                        Most Popular
                      </span>
                    </div>
                  )}
                  <div className="text-center mb-8">
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">{plan.name}</h3>
                    <p className="text-gray-600 mb-4">{plan.description}</p>
                    <div className="flex items-baseline justify-center">
                      <span className="text-4xl font-bold text-gray-900">{plan.price}</span>
                      <span className="text-gray-600 ml-1">{plan.period}</span>
                    </div>
                  </div>
                  <ul className="space-y-4 mb-8">
                    {plan.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center">
                        <CheckCircle className="w-5 h-5 text-green-500 mr-3 flex-shrink-0" />
                        <span className="text-gray-700">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <button
                    className={`w-full py-3 px-6 rounded-lg font-semibold transition-colors ${
                      plan.popular
                        ? 'bg-green-500 text-white hover:bg-green-600'
                        : 'bg-gray-100 text-gray-900 hover:bg-gray-200'
                    }`}
                  >
                    Get Started
                  </button>
                </motion.div>
              ))}
            </div>

            <div className="bg-gray-50 p-8 rounded-2xl text-center">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Need a Custom Solution?
              </h3>
              <p className="text-gray-600 mb-6">
                Contact us for enterprise pricing and custom integrations
              </p>
              <button className="bg-green-500 text-white px-8 py-3 rounded-lg font-semibold hover:bg-green-600 transition-colors">
                Contact Sales
              </button>
            </div>
          </motion.div>
        )}

        {activeTab === 'use-cases' && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-16"
          >
            <div className="text-center">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Real-World Applications
              </h2>
              <p className="text-xl text-gray-600">
                See how businesses are transforming customer relationships
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {useCases.map((useCase, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="bg-white p-8 rounded-xl shadow-lg"
                >
                  <div className="mb-6">{useCase.icon}</div>
                  <h3 className="text-xl font-semibold mb-4">{useCase.title}</h3>
                  <p className="text-gray-600">{useCase.description}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        )}

        {activeTab === 'contact' && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-16"
          >
            <div className="text-center">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Get Started Today
              </h2>
              <p className="text-xl text-gray-600">
                Ready to unlock the power of customer insights? Let's talk.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-12">
              <div className="space-y-8">
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mr-4">
                    <Phone className="w-6 h-6 text-green-600" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold">Phone</h3>
                    <p className="text-gray-600">+1 302 464 0950</p>
                  </div>
                </div>
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mr-4">
                    <MailIcon className="w-6 h-6 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold">Email</h3>
                    <p className="text-gray-600">kleber@ziontechgroup.com</p>
                  </div>
                </div>
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mr-4">
                    <MapPin className="w-6 h-6 text-purple-600" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold">Address</h3>
                    <p className="text-gray-600">
                      364 E Main St STE 1008<br />
                      Middletown, DE 19709
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-white p-8 rounded-xl shadow-lg">
                <h3 className="text-xl font-semibold mb-6">Send us a message</h3>
                <form className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Name
                    </label>
                    <input
                      type="text"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                      placeholder="Your name"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Email
                    </label>
                    <input
                      type="email"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                      placeholder="your@email.com"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Message
                    </label>
                    <textarea
                      rows={4}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                      placeholder="Tell us about your customer insights needs..."
                    ></textarea>
                  </div>
                  <button
                    type="submit"
                    className="w-full bg-green-500 text-white py-3 px-6 rounded-lg font-semibold hover:bg-green-600 transition-colors"
                  >
                    Send Message
                  </button>
                </form>
              </div>
            </div>
          </motion.div>
        )}
      </div>

      {/* CTA Section */}
      <div className="bg-gradient-to-r from-green-600 to-emerald-700 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">
            Ready to Transform Customer Insights?
          </h2>
          <p className="text-xl text-green-100 mb-8 max-w-2xl mx-auto">
            Join leading businesses already using our AI Customer Insights Platform
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-green-600 px-8 py-4 rounded-lg font-semibold hover:bg-green-50 transition-colors">
              Start Free Trial
            </button>
            <button className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-green-600 transition-colors">
              View Pricing
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AICustomerInsightsPlatform;
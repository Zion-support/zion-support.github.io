import React from 'react';
import { Metadata } from 'next';
import Link from 'next/link';
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
  Shield,
  Database,
  Globe,
  Smartphone,
  Mail,
  Phone,
  Calendar,
  CreditCard,
  Headphones,
  Code,
  Lock,
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
  Building,
  Home,
  Car,
  Plane,
  Ship,
  Truck,
  Package,
  ShoppingCart,
  MapPin,
  Camera,
  Mic,
  Search,
  Settings,
  Layers,
  Network,
  Wifi,
  Monitor,
  Bot,
  FileText,
  Mail as MailIcon,
  Calendar as CalendarIcon,
  CreditCard as CreditCardIcon,
  Headphones as HeadphonesIcon,
  Code as CodeIcon,
  Lock as LockIcon,
  Target as TargetIcon,
  Activity as ActivityIcon,
  PieChart as PieChartIcon,
  LineChart as LineChartIcon,
  RefreshCw as RefreshCwIcon,
  Download as DownloadIcon,
  Upload as UploadIcon,
  Play as PlayIcon,
  Pause as PauseIcon,
  Square as SquareIcon,
  Triangle as TriangleIcon,
  Circle as CircleIcon,
  Hexagon as HexagonIcon,
  Building as BuildingIcon,
  Home as HomeIcon,
  Car as CarIcon,
  Plane as PlaneIcon,
  Ship as ShipIcon,
  Truck as TruckIcon,
  Package as PackageIcon,
  ShoppingCart as ShoppingCartIcon,
  MapPin as MapPinIcon,
  Camera as CameraIcon,
  Mic as MicIcon,
  Search as SearchIcon,
  Settings as SettingsIcon,
  Layers as LayersIcon,
  Network as NetworkIcon,
  Wifi as WifiIcon,
  Monitor as MonitorIcon,
  Bot as BotIcon,
  FileText as FileTextIcon
} from 'lucide-react';

export const metadata: Metadata = {
  title: 'AI Customer Insights Platform | Zion Tech Group - Advanced Analytics',
  description: 'Transform customer data into actionable insights with our AI-powered customer analytics platform. Real-time sentiment analysis, behavioral tracking, and predictive customer lifetime value.',
  keywords: 'AI customer insights, customer analytics, sentiment analysis, behavioral tracking, customer lifetime value, predictive analytics, customer intelligence',
};

export default function AICustomerInsightsPlatformPage() {
  const features = [
    {
      icon: <Brain className="w-6 h-6" />,
      title: "AI-Powered Sentiment Analysis",
      description: "Advanced natural language processing to analyze customer feedback, reviews, and social media mentions in real-time.",
      benefits: [
        "Real-time sentiment tracking across all channels",
        "Multi-language support for global businesses",
        "Emotion detection and mood analysis",
        "Automated alert system for negative sentiment spikes"
      ]
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: "Customer Behavior Analytics",
      description: "Deep behavioral analysis to understand customer journey patterns, preferences, and engagement metrics.",
      benefits: [
        "Complete customer journey mapping",
        "Behavioral segmentation and profiling",
        "Engagement pattern recognition",
        "Predictive behavior modeling"
      ]
    },
    {
      icon: <BarChart3 className="w-6 h-6" />,
      title: "Predictive Customer Lifetime Value",
      description: "Machine learning algorithms to predict customer lifetime value and identify high-value prospects.",
      benefits: [
        "CLV prediction with 85%+ accuracy",
        "Churn risk identification and prevention",
        "Revenue forecasting and optimization",
        "Customer scoring and prioritization"
      ]
    },
    {
      icon: <Target className="w-6 h-6" />,
      title: "Personalized Recommendations",
      description: "AI-driven product and content recommendations based on individual customer preferences and behavior.",
      benefits: [
        "Real-time recommendation engine",
        "Cross-channel personalization",
        "A/B testing for recommendation optimization",
        "Dynamic content adaptation"
      ]
    },
    {
      icon: <TrendingUp className="w-6 h-6" />,
      title: "Revenue Optimization",
      description: "Data-driven insights to optimize pricing, promotions, and cross-selling opportunities.",
      benefits: [
        "Dynamic pricing recommendations",
        "Cross-sell and upsell optimization",
        "Promotional campaign effectiveness analysis",
        "Revenue impact forecasting"
      ]
    },
    {
      icon: <Shield className="w-6 h-6" />,
      title: "Privacy-First Analytics",
      description: "GDPR and CCPA compliant analytics with advanced privacy protection and data anonymization.",
      benefits: [
        "Full GDPR and CCPA compliance",
        "Advanced data anonymization",
        "Consent management integration",
        "Secure data processing and storage"
      ]
    }
  ];

  const pricingTiers = [
    {
      name: "Starter",
      price: "$299",
      period: "/month",
      description: "Perfect for small businesses getting started with customer analytics",
      features: [
        "Up to 10,000 customer profiles",
        "Basic sentiment analysis",
        "Standard reporting dashboard",
        "Email support",
        "API access",
        "Data export capabilities"
      ],
      cta: "Start Free Trial",
      popular: false
    },
    {
      name: "Professional",
      price: "$799",
      period: "/month",
      description: "Advanced analytics for growing businesses",
      features: [
        "Up to 100,000 customer profiles",
        "Advanced AI insights and predictions",
        "Custom dashboard creation",
        "Priority support",
        "Advanced API access",
        "Real-time data processing",
        "Custom integrations",
        "A/B testing tools"
      ],
      cta: "Start Free Trial",
      popular: true
    },
    {
      name: "Enterprise",
      price: "Custom",
      period: "",
      description: "Full-scale solution for large enterprises",
      features: [
        "Unlimited customer profiles",
        "Custom AI model training",
        "White-label solution",
        "Dedicated account manager",
        "Custom integrations",
        "Advanced security features",
        "SLA guarantees",
        "On-premise deployment option"
      ],
      cta: "Contact Sales",
      popular: false
    }
  ];

  const useCases = [
    {
      industry: "E-commerce",
      challenge: "Understanding customer preferences and reducing cart abandonment",
      solution: "AI-powered behavioral analysis identifies drop-off points and personalizes product recommendations",
      results: "35% increase in conversion rates, 28% reduction in cart abandonment"
    },
    {
      industry: "SaaS",
      challenge: "Predicting customer churn and improving retention",
      solution: "Predictive analytics identifies at-risk customers and triggers automated retention campaigns",
      results: "42% reduction in churn rate, 25% increase in customer lifetime value"
    },
    {
      industry: "Healthcare",
      challenge: "Improving patient satisfaction and care quality",
      solution: "Sentiment analysis of patient feedback helps identify areas for improvement",
      results: "40% improvement in patient satisfaction scores, 30% reduction in complaints"
    },
    {
      industry: "Financial Services",
      challenge: "Enhancing customer experience and reducing support costs",
      solution: "Behavioral analytics predicts customer needs and enables proactive support",
      results: "50% reduction in support tickets, 60% improvement in customer satisfaction"
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-blue-50 to-indigo-100 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
              AI Customer Insights Platform
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
              Transform customer data into actionable insights with our advanced AI-powered analytics platform. 
              Understand your customers like never before with real-time sentiment analysis, behavioral tracking, 
              and predictive customer lifetime value.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                href="/contact" 
                className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
              >
                Start Free Trial
              </Link>
              <Link 
                href="#demo" 
                className="border border-blue-600 text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors"
              >
                Watch Demo
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Key Features */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Powerful AI-Driven Features
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Advanced analytics capabilities powered by cutting-edge artificial intelligence
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="bg-white p-6 rounded-xl shadow-lg border border-gray-100 hover:shadow-xl transition-shadow">
                <div className="flex items-center mb-4">
                  <div className="p-2 bg-blue-100 rounded-lg text-blue-600 mr-3">
                    {feature.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900">{feature.title}</h3>
                </div>
                <p className="text-gray-600 mb-4">{feature.description}</p>
                <ul className="space-y-2">
                  {feature.benefits.map((benefit, benefitIndex) => (
                    <li key={benefitIndex} className="flex items-start">
                      <CheckCircle className="w-4 h-4 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                      <span className="text-sm text-gray-600">{benefit}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Transparent Pricing
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Choose the plan that fits your business needs. All plans include a 14-day free trial.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {pricingTiers.map((tier, index) => (
              <div key={index} className={`bg-white p-8 rounded-xl shadow-lg border-2 transition-all ${
                tier.popular ? 'border-blue-500 relative' : 'border-gray-200'
              }`}>
                {tier.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-blue-500 text-white px-4 py-1 rounded-full text-sm font-semibold">
                      Most Popular
                    </span>
                  </div>
                )}
                
                <div className="text-center mb-6">
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">{tier.name}</h3>
                  <div className="flex items-baseline justify-center mb-2">
                    <span className="text-4xl font-bold text-gray-900">{tier.price}</span>
                    <span className="text-gray-600 ml-1">{tier.period}</span>
                  </div>
                  <p className="text-gray-600">{tier.description}</p>
                </div>
                
                <ul className="space-y-3 mb-8">
                  {tier.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-600">{feature}</span>
                    </li>
                  ))}
                </ul>
                
                <Link
                  href={tier.name === 'Enterprise' ? '/contact' : '/contact'}
                  className={`w-full block text-center py-3 px-6 rounded-lg font-semibold transition-colors ${
                    tier.popular
                      ? 'bg-blue-600 text-white hover:bg-blue-700'
                      : 'bg-gray-100 text-gray-900 hover:bg-gray-200'
                  }`}
                >
                  {tier.cta}
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Use Cases */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Real-World Success Stories
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              See how businesses across industries are transforming with AI customer insights
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {useCases.map((useCase, index) => (
              <div key={index} className="bg-white p-6 rounded-xl shadow-lg border border-gray-100">
                <div className="mb-4">
                  <span className="inline-block bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-semibold mb-3">
                    {useCase.industry}
                  </span>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">Challenge</h3>
                  <p className="text-gray-600 mb-4">{useCase.challenge}</p>
                </div>
                
                <div className="mb-4">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">Solution</h3>
                  <p className="text-gray-600 mb-4">{useCase.solution}</p>
                </div>
                
                <div className="bg-green-50 p-4 rounded-lg">
                  <h3 className="text-lg font-semibold text-green-800 mb-2">Results</h3>
                  <p className="text-green-700 font-medium">{useCase.results}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Transform Your Customer Understanding?
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Join hundreds of businesses already using AI customer insights to drive growth and improve customer satisfaction.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              href="/contact" 
              className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
            >
              Start Free Trial
            </Link>
            <Link 
              href="/contact" 
              className="border border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors"
            >
              Schedule Demo
            </Link>
          </div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-2xl font-bold text-gray-900 mb-8">Get Started Today</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <Phone className="w-8 h-8 text-blue-600 mx-auto mb-4" />
                <h3 className="font-semibold text-gray-900 mb-2">Phone</h3>
                <p className="text-gray-600">+1 302 464 0950</p>
              </div>
              <div className="text-center">
                <Mail className="w-8 h-8 text-blue-600 mx-auto mb-4" />
                <h3 className="font-semibold text-gray-900 mb-2">Email</h3>
                <p className="text-gray-600">kleber@ziontechgroup.com</p>
              </div>
              <div className="text-center">
                <MapPin className="w-8 h-8 text-blue-600 mx-auto mb-4" />
                <h3 className="font-semibold text-gray-900 mb-2">Address</h3>
                <p className="text-gray-600">364 E Main St STE 1008<br />Middletown DE 19709</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
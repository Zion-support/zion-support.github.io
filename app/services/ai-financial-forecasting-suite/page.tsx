import React from 'react';
import { Metadata } from 'next';
import Link from 'next/link';
import { 
  TrendingUp, 
  BarChart3, 
  PieChart, 
  LineChart, 
  DollarSign, 
  Calculator, 
  Target, 
  Zap, 
  CheckCircle, 
  ArrowRight, 
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
  Users,
  Brain,
  MessageSquare,
  Eye
} from 'lucide-react';

export const metadata: Metadata = {
  title: 'AI Financial Forecasting Suite | Zion Tech Group - Predictive Finance',
  description: 'Advanced AI-powered financial forecasting and analysis platform. Real-time market predictions, risk assessment, and automated financial planning for businesses.',
  keywords: 'AI financial forecasting, predictive finance, financial analytics, risk assessment, market predictions, automated financial planning',
};

export default function AIFinancialForecastingSuitePage() {
  const features = [
    {
      icon: <TrendingUp className="w-6 h-6" />,
      title: "AI Market Predictions",
      description: "Advanced machine learning models analyze market trends, economic indicators, and historical data to predict future market movements.",
      benefits: [
        "Real-time market analysis and predictions",
        "Multi-asset portfolio optimization",
        "Risk-adjusted return forecasting",
        "Market volatility prediction models"
      ]
    },
    {
      icon: <BarChart3 className="w-6 h-6" />,
      title: "Automated Financial Planning",
      description: "AI-driven financial planning that adapts to changing market conditions and business objectives.",
      benefits: [
        "Dynamic budget allocation and optimization",
        "Cash flow forecasting with 95%+ accuracy",
        "Automated financial goal tracking",
        "Scenario planning and stress testing"
      ]
    },
    {
      icon: <Shield className="w-6 h-6" />,
      title: "Advanced Risk Assessment",
      description: "Comprehensive risk analysis using AI to identify potential financial threats and opportunities.",
      benefits: [
        "Multi-dimensional risk modeling",
        "Credit risk assessment and scoring",
        "Operational risk identification",
        "Regulatory compliance monitoring"
      ]
    },
    {
      icon: <Calculator className="w-6 h-6" />,
      title: "Investment Optimization",
      description: "AI-powered investment strategies that maximize returns while minimizing risk exposure.",
      benefits: [
        "Portfolio optimization algorithms",
        "Asset allocation recommendations",
        "Tax-efficient investment strategies",
        "Performance attribution analysis"
      ]
    },
    {
      icon: <Target className="w-6 h-6" />,
      title: "Goal-Based Planning",
      description: "Personalized financial planning based on individual or business goals and risk tolerance.",
      benefits: [
        "Custom financial goal setting",
        "Progress tracking and monitoring",
        "Automated rebalancing recommendations",
        "Goal achievement probability analysis"
      ]
    },
    {
      icon: <Database className="w-6 h-6" />,
      title: "Real-Time Data Integration",
      description: "Seamless integration with financial data sources for up-to-date analysis and reporting.",
      benefits: [
        "Multi-source data aggregation",
        "Real-time market data feeds",
        "Automated data validation and cleaning",
        "Custom data source integration"
      ]
    }
  ];

  const pricingTiers = [
    {
      name: "Professional",
      price: "$499",
      period: "/month",
      description: "Perfect for financial advisors and small businesses",
      features: [
        "Up to 50 portfolios",
        "Basic AI forecasting models",
        "Standard risk assessment",
        "Email support",
        "API access",
        "Monthly reporting"
      ],
      cta: "Start Free Trial",
      popular: false
    },
    {
      name: "Enterprise",
      price: "$1,299",
      period: "/month",
      description: "Advanced features for growing financial firms",
      features: [
        "Up to 500 portfolios",
        "Advanced AI models and customization",
        "Comprehensive risk analysis",
        "Priority support",
        "Advanced API access",
        "Real-time reporting",
        "Custom integrations",
        "White-label options"
      ],
      cta: "Start Free Trial",
      popular: true
    },
    {
      name: "Institutional",
      price: "Custom",
      period: "",
      description: "Full-scale solution for large financial institutions",
      features: [
        "Unlimited portfolios",
        "Custom AI model development",
        "Full white-label solution",
        "Dedicated account manager",
        "Custom integrations",
        "Advanced security features",
        "SLA guarantees",
        "On-premise deployment"
      ],
      cta: "Contact Sales",
      popular: false
    }
  ];

  const useCases = [
    {
      industry: "Investment Management",
      challenge: "Optimizing portfolio performance while managing risk exposure",
      solution: "AI-powered portfolio optimization algorithms automatically rebalance portfolios based on market conditions and risk parameters",
      results: "23% improvement in risk-adjusted returns, 35% reduction in portfolio volatility"
    },
    {
      industry: "Corporate Finance",
      challenge: "Accurate cash flow forecasting and budget planning",
      solution: "Advanced AI models analyze historical patterns and market conditions to predict future cash flows with high accuracy",
      results: "92% accuracy in cash flow predictions, 40% improvement in budget planning efficiency"
    },
    {
      industry: "Banking",
      challenge: "Credit risk assessment and loan portfolio management",
      solution: "Machine learning models analyze borrower behavior and economic indicators to assess credit risk",
      results: "45% reduction in bad debt, 30% improvement in loan approval accuracy"
    },
    {
      industry: "Insurance",
      challenge: "Pricing policies accurately while maintaining profitability",
      solution: "AI-driven actuarial models predict risk factors and optimize pricing strategies",
      results: "28% improvement in pricing accuracy, 22% increase in profit margins"
    }
  ];

  const marketData = [
    { metric: "Forecasting Accuracy", value: "94.2%", description: "Average accuracy across all financial predictions" },
    { metric: "Risk Reduction", value: "35%", description: "Average reduction in portfolio risk exposure" },
    { metric: "ROI Improvement", value: "28%", description: "Average improvement in return on investment" },
    { metric: "Time Savings", value: "75%", description: "Reduction in manual financial analysis time" }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-green-50 to-blue-100 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
              AI Financial Forecasting Suite
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
              Transform your financial planning with advanced AI-powered forecasting and analysis. 
              Predict market trends, optimize investments, and make data-driven financial decisions 
              with unprecedented accuracy.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                href="/contact" 
                className="bg-green-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-green-700 transition-colors"
              >
                Start Free Trial
              </Link>
              <Link 
                href="#demo" 
                className="border border-green-600 text-green-600 px-8 py-3 rounded-lg font-semibold hover:bg-green-50 transition-colors"
              >
                Watch Demo
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Market Performance */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Proven Performance</h2>
            <p className="text-xl text-gray-600">Real results from our AI financial forecasting platform</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {marketData.map((data, index) => (
              <div key={index} className="bg-white p-6 rounded-xl shadow-lg border border-gray-100 text-center">
                <div className="text-3xl font-bold text-green-600 mb-2">{data.value}</div>
                <div className="text-lg font-semibold text-gray-900 mb-2">{data.metric}</div>
                <div className="text-sm text-gray-600">{data.description}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Key Features */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Advanced AI Financial Capabilities
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Cutting-edge artificial intelligence for comprehensive financial analysis and forecasting
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="bg-white p-6 rounded-xl shadow-lg border border-gray-100 hover:shadow-xl transition-shadow">
                <div className="flex items-center mb-4">
                  <div className="p-2 bg-green-100 rounded-lg text-green-600 mr-3">
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
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Flexible Pricing Plans
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Choose the plan that fits your financial analysis needs. All plans include a 30-day free trial.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {pricingTiers.map((tier, index) => (
              <div key={index} className={`bg-white p-8 rounded-xl shadow-lg border-2 transition-all ${
                tier.popular ? 'border-green-500 relative' : 'border-gray-200'
              }`}>
                {tier.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-green-500 text-white px-4 py-1 rounded-full text-sm font-semibold">
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
                  href={tier.name === 'Institutional' ? '/contact' : '/contact'}
                  className={`w-full block text-center py-3 px-6 rounded-lg font-semibold transition-colors ${
                    tier.popular
                      ? 'bg-green-600 text-white hover:bg-green-700'
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
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Industry Success Stories
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              See how financial institutions are achieving better results with AI forecasting
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {useCases.map((useCase, index) => (
              <div key={index} className="bg-white p-6 rounded-xl shadow-lg border border-gray-100">
                <div className="mb-4">
                  <span className="inline-block bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-semibold mb-3">
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
      <section className="py-20 bg-gradient-to-r from-green-600 to-blue-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Revolutionize Your Financial Planning?
          </h2>
          <p className="text-xl text-green-100 mb-8 max-w-2xl mx-auto">
            Join leading financial institutions using AI to make smarter, more profitable decisions.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              href="/contact" 
              className="bg-white text-green-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
            >
              Start Free Trial
            </Link>
            <Link 
              href="/contact" 
              className="border border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-green-600 transition-colors"
            >
              Schedule Demo
            </Link>
          </div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-2xl font-bold text-gray-900 mb-8">Get Started Today</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <Phone className="w-8 h-8 text-green-600 mx-auto mb-4" />
                <h3 className="font-semibold text-gray-900 mb-2">Phone</h3>
                <p className="text-gray-600">+1 302 464 0950</p>
              </div>
              <div className="text-center">
                <Mail className="w-8 h-8 text-green-600 mx-auto mb-4" />
                <h3 className="font-semibold text-gray-900 mb-2">Email</h3>
                <p className="text-gray-600">kleber@ziontechgroup.com</p>
              </div>
              <div className="text-center">
                <MapPin className="w-8 h-8 text-green-600 mx-auto mb-4" />
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
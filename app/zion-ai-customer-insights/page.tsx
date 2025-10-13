import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Brain, 
  Users, 
  BarChart3, 
  TrendingUp, 
  Eye, 
  Target, 
  Zap, 
  Shield, 
  Clock, 
  DollarSign, 
  ArrowRight,
  CheckCircle,
  Star,
  PieChart,
  Activity,
  MessageSquare,
  Globe,
  Smartphone
} from 'lucide-react';
import EnhancedSEO from '../components/EnhancedSEO';

const ZionAICustomerInsightsPage: React.FC = () => {
  const features = [
    {
      title: "Customer Segmentation",
      description: "Automatically segment customers based on behavior, preferences, and demographics",
      icon: <Users className="w-6 h-6" />
    },
    {
      title: "Behavior Analysis",
      description: "Track and analyze customer interactions across all touchpoints",
      icon: <Eye className="w-6 h-6" />
    },
    {
      title: "Predictive Analytics",
      description: "Predict customer lifetime value, churn risk, and purchase likelihood",
      icon: <TrendingUp className="w-6 h-6" />
    },
    {
      title: "Sentiment Analysis",
      description: "Analyze customer feedback and social media sentiment in real-time",
      icon: <MessageSquare className="w-6 h-6" />
    },
    {
      title: "Custom Reports",
      description: "Generate detailed reports tailored to your business needs",
      icon: <BarChart3 className="w-6 h-6" />
    },
    {
      title: "Real-time Insights",
      description: "Get instant insights as customer data is collected and processed",
      icon: <Zap className="w-6 h-6" />
    }
  ];

  const pricingPlans = [
    {
      name: "Starter",
      price: "$149",
      period: "month",
      description: "Perfect for small businesses starting with customer analytics",
      features: [
        "Up to 10,000 customers",
        "Basic segmentation",
        "Standard reports",
        "Email support",
        "Monthly insights"
      ],
      popular: false
    },
    {
      name: "Professional",
      price: "$399",
      period: "month",
      description: "Ideal for growing businesses with advanced analytics needs",
      features: [
        "Up to 100,000 customers",
        "Advanced segmentation",
        "Predictive analytics",
        "Custom reports",
        "Priority support",
        "Real-time insights",
        "API access"
      ],
      popular: true
    },
    {
      name: "Enterprise",
      price: "$799",
      period: "month",
      description: "Complete solution for large organizations with complex requirements",
      features: [
        "Unlimited customers",
        "AI-powered insights",
        "Custom models",
        "White-label reports",
        "24/7 dedicated support",
        "Custom integrations",
        "SLA guarantee",
        "On-premise deployment"
      ],
      popular: false
    }
  ];

  const useCases = [
    {
      title: "Marketing Optimization",
      description: "Optimize marketing campaigns based on customer behavior and preferences",
      icon: <Target className="w-8 h-8" />
    },
    {
      title: "Customer Retention",
      description: "Identify at-risk customers and implement retention strategies",
      icon: <Users className="w-8 h-8" />
    },
    {
      title: "Product Development",
      description: "Use customer insights to guide product development decisions",
      icon: <Brain className="w-8 h-8" />
    },
    {
      title: "Sales Forecasting",
      description: "Predict sales trends and optimize inventory management",
      icon: <TrendingUp className="w-8 h-8" />
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <EnhancedSEO
        title="Zion AI Customer Insights - Advanced Customer Analytics | Zion Tech Group"
        description="Transform your customer data into actionable insights with Zion AI Customer Insights. Advanced analytics, segmentation, and predictive modeling for better business decisions."
        keywords="customer insights, customer analytics, customer segmentation, predictive analytics, customer behavior, business intelligence"
        canonical="https://ziontechgroup.com/zion-ai-customer-insights"
      />

      {/* Hero Section */}
      <section className="pt-20 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center">
            <div className="flex items-center justify-center mb-6">
              <Brain className="w-16 h-16 text-blue-400 mr-4" />
              <h1 className="text-4xl md:text-6xl font-bold text-white">
                Zion AI <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">Customer Insights</span>
              </h1>
            </div>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Unlock the power of your customer data with advanced AI analytics. 
              Get deep insights into customer behavior, preferences, and trends to drive better business decisions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-8 rounded-lg transition-colors duration-200 flex items-center justify-center space-x-2"
              >
                <span>Start Free Trial</span>
                <ArrowRight className="w-5 h-5" />
              </Link>
              <Link
                to="/demo"
                className="bg-gray-800 hover:bg-gray-700 text-white font-semibold py-3 px-8 rounded-lg transition-colors duration-200 flex items-center justify-center space-x-2"
              >
                <span>Watch Demo</span>
                <ArrowRight className="w-5 h-5" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-white mb-4">Powerful Features</h2>
            <p className="text-gray-300 max-w-2xl mx-auto">
              Advanced AI-powered analytics to understand your customers like never before.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-6 border border-gray-700/50">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-blue-600/20 rounded-lg flex items-center justify-center mr-4">
                    <div className="text-blue-400">
                      {feature.icon}
                    </div>
                  </div>
                  <h3 className="text-xl font-semibold text-white">{feature.title}</h3>
                </div>
                <p className="text-gray-300">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Use Cases Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-white mb-4">Use Cases</h2>
            <p className="text-gray-300 max-w-2xl mx-auto">
              Transform your business with data-driven customer insights.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {useCases.map((useCase, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-blue-600/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <div className="text-blue-400">
                    {useCase.icon}
                  </div>
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">{useCase.title}</h3>
                <p className="text-gray-300">{useCase.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-white mb-4">Pricing Plans</h2>
            <p className="text-gray-300 max-w-2xl mx-auto">
              Choose the perfect plan for your customer analytics needs.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {pricingPlans.map((plan, index) => (
              <div
                key={index}
                className={`bg-gray-800/50 backdrop-blur-sm rounded-xl p-8 border ${
                  plan.popular
                    ? 'border-blue-500 ring-2 ring-blue-500/20'
                    : 'border-gray-700/50'
                } relative`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-blue-600 text-white px-4 py-1 rounded-full text-sm font-medium">
                      Most Popular
                    </span>
                  </div>
                )}
                <div className="text-center mb-6">
                  <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                  <p className="text-gray-300 mb-4">{plan.description}</p>
                  <div className="flex items-baseline justify-center">
                    <span className="text-4xl font-bold text-white">{plan.price}</span>
                    <span className="text-gray-400 ml-2">/{plan.period}</span>
                  </div>
                </div>
                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-gray-300">
                      <CheckCircle className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <Link
                  to="/contact"
                  className={`w-full py-3 px-6 rounded-lg font-semibold transition-colors duration-200 flex items-center justify-center space-x-2 ${
                    plan.popular
                      ? 'bg-blue-600 hover:bg-blue-700 text-white'
                      : 'bg-gray-700 hover:bg-gray-600 text-white'
                  }`}
                >
                  <span>Get Started</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="bg-gradient-to-r from-blue-600/20 to-purple-600/20 backdrop-blur-sm rounded-xl p-8 border border-gray-700/50 text-center">
            <h2 className="text-3xl font-bold text-white mb-4">
              Ready to Unlock Customer Insights?
            </h2>
            <p className="text-gray-300 mb-8">
              Start your free trial today and discover what your customers really want.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-8 rounded-lg transition-colors duration-200 flex items-center justify-center space-x-2"
              >
                <span>Start Free Trial</span>
                <ArrowRight className="w-5 h-5" />
              </Link>
              <Link
                to="/demo"
                className="bg-gray-800 hover:bg-gray-700 text-white font-semibold py-3 px-8 rounded-lg transition-colors duration-200 flex items-center justify-center space-x-2"
              >
                <span>Schedule Demo</span>
                <ArrowRight className="w-5 h-5" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ZionAICustomerInsightsPage;
import React from 'react';
import { Helmet } from 'react-helmet-async';
import { 
  Truck, 
  Package, 
  BarChart3, 
  Target, 
  Clock, 
  DollarSign, 
  CheckCircle, 
  Star, 
  ArrowRight, 
  Phone, 
  Mail, 
  MapPin,
  Brain,
  Warehouse,
  Globe,
  TrendingUp,
  Shield,
  Zap,
  Users,
  Settings,
  Activity,
  PieChart,
  LineChart,
  Building,
  Award
} from 'lucide-react';

const AiSupplyChainOptimizerProPage: React.FC = () => {
  const features = [
    "AI-powered demand forecasting",
    "Automated inventory optimization",
    "Real-time supply chain monitoring",
    "Predictive maintenance alerts",
    "Route optimization algorithms",
    "Supplier performance analytics",
    "Risk assessment & mitigation",
    "Cost reduction recommendations",
    "Quality control automation",
    "Compliance monitoring",
    "Multi-warehouse management",
    "Integration with ERP systems"
  ];

  const benefits = [
    "Reduce supply chain costs by 30%",
    "Improve inventory turnover by 40%",
    "Decrease lead times by 50%",
    "Increase supplier reliability by 60%",
    "Minimize stockouts by 80%",
    "Optimize transportation costs by 25%"
  ];

  const useCases = [
    "Manufacturing optimization",
    "Retail inventory management",
    "E-commerce fulfillment",
    "Pharmaceutical supply chains",
    "Food & beverage distribution",
    "Automotive parts management"
  ];

  const pricing = {
    starter: {
      price: "$199/month",
      originalPrice: "$299/month",
      users: "Up to 5 warehouses",
      features: [
        "Basic demand forecasting",
        "Inventory tracking",
        "Supplier monitoring",
        "Basic reporting",
        "Email support",
        "Standard integrations"
      ]
    },
    professional: {
      price: "$399/month",
      originalPrice: "$599/month",
      users: "Up to 25 warehouses",
      features: [
        "Advanced AI algorithms",
        "Real-time optimization",
        "Predictive analytics",
        "Route optimization",
        "Advanced reporting",
        "Priority support",
        "Custom integrations",
        "API access"
      ],
      popular: true
    },
    enterprise: {
      price: "$799/month",
      originalPrice: "$1199/month",
      users: "Unlimited warehouses",
      features: [
        "Custom AI models",
        "White-label solution",
        "Advanced analytics",
        "Custom workflows",
        "Dedicated support",
        "Compliance monitoring",
        "Custom reporting",
        "Training & onboarding"
      ]
    }
  };

  return (
    <>
      <Helmet>
        <title>AI Supply Chain Optimizer Pro - Intelligent Logistics Management | Zion Tech Group</title>
        <meta name="description" content="Revolutionize your supply chain with AI Supply Chain Optimizer Pro. Get intelligent demand forecasting, inventory optimization, and automated logistics management. Start your free trial today!" />
        <meta name="keywords" content="AI supply chain, logistics optimization, inventory management, demand forecasting, supply chain AI, warehouse management, logistics automation" />
        <meta property="og:title" content="AI Supply Chain Optimizer Pro - Intelligent Logistics Management" />
        <meta property="og:description" content="Transform your supply chain operations with AI-powered optimization, predictive analytics, and automated logistics management." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://ziontechgroup.com/ai-supply-chain-optimizer-pro" />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        {/* Hero Section */}
        <section className="py-20 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <div className="inline-flex items-center px-4 py-2 bg-green-500/10 border border-green-500/20 rounded-full text-green-400 text-sm font-medium mb-6">
                <Truck className="w-4 h-4 mr-2" />
                AI-Powered Supply Chain Intelligence
              </div>
              <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
                <span className="bg-gradient-to-r from-green-400 to-blue-400 bg-clip-text text-transparent">
                  AI Supply Chain
                </span>
                <br />
                <span className="text-white">Optimizer Pro</span>
              </h1>
              <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto mb-8 leading-relaxed">
                Transform your supply chain operations with our advanced AI-powered platform. 
                Optimize inventory, predict demand, reduce costs, and streamline logistics 
                with intelligent automation and real-time insights.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
                <a
                  href="tel:+13024640950"
                  className="bg-gradient-to-r from-green-500 to-blue-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:from-green-600 hover:to-blue-700 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-green-500/25 flex items-center justify-center"
                >
                  <Phone className="w-5 h-5 mr-2" />
                  Call +1 302 464 0950
                </a>
                <a
                  href="mailto:kleber@ziontechgroup.com"
                  className="border-2 border-green-400 text-green-400 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-green-400 hover:text-slate-900 transition-all duration-300 flex items-center justify-center"
                >
                  <Mail className="w-5 h-5 mr-2" />
                  Start Free Trial
                </a>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
                <div className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-r from-green-500/20 to-blue-500/20 rounded-lg flex items-center justify-center mx-auto mb-3">
                    <DollarSign className="w-8 h-8 text-green-400" />
                  </div>
                  <div className="text-3xl font-bold text-white mb-1">30%</div>
                  <div className="text-gray-400 text-sm font-semibold">Cost Reduction</div>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-lg flex items-center justify-center mx-auto mb-3">
                    <TrendingUp className="w-8 h-8 text-blue-400" />
                  </div>
                  <div className="text-3xl font-bold text-white mb-1">40%</div>
                  <div className="text-gray-400 text-sm font-semibold">Inventory Turnover</div>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-lg flex items-center justify-center mx-auto mb-3">
                    <Clock className="w-8 h-8 text-purple-400" />
                  </div>
                  <div className="text-3xl font-bold text-white mb-1">50%</div>
                  <div className="text-gray-400 text-sm font-semibold">Faster Lead Times</div>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-r from-orange-500/20 to-red-500/20 rounded-lg flex items-center justify-center mx-auto mb-3">
                    <Shield className="w-8 h-8 text-orange-400" />
                  </div>
                  <div className="text-3xl font-bold text-white mb-1">80%</div>
                  <div className="text-gray-400 text-sm font-semibold">Fewer Stockouts</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20 bg-gradient-to-b from-slate-800 to-slate-900">
          <div className="max-w-7xl mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Advanced <span className="bg-gradient-to-r from-green-400 to-blue-400 bg-clip-text text-transparent">AI Features</span>
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Our AI Supply Chain Optimizer Pro leverages machine learning and predictive analytics 
                to revolutionize your logistics operations and drive measurable results.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {features.map((feature, index) => (
                <div key={index} className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6 hover:border-green-400/50 transition-all duration-300 group">
                  <div className="flex items-center space-x-3 mb-4">
                    <div className="w-10 h-10 bg-gradient-to-r from-green-500 to-blue-600 rounded-lg flex items-center justify-center">
                      <CheckCircle className="w-5 h-5 text-white" />
                    </div>
                    <h3 className="text-lg font-semibold text-white group-hover:text-green-400 transition-colors">
                      {feature}
                    </h3>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Pricing Section */}
        <section className="py-20 bg-slate-900/50">
          <div className="max-w-7xl mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Choose Your <span className="bg-gradient-to-r from-green-400 to-blue-400 bg-clip-text text-transparent">Plan</span>
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Flexible pricing options designed to scale with your supply chain needs. 
                Start with our free trial and optimize your operations today.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {Object.entries(pricing).map(([plan, details]) => (
                <div
                  key={plan}
                  className={`relative bg-white/10 backdrop-blur-lg rounded-2xl p-8 border ${
                    details.popular
                      ? "border-green-400 shadow-2xl shadow-green-500/25 scale-105"
                      : "border-white/20"
                  } hover:border-green-400 transition-all duration-300 group`}
                >
                  {details.popular && (
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                      <div className="bg-gradient-to-r from-green-500 to-blue-500 text-white px-4 py-2 rounded-full text-sm font-semibold flex items-center gap-2">
                        <Star className="w-4 h-4 fill-current" />
                        Most Popular
                      </div>
                    </div>
                  )}

                  <div className="text-center mb-8">
                    <h3 className="text-2xl font-bold text-white mb-2 capitalize">{plan}</h3>
                    <div className="flex items-center justify-center gap-2 mb-4">
                      <span className="text-4xl font-bold text-white">{details.price}</span>
                      {details.originalPrice && (
                        <span className="text-gray-400 text-lg line-through">{details.originalPrice}</span>
                      )}
                    </div>
                    <p className="text-gray-400 text-sm">{details.users}</p>
                  </div>

                  <ul className="space-y-4 mb-8">
                    {details.features.map((feature, index) => (
                      <li key={index} className="flex items-center text-gray-300">
                        <CheckCircle className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>

                  <a
                    href="mailto:kleber@ziontechgroup.com"
                    className={`w-full py-3 px-6 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 flex items-center justify-center gap-2 ${
                      details.popular
                        ? "bg-gradient-to-r from-green-500 to-blue-500 text-white hover:from-green-600 hover:to-blue-600"
                        : "bg-white/10 text-white border border-white/20 hover:bg-white/20"
                    }`}
                  >
                    Start Free Trial
                    <ArrowRight className="w-4 h-4" />
                  </a>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-20 bg-gradient-to-b from-slate-800 to-slate-900">
          <div className="max-w-7xl mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Why Choose <span className="bg-gradient-to-r from-green-400 to-blue-400 bg-clip-text text-transparent">AI Supply Chain Optimizer Pro</span>?
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Experience the future of supply chain management with our AI-powered platform that delivers 
                measurable results and operational excellence.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {benefits.map((benefit, index) => (
                <div key={index} className="text-center group">
                  <div className="w-20 h-20 bg-gradient-to-r from-green-500 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                    <TrendingUp className="w-10 h-10 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-4">{benefit}</h3>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Use Cases Section */}
        <section className="py-20 bg-slate-900/50">
          <div className="max-w-7xl mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Perfect For <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">Every Industry</span>
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Our AI platform adapts to various industries and supply chain complexities, 
                delivering optimized solutions for your specific business needs.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {useCases.map((useCase, index) => (
                <div key={index} className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6 hover:border-blue-400/50 transition-all duration-300 group">
                  <div className="flex items-center space-x-3 mb-4">
                    <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">
                      <Target className="w-5 h-5 text-white" />
                    </div>
                    <h3 className="text-lg font-semibold text-white group-hover:text-blue-400 transition-colors">
                      {useCase}
                    </h3>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section className="py-20 bg-gray-900">
          <div className="max-w-6xl mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Ready to Optimize Your Supply Chain?
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
                Join industry leaders who trust AI Supply Chain Optimizer Pro to streamline their operations. 
                Start your free trial today and experience the power of AI-driven logistics management.
              </p>
            </div>

            <div className="bg-gradient-to-r from-green-600/20 to-blue-600/20 rounded-2xl p-8 border border-green-500/20">
              <div className="text-center">
                <h3 className="text-2xl font-bold text-white mb-4">Get Started Today</h3>
                <p className="text-gray-300 mb-6">
                  Contact our supply chain experts to discuss your optimization needs and start your AI-powered transformation.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <a
                    href="tel:+13024640950"
                    className="bg-gradient-to-r from-green-500 to-blue-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:from-green-600 hover:to-blue-700 transition-all duration-300 transform hover:scale-105 flex items-center justify-center"
                  >
                    <Phone className="w-5 h-5 mr-2" />
                    Call +1 302 464 0950
                  </a>
                  <a
                    href="mailto:kleber@ziontechgroup.com"
                    className="border-2 border-green-400 text-green-400 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-green-400 hover:text-slate-900 transition-all duration-300 flex items-center justify-center"
                  >
                    <Mail className="w-5 h-5 mr-2" />
                    Start Free Trial
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default AiSupplyChainOptimizerProPage;
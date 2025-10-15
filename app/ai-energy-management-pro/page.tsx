import React from 'react';
import { Helmet } from 'react-helmet-async';
import { 
  Zap, 
  Battery, 
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
  Leaf,
  Sun,
  Wind,
  Activity,
  TrendingUp,
  Shield,
  Settings,
  Users,
  PieChart,
  LineChart,
  Building,
  Award,
  Globe,
  Thermometer
} from 'lucide-react';

const AiEnergyManagementProPage: React.FC = () => {
  const features = [
    "AI-powered energy consumption analysis",
    "Real-time energy monitoring & alerts",
    "Predictive maintenance scheduling",
    "Renewable energy optimization",
    "Smart grid integration",
    "Carbon footprint tracking",
    "Energy cost optimization",
    "Peak demand management",
    "Equipment efficiency monitoring",
    "Automated energy reporting",
    "Multi-site energy management",
    "Integration with IoT devices"
  ];

  const benefits = [
    "Reduce energy costs by 35%",
    "Improve energy efficiency by 45%",
    "Decrease carbon footprint by 50%",
    "Optimize renewable energy usage by 60%",
    "Prevent equipment failures by 80%",
    "Achieve sustainability goals 2x faster"
  ];

  const useCases = [
    "Commercial building management",
    "Manufacturing facilities",
    "Data centers",
    "Retail chains",
    "Healthcare facilities",
    "Educational institutions"
  ];

  const pricing = {
    basic: {
      price: "$149/month",
      originalPrice: "$199/month",
      users: "Up to 5 buildings",
      features: [
        "Basic energy monitoring",
        "Consumption tracking",
        "Cost analysis",
        "Basic reporting",
        "Email support",
        "Standard integrations"
      ]
    },
    professional: {
      price: "$299/month",
      originalPrice: "$399/month",
      users: "Up to 25 buildings",
      features: [
        "Advanced AI analytics",
        "Real-time optimization",
        "Predictive maintenance",
        "Renewable energy management",
        "Advanced reporting",
        "Priority support",
        "Custom integrations",
        "API access"
      ],
      popular: true
    },
    enterprise: {
      price: "$599/month",
      originalPrice: "$799/month",
      users: "Unlimited buildings",
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
        <title>AI Energy Management Pro - Smart Energy Optimization | Zion Tech Group</title>
        <meta name="description" content="Optimize your energy consumption with AI Energy Management Pro. Get intelligent energy monitoring, cost reduction, and sustainability solutions. Start your free trial today!" />
        <meta name="keywords" content="AI energy management, energy optimization, smart energy, energy monitoring, renewable energy, energy efficiency, sustainability, carbon footprint" />
        <meta property="og:title" content="AI Energy Management Pro - Smart Energy Optimization" />
        <meta property="og:description" content="Transform your energy consumption with AI-powered optimization, real-time monitoring, and intelligent sustainability solutions." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://ziontechgroup.com/ai-energy-management-pro" />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        {/* Hero Section */}
        <section className="py-20 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <div className="inline-flex items-center px-4 py-2 bg-yellow-500/10 border border-yellow-500/20 rounded-full text-yellow-400 text-sm font-medium mb-6">
                <Zap className="w-4 h-4 mr-2" />
                AI-Powered Energy Intelligence
              </div>
              <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
                <span className="bg-gradient-to-r from-yellow-400 to-orange-400 bg-clip-text text-transparent">
                  AI Energy
                </span>
                <br />
                <span className="text-white">Management Pro</span>
              </h1>
              <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto mb-8 leading-relaxed">
                Revolutionize your energy consumption with our advanced AI-powered platform. 
                Monitor, optimize, and reduce energy costs while achieving your sustainability 
                goals with intelligent automation and real-time insights.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
                <a
                  href="tel:+13024640950"
                  className="bg-gradient-to-r from-yellow-500 to-orange-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:from-yellow-600 hover:to-orange-700 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-yellow-500/25 flex items-center justify-center"
                >
                  <Phone className="w-5 h-5 mr-2" />
                  Call +1 302 464 0950
                </a>
                <a
                  href="mailto:kleber@ziontechgroup.com"
                  className="border-2 border-yellow-400 text-yellow-400 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-yellow-400 hover:text-slate-900 transition-all duration-300 flex items-center justify-center"
                >
                  <Mail className="w-5 h-5 mr-2" />
                  Start Free Trial
                </a>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
                <div className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-r from-yellow-500/20 to-orange-500/20 rounded-lg flex items-center justify-center mx-auto mb-3">
                    <DollarSign className="w-8 h-8 text-yellow-400" />
                  </div>
                  <div className="text-3xl font-bold text-white mb-1">35%</div>
                  <div className="text-gray-400 text-sm font-semibold">Cost Reduction</div>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-r from-green-500/20 to-blue-500/20 rounded-lg flex items-center justify-center mx-auto mb-3">
                    <TrendingUp className="w-8 h-8 text-green-400" />
                  </div>
                  <div className="text-3xl font-bold text-white mb-1">45%</div>
                  <div className="text-gray-400 text-sm font-semibold">Efficiency Gain</div>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-lg flex items-center justify-center mx-auto mb-3">
                    <Leaf className="w-8 h-8 text-blue-400" />
                  </div>
                  <div className="text-3xl font-bold text-white mb-1">50%</div>
                  <div className="text-gray-400 text-sm font-semibold">Carbon Reduction</div>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-lg flex items-center justify-center mx-auto mb-3">
                    <Shield className="w-8 h-8 text-purple-400" />
                  </div>
                  <div className="text-3xl font-bold text-white mb-1">80%</div>
                  <div className="text-gray-400 text-sm font-semibold">Failure Prevention</div>
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
                Smart <span className="bg-gradient-to-r from-yellow-400 to-orange-400 bg-clip-text text-transparent">Energy Features</span>
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Our AI Energy Management Pro combines machine learning, IoT integration, and 
                predictive analytics to deliver comprehensive energy optimization solutions.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {features.map((feature, index) => (
                <div key={index} className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6 hover:border-yellow-400/50 transition-all duration-300 group">
                  <div className="flex items-center space-x-3 mb-4">
                    <div className="w-10 h-10 bg-gradient-to-r from-yellow-500 to-orange-600 rounded-lg flex items-center justify-center">
                      <CheckCircle className="w-5 h-5 text-white" />
                    </div>
                    <h3 className="text-lg font-semibold text-white group-hover:text-yellow-400 transition-colors">
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
                Choose Your <span className="bg-gradient-to-r from-yellow-400 to-orange-400 bg-clip-text text-transparent">Plan</span>
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Flexible pricing options designed to scale with your energy management needs. 
                Start with our free trial and optimize your energy consumption today.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {Object.entries(pricing).map(([plan, details]) => (
                <div
                  key={plan}
                  className={`relative bg-white/10 backdrop-blur-lg rounded-2xl p-8 border ${
                    details.popular
                      ? "border-yellow-400 shadow-2xl shadow-yellow-500/25 scale-105"
                      : "border-white/20"
                  } hover:border-yellow-400 transition-all duration-300 group`}
                >
                  {details.popular && (
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                      <div className="bg-gradient-to-r from-yellow-500 to-orange-500 text-white px-4 py-2 rounded-full text-sm font-semibold flex items-center gap-2">
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
                        ? "bg-gradient-to-r from-yellow-500 to-orange-500 text-white hover:from-yellow-600 hover:to-orange-600"
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
                Why Choose <span className="bg-gradient-to-r from-yellow-400 to-orange-400 bg-clip-text text-transparent">AI Energy Management Pro</span>?
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Experience the future of energy management with our AI-powered platform that delivers 
                measurable results and sustainable solutions.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {benefits.map((benefit, index) => (
                <div key={index} className="text-center group">
                  <div className="w-20 h-20 bg-gradient-to-r from-yellow-500 to-orange-600 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
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
                Perfect For <span className="bg-gradient-to-r from-green-400 to-blue-400 bg-clip-text text-transparent">Every Facility</span>
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Our AI platform adapts to various facility types and energy requirements, 
                delivering optimized solutions for your specific sustainability goals.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {useCases.map((useCase, index) => (
                <div key={index} className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6 hover:border-green-400/50 transition-all duration-300 group">
                  <div className="flex items-center space-x-3 mb-4">
                    <div className="w-10 h-10 bg-gradient-to-r from-green-500 to-blue-600 rounded-lg flex items-center justify-center">
                      <Target className="w-5 h-5 text-white" />
                    </div>
                    <h3 className="text-lg font-semibold text-white group-hover:text-green-400 transition-colors">
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
                Ready to Optimize Your Energy Consumption?
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
                Join sustainability leaders who trust AI Energy Management Pro to reduce costs and 
                achieve their environmental goals. Start your free trial today.
              </p>
            </div>

            <div className="bg-gradient-to-r from-yellow-600/20 to-orange-600/20 rounded-2xl p-8 border border-yellow-500/20">
              <div className="text-center">
                <h3 className="text-2xl font-bold text-white mb-4">Get Started Today</h3>
                <p className="text-gray-300 mb-6">
                  Contact our energy management experts to discuss your optimization needs and start your sustainable transformation.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <a
                    href="tel:+13024640950"
                    className="bg-gradient-to-r from-yellow-500 to-orange-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:from-yellow-600 hover:to-orange-700 transition-all duration-300 transform hover:scale-105 flex items-center justify-center"
                  >
                    <Phone className="w-5 h-5 mr-2" />
                    Call +1 302 464 0950
                  </a>
                  <a
                    href="mailto:kleber@ziontechgroup.com"
                    className="border-2 border-yellow-400 text-yellow-400 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-yellow-400 hover:text-slate-900 transition-all duration-300 flex items-center justify-center"
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

export default AiEnergyManagementProPage;
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { 
  Rocket, 
  Zap, 
  Shield, 
  Brain, 
  Target, 
  CheckCircle,
  ArrowRight,
  Satellite,
  Globe,
  Activity,
  BarChart3,
  Settings
} from "lucide-react";

const ZionAISpaceOptimizerPage = () => {
  const features = [
    {
      icon: <Rocket className="w-8 h-8" />,
      title: "Mission Optimization",
      description: "AI-powered trajectory planning and fuel optimization for space missions with 99.9% accuracy and cost reduction up to 40%."
    },
    {
      icon: <Satellite className="w-8 h-8" />,
      title: "Satellite Management",
      description: "Intelligent satellite constellation management with collision avoidance and optimal positioning algorithms."
    },
    {
      icon: <Brain className="w-8 h-8" />,
      title: "Predictive Analytics",
      description: "Advanced machine learning models predict space weather, debris patterns, and mission success probabilities."
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: "Risk Assessment",
      description: "Real-time risk analysis and mitigation strategies for space operations with automated emergency protocols."
    }
  ];

  const pricingPlans = [
    {
      name: "Explorer",
      price: "$2,999",
      period: "/month",
      description: "For small space missions",
      features: [
        "Up to 5 satellites",
        "Basic mission planning",
        "Email support",
        "Standard analytics",
        "Mobile app access"
      ],
      popular: false
    },
    {
      name: "Mission Control",
      price: "$9,999",
      period: "/month",
      description: "Most comprehensive",
      features: [
        "Up to 50 satellites",
        "Advanced AI optimization",
        "Real-time monitoring",
        "Priority support",
        "Custom integrations",
        "API access"
      ],
      popular: true
    },
    {
      name: "Enterprise",
      price: "$49,999",
      period: "/month",
      description: "For space agencies",
      features: [
        "Unlimited satellites",
        "Custom AI training",
        "Dedicated support team",
        "White-label solution",
        "24/7 monitoring",
        "Government compliance"
      ],
      popular: false
    }
  ];

  const stats = [
    { label: "Missions Optimized", value: "1,247", icon: <Rocket className="w-6 h-6" /> },
    { label: "Fuel Saved", value: "40%", icon: <Zap className="w-6 h-6" /> },
    { label: "Success Rate", value: "99.9%", icon: <Target className="w-6 h-6" /> },
    { label: "Countries", value: "25+", icon: <Globe className="w-6 h-6" /> }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-indigo-900 to-slate-900">
      <Helmet>
        <title>Zion AI Space Optimizer - Advanced Space Mission Optimization Platform</title>
        <meta
          name="description"
          content="Revolutionary AI-powered space mission optimization platform with trajectory planning, satellite management, and predictive analytics for space operations."
        />
        <meta
          name="keywords"
          content="space optimization, satellite management, mission planning, space AI, trajectory optimization, space technology"
        />
      </Helmet>

      {/* Hero Section */}
      <section className="pt-20 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-indigo-600 to-purple-600 text-white text-sm font-medium mb-8">
            <Rocket className="w-4 h-4 mr-2" />
            AI-Powered Space Revolution
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold mb-8 bg-gradient-to-r from-white via-indigo-200 to-purple-200 bg-clip-text text-transparent">
            Zion AI Space Optimizer
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-300 mb-12 max-w-4xl mx-auto">
            The world's most advanced AI-powered space mission optimization platform. 
            Maximize mission success while minimizing costs and risks in space operations.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
            <Link
              to="/demo"
              className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-indigo-600 to-purple-600 text-white font-semibold rounded-lg hover:from-indigo-700 hover:to-purple-700 transition-all duration-300 transform hover:scale-105"
            >
              Start Free Trial
              <ArrowRight className="w-5 h-5 ml-2" />
            </Link>
            <Link
              to="/contact"
              className="inline-flex items-center px-8 py-4 border-2 border-indigo-500 text-indigo-300 font-semibold rounded-lg hover:bg-indigo-500 hover:text-white transition-all duration-300"
            >
              Schedule Demo
            </Link>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="inline-flex items-center justify-center w-12 h-12 bg-gradient-to-r from-indigo-600 to-purple-600 rounded-lg mb-4">
                  {stat.icon}
                </div>
                <div className="text-3xl font-bold text-white mb-2">{stat.value}</div>
                <div className="text-gray-400">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Advanced Space Optimization Features
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Our AI-powered platform provides comprehensive space mission optimization with 
              intelligent planning, risk assessment, and real-time monitoring.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div
                key={index}
                className="bg-gradient-to-br from-slate-800 to-slate-900 p-8 rounded-2xl border border-slate-700 hover:border-indigo-500 transition-all duration-300 group"
              >
                <div className="text-indigo-400 mb-6 group-hover:scale-110 transition-transform duration-300">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold text-white mb-4">{feature.title}</h3>
                <p className="text-gray-300">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-slate-800 to-slate-900">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              How It Works
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Get started with AI-powered space mission optimization in three simple steps
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-indigo-600 to-purple-600 rounded-full text-white text-2xl font-bold mb-6">
                1
              </div>
              <h3 className="text-2xl font-semibold text-white mb-4">Define Mission</h3>
              <p className="text-gray-300">
                Input your mission parameters, objectives, and constraints. 
                Our AI analyzes requirements and suggests optimal configurations.
              </p>
            </div>

            <div className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-indigo-600 to-purple-600 rounded-full text-white text-2xl font-bold mb-6">
                2
              </div>
              <h3 className="text-2xl font-semibold text-white mb-4">AI Optimization</h3>
              <p className="text-gray-300">
                Our advanced algorithms calculate optimal trajectories, fuel requirements, 
                and timing while considering space weather and debris patterns.
              </p>
            </div>

            <div className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-indigo-600 to-purple-600 rounded-full text-white text-2xl font-bold mb-6">
                3
              </div>
              <h3 className="text-2xl font-semibold text-white mb-4">Execute & Monitor</h3>
              <p className="text-gray-300">
                Execute your optimized mission with real-time monitoring, 
                automated adjustments, and emergency response protocols.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Choose Your Plan
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Start with our free trial and choose the plan that fits your space mission needs
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {pricingPlans.map((plan, index) => (
              <div
                key={index}
                className={`relative bg-gradient-to-br from-slate-800 to-slate-900 p-8 rounded-2xl border-2 ${
                  plan.popular 
                    ? 'border-indigo-500 shadow-2xl shadow-indigo-500/20' 
                    : 'border-slate-700'
                }`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white px-6 py-2 rounded-full text-sm font-semibold">
                      Most Popular
                    </span>
                  </div>
                )}
                
                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                  <p className="text-gray-400 mb-4">{plan.description}</p>
                  <div className="flex items-baseline justify-center">
                    <span className="text-5xl font-bold text-white">{plan.price}</span>
                    <span className="text-gray-400 ml-2">{plan.period}</span>
                  </div>
                </div>

                <ul className="space-y-4 mb-8">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center">
                      <CheckCircle className="w-5 h-5 text-indigo-400 mr-3 flex-shrink-0" />
                      <span className="text-gray-300">{feature}</span>
                    </li>
                  ))}
                </ul>

                <Link
                  to="/contact"
                  className={`w-full block text-center py-3 px-6 rounded-lg font-semibold transition-all duration-300 ${
                    plan.popular
                      ? 'bg-gradient-to-r from-indigo-600 to-purple-600 text-white hover:from-indigo-700 hover:to-purple-700'
                      : 'border-2 border-indigo-500 text-indigo-300 hover:bg-indigo-500 hover:text-white'
                  }`}
                >
                  Get Started
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-indigo-900 to-purple-900">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Launch Your Space Mission Today
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Join leading space agencies and private companies who trust Zion AI Space Optimizer 
            to maximize mission success and minimize costs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/demo"
              className="inline-flex items-center px-8 py-4 bg-white text-indigo-900 font-semibold rounded-lg hover:bg-gray-100 transition-all duration-300 transform hover:scale-105"
            >
              Start Free Trial
              <ArrowRight className="w-5 h-5 ml-2" />
            </Link>
            <Link
              to="/contact"
              className="inline-flex items-center px-8 py-4 border-2 border-white text-white font-semibold rounded-lg hover:bg-white hover:text-indigo-900 transition-all duration-300"
            >
              Contact Sales
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ZionAISpaceOptimizerPage;
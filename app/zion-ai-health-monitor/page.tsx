import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { 
  Heart, 
  Activity, 
  Shield, 
  Zap, 
  Brain, 
  Target, 
  CheckCircle,
  ArrowRight,
  Stethoscope,
  TrendingUp,
  Clock,
  Smartphone
} from "lucide-react";

const ZionAIHealthMonitorPage = () => {
  const features = [
    {
      icon: <Heart className="w-8 h-8" />,
      title: "Real-time Health Monitoring",
      description: "Continuous monitoring of vital signs, heart rate, blood pressure, and oxygen levels with AI-powered analysis."
    },
    {
      icon: <Brain className="w-8 h-8" />,
      title: "AI Health Predictions",
      description: "Advanced machine learning algorithms predict potential health issues before they become serious problems."
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: "Emergency Alerts",
      description: "Instant notifications to emergency contacts and healthcare providers when critical health parameters are detected."
    },
    {
      icon: <Activity className="w-8 h-8" />,
      title: "Fitness Tracking",
      description: "Comprehensive activity tracking with personalized workout recommendations and progress monitoring."
    }
  ];

  const pricingPlans = [
    {
      name: "Basic",
      price: "$29",
      period: "/month",
      description: "Essential health monitoring",
      features: [
        "Basic vital signs tracking",
        "Health trend analysis",
        "Mobile app access",
        "Email alerts",
        "Basic AI insights"
      ],
      popular: false
    },
    {
      name: "Professional",
      price: "$79",
      period: "/month",
      description: "Most comprehensive",
      features: [
        "Advanced health monitoring",
        "AI health predictions",
        "Emergency response system",
        "Doctor integration",
        "Family sharing",
        "Custom health goals"
      ],
      popular: true
    },
    {
      name: "Enterprise",
      price: "$199",
      period: "/month",
      description: "For healthcare providers",
      features: [
        "Multi-patient monitoring",
        "HIPAA compliance",
        "API integration",
        "Custom dashboards",
        "24/7 support",
        "White-label solution"
      ],
      popular: false
    }
  ];

  const stats = [
    { label: "Lives Saved", value: "1,247", icon: <Heart className="w-6 h-6" /> },
    { label: "Active Users", value: "250K+", icon: <Activity className="w-6 h-6" /> },
    { label: "Health Predictions", value: "99.2%", icon: <Target className="w-6 h-6" /> },
    { label: "Countries", value: "85+", icon: <Smartphone className="w-6 h-6" /> }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-green-900 to-slate-900">
      <Helmet>
        <title>Zion AI Health Monitor - Advanced AI-Powered Health Monitoring System</title>
        <meta
          name="description"
          content="Revolutionary AI-powered health monitoring system with real-time vital signs tracking, health predictions, and emergency alerts. Protect your health with cutting-edge technology."
        />
        <meta
          name="keywords"
          content="AI health monitoring, health tracking, vital signs, health predictions, medical AI, health technology, wellness monitoring"
        />
      </Helmet>

      {/* Hero Section */}
      <section className="pt-20 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-green-600 to-blue-600 text-white text-sm font-medium mb-8">
            <Heart className="w-4 h-4 mr-2" />
            AI-Powered Health Revolution
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold mb-8 bg-gradient-to-r from-white via-green-200 to-blue-200 bg-clip-text text-transparent">
            Zion AI Health Monitor
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-300 mb-12 max-w-4xl mx-auto">
            The world's most advanced AI-powered health monitoring system. 
            Track your health, predict issues, and get emergency alerts when you need them most.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
            <Link
              to="/demo"
              className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-green-600 to-blue-600 text-white font-semibold rounded-lg hover:from-green-700 hover:to-blue-700 transition-all duration-300 transform hover:scale-105"
            >
              Start Free Trial
              <ArrowRight className="w-5 h-5 ml-2" />
            </Link>
            <Link
              to="/contact"
              className="inline-flex items-center px-8 py-4 border-2 border-green-500 text-green-300 font-semibold rounded-lg hover:bg-green-500 hover:text-white transition-all duration-300"
            >
              Schedule Demo
            </Link>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="inline-flex items-center justify-center w-12 h-12 bg-gradient-to-r from-green-600 to-blue-600 rounded-lg mb-4">
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
              Advanced Health Monitoring Features
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Our AI-powered platform provides comprehensive health monitoring with 
              real-time analysis and predictive insights to keep you healthy and safe.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div
                key={index}
                className="bg-gradient-to-br from-slate-800 to-slate-900 p-8 rounded-2xl border border-slate-700 hover:border-green-500 transition-all duration-300 group"
              >
                <div className="text-green-400 mb-6 group-hover:scale-110 transition-transform duration-300">
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
              Get started with AI-powered health monitoring in three simple steps
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-green-600 to-blue-600 rounded-full text-white text-2xl font-bold mb-6">
                1
              </div>
              <h3 className="text-2xl font-semibold text-white mb-4">Connect Your Devices</h3>
              <p className="text-gray-300">
                Sync your smartwatch, fitness tracker, or medical devices with our platform. 
                We support 200+ devices from Apple, Samsung, Fitbit, and more.
              </p>
            </div>

            <div className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-green-600 to-blue-600 rounded-full text-white text-2xl font-bold mb-6">
                2
              </div>
              <h3 className="text-2xl font-semibold text-white mb-4">AI Analysis</h3>
              <p className="text-gray-300">
                Our AI algorithms analyze your health data in real-time, identifying patterns, 
                trends, and potential health issues before they become serious.
              </p>
            </div>

            <div className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-green-600 to-blue-600 rounded-full text-white text-2xl font-bold mb-6">
                3
              </div>
              <h3 className="text-2xl font-semibold text-white mb-4">Get Insights & Alerts</h3>
              <p className="text-gray-300">
                Receive personalized health insights, recommendations, and emergency alerts 
                when critical health parameters are detected.
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
              Start with our free trial and choose the plan that fits your health monitoring needs
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {pricingPlans.map((plan, index) => (
              <div
                key={index}
                className={`relative bg-gradient-to-br from-slate-800 to-slate-900 p-8 rounded-2xl border-2 ${
                  plan.popular 
                    ? 'border-green-500 shadow-2xl shadow-green-500/20' 
                    : 'border-slate-700'
                }`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-gradient-to-r from-green-600 to-blue-600 text-white px-6 py-2 rounded-full text-sm font-semibold">
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
                      <CheckCircle className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" />
                      <span className="text-gray-300">{feature}</span>
                    </li>
                  ))}
                </ul>

                <Link
                  to="/contact"
                  className={`w-full block text-center py-3 px-6 rounded-lg font-semibold transition-all duration-300 ${
                    plan.popular
                      ? 'bg-gradient-to-r from-green-600 to-blue-600 text-white hover:from-green-700 hover:to-blue-700'
                      : 'border-2 border-green-500 text-green-300 hover:bg-green-500 hover:text-white'
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
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-green-900 to-blue-900">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Take Control of Your Health Today
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Join millions of users who trust Zion AI Health Monitor to keep them healthy, 
            safe, and informed about their health status.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/demo"
              className="inline-flex items-center px-8 py-4 bg-white text-green-900 font-semibold rounded-lg hover:bg-gray-100 transition-all duration-300 transform hover:scale-105"
            >
              Start Free Trial
              <ArrowRight className="w-5 h-5 ml-2" />
            </Link>
            <Link
              to="/contact"
              className="inline-flex items-center px-8 py-4 border-2 border-white text-white font-semibold rounded-lg hover:bg-white hover:text-green-900 transition-all duration-300"
            >
              Contact Sales
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ZionAIHealthMonitorPage;
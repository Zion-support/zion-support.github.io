import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { 
  Home, 
  Zap, 
  Shield, 
  Brain, 
  Smartphone, 
  CheckCircle,
  ArrowRight,
  Wifi,
  Lock,
  Thermometer,
  Lightbulb,
  Camera
} from "lucide-react";

const ZionAISmartHomePage = () => {
  const features = [
    {
      icon: <Brain className="w-8 h-8" />,
      title: "AI Home Assistant",
      description: "Intelligent voice and app control with learning capabilities that adapt to your daily routines and preferences."
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: "Advanced Security",
      description: "24/7 monitoring with AI-powered facial recognition, motion detection, and instant alerts to your devices."
    },
    {
      icon: <Zap className="w-8 h-8" />,
      title: "Energy Optimization",
      description: "Smart energy management that reduces costs by up to 40% through intelligent scheduling and usage patterns."
    },
    {
      icon: <Smartphone className="w-8 h-8" />,
      title: "Mobile Control",
      description: "Complete home control from anywhere in the world with our intuitive mobile app and web dashboard."
    }
  ];

  const pricingPlans = [
    {
      name: "Starter",
      price: "$199",
      period: "/month",
      description: "Perfect for apartments",
      features: [
        "Up to 10 devices",
        "Basic AI assistant",
        "Mobile app access",
        "Email support",
        "Basic security"
      ],
      popular: false
    },
    {
      name: "Professional",
      price: "$399",
      period: "/month",
      description: "Most popular choice",
      features: [
        "Up to 50 devices",
        "Advanced AI learning",
        "Premium security suite",
        "Energy optimization",
        "Priority support",
        "Custom automation"
      ],
      popular: true
    },
    {
      name: "Enterprise",
      price: "$799",
      period: "/month",
      description: "For large properties",
      features: [
        "Unlimited devices",
        "Custom AI training",
        "Professional installation",
        "24/7 monitoring",
        "API integration",
        "White-label solution"
      ],
      popular: false
    }
  ];

  const stats = [
    { label: "Homes Automated", value: "50K+", icon: <Home className="w-6 h-6" /> },
    { label: "Energy Saved", value: "40%", icon: <Zap className="w-6 h-6" /> },
    { label: "Security Incidents", value: "99.9%", icon: <Shield className="w-6 h-6" /> },
    { label: "Customer Satisfaction", value: "98%", icon: <CheckCircle className="w-6 h-6" /> }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900">
      <Helmet>
        <title>Zion AI Smart Home - Intelligent Home Automation System</title>
        <meta
          name="description"
          content="Revolutionary AI-powered smart home automation system with intelligent control, advanced security, energy optimization, and seamless device integration."
        />
        <meta
          name="keywords"
          content="smart home, home automation, AI assistant, smart security, energy management, IoT devices, home control"
        />
      </Helmet>

      {/* Hero Section */}
      <section className="pt-20 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-blue-600 to-purple-600 text-white text-sm font-medium mb-8">
            <Home className="w-4 h-4 mr-2" />
            AI-Powered Home Revolution
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold mb-8 bg-gradient-to-r from-white via-blue-200 to-purple-200 bg-clip-text text-transparent">
            Zion AI Smart Home
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-300 mb-12 max-w-4xl mx-auto">
            Transform your home into an intelligent ecosystem with AI-powered automation, 
            advanced security, and energy optimization that learns and adapts to your lifestyle.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
            <Link
              to="/demo"
              className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-lg hover:from-blue-700 hover:to-purple-700 transition-all duration-300 transform hover:scale-105"
            >
              Start Free Trial
              <ArrowRight className="w-5 h-5 ml-2" />
            </Link>
            <Link
              to="/contact"
              className="inline-flex items-center px-8 py-4 border-2 border-blue-500 text-blue-300 font-semibold rounded-lg hover:bg-blue-500 hover:text-white transition-all duration-300"
            >
              Schedule Demo
            </Link>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="inline-flex items-center justify-center w-12 h-12 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg mb-4">
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
              Intelligent Home Features
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Our AI-powered platform provides comprehensive home automation with 
              intelligent control, security, and energy management.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div
                key={index}
                className="bg-gradient-to-br from-slate-800 to-slate-900 p-8 rounded-2xl border border-slate-700 hover:border-blue-500 transition-all duration-300 group"
              >
                <div className="text-blue-400 mb-6 group-hover:scale-110 transition-transform duration-300">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold text-white mb-4">{feature.title}</h3>
                <p className="text-gray-300">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Device Integration */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-slate-800 to-slate-900">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Compatible Devices
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Connect and control thousands of smart devices from leading manufacturers
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8">
            {[
              { name: "Smart Lights", icon: <Lightbulb className="w-8 h-8" /> },
              { name: "Thermostats", icon: <Thermometer className="w-8 h-8" /> },
              { name: "Security Cameras", icon: <Camera className="w-8 h-8" /> },
              { name: "Smart Locks", icon: <Lock className="w-8 h-8" /> },
              { name: "WiFi Routers", icon: <Wifi className="w-8 h-8" /> },
              { name: "Smart Speakers", icon: <Smartphone className="w-8 h-8" /> }
            ].map((device, index) => (
              <div key={index} className="text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg mb-4">
                  {device.icon}
                </div>
                <div className="text-white font-semibold">{device.name}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              How It Works
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Get started with AI-powered home automation in three simple steps
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full text-white text-2xl font-bold mb-6">
                1
              </div>
              <h3 className="text-2xl font-semibold text-white mb-4">Install Hub</h3>
              <p className="text-gray-300">
                Our AI hub connects to your home network and automatically discovers 
                compatible smart devices throughout your home.
              </p>
            </div>

            <div className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full text-white text-2xl font-bold mb-6">
                2
              </div>
              <h3 className="text-2xl font-semibold text-white mb-4">Configure AI</h3>
              <p className="text-gray-300">
                Set up your preferences, routines, and automation rules. 
                Our AI learns your patterns and optimizes your home accordingly.
              </p>
            </div>

            <div className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full text-white text-2xl font-bold mb-6">
                3
              </div>
              <h3 className="text-2xl font-semibold text-white mb-4">Enjoy Automation</h3>
              <p className="text-gray-300">
                Control your home with voice commands, mobile app, or let AI handle 
                everything automatically based on your preferences and schedule.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-slate-800 to-slate-900">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Choose Your Plan
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Start with our free trial and choose the plan that fits your home automation needs
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {pricingPlans.map((plan, index) => (
              <div
                key={index}
                className={`relative bg-gradient-to-br from-slate-800 to-slate-900 p-8 rounded-2xl border-2 ${
                  plan.popular 
                    ? 'border-blue-500 shadow-2xl shadow-blue-500/20' 
                    : 'border-slate-700'
                }`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-2 rounded-full text-sm font-semibold">
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
                      <CheckCircle className="w-5 h-5 text-blue-400 mr-3 flex-shrink-0" />
                      <span className="text-gray-300">{feature}</span>
                    </li>
                  ))}
                </ul>

                <Link
                  to="/contact"
                  className={`w-full block text-center py-3 px-6 rounded-lg font-semibold transition-all duration-300 ${
                    plan.popular
                      ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white hover:from-blue-700 hover:to-purple-700'
                      : 'border-2 border-blue-500 text-blue-300 hover:bg-blue-500 hover:text-white'
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
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-blue-900 to-purple-900">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Transform Your Home Today
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Join thousands of homeowners who have transformed their living spaces 
            with Zion AI Smart Home automation.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/demo"
              className="inline-flex items-center px-8 py-4 bg-white text-blue-900 font-semibold rounded-lg hover:bg-gray-100 transition-all duration-300 transform hover:scale-105"
            >
              Start Free Trial
              <ArrowRight className="w-5 h-5 ml-2" />
            </Link>
            <Link
              to="/contact"
              className="inline-flex items-center px-8 py-4 border-2 border-white text-white font-semibold rounded-lg hover:bg-white hover:text-blue-900 transition-all duration-300"
            >
              Contact Sales
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ZionAISmartHomePage;
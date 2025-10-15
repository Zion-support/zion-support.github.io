import React from 'react';
import { Helmet } from 'react-helmet-async';
import { 
  Cpu, 
  Zap, 
  Shield, 
  CheckCircle, 
  Star, 
  ArrowRight,
  Phone,
  Mail,
  MapPin,
  Clock,
  Users,
  Award,
  Settings,
  Activity,
  BarChart3,
  Wifi
} from 'lucide-react';

const FiveGSmartManufacturingProPage: React.FC = () => {
  const features = [
    "Ultra-Low Latency (1ms)",
    "Massive IoT Connectivity (1M+ devices/km²)",
    "Real-time Process Control",
    "Predictive Maintenance AI",
    "Edge Computing Integration",
    "Quality Control Automation",
    "Supply Chain Optimization",
    "Worker Safety Monitoring",
    "Energy Efficiency Management",
    "Custom Manufacturing Solutions"
  ];

  const pricingPlans = [
    {
      name: "Pilot",
      price: "$2,999",
      period: "/month",
      description: "Perfect for small manufacturing",
      features: [
        "Up to 100 connected devices",
        "Basic 5G connectivity",
        "Standard analytics",
        "Email support",
        "Monthly reporting"
      ],
      popular: false
    },
    {
      name: "Production",
      price: "$7,999",
      period: "/month",
      description: "Most popular for growing facilities",
      features: [
        "Up to 1,000 connected devices",
        "Advanced 5G + Edge computing",
        "AI predictive maintenance",
        "Priority support",
        "Real-time monitoring",
        "Custom integrations",
        "24/7 monitoring"
      ],
      popular: true
    },
    {
      name: "Enterprise",
      price: "$19,999",
      period: "/month",
      description: "For large manufacturing plants",
      features: [
        "Unlimited connected devices",
        "Full 5G + Private networks",
        "Complete AI suite",
        "Dedicated support team",
        "Custom development",
        "White-label solution",
        "SLA guarantee",
        "On-site deployment"
      ],
      popular: false
    }
  ];

  const solutions = [
    {
      title: "Predictive Maintenance",
      description: "AI-powered equipment monitoring prevents downtime and reduces maintenance costs",
      icon: <Settings className="w-6 h-6" />
    },
    {
      title: "Quality Control",
      description: "Real-time quality monitoring with instant defect detection and correction",
      icon: <CheckCircle className="w-6 h-6" />
    },
    {
      title: "Supply Chain Optimization",
      description: "End-to-end visibility and optimization of manufacturing supply chains",
      icon: <Activity className="w-6 h-6" />
    },
    {
      title: "Worker Safety",
      description: "IoT sensors and AI monitoring ensure worker safety and compliance",
      icon: <Shield className="w-6 h-6" />
    }
  ];

  const benefits = [
    {
      title: "30% Cost Reduction",
      description: "Optimize operations and reduce waste with AI insights",
      icon: <BarChart3 className="w-6 h-6" />
    },
    {
      title: "99.9% Uptime",
      description: "Predictive maintenance ensures maximum equipment availability",
      icon: <Award className="w-6 h-6" />
    },
    {
      title: "Real-time Control",
      description: "Ultra-low latency enables instant process adjustments",
      icon: <Zap className="w-6 h-6" />
    },
    {
      title: "Scalable IoT",
      description: "Connect millions of devices with 5G network capacity",
      icon: <Wifi className="w-6 h-6" />
    }
  ];

  const stats = [
    { number: "50+", label: "Manufacturing Plants", icon: <Cpu className="w-6 h-6" /> },
    { number: "1M+", label: "Connected Devices", icon: <Wifi className="w-6 h-6" /> },
    { number: "30%", label: "Efficiency Increase", icon: <BarChart3 className="w-6 h-6" /> },
    { number: "99.9%", label: "Uptime Guarantee", icon: <Award className="w-6 h-6" /> }
  ];

  return (
    <>
      <Helmet>
        <title>5G Smart Manufacturing Pro - Zion Tech Group | Industrial IoT & Automation</title>
        <meta name="description" content="Revolutionary 5G smart manufacturing solutions with AI-powered predictive maintenance, real-time control, and massive IoT connectivity. Transform your production line." />
        <meta name="keywords" content="5G manufacturing, smart factory, industrial IoT, predictive maintenance, edge computing, manufacturing automation, Industry 4.0" />
        <meta property="og:title" content="5G Smart Manufacturing Pro - Zion Tech Group" />
        <meta property="og:description" content="Advanced 5G smart manufacturing with AI-powered automation and IoT connectivity." />
        <meta property="og:type" content="website" />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        {/* Hero Section */}
        <section className="py-20 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-green-500/10 to-blue-500/10"></div>
          <div className="container mx-auto px-4 relative z-10">
            <div className="text-center max-w-4xl mx-auto">
              <div className="inline-flex items-center px-4 py-2 bg-green-500/10 border border-green-500/20 rounded-full text-green-400 text-sm font-medium mb-8">
                <Star className="w-4 h-4 mr-2" />
                Industry 4.0 Leader
              </div>
              <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
                <span className="bg-gradient-to-r from-green-400 via-blue-400 to-cyan-400 bg-clip-text text-transparent">
                  5G Smart Manufacturing Pro
                </span>
              </h1>
              <p className="text-xl md:text-2xl text-gray-300 mb-8 leading-relaxed">
                Transform your manufacturing with 5G-powered smart factory solutions. AI-driven predictive maintenance, 
                real-time control, and massive IoT connectivity for Industry 4.0.
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
                  Get Factory Assessment
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-20 bg-slate-800/50">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
              {stats.map((stat, index) => (
                <div key={index} className="group">
                  <div className="w-16 h-16 bg-gradient-to-r from-green-600 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                    <div className="text-white">{stat.icon}</div>
                  </div>
                  <div className="text-3xl font-bold text-white mb-2">{stat.number}</div>
                  <div className="text-gray-400">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                <span className="bg-gradient-to-r from-green-400 to-blue-400 bg-clip-text text-transparent">
                  Advanced Manufacturing Features
                </span>
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Cutting-edge 5G and AI technologies for next-generation manufacturing
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {features.map((feature, index) => (
                <div key={index} className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 border border-green-500/20 rounded-xl p-6 hover:border-green-400/40 transition-all duration-300 group">
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0" />
                    <span className="text-white font-medium">{feature}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Solutions Section */}
        <section className="py-20 bg-slate-800/50">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-white mb-6">Smart Manufacturing Solutions</h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Comprehensive solutions to optimize your manufacturing operations
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {solutions.map((solution, index) => (
                <div key={index} className="text-center group">
                  <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-blue-600 rounded-xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                    <div className="text-white">{solution.icon}</div>
                  </div>
                  <h3 className="text-xl font-bold text-white mb-4">{solution.title}</h3>
                  <p className="text-gray-300">{solution.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-white mb-6">Why Choose Our Solution?</h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Experience the power of 5G and AI in manufacturing
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {benefits.map((benefit, index) => (
                <div key={index} className="text-center group">
                  <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                    <div className="text-white">{benefit.icon}</div>
                  </div>
                  <h3 className="text-xl font-bold text-white mb-4">{benefit.title}</h3>
                  <p className="text-gray-300">{benefit.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Pricing Section */}
        <section className="py-20 bg-slate-800/50">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-white mb-6">Pricing Plans</h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Choose the perfect manufacturing solution for your facility
              </p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {pricingPlans.map((plan, index) => (
                <div key={index} className={`relative bg-gradient-to-br from-slate-800/50 to-slate-900/50 border rounded-2xl p-8 ${
                  plan.popular 
                    ? 'border-green-400/50 shadow-2xl shadow-green-500/10' 
                    : 'border-green-500/20 hover:border-green-400/40'
                } transition-all duration-300 group`}>
                  {plan.popular && (
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                      <div className="bg-gradient-to-r from-green-500 to-blue-600 text-white px-6 py-2 rounded-full text-sm font-semibold">
                        Most Popular
                      </div>
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
                  
                  <div className="space-y-4 mb-8">
                    {plan.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-center space-x-3">
                        <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0" />
                        <span className="text-gray-300">{feature}</span>
                      </div>
                    ))}
                  </div>
                  
                  <button className={`w-full py-3 px-6 rounded-lg font-semibold transition-all duration-300 ${
                    plan.popular
                      ? 'bg-gradient-to-r from-green-500 to-blue-600 text-white hover:from-green-600 hover:to-blue-700 transform hover:scale-105'
                      : 'border-2 border-green-400 text-green-400 hover:bg-green-400 hover:text-slate-900'
                  }`}>
                    Get Started
                  </button>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section className="py-20 bg-gradient-to-r from-green-600/20 to-blue-600/20">
          <div className="container mx-auto px-4">
            <div className="text-center max-w-4xl mx-auto">
              <h2 className="text-4xl font-bold text-white mb-6">Ready to Transform Your Manufacturing?</h2>
              <p className="text-xl text-gray-300 mb-8">
                Contact us today for a comprehensive manufacturing assessment and see how 5G Smart Manufacturing Pro can optimize your operations.
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
                  kleber@ziontechgroup.com
                </a>
              </div>
              <div className="mt-8 text-gray-400">
                <p>364 E Main St STE 1008, Middletown DE 19709</p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default FiveGSmartManufacturingProPage;
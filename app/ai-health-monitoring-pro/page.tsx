import React from 'react';
import { Helmet } from 'react-helmet-async';
import { 
  Heart, 
  Activity, 
  BarChart3, 
  Zap, 
  CheckCircle, 
  Star,
  ArrowRight,
  Clock,
  Target,
  Shield,
  Smartphone,
  Database,
  AlertTriangle,
  TrendingUp
} from 'lucide-react';

const AiHealthMonitoringProPage: React.FC = () => {
  const features = [
    {
      icon: <Heart className="w-6 h-6" />,
      title: "AI Health Analysis",
      description: "Advanced algorithms analyze your health data to provide personalized insights and recommendations"
    },
    {
      icon: <Activity className="w-6 h-6" />,
      title: "Real-time Monitoring",
      description: "Continuous health monitoring with instant alerts for any concerning changes or patterns"
    },
    {
      icon: <BarChart3 className="w-6 h-6" />,
      title: "Health Trends",
      description: "Track your health progress over time with detailed analytics and trend analysis"
    },
    {
      icon: <Target className="w-6 h-6" />,
      title: "Goal Setting",
      description: "Set personalized health goals and receive AI-powered recommendations to achieve them"
    },
    {
      icon: <Shield className="w-6 h-6" />,
      title: "Privacy Protection",
      description: "HIPAA-compliant data protection with end-to-end encryption for your health information"
    },
    {
      icon: <Smartphone className="w-6 h-6" />,
      title: "Mobile Integration",
      description: "Seamless integration with wearables and health apps for comprehensive data collection"
    }
  ];

  const pricingPlans = [
    {
      name: "Basic",
      price: "$19",
      period: "/month",
      description: "Perfect for individuals starting their health journey",
      features: [
        "Basic Health Tracking",
        "Monthly Reports",
        "Email Support",
        "Standard Metrics",
        "Mobile App",
        "Basic Alerts"
      ],
      popular: false
    },
    {
      name: "Professional",
      price: "$49",
      period: "/month",
      description: "Ideal for health-conscious individuals and fitness enthusiasts",
      features: [
        "Advanced AI Analysis",
        "Real-time Alerts",
        "Priority Support",
        "Custom Health Goals",
        "Wearable Integration",
        "Detailed Analytics",
        "Family Sharing"
      ],
      popular: true
    },
    {
      name: "Enterprise",
      price: "$149",
      period: "/month",
      description: "For healthcare providers and wellness programs",
      features: [
        "Patient Management",
        "HIPAA Compliance",
        "24/7 Support",
        "Custom Integrations",
        "Advanced Security",
        "Reporting Dashboard",
        "API Access"
      ],
      popular: false
    }
  ];

  const healthMetrics = [
    {
      title: "Heart Rate",
      description: "Continuous heart rate monitoring with arrhythmia detection",
      icon: <Heart className="w-8 h-8" />
    },
    {
      title: "Sleep Quality",
      description: "Comprehensive sleep analysis with improvement recommendations",
      icon: <Clock className="w-8 h-8" />
    },
    {
      title: "Activity Levels",
      description: "Track steps, calories, and exercise with AI-powered insights",
      icon: <Activity className="w-8 h-8" />
    },
    {
      title: "Stress Management",
      description: "Monitor stress levels and receive personalized relaxation techniques",
      icon: <Target className="w-8 h-8" />
    }
  ];

  const integrations = [
    { name: "Apple Health", icon: <Smartphone className="w-6 h-6" />, color: "text-gray-600" },
    { name: "Google Fit", icon: <Activity className="w-6 h-6" />, color: "text-green-600" },
    { name: "Fitbit", icon: <Heart className="w-6 h-6" />, color: "text-blue-600" },
    { name: "Garmin", icon: <Target className="w-6 h-6" />, color: "text-orange-600" },
    { name: "Samsung Health", icon: <BarChart3 className="w-6 h-6" />, color: "text-purple-600" },
    { name: "MyFitnessPal", icon: <TrendingUp className="w-6 h-6" />, color: "text-cyan-600" }
  ];

  return (
    <>
      <Helmet>
        <title>AI Health Monitoring Pro - Zion Tech Group | Intelligent Health Management</title>
        <meta name="description" content="Revolutionary AI-powered health monitoring platform. Track vital signs, analyze health trends, and receive personalized recommendations. Improve your health with intelligent monitoring." />
        <meta name="keywords" content="AI health monitoring, health tracking, vital signs, health analytics, wellness, health management" />
        <meta property="og:title" content="AI Health Monitoring Pro - Zion Tech Group" />
        <meta property="og:description" content="Transform your health with AI-powered monitoring and personalized insights." />
        <meta property="og:type" content="website" />
        <link rel="canonical" href="https://ziontechgroup.com/ai-health-monitoring-pro" />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        {/* Hero Section */}
        <section className="relative py-20 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 to-purple-500/10"></div>
          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-4xl mx-auto text-center">
              <div className="inline-flex items-center px-4 py-2 bg-cyan-500/10 border border-cyan-500/20 rounded-full text-cyan-400 text-sm font-medium mb-6">
                <Star className="w-4 h-4 mr-2" />
                #1 AI Health Monitoring Platform
              </div>
              
              <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
                <span className="bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                  AI Health Monitoring
                </span>
                <br />
                <span className="text-white">Pro</span>
              </h1>
              
              <p className="text-xl md:text-2xl text-gray-300 mb-8 leading-relaxed">
                Transform your health with AI-powered monitoring, personalized insights, and proactive 
                health management. Track vital signs, analyze trends, and receive intelligent 
                recommendations for better health.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
                <button className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-cyan-500/25 flex items-center justify-center">
                  <Zap className="w-5 h-5 mr-2" />
                  Start Free Trial
                </button>
                <button className="border-2 border-cyan-400 text-cyan-400 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300 flex items-center justify-center">
                  <Heart className="w-5 h-5 mr-2" />
                  Schedule Demo
                </button>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-3xl mx-auto">
                <div className="text-center">
                  <div className="text-3xl font-bold text-cyan-400 mb-2">50K+</div>
                  <div className="text-gray-400 text-sm">Active Users</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-purple-400 mb-2">99.9%</div>
                  <div className="text-gray-400 text-sm">Accuracy Rate</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-pink-400 mb-2">24/7</div>
                  <div className="text-gray-400 text-sm">Health Monitoring</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-green-400 mb-2">HIPAA</div>
                  <div className="text-gray-400 text-sm">Compliant</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20 bg-slate-800/30">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Powerful <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400">Features</span>
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Everything you need to monitor and improve your health with AI-powered insights
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {features.map((feature, index) => (
                <div key={index} className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-sm border border-cyan-500/20 rounded-xl p-6 hover:border-cyan-400/40 transition-all duration-300 group">
                  <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                    <div className="text-white">{feature.icon}</div>
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3">{feature.title}</h3>
                  <p className="text-gray-300 leading-relaxed">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Health Metrics */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-white mb-6">Comprehensive Health Tracking</h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Monitor all aspects of your health with AI-powered analysis and insights
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {healthMetrics.map((metric, index) => (
                <div key={index} className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-sm border border-cyan-500/20 rounded-xl p-6 text-center hover:border-cyan-400/40 transition-all duration-300 group">
                  <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-lg flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                    <div className="text-white">{metric.icon}</div>
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3">{metric.title}</h3>
                  <p className="text-gray-300 leading-relaxed">{metric.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Integrations */}
        <section className="py-20 bg-slate-800/30">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-white mb-6">Seamless Integrations</h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Connect with your favorite health and fitness apps and devices
              </p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
              {integrations.map((integration, index) => (
                <div key={index} className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-sm border border-cyan-500/20 rounded-xl p-6 text-center hover:border-cyan-400/40 transition-all duration-300 group">
                  <div className={`w-12 h-12 mx-auto mb-3 ${integration.color} group-hover:scale-110 transition-transform duration-300`}>
                    {integration.icon}
                  </div>
                  <h3 className="text-white font-semibold">{integration.name}</h3>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Pricing Section */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Simple <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400">Pricing</span>
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Choose the perfect plan for your health monitoring needs
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {pricingPlans.map((plan, index) => (
                <div key={index} className={`relative bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-sm border rounded-xl p-8 ${
                  plan.popular 
                    ? 'border-cyan-400/50 shadow-lg shadow-cyan-500/10' 
                    : 'border-cyan-500/20'
                } hover:border-cyan-400/40 transition-all duration-300 group`}>
                  {plan.popular && (
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                      <div className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-4 py-2 rounded-full text-sm font-semibold">
                        Most Popular
                      </div>
                    </div>
                  )}
                  
                  <div className="text-center mb-6">
                    <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                    <p className="text-gray-400 mb-4">{plan.description}</p>
                    <div className="flex items-baseline justify-center">
                      <span className="text-4xl font-bold text-cyan-400">{plan.price}</span>
                      <span className="text-gray-400 ml-1">{plan.period}</span>
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

                  <button className={`w-full py-3 px-6 rounded-lg font-semibold transition-all duration-300 ${
                    plan.popular
                      ? 'bg-gradient-to-r from-cyan-500 to-purple-600 text-white hover:from-cyan-600 hover:to-purple-700 transform hover:scale-105'
                      : 'border-2 border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-slate-900'
                  }`}>
                    {plan.popular ? 'Start Free Trial' : 'Get Started'}
                  </button>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-r from-cyan-600/20 to-purple-600/20">
          <div className="container mx-auto px-4">
            <div className="text-center max-w-4xl mx-auto">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Ready to Transform Your Health?
              </h2>
              <p className="text-xl text-gray-300 mb-8">
                Join thousands of users already using AI to monitor and improve their health. 
                Start your free trial today - no credit card required!
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="bg-gradient-to-r from-cyan-600 to-purple-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:from-cyan-700 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 flex items-center justify-center">
                  <Zap className="w-5 h-5 mr-2" />
                  Start Free Trial
                </button>
                <button className="border-2 border-cyan-400 text-cyan-400 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300 flex items-center justify-center">
                  <Heart className="w-5 h-5 mr-2" />
                  Schedule Demo
                </button>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default AiHealthMonitoringProPage;
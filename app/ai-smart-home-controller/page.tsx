import React from 'react';
import { Helmet } from 'react-helmet-async';
import { 
  Home, 
  Brain, 
  Settings, 
  Zap, 
  Shield, 
  CheckCircle, 
  ArrowRight,
  Users,
  Clock,
  Award,
  Target,
  Sparkles,
  FileText,
  BarChart,
  Download,
  Phone,
  Mail,
  Star,
  Activity,
  BookOpen,
  Smile,
  Wifi,
  Battery,
  Thermometer,
  Lightbulb,
  Lock,
  Camera,
  Speaker,
  Smartphone
} from 'lucide-react';

const AISmartHomeControllerPage: React.FC = () => {
  const features = [
    {
      icon: Brain,
      title: "AI-Powered Automation",
      description: "Intelligent automation that learns your habits and optimizes your home environment",
      price: "$39/month"
    },
    {
      icon: Home,
      title: "Universal Device Control",
      description: "Control 1000+ smart devices from different brands with a single interface",
      price: "$29/month"
    },
    {
      icon: Shield,
      title: "Advanced Security",
      description: "AI-powered security monitoring with facial recognition and anomaly detection",
      price: "$49/month"
    },
    {
      icon: Zap,
      title: "Energy Optimization",
      description: "Smart energy management that reduces costs by up to 30% through intelligent scheduling",
      price: "$24/month"
    },
    {
      icon: Users,
      title: "Multi-User Support",
      description: "Personalized experiences for each family member with individual preferences",
      price: "$34/month"
    },
    {
      icon: Clock,
      title: "Voice Control",
      description: "Natural language voice commands in 20+ languages with 99% accuracy",
      price: "$19/month"
    }
  ];

  const pricingPlans = [
    {
      name: "Starter",
      price: "$29",
      period: "/month",
      description: "Perfect for small apartments and basic smart home needs",
      features: [
        "Up to 25 devices",
        "Basic automation",
        "Voice control",
        "Mobile app access",
        "Basic security monitoring",
        "Energy tracking",
        "Email support"
      ],
      popular: false
    },
    {
      name: "Professional",
      price: "$79",
      period: "/month",
      description: "Ideal for medium homes with advanced automation needs",
      features: [
        "Up to 100 devices",
        "Advanced AI automation",
        "Multi-language voice control",
        "Advanced security features",
        "Energy optimization",
        "Multi-user support",
        "Priority support",
        "API access",
        "Custom scenes"
      ],
      popular: true
    },
    {
      name: "Enterprise",
      price: "$199",
      period: "/month",
      description: "For large homes and commercial properties",
      features: [
        "Unlimited devices",
        "Premium AI automation",
        "Advanced security suite",
        "24/7 monitoring",
        "Dedicated support",
        "Custom integrations",
        "White-label solution",
        "Advanced analytics",
        "On-premise deployment"
      ],
      popular: false
    }
  ];

  const deviceCategories = [
    {
      category: "Lighting Control",
      icon: Lightbulb,
      description: "Intelligent lighting control with mood-based automation and energy efficiency",
      devices: [
        "Smart bulbs and switches",
        "Dimmer controls",
        "Color temperature adjustment",
        "Motion-activated lighting",
        "Sunrise/sunset automation"
      ]
    },
    {
      category: "Climate Control",
      icon: Thermometer,
      description: "Smart HVAC management for optimal comfort and energy savings",
      devices: [
        "Smart thermostats",
        "Zone-based heating/cooling",
        "Humidity control",
        "Air quality monitoring",
        "Weather-based adjustments"
      ]
    },
    {
      category: "Security & Safety",
      icon: Shield,
      description: "Comprehensive security system with AI-powered monitoring and alerts",
      devices: [
        "Smart locks and doorbells",
        "Security cameras",
        "Motion sensors",
        "Smoke and CO detectors",
        "Emergency response system"
      ]
    },
    {
      category: "Entertainment",
      icon: Speaker,
      description: "Seamless entertainment control across all your devices and rooms",
      devices: [
        "Smart speakers and soundbars",
        "TV and streaming control",
        "Multi-room audio",
        "Gaming console integration",
        "Ambient lighting sync"
      ]
    }
  ];

  const benefits = [
    {
      title: "Energy Savings",
      description: "Reduce your energy bills by up to 30% with intelligent automation",
      icon: Zap,
      stats: "30% energy savings"
    },
    {
      title: "Enhanced Security",
      description: "24/7 monitoring and AI-powered threat detection for complete peace of mind",
      icon: Shield,
      stats: "99.9% security accuracy"
    },
    {
      title: "Convenience",
      description: "Control your entire home with voice commands or a single app",
      icon: Home,
      stats: "1000+ devices supported"
    },
    {
      title: "Personalization",
      description: "AI learns your preferences and creates personalized experiences",
      icon: Brain,
      stats: "95% user satisfaction"
    }
  ];

  const integrations = [
    {
      name: "Amazon Alexa",
      icon: Speaker,
      description: "Full voice control integration with Alexa devices"
    },
    {
      name: "Google Home",
      icon: Home,
      description: "Seamless integration with Google Assistant ecosystem"
    },
    {
      name: "Apple HomeKit",
      icon: Smartphone,
      description: "Native support for Apple HomeKit and Siri commands"
    },
    {
      name: "Samsung SmartThings",
      icon: Settings,
      description: "Comprehensive integration with Samsung smart home devices"
    },
    {
      name: "Philips Hue",
      icon: Lightbulb,
      description: "Advanced lighting control with Philips Hue ecosystem"
    },
    {
      name: "Nest",
      icon: Thermometer,
      description: "Smart climate control with Google Nest products"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900">
      <Helmet>
        <title>AI Smart Home Controller - Intelligent Home Automation | Zion Tech Group</title>
        <meta 
          name="description" 
          content="Transform your home with AI-powered automation. Control 1000+ devices, save 30% on energy, and enjoy intelligent security. Starting at $29/month." 
        />
        <meta 
          name="keywords" 
          content="AI smart home, home automation, smart home controller, IoT, voice control, energy management, home security, smart devices" 
        />
      </Helmet>

      {/* Hero Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,rgba(59,130,246,0.1)_0%,transparent_50%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(0,255,255,0.1)_0%,transparent_50%)]" />
        
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center mb-16">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-300 text-sm font-medium mb-6">
              <Home className="w-4 h-4 mr-2" />
              AI-Powered Home Automation
            </div>
            
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
              AI Smart Home
              <span className="block bg-gradient-to-r from-blue-400 via-cyan-400 to-purple-400 bg-clip-text text-transparent">
                Controller Pro
              </span>
            </h1>
            
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed">
              Transform your home into an intelligent ecosystem with AI-powered automation. 
              Control 1000+ devices, save energy, enhance security, and enjoy personalized 
              experiences tailored to your lifestyle.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
              <button className="group bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 text-white font-bold py-4 px-8 rounded-xl transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-blue-500/25 flex items-center">
                <Home className="w-5 h-5 mr-2" />
                Start Free Trial
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </button>
              
              <button className="group border-2 border-blue-400 text-blue-300 hover:bg-blue-400 hover:text-white font-bold py-4 px-8 rounded-xl transition-all duration-300 flex items-center">
                <Settings className="w-5 h-5 mr-2" />
                View Demo
              </button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-400 mb-2">1000+</div>
                <div className="text-gray-300">Devices Supported</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-cyan-400 mb-2">30%</div>
                <div className="text-gray-300">Energy Savings</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-purple-400 mb-2">99%</div>
                <div className="text-gray-300">Voice Accuracy</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-green-400 mb-2">50k+</div>
                <div className="text-gray-300">Happy Homes</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-6">
              Intelligent Home
              <span className="block bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
                Features
              </span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Our AI Smart Home Controller provides everything you need to create 
              a truly intelligent and automated living space.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="group bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-2xl p-8 hover:border-blue-500/50 transition-all duration-300 hover:transform hover:scale-105">
                <div className="flex items-center justify-between mb-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <feature.icon className="w-6 h-6 text-white" />
                  </div>
                  <div className="text-blue-400 font-bold text-lg">{feature.price}</div>
                </div>
                
                <h3 className="text-xl font-bold text-white mb-3">{feature.title}</h3>
                <p className="text-gray-300 leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Device Categories Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-800/30">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-6">
              Complete Device
              <span className="block bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
                Integration
              </span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Control every aspect of your home with support for 1000+ smart devices 
              across all major categories and brands.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {deviceCategories.map((category, index) => (
              <div key={index} className="group bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-2xl p-8 hover:border-blue-500/50 transition-all duration-300">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300 flex-shrink-0">
                    <category.icon className="w-6 h-6 text-white" />
                  </div>
                  
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-white mb-3">{category.category}</h3>
                    <p className="text-gray-300 mb-4 leading-relaxed">{category.description}</p>
                    
                    <ul className="space-y-2">
                      {category.devices.map((device, deviceIndex) => (
                        <li key={deviceIndex} className="flex items-center text-sm">
                          <CheckCircle className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
                          <span className="text-gray-300">{device}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Integrations Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-6">
              Seamless Platform
              <span className="block bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
                Integrations
              </span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Works with all major smart home platforms and voice assistants 
              for a unified control experience.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
            {integrations.map((integration, index) => (
              <div key={index} className="group text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                  <integration.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-white font-bold mb-2">{integration.name}</h3>
                <p className="text-gray-300 text-sm">{integration.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-800/30">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-6">
              Why Choose Our
              <span className="block bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
                Smart Home Controller?
              </span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Join thousands of homeowners who have transformed their living spaces 
              with our AI-powered smart home automation.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="text-center group">
                <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                  <benefit.icon className="w-8 h-8 text-white" />
                </div>
                
                <h3 className="text-xl font-bold text-white mb-3">{benefit.title}</h3>
                <p className="text-gray-300 mb-4 leading-relaxed">{benefit.description}</p>
                <div className="text-2xl font-bold text-green-400">{benefit.stats}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-6">
              Simple, Transparent
              <span className="block bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
                Pricing
              </span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Choose the perfect plan for your smart home needs. 
              All plans include our core features with no hidden fees.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {pricingPlans.map((plan, index) => (
              <div key={index} className={`relative bg-slate-800/50 backdrop-blur-sm border rounded-2xl p-8 ${
                plan.popular 
                  ? 'border-blue-500 shadow-lg shadow-blue-500/25' 
                  : 'border-slate-700'
              }`}>
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <div className="bg-gradient-to-r from-blue-500 to-cyan-500 text-white px-6 py-2 rounded-full text-sm font-bold">
                      Most Popular
                    </div>
                  </div>
                )}
                
                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                  <div className="flex items-baseline justify-center mb-2">
                    <span className="text-5xl font-bold text-blue-400">{plan.price}</span>
                    <span className="text-gray-400 ml-1">{plan.period}</span>
                  </div>
                  <p className="text-gray-300">{plan.description}</p>
                </div>

                <ul className="space-y-4 mb-8">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center">
                      <CheckCircle className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" />
                      <span className="text-gray-300">{feature}</span>
                    </li>
                  ))}
                </ul>

                <button className={`w-full py-3 px-6 rounded-xl font-bold transition-all duration-300 ${
                  plan.popular
                    ? 'bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 text-white transform hover:scale-105'
                    : 'border-2 border-blue-400 text-blue-300 hover:bg-blue-400 hover:text-white'
                }`}>
                  Get Started
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-blue-900/50 to-cyan-900/50">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            Transform Your Home
            <span className="block bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
              Today
            </span>
          </h2>
          
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Join the smart home revolution with our AI-powered controller. 
            Start your free trial and experience the future of home automation.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button className="group bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 text-white font-bold py-4 px-8 rounded-xl transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-blue-500/25 flex items-center">
              <Home className="w-5 h-5 mr-2" />
              Start Free Trial
              <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
            </button>
            
            <button className="group border-2 border-blue-400 text-blue-300 hover:bg-blue-400 hover:text-white font-bold py-4 px-8 rounded-xl transition-all duration-300 flex items-center">
              <Settings className="w-5 h-5 mr-2" />
              Contact Sales
            </button>
          </div>

          <div className="mt-8 text-sm text-gray-400">
            <p>✓ 14-day free trial • ✓ No credit card required • ✓ Cancel anytime</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AISmartHomeControllerPage;
import React from 'react';
import { Helmet } from 'react-helmet-async';
import { 
  Home, 
  Wifi, 
  Smartphone, 
  Zap, 
  CheckCircle, 
  Star, 
  ArrowRight,
  Shield,
  Thermometer,
  Lightbulb,
  Camera,
  Lock,
  Phone,
  Mail,
  MapPin
} from 'lucide-react';

const AiSmartHomeAutomationPage = () => {
  const features = [
    {
      icon: <Home className="w-8 h-8" />,
      title: "AI Home Control",
      description: "Intelligent home automation with voice control and predictive adjustments",
      price: "$149/month"
    },
    {
      icon: <Wifi className="w-8 h-8" />,
      title: "5G Connectivity",
      description: "Ultra-fast 5G network for seamless smart home device communication",
      price: "$99/month"
    },
    {
      icon: <Smartphone className="w-8 h-8" />,
      title: "Mobile App Control",
      description: "Complete home control from anywhere with our advanced mobile app",
      price: "$29/month"
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: "Security Integration",
      description: "AI-powered security system with facial recognition and intrusion detection",
      price: "$199/month"
    },
    {
      icon: <Thermometer className="w-8 h-8" />,
      title: "Climate Control",
      description: "Smart HVAC management with energy optimization and comfort learning",
      price: "$79/month"
    },
    {
      icon: <Lightbulb className="w-8 h-8" />,
      title: "Smart Lighting",
      description: "AI-controlled lighting with mood detection and energy efficiency",
      price: "$49/month"
    }
  ];

  const pricingPlans = [
    {
      name: "Starter",
      price: "$199",
      period: "per month",
      description: "Perfect for apartments and small homes",
      features: [
        "Basic smart home setup",
        "5 smart devices included",
        "Mobile app control",
        "Basic automation",
        "Email support"
      ],
      popular: false
    },
    {
      name: "Professional",
      price: "$399",
      period: "per month",
      description: "Ideal for medium to large homes",
      features: [
        "Complete smart home setup",
        "15 smart devices included",
        "Advanced AI automation",
        "Security integration",
        "Priority support"
      ],
      popular: true
    },
    {
      name: "Luxury",
      price: "$799",
      period: "per month",
      description: "For luxury homes and estates",
      features: [
        "Premium smart home setup",
        "Unlimited smart devices",
        "Custom AI configurations",
        "White-label options",
        "Dedicated concierge",
        "24/7 phone support"
      ],
      popular: false
    }
  ];

  return (
    <>
      <Helmet>
        <title>AI Smart Home Automation - Zion Tech Group</title>
        <meta
          name="description"
          content="Revolutionary AI-powered smart home automation with 5G connectivity, voice control, and intelligent security. Starting at $199/month. Contact us at +1 302 464 0950"
        />
        <meta name="keywords" content="AI smart home, home automation, 5G smart home, voice control, smart security, home IoT" />
        <link rel="canonical" href="https://ziontechgroup.com/ai-smart-home-automation" />
      </Helmet>
      
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        {/* Hero Section */}
        <section className="relative py-20 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-indigo-500/10 to-purple-500/10"></div>
          <div className="container mx-auto px-4 relative z-10">
            <div className="text-center max-w-4xl mx-auto">
              <div className="inline-flex items-center px-4 py-2 bg-indigo-500/10 border border-indigo-500/20 rounded-full text-indigo-400 text-sm font-medium mb-6">
                <Zap className="w-4 h-4 mr-2" />
                AI-Powered Smart Home Solution
              </div>
              <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
                <span className="bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent">
                  AI Smart Home
                </span>
                <br />
                <span className="text-white">Automation</span>
              </h1>
              <p className="text-xl md:text-2xl text-gray-300 mb-8 leading-relaxed">
                Transform your home with intelligent automation. Our AI-powered system provides 
                voice control, predictive adjustments, and seamless 5G connectivity.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
                <a
                  href="tel:+13024640950"
                  className="bg-gradient-to-r from-indigo-500 to-purple-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:from-indigo-600 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-indigo-500/25 flex items-center justify-center"
                >
                  <Phone className="w-5 h-5 mr-2" />
                  Call +1 302 464 0950
                </a>
                <a
                  href="mailto:kleber@ziontechgroup.com"
                  className="border-2 border-indigo-400 text-indigo-400 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-indigo-400 hover:text-slate-900 transition-all duration-300 flex items-center justify-center"
                >
                  <Mail className="w-5 h-5 mr-2" />
                  Get Free Consultation
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20 bg-slate-800/50">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Smart Home Features
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Everything you need to create the perfect smart home with AI intelligence
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {features.map((feature, index) => (
                <div key={index} className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-sm border border-indigo-500/20 rounded-2xl p-8 hover:border-indigo-400/40 transition-all duration-300 hover:transform hover:scale-105">
                  <div className="w-16 h-16 bg-gradient-to-r from-indigo-500 to-purple-600 rounded-xl flex items-center justify-center mb-6">
                    <div className="text-white">{feature.icon}</div>
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-4">
                    {feature.title}
                  </h3>
                  <p className="text-gray-300 mb-6 leading-relaxed">
                    {feature.description}
                  </p>
                  <div className="flex items-center justify-between">
                    <span className="text-2xl font-bold text-indigo-400">{feature.price}</span>
                    <div className="flex items-center text-yellow-400">
                      <Star className="w-4 h-4 fill-current" />
                      <Star className="w-4 h-4 fill-current" />
                      <Star className="w-4 h-4 fill-current" />
                      <Star className="w-4 h-4 fill-current" />
                      <Star className="w-4 h-4 fill-current" />
                    </div>
                  </div>
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
                Smart Home Packages
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Choose the smart home package that fits your lifestyle. All packages include installation and setup.
              </p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {pricingPlans.map((plan, index) => (
                <div key={index} className={`relative bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-sm border rounded-2xl p-8 ${
                  plan.popular 
                    ? 'border-indigo-400/40 shadow-2xl shadow-indigo-500/10 scale-105' 
                    : 'border-indigo-500/20'
                }`}>
                  {plan.popular && (
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                      <div className="bg-gradient-to-r from-indigo-500 to-purple-600 text-white px-6 py-2 rounded-full text-sm font-semibold">
                        Most Popular
                      </div>
                    </div>
                  )}
                  
                  <div className="text-center mb-8">
                    <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                    <p className="text-gray-300 mb-4">{plan.description}</p>
                    <div className="flex items-baseline justify-center">
                      <span className="text-5xl font-bold text-indigo-400">{plan.price}</span>
                      <span className="text-gray-400 ml-2">{plan.period}</span>
                    </div>
                  </div>
                  
                  <ul className="space-y-4 mb-8">
                    {plan.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-gray-300">
                        <CheckCircle className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  
                  <button className={`w-full py-3 px-6 rounded-lg font-semibold transition-all duration-300 ${
                    plan.popular
                      ? 'bg-gradient-to-r from-indigo-500 to-purple-600 text-white hover:from-indigo-600 hover:to-purple-700 transform hover:scale-105'
                      : 'border-2 border-indigo-400 text-indigo-400 hover:bg-indigo-400 hover:text-slate-900'
                  }`}>
                    Get Started
                    <ArrowRight className="w-4 h-4 ml-2 inline" />
                  </button>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section className="py-20 bg-slate-800/30">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Ready to Make Your Home Smart?
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Join thousands of families already enjoying our AI smart home automation. 
                Get started today with a free home assessment.
              </p>
            </div>
            
            <div className="max-w-4xl mx-auto">
              <div className="grid md:grid-cols-3 gap-8 text-center">
                <div className="flex flex-col items-center">
                  <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mb-4">
                    <Phone className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-2">Call Us</h3>
                  <p className="text-gray-300">+1 302 464 0950</p>
                </div>
                
                <div className="flex flex-col items-center">
                  <div className="w-16 h-16 bg-green-600 rounded-full flex items-center justify-center mb-4">
                    <Mail className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-2">Email Us</h3>
                  <p className="text-gray-300">kleber@ziontechgroup.com</p>
                </div>
                
                <div className="flex flex-col items-center">
                  <div className="w-16 h-16 bg-purple-600 rounded-full flex items-center justify-center mb-4">
                    <MapPin className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-2">Visit Us</h3>
                  <p className="text-gray-300">364 E Main St STE 1008, Middletown DE 19709</p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default AiSmartHomeAutomationPage;
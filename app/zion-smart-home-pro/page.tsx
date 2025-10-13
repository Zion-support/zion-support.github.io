import { ArrowRight, Home, Zap, Shield, CheckCircle, Star, Brain, Smartphone, Globe, Database } from "lucide-react";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";

export default function ZionSmartHomePro() {
  const features = [
    {
      icon: <Home className="w-6 h-6" />,
      title: "AI Home Automation",
      description: "Intelligent home automation that learns your preferences and automatically controls lighting, temperature, and security"
    },
    {
      icon: <Brain className="w-6 h-6" />,
      title: "Voice Control Integration",
      description: "Seamless integration with Alexa, Google Assistant, and Siri for hands-free control of all smart devices"
    },
    {
      icon: <Shield className="w-6 h-6" />,
      title: "Advanced Security System",
      description: "AI-powered security with facial recognition, motion detection, and real-time alerts for complete home protection"
    },
    {
      icon: <Zap className="w-6 h-6" />,
      title: "Energy Management",
      description: "Smart energy monitoring and optimization to reduce electricity bills by up to 40% through intelligent scheduling"
    },
    {
      icon: <Smartphone className="w-6 h-6" />,
      title: "Mobile App Control",
      description: "Complete home control from anywhere with our intuitive mobile app featuring real-time monitoring and control"
    },
    {
      icon: <Globe className="w-6 h-6" />,
      title: "IoT Device Integration",
      description: "Connect and control 1000+ smart devices from different manufacturers through a unified platform"
    }
  ];

  const pricingPlans = [
    {
      name: "Smart Home Basic",
      price: "$29",
      period: "/month",
      description: "Perfect for apartments and small homes",
      features: [
        "Up to 20 smart devices",
        "Basic automation rules",
        "Mobile app access",
        "Email support",
        "Standard security features",
        "1 user account"
      ],
      popular: false
    },
    {
      name: "Smart Home Pro",
      price: "$59",
      period: "/month",
      description: "Most popular for family homes",
      features: [
        "Up to 100 smart devices",
        "Advanced AI automation",
        "Voice control integration",
        "Priority support",
        "Advanced security system",
        "Up to 5 user accounts",
        "Energy management",
        "Custom automation scenes"
      ],
      popular: true
    },
    {
      name: "Smart Home Enterprise",
      price: "$99",
      period: "/month",
      description: "For large homes and estates",
      features: [
        "Unlimited smart devices",
        "Premium AI automation",
        "Multi-voice assistant support",
        "24/7 dedicated support",
        "Professional security monitoring",
        "Unlimited user accounts",
        "Advanced energy analytics",
        "White-label customization"
      ],
      popular: false
    }
  ];

  const smartFeatures = [
    {
      title: "Climate Control",
      description: "Intelligent temperature and humidity control with learning algorithms for optimal comfort",
      icon: <Zap className="w-6 h-6" />
    },
    {
      title: "Lighting Automation",
      description: "Smart lighting that adapts to your schedule, mood, and natural light conditions",
      icon: <Home className="w-6 h-6" />
    },
    {
      title: "Security Monitoring",
      description: "24/7 AI-powered security with facial recognition and intelligent threat detection",
      icon: <Shield className="w-6 h-6" />
    },
    {
      title: "Energy Optimization",
      description: "Smart energy management that reduces costs while maintaining comfort and convenience",
      icon: <Database className="w-6 h-6" />
    }
  ];

  const testimonials = [
    {
      name: "Sarah Johnson",
      company: "Smart Home Enthusiast",
      role: "Homeowner",
      content: "Zion Smart Home Pro has transformed our living experience. The AI learns our habits and makes our home incredibly comfortable and efficient.",
      rating: 5
    },
    {
      name: "Michael Chen",
      company: "Tech Professional",
      role: "Early Adopter",
      content: "The voice control and automation features are amazing. I can control everything in my home with simple voice commands. It's like living in the future.",
      rating: 5
    },
    {
      name: "Emily Rodriguez",
      company: "Family of Four",
      role: "Busy Parent",
      content: "This system has made managing our home so much easier. The energy savings alone paid for the system in the first year. Highly recommended!",
      rating: 5
    }
  ];

  return (
    <>
      <Helmet>
        <title>Zion Smart Home Pro - AI Home Automation Platform | Zion Tech Group</title>
        <meta
          name="description"
          content="Transform your home with Zion Smart Home Pro. AI-powered home automation, voice control, security, and energy management for the modern smart home."
        />
        <meta
          name="keywords"
          content="smart home, home automation, AI home, voice control, smart security, energy management, IoT home"
        />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        {/* Hero Section */}
        <section className="pt-20 pb-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto text-center">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-green-500/20 to-blue-500/20 border border-green-500/30 mb-6">
              <Home className="w-4 h-4 text-green-400 mr-2" />
              <span className="text-green-400 text-sm font-medium">#1 Smart Home Platform</span>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-400">
                Zion Smart Home Pro
              </span>
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-4xl mx-auto">
              The ultimate AI-powered smart home platform that transforms your living space into an intelligent, 
              automated, and secure environment. Control everything with voice, mobile app, or let AI handle it automatically.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <Link
                to="/contact"
                className="bg-gradient-to-r from-green-500 to-blue-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-green-600 hover:to-blue-700 transition-all duration-300 flex items-center justify-center group"
              >
                Smartify Your Home
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                to="/demo"
                className="border border-green-400 text-green-400 px-8 py-4 rounded-lg font-semibold hover:bg-green-400 hover:text-slate-900 transition-all duration-300"
              >
                Watch Home Demo
              </Link>
            </div>
            
            {/* Stats */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8 max-w-5xl mx-auto">
              <div className="text-center">
                <div className="text-3xl font-bold text-green-400 mb-2">50,000+</div>
                <div className="text-gray-300">Smart Homes</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-400 mb-2">40%</div>
                <div className="text-gray-300">Energy Savings</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-purple-400 mb-2">1000+</div>
                <div className="text-gray-300">Device Compatibility</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-yellow-400 mb-2">99.9%</div>
                <div className="text-gray-300">Uptime Guarantee</div>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Intelligent Home Features
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Everything you need to create the perfect smart home experience with AI-powered automation.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {features.map((feature, index) => (
                <div
                  key={index}
                  className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105 group"
                >
                  <div className="w-12 h-12 rounded-lg bg-gradient-to-r from-green-500 to-blue-600 flex items-center justify-center mb-4 text-white group-hover:scale-110 transition-transform">
                    {feature.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-3">
                    {feature.title}
                  </h3>
                  <p className="text-gray-300">
                    {feature.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Smart Features Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-slate-800/50 to-green-800/50">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Smart Home Capabilities
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Discover how our AI technology makes your home smarter, safer, and more efficient.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {smartFeatures.map((feature, index) => (
                <div
                  key={index}
                  className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105 group"
                >
                  <div className="w-12 h-12 rounded-lg bg-gradient-to-r from-green-500 to-blue-600 flex items-center justify-center mb-4 text-white group-hover:scale-110 transition-transform">
                    {feature.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-3">
                    {feature.title}
                  </h3>
                  <p className="text-gray-300">
                    {feature.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Pricing Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Smart Home Plans
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Choose the smart home solution that fits your lifestyle and home size.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {pricingPlans.map((plan, index) => (
                <div
                  key={index}
                  className={`relative bg-white/10 backdrop-blur-sm rounded-xl p-8 border transition-all duration-300 hover:scale-105 ${
                    plan.popular
                      ? 'border-green-400 bg-gradient-to-br from-green-500/10 to-blue-500/10'
                      : 'border-white/20 hover:border-green-400'
                  }`}
                >
                  {plan.popular && (
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                      <span className="bg-gradient-to-r from-green-500 to-blue-600 text-white px-4 py-2 rounded-full text-sm font-semibold">
                        Most Popular
                      </span>
                    </div>
                  )}
                  <div className="text-center mb-8">
                    <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                    <p className="text-gray-300 mb-4">{plan.description}</p>
                    <div className="flex items-baseline justify-center">
                      <span className="text-4xl font-bold text-white">{plan.price}</span>
                      <span className="text-gray-300 ml-1">{plan.period}</span>
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
                        ? 'bg-gradient-to-r from-green-500 to-blue-600 text-white hover:from-green-600 hover:to-blue-700'
                        : 'border border-green-400 text-green-400 hover:bg-green-400 hover:text-slate-900'
                    }`}
                  >
                    Start Smart Home
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Trusted by Smart Home Owners
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                See what homeowners say about Zion Smart Home Pro
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {testimonials.map((testimonial, index) => (
                <div
                  key={index}
                  className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300"
                >
                  <div className="flex items-center mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  <p className="text-gray-300 mb-4 italic">"{testimonial.content}"</p>
                  <div>
                    <div className="font-semibold text-white">{testimonial.name}</div>
                    <div className="text-sm text-gray-400">{testimonial.role}, {testimonial.company}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Ready to Make Your Home Smart?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Join thousands of homeowners who have transformed their living spaces with intelligent automation.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="bg-gradient-to-r from-green-500 to-blue-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-green-600 hover:to-blue-700 transition-all duration-300 flex items-center justify-center"
              >
                Smartify Your Home
                <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
              <Link
                to="/demo"
                className="border border-green-400 text-green-400 px-8 py-4 rounded-lg font-semibold hover:bg-green-400 hover:text-slate-900 transition-all duration-300"
              >
                Watch Home Demo
              </Link>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
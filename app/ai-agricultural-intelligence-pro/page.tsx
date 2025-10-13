import React from "react";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { ArrowRight, CheckCircle, Star, Leaf, Droplets, Sun, Wind, Thermometer, BarChart3, Shield, Settings, Monitor, Smartphone, Laptop, Users, Clock, FileText, MessageSquare, Calendar, Mail, Phone, Sparkles, TrendingUp, Target, Award, Rocket, Cpu, Wifi, Battery, Video, Image, Music, Search, Filter, Download, Upload, Share, Bell, Heart, ThumbsUp, Globe, Zap, Brain, Eye, Lock, CloudRain, CloudSnow, CloudLightning, Gauge, Timer, Stopwatch, Hourglass, Sunrise, Sunset, Moon } from "lucide-react";
import SEOOptimizer from "../components/SEOOptimizer";

export default function AIAgriculturalIntelligencePro() {
  const features = [
    {
      title: "Crop Monitoring & Analysis",
      description: "Real-time crop health monitoring using satellite imagery, drones, and IoT sensors with AI-powered disease detection",
      icon: <Eye className="w-8 h-8" />,
      color: "from-green-500 to-emerald-500"
    },
    {
      title: "Weather Prediction & Planning",
      description: "Advanced weather forecasting and climate modeling to optimize planting, irrigation, and harvest schedules",
      icon: <CloudRain className="w-8 h-8" />,
      color: "from-blue-500 to-cyan-500"
    },
    {
      title: "Soil Health Analysis",
      description: "Comprehensive soil analysis including nutrient levels, pH, moisture content, and organic matter with recommendations",
      icon: <Leaf className="w-8 h-8" />,
      color: "from-yellow-500 to-orange-500"
    },
    {
      title: "Precision Irrigation",
      description: "Smart irrigation management with water usage optimization and automated scheduling based on crop needs",
      icon: <Droplets className="w-8 h-8" />,
      color: "from-cyan-500 to-blue-500"
    },
    {
      title: "Pest & Disease Detection",
      description: "AI-powered pest and disease identification with early warning systems and treatment recommendations",
      icon: <Shield className="w-8 h-8" />,
      color: "from-red-500 to-pink-500"
    },
    {
      title: "Yield Optimization",
      description: "Data-driven yield prediction and optimization strategies to maximize crop production and profitability",
      icon: <TrendingUp className="w-8 h-8" />,
      color: "from-purple-500 to-indigo-500"
    }
  ];

  const useCases = [
    {
      title: "Smart Farming Operations",
      description: "Complete farm management with automated decision-making and resource optimization",
      icon: <Settings className="w-6 h-6" />,
      benefits: ["Increase yields by 25%", "Reduce water usage by 30%", "Minimize pesticide use", "Optimize resource allocation"]
    },
    {
      title: "Precision Agriculture",
      description: "Site-specific crop management with variable rate application and targeted treatments",
      icon: <Target className="w-6 h-6" />,
      benefits: ["Improve crop quality", "Reduce input costs", "Minimize environmental impact", "Increase profitability"]
    },
    {
      title: "Greenhouse Management",
      description: "Automated greenhouse control with climate monitoring and crop optimization",
      icon: <Sun className="w-6 h-6" />,
      benefits: ["Optimize growing conditions", "Reduce energy costs", "Improve crop quality", "Extend growing seasons"]
    },
    {
      title: "Supply Chain Optimization",
      description: "End-to-end supply chain management from farm to market with quality tracking",
      icon: <Globe className="w-6 h-6" />,
      benefits: ["Reduce food waste", "Improve traceability", "Optimize logistics", "Enhance food safety"]
    }
  ];

  const crops = [
    {
      name: "Wheat",
      description: "Cereal crop optimization and yield management",
      icon: <Leaf className="w-8 h-8" />,
      color: "from-yellow-500 to-orange-500"
    },
    {
      name: "Corn",
      description: "Maize production and quality optimization",
      icon: <Sun className="w-8 h-8" />,
      color: "from-green-500 to-emerald-500"
    },
    {
      name: "Rice",
      description: "Paddy cultivation and water management",
      icon: <Droplets className="w-8 h-8" />,
      color: "from-blue-500 to-cyan-500"
    },
    {
      name: "Soybeans",
      description: "Legume crop management and protein optimization",
      icon: <Leaf className="w-8 h-8" />,
      color: "from-green-500 to-teal-500"
    },
    {
      name: "Vegetables",
      description: "Fresh produce cultivation and quality control",
      icon: <Heart className="w-8 h-8" />,
      color: "from-red-500 to-pink-500"
    },
    {
      name: "Fruits",
      description: "Orchard management and harvest optimization",
      icon: <Award className="w-8 h-8" />,
      color: "from-purple-500 to-indigo-500"
    }
  ];

  const pricingTiers = [
    {
      name: "Starter",
      price: "$149",
      period: "/month",
      description: "Perfect for small farms",
      features: [
        "Basic crop monitoring",
        "Weather forecasting",
        "Soil analysis",
        "Email support",
        "Up to 50 acres",
        "Mobile app access"
      ],
      popular: false
    },
    {
      name: "Professional",
      price: "$399",
      period: "/month",
      description: "Ideal for growing operations",
      features: [
        "Advanced crop analytics",
        "Precision irrigation",
        "Pest & disease detection",
        "Priority support",
        "Up to 500 acres",
        "Drone integration",
        "Custom reporting",
        "API access"
      ],
      popular: true
    },
    {
      name: "Enterprise",
      price: "$799",
      period: "/month",
      description: "For large agricultural operations",
      features: [
        "Full AI capabilities",
        "Custom model training",
        "24/7 dedicated support",
        "Unlimited acres",
        "Advanced integrations",
        "Custom analytics dashboard",
        "White-label options",
        "SLA guarantee"
      ],
      popular: false
    }
  ];

  const testimonials = [
    {
      name: "John Anderson",
      company: "Green Valley Farms",
      role: "Farm Manager",
      content: "Zion AI Agricultural Intelligence Pro increased our corn yield by 28% in the first season. The precision irrigation features alone saved us 40% on water costs.",
      rating: 5,
      avatar: "JA"
    },
    {
      name: "Maria Santos",
      company: "Organic Harvest Co.",
      role: "Operations Director",
      content: "The pest detection system is incredible. We caught a disease outbreak 2 weeks earlier than usual, saving our entire tomato crop. The ROI was immediate.",
      rating: 5,
      avatar: "MS"
    },
    {
      name: "David Chen",
      company: "TechFarm Solutions",
      role: "CEO",
      content: "This platform transformed our greenhouse operations. We can now grow year-round with optimal conditions and 30% less energy consumption.",
      rating: 5,
      avatar: "DC"
    }
  ];

  return (
    <>
      <Helmet>
        <title>AI Agricultural Intelligence Pro - Zion Tech Group | Smart Farming Solutions</title>
        <meta
          name="description"
          content="Revolutionize agriculture with AI Agricultural Intelligence Pro. Crop monitoring, weather prediction, soil analysis, and precision irrigation. Increase yields by 25% while reducing costs. Start your free trial today!"
        />
        <meta
          name="keywords"
          content="AI agriculture, smart farming, precision agriculture, crop monitoring, weather prediction, soil analysis, irrigation management, agricultural technology, farm management"
        />
        <link rel="canonical" href="https://ziontechgroup.com/ai-agricultural-intelligence-pro" />
      </Helmet>
      <SEOOptimizer
        title="AI Agricultural Intelligence Pro - Zion Tech Group | Smart Farming Solutions"
        description="Revolutionize agriculture with AI Agricultural Intelligence Pro. Crop monitoring, weather prediction, soil analysis, and precision irrigation. Increase yields by 25% while reducing costs. Start your free trial today!"
      />

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-green-900 to-slate-900">
        {/* Hero Section */}
        <section className="pt-20 pb-16 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
          <div className="absolute inset-0 overflow-hidden">
            <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-green-500/20 to-emerald-500/20 rounded-full blur-3xl animate-pulse"></div>
            <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-br from-yellow-500/20 to-orange-500/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
          </div>
          
          <div className="max-w-7xl mx-auto text-center relative z-10">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-green-500/20 to-emerald-500/20 border border-green-500/30 mb-6">
              <Leaf className="w-4 h-4 text-green-400 mr-2" />
              <span className="text-green-400 text-sm font-medium">#1 Agricultural AI Platform 2024</span>
            </div>
            
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 via-yellow-400 to-orange-400">
                AI Agricultural Intelligence Pro
              </span>
            </h1>
            
            <p className="text-lg md:text-xl lg:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto leading-relaxed">
              Transform your farming operations with our advanced AI-powered agricultural intelligence platform. 
              Crop monitoring, weather prediction, soil analysis, and precision irrigation for maximum yields.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
              <Link
                to="/contact"
                className="bg-gradient-to-r from-green-500 to-emerald-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-green-600 hover:to-emerald-700 transition-all duration-300 flex items-center justify-center group shadow-lg hover:shadow-green-500/25 hover:scale-105"
              >
                Start Free Trial
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                to="/demo"
                className="border border-green-400 text-green-400 px-8 py-4 rounded-lg font-semibold hover:bg-green-400 hover:text-slate-900 transition-all duration-300 group hover:scale-105"
              >
                Watch Demo
                <Monitor className="w-5 h-5 ml-2 group-hover:rotate-12 transition-transform" />
              </Link>
            </div>
            
            {/* Key Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-5xl mx-auto">
              <div className="text-center group">
                <div className="w-12 h-12 md:w-16 md:h-16 mx-auto mb-4 rounded-full bg-gradient-to-r from-green-500/20 to-emerald-500/20 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <TrendingUp className="w-6 h-6 text-green-400" />
                </div>
                <div className="text-xl md:text-2xl lg:text-3xl font-bold text-white mb-2">25%</div>
                <div className="text-gray-300 text-xs md:text-sm">Yield Increase</div>
              </div>
              <div className="text-center group">
                <div className="w-12 h-12 md:w-16 md:h-16 mx-auto mb-4 rounded-full bg-gradient-to-r from-green-500/20 to-emerald-500/20 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <Droplets className="w-6 h-6 text-green-400" />
                </div>
                <div className="text-xl md:text-2xl lg:text-3xl font-bold text-white mb-2">30%</div>
                <div className="text-gray-300 text-xs md:text-sm">Water Savings</div>
              </div>
              <div className="text-center group">
                <div className="w-12 h-12 md:w-16 md:h-16 mx-auto mb-4 rounded-full bg-gradient-to-r from-green-500/20 to-emerald-500/20 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <Globe className="w-6 h-6 text-green-400" />
                </div>
                <div className="text-xl md:text-2xl lg:text-3xl font-bold text-white mb-2">1M+</div>
                <div className="text-gray-300 text-xs md:text-sm">Acres Monitored</div>
              </div>
              <div className="text-center group">
                <div className="w-12 h-12 md:w-16 md:h-16 mx-auto mb-4 rounded-full bg-gradient-to-r from-green-500/20 to-emerald-500/20 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <Users className="w-6 h-6 text-green-400" />
                </div>
                <div className="text-xl md:text-2xl lg:text-3xl font-bold text-white mb-2">5K+</div>
                <div className="text-gray-300 text-xs md:text-sm">Farmers</div>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
                Advanced Agricultural Intelligence Features
              </h2>
              <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
                Our AI Agricultural Intelligence Pro combines cutting-edge artificial intelligence with agricultural science 
                to provide comprehensive farm management and optimization tools.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {features.map((feature, index) => (
                <div
                  key={index}
                  className="group bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-green-500/10"
                >
                  <div
                    className={`w-16 h-16 rounded-lg bg-gradient-to-r ${feature.color} flex items-center justify-center mb-4 mx-auto group-hover:scale-110 transition-transform duration-300`}
                  >
                    {feature.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-3 text-center group-hover:text-green-300 transition-colors">
                    {feature.title}
                  </h3>
                  <p className="text-gray-300 text-center leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Crops Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-slate-800/50 to-green-800/50">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-yellow-400">
                  Optimized for All Crops
                </span>
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Our AI Agricultural Intelligence Pro works with all major crop types and growing conditions
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {crops.map((crop, index) => (
                <div
                  key={index}
                  className="group bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105"
                >
                  <div
                    className={`w-16 h-16 rounded-lg bg-gradient-to-r ${crop.color} flex items-center justify-center mb-4 mx-auto group-hover:scale-110 transition-transform duration-300`}
                  >
                    {crop.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-3 text-center group-hover:text-green-300 transition-colors">
                    {crop.name}
                  </h3>
                  <p className="text-gray-300 text-center leading-relaxed">
                    {crop.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Use Cases Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Real-World Applications
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                See how farmers are using our AI Agricultural Intelligence Pro to optimize their operations
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {useCases.map((useCase, index) => (
                <div
                  key={index}
                  className="group bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105"
                >
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 rounded-lg bg-gradient-to-r from-green-500 to-emerald-500 flex items-center justify-center text-white mr-4 group-hover:scale-110 transition-transform">
                      {useCase.icon}
                    </div>
                    <h3 className="text-xl font-semibold text-white group-hover:text-green-300 transition-colors">
                      {useCase.title}
                    </h3>
                  </div>
                  <p className="text-gray-300 mb-4 leading-relaxed">
                    {useCase.description}
                  </p>
                  <div className="space-y-2">
                    {useCase.benefits.map((benefit, idx) => (
                      <div key={idx} className="flex items-center text-sm text-gray-300">
                        <CheckCircle className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
                        <span>{benefit}</span>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Pricing Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-slate-800/50 to-green-800/50">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-yellow-400">
                  Simple, Transparent Pricing
                </span>
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Choose the plan that fits your farm size and needs. All plans include our core features with no hidden fees.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {pricingTiers.map((tier, index) => (
                <div
                  key={index}
                  className={`relative bg-white/10 backdrop-blur-sm rounded-2xl p-8 border transition-all duration-300 hover:scale-105 ${
                    tier.popular
                      ? "border-green-500/50 shadow-2xl shadow-green-500/10"
                      : "border-white/20 hover:border-white/30"
                  }`}
                >
                  {tier.popular && (
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                      <span className="bg-gradient-to-r from-green-500 to-emerald-500 text-white px-4 py-2 rounded-full text-sm font-semibold">
                        Most Popular
                      </span>
                    </div>
                  )}
                  <div className="text-center mb-6">
                    <h3 className="text-2xl font-bold text-white mb-2">{tier.name}</h3>
                    <p className="text-gray-300 mb-4">{tier.description}</p>
                    <div className="flex items-baseline justify-center">
                      <span className="text-4xl font-bold text-white">{tier.price}</span>
                      <span className="text-gray-300 ml-2">{tier.period}</span>
                    </div>
                  </div>
                  <div className="space-y-4 mb-8">
                    {tier.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center text-gray-300">
                        <CheckCircle className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" />
                        <span>{feature}</span>
                      </div>
                    ))}
                  </div>
                  <Link
                    to="/contact"
                    className={`w-full block text-center py-3 px-6 rounded-lg font-semibold transition-all duration-300 ${
                      tier.popular
                        ? "bg-gradient-to-r from-green-500 to-emerald-500 text-white hover:from-green-600 hover:to-emerald-600 shadow-lg hover:shadow-green-500/25"
                        : "bg-white/10 text-white hover:bg-white/20 border border-white/20"
                    }`}
                  >
                    Get Started
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Trusted by Farmers Worldwide
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                See what our clients say about our AI Agricultural Intelligence Pro
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {testimonials.map((testimonial, index) => (
                <div
                  key={index}
                  className="group bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-green-500/10"
                >
                  <div className="flex items-center mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  <p className="text-gray-300 mb-4 italic leading-relaxed">"{testimonial.content}"</p>
                  <div className="flex items-center">
                    <div className="w-10 h-10 bg-gradient-to-r from-green-500 to-emerald-600 rounded-full flex items-center justify-center text-white font-bold text-sm mr-3">
                      {testimonial.avatar}
                    </div>
                    <div>
                      <div className="font-semibold text-white">{testimonial.name}</div>
                      <div className="text-sm text-gray-400">{testimonial.role}, {testimonial.company}</div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-green-900/30 to-yellow-900/30">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
              Ready to Revolutionize Your Farming?
            </h2>
            <p className="text-xl text-gray-300 mb-8 leading-relaxed">
              Join thousands of farmers already using our AI Agricultural Intelligence Pro to maximize yields and reduce costs. 
              Start your free trial today - no credit card required.
            </p>
            
            {/* Contact Information */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              <div className="text-center">
                <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-emerald-600 rounded-lg flex items-center justify-center mx-auto mb-3">
                  <Mail className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-white font-semibold mb-2">Email</h3>
                <p className="text-green-400">kleber@ziontechgroup.com</p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-emerald-600 rounded-lg flex items-center justify-center mx-auto mb-3">
                  <Phone className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-white font-semibold mb-2">Phone</h3>
                <p className="text-green-400">+1 302 464 0950</p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-emerald-600 rounded-lg flex items-center justify-center mx-auto mb-3">
                  <Globe className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-white font-semibold mb-2">Address</h3>
                <p className="text-green-400 text-sm">364 E Main St STE 1008<br />Middletown DE 19709</p>
              </div>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="bg-gradient-to-r from-green-500 to-emerald-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-green-600 hover:to-emerald-700 transition-all duration-300 flex items-center justify-center group shadow-lg hover:shadow-green-500/25 hover:scale-105"
              >
                Start Free Trial
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                to="/demo"
                className="border border-green-400 text-green-400 px-8 py-4 rounded-lg font-semibold hover:bg-green-400 hover:text-slate-900 transition-all duration-300 group hover:scale-105"
              >
                Watch Demo
                <Sparkles className="w-5 h-5 ml-2 group-hover:rotate-12 transition-transform" />
              </Link>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
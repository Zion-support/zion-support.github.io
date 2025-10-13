import React from "react";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { ArrowRight, CheckCircle, Star, Leaf, Globe, Zap, BarChart3, Shield, Settings, Monitor, Smartphone, Laptop, Users, Clock, FileText, MessageSquare, Calendar, Mail, Phone, Sparkles, TrendingUp, Target, Award, Rocket, Cpu, Wifi, Battery, Video, Image, Music, Search, Filter, Download, Upload, Share, Bell, Heart, ThumbsUp, Wind, Droplets, Thermometer, Gauge, Timer, Stopwatch, Hourglass, Sun, Moon, Sunrise, Sunset, CloudRain, CloudSnow, CloudLightning } from "lucide-react";
import SEOOptimizer from "../components/SEOOptimizer";

export default function AIClimateSolutionsPro() {
  const features = [
    {
      title: "Carbon Footprint Tracking",
      description: "Real-time carbon footprint monitoring and analysis across all business operations with detailed reporting",
      icon: <Leaf className="w-8 h-8" />,
      color: "from-green-500 to-emerald-500"
    },
    {
      title: "Energy Optimization",
      description: "AI-powered energy consumption analysis and optimization recommendations to reduce costs and emissions",
      icon: <Zap className="w-8 h-8" />,
      color: "from-yellow-500 to-orange-500"
    },
    {
      title: "Climate Risk Assessment",
      description: "Comprehensive climate risk analysis and vulnerability assessment for business continuity planning",
      icon: <Shield className="w-8 h-8" />,
      color: "from-blue-500 to-cyan-500"
    },
    {
      title: "Sustainability Reporting",
      description: "Automated ESG reporting and compliance tracking for regulatory requirements and stakeholder transparency",
      icon: <FileText className="w-8 h-8" />,
      color: "from-purple-500 to-pink-500"
    },
    {
      title: "Renewable Energy Planning",
      description: "Smart renewable energy integration planning and optimization for maximum efficiency and cost savings",
      icon: <Sun className="w-8 h-8" />,
      color: "from-orange-500 to-red-500"
    },
    {
      title: "Supply Chain Sustainability",
      description: "End-to-end supply chain sustainability monitoring and optimization for responsible sourcing",
      icon: <Globe className="w-8 h-8" />,
      color: "from-indigo-500 to-purple-500"
    }
  ];

  const useCases = [
    {
      title: "Corporate Sustainability",
      description: "Comprehensive sustainability management for large corporations and enterprises",
      icon: <Building className="w-6 h-6" />,
      benefits: ["Reduce carbon footprint by 40%", "Achieve net-zero goals", "Improve ESG ratings", "Enhance brand reputation"]
    },
    {
      title: "Manufacturing Optimization",
      description: "Energy-efficient manufacturing processes and waste reduction optimization",
      icon: <Settings className="w-6 h-6" />,
      benefits: ["Reduce energy costs by 30%", "Minimize waste production", "Optimize resource usage", "Improve efficiency"]
    },
    {
      title: "Real Estate & Buildings",
      description: "Smart building management and energy optimization for commercial and residential properties",
      icon: <Home className="w-6 h-6" />,
      benefits: ["Lower energy consumption", "Improve building efficiency", "Reduce operational costs", "Increase property value"]
    },
    {
      title: "Agriculture & Food",
      description: "Sustainable farming practices and food production optimization",
      icon: <Leaf className="w-6 h-6" />,
      benefits: ["Optimize crop yields", "Reduce water usage", "Minimize chemical inputs", "Improve soil health"]
    }
  ];

  const industries = [
    {
      name: "Manufacturing",
      description: "Industrial processes and production optimization",
      icon: <Settings className="w-8 h-8" />,
      color: "from-blue-500 to-cyan-500"
    },
    {
      name: "Energy & Utilities",
      description: "Power generation and distribution optimization",
      icon: <Zap className="w-8 h-8" />,
      color: "from-yellow-500 to-orange-500"
    },
    {
      name: "Transportation",
      description: "Fleet management and logistics optimization",
      icon: <Truck className="w-8 h-8" />,
      color: "from-green-500 to-emerald-500"
    },
    {
      name: "Agriculture",
      description: "Sustainable farming and food production",
      icon: <Leaf className="w-8 h-8" />,
      color: "from-green-500 to-teal-500"
    },
    {
      name: "Real Estate",
      description: "Building management and energy efficiency",
      icon: <Home className="w-8 h-8" />,
      color: "from-purple-500 to-pink-500"
    },
    {
      name: "Retail & Commerce",
      description: "Supply chain and operations optimization",
      icon: <ShoppingCart className="w-8 h-8" />,
      color: "from-indigo-500 to-purple-500"
    }
  ];

  const pricingTiers = [
    {
      name: "Starter",
      price: "$199",
      period: "/month",
      description: "Perfect for small businesses",
      features: [
        "Basic carbon tracking",
        "Energy consumption monitoring",
        "Simple reporting",
        "Email support",
        "Up to 5 users",
        "API access"
      ],
      popular: false
    },
    {
      name: "Professional",
      price: "$499",
      period: "/month",
      description: "Ideal for growing companies",
      features: [
        "Advanced carbon analytics",
        "Energy optimization recommendations",
        "Climate risk assessment",
        "Priority support",
        "Up to 25 users",
        "Custom reporting",
        "Supply chain tracking",
        "ESG compliance tools"
      ],
      popular: true
    },
    {
      name: "Enterprise",
      price: "$999",
      period: "/month",
      description: "For large organizations",
      features: [
        "Full AI capabilities",
        "Custom model training",
        "24/7 dedicated support",
        "Unlimited users",
        "Custom analytics dashboard",
        "Advanced security features",
        "White-label options",
        "SLA guarantee",
        "On-premise deployment"
      ],
      popular: false
    }
  ];

  const testimonials = [
    {
      name: "Dr. Sarah Johnson",
      company: "GreenTech Industries",
      role: "Chief Sustainability Officer",
      content: "Zion AI Climate Solutions Pro helped us achieve our net-zero goals 2 years ahead of schedule. The carbon tracking and optimization features are incredibly powerful and user-friendly.",
      rating: 5,
      avatar: "SJ"
    },
    {
      name: "Michael Rodriguez",
      company: "EcoManufacturing Corp",
      role: "Environmental Director",
      content: "Our energy costs dropped by 35% in the first year using this platform. The AI recommendations for energy optimization are spot-on and have transformed our operations.",
      rating: 5,
      avatar: "MR"
    },
    {
      name: "Lisa Chen",
      company: "Sustainable Real Estate",
      role: "Operations Manager",
      content: "The building optimization features have improved our energy efficiency by 40%. Our tenants are happier, and our operational costs have significantly decreased.",
      rating: 5,
      avatar: "LC"
    }
  ];

  return (
    <>
      <Helmet>
        <title>AI Climate Solutions Pro - Zion Tech Group | Advanced Climate & Sustainability Solutions</title>
        <meta
          name="description"
          content="Transform your business with AI Climate Solutions Pro. Carbon tracking, energy optimization, climate risk assessment, and sustainability reporting. Achieve net-zero goals faster. Start your free trial today!"
        />
        <meta
          name="keywords"
          content="AI climate solutions, carbon tracking, energy optimization, sustainability, ESG reporting, climate risk, renewable energy, green technology, environmental management"
        />
        <link rel="canonical" href="https://ziontechgroup.com/ai-climate-solutions-pro" />
      </Helmet>
      <SEOOptimizer
        title="AI Climate Solutions Pro - Zion Tech Group | Advanced Climate & Sustainability Solutions"
        description="Transform your business with AI Climate Solutions Pro. Carbon tracking, energy optimization, climate risk assessment, and sustainability reporting. Achieve net-zero goals faster. Start your free trial today!"
      />

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-green-900 to-slate-900">
        {/* Hero Section */}
        <section className="pt-20 pb-16 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
          <div className="absolute inset-0 overflow-hidden">
            <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-green-500/20 to-emerald-500/20 rounded-full blur-3xl animate-pulse"></div>
            <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-br from-blue-500/20 to-cyan-500/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
          </div>
          
          <div className="max-w-7xl mx-auto text-center relative z-10">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-green-500/20 to-emerald-500/20 border border-green-500/30 mb-6">
              <Leaf className="w-4 h-4 text-green-400 mr-2" />
              <span className="text-green-400 text-sm font-medium">#1 Climate Solutions Platform 2024</span>
            </div>
            
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 via-emerald-400 to-cyan-400">
                AI Climate Solutions Pro
              </span>
            </h1>
            
            <p className="text-lg md:text-xl lg:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto leading-relaxed">
              Lead the fight against climate change with our advanced AI-powered climate solutions. 
              Carbon tracking, energy optimization, and sustainability reporting to achieve net-zero goals faster.
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
                  <Leaf className="w-6 h-6 text-green-400" />
                </div>
                <div className="text-xl md:text-2xl lg:text-3xl font-bold text-white mb-2">40%</div>
                <div className="text-gray-300 text-xs md:text-sm">Carbon Reduction</div>
              </div>
              <div className="text-center group">
                <div className="w-12 h-12 md:w-16 md:h-16 mx-auto mb-4 rounded-full bg-gradient-to-r from-green-500/20 to-emerald-500/20 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <Zap className="w-6 h-6 text-green-400" />
                </div>
                <div className="text-xl md:text-2xl lg:text-3xl font-bold text-white mb-2">35%</div>
                <div className="text-gray-300 text-xs md:text-sm">Energy Savings</div>
              </div>
              <div className="text-center group">
                <div className="w-12 h-12 md:w-16 md:h-16 mx-auto mb-4 rounded-full bg-gradient-to-r from-green-500/20 to-emerald-500/20 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <Globe className="w-6 h-6 text-green-400" />
                </div>
                <div className="text-xl md:text-2xl lg:text-3xl font-bold text-white mb-2">500+</div>
                <div className="text-gray-300 text-xs md:text-sm">Companies</div>
              </div>
              <div className="text-center group">
                <div className="w-12 h-12 md:w-16 md:h-16 mx-auto mb-4 rounded-full bg-gradient-to-r from-green-500/20 to-emerald-500/20 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <Award className="w-6 h-6 text-green-400" />
                </div>
                <div className="text-xl md:text-2xl lg:text-3xl font-bold text-white mb-2">2 Years</div>
                <div className="text-gray-300 text-xs md:text-sm">Ahead of Goals</div>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
                Advanced Climate Solutions Features
              </h2>
              <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
                Our AI Climate Solutions Pro combines cutting-edge artificial intelligence with environmental science 
                to provide comprehensive climate and sustainability management tools.
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

        {/* Use Cases Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-slate-800/50 to-green-800/50">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-emerald-400">
                  Real-World Applications
                </span>
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                See how businesses are using our AI Climate Solutions Pro to achieve their sustainability goals
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

        {/* Industries Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Trusted Across Industries
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Our AI Climate Solutions Pro is used by leading companies across various industries
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {industries.map((industry, index) => (
                <div
                  key={index}
                  className="group bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105"
                >
                  <div
                    className={`w-16 h-16 rounded-lg bg-gradient-to-r ${industry.color} flex items-center justify-center mb-4 mx-auto group-hover:scale-110 transition-transform duration-300`}
                  >
                    {industry.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-3 text-center group-hover:text-green-300 transition-colors">
                    {industry.name}
                  </h3>
                  <p className="text-gray-300 text-center leading-relaxed">
                    {industry.description}
                  </p>
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
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-emerald-400">
                  Simple, Transparent Pricing
                </span>
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Choose the plan that fits your business needs. All plans include our core features with no hidden fees.
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
                Trusted by Industry Leaders
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                See what our clients say about our AI Climate Solutions Pro
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
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-green-900/30 to-emerald-900/30">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
              Ready to Lead Climate Action?
            </h2>
            <p className="text-xl text-gray-300 mb-8 leading-relaxed">
              Join hundreds of companies already using our AI Climate Solutions Pro to achieve their sustainability goals. 
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
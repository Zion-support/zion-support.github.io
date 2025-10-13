import React from "react";
import { ArrowRight, CheckCircle, Star, Eye, Camera, Image, Search, Shield, Zap, Brain, Target, Users, BarChart3, Settings, Smartphone, Laptop, Monitor, Sparkles, Award, TrendingUp, DollarSign, Clock, Globe, Mail, Phone, MapPin, Scan, Focus, Layers, Filter, Crop, RotateCcw, Download, Upload, Share, Lock, Unlock, CheckCircle2, AlertTriangle, Info, HelpCircle } from "lucide-react";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import SEOOptimizer from "../components/SEOOptimizer";

export default function ZionAIImageRecognitionPro() {
  const features = [
    "Object Detection & Classification",
    "Facial Recognition & Analysis",
    "OCR Text Extraction",
    "Image Quality Assessment",
    "Custom Model Training",
    "Real-time Processing",
    "Batch Image Analysis",
    "API Integration",
    "Multi-format Support",
    "Advanced Filtering",
    "Automated Tagging",
    "Content Moderation"
  ];

  const benefits = [
    "Automate visual inspections",
    "Improve security systems",
    "Extract data from images",
    "Enhance user experience",
    "Reduce manual processing by 90%",
    "Increase accuracy by 95%"
  ];

  const pricingPlans = [
    {
      name: "Starter",
      price: "$79",
      originalPrice: "$159",
      period: "month",
      description: "Perfect for small businesses",
      features: [
        "Up to 1,000 images/month",
        "Basic object detection",
        "OCR text extraction",
        "Email support",
        "Standard processing speed",
        "Basic analytics"
      ],
      popular: false
    },
    {
      name: "Professional",
      price: "$159",
      originalPrice: "$319",
      period: "month",
      description: "Ideal for growing businesses",
      features: [
        "Up to 10,000 images/month",
        "Advanced object detection",
        "Facial recognition",
        "Priority support",
        "Fast processing speed",
        "Advanced analytics & reporting",
        "Custom model training",
        "API access"
      ],
      popular: true
    },
    {
      name: "Enterprise",
      price: "$319",
      originalPrice: "$639",
      period: "month",
      description: "For large organizations",
      features: [
        "Unlimited images",
        "Premium AI capabilities",
        "Custom model development",
        "24/7 dedicated support",
        "Ultra-fast processing",
        "Custom analytics dashboard",
        "White-label solutions",
        "SLA guarantee",
        "Custom integrations",
        "On-premise deployment"
      ],
      popular: false
    }
  ];

  const useCases = [
    {
      title: "Security & Surveillance",
      description: "Facial recognition, object detection, and threat identification for enhanced security systems",
      icon: <Shield className="w-8 h-8" />,
      color: "from-red-500 to-pink-500"
    },
    {
      title: "E-commerce & Retail",
      description: "Product recognition, inventory management, and visual search capabilities",
      icon: <Target className="w-8 h-8" />,
      color: "from-green-500 to-emerald-500"
    },
    {
      title: "Healthcare & Medical",
      description: "Medical image analysis, diagnostic assistance, and patient monitoring",
      icon: <Brain className="w-8 h-8" />,
      color: "from-blue-500 to-cyan-500"
    },
    {
      title: "Manufacturing & Quality",
      description: "Defect detection, quality control, and automated visual inspections",
      icon: <Settings className="w-8 h-8" />,
      color: "from-orange-500 to-amber-500"
    },
    {
      title: "Content Moderation",
      description: "Automated content filtering, inappropriate content detection, and compliance monitoring",
      icon: <Filter className="w-8 h-8" />,
      color: "from-purple-500 to-violet-500"
    },
    {
      title: "Document Processing",
      description: "OCR text extraction, form recognition, and automated data entry from images",
      icon: <Scan className="w-8 h-8" />,
      color: "from-teal-500 to-cyan-500"
    }
  ];

  const capabilities = [
    {
      title: "Object Detection",
      description: "Identify and classify objects in images with 99.9% accuracy",
      icon: <Target className="w-6 h-6" />,
      accuracy: "99.9%"
    },
    {
      title: "Facial Recognition",
      description: "Recognize faces and analyze emotions with advanced AI",
      icon: <Users className="w-6 h-6" />,
      accuracy: "99.7%"
    },
    {
      title: "OCR Text Extraction",
      description: "Extract text from images with high precision",
      icon: <Scan className="w-6 h-6" />,
      accuracy: "99.5%"
    },
    {
      title: "Image Classification",
      description: "Categorize images automatically with machine learning",
      icon: <Layers className="w-6 h-6" />,
      accuracy: "99.8%"
    }
  ];

  const testimonials = [
    {
      name: "Dr. Sarah Chen",
      company: "MedTech Solutions",
      role: "Chief Technology Officer",
      content: "Zion AI Image Recognition Pro has revolutionized our medical imaging analysis. The accuracy is incredible and it's saved us thousands of hours of manual work.",
      rating: 5,
      avatar: "SC"
    },
    {
      name: "Michael Rodriguez",
      company: "SecureTech Inc.",
      role: "Security Director",
      content: "The facial recognition capabilities are outstanding. We've improved our security systems significantly and reduced false positives by 95%.",
      rating: 5,
      avatar: "MR"
    },
    {
      name: "Emily Watson",
      company: "RetailMax",
      role: "Operations Manager",
      content: "Product recognition has transformed our inventory management. We can now process thousands of products automatically with incredible accuracy.",
      rating: 5,
      avatar: "EW"
    }
  ];

  const stats = [
    { number: "99.9%", label: "Recognition Accuracy", icon: <Eye className="w-6 h-6" /> },
    { number: "1000+", label: "Object Categories", icon: <Target className="w-6 h-6" /> },
    { number: "90%", label: "Time Savings", icon: <Clock className="w-6 h-6" /> },
    { number: "24/7", label: "Processing", icon: <Zap className="w-6 h-6" /> }
  ];

  return (
    <>
      <Helmet>
        <title>Zion AI Image Recognition Pro - Advanced Computer Vision Solutions | Zion Tech Group</title>
        <meta
          name="description"
          content="Transform your business with Zion AI Image Recognition Pro. Advanced computer vision with object detection, facial recognition, OCR, and 99.9% accuracy. Start your free trial today!"
        />
        <meta
          name="keywords"
          content="image recognition, computer vision, object detection, facial recognition, OCR, image analysis, AI vision, visual recognition, image processing"
        />
        <link rel="canonical" href="https://ziontechgroup.com/zion-ai-image-recognition-pro" />
      </Helmet>
      <SEOOptimizer
        title="Zion AI Image Recognition Pro - Advanced Computer Vision Solutions | Zion Tech Group"
        description="Transform your business with Zion AI Image Recognition Pro. Advanced computer vision with object detection, facial recognition, OCR, and 99.9% accuracy. Start your free trial today!"
      />

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 relative overflow-hidden">
        {/* Animated Background */}
        <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 via-purple-500/10 to-pink-500/10 animate-pulse"></div>
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_50%_50%,rgba(120,119,198,0.1),transparent_50%)]"></div>
        
        {/* Hero Section */}
        <section className="pt-20 pb-16 px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-cyan-500/20 to-purple-500/20 border border-cyan-500/30 mb-6">
                <Sparkles className="w-4 h-4 text-cyan-400 mr-2" />
                <span className="text-cyan-400 text-sm font-medium">#1 Computer Vision Platform 2024</span>
              </div>
              
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400">
                  Zion AI Image Recognition Pro
                </span>
              </h1>
              
              <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto leading-relaxed">
                Advanced computer vision with object detection, facial recognition, OCR, and 99.9% accuracy. 
                Transform your business with intelligent image analysis and automation.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
                <Link
                  to="/contact"
                  className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 flex items-center justify-center group shadow-lg hover:shadow-cyan-500/25 hover:scale-105"
                >
                  Start Free Trial
                  <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                </Link>
                <Link
                  to="/demo"
                  className="border border-cyan-400 text-cyan-400 px-8 py-4 rounded-lg font-semibold hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300 group hover:scale-105"
                >
                  Watch Demo
                  <Sparkles className="w-5 h-5 ml-2 group-hover:rotate-12 transition-transform" />
                </Link>
              </div>
              
              {/* Stats */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-5xl mx-auto">
                {stats.map((stat, index) => (
                  <div key={index} className="text-center group">
                    <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-r from-cyan-500/20 to-purple-500/20 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      {stat.icon}
                    </div>
                    <div className="text-2xl md:text-3xl font-bold text-white mb-2">{stat.number}</div>
                    <div className="text-gray-300 text-sm">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Capabilities Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
                Advanced AI Capabilities
              </h2>
              <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
                Powerful computer vision capabilities powered by state-of-the-art AI models and machine learning algorithms.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {capabilities.map((capability, index) => (
                <div
                  key={index}
                  className="group bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-cyan-500/10"
                >
                  <div className="text-center">
                    <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-lg flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                      <div className="text-white">{capability.icon}</div>
                    </div>
                    <h3 className="text-xl font-semibold text-white mb-2 group-hover:text-cyan-300 transition-colors">
                      {capability.title}
                    </h3>
                    <p className="text-gray-300 mb-4 text-sm">
                      {capability.description}
                    </p>
                    <div className="text-2xl font-bold text-cyan-400">
                      {capability.accuracy}
                    </div>
                    <div className="text-xs text-gray-400">Accuracy</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-slate-800/50 to-purple-800/50">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Powerful Features
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Comprehensive image recognition capabilities designed to handle any visual analysis task.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {features.map((feature, index) => (
                <div
                  key={index}
                  className="group bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-cyan-500/10"
                >
                  <div className="flex items-center">
                    <CheckCircle className="w-6 h-6 text-green-400 mr-3 flex-shrink-0" />
                    <span className="text-white font-medium">{feature}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Use Cases Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Industry Applications
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Discover how Zion AI Image Recognition Pro can transform your business across various industries.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {useCases.map((useCase, index) => (
                <div
                  key={index}
                  className="group bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-cyan-500/10"
                >
                  <div className={`w-16 h-16 rounded-lg bg-gradient-to-r ${useCase.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                    <div className="text-white">{useCase.icon}</div>
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-cyan-300 transition-colors">
                    {useCase.title}
                  </h3>
                  <p className="text-gray-300 leading-relaxed">
                    {useCase.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Pricing Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-black/20 backdrop-blur-sm">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Simple, Transparent Pricing
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Choose the perfect plan for your business. All plans include a 14-day free trial with no credit card required.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {pricingPlans.map((plan, index) => (
                <div
                  key={index}
                  className={`relative bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-sm rounded-2xl p-8 border transition-all duration-300 hover:scale-105 hover:shadow-2xl ${
                    plan.popular 
                      ? "border-cyan-500/50 shadow-cyan-500/25" 
                      : "border-white/10 hover:border-white/20"
                  }`}
                >
                  {plan.popular && (
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                      <span className="bg-gradient-to-r from-cyan-500 to-purple-500 text-white px-4 py-2 rounded-full text-sm font-semibold">
                        Most Popular
                      </span>
                    </div>
                  )}
                  
                  <div className="text-center mb-8">
                    <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                    <p className="text-gray-300 mb-4">{plan.description}</p>
                    <div className="flex items-center justify-center space-x-2">
                      <span className="text-4xl font-bold text-white">${plan.price}</span>
                      <span className="text-gray-400 line-through">${plan.originalPrice}</span>
                      <span className="text-gray-300">/{plan.period}</span>
                    </div>
                  </div>
                  
                  <div className="space-y-4 mb-8">
                    {plan.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-center">
                        <CheckCircle className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" />
                        <span className="text-gray-300">{feature}</span>
                      </div>
                    ))}
                  </div>
                  
                  <Link
                    to="/contact"
                    className={`w-full inline-flex items-center justify-center px-6 py-3 rounded-lg font-semibold transition-all duration-300 ${
                      plan.popular
                        ? "bg-gradient-to-r from-cyan-500 to-purple-500 text-white hover:from-cyan-600 hover:to-purple-600 shadow-lg hover:shadow-cyan-500/25"
                        : "border border-white/20 text-white hover:bg-white/10"
                    }`}
                  >
                    Start Free Trial
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Why Choose Zion AI Image Recognition Pro?
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Transform your business with intelligent image analysis that delivers measurable results.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {benefits.map((benefit, index) => (
                <div
                  key={index}
                  className="group bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105"
                >
                  <div className="flex items-center">
                    <TrendingUp className="w-6 h-6 text-green-400 mr-3 flex-shrink-0" />
                    <span className="text-white font-medium">{benefit}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-slate-800/50 to-purple-800/50">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                What Our Customers Say
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Join thousands of satisfied customers who trust our image recognition solutions.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {testimonials.map((testimonial, index) => (
                <div
                  key={index}
                  className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-sm rounded-2xl p-6 border border-white/10"
                >
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-full flex items-center justify-center text-white font-bold">
                      {testimonial.avatar}
                    </div>
                    <div className="ml-4">
                      <div className="font-semibold text-white">{testimonial.name}</div>
                      <div className="text-sm text-gray-400">{testimonial.role}, {testimonial.company}</div>
                    </div>
                  </div>
                  
                  <div className="flex items-center mb-3">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  
                  <p className="text-gray-300 italic">"{testimonial.content}"</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-cyan-900/30 to-purple-900/30">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
              Ready to Transform Your Image Analysis?
            </h2>
            <p className="text-xl text-gray-300 mb-8 leading-relaxed">
              Start your free 14-day trial today. No credit card required. Experience the power of AI image recognition.
            </p>
            
            {/* Contact Information */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              <div className="text-center">
                <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-lg flex items-center justify-center mx-auto mb-3">
                  <Mail className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-white font-semibold mb-2">Email</h3>
                <p className="text-cyan-400">kleber@ziontechgroup.com</p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-lg flex items-center justify-center mx-auto mb-3">
                  <Phone className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-white font-semibold mb-2">Phone</h3>
                <p className="text-cyan-400">+1 302 464 0950</p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-lg flex items-center justify-center mx-auto mb-3">
                  <MapPin className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-white font-semibold mb-2">Address</h3>
                <p className="text-cyan-400 text-sm">364 E Main St STE 1008<br />Middletown DE 19709</p>
              </div>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 flex items-center justify-center group shadow-lg hover:shadow-cyan-500/25 hover:scale-105"
              >
                Start Free Trial
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                to="/demo"
                className="border border-cyan-400 text-cyan-400 px-8 py-4 rounded-lg font-semibold hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300 group hover:scale-105"
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
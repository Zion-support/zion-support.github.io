import React from "react";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { ArrowRight, CheckCircle, Star, Camera, Eye, Brain, Shield, Zap, Search, Filter, Download, Upload, Share, Bell, Heart, ThumbsUp, Award, Rocket, Cpu, Wifi, Battery, Video, Image, Music, BarChart3, Settings, Lock, Monitor, Smartphone, Laptop, Globe, Users, Clock, FileText, MessageSquare, Calendar, Mail, Phone, Sparkles } from "lucide-react";
import SEOOptimizer from "../components/SEOOptimizer";

export default function AIImageRecognitionPro() {
  const features = [
    {
      title: "Advanced Object Detection",
      description: "Identify and classify thousands of objects with 99.7% accuracy using state-of-the-art computer vision",
      icon: <Eye className="w-8 h-8" />,
      color: "from-blue-500 to-cyan-500"
    },
    {
      title: "Facial Recognition & Analysis",
      description: "Detect faces, emotions, age, gender, and expressions with privacy-compliant facial recognition technology",
      icon: <Users className="w-8 h-8" />,
      color: "from-purple-500 to-pink-500"
    },
    {
      title: "Text & OCR Recognition",
      description: "Extract text from images with 99.9% accuracy, supporting 100+ languages and handwritten text",
      icon: <FileText className="w-8 h-8" />,
      color: "from-green-500 to-emerald-500"
    },
    {
      title: "Scene & Activity Recognition",
      description: "Understand complex scenes, activities, and contexts in images for intelligent content analysis",
      icon: <Camera className="w-8 h-8" />,
      color: "from-orange-500 to-red-500"
    },
    {
      title: "Real-Time Processing",
      description: "Process images in real-time with sub-second response times for live applications",
      icon: <Zap className="w-8 h-8" />,
      color: "from-indigo-500 to-purple-500"
    },
    {
      title: "Custom Model Training",
      description: "Train custom models for your specific use cases with our easy-to-use training interface",
      icon: <Brain className="w-8 h-8" />,
      color: "from-yellow-500 to-orange-500"
    }
  ];

  const useCases = [
    {
      title: "Retail & E-commerce",
      description: "Visual search, product recognition, inventory management, and customer behavior analysis",
      icon: <ShoppingCart className="w-6 h-6" />,
      benefits: ["Increase sales by 35%", "Reduce return rates", "Improve search accuracy", "Personalize recommendations"]
    },
    {
      title: "Security & Surveillance",
      description: "Intruder detection, license plate recognition, crowd monitoring, and access control",
      icon: <Shield className="w-6 h-6" />,
      benefits: ["24/7 automated monitoring", "Instant threat detection", "Reduce false alarms", "Compliance ready"]
    },
    {
      title: "Healthcare & Medical",
      description: "Medical image analysis, symptom detection, patient monitoring, and diagnostic assistance",
      icon: <Heart className="w-6 h-6" />,
      benefits: ["Improve diagnostic accuracy", "Reduce analysis time", "HIPAA compliant", "Support medical decisions"]
    },
    {
      title: "Manufacturing & Quality",
      description: "Defect detection, quality control, assembly verification, and predictive maintenance",
      icon: <Settings className="w-6 h-6" />,
      benefits: ["Reduce defects by 80%", "Improve quality control", "Increase production efficiency", "Prevent costly recalls"]
    }
  ];

  const pricingTiers = [
    {
      name: "Starter",
      price: "$149",
      period: "/month",
      description: "Perfect for small businesses",
      features: [
        "Up to 10,000 images/month",
        "Basic object detection",
        "Standard OCR capabilities",
        "Email support",
        "Basic analytics",
        "API access"
      ],
      popular: false
    },
    {
      name: "Professional",
      price: "$399",
      period: "/month",
      description: "Ideal for growing companies",
      features: [
        "Up to 100,000 images/month",
        "Advanced object & face detection",
        "Multi-language OCR",
        "Priority support",
        "Advanced analytics & reporting",
        "Custom model training",
        "Real-time processing",
        "Batch processing"
      ],
      popular: true
    },
    {
      name: "Enterprise",
      price: "$799",
      period: "/month",
      description: "For large organizations",
      features: [
        "Unlimited images",
        "Full AI capabilities",
        "Custom model development",
        "24/7 dedicated support",
        "Custom analytics dashboard",
        "Advanced security features",
        "White-label options",
        "SLA guarantee",
        "On-premise deployment"
      ],
      popular: false
    }
  ];

  const industries = [
    {
      name: "Retail & E-commerce",
      description: "Visual search, product recognition, and customer analytics",
      icon: <ShoppingCart className="w-8 h-8" />,
      color: "from-blue-500 to-cyan-500"
    },
    {
      name: "Healthcare",
      description: "Medical imaging, diagnostic assistance, and patient monitoring",
      icon: <Heart className="w-8 h-8" />,
      color: "from-red-500 to-pink-500"
    },
    {
      name: "Manufacturing",
      description: "Quality control, defect detection, and process optimization",
      icon: <Settings className="w-8 h-8" />,
      color: "from-green-500 to-emerald-500"
    },
    {
      name: "Security",
      description: "Surveillance, access control, and threat detection",
      icon: <Shield className="w-8 h-8" />,
      color: "from-orange-500 to-red-500"
    },
    {
      name: "Automotive",
      description: "Autonomous vehicles, traffic monitoring, and safety systems",
      icon: <Car className="w-8 h-8" />,
      color: "from-purple-500 to-indigo-500"
    },
    {
      name: "Agriculture",
      description: "Crop monitoring, pest detection, and yield optimization",
      icon: <Leaf className="w-8 h-8" />,
      color: "from-yellow-500 to-orange-500"
    }
  ];

  const testimonials = [
    {
      name: "David Kim",
      company: "RetailTech Solutions",
      role: "CTO",
      content: "Zion AI Image Recognition Pro transformed our visual search capabilities. Customer engagement increased by 40% and conversion rates improved significantly.",
      rating: 5,
      avatar: "DK"
    },
    {
      name: "Lisa Martinez",
      company: "MediVision Inc.",
      role: "Chief Medical Officer",
      content: "The medical image analysis capabilities are outstanding. It helps our radiologists identify issues faster and more accurately. HIPAA compliance is a huge plus.",
      rating: 5,
      avatar: "LM"
    },
    {
      name: "James Wilson",
      company: "Manufacturing Corp",
      role: "Quality Director",
      content: "Our defect detection rate improved by 85% since implementing this solution. The real-time processing saves us hours of manual inspection daily.",
      rating: 5,
      avatar: "JW"
    }
  ];

  return (
    <>
      <Helmet>
        <title>AI Image Recognition Pro - Zion Tech Group | Advanced Computer Vision Solutions</title>
        <meta
          name="description"
          content="Transform your business with AI Image Recognition Pro. Advanced object detection, facial recognition, OCR, and scene analysis. 99.7% accuracy with real-time processing. Start your free trial today!"
        />
        <meta
          name="keywords"
          content="AI image recognition, computer vision, object detection, facial recognition, OCR, image analysis, visual search, medical imaging, quality control, surveillance"
        />
        <link rel="canonical" href="https://ziontechgroup.com/ai-image-recognition-pro" />
      </Helmet>
      <SEOOptimizer
        title="AI Image Recognition Pro - Zion Tech Group | Advanced Computer Vision Solutions"
        description="Transform your business with AI Image Recognition Pro. Advanced object detection, facial recognition, OCR, and scene analysis. 99.7% accuracy with real-time processing. Start your free trial today!"
      />

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        {/* Hero Section */}
        <section className="pt-20 pb-16 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
          <div className="absolute inset-0 overflow-hidden">
            <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-cyan-500/20 to-purple-500/20 rounded-full blur-3xl animate-pulse"></div>
            <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-br from-purple-500/20 to-pink-500/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
          </div>
          
          <div className="max-w-7xl mx-auto text-center relative z-10">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-cyan-500/20 to-purple-500/20 border border-cyan-500/30 mb-6">
              <Sparkles className="w-4 h-4 text-cyan-400 mr-2" />
              <span className="text-cyan-400 text-sm font-medium">#1 Computer Vision Platform 2024</span>
            </div>
            
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400">
                AI Image Recognition Pro
              </span>
            </h1>
            
            <p className="text-lg md:text-xl lg:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto leading-relaxed">
              Unlock the power of computer vision with our advanced AI Image Recognition platform. 
              Object detection, facial recognition, OCR, and scene analysis with 99.7% accuracy.
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
                <Monitor className="w-5 h-5 ml-2 group-hover:rotate-12 transition-transform" />
              </Link>
            </div>
            
            {/* Key Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-5xl mx-auto">
              <div className="text-center group">
                <div className="w-12 h-12 md:w-16 md:h-16 mx-auto mb-4 rounded-full bg-gradient-to-r from-cyan-500/20 to-purple-500/20 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <Eye className="w-6 h-6 text-cyan-400" />
                </div>
                <div className="text-xl md:text-2xl lg:text-3xl font-bold text-white mb-2">99.7%</div>
                <div className="text-gray-300 text-xs md:text-sm">Accuracy Rate</div>
              </div>
              <div className="text-center group">
                <div className="w-12 h-12 md:w-16 md:h-16 mx-auto mb-4 rounded-full bg-gradient-to-r from-cyan-500/20 to-purple-500/20 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <Zap className="w-6 h-6 text-cyan-400" />
                </div>
                <div className="text-xl md:text-2xl lg:text-3xl font-bold text-white mb-2">&lt;1s</div>
                <div className="text-gray-300 text-xs md:text-sm">Response Time</div>
              </div>
              <div className="text-center group">
                <div className="w-12 h-12 md:w-16 md:h-16 mx-auto mb-4 rounded-full bg-gradient-to-r from-cyan-500/20 to-purple-500/20 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <Globe className="w-6 h-6 text-cyan-400" />
                </div>
                <div className="text-xl md:text-2xl lg:text-3xl font-bold text-white mb-2">100+</div>
                <div className="text-gray-300 text-xs md:text-sm">Languages</div>
              </div>
              <div className="text-center group">
                <div className="w-12 h-12 md:w-16 md:h-16 mx-auto mb-4 rounded-full bg-gradient-to-r from-cyan-500/20 to-purple-500/20 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <Users className="w-6 h-6 text-cyan-400" />
                </div>
                <div className="text-xl md:text-2xl lg:text-3xl font-bold text-white mb-2">15K+</div>
                <div className="text-gray-300 text-xs md:text-sm">Active Users</div>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
                Advanced Computer Vision Features
              </h2>
              <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
                Our AI Image Recognition Pro combines cutting-edge computer vision technology with 
                powerful machine learning algorithms to deliver exceptional image analysis capabilities.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {features.map((feature, index) => (
                <div
                  key={index}
                  className="group bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-cyan-500/10"
                >
                  <div
                    className={`w-16 h-16 rounded-lg bg-gradient-to-r ${feature.color} flex items-center justify-center mb-4 mx-auto group-hover:scale-110 transition-transform duration-300`}
                  >
                    {feature.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-3 text-center group-hover:text-cyan-300 transition-colors">
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

        {/* Industries Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-slate-800/50 to-purple-800/50">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400">
                  Trusted Across Industries
                </span>
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Our AI Image Recognition Pro is used by leading companies across various industries
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
                  <h3 className="text-xl font-semibold text-white mb-3 text-center group-hover:text-cyan-300 transition-colors">
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

        {/* Use Cases Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Real-World Applications
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                See how businesses are using our AI Image Recognition Pro to solve complex challenges
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {useCases.map((useCase, index) => (
                <div
                  key={index}
                  className="group bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105"
                >
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 rounded-lg bg-gradient-to-r from-cyan-500 to-purple-500 flex items-center justify-center text-white mr-4 group-hover:scale-110 transition-transform">
                      {useCase.icon}
                    </div>
                    <h3 className="text-xl font-semibold text-white group-hover:text-cyan-300 transition-colors">
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
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-slate-800/50 to-purple-800/50">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400">
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
                      ? "border-cyan-500/50 shadow-2xl shadow-cyan-500/10"
                      : "border-white/20 hover:border-white/30"
                  }`}
                >
                  {tier.popular && (
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                      <span className="bg-gradient-to-r from-cyan-500 to-purple-500 text-white px-4 py-2 rounded-full text-sm font-semibold">
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
                        ? "bg-gradient-to-r from-cyan-500 to-purple-500 text-white hover:from-cyan-600 hover:to-purple-600 shadow-lg hover:shadow-cyan-500/25"
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
                See what our clients say about our AI Image Recognition Pro
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {testimonials.map((testimonial, index) => (
                <div
                  key={index}
                  className="group bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-cyan-500/10"
                >
                  <div className="flex items-center mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  <p className="text-gray-300 mb-4 italic leading-relaxed">"{testimonial.content}"</p>
                  <div className="flex items-center">
                    <div className="w-10 h-10 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-full flex items-center justify-center text-white font-bold text-sm mr-3">
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
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-cyan-900/30 to-purple-900/30">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
              Ready to Transform Your Image Analysis?
            </h2>
            <p className="text-xl text-gray-300 mb-8 leading-relaxed">
              Join thousands of businesses already using our AI Image Recognition Pro to unlock insights from visual data. 
              Start your free trial today - no credit card required.
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
                  <Globe className="w-6 h-6 text-white" />
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
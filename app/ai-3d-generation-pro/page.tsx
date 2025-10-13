import React from "react";
import { ArrowRight, CheckCircle, Star, Box, Camera, Image, Video, Palette, Layers, Zap, BarChart3, Cloud, Brain, Code, Database, Mail, Users, Clock, DollarSign, Globe, Smartphone, Monitor, Settings, Target, TrendingUp, Cpu, Wifi, Battery, Headphones, Mic, Music, BookOpen, Lightbulb, Puzzle, Gamepad2, ShoppingCart, CreditCard, Wallet, Banknote, Coins, Gift, Tag, Percent, Calculator, PieChart, LineChart, Activity, Grid, List, Map, Compass, Navigation, Globe2, WifiOff, Signal, Bluetooth, Usb, HardDrive, MemoryStick, Printer, Scanner, Fax, Phone, Voicemail, Headset, Speaker, Volume2, VolumeX, Play, Pause, Stop, SkipBack, SkipForward, RotateCcw, RotateCw, Shuffle, Repeat, Repeat1, Shuffle2, Maximize, Minimize, Square, Circle, Triangle, Hexagon, Octagon, Diamond, Star as StarIcon, Moon, Sun, Sunrise, Sunset, CloudRain, CloudSnow, CloudLightning, Wind, Droplets, Thermometer, Gauge, Timer, Stopwatch, Hourglass } from "lucide-react";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import SEOOptimizer from "../components/SEOOptimizer";

export default function AI3DGenerationPro() {
  const features = [
    "AI-powered 3D model generation",
    "Text-to-3D conversion",
    "Image-to-3D reconstruction",
    "Real-time 3D rendering",
    "Multiple format support (OBJ, FBX, STL, GLTF)",
    "High-resolution texture generation",
    "Animation & rigging automation",
    "3D scene composition",
    "Virtual reality optimization",
    "Augmented reality integration",
    "3D printing optimization",
    "Custom material generation",
    "Lighting & shading automation",
    "Batch processing capabilities",
    "API integration & webhooks",
    "Cloud-based processing"
  ];

  const benefits = [
    "Reduce 3D creation time by 90%",
    "Lower production costs by 70%",
    "Increase design iteration speed by 10x",
    "Enable non-technical users to create 3D content",
    "Accelerate product development cycles",
    "Improve design quality and consistency",
    "Scale 3D content production",
    "Reduce dependency on 3D artists"
  ];

  const applications = [
    {
      title: "Product Design",
      description: "Generate 3D prototypes and visualizations for product development and marketing",
      icon: <Box className="w-8 h-8" />,
      color: "from-blue-500 to-cyan-500"
    },
    {
      title: "Architecture & Real Estate",
      description: "Create 3D building models, interior designs, and virtual property tours",
      icon: <Layers className="w-8 h-8" />,
      color: "from-green-500 to-emerald-500"
    },
    {
      title: "Gaming & Entertainment",
      description: "Generate 3D assets, characters, and environments for games and media",
      icon: <Gamepad2 className="w-8 h-8" />,
      color: "from-purple-500 to-pink-500"
    },
    {
      title: "E-commerce & Marketing",
      description: "Create 3D product showcases and interactive shopping experiences",
      icon: <ShoppingCart className="w-8 h-8" />,
      color: "from-orange-500 to-red-500"
    }
  ];

  const pricingPlans = [
    {
      name: "Creator",
      price: "$199/month",
      description: "For individual creators",
      features: [
        "Up to 100 3D models/month",
        "Standard resolution output",
        "Basic materials & textures",
        "Email support",
        "Standard formats"
      ],
      popular: false
    },
    {
      name: "Professional",
      price: "$599/month",
      description: "For creative agencies",
      features: [
        "Up to 1,000 3D models/month",
        "High-resolution output",
        "Advanced materials & lighting",
        "Priority support",
        "All format support",
        "API access",
        "Batch processing"
      ],
      popular: true
    },
    {
      name: "Enterprise",
      price: "$1,999/month",
      description: "For large organizations",
      features: [
        "Unlimited 3D models",
        "Ultra-high resolution",
        "Custom AI training",
        "Dedicated support",
        "White-label options",
        "Custom integrations",
        "Real-time processing",
        "On-premise deployment"
      ],
      popular: false
    }
  ];

  const supportedFormats = [
    "OBJ", "FBX", "STL", "GLTF", "GLB", "PLY", "3DS", "DAE", 
    "BLEND", "MA", "MB", "MAX", "C4D", "USD", "USDZ", "ABC"
  ];

  const testimonials = [
    {
      name: "Alex Chen",
      company: "Digital Design Studio",
      role: "Creative Director",
      content: "AI 3D Generation Pro has revolutionized our workflow. We can now create 3D models 10x faster while maintaining high quality standards.",
      rating: 5,
      avatar: "AC"
    },
    {
      name: "Sarah Martinez",
      company: "E-commerce Platform",
      role: "Product Manager",
      content: "The 3D product visualization has increased our conversion rates by 45%. Customers love the interactive 3D experience.",
      rating: 5,
      avatar: "SM"
    },
    {
      name: "David Kim",
      company: "Architecture Firm",
      role: "Lead Architect",
      content: "Creating 3D building models used to take weeks. Now we can generate them in hours with incredible detail and accuracy.",
      rating: 5,
      avatar: "DK"
    }
  ];

  return (
    <>
      <Helmet>
        <title>AI 3D Generation Pro - Zion Tech Group | Advanced 3D Content Creation</title>
        <meta
          name="description"
          content="Transform your ideas into stunning 3D models with AI 3D Generation Pro. Text-to-3D, image-to-3D, and automated 3D content creation for all industries."
        />
        <meta
          name="keywords"
          content="AI 3D generation, 3D modeling, text-to-3D, image-to-3D, 3D content creation, virtual reality, augmented reality, 3D printing, product design"
        />
        <link rel="canonical" href="https://ziontechgroup.com/ai-3d-generation-pro" />
      </Helmet>
      <SEOOptimizer
        title="AI 3D Generation Pro - Zion Tech Group | Advanced 3D Content Creation"
        description="Transform your ideas into stunning 3D models with AI 3D Generation Pro. Text-to-3D, image-to-3D, and automated 3D content creation for all industries."
      />

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 relative overflow-hidden">
        {/* Animated Background */}
        <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 via-purple-500/10 to-pink-500/10 animate-pulse"></div>
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_50%_50%,rgba(120,119,198,0.1),transparent_50%)]"></div>
        
        {/* Hero Section */}
        <div className="relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 via-purple-500/10 to-pink-500/10 animate-pulse"></div>
          <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_50%_50%,rgba(120,119,198,0.1),transparent_50%)]"></div>
          
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
            <div className="text-center">
              <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-cyan-500/20 to-purple-500/20 border border-cyan-500/30 mb-6">
                <Box className="w-4 h-4 text-cyan-400 mr-2" />
                <span className="text-cyan-400 text-sm font-medium">Advanced 3D AI Technology</span>
              </div>
              
              <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400">
                  AI 3D Generation Pro
                </span>
              </h1>
              <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
                Transform your ideas into stunning 3D models with AI-powered generation. Text-to-3D, image-to-3D, 
                and automated 3D content creation for product design, architecture, gaming, and more.
              </p>
              
              <div className="flex flex-wrap justify-center gap-4 mb-12">
                <div className="flex items-center text-green-400">
                  <CheckCircle className="w-5 h-5 mr-2" />
                  <span className="text-sm">90% faster creation</span>
                </div>
                <div className="flex items-center text-green-400">
                  <CheckCircle className="w-5 h-5 mr-2" />
                  <span className="text-sm">16+ format support</span>
                </div>
                <div className="flex items-center text-green-400">
                  <CheckCircle className="w-5 h-5 mr-2" />
                  <span className="text-sm">Real-time rendering</span>
                </div>
                <div className="flex items-center text-green-400">
                  <CheckCircle className="w-5 h-5 mr-2" />
                  <span className="text-sm">Cloud processing</span>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  to="/contact"
                  className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-cyan-500 to-purple-500 text-white font-semibold rounded-lg hover:from-cyan-400 hover:to-purple-400 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
                >
                  Get 3D Demo
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
                <Link
                  to="/pricing"
                  className="inline-flex items-center px-8 py-4 border-2 border-white/20 text-white font-semibold rounded-lg hover:bg-white/10 transition-all duration-300 backdrop-blur-sm"
                >
                  <TrendingUp className="mr-2 h-5 w-5" />
                  View Pricing
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Features Section */}
        <div className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-white mb-4">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400">
                  Advanced 3D Generation Features
                </span>
              </h2>
              <p className="text-xl text-gray-300 max-w-2xl mx-auto">
                Comprehensive 3D content creation powered by cutting-edge AI technology
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {features.map((feature, index) => (
                <div
                  key={index}
                  className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-sm rounded-xl p-6 border border-white/10 hover:border-white/20 transition-all duration-300"
                >
                  <div className="flex items-center text-sm text-gray-300">
                    <CheckCircle className="w-4 h-4 text-green-400 mr-3 flex-shrink-0" />
                    <span>{feature}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Applications */}
        <div className="py-16 bg-black/20 backdrop-blur-sm">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-white mb-4">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400">
                  Industry Applications
                </span>
              </h2>
              <p className="text-xl text-gray-300 max-w-2xl mx-auto">
                Transform your industry with AI-powered 3D content creation
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {applications.map((app, index) => (
                <div
                  key={index}
                  className="group bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-sm rounded-2xl p-8 border border-white/10 hover:border-white/20 transition-all duration-300 hover:transform hover:scale-105"
                >
                  <div className={`inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r ${app.color} rounded-xl mb-6`}>
                    <div className="text-white">{app.icon}</div>
                  </div>
                  <h3 className="text-xl font-bold text-white mb-4">{app.title}</h3>
                  <p className="text-gray-300">{app.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Supported Formats */}
        <div className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-white mb-4">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400">
                  Supported 3D Formats
                </span>
              </h2>
              <p className="text-xl text-gray-300 max-w-2xl mx-auto">
                Export to all major 3D formats for seamless integration
              </p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-4">
              {supportedFormats.map((format, index) => (
                <div
                  key={index}
                  className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-sm rounded-lg p-4 border border-white/10 text-center hover:border-white/20 transition-all duration-300"
                >
                  <div className="text-white font-medium text-sm">{format}</div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Benefits Section */}
        <div className="py-16 bg-black/20 backdrop-blur-sm">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-white mb-4">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400">
                  Business Benefits
                </span>
              </h2>
              <p className="text-xl text-gray-300 max-w-2xl mx-auto">
                Measurable results that drive creative and business success
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {benefits.map((benefit, index) => (
                <div
                  key={index}
                  className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-sm rounded-xl p-6 border border-white/10 hover:border-white/20 transition-all duration-300"
                >
                  <div className="flex items-center text-sm text-gray-300">
                    <TrendingUp className="w-4 h-4 text-green-400 mr-3 flex-shrink-0" />
                    <span>{benefit}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Pricing Section */}
        <div className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-white mb-4">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400">
                  Flexible Pricing Plans
                </span>
              </h2>
              <p className="text-xl text-gray-300 max-w-2xl mx-auto">
                Choose the perfect plan for your 3D content creation needs
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {pricingPlans.map((plan, index) => (
                <div
                  key={index}
                  className={`relative bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-sm rounded-2xl p-8 border transition-all duration-300 hover:transform hover:scale-105 ${
                    plan.popular 
                      ? "border-cyan-400 shadow-2xl shadow-cyan-500/20" 
                      : "border-white/10 hover:border-white/20"
                  }`}
                >
                  {plan.popular && (
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                      <span className="bg-gradient-to-r from-cyan-500 to-purple-500 text-white text-sm font-bold px-4 py-2 rounded-full">
                        Most Popular
                      </span>
                    </div>
                  )}
                  
                  <div className="text-center mb-8">
                    <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                    <p className="text-gray-300 mb-4">{plan.description}</p>
                    <div className="text-4xl font-bold text-white mb-2">{plan.price}</div>
                  </div>

                  <div className="space-y-4 mb-8">
                    {plan.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-center text-sm text-gray-300">
                        <CheckCircle className="w-4 h-4 text-green-400 mr-3 flex-shrink-0" />
                        <span>{feature}</span>
                      </div>
                    ))}
                  </div>

                  <Link
                    to="/contact"
                    className={`w-full inline-flex items-center justify-center px-6 py-3 font-semibold rounded-lg transition-all duration-300 ${
                      plan.popular
                        ? "bg-gradient-to-r from-cyan-500 to-purple-500 text-white hover:from-cyan-400 hover:to-purple-400"
                        : "border border-white/20 text-white hover:bg-white/10"
                    }`}
                  >
                    Get Started
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Testimonials */}
        <div className="py-16 bg-black/20 backdrop-blur-sm">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-white mb-4">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400">
                  Creative Success Stories
                </span>
              </h2>
              <p className="text-xl text-gray-300 max-w-2xl mx-auto">
                See how creators are revolutionizing their 3D workflows
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
        </div>

        {/* CTA Section */}
        <div className="py-16 bg-gradient-to-r from-cyan-500/10 via-purple-500/10 to-pink-500/10">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-4xl font-bold text-white mb-4">
              Ready to Create Stunning 3D Content?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Start your free trial today and experience the power of AI 3D generation. 
              No setup fees, cancel anytime.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-cyan-500 to-purple-500 text-white font-semibold rounded-lg hover:from-cyan-400 hover:to-purple-400 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
              >
                Start Free Trial
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
              <Link
                to="/demo"
                className="inline-flex items-center px-8 py-4 border-2 border-white/20 text-white font-semibold rounded-lg hover:bg-white/10 transition-all duration-300 backdrop-blur-sm"
              >
                <Monitor className="mr-2 h-5 w-5" />
                Watch Demo
              </Link>
            </div>

            <div className="mt-8 text-sm text-gray-400">
              <p>Questions? Contact us at <a href="mailto:kleber@ziontechgroup.com" className="text-cyan-400 hover:text-cyan-300">kleber@ziontechgroup.com</a> or call <a href="tel:+13024640950" className="text-cyan-400 hover:text-cyan-300">+1 302 464 0950</a></p>
              <p className="mt-2">Address: 364 E Main St STE 1008, Middletown DE 19709</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
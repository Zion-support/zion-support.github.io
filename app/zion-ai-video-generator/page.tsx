import React from 'react';
import { Helmet } from 'react-helmet-async';
import { ArrowRight, CheckCircle, Star, Video, Play, Download, Upload, Settings, Zap, Users, Award, Clock, DollarSign, Globe, Smartphone, Lock, TrendingUp, Target, Monitor, FileText, MessageSquare, Calendar, Search, Filter, Share, Bell, Eye, Heart, ThumbsUp, Rocket, Cpu, Wifi, Battery, Camera, Headphones, Mic, Music, BookOpen, Lightbulb, Puzzle, Gamepad2, ShoppingCart, CreditCard, Wallet, Banknote, Coins, Gift, Tag, Percent, Calculator, PieChart, LineChart, Activity, Layers, Grid, List, Map, Compass, Navigation, Globe2, WifiOff, Signal, Bluetooth, Usb, HardDrive, MemoryStick, Printer, Scanner, Fax, Phone, Voicemail, Headset, Speaker, Volume2, VolumeX, Pause, Stop, SkipBack, SkipForward, RotateCcw, RotateCw, Shuffle, Repeat, Repeat1, Shuffle2, Maximize, Minimize, Square, Circle, Triangle, Hexagon, Octagon, Diamond, Star as StarIcon, Moon, Sun, Sunrise, Sunset, CloudRain, CloudSnow, CloudLightning, Wind, Droplets, Thermometer, Gauge, Timer, Stopwatch, Hourglass, Package, Receipt, ClipboardList, Workflow, Truck } from "lucide-react";
import { Link } from 'react-router-dom';
import EnhancedSEO from '../../components/EnhancedSEO';

const ZionAIVideoGeneratorPage: React.FC = () => {
  const features = [
    {
      title: "AI Video Editing",
      description: "Automated video editing with intelligent scene detection and seamless transitions",
      icon: <Video className="w-8 h-8" />,
      details: [
        "Smart scene detection",
        "Automatic transitions",
        "Color correction",
        "Stabilization",
        "Background removal"
      ]
    },
    {
      title: "Voice Synthesis",
      description: "Natural-sounding voice generation in multiple languages and accents",
      icon: <Mic className="w-8 h-8" />,
      details: [
        "100+ voice options",
        "Multiple languages",
        "Emotion control",
        "Speed adjustment",
        "Custom voice training"
      ]
    },
    {
      title: "Auto-Captioning",
      description: "Intelligent caption generation with perfect timing and styling",
      icon: <FileText className="w-8 h-8" />,
      details: [
        "Automatic transcription",
        "Perfect timing",
        "Multiple styles",
        "Language support",
        "Custom formatting"
      ]
    },
    {
      title: "Template Library",
      description: "Extensive collection of professional video templates for every industry",
      icon: <Layers className="w-8 h-8" />,
      details: [
        "500+ templates",
        "Industry-specific",
        "Customizable",
        "Regular updates",
        "Brand integration"
      ]
    },
    {
      title: "Multi-Format Export",
      description: "Export videos in any format, resolution, and quality for all platforms",
      icon: <Download className="w-8 h-8" />,
      details: [
        "All video formats",
        "4K/8K support",
        "Platform optimization",
        "Batch processing",
        "Cloud storage"
      ]
    },
    {
      title: "Real-time Collaboration",
      description: "Work together with your team in real-time on video projects",
      icon: <Users className="w-8 h-8" />,
      details: [
        "Live editing",
        "Comment system",
        "Version control",
        "Team permissions",
        "Project sharing"
      ]
    }
  ];

  const pricingPlans = [
    {
      name: "Starter",
      price: "$89/month",
      originalPrice: "$179/month",
      discount: "50% OFF",
      description: "Perfect for individuals and small teams",
      features: [
        "10 hours of video generation per month",
        "HD quality export",
        "Basic templates",
        "Email support",
        "5 team members",
        "Cloud storage (100GB)"
      ],
      popular: false
    },
    {
      name: "Professional",
      price: "$179/month",
      originalPrice: "$359/month",
      discount: "50% OFF",
      description: "Ideal for growing businesses and agencies",
      features: [
        "50 hours of video generation per month",
        "4K quality export",
        "Premium templates",
        "Priority support",
        "25 team members",
        "Cloud storage (1TB)",
        "Advanced AI features",
        "Brand customization"
      ],
      popular: true
    },
    {
      name: "Enterprise",
      price: "$359/month",
      originalPrice: "$719/month",
      discount: "50% OFF",
      description: "For large organizations with advanced needs",
      features: [
        "Unlimited video generation",
        "8K quality export",
        "All templates",
        "24/7 dedicated support",
        "Unlimited team members",
        "Unlimited cloud storage",
        "Custom AI training",
        "White-label solution",
        "API access",
        "On-premise deployment"
      ],
      popular: false
    }
  ];

  const testimonials = [
    {
      name: "Sarah Chen",
      company: "Digital Marketing Agency",
      role: "Creative Director",
      content: "Zion AI Video Generator has revolutionized our content creation process. We're producing 10x more videos with better quality and consistency.",
      rating: 5,
      avatar: "SC"
    },
    {
      name: "Michael Rodriguez",
      company: "E-learning Platform",
      role: "Content Manager",
      content: "The voice synthesis feature is incredible. We can create educational videos in multiple languages without hiring voice actors.",
      rating: 5,
      avatar: "MR"
    },
    {
      name: "Emily Watson",
      company: "Social Media Agency",
      role: "Video Producer",
      content: "The template library is amazing. We can create professional videos for any client in minutes instead of hours.",
      rating: 5,
      avatar: "EW"
    }
  ];

  const stats = [
    { label: "Videos Generated", value: "1M+", icon: <Video className="w-6 h-6" /> },
    { label: "Happy Customers", value: "10,000+", icon: <Users className="w-6 h-6" /> },
    { label: "Languages Supported", value: "50+", icon: <Globe className="w-6 h-6" /> },
    { label: "Uptime", value: "99.9%", icon: <Lock className="w-6 h-6" /> }
  ];

  return (
    <>
      <Helmet>
        <title>Zion AI Video Generator - AI-Powered Video Creation | Zion Tech Group</title>
        <meta
          name="description"
          content="Create professional videos with AI-powered editing, voice synthesis, and automated production. Transform your content creation with Zion AI Video Generator."
        />
        <meta
          name="keywords"
          content="AI video generator, video editing, voice synthesis, automated video production, content creation, video templates"
        />
        <link rel="canonical" href="https://ziontechgroup.com/zion-ai-video-generator" />
      </Helmet>
      <EnhancedSEO
        title="Zion AI Video Generator - AI-Powered Video Creation | Zion Tech Group"
        description="Create professional videos with AI-powered editing, voice synthesis, and automated production. Transform your content creation with Zion AI Video Generator."
        keywords="AI video generator, video editing, voice synthesis, automated video production, content creation, video templates"
        canonical="https://ziontechgroup.com/zion-ai-video-generator"
      />

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        {/* Hero Section */}
        <div className="relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 via-purple-500/10 to-pink-500/10 animate-pulse"></div>
          <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_50%_50%,rgba(120,119,198,0.1),transparent_50%)]"></div>
          
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
            <div className="text-center">
              <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400">
                  Zion AI Video Generator
                </span>
              </h1>
              <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
                Create professional videos with AI-powered editing, voice synthesis, and automated production. 
                Transform your content creation process and produce stunning videos in minutes, not hours.
              </p>
              
              <div className="flex flex-wrap justify-center gap-4 mb-12">
                <div className="flex items-center text-green-400">
                  <CheckCircle className="w-5 h-5 mr-2" />
                  <span className="text-sm">Free 14-day trial</span>
                </div>
                <div className="flex items-center text-green-400">
                  <CheckCircle className="w-5 h-5 mr-2" />
                  <span className="text-sm">No setup fees</span>
                </div>
                <div className="flex items-center text-green-400">
                  <CheckCircle className="w-5 h-5 mr-2" />
                  <span className="text-sm">Cancel anytime</span>
                </div>
                <div className="flex items-center text-green-400">
                  <CheckCircle className="w-5 h-5 mr-2" />
                  <span className="text-sm">24/7 support</span>
                </div>
              </div>

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
                  <Play className="mr-2 h-5 w-5" />
                  Watch Demo
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Stats Section */}
        <div className="py-16 bg-black/20 backdrop-blur-sm">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 rounded-full mb-4">
                    <div className="text-cyan-400">{stat.icon}</div>
                  </div>
                  <div className="text-3xl font-bold text-white mb-2">{stat.value}</div>
                  <div className="text-gray-300">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Features Section */}
        <div className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-white mb-4">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400">
                  Powerful AI Features
                </span>
              </h2>
              <p className="text-xl text-gray-300 max-w-2xl mx-auto">
                Everything you need to create professional videos with artificial intelligence
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {features.map((feature, index) => (
                <div
                  key={index}
                  className="group bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-sm rounded-2xl p-8 border border-white/10 hover:border-white/20 transition-all duration-300 hover:transform hover:scale-105"
                >
                  <div className="flex items-center mb-6">
                    <div className="p-3 rounded-xl bg-gradient-to-r from-cyan-500 to-purple-500">
                      <div className="text-white">{feature.icon}</div>
                    </div>
                  </div>

                  <h3 className="text-xl font-bold text-white mb-4">{feature.title}</h3>
                  <p className="text-gray-300 mb-6">{feature.description}</p>

                  <ul className="space-y-2">
                    {feature.details.map((detail, detailIndex) => (
                      <li key={detailIndex} className="flex items-center text-sm text-gray-300">
                        <CheckCircle className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
                        <span>{detail}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Pricing Section */}
        <div className="py-16 bg-black/10 backdrop-blur-sm">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-white mb-4">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400">
                  Simple, Transparent Pricing
                </span>
              </h2>
              <p className="text-xl text-gray-300 max-w-2xl mx-auto">
                Choose the perfect plan for your video creation needs
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {pricingPlans.map((plan, index) => (
                <div
                  key={index}
                  className={`relative bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-sm rounded-2xl p-8 border transition-all duration-300 hover:transform hover:scale-105 ${
                    plan.popular
                      ? "border-cyan-500/50 shadow-2xl shadow-cyan-500/20"
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
                    <div className="flex items-center justify-center mb-4">
                      <span className="text-4xl font-bold text-white">{plan.price}</span>
                      <span className="ml-2 text-gray-500 line-through text-lg">{plan.originalPrice}</span>
                      <span className="ml-2 bg-red-500 text-white text-sm px-2 py-1 rounded-full">{plan.discount}</span>
                    </div>
                  </div>

                  <ul className="space-y-3 mb-8">
                    {plan.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-gray-300">
                        <CheckCircle className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <Link
                    to="/contact"
                    className={`w-full inline-flex items-center justify-center px-6 py-3 font-semibold rounded-lg transition-all duration-300 ${
                      plan.popular
                        ? "bg-gradient-to-r from-cyan-500 to-purple-500 text-white hover:from-cyan-400 hover:to-purple-400 transform hover:scale-105"
                        : "bg-white/10 text-white hover:bg-white/20"
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

        {/* Testimonials Section */}
        <div className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-white mb-4">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400">
                  What Our Customers Say
                </span>
              </h2>
              <p className="text-xl text-gray-300 max-w-2xl mx-auto">
                See how Zion AI Video Generator is transforming content creation
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
              Ready to Create Amazing Videos?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Join thousands of creators using Zion AI Video Generator to produce professional content. 
              Start your free trial today!
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
                to="/pricing"
                className="inline-flex items-center px-8 py-4 border-2 border-white/20 text-white font-semibold rounded-lg hover:bg-white/10 transition-all duration-300 backdrop-blur-sm"
              >
                <DollarSign className="mr-2 h-5 w-5" />
                View Pricing
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
};

export default ZionAIVideoGeneratorPage;

import React from "react";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { ArrowRight, CheckCircle, Star, Shield, BarChart3, Database, Globe, Lock, TrendingUp, Zap, Users, Award, Cpu, Brain, Target, Settings, Monitor, FileText, MessageSquare, Calendar, Search, Filter, Download, Upload, Share, Bell, Eye, Heart, ThumbsUp, Rocket, Headphones, Mic, Video, Image, Music, BookOpen, Lightbulb, Puzzle, Gamepad2, ShoppingCart, CreditCard, Wallet, Banknote, Coins, Gift, Tag, Percent, Calculator, PieChart, LineChart, Activity, Layers, Grid, List, Map, Compass, Navigation, Globe2, WifiOff, Signal, Bluetooth, Usb, HardDrive, MemoryStick, Printer, Scanner, Fax, Phone, Voicemail, Headset, Speaker, Volume2, VolumeX, Play, Pause, Stop, SkipBack, SkipForward, RotateCcw, RotateCw, Shuffle, Repeat, Repeat1, Shuffle2, Maximize, Minimize, Square, Circle, Triangle, Hexagon, Octagon, Diamond, Star as StarIcon, Moon, Sun, Sunrise, Sunset, CloudRain, CloudSnow, CloudLightning, Wind, Droplets, Thermometer, Gauge, Timer, Stopwatch, Hourglass } from "lucide-react";
import SEOOptimizer from "../components/SEOOptimizer";

export default function ZionAIQuantumComputing() {
  const features = [
    "Quantum algorithm optimization",
    "Quantum machine learning models",
    "Quantum cryptography solutions",
    "Quantum simulation environments",
    "Quantum error correction",
    "Quantum annealing optimization",
    "Quantum neural networks",
    "Quantum cloud computing access"
  ];

  const benefits = [
    "Solve complex problems 1000x faster",
    "Breakthrough optimization results",
    "Future-proof your technology",
    "Access cutting-edge quantum resources"
  ];

  const pricing = [
    {
      name: "Quantum Starter",
      price: "$2,999/month",
      originalPrice: "$4,999/month",
      discount: "40% OFF",
      features: [
        "Basic quantum algorithms",
        "5 quantum simulations/month",
        "Standard quantum cloud access",
        "Email support",
        "Documentation & tutorials"
      ],
      popular: false
    },
    {
      name: "Quantum Professional",
      price: "$5,999/month",
      originalPrice: "$9,999/month",
      discount: "40% OFF",
      features: [
        "Advanced quantum algorithms",
        "Unlimited quantum simulations",
        "Premium quantum cloud access",
        "Quantum machine learning models",
        "Priority support",
        "Custom quantum solutions",
        "API access"
      ],
      popular: true
    },
    {
      name: "Quantum Enterprise",
      price: "$12,999/month",
      originalPrice: "$21,999/month",
      discount: "41% OFF",
      features: [
        "Full quantum computing suite",
        "Dedicated quantum resources",
        "Custom quantum hardware access",
        "White-label solutions",
        "Dedicated quantum engineers",
        "On-premise quantum deployment",
        "24/7 quantum support"
      ],
      popular: false
    }
  ];

  const stats = [
    { number: "1000x", label: "Faster Problem Solving", icon: <Zap className="w-6 h-6" /> },
    { number: "99.9%", label: "Quantum Accuracy", icon: <Award className="w-6 h-6" /> },
    { number: "24/7", label: "Quantum Cloud Access", icon: <Cloud className="w-6 h-6" /> },
    { number: "50+", label: "Quantum Algorithms", icon: <Brain className="w-6 h-6" /> }
  ];

  const testimonials = [
    {
      name: "Dr. Elena Rodriguez",
      company: "Quantum Research Labs",
      role: "Chief Quantum Officer",
      content: "Zion AI Quantum Computing has revolutionized our research capabilities. We've achieved breakthrough results that would have taken years with classical computing.",
      rating: 5,
      avatar: "ER"
    },
    {
      name: "Prof. James Chen",
      company: "Advanced Materials Corp",
      role: "Research Director",
      content: "The quantum optimization algorithms helped us discover new material properties 1000x faster than traditional methods. This is the future of scientific computing.",
      rating: 5,
      avatar: "JC"
    },
    {
      name: "Dr. Maria Santos",
      company: "Financial Analytics Inc",
      role: "CTO",
      content: "Quantum machine learning has transformed our risk modeling. The quantum neural networks provide insights that classical AI simply cannot achieve.",
      rating: 5,
      avatar: "MS"
    }
  ];

  return (
    <>
      <Helmet>
        <title>Zion AI Quantum Computing - Next-Generation Quantum Solutions Platform</title>
        <meta
          name="description"
          content="Revolutionary AI-powered quantum computing platform for optimization, machine learning, cryptography, and scientific research. Access cutting-edge quantum resources and algorithms."
        />
        <meta
          name="keywords"
          content="quantum computing, quantum AI, quantum algorithms, quantum machine learning, quantum optimization, quantum cryptography, quantum simulation, quantum cloud"
        />
        <link rel="canonical" href="https://ziontechgroup.com/zion-ai-quantum-computing" />
      </Helmet>
      <SEOOptimizer
        title="Zion AI Quantum Computing - Next-Generation Quantum Solutions Platform"
        description="Revolutionary AI-powered quantum computing platform for optimization, machine learning, cryptography, and scientific research. Access cutting-edge quantum resources and algorithms."
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
                <Cpu className="w-4 h-4 text-cyan-400 mr-2" />
                <span className="text-cyan-400 text-sm font-medium">Next-Generation Quantum Computing</span>
              </div>
              
              <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400">
                  Zion AI Quantum Computing
                </span>
              </h1>
              
              <p className="text-xl text-gray-300 mb-8 max-w-4xl mx-auto">
                Revolutionary AI-powered quantum computing platform for optimization, machine learning, 
                cryptography, and scientific research. Access cutting-edge quantum resources and algorithms.
              </p>
              
              <div className="flex flex-wrap justify-center gap-4 mb-12">
                <div className="flex items-center text-green-400">
                  <CheckCircle className="w-5 h-5 mr-2" />
                  <span className="text-sm">1000x faster problem solving</span>
                </div>
                <div className="flex items-center text-green-400">
                  <CheckCircle className="w-5 h-5 mr-2" />
                  <span className="text-sm">99.9% quantum accuracy</span>
                </div>
                <div className="flex items-center text-green-400">
                  <CheckCircle className="w-5 h-5 mr-2" />
                  <span className="text-sm">24/7 quantum cloud access</span>
                </div>
                <div className="flex items-center text-green-400">
                  <CheckCircle className="w-5 h-5 mr-2" />
                  <span className="text-sm">50+ quantum algorithms</span>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  to="/contact"
                  className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-cyan-500 to-purple-500 text-white font-semibold rounded-lg hover:from-cyan-400 hover:to-purple-400 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
                >
                  Start Quantum Trial
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
                <Link
                  to="/demo"
                  className="inline-flex items-center px-8 py-4 border-2 border-white/20 text-white font-semibold rounded-lg hover:bg-white/10 transition-all duration-300 backdrop-blur-sm"
                >
                  <Monitor className="mr-2 h-5 w-5" />
                  Watch Quantum Demo
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
                  <div className="text-3xl font-bold text-white mb-2">{stat.number}</div>
                  <div className="text-gray-300">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Features Section */}
        <div className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-white mb-4">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400">
                  Quantum Capabilities
                </span>
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Harness the power of quantum computing with our advanced AI-powered platform
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {features.map((feature, index) => (
                <div
                  key={index}
                  className="group bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-sm rounded-2xl p-6 border border-white/10 hover:border-white/20 transition-all duration-300 hover:transform hover:scale-105"
                >
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg flex items-center justify-center mr-4">
                      <Cpu className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="text-lg font-semibold text-white">{feature}</h3>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Benefits Section */}
        <div className="py-20 bg-black/10 backdrop-blur-sm">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-white mb-4">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400">
                  Quantum Advantages
                </span>
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Experience the revolutionary power of quantum computing
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {benefits.map((benefit, index) => (
                <div
                  key={index}
                  className="group bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-sm rounded-2xl p-6 border border-white/10 hover:border-white/20 transition-all duration-300 hover:transform hover:scale-105"
                >
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-emerald-500 rounded-lg flex items-center justify-center mr-4">
                      <Rocket className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="text-lg font-semibold text-white">{benefit}</h3>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Pricing Section */}
        <div className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-white mb-4">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400">
                  Quantum Computing Plans
                </span>
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Choose the quantum computing plan that fits your research and business needs
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {pricing.map((plan, index) => (
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
                      <span className="bg-gradient-to-r from-cyan-500 to-purple-500 text-white px-4 py-2 rounded-full text-sm font-semibold">
                        Most Popular
                      </span>
                    </div>
                  )}
                  
                  <div className="text-center mb-8">
                    <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                    <div className="flex items-center justify-center mb-4">
                      <span className="text-4xl font-bold text-white">{plan.price}</span>
                      <span className="ml-2 text-lg text-gray-400 line-through">{plan.originalPrice}</span>
                    </div>
                    <div className="text-sm text-cyan-400 font-semibold">{plan.discount}</div>
                  </div>

                  <div className="space-y-4 mb-8">
                    {plan.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-center text-gray-300">
                        <CheckCircle className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" />
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
        <div className="py-20 bg-black/10 backdrop-blur-sm">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-white mb-4">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400">
                  Quantum Success Stories
                </span>
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                See how quantum computing is transforming research and business
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {testimonials.map((testimonial, index) => (
                <div
                  key={index}
                  className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-sm rounded-2xl p-6 border border-white/10"
                >
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center text-white font-bold">
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
        <div className="py-20 bg-gradient-to-r from-cyan-500/10 via-purple-500/10 to-pink-500/10">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-4xl font-bold text-white mb-4">
              Ready to Enter the Quantum Era?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Start your quantum computing journey today and unlock unprecedented computational power. 
              No quantum knowledge required.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-cyan-500 to-purple-500 text-white font-semibold rounded-lg hover:from-cyan-400 hover:to-purple-400 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
              >
                Start Quantum Trial
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
              <Link
                to="/pricing"
                className="inline-flex items-center px-8 py-4 border-2 border-white/20 text-white font-semibold rounded-lg hover:bg-white/10 transition-all duration-300 backdrop-blur-sm"
              >
                <Cpu className="mr-2 h-5 w-5" />
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
}
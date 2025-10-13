import React from "react";
import { ArrowRight, CheckCircle, Star, Cpu, Zap, Shield, Clock, Users, BarChart3, Target, TrendingUp, Award, Globe, Smartphone, Lock, Settings, Monitor, Mail, Phone, MapPin, Calendar, Search, Filter, Download, Upload, Share, Bell, Eye, Heart, ThumbsUp, Rocket, Headphones, Mic, Video, Image, Music, BookOpen, Lightbulb, Puzzle, Gamepad2, ShoppingCart, CreditCard, Wallet, Banknote, Coins, Gift, Tag, Percent, Calculator, PieChart, LineChart, Activity, Layers, Grid, List, Map, Compass, Navigation, Globe2, WifiOff, Signal, Bluetooth, Usb, HardDrive, MemoryStick, Printer, Scanner, Fax, Voicemail, Headset, Speaker, Volume2, VolumeX, Play, Pause, Stop, SkipBack, SkipForward, RotateCcw, RotateCw, Shuffle, Repeat, Repeat1, Shuffle2, Maximize, Minimize, Square, Circle, Triangle, Hexagon, Octagon, Diamond, Star as StarIcon, Moon, Sun, Sunrise, Sunset, CloudRain, CloudSnow, CloudLightning, Wind, Droplets, Thermometer, Gauge, Timer, Stopwatch, Hourglass } from "lucide-react";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import SEOOptimizer from "../../components/SEOOptimizer";

export default function AiQuantumComputingSimulator() {
  const features = [
    {
      title: "Quantum Circuit Design",
      description: "Visual quantum circuit builder with drag-and-drop interface for complex quantum algorithms",
      icon: <Cpu className="w-6 h-6" />,
      color: "from-blue-500 to-cyan-500"
    },
    {
      title: "Quantum State Simulation",
      description: "Real-time simulation of quantum states with up to 20 qubits for research and education",
      icon: <Zap className="w-6 h-6" />,
      color: "from-green-500 to-emerald-500"
    },
    {
      title: "Quantum Algorithm Library",
      description: "Pre-built quantum algorithms including Shor's, Grover's, and VQE algorithms",
      icon: <BookOpen className="w-6 h-6" />,
      color: "from-purple-500 to-pink-500"
    },
    {
      title: "Quantum Error Correction",
      description: "Advanced error correction and noise modeling for realistic quantum computing",
      icon: <Shield className="w-6 h-6" />,
      color: "from-orange-500 to-red-500"
    },
    {
      title: "Quantum Machine Learning",
      description: "Quantum neural networks and quantum machine learning algorithm implementations",
      icon: <Brain className="w-6 h-6" />,
      color: "from-indigo-500 to-blue-500"
    },
    {
      title: "Quantum Optimization",
      description: "Quantum optimization algorithms for complex optimization problems",
      icon: <Target className="w-6 h-6" />,
      color: "from-teal-500 to-cyan-500"
    }
  ];

  const pricingPlans = [
    {
      name: "Student",
      price: "$99",
      originalPrice: "$199",
      discount: "50% OFF",
      period: "per month",
      description: "Perfect for students and researchers",
      features: [
        "Up to 10 qubits simulation",
        "Basic quantum algorithms",
        "Educational resources",
        "Community support",
        "Export to QASM",
        "Basic visualization"
      ],
      popular: false
    },
    {
      name: "Professional",
      price: "$299",
      originalPrice: "$599",
      discount: "50% OFF",
      period: "per month",
      description: "Ideal for quantum researchers",
      features: [
        "Up to 20 qubits simulation",
        "Advanced quantum algorithms",
        "Quantum error correction",
        "API access",
        "Priority support",
        "Advanced visualization",
        "Custom gate creation"
      ],
      popular: true
    },
    {
      name: "Enterprise",
      price: "$599",
      originalPrice: "$1,199",
      discount: "50% OFF",
      period: "per month",
      description: "For quantum computing companies",
      features: [
        "Unlimited qubits simulation",
        "Full quantum algorithm suite",
        "Custom quantum hardware integration",
        "Dedicated support",
        "White-label options",
        "Advanced analytics",
        "Team collaboration"
      ],
      popular: false
    }
  ];

  const benefits = [
    {
      title: "10,000x Faster Simulation",
      description: "Simulate quantum algorithms 10,000 times faster than classical computers",
      icon: <Zap className="w-8 h-8" />,
      color: "from-blue-500 to-cyan-500"
    },
    {
      title: "Real-time Visualization",
      description: "Interactive quantum state visualization with 3D Bloch sphere representation",
      icon: <Eye className="w-8 h-8" />,
      color: "from-green-500 to-emerald-500"
    },
    {
      title: "Educational Platform",
      description: "Comprehensive learning resources for quantum computing education",
      icon: <BookOpen className="w-8 h-8" />,
      color: "from-purple-500 to-pink-500"
    },
    {
      title: "Research Ready",
      description: "Advanced tools for quantum computing research and development",
      icon: <Award className="w-8 h-8" />,
      color: "from-orange-500 to-red-500"
    }
  ];

  const testimonials = [
    {
      name: "Dr. Sarah Chen",
      company: "Quantum Research Institute",
      role: "Quantum Physicist",
      content: "This quantum simulator has revolutionized our research. We can test complex algorithms before running them on actual quantum hardware.",
      rating: 5,
      avatar: "SC"
    },
    {
      name: "Prof. Michael Rodriguez",
      company: "MIT Quantum Lab",
      role: "Professor",
      content: "The educational features are outstanding. My students can visualize quantum concepts that were previously abstract and difficult to understand.",
      rating: 5,
      avatar: "MR"
    },
    {
      name: "Dr. Emily Watson",
      company: "IBM Quantum",
      role: "Quantum Engineer",
      content: "The simulation accuracy is remarkable. It's become an essential tool in our quantum algorithm development process.",
      rating: 5,
      avatar: "EW"
    }
  ];

  const stats = [
    { number: "5,000+", label: "Quantum Researchers", icon: <Users className="w-6 h-6" /> },
    { number: "10,000x", label: "Faster Simulation", icon: <Zap className="w-6 h-6" /> },
    { number: "99.9%", label: "Simulation Accuracy", icon: <Award className="w-6 h-6" /> },
    { number: "24/7", label: "Cloud Access", icon: <Globe className="w-6 h-6" /> }
  ];

  return (
    <>
      <Helmet>
        <title>AI Quantum Computing Simulator - Advanced Quantum Simulation Platform | Zion Tech Group</title>
        <meta
          name="description"
          content="Revolutionary AI-powered quantum computing simulator with real-time visualization, quantum algorithm library, and educational resources. Simulate up to 20 qubits with 10,000x faster performance."
        />
        <meta
          name="keywords"
          content="quantum computing simulator, quantum algorithms, quantum machine learning, quantum optimization, quantum education, quantum research, quantum simulation"
        />
      </Helmet>
      <SEOOptimizer
        title="AI Quantum Computing Simulator - Advanced Quantum Simulation Platform | Zion Tech Group"
        description="Revolutionary AI-powered quantum computing simulator with real-time visualization, quantum algorithm library, and educational resources. Simulate up to 20 qubits with 10,000x faster performance."
      />

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 relative overflow-hidden">
        {/* Animated Background */}
        <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 via-purple-500/10 to-pink-500/10 animate-pulse"></div>
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_50%_50%,rgba(120,119,198,0.3),transparent_50%)]"></div>
        
        {/* Hero Section */}
        <section className="pt-20 pb-16 px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-7xl mx-auto text-center">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-cyan-500/20 to-purple-500/20 border border-cyan-500/30 mb-6">
              <Cpu className="w-4 h-4 text-cyan-400 mr-2" />
              <span className="text-cyan-400 text-sm font-medium">Next-Generation Quantum Simulation</span>
            </div>
            
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400">
                AI Quantum Computing Simulator
              </span>
            </h1>
            
            <p className="text-xl text-gray-300 mb-8 max-w-4xl mx-auto leading-relaxed">
              Experience the future of quantum computing with our advanced AI-powered simulator. 
              Design quantum circuits, simulate quantum algorithms, and explore quantum machine learning 
              with 10,000x faster performance than classical computers.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
              <Link
                to="/contact"
                className="group bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 flex items-center justify-center shadow-lg hover:shadow-cyan-500/25 hover:scale-105"
              >
                Start Free Trial
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                to="/demo"
                className="border border-cyan-400 text-cyan-400 px-8 py-4 rounded-lg font-semibold hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300 hover:scale-105"
              >
                Watch Demo
              </Link>
            </div>
            
            {/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
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
        </section>

        {/* Features Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Advanced Quantum Simulation Features
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Everything you need to explore the quantum computing frontier
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
                  <h3 className="text-xl font-semibold text-white mb-3 text-center group-hover:text-cyan-400 transition-colors">
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

        {/* Benefits Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-slate-800/50 to-purple-800/50">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Why Choose Our Quantum Simulator?
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Experience the cutting edge of quantum computing simulation
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {benefits.map((benefit, index) => (
                <div
                  key={index}
                  className="text-center group"
                >
                  <div
                    className={`w-20 h-20 mx-auto mb-6 rounded-full bg-gradient-to-r ${benefit.color} flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}
                  >
                    {benefit.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-4 group-hover:text-cyan-400 transition-colors">
                    {benefit.title}
                  </h3>
                  <p className="text-gray-300 leading-relaxed">
                    {benefit.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Pricing Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Quantum Computing Access Plans
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Choose the plan that fits your quantum computing needs. All plans include 14-day free trial.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {pricingPlans.map((plan, index) => (
                <div
                  key={index}
                  className={`relative bg-white/10 backdrop-blur-sm rounded-2xl p-8 border transition-all duration-300 hover:scale-105 ${
                    plan.popular
                      ? 'border-cyan-500/50 shadow-2xl shadow-cyan-500/20'
                      : 'border-white/20 hover:border-white/40'
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
                    <p className="text-gray-300 mb-6">{plan.description}</p>
                    <div className="flex items-center justify-center mb-4">
                      <span className="text-4xl font-bold text-white">{plan.price}</span>
                      <span className="text-gray-400 ml-2">{plan.period}</span>
                    </div>
                    <div className="flex items-center justify-center">
                      <span className="text-lg text-gray-400 line-through mr-2">{plan.originalPrice}</span>
                      <span className="bg-red-500 text-white px-2 py-1 rounded text-sm font-semibold">
                        {plan.discount}
                      </span>
                    </div>
                  </div>
                  
                  <ul className="space-y-4 mb-8">
                    {plan.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-gray-300">
                        <CheckCircle className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                  
                  <Link
                    to="/contact"
                    className={`w-full block text-center py-3 px-6 rounded-lg font-semibold transition-all duration-300 ${
                      plan.popular
                        ? 'bg-gradient-to-r from-cyan-500 to-purple-500 text-white hover:from-cyan-600 hover:to-purple-600'
                        : 'border border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-slate-900'
                    }`}
                  >
                    Start Free Trial
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
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Trusted by Quantum Computing Experts
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                See what quantum researchers say about our simulation platform
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {testimonials.map((testimonial, index) => (
                <div
                  key={index}
                  className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105"
                >
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-full flex items-center justify-center text-white font-bold mr-4">
                      {testimonial.avatar}
                    </div>
                    <div>
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
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Ready to Explore Quantum Computing?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Join thousands of quantum researchers and students already using our simulator. 
              Start your free 14-day trial today.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
              <Link
                to="/contact"
                className="group bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 flex items-center justify-center shadow-lg hover:shadow-cyan-500/25 hover:scale-105"
              >
                Start Free Trial
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                to="/demo"
                className="border border-cyan-400 text-cyan-400 px-8 py-4 rounded-lg font-semibold hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300 hover:scale-105"
              >
                Watch Demo
              </Link>
            </div>
            
            <div className="text-sm text-gray-400">
              <p>Questions? Contact us at <a href="mailto:kleber@ziontechgroup.com" className="text-cyan-400 hover:text-cyan-300">kleber@ziontechgroup.com</a> or call <a href="tel:+13024640950" className="text-cyan-400 hover:text-cyan-300">+1 302 464 0950</a></p>
              <p className="mt-2">Address: 364 E Main St STE 1008, Middletown DE 19709</p>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
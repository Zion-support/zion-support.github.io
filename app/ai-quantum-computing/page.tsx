import React from "react";
import { ArrowRight, CheckCircle, Star, Cpu, Zap, Shield, BarChart3, Cloud, Code, Database, Mail, Users, Clock, DollarSign, Globe, Lock, Settings, Target, TrendingUp, Monitor, FileText, MessageSquare, Calendar, Search, Filter, Download, Upload, Share, Bell, Eye, Heart, ThumbsUp, Award, Rocket, Headphones, Mic, Video, Image, Music, BookOpen, Lightbulb, Puzzle, Gamepad2, ShoppingCart, CreditCard, Wallet, Banknote, Coins, Gift, Tag, Percent, Calculator, PieChart, LineChart, Activity, Layers, Grid, List, Map, Compass, Navigation, Globe2, WifiOff, Signal, Bluetooth, Usb, HardDrive, MemoryStick, Printer, Scanner, Fax, Phone, Voicemail, Headset, Speaker, Volume2, VolumeX, Play, Pause, Stop, SkipBack, SkipForward, RotateCcw, RotateCw, Shuffle, Repeat, Repeat1, Shuffle2, Maximize, Minimize, Square, Circle, Triangle, Hexagon, Octagon, Diamond, Star as StarIcon, Moon, Sun, Sunrise, Sunset, CloudRain, CloudSnow, CloudLightning, Wind, Droplets, Thermometer, Gauge, Timer, Stopwatch, Hourglass, Sparkles } from "lucide-react";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import SEOOptimizer from "../../components/SEOOptimizer";

export default function AIQuantumComputing() {
  const services = [
    {
      id: "quantum-optimization",
      name: "Quantum Optimization Solutions",
      description: "Leverage quantum algorithms to solve complex optimization problems in logistics, finance, and resource allocation",
      price: "From $5,000/month",
      icon: <Target className="w-8 h-8" />,
      color: "from-blue-500 to-cyan-500",
      features: [
        "Portfolio optimization",
        "Supply chain optimization",
        "Route planning and logistics",
        "Resource allocation",
        "Scheduling optimization",
        "Risk management",
        "Real-time optimization",
        "Custom algorithm development"
      ],
      benefits: [
        "Solve problems 1000x faster than classical computers",
        "Reduce operational costs by 30-50%",
        "Improve decision accuracy",
        "Handle complex multi-variable problems"
      ],
      category: "Optimization",
      rating: 4.9,
      reviews: 156,
      link: "/ai-quantum-optimization",
      featured: true
    },
    {
      id: "quantum-machine-learning",
      name: "Quantum Machine Learning",
      description: "Advanced quantum machine learning algorithms for pattern recognition, classification, and predictive modeling",
      price: "From $7,500/month",
      icon: <Brain className="w-8 h-8" />,
      color: "from-purple-500 to-pink-500",
      features: [
        "Quantum neural networks",
        "Quantum support vector machines",
        "Quantum clustering algorithms",
        "Quantum feature selection",
        "Quantum deep learning",
        "Quantum reinforcement learning",
        "Hybrid quantum-classical models",
        "Quantum data preprocessing"
      ],
      benefits: [
        "Exponential speedup for certain ML tasks",
        "Better pattern recognition capabilities",
        "Improved model accuracy",
        "Handle high-dimensional data efficiently"
      ],
      category: "Machine Learning",
      rating: 4.8,
      reviews: 89,
      link: "/ai-quantum-ml",
      featured: true
    },
    {
      id: "quantum-cryptography",
      name: "Quantum Cryptography & Security",
      description: "Ultra-secure quantum encryption and communication systems for enterprise-grade security",
      price: "From $10,000/month",
      icon: <Shield className="w-8 h-8" />,
      color: "from-red-500 to-orange-500",
      features: [
        "Quantum key distribution (QKD)",
        "Quantum random number generation",
        "Post-quantum cryptography",
        "Quantum secure communication",
        "Quantum digital signatures",
        "Quantum authentication",
        "Quantum network security",
        "Compliance and certification"
      ],
      benefits: [
        "Unbreakable encryption with quantum mechanics",
        "Future-proof security against quantum attacks",
        "Ultra-secure data transmission",
        "Meet highest security standards"
      ],
      category: "Security",
      rating: 4.9,
      reviews: 67,
      link: "/ai-quantum-crypto",
      featured: true
    },
    {
      id: "quantum-simulation",
      name: "Quantum Simulation Services",
      description: "Simulate complex quantum systems for drug discovery, materials science, and chemical research",
      price: "From $6,000/month",
      icon: <Activity className="w-8 h-8" />,
      color: "from-green-500 to-emerald-500",
      features: [
        "Molecular simulation",
        "Chemical reaction modeling",
        "Material property prediction",
        "Drug discovery simulation",
        "Quantum chemistry calculations",
        "Protein folding simulation",
        "Catalyst design",
        "Custom simulation development"
      ],
      benefits: [
        "Accelerate drug discovery by 10x",
        "Reduce R&D costs significantly",
        "Enable breakthrough discoveries",
        "Simulate previously impossible systems"
      ],
      category: "Simulation",
      rating: 4.7,
      reviews: 134,
      link: "/ai-quantum-simulation",
      featured: false
    },
    {
      id: "quantum-finance",
      name: "Quantum Financial Modeling",
      description: "Advanced quantum algorithms for financial risk analysis, portfolio optimization, and trading strategies",
      price: "From $8,500/month",
      icon: <TrendingUp className="w-8 h-8" />,
      color: "from-amber-500 to-yellow-500",
      features: [
        "Quantum Monte Carlo methods",
        "Portfolio optimization",
        "Risk assessment and modeling",
        "Algorithmic trading strategies",
        "Fraud detection",
        "Credit scoring",
        "Market prediction",
        "Regulatory compliance"
      ],
      benefits: [
        "Superior risk modeling accuracy",
        "Faster portfolio optimization",
        "Better fraud detection",
        "Competitive advantage in trading"
      ],
      category: "Finance",
      rating: 4.8,
      reviews: 98,
      link: "/ai-quantum-finance",
      featured: false
    },
    {
      id: "quantum-ai-platform",
      name: "Quantum AI Development Platform",
      description: "Complete platform for developing and deploying quantum AI applications with hybrid quantum-classical workflows",
      price: "From $12,000/month",
      icon: <Code className="w-8 h-8" />,
      color: "from-indigo-500 to-blue-500",
      features: [
        "Quantum development environment",
        "Hybrid quantum-classical workflows",
        "Quantum algorithm libraries",
        "Cloud quantum computing access",
        "API and SDK integration",
        "Performance monitoring",
        "Scalable deployment",
        "24/7 technical support"
      ],
      benefits: [
        "Access to cutting-edge quantum hardware",
        "Simplified quantum development",
        "Seamless integration with existing systems",
        "Expert quantum computing support"
      ],
      category: "Platform",
      rating: 4.9,
      reviews: 45,
      link: "/ai-quantum-platform",
      featured: true
    }
  ];

  const capabilities = [
    {
      title: "Quantum Supremacy",
      description: "Achieve computational advantages that are impossible with classical computers for specific problem classes",
      icon: <Zap className="w-8 h-8" />,
      color: "from-blue-500 to-cyan-500"
    },
    {
      title: "Quantum Entanglement",
      description: "Leverage quantum entanglement for ultra-fast parallel processing and secure communication",
      icon: <Layers className="w-8 h-8" />,
      color: "from-purple-500 to-pink-500"
    },
    {
      title: "Quantum Interference",
      description: "Use quantum interference patterns to enhance computational efficiency and accuracy",
      icon: <Activity className="w-8 h-8" />,
      color: "from-green-500 to-emerald-500"
    },
    {
      title: "Quantum Superposition",
      description: "Process multiple states simultaneously for exponential computational speedup",
      icon: <Grid className="w-8 h-8" />,
      color: "from-orange-500 to-red-500"
    },
    {
      title: "Quantum Tunneling",
      description: "Enable quantum algorithms to explore solution spaces more efficiently",
      icon: <Navigation className="w-8 h-8" />,
      color: "from-indigo-500 to-blue-500"
    },
    {
      title: "Quantum Coherence",
      description: "Maintain quantum states for extended periods to enable complex computations",
      icon: <Clock className="w-8 h-8" />,
      color: "from-teal-500 to-cyan-500"
    }
  ];

  const applications = [
    {
      title: "Drug Discovery",
      description: "Accelerate pharmaceutical research with quantum molecular simulation and drug design",
      icon: <Heart className="w-8 h-8" />,
      color: "from-rose-500 to-pink-500"
    },
    {
      title: "Financial Services",
      description: "Revolutionize risk modeling, portfolio optimization, and algorithmic trading",
      icon: <TrendingUp className="w-8 h-8" />,
      color: "from-green-500 to-emerald-500"
    },
    {
      title: "Logistics & Supply Chain",
      description: "Optimize complex routing, inventory management, and resource allocation",
      icon: <Globe className="w-8 h-8" />,
      color: "from-blue-500 to-cyan-500"
    },
    {
      title: "Cybersecurity",
      description: "Implement quantum-resistant encryption and ultra-secure communication",
      icon: <Shield className="w-8 h-8" />,
      color: "from-red-500 to-orange-500"
    },
    {
      title: "Materials Science",
      description: "Design new materials with quantum simulation for energy, electronics, and manufacturing",
      icon: <Layers className="w-8 h-8" />,
      color: "from-purple-500 to-indigo-500"
    },
    {
      title: "Climate Modeling",
      description: "Model complex climate systems and environmental processes with quantum algorithms",
      icon: <CloudRain className="w-8 h-8" />,
      color: "from-teal-500 to-cyan-500"
    }
  ];

  const testimonials = [
    {
      name: "Dr. Sarah Chen",
      company: "Quantum Research Labs",
      role: "Chief Quantum Officer",
      content: "Zion's quantum computing solutions have revolutionized our research capabilities. We've achieved breakthroughs that would have taken decades with classical computing.",
      rating: 5,
      avatar: "SC"
    },
    {
      name: "Michael Rodriguez",
      company: "Global Finance Corp",
      role: "Head of Quantitative Research",
      content: "The quantum optimization algorithms have transformed our portfolio management. We've seen 40% improvement in risk-adjusted returns and 60% faster optimization.",
      rating: 5,
      avatar: "MR"
    },
    {
      name: "Dr. Emily Watson",
      company: "Pharmaceutical Innovations",
      role: "Director of Drug Discovery",
      content: "Quantum simulation has accelerated our drug discovery process by 10x. We've identified promising compounds that classical methods missed entirely.",
      rating: 5,
      avatar: "EW"
    }
  ];

  const stats = [
    { number: "50+", label: "Quantum Algorithms", icon: <Cpu className="w-6 h-6" /> },
    { number: "1000x", label: "Speed Improvement", icon: <Zap className="w-6 h-6" /> },
    { number: "99.9%", label: "Accuracy Rate", icon: <Award className="w-6 h-6" /> },
    { number: "24/7", label: "Quantum Access", icon: <Monitor className="w-6 h-6" /> }
  ];

  return (
    <>
      <Helmet>
        <title>AI Quantum Computing Solutions - Advanced Quantum AI Services | Zion Tech Group</title>
        <meta
          name="description"
          content="Revolutionary quantum computing solutions powered by AI. Quantum optimization, machine learning, cryptography, and simulation services. Transform your business with quantum advantage."
        />
        <meta
          name="keywords"
          content="quantum computing, quantum AI, quantum optimization, quantum machine learning, quantum cryptography, quantum simulation, quantum algorithms"
        />
        <link rel="canonical" href="https://ziontechgroup.com/ai-quantum-computing" />
      </Helmet>
      <SEOOptimizer
        title="AI Quantum Computing Solutions - Advanced Quantum AI Services"
        description="Revolutionary quantum computing solutions powered by AI. Quantum optimization, machine learning, cryptography, and simulation services. Transform your business with quantum advantage."
      />

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 relative overflow-hidden">
        {/* Animated Background */}
        <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 via-purple-500/10 to-pink-500/10 animate-pulse"></div>
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_50%_50%,rgba(120,119,198,0.3),transparent_50%)]"></div>
        
        {/* Hero Section */}
        <section className="pt-20 pb-16 px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-7xl mx-auto text-center">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-cyan-500/20 to-purple-500/20 border border-cyan-500/30 mb-6">
              <Sparkles className="w-4 h-4 text-cyan-400 mr-2" />
              <span className="text-cyan-400 text-sm font-medium">Next-Generation Quantum AI</span>
            </div>
            
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400">
                AI Quantum Computing
              </span>
            </h1>
            
            <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto leading-relaxed">
              Harness the power of quantum computing combined with artificial intelligence to solve 
              the world's most complex problems. Experience exponential speedup and breakthrough capabilities.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
              <Link
                to="/contact"
                className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 flex items-center justify-center group shadow-lg hover:shadow-cyan-500/25 hover:scale-105"
              >
                Get Quantum Consultation
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                to="/demo"
                className="border border-cyan-400 text-cyan-400 px-8 py-4 rounded-lg font-semibold hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300 group hover:scale-105"
              >
                See Quantum in Action
                <Monitor className="w-5 h-5 ml-2 group-hover:scale-110 transition-transform" />
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
        </section>

        {/* Quantum Capabilities */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
                Quantum Computing Capabilities
              </h2>
              <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
                Leverage the fundamental principles of quantum mechanics to achieve computational advantages 
                that are impossible with classical computers.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {capabilities.map((capability, index) => (
                <div
                  key={index}
                  className="group bg-white/10 backdrop-blur-sm rounded-xl p-8 border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-cyan-500/10 relative overflow-hidden"
                >
                  <div
                    className={`w-16 h-16 rounded-lg bg-gradient-to-r ${capability.color} flex items-center justify-center mb-6 mx-auto group-hover:scale-110 transition-transform duration-300 shadow-lg`}
                  >
                    {capability.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-4 text-center group-hover:text-cyan-300 transition-colors">
                    {capability.title}
                  </h3>
                  <p className="text-gray-300 text-center leading-relaxed">
                    {capability.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-slate-800/50 to-purple-800/50">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Quantum AI Services
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Comprehensive quantum computing solutions powered by advanced AI algorithms 
                for optimization, machine learning, security, and simulation.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {services.map((service, index) => (
                <div
                  key={service.id}
                  className="group relative bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-sm rounded-2xl p-8 border border-white/10 hover:border-white/20 transition-all duration-300 hover:transform hover:scale-105 hover:shadow-2xl"
                >
                  {service.featured && (
                    <div className="absolute -top-3 -right-3 bg-gradient-to-r from-cyan-500 to-purple-500 text-white text-xs font-bold px-3 py-1 rounded-full">
                      Featured
                    </div>
                  )}
                  
                  <div className="flex items-center justify-between mb-4">
                    <div className={`p-3 rounded-xl bg-gradient-to-r ${service.color}`}>
                      <div className="text-white">{service.icon}</div>
                    </div>
                    <div className="flex items-center text-yellow-400">
                      <Star className="w-4 h-4 fill-current" />
                      <span className="ml-1 text-sm font-medium">{service.rating}</span>
                      <span className="ml-1 text-xs text-gray-400">({service.reviews})</span>
                    </div>
                  </div>

                  <h3 className="text-xl font-bold text-white mb-2">{service.name}</h3>
                  <p className="text-gray-300 mb-4 text-sm">{service.description}</p>

                  <div className="flex items-center mb-4">
                    <span className="text-2xl font-bold text-white">{service.price}</span>
                  </div>

                  <div className="space-y-2 mb-6">
                    {service.features.slice(0, 4).map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-center text-sm text-gray-300">
                        <CheckCircle className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
                        <span>{feature}</span>
                      </div>
                    ))}
                    {service.features.length > 4 && (
                      <div className="text-sm text-gray-400">
                        +{service.features.length - 4} more features
                      </div>
                    )}
                  </div>

                  <div className="space-y-3">
                    <Link
                      to={service.link}
                      className="w-full inline-flex items-center justify-center px-4 py-3 bg-gradient-to-r from-cyan-500 to-purple-500 text-white font-semibold rounded-lg hover:from-cyan-400 hover:to-purple-400 transition-all duration-300 transform hover:scale-105"
                    >
                      Learn More
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                    <Link
                      to="/contact"
                      className="w-full inline-flex items-center justify-center px-4 py-2 border border-white/20 text-white font-medium rounded-lg hover:bg-white/10 transition-all duration-300"
                    >
                      Get Quantum Demo
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Applications Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Quantum Computing Applications
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Discover how quantum computing is transforming industries and solving 
                previously impossible problems across various sectors.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {applications.map((application, index) => (
                <div
                  key={index}
                  className="group bg-white/10 backdrop-blur-sm rounded-xl p-8 border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-cyan-500/10 relative overflow-hidden"
                >
                  <div
                    className={`w-16 h-16 rounded-lg bg-gradient-to-r ${application.color} flex items-center justify-center mb-6 mx-auto group-hover:scale-110 transition-transform duration-300 shadow-lg`}
                  >
                    {application.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-4 text-center group-hover:text-cyan-300 transition-colors">
                    {application.title}
                  </h3>
                  <p className="text-gray-300 text-center leading-relaxed">
                    {application.description}
                  </p>
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
                Quantum Computing Success Stories
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                See how leading organizations are leveraging our quantum computing solutions 
                to achieve breakthrough results and competitive advantages.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {testimonials.map((testimonial, index) => (
                <div
                  key={index}
                  className="group bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-cyan-500/10 relative overflow-hidden"
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
              Ready to Harness Quantum Computing?
            </h2>
            <p className="text-xl text-gray-300 mb-8 leading-relaxed">
              Join the quantum revolution and gain a competitive advantage with our 
              cutting-edge quantum computing solutions. Contact our quantum experts today.
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
                  <Smartphone className="w-6 h-6 text-white" />
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
                Get Quantum Consultation
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                to="/ai-services"
                className="border border-cyan-400 text-cyan-400 px-8 py-4 rounded-lg font-semibold hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300 group hover:scale-105"
              >
                View All AI Services
                <Sparkles className="w-5 h-5 ml-2 group-hover:rotate-12 transition-transform" />
              </Link>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
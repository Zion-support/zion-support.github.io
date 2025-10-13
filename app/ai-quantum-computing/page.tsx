import React from "react";
import { Helmet } from "react-helmet-async";
import { ArrowRight, CheckCircle, Star, Cpu, Zap, Shield, BarChart3, Brain, Globe, Lock, Users, Award, Clock, DollarSign, Target, Settings, Monitor, FileText, MessageSquare, Calendar, Search, Filter, Download, Upload, Share, Bell, Eye, Heart, ThumbsUp, Rocket, Headphones, Mic, Video, Image, Music, BookOpen, Lightbulb, Puzzle, Gamepad2, ShoppingCart, CreditCard, Wallet, Banknote, Coins, Gift, Tag, Percent, Calculator, PieChart, LineChart, Activity, Layers, Grid, List, Map, Compass, Navigation, Globe2, WifiOff, Signal, Bluetooth, Usb, HardDrive, MemoryStick, Printer, Scanner, Fax, Phone, Voicemail, Headset, Speaker, Volume2, VolumeX, Play, Pause, Stop, SkipBack, SkipForward, RotateCcw, RotateCw, Shuffle, Repeat, Repeat1, Shuffle2, Maximize, Minimize, Square, Circle, Triangle, Hexagon, Octagon, Diamond, Star as StarIcon, Moon, Sun, Sunrise, Sunset, CloudRain, CloudSnow, CloudLightning, Wind, Droplets, Thermometer, Gauge, Timer, Stopwatch, Hourglass } from "lucide-react";
import { Link } from "react-router-dom";
import SEOOptimizer from "../../components/SEOOptimizer";

export default function AIQuantumComputing() {
  const features = [
    {
      title: "Quantum Machine Learning",
      description: "Advanced quantum algorithms for machine learning with exponential speedup over classical methods",
      icon: <Brain className="w-8 h-8" />,
      color: "from-blue-500 to-cyan-500",
      benefits: [
        "1000x faster training for complex models",
        "Exponential speedup for optimization problems",
        "Quantum neural networks",
        "Quantum feature mapping"
      ]
    },
    {
      title: "Quantum Cryptography",
      description: "Unbreakable encryption using quantum key distribution and quantum random number generation",
      icon: <Shield className="w-8 h-8" />,
      color: "from-green-500 to-emerald-500",
      benefits: [
        "Unbreakable encryption protocols",
        "Quantum key distribution",
        "Perfect forward secrecy",
        "Quantum random number generation"
      ]
    },
    {
      title: "Quantum Optimization",
      description: "Solve complex optimization problems with quantum annealing and variational algorithms",
      icon: <Target className="w-8 h-8" />,
      color: "from-purple-500 to-pink-500",
      benefits: [
        "Portfolio optimization",
        "Supply chain optimization",
        "Route planning",
        "Resource allocation"
      ]
    },
    {
      title: "Quantum Simulation",
      description: "Simulate quantum systems for drug discovery, materials science, and financial modeling",
      icon: <Cpu className="w-8 h-8" />,
      color: "from-orange-500 to-red-500",
      benefits: [
        "Molecular simulation",
        "Financial risk modeling",
        "Climate modeling",
        "Chemical reaction prediction"
      ]
    },
    {
      title: "Quantum AI Analytics",
      description: "Quantum-enhanced data analysis with exponential computational advantages",
      icon: <BarChart3 className="w-8 h-8" />,
      color: "from-indigo-500 to-blue-500",
      benefits: [
        "Quantum data processing",
        "Pattern recognition",
        "Anomaly detection",
        "Predictive analytics"
      ]
    },
    {
      title: "Quantum Cloud Platform",
      description: "Access quantum computing resources through our secure cloud platform",
      icon: <Globe className="w-8 h-8" />,
      color: "from-teal-500 to-cyan-500",
      benefits: [
        "On-demand quantum access",
        "Multiple quantum hardware",
        "Quantum software development",
        "24/7 quantum monitoring"
      ]
    }
  ];

  const pricingPlans = [
    {
      name: "Quantum Starter",
      price: "$2,500",
      period: "/month",
      description: "Perfect for small teams exploring quantum computing",
      features: [
        "10 hours quantum compute time",
        "Basic quantum algorithms",
        "Standard support",
        "Quantum simulation tools",
        "API access",
        "Documentation"
      ],
      popular: false
    },
    {
      name: "Quantum Professional",
      price: "$7,500",
      period: "/month",
      description: "Ideal for research teams and enterprises",
      features: [
        "50 hours quantum compute time",
        "Advanced quantum algorithms",
        "Priority support",
        "Custom quantum circuits",
        "Quantum machine learning",
        "Dedicated account manager",
        "Training sessions",
        "White-label options"
      ],
      popular: true
    },
    {
      name: "Quantum Enterprise",
      price: "$25,000",
      period: "/month",
      description: "Complete quantum computing solution for large organizations",
      features: [
        "Unlimited quantum compute time",
        "Custom quantum hardware access",
        "24/7 dedicated support",
        "Quantum consulting services",
        "Custom algorithm development",
        "On-premise deployment",
        "SLA guarantees",
        "Quantum security audits"
      ],
      popular: false
    }
  ];

  const useCases = [
    {
      title: "Financial Services",
      description: "Quantum portfolio optimization, risk analysis, and fraud detection",
      icon: <Banknote className="w-6 h-6" />,
      examples: [
        "Portfolio optimization with 1000+ assets",
        "Real-time risk assessment",
        "Quantum Monte Carlo simulations",
        "High-frequency trading algorithms"
      ]
    },
    {
      title: "Healthcare & Life Sciences",
      description: "Drug discovery, molecular simulation, and personalized medicine",
      icon: <Heart className="w-6 h-6" />,
      examples: [
        "Protein folding simulation",
        "Drug interaction modeling",
        "Genetic analysis optimization",
        "Medical imaging enhancement"
      ]
    },
    {
      title: "Manufacturing & Logistics",
      description: "Supply chain optimization, quality control, and predictive maintenance",
      icon: <Settings className="w-6 h-6" />,
      examples: [
        "Supply chain optimization",
        "Quality control algorithms",
        "Predictive maintenance",
        "Resource allocation"
      ]
    },
    {
      title: "Energy & Environment",
      description: "Climate modeling, energy optimization, and carbon capture",
      icon: <Wind className="w-6 h-6" />,
      examples: [
        "Climate change modeling",
        "Energy grid optimization",
        "Carbon capture simulation",
        "Renewable energy planning"
      ]
    }
  ];

  const stats = [
    { number: "1000x", label: "Faster Processing", icon: <Zap className="w-6 h-6" /> },
    { number: "99.9%", label: "Accuracy Rate", icon: <Award className="w-6 h-6" /> },
    { number: "24/7", label: "Quantum Access", icon: <Clock className="w-6 h-6" /> },
    { number: "50+", label: "Quantum Algorithms", icon: <Cpu className="w-6 h-6" /> }
  ];

  const testimonials = [
    {
      name: "Dr. Sarah Chen",
      company: "Quantum Research Labs",
      role: "Chief Quantum Officer",
      content: "Zion's quantum computing platform has revolutionized our research. We've achieved breakthroughs in molecular simulation that would have taken years with classical computers.",
      rating: 5,
      avatar: "SC"
    },
    {
      name: "Michael Rodriguez",
      company: "Global Finance Corp",
      role: "Head of Quantitative Research",
      content: "The quantum optimization algorithms have transformed our portfolio management. We've seen 40% improvement in risk-adjusted returns using quantum-enhanced strategies.",
      rating: 5,
      avatar: "MR"
    },
    {
      name: "Dr. Emily Watson",
      company: "PharmaTech Solutions",
      role: "Research Director",
      content: "Quantum simulation has accelerated our drug discovery process by 10x. We've identified promising compounds in months instead of years.",
      rating: 5,
      avatar: "EW"
    }
  ];

  return (
    <>
      <Helmet>
        <title>AI Quantum Computing - Zion Tech Group | Next-Generation Quantum AI Solutions</title>
        <meta
          name="description"
          content="Revolutionary AI quantum computing solutions with quantum machine learning, cryptography, optimization, and simulation. Transform your business with quantum-enhanced AI capabilities."
        />
        <meta
          name="keywords"
          content="quantum computing, quantum AI, quantum machine learning, quantum cryptography, quantum optimization, quantum simulation, quantum algorithms, quantum cloud"
        />
        <link rel="canonical" href="https://ziontechgroup.com/ai-quantum-computing" />
      </Helmet>
      <SEOOptimizer
        title="AI Quantum Computing - Zion Tech Group | Next-Generation Quantum AI Solutions"
        description="Revolutionary AI quantum computing solutions with quantum machine learning, cryptography, optimization, and simulation. Transform your business with quantum-enhanced AI capabilities."
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
                  AI Quantum Computing
                </span>
              </h1>
              <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
                Harness the power of quantum computing combined with artificial intelligence to solve 
                complex problems with exponential speedup and unprecedented accuracy.
              </p>
              
              <div className="flex flex-wrap justify-center gap-4 mb-12">
                <div className="flex items-center text-green-400">
                  <CheckCircle className="w-5 h-5 mr-2" />
                  <span className="text-sm">1000x faster processing</span>
                </div>
                <div className="flex items-center text-green-400">
                  <CheckCircle className="w-5 h-5 mr-2" />
                  <span className="text-sm">Quantum machine learning</span>
                </div>
                <div className="flex items-center text-green-400">
                  <CheckCircle className="w-5 h-5 mr-2" />
                  <span className="text-sm">Unbreakable encryption</span>
                </div>
                <div className="flex items-center text-green-400">
                  <CheckCircle className="w-5 h-5 mr-2" />
                  <span className="text-sm">24/7 quantum access</span>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  to="/contact"
                  className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-cyan-500 to-purple-500 text-white font-semibold rounded-lg hover:from-cyan-400 hover:to-purple-400 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
                >
                  Get Quantum Consultation
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
                <Link
                  to="/demo"
                  className="inline-flex items-center px-8 py-4 border-2 border-white/20 text-white font-semibold rounded-lg hover:bg-white/10 transition-all duration-300 backdrop-blur-sm"
                >
                  <Monitor className="mr-2 h-5 w-5" />
                  See Quantum in Action
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
        <div className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-white mb-4">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400">
                  Quantum AI Capabilities
                </span>
              </h2>
              <p className="text-xl text-gray-300 max-w-2xl mx-auto">
                Revolutionary quantum computing technologies powered by artificial intelligence
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {features.map((feature, index) => (
                <div
                  key={index}
                  className="group bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-sm rounded-2xl p-8 border border-white/10 hover:border-white/20 transition-all duration-300 hover:transform hover:scale-105"
                >
                  <div className={`inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r ${feature.color} rounded-xl mb-6`}>
                    <div className="text-white">{feature.icon}</div>
                  </div>
                  <h3 className="text-xl font-bold text-white mb-4">{feature.title}</h3>
                  <p className="text-gray-300 mb-6">{feature.description}</p>
                  
                  <div className="space-y-2">
                    {feature.benefits.map((benefit, benefitIndex) => (
                      <div key={benefitIndex} className="flex items-center text-sm text-gray-300">
                        <CheckCircle className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
                        <span>{benefit}</span>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Use Cases Section */}
        <div className="py-16 bg-black/10 backdrop-blur-sm">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-white mb-4">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400">
                  Quantum AI Use Cases
                </span>
              </h2>
              <p className="text-xl text-gray-300 max-w-2xl mx-auto">
                Transform your industry with quantum-enhanced AI solutions
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {useCases.map((useCase, index) => (
                <div
                  key={index}
                  className="bg-gradient-to-br from-slate-800/30 to-slate-900/30 backdrop-blur-sm rounded-xl p-6 border border-white/10"
                >
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-lg flex items-center justify-center mr-4">
                      <div className="text-white">{useCase.icon}</div>
                    </div>
                    <h3 className="text-xl font-bold text-white">{useCase.title}</h3>
                  </div>
                  <p className="text-gray-300 mb-4">{useCase.description}</p>
                  
                  <div className="space-y-2">
                    {useCase.examples.map((example, exampleIndex) => (
                      <div key={exampleIndex} className="flex items-center text-sm text-gray-300">
                        <div className="w-2 h-2 bg-cyan-400 rounded-full mr-3 flex-shrink-0"></div>
                        <span>{example}</span>
                      </div>
                    ))}
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
                  Quantum Computing Plans
                </span>
              </h2>
              <p className="text-xl text-gray-300 max-w-2xl mx-auto">
                Choose the perfect quantum computing plan for your needs
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
                      <span className="bg-gradient-to-r from-cyan-500 to-purple-500 text-white px-4 py-2 rounded-full text-sm font-bold">
                        Most Popular
                      </span>
                    </div>
                  )}
                  
                  <div className="text-center mb-6">
                    <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                    <p className="text-gray-300 text-sm mb-4">{plan.description}</p>
                    <div className="flex items-baseline justify-center">
                      <span className="text-4xl font-bold text-white">{plan.price}</span>
                      <span className="text-gray-400 ml-1">{plan.period}</span>
                    </div>
                  </div>

                  <div className="space-y-3 mb-8">
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
        <div className="py-16 bg-black/10 backdrop-blur-sm">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-white mb-4">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400">
                  Quantum Success Stories
                </span>
              </h2>
              <p className="text-xl text-gray-300 max-w-2xl mx-auto">
                See how quantum computing is transforming industries
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
              Ready to Harness Quantum AI?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Transform your business with quantum-enhanced artificial intelligence. 
              Get a free consultation and discover the quantum advantage.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-cyan-500 to-purple-500 text-white font-semibold rounded-lg hover:from-cyan-400 hover:to-purple-400 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
              >
                Get Quantum Consultation
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
}
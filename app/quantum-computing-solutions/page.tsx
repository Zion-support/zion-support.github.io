import React from 'react';
import { Link } from 'react-router-dom';
import { Cpu, ArrowRight, CheckCircle, Star, Clock, DollarSign, Users, Zap, Shield, Brain, Globe, BarChart3, PieChart, Settings, Database, Lock, Eye, BarChart, LineChart, Calculator, Target, Activity, RefreshCw, Sparkles, Atom, CircuitBoard, Microchip, Layers, Network, Server, HardDrive, Wifi, Bluetooth, Monitor, Smartphone, Laptop, Tablet, Gamepad2, Mic, Camera, MicIcon } from 'lucide-react';
import EnhancedSEO from '../../components/EnhancedSEO';

const QuantumComputingSolutionsPage = () => {
  const features = [
    {
      title: "Quantum Algorithm Development",
      description: "Custom quantum algorithms for optimization, cryptography, and machine learning applications",
      icon: <Cpu className="w-6 h-6" />,
      details: ["Custom algorithms", "Optimization problems", "Cryptography", "Machine learning"]
    },
    {
      title: "Quantum Simulation Services",
      description: "High-performance quantum simulations for research, drug discovery, and materials science",
      icon: <Atom className="w-6 h-6" />,
      details: ["Molecular simulation", "Drug discovery", "Materials science", "Chemical modeling"]
    },
    {
      title: "Quantum Cryptography",
      description: "Unbreakable encryption using quantum key distribution and quantum-resistant algorithms",
      icon: <Shield className="w-6 h-6" />,
      details: ["Quantum key distribution", "Post-quantum cryptography", "Secure communication", "Quantum random numbers"]
    },
    {
      title: "Quantum Machine Learning",
      description: "Quantum-enhanced machine learning algorithms for complex pattern recognition and optimization",
      icon: <Brain className="w-6 h-6" />,
      details: ["Quantum neural networks", "Pattern recognition", "Optimization", "Quantum feature maps"]
    },
    {
      title: "Quantum Cloud Access",
      description: "Access to quantum computing resources through our secure cloud platform",
      icon: <Cloud className="w-6 h-6" />,
      details: ["Cloud quantum access", "Multiple quantum computers", "API integration", "Scalable resources"]
    },
    {
      title: "Quantum Consulting",
      description: "Expert consultation on quantum computing strategy, implementation, and optimization",
      icon: <Target className="w-6 h-6" />,
      details: ["Strategic planning", "Implementation guidance", "Performance optimization", "Technology assessment"]
    }
  ];

  const applications = [
    {
      name: "Financial Services",
      description: "Quantum algorithms for portfolio optimization, risk analysis, and fraud detection",
      icon: <BarChart3 className="w-8 h-8" />,
      useCases: ["Portfolio optimization", "Risk analysis", "Fraud detection", "Algorithmic trading", "Credit scoring", "Insurance modeling"]
    },
    {
      name: "Healthcare & Life Sciences",
      description: "Quantum computing for drug discovery, protein folding, and personalized medicine",
      icon: <Activity className="w-8 h-8" />,
      useCases: ["Drug discovery", "Protein folding", "Genomics", "Personalized medicine", "Medical imaging", "Clinical trials"]
    },
    {
      name: "Logistics & Supply Chain",
      description: "Quantum optimization for route planning, inventory management, and supply chain optimization",
      icon: <Globe className="w-8 h-8" />,
      useCases: ["Route optimization", "Inventory management", "Supply chain", "Transportation", "Warehouse optimization", "Delivery scheduling"]
    },
    {
      name: "Energy & Utilities",
      description: "Quantum solutions for energy grid optimization, renewable energy, and smart grid management",
      icon: <Zap className="w-8 h-8" />,
      useCases: ["Grid optimization", "Renewable energy", "Smart grids", "Energy trading", "Load balancing", "Power distribution"]
    },
    {
      name: "Manufacturing",
      description: "Quantum computing for production optimization, quality control, and predictive maintenance",
      icon: <CircuitBoard className="w-8 h-8" />,
      useCases: ["Production optimization", "Quality control", "Predictive maintenance", "Supply chain", "Process optimization", "Resource allocation"]
    },
    {
      name: "Research & Development",
      description: "Quantum computing for scientific research, materials discovery, and complex simulations",
      icon: <Microchip className="w-8 h-8" />,
      useCases: ["Scientific research", "Materials discovery", "Complex simulations", "Climate modeling", "Physics research", "Chemistry research"]
    }
  ];

  const pricingPlans = [
    {
      name: "Research & Education",
      price: "$999",
      period: "/month",
      description: "Perfect for universities and research institutions",
      features: [
        "Basic quantum access",
        "Educational resources",
        "Limited compute time",
        "Email support",
        "Basic algorithms",
        "Research licensing"
      ],
      popular: false
    },
    {
      name: "Professional",
      price: "$2,999",
      period: "/month",
      description: "Ideal for businesses and startups",
      features: [
        "Advanced quantum access",
        "Custom algorithms",
        "Priority compute time",
        "Dedicated support",
        "API integration",
        "White-label options",
        "Performance analytics"
      ],
      popular: true
    },
    {
      name: "Enterprise",
      price: "$9,999",
      period: "/month",
      description: "For large organizations and government agencies",
      features: [
        "Unlimited quantum access",
        "Custom development",
        "On-premise deployment",
        "24/7 dedicated support",
        "SLA guarantee",
        "Security clearance",
        "Compliance reporting"
      ],
      popular: false
    }
  ];

  const performanceMetrics = [
    {
      metric: "Quantum Volume",
      value: "1024+",
      description: "Advanced quantum systems",
      icon: <Cpu className="w-6 h-6" />
    },
    {
      metric: "Processing Speed",
      value: "1000x",
      description: "Faster than classical computers",
      icon: <Zap className="w-6 h-6" />
    },
    {
      metric: "Accuracy",
      value: "99.9%",
      description: "Quantum algorithm accuracy",
      icon: <Target className="w-6 h-6" />
    },
    {
      metric: "Uptime",
      value: "99.99%",
      description: "System availability",
      icon: <Shield className="w-6 h-6" />
    }
  ];

  const testimonials = [
    {
      name: "Dr. Sarah Chen",
      company: "Quantum Research Institute",
      role: "Director of Quantum Computing",
      content: "Zion Tech Group's quantum solutions have accelerated our research by orders of magnitude. The performance is exceptional.",
      rating: 5,
      avatar: "SC"
    },
    {
      name: "Michael Rodriguez",
      company: "FinTech Quantum",
      role: "CTO",
      content: "The quantum algorithms for portfolio optimization have given us a significant competitive advantage in the market.",
      rating: 5,
      avatar: "MR"
    },
    {
      name: "Emily Watson",
      company: "PharmaTech Solutions",
      role: "Head of R&D",
      content: "Quantum simulation has revolutionized our drug discovery process. We've identified promising compounds in record time.",
      rating: 5,
      avatar: "EW"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 relative overflow-hidden">
      <EnhancedSEO
        title="Quantum Computing Solutions - Advanced Quantum Technology | Zion Tech Group"
        description="Revolutionary quantum computing solutions for optimization, cryptography, and machine learning. Quantum algorithms, simulation services, and cloud access for enterprises and researchers."
        keywords="quantum computing, quantum algorithms, quantum cryptography, quantum machine learning, quantum simulation, quantum cloud, quantum optimization"
        canonical="https://ziontechgroup.com/quantum-computing-solutions"
      />

      {/* Hero Section */}
      <section className="pt-20 pb-16 px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-7xl mx-auto text-center">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-cyan-500/20 to-purple-500/20 border border-cyan-500/30 mb-6">
            <Sparkles className="w-4 h-4 text-cyan-400 mr-2" />
            <span className="text-cyan-400 text-sm font-medium">Next-Generation Quantum Technology</span>
          </div>
          
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400">
              Quantum Computing Solutions
            </span>
          </h1>
          
          <p className="text-lg md:text-xl lg:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto leading-relaxed">
            Revolutionary quantum computing solutions for optimization, cryptography, and machine learning. 
            Advanced quantum algorithms, simulation services, and cloud access for enterprises and researchers.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Link
              to="/contact"
              className="group bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 flex items-center justify-center shadow-lg hover:shadow-cyan-500/25 hover:scale-105"
            >
              <Cpu className="w-5 h-5 mr-2" />
              Start Quantum Journey
              <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link
              to="/demo"
              className="border border-cyan-400 text-cyan-400 px-8 py-4 rounded-lg font-semibold hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300 hover:scale-105 flex items-center justify-center"
            >
              <Atom className="w-5 h-5 mr-2" />
              View Quantum Demo
            </Link>
          </div>

          {/* Performance Metrics */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
            {performanceMetrics.map((metric, index) => (
              <div key={index} className="text-center group">
                <div className="w-12 h-12 md:w-16 md:h-16 mx-auto mb-4 rounded-full bg-gradient-to-r from-cyan-500/20 to-purple-500/20 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  {metric.icon}
                </div>
                <div className="text-xl md:text-2xl lg:text-3xl font-bold text-white mb-2">{metric.value}</div>
                <div className="text-gray-300 text-xs md:text-sm font-semibold">{metric.metric}</div>
                <div className="text-gray-400 text-xs">{metric.description}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
              Advanced Quantum Computing Capabilities
            </h2>
            <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
              Cutting-edge quantum computing solutions that harness the power of quantum mechanics for unprecedented computational capabilities
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div
                key={index}
                className="group bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-cyan-500/10"
              >
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 rounded-lg bg-gradient-to-r from-cyan-500 to-purple-600 flex items-center justify-center text-white mr-4 group-hover:scale-110 transition-transform">
                    {feature.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-white group-hover:text-cyan-400 transition-colors">
                    {feature.title}
                  </h3>
                </div>
                <p className="text-gray-300 mb-4 leading-relaxed">
                  {feature.description}
                </p>
                <ul className="space-y-2">
                  {feature.details.map((detail, idx) => (
                    <li key={idx} className="flex items-center text-sm text-gray-400">
                      <CheckCircle className="w-4 h-4 text-cyan-400 mr-2 flex-shrink-0" />
                      {detail}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Applications Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-slate-800/50 to-purple-800/50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Industry Applications
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Discover how quantum computing is transforming industries and solving complex problems
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {applications.map((app, index) => (
              <div
                key={index}
                className="group bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-purple-500/10"
              >
                <div className="flex items-center mb-4">
                  <div className="w-16 h-16 rounded-lg bg-gradient-to-r from-purple-500 to-cyan-500 flex items-center justify-center text-white mr-4 group-hover:scale-110 transition-transform">
                    {app.icon}
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-white group-hover:text-purple-400 transition-colors">
                      {app.name}
                    </h3>
                    <p className="text-gray-300 text-sm">{app.description}</p>
                  </div>
                </div>
                <div className="flex flex-wrap gap-2">
                  {app.useCases.map((useCase, idx) => (
                    <span key={idx} className="px-3 py-1 bg-purple-500/20 text-purple-300 rounded-full text-xs border border-purple-500/30">
                      {useCase}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Quantum Computing Pricing
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Choose the perfect plan for your quantum computing needs. All plans include quantum algorithm access.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {pricingPlans.map((plan, index) => (
              <div
                key={index}
                className={`group bg-white/10 backdrop-blur-sm rounded-xl p-8 border transition-all duration-300 hover:scale-105 hover:shadow-2xl relative ${
                  plan.popular 
                    ? 'border-cyan-500/50 hover:shadow-cyan-500/25 bg-gradient-to-br from-cyan-500/10 to-purple-500/10' 
                    : 'border-white/20 hover:bg-white/20'
                }`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-4 py-2 rounded-full text-sm font-semibold">
                      Most Popular
                    </span>
                  </div>
                )}
                
                <div className="text-center mb-6">
                  <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                  <p className="text-gray-300 text-sm mb-4">{plan.description}</p>
                  <div className="flex items-baseline justify-center">
                    <span className="text-4xl font-bold text-cyan-400">{plan.price}</span>
                    <span className="text-gray-400 ml-1">{plan.period}</span>
                  </div>
                </div>
                
                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-gray-300">
                      <CheckCircle className="w-5 h-5 text-cyan-400 mr-3 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
                
                <Link
                  to="/contact"
                  className={`w-full py-3 px-6 rounded-lg font-semibold transition-all duration-300 flex items-center justify-center group ${
                    plan.popular
                      ? 'bg-gradient-to-r from-cyan-500 to-purple-600 text-white hover:from-cyan-600 hover:to-purple-700 shadow-lg hover:shadow-cyan-500/25'
                      : 'border border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-slate-900'
                  }`}
                >
                  Get Started
                  <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-cyan-900/30 to-purple-900/30">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Trusted by Quantum Leaders
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              See what leading researchers and organizations say about our quantum computing solutions
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
                  <div className="w-10 h-10 rounded-full bg-gradient-to-r from-cyan-500 to-purple-600 flex items-center justify-center text-white font-semibold mr-3">
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
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Ready to Harness Quantum Power?
            </h2>
            <p className="text-xl text-gray-300 mb-8 leading-relaxed">
              Join the quantum computing revolution. Experience unprecedented computational power 
              and solve complex problems that were previously impossible.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="group bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 flex items-center justify-center shadow-lg hover:shadow-cyan-500/25 hover:scale-105"
              >
                <Cpu className="w-5 h-5 mr-2" />
                Start Quantum Journey
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                to="/demo"
                className="border border-cyan-400 text-cyan-400 px-8 py-4 rounded-lg font-semibold hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300 hover:scale-105 flex items-center justify-center"
              >
                <Atom className="w-5 h-5 mr-2" />
                View Quantum Demo
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default QuantumComputingSolutionsPage;
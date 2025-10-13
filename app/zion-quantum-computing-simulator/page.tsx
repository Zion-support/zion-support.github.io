import { ArrowRight, Atom, Zap, Globe, CheckCircle, Star, Award, BarChart3, Cloud, Sparkles, Mail, Smartphone, Monitor, Target, Users, TrendingUp, FileText, Lock, Database, Cpu, Network, Clock, DollarSign, Brain, CpuIcon, Layers, CircuitBoard } from "lucide-react";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import EnhancedSEO from "../components/EnhancedSEO";
import FuturisticCard from "../components/FuturisticCard";
import FuturisticButton from "../components/FuturisticButton";
import ResponsiveContainer from "../components/ResponsiveContainer";
import ResponsiveGrid from "../components/ResponsiveGrid";
import ResponsiveText from "../components/ResponsiveText";

export default function ZionQuantumComputingSimulator() {
  const features = [
    {
      title: "Quantum Circuit Designer",
      description: "Visual quantum circuit designer with drag-and-drop interface for creating complex quantum algorithms and simulations.",
      icon: <CircuitBoard className="w-8 h-8" />,
      color: "from-blue-500 to-cyan-500"
    },
    {
      title: "Quantum State Visualization",
      description: "Interactive 3D visualization of quantum states, entanglement, and superposition with real-time rendering.",
      icon: <Layers className="w-8 h-8" />,
      color: "from-green-500 to-emerald-500"
    },
    {
      title: "Algorithm Library",
      description: "Pre-built quantum algorithms including Shor's, Grover's, VQE, and QAOA with customizable parameters.",
      icon: <Brain className="w-8 h-8" />,
      color: "from-purple-500 to-pink-500"
    },
    {
      title: "Noise Simulation",
      description: "Realistic noise modeling for quantum computers including decoherence, gate errors, and environmental effects.",
      icon: <Atom className="w-8 h-8" />,
      color: "from-orange-500 to-red-500"
    }
  ];

  const pricingPlans = [
    {
      name: "Student",
      price: "$49",
      period: "month",
      description: "Perfect for students and researchers",
      features: [
        "Up to 10 qubits",
        "Basic quantum gates",
        "Standard algorithms",
        "Community support",
        "Educational resources"
      ],
      popular: false
    },
    {
      name: "Professional",
      price: "$199",
      period: "month",
      description: "For quantum developers and researchers",
      features: [
        "Up to 20 qubits",
        "Advanced algorithms",
        "Custom gate design",
        "Priority support",
        "API access",
        "Export capabilities",
        "Collaboration tools"
      ],
      popular: true
    },
    {
      name: "Enterprise",
      price: "$499",
      period: "month",
      description: "For large-scale quantum research",
      features: [
        "Up to 50 qubits",
        "Full algorithm library",
        "Custom noise models",
        "Dedicated support",
        "White-label options",
        "Advanced analytics",
        "Team management",
        "Cloud deployment"
      ],
      popular: false
    }
  ];

  const stats = [
    { number: "50+", label: "Quantum Algorithms", icon: <Brain className="w-6 h-6" /> },
    { number: "1000+", label: "Active Users", icon: <Users className="w-6 h-6" /> },
    { number: "99.9%", label: "Simulation Accuracy", icon: <Target className="w-6 h-6" /> },
    { number: "24/7", label: "Cloud Access", icon: <Cloud className="w-6 h-6" /> }
  ];

  return (
    <>
      <Helmet>
        <title>Zion Quantum Computing Simulator - Advanced Quantum Algorithm Development Platform</title>
        <meta
          name="description"
          content="Advanced quantum computing simulator with visual circuit designer, algorithm library, and noise modeling. Perfect for quantum researchers, developers, and students learning quantum computing."
        />
        <meta
          name="keywords"
          content="quantum computing simulator, quantum algorithms, quantum circuits, quantum research, quantum development, quantum education, quantum simulation"
        />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 relative overflow-hidden">
        {/* Hero Section */}
        <section className="pt-20 pb-16 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
          <div className="absolute inset-0 overflow-hidden">
            <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-cyan-500/20 to-purple-500/20 rounded-full blur-3xl animate-pulse"></div>
            <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-br from-purple-500/20 to-pink-500/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
          </div>
          
          <ResponsiveContainer className="text-center relative z-10">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-cyan-500/20 to-purple-500/20 border border-cyan-500/30 mb-6">
              <Atom className="w-4 h-4 text-cyan-400 mr-2" />
              <span className="text-cyan-400 text-sm font-medium">#1 Quantum Computing Platform</span>
            </div>
            
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400">
                Zion Quantum Computing Simulator
              </span>
            </h1>
            
            <p className="text-lg md:text-xl lg:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto leading-relaxed text-center">
              Advanced quantum computing simulator with visual circuit designer, comprehensive algorithm library, 
              and realistic noise modeling. Perfect for quantum researchers, developers, and students.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
              <FuturisticButton
                href="/contact"
                variant="primary"
                size="lg"
                icon={<ArrowRight className="w-5 h-5" />}
              >
                Start Free Trial
              </FuturisticButton>
              <FuturisticButton
                href="#demo"
                variant="outline"
                size="lg"
                icon={<Monitor className="w-5 h-5" />}
              >
                View Demo
              </FuturisticButton>
            </div>
            
            {/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-5xl mx-auto">
              {stats.map((stat, index) => (
                <div key={index} className="text-center group">
                  <div className="w-12 h-12 md:w-16 md:h-16 mx-auto mb-4 rounded-full bg-gradient-to-r from-cyan-500/20 to-purple-500/20 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    {stat.icon}
                  </div>
                  <div className="text-xl md:text-2xl lg:text-3xl font-bold text-white mb-2">{stat.number}</div>
                  <div className="text-gray-300 text-xs md:text-sm">{stat.label}</div>
                </div>
              ))}
            </div>
          </ResponsiveContainer>
        </section>

        {/* Features Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <ResponsiveContainer>
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
                Quantum Computing Features
              </h2>
              <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
                Comprehensive quantum computing tools and simulations powered by advanced algorithms 
                to help you explore the quantum realm and develop breakthrough applications.
              </p>
            </div>
            <ResponsiveGrid className="grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {features.map((feature, index) => (
                <FuturisticCard
                  key={index}
                  className="group bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-cyan-500/10"
                >
                  <div
                    className={`w-12 h-12 md:w-16 md:h-16 rounded-lg bg-gradient-to-r ${feature.color} flex items-center justify-center mb-4 mx-auto group-hover:scale-110 transition-transform duration-300`}
                  >
                    {feature.icon}
                  </div>
                  <h3 className="text-lg md:text-xl font-semibold text-white mb-3 text-center group-hover:text-cyan-400 transition-colors">
                    {feature.title}
                  </h3>
                  <p className="text-gray-300 text-center leading-relaxed text-sm md:text-base">
                    {feature.description}
                  </p>
                </FuturisticCard>
              ))}
            </ResponsiveGrid>
          </ResponsiveContainer>
        </section>

        {/* Pricing Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-slate-800/50 to-purple-800/50">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Quantum Computing Plans
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Choose the perfect plan for your quantum computing journey. All plans include our core simulation features.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {pricingPlans.map((plan, index) => (
                <div
                  key={index}
                  className={`relative bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-cyan-500/10 ${
                    plan.popular ? 'ring-2 ring-cyan-500/50' : ''
                  }`}
                >
                  {plan.popular && (
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                      <span className="bg-gradient-to-r from-cyan-500 to-purple-500 text-white px-4 py-1 rounded-full text-sm font-semibold">
                        Most Popular
                      </span>
                    </div>
                  )}
                  
                  <div className="text-center mb-6">
                    <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                    <p className="text-gray-300 mb-4">{plan.description}</p>
                    <div className="flex items-baseline justify-center">
                      <span className="text-4xl font-bold text-cyan-400">${plan.price}</span>
                      <span className="text-gray-300 ml-2">/{plan.period}</span>
                    </div>
                  </div>
                  
                  <ul className="space-y-3 mb-8">
                    {plan.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-gray-300">
                        <CheckCircle className="w-5 h-5 text-cyan-400 mr-3 flex-shrink-0" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                  
                  <FuturisticButton
                    href="/contact"
                    variant={plan.popular ? "primary" : "outline"}
                    size="lg"
                    className="w-full"
                    icon={<ArrowRight className="w-5 h-5" />}
                  >
                    Get Started
                  </FuturisticButton>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-cyan-900/30 to-purple-900/30">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
              Explore Quantum Computing Today
            </h2>
            <p className="text-xl text-gray-300 mb-8 leading-relaxed">
              Join thousands of quantum researchers and developers already using Zion Quantum Computing Simulator 
              to explore the quantum realm and develop breakthrough applications. Start your quantum journey today.
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
              <FuturisticButton
                href="/contact"
                variant="primary"
                size="lg"
                icon={<ArrowRight className="w-5 h-5" />}
              >
                Start Free Trial
              </FuturisticButton>
              <FuturisticButton
                href="#pricing"
                variant="outline"
                size="lg"
                icon={<DollarSign className="w-5 h-5" />}
              >
                View Pricing
              </FuturisticButton>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}

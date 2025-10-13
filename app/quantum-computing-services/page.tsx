import React from 'react';
import { Link } from 'react-router-dom';
import { Atom, Zap, Shield, BarChart3, Users, ArrowRight, CheckCircle, Star, Globe, Smartphone, Code, Database, Cloud, Lock, Sparkles, Cpu, CpuIcon, Microscope } from 'lucide-react';
import SEOOptimizer from '../components/SEOOptimizer';

const QuantumComputingServicesPage = () => {
  const features = [
    {
      title: "Quantum Algorithms",
      description: "Develop and optimize quantum algorithms for complex computational problems and optimization challenges",
      icon: <Atom className="w-6 h-6" />,
      color: "from-purple-500 to-pink-500"
    },
    {
      title: "Quantum Simulation",
      description: "Simulate quantum systems and molecular interactions for drug discovery and materials science",
      icon: <Microscope className="w-6 h-6" />,
      color: "from-blue-500 to-cyan-500"
    },
    {
      title: "Quantum Cryptography",
      description: "Implement unbreakable quantum encryption for ultra-secure communications and data protection",
      icon: <Shield className="w-6 h-6" />,
      color: "from-green-500 to-emerald-500"
    },
    {
      title: "Quantum Machine Learning",
      description: "Leverage quantum computing for advanced machine learning and AI applications",
      icon: <Cpu className="w-6 h-6" />,
      color: "from-orange-500 to-red-500"
    },
    {
      title: "Quantum Optimization",
      description: "Solve complex optimization problems in logistics, finance, and resource allocation",
      icon: <BarChart3 className="w-6 h-6" />,
      color: "from-indigo-500 to-purple-500"
    },
    {
      title: "Quantum Cloud Access",
      description: "Access quantum computing resources through our secure cloud platform",
      icon: <Cloud className="w-6 h-6" />,
      color: "from-pink-500 to-rose-500"
    }
  ];

  const pricingPlans = [
    {
      name: "Quantum Explorer",
      price: "$2,999",
      period: "/month",
      description: "Perfect for research and development",
      features: [
        "Up to 10 quantum circuits",
        "Basic quantum algorithms",
        "Standard support",
        "1TB quantum data storage",
        "Email support"
      ],
      popular: false
    },
    {
      name: "Quantum Professional",
      price: "$7,999",
      period: "/month",
      description: "Ideal for commercial applications",
      features: [
        "Up to 100 quantum circuits",
        "Advanced quantum algorithms",
        "Priority support",
        "10TB quantum data storage",
        "API access",
        "Custom quantum solutions",
        "24/7 support"
      ],
      popular: true
    },
    {
      name: "Quantum Enterprise",
      price: "$19,999",
      period: "/month",
      description: "For large-scale quantum projects",
      features: [
        "Unlimited quantum circuits",
        "Custom quantum hardware",
        "White-label solution",
        "Dedicated quantum team",
        "Advanced integrations",
        "Custom quantum algorithms",
        "SLA guarantee"
      ],
      popular: false
    }
  ];

  const useCases = [
    {
      title: "Drug Discovery",
      description: "Accelerate pharmaceutical research with quantum simulation of molecular interactions",
      icon: <Microscope className="w-8 h-8" />,
      benefits: ["10x faster drug discovery", "More accurate simulations", "Reduced R&D costs"]
    },
    {
      title: "Financial Modeling",
      description: "Optimize investment portfolios and risk management with quantum algorithms",
      icon: <BarChart3 className="w-8 h-8" />,
      benefits: ["Complex portfolio optimization", "Real-time risk analysis", "Enhanced returns"]
    },
    {
      title: "Cryptography",
      description: "Implement quantum-resistant encryption and secure quantum communications",
      icon: <Shield className="w-8 h-8" />,
      benefits: ["Unbreakable encryption", "Future-proof security", "Quantum key distribution"]
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <SEOOptimizer
        title="Quantum Computing Services - Next-Gen Computing Solutions | Zion Tech Group"
        description="Access quantum computing power for complex problems. Quantum algorithms, simulation, cryptography, machine learning. Revolutionary computing solutions. Start free trial!"
        keywords="quantum computing, quantum algorithms, quantum simulation, quantum cryptography, quantum machine learning, quantum optimization, quantum cloud"
        canonical="https://ziontechgroup.com/quantum-computing-services"
      />

      {/* Hero Section */}
      <section className="pt-20 pb-16 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-purple-500/20 to-pink-500/20 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-br from-pink-500/20 to-cyan-500/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
        </div>
        
        <div className="max-w-7xl mx-auto text-center relative z-10">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-purple-500/20 to-pink-500/20 border border-purple-500/30 mb-6">
            <Sparkles className="w-4 h-4 text-purple-400 mr-2" />
            <span className="text-purple-400 text-sm font-medium">#1 Quantum Computing Platform</span>
          </div>
          
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
            Quantum Computing
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-400 to-cyan-400 animate-pulse">
              {" "}Services
            </span>
            <br />Next-Generation Computing
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto leading-relaxed">
            Access the power of quantum computing for complex problems in drug discovery, 
            financial modeling, cryptography, and optimization. Revolutionary computing solutions.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
            <Link
              to="/contact"
              className="bg-gradient-to-r from-purple-500 to-pink-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-purple-600 hover:to-pink-700 transition-all duration-300 flex items-center justify-center group shadow-lg hover:shadow-purple-500/25 hover:scale-105"
            >
              Start Free Trial
              <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link
              to="/demo"
              className="border border-purple-400 text-purple-400 px-8 py-4 rounded-lg font-semibold hover:bg-purple-400 hover:text-slate-900 transition-all duration-300 group hover:scale-105"
            >
              Watch Demo
              <Sparkles className="w-5 h-5 ml-2 group-hover:rotate-12 transition-transform" />
            </Link>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
              Advanced Quantum Computing Features
            </h2>
            <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
              Everything you need to harness the power of quantum computing 
              for revolutionary solutions to complex problems.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div
                key={index}
                className="group bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-purple-500/10"
              >
                <div
                  className={`w-16 h-16 rounded-lg bg-gradient-to-r ${feature.color} flex items-center justify-center mb-4 mx-auto group-hover:scale-110 transition-transform duration-300`}
                >
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold text-white mb-3 text-center group-hover:text-purple-400 transition-colors">
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

      {/* Use Cases Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-slate-800/50 to-purple-800/50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Quantum Applications
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              See how businesses are using our quantum computing services to solve complex problems.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {useCases.map((useCase, index) => (
              <div
                key={index}
                className="group bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105"
              >
                <div className="w-16 h-16 rounded-lg bg-gradient-to-r from-purple-500 to-pink-500 flex items-center justify-center text-white mb-4 group-hover:scale-110 transition-transform">
                  {useCase.icon}
                </div>
                <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-purple-400 transition-colors">
                  {useCase.title}
                </h3>
                <p className="text-gray-300 mb-4 leading-relaxed">
                  {useCase.description}
                </p>
                <ul className="space-y-2">
                  {useCase.benefits.map((benefit, i) => (
                    <li key={i} className="flex items-center text-sm text-purple-400">
                      <CheckCircle className="w-4 h-4 mr-2 flex-shrink-0" />
                      {benefit}
                    </li>
                  ))}
                </ul>
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
              Simple, Transparent Pricing
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Choose the plan that fits your quantum computing needs. All plans include our core features.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {pricingPlans.map((plan, index) => (
              <div
                key={index}
                className={`relative bg-white/10 backdrop-blur-sm rounded-xl p-8 border transition-all duration-300 hover:scale-105 ${
                  plan.popular 
                    ? 'border-purple-500/50 shadow-2xl shadow-purple-500/20' 
                    : 'border-white/20 hover:border-purple-500/30'
                }`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-gradient-to-r from-purple-500 to-pink-600 text-white px-4 py-1 rounded-full text-sm font-semibold">
                      Most Popular
                    </span>
                  </div>
                )}
                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                  <p className="text-gray-300 mb-4">{plan.description}</p>
                  <div className="flex items-baseline justify-center">
                    <span className="text-4xl font-bold text-white">{plan.price}</span>
                    <span className="text-gray-300 ml-1">{plan.period}</span>
                  </div>
                </div>
                <ul className="space-y-4 mb-8">
                  {plan.features.map((feature, i) => (
                    <li key={i} className="flex items-center text-gray-300">
                      <CheckCircle className="w-5 h-5 text-purple-400 mr-3 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <Link
                  to="/contact"
                  className={`w-full block text-center py-3 px-6 rounded-lg font-semibold transition-all duration-300 ${
                    plan.popular
                      ? 'bg-gradient-to-r from-purple-500 to-pink-600 text-white hover:from-purple-600 hover:to-pink-700'
                      : 'border border-purple-400 text-purple-400 hover:bg-purple-400 hover:text-slate-900'
                  }`}
                >
                  Get Started
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-purple-900/30 to-pink-900/30">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
            Ready to Explore Quantum Computing?
          </h2>
          <p className="text-xl text-gray-300 mb-8 leading-relaxed">
            Join the quantum revolution and solve complex problems with unprecedented computing power. 
            Start your free trial today.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="bg-gradient-to-r from-purple-500 to-pink-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-purple-600 hover:to-pink-700 transition-all duration-300 flex items-center justify-center group shadow-lg hover:shadow-purple-500/25 hover:scale-105"
            >
              Start Free Trial
              <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link
              to="/pricing"
              className="border border-purple-400 text-purple-400 px-8 py-4 rounded-lg font-semibold hover:bg-purple-400 hover:text-slate-900 transition-all duration-300 group hover:scale-105"
            >
              View All Plans
              <Sparkles className="w-5 h-5 ml-2 group-hover:rotate-12 transition-transform" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default QuantumComputingServicesPage;
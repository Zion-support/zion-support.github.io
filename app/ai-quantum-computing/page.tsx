import React from "react";
import { Helmet } from "react-helmet-async";
import { ArrowRight, CheckCircle, Star, Cpu, Brain, Atom, Users, Award, Globe, Lock, TrendingUp, Monitor, MessageSquare } from "lucide-react";
import { Link } from "react-router-dom";
import SEOHead from '../components/SEOHead';

export default function AiQuantumComputing() {
  const features = [
    "Quantum machine learning algorithms for complex optimization",
    "Quantum simulation for drug discovery and materials science",
    "Quantum cryptography for ultra-secure communications",
    "Quantum annealing for combinatorial optimization problems",
    "Quantum neural networks for pattern recognition",
    "Quantum error correction and fault tolerance",
    "Hybrid quantum-classical computing workflows",
    "Quantum cloud access with real quantum hardware",
    "Advanced quantum algorithm development",
    "Quantum state preparation and manipulation",
    "Quantum entanglement and teleportation protocols",
    "Custom quantum circuit design and optimization"
  ];

  // const benefits = [
  //   "Solve problems 1000x faster than classical computers",
  //   "Breakthrough discoveries in science and medicine",
  //   "Unbreakable quantum encryption for data security",
  //   "Revolutionary optimization for complex systems"
  // ];

  const pricingPlans = [
    {
      name: "Research",
      price: "$2,999",
      period: "/month",
      description: "Perfect for academic research and small-scale quantum experiments",
      features: [
        "Up to 100 quantum circuit executions",
        "Basic quantum algorithms library",
        "Quantum simulator access",
        "Email support",
        "Basic documentation",
        "5 user accounts",
        "Standard quantum gates"
      ],
      popular: false
    },
    {
      name: "Enterprise",
      price: "$9,999",
      period: "/month",
      description: "Ideal for large organizations and commercial quantum applications",
      features: [
        "Up to 1,000 quantum circuit executions",
        "Advanced quantum algorithms library",
        "Real quantum hardware access",
        "Priority support",
        "Advanced documentation",
        "25 user accounts",
        "Custom quantum gates",
        "API access",
        "Quantum error correction",
        "Dedicated quantum resources"
      ],
      popular: true
    },
    {
      name: "Quantum Lab",
      price: "$29,999",
      period: "/month",
      description: "For quantum research institutions and cutting-edge applications",
      features: [
        "Unlimited quantum circuit executions",
        "Complete quantum algorithms library",
        "Exclusive quantum hardware access",
        "24/7 dedicated support",
        "Custom quantum development",
        "Unlimited user accounts",
        "Custom quantum processors",
        "Advanced API access",
        "Quantum entanglement protocols",
        "Dedicated quantum scientists",
        "White-label quantum solutions",
        "On-premise quantum deployment"
      ],
      popular: false
    }
  ];

  const testimonials = [
    {
      name: "Dr. Sarah Chen",
      company: "Quantum Research Institute",
      role: "Chief Quantum Scientist",
      content: "Zion's quantum computing platform has accelerated our research by years. We've made breakthrough discoveries in quantum chemistry that would have been impossible with classical computers.",
      rating: 5,
      avatar: "SC"
    },
    {
      name: "Michael Rodriguez",
      company: "Pharmaceutical Corp",
      role: "Head of R&D",
      content: "The quantum simulation capabilities are extraordinary. We've discovered new drug compounds and optimized molecular structures in weeks instead of years.",
      rating: 5,
      avatar: "MR"
    },
    {
      name: "Dr. Emily Watson",
      company: "Financial Services",
      role: "Quantitative Analyst",
      content: "Quantum optimization has revolutionized our portfolio management. We're achieving returns that were theoretically impossible with classical algorithms.",
      rating: 5,
      avatar: "EW"
    }
  ];

  const applications = [
    {
      title: "Drug Discovery",
      description: "Simulate molecular interactions and discover new pharmaceutical compounds",
      icon: <Atom className="w-8 h-8" />,
      color: "from-blue-500 to-cyan-500"
    },
    {
      title: "Financial Optimization",
      description: "Optimize complex portfolios and risk management strategies",
      icon: <TrendingUp className="w-8 h-8" />,
      color: "from-green-500 to-emerald-500"
    },
    {
      title: "Cryptography",
      description: "Develop unbreakable quantum encryption and secure communications",
      icon: <Lock className="w-8 h-8" />,
      color: "from-purple-500 to-pink-500"
    },
    {
      title: "Machine Learning",
      description: "Train quantum neural networks for advanced pattern recognition",
      icon: <Brain className="w-8 h-8" />,
      color: "from-orange-500 to-red-500"
    }
  ];
  return (
    <>
      <SEOHead 
        title="AI Quantum Computing - Zion Tech Group"
        description="Revolutionary AI quantum computing solutions for complex optimization, drug discovery, and ultra-secure communications."
        keywords="AI quantum computing, quantum machine learning, quantum cryptography, quantum optimization, quantum algorithms"
      />
      <Helmet>
        <title>AI Quantum Computing - Revolutionary Quantum Solutions | Zion Tech Group</title>
        <meta name="description" content="Transform your business with AI quantum computing. Solve problems 1000x faster, achieve breakthrough discoveries, and secure communications with quantum technology." />
        <meta name="keywords" content="AI quantum computing, quantum machine learning, quantum cryptography, quantum optimization, quantum algorithms, quantum cloud" />
      </Helmet>
      
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-violet-900 to-slate-900">
        {/* Hero Section */}
        <section className="relative py-20 px-4">
          <div className="container mx-auto max-w-7xl">
            <div className="text-center mb-16">
              <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
                AI Quantum Computing
              </h1>
              <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
                Revolutionize your business with AI quantum computing. Solve problems 1000x faster, achieve breakthrough discoveries, 
                and secure communications with cutting-edge quantum technology.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="bg-gradient-to-r from-violet-600 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-violet-700 hover:to-purple-700 transition-all duration-300 flex items-center justify-center">
                  Start Quantum Journey
                  <ArrowRight className="ml-2 w-5 h-5" />
                </button>
                <button className="border border-violet-400 text-violet-400 px-8 py-4 rounded-lg font-semibold hover:bg-violet-400 hover:text-slate-900 transition-all duration-300 flex items-center justify-center">
                  <Atom className="mr-2 w-5 h-5" />
                  View Demo
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20 px-4">
          <div className="container mx-auto max-w-7xl">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-white mb-4">Quantum Capabilities</h2>
              <p className="text-xl text-gray-300">Advanced quantum computing solutions</p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {features.map((feature, index) => (
                <div key={index} className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 border border-violet-500/20 hover:border-violet-400/40 transition-all duration-300">
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="w-6 h-6 text-violet-400 flex-shrink-0 mt-1" />
                    <span className="text-gray-300">{feature}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-20 px-4 bg-slate-800/30">
          <div className="container mx-auto max-w-7xl">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-white mb-4">Quantum Advantages</h2>
              <p className="text-xl text-gray-300">Revolutionary computing power and capabilities</p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-violet-500 to-purple-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Cpu className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-3xl font-bold text-white mb-2">1000x</h3>
                <p className="text-gray-300">Faster Processing</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Brain className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-3xl font-bold text-white mb-2">Breakthrough</h3>
                <p className="text-gray-300">Discoveries</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Lock className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-3xl font-bold text-white mb-2">Unbreakable</h3>
                <p className="text-gray-300">Encryption</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-orange-500 to-red-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <TrendingUp className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-3xl font-bold text-white mb-2">Revolutionary</h3>
                <p className="text-gray-300">Optimization</p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4">
          <div className="container mx-auto max-w-4xl text-center">
            <h2 className="text-4xl font-bold text-white mb-6">
              Ready to Enter the Quantum Era?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Join the quantum revolution with our AI-powered quantum computing solutions for unprecedented computational power.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gradient-to-r from-violet-600 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-violet-700 hover:to-purple-700 transition-all duration-300">
                Start Quantum Journey
              </button>
              <button className="border border-violet-400 text-violet-400 px-8 py-4 rounded-lg font-semibold hover:bg-violet-400 hover:text-slate-900 transition-all duration-300">
                Contact Quantum Experts
              </button>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default AiQuantumComputing;

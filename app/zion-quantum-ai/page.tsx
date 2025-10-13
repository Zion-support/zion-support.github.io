import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { 
  Atom, 
  Brain, 
  Zap, 
  Shield, 
  BarChart3, 
  Cpu, 
  Database, 
  Lock, 
  CheckCircle, 
  ArrowRight,
  Star,
  Users,
  Award,
  Globe,
  Sparkles
} from 'lucide-react';

const ZionQuantumAI = () => {
  const features = [
    {
      icon: <Atom className="w-8 h-8 text-cyan-400" />,
      title: "Quantum Machine Learning",
      description: "Leverage quantum computing power for exponentially faster AI model training and inference",
      benefit: "1000x faster processing"
    },
    {
      icon: <Brain className="w-8 h-8 text-purple-400" />,
      title: "Quantum Neural Networks",
      description: "Advanced quantum neural networks that can process complex patterns impossible for classical computers",
      benefit: "Unlimited complexity handling"
    },
    {
      icon: <Zap className="w-8 h-8 text-yellow-400" />,
      title: "Quantum Optimization",
      description: "Solve optimization problems with quantum algorithms for logistics, finance, and resource allocation",
      benefit: "Exponential speed improvements"
    },
    {
      icon: <Shield className="w-8 h-8 text-green-400" />,
      title: "Quantum Cryptography",
      description: "Unbreakable encryption using quantum key distribution and quantum-resistant algorithms",
      benefit: "Military-grade security"
    }
  ];

  const pricingPlans = [
    {
      name: "Quantum Starter",
      price: "$299",
      period: "/month",
      description: "Perfect for small teams exploring quantum AI",
      features: [
        "Up to 10 quantum computations/day",
        "Basic quantum ML models",
        "Standard support",
        "5GB quantum data storage"
      ],
      popular: false
    },
    {
      name: "Quantum Professional",
      price: "$799",
      period: "/month",
      description: "Advanced quantum AI for growing businesses",
      features: [
        "Up to 100 quantum computations/day",
        "Advanced quantum neural networks",
        "Priority support",
        "50GB quantum data storage",
        "Custom quantum algorithms"
      ],
      popular: true
    },
    {
      name: "Quantum Enterprise",
      price: "$2,499",
      period: "/month",
      description: "Full quantum AI suite for large organizations",
      features: [
        "Unlimited quantum computations",
        "Custom quantum hardware access",
        "24/7 dedicated support",
        "Unlimited quantum data storage",
        "White-label solutions",
        "On-premise deployment"
      ],
      popular: false
    }
  ];

  const useCases = [
    {
      title: "Financial Trading",
      description: "Quantum algorithms for high-frequency trading and risk analysis",
      icon: <BarChart3 className="w-6 h-6" />
    },
    {
      title: "Drug Discovery",
      description: "Quantum simulation for molecular modeling and pharmaceutical research",
      icon: <Atom className="w-6 h-6" />
    },
    {
      title: "Climate Modeling",
      description: "Complex climate simulations using quantum computing power",
      icon: <Globe className="w-6 h-6" />
    },
    {
      title: "Cybersecurity",
      description: "Quantum-resistant encryption and threat detection",
      icon: <Shield className="w-6 h-6" />
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Helmet>
        <title>Zion Quantum AI - Revolutionary Quantum-Powered AI Solutions | Zion Tech Group</title>
        <meta name="description" content="Transform your business with Zion Quantum AI - the world's first quantum-powered AI platform. Experience exponential speed improvements and unlimited computational power." />
        <meta name="keywords" content="quantum AI, quantum computing, quantum machine learning, quantum neural networks, quantum optimization, quantum cryptography" />
        <link rel="canonical" href="https://ziontechgroup.com/zion-quantum-ai" />
      </Helmet>

      {/* Hero Section */}
      <section className="relative py-20 px-4 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 to-purple-500/10 animate-pulse"></div>
        <div className="container mx-auto max-w-7xl relative z-10">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 rounded-full px-6 py-3 mb-8 border border-cyan-500/30">
              <Atom className="w-5 h-5 text-cyan-400" />
              <span className="text-cyan-300 font-medium">Revolutionary Quantum AI</span>
            </div>
            <h1 className="text-6xl md:text-8xl font-bold mb-6 bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
              Zion Quantum AI
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto">
              The world's first quantum-powered AI platform that delivers exponential speed improvements 
              and unlimited computational power for your most complex challenges.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                to="/contact" 
                className="inline-flex items-center gap-2 bg-gradient-to-r from-cyan-500 to-purple-500 text-white px-8 py-4 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-600 transition-all duration-300 transform hover:scale-105"
              >
                Start Quantum Journey
                <ArrowRight className="w-5 h-5" />
              </Link>
              <Link 
                to="/demo" 
                className="inline-flex items-center gap-2 border border-cyan-500/50 text-cyan-300 px-8 py-4 rounded-lg font-semibold hover:bg-cyan-500/10 transition-all duration-300"
              >
                Watch Demo
                <Sparkles className="w-5 h-5" />
              </Link>
            </div>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-16">
            <div className="text-center p-6 bg-gradient-to-br from-cyan-500/10 to-purple-500/10 rounded-xl border border-cyan-500/20">
              <div className="text-4xl font-bold text-cyan-400 mb-2">1000x</div>
              <div className="text-gray-300">Faster Processing</div>
            </div>
            <div className="text-center p-6 bg-gradient-to-br from-purple-500/10 to-pink-500/10 rounded-xl border border-purple-500/20">
              <div className="text-4xl font-bold text-purple-400 mb-2">99.9%</div>
              <div className="text-gray-300">Accuracy Rate</div>
            </div>
            <div className="text-center p-6 bg-gradient-to-br from-pink-500/10 to-red-500/10 rounded-xl border border-pink-500/20">
              <div className="text-4xl font-bold text-pink-400 mb-2">24/7</div>
              <div className="text-gray-300">Quantum Access</div>
            </div>
            <div className="text-center p-6 bg-gradient-to-br from-green-500/10 to-emerald-500/10 rounded-xl border border-green-500/20">
              <div className="text-4xl font-bold text-green-400 mb-2">∞</div>
              <div className="text-gray-300">Possibilities</div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-7xl">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
              Quantum-Powered Features
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Experience the future of AI with quantum computing capabilities that were impossible before.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="group p-8 bg-gradient-to-br from-slate-800/50 to-slate-900/50 rounded-2xl border border-slate-700/50 hover:border-cyan-500/50 transition-all duration-300 hover:transform hover:scale-105">
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-gradient-to-br from-cyan-500/20 to-purple-500/20 rounded-lg group-hover:scale-110 transition-transform duration-300">
                    {feature.icon}
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-white mb-3">{feature.title}</h3>
                    <p className="text-gray-300 mb-4">{feature.description}</p>
                    <div className="inline-flex items-center gap-2 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 px-4 py-2 rounded-full">
                      <CheckCircle className="w-4 h-4 text-green-400" />
                      <span className="text-cyan-300 font-medium">{feature.benefit}</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Use Cases Section */}
      <section className="py-20 px-4 bg-gradient-to-r from-slate-900/50 to-purple-900/50">
        <div className="container mx-auto max-w-7xl">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              Revolutionary Use Cases
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Discover how quantum AI is transforming industries and solving previously impossible problems.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {useCases.map((useCase, index) => (
              <div key={index} className="group p-6 bg-gradient-to-br from-slate-800/30 to-slate-900/30 rounded-xl border border-slate-700/30 hover:border-purple-500/50 transition-all duration-300 hover:transform hover:scale-105">
                <div className="p-3 bg-gradient-to-br from-purple-500/20 to-pink-500/20 rounded-lg w-fit mb-4 group-hover:scale-110 transition-transform duration-300">
                  {useCase.icon}
                </div>
                <h3 className="text-xl font-bold text-white mb-3">{useCase.title}</h3>
                <p className="text-gray-300">{useCase.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-7xl">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
              Quantum Pricing
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Choose the quantum power level that matches your computational needs.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {pricingPlans.map((plan, index) => (
              <div key={index} className={`relative p-8 rounded-2xl border transition-all duration-300 hover:transform hover:scale-105 ${
                plan.popular 
                  ? 'bg-gradient-to-br from-cyan-500/20 to-purple-500/20 border-cyan-500/50' 
                  : 'bg-gradient-to-br from-slate-800/50 to-slate-900/50 border-slate-700/50'
              }`}>
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <div className="bg-gradient-to-r from-cyan-500 to-purple-500 text-white px-6 py-2 rounded-full text-sm font-semibold">
                      Most Popular
                    </div>
                  </div>
                )}
                
                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                  <div className="flex items-baseline justify-center gap-1">
                    <span className="text-5xl font-bold text-cyan-400">{plan.price}</span>
                    <span className="text-gray-400">{plan.period}</span>
                  </div>
                  <p className="text-gray-300 mt-2">{plan.description}</p>
                </div>

                <ul className="space-y-4 mb-8">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center gap-3">
                      <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0" />
                      <span className="text-gray-300">{feature}</span>
                    </li>
                  ))}
                </ul>

                <Link 
                  to="/contact" 
                  className={`w-full py-4 rounded-lg font-semibold text-center transition-all duration-300 ${
                    plan.popular
                      ? 'bg-gradient-to-r from-cyan-500 to-purple-500 text-white hover:from-cyan-600 hover:to-purple-600'
                      : 'border border-cyan-500/50 text-cyan-300 hover:bg-cyan-500/10'
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
      <section className="py-20 px-4 bg-gradient-to-r from-cyan-900/30 to-purple-900/30">
        <div className="container mx-auto max-w-7xl text-center">
          <h2 className="text-5xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
            Ready for the Quantum Revolution?
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Join the pioneers who are already experiencing the power of quantum AI. 
            Contact us today to start your quantum journey.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              to="/contact" 
              className="inline-flex items-center gap-2 bg-gradient-to-r from-cyan-500 to-purple-500 text-white px-8 py-4 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-600 transition-all duration-300 transform hover:scale-105"
            >
              Contact Our Quantum Experts
              <ArrowRight className="w-5 h-5" />
            </Link>
            <a 
              href="tel:+13024640950" 
              className="inline-flex items-center gap-2 border border-cyan-500/50 text-cyan-300 px-8 py-4 rounded-lg font-semibold hover:bg-cyan-500/10 transition-all duration-300"
            >
              Call +1 302 464 0950
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ZionQuantumAI;
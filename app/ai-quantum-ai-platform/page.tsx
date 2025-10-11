'use client';
import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { 
  Cpu, 
  Zap, 
  Brain, 
  CheckCircle, 
  ArrowRight, 
  Star, 
  Clock,
  Target,
  Settings,
  BarChart,
  Users,
  Shield,
  Globe,
  FileText,
  Heart,
  DollarSign,
  TrendingUp,
  MessageSquare,
  Atom,
  Layers,
  Database,
  Network
} from 'lucide-react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

const AiQuantumAiPlatformPage: React.FC = () => {
  const [selectedPlan, setSelectedPlan] = useState('professional');

  const features = [
    {
      icon: <Atom className="w-6 h-6 text-cyan-400" />,
      title: "Quantum Computing Integration",
      description: "Leverage quantum algorithms for exponentially faster AI model training and optimization, solving complex problems in seconds instead of hours."
    },
    {
      icon: <Brain className="w-6 h-6 text-cyan-400" />,
      title: "Quantum Neural Networks",
      description: "Advanced quantum neural networks that process information in quantum superposition, enabling unprecedented pattern recognition capabilities."
    },
    {
      icon: <Zap className="w-6 h-6 text-cyan-400" />,
      title: "Quantum Speed Processing",
      description: "Process massive datasets and complex algorithms at quantum speed, delivering results 1000x faster than classical computing."
    },
    {
      icon: <Layers className="w-6 h-6 text-cyan-400" />,
      title: "Hybrid Quantum-Classical AI",
      description: "Seamlessly combine quantum and classical computing for optimal performance across different types of AI workloads."
    },
    {
      icon: <Database className="w-6 h-6 text-cyan-400" />,
      title: "Quantum Data Encryption",
      description: "Ultra-secure quantum encryption for AI model training and data processing, ensuring complete privacy and security."
    },
    {
      icon: <Network className="w-6 h-6 text-cyan-400" />,
      title: "Distributed Quantum Processing",
      description: "Distribute quantum AI workloads across multiple quantum processors for maximum efficiency and scalability."
    }
  ];

  const applications = [
    {
      title: "Drug Discovery & Molecular Simulation",
      description: "Accelerate pharmaceutical research by simulating molecular interactions and drug compounds with quantum precision.",
      icon: <Atom className="w-8 h-8 text-cyan-400" />,
      benefits: ["10x faster drug discovery", "Higher accuracy predictions", "Reduced R&D costs"]
    },
    {
      title: "Financial Risk Modeling",
      description: "Advanced quantum algorithms for portfolio optimization, risk assessment, and fraud detection in financial markets.",
      icon: <TrendingUp className="w-8 h-8 text-cyan-400" />,
      benefits: ["Real-time risk analysis", "Complex portfolio optimization", "Fraud detection accuracy"]
    },
    {
      title: "Climate & Weather Prediction",
      description: "Revolutionary climate modeling using quantum computing to predict weather patterns and climate change impacts.",
      icon: <Globe className="w-8 h-8 text-cyan-400" />,
      benefits: ["Longer-term predictions", "Higher accuracy models", "Climate impact analysis"]
    },
    {
      title: "Supply Chain Optimization",
      description: "Quantum-powered optimization for complex supply chains, logistics, and resource allocation problems.",
      icon: <Layers className="w-8 h-8 text-cyan-400" />,
      benefits: ["Optimal route planning", "Resource efficiency", "Cost reduction"]
    }
  ];

  const pricingPlans = [
    {
      name: "Quantum Starter",
      price: "$999",
      period: "/month",
      description: "For research institutions",
      features: [
        "Up to 100 quantum hours/month",
        "Basic quantum algorithms",
        "Standard quantum processors",
        "Email support",
        "5 concurrent users"
      ],
      popular: false
    },
    {
      name: "Quantum Professional",
      price: "$2,999",
      period: "/month",
      description: "For growing AI companies",
      features: [
        "Up to 500 quantum hours/month",
        "Advanced quantum algorithms",
        "Premium quantum processors",
        "Priority support",
        "25 concurrent users",
        "Custom model training",
        "API access"
      ],
      popular: true
    },
    {
      name: "Quantum Enterprise",
      price: "$9,999",
      period: "/month",
      description: "For large organizations",
      features: [
        "Unlimited quantum hours",
        "Full quantum AI suite",
        "Dedicated quantum resources",
        "24/7 dedicated support",
        "Unlimited users",
        "Custom development",
        "White-label solutions"
      ],
      popular: false
    }
  ];

  const capabilities = [
    {
      title: "Quantum Machine Learning",
      description: "Train ML models using quantum algorithms for superior performance on complex datasets.",
      icon: <Brain className="w-6 h-6 text-cyan-400" />
    },
    {
      title: "Quantum Optimization",
      description: "Solve NP-hard optimization problems that are intractable for classical computers.",
      icon: <Target className="w-6 h-6 text-cyan-400" />
    },
    {
      title: "Quantum Simulation",
      description: "Simulate quantum systems and complex physical phenomena with unprecedented accuracy.",
      icon: <Cpu className="w-6 h-6 text-cyan-400" />
    },
    {
      title: "Quantum Cryptography",
      description: "Implement quantum-safe encryption and secure communication protocols.",
      icon: <Shield className="w-6 h-6 text-cyan-400" />
    }
  ];

  return (
    <>
      <Helmet>
        <title>Quantum AI Platform - Next-Generation Quantum-Powered AI | Zion Tech Group</title>
        <meta name="description" content="Revolutionary quantum AI platform combining quantum computing with artificial intelligence. 1000x faster processing, quantum neural networks, and breakthrough applications." />
        <meta name="keywords" content="quantum AI, quantum computing, quantum machine learning, quantum algorithms, quantum neural networks, quantum optimization" />
        <link rel="canonical" href="https://ziontechgroup.com/ai-quantum-ai-platform" />
      </Helmet>
      
      <Navigation />
      
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        {/* Hero Section */}
        <section className="relative py-20 px-4">
          <div className="max-w-7xl mx-auto text-center">
            <div className="inline-flex items-center px-4 py-2 bg-cyan-500/10 border border-cyan-500/20 rounded-full text-cyan-400 text-sm font-medium mb-6">
              <Atom className="w-4 h-4 mr-2" />
              Next-Generation Quantum AI
            </div>
            
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
              Quantum AI
              <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent"> Platform</span>
            </h1>
            
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Experience the future of artificial intelligence with our revolutionary quantum AI platform. 
              Combine the power of quantum computing with advanced AI to solve previously impossible problems.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                to="/demo" 
                className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-cyan-500 to-purple-600 text-white font-semibold rounded-lg hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 transform hover:scale-105"
              >
                Request Demo
                <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
              <Link 
                to="/contact" 
                className="inline-flex items-center px-8 py-4 border border-gray-600 text-white font-semibold rounded-lg hover:bg-gray-800 transition-all duration-300"
              >
                Contact Quantum Team
              </Link>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-white mb-4">
                Revolutionary Quantum AI Features
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Harness the power of quantum computing to unlock new possibilities in artificial intelligence.
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {features.map((feature, index) => (
                <div key={index} className="bg-slate-800/50 backdrop-blur-sm border border-gray-700 rounded-xl p-6 hover:border-cyan-500/50 transition-all duration-300">
                  <div className="flex items-center mb-4">
                    {feature.icon}
                    <h3 className="text-xl font-semibold text-white ml-3">
                      {feature.title}
                    </h3>
                  </div>
                  <p className="text-gray-300">
                    {feature.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Applications Section */}
        <section className="py-20 px-4 bg-slate-800/30">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-white mb-4">
                Breakthrough Applications
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Solve complex problems that were previously impossible with classical computing alone.
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 gap-8">
              {applications.map((app, index) => (
                <div key={index} className="bg-slate-800/50 backdrop-blur-sm border border-gray-700 rounded-xl p-8">
                  <div className="flex items-center mb-6">
                    {app.icon}
                    <h3 className="text-2xl font-semibold text-white ml-4">
                      {app.title}
                    </h3>
                  </div>
                  <p className="text-gray-300 mb-6">
                    {app.description}
                  </p>
                  <div className="space-y-2">
                    {app.benefits.map((benefit, benefitIndex) => (
                      <div key={benefitIndex} className="flex items-center text-sm text-cyan-400">
                        <CheckCircle className="w-4 h-4 text-cyan-400 mr-2 flex-shrink-0" />
                        {benefit}
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Capabilities Section */}
        <section className="py-20 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-white mb-4">
                Quantum AI Capabilities
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Advanced quantum computing capabilities integrated with cutting-edge AI technologies.
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {capabilities.map((capability, index) => (
                <div key={index} className="text-center">
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-cyan-500/10 border border-cyan-500/20 rounded-full mb-6">
                    {capability.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-4">
                    {capability.title}
                  </h3>
                  <p className="text-gray-300">
                    {capability.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Pricing Section */}
        <section className="py-20 px-4 bg-slate-800/30">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-white mb-4">
                Quantum AI Pricing
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Access cutting-edge quantum AI technology with flexible pricing plans for every organization.
              </p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-8">
              {pricingPlans.map((plan, index) => (
                <div 
                  key={index} 
                  className={`relative bg-slate-800/50 backdrop-blur-sm border rounded-xl p-8 ${
                    plan.popular 
                      ? 'border-cyan-500 shadow-2xl shadow-cyan-500/20' 
                      : 'border-gray-700'
                  }`}
                >
                  {plan.popular && (
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                      <span className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-4 py-2 rounded-full text-sm font-semibold">
                        Most Popular
                      </span>
                    </div>
                  )}
                  
                  <div className="text-center mb-8">
                    <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                    <p className="text-gray-400 mb-4">{plan.description}</p>
                    <div className="flex items-baseline justify-center">
                      <span className="text-5xl font-bold text-white">{plan.price}</span>
                      <span className="text-gray-400 ml-2">{plan.period}</span>
                    </div>
                  </div>
                  
                  <ul className="space-y-4 mb-8">
                    {plan.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center">
                        <CheckCircle className="w-5 h-5 text-cyan-400 mr-3 flex-shrink-0" />
                        <span className="text-gray-300">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  
                  <Link 
                    to="/contact" 
                    className={`w-full inline-flex items-center justify-center px-6 py-3 rounded-lg font-semibold transition-all duration-300 ${
                      plan.popular
                        ? 'bg-gradient-to-r from-cyan-500 to-purple-600 text-white hover:from-cyan-600 hover:to-purple-700'
                        : 'border border-gray-600 text-white hover:bg-gray-800'
                    }`}
                  >
                    Get Started
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4 bg-gradient-to-r from-cyan-500/10 to-purple-500/10">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold text-white mb-6">
              Ready for the Quantum AI Revolution?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Join the pioneers of quantum AI and unlock solutions to problems that were previously impossible to solve.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                to="/demo" 
                className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-cyan-500 to-purple-600 text-white font-semibold rounded-lg hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 transform hover:scale-105"
              >
                Request Demo
                <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
              <Link 
                to="/contact" 
                className="inline-flex items-center px-8 py-4 border border-gray-600 text-white font-semibold rounded-lg hover:bg-gray-800 transition-all duration-300"
              >
                Contact Quantum Team
              </Link>
            </div>
          </div>
        </section>
      </div>
      
      <Footer />
    </>
  );
};

export default AiQuantumAiPlatformPage;
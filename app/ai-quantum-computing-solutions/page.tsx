import React from 'react';
import { Link } from 'react-router-dom';
import { Brain, Zap, Shield, BarChart3, Cloud, ArrowRight, CheckCircle, Star, Users, Award, Clock, Target, Sparkles, Cpu, Database, Lock, Globe } from 'lucide-react';
import EnhancedSEO from '../components/EnhancedSEO';
import FuturisticCard from '../components/FuturisticCard';
import ResponsiveContainer from '../components/ResponsiveContainer';
import ResponsiveGrid from '../components/ResponsiveGrid';

const AIQuantumComputingSolutions = () => {
  const features = [
    {
      title: "Quantum Machine Learning",
      description: "Leverage quantum algorithms for exponentially faster machine learning model training and optimization",
      icon: <Brain className="w-8 h-8" />,
      benefits: ["1000x faster training", "Quantum advantage", "Advanced pattern recognition"]
    },
    {
      title: "Quantum Cryptography",
      description: "Unbreakable encryption using quantum key distribution and quantum-resistant algorithms",
      icon: <Shield className="w-8 h-8" />,
      benefits: ["Unbreakable security", "Future-proof encryption", "Quantum key distribution"]
    },
    {
      title: "Quantum Optimization",
      description: "Solve complex optimization problems with quantum annealing and variational algorithms",
      icon: <Target className="w-8 h-8" />,
      benefits: ["Exponential speedup", "Complex problem solving", "Real-time optimization"]
    },
    {
      title: "Quantum Simulation",
      description: "Simulate quantum systems for drug discovery, materials science, and financial modeling",
      icon: <Cpu className="w-8 h-8" />,
      benefits: ["Molecular simulation", "Drug discovery", "Materials research"]
    }
  ];

  const useCases = [
    {
      industry: "Financial Services",
      applications: ["Portfolio optimization", "Risk analysis", "Fraud detection", "Algorithmic trading"],
      savings: "Up to 90% reduction in computation time"
    },
    {
      industry: "Healthcare & Pharmaceuticals",
      applications: ["Drug discovery", "Protein folding", "Molecular simulation", "Treatment optimization"],
      savings: "10x faster drug development cycles"
    },
    {
      industry: "Logistics & Supply Chain",
      applications: ["Route optimization", "Inventory management", "Demand forecasting", "Resource allocation"],
      savings: "40% cost reduction in logistics"
    },
    {
      industry: "Energy & Utilities",
      applications: ["Grid optimization", "Renewable energy integration", "Load balancing", "Predictive maintenance"],
      savings: "30% improvement in energy efficiency"
    }
  ];

  const pricing = [
    {
      name: "Quantum Starter",
      price: "$2,999",
      period: "per month",
      description: "Perfect for small teams exploring quantum computing",
      features: [
        "5 quantum computing hours/month",
        "Basic quantum algorithms library",
        "Standard support",
        "API access",
        "Documentation & tutorials"
      ],
      popular: false
    },
    {
      name: "Quantum Professional",
      price: "$9,999",
      period: "per month",
      description: "Ideal for growing businesses with complex optimization needs",
      features: [
        "25 quantum computing hours/month",
        "Advanced quantum algorithms",
        "Priority support",
        "Custom algorithm development",
        "Integration assistance",
        "Performance monitoring"
      ],
      popular: true
    },
    {
      name: "Quantum Enterprise",
      price: "$29,999",
      period: "per month",
      description: "Comprehensive solution for large-scale quantum applications",
      features: [
        "Unlimited quantum computing hours",
        "Full quantum algorithm suite",
        "24/7 dedicated support",
        "Custom quantum hardware access",
        "White-label solutions",
        "On-site consultation",
        "SLA guarantees"
      ],
      popular: false
    }
  ];

  const stats = [
    { number: "1000x", label: "Faster Processing", icon: <Zap className="w-6 h-6" /> },
    { number: "99.9%", label: "Accuracy Rate", icon: <Award className="w-6 h-6" /> },
    { number: "50+", label: "Quantum Algorithms", icon: <Brain className="w-6 h-6" /> },
    { number: "24/7", label: "Expert Support", icon: <Users className="w-6 h-6" /> }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 relative overflow-hidden">
      <EnhancedSEO
        title="AI Quantum Computing Solutions | Zion Tech Group - Revolutionary Quantum AI"
        description="Transform your business with AI-powered quantum computing solutions. Unlock exponential processing power, unbreakable security, and revolutionary optimization capabilities."
        keywords="quantum computing, AI quantum, quantum machine learning, quantum cryptography, quantum optimization, quantum simulation, quantum algorithms"
        canonical="https://ziontechgroup.com/ai-quantum-computing-solutions"
      />

      {/* Hero Section */}
      <section className="pt-20 pb-16 px-4 sm:px-6 lg:px-8 relative">
        <ResponsiveContainer className="text-center">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-purple-500/20 to-cyan-500/20 border border-purple-500/30 mb-6">
            <Sparkles className="w-4 h-4 text-purple-400 mr-2" />
            <span className="text-purple-400 text-sm font-medium">Revolutionary Quantum AI Technology</span>
          </div>
          
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-cyan-400 to-pink-400">
              AI Quantum Computing Solutions
            </span>
          </h1>
          
          <p className="text-lg md:text-xl lg:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto leading-relaxed">
            Harness the power of quantum computing combined with artificial intelligence to solve 
            the most complex problems in seconds instead of years. Experience exponential speedup 
            and revolutionary capabilities.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
            <Link
              to="/contact"
              className="group bg-gradient-to-r from-purple-500 to-cyan-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-purple-600 hover:to-cyan-700 transition-all duration-300 flex items-center justify-center shadow-lg hover:shadow-purple-500/25 hover:scale-105"
            >
              Start Quantum Journey
              <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link
              to="/demo"
              className="border border-purple-400 text-purple-400 px-8 py-4 rounded-lg font-semibold hover:bg-purple-400 hover:text-slate-900 transition-all duration-300 group hover:scale-105"
            >
              Watch Quantum Demo
              <Sparkles className="w-5 h-5 ml-2 group-hover:rotate-12 transition-transform" />
            </Link>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-5xl mx-auto">
            {stats.map((stat, index) => (
              <div key={index} className="text-center group">
                <div className="w-12 h-12 md:w-16 md:h-16 mx-auto mb-4 rounded-full bg-gradient-to-r from-purple-500/20 to-cyan-500/20 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
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
              Quantum AI Capabilities
            </h2>
            <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
              Experience the future of computing with our comprehensive quantum AI solutions
            </p>
          </div>
          
          <ResponsiveGrid className="gap-8">
            {features.map((feature, index) => (
              <FuturisticCard key={index} className="group">
                <div className="w-16 h-16 rounded-lg bg-gradient-to-r from-purple-500 to-cyan-500 flex items-center justify-center mb-6 mx-auto group-hover:scale-110 transition-transform duration-300">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold text-white mb-4 text-center group-hover:text-purple-400 transition-colors">
                  {feature.title}
                </h3>
                <p className="text-gray-300 text-center mb-6 leading-relaxed">
                  {feature.description}
                </p>
                <div className="space-y-2">
                  {feature.benefits.map((benefit, idx) => (
                    <div key={idx} className="flex items-center text-sm text-cyan-400">
                      <CheckCircle className="w-4 h-4 mr-2 flex-shrink-0" />
                      {benefit}
                    </div>
                  ))}
                </div>
              </FuturisticCard>
            ))}
          </ResponsiveGrid>
        </ResponsiveContainer>
      </section>

      {/* Use Cases Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-slate-800/50 to-purple-800/50">
        <ResponsiveContainer>
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Industry Applications
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Transform your industry with quantum AI solutions
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {useCases.map((useCase, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300">
                <h3 className="text-xl font-semibold text-white mb-4">{useCase.industry}</h3>
                <div className="space-y-3 mb-4">
                  {useCase.applications.map((app, idx) => (
                    <div key={idx} className="flex items-center text-gray-300">
                      <CheckCircle className="w-4 h-4 mr-2 text-cyan-400 flex-shrink-0" />
                      {app}
                    </div>
                  ))}
                </div>
                <div className="text-cyan-400 font-semibold text-sm">
                  {useCase.savings}
                </div>
              </div>
            ))}
          </div>
        </ResponsiveContainer>
      </section>

      {/* Pricing Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <ResponsiveContainer>
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Quantum Computing Pricing
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Choose the perfect quantum computing plan for your needs
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {pricing.map((plan, index) => (
              <div key={index} className={`relative bg-white/10 backdrop-blur-sm rounded-xl p-8 border transition-all duration-300 hover:scale-105 ${
                plan.popular 
                  ? 'border-purple-500/50 shadow-2xl shadow-purple-500/20' 
                  : 'border-white/20 hover:border-purple-500/30'
              }`}>
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-gradient-to-r from-purple-500 to-cyan-500 text-white px-4 py-1 rounded-full text-sm font-semibold">
                      Most Popular
                    </span>
                  </div>
                )}
                
                <div className="text-center mb-6">
                  <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                  <p className="text-gray-300 text-sm mb-4">{plan.description}</p>
                  <div className="flex items-baseline justify-center">
                    <span className="text-4xl font-bold text-white">{plan.price}</span>
                    <span className="text-gray-300 ml-2">{plan.period}</span>
                  </div>
                </div>
                
                <div className="space-y-3 mb-8">
                  {plan.features.map((feature, idx) => (
                    <div key={idx} className="flex items-center text-gray-300">
                      <CheckCircle className="w-4 h-4 mr-3 text-cyan-400 flex-shrink-0" />
                      {feature}
                    </div>
                  ))}
                </div>
                
                <Link
                  to="/contact"
                  className={`w-full py-3 px-6 rounded-lg font-semibold text-center transition-all duration-300 ${
                    plan.popular
                      ? 'bg-gradient-to-r from-purple-500 to-cyan-600 text-white hover:from-purple-600 hover:to-cyan-700'
                      : 'border border-purple-400 text-purple-400 hover:bg-purple-400 hover:text-slate-900'
                  }`}
                >
                  Get Started
                </Link>
              </div>
            ))}
          </div>
        </ResponsiveContainer>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-purple-900/30 to-cyan-900/30">
        <ResponsiveContainer className="text-center">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
            Ready for the Quantum Revolution?
          </h2>
          <p className="text-xl text-gray-300 mb-8 leading-relaxed max-w-4xl mx-auto">
            Join the quantum computing revolution and unlock unprecedented computational power. 
            Contact our quantum experts to discuss your specific needs and get started today.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="bg-gradient-to-r from-purple-500 to-cyan-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-purple-600 hover:to-cyan-700 transition-all duration-300 flex items-center justify-center group shadow-lg hover:shadow-purple-500/25 hover:scale-105"
            >
              Start Quantum Journey
              <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link
              to="/demo"
              className="border border-purple-400 text-purple-400 px-8 py-4 rounded-lg font-semibold hover:bg-purple-400 hover:text-slate-900 transition-all duration-300 group hover:scale-105"
            >
              Schedule Quantum Demo
              <Sparkles className="w-5 h-5 ml-2 group-hover:rotate-12 transition-transform" />
            </Link>
          </div>
        </ResponsiveContainer>
      </section>
    </div>
  );
};

export default AIQuantumComputingSolutions;
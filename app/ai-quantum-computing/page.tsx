import React from "react";
import { Helmet } from "react-helmet-async";
import { ArrowRight, CheckCircle, Star, Cpu, Brain, Atom, Users, Award, Globe, Lock, TrendingUp, Monitor, MessageSquare } from "lucide-react";
import { Link } from "react-router-dom";
import SEOHead from "../components/SEOHead";

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

  const benefits = [
    "Solve problems 1000x faster than classical computers",
    "Breakthrough discoveries in science and medicine",
    "Unbreakable quantum encryption for data security",
    "Revolutionary optimization for complex systems"
  ];

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
      description: "Comprehensive quantum computing solution for large organizations",
      features: [
        "Unlimited quantum circuit executions",
        "Advanced quantum algorithms library",
        "Real quantum hardware access",
        "24/7 priority support",
        "Advanced documentation",
        "Unlimited user accounts",
        "Custom quantum gates",
        "Quantum cloud integration",
        "SLA guarantee"
      ],
      popular: true
    }
  ];

  return (
    <>
      <Helmet>
        <title>AI Quantum Computing - Zion Tech Group</title>
        <meta name="description" content="Revolutionary AI-powered quantum computing solutions. Access real quantum hardware, advanced algorithms, and breakthrough computational capabilities." />
        <meta name="keywords" content="quantum computing, AI quantum, quantum algorithms, quantum hardware, quantum simulation" />
      </Helmet>
      <SEOHead 
        title="AI Quantum Computing"
        description="Revolutionary AI-powered quantum computing solutions. Access real quantum hardware, advanced algorithms, and breakthrough computational capabilities."
        keywords="quantum computing, AI quantum, quantum algorithms, quantum hardware, quantum simulation"
      />
      
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900/20 to-slate-900 text-white">
        {/* Hero Section */}
        <section className="relative py-20 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                AI Quantum Computing
              </h1>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
                Unlock the power of quantum computing with our AI-powered platform. 
                Access real quantum hardware, advanced algorithms, and breakthrough 
                computational capabilities for the next generation of computing.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-bold py-3 px-8 rounded-lg transition-all duration-300 transform hover:scale-105">
                  Start Quantum Journey
                </button>
                <button className="border border-purple-400 text-purple-400 hover:bg-purple-400 hover:text-white font-bold py-3 px-8 rounded-lg transition-all duration-300">
                  Learn More
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold mb-4">Quantum Computing Capabilities</h2>
              <p className="text-xl text-gray-300 max-w-2xl mx-auto">
                Advanced quantum features powered by cutting-edge AI
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {features.map((feature, index) => (
                <div key={index} className="flex items-start space-x-3">
                  <CheckCircle className="w-6 h-6 text-green-400 flex-shrink-0 mt-1" />
                  <span className="text-gray-300">{feature}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-20 px-4 bg-slate-800/30">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold mb-4">Quantum Advantages</h2>
              <p className="text-xl text-gray-300 max-w-2xl mx-auto">
                Experience the revolutionary power of quantum computing
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {benefits.map((benefit, index) => (
                <div key={index} className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Atom className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2">{benefit}</h3>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Pricing Section */}
        <section className="py-20 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold mb-4">Quantum Computing Plans</h2>
              <p className="text-xl text-gray-300 max-w-2xl mx-auto">
                Choose the right quantum computing solution for your needs
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              {pricingPlans.map((plan, index) => (
                <div key={index} className={`bg-slate-800/50 backdrop-blur-sm rounded-xl p-8 border ${plan.popular ? 'border-purple-500' : 'border-slate-700'} hover:border-purple-500 transition-all duration-300`}>
                  {plan.popular && (
                    <div className="text-center mb-4">
                      <span className="bg-gradient-to-r from-purple-600 to-blue-600 text-white px-4 py-2 rounded-full text-sm font-medium">
                        Most Popular
                      </span>
                    </div>
                  )}
                  <div className="text-center mb-6">
                    <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
                    <div className="text-4xl font-bold mb-2">
                      {plan.price}
                      <span className="text-lg text-gray-400">{plan.period}</span>
                    </div>
                    <p className="text-gray-300">{plan.description}</p>
                  </div>
                  <ul className="space-y-3 mb-8">
                    {plan.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center">
                        <CheckCircle className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" />
                        <span className="text-gray-300">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <button className={`w-full py-3 px-6 rounded-lg font-bold transition-all duration-300 ${
                    plan.popular 
                      ? 'bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white' 
                      : 'border border-purple-400 text-purple-400 hover:bg-purple-400 hover:text-white'
                  }`}>
                    Get Started
                  </button>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold mb-6">Ready to Enter the Quantum Era?</h2>
            <p className="text-xl text-gray-300 mb-8">
              Join the quantum computing revolution with our AI-powered platform
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-bold py-4 px-8 rounded-lg transition-all duration-300 transform hover:scale-105">
                Start Quantum Computing
              </button>
              <button className="border border-purple-400 text-purple-400 hover:bg-purple-400 hover:text-white font-bold py-4 px-8 rounded-lg transition-all duration-300">
                Contact Quantum Experts
              </button>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
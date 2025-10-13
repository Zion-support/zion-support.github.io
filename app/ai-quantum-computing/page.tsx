import React from 'react';
import { Brain, Zap, Shield, Cpu, ArrowRight, Star, CheckCircle, DollarSign, Clock, Users } from 'lucide-react';
import EnhancedSEO from '../components/EnhancedSEO';
import FuturisticCard from '../components/FuturisticCard';
import FuturisticButton from '../components/FuturisticButton';
import ResponsiveContainer from '../components/ResponsiveContainer';

const AIQuantumComputingPage = () => {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "AI Quantum Computing Solutions",
    "description": "Revolutionary quantum computing services powered by artificial intelligence for complex problem solving and optimization",
    "provider": {
      "@type": "Organization",
      "name": "Zion Tech Group",
      "url": "https://ziontechgroup.com"
    },
    "offers": {
      "@type": "Offer",
      "price": "5000",
      "priceCurrency": "USD",
      "availability": "https://schema.org/InStock"
    }
  };

  const features = [
    {
      title: "Quantum Machine Learning",
      description: "Advanced quantum algorithms for machine learning tasks that are impossible with classical computers",
      icon: <Brain className="w-8 h-8" />,
      benefits: ["1000x faster processing", "Complex optimization", "Quantum advantage"]
    },
    {
      title: "Quantum Cryptography",
      description: "Unbreakable encryption using quantum key distribution and quantum-resistant algorithms",
      icon: <Shield className="w-8 h-8" />,
      benefits: ["Unhackable security", "Future-proof encryption", "Quantum-safe protocols"]
    },
    {
      title: "Quantum Simulation",
      description: "Simulate complex quantum systems for drug discovery, materials science, and financial modeling",
      icon: <Cpu className="w-8 h-8" />,
      benefits: ["Molecular modeling", "Financial optimization", "Scientific breakthroughs"]
    },
    {
      title: "Quantum Optimization",
      description: "Solve NP-hard optimization problems in logistics, supply chain, and resource allocation",
      icon: <Zap className="w-8 h-8" />,
      benefits: ["Route optimization", "Resource allocation", "Cost reduction"]
    }
  ];

  const pricingPlans = [
    {
      name: "Quantum Starter",
      price: "$5,000",
      period: "month",
      description: "Basic quantum computing access for small projects",
      features: [
        "10 hours quantum compute time",
        "Basic quantum algorithms",
        "Email support",
        "Standard security"
      ],
      popular: false
    },
    {
      name: "Quantum Professional",
      price: "$15,000",
      period: "month",
      description: "Advanced quantum solutions for enterprise needs",
      features: [
        "50 hours quantum compute time",
        "Custom quantum algorithms",
        "Priority support",
        "Advanced security",
        "API access",
        "Custom integrations"
      ],
      popular: true
    },
    {
      name: "Quantum Enterprise",
      price: "$50,000",
      period: "month",
      description: "Full quantum computing suite for large organizations",
      features: [
        "Unlimited quantum compute time",
        "Dedicated quantum hardware",
        "24/7 support",
        "Military-grade security",
        "Custom development",
        "On-site consultation"
      ],
      popular: false
    }
  ];

  const useCases = [
    {
      industry: "Pharmaceuticals",
      application: "Drug Discovery",
      description: "Accelerate molecular simulation for new drug development",
      results: "50% faster drug discovery process"
    },
    {
      industry: "Finance",
      application: "Portfolio Optimization",
      description: "Optimize investment portfolios using quantum algorithms",
      results: "30% better returns with lower risk"
    },
    {
      industry: "Logistics",
      application: "Supply Chain Optimization",
      description: "Optimize complex supply chain networks and routing",
      results: "40% reduction in logistics costs"
    },
    {
      industry: "Energy",
      application: "Grid Optimization",
      description: "Optimize energy distribution and renewable integration",
      results: "25% improvement in grid efficiency"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <EnhancedSEO
        title="AI Quantum Computing Solutions | Zion Tech Group"
        description="Revolutionary quantum computing services powered by AI. Solve complex problems with quantum advantage. Starting at $5,000/month."
        keywords="quantum computing, AI quantum, quantum machine learning, quantum cryptography, quantum optimization"
        structuredData={structuredData}
      />
      
      <ResponsiveContainer>
        {/* Hero Section */}
        <div className="text-center py-20">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-purple-500/20 border border-purple-500/30 mb-6">
            <Star className="w-5 h-5 text-purple-400 mr-2" />
            <span className="text-purple-300 font-medium">Next-Generation Computing</span>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-purple-400 via-pink-400 to-cyan-400 bg-clip-text text-transparent">
            AI Quantum Computing
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto">
            Harness the power of quantum computing combined with artificial intelligence to solve 
            the world's most complex problems with unprecedented speed and accuracy.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <FuturisticButton
              href="/contact"
              className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700"
            >
              Get Quantum Access
              <ArrowRight className="w-5 h-5 ml-2" />
            </FuturisticButton>
            <FuturisticButton
              href="#pricing"
              variant="outline"
              className="border-purple-500 text-purple-300 hover:bg-purple-500/10"
            >
              View Pricing
            </FuturisticButton>
          </div>
        </div>

        {/* Features Section */}
        <div className="py-20">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Quantum-Powered Solutions
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Experience the future of computing with our AI-enhanced quantum solutions
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <FuturisticCard key={index} className="group hover:scale-105 transition-all duration-300">
                <div className="text-center">
                  <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 mb-6 group-hover:scale-110 transition-transform">
                    {feature.icon}
                  </div>
                  <h3 className="text-xl font-bold text-white mb-4">{feature.title}</h3>
                  <p className="text-gray-300 mb-4">{feature.description}</p>
                  <ul className="space-y-2">
                    {feature.benefits.map((benefit, idx) => (
                      <li key={idx} className="flex items-center text-sm text-green-400">
                        <CheckCircle className="w-4 h-4 mr-2" />
                        {benefit}
                      </li>
                    ))}
                  </ul>
                </div>
              </FuturisticCard>
            ))}
          </div>
        </div>

        {/* Use Cases Section */}
        <div className="py-20">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Real-World Applications
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              See how quantum computing is transforming industries
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            {useCases.map((useCase, index) => (
              <FuturisticCard key={index} className="p-8">
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 rounded-lg bg-gradient-to-r from-purple-500 to-pink-500 flex items-center justify-center">
                      <Cpu className="w-6 h-6 text-white" />
                    </div>
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center space-x-2 mb-2">
                      <span className="text-sm font-medium text-purple-400">{useCase.industry}</span>
                      <span className="text-gray-400">•</span>
                      <span className="text-sm text-gray-300">{useCase.application}</span>
                    </div>
                    <h3 className="text-lg font-semibold text-white mb-2">{useCase.description}</h3>
                    <p className="text-green-400 font-medium">{useCase.results}</p>
                  </div>
                </div>
              </FuturisticCard>
            ))}
          </div>
        </div>

        {/* Pricing Section */}
        <div id="pricing" className="py-20">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Quantum Computing Plans
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Choose the quantum computing solution that fits your needs
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {pricingPlans.map((plan, index) => (
              <FuturisticCard 
                key={index} 
                className={`relative ${plan.popular ? 'ring-2 ring-purple-500 scale-105' : ''}`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-4 py-1 rounded-full text-sm font-medium">
                      Most Popular
                    </span>
                  </div>
                )}
                
                <div className="text-center p-8">
                  <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                  <p className="text-gray-300 mb-6">{plan.description}</p>
                  
                  <div className="mb-8">
                    <span className="text-4xl font-bold text-white">{plan.price}</span>
                    <span className="text-gray-400">/{plan.period}</span>
                  </div>
                  
                  <ul className="space-y-4 mb-8">
                    {plan.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center text-gray-300">
                        <CheckCircle className="w-5 h-5 text-green-400 mr-3" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  
                  <FuturisticButton
                    href="/contact"
                    className={`w-full ${
                      plan.popular 
                        ? 'bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700' 
                        : 'border border-purple-500 text-purple-300 hover:bg-purple-500/10'
                    }`}
                  >
                    Get Started
                    <ArrowRight className="w-5 h-5 ml-2" />
                  </FuturisticButton>
                </div>
              </FuturisticCard>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="py-20 text-center">
          <FuturisticCard className="max-w-4xl mx-auto p-12">
            <h2 className="text-4xl font-bold text-white mb-6">
              Ready to Experience Quantum Computing?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Join the quantum revolution and solve problems that were previously impossible. 
              Contact our quantum computing experts today.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <FuturisticButton
                href="/contact"
                className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700"
              >
                Schedule Quantum Consultation
                <ArrowRight className="w-5 h-5 ml-2" />
              </FuturisticButton>
              <FuturisticButton
                href="tel:+13024640950"
                variant="outline"
                className="border-purple-500 text-purple-300 hover:bg-purple-500/10"
              >
                <Phone className="w-5 h-5 mr-2" />
                Call +1 302 464 0950
              </FuturisticButton>
            </div>
          </FuturisticCard>
        </div>
      </ResponsiveContainer>
    </div>
  );
};

export default AIQuantumComputingPage;
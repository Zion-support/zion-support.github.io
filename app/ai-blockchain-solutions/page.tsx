'use client';
import React from 'react';
import { Lock, Brain, Zap, Shield, Target, ArrowRight, CheckCircle, Users, Palette, CreditCard, Stethoscope, Clock3, Navigation, TrendingDown, Truck } from 'lucide-react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

const AIBlockchainSolutionsPage: React.FC = () => {
  const features = [
    {
      icon: Lock,
      title: 'Smart Contract AI',
      description: 'AI-powered smart contracts that automatically execute based on complex conditions and machine learning predictions.',
      benefits: ['Automated execution', 'ML predictions', 'Complex conditions', 'Self-updating contracts']
    },
    {
      icon: Brain,
      title: 'Decentralized AI Networks',
      description: 'Distributed AI networks that operate across blockchain nodes for enhanced security and performance.',
      benefits: ['Distributed computing', 'Enhanced security', 'Scalable AI', 'Decentralized governance']
    },
    {
      icon: Zap,
      title: 'AI-Powered Consensus',
      description: 'Machine learning algorithms that optimize blockchain consensus mechanisms for better performance.',
      benefits: ['Optimized consensus', 'Faster transactions', 'Lower energy consumption', 'Improved scalability']
    },
    {
      icon: Shield,
      title: 'Cryptographic AI',
      description: 'AI-enhanced cryptography for advanced security and privacy protection in blockchain systems.',
      benefits: ['Advanced encryption', 'Privacy protection', 'Quantum resistance', 'Zero-knowledge proofs']
    },
    {
      icon: Target,
      title: 'Predictive Analytics',
      description: 'AI-driven analysis of blockchain data for market predictions and risk assessment.',
      benefits: ['Market predictions', 'Risk analysis', 'Pattern recognition', 'Investment insights']
    },
    {
      icon: Users,
      title: 'DAO Governance AI',
      description: 'AI systems that assist in decentralized autonomous organization governance and decision-making.',
      benefits: ['Automated governance', 'Voting optimization', 'Proposal analysis', 'Community management']
    }
  ];

  const applications = [
    {
      title: 'DeFi Platforms',
      description: 'AI-enhanced decentralized finance platforms with intelligent trading and risk management.',
      icon: CreditCard,
      useCases: ['Automated trading', 'Risk management', 'Yield farming', 'Liquidity optimization']
    },
    {
      title: 'NFT Marketplaces',
      description: 'AI-powered NFT platforms with intelligent pricing and recommendation systems.',
      icon: Palette,
      useCases: ['Price optimization', 'Content recommendation', 'Fraud detection', 'Market analysis']
    },
    {
      title: 'Supply Chain',
      description: 'Blockchain-based supply chain with AI for tracking, verification, and optimization.',
      icon: Truck,
      useCases: ['Product tracking', 'Quality verification', 'Logistics optimization', 'Counterfeit detection']
    },
    {
      title: 'Healthcare Records',
      description: 'Secure healthcare data management with AI analysis and blockchain security.',
      icon: Stethoscope,
      useCases: ['Medical records', 'Drug traceability', 'Clinical trials', 'Patient privacy']
    },
    {
      title: 'Digital Identity',
      description: 'AI-powered digital identity systems with blockchain security and verification.',
      icon: Users,
      useCases: ['Identity verification', 'KYC processes', 'Access control', 'Privacy protection']
    },
    {
      title: 'Energy Trading',
      description: 'Decentralized energy trading platforms with AI for grid optimization.',
      icon: Zap,
      useCases: ['Energy trading', 'Grid optimization', 'Renewable energy', 'Carbon credits']
    }
  ];

  const benefits = [
    'Enhanced security through AI-powered threat detection',
    'Improved scalability with intelligent consensus mechanisms',
    'Reduced energy consumption through optimized algorithms',
    'Better user experience with AI-driven interfaces',
    'Increased transparency through smart contract automation',
    'Lower costs through automated processes'
  ];

  const pricing = [
    {
      name: 'Starter',
      price: '$999',
      period: '/month',
      description: 'Perfect for small blockchain projects',
      features: [
        'Basic AI integration',
        'Smart contract templates',
        'Standard support',
        'Up to 1000 transactions/day',
        'Basic analytics'
      ],
      popular: false
    },
    {
      name: 'Professional',
      price: '$2,999',
      period: '/month',
      description: 'Ideal for growing blockchain applications',
      features: [
        'Advanced AI capabilities',
        'Custom smart contracts',
        'Priority support',
        'Up to 10,000 transactions/day',
        'Advanced analytics',
        'API access'
      ],
      popular: true
    },
    {
      name: 'Enterprise',
      price: 'Custom',
      period: '',
      description: 'For large-scale blockchain solutions',
      features: [
        'Full AI customization',
        'White-label solutions',
        'Dedicated support',
        'Unlimited transactions',
        'Custom analytics',
        'On-premise deployment'
      ],
      popular: false
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              AI Blockchain Solutions
              <span className="block text-purple-400">for the Future</span>
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Combine the power of artificial intelligence with blockchain technology to create 
              next-generation decentralized applications and smart systems.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-purple-700 transition-colors">
                Explore Solutions
              </button>
              <button className="border border-purple-400 text-purple-400 px-8 py-4 rounded-lg font-semibold hover:bg-purple-50 hover:text-purple-600 transition-colors">
                View Demo
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              AI Blockchain Features
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Cutting-edge technology that combines AI and blockchain
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-sm p-6 rounded-xl border border-white/20 hover:bg-white/20 transition-colors">
                <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-4">
                  <feature.icon className="w-6 h-6 text-purple-600" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">{feature.title}</h3>
                <p className="text-gray-300 mb-4">{feature.description}</p>
                <ul className="space-y-2">
                  {feature.benefits.map((benefit, idx) => (
                    <li key={idx} className="flex items-center text-sm text-gray-300">
                      <CheckCircle className="w-4 h-4 text-green-400 mr-2" />
                      {benefit}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Applications Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white/5">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Real-World Applications
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              AI blockchain solutions across various industries
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {applications.map((application, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-sm p-6 rounded-xl border border-white/20">
                <div className="w-12 h-12 bg-cyan-100 rounded-lg flex items-center justify-center mb-4">
                  <application.icon className="w-6 h-6 text-cyan-600" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">{application.title}</h3>
                <p className="text-gray-300 mb-4">{application.description}</p>
                <ul className="space-y-2">
                  {application.useCases.map((useCase, idx) => (
                    <li key={idx} className="text-sm text-gray-300">
                      • {useCase}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Why Choose AI Blockchain?
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              The future of decentralized technology
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="flex items-start">
                <CheckCircle className="w-6 h-6 text-green-400 mr-3 mt-1 flex-shrink-0" />
                <p className="text-lg text-gray-300">{benefit}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white/5">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Choose Your Plan
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Flexible pricing for AI blockchain solutions
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {pricing.map((plan, index) => (
              <div key={index} className={`bg-white/10 backdrop-blur-sm p-8 rounded-xl border ${plan.popular ? 'border-purple-400' : 'border-white/20'}`}>
                {plan.popular && (
                  <div className="bg-purple-400 text-slate-900 text-sm font-semibold px-3 py-1 rounded-full inline-block mb-4">
                    Most Popular
                  </div>
                )}
                <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                <div className="mb-4">
                  <span className="text-4xl font-bold text-white">{plan.price}</span>
                  <span className="text-gray-300">{plan.period}</span>
                </div>
                <p className="text-gray-300 mb-6">{plan.description}</p>
                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center">
                      <CheckCircle className="w-5 h-5 text-green-400 mr-3" />
                      <span className="text-gray-300">{feature}</span>
                    </li>
                  ))}
                </ul>
                <button className={`w-full py-3 px-6 rounded-lg font-semibold transition-colors ${
                  plan.popular 
                    ? 'bg-purple-600 text-white hover:bg-purple-700' 
                    : 'border border-white/30 text-white hover:bg-white/10'
                }`}>
                  Get Started
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Ready to Build the Future?
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Start your AI blockchain journey today and create the next generation of decentralized applications
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-purple-700 transition-colors">
              Start Building
            </button>
            <button className="border border-purple-400 text-purple-400 px-8 py-4 rounded-lg font-semibold hover:bg-purple-50 hover:text-purple-600 transition-colors">
              Contact Sales
            </button>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default AIBlockchainSolutionsPage;
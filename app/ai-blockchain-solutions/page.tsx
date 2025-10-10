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
      icon: '💰',
      useCases: ['Automated trading', 'Risk management', 'Yield optimization', 'Liquidity provision']
    },
    {
      title: 'NFT Marketplaces',
      description: 'Intelligent NFT platforms with AI-powered valuation and recommendation systems.',
      icon: '🎨',
      useCases: ['AI valuation', 'Recommendation engine', 'Fraud detection', 'Market analysis']
    },
    {
      title: 'Supply Chain',
      description: 'Blockchain-based supply chain solutions with AI-powered tracking and optimization.',
      icon: '🚚',
      useCases: ['Smart tracking', 'Quality assurance', 'Optimization', 'Transparency']
    },
    {
      title: 'Healthcare',
      description: 'Secure healthcare data management with AI-powered analysis and privacy protection.',
      icon: '🏥',
      useCases: ['Patient data security', 'AI diagnostics', 'Drug traceability', 'Research collaboration']
    },
    {
      title: 'Finance',
      description: 'Traditional finance integration with blockchain and AI for enhanced services.',
      icon: '🏦',
      useCases: ['Cross-border payments', 'Credit scoring', 'Fraud prevention', 'Regulatory compliance']
    },
    {
      title: 'Gaming',
      description: 'Blockchain gaming platforms with AI-powered gameplay and asset management.',
      icon: '🎮',
      useCases: ['AI opponents', 'Asset trading', 'Play-to-earn', 'Virtual economies']
    }
  ];

  const benefits = [
    'Enhanced security and transparency',
    'Reduced operational costs',
    'Improved efficiency and speed',
    'Better data integrity',
    'Automated compliance',
    'Innovative business models'
  ];

  const pricing = [
    {
      name: 'Starter',
      price: '$1,999',
      period: '/month',
      description: 'Basic AI blockchain solutions for small businesses',
      features: [
        'Smart contract development',
        'Basic AI integration',
        'Standard security',
        'Email support',
        '1 blockchain network',
        'Basic analytics'
      ],
      popular: false
    },
    {
      name: 'Professional',
      price: '$4,999',
      period: '/month',
      description: 'Advanced solutions for growing companies',
      features: [
        'Advanced smart contracts',
        'AI-powered analytics',
        'Enhanced security',
        'Priority support',
        'Multiple networks',
        'Custom integrations',
        'Real-time monitoring',
        'Compliance tools'
      ],
      popular: true
    },
    {
      name: 'Enterprise',
      price: '$12,999',
      period: '/month',
      description: 'Comprehensive solutions for large organizations',
      features: [
        'Custom blockchain development',
        'Full AI suite',
        'Maximum security',
        'Dedicated support',
        'All networks',
        'White-label solution',
        'Advanced compliance',
        'SLA guarantee',
        'Custom training'
      ],
      popular: false
    }
  ];

  const testimonials = [
    {
      name: 'Dr. Maria Santos',
      company: 'Blockchain Health',
      role: 'CTO',
      quote: 'AI blockchain solutions revolutionized our healthcare data management. Security and efficiency improved dramatically.',
      rating: 5,
      image: '👩‍⚕️'
    },
    {
      name: 'James Wilson',
      company: 'DeFi Innovations',
      role: 'Founder',
      quote: 'The AI-powered DeFi platform increased our trading volume by 400% while reducing risks significantly.',
      rating: 5,
      image: '👨‍💼'
    },
    {
      name: 'Lisa Chen',
      company: 'SupplyChain AI',
      role: 'Operations Director',
      quote: 'Blockchain tracking with AI optimization reduced our supply chain costs by 60% and improved transparency.',
      rating: 5,
      image: '👩‍💻'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Navigation />
      
      <main className="container mx-auto px-4 py-16 pt-24">
        {/* Hero Section */}
        <section className="text-center mb-16">
          <div className="text-6xl mb-6 animate-bounce">⛓️</div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
            AI Blockchain Solutions
          </h1>
          <p className="text-xl md:text-2xl text-cyan-400 mb-8 font-medium">
            The Future of Decentralized Intelligence
          </p>
          <p className="text-lg text-gray-300 max-w-4xl mx-auto mb-12 leading-relaxed">
            Combine the power of artificial intelligence with blockchain technology to create 
            secure, transparent, and intelligent decentralized solutions.
          </p>
          
          {/* Key Stats */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto mb-12">
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 text-center">
              <div className="text-3xl font-bold text-cyan-400 mb-2">100%</div>
              <div className="text-gray-300">Secure</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 text-center">
              <div className="text-3xl font-bold text-purple-400 mb-2">24/7</div>
              <div className="text-gray-300">Operation</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 text-center">
              <div className="text-3xl font-bold text-pink-400 mb-2">10x</div>
              <div className="text-gray-300">Faster</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 text-center">
              <div className="text-3xl font-bold text-green-400 mb-2">Zero</div>
              <div className="text-gray-300">Downtime</div>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-gradient-to-r from-cyan-500 to-purple-600 hover:from-cyan-600 hover:to-purple-700 text-white font-bold py-4 px-8 rounded-lg transition-all duration-300 transform hover:scale-105">
              Explore Solutions
            </button>
            <button className="border-2 border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-white font-bold py-4 px-8 rounded-lg transition-all duration-300">
              View Case Studies
            </button>
          </div>
        </section>

        {/* Features Section */}
        <section className="mb-20">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Advanced AI Blockchain Features
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Cutting-edge technology combining AI and blockchain for maximum impact
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 hover:bg-white/20 transition-all duration-300">
                <div className="text-4xl mb-4">
                  <feature.icon className="text-cyan-400" />
                </div>
                <h3 className="text-xl font-bold text-white mb-4">{feature.title}</h3>
                <p className="text-gray-300 mb-6">{feature.description}</p>
                <ul className="space-y-2">
                  {feature.benefits.map((benefit, idx) => (
                    <li key={idx} className="flex items-center text-gray-300">
                      <CheckCircle className="text-green-400 mr-2 w-4 h-4" />
                      {benefit}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        {/* Applications Section */}
        <section className="mb-20">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Industry Applications
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Transform your industry with AI-powered blockchain solutions
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {applications.map((application, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-sm rounded-2xl p-8">
                <div className="text-4xl mb-4 text-center">{application.icon}</div>
                <h3 className="text-2xl font-bold text-white mb-4 text-center">{application.title}</h3>
                <p className="text-gray-300 mb-6 text-center">{application.description}</p>
                <div className="space-y-2">
                  {application.useCases.map((useCase, idx) => (
                    <div key={idx} className="bg-white/5 rounded-lg p-3 text-center">
                      <span className="text-cyan-400 font-semibold">{useCase}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Benefits Section */}
        <section className="mb-20">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Why Choose AI Blockchain Solutions?
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Experience the combined power of AI and blockchain technology
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {benefits.map((benefit, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 text-center">
                <div className="text-4xl mb-4">🚀</div>
                <h3 className="text-lg font-bold text-white mb-2">{benefit}</h3>
              </div>
            ))}
          </div>
        </section>

        {/* Pricing Section */}
        <section className="mb-20">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              AI Blockchain Solution Plans
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Choose the right solution for your blockchain needs
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {pricing.map((plan, index) => (
              <div key={index} className={`bg-white/10 backdrop-blur-sm rounded-2xl p-8 relative ${
                plan.popular ? 'ring-2 ring-cyan-400 scale-105' : ''
              }`}>
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-4 py-2 rounded-full text-sm font-bold">
                      Most Popular
                    </span>
                  </div>
                )}
                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                  <div className="text-4xl font-bold text-cyan-400 mb-2">
                    {plan.price}<span className="text-lg text-gray-400">{plan.period}</span>
                  </div>
                  <p className="text-gray-300">{plan.description}</p>
                </div>
                <ul className="space-y-4 mb-8">
                  {plan.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-gray-300">
                      <CheckCircle className="text-green-400 mr-3 w-5 h-5" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <button className={`w-full py-4 px-6 rounded-lg font-bold transition-all duration-300 ${
                  plan.popular
                    ? 'bg-gradient-to-r from-cyan-500 to-purple-600 hover:from-cyan-600 hover:to-purple-700 text-white'
                    : 'border-2 border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-white'
                }`}>
                  Get Started
                </button>
              </div>
            ))}
          </div>
        </section>

        {/* Testimonials Section */}
        <section className="mb-20">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Success Stories
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              See how organizations transformed with AI blockchain solutions
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-sm rounded-2xl p-8">
                <div className="flex items-center mb-4">
                  <div className="text-4xl mr-4">{testimonial.image}</div>
                  <div>
                    <h4 className="text-lg font-bold text-white">{testimonial.name}</h4>
                    <p className="text-cyan-400">{testimonial.role}, {testimonial.company}</p>
                  </div>
                </div>
                <p className="text-gray-300 mb-4 italic">"{testimonial.quote}"</p>
                <div className="flex">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <CheckCircle key={i} className="text-yellow-400 w-5 h-5" />
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* CTA Section */}
        <section className="text-center">
          <div className="bg-gradient-to-r from-cyan-500/20 to-purple-600/20 backdrop-blur-sm rounded-2xl p-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Ready to Transform with AI Blockchain?
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Start your journey into the future of decentralized intelligence
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gradient-to-r from-cyan-500 to-purple-600 hover:from-cyan-600 hover:to-purple-700 text-white font-bold py-4 px-8 rounded-lg transition-all duration-300 transform hover:scale-105">
                Start Your Project
              </button>
              <button className="border-2 border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-white font-bold py-4 px-8 rounded-lg transition-all duration-300">
                Schedule Consultation
              </button>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default AIBlockchainSolutionsPage;
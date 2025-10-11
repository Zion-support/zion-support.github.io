import React from 'react';
import { CheckCircle, ArrowRight, Link, Shield, Zap, DollarSign, Star, Clock, Users, Globe, Lock, BarChart3 } from 'lucide-react';
import { Helmet } from 'react-helmet-async';
import { Link as RouterLink } from 'react-router-dom';

const AIBlockchainSolutionsPage: React.FC = () => {
  const features = [
    {
      icon: <Link className="w-6 h-6 text-blue-500" />,
      title: 'Smart Contract Development',
      description: 'AI-powered smart contract creation, auditing, and optimization for secure blockchain applications'
    },
    {
      icon: <Shield className="w-6 h-6 text-green-500" />,
      title: 'DeFi Security',
      description: 'Advanced security protocols and AI monitoring for decentralized finance applications'
    },
    {
      icon: <Zap className="w-6 h-6 text-purple-500" />,
      title: 'NFT Marketplace',
      description: 'Complete NFT platform with AI-powered creation, trading, and analytics tools'
    },
    {
      icon: <BarChart3 className="w-6 h-6 text-orange-500" />,
      title: 'Blockchain Analytics',
      description: 'AI-driven insights and analytics for blockchain transactions and market trends'
    },
    {
      icon: <Lock className="w-6 h-6 text-red-500" />,
      title: 'Crypto Wallet Security',
      description: 'Multi-signature wallets with AI-enhanced security and fraud detection'
    },
    {
      icon: <Globe className="w-6 h-6 text-cyan-500" />,
      title: 'Cross-Chain Integration',
      description: 'Seamless integration between different blockchain networks with AI optimization'
    }
  ];

  const pricingPlans = [
    {
      name: 'Startup',
      price: '$2,999',
      period: '/project',
      description: 'Perfect for new blockchain projects',
      features: [
        'Basic smart contract development',
        'Simple DeFi integration',
        'Basic security audit',
        'Standard support',
        'Documentation'
      ],
      popular: false
    },
    {
      name: 'Enterprise',
      price: '$9,999',
      period: '/project',
      description: 'Ideal for established businesses',
      features: [
        'Advanced smart contracts',
        'Full DeFi suite',
        'Comprehensive security audit',
        'Custom blockchain solutions',
        'Priority support',
        'Training & consultation'
      ],
      popular: true
    },
    {
      name: 'Custom',
      price: 'Contact',
      period: 'us',
      description: 'For complex enterprise needs',
      features: [
        'Custom blockchain development',
        'White-label solutions',
        'Dedicated development team',
        '24/7 support',
        'Ongoing maintenance',
        'Custom integrations'
      ],
      popular: false
    }
  ];

  const benefits = [
    {
      title: 'Future-Proof Technology',
      description: 'Stay ahead with cutting-edge blockchain and AI integration for competitive advantage',
      icon: <Zap className="w-6 h-6 text-blue-500" />
    },
    {
      title: 'Enhanced Security',
      description: 'AI-powered security protocols protect your blockchain assets and transactions',
      icon: <Shield className="w-6 h-6 text-green-500" />
    },
    {
      title: 'Cost Efficiency',
      description: 'Reduce development costs by up to 50% with AI-optimized smart contracts',
      icon: <DollarSign className="w-6 h-6 text-yellow-500" />
    },
    {
      title: 'Scalable Solutions',
      description: 'Build blockchain solutions that scale with your business growth',
      icon: <Globe className="w-6 h-6 text-purple-500" />
    }
  ];

  const testimonials = [
    {
      name: 'Alex Chen',
      company: 'CryptoVentures',
      content: 'The AI-powered smart contract development saved us months of work. The security audit caught critical vulnerabilities we would have missed.',
      rating: 5
    },
    {
      name: 'Sarah Martinez',
      company: 'DeFi Innovations',
      content: 'Their blockchain analytics platform gives us insights we never had before. We\'ve increased our trading profits by 40%.',
      rating: 5
    },
    {
      name: 'Michael Johnson',
      company: 'NFT Studios',
      content: 'The NFT marketplace they built for us is incredible. AI-powered features make it stand out from competitors.',
      rating: 5
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Helmet>
        <title>AI Blockchain Solutions - Zion Tech Group</title>
        <meta name="description" content="Revolutionary AI-powered blockchain solutions including smart contracts, DeFi platforms, NFT marketplaces, and crypto security. Transform your business with cutting-edge blockchain technology." />
        <meta name="keywords" content="AI blockchain, smart contracts, DeFi, NFT marketplace, crypto security, blockchain development" />
      </Helmet>

      {/* Hero Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            AI-Powered
            <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent"> Blockchain</span>
            <br />
            Solutions
          </h1>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Revolutionize your business with AI-enhanced blockchain technology. Smart contracts, DeFi platforms, 
            NFT marketplaces, and crypto security solutions for the modern digital economy.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <RouterLink
              to="/contact"
              className="bg-gradient-to-r from-purple-500 to-pink-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-purple-600 hover:to-pink-700 transition-all duration-300 transform hover:scale-105"
            >
              Start Your Project
            </RouterLink>
            <RouterLink
              to="#pricing"
              className="border border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-gray-900 transition-all duration-300"
            >
              View Pricing
            </RouterLink>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Advanced Blockchain Features
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Comprehensive AI-powered blockchain solutions for the decentralized future
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div
                key={index}
                className="bg-white/10 backdrop-blur-lg rounded-xl p-8 border border-white/20 hover:bg-white/20 transition-all duration-300 group"
              >
                <div className="mb-6">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-bold text-white mb-4">{feature.title}</h3>
                <p className="text-gray-300">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="py-20 px-4 sm:px-6 lg:px-8 bg-white/5">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Blockchain Development Pricing
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Choose the development package that fits your blockchain project needs
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {pricingPlans.map((plan, index) => (
              <div
                key={index}
                className={`bg-white/10 backdrop-blur-lg rounded-xl p-8 border ${
                  plan.popular ? 'border-purple-500 ring-2 ring-purple-500' : 'border-white/20'
                } hover:bg-white/20 transition-all duration-300 group relative`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-4 py-2 rounded-full text-sm font-semibold">
                      Most Popular
                    </span>
                  </div>
                )}
                
                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                  <p className="text-gray-400 mb-4">{plan.description}</p>
                  <div className="flex items-baseline justify-center">
                    <span className="text-4xl font-bold text-white">{plan.price}</span>
                    <span className="text-gray-400 ml-1">{plan.period}</span>
                  </div>
                </div>

                <ul className="space-y-4 mb-8">
                  {plan.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center">
                      <CheckCircle className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" />
                      <span className="text-gray-300">{feature}</span>
                    </li>
                  ))}
                </ul>

                <RouterLink
                  to="/contact"
                  className={`w-full py-3 rounded-lg font-semibold text-center block transition-all duration-300 group-hover:scale-105 ${
                    plan.popular
                      ? 'bg-gradient-to-r from-purple-500 to-pink-600 text-white hover:from-purple-600 hover:to-pink-700'
                      : 'bg-white/20 text-white hover:bg-white/30'
                  }`}
                >
                  Get Started
                  <ArrowRight className="w-4 h-4 inline-block ml-2" />
                </RouterLink>
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
              Why Choose Our AI Blockchain Solutions?
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Experience the benefits of AI-enhanced blockchain technology
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="text-center">
                <div className="bg-gradient-to-r from-purple-500 to-pink-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  {benefit.icon}
                </div>
                <h3 className="text-xl font-bold text-white mb-2">{benefit.title}</h3>
                <p className="text-gray-300">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white/5">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              What Our Clients Say
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Join innovative companies already using our AI blockchain solutions
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-lg rounded-xl p-8 border border-white/20">
                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-300 mb-6 italic">"{testimonial.content}"</p>
                <div>
                  <p className="font-semibold text-white">{testimonial.name}</p>
                  <p className="text-gray-400 text-sm">{testimonial.company}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <div className="bg-gradient-to-r from-purple-500 to-pink-600 rounded-2xl p-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Ready to Build the Future?
            </h2>
            <p className="text-xl text-purple-100 mb-8">
              Start your AI-powered blockchain project today and lead the decentralized revolution
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <RouterLink
                to="/contact"
                className="bg-white text-purple-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-all duration-300 transform hover:scale-105"
              >
                Start Your Project
              </RouterLink>
              <RouterLink
                to="#pricing"
                className="border border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-purple-600 transition-all duration-300"
              >
                View Pricing
              </RouterLink>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AIBlockchainSolutionsPage;
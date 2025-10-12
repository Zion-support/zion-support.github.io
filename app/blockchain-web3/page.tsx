import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Shield, Zap, Globe, Lock, Users, Code } from 'lucide-react';
import Layout from '../layout';

export default function BlockchainWeb3Page() {
  const features = [
    {
      icon: <Shield className="w-6 h-6 text-cyan-400" />,
      title: 'Smart Contract Development',
      description: 'Secure, audited smart contracts for DeFi, NFTs, and enterprise blockchain solutions'
    },
    {
      icon: <Zap className="w-6 h-6 text-purple-400" />,
      title: 'DeFi Protocol Integration',
      description: 'Build and integrate decentralized finance protocols with advanced yield farming strategies'
    },
    {
      icon: <Globe className="w-6 h-6 text-green-400" />,
      title: 'Web3 Application Development',
      description: 'Full-stack Web3 applications with seamless blockchain integration and user-friendly interfaces'
    },
    {
      icon: <Lock className="w-6 h-6 text-yellow-400" />,
      title: 'Security Auditing',
      description: 'Comprehensive security audits and penetration testing for blockchain applications'
    },
    {
      icon: <Users className="w-6 h-6 text-blue-400" />,
      title: 'DAO Development',
      description: 'Decentralized Autonomous Organization frameworks and governance token implementations'
    },
    {
      icon: <Code className="w-6 h-6 text-red-400" />,
      title: 'Custom Blockchain Solutions',
      description: 'Tailored blockchain infrastructure and consensus mechanisms for specific business needs'
    }
  ];

  const services = [
    {
      title: 'Smart Contract Development',
      description: 'End-to-end smart contract development from ideation to deployment',
      features: ['Solidity/Vyper development', 'Gas optimization', 'Security testing', 'Mainnet deployment']
    },
    {
      title: 'DeFi Integration',
      description: 'Integrate with existing DeFi protocols and create new financial primitives',
      features: ['AMM integration', 'Yield farming strategies', 'Liquidity management', 'Risk assessment']
    },
    {
      title: 'NFT Marketplace Development',
      description: 'Complete NFT marketplace solutions with minting, trading, and auction features',
      features: ['ERC-721/1155 standards', 'IPFS integration', 'Royalty systems', 'Marketplace UI/UX']
    },
    {
      title: 'Web3 Frontend Development',
      description: 'Modern, responsive Web3 applications with wallet integration',
      features: ['Wallet connectivity', 'Transaction management', 'Real-time updates', 'Mobile optimization']
    }
  ];

  const pricingPlans = [
    {
      name: 'Starter',
      price: '$5,000',
      description: 'Perfect for small projects and MVPs',
      features: [
        'Basic smart contract development',
        'Simple Web3 integration',
        'Basic security audit',
        '2 weeks delivery',
        'Email support'
      ],
      popular: false
    },
    {
      name: 'Professional',
      price: '$15,000',
      description: 'Comprehensive Web3 solutions',
      features: [
        'Advanced smart contract suite',
        'Full DeFi integration',
        'Comprehensive security audit',
        'Custom Web3 frontend',
        '4 weeks delivery',
        'Priority support'
      ],
      popular: true
    },
    {
      name: 'Enterprise',
      price: '$50,000+',
      description: 'Custom blockchain solutions',
      features: [
        'Custom blockchain development',
        'Advanced DeFi protocols',
        'White-label solutions',
        'Dedicated team',
        '8+ weeks delivery',
        '24/7 support'
      ],
      popular: false
    }
  ];

  const testimonials = [
    {
      name: 'Alex Chen',
      role: 'CTO',
      company: 'DeFi Innovations',
      content: 'Zion Tech Group delivered an exceptional DeFi protocol that increased our TVL by 300%. Their blockchain expertise is unmatched.',
      rating: 5
    },
    {
      name: 'Sarah Martinez',
      role: 'Founder',
      company: 'NFT Marketplace Co.',
      content: 'The NFT marketplace they built for us is flawless. The user experience is smooth and the smart contracts are bulletproof.',
      rating: 5
    },
    {
      name: 'David Kim',
      role: 'CEO',
      company: 'Blockchain Solutions Inc.',
      content: 'Their custom blockchain solution revolutionized our supply chain. The transparency and security improvements are remarkable.',
      rating: 5
    }
  ];

  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-gray-900 via-purple-900 to-blue-900">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-6">
            Blockchain & Web3 Solutions
          </h1>
          <p className="text-xl text-gray-300 mb-8 max-w-4xl mx-auto">
            Transform your business with cutting-edge blockchain technology. From smart contracts to DeFi protocols, 
            we build secure, scalable Web3 solutions that drive innovation and growth.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              to="/contact" 
              className="bg-gradient-to-r from-purple-500 to-cyan-500 text-white px-8 py-4 rounded-lg font-semibold hover:from-purple-600 hover:to-cyan-600 transition-all duration-300"
            >
              Start Your Project
            </Link>
            <Link 
              to="#services" 
              className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white/10 transition-colors"
            >
              View Services
            </Link>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-gray-900">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4 text-center">
            Blockchain Expertise
          </h2>
          <p className="text-gray-300 text-center mb-12">
            Comprehensive blockchain solutions powered by cutting-edge technology
          </p>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="bg-gray-800 p-6 rounded-lg">
                <div className="flex items-center mb-4">
                  {feature.icon}
                  <h3 className="text-xl font-semibold text-white ml-3">{feature.title}</h3>
                </div>
                <p className="text-gray-300">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 bg-gray-800">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4 text-center">
            Our Web3 Services
          </h2>
          <p className="text-gray-300 text-center mb-12">
            End-to-end blockchain development and Web3 integration services
          </p>
          <div className="grid md:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <div key={index} className="bg-gray-900 p-8 rounded-lg">
                <h3 className="text-2xl font-bold text-white mb-4">{service.title}</h3>
                <p className="text-gray-300 mb-6">{service.description}</p>
                <ul className="space-y-3">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="text-gray-400 flex items-center">
                      <ArrowRight className="w-4 h-4 text-cyan-400 mr-2" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-20 bg-gray-900">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4 text-center">
            Project Pricing
          </h2>
          <p className="text-gray-300 text-center mb-12">
            Transparent pricing for blockchain and Web3 development projects
          </p>
          <div className="grid md:grid-cols-3 gap-8">
            {pricingPlans.map((plan, index) => (
              <div key={index} className={`bg-gray-800 p-8 rounded-lg relative ${plan.popular ? 'ring-2 ring-purple-400' : ''}`}>
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-gradient-to-r from-purple-500 to-cyan-500 text-white px-4 py-1 rounded-full text-sm font-semibold">
                      Most Popular
                    </span>
                  </div>
                )}
                <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                <div className="text-4xl font-bold text-white mb-2">{plan.price}</div>
                <p className="text-gray-300 mb-6">{plan.description}</p>
                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="text-gray-300 flex items-center">
                      <span className="w-2 h-2 bg-purple-400 rounded-full mr-2"></span>
                      {feature}
                    </li>
                  ))}
                </ul>
                <Link
                  to="/contact"
                  className={`w-full block text-center py-3 px-6 rounded-lg font-semibold transition-all duration-300 ${
                    plan.popular
                      ? 'bg-gradient-to-r from-purple-500 to-cyan-500 text-white hover:from-purple-600 hover:to-cyan-600'
                      : 'border-2 border-purple-400 text-purple-400 hover:bg-purple-400/10'
                  }`}
                >
                  Get Started
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-gray-800">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-white mb-4 text-center">
            Client Success Stories
          </h2>
          <p className="text-gray-300 text-center mb-12">
            See how we've helped companies succeed in the Web3 space
          </p>
          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-gray-900 p-6 rounded-lg">
                <div className="flex mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <span key={i} className="text-yellow-400">★</span>
                  ))}
                </div>
                <blockquote className="text-gray-300 mb-6 italic">"{testimonial.content}"</blockquote>
                <div>
                  <p className="font-semibold text-white">{testimonial.name}</p>
                  <p className="text-gray-400 text-sm">{testimonial.role}</p>
                  <p className="text-gray-500 text-sm">{testimonial.company}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-purple-600 to-cyan-600">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Ready to Build the Future?
          </h2>
          <p className="text-xl text-gray-200 mb-8">
            Let's discuss your blockchain project and bring your Web3 vision to life
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              to="/contact" 
              className="bg-white text-purple-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-all duration-300"
            >
              Start Your Project
            </Link>
            <Link 
              to="/about" 
              className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white/10 transition-colors"
            >
              Learn More
            </Link>
          </div>
        </div>
      </section>
    </Layout>
  );
}
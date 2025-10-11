'use client'
import React from 'react'
import { Helmet } from 'react-helmet-async'
import { CheckCircle, ArrowRight, Phone, Mail, MapPin, Zap, Shield, Brain, Globe } from 'lucide-react'
const BlockchainWeb3Page: React.FC = () => {
  const features = [
    {
      icon: Zap,
      title: 'Smart Contracts',
      description: 'Automated, self-executing contracts with the terms directly written into code.',
      benefits: ['Automated execution', 'Transparent transactions', 'Reduced costs', 'Enhanced security']
    },
    {
      icon: Shield,
      title: 'Decentralized Security',
      description: 'Enhanced security through decentralized architecture and cryptographic protection.',
      benefits: ['Immutable records', 'Cryptographic security', 'Distributed consensus', 'Tamper-proof data']
    },
    {
      icon: Brain,
      title: 'AI Integration',
      description: 'AI-powered blockchain solutions for intelligent automation and optimization.',
      benefits: ['Smart automation', 'Predictive analytics', 'Optimized transactions', 'Intelligent contracts']
    },
    {
      icon: Globe,
      title: 'Global Access',
      description: 'Access blockchain services from anywhere in the world with global connectivity.',
      benefits: ['24/7 availability', 'Global reach', 'Cross-border transactions', 'Universal access']
    }
  ]
  return (
    <React.Fragment>
      <Helmet>
        <title>Blockchain & Web3 Solutions - Zion Tech Group</title>
        <meta name="description" content="Advanced blockchain and Web3 solutions for modern businesses. Smart contracts, DeFi, NFTs, and more." />
      </Helmet>
      <div className="min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900">
        <div className="container mx-auto px-4 py-16">
          <div className="text-center mb-16">
            <h1 className="text-5xl font-bold text-white mb-6">
              Blockchain & <span className="text-cyan-400">Web3</span>
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Advanced blockchain and Web3 solutions for modern businesses. Smart contracts, DeFi, NFTs, and more.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="bg-white/5 backdrop-blur-lg rounded-xl p-8 border border-white/10 hover:bg-white/10 transition-all duration-300">
                <div className="flex items-start space-x-4 mb-6">
                  <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-lg flex items-center justify-center flex-shrink-0">
                    <feature.icon className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-white mb-2">{feature.title}</h3>
                    <p className="text-gray-300 mb-4">{feature.description}</p>
                  </div>
                </div>
                <ul className="space-y-2">
                  {feature.benefits.map((benefit, benefitIndex) => (
                    <li key={benefitIndex} className="flex items-center text-gray-300">
                      <CheckCircle className="w-5 h-5 text-cyan-400 mr-3" />

import React from 'react'
import { Helmet } from 'react-helmet-async'
import { CheckCircle, ArrowRight, Phone, Mail, MapPin, Zap, Shield, Brain, Globe } from 'lucide-react';const BlockchainWeb3Page: React.FC = () => {const features = [
    {icon: Zap,
      title: 'Smart Contracts',
      description: 'Automated, self-executing contracts with the terms directly written into code.',
      benefits: ['Automated execution', 'Transparent transactions', 'Reduced costs', 'Enhanced security']}
    },
    {icon: Shield,
      title: 'Decentralized Security',
      description: 'Enhanced security through decentralized architecture and cryptographic protection.',
      benefits: ['Immutable records', 'Cryptographic security', 'Distributed consensus', 'Tamper-proof data']}
    },
    {icon: Brain,
      title: 'AI Integration',
      description: 'AI-powered blockchain solutions for intelligent automation and optimization.',
      benefits: ['Smart automation', 'Predictive analytics', 'Optimized transactions', 'Intelligent contracts']}
    },
    {icon: Globe,
      title: 'Global Access',
      description: 'Access blockchain services from anywhere in the world with global connectivity.',
      benefits: ['24/7 availability', 'Global reach', 'Cross-border transactions', 'Universal access']}
    }
  ];return (<></>
      <Helmet>
        <title>Blockchain & Web3 Solutions - Zion Tech Group</title>
        <meta name="description" content="Advanced blockchain and Web3 solutions for modern businesses. Smart contracts, DeFi, NFTs, and more." />
      </Helmet>
      <div className="min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900"></div>
        <div className="container mx-auto px-4 py-16"></div>
          <div className="text-center mb-16"></div>
            <h1 className="text-5xl font-bold text-white mb-6">
              Blockchain & <span className="text-cyan-400">Web3</span>
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Advanced blockchain and Web3 solutions for modern businesses. Smart contracts, DeFi, NFTs, and more.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"></div>
            {features.map((feature, index) => (}
              <div key={index} className="bg-white/5 backdrop-blur-lg rounded-xl p-8 border border-white/10 hover:bg-white/10 transition-all duration-300"></div>
                <div className="flex items-start space-x-4 mb-6"></div>
                  <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-lg flex items-center justify-center flex-shrink-0"></div>
                    <feature.icon className="w-6 h-6 text-white" />
                  </div>
                  <div></div>
                    <h3 className="text-2xl font-bold text-white mb-2">{feature.title}</h3>
                    <p className="text-gray-300 mb-4">{feature.description}</p>
                  </div>
                </div>
                <ul className="space-y-2">
                  {feature.benefits.map((benefit, benefitIndex) => (}
                    <li key={benefitIndex} className="flex items-center text-gray-300">
                      <CheckCircle className="w-5 h-5 text-cyan-400 mr-3" />
                      {benefit}
                    </li>))}
                </ul>
              </div>))}
          </div>
        </div>
      </div>
    </React.Fragment>
  )}
          </div>
        </div>
      </div>
    </>)};export default BlockchainWeb3Page
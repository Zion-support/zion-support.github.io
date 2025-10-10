'use client'
import React from 'react';
import { Helmet } from 'react-helmet-async';
import { CheckCircle, ArrowRight, Phone, Mail, Shield, Brain, Globe, Zap } from 'lucide-react';
const BlockchainPage: React.FC = () => {
  const features = [
    {
      icon: Shield,
      title: 'Secure Blockchain Solutions',
      description: 'Advanced blockchain technology with enterprise-grade security and compliance'
    },
    {
      icon: Zap,
      title: 'High Performance',
      description: 'Lightning-fast blockchain transactions and smart contract execution'
    },
    {
      icon: Brain,
      title: 'AI-Powered Solutions',
      description: 'Intelligent blockchain solutions powered by advanced AI technology'
    },
    {
      icon: Globe,
      title: 'Global Reach',
      description: 'Worldwide blockchain deployment and support for international businesses'
    }
  ]
  const benefits = [
    'Advanced blockchain technology integration',
    'Real-time transaction processing',
    'Enterprise-grade security and compliance',
    'Scalable and flexible blockchain solutions',
    '24/7 technical support',
    'Easy integration with existing systems',
    'Cost-effective pricing plans',
    'Proven track record of success'
  ]
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Helmet>
        <title>Blockchain Solutions | Zion Tech Group</title>
        <meta name="description" content="Professional Blockchain Solutions by Zion Tech Group. Advanced AI and IT solutions for your business." />
        <meta name="keywords" content="blockchain solutions, blockchain technology, IT services, Zion Tech Group, smart contracts" />
      </Helmet>
            </div>
          ))}
        </div>
        <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 mb-16">
          <h2 className="text-3xl font-bold text-white text-center mb-8">
            Why Choose Our Blockchain Solutions?
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            {benefits.map((benefit, index) => (
              <div key={index} className="flex items-center space-x-3">
                <CheckCircle className="h-6 w-6 text-green-400 flex-shrink-0" />
                <span className="text-gray-300">{benefit}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
export default BlockchainPage
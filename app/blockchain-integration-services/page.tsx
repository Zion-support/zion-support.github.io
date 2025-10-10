'use client'
import React from 'react'
import { Helmet } from 'react-helmet-async'
import { CheckCircle, ArrowRight, Phone, Mail, MapPin, Zap, Shield, Brain, Globe } from 'lucide-react'
const BlockchainIntegrationServicesPage: React.FC = () => {
  const features = [
    {
      icon: Shield,
      title: 'Secure Blockchain Integration',
      description: 'Advanced blockchain technology integration with enterprise-grade security'
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
      title: 'Multi-Chain Support',
      description: 'Support for multiple blockchain networks and protocols'
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
        <title>Blockchain Integration Services | Zion Tech Group</title>
        <meta name="description" content="Professional Blockchain Integration Services by Zion Tech Group. Advanced AI and IT solutions for your business." />

            Blockchain Integration Services
          </h1>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Transform your business with our advanced blockchain integration solutions. 
            Powered by cutting-edge AI technology and industry expertise.
          </p>

        </div>


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
      </div>
    </div>
  )
}
export default BlockchainIntegrationServicesPage
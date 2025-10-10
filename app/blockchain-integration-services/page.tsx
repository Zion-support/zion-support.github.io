'use client';
import React from 'react';
import { Helmet } from 'react-helmet-async';
import { CheckCircle, ArrowRight, Phone, Mail, MapPin, Zap, Shield, Brain, Globe } from 'lucide-react';
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
  ];
  const benefits = [
    'Advanced blockchain technology integration',
    'Real-time transaction processing',
    'Enterprise-grade security and compliance',
    'Scalable and flexible blockchain solutions',
    '24/7 technical support',
    'Easy integration with existing systems',
    'Cost-effective pricing plans',
    'Proven track record of success'
  ];
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900"></div>
      <Helmet></Helmet>
        <title>Blockchain Integration Services | Zion Tech Group</title>
        <meta name="description" content="Professional Blockchain Integration Services by Zion Tech Group. Advanced AI and IT solutions for your business." /></meta>
<meta name="keywords" content="blockchain integration, blockchain services, IT services, Zion Tech Group, smart contracts" /></meta>
      </Helmet>
      <div className="container mx-auto px-4 py-16"></div>
        <div className="text-center mb-16"></div>
          <h1 className="text-5xl font-bold text-white mb-6"></h1>
            Blockchain Integration Services;
  </
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto"></p>
            Transform your business with our advanced blockchain integration solutions. 
            Powered by cutting-edge AI technology and industry expertise.
          </p>
        </div>
        <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 mb-16"></div>
          <h2 className="text-3xl font-bold text-white text-center mb-8"></h2>
            Why Choose Our Blockchain Integration Services?
          </h2>
          <div className="grid md:grid-cols-2 gap-6"></div>
      {/* Features Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8"></section>
        <div className="max-w-7xl mx-auto"></div>
          <div className="text-center mb-16"></div>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4"></h2>
              Why Choose Our Blockchain Integration Services?
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto"></p>
              Our blockchain integration solutions deliver unmatched performance, security, and scalability.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"></div>
            {features.map((feature, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300"></div>
                <div className="flex items-center justify-center w-12 h-12 bg-gradient-to-r from-purple-500 to-blue-600 rounded-lg mb-4"></div>
                  <feature.icon className="h-6 w-6 text-white" /></feature>
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">{feature.title}</h3>
                <p className="text-gray-300">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* Benefits Section */}
      <section className="py-20 px-4 sm: px-6 lg:px-8 bg-white/5"></section>
        <div className="max-w-7xl mx-auto"></div>
          <div className="text-center mb-16"></div>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4"></h2>
              Key Benefits,
  </
            <p className="text-xl text-gray-300 max-w-3xl mx-auto"></p>
              Experience the power of our blockchain integration solutions for your business.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6"></div>
            {benefits.map((benefit, index) => (
              <div key={index} className="flex items-center space-x-3"></div>
                <CheckCircle className="h-6 w-6 text-green-400 flex-shrink-0" /></CheckCircle>
                <span className="text-gray-300">{benefit}</span>
              </div>
            ))}
          </div>
        </div>
<div className="text-center"></div>
          <h2 className="text-3xl font-bold text-white mb-6"></h2>
            Ready to Get Started?
          </h2>
          <p className="text-xl text-purple-100 mb-8"></p>
            Contact our experts to discuss your blockchain integration needs and get a customized solution.
          </p>
          <div className="flex flex-col sm: flex-row gap-4 justify-center"></div>
            <button className="bg-white text-purple-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-all duration-300 flex items-center justify-center"></button>
              <Phone className="mr-2 h-5 w-5" /></Phone>
              Call Now
  </
            <button className="border border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-purple-600 transition-all duration-300 flex items-center justify-center"></button>
              <Mail className="mr-2 h-5 w-5" /></Mail>
              Email Us
  </
          </div>
        </div>
      </div>
    </div>
  )
  }
export default BlockchainIntegrationServicesPage;
  </button>
  </button>
  </h2>
  </section>
  </h1>
  </div>
  </div>
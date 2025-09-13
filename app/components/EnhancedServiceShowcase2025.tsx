import React from 'react';
import Link from 'next/link';
import { ArrowRight, Star, Users, TrendingUp, Shield, Zap, Brain, Rocket } from 'lucide-react';

const EnhancedServiceShowcase2025 = () => {
  const services = [
    {
      id: 'ai-autonomous-systems',
      title: 'AI Autonomous Systems 2025',
      description: 'Next-generation autonomous AI systems with self-evolving capabilities and 99.9% reliability.',
      icon: Brain,
      color: 'from-purple-600 to-indigo-600',
      features: ['Self-diagnostic capabilities', 'Dynamic optimization', 'Predictive maintenance', 'Autonomous decision-making'],
      price: '$2,999/month',
      popular: true
    },
    {
      id: 'quantum-ai-consulting',
      title: 'Quantum AI Consulting 2025',
      description: 'Quantum-enhanced AI consulting services delivering 1000x performance improvements.',
      icon: Zap,
      color: 'from-blue-600 to-cyan-600',
      features: ['Quantum algorithms', 'Exponential processing', 'Advanced optimization', 'Future-proof solutions'],
      price: '$4,999/month',
      popular: false
    },
    {
      id: 'ai-agent-orchestration',
      title: 'AI Agent Orchestration',
      description: 'Comprehensive AI agent management and orchestration for enterprise-scale deployments.',
      icon: Users,
      color: 'from-green-600 to-emerald-600',
      features: ['Multi-agent coordination', 'Intelligent routing', 'Performance monitoring', 'Scalable architecture'],
      price: '$1,999/month',
      popular: true
    },
    {
      id: 'edge-computing',
      title: 'Edge Computing Solutions',
      description: 'Ultra-fast edge AI computing for real-time processing and reduced latency.',
      icon: Rocket,
      color: 'from-orange-600 to-red-600',
      features: ['Real-time processing', 'Low latency', 'Distributed computing', 'IoT integration'],
      price: '$1,499/month',
      popular: false
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center bg-gradient-to-r from-blue-100 to-purple-100 text-blue-800 px-4 py-2 rounded-full text-sm font-semibold mb-4">
            <Star className="w-4 h-4 mr-2" />
            ENHANCED SERVICES 2025
          </div>
          
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Revolutionary AI Services
          </h2>
          
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Discover our cutting-edge AI services that are transforming industries and pushing the boundaries of what's possible with artificial intelligence.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {services.map((service) => (
            <div 
              key={service.id}
              className="group bg-white rounded-2xl shadow-xl border border-gray-200 overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2"
            >
              {/* Service Header */}
              <div className={`bg-gradient-to-r ${service.color} p-8 text-white relative overflow-hidden`}>
                <div className="absolute top-4 right-4 w-16 h-16 bg-white/20 rounded-full flex items-center justify-center">
                  <service.icon className="w-8 h-8" />
                </div>
                
                <div className="relative z-10">
                  <div className="flex items-center justify-between mb-4">
                    <span className="bg-white/20 backdrop-blur-sm px-3 py-1 rounded-full text-sm font-semibold">
                      AI Service
                    </span>
                    {service.popular && (
                      <span className="bg-yellow-400 text-yellow-900 px-3 py-1 rounded-full text-sm font-semibold flex items-center">
                        <Star className="w-3 h-3 mr-1" />
                        Popular
                      </span>
                    )}
                  </div>
                  
                  <h3 className="text-2xl font-bold mb-2">{service.title}</h3>
                  <p className="text-lg opacity-90 mb-4">{service.description}</p>
                  
                  <div className="flex items-center text-2xl font-bold">
                    <span className="text-3xl">{service.price}</span>
                  </div>
                </div>
              </div>

              {/* Service Content */}
              <div className="p-8">
                {/* Key Features */}
                <div className="mb-6">
                  <h4 className="font-semibold text-gray-900 mb-3 flex items-center">
                    <Shield className="w-4 h-4 mr-2 text-purple-500" />
                    Key Features
                  </h4>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                    {service.features.map((feature, index) => (
                      <div key={index} className="flex items-start text-sm text-gray-600">
                        <div className="w-1.5 h-1.5 bg-purple-500 rounded-full mt-2 mr-2 flex-shrink-0"></div>
                        <span>{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Service Stats */}
                <div className="grid grid-cols-3 gap-4 mb-6 p-4 bg-gray-50 rounded-xl">
                  <div className="text-center">
                    <div className="text-lg font-bold text-gray-900">150+</div>
                    <div className="text-xs text-gray-600">Clients</div>
                  </div>
                  <div className="text-center">
                    <div className="text-lg font-bold text-gray-900 flex items-center justify-center">
                      4.9
                      <Star className="w-3 h-3 ml-1 text-yellow-400 fill-current" />
                    </div>
                    <div className="text-xs text-gray-600">Rating</div>
                  </div>
                  <div className="text-center">
                    <div className="text-lg font-bold text-gray-900">30</div>
                    <div className="text-xs text-gray-600">Day Trial</div>
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="flex flex-col sm:flex-row gap-3">
                  <Link 
                    href={`/services/${service.id}`}
                    className="flex-1 bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white px-6 py-3 rounded-xl font-semibold text-center transition-all duration-300 flex items-center justify-center group"
                  >
                    Learn More
                    <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                  </Link>
                  
                  <Link 
                    href="/contact"
                    className="flex-1 border border-gray-300 hover:border-gray-400 text-gray-700 px-6 py-3 rounded-xl font-semibold text-center transition-all duration-300 flex items-center justify-center"
                  >
                    <Users className="w-4 h-4 mr-2" />
                    Contact Sales
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center bg-gradient-to-r from-purple-600 to-blue-600 rounded-2xl p-12 text-white">
          <h3 className="text-3xl font-bold mb-4">Ready to Transform Your Business?</h3>
          <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
            Join hundreds of companies already using our revolutionary AI services to achieve unprecedented growth and efficiency.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              href="/services"
              className="bg-white text-purple-600 hover:bg-gray-100 px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-300 flex items-center justify-center group"
            >
              View All Services
              <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
            </Link>
            
            <Link 
              href="/contact"
              className="border border-white/30 hover:bg-white/10 px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-300 flex items-center justify-center"
            >
              Schedule Consultation
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EnhancedServiceShowcase2025;
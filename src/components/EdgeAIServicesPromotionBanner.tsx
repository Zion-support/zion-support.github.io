import React from 'react';
import Link from 'next/link';
import { ArrowRight, CheckCircle, Clock, DollarSign, Shield, Zap } from 'lucide-react';

const EdgeAIServicesPromotionBanner: React.FC = () => {
  const services = [
    {
      title: 'Edge AI Strategy & Consulting',
      description: 'Comprehensive assessment and strategic planning for edge AI implementation',
      features: ['Business case development', 'Technical architecture design', 'ROI analysis'],
      price: 'Starting at $50K',
      duration: '2-4 weeks'
    },
    {
      title: 'Edge AI Implementation',
      description: 'End-to-end implementation of edge AI solutions with proven methodologies',
      features: ['Pilot deployment', 'Full-scale rollout', 'Training & support'],
      price: 'Starting at $200K',
      duration: '3-6 months'
    },
    {
      title: 'Edge AI Optimization',
      description: 'Performance optimization and continuous improvement of existing edge AI systems',
      features: ['Performance tuning', 'Cost optimization', 'Model updates'],
      price: 'Starting at $100K',
      duration: '1-3 months'
    }
  ];

  return (
    <div className="bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900 text-white py-16 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center bg-green-500/20 rounded-full px-6 py-3 mb-6 border border-green-400/30">
            <Zap className="w-5 h-5 mr-2 text-green-400" />
            <span className="text-green-300 font-medium">🚀 NEW: Edge AI Services</span>
          </div>
          
          <h2 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-white via-blue-200 to-purple-200 bg-clip-text text-transparent">
            Transform Your Business with
            <span className="block text-transparent bg-gradient-to-r from-yellow-400 to-orange-400 bg-clip-text">
              Professional Edge AI Services
            </span>
          </h2>
          
          <p className="text-xl md:text-2xl text-blue-100 max-w-4xl mx-auto mb-8">
            Our expert team delivers proven edge AI solutions that drive 
            <span className="text-yellow-300 font-semibold"> measurable results</span> and 
            <span className="text-yellow-300 font-semibold"> competitive advantage</span>
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {services.map((service, index) => (
            <div 
              key={index}
              className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20 hover:border-blue-400/50 transition-all duration-300 group"
            >
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-xl font-bold text-white">{service.title}</h3>
                <div className="bg-blue-500/20 rounded-full px-3 py-1">
                  <span className="text-blue-300 text-sm font-medium">NEW</span>
                </div>
              </div>
              
              <p className="text-blue-100 mb-6">{service.description}</p>
              
              <div className="space-y-3 mb-6">
                {service.features.map((feature, featureIndex) => (
                  <div key={featureIndex} className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" />
                    <span className="text-blue-100">{feature}</span>
                  </div>
                ))}
              </div>
              
              <div className="border-t border-white/20 pt-6">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center text-blue-200">
                    <DollarSign className="w-4 h-4 mr-2" />
                    <span className="font-medium">{service.price}</span>
                  </div>
                  <div className="flex items-center text-blue-200">
                    <Clock className="w-4 h-4 mr-2" />
                    <span className="font-medium">{service.duration}</span>
                  </div>
                </div>
                
                <Link 
                  href="/contact"
                  className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white py-3 px-6 rounded-xl font-bold text-center hover:from-blue-700 hover:to-purple-700 transition-all duration-300 flex items-center justify-center group"
                >
                  Get Started
                  <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* Success Metrics */}
        <div className="bg-gradient-to-r from-green-600/20 to-blue-600/20 rounded-2xl p-8 mb-16 border border-green-400/30">
          <div className="text-center mb-8">
            <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
              Proven Results with Our Edge AI Services
            </h3>
            <p className="text-blue-100 text-lg">
              Join industry leaders who have achieved breakthrough results with our edge AI solutions
            </p>
          </div>
          
          <div className="grid md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold text-green-400 mb-2">$2.5B+</div>
              <div className="text-blue-100">Average Revenue Increase</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-yellow-400 mb-2">99.9%</div>
              <div className="text-blue-100">System Uptime</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-purple-400 mb-2">&lt;10ms</div>
              <div className="text-blue-100">Response Time</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-orange-400 mb-2">2,500%</div>
              <div className="text-blue-100">Average ROI</div>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="bg-gradient-to-r from-yellow-500 to-orange-500 rounded-2xl p-8 text-center text-gray-900">
          <h3 className="text-2xl md:text-3xl font-bold mb-4">
            🎯 Ready to Start Your Edge AI Transformation?
          </h3>
          <p className="text-lg text-gray-800 mb-6 max-w-3xl mx-auto">
            Schedule a free consultation with our edge AI experts and discover how we can help 
            you achieve unprecedented business results with cutting-edge technology.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link 
              href="/contact"
              className="bg-gray-900 text-white px-8 py-4 rounded-xl font-bold text-lg hover:bg-gray-800 transition-all duration-300 flex items-center group"
            >
              <Shield className="w-5 h-5 mr-2" />
              Free Consultation
              <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
            </Link>
            
            <Link 
              href="/case-studies"
              className="bg-white text-gray-900 px-8 py-4 rounded-xl font-bold text-lg hover:bg-gray-100 transition-all duration-300 flex items-center group"
            >
              View Success Stories
              <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
          
          <div className="mt-6 text-sm text-gray-700">
            ⚡ <strong>Limited Time:</strong> First 10 clients receive 20% discount on edge AI implementation services
          </div>
        </div>

        {/* Footer Stats */}
        <div className="text-center mt-12">
          <div className="inline-flex items-center space-x-8 text-blue-200">
            <div className="flex items-center">
              <div className="w-3 h-3 bg-green-400 rounded-full mr-2 animate-pulse"></div>
              <span>24/7 Support</span>
            </div>
            <div className="flex items-center">
              <div className="w-3 h-3 bg-yellow-400 rounded-full mr-2 animate-pulse"></div>
              <span>Expert Team</span>
            </div>
            <div className="flex items-center">
              <div className="w-3 h-3 bg-purple-400 rounded-full mr-2 animate-pulse"></div>
              <span>Proven Results</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EdgeAIServicesPromotionBanner;
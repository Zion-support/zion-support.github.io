import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Brain, Zap, BarChart3, CheckCircle, ArrowRight, Star } from 'lucide-react';

const AiServicesPage: React.FC = () => {
  const aiServices = [
    {
      title: 'AI Consulting & Strategy',
      description: 'Strategic AI planning and implementation guidance',
      icon: <Brain className="w-6 h-6" />,
      color: 'from-purple-500 to-blue-500',
      features: ['AI Roadmap Development', 'Technology Assessment', 'ROI Analysis']
    },
    {
      title: 'Machine Learning Solutions',
      description: 'Custom ML models for predictive analytics',
      icon: <BarChart3 className="w-6 h-6" />,
      color: 'from-green-500 to-blue-500',
      features: ['Predictive Analytics', 'Custom Models', 'Data Pipeline Setup']
    },
    {
      title: 'Natural Language Processing',
      description: 'Advanced NLP solutions for text analysis',
      icon: <Zap className="w-6 h-6" />,
      color: 'from-yellow-500 to-orange-500',
      features: ['Text Analysis', 'Sentiment Analysis', 'Language Translation']
    },
    {
      title: 'Computer Vision',
      description: 'Image and video analysis solutions',
      icon: <Brain className="w-6 h-6" />,
      color: 'from-pink-500 to-purple-500',
      features: ['Object Detection', 'Image Classification', 'Video Analysis']
    },
    {
      title: 'AI Automation',
      description: 'Intelligent process automation',
      icon: <Zap className="w-6 h-6" />,
      color: 'from-blue-500 to-cyan-500',
      features: ['Process Automation', 'Workflow Optimization', 'Decision Trees']
    },
    {
      title: 'AI Chatbots',
      description: 'Intelligent conversational AI',
      icon: <Brain className="w-6 h-6" />,
      color: 'from-indigo-500 to-purple-500',
      features: ['24/7 Support', 'Multi-language', 'Integration APIs']
    }
  ];

  const benefits = [
    'Expert AI team with 10+ years experience',
    'Custom solutions tailored to your needs',
    'Proven track record of success',
    '24/7 support and monitoring',
    'Scalable and future-proof solutions',
    'Competitive pricing and ROI'
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Helmet>
        <title>AI Services - Zion Tech Group</title>
        <meta name="description" content="Comprehensive AI services by Zion Tech Group. Machine learning, NLP, computer vision, and AI automation solutions." />
        <meta name="keywords" content="AI services, machine learning, NLP, computer vision, AI automation, Zion Tech Group" />
      </Helmet>
      
      <div className="container mx-auto px-4 py-16">
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold text-white mb-6">
            AI Services
          </h1>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Transform your business with our comprehensive AI services. 
            From machine learning to natural language processing, we deliver cutting-edge solutions.
          </p>
        </div>

        {/* AI Services Grid */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-white mb-6">
                Our AI Services
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Comprehensive AI solutions designed to drive your business forward
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {aiServices.map((service, index) => (
                <div key={index} className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 hover:bg-white/10 transition-all duration-300 group">
                  <div className={`w-16 h-16 bg-gradient-to-br ${service.color} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
                    {service.icon}
                  </div>
                  
                  <h3 className="text-2xl font-bold text-white mb-4">{service.title}</h3>
                  <p className="text-gray-300 mb-6">{service.description}</p>
                  
                  <ul className="space-y-2 mb-6">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-gray-300 text-sm">
                        <CheckCircle className="w-4 h-4 text-green-400 mr-2" />
                        {feature}
                      </li>
                    ))}
                  </ul>

                  <button className="w-full px-6 py-3 bg-gradient-to-r from-purple-500 to-blue-500 text-white rounded-lg font-semibold hover:from-purple-600 hover:to-blue-600 transition-all duration-300">
                    Learn More
                  </button>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-20 bg-slate-800/50">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-white mb-6">
                Why Choose Our AI Services?
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                We deliver exceptional results with our proven approach and expertise
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {benefits.map((benefit, index) => (
                <div key={index} className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 hover:bg-white/10 transition-all duration-300 group">
                  <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-blue-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                    <Star className="w-8 h-8 text-white" />
                  </div>
                  <p className="text-lg text-white font-medium">{benefit}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold text-white mb-6">
              Ready to Transform Your Business with AI?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Let's discuss how our AI services can help you achieve your goals.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="px-8 py-4 bg-gradient-to-r from-purple-500 to-blue-500 text-white rounded-lg font-semibold text-lg hover:from-purple-600 hover:to-blue-600 transition-all duration-300 transform hover:scale-105">
                Get Started
                <ArrowRight className="w-5 h-5 ml-2 inline" />
              </button>
              <button className="px-8 py-4 border border-purple-500 text-purple-400 rounded-lg font-semibold text-lg hover:bg-purple-500/10 transition-all duration-300">
                Contact Us
              </button>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default AiServicesPage;
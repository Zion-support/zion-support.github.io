import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Box, Mic, Circle, Right } from 'lucide-react';

const AIServicesPage: React.FC = () => {
  const features = [
    {
      icon: <Box className="w-6 h-6" />,
      title: 'AI-Powered Intelligence',
      description: 'Advanced AI algorithms that provide intelligent insights and recommendations.',
      benefits: ['Smart recommendations', 'Predictive analytics', 'Automated insights', 'Real-time analysis']
    },
    {
      icon: <Mic className="w-6 h-6" />,
      title: 'Natural Language Processing',
      description: 'AI-powered text analysis and language understanding capabilities.',
      benefits: ['Text analysis', 'Language understanding', 'Sentiment analysis', 'Content generation']
    },
    {
      icon: <Circle className="w-6 h-6" />,
      title: 'Computer Vision',
      description: 'Image and video analysis using advanced AI algorithms.',
      benefits: ['Image recognition', 'Video analysis', 'Object detection', 'Pattern recognition']
    }
  ];

  return (
    <>
      <Helmet>
        <title>AI Services - Zion Tech Group</title>
        <meta name="description" content="Comprehensive AI solutions to transform your business." />
        <meta name="keywords" content="AI services, machine learning, artificial intelligence, automation" />
      </Helmet>
      
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        <div className="container mx-auto px-4 py-16">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              AI <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">Services</span>
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Comprehensive AI solutions to transform your business and drive innovation.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {features.map((feature, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300">
                <div className="w-12 h-12 rounded-lg bg-gradient-to-r from-blue-500 to-purple-500 flex items-center justify-center mb-4">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">{feature.title}</h3>
                <p className="text-gray-300 mb-4">{feature.description}</p>
                <div className="space-y-2">
                  {feature.benefits.map((benefit, idx) => (
                    <div key={idx} className="flex items-center text-sm text-gray-300">
                      <Circle className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
                      <span>{benefit}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
          
          <div className="text-center">
            <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
              <h2 className="text-3xl font-bold text-white mb-4">Ready to Get Started?</h2>
              <p className="text-xl text-gray-300 mb-8">
                Contact us today to learn more about our AI services and how they can benefit your business.
              </p>
              <button className="bg-gradient-to-r from-blue-500 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-blue-600 hover:to-purple-700 transition-all duration-300 flex items-center justify-center mx-auto group">
                Get Started
                <Right className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AIServicesPage;
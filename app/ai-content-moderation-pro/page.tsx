import React from 'react';
import { Helmet } from 'react-helmet-async';
import { CheckCircle, ArrowRight, Brain, Zap } from 'lucide-react';
import { Link } from 'react-router-dom';

const AIPagePage: React.FC = () => {
  const services = [
    {
      title: `Expert AI Page Solutions`,
      description: `Professional AI page services tailored to your needs.`
    },
    {
      title: 'Custom Implementation',
      description: `Tailored AI page implementations for your specific requirements.`
    },
    {
      title: '24/7 Support',
      description: `Round-the-clock support for all your AI page needs.`
    }
  ];

  const features = [
    {
      icon: <Brain className="w-8 h-8 text-purple-400" />,
      title: 'AI-Powered Intelligence',
      description: 'Advanced artificial intelligence algorithms for optimal performance.'
    },
    {
      icon: <Zap className="w-8 h-8 text-cyan-400" />,
      title: 'Real-time Processing',
      description: 'Lightning-fast processing capabilities for immediate results.'
    },
    {
      icon: <CheckCircle className="w-8 h-8 text-green-400" />,
      title: 'Proven Results',
      description: 'Tested and validated solutions with measurable outcomes.'
    }
  ];

  return (
    <>
      <Helmet>
        <title>AI Page - Zion Tech Group</title>
        <meta name="description" content={`Professional AI page solutions and services`} />
        <meta name="keywords" content="ai, page, artificial intelligence" />
      </Helmet>
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        <div className="container mx-auto px-4 py-16">
          <div className="text-center">
            <h1 className="text-4xl font-bold text-white mb-8">AI Page</h1>
            <p className="text-xl text-gray-300 mb-8">
              Professional AI page solutions and services
            </p>
            
            {/* Features Section */}
            <div className="grid md:grid-cols-3 gap-8 mb-12">
              {features.map((feature, index) => (
                <div key={index} className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg p-6">
                  <div className="mb-4">
                    {feature.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-3">
                    {feature.title}
                  </h3>
                  <p className="text-gray-300">
                    {feature.description}
                  </p>
                </div>
              ))}
            </div>

            {/* Services Section */}
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
              {services.map((service, index) => (
                <div key={index} className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg p-6">
                  <div className="flex items-center mb-4">
                    <CheckCircle className="h-8 w-8 text-blue-400 mr-3" />
                    <h3 className="text-lg font-semibold text-white">
                      {service.title}
                    </h3>
                  </div>
                  <p className="text-gray-300 mb-6">
                    {service.description}
                  </p>
                  <Link 
                    to="/contact" 
                    className="inline-flex items-center text-blue-400 hover:text-blue-300 font-medium"
                  >
                    Learn More
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </div>
              ))}
            </div>
            
            <div className="text-center mt-12">
              <Link 
                to="/contact"
                className="inline-flex items-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700"
              >
                Get Started Today
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AIPagePage;
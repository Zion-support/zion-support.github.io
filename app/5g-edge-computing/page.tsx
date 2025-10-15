import React from 'react';
import { ArrowRight, CheckCircle, Users, Shield } from 'lucide-react';
import { Link } from 'react-router-dom';
import EnhancedSEO from '../components/EnhancedSEO';

const Page = () => {
  const features = [
    {
      icon: <CheckCircle className="w-8 h-8" />,
      title: 'Edge Computing',
      description: 'Process data closer to the source for faster insights'
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: 'Real-time Processing',
      description: 'Ultra-low latency processing with 5G edge infrastructure'
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: 'Secure Edge',
      description: 'Enterprise-grade security for edge computing solutions'
    }
  ];

  return (
    <>
      <EnhancedSEO 
        title="5G Edge Computing Solutions | Zion Tech Group"
        description="Leverage the power of 5G networks for edge computing and real-time processing"
        keywords="5G edge computing, edge processing, real-time computing, low latency"
      />
      
      <div className="min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900">
        {/* Hero Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              5G Edge Computing Solutions
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Leverage the power of 5G networks for edge computing and real-time processing
            </p>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Why Choose Our 5G Edge Computing?
              </h2>
              <p className="text-xl text-gray-400 max-w-3xl mx-auto">
                Transform your infrastructure with our cutting-edge 5G edge computing platform
              </p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-8">
              {features.map((feature, index) => (
                <div key={index} className="bg-white/10 backdrop-blur-sm rounded-lg p-8 text-center">
                  <div className="text-blue-400 mb-4 flex justify-center">
                    {feature.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-4">
                    {feature.title}
                  </h3>
                  <p className="text-gray-300">
                    {feature.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Ready to Transform Your Edge Computing?
            </h2>
            <p className="text-xl text-gray-400 mb-8">
              Get started with our 5G edge computing solutions today
            </p>
            <Link 
              to="/contact" 
              className="inline-flex items-center bg-blue-600 hover:bg-blue-700 text-white font-semibold py-4 px-8 rounded-lg transition-colors duration-200"
            >
              Get Started
              <ArrowRight className="ml-2 w-5 h-5" />
            </Link>
          </div>
        </section>
      </div>
    </>
  );
};

export default Page;
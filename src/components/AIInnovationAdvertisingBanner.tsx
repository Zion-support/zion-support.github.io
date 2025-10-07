import React from 'react';
import { Link } from 'react-router-dom';

const AIInnovationAdvertisingBanner: React.FC = () => {
  const features = [
    {
      title: 'AI-Powered Solutions',
      description: 'Leverage cutting-edge artificial intelligence to transform your business operations.',
      icon: '🤖',
    },
    {
      title: 'Advanced Analytics',
      description: 'Get deep insights with our comprehensive analytics and reporting tools.',
      icon: '📊',
    },
    {
      title: 'Scalable Infrastructure',
      description: 'Built to scale with your business needs and growth requirements.',
      icon: '⚡',
    },
  ];

  return (
    <div className="bg-gradient-to-r from-purple-900 to-indigo-900 text-white py-16 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4">AI Innovation at Scale</h2>
          <p className="text-xl text-purple-200 max-w-3xl mx-auto">
            Transform your business with our comprehensive AI solutions and cutting-edge technology stack.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {/* Left Side - Features */}
          <div className="bg-white/5 backdrop-blur-lg rounded-2xl p-8 border border-white/10">
            <h3 className="text-2xl font-semibold mb-6">Key Features</h3>
            <div className="space-y-6">
              {features.map((feature, index) => (
                <div key={index} className="flex items-start space-x-4">
                  <div className="text-2xl">{feature.icon}</div>
                  <div>
                    <h4 className="text-lg font-medium mb-2">{feature.title}</h4>
                    <p className="text-purple-200">{feature.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          {/* Right Side - CTA */}
          <div className="bg-white/5 backdrop-blur-lg rounded-2xl p-8 border border-white/10 flex flex-col justify-center">
            <h3 className="text-2xl font-semibold mb-4">Ready to Get Started?</h3>
            <p className="text-purple-200 mb-6">
              Join thousands of businesses already using our AI solutions to drive growth and innovation.
            </p>
            <div className="space-y-4">
              <Link 
                to="/contact"
                className="block w-full bg-purple-600 hover:bg-purple-700 text-white text-center py-3 px-6 rounded-lg transition-colors"
              >
                Contact Us Today
              </Link>
              <Link 
                to="/services"
                className="block w-full border border-white/30 hover:border-white/50 text-white text-center py-3 px-6 rounded-lg transition-colors"
              >
                View Our Services
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AIInnovationAdvertisingBanner;
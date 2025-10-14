import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Circle, Right } from 'lucide-react';

const RoboticsPage: React.FC = () => {
  const roboticsSolutions = [
    {
      title: 'Industrial Automation',
      description: 'Advanced robotic systems for manufacturing and industrial processes.',
      features: [
        'Automated assembly lines',
        'Quality control systems',
        'Material handling robots',
        'Predictive maintenance'
      ]
    },
    {
      title: 'Service Robotics',
      description: 'Intelligent service robots for healthcare, hospitality, and retail.',
      features: [
        'Customer service robots',
        'Cleaning automation',
        'Delivery systems',
        'Healthcare assistance'
      ]
    },
    {
      title: 'Autonomous Vehicles',
      description: 'Self-driving technology for various transportation applications.',
      features: [
        'Fleet management',
        'Route optimization',
        'Safety systems',
        'Real-time monitoring'
      ]
    }
  ];

  return (
    <>
      <Helmet>
        <title>Robotics Solutions - Zion Tech Group</title>
        <meta name="description" content="Advanced robotics solutions powered by AI and cutting-edge technology." />
        <meta name="keywords" content="robotics, automation, AI robots, industrial automation, service robots" />
      </Helmet>
      
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        <div className="container mx-auto px-4 py-16">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              <span className="bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
                Robotics
              </span>
              <br />
              <span className="text-white">Solutions</span>
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Transform your business with our advanced robotics solutions.
              Powered by cutting-edge AI technology and industry expertise.
            </p>
          </div>

          {/* Solutions Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {roboticsSolutions.map((solution, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300 group">
                <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-blue-300 transition-colors">
                  {solution.title}
                </h3>
                <p className="text-gray-300 mb-4">
                  {solution.description}
                </p>
                <div className="space-y-2">
                  {solution.features.map((feature, idx) => (
                    <div key={idx} className="flex items-center text-sm text-gray-300">
                      <Circle className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
                      <span>{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* CTA Section */}
          <div className="text-center">
            <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10 max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold text-white mb-4">Ready to Automate?</h2>
              <p className="text-xl text-gray-300 mb-8">
                Let us help you implement robotics solutions that will transform your business operations.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="bg-gradient-to-r from-blue-500 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-blue-600 hover:to-purple-700 transition-all duration-300 flex items-center justify-center group">
                  Get Started
                  <Right className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                </button>
                <button className="border border-blue-400 text-blue-400 px-8 py-4 rounded-lg font-semibold hover:bg-blue-400 hover:text-slate-900 transition-all duration-300">
                  Learn More
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default RoboticsPage;
import React from 'react';
import { Link } from 'react-router-dom';
import { Play, ArrowRight, CheckCircle, Zap, Brain, Shield } from 'lucide-react';
import EnhancedSEO from '../components/EnhancedSEO';

const DemoPage = () => {
  const demos = [
    {
      title: 'AI Analytics Dashboard',
      description: 'See how our AI analytics can transform your data into actionable insights.',
      icon: Brain,
      features: ['Real-time Analytics', 'Predictive Insights', 'Custom Dashboards']
    },
    {
      title: '5G Network Performance',
      description: 'Experience the power of 5G technology in action.',
      icon: Zap,
      features: ['Ultra-low Latency', 'High-speed Data', 'Reliable Connectivity']
    },
    {
      title: 'Cybersecurity Suite',
      description: 'Explore our comprehensive security solutions and threat detection.',
      icon: Shield,
      features: ['Threat Detection', 'Real-time Monitoring', 'Automated Response']
    }
  ];

  return (
    <div className="min-h-screen">
      <EnhancedSEO 
        title="Demo - Zion Tech Group"
        description="Experience our AI solutions, IT services, and 5G technology through interactive demos and live demonstrations."
        keywords="demo, AI demo, technology demo, 5G demo, cybersecurity demo, interactive demo"
      />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Experience Our Solutions
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
            See our AI solutions, IT services, and 5G technology in action through interactive demos and live demonstrations.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              to="/contact" 
              className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-8 rounded-lg transition-colors flex items-center justify-center gap-2"
            >
              Schedule Demo <ArrowRight className="w-5 h-5" />
            </Link>
            <Link 
              to="/contact" 
              className="border border-blue-400 text-blue-400 hover:bg-blue-400 hover:text-white font-bold py-3 px-8 rounded-lg transition-colors"
            >
              Contact Sales
            </Link>
          </div>
        </div>

        {/* Demo Grid */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {demos.map((demo, index) => {
            const IconComponent = demo.icon;
            return (
              <div key={index} className="bg-gray-800/50 backdrop-blur-sm rounded-lg border border-gray-700 hover:border-blue-500 transition-colors p-6">
                <IconComponent className="w-12 h-12 text-blue-400 mb-4" />
                <h3 className="text-xl font-bold text-white mb-3">{demo.title}</h3>
                <p className="text-gray-300 mb-4">{demo.description}</p>
                <ul className="space-y-2 mb-6">
                  {demo.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-sm text-gray-400">
                      <CheckCircle className="w-4 h-4 text-green-400 mr-2" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <button className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-lg transition-colors flex items-center justify-center gap-2">
                  <Play className="w-4 h-4" />
                  Watch Demo
                </button>
              </div>
            );
          })}
        </div>

        {/* Live Demo Section */}
        <div className="bg-gradient-to-r from-blue-900/20 to-purple-900/20 rounded-lg p-8 text-center mb-16">
          <h2 className="text-3xl font-bold text-white mb-4">Live Interactive Demo</h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Experience our solutions in real-time with our interactive demo environment.
          </p>
          <div className="bg-gray-800/50 rounded-lg p-8 mb-8">
            <div className="aspect-video bg-gray-700 rounded-lg flex items-center justify-center mb-4">
              <div className="text-center">
                <Play className="w-16 h-16 text-blue-400 mx-auto mb-4" />
                <p className="text-gray-300">Interactive Demo Coming Soon</p>
              </div>
            </div>
            <p className="text-gray-400 text-sm">
              Our interactive demo environment is currently being prepared. Contact us to schedule a personalized demonstration.
            </p>
          </div>
          <Link 
            to="/contact" 
            className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-bold py-4 px-8 rounded-lg transition-all duration-300 transform hover:scale-105 inline-flex items-center gap-2"
          >
            <Play className="w-5 h-5" />
            Schedule Your Demo
          </Link>
        </div>

        {/* Contact Section */}
        <div className="text-center">
          <h2 className="text-3xl font-bold text-white mb-4">Ready to See More?</h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Contact our team to schedule a personalized demonstration tailored to your business needs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              to="/contact" 
              className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-8 rounded-lg transition-colors"
            >
              Contact Us
            </Link>
            <Link 
              to="/ai-services" 
              className="border border-blue-400 text-blue-400 hover:bg-blue-400 hover:text-white font-bold py-3 px-8 rounded-lg transition-colors"
            >
              Explore AI Services
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DemoPage;

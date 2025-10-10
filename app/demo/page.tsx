'use client';
import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { Play, Clock, CheckCircle, ArrowRight } from 'lucide-react';

interface Demo {
  id: number;
  title: string;
  description: string;
  duration: string;
  features: string[];
}

const DemoPage: React.FC = () => {
  const [selectedDemo, setSelectedDemo] = useState<number | null>(null);

  const demos: Demo[] = [
    {
      id: 1,
      title: 'AI Analytics Dashboard',
      description: 'See how our AI analytics can transform your business intelligence',
      duration: '5 min',
      features: ['Real-time data visualization', 'Predictive analytics', 'Custom reports']
    },
    {
      id: 2,
      title: 'Cloud Migration Demo',
      description: 'Experience seamless cloud migration with our automated tools',
      duration: '8 min',
      features: ['Automated migration', 'Zero downtime', 'Cost optimization']
    },
    {
      id: 3,
      title: 'AI Chatbot Builder',
      description: 'Create intelligent chatbots without coding knowledge',
      duration: '6 min',
      features: ['Drag-and-drop interface', 'Natural language processing', 'Multi-channel support']
    },
    {
      id: 4,
      title: 'Cybersecurity Suite',
      description: 'Explore our comprehensive security monitoring and threat detection',
      duration: '7 min',
      features: ['Real-time monitoring', 'Threat detection', 'Automated response']
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Helmet>
        <title>Demo - Zion Tech Group | See Our Solutions in Action</title>
        <meta name="description" content="Experience our AI and IT solutions through interactive demos. See how our technology can transform your business." />
        <meta name="keywords" content="demo, AI solutions, IT services, interactive demo, technology showcase" />
      </Helmet>
      
      <div className="pt-20 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              See Our Solutions in Action
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Experience our AI and IT solutions through interactive demos. 
              See firsthand how our technology can transform your business.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
            {demos.map((demo) => (
              <div key={demo.id} className="bg-white/10 backdrop-blur-sm rounded-lg p-8 hover:bg-white/20 transition-all duration-300">
                <div className="aspect-video bg-gradient-to-r from-cyan-500 to-blue-600 rounded-lg mb-6 flex items-center justify-center">
                  <div className="text-center">
                    <Play className="w-16 h-16 text-white mx-auto mb-4" />
                    <p className="text-white font-semibold">Demo Video</p>
                  </div>
                </div>
                
                <h3 className="text-2xl font-bold text-white mb-3">{demo.title}</h3>
                <p className="text-gray-300 mb-4">{demo.description}</p>
                
                <div className="flex items-center mb-4">
                  <Clock className="w-4 h-4 text-cyan-400 mr-2" />
                  <span className="text-cyan-400 text-sm">{demo.duration}</span>
                </div>
                
                <ul className="space-y-2 mb-6">
                  {demo.features.map((feature, index) => (
                    <li key={index} className="flex items-center text-gray-300">
                      <CheckCircle className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
                
                <button className="w-full bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-6 py-3 rounded-lg hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 transform hover:scale-105 flex items-center justify-center">
                  <Play className="w-5 h-5 mr-2" />
                  Watch Demo
                </button>
              </div>
            ))}
          </div>

          <div className="text-center mt-16">
            <h2 className="text-3xl font-bold text-white mb-6">
              Ready to See More?
            </h2>
            <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
              Schedule a personalized demo with our team to see how our solutions 
              can specifically address your business needs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-8 py-3 rounded-lg hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 transform hover:scale-105">
                Schedule Demo
              </button>
              <button className="border border-white text-white px-8 py-3 rounded-lg hover:bg-white hover:text-slate-900 transition-all duration-300 flex items-center">
                Contact Sales
                <ArrowRight className="w-4 h-4 ml-2" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DemoPage;
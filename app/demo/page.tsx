import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { Play, ArrowRight, Circle, Star, CheckCircle } from 'lucide-react';

const DemoPage: React.FC = () => {
  const [selectedDemo, setSelectedDemo] = useState('ai-solutions');

  const demos = [
    {
      id: 'ai-solutions',
      title: 'AI Solutions Demo',
      description: 'Experience our AI-powered automation and machine learning capabilities.',
      duration: '15 minutes',
      features: ['Machine Learning Models', 'Natural Language Processing', 'Computer Vision', 'Predictive Analytics']
    },
    {
      id: 'cloud-services',
      title: 'Cloud Services Demo',
      description: 'See how our cloud infrastructure can scale with your business needs.',
      duration: '20 minutes',
      features: ['Auto-scaling', 'Load Balancing', 'Data Migration', 'Security Features']
    },
    {
      id: 'cybersecurity',
      title: 'Cybersecurity Demo',
      description: 'Learn about our comprehensive security solutions and threat protection.',
      duration: '10 minutes',
      features: ['Threat Detection', 'Vulnerability Assessment', 'Compliance Monitoring', 'Incident Response']
    }
  ];

  const currentDemo = demos.find(demo => demo.id === selectedDemo) || demos[0];

  return (
    <div className="min-h-screen bg-white">
      <Helmet>
        <title>Demo - Zion Tech Group</title>
        <meta name="description" content="Experience our AI and IT solutions with interactive demos." />
      </Helmet>
      
      <div className="container mx-auto px-4 py-16">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-gray-900 mb-8">Interactive Demos</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Experience our solutions firsthand with interactive demonstrations 
            designed to showcase the power of our AI and IT technologies.
          </p>
        </div>

        {/* Demo Selection */}
        <div className="max-w-4xl mx-auto mb-12">
          <div className="grid md:grid-cols-3 gap-6">
            {demos.map((demo) => (
              <button
                key={demo.id}
                onClick={() => setSelectedDemo(demo.id)}
                className={`p-6 rounded-lg border-2 transition-all ${
                  selectedDemo === demo.id
                    ? 'border-blue-500 bg-blue-50'
                    : 'border-gray-200 hover:border-gray-300'
                }`}
              >
                <div className="text-left">
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">{demo.title}</h3>
                  <p className="text-gray-600 text-sm mb-3">{demo.description}</p>
                  <div className="flex items-center text-sm text-gray-500">
                    <Circle className="w-4 h-4 mr-1" />
                    {demo.duration}
                  </div>
                </div>
              </button>
            ))}
          </div>
        </div>

        {/* Demo Content */}
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Demo Video/Content */}
            <div className="bg-gray-900 rounded-lg p-8 text-center">
              <div className="w-full h-64 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg flex items-center justify-center mb-4">
                <Play className="w-16 h-16 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">{currentDemo.title}</h3>
              <p className="text-gray-300 mb-4">{currentDemo.description}</p>
              <button className="bg-white text-gray-900 px-6 py-2 rounded-lg hover:bg-gray-100 transition-colors">
                Start Demo
              </button>
            </div>

            {/* Demo Features */}
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-6">What You'll See</h3>
              <ul className="space-y-4">
                {currentDemo.features.map((feature, index) => (
                  <li key={index} className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-0.5" />
                    <span className="text-gray-700">{feature}</span>
                  </li>
                ))}
              </ul>
              
              <div className="mt-8 p-6 bg-blue-50 rounded-lg">
                <h4 className="text-lg font-semibold text-gray-900 mb-2">Ready to Get Started?</h4>
                <p className="text-gray-600 mb-4">
                  Schedule a personalized demo with our experts to see how our solutions 
                  can address your specific business needs.
                </p>
                <button className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors flex items-center">
                  Schedule Demo
                  <ArrowRight className="w-4 h-4 ml-2" />
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Testimonials */}
        <div className="mt-16 max-w-4xl mx-auto">
          <h3 className="text-2xl font-bold text-center text-gray-900 mb-8">What Our Clients Say</h3>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-lg border border-gray-200">
              <div className="flex items-center mb-4">
                <div className="flex text-yellow-400">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-current" />
                  ))}
                </div>
                <span className="text-sm text-gray-500 ml-2">5.0</span>
              </div>
              <p className="text-gray-600 mb-4">
                "The AI solutions demo was incredible. We could see exactly how it would 
                integrate with our existing systems and the potential ROI was clear."
              </p>
              <div className="text-sm text-gray-500">
                - Sarah Johnson, CTO at TechCorp
              </div>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-lg border border-gray-200">
              <div className="flex items-center mb-4">
                <div className="flex text-yellow-400">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-current" />
                  ))}
                </div>
                <span className="text-sm text-gray-500 ml-2">5.0</span>
              </div>
              <p className="text-gray-600 mb-4">
                "The cloud services demonstration showed us exactly how to scale our 
                infrastructure. The implementation was seamless and the results exceeded expectations."
              </p>
              <div className="text-sm text-gray-500">
                - Michael Chen, VP Engineering at DataFlow
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DemoPage;
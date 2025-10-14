import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { 
  PlayIcon, 
  CalendarIcon, 
  ClockIcon,
  CheckCircleIcon,
  ArrowRightIcon
} from '@heroicons/react/24/outline';

const DemoPage: React.FC = () => {
  const [selectedDemo, setSelectedDemo] = useState('ai-chatbot');

  const demos = [
    {
      id: 'ai-chatbot',
      title: 'AI Chatbot Demo',
      description: 'Experience our intelligent chatbot that can handle customer inquiries, provide support, and learn from interactions.',
      duration: '15 min',
      features: ['Natural Language Processing', 'Context Awareness', 'Multi-language Support', 'Integration Ready']
    },
    {
      id: 'ai-analytics',
      title: 'AI Analytics Dashboard',
      description: 'See how our AI-powered analytics can transform your data into actionable insights and predictions.',
      duration: '20 min',
      features: ['Real-time Analytics', 'Predictive Modeling', 'Custom Dashboards', 'Automated Reports']
    },
    {
      id: 'security-monitor',
      title: 'Security Monitoring',
      description: 'Explore our advanced cybersecurity monitoring system that detects and prevents threats in real-time.',
      duration: '25 min',
      features: ['Threat Detection', 'Real-time Alerts', 'Incident Response', 'Compliance Reporting']
    },
    {
      id: 'cloud-infrastructure',
      title: 'Cloud Infrastructure',
      description: 'Discover our scalable cloud solutions that can handle any workload with high availability and performance.',
      duration: '30 min',
      features: ['Auto-scaling', 'Load Balancing', 'Disaster Recovery', 'Cost Optimization']
    }
  ];

  const selectedDemoData = demos.find(demo => demo.id === selectedDemo);

  return (
    <>
      <Helmet>
        <title>Live Demos - Zion Tech Group</title>
        <meta name="description" content="Experience our AI and IT solutions through interactive demos. See how our technology can transform your business." />
      </Helmet>
      
      <div className="min-h-screen bg-slate-900 text-white">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">
                Live Demos
              </h1>
              <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
                Experience our cutting-edge AI and IT solutions firsthand. See how our technology can transform your business operations.
              </p>
            </div>
          </div>
        </section>

        {/* Demo Selection */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-3xl font-bold text-white mb-4">Choose Your Demo</h2>
                <p className="text-gray-300">Select a demo to explore our solutions in action</p>
              </div>

              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
                {demos.map((demo) => (
                  <button
                    key={demo.id}
                    onClick={() => setSelectedDemo(demo.id)}
                    className={`p-6 rounded-xl border transition-all duration-300 text-left ${
                      selectedDemo === demo.id
                        ? 'border-purple-500 bg-purple-500/10'
                        : 'border-slate-700 bg-slate-800/50 hover:border-slate-600'
                    }`}
                  >
                    <h3 className="text-lg font-semibold text-white mb-2">{demo.title}</h3>
                    <p className="text-gray-300 text-sm mb-3">{demo.description}</p>
                    <div className="flex items-center text-purple-400 text-sm">
                      <ClockIcon className="w-4 h-4 mr-1" />
                      {demo.duration}
                    </div>
                  </button>
                ))}
              </div>

              {/* Selected Demo Details */}
              {selectedDemoData && (
                <div className="bg-slate-800/50 rounded-xl p-8 border border-slate-700">
                  <div className="grid lg:grid-cols-2 gap-8">
                    <div>
                      <h3 className="text-2xl font-bold text-white mb-4">{selectedDemoData.title}</h3>
                      <p className="text-gray-300 mb-6">{selectedDemoData.description}</p>
                      
                      <div className="space-y-4 mb-8">
                        <h4 className="text-lg font-semibold text-white">Key Features:</h4>
                        <ul className="space-y-2">
                          {selectedDemoData.features.map((feature, index) => (
                            <li key={index} className="flex items-center text-gray-300">
                              <CheckCircleIcon className="w-5 h-5 text-purple-400 mr-3 flex-shrink-0" />
                              {feature}
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div className="flex flex-col sm:flex-row gap-4">
                        <button className="flex items-center justify-center bg-gradient-to-r from-purple-600 to-cyan-600 text-white px-6 py-3 rounded-lg font-semibold hover:from-purple-700 hover:to-cyan-700 transition-all duration-300">
                          <PlayIcon className="w-5 h-5 mr-2" />
                          Start Demo
                        </button>
                        <button className="flex items-center justify-center border border-purple-400 text-purple-300 px-6 py-3 rounded-lg font-semibold hover:bg-purple-400 hover:text-white transition-all duration-300">
                          <CalendarIcon className="w-5 h-5 mr-2" />
                          Schedule Live Demo
                        </button>
                      </div>
                    </div>

                    <div className="bg-slate-700/50 rounded-lg p-6">
                      <div className="aspect-w-16 aspect-h-9 bg-gradient-to-br from-purple-600 to-cyan-600 rounded-lg flex items-center justify-center">
                        <div className="text-center">
                          <PlayIcon className="w-16 h-16 text-white mx-auto mb-4" />
                          <p className="text-white font-medium">Interactive Demo</p>
                          <p className="text-gray-300 text-sm">Click to start</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </section>

        {/* Demo Benefits */}
        <section className="py-16 bg-slate-800/50">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-3xl font-bold text-white mb-4">Why Try Our Demos?</h2>
                <p className="text-gray-300">Experience the power of our solutions before you commit</p>
              </div>

              <div className="grid md:grid-cols-3 gap-8">
                <div className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-cyan-500 rounded-full flex items-center justify-center mx-auto mb-6">
                    <PlayIcon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-4">Interactive Experience</h3>
                  <p className="text-gray-300">Get hands-on experience with our solutions in a controlled environment.</p>
                </div>

                <div className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-cyan-500 rounded-full flex items-center justify-center mx-auto mb-6">
                    <CheckCircleIcon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-4">Real Results</h3>
                  <p className="text-gray-300">See actual performance metrics and results from our technology.</p>
                </div>

                <div className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-cyan-500 rounded-full flex items-center justify-center mx-auto mb-6">
                    <ArrowRightIcon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-4">Easy Next Steps</h3>
                  <p className="text-gray-300">Ready to implement? We'll guide you through the next steps.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-gradient-to-r from-purple-900 to-cyan-900">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold text-white mb-4">
              Ready to See More?
            </h2>
            <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
              Schedule a personalized demo with our experts to see how our solutions can address your specific needs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <button className="bg-white text-purple-900 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-all duration-300 flex items-center gap-2">
                <CalendarIcon className="w-5 h-5" />
                Schedule Live Demo
              </button>
              <button className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-purple-900 transition-all duration-300 flex items-center gap-2">
                <PlayIcon className="w-5 h-5" />
                Watch All Demos
              </button>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default DemoPage;
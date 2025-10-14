import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { 
  PlayIcon,
  ArrowRightIcon,
  CheckCircleIcon,
  ClockIcon,
  UserGroupIcon,
  CpuChipIcon,
  ShieldCheckIcon,
  CloudIcon
} from '@heroicons/react/24/outline';

const DemoPage: React.FC = () => {
  const [selectedDemo, setSelectedDemo] = useState<string | null>(null);

  const demos = [
    {
      id: 'ai-chatbot',
      title: 'AI Chatbot Demo',
      description: 'Experience our intelligent chatbot that can handle customer inquiries, provide support, and assist with various tasks.',
      duration: '5 minutes',
      features: [
        'Natural Language Understanding',
        'Context-Aware Responses',
        'Multi-language Support',
        'Integration Capabilities'
      ],
      icon: CpuChipIcon
    },
    {
      id: 'data-analytics',
      title: 'Predictive Analytics Dashboard',
      description: 'See how our AI-powered analytics can predict trends, identify patterns, and provide actionable insights.',
      duration: '10 minutes',
      features: [
        'Real-time Data Processing',
        'Predictive Modeling',
        'Interactive Visualizations',
        'Custom Reports'
      ],
      icon: CloudIcon
    },
    {
      id: 'security-monitoring',
      title: 'AI Security Monitoring',
      description: 'Witness our AI security system in action, detecting threats and anomalies in real-time.',
      duration: '7 minutes',
      features: [
        'Threat Detection',
        'Anomaly Analysis',
        'Automated Response',
        'Security Reporting'
      ],
      icon: ShieldCheckIcon
    }
  ];

  const benefits = [
    'See solutions in action',
    'Understand implementation process',
    'Ask questions to our experts',
    'Get customized recommendations',
    'No commitment required',
    'Free consultation included'
  ];

  const handleDemoSelect = (demoId: string) => {
    setSelectedDemo(demoId);
  };

  return (
    <>
      <Helmet>
        <title>Live Demo - Zion Tech Group</title>
        <meta name="description" content="Experience our AI and IT solutions through interactive demos. See how our technology can transform your business." />
      </Helmet>

      <div className="min-h-screen bg-slate-900">
        {/* Hero Section */}
        <section className="relative py-20 bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
                Experience Our <span className="bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">Solutions</span>
              </h1>
              <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
                See our AI and IT solutions in action through interactive demos. 
                Experience the power of our technology firsthand.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link 
                  to="/contact" 
                  className="bg-gradient-to-r from-purple-600 to-cyan-600 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:from-purple-700 hover:to-cyan-700 transition-all duration-300 hover:scale-105"
                >
                  Schedule a Demo
                </Link>
                <Link 
                  to="/contact" 
                  className="border-2 border-purple-400 text-purple-300 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-purple-400 hover:text-white transition-all duration-300 hover:scale-105"
                >
                  Contact Sales
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Demo Selection Section */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Choose Your Demo
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Select from our available demos to see our solutions in action. 
                Each demo is designed to showcase specific capabilities and use cases.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {demos.map((demo) => (
                <div 
                  key={demo.id}
                  className={`bg-slate-800 p-8 rounded-xl border transition-all duration-300 cursor-pointer ${
                    selectedDemo === demo.id 
                      ? 'border-purple-500 scale-105' 
                      : 'border-slate-700 hover:border-purple-500 hover:scale-105'
                  }`}
                  onClick={() => handleDemoSelect(demo.id)}
                >
                  <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-cyan-500 rounded-lg flex items-center justify-center mb-6">
                    <demo.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-4">{demo.title}</h3>
                  <p className="text-gray-300 mb-6">{demo.description}</p>
                  
                  <div className="flex items-center text-gray-400 mb-4">
                    <ClockIcon className="w-5 h-5 mr-2" />
                    <span>{demo.duration}</span>
                  </div>

                  <ul className="space-y-2 mb-6">
                    {demo.features.map((feature, index) => (
                      <li key={index} className="flex items-center text-gray-300">
                        <CheckCircleIcon className="w-5 h-5 text-green-400 mr-3" />
                        {feature}
                      </li>
                    ))}
                  </ul>

                  <button className="w-full bg-gradient-to-r from-purple-600 to-cyan-600 text-white px-6 py-3 rounded-lg font-semibold hover:from-purple-700 hover:to-cyan-700 transition-all duration-300 flex items-center justify-center gap-2">
                    <PlayIcon className="w-5 h-5" />
                    Start Demo
                  </button>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Selected Demo Section */}
        {selectedDemo && (
          <section className="py-20 bg-slate-800/50">
            <div className="container mx-auto px-4">
              <div className="max-w-4xl mx-auto text-center">
                <h2 className="text-3xl font-bold text-white mb-6">
                  Demo: {demos.find(d => d.id === selectedDemo)?.title}
                </h2>
                <div className="bg-slate-800 p-8 rounded-xl border border-slate-700 mb-8">
                  <div className="aspect-video bg-gradient-to-br from-purple-900/20 to-cyan-900/20 rounded-lg flex items-center justify-center mb-6">
                    <div className="text-center">
                      <PlayIcon className="w-16 h-16 text-purple-400 mx-auto mb-4" />
                      <p className="text-gray-300">Interactive Demo Coming Soon</p>
                      <p className="text-sm text-gray-400">Contact us to schedule a live demonstration</p>
                    </div>
                  </div>
                  <p className="text-gray-300 mb-6">
                    {demos.find(d => d.id === selectedDemo)?.description}
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <Link 
                      to="/contact" 
                      className="bg-gradient-to-r from-purple-600 to-cyan-600 text-white px-6 py-3 rounded-lg font-semibold hover:from-purple-700 hover:to-cyan-700 transition-all duration-300"
                    >
                      Schedule Live Demo
                    </Link>
                    <button 
                      onClick={() => setSelectedDemo(null)}
                      className="border border-slate-600 text-gray-300 px-6 py-3 rounded-lg font-semibold hover:bg-slate-700 transition-all duration-300"
                    >
                      Back to Demos
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </section>
        )}

        {/* Benefits Section */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Why Schedule a Demo?
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Our demos are designed to give you a comprehensive understanding of our solutions 
                and how they can benefit your specific business needs.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {benefits.map((benefit, index) => (
                <div key={index} className="text-center p-6 bg-slate-800/50 rounded-xl border border-slate-700 hover:border-purple-500 transition-all duration-300">
                  <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-cyan-500 rounded-lg flex items-center justify-center mx-auto mb-4">
                    <CheckCircleIcon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-2">{benefit}</h3>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-r from-purple-900 to-cyan-900">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Ready to See Our Solutions in Action?
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Schedule a personalized demo with our experts and discover how our AI and IT solutions 
              can transform your business.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                to="/contact" 
                className="bg-white text-purple-900 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-gray-100 transition-all duration-300 hover:scale-105"
              >
                Schedule Your Demo
              </Link>
              <Link 
                to="/contact" 
                className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white hover:text-purple-900 transition-all duration-300 hover:scale-105"
              >
                Talk to an Expert
              </Link>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default DemoPage;
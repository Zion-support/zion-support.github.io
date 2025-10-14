import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import {
  PlayIcon,
  ArrowRightIcon,
  CheckIcon,
  ClockIcon,
  UserIcon,
  CpuChipIcon,
  ServerIcon,
  CloudIcon,
  ShieldCheckIcon
} from '@heroicons/react/24/outline';

const DemoPage: React.FC = () => {
  const [selectedDemo, setSelectedDemo] = useState('ai-solutions');

  const demos = [
    {
      id: 'ai-solutions',
      title: 'AI Solutions Demo',
      description: 'Experience our AI-powered solutions including machine learning models, natural language processing, and predictive analytics.',
      duration: '15 minutes',
      features: [
        'Machine Learning Model Training',
        'Natural Language Processing',
        'Computer Vision Recognition',
        'Predictive Analytics Dashboard',
        'AI Chatbot Interaction',
        'Automated Decision Making'
      ],
      icon: CpuChipIcon,
      color: 'from-purple-500 to-pink-500'
    },
    {
      id: 'it-solutions',
      title: 'IT Solutions Demo',
      description: 'See how our IT services can streamline your infrastructure management and improve operational efficiency.',
      duration: '20 minutes',
      features: [
        'Infrastructure Monitoring',
        'Network Security Setup',
        'Cloud Migration Process',
        'Automated Backups',
        'Performance Optimization',
        '24/7 Support Dashboard'
      ],
      icon: ServerIcon,
      color: 'from-blue-500 to-cyan-500'
    },
    {
      id: 'cloud-infrastructure',
      title: 'Cloud Infrastructure Demo',
      description: 'Explore our cloud solutions including AWS, Azure, and Google Cloud platform implementations.',
      duration: '25 minutes',
      features: [
        'Multi-Cloud Architecture',
        'Auto-scaling Solutions',
        'Cost Optimization Tools',
        'Security Configuration',
        'Disaster Recovery Setup',
        'Performance Monitoring'
      ],
      icon: CloudIcon,
      color: 'from-green-500 to-emerald-500'
    },
    {
      id: 'cybersecurity',
      title: 'Cybersecurity Demo',
      description: 'Discover our advanced security solutions and threat detection capabilities.',
      duration: '18 minutes',
      features: [
        'Threat Detection System',
        'Security Audit Tools',
        'Penetration Testing',
        'Compliance Management',
        'Firewall Configuration',
        'Security Training Modules'
      ],
      icon: ShieldCheckIcon,
      color: 'from-red-500 to-orange-500'
    }
  ];

  const benefits = [
    'Interactive Experience',
    'Real-time Results',
    'Expert Guidance',
    'Customized Solutions',
    'No Commitment Required',
    'Immediate Value'
  ];

  const selectedDemoData = demos.find(demo => demo.id === selectedDemo);

  return (
    <>
      <Helmet>
        <title>Demo - Zion Tech Group</title>
        <meta name="description" content="Experience our AI and IT solutions through interactive demos. See how our technology can transform your business." />
        <meta name="keywords" content="demo, AI demo, IT demo, cloud demo, cybersecurity demo, interactive demo" />
      </Helmet>
      
      <div className="min-h-screen bg-slate-900 text-white">
        {/* Hero Section */}
        <section className="py-20 bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">
                Experience Our Solutions
              </h1>
              <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
                See our AI and IT solutions in action with interactive demos designed to showcase 
                the real value and capabilities of our technology.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="bg-gradient-to-r from-purple-600 to-cyan-600 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:from-purple-700 hover:to-cyan-700 transition-all duration-300 flex items-center justify-center gap-2">
                  <PlayIcon className="w-5 h-5" />
                  Start Demo
                </button>
                <Link 
                  to="/contact" 
                  className="border-2 border-purple-400 text-purple-300 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-purple-400 hover:text-white transition-all duration-300 flex items-center justify-center gap-2"
                >
                  Schedule Live Demo
                  <ArrowRightIcon className="w-5 h-5" />
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Demo Selection */}
        <section className="py-20 bg-slate-800/50">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-white mb-6">
                Choose Your Demo
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Select the solution you'd like to explore and experience its capabilities firsthand
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
              {demos.map((demo) => {
                const Icon = demo.icon;
                return (
                  <button
                    key={demo.id}
                    onClick={() => setSelectedDemo(demo.id)}
                    className={`p-6 rounded-xl border transition-all duration-300 ${
                      selectedDemo === demo.id
                        ? 'border-purple-500 bg-purple-500/10'
                        : 'border-slate-700 bg-slate-800/50 hover:border-purple-400'
                    }`}
                  >
                    <div className={`w-12 h-12 bg-gradient-to-r ${demo.color} rounded-lg flex items-center justify-center mb-4 mx-auto`}>
                      <Icon className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="text-lg font-semibold text-white mb-2">{demo.title}</h3>
                    <p className="text-sm text-gray-400">{demo.duration}</p>
                  </button>
                );
              })}
            </div>

            {/* Selected Demo Details */}
            {selectedDemoData && (
              <div className="max-w-4xl mx-auto">
                <div className="bg-slate-800/50 rounded-xl p-8 border border-slate-700">
                  <div className="flex items-start gap-6">
                    <div className={`w-16 h-16 bg-gradient-to-r ${selectedDemoData.color} rounded-lg flex items-center justify-center flex-shrink-0`}>
                      <selectedDemoData.icon className="w-8 h-8 text-white" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-2xl font-bold text-white mb-4">{selectedDemoData.title}</h3>
                      <p className="text-gray-300 mb-6">{selectedDemoData.description}</p>
                      
                      <div className="flex items-center gap-4 mb-6">
                        <div className="flex items-center text-gray-300">
                          <ClockIcon className="w-5 h-5 mr-2" />
                          {selectedDemoData.duration}
                        </div>
                        <div className="flex items-center text-gray-300">
                          <UserIcon className="w-5 h-5 mr-2" />
                          Guided by Expert
                        </div>
                      </div>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
                        {selectedDemoData.features.map((feature, index) => (
                          <div key={index} className="flex items-center text-gray-300">
                            <CheckIcon className="w-5 h-5 text-green-400 mr-3" />
                            {feature}
                          </div>
                        ))}
                      </div>

                      <div className="flex flex-col sm:flex-row gap-4">
                        <button className="bg-gradient-to-r from-purple-600 to-cyan-600 text-white px-8 py-3 rounded-lg font-semibold hover:from-purple-700 hover:to-cyan-700 transition-all duration-300 flex items-center justify-center gap-2">
                          <PlayIcon className="w-5 h-5" />
                          Start Demo
                        </button>
                        <Link 
                          to="/contact" 
                          className="border-2 border-purple-400 text-purple-300 px-8 py-3 rounded-lg font-semibold hover:bg-purple-400 hover:text-white transition-all duration-300 flex items-center justify-center gap-2"
                        >
                          Schedule Live Demo
                          <ArrowRightIcon className="w-5 h-5" />
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-20 bg-slate-900">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-white mb-6">
                Why Try Our Demos?
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Experience the power of our solutions before making any commitments
              </p>
            </div>
            
            <div className="grid grid-cols-2 md:grid-cols-3 gap-8">
              {benefits.map((benefit, index) => (
                <div key={index} className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-cyan-500 rounded-full flex items-center justify-center mx-auto mb-4">
                    <CheckIcon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-lg font-semibold text-white">{benefit}</h3>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-r from-purple-900 to-cyan-900">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Ready to See It in Action?
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Book a personalized demo with our experts and discover how our solutions 
              can transform your business.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                to="/contact" 
                className="bg-white text-purple-900 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-gray-100 transition-all duration-300"
              >
                Schedule Demo
              </Link>
              <Link 
                to="/services" 
                className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white hover:text-purple-900 transition-all duration-300"
              >
                Explore Services
              </Link>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default DemoPage;
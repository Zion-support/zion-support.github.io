

import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { 
  PlayIcon,
  CpuChipIcon,
  ShieldCheckIcon,
  CloudIcon,
  GlobeAltIcon,
  SignalIcon,
  ArrowRightIcon,
  CheckIcon,
  PhoneIcon,
  EnvelopeIcon
} from '@heroicons/react/24/outline';

const DemoPage: React.FC = () => {
  const demos = [
    {
      title: 'AI Solutions Demo',
      description: 'Experience our AI-powered solutions in action with interactive demonstrations.',
      icon: CpuChipIcon,
      features: [
        'Machine Learning Models',
        'Natural Language Processing',
        'Computer Vision',
        'Predictive Analytics'
      ],
      duration: '15 minutes'
    },
    {
      title: 'Cybersecurity Demo',
      description: 'See how our security solutions protect your digital assets in real-time.',
      icon: ShieldCheckIcon,
      features: [
        'Threat Detection',
        'Vulnerability Assessment',
        'Security Monitoring',
        'Incident Response'
      ],
      duration: '20 minutes'
    },
    {
      title: 'Cloud Infrastructure Demo',
      description: 'Explore our cloud solutions and infrastructure management capabilities.',
      icon: CloudIcon,
      features: [
        'Cloud Migration',
        'Auto-scaling',
        'Disaster Recovery',
        'Cost Optimization'
      ],
      duration: '25 minutes'
    },
    {
      title: 'Micro SaaS Demo',
      description: 'Discover our custom micro SaaS applications and their capabilities.',
      icon: GlobeAltIcon,
      features: [
        'Custom Development',
        'API Integration',
        'User Management',
        'Analytics Dashboard'
      ],
      duration: '18 minutes'
    },
    {
      title: '5G Technology Demo',
      description: 'Experience the power of 5G technology and IoT solutions.',
      icon: SignalIcon,
      features: [
        '5G Network Implementation',
        'IoT Device Management',
        'Edge Computing',
        'Real-time Processing'
      ],
      duration: '22 minutes'
    }
  ];

  return (
    <>
      <Helmet>
        <title>Demo - Zion Tech Group</title>
        <meta name="description" content="Experience our technology solutions with interactive demos. See AI, cybersecurity, cloud infrastructure, and more in action." />
        <meta name="keywords" content="demo, technology demo, AI demo, cybersecurity demo, cloud demo, micro SaaS demo" />
      </Helmet>

      {/* Hero Section */}
      <section className="relative min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <div className="w-full h-full bg-gradient-to-br from-purple-900/20 to-cyan-900/20"></div>
        </div>
        
        <div className="relative z-10 container mx-auto px-4 text-center">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-6xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">
              Experience Our Solutions
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8 leading-relaxed">
              Interactive Demos of Our Technology
            </p>
            <p className="text-lg text-gray-400 mb-12 max-w-3xl mx-auto">
              See our AI, cybersecurity, cloud infrastructure, and other solutions in action. 
              Schedule a personalized demo to explore how our technology can transform your business.
            </p>
            <Link
              to="/contact"
              className="bg-gradient-to-r from-purple-600 to-cyan-600 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:from-purple-700 hover:to-cyan-700 transition-all duration-300 inline-flex items-center gap-2"
            >
              Schedule Demo
              <ArrowRightIcon className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* Demo Grid */}
      <section className="py-20 bg-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Available Demos
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Choose from our comprehensive range of technology demonstrations
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {demos.map((demo, index) => (
              <div key={index} className="bg-slate-800 rounded-xl p-8 hover:bg-slate-700 transition-all duration-300 group">
                <div className="flex items-center mb-6">
                  <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-cyan-500 rounded-lg flex items-center justify-center mr-4 group-hover:scale-110 transition-transform">
                    <demo.icon className="w-8 h-8 text-white" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-white">{demo.title}</h3>
                    <p className="text-purple-400 text-sm">{demo.duration}</p>
                  </div>
                </div>
                
                <p className="text-gray-300 mb-6 leading-relaxed">
                  {demo.description}
                </p>
                
                <ul className="space-y-3 mb-6">
                  {demo.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-gray-300">
                      <CheckIcon className="w-5 h-5 text-green-400 mr-3" />
                      {feature}
                    </li>
                  ))}
                </ul>
                
                <Link
                  to="/contact"
                  className="inline-flex items-center text-purple-400 hover:text-purple-300 font-semibold group-hover:gap-2 transition-all"
                >
                  Schedule Demo
                  <ArrowRightIcon className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 bg-slate-800/50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to See Our Solutions in Action?</h2>
          <p className="text-xl text-gray-300 mb-8">
            Schedule a personalized demo tailored to your business needs
          </p>
          
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <div className="bg-slate-800 rounded-xl p-6">
              <PhoneIcon className="w-12 h-12 text-purple-400 mx-auto mb-4" />
              <h3 className="text-xl font-bold text-white mb-2">Call Us</h3>
              <p className="text-gray-300 text-lg">+1-302-464-0950</p>
              <p className="text-gray-400 text-sm">Available 24/7</p>
            </div>
            <div className="bg-slate-800 rounded-xl p-6">
              <EnvelopeIcon className="w-12 h-12 text-purple-400 mx-auto mb-4" />
              <h3 className="text-xl font-bold text-white mb-2">Email Us</h3>
              <p className="text-gray-300 text-lg">kleber@ziontechgroup.com</p>
              <p className="text-gray-400 text-sm">Quick response guaranteed</p>
            </div>
          </div>
          
          <Link
            to="/contact"
            className="bg-gradient-to-r from-purple-600 to-cyan-600 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:from-purple-700 hover:to-cyan-700 transition-all duration-300 inline-flex items-center gap-2"
          >
            Schedule Your Demo
            <PlayIcon className="w-5 h-5" />
          </Link>
        </div>
      </section>
    </>
  );
};

export default DemoPage;

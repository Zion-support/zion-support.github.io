'use client';
import React from 'react';
import SEOHead from '../components/SEOHead';
import { 
  PlayIcon, 
  CheckCircleIcon, 
  ArrowRightIcon,
  CpuChipIcon,
  ShieldCheckIcon,
  CloudIcon,
  ChartBarIcon
} from '@heroicons/react/24/outline';

const DemoPage: React.FC = () => {
  const demos = [
    {
      title: 'AI Solutions Demo',
      description: 'Experience our AI-powered solutions in action',
      icon: CpuChipIcon,
      features: ['AI Chatbot Builder', 'Document Processing', 'Predictive Analytics'],
      duration: '15 minutes',
      category: 'AI Services'
    },
    {
      title: 'Cybersecurity Demo',
      description: 'See how we protect your digital assets',
      icon: ShieldCheckIcon,
      features: ['Security Audit', 'Threat Detection', 'Compliance Monitoring'],
      duration: '20 minutes',
      category: 'Security'
    },
    {
      title: 'Cloud Infrastructure Demo',
      description: 'Explore our cloud solutions and scalability',
      icon: CloudIcon,
      features: ['Cloud Migration', 'Auto-scaling', 'Cost Optimization'],
      duration: '25 minutes',
      category: 'Infrastructure'
    },
    {
      title: 'Analytics Dashboard Demo',
      description: 'Visualize your data with our analytics platform',
      icon: ChartBarIcon,
      features: ['Real-time Dashboards', 'Custom Reports', 'Data Visualization'],
      duration: '18 minutes',
      category: 'Analytics'
    }
  ];

  return (
    <>
      <SEOHead 
        title="Schedule a Demo - Zion Tech Group"
        description="Experience our AI solutions, cybersecurity, and cloud infrastructure through interactive demos. Schedule your personalized demo today."
        keywords="demo, AI solutions, cybersecurity, cloud infrastructure, technology demonstration"
      />
      
      <div className="min-h-screen bg-slate-900 text-white">
        {/* Hero Section */}
        <section className="relative overflow-hidden py-20">
          <div className="absolute inset-0 bg-gradient-to-br from-purple-900/30 via-slate-900 to-cyan-900/30"></div>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
            <div className="text-center">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 bg-gradient-to-r from-purple-400 via-pink-400 to-cyan-400 bg-clip-text text-transparent">
                Schedule a Demo
              </h1>
              <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
                Experience our cutting-edge AI solutions, cybersecurity, and cloud infrastructure through interactive demonstrations tailored to your business needs.
              </p>
            </div>
          </div>
        </section>

        {/* Demo Options */}
        <section className="py-16 bg-slate-800/30">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl sm:text-4xl font-bold mb-4">
                Choose Your <span className="bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">Demo Experience</span>
              </h2>
              <p className="text-lg text-gray-300 max-w-2xl mx-auto">
                Select from our range of interactive demonstrations designed to showcase our solutions.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {demos.map((demo, index) => (
                <div key={index} className="bg-slate-800/50 rounded-xl p-8 border border-slate-700 hover:border-purple-500 transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-purple-500/20">
                  <div className="flex items-center mb-6">
                    <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-cyan-500 rounded-lg flex items-center justify-center mr-4">
                      <demo.icon className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-white">{demo.title}</h3>
                      <p className="text-sm text-purple-400">{demo.category}</p>
                    </div>
                  </div>
                  
                  <p className="text-gray-300 mb-6">{demo.description}</p>
                  
                  <div className="space-y-3 mb-6">
                    {demo.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-center">
                        <CheckCircleIcon className="w-5 h-5 text-green-400 mr-3" />
                        <span className="text-gray-300">{feature}</span>
                      </div>
                    ))}
                  </div>
                  
                  <div className="flex items-center justify-between mb-6">
                    <span className="text-sm text-gray-400">Duration: {demo.duration}</span>
                    <span className="text-sm text-purple-400">Free Demo</span>
                  </div>
                  
                  <button className="w-full bg-gradient-to-r from-purple-600 to-cyan-600 hover:from-purple-700 hover:to-cyan-700 text-white py-3 px-6 rounded-lg font-semibold transition-all duration-300 hover:scale-105 flex items-center justify-center">
                    <PlayIcon className="w-5 h-5 mr-2" />
                    Schedule Demo
                    <ArrowRightIcon className="w-4 h-4 ml-2" />
                  </button>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-gradient-to-r from-purple-900/40 via-slate-900 to-cyan-900/40">
          <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl sm:text-4xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">
              Ready to See Our Solutions in Action?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Schedule a personalized demo and discover how our technology can transform your business.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="/contact" className="bg-gradient-to-r from-purple-600 to-cyan-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-purple-700 hover:to-cyan-700 transition-all duration-300 transform hover:scale-105">
                Contact Sales Team
              </a>
              <a href="tel:+13024640950" className="border-2 border-white text-white hover:bg-white hover:text-slate-900 px-8 py-4 rounded-lg font-semibold transition-all duration-300">
                Call Now: (302) 464-0950
              </a>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default DemoPage;
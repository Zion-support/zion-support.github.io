'use client';
import React from 'react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import { Play, CheckCircle, ArrowRight, Phone, Mail } from 'lucide-react';

const DemoPage: React.FC = () => {
  const demos = [
    {
      title: 'AI Chatbot Demo',
      description: 'Experience our AI-powered chatbot that can handle customer inquiries 24/7',
      features: [
        'Natural language processing',
        'Multi-language support',
        'Integration with CRM systems',
        'Real-time analytics'
      ],
      videoUrl: '/videos/chatbot-demo.mp4'
    },
    {
      title: 'Machine Learning Analytics',
      description: 'See how our ML models can predict trends and optimize your business processes',
      features: [
        'Predictive analytics',
        'Real-time data processing',
        'Custom model training',
        'Automated insights'
      ],
      videoUrl: '/videos/ml-demo.mp4'
    },
    {
      title: 'Cloud Infrastructure',
      description: 'Explore our scalable cloud solutions and infrastructure management tools',
      features: [
        'Auto-scaling capabilities',
        'Multi-cloud deployment',
        'Security monitoring',
        'Cost optimization'
      ],
      videoUrl: '/videos/cloud-demo.mp4'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Navigation />
      
      <main className="container mx-auto px-4 py-16 pt-24">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-8 text-center">
            See Our <span className="text-cyan-400">Solutions</span> in Action
          </h1>
          <p className="text-xl text-gray-300 text-center mb-12 max-w-3xl mx-auto">
            Experience our AI and IT solutions through interactive demos. See how our technology can transform your business.
          </p>
          
          {/* Demo Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {demos.map((demo, index) => (
              <div key={index} className="cyber-card group hover:scale-105 transition-all duration-300">
                <div className="p-8">
                  <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                    <Play className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-4">{demo.title}</h3>
                  <p className="text-gray-300 mb-6">{demo.description}</p>
                  
                  <ul className="space-y-3 mb-6">
                    {demo.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center space-x-3">
                        <CheckCircle className="w-4 h-4 text-cyan-400 flex-shrink-0" />
                        <span className="text-gray-300 text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  
                  <button className="w-full bg-cyan-500 hover:bg-cyan-600 text-white font-medium py-3 px-6 rounded-lg transition-colors flex items-center justify-center">
                    <Play className="w-4 h-4 mr-2" />
                    Watch Demo
                  </button>
                </div>
              </div>
            ))}
          </div>
          
          {/* Live Demo Section */}
          <div className="cyber-card p-8 mb-16">
            <h2 className="text-3xl font-bold text-white mb-6 text-center">
              Request a Live Demo
            </h2>
            <p className="text-xl text-gray-300 text-center mb-8 max-w-3xl mx-auto">
              Schedule a personalized demo with our team to see how our solutions can address your specific business needs.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-bold text-white mb-4">What to Expect</h3>
                <ul className="space-y-3">
                  <li className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-cyan-400 flex-shrink-0" />
                    <span className="text-gray-300">Personalized solution walkthrough</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-cyan-400 flex-shrink-0" />
                    <span className="text-gray-300">Q&A session with our experts</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-cyan-400 flex-shrink-0" />
                    <span className="text-gray-300">Custom use case scenarios</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-cyan-400 flex-shrink-0" />
                    <span className="text-gray-300">Implementation timeline discussion</span>
                  </li>
                </ul>
              </div>
              
              <div>
                <h3 className="text-xl font-bold text-white mb-4">Schedule Your Demo</h3>
                <div className="space-y-4">
                  <a
                    href="tel:+13024640950"
                    className="flex items-center space-x-3 text-cyan-400 hover:text-cyan-300 transition-colors"
                  >
                    <Phone className="w-5 h-5" />
                    <span>(302) 464-0950</span>
                  </a>
                  <a
                    href="mailto:kleber@ziontechgroup.com"
                    className="flex items-center space-x-3 text-cyan-400 hover:text-cyan-300 transition-colors"
                  >
                    <Mail className="w-5 h-5" />
                    <span>kleber@ziontechgroup.com</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
          
          {/* CTA Section */}
          <div className="text-center">
            <div className="cyber-card p-12">
              <h2 className="text-3xl font-bold text-white mb-6">
                Ready to See More?
              </h2>
              <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
                Contact us today to schedule a personalized demo and discover how our solutions can transform your business.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="/contact"
                  className="cyber-button px-8 py-4 text-lg font-semibold inline-flex items-center space-x-2"
                >
                  <span>Schedule Demo</span>
                  <ArrowRight className="w-5 h-5" />
                </a>
                <a
                  href="tel:+13024640950"
                  className="border-2 border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-slate-900 px-8 py-4 rounded-lg font-semibold text-lg transition-colors inline-flex items-center space-x-2"
                >
                  <Phone className="w-5 h-5" />
                  <span>(302) 464-0950</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default DemoPage;
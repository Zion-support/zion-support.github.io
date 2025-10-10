'use client';
import React, { useState } from 'react';
import { Play, Calendar, Phone, Mail, CheckCircle, ArrowRight, Star, Users, Clock } from 'lucide-react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

const DemoPage: React.FC = () => {
  const [selectedDemo, setSelectedDemo] = useState('ai-services');

  const demos = [
    {
      id: 'ai-services',
      title: 'AI Services Demo',
      description: 'Experience our cutting-edge AI solutions including machine learning, natural language processing, and computer vision',
      duration: '30 minutes',
      features: [
        'Machine Learning Models',
        'Natural Language Processing',
        'Computer Vision',
        'Predictive Analytics',
        'Automated Decision Making'
      ],
      icon: '🤖'
    },
    {
      id: 'cloud-services',
      title: 'Cloud Services Demo',
      description: 'See how our cloud solutions can scale your business with secure, reliable, and cost-effective infrastructure',
      duration: '25 minutes',
      features: [
        'Cloud Migration',
        'Scalable Infrastructure',
        'Security & Compliance',
        'Cost Optimization',
        '24/7 Monitoring'
      ],
      icon: '☁️'
    },
    {
      id: 'development',
      title: 'Development Services Demo',
      description: 'Explore our custom software development capabilities and see how we build solutions that grow with your business',
      duration: '35 minutes',
      features: [
        'Custom Software Development',
        'API Integration',
        'Mobile App Development',
        'DevOps & Automation',
        'Quality Assurance'
      ],
      icon: '💻'
    },
    {
      id: 'custom',
      title: 'Custom Demo',
      description: 'Get a personalized demo tailored to your specific business needs and requirements',
      duration: '60 minutes',
      features: [
        'Customized Solution',
        'Industry-Specific Features',
        'Integration Planning',
        'ROI Analysis',
        'Implementation Roadmap'
      ],
      icon: '🎯'
    }
  ];

  const selectedDemoData = demos.find(demo => demo.id === selectedDemo);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative py-20 px-4 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,rgba(147,51,234,0.3)_0%,transparent_50%)] animate-pulse" />
        <div className="relative max-w-7xl mx-auto text-center">
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
            Book a <span className="bg-gradient-to-r from-purple-400 via-blue-400 to-cyan-400 bg-clip-text text-transparent">Demo</span>
          </h1>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed">
            See our solutions in action. Schedule a personalized demo and discover how we can transform your business.
          </p>
        </div>
      </section>

      {/* Demo Selection */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-white mb-8 text-center">Choose Your Demo</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {demos.map((demo) => (
              <button
                key={demo.id}
                onClick={() => setSelectedDemo(demo.id)}
                className={`p-6 rounded-xl border transition-all duration-300 text-left ${
                  selectedDemo === demo.id
                    ? 'bg-gradient-to-r from-purple-500/20 to-blue-500/20 border-purple-400'
                    : 'bg-white/5 border-white/10 hover:bg-white/10'
                }`}
              >
                <div className="text-4xl mb-4">{demo.icon}</div>
                <h3 className="text-xl font-semibold text-white mb-2">{demo.title}</h3>
                <p className="text-gray-300 text-sm mb-4">{demo.description}</p>
                <div className="flex items-center gap-2 text-sm text-gray-400">
                  <Clock className="w-4 h-4" />
                  <span>{demo.duration}</span>
                </div>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Selected Demo Details */}
      {selectedDemoData && (
        <section className="py-16 px-4">
          <div className="max-w-4xl mx-auto">
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-8">
              <div className="text-center mb-8">
                <div className="text-6xl mb-4">{selectedDemoData.icon}</div>
                <h2 className="text-3xl font-bold text-white mb-4">{selectedDemoData.title}</h2>
                <p className="text-xl text-gray-300 mb-6">{selectedDemoData.description}</p>
                <div className="flex items-center justify-center gap-4 text-sm text-gray-400">
                  <div className="flex items-center gap-2">
                    <Clock className="w-4 h-4" />
                    <span>{selectedDemoData.duration}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Users className="w-4 h-4" />
                    <span>1-on-1 with our experts</span>
                  </div>
                </div>
              </div>

              <div className="mb-8">
                <h3 className="text-xl font-semibold text-white mb-4">What You'll See:</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {selectedDemoData.features.map((feature, index) => (
                    <div key={index} className="flex items-center gap-3">
                      <CheckCircle className="w-5 h-5 text-green-400" />
                      <span className="text-gray-300">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="text-center">
                <button className="bg-gradient-to-r from-purple-500 to-blue-600 hover:from-purple-600 hover:to-blue-700 text-white font-bold py-4 px-8 rounded-lg transition-all duration-300 mr-4">
                  <Play className="inline-block w-5 h-5 mr-2" />
                  Schedule Demo
                </button>
                <button className="border border-white/20 text-white hover:bg-white/10 font-bold py-4 px-8 rounded-lg transition-all duration-300">
                  <Phone className="inline-block w-5 h-5 mr-2" />
                  Call Us
                </button>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Contact Information */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full mb-4">
                <Phone className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">Call Us</h3>
              <p className="text-gray-300">+1 (302) 464-0950</p>
              <p className="text-gray-400 text-sm">Mon-Fri 9AM-6PM EST</p>
            </div>
            
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full mb-4">
                <Mail className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">Email Us</h3>
              <p className="text-gray-300">kleber@ziontechgroup.com</p>
              <p className="text-gray-400 text-sm">We'll respond within 24 hours</p>
            </div>
            
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full mb-4">
                <Calendar className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">Schedule Online</h3>
              <p className="text-gray-300">Book instantly</p>
              <p className="text-gray-400 text-sm">Available 24/7</p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default DemoPage;
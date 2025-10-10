'use client';
import React, { useState } from 'react';
import { Play, Calendar, Phone, Mail, CheckCircle, ArrowRight, Star, Users, Clock, Brain, Cloud, Shield, Zap, Globe, Target } from 'lucide-react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import SEOOptimizer from '../components/SEOOptimizer';

const DemoPage: React.FC = () => {
  const [selectedDemo, setSelectedDemo] = useState('ai-services');

  const demos = [
    {
      id: 'ai-services',
      title: 'AI Services Demo',
      description: 'Experience our AI capabilities including machine learning, natural language processing, and computer vision',
      duration: '30 minutes',
      features: [
        'Machine Learning Models',
        'Natural Language Processing',
        'Computer Vision',
        'Predictive Analytics'
      ],
      icon: Brain
    },
    {
      id: 'cloud-platform',
      title: 'Cloud Platform Demo',
      description: 'See how our cloud infrastructure can scale your applications and improve performance',
      duration: '25 minutes',
      features: [
        'Auto-scaling',
        'Load Balancing',
        'Database Management',
        'Security Features'
      ],
      icon: Cloud
    },
    {
      id: 'security-suite',
      title: 'Security Suite Demo',
      description: 'Explore our comprehensive security solutions and compliance features',
      duration: '20 minutes',
      features: [
        'Threat Detection',
        'Vulnerability Assessment',
        'Compliance Management',
        'Incident Response'
      ],
      icon: Shield
    },
    {
      id: 'automation-tools',
      title: 'Automation Tools Demo',
      description: 'Discover how our automation solutions can streamline your business processes',
      duration: '35 minutes',
      features: [
        'Process Automation',
        'Workflow Optimization',
        'RPA Implementation',
        'Custom Bots'
      ],
      icon: Zap
    },
    {
      id: 'custom',
      title: 'Custom Demo',
      description: 'Get a personalized demo tailored to your specific business needs and requirements',
      duration: '60 minutes',
      features: [
        'Customized Solution',
        'Industry-Specific Features',
        'Integration Examples',
        'ROI Analysis'
      ],
      icon: Target
    }
  ];

  const benefits = [
    {
      title: 'See It In Action',
      description: 'Watch our solutions work with your actual data and use cases',
      icon: Play
    },
    {
      title: 'Ask Questions',
      description: 'Get answers from our technical experts in real-time',
      icon: Users
    },
    {
      title: 'Customized Experience',
      description: 'Demos tailored to your specific industry and requirements',
      icon: Target
    },
    {
      title: 'No Commitment',
      description: 'Free demos with no obligation to purchase',
      icon: CheckCircle
    }
  ];

  const selectedDemoData = demos.find(demo => demo.id === selectedDemo);

  return (
    <>
      <SEOOptimizer 
        title="Request a Demo - Zion Tech Group"
        description="Schedule a personalized demo of our AI and IT solutions. See how we can transform your business."
        keywords="demo, request demo, AI demo, cloud demo, security demo, automation demo"
      />
      <Navigation />
      <main className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        {/* Hero Section */}
        <section className="relative py-20 lg:py-32 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/20 to-purple-600/20"></div>
          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-4xl lg:text-6xl font-bold text-white mb-6 cyber-text neon-pulse">
                Request a Demo
              </h1>
              <p className="text-xl lg:text-2xl text-gray-300 mb-8 leading-relaxed">
                See our AI and IT solutions in action. Schedule a personalized demo 
                tailored to your business needs.
              </p>
            </div>
          </div>
        </section>

        {/* Demo Selection */}
        <section className="py-12">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-2xl font-bold text-white mb-8 text-center">Choose Your Demo</h2>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {demos.map((demo) => (
                  <div
                    key={demo.id}
                    onClick={() => setSelectedDemo(demo.id)}
                    className={`bg-white/5 backdrop-blur-sm rounded-lg p-6 cursor-pointer transition-all duration-300 ${
                      selectedDemo === demo.id
                        ? 'bg-white/10 border-2 border-cyan-500'
                        : 'hover:bg-white/10'
                    }`}
                  >
                    <div className="flex items-center gap-4 mb-4">
                      <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-lg flex items-center justify-center">
                        <demo.icon className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold text-white">{demo.title}</h3>
                        <p className="text-cyan-400 text-sm">{demo.duration}</p>
                      </div>
                    </div>
                    <p className="text-gray-300 mb-4">{demo.description}</p>
                    <ul className="space-y-2">
                      {demo.features.map((feature, index) => (
                        <li key={index} className="flex items-center gap-2 text-sm text-gray-400">
                          <CheckCircle className="w-4 h-4 text-cyan-400" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Selected Demo Details */}
        {selectedDemoData && (
          <section className="py-12 bg-black/20">
            <div className="container mx-auto px-4">
              <div className="max-w-4xl mx-auto">
                <div className="bg-white/5 backdrop-blur-sm rounded-lg p-8">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-lg flex items-center justify-center">
                      <selectedDemoData.icon className="w-8 h-8 text-white" />
                    </div>
                    <div>
                      <h2 className="text-2xl font-bold text-white">{selectedDemoData.title}</h2>
                      <p className="text-cyan-400">{selectedDemoData.duration}</p>
                    </div>
                  </div>
                  <p className="text-gray-300 mb-6 text-lg">{selectedDemoData.description}</p>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <h3 className="text-lg font-semibold text-white mb-4">What You'll See</h3>
                      <ul className="space-y-2">
                        {selectedDemoData.features.map((feature, index) => (
                          <li key={index} className="flex items-center gap-2 text-gray-300">
                            <CheckCircle className="w-5 h-5 text-cyan-400" />
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-white mb-4">Demo Benefits</h3>
                      <ul className="space-y-2">
                        <li className="flex items-center gap-2 text-gray-300">
                          <CheckCircle className="w-5 h-5 text-cyan-400" />
                          Live demonstration with real data
                        </li>
                        <li className="flex items-center gap-2 text-gray-300">
                          <CheckCircle className="w-5 h-5 text-cyan-400" />
                          Q&A session with our experts
                        </li>
                        <li className="flex items-center gap-2 text-gray-300">
                          <CheckCircle className="w-5 h-5 text-cyan-400" />
                          Customized to your industry
                        </li>
                        <li className="flex items-center gap-2 text-gray-300">
                          <CheckCircle className="w-5 h-5 text-cyan-400" />
                          No commitment required
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        )}

        {/* Benefits Section */}
        <section className="py-12">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-2xl font-bold text-white mb-8 text-center">Why Schedule a Demo?</h2>
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                {benefits.map((benefit, index) => (
                  <div key={index} className="text-center">
                    <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-full mb-4">
                      <benefit.icon className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-xl font-semibold text-white mb-3">{benefit.title}</h3>
                    <p className="text-gray-300">{benefit.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-r from-cyan-500/20 to-purple-600/20">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">
              Ready to See It In Action?
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Schedule your personalized demo today and discover how our AI and IT 
              solutions can transform your business.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-3 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300">
                Schedule Demo
              </button>
              <button className="border border-cyan-500 text-cyan-400 px-8 py-3 rounded-lg font-semibold hover:bg-cyan-500/10 transition-all duration-300">
                Contact Sales
              </button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default DemoPage;

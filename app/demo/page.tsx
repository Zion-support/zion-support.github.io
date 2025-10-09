'use client';
import React, { useState } from 'react';
import Link from 'next/link';
import { Play, CheckCircle, ArrowRight, Phone, Mail, Calendar, Clock, Users, Zap, Brain, Cloud, Shield } from 'lucide-react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

const DemoPage: React.FC = () => {
  const [selectedDemo, setSelectedDemo] = useState('ai-automation');

  const demos = [
    {
      id: 'ai-automation',
      title: 'AI Process Automation',
      description: 'See how our AI can automate your business processes',
      duration: '15 minutes',
      category: 'AI Services',
      icon: Brain,
      features: [
        'Workflow automation',
        'Document processing',
        'Data extraction',
        'Decision making'
      ]
    },
    {
      id: 'ai-analytics',
      title: 'AI-Powered Analytics',
      description: 'Discover insights with our advanced analytics platform',
      duration: '20 minutes',
      category: 'AI Services',
      icon: Zap,
      features: [
        'Real-time dashboards',
        'Predictive analytics',
        'Custom reports',
        'Data visualization'
      ]
    },
    {
      id: 'cloud-migration',
      title: 'Cloud Migration',
      description: 'Learn about our cloud migration strategies',
      duration: '25 minutes',
      category: 'IT Services',
      icon: Cloud,
      features: [
        'Infrastructure assessment',
        'Migration planning',
        'Security implementation',
        'Performance optimization'
      ]
    },
    {
      id: 'cybersecurity',
      title: 'Cybersecurity Solutions',
      description: 'Explore our comprehensive security offerings',
      duration: '18 minutes',
      category: 'IT Services',
      icon: Shield,
      features: [
        'Threat detection',
        'Vulnerability assessment',
        'Security monitoring',
        'Incident response'
      ]
    }
  ];

  const benefits = [
    {
      icon: CheckCircle,
      title: 'Live Demonstration',
      description: 'See our solutions in action with real data'
    },
    {
      icon: Users,
      title: 'Expert Consultation',
      description: 'Get personalized advice from our specialists'
    },
    {
      icon: Clock,
      title: 'Flexible Scheduling',
      description: 'Book at a time that works for you'
    },
    {
      icon: Phone,
      title: 'Follow-up Support',
      description: 'Continued assistance after the demo'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-24 pb-16 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 neon-text">
            Request a Demo
          </h1>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            See our AI and IT solutions in action. Schedule a personalized demonstration tailored to your business needs.
          </p>
          <div className="flex items-center justify-center space-x-4 text-cyan-400">
            <Calendar className="w-5 h-5" />
            <span>Free 30-minute consultation</span>
            <Clock className="w-5 h-5 ml-4" />
            <span>Flexible scheduling</span>
          </div>
        </div>
      </section>

      {/* Demo Selection */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-white mb-4">Choose Your Demo</h2>
            <p className="text-gray-300 text-xl">Select the solution you'd like to see in action</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {demos.map((demo) => (
              <div
                key={demo.id}
                onClick={() => setSelectedDemo(demo.id)}
                className={`cursor-pointer p-6 rounded-xl border-2 transition-all duration-300 ${
                  selectedDemo === demo.id
                    ? 'border-cyan-500 bg-cyan-500/10'
                    : 'border-gray-700 bg-slate-800/50 hover:border-cyan-400'
                }`}
              >
                <demo.icon className="w-8 h-8 text-cyan-400 mb-4" />
                <h3 className="text-lg font-semibold text-white mb-2">{demo.title}</h3>
                <p className="text-gray-300 text-sm mb-3">{demo.description}</p>
                <div className="flex items-center justify-between">
                  <span className="text-cyan-400 text-sm font-medium">{demo.category}</span>
                  <span className="text-gray-400 text-sm">{demo.duration}</span>
                </div>
              </div>
            ))}
          </div>

          {/* Selected Demo Details */}
          {selectedDemo && (
            <div className="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-8 border border-cyan-500/20">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-2xl font-bold text-white mb-4">
                    {demos.find(d => d.id === selectedDemo)?.title}
                  </h3>
                  <p className="text-gray-300 mb-6">
                    {demos.find(d => d.id === selectedDemo)?.description}
                  </p>
                  <div className="space-y-3">
                    <h4 className="text-lg font-semibold text-white">What you'll see:</h4>
                    <ul className="space-y-2">
                      {demos.find(d => d.id === selectedDemo)?.features.map((feature, index) => (
                        <li key={index} className="flex items-center text-gray-300">
                          <CheckCircle className="w-4 h-4 text-cyan-400 mr-3" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
                <div className="bg-gradient-to-br from-cyan-500/10 to-blue-600/10 rounded-xl p-6">
                  <h4 className="text-lg font-semibold text-white mb-4">Demo Details</h4>
                  <div className="space-y-4">
                    <div className="flex items-center">
                      <Clock className="w-5 h-5 text-cyan-400 mr-3" />
                      <span className="text-gray-300">
                        Duration: {demos.find(d => d.id === selectedDemo)?.duration}
                      </span>
                    </div>
                    <div className="flex items-center">
                      <Users className="w-5 h-5 text-cyan-400 mr-3" />
                      <span className="text-gray-300">Up to 10 participants</span>
                    </div>
                    <div className="flex items-center">
                      <Calendar className="w-5 h-5 text-cyan-400 mr-3" />
                      <span className="text-gray-300">Available weekdays 9AM-6PM EST</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 px-4 bg-slate-800/30">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-white mb-4">Why Schedule a Demo?</h2>
            <p className="text-gray-300 text-xl">Get the most out of your demonstration</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-cyan-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <benefit.icon className="w-8 h-8 text-cyan-400" />
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">{benefit.title}</h3>
                <p className="text-gray-300">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-white mb-6">Ready to See It in Action?</h2>
          <p className="text-xl text-gray-300 mb-8">
            Schedule your personalized demo today and discover how our solutions can transform your business.
          </p>
          
          <div className="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-8 border border-cyan-500/20">
            <h3 className="text-2xl font-bold text-white mb-6">Schedule Your Demo</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <Link
                href="/contact"
                className="bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 inline-flex items-center justify-center"
              >
                <Calendar className="w-5 h-5 mr-2" />
                Schedule Online
              </Link>
              <Link
                href="tel:+13024640950"
                className="bg-slate-700 text-white px-8 py-4 rounded-lg font-semibold hover:bg-cyan-600 transition-all duration-300 inline-flex items-center justify-center"
              >
                <Phone className="w-5 h-5 mr-2" />
                Call (302) 464-0950
              </Link>
              <Link
                href="mailto:kleber@ziontechgroup.com"
                className="bg-slate-700 text-white px-8 py-4 rounded-lg font-semibold hover:bg-cyan-600 transition-all duration-300 inline-flex items-center justify-center"
              >
                <Mail className="w-5 h-5 mr-2" />
                Email Us
              </Link>
            </div>
          </div>

          <div className="mt-8 text-gray-400">
            <p>Questions? Contact us at <a href="mailto:kleber@ziontechgroup.com" className="text-cyan-400 hover:text-cyan-300">kleber@ziontechgroup.com</a></p>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default DemoPage;

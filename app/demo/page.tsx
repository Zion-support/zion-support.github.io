'use client';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import SEOOptimizer from '../components/SEOOptimizer';
import { Calendar, Clock, Users, CheckCircle, Phone, Mail, ArrowRight, Star, Zap, Brain, Shield, Play, Download, Eye } from 'lucide-react';

const DemoPage: React.FC = () => {
  const [selectedDemo, setSelectedDemo] = useState<string | null>(null);

  const demos = [
    {
      id: 'ai-chatbot',
      title: 'AI Chatbot Demo',
      description: 'Experience our intelligent customer support chatbot',
      duration: '5 minutes',
      category: 'AI Services',
      icon: Brain,
      features: ['Natural language processing', 'Multi-language support', 'Real-time responses', 'Integration ready']
    },
    {
      id: 'data-analytics',
      title: 'Data Analytics Dashboard',
      description: 'Explore our advanced business intelligence platform',
      duration: '10 minutes',
      category: 'Analytics',
      icon: Users,
      features: ['Real-time dashboards', 'Custom reports', 'Predictive analytics', 'Data visualization']
    },
    {
      id: 'workflow-automation',
      title: 'Workflow Automation',
      description: 'See how we can automate your business processes',
      duration: '8 minutes',
      category: 'Automation',
      icon: Zap,
      features: ['Process automation', 'Task management', 'Integration workflows', 'Performance monitoring']
    },
    {
      id: 'cybersecurity',
      title: 'Cybersecurity Suite',
      description: 'Discover our comprehensive security solutions',
      duration: '12 minutes',
      category: 'Security',
      icon: Shield,
      features: ['Threat detection', 'Security monitoring', 'Compliance reporting', 'Incident response']
    }
  ];

  const testimonials = [
    {
      name: 'Sarah Johnson',
      company: 'TechCorp Inc.',
      role: 'CTO',
      content: 'The AI chatbot demo was incredible. It understood complex queries and provided accurate responses instantly.',
      rating: 5
    },
    {
      name: 'Michael Chen',
      company: 'DataFlow Solutions',
      role: 'Data Director',
      content: 'The analytics dashboard gave us insights we never had before. Game-changing technology.',
      rating: 5
    },
    {
      name: 'Emily Rodriguez',
      company: 'SecureNet Ltd.',
      role: 'Security Manager',
      content: 'The cybersecurity demo showed us exactly how to protect our infrastructure. Highly recommended.',
      rating: 5
    }
  ];

  return (
    <>
      <SEOOptimizer
        title="Live Demo - Zion Tech Group AI & IT Solutions"
        description="Experience our AI and IT solutions through interactive demos. See how our technology can transform your business."
        keywords={['AI demo', 'IT demo', 'technology demonstration', 'AI solutions', 'business automation']}
        canonicalUrl="https://ziontechgroup.com/demo"
      />
      <Navigation />
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        {/* Hero Section */}
        <section className="pt-24 pb-16 px-4">
          <div className="container mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 neon-text">
              Experience Our Solutions
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              See our AI and IT solutions in action. Interactive demos that showcase the power of our technology.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                to="#demos" 
                className="cyber-button inline-flex items-center space-x-2"
              >
                <Play className="w-5 h-5" />
                <span>Start Demo</span>
              </Link>
              <a 
                href="tel:+13024640950" 
                className="cyber-button-outline inline-flex items-center space-x-2"
              >
                <Phone className="w-5 h-5" />
                <span>Call (302) 464-0950</span>
              </a>
            </div>
          </div>
        </section>

        {/* Demo Selection */}
        <section id="demos" className="py-16 px-4">
          <div className="container mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-12 neon-text">
              Choose Your Demo
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {demos.map((demo) => (
                <div 
                  key={demo.id}
                  className={`bg-slate-800 rounded-lg p-6 cursor-pointer transition-all duration-300 hover:bg-slate-700 ${
                    selectedDemo === demo.id ? 'ring-2 ring-cyan-400 bg-slate-700' : ''
                  }`}
                  onClick={() => setSelectedDemo(selectedDemo === demo.id ? null : demo.id)}
                >
                  <div className="flex items-center justify-between mb-4">
                    <demo.icon className="w-12 h-12 text-cyan-400" />
                    <span className="text-sm text-cyan-400 font-medium">{demo.category}</span>
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-2">{demo.title}</h3>
                  <p className="text-gray-300 mb-4">{demo.description}</p>
                  <div className="flex items-center text-sm text-gray-400 mb-4">
                    <Clock className="w-4 h-4 mr-2" />
                    <span>{demo.duration}</span>
                  </div>
                  <div className="space-y-2">
                    {demo.features.map((feature, index) => (
                      <div key={index} className="flex items-center text-sm text-gray-300">
                        <CheckCircle className="w-4 h-4 text-cyan-400 mr-2 flex-shrink-0" />
                        <span>{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Selected Demo */}
        {selectedDemo && (
          <section className="py-16 px-4 bg-slate-800/50">
            <div className="container mx-auto">
              <div className="bg-slate-900 rounded-lg p-8">
                <div className="flex items-center justify-between mb-6">
                  <h3 className="text-2xl font-bold text-white">
                    {demos.find(d => d.id === selectedDemo)?.title}
                  </h3>
                  <button
                    onClick={() => setSelectedDemo(null)}
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    ✕
                  </button>
                </div>
                <div className="bg-slate-800 rounded-lg p-6 mb-6">
                  <div className="aspect-video bg-gradient-to-br from-cyan-500/20 to-blue-600/20 rounded-lg flex items-center justify-center">
                    <div className="text-center">
                      <Play className="w-16 h-16 text-cyan-400 mx-auto mb-4" />
                      <p className="text-white text-lg">Demo Video Player</p>
                      <p className="text-gray-400 text-sm mt-2">
                        Interactive demo would be embedded here
                      </p>
                    </div>
                  </div>
                </div>
                <div className="flex flex-col sm:flex-row gap-4">
                  <button className="cyber-button flex items-center space-x-2">
                    <Play className="w-5 h-5" />
                    <span>Start Demo</span>
                  </button>
                  <button className="cyber-button-outline flex items-center space-x-2">
                    <Download className="w-5 h-5" />
                    <span>Download Brochure</span>
                  </button>
                  <Link 
                    to="/contact" 
                    className="cyber-button-outline flex items-center space-x-2"
                  >
                    <Phone className="w-5 h-5" />
                    <span>Schedule Call</span>
                  </Link>
                </div>
              </div>
            </div>
          </section>
        )}

        {/* Testimonials */}
        <section className="py-16 px-4">
          <div className="container mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-12 neon-text">
              What Our Clients Say
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {testimonials.map((testimonial, index) => (
                <div key={index} className="bg-slate-800 rounded-lg p-6">
                  <div className="flex items-center mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  <p className="text-gray-300 mb-4 italic">"{testimonial.content}"</p>
                  <div>
                    <div className="font-semibold text-white">{testimonial.name}</div>
                    <div className="text-sm text-cyan-400">{testimonial.role}, {testimonial.company}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 px-4 bg-gradient-to-r from-purple-600 to-blue-600">
          <div className="container mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Ready to See More?
            </h2>
            <p className="text-xl text-purple-100 mb-8 max-w-2xl mx-auto">
              Schedule a personalized demo with our experts to see how our solutions can work for your business.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                to="/contact" 
                className="bg-white text-purple-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors inline-flex items-center space-x-2"
              >
                <Calendar className="w-5 h-5" />
                <span>Schedule Demo</span>
              </Link>
              <a 
                href="tel:+13024640950" 
                className="bg-transparent border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-purple-600 transition-colors inline-flex items-center space-x-2"
              >
                <Phone className="w-5 h-5" />
                <span>Call (302) 464-0950</span>
              </a>
            </div>
          </div>
        </section>
      </div>
      <Footer />
    </>
  );
};

export default DemoPage;
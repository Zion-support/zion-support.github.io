'use client';

import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { Play, Calendar, Phone, Mail, CheckCircle, ArrowRight, Star, Users, Clock, Brain, Cloud, Shield, Settings, Globe, Database, Zap, Eye, Sparkles, BookOpen, FileText, Download, Video, Monitor, Smartphone, Laptop } from 'lucide-react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import SEOOptimizer from '../components/SEOOptimizer';

const DemoPage: React.FC = () => {
  const [selectedDemo, setSelectedDemo] = useState('ai-services');
  const [isBookingModalOpen, setIsBookingModalOpen] = useState(false);

  const demos = [
    {
      id: 'ai-services',
      title: 'AI Services Demo',
      description: 'Experience our AI-powered solutions including machine learning, natural language processing, and computer vision.',
      duration: '30 minutes',
      category: 'AI/ML',
      icon: Brain,
      features: ['Machine Learning Models', 'NLP Processing', 'Computer Vision', 'Predictive Analytics']
    },
    {
      id: 'cloud-platform',
      title: 'Cloud Platform Demo',
      description: 'Explore our cloud infrastructure solutions with real-time scaling and enterprise security.',
      duration: '45 minutes',
      category: 'Cloud',
      icon: Cloud,
      features: ['Auto-scaling', 'Security Features', 'Monitoring Tools', 'Cost Optimization']
    },
    {
      id: 'data-analytics',
      title: 'Data Analytics Demo',
      description: 'See how we transform your data into actionable insights with advanced analytics and visualization.',
      duration: '25 minutes',
      category: 'Analytics',
      icon: Database,
      features: ['Real-time Dashboards', 'Data Visualization', 'Business Intelligence', 'Custom Reports']
    },
    {
      id: 'mobile-app',
      title: 'Mobile App Demo',
      description: 'Discover our mobile development capabilities with native and cross-platform solutions.',
      duration: '20 minutes',
      category: 'Mobile',
      icon: Smartphone,
      features: ['Native Development', 'Cross-platform', 'App Store Optimization', 'Performance']
    }
  ];

  const testimonials = [
    {
      name: 'Sarah Johnson',
      company: 'TechCorp',
      role: 'CEO',
      content: 'The AI dashboard demo showed us exactly how we could transform our data analytics. Incredible insights!',
      rating: 5
    },
    {
      name: 'Michael Chen',
      company: 'DataFlow Inc',
      role: 'CTO',
      content: 'The cloud platform demo exceeded our expectations. The scalability and security features are outstanding.',
      rating: 5
    },
    {
      name: 'Emily Rodriguez',
      company: 'InnovateLabs',
      role: 'Product Manager',
      content: 'The mobile app demo was impressive. The performance and user experience are exactly what we need.',
      rating: 5
    }
  ];

  const benefits = [
    {
      icon: Eye,
      title: 'See It In Action',
      description: 'Watch our solutions work with your actual data and use cases.'
    },
    {
      icon: Users,
      title: 'Expert Guidance',
      description: 'Get personalized recommendations from our technical experts.'
    },
    {
      icon: Clock,
      title: 'No Commitment',
      description: 'Free demos with no obligation to purchase or sign up.'
    },
    {
      icon: Shield,
      title: 'Secure Environment',
      description: 'Your data is protected in our secure demo environment.'
    }
  ];

  const selectedDemoData = demos.find(demo => demo.id === selectedDemo);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <SEOOptimizer 
        title="Request a Demo - See Our Solutions in Action | Zion Tech Group"
        description="Experience our AI and technology solutions firsthand. Schedule a personalized demo to see how we can transform your business."
        keywords="demo, request demo, AI demo, technology demo, solution demo, personalized demo, free demo"
      />
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative py-20 px-4 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,rgba(147,51,234,0.3)_0%,transparent_50%)] animate-pulse" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(59,130,246,0.3)_0%,transparent_50%)] animate-pulse" style={{ animationDelay: '1s' }} />
        <div className="relative max-w-7xl mx-auto text-center">
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
            Request a
            <span className="block bg-gradient-to-r from-purple-400 via-blue-400 to-cyan-400 bg-clip-text text-transparent">
              Demo
            </span>
          </h1>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed">
            Experience our AI and technology solutions firsthand. See how we can transform 
            your business with a personalized demonstration.
          </p>
        </div>
      </section>

      {/* Demo Selection */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">Choose Your Demo</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Select the solution you'd like to see in action.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {demos.map((demo) => (
              <div
                key={demo.id}
                onClick={() => setSelectedDemo(demo.id)}
                className={`bg-white/5 backdrop-blur-lg rounded-xl p-6 border cursor-pointer transition-all duration-300 ${
                  selectedDemo === demo.id
                    ? 'border-purple-500 bg-white/10'
                    : 'border-white/10 hover:bg-white/10'
                }`}
              >
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-lg flex items-center justify-center mr-4">
                    <demo.icon className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-white">{demo.title}</h3>
                    <div className="text-sm text-gray-400">{demo.category}</div>
                  </div>
                </div>
                
                <p className="text-gray-300 mb-4 text-sm">{demo.description}</p>
                
                <div className="flex items-center justify-between text-sm text-gray-400">
                  <div className="flex items-center">
                    <Clock className="w-4 h-4 mr-2" />
                    <span>{demo.duration}</span>
                  </div>
                  <div className="flex items-center">
                    <CheckCircle className={`w-4 h-4 mr-1 ${
                      selectedDemo === demo.id ? 'text-purple-400' : 'text-gray-500'
                    }`} />
                    <span className={selectedDemo === demo.id ? 'text-purple-400' : 'text-gray-500'}>
                      {selectedDemo === demo.id ? 'Selected' : 'Select'}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Selected Demo Details */}
      {selectedDemoData && (
        <section className="py-20 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="bg-white/5 backdrop-blur-lg rounded-2xl p-8 border border-white/10">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                <div>
                  <div className="flex items-center mb-6">
                    <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-lg flex items-center justify-center mr-6">
                      <selectedDemoData.icon className="w-8 h-8 text-white" />
                    </div>
                    <div>
                      <h3 className="text-3xl font-bold text-white">{selectedDemoData.title}</h3>
                      <div className="text-cyan-400 font-medium">{selectedDemoData.category}</div>
                    </div>
                  </div>
                  
                  <p className="text-xl text-gray-300 mb-6 leading-relaxed">
                    {selectedDemoData.description}
                  </p>
                  
                  <div className="space-y-4 mb-8">
                    <h4 className="text-lg font-semibold text-white">What You'll See:</h4>
                    {selectedDemoData.features.map((feature, index) => (
                      <div key={index} className="flex items-center">
                        <CheckCircle className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" />
                        <span className="text-gray-300">{feature}</span>
                      </div>
                    ))}
                  </div>
                  
                  <div className="flex items-center text-gray-400 mb-8">
                    <Clock className="w-5 h-5 mr-2" />
                    <span>Duration: {selectedDemoData.duration}</span>
                  </div>
                  
                  <button
                    onClick={() => setIsBookingModalOpen(true)}
                    className="w-full bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 flex items-center justify-center group"
                  >
                    <Calendar className="w-5 h-5 mr-2" />
                    Schedule Demo
                    <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                  </button>
                </div>
                
                <div className="bg-gradient-to-br from-purple-500/20 to-blue-500/20 rounded-xl p-8 border border-white/10">
                  <h4 className="text-2xl font-bold text-white mb-6">Demo Preview</h4>
                  <div className="aspect-video bg-black/50 rounded-lg flex items-center justify-center mb-6">
                    <div className="text-center">
                      <Play className="w-16 h-16 text-white mx-auto mb-4" />
                      <p className="text-white font-semibold">Interactive Demo</p>
                      <p className="text-gray-300 text-sm">Click to play</p>
                    </div>
                  </div>
                  <div className="space-y-3">
                    <div className="flex items-center text-sm text-gray-300">
                      <Monitor className="w-4 h-4 mr-2" />
                      <span>Desktop & Mobile Views</span>
                    </div>
                    <div className="flex items-center text-sm text-gray-300">
                      <Users className="w-4 h-4 mr-2" />
                      <span>Live Q&A Session</span>
                    </div>
                    <div className="flex items-center text-sm text-gray-300">
                      <FileText className="w-4 h-4 mr-2" />
                      <span>Custom Use Cases</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Benefits Section */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">Why Request a Demo?</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Get the most out of your demo experience with these benefits.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <div
                key={index}
                className="bg-white/5 backdrop-blur-lg rounded-xl p-6 border border-white/10 hover:bg-white/10 transition-all duration-300 text-center"
              >
                <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <benefit.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">{benefit.title}</h3>
                <p className="text-gray-300">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">What Clients Say</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Hear from clients who experienced our demos and solutions.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="bg-white/5 backdrop-blur-lg rounded-xl p-6 border border-white/10"
              >
                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-300 mb-6 italic">"{testimonial.content}"</p>
                <div>
                  <div className="font-semibold text-white">{testimonial.name}</div>
                  <div className="text-cyan-400 text-sm">{testimonial.role}, {testimonial.company}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <div className="bg-gradient-to-r from-purple-600 to-blue-600 rounded-2xl p-8 md:p-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Ready to See It in Action?
            </h2>
            <p className="text-xl text-purple-100 mb-8">
              Schedule your personalized demo today and discover how our solutions can transform your business.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                onClick={() => setIsBookingModalOpen(true)}
                className="bg-white text-purple-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-all duration-300 flex items-center justify-center"
              >
                <Calendar className="mr-2 h-5 w-5" />
                Schedule Demo
              </button>
              <button className="border border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-purple-600 transition-all duration-300 flex items-center justify-center">
                <Phone className="mr-2 h-5 w-5" />
                Call Us
              </button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default DemoPage;
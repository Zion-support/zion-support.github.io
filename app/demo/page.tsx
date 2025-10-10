'use client';

import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { Play, ArrowRight, CheckCircle, Star, Users, Zap, Shield, BarChart, Calendar, Phone, Mail, Clock, Brain, Cloud, Settings, Globe, Database, Eye, Sparkles, BookOpen, FileText, Download } from 'lucide-react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

const DemoPage: React.FC = () => {
  const [selectedDemo, setSelectedDemo] = useState('ai-dashboard');
  const [isBooking, setIsBooking] = useState(false);

  const demos = [
    {
      id: 'ai-dashboard',
      title: 'AI Analytics Dashboard',
      description: 'See how our AI-powered analytics can transform your data into actionable insights',
      duration: '30 minutes',
      category: 'AI & Analytics',
      features: ['Real-time data visualization', 'Predictive analytics', 'Custom reporting', 'Interactive dashboards'],
      icon: BarChart
    },
    {
      id: 'machine-learning',
      title: 'Machine Learning Platform',
      description: 'Experience our ML platform for building and deploying custom models',
      duration: '45 minutes',
      category: 'Machine Learning',
      features: ['Model training', 'AutoML capabilities', 'Model deployment', 'Performance monitoring'],
      icon: Brain
    },
    {
      id: 'cloud-solutions',
      title: 'Cloud Infrastructure',
      description: 'Explore our scalable cloud solutions and migration strategies',
      duration: '40 minutes',
      category: 'Cloud Computing',
      features: ['Multi-cloud deployment', 'Auto-scaling', 'Security compliance', 'Cost optimization'],
      icon: Cloud
    },
    {
      id: 'cybersecurity',
      title: 'Security Solutions',
      description: 'Learn about our comprehensive cybersecurity and compliance solutions',
      duration: '35 minutes',
      category: 'Cybersecurity',
      features: ['Threat detection', 'Compliance monitoring', 'Incident response', 'Security training'],
      icon: Shield
    }
  ];

  const testimonials = [
    {
      name: 'Sarah Johnson',
      company: 'TechCorp Solutions',
      role: 'CEO',
      quote: 'The demo was incredibly insightful. We could see exactly how the platform would fit into our workflow.',
      rating: 5
    },
    {
      name: 'Michael Chen',
      role: 'VP Engineering, DataFlow',
      quote: 'The team was knowledgeable and answered all our technical questions. Highly recommended!',
      rating: 5
    },
    {
      name: 'Emily Rodriguez',
      company: 'InnovateLabs',
      role: 'CTO',
      quote: 'The demo helped us understand the ROI and implementation timeline perfectly.',
      rating: 5
    }
  ];

  const stats = [
    { number: '500+', label: 'Demos Conducted', icon: Play },
    { number: '95%', label: 'Satisfaction Rate', icon: Star },
    { number: '200+', label: 'Happy Clients', icon: Users },
    { number: '24/7', label: 'Support Available', icon: Clock }
  ];

  const selectedDemoData = demos.find(demo => demo.id === selectedDemo);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Helmet>
        <title>Request a Demo - Zion Tech Group | See Our Solutions in Action</title>
        <meta name="description" content="Schedule a personalized demo of our AI and IT solutions. See how our technology can transform your business with real examples and expert guidance." />
        <meta name="keywords" content="demo, AI demo, technology demo, solution demonstration, product showcase, free demo" />
      </Helmet>

      <Navigation />
      
      {/* Hero Section */}
      <section className="relative py-20 px-4 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,rgba(147,51,234,0.3)_0%,transparent_50%)] animate-pulse" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(59,130,246,0.3)_0%,transparent_50%)] animate-pulse" style={{ animationDelay: '1s' }} />
        <div className="relative max-w-7xl mx-auto text-center">
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
            See Our Solutions
            <span className="block bg-gradient-to-r from-purple-400 via-blue-400 to-cyan-400 bg-clip-text text-transparent">
              in Action
            </span>
          </h1>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed">
            Experience the power of our AI and IT solutions through personalized demos. 
            See how our technology can transform your business with real examples and expert guidance.
          </p>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-12 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="flex justify-center mb-4">
                  <stat.icon className="w-12 h-12 text-purple-400" />
                </div>
                <div className="text-3xl font-bold text-white mb-2">{stat.number}</div>
                <div className="text-gray-300 text-sm">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Demo Selection */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">Choose Your Demo</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Select the solution you'd like to see in action. Each demo is tailored to your specific needs and interests.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {demos.map((demo) => (
              <div
                key={demo.id}
                onClick={() => setSelectedDemo(demo.id)}
                className={`cursor-pointer rounded-xl p-6 border transition-all duration-300 ${
                  selectedDemo === demo.id
                    ? 'bg-purple-500/20 border-purple-400'
                    : 'bg-white/5 border-white/10 hover:bg-white/10'
                }`}
              >
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-blue-600 rounded-lg flex items-center justify-center mr-4">
                    <demo.icon className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-white">{demo.title}</h3>
                    <p className="text-sm text-gray-400">{demo.category}</p>
                  </div>
                </div>
                <p className="text-gray-300 text-sm mb-4">{demo.description}</p>
                <div className="flex items-center justify-between text-sm text-gray-400">
                  <span>{demo.duration}</span>
                  {selectedDemo === demo.id && (
                    <CheckCircle className="w-5 h-5 text-green-400" />
                  )}
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
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                <div>
                  <h3 className="text-3xl font-bold text-white mb-4">{selectedDemoData.title}</h3>
                  <p className="text-xl text-gray-300 mb-6">{selectedDemoData.description}</p>
                  
                  <div className="space-y-4 mb-8">
                    <div className="flex items-center">
                      <Clock className="w-5 h-5 text-purple-400 mr-3" />
                      <span className="text-gray-300">Duration: {selectedDemoData.duration}</span>
                    </div>
                    <div className="flex items-center">
                      <Users className="w-5 h-5 text-purple-400 mr-3" />
                      <span className="text-gray-300">Personalized for your team</span>
                    </div>
                    <div className="flex items-center">
                      <Shield className="w-5 h-5 text-purple-400 mr-3" />
                      <span className="text-gray-300">No commitment required</span>
                    </div>
                  </div>
                  
                  <h4 className="text-lg font-semibold text-white mb-4">What You'll See:</h4>
                  <div className="space-y-2">
                    {selectedDemoData.features.map((feature, index) => (
                      <div key={index} className="flex items-center">
                        <CheckCircle className="w-4 h-4 text-green-400 mr-3" />
                        <span className="text-gray-300">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>
                
                <div className="bg-gradient-to-r from-purple-500/20 to-blue-500/20 rounded-xl p-6">
                  <h4 className="text-xl font-semibold text-white mb-4">Ready to Schedule?</h4>
                  <p className="text-gray-300 mb-6">
                    Book your personalized demo and see how our solutions can transform your business.
                  </p>
                  
                  <div className="space-y-4">
                    <button
                      onClick={() => setIsBooking(true)}
                      className="w-full bg-gradient-to-r from-purple-500 to-blue-600 text-white py-3 px-6 rounded-lg font-semibold hover:from-purple-600 hover:to-blue-700 transition-all duration-300 flex items-center justify-center"
                    >
                      <Calendar className="w-5 h-5 mr-2" />
                      Schedule Demo
                    </button>
                    
                    <div className="flex space-x-4">
                      <button className="flex-1 border border-white/20 text-white py-2 px-4 rounded-lg hover:bg-white/10 transition-all duration-300 flex items-center justify-center">
                        <Phone className="w-4 h-4 mr-2" />
                        Call Us
                      </button>
                      <button className="flex-1 border border-white/20 text-white py-2 px-4 rounded-lg hover:bg-white/10 transition-all duration-300 flex items-center justify-center">
                        <Mail className="w-4 h-4 mr-2" />
                        Email Us
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Testimonials */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">What Our Clients Say</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Hear from businesses that have experienced our solutions firsthand.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6">
                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-300 mb-4 italic">"{testimonial.quote}"</p>
                <div>
                  <p className="text-white font-semibold">{testimonial.name}</p>
                  <p className="text-cyan-400 text-sm">{testimonial.role}</p>
                  {testimonial.company && (
                    <p className="text-gray-400 text-sm">{testimonial.company}</p>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            Ready to See the Future?
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Schedule your personalized demo today and discover how our AI and IT solutions 
            can transform your business.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-gradient-to-r from-purple-500 to-blue-600 hover:from-purple-600 hover:to-blue-700 text-white font-bold py-4 px-8 rounded-lg transition-all duration-300 transform hover:scale-105">
              <Play className="inline-block mr-2 w-5 h-5" />
              Start Your Demo
            </button>
            <button className="border border-purple-400 text-purple-400 hover:bg-purple-400 hover:text-white font-bold py-4 px-8 rounded-lg transition-all duration-300">
              Download Brochure
            </button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default DemoPage;
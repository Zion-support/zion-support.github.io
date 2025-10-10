'use client';
<<<<<<< HEAD

import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { Play, ArrowRight, CheckCircle, Star, Users, Zap, Shield, BarChart } from 'lucide-react';

const DemoPage: React.FC = () => {
  const [selectedDemo, setSelectedDemo] = useState('ai-dashboard');

  const demos = [
    {
      id: 'ai-dashboard',
      title: 'AI Analytics Dashboard',
      description: 'Real-time insights and predictive analytics for your business data',
      features: ['Real-time monitoring', 'Predictive analytics', 'Custom reports', 'Interactive charts']
    },
    {
      id: 'quantum-computing',
      title: 'Quantum Computing Platform',
      description: 'Experience the power of quantum algorithms and optimization',
      features: ['Quantum algorithms', 'Optimization problems', 'Simulation tools', 'Performance metrics']
    },
    {
      id: 'cybersecurity',
      title: 'AI-Powered Security Suite',
      description: 'Advanced threat detection and automated security responses',
      features: ['Threat detection', 'Automated responses', 'Security monitoring', 'Incident management']
    }
  ];

  const testimonials = [
    {
      name: 'Sarah Johnson',
      company: 'TechCorp',
      role: 'CEO',
      content: 'The AI dashboard demo showed us exactly how we could transform our data analytics. Incredible insights!',
=======
import React, { useState } from 'react';
import { Play, Calendar, Phone, Mail, CheckCircle, ArrowRight, Star, Users, Clock, Brain, Cloud, Shield, Settings, Globe, Database, Zap, Eye, Sparkles, BookOpen, FileText, Download } from 'lucide-react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

const DemoPage: React.FC = () => {
  const [selectedDemo, setSelectedDemo] = useState('ai-services');

  const demos = [
    {
      id: 'ai-services',
      title: 'AI Services Demo',
      description: 'Experience our AI-powered solutions including content generation, analytics, and automation',
      duration: '30 minutes',
      features: [
        'AI Content Generation',
        'Predictive Analytics',
        'Workflow Automation',
        'Natural Language Processing'
      ],
      icon: Brain
    },
    {
      id: 'cloud-platform',
      title: 'Cloud Platform Demo',
      description: 'Explore our cloud infrastructure and management capabilities',
      duration: '25 minutes',
      features: [
        'Infrastructure Management',
        'Auto-scaling',
        'Security Features',
        'Cost Optimization'
      ],
      icon: Cloud
    },
    {
      id: 'data-analytics',
      title: 'Data Analytics Demo',
      description: 'See how our analytics platform transforms data into actionable insights',
      duration: '35 minutes',
      features: [
        'Real-time Dashboards',
        'Predictive Modeling',
        'Data Visualization',
        'Custom Reports'
      ],
      icon: Database
    },
    {
      id: 'security-suite',
      title: 'Security Suite Demo',
      description: 'Learn about our comprehensive security solutions and compliance features',
      duration: '20 minutes',
      features: [
        'Threat Detection',
        'Compliance Management',
        'Access Control',
        'Audit Logging'
      ],
      icon: Shield
    }
  ];

  const benefits = [
    'See our platform in action',
    'Ask questions in real-time',
    'Get personalized recommendations',
    'Understand implementation process',
    'Explore integration options',
    'Learn best practices'
  ];

  const testimonials = [
    {
      name: 'Sarah Johnson',
      role: 'CTO, TechCorp',
      quote: 'The demo was incredibly insightful. We could see exactly how the platform would fit into our workflow.',
>>>>>>> cursor/fix-errors-and-merge-to-main-c4b3
      rating: 5
    },
    {
      name: 'Michael Chen',
<<<<<<< HEAD
      company: 'DataFlow Inc',
      role: 'CTO',
      content: 'The quantum computing demo was mind-blowing. We could see immediate applications for our optimization problems.',
=======
      role: 'VP Engineering, DataFlow',
      quote: 'The team was knowledgeable and answered all our technical questions. Highly recommended!',
      rating: 5
    },
    {
      name: 'Emily Rodriguez',
      role: 'Director of Operations, InnovateLabs',
      quote: 'The demo helped us understand the ROI and implementation timeline perfectly.',
>>>>>>> cursor/fix-errors-and-merge-to-main-c4b3
      rating: 5
    }
  ];

<<<<<<< HEAD
  return (
    <>
      <Helmet>
        <title>Demo - Zion Tech Group | See Our Solutions in Action</title>
        <meta name="description" content="Experience our AI and IT solutions through interactive demos. See how our technology can transform your business with real examples." />
        <meta name="keywords" content="demo, AI demo, technology demo, interactive demo, solution showcase, product demonstration" />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 py-20">
        <div className="container mx-auto px-4">
          {/* Header */}
          <div className="text-center mb-16">
            <h1 className="text-5xl lg:text-7xl font-bold text-white mb-6">
              See Our
              <span className="bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
                {' '}Solutions
              </span>
              {' '}in Action
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Experience our AI and IT solutions through interactive demos. 
              See how our technology can transform your business.
            </p>
          </div>

          {/* Demo Selector */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {demos.map((demo) => (
              <button
                key={demo.id}
                onClick={() => setSelectedDemo(demo.id)}
                className={`px-6 py-3 rounded-lg font-semibold transition-all duration-300 ${
                  selectedDemo === demo.id
                    ? 'bg-gradient-to-r from-cyan-500 to-purple-600 text-white'
                    : 'bg-white/10 text-gray-300 hover:bg-white/20'
                }`}
              >
                {demo.title}
              </button>
            ))}
          </div>

          {/* Demo Content */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
            <div>
              <h2 className="text-3xl font-bold text-white mb-4">
                {demos.find(d => d.id === selectedDemo)?.title}
              </h2>
              <p className="text-lg text-gray-300 mb-6">
                {demos.find(d => d.id === selectedDemo)?.description}
              </p>
              
              <div className="space-y-4 mb-8">
                <h3 className="text-xl font-semibold text-white mb-3">Key Features:</h3>
                {demos.find(d => d.id === selectedDemo)?.features.map((feature, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-cyan-400" />
                    <span className="text-gray-300">{feature}</span>
                  </div>
                ))}
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <button className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 flex items-center justify-center space-x-2">
                  <Play className="w-5 h-5" />
                  <span>Start Demo</span>
                </button>
                <button className="border border-white/20 text-white px-8 py-4 rounded-lg font-semibold hover:bg-white/10 transition-all duration-300">
                  Schedule Live Demo
                </button>
              </div>
            </div>

            <div className="bg-gradient-to-r from-cyan-500/20 to-purple-500/20 rounded-2xl p-8 backdrop-blur-lg border border-white/10">
              <div className="text-center text-white">
                <div className="text-6xl font-bold mb-4">Demo</div>
                <div className="text-2xl font-semibold mb-2">
                  {demos.find(d => d.id === selectedDemo)?.title}
                </div>
                <div className="text-lg opacity-75 mb-8">Interactive Experience</div>
                
                <div className="grid grid-cols-2 gap-6">
                  <div className="text-center">
                    <BarChart className="w-8 h-8 text-cyan-400 mx-auto mb-2" />
                    <div className="text-xl font-bold">Real-time</div>
                    <div className="text-sm opacity-75">Data</div>
                  </div>
                  <div className="text-center">
                    <Zap className="w-8 h-8 text-cyan-400 mx-auto mb-2" />
                    <div className="text-xl font-bold">AI-Powered</div>
                    <div className="text-sm opacity-75">Insights</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Testimonials */}
          <div className="mb-16">
            <h2 className="text-4xl font-bold text-white mb-8 text-center">What People Say</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
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
                  <p className="text-gray-300 mb-4 italic">"{testimonial.content}"</p>
                  <div>
                    <div className="font-semibold text-white">{testimonial.name}</div>
                    <div className="text-sm text-gray-400">{testimonial.role}, {testimonial.company}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* CTA Section */}
          <div className="bg-gradient-to-r from-cyan-500/20 to-purple-500/20 rounded-2xl p-12 text-center backdrop-blur-lg border border-white/10">
            <h2 className="text-4xl font-bold text-white mb-4">
              Ready to Experience the Full Solution?
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Schedule a personalized demo with our experts and see how our solutions 
              can be tailored to your specific business needs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 flex items-center justify-center space-x-2">
                <Users className="w-5 h-5" />
                <span>Schedule Live Demo</span>
                <ArrowRight className="w-5 h-5" />
              </button>
              <button className="border border-white/20 text-white px-8 py-4 rounded-lg font-semibold hover:bg-white/10 transition-all duration-300">
                Contact Sales
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
=======
  const stats = [
    { number: '500+', label: 'Demos Conducted', icon: Play },
    { number: '95%', label: 'Satisfaction Rate', icon: Star },
    { number: '30min', label: 'Average Duration', icon: Clock },
    { number: '24/7', label: 'Available', icon: Users }
  ];

  const selectedDemoData = demos.find(demo => demo.id === selectedDemo);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative py-20 px-4 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,rgba(147,51,234,0.3)_0%,transparent_50%)] animate-pulse" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(59,130,246,0.3)_0%,transparent_50%)] animate-pulse" style={{ animationDelay: '1s' }} />
        <div className="relative max-w-7xl mx-auto text-center">
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
            Book a
            <span className="block bg-gradient-to-r from-purple-400 via-blue-400 to-cyan-400 bg-clip-text text-transparent">
              Demo
            </span>
          </h1>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed">
            See our platform in action with a personalized demo tailored to your business needs. 
            Experience the power of our solutions firsthand.
          </p>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 px-4">
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
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-white mb-4">Choose Your Demo</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Select the demo that best matches your interests and business requirements.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {demos.map((demo) => (
              <div
                key={demo.id}
                onClick={() => setSelectedDemo(demo.id)}
                className={`cursor-pointer rounded-xl p-6 transition-all duration-300 ${
                  selectedDemo === demo.id
                    ? 'bg-purple-500/20 border-2 border-purple-400'
                    : 'bg-white/5 border border-white/10 hover:bg-white/10'
                }`}
              >
                <div className="flex items-center mb-4">
                  <demo.icon className="w-8 h-8 text-purple-400 mr-3" />
                  <h3 className="text-lg font-semibold text-white">{demo.title}</h3>
                </div>
                <p className="text-gray-300 text-sm mb-4">{demo.description}</p>
                <div className="flex items-center justify-between text-sm">
                  <span className="text-gray-400">{demo.duration}</span>
                  <span className="text-purple-400">{demo.features.length} features</span>
                </div>
              </div>
            ))}
          </div>

          {/* Selected Demo Details */}
          {selectedDemoData && (
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-8">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-2xl font-bold text-white mb-4">{selectedDemoData.title}</h3>
                  <p className="text-gray-300 mb-6">{selectedDemoData.description}</p>
                  
                  <div className="mb-6">
                    <h4 className="text-lg font-semibold text-white mb-3">What You'll See:</h4>
                    <ul className="space-y-2">
                      {selectedDemoData.features.map((feature, index) => (
                        <li key={index} className="flex items-center text-gray-300">
                          <CheckCircle className="w-5 h-5 text-green-400 mr-3" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="flex items-center text-gray-300">
                    <Clock className="w-5 h-5 mr-2" />
                    Duration: {selectedDemoData.duration}
                  </div>
                </div>

                <div className="bg-white/5 rounded-xl p-6">
                  <h4 className="text-lg font-semibold text-white mb-4">Schedule Your Demo</h4>
                  <form className="space-y-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-300 mb-2">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        required
                        className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                        placeholder="Your full name"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-300 mb-2">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        required
                        className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                        placeholder="your.email@example.com"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-300 mb-2">
                        Company
                      </label>
                      <input
                        type="text"
                        className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                        placeholder="Your company name"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-300 mb-2">
                        Preferred Date
                      </label>
                      <input
                        type="date"
                        className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                      />
                    </div>
                    <button
                      type="submit"
                      className="w-full bg-gradient-to-r from-purple-500 to-blue-600 hover:from-purple-600 hover:to-blue-700 text-white font-bold py-3 px-6 rounded-lg transition-all duration-300"
                    >
                      Schedule Demo
                      <Calendar className="inline-block ml-2 w-5 h-5" />
                    </button>
                  </form>
                </div>
              </div>
            </div>
          )}
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-white mb-6">Why Book a Demo?</h2>
              <p className="text-xl text-gray-300 mb-8">
                Our personalized demos give you a hands-on experience of our platform 
                and help you understand how it can solve your specific business challenges.
              </p>
              <div className="space-y-4">
                {benefits.map((benefit, index) => (
                  <div key={index} className="flex items-start">
                    <CheckCircle className="w-6 h-6 text-green-400 mr-3 mt-1" />
                    <span className="text-gray-300">{benefit}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-8">
              <h3 className="text-2xl font-bold text-white mb-6">Ready to Get Started?</h3>
              <p className="text-gray-300 mb-6">
                Book your demo today and discover how our solutions can transform your business.
              </p>
              <div className="space-y-4">
                <button className="w-full bg-gradient-to-r from-purple-500 to-blue-600 hover:from-purple-600 hover:to-blue-700 text-white font-bold py-3 px-6 rounded-lg transition-all duration-300">
                  Schedule Now
                </button>
                <button className="w-full border border-purple-400 text-purple-400 hover:bg-purple-400 hover:text-white font-bold py-3 px-6 rounded-lg transition-all duration-300">
                  Contact Sales
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-white mb-8 text-center">What Our Clients Say</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6">
                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400" />
                  ))}
                </div>
                <p className="text-gray-300 italic mb-4">"{testimonial.quote}"</p>
                <div>
                  <div className="text-white font-semibold">{testimonial.name}</div>
                  <div className="text-gray-400 text-sm">{testimonial.role}</div>
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
            Ready to See It in Action?
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Book your personalized demo today and discover how our solutions can transform your business.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-gradient-to-r from-purple-500 to-blue-600 hover:from-purple-600 hover:to-blue-700 text-white font-bold py-4 px-8 rounded-lg transition-all duration-300 transform hover:scale-105">
              Book Demo Now
              <Calendar className="inline-block ml-2 w-5 h-5" />
            </button>
            <button className="border border-purple-400 text-purple-400 hover:bg-purple-400 hover:text-white font-bold py-4 px-8 rounded-lg transition-all duration-300">
              Contact Us
            </button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
>>>>>>> cursor/fix-errors-and-merge-to-main-c4b3
  );
};

export default DemoPage;
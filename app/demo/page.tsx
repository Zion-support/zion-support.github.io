'use client';
import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { Play, ArrowRight, CheckCircle, Download, Calendar, Phone, Mail } from 'lucide-react';

const DemoPage: React.FC = () => {
  const [selectedDemo, setSelectedDemo] = useState('ai-solutions');

  const demos = [
    {
      id: 'ai-solutions',
      title: 'AI Solutions Demo',
      description: 'Experience our AI-powered solutions including machine learning, natural language processing, and predictive analytics.',
      duration: '15 minutes',
      features: [
        'Machine Learning Models',
        'Natural Language Processing',
        'Predictive Analytics',
        'AI Chatbots',
        'Computer Vision',
        'Automated Decision Making'
      ],
      videoUrl: '/demos/ai-solutions.mp4',
      thumbnail: '/demos/ai-solutions-thumb.jpg'
    },
    {
      id: 'cloud-infrastructure',
      title: 'Cloud Infrastructure Demo',
      description: 'See how we can help you migrate to the cloud and optimize your infrastructure for scalability and performance.',
      duration: '20 minutes',
      features: [
        'Cloud Migration',
        'Auto-scaling',
        'Load Balancing',
        'Security Implementation',
        'Cost Optimization',
        'Monitoring & Analytics'
      ],
      videoUrl: '/demos/cloud-infrastructure.mp4',
      thumbnail: '/demos/cloud-infrastructure-thumb.jpg'
    },
    {
      id: 'cybersecurity',
      title: 'Cybersecurity Demo',
      description: 'Learn about our comprehensive security solutions and how we protect your digital assets.',
      duration: '12 minutes',
      features: [
        'Threat Detection',
        'Vulnerability Assessment',
        'Security Monitoring',
        'Compliance Management',
        'Incident Response',
        'Security Training'
      ],
      videoUrl: '/demos/cybersecurity.mp4',
      thumbnail: '/demos/cybersecurity-thumb.jpg'
    },
    {
      id: 'data-analytics',
      title: 'Data Analytics Demo',
      description: 'Discover how our data analytics solutions can transform your business insights and decision-making.',
      duration: '18 minutes',
      features: [
        'Real-time Dashboards',
        'Predictive Modeling',
        'Data Visualization',
        'Business Intelligence',
        'Custom Reports',
        'Data Integration'
      ],
      videoUrl: '/demos/data-analytics.mp4',
      thumbnail: '/demos/data-analytics-thumb.jpg'
    }
  ];

  const testimonials = [
    {
      name: 'Sarah Johnson',
      role: 'CTO, TechCorp',
      quote: 'The AI solutions demo was incredibly impressive. It showed exactly how we could transform our business operations.',
      rating: 5
    },
    {
      name: 'Michael Chen',
      role: 'VP Engineering, InnovateLabs',
      quote: 'The cloud infrastructure demo helped us understand the migration process and potential benefits.',
      rating: 5
    },
    {
      name: 'Emily Rodriguez',
      role: 'Security Director, DataFlow',
      quote: 'The cybersecurity demo gave us confidence in their security capabilities and approach.',
      rating: 5
    }
  ];

  const selectedDemoData = demos.find(demo => demo.id === selectedDemo) || demos[0];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Helmet>
        <title>Demo - Zion Tech Group | See Our Solutions in Action</title>
        <meta name="description" content="Watch demos of our AI and IT solutions. See how our technology can transform your business with interactive demonstrations." />
        <meta name="keywords" content="demo, AI demo, IT solutions demo, technology demonstration, Zion Tech Group" />
      </Helmet>

      {/* Hero Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,rgba(147,51,234,0.3)_0%,transparent_50%)] animate-pulse" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(59,130,246,0.3)_0%,transparent_50%)] animate-pulse" style={{ animationDelay: '1s' }} />
        <div className="relative max-w-7xl mx-auto text-center">
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
            See Our <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">Solutions</span>
          </h1>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed">
            Experience our AI and IT solutions in action. Watch interactive demos and see how our technology can transform your business.
          </p>
        </div>
      </section>

      {/* Demo Selection */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-white mb-4">Choose a Demo</h2>
            <p className="text-xl text-gray-300">Select the solution you'd like to explore</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {demos.map((demo) => (
              <button
                key={demo.id}
                onClick={() => setSelectedDemo(demo.id)}
                className={`p-6 rounded-2xl transition-all duration-300 ${
                  selectedDemo === demo.id
                    ? 'bg-gradient-to-r from-blue-500 to-purple-600 text-white'
                    : 'bg-white/5 backdrop-blur-sm text-gray-300 hover:bg-white/10'
                }`}
              >
                <div className="text-center">
                  <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Play className="w-8 h-8" />
                  </div>
                  <h3 className="text-lg font-bold mb-2">{demo.title}</h3>
                  <p className="text-sm opacity-80">{demo.duration}</p>
                </div>
              </button>
            ))}
          </div>

          {/* Selected Demo */}
          <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <div>
                <h3 className="text-3xl font-bold text-white mb-4">{selectedDemoData.title}</h3>
                <p className="text-xl text-gray-300 mb-6">{selectedDemoData.description}</p>
                <div className="space-y-4 mb-8">
                  <h4 className="text-lg font-semibold text-white">Key Features:</h4>
                  <ul className="space-y-2">
                    {selectedDemoData.features.map((feature, index) => (
                      <li key={index} className="flex items-center space-x-3">
                        <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0" />
                        <span className="text-gray-300">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="flex flex-col sm:flex-row gap-4">
                  <button className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white font-bold py-3 px-6 rounded-lg transition-all duration-300 inline-flex items-center space-x-2">
                    <Play className="w-5 h-5" />
                    <span>Watch Demo</span>
                  </button>
                  <button className="border border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-white font-bold py-3 px-6 rounded-lg transition-all duration-300 inline-flex items-center space-x-2">
                    <Download className="w-5 h-5" />
                    <span>Download Brochure</span>
                  </button>
                </div>
              </div>
              <div className="bg-white/10 rounded-xl h-64 flex items-center justify-center">
                <div className="text-white text-center">
                  <div className="w-20 h-20 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Play className="w-10 h-10" />
                  </div>
                  <p className="text-lg font-semibold mb-2">Demo Video</p>
                  <p className="text-sm opacity-80">Click to play</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white/5">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-white mb-4">What Our Clients Say</h2>
            <p className="text-xl text-gray-300">See how our demos have helped businesses make informed decisions</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-white/5 backdrop-blur-sm rounded-2xl p-6">
                <div className="flex items-center mb-4">
                  <div className="flex text-yellow-400">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <CheckCircle key={i} className="w-5 h-5 fill-current" />
                    ))}
                  </div>
                </div>
                <blockquote className="text-gray-300 mb-4 italic">
                  "{testimonial.quote}"
                </blockquote>
                <div className="flex items-center">
                  <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center text-white font-bold mr-3">
                    {testimonial.name.charAt(0)}
                  </div>
                  <div>
                    <div className="text-white font-semibold">{testimonial.name}</div>
                    <div className="text-sm text-gray-400">{testimonial.role}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-3xl p-12">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Ready to See More?
            </h2>
            <p className="text-xl text-blue-100 mb-8">
              Schedule a personalized demo with our experts and see how our solutions can work for your specific needs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-4 rounded-lg font-semibold text-lg transition-colors inline-flex items-center space-x-2 group">
                <Calendar className="w-5 h-5" />
                <span>Schedule Demo</span>
              </button>
              <a
                href="tel:+13024640950"
                className="border-2 border-white text-white hover:bg-white hover:text-blue-600 px-8 py-4 rounded-lg font-semibold text-lg transition-colors inline-flex items-center space-x-2"
              >
                <Phone className="w-5 h-5" />
                <span>(302) 464-0950</span>
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default DemoPage;
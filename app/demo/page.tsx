'use client';

import React, { useState } from 'react';
import { Play, Download, Calendar, ArrowRight, CheckCircle, Star, Users, Zap, Shield, Brain } from 'lucide-react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import SEOOptimizer from '../components/SEOOptimizer';

const DemoPage: React.FC = () => {
  const [selectedDemo, setSelectedDemo] = useState('ai-solutions');

  const demos = [
    {
      id: 'ai-solutions',
      title: 'AI Solutions Demo',
      description: 'Experience our AI-powered solutions in action',
      duration: '15 minutes',
      category: 'AI & Machine Learning',
      features: ['Natural Language Processing', 'Computer Vision', 'Predictive Analytics', 'Automated Decision Making']
    },
    {
      id: 'cloud-platform',
      title: 'Cloud Platform Demo',
      description: 'See our cloud infrastructure and management capabilities',
      duration: '20 minutes',
      category: 'Cloud Computing',
      features: ['Auto-scaling', 'Load Balancing', 'Security Monitoring', 'Cost Optimization']
    },
    {
      id: 'data-analytics',
      title: 'Data Analytics Demo',
      description: 'Explore our advanced analytics and visualization tools',
      duration: '12 minutes',
      category: 'Data Analytics',
      features: ['Real-time Dashboards', 'Predictive Modeling', 'Data Visualization', 'Business Intelligence']
    },
    {
      id: 'security-suite',
      title: 'Security Suite Demo',
      description: 'Discover our comprehensive security solutions',
      duration: '18 minutes',
      category: 'Cybersecurity',
      features: ['Threat Detection', 'Vulnerability Assessment', 'Compliance Monitoring', 'Incident Response']
    }
  ];

  const benefits = [
    {
      icon: Play,
      title: 'Interactive Experience',
      description: 'Hands-on demos with real data and scenarios'
    },
    {
      icon: Users,
      title: 'Expert Guidance',
      description: 'Personalized demo with our solution experts'
    },
    {
      icon: CheckCircle,
      title: 'Customized Solutions',
      description: 'Tailored demos based on your specific needs'
    },
    {
      icon: Star,
      title: 'No Commitment',
      description: 'Free demos with no obligation to purchase'
    }
  ];

  const testimonials = [
    {
      quote: 'The demo was incredibly insightful. It showed us exactly how AI could transform our operations.',
      author: 'Sarah Johnson',
      role: 'CTO, TechCorp',
      rating: 5
    },
    {
      quote: 'Best demo I\'ve seen in years. The team really understood our challenges.',
      author: 'Michael Chen',
      role: 'VP Engineering, DataFlow',
      rating: 5
    },
    {
      quote: 'The personalized approach made all the difference. Highly recommended!',
      author: 'Emily Rodriguez',
      role: 'Director, CloudFirst',
      rating: 5
    }
  ];

  const selectedDemoData = demos.find(demo => demo.id === selectedDemo);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <SEOOptimizer 
        title="Request a Demo - Zion Tech Group"
        description="See our AI and technology solutions in action. Request a personalized demo tailored to your business needs."
        keywords="demo, AI demo, technology demo, personalized demo, solution showcase, product demonstration"
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
            See our AI and technology solutions in action. Get a personalized demo 
            tailored to your specific business needs and challenges.
          </p>
        </div>
      </section>

      {/* Demo Selection */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">Choose Your Demo</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Select the demo that best matches your interests and business needs.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {demos.map((demo) => (
              <button
                key={demo.id}
                onClick={() => setSelectedDemo(demo.id)}
                className={`p-6 rounded-xl border transition-all duration-300 text-left ${
                  selectedDemo === demo.id
                    ? 'bg-purple-500/20 border-purple-500 text-white'
                    : 'bg-white/5 border-white/10 text-gray-300 hover:bg-white/10'
                }`}
              >
                <div className="flex items-center mb-4">
                  <div className={`w-12 h-12 rounded-lg flex items-center justify-center mr-4 ${
                    selectedDemo === demo.id ? 'bg-purple-500' : 'bg-purple-500/20'
                  }`}>
                    <Play className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="font-semibold">{demo.title}</h3>
                    <p className="text-sm opacity-75">{demo.category}</p>
                  </div>
                </div>
                <p className="text-sm mb-3">{demo.description}</p>
                <div className="flex items-center text-sm">
                  <Clock className="w-4 h-4 mr-1" />
                  {demo.duration}
                </div>
              </button>
            ))}
          </div>

          {/* Selected Demo Details */}
          {selectedDemoData && (
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-8">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-2xl font-bold text-white mb-4">{selectedDemoData.title}</h3>
                  <p className="text-gray-300 mb-6">{selectedDemoData.description}</p>
                  
                  <div className="space-y-4">
                    <div className="flex items-center">
                      <Clock className="w-5 h-5 text-purple-400 mr-3" />
                      <span className="text-gray-300">Duration: {selectedDemoData.duration}</span>
                    </div>
                    <div className="flex items-center">
                      <Star className="w-5 h-5 text-purple-400 mr-3" />
                      <span className="text-gray-300">Category: {selectedDemoData.category}</span>
                    </div>
                  </div>

                  <div className="mt-8">
                    <h4 className="text-lg font-semibold text-white mb-4">What You'll See:</h4>
                    <ul className="space-y-2">
                      {selectedDemoData.features.map((feature, index) => (
                        <li key={index} className="flex items-center">
                          <CheckCircle className="w-4 h-4 text-green-400 mr-3" />
                          <span className="text-gray-300">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="bg-gradient-to-r from-purple-500/20 to-blue-500/20 rounded-xl p-8 flex items-center justify-center">
                  <div className="text-center">
                    <div className="w-20 h-20 bg-purple-500/30 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Play className="w-10 h-10 text-purple-400" />
                    </div>
                    <h4 className="text-xl font-semibold text-white mb-2">Demo Preview</h4>
                    <p className="text-gray-300 text-sm">Interactive demonstration of our solutions</p>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">Why Request a Demo?</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Our demos are designed to give you a comprehensive understanding of our capabilities.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-blue-600 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <benefit.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-lg font-semibold text-white mb-3">{benefit.title}</h3>
                <p className="text-gray-300 text-sm">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">What Our Clients Say</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Don't just take our word for it. Here's what our clients say about our demos.
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
                <div className="flex items-center">
                  <div className="w-10 h-10 bg-purple-500/20 rounded-full flex items-center justify-center mr-3">
                    <span className="text-purple-400 font-semibold">
                      {testimonial.author.split(' ').map(n => n[0]).join('')}
                    </span>
                  </div>
                  <div>
                    <div className="text-white font-semibold">{testimonial.author}</div>
                    <div className="text-gray-400 text-sm">{testimonial.role}</div>
                  </div>
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
            Schedule your personalized demo today and discover how our solutions can transform your business.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-gradient-to-r from-purple-500 to-blue-600 hover:from-purple-600 hover:to-blue-700 text-white font-bold py-4 px-8 rounded-lg transition-all duration-300 transform hover:scale-105">
              <Calendar className="inline-block mr-2 w-5 h-5" />
              Schedule Demo
            </button>
            <button className="border border-purple-400 text-purple-400 hover:bg-purple-400 hover:text-white font-bold py-4 px-8 rounded-lg transition-all duration-300">
              <Download className="inline-block mr-2 w-5 h-5" />
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
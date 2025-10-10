'use client';
import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import { ArrowRight, Play, CheckCircle, Star, Users, Clock, Shield, Zap } from 'lucide-react';

const DemoPage: React.FC = () => {
  const [selectedDemo, setSelectedDemo] = useState('ai-solutions');

  const demos = [
    {
      id: 'ai-solutions',
      title: 'AI Solutions Demo',
      description: 'Experience our AI-powered solutions in action',
      duration: '15 minutes',
      features: ['Machine Learning Models', 'Natural Language Processing', 'Computer Vision', 'Predictive Analytics']
    },
    {
      id: 'cloud-platform',
      title: 'Cloud Platform Demo',
      description: 'See our cloud infrastructure and deployment capabilities',
      duration: '20 minutes',
      features: ['Auto-scaling', 'Load Balancing', 'Security Features', 'Monitoring Dashboard']
    },
    {
      id: 'data-analytics',
      title: 'Data Analytics Demo',
      description: 'Explore our data visualization and analytics tools',
      duration: '12 minutes',
      features: ['Real-time Dashboards', 'Data Visualization', 'Business Intelligence', 'Custom Reports']
    }
  ];

  const testimonials = [
    {
      name: 'Sarah Johnson',
      company: 'TechCorp Inc.',
      role: 'CTO',
      content: 'The AI demo was incredible. We could see exactly how it would solve our specific challenges.',
      rating: 5
    },
    {
      name: 'Michael Chen',
      company: 'DataFlow Systems',
      role: 'VP Engineering',
      content: 'The cloud platform demo showed us the scalability we needed. Very impressive!',
      rating: 5
    },
    {
      name: 'Emily Rodriguez',
      company: 'Analytics Pro',
      role: 'Data Director',
      content: 'The analytics demo exceeded our expectations. The visualization capabilities are outstanding.',
      rating: 5
    }
  ];

  const benefits = [
    'See solutions in action',
    'Ask questions in real-time',
    'Get personalized recommendations',
    'Understand implementation process',
    'See ROI calculations',
    'Meet our technical team'
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Helmet>
        <title>Demo - Zion Tech Group | See Our Solutions in Action</title>
        <meta name="description" content="Schedule a personalized demo of our AI and IT solutions. See how our technology can transform your business." />
        <meta name="keywords" content="demo, AI demo, technology demo, solution demo, product demonstration" />
      </Helmet>
      
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative py-20 px-4 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,rgba(147,51,234,0.3)_0%,transparent_50%)] animate-pulse" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(59,130,246,0.3)_0%,transparent_50%)] animate-pulse" style={{ animationDelay: '1s' }} />
        <div className="relative max-w-7xl mx-auto text-center">
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
            See Our
            <span className="block bg-gradient-to-r from-purple-400 via-blue-400 to-cyan-400 bg-clip-text text-transparent">
              Solutions
            </span>
          </h1>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed">
            Experience our AI and IT solutions firsthand. Schedule a personalized demo 
            and see how our technology can transform your business.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-gradient-to-r from-purple-500 to-blue-600 hover:from-purple-600 hover:to-blue-700 text-white font-bold py-4 px-8 rounded-lg transition-all duration-300 transform hover:scale-105">
              Schedule Demo
              <ArrowRight className="inline-block ml-2 w-5 h-5" />
            </button>
            <button className="border border-purple-400 text-purple-400 hover:bg-purple-400 hover:text-white font-bold py-4 px-8 rounded-lg transition-all duration-300">
              Watch Video Demo
            </button>
          </div>
        </div>
      </section>

      {/* Demo Types */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-white mb-16 text-center">Choose Your Demo</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {demos.map((demo) => (
              <div
                key={demo.id}
                className={`bg-white/5 backdrop-blur-sm border rounded-xl p-8 hover:bg-white/10 transition-all duration-300 cursor-pointer ${
                  selectedDemo === demo.id ? 'border-purple-500 bg-purple-500/10' : 'border-white/10'
                }`}
                onClick={() => setSelectedDemo(demo.id)}
              >
                <div className="flex items-center mb-4">
                  <Play className="w-8 h-8 text-purple-400 mr-3" />
                  <h3 className="text-xl font-semibold text-white">{demo.title}</h3>
                </div>
                <p className="text-gray-300 mb-4">{demo.description}</p>
                <div className="flex items-center mb-4">
                  <Clock className="w-4 h-4 text-gray-400 mr-2" />
                  <span className="text-gray-400 text-sm">{demo.duration}</span>
                </div>
                <ul className="space-y-2">
                  {demo.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-sm text-gray-400">
                      <CheckCircle className="w-4 h-4 text-green-400 mr-2" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-white mb-6">Why Schedule a Demo?</h2>
              <p className="text-xl text-gray-300 mb-8">
                Our demos are designed to show you exactly how our solutions can address 
                your specific business challenges and deliver measurable results.
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
                Schedule your personalized demo today and discover how our solutions 
                can transform your business.
              </p>
              <div className="space-y-4">
                <button className="w-full bg-gradient-to-r from-purple-500 to-blue-600 hover:from-purple-600 hover:to-blue-700 text-white font-bold py-3 px-6 rounded-lg transition-all duration-300">
                  Schedule Now
                </button>
                <button className="w-full border border-purple-400 text-purple-400 hover:bg-purple-400 hover:text-white font-bold py-3 px-6 rounded-lg transition-all duration-300">
                  Download Demo Guide
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-white mb-16 text-center">What Our Clients Say</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6">
                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-300 mb-4">"{testimonial.content}"</p>
                <div>
                  <div className="text-white font-semibold">{testimonial.name}</div>
                  <div className="text-gray-400 text-sm">{testimonial.role}, {testimonial.company}</div>
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
            Ready to See Our Solutions in Action?
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Schedule your personalized demo today and discover how our AI and IT solutions 
            can transform your business.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-gradient-to-r from-purple-500 to-blue-600 hover:from-purple-600 hover:to-blue-700 text-white font-bold py-4 px-8 rounded-lg transition-all duration-300 transform hover:scale-105">
              Schedule Your Demo
              <ArrowRight className="inline-block ml-2 w-5 h-5" />
            </button>
            <button className="border border-purple-400 text-purple-400 hover:bg-purple-400 hover:text-white font-bold py-4 px-8 rounded-lg transition-all duration-300">
              Contact Sales
            </button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default DemoPage;
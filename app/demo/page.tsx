'use client';
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

      rating: 5
    },
    {
      name: 'Michael Chen',
company: 'DataFlow Inc',
      role: 'CTO',
      content: 'The quantum computing demo was mind-blowing. We could see immediate applications for our optimization problems.',

      rating: 5
    }
  ];

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

  );
}

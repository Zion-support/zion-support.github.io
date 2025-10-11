'use client';
import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { Play, CheckCircle, ArrowRight, Star } from 'lucide-react';
      description: 'See how our AI-powered analytics can transform your data into actionable insights.',
      features: ['Real-time data visualization', 'Predictive analytics', 'Custom dashboards', 'Automated reporting']
    },
    {
      id: 'ai-automation',
      title: 'AI Automation Platform',
      description: 'Experience intelligent automation that streamlines your business processes.',
      features: ['Process automation', 'Smart workflows', 'AI chatbots', 'Predictive maintenance']
    },
    {
      id: 'cloud-solutions',
      title: 'Cloud Solutions',
      description: 'Explore our comprehensive cloud infrastructure and migration services.',
      features: ['Cloud migration', 'Infrastructure as Code', 'DevOps automation', 'Security monitoring']
    }
  ];

const testimonials = [
    {
      name: 'Sarah Johnson',
      company: 'TechCorp',
      role: 'CEO',
      content: 'The AI dashboard demo showed us exactly how we could transform our data analytics. Incredible insights!',

company: 'DataFlow Inc',
      role: 'CTO',
      content: 'The quantum computing demo was mind-blowing. We could see immediate applications for our optimization problems.',

return (

    <>
      <Helmet>
        <title>Demo - Zion Tech Group | See Our Solutions in Action</title>
        <meta name="description" content="Experience our AI and IT solutions through interactive demos. See how our technology can transform your business." />
        <meta name="keywords" content="demo, AI demo, technology demo, Zion Tech Group, interactive demo" />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        {/* Hero Section */}
        <section className="pt-20 pb-16 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
                Interactive Demos
              </h1>
              <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
                Experience our AI and IT solutions firsthand. See how our technology can transform your business.
              </p>
            </div>
          </div>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {/* Demo List */}
              <div className="space-y-6">
                <h2 className="text-3xl font-bold text-white mb-8">Choose a Demo</h2>
                {demos.map((demo) => (
                  <div
                    key={demo.id}
                    className={`cyber-card p-6 cursor-pointer transition-all ${
                      selectedDemo === demo.id ? 'ring-2 ring-cyan-500' : ''
                    }`}
                    onClick={() => setSelectedDemo(demo.id)}
                  >
                    <div className="flex items-start justify-between">
                      <div className="flex-1">
                        <h3 className="text-xl font-semibold text-white mb-2">{demo.title}</h3>
                        <p className="text-gray-300 mb-4">{demo.description}</p>
                        <ul className="space-y-2">
                          {demo.features.map((feature, index) => (
                            <li key={index} className="flex items-center text-sm text-gray-400">
                              <CheckCircle className="w-4 h-4 text-cyan-400 mr-2" />
                              {feature}
                            </li>
                          ))}
                        </ul>
                      </div>
                      <div className="ml-4">
                        <Play className="w-6 h-6 text-cyan-400" />
                      </div>
                ))}
              </div>

              {/* Demo Preview */}
              <div className="cyber-card p-8">
                <h3 className="text-2xl font-bold text-white mb-6">
                  {demos.find(d => d.id === selectedDemo)?.title} Demo
                </h3>
                <div className="bg-gray-800 rounded-lg p-8 mb-6 text-center">
                  <div className="w-16 h-16 bg-cyan-500 rounded-lg flex items-center justify-center mx-auto mb-4">
                    <Play className="w-8 h-8 text-white" />
                  </div>
                  <p className="text-gray-300 mb-4">
                    Interactive demo coming soon. Contact us to schedule a live demonstration.
                  </p>
                  <button className="bg-cyan-500 hover:bg-cyan-600 text-white px-6 py-3 rounded-lg font-semibold transition-colors">
                    Schedule Live Demo
                  </button>
                </div>
                <div className="space-y-4">
                  <h4 className="text-lg font-semibold text-white">What you'll see:</h4>
                  <ul className="space-y-2">
                    {demos.find(d => d.id === selectedDemo)?.features.map((feature, index) => (
                      <li key={index} className="flex items-center text-gray-300">
                        <Star className="w-4 h-4 text-cyan-400 mr-2" />
                        {feature}
                      </li>
                    ))}
                  </ul>

        {/* CTA Section */}
        <section className="py-16 px-4 bg-gradient-to-r from-cyan-600 to-purple-600">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold text-white mb-4">Ready to See More?</h2>
            <p className="text-xl text-gray-100 mb-8">
              Schedule a personalized demo with our experts to see how our solutions can work for your business.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-cyan-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors flex items-center justify-center">
                <Play className="w-5 h-5 mr-2" />
                Schedule Demo
              </button>
              <button className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-cyan-600 transition-colors flex items-center justify-center">
                <ArrowRight className="w-5 h-5 mr-2" />
                Contact Sales
              </button>
            </div>
          </div>
    </>
);
}

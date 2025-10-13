import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { Play, CheckCircle, ArrowRight, Star, Zap, Brain, Shield } from 'lucide-react';

export default function DemoPage() {
  const [selectedDemo, setSelectedDemo] = useState('ai-analytics');

  const demos = [
    {
      id: 'ai-analytics',
      title: 'AI Analytics Dashboard',
      description: 'Experience our powerful AI analytics platform with real-time data visualization and insights.',
      features: ['Real-time data processing', 'Interactive dashboards', 'Predictive analytics', 'Custom reports'],
      duration: '5 minutes',
      difficulty: 'Beginner'
    },
    {
      id: 'ai-automation',
      title: 'AI Automation Workflow',
      description: 'See how AI can automate your business processes and increase efficiency.',
      features: ['Process automation', 'Smart routing', 'Error detection', 'Performance optimization'],
      duration: '7 minutes',
      difficulty: 'Intermediate'
    },
    {
      id: '5g-network',
      title: '5G Network Simulation',
      description: 'Explore the capabilities of 5G networks and their impact on IoT and edge computing.',
      features: ['Network visualization', 'Performance metrics', 'IoT device simulation', 'Edge computing demo'],
      duration: '10 minutes',
      difficulty: 'Advanced'
    }
  ];

  const testimonials = [
    {
      name: "Sarah Johnson",
      role: "CTO, TechCorp",
      content: "The AI analytics demo was incredible. We could see exactly how it would transform our data insights.",
      rating: 5
    },
    {
      name: "Michael Chen",
      role: "Operations Director, InnovateLabs",
      content: "The automation workflow demo showed us potential savings of 40% in processing time. Amazing!",
      rating: 5
    },
    {
      name: "Emily Davis",
      role: "IT Manager, FutureTech",
      content: "The 5G simulation helped us understand the technology's potential for our smart city project.",
      rating: 5
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Helmet>
        <title>Demo - Zion Tech Group</title>
        <meta name="description" content="Experience our AI and IT solutions through interactive demos. See how our technology can transform your business." />
      </Helmet>
      
      <div className="container mx-auto px-4 py-16">
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold text-white mb-6">Interactive Demos</h1>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Experience our cutting-edge AI and IT solutions through interactive demonstrations. 
            See how our technology can transform your business operations.
          </p>
        </div>

        {/* Demo Selection */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {demos.map((demo) => (
            <div
              key={demo.id}
              className={`bg-white/10 backdrop-blur-sm rounded-xl p-6 border cursor-pointer transition-all duration-300 hover:scale-105 ${
                selectedDemo === demo.id 
                  ? 'border-cyan-400/50 ring-2 ring-cyan-400/20' 
                  : 'border-white/20 hover:bg-white/20'
              }`}
              onClick={() => setSelectedDemo(demo.id)}
            >
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-lg flex items-center justify-center text-white mr-4">
                  {demo.id === 'ai-analytics' && <Brain className="w-6 h-6" />}
                  {demo.id === 'ai-automation' && <Zap className="w-6 h-6" />}
                  {demo.id === '5g-network' && <Shield className="w-6 h-6" />}
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-white">{demo.title}</h3>
                  <div className="flex items-center space-x-4 text-sm text-gray-400">
                    <span>{demo.duration}</span>
                    <span>•</span>
                    <span>{demo.difficulty}</span>
                  </div>
                </div>
              </div>
              <p className="text-gray-300 mb-4">{demo.description}</p>
              <ul className="space-y-2">
                {demo.features.map((feature, index) => (
                  <li key={index} className="flex items-center text-sm text-gray-300">
                    <CheckCircle className="w-4 h-4 text-cyan-400 mr-2 flex-shrink-0" />
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Demo Content */}
        <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8 border border-white/20 mb-16">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-white mb-4">
              {demos.find(d => d.id === selectedDemo)?.title}
            </h2>
            <p className="text-gray-300 mb-6">
              {demos.find(d => d.id === selectedDemo)?.description}
            </p>
            <div className="flex items-center justify-center space-x-8 text-sm text-gray-400">
              <div className="flex items-center">
                <Play className="w-4 h-4 mr-2" />
                <span>{demos.find(d => d.id === selectedDemo)?.duration}</span>
              </div>
              <div className="flex items-center">
                <Star className="w-4 h-4 mr-2" />
                <span>{demos.find(d => d.id === selectedDemo)?.difficulty}</span>
              </div>
            </div>
          </div>

          {/* Demo Placeholder */}
          <div className="bg-gradient-to-br from-cyan-500/20 to-purple-600/20 rounded-lg h-96 flex items-center justify-center mb-8">
            <div className="text-center">
              <Play className="w-20 h-20 text-white/60 mx-auto mb-4" />
              <h3 className="text-2xl font-bold text-white mb-2">Interactive Demo</h3>
              <p className="text-gray-300">Click the play button to start the demonstration</p>
            </div>
          </div>

          <div className="text-center">
            <button className="bg-cyan-600 text-white font-semibold py-3 px-8 rounded-lg hover:bg-cyan-700 transition-colors mr-4">
              Start Demo
            </button>
            <button className="bg-white/10 text-white font-semibold py-3 px-8 rounded-lg hover:bg-white/20 transition-colors">
              Schedule Live Demo
            </button>
          </div>
        </div>

        {/* Testimonials */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-white text-center mb-8">What Our Clients Say</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-300 mb-4 italic">"{testimonial.content}"</p>
                <div>
                  <p className="font-semibold text-white">{testimonial.name}</p>
                  <p className="text-sm text-gray-400">{testimonial.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center">
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8 border border-white/20 max-w-2xl mx-auto">
            <h2 className="text-3xl font-bold text-white mb-4">
              Ready to See More?
            </h2>
            <p className="text-gray-300 mb-6">
              Schedule a personalized demo with our experts to see how our solutions can benefit your specific use case.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-cyan-600 text-white font-semibold py-3 px-6 rounded-lg hover:bg-cyan-700 transition-colors">
                Schedule Demo
              </button>
              <button className="bg-white/10 text-white font-semibold py-3 px-6 rounded-lg hover:bg-white/20 transition-colors">
                Contact Sales
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
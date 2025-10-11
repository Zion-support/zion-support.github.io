'use client';
import React, { useState } from 'react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import { Play, Star, ArrowRight, CheckCircle, Zap, Shield, Cloud, Brain } from 'lucide-react';

const DemoPage: React.FC = () => {
  const [activeDemo, setActiveDemo] = useState(0);

  const demos = [
    {
      id: 1,
      title: 'AI-Powered Analytics Dashboard',
      description: 'See how our AI analytics can transform your business data into actionable insights.',
      duration: '5 min',
      category: 'Analytics',
      features: [
        'Real-time data processing',
        'Predictive analytics',
        'Custom visualizations',
        'Automated reporting'
      ],
      icon: Brain
    },
    {
      id: 2,
      title: 'Cloud Infrastructure Management',
      description: 'Experience our cloud solutions for scalable and secure infrastructure.',
      duration: '3 min',
      category: 'Cloud',
      features: [
        'Auto-scaling capabilities',
        'Security monitoring',
        'Cost optimization',
        'Global deployment'
      ],
      icon: Cloud
    },
    {
      id: 3,
      title: 'Cybersecurity Solutions',
      description: 'Explore our comprehensive security solutions and threat detection.',
      duration: '4 min',
      category: 'Security',
      features: [
        'Threat detection',
        'Real-time monitoring',
        'Incident response',
        'Compliance management'
      ],
      icon: Shield
    },
    {
      id: 4,
      title: 'AI Automation Workflow',
      description: 'Watch how AI can automate complex business processes and workflows.',
      duration: '6 min',
      category: 'Automation',
      features: [
        'Process automation',
        'Smart decision making',
        'Workflow optimization',
        'Exception handling'
      ],
      icon: Zap
    }
  ];

  const testimonials = [
    {
      name: 'Sarah Johnson',
      company: 'TechCorp Inc.',
      rating: 5,
      comment: 'The AI analytics demo completely changed our perspective on data-driven decision making.'
    },
    {
      name: 'Michael Chen',
      company: 'DataFlow Systems',
      rating: 5,
      comment: 'Incredible how seamlessly the cloud solutions integrate with our existing infrastructure.'
    },
    {
      name: 'Emily Rodriguez',
      company: 'SecureTech Ltd.',
      rating: 5,
      comment: 'The cybersecurity demo showed us vulnerabilities we never knew existed.'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-20 pb-16 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,rgba(147,51,234,0.3)_0%,transparent_50%)] animate-pulse" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(59,130,246,0.3)_0%,transparent_50%)] animate-pulse" style={{ animationDelay: '1s' }} />
        <div className="relative max-w-7xl mx-auto text-center">
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
            See It in
            <span className="block bg-gradient-to-r from-purple-400 via-blue-400 to-cyan-400 bg-clip-text text-transparent">
              Action
            </span>
          </h1>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed">
            Experience our AI and IT solutions through interactive demos. 
            See exactly how our technology can transform your business.
          </p>
          <button className="bg-gradient-to-r from-purple-500 to-blue-500 hover:from-purple-600 hover:to-blue-600 text-white px-8 py-4 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 flex items-center mx-auto">
            <Play className="w-6 h-6 mr-2" />
            Start Demo
          </button>
        </div>
      </section>

      {/* Demo Selection */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-white mb-4">Choose Your Demo</h2>
            <p className="text-gray-300 max-w-3xl mx-auto">
              Select from our range of interactive demos to see our solutions in action.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {demos.map((demo, index) => (
              <div
                key={demo.id}
                onClick={() => setActiveDemo(index)}
                className={`bg-white/10 backdrop-blur-sm rounded-xl p-6 border cursor-pointer transition-all duration-300 ${
                  activeDemo === index 
                    ? 'border-cyan-500 ring-2 ring-cyan-500/50 bg-white/20' 
                    : 'border-white/20 hover:bg-white/20'
                }`}
              >
                <div className="flex items-center space-x-3 mb-4">
                  <div className="bg-gradient-to-r from-cyan-500 to-blue-600 p-2 rounded-lg">
                    <demo.icon className="w-5 h-5 text-white" />
                  </div>
                  <span className="bg-purple-500 text-white px-2 py-1 rounded text-xs font-medium">
                    {demo.category}
                  </span>
                </div>
                <h3 className="text-lg font-bold text-white mb-2">{demo.title}</h3>
                <p className="text-gray-300 text-sm mb-4">{demo.description}</p>
                <div className="flex items-center justify-between text-sm text-gray-400">
                  <span>{demo.duration}</span>
                  <button className="text-cyan-400 hover:text-cyan-300">
                    <Play className="w-4 h-4" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Active Demo */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <div>
                <h3 className="text-2xl font-bold text-white mb-4">{demos[activeDemo].title}</h3>
                <p className="text-gray-300 mb-6">{demos[activeDemo].description}</p>
                
                <div className="space-y-3 mb-6">
                  {demos[activeDemo].features.map((feature, index) => (
                    <div key={index} className="flex items-center space-x-2">
                      <CheckCircle className="w-5 h-5 text-green-400" />
                      <span className="text-gray-300">{feature}</span>
                    </div>
                  ))}
                </div>
                
                <button className="bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 flex items-center">
                  <Play className="w-5 h-5 mr-2" />
                  Launch Demo
                </button>
              </div>
              
              <div className="bg-gradient-to-br from-cyan-500/20 to-blue-500/20 rounded-xl h-64 flex items-center justify-center">
                <div className="text-center">
                  <Play className="w-16 h-16 text-white/50 mx-auto mb-4" />
                  <p className="text-gray-400">Demo Video Player</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-white mb-4">What Our Clients Say</h2>
            <p className="text-gray-300">See how our demos have helped businesses make informed decisions.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400" />
                  ))}
                </div>
                <p className="text-gray-300 mb-4 italic">"{testimonial.comment}"</p>
                <div>
                  <p className="text-white font-semibold">{testimonial.name}</p>
                  <p className="text-gray-400 text-sm">{testimonial.company}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <div className="bg-gradient-to-r from-cyan-600 to-blue-600 rounded-2xl p-8 md:p-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Ready to See More?
            </h2>
            <p className="text-xl text-cyan-100 mb-8">
              Schedule a personalized demo with our experts to see how our solutions can work for your specific needs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-cyan-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-all duration-300">
                Schedule Demo
              </button>
              <button className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-cyan-600 transition-all duration-300 flex items-center justify-center">
                Contact Sales
                <ArrowRight className="w-4 h-4 ml-2" />
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
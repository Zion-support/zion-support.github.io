import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { Play, Star, ArrowRight, CheckCircle, BarChart, Brain, Shield, Cloud } from 'lucide-react';
import Navigation from '../components/Navigation';

const DemoPage: React.FC = () => {
  const [selectedDemo, setSelectedDemo] = useState('ai-analytics');

  const demos = [
    {
      id: 'ai-analytics',
      title: 'AI Analytics Dashboard',
      description: 'Real-time business analytics with AI-powered insights and predictions.',
      icon: BarChart,
      features: ['Real-time data visualization', 'AI-powered predictions', 'Custom dashboards', 'Automated reporting'],
      duration: '5 min demo'
    },
    {
      id: 'ai-automation',
      title: 'AI Process Automation',
      description: 'Intelligent automation solutions for business processes and workflows.',
      icon: Brain,
      features: ['Workflow automation', 'Document processing', 'Email automation', 'Task scheduling'],
      duration: '3 min demo'
    },
    {
      id: 'cybersecurity',
      title: 'AI Security Monitoring',
      description: 'Advanced cybersecurity monitoring with AI-powered threat detection.',
      icon: Shield,
      features: ['Threat detection', 'Vulnerability scanning', 'Security alerts', 'Compliance monitoring'],
      duration: '4 min demo'
    },
    {
      id: 'cloud-management',
      title: 'Cloud Infrastructure',
      description: 'Comprehensive cloud management and optimization solutions.',
      icon: Cloud,
      features: ['Resource optimization', 'Cost management', 'Auto-scaling', 'Performance monitoring'],
      duration: '6 min demo'
    }
  ];

  const testimonials = [
    {
      name: 'Sarah Johnson',
      company: 'TechCorp Inc.',
      rating: 5,
      comment: 'The AI analytics demo was incredible. We could see exactly how it would improve our decision-making process.'
    },
    {
      name: 'Michael Chen',
      company: 'DataFlow Systems',
      rating: 5,
      comment: 'The automation demo showed us how we could save 40% of our manual work. Highly recommended!'
    },
    {
      name: 'Emily Rodriguez',
      company: 'SecureTech Solutions',
      rating: 5,
      comment: 'The security monitoring demo gave us confidence in our cybersecurity posture. Excellent presentation.'
    }
  ];

  return (
    <>
      <Helmet>
        <title>Demo - Zion Tech Group | See Our Solutions in Action</title>
        <meta name="description" content="Experience our AI and IT solutions through interactive demos. See exactly how our technology can transform your business." />
        <meta name="keywords" content="demo, AI demo, IT solutions demo, interactive demo, technology showcase" />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        <Navigation />
        
        {/* Hero Section */}
        <section className="relative pt-20 pb-16 px-4 sm:px-6 lg:px-8 overflow-hidden">
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
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gradient-to-r from-purple-500 to-blue-600 hover:from-purple-600 hover:to-blue-700 text-white font-bold py-4 px-8 rounded-lg transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-purple-500/25 flex items-center">
                <Play className="w-5 h-5 mr-2" />
                Start Demo
              </button>
              <button className="border border-purple-400 text-purple-400 hover:bg-purple-400 hover:text-white font-bold py-4 px-8 rounded-lg transition-all duration-300">
                Schedule Live Demo
              </button>
            </div>
          </div>
        </section>

        {/* Demo Selection */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-white mb-6">Choose Your Demo</h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Select a demo to explore our solutions and see how they can benefit your business.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {demos.map((demo) => (
                <button
                  key={demo.id}
                  onClick={() => setSelectedDemo(demo.id)}
                  className={`p-6 rounded-2xl border transition-all duration-300 text-left ${
                    selectedDemo === demo.id
                      ? 'bg-white/10 border-cyan-400 ring-2 ring-cyan-400'
                      : 'bg-white/5 border-white/10 hover:bg-white/10'
                  }`}
                >
                  <div className="text-4xl mb-4 text-cyan-400">
                    <demo.icon className="w-12 h-12" />
                  </div>
                  <h3 className="text-lg font-bold text-white mb-2">{demo.title}</h3>
                  <p className="text-gray-300 text-sm mb-3">{demo.description}</p>
                  <div className="text-cyan-400 text-sm font-medium">{demo.duration}</div>
                </button>
              ))}
            </div>
          </div>
        </section>

        {/* Selected Demo Details */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-black/20">
          <div className="max-w-7xl mx-auto">
            {demos.filter(demo => demo.id === selectedDemo).map((demo) => (
              <div key={demo.id} className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                <div>
                  <h3 className="text-3xl font-bold text-white mb-6">{demo.title}</h3>
                  <p className="text-xl text-gray-300 mb-8">{demo.description}</p>
                  
                  <ul className="space-y-4 mb-8">
                    {demo.features.map((feature, index) => (
                      <li key={index} className="flex items-start">
                        <CheckCircle className="w-5 h-5 text-green-400 mr-3 mt-0.5 flex-shrink-0" />
                        <span className="text-gray-300">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  
                  <div className="flex flex-col sm:flex-row gap-4">
                    <button className="bg-gradient-to-r from-cyan-500 to-blue-600 text-white py-3 px-8 rounded-lg font-semibold hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 flex items-center justify-center">
                      <Play className="w-5 h-5 mr-2" />
                      Watch Demo
                    </button>
                    <button className="border border-white text-white py-3 px-8 rounded-lg font-semibold hover:bg-white hover:text-purple-600 transition-all duration-300">
                      Request Live Demo
                    </button>
                  </div>
                </div>
                
                <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
                  <div className="aspect-video bg-gradient-to-br from-cyan-500/20 to-blue-600/20 rounded-lg flex items-center justify-center mb-6">
                    <Play className="w-16 h-16 text-white" />
                  </div>
                  <div className="text-center">
                    <h4 className="text-xl font-bold text-white mb-2">Interactive Demo</h4>
                    <p className="text-gray-300 mb-4">Click play to start the {demo.duration}</p>
                    <div className="flex items-center justify-center text-yellow-400">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 fill-current" />
                      ))}
                      <span className="ml-2 text-gray-300">4.9/5 rating</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Testimonials */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold text-white mb-6">What Our Clients Say</h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                See what our clients have to say about our demos and solutions.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {testimonials.map((testimonial, index) => (
                <div key={index} className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
                  <div className="flex items-center mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  <p className="text-gray-300 mb-6 italic">"{testimonial.comment}"</p>
                  <div>
                    <div className="font-semibold text-white">{testimonial.name}</div>
                    <div className="text-gray-400 text-sm">{testimonial.company}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-black/20">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-white mb-6">
              Ready to See More?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Schedule a personalized demo with our experts to see how our solutions can work for your specific needs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 flex items-center justify-center">
                <ArrowRight className="w-5 h-5 mr-2" />
                Schedule Live Demo
              </button>
              <button className="border border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-purple-600 transition-all duration-300">
                Contact Sales
              </button>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default DemoPage;
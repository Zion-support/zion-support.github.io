'use client';
import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { Play, ArrowRight, CheckCircle, Star, Users, Zap, Shield, BarChart, Phone, Mail } from 'lucide-react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

const DemoPage: React.FC = () => {
  const [selectedDemo, setSelectedDemo] = useState('ai-dashboard');

  const demos = [
    {
      id: 'ai-dashboard',
      title: 'AI Analytics Dashboard',
      description: 'Real-time insights and predictive analytics for your business data',
      features: ['Real-time monitoring', 'Predictive analytics', 'Custom reports', 'Interactive charts'],
      icon: BarChart
    },
    {
      id: 'quantum-computing',
      title: 'Quantum Computing Platform',
      description: 'Experience the power of quantum algorithms and quantum machine learning',
      features: ['Quantum algorithms', 'Quantum ML', 'Optimization problems', 'Cryptography'],
      icon: Zap
    },
    {
      id: 'ai-ops',
      title: 'AI Operations Center',
      description: 'Intelligent IT operations with automated monitoring and incident response',
      features: ['Automated monitoring', 'Incident response', 'Predictive maintenance', 'Self-healing systems'],
      icon: Shield
    },
    {
      id: 'data-visualization',
      title: 'Advanced Data Visualization',
      description: 'Transform complex data into actionable insights with interactive visualizations',
      features: ['Interactive charts', '3D visualizations', 'Real-time updates', 'Custom dashboards'],
      icon: BarChart
    }
  ];

  const testimonials = [
    {
      name: 'Sarah Johnson',
      company: 'TechCorp Inc.',
      role: 'CTO',
      content: 'The AI dashboard demo was incredible. It gave us a clear vision of what\'s possible with our data.',
      rating: 5
    },
    {
      name: 'Michael Chen',
      company: 'DataFlow Systems',
      role: 'Data Director',
      content: 'The quantum computing platform opened our eyes to new possibilities we never considered.',
      rating: 5
    },
    {
      name: 'Emily Rodriguez',
      company: 'CloudFirst Solutions',
      role: 'Operations Manager',
      content: 'The AI Ops demo showed us exactly how to automate our IT operations. Game-changing!',
      rating: 5
    }
  ];

  const selectedDemoData = demos.find(demo => demo.id === selectedDemo);

  return (
    <div className="min-h-screen bg-gray-900 text-white">
      <Helmet>
        <title>Live Demos - Zion Tech Group</title>
        <meta name="description" content="Experience our AI and technology solutions through interactive live demos. See the future of business technology." />
        <meta name="keywords" content="AI demos, technology demos, live demonstrations, AI dashboard, quantum computing" />
      </Helmet>
      
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative py-20 lg:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-900/20 to-purple-900/20"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl lg:text-6xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              Live Demos
            </h1>
            <p className="text-xl lg:text-2xl text-gray-300 mb-8">
              Experience the power of AI and technology firsthand
            </p>
            <p className="text-lg text-gray-400 max-w-3xl mx-auto">
              Explore our cutting-edge solutions through interactive demonstrations. 
              See how our AI and technology can transform your business operations.
            </p>
          </div>
        </div>
      </section>

      {/* Demo Selection Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold mb-6">Choose Your Demo</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Select from our range of interactive demonstrations to see our technology in action.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {demos.map((demo) => (
              <button
                key={demo.id}
                onClick={() => setSelectedDemo(demo.id)}
                className={`p-6 rounded-lg text-left transition-all duration-300 ${
                  selectedDemo === demo.id
                    ? 'bg-blue-600 border-2 border-blue-400'
                    : 'bg-gray-800 border-2 border-gray-700 hover:border-gray-600'
                }`}
              >
                <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-500 rounded-lg flex items-center justify-center mb-4">
                  <demo.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-lg font-semibold mb-2">{demo.title}</h3>
                <p className="text-gray-300 text-sm">{demo.description}</p>
              </button>
            ))}
          </div>

          {/* Selected Demo Details */}
          {selectedDemoData && (
            <div className="bg-gray-800 rounded-lg p-8">
              <div className="grid lg:grid-cols-2 gap-8 items-center">
                <div>
                  <h3 className="text-2xl font-bold mb-4">{selectedDemoData.title}</h3>
                  <p className="text-gray-300 mb-6">{selectedDemoData.description}</p>
                  <ul className="space-y-3 mb-8">
                    {selectedDemoData.features.map((feature, index) => (
                      <li key={index} className="flex items-center">
                        <CheckCircle className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" />
                        <span className="text-gray-300">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <div className="flex flex-col sm:flex-row gap-4">
                    <button className="inline-flex items-center px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg transition-colors">
                      <Play className="w-5 h-5 mr-2" />
                      Start Demo
                    </button>
                    <button className="inline-flex items-center px-6 py-3 border border-white text-white hover:bg-white hover:text-gray-900 font-semibold rounded-lg transition-colors">
                      <ArrowRight className="w-5 h-5 mr-2" />
                      Learn More
                    </button>
                  </div>
                </div>
                <div className="bg-gradient-to-br from-blue-900 to-purple-900 rounded-lg p-8 text-center">
                  <div className="w-32 h-32 bg-white/10 rounded-full flex items-center justify-center mx-auto mb-6">
                    <Play className="w-16 h-16 text-white" />
                  </div>
                  <h4 className="text-xl font-semibold mb-4">Interactive Demo</h4>
                  <p className="text-gray-300 mb-6">
                    Experience our technology in a real-world scenario with hands-on interaction.
                  </p>
                  <div className="space-y-2 text-sm text-gray-400">
                    <div>Duration: 15-30 minutes</div>
                    <div>Format: Interactive session</div>
                    <div>Includes: Q&A with experts</div>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-gray-800">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold mb-6">What Our Clients Say</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              See what industry leaders have to say about our technology demonstrations.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-gray-900 rounded-lg p-6">
                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-300 mb-4 italic">"{testimonial.content}"</p>
                <div>
                  <div className="font-semibold text-white">{testimonial.name}</div>
                  <div className="text-gray-400 text-sm">{testimonial.role}, {testimonial.company}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center bg-gradient-to-r from-blue-900 to-purple-900 rounded-2xl p-12">
            <h2 className="text-3xl lg:text-4xl font-bold mb-6">
              Ready to See More?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Schedule a personalized demo with our experts to explore solutions tailored to your business needs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/consultation"
                className="inline-flex items-center px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg transition-colors"
              >
                Schedule Demo
                <ArrowRight className="ml-2 w-5 h-5" />
              </a>
              <a
                href="/contact"
                className="inline-flex items-center px-8 py-4 border border-white text-white hover:bg-white hover:text-gray-900 font-semibold rounded-lg transition-colors"
              >
                Contact Us
                <Phone className="ml-2 w-5 h-5" />
              </a>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default DemoPage;
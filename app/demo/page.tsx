'use client';
import React, { useState } from 'react';
import { Play, Calendar, Phone, Mail, CheckCircle, ArrowRight, Star, Users, Clock } from 'lucide-react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import SEOOptimizer from '../components/SEOOptimizer';

const DemoPage: React.FC = () => {
  const [selectedDemo, setSelectedDemo] = useState('ai-services');

  const demos = [
    {
      id: 'ai-services',
      title: 'AI Services Demo',
      description: 'Experience our AI-powered analytics, automation, and customer support solutions',
      duration: '30 minutes',
      features: [
        'AI Analytics Dashboard',
        'Workflow Automation',
        'Customer Support AI',
        'Data Visualization'
      ],
      icon: '🤖'
    },
    {
      id: 'cloud-solutions',
      title: 'Cloud Solutions Demo',
      description: 'See how our cloud infrastructure can scale your business operations',
      duration: '45 minutes',
      features: [
        'Cloud Migration',
        'Auto-scaling',
        'Security Features',
        'Cost Optimization'
      ],
      icon: '☁️'
    },
    {
      id: 'cybersecurity',
      title: 'Cybersecurity Demo',
      description: 'Learn about our advanced security solutions and threat protection',
      duration: '40 minutes',
      features: [
        'Threat Detection',
        'Security Monitoring',
        'Compliance Tools',
        'Incident Response'
      ],
      icon: '🛡️'
    },
    {
      id: 'custom',
      title: 'Custom Demo',
      description: 'Get a personalized demo tailored to your specific business needs and requirements',
      duration: '60 minutes',
      features: [
        'Custom AI Models',
        'Integration Solutions',
        'Enterprise Features',
        'Dedicated Support'
      ],
      icon: '🎯'
    }
  ];

  const benefits = [
    {
      icon: CheckCircle,
      title: 'See Real Results',
      description: 'Watch our solutions work with your actual data and use cases'
    },
    {
      icon: Users,
      title: 'Expert Guidance',
      description: 'Get personalized recommendations from our technical experts'
    },
    {
      icon: Clock,
      title: 'No Commitment',
      description: 'Free demo with no obligation to purchase our services'
    }
  ];

  const testimonials = [
    {
      name: 'Sarah Johnson',
      company: 'TechCorp Inc.',
      role: 'CTO',
      quote: 'The demo showed us exactly how AI could transform our operations. We saw a 40% efficiency improvement in just 30 minutes.',
      rating: 5
    },
    {
      name: 'Michael Chen',
      company: 'DataFlow Systems',
      role: 'CEO',
      quote: 'The custom demo was incredibly detailed and helped us understand the full potential of their cloud solutions.',
      rating: 5
    },
    {
      name: 'Emily Rodriguez',
      company: 'InnovateLab',
      role: 'Founder',
      quote: 'The cybersecurity demo gave us confidence in their security measures. We felt completely protected.',
      rating: 5
    }
  ];

  const selectedDemoData = demos.find(demo => demo.id === selectedDemo);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <SEOOptimizer
        title="Request a Demo - Zion Tech Group"
        description="See our AI, cloud, and cybersecurity solutions in action. Schedule a personalized demo tailored to your business needs."
        keywords={["demo","request demo","AI demo","cloud demo","cybersecurity demo","product demo"]}
        canonicalUrl="https://ziontechgroup.com/demo"
      />

      <Navigation />

      <main className="container mx-auto px-4 py-16 pt-24">
        {/* Hero Section */}
        <section className="text-center mb-16">
          <div className="max-w-4xl mx-auto">
            <div className="w-20 h-20 bg-gradient-to-br from-cyan-400 to-purple-600 rounded-2xl flex items-center justify-center mx-auto mb-6">
              <Play className="w-10 h-10 text-white" />
            </div>
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
              Request a Demo
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              See our AI, cloud, and cybersecurity solutions in action. Schedule a personalized demo tailored to your business needs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <a
                href="#schedule"
                className="bg-gradient-to-r from-cyan-500 to-purple-500 text-white px-8 py-4 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-600 transition-all duration-300"
              >
                Schedule Demo
              </a>
              <a
                href="#demos"
                className="border border-cyan-400 text-cyan-400 px-8 py-4 rounded-lg font-semibold hover:bg-cyan-400 hover:text-white transition-all duration-300"
              >
                View Demo Types
              </a>
            </div>
          </div>
        </section>

        {/* Demo Types */}
        <section id="demos" className="mb-16">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-2xl font-bold text-white mb-8 text-center">Choose Your Demo</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {demos.map((demo) => (
                <div
                  key={demo.id}
                  onClick={() => setSelectedDemo(demo.id)}
                  className={`cursor-pointer bg-white/5 backdrop-blur-sm rounded-xl p-6 border transition-all duration-300 hover:scale-105 ${
                    selectedDemo === demo.id
                      ? 'border-cyan-400/50 ring-2 ring-cyan-400/20'
                      : 'border-white/10 hover:border-white/20'
                  }`}
                >
                  <div className="text-center">
                    <div className="text-4xl mb-4">{demo.icon}</div>
                    <h3 className="text-lg font-semibold text-white mb-2">{demo.title}</h3>
                    <p className="text-gray-300 text-sm mb-4">{demo.description}</p>
                    <div className="text-cyan-400 text-sm font-medium mb-4">{demo.duration}</div>
                    <ul className="space-y-1 text-sm text-gray-400">
                      {demo.features.map((feature, index) => (
                        <li key={index} className="flex items-center gap-2">
                          <CheckCircle className="w-3 h-3 text-green-400 flex-shrink-0" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Selected Demo Details */}
        {selectedDemoData && (
          <section className="mb-16">
            <div className="max-w-4xl mx-auto">
              <div className="bg-white/5 backdrop-blur-sm rounded-xl p-8 border border-white/10">
                <div className="text-center mb-8">
                  <div className="text-6xl mb-4">{selectedDemoData.icon}</div>
                  <h2 className="text-2xl font-bold text-white mb-4">{selectedDemoData.title}</h2>
                  <p className="text-gray-300 mb-6">{selectedDemoData.description}</p>
                  <div className="text-cyan-400 text-lg font-medium">{selectedDemoData.duration}</div>
                </div>
                
                <div className="grid md:grid-cols-2 gap-8">
                  <div>
                    <h3 className="text-lg font-semibold text-white mb-4">What You'll See</h3>
                    <ul className="space-y-3">
                      {selectedDemoData.features.map((feature, index) => (
                        <li key={index} className="flex items-center gap-3">
                          <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0" />
                          <span className="text-gray-300">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div>
                    <h3 className="text-lg font-semibold text-white mb-4">Demo Benefits</h3>
                    <ul className="space-y-3">
                      <li className="flex items-center gap-3">
                        <Star className="w-5 h-5 text-yellow-400 flex-shrink-0" />
                        <span className="text-gray-300">Real-time demonstrations</span>
                      </li>
                      <li className="flex items-center gap-3">
                        <Users className="w-5 h-5 text-blue-400 flex-shrink-0" />
                        <span className="text-gray-300">Expert Q&A session</span>
                      </li>
                      <li className="flex items-center gap-3">
                        <Clock className="w-5 h-5 text-purple-400 flex-shrink-0" />
                        <span className="text-gray-300">Customized to your needs</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </section>
        )}

        {/* Benefits Section */}
        <section className="mb-16">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-2xl font-bold text-white mb-8 text-center">Why Choose Our Demo?</h2>
            <div className="grid md:grid-cols-3 gap-6">
              {benefits.map((benefit, index) => (
                <div key={index} className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10 text-center">
                  <div className="w-12 h-12 bg-gradient-to-br from-cyan-400 to-purple-600 rounded-lg flex items-center justify-center mx-auto mb-4">
                    <benefit.icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-lg font-semibold text-white mb-3">{benefit.title}</h3>
                  <p className="text-gray-300 text-sm">{benefit.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Testimonials */}
        <section className="mb-16">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-2xl font-bold text-white mb-8 text-center">What Our Clients Say</h2>
            <div className="grid md:grid-cols-3 gap-6">
              {testimonials.map((testimonial, index) => (
                <div key={index} className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10">
                  <div className="flex items-center mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  <p className="text-gray-300 mb-4 italic">"{testimonial.quote}"</p>
                  <div>
                    <div className="font-semibold text-white">{testimonial.name}</div>
                    <div className="text-sm text-gray-400">{testimonial.role}, {testimonial.company}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Schedule Demo Form */}
        <section id="schedule" className="text-center">
          <div className="max-w-2xl mx-auto">
            <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
              <h2 className="text-2xl font-bold text-white mb-4">
                Schedule Your Demo
              </h2>
              <p className="text-gray-300 mb-8">
                Ready to see our solutions in action? Schedule a personalized demo with our experts.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <a
                  href="mailto:demo@ziontechgroup.com"
                  className="bg-gradient-to-r from-cyan-500 to-purple-500 text-white px-8 py-4 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-600 transition-all duration-300 flex items-center gap-2"
                >
                  <Mail className="w-5 h-5" />
                  Email Us
                </a>
                <a
                  href="tel:+1-302-464-0950"
                  className="border border-cyan-400 text-cyan-400 px-8 py-4 rounded-lg font-semibold hover:bg-cyan-400 hover:text-white transition-all duration-300 flex items-center gap-2"
                >
                  <Phone className="w-5 h-5" />
                  Call Us
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default DemoPage;
'use client';
import React, { useState } from 'react';
import { Play, Calendar, Phone, Mail, CheckCircle, ArrowRight, Star, Users, Clock } from 'lucide-react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

const DemoPage: React.FC = () => {
  const [selectedDemo, setSelectedDemo] = useState('ai-services');

  const demos = [
    {
      id: 'ai-services',
      title: 'AI Services Demo',
      description: 'Experience our AI solutions including machine learning, natural language processing, and computer vision',
      duration: '30 minutes',
      features: [
        'Machine Learning Models',
        'Natural Language Processing',
        'Computer Vision',
        'Predictive Analytics'
      ],
      icon: '🤖'
    },
    {
      id: 'micro-saas',
      title: 'Micro SAAS Demo',
      description: 'Explore our micro SAAS tools for project management, content creation, and business automation',
      duration: '25 minutes',
      features: [
        'Project Management',
        'Content Creation',
        'Email Marketing',
        'Financial Analytics'
      ],
      icon: '💻'
    },
    {
      id: 'custom',
      title: 'Custom Demo',
      description: 'Get a personalized demo tailored to your specific business needs and requirements',
      duration: '60 minutes',
      features: [
        'Customized Solution',
        'Industry-Specific Features',
        'Integration Examples',
        'ROI Analysis'
      ],
      icon: '🎯'
    }
  ];

  const benefits = [
    {
      icon: Play,
      title: 'Live Demonstration',
      description: 'See our solutions in action with real-time demonstrations'
    },
    {
      icon: Users,
      title: 'Expert Guidance',
      description: 'Get insights from our technical experts and solution architects'
    },
    {
      icon: CheckCircle,
      title: 'Q&A Session',
      description: 'Ask questions and get detailed answers about our solutions'
    },
    {
      icon: Star,
      title: 'Customized Experience',
      description: 'Tailored demo based on your specific business needs'
    }
  ];

  const testimonials = [
    {
      name: 'Sarah Johnson',
      company: 'TechCorp Solutions',
      role: 'CTO',
      content: 'The demo was incredibly insightful. We could see exactly how the AI solutions would integrate with our existing systems.',
      rating: 5
    },
    {
      name: 'Michael Chen',
      company: 'InnovateLab',
      role: 'CEO',
      content: 'The custom demo helped us understand the ROI potential. The team was knowledgeable and answered all our questions.',
      rating: 5
    },
    {
      name: 'Emily Rodriguez',
      company: 'Global Dynamics',
      role: 'Operations Director',
      content: 'The micro SAAS demo showed us tools we never knew we needed. The implementation process was clearly explained.',
      rating: 5
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Navigation />

      <main className="container mx-auto px-4 py-16 pt-24">
        {/* Hero Section */}
        <section className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 neon-text">
            Book a Demo
          </h1>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            See our AI and IT solutions in action. Schedule a personalized demo to discover how we can transform your business.
          </p>
        </section>

        {/* Demo Options */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-white mb-8 text-center">
            Choose Your Demo
          </h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            {demos.map((demo) => (
              <div
                key={demo.id}
                className={`bg-white/10 backdrop-blur-sm rounded-2xl p-8 border-2 transition-all duration-300 cursor-pointer ${
                  selectedDemo === demo.id
                    ? 'border-cyan-400 shadow-2xl shadow-cyan-400/20'
                    : 'border-white/20 hover:border-cyan-400/50'
                }`}
                onClick={() => setSelectedDemo(demo.id)}
              >
                <div className="text-6xl mb-4 text-center">{demo.icon}</div>
                <h3 className="text-2xl font-bold text-white mb-4 text-center">
                  {demo.title}
                </h3>
                <p className="text-gray-300 mb-6 text-center">
                  {demo.description}
                </p>
                <div className="mb-6">
                  <div className="flex items-center justify-center mb-4">
                    <Clock className="w-5 h-5 text-cyan-400 mr-2" />
                    <span className="text-cyan-400 font-semibold">{demo.duration}</span>
                  </div>
                  <ul className="space-y-2">
                    {demo.features.map((feature, index) => (
                      <li key={index} className="flex items-center text-gray-300">
                        <CheckCircle className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
                        <span className="text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <button className="w-full bg-gradient-to-r from-cyan-600 to-purple-600 text-white py-3 px-6 rounded-lg font-semibold hover:from-cyan-700 hover:to-purple-700 transition-all duration-300 transform hover:scale-105">
                  Select This Demo
                </button>
              </div>
            ))}
          </div>
        </section>

        {/* Benefits Section */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-white mb-8 text-center">
            Why Book a Demo?
          </h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="text-center">
                <div className="bg-cyan-500/20 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <benefit.icon className="w-8 h-8 text-cyan-400" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">
                  {benefit.title}
                </h3>
                <p className="text-gray-300">
                  {benefit.description}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Testimonials */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-white mb-8 text-center">
            What Our Clients Say
          </h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-300 mb-4 italic">
                  "{testimonial.content}"
                </p>
                <div className="border-t border-white/20 pt-4">
                  <div className="font-semibold text-white">{testimonial.name}</div>
                  <div className="text-sm text-gray-400">{testimonial.role}</div>
                  <div className="text-sm text-cyan-400">{testimonial.company}</div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Booking Form */}
        <section className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
          <h2 className="text-3xl font-bold text-white mb-8 text-center">
            Schedule Your Demo
          </h2>
          
          <div className="max-w-2xl mx-auto">
            <form className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-white font-medium mb-2">Full Name *</label>
                  <input
                    type="text"
                    required
                    className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-400"
                    placeholder="John Doe"
                  />
                </div>
                <div>
                  <label className="block text-white font-medium mb-2">Email Address *</label>
                  <input
                    type="email"
                    required
                    className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-400"
                    placeholder="john@company.com"
                  />
                </div>
              </div>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-white font-medium mb-2">Company</label>
                  <input
                    type="text"
                    className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-400"
                    placeholder="Your Company"
                  />
                </div>
                <div>
                  <label className="block text-white font-medium mb-2">Phone Number</label>
                  <input
                    type="tel"
                    className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-400"
                    placeholder="(555) 123-4567"
                  />
                </div>
              </div>
              
              <div>
                <label className="block text-white font-medium mb-2">Preferred Demo Type</label>
                <select
                  value={selectedDemo}
                  onChange={(e) => setSelectedDemo(e.target.value)}
                  className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-cyan-400"
                >
                  {demos.map((demo) => (
                    <option key={demo.id} value={demo.id} className="bg-slate-800">
                      {demo.title}
                    </option>
                  ))}
                </select>
              </div>
              
              <div>
                <label className="block text-white font-medium mb-2">Message (Optional)</label>
                <textarea
                  rows={4}
                  className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-400"
                  placeholder="Tell us about your specific needs or questions..."
                />
              </div>
              
              <div className="text-center">
                <button
                  type="submit"
                  className="bg-gradient-to-r from-cyan-600 to-purple-600 text-white py-4 px-8 rounded-lg font-semibold text-lg hover:from-cyan-700 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 inline-flex items-center"
                >
                  <Calendar className="w-5 h-5 mr-2" />
                  Schedule Demo
                </button>
              </div>
            </form>
          </div>
        </section>

        {/* Contact CTA */}
        <section className="text-center mt-16">
          <h2 className="text-3xl font-bold text-white mb-4">
            Need Immediate Assistance?
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Call us directly or send us an email
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:+13024640950"
              className="bg-cyan-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-cyan-700 transition-all duration-300 transform hover:scale-105 inline-flex items-center justify-center"
            >
              <Phone className="w-5 h-5 mr-2" />
              Call (302) 464-0950
            </a>
            <a
              href="mailto:demo@ziontechgroup.com"
              className="border-2 border-cyan-400 text-cyan-400 px-8 py-4 rounded-lg font-semibold hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300 transform hover:scale-105 inline-flex items-center justify-center"
            >
              <Mail className="w-5 h-5 mr-2" />
              Email Us
            </a>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default DemoPage;
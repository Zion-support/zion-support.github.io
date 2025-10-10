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
      description: 'Experience our AI-powered solutions including machine learning, natural language processing, and computer vision',
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
      title: 'Micro SAAS Platform',
      description: 'Explore our comprehensive micro SAAS tools and applications for business automation and productivity',
      duration: '45 minutes',
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
      description: 'Tailored demo based on your specific business requirements'
    }
  ];

  const selectedDemoData = demos.find(demo => demo.id === selectedDemo);

  return (
    <>
      <SEOOptimizer 
        title="Request a Demo - See Our Solutions in Action | Zion Tech Group"
        description="Schedule a personalized demo of our AI and IT solutions. See how we can transform your business with live demonstrations."
        keywords="demo, demonstration, AI solutions, IT solutions, live demo, schedule demo"
        canonicalUrl="https://ziontechgroup.com/demo"
      />
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        <Navigation />
        
        {/* Hero Section */}
        <section className="relative py-20 lg:py-32 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/20 to-purple-600/20"></div>
          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-4xl lg:text-6xl font-bold text-white mb-6 cyber-text neon-pulse">
                Request a Demo
              </h1>
              <p className="text-xl lg:text-2xl text-gray-300 mb-8 leading-relaxed">
                See our AI and IT solutions in action. Schedule a personalized demonstration 
                tailored to your business needs.
              </p>
            </div>
          </div>
        </section>

        {/* Demo Options */}
        <section className="py-20 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-white mb-4">Choose Your Demo</h2>
              <p className="text-gray-300">Select the type of demonstration that best fits your needs</p>
            </div>
            <div className="grid md:grid-cols-3 gap-8">
              {demos.map((demo) => (
                <div key={demo.id} className="group">
                  <div 
                    className={`bg-gradient-to-br from-slate-800/50 to-slate-900/50 rounded-xl p-6 h-full border transition-all duration-300 cursor-pointer ${
                      selectedDemo === demo.id 
                        ? 'border-purple-500/50 bg-purple-500/10' 
                        : 'border-slate-700/50 group-hover:border-purple-500/50'
                    }`}
                    onClick={() => setSelectedDemo(demo.id)}
                  >
                    <div className="text-center mb-4">
                      <div className="text-4xl mb-4">{demo.icon}</div>
                      <h3 className="text-xl font-bold text-white mb-2">{demo.title}</h3>
                      <p className="text-gray-400 text-sm mb-4">{demo.description}</p>
                      <div className="flex items-center justify-center space-x-2 text-sm text-gray-400">
                        <Clock className="w-4 h-4" />
                        <span>{demo.duration}</span>
                      </div>
                    </div>
                    <div className="space-y-2">
                      {demo.features.map((feature, index) => (
                        <div key={index} className="flex items-center text-sm text-gray-300">
                          <CheckCircle className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
                          {feature}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Selected Demo Details */}
        {selectedDemoData && (
          <section className="py-20 px-4">
            <div className="max-w-4xl mx-auto">
              <div className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 rounded-2xl p-8 border border-slate-700/50">
                <div className="text-center mb-8">
                  <div className="text-6xl mb-4">{selectedDemoData.icon}</div>
                  <h2 className="text-3xl font-bold text-white mb-4">{selectedDemoData.title}</h2>
                  <p className="text-gray-300 text-lg mb-6">{selectedDemoData.description}</p>
                  <div className="flex items-center justify-center space-x-4 text-gray-400">
                    <div className="flex items-center space-x-2">
                      <Clock className="w-5 h-5" />
                      <span>Duration: {selectedDemoData.duration}</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Users className="w-5 h-5" />
                      <span>Live with Expert</span>
                    </div>
                  </div>
                </div>
                
                <div className="grid md:grid-cols-2 gap-8">
                  <div>
                    <h3 className="text-xl font-bold text-white mb-4">What You'll See</h3>
                    <ul className="space-y-3">
                      {selectedDemoData.features.map((feature, index) => (
                        <li key={index} className="flex items-center text-gray-300">
                          <CheckCircle className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white mb-4">Benefits</h3>
                    <ul className="space-y-3">
                      {benefits.map((benefit, index) => (
                        <li key={index} className="flex items-start text-gray-300">
                          <benefit.icon className="w-5 h-5 text-purple-400 mr-3 flex-shrink-0 mt-0.5" />
                          <div>
                            <div className="font-medium text-white">{benefit.title}</div>
                            <div className="text-sm text-gray-400">{benefit.description}</div>
                          </div>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </section>
        )}

        {/* Schedule Demo Form */}
        <section className="py-20 px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-white mb-4">Schedule Your Demo</h2>
              <p className="text-gray-300">Fill out the form below and we'll contact you to schedule your personalized demonstration</p>
            </div>
            
            <div className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 rounded-2xl p-8 border border-slate-700/50">
              <form className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">First Name *</label>
                    <input
                      type="text"
                      required
                      className="w-full px-4 py-3 bg-slate-700/50 border border-slate-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                      placeholder="Your first name"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">Last Name *</label>
                    <input
                      type="text"
                      required
                      className="w-full px-4 py-3 bg-slate-700/50 border border-slate-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                      placeholder="Your last name"
                    />
                  </div>
                </div>
                
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">Email Address *</label>
                    <input
                      type="email"
                      required
                      className="w-full px-4 py-3 bg-slate-700/50 border border-slate-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                      placeholder="your.email@company.com"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">Phone Number</label>
                    <input
                      type="tel"
                      className="w-full px-4 py-3 bg-slate-700/50 border border-slate-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                      placeholder="+1 (555) 123-4567"
                    />
                  </div>
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">Company</label>
                  <input
                    type="text"
                    className="w-full px-4 py-3 bg-slate-700/50 border border-slate-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                    placeholder="Your company name"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">Preferred Demo Type</label>
                  <select
                    value={selectedDemo}
                    onChange={(e) => setSelectedDemo(e.target.value)}
                    className="w-full px-4 py-3 bg-slate-700/50 border border-slate-600 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                  >
                    {demos.map((demo) => (
                      <option key={demo.id} value={demo.id}>{demo.title}</option>
                    ))}
                  </select>
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">Message (Optional)</label>
                  <textarea
                    rows={4}
                    className="w-full px-4 py-3 bg-slate-700/50 border border-slate-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                    placeholder="Tell us about your specific needs or questions..."
                  />
                </div>
                
                <button
                  type="submit"
                  className="w-full bg-gradient-to-r from-purple-500 to-blue-600 hover:from-purple-600 hover:to-blue-700 text-white font-bold py-4 px-8 rounded-lg transition-all duration-300 transform hover:scale-105"
                >
                  Schedule Demo
                  <Calendar className="inline-block ml-2 w-5 h-5" />
                </button>
              </form>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold text-white mb-6">
              Ready to Get Started?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Don't wait to transform your business. Schedule your demo today and see the future of AI and IT solutions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gradient-to-r from-purple-500 to-blue-600 hover:from-purple-600 hover:to-blue-700 text-white font-bold py-4 px-8 rounded-lg transition-all duration-300 transform hover:scale-105">
                Schedule Now
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
    </>
  );
};

export default DemoPage;
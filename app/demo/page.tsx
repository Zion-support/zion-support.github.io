'use client';
import React from 'react';
import { Play, Settings, Target, CheckCircle, ArrowRight, Phone, Mail, MapPin } from 'lucide-react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import SEOEnhancer from '../components/SEOEnhancer';

const DemoPage: React.FC = () => {
  return (
    <>
      <SEOEnhancer
        title="Demo - See Our Solutions in Action | Zion Tech Group"
        description="Experience our AI and IT solutions through interactive demos. See how our technology can transform your business with live demonstrations."
        keywords={['demo', 'demonstration', 'ai demo', 'it demo', 'solution demo', 'technology demo']}
        canonicalUrl="https://ziontechgroup.com/demo"
      />
      
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        <Navigation />
        
        <main className="container mx-auto px-4 py-16 pt-24">
          {/* Hero Section */}
          <section className="text-center mb-16">
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 neon-text">
              See Our Solutions in Action
            </h1>
            <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
              Experience our AI and IT solutions through interactive demos. See how our technology 
              can transform your business with live demonstrations.
            </p>
          </section>

          {/* Demo Categories */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold text-white mb-8 text-center neon-text">Demo Categories</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="cyber-card p-6 text-center hover:scale-105 transition-all duration-300">
                <div className="w-16 h-16 bg-gradient-to-r from-purple-400 to-pink-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Play className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">AI Solutions</h3>
                <p className="text-gray-300">Experience our AI-powered solutions in action</p>
              </div>
              
              <div className="cyber-card p-6 text-center hover:scale-105 transition-all duration-300">
                <div className="w-16 h-16 bg-gradient-to-r from-blue-400 to-cyan-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Settings className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">IT Services</h3>
                <p className="text-gray-300">See our IT infrastructure solutions in action</p>
              </div>
              
              <div className="cyber-card p-6 text-center hover:scale-105 transition-all duration-300">
                <div className="w-16 h-16 bg-gradient-to-r from-green-400 to-teal-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Target className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">Micro SAAS</h3>
                <p className="text-gray-300">Try our micro SAAS solutions for yourself</p>
              </div>
            </div>
          </section>

          {/* Demo Features */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold text-white mb-8 text-center neon-text">What You'll See</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="cyber-card p-6">
                <h3 className="text-xl font-bold text-white mb-4">Live Demonstrations</h3>
                <p className="text-gray-300 mb-4">
                  Watch our solutions work in real-time with live data and scenarios.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-center text-gray-300">
                    <CheckCircle className="w-4 h-4 text-green-400 mr-2" />
                    Real-time AI processing
                  </li>
                  <li className="flex items-center text-gray-300">
                    <CheckCircle className="w-4 h-4 text-green-400 mr-2" />
                    Interactive dashboards
                  </li>
                  <li className="flex items-center text-gray-300">
                    <CheckCircle className="w-4 h-4 text-green-400 mr-2" />
                    Live data visualization
                  </li>
                </ul>
              </div>
              
              <div className="cyber-card p-6">
                <h3 className="text-xl font-bold text-white mb-4">Hands-On Experience</h3>
                <p className="text-gray-300 mb-4">
                  Try our solutions yourself with guided hands-on demonstrations.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-center text-gray-300">
                    <CheckCircle className="w-4 h-4 text-green-400 mr-2" />
                    Guided tutorials
                  </li>
                  <li className="flex items-center text-gray-300">
                    <CheckCircle className="w-4 h-4 text-green-400 mr-2" />
                    Interactive features
                  </li>
                  <li className="flex items-center text-gray-300">
                    <CheckCircle className="w-4 h-4 text-green-400 mr-2" />
                    Custom scenarios
                  </li>
                </ul>
              </div>
            </div>
          </section>

          {/* Demo Request */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold text-white mb-8 text-center neon-text">Request a Demo</h2>
            <div className="cyber-card p-8 max-w-2xl mx-auto text-center">
              <p className="text-gray-300 mb-6">
                Ready to see our solutions in action? Request a personalized demo tailored to your business needs.
              </p>
              <div className="space-y-4">
                <input
                  type="text"
                  placeholder="Your Name"
                  className="w-full px-4 py-3 bg-slate-800 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-cyan-400"
                />
                <input
                  type="email"
                  placeholder="Your Email"
                  className="w-full px-4 py-3 bg-slate-800 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-cyan-400"
                />
                <select className="w-full px-4 py-3 bg-slate-800 border border-gray-600 rounded-lg text-white focus:outline-none focus:border-cyan-400">
                  <option value="">Select Demo Type</option>
                  <option value="ai-solutions">AI Solutions</option>
                  <option value="it-services">IT Services</option>
                  <option value="micro-saas">Micro SAAS</option>
                  <option value="custom">Custom Demo</option>
                </select>
                <textarea
                  placeholder="Tell us about your specific needs"
                  rows={4}
                  className="w-full px-4 py-3 bg-slate-800 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-cyan-400"
                ></textarea>
                <button className="w-full cyber-button py-3 font-semibold hover:scale-105 transition-all duration-300">
                  Request Demo
                </button>
              </div>
            </div>
          </section>

          {/* Contact CTA */}
          <section className="text-center">
            <div className="cyber-card p-8 max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold text-white mb-4 neon-text">Ready to See More?</h2>
              <p className="text-gray-300 mb-8 text-lg">
                Contact us to schedule a personalized demo or learn more about our solutions.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="/contact"
                  className="cyber-button px-8 py-4 text-lg font-semibold hover:scale-105 transition-all duration-300"
                >
                  Contact Us
                </a>
                <a
                  href="tel:+13024640950"
                  className="flex items-center justify-center gap-2 border-2 border-cyan-400 text-cyan-400 px-8 py-4 rounded-lg font-semibold hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300"
                >
                  <Phone className="w-5 h-5" />
                  +1 302 464 0950
                </a>
              </div>
            </div>
          </section>
        </main>

        <Footer />
      </div>
    </>
  );
};

export default DemoPage;
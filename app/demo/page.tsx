import React from 'react'
import { Helmet } from 'react-helmet-async'
import { Link } from 'react-router-dom'
import { ArrowRight, Play, Calendar, Users, CheckCircle, Phone, Mail } from 'lucide-react'

export default function DemoPage() {
  return (
    <>
      <Helmet>
        <title>Request Demo - See Our Solutions in Action | Zion Tech Group</title>
        <meta name="description" content="Request a personalized demo of our AI and IT solutions. See how our technology can transform your business operations." />
        <meta name="keywords" content="demo, AI demo, IT demo, business solutions, Zion Tech Group" />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          {/* Hero Section */}
          <div className="text-center mb-16">
            <h1 className="text-4xl sm:text-6xl font-bold text-white mb-6">
              See Our <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">Solutions in Action</span>
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Experience the power of our AI and IT solutions with a personalized demo. 
              See how our technology can transform your business operations.
            </p>
          </div>

          {/* Demo Benefits */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Play className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-white mb-2">Live Demo</h3>
              <p className="text-gray-300">See our solutions working in real-time</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-emerald-600 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Users className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-white mb-2">Personalized</h3>
              <p className="text-gray-300">Tailored to your specific business needs</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-orange-500 to-red-600 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <CheckCircle className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-white mb-2">No Commitment</h3>
              <p className="text-gray-300">Free demo with no obligation to purchase</p>
            </div>
          </div>

          {/* Demo Request Form */}
          <div className="bg-white/10 backdrop-blur-lg rounded-3xl p-12 mb-16">
            <div className="max-w-2xl mx-auto">
              <h2 className="text-3xl font-bold text-white mb-6 text-center">Request Your Demo</h2>
              <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-white font-semibold mb-2">First Name</label>
                    <input 
                      type="text" 
                      className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500"
                      placeholder="Enter your first name"
                    />
                  </div>
                  <div>
                    <label className="block text-white font-semibold mb-2">Last Name</label>
                    <input 
                      type="text" 
                      className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500"
                      placeholder="Enter your last name"
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-white font-semibold mb-2">Email</label>
                  <input 
                    type="email" 
                    className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500"
                    placeholder="Enter your email address"
                  />
                </div>
                <div>
                  <label className="block text-white font-semibold mb-2">Company</label>
                  <input 
                    type="text" 
                    className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500"
                    placeholder="Enter your company name"
                  />
                </div>
                <div>
                  <label className="block text-white font-semibold mb-2">Interested Solutions</label>
                  <select className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-cyan-500">
                    <option value="">Select solutions you're interested in</option>
                    <option value="ai-services">AI Services</option>
                    <option value="it-services">IT Services</option>
                    <option value="micro-saas">Micro SAAS Solutions</option>
                    <option value="cloud-migration">Cloud Migration</option>
                    <option value="cybersecurity">Cybersecurity</option>
                    <option value="custom-development">Custom Development</option>
                  </select>
                </div>
                <div>
                  <label className="block text-white font-semibold mb-2">Message</label>
                  <textarea 
                    rows={4}
                    className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500"
                    placeholder="Tell us about your specific needs and requirements"
                  ></textarea>
                </div>
                <button 
                  type="submit"
                  className="w-full bg-gradient-to-r from-cyan-500 to-purple-600 text-white py-4 rounded-xl font-bold text-lg hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 flex items-center justify-center"
                >
                  Request Demo
                  <ArrowRight className="w-5 h-5 ml-2" />
                </button>
              </form>
            </div>
          </div>

          {/* Contact Information */}
          <div className="text-center">
            <h2 className="text-3xl font-bold text-white mb-4">
              Prefer to Talk Directly?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Call or email us to schedule your demo appointment.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="tel:+13024640950"
                className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-4 rounded-xl font-bold text-lg hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 flex items-center justify-center"
              >
                <Phone className="w-5 h-5 mr-2" />
                Call (302) 464-0950
              </a>
              <a 
                href="mailto:kleber@ziontechgroup.com"
                className="border-2 border-cyan-400 text-cyan-400 px-8 py-4 rounded-xl font-bold text-lg hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300 flex items-center justify-center"
              >
                <Mail className="w-5 h-5 mr-2" />
                Email Us
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
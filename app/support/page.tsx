import React from 'react'
import { Helmet } from 'react-helmet-async'
import { Link } from 'react-router-dom'
import { ArrowRight, Phone, Mail, MessageCircle, Clock, CheckCircle } from 'lucide-react'

export default function SupportPage() {
  return (
    <>
      <Helmet>
        <title>Support - 24/7 Technical Support | Zion Tech Group</title>
        <meta name="description" content="Get 24/7 technical support for all your AI and IT solutions. Our expert team is here to help you succeed." />
        <meta name="keywords" content="support, technical support, help desk, customer service, Zion Tech Group" />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          {/* Hero Section */}
          <div className="text-center mb-16">
            <h1 className="text-4xl sm:text-6xl font-bold text-white mb-6">
              24/7 <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">Technical Support</span>
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Our expert support team is available around the clock to help you with any technical issues 
              or questions about our AI and IT solutions.
            </p>
          </div>

          {/* Support Options */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <Phone className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">Phone Support</h3>
              <p className="text-gray-300 mb-6">Call us directly for immediate assistance</p>
              <a 
                href="tel:+13024640950"
                className="inline-block bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-6 py-3 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300"
              >
                Call Now
              </a>
            </div>

            <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-emerald-600 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <Mail className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">Email Support</h3>
              <p className="text-gray-300 mb-6">Send us detailed information about your issue</p>
              <a 
                href="mailto:kleber@ziontechgroup.com"
                className="inline-block bg-gradient-to-r from-green-500 to-emerald-600 text-white px-6 py-3 rounded-lg font-semibold hover:from-green-600 hover:to-emerald-700 transition-all duration-300"
              >
                Email Us
              </a>
            </div>

            <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-orange-500 to-red-600 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <MessageCircle className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">Live Chat</h3>
              <p className="text-gray-300 mb-6">Chat with our support team in real-time</p>
              <button className="inline-block bg-gradient-to-r from-orange-500 to-red-600 text-white px-6 py-3 rounded-lg font-semibold hover:from-orange-600 hover:to-red-700 transition-all duration-300">
                Start Chat
              </button>
            </div>
          </div>

          {/* Support Hours */}
          <div className="bg-white/10 backdrop-blur-lg rounded-3xl p-12 mb-16">
            <div className="text-center">
              <h2 className="text-3xl font-bold text-white mb-8">Support Hours</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-xl font-bold text-cyan-400 mb-4">Regular Support</h3>
                  <div className="space-y-2 text-gray-300">
                    <p>Monday - Friday: 9:00 AM - 6:00 PM EST</p>
                    <p>Saturday: 10:00 AM - 4:00 PM EST</p>
                    <p>Sunday: Closed</p>
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-green-400 mb-4">Emergency Support</h3>
                  <div className="space-y-2 text-gray-300">
                    <p>24/7 for critical issues</p>
                      <p>Response time: &lt; 1 hour</p>
                    <p>Available via phone only</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* FAQ Section */}
          <div className="text-center">
            <h2 className="text-3xl font-bold text-white mb-8">Frequently Asked Questions</h2>
            <div className="max-w-4xl mx-auto space-y-4">
              <div className="bg-white/10 backdrop-blur-lg rounded-xl p-6 text-left">
                <h3 className="text-lg font-bold text-white mb-2">How quickly can I get support?</h3>
                <p className="text-gray-300">We respond to all support requests within 1 hour during business hours and within 4 hours for non-critical issues outside business hours.</p>
              </div>
              <div className="bg-white/10 backdrop-blur-lg rounded-xl p-6 text-left">
                <h3 className="text-lg font-bold text-white mb-2">What information should I provide when contacting support?</h3>
                <p className="text-gray-300">Please provide your account details, a detailed description of the issue, any error messages, and steps you've already tried to resolve the problem.</p>
              </div>
              <div className="bg-white/10 backdrop-blur-lg rounded-xl p-6 text-left">
                <h3 className="text-lg font-bold text-white mb-2">Is support included with all services?</h3>
                <p className="text-gray-300">Yes, all our services include basic support. Premium support with faster response times is available for enterprise customers.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
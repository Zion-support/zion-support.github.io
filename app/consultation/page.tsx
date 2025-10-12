'use client';
import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { ArrowRight, Phone, Mail, MapPin, Clock, CheckCircle } from 'lucide-react';

const ConsultationPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 cyber-grid neural-network-bg matrix-rain">
      <Helmet>
        <title>Free Consultation - Zion Tech Group</title>
        <meta name="description" content="Get a free consultation with our AI and IT experts. Transform your business with our professional guidance and solutions." />
      </Helmet>
      
      <main className="container mx-auto px-4 py-16 pt-24">
        {/* Hero Section */}
        <section className="text-center mb-16">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
            Free Consultation
          </h1>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Get expert advice on AI and IT solutions for your business. Our consultation is completely free with no obligation.
          </p>
        </section>

        {/* Contact Information */}
        <section className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          <div className="bg-white/5 backdrop-blur-lg rounded-2xl p-8 border border-white/10 text-center">
            <Phone className="w-12 h-12 text-cyan-400 mx-auto mb-4" />
            <h3 className="text-xl font-bold text-white mb-2">Call Us</h3>
            <a href="tel:+13024640950" className="text-cyan-400 hover:text-cyan-300 transition-colors text-lg font-medium">
              +1 302 464 0950
            </a>
            <p className="text-gray-400 text-sm mt-2">Available 24/7</p>
          </div>
          
          <div className="bg-white/5 backdrop-blur-lg rounded-2xl p-8 border border-white/10 text-center">
            <Mail className="w-12 h-12 text-purple-400 mx-auto mb-4" />
            <h3 className="text-xl font-bold text-white mb-2">Email Us</h3>
            <a href="mailto:kleber@ziontechgroup.com" className="text-purple-400 hover:text-purple-300 transition-colors text-lg font-medium">
              kleber@ziontechgroup.com
            </a>
            <p className="text-gray-400 text-sm mt-2">Response within 2 hours</p>
          </div>
          
          <div className="bg-white/5 backdrop-blur-lg rounded-2xl p-8 border border-white/10 text-center">
            <MapPin className="w-12 h-12 text-green-400 mx-auto mb-4" />
            <h3 className="text-xl font-bold text-white mb-2">Visit Us</h3>
            <p className="text-green-400 font-medium">364 E Main St STE 1008</p>
            <p className="text-gray-400 text-sm mt-2">Middletown DE 19709</p>
          </div>
        </section>

        {/* What to Expect */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-white text-center mb-12">What to Expect</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white/5 backdrop-blur-lg rounded-xl p-6 border border-white/10 text-center">
              <Clock className="w-8 h-8 text-cyan-400 mx-auto mb-4" />
              <h3 className="text-lg font-semibold text-white mb-2">30-60 Minutes</h3>
              <p className="text-gray-300 text-sm">Comprehensive discussion about your needs</p>
            </div>
            
            <div className="bg-white/5 backdrop-blur-lg rounded-xl p-6 border border-white/10 text-center">
              <CheckCircle className="w-8 h-8 text-green-400 mx-auto mb-4" />
              <h3 className="text-lg font-semibold text-white mb-2">Expert Analysis</h3>
              <p className="text-gray-300 text-sm">Professional assessment of your current setup</p>
            </div>
            
            <div className="bg-white/5 backdrop-blur-lg rounded-xl p-6 border border-white/10 text-center">
              <ArrowRight className="w-8 h-8 text-purple-400 mx-auto mb-4" />
              <h3 className="text-lg font-semibold text-white mb-2">Action Plan</h3>
              <p className="text-gray-300 text-sm">Clear roadmap for your digital transformation</p>
            </div>
            
            <div className="bg-white/5 backdrop-blur-lg rounded-xl p-6 border border-white/10 text-center">
              <CheckCircle className="w-8 h-8 text-yellow-400 mx-auto mb-4" />
              <h3 className="text-lg font-semibold text-white mb-2">No Obligation</h3>
              <p className="text-gray-300 text-sm">Free consultation with no strings attached</p>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="text-center bg-gradient-to-r from-slate-800/50 to-purple-900/50 rounded-3xl p-12 border border-cyan-500/20">
          <h2 className="text-4xl font-bold text-white mb-6">Ready to Get Started?</h2>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Schedule your free consultation today and discover how our AI and IT solutions can transform your business.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="tel:+13024640950" 
              className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-purple-500 text-white rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-600 transition-all duration-300 flex items-center justify-center group shadow-lg shadow-cyan-500/25 hover:shadow-xl hover:shadow-cyan-500/40 transform hover:scale-105"
            >
              <Phone className="w-5 h-5 mr-2" />
              Call Now
              <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
            </a>
            <a 
              href="mailto:kleber@ziontechgroup.com" 
              className="px-8 py-4 border-2 border-cyan-400 text-cyan-400 rounded-lg font-semibold hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300 flex items-center justify-center group"
            >
              <Mail className="w-5 h-5 mr-2" />
              Email Us
            </a>
          </div>
        </section>
      </main>
    </div>
  );
};

export default ConsultationPage;
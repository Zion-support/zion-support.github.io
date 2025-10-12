import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle, Zap, Shield, Cloud, Database, Smartphone, Cpu, BarChart3 } from 'lucide-react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

export default function DigitalTransformationPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Helmet>
        <title>Digital Transformation - Zion Tech Group | Transform Your Business</title>
        <meta name="description" content="Transform your business for the digital age with comprehensive digital transformation services. Process automation, digital workforce, and customer experience." />
        <meta name="keywords" content="digital transformation, business transformation, process automation, digital workforce, customer experience" />
      </Helmet>

      <Navigation />

      <section className="relative py-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
        <div className="relative max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
              Digital <span className="bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">Transformation</span>
            </h1>
            <p className="text-lg sm:text-xl text-gray-300 max-w-4xl mx-auto mb-8 px-4 leading-relaxed">
              Transform your business for the digital age with comprehensive digital transformation services.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                to="/contact" 
                className="group bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-4 rounded-xl font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 flex items-center justify-center transform hover:scale-105 hover:shadow-2xl hover:shadow-cyan-500/25"
              >
                Get Started Today
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
'use client';
import React from 'react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import SEOOptimizer from '../components/SEOOptimizer';
import { CheckCircle, ArrowRight, Phone, Mail, Star } from 'lucide-react';

const DigitalTransformationPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <SEOOptimizer
        title="Digital Transformation | Zion Tech Group"
        description="Business modernization and digital strategy. Transform your business with cutting-edge technology solutions."
        keywords={['digital transformation', 'technology solutions', 'business automation', 'digital transformation']}
        canonicalUrl="https://ziontechgroup.com/digital-transformation"
      />
      <Navigation />
      
      <section className="py-20 px-4">
        <div className="container mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 neon-text">
            Digital Transformation
          </h1>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Business modernization and digital strategy. Transform your business with cutting-edge technology solutions.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="#contact" className="cyber-button inline-flex items-center justify-center">
              Get Started Today
              <ArrowRight className="w-4 h-4 ml-2" />
            </a>
            <a href="tel:+13024640950" className="cyber-button-secondary inline-flex items-center justify-center">
              <Phone className="w-4 h-4 mr-2" />
              (302) 464-0950
            </a>
          </div>
        </div>
      </section>

      <section className="py-16 px-4">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="cyber-card p-6 text-center">
              <Star className="w-12 h-12 text-cyan-400 mx-auto mb-4" />
              <h3 className="text-xl font-bold text-white mb-3">Expert Solutions</h3>
              <p className="text-gray-300">Professional-grade solutions tailored to your needs</p>
            </div>
            <div className="cyber-card p-6 text-center">
              <CheckCircle className="w-12 h-12 text-green-400 mx-auto mb-4" />
              <h3 className="text-xl font-bold text-white mb-3">Proven Results</h3>
              <p className="text-gray-300">Track record of successful implementations</p>
            </div>
            <div className="cyber-card p-6 text-center">
              <ArrowRight className="w-12 h-12 text-purple-400 mx-auto mb-4" />
              <h3 className="text-xl font-bold text-white mb-3">Future-Ready</h3>
              <p className="text-gray-300">Scalable solutions for tomorrow's challenges</p>
            </div>
          </div>
        </div>
      </section>

      <section id="contact" className="py-16 px-4">
        <div className="container mx-auto">
          <div className="cyber-card p-8 max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6 neon-text">
              Ready to Get Started?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Let's discuss how we can help transform your business with digital transformation.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="tel:+13024640950" className="cyber-button inline-flex items-center justify-center">
                <Phone className="w-4 h-4 mr-2" />
                (302) 464-0950
              </a>
              <a href="mailto:kleber@ziontechgroup.com" className="cyber-button-secondary inline-flex items-center justify-center">
                <Mail className="w-4 h-4 mr-2" />
                kleber@ziontechgroup.com
              </a>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default DigitalTransformationPage;
'use client';
import React from 'react';
import { Helmet } from 'react-helmet-async';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

const AboutPage: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>About Us - Zion Tech Group | AI & IT Solutions</title>
        <meta name="description" content="Learn about Zion Tech Group, a leading provider of AI and IT solutions. Our mission is to transform businesses with cutting-edge technology." />
        <meta name="keywords" content="about us, AI solutions, IT services, technology company, mission, vision" />
        <meta property="og:title" content="About Us - Zion Tech Group" />
        <meta property="og:description" content="Learn about Zion Tech Group, a leading provider of AI and IT solutions." />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="About Us - Zion Tech Group" />
        <meta name="twitter:description" content="Learn about Zion Tech Group, a leading provider of AI and IT solutions." />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 cyber-grid neural-network-bg matrix-rain">
        <Navigation />
        
        <main className="container mx-auto px-4 py-16 pt-32">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-8 text-center neon-text">
              About Zion Tech Group
            </h1>
            
            <div className="cyber-card-enhanced mb-8">
              <h2 className="text-2xl font-bold text-cyan-400 mb-4">Our Mission</h2>
              <p className="text-gray-300 leading-relaxed">
                At Zion Tech Group, we are dedicated to transforming businesses through cutting-edge AI and IT solutions. 
                Our mission is to empower organizations with intelligent technology that drives growth, efficiency, and innovation.
              </p>
            </div>

            <div className="cyber-card-enhanced mb-8">
              <h2 className="text-2xl font-bold text-cyan-400 mb-4">Our Vision</h2>
              <p className="text-gray-300 leading-relaxed">
                We envision a future where artificial intelligence and advanced technology seamlessly integrate with 
                business operations, creating unprecedented opportunities for growth and success.
              </p>
            </div>

            <div className="cyber-card-enhanced mb-8">
              <h2 className="text-2xl font-bold text-cyan-400 mb-4">Why Choose Us</h2>
              <ul className="space-y-3 text-gray-300">
                <li className="flex items-start">
                  <span className="text-cyan-400 mr-3">✓</span>
                  <span>Expert team with 10+ years of experience in AI and IT solutions</span>
                </li>
                <li className="flex items-start">
                  <span className="text-cyan-400 mr-3">✓</span>
                  <span>Proven track record with 500+ successful projects</span>
                </li>
                <li className="flex items-start">
                  <span className="text-cyan-400 mr-3">✓</span>
                  <span>24/7 support and maintenance services</span>
                </li>
                <li className="flex items-start">
                  <span className="text-cyan-400 mr-3">✓</span>
                  <span>Cutting-edge technology and innovative solutions</span>
                </li>
                <li className="flex items-start">
                  <span className="text-cyan-400 mr-3">✓</span>
                  <span>Competitive pricing and flexible payment options</span>
                </li>
              </ul>
            </div>

            <div className="cyber-card-enhanced text-center">
              <h2 className="text-2xl font-bold text-cyan-400 mb-4">Get in Touch</h2>
              <p className="text-gray-300 mb-6">
                Ready to transform your business with our AI and IT solutions? Contact us today for a free consultation.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="tel:+13024640950"
                  className="px-8 py-4 bg-gradient-to-r from-cyan-500 via-purple-500 to-pink-500 text-white rounded-xl font-semibold hover:from-cyan-600 hover:via-purple-600 hover:to-pink-600 transition-all duration-300 shadow-lg shadow-cyan-500/25 hover:shadow-cyan-500/40 hover:scale-105"
                >
                  Call: (302) 464-0950
                </a>
                <a
                  href="mailto:kleber@ziontechgroup.com"
                  className="px-8 py-4 border-2 border-cyan-400 text-cyan-400 rounded-xl font-semibold hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300 hover:scale-105"
                >
                  Email Us
                </a>
              </div>
            </div>
          </div>
        </main>
        
        <Footer />
      </div>
    </>
  );
};

export default AboutPage;
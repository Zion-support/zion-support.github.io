'use client';
import React from 'react';
import { Helmet } from 'react-helmet-async';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

const AboutPage: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>About Us | Zion Tech Group - Leading AI & IT Solutions Provider</title>
        <meta name="description" content="Learn about Zion Tech Group, a leading provider of AI and IT solutions. Our mission is to transform businesses through cutting-edge technology and innovation." />
        <meta name="keywords" content="about us, Zion Tech Group, AI solutions, IT services, technology company, mission, vision" />
        <meta property="og:title" content="About Us | Zion Tech Group" />
        <meta property="og:description" content="Learn about Zion Tech Group and our mission to transform businesses through technology" />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="About Us | Zion Tech Group" />
        <meta name="twitter:description" content="Learn about Zion Tech Group and our mission" />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        <Navigation />
        
        <main className="container mx-auto px-4 py-16 pt-24">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-8 text-center">
              About Zion Tech Group
            </h1>
            
            <div className="prose prose-lg max-w-none text-gray-300">
              <p className="text-xl mb-8 text-center">
                Leading the future of technology with innovative AI and IT solutions
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
                <div className="bg-white/5 backdrop-blur-lg rounded-2xl p-6 border border-white/10">
                  <h2 className="text-2xl font-bold text-white mb-4">Our Mission</h2>
                  <p className="text-gray-300">
                    To empower businesses with cutting-edge AI and IT solutions that drive innovation, 
                    efficiency, and growth. We believe technology should be accessible, powerful, and transformative.
                  </p>
                </div>
                
                <div className="bg-white/5 backdrop-blur-lg rounded-2xl p-6 border border-white/10">
                  <h2 className="text-2xl font-bold text-white mb-4">Our Vision</h2>
                  <p className="text-gray-300">
                    To be the global leader in AI and IT solutions, creating a future where technology 
                    seamlessly integrates with human potential to solve the world's most complex challenges.
                  </p>
                </div>
              </div>
              
              <div className="bg-white/5 backdrop-blur-lg rounded-2xl p-8 border border-white/10 mb-12">
                <h2 className="text-3xl font-bold text-white mb-6 text-center">Why Choose Zion Tech Group?</h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div className="text-center">
                    <div className="text-4xl mb-4">🚀</div>
                    <h3 className="text-xl font-bold text-white mb-2">Innovation</h3>
                    <p className="text-gray-300">Cutting-edge technology and forward-thinking solutions</p>
                  </div>
                  <div className="text-center">
                    <div className="text-4xl mb-4">🔒</div>
                    <h3 className="text-xl font-bold text-white mb-2">Security</h3>
                    <p className="text-gray-300">Bank-level security and compliance for all solutions</p>
                  </div>
                  <div className="text-center">
                    <div className="text-4xl mb-4">⚡</div>
                    <h3 className="text-xl font-bold text-white mb-2">Performance</h3>
                    <p className="text-gray-300">Optimized solutions for maximum efficiency and speed</p>
                  </div>
                </div>
              </div>
              
              <div className="text-center">
                <h2 className="text-3xl font-bold text-white mb-6">Get in Touch</h2>
                <p className="text-lg text-gray-300 mb-8">
                  Ready to transform your business? Contact us today for a free consultation.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <a
                    href="tel:+13024640950"
                    className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-purple-500 text-white rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-600 transition-all duration-300"
                  >
                    📞 Call: (302) 464-0950
                  </a>
                  <a 
                    href="mailto:kleber@ziontechgroup.com"
                    className="border-2 border-cyan-400 text-cyan-400 px-8 py-3 rounded-lg font-semibold hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300">
                    📧 Email Us
                  </a>
                </div>
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
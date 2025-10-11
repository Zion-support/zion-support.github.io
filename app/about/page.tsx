'use client';
import React from 'react';
import { Helmet } from 'react-helmet-async';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

const AboutPage: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>About Us - Zion Tech Group | AI & IT Solutions Experts</title>
        <meta name="description" content="Learn about Zion Tech Group, a leading provider of AI, IT, and Micro SaaS solutions. Discover our mission, team, and commitment to transforming businesses." />
        <meta name="keywords" content="about us, Zion Tech Group, AI experts, IT solutions, team, mission, company" />
      </Helmet>
      
      <main className="min-h-screen">
        <div className="container mx-auto px-4 py-16">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
              About <span className="text-cyan-400">Zion Tech Group</span>
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              We are a cutting-edge technology company specializing in AI, IT solutions, and Micro SaaS platforms that transform businesses and drive innovation.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
            <div>
              <h2 className="text-3xl font-bold text-white mb-6">Our Mission</h2>
              <p className="text-gray-300 text-lg leading-relaxed mb-6">
                To empower businesses with cutting-edge AI and IT solutions that drive growth, efficiency, and innovation. We believe technology should be accessible, powerful, and transformative.
              </p>
              <p className="text-gray-300 text-lg leading-relaxed">
                Our team of experts combines deep technical knowledge with business acumen to deliver solutions that not only meet current needs but anticipate future challenges.
              </p>
            </div>
            
            <div>
              <h2 className="text-3xl font-bold text-white mb-6">Our Vision</h2>
              <p className="text-gray-300 text-lg leading-relaxed mb-6">
                To be the leading provider of AI and IT solutions that enable businesses to thrive in the digital age. We envision a future where technology seamlessly integrates with human potential.
              </p>
              <p className="text-gray-300 text-lg leading-relaxed">
                Through continuous innovation and client-focused solutions, we're building a world where every business can leverage the power of artificial intelligence and advanced technology.
              </p>
            </div>
          </div>

          <div className="text-center">
            <h2 className="text-3xl font-bold text-white mb-8">Why Choose Zion Tech Group?</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 border border-gray-700">
                <h3 className="text-xl font-bold text-cyan-400 mb-4">Expert Team</h3>
                <p className="text-gray-300">
                  Our team consists of industry experts with years of experience in AI, machine learning, and enterprise IT solutions.
                </p>
              </div>
              
              <div className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 border border-gray-700">
                <h3 className="text-xl font-bold text-cyan-400 mb-4">Proven Results</h3>
                <p className="text-gray-300">
                  We've helped hundreds of businesses transform their operations and achieve measurable results through our innovative solutions.
                </p>
              </div>
              
              <div className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 border border-gray-700">
                <h3 className="text-xl font-bold text-cyan-400 mb-4">24/7 Support</h3>
                <p className="text-gray-300">
                  Our dedicated support team is available around the clock to ensure your systems run smoothly and efficiently.
                </p>
              </div>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </>
  );
};

export default AboutPage;

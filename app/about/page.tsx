'use client';
import React from 'react';
import { Helmet } from 'react-helmet-async';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

const AboutPage: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>About Us - Zion Tech Group | Advanced AI and IT Solutions</title>
        <meta name="description" content="Learn about Zion Tech Group's mission to revolutionize business through advanced AI and IT solutions. Discover our team, values, and commitment to innovation." />
        <meta name="keywords" content="about us, Zion Tech Group, AI solutions, IT services, team, mission, values, innovation" />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        <Navigation />
        
        {/* Hero Section */}
        <section>
          <div>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
              <div className="text-center">
                <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
                  About Zion Tech Group
                </h1>
                <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
                  We are a leading provider of AI and IT solutions, dedicated to transforming businesses through innovative technology.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Mission Section */}
        <section>
          <div>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
              <div className="text-center">
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                  Our Mission
                </h2>
                <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                  To revolutionize business operations through cutting-edge AI and IT solutions, delivering measurable results and exceptional value to our clients.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Values Section */}
        <section>
          <div>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
              <div className="text-center">
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                  Our Values
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                  <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
                    <h3 className="text-xl font-semibold text-white mb-3">Innovation</h3>
                    <p className="text-gray-300">We constantly push the boundaries of what's possible with technology.</p>
                  </div>
                  <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
                    <h3 className="text-xl font-semibold text-white mb-3">Excellence</h3>
                    <p className="text-gray-300">We deliver the highest quality solutions and services.</p>
                  </div>
                  <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
                    <h3 className="text-xl font-semibold text-white mb-3">Integrity</h3>
                    <p className="text-gray-300">We maintain the highest ethical standards in all our interactions.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
      
      <Footer />
    </>
  );
};

export default AboutPage;
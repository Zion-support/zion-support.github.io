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
        <meta name="description" content="Learn about Zion Tech Group, a leading provider of AI and IT solutions. Our mission, team, and commitment to innovation." />
      </Helmet>
      
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        <Navigation />
        
        <main className="container mx-auto px-4 py-16 pt-24">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-8 text-center">
              About Zion Tech Group
            </h1>
            
            <div className="bg-white/5 backdrop-blur-lg rounded-2xl p-8 border border-white/10 mb-8">
              <h2 className="text-2xl font-bold text-white mb-6">Our Mission</h2>
              <p className="text-gray-300 text-lg leading-relaxed mb-6">
                At Zion Tech Group, we are dedicated to transforming businesses through cutting-edge AI and IT solutions. 
                Our mission is to empower organizations with innovative technology that drives growth, efficiency, and success.
              </p>
              <p className="text-gray-300 text-lg leading-relaxed">
                We combine deep technical expertise with business acumen to deliver solutions that not only meet today's 
                challenges but also prepare our clients for the future of technology.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-white/5 backdrop-blur-lg rounded-2xl p-8 border border-white/10">
                <h3 className="text-xl font-bold text-white mb-4">Our Values</h3>
                <ul className="space-y-3 text-gray-300">
                  <li>• Innovation and Excellence</li>
                  <li>• Client-Centric Approach</li>
                  <li>• Integrity and Transparency</li>
                  <li>• Continuous Learning</li>
                  <li>• Collaborative Partnership</li>
                </ul>
              </div>
              
              <div className="bg-white/5 backdrop-blur-lg rounded-2xl p-8 border border-white/10">
                <h3 className="text-xl font-bold text-white mb-4">Why Choose Us</h3>
                <ul className="space-y-3 text-gray-300">
                  <li>• 10+ Years of Experience</li>
                  <li>• 500+ Successful Projects</li>
                  <li>• 24/7 Expert Support</li>
                  <li>• Cutting-Edge Technology</li>
                  <li>• Proven Results</li>
                </ul>
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

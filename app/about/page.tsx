'use client';
import React from 'react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import Breadcrumb from '../components/Breadcrumb';

const AboutPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Navigation />
      <main className="pt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <Breadcrumb items={[{ label: 'About' }]} />
          
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400 mb-6">
              About Zion Tech Group
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Leading provider of AI and IT solutions for modern businesses. 
              We transform operations with cutting-edge technology and innovation.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
            <div>
              <h2 className="text-3xl font-bold text-white mb-6">Our Mission</h2>
              <p className="text-gray-300 text-lg mb-6">
                To empower businesses with cutting-edge AI and IT solutions that drive growth, 
                efficiency, and innovation. We believe technology should be accessible, 
                powerful, and transformative.
              </p>
              <p className="text-gray-300 text-lg">
                Our team of experts combines deep technical knowledge with business acumen 
                to deliver solutions that not only meet today's needs but anticipate tomorrow's challenges.
              </p>
            </div>
            
            <div>
              <h2 className="text-3xl font-bold text-white mb-6">Our Vision</h2>
              <p className="text-gray-300 text-lg mb-6">
                To be the global leader in AI and IT solutions, recognized for our innovation, 
                reliability, and commitment to client success. We envision a future where 
                technology seamlessly integrates with business operations.
              </p>
              <p className="text-gray-300 text-lg">
                Through continuous innovation and strategic partnerships, we're building 
                the foundation for the next generation of business technology.
              </p>
            </div>
          </div>

          <div className="text-center">
            <h2 className="text-3xl font-bold text-white mb-8">Why Choose Us?</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
                <h3 className="text-xl font-semibold text-white mb-4">Expert Team</h3>
                <p className="text-gray-300">
                  Our team consists of industry experts with years of experience in AI, 
                  IT, and business transformation.
                </p>
              </div>
              
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
                <h3 className="text-xl font-semibold text-white mb-4">Innovation</h3>
                <p className="text-gray-300">
                  We stay at the forefront of technology, constantly exploring new 
                  solutions and methodologies.
                </p>
              </div>
              
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
                <h3 className="text-xl font-semibold text-white mb-4">Support</h3>
                <p className="text-gray-300">
                  We provide comprehensive support and maintenance to ensure your 
                  solutions continue to deliver value.
                </p>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default AboutPage;
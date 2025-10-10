'use client';
import React from 'react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

const AboutPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Navigation />
      
      <main className="container mx-auto px-4 py-16 pt-24">
        <div className="text-center mb-16">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
            About Zion Tech Group
          </h1>
          <p className="text-xl text-gray-300 max-w-4xl mx-auto">
            Leading the future of AI and technology innovation.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-xl shadow-lg p-8 mb-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Mission</h2>
            <p className="text-gray-600 text-lg leading-relaxed">
              At Zion Tech Group, we are dedicated to revolutionizing businesses through cutting-edge AI and IT solutions. 
              Our mission is to empower organizations with intelligent technologies that drive growth, efficiency, and innovation.
            </p>
          </div>

          <div className="bg-white rounded-xl shadow-lg p-8 mb-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Vision</h2>
            <p className="text-gray-600 text-lg leading-relaxed">
              We envision a future where artificial intelligence seamlessly integrates with human creativity and business processes, 
              creating unprecedented opportunities for growth and transformation across all industries.
            </p>
          </div>

          <div className="bg-white rounded-xl shadow-lg p-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Why Choose Us</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h3 className="text-xl font-semibold text-gray-800 mb-3">Expert Team</h3>
                <p className="text-gray-600">
                  Our team consists of world-class AI researchers, software engineers, and business strategists.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-800 mb-3">Cutting-Edge Technology</h3>
                <p className="text-gray-600">
                  We leverage the latest AI and machine learning technologies to deliver superior solutions.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-800 mb-3">Proven Results</h3>
                <p className="text-gray-600">
                  Our solutions have helped hundreds of businesses achieve their digital transformation goals.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-800 mb-3">24/7 Support</h3>
                <p className="text-gray-600">
                  We provide round-the-clock support to ensure your success and satisfaction.
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
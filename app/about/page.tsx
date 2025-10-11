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
        <meta property="og:description" content="Learn about Zion Tech Group, a leading provider of AI and IT solutions" />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="About Us - Zion Tech Group" />
        <meta name="twitter:description" content="Learn about Zion Tech Group, a leading provider of AI and IT solutions" />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 cyber-grid-enhanced holographic-bg">
        <Navigation />
        
        <main className="container mx-auto px-4 py-16 pt-24">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent neon-text-enhanced">
              About Zion Tech Group
            </h1>
            
            <div className="cyber-card-enhanced mb-8">
              <h2 className="text-2xl font-bold text-white mb-4">Our Mission</h2>
              <p className="text-gray-300 text-lg leading-relaxed">
                At Zion Tech Group, we are dedicated to transforming businesses through cutting-edge AI and IT solutions. 
                Our mission is to democratize advanced technology and make it accessible to organizations of all sizes, 
                helping them achieve unprecedented growth and efficiency.
              </p>
            </div>

            <div className="cyber-card-enhanced mb-8">
              <h2 className="text-2xl font-bold text-white mb-4">Our Vision</h2>
              <p className="text-gray-300 text-lg leading-relaxed">
                We envision a future where artificial intelligence and advanced technology seamlessly integrate into 
                every aspect of business operations, creating a more efficient, sustainable, and innovative world. 
                Our goal is to be the catalyst that makes this vision a reality.
              </p>
            </div>

            <div className="cyber-card-enhanced mb-8">
              <h2 className="text-2xl font-bold text-white mb-4">Why Choose Us?</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h3 className="text-xl font-semibold text-cyan-400 mb-3">Expert Team</h3>
                  <p className="text-gray-300">
                    Our team consists of world-class engineers, data scientists, and technology experts with 
                    decades of combined experience in AI, machine learning, and enterprise IT solutions.
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-cyan-400 mb-3">Proven Results</h3>
                  <p className="text-gray-300">
                    We've helped over 500+ clients achieve significant improvements in efficiency, cost reduction, 
                    and revenue growth through our innovative solutions.
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-cyan-400 mb-3">24/7 Support</h3>
                  <p className="text-gray-300">
                    Our dedicated support team is available around the clock to ensure your systems run smoothly 
                    and your business operations remain uninterrupted.
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-cyan-400 mb-3">Cutting-Edge Technology</h3>
                  <p className="text-gray-300">
                    We stay at the forefront of technological innovation, constantly updating our solutions 
                    with the latest advances in AI, quantum computing, and enterprise technology.
                  </p>
                </div>
              </div>
            </div>

            <div className="cyber-card-enhanced">
              <h2 className="text-2xl font-bold text-white mb-4">Contact Information</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h3 className="text-lg font-semibold text-cyan-400 mb-2">Phone</h3>
                  <p className="text-gray-300">+1 302 464 0950</p>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-cyan-400 mb-2">Email</h3>
                  <p className="text-gray-300">kleber@ziontechgroup.com</p>
                </div>
                <div className="md:col-span-2">
                  <h3 className="text-lg font-semibold text-cyan-400 mb-2">Address</h3>
                  <p className="text-gray-300">364 E Main St STE 1008, Middletown, DE 19709</p>
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

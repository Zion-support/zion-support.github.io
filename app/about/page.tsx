import React from 'react';
import { Helmet } from 'react-helmet-async';

const AboutPage: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>About Us - Zion Tech Group | AI & IT Solutions</title>
        <meta name="description" content="Learn about Zion Tech Group, a leading provider of AI and IT solutions. Our mission is to transform businesses with cutting-edge technology." />
        <meta name="keywords" content="about us, AI company, IT solutions, technology team, Zion Tech Group" />
      </Helmet>
      
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 cyber-grid neural-network-bg">
        <div className="container mx-auto px-4 py-16 pt-24">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-8 text-center neon-text cyber-text">
              About Zion Tech Group
            </h1>
            
            <div className="cyber-card p-8 mb-8">
              <h2 className="text-2xl font-bold text-cyan-400 mb-6">Our Mission</h2>
              <p className="text-gray-300 text-lg leading-relaxed mb-6">
                At Zion Tech Group, we are dedicated to transforming businesses through innovative AI and IT solutions. 
                Our mission is to empower organizations with cutting-edge technology that drives growth, efficiency, and innovation.
              </p>
              <p className="text-gray-300 text-lg leading-relaxed">
                We believe that artificial intelligence and advanced IT infrastructure are the keys to unlocking 
                unprecedented potential in every industry, from healthcare and finance to manufacturing and beyond.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
              <div className="cyber-card p-6">
                <h3 className="text-xl font-bold text-cyan-400 mb-4">Our Vision</h3>
                <p className="text-gray-300 leading-relaxed">
                  To be the world's leading provider of AI-powered solutions, enabling every business to 
                  harness the full potential of artificial intelligence and advanced technology.
                </p>
              </div>
              
              <div className="cyber-card p-6">
                <h3 className="text-xl font-bold text-cyan-400 mb-4">Our Values</h3>
                <ul className="text-gray-300 space-y-2">
                  <li>• Innovation and Excellence</li>
                  <li>• Client Success First</li>
                  <li>• Ethical AI Development</li>
                  <li>• Continuous Learning</li>
                  <li>• Transparent Communication</li>
                </ul>
              </div>
            </div>

            <div className="cyber-card p-8">
              <h2 className="text-2xl font-bold text-cyan-400 mb-6">Why Choose Zion Tech Group?</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="text-center">
                  <div className="text-4xl mb-4">🚀</div>
                  <h3 className="text-lg font-bold text-white mb-2">Proven Results</h3>
                  <p className="text-gray-300 text-sm">
                    $50M+ in client savings and 300% average ROI across all projects
                  </p>
                </div>
                <div className="text-center">
                  <div className="text-4xl mb-4">🔒</div>
                  <h3 className="text-lg font-bold text-white mb-2">Enterprise Security</h3>
                  <p className="text-gray-300 text-sm">
                    Bank-level security and compliance for all our solutions
                  </p>
                </div>
                <div className="text-center">
                  <div className="text-4xl mb-4">⚡</div>
                  <h3 className="text-lg font-bold text-white mb-2">Rapid Deployment</h3>
                  <p className="text-gray-300 text-sm">
                    Fast implementation with 99.9% uptime guarantee
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AboutPage;
import React from 'react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

const AboutPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Navigation />
      <main className="container mx-auto px-4 py-16 pt-24">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
            About Zion Tech Group
          </h1>
          <p className="text-xl md:text-2xl text-cyan-400 mb-8">
            Leading the Future of AI and IT Solutions
          </p>
        </div>
        
        <div className="max-w-4xl mx-auto">
          <div className="cyber-card hologram-card p-8 mb-8">
            <h2 className="text-2xl font-bold text-white mb-4">Our Mission</h2>
            <p className="text-gray-300 leading-relaxed">
              At Zion Tech Group, we are dedicated to transforming businesses through cutting-edge AI and IT solutions. 
              Our mission is to democratize advanced technology, making it accessible and beneficial for organizations 
              of all sizes. We believe in the power of artificial intelligence to solve complex problems, streamline 
              operations, and drive unprecedented growth.
            </p>
          </div>

          <div className="cyber-card hologram-card p-8 mb-8">
            <h2 className="text-2xl font-bold text-white mb-4">Our Vision</h2>
            <p className="text-gray-300 leading-relaxed">
              We envision a future where every business can leverage the full potential of AI and technology to 
              achieve their goals. Our vision is to be the global leader in AI-powered solutions, helping 
              organizations navigate the digital transformation landscape with confidence and success.
            </p>
          </div>

          <div className="cyber-card hologram-card p-8">
            <h2 className="text-2xl font-bold text-white mb-4">Why Choose Us</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h3 className="text-lg font-semibold text-cyan-400 mb-2">Expert Team</h3>
                <p className="text-gray-300 text-sm">
                  Our team consists of world-class AI researchers, software engineers, and business strategists 
                  with decades of combined experience.
                </p>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-cyan-400 mb-2">Proven Results</h3>
                <p className="text-gray-300 text-sm">
                  We've delivered over $50M in annual savings and 300% average ROI for our enterprise clients 
                  across various industries.
                </p>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-cyan-400 mb-2">Cutting-Edge Technology</h3>
                <p className="text-gray-300 text-sm">
                  We stay at the forefront of technology, implementing the latest AI and IT innovations to 
                  give our clients a competitive advantage.
                </p>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-cyan-400 mb-2">24/7 Support</h3>
                <p className="text-gray-300 text-sm">
                  Our dedicated support team is available around the clock to ensure your systems run smoothly 
                  and your business never stops.
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
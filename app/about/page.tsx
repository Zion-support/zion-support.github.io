import React from 'react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

const AboutPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Navigation />
      <main className="container mx-auto px-4 py-16 pt-24">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6 text-center">
            About Zion Tech Group
          </h1>
          <p className="text-xl text-gray-300 mb-12 text-center max-w-3xl mx-auto">
            Leading the future of AI and IT solutions with cutting-edge technology and innovative approaches.
          </p>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
            <div>
              <h2 className="text-3xl font-bold text-white mb-6">Our Mission</h2>
              <p className="text-gray-300 mb-6 text-lg leading-relaxed">
                At Zion Tech Group, we're dedicated to transforming businesses through advanced AI and IT solutions. 
                Our mission is to democratize cutting-edge technology and make it accessible to organizations of all sizes.
              </p>
              <p className="text-gray-300 text-lg leading-relaxed">
                We believe in the power of artificial intelligence to solve complex problems, automate processes, 
                and drive unprecedented growth for our clients.
              </p>
            </div>
            
            <div>
              <h2 className="text-3xl font-bold text-white mb-6">Our Vision</h2>
              <p className="text-gray-300 mb-6 text-lg leading-relaxed">
                To be the global leader in AI-powered business transformation, creating a future where technology 
                seamlessly integrates with human potential to achieve extraordinary results.
              </p>
              <p className="text-gray-300 text-lg leading-relaxed">
                We envision a world where every business can leverage the full power of artificial intelligence 
                to innovate, compete, and thrive in the digital age.
              </p>
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="text-4xl font-bold text-cyan-400 mb-2">500+</div>
              <div className="text-white font-semibold mb-2">Projects Completed</div>
              <div className="text-gray-300 text-sm">Successfully delivered AI and IT solutions</div>
            </div>
            
            <div className="text-center">
              <div className="text-4xl font-bold text-cyan-400 mb-2">50+</div>
              <div className="text-white font-semibold mb-2">Team Members</div>
              <div className="text-gray-300 text-sm">Expert engineers and AI specialists</div>
            </div>
            
            <div className="text-center">
              <div className="text-4xl font-bold text-cyan-400 mb-2">300%</div>
              <div className="text-white font-semibold mb-2">Average ROI</div>
              <div className="text-gray-300 text-sm">Return on investment for our clients</div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default AboutPage;

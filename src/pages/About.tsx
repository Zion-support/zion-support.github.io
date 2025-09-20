import React from 'react';
import { Link } from 'react-router-dom';
import { Users, Target, Award, Globe } from 'lucide-react';

const About: React.FC = () => {
  return (
    <div className="min-h-screen bg-futuristic">
      {/* Hero Section */}
      <section className="relative py-20 px-4 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-900/20 via-purple-900/20 to-cyan-900/20" />
        
        <div className="relative max-w-7xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
            About Zion Tech Group
          </h1>
          <p className="text-xl text-zion-slate-light max-w-3xl mx-auto">
            Leading the future of AI and quantum computing with innovative solutions 
            that transform businesses and industries worldwide.
          </p>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white/5 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="flex justify-center mb-4">
                <Award className="w-12 h-12 text-zion-cyan" />
              </div>
              <div className="text-3xl font-bold text-white mb-2">500+</div>
              <div className="text-zion-slate-light">Projects Completed</div>
            </div>
            <div className="text-center">
              <div className="flex justify-center mb-4">
                <Users className="w-12 h-12 text-zion-cyan" />
              </div>
              <div className="text-3xl font-bold text-white mb-2">50+</div>
              <div className="text-zion-slate-light">Expert Team Members</div>
            </div>
            <div className="text-center">
              <div className="flex justify-center mb-4">
                <Target className="w-12 h-12 text-zion-cyan" />
              </div>
              <div className="text-3xl font-bold text-white mb-2">95%</div>
              <div className="text-zion-slate-light">Client Satisfaction</div>
            </div>
            <div className="text-center">
              <div className="flex justify-center mb-4">
                <Globe className="w-12 h-12 text-zion-cyan" />
              </div>
              <div className="text-3xl font-bold text-white mb-2">25+</div>
              <div className="text-zion-slate-light">Countries Served</div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl font-bold text-white mb-6">Our Mission</h2>
              <p className="text-zion-slate-light text-lg leading-relaxed">
                To revolutionize how businesses operate through cutting-edge AI, quantum computing, 
                and advanced technology solutions that drive innovation, efficiency, and sustainable growth.
              </p>
            </div>
            <div>
              <h2 className="text-4xl font-bold text-white mb-6">Our Vision</h2>
              <p className="text-zion-slate-light text-lg leading-relaxed">
                To become the world's leading technology partner, empowering organizations to 
                harness the full potential of AI and quantum technologies for a better tomorrow.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-zion-cyan to-zion-purple">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            Ready to Transform Your Business?
          </h2>
          <p className="text-xl text-white/90 mb-8">
            Let's discuss how our AI-powered solutions can help you achieve your goals.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link 
              to="/contact" 
              className="bg-white text-zion-cyan hover:bg-zion-slate-light px-8 py-3 rounded-lg font-semibold transition-colors"
            >
              Start a Conversation
            </Link>
            <Link 
              to="/services" 
              className="border border-white text-white hover:bg-white hover:text-zion-cyan px-8 py-3 rounded-lg font-semibold transition-colors"
            >
              Explore Services
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
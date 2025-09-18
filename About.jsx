import React from 'react';

const About = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      <div className="container mx-auto px-4 py-20">
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
            About Zion Tech Group
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Leading technology company dedicated to transforming businesses through innovative AI solutions, quantum computing, and cutting-edge digital technologies.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          <div className="bg-slate-800/50 border border-white/10 rounded-xl p-8">
            <h2 className="text-3xl font-bold text-white mb-4">Our Mission</h2>
            <p className="text-lg text-gray-300">
              To democratize advanced technology and make AI, quantum computing, and innovative solutions accessible to businesses of all sizes.
            </p>
          </div>
          
          <div className="bg-slate-800/50 border border-white/10 rounded-xl p-8">
            <h2 className="text-3xl font-bold text-white mb-4">Our Vision</h2>
            <p className="text-lg text-gray-300">
              To be the global leader in AI-powered business transformation, creating a future where technology enhances human potential.
            </p>
          </div>
        </div>
        
        <div className="text-center">
          <h2 className="text-3xl font-bold text-white mb-6">Ready to Transform Your Business?</h2>
          <p className="text-xl text-gray-300 mb-8">Let's discuss how our innovative solutions can help you achieve your goals.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="tel:+13024640950" className="bg-gradient-to-r from-blue-500 to-cyan-500 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all hover:scale-105">
              Call +1 (302) 464-0950
            </a>
            <a href="mailto:kleber@ziontechgroup.com" className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-slate-900 px-8 py-4 rounded-lg font-semibold text-lg transition-all">
              Get in Touch
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
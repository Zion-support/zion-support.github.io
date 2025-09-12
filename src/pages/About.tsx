import React from 'react';

const solutions = [];

export default function About() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-700">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-900 to-purple-900 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            About Zion Tech Group
          </h1>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto">
            Pioneering the future of technology with innovative solutions and cutting-edge expertise
          </p>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Our Mission
              </h2>
              <p className="text-lg text-slate-300 mb-6">
                At Zion Tech Group, we are committed to pushing the boundaries of what's possible 
                with technology. Our mission is to deliver innovative solutions that transform 
                businesses and create lasting value for our clients.
              </p>
              <p className="text-lg text-slate-300">
                We believe in the power of artificial intelligence, quantum computing, and 
                cybersecurity to solve complex challenges and drive meaningful change in the world.
              </p>
            </div>
            <div className="bg-slate-800 p-8 rounded-lg">
              <h3 className="text-2xl font-semibold text-white mb-4">Our Values</h3>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-cyan-400 rounded-full mr-3 mt-2"></span>
                  <span className="text-slate-300">Innovation and Excellence</span>
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-cyan-400 rounded-full mr-3 mt-2"></span>
                  <span className="text-slate-300">Client-Centric Approach</span>
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-cyan-400 rounded-full mr-3 mt-2"></span>
                  <span className="text-slate-300">Ethical Technology Use</span>
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-cyan-400 rounded-full mr-3 mt-2"></span>
                  <span className="text-slate-300">Continuous Learning</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-12">
            Our Team
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-32 h-32 bg-slate-700 rounded-full mx-auto mb-4"></div>
              <h3 className="text-xl font-semibold text-white mb-2">AI Specialists</h3>
              <p className="text-slate-300">Expert in machine learning and artificial intelligence</p>
            </div>
            <div className="text-center">
              <div className="w-32 h-32 bg-slate-700 rounded-full mx-auto mb-4"></div>
              <h3 className="text-xl font-semibold text-white mb-2">Quantum Engineers</h3>
              <p className="text-slate-300">Leading quantum computing research and development</p>
            </div>
            <div className="text-center">
              <div className="w-32 h-32 bg-slate-700 rounded-full mx-auto mb-4"></div>
              <h3 className="text-xl font-semibold text-white mb-2">Security Experts</h3>
              <p className="text-slate-300">Cybersecurity professionals protecting digital assets</p>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold text-cyan-400 mb-2">50+</div>
              <div className="text-slate-300">Projects Completed</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-cyan-400 mb-2">25+</div>
              <div className="text-slate-300">Expert Team Members</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-cyan-400 mb-2">5+</div>
              <div className="text-slate-300">Years of Experience</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-cyan-400 mb-2">100%</div>
              <div className="text-slate-300">Client Satisfaction</div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
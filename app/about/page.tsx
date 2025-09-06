import React from 'react';

export const metadata = {
  title: 'About | Zion Tech Group',
  description: 'Learn about Zion Tech Group\'s mission to deliver enterprise-grade AI, micro SaaS, and IT solutions that drive real business results.',
};

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      <div className="container mx-auto px-4 py-16">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
            About Zion Tech Group
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            We are a leading technology company specializing in AI, autonomous systems, quantum computing, and innovative business solutions.
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-bold text-white mb-6">Our Mission</h2>
<<<<<<< HEAD
            <p className="text-gray-300 text-lg mb-6">
              To empower businesses with cutting-edge technology solutions that
              drive growth, efficiency, and innovation. We believe in the
              transformative power of AI, blockchain, and modern IT
              infrastructure.
            </p>
            <p className="text-gray-300 text-lg">
              Our team of experts is dedicated to delivering solutions that not
              only meet today's challenges but also prepare our clients for
              tomorrow's opportunities.
            </p>
          </div>
          <div>
            <h2 className="text-3xl font-bold text-white mb-6">Our Vision</h2>
            <p className="text-gray-300 text-lg mb-6">
              To be the world's most trusted technology partner, known for
              delivering innovative solutions that transform businesses and
              create lasting value.
            </p>
            <p className="text-gray-300 text-lg">
              We envision a future where technology seamlessly integrates with
              business processes, enabling organizations to achieve their full
              potential.
            </p>
          </div>
        </div>

        <div className="text-center">
          <h2 className="text-3xl font-bold text-white mb-8">Why Choose Us?</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-slate-800 p-6 rounded-lg">
              <h3 className="text-xl font-semibold text-white mb-4">
                Expert Team
              </h3>
              <p className="text-gray-300">
                Our team consists of industry experts with years of experience
                in AI, blockchain, and IT solutions.
              </p>
            </div>
            <div className="bg-slate-800 p-6 rounded-lg">
              <h3 className="text-xl font-semibold text-white mb-4">
                Proven Track Record
              </h3>
              <p className="text-gray-300">
                We have successfully delivered projects for clients across
                various industries and scales.
              </p>
            </div>
            <div className="bg-slate-800 p-6 rounded-lg">
              <h3 className="text-xl font-semibold text-white mb-4">
                Innovation Focus
              </h3>
              <p className="text-gray-300">
                We stay at the forefront of technology trends and continuously
                innovate our solutions.
              </p>
            </div>
=======
            <p className="text-gray-300 mb-6">
              To democratize access to cutting-edge AI and technology solutions, empowering businesses of all sizes to compete and thrive in the digital age.
            </p>
            <p className="text-gray-300 mb-6">
              We combine technical expertise with business acumen to create solutions that drive real results for our clients.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="/contact"
                className="bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors text-center"
              >
                Get in Touch
              </a>
              <a
                href="/services"
                className="border border-white text-white px-6 py-3 rounded-lg font-semibold hover:bg-white hover:text-gray-900 transition-colors text-center"
              >
                Our Services
              </a>
            </div>
          </div>
          
          <div className="bg-gray-800 rounded-lg p-8">
            <h3 className="text-2xl font-bold text-white mb-6">Why Choose Us?</h3>
            <ul className="space-y-4">
              <li className="flex items-center text-gray-300">
                <span className="w-2 h-2 bg-blue-500 rounded-full mr-3"></span>
                1000+ successful projects delivered
              </li>
              <li className="flex items-center text-gray-300">
                <span className="w-2 h-2 bg-blue-500 rounded-full mr-3"></span>
                24/7 technical support
              </li>
              <li className="flex items-center text-gray-300">
                <span className="w-2 h-2 bg-blue-500 rounded-full mr-3"></span>
                Enterprise-grade security
              </li>
              <li className="flex items-center text-gray-300">
                <span className="w-2 h-2 bg-blue-500 rounded-full mr-3"></span>
                Custom solutions for every need
              </li>
            </ul>
>>>>>>> cursor/merge-pull-requests-and-resolve-conflicts-3df6
          </div>
        </div>
      </div>
    </div>
  );
}
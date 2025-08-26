import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';

const About: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white">
      <Helmet>
        <title>About Us - Zion Tech Group</title>
        <meta name="description" content="Learn about Zion Tech Group's mission to revolutionize technology services through AI, innovation, and digital transformation." />
        <link rel="canonical" href="https://ziontechgroup.com/about" />
      </Helmet>

      <section className="pt-24 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
            About Zion Tech Group
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Pioneering the future of technology through innovative AI solutions and transformative digital experiences.
          </p>
        </div>
      </section>

      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div className="bg-slate-800/50 border border-white/10 rounded-xl p-8">
            <h2 className="text-3xl font-bold mb-4">Our Mission</h2>
            <p className="text-lg text-gray-300">
              To democratize advanced technology and make AI and innovative solutions accessible to businesses of all sizes.
            </p>
          </div>
          <div className="bg-slate-800/50 border border-white/10 rounded-xl p-8">
            <h2 className="text-3xl font-bold mb-4">Our Vision</h2>
            <p className="text-lg text-gray-300">
              To be the global leader in transformative technology solutions that create measurable impact.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Work with Us?</h2>
          <p className="text-xl text-gray-300 mb-8">Let's discuss how we can help transform your business.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/contact" className="bg-gradient-to-r from-blue-600 to-cyan-600 text-white px-8 py-3 rounded-lg font-semibold hover:from-blue-700 hover:to-cyan-700 transition-all duration-300">
              Get in Touch
            </Link>
            <Link to="/services" className="border border-gray-600 text-gray-300 px-8 py-3 rounded-lg font-semibold hover:border-gray-500 hover:text-white transition-all duration-300">
              Explore Services
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;

import React from 'react';

const About: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold text-white mb-6">
            About <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">Zion Tech Group</span>
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Leading the future of technology with innovative AI solutions and enterprise services
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          <div className="bg-gradient-to-br from-gray-800 to-gray-900 p-8 rounded-2xl">
            <h2 className="text-3xl font-bold text-white mb-6">Our Mission</h2>
            <p className="text-lg text-gray-300 mb-6">
              At Zion Tech Group, we're dedicated to transforming businesses through cutting-edge AI technology and innovative solutions. Our mission is to empower organizations to achieve their full potential in the digital age.
            </p>
            <p className="text-lg text-gray-300">
              We believe that technology should be accessible, powerful, and transformative. That's why we've built a comprehensive suite of services that cover everything from micro SaaS development to enterprise AI solutions.
            </p>
          </div>

          <div className="bg-gradient-to-br from-blue-900 to-purple-900 p-8 rounded-2xl">
            <h2 className="text-3xl font-bold text-white mb-6">Our Vision</h2>
            <p className="text-lg text-gray-300 mb-6">
              We envision a world where every business can leverage the power of AI and advanced technology to solve complex problems, automate processes, and drive unprecedented growth.
            </p>
            <p className="text-lg text-gray-300">
              Our goal is to be the trusted technology partner that businesses turn to when they need reliable, scalable, and innovative solutions that deliver real results.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          <div className="text-center">
            <div className="bg-gradient-to-br from-blue-600 to-purple-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-2xl">🚀</span>
            </div>
            <h3 className="text-2xl font-bold text-white mb-4">Innovation</h3>
            <p className="text-gray-300">
              We stay at the forefront of technology, constantly exploring new ways to solve business challenges with cutting-edge solutions.
            </p>
          </div>

          <div className="text-center">
            <div className="bg-gradient-to-br from-green-600 to-blue-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-2xl">⚡</span>
            </div>
            <h3 className="text-2xl font-bold text-white mb-4">Excellence</h3>
            <p className="text-gray-300">
              We deliver high-quality solutions that exceed expectations, backed by our commitment to continuous improvement and customer satisfaction.
            </p>
          </div>

          <div className="text-center">
            <div className="bg-gradient-to-br from-purple-600 to-pink-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-2xl">🤝</span>
            </div>
            <h3 className="text-2xl font-bold text-white mb-4">Partnership</h3>
            <p className="text-gray-300">
              We work closely with our clients as trusted partners, understanding their unique needs and delivering solutions that drive real business value.
            </p>
          </div>
        </div>

        <div className="bg-gradient-to-r from-blue-600 to-purple-600 p-8 rounded-2xl text-center">
          <h2 className="text-3xl font-bold text-white mb-4">Ready to Work With Us?</h2>
          <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
            Let's discuss how our technology solutions can help transform your business and accelerate your growth.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:+13024640950"
              className="bg-white text-blue-600 px-8 py-4 rounded-xl hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 font-semibold text-lg"
            >
              Call +1 302 464 0950
            </a>
            <a
              href="mailto:kleber@ziontechgroup.com"
              className="border-2 border-white text-white px-8 py-4 rounded-xl hover:bg-white hover:text-blue-600 transition-all duration-300 transform hover:scale-105 font-semibold text-lg"
            >
              Email Us
            </a>
          </div>
          <div className="mt-6 text-sm text-blue-100">
            <p>📍 364 E Main St STE 1008, Middletown DE 19709</p>
            <p>📧 kleber@ziontechgroup.com | 📞 +1 302 464 0950</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
import React from 'react';

const About: React.FC = () => {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">About Zion Tech Group</h1>
            <p className="text-xl md:text-2xl text-blue-100 max-w-3xl mx-auto">
              Pioneering the future of technology with AI-driven solutions and innovative digital transformation services.
            </p>
          </div>
        </div>
      </div>

      {/* Mission Section */}
      <div className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Mission</h2>
              <p className="text-lg text-gray-600 mb-6">
                At Zion Tech Group, we're committed to empowering businesses with cutting-edge AI and technology solutions. 
                Our mission is to bridge the gap between innovative technology and practical business applications.
              </p>
              <p className="text-lg text-gray-600">
                We believe in creating sustainable, scalable solutions that drive real business value and help our clients 
                stay ahead in an ever-evolving digital landscape.
              </p>
            </div>
            <div className="bg-gradient-to-br from-blue-50 to-purple-50 p-8 rounded-2xl">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Why Choose Us?</h3>
              <ul className="space-y-3">
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-blue-600 rounded-full mr-3"></span>
                  <span className="text-gray-700">15+ years of technology expertise</span>
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-blue-600 rounded-full mr-3"></span>
                  <span className="text-gray-700">AI-first approach to problem solving</span>
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-blue-600 rounded-full mr-3"></span>
                  <span className="text-gray-700">24/7 dedicated support</span>
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-blue-600 rounded-full mr-3"></span>
                  <span className="text-gray-700">Proven track record of success</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Team Section */}
      <div className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Meet Our Team</h2>
            <p className="text-xl text-gray-600">Experienced professionals dedicated to your success</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white rounded-lg p-6 shadow-lg">
              <div className="w-20 h-20 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white text-2xl font-bold">K</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 text-center mb-2">Kleber</h3>
              <p className="text-gray-600 text-center mb-4">CEO & Founder</p>
              <p className="text-gray-600 text-center text-sm">
                Visionary leader with 15+ years in technology and business development, 
                passionate about AI and digital transformation.
              </p>
            </div>
            <div className="bg-white rounded-lg p-6 shadow-lg">
              <div className="w-20 h-20 bg-gradient-to-r from-green-500 to-blue-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white text-2xl font-bold">T</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 text-center mb-2">Tech Team</h3>
              <p className="text-gray-600 text-center mb-4">Engineering Excellence</p>
              <p className="text-gray-600 text-center text-sm">
                World-class engineers and developers specializing in AI, blockchain, 
                cloud computing, and enterprise software solutions.
              </p>
            </div>
            <div className="bg-white rounded-lg p-6 shadow-lg">
              <div className="w-20 h-20 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white text-2xl font-bold">S</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 text-center mb-2">Support Team</h3>
              <p className="text-gray-600 text-center mb-4">Customer Success</p>
              <p className="text-gray-600 text-center text-sm">
                Dedicated support professionals ensuring your success with 24/7 
                assistance and proactive monitoring of your solutions.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Contact CTA */}
      <div className="py-20 bg-gradient-to-r from-blue-600 to-purple-600">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-white mb-6">Ready to Work With Us?</h2>
          <p className="text-xl text-blue-100 mb-8">
            Let's discuss how Zion Tech Group can help transform your business with cutting-edge technology solutions.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="mailto:kleber@ziontechgroup.com"
              className="bg-white text-blue-600 px-8 py-4 rounded-xl hover:bg-gray-100 transition-all duration-300 font-semibold text-lg shadow-2xl"
            >
              Contact Us
            </a>
            <a
              href="tel:+13024640950"
              className="bg-transparent border-2 border-white text-white px-8 py-4 rounded-xl hover:bg-white hover:text-blue-600 transition-all duration-300 font-semibold text-lg"
            >
              Call Us
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
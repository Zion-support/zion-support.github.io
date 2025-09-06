import React from 'react';

export default function About() {
  return (
    <div className="min-h-screen bg-gray-50 py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold text-gray-900 mb-6">About Zion Tech Group</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We are a leading technology company specializing in AI solutions, micro SaaS platforms, 
            and comprehensive IT services that drive digital transformation for businesses worldwide.
          </p>
        </div>

        {/* Mission & Vision */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          <div className="bg-white p-8 rounded-xl shadow-lg">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Mission</h2>
            <p className="text-lg text-gray-600 mb-4">
              To empower businesses with cutting-edge AI and IT solutions that accelerate growth, 
              enhance efficiency, and drive innovation in the digital age.
            </p>
            <p className="text-gray-600">
              We believe technology should be accessible, scalable, and transformative. Our mission 
              is to make advanced AI and IT capabilities available to businesses of all sizes.
            </p>
          </div>
          <div className="bg-white p-8 rounded-xl shadow-lg">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Vision</h2>
            <p className="text-lg text-gray-600 mb-4">
              To be the global leader in AI-powered business solutions, setting the standard for 
              innovation, reliability, and customer success in the technology industry.
            </p>
            <p className="text-gray-600">
              We envision a future where every business can leverage AI and advanced IT solutions 
              to achieve unprecedented growth and efficiency.
            </p>
          </div>
        </div>

        {/* Values */}
        <div className="mb-16">
          <h2 className="text-4xl font-bold text-center mb-12 text-gray-900">Our Core Values</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="text-5xl mb-4">🎯</div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Excellence</h3>
              <p className="text-gray-600">
                We strive for excellence in everything we do, delivering high-quality solutions 
                that exceed client expectations.
              </p>
            </div>
            <div className="text-center">
              <div className="text-5xl mb-4">🚀</div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Innovation</h3>
              <p className="text-gray-600">
                We embrace cutting-edge technologies and innovative approaches to solve complex 
                business challenges.
              </p>
            </div>
            <div className="text-center">
              <div className="text-5xl mb-4">🤝</div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Partnership</h3>
              <p className="text-gray-600">
                We build lasting partnerships with our clients, working collaboratively to achieve 
                their business goals.
              </p>
            </div>
          </div>
        </div>

        {/* Team Section */}
        <div className="mb-16">
          <h2 className="text-4xl font-bold text-center mb-12 text-gray-900">Our Team</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-xl shadow-lg text-center">
              <div className="w-24 h-24 bg-blue-100 rounded-full mx-auto mb-4 flex items-center justify-center">
                <span className="text-2xl font-bold text-blue-600">K</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Kleber</h3>
              <p className="text-blue-600 font-semibold mb-2">CEO & Founder</p>
              <p className="text-gray-600 text-sm">
                Visionary leader with 10+ years in AI and technology, driving innovation 
                and strategic growth.
              </p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-lg text-center">
              <div className="w-24 h-24 bg-green-100 rounded-full mx-auto mb-4 flex items-center justify-center">
                <span className="text-2xl font-bold text-green-600">A</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">AI Team</h3>
              <p className="text-green-600 font-semibold mb-2">Machine Learning Engineers</p>
              <p className="text-gray-600 text-sm">
                Expert data scientists and ML engineers building cutting-edge AI solutions 
                for enterprise clients.
              </p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-lg text-center">
              <div className="w-24 h-24 bg-purple-100 rounded-full mx-auto mb-4 flex items-center justify-center">
                <span className="text-2xl font-bold text-purple-600">D</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">DevOps Team</h3>
              <p className="text-purple-600 font-semibold mb-2">Infrastructure Specialists</p>
              <p className="text-gray-600 text-sm">
                Cloud architects and DevOps engineers ensuring scalable, secure, and 
                reliable infrastructure solutions.
              </p>
            </div>
          </div>
        </div>

        {/* Stats */}
        <div className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-xl p-8 mb-16">
          <h2 className="text-3xl font-bold text-center mb-8">Our Impact in Numbers</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold mb-2">500+</div>
              <div className="text-blue-100">Projects Completed</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">150+</div>
              <div className="text-blue-100">Happy Clients</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">99.9%</div>
              <div className="text-blue-100">Uptime Guarantee</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">24/7</div>
              <div className="text-blue-100">Support Available</div>
            </div>
          </div>
        </div>

        {/* Contact CTA */}
        <div className="bg-white rounded-xl p-8 shadow-lg text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Ready to Work With Us?</h2>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Let's discuss how we can help transform your business with our AI and IT solutions.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:+13024640950"
              className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
            >
              Call +1 302 464 0950
            </a>
            <a
              href="mailto:kleber@ziontechgroup.com"
              className="border-2 border-blue-600 text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-blue-600 hover:text-white transition-colors"
            >
              Email Us
            </a>
          </div>
          <div className="mt-6 text-gray-500">
            <p>📍 364 E Main St STE 1008, Middletown DE 19709</p>
          </div>
        </div>
      </div>
    </div>
  );
}
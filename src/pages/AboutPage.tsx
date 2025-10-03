import React from 'react';
import { Helmet } from 'react-helmet-async';

const AboutPage: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>About Us - Zion Tech Group</title>
        <meta name="description" content="Learn about Zion Tech Group's mission, values, and expertise in AI and technology solutions." />
      </Helmet>
      
      <div className="min-h-screen bg-gray-50">
        {/* Header */}
        <section className="bg-gradient-to-r from-indigo-600 to-blue-600 text-white py-16">
          <div className="container mx-auto px-6 text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">About Zion Tech Group</h1>
            <p className="text-xl text-indigo-100 max-w-3xl mx-auto">
              Leading the future of AI and technology solutions with innovation, expertise, and unwavering commitment to excellence.
            </p>
          </div>
        </section>

        {/* Mission Section */}
        <section className="py-16">
          <div className="container mx-auto px-6">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Mission</h2>
              <p className="text-lg text-gray-700 mb-8">
                To empower businesses and organizations with cutting-edge AI and technology solutions that drive innovation, 
                efficiency, and growth. We believe in the transformative power of technology and its ability to solve 
                complex challenges while creating sustainable value for our clients and society.
              </p>
            </div>
          </div>
        </section>

        {/* Values Section */}
        <section className="py-16 bg-gray-100">
          <div className="container mx-auto px-6">
            <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">Our Values</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="text-4xl mb-4">🚀</div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Innovation</h3>
                <p className="text-gray-700">
                  We continuously push the boundaries of what's possible with AI and technology.
                </p>
              </div>
              <div className="text-center">
                <div className="text-4xl mb-4">🎯</div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Excellence</h3>
                <p className="text-gray-700">
                  We maintain the highest standards in everything we do, from development to delivery.
                </p>
              </div>
              <div className="text-center">
                <div className="text-4xl mb-4">🤝</div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Collaboration</h3>
                <p className="text-gray-700">
                  We work closely with our clients as partners in their digital transformation journey.
                </p>
              </div>
              <div className="text-center">
                <div className="text-4xl mb-4">🔒</div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Integrity</h3>
                <p className="text-gray-700">
                  We conduct business with honesty, transparency, and ethical practices.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Expertise Section */}
        <section className="py-16">
          <div className="container mx-auto px-6">
            <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">Our Expertise</h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-white rounded-lg shadow-lg p-6">
                <div className="text-4xl mb-4">🤖</div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Artificial Intelligence</h3>
                <p className="text-gray-700">
                  Advanced AI solutions including machine learning, deep learning, natural language processing, 
                  and computer vision applications.
                </p>
              </div>
              <div className="bg-white rounded-lg shadow-lg p-6">
                <div className="text-4xl mb-4">☁️</div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Cloud Solutions</h3>
                <p className="text-gray-700">
                  Comprehensive cloud architecture, migration, and optimization services across all major platforms.
                </p>
              </div>
              <div className="bg-white rounded-lg shadow-lg p-6">
                <div className="text-4xl mb-4">🔧</div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Custom Development</h3>
                <p className="text-gray-700">
                  Bespoke software solutions tailored to meet specific business requirements and objectives.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Team Section */}
        <section className="py-16 bg-gray-100">
          <div className="container mx-auto px-6">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Team</h2>
              <p className="text-lg text-gray-700 mb-8">
                Our team consists of world-class engineers, data scientists, and technology experts who are 
                passionate about creating innovative solutions. With decades of combined experience in AI, 
                cloud computing, and software development, we bring deep technical expertise and industry 
                knowledge to every project.
              </p>
              <div className="grid md:grid-cols-3 gap-8">
                <div className="text-center">
                  <div className="text-6xl mb-4">👨‍💻</div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Engineers</h3>
                  <p className="text-gray-700">Expert software developers and system architects</p>
                </div>
                <div className="text-center">
                  <div className="text-6xl mb-4">🧠</div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Data Scientists</h3>
                  <p className="text-gray-700">AI and machine learning specialists</p>
                </div>
                <div className="text-center">
                  <div className="text-6xl mb-4">🎯</div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Consultants</h3>
                  <p className="text-gray-700">Strategic technology advisors</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-indigo-600 text-white">
          <div className="container mx-auto px-6 text-center">
            <h2 className="text-3xl font-bold mb-6">Ready to Work With Us?</h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto">
              Let's discuss how Zion Tech Group can help transform your business with cutting-edge AI and technology solutions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/contact"
                className="inline-flex items-center justify-center px-8 py-4 bg-white text-indigo-600 font-bold rounded-lg hover:bg-gray-100 transition-colors"
              >
                Get In Touch
              </a>
              <a
                href="/services"
                className="inline-flex items-center justify-center px-8 py-4 border-2 border-white text-white font-bold rounded-lg hover:bg-white hover:text-indigo-600 transition-colors"
              >
                Our Services
              </a>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default AboutPage;
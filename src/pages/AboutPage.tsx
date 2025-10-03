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
              Leading the transformation of businesses through cutting-edge AI and technology solutions.
            </p>
          </div>
        </section>

        {/* Mission Section */}
        <section className="py-20">
          <div className="container mx-auto px-6">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Mission</h2>
              <p className="text-xl text-gray-600 mb-8">
                To empower businesses of all sizes with innovative AI and technology solutions that drive growth, 
                efficiency, and competitive advantage in the digital age.
              </p>
            </div>
          </div>
        </section>

        {/* Values Section */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-6">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">Our Values</h2>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                <div className="text-center">
                  <h3 className="text-xl font-bold text-gray-900 mb-4">Innovation</h3>
                  <p className="text-gray-600">
                    We stay at the forefront of technology to deliver cutting-edge solutions.
                  </p>
                </div>
                <div className="text-center">
                  <h3 className="text-xl font-bold text-gray-900 mb-4">Excellence</h3>
                  <p className="text-gray-600">
                    We maintain the highest standards in everything we do.
                  </p>
                </div>
                <div className="text-center">
                  <h3 className="text-xl font-bold text-gray-900 mb-4">Partnership</h3>
                  <p className="text-gray-600">
                    We build lasting relationships with our clients and partners.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section className="py-20 bg-gray-100">
          <div className="container mx-auto px-6 text-center">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">Get in Touch</h2>
            <p className="text-xl text-gray-600 mb-8">
              Ready to transform your business with AI and technology?
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="tel:+13024640950"
                className="bg-blue-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
              >
                Call +1 302 464 0950
              </a>
              <a 
                href="mailto:kleber@ziontechgroup.com"
                className="border-2 border-blue-600 text-blue-600 px-8 py-4 rounded-lg font-semibold hover:bg-blue-50 transition-colors"
              >
                Email Us
              </a>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default AboutPage;
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
              <p className="text-lg text-gray-600">
                We believe that every organization, regardless of size, deserves access to enterprise-grade 
                technology solutions that can transform their operations and accelerate their success.
              </p>
            </div>
          </div>
        </section>

        {/* Values Section */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Values</h2>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                The principles that guide everything we do
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="text-4xl mb-4">🚀</div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Innovation</h3>
                <p className="text-gray-600">
                  We stay at the forefront of technology, continuously exploring new ways to solve complex business challenges.
                </p>
              </div>
              
              <div className="text-center">
                <div className="text-4xl mb-4">🤝</div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Partnership</h3>
                <p className="text-gray-600">
                  We work closely with our clients as trusted partners, understanding their unique needs and goals.
                </p>
              </div>
              
              <div className="text-center">
                <div className="text-4xl mb-4">⭐</div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Excellence</h3>
                <p className="text-gray-600">
                  We deliver high-quality solutions that exceed expectations and drive measurable results.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Expertise Section */}
        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Expertise</h2>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                Deep technical knowledge across multiple domains
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="bg-white p-6 rounded-xl shadow-sm">
                <h3 className="text-xl font-bold text-gray-900 mb-2">Artificial Intelligence</h3>
                <p className="text-gray-600">Machine Learning, NLP, Computer Vision, Predictive Analytics</p>
              </div>
              
              <div className="bg-white p-6 rounded-xl shadow-sm">
                <h3 className="text-xl font-bold text-gray-900 mb-2">Cloud Solutions</h3>
                <p className="text-gray-600">AWS, Azure, GCP, Hybrid Cloud, Serverless Architecture</p>
              </div>
              
              <div className="bg-white p-6 rounded-xl shadow-sm">
                <h3 className="text-xl font-bold text-gray-900 mb-2">Software Development</h3>
                <p className="text-gray-600">Full-Stack Development, Microservices, API Design, DevOps</p>
              </div>
              
              <div className="bg-white p-6 rounded-xl shadow-sm">
                <h3 className="text-xl font-bold text-gray-900 mb-2">Data & Analytics</h3>
                <p className="text-gray-600">Big Data, Business Intelligence, Real-time Analytics, Data Science</p>
              </div>
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-20 bg-blue-600 text-white">
          <div className="container mx-auto px-6">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
              <div>
                <div className="text-4xl font-bold mb-2">50+</div>
                <div className="text-blue-100">Projects Completed</div>
              </div>
              
              <div>
                <div className="text-4xl font-bold mb-2">25+</div>
                <div className="text-blue-100">Happy Clients</div>
              </div>
              
              <div>
                <div className="text-4xl font-bold mb-2">5+</div>
                <div className="text-blue-100">Years Experience</div>
              </div>
              
              <div>
                <div className="text-4xl font-bold mb-2">24/7</div>
                <div className="text-blue-100">Support Available</div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20">
          <div className="container mx-auto px-6 text-center">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Ready to Work Together?</h2>
            <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
              Let's discuss how we can help transform your business with our technology solutions.
            </p>
            <a 
              href="/contact" 
              className="bg-blue-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-blue-700 transition-colors inline-block"
            >
              Get in Touch
            </a>
          </div>
        </section>
      </div>
    </>
  );
};

export default AboutPage;
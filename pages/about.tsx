import React from 'react';
import Layout from '../components/Layout';

const AboutPage: React.FC = () => {
  return (
    <Layout 
      title="About Us - Zion Tech Group" 
      description="Learn about Zion Tech Group's mission, values, and the expert team behind our cutting-edge technology solutions."
    >
      <section className="bg-white">
        <div className="container mx-auto px-4 py-12">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">About Zion Tech Group</h1>
            <p className="text-xl text-gray-600 mb-8">
              We are a leading technology solutions provider dedicated to transforming businesses through innovative AI, cloud architecture, and cutting-edge development services.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16">
              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Our Mission</h2>
                <p className="text-gray-600 mb-4">
                  To empower businesses with cutting-edge technology solutions that drive growth, efficiency, and innovation. We believe in the transformative power of technology to solve complex business challenges.
                </p>
                <p className="text-gray-600">
                  Our mission is to bridge the gap between emerging technologies and practical business applications, ensuring our clients stay ahead in the digital landscape.
                </p>
              </div>
              
              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Our Vision</h2>
                <p className="text-gray-600 mb-4">
                  To be the global leader in technology consulting and development, recognized for our innovative solutions, exceptional service, and commitment to client success.
                </p>
                <p className="text-gray-600">
                  We envision a future where technology seamlessly integrates with business operations, creating unprecedented opportunities for growth and success.
                </p>
              </div>
            </div>

            <div className="mb-16">
              <h2 className="text-3xl font-bold text-gray-900 mb-8">Our Values</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="text-center">
                  <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl">🚀</span>
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">Innovation</h3>
                  <p className="text-gray-600">We continuously explore new technologies and methodologies to deliver cutting-edge solutions.</p>
                </div>
                
                <div className="text-center">
                  <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl">🤝</span>
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">Collaboration</h3>
                  <p className="text-gray-600">We work closely with our clients as partners, ensuring their success is our success.</p>
                </div>
                
                <div className="text-center">
                  <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl">⭐</span>
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">Excellence</h3>
                  <p className="text-gray-600">We maintain the highest standards in everything we do, from code quality to client service.</p>
                </div>
              </div>
            </div>

            <div className="mb-16">
              <h2 className="text-3xl font-bold text-gray-900 mb-8">Our Expertise</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                <div className="bg-gray-50 p-6 rounded-lg">
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">AI & Machine Learning</h3>
                  <p className="text-gray-600 text-sm">Advanced AI solutions, predictive analytics, and intelligent automation.</p>
                </div>
                
                <div className="bg-gray-50 p-6 rounded-lg">
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">Cloud Architecture</h3>
                  <p className="text-gray-600 text-sm">Scalable cloud solutions on AWS, Azure, and Google Cloud Platform.</p>
                </div>
                
                <div className="bg-gray-50 p-6 rounded-lg">
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">Web & Mobile Development</h3>
                  <p className="text-gray-600 text-sm">Modern web applications and mobile solutions using latest technologies.</p>
                </div>
                
                <div className="bg-gray-50 p-6 rounded-lg">
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">Cybersecurity</h3>
                  <p className="text-gray-600 text-sm">Comprehensive security solutions to protect your digital assets.</p>
                </div>
              </div>
            </div>

            <div className="text-center">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Ready to Transform Your Business?</h2>
              <p className="text-gray-600 mb-8">Let's discuss how our expertise can help you achieve your technology goals.</p>
              <a 
                href="/contact" 
                className="inline-block bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors"
              >
                Get in Touch
              </a>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default AboutPage;
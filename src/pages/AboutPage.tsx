import React from 'react';
import { Helmet } from 'react-helmet-async';

const AboutPage: React.FC = () => {
const values = [
{
icon: Brain,
title: 'Innovation',
description: 'Pushing the boundaries of AI technology to create revolutionary solutions'
}
    {
      icon: Brain,
      title: 'Innovation',
      description: 'Pushing the boundaries of AI technology to create revolutionary solutions'
    }
    {
      icon: Shield,
      title: 'Security'
      description: 'Ensuring enterprise-grade security and compliance in all our solutions'
    }
    {
icon: Award,
title: 'Excellence',
description: 'Delivering exceptional results with proven ROI and measurable impact'
}
  ];

  const milestones = [
    { year: '2020', event: 'Founded Zion Tech Group' }
    { year: '2021', event: 'First Fortune 500 client' }
    { year: '2022', event: 'AI breakthrough platform launch' }
    { year: '2023', event: '100+ enterprise clients' }
    { year: '2024', event: 'Quantum computing integration' }
    { year: '2025', event: '240+ Fortune 500 clients' }
  ];

  return (
    <>
      <Helmet>
        <title>About Us - Zion Tech Group</title>
        <meta name="description" content="Learn about Zion Tech Group's mission, values, and commitment to delivering innovative AI and IT solutions." />
      </Helmet>
      
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              About Zion Tech Group
            </h1>
            <p className="text-xl text-gray-600">
              Pioneering the future of technology with innovative AI solutions and digital transformation.
            </p>
          </div>

          <div className="prose prose-lg max-w-none">
            <section className="mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Mission</h2>
              <p className="text-gray-700 leading-relaxed mb-6">
                At Zion Tech Group, we are dedicated to empowering businesses through cutting-edge 
                artificial intelligence and information technology solutions. Our mission is to 
                accelerate digital transformation and drive innovation across industries.
              </p>
              <p className="text-gray-700 leading-relaxed">
                We believe that technology should be accessible, scalable, and transformative. 
                Our team of experts works tirelessly to deliver solutions that not only meet 
                current needs but anticipate future challenges.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Values</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="bg-white p-6 rounded-lg shadow-md">
                  <h3 className="text-xl font-bold text-gray-900 mb-3">Innovation</h3>
                  <p className="text-gray-700">
                    We continuously push the boundaries of what's possible with technology, 
                    always seeking new ways to solve complex problems.
                  </p>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-md">
                  <h3 className="text-xl font-bold text-gray-900 mb-3">Excellence</h3>
                  <p className="text-gray-700">
                    We maintain the highest standards in everything we do, from code quality 
                    to customer service.
                  </p>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-md">
                  <h3 className="text-xl font-bold text-gray-900 mb-3">Integrity</h3>
                  <p className="text-gray-700">
                    We conduct business with honesty, transparency, and ethical practices 
                    in all our interactions.
                  </p>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-md">
                  <h3 className="text-xl font-bold text-gray-900 mb-3">Collaboration</h3>
                  <p className="text-gray-700">
                    We work closely with our clients as partners, ensuring their success 
                    is our success.
                  </p>
                </div>
              </div>
            </section>

            <section className="mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Expertise</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="text-center">
                  <div className="text-4xl mb-4">🤖</div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">AI & Machine Learning</h3>
                  <p className="text-gray-600">Advanced algorithms and intelligent automation</p>
                </div>
                <div className="text-center">
                  <div className="text-4xl mb-4">☁️</div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Cloud Computing</h3>
                  <p className="text-gray-600">Scalable infrastructure and migration services</p>
                </div>
                <div className="text-center">
                  <div className="text-4xl mb-4">🔒</div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Cybersecurity</h3>
                  <p className="text-gray-600">Protecting digital assets and ensuring compliance</p>
                </div>
              </div>
            </section>

            <section className="text-center bg-gray-50 rounded-lg p-8">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Ready to Work With Us?
              </h2>
              <p className="text-gray-600 mb-6">
                Let's discuss how we can help transform your business with innovative technology solutions.
              </p>
              <button className="bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition-colors">
                Contact Us Today
              </button>
            </section>
          </div>
        </div>
      </div>
    </>
  );
};

export default AboutPage;
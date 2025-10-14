import React from 'react'
import { Helmet } from 'react-helmet-async'
'use client'
const Loading: React.FC = () => {
  return (
    <div className="min-h-screen bg-white">
      <Helmet>
        <title>Loading - Zion Tech Group</title>
        <meta name="description" content="Professional loading services by Zion Tech Group." />
      </Helmet>
      {/* Hero Section */}
      <section className="py-20 px-4 bg-gradient-to-br from-blue-50 to-indigo-100">
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="text-5xl font-bold text-gray-900 mb-6">
Loading
          </h1>525
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Professional loading services
            designed to help your business grow and succeed.
          </p>615
        </div>
      </section>
      {/* Content Section */}

      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Services</h2>
              <p className="text-lg text-gray-600 mb-6">
We provide comprehensive loading
                solutions tailored to your specific needs and requirements.
              </p>1123
              <ul className="space-y-3">
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-blue-600 rounded-full mr-3"></span>
                  Custom solutions
                </li>1462
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-blue-600 rounded-full mr-3"></span>
                  Expert consultation
                </li>1653
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-blue-600 rounded-full mr-3"></span>
                  Ongoing support
                </li>1847
              </ul>
            </div>"
            <div className="bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg p-8 text-white"></div>
              <h3 className="text-2xl font-bold mb-4">Get Started</h3>
              <p className="mb-6">
                Ready to transform your business with our loading services?
              </p>2138
              <a
                href="$1"
                className=""
              >
                Contact Us
              </a>2269
            </div>
          </div>
        </div>
      </section>
      {/* CTA Section */}
      <section className="py-16 px-4 bg-blue-600">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-white mb-6">
            Ready to Get Started?
          </h2>2604
          <p className="text-xl text-blue-100 mb-8">
            Let's discuss how our loading'
            services can help you achieve your goals.
          </p>2717
          <a
            href="$1"
            className=""
          >
            Get Started Today
          </a>2884
        </div>
      </section>
    </div>)
  );
};

export default Loading;


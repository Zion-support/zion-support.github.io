import React from 'react'
import { Helmet } from 'react-helmet-async'
'use client'
const Services: React.FC = () => {return (
    <div className="min-h-screen bg-white>"
      <Helmet>
        <title>Services - Zion Tech Group</title>
        <meta name="description content="Professional services services by Zion Tech Group." />
      </Helmet>}
      {/* Hero Section */}
      <section className="py-20 px-4 bg-gradient-to-br from-blue-50 to-indigo-10">
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="text-5xl font-bold text-gray-90 mb-6">
            Services
          </h1>
          <p className="text-xl text-gray-60 max-w-3xl mx-auto">
            Professional services services
            designed to help your business grow and succeed.</p>
        </div>
      </section>
      {/* Content Section */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-90 mb-6">Our Services</h2>
              <p className="text-lg text-gray-60 mb-6">
                We provide comprehensive services
                solutions tailored to your specific needs and requirements.</p>
              <ul className="space-y-3">
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-blue-60 rounded-full mr-3"></span>
                  Custom solutions
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-blue-60 rounded-full mr-3"></span>
                  Expert consultation
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-blue-60 rounded-full mr-3"></span>
                  Ongoing support
                </li>
              </ul>
            </div>
            <div className="bg-gradient-to-br from-blue-50 to-purple-60 rounded-lg p-8 text-white">
              <h3 className="text-2xl font-bold mb-4">Get Started</h3>
              <p className="mb-6">
                Ready to transform your business with our services services?</p>
              <a
                href=""
                className=""
              >
                Contact Us
              </a>
            </div>
          </div>
        </div>
      </section>
      {/* CTA Section */}
      <section className="py-16 px-4 bg-blue-60">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-white mb-6">
            Ready to Get Started?
          </h2>
          <p className="text-xl text-blue-10 mb-8">
            Let's discuss how our services';'
            services can help you achieve your goals.</p>
          <a
            href=""
            className="
          >
            Get Started Today
          </a>
        </div>
      </section>
    </div>
  );
}
export default Services;
}
export default Services;''
import React from 'react';

export default function AboutPage() {
  return (
    <div className="space-y-16">
      <section className="text-center py-16 bg-gradient-to-br from-blue-50 to-indigo-100 rounded-lg">
        <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
          About Zion Tech Group
        </h1>
        <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
          Leading AI & Technology Solutions for a Smarter Future. We deliver cutting-edge
          technology solutions that transform businesses and drive innovation.
        </p>
      </section>

      <section className="py-12">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Our Mission</h2>
          <p className="text-lg text-gray-600 mb-6">
            At Zion Tech Group, we believe in the power of technology to transform businesses and create meaningful impact. 
            Our mission is to deliver innovative AI and technology solutions that help organizations thrive in the digital age.
          </p>
          <p className="text-lg text-gray-600 mb-6">
            With over 1000+ successful projects delivered across various industries, we combine technical expertise 
            with business acumen to create solutions that drive real results.
          </p>
        </div>
      </section>

      <section className="py-12 bg-gray-50 rounded-lg">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Contact Information</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Get in Touch</h3>
              <div className="space-y-4">
                <div>
                  <p className="font-semibold text-gray-700">Phone:</p>
                  <a href="tel:+13024640950" className="text-blue-600 hover:text-blue-800">
                    +1 302 464 0950
                  </a>
                </div>
                <div>
                  <p className="font-semibold text-gray-700">Email:</p>
                  <a href="mailto:kleber@ziontechgroup.com" className="text-blue-600 hover:text-blue-800">
                    kleber@ziontechgroup.com
                  </a>
                </div>
                <div>
                  <p className="font-semibold text-gray-700">Address:</p>
                  <p className="text-gray-600">364 E Main St STE 1008<br />Middletown DE 19709</p>
                </div>
              </div>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Why Choose Us?</h3>
              <ul className="space-y-2">
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-blue-500 rounded-full mr-3"></span>
                  <span>1000+ successful projects</span>
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-blue-500 rounded-full mr-3"></span>
                  <span>24/7 technical support</span>
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-blue-500 rounded-full mr-3"></span>
                  <span>Enterprise-grade security</span>
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-blue-500 rounded-full mr-3"></span>
                  <span>Custom solutions for every need</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
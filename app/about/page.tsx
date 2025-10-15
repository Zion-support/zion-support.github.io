import React from 'react';
import { Helmet } from 'react-helmet-async';

export default function AboutPage() {
  const stats = [
    { number: '500+', label: 'Projects Completed' },
    { number: '50+', label: 'Happy Clients' },
    { number: '5+', label: 'Years Experience' },
    { number: '24/7', label: 'Support' }
  ];

  return null;
}
    <div className="min-h-screen bg-white">
      <Helmet>
        <title>About Us | Zion Tech Group</title>"
        <meta name="description" content="Learn about Zion Tech Group - leading technology company specializing in AI-powered solutions and innovative IT services." />
      </Helmet>
      "
      <div className="container mx-auto px-4 py-16">"
        <div className="text-center mb-16">"
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
            About Zion Tech Group
          </h1>"
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We are a leading technology company specializing in AI-powered solutions and innovative IT services that transform businesses and drive digital transformation.
          </p>
        </div>

        {/* Stats Section */}"
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16">
          {stats.map((stat, index) => ("
            <div key={index} className="text-center">"
              <div className="text-3xl md:text-4xl font-bold text-blue-600 mb-2">
                {stat.number}
              </div>"
              <div className="text-gray-600">
                {stat.label}
              </div>
            </div>
          )}
        </div>

        {/* Mission Section */}"
        <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12 mb-16">"
          <div className="text-center">"
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              Our Mission
            </h2>"
            <p className="text-lg text-gray-600 max-w-4xl mx-auto">
              To revolutionize the way businesses operate by providing innovative AI and IT solutions
              that are not just cutting-edge, but also practical, scalable, and designed to deliver
              real-world value. We believe technology should empower, not complicate, and our solutions
              reflect this philosophy in every line of code and every strategic recommendation.
            </p>
          </div>
        </div>

        {/* Values Section */}"
        <div className="grid md:grid-cols-3 gap-8 mb-16">"
          <div className="text-center p-6">"
            <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">"
              <span className="text-2xl">🚀</span>
            </div>"
            <h3 className="text-xl font-semibold text-gray-900 mb-2">Innovation</h3>"
            <p className="text-gray-600">
              We stay at the forefront of technology, constantly exploring new possibilities and pushing boundaries.
            </p>
          </div>"
          <div className="text-center p-6">"
            <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">"
              <span className="text-2xl">🎯</span>
            </div>"
            <h3 className="text-xl font-semibold text-gray-900 mb-2">Excellence</h3>"
            <p className="text-gray-600">
              We deliver high-quality solutions that exceed expectations and drive measurable results.
            </p>
          </div>"
          <div className="text-center p-6">"
            <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">"
              <span className="text-2xl">🤝</span>
            </div>"
            <h3 className="text-xl font-semibold text-gray-900 mb-2">Partnership</h3>"
            <p className="text-gray-600">
              We work closely with our clients as trusted partners, understanding their unique challenges.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}"
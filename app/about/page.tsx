import React from 'react';

export const metadata = {
  title: "About | Zion Tech Group",
  description: "Learn about Zion Tech Group's mission to deliver enterprise-grade AI, micro SaaS, and IT solutions that drive real business results.",
};

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-gray-50">
      <div className="max-w-6xl mx-auto px-4 py-16">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">About Zion Tech Group</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We're a team of passionate technologists dedicated to delivering enterprise-grade solutions that drive real business results.
          </p>
        </div>
        
        <div className="prose prose-lg max-w-none">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
            <div>
              <h2 className="text-2xl font-semibold text-gray-900 mb-6">Our Mission</h2>
              <p className="text-gray-600 mb-4">
                To accelerate digital transformation through cutting-edge AI, micro SaaS, and IT solutions that deliver measurable business value.
              </p>
              <p className="text-gray-600">
                We believe technology should be an enabler, not a barrier. Our solutions are designed to be intuitive, scalable, and results-driven.
              </p>
            </div>
            
            <div>
              <h2 className="text-2xl font-semibold text-gray-900 mb-6">Our Values</h2>
              <ul className="space-y-3 text-gray-600">
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-blue-500 rounded-full mr-3 mt-2"></span>
                  <span>Innovation: We stay ahead of the curve with emerging technologies</span>
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-blue-500 rounded-full mr-3 mt-2"></span>
                  <span>Quality: We deliver solutions that exceed expectations</span>
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-blue-500 rounded-full mr-3 mt-2"></span>
                  <span>Partnership: We work closely with our clients as trusted advisors</span>
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-blue-500 rounded-full mr-3 mt-2"></span>
                  <span>Results: We measure success by business impact, not just technical metrics</span>
                </li>
              </ul>
            </div>
          </div>
          
          <div className="bg-white rounded-lg shadow-md p-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-6">Why Choose Zion Tech Group?</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="text-4xl mb-4">🚀</div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Rapid Delivery</h3>
                <p className="text-gray-600">We deliver solutions faster without compromising quality</p>
              </div>
              <div className="text-center">
                <div className="text-4xl mb-4">🔧</div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Expert Team</h3>
                <p className="text-gray-600">Our team combines deep technical expertise with business acumen</p>
              </div>
              <div className="text-center">
                <div className="text-4xl mb-4">📈</div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Proven Results</h3>
                <p className="text-gray-600">We've helped 500+ companies achieve their digital transformation goals</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
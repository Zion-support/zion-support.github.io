import React from 'react';
import SEOHead from '../components/SEOHead';

const AboutPage: React.FC = () => {
  return (
    <>
      <SEOHead
        title="About Us - Zion Tech Group"
        description="Learn about Zion Tech Group's mission to provide cutting-edge AI and IT solutions. Our team of experts is dedicated to transforming businesses through innovative technology."
      />
      <div className="min-h-screen bg-slate-900 text-white py-20">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-16">
            <h1 className="text-5xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">
              About Zion Tech Group
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              We are a leading technology company specializing in AI solutions, micro-SaaS development, and comprehensive IT services.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
            <div>
              <h2 className="text-3xl font-bold mb-6">Our Mission</h2>
              <p className="text-gray-300 mb-6">
                To empower businesses with cutting-edge AI and IT solutions that drive innovation, efficiency, and growth. We believe technology should be accessible, powerful, and transformative.
              </p>
              <p className="text-gray-300">
                Our team of expert developers, data scientists, and IT professionals work tirelessly to deliver solutions that not only meet today's needs but anticipate tomorrow's challenges.
              </p>
            </div>
            <div>
              <h2 className="text-3xl font-bold mb-6">Our Vision</h2>
              <p className="text-gray-300 mb-6">
                To be the global leader in AI-powered business solutions, helping organizations of all sizes harness the power of artificial intelligence and modern technology.
              </p>
              <p className="text-gray-300">
                We envision a future where every business can leverage AI and advanced IT infrastructure to achieve unprecedented levels of success and innovation.
              </p>
            </div>
          </div>

          <div className="bg-slate-800 p-8 rounded-lg">
            <h2 className="text-3xl font-bold mb-6 text-center">Why Choose Zion Tech Group?</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-2">Innovation</h3>
                <p className="text-gray-300">Cutting-edge solutions using the latest AI and technology trends</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-cyan-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-2">Reliability</h3>
                <p className="text-gray-300">Proven track record of delivering high-quality, scalable solutions</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-2">Expertise</h3>
                <p className="text-gray-300">Experienced team with deep knowledge in AI, cloud, and enterprise solutions</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AboutPage;

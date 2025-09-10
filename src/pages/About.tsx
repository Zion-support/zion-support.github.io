import React from 'react';
import SEO from '../components/SEO';

export default function About() {
  return (
    <>
      <SEO 
        title="About Us - Zion Tech Group"
        description="Learn about Zion Tech Group's mission, vision, and team of experts."
      />
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-700">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="text-center">
            <h1 className="text-4xl font-bold text-white mb-6">About Zion Tech Group</h1>
            <p className="text-xl text-slate-300 mb-8">
              We are a leading technology company specializing in AI-powered solutions and innovative business automation.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
              <div className="bg-slate-800/50 rounded-lg p-6">
                <h3 className="text-xl font-semibold text-white mb-4">Our Mission</h3>
                <p className="text-slate-300">
                  To empower businesses with cutting-edge AI technology and innovative solutions that drive growth and digital transformation.
                </p>
              </div>
              <div className="bg-slate-800/50 rounded-lg p-6">
                <h3 className="text-xl font-semibold text-white mb-4">Our Vision</h3>
                <p className="text-slate-300">
                  To be the global leader in AI-powered business solutions, transforming how companies operate and compete.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
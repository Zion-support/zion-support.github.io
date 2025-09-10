import React from 'react';
import SEO from '../components/SEO';

const About = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      <SEO 
        title="About Us - Zion Tech Group"
        description="Learn about Zion Tech Group's mission to revolutionize business through AI and technology solutions."
        keywords={["about", "company", "mission", "team", "Zion Tech Group"]}
      />
      <div className="max-w-4xl mx-auto px-4 py-20">
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold text-white mb-6">About Zion Tech Group</h1>
          <p className="text-xl text-gray-300">
            Pioneering the future of AI and technology solutions
          </p>
        </div>
        
        <div className="prose prose-lg prose-invert max-w-none">
          <div className="bg-slate-800/50 rounded-lg p-8 mb-8">
            <h2 className="text-3xl font-bold text-white mb-4">Our Mission</h2>
            <p className="text-gray-300 text-lg">
              At Zion Tech Group, we are dedicated to transforming businesses through innovative AI and technology solutions. 
              Our mission is to empower organizations with cutting-edge tools and strategies that drive growth, efficiency, and success.
            </p>
          </div>
          
          <div className="bg-slate-800/50 rounded-lg p-8 mb-8">
            <h2 className="text-3xl font-bold text-white mb-4">What We Do</h2>
            <p className="text-gray-300 text-lg">
              We specialize in AI-powered solutions, cloud computing, cybersecurity, and digital transformation services. 
              Our team of experts works closely with clients to understand their unique challenges and deliver tailored solutions that exceed expectations.
            </p>
          </div>
          
          <div className="bg-slate-800/50 rounded-lg p-8">
            <h2 className="text-3xl font-bold text-white mb-4">Our Vision</h2>
            <p className="text-gray-300 text-lg">
              To be the leading provider of AI and technology solutions, helping businesses worldwide achieve their full potential 
              through innovative, reliable, and scalable technology implementations.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
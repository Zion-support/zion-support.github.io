import React from 'react';
import { Helmet } from 'react-helmet-async';
import { 
  HeartIcon,
  PhoneIcon,
  EnvelopeIcon,
  MapPinIcon
} from '@heroicons/react/24/outline';

export default function AboutPage() {
  return (
    <>
      <Helmet>
        <title>About Us - Zion Tech Group</title>
        <meta name="description" content="Learn about Zion Tech Group's mission and team" />
      </Helmet>

      <div className="min-h-screen bg-slate-900 text-white">
        <div className="container mx-auto px-4 py-20">
          <div className="text-center mb-16">
            <h1 className="text-5xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">
              About Zion Tech Group
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              We are a leading technology company specializing in AI solutions, cybersecurity, 
              and digital transformation services.
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-8 mb-16">
            <div className="text-center">
              <div className="text-4xl font-bold text-purple-400 mb-2">50+</div>
              <div className="text-gray-300">Projects Completed</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-cyan-400 mb-2">25+</div>
              <div className="text-gray-300">Happy Clients</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-green-400 mb-2">99%</div>
              <div className="text-gray-300">Success Rate</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-yellow-400 mb-2">4+</div>
              <div className="text-gray-300">Years Experience</div>
            </div>
          </div>

          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-8">Our Mission</h2>
            <p className="text-lg text-gray-300 leading-relaxed mb-8">
              To empower businesses with cutting-edge technology solutions that drive innovation, 
              enhance security, and accelerate digital transformation. We believe in the power of 
              technology to solve complex challenges and create meaningful impact.
            </p>
            
            <h2 className="text-3xl font-bold mb-8">Our Vision</h2>
            <p className="text-lg text-gray-300 leading-relaxed">
              To be the world's leading provider of AI-powered solutions and digital transformation 
              services, helping organizations thrive in the digital age while maintaining the highest 
              standards of security and innovation.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
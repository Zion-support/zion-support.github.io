import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { ArrowRight, Users, Target, Award } from 'lucide-react';

export default function About() {
  return (
    <>
      <Helmet>
        <title>About - Zion Tech Group</title>
        <meta name="description" content="Learn about Zion Tech Group, a leading technology company dedicated to transforming businesses through innovative AI and IT solutions." />
      </Helmet>
      
      <div className="min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900">
        <div className="container mx-auto px-4 py-16">
          <div className="text-center mb-16">
            <h1 className="text-4xl font-bold text-white mb-6">About Zion Tech Group</h1>
            <p className="text-lg text-gray-300 mb-8 max-w-3xl mx-auto">
              We are a leading technology company dedicated to transforming businesses through innovative AI and IT solutions.
            </p>
          </div>

          {/* Mission & Vision */}
          <div className="grid md:grid-cols-2 gap-8 mb-16">
            <div className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-8 border border-gray-700">
              <div className="flex items-center mb-4">
                <Target className="w-8 h-8 text-blue-400 mr-3" />
                <h2 className="text-2xl font-semibold text-white">Our Mission</h2>
              </div>
              <p className="text-gray-300">
                To empower businesses with cutting-edge AI and IT solutions that drive innovation, 
                efficiency, and growth in the digital age.
              </p>
            </div>

            <div className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-8 border border-gray-700">
              <div className="flex items-center mb-4">
                <Award className="w-8 h-8 text-green-400 mr-3" />
                <h2 className="text-2xl font-semibold text-white">Our Vision</h2>
              </div>
              <p className="text-gray-300">
                To be the global leader in AI and IT solutions, creating a future where technology 
                seamlessly integrates with business operations.
              </p>
            </div>
          </div>

          {/* Team Section */}
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-white mb-8">Our Team</h2>
            <p className="text-lg text-gray-300 mb-8 max-w-2xl mx-auto">
              Our diverse team of experts brings together decades of experience in AI, machine learning, 
              software development, and business consulting.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                to="/careers" 
                className="inline-flex items-center px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors"
              >
                <Users className="mr-2 h-5 w-5" />
                Meet Our Team
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
              
              <Link 
                to="/contact" 
                className="inline-flex items-center px-6 py-3 border border-white text-white font-semibold rounded-lg hover:bg-white hover:text-gray-900 transition-colors"
              >
                Work With Us
              </Link>
            </div>
          </div>

          {/* Values */}
          <div className="bg-gray-800/30 backdrop-blur-sm rounded-2xl p-12 border border-gray-700">
            <h2 className="text-3xl font-bold text-white text-center mb-8">Our Values</h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <h3 className="text-xl font-semibold text-white mb-4">Innovation</h3>
                <p className="text-gray-300">
                  We constantly push the boundaries of what's possible with technology.
                </p>
              </div>
              <div className="text-center">
                <h3 className="text-xl font-semibold text-white mb-4">Excellence</h3>
                <p className="text-gray-300">
                  We deliver high-quality solutions that exceed our clients' expectations.
                </p>
              </div>
              <div className="text-center">
                <h3 className="text-xl font-semibold text-white mb-4">Integrity</h3>
                <p className="text-gray-300">
                  We maintain the highest standards of honesty and transparency in all our work.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
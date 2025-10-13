import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Users, Award, Target, Globe } from 'lucide-react';

const AboutPage: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>About Us - Zion Tech Group</title>
        <meta name="description" content="Learn about Zion Tech Group, a leading provider of AI-powered solutions and IT services." />
      </Helmet>

      <div className="min-h-screen pt-16">
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
                About Zion Tech Group
              </h1>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                We are a leading technology company specializing in AI-powered solutions, 
                IT services, and digital transformation for modern businesses.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
              <div className="text-center">
                <Users className="w-12 h-12 text-cyan-400 mx-auto mb-4" />
                <h3 className="text-2xl font-bold text-white mb-2">10,000+</h3>
                <p className="text-gray-300">Happy Clients</p>
              </div>
              <div className="text-center">
                <Award className="w-12 h-12 text-green-400 mx-auto mb-4" />
                <h3 className="text-2xl font-bold text-white mb-2">500+</h3>
                <p className="text-gray-300">Projects Completed</p>
              </div>
              <div className="text-center">
                <Target className="w-12 h-12 text-purple-400 mx-auto mb-4" />
                <h3 className="text-2xl font-bold text-white mb-2">99.9%</h3>
                <p className="text-gray-300">Uptime SLA</p>
              </div>
              <div className="text-center">
                <Globe className="w-12 h-12 text-blue-400 mx-auto mb-4" />
                <h3 className="text-2xl font-bold text-white mb-2">50+</h3>
                <p className="text-gray-300">Countries Served</p>
              </div>
            </div>

            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-lg p-8">
              <h2 className="text-3xl font-bold text-white mb-6">Our Mission</h2>
              <p className="text-lg text-gray-300 leading-relaxed">
                To empower businesses with cutting-edge AI and technology solutions that drive growth, 
                efficiency, and innovation. We believe in the transformative power of technology and 
                are committed to delivering exceptional value to our clients through innovative solutions 
                and expert guidance.
              </p>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default AboutPage;

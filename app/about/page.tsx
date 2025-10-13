'use client';
import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Users, Award, Target, Globe, Shield, Zap } from 'lucide-react';

export default function AboutPage() {
  return (
    <>
      <Helmet>
        <title>About Us - Zion Tech Group</title>
        <meta name="description" content="Learn about Zion Tech Group's mission to transform businesses with cutting-edge technology solutions." />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        {/* Hero Section */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
                About <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">Zion Tech Group</span>
              </h1>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                We are a leading technology company dedicated to transforming businesses through innovative AI, 5G, Cloud, IoT, Blockchain, and Cybersecurity solutions.
              </p>
            </div>
          </div>
        </section>

        {/* Mission Section */}
        <section className="py-20 bg-gray-900/50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl font-bold text-white mb-6">Our Mission</h2>
                <p className="text-lg text-gray-300 mb-6">
                  To empower businesses with cutting-edge technology solutions that drive innovation, efficiency, and growth. We believe in the transformative power of technology to solve complex challenges and create new opportunities.
                </p>
                <p className="text-lg text-gray-300">
                  Our team of expert engineers, data scientists, and technology consultants work tirelessly to deliver solutions that not only meet today's needs but anticipate tomorrow's challenges.
                </p>
              </div>
              <div className="grid grid-cols-2 gap-6">
                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 text-center">
                  <Users className="h-12 w-12 text-blue-400 mx-auto mb-4" />
                  <h3 className="text-xl font-semibold text-white mb-2">Expert Team</h3>
                  <p className="text-gray-300">50+ technology experts</p>
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 text-center">
                  <Award className="h-12 w-12 text-purple-400 mx-auto mb-4" />
                  <h3 className="text-xl font-semibold text-white mb-2">Awards</h3>
                  <p className="text-gray-300">Industry recognition</p>
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 text-center">
                  <Target className="h-12 w-12 text-green-400 mx-auto mb-4" />
                  <h3 className="text-xl font-semibold text-white mb-2">Projects</h3>
                  <p className="text-gray-300">500+ successful projects</p>
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 text-center">
                  <Globe className="h-12 w-12 text-yellow-400 mx-auto mb-4" />
                  <h3 className="text-xl font-semibold text-white mb-2">Global Reach</h3>
                  <p className="text-gray-300">Worldwide presence</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Values Section */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Our Values</h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                The principles that guide everything we do
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8 text-center">
                <Shield className="h-16 w-16 text-blue-400 mx-auto mb-6" />
                <h3 className="text-2xl font-semibold text-white mb-4">Security First</h3>
                <p className="text-gray-300">
                  We prioritize security in every solution we develop, ensuring your data and systems are protected.
                </p>
              </div>

              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8 text-center">
                <Zap className="h-16 w-16 text-purple-400 mx-auto mb-6" />
                <h3 className="text-2xl font-semibold text-white mb-4">Innovation</h3>
                <p className="text-gray-300">
                  We stay at the forefront of technology, constantly exploring new ways to solve complex problems.
                </p>
              </div>

              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8 text-center">
                <Users className="h-16 w-16 text-green-400 mx-auto mb-6" />
                <h3 className="text-2xl font-semibold text-white mb-4">Collaboration</h3>
                <p className="text-gray-300">
                  We work closely with our clients to understand their needs and deliver tailored solutions.
                </p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}

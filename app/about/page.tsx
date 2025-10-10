'use client';
import React from 'react';
import { Helmet } from 'react-helmet-async';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import { Users, Target, Award, Globe, Shield, Zap } from 'lucide-react';

const AboutPage: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>About Us - Zion Tech Group</title>
        <meta name="description" content="Learn about Zion Tech Group's mission, values, and commitment to delivering cutting-edge AI and IT solutions." />
        <meta name="keywords" content="about us, company, mission, values, team, AI solutions, IT services" />
      </Helmet>
      
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        <Navigation />
        
        {/* Hero Section */}
        <section className="py-20 px-4">
          <div className="container mx-auto text-center">
            <h1 className="text-5xl font-bold text-white mb-6">
              About <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">Zion Tech Group</span>
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Pioneering the future of technology with innovative AI solutions, quantum computing, and digital transformation services.
            </p>
          </div>
        </section>

        {/* Mission Section */}
        <section className="py-16 px-4">
          <div className="container mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-4xl font-bold text-white mb-6">Our Mission</h2>
                <p className="text-lg text-gray-300 mb-6">
                  To empower businesses with cutting-edge AI and technology solutions that drive innovation, 
                  efficiency, and growth. We believe in the transformative power of technology to solve 
                  complex challenges and create a better future.
                </p>
                <p className="text-lg text-gray-300">
                  Our team of experts combines deep technical knowledge with business acumen to deliver 
                  solutions that not only meet today's needs but anticipate tomorrow's challenges.
                </p>
              </div>
              <div className="bg-gray-800/50 rounded-lg p-8">
                <Target className="w-16 h-16 text-cyan-400 mx-auto mb-4" />
                <h3 className="text-2xl font-bold text-white mb-4 text-center">Mission-Driven</h3>
                <p className="text-gray-300 text-center">
                  Every project we undertake is guided by our mission to make technology accessible, 
                  powerful, and transformative for businesses of all sizes.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Values Section */}
        <section className="py-16 px-4 bg-gray-800/30">
          <div className="container mx-auto">
            <h2 className="text-4xl font-bold text-white text-center mb-12">Our Values</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="text-center">
                <Award className="w-12 h-12 text-cyan-400 mx-auto mb-4" />
                <h3 className="text-xl font-bold text-white mb-3">Excellence</h3>
                <p className="text-gray-300">
                  We strive for excellence in everything we do, delivering solutions that exceed expectations.
                </p>
              </div>
              <div className="text-center">
                <Users className="w-12 h-12 text-cyan-400 mx-auto mb-4" />
                <h3 className="text-xl font-bold text-white mb-3">Collaboration</h3>
                <p className="text-gray-300">
                  We believe in the power of teamwork and collaboration to achieve extraordinary results.
                </p>
              </div>
              <div className="text-center">
                <Globe className="w-12 h-12 text-cyan-400 mx-auto mb-4" />
                <h3 className="text-xl font-bold text-white mb-3">Innovation</h3>
                <p className="text-gray-300">
                  We continuously push the boundaries of what's possible with technology.
                </p>
              </div>
              <div className="text-center">
                <Shield className="w-12 h-12 text-cyan-400 mx-auto mb-4" />
                <h3 className="text-xl font-bold text-white mb-3">Integrity</h3>
                <p className="text-gray-300">
                  We conduct business with the highest standards of ethics and transparency.
                </p>
              </div>
              <div className="text-center">
                <Zap className="w-12 h-12 text-cyan-400 mx-auto mb-4" />
                <h3 className="text-xl font-bold text-white mb-3">Agility</h3>
                <p className="text-gray-300">
                  We adapt quickly to changing needs and market conditions.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Team Section */}
        <section className="py-16 px-4">
          <div className="container mx-auto">
            <h2 className="text-4xl font-bold text-white text-center mb-12">Our Team</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-gray-800/50 rounded-lg p-6 text-center">
                <div className="w-20 h-20 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full mx-auto mb-4"></div>
                <h3 className="text-xl font-bold text-white mb-2">AI Engineers</h3>
                <p className="text-gray-300">
                  Expert machine learning engineers and data scientists with years of experience.
                </p>
              </div>
              <div className="bg-gray-800/50 rounded-lg p-6 text-center">
                <div className="w-20 h-20 bg-gradient-to-r from-purple-400 to-pink-500 rounded-full mx-auto mb-4"></div>
                <h3 className="text-xl font-bold text-white mb-2">Software Developers</h3>
                <p className="text-gray-300">
                  Full-stack developers specializing in modern web technologies and cloud platforms.
                </p>
              </div>
              <div className="bg-gray-800/50 rounded-lg p-6 text-center">
                <div className="w-20 h-20 bg-gradient-to-r from-green-400 to-blue-500 rounded-full mx-auto mb-4"></div>
                <h3 className="text-xl font-bold text-white mb-2">DevOps Engineers</h3>
                <p className="text-gray-300">
                  Infrastructure specialists ensuring scalable, secure, and reliable deployments.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 px-4 bg-gradient-to-r from-cyan-600 to-blue-600">
          <div className="container mx-auto text-center">
            <h2 className="text-4xl font-bold text-white mb-6">Ready to Transform Your Business?</h2>
            <p className="text-xl text-cyan-100 mb-8 max-w-2xl mx-auto">
              Join hundreds of companies that trust Zion Tech Group for their technology needs.
            </p>
            <a
              href="/contact"
              className="inline-block bg-white text-cyan-600 font-bold py-4 px-8 rounded-lg hover:bg-gray-100 transition-colors"
            >
              Get Started Today
            </a>
          </div>
        </section>

        <Footer />
      </div>
    </>
  );
};

export default AboutPage;

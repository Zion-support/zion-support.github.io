'use client';
import React from 'react';
import { Helmet } from 'react-helmet-async';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import { Brain, Cloud, Shield, Zap, Users, Award, Target, Globe } from 'lucide-react';

const AboutPage: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>About Us - Zion Tech Group | Leading AI & IT Solutions</title>
        <meta name="description" content="Learn about Zion Tech Group, a leading provider of AI and IT solutions. Discover our mission, values, and commitment to transforming businesses through technology." />
        <meta name="keywords" content="about us, AI solutions, IT services, company, mission, values, Zion Tech Group" />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        <Navigation />
        
        <main className="container mx-auto px-4 py-16 pt-24">
          <div className="max-w-6xl mx-auto">
            {/* Hero Section */}
            <div className="text-center mb-16">
              <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
                About Zion Tech Group
              </h1>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Pioneering the future of AI and IT solutions, transforming businesses through cutting-edge technology and innovative thinking.
              </p>
            </div>

            {/* Mission Section */}
            <section className="mb-16">
              <div className="bg-white/5 backdrop-blur-lg rounded-2xl p-8 border border-white/10">
                <h2 className="text-3xl font-bold text-white mb-6 text-center">Our Mission</h2>
                <p className="text-lg text-gray-300 text-center max-w-4xl mx-auto leading-relaxed">
                  To empower businesses with advanced AI and IT solutions that drive innovation, efficiency, and growth. 
                  We believe technology should be accessible, powerful, and transformative for organizations of all sizes.
                </p>
              </div>
            </section>

            {/* Values Section */}
            <section className="mb-16">
              <h2 className="text-3xl font-bold text-center text-white mb-12">Our Values</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                <div className="bg-white/5 backdrop-blur-lg rounded-2xl p-6 border border-white/10 text-center">
                  <Brain className="w-12 h-12 text-cyan-400 mx-auto mb-4" />
                  <h3 className="text-xl font-bold text-white mb-3">Innovation</h3>
                  <p className="text-gray-300">Pushing boundaries with cutting-edge AI and technology solutions</p>
                </div>
                
                <div className="bg-white/5 backdrop-blur-lg rounded-2xl p-6 border border-white/10 text-center">
                  <Shield className="w-12 h-12 text-green-400 mx-auto mb-4" />
                  <h3 className="text-xl font-bold text-white mb-3">Security</h3>
                  <p className="text-gray-300">Bank-level security and compliance for all our solutions</p>
                </div>
                
                <div className="bg-white/5 backdrop-blur-lg rounded-2xl p-6 border border-white/10 text-center">
                  <Users className="w-12 h-12 text-purple-400 mx-auto mb-4" />
                  <h3 className="text-xl font-bold text-white mb-3">Collaboration</h3>
                  <p className="text-gray-300">Working closely with clients to achieve their goals</p>
                </div>
                
                <div className="bg-white/5 backdrop-blur-lg rounded-2xl p-6 border border-white/10 text-center">
                  <Award className="w-12 h-12 text-yellow-400 mx-auto mb-4" />
                  <h3 className="text-xl font-bold text-white mb-3">Excellence</h3>
                  <p className="text-gray-300">Delivering exceptional results and exceeding expectations</p>
                </div>
              </div>
            </section>

            {/* Team Section */}
            <section className="mb-16">
              <h2 className="text-3xl font-bold text-center text-white mb-12">Our Team</h2>
              <div className="bg-white/5 backdrop-blur-lg rounded-2xl p-8 border border-white/10">
                <div className="text-center">
                  <h3 className="text-2xl font-bold text-white mb-4">Expert Professionals</h3>
                  <p className="text-lg text-gray-300 mb-8 max-w-3xl mx-auto">
                    Our team consists of highly skilled AI engineers, software developers, cybersecurity experts, 
                    and business consultants who bring decades of combined experience to every project.
                  </p>
                  
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    <div className="text-center">
                      <div className="w-20 h-20 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full mx-auto mb-4 flex items-center justify-center">
                        <Brain className="w-10 h-10 text-white" />
                      </div>
                      <h4 className="text-xl font-semibold text-white mb-2">AI Specialists</h4>
                      <p className="text-gray-300">Machine learning and AI experts</p>
                    </div>
                    
                    <div className="text-center">
                      <div className="w-20 h-20 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full mx-auto mb-4 flex items-center justify-center">
                        <Cloud className="w-10 h-10 text-white" />
                      </div>
                      <h4 className="text-xl font-semibold text-white mb-2">Cloud Engineers</h4>
                      <p className="text-gray-300">Cloud infrastructure and DevOps specialists</p>
                    </div>
                    
                    <div className="text-center">
                      <div className="w-20 h-20 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full mx-auto mb-4 flex items-center justify-center">
                        <Shield className="w-10 h-10 text-white" />
                      </div>
                      <h4 className="text-xl font-semibold text-white mb-2">Security Experts</h4>
                      <p className="text-gray-300">Cybersecurity and compliance professionals</p>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* Stats Section */}
            <section className="mb-16">
              <div className="bg-white/5 backdrop-blur-lg rounded-2xl p-8 border border-white/10">
                <h2 className="text-3xl font-bold text-center text-white mb-12">By the Numbers</h2>
                <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
                  <div>
                    <div className="text-4xl font-bold text-cyan-400 mb-2">500+</div>
                    <div className="text-gray-300">Happy Clients</div>
                  </div>
                  <div>
                    <div className="text-4xl font-bold text-cyan-400 mb-2">1000+</div>
                    <div className="text-gray-300">Projects Completed</div>
                  </div>
                  <div>
                    <div className="text-4xl font-bold text-cyan-400 mb-2">99%</div>
                    <div className="text-gray-300">Client Satisfaction</div>
                  </div>
                  <div>
                    <div className="text-4xl font-bold text-cyan-400 mb-2">10+</div>
                    <div className="text-gray-300">Years Experience</div>
                  </div>
                </div>
              </div>
            </section>

            {/* CTA Section */}
            <section className="text-center">
              <div className="bg-white/5 backdrop-blur-lg rounded-2xl p-8 border border-white/10">
                <h2 className="text-2xl font-bold text-white mb-6">Ready to Work With Us?</h2>
                <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
                  Let's discuss how our AI and IT solutions can transform your business and drive growth.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <a
                    href="/contact"
                    className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-purple-500 text-white rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-600 transition-all duration-300"
                  >
                    Get in Touch
                  </a>
                  <a
                    href="/services"
                    className="border-2 border-cyan-400 text-cyan-400 px-8 py-3 rounded-lg font-semibold hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300"
                  >
                    View Our Services
                  </a>
                </div>
              </div>
            </section>
          </div>
        </main>
        
        <Footer />
      </div>
    </>
  );
};

export default AboutPage;

'use client';
import React from 'react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import SEOOptimizer from '../components/SEOOptimizer';

const AboutPage: React.FC = () => {
  return (
    <>
      <SEOOptimizer
        title="About Zion Tech Group - Leading AI and IT Solutions Provider"
        description="Learn about Zion Tech Group's mission to transform businesses through advanced AI, quantum computing, autonomous systems, and digital transformation services."
        keywords={['about us', 'AI company', 'IT solutions', 'technology leadership', 'innovation', 'enterprise solutions']}
        canonicalUrl="https://ziontechgroup.com/about"
      />
      
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        <Navigation />
        
        <main className="pt-16">
          {/* Hero Section */}
          <section className="py-20 bg-gradient-to-r from-purple-600/20 to-blue-600/20">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-center">
                <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
                  About <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">Zion Tech Group</span>
                </h1>
                <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                  Pioneering the future of technology with cutting-edge AI solutions, quantum computing, 
                  and digital transformation services that drive innovation and business success.
                </p>
              </div>
            </div>
          </section>

          {/* Mission & Vision */}
          <section className="py-20">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                <div>
                  <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Our Mission</h2>
                  <p className="text-lg text-gray-300 mb-6">
                    To democratize advanced technology and make AI, quantum computing, and autonomous systems 
                    accessible to businesses of all sizes. We believe that cutting-edge technology should be 
                    a catalyst for growth, not a barrier to entry.
                  </p>
                  <p className="text-lg text-gray-300">
                    Our mission is to transform how businesses operate by providing intelligent, scalable, 
                    and cost-effective solutions that drive real-world results and measurable ROI.
                  </p>
                </div>
                <div className="cyber-card p-8">
                  <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg flex items-center justify-center mb-6">
                    <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-4">Innovation First</h3>
                  <p className="text-gray-300">
                    We stay at the forefront of technology, constantly exploring new frontiers in AI, 
                    quantum computing, and autonomous systems to deliver breakthrough solutions.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Company Story */}
          <section className="py-20 bg-slate-800/50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-center mb-16">
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Our Story</h2>
                <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                  Founded in 2020, Zion Tech Group emerged from a vision to bridge the gap between 
                  cutting-edge technology and practical business applications.
                </p>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="cyber-card p-8 text-center">
                  <div className="text-4xl font-bold text-cyan-400 mb-4">2020</div>
                  <h3 className="text-xl font-bold text-white mb-4">Founded</h3>
                  <p className="text-gray-300">
                    Zion Tech Group was established with a mission to democratize advanced technology 
                    and make AI accessible to businesses of all sizes.
                  </p>
                </div>
                
                <div className="cyber-card p-8 text-center">
                  <div className="text-4xl font-bold text-cyan-400 mb-4">50+</div>
                  <h3 className="text-xl font-bold text-white mb-4">Projects Delivered</h3>
                  <p className="text-gray-300">
                    Successfully completed over 50 enterprise projects, delivering measurable ROI 
                    and transformative results for our clients.
                  </p>
                </div>
                
                <div className="cyber-card p-8 text-center">
                  <div className="text-4xl font-bold text-cyan-400 mb-4">100+</div>
                  <h3 className="text-xl font-bold text-white mb-4">Happy Clients</h3>
                  <p className="text-gray-300">
                    Built lasting relationships with over 100 satisfied clients who trust us 
                    with their most critical technology initiatives.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Values */}
          <section className="py-20">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-center mb-16">
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Our Values</h2>
                <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                  These core values guide everything we do and shape how we work with our clients and partners.
                </p>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                <div className="cyber-card p-6 text-center group hover:scale-105 transition-transform">
                  <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-lg flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <h3 className="text-lg font-bold text-white mb-3">Excellence</h3>
                  <p className="text-gray-300 text-sm">
                    We strive for excellence in every project, delivering solutions that exceed expectations.
                  </p>
                </div>
                
                <div className="cyber-card p-6 text-center group hover:scale-105 transition-transform">
                  <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                  </div>
                  <h3 className="text-lg font-bold text-white mb-3">Innovation</h3>
                  <p className="text-gray-300 text-sm">
                    We embrace cutting-edge technology and innovative approaches to solve complex challenges.
                  </p>
                </div>
                
                <div className="cyber-card p-6 text-center group hover:scale-105 transition-transform">
                  <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-emerald-500 rounded-lg flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                    </svg>
                  </div>
                  <h3 className="text-lg font-bold text-white mb-3">Collaboration</h3>
                  <p className="text-gray-300 text-sm">
                    We work closely with our clients as partners, ensuring their success is our success.
                  </p>
                </div>
                
                <div className="cyber-card p-6 text-center group hover:scale-105 transition-transform">
                  <div className="w-12 h-12 bg-gradient-to-r from-orange-500 to-red-500 rounded-lg flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                    </svg>
                  </div>
                  <h3 className="text-lg font-bold text-white mb-3">Security</h3>
                  <p className="text-gray-300 text-sm">
                    We prioritize security and data protection in all our solutions and client interactions.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Team Section */}
          <section className="py-20 bg-slate-800/50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-center mb-16">
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Meet Our Team</h2>
                <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                  Our diverse team of experts brings together decades of experience in AI, quantum computing, 
                  and enterprise technology solutions.
                </p>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                <div className="cyber-card p-8 text-center">
                  <div className="w-24 h-24 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center mx-auto mb-6">
                    <span className="text-2xl font-bold text-white">KJ</span>
                  </div>
                  <h3 className="text-xl font-bold text-white mb-2">Kleber J. Santos</h3>
                  <p className="text-cyan-400 mb-4">Founder & CEO</p>
                  <p className="text-gray-300 text-sm">
                    Visionary leader with 15+ years in AI and enterprise technology. 
                    Passionate about democratizing advanced technology for businesses.
                  </p>
                </div>
                
                <div className="cyber-card p-8 text-center">
                  <div className="w-24 h-24 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full flex items-center justify-center mx-auto mb-6">
                    <span className="text-2xl font-bold text-white">AI</span>
                  </div>
                  <h3 className="text-xl font-bold text-white mb-2">AI Research Team</h3>
                  <p className="text-cyan-400 mb-4">Machine Learning Engineers</p>
                  <p className="text-gray-300 text-sm">
                    Expert team specializing in deep learning, natural language processing, 
                    and computer vision applications.
                  </p>
                </div>
                
                <div className="cyber-card p-8 text-center">
                  <div className="w-24 h-24 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full flex items-center justify-center mx-auto mb-6">
                    <span className="text-2xl font-bold text-white">IT</span>
                  </div>
                  <h3 className="text-xl font-bold text-white mb-2">IT Solutions Team</h3>
                  <p className="text-cyan-400 mb-4">Infrastructure Specialists</p>
                  <p className="text-gray-300 text-sm">
                    Seasoned professionals in cloud architecture, cybersecurity, 
                    and enterprise system integration.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* CTA Section */}
          <section className="py-20 bg-gradient-to-r from-purple-600/20 to-blue-600/20">
            <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Ready to Work With Us?
              </h2>
              <p className="text-xl text-gray-300 mb-8">
                Let's discuss how our expertise and innovative solutions can help transform your business. 
                Get in touch for a free consultation.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="/contact"
                  className="cyber-button text-lg px-8 py-4 inline-flex items-center justify-center"
                >
                  Get In Touch
                </a>
                <a
                  href="tel:+13024640950"
                  className="cyber-button-secondary text-lg px-8 py-4 inline-flex items-center justify-center"
                >
                  <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                  Call (302) 464-0950
                </a>
              </div>
            </div>
          </section>
        </main>
        
        <Footer />
      </div>
    </>
  );
};

export default AboutPage;
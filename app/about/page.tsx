'use client';
import React from 'react';
import { Brain, Users, Award, Target, CheckCircle, ArrowRight, Phone, Mail, MapPin } from 'lucide-react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import SEOEnhancer from '../components/SEOEnhancer';

const AboutPage: React.FC = () => {
  return (
    <>
      <SEOEnhancer
        title="About Zion Tech Group - Leading AI and IT Solutions Provider"
        description="Learn about Zion Tech Group's mission, team, and expertise in AI solutions, quantum computing, and digital transformation. Discover our commitment to innovation and client success."
        keywords={['about zion tech group', 'AI company', 'IT solutions provider', 'team', 'mission', 'expertise']}
        canonicalUrl="https://ziontechgroup.com/about"
      />
      
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        <Navigation />
        
        <main className="container mx-auto px-4 py-24">
          {/* Hero Section */}
          <section className="text-center mb-16">
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 neon-text">
              About Zion Tech Group
            </h1>
            <p className="text-xl text-cyan-400 mb-8 max-w-3xl mx-auto">
              Pioneering the future of AI and IT solutions with cutting-edge technology and unwavering commitment to excellence
            </p>
          </section>

          {/* Mission & Vision */}
          <section className="mb-16">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              <div className="cyber-card p-8">
                <div className="flex items-center mb-6">
                  <Target className="w-8 h-8 text-cyan-400 mr-3" />
                  <h2 className="text-2xl font-bold text-white">Our Mission</h2>
                </div>
                <p className="text-gray-300 leading-relaxed mb-6">
                  To democratize advanced AI and IT solutions, making cutting-edge technology accessible to businesses of all sizes. 
                  We believe that every organization deserves access to the tools that will define the future of work.
                </p>
                <ul className="space-y-3">
                  <li className="flex items-center text-gray-300">
                    <CheckCircle className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" />
                    <span>Empowering businesses with AI-driven solutions</span>
                  </li>
                  <li className="flex items-center text-gray-300">
                    <CheckCircle className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" />
                    <span>Bridging the gap between innovation and implementation</span>
                  </li>
                  <li className="flex items-center text-gray-300">
                    <CheckCircle className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" />
                    <span>Delivering measurable results and ROI</span>
                  </li>
                </ul>
              </div>

              <div className="cyber-card p-8">
                <div className="flex items-center mb-6">
                  <Brain className="w-8 h-8 text-purple-400 mr-3" />
                  <h2 className="text-2xl font-bold text-white">Our Vision</h2>
                </div>
                <p className="text-gray-300 leading-relaxed mb-6">
                  To be the global leader in AI-powered business transformation, creating a world where technology 
                  seamlessly integrates with human potential to solve the world's most complex challenges.
                </p>
                <ul className="space-y-3">
                  <li className="flex items-center text-gray-300">
                    <CheckCircle className="w-5 h-5 text-purple-400 mr-3 flex-shrink-0" />
                    <span>Leading the AI revolution in enterprise solutions</span>
                  </li>
                  <li className="flex items-center text-gray-300">
                    <CheckCircle className="w-5 h-5 text-purple-400 mr-3 flex-shrink-0" />
                    <span>Creating sustainable technological ecosystems</span>
                  </li>
                  <li className="flex items-center text-gray-300">
                    <CheckCircle className="w-5 h-5 text-purple-400 mr-3 flex-shrink-0" />
                    <span>Fostering innovation through collaboration</span>
                  </li>
                </ul>
              </div>
            </div>
          </section>

          {/* Company Stats */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold text-white text-center mb-12 neon-text">Our Impact</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="cyber-card p-6 text-center">
                <div className="text-4xl font-bold text-cyan-400 mb-2">$50M+</div>
                <div className="text-gray-300">Annual Savings Delivered</div>
              </div>
              <div className="cyber-card p-6 text-center">
                <div className="text-4xl font-bold text-purple-400 mb-2">95%</div>
                <div className="text-gray-300">Process Automation</div>
              </div>
              <div className="cyber-card p-6 text-center">
                <div className="text-4xl font-bold text-green-400 mb-2">300%</div>
                <div className="text-gray-300">Average ROI</div>
              </div>
              <div className="cyber-card p-6 text-center">
                <div className="text-4xl font-bold text-pink-400 mb-2">500+</div>
                <div className="text-gray-300">Projects Completed</div>
              </div>
            </div>
          </section>

          {/* Our Team */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold text-white text-center mb-12 neon-text">Our Team</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="cyber-card p-6 text-center">
                <div className="w-24 h-24 bg-gradient-to-r from-cyan-400 to-purple-500 rounded-full mx-auto mb-4 flex items-center justify-center">
                  <Brain className="w-12 h-12 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-2">AI Engineers</h3>
                <p className="text-gray-300 text-sm">
                  PhD-level experts in machine learning, deep learning, and neural networks with years of industry experience.
                </p>
              </div>
              <div className="cyber-card p-6 text-center">
                <div className="w-24 h-24 bg-gradient-to-r from-green-400 to-blue-500 rounded-full mx-auto mb-4 flex items-center justify-center">
                  <Users className="w-12 h-12 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-2">IT Specialists</h3>
                <p className="text-gray-300 text-sm">
                  Certified professionals in cloud computing, cybersecurity, and enterprise infrastructure solutions.
                </p>
              </div>
              <div className="cyber-card p-6 text-center">
                <div className="w-24 h-24 bg-gradient-to-r from-pink-400 to-red-500 rounded-full mx-auto mb-4 flex items-center justify-center">
                  <Award className="w-12 h-12 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-2">Business Consultants</h3>
                <p className="text-gray-300 text-sm">
                  Strategic advisors with deep understanding of digital transformation and business process optimization.
                </p>
              </div>
            </div>
          </section>

          {/* Values */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold text-white text-center mb-12 neon-text">Our Values</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="cyber-card p-6">
                <h3 className="text-xl font-bold text-cyan-400 mb-4">Innovation</h3>
                <p className="text-gray-300">
                  We constantly push the boundaries of what's possible, staying ahead of technological trends and 
                  implementing cutting-edge solutions that drive real business value.
                </p>
              </div>
              <div className="cyber-card p-6">
                <h3 className="text-xl font-bold text-purple-400 mb-4">Excellence</h3>
                <p className="text-gray-300">
                  Quality is at the heart of everything we do. We maintain the highest standards in our work, 
                  ensuring every solution meets or exceeds client expectations.
                </p>
              </div>
              <div className="cyber-card p-6">
                <h3 className="text-xl font-bold text-green-400 mb-4">Integrity</h3>
                <p className="text-gray-300">
                  We build lasting relationships based on trust, transparency, and ethical business practices. 
                  Our clients' success is our success.
                </p>
              </div>
            </div>
          </section>

          {/* Contact CTA */}
          <section className="text-center">
            <div className="cyber-card p-8 max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold text-white mb-4 neon-text">Ready to Transform Your Business?</h2>
              <p className="text-gray-300 mb-8 text-lg">
                Let's discuss how our AI and IT solutions can drive your organization's success.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="/contact"
                  className="cyber-button px-8 py-4 text-lg font-semibold hover:scale-105 transition-all duration-300"
                >
                  Get Started Today
                </a>
                <a
                  href="tel:+13024640950"
                  className="flex items-center justify-center gap-2 border-2 border-cyan-400 text-cyan-400 px-8 py-4 rounded-lg font-semibold hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300"
                >
                  <Phone className="w-5 h-5" />
                  +1 302 464 0950
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
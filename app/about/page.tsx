'use client';
import React from 'react';
import { Brain, Users, Target, Award, CheckCircle, ArrowRight, Phone, Mail, MapPin } from 'lucide-react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import SEOEnhancer from '../components/SEOEnhancer';

const AboutPage: React.FC = () => {
  return (
    <>
      <SEOEnhancer
        title="About Zion Tech Group - Leading AI and IT Solutions Provider"
        description="Learn about Zion Tech Group's mission to transform businesses with cutting-edge AI solutions, quantum computing, and digital transformation services."
        keywords={['about zion tech group', 'AI company', 'IT solutions provider', 'quantum computing', 'digital transformation']}
        canonicalUrl="https://ziontechgroup.com/about"
      />
      
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        <Navigation />
        
        <main className="container mx-auto px-4 py-16 pt-24">
          {/* Hero Section */}
          <section className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 neon-text">
              About Zion Tech Group
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              Pioneering the future of business with advanced AI solutions, quantum computing, and digital transformation services.
            </p>
          </section>

          {/* Mission & Vision */}
          <section className="mb-16">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl font-bold text-white mb-6 neon-text">Our Mission</h2>
                <p className="text-gray-300 mb-6 leading-relaxed">
                  To democratize artificial intelligence and cutting-edge technology, making it accessible and beneficial for businesses of all sizes. We believe that every organization deserves access to the transformative power of AI and modern IT solutions.
                </p>
                <p className="text-gray-300 leading-relaxed">
                  Our mission is to bridge the gap between complex technology and practical business applications, ensuring our clients achieve unprecedented growth and efficiency.
                </p>
              </div>
              <div className="cyber-card p-8">
                <h3 className="text-2xl font-bold text-cyan-400 mb-4">Our Vision</h3>
                <p className="text-gray-300 leading-relaxed">
                  To be the global leader in AI-powered business solutions, creating a world where technology seamlessly integrates with human potential to solve the world's most complex challenges.
                </p>
              </div>
            </div>
          </section>

          {/* Company Stats */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold text-white mb-12 text-center neon-text">By the Numbers</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="cyber-card p-6 text-center">
                <div className="text-4xl font-bold text-cyan-400 mb-2">$50M+</div>
                <div className="text-gray-300">Annual Client Savings</div>
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
                <div className="text-gray-300">Projects Delivered</div>
              </div>
            </div>
          </section>

          {/* Core Values */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold text-white mb-12 text-center neon-text">Our Core Values</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="cyber-card p-6">
                <div className="w-12 h-12 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-lg flex items-center justify-center mb-4">
                  <Brain className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">Innovation First</h3>
                <p className="text-gray-300 leading-relaxed">
                  We constantly push the boundaries of what's possible with AI and technology, staying ahead of industry trends.
                </p>
              </div>
              <div className="cyber-card p-6">
                <div className="w-12 h-12 bg-gradient-to-r from-purple-400 to-pink-500 rounded-lg flex items-center justify-center mb-4">
                  <Users className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">Client Success</h3>
                <p className="text-gray-300 leading-relaxed">
                  Our success is measured by our clients' achievements. We're committed to delivering exceptional results.
                </p>
              </div>
              <div className="cyber-card p-6">
                <div className="w-12 h-12 bg-gradient-to-r from-green-400 to-teal-500 rounded-lg flex items-center justify-center mb-4">
                  <Target className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">Excellence</h3>
                <p className="text-gray-300 leading-relaxed">
                  We maintain the highest standards in everything we do, from code quality to client service.
                </p>
              </div>
            </div>
          </section>

          {/* Team Section */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold text-white mb-12 text-center neon-text">Our Expert Team</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="cyber-card p-6 text-center">
                <div className="w-24 h-24 bg-gradient-to-r from-cyan-400 to-purple-500 rounded-full mx-auto mb-4 flex items-center justify-center">
                  <Brain className="w-12 h-12 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-2">AI Engineers</h3>
                <p className="text-gray-300 text-sm">
                  PhD-level experts in machine learning, deep learning, and AI research with years of industry experience.
                </p>
              </div>
              <div className="cyber-card p-6 text-center">
                <div className="w-24 h-24 bg-gradient-to-r from-purple-400 to-pink-500 rounded-full mx-auto mb-4 flex items-center justify-center">
                  <Award className="w-12 h-12 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-2">IT Specialists</h3>
                <p className="text-gray-300 text-sm">
                  Certified professionals in cloud computing, cybersecurity, and enterprise infrastructure solutions.
                </p>
              </div>
              <div className="cyber-card p-6 text-center">
                <div className="w-24 h-24 bg-gradient-to-r from-green-400 to-teal-500 rounded-full mx-auto mb-4 flex items-center justify-center">
                  <Users className="w-12 h-12 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-2">Business Consultants</h3>
                <p className="text-gray-300 text-sm">
                  Strategic advisors with deep understanding of digital transformation and business optimization.
                </p>
              </div>
            </div>
          </section>

          {/* Why Choose Us */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold text-white mb-12 text-center neon-text">Why Choose Zion Tech Group?</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <CheckCircle className="w-6 h-6 text-green-400 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="text-lg font-semibold text-white mb-2">Proven Track Record</h3>
                    <p className="text-gray-300">Over 500 successful projects with measurable ROI improvements.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <CheckCircle className="w-6 h-6 text-green-400 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="text-lg font-semibold text-white mb-2">Cutting-Edge Technology</h3>
                    <p className="text-gray-300">We use the latest AI frameworks and cloud technologies.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <CheckCircle className="w-6 h-6 text-green-400 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="text-lg font-semibold text-white mb-2">24/7 Support</h3>
                    <p className="text-gray-300">Round-the-clock technical support and monitoring.</p>
                  </div>
                </div>
              </div>
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <CheckCircle className="w-6 h-6 text-green-400 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="text-lg font-semibold text-white mb-2">Scalable Solutions</h3>
                    <p className="text-gray-300">Our solutions grow with your business needs.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <CheckCircle className="w-6 h-6 text-green-400 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="text-lg font-semibold text-white mb-2">Security First</h3>
                    <p className="text-gray-300">Bank-level security and compliance standards.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <CheckCircle className="w-6 h-6 text-green-400 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="text-lg font-semibold text-white mb-2">Custom Solutions</h3>
                    <p className="text-gray-300">Tailored AI solutions for your specific business needs.</p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Contact CTA */}
          <section className="cyber-card p-8 text-center">
            <h2 className="text-3xl font-bold text-white mb-4 neon-text">Ready to Transform Your Business?</h2>
            <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
              Join hundreds of companies that have already transformed their operations with our AI-powered solutions.
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
          </section>
        </main>

        <Footer />
      </div>
    </>
  );
};

export default AboutPage;
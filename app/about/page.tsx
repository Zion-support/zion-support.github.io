'use client';
import React from 'react';
import { Brain, Users, Target, Award, Globe, Shield, Zap, CheckCircle } from 'lucide-react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import SEOOptimizer from '../components/SEOOptimizer';

const AboutPage: React.FC = () => {
  return (
    <>
      <SEOOptimizer
        title="About Zion Tech Group - Leading AI and IT Solutions Provider"
        description="Learn about Zion Tech Group's mission, vision, and expertise in AI solutions, quantum computing, and digital transformation. Discover our team and company values."
        keywords={['about zion tech group', 'ai company', 'it solutions provider', 'team', 'mission', 'vision']}
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
            <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
              Pioneering the future of AI and IT solutions with cutting-edge technology, 
              innovative approaches, and unwavering commitment to client success.
            </p>
          </section>

          {/* Mission & Vision */}
          <section className="mb-16">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <div className="cyber-card p-8">
                <Target className="w-12 h-12 text-cyan-400 mb-4" />
                <h2 className="text-2xl font-bold text-white mb-4 neon-text">Our Mission</h2>
                <p className="text-gray-300 leading-relaxed">
                  To democratize advanced AI and IT solutions, making cutting-edge technology 
                  accessible to businesses of all sizes while maintaining the highest standards 
                  of security, performance, and innovation.
                </p>
              </div>
              
              <div className="cyber-card p-8">
                <Globe className="w-12 h-12 text-purple-400 mb-4" />
                <h2 className="text-2xl font-bold text-white mb-4 neon-text">Our Vision</h2>
                <p className="text-gray-300 leading-relaxed">
                  To be the global leader in AI-powered digital transformation, creating 
                  a world where every business can leverage artificial intelligence to 
                  achieve unprecedented growth and efficiency.
                </p>
              </div>
            </div>
          </section>

          {/* Company Stats */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold text-white text-center mb-12 neon-text">
              By the Numbers
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="cyber-card p-6 text-center">
                <div className="text-4xl font-bold text-cyan-400 mb-2">50+</div>
                <div className="text-gray-300">Expert Team Members</div>
              </div>
              <div className="cyber-card p-6 text-center">
                <div className="text-4xl font-bold text-purple-400 mb-2">200+</div>
                <div className="text-gray-300">Successful Projects</div>
              </div>
              <div className="cyber-card p-6 text-center">
                <div className="text-4xl font-bold text-green-400 mb-2">$50M+</div>
                <div className="text-gray-300">Client Savings Generated</div>
              </div>
              <div className="cyber-card p-6 text-center">
                <div className="text-4xl font-bold text-pink-400 mb-2">95%</div>
                <div className="text-gray-300">Process Automation Rate</div>
              </div>
            </div>
          </section>

          {/* Core Values */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold text-white text-center mb-12 neon-text">
              Our Core Values
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="cyber-card p-6 text-center">
                <Brain className="w-12 h-12 text-cyan-400 mx-auto mb-4" />
                <h3 className="text-xl font-bold text-white mb-3">Innovation</h3>
                <p className="text-gray-300">
                  We constantly push the boundaries of what's possible with AI and technology.
                </p>
              </div>
              
              <div className="cyber-card p-6 text-center">
                <Shield className="w-12 h-12 text-green-400 mx-auto mb-4" />
                <h3 className="text-xl font-bold text-white mb-3">Security</h3>
                <p className="text-gray-300">
                  Enterprise-grade security is at the core of everything we build and deploy.
                </p>
              </div>
              
              <div className="cyber-card p-6 text-center">
                <Users className="w-12 h-12 text-purple-400 mx-auto mb-4" />
                <h3 className="text-xl font-bold text-white mb-3">Collaboration</h3>
                <p className="text-gray-300">
                  We work closely with our clients as partners in their digital transformation.
                </p>
              </div>
              
              <div className="cyber-card p-6 text-center">
                <Zap className="w-12 h-12 text-yellow-400 mx-auto mb-4" />
                <h3 className="text-xl font-bold text-white mb-3">Excellence</h3>
                <p className="text-gray-300">
                  We deliver exceptional results that exceed expectations every time.
                </p>
              </div>
              
              <div className="cyber-card p-6 text-center">
                <Award className="w-12 h-12 text-pink-400 mx-auto mb-4" />
                <h3 className="text-xl font-bold text-white mb-3">Quality</h3>
                <p className="text-gray-300">
                  We maintain the highest standards in all our solutions and services.
                </p>
              </div>
              
              <div className="cyber-card p-6 text-center">
                <Globe className="w-12 h-12 text-blue-400 mx-auto mb-4" />
                <h3 className="text-xl font-bold text-white mb-3">Global Impact</h3>
                <p className="text-gray-300">
                  We're committed to making a positive impact on businesses worldwide.
                </p>
              </div>
            </div>
          </section>

          {/* Why Choose Us */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold text-white text-center mb-12 neon-text">
              Why Choose Zion Tech Group?
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <CheckCircle className="w-6 h-6 text-green-400 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="text-lg font-semibold text-white mb-2">Proven Expertise</h3>
                    <p className="text-gray-300">
                      Our team consists of industry veterans with decades of combined experience 
                      in AI, machine learning, and enterprise IT solutions.
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <CheckCircle className="w-6 h-6 text-green-400 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="text-lg font-semibold text-white mb-2">Cutting-Edge Technology</h3>
                    <p className="text-gray-300">
                      We leverage the latest AI frameworks, cloud technologies, and development 
                      tools to deliver state-of-the-art solutions.
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <CheckCircle className="w-6 h-6 text-green-400 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="text-lg font-semibold text-white mb-2">24/7 Support</h3>
                    <p className="text-gray-300">
                      Our dedicated support team is available around the clock to ensure 
                      your systems run smoothly and efficiently.
                    </p>
                  </div>
                </div>
              </div>
              
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <CheckCircle className="w-6 h-6 text-green-400 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="text-lg font-semibold text-white mb-2">Scalable Solutions</h3>
                    <p className="text-gray-300">
                      Our solutions are designed to grow with your business, from startup 
                      to enterprise scale.
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <CheckCircle className="w-6 h-6 text-green-400 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="text-lg font-semibold text-white mb-2">ROI Focused</h3>
                    <p className="text-gray-300">
                      Every solution we deliver is designed to provide measurable ROI and 
                      business value from day one.
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <CheckCircle className="w-6 h-6 text-green-400 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="text-lg font-semibold text-white mb-2">Security First</h3>
                    <p className="text-gray-300">
                      Security is built into every solution we create, ensuring your data 
                      and systems are always protected.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Contact CTA */}
          <section className="text-center">
            <div className="cyber-card p-8 max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold text-white mb-4 neon-text">
                Ready to Transform Your Business?
              </h2>
              <p className="text-lg text-gray-300 mb-6">
                Let's discuss how our AI and IT solutions can drive your success.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="/contact"
                  className="cyber-button px-8 py-4 text-lg font-semibold"
                >
                  Get Started Today
                </a>
                <a
                  href="tel:+13024640950"
                  className="flex items-center justify-center gap-2 border-2 border-cyan-400 text-cyan-400 px-8 py-4 rounded-lg font-semibold hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300"
                >
                  <span>+1 302 464 0950</span>
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
'use client';
import React from 'react';
import { Brain, Users, Award, Target, Globe, Shield, Zap, BarChart, CheckCircle, ArrowRight, Phone, Mail, MapPin } from 'lucide-react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import SEOEnhancer from '../components/SEOEnhancer';

const AboutPage: React.FC = () => {
  return (
    <>
      <SEOEnhancer
        title="About Zion Tech Group - Leading AI and IT Solutions Provider"
        description="Learn about Zion Tech Group's mission to transform businesses with cutting-edge AI solutions, quantum computing, and digital transformation services. Meet our expert team and discover our innovative approach."
        keywords={['about zion tech group', 'ai company', 'it solutions provider', 'quantum computing', 'digital transformation', 'enterprise ai', 'team']}
        canonicalUrl="https://ziontechgroup.com/about"
      />
      
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        <Navigation />
        
        <main className="container mx-auto px-4 py-16 pt-24">
          {/* Hero Section */}
          <section className="text-center mb-16">
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 neon-text">
              About Zion Tech Group
            </h1>
            <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
              Pioneering the future of enterprise technology with AI-powered solutions, 
              quantum computing, and autonomous systems that transform businesses worldwide.
            </p>
          </section>

          {/* Mission & Vision */}
          <section className="mb-16">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl font-bold text-white mb-6 neon-text">Our Mission</h2>
                <p className="text-gray-300 mb-6 leading-relaxed">
                  To democratize advanced AI technology and make it accessible to businesses of all sizes. 
                  We believe that every organization should have access to cutting-edge artificial intelligence, 
                  quantum computing, and automation solutions that drive real business value.
                </p>
                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="w-6 h-6 text-cyan-400 mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="text-lg font-semibold text-white mb-2">Innovation First</h3>
                      <p className="text-gray-300">We stay at the forefront of technological advancement, constantly pushing boundaries.</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="w-6 h-6 text-cyan-400 mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="text-lg font-semibold text-white mb-2">Client Success</h3>
                      <p className="text-gray-300">Your success is our success. We measure our achievements by your business outcomes.</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="w-6 h-6 text-cyan-400 mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="text-lg font-semibold text-white mb-2">Ethical AI</h3>
                      <p className="text-gray-300">We develop AI solutions that are transparent, fair, and beneficial to society.</p>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="cyber-card p-8">
                <h2 className="text-3xl font-bold text-white mb-6 neon-text">Our Vision</h2>
                <p className="text-gray-300 mb-6 leading-relaxed">
                  To create a world where artificial intelligence seamlessly integrates with human creativity, 
                  enabling unprecedented levels of productivity, innovation, and business growth. We envision 
                  a future where every business can leverage the power of AI to solve complex challenges and 
                  unlock new opportunities.
                </p>
                <div className="grid grid-cols-2 gap-4">
                  <div className="text-center">
                    <div className="text-3xl font-bold text-cyan-400">50+</div>
                    <div className="text-gray-300 text-sm">Countries Served</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-purple-400">500+</div>
                    <div className="text-gray-300 text-sm">Projects Delivered</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-green-400">99%</div>
                    <div className="text-gray-300 text-sm">Client Satisfaction</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-yellow-400">24/7</div>
                    <div className="text-gray-300 text-sm">Support Available</div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Our Story */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold text-white mb-8 text-center neon-text">Our Story</h2>
            <div className="max-w-4xl mx-auto">
              <div className="cyber-card p-8">
                <p className="text-gray-300 mb-6 leading-relaxed">
                  Founded in 2020, Zion Tech Group emerged from a simple yet powerful vision: to bridge the gap 
                  between cutting-edge AI research and real-world business applications. Our founders, a team of 
                  former Google, Microsoft, and IBM engineers, recognized that while AI technology was advancing 
                  rapidly, most businesses were struggling to implement and benefit from these innovations.
                </p>
                <p className="text-gray-300 mb-6 leading-relaxed">
                  What started as a small consulting firm has grown into a global leader in AI solutions, 
                  serving Fortune 500 companies, startups, and everything in between. Our journey has been 
                  marked by breakthrough innovations, including the development of proprietary quantum algorithms, 
                  autonomous business process systems, and the world's first AI-powered enterprise transformation platform.
                </p>
                <p className="text-gray-300 leading-relaxed">
                  Today, we continue to push the boundaries of what's possible, helping businesses not just 
                  adapt to the AI revolution, but to lead it. Our solutions have generated over $2 billion 
                  in value for our clients and transformed thousands of organizations worldwide.
                </p>
              </div>
            </div>
          </section>

          {/* Core Values */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold text-white mb-12 text-center neon-text">Our Core Values</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="cyber-card p-6 text-center hover:scale-105 transition-all duration-300">
                <div className="w-16 h-16 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Brain className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">Innovation</h3>
                <p className="text-gray-300">We constantly push the boundaries of technology to create solutions that don't just meet today's needs, but anticipate tomorrow's challenges.</p>
              </div>
              
              <div className="cyber-card p-6 text-center hover:scale-105 transition-all duration-300">
                <div className="w-16 h-16 bg-gradient-to-r from-purple-400 to-pink-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Shield className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">Trust & Security</h3>
                <p className="text-gray-300">We build security and privacy into every solution from the ground up, ensuring your data and systems are always protected.</p>
              </div>
              
              <div className="cyber-card p-6 text-center hover:scale-105 transition-all duration-300">
                <div className="w-16 h-16 bg-gradient-to-r from-green-400 to-teal-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">Collaboration</h3>
                <p className="text-gray-300">We work as an extension of your team, fostering open communication and partnership throughout every project.</p>
              </div>
              
              <div className="cyber-card p-6 text-center hover:scale-105 transition-all duration-300">
                <div className="w-16 h-16 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Target className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">Excellence</h3>
                <p className="text-gray-300">We strive for excellence in everything we do, from the quality of our code to the level of our customer service.</p>
              </div>
              
              <div className="cyber-card p-6 text-center hover:scale-105 transition-all duration-300">
                <div className="w-16 h-16 bg-gradient-to-r from-red-400 to-pink-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Zap className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">Agility</h3>
                <p className="text-gray-300">We move fast and adapt quickly to changing market conditions and technological advances.</p>
              </div>
              
              <div className="cyber-card p-6 text-center hover:scale-105 transition-all duration-300">
                <div className="w-16 h-16 bg-gradient-to-r from-indigo-400 to-purple-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Globe className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">Global Impact</h3>
                <p className="text-gray-300">We're committed to using technology to create positive change and solve global challenges.</p>
              </div>
            </div>
          </section>

          {/* Leadership Team */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold text-white mb-12 text-center neon-text">Leadership Team</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="cyber-card p-6 text-center">
                <div className="w-24 h-24 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-white">KJ</span>
                </div>
                <h3 className="text-xl font-bold text-white mb-2">Kleber Johnson</h3>
                <p className="text-cyan-400 mb-3">CEO & Founder</p>
                <p className="text-gray-300 text-sm">
                  Former Google AI researcher with 15+ years of experience in machine learning and quantum computing. 
                  Led the development of breakthrough algorithms that power our core AI solutions.
                </p>
              </div>
              
              <div className="cyber-card p-6 text-center">
                <div className="w-24 h-24 bg-gradient-to-r from-purple-400 to-pink-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-white">SM</span>
                </div>
                <h3 className="text-xl font-bold text-white mb-2">Sarah Mitchell</h3>
                <p className="text-purple-400 mb-3">CTO</p>
                <p className="text-gray-300 text-sm">
                  Former Microsoft Principal Engineer specializing in distributed systems and AI infrastructure. 
                  Architect of our scalable cloud platform that serves millions of users worldwide.
                </p>
              </div>
              
              <div className="cyber-card p-6 text-center">
                <div className="w-24 h-24 bg-gradient-to-r from-green-400 to-teal-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-white">DR</span>
                </div>
                <h3 className="text-xl font-bold text-white mb-2">David Rodriguez</h3>
                <p className="text-green-400 mb-3">VP of Engineering</p>
                <p className="text-gray-300 text-sm">
                  Former IBM Research scientist with expertise in quantum algorithms and autonomous systems. 
                  Leads our R&D team in developing next-generation AI technologies.
                </p>
              </div>
            </div>
          </section>

          {/* Contact CTA */}
          <section className="text-center">
            <div className="cyber-card p-8 max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold text-white mb-4 neon-text">Ready to Transform Your Business?</h2>
              <p className="text-gray-300 mb-8 text-lg">
                Join hundreds of companies that have already transformed their operations with our AI solutions. 
                Let's discuss how we can help you achieve your business goals.
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
import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Brain, Cloud, Shield, Users, Award, CheckCircle } from 'lucide-react';

const AboutPage: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>About Us - Zion Tech Group</title>
        <meta name="description" content="Learn about Zion Tech Group, a leading provider of AI and IT solutions. Our mission is to transform businesses through cutting-edge technology." />
      </Helmet>
      
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 py-20">
        <div className="container mx-auto px-4">
          {/* Hero Section */}
          <div className="text-center mb-16">
            <h1 className="text-5xl font-bold text-white mb-6">
              About <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">Zion Tech Group</span>
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Pioneering the future of AI and IT solutions with cutting-edge technology and expert consulting
            </p>
          </div>

          {/* Mission Section */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
            <div>
              <h2 className="text-3xl font-bold text-white mb-6">Our Mission</h2>
              <p className="text-gray-300 text-lg leading-relaxed mb-6">
                At Zion Tech Group, we are dedicated to transforming businesses through innovative AI and IT solutions. 
                Our mission is to empower organizations with cutting-edge technology that drives growth, efficiency, and competitive advantage.
              </p>
              <p className="text-gray-300 text-lg leading-relaxed">
                We believe that every business deserves access to world-class technology solutions, regardless of size or industry. 
                That's why we've built a comprehensive suite of AI and IT services designed to meet the unique needs of modern enterprises.
              </p>
            </div>
            <div className="bg-slate-800/50 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-8">
              <h3 className="text-2xl font-bold text-white mb-6">Why Choose Us?</h3>
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <CheckCircle className="w-6 h-6 text-cyan-400" />
                  <span className="text-gray-300">Expert AI and IT professionals</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="w-6 h-6 text-cyan-400" />
                  <span className="text-gray-300">Cutting-edge technology solutions</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="w-6 h-6 text-cyan-400" />
                  <span className="text-gray-300">24/7 support and maintenance</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="w-6 h-6 text-cyan-400" />
                  <span className="text-gray-300">Proven track record of success</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="w-6 h-6 text-cyan-400" />
                  <span className="text-gray-300">Custom solutions for every business</span>
                </div>
              </div>
            </div>
          </div>

          {/* Services Overview */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-white text-center mb-12">Our Core Services</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-slate-800/50 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-8 text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <Brain className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-4">AI Solutions</h3>
                <p className="text-gray-300">
                  Advanced artificial intelligence solutions including chatbots, content generation, 
                  data analytics, and automation tools.
                </p>
              </div>
              <div className="bg-slate-800/50 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-8 text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-600 rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <Cloud className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-4">IT Services</h3>
                <p className="text-gray-300">
                  Comprehensive IT infrastructure services including cloud migration, 
                  cybersecurity, web development, and mobile applications.
                </p>
              </div>
              <div className="bg-slate-800/50 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-8 text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-emerald-600 rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <Shield className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-4">Security & Support</h3>
                <p className="text-gray-300">
                  Enterprise-grade security solutions and 24/7 technical support 
                  to keep your systems running smoothly.
                </p>
              </div>
            </div>
          </div>

          {/* Stats Section */}
          <div className="bg-slate-800/50 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-12 mb-16">
            <h2 className="text-3xl font-bold text-white text-center mb-12">Our Impact</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="text-4xl font-bold text-cyan-400 mb-2">500+</div>
                <div className="text-gray-300">Projects Completed</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-purple-400 mb-2">50+</div>
                <div className="text-gray-300">Happy Clients</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-green-400 mb-2">99%</div>
                <div className="text-gray-300">Client Satisfaction</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-orange-400 mb-2">24/7</div>
                <div className="text-gray-300">Support Available</div>
              </div>
            </div>
          </div>

          {/* Team Section */}
          <div className="text-center">
            <h2 className="text-3xl font-bold text-white mb-6">Meet Our Team</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-12">
              Our team consists of experienced professionals who are passionate about technology 
              and committed to delivering exceptional results for our clients.
            </p>
            <div className="bg-slate-800/50 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-8 max-w-2xl mx-auto">
              <div className="flex items-center justify-center space-x-4">
                <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-full flex items-center justify-center">
                  <Users className="w-8 h-8 text-white" />
                </div>
                <div className="text-left">
                  <h3 className="text-xl font-bold text-white">Expert Team</h3>
                  <p className="text-gray-300">
                    Certified professionals with years of experience in AI, cloud computing, 
                    cybersecurity, and enterprise solutions.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AboutPage;

'use client';
import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { ArrowRight, Brain, Shield, Users, Award, Mail, Smartphone, Globe } from 'lucide-react';

export default function AboutPage() {
  return (
    <React.Fragment>
      <Helmet>
        <title>About - Zion Tech Group</title>
        <meta name="description" content="About solutions by Zion Tech Group" />
      </Helmet>
      
      <div className="container mx-auto px-4 py-20">
        <h1 className="text-4xl font-bold mb-8">About</h1>
        <div className="prose prose-invert max-w-none">
          <p className="text-xl text-gray-300 mb-8">
            Discover our comprehensive about solutions designed to meet your business needs.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
              <h3 className="text-xl font-semibold mb-4">Expert Solutions</h3>
              <p className="text-gray-300">
                Our team of experts delivers tailored solutions for your specific requirements.
              </p>
              
              {/* Contact Details */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                <div className="text-center">
                  <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-lg flex items-center justify-center mx-auto mb-3">
                    <Mail className="w-6 h-6 text-white" />
            </div></div></div>
'use client';

import React from 'react';
import { Users, Award, Target, Globe, Phone, Mail, MapPin } from 'lucide-react';
import Footer from '../components/Footer';
import SEOHead from '../components/SEOHead';
import ErrorBoundary from '../components/ErrorBoundary';
import Navigation from '../components/Navigation';

const AboutPage = () => {
  return (
    <ErrorBoundary>
      <SEOHead 
        title="About Zion Tech Group - AI-Powered Enterprise Solutions"
        description="Learn about Zion Tech Group's mission to transform businesses through AI-powered enterprise solutions, quantum computing, and digital transformation services."
      />
      <Navigation />
      
      <main className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        {/* Hero Section */}
        <section className="relative py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center">
              <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
                About <span className="text-cyan-400">Zion Tech Group</span>
              </h1>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                We are a leading technology company specializing in AI-powered enterprise solutions, 
                quantum computing, and digital transformation services.
              </p>
            </div>
          </div>
        </section>

        {/* Mission Section */}
</section>

        {/* Values Section */}
        <section className="py-16 px-4 bg-slate-800/50">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-white mb-4">Our Values</h2>
              <p className="text-xl text-gray-300">The principles that guide everything we do</p>
            </div></div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="cyber-card p-6">
                <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-lg flex items-center justify-center mb-4">
                  <Shield className="w-6 h-6 text-white" />
                </div></div></div>
                <h3 className="text-xl font-semibold text-white mb-3">Innovation</h3>
                <p className="text-gray-300">We constantly push the boundaries of what's possible with technology.</p>
              </div>
              <div className="cyber-card p-6">
                <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-600 rounded-lg flex items-center justify-center mb-4">
                  <Users className="w-6 h-6 text-white" />
                </div></div>
                <h3 className="text-xl font-semibold text-white mb-3">Collaboration</h3>
                <p className="text-gray-300">We work closely with our clients to achieve their goals.</p>
              </div>
              <div className="cyber-card p-6">
                <div className="w-12 h-12 bg-gradient-to-r from-pink-500 to-red-600 rounded-lg flex items-center justify-center mb-4">
                  <Target className="w-6 h-6 text-white" />
                </div></div>
                <h3 className="text-xl font-semibold text-white mb-3">Excellence</h3>
                <p className="text-gray-300">We deliver exceptional results that exceed expectations.</p>
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-900/50">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                  Our Mission
                </h2>
                <p className="text-lg text-gray-300 mb-6">
                  To empower businesses with cutting-edge AI technology and innovative solutions 
                  that drive growth, efficiency, and competitive advantage in the digital age.
                </p>
                <p className="text-lg text-gray-300">
                  We believe that artificial intelligence and advanced technology should be 
                  accessible to businesses of all sizes, helping them transform their operations 
                  and achieve unprecedented success.
                </p>
              </div>
              <div className="bg-gradient-to-r from-purple-500/20 to-blue-500/20 rounded-xl p-8">
                <div className="grid grid-cols-2 gap-6">
                  <div className="text-center">
                    <div className="text-3xl font-bold text-cyan-400 mb-2">50+</div>
                    <div className="text-gray-300">Projects Completed</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-cyan-400 mb-2">100+</div>
                    <div className="text-gray-300">Happy Clients</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-cyan-400 mb-2">5+</div>
                    <div className="text-gray-300">Years Experience</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-cyan-400 mb-2">24/7</div>
                    <div className="text-gray-300">Support</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Values Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Our Core Values
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                These principles guide everything we do and shape our approach to technology and client relationships.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6 text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full mx-auto mb-4 flex items-center justify-center">
                  <Target className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-4">Innovation</h3>
                <p className="text-gray-300">
                  We constantly push the boundaries of what's possible with AI and technology, 
                  delivering cutting-edge solutions that give our clients a competitive edge.
                </p>
              </div>
              
              <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6 text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-cyan-500 rounded-full mx-auto mb-4 flex items-center justify-center">
                  <Users className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-4">Collaboration</h3>
                <p className="text-gray-300">
                  We work closely with our clients as partners, understanding their unique needs 
                  and challenges to deliver tailored solutions that drive real business value.
                </p>
              </div>
              
              <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6 text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-orange-500 to-red-500 rounded-full mx-auto mb-4 flex items-center justify-center">
                  <Award className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-4">Excellence</h3>
                <p className="text-gray-300">
                  We maintain the highest standards in everything we do, from code quality to 
                  client service, ensuring exceptional results that exceed expectations.
                </p>
              </div>
            </div>
          </div>
        </section>

    <>
      <Helmet>
        <title>About Us - Zion Tech Group | Leading AI & IT Solutions Company</title>
        <meta name="description" content="Learn about Zion Tech Group, a leading technology company specializing in AI solutions, cloud infrastructure, cybersecurity, and custom software development. Founded in 2019." />
        <meta name="keywords" content="about zion tech group, AI company, technology company, cloud solutions, cybersecurity, software development" />
        <link rel="canonical" href="https://ziontechgroup.com/about" />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">

      </div>
    </React.Fragment>
);
};

export default AboutPage;
        {/* Contact Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-900/50">
          <div className="max-w-7xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Ready to Transform Your Business?
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Let's discuss how our AI-powered solutions can help your business achieve its goals 
              and stay ahead of the competition.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gradient-to-r from-purple-500 to-blue-600 hover:from-purple-600 hover:to-blue-700 text-white font-bold py-4 px-8 rounded-lg transition-all duration-300 transform hover:scale-105">
                Get Started Today
              </button>
              <button className="border border-purple-400 text-purple-400 hover:bg-purple-400 hover:text-white font-bold py-4 px-8 rounded-lg transition-all duration-300">
                Schedule Consultation
              </button>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </ErrorBoundary>
  );
};

export default AboutPage;
import React from 'react';
import {Helmet} from 'react-helmet-async';

import {Link} from 'react-router-dom';

export default function AboutPage() {</Helmet>
      <div className="min-h-screen bg-gradient-to-br from-blue-900 via-purple-900 to-indigo-900 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-white mb-6">About Zion Tech Group</h1>
          <p className="text-lg text-gray-300 mb-8">We are a leading technology company dedicated to transforming businesses through innovative AI and IT solutions.</p>
          <div className="space-x-4">
            <Link to="/contact" className="inline-block px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors">
              Work With Us
            </Link>
            <Link to="/team" className="inline-block px-6 py-3 bg-purple-600 text-white font-semibold rounded-lg hover:bg-purple-700 transition-colors">
              Meet Our Team
            </Link>}

        </div>
      </div>
    <  />
  );
};
export default AboutPage;

import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Helmet>
        <title>About - Zion Tech Group</title>
        <meta name="description" content="Professional about services by Zion Tech Group" />
      </Helmet>
      
      <div className="container mx-auto px-4 py-16">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-white mb-6">About</h1>
          <p className="text-lg text-gray-300 mb-8">Professional about services coming soon.</p>
          
          <Link
            to="/contact"
            className="inline-flex items-center bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-6 py-3 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300"
          >
            Contact Us
            <ArrowRight className="w-4 h-4 ml-2" />
          </Link>
        </div>
      </div>
    </div>
  );
}

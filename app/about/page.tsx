'use client';

import React from 'react';
import { Helmet } from 'react-helmet-async';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import {
  Brain,
  Cloud,
  Shield,
  Users,
  Target,
  Award,
  TrendingUp,
  Play,
  Download,
  ExternalLink,
  ChevronRight,
  Phone,
  Mail,
  MapPin
} from 'lucide-react';

const AboutPage: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>About Us - Zion Tech Group | Advanced AI and IT Solutions</title>
        <meta name="description" content="Learn about Zion Tech Group's mission to revolutionize business through advanced AI and IT solutions. Discover our team, values, and commitment to innovation." />
        <meta name="keywords" content="about us, Zion Tech Group, AI solutions, IT services, team, mission, values, innovation" />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        <Navigation />
        
        <main className="container mx-auto px-4 py-16 pt-24">
          {/* Hero Section */}
          <section className="text-center mb-16">
            <div className="max-w-6xl mx-auto">
              <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
                About Zion Tech Group
              </h1>
              <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
                We are pioneers in AI and IT solutions, dedicated to transforming businesses through innovative technology and exceptional service.
              </p>
            </div>
          </section>

          {/* Mission Section */}
          <section className="mb-16">
            <div className="max-w-6xl mx-auto">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                <div>
                  <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                    Our Mission
                  </h2>
                  <p className="text-lg text-gray-300 mb-6">
                    To revolutionize the way businesses operate by providing cutting-edge AI and IT solutions that drive growth, efficiency, and innovation. We believe technology should be accessible, powerful, and transformative.
                  </p>
                  <div className="space-y-4">
                    <div className="flex items-center space-x-3">
                      <Brain className="w-6 h-6 text-cyan-400" />
                      <span className="text-gray-300">AI-Powered Innovation</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <Cloud className="w-6 h-6 text-cyan-400" />
                      <span className="text-gray-300">Cloud-First Solutions</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <Shield className="w-6 h-6 text-cyan-400" />
                      <span className="text-gray-300">Enterprise Security</span>
                    </div>
                  </div>
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8 border border-white/20">
                  <h3 className="text-2xl font-bold text-white mb-4">Our Values</h3>
                  <ul className="space-y-3">
                    <li className="flex items-start space-x-3">
                      <Target className="w-5 h-5 text-cyan-400 mt-1" />
                      <span className="text-gray-300">Client-focused approach</span>
                    </li>
                    <li className="flex items-start space-x-3">
                      <Award className="w-5 h-5 text-cyan-400 mt-1" />
                      <span className="text-gray-300">Excellence in delivery</span>
                    </li>
                    <li className="flex items-start space-x-3">
                      <Users className="w-5 h-5 text-cyan-400 mt-1" />
                      <span className="text-gray-300">Collaborative partnership</span>
                    </li>
                    <li className="flex items-start space-x-3">
                      <TrendingUp className="w-5 h-5 text-cyan-400 mt-1" />
                      <span className="text-gray-300">Continuous innovation</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </section>

          {/* Team Section */}
          <section className="mb-16">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-12 text-center">
                Our Team
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 text-center">
                  <div className="w-20 h-20 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-full mx-auto mb-4 flex items-center justify-center">
                    <Users className="w-10 h-10 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-2">Expert Engineers</h3>
                  <p className="text-gray-300">50+ certified professionals with expertise in AI, cloud computing, and enterprise solutions.</p>
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 text-center">
                  <div className="w-20 h-20 bg-gradient-to-r from-purple-500 to-pink-600 rounded-full mx-auto mb-4 flex items-center justify-center">
                    <Brain className="w-10 h-10 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-2">AI Specialists</h3>
                  <p className="text-gray-300">Machine learning experts and data scientists with years of experience in cutting-edge AI technologies.</p>
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 text-center">
                  <div className="w-20 h-20 bg-gradient-to-r from-green-500 to-teal-600 rounded-full mx-auto mb-4 flex items-center justify-center">
                    <Shield className="w-10 h-10 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-2">Security Experts</h3>
                  <p className="text-gray-300">Cybersecurity professionals ensuring your data and systems are protected with enterprise-grade security.</p>
                </div>
              </div>
            </div>
          </section>

          {/* Contact Section */}
          <section className="mb-16">
            <div className="max-w-6xl mx-auto">
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8 border border-white/20">
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-8 text-center">
                  Ready to Work With Us?
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                  <div className="text-center">
                    <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-full mx-auto mb-4 flex items-center justify-center">
                      <Phone className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-xl font-bold text-white mb-2">Call Us</h3>
                    <p className="text-gray-300 mb-2">+1 (302) 464-0950</p>
                    <p className="text-sm text-gray-400">Mon-Fri: 9AM-6PM EST</p>
                  </div>
                  <div className="text-center">
                    <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-600 rounded-full mx-auto mb-4 flex items-center justify-center">
                      <Mail className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-xl font-bold text-white mb-2">Email Us</h3>
                    <p className="text-gray-300 mb-2">kleber@ziontechgroup.com</p>
                    <p className="text-sm text-gray-400">24/7 Support Available</p>
                  </div>
                  <div className="text-center">
                    <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-teal-600 rounded-full mx-auto mb-4 flex items-center justify-center">
                      <MapPin className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-xl font-bold text-white mb-2">Visit Us</h3>
                    <p className="text-gray-300 mb-2">364 E Main St STE 1008</p>
                    <p className="text-sm text-gray-400">Middletown, DE 19709</p>
                  </div>
                </div>
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
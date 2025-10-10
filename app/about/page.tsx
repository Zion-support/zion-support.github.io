'use client';
import React from 'react';
import { Helmet } from 'react-helmet-async';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import { 
  Brain, 
  Cloud, 
  Shield, 
  Code, 
  BarChart, 
  Users, 
  Zap, 
  ArrowRight, 
  Star, 
  Clock, 
  Globe, 
  Database, 
  Smartphone, 
  Lock, 
  TrendingUp, 
  Settings, 
  Calendar, 
  CheckSquare, 
  FileText, 
  MessageCircle, 
  Heart, 
  Monitor, 
  Package,
  Phone,
  Mail,
  MapPin
} from 'lucide-react';

const AboutPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Helmet>
        <title>About Us - Zion Tech Group | Leading AI & IT Solutions Provider</title>
        <meta name="description" content="Learn about Zion Tech Group, a leading provider of AI-powered enterprise solutions, quantum computing, and digital transformation services. Our expert team delivers cutting-edge technology solutions." />
        <meta name="keywords" content="about us, AI solutions, IT services, technology company, digital transformation, enterprise solutions" />
      </Helmet>

      <Navigation />
      
      <main className="pt-16">
        {/* Hero Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              About <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400">Zion Tech Group</span>
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              We are a leading technology company specializing in AI-powered solutions, 
              quantum computing, and digital transformation services.
            </p>
          </div>
        </section>

        {/* Mission Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl font-bold text-white mb-6">Our Mission</h2>
                <p className="text-lg text-gray-300 mb-6">
                  To empower businesses with cutting-edge AI and IT solutions that drive innovation, 
                  efficiency, and growth. We believe technology should be accessible, powerful, and transformative.
                </p>
                <div className="space-y-4">
                  <div className="flex items-center">
                    <CheckSquare className="w-5 h-5 text-cyan-400 mr-3" />
                    <span className="text-gray-300">Innovation-driven solutions</span>
                  </div>
                  <div className="flex items-center">
                    <CheckSquare className="w-5 h-5 text-cyan-400 mr-3" />
                    <span className="text-gray-300">Client-focused approach</span>
                  </div>
                  <div className="flex items-center">
                    <CheckSquare className="w-5 h-5 text-cyan-400 mr-3" />
                    <span className="text-gray-300">Cutting-edge technology</span>
                  </div>
                </div>
              </div>
              <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20">
                <h3 className="text-2xl font-bold text-white mb-4">Our Values</h3>
                <div className="space-y-4">
                  <div>
                    <h4 className="text-lg font-semibold text-cyan-400 mb-2">Innovation</h4>
                    <p className="text-gray-300">Pushing the boundaries of what's possible with technology</p>
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-cyan-400 mb-2">Excellence</h4>
                    <p className="text-gray-300">Delivering the highest quality solutions and services</p>
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-cyan-400 mb-2">Integrity</h4>
                    <p className="text-gray-300">Building trust through transparency and honesty</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white/5">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-white mb-4">Our Impact</h2>
              <p className="text-xl text-gray-300">Numbers that speak for themselves</p>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="text-4xl font-bold text-cyan-400 mb-2">500+</div>
                <div className="text-gray-300">Projects Completed</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-cyan-400 mb-2">99.9%</div>
                <div className="text-gray-300">Uptime Guarantee</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-cyan-400 mb-2">50+</div>
                <div className="text-gray-300">Expert Team Members</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-cyan-400 mb-2">24/7</div>
                <div className="text-gray-300">Support Available</div>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-white mb-6">Get in Touch</h2>
            <p className="text-xl text-gray-300 mb-8">
              Ready to transform your business with our AI and IT solutions?
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="tel:+13024640950"
                className="bg-gradient-to-r from-cyan-500 to-purple-500 text-white px-8 py-4 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-600 transition-all duration-300 inline-flex items-center justify-center"
              >
                <Phone className="w-5 h-5 mr-2" />
                Call (302) 464-0950
              </a>
              <a
                href="mailto:kleber@ziontechgroup.com"
                className="border-2 border-cyan-400 text-cyan-400 px-8 py-4 rounded-lg font-semibold hover:bg-cyan-400/10 transition-all duration-300 inline-flex items-center justify-center"
              >
                <Mail className="w-5 h-5 mr-2" />
                Email Us
              </a>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default AboutPage;

'use client';
import React from 'react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import {
  Brain,
  Cloud,
  Shield,
  Code,
  BarChart,
  Users,
  Phone,
  Mail,
  MapPin
} from 'lucide-react';

const AboutPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Navigation />
      
      <main className="container mx-auto px-4 py-16 pt-24">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-8 text-center">
            About Zion Tech Group
          </h1>
          <p className="text-xl text-gray-300 text-center mb-12 max-w-3xl mx-auto">
            We are a leading technology company specializing in AI solutions, 
            cloud infrastructure, and digital transformation services.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            <div className="cyber-card p-6 text-center">
              <Brain className="w-12 h-12 text-cyan-400 mx-auto mb-4" />
              <h3 className="text-xl font-bold text-white mb-4">AI Innovation</h3>
              <p className="text-gray-300">
                Cutting-edge artificial intelligence solutions that transform businesses.
              </p>
            </div>
            
            <div className="cyber-card p-6 text-center">
              <Cloud className="w-12 h-12 text-cyan-400 mx-auto mb-4" />
              <h3 className="text-xl font-bold text-white mb-4">Cloud Excellence</h3>
              <p className="text-gray-300">
                Scalable cloud infrastructure solutions for modern businesses.
              </p>
            </div>
            
            <div className="cyber-card p-6 text-center">
              <Shield className="w-12 h-12 text-cyan-400 mx-auto mb-4" />
              <h3 className="text-xl font-bold text-white mb-4">Security First</h3>
              <p className="text-gray-300">
                Enterprise-grade security solutions to protect your data.
              </p>
            </div>
          </div>
          
          <div className="cyber-card p-8 mb-16">
            <h2 className="text-3xl font-bold text-white mb-6 text-center">Our Mission</h2>
            <p className="text-lg text-gray-300 text-center leading-relaxed">
              To empower businesses with cutting-edge technology solutions that drive innovation, 
              efficiency, and growth. We believe in the transformative power of AI and technology 
              to solve complex business challenges and create sustainable competitive advantages.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="cyber-card p-8">
              <h3 className="text-2xl font-bold text-white mb-6">Contact Information</h3>
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <Phone className="w-5 h-5 text-cyan-400" />
                  <span className="text-gray-300">(302) 464-0950</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Mail className="w-5 h-5 text-cyan-400" />
                  <span className="text-gray-300">kleber@ziontechgroup.com</span>
                </div>
                <div className="flex items-start space-x-3">
                  <MapPin className="w-5 h-5 text-cyan-400 mt-1" />
                  <div className="text-gray-300">
                    <div>364 E Main St STE 1008</div>
                    <div>Middletown, DE 19709</div>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="cyber-card p-8">
              <h3 className="text-2xl font-bold text-white mb-6">Why Choose Us</h3>
              <ul className="space-y-3">
                <li className="flex items-center space-x-3">
                  <Code className="w-5 h-5 text-cyan-400" />
                  <span className="text-gray-300">Custom solutions tailored to your needs</span>
                </li>
                <li className="flex items-center space-x-3">
                  <BarChart className="w-5 h-5 text-cyan-400" />
                  <span className="text-gray-300">Proven track record of success</span>
                </li>
                <li className="flex items-center space-x-3">
                  <Users className="w-5 h-5 text-cyan-400" />
                  <span className="text-gray-300">Expert team of professionals</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default AboutPage;
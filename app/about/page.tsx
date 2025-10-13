import { Helmet } from 'react-helmet-async';
import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Brain, Shield, Users, Target, Award, Zap, CheckCircle, Phone, Mail, MapPin } from 'lucide-react';

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Helmet>
        <title>About - Zion Tech Group | AI & IT Solutions</title>
        <meta name="description" content="Learn about Zion Tech Group, a leading provider of AI and IT solutions for modern businesses." />
      </Helmet>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            About <span className="text-cyan-400">Zion Tech Group</span>
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            We are passionate about transforming businesses through cutting-edge AI and IT solutions.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
          <div>
            <h2 className="text-3xl font-bold text-white mb-6">Our Mission</h2>
            <p className="text-gray-300 mb-6 leading-relaxed">
              To empower businesses with innovative AI and IT solutions that drive growth, 
              efficiency, and competitive advantage in the digital age.
            </p>
            <p className="text-gray-300 leading-relaxed">
              We believe technology should be accessible, powerful, and transformative. 
              Our team of experts works tirelessly to deliver solutions that not only meet 
              today's needs but anticipate tomorrow's challenges.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center p-6 bg-slate-700/50 rounded-lg">
              <Target className="w-12 h-12 text-cyan-400 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-white mb-2">Innovation</h3>
              <p className="text-gray-300">Pioneering the future of AI and IT solutions</p>
            </div>
            <div className="text-center p-6 bg-slate-700/50 rounded-lg">
              <Users className="w-12 h-12 text-purple-400 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-white mb-2">Collaboration</h3>
              <p className="text-gray-300">Working together to achieve extraordinary results</p>
            </div>
            <div className="text-center p-6 bg-slate-700/50 rounded-lg">
              <Award className="w-12 h-12 text-yellow-400 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-white mb-2">Excellence</h3>
              <p className="text-gray-300">Delivering exceptional quality in everything we do</p>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          <div className="bg-slate-800 rounded-lg p-6">
            <Shield className="w-12 h-12 text-blue-400 mb-4" />
            <h3 className="text-xl font-bold text-white mb-3">Integrity</h3>
            <p className="text-gray-300">
              We maintain the highest ethical standards in all our interactions and solutions.
            </p>
          </div>
          <div className="bg-slate-800 rounded-lg p-6">
            <Zap className="w-12 h-12 text-yellow-400 mb-4" />
            <h3 className="text-xl font-bold text-white mb-3">Innovation</h3>
            <p className="text-gray-300">
              We continuously push the boundaries of what's possible with technology.
            </p>
          </div>
          <div className="bg-slate-800 rounded-lg p-6">
            <Users className="w-12 h-12 text-green-400 mb-4" />
            <h3 className="text-xl font-bold text-white mb-3">Collaboration</h3>
            <p className="text-gray-300">
              We work closely with our clients as partners in their success journey.
            </p>
          </div>
        </div>

        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-6">Get In Touch</h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Ready to transform your business with AI? Let's start a conversation about your goals and how we can help.
          </p>
        </div>
        
        <div className="max-w-4xl mx-auto">
          <div className="bg-slate-800 rounded-lg p-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <Phone className="w-8 h-8 text-blue-400 mx-auto mb-4" />
                <h3 className="text-lg font-semibold text-white mb-2">Phone</h3>
                <p className="text-gray-300">+1 (555) 123-4567</p>
              </div>
              <div className="text-center">
                <Mail className="w-8 h-8 text-green-400 mx-auto mb-4" />
                <h3 className="text-lg font-semibold text-white mb-2">Email</h3>
                <p className="text-gray-300">info@ziontechgroup.com</p>
              </div>
              <div className="text-center">
                <MapPin className="w-8 h-8 text-purple-400 mx-auto mb-4" />
                <h3 className="text-lg font-semibold text-white mb-2">Location</h3>
                <p className="text-gray-300">San Francisco, CA</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
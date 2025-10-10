'use client'
import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Users, Target, Award, MapPin, Phone, Mail } from 'lucide-react';

const AboutPage: React.FC = () => {
  return (
    <div className="min-h-screen py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            About Zion Tech Group
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            We are a leading provider of AI and IT solutions, dedicated to helping businesses 
            transform through innovative technology and expert guidance.
          </p>
        </div>

        {/* Mission & Vision */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          <div className="bg-slate-700/50 p-8 rounded-lg">
            <Target className="w-12 h-12 text-cyan-400 mb-4" />
            <h2 className="text-2xl font-bold text-white mb-4">Our Mission</h2>
            <p className="text-gray-300">
              To empower businesses with cutting-edge AI and IT solutions that drive growth, 
              efficiency, and innovation in the digital age.
            </p>
          </div>
          <div className="bg-slate-700/50 p-8 rounded-lg">
            <Award className="w-12 h-12 text-cyan-400 mb-4" />
            <h2 className="text-2xl font-bold text-white mb-4">Our Vision</h2>
            <p className="text-gray-300">
              To be the global leader in AI and IT solutions, transforming how businesses 
              operate and compete in the modern world.
            </p>
          </div>
        </div>

        {/* Team Section */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-white text-center mb-12">Our Team</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                name: 'Kleber Santos',
                role: 'CEO & Founder',
                description: 'Visionary leader with 15+ years in AI and technology innovation.'
              },
              {
                name: 'Sarah Johnson',
                role: 'CTO',
                description: 'Expert in cloud architecture and AI system design.'
              },
              {
                name: 'Michael Chen',
                role: 'Lead AI Engineer',
                description: 'Specialist in machine learning and neural network development.'
              }
            ].map((member, index) => (
              <div key={index} className="bg-slate-700/50 p-6 rounded-lg text-center">
                <div className="w-20 h-20 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-full mx-auto mb-4 flex items-center justify-center">
                  <Users className="w-10 h-10 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">{member.name}</h3>
                <p className="text-cyan-400 mb-2">{member.role}</p>
                <p className="text-gray-300 text-sm">{member.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Contact Info */}
        <div className="bg-slate-700/50 p-8 rounded-lg">
          <h2 className="text-2xl font-bold text-white mb-6 text-center">Get in Touch</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="flex items-center space-x-3">
              <Phone className="w-5 h-5 text-cyan-400" />
              <span className="text-gray-300">(302) 464-0950</span>
            </div>
            <div className="flex items-center space-x-3">
              <Mail className="w-5 h-5 text-cyan-400" />
              <span className="text-gray-300">kleber@ziontechgroup.com</span>
            </div>
            <div className="flex items-center space-x-3">
              <MapPin className="w-5 h-5 text-cyan-400" />
              <span className="text-gray-300">Delaware, USA</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
'use client';
import React from 'react';

const AboutPage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            About Zion Tech Group
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            We are a leading technology company specializing in AI and IT solutions for modern businesses.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          <div className="bg-slate-800/50 backdrop-blur-sm rounded-lg p-6">
            <h2 className="text-2xl font-bold text-white mb-4">Our Mission</h2>
            <p className="text-gray-300">
              To empower businesses with cutting-edge AI and IT solutions that drive innovation and growth.
            </p>
          </div>
          <div className="bg-slate-800/50 backdrop-blur-sm rounded-lg p-6">
            <h2 className="text-2xl font-bold text-white mb-4">Our Vision</h2>
            <p className="text-gray-300">
              To be the global leader in AI and IT solutions, transforming how businesses operate and compete.
            </p>
          </div>
        </div>
        
        <div className="text-center">
          <h2 className="text-3xl font-bold text-white mb-8">Why Choose Us?</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-slate-800/50 backdrop-blur-sm rounded-lg p-6">
              <h3 className="text-xl font-bold text-white mb-4">Expert Team</h3>
              <p className="text-gray-300">
                Our team consists of experienced professionals in AI, machine learning, and IT solutions.
              </p>
            </div>
            <div className="bg-slate-800/50 backdrop-blur-sm rounded-lg p-6">
              <h3 className="text-xl font-bold text-white mb-4">Innovation</h3>
              <p className="text-gray-300">
                We stay at the forefront of technology, constantly innovating and improving our solutions.
              </p>
            </div>
            <div className="bg-slate-800/50 backdrop-blur-sm rounded-lg p-6">
              <h3 className="text-xl font-bold text-white mb-4">Support</h3>
              <p className="text-gray-300">
                We provide comprehensive support and maintenance for all our solutions.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
=======
import React from 'react';
import { Helmet } from 'react-helmet-async';
<<<<<<< HEAD
import { Link } from 'react-router-dom';
import { ArrowRight, Brain, Shield, Users, Award, Globe, Zap } from 'lucide-react';

export default function AboutPage() {
  const teamMembers = [
    {
      name: "Sarah Chen",
      role: "CEO & Co-Founder",
      expertise: "AI Strategy & Business Development",
      image: "/images/team/sarah-chen.jpg",
      bio: "15+ years in AI and machine learning, former Google AI researcher."
    },
    {
      name: "Michael Rodriguez",
      role: "CTO & Co-Founder",
      expertise: "Cloud Architecture & Security",
      image: "/images/team/michael-rodriguez.jpg",
      bio: "Expert in cloud infrastructure and cybersecurity with 12+ years experience."
    },
    {
      name: "Emily Johnson",
      role: "Head of AI Research",
      expertise: "Machine Learning & Data Science",
      image: "/images/team/emily-johnson.jpg",
      bio: "PhD in Computer Science, specializing in deep learning and NLP."
    },
    {
      name: "David Kim",
      role: "Head of Engineering",
      expertise: "5G Technology & IoT",
      image: "/images/team/david-kim.jpg",
      bio: "Telecommunications expert with extensive experience in 5G implementation."
    }
  ];

  const values = [
    {
      icon: <Brain className="w-8 h-8" />,
      title: "Innovation First",
      description: "We constantly push the boundaries of what's possible with cutting-edge technology and creative solutions."
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: "Security & Trust",
      description: "We prioritize the security and privacy of our clients' data with enterprise-grade protection measures."
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Client Success",
      description: "Our success is measured by our clients' success. We're committed to delivering exceptional results."
    },
    {
      icon: <Award className="w-8 h-8" />,
      title: "Excellence",
      description: "We maintain the highest standards of quality in everything we do, from code to customer service."
    }
  ];

  const stats = [
    { number: "500+", label: "Projects Completed" },
    { number: "150+", label: "Happy Clients" },
    { number: "99.9%", label: "Uptime Guarantee" },
    { number: "24/7", label: "Support Available" }
  ];
=======
>>>>>>> 8b3c36c8a79bdf97a6a44b765072850456aacdcd

export default function PagePage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Helmet>
        <title>Page - Zion Tech Group</title>
        <meta name="description" content="Advanced page solutions by Zion Tech Group" />
      </Helmet>
      
      <div className="container mx-auto px-4 py-20">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-white mb-8">Page</h1>
          <p className="text-xl text-gray-300 mb-8">
            Advanced page solutions by Zion Tech Group
          </p>
        </div>
        
        <div className="max-w-4xl mx-auto">
          
      <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8 border border-white/20">
        <h2 className="text-2xl font-semibold text-white mb-4">Coming Soon</h2>
        <p className="text-gray-300">
          This page is under development. Please check back later for updates.
        </p>
      </div>
    
        </div>
      </div>
    </div>
  );
}
>>>>>>> cursor/fix-errors-and-merge-to-main-9be1

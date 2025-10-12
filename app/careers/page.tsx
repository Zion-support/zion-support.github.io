'use client';

import React from 'react';
import { CheckCircle, ArrowRight, Users, Briefcase, MapPin, Clock, Star, Heart, Zap, Shield, Globe } from 'lucide-react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

export default function CareersPage() {
  const openPositions = [
    {
      id: 'senior-ai-engineer',
      title: 'Senior AI Engineer',
      department: 'Engineering',
      location: 'Remote / Middletown, DE',
      type: 'Full-time',
      experience: '5+ years',
      description: 'Lead the development of cutting-edge AI solutions and machine learning models.',
      requirements: [
        'Master\'s degree in Computer Science or related field',
        '5+ years experience in AI/ML development',
        'Proficiency in Python, TensorFlow, PyTorch',
        'Experience with cloud platforms (AWS, GCP, Azure)',
        'Strong problem-solving and communication skills'
      ],
      benefits: ['Competitive salary', 'Health insurance', '401k matching', 'Flexible work hours', 'Professional development']
    },
    {
      id: 'frontend-developer',
      title: 'Frontend Developer',
      department: 'Engineering',
      location: 'Remote / Middletown, DE',
      type: 'Full-time',
      experience: '3+ years',
      description: 'Build beautiful, responsive user interfaces for our web applications.',
      requirements: [
        'Bachelor\'s degree in Computer Science or related field',
        '3+ years experience with React, TypeScript',
        'Experience with modern CSS frameworks (Tailwind, styled-components)',
        'Knowledge of web performance optimization',
        'Experience with testing frameworks (Jest, Cypress)'
      ],
      benefits: ['Competitive salary', 'Health insurance', '401k matching', 'Flexible work hours', 'Professional development']
    },
    {
      id: 'devops-engineer',
      title: 'DevOps Engineer',
      department: 'Engineering',
      location: 'Remote / Middletown, DE',
      type: 'Full-time',
      experience: '4+ years',
      description: 'Design and maintain our cloud infrastructure and CI/CD pipelines.',
      requirements: [
        'Bachelor\'s degree in Computer Science or related field',
        '4+ years experience in DevOps/Infrastructure',
        'Experience with AWS, Docker, Kubernetes',
        'Knowledge of Infrastructure as Code (Terraform, CloudFormation)',
        'Experience with monitoring and logging tools'
      ],
      benefits: ['Competitive salary', 'Health insurance', '401k matching', 'Flexible work hours', 'Professional development']
    },
    {
      id: 'sales-manager',
      title: 'Sales Manager',
      department: 'Sales',
      location: 'Remote / Middletown, DE',
      type: 'Full-time',
      experience: '5+ years',
      description: 'Lead our sales team and drive growth for our AI and IT services.',
      requirements: [
        'Bachelor\'s degree in Business or related field',
        '5+ years experience in B2B sales',
        'Experience in technology sales preferred',
        'Strong leadership and communication skills',
        'Proven track record of meeting sales targets'
      ],
      benefits: ['Competitive salary', 'Commission structure', 'Health insurance', '401k matching', 'Flexible work hours']
    }
  ];

  const benefits = [
    {
      icon: <Heart className="w-6 h-6 text-red-500" />,
      title: 'Health & Wellness',
      description: 'Comprehensive health insurance, dental, vision, and wellness programs.'
    },
    {
      icon: <Zap className="w-6 h-6 text-yellow-500" />,
      title: 'Flexible Work',
      description: 'Remote work options, flexible hours, and work-life balance.'
    },
    {
      icon: <Shield className="w-6 h-6 text-green-500" />,
      title: 'Security',
      description: '401k matching, life insurance, and financial planning support.'
    },
    {
      icon: <Globe className="w-6 h-6 text-blue-500" />,
      title: 'Growth',
      description: 'Professional development, conference attendance, and learning opportunities.'
    }
  ];

  const testimonials = [
    {
      name: 'Sarah Johnson',
      role: 'Senior AI Engineer',
      content: 'Working at Zion Tech Group has been incredible. The team is supportive, the projects are challenging, and the growth opportunities are endless.',
      avatar: 'SJ'
    },
    {
      name: 'Michael Chen',
      role: 'Frontend Developer',
      content: 'The culture here is amazing. We have the freedom to experiment with new technologies and the support to learn and grow.',
      avatar: 'MC'
    },
    {
      name: 'Emily Rodriguez',
      role: 'DevOps Engineer',
      content: 'I love the collaborative environment and the cutting-edge projects we work on. It\'s a great place to advance your career.',
      avatar: 'ER'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Helmet>
        <title>Careers - Zion Tech Group</title>
        <meta name="description" content="Join our team at Zion Tech Group. We're hiring talented individuals for AI engineering, frontend development, DevOps, and sales positions. Remote and on-site opportunities available." />
        <meta name="keywords" content="careers, jobs, hiring, AI engineer, frontend developer, DevOps, sales, remote work, Zion Tech Group" />
      </Helmet>
      
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-20 px-4 py-20">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Join Our Team
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
            Be part of the future of AI and IT solutions. We're looking for passionate, talented individuals 
            who want to make a difference in the technology industry.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              to="/contact" 
              className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-blue-700 hover:to-purple-700 transition-all duration-300 flex items-center justify-center"
            >
              View Open Positions
              <ArrowRight className="w-5 h-5 ml-2" />
            </Link>
            <Link 
              to="/contact" 
              className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white/10 transition-colors"
            >
              Send Resume
            </Link>
          </div>
        </div>
      </section>

      {/* Open Positions */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Open Positions
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Explore our current job openings and find the perfect role for your career.
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {openPositions.map((position) => (
              <div key={position.id} className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20 hover:bg-white/15 transition-all duration-300">
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h3 className="text-xl font-semibold text-white mb-2">{position.title}</h3>
                    <div className="flex items-center text-gray-400 text-sm mb-2">
                      <Briefcase className="w-4 h-4 mr-2" />
                      {position.department}
                    </div>
                    <div className="flex items-center text-gray-400 text-sm mb-2">
                      <MapPin className="w-4 h-4 mr-2" />
                      {position.location}
                    </div>
                    <div className="flex items-center text-gray-400 text-sm mb-4">
                      <Clock className="w-4 h-4 mr-2" />
                      {position.type} • {position.experience}
                    </div>
                  </div>
                </div>
                
                <p className="text-gray-300 mb-6">{position.description}</p>
                
                <div className="mb-6">
                  <h4 className="text-lg font-semibold text-white mb-3">Requirements:</h4>
                  <ul className="space-y-2">
                    {position.requirements.map((req, index) => (
                      <li key={index} className="flex items-start text-sm text-gray-300">
                        <CheckCircle className="w-4 h-4 text-green-400 mr-2 flex-shrink-0 mt-0.5" />
                        {req}
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div className="mb-6">
                  <h4 className="text-lg font-semibold text-white mb-3">Benefits:</h4>
                  <div className="flex flex-wrap gap-2">
                    {position.benefits.map((benefit, index) => (
                      <span key={index} className="bg-white/10 text-gray-300 px-3 py-1 rounded-full text-sm">
                        {benefit}
                      </span>
                    ))}
                  </div>
                </div>
                
                <Link
                  to="/contact"
                  className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white py-3 rounded-lg font-semibold hover:from-blue-700 hover:to-purple-700 transition-all duration-300 flex items-center justify-center"
                >
                  Apply Now
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 px-4 bg-white/5">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Why Work With Us?
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              We offer competitive benefits and a great work environment to help you thrive.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="text-center">
                <div className="flex items-center justify-center w-16 h-16 bg-gradient-to-r from-purple-500 to-blue-600 rounded-full mb-4 mx-auto">
                  {benefit.icon}
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">{benefit.title}</h3>
                <p className="text-gray-300">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              What Our Team Says
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Hear from our current team members about their experience working at Zion Tech Group.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-lg rounded-xl p-8 border border-white/20">
                <p className="text-gray-300 mb-6 italic">"{testimonial.content}"</p>
                <div className="flex items-center">
                  <div className="w-10 h-10 bg-gradient-to-r from-purple-500 to-blue-600 rounded-full flex items-center justify-center text-white font-semibold mr-3">
                    {testimonial.avatar}
                  </div>
                  <div>
                    <p className="font-semibold text-white">{testimonial.name}</p>
                    <p className="text-gray-400 text-sm">{testimonial.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center">
            <div className="bg-gradient-to-r from-purple-600 to-pink-600 rounded-3xl p-12">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Ready to Join Our Team?
              </h2>
              <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
                Don't see a position that fits? Send us your resume and we'll keep you in mind for future opportunities.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  to="/contact"
                  className="bg-white text-purple-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-all duration-300 flex items-center justify-center"
                >
                  Send Resume
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Link>
                <Link 
                  to="/contact" 
                  className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white/10 transition-colors"
                >
                  Contact HR
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}

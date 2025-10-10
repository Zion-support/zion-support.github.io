'use client';
import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Brain, Users, Award, Globe, CheckCircle, ArrowRight, Mail, Phone } from 'lucide-react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

const TeamPage: React.FC = () => {
  const team = [
    {
      name: 'Kleber Santos',
      role: 'CEO & Founder',
      description: 'Visionary leader with 15+ years in AI and technology innovation. Kleber has led digital transformation initiatives for Fortune 500 companies and startups alike.',
      image: '/api/placeholder/300/300',
      email: 'kleber@ziontechgroup.com',
      phone: '(302) 464-0950',
      expertise: ['AI Strategy', 'Digital Transformation', 'Leadership']
    },
    {
      name: 'Sarah Johnson',
      role: 'CTO',
      description: 'Expert in AI architecture and enterprise technology solutions. Sarah has built scalable AI systems serving millions of users worldwide.',
      image: '/api/placeholder/300/300',
      email: 'sarah@ziontechgroup.com',
      phone: '(302) 464-0951',
      expertise: ['AI Architecture', 'Cloud Computing', 'System Design']
    },
    {
      name: 'Michael Chen',
      role: 'Lead AI Engineer',
      description: 'Machine learning specialist with expertise in deep learning and NLP. Michael has published research in top-tier AI conferences.',
      image: '/api/placeholder/300/300',
      email: 'michael@ziontechgroup.com',
      phone: '(302) 464-0952',
      expertise: ['Machine Learning', 'Deep Learning', 'NLP']
    },
    {
      name: 'Emily Rodriguez',
      role: 'Head of Operations',
      description: 'Operations expert ensuring smooth project delivery and client satisfaction. Emily has managed complex AI implementations across multiple industries.',
      image: '/api/placeholder/300/300',
      email: 'emily@ziontechgroup.com',
      phone: '(302) 464-0953',
      expertise: ['Project Management', 'Client Relations', 'Operations']
    },
    {
      name: 'David Kim',
      role: 'Senior AI Developer',
      description: 'Full-stack AI developer with expertise in building end-to-end AI solutions. David specializes in computer vision and recommendation systems.',
      image: '/api/placeholder/300/300',
      email: 'david@ziontechgroup.com',
      phone: '(302) 464-0954',
      expertise: ['Computer Vision', 'Recommendation Systems', 'Full-Stack Development']
    },
    {
      name: 'Lisa Wang',
      role: 'Data Scientist',
      description: 'Data science expert with deep knowledge of statistical modeling and data visualization. Lisa helps clients extract insights from their data.',
      image: '/api/placeholder/300/300',
      email: 'lisa@ziontechgroup.com',
      phone: '(302) 464-0955',
      expertise: ['Data Science', 'Statistical Modeling', 'Data Visualization']
    }
  ];

  const stats = [
    { number: '50+', label: 'Team Members', icon: Users },
    { number: '15+', label: 'Years Experience', icon: Award },
    { number: '100+', label: 'Projects Delivered', icon: Globe },
    { number: '99%', label: 'Client Satisfaction', icon: CheckCircle }
  ];

  return (
    <>
      <Helmet>
        <title>Our Team - Zion Tech Group | Meet the Experts</title>
        <meta name="description" content="Meet the talented team behind Zion Tech Group. Our experts in AI, machine learning, and IT solutions are dedicated to transforming your business." />
        <meta name="keywords" content="team, experts, AI engineers, data scientists, IT professionals, Zion Tech Group" />
        <meta property="og:title" content="Our Team - Zion Tech Group" />
        <meta property="og:description" content="Meet the experts driving innovation in AI and IT solutions" />
        <meta property="og:type" content="website" />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        <Navigation />
        
        <main className="container mx-auto px-4 py-16 pt-24">
          {/* Header Section */}
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Meet Our Team
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              The talented individuals behind Zion Tech Group's success. Our diverse team of experts 
              brings together decades of experience in AI, machine learning, and IT solutions.
            </p>
          </div>

          {/* Stats Section */}
          <div className="mb-16">
            <div className="bg-white/5 backdrop-blur-lg rounded-2xl p-8 border border-white/10">
              <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
                {stats.map((stat, index) => (
                  <div key={index} className="flex flex-col items-center">
                    <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-full flex items-center justify-center mb-4">
                      <stat.icon className="w-8 h-8 text-white" />
                    </div>
                    <div className="text-4xl font-bold text-cyan-400 mb-2">{stat.number}</div>
                    <div className="text-gray-300">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Team Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {team.map((member, index) => (
              <div key={index} className="bg-white/5 backdrop-blur-lg rounded-2xl p-6 border border-white/10 hover:border-cyan-400/30 transition-all duration-300">
                <div className="text-center mb-6">
                  <div className="w-32 h-32 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-full mx-auto mb-4 flex items-center justify-center">
                    <span className="text-4xl font-bold text-white">{member.name.charAt(0)}</span>
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-2">{member.name}</h3>
                  <p className="text-cyan-400 text-lg mb-4">{member.role}</p>
                  <p className="text-gray-300 text-sm leading-relaxed">{member.description}</p>
                </div>

                <div className="mb-6">
                  <h4 className="text-lg font-semibold text-white mb-3">Expertise</h4>
                  <div className="flex flex-wrap gap-2">
                    {member.expertise.map((skill, skillIndex) => (
                      <span key={skillIndex} className="px-3 py-1 bg-cyan-500/20 text-cyan-400 text-xs rounded-full">
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="space-y-2">
                  <div className="flex items-center text-sm text-gray-300">
                    <Mail className="w-4 h-4 mr-2 text-cyan-400" />
                    <a href={`mailto:${member.email}`} className="hover:text-cyan-400 transition-colors">
                      {member.email}
                    </a>
                  </div>
                  <div className="flex items-center text-sm text-gray-300">
                    <Phone className="w-4 h-4 mr-2 text-cyan-400" />
                    <a href={`tel:${member.phone}`} className="hover:text-cyan-400 transition-colors">
                      {member.phone}
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* CTA Section */}
          <div className="text-center">
            <div className="bg-slate-800/50 rounded-lg p-8">
              <h2 className="text-2xl font-bold text-white mb-4">
                Ready to Work With Our Team?
              </h2>
              <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
                Our team is ready to help you transform your business with cutting-edge AI and IT solutions. 
                Contact us today to discuss your project.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="tel:+13024640950"
                  className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-purple-500 text-white rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-600 transition-all duration-300 flex items-center justify-center"
                >
                  Call: (302) 464-0950
                </a>
                <a 
                  href="mailto:kleber@ziontechgroup.com"
                  className="border-2 border-cyan-400 text-cyan-400 px-8 py-3 rounded-lg font-semibold hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300">
                  Email Us
                </a>
                <a 
                  href="/contact"
                  className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-indigo-600 transition-all duration-300">
                  Get Free Consultation
                </a>
              </div>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </>
  );
};

export default TeamPage;

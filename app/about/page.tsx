import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { ArrowRight, Brain, Shield, Users, Award } from 'lucide-react';

export default function AboutPage() {
  const teamMembers = [
    {
      name: "Sarah Chen",
      role: "CEO & Co-Founder",
      bio: "AI researcher with 15+ years experience in machine learning and business strategy.",
      image: "/team/sarah-chen.jpg"
    },
    {
      name: "Michael Rodriguez",
      role: "CTO & Co-Founder", 
      bio: "Full-stack developer and cloud architecture expert with a passion for scalable solutions.",
      image: "/team/michael-rodriguez.jpg"
    },
    {
      name: "Dr. Emily Watson",
      role: "Head of AI Research",
      bio: "PhD in Computer Science, specializing in natural language processing and neural networks.",
      image: "/team/emily-watson.jpg"
    },
    {
      name: "David Kim",
      role: "Lead Developer",
      bio: "Frontend specialist with expertise in React, TypeScript, and modern web technologies.",
      image: "/team/david-kim.jpg"
    }
  ];

  const values = [
    {
      icon: Brain,
      title: "Innovation",
      description: "We push the boundaries of what's possible with AI and technology."
    },
    {
      icon: Shield,
      title: "Security",
      description: "Your data and privacy are our top priorities in everything we build."
    },
    {
      icon: Users,
      title: "Collaboration",
      description: "We work closely with our clients to understand their unique needs."
    },
    {
      icon: Award,
      title: "Excellence",
      description: "We deliver high-quality solutions that exceed expectations."
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Helmet>
        <title>About Us - Zion Tech Group</title>
        <meta name="description" content="Learn about Zion Tech Group's mission to revolutionize business with AI and technology solutions." />
      </Helmet>
      
      <div className="container mx-auto px-4 py-20">
        {/* Hero Section */}
        <div className="text-center mb-20">
          <h1 className="text-5xl font-bold text-white mb-6">
            About Zion Tech Group
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
            We're a team of passionate technologists and AI experts dedicated to transforming 
            businesses through innovative solutions and cutting-edge technology.
          </p>
          <div className="flex justify-center">
            <Link 
              to="/contact" 
              className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors duration-200 flex items-center gap-2"
            >
              Get in Touch
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>

        {/* Mission Section */}
        <div className="max-w-4xl mx-auto mb-20">
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8 border border-white/20">
            <h2 className="text-3xl font-bold text-white mb-6 text-center">Our Mission</h2>
            <p className="text-lg text-gray-300 text-center leading-relaxed">
              To democratize AI and advanced technology, making it accessible and beneficial 
              for businesses of all sizes. We believe that every company should have access 
              to the tools and expertise needed to thrive in the digital age.
            </p>
          </div>
        </div>

        {/* Values Section */}
        <div className="mb-20">
          <h2 className="text-3xl font-bold text-white text-center mb-12">Our Values</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div key={index} className="text-center">
                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 h-full">
                  <value.icon className="w-12 h-12 text-blue-400 mx-auto mb-4" />
                  <h3 className="text-xl font-semibold text-white mb-3">{value.title}</h3>
                  <p className="text-gray-300">{value.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Team Section */}
        <div className="mb-20">
          <h2 className="text-3xl font-bold text-white text-center mb-12">Meet Our Team</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamMembers.map((member, index) => (
              <div key={index} className="text-center">
                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 h-full">
                  <div className="w-24 h-24 bg-gray-600 rounded-full mx-auto mb-4 flex items-center justify-center">
                    <span className="text-2xl font-bold text-white">
                      {member.name.split(' ').map(n => n[0]).join('')}
                    </span>
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-2">{member.name}</h3>
                  <p className="text-blue-400 mb-3">{member.role}</p>
                  <p className="text-gray-300 text-sm">{member.bio}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Stats Section */}
        <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8 border border-white/20">
          <div className="grid md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold text-white mb-2">50+</div>
              <div className="text-gray-300">Projects Completed</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-white mb-2">25+</div>
              <div className="text-gray-300">Happy Clients</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-white mb-2">5+</div>
              <div className="text-gray-300">Years Experience</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-white mb-2">24/7</div>
              <div className="text-gray-300">Support Available</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
'use client';
import React from 'react';
import { Users, Award, Code, Brain, Shield, Zap, Phone, Mail, MapPin, Linkedin, Github, Twitter } from 'lucide-react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

const TeamPage: React.FC = () => {
  const teamMembers = [
    {
      name: 'Kleber Santos',
      role: 'CEO & Founder',
      expertise: 'AI Strategy & Enterprise Solutions',
      image: '/team/kleber.jpg',
      bio: 'Visionary leader with 15+ years in AI and enterprise technology. Passionate about transforming businesses through cutting-edge AI solutions.',
      linkedin: 'https://linkedin.com/in/kleber-santos',
      github: 'https://github.com/kleber-santos'
    },
    {
      name: 'Dr. Sarah Chen',
      role: 'Chief AI Officer',
      expertise: 'Machine Learning & Neural Networks',
      image: '/team/sarah.jpg',
      bio: 'PhD in Computer Science from MIT. Expert in deep learning, natural language processing, and AI research.',
      linkedin: 'https://linkedin.com/in/sarah-chen-ai',
      github: 'https://github.com/sarah-chen'
    },
    {
      name: 'Marcus Rodriguez',
      role: 'CTO',
      expertise: 'Cloud Architecture & DevOps',
      image: '/team/marcus.jpg',
      bio: 'Cloud infrastructure expert with extensive experience in scalable systems and enterprise architecture.',
      linkedin: 'https://linkedin.com/in/marcus-rodriguez',
      github: 'https://github.com/marcus-rodriguez'
    },
    {
      name: 'Dr. Emily Watson',
      role: 'Head of Research',
      expertise: 'Quantum Computing & Advanced AI',
      image: '/team/emily.jpg',
      bio: 'Leading researcher in quantum machine learning and next-generation AI systems.',
      linkedin: 'https://linkedin.com/in/emily-watson',
      github: 'https://github.com/emily-watson'
    },
    {
      name: 'James Kim',
      role: 'Lead Developer',
      expertise: 'Full-Stack Development & AI Integration',
      image: '/team/james.jpg',
      bio: 'Full-stack developer specializing in AI-powered applications and modern web technologies.',
      linkedin: 'https://linkedin.com/in/james-kim-dev',
      github: 'https://github.com/james-kim'
    },
    {
      name: 'Lisa Thompson',
      role: 'Head of Design',
      expertise: 'UX/UI Design & AI Interface Design',
      image: '/team/lisa.jpg',
      bio: 'Creative director focused on designing intuitive AI interfaces and exceptional user experiences.',
      linkedin: 'https://linkedin.com/in/lisa-thompson-design',
      github: 'https://github.com/lisa-thompson'
    }
  ];

  const values = [
    {
      title: 'Innovation First',
      description: 'We push the boundaries of what\'s possible with AI and technology',
      icon: Brain
    },
    {
      title: 'Client Success',
      description: 'Your success is our success. We\'re committed to delivering results',
      icon: Award
    },
    {
      title: 'Excellence',
      description: 'We maintain the highest standards in everything we do',
      icon: Shield
    },
    {
      title: 'Collaboration',
      description: 'We work together to achieve extraordinary outcomes',
      icon: Users
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Navigation />
      
      <main className="container mx-auto px-4 py-16 pt-24">
        {/* Hero Section */}
        <section className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 neon-text">
            Meet Our Team
          </h1>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            The brilliant minds behind Zion Tech Group. Our diverse team of experts is dedicated to 
            pushing the boundaries of AI and delivering exceptional solutions for our clients.
          </p>
        </section>

        {/* Team Members */}
        <section className="mb-20">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-12 text-center neon-text">
            Our Expert Team
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {teamMembers.map((member, index) => (
              <div key={index} className="cyber-card p-8 hover:scale-105 transition-all duration-300">
                <div className="text-center mb-6">
                  <div className="w-32 h-32 bg-gradient-to-br from-cyan-500 to-purple-600 rounded-full mx-auto mb-4 flex items-center justify-center">
                    <Users className="w-16 h-16 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-2 neon-text">{member.name}</h3>
                  <div className="text-cyan-400 font-semibold mb-2">{member.role}</div>
                  <div className="text-purple-400 text-sm mb-4">{member.expertise}</div>
                </div>
                
                <p className="text-gray-300 mb-6 leading-relaxed">{member.bio}</p>
                
                <div className="flex justify-center space-x-4">
                  <a
                    href={member.linkedin}
                    className="text-cyan-400 hover:text-white transition-colors"
                    aria-label="LinkedIn"
                  >
                    <Linkedin className="w-6 h-6" />
                  </a>
                  <a
                    href={member.github}
                    className="text-cyan-400 hover:text-white transition-colors"
                    aria-label="GitHub"
                  >
                    <Github className="w-6 h-6" />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Values Section */}
        <section className="mb-20">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-12 text-center neon-text">
            Our Values
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div key={index} className="cyber-card p-6 text-center hover:scale-105 transition-all duration-300">
                <div className="w-16 h-16 bg-gradient-to-br from-cyan-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <value.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3 neon-text">{value.title}</h3>
                <p className="text-gray-300">{value.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Stats Section */}
        <section className="mb-20">
          <div className="cyber-card p-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-12 text-center neon-text">
              Team Excellence
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="text-4xl font-bold text-cyan-400 mb-2">50+</div>
                <div className="text-gray-300">Years Combined Experience</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-purple-400 mb-2">100+</div>
                <div className="text-gray-300">Projects Completed</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-green-400 mb-2">15+</div>
                <div className="text-gray-300">AI Patents</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-yellow-400 mb-2">99%</div>
                <div className="text-gray-300">Client Satisfaction</div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="text-center">
          <div className="cyber-card p-12 max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6 neon-text">
              Join Our Team
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              We're always looking for talented individuals who share our passion for AI and innovation. 
              Explore career opportunities and be part of the future.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/careers"
                className="cyber-button px-8 py-4 text-lg font-semibold hover:scale-105 transition-all duration-300"
              >
                View Open Positions
              </a>
              <a
                href="/contact"
                className="border-2 border-cyan-400 text-cyan-400 px-8 py-4 rounded-lg font-semibold hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300"
              >
                Contact Us
              </a>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default TeamPage;

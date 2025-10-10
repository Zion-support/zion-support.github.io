'use client';

import React from 'react';
import { 
  Users, 
  Award, 
  Target, 
  Globe, 
  CheckCircle,
  ArrowRight,
  Star,
  Clock,
  Shield,
  Rocket,
  Code,
  Brain,
  Cloud
} from 'lucide-react';

const AboutPage: React.FC = () => {
  const teamMembers = [
    {
      name: "Dr. Kleber Santos",
      role: "CEO & Founder",
      description: "AI researcher with 15+ years in machine learning and quantum computing",
      avatar: "KS"
    },
    {
      name: "Sarah Chen",
      role: "CTO",
      description: "Former Google AI engineer specializing in large-scale systems",
      avatar: "SC"
    },
    {
      name: "Michael Rodriguez",
      role: "Head of Research",
      description: "PhD in Computer Science with expertise in neural networks",
      avatar: "MR"
    }
  ];

  const values = [
    {
      title: "Innovation First",
      description: "We push the boundaries of what's possible with AI and technology",
      icon: Rocket
    },
    {
      title: "Client Success",
      description: "Your success is our success. We're committed to delivering results",
      icon: Target
    },
    {
      title: "Ethical AI",
      description: "We develop AI solutions that are fair, transparent, and beneficial",
      icon: Shield
    },
    {
      title: "Global Impact",
      description: "Making technology accessible and beneficial for everyone worldwide",
      icon: Globe
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg%20width%3D%2260%22%20height%3D%2260%22%20viewBox%3D%220%200%2060%2060%22%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%3E%3Cg%20fill%3D%22none%22%20fill-rule%3D%22evenodd%22%3E%3Cg%20fill%3D%22%239C92AC%22%20fill-opacity%3D%220.1%22%3E%3Ccircle%20cx%3D%2230%22%20cy%3D%2230%22%20r%3D%222%22/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-20"></div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
            About Zion Tech Group
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto">
            We are pioneers in AI technology, dedicated to transforming businesses through innovative solutions and cutting-edge research.
          </p>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-16 bg-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Our Mission
              </h2>
              <p className="text-lg text-gray-300 mb-6">
                To democratize artificial intelligence and make it accessible to businesses of all sizes. 
                We believe that AI should enhance human capabilities, not replace them.
              </p>
              <p className="text-lg text-gray-300 mb-8">
                Founded in 2020, Zion Tech Group has been at the forefront of AI innovation, 
                helping over 500+ companies transform their operations with intelligent solutions.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <button className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white font-semibold py-3 px-6 rounded-lg hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 flex items-center">
                  Our Story
                  <ArrowRight className="w-4 h-4 ml-2" />
                </button>
                <button className="border-2 border-cyan-400 text-cyan-400 font-semibold py-3 px-6 rounded-lg hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300">
                  View Timeline
                </button>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-6">
              <div className="cyber-card p-6 text-center">
                <div className="text-4xl font-bold text-cyan-400 mb-2">500+</div>
                <div className="text-gray-300">Clients Served</div>
              </div>
              <div className="cyber-card p-6 text-center">
                <div className="text-4xl font-bold text-purple-400 mb-2">50+</div>
                <div className="text-gray-300">Countries</div>
              </div>
              <div className="cyber-card p-6 text-center">
                <div className="text-4xl font-bold text-pink-400 mb-2">99.9%</div>
                <div className="text-gray-300">Uptime</div>
              </div>
              <div className="cyber-card p-6 text-center">
                <div className="text-4xl font-bold text-green-400 mb-2">24/7</div>
                <div className="text-gray-300">Support</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-16 bg-gradient-to-r from-purple-900/20 to-blue-900/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Our Values
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              The principles that guide everything we do and every solution we create.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div key={index} className="cyber-card p-8 text-center hover:scale-105 transition-all duration-300">
                <div className="w-16 h-16 mx-auto mb-6 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-xl flex items-center justify-center">
                  <value.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-4">{value.title}</h3>
                <p className="text-gray-300">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16 bg-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Meet Our Team
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              The brilliant minds behind our innovative AI solutions and cutting-edge technology.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {teamMembers.map((member, index) => (
              <div key={index} className="cyber-card p-8 text-center hover:scale-105 transition-all duration-300">
                <div className="w-24 h-24 mx-auto mb-6 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-full flex items-center justify-center text-white text-2xl font-bold">
                  {member.avatar}
                </div>
                <h3 className="text-2xl font-bold text-white mb-2">{member.name}</h3>
                <div className="text-cyan-400 font-semibold mb-4">{member.role}</div>
                <p className="text-gray-300">{member.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 bg-gradient-to-r from-cyan-500/10 to-purple-500/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Work With Us?
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Join the hundreds of companies that have transformed their business with our AI solutions.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white font-semibold py-4 px-8 rounded-xl hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 transform hover:scale-105">
              Get Started
            </button>
            <button className="border-2 border-cyan-400 text-cyan-400 font-semibold py-4 px-8 rounded-xl hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300">
              View Careers
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;
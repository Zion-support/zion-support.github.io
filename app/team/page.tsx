'use client'
import React from 'react'
import Navigation from '../components/Navigation'
import Footer from '../components/Footer'
import { CheckCircle, ArrowRight, Star, Clock, Zap, Shield, Brain, BarChart, Target, TrendingUp, Globe, Database, Users, Settings, Check } from 'lucide-react'

const teamMembers = [
  {
    id: 1,
    name: "Dr. Sarah Chen",
    role: "Chief Executive Officer",
    bio: "AI researcher with 15+ years of experience in machine learning and quantum computing.",
    image: "/api/placeholder/300/300",
    expertise: ["AI Research", "Quantum Computing", "Leadership"],
    social: {
      linkedin: "#",
      twitter: "#",
      github: "#",
    },
  },
  {
    id: 2,
    name: "Marcus Johnson",
    role: "Head of AI Research",
    bio: "Leading expert in neural networks and deep learning with multiple published papers.",
    image: "/api/placeholder/300/300",
    expertise: ["Deep Learning", "Neural Networks", "Research"],
    social: {
      linkedin: "#",
      twitter: "#",
      github: "#",
    },
  },
  {
    id: 3,
    name: "Dr. Elena Rodriguez",
    role: "Chief Technology Officer",
    bio: "Quantum computing specialist with expertise in quantum algorithms and hardware.",
    image: "/api/placeholder/300/300",
    expertise: ["Quantum Computing", "Algorithms", "Hardware"],
    social: {
      linkedin: "#",
      twitter: "#",
      github: "#",
    },
  },
  {
    id: 4,
    name: "James Wilson",
    role: "Head of Engineering",
    bio: "Full-stack engineer with expertise in scalable systems and cloud architecture.",
    image: "/api/placeholder/300/300",
    expertise: ["Software Engineering", "Cloud Architecture", "DevOps"],
    social: {
      linkedin: "#",
      twitter: "#",
      github: "#",
    },
  },
  {
    id: 5,
    name: "Dr. Priya Patel",
    role: "Head of Data Science",
    bio: "Data science expert with focus on machine learning and statistical modeling.",
    image: "/api/placeholder/300/300",
    expertise: ["Data Science", "Machine Learning", "Statistics"],
    social: {
      linkedin: "#",
      twitter: "#",
      github: "#",
    },
  },
  {
    id: 6,
    name: "Alex Thompson",
    role: "Head of Product",
    bio: "Product strategist with experience in AI product development and user experience.",
    image: "/api/placeholder/300/300",
    expertise: ["Product Strategy", "UX Design", "AI Products"],
    social: {
      linkedin: "#",
      twitter: "#",
      github: "#",
    },
  },
];

const stats = [
  { label: "Years of Experience", value: "50+" },
  { label: "AI Projects Delivered", value: "200+" },
  { label: "Team Members", value: "25+" },
  { label: "Client Satisfaction", value: "99%" },
];

const TeamPage: React.FC  = () => {
  return (
    <>
      <Navigation />
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        {/* Hero Section */}
        <section className="relative py-20 px-4 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-purple-600/20"></div>
          <div className="relative max-w-7xl mx-auto text-center">
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
              Our Team
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Meet the brilliant minds behind Zion Tech Group. Our diverse team
              of experts is dedicated to pushing the boundaries of AI and
              technology.
            </p>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-cyan-400 mb-2">
                  {stat.value}
                </div>
                <div className="text-gray-300">{stat.label}</div>
              </div>
            ))}
          </div>

          {/* Team Members */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {teamMembers.map((member) => (
              <div
                key={member.id}
                className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 hover:bg-white/20 transition-all duration-300 transform hover:scale-105"
              >
                <div className="text-center">
                  <div className="w-24 h-24 bg-gradient-to-r from-cyan-400 to-purple-400 rounded-full mx-auto mb-6 flex items-center justify-center">
                    <span className="text-2xl font-bold text-white">
                      {member.name.split(' ').map(n => n[0]).join('')}
                    </span>
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-2">{member.name}</h3>
                  <p className="text-cyan-400 mb-4">{member.role}</p>
                  <p className="text-gray-300 mb-6">{member.bio}</p>
                  
                  <div className="flex flex-wrap gap-2 justify-center mb-6">
                    {member.expertise.map((skill, index) => (
                      <span
                        key={index}
                        className="bg-cyan-400/20 text-cyan-300 px-3 py-1 rounded-full text-sm"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>

                  <div className="flex justify-center space-x-4">
                    <a
                      href={member.social.linkedin}
                      className="text-gray-400 hover:text-cyan-400 transition-colors"
                    >
                      LinkedIn
                    </a>
                    <a
                      href={member.social.twitter}
                      className="text-gray-400 hover:text-cyan-400 transition-colors"
                    >
                      Twitter
                    </a>
                    <a
                      href={member.social.github}
                      className="text-gray-400 hover:text-cyan-400 transition-colors"
                    >
                      GitHub
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* CTA Section */}
          <div className="text-center mt-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Ready to Work With Us?
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Join our team of innovators and help shape the future of AI and technology.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 transform hover:scale-105"
              >
                Contact Us
              </Link>
              <Link
                href="/careers"
                className="border border-cyan-400 text-cyan-400 px-8 py-4 rounded-lg font-semibold hover:bg-cyan-400 hover:text-white transition-all duration-300"
              >
                View Careers
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TeamPage;
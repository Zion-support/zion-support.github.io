import React from 'react';
import { motion } from 'framer-motion';
import { Linkedin, Mail, Github, Award, Users, Target, TrendingUp } from 'lucide-react';
import MainLayout from '../components/layout/MainLayout';

const teamMembers = [
  {
    name: "Kleber Santos",
    role: "CEO & Founder",
    bio: "Technology visionary with 15+ years of experience in AI and enterprise solutions. Led digital transformation initiatives for Fortune 500 companies.",
    image: "/api/placeholder/300/300",
    linkedin: "#",
    email: "kleber@ziontechgroup.com",
    github: "#"
  },
  {
    name: "Sarah Johnson",
    role: "CTO",
    bio: "Expert in cloud architecture and cybersecurity with a passion for building scalable, secure systems. Former AWS Solutions Architect.",
    image: "/api/placeholder/300/300",
    linkedin: "#",
    email: "sarah@ziontechgroup.com",
    github: "#"
  },
  {
    name: "Michael Chen",
    role: "Head of AI",
    bio: "Machine learning specialist with PhD in Computer Science. Published researcher in NLP and computer vision technologies.",
    image: "/api/placeholder/300/300",
    linkedin: "#",
    email: "michael@ziontechgroup.com",
    github: "#"
  },
  {
    name: "Emily Rodriguez",
    role: "Lead Developer",
    bio: "Full-stack developer with expertise in React, Node.js, and microservices architecture. Passionate about creating exceptional user experiences.",
    image: "/api/placeholder/300/300",
    linkedin: "#",
    email: "emily@ziontechgroup.com",
    github: "#"
  },
  {
    name: "David Kim",
    role: "DevOps Engineer",
    bio: "Infrastructure specialist focused on automation, monitoring, and cloud optimization. Certified in AWS, Azure, and Google Cloud platforms.",
    image: "/api/placeholder/300/300",
    linkedin: "#",
    email: "david@ziontechgroup.com",
    github: "#"
  },
  {
    name: "Lisa Wang",
    role: "UX/UI Designer",
    bio: "Creative designer with a focus on user-centered design and accessibility. Expert in creating intuitive interfaces for complex applications.",
    image: "/api/placeholder/300/300",
    linkedin: "#",
    email: "lisa@ziontechgroup.com",
    github: "#"
  }
];

const stats = [
  { icon: Users, value: "50+", label: "Team Members" },
  { icon: Award, value: "15+", label: "Years Experience" },
  { icon: Target, value: "500+", label: "Projects Delivered" },
  { icon: TrendingUp, value: "99%", label: "Client Satisfaction" }
];

const values = [
  {
    title: "Innovation",
    description: "We constantly push the boundaries of technology to deliver cutting-edge solutions that drive real business value."
  },
  {
    title: "Collaboration",
    description: "We believe in the power of teamwork and work closely with our clients to understand their unique challenges and goals."
  },
  {
    title: "Excellence",
    description: "We are committed to delivering the highest quality solutions and maintaining the highest standards in everything we do."
  },
  {
    title: "Integrity",
    description: "We conduct business with honesty, transparency, and ethical practices, building long-term relationships based on trust."
  }
];

export default function TeamPage() {
  return (
    <MainLayout>
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
        {/* Hero Section */}
        <section className="relative bg-gradient-to-br from-blue-900 via-purple-900 to-indigo-900 text-white py-20 overflow-hidden">
          <div className="absolute inset-0">
            <div className="absolute top-20 left-10 w-72 h-72 bg-blue-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse"></div>
            <div className="absolute top-40 right-10 w-72 h-72 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse animation-delay-2000"></div>
            <div className="absolute -bottom-8 left-20 w-72 h-72 bg-indigo-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse animation-delay-4000"></div>
          </div>
          
          <div className="container mx-auto px-4 relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center"
            >
              <h1 className="text-4xl md:text-6xl font-bold mb-6">
                Meet Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">Team</span>
              </h1>
              <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto">
                The brilliant minds behind our innovative technology solutions. We're passionate about delivering excellence and driving digital transformation.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {stats.map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="text-center"
                >
                  <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center mx-auto mb-4">
                    <stat.icon className="w-8 h-8 text-white" />
                  </div>
                  <div className="text-3xl md:text-4xl font-bold text-blue-600 mb-2">{stat.value}</div>
                  <div className="text-gray-600">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Team Members */}
        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Our Leadership Team
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Experienced professionals dedicated to delivering exceptional results and driving innovation in technology.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {teamMembers.map((member, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 p-8 text-center group"
                >
                  <div className="relative mb-6">
                    <img
                      src={member.image}
                      alt={member.name}
                      className="w-32 h-32 rounded-full mx-auto object-cover border-4 border-gray-200 group-hover:border-blue-500 transition-colors duration-300"
                    />
                  </div>
                  
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{member.name}</h3>
                  <p className="text-blue-600 font-semibold mb-4">{member.role}</p>
                  
                  <p className="text-gray-600 mb-6 leading-relaxed">
                    {member.bio}
                  </p>

                  <div className="flex justify-center space-x-4">
                    <a
                      href={member.linkedin}
                      className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center text-white hover:bg-blue-700 transition-colors duration-200"
                    >
                      <Linkedin className="w-5 h-5" />
                    </a>
                    <a
                      href={`mailto:${member.email}`}
                      className="w-10 h-10 bg-gray-600 rounded-full flex items-center justify-center text-white hover:bg-gray-700 transition-colors duration-200"
                    >
                      <Mail className="w-5 h-5" />
                    </a>
                    <a
                      href={member.github}
                      className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center text-white hover:bg-gray-900 transition-colors duration-200"
                    >
                      <Github className="w-5 h-5" />
                    </a>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Values Section */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Our Core Values
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                The principles that guide everything we do and shape our company culture.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {values.map((value, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="text-center p-6"
                >
                  <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-white font-bold text-xl">{value.title.charAt(0)}</span>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{value.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{value.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
          <div className="container mx-auto px-4 text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Join Our Team
              </h2>
              <p className="text-xl mb-8 max-w-2xl mx-auto">
                We're always looking for talented individuals who share our passion for technology and innovation.
              </p>
              <a
                href="/careers"
                className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors duration-200 inline-block"
              >
                View Open Positions
              </a>
            </motion.div>
          </div>
        </section>
      </div>
    </MainLayout>
  );
}
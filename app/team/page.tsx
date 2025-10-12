import React from 'react'
import { Helmet } from 'react-helmet-async'
import { Link } from 'react-router-dom'
import { ArrowRight, Linkedin, Github, Mail, Brain, Code, Shield, Cloud, Zap, Users, Award, Globe } from 'lucide-react'

export default function TeamPage() {
  const teamMembers = [
    {
      name: 'Sarah Johnson',
      role: 'CEO & Founder',
      department: 'Leadership',
      bio: 'Visionary leader with 15+ years in AI and technology. Former CTO at major tech companies.',
      image: '/api/placeholder/300/300',
      linkedin: '#',
      github: '#',
      email: 'sarah@ziontechgroup.com',
      icon: <Brain className="w-6 h-6 text-cyan-400" />
    },
    {
      name: 'Michael Chen',
      role: 'CTO',
      department: 'Engineering',
      bio: 'AI and machine learning expert with PhD in Computer Science. Led teams at Google and Microsoft.',
      image: '/api/placeholder/300/300',
      linkedin: '#',
      github: '#',
      email: 'michael@ziontechgroup.com',
      icon: <Code className="w-6 h-6 text-purple-400" />
    },
    {
      name: 'Emily Rodriguez',
      role: 'Head of Security',
      department: 'Cybersecurity',
      bio: 'Cybersecurity specialist with 12+ years protecting enterprise systems. CISSP certified.',
      image: '/api/placeholder/300/300',
      linkedin: '#',
      github: '#',
      email: 'emily@ziontechgroup.com',
      icon: <Shield className="w-6 h-6 text-red-400" />
    },
    {
      name: 'David Kim',
      role: 'Cloud Architect',
      department: 'Infrastructure',
      bio: 'Cloud infrastructure expert specializing in scalable solutions and DevOps practices.',
      image: '/api/placeholder/300/300',
      linkedin: '#',
      github: '#',
      email: 'david@ziontechgroup.com',
      icon: <Cloud className="w-6 h-6 text-blue-400" />
    },
    {
      name: 'Lisa Wang',
      role: '5G Solutions Lead',
      department: '5G Technology',
      bio: '5G and IoT specialist with expertise in network implementation and edge computing.',
      image: '/api/placeholder/300/300',
      linkedin: '#',
      github: '#',
      email: 'lisa@ziontechgroup.com',
      icon: <Zap className="w-6 h-6 text-yellow-400" />
    },
    {
      name: 'James Wilson',
      role: 'Head of AI Research',
      department: 'AI Research',
      bio: 'AI researcher with focus on natural language processing and computer vision applications.',
      image: '/api/placeholder/300/300',
      linkedin: '#',
      github: '#',
      email: 'james@ziontechgroup.com',
      icon: <Brain className="w-6 h-6 text-green-400" />
    }
  ]

  const stats = [
    { number: '150+', label: 'Team Members', icon: <Users className="w-6 h-6" /> },
    { number: '50+', label: 'Countries', icon: <Globe className="w-6 h-6" /> },
    { number: '15+', label: 'Years Experience', icon: <Award className="w-6 h-6" /> },
    { number: '99%', label: 'Client Satisfaction', icon: <Award className="w-6 h-6" /> }
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20">
      <Helmet>
        <title>Our Team - Zion Tech Group</title>
        <meta name="description" content="Meet the talented team behind Zion Tech Group. Expert professionals in AI, cloud services, cybersecurity, and 5G solutions." />
        <meta name="keywords" content="team, leadership, AI experts, cloud specialists, cybersecurity professionals, 5G engineers" />
      </Helmet>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-6">
            Meet Our{' '}
            <span className="bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
              Expert Team
            </span>
          </h1>
          <p className="text-lg sm:text-xl text-gray-300 max-w-3xl mx-auto">
            Our diverse team of professionals brings together decades of experience in AI, 
            cloud computing, cybersecurity, and 5G technology to deliver exceptional solutions.
          </p>
        </div>

        {/* Stats Section */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="inline-flex items-center justify-center w-12 h-12 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 rounded-full mb-4">
                {stat.icon}
              </div>
              <div className="text-2xl font-bold text-white mb-2">{stat.number}</div>
              <div className="text-gray-400 text-sm">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Team Members */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-white text-center mb-12">Leadership Team</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {teamMembers.map((member, index) => (
              <div key={index} className="bg-slate-800/50 rounded-xl p-6 border border-slate-700 hover:border-cyan-500/30 transition-all duration-300">
                <div className="text-center mb-4">
                  <div className="w-24 h-24 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                    {member.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-1">{member.name}</h3>
                  <p className="text-cyan-400 font-medium mb-2">{member.role}</p>
                  <p className="text-gray-400 text-sm mb-4">{member.department}</p>
                </div>
                
                <p className="text-gray-300 text-sm mb-6 text-center">{member.bio}</p>
                
                <div className="flex justify-center space-x-4">
                  <a href={member.linkedin} className="text-gray-400 hover:text-cyan-400 transition-colors">
                    <Linkedin className="w-5 h-5" />
                  </a>
                  <a href={member.github} className="text-gray-400 hover:text-cyan-400 transition-colors">
                    <Github className="w-5 h-5" />
                  </a>
                  <a href={`mailto:${member.email}`} className="text-gray-400 hover:text-cyan-400 transition-colors">
                    <Mail className="w-5 h-5" />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Culture Section */}
        <div className="mb-16">
          <div className="bg-gradient-to-r from-slate-800/50 to-purple-900/30 rounded-2xl p-8 border border-cyan-500/20">
            <h2 className="text-3xl font-bold text-white text-center mb-8">Our Culture & Values</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Brain className="w-8 h-8 text-cyan-400" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">Innovation First</h3>
                <p className="text-gray-300">We constantly push the boundaries of what's possible with AI and technology.</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users className="w-8 h-8 text-purple-400" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">Collaboration</h3>
                <p className="text-gray-300">We believe in the power of teamwork and diverse perspectives.</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Award className="w-8 h-8 text-yellow-400" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">Excellence</h3>
                <p className="text-gray-300">We strive for the highest quality in everything we do.</p>
              </div>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center">
          <div className="bg-gradient-to-r from-cyan-500/20 to-purple-500/20 rounded-2xl p-8 border border-cyan-500/30">
            <h2 className="text-3xl font-bold text-white mb-4">
              Join Our Team
            </h2>
            <p className="text-lg text-gray-300 mb-8 max-w-2xl mx-auto">
              We're always looking for talented individuals to join our mission of transforming businesses with cutting-edge technology.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/careers"
                className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 flex items-center justify-center"
              >
                View Open Positions
                <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
              <Link
                to="/contact"
                className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white/10 transition-colors"
              >
                Contact Us
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
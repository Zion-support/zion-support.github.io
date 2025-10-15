import React from 'react'
import { Helmet } from 'react-helmet-async'
import { Linkedin, Mail, Github, Award, Users, Target } from 'lucide-react'

const TeamPage: React.FC = () => {
  const teamMembers = [
    {
      name: 'Kleber Santos',
      role: 'CEO & Founder',
      bio: 'Visionary leader with 15+ years in AI and technology innovation.',
      image: '/api/placeholder/300/300',
      linkedin: '#',
      email: 'kleber@ziontechgroup.com',
      github: '#'
    },
    {
      name: 'Sarah Johnson',
      role: 'CTO',
      bio: 'Expert in cloud architecture and AI system design.',
      image: '/api/placeholder/300/300',
      linkedin: '#',
      email: 'sarah@ziontechgroup.com',
      github: '#'
    },
    {
      name: 'Michael Chen',
      role: 'Lead AI Engineer',
      bio: 'Machine learning specialist with expertise in deep learning and NLP.',
      image: '/api/placeholder/300/300',
      linkedin: '#',
      email: 'michael@ziontechgroup.com',
      github: '#'
    },
    {
      name: 'Emily Rodriguez',
      role: '5G Solutions Architect',
      bio: 'Telecommunications expert specializing in 5G network design.',
      image: '/api/placeholder/300/300',
      linkedin: '#',
      email: 'emily@ziontechgroup.com',
      github: '#'
    },
    {
      name: 'David Kim',
      role: 'Cybersecurity Director',
      bio: 'Security expert with extensive experience in enterprise protection.',
      image: '/api/placeholder/300/300',
      linkedin: '#',
      email: 'david@ziontechgroup.com',
      github: '#'
    },
    {
      name: 'Lisa Wang',
      role: 'Head of Product',
      bio: 'Product strategist focused on user experience and innovation.',
      image: '/api/placeholder/300/300',
      linkedin: '#',
      email: 'lisa@ziontechgroup.com',
      github: '#'
    }
  ]

  const stats = [
    { icon: Users, label: 'Team Members', value: '50+' },
    { icon: Award, label: 'Years Experience', value: '15+' },
    { icon: Target, label: 'Projects Completed', value: '500+' }
  ]

  return (
    <>
      <Helmet>
        <title>Our Team - Zion Tech Group</title>
        <meta name="description" content="Meet the talented team behind Zion Tech Group. Expert professionals in AI, 5G, cloud computing, and cybersecurity." />
        <meta name="keywords" content="team, leadership, AI experts, 5G specialists, cloud architects, cybersecurity professionals" />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        {/* Hero Section */}
        <div className="pt-20 pb-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Meet Our Team
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Talented professionals dedicated to advancing technology and delivering exceptional solutions
            </p>
          </div>
        </div>

        {/* Stats Section */}
        <div className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                    <stat.icon className="w-8 h-8 text-white" />
                  </div>
                  <div className="text-3xl font-bold text-white mb-2">{stat.value}</div>
                  <div className="text-gray-300">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Team Grid */}
        <div className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Leadership Team
              </h2>
              <p className="text-gray-300 text-lg max-w-2xl mx-auto">
                Experienced leaders driving innovation and excellence
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {teamMembers.map((member, index) => (
                <div key={index} className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 border border-slate-700 hover:border-cyan-500/50 transition-all duration-300 group text-center">
                  <div className="w-32 h-32 bg-gradient-to-r from-cyan-500/20 to-purple-600/20 rounded-full flex items-center justify-center mx-auto mb-4">
                    <div className="text-4xl text-cyan-400/50">👤</div>
                  </div>
                  <h3 className="text-xl font-bold text-white mb-2 group-hover:text-cyan-400 transition-colors">
                    {member.name}
                  </h3>
                  <p className="text-cyan-400 font-medium mb-3">{member.role}</p>
                  <p className="text-gray-300 text-sm mb-4">{member.bio}</p>
                  <div className="flex justify-center space-x-4">
                    <a href={member.linkedin} className="text-gray-400 hover:text-cyan-400 transition-colors">
                      <Linkedin className="w-5 h-5" />
                    </a>
                    <a href={`mailto:${member.email}`} className="text-gray-400 hover:text-cyan-400 transition-colors">
                      <Mail className="w-5 h-5" />
                    </a>
                    <a href={member.github} className="text-gray-400 hover:text-cyan-400 transition-colors">
                      <Github className="w-5 h-5" />
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Join Our Team
            </h2>
            <p className="text-gray-300 text-lg mb-8">
              We're always looking for talented individuals to join our mission of advancing technology
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gradient-to-r from-cyan-600 to-purple-600 text-white px-8 py-3 rounded-lg font-semibold hover:from-cyan-700 hover:to-purple-700 transition-all duration-300 transform hover:scale-105">
                View Open Positions
              </button>
              <button className="border border-cyan-500 text-cyan-400 px-8 py-3 rounded-lg font-semibold hover:bg-cyan-500/10 transition-all duration-300">
                Contact HR
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default TeamPage
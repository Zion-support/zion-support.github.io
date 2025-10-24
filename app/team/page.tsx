'use client';
import React from 'react';
import Link from 'next/link';


const teamMembers = [
  {
    id: 1,
    name: "Dr. Sarah Chen",
    role: "Chief Executive Officer",
    bio: "Leading AI research and strategic vision with 15+ years in enterprise technology.",
    expertise: ["AI Strategy", "Leadership", "Innovation"],
    image: "/api/placeholder/300/300"
  },
  {
    id: 2,
    name: "Michael Rodriguez",
    role: "Chief Technology Officer",
    bio: "Expert in scalable architecture and cutting-edge AI implementation.",
    expertise: ["System Architecture", "AI Development", "Cloud Computing"],
    image: "/api/placeholder/300/300"
  },
  {
    id: 3,
    name: "Dr. Emily Watson",
    role: "Head of AI Research",
    bio: "Pioneering machine learning algorithms and neural network optimization.",
    expertise: ["Machine Learning", "Deep Learning", "Research"],
    image: "/api/placeholder/300/300"
  },
  {
    id: 4,
    name: "James Thompson",
    role: "VP of Engineering",
    bio: "Building robust, scalable solutions that power the future of business.",
    expertise: ["Software Engineering", "DevOps", "Team Leadership"],
    image: "/api/placeholder/300/300"
  },
  {
    id: 5,
    name: "Lisa Park",
    role: "Head of Data Science",
    bio: "Transforming raw data into actionable insights and business intelligence.",
    expertise: ["Data Analytics", "Business Intelligence", "Statistics"],
    image: "/api/placeholder/300/300"
  },
  {
    id: 6,
    name: "David Kumar",
    role: "Lead AI Engineer",
    bio: "Specializing in natural language processing and computer vision applications.",
    expertise: ["NLP", "Computer Vision", "AI Implementation"],
    image: "/api/placeholder/300/300"
  }
]
const values = [
  {
    icon: '🧠',
    title: "Innovation",
      description: "We constantly push the boundaries of what's possible with AI and technology."},
  {
    icon: '🌍',
    title: "Global Impact",
      description: "Our solutions create positive change for businesses and communities worldwide."},
  {
    icon: '🛡️',
    title: "Trust & Security",
      description: "We prioritize data security and ethical AI practices in everything we do."},
  {
    icon: '⚡',
    title: "Excellence",
    description: "We deliver exceptional results through meticulous attention to detail."}
  ]
const stats = [
  { label: "Years Combined Experience", value: "150+" },
  { label: "AI Projects Delivered", value: "1000+" },
  { label: "Team Members", value: "25+" },
  { label: "Client Satisfaction", value: "99%" }
]
const TeamPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-purple-600/20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm: px-6 lg:px-8 py-24">
          <div className="text-center">
            <h1 className="text-4xl md: text-6xl font-bold text-white mb-6">
              Our Team
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Meet the brilliant minds behind our innovative AI and IT solutions.
              Our diverse team of experts is dedicated to transforming your business.
            </p>
          </div>
          {/* Stats Section */}
          <div className="grid grid-cols-2 md: grid-cols-4 gap-8 mb-20">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-3xl md: text-4xl font-bold text-white mb-2">
                  {stat.value}
                </div>
                <div className="text-gray-300">{stat.label}</div>
              </div>
            ))}
          </div>
          {/* Team Members */}
          <div className="grid md: grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
            {teamMembers.map((member) => (
              <div key={member.id} className="bg-white/10 backdrop-blur-md rounded-xl p-6 hover: bg-white/20 transition-all duration-300">
                <div className="text-center">
                  <div className="w-24 h-24 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full mx-auto mb-4 flex items-center justify-center">
                    <span className="text-2xl font-bold text-white">
                      {member.name.split(' ').map(n => n[0]).join('')}
                    </span>
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-2">
                    {member.name}
                  </h3>
                  <p className="text-blue-300 mb-3">
                    {member.role}
                  </p>
                  <p className="text-gray-300 text-sm mb-4">
                    {member.bio}
                  </p>
                  <div className="flex flex-wrap gap-2 justify-center">
                    {member.expertise.map((skill, skillIndex) => (
                      <span key={skillIndex} className="px-3 py-1 bg-blue-500/20 text-blue-300 text-xs rounded-full">
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
          {/* Values Section */}
          <div className="text-center mb-16">
            <h2 className="text-3xl md: text-4xl font-bold text-white mb-4">
              Our Values
            </h2>
            <p className="text-xl text-gray-300 mb-12 max-w-3xl mx-auto">
              The principles that guide everything we do and shape our company culture.
            </p>
            <div className="grid md: grid-cols-2 lg:grid-cols-4 gap-8">
              {values.map((value, index) => (
                <div key={index} className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full mx-auto mb-4 flex items-center justify-center">
                    <span className="text-2xl">{value.icon}</span>
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-3">
                    {value.title}
                  </h3>
                  <p className="text-gray-300">
                    {value.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
          {/* CTA Section */}
          <div className="text-center">
            <h2 className="text-3xl md: text-4xl font-bold text-white mb-4">
              Ready to Work With Us?
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Join our team of innovators and help shape the future of AI and technology.
            </p>
            <div className="flex flex-col sm: flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="bg-blue-600 hover: bg-blue-700 text-white px-8 py-4 rounded-lg font-semibold transition-colors duration-200 inline-flex items-center justify-center"
              >
                View Open Positions
              </Link>
              <Link
                href="/about"
                className="border border-white text-white hover: bg-white hover:text-slate-900 px-8 py-4 rounded-lg font-semibold transition-colors duration-200 inline-flex items-center justify-center"
              >
                Learn About Our Culture
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
export default TeamPage
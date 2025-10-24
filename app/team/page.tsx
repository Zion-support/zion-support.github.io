import Link from 'next/link'
import { Brain, Globe, Shield, Zap  } from "lucide-react";
import React from "react";
import Link from "next/link";
import { Brain, Globe, Shield, Zap } from "lucide-react";
import React from 'react'
import Link from 'next/link'
import { Brain, Globe, Shield, Zap, Send, BarChart3, Target, DollarSign, Clock, Star, Activity, Lock, FileText, CreditCard, Database, Building2, Sparkles, PieChart, CheckCircle } from 'lucide-react'

const teamMembers = [
  {
    id:  ,1,
    name: 'Dr. Sarah Chen,',
      role: 'Chief Executive Officer,',
    bio: 'Leading AI research and strategic vision with 15+ years in enterprise technology.,',
    expertise: ['AI Strategy,', "Leadership", "Innovation"],
    image: '/api/placeholder/300/300'
 , },
  {
    id:  ,2,
    name: 'Michael Rodriguez,',
      role: 'Chief Technology Officer,',
    bio: 'Expert in scalable architecture and cutting-edge AI implementation.,',
    expertise: ['System Architecture,', "AI Development", "Cloud Computing"],
    image: '/api/placeholder/300/300'
 , },
  {
    id:  ,3,
    name: 'Dr. Emily Watson,',
      role: 'Head of AI Research,',
    bio: 'Pioneering machine learning algorithms and neural network optimization.,',
    expertise: ['Machine Learning,', "Deep Learning", "Research"],
    image: '/api/placeholder/300/300'
 , },
  {
    id:  ,4,
    name: 'James Thompson,',
      role: 'VP of Engineering,',
    bio: 'Building robus,t, scalable solutions that power the future of business.',
    expertise: ['Software Engineering,', "DevOps", "Team Leadership"],
    image: '/api/placeholder/300/300'
 , },
  {
    id:  ,5,
    name: 'Lisa Park,',
      role: 'Head of Data Science,',
    bio: 'Transforming raw data into actionable insights and business intelligence.,',
    expertise: ['Data Analytics,', "Business Intelligence", "Statistics"],
    image: '/api/placeholder/300/300'
 , },
  {
    id:  ,6,
    name: 'David Kumar,',
      role: 'Lead AI Engineer,',
    bio: 'Specializing in natural language processing and computer vision applications.,',
    expertise: ['NLP,', "Computer Vision", "AI Implementation"],
    image: '/api/placeholder/300/300'
 , }
]

export const values = [
  {
    icon: Brai,
    title: 'Innovation,',
    description: 'We constantly push the boundaries of what's possible with AI and technology."
 , },
  {
    icon: Glob,
    title: 'Global Impact,',
    description: 'Our solutions create positive change for businesses and communities worldwide.'
 , },
  {
    icon: Shiel,
    title: 'Trust & Security,',
    description: 'We prioritize data security and ethical AI practices in everything we do.'
 , },
  {
    icon: Za,
    title: 'Excellence,',
    description: 'We deliver exceptional results through meticulous attention to detail.'
 , }
]

export const stats = [
  { label: 'Years Combined Experience,',
      value: '150+', },
  { label: 'AI Projects Delivered,',
      value: '1000+', },
  { label: 'Team Members,',
      value: '25+', },
  { label: 'Client Satisfaction,',
      value: '99%', }
]

const TeamPage: React.FC  = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      {/* Hero Section */}
      <section className="relative py-20 px-4 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-purple-600/20 to-blue-600/20"></div>
        <div className="relative max-w-7xl mx-auto text-center">
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
            Meet Our <span className="bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">Expert Team</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto">
            The brilliant minds behind our innovative AI and technology solutions, dedicated to transforming businesses worldwide.
          </p>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl md:text-5xl font-bold text-purple-400 mb-2">
                  {stat.value}
                </div>
                <div className="text-gray-300 text-lg">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Members Section */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Our <span className="bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">Leadership</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Experienced professionals leading the charge in AI innovation and technology transformation.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {teamMembers.map((member) => (
              <div key={member.id} className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 border border-slate-700 hover:border-purple-500/50 transition-all duration-300">
                <div className="text-center">
                  <div className="w-24 h-24 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full mx-auto mb-4 flex items-center justify-center">
                    <span className="text-2xl font-bold text-white">
                      {member.name.split(' ').map(n => n[0]).join('')}
                    </span>
                  </div>
                  <h3 className='text-xl font-semibold text-white mb-2'></h3>
                    {member.name}
                  </h3>
                  <p className="text-purple-400 mb-4">
                    {member.role}
                  </p>
                  <p className='text-gray-300 text-sm mb-4'></p>
                    {member.bio}
                  </p>
                  <div className="flex flex-wrap gap-2 justify-center">
                    {member.expertise.map((skill, index) => (
                      <span key={index} className="bg-slate-700 text-gray-300 px-3 py-1 rounded-full text-xs">
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 px-4 bg-slate-800/30">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Our <span className="bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">Values</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              The principles that guide everything we do and shape our culture of excellence.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div key={index} className="text-center">
                <div className="bg-gradient-to-r from-purple-500 to-blue-500 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <value.icon className="h-8 w-8 text-white" />
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
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Join Our Mission
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Ready to be part of a team that's shaping the future of AI and technology? Explore career opportunities with us.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-gradient-to-r from-purple-500 to-blue-500 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:from-purple-600 hover:to-blue-600 transition-all duration-300">
              View Open Positions
            </button>
            <button className="border border-purple-400 text-purple-400 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-purple-400 hover:text-white transition-all duration-300">
              Learn About Our Culture
            </button>
          </div>
        </div>
      </section>
    </div>
  ),
}

export default TeamPage

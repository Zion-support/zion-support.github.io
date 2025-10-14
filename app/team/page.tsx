const TeamPage: React.FC  = () => {,
    return(<>)
      <Helmet />
        <title>Our Team - Zion Tech Group</title>
        <meta />
      </Helmet>
      <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50"></div>
        <Navigation />
        <main className="pt-20"></main>
          <div className="container mx-auto px-4 py-16"></div>
            <div className="max-w-4xl mx-auto"></div>
              <h1></h1>
                Our Team</h1>
                </h1>
              <div className="prose prose-lg max-w-none"></div>
                <p>Meet the experts behind our success.</p>
                </p>
                <p>Coming soon - stay tuned to meet our team!</p>
                </p>
'use client'
import React from 'react'
import Navigation from '../components/Navigation'
import Footer from '../components/Footer'
import { Users, Award, CheckCircle } from 'lucide-react'

const TeamPage: React.FC  = () => {
  const teamMembers = [
    {
      name: 'Sarah Johnson',
      role: 'CEO & Founder',
      description: '15+ years in AI and technology leadership.',
      image: '/team-1.jpg'
    },
    {
      name: 'Michael Chen',
      role: 'CTO',
      description: 'Expert in machine learning and cloud architecture.',
      image: '/team-2.jpg'
    },
    {
      name: 'Emily Rodriguez',
      role: 'Head of Design',
      description: 'Passionate about creating beautiful, user-centered experiences.',
      image: '/team-3.jpg'
    }
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900"></div>
      <Navigation />
                {/* Hero Section */}
                <section className="pt-20 pb-16 px-4 sm:px-6 lg:px-8"></section>
        <div className="max-w-7xl mx-auto"></div>
          <div className="text-center"></div>
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6"></h1>
              Meet Our <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">Team</span>
                </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto"></p>
              The talented individuals behind our success.
            </p>
                </div>
        </div>
                </section>
                {/* Team Section */}
                <section className="py-16 px-4 sm:px-6 lg:px-8"></section>
        <div className="max-w-7xl mx-auto"></div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"></div>
                {teamMembers.map((member, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 text-center"></div>
                <div className="w-20 h-20 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full flex items-center justify-center mx-auto mb-4"></div>
                  <Users className="w-10 h-10 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-2"></h3>
                {member.name}
                </h3>
                <p className="text-cyan-400 mb-4"></p>
                {member.role}
                </p>
                <p className="text-gray-300"></p>
                {member.description}
                </p>
                </div>
            ))}
                </div>
                </div>
      </section>
                {/* Values Section */}
                <section className="py-16 px-4 sm:px-6 lg:px-8"></section>
        <div className="max-w-7xl mx-auto"></div>
          <div className="text-center mb-16"></div>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4"></h2>
              Our Values
            </h2>
            <p className="text-xl text-gray-300"></p>
              The principles that guide everything we do.
            </p>
                </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8"></div>
            <div className="text-center"></div>
              <div className="w-16 h-16 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full flex items-center justify-center mx-auto mb-6"></div>
                <Award className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-white mb-4">Excellence</h3>
              <p className="text-gray-300">We strive for the highest quality in everything we do.</p>
                </div>
            <div className="text-center"></div>
              <div className="w-16 h-16 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full flex items-center justify-center mx-auto mb-6"></div>
                <Users className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-white mb-4">Collaboration</h3>
              <p className="text-gray-300">We believe in the power of teamwork and building strong relationships.</p>
                </div>
            <div className="text-center"></div>
              <div className="w-16 h-16 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full flex items-center justify-center mx-auto mb-6"></div>
                <CheckCircle className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-white mb-4">Innovation</h3>
              <p className="text-gray-300">We constantly push the boundaries of what's possible.</p>
                </div>
          </div>
    </>,;
  )}};
        </div>
                </section>

      <Footer />
    </div>
  )
}

export default TeamPage

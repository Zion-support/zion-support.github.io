import React from "react"
import { Helmet } from "react-helmet-async"
import { Link } from "react-router-dom"
import { ArrowRight, Linkedin, Mail } from "lucide-react"

const TeamPage = () => {
  const teamMembers = [
    {
      name: "John Smith",
      role: "CEO & Founder",
      bio: "Visionary leader with 15+ years in AI and technology",
      color: "from-blue-500 to-cyan-500"
    },
    {
      name: "Sarah Johnson",
      role: "CTO",
      bio: "Technical expert specializing in AI and machine learning",
      color: "from-purple-500 to-pink-500"
    },
    {
      name: "Mike Chen",
      role: "Lead Developer",
      bio: "Full-stack developer with expertise in modern technologies",
      color: "from-green-500 to-emerald-500"
    }
  ]

  return (
    <>
      <Helmet>
        <title>Our Team - Zion Tech Group</title>
        <meta name="description" content="Meet the experts behind our AI and IT solutions." />
      </Helmet>
      <div className="min-h-screen bg-gradient-to-br from-blue-900 via-purple-900 to-indigo-900 py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h1 className="text-4xl font-bold text-white mb-6">Our Team</h1>
            <p className="text-lg text-gray-300 max-w-3xl mx-auto">
              Meet the talented individuals behind our innovative AI and IT solutions.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {teamMembers.map((member, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-sm rounded-xl p-8 border border-white/20 hover:bg-white/20 transition-all duration-300 text-center">
                <div className={`w-24 h-24 rounded-full bg-gradient-to-r ${member.color} mx-auto mb-6 flex items-center justify-center`}>
                  <span className="text-2xl font-bold text-white">{member.name.charAt(0)}</span>
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">{member.name}</h3>
                <p className="text-cyan-400 mb-4">{member.role}</p>
                <p className="text-gray-300 mb-6">{member.bio}</p>
                <div className="flex justify-center space-x-4">
                  <button className="text-gray-400 hover:text-white transition-colors">
                    <Linkedin className="h-6 w-6" />
                  </button>
                  <button className="text-gray-400 hover:text-white transition-colors">
                    <Mail className="h-6 w-6" />
                  </button>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center">
            <Link
              to="/"
              className="inline-flex items-center px-8 py-4 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors"
            >
              Back to Home
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </div>
        </div>
      </div>
    </>
  )
}

export default TeamPage

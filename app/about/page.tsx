import React from 'react'
import { ArrowRight, Users, Target, Award, CheckCircle } from 'lucide-react'
import { Link } from 'react-router-dom'

export default function AboutPage() {
  const values = [
    {
      icon: <Target className="w-8 h-8 text-blue-500" />,
      title: 'Innovation',
      description: 'We stay at the forefront of technology, constantly exploring new ways to solve complex problems.'
    },
    {
      icon: <Users className="w-8 h-8 text-green-500" />,
      title: 'Collaboration',
      description: 'We work closely with our clients to understand their unique needs and deliver tailored solutions.'
    },
    {
      icon: <Award className="w-8 h-8 text-purple-500" />,
      title: 'Excellence',
      description: 'We are committed to delivering high-quality solutions that exceed expectations and drive results.'
    }
  ]

  const team = [
    {
      name: 'Kleber Santos',
      role: 'CEO & Founder',
      description: 'Visionary leader with 15+ years in AI and technology solutions.'
    },
    {
      name: 'Sarah Johnson',
      role: 'CTO',
      description: 'Technical expert specializing in cloud architecture and AI implementation.'
    },
    {
      name: 'Michael Chen',
      role: 'Lead AI Engineer',
      description: 'AI specialist focused on machine learning and automation solutions.'
    }
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20">
      {/* Hero Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            About
            <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              {' '}Zion Tech Group
            </span>
          </h1>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            We are a leading technology company specializing in AI solutions, IT services, and digital transformation. 
            Our mission is to empower businesses with cutting-edge technology that drives growth and innovation.
          </p>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Our Mission
              </h2>
              <p className="text-lg text-gray-300 mb-6">
                To transform businesses through innovative AI and technology solutions that drive efficiency, 
                growth, and competitive advantage. We believe in the power of technology to solve complex 
                problems and create opportunities for our clients.
              </p>
              <p className="text-lg text-gray-300 mb-8">
                Since our founding, we have helped hundreds of companies modernize their operations, 
                implement AI solutions, and achieve their digital transformation goals.
              </p>
              <Link
                to="/contact"
                className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-blue-700 hover:to-purple-700 transition-all duration-300 inline-flex items-center"
              >
                Work With Us
                <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
            </div>
            <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20">
              <h3 className="text-2xl font-bold text-white mb-6">Our Values</h3>
              <div className="space-y-6">
                {values.map((value, index) => (
                  <div key={index} className="flex items-start space-x-4">
                    <div className="flex-shrink-0">
                      {value.icon}
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold text-white mb-2">
                        {value.title}
                      </h4>
                      <p className="text-gray-300">
                        {value.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white/5">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Meet Our Team
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Our diverse team of experts brings together decades of experience in AI, technology, and business solutions.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {team.map((member, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20 text-center">
                <div className="w-20 h-20 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full mx-auto mb-6 flex items-center justify-center">
                  <Users className="w-10 h-10 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">
                  {member.name}
                </h3>
                <p className="text-blue-400 font-medium mb-4">
                  {member.role}
                </p>
                <p className="text-gray-300">
                  {member.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Work Together?
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Let's discuss how we can help transform your business with our technology solutions.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-blue-700 hover:to-purple-700 transition-all duration-300 flex items-center justify-center"
            >
              Get In Touch
              <ArrowRight className="w-5 h-5 ml-2" />
            </Link>
            <Link
              to="/ai-services"
              className="border border-white/30 text-white px-8 py-4 rounded-lg font-semibold hover:bg-white/10 transition-colors"
            >
              Explore Services
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}

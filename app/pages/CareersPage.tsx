import React from 'react'
import { Helmet } from 'react-helmet-async'
import { MapPin, Clock, Users, Heart, Zap, Target } from 'lucide-react'

const CareersPage: React.FC = () => {
  const benefits = [
    {
      icon: Heart,
      title: 'Health & Wellness',
      description: 'Comprehensive health insurance, mental health support, and wellness programs.'
    },
    {
      icon: Clock,
      title: 'Flexible Work',
      description: 'Remote work options, flexible hours, and work-life balance initiatives.'
    },
    {
      icon: Users,
      title: 'Team Culture',
      description: 'Collaborative environment with diverse, talented professionals.'
    },
    {
      icon: Zap,
      title: 'Growth Opportunities',
      description: 'Continuous learning, skill development, and career advancement paths.'
    }
  ]

  const positions = [
    {
      title: 'Senior AI Engineer',
      location: 'Remote',
      type: 'Full-time',
      department: 'AI Solutions'
    },
    {
      title: 'Cloud Architect',
      location: 'New York, NY',
      type: 'Full-time',
      department: 'Cloud Services'
    },
    {
      title: 'Cybersecurity Specialist',
      location: 'Remote',
      type: 'Full-time',
      department: 'Security'
    },
    {
      title: 'DevOps Engineer',
      location: 'San Francisco, CA',
      type: 'Full-time',
      department: 'Infrastructure'
    }
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-rose-900 to-slate-900">
      <Helmet>
        <title>Careers | Zion Tech Group</title>
        <meta name="description" content="Join our team of AI and IT experts. Explore career opportunities at Zion Tech Group and be part of the future of technology." />
        <meta name="keywords" content="careers, jobs, AI engineer, cloud architect, cybersecurity, remote work, technology careers" />
      </Helmet>

      {/* Hero Section */}
      <div className="pt-20 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Join Our Team
          </h1>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Be part of the future of technology. Work with cutting-edge AI and IT solutions 
            while building your career at Zion Tech Group.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-gradient-to-r from-rose-600 to-pink-600 text-white px-8 py-3 rounded-lg font-semibold hover:from-rose-700 hover:to-pink-700 transition-all duration-300 transform hover:scale-105">
              View Open Positions
            </button>
            <button className="border border-rose-500 text-rose-400 px-8 py-3 rounded-lg font-semibold hover:bg-rose-500/10 transition-all duration-300">
              Learn About Us
            </button>
          </div>
        </div>
      </div>

      {/* Benefits Section */}
      <div className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Why Work With Us
            </h2>
            <p className="text-gray-300 text-lg max-w-2xl mx-auto">
              We offer competitive benefits and a supportive work environment
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => {
              const Icon = benefit.icon
              return (
                <div key={index} className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 text-center">
                  <div className="p-3 bg-gradient-to-r from-rose-500 to-pink-500 rounded-lg w-fit mx-auto mb-4">
                    <Icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-3">{benefit.title}</h3>
                  <p className="text-gray-300 text-sm">{benefit.description}</p>
                </div>
              )
            })}
          </div>
        </div>
      </div>

      {/* Open Positions */}
      <div className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Open Positions
            </h2>
            <p className="text-gray-300 text-lg max-w-2xl mx-auto">
              Explore current opportunities and find your perfect role
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {positions.map((position, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:border-rose-500/50 transition-all duration-300">
                <h3 className="text-xl font-semibold text-white mb-2">{position.title}</h3>
                <div className="flex items-center space-x-4 text-sm text-gray-300 mb-4">
                  <div className="flex items-center space-x-1">
                    <MapPin className="w-4 h-4" />
                    <span>{position.location}</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <Clock className="w-4 h-4" />
                    <span>{position.type}</span>
                  </div>
                </div>
                <p className="text-gray-400 text-sm mb-4">{position.department}</p>
                <button className="bg-gradient-to-r from-rose-600 to-pink-600 text-white px-4 py-2 rounded-lg text-sm font-medium hover:from-rose-700 hover:to-pink-700 transition-all duration-300">
                  Apply Now
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Don't See Your Role?
          </h2>
          <p className="text-gray-300 text-lg mb-8">
            We're always looking for talented individuals. Send us your resume and let us know how you can contribute to our mission.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-gradient-to-r from-rose-600 to-pink-600 text-white px-8 py-3 rounded-lg font-semibold hover:from-rose-700 hover:to-pink-700 transition-all duration-300 transform hover:scale-105">
              Send Resume
            </button>
            <button className="border border-rose-500 text-rose-400 px-8 py-3 rounded-lg font-semibold hover:bg-rose-500/10 transition-all duration-300">
              Contact HR
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CareersPage
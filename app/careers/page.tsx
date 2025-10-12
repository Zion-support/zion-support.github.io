'use client'
import React from 'react'
import { Helmet } from 'react-helmet-async'
import { MapPin, Clock, Users, ArrowRight, CheckCircle } from 'lucide-react'

const CareersPage: React.FC = () => {
  const jobOpenings = [
    {
      id: 1,
      title: 'Senior AI Engineer',
      department: 'Engineering',
      location: 'Remote',
      type: 'Full-time',
      description: 'Join our AI team to develop cutting-edge machine learning solutions and AI applications.',
      requirements: [
        '5+ years of experience in AI/ML',
        'Strong Python and TensorFlow skills',
        'Experience with cloud platforms',
        'PhD in Computer Science preferred'
      ]
    },
    {
      id: 2,
      title: 'Cloud Solutions Architect',
      department: 'Engineering',
      location: 'Middletown, DE',
      type: 'Full-time',
      description: 'Design and implement scalable cloud infrastructure solutions for our clients.',
      requirements: [
        '7+ years of cloud architecture experience',
        'AWS, Azure, and GCP certifications',
        'Strong communication skills',
        'Experience with DevOps practices'
      ]
    },
    {
      id: 3,
      title: 'Cybersecurity Specialist',
      department: 'Security',
      location: 'Remote',
      type: 'Full-time',
      description: 'Protect our clients\' digital assets with advanced cybersecurity solutions.',
      requirements: [
        '4+ years of cybersecurity experience',
        'CISSP or similar certification',
        'Experience with security tools',
        'Strong analytical skills'
      ]
    }
  ]

  const benefits = [
    {
      icon: <Users className="w-8 h-8 text-blue-500" />,
      title: 'Collaborative Culture',
      description: 'Work with talented professionals in a supportive environment'
    },
    {
      icon: <Clock className="w-8 h-8 text-green-500" />,
      title: 'Flexible Work',
      description: 'Remote work options and flexible schedules'
    },
    {
      icon: <CheckCircle className="w-8 h-8 text-purple-500" />,
      title: 'Growth Opportunities',
      description: 'Continuous learning and career development programs'
    }
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Helmet>
        <title>Careers - Zion Tech Group | Join Our Team</title>
        <meta name="description" content="Join Zion Tech Group and be part of a team that's shaping the future of AI and IT solutions. Explore career opportunities." />
        <meta name="keywords" content="careers, jobs, employment, AI engineer, cloud architect, cybersecurity, join our team" />
      </Helmet>

      {/* Hero Section */}
      <section className="pt-20 px-4 py-12 sm:py-16 lg:py-20">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12 sm:mb-16">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 sm:mb-6">
              Join Our Team
            </h1>
            <p className="text-lg sm:text-xl text-gray-300 max-w-3xl mx-auto mb-6 sm:mb-8 px-4">
              Be part of a team that's shaping the future of AI and IT solutions. 
              We're looking for talented individuals who share our passion for innovation.
            </p>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-12 sm:py-16 lg:py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-4">Why Work With Us?</h2>
            <p className="text-lg sm:text-xl text-gray-300 max-w-2xl mx-auto">
              We offer a great work environment and excellent benefits
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="text-center">
                <div className="mb-4">{benefit.icon}</div>
                <h3 className="text-xl font-semibold text-white mb-4">{benefit.title}</h3>
                <p className="text-gray-300">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Job Openings */}
      <section className="py-12 sm:py-16 lg:py-20 px-4 bg-white/5">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-4">Open Positions</h2>
            <p className="text-lg sm:text-xl text-gray-300 max-w-2xl mx-auto">
              Explore our current job openings
            </p>
          </div>
          <div className="space-y-8">
            {jobOpenings.map((job) => (
              <div key={job.id} className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 border border-white/20 hover:border-blue-500/50 transition-all duration-300">
                <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-4">
                  <div>
                    <h3 className="text-xl font-semibold text-white mb-2">{job.title}</h3>
                    <div className="flex flex-wrap gap-4 text-sm text-gray-400">
                      <span className="flex items-center">
                        <MapPin className="w-4 h-4 mr-1" />
                        {job.location}
                      </span>
                      <span className="flex items-center">
                        <Clock className="w-4 h-4 mr-1" />
                        {job.type}
                      </span>
                      <span className="bg-blue-400/10 text-blue-400 px-2 py-1 rounded-full">
                        {job.department}
                      </span>
                    </div>
                  </div>
                  <button className="mt-4 lg:mt-0 bg-gradient-to-r from-blue-500 to-purple-600 text-white px-6 py-2 rounded-lg font-semibold hover:from-blue-600 hover:to-purple-700 transition-all duration-300 flex items-center">
                    Apply Now
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </button>
                </div>
                <p className="text-gray-300 mb-4">{job.description}</p>
                <div>
                  <h4 className="text-sm font-semibold text-blue-400 mb-2">Requirements:</h4>
                  <ul className="space-y-1">
                    {job.requirements.map((requirement, reqIndex) => (
                      <li key={reqIndex} className="flex items-center text-sm text-gray-300">
                        <CheckCircle className="w-3 h-3 text-green-400 mr-2 flex-shrink-0" />
                        {requirement}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center">
            <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl sm:rounded-3xl p-6 sm:p-8 lg:p-12">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-4">
                Don't See the Right Role?
              </h2>
              <p className="text-lg sm:text-xl text-white/90 mb-6 sm:mb-8 max-w-2xl mx-auto px-4">
                We're always looking for talented individuals. Send us your resume 
                and we'll keep you in mind for future opportunities.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
                  Send Resume
                </button>
                <button className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white/10 transition-colors">
                  Learn More
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default CareersPage
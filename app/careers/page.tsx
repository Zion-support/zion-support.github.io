import React from 'react'
import { Helmet } from 'react-helmet-async'
import { Link } from 'react-router-dom'
import { ArrowRight, Users, MapPin, Clock } from 'lucide-react'

export default function CareersPage() {
  const jobOpenings = [
    {
      id: 1,
      title: 'Senior AI Engineer',
      location: 'Remote',
      type: 'Full-time',
      department: 'Engineering',
      description: 'Join our AI team to develop cutting-edge artificial intelligence solutions.'
    },
    {
      id: 2,
      title: 'Cloud Solutions Architect',
      location: 'Middletown, DE',
      type: 'Full-time',
      department: 'Engineering',
      description: 'Design and implement cloud infrastructure solutions for our clients.'
    },
    {
      id: 3,
      title: 'Cybersecurity Specialist',
      location: 'Remote',
      type: 'Full-time',
      department: 'Security',
      description: 'Protect our clients\' digital assets with advanced security solutions.'
    }
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Helmet>
        <title>Careers - Zion Tech Group | Join Our Team</title>
        <meta name="description" content="Join Zion Tech Group and be part of our innovative team. Explore career opportunities in AI, cloud computing, and technology solutions." />
        <meta name="keywords" content="careers, jobs, employment, AI engineer, cloud architect, cybersecurity, technology careers" />
      </Helmet>
      
      {/* Hero Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-6">
              Join Our Team
            </h1>
            <p className="text-lg sm:text-xl text-gray-300 max-w-3xl mx-auto mb-8">
              Be part of our innovative team and help shape the future of technology. 
              We're looking for talented individuals to join us in our mission.
            </p>
            <Link
              to="/contact"
              className="bg-gradient-to-r from-purple-500 to-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:from-purple-600 hover:to-blue-700 transition-all duration-300 inline-flex items-center"
            >
              View Open Positions
              <ArrowRight className="ml-2 w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* Job Openings */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-12 text-center">
            Current Openings
          </h2>
          
          <div className="space-y-6">
            {jobOpenings.map((job) => (
              <div key={job.id} className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20 hover:bg-white/15 transition-all duration-300">
                <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-4">
                  <h3 className="text-2xl font-bold text-white mb-2 lg:mb-0">{job.title}</h3>
                  <div className="flex items-center gap-4 text-sm text-gray-400">
                    <span className="flex items-center">
                      <MapPin className="w-4 h-4 mr-1" />
                      {job.location}
                    </span>
                    <span className="flex items-center">
                      <Clock className="w-4 h-4 mr-1" />
                      {job.type}
                    </span>
                    <span className="px-3 py-1 rounded-full bg-purple-500/20 text-purple-300 text-xs">
                      {job.department}
                    </span>
                  </div>
                </div>
                
                <p className="text-gray-300 mb-6 text-lg">
                  {job.description}
                </p>
                
                <Link
                  to={`/careers/${job.id}`}
                  className="inline-flex items-center text-purple-400 hover:text-purple-300 font-medium transition-colors"
                >
                  Apply Now
                  <ArrowRight className="w-4 h-4 ml-1" />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="bg-gradient-to-r from-purple-600 to-pink-600 rounded-3xl p-6 sm:p-8 lg:p-12 text-center">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-4">
              Don't See Your Role?
            </h2>
            <p className="text-lg sm:text-xl text-white/90 mb-8 max-w-2xl mx-auto">
              We're always looking for talented individuals. Send us your resume and we'll keep you in mind for future opportunities.
            </p>
            <Link
              to="/contact"
              className="bg-white text-purple-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
            >
              Send Your Resume
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
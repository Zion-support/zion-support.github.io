import React from 'react'
import { Helmet } from 'react-helmet-async'
import { Users, MapPin, Clock, ArrowRight } from 'lucide-react'

export default function CareersPage() {
  const openPositions = [
    {
      id: '1',
      title: 'Senior AI Engineer',
      location: 'San Francisco, CA',
      type: 'Full-time',
      description: 'Lead AI development projects and mentor junior engineers.'
    },
    {
      title: 'Cloud Solutions Architect',
      location: 'Remote',
      type: 'Full-time',
      description: 'Design and implement cloud infrastructure solutions.'
    },
    {
      title: 'Cybersecurity Specialist',
      location: 'New York, NY',
      type: 'Full-time',
      description: 'Protect our clients from cyber threats and ensure compliance.'
    }
  ]

  const benefits = [
    'Competitive salary and equity',
    'Health, dental, and vision insurance',
    'Flexible work arrangements',
    'Professional development budget',
    '401(k) with company matching',
    'Unlimited PTO'
  ]

  const companyStats = [
    { icon: <Users className="w-6 h-6" />, value: '150+', label: 'Team Members' },
    { icon: <Award className="w-6 h-6" />, value: '50+', label: 'Projects Delivered' },
    { icon: <Star className="w-6 h-6" />, value: '98%', label: 'Client Satisfaction' },
    { icon: <Briefcase className="w-6 h-6" />, value: '25+', label: 'Open Positions' }
  ];

const Page: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>Careers - Zion Tech Group</title>
        <meta name="description" content="Join our team at Zion Tech Group. Explore career opportunities in AI, cloud computing, cybersecurity, and IT services." />
      </Helmet>
      
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        <section className="pt-20 pb-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Join Our <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">Team</span>
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Build the future of technology with us. We're looking for passionate individuals to join our growing team.
            </p>
          </div>
        </section>

        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Open Positions</h2>
            </div>
            
            <div className="space-y-6">
              {openPositions.map((position, index) => (
                <div key={index} className="bg-gray-50 rounded-xl p-8 hover:shadow-lg transition-shadow duration-300">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between">
                    <div className="mb-4 md:mb-0">
                      <h3 className="text-xl font-semibold text-gray-900 mb-2">{position.title}</h3>
                      <p className="text-gray-600 mb-2">{position.description}</p>
                      <div className="flex items-center space-x-4 text-sm text-gray-500">
                        <div className="flex items-center">
                          <MapPin className="w-4 h-4 mr-1" />
                          {position.location}
                        </div>
                        <div className="flex items-center">
                          <Clock className="w-4 h-4 mr-1" />
                          {position.type}
                        </div>
                      </div>
                    </div>
                    <button className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors flex items-center">
                      Apply Now
                      <ArrowRight className="ml-2 w-4 h-4" />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Why Work With Us?</h2>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {benefits.map((benefit, index) => (
                <div key={index} className="bg-white rounded-xl p-6 text-center">
                  <div className="text-2xl font-bold text-blue-600 mb-2">•</div>
                  <p className="text-gray-700">{benefit}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </div>
    </>
  )
}
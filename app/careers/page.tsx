import React from 'react'
import Navigation from '../components/Navigation'
import Footer from '../components/Footer'
import { Star, Users, Heart, Award, MapPin, Clock, Briefcase, CheckCircle, ArrowRight, GraduationCap, Zap } from 'lucide-react'

interface JobPosition {
  id: string
  title: string
  department: string
  location: string
  type: string
  experience: string
  description: string
  requirements: string[]
  benefits: string[]
  posted: string
  featured: boolean
}

const CareersPage: React.FC = () => {
  const openPositions: JobPosition[] = [
    {
      id: '1',
      title: 'Senior AI Engineer',
      department: 'Engineering',
      location: 'Remote',
      type: 'Full-time',
      experience: '5+ years',
      description: 'Lead the development of cutting-edge AI solutions and machine learning models for enterprise clients.',
      requirements: [
        'Master\'s degree in Computer Science or related field',
        '5+ years of experience in AI/ML development',
        'Proficiency in Python, TensorFlow, PyTorch',
        'Experience with cloud platforms (AWS, Azure, GCP)',
        'Strong problem-solving and communication skills'
      ],
      benefits: [
        'Competitive salary and equity',
        'Health, dental, and vision insurance',
        'Flexible work arrangements',
        'Professional development budget',
        'Unlimited PTO'
      ],
      posted: '2024-01-15',
      featured: true
    },
    {
      id: '2',
      title: 'DevOps Engineer',
      department: 'Engineering',
      location: 'San Francisco, CA',
      type: 'Full-time',
      experience: '3+ years',
      description: 'Build and maintain scalable infrastructure for our AI and IT solutions.',
      requirements: [
        'Bachelor\'s degree in Computer Science or related field',
        '3+ years of DevOps experience',
        'Experience with Docker, Kubernetes, CI/CD',
        'Knowledge of cloud platforms',
        'Strong scripting skills'
      ],
      benefits: [
        'Competitive salary',
        'Health insurance',
        '401(k) matching',
        'Professional development',
        'Flexible schedule'
      ],
      posted: '2024-01-10',
      featured: false
    },
    {
      id: '3',
      title: 'Product Manager',
      department: 'Product',
      location: 'New York, NY',
      type: 'Full-time',
      experience: '4+ years',
      description: 'Drive product strategy and roadmap for our AI-powered solutions.',
      requirements: [
        'Bachelor\'s degree in Business or related field',
        '4+ years of product management experience',
        'Experience with AI/ML products',
        'Strong analytical and communication skills',
        'MBA preferred'
      ],
      benefits: [
        'Competitive salary and bonus',
        'Health insurance',
        'Stock options',
        'Professional development',
        'Remote work options'
      ],
      posted: '2024-01-05',
      featured: false
    }
  ]

  const companyValues = [
    {
      icon: Star,
      title: 'Excellence',
      description: 'We strive for excellence in everything we do, from our code to our customer service.'
    },
    {
      icon: Users,
      title: 'Collaboration',
      description: 'We believe in the power of teamwork and diverse perspectives to solve complex problems.'
    },
    {
      icon: Heart,
      title: 'Passion',
      description: 'We\'re passionate about technology and its potential to transform businesses and lives.'
    },
    {
      icon: Award,
      title: 'Innovation',
      description: 'We encourage creativity and innovation, always looking for better ways to solve problems.'
    }
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-20 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Join Our <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">Team</span>
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Be part of a team that's shaping the future of AI and technology. We're looking for passionate individuals who want to make a difference.
            </p>
          </div>
        </div>
      </section>

      {/* Company Values */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-white text-center mb-12">Our Values</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {companyValues.map((value, index) => (
              <div key={index} className="text-center">
                <div className="flex items-center justify-center w-16 h-16 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-xl mx-auto mb-4">
                  <value.icon className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-2">{value.title}</h3>
                <p className="text-gray-300">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Open Positions */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white/5">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-white text-center mb-12">Open Positions</h2>
          <div className="space-y-8">
            {openPositions.map((position) => (
              <div key={position.id} className={`bg-white/5 backdrop-blur-sm rounded-2xl p-8 ${position.featured ? 'ring-2 ring-cyan-500' : ''}`}>
                {position.featured && (
                  <div className="flex items-center mb-4">
                    <Star className="h-5 w-5 text-yellow-400 mr-2" />
                    <span className="text-yellow-400 font-semibold">Featured Position</span>
                  </div>
                )}
                
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                  <div className="lg:col-span-2">
                    <h3 className="text-2xl font-bold text-white mb-2">{position.title}</h3>
                    <div className="flex flex-wrap items-center gap-4 mb-4 text-sm text-gray-400">
                      <div className="flex items-center">
                        <Briefcase className="h-4 w-4 mr-1" />
                        {position.department}
                      </div>
                      <div className="flex items-center">
                        <MapPin className="h-4 w-4 mr-1" />
                        {position.location}
                      </div>
                      <div className="flex items-center">
                        <Clock className="h-4 w-4 mr-1" />
                        {position.type}
                      </div>
                      <div className="flex items-center">
                        <GraduationCap className="h-4 w-4 mr-1" />
                        {position.experience}
                      </div>
                    </div>
                    
                    <p className="text-gray-300 mb-6">{position.description}</p>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <h4 className="text-lg font-semibold text-cyan-400 mb-3">Requirements</h4>
                        <ul className="space-y-2">
                          {position.requirements.map((req, index) => (
                            <li key={index} className="flex items-start text-gray-300">
                              <CheckCircle className="h-4 w-4 text-green-400 mr-2 mt-0.5 flex-shrink-0" />
                              {req}
                            </li>
                          ))}
                        </ul>
                      </div>
                      
                      <div>
                        <h4 className="text-lg font-semibold text-cyan-400 mb-3">Benefits</h4>
                        <ul className="space-y-2">
                          {position.benefits.map((benefit, index) => (
                            <li key={index} className="flex items-start text-gray-300">
                              <CheckCircle className="h-4 w-4 text-green-400 mr-2 mt-0.5 flex-shrink-0" />
                              {benefit}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                  
                  <div className="lg:col-span-1">
                    <div className="bg-gradient-to-r from-cyan-500/20 to-blue-600/20 rounded-xl p-6 text-center">
                      <div className="text-4xl mb-4">💼</div>
                      <p className="text-gray-300 text-sm mb-4">Posted {position.posted}</p>
                      <button className="w-full bg-gradient-to-r from-cyan-500 to-blue-600 text-white py-3 rounded-lg font-semibold hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 flex items-center justify-center">
                        Apply Now
                        <ArrowRight className="h-4 w-4 ml-2" />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Work With Us */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-white text-center mb-12">Why Work With Us?</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="text-6xl mb-4">🚀</div>
              <h3 className="text-xl font-bold text-white mb-2">Cutting-Edge Technology</h3>
              <p className="text-gray-300">Work with the latest AI and technology stack</p>
            </div>
            <div className="text-center">
              <div className="text-6xl mb-4">🌍</div>
              <h3 className="text-xl font-bold text-white mb-2">Global Impact</h3>
              <p className="text-gray-300">Make a difference in businesses worldwide</p>
            </div>
            <div className="text-center">
              <div className="text-6xl mb-4">🎯</div>
              <h3 className="text-xl font-bold text-white mb-2">Growth Opportunities</h3>
              <p className="text-gray-300">Advance your career with continuous learning</p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}

export default CareersPage
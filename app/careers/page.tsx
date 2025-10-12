'use client'
import React, { useState } from 'react'
import { Helmet } from 'react-helmet-async'
import { Link } from 'react-router-dom'
import { ArrowRight, MapPin, Clock, Users, Heart, Zap, Shield, Brain, Rocket, CheckCircle, ExternalLink } from 'lucide-react'
import Layout from '../layout'

const CareersPage: React.FC = () => {
  const [selectedDepartment, setSelectedDepartment] = useState('All')
  const [selectedLocation, setSelectedLocation] = useState('All')

  const departments = ['All', 'Engineering', 'AI/ML', 'Sales', 'Marketing', 'Operations', 'Design']
  const locations = ['All', 'Remote', 'San Francisco', 'New York', 'London', 'Berlin']

  const jobOpenings = [
    {
      id: 1,
      title: 'Senior AI Engineer',
      department: 'AI/ML',
      location: 'Remote',
      type: 'Full-time',
      experience: '5+ years',
      description: 'Lead the development of our next-generation AI platform and work with cutting-edge machine learning technologies.',
      requirements: [
        '5+ years of experience in AI/ML engineering',
        'Strong background in Python, TensorFlow, PyTorch',
        'Experience with large language models',
        'PhD in Computer Science or related field preferred'
      ],
      benefits: ['Competitive salary', 'Equity options', 'Health insurance', 'Remote work'],
      posted: '2024-01-20'
    },
    {
      id: 2,
      title: 'Full Stack Developer',
      department: 'Engineering',
      location: 'San Francisco',
      type: 'Full-time',
      experience: '3+ years',
      description: 'Build scalable web applications and APIs using modern technologies like React, Node.js, and cloud platforms.',
      requirements: [
        '3+ years of full-stack development experience',
        'Proficiency in React, Node.js, TypeScript',
        'Experience with cloud platforms (AWS, Azure, GCP)',
        'Strong problem-solving skills'
      ],
      benefits: ['Competitive salary', 'Health insurance', '401k matching', 'Flexible hours'],
      posted: '2024-01-18'
    },
    {
      id: 3,
      title: 'AI Product Manager',
      department: 'Operations',
      location: 'New York',
      type: 'Full-time',
      experience: '4+ years',
      description: 'Drive product strategy and roadmap for our AI services, working closely with engineering and business teams.',
      requirements: [
        '4+ years of product management experience',
        'Background in AI/ML products preferred',
        'Strong analytical and communication skills',
        'MBA or technical degree preferred'
      ],
      benefits: ['Competitive salary', 'Equity options', 'Health insurance', 'Professional development'],
      posted: '2024-01-15'
    },
    {
      id: 4,
      title: 'DevOps Engineer',
      department: 'Engineering',
      location: 'Remote',
      type: 'Full-time',
      experience: '4+ years',
      description: 'Manage our cloud infrastructure and deployment pipelines, ensuring high availability and scalability.',
      requirements: [
        '4+ years of DevOps experience',
        'Expertise in Kubernetes, Docker, CI/CD',
        'Experience with cloud platforms',
        'Strong automation skills'
      ],
      benefits: ['Competitive salary', 'Health insurance', 'Remote work', 'Learning budget'],
      posted: '2024-01-12'
    },
    {
      id: 5,
      title: 'UX Designer',
      department: 'Design',
      location: 'London',
      type: 'Full-time',
      experience: '3+ years',
      description: 'Design intuitive user experiences for our AI-powered applications and services.',
      requirements: [
        '3+ years of UX design experience',
        'Portfolio demonstrating AI/ML product design',
        'Proficiency in Figma, Sketch, or similar tools',
        'Strong user research skills'
      ],
      benefits: ['Competitive salary', 'Health insurance', 'Design budget', 'Conference attendance'],
      posted: '2024-01-10'
    },
    {
      id: 6,
      title: 'Sales Engineer',
      department: 'Sales',
      location: 'Berlin',
      type: 'Full-time',
      experience: '3+ years',
      description: 'Help clients understand and implement our AI solutions, working closely with the sales team.',
      requirements: [
        '3+ years of technical sales experience',
        'Background in AI/ML or enterprise software',
        'Strong presentation and communication skills',
        'Technical degree preferred'
      ],
      benefits: ['Competitive salary', 'Commission', 'Health insurance', 'Travel opportunities'],
      posted: '2024-01-08'
    }
  ]

  const filteredJobs = jobOpenings.filter(job => {
    const matchesDepartment = selectedDepartment === 'All' || job.department === selectedDepartment
    const matchesLocation = selectedLocation === 'All' || job.location === selectedLocation
    return matchesDepartment && matchesLocation
  })

  const benefits = [
    {
      icon: <Heart className="w-8 h-8 text-red-500" />,
      title: 'Health & Wellness',
      description: 'Comprehensive health insurance, mental health support, and wellness programs'
    },
    {
      icon: <Zap className="w-8 h-8 text-yellow-500" />,
      title: 'Learning & Development',
      description: 'Professional development budget, conference attendance, and skill-building opportunities'
    },
    {
      icon: <Shield className="w-8 h-8 text-blue-500" />,
      title: 'Work-Life Balance',
      description: 'Flexible hours, remote work options, and generous time off policies'
    },
    {
      icon: <Brain className="w-8 h-8 text-purple-500" />,
      title: 'Innovation',
      description: 'Work on cutting-edge AI technologies and shape the future of technology'
    },
    {
      icon: <Users className="w-8 h-8 text-green-500" />,
      title: 'Team Culture',
      description: 'Collaborative environment with talented, passionate colleagues'
    },
    {
      icon: <Rocket className="w-8 h-8 text-orange-500" />,
      title: 'Growth Opportunities',
      description: 'Clear career paths, mentorship programs, and leadership development'
    }
  ]

  const values = [
    {
      title: 'Innovation First',
      description: 'We push the boundaries of what\'s possible with AI and technology'
    },
    {
      title: 'Customer Obsessed',
      description: 'Everything we do is focused on delivering value to our customers'
    },
    {
      title: 'Transparency',
      description: 'Open communication and honest feedback at all levels'
    },
    {
      title: 'Diversity & Inclusion',
      description: 'We believe diverse teams create better solutions'
    }
  ]

  return (
    <Layout 
      title="Careers - Zion Tech Group"
      description="Join our team and help shape the future of AI and technology. Explore career opportunities at Zion Tech Group."
      keywords="careers, jobs, employment, AI jobs, tech careers, remote work, engineering jobs"
    >
      {/* Hero Section */}
      <section className="relative py-20 px-4 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,rgba(147,51,234,0.3)_0%,transparent_50%)] animate-pulse" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(59,130,246,0.3)_0%,transparent_50%)] animate-pulse" style={{ animationDelay: '1s' }} />
        <div className="relative max-w-7xl mx-auto text-center">
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
            Join Our <span className="bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">Team</span>
          </h1>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed">
            Help us build the future of AI and technology. Join a team of passionate innovators 
            working on cutting-edge solutions that transform businesses worldwide.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              to="#jobs" 
              className="bg-gradient-to-r from-purple-500 to-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:from-purple-600 hover:to-blue-700 transition-all duration-300 flex items-center"
            >
              View Open Positions
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
            <Link 
              to="/about" 
              className="border border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-gray-900 transition-all duration-300"
            >
              Learn About Us
            </Link>
          </div>
        </div>
      </section>

      {/* Company Values */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Our Values
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              These core values guide everything we do and shape our company culture.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 text-center">
                <h3 className="text-xl font-semibold text-white mb-3">{value.title}</h3>
                <p className="text-gray-300">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 px-4 bg-white/5">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Why Work With Us?
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              We offer competitive benefits and a great work environment to help you thrive.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
                <div className="flex items-center mb-4">
                  {benefit.icon}
                  <h3 className="text-xl font-semibold text-white ml-3">{benefit.title}</h3>
                </div>
                <p className="text-gray-300">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Job Openings */}
      <section id="jobs" className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Open Positions
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Find your next opportunity and join our growing team.
            </p>
          </div>

          {/* Filters */}
          <div className="flex flex-col md:flex-row gap-4 mb-8">
            <div className="flex-1">
              <select
                value={selectedDepartment}
                onChange={(e) => setSelectedDepartment(e.target.value)}
                className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-purple-500"
              >
                {departments.map((dept) => (
                  <option key={dept} value={dept} className="bg-gray-800">
                    {dept} Department
                  </option>
                ))}
              </select>
            </div>
            <div className="flex-1">
              <select
                value={selectedLocation}
                onChange={(e) => setSelectedLocation(e.target.value)}
                className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-purple-500"
              >
                {locations.map((location) => (
                  <option key={location} value={location} className="bg-gray-800">
                    {location}
                  </option>
                ))}
              </select>
            </div>
          </div>

          {/* Job Listings */}
          <div className="space-y-6">
            {filteredJobs.map((job) => (
              <div key={job.id} className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300">
                <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-4">
                  <div>
                    <h3 className="text-2xl font-bold text-white mb-2">{job.title}</h3>
                    <div className="flex flex-wrap gap-4 text-sm text-gray-400">
                      <div className="flex items-center gap-2">
                        <Users className="w-4 h-4" />
                        {job.department}
                      </div>
                      <div className="flex items-center gap-2">
                        <MapPin className="w-4 h-4" />
                        {job.location}
                      </div>
                      <div className="flex items-center gap-2">
                        <Clock className="w-4 h-4" />
                        {job.type}
                      </div>
                      <div className="flex items-center gap-2">
                        <ExternalLink className="w-4 h-4" />
                        {job.experience}
                      </div>
                    </div>
                  </div>
                  <div className="mt-4 lg:mt-0">
                    <span className="text-sm text-gray-400">Posted {new Date(job.posted).toLocaleDateString()}</span>
                  </div>
                </div>
                
                <p className="text-gray-300 mb-4">{job.description}</p>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                  <div>
                    <h4 className="text-lg font-semibold text-white mb-3">Requirements</h4>
                    <ul className="space-y-2">
                      {job.requirements.map((req, index) => (
                        <li key={index} className="flex items-start text-gray-300 text-sm">
                          <CheckCircle className="w-4 h-4 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                          {req}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-white mb-3">Benefits</h4>
                    <ul className="space-y-2">
                      {job.benefits.map((benefit, index) => (
                        <li key={index} className="flex items-start text-gray-300 text-sm">
                          <CheckCircle className="w-4 h-4 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                          {benefit}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
                
                <div className="flex flex-col sm:flex-row gap-4">
                  <button className="bg-gradient-to-r from-purple-500 to-blue-600 text-white px-6 py-3 rounded-lg font-medium hover:from-purple-600 hover:to-blue-700 transition-all duration-300 flex items-center justify-center">
                    Apply Now
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </button>
                  <button className="border border-white/20 text-white px-6 py-3 rounded-lg font-medium hover:bg-white/10 transition-all duration-300">
                    Learn More
                  </button>
                </div>
              </div>
            ))}
          </div>

          {filteredJobs.length === 0 && (
            <div className="text-center py-12">
              <p className="text-gray-300 text-lg">No positions match your current filters.</p>
              <button
                onClick={() => {
                  setSelectedDepartment('All')
                  setSelectedLocation('All')
                }}
                className="mt-4 text-purple-400 hover:text-purple-300 font-medium"
              >
                Clear filters
              </button>
            </div>
          )}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="bg-gradient-to-r from-purple-600 to-pink-600 rounded-2xl p-8 text-center">
            <h2 className="text-3xl font-bold text-white mb-4">
              Don't See the Right Role?
            </h2>
            <p className="text-xl text-white/90 mb-6">
              We're always looking for talented individuals. Send us your resume and we'll keep you in mind for future opportunities.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-purple-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
                Submit Resume
              </button>
              <button className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white/10 transition-colors">
                Contact HR
              </button>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  )
}

export default CareersPage
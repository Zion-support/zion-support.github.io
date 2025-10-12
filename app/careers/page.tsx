import React from 'react'
import { Helmet } from 'react-helmet-async'
import { Users, Code, Brain, Cloud, ArrowRight, CheckCircle } from 'lucide-react'

const CareersPage = () => {
  const positions = [
    {
      title: 'Senior AI Engineer',
      department: 'AI Solutions',
      location: 'San Francisco, CA',
      type: 'Full-time',
      description: 'Lead the development of cutting-edge AI solutions and machine learning models.',
      requirements: ['5+ years AI/ML experience', 'Python, TensorFlow, PyTorch', 'PhD in Computer Science or related field']
    },
    {
      title: 'Full Stack Developer',
      department: 'Development',
      location: 'Remote',
      type: 'Full-time',
      description: 'Build scalable web applications and APIs using modern technologies.',
      requirements: ['3+ years full-stack experience', 'React, Node.js, TypeScript', 'Cloud platform experience']
    },
    {
      title: 'DevOps Engineer',
      department: 'Infrastructure',
      location: 'New York, NY',
      type: 'Full-time',
      description: 'Design and maintain cloud infrastructure and CI/CD pipelines.',
      requirements: ['4+ years DevOps experience', 'AWS, Azure, Kubernetes', 'Infrastructure as Code']
    },
    {
      title: 'Data Scientist',
      department: 'Analytics',
      location: 'Austin, TX',
      type: 'Full-time',
      description: 'Analyze complex data sets and build predictive models for business insights.',
      requirements: ['3+ years data science experience', 'Python, R, SQL', 'Machine learning expertise']
    }
  ]

  const benefits = [
    'Competitive salary and equity',
    'Comprehensive health coverage',
    'Flexible work arrangements',
    'Professional development budget',
    'Unlimited PTO',
    'State-of-the-art equipment',
    'Team building events',
    'Career growth opportunities'
  ]

  return (
    <>
      <Helmet>
        <title>Careers - Zion Tech Group</title>
        <meta name="description" content="Join Zion Tech Group and help shape the future of AI and IT solutions. Explore career opportunities with us." />
      </Helmet>

      <div className="min-h-screen py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          {/* Hero Section */}
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Join Our Team
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
              Help us build the future of AI and IT solutions. We're looking for passionate individuals 
              who want to make a difference in the tech industry.
            </p>
            <button className="bg-purple-600 text-white px-8 py-3 rounded-lg hover:bg-purple-700 transition-colors flex items-center mx-auto">
              View Open Positions
              <ArrowRight className="ml-2 h-5 w-5" />
            </button>
          </div>

          {/* Why Work With Us */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-white text-center mb-12">Why Work With Us?</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="text-center">
                <Brain className="h-12 w-12 text-purple-400 mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-white mb-2">Innovation</h3>
                <p className="text-gray-300">Work on cutting-edge AI and technology solutions</p>
              </div>
              <div className="text-center">
                <Users className="h-12 w-12 text-purple-400 mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-white mb-2">Team</h3>
                <p className="text-gray-300">Collaborate with talented and passionate professionals</p>
              </div>
              <div className="text-center">
                <Code className="h-12 w-12 text-purple-400 mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-white mb-2">Growth</h3>
                <p className="text-gray-300">Continuous learning and career development opportunities</p>
              </div>
              <div className="text-center">
                <Cloud className="h-12 w-12 text-purple-400 mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-white mb-2">Impact</h3>
                <p className="text-gray-300">Make a real difference in how businesses operate</p>
              </div>
            </div>
          </div>

          {/* Open Positions */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-white text-center mb-12">Open Positions</h2>
            <div className="space-y-6">
              {positions.map((position, index) => (
                <div key={index} className="bg-slate-800/50 p-6 rounded-lg hover:bg-slate-800/70 transition-colors">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                    <div>
                      <h3 className="text-xl font-semibold text-white mb-2">{position.title}</h3>
                      <div className="flex flex-wrap gap-4 text-sm text-gray-300">
                        <span>{position.department}</span>
                        <span>•</span>
                        <span>{position.location}</span>
                        <span>•</span>
                        <span>{position.type}</span>
                      </div>
                    </div>
                    <button className="mt-4 md:mt-0 bg-purple-600 text-white px-6 py-2 rounded-lg hover:bg-purple-700 transition-colors">
                      Apply Now
                    </button>
                  </div>
                  <p className="text-gray-300 mb-4">{position.description}</p>
                  <div>
                    <h4 className="text-sm font-semibold text-white mb-2">Requirements:</h4>
                    <ul className="space-y-1">
                      {position.requirements.map((req, reqIndex) => (
                        <li key={reqIndex} className="flex items-center text-sm text-gray-300">
                          <CheckCircle className="h-4 w-4 text-green-400 mr-2" />
                          {req}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Benefits */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-white text-center mb-12">Benefits & Perks</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {benefits.map((benefit, index) => (
                <div key={index} className="bg-slate-800/50 p-6 rounded-lg text-center">
                  <CheckCircle className="h-8 w-8 text-green-400 mx-auto mb-3" />
                  <p className="text-gray-300">{benefit}</p>
                </div>
              ))}
            </div>
          </div>

          {/* CTA Section */}
          <div className="bg-gradient-to-r from-purple-600 to-blue-600 p-8 rounded-lg text-center">
            <h2 className="text-3xl font-bold text-white mb-4">
              Ready to Join Us?
            </h2>
            <p className="text-xl text-purple-100 mb-8">
              Don't see a position that fits? We're always looking for talented individuals. 
              Send us your resume and let's start a conversation.
            </p>
            <button className="bg-white text-purple-600 px-8 py-3 rounded-lg hover:bg-gray-100 transition-colors font-semibold">
              Send Your Resume
            </button>
          </div>
        </div>
      </div>
    </>
  )
}

export default CareersPage
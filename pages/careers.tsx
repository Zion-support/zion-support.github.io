import React from 'react';
import Layout from '../components/Layout';
import { MapPin, Clock, Users, ArrowRight, CheckCircle, Star } from 'lucide-react';

const openPositions = [
  {
    title: 'Senior AI Engineer',
    department: 'AI Services',
    location: 'Remote / San Francisco, CA',
    type: 'Full-time',
    experience: '5+ years',
    description: 'Lead the development of cutting-edge AI solutions and machine learning platforms.',
    requirements: [
      'Master\'s degree in Computer Science or related field',
      '5+ years experience in machine learning and AI',
      'Expertise in Python, TensorFlow, PyTorch',
      'Experience with cloud platforms (AWS, Azure, GCP)',
      'Strong problem-solving and communication skills'
    ],
    benefits: [
      'Competitive salary and equity',
      'Comprehensive health benefits',
      'Flexible work arrangements',
      'Professional development budget',
      '401(k) with company matching'
    ]
  },
  {
    title: 'Cloud Solutions Architect',
    department: 'IT Services',
    location: 'New York, NY / Remote',
    type: 'Full-time',
    experience: '7+ years',
    description: 'Design and implement scalable cloud infrastructure solutions for enterprise clients.',
    requirements: [
      'Bachelor\'s degree in Computer Science or related field',
      '7+ years experience in cloud architecture',
      'Expertise in AWS, Azure, and Google Cloud',
      'Experience with DevOps and CI/CD',
      'Strong leadership and client-facing skills'
    ],
    benefits: [
      'Competitive salary and equity',
      'Comprehensive health benefits',
      'Flexible work arrangements',
      'Professional development budget',
      '401(k) with company matching'
    ]
  },
  {
    title: 'Frontend Developer',
    department: 'Product Development',
    location: 'Austin, TX / Remote',
    type: 'Full-time',
    experience: '3+ years',
    description: 'Build beautiful and responsive user interfaces for our web applications.',
    requirements: [
      'Bachelor\'s degree in Computer Science or related field',
      '3+ years experience in frontend development',
      'Expertise in React, TypeScript, and modern CSS',
      'Experience with responsive design',
      'Strong attention to detail and user experience'
    ],
    benefits: [
      'Competitive salary and equity',
      'Comprehensive health benefits',
      'Flexible work arrangements',
      'Professional development budget',
      '401(k) with company matching'
    ]
  },
  {
    title: 'Cybersecurity Specialist',
    department: 'Security',
    location: 'Washington, DC / Remote',
    type: 'Full-time',
    experience: '4+ years',
    description: 'Protect our clients\' systems and data with advanced security solutions.',
    requirements: [
      'Bachelor\'s degree in Cybersecurity or related field',
      '4+ years experience in cybersecurity',
      'Certifications: CISSP, CISM, or equivalent',
      'Experience with security tools and frameworks',
      'Strong analytical and problem-solving skills'
    ],
    benefits: [
      'Competitive salary and equity',
      'Comprehensive health benefits',
      'Flexible work arrangements',
      'Professional development budget',
      '401(k) with company matching'
    ]
  }
];

const benefits = [
  {
    icon: Star,
    title: 'Competitive Compensation',
    description: 'Industry-leading salary and equity packages'
  },
  {
    icon: Users,
    title: 'Great Team Culture',
    description: 'Collaborative and inclusive work environment'
  },
  {
    icon: Clock,
    title: 'Work-Life Balance',
    description: 'Flexible hours and remote work options'
  },
  {
    icon: CheckCircle,
    title: 'Professional Growth',
    description: 'Learning opportunities and career development'
  }
];

export default function CareersPage() {
  return (
    <Layout
      title="Careers - Zion Tech Group"
      description="Join our team of innovative technology professionals. Explore career opportunities in AI, cloud computing, cybersecurity, and more."
      keywords="careers, jobs, technology careers, AI engineer, cloud architect, cybersecurity, software development"
    >
      <div className="min-h-screen bg-gray-50">
        {/* Hero Section */}
        <section className="relative py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-blue-600 to-purple-600">
          <div className="max-w-7xl mx-auto">
            <div className="text-center">
              <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
                Join Our Team
              </h1>
              <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
                Be part of a team that's shaping the future of technology. Work on cutting-edge projects 
                and make a real impact on businesses worldwide.
              </p>
              <button className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
                View Open Positions
              </button>
            </div>
          </div>
        </section>

        {/* Open Positions */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Open Positions
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Explore our current job openings and find your next career opportunity
              </p>
            </div>

            <div className="space-y-8">
              {openPositions.map((position, index) => (
                <div key={index} className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-shadow">
                  <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-6">
                    <div>
                      <h3 className="text-2xl font-bold text-gray-900 mb-2">{position.title}</h3>
                      <div className="flex flex-wrap items-center gap-4 text-gray-600 mb-4">
                        <span className="flex items-center">
                          <MapPin className="h-4 w-4 mr-1" />
                          {position.location}
                        </span>
                        <span className="flex items-center">
                          <Clock className="h-4 w-4 mr-1" />
                          {position.type}
                        </span>
                        <span className="flex items-center">
                          <Users className="h-4 w-4 mr-1" />
                          {position.experience}
                        </span>
                      </div>
                      <p className="text-gray-600 mb-4">{position.description}</p>
                    </div>
                    <button className="bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors flex items-center">
                      Apply Now
                      <ArrowRight className="h-4 w-4 ml-2" />
                    </button>
                  </div>
                  
                  <div className="grid md:grid-cols-2 gap-8">
                    <div>
                      <h4 className="text-lg font-semibold text-gray-700 mb-3">Requirements:</h4>
                      <ul className="space-y-2">
                        {position.requirements.map((requirement, reqIndex) => (
                          <li key={reqIndex} className="flex items-start text-gray-600">
                            <CheckCircle className="h-4 w-4 text-green-500 mr-2 mt-0.5" />
                            {requirement}
                          </li>
                        ))}
                      </ul>
                    </div>
                    
                    <div>
                      <h4 className="text-lg font-semibold text-gray-700 mb-3">Benefits:</h4>
                      <ul className="space-y-2">
                        {position.benefits.map((benefit, benefitIndex) => (
                          <li key={benefitIndex} className="flex items-start text-gray-600">
                            <CheckCircle className="h-4 w-4 text-green-500 mr-2 mt-0.5" />
                            {benefit}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Why Work With Us?
              </h2>
              <p className="text-xl text-gray-600">
                We offer more than just a job - we offer a career with purpose
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {benefits.map((benefit, index) => (
                <div key={index} className="text-center">
                  <div className="bg-blue-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                    <benefit.icon className="h-8 w-8 text-blue-600" />
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">{benefit.title}</h3>
                  <p className="text-gray-600">{benefit.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-blue-600">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Don't See the Right Position?
            </h2>
            <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
              We're always looking for talented individuals. Send us your resume and we'll keep you in mind for future opportunities.
            </p>
            <button className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
              Submit Your Resume
            </button>
          </div>
        </section>
      </div>
    </Layout>
  );
}
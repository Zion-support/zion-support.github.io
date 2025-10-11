'use client';

import React from 'react';

const CareersPage: React.FC = () => {
  return (
    <div className="min-h-screen pt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            <span className="text-cyan-400">Careers</span>
          </h1>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Join our team and help shape the future of AI and IT solutions.
          </p>
        </div>
      </div>
    </div>
  );
};
import { MapPin, Clock, Users, ArrowRight, CheckCircle, Star, Heart  } from 'lucide-react';

const CareersPage: React.FC = () => {
  return (

  const openPositions = [import { Star, Users, Heart, Award, MapPin, Clock, Briefcase, CheckCircle, ArrowRight, GraduationCap, Zap  
  );
} from 'lucide-react';

interface JobPosition {
  id: string;
  title: string;
  department: string;
  location: string;
  type: string;
  experience: string;
  description: string;
  requirements: string[];
  benefits: string[];
  posted: string;
  featured: boolean;
}

const CareersPage: React.FC = () => {
  return (

  const openPositions: JobPosition[] = ['use client'
import React from 'react'
import Navigation from '../components/Navigation'
import Footer from '../components/Footer'
import { MapPin, Clock, Users, ArrowRight, CheckCircle, Star, Heart, Zap  
  );
} from 'lucide-react'

const CareersPage: React.FC = () => {
  return (

  const jobOpenings = [
    {
      title: 'Senior AI Engineer', department: 'AI Solutions', location: 'Remote / Delaware', type: 'Full-time', experience: '5+ years', description: 'Lead development of cutting-edge AI solutions and machine learning models.'
    
  );
}, {
      description: 'Lead the development of cutting-edge AI solutions and machine learning models for enterprise clients.', description: 'Lead the development of cutting-edge AI solutions and machine learning models.', requirements: [
        'Master\'s degree in Computer Science or related field', '5+ years experience in AI/ML development', 'Expertise in Python, TensorFlow, PyTorch', 'Experience with cloud platforms (AWS, Azure, GCP)', 'Strong problem-solving and communication skills'],
      benefits: ['Competitive salary and equity', 'Health, dental, and vision insurance', 'Flexible work arrangements', 'Professional development budget', 'Unlimited PTO']
    },
    {
      id: '2',
      title: 'Cloud Architect',
      department: 'Cloud Services',
      location: 'New York, NY',
      title: 'Cloud Solutions Architect',
      department: 'IT Services',
      location: 'Remote / Delaware',
      type: 'Full-time',
      experience: '7+ years',
      description: 'Design and implement scalable cloud infrastructure solutions for enterprise clients.'
    },
    {
      title: 'Data Scientist',
      department: 'Analytics',
      location: 'Remote / Austin',
      type: 'Full-time',
      experience: '3+ years',
      description: 'Extract insights from complex datasets and build predictive models.'
      requirements: ['AWS, Azure, GCP', '7+ years cloud experience', 'Architecture certifications']
    },
    {
        '401(k) with company matching',
        'Flexible PTO policy'
      ],
      posted: '1 week ago',
      featured: true
        'Flexible work arrangements',
        'Professional development budget',
        'Unlimited PTO'
      ]
    },
    {
      title: 'Cybersecurity Specialist',
      department: 'Security',
      location: 'Remote / Delaware',
      type: 'Full-time',
      experience: '4+ years',
      description: 'Automate deployment pipelines and manage infrastructure at scale.'
      requirements: ['Bachelor\'s degree in Cybersecurity or related field', '4+ years experience in cybersecurity', 'Certifications: CISSP, CISM, or equivalent', 'Experience with security tools and frameworks', 'Strong analytical and problem-solving skills'],
      benefits: ['Competitive salary and equity', 'Health, dental, and vision insurance', 'Flexible work arrangements', 'Professional development budget', 'Health and dental insurance'],
      posted: '1 week ago',
      featured: false
    },
    {
      id: '6',
      title: 'Frontend Developer',
      department: 'Engineering',
      location: 'Seattle, WA',
      type: 'Full-time',
      experience: '3+ years',
      description: 'Create engaging and responsive user interfaces for our web applications.',
      requirements: ['3+ years experience in frontend development', 'Proficiency in React, TypeScript, HTML/CSS', 'Experience with modern build tools', 'Knowledge of responsive design principles', 'Experience with testing frameworks'],
      benefits: ['Competitive salary: $85, 000 - $125, 000', 'Health insurance', 'Flexible PTO', 'Professional development opportunities'],
      posted: '4 days ago',
      featured: false
    }
  ];

  const benefits = [}]

  const benefits = ['Competitive salary and equity', 'Health, dental, and vision insurance', 'Flexible work arrangements', 'Professional development budget', 'Top-tier equipment and tools', 'Team building events', 'Career growth opportunities'];

  return (
    <>
  </>
      <Helmet ></Helmet>
        <title>Careers - Zion Tech Group | Join Our Team</title>
        <meta name="description" content="Join Zion Tech Group and work on cutting-edge AI and IT solutions. Explore open positions, benefits, and our company culture." />
        <meta name="keywords" content="careers, jobs, AI engineer, cloud architect, data scientist, DevOps, remote work, tech jobs" />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        <section className="relative py-20 px-4 overflow-hidden">
        </section>
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_80%, rgba(147, 51, 234, 0.3)_0%, transparent_50%)] animate-pulse" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%, rgba(59, 130, 246, 0.3)_0%, transparent_50%)] animate-pulse" style={{ animationDelay: '1s' }} />
          <div className="relative max-w-7xl mx-auto text-center">
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Navigation /></Navigation>
      {/* Hero Section */}
      <section className="pt-20 pb-16 px-4 sm: px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Join Our <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">Team</span>
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Work on cutting-edge AI and IT solutions that transform businesses worldwide.
              Be part of a team that's shaping the future of AI and IT solutions. We're looking for passionate individuals who want to make a difference.
              Be part of a team that's shaping the future of AI and IT solutions. 
              We're looking for passionate professionals to join our mission.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="cyber-button">
                <ArrowRight className="w-5 h-5 mr-2" /></ArrowRight>
                View Open Positions
              </button>
              <button className="cyber-button-secondary">
                <Users className="w-5 h-5 mr-2" /></Users>
                Learn About Us
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Why Join Us Section */}
      <section className="py-16 px-4 sm: px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Why Join Zion Tech Group?
            </h2>
            <p className="text-xl text-gray-300">
              We offer more than just a job - we offer a career with purpose and growth.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="cyber-card text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <benefit.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-2">{benefit.title}</h3>
                <p className="text-gray-300">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Values Section */}
      <section className="py-16 px-4 sm: px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="cyber-card">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold text-white mb-4">Our Values</h2>
              <p className="text-gray-300">
                These core values guide everything we do and shape our company culture.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {values.map((value, index) => (
                <div key={index} className="flex items-center">
                  <CheckCircle className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" /></CheckCircle>
                  <span className="text-gray-300">{value}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

          {/* Why Work With Us */}
          <div className="grid grid-cols-1 lg: grid-cols-2 gap-12 mb-16">
            <div>
              <h2 className="text-4xl font-bold text-white mb-6">Why Work With Us?</h2>
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Star className="w-6 h-6 text-white" /></Star>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-white mb-2">Cutting-Edge Technology</h3>
                    <p className="text-gray-300">
                      Work with the latest AI, quantum computing, and cloud technologies 
                      that are shaping the future.
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Users className="w-6 h-6 text-white" /></Users>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-white mb-2">World-Class Team</h3>
                    <p className="text-gray-300">
                      Collaborate with industry experts and thought leaders in AI, 
                      quantum computing, and enterprise technology.
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Heart className="w-6 h-6 text-white" /></Heart>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-white mb-2">Meaningful Impact</h3>
                    <p className="text-gray-300">
                      Help transform businesses and create solutions that make a 
                      real difference in people's lives.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white/5 backdrop-blur-lg rounded-2xl p-8 border border-white/10">
              <h3 className="text-2xl font-bold text-white mb-6">Our Benefits</h3>
              <div className="grid grid-cols-1 gap-4">
                {benefits.map((benefit, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-cyan-400" /></CheckCircle>
                    <span className="text-gray-300">{benefit}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Open Positions */}
          <div className="mb-16">
            <h2 className="text-4xl font-bold text-white mb-8 text-center">Open Positions</h2>
            <div className="grid grid-cols-1 md: grid-cols-2 gap-6">
              <div key={index} className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 hover: bg-white/20 transition-all duration-300">
                <h3 className="text-xl font-bold text-white mb-2">{job.title}</h3>
                <div className="flex items-center text-gray-300 mb-4">
                  <MapPin className="w-4 h-4 mr-2" /></MapPin>
                  <span className="mr-4">{job.location}</span>
                  <Clock className="w-4 h-4 mr-2" /></Clock>
                  <span>{job.type}</span>
                </div>
                <p className="text-gray-300 mb-6">{job.description}</p>
                <div className="mb-6">
                  <h4 className="text-sm font-semibold text-cyan-400 mb-2">Requirements: </h4>
                  <ul className="space-y-1">
                    {job.requirements.map((req, reqIndex) => (
                      <li key={reqIndex} className="text-sm text-gray-300">• {req}</li>
                    ))}
                  </ul>
                </div>
                <button className="w-full bg-gradient-to-r from-cyan-500 to-blue-500 hover: from-cyan-600 hover:to-blue-600 text-white font-bold py-3 px-6 rounded-lg transition-all duration-300 transform hover:scale-105 flex items-center justify-center">
                  Apply Now
                  <ArrowRight className="w-4 h-4 ml-2" /></ArrowRight>
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

        <section className="py-20 px-4">
        </section>
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl font-bold text-white mb-8 text-center">Open Positions</h2>
            <div className="grid grid-cols-1 md: grid-cols-2 gap-6 mb-16">
              {openPositions.map((position, index) => (
                <div
                  key={index}
                  className="bg-white/5 backdrop-blur-lg rounded-xl p-6 border border-white/10 hover: bg-white/10 transition-all duration-300"
                >
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <h3 className="text-xl font-bold text-white mb-2">{position.title}</h3>
                      <p className="text-cyan-400 font-medium">{position.department}</p>
                    </div>
                    <span className="bg-cyan-500/20 text-cyan-400 px-3 py-1 rounded-full text-sm">
                      {position.type}
                    </span>
                  </div>

                  <div className="flex items-center space-x-4 text-sm text-gray-300 mb-4">
                    <div className="flex items-center space-x-1">
                      <MapPin className="w-4 h-4" /></MapPin>
                      <span>{position.location}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Clock className="w-4 h-4" /></Clock>
                      <span>{position.experience}</span>
                    </div>
                  </div>

                  <p className="text-gray-300 mb-4">{position.description}</p>

                  <button className="w-full bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-6 py-3 rounded-lg font-semibold hover: from-cyan-600 hover:to-purple-700 transition-all duration-300 flex items-center justify-center space-x-2">
                    <span>Apply Now</span>
                    <ArrowRight className="w-4 h-4" /></ArrowRight>
                  </button>
      {/* Why Work With Us */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md: text-4xl font-bold text-gray-900 mb-4">
                Why Work With Us?
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                At Zion Tech Group, we believe in empowering our team members to reach their full potential while building innovative solutions that make a real impact.
              </p>
            </div>

            <div className="grid md: grid-cols-2 lg:grid-cols-3 gap-8">
              {benefits.map((benefit, index) => (
                <div key={index} className="text-center p-6 rounded-lg hover: shadow-lg transition-shadow">
                  <div className="flex justify-center mb-4">
                    {benefit.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">
                    {benefit.title}
                  </h3>
                  <p className="text-gray-600">
                    {benefit.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

          {/* CTA Section */}
          <div className="bg-gradient-to-r from-cyan-500/20 to-purple-500/20 rounded-2xl p-12 text-center backdrop-blur-lg border border-white/10">
            <h2 className="text-4xl font-bold text-white mb-4">
              Don't See Your Role?
            </h2>
            <p className="text-xl text-gray-300">
              We offer competitive benefits and a great work environment.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md: grid-cols-2 lg:grid-cols-4 gap-6">
            {benefits.map((benefit, index) => (
              <div key={index} className="flex items-center text-gray-300">
                <CheckCircle className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" /></CheckCircle>
                <span>{benefit}</span>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* All Open Positions */}
      <section id="open-positions" className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
              All Open Positions
            </h2>
            <div className="space-y-6">
              {regularPositions.map((position) => (
                <div key={position.id} className="bg-white border border-gray-200 rounded-lg p-6 hover: shadow-md transition-shadow">
                  <div className="flex flex-col md:flex-row md:items-center justify-between">
                    <div className="flex-1">
                      <h3 className="text-xl font-semibold text-gray-900 mb-2">
                        {position.title}
                      </h3>
                      <div className="flex flex-wrap items-center text-sm text-gray-500 mb-3">
                        <span className="mr-4">{position.department}</span>
                        <MapPin className="w-4 h-4 mr-1" /></MapPin>
                        <span className="mr-4">{position.location}</span>
                        <Briefcase className="w-4 h-4 mr-1" /></Briefcase>
                        <span className="mr-4">{position.type}</span>
                        <span>{position.experience}</span>
                      </div>
                    </div>
                    
                    <p className="text-gray-300 mb-6">{job.description}</p>
                    
                    <div className="mb-6">
                      <h4 className="text-lg font-semibold text-white mb-3">Requirements</h4>
                      <ul className="space-y-2">
                        {job.requirements.map((req, reqIndex) => (
                          <li key={reqIndex} className="flex items-center text-gray-300">
                            <CheckCircle className="w-4 h-4 text-green-400 mr-3 flex-shrink-0" /></CheckCircle>
                            {req}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                </div>
              ))}
            </div>

            </div>
          </div>
        </section>
      ))

  );
};

export default CareersPage;
          </div>
        </div>
      </section>

      {/* Culture & Values */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Our Culture & Values
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                We foster an environment where innovation thrives and every team member can make a meaningful impact.
              </p>
            </div>

            <div className="grid md: grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <CheckCircle className="w-8 h-8 text-blue-600" /></CheckCircle>
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Excellence</h3>
                <p className="text-gray-600">We strive for excellence in everything we do, from code quality to customer service.</p>
              </div>

              <div className="text-center">
                <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users className="w-8 h-8 text-green-600" /></Users>
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Collaboration</h3>
                <p className="text-gray-600">We believe in the power of teamwork and open communication.</p>
              </div>

              <div className="text-center">
                <div className="bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Zap className="w-8 h-8 text-purple-600" /></Zap>
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Innovation</h3>
                <p className="text-gray-600">We encourage creative thinking and embrace new technologies.</p>
              </div>

              <div className="text-center">
                <div className="bg-orange-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Heart className="w-8 h-8 text-orange-600" /></Heart>
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Integrity</h3>
                <p className="text-gray-600">We operate with honesty, transparency, and ethical practices.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-blue-900 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-4">
              Ready to Join Our Team?
            </h2>
            <p className="text-xl mb-8 text-blue-100">
              Don't see a position that matches your skills? We're always looking for talented individuals. Send us your resume!
            </p>
            <div className="flex flex-col sm: flex-row gap-4 justify-center">
              <a
                href="/contact"
                className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300"
              >
                Send Your Resume
              </a>
              <a
                href="/about"
                className="border border-white/20 text-white px-8 py-4 rounded-lg font-semibold hover:bg-white/10 transition-all duration-300"
              >
                Learn About Us
              </a>
            </div>
          </div>
        </div>
      </section>

export default CareersPage;
      {/* CTA Section */}
      <section className="py-16 px-4 sm: px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Don't See the Right Role?
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            We're always looking for talented individuals. Send us your resume and we'll keep you in mind for future opportunities.
          </p>
          <button className="cyber-button-secondary">
            <ArrowRight className="w-5 h-5 mr-2" /></ArrowRight>
            Send Your Resume
          </button>
        </div>
      </section>

      <Footer /></Footer>
    </div>
  )
}

export default CareersPage

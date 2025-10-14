
import { Helmet } from "react-helmet-async";"
import React from 'react';

const CareersPage: React.FC = () => {
  const openPositions = [
    {
      title: 'Senior AI Engineer',
      department: 'AI Solutions',
      location: 'Remote / Middletown, DE',
      type: 'Full-time',
      description: 'Lead the development of cutting-edge AI solutions and machine learning models.',
      requirements: [
        '5+ years experience in AI/ML',
        'Proficiency in Python, TensorFlow, PyTorch',
        'Experience with cloud platforms (AWS, Azure, GCP)',
        'Strong problem-solving skills'
      ]
    },
    {
      title: 'Cybersecurity Specialist',
      department: 'Security',
      location: 'Remote / Middletown, DE',
      type: 'Full-time',
      description: 'Protect our clients\' digital assets with advanced security solutions.',
      requirements: [
        '3+ years in cybersecurity',
        'Certifications: CISSP, CISM, or equivalent',
        'Experience with SIEM tools',
        'Knowledge of threat intelligence'
      ]
    },
    {
      title: 'Cloud Solutions Architect',
      department: 'Cloud Services',
      location: 'Remote / Middletown, DE',
      type: 'Full-time',
      description: 'Design and implement scalable cloud infrastructure solutions.',
      requirements: [
        '4+ years cloud architecture experience',
        'AWS/Azure/GCP certifications preferred',
        'Experience with DevOps practices',
        'Strong communication skills'
      ]
    },
    {
      title: 'Frontend Developer',
      department: 'Development',
      location: 'Remote / Middletown, DE',
      type: 'Full-time',
      description: 'Create beautiful and responsive user interfaces for our applications.',
      requirements: [
        '3+ years React/TypeScript experience',
        'Proficiency in modern CSS frameworks',
        'Experience with responsive design',
        'Portfolio of previous work'
      ]
    }
  ];

  const benefits = [
    {
      icon: <Users className="w-8 h-8 text-blue-500" />,""
      title: 'Collaborative Environment',
      description: 'Work with talented professionals in a supportive team environment.'
    },
    {
      icon: <Zap className="w-8 h-8 text-yellow-500" />,""
      title: 'Cutting-Edge Technology',
      description: 'Work with the latest technologies and tools in AI and IT.'
    },
    {
      icon: <Shield className="w-8 h-8 text-green-500" />,""
      title: 'Health & Wellness',
      description: 'Comprehensive health insurance and wellness programs.'
    },
    {
      icon: <Globe className="w-8 h-8 text-purple-500" />,""
      title: 'Remote Work',
      description: 'Flexible remote work options and work-life balance.'
    },
    {
      icon: <Award className="w-8 h-8 text-red-500" />,""
      title: 'Career Growth',
      description: 'Opportunities for professional development and advancement.'
    },
    {
      icon: <Star className="w-8 h-8 text-indigo-500" />,""
      title: 'Competitive Benefits',
      description: 'Competitive salary, bonuses, and comprehensive benefits package.'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">""
      <Helmet>
        <title>Careers - Zion Tech Group</title>
        <meta name=description content=Join our team of innovative professionals. Explore career opportunities in AI, cybersecurity, cloud computing, and technology solutions. />
      </Helmet>

      <div className="container mx-auto px-4 py-16">""
        <div className="text-center mb-16">""
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">""
            Join Our Team
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">""
            Be part of a dynamic team that's shaping the future of technology. 
            We're looking for passionate professionals to join us in delivering innovative solutions.
          </p>
        </div>

        {/* Company Culture */}
        <div className="mb-16">""
          <h2 className="text-3xl font-bold text-white text-center mb-12">Why Work With Us?</h2>""
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">""
            {benefits.map((benefit, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 text-center">""
                <div className="flex justify-center mb-4">""
                  {benefit.icon}
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">{benefit.title}</h3>""
                <p className=text-gray-300>{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Open Positions */}
        <div className="mb-16">""
          <h2 className="text-3xl font-bold text-white text-center mb-12">Open Positions</h2>""
          <div className="space-y-6">""
            {openPositions.map((position, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">""
                <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-4">""
                  <div>
                    <h3 className="text-xl font-bold text-white mb-2">{position.title}</h3>""
                    <div className="flex flex-wrap gap-4 text-sm text-gray-300">""
                      <span className="flex items-center">""
                        <MapPin className="w-4 h-4 mr-1" />""
                        {position.location}
                      </span>
                      <span className="flex items-center">""
                        <Users className="w-4 h-4 mr-1" />""
                        {position.department}
                      </span>
                      <span className="flex items-center">""
                        <Clock className="w-4 h-4 mr-1" />""
                        {position.type}
                      </span>
                    </div>
                  </div>
                  <Link
                    to="/contact"""
                    className="mt-4 lg:mt-0 bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-lg font-semibold transition-colors flex items-center justify-center"""
                  >
                    Apply Now
                    <ArrowRight className="w-4 h-4 ml-2" />""
                  </Link>
                </div>
                
                <p className=text-gray-300 mb-4>{position.description}</p>
                
                <div>
                  <h4 className="text-lg font-semibold text-white mb-2">Requirements:</h4>""
                  <ul className="space-y-1">""
                    {position.requirements.map((requirement, reqIndex) => (
                      <li key={reqIndex} className="flex items-center text-gray-300">""
                        <CheckCircle className="w-4 h-4 text-green-400 mr-2" />""
                        {requirement}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center bg-white/10 backdrop-blur-sm rounded-xl p-8 border border-white/20">""
          <h2 className="text-3xl font-bold text-white mb-6">Don't See Your Perfect Role?</h2>""
          <p className="text-gray-300 mb-8">""
            We're always looking for talented individuals. Send us your resume and let us know how you can contribute to our team.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">""
            <Link
              to="/contact"""
              className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors flex items-center justify-center"""
            >
              Send Your Resume
              <Mail className="w-4 h-4 ml-2" />""
            </Link>
            <Link
              to="/about"""
              className="border border-white/30 hover:bg-white/10 text-white px-8 py-3 rounded-lg font-semibold transition-colors"""
            >
              Learn About Us
            </Link>
              </p>
              <div className="flex justify-center space-x-4">""
                <a 
                  href="/" ""

                  className="bg-cyan-600 hover:bg-cyan-700 text-white px-6 py-3 rounded-lg transition-colors duration-300"""
                >
                  Go Home
                </a>
                <a """
                  href="/contact" """
                  className="bg-gray-700 hover:bg-gray-600 text-white px-6 py-3 rounded-lg transition-colors duration-300"""
                >
                  Contact Us
                </a>
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
"""

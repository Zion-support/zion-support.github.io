import React from 'react';
import { ArrowRight, Users, Briefcase, Clock, Star } from 'lucide-react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';

const CareersPage: React.FC = () => {
  const positions = [
    {
      title: 'Senior AI Engineer',
      department: 'AI Research',
      location: 'Remote / New York',
      type: 'Full-time',
      experience: '5+ years',
      description: 'Lead the development of cutting-edge AI solutions and machine learning models.',
      requirements: [
        'PhD in Computer Science or related field',
        '5+ years experience in AI/ML',
        'Expertise in Python, TensorFlow, PyTorch',
        'Experience with cloud platforms (AWS, Azure, GCP)',
        'Strong problem-solving and communication skills'
      ],
      benefits: ['Competitive salary', 'Stock options', 'Health insurance', 'Flexible work hours', 'Learning budget']
    },
    {
      title: 'Cloud Solutions Architect',
      department: 'Cloud Services',
      location: 'San Francisco, CA',
      type: 'Full-time',
      experience: '7+ years',
      description: 'Design and implement scalable cloud architectures for enterprise clients.',
      requirements: [
        'Bachelor\'s degree in Computer Science',
        '7+ years cloud architecture experience',
        'AWS/Azure/GCP certifications preferred',
        'Experience with Kubernetes, Docker',
        'Strong client-facing skills'
      ],
      benefits: ['Competitive salary', 'Stock options', 'Health insurance', 'Flexible work hours', 'Learning budget']
    }
  ];

  const companyBenefits = [
    {
      icon: <Star className="w-8 h-8 text-yellow-500" />,
      title: 'Competitive Compensation',
      description: 'Above-market salaries with performance bonuses and stock options.'
    },
    {
      icon: <Users className="w-8 h-8 text-blue-500" />,
      title: 'Great Team Culture',
      description: 'Work with talented, passionate professionals in a collaborative environment.'
    },
    {
      icon: <Briefcase className="w-8 h-8 text-green-500" />,
      title: 'Career Growth',
      description: 'Clear career paths with opportunities for advancement and skill development.'
    },
    {
      icon: <Clock className="w-8 h-8 text-purple-500" />,
      title: 'Work-Life Balance',
      description: 'Flexible work arrangements and generous time off policies.'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900">
      <Helmet>
        <title>Careers - Zion Tech Group</title>
        <meta name="description" content="Join Zion Tech Group and help shape the future of AI and technology. Explore career opportunities and join our innovative team." />
        <meta name="keywords" content="careers, jobs, AI engineer, cloud architect, DevOps, product manager, technology careers" />
      </Helmet>
      
      <main className="pt-20 px-4 py-20">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Join Our <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">Team</span>
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
              Help us build the future of AI and technology. Join a team of passionate innovators working on cutting-edge solutions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                to="/contact" 
                className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-blue-700 hover:to-purple-700 transition-all duration-300 flex items-center justify-center"
              >
                Apply Now
                <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
              <Link 
                to="/about" 
                className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white/10 transition-colors"
              >
                Learn About Us
              </Link>
            </div>
          </div>

          {/* Open Positions */}
          <div className="mb-20">
            <h2 className="text-3xl font-bold text-white mb-8 text-center">Open Positions</h2>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {positions.map((position, index) => (
                <div key={index} className="bg-white/10 backdrop-blur-lg rounded-xl p-8 border border-white/20">
                  <h3 className="text-xl font-bold text-white mb-2">{position.title}</h3>
                  <div className="flex items-center space-x-4 text-sm text-gray-300 mb-4">
                    <span className="flex items-center">
                      <Briefcase className="w-4 h-4 mr-1" />
                      {position.department}
                    </span>
                    <span className="flex items-center">
                      <Clock className="w-4 h-4 mr-1" />
                      {position.type}
                    </span>
                  </div>
                  <p className="text-gray-300 mb-4">{position.description}</p>
                  <div className="mb-4">
                    <h4 className="text-white font-semibold mb-2">Requirements:</h4>
                    <ul className="text-sm text-gray-300 space-y-1">
                      {position.requirements.map((req, reqIndex) => (
                        <li key={reqIndex} className="flex items-start">
                          <span className="text-blue-400 mr-2">•</span>
                          {req}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="mb-6">
                    <h4 className="text-white font-semibold mb-2">Benefits:</h4>
                    <div className="flex flex-wrap gap-2">
                      {position.benefits.map((benefit, benefitIndex) => (
                        <span key={benefitIndex} className="bg-blue-500/20 text-blue-300 px-3 py-1 rounded-full text-sm">
                          {benefit}
                        </span>
                      ))}
                    </div>
                  </div>
                  <Link
                    to="/contact"
                    className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-3 rounded-lg font-semibold hover:from-blue-700 hover:to-purple-700 transition-all duration-300 inline-flex items-center"
                  >
                    Apply Now
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Link>
                </div>
              ))}
            </div>
          </div>

          {/* Company Benefits */}
          <div className="mb-20">
            <h2 className="text-3xl font-bold text-white mb-8 text-center">Why Work With Us?</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {companyBenefits.map((benefit, index) => (
                <div key={index} className="bg-white/10 backdrop-blur-lg rounded-xl p-8 border border-white/20 text-center">
                  <div className="mb-4">
                    {benefit.icon}
                  </div>
                  <h3 className="text-xl font-bold text-white mb-4">{benefit.title}</h3>
                  <p className="text-gray-300">{benefit.description}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="text-center">
            <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-3xl p-12">
              <h2 className="text-4xl font-bold text-white mb-4">Don't See Your Role?</h2>
              <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
                We're always looking for talented individuals. Send us your resume and let us know how you can contribute to our mission.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link 
                  to="/contact" 
                  className="bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
                >
                  Send Your Resume
                </Link>
                <Link 
                  to="/about" 
                  className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white/10 transition-colors"
                >
                  Learn About Our Culture
                </Link>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default CareersPage;

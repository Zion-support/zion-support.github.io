import React from 'react';
import { Helmet } from 'react-helmet-async';
import { 
  MapPinIcon, 
  ClockIcon, 
  UserGroupIcon, 
  HeartIcon, 
  BoltIcon, 
  TargetIcon,
  ArrowRightIcon,
  CheckCircleIcon
} from '@heroicons/react/24/outline';

const CareersPage: React.FC = () => {
  const positions = [
    {
      title: 'Senior AI Engineer',
      department: 'AI Solutions',
      location: 'Remote',
      type: 'Full-time',
      description: 'Lead the development of cutting-edge AI solutions and machine learning models.',
      requirements: [
        '5+ years experience in AI/ML',
        'Proficiency in Python, TensorFlow, PyTorch',
        'Experience with cloud platforms',
        'Strong problem-solving skills'
      ]
    },
    {
      title: 'Cloud Infrastructure Specialist',
      department: 'IT Solutions',
      location: 'Middletown, DE',
      type: 'Full-time',
      description: 'Design and implement scalable cloud infrastructure solutions for our clients.',
      requirements: [
        '3+ years cloud experience',
        'AWS/Azure/GCP certifications',
        'Infrastructure as Code knowledge',
        'Strong communication skills'
      ]
    },
    {
      title: 'Frontend Developer',
      department: 'Development',
      location: 'Remote',
      type: 'Full-time',
      description: 'Create beautiful, responsive user interfaces for our web applications.',
      requirements: [
        '3+ years React/TypeScript experience',
        'Proficiency in modern CSS frameworks',
        'UI/UX design understanding',
        'Git and version control experience'
      ]
    }
  ];

  const benefits = [
    {
      icon: HeartIcon,
      title: 'Health & Wellness',
      description: 'Comprehensive health insurance and wellness programs'
    },
    {
      icon: BoltIcon,
      title: 'Flexible Work',
      description: 'Remote work options and flexible schedules'
    },
    {
      icon: TargetIcon,
      title: 'Career Growth',
      description: 'Professional development and advancement opportunities'
    },
    {
      icon: UserGroupIcon,
      title: 'Great Team',
      description: 'Work with talented, passionate professionals'
    }
  ];

  return (
    <>
      <Helmet>
        <title>Careers - Zion Tech Group</title>
        <meta name="description" content="Join our team at Zion Tech Group. Explore career opportunities in AI, IT solutions, and technology innovation." />
        <meta name="keywords" content="careers, jobs, AI engineer, cloud specialist, frontend developer, Zion Tech Group" />
        <meta property="og:title" content="Careers - Zion Tech Group" />
        <meta property="og:description" content="Join our team at Zion Tech Group. Explore career opportunities in AI, IT solutions, and technology innovation." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://ziontechgroup.com/careers" />
      </Helmet>
      
      <div className="min-h-screen bg-slate-900 text-white">
        {/* Hero Section */}
        <section className="relative overflow-hidden py-20">
          <div className="absolute inset-0 bg-gradient-to-br from-purple-900/20 to-cyan-900/20"></div>
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h1 className="text-5xl lg:text-6xl font-bold mb-8 bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">
                Join Our Team
              </h1>
              <p className="text-xl lg:text-2xl text-gray-300 mb-12 max-w-4xl mx-auto leading-relaxed">
                Be part of a dynamic team that's shaping the future of AI and IT solutions. 
                We're looking for passionate professionals who want to make a difference.
              </p>
            </div>
          </div>
        </section>

        {/* Open Positions */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl lg:text-5xl font-bold mb-6">
                Open <span className="bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">Positions</span>
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Explore current opportunities and find your perfect role with us.
              </p>
            </div>
            
            <div className="space-y-8">
              {positions.map((position, index) => (
                <div key={index} className="bg-slate-800/50 p-8 rounded-xl border border-slate-700 hover:border-purple-500 transition-all duration-300">
                  <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-6">
                    <div>
                      <h3 className="text-2xl font-bold text-white mb-2">{position.title}</h3>
                      <div className="flex flex-wrap items-center space-x-4 text-sm text-gray-300">
                        <span className="flex items-center">
                          <MapPinIcon className="w-4 h-4 mr-1" />
                          {position.location}
                        </span>
                        <span className="flex items-center">
                          <ClockIcon className="w-4 h-4 mr-1" />
                          {position.type}
                        </span>
                        <span className="text-purple-400">{position.department}</span>
                      </div>
                    </div>
                    <button className="mt-4 lg:mt-0 bg-gradient-to-r from-purple-600 to-cyan-600 text-white px-6 py-3 rounded-lg font-semibold hover:from-purple-700 hover:to-cyan-700 transition-all duration-300 flex items-center">
                      Apply Now
                      <ArrowRightIcon className="w-4 h-4 ml-2" />
                    </button>
                  </div>
                  
                  <p className="text-gray-300 mb-6">{position.description}</p>
                  
                  <div>
                    <h4 className="text-white font-semibold mb-3">Requirements:</h4>
                    <ul className="space-y-2">
                      {position.requirements.map((requirement, idx) => (
                        <li key={idx} className="flex items-center text-gray-300 text-sm">
                          <CheckCircleIcon className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
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

        {/* Benefits Section */}
        <section className="py-20 bg-slate-800/50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl lg:text-5xl font-bold mb-6">
                Why Work With <span className="bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">Us</span>?
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                We offer competitive benefits and a great work environment.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {benefits.map((benefit, index) => (
                <div key={index} className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-cyan-500 rounded-lg flex items-center justify-center mx-auto mb-4">
                    <benefit.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-2">{benefit.title}</h3>
                  <p className="text-gray-300">{benefit.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-r from-purple-900/30 to-cyan-900/30">
          <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
            <h2 className="text-4xl lg:text-5xl font-bold mb-6">
              Don't See Your Role?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              We're always looking for talented individuals. Send us your resume and let us know how you can contribute.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/contact"
                className="bg-gradient-to-r from-purple-600 to-cyan-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-purple-700 hover:to-cyan-700 transition-all duration-300 transform hover:scale-105"
              >
                Send Resume
              </a>
              <a
                href="/about"
                className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-slate-900 transition-all duration-300"
              >
                Learn About Us
              </a>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default CareersPage;

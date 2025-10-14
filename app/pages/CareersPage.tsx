import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { 
  MapPinIcon,
  ClockIcon,
  UserGroupIcon,
  HeartIcon,
  BoltIcon,
  CommandLineIcon,
  ArrowRightIcon,
  CheckCircleIcon,
  StarIcon
} from '@heroicons/react/24/outline';

const CareersPage: React.FC = () => {
  const benefits = [
    {
      icon: HeartIcon,
      title: 'Work-Life Balance',
      description: 'Flexible working hours and remote work options to maintain a healthy work-life balance.'
    },
    {
      icon: BoltIcon,
      title: 'Innovation',
      description: 'Work on cutting-edge AI and IT projects that shape the future of technology.'
    },
    {
      icon: CommandLineIcon,
      title: 'Growth',
      description: 'Continuous learning opportunities and career development programs.'
    },
    {
      icon: UserGroupIcon,
      title: 'Team',
      description: 'Collaborate with talented professionals in a supportive and inclusive environment.'
    }
  ];

  const openPositions = [
    {
      title: 'Senior AI Engineer',
      type: 'Full-time',
      location: 'Remote',
      department: 'Engineering',
      description: 'Lead the development of AI solutions and machine learning models for our clients.',
      requirements: [
        '5+ years of experience in AI/ML',
        'Proficiency in Python, TensorFlow, PyTorch',
        'Experience with cloud platforms (AWS, Azure, GCP)',
        'Strong problem-solving skills'
      ]
    },
    {
      title: 'Cloud Solutions Architect',
      type: 'Full-time',
      location: 'Remote',
      department: 'Engineering',
      description: 'Design and implement scalable cloud infrastructure solutions for enterprise clients.',
      requirements: [
        '7+ years of cloud architecture experience',
        'Expertise in AWS, Azure, or GCP',
        'Experience with microservices and containers',
        'Strong communication skills'
      ]
    },
    {
      title: 'Cybersecurity Specialist',
      type: 'Full-time',
      location: 'Remote',
      department: 'Security',
      description: 'Protect our clients from cyber threats and ensure compliance with security standards.',
      requirements: [
        '4+ years of cybersecurity experience',
        'Certifications (CISSP, CISM, CEH)',
        'Experience with security tools and frameworks',
        'Knowledge of compliance standards'
      ]
    },
    {
      title: 'Frontend Developer',
      type: 'Full-time',
      location: 'Remote',
      department: 'Engineering',
      description: 'Build modern, responsive user interfaces for our web applications and dashboards.',
      requirements: [
        '3+ years of frontend development experience',
        'Proficiency in React, TypeScript, Next.js',
        'Experience with UI/UX design principles',
        'Knowledge of modern web technologies'
      ]
    },
    {
      title: 'DevOps Engineer',
      type: 'Full-time',
      location: 'Remote',
      department: 'Engineering',
      description: 'Automate deployment processes and maintain our infrastructure and CI/CD pipelines.',
      requirements: [
        '4+ years of DevOps experience',
        'Experience with Docker, Kubernetes, Jenkins',
        'Knowledge of cloud platforms and infrastructure',
        'Strong scripting skills (Bash, Python)'
      ]
    },
    {
      title: 'Product Manager',
      type: 'Full-time',
      location: 'Remote',
      department: 'Product',
      description: 'Lead product strategy and roadmap for our AI and IT solutions portfolio.',
      requirements: [
        '5+ years of product management experience',
        'Experience with AI/ML products',
        'Strong analytical and communication skills',
        'MBA or equivalent experience preferred'
      ]
    }
  ];

  const culture = [
    {
      icon: UserGroupIcon,
      title: 'Collaborative',
      description: 'We believe in the power of teamwork and open communication to achieve great things.'
    },
    {
      icon: BoltIcon,
      title: 'Innovative',
      description: 'We encourage creative thinking and embrace new technologies to solve complex problems.'
    },
    {
      icon: CommandLineIcon,
      title: 'Impact-Driven',
      description: 'We focus on delivering real value to our clients and making a positive impact.'
    }
  ];

  const stats = [
    { number: '50+', label: 'Team Members' },
    { number: '15+', label: 'Countries' },
    { number: '100%', label: 'Remote Friendly' },
    { number: '4.9/5', label: 'Employee Rating' }
  ];

  return (
    <>
      <Helmet>
        <title>Careers - Zion Tech Group</title>
        <meta name="description" content="Join our team of AI and IT experts. Explore career opportunities at Zion Tech Group and be part of the future of technology." />
        <meta name="keywords" content="careers, jobs, AI engineer, cloud architect, cybersecurity, remote work, technology careers" />
      </Helmet>
      
      <div className="min-h-screen bg-white">
        {/* Hero Section */}
        <section className="py-20 px-4 bg-gradient-to-br from-blue-50 to-indigo-100">
          <div className="max-w-6xl mx-auto text-center">
            <h1 className="text-5xl font-bold text-gray-900 mb-6">
              Join Our Team
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
              Be part of a team that's shaping the future of AI and IT solutions. 
              Work on cutting-edge projects and make a real impact.
            </p>
            
            {/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="text-3xl font-bold text-blue-600 mb-2">{stat.number}</div>
                  <div className="text-gray-600">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Why Work With Us */}
        <section className="py-20 px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
              Why Work With Us?
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {benefits.map((benefit, index) => (
                <div key={index} className="text-center p-6 bg-white rounded-lg shadow-sm border border-gray-200 hover:shadow-md transition-shadow">
                  <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <benefit.icon className="w-8 h-8 text-blue-600" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">{benefit.title}</h3>
                  <p className="text-gray-600">{benefit.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Open Positions */}
        <section className="py-20 px-4 bg-gray-50">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
              Open Positions
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              {openPositions.map((position, index) => (
                <div key={index} className="bg-white rounded-lg p-6 shadow-sm border border-gray-200 hover:shadow-md transition-shadow">
                  <div className="flex justify-between items-start mb-4">
                    <h3 className="text-xl font-semibold text-gray-900">{position.title}</h3>
                    <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium">
                      {position.type}
                    </span>
                  </div>
                  <div className="flex items-center text-gray-500 mb-3">
                    <MapPinIcon className="w-4 h-4 mr-2" />
                    <span className="text-sm">{position.location}</span>
                    <span className="mx-2">•</span>
                    <span className="text-sm">{position.department}</span>
                  </div>
                  <p className="text-gray-600 mb-4">{position.description}</p>
                  
                  <div className="mb-4">
                    <h4 className="font-semibold text-gray-900 mb-2">Requirements:</h4>
                    <ul className="space-y-1">
                      {position.requirements.map((requirement, reqIndex) => (
                        <li key={reqIndex} className="flex items-center text-sm text-gray-600">
                          <CheckCircleIcon className="w-4 h-4 text-green-500 mr-2" />
                          {requirement}
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <button className="w-full bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition-colors font-medium">
                    Apply Now
                  </button>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Company Culture */}
        <section className="py-20 px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
              Our Culture
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              {culture.map((item, index) => (
                <div key={index} className="text-center p-6 bg-white rounded-lg shadow-sm border border-gray-200">
                  <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <item.icon className="w-8 h-8 text-blue-600" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">{item.title}</h3>
                  <p className="text-gray-600">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-20 px-4 bg-gray-50">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
              Employee Benefits
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-200">
                <h3 className="text-lg font-semibold text-gray-900 mb-3">Health & Wellness</h3>
                <ul className="space-y-2 text-gray-600">
                  <li>• Comprehensive health insurance</li>
                  <li>• Mental health support</li>
                  <li>• Gym membership reimbursement</li>
                  <li>• Flexible PTO policy</li>
                </ul>
              </div>
              <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-200">
                <h3 className="text-lg font-semibold text-gray-900 mb-3">Professional Development</h3>
                <ul className="space-y-2 text-gray-600">
                  <li>• Learning budget for courses</li>
                  <li>• Conference attendance</li>
                  <li>• Mentorship programs</li>
                  <li>• Career advancement opportunities</li>
                </ul>
              </div>
              <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-200">
                <h3 className="text-lg font-semibold text-gray-900 mb-3">Work Environment</h3>
                <ul className="space-y-2 text-gray-600">
                  <li>• Remote-first culture</li>
                  <li>• Flexible working hours</li>
                  <li>• Modern equipment provided</li>
                  <li>• Collaborative team environment</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4 bg-blue-600">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-white mb-6">
              Don't See Your Perfect Role?
            </h2>
            <p className="text-xl text-blue-100 mb-8">
              We're always looking for talented individuals. Send us your resume and we'll keep you in mind for future opportunities.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                to="/contact" 
                className="bg-white text-blue-600 px-8 py-3 rounded-lg hover:bg-gray-100 transition-colors font-semibold"
              >
                Send Resume
              </Link>
              <Link 
                to="/about" 
                className="border border-white text-white px-8 py-3 rounded-lg hover:bg-white hover:text-blue-600 transition-colors font-semibold"
              >
                Learn More About Us
              </Link>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}

export default CareersPage;
import React from 'react';
import Link from 'next/link';
import { ArrowRight, CheckCircle, Star, Users, Briefcase, MapPin, Clock } from 'lucide-react';

const CareersPage: React.FC = () => {
  const openPositions = [
    {
      title: 'Senior AI Engineer',
      department: 'Engineering',
      location: 'Remote / Middletown, DE',
      type: 'Full-time',
      experience: '5+ years',
      description: 'Lead development of cutting-edge AI solutions and machine learning models.',
      requirements: [
        'Master\'s degree in Computer Science or related field',
        '5+ years experience with Python, TensorFlow, PyTorch',
        'Experience with cloud platforms (AWS, Azure, GCP)',
        'Strong background in machine learning and deep learning',
        'Experience with MLOps and model deployment'
      ],
      benefits: ['Competitive salary', 'Health insurance', '401k matching', 'Flexible work hours', 'Professional development budget'],
      salary: '$120,000 - $180,000',
      urgent: true
    },
    {
      title: 'AI Solutions Architect',
      department: 'Solutions',
      location: 'Remote / Middletown, DE',
      type: 'Full-time',
      experience: '7+ years',
      description: 'Design and implement AI solutions for enterprise clients.',
      requirements: [
        'Bachelor\'s degree in Computer Science or related field',
        '7+ years experience in software architecture',
        'Experience with AI/ML technologies',
        'Strong communication and client-facing skills',
        'Experience with enterprise software solutions'
      ],
      benefits: ['Competitive salary', 'Health insurance', '401k matching', 'Flexible work hours', 'Stock options'],
      salary: '$140,000 - $200,000',
      urgent: false
    },
    {
      title: 'DevOps Engineer',
      department: 'Engineering',
      location: 'Remote / Middletown, DE',
      type: 'Full-time',
      experience: '3+ years',
      description: 'Manage cloud infrastructure and deployment pipelines for AI applications.',
      requirements: [
        'Bachelor\'s degree in Computer Science or related field',
        '3+ years experience with DevOps tools and practices',
        'Experience with Kubernetes, Docker, and CI/CD',
        'Knowledge of cloud platforms (AWS, Azure, GCP)',
        'Experience with monitoring and logging tools'
      ],
      benefits: ['Competitive salary', 'Health insurance', '401k matching', 'Flexible work hours', 'Learning budget'],
      salary: '$90,000 - $130,000',
      urgent: false
    },
    {
      title: 'AI Product Manager',
      department: 'Product',
      location: 'Remote / Middletown, DE',
      type: 'Full-time',
      experience: '4+ years',
      description: 'Lead product strategy and development for AI-powered solutions.',
      requirements: [
        'Bachelor\'s degree in Business, Computer Science, or related field',
        '4+ years experience in product management',
        'Experience with AI/ML products',
        'Strong analytical and problem-solving skills',
        'Experience with agile development methodologies'
      ],
      benefits: ['Competitive salary', 'Health insurance', '401k matching', 'Flexible work hours', 'Stock options'],
      salary: '$110,000 - $160,000',
      urgent: false
    },
    {
      title: 'Cybersecurity Specialist',
      department: 'Security',
      location: 'Remote / Middletown, DE',
      type: 'Full-time',
      experience: '4+ years',
      description: 'Ensure security of AI systems and protect against cyber threats.',
      requirements: [
        'Bachelor\'s degree in Cybersecurity or related field',
        '4+ years experience in cybersecurity',
        'Certifications: CISSP, CISM, or equivalent',
        'Experience with AI/ML security',
        'Knowledge of compliance frameworks (SOC 2, ISO 27001)'
      ],
      benefits: ['Competitive salary', 'Health insurance', '401k matching', 'Flexible work hours', 'Security training budget'],
      salary: '$100,000 - $150,000',
      urgent: true
    },
    {
      title: 'Data Scientist',
      department: 'Data Science',
      location: 'Remote / Middletown, DE',
      type: 'Full-time',
      experience: '3+ years',
      description: 'Analyze data and build predictive models for business insights.',
      requirements: [
        'Master\'s degree in Data Science, Statistics, or related field',
        '3+ years experience in data science',
        'Proficiency in Python, R, SQL',
        'Experience with machine learning libraries',
        'Strong statistical and analytical skills'
      ],
      benefits: ['Competitive salary', 'Health insurance', '401k matching', 'Flexible work hours', 'Conference budget'],
      salary: '$95,000 - $140,000',
      urgent: false
    }
  ];

  const benefits = [
    {
      icon: '💰',
      title: 'Competitive Compensation',
      description: 'Above-market salaries with performance bonuses and stock options'
    },
    {
      icon: '🏥',
      title: 'Health & Wellness',
      description: 'Comprehensive health, dental, and vision insurance for you and your family'
    },
    {
      icon: '🏠',
      title: 'Flexible Work',
      description: 'Remote-first culture with flexible hours and unlimited PTO'
    },
    {
      icon: '📚',
      title: 'Learning & Development',
      description: 'Annual learning budget, conference attendance, and professional development'
    },
    {
      icon: '🚀',
      title: 'Growth Opportunities',
      description: 'Clear career paths and opportunities to work on cutting-edge AI projects'
    },
    {
      icon: '🎯',
      title: 'Impact',
      description: 'Work on projects that transform businesses and make a real difference'
    }
  ];

  const culture = [
    {
      icon: '🤝',
      title: 'Collaborative',
      description: 'We believe in the power of teamwork and open communication'
    },
    {
      icon: '💡',
      title: 'Innovative',
      description: 'We encourage creative thinking and experimentation'
    },
    {
      icon: '🎯',
      title: 'Results-Driven',
      description: 'We focus on delivering value and measurable outcomes'
    },
    {
      icon: '🌱',
      title: 'Growth-Minded',
      description: 'We invest in our people and their professional development'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-r from-blue-600 to-indigo-700 text-white py-20">
        <div className="absolute inset-0 bg-black opacity-20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Join Our Team
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-blue-100 max-w-3xl mx-auto">
              Build the future of AI with us. We're looking for passionate individuals who want to make a difference.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="#open-positions"
                className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors"
              >
                View Open Positions
              </a>
              <a 
                href="mailto:careers@ziontechgroup.com"
                className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors"
              >
                Send Your Resume
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Why Work With Us */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Why Work at Zion Tech Group?
            </h2>
            <p className="text-xl text-gray-600">
              We're building the future of AI, and we want you to be part of it
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="text-center p-6">
                <div className="text-4xl mb-4">{benefit.icon}</div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{benefit.title}</h3>
                <p className="text-gray-600">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Culture */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Culture
            </h2>
            <p className="text-xl text-gray-600">
              We foster an environment where innovation thrives
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {culture.map((value, index) => (
              <div key={index} className="text-center p-6">
                <div className="text-4xl mb-4">{value.icon}</div>
                <h3 className="text-lg font-semibold text-gray-900 mb-3">{value.title}</h3>
                <p className="text-gray-600 text-sm">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Open Positions */}
      <section id="open-positions" className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Open Positions
            </h2>
            <p className="text-xl text-gray-600">
              Find your next opportunity with us
            </p>
          </div>
          <div className="space-y-8">
            {openPositions.map((position, index) => (
              <div key={index} className={`bg-white rounded-lg shadow-lg p-6 border-l-4 ${position.urgent ? 'border-red-500' : 'border-blue-500'}`}>
                <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-4">
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-2">
                      <h3 className="text-xl font-semibold text-gray-900">{position.title}</h3>
                      {position.urgent && (
                        <span className="bg-red-100 text-red-800 px-2 py-1 rounded-full text-sm font-medium">
                          Urgent
                        </span>
                      )}
                    </div>
                    <div className="flex flex-wrap gap-4 text-sm text-gray-600 mb-3">
                      <span className="flex items-center">
                        <Briefcase className="w-4 h-4 mr-1" />
                        {position.department}
                      </span>
                      <span className="flex items-center">
                        <MapPin className="w-4 h-4 mr-1" />
                        {position.location}
                      </span>
                      <span className="flex items-center">
                        <Clock className="w-4 h-4 mr-1" />
                        {position.type}
                      </span>
                      <span className="flex items-center">
                        <Users className="w-4 h-4 mr-1" />
                        {position.experience}
                      </span>
                    </div>
                    <p className="text-gray-600 mb-4">{position.description}</p>
                    <div className="text-lg font-semibold text-blue-600 mb-4">{position.salary}</div>
                  </div>
                  <div className="lg:ml-6">
                    <a 
                      href={`mailto:careers@ziontechgroup.com?subject=Application for ${position.title}`}
                      className="bg-blue-600 text-white px-6 py-2 rounded-lg font-semibold hover:bg-blue-700 transition-colors inline-flex items-center"
                    >
                      Apply Now
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </a>
                  </div>
                </div>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-3">Requirements:</h4>
                    <ul className="space-y-2">
                      {position.requirements.map((req, reqIndex) => (
                        <li key={reqIndex} className="flex items-start text-sm text-gray-600">
                          <CheckCircle className="w-4 h-4 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                          {req}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-3">Benefits:</h4>
                    <ul className="space-y-2">
                      {position.benefits.map((benefit, benefitIndex) => (
                        <li key={benefitIndex} className="flex items-start text-sm text-gray-600">
                          <Star className="w-4 h-4 text-yellow-500 mr-2 flex-shrink-0 mt-0.5" />
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

      {/* Contact Section */}
      <section className="py-16 bg-gradient-to-r from-blue-600 to-indigo-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Don't See Your Dream Job?
          </h2>
          <p className="text-xl mb-8 text-blue-100">
            We're always looking for talented individuals. Send us your resume and let's talk!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="mailto:careers@ziontechgroup.com"
              className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors inline-flex items-center"
            >
              📧 careers@ziontechgroup.com
            </a>
            <a 
              href="tel:+13024640950"
              className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors"
            >
              📞 +1 302 464 0950
            </a>
          </div>
          <div className="mt-8 text-sm text-blue-200">
            <p>📍 364 E Main St STE 1008, Middletown DE 19709</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CareersPage;
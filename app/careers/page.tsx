import React from 'react';
import { MapPin, Clock, Users, Briefcase, CheckCircle, ArrowRight } from 'lucide-react';

const CareersPage: React.FC = () => {
  const openPositions = [
    {
      title: 'Senior AI Engineer',
      department: 'Engineering',
      location: 'Remote / Middletown, DE',
      type: 'Full-time',
      experience: '5+ years',
      description: 'Lead development of cutting-edge AI solutions and machine learning models for enterprise clients.',
      requirements: [
        'Master\'s degree in Computer Science, AI, or related field',
        '5+ years experience with Python, TensorFlow, PyTorch',
        'Experience with cloud platforms (AWS, Azure, GCP)',
        'Strong background in machine learning and deep learning',
        'Experience with MLOps and model deployment'
      ],
      benefits: [
        'Competitive salary ($120k - $180k)',
        'Health, dental, and vision insurance',
        '401k with company matching',
        'Flexible work arrangements',
        'Professional development budget'
      ]
    },
    {
      title: 'AI Solutions Architect',
      department: 'Solutions',
      location: 'Remote / Middletown, DE',
      type: 'Full-time',
      experience: '7+ years',
      description: 'Design and implement comprehensive AI solutions for enterprise clients across various industries.',
      requirements: [
        'Bachelor\'s degree in Computer Science or related field',
        '7+ years experience in solution architecture',
        'Strong knowledge of AI/ML technologies',
        'Experience with enterprise software integration',
        'Excellent communication and client-facing skills'
      ],
      benefits: [
        'Competitive salary ($130k - $200k)',
        'Performance bonuses',
        'Stock options',
        'Comprehensive health coverage',
        'Remote work flexibility'
      ]
    },
    {
      title: 'DevOps Engineer',
      department: 'Engineering',
      location: 'Remote / Middletown, DE',
      type: 'Full-time',
      experience: '3+ years',
      description: 'Manage cloud infrastructure, CI/CD pipelines, and deployment automation for AI systems.',
      requirements: [
        'Bachelor\'s degree in Computer Science or related field',
        '3+ years experience with DevOps practices',
        'Experience with Docker, Kubernetes, and cloud platforms',
        'Knowledge of infrastructure as code (Terraform, CloudFormation)',
        'Experience with monitoring and logging tools'
      ],
      benefits: [
        'Competitive salary ($90k - $140k)',
        'Health and dental insurance',
        '401k with company matching',
        'Flexible PTO',
        'Learning and development opportunities'
      ]
    },
    {
      title: 'AI Research Scientist',
      department: 'Research',
      location: 'Remote / Middletown, DE',
      type: 'Full-time',
      experience: 'PhD + 2 years',
      description: 'Conduct cutting-edge research in AI, machine learning, and quantum computing applications.',
      requirements: [
        'PhD in Computer Science, AI, or related field',
        '2+ years post-PhD research experience',
        'Strong publication record in top-tier conferences',
        'Experience with quantum computing frameworks',
        'Proficiency in Python, R, and scientific computing'
      ],
      benefits: [
        'Competitive salary ($140k - $220k)',
        'Research budget and conference attendance',
        'Collaboration with top universities',
        'Patent filing support',
        'Comprehensive benefits package'
      ]
    }
  ];

  const companyBenefits = [
    {
      icon: '🏥',
      title: 'Health & Wellness',
      description: 'Comprehensive health, dental, and vision insurance for you and your family'
    },
    {
      icon: '💰',
      title: 'Financial Security',
      description: '401k with company matching, stock options, and competitive salaries'
    },
    {
      icon: '🏠',
      title: 'Work-Life Balance',
      description: 'Flexible work arrangements, unlimited PTO, and remote work options'
    },
    {
      icon: '📚',
      title: 'Learning & Growth',
      description: 'Professional development budget, conference attendance, and training programs'
    },
    {
      icon: '🚀',
      title: 'Innovation',
      description: 'Work on cutting-edge AI projects and shape the future of technology'
    },
    {
      icon: '👥',
      title: 'Great Team',
      description: 'Collaborate with talented, passionate professionals in a supportive environment'
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
              Build the future of AI and technology with us. We're looking for passionate, innovative minds to join our mission.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="#open-positions"
                className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors"
              >
                View Open Positions
              </a>
              <a 
                href="/contact"
                className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors"
              >
                Contact Us
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
              We're building the future of AI and technology, and we want you to be part of it
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {companyBenefits.map((benefit, index) => (
              <div key={index} className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow">
                <div className="text-4xl mb-4">{benefit.icon}</div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{benefit.title}</h3>
                <p className="text-gray-600">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Open Positions */}
      <section id="open-positions" className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Open Positions
            </h2>
            <p className="text-xl text-gray-600">
              Join our team and help shape the future of AI and technology
            </p>
          </div>
          <div className="space-y-8">
            {openPositions.map((position, index) => (
              <div key={index} className="bg-white rounded-lg shadow-lg p-8 hover:shadow-xl transition-shadow">
                <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between mb-6">
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">{position.title}</h3>
                    <div className="flex flex-wrap gap-4 text-sm text-gray-600 mb-4">
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
                    <p className="text-gray-600 mb-6">{position.description}</p>
                  </div>
                  <div className="lg:ml-6">
                    <a 
                      href={`mailto:careers@ziontechgroup.com?subject=Application for ${position.title}`}
                      className="bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors inline-flex items-center"
                    >
                      Apply Now
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </a>
                  </div>
                </div>
                
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                  <div>
                    <h4 className="text-lg font-semibold text-gray-900 mb-4">Requirements</h4>
                    <ul className="space-y-2">
                      {position.requirements.map((req, reqIndex) => (
                        <li key={reqIndex} className="flex items-start">
                          <CheckCircle className="w-4 h-4 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                          <span className="text-sm text-gray-600">{req}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-gray-900 mb-4">Benefits</h4>
                    <ul className="space-y-2">
                      {position.benefits.map((benefit, benefitIndex) => (
                        <li key={benefitIndex} className="flex items-start">
                          <CheckCircle className="w-4 h-4 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                          <span className="text-sm text-gray-600">{benefit}</span>
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

      {/* Culture & Values */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Culture & Values
            </h2>
            <p className="text-xl text-gray-600">
              The principles that guide everything we do
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🚀</span>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Innovation</h3>
              <p className="text-gray-600 text-sm">We push boundaries and embrace cutting-edge technology</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🤝</span>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Collaboration</h3>
              <p className="text-gray-600 text-sm">We work together to achieve extraordinary results</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🎯</span>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Excellence</h3>
              <p className="text-gray-600 text-sm">We strive for the highest quality in everything we do</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">💡</span>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Learning</h3>
              <p className="text-gray-600 text-sm">We continuously learn and grow together</p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 bg-gradient-to-r from-blue-600 to-indigo-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Don't See the Right Role?
          </h2>
          <p className="text-xl mb-8 text-blue-100">
            We're always looking for talented individuals. Send us your resume and let us know how you'd like to contribute.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="mailto:careers@ziontechgroup.com"
              className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors"
            >
              Send Your Resume
            </a>
            <a 
              href="/contact"
              className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors"
            >
              Get in Touch
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CareersPage;
import React from 'react';
import Link from 'next/link';
import { ArrowRight, MapPin, Clock, Users, Award, CheckCircle } from 'lucide-react';

const CareersPage: React.FC = () => {
  const openPositions = [
    {
      id: 1,
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
        '401(k) with company matching',
        'Flexible work arrangements',
        'Professional development budget'
      ]
    },
    {
      id: 2,
      title: 'AI Solutions Architect',
      department: 'Solutions',
      location: 'Remote / Middletown, DE',
      type: 'Full-time',
      experience: '7+ years',
      description: 'Design and architect AI solutions for enterprise clients, ensuring scalability and performance.',
      requirements: [
        'Bachelor\'s degree in Computer Science or related field',
        '7+ years experience in solution architecture',
        'Strong knowledge of AI/ML technologies',
        'Experience with enterprise software integration',
        'Excellent communication and presentation skills'
      ],
      benefits: [
        'Competitive salary ($140k - $200k)',
        'Health, dental, and vision insurance',
        '401(k) with company matching',
        'Stock options',
        'Unlimited PTO'
      ]
    },
    {
      id: 3,
      title: 'DevOps Engineer',
      department: 'Engineering',
      location: 'Remote / Middletown, DE',
      type: 'Full-time',
      experience: '3+ years',
      description: 'Manage and optimize our cloud infrastructure and deployment pipelines for AI applications.',
      requirements: [
        'Bachelor\'s degree in Computer Science or related field',
        '3+ years experience with DevOps practices',
        'Experience with Kubernetes, Docker, and CI/CD',
        'Knowledge of cloud platforms (AWS, Azure, GCP)',
        'Experience with monitoring and logging tools'
      ],
      benefits: [
        'Competitive salary ($90k - $130k)',
        'Health, dental, and vision insurance',
        '401(k) with company matching',
        'Flexible work arrangements',
        'Learning and development opportunities'
      ]
    },
    {
      id: 4,
      title: 'AI Product Manager',
      department: 'Product',
      location: 'Remote / Middletown, DE',
      type: 'Full-time',
      experience: '4+ years',
      description: 'Lead product strategy and development for our AI-powered solutions and micro SAAS products.',
      requirements: [
        'Bachelor\'s degree in Business, Engineering, or related field',
        '4+ years experience in product management',
        'Experience with AI/ML products preferred',
        'Strong analytical and problem-solving skills',
        'Experience with agile development methodologies'
      ],
      benefits: [
        'Competitive salary ($100k - $150k)',
        'Health, dental, and vision insurance',
        '401(k) with company matching',
        'Stock options',
        'Professional development budget'
      ]
    },
    {
      id: 5,
      title: 'AI Research Scientist',
      department: 'Research',
      location: 'Remote / Middletown, DE',
      type: 'Full-time',
      experience: 'PhD + 2 years',
      description: 'Conduct cutting-edge research in AI, machine learning, and quantum computing applications.',
      requirements: [
        'PhD in Computer Science, AI, or related field',
        '2+ years post-doctoral research experience',
        'Strong publication record in top-tier conferences',
        'Experience with quantum computing preferred',
        'Excellent programming skills in Python, C++'
      ],
      benefits: [
        'Competitive salary ($130k - $200k)',
        'Health, dental, and vision insurance',
        '401(k) with company matching',
        'Research budget and conference attendance',
        'Flexible work arrangements'
      ]
    },
    {
      id: 6,
      title: 'Customer Success Manager',
      department: 'Customer Success',
      location: 'Remote / Middletown, DE',
      type: 'Full-time',
      experience: '3+ years',
      description: 'Ensure customer satisfaction and success with our AI solutions and services.',
      requirements: [
        'Bachelor\'s degree in Business or related field',
        '3+ years experience in customer success or account management',
        'Experience with enterprise software preferred',
        'Excellent communication and relationship-building skills',
        'Technical aptitude and ability to understand AI solutions'
      ],
      benefits: [
        'Competitive salary ($70k - $100k)',
        'Health, dental, and vision insurance',
        '401(k) with company matching',
        'Performance bonuses',
        'Career growth opportunities'
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
      description: '401(k) with company matching, stock options, and competitive salaries'
    },
    {
      icon: '🏠',
      title: 'Work-Life Balance',
      description: 'Flexible work arrangements, unlimited PTO, and remote work options'
    },
    {
      icon: '📚',
      title: 'Learning & Growth',
      description: 'Professional development budget, conference attendance, and learning opportunities'
    },
    {
      icon: '🚀',
      title: 'Innovation',
      description: 'Work on cutting-edge AI technology and shape the future of enterprise solutions'
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
              Build the future of AI and technology with us
            </p>
            <p className="text-lg mb-8 text-gray-300 max-w-4xl mx-auto">
              We're looking for passionate, talented individuals who want to make a real impact 
              in the world of artificial intelligence and enterprise technology.
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
                Get in Touch
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
              We offer more than just a job - we offer a career with purpose
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {companyBenefits.map((benefit, index) => (
              <div key={index} className="text-center p-6">
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
              Find your next career opportunity with us
            </p>
          </div>
          <div className="space-y-8">
            {openPositions.map((position) => (
              <div key={position.id} className="bg-white rounded-lg shadow-lg p-8 hover:shadow-xl transition-shadow">
                <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-6">
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">{position.title}</h3>
                    <div className="flex flex-wrap items-center gap-4 text-sm text-gray-600 mb-4">
                      <div className="flex items-center">
                        <MapPin className="w-4 h-4 mr-1" />
                        {position.location}
                      </div>
                      <div className="flex items-center">
                        <Clock className="w-4 h-4 mr-1" />
                        {position.type}
                      </div>
                      <div className="flex items-center">
                        <Users className="w-4 h-4 mr-1" />
                        {position.experience}
                      </div>
                      <div className="flex items-center">
                        <Award className="w-4 h-4 mr-1" />
                        {position.department}
                      </div>
                    </div>
                  </div>
                  <Link 
                    href="/contact"
                    className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-6 rounded-lg transition-colors inline-flex items-center"
                  >
                    Apply Now
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Link>
                </div>
                
                <p className="text-gray-600 mb-6">{position.description}</p>
                
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                  <div>
                    <h4 className="text-lg font-semibold text-gray-900 mb-3">Requirements</h4>
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
                    <h4 className="text-lg font-semibold text-gray-900 mb-3">Benefits</h4>
                    <ul className="space-y-2">
                      {position.benefits.map((benefit, benefitIndex) => (
                        <li key={benefitIndex} className="flex items-start text-sm text-gray-600">
                          <CheckCircle className="w-4 h-4 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
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

      {/* Culture Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Culture
            </h2>
            <p className="text-xl text-gray-600">
              We believe in fostering an environment where innovation thrives
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-4xl font-bold text-blue-600 mb-2">50+</div>
              <div className="text-gray-600">Team Members</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-green-600 mb-2">15+</div>
              <div className="text-gray-600">Countries</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-purple-600 mb-2">95%</div>
              <div className="text-gray-600">Employee Satisfaction</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-orange-600 mb-2">4.8/5</div>
              <div className="text-gray-600">Glassdoor Rating</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Don't See the Right Role?
          </h2>
          <p className="text-xl mb-8 text-blue-100">
            We're always looking for talented individuals. Send us your resume and let's talk!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="mailto:careers@ziontechgroup.com"
              className="bg-white text-blue-600 hover:bg-gray-100 font-semibold py-3 px-8 rounded-lg transition-colors"
            >
              Send Your Resume
            </a>
            <a 
              href="/contact"
              className="border-2 border-white text-white hover:bg-white hover:text-blue-600 font-semibold py-3 px-8 rounded-lg transition-colors"
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
import React from 'react';
import { Helmet } from 'react-helmet-async';
import { MapPin, Clock, Users, ArrowRight, Heart, Zap, Brain, Code, Shield } from 'lucide-react';

const CareersPage: React.FC = () => {
  const openPositions = [
    {
      title: 'Senior AI Engineer',
      department: 'AI Research',
      location: 'Remote / Middletown, DE',
      type: 'Full-time',
      experience: '5+ years',
      description: 'Lead the development of cutting-edge AI models and algorithms for enterprise applications.',
      requirements: [
        'PhD in Computer Science, AI, or related field',
        '5+ years experience with machine learning frameworks',
        'Strong background in deep learning and NLP',
        'Experience with cloud platforms (AWS, Azure, GCP)',
        'Leadership and mentoring experience'
      ],
      benefits: [
        'Competitive salary ($120k - $180k)',
        'Equity participation',
        'Health, dental, and vision insurance',
        'Flexible work arrangements',
        'Professional development budget'
      ]
    },
    {
      title: 'Full Stack Developer',
      department: 'Engineering',
      location: 'Remote / Middletown, DE',
      type: 'Full-time',
      experience: '3+ years',
      description: 'Build scalable web applications and APIs for our AI and micro SAAS platforms.',
      requirements: [
        '3+ years experience with React, Node.js, and TypeScript',
        'Experience with cloud services and DevOps',
        'Knowledge of database design and optimization',
        'Experience with AI/ML integration',
        'Strong problem-solving skills'
      ],
      benefits: [
        'Competitive salary ($80k - $120k)',
        'Health and dental insurance',
        '401k with company matching',
        'Remote work flexibility',
        'Learning and development opportunities'
      ]
    },
    {
      title: 'AI Product Manager',
      department: 'Product',
      location: 'Remote / Middletown, DE',
      type: 'Full-time',
      experience: '4+ years',
      description: 'Drive product strategy and roadmap for our AI services and micro SAAS tools.',
      requirements: [
        '4+ years product management experience',
        'Experience with AI/ML products',
        'Strong analytical and communication skills',
        'Experience with agile development',
        'Technical background preferred'
      ],
      benefits: [
        'Competitive salary ($100k - $140k)',
        'Equity participation',
        'Comprehensive health benefits',
        'Flexible PTO policy',
        'Professional development budget'
      ]
    },
    {
      title: 'DevOps Engineer',
      department: 'Infrastructure',
      location: 'Remote / Middletown, DE',
      type: 'Full-time',
      experience: '3+ years',
      description: 'Manage and scale our cloud infrastructure to support AI workloads and micro services.',
      requirements: [
        '3+ years DevOps experience',
        'Expertise with AWS, Azure, or GCP',
        'Experience with Kubernetes and Docker',
        'Knowledge of CI/CD pipelines',
        'Experience with monitoring and alerting'
      ],
      benefits: [
        'Competitive salary ($90k - $130k)',
        'Health and dental insurance',
        '401k with company matching',
        'Remote work flexibility',
        'Certification reimbursement'
      ]
    },
    {
      title: 'AI Research Intern',
      department: 'AI Research',
      location: 'Remote / Middletown, DE',
      type: 'Internship',
      experience: 'Graduate Student',
      description: 'Work on cutting-edge AI research projects and contribute to our AI platform development.',
      requirements: [
        'Graduate student in AI, ML, or related field',
        'Strong programming skills in Python',
        'Experience with ML frameworks (TensorFlow, PyTorch)',
        'Research experience preferred',
        'Passion for AI and innovation'
      ],
      benefits: [
        'Stipend ($3k - $5k/month)',
        'Mentorship from senior researchers',
        'Research publication opportunities',
        'Flexible schedule',
        'Potential for full-time conversion'
      ]
    }
  ];

  const companyValues = [
    {
      title: 'Innovation First',
      description: 'We push the boundaries of what\'s possible with AI and technology',
      icon: Brain
    },
    {
      title: 'Collaborative Culture',
      description: 'We believe in the power of teamwork and diverse perspectives',
      icon: Users
    },
    {
      title: 'Continuous Learning',
      description: 'We invest in our team\'s growth and development',
      icon: Zap
    },
    {
      title: 'Impact Driven',
      description: 'We build solutions that make a real difference in the world',
      icon: Heart
    }
  ];

  const benefits = [
    {
      category: 'Health & Wellness',
      items: [
        'Comprehensive health, dental, and vision insurance',
        'Mental health support and counseling',
        'Gym membership reimbursement',
        'Flexible work arrangements',
        'Unlimited PTO policy'
      ]
    },
    {
      category: 'Professional Development',
      items: [
        'Learning and development budget ($2,000/year)',
        'Conference attendance and training',
        'Certification reimbursement',
        'Mentorship programs',
        'Internal knowledge sharing sessions'
      ]
    },
    {
      category: 'Work Environment',
      items: [
        'Remote-first culture',
        'Modern office spaces',
        'Top-of-the-line equipment',
        'Flexible working hours',
        'Team building events'
      ]
    },
    {
      category: 'Financial Benefits',
      items: [
        'Competitive salaries',
        'Equity participation',
        '401k with company matching',
        'Performance bonuses',
        'Stock option program'
      ]
    }
  ];

  return (
    <>
      <Helmet>
        <title>Careers - Zion Tech Group</title>
        <meta name="description" content="Join Zion Tech Group and help shape the future of AI and IT solutions. Explore open positions, learn about our culture, and discover why we're a great place to work." />
        <meta name="keywords" content="careers, jobs, AI engineer, software developer, product manager, remote work, tech jobs" />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
        {/* Hero Section */}
        <section className="py-20 bg-gradient-to-r from-blue-900 via-purple-900 to-indigo-900 text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h1 className="text-4xl md:text-6xl font-bold mb-6">
                Join Our Team
              </h1>
              <p className="text-xl md:text-2xl mb-8 text-gray-200 max-w-3xl mx-auto">
                Help us build the future of AI and IT solutions
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
                  View Open Positions
                </button>
                <button className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors">
                  Learn About Our Culture
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* Company Values */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">Our Values</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {companyValues.map((value, index) => (
                <div key={index} className="text-center">
                  <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                    <value.icon className="w-8 h-8 text-blue-600" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">{value.title}</h3>
                  <p className="text-gray-600">{value.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Open Positions */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">Open Positions</h2>
            <div className="space-y-8">
              {openPositions.map((position, index) => (
                <div key={index} className="bg-white rounded-lg shadow-lg p-8 hover:shadow-xl transition-shadow">
                  <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-6">
                    <div>
                      <h3 className="text-2xl font-bold text-gray-900 mb-2">{position.title}</h3>
                      <div className="flex flex-wrap items-center gap-4 text-sm text-gray-600">
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
                    </div>
                    <button className="mt-4 lg:mt-0 bg-blue-600 text-white px-6 py-2 rounded-lg font-semibold hover:bg-blue-700 transition-colors">
                      Apply Now
                    </button>
                  </div>
                  
                  <p className="text-gray-600 mb-6">{position.description}</p>
                  
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                    <div>
                      <h4 className="text-lg font-semibold text-gray-900 mb-4">Requirements</h4>
                      <ul className="space-y-2">
                        {position.requirements.map((req, reqIndex) => (
                          <li key={reqIndex} className="flex items-start text-sm text-gray-600">
                            <span className="w-2 h-2 bg-blue-500 rounded-full mr-3 mt-2 flex-shrink-0"></span>
                            {req}
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold text-gray-900 mb-4">Benefits</h4>
                      <ul className="space-y-2">
                        {position.benefits.map((benefit, benefitIndex) => (
                          <li key={benefitIndex} className="flex items-start text-sm text-gray-600">
                            <span className="w-2 h-2 bg-green-500 rounded-full mr-3 mt-2 flex-shrink-0"></span>
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

        {/* Benefits */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">Benefits & Perks</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {benefits.map((category, index) => (
                <div key={index} className="bg-gray-50 rounded-lg p-6">
                  <h3 className="text-lg font-semibold text-gray-900 mb-4">{category.category}</h3>
                  <ul className="space-y-2">
                    {category.items.map((item, itemIndex) => (
                      <li key={itemIndex} className="flex items-start text-sm text-gray-600">
                        <span className="w-2 h-2 bg-blue-500 rounded-full mr-3 mt-2 flex-shrink-0"></span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Culture Section */}
        <section className="py-16 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Our Culture</h2>
              <p className="text-xl text-blue-100 max-w-3xl mx-auto">
                We're a diverse team of innovators, problem-solvers, and dreamers who are passionate about using technology to make a positive impact.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="text-4xl mb-4">🌍</div>
                <h3 className="text-xl font-semibold mb-2">Remote-First</h3>
                <p className="text-blue-100">Work from anywhere in the world with flexible hours and modern tools</p>
              </div>
              <div className="text-center">
                <div className="text-4xl mb-4">🚀</div>
                <h3 className="text-xl font-semibold mb-2">Innovation</h3>
                <p className="text-blue-100">We encourage experimentation and reward bold ideas that push boundaries</p>
              </div>
              <div className="text-center">
                <div className="text-4xl mb-4">🤝</div>
                <h3 className="text-xl font-semibold mb-2">Collaboration</h3>
                <p className="text-blue-100">We believe the best solutions come from diverse teams working together</p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Ready to Join Us?</h2>
            <p className="text-xl text-gray-600 mb-8">
              Don't see a position that fits? We're always looking for talented individuals who share our vision.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="mailto:careers@ziontechgroup.com"
                className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors inline-flex items-center"
              >
                Send Us Your Resume
                <ArrowRight className="w-4 h-4 ml-2" />
              </a>
              <a
                href="/contact"
                className="border-2 border-blue-600 text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-blue-600 hover:text-white transition-colors"
              >
                Get in Touch
              </a>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default CareersPage;
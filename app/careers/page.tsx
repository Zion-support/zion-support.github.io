import React from 'react';
import { MapPin, Clock, Users, Award, Check, ArrowRight } from 'lucide-react';
import EnhancedSEO from '../components/EnhancedSEO';
import FuturisticButton from '../components/FuturisticButton';

const CareersPage = () => {
  const openPositions = [
    {
      title: 'Senior AI Engineer',
      department: 'Engineering',
      location: 'Remote / New York',
      type: 'Full-time',
      experience: '5+ years',
      description: 'Lead the development of cutting-edge AI solutions and machine learning models.',
      requirements: [
        'Master\'s degree in Computer Science or related field',
        '5+ years experience in AI/ML development',
        'Expertise in Python, TensorFlow, PyTorch',
        'Experience with cloud platforms (AWS, GCP, Azure)',
        'Strong problem-solving and communication skills'
      ],
      benefits: ['Competitive salary', 'Health insurance', '401k matching', 'Flexible PTO', 'Learning budget']
    },
    {
      title: 'Frontend Developer',
      department: 'Engineering',
      location: 'Remote / San Francisco',
      type: 'Full-time',
      experience: '3+ years',
      description: 'Build beautiful, responsive user interfaces for our AI-powered applications.',
      requirements: [
        'Bachelor\'s degree in Computer Science or related field',
        '3+ years experience in React, TypeScript',
        'Experience with modern CSS frameworks',
        'Knowledge of web performance optimization',
        'Experience with testing frameworks'
      ],
      benefits: ['Competitive salary', 'Health insurance', '401k matching', 'Flexible PTO', 'Learning budget']
    },
    {
      title: 'Product Manager',
      department: 'Product',
      location: 'Remote / Austin',
      type: 'Full-time',
      experience: '4+ years',
      description: 'Drive product strategy and roadmap for our AI solutions portfolio.',
      requirements: [
        'Bachelor\'s degree in Business, Engineering, or related field',
        '4+ years product management experience',
        'Experience with AI/ML products preferred',
        'Strong analytical and communication skills',
        'Experience with agile development methodologies'
      ],
      benefits: ['Competitive salary', 'Health insurance', '401k matching', 'Flexible PTO', 'Learning budget']
    },
    {
      title: 'DevOps Engineer',
      department: 'Engineering',
      location: 'Remote / Seattle',
      type: 'Full-time',
      experience: '4+ years',
      description: 'Design and maintain our cloud infrastructure and deployment pipelines.',
      requirements: [
        'Bachelor\'s degree in Computer Science or related field',
        '4+ years DevOps experience',
        'Expertise in AWS, Docker, Kubernetes',
        'Experience with CI/CD pipelines',
        'Knowledge of infrastructure as code'
      ],
      benefits: ['Competitive salary', 'Health insurance', '401k matching', 'Flexible PTO', 'Learning budget']
    }
  ];

  const benefits = [
    {
      title: 'Health & Wellness',
      description: 'Comprehensive health, dental, and vision insurance for you and your family.',
      icon: <Award className="w-8 h-8" />
    },
    {
      title: 'Flexible Work',
      description: 'Work from anywhere with flexible hours and unlimited PTO.',
      icon: <Clock className="w-8 h-8" />
    },
    {
      title: 'Learning & Growth',
      description: 'Annual learning budget and conference attendance opportunities.',
      icon: <Users className="w-8 h-8" />
    },
    {
      title: 'Equity & Retirement',
      description: 'Stock options and 401k matching to help you build wealth.',
      icon: <Award className="w-8 h-8" />
    }
  ];

  const culture = [
    'Innovation-driven environment',
    'Diverse and inclusive team',
    'Work-life balance',
    'Continuous learning opportunities',
    'Cutting-edge technology stack',
    'Collaborative team culture',
    'Impact on real-world problems',
    'Career growth opportunities'
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <EnhancedSEO
        title="Careers - Zion Tech Group | Join Our Team"
        description="Join Zion Tech Group and help shape the future of AI and technology. Explore open positions and be part of our innovative team."
        keywords="careers, jobs, AI jobs, tech jobs, engineering jobs, remote work, company culture"
        canonical="https://ziontechgroup.com/careers"
      />

      {/* Hero Section */}
      <section className="pt-20 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400">
              Join Our Team
            </span>
          </h1>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Help us build the future of AI and technology. We're looking for passionate individuals who want to make a real impact.
          </p>
          <FuturisticButton
            variant="primary"
            size="lg"
            to="#positions"
          >
            View Open Positions
          </FuturisticButton>
        </div>
      </section>

      {/* Why Join Us */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Why Join Zion Tech Group?
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              We offer more than just a job - we offer a career where you can grow, learn, and make a real difference.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <div
                key={index}
                className="text-center group"
              >
                <div className="w-16 h-16 mx-auto mb-6 rounded-lg bg-gradient-to-r from-cyan-500 to-purple-600 flex items-center justify-center text-white group-hover:scale-110 transition-transform duration-300">
                  {benefit.icon}
                </div>
                <h3 className="text-xl font-semibold text-white mb-4">{benefit.title}</h3>
                <p className="text-gray-300 leading-relaxed">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Company Culture */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-slate-800/50 to-purple-800/50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Our Culture
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              We believe in creating an environment where everyone can thrive and do their best work.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {culture.map((item, index) => (
              <div
                key={index}
                className="flex items-center space-x-3 bg-white/10 backdrop-blur-sm rounded-lg p-4 border border-white/20"
              >
                <Check className="w-5 h-5 text-green-400 flex-shrink-0" />
                <span className="text-gray-300">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Open Positions */}
      <section id="positions" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Open Positions
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Find the perfect role for your skills and career goals.
            </p>
          </div>

          <div className="space-y-8">
            {openPositions.map((position, index) => (
              <div
                key={index}
                className="bg-white/10 backdrop-blur-sm rounded-xl p-8 border border-white/20 hover:bg-white/20 transition-all duration-300"
              >
                <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-6">
                  <div>
                    <h3 className="text-2xl font-bold text-white mb-2">{position.title}</h3>
                    <div className="flex flex-wrap items-center gap-4 text-sm text-gray-300 mb-4">
                      <div className="flex items-center">
                        <MapPin className="w-4 h-4 mr-2" />
                        {position.location}
                      </div>
                      <div className="flex items-center">
                        <Clock className="w-4 h-4 mr-2" />
                        {position.type}
                      </div>
                      <div className="flex items-center">
                        <Users className="w-4 h-4 mr-2" />
                        {position.experience}
                      </div>
                    </div>
                    <p className="text-gray-300 mb-4">{position.description}</p>
                  </div>
                  <FuturisticButton
                    variant="primary"
                    size="md"
                    to="/contact"
                    className="lg:ml-6"
                  >
                    Apply Now
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </FuturisticButton>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                  <div>
                    <h4 className="text-lg font-semibold text-white mb-4">Requirements</h4>
                    <ul className="space-y-2">
                      {position.requirements.map((req, reqIndex) => (
                        <li key={reqIndex} className="flex items-start">
                          <Check className="w-4 h-4 text-green-400 mr-2 mt-1 flex-shrink-0" />
                          <span className="text-gray-300 text-sm">{req}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-white mb-4">Benefits</h4>
                    <ul className="space-y-2">
                      {position.benefits.map((benefit, benefitIndex) => (
                        <li key={benefitIndex} className="flex items-start">
                          <Check className="w-4 h-4 text-green-400 mr-2 mt-1 flex-shrink-0" />
                          <span className="text-gray-300 text-sm">{benefit}</span>
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

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-cyan-900/30 to-purple-900/30">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Don't See Your Perfect Role?
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            We're always looking for talented individuals. Send us your resume and let us know how you'd like to contribute.
          </p>
          <FuturisticButton
            variant="primary"
            size="lg"
            to="/contact"
          >
            Send Us Your Resume
          </FuturisticButton>
        </div>
      </section>
    </div>
  );
};

export default CareersPage;
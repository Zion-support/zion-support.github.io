import React from 'react';
import { Helmet } from 'react-helmet-async';
import { MapPin, Clock, Users, Briefcase, Star, ArrowRight, CheckCircle, Heart, Zap, Globe } from 'lucide-react';

const CareersPage: React.FC = () => {
  const openPositions = [
    {
      id: 1,
      title: 'Senior AI Engineer',
      department: 'Engineering',
      location: 'Remote / Middletown, DE',
      type: 'Full-time',
      experience: '5+ years',
      description: 'Lead the development of cutting-edge AI solutions and machine learning models.',
      requirements: [
        'Master\'s degree in Computer Science or related field',
        '5+ years experience in AI/ML development',
        'Expertise in Python, TensorFlow, PyTorch',
        'Experience with cloud platforms (AWS, Azure, GCP)',
        'Strong problem-solving and communication skills'
      ],
      benefits: [
        'Competitive salary ($120k-$180k)',
        'Equity participation',
        'Health, dental, vision insurance',
        'Flexible work arrangements',
        'Professional development budget'
      ],
      posted: '2024-12-15',
      applicants: 24
    },
    {
      id: 2,
      title: 'AI Product Manager',
      department: 'Product',
      location: 'Remote / Middletown, DE',
      type: 'Full-time',
      experience: '3+ years',
      description: 'Drive product strategy and roadmap for our AI services platform.',
      requirements: [
        'Bachelor\'s degree in Business, Engineering, or related field',
        '3+ years product management experience',
        'Experience with AI/ML products',
        'Strong analytical and strategic thinking',
        'Excellent communication and leadership skills'
      ],
      benefits: [
        'Competitive salary ($100k-$150k)',
        'Equity participation',
        'Health, dental, vision insurance',
        'Flexible work arrangements',
        'Professional development budget'
      ],
      posted: '2024-12-12',
      applicants: 18
    },
    {
      id: 3,
      title: 'DevOps Engineer',
      department: 'Engineering',
      location: 'Remote / Middletown, DE',
      type: 'Full-time',
      experience: '4+ years',
      description: 'Build and maintain scalable infrastructure for our AI services.',
      requirements: [
        'Bachelor\'s degree in Computer Science or related field',
        '4+ years DevOps experience',
        'Expertise in Kubernetes, Docker, AWS',
        'Experience with CI/CD pipelines',
        'Knowledge of monitoring and logging tools'
      ],
      benefits: [
        'Competitive salary ($110k-$160k)',
        'Equity participation',
        'Health, dental, vision insurance',
        'Flexible work arrangements',
        'Professional development budget'
      ],
      posted: '2024-12-10',
      applicants: 15
    },
    {
      id: 4,
      title: 'AI Research Scientist',
      department: 'Research',
      location: 'Remote / Middletown, DE',
      type: 'Full-time',
      experience: 'PhD + 2 years',
      description: 'Conduct cutting-edge research in artificial intelligence and machine learning.',
      requirements: [
        'PhD in Computer Science, AI, or related field',
        '2+ years research experience',
        'Strong publication record',
        'Expertise in deep learning, NLP, or computer vision',
        'Experience with large-scale AI systems'
      ],
      benefits: [
        'Competitive salary ($130k-$200k)',
        'Equity participation',
        'Health, dental, vision insurance',
        'Research budget and conference attendance',
        'Flexible work arrangements'
      ],
      posted: '2024-12-08',
      applicants: 12
    }
  ];

  const companyValues = [
    {
      title: 'Innovation First',
      description: 'We push the boundaries of what\'s possible with AI technology',
      icon: Zap,
      color: 'text-purple-600'
    },
    {
      title: 'Collaborative Culture',
      description: 'We believe great ideas come from diverse teams working together',
      icon: Users,
      color: 'text-blue-600'
    },
    {
      title: 'Work-Life Balance',
      description: 'We support our team with flexible schedules and remote work',
      icon: Heart,
      color: 'text-pink-600'
    },
    {
      title: 'Global Impact',
      description: 'We\'re building AI solutions that make the world better',
      icon: Globe,
      color: 'text-green-600'
    }
  ];

  const benefits = [
    'Competitive salary and equity',
    'Health, dental, and vision insurance',
    '401(k) with company matching',
    'Flexible work arrangements',
    'Unlimited PTO',
    'Professional development budget',
    'Home office stipend',
    'Mental health support',
    'Team building events',
    'Conference attendance',
    'Learning and development opportunities',
    'Stock options'
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Helmet>
        <title>Careers - Zion Tech Group</title>
        <meta name="description" content="Join our team of AI innovators. Explore career opportunities at Zion Tech Group and help us build the future of artificial intelligence." />
        <meta name="keywords" content="careers, jobs, AI engineer, machine learning, software engineer, remote work, tech jobs" />
      </Helmet>

      {/* Hero Section */}
      <section className="pt-24 pb-16 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-6">
            Join Our Team
          </h1>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Help us build the future of artificial intelligence. We're looking for passionate, innovative people to join our mission.
          </p>
          
          {/* Company Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
              <div className="text-3xl font-bold text-cyan-400 mb-2">50+</div>
              <div className="text-gray-300">Team Members</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
              <div className="text-3xl font-bold text-green-400 mb-2">15+</div>
              <div className="text-gray-300">Countries</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
              <div className="text-3xl font-bold text-purple-400 mb-2">100%</div>
              <div className="text-gray-300">Remote Friendly</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
              <div className="text-3xl font-bold text-orange-400 mb-2">4.8★</div>
              <div className="text-gray-300">Employee Rating</div>
            </div>
          </div>
        </div>
      </section>

      {/* Open Positions */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-white mb-12 text-center">Open Positions</h2>
          
          <div className="space-y-8">
            {openPositions.map((position) => (
              <div key={position.id} className="bg-white rounded-xl shadow-lg p-8 hover:shadow-2xl transition-all duration-300">
                <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between mb-6">
                  <div className="flex-1">
                    <div className="flex items-center space-x-4 mb-4">
                      <h3 className="text-2xl font-bold text-gray-900">{position.title}</h3>
                      <span className="bg-purple-100 text-purple-800 text-sm px-3 py-1 rounded-full">
                        {position.department}
                      </span>
                    </div>
                    <div className="flex flex-wrap items-center space-x-6 text-sm text-gray-600 mb-4">
                      <div className="flex items-center">
                        <MapPin className="w-4 h-4 mr-2" />
                        {position.location}
                      </div>
                      <div className="flex items-center">
                        <Briefcase className="w-4 h-4 mr-2" />
                        {position.type}
                      </div>
                      <div className="flex items-center">
                        <Clock className="w-4 h-4 mr-2" />
                        {position.experience}
                      </div>
                      <div className="flex items-center">
                        <Users className="w-4 h-4 mr-2" />
                        {position.applicants} applicants
                      </div>
                    </div>
                    <p className="text-gray-700 mb-6">{position.description}</p>
                  </div>
                  <div className="lg:ml-8">
                    <button className="w-full lg:w-auto bg-purple-600 hover:bg-purple-700 text-white px-6 py-3 rounded-lg font-semibold transition-colors flex items-center justify-center">
                      Apply Now
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </button>
                    <p className="text-xs text-gray-500 mt-2">Posted {position.posted}</p>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div>
                    <h4 className="text-lg font-semibold text-gray-900 mb-4">Requirements</h4>
                    <ul className="space-y-2">
                      {position.requirements.map((req, index) => (
                        <li key={index} className="flex items-start text-sm text-gray-600">
                          <CheckCircle className="w-4 h-4 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                          {req}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-gray-900 mb-4">Benefits</h4>
                    <ul className="space-y-2">
                      {position.benefits.map((benefit, index) => (
                        <li key={index} className="flex items-start text-sm text-gray-600">
                          <Star className="w-4 h-4 text-yellow-500 mr-2 mt-0.5 flex-shrink-0" />
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

      {/* Company Values */}
      <section className="py-16 px-4 bg-white/5">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-white mb-12 text-center">Our Values</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {companyValues.map((value, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg p-6 text-center">
                <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <value.icon className={`w-8 h-8 ${value.color}`} />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{value.title}</h3>
                <p className="text-gray-600">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-white mb-12 text-center">Benefits & Perks</h2>
          
          <div className="bg-white rounded-xl shadow-lg p-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-center space-x-3">
                  <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                  <span className="text-gray-700">{benefit}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 bg-gradient-to-r from-purple-600 to-blue-600">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-white mb-6">
            Don't See the Right Role?
          </h2>
          <p className="text-xl text-purple-100 mb-8">
            We're always looking for talented people. Send us your resume and let us know how you'd like to contribute.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-purple-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
              Send Resume
            </button>
            <button className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-purple-600 px-8 py-3 rounded-lg font-semibold transition-colors">
              Learn More
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CareersPage;
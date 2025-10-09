import React from 'react';
import { MapPin, Clock, Users, GraduationCap, Briefcase, Heart } from 'lucide-react';

const CareersPage: React.FC = () => {
  const openPositions = [
    {
      title: 'Senior AI Engineer',
      department: 'AI Solutions',
      location: 'Middletown, DE / Remote',
      type: 'Full-time',
      experience: '5+ years',
      description: 'Lead development of cutting-edge AI solutions and machine learning models',
      requirements: [
        'Master\'s degree in Computer Science or related field',
        '5+ years experience in AI/ML development',
        'Expertise in Python, TensorFlow, PyTorch',
        'Experience with cloud platforms (AWS, Azure, GCP)',
        'Strong problem-solving and communication skills'
      ],
      benefits: [
        'Competitive salary and equity',
        'Comprehensive health benefits',
        'Flexible work arrangements',
        'Professional development budget',
        '401(k) with company matching'
      ]
    },
    {
      title: 'Quantum Computing Specialist',
      department: 'Emerging Technologies',
      location: 'Middletown, DE / Remote',
      type: 'Full-time',
      experience: '3+ years',
      description: 'Develop quantum algorithms and solutions for enterprise applications',
      requirements: [
        'PhD in Physics, Computer Science, or related field',
        '3+ years quantum computing experience',
        'Knowledge of quantum programming languages (Qiskit, Cirq)',
        'Experience with quantum hardware platforms',
        'Strong mathematical and analytical skills'
      ],
      benefits: [
        'Competitive salary and equity',
        'Comprehensive health benefits',
        'Flexible work arrangements',
        'Professional development budget',
        '401(k) with company matching'
      ]
    },
    {
      title: 'DevOps Engineer',
      department: 'IT Infrastructure',
      location: 'Middletown, DE / Remote',
      type: 'Full-time',
      experience: '4+ years',
      description: 'Manage cloud infrastructure and deployment pipelines for AI applications',
      requirements: [
        'Bachelor\'s degree in Computer Science or related field',
        '4+ years DevOps experience',
        'Expertise in AWS, Docker, Kubernetes',
        'Experience with CI/CD pipelines',
        'Knowledge of monitoring and logging tools'
      ],
      benefits: [
        'Competitive salary and equity',
        'Comprehensive health benefits',
        'Flexible work arrangements',
        'Professional development budget',
        '401(k) with company matching'
      ]
    },
    {
      title: 'AI Product Manager',
      department: 'Product',
      location: 'Middletown, DE / Remote',
      type: 'Full-time',
      experience: '3+ years',
      description: 'Drive product strategy and roadmap for AI-powered solutions',
      requirements: [
        'Bachelor\'s degree in Business, Engineering, or related field',
        '3+ years product management experience',
        'Experience with AI/ML products',
        'Strong analytical and communication skills',
        'MBA preferred'
      ],
      benefits: [
        'Competitive salary and equity',
        'Comprehensive health benefits',
        'Flexible work arrangements',
        'Professional development budget',
        '401(k) with company matching'
      ]
    }
  ];

  const benefits = [
    {
      icon: Heart,
      title: 'Health & Wellness',
      description: 'Comprehensive health, dental, and vision insurance for you and your family'
    },
    {
      icon: GraduationCap,
      title: 'Learning & Development',
      description: 'Annual learning budget and access to conferences, courses, and certifications'
    },
    {
      icon: Clock,
      title: 'Flexible Work',
      description: 'Flexible hours, remote work options, and unlimited PTO policy'
    },
    {
      icon: Users,
      title: 'Team Culture',
      description: 'Collaborative environment with regular team events and company retreats'
    },
    {
      icon: Briefcase,
      title: 'Career Growth',
      description: 'Clear career progression paths and mentorship opportunities'
    },
    {
      icon: MapPin,
      title: 'Location Flexibility',
      description: 'Work from our modern office or anywhere in the world'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-24">
      <div className="container mx-auto px-4 py-16">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Join Our Team
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
            Be part of the future of technology. Join our team of innovators, engineers, and visionaries 
            who are building the next generation of AI and IT solutions.
          </p>
          
          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
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
              <div className="text-3xl font-bold text-orange-400 mb-2">4.8</div>
              <div className="text-gray-300">Glassdoor Rating</div>
            </div>
          </div>
        </div>

        {/* Open Positions */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-white text-center mb-12">
            Open Positions
          </h2>
          <div className="space-y-8">
            {openPositions.map((position, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-sm rounded-lg p-8 hover:bg-white/20 transition-all duration-300">
                <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-6">
                  <div>
                    <h3 className="text-2xl font-bold text-white mb-2">{position.title}</h3>
                    <div className="flex flex-wrap gap-4 text-sm text-gray-300">
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
                      <span>{position.experience}</span>
                    </div>
                  </div>
                  <button className="mt-4 lg:mt-0 bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-6 py-3 rounded-lg font-medium hover:from-cyan-600 hover:to-blue-700 transition-all">
                    Apply Now
                  </button>
                </div>
                
                <p className="text-gray-300 mb-6">{position.description}</p>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="text-lg font-semibold text-cyan-400 mb-3">Requirements:</h4>
                    <ul className="space-y-2">
                      {position.requirements.map((req, reqIndex) => (
                        <li key={reqIndex} className="flex items-start text-sm text-gray-300">
                          <span className="w-2 h-2 bg-cyan-400 rounded-full mr-3 mt-2 flex-shrink-0"></span>
                          {req}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-cyan-400 mb-3">Benefits:</h4>
                    <ul className="space-y-2">
                      {position.benefits.map((benefit, benefitIndex) => (
                        <li key={benefitIndex} className="flex items-start text-sm text-gray-300">
                          <span className="w-2 h-2 bg-green-400 rounded-full mr-3 mt-2 flex-shrink-0"></span>
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

        {/* Benefits Section */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-white text-center mb-12">
            Why Work With Us?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="bg-white rounded-lg shadow-lg p-6 hover:shadow-2xl transition-all duration-300 hover:scale-105">
                <div className="w-12 h-12 bg-cyan-400/20 rounded-lg flex items-center justify-center mb-4">
                  <benefit.icon className="w-6 h-6 text-cyan-400" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">{benefit.title}</h3>
                <p className="text-gray-600">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Culture Section */}
        <div className="mb-16">
          <div className="bg-gradient-to-r from-purple-600 to-blue-600 rounded-lg p-8 text-center">
            <h2 className="text-2xl font-bold text-white mb-4">
              Our Culture
            </h2>
            <p className="text-purple-100 mb-6 max-w-3xl mx-auto">
              We believe in fostering a culture of innovation, collaboration, and continuous learning. 
              Our team is diverse, inclusive, and passionate about pushing the boundaries of what's possible with technology.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
              <div>
                <h3 className="text-lg font-semibold text-white mb-2">Innovation</h3>
                <p className="text-purple-100 text-sm">We encourage creative thinking and bold ideas</p>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-white mb-2">Collaboration</h3>
                <p className="text-purple-100 text-sm">We work together to achieve common goals</p>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-white mb-2">Growth</h3>
                <p className="text-purple-100 text-sm">We invest in our people's development</p>
              </div>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center">
          <h2 className="text-2xl font-bold text-white mb-4">
            Don't See Your Dream Role?
          </h2>
          <p className="text-gray-300 mb-6">
            We're always looking for talented individuals. Send us your resume and let us know how you'd like to contribute.
          </p>
          <a
            href="mailto:careers@ziontechgroup.com"
            className="bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-8 py-3 rounded-lg font-medium hover:from-cyan-600 hover:to-blue-700 transition-all inline-block"
          >
            Send Your Resume
          </a>
        </div>
      </div>
    </div>
  );
};

export default CareersPage;
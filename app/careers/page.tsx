'use client';
import React from 'react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import Breadcrumb from '../components/Breadcrumb';
import { MapPin, Clock, Users, ArrowRight, CheckCircle, Star } from 'lucide-react';

const CareersPage: React.FC = () => {
  const openPositions = [
    {
      title: 'Senior AI Engineer',
      department: 'AI Solutions',
      location: 'Remote / Middletown, DE',
      type: 'Full-time',
      experience: '5+ years',
      description: 'Lead the development of cutting-edge AI solutions and machine learning models.',
      requirements: [
        'Master\'s degree in Computer Science or related field',
        '5+ years of experience in AI/ML development',
        'Proficiency in Python, TensorFlow, PyTorch',
        'Experience with cloud platforms (AWS, Azure, GCP)',
        'Strong problem-solving and communication skills'
      ]
    },
    {
      title: 'Full Stack Developer',
      department: 'IT Solutions',
      location: 'Remote / Middletown, DE',
      type: 'Full-time',
      experience: '3+ years',
      description: 'Build scalable web applications and APIs using modern technologies.',
      requirements: [
        'Bachelor\'s degree in Computer Science or related field',
        '3+ years of full-stack development experience',
        'Proficiency in React, Node.js, TypeScript',
        'Experience with databases (PostgreSQL, MongoDB)',
        'Knowledge of DevOps practices and tools'
      ]
    },
    {
      title: 'DevOps Engineer',
      department: 'Infrastructure',
      location: 'Remote / Middletown, DE',
      type: 'Full-time',
      experience: '4+ years',
      description: 'Design and maintain cloud infrastructure and CI/CD pipelines.',
      requirements: [
        'Bachelor\'s degree in Computer Science or related field',
        '4+ years of DevOps experience',
        'Expertise in AWS, Docker, Kubernetes',
        'Experience with Terraform, Ansible',
        'Strong scripting skills (Bash, Python)'
      ]
    },
    {
      title: 'UI/UX Designer',
      department: 'Design',
      location: 'Remote / Middletown, DE',
      type: 'Full-time',
      experience: '3+ years',
      description: 'Create intuitive and engaging user experiences for our AI and IT solutions.',
      requirements: [
        'Bachelor\'s degree in Design or related field',
        '3+ years of UI/UX design experience',
        'Proficiency in Figma, Adobe Creative Suite',
        'Experience with user research and testing',
        'Strong portfolio demonstrating design skills'
      ]
    }
  ];

  const benefits = [
    'Competitive salary and equity package',
    'Comprehensive health, dental, and vision insurance',
    'Flexible work arrangements and remote options',
    'Professional development and training opportunities',
    '401(k) with company matching',
    'Unlimited PTO and paid holidays',
    'Modern equipment and home office setup',
    'Team building events and company retreats'
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Navigation />
      <main className="pt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <Breadcrumb items={[{ label: 'Careers' }]} />
          
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400 mb-6">
              Join Our Team
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Be part of a team that's shaping the future of AI and IT solutions. 
              We're looking for passionate individuals who want to make a difference.
            </p>
          </div>

          {/* Why Work With Us */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold text-white mb-8 text-center">Why Work With Us?</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Star className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">Innovation</h3>
                <p className="text-gray-300">
                  Work on cutting-edge projects that push the boundaries of technology.
                </p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">Collaboration</h3>
                <p className="text-gray-300">
                  Join a diverse team of experts who support and learn from each other.
                </p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-teal-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <ArrowRight className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">Growth</h3>
                <p className="text-gray-300">
                  Advance your career with continuous learning and development opportunities.
                </p>
              </div>
            </div>
          </section>

          {/* Benefits */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold text-white mb-8 text-center">Benefits & Perks</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-4xl mx-auto">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-center">
                  <CheckCircle className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" />
                  <span className="text-gray-300">{benefit}</span>
                </div>
              ))}
            </div>
          </section>

          {/* Open Positions */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold text-white mb-8 text-center">Open Positions</h2>
            <div className="space-y-6">
              {openPositions.map((position, index) => (
                <div
                  key={index}
                  className="bg-white/10 backdrop-blur-sm rounded-xl p-8 border border-white/20 hover:bg-white/20 transition-all duration-300"
                >
                  <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-6">
                    <div>
                      <h3 className="text-2xl font-bold text-white mb-2">{position.title}</h3>
                      <p className="text-cyan-400 font-semibold mb-2">{position.department}</p>
                      <p className="text-gray-300">{position.description}</p>
                    </div>
                    <div className="mt-4 lg:mt-0 lg:ml-6">
                      <button className="w-full lg:w-auto bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 flex items-center justify-center">
                        Apply Now
                        <ArrowRight className="w-4 h-4 ml-2" />
                      </button>
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
                    <div className="flex items-center text-gray-300">
                      <MapPin className="w-4 h-4 mr-2 text-cyan-400" />
                      {position.location}
                    </div>
                    <div className="flex items-center text-gray-300">
                      <Clock className="w-4 h-4 mr-2 text-cyan-400" />
                      {position.type}
                    </div>
                    <div className="flex items-center text-gray-300">
                      <Users className="w-4 h-4 mr-2 text-cyan-400" />
                      {position.experience}
                    </div>
                  </div>
                  
                  <div>
                    <h4 className="text-lg font-semibold text-white mb-3">Requirements</h4>
                    <ul className="space-y-2">
                      {position.requirements.map((requirement, reqIndex) => (
                        <li key={reqIndex} className="flex items-start text-gray-300">
                          <CheckCircle className="w-4 h-4 text-green-400 mr-3 mt-0.5 flex-shrink-0" />
                          {requirement}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* CTA Section */}
          <div className="text-center">
            <div className="bg-gradient-to-r from-cyan-600 to-blue-600 rounded-2xl p-8 md:p-12">
              <h2 className="text-3xl font-bold text-white mb-4">
                Don't See the Right Role?
              </h2>
              <p className="text-xl text-gray-200 mb-8 max-w-2xl mx-auto">
                We're always looking for talented individuals. Send us your resume and let us know how you'd like to contribute.
              </p>
              <a
                href="/contact"
                className="bg-white text-cyan-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-all duration-300 inline-flex items-center"
              >
                Get in Touch
                <ArrowRight className="w-4 h-4 ml-2" />
              </a>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default CareersPage;
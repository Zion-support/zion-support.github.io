import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { MapPin, Clock, Users, ArrowRight, Check, Star } from 'lucide-react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

export default function CareersPage() {
  const openPositions = [
    {
      title: 'Senior AI Engineer',
      department: 'AI & Machine Learning',
      location: 'Remote / New York',
      type: 'Full-time',
      experience: '5+ years',
      description: 'Lead the development of cutting-edge AI solutions and machine learning models.',
      requirements: [
        'Master\'s degree in Computer Science or related field',
        '5+ years experience in AI/ML development',
        'Proficiency in Python, TensorFlow, PyTorch',
        'Experience with cloud platforms (AWS, GCP, Azure)',
        'Strong problem-solving and communication skills'
      ]
    },
    {
      title: 'Cloud Solutions Architect',
      department: 'Cloud Services',
      location: 'San Francisco, CA',
      type: 'Full-time',
      experience: '7+ years',
      description: 'Design and implement scalable cloud infrastructure solutions for enterprise clients.',
      requirements: [
        'Bachelor\'s degree in Computer Science or related field',
        '7+ years experience in cloud architecture',
        'Certifications in AWS, Azure, or GCP',
        'Experience with DevOps and CI/CD pipelines',
        'Strong leadership and client-facing skills'
      ]
    },
    {
      title: 'Cybersecurity Specialist',
      department: 'Security',
      location: 'Remote / Austin',
      type: 'Full-time',
      experience: '4+ years',
      description: 'Protect our clients\' digital assets with advanced security solutions and threat monitoring.',
      requirements: [
        'Bachelor\'s degree in Cybersecurity or related field',
        '4+ years experience in cybersecurity',
        'Certifications in CISSP, CISM, or similar',
        'Experience with SIEM tools and incident response',
        'Knowledge of compliance frameworks (SOC 2, ISO 27001)'
      ]
    },
    {
      title: 'Frontend Developer',
      department: 'Engineering',
      location: 'Remote',
      type: 'Full-time',
      experience: '3+ years',
      description: 'Build beautiful and responsive user interfaces for our AI-powered applications.',
      requirements: [
        'Bachelor\'s degree in Computer Science or related field',
        '3+ years experience in frontend development',
        'Proficiency in React, TypeScript, and modern CSS',
        'Experience with responsive design and accessibility',
        'Strong attention to detail and user experience'
      ]
    },
    {
      title: 'DevOps Engineer',
      department: 'Engineering',
      location: 'Remote / Seattle',
      type: 'Full-time',
      experience: '4+ years',
      description: 'Streamline our development processes and maintain our cloud infrastructure.',
      requirements: [
        'Bachelor\'s degree in Computer Science or related field',
        '4+ years experience in DevOps',
        'Experience with Docker, Kubernetes, and Terraform',
        'Knowledge of monitoring and logging tools',
        'Strong automation and scripting skills'
      ]
    },
    {
      title: 'Product Manager - AI Solutions',
      department: 'Product',
      location: 'Remote / Boston',
      type: 'Full-time',
      experience: '5+ years',
      description: 'Drive the strategy and development of our AI product portfolio.',
      requirements: [
        'Bachelor\'s degree in Business, Computer Science, or related field',
        '5+ years experience in product management',
        'Experience with AI/ML products and technologies',
        'Strong analytical and strategic thinking skills',
        'Excellent communication and stakeholder management'
      ]
    }
  ];

  const benefits = [
    {
      icon: <Star className="w-6 h-6 text-yellow-500" />,
      title: 'Competitive Salary',
      description: 'Above-market compensation with performance bonuses and equity options.'
    },
    {
      icon: <Users className="w-6 h-6 text-blue-500" />,
      title: 'Remote-First Culture',
      description: 'Work from anywhere with flexible hours and a supportive team environment.'
    },
    {
      icon: <Check className="w-6 h-6 text-green-500" />,
      title: 'Health & Wellness',
      description: 'Comprehensive health insurance, mental health support, and wellness programs.'
    },
    {
      icon: <ArrowRight className="w-6 h-6 text-purple-500" />,
      title: 'Career Growth',
      description: 'Professional development opportunities, conferences, and continuous learning.'
    }
  ];

  const values = [
    'Innovation and cutting-edge technology',
    'Collaboration and teamwork',
    'Work-life balance and flexibility',
    'Diversity and inclusion',
    'Continuous learning and growth',
    'Client success and satisfaction'
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Helmet>
        <title>Careers - Zion Tech Group</title>
        <meta name="description" content="Join our team of experts at Zion Tech Group. Explore exciting career opportunities in AI, IT services, and technology." />
        <meta name="keywords" content="careers, jobs, AI engineer, cloud architect, cybersecurity, remote work, Zion Tech Group" />
      </Helmet>
      
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-20 px-4 py-12 sm:py-16 lg:py-20">
        <div className="max-w-7xl mx-auto">
          <div className="text-center">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4">
              Join Our Team
            </h1>
            <p className="text-lg sm:text-xl text-gray-300 max-w-3xl mx-auto">
              Be part of a team that's shaping the future of technology. Work on cutting-edge AI and IT solutions that make a real impact.
            </p>
          </div>
        </div>
      </section>

      {/* Why Work With Us */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Why Work at Zion Tech Group?
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              We're building the future of technology, and we want you to be part of it.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="text-center">
                <div className="flex justify-center mb-4">{benefit.icon}</div>
                <h3 className="text-xl font-semibold text-white mb-4">{benefit.title}</h3>
                <p className="text-gray-300">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Open Positions */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white/5">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Open Positions
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Explore our current job openings and find the perfect role for you.
            </p>
          </div>
          
          <div className="space-y-8">
            {openPositions.map((position, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20 hover:bg-white/15 transition-all duration-300">
                <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-6">
                  <div>
                    <h3 className="text-2xl font-bold text-white mb-2">{position.title}</h3>
                    <p className="text-purple-400 font-medium mb-4">{position.department}</p>
                    <p className="text-gray-300 mb-4">{position.description}</p>
                  </div>
                  <div className="flex flex-wrap gap-4 mb-4 lg:mb-0">
                    <div className="flex items-center text-gray-300">
                      <MapPin className="w-4 h-4 mr-2" />
                      <span>{position.location}</span>
                    </div>
                    <div className="flex items-center text-gray-300">
                      <Clock className="w-4 h-4 mr-2" />
                      <span>{position.type}</span>
                    </div>
                    <div className="flex items-center text-gray-300">
                      <Users className="w-4 h-4 mr-2" />
                      <span>{position.experience}</span>
                    </div>
                  </div>
                </div>
                
                <div className="mb-6">
                  <h4 className="text-lg font-semibold text-white mb-3">Key Requirements:</h4>
                  <ul className="space-y-2">
                    {position.requirements.map((requirement, reqIndex) => (
                      <li key={reqIndex} className="flex items-start">
                        <Check className="w-4 h-4 text-green-400 mr-3 flex-shrink-0 mt-1" />
                        <span className="text-gray-300">{requirement}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div className="flex flex-col sm:flex-row gap-4">
                  <Link
                    to="/contact"
                    className="bg-gradient-to-r from-purple-600 to-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:from-purple-700 hover:to-blue-700 transition-all duration-300 flex items-center justify-center"
                  >
                    Apply Now
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Link>
                  <button className="border border-white/20 text-white px-6 py-3 rounded-lg font-semibold hover:bg-white/10 transition-colors">
                    Learn More
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Company Values */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Our Values
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              The principles that guide everything we do and shape our company culture.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {values.map((value, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 text-center">
                <div className="flex items-center justify-center mb-4">
                  <Check className="w-6 h-6 text-green-400" />
                </div>
                <p className="text-white font-medium">{value}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center">
            <div className="bg-gradient-to-r from-purple-600 to-pink-600 rounded-2xl sm:rounded-3xl p-6 sm:p-8 lg:p-12">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-4">
                Don't See the Right Role?
              </h2>
              <p className="text-lg sm:text-xl text-white/90 mb-6 sm:mb-8 max-w-2xl mx-auto">
                We're always looking for talented individuals. Send us your resume and let us know how you can contribute to our mission.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  to="/contact"
                  className="bg-white text-purple-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-all duration-300 flex items-center justify-center"
                >
                  Send Your Resume
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Link>
                <Link 
                  to="/about" 
                  className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white/10 transition-colors"
                >
                  Learn About Us
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
}
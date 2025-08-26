import React from 'react';
import { Helmet } from 'react-helmet-async';
import { 
  Briefcase, 
  Users, 
  Zap, 
  Globe, 
  Shield, 
  Cpu, 
  Cloud, 
  Brain,
  MapPin,
  Clock,
  DollarSign,
  GraduationCap,
  Heart,
  Star,
  CheckCircle
} from 'lucide-react';

const Careers: React.FC = () => {
  const jobOpenings = [
    {
      id: 1,
      title: 'Senior AI Engineer',
      department: 'Artificial Intelligence',
      location: 'Remote / Delaware',
      type: 'Full-time',
      experience: '5+ years',
      salary: '$120,000 - $180,000',
      description: 'Lead the development of cutting-edge AI solutions and machine learning models.',
      requirements: [
        'Advanced degree in Computer Science, AI, or related field',
        'Expertise in Python, TensorFlow, PyTorch',
        'Experience with large language models and NLP',
        'Strong background in machine learning algorithms'
      ],
      icon: Brain
    },
    {
      id: 2,
      title: 'Cybersecurity Specialist',
      department: 'Security',
      location: 'Remote / Delaware',
      type: 'Full-time',
      experience: '3+ years',
      salary: '$90,000 - $140,000',
      description: 'Protect our clients and systems from cyber threats and vulnerabilities.',
      requirements: [
        'Bachelor\'s degree in Cybersecurity or related field',
        'Certifications: CISSP, CEH, or CompTIA Security+',
        'Experience with penetration testing and vulnerability assessment',
        'Knowledge of security frameworks and compliance standards'
      ],
      icon: Shield
    },
    {
      id: 3,
      title: 'Cloud Solutions Architect',
      department: 'Cloud & DevOps',
      location: 'Remote / Delaware',
      type: 'Full-time',
      experience: '4+ years',
      salary: '$110,000 - $160,000',
      description: 'Design and implement scalable cloud infrastructure solutions.',
      requirements: [
        'Bachelor\'s degree in Computer Science or related field',
        'AWS, Azure, or GCP certifications',
        'Experience with Kubernetes and Docker',
        'Strong knowledge of infrastructure as code'
      ],
      icon: Cloud
    },
    {
      id: 4,
      title: 'Quantum Computing Researcher',
      department: 'Research & Development',
      location: 'Remote / Delaware',
      type: 'Full-time',
      experience: '2+ years',
      salary: '$100,000 - $150,000',
      description: 'Pioneer breakthrough quantum computing algorithms and applications.',
      requirements: [
        'PhD in Physics, Computer Science, or related field',
        'Experience with quantum programming languages (Qiskit, Cirq)',
        'Background in quantum mechanics and algorithms',
        'Published research in quantum computing'
      ],
      icon: Cpu
    },
    {
      id: 5,
      title: 'Green IT Consultant',
      department: 'Sustainability',
      location: 'Remote / Delaware',
      type: 'Full-time',
      experience: '3+ years',
      salary: '$80,000 - $120,000',
      description: 'Help organizations implement sustainable technology solutions.',
      requirements: [
        'Bachelor\'s degree in Environmental Science or IT',
        'Knowledge of energy-efficient computing',
        'Experience with sustainability metrics and reporting',
        'Understanding of environmental regulations'
      ],
      icon: Globe
    }
  ];

  const benefits = [
    {
      icon: Heart,
      title: 'Health & Wellness',
      description: 'Comprehensive health insurance, dental, vision, and mental health support'
    },
    {
      icon: DollarSign,
      title: 'Competitive Compensation',
      description: 'Above-market salaries, performance bonuses, and equity options'
    },
    {
      icon: Clock,
      title: 'Flexible Work',
      description: 'Remote-first culture with flexible hours and unlimited PTO'
    },
    {
      icon: GraduationCap,
      title: 'Learning & Development',
      description: 'Professional development budget, conferences, and certification support'
    },
    {
      icon: Users,
      title: 'Team Culture',
      description: 'Collaborative environment with regular team events and activities'
    },
    {
      icon: Star,
      title: 'Innovation Focus',
      description: 'Work on cutting-edge technologies and groundbreaking projects'
    }
  ];

  const values = [
    {
      icon: Zap,
      title: 'Innovation First',
      description: 'We push boundaries and embrace new technologies to solve complex problems.'
    },
    {
      icon: Shield,
      title: 'Trust & Security',
      description: 'We prioritize the security and privacy of our clients and team members.'
    },
    {
      icon: Globe,
      title: 'Global Impact',
      description: 'We create solutions that make a positive difference in the world.'
    },
    {
      icon: Users,
      title: 'Collaboration',
      description: 'We believe in the power of diverse teams working together.'
    }
  ];

  return (
    <>
      <Helmet>
        <title>Careers - Zion Tech Group</title>
        <meta name="description" content="Join Zion Tech Group's innovative team. Explore career opportunities in AI, cybersecurity, cloud computing, and more. Build the future with us." />
        <meta name="keywords" content="careers, jobs, employment, Zion Tech Group, AI engineer, cybersecurity, cloud computing" />
      </Helmet>
      
      <div className="min-h-screen bg-gray-50">
        {/* Hero Section */}
        <div className="bg-gradient-to-r from-blue-900 to-slate-900 text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
            <div className="text-center">
              <h1 className="text-5xl font-bold mb-6">Join Our Team</h1>
              <p className="text-xl text-blue-200 mb-8 max-w-3xl mx-auto">
                Help us build the future of technology. At Zion Tech Group, we're creating innovative solutions 
                that transform businesses and improve lives. Join our mission to push the boundaries of what's possible.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <a 
                  href="#openings" 
                  className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors duration-300"
                >
                  View Openings
                </a>
                <a 
                  href="#culture" 
                  className="border border-white text-white hover:bg-white hover:text-blue-900 px-8 py-3 rounded-lg font-semibold transition-colors duration-300"
                >
                  Learn About Culture
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Company Values */}
        <section id="culture" className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Values</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                These core values guide everything we do and shape our company culture.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {values.map((value, index) => (
                <div key={index} className="text-center p-6 rounded-lg hover:shadow-lg transition-shadow duration-300">
                  <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <value.icon className="w-8 h-8 text-blue-600" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">{value.title}</h3>
                  <p className="text-gray-600">{value.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Benefits */}
        <section className="py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">Why Work With Us</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                We believe in taking care of our team members. Here's what we offer:
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {benefits.map((benefit, index) => (
                <div key={index} className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                    <benefit.icon className="w-6 h-6 text-blue-600" />
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">{benefit.title}</h3>
                  <p className="text-gray-600 text-sm">{benefit.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Job Openings */}
        <section id="openings" className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">Open Positions</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Ready to join our team? Check out our current openings and find the perfect role for you.
              </p>
            </div>
            
            <div className="space-y-6">
              {jobOpenings.map((job) => (
                <div key={job.id} className="border border-gray-200 rounded-lg p-6 hover:shadow-lg transition-shadow duration-300">
                  <div className="flex items-start justify-between">
                    <div className="flex items-start space-x-4">
                      <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                        <job.icon className="w-6 h-6 text-blue-600" />
                      </div>
                      <div>
                        <h3 className="text-xl font-semibold text-gray-900 mb-2">{job.title}</h3>
                        <p className="text-gray-600 mb-3">{job.description}</p>
                        
                        <div className="flex flex-wrap gap-4 text-sm text-gray-500">
                          <div className="flex items-center space-x-1">
                            <Briefcase className="w-4 h-4" />
                            <span>{job.department}</span>
                          </div>
                          <div className="flex items-center space-x-1">
                            <MapPin className="w-4 h-4" />
                            <span>{job.location}</span>
                          </div>
                          <div className="flex items-center space-x-1">
                            <Clock className="w-4 h-4" />
                            <span>{job.type}</span>
                          </div>
                          <div className="flex items-center space-x-1">
                            <GraduationCap className="w-4 h-4" />
                            <span>{job.experience}</span>
                          </div>
                          <div className="flex items-center space-x-1">
                            <DollarSign className="w-4 h-4" />
                            <span>{job.salary}</span>
                          </div>
                        </div>
                      </div>
                    </div>
                    
                    <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-lg font-semibold transition-colors duration-300">
                      Apply Now
                    </button>
                  </div>
                  
                  <div className="mt-6 pt-6 border-t border-gray-200">
                    <h4 className="font-semibold text-gray-900 mb-3">Requirements:</h4>
                    <ul className="space-y-2">
                      {job.requirements.map((requirement, index) => (
                        <li key={index} className="flex items-start space-x-2">
                          <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                          <span className="text-gray-700">{requirement}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
            
            <div className="text-center mt-12">
              <p className="text-gray-600 mb-4">
                Don't see a position that fits? We're always looking for talented individuals to join our team.
              </p>
              <a 
                href="mailto:careers@ziontechgroup.com" 
                className="inline-flex items-center space-x-2 bg-gray-900 hover:bg-gray-800 text-white px-8 py-3 rounded-lg font-semibold transition-colors duration-300"
              >
                <span>Send Us Your Resume</span>
                <Briefcase className="w-5 h-5" />
              </a>
            </div>
          </div>
        </section>

        {/* Application Process */}
        <section className="py-20 bg-gray-50">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-4xl font-bold text-gray-900 mb-8">Our Application Process</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-blue-600 text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                  1
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Apply</h3>
                <p className="text-gray-600">Submit your application and resume through our portal</p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-blue-600 text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                  2
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Review</h3>
                <p className="text-gray-600">Our team reviews your application and experience</p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-blue-600 text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                  3
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Interview</h3>
                <p className="text-gray-600">Meet with our team and discuss opportunities</p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-blue-600 text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                  4
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Join</h3>
                <p className="text-gray-600">Welcome to the Zion Tech Group family!</p>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section className="py-20 bg-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Questions About Working With Us?</h2>
            <p className="text-xl text-gray-600 mb-8">
              Our team is here to help. Reach out with any questions about our culture, benefits, or open positions.
            </p>
            
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <a 
                href="mailto:careers@ziontechgroup.com" 
                className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors duration-300"
              >
                Email Us
              </a>
              <a 
                href="/contact" 
                className="border border-gray-300 text-gray-700 hover:bg-gray-50 px-8 py-3 rounded-lg font-semibold transition-colors duration-300"
              >
                Contact Page
              </a>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default Careers;
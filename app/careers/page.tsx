'use client';

import React from 'react';
import { Helmet } from 'react-helmet-async';
import { MapPin, Clock, CheckCircle, Star, Users, Heart, Award, ArrowRight, Briefcase, GraduationCap, Zap } from 'lucide-react';

interface JobPosition {
  id: string;
  title: string;
  department: string;
  location: string;
  type: string;
  experience: string;
  description: string;
  requirements: string[];
  benefits: string[];
  posted: string;
  featured: boolean;
}

const CareersPage: React.FC = () => {
  const openPositions: JobPosition[] = [
    {
      id: '1',
      title: 'Senior AI Engineer',
      department: 'AI Solutions',
      location: 'Remote',
      type: 'Full-time',
      experience: '5+ years',
      description: 'Lead development of cutting-edge AI solutions and machine learning models for enterprise clients.',
      requirements: [
        '5+ years experience in AI/ML development',
        'Expertise in Python, TensorFlow, PyTorch',
        'Experience with cloud platforms (AWS, Azure, GCP)',
        'Strong understanding of deep learning algorithms',
        'Previous experience in production AI systems'
      ],
      benefits: [
        'Competitive salary: $120,000 - $180,000',
        'Equity participation',
        'Flexible remote work',
        'Professional development budget'
      ],
      posted: '2 days ago',
      featured: true
    },
    {
      id: '2',
      title: 'Cloud Architect',
      department: 'Cloud Services',
      location: 'New York, NY',
      type: 'Full-time',
      experience: '7+ years',
      description: 'Design and implement scalable cloud infrastructure solutions for enterprise clients.',
      requirements: [
        '7+ years experience in cloud architecture',
        'Expertise in AWS, Azure, or GCP',
        'Experience with containerization (Docker, Kubernetes)',
        'Strong understanding of microservices architecture',
        'Previous experience with enterprise cloud migrations'
      ],
      benefits: [
        'Competitive salary: $140,000 - $200,000',
        'Comprehensive health benefits',
        '401k with company matching',
        'Flexible work arrangements'
      ],
      posted: '1 week ago',
      featured: true
    },
    {
      id: '3',
      title: 'Cybersecurity Specialist',
      department: 'Security',
      location: 'San Francisco, CA',
      type: 'Full-time',
      experience: '4+ years',
      description: 'Protect our clients\' digital assets through advanced security measures and threat analysis.',
      requirements: [
        '4+ years experience in cybersecurity',
        'Certifications: CISSP, CISM, or equivalent',
        'Experience with security tools and frameworks',
        'Knowledge of compliance standards (SOC 2, ISO 27001)',
        'Strong analytical and problem-solving skills'
      ],
      benefits: [
        'Competitive salary: $100,000 - $150,000',
        'Health, dental, and vision insurance',
        'Professional development opportunities',
        'Remote work options'
      ],
      posted: '3 days ago',
      featured: false
    },
    {
      id: '4',
      title: 'DevOps Engineer',
      department: 'Engineering',
      location: 'Austin, TX',
      type: 'Full-time',
      experience: '3+ years',
      description: 'Streamline development processes and improve deployment efficiency through automation.',
      requirements: [
        '3+ years experience in DevOps practices',
        'Expertise in CI/CD pipelines',
        'Experience with infrastructure as code',
        'Knowledge of monitoring and logging tools',
        'Strong scripting skills (Bash, Python)'
      ],
      benefits: [
        'Competitive salary: $90,000 - $130,000',
        'Flexible PTO policy',
        'Learning and development budget',
        'Stock options'
      ],
      posted: '5 days ago',
      featured: false
    },
    {
      id: '5',
      title: 'Data Scientist',
      department: 'Data Analytics',
      location: 'Remote',
      type: 'Full-time',
      experience: '4+ years',
      description: 'Extract insights from complex data sets to drive business decisions and innovation.',
      requirements: [
        '4+ years experience in data science',
        'Expertise in Python, R, SQL',
        'Experience with machine learning libraries',
        'Strong statistical analysis skills',
        'Previous experience with big data technologies'
      ],
      benefits: [
        'Competitive salary: $110,000 - $160,000',
        'Comprehensive benefits package',
        'Remote work flexibility',
        'Conference attendance budget'
      ],
      posted: '1 week ago',
      featured: false
    },
    {
      id: '6',
      title: 'Frontend Developer',
      department: 'Engineering',
      location: 'Seattle, WA',
      type: 'Full-time',
      experience: '3+ years',
      description: 'Create intuitive and responsive user interfaces for our web applications.',
      requirements: [
        '3+ years experience in frontend development',
        'Expertise in React, TypeScript, CSS',
        'Experience with modern build tools',
        'Strong UI/UX design principles',
        'Previous experience with responsive design'
      ],
      benefits: [
        'Competitive salary: $85,000 - $120,000',
        'Health and wellness benefits',
        'Flexible work schedule',
        'Professional development opportunities'
      ],
      posted: '4 days ago',
      featured: false
    }
  ];

  const companyValues = [
    {
      icon: <Star className="w-8 h-8 text-blue-600" />,
      title: 'Excellence',
      description: 'We strive for excellence in everything we do, delivering exceptional results for our clients.'
    },
    {
      icon: <Users className="w-8 h-8 text-green-600" />,
      title: 'Collaboration',
      description: 'We believe in the power of teamwork and foster an inclusive, collaborative environment.'
    },
    {
      icon: <Heart className="w-8 h-8 text-red-600" />,
      title: 'Passion',
      description: 'Our team is passionate about technology and committed to making a positive impact.'
    },
    {
      icon: <Award className="w-8 h-8 text-purple-600" />,
      title: 'Innovation',
      description: 'We embrace innovation and continuously push the boundaries of what\'s possible.'
    }
  ];

  const benefits = [
    'Competitive salary and equity participation',
    'Comprehensive health, dental, and vision insurance',
    '401k with company matching',
    'Flexible work arrangements and remote options',
    'Professional development and learning budget',
    'Generous paid time off and holidays',
    'Modern office spaces with cutting-edge technology',
    'Team building events and company retreats',
    'Mentorship and career growth opportunities',
    'Wellness programs and gym memberships'
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Helmet>
        <title>Careers - Zion Tech Group | Join Our Team</title>
        <meta name="description" content="Join Zion Tech Group and be part of a team that's shaping the future of technology. Explore our open positions and benefits." />
        <meta name="keywords" content="tech careers, AI jobs, cloud computing jobs, cybersecurity careers, software engineering" />
      </Helmet>

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-900 to-purple-900 text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Join Our Team
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-blue-100">
              Be part of a team that's shaping the future of technology and making a real impact
            </p>
            <div className="flex flex-wrap justify-center gap-4 text-sm">
              <div className="flex items-center">
                <Users className="w-5 h-5 mr-2" />
                50+ Team Members
              </div>
              <div className="flex items-center">
                <MapPin className="w-5 h-5 mr-2" />
                Remote & Office
              </div>
              <div className="flex items-center">
                <Award className="w-5 h-5 mr-2" />
                Industry Leading
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Company Values */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">Our Values</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {companyValues.map((value, index) => (
              <div key={index} className="text-center">
                <div className="flex justify-center mb-4">
                  {value.icon}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{value.title}</h3>
                <p className="text-gray-600">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-16 bg-gray-100">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">Why Work With Us</h2>
          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-2 gap-6">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-start">
                  <CheckCircle className="w-6 h-6 text-green-600 mr-3 mt-1 flex-shrink-0" />
                  <span className="text-gray-700">{benefit}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Open Positions */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">Open Positions</h2>
          <div className="max-w-6xl mx-auto">
            <div className="grid gap-6">
              {openPositions.map((position) => (
                <div key={position.id} className={`bg-white rounded-lg shadow-lg p-6 border-l-4 ${position.featured ? 'border-blue-500' : 'border-gray-300'}`}>
                  <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-4">
                    <div>
                      <h3 className="text-xl font-semibold text-gray-900 mb-2">{position.title}</h3>
                      <div className="flex flex-wrap items-center text-sm text-gray-600 mb-2">
                        <span className="flex items-center mr-4">
                          <Briefcase className="w-4 h-4 mr-1" />
                          {position.department}
                        </span>
                        <span className="flex items-center mr-4">
                          <MapPin className="w-4 h-4 mr-1" />
                          {position.location}
                        </span>
                        <span className="flex items-center mr-4">
                          <Clock className="w-4 h-4 mr-1" />
                          {position.type}
                        </span>
                        <span className="flex items-center">
                          <GraduationCap className="w-4 h-4 mr-1" />
                          {position.experience}
                        </span>
                      </div>
                    </div>
                    <div className="flex items-center mt-4 lg:mt-0">
                      {position.featured && (
                        <span className="bg-blue-100 text-blue-800 text-xs font-medium px-2.5 py-0.5 rounded-full mr-3">
                          Featured
                        </span>
                      )}
                      <span className="text-sm text-gray-500">Posted {position.posted}</span>
                    </div>
                  </div>
                  
                  <p className="text-gray-700 mb-4">{position.description}</p>
                  
                  <div className="grid md:grid-cols-2 gap-6 mb-6">
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-2">Requirements:</h4>
                      <ul className="text-sm text-gray-600 space-y-1">
                        {position.requirements.map((req, index) => (
                          <li key={index} className="flex items-start">
                            <CheckCircle className="w-4 h-4 text-green-600 mr-2 mt-0.5 flex-shrink-0" />
                            {req}
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-2">Benefits:</h4>
                      <ul className="text-sm text-gray-600 space-y-1">
                        {position.benefits.map((benefit, index) => (
                          <li key={index} className="flex items-start">
                            <CheckCircle className="w-4 h-4 text-green-600 mr-2 mt-0.5 flex-shrink-0" />
                            {benefit}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                  
                  <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-lg font-medium flex items-center transition-colors duration-200">
                    Apply Now
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </button>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Culture Section */}
      <section className="py-16 bg-gradient-to-r from-blue-50 to-purple-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Culture</h2>
            <p className="text-lg text-gray-700 mb-8">
              At Zion Tech Group, we foster a culture of innovation, collaboration, and continuous learning. 
              Our team members are passionate about technology and committed to delivering exceptional results 
              for our clients while growing their careers.
            </p>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="bg-blue-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <Zap className="w-8 h-8 text-blue-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Innovation</h3>
                <p className="text-gray-600">We encourage creative thinking and embrace new technologies</p>
              </div>
              <div className="text-center">
                <div className="bg-green-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <Users className="w-8 h-8 text-green-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Collaboration</h3>
                <p className="text-gray-600">We work together to achieve common goals and support each other</p>
              </div>
              <div className="text-center">
                <div className="bg-purple-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <GraduationCap className="w-8 h-8 text-purple-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Growth</h3>
                <p className="text-gray-600">We invest in our team's professional development and career growth</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-blue-900 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-4">Ready to Join Our Team?</h2>
            <p className="text-xl mb-8 text-blue-100">
              Don't see a position that matches your skills? We're always looking for talented individuals 
              to join our growing team. Send us your resume and let's start a conversation.
            </p>
            <button className="bg-white text-blue-900 px-8 py-3 rounded-lg font-medium hover:bg-gray-100 transition-colors duration-200 flex items-center mx-auto">
              Send Your Resume
              <ArrowRight className="w-5 h-5 ml-2" />
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CareersPage;
'use client';

import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
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
        'Certifications in cloud platforms preferred'
      ],
      benefits: [
        'Competitive salary: $140,000 - $200,000',
        'Health, dental, and vision insurance',
        '401(k) with company matching',
        'Flexible work arrangements'
      ],
      posted: '1 week ago',
      featured: false
    },
    {
      id: '3',
      title: 'Cybersecurity Specialist',
      department: 'Security',
      location: 'San Francisco, CA',
      type: 'Full-time',
      experience: '4+ years',
      description: 'Protect our clients\' digital assets and infrastructure from cyber threats.',
      requirements: [
        '4+ years experience in cybersecurity',
        'Knowledge of security frameworks (NIST, ISO 27001)',
        'Experience with penetration testing and vulnerability assessment',
        'Certifications like CISSP, CISM preferred',
        'Strong analytical and problem-solving skills'
      ],
      benefits: [
        'Competitive salary: $100,000 - $150,000',
        'Professional development opportunities',
        'Health and wellness programs',
        'Remote work options'
      ],
      posted: '3 days ago',
      featured: true
    },
    {
      id: '4',
      title: 'DevOps Engineer',
      department: 'Engineering',
      location: 'Austin, TX',
      type: 'Full-time',
      experience: '3+ years',
      description: 'Streamline our development and deployment processes through automation and best practices.',
      requirements: [
        '3+ years experience in DevOps practices',
        'Proficiency in CI/CD pipelines',
        'Experience with infrastructure as code (Terraform, CloudFormation)',
        'Knowledge of monitoring and logging tools',
        'Strong scripting skills (Bash, Python)'
      ],
      benefits: [
        'Competitive salary: $90,000 - $130,000',
        'Stock options',
        'Flexible PTO policy',
        'Learning and development budget'
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
      description: 'Extract insights from complex datasets to drive business decisions and product development.',
      requirements: [
        '4+ years experience in data science',
        'Proficiency in Python, R, SQL',
        'Experience with machine learning libraries',
        'Strong statistical analysis skills',
        'Experience with big data technologies'
      ],
      benefits: [
        'Competitive salary: $110,000 - $160,000',
        'Remote work flexibility',
        'Health insurance and retirement benefits',
        'Conference and training budget'
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
      description: 'Build intuitive and responsive user interfaces for our web applications.',
      requirements: [
        '3+ years experience in frontend development',
        'Proficiency in React, TypeScript, CSS',
        'Experience with modern build tools and workflows',
        'Understanding of responsive design principles',
        'Experience with testing frameworks'
      ],
      benefits: [
        'Competitive salary: $85,000 - $120,000',
        'Health and dental insurance',
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
      description: 'We strive for excellence in everything we do, delivering high-quality solutions that exceed expectations.'
    },
    {
      icon: <Users className="w-8 h-8 text-blue-600" />,
      title: 'Collaboration',
      description: 'We believe in the power of teamwork and foster an environment where everyone can contribute and grow.'
    },
    {
      icon: <Heart className="w-8 h-8 text-blue-600" />,
      title: 'Passion',
      description: 'We are passionate about technology and its potential to solve real-world problems and create positive impact.'
    },
    {
      icon: <Award className="w-8 h-8 text-blue-600" />,
      title: 'Innovation',
      description: 'We encourage innovation and creative thinking, always looking for new ways to improve and advance.'
    }
  ];

  const benefits = [
    'Competitive salary and equity participation',
    'Comprehensive health, dental, and vision insurance',
    'Flexible remote work options',
    'Professional development and training budget',
    '401(k) with company matching',
    'Unlimited PTO policy',
    'Modern equipment and home office setup',
    'Team building events and company retreats',
    'Mentorship and career growth opportunities',
    'Wellness programs and mental health support'
  ];

    return (
    <div className="min-h-screen bg-gray-50">
      <Helmet>
        <title>Careers - Zion Tech Group</title>
        <meta name="description" content="Join our team of innovative technologists and help shape the future of AI and IT solutions. Explore open positions at Zion Tech Group." />
        <meta name="keywords" content="tech jobs, AI careers, software engineering, cloud computing, cybersecurity, remote work" />
      </Helmet>

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-900 to-purple-900 text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Join Our Team
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-blue-100">
              Build the future of technology with us. We're looking for passionate individuals who want to make a difference.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-blue-900 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors duration-200">
                View Open Positions
              </button>
              <button className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-blue-900 transition-colors duration-200">
                Learn About Our Culture
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Company Values */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-900">Our Values</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {companyValues.map((value, index) => (
              <div key={index} className="text-center">
                <div className="flex justify-center mb-4">
                  {value.icon}
                </div>
                <h3 className="text-xl font-semibold mb-3 text-gray-900">{value.title}</h3>
                <p className="text-gray-600">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Open Positions */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-900">Open Positions</h2>
          <div className="grid lg:grid-cols-2 gap-8">
            {openPositions.map((position) => (
              <div key={position.id} className={`bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-shadow duration-300 ${position.featured ? 'ring-2 ring-blue-500' : ''}`}>
                {position.featured && (
                  <div className="flex items-center mb-4">
                    <Star className="w-5 h-5 text-yellow-500 mr-2" />
                    <span className="text-sm font-medium text-yellow-600">Featured Position</span>
                  </div>
                )}
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">{position.title}</h3>
                    <p className="text-gray-600 mb-2">{position.department}</p>
                  </div>
                  <div className="text-right">
                    <div className="flex items-center text-gray-500 mb-1">
                      <MapPin className="w-4 h-4 mr-1" />
                      {position.location}
                    </div>
                    <div className="flex items-center text-gray-500 mb-1">
                      <Clock className="w-4 h-4 mr-1" />
                      {position.type}
                    </div>
                    <div className="flex items-center text-gray-500">
                      <Briefcase className="w-4 h-4 mr-1" />
                      {position.experience}
                    </div>
                  </div>
                </div>
                <p className="text-gray-600 mb-6">{position.description}</p>
                <div className="mb-6">
                  <h4 className="font-semibold text-gray-900 mb-3">Key Requirements:</h4>
                  <ul className="space-y-2">
                    {position.requirements.slice(0, 3).map((req, index) => (
                      <li key={index} className="flex items-start">
                        <CheckCircle className="w-5 h-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                        <span className="text-gray-600">{req}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-500">Posted {position.posted}</span>
                  <button className="flex items-center text-blue-600 hover:text-blue-800 font-medium">
                    Apply Now
                    <ArrowRight className="w-4 h-4 ml-1" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-900">Benefits & Perks</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {benefits.map((benefit, index) => (
              <div key={index} className="flex items-start">
                <CheckCircle className="w-6 h-6 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                <span className="text-gray-700">{benefit}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-blue-900 to-purple-900 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to Join Us?</h2>
          <p className="text-xl mb-8 text-blue-100">
            Don't see a position that fits? We're always looking for talented individuals to join our team.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-blue-900 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors duration-200">
              Send Us Your Resume
            </button>
            <button className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-blue-900 transition-colors duration-200">
              Learn More About Us
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CareersPage;
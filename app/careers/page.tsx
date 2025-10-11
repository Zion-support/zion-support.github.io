'use client';

import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { Star, Users, Heart, Award, MapPin, Clock, Briefcase, CheckCircle, ArrowRight, GraduationCap, Zap } from 'lucide-react';

interface JobPosition {
  id: string;
  title: string;
  department: string;
  location: string;
  type: 'Full-time' | 'Part-time' | 'Contract' | 'Remote';
  experience: string;
  description: string;
  requirements: string[];
  benefits: string[];
  salary: string;
  postedDate: string;
  featured: boolean;
}

const CareersPage: React.FC = () => {
  const jobPositions: JobPosition[] = [
    {
      id: '1',
      title: 'Senior AI Engineer',
      department: 'AI & Machine Learning',
      location: 'Remote / New York',
      type: 'Full-time',
      experience: '5+ years',
      description: 'Lead the development of cutting-edge AI solutions and machine learning models that drive business innovation.',
      requirements: [
        'Master\'s degree in Computer Science, AI, or related field',
        '5+ years of experience in machine learning and AI development',
        'Proficiency in Python, TensorFlow, PyTorch',
        'Experience with cloud platforms (AWS, Azure, GCP)',
        'Strong problem-solving and analytical skills'
      ],
      benefits: [
        'Competitive salary and equity',
        'Health, dental, and vision insurance',
        'Flexible work arrangements',
        'Professional development budget',
        '401(k) with company matching'
      ],
      salary: '$120,000 - $180,000',
      postedDate: '2024-01-15',
      featured: true
    },
    {
      id: '2',
      title: 'Cloud Solutions Architect',
      department: 'Cloud Infrastructure',
      location: 'San Francisco, CA',
      type: 'Full-time',
      experience: '7+ years',
      description: 'Design and implement scalable cloud solutions for enterprise clients using modern cloud technologies.',
      requirements: [
        'Bachelor\'s degree in Computer Science or related field',
        '7+ years of cloud architecture experience',
        'Expert knowledge of AWS, Azure, and GCP',
        'Experience with containerization (Docker, Kubernetes)',
        'Strong communication and client-facing skills'
      ],
      benefits: [
        'Competitive salary and bonus',
        'Comprehensive health benefits',
        'Remote work options',
        'Learning and development opportunities',
        'Stock options'
      ],
      salary: '$140,000 - $200,000',
      postedDate: '2024-01-12',
      featured: true
    },
    {
      id: '3',
      title: 'Cybersecurity Specialist',
      department: 'Security',
      location: 'Remote / Austin, TX',
      type: 'Full-time',
      experience: '4+ years',
      description: 'Protect our clients\' digital assets by implementing comprehensive security solutions and monitoring systems.',
      requirements: [
        'Bachelor\'s degree in Cybersecurity or related field',
        '4+ years of cybersecurity experience',
        'Certifications: CISSP, CISM, or equivalent',
        'Experience with SIEM tools and incident response',
        'Knowledge of compliance frameworks (SOC 2, ISO 27001)'
      ],
      benefits: [
        'Competitive salary',
        'Health and wellness benefits',
        'Flexible schedule',
        'Security training and certifications',
        '401(k) matching'
      ],
      salary: '$90,000 - $130,000',
      postedDate: '2024-01-10',
      featured: false
    },
    {
      id: '4',
      title: 'Full Stack Developer',
      department: 'Web Development',
      location: 'Remote',
      type: 'Full-time',
      experience: '3+ years',
      description: 'Build modern web applications using React, Node.js, and cloud technologies.',
      requirements: [
        'Bachelor\'s degree in Computer Science or related field',
        '3+ years of full-stack development experience',
        'Proficiency in React, Node.js, TypeScript',
        'Experience with databases (PostgreSQL, MongoDB)',
        'Knowledge of DevOps practices'
      ],
      benefits: [
        'Competitive salary',
        'Health insurance',
        'Remote work',
        'Professional development',
        'Flexible PTO'
      ],
      salary: '$80,000 - $120,000',
      postedDate: '2024-01-08',
      featured: false
    },
    {
      id: '5',
      title: 'Data Scientist',
      department: 'Data Analytics',
      location: 'New York, NY',
      type: 'Full-time',
      experience: '4+ years',
      description: 'Extract insights from complex data sets to drive business decisions and product development.',
      requirements: [
        'Master\'s degree in Data Science, Statistics, or related field',
        '4+ years of data science experience',
        'Proficiency in Python, R, SQL',
        'Experience with machine learning libraries',
        'Strong statistical and analytical skills'
      ],
      benefits: [
        'Competitive salary and equity',
        'Health benefits',
        'Data science conference attendance',
        'Research opportunities',
        '401(k) matching'
      ],
      salary: '$100,000 - $150,000',
      postedDate: '2024-01-05',
      featured: false
    },
    {
      id: '6',
      title: 'DevOps Engineer',
      department: 'Infrastructure',
      location: 'Remote / Seattle, WA',
      type: 'Full-time',
      experience: '5+ years',
      description: 'Automate deployment processes and maintain scalable infrastructure for our growing platform.',
      requirements: [
        'Bachelor\'s degree in Computer Science or related field',
        '5+ years of DevOps experience',
        'Experience with CI/CD pipelines',
        'Knowledge of containerization and orchestration',
        'Scripting skills (Bash, Python)'
      ],
      benefits: [
        'Competitive salary',
        'Health and dental insurance',
        'Remote work flexibility',
        'Professional development',
        'Stock options'
      ],
      salary: '$110,000 - $160,000',
      postedDate: '2024-01-03',
      featured: false
    }
  ];

  const companyValues = [
    {
      icon: Star,
      title: 'Innovation First',
      description: 'We encourage creative thinking and cutting-edge solutions that push the boundaries of technology.'
    },
    {
      icon: Users,
      title: 'Collaborative Culture',
      description: 'We believe in the power of teamwork and foster an inclusive environment where everyone can thrive.'
    },
    {
      icon: Heart,
      title: 'Work-Life Balance',
      description: 'We support our team members with flexible schedules and comprehensive wellness programs.'
    },
    {
      icon: Award,
      title: 'Growth Opportunities',
      description: 'We invest in our people with continuous learning, mentorship, and career advancement programs.'
    }
  ];

  const benefits = [
    'Competitive salary and equity packages',
    'Comprehensive health, dental, and vision insurance',
    'Flexible work arrangements and remote options',
    'Professional development and training budget',
    '401(k) with company matching',
    'Unlimited PTO and paid holidays',
    'Stock options for all employees',
    'Modern office spaces with top-tier equipment',
    'Team building events and company retreats',
    'Mentorship and career development programs'
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Helmet>
        <title>Careers - Zion Tech Group | Join Our Team</title>
        <meta name="description" content="Join our team of innovative AI and IT professionals. Explore career opportunities at Zion Tech Group and help shape the future of technology." />
        <meta name="keywords" content="careers, jobs, AI engineer, cloud architect, cybersecurity, web developer, data scientist, DevOps" />
        <meta property="og:title" content="Careers - Zion Tech Group" />
        <meta property="og:description" content="Join our team of innovative AI and IT professionals" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://ziontechgroup.com/careers" />
      </Helmet>

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-900 to-purple-900 text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Join Our <span className="text-cyan-400">Team</span>
            </h1>
            <p className="text-xl mb-8 text-gray-300">
              Be part of a team that's shaping the future of AI and IT technology. 
              Work on cutting-edge projects with industry leaders and grow your career with us.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                to="#open-positions" 
                className="bg-cyan-500 hover:bg-cyan-600 text-white px-8 py-4 rounded-lg font-semibold transition-colors duration-300 inline-flex items-center justify-center"
              >
                View Open Positions
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
              <Link 
                to="/contact" 
                className="border border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-white px-8 py-4 rounded-lg font-semibold transition-colors duration-300"
              >
                Contact Us
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Company Values */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Why Work With Us?
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                We're building a culture where innovation thrives, collaboration flourishes, and every team member can make a meaningful impact.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {companyValues.map((value, index) => (
                <div key={index} className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-2xl flex items-center justify-center mx-auto mb-4">
                    <value.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{value.title}</h3>
                  <p className="text-gray-600">{value.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 bg-gray-100">
        <div className="container mx-auto px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Perks & Benefits
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                We offer comprehensive benefits and perks to support our team members' well-being and professional growth.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-center bg-white rounded-lg p-4 shadow-sm">
                  <CheckCircle className="w-5 h-5 text-green-500 mr-3 flex-shrink-0" />
                  <span className="text-gray-700">{benefit}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Open Positions */}
      <section id="open-positions" className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Open Positions
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Explore our current job openings and find the perfect role to advance your career in AI and IT.
              </p>
            </div>
            <div className="space-y-6">
              {jobPositions.map((job) => (
                <div key={job.id} className={`bg-white rounded-2xl shadow-lg p-8 hover:shadow-xl transition-shadow duration-300 ${job.featured ? 'ring-2 ring-cyan-500' : ''}`}>
                  {job.featured && (
                    <div className="flex items-center mb-4">
                      <Star className="w-5 h-5 text-yellow-500 mr-2" />
                      <span className="text-yellow-600 font-semibold">Featured Position</span>
                    </div>
                  )}
                  <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-6">
                    <div className="flex-1">
                      <h3 className="text-2xl font-bold text-gray-900 mb-2">{job.title}</h3>
                      <div className="flex flex-wrap items-center gap-4 text-sm text-gray-600 mb-4">
                        <div className="flex items-center">
                          <Briefcase className="w-4 h-4 mr-2" />
                          <span>{job.department}</span>
                        </div>
                        <div className="flex items-center">
                          <MapPin className="w-4 h-4 mr-2" />
                          <span>{job.location}</span>
                        </div>
                        <div className="flex items-center">
                          <Clock className="w-4 h-4 mr-2" />
                          <span>{job.type}</span>
                        </div>
                        <div className="flex items-center">
                          <GraduationCap className="w-4 h-4 mr-2" />
                          <span>{job.experience}</span>
                        </div>
                      </div>
                      <p className="text-gray-700 mb-4">{job.description}</p>
                      <div className="flex items-center justify-between">
                        <div className="text-lg font-semibold text-cyan-600">{job.salary}</div>
                        <div className="text-sm text-gray-500">Posted {new Date(job.postedDate).toLocaleDateString()}</div>
                      </div>
                    </div>
                    <div className="mt-6 lg:mt-0 lg:ml-6">
                      <Link 
                        to={`/careers/${job.id}`}
                        className="bg-cyan-500 hover:bg-cyan-600 text-white px-6 py-3 rounded-lg font-medium transition-colors duration-300 inline-flex items-center"
                      >
                        Apply Now
                        <ArrowRight className="w-4 h-4 ml-2" />
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-blue-900 to-purple-900 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Don't See Your Perfect Role?
          </h2>
          <p className="text-xl mb-8 text-gray-300 max-w-3xl mx-auto">
            We're always looking for talented individuals to join our team. 
            Send us your resume and let us know how you'd like to contribute to our mission.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              to="/contact" 
              className="bg-cyan-500 hover:bg-cyan-600 text-white px-8 py-4 rounded-lg font-semibold transition-colors duration-300 inline-flex items-center justify-center"
            >
              <Zap className="w-5 h-5 mr-2" />
              Send Us Your Resume
            </Link>
            <Link 
              to="/about" 
              className="border border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-white px-8 py-4 rounded-lg font-semibold transition-colors duration-300"
            >
              Learn More About Us
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CareersPage;
'use client';

import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { MapPin, Clock, Users, ArrowRight, CheckCircle, Star, Award, Briefcase } from 'lucide-react';

interface JobOpening {
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
  const [selectedDepartment, setSelectedDepartment] = useState('all');
  const [selectedLocation, setSelectedLocation] = useState('all');
  const [selectedType, setSelectedType] = useState('all');

  const jobOpenings: JobOpening[] = [
    {
      id: '1',
      title: 'Senior AI Engineer',
      department: 'Engineering',
      location: 'Remote',
      type: 'Full-time',
      experience: '5+ years',
      description: 'Lead the development of cutting-edge AI solutions and machine learning models for enterprise clients.',
      requirements: [
        'Master\'s degree in Computer Science or related field',
        '5+ years experience in AI/ML development',
        'Proficiency in Python, TensorFlow, PyTorch',
        'Experience with cloud platforms (AWS, GCP, Azure)',
        'Strong problem-solving and communication skills'
      ],
      benefits: [
        'Competitive salary and equity',
        'Health, dental, and vision insurance',
        'Flexible work arrangements',
        'Professional development budget',
        '401(k) with company matching'
      ],
      posted: '2024-01-15',
      featured: true
    },
    {
      id: '2',
      title: 'Cloud Solutions Architect',
      department: 'Engineering',
      location: 'San Francisco, CA',
      type: 'Full-time',
      experience: '7+ years',
      description: 'Design and implement scalable cloud infrastructure solutions for enterprise clients.',
      requirements: [
        'Bachelor\'s degree in Computer Science or related field',
        '7+ years experience in cloud architecture',
        'Certifications in AWS, Azure, or GCP',
        'Experience with DevOps and CI/CD',
        'Strong leadership and mentoring skills'
      ],
      benefits: [
        'Competitive salary and equity',
        'Health, dental, and vision insurance',
        'Flexible work arrangements',
        'Professional development budget',
        '401(k) with company matching'
      ],
      posted: '2024-01-12',
      featured: true
    },
    {
      id: '3',
      title: 'Cybersecurity Specialist',
      department: 'Security',
      location: 'New York, NY',
      type: 'Full-time',
      experience: '4+ years',
      description: 'Protect our clients\' digital assets and infrastructure from cyber threats.',
      requirements: [
        'Bachelor\'s degree in Cybersecurity or related field',
        '4+ years experience in cybersecurity',
        'Certifications in CISSP, CISM, or similar',
        'Experience with security tools and frameworks',
        'Strong analytical and problem-solving skills'
      ],
      benefits: [
        'Competitive salary and equity',
        'Health, dental, and vision insurance',
        'Flexible work arrangements',
        'Professional development budget',
        '401(k) with company matching'
      ],
      posted: '2024-01-10',
      featured: false
    },
    {
      id: '4',
      title: 'Product Manager',
      department: 'Product',
      location: 'Remote',
      type: 'Full-time',
      experience: '5+ years',
      description: 'Drive product strategy and roadmap for our AI and technology solutions.',
      requirements: [
        'Bachelor\'s degree in Business or related field',
        '5+ years experience in product management',
        'Experience with AI/ML products',
        'Strong analytical and communication skills',
        'Experience with agile methodologies'
      ],
      benefits: [
        'Competitive salary and equity',
        'Health, dental, and vision insurance',
        'Flexible work arrangements',
        'Professional development budget',
        '401(k) with company matching'
      ],
      posted: '2024-01-08',
      featured: false
    },
    {
      id: '5',
      title: 'UX/UI Designer',
      department: 'Design',
      location: 'Austin, TX',
      type: 'Full-time',
      experience: '3+ years',
      description: 'Create intuitive and engaging user experiences for our technology solutions.',
      requirements: [
        'Bachelor\'s degree in Design or related field',
        '3+ years experience in UX/UI design',
        'Proficiency in Figma, Sketch, or similar tools',
        'Experience with design systems',
        'Strong portfolio demonstrating user-centered design'
      ],
      benefits: [
        'Competitive salary and equity',
        'Health, dental, and vision insurance',
        'Flexible work arrangements',
        'Professional development budget',
        '401(k) with company matching'
      ],
      posted: '2024-01-05',
      featured: false
    },
    {
      id: '6',
      title: 'Sales Engineer',
      department: 'Sales',
      location: 'Chicago, IL',
      type: 'Full-time',
      experience: '4+ years',
      description: 'Support sales efforts by providing technical expertise and demonstrations.',
      requirements: [
        'Bachelor\'s degree in Engineering or related field',
        '4+ years experience in technical sales',
        'Experience with enterprise software',
        'Strong presentation and communication skills',
        'Ability to travel as needed'
      ],
      benefits: [
        'Competitive salary and equity',
        'Health, dental, and vision insurance',
        'Flexible work arrangements',
        'Professional development budget',
        '401(k) with company matching'
      ],
      posted: '2024-01-03',
      featured: false
    }
  ];

  const departments = ['all', 'Engineering', 'Security', 'Product', 'Design', 'Sales'];
  const locations = ['all', 'Remote', 'San Francisco, CA', 'New York, NY', 'Austin, TX', 'Chicago, IL'];
  const types = ['all', 'Full-time', 'Part-time', 'Contract'];

  const filteredJobs = jobOpenings.filter(job => {
    const departmentMatch = selectedDepartment === 'all' || job.department === selectedDepartment;
    const locationMatch = selectedLocation === 'all' || job.location === selectedLocation;
    const typeMatch = selectedType === 'all' || job.type === selectedType;
    return departmentMatch && locationMatch && typeMatch;
  });

  const featuredJobs = jobOpenings.filter(job => job.featured);

  return (
    <div className="min-h-screen bg-gray-50">
      <Helmet>
        <title>Careers - Zion Tech Group | Join Our Team</title>
        <meta name="description" content="Join Zion Tech Group and be part of a team that's shaping the future of technology. Explore career opportunities in AI, cloud computing, cybersecurity, and more." />
        <meta name="keywords" content="careers, jobs, AI engineer, cloud architect, cybersecurity, product manager, UX designer, technology careers" />
      </Helmet>

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-purple-700 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Join Our Team
            </h1>
            <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto">
              Be part of a team that's shaping the future of technology. We're looking for passionate individuals who want to make a difference.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors inline-flex items-center"
              >
                Get in Touch
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
              <Link
                to="#openings"
                className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors"
              >
                View Openings
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Why Work With Us */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Why Work With Us?</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We offer more than just a job - we offer a career path with growth opportunities, competitive benefits, and a supportive work environment.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Star className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Innovation</h3>
              <p className="text-gray-600">Work on cutting-edge projects that push the boundaries of technology.</p>
            </div>

            <div className="text-center">
              <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="h-8 w-8 text-green-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Collaboration</h3>
              <p className="text-gray-600">Join a diverse team of experts who support and learn from each other.</p>
            </div>

            <div className="text-center">
              <div className="bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Award className="h-8 w-8 text-purple-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Growth</h3>
              <p className="text-gray-600">Access to professional development opportunities and career advancement.</p>
            </div>

            <div className="text-center">
              <div className="bg-orange-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Briefcase className="h-8 w-8 text-orange-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Flexibility</h3>
              <p className="text-gray-600">Work-life balance with flexible schedules and remote work options.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Benefits & Perks</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We believe in taking care of our team members with comprehensive benefits and perks.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Health & Wellness</h3>
              <ul className="space-y-2">
                <li className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-2" />
                  <span>Comprehensive health insurance</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-2" />
                  <span>Dental and vision coverage</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-2" />
                  <span>Mental health support</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-2" />
                  <span>Gym membership reimbursement</span>
                </li>
              </ul>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Financial</h3>
              <ul className="space-y-2">
                <li className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-2" />
                  <span>Competitive salary</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-2" />
                  <span>Equity participation</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-2" />
                  <span>401(k) with company matching</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-2" />
                  <span>Performance bonuses</span>
                </li>
              </ul>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Professional Development</h3>
              <ul className="space-y-2">
                <li className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-2" />
                  <span>Learning budget</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-2" />
                  <span>Conference attendance</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-2" />
                  <span>Certification support</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-2" />
                  <span>Mentorship programs</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Job Openings */}
      <section id="openings" className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Current Openings</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Explore our current job openings and find the perfect role for you.
            </p>
          </div>

          {/* Filters */}
          <div className="flex flex-col lg:flex-row gap-4 mb-8">
            <div className="flex-1">
              <select
                value={selectedDepartment}
                onChange={(e) => setSelectedDepartment(e.target.value)}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              >
                <option value="all">All Departments</option>
                {departments.slice(1).map(dept => (
                  <option key={dept} value={dept}>{dept}</option>
                ))}
              </select>
            </div>
            <div className="flex-1">
              <select
                value={selectedLocation}
                onChange={(e) => setSelectedLocation(e.target.value)}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              >
                <option value="all">All Locations</option>
                {locations.slice(1).map(location => (
                  <option key={location} value={location}>{location}</option>
                ))}
              </select>
            </div>
            <div className="flex-1">
              <select
                value={selectedType}
                onChange={(e) => setSelectedType(e.target.value)}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              >
                <option value="all">All Types</option>
                {types.slice(1).map(type => (
                  <option key={type} value={type}>{type}</option>
                ))}
              </select>
            </div>
          </div>

          {/* Featured Jobs */}
          {featuredJobs.length > 0 && (
            <div className="mb-12">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Featured Positions</h3>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                {featuredJobs.map((job) => (
                  <div key={job.id} className="bg-gradient-to-r from-blue-50 to-purple-50 p-6 rounded-lg border border-blue-200">
                    <div className="flex items-start justify-between mb-4">
                      <div>
                        <h4 className="text-xl font-semibold text-gray-900">{job.title}</h4>
                        <p className="text-gray-600">{job.department}</p>
                      </div>
                      <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium">
                        Featured
                      </span>
                    </div>
                    <div className="flex items-center text-sm text-gray-500 mb-4">
                      <MapPin className="h-4 w-4 mr-1" />
                      <span className="mr-4">{job.location}</span>
                      <Clock className="h-4 w-4 mr-1" />
                      <span className="mr-4">{job.type}</span>
                      <Users className="h-4 w-4 mr-1" />
                      <span>{job.experience}</span>
                    </div>
                    <p className="text-gray-600 mb-4">{job.description}</p>
                    <Link
                      to={`/careers/${job.id}`}
                      className="text-blue-600 hover:text-blue-800 font-semibold inline-flex items-center"
                    >
                      View Details
                      <ArrowRight className="ml-1 h-4 w-4" />
                    </Link>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* All Jobs */}
          <div className="space-y-6">
            {filteredJobs.map((job) => (
              <div key={job.id} className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h4 className="text-xl font-semibold text-gray-900">{job.title}</h4>
                    <p className="text-gray-600">{job.department}</p>
                  </div>
                  <span className="text-sm text-gray-500">Posted {job.posted}</span>
                </div>
                <div className="flex items-center text-sm text-gray-500 mb-4">
                  <MapPin className="h-4 w-4 mr-1" />
                  <span className="mr-4">{job.location}</span>
                  <Clock className="h-4 w-4 mr-1" />
                  <span className="mr-4">{job.type}</span>
                  <Users className="h-4 w-4 mr-1" />
                  <span>{job.experience}</span>
                </div>
                <p className="text-gray-600 mb-4">{job.description}</p>
                <div className="flex items-center justify-between">
                  <div className="flex flex-wrap gap-2">
                    {job.requirements.slice(0, 3).map((req, index) => (
                      <span
                        key={index}
                        className="bg-gray-100 text-gray-700 px-2 py-1 rounded text-sm"
                      >
                        {req}
                      </span>
                    ))}
                    {job.requirements.length > 3 && (
                      <span className="text-gray-500 text-sm">
                        +{job.requirements.length - 3} more
                      </span>
                    )}
                  </div>
                  <Link
                    to={`/careers/${job.id}`}
                    className="text-blue-600 hover:text-blue-800 font-semibold inline-flex items-center"
                  >
                    View Details
                    <ArrowRight className="ml-1 h-4 w-4" />
                  </Link>
                </div>
              </div>
            ))}
          </div>

          {filteredJobs.length === 0 && (
            <div className="text-center py-12">
              <Briefcase className="h-16 w-16 text-gray-400 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-gray-900 mb-2">No positions found</h3>
              <p className="text-gray-600">Try adjusting your filters or check back later for new openings.</p>
            </div>
          )}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-blue-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Don't See the Right Role?
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            We're always looking for talented individuals. Send us your resume and we'll keep you in mind for future opportunities.
          </p>
          <Link
            to="/contact"
            className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors inline-flex items-center"
          >
            Send Your Resume
            <ArrowRight className="ml-2 h-5 w-5" />
          </Link>
        </div>
      </section>
    </div>
  );
};

export default CareersPage;

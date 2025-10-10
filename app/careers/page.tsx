'use client';

import React, { useState } from 'react';
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
  const [selectedDepartment, setSelectedDepartment] = useState('all');
  const [selectedLocation, setSelectedLocation] = useState('all');

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
        'Python, TensorFlow, PyTorch',
        '5+ years ML experience',
        'PhD in Computer Science or related field',
        'Experience with cloud platforms'
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
        'AWS, Azure, GCP',
        '7+ years cloud experience',
        'Architecture certifications',
        'Kubernetes expertise'
      ],
      benefits: [
        'Competitive salary: $130,000 - $200,000',
        'Health insurance',
        '401k matching',
        'Flexible PTO'
      ],
      posted: '1 week ago',
      featured: false
    },
    {
      id: '3',
      title: 'Data Scientist',
      department: 'Analytics',
      location: 'San Francisco, CA',
      type: 'Full-time',
      experience: '3+ years',
      description: 'Analyze complex datasets and build predictive models to drive business insights.',
      requirements: [
        'Python, R, SQL',
        '3+ years data science experience',
        'Machine learning expertise',
        'Statistics background'
      ],
      benefits: [
        'Competitive salary: $100,000 - $150,000',
        'Stock options',
        'Learning budget',
        'Health benefits'
      ],
      posted: '3 days ago',
      featured: true
    }
  ];

  const departments = ['all', 'AI Solutions', 'Cloud Services', 'Analytics', 'Engineering', 'Design'];
  const locations = ['all', 'Remote', 'New York, NY', 'San Francisco, CA', 'Austin, TX', 'Seattle, WA'];

  const filteredPositions = openPositions.filter(position => {
    const matchesDepartment = selectedDepartment === 'all' || position.department === selectedDepartment;
    const matchesLocation = selectedLocation === 'all' || position.location === selectedLocation;
    return matchesDepartment && matchesLocation;
  });

  const benefits = [
    'Competitive salary packages',
    'Equity participation',
    'Health, dental, and vision insurance',
    '401(k) with company matching',
    'Unlimited PTO',
    'Professional development budget',
    'Top-tier equipment and tools',
    'Team building events',
    'Career growth opportunities',
    'Mental health support',
    'Remote work options'
  ];

  const values = [
    {
      icon: Zap,
      title: 'Innovation',
      description: 'We push boundaries and explore new possibilities in AI and technology.'
    },
    {
      icon: Users,
      title: 'Collaboration',
      description: 'We believe in the power of teamwork and diverse perspectives.'
    },
    {
      icon: Heart,
      title: 'Impact',
      description: 'We create solutions that make a real difference in the world.'
    },
    {
      icon: Award,
      title: 'Excellence',
      description: 'We strive for the highest standards in everything we do.'
    }
  ];

  return (
    <>
      <Helmet>
        <title>Careers - Zion Tech Group | Join Our Team</title>
        <meta name="description" content="Join Zion Tech Group and help shape the future of AI and IT solutions. Explore open positions and discover why we're a great place to work." />
        <meta name="keywords" content="careers, jobs, AI engineer, cloud architect, data scientist, tech jobs, remote work" />
      </Helmet>

      <div className="min-h-screen bg-gray-50">
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-blue-600 to-purple-700 text-white py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h1 className="text-4xl md:text-6xl font-bold mb-6">
                Join Our Team
              </h1>
              <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto">
                Help us build the future of AI and IT solutions. Be part of a team that's transforming industries and creating meaningful impact.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  to="#open-positions"
                  className="bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
                >
                  View Open Positions
                </Link>
                <Link
                  to="/contact"
                  className="border border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white/10 transition-colors"
                >
                  Contact Us
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Company Values */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Values</h2>
              <p className="text-xl text-gray-600">What drives us every day</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {values.map((value, index) => (
                <div key={index} className="text-center p-6">
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-100 rounded-full mb-4">
                    <value.icon className="w-8 h-8 text-blue-600" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">{value.title}</h3>
                  <p className="text-gray-600">{value.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Benefits */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Why Work With Us</h2>
              <p className="text-xl text-gray-600">We offer comprehensive benefits and a great work environment</p>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-center p-4 bg-white rounded-lg shadow-sm">
                  <CheckCircle className="w-5 h-5 text-green-500 mr-3 flex-shrink-0" />
                  <span className="text-gray-700">{benefit}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Open Positions */}
        <section id="open-positions" className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Open Positions</h2>
              <p className="text-xl text-gray-600">Find your next opportunity</p>
            </div>

            {/* Filters */}
            <div className="flex flex-wrap justify-center gap-4 mb-8">
              <select
                value={selectedDepartment}
                onChange={(e) => setSelectedDepartment(e.target.value)}
                className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                <option value="all">All Departments</option>
                {departments.slice(1).map(dept => (
                  <option key={dept} value={dept}>{dept}</option>
                ))}
              </select>
              <select
                value={selectedLocation}
                onChange={(e) => setSelectedLocation(e.target.value)}
                className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                <option value="all">All Locations</option>
                {locations.slice(1).map(loc => (
                  <option key={loc} value={loc}>{loc}</option>
                ))}
              </select>
            </div>

            {/* Job Listings */}
            <div className="space-y-6">
              {filteredPositions.map((position) => (
                <div key={position.id} className={`p-6 rounded-lg border-2 transition-all hover:shadow-lg ${
                  position.featured ? 'border-blue-500 bg-blue-50' : 'border-gray-200 bg-white'
                }`}>
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                    <div>
                      <div className="flex items-center mb-2">
                        <h3 className="text-xl font-bold text-gray-900">{position.title}</h3>
                        {position.featured && (
                          <span className="ml-2 bg-blue-100 text-blue-800 text-xs font-semibold px-2 py-1 rounded-full">
                            Featured
                          </span>
                        )}
                      </div>
                      <div className="flex flex-wrap items-center gap-4 text-sm text-gray-600">
                        <div className="flex items-center">
                          <Briefcase className="w-4 h-4 mr-1" />
                          <span>{position.department}</span>
                        </div>
                        <div className="flex items-center">
                          <MapPin className="w-4 h-4 mr-1" />
                          <span>{position.location}</span>
                        </div>
                        <div className="flex items-center">
                          <Clock className="w-4 h-4 mr-1" />
                          <span>{position.type}</span>
                        </div>
                        <div className="flex items-center">
                          <GraduationCap className="w-4 h-4 mr-1" />
                          <span>{position.experience}</span>
                        </div>
                      </div>
                    </div>
                    <div className="mt-4 md:mt-0">
                      <span className="text-sm text-gray-500">Posted {position.posted}</span>
                    </div>
                  </div>
                  
                  <p className="text-gray-600 mb-4">{position.description}</p>
                  
                  <div className="grid md:grid-cols-2 gap-6 mb-4">
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-2">Requirements:</h4>
                      <ul className="space-y-1">
                        {position.requirements.map((req, index) => (
                          <li key={index} className="flex items-center text-sm text-gray-600">
                            <CheckCircle className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
                            {req}
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-2">Benefits:</h4>
                      <ul className="space-y-1">
                        {position.benefits.map((benefit, index) => (
                          <li key={index} className="flex items-center text-sm text-gray-600">
                            <Star className="w-4 h-4 text-yellow-500 mr-2 flex-shrink-0" />
                            {benefit}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                  
                  <div className="flex flex-col sm:flex-row gap-4">
                    <Link
                      to="/contact"
                      className="bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors flex items-center justify-center"
                    >
                      Apply Now
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </Link>
                    <button className="border border-gray-300 text-gray-700 px-6 py-3 rounded-lg font-semibold hover:bg-gray-50 transition-colors">
                      Save Job
                    </button>
                  </div>
                </div>
              ))}
            </div>

            {filteredPositions.length === 0 && (
              <div className="text-center py-12">
                <Briefcase className="w-16 h-16 text-gray-400 mx-auto mb-4" />
                <p className="text-gray-500 text-lg">No positions found matching your criteria.</p>
              </div>
            )}
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-gradient-to-r from-blue-600 to-purple-700 text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-bold mb-4">
              Don't See the Right Role?
            </h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto">
              We're always looking for talented individuals. Send us your resume and let us know how you'd like to contribute.
            </p>
            <Link
              to="/contact"
              className="bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors inline-flex items-center"
            >
              Send Your Resume
              <ArrowRight className="w-4 h-4 ml-2" />
            </Link>
          </div>
        </section>
      </div>
    </>
  );
};

export default CareersPage;
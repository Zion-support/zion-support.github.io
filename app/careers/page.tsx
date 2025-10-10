'use client';
import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { MapPin, Clock, Users, ArrowRight, CheckCircle, Star, Award, Briefcase } from 'lucide-react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

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
  featured: boolean;
}

const CareersPage: React.FC = () => {
  const [selectedDepartment, setSelectedDepartment] = useState('all');
  const [selectedLocation, setSelectedLocation] = useState('all');

  const positions: JobPosition[] = [
    {
      id: '1',
      title: 'Senior AI Engineer',
      department: 'AI Solutions',
      location: 'Remote',
      type: 'Full-time',
      experience: '5+ years',
      description: 'Lead the development of cutting-edge AI solutions and machine learning models.',
      requirements: [
        'Master\'s degree in Computer Science or related field',
        '5+ years experience in machine learning',
        'Proficiency in Python, TensorFlow, PyTorch',
        'Experience with cloud platforms (AWS, Azure, GCP)'
      ],
      benefits: [
        'Competitive salary',
        'Health insurance',
        'Remote work flexibility',
        'Professional development budget'
      ],
      featured: true
    },
    {
      id: '2',
      title: 'Cloud Solutions Architect',
      department: 'Cloud Services',
      location: 'New York, NY',
      type: 'Full-time',
      experience: '7+ years',
      description: 'Design and implement scalable cloud infrastructure solutions for enterprise clients.',
      requirements: [
        'Bachelor\'s degree in Computer Science',
        '7+ years cloud architecture experience',
        'AWS/Azure/GCP certifications preferred',
        'Strong communication skills'
      ],
      benefits: [
        'Competitive salary',
        'Health insurance',
        '401k matching',
        'Flexible PTO'
      ],
      featured: true
    },
    {
      id: '3',
      title: 'Cybersecurity Specialist',
      department: 'Security',
      location: 'Remote',
      type: 'Full-time',
      experience: '3+ years',
      description: 'Protect our clients\' digital assets with advanced security solutions.',
      requirements: [
        'Bachelor\'s degree in Cybersecurity',
        '3+ years security experience',
        'CISSP or similar certification',
        'Knowledge of security frameworks'
      ],
      benefits: [
        'Competitive salary',
        'Health insurance',
        'Remote work',
        'Security training budget'
      ],
      featured: false
    }
  ];

  const departments = ['all', 'AI Solutions', 'Cloud Services', 'Security', 'Development'];
  const locations = ['all', 'Remote', 'New York, NY', 'San Francisco, CA', 'Austin, TX'];

  const filteredPositions = positions.filter(position => {
    const departmentMatch = selectedDepartment === 'all' || position.department === selectedDepartment;
    const locationMatch = selectedLocation === 'all' || position.location === selectedLocation;
    return departmentMatch && locationMatch;
  });

  const featuredPositions = filteredPositions.filter(position => position.featured);
  const regularPositions = filteredPositions.filter(position => !position.featured);

  return (
    <>
      <Helmet>
        <title>Careers - Zion Tech Group | Join Our Team</title>
        <meta name="description" content="Join Zion Tech Group and be part of a team that's transforming businesses with AI and IT solutions. Explore open positions and career opportunities." />
        <meta name="keywords" content="careers, jobs, employment, AI engineer, cloud architect, cybersecurity, remote work, tech jobs" />
      </Helmet>
      
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        <Navigation />
        
        <main className="flex-1">
          {/* Hero Section */}
          <section className="pt-20 pb-16 px-4">
            <div className="max-w-7xl mx-auto text-center">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6">
                Join Our Team
              </h1>
              <p className="text-xl sm:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto">
                Be part of a team that's transforming businesses with cutting-edge AI and IT solutions
              </p>
            </div>
          </section>

          {/* Why Work With Us */}
          <section className="py-16 px-4">
            <div className="max-w-7xl mx-auto">
              <h2 className="text-3xl sm:text-4xl font-bold text-white text-center mb-12">
                Why Work With Us?
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                <div className="text-center">
                  <Star className="w-12 h-12 text-blue-400 mx-auto mb-4" />
                  <h3 className="text-xl font-semibold text-white mb-2">Innovation</h3>
                  <p className="text-gray-300">Work on cutting-edge projects that shape the future</p>
                </div>
                <div className="text-center">
                  <Users className="w-12 h-12 text-blue-400 mx-auto mb-4" />
                  <h3 className="text-xl font-semibold text-white mb-2">Great Team</h3>
                  <p className="text-gray-300">Collaborate with talented and passionate professionals</p>
                </div>
                <div className="text-center">
                  <Award className="w-12 h-12 text-blue-400 mx-auto mb-4" />
                  <h3 className="text-xl font-semibold text-white mb-2">Growth</h3>
                  <p className="text-gray-300">Continuous learning and career development opportunities</p>
                </div>
                <div className="text-center">
                  <Briefcase className="w-12 h-12 text-blue-400 mx-auto mb-4" />
                  <h3 className="text-xl font-semibold text-white mb-2">Flexibility</h3>
                  <p className="text-gray-300">Remote work options and flexible schedules</p>
                </div>
              </div>
            </div>
          </section>

          {/* Job Filters */}
          <section className="py-8 px-4 bg-white/5">
            <div className="max-w-7xl mx-auto">
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <select
                  value={selectedDepartment}
                  onChange={(e) => setSelectedDepartment(e.target.value)}
                  className="px-4 py-2 bg-white/10 border border-white/20 rounded-lg text-white"
                >
                  {departments.map(dept => (
                    <option key={dept} value={dept} className="bg-gray-800">
                      {dept === 'all' ? 'All Departments' : dept}
                    </option>
                  ))}
                </select>
                <select
                  value={selectedLocation}
                  onChange={(e) => setSelectedLocation(e.target.value)}
                  className="px-4 py-2 bg-white/10 border border-white/20 rounded-lg text-white"
                >
                  {locations.map(location => (
                    <option key={location} value={location} className="bg-gray-800">
                      {location === 'all' ? 'All Locations' : location}
                    </option>
                  ))}
                </select>
              </div>
            </div>
          </section>

          {/* Featured Positions */}
          {featuredPositions.length > 0 && (
            <section className="py-16 px-4">
              <div className="max-w-7xl mx-auto">
                <h2 className="text-2xl font-bold text-white mb-8">Featured Positions</h2>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                  {featuredPositions.map((position) => (
                    <div key={position.id} className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border-2 border-blue-500">
                      <div className="flex items-start justify-between mb-4">
                        <div>
                          <h3 className="text-xl font-semibold text-white mb-2">{position.title}</h3>
                          <p className="text-blue-400 font-medium">{position.department}</p>
                        </div>
                        <span className="bg-blue-600 text-white text-xs px-2 py-1 rounded-full">
                          Featured
                        </span>
                      </div>
                      <div className="flex items-center text-sm text-gray-400 mb-4">
                        <MapPin className="w-4 h-4 mr-1" />
                        {position.location}
                        <Clock className="w-4 h-4 ml-4 mr-1" />
                        {position.type}
                        <Users className="w-4 h-4 ml-4 mr-1" />
                        {position.experience}
                      </div>
                      <p className="text-gray-300 mb-4">{position.description}</p>
                      <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg text-sm font-medium transition-colors">
                        Apply Now
                      </button>
                    </div>
                  ))}
                </div>
              </div>
            </section>
          )}

          {/* Regular Positions */}
          <section className="py-16 px-4">
            <div className="max-w-7xl mx-auto">
              <h2 className="text-2xl font-bold text-white mb-8">All Positions</h2>
              <div className="space-y-6">
                {regularPositions.map((position) => (
                  <div key={position.id} className="bg-white/10 backdrop-blur-sm rounded-lg p-6 hover:bg-white/20 transition-all duration-300">
                    <div className="flex items-center justify-between mb-4">
                      <div>
                        <h3 className="text-xl font-semibold text-white mb-1">{position.title}</h3>
                        <p className="text-blue-400 font-medium">{position.department}</p>
                      </div>
                      <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg text-sm font-medium transition-colors flex items-center">
                        Apply
                        <ArrowRight className="w-4 h-4 ml-1" />
                      </button>
                    </div>
                    <div className="flex items-center text-sm text-gray-400 mb-3">
                      <MapPin className="w-4 h-4 mr-1" />
                      {position.location}
                      <Clock className="w-4 h-4 ml-4 mr-1" />
                      {position.type}
                      <Users className="w-4 h-4 ml-4 mr-1" />
                      {position.experience}
                    </div>
                    <p className="text-gray-300">{position.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* CTA Section */}
          <section className="py-16 px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
                Don't See the Right Position?
              </h2>
              <p className="text-xl text-gray-300 mb-8">
                We're always looking for talented individuals. Send us your resume and we'll keep you in mind for future opportunities.
              </p>
              <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors">
                Send Resume
              </button>
            </div>
          </section>
        </main>
        
        <Footer />
      </div>
    </>
  );
};

export default CareersPage;
'use client'
import React, { useState } from 'react'
import Navigation from '../components/Navigation'
import Footer from '../components/Footer'
import { MapPin, Clock, Users, ArrowRight, CheckCircle, Star } from 'lucide-react'

interface JobPosting {
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
  postedDate: string;
}

const CareersPage: React.FC = () => {
  const [selectedDepartment, setSelectedDepartment] = useState('All');

  const jobPostings: JobPosting[] = [
    {
      id: '1',
      title: 'Senior AI Engineer',
      department: 'Engineering',
      location: 'San Francisco, CA',
      type: 'Full-time',
      experience: '5+ years',
      description: 'Lead the development of cutting-edge AI solutions and machine learning models.',
      requirements: [
        'Master\'s degree in Computer Science or related field',
        '5+ years of experience in AI/ML',
        'Proficiency in Python, TensorFlow, PyTorch',
        'Experience with cloud platforms (AWS, GCP, Azure)',
        'Strong problem-solving and communication skills'
      ],
      benefits: [
        'Competitive salary and equity',
        'Health, dental, and vision insurance',
        'Flexible work arrangements',
        'Professional development budget',
        'Unlimited PTO'
      ],
      featured: true,
      postedDate: '2024-01-15'
    },
    {
      id: '2',
      title: 'Cybersecurity Specialist',
      department: 'Security',
      location: 'Remote',
      type: 'Full-time',
      experience: '3+ years',
      description: 'Protect our clients\' systems and data with advanced security solutions.',
      requirements: [
        'Bachelor\'s degree in Cybersecurity or related field',
        '3+ years of security experience',
        'Certifications: CISSP, CISM, or equivalent',
        'Experience with security tools and frameworks',
        'Knowledge of compliance standards'
      ],
      benefits: [
        'Competitive salary',
        'Comprehensive benefits package',
        'Remote work flexibility',
        'Security training and certifications',
        '401k with company matching'
      ],
      featured: false,
      postedDate: '2024-01-10'
    },
    {
      id: '3',
      title: 'Cloud Solutions Architect',
      department: 'Engineering',
      location: 'New York, NY',
      type: 'Full-time',
      experience: '7+ years',
      description: 'Design and implement scalable cloud infrastructure solutions.',
      requirements: [
        'Bachelor\'s degree in Computer Science',
        '7+ years of cloud architecture experience',
        'Expertise in AWS, Azure, or GCP',
        'Experience with containerization and microservices',
        'Strong leadership and mentoring skills'
      ],
      benefits: [
        'Competitive salary and bonus',
        'Health and wellness benefits',
        'Flexible work schedule',
        'Learning and development opportunities',
        'Stock options'
      ],
      featured: false,
      postedDate: '2024-01-05'
    }
  ];

  const departments = ['All', 'Engineering', 'Security', 'Sales', 'Marketing', 'Operations'];

  const filteredJobs = selectedDepartment === 'All' 
    ? jobPostings 
    : jobPostings.filter(job => job.department === selectedDepartment);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-20 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Join Our Team
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Build the future of AI and technology with us. We're looking for passionate individuals to join our growing team.
            </p>
          </div>
        </div>
      </section>

      {/* Why Work With Us Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-white text-center mb-12">Why Work With Us?</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-cyan-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">Collaborative Culture</h3>
              <p className="text-gray-300">Work with talented individuals in a supportive and innovative environment.</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-cyan-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <Star className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">Cutting-Edge Technology</h3>
              <p className="text-gray-300">Work with the latest AI and cloud technologies on exciting projects.</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-cyan-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <CheckCircle className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">Growth Opportunities</h3>
              <p className="text-gray-300">Continuous learning and career development opportunities.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Filter Section */}
      <section className="py-8 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="flex gap-2 overflow-x-auto justify-center">
            {departments.map((department) => (
              <button
                key={department}
                onClick={() => setSelectedDepartment(department)}
                className={`px-6 py-3 rounded-lg whitespace-nowrap transition-all duration-200 ${
                  selectedDepartment === department
                    ? 'bg-cyan-500 text-white'
                    : 'bg-white/10 text-gray-300 hover:bg-white/20'
                }`}
              >
                {department}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Job */}
      {filteredJobs.find(job => job.featured) && (
        <section className="py-8 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-2xl font-bold text-white mb-6">Featured Position</h2>
            {(() => {
              const featuredJob = filteredJobs.find(job => job.featured);
              return featuredJob ? (
                <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20">
                  <div className="flex items-start justify-between mb-6">
                    <div>
                      <h3 className="text-2xl font-bold text-white mb-2">
                        {featuredJob.title}
                      </h3>
                      <div className="flex items-center gap-4 text-sm text-gray-300 mb-4">
                        <div className="flex items-center gap-1">
                          <MapPin className="w-4 h-4" />
                          {featuredJob.location}
                        </div>
                        <div className="flex items-center gap-1">
                          <Clock className="w-4 h-4" />
                          {featuredJob.type}
                        </div>
                        <span>{featuredJob.experience}</span>
                      </div>
                    </div>
                    <span className="bg-cyan-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
                      {featuredJob.department}
                    </span>
                  </div>
                  <p className="text-gray-300 mb-6">{featuredJob.description}</p>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                    <div>
                      <h4 className="text-white font-semibold mb-3">Requirements:</h4>
                      <ul className="space-y-2">
                        {featuredJob.requirements.slice(0, 3).map((req, index) => (
                          <li key={index} className="flex items-center gap-2 text-sm text-gray-300">
                            <CheckCircle className="w-4 h-4 text-green-400 flex-shrink-0" />
                            {req}
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <h4 className="text-white font-semibold mb-3">Benefits:</h4>
                      <ul className="space-y-2">
                        {featuredJob.benefits.slice(0, 3).map((benefit, index) => (
                          <li key={index} className="flex items-center gap-2 text-sm text-gray-300">
                            <CheckCircle className="w-4 h-4 text-green-400 flex-shrink-0" />
                            {benefit}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                  <button className="flex items-center gap-2 bg-cyan-500 hover:bg-cyan-600 text-white font-semibold py-3 px-6 rounded-lg transition-colors">
                    Apply Now
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              ) : null;
            })()}
          </div>
        </section>
      )}

      {/* Job Listings */}
      <section className="py-8 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-2xl font-bold text-white mb-6">Open Positions</h2>
          <div className="space-y-6">
            {filteredJobs.filter(job => !job.featured).map((job) => (
              <div
                key={job.id}
                className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 border border-white/20 hover:border-cyan-400/50 transition-all duration-300"
              >
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h3 className="text-xl font-bold text-white mb-2">
                      {job.title}
                    </h3>
                    <div className="flex items-center gap-4 text-sm text-gray-300">
                      <div className="flex items-center gap-1">
                        <MapPin className="w-4 h-4" />
                        {job.location}
                      </div>
                      <div className="flex items-center gap-1">
                        <Clock className="w-4 h-4" />
                        {job.type}
                      </div>
                      <span>{job.experience}</span>
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="bg-cyan-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
                      {job.department}
                    </span>
                    <span className="text-gray-400 text-sm">
                      Posted {new Date(job.postedDate).toLocaleDateString()}
                    </span>
                  </div>
                </div>
                <p className="text-gray-300 mb-4">{job.description}</p>
                <div className="flex items-center justify-between">
                  <div className="flex gap-2">
                    {job.requirements.slice(0, 2).map((req, index) => (
                      <span key={index} className="bg-white/10 text-gray-300 px-2 py-1 rounded text-xs">
                        {req.split(' ')[0]}
                      </span>
                    ))}
                  </div>
                  <button className="flex items-center gap-2 text-cyan-400 hover:text-cyan-300 transition-colors">
                    View Details
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Don't See Your Dream Job?
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            We're always looking for talented individuals. Send us your resume and we'll keep you in mind for future opportunities.
          </p>
          <button className="bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 text-white font-semibold py-3 px-8 rounded-lg transition-all duration-300 transform hover:scale-105">
            Submit Your Resume
          </button>
        </div>
      </section>

      <Footer />
    </div>
  )
}

export default CareersPage
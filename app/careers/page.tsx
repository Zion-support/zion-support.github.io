import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { MapPin, Clock, Users, ArrowRight, CheckCircle, Star, Briefcase } from 'lucide-react';

export default function Careers() {
  const [selectedDepartment, setSelectedDepartment] = useState('all');

  const departments = [
    { id: 'all', name: 'All Positions', count: 12 },
    { id: 'engineering', name: 'Engineering', count: 5 },
    { id: 'ai', name: 'AI & Data Science', count: 3 },
    { id: 'security', name: 'Cybersecurity', count: 2 },
    { id: 'design', name: 'Design', count: 1 },
    { id: 'sales', name: 'Sales & Marketing', count: 1 }
  ];

  const jobOpenings = [
    {
      id: 1,
      title: 'Senior Full-Stack Developer',
      department: 'engineering',
      location: 'Remote / New York, NY',
      type: 'Full-time',
      experience: '5+ years',
      salary: '$120,000 - $160,000',
      description: 'We are looking for a Senior Full-Stack Developer to join our engineering team and help build cutting-edge web applications.',
      requirements: [
        '5+ years of experience with React, Node.js, and TypeScript',
        'Experience with cloud platforms (AWS, Azure, or GCP)',
        'Strong understanding of database design and optimization',
        'Experience with microservices architecture',
        'Excellent problem-solving and communication skills'
      ],
      benefits: ['Health insurance', '401(k) matching', 'Flexible PTO', 'Remote work options'],
      featured: true
    },
    {
      id: 2,
      title: 'AI/ML Engineer',
      department: 'ai',
      location: 'San Francisco, CA',
      type: 'Full-time',
      experience: '3+ years',
      salary: '$130,000 - $180,000',
      description: 'Join our AI team to develop machine learning models and AI-powered solutions for our clients.',
      requirements: [
        '3+ years of experience with Python and machine learning frameworks',
        'Experience with TensorFlow, PyTorch, or similar',
        'Knowledge of data preprocessing and feature engineering',
        'Experience with cloud ML platforms',
        'Strong mathematical and statistical background'
      ],
      benefits: ['Health insurance', '401(k) matching', 'Stock options', 'Learning budget'],
      featured: true
    },
    {
      id: 3,
      title: 'Cybersecurity Specialist',
      department: 'security',
      location: 'Remote / Washington, DC',
      type: 'Full-time',
      experience: '4+ years',
      salary: '$110,000 - $150,000',
      description: 'Help protect our clients from cyber threats by implementing and managing security solutions.',
      requirements: [
        '4+ years of experience in cybersecurity',
        'Certifications in CISSP, CISM, or similar',
        'Experience with SIEM, EDR, and security frameworks',
        'Knowledge of compliance requirements (SOC 2, ISO 27001)',
        'Strong analytical and problem-solving skills'
      ],
      benefits: ['Health insurance', '401(k) matching', 'Security training budget', 'Flexible hours'],
      featured: false
    },
    {
      id: 4,
      title: 'Cloud Solutions Architect',
      department: 'engineering',
      location: 'Remote',
      type: 'Full-time',
      experience: '6+ years',
      salary: '$140,000 - $190,000',
      description: 'Design and implement cloud infrastructure solutions for our enterprise clients.',
      requirements: [
        '6+ years of experience with cloud platforms (AWS, Azure, GCP)',
        'Experience with infrastructure as code (Terraform, CloudFormation)',
        'Knowledge of containerization (Docker, Kubernetes)',
        'Experience with DevOps practices and CI/CD',
        'Strong communication and client-facing skills'
      ],
      benefits: ['Health insurance', '401(k) matching', 'Cloud certification budget', 'Remote work'],
      featured: false
    },
    {
      id: 5,
      title: 'Data Scientist',
      department: 'ai',
      location: 'Boston, MA',
      type: 'Full-time',
      experience: '3+ years',
      salary: '$100,000 - $140,000',
      description: 'Analyze complex data sets to provide insights and build predictive models for our clients.',
      requirements: [
        '3+ years of experience in data science or analytics',
        'Proficiency in Python, R, and SQL',
        'Experience with statistical modeling and machine learning',
        'Knowledge of data visualization tools',
        'Strong business acumen and communication skills'
      ],
      benefits: ['Health insurance', '401(k) matching', 'Conference budget', 'Flexible schedule'],
      featured: false
    }
  ];

  const filteredJobs = jobOpenings.filter(job => 
    selectedDepartment === 'all' || job.department === selectedDepartment
  );

  const featuredJobs = jobOpenings.filter(job => job.featured);

  const companyBenefits = [
    'Competitive salary and equity',
    'Comprehensive health, dental, and vision insurance',
    '401(k) with company matching',
    'Flexible PTO and work arrangements',
    'Professional development budget',
    'Top-tier equipment and tools',
    'Team building events and retreats',
    'Mentorship and career growth opportunities'
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Helmet>
        <title>Careers - Zion Tech Group</title>
        <meta name="description" content="Join our team of technology experts. Explore career opportunities in AI, cybersecurity, cloud computing, and software development." />
        <meta name="keywords" content="careers, jobs, technology careers, AI jobs, cybersecurity jobs, software development jobs" />
      </Helmet>

      <div className="container mx-auto px-4 py-16">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent mb-6">
            Join Our Team
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Be part of a team that's shaping the future of technology. We're looking for passionate individuals who want to make a difference.
          </p>
        </div>

        {/* Company Culture */}
        <div className="mb-16">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-white mb-6">Why Work With Us?</h2>
              <div className="space-y-4">
                {companyBenefits.map((benefit, index) => (
                  <div key={index} className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" />
                    <span className="text-gray-300">{benefit}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="bg-gradient-to-r from-slate-800/50 to-purple-800/50 rounded-2xl p-8 border border-gray-700">
              <h3 className="text-2xl font-bold text-white mb-4">Our Mission</h3>
              <p className="text-gray-300 mb-6">
                We're committed to delivering cutting-edge technology solutions that transform businesses and create positive impact in the world.
              </p>
              <div className="grid grid-cols-2 gap-4 text-center">
                <div>
                  <div className="text-3xl font-bold text-cyan-400">50+</div>
                  <div className="text-gray-300">Team Members</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-cyan-400">100+</div>
                  <div className="text-gray-300">Projects Completed</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Department Filter */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-white mb-8">Open Positions</h2>
          <div className="flex flex-wrap gap-4">
            {departments.map((department) => (
              <button
                key={department.id}
                onClick={() => setSelectedDepartment(department.id)}
                className={`px-6 py-3 rounded-lg transition-all duration-300 ${
                  selectedDepartment === department.id
                    ? 'bg-cyan-500 text-white'
                    : 'bg-slate-800/50 text-gray-300 hover:bg-slate-700/50'
                }`}
              >
                {department.name} ({department.count})
              </button>
            ))}
          </div>
        </div>

        {/* Featured Jobs */}
        {selectedDepartment === 'all' && (
          <div className="mb-16">
            <h3 className="text-2xl font-bold text-white mb-8 flex items-center">
              <Star className="w-6 h-6 text-yellow-400 mr-3" />
              Featured Positions
            </h3>
            <div className="grid lg:grid-cols-2 gap-8">
              {featuredJobs.map((job) => (
                <div key={job.id} className="bg-gradient-to-r from-slate-800/50 to-purple-800/50 rounded-2xl p-8 border border-gray-700 hover:border-cyan-500/50 transition-all duration-300">
                  <div className="flex items-start justify-between mb-4">
                    <h4 className="text-xl font-bold text-white">{job.title}</h4>
                    <span className="bg-cyan-500 text-white px-3 py-1 rounded-full text-sm font-medium">
                      {departments.find(dept => dept.id === job.department)?.name}
                    </span>
                  </div>
                  <div className="space-y-2 mb-4 text-sm text-gray-400">
                    <div className="flex items-center">
                      <MapPin className="w-4 h-4 mr-2" />
                      {job.location}
                    </div>
                    <div className="flex items-center">
                      <Clock className="w-4 h-4 mr-2" />
                      {job.type} • {job.experience}
                    </div>
                    <div className="text-cyan-400 font-semibold">
                      {job.salary}
                    </div>
                  </div>
                  <p className="text-gray-300 mb-4">{job.description}</p>
                  <button className="inline-flex items-center text-cyan-400 hover:text-cyan-300 transition-colors">
                    View Details
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </button>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* All Jobs */}
        <div>
          <h3 className="text-2xl font-bold text-white mb-8">
            {selectedDepartment === 'all' ? 'All Positions' : departments.find(dept => dept.id === selectedDepartment)?.name}
          </h3>
          <div className="space-y-6">
            {filteredJobs.map((job) => (
              <div key={job.id} className="bg-slate-800/50 rounded-xl p-6 border border-gray-700 hover:border-cyan-500/50 transition-all duration-300">
                <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between">
                  <div className="flex-1">
                    <div className="flex items-center mb-2">
                      <h4 className="text-xl font-bold text-white mr-4">{job.title}</h4>
                      <span className="bg-purple-500/20 text-purple-300 px-3 py-1 rounded-full text-sm font-medium">
                        {departments.find(dept => dept.id === job.department)?.name}
                      </span>
                    </div>
                    <div className="flex flex-wrap items-center gap-4 text-sm text-gray-400 mb-3">
                      <div className="flex items-center">
                        <MapPin className="w-4 h-4 mr-2" />
                        {job.location}
                      </div>
                      <div className="flex items-center">
                        <Clock className="w-4 h-4 mr-2" />
                        {job.type}
                      </div>
                      <div className="flex items-center">
                        <Users className="w-4 h-4 mr-2" />
                        {job.experience}
                      </div>
                    </div>
                    <p className="text-gray-300 mb-3">{job.description}</p>
                    <div className="text-cyan-400 font-semibold mb-3">{job.salary}</div>
                    <div className="flex flex-wrap gap-2">
                      {job.benefits.slice(0, 3).map((benefit, index) => (
                        <span key={index} className="bg-slate-700/50 text-gray-300 px-3 py-1 rounded-full text-xs">
                          {benefit}
                        </span>
                      ))}
                    </div>
                  </div>
                  <div className="mt-4 lg:mt-0 lg:ml-6">
                    <button className="bg-gradient-to-r from-cyan-500 to-purple-600 hover:from-cyan-600 hover:to-purple-700 px-6 py-3 rounded-lg font-semibold text-white transition-all duration-300 flex items-center">
                      Apply Now
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="mt-16 bg-gradient-to-r from-cyan-500/10 to-purple-500/10 rounded-2xl p-8 border border-cyan-500/20">
          <div className="text-center">
            <h3 className="text-3xl font-bold text-white mb-4">
              Don't See the Right Role?
            </h3>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              We're always looking for talented individuals. Send us your resume and let us know how you can contribute to our team.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gradient-to-r from-cyan-500 to-purple-600 hover:from-cyan-600 hover:to-purple-700 px-8 py-4 rounded-lg font-semibold text-white transition-all duration-300 flex items-center justify-center">
                <Briefcase className="w-5 h-5 mr-2" />
                Submit Resume
              </button>
              <button className="border border-cyan-500 text-cyan-400 hover:bg-cyan-500/10 px-8 py-4 rounded-lg font-semibold transition-all duration-300">
                Contact HR Team
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

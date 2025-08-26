import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';

const Careers: React.FC = () => {
  const [selectedDepartment, setSelectedDepartment] = useState('all');

  const departments = [
    { id: 'all', name: 'All Departments' },
    { id: 'engineering', name: 'Engineering' },
    { id: 'ai-ml', name: 'AI & Machine Learning' },
    { id: 'cybersecurity', name: 'Cybersecurity' },
    { id: 'cloud', name: 'Cloud & DevOps' },
    { id: 'sales', name: 'Sales & Business Development' },
    { id: 'marketing', name: 'Marketing' },
    { id: 'operations', name: 'Operations' }
  ];

  const jobListings = [
    {
      id: 1,
      title: 'Senior Full Stack Developer',
      department: 'engineering',
      location: 'Remote / New York, NY',
      type: 'Full-time',
      experience: '5+ years',
      description: 'Join our engineering team to build cutting-edge web applications and platforms that power the future of technology.',
      requirements: [
        'Expertise in React, Node.js, and TypeScript',
        'Experience with cloud platforms (AWS, Azure, GCP)',
        'Strong understanding of software architecture and design patterns',
        'Experience with CI/CD pipelines and DevOps practices'
      ],
      benefits: [
        'Competitive salary and equity packages',
        'Flexible remote work options',
        'Professional development budget',
        'Health, dental, and vision insurance'
      ]
    },
    {
      id: 2,
      title: 'AI/ML Engineer',
      department: 'ai-ml',
      location: 'Remote / San Francisco, CA',
      type: 'Full-time',
      experience: '3+ years',
      description: 'Help us develop next-generation AI solutions that transform how businesses operate and make decisions.',
      requirements: [
        'Strong background in machine learning and deep learning',
        'Experience with Python, TensorFlow, and PyTorch',
        'Knowledge of NLP, computer vision, or reinforcement learning',
        'Experience deploying ML models in production environments'
      ],
      benefits: [
        'Competitive salary and equity packages',
        'Access to cutting-edge AI infrastructure',
        'Conference and training opportunities',
        'Flexible work arrangements'
      ]
    },
    {
      id: 3,
      title: 'Cybersecurity Specialist',
      department: 'cybersecurity',
      location: 'Remote / Washington, DC',
      type: 'Full-time',
      experience: '4+ years',
      description: 'Protect our clients and infrastructure from evolving cyber threats with innovative security solutions.',
      requirements: [
        'Experience with security frameworks (NIST, ISO 27001)',
        'Knowledge of threat detection and incident response',
        'Experience with security tools and technologies',
        'Relevant certifications (CISSP, CEH, etc.)'
      ],
      benefits: [
        'Competitive salary and benefits',
        'Security training and certification support',
        'Opportunity to work on cutting-edge security projects',
        'Professional development programs'
      ]
    },
    {
      id: 4,
      title: 'Cloud Solutions Architect',
      department: 'cloud',
      location: 'Remote / Austin, TX',
      type: 'Full-time',
      experience: '6+ years',
      description: 'Design and implement scalable cloud solutions that drive business transformation and innovation.',
      requirements: [
        'Expertise in AWS, Azure, or GCP',
        'Experience with infrastructure as code (Terraform, CloudFormation)',
        'Strong understanding of microservices architecture',
        'Experience with containerization and orchestration'
      ],
      benefits: [
        'Competitive salary and equity',
        'Cloud certification support',
        'Flexible remote work options',
        'Professional development opportunities'
      ]
    }
  ];

  const filteredJobs = selectedDepartment === 'all' 
    ? jobListings 
    : jobListings.filter(job => job.department === selectedDepartment);

  return (
    <>
      <Helmet>
        <title>Careers - Zion Tech Group | Join Our Team</title>
        <meta name="description" content="Join Zion Tech Group's innovative team. Explore career opportunities in technology, AI, cybersecurity, and more. Build the future with us." />
        <meta name="keywords" content="careers, jobs, Zion Tech Group, technology careers, AI jobs, cybersecurity careers, remote work" />
        <link rel="canonical" href="https://ziontechgroup.com/careers" />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
        {/* Hero Section */}
        <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Join Our <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">Team</span>
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed mb-8">
              Help us build the future of technology. Join a team of innovators, problem-solvers, and 
              technology enthusiasts who are passionate about making a difference.
            </p>
            <Link
              to="#open-positions"
              className="bg-gradient-to-r from-blue-600 to-cyan-600 text-white px-8 py-3 rounded-lg font-semibold hover:from-blue-700 hover:to-cyan-700 transition-all duration-300 transform hover:scale-105"
            >
              View Open Positions
            </Link>
          </div>
        </section>

        {/* Company Culture */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-800/50">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-16">
              Why Work With Us?
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  title: "Innovation First",
                  description: "Work on cutting-edge technologies and be part of projects that shape the future of business.",
                  icon: "🚀"
                },
                {
                  title: "Remote-First Culture",
                  description: "Enjoy the flexibility of remote work while staying connected with our global team.",
                  icon: "🌍"
                },
                {
                  title: "Continuous Learning",
                  description: "Access to training, conferences, and resources to keep your skills sharp and current.",
                  icon: "📚"
                },
                {
                  title: "Impact & Growth",
                  description: "See your work directly impact clients and grow your career with meaningful projects.",
                  icon: "📈"
                },
                {
                  title: "Collaborative Environment",
                  description: "Work with talented professionals who value teamwork and knowledge sharing.",
                  icon: "🤝"
                },
                {
                  title: "Work-Life Balance",
                  description: "Flexible schedules and policies that respect your personal time and well-being.",
                  icon: "⚖️"
                }
              ].map((benefit, index) => (
                <div key={index} className="bg-slate-700/50 p-6 rounded-xl border border-white/10 hover:border-blue-400/30 transition-all duration-300">
                  <div className="text-4xl mb-4">{benefit.icon}</div>
                  <h3 className="text-xl font-semibold text-white mb-3">{benefit.title}</h3>
                  <p className="text-gray-300 leading-relaxed">{benefit.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Open Positions */}
        <section id="open-positions" className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-16">
              Open Positions
            </h2>
            
            {/* Department Filter */}
            <div className="flex flex-wrap justify-center gap-4 mb-12">
              {departments.map((dept) => (
                <button
                  key={dept.id}
                  onClick={() => setSelectedDepartment(dept.id)}
                  className={`px-6 py-2 rounded-full font-medium transition-all duration-300 ${
                    selectedDepartment === dept.id
                      ? 'bg-blue-600 text-white'
                      : 'bg-slate-700 text-gray-300 hover:bg-slate-600 hover:text-white'
                  }`}
                >
                  {dept.name}
                </button>
              ))}
            </div>

            {/* Job Listings */}
            <div className="space-y-6">
              {filteredJobs.map((job) => (
                <div key={job.id} className="bg-slate-800/50 p-6 rounded-xl border border-white/10 hover:border-blue-400/30 transition-all duration-300">
                  <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-4">
                    <div>
                      <h3 className="text-2xl font-bold text-white mb-2">{job.title}</h3>
                      <div className="flex flex-wrap gap-4 text-sm text-gray-400">
                        <span className="flex items-center">
                          <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                          </svg>
                          {job.location}
                        </span>
                        <span className="flex items-center">
                          <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2-2v2m8 0V6a2 2 0 012 2v6a2 2 0 01-2 2H8a2 2 0 01-2-2V8a2 2 0 012-2z" />
                          </svg>
                          {job.type}
                        </span>
                        <span className="flex items-center">
                          <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                          </svg>
                          {job.experience}
                        </span>
                      </div>
                    </div>
                    <button className="mt-4 lg:mt-0 bg-gradient-to-r from-blue-600 to-cyan-600 text-white px-6 py-2 rounded-lg font-semibold hover:from-blue-700 hover:to-cyan-700 transition-all duration-300">
                      Apply Now
                    </button>
                  </div>
                  
                  <p className="text-gray-300 mb-4 leading-relaxed">{job.description}</p>
                  
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                    <div>
                      <h4 className="text-lg font-semibold text-white mb-3">Requirements</h4>
                      <ul className="space-y-2">
                        {job.requirements.map((req, index) => (
                          <li key={index} className="flex items-start text-gray-300">
                            <span className="text-blue-400 mr-2">•</span>
                            {req}
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold text-white mb-3">Benefits</h4>
                      <ul className="space-y-2">
                        {job.benefits.map((benefit, index) => (
                          <li key={index} className="flex items-start text-gray-300">
                            <span className="text-green-400 mr-2">✓</span>
                            {benefit}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {filteredJobs.length === 0 && (
              <div className="text-center py-12">
                <p className="text-gray-400 text-lg">No positions available in this department at the moment.</p>
                <p className="text-gray-500 mt-2">Check back later or contact us for general inquiries.</p>
              </div>
            )}
          </div>
        </section>

        {/* Application Process */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-800/50">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-16">
              Application Process
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              {[
                { step: "1", title: "Apply", description: "Submit your application with resume and cover letter" },
                { step: "2", title: "Review", description: "Our team reviews your application and experience" },
                { step: "3", title: "Interview", description: "Technical and cultural fit discussions" },
                { step: "4", title: "Offer", description: "Welcome to the team!" }
              ].map((step, index) => (
                <div key={index} className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-white font-bold text-xl">{step.step}</span>
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-2">{step.title}</h3>
                  <p className="text-gray-300 text-sm">{step.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Don't See the Right Fit?
            </h2>
            <p className="text-xl text-gray-300 mb-8 leading-relaxed">
              We're always looking for talented individuals. Send us your resume and we'll keep you in mind for future opportunities.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="bg-gradient-to-r from-blue-600 to-cyan-600 text-white px-8 py-3 rounded-lg font-semibold hover:from-blue-700 hover:to-cyan-700 transition-all duration-300 transform hover:scale-105"
              >
                Send Resume
              </Link>
              <Link
                to="/about"
                className="border border-white/20 text-white px-8 py-3 rounded-lg font-semibold hover:bg-white/10 transition-all duration-300"
              >
                Learn More About Us
              </Link>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default Careers;
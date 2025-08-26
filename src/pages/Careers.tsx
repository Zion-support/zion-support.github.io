import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';

const Careers: React.FC = () => {
  const [activeTab, setActiveTab] = useState('openings');

  const jobOpenings = [
    {
      id: 1,
      title: 'Senior AI Engineer',
      department: 'Artificial Intelligence',
      location: 'Remote / Wilmington, DE',
      type: 'Full-time',
      experience: '5+ years',
      description: 'Lead development of cutting-edge AI solutions and machine learning models.',
      requirements: [
        'Advanced degree in Computer Science, AI, or related field',
        'Expertise in Python, TensorFlow, PyTorch',
        'Experience with large language models and NLP',
        'Strong background in machine learning algorithms'
      ]
    },
    {
      id: 2,
      title: 'Cloud Solutions Architect',
      department: 'Cloud & DevOps',
      location: 'Remote / Wilmington, DE',
      type: 'Full-time',
      experience: '7+ years',
      description: 'Design and implement scalable cloud infrastructure solutions.',
      requirements: [
        'AWS, Azure, or GCP certifications',
        'Experience with Kubernetes and Docker',
        'Infrastructure as Code (Terraform, CloudFormation)',
        'Strong understanding of microservices architecture'
      ]
    },
    {
      id: 3,
      title: 'Cybersecurity Specialist',
      department: 'Security',
      location: 'Remote / Wilmington, DE',
      type: 'Full-time',
      experience: '4+ years',
      description: 'Protect our clients from evolving cyber threats and ensure compliance.',
      requirements: [
        'CISSP, CISM, or similar certifications',
        'Experience with SIEM tools and threat hunting',
        'Knowledge of compliance frameworks (SOC 2, ISO 27001)',
        'Incident response and forensics experience'
      ]
    },
    {
      id: 4,
      title: 'Full Stack Developer',
      department: 'Engineering',
      location: 'Remote / Wilmington, DE',
      type: 'Full-time',
      experience: '3+ years',
      description: 'Build modern web applications using cutting-edge technologies.',
      requirements: [
        'React, Node.js, and TypeScript expertise',
        'Experience with cloud platforms and databases',
        'Understanding of CI/CD pipelines',
        'Agile development experience'
      ]
    },
    {
      id: 5,
      title: 'Digital Transformation Consultant',
      department: 'Consulting',
      location: 'Remote / Wilmington, DE',
      type: 'Full-time',
      experience: '6+ years',
      description: 'Guide organizations through digital transformation initiatives.',
      requirements: [
        'MBA or relevant advanced degree',
        'Experience in change management',
        'Strong business acumen and communication skills',
        'Technology implementation experience'
      ]
    }
  ];

  const benefits = [
    {
      title: 'Health & Wellness',
      items: ['Comprehensive health insurance', 'Dental and vision coverage', 'Mental health support', 'Gym membership reimbursement']
    },
    {
      title: 'Work-Life Balance',
      items: ['Flexible working hours', 'Unlimited PTO', 'Remote work options', 'Paid parental leave']
    },
    {
      title: 'Professional Growth',
      items: ['Conference attendance', 'Certification programs', 'Mentorship opportunities', 'Career development planning']
    },
    {
      title: 'Financial Benefits',
      items: ['Competitive salary', 'Performance bonuses', 'Stock options', '401(k) matching']
    }
  ];

  return (
    <>
      <Helmet>
        <title>Careers at Zion Tech Group - Join Our Team</title>
        <meta name="description" content="Join Zion Tech Group's innovative team. Explore career opportunities in AI, cloud computing, cybersecurity, and digital transformation. Make an impact in the tech industry." />
        <meta name="keywords" content="careers, jobs, employment, Zion Tech Group, AI engineer, cloud architect, cybersecurity, digital transformation" />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
        {/* Hero Section */}
        <section className="relative py-20 bg-gradient-to-r from-slate-900 via-blue-900 to-slate-900 overflow-hidden">
          <div className="absolute inset-0 bg-white/5"></div>
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              Join Our
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400"> Mission</span>
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
              Help us shape the future of technology. We're looking for passionate individuals who want to make a real impact in the world.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <button
                onClick={() => setActiveTab('openings')}
                className={`px-8 py-3 rounded-lg font-semibold transition-all duration-300 ${
                  activeTab === 'openings'
                    ? 'bg-blue-600 text-white'
                    : 'bg-white/10 text-white hover:bg-white/20'
                }`}
              >
                View Openings
              </button>
              <button
                onClick={() => setActiveTab('culture')}
                className={`px-8 py-3 rounded-lg font-semibold transition-all duration-300 ${
                  activeTab === 'culture'
                    ? 'bg-blue-600 text-white'
                    : 'bg-white/10 text-white hover:bg-white/20'
                }`}
              >
                Our Culture
              </button>
              <button
                onClick={() => setActiveTab('benefits')}
                className={`px-8 py-3 rounded-lg font-semibold transition-all duration-300 ${
                  activeTab === 'benefits'
                    ? 'bg-blue-600 text-white'
                    : 'bg-white/10 text-white hover:bg-white/20'
                }`}
              >
                Benefits
              </button>
            </div>
          </div>
        </section>

        {/* Content Tabs */}
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            {/* Job Openings Tab */}
            {activeTab === 'openings' && (
              <div className="space-y-8">
                <div className="text-center mb-12">
                  <h2 className="text-4xl font-bold text-slate-900 mb-4">Open Positions</h2>
                  <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                    We're always looking for talented individuals to join our team. Check out our current openings below.
                  </p>
                </div>

                <div className="grid gap-6">
                  {jobOpenings.map((job) => (
                    <div key={job.id} className="bg-white rounded-xl shadow-lg border border-gray-200 p-6 hover:shadow-xl transition-shadow duration-300">
                      <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-4">
                        <div>
                          <h3 className="text-2xl font-bold text-slate-900 mb-2">{job.title}</h3>
                          <div className="flex flex-wrap gap-4 text-sm text-gray-600">
                            <span className="flex items-center">
                              <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                              </svg>
                              {job.department}
                            </span>
                            <span className="flex items-center">
                              <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314-11.314z" />
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                              </svg>
                              {job.location}
                            </span>
                            <span className="flex items-center">
                              <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.815-9-2.145M21 13.255A23.931 23.931 0 0012 15c3.183 0 6.22-.815 9-2.145M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.815-9-2.145" />
                              </svg>
                              {job.type}
                            </span>
                            <span className="flex items-center">
                              <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                              </svg>
                              {job.experience}
                            </span>
                          </div>
                        </div>
                        <button className="mt-4 lg:mt-0 bg-gradient-to-r from-blue-600 to-cyan-600 text-white px-6 py-3 rounded-lg font-semibold hover:from-blue-700 hover:to-cyan-700 transition-all duration-300">
                          Apply Now
                        </button>
                      </div>
                      
                      <p className="text-gray-700 mb-4">{job.description}</p>
                      
                      <div>
                        <h4 className="font-semibold text-slate-900 mb-2">Requirements:</h4>
                        <ul className="list-disc list-inside space-y-1 text-gray-700">
                          {job.requirements.map((req, index) => (
                            <li key={index}>{req}</li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="text-center mt-12">
                  <p className="text-gray-600 mb-4">Don't see a position that fits? We're always interested in hearing from talented individuals.</p>
                  <button className="bg-slate-800 text-white px-8 py-3 rounded-lg font-semibold hover:bg-slate-700 transition-all duration-300">
                    Send Open Application
                  </button>
                </div>
              </div>
            )}

            {/* Culture Tab */}
            {activeTab === 'culture' && (
              <div className="space-y-12">
                <div className="text-center">
                  <h2 className="text-4xl font-bold text-slate-900 mb-4">Our Culture</h2>
                  <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                    We believe in fostering an environment where innovation thrives, collaboration is celebrated, and every team member can reach their full potential.
                  </p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                  <div className="bg-white rounded-xl p-6 shadow-lg border border-gray-200">
                    <div className="w-16 h-16 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                      <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                      </svg>
                    </div>
                    <h3 className="text-xl font-bold text-slate-900 mb-2">Innovation First</h3>
                    <p className="text-gray-600">
                      We encourage creative thinking and experimentation. Every team member has the freedom to explore new ideas and push boundaries.
                    </p>
                  </div>

                  <div className="bg-white rounded-xl p-6 shadow-lg border border-gray-200">
                    <div className="w-16 h-16 bg-green-100 rounded-lg flex items-center justify-center mb-4">
                      <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197m13.5-9a2.5 2.5 0 11-5 0 2.5 2.5 0 015 0z" />
                      </svg>
                    </div>
                    <h3 className="text-xl font-bold text-slate-900 mb-2">Collaborative Environment</h3>
                    <p className="text-gray-600">
                      We believe the best solutions come from diverse perspectives working together. Teamwork and mutual support are core to our success.
                    </p>
                  </div>

                  <div className="bg-white rounded-xl p-6 shadow-lg border border-gray-200">
                    <div className="w-16 h-16 bg-purple-100 rounded-lg flex items-center justify-center mb-4">
                      <svg className="w-8 h-8 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                      </svg>
                    </div>
                    <h3 className="text-xl font-bold text-slate-900 mb-2">Continuous Learning</h3>
                    <p className="text-gray-600">
                      Technology evolves rapidly, and so do we. We invest in our team's growth through training, conferences, and learning opportunities.
                    </p>
                  </div>

                  <div className="bg-white rounded-xl p-6 shadow-lg border border-gray-200">
                    <div className="w-16 h-16 bg-orange-100 rounded-lg flex items-center justify-center mb-4">
                      <svg className="w-8 h-8 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                      </svg>
                    </div>
                    <h3 className="text-xl font-bold text-slate-900 mb-2">Work-Life Balance</h3>
                    <p className="text-gray-600">
                      We understand that happy employees are productive employees. We promote healthy work-life balance and flexible working arrangements.
                    </p>
                  </div>

                  <div className="bg-white rounded-xl p-6 shadow-lg border border-gray-200">
                    <div className="w-16 h-16 bg-red-100 rounded-lg flex items-center justify-center mb-4">
                      <svg className="w-8 h-8 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                      </svg>
                    </div>
                    <h3 className="text-xl font-bold text-slate-900 mb-2">Diversity & Inclusion</h3>
                    <p className="text-gray-600">
                      We celebrate diversity and create an inclusive environment where everyone feels valued, respected, and empowered to succeed.
                    </p>
                  </div>

                  <div className="bg-white rounded-xl p-6 shadow-lg border border-gray-200">
                    <div className="w-16 h-16 bg-teal-100 rounded-lg flex items-center justify-center mb-4">
                      <svg className="w-8 h-8 text-teal-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                      </svg>
                    </div>
                    <h3 className="text-xl font-bold text-slate-900 mb-2">Impact-Driven</h3>
                    <p className="text-gray-600">
                      We're not just building technology; we're solving real-world problems and making a positive impact on society.
                    </p>
                  </div>
                </div>
              </div>
            )}

            {/* Benefits Tab */}
            {activeTab === 'benefits' && (
              <div className="space-y-12">
                <div className="text-center">
                  <h2 className="text-4xl font-bold text-slate-900 mb-4">Benefits & Perks</h2>
                  <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                    We believe in taking care of our team. Here's what we offer to ensure you can focus on doing your best work.
                  </p>
                </div>

                <div className="grid md:grid-cols-2 gap-8">
                  {benefits.map((category, index) => (
                    <div key={index} className="bg-white rounded-xl p-6 shadow-lg border border-gray-200">
                      <h3 className="text-xl font-bold text-slate-900 mb-4">{category.title}</h3>
                      <ul className="space-y-2">
                        {category.items.map((item, itemIndex) => (
                          <li key={itemIndex} className="flex items-start">
                            <svg className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                            </svg>
                            <span className="text-gray-700">{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>

                <div className="bg-gradient-to-r from-blue-50 to-cyan-50 rounded-xl p-8 text-center">
                  <h3 className="text-2xl font-bold text-slate-900 mb-4">Additional Perks</h3>
                  <div className="grid md:grid-cols-3 gap-6 text-sm">
                    <div>
                      <h4 className="font-semibold text-slate-900 mb-2">Professional Development</h4>
                      <p className="text-gray-600">Conference budgets, certification programs, mentorship</p>
                    </div>
                    <div>
                      <h4 className="font-semibold text-slate-900 mb-2">Team Events</h4>
                      <p className="text-gray-600">Regular team building, hackathons, innovation days</p>
                    </div>
                    <div>
                      <h4 className="font-semibold text-slate-900 mb-2">Equipment</h4>
                      <p className="text-gray-600">Latest hardware, software licenses, home office setup</p>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </section>

        {/* Application CTA */}
        <section className="py-16 bg-slate-900">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-bold text-white mb-4">Ready to Join Our Team?</h2>
            <p className="text-xl text-gray-300 mb-8">
              We're excited to hear from you. Let's build the future together.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gradient-to-r from-blue-600 to-cyan-600 text-white px-8 py-3 rounded-lg font-semibold hover:from-blue-700 hover:to-cyan-700 transition-all duration-300">
                View All Openings
              </button>
              <button className="bg-white/10 text-white px-8 py-3 rounded-lg font-semibold hover:bg-white/20 transition-all duration-300">
                Contact Recruiting
              </button>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default Careers;
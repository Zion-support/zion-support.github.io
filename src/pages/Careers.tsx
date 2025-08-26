import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';

const Careers: React.FC = () => {
  const [selectedDepartment, setSelectedDepartment] = useState('all');

  const departments = [
    { id: 'all', name: 'All Departments' },
    { id: 'engineering', name: 'Engineering' },
    { id: 'data-science', name: 'Data Science' },
    { id: 'cybersecurity', name: 'Cybersecurity' },
    { id: 'sales', name: 'Sales & Business Development' },
    { id: 'marketing', name: 'Marketing' },
    { id: 'operations', name: 'Operations' },
    { id: 'hr', name: 'Human Resources' }
  ];

  const jobListings = [
    {
      id: 1,
      title: 'Senior AI Engineer',
      department: 'engineering',
      location: 'Remote / New York, NY',
      type: 'Full-time',
      experience: '5+ years',
      description: 'Join our AI team to develop cutting-edge autonomous systems and machine learning solutions that transform businesses worldwide.',
      requirements: [
        'Advanced degree in Computer Science, AI, or related field',
        'Strong experience with Python, TensorFlow, PyTorch',
        'Expertise in machine learning, deep learning, and AI algorithms',
        'Experience with cloud platforms (AWS, Azure, GCP)',
        'Strong problem-solving and analytical skills'
      ],
      benefits: [
        'Competitive salary and equity package',
        'Flexible remote work options',
        'Professional development budget',
        'Health, dental, and vision insurance',
        '401(k) with company match'
      ]
    },
    {
      id: 2,
      title: 'Cybersecurity Specialist',
      department: 'cybersecurity',
      location: 'Remote / Washington, DC',
      type: 'Full-time',
      experience: '3+ years',
      description: 'Help protect our clients from evolving cyber threats by implementing advanced security solutions and threat detection systems.',
      requirements: [
        'Bachelor\'s degree in Cybersecurity, IT, or related field',
        'Experience with SIEM, EDR, and threat intelligence platforms',
        'Knowledge of security frameworks (NIST, ISO 27001)',
        'Certifications: CISSP, CISM, or equivalent preferred',
        'Strong understanding of network security and incident response'
      ],
      benefits: [
        'Competitive salary and benefits',
        'Remote work flexibility',
        'Continuous learning opportunities',
        'Health and wellness benefits',
        'Professional certification support'
      ]
    },
    {
      id: 3,
      title: 'Data Scientist',
      department: 'data-science',
      location: 'Remote / San Francisco, CA',
      type: 'Full-time',
      experience: '4+ years',
      description: 'Transform complex data into actionable insights that drive business decisions and create value for our clients.',
      requirements: [
        'Advanced degree in Statistics, Mathematics, or related field',
        'Proficiency in Python, R, SQL, and data visualization tools',
        'Experience with machine learning and statistical modeling',
        'Strong analytical and problem-solving skills',
        'Experience with big data technologies (Spark, Hadoop)'
      ],
      benefits: [
        'Competitive compensation package',
        'Remote work options',
        'Professional development opportunities',
        'Comprehensive health benefits',
        'Collaborative and innovative work environment'
      ]
    },
    {
      id: 4,
      title: 'Sales Development Representative',
      department: 'sales',
      location: 'Remote / Austin, TX',
      type: 'Full-time',
      experience: '2+ years',
      description: 'Drive business growth by identifying and qualifying new business opportunities in the technology sector.',
      requirements: [
        'Bachelor\'s degree in Business, Marketing, or related field',
        'Proven track record in B2B sales or business development',
        'Strong communication and interpersonal skills',
        'Experience with CRM systems (Salesforce preferred)',
        'Knowledge of technology industry trends'
      ],
      benefits: [
        'Base salary plus commission structure',
        'Remote work flexibility',
        'Sales training and development',
        'Health and wellness benefits',
        'Career advancement opportunities'
      ]
    },
    {
      id: 5,
      title: 'DevOps Engineer',
      department: 'engineering',
      location: 'Remote / Seattle, WA',
      type: 'Full-time',
      experience: '3+ years',
      description: 'Build and maintain robust, scalable infrastructure that supports our AI and cloud solutions.',
      requirements: [
        'Bachelor\'s degree in Computer Science or related field',
        'Experience with AWS, Docker, Kubernetes, and CI/CD pipelines',
        'Proficiency in scripting languages (Python, Bash)',
        'Knowledge of infrastructure as code (Terraform, CloudFormation)',
        'Experience with monitoring and logging tools'
      ],
      benefits: [
        'Competitive salary and equity',
        'Remote work options',
        'Professional development budget',
        'Comprehensive health benefits',
        'Modern tech stack and tools'
      ]
    },
    {
      id: 6,
      title: 'Marketing Manager',
      department: 'marketing',
      location: 'Remote / Boston, MA',
      type: 'Full-time',
      experience: '5+ years',
      description: 'Lead our marketing initiatives to build brand awareness and drive customer acquisition in the technology sector.',
      requirements: [
        'Bachelor\'s degree in Marketing, Communications, or related field',
        'Experience in B2B technology marketing',
        'Strong digital marketing skills (SEO, SEM, social media)',
        'Experience with marketing automation tools',
        'Excellent written and verbal communication skills'
      ],
      benefits: [
        'Competitive salary and benefits',
        'Remote work flexibility',
        'Marketing budget and resources',
        'Health and wellness benefits',
        'Creative and collaborative environment'
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
        <meta name="description" content="Join Zion Tech Group and be part of a team that's revolutionizing technology. Explore career opportunities in AI, cybersecurity, data science, and more." />
        <meta name="keywords" content="careers, jobs, Zion Tech Group, AI jobs, cybersecurity jobs, data science jobs, technology careers" />
        <link rel="canonical" href="https://ziontechgroup.com/careers" />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
        {/* Hero Section */}
        <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Join Our <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">Team</span>
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              Be part of a team that's revolutionizing technology and transforming businesses worldwide. 
              Work on cutting-edge AI, cybersecurity, and cloud solutions that make a real impact.
            </p>
          </div>
        </section>

        {/* Why Work With Us */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-16">
              Why Work With Zion Tech Group?
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  icon: '🚀',
                  title: 'Innovation First',
                  description: 'Work on cutting-edge technologies that are shaping the future of business and technology.'
                },
                {
                  icon: '🌍',
                  title: 'Global Impact',
                  description: 'Your work directly impacts businesses worldwide, driving digital transformation and innovation.'
                },
                {
                  icon: '💡',
                  title: 'Continuous Learning',
                  description: 'Access to the latest tools, technologies, and professional development opportunities.'
                },
                {
                  icon: '🤝',
                  title: 'Collaborative Culture',
                  description: 'Work with brilliant minds in a supportive, collaborative environment that values teamwork.'
                },
                {
                  icon: '⚡',
                  title: 'Fast-Paced Growth',
                  description: 'Join a rapidly growing company with opportunities for career advancement and skill development.'
                },
                {
                  icon: '🎯',
                  title: 'Purpose-Driven',
                  description: 'Contribute to solutions that solve real-world problems and make a positive difference.'
                }
              ].map((feature, index) => (
                <div key={index} className="bg-slate-800/50 p-6 rounded-xl border border-white/10 text-center hover:border-blue-400/30 transition-all duration-300">
                  <div className="text-4xl mb-4">{feature.icon}</div>
                  <h3 className="text-xl font-bold text-white mb-3">{feature.title}</h3>
                  <p className="text-gray-300 text-sm leading-relaxed">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Open Positions */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-800/50">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Open Positions
              </h2>
              <p className="text-xl text-gray-300 max-w-2xl mx-auto">
                Explore our current job openings and find the perfect role for your skills and career goals.
              </p>
            </div>

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
                <div key={job.id} className="bg-slate-700/50 rounded-xl border border-white/10 p-6 hover:border-blue-400/30 transition-all duration-300">
                  <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
                    <div className="flex-1">
                      <h3 className="text-2xl font-bold text-white mb-2">{job.title}</h3>
                      <div className="flex flex-wrap items-center gap-4 mb-4 text-sm text-gray-300">
                        <span className="flex items-center gap-2">
                          <span className="w-2 h-2 bg-blue-400 rounded-full"></span>
                          {departments.find(d => d.id === job.department)?.name}
                        </span>
                        <span className="flex items-center gap-2">
                          <span className="w-2 h-2 bg-green-400 rounded-full"></span>
                          {job.location}
                        </span>
                        <span className="flex items-center gap-2">
                          <span className="w-2 h-2 bg-yellow-400 rounded-full"></span>
                          {job.type}
                        </span>
                        <span className="flex items-center gap-2">
                          <span className="w-2 h-2 bg-purple-400 rounded-full"></span>
                          {job.experience}
                        </span>
                      </div>
                      <p className="text-gray-300 mb-4 leading-relaxed">{job.description}</p>
                      
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div>
                          <h4 className="text-lg font-semibold text-white mb-3">Requirements</h4>
                          <ul className="space-y-2">
                            {job.requirements.map((req, index) => (
                              <li key={index} className="flex items-start text-gray-300 text-sm">
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
                              <li key={index} className="flex items-start text-gray-300 text-sm">
                                <span className="text-green-400 mr-2">✓</span>
                                {benefit}
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </div>
                    
                    <div className="lg:flex-shrink-0">
                      <button className="w-full lg:w-auto bg-gradient-to-r from-blue-600 to-cyan-600 text-white px-8 py-3 rounded-lg font-semibold hover:from-blue-700 hover:to-cyan-700 transition-all duration-300 transform hover:scale-105">
                        Apply Now
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {filteredJobs.length === 0 && (
              <div className="text-center py-12">
                <p className="text-gray-400 text-lg">No positions found in this department.</p>
                <p className="text-gray-500 mt-2">Check back later for new opportunities or browse all departments.</p>
              </div>
            )}
          </div>
        </section>

        {/* Application Process */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-16">
              Application Process
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                {
                  step: '1',
                  title: 'Apply',
                  description: 'Submit your application with resume and cover letter through our careers portal.'
                },
                {
                  step: '2',
                  title: 'Review',
                  description: 'Our team reviews your application and assesses your fit for the role.'
                },
                {
                  step: '3',
                  title: 'Interview',
                  description: 'Participate in technical and cultural interviews with our team members.'
                },
                {
                  step: '4',
                  title: 'Offer',
                  description: 'Receive an offer and join our team to start your journey with Zion Tech Group.'
                }
              ].map((step, index) => (
                <div key={index} className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-r from-blue-600 to-cyan-600 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-white font-bold text-2xl">{step.step}</span>
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3">{step.title}</h3>
                  <p className="text-gray-300 text-sm leading-relaxed">{step.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-800/50">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Ready to Join Our Team?
            </h2>
            <p className="text-xl text-gray-300 mb-8 leading-relaxed">
              Don't see the perfect role? We're always looking for talented individuals to join our team. 
              Send us your resume and let's discuss how you can contribute to our mission.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="bg-gradient-to-r from-blue-600 to-cyan-600 text-white px-8 py-3 rounded-lg font-semibold hover:from-blue-700 hover:to-cyan-700 transition-all duration-300 transform hover:scale-105"
              >
                Contact Us
              </Link>
              <button className="border border-white/20 text-white px-8 py-3 rounded-lg font-semibold hover:bg-white/10 transition-all duration-300">
                Submit General Application
              </button>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default Careers;
'use client';
import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { ArrowRight, MapPin, Clock, Users, Award, Zap, Brain, Shield, Globe, Mail, Phone } from 'lucide-react';

const CareersPage: React.FC = () => {
  const [selectedDepartment, setSelectedDepartment] = useState('All');

  const jobOpenings = [
    {
      id: 'senior-ai-engineer',
      title: 'Senior AI Engineer',
      department: 'Engineering',
      location: 'Remote / New York',
      type: 'Full-time',
      experience: '5+ years',
      description: 'Lead the development of cutting-edge AI solutions and machine learning models for enterprise clients.',
      requirements: [
        'Master\'s degree in Computer Science or related field',
        '5+ years experience in AI/ML development',
        'Proficiency in Python, TensorFlow, PyTorch',
        'Experience with cloud platforms (AWS, Azure, GCP)',
        'Strong problem-solving and communication skills'
      ],
      benefits: [
        'Competitive salary ($120k - $180k)',
        'Stock options',
        'Health, dental, vision insurance',
        'Flexible work arrangements',
        'Professional development budget'
      ]
    },
    {
      id: 'devops-engineer',
      title: 'DevOps Engineer',
      department: 'Engineering',
      location: 'Remote / San Francisco',
      type: 'Full-time',
      experience: '3+ years',
      description: 'Build and maintain scalable cloud infrastructure and CI/CD pipelines for our AI platform.',
      requirements: [
        'Bachelor\'s degree in Computer Science or related field',
        '3+ years experience in DevOps/Infrastructure',
        'Experience with Docker, Kubernetes, Terraform',
        'Knowledge of AWS, Azure, or GCP',
        'Scripting skills (Bash, Python, PowerShell)'
      ],
      benefits: [
        'Competitive salary ($100k - $150k)',
        'Stock options',
        'Health, dental, vision insurance',
        'Remote work options',
        'Learning and development opportunities'
      ]
    },
    {
      id: 'ai-product-manager',
      title: 'AI Product Manager',
      department: 'Product',
      location: 'Remote / Austin',
      type: 'Full-time',
      experience: '4+ years',
      description: 'Drive product strategy and roadmap for our AI-powered solutions and micro SaaS tools.',
      requirements: [
        'Bachelor\'s degree in Business, Engineering, or related field',
        '4+ years experience in product management',
        'Experience with AI/ML products',
        'Strong analytical and communication skills',
        'Experience with agile development methodologies'
      ],
      benefits: [
        'Competitive salary ($110k - $160k)',
        'Stock options',
        'Health, dental, vision insurance',
        'Flexible work arrangements',
        'Product management training'
      ]
    },
    {
      id: 'sales-engineer',
      title: 'Sales Engineer',
      department: 'Sales',
      location: 'Remote / Chicago',
      type: 'Full-time',
      experience: '3+ years',
      description: 'Provide technical expertise and support to our sales team and enterprise clients.',
      requirements: [
        'Bachelor\'s degree in Engineering or related field',
        '3+ years experience in technical sales',
        'Knowledge of AI/ML technologies',
        'Excellent presentation and communication skills',
        'Experience with enterprise software sales'
      ],
      benefits: [
        'Competitive salary ($90k - $140k) + commission',
        'Stock options',
        'Health, dental, vision insurance',
        'Travel opportunities',
        'Sales training and development'
      ]
    },
    {
      id: 'ux-designer',
      title: 'UX Designer',
      department: 'Design',
      location: 'Remote / Seattle',
      type: 'Full-time',
      experience: '3+ years',
      description: 'Design intuitive and engaging user experiences for our AI-powered applications and dashboards.',
      requirements: [
        'Bachelor\'s degree in Design or related field',
        '3+ years experience in UX/UI design',
        'Proficiency in Figma, Sketch, Adobe Creative Suite',
        'Experience with data visualization',
        'Portfolio demonstrating AI/ML product design'
      ],
      benefits: [
        'Competitive salary ($80k - $120k)',
        'Stock options',
        'Health, dental, vision insurance',
        'Design tools and software',
        'Creative freedom and innovation'
      ]
    },
    {
      id: 'customer-success-manager',
      title: 'Customer Success Manager',
      department: 'Customer Success',
      location: 'Remote / Boston',
      type: 'Full-time',
      experience: '2+ years',
      description: 'Ensure customer satisfaction and success with our AI solutions and drive adoption.',
      requirements: [
        'Bachelor\'s degree in Business or related field',
        '2+ years experience in customer success',
        'Experience with SaaS products',
        'Strong communication and relationship-building skills',
        'Analytical and problem-solving abilities'
      ],
      benefits: [
        'Competitive salary ($70k - $110k)',
        'Stock options',
        'Health, dental, vision insurance',
        'Customer success training',
        'Career growth opportunities'
      ]
    }
  ];

  const departments = ['All', 'Engineering', 'Product', 'Sales', 'Design', 'Customer Success', 'Marketing', 'Operations'];

  const filteredJobs = jobOpenings.filter(job => 
    selectedDepartment === 'All' || job.department === selectedDepartment
  );

  const companyBenefits = [
    {
      icon: Award,
      title: 'Competitive Compensation',
      description: 'Above-market salaries with stock options and performance bonuses'
    },
    {
      icon: Globe,
      title: 'Remote-First Culture',
      description: 'Work from anywhere with flexible hours and time zones'
    },
    {
      icon: Brain,
      title: 'Learning & Development',
      description: 'Annual learning budget, conferences, and skill development programs'
    },
    {
      icon: Shield,
      title: 'Health & Wellness',
      description: 'Comprehensive health insurance, mental health support, and wellness programs'
    },
    {
      icon: Users,
      title: 'Inclusive Environment',
      description: 'Diverse team with equal opportunities and inclusive policies'
    },
    {
      icon: Zap,
      title: 'Cutting-Edge Technology',
      description: 'Work with the latest AI and cloud technologies'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 cyber-grid neural-network-bg matrix-rain">
      <Helmet>
        <title>Careers | Zion Tech Group - Join Our Team</title>
        <meta name="description" content="Join Zion Tech Group and build the future of AI and technology. Explore career opportunities, benefits, and our inclusive culture." />
        <meta name="keywords" content="careers, jobs, AI engineer, software developer, product manager, remote jobs, tech careers" />
        <link rel="canonical" href="https://ziontechgroup.com/careers" />
      </Helmet>

      <section className="relative py-20 px-4 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,rgba(147,51,234,0.3)_0%,transparent_50%)] animate-pulse" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(59,130,246,0.3)_0%,transparent_50%)] animate-pulse" style={{ animationDelay: '1s' }} />
        <div className="relative max-w-7xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 cyber-text">
            Join Our Team
          </h1>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Build the future of AI and technology with us. Join a team of innovators, creators, and problem-solvers.
          </p>
        </div>
      </section>

      {/* Company Benefits */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 neon-text">
              Why Work With Us?
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              We offer competitive benefits and a culture that values innovation, growth, and work-life balance.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {companyBenefits.map((benefit, index) => (
              <div key={index} className="cyber-card hologram-card p-6 text-center hover:scale-105 transition-all duration-300">
                <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <benefit.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">{benefit.title}</h3>
                <p className="text-gray-300">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Job Openings */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 neon-text">
              Open Positions
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Explore our current job openings and find the perfect role for you.
            </p>
          </div>

          {/* Department Filter */}
          <div className="cyber-card hologram-card p-6 mb-12">
            <div className="flex flex-wrap gap-2 justify-center">
              {departments.map((dept) => (
                <button
                  key={dept}
                  onClick={() => setSelectedDepartment(dept)}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                    selectedDepartment === dept
                      ? 'bg-cyan-500 text-white'
                      : 'bg-white/10 text-gray-300 hover:bg-white/20'
                  }`}
                >
                  {dept}
                </button>
              ))}
            </div>
          </div>

          {/* Jobs Grid */}
          <div className="space-y-8">
            {filteredJobs.map((job) => (
              <div key={job.id} className="cyber-card hologram-card p-8 hover:scale-105 transition-all duration-300">
                <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-6">
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-white mb-2">{job.title}</h3>
                    <div className="flex flex-wrap items-center gap-4 text-sm text-gray-400 mb-4">
                      <div className="flex items-center">
                        <Users className="w-4 h-4 mr-2" />
                        {job.department}
                      </div>
                      <div className="flex items-center">
                        <MapPin className="w-4 h-4 mr-2" />
                        {job.location}
                      </div>
                      <div className="flex items-center">
                        <Clock className="w-4 h-4 mr-2" />
                        {job.type}
                      </div>
                      <div className="flex items-center">
                        <Award className="w-4 h-4 mr-2" />
                        {job.experience}
                      </div>
                    </div>
                    <p className="text-gray-300 mb-4">{job.description}</p>
                  </div>
                  <div className="lg:ml-8">
                    <Link
                      to={`/careers/${job.id}`}
                      className="cyber-button inline-flex items-center"
                    >
                      Apply Now
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </Link>
                  </div>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="text-lg font-semibold text-white mb-3">Requirements:</h4>
                    <ul className="space-y-2">
                      {job.requirements.map((req, reqIndex) => (
                        <li key={reqIndex} className="flex items-start text-sm text-gray-300">
                          <div className="w-2 h-2 bg-cyan-400 rounded-full mr-3 mt-2 flex-shrink-0" />
                          {req}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-white mb-3">Benefits:</h4>
                    <ul className="space-y-2">
                      {job.benefits.map((benefit, benefitIndex) => (
                        <li key={benefitIndex} className="flex items-start text-sm text-gray-300">
                          <div className="w-2 h-2 bg-green-400 rounded-full mr-3 mt-2 flex-shrink-0" />
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
              <p className="text-gray-400 text-lg">No positions found in the selected department.</p>
            </div>
          )}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto text-center cyber-card hologram-card p-12">
          <h2 className="text-3xl font-bold text-white mb-6 neon-text">
            Don't See the Right Role?
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            We're always looking for talented individuals. Send us your resume and we'll keep you in mind for future opportunities.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="cyber-button inline-flex items-center justify-center"
            >
              Send Resume
              <ArrowRight className="w-5 h-5 ml-2" />
            </Link>
            <a
              href="mailto:careers@ziontechgroup.com"
              className="border-2 border-cyan-400 text-cyan-400 px-8 py-3 rounded-lg font-semibold hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300 inline-flex items-center justify-center"
            >
              <Mail className="w-5 h-5 mr-2" />
              Email HR Team
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CareersPage;
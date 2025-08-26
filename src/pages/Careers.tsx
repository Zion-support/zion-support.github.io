import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  Briefcase, 
  Users, 
  Award, 
  Globe, 
  Zap, 
  Shield, 
  Code, 
  Brain, 
  Rocket,
  Star,
  Heart,
  Lightbulb,
  TrendingUp,
  MapPin,
  Clock,
  DollarSign
} from 'lucide-react';

const Careers: React.FC = () => {
  const [selectedDepartment, setSelectedDepartment] = useState('all');

  const departments = [
    { id: 'all', name: 'All Departments', count: 12 },
    { id: 'ai', name: 'AI & Machine Learning', count: 4 },
    { id: 'engineering', name: 'Engineering', count: 3 },
    { id: 'cybersecurity', name: 'Cybersecurity', count: 2 },
    { id: 'business', name: 'Business Development', count: 2 },
    { id: 'operations', name: 'Operations', count: 1 }
  ];

  const jobOpenings = [
    {
      id: 1,
      title: 'Senior AI Research Engineer',
      department: 'ai',
      location: 'Remote / Wilmington, DE',
      type: 'Full-time',
      experience: '5+ years',
      salary: '$120K - $180K',
      description: 'Lead research in autonomous AI systems and quantum machine learning algorithms.',
      requirements: [
        'PhD in Computer Science, AI, or related field',
        'Experience with neural networks and deep learning',
        'Knowledge of quantum computing principles',
        'Strong research and publication record'
      ],
      benefits: [
        'Competitive salary and equity',
        'Flexible work arrangements',
        'Professional development budget',
        'Health and wellness benefits'
      ]
    },
    {
      id: 2,
      title: 'Cloud Infrastructure Architect',
      department: 'engineering',
      location: 'Remote / London, UK',
      type: 'Full-time',
      experience: '7+ years',
      salary: '£80K - £120K',
      description: 'Design and implement scalable cloud solutions for enterprise clients.',
      requirements: [
        'Expertise in AWS, Azure, and GCP',
        'Experience with Kubernetes and Docker',
        'Knowledge of infrastructure as code',
        'Strong DevOps practices'
      ],
      benefits: [
        'Competitive salary package',
        'Remote work options',
        'Training and certification support',
        'Generous vacation policy'
      ]
    },
    {
      id: 3,
      title: 'Cybersecurity Specialist',
      department: 'cybersecurity',
      location: 'Remote / Toronto, CA',
      type: 'Full-time',
      experience: '3+ years',
      salary: 'CA$90K - CA$130K',
      description: 'Protect client systems with advanced security solutions and threat detection.',
      requirements: [
        'CISSP, CISM, or similar certifications',
        'Experience with SIEM and threat hunting',
        'Knowledge of compliance frameworks',
        'Incident response experience'
      ],
      benefits: [
        'Competitive compensation',
        'Professional development',
        'Health and dental coverage',
        'Flexible scheduling'
      ]
    },
    {
      id: 4,
      title: 'Business Development Manager',
      department: 'business',
      location: 'Remote / New York, NY',
      type: 'Full-time',
      experience: '5+ years',
      salary: '$100K - $150K + Commission',
      description: 'Drive business growth through strategic partnerships and client acquisition.',
      requirements: [
        'Proven sales track record in tech',
        'Experience with enterprise sales',
        'Strong relationship building skills',
        'Understanding of AI/ML market'
      ],
      benefits: [
        'Base salary + commission',
        'Performance bonuses',
        'Travel opportunities',
        'Career advancement path'
      ]
    },
    {
      id: 5,
      title: 'DevOps Engineer',
      department: 'engineering',
      location: 'Remote / San Francisco, CA',
      type: 'Full-time',
      experience: '4+ years',
      salary: '$130K - $180K',
      description: 'Automate and optimize our development and deployment processes.',
      requirements: [
        'Experience with CI/CD pipelines',
        'Knowledge of cloud platforms',
        'Scripting skills (Python, Bash)',
        'Monitoring and logging expertise'
      ],
      benefits: [
        'Competitive salary',
        'Stock options',
        'Flexible work hours',
        'Professional growth opportunities'
      ]
    },
    {
      id: 6,
      title: 'AI Solutions Consultant',
      department: 'ai',
      location: 'Remote / Multiple Locations',
      type: 'Full-time',
      experience: '6+ years',
      salary: '$110K - $160K',
      description: 'Help clients implement AI solutions and drive digital transformation.',
      requirements: [
        'Experience implementing AI solutions',
        'Strong consulting skills',
        'Industry knowledge (healthcare, finance)',
        'Project management experience'
      ],
      benefits: [
        'Competitive salary',
        'Performance bonuses',
        'Travel and client interaction',
        'Continuous learning opportunities'
      ]
    }
  ];

  const benefits = [
    {
      icon: Heart,
      title: 'Health & Wellness',
      description: 'Comprehensive health, dental, and vision coverage for you and your family'
    },
    {
      icon: Brain,
      title: 'Learning & Development',
      description: 'Continuous learning opportunities, conferences, and certification support'
    },
    {
      icon: Globe,
      title: 'Remote Work',
      description: 'Flexible work arrangements and remote work options'
    },
    {
      icon: Star,
      title: 'Career Growth',
      description: 'Clear career progression paths and mentorship programs'
    },
    {
      icon: Zap,
      title: 'Innovation Time',
      description: 'Dedicated time for research and innovative projects'
    },
    {
      icon: Users,
      title: 'Team Culture',
      description: 'Collaborative environment with diverse, talented professionals'
    }
  ];

  const culture = [
    {
      title: 'Innovation First',
      description: 'We encourage creative thinking and breakthrough solutions',
      icon: Lightbulb
    },
    {
      title: 'Continuous Learning',
      description: 'Ongoing education and skill development opportunities',
      icon: Brain
    },
    {
      title: 'Work-Life Balance',
      description: 'Flexible schedules and healthy work-life integration',
      icon: Heart
    },
    {
      title: 'Global Perspective',
      description: 'Diverse team with international experience and insights',
      icon: Globe
    }
  ];

  const filteredJobs = selectedDepartment === 'all' 
    ? jobOpenings 
    : jobOpenings.filter(job => job.department === selectedDepartment);

  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-blue-900 text-white">
      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
            Join Our Team
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto">
            Be part of a team that's revolutionizing technology and transforming businesses. 
            We're looking for passionate individuals who want to make a difference.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              to="#openings"
              className="bg-gradient-to-r from-blue-600 to-cyan-600 text-white px-8 py-3 rounded-lg font-semibold hover:from-blue-700 hover:to-cyan-700 transition-all duration-300"
            >
              View Open Positions
            </Link>
            <Link
              to="/contact"
              className="border border-white/20 text-white px-8 py-3 rounded-lg font-semibold hover:bg-white/10 transition-all duration-300"
            >
              Get in Touch
            </Link>
          </div>
        </div>
      </section>

      {/* Why Work With Us */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white/5">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-6">Why Work With Us?</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Join a company that values innovation, growth, and making a real impact
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="text-center p-6 rounded-xl bg-white/5 hover:bg-white/10 transition-all duration-300">
                <div className="flex justify-center mb-4">
                  <benefit.icon className="h-16 w-16 text-blue-400" />
                </div>
                <h3 className="text-xl font-semibold mb-3 text-white">{benefit.title}</h3>
                <p className="text-gray-300">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Company Culture */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-6">Our Culture</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              We foster an environment that promotes growth, innovation, and collaboration
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            {culture.map((item, index) => (
              <div key={index} className="flex items-start space-x-4 p-6 rounded-xl bg-white/5 hover:bg-white/10 transition-all duration-300">
                <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-lg flex items-center justify-center flex-shrink-0">
                  <item.icon className="h-6 w-6 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-white mb-2">{item.title}</h3>
                  <p className="text-gray-300">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Job Openings */}
      <section id="openings" className="py-20 px-4 sm:px-6 lg:px-8 bg-white/5">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-6">Open Positions</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Find the perfect role that matches your skills and career goals
            </p>
          </div>

          {/* Department Filter */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {departments.map((dept) => (
              <button
                key={dept.id}
                onClick={() => setSelectedDepartment(dept.id)}
                className={`px-6 py-3 rounded-lg font-medium transition-all duration-300 ${
                  selectedDepartment === dept.id
                    ? 'bg-gradient-to-r from-blue-600 to-cyan-600 text-white'
                    : 'bg-white/10 text-gray-300 hover:bg-white/20'
                }`}
              >
                {dept.name} ({dept.count})
              </button>
            ))}
          </div>

          {/* Job Listings */}
          <div className="space-y-6">
            {filteredJobs.map((job) => (
              <div key={job.id} className="bg-white/5 rounded-xl p-6 border border-white/10 hover:border-white/20 transition-all duration-300">
                <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-4">
                  <div>
                    <h3 className="text-2xl font-bold text-white mb-2">{job.title}</h3>
                    <div className="flex flex-wrap items-center gap-4 text-sm text-gray-300">
                      <span className="flex items-center">
                        <Briefcase className="h-4 w-4 mr-2" />
                        {job.department}
                      </span>
                      <span className="flex items-center">
                        <MapPin className="h-4 w-4 mr-2" />
                        {job.location}
                      </span>
                      <span className="flex items-center">
                        <Clock className="h-4 w-4 mr-2" />
                        {job.type}
                      </span>
                      <span className="flex items-center">
                        <TrendingUp className="h-4 w-4 mr-2" />
                        {job.experience}
                      </span>
                      <span className="flex items-center">
                        <DollarSign className="h-4 w-4 mr-2" />
                        {job.salary}
                      </span>
                    </div>
                  </div>
                  <div className="mt-4 lg:mt-0">
                    <button className="bg-gradient-to-r from-blue-600 to-cyan-600 text-white px-6 py-2 rounded-lg font-semibold hover:from-blue-700 hover:to-cyan-700 transition-all duration-300">
                      Apply Now
                    </button>
                  </div>
                </div>
                
                <p className="text-gray-300 mb-4">{job.description}</p>
                
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="text-lg font-semibold text-blue-400 mb-3">Requirements</h4>
                    <ul className="space-y-2">
                      {job.requirements.map((req, idx) => (
                        <li key={idx} className="flex items-start text-gray-300">
                          <span className="text-blue-400 mr-2">•</span>
                          {req}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-cyan-400 mb-3">Benefits</h4>
                    <ul className="space-y-2">
                      {job.benefits.map((benefit, idx) => (
                        <li key={idx} className="flex items-start text-gray-300">
                          <span className="text-cyan-400 mr-2">•</span>
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
              <p className="text-gray-300 text-lg">No positions available in this department at the moment.</p>
              <p className="text-gray-400 mt-2">Check back later or contact us for future opportunities.</p>
            </div>
          )}
        </div>
      </section>

      {/* Application Process */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-6">Application Process</h2>
            <p className="text-xl text-gray-300">
              Simple and transparent process to join our team
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div className="text-center p-6 rounded-xl bg-white/5">
              <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white font-bold text-2xl">1</span>
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">Apply</h3>
              <p className="text-gray-300">Submit your application with resume and cover letter</p>
            </div>
            
            <div className="text-center p-6 rounded-xl bg-white/5">
              <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white font-bold text-2xl">2</span>
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">Interview</h3>
              <p className="text-gray-300">Technical and cultural fit discussions with our team</p>
            </div>
            
            <div className="text-center p-6 rounded-xl bg-white/5">
              <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white font-bold text-2xl">3</span>
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">Technical Assessment</h3>
              <p className="text-gray-300">Skills evaluation and problem-solving challenges</p>
            </div>
            
            <div className="text-center p-6 rounded-xl bg-white/5">
              <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white font-bold text-2xl">4</span>
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">Offer & Onboarding</h3>
              <p className="text-gray-300">Welcome to the team with comprehensive onboarding</p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-blue-600/20 to-cyan-600/20">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-6 text-white">Ready to Join Us?</h2>
          <p className="text-xl text-gray-300 mb-8">
            Don't see the perfect role? We're always looking for talented individuals. 
            Send us your resume and let's discuss opportunities.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              to="/contact"
              className="bg-gradient-to-r from-blue-600 to-cyan-600 text-white px-8 py-3 rounded-lg font-semibold hover:from-blue-700 hover:to-cyan-700 transition-all duration-300"
            >
              Send Your Resume
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
  );
};

export default Careers;
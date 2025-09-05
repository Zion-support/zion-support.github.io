import React, { useState } from 'react';
import Head from 'next/head';
import { motion } from 'framer-motion';
import { 
  Users, 
  MapPin, 
  Clock, 
  Briefcase, 
  GraduationCap, 
  Heart, 
  Zap, 
  Globe,
  ArrowRight,
  CheckCircle,
  Star,
  Award,
  Code,
  Brain,
  Shield,
  Cloud,
  Send,
  Filter,
  Search
} from 'lucide-react';

const jobOpenings = [
  {
    id: 1,
    title: 'Senior AI Engineer',
    department: 'AI & Machine Learning',
    location: 'Remote / Wilmington, DE',
    type: 'Full-time',
    experience: '5+ years',
    salary: '$120,000 - $180,000',
    description: 'We are looking for a Senior AI Engineer to join our cutting-edge AI team. You will be responsible for developing and implementing machine learning models, working with large datasets, and creating AI-powered solutions for our clients.',
    requirements: [
      'Master\'s degree in Computer Science, AI, or related field',
      '5+ years of experience in machine learning and AI',
      'Proficiency in Python, TensorFlow, PyTorch',
      'Experience with cloud platforms (AWS, Azure, GCP)',
      'Strong problem-solving and analytical skills'
    ],
    benefits: [
      'Competitive salary and equity',
      'Health, dental, and vision insurance',
      '401(k) with company matching',
      'Flexible work arrangements',
      'Professional development budget'
    ],
    posted: '2 days ago',
    featured: true
  },
  {
    id: 2,
    title: 'Cloud Solutions Architect',
    department: 'Cloud & DevOps',
    location: 'Wilmington, DE',
    type: 'Full-time',
    experience: '7+ years',
    salary: '$130,000 - $200,000',
    description: 'Join our cloud team as a Solutions Architect. You will design and implement scalable cloud infrastructure solutions, work with clients to migrate to the cloud, and ensure optimal performance and security.',
    requirements: [
      'Bachelor\'s degree in Computer Science or related field',
      '7+ years of cloud architecture experience',
      'AWS, Azure, or GCP certifications preferred',
      'Experience with Kubernetes and Docker',
      'Strong communication and client-facing skills'
    ],
    benefits: [
      'Competitive salary and equity',
      'Health, dental, and vision insurance',
      '401(k) with company matching',
      'Flexible work arrangements',
      'Professional development budget'
    ],
    posted: '1 week ago',
    featured: false
  },
  {
    id: 3,
    title: 'Cybersecurity Specialist',
    department: 'Security',
    location: 'Remote / Wilmington, DE',
    type: 'Full-time',
    experience: '3+ years',
    salary: '$90,000 - $140,000',
    description: 'We are seeking a Cybersecurity Specialist to help protect our clients\' systems and data. You will conduct security assessments, implement security measures, and respond to security incidents.',
    requirements: [
      'Bachelor\'s degree in Cybersecurity or related field',
      '3+ years of cybersecurity experience',
      'CISSP, CISM, or similar certifications',
      'Experience with security tools and frameworks',
      'Knowledge of compliance standards (SOC 2, ISO 27001)'
    ],
    benefits: [
      'Competitive salary and equity',
      'Health, dental, and vision insurance',
      '401(k) with company matching',
      'Flexible work arrangements',
      'Professional development budget'
    ],
    posted: '3 days ago',
    featured: true
  },
  {
    id: 4,
    title: 'Full Stack Developer',
    department: 'Product Development',
    location: 'Wilmington, DE',
    type: 'Full-time',
    experience: '3+ years',
    salary: '$80,000 - $130,000',
    description: 'Join our product development team as a Full Stack Developer. You will work on building and maintaining web applications, APIs, and microservices for our clients.',
    requirements: [
      'Bachelor\'s degree in Computer Science or related field',
      '3+ years of full-stack development experience',
      'Proficiency in React, Node.js, and databases',
      'Experience with cloud platforms',
      'Strong problem-solving skills'
    ],
    benefits: [
      'Competitive salary and equity',
      'Health, dental, and vision insurance',
      '401(k) with company matching',
      'Flexible work arrangements',
      'Professional development budget'
    ],
    posted: '5 days ago',
    featured: false
  },
  {
    id: 5,
    title: 'Data Scientist',
    department: 'Data Science',
    location: 'Remote',
    type: 'Full-time',
    experience: '4+ years',
    salary: '$100,000 - $160,000',
    description: 'We are looking for a Data Scientist to join our data team. You will analyze complex datasets, build predictive models, and provide insights to help our clients make data-driven decisions.',
    requirements: [
      'Master\'s degree in Data Science, Statistics, or related field',
      '4+ years of data science experience',
      'Proficiency in Python, R, SQL',
      'Experience with machine learning libraries',
      'Strong statistical and analytical skills'
    ],
    benefits: [
      'Competitive salary and equity',
      'Health, dental, and vision insurance',
      '401(k) with company matching',
      'Flexible work arrangements',
      'Professional development budget'
    ],
    posted: '1 week ago',
    featured: false
  },
  {
    id: 6,
    title: 'DevOps Engineer',
    department: 'Cloud & DevOps',
    location: 'Wilmington, DE',
    type: 'Full-time',
    experience: '4+ years',
    salary: '$95,000 - $150,000',
    description: 'Join our DevOps team to help automate and streamline our development and deployment processes. You will work with CI/CD pipelines, infrastructure as code, and monitoring systems.',
    requirements: [
      'Bachelor\'s degree in Computer Science or related field',
      '4+ years of DevOps experience',
      'Experience with Docker, Kubernetes, and cloud platforms',
      'Proficiency in scripting languages (Python, Bash)',
      'Knowledge of infrastructure as code (Terraform, CloudFormation)'
    ],
    benefits: [
      'Competitive salary and equity',
      'Health, dental, and vision insurance',
      '401(k) with company matching',
      'Flexible work arrangements',
      'Professional development budget'
    ],
    posted: '4 days ago',
    featured: false
  }
];

const benefits = [
  {
    icon: Heart,
    title: 'Health & Wellness',
    description: 'Comprehensive health, dental, and vision insurance for you and your family.'
  },
  {
    icon: Zap,
    title: 'Flexible Work',
    description: 'Remote work options and flexible hours to support work-life balance.'
  },
  {
    icon: GraduationCap,
    title: 'Learning & Development',
    description: 'Annual budget for courses, conferences, and professional development.'
  },
  {
    icon: Award,
    title: 'Career Growth',
    description: 'Clear career paths and opportunities for advancement within the company.'
  },
  {
    icon: Globe,
    title: 'Global Impact',
    description: 'Work on projects that make a real difference for clients worldwide.'
  },
  {
    icon: Users,
    title: 'Great Team',
    description: 'Collaborate with talented, passionate professionals in a supportive environment.'
  }
];

const culture = [
  'Innovation-driven environment',
  'Collaborative and inclusive culture',
  'Continuous learning opportunities',
  'Work-life balance',
  'Diverse and talented team',
  'Cutting-edge technology projects'
];

export default function CareersPage() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedDepartment, setSelectedDepartment] = useState('All');
  const [selectedType, setSelectedType] = useState('All');

  const departments = ['All', 'AI & Machine Learning', 'Cloud & DevOps', 'Security', 'Product Development', 'Data Science'];
  const jobTypes = ['All', 'Full-time', 'Part-time', 'Contract', 'Internship'];

  const filteredJobs = jobOpenings.filter(job => {
    const matchesSearch = job.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         job.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesDepartment = selectedDepartment === 'All' || job.department === selectedDepartment;
    const matchesType = selectedType === 'All' || job.type === selectedType;
    
    return matchesSearch && matchesDepartment && matchesType;
  });

  return (
    <>
      <Head>
        <title>Careers - Zion Tech Group | Join Our Technology Team</title>
        <meta name="description" content="Join Zion Tech Group and work with cutting-edge technology. Explore career opportunities in AI, cloud computing, cybersecurity, and software development." />
        <meta name="keywords" content="zion tech careers, technology jobs, AI engineer jobs, cloud jobs, cybersecurity careers" />
        <meta property="og:title" content="Careers - Zion Tech Group" />
        <meta property="og:description" content="Join our team of technology experts and innovators." />
        <meta property="og:url" content="https://ziontechgroup.com/careers" />
        <meta property="og:type" content="website" />
      </Head>

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
        {/* Hero Section */}
        <section className="relative bg-gradient-to-br from-blue-900 via-purple-900 to-indigo-900 text-white py-20 overflow-hidden">
          <div className="absolute inset-0">
            <div className="absolute top-20 left-10 w-72 h-72 bg-blue-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse"></div>
            <div className="absolute top-40 right-10 w-72 h-72 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse animation-delay-2000"></div>
            <div className="absolute -bottom-8 left-20 w-72 h-72 bg-indigo-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse animation-delay-4000"></div>
          </div>

          <div className="container mx-auto px-4 relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center"
            >
              <h1 className="text-4xl md:text-6xl font-bold mb-6">
                Join Our Team
                <span className="block text-blue-400">Build the Future of Technology</span>
              </h1>
              <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto">
                Work with cutting-edge technology, collaborate with talented professionals, and make a real impact on businesses worldwide.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="#open-positions"
                  className="px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-lg hover:shadow-lg transition-all duration-300 font-semibold"
                >
                  View Open Positions
                </a>
                <a
                  href="/contact"
                  className="px-8 py-4 border-2 border-white text-white rounded-lg hover:bg-white hover:text-gray-900 transition-all duration-300 font-semibold"
                >
                  Send Your Resume
                </a>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Why Work With Us */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Why Work With Us?</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Join a team that values innovation, collaboration, and personal growth.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {benefits.map((benefit, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="text-center p-6 bg-gray-50 rounded-lg hover:shadow-lg transition-all duration-300"
                >
                  <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <benefit.icon className="w-8 h-8 text-blue-600" />
                  </div>
                  <h3 className="text-xl font-semibold mb-3">{benefit.title}</h3>
                  <p className="text-gray-600">{benefit.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Culture Section */}
        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
              >
                <h2 className="text-3xl md:text-4xl font-bold mb-6">Our Culture</h2>
                <p className="text-xl text-gray-600 mb-8">
                  We foster an environment where innovation thrives, collaboration is encouraged, and every team member can grow and succeed.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {culture.map((item, index) => (
                    <div key={index} className="flex items-center">
                      <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                      <span className="text-gray-700">{item}</span>
                    </div>
                  ))}
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                className="bg-white rounded-lg shadow-lg p-8"
              >
                <h3 className="text-2xl font-semibold mb-6">Quick Stats</h3>
                <div className="space-y-4">
                  <div className="flex justify-between items-center">
                    <span className="text-gray-600">Team Size</span>
                    <span className="font-semibold">50+ Members</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-600">Average Tenure</span>
                    <span className="font-semibold">3.5 Years</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-600">Remote Work</span>
                    <span className="font-semibold">80% Remote</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-600">Employee Satisfaction</span>
                    <span className="font-semibold text-green-600">4.8/5</span>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Job Openings */}
        <section id="open-positions" className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Open Positions</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Find the perfect role that matches your skills and career goals.
              </p>
            </motion.div>

            {/* Filters */}
            <div className="bg-gray-50 rounded-lg p-6 mb-8">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Search</label>
                  <div className="relative">
                    <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                    <input
                      type="text"
                      placeholder="Search jobs..."
                      value={searchTerm}
                      onChange={(e) => setSearchTerm(e.target.value)}
                      className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Department</label>
                  <select
                    value={selectedDepartment}
                    onChange={(e) => setSelectedDepartment(e.target.value)}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  >
                    {departments.map(dept => (
                      <option key={dept} value={dept}>{dept}</option>
                    ))}
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Job Type</label>
                  <select
                    value={selectedType}
                    onChange={(e) => setSelectedType(e.target.value)}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  >
                    {jobTypes.map(type => (
                      <option key={type} value={type}>{type}</option>
                    ))}
                  </select>
                </div>
              </div>
            </div>

            {/* Job Listings */}
            <div className="space-y-6">
              {filteredJobs.map((job, index) => (
                <motion.div
                  key={job.id}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className={`bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-all duration-300 ${
                    job.featured ? 'border-l-4 border-blue-500' : ''
                  }`}
                >
                  <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-4">
                    <div className="flex-1">
                      <div className="flex items-center mb-2">
                        <h3 className="text-xl font-semibold mr-3">{job.title}</h3>
                        {job.featured && (
                          <span className="px-2 py-1 bg-blue-100 text-blue-800 text-xs rounded-full">
                            Featured
                          </span>
                        )}
                      </div>
                      <div className="flex flex-wrap items-center gap-4 text-sm text-gray-600 mb-3">
                        <div className="flex items-center">
                          <Briefcase className="w-4 h-4 mr-1" />
                          {job.department}
                        </div>
                        <div className="flex items-center">
                          <MapPin className="w-4 h-4 mr-1" />
                          {job.location}
                        </div>
                        <div className="flex items-center">
                          <Clock className="w-4 h-4 mr-1" />
                          {job.type}
                        </div>
                        <div className="flex items-center">
                          <Star className="w-4 h-4 mr-1" />
                          {job.experience}
                        </div>
                      </div>
                      <p className="text-gray-700 mb-4">{job.description}</p>
                    </div>
                    <div className="lg:ml-6 lg:text-right">
                      <div className="text-lg font-semibold text-blue-600 mb-2">{job.salary}</div>
                      <div className="text-sm text-gray-500 mb-4">Posted {job.posted}</div>
                      <button className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors font-medium">
                        Apply Now
                      </button>
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <h4 className="font-semibold text-gray-800 mb-2">Requirements:</h4>
                      <ul className="text-sm text-gray-600 space-y-1">
                        {job.requirements.slice(0, 3).map((req, idx) => (
                          <li key={idx} className="flex items-start">
                            <CheckCircle className="w-4 h-4 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                            {req}
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-800 mb-2">Benefits:</h4>
                      <ul className="text-sm text-gray-600 space-y-1">
                        {job.benefits.slice(0, 3).map((benefit, idx) => (
                          <li key={idx} className="flex items-start">
                            <CheckCircle className="w-4 h-4 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                            {benefit}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            {filteredJobs.length === 0 && (
              <div className="text-center py-12">
                <Briefcase className="w-16 h-16 text-gray-400 mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-gray-600 mb-2">No jobs found</h3>
                <p className="text-gray-500">Try adjusting your search criteria or check back later for new openings.</p>
              </div>
            )}
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-blue-600 text-white">
          <div className="container mx-auto px-4 text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Don't See the Right Role?
              </h2>
              <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
                We're always looking for talented individuals. Send us your resume and we'll keep you in mind for future opportunities.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="/contact"
                  className="px-8 py-4 bg-white text-blue-600 rounded-lg hover:bg-gray-100 transition-all duration-300 font-semibold flex items-center justify-center"
                >
                  <Send className="w-5 h-5 mr-2" />
                  Send Your Resume
                </a>
                <a
                  href="/team"
                  className="px-8 py-4 border-2 border-white text-white rounded-lg hover:bg-white hover:text-blue-600 transition-all duration-300 font-semibold flex items-center justify-center"
                >
                  <Users className="w-5 h-5 mr-2" />
                  Meet Our Team
                </a>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </>
  );
}
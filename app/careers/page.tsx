'use client';
import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { 
  Search, 
  Filter, 
  MapPin, 
  Clock, 
  Users, 
  ArrowRight,
  Briefcase,
  GraduationCap,
  Heart,
  Zap,
  Target,
  Award,
  CheckCircle,
  ExternalLink
} from 'lucide-react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

const CareersPage: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedDepartment, setSelectedDepartment] = useState('all');

  const jobOpenings = [
    {
      id: 1,
      title: 'Senior AI Engineer',
      department: 'Engineering',
      location: 'Remote / Middletown, DE',
      type: 'Full-time',
      experience: '5+ years',
      description: 'Lead the development of cutting-edge AI solutions and machine learning models for enterprise clients.',
      requirements: [
        'Master\'s degree in Computer Science or related field',
        '5+ years experience in AI/ML development',
        'Expertise in Python, TensorFlow, PyTorch',
        'Experience with cloud platforms (AWS, Azure, GCP)',
        'Strong problem-solving and communication skills'
      ],
      benefits: [
        'Competitive salary ($120k - $180k)',
        'Health, dental, and vision insurance',
        '401(k) with company matching',
        'Flexible work arrangements',
        'Professional development budget'
      ],
      posted: '2024-01-15',
      featured: true
    },
    {
      id: 2,
      title: 'Cloud Solutions Architect',
      department: 'Engineering',
      location: 'Remote / Middletown, DE',
      type: 'Full-time',
      experience: '7+ years',
      description: 'Design and implement scalable cloud infrastructure solutions for enterprise clients.',
      requirements: [
        'Bachelor\'s degree in Computer Science or related field',
        '7+ years experience in cloud architecture',
        'Expertise in AWS, Azure, and GCP',
        'Experience with DevOps and CI/CD',
        'Strong leadership and client-facing skills'
      ],
      benefits: [
        'Competitive salary ($130k - $200k)',
        'Health, dental, and vision insurance',
        '401(k) with company matching',
        'Flexible work arrangements',
        'Professional development budget'
      ],
      posted: '2024-01-12',
      featured: true
    },
    {
      id: 3,
      title: 'Cybersecurity Specialist',
      department: 'Security',
      location: 'Remote / Middletown, DE',
      type: 'Full-time',
      experience: '4+ years',
      description: 'Protect client systems and data with advanced cybersecurity solutions and threat detection.',
      requirements: [
        'Bachelor\'s degree in Cybersecurity or related field',
        '4+ years experience in cybersecurity',
        'Certifications: CISSP, CISM, or equivalent',
        'Experience with SIEM, firewalls, and penetration testing',
        'Strong analytical and problem-solving skills'
      ],
      benefits: [
        'Competitive salary ($90k - $140k)',
        'Health, dental, and vision insurance',
        '401(k) with company matching',
        'Flexible work arrangements',
        'Professional development budget'
      ],
      posted: '2024-01-10',
      featured: false
    },
    {
      id: 4,
      title: 'DevOps Engineer',
      department: 'Engineering',
      location: 'Remote / Middletown, DE',
      type: 'Full-time',
      experience: '3+ years',
      description: 'Automate deployment processes and maintain infrastructure for scalable applications.',
      requirements: [
        'Bachelor\'s degree in Computer Science or related field',
        '3+ years experience in DevOps',
        'Expertise in Docker, Kubernetes, and CI/CD',
        'Experience with monitoring and logging tools',
        'Strong scripting skills (Python, Bash)'
      ],
      benefits: [
        'Competitive salary ($80k - $130k)',
        'Health, dental, and vision insurance',
        '401(k) with company matching',
        'Flexible work arrangements',
        'Professional development budget'
      ],
      posted: '2024-01-08',
      featured: false
    },
    {
      id: 5,
      title: 'AI Product Manager',
      department: 'Product',
      location: 'Remote / Middletown, DE',
      type: 'Full-time',
      experience: '5+ years',
      description: 'Lead product strategy and development for AI-powered solutions and platforms.',
      requirements: [
        'Bachelor\'s degree in Business, Computer Science, or related field',
        '5+ years experience in product management',
        'Experience with AI/ML products',
        'Strong analytical and communication skills',
        'Experience with agile development methodologies'
      ],
      benefits: [
        'Competitive salary ($110k - $160k)',
        'Health, dental, and vision insurance',
        '401(k) with company matching',
        'Flexible work arrangements',
        'Professional development budget'
      ],
      posted: '2024-01-05',
      featured: false
    },
    {
      id: 6,
      title: 'Sales Engineer',
      department: 'Sales',
      location: 'Remote / Middletown, DE',
      type: 'Full-time',
      experience: '3+ years',
      description: 'Support sales team with technical expertise and client demonstrations.',
      requirements: [
        'Bachelor\'s degree in Engineering or related field',
        '3+ years experience in technical sales',
        'Strong technical background in AI/IT',
        'Excellent presentation and communication skills',
        'Experience with enterprise sales processes'
      ],
      benefits: [
        'Competitive salary ($70k - $120k) + commission',
        'Health, dental, and vision insurance',
        '401(k) with company matching',
        'Flexible work arrangements',
        'Professional development budget'
      ],
      posted: '2024-01-03',
      featured: false
    }
  ];

  const departments = [
    { id: 'all', name: 'All Departments', count: jobOpenings.length },
    { id: 'Engineering', name: 'Engineering', count: jobOpenings.filter(job => job.department === 'Engineering').length },
    { id: 'Security', name: 'Security', count: jobOpenings.filter(job => job.department === 'Security').length },
    { id: 'Product', name: 'Product', count: jobOpenings.filter(job => job.department === 'Product').length },
    { id: 'Sales', name: 'Sales', count: jobOpenings.filter(job => job.department === 'Sales').length }
  ];

  const filteredJobs = jobOpenings.filter(job => {
    const matchesSearch = job.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         job.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         job.department.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesDepartment = selectedDepartment === 'all' || job.department === selectedDepartment;
    return matchesSearch && matchesDepartment;
  });

  const companyValues = [
    {
      icon: Heart,
      title: 'People First',
      description: 'We believe our team is our greatest asset and invest in their growth and well-being.'
    },
    {
      icon: Zap,
      title: 'Innovation',
      description: 'We encourage creative thinking and embrace new technologies to solve complex problems.'
    },
    {
      icon: Target,
      title: 'Excellence',
      description: 'We strive for the highest quality in everything we do, from code to client relationships.'
    },
    {
      icon: Users,
      title: 'Collaboration',
      description: 'We work together as a team, sharing knowledge and supporting each other\'s success.'
    }
  ];

  const benefits = [
    'Competitive salary and equity options',
    'Comprehensive health, dental, and vision insurance',
    '401(k) with company matching up to 6%',
    'Flexible work arrangements and remote work options',
    'Professional development budget ($5,000/year)',
    'Generous paid time off and holidays',
    'Modern office space with latest technology',
    'Team building events and company retreats',
    'Mentorship programs and career growth opportunities',
    'Stocked kitchen with snacks and beverages'
  ];

  return (
    <>
      <Helmet>
        <title>Careers - Zion Tech Group | Join Our Team</title>
        <meta name="description" content="Join Zion Tech Group and help shape the future of AI and IT solutions. Explore open positions and discover why we're a great place to work." />
        <meta name="keywords" content="careers, jobs, AI engineer, cloud architect, cybersecurity, remote work, tech jobs" />
        <meta property="og:title" content="Careers - Zion Tech Group" />
        <meta property="og:description" content="Join our team and build the future of AI and IT" />
        <meta property="og:type" content="website" />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        <Navigation />
        
        <main className="container mx-auto px-4 py-16 pt-24">
          {/* Hero Section */}
          <section className="text-center mb-16">
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
              Join Our Team
            </h1>
            <p className="text-xl md:text-2xl text-cyan-400 mb-8 font-medium">
              Build the Future of AI and IT
            </p>
            <p className="text-lg text-gray-300 max-w-4xl mx-auto leading-relaxed">
              Join a team of passionate innovators who are transforming businesses with cutting-edge AI and IT solutions. 
              We're looking for talented individuals who share our vision and want to make a real impact.
            </p>
          </section>

          {/* Company Values */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold text-center text-white mb-12">
              Our Values
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {companyValues.map((value, index) => (
                <div
                  key={index}
                  className="bg-white/5 backdrop-blur-lg rounded-2xl p-6 border border-white/10 text-center"
                >
                  <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-full flex items-center justify-center mx-auto mb-4">
                    <value.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3">{value.title}</h3>
                  <p className="text-gray-300">{value.description}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Search and Filter */}
          <section className="mb-12">
            <div className="bg-white/5 backdrop-blur-lg rounded-2xl p-8 border border-white/10">
              <div className="flex flex-col lg:flex-row gap-6">
                <div className="flex-1">
                  <div className="relative">
                    <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                    <input
                      type="text"
                      placeholder="Search job openings..."
                      value={searchTerm}
                      onChange={(e) => setSearchTerm(e.target.value)}
                      className="w-full pl-10 pr-4 py-3 bg-slate-800 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
                    />
                  </div>
                </div>
                <div className="flex items-center space-x-2">
                  <Filter className="text-gray-400 w-5 h-5" />
                  <select
                    value={selectedDepartment}
                    onChange={(e) => setSelectedDepartment(e.target.value)}
                    className="px-4 py-3 bg-slate-800 border border-gray-600 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
                  >
                    {departments.map((department) => (
                      <option key={department.id} value={department.id}>
                        {department.name} ({department.count})
                      </option>
                    ))}
                  </select>
                </div>
              </div>
            </div>
          </section>

          {/* Job Openings */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold text-white mb-8 flex items-center">
              <Briefcase className="w-8 h-8 text-cyan-400 mr-3" />
              Open Positions
            </h2>
            <div className="space-y-6">
              {filteredJobs.map((job) => (
                <div
                  key={job.id}
                  className="bg-white/5 backdrop-blur-lg rounded-2xl p-6 border border-white/10 hover:border-cyan-400/30 transition-all duration-300"
                >
                  <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-4">
                    <div className="flex-1">
                      <div className="flex items-center space-x-2 mb-2">
                        <h3 className="text-xl font-bold text-white">{job.title}</h3>
                        {job.featured && (
                          <span className="bg-cyan-500/20 text-cyan-400 text-xs font-medium px-2 py-1 rounded-full">
                            Featured
                          </span>
                        )}
                      </div>
                      <div className="flex flex-wrap items-center gap-4 text-sm text-gray-300 mb-3">
                        <div className="flex items-center">
                          <MapPin className="w-4 h-4 mr-1" />
                          {job.location}
                        </div>
                        <div className="flex items-center">
                          <Clock className="w-4 h-4 mr-1" />
                          {job.type}
                        </div>
                        <div className="flex items-center">
                          <GraduationCap className="w-4 h-4 mr-1" />
                          {job.experience}
                        </div>
                        <div className="flex items-center">
                          <Users className="w-4 h-4 mr-1" />
                          {job.department}
                        </div>
                      </div>
                      <p className="text-gray-300 mb-4">{job.description}</p>
                    </div>
                    <div className="flex flex-col sm:flex-row gap-2 lg:ml-6">
                      <Link
                        to={`/careers/${job.id}`}
                        className="bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-6 py-2 rounded-lg font-medium hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 text-center"
                      >
                        View Details
                      </Link>
                      <Link
                        to="/contact"
                        className="border-2 border-cyan-400 text-cyan-400 px-6 py-2 rounded-lg font-medium hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300 text-center"
                      >
                        Apply Now
                      </Link>
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <h4 className="text-sm font-semibold text-white mb-2">Key Requirements:</h4>
                      <ul className="space-y-1">
                        {job.requirements.slice(0, 3).map((req, index) => (
                          <li key={index} className="flex items-center text-sm text-gray-300">
                            <CheckCircle className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
                            {req}
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <h4 className="text-sm font-semibold text-white mb-2">Benefits:</h4>
                      <ul className="space-y-1">
                        {job.benefits.slice(0, 3).map((benefit, index) => (
                          <li key={index} className="flex items-center text-sm text-gray-300">
                            <CheckCircle className="w-4 h-4 text-cyan-400 mr-2 flex-shrink-0" />
                            {benefit}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Benefits Section */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold text-center text-white mb-12">
              Why Work With Us?
            </h2>
            <div className="bg-white/5 backdrop-blur-lg rounded-2xl p-8 border border-white/10">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h3 className="text-xl font-bold text-white mb-4">Comprehensive Benefits</h3>
                  <ul className="space-y-3">
                    {benefits.slice(0, 5).map((benefit, index) => (
                      <li key={index} className="flex items-center text-gray-300">
                        <CheckCircle className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" />
                        {benefit}
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white mb-4">Additional Benefits</h3>
                  <ul className="space-y-3">
                    {benefits.slice(5).map((benefit, index) => (
                      <li key={index} className="flex items-center text-gray-300">
                        <CheckCircle className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" />
                        {benefit}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </section>

          {/* CTA Section */}
          <section className="text-center">
            <div className="bg-white/5 backdrop-blur-lg rounded-2xl p-8 border border-white/10">
              <h2 className="text-2xl font-bold text-white mb-4">
                Don't See the Right Role?
              </h2>
              <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
                We're always looking for talented individuals who share our passion for innovation. 
                Send us your resume and let us know how you'd like to contribute to our mission.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  to="/contact"
                  className="bg-gradient-to-r from-cyan-500 to-purple-500 text-white px-8 py-3 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-600 transition-all duration-300"
                >
                  Send Your Resume
                </Link>
                <a
                  href="mailto:careers@ziontechgroup.com"
                  className="border-2 border-cyan-400 text-cyan-400 px-8 py-3 rounded-lg font-semibold hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300"
                >
                  Email Us
                </a>
              </div>
            </div>
          </section>
        </main>
        
        <Footer />
      </div>
    </>
  );
};

export default CareersPage;
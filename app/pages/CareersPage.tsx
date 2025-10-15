import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { 
  ArrowRight, 
  MapPin,
  Clock,
  Users,
  Briefcase,
  Star,
  CheckCircle,
  Heart,
  Lightbulb,
  Target,
  Award,
  Mail,
  ExternalLink,
  Filter,
  Search
} from 'lucide-react';

const CareersPage: React.FC = () => {
  const [selectedDepartment, setSelectedDepartment] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');

  const departments = [
    { id: 'all', name: 'All Departments' },
    { id: 'engineering', name: 'Engineering' },
    { id: 'design', name: 'Design' },
    { id: 'product', name: 'Product' },
    { id: 'marketing', name: 'Marketing' },
    { id: 'sales', name: 'Sales' }
  ];

  const jobOpenings = [
    {
      id: 1,
      title: 'Senior AI Engineer',
      department: 'engineering',
      location: 'Remote / New York',
      type: 'Full-time',
      experience: '5+ years',
      description: 'Lead the development of cutting-edge AI solutions and machine learning models.',
      requirements: [
        'Master\'s degree in Computer Science or related field',
        '5+ years experience in AI/ML development',
        'Expertise in Python, TensorFlow, PyTorch',
        'Experience with cloud platforms (AWS, GCP, Azure)',
        'Strong problem-solving and communication skills'
      ],
      benefits: [
        'Competitive salary ($120k - $180k)',
        'Equity participation',
        'Health, dental, vision insurance',
        'Flexible work arrangements',
        'Professional development budget'
      ],
      posted: '2024-01-15',
      featured: true
    },
    {
      id: 2,
      title: 'UX/UI Designer',
      department: 'design',
      location: 'San Francisco, CA',
      type: 'Full-time',
      experience: '3+ years',
      description: 'Create beautiful and intuitive user experiences for our AI-powered products.',
      requirements: [
        'Bachelor\'s degree in Design or related field',
        '3+ years experience in UX/UI design',
        'Proficiency in Figma, Sketch, Adobe Creative Suite',
        'Experience with design systems',
        'Portfolio demonstrating user-centered design'
      ],
      benefits: [
        'Competitive salary ($80k - $120k)',
        'Equity participation',
        'Health, dental, vision insurance',
        'Flexible work arrangements',
        'Design tools and software budget'
      ],
      posted: '2024-01-12',
      featured: false
    },
    {
      id: 3,
      title: 'Product Manager',
      department: 'product',
      location: 'Remote / Austin',
      type: 'Full-time',
      experience: '4+ years',
      description: 'Drive product strategy and roadmap for our AI and IT solutions.',
      requirements: [
        'Bachelor\'s degree in Business or related field',
        '4+ years experience in product management',
        'Experience with AI/ML products preferred',
        'Strong analytical and communication skills',
        'Experience with agile development methodologies'
      ],
      benefits: [
        'Competitive salary ($100k - $150k)',
        'Equity participation',
        'Health, dental, vision insurance',
        'Flexible work arrangements',
        'Conference and training budget'
      ],
      posted: '2024-01-10',
      featured: true
    },
    {
      id: 4,
      title: 'DevOps Engineer',
      department: 'engineering',
      location: 'Remote',
      type: 'Full-time',
      experience: '3+ years',
      description: 'Build and maintain scalable cloud infrastructure for our AI services.',
      requirements: [
        'Bachelor\'s degree in Computer Science or related field',
        '3+ years experience in DevOps/Infrastructure',
        'Expertise in AWS, Docker, Kubernetes',
        'Experience with CI/CD pipelines',
        'Knowledge of monitoring and logging tools'
      ],
      benefits: [
        'Competitive salary ($90k - $140k)',
        'Equity participation',
        'Health, dental, vision insurance',
        'Flexible work arrangements',
        'Certification and training budget'
      ],
      posted: '2024-01-08',
      featured: false
    },
    {
      id: 5,
      title: 'Marketing Manager',
      department: 'marketing',
      location: 'New York, NY',
      type: 'Full-time',
      experience: '4+ years',
      description: 'Lead marketing initiatives for our AI and IT solutions.',
      requirements: [
        'Bachelor\'s degree in Marketing or related field',
        '4+ years experience in B2B marketing',
        'Experience with digital marketing channels',
        'Strong analytical and creative skills',
        'Experience in tech industry preferred'
      ],
      benefits: [
        'Competitive salary ($70k - $110k)',
        'Equity participation',
        'Health, dental, vision insurance',
        'Flexible work arrangements',
        'Marketing tools and software budget'
      ],
      posted: '2024-01-05',
      featured: false
    },
    {
      id: 6,
      title: 'Sales Engineer',
      department: 'sales',
      location: 'Remote / Chicago',
      type: 'Full-time',
      experience: '3+ years',
      description: 'Support sales team with technical expertise and product demonstrations.',
      requirements: [
        'Bachelor\'s degree in Engineering or related field',
        '3+ years experience in technical sales',
        'Strong technical and communication skills',
        'Experience with AI/ML technologies',
        'Ability to travel 25% of the time'
      ],
      benefits: [
        'Competitive salary ($80k - $130k)',
        'Commission structure',
        'Equity participation',
        'Health, dental, vision insurance',
        'Flexible work arrangements'
      ],
      posted: '2024-01-03',
      featured: false
    }
  ];

  const filteredJobs = jobOpenings.filter(job => {
    const matchesDepartment = selectedDepartment === 'all' || job.department === selectedDepartment;
    const matchesSearch = job.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         job.description.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesDepartment && matchesSearch;
  });

  const benefits = [
    {
      icon: Heart,
      title: 'Health & Wellness',
      description: 'Comprehensive health, dental, and vision insurance for you and your family.'
    },
    {
      icon: Lightbulb,
      title: 'Learning & Development',
      description: 'Annual budget for courses, conferences, and professional development.'
    },
    {
      icon: Target,
      title: 'Flexible Work',
      description: 'Remote work options and flexible hours to support work-life balance.'
    },
    {
      icon: Award,
      title: 'Equity Participation',
      description: 'Stock options to share in the company\'s success and growth.'
    }
  ];

  const cultureValues = [
    'Innovation and creativity are encouraged',
    'Collaboration and teamwork are essential',
    'Continuous learning and growth are supported',
    'Work-life balance is respected',
    'Diversity and inclusion are celebrated',
    'Client success drives everything we do'
  ];

  return (
    <>
      <Helmet>
        <title>Careers - Join Our Team | Zion Tech Group</title>
        <meta name="description" content="Join Zion Tech Group and be part of a team that's transforming businesses through AI and technology. Explore career opportunities and benefits." />
        <meta name="keywords" content="careers, jobs, AI engineer, developer, designer, product manager, Zion Tech Group careers" />
        <link rel="canonical" href="https://ziontechgroup.com/careers" />
      </Helmet>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-16">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-cyan-500/10 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-purple-500/10 rounded-full blur-3xl animate-pulse"></div>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
              Join Our
              <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
                {' '}Team
              </span>
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed">
              Be part of a team that's shaping the future of AI and technology. 
              We're looking for passionate individuals who want to make a real impact.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <a
                href="#openings"
                className="bg-gradient-to-r from-cyan-600 to-purple-600 hover:from-cyan-700 hover:to-purple-700 text-white font-semibold py-4 px-8 rounded-lg transition-all duration-300 transform hover:scale-105 hover:shadow-2xl hover:shadow-cyan-500/25 flex items-center"
              >
                View Open Positions
                <ArrowRight className="w-5 h-5 ml-2" />
              </a>
              <Link
                to="/contact"
                className="border-2 border-white/20 hover:border-cyan-400 text-white font-semibold py-4 px-8 rounded-lg transition-all duration-300 hover:bg-white/5 flex items-center"
              >
                <Mail className="w-5 h-5 mr-2" />
                Contact HR
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Search and Filter */}
      <section className="py-12 bg-slate-800">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row gap-6 items-center justify-between">
            {/* Search */}
            <div className="relative flex-1 max-w-md">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="text"
                placeholder="Search jobs..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-3 bg-slate-700 border border-slate-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
              />
            </div>

            {/* Department Filter */}
            <div className="flex flex-wrap gap-2">
              {departments.map((dept) => (
                <button
                  key={dept.id}
                  onClick={() => setSelectedDepartment(dept.id)}
                  className={`flex items-center px-4 py-2 rounded-lg transition-all duration-300 ${
                    selectedDepartment === dept.id
                      ? 'bg-cyan-600 text-white'
                      : 'bg-slate-700 text-gray-300 hover:bg-slate-600 hover:text-white'
                  }`}
                >
                  {dept.name}
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Job Openings */}
      <section id="openings" className="py-20 bg-slate-900">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">Open Positions</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Discover exciting career opportunities and find your perfect role with us.
            </p>
          </div>

          <div className="space-y-6">
            {filteredJobs.map((job) => (
              <div key={job.id} className={`bg-slate-800/50 hover:bg-slate-800/70 rounded-xl p-8 border transition-all duration-300 hover:transform hover:scale-105 ${
                job.featured ? 'border-cyan-500/50 ring-2 ring-cyan-500/20' : 'border-slate-700/50 hover:border-cyan-500/50'
              }`}>
                <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-6">
                  <div className="flex-1">
                    <div className="flex items-center mb-2">
                      <h3 className="text-2xl font-semibold text-white mr-4">{job.title}</h3>
                      {job.featured && (
                        <span className="bg-cyan-500/20 text-cyan-300 px-3 py-1 rounded-full text-sm font-medium">
                          Featured
                        </span>
                      )}
                    </div>
                    <div className="flex flex-wrap items-center gap-4 text-gray-300 mb-4">
                      <div className="flex items-center">
                        <Briefcase className="w-4 h-4 mr-2" />
                        {departments.find(d => d.id === job.department)?.name}
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
                        <Users className="w-4 h-4 mr-2" />
                        {job.experience}
                      </div>
                    </div>
                    <p className="text-gray-300 leading-relaxed">{job.description}</p>
                  </div>
                  <div className="mt-4 lg:mt-0 lg:ml-6">
                    <Link
                      to={`/careers/${job.id}`}
                      className="inline-flex items-center bg-gradient-to-r from-cyan-600 to-purple-600 hover:from-cyan-700 hover:to-purple-700 text-white font-semibold py-3 px-6 rounded-lg transition-all duration-300 transform hover:scale-105"
                    >
                      Apply Now
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </Link>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="text-white font-semibold mb-3">Key Requirements:</h4>
                    <ul className="space-y-2">
                      {job.requirements.slice(0, 3).map((req, index) => (
                        <li key={index} className="flex items-center text-gray-300 text-sm">
                          <CheckCircle className="w-4 h-4 text-green-400 mr-3 flex-shrink-0" />
                          {req}
                        </li>
                      ))}
                      {job.requirements.length > 3 && (
                        <li className="text-cyan-400 text-sm font-medium">
                          +{job.requirements.length - 3} more requirements
                        </li>
                      )}
                    </ul>
                  </div>
                  <div>
                    <h4 className="text-white font-semibold mb-3">Benefits:</h4>
                    <ul className="space-y-2">
                      {job.benefits.slice(0, 3).map((benefit, index) => (
                        <li key={index} className="flex items-center text-gray-300 text-sm">
                          <Star className="w-4 h-4 text-yellow-400 mr-3 flex-shrink-0" />
                          {benefit}
                        </li>
                      ))}
                      {job.benefits.length > 3 && (
                        <li className="text-cyan-400 text-sm font-medium">
                          +{job.benefits.length - 3} more benefits
                        </li>
                      )}
                    </ul>
                  </div>
                </div>

                <div className="mt-4 pt-4 border-t border-slate-700/50 flex items-center justify-between">
                  <span className="text-gray-400 text-sm">
                    Posted: {new Date(job.posted).toLocaleDateString()}
                  </span>
                  <Link
                    to={`/careers/${job.id}`}
                    className="text-cyan-400 hover:text-cyan-300 font-semibold text-sm transition-colors flex items-center"
                  >
                    View Details
                    <ExternalLink className="w-4 h-4 ml-1" />
                  </Link>
                </div>
              </div>
            ))}

            {filteredJobs.length === 0 && (
              <div className="text-center py-12">
                <div className="w-16 h-16 bg-slate-700 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Search className="w-8 h-8 text-gray-400" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">No jobs found</h3>
                <p className="text-gray-400">Try adjusting your search or filter criteria.</p>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-slate-800">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">Why Work With Us?</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              We offer competitive benefits and a supportive work environment that helps you grow and succeed.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="text-center group">
                <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-lg flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform">
                  <benefit.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-4">{benefit.title}</h3>
                <p className="text-gray-300 leading-relaxed">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Culture Section */}
      <section className="py-20 bg-gradient-to-br from-slate-900 to-purple-900">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-white mb-4">Our Culture</h2>
              <p className="text-xl text-gray-300">
                We believe that great technology comes from great people working in a supportive environment.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-slate-800/50 p-8 rounded-xl border border-slate-700/50">
                <h3 className="text-2xl font-semibold text-white mb-6">What We Value</h3>
                <ul className="space-y-4">
                  {cultureValues.map((value, index) => (
                    <li key={index} className="flex items-start text-gray-300">
                      <CheckCircle className="w-5 h-5 text-green-400 mr-3 flex-shrink-0 mt-1" />
                      {value}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="bg-slate-800/50 p-8 rounded-xl border border-slate-700/50">
                <h3 className="text-2xl font-semibold text-white mb-6">What We Offer</h3>
                <ul className="space-y-4">
                  <li className="flex items-start text-gray-300">
                    <CheckCircle className="w-5 h-5 text-green-400 mr-3 flex-shrink-0 mt-1" />
                    Competitive salary and equity participation
                  </li>
                  <li className="flex items-start text-gray-300">
                    <CheckCircle className="w-5 h-5 text-green-400 mr-3 flex-shrink-0 mt-1" />
                    Comprehensive health and wellness benefits
                  </li>
                  <li className="flex items-start text-gray-300">
                    <CheckCircle className="w-5 h-5 text-green-400 mr-3 flex-shrink-0 mt-1" />
                    Flexible work arrangements and remote options
                  </li>
                  <li className="flex items-start text-gray-300">
                    <CheckCircle className="w-5 h-5 text-green-400 mr-3 flex-shrink-0 mt-1" />
                    Professional development and learning opportunities
                  </li>
                  <li className="flex items-start text-gray-300">
                    <CheckCircle className="w-5 h-5 text-green-400 mr-3 flex-shrink-0 mt-1" />
                    Cutting-edge technology and tools
                  </li>
                  <li className="flex items-start text-gray-300">
                    <CheckCircle className="w-5 h-5 text-green-400 mr-3 flex-shrink-0 mt-1" />
                    Collaborative and inclusive work environment
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-slate-800">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold text-white mb-4">Ready to Join Us?</h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Don't see the perfect role? We're always looking for talented individuals. 
            Send us your resume and let's start a conversation.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link
              to="/contact"
              className="bg-gradient-to-r from-cyan-600 to-purple-600 hover:from-cyan-700 hover:to-purple-700 text-white font-semibold py-4 px-8 rounded-lg transition-all duration-300 transform hover:scale-105 flex items-center"
            >
              <Mail className="w-5 h-5 mr-2" />
              Send Your Resume
            </Link>
            <Link
              to="/team"
              className="border-2 border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-white font-semibold py-4 px-8 rounded-lg transition-all duration-300 flex items-center"
            >
              <Users className="w-5 h-5 mr-2" />
              Meet Our Team
            </Link>
          </div>
        </div>
      </section>
    </>
  );
};

export default CareersPage;
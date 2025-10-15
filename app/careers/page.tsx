import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { MapPin, Clock, Users, ArrowRight, Search, ExternalLink, CheckCircle, Star } from 'lucide-react';

const CareersPage: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedDepartment, setSelectedDepartment] = useState('all');
  const [selectedLocation, setSelectedLocation] = useState('all');

  const departments = [
    { id: 'all', name: 'All Departments' },
    { id: 'engineering', name: 'Engineering' },
    { id: 'ai-ml', name: 'AI & Machine Learning' },
    { id: 'design', name: 'Design' },
    { id: 'product', name: 'Product' },
    { id: 'sales', name: 'Sales' },
    { id: 'marketing', name: 'Marketing' }
  ];

  const locations = [
    { id: 'all', name: 'All Locations' },
    { id: 'remote', name: 'Remote' },
    { id: 'delaware', name: 'Delaware, US' },
    { id: 'london', name: 'London, UK' },
    { id: 'singapore', name: 'Singapore' }
  ];

  const jobOpenings = [
    {
      id: 1,
      title: 'Senior AI Engineer',
      department: 'ai-ml',
      location: 'remote',
      type: 'Full-time',
      experience: '5+ years',
      description: 'Lead the development of cutting-edge AI solutions and machine learning models.',
      requirements: [
        'Master&apos;s degree in Computer Science or related field',
        '5+ years experience in AI/ML development',
        'Expertise in Python, TensorFlow, PyTorch',
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
      posted: '2024-01-15',
      featured: true
    },
    {
      id: 2,
      title: 'Full Stack Developer',
      department: 'engineering',
      location: 'delaware',
      type: 'Full-time',
      experience: '3+ years',
      description: 'Build scalable web applications using modern technologies and best practices.',
      requirements: [
        'Bachelor&apos;s degree in Computer Science or equivalent',
        '3+ years full-stack development experience',
        'Proficiency in React, Node.js, TypeScript',
        'Experience with databases (PostgreSQL, MongoDB)',
        'Knowledge of cloud deployment and DevOps'
      ],
      benefits: [
        'Competitive salary',
        'Comprehensive health benefits',
        '401(k) with company matching',
        'Learning and development opportunities',
        'Team building events'
      ],
      posted: '2024-01-12',
      featured: false
    },
    {
      id: 3,
      title: 'UX/UI Designer',
      department: 'design',
      location: 'remote',
      type: 'Full-time',
      experience: '4+ years',
      description: 'Create intuitive and beautiful user experiences for our AI-powered products.',
      requirements: [
        'Bachelor&apos;s degree in Design or related field',
        '4+ years UX/UI design experience',
        'Proficiency in Figma, Sketch, Adobe Creative Suite',
        'Experience with design systems and prototyping',
        'Portfolio demonstrating AI/tech product design'
      ],
      benefits: [
        'Competitive salary and equity',
        'Health and wellness benefits',
        'Flexible work schedule',
        'Design tools and software budget',
        'Conference and training opportunities'
      ],
      posted: '2024-01-10',
      featured: false
    },
    {
      id: 4,
      title: 'Product Manager',
      department: 'product',
      location: 'london',
      type: 'Full-time',
      experience: '5+ years',
      description: 'Drive product strategy and roadmap for our AI and IT services platform.',
      requirements: [
        'Bachelor&apos;s degree in Business, Engineering, or related field',
        '5+ years product management experience',
        'Experience with AI/ML products preferred',
        'Strong analytical and communication skills',
        'Experience with agile development methodologies'
      ],
      benefits: [
        'Competitive salary and equity',
        'Private health insurance',
        'Pension contribution matching',
        'Flexible working arrangements',
        'Professional development budget'
      ],
      posted: '2024-01-08',
      featured: true
    },
    {
      id: 5,
      title: 'DevOps Engineer',
      department: 'engineering',
      location: 'remote',
      type: 'Full-time',
      experience: '4+ years',
      description: 'Build and maintain our cloud infrastructure and deployment pipelines.',
      requirements: [
        'Bachelor&apos;s degree in Computer Science or equivalent',
        '4+ years DevOps/Infrastructure experience',
        'Expertise in AWS, Docker, Kubernetes',
        'Experience with CI/CD pipelines',
        'Knowledge of monitoring and logging tools'
      ],
      benefits: [
        'Competitive salary and equity',
        'Comprehensive health benefits',
        'Home office setup budget',
        'Learning and certification support',
        'Flexible work hours'
      ],
      posted: '2024-01-05',
      featured: false
    },
    {
      id: 6,
      title: 'Sales Engineer',
      department: 'sales',
      location: 'singapore',
      type: 'Full-time',
      experience: '3+ years',
      description: 'Help clients understand and implement our AI and IT solutions.',
      requirements: [
        'Bachelor&apos;s degree in Engineering or related field',
        '3+ years technical sales experience',
        'Strong technical background in AI/ML or IT',
        'Excellent presentation and communication skills',
        'Experience in B2B sales environment'
      ],
      benefits: [
        'Competitive salary and commission',
        'Health and dental insurance',
        'Travel opportunities',
        'Sales training and development',
        'Performance bonuses'
      ],
      posted: '2024-01-03',
      featured: false
    }
  ];

  const companyValues = [
    {
      title: 'Innovation First',
      description: 'We encourage creative thinking and cutting-edge solutions'
    },
    {
      title: 'Collaboration',
      description: 'We work together to achieve common goals and shared success'
    },
    {
      title: 'Growth Mindset',
      description: 'We continuously learn and develop our skills and knowledge'
    },
    {
      title: 'Work-Life Balance',
      description: 'We support flexible working and personal well-being'
    }
  ];

  const benefits = [
    'Competitive salary and equity packages',
    'Comprehensive health, dental, and vision insurance',
    'Flexible work arrangements and remote options',
    'Professional development and learning budget',
    'Unlimited paid time off',
    '401(k) with company matching',
    'Home office setup and equipment budget',
    'Team building and social events',
    'Mentorship and career development programs',
    'Access to latest tools and technologies'
  ];

  const filteredJobs = jobOpenings.filter(job => {
    const matchesSearch = job.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         job.description.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesDepartment = selectedDepartment === 'all' || job.department === selectedDepartment;
    const matchesLocation = selectedLocation === 'all' || job.location === selectedLocation;
    
    return matchesSearch && matchesDepartment && matchesLocation;
  });

  return (
    <>
      <Helmet>
        <title>Careers - Zion Tech Group | Join Our Team</title>
        <meta name="description" content="Join Zion Tech Group and help build the future of AI and IT solutions. Explore career opportunities, benefits, and our company culture." />
        <meta name="keywords" content="careers, jobs, employment, AI engineer, developer, designer, product manager, remote work" />
        <meta property="og:title" content="Careers - Zion Tech Group" />
        <meta property="og:description" content="Join our team and build the future of technology" />
        <meta property="og:type" content="website" />
      </Helmet>
      
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        {/* Hero Section */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="text-center max-w-4xl mx-auto">
              <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
                Join Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400">Team</span>
              </h1>
              <p className="text-xl md:text-2xl text-gray-300 mb-8 leading-relaxed">
                Help us build the future of AI and IT solutions. Join a team of passionate innovators 
                working on cutting-edge technology that transforms businesses.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300">
                  View Open Positions
                </button>
                <button className="border-2 border-cyan-400 text-cyan-400 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-cyan-400 hover:text-white transition-all duration-300">
                  Learn About Us
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* Company Values */}
        <section className="py-16 bg-white/5">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-white mb-6">Our Values</h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                The principles that guide everything we do
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
              {companyValues.map((value, index) => (
                <div key={index} className="bg-white/10 backdrop-blur-sm rounded-xl p-8 border border-white/20 text-center">
                  <h3 className="text-xl font-bold text-white mb-4">{value.title}</h3>
                  <p className="text-gray-300">{value.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Benefits */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-16">
                <h2 className="text-4xl font-bold text-white mb-6">Benefits & Perks</h2>
                <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                  We offer comprehensive benefits to support our team&apos;s well-being and success
                </p>
              </div>
              
              <div className="grid md:grid-cols-2 gap-6">
                {benefits.map((benefit, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0" />
                    <span className="text-gray-300">{benefit}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Job Search */}
        <section className="py-16 bg-white/5">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-16">
                <h2 className="text-4xl font-bold text-white mb-6">Open Positions</h2>
                <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                  Find the perfect role for your skills and interests
                </p>
              </div>

              {/* Search and Filters */}
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 mb-8">
                <div className="grid md:grid-cols-3 gap-4">
                  <div className="relative">
                    <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                    <input
                      type="text"
                      placeholder="Search jobs..."
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                      className="w-full pl-10 pr-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
                    />
                  </div>
                  
                  <select
                    value={selectedDepartment}
                    onChange={(e) => setSelectedDepartment(e.target.value)}
                    className="px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
                  >
                    {departments.map((dept) => (
                      <option key={dept.id} value={dept.id} className="bg-slate-800">{dept.name}</option>
                    ))}
                  </select>
                  
                  <select
                    value={selectedLocation}
                    onChange={(e) => setSelectedLocation(e.target.value)}
                    className="px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
                  >
                    {locations.map((location) => (
                      <option key={location.id} value={location.id} className="bg-slate-800">{location.name}</option>
                    ))}
                  </select>
                </div>
              </div>

              {/* Job Listings */}
              <div className="space-y-6">
                {filteredJobs.map((job) => (
                  <div key={job.id} className={`bg-white/10 backdrop-blur-sm rounded-xl p-8 border border-white/20 hover:border-cyan-500/40 transition-all duration-300 ${job.featured ? 'ring-2 ring-cyan-500' : ''}`}>
                    {job.featured && (
                      <div className="flex items-center mb-4">
                        <Star className="w-4 h-4 text-yellow-400 mr-2" />
                        <span className="text-yellow-400 text-sm font-semibold">Featured Position</span>
                      </div>
                    )}
                    
                    <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-4">
                      <div>
                        <h3 className="text-2xl font-bold text-white mb-2">{job.title}</h3>
                        <div className="flex flex-wrap items-center gap-4 text-sm text-gray-300">
                          <div className="flex items-center">
                            <MapPin className="w-4 h-4 mr-1" />
                            {locations.find(loc => loc.id === job.location)?.name}
                          </div>
                          <div className="flex items-center">
                            <Clock className="w-4 h-4 mr-1" />
                            {job.type}
                          </div>
                          <div className="flex items-center">
                            <Users className="w-4 h-4 mr-1" />
                            {job.experience}
                          </div>
                        </div>
                      </div>
                      <div className="mt-4 lg:mt-0">
                        <button className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-6 py-3 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 flex items-center">
                          Apply Now
                          <ArrowRight className="w-4 h-4 ml-2" />
                        </button>
                      </div>
                    </div>
                    
                    <p className="text-gray-300 mb-4">{job.description}</p>
                    
                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <h4 className="text-lg font-semibold text-white mb-3">Key Requirements:</h4>
                        <ul className="space-y-2">
                          {job.requirements.slice(0, 3).map((req, index) => (
                            <li key={index} className="flex items-start text-gray-300 text-sm">
                              <span className="text-cyan-400 mr-2 mt-1">•</span>
                              {req}
                            </li>
                          ))}
                        </ul>
                      </div>
                      <div>
                        <h4 className="text-lg font-semibold text-white mb-3">Benefits:</h4>
                        <ul className="space-y-2">
                          {job.benefits.slice(0, 3).map((benefit, index) => (
                            <li key={index} className="flex items-start text-gray-300 text-sm">
                              <span className="text-cyan-400 mr-2 mt-1">•</span>
                              {benefit}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                    
                    <div className="mt-4 pt-4 border-t border-white/10 flex items-center justify-between">
                      <span className="text-gray-400 text-sm">Posted: {new Date(job.posted).toLocaleDateString()}</span>
                      <button className="text-cyan-400 hover:text-cyan-300 text-sm font-semibold flex items-center">
                        View Details
                        <ExternalLink className="w-3 h-3 ml-1" />
                      </button>
                    </div>
                  </div>
                ))}
                
                {filteredJobs.length === 0 && (
                  <div className="text-center py-12">
                    <p className="text-gray-300 text-xl">No positions found matching your criteria.</p>
                    <p className="text-gray-400 mt-2">Try adjusting your search or filters.</p>
                  </div>
                )}
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="bg-gradient-to-r from-cyan-600 to-purple-600 rounded-xl p-12 text-center max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold text-white mb-6">Don&apos;t See the Right Role?</h2>
              <p className="text-xl text-white/90 mb-8">
                We&apos;re always looking for talented individuals. Send us your resume and let us know how you&apos;d like to contribute.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="bg-white text-cyan-600 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-gray-100 transition-all duration-300">
                  Submit Resume
                </button>
                <button className="border-2 border-white text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-white hover:text-cyan-600 transition-all duration-300">
                  Contact Us
                </button>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default CareersPage;
import React, { useState } from 'react';
import Head from 'next/head';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { 
  Search, 
  MapPin, 
  Clock, 
  DollarSign, 
  Briefcase, 
  Users, 
  Star, 
  ArrowRight,
  Filter,
  X,
  CheckCircle,
  Calendar,
  Building2,
  Globe
} from 'lucide-react';

const jobListings = [
  {
    id: 1,
    title: 'Senior Full Stack Developer',
    company: 'Zion Tech Group',
    location: 'San Francisco, CA',
    type: 'Full-time',
    salary: '$120,000 - $180,000',
    experience: '5+ years',
    remote: true,
    description: 'We are looking for a senior full-stack developer to join our growing team. You will be responsible for building and maintaining our web applications using modern technologies.',
    requirements: [
      "5+ years experience in full-stack development",
      "Proficiency in React, Node.js, TypeScript",
      "Experience with databases (PostgreSQL, MongoDB)",
      "Knowledge of cloud deployment and DevOps",
      "Strong problem-solving and communication skills"
    ],
    benefits: [
      'Competitive salary',
      'Health and dental insurance',
      'Remote work options',
      'Learning and development budget',
      'Team building events'
    ],
    posted: '2024-01-10',
    featured: true
  },
  {
    id: 2,
    title: 'AI/ML Engineer',
    company: 'Zion Tech Group',
    location: 'New York, NY',
    type: 'Full-time',
    salary: '$140,000 - $200,000',
    experience: '4+ years',
    remote: true,
    description: 'Join our AI team to develop cutting-edge machine learning solutions and AI-powered applications.',
    requirements: [
      "4+ years experience in machine learning",
      "Proficiency in Python, TensorFlow, PyTorch",
      "Experience with cloud AI services",
      "Strong mathematical background",
      "Experience with MLOps and model deployment"
    ],
    benefits: [
      'Competitive salary',
      'Stock options',
      'Health and dental insurance',
      'Flexible work hours',
      'Conference attendance budget'
    ],
    posted: '2024-01-08',
    featured: true
  },
  {
    id: 3,
    title: 'DevOps Engineer',
    company: 'Zion Tech Group',
    location: 'Austin, TX',
    type: 'Full-time',
    salary: '$110,000 - $160,000',
    experience: '3+ years',
    remote: true,
    description: 'Help us build and maintain our cloud infrastructure and deployment pipelines.',
    requirements: [
      "3+ years experience in DevOps",
      "Proficiency in AWS, Docker, Kubernetes",
      "Experience with CI/CD pipelines",
      "Knowledge of infrastructure as code",
      "Strong scripting skills (Bash, Python)"
    ],
    benefits: [
      'Competitive salary',
      'Health and dental insurance',
      'Remote work options',
      'Learning and development budget',
      'Gym membership'
    ],
    posted: '2024-01-05',
    featured: false
  },
  {
    id: 4,
    title: 'Product Manager',
    company: 'Zion Tech Group',
    location: 'Seattle, WA',
    type: 'Full-time',
    salary: '$130,000 - $170,000',
    experience: '5+ years',
    remote: true,
    description: 'Lead product development initiatives and work closely with engineering teams to deliver exceptional user experiences.',
    requirements: [
      "5+ years experience in product management",
      "Experience with agile methodologies",
      "Strong analytical and communication skills",
      "Experience with user research and data analysis",
      "Technical background preferred"
    ],
    benefits: [
      'Competitive salary',
      'Stock options',
      'Health and dental insurance',
      'Flexible work hours',
      'Professional development budget'
    ],
    posted: '2024-01-03',
    featured: false
  },
  {
    id: 5,
    title: 'UX/UI Designer',
    company: 'Zion Tech Group',
    location: 'Los Angeles, CA',
    type: 'Full-time',
    salary: '$90,000 - $130,000',
    experience: '3+ years',
    remote: true,
    description: 'Create beautiful and intuitive user interfaces for our web and mobile applications.',
    requirements: [
      "3+ years experience in UX/UI design",
      "Proficiency in Figma, Sketch, Adobe Creative Suite",
      "Experience with user research and testing",
      "Strong portfolio of design work",
      "Knowledge of front-end development principles"
    ],
    benefits: [
      'Competitive salary',
      'Health and dental insurance',
      'Remote work options',
      'Design tools and software budget',
      'Creative freedom'
    ],
    posted: '2024-01-01',
    featured: false
  },
  {
    id: 6,
    title: 'Data Scientist',
    company: 'Zion Tech Group',
    location: 'Boston, MA',
    type: 'Full-time',
    salary: '$120,000 - $170,000',
    experience: '4+ years',
    remote: true,
    description: 'Analyze complex data sets to provide insights and drive business decisions.',
    requirements: [
      "4+ years experience in data science",
      "Proficiency in Python, R, SQL",
      "Experience with machine learning algorithms",
      "Strong statistical background",
      "Experience with data visualization tools"
    ],
    benefits: [
      'Competitive salary',
      'Health and dental insurance',
      'Remote work options',
      'Learning and development budget',
      'Research opportunities'
    ],
    posted: '2023-12-28',
    featured: false
  }
];

const categories = [
  'All Jobs',
  'Engineering',
  'Design',
  'Product',
  'Data Science',
  'DevOps',
  'Marketing',
  'Sales'
];

const locations = [
  'All Locations',
  'San Francisco, CA',
  'New York, NY',
  'Austin, TX',
  'Seattle, WA',
  'Los Angeles, CA',
  'Boston, MA',
  'Remote'
];

export default function Talent() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All Jobs');
  const [selectedLocation, setSelectedLocation] = useState('All Locations');
  const [showFilters, setShowFilters] = useState(false);

  const filteredJobs = jobListings.filter(job => {
    const matchesSearch = job.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         job.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'All Jobs' || 
                           (selectedCategory === 'Engineering' && (job.title.includes('Developer') || job.title.includes('Engineer'))) ||
                           (selectedCategory === 'Design' && job.title.includes('Designer')) ||
                           (selectedCategory === 'Product' && job.title.includes('Product')) ||
                           (selectedCategory === 'Data Science' && job.title.includes('Data')) ||
                           (selectedCategory === 'DevOps' && job.title.includes('DevOps'));
    const matchesLocation = selectedLocation === 'All Locations' || 
                           job.location === selectedLocation ||
                           (selectedLocation === 'Remote' && job.remote);

    return matchesSearch && matchesCategory && matchesLocation;
  });

  return (
    <>
      <Head>
        <title>Talent - Zion Tech Group</title>
        <meta name="description" content="Join our team of talented professionals and help us build the future of technology." />
        <meta name="keywords" content="jobs, careers, employment, tech jobs, software engineering, AI, machine learning" />
      </Head>

      <div className="min-h-screen bg-gray-50">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-blue-900 via-blue-800 to-indigo-900 text-white py-20">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center max-w-4xl mx-auto"
            >
              <h1 className="text-5xl md:text-6xl font-bold mb-6">
                Join Our <span className="text-yellow-400">Talented Team</span>
              </h1>
              <p className="text-xl md:text-2xl mb-8 text-blue-100">
                Help us build the future of technology. Explore exciting career opportunities at Zion Tech Group.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Search and Filters */}
        <section className="py-12 bg-white border-b">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              {/* Search Bar */}
              <div className="relative mb-6">
                <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <input
                  type="text"
                  placeholder="Search jobs by title, skills, or keywords..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-12 pr-4 py-4 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-lg"
                />
              </div>

              {/* Filter Toggle */}
              <div className="flex justify-between items-center mb-6">
                <button
                  onClick={() => setShowFilters(!showFilters)}
                  className="flex items-center space-x-2 px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors"
                >
                  <Filter className="w-5 h-5" />
                  <span>Filters</span>
                </button>
                <p className="text-gray-600">
                  {filteredJobs.length} job{filteredJobs.length !== 1 ? 's' : ''} found
                </p>
              </div>

              {/* Filters */}
              {showFilters && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: 'auto' }}
                  exit={{ opacity: 0, height: 0 }}
                  className="grid md:grid-cols-2 gap-6 mb-8 p-6 bg-gray-50 rounded-lg"
                >
                  {/* Category Filter */}
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Category</label>
                    <select
                      value={selectedCategory}
                      onChange={(e) => setSelectedCategory(e.target.value)}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    >
                      {categories.map(category => (
                        <option key={category} value={category}>{category}</option>
                      ))}
                    </select>
                  </div>

                  {/* Location Filter */}
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Location</label>
                    <select
                      value={selectedLocation}
                      onChange={(e) => setSelectedLocation(e.target.value)}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    >
                      {locations.map(location => (
                        <option key={location} value={location}>{location}</option>
                      ))}
                    </select>
                  </div>
                </motion.div>
              )}
            </div>
          </div>
        </section>

        {/* Job Listings */}
        <section className="py-12">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              {filteredJobs.length === 0 ? (
                <div className="text-center py-12">
                  <Briefcase className="w-16 h-16 text-gray-400 mx-auto mb-4" />
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">No jobs found</h3>
                  <p className="text-gray-600">Try adjusting your search criteria or check back later for new opportunities.</p>
                </div>
              ) : (
                <div className="space-y-6">
                  {filteredJobs.map((job, index) => (
                    <motion.div
                      key={job.id}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                      className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow p-8"
                    >
                      <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between">
                        <div className="flex-1">
                          <div className="flex items-center space-x-3 mb-2">
                            <h3 className="text-2xl font-bold text-gray-900">{job.title}</h3>
                            {job.featured && (
                              <span className="bg-yellow-100 text-yellow-800 text-xs font-medium px-2.5 py-0.5 rounded-full">
                                Featured
                              </span>
                            )}
                          </div>
                          <div className="flex items-center space-x-4 text-gray-600 mb-4">
                            <div className="flex items-center space-x-1">
                              <Building2 className="w-4 h-4" />
                              <span>{job.company}</span>
                            </div>
                            <div className="flex items-center space-x-1">
                              <MapPin className="w-4 h-4" />
                              <span>{job.location}</span>
                            </div>
                            <div className="flex items-center space-x-1">
                              <Clock className="w-4 h-4" />
                              <span>{job.type}</span>
                            </div>
                            {job.remote && (
                              <div className="flex items-center space-x-1">
                                <Globe className="w-4 h-4" />
                                <span>Remote</span>
                              </div>
                            )}
                          </div>
                          <p className="text-gray-700 mb-4">{job.description}</p>
                          <div className="flex flex-wrap gap-2 mb-4">
                            <span className="bg-blue-100 text-blue-800 text-sm font-medium px-3 py-1 rounded-full">
                              {job.salary}
                            </span>
                            <span className="bg-green-100 text-green-800 text-sm font-medium px-3 py-1 rounded-full">
                              {job.experience}
                            </span>
                          </div>
                        </div>
                        <div className="flex flex-col space-y-3 lg:ml-6">
                          <Link
                            href={`/jobs/${job.id}`}
                            className="inline-flex items-center justify-center px-6 py-3 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition-colors"
                          >
                            View Details
                            <ArrowRight className="w-4 h-4 ml-2" />
                          </Link>
                          <button className="inline-flex items-center justify-center px-6 py-3 border border-gray-300 text-gray-700 font-medium rounded-lg hover:bg-gray-50 transition-colors">
                            Save Job
                          </button>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              )}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-r from-blue-600 to-indigo-700 text-white">
          <div className="container mx-auto px-4 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                Don't See the Right Role?
              </h2>
              <p className="text-xl mb-8 max-w-3xl mx-auto">
                We're always looking for talented individuals. Send us your resume and we'll keep you in mind for future opportunities.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-white text-blue-600 font-bold py-4 px-8 rounded-lg text-lg hover:bg-gray-100 transition-colors"
                >
                  Submit Your Resume
                </motion.button>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="border-2 border-white text-white font-bold py-4 px-8 rounded-lg text-lg hover:bg-white hover:text-blue-600 transition-colors"
                >
                  Learn About Our Culture
                </motion.button>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </>
  );
}
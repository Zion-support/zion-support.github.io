import React, { useState } from 'react';
import MainLayout from './components/layout/MainLayout';
import { motion } from 'framer-motion';
import { 
  Users, 
  MapPin, 
  Clock, 
  Briefcase, 
  ArrowRight, 
  CheckCircle,
  Star,
  Heart,
  ExternalLink,
  Filter
} from 'lucide-react';

const jobCategories = [
  {
    title: 'Engineering',
    count: 12,
    icon: Briefcase,
    color: 'blue'
  },
  {
    title: 'Design',
    count: 8,
    icon: Star,
    color: 'purple'
  },
  {
    title: 'Product',
    count: 6,
    icon: Heart,
    color: 'green'
  },
  {
    title: 'Marketing',
    count: 4,
    icon: Users,
    color: 'orange'
  }
];

const jobOpenings = [
  {
    id: 1,
    title: 'Senior Full Stack Developer',
    department: 'Engineering',
    location: 'Remote',
    type: 'Full-time',
    experience: '5+ years',
    description: 'We are looking for a senior full stack developer to join our engineering team.',
    requirements: [
      '5+ years of experience with React and Node.js',
      'Experience with cloud platforms (AWS, Azure, or GCP)',
      'Strong understanding of database design and optimization',
      'Experience with microservices architecture'
    ],
    benefits: [
      'Competitive salary and equity',
      'Health, dental, and vision insurance',
      'Flexible work arrangements',
      'Professional development budget'
    ],
    posted: '2024-01-15'
  },
  {
    id: 2,
    title: 'UI/UX Designer',
    department: 'Design',
    location: 'San Francisco, CA',
    type: 'Full-time',
    experience: '3+ years',
    description: 'Join our design team to create beautiful and intuitive user experiences.',
    requirements: [
      '3+ years of UI/UX design experience',
      'Proficiency in Figma, Sketch, or Adobe Creative Suite',
      'Experience with design systems',
      'Strong portfolio demonstrating user-centered design'
    ],
    benefits: [
      'Competitive salary and equity',
      'Health, dental, and vision insurance',
      'Flexible work arrangements',
      'Professional development budget'
    ],
    posted: '2024-01-12'
  },
  {
    id: 3,
    title: 'Product Manager',
    department: 'Product',
    location: 'Remote',
    type: 'Full-time',
    experience: '4+ years',
    description: 'Lead product strategy and execution for our core platform.',
    requirements: [
      '4+ years of product management experience',
      'Experience with B2B SaaS products',
      'Strong analytical and problem-solving skills',
      'Experience with agile development methodologies'
    ],
    benefits: [
      'Competitive salary and equity',
      'Health, dental, and vision insurance',
      'Flexible work arrangements',
      'Professional development budget'
    ],
    posted: '2024-01-10'
  }
];

const companyValues = [
  {
    title: 'Innovation',
    description: 'We encourage creative thinking and embrace new ideas.',
    icon: Star
  },
  {
    title: 'Collaboration',
    description: 'We believe in the power of teamwork and open communication.',
    icon: Users
  },
  {
    title: 'Growth',
    description: 'We invest in our people and provide opportunities for development.',
    icon: ArrowRight
  },
  {
    title: 'Impact',
    description: 'We work on meaningful projects that make a difference.',
    icon: Heart
  }
];

export default function TalentPage() {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [selectedLocation, setSelectedLocation] = useState('All');

  const filteredJobs = jobOpenings.filter(job => {
    const categoryMatch = selectedCategory === 'All' || job.department === selectedCategory;
    const locationMatch = selectedLocation === 'All' || job.location === selectedLocation;
    return categoryMatch && locationMatch;
  });

  return (
    <MainLayout
      title="Join Our Team - Zion Tech Group"
      description="Join our talented team of engineers, designers, and innovators. Explore career opportunities at Zion Tech Group and help us build the future of technology."
      keywords="careers, jobs, hiring, engineering, design, product, remote work, technology careers"
    >
      <div className="min-h-screen bg-gray-50">
        {/* Hero Section */}
        <section className="py-20 bg-gradient-to-br from-blue-50 to-indigo-100">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center max-w-4xl mx-auto"
            >
              <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
                Join Our <span className="text-blue-600">Team</span>
              </h1>
              <p className="text-xl text-gray-600 mb-8">
                Be part of a team that's building the future of technology. Explore exciting career opportunities at Zion Tech Group.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="#jobs"
                  className="inline-flex items-center px-8 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors"
                >
                  View Open Positions
                  <ArrowRight className="ml-2 w-5 h-5" />
                </a>
                <a
                  href="/contact"
                  className="inline-flex items-center px-8 py-3 border-2 border-blue-600 text-blue-600 font-semibold rounded-lg hover:bg-blue-50 transition-colors"
                >
                  Contact Us
                </a>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Job Categories */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="text-center mb-12"
              >
                <h2 className="text-3xl font-bold text-gray-900 mb-6">Explore Opportunities</h2>
                <p className="text-xl text-gray-600">Find your perfect role in our growing team</p>
              </motion.div>

              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                {jobCategories.map((category, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: index * 0.1 }}
                    className="bg-gray-50 p-6 rounded-lg text-center hover:shadow-lg transition-shadow cursor-pointer"
                    onClick={() => setSelectedCategory(category.title)}
                  >
                    <div className={`w-12 h-12 rounded-lg flex items-center justify-center mx-auto mb-4 ${
                      category.color === 'blue' ? 'bg-blue-100' :
                      category.color === 'purple' ? 'bg-purple-100' :
                      category.color === 'green' ? 'bg-green-100' : 'bg-orange-100'
                    }`}>
                      <category.icon className={`w-6 h-6 ${
                        category.color === 'blue' ? 'text-blue-600' :
                        category.color === 'purple' ? 'text-purple-600' :
                        category.color === 'green' ? 'text-green-600' : 'text-orange-600'
                      }`} />
                    </div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">{category.title}</h3>
                    <p className="text-gray-600">{category.count} open positions</p>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Job Openings */}
        <section id="jobs" className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="mb-12"
              >
                <h2 className="text-3xl font-bold text-gray-900 mb-6">Open Positions</h2>
                <div className="flex flex-col sm:flex-row gap-4 mb-8">
                  <div className="flex items-center">
                    <Filter className="w-5 h-5 text-gray-500 mr-2" />
                    <select
                      value={selectedCategory}
                      onChange={(e) => setSelectedCategory(e.target.value)}
                      className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    >
                      <option value="All">All Departments</option>
                      <option value="Engineering">Engineering</option>
                      <option value="Design">Design</option>
                      <option value="Product">Product</option>
                      <option value="Marketing">Marketing</option>
                    </select>
                  </div>
                  <div className="flex items-center">
                    <MapPin className="w-5 h-5 text-gray-500 mr-2" />
                    <select
                      value={selectedLocation}
                      onChange={(e) => setSelectedLocation(e.target.value)}
                      className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    >
                      <option value="All">All Locations</option>
                      <option value="Remote">Remote</option>
                      <option value="San Francisco, CA">San Francisco, CA</option>
                    </select>
                  </div>
                </div>

                <div className="space-y-6">
                  {filteredJobs.map((job, index) => (
                    <motion.div
                      key={job.id}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.8, delay: index * 0.1 }}
                      className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow"
                    >
                      <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                        <div>
                          <h3 className="text-xl font-semibold text-gray-900 mb-2">{job.title}</h3>
                          <div className="flex flex-wrap gap-4 text-sm text-gray-600">
                            <span className="flex items-center">
                              <Briefcase className="w-4 h-4 mr-1" />
                              {job.department}
                            </span>
                            <span className="flex items-center">
                              <MapPin className="w-4 h-4 mr-1" />
                              {job.location}
                            </span>
                            <span className="flex items-center">
                              <Clock className="w-4 h-4 mr-1" />
                              {job.type}
                            </span>
                            <span>Posted: {job.posted}</span>
                          </div>
                        </div>
                        <button className="mt-4 md:mt-0 inline-flex items-center px-6 py-2 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors">
                          Apply Now
                          <ArrowRight className="ml-2 w-4 h-4" />
                        </button>
                      </div>
                      <p className="text-gray-600 mb-4">{job.description}</p>
                      <div className="grid md:grid-cols-2 gap-6">
                        <div>
                          <h4 className="font-semibold text-gray-900 mb-2">Requirements</h4>
                          <ul className="space-y-1">
                            {job.requirements.map((req, idx) => (
                              <li key={idx} className="flex items-start text-sm text-gray-600">
                                <CheckCircle className="w-4 h-4 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                                {req}
                              </li>
                            ))}
                          </ul>
                        </div>
                        <div>
                          <h4 className="font-semibold text-gray-900 mb-2">Benefits</h4>
                          <ul className="space-y-1">
                            {job.benefits.map((benefit, idx) => (
                              <li key={idx} className="flex items-start text-sm text-gray-600">
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
              </motion.div>
            </div>
          </div>
        </section>

        {/* Company Values */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="text-center mb-12"
              >
                <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Values</h2>
                <p className="text-xl text-gray-600">What makes Zion Tech Group a great place to work</p>
              </motion.div>

              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                {companyValues.map((value, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: index * 0.1 }}
                    className="text-center"
                  >
                    <div className="w-16 h-16 bg-blue-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                      <value.icon className="w-8 h-8 text-blue-600" />
                    </div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-3">{value.title}</h3>
                    <p className="text-gray-600">{value.description}</p>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-blue-600">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
              >
                <h2 className="text-3xl font-bold text-white mb-6">Don't See the Right Role?</h2>
                <p className="text-xl text-blue-100 mb-8">
                  We're always looking for talented people. Send us your resume and we'll keep you in mind for future opportunities.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <a
                    href="/contact"
                    className="inline-flex items-center px-8 py-3 bg-white text-blue-600 font-semibold rounded-lg hover:bg-gray-100 transition-colors"
                  >
                    Send Your Resume
                    <ExternalLink className="ml-2 w-5 h-5" />
                  </a>
                  <a
                    href="/contact"
                    className="inline-flex items-center px-8 py-3 border-2 border-white text-white font-semibold rounded-lg hover:bg-white hover:text-blue-600 transition-colors"
                  >
                    Contact Us
                  </a>
                </div>
              </motion.div>
            </div>
          </div>
        </section>
      </div>
    </MainLayout>
  );
}
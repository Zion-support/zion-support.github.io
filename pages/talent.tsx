import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { MapPin, Clock, Users, Briefcase, Star, ArrowRight, CheckCircle, DollarSign, Calendar } from 'lucide-react';
import Layout from '../components/Layout';

const jobOpenings = [
  {
    id: 1,
    title: 'Senior Full Stack Developer',
    company: 'Zion Tech Group',
    location: 'Remote / San Francisco, CA',
    type: 'Full-time',
    experience: '3-5 years',
    salary: '$120,000 - $160,000',
    description: 'We are looking for a passionate Senior Full Stack Developer to join our growing team. You will be responsible for developing and maintaining our web applications using modern technologies.',
    requirements: [
      "3+ years experience in full-stack development",
      "Proficiency in React, Node.js, TypeScript",
      "Experience with databases (PostgreSQL, MongoDB)",
      "Knowledge of cloud deployment and DevOps"
    ],
    benefits: [
      'Competitive salary',
      'Health and dental insurance',
      'Remote work options',
      'Learning and development budget',
      'Team building events'
    ],
    posted: '2024-01-10',
    featured: false
  },
  {
    id: 2,
    title: 'AI/ML Engineer',
    company: 'Zion Tech Group',
    location: 'Remote / New York, NY',
    type: 'Full-time',
    experience: '2-4 years',
    salary: '$130,000 - $180,000',
    description: 'Join our AI team to build cutting-edge machine learning solutions. You will work on developing and deploying AI models that power our products.',
    requirements: [
      "Master's degree in Computer Science or related field",
      "Experience with Python, TensorFlow, PyTorch",
      "Knowledge of machine learning algorithms",
      "Experience with cloud platforms (AWS, GCP, Azure)"
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
    location: 'Remote / Austin, TX',
    type: 'Full-time',
    experience: '2-4 years',
    salary: '$110,000 - $150,000',
    description: 'We need a DevOps Engineer to help us scale our infrastructure and improve our deployment processes.',
    requirements: [
      "Experience with Docker and Kubernetes",
      "Knowledge of CI/CD pipelines",
      "Experience with cloud platforms",
      "Scripting skills (Bash, Python)"
    ],
    benefits: [
      'Competitive salary',
      'Health and dental insurance',
      'Remote work options',
      'Professional development budget',
      'Gym membership'
    ],
    posted: '2024-01-05',
    featured: false
  },
  {
    id: 4,
    title: 'Product Manager',
    company: 'Zion Tech Group',
    location: 'San Francisco, CA',
    type: 'Full-time',
    experience: '3-5 years',
    salary: '$140,000 - $180,000',
    description: 'Lead product development initiatives and work closely with engineering teams to deliver exceptional user experiences.',
    requirements: [
      "3+ years of product management experience",
      "Technical background preferred",
      "Experience with agile methodologies",
      "Strong communication skills"
    ],
    benefits: [
      'Competitive salary',
      'Stock options',
      'Health and dental insurance',
      'Flexible work arrangements',
      'Learning and development budget'
    ],
    posted: '2024-01-03',
    featured: true
  }
];

const categories = ['All', 'Engineering', 'Product', 'Design', 'Marketing', 'Sales'];

export default function TalentPage() {
  const [selectedCategory, setSelectedCategory] = React.useState('All');
  const [searchTerm, setSearchTerm] = React.useState('');

  const filteredJobs = jobOpenings.filter(job => {
    const matchesCategory = selectedCategory === 'All' || job.type === selectedCategory;
    const matchesSearch = job.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         job.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         job.location.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <Layout title="Talent - Zion Tech Group">
      <Head>
        <title>Talent - Zion Tech Group</title>
        <meta name="description" content="Join our team of talented professionals and help us build the future of technology." />
      </Head>

      <div className="min-h-screen bg-gray-50">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-blue-900 via-blue-800 to-indigo-900 text-white py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-5xl font-bold mb-6">
                Join Our Team
              </h1>
              <p className="text-xl mb-8 text-blue-100">
                Be part of a team that's building the future of technology
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="#jobs" className="bg-white text-blue-900 px-8 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors">
                  View Openings
                </Link>
                <Link href="/contact" className="border border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-900 transition-colors">
                  Contact Us
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Search and Filter Section */}
        <section className="py-12 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="flex flex-col md:flex-row gap-4 mb-8">
                <div className="flex-1">
                  <input
                    type="text"
                    placeholder="Search jobs..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                </div>
                <div className="flex flex-wrap gap-2">
                  {categories.map((category) => (
                    <button
                      key={category}
                      onClick={() => setSelectedCategory(category)}
                      className={`px-4 py-2 rounded-lg font-medium transition-colors ${
                        selectedCategory === category
                          ? 'bg-blue-600 text-white'
                          : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                      }`}
                    >
                      {category}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Jobs Grid */}
        <section id="jobs" className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredJobs.map((job, index) => (
                <motion.div
                  key={job.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow p-6"
                >
                  {job.featured && (
                    <div className="flex items-center mb-4">
                      <Star className="h-5 w-5 text-yellow-500 mr-2" />
                      <span className="text-sm font-medium text-yellow-600">Featured</span>
                    </div>
                  )}
                  
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">{job.title}</h3>
                  <p className="text-blue-600 font-medium mb-2">{job.company}</p>
                  
                  <div className="flex items-center text-gray-600 mb-4">
                    <MapPin className="h-4 w-4 mr-2" />
                    <span className="text-sm">{job.location}</span>
                  </div>
                  
                  <div className="flex items-center text-gray-600 mb-4">
                    <Briefcase className="h-4 w-4 mr-2" />
                    <span className="text-sm">{job.type}</span>
                  </div>
                  
                  <div className="flex items-center text-gray-600 mb-4">
                    <DollarSign className="h-4 w-4 mr-2" />
                    <span className="text-sm">{job.salary}</span>
                  </div>
                  
                  <p className="text-gray-600 mb-4 text-sm">{job.description}</p>
                  
                  <div className="mb-4">
                    <h4 className="font-semibold text-gray-900 mb-2">Requirements:</h4>
                    <ul className="space-y-1">
                      {job.requirements.slice(0, 3).map((req, reqIndex) => (
                        <li key={reqIndex} className="flex items-center text-sm text-gray-600">
                          <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                          {req}
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <div className="flex items-center text-gray-500 text-sm">
                      <Calendar className="h-4 w-4 mr-2" />
                      Posted {job.posted}
                    </div>
                    <Link href="/contact" className="inline-flex items-center text-blue-600 hover:text-blue-800 font-medium">
                      Apply Now <ArrowRight className="h-4 w-4 ml-1" />
                    </Link>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-blue-900 text-white">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold mb-4">Don't See Your Role?</h2>
            <p className="text-xl mb-8 text-blue-100">
              We're always looking for talented individuals. Send us your resume and we'll keep you in mind for future opportunities.
            </p>
            <Link href="/contact" className="bg-white text-blue-900 px-8 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors">
              Send Resume
            </Link>
          </div>
        </section>
      </div>
    </Layout>
  );
}
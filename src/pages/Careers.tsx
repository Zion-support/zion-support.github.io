import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet-async';
import { 
  Briefcase, 
  MapPin, 
  Clock, 
  DollarSign, 
  Users, 
  Heart, 
  Zap, 
  Brain,
  Shield,
  Cloud,
  Code,
  Rocket,
  ArrowRight,
  CheckCircle,
  Star,
  Globe,
  Award,
  Lightbulb
} from 'lucide-react';

const Careers = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');

  // Sample job listings
  const jobListings = [
    {
      id: 1,
      title: "Senior AI Engineer",
      department: "AI & Machine Learning",
      location: "Remote / San Francisco, CA",
      type: "Full-time",
      experience: "5+ years",
      salary: "$120,000 - $180,000",
      description: "Join our AI team to develop cutting-edge machine learning models and AI-powered solutions for enterprise clients.",
      requirements: [
        "Strong background in machine learning and deep learning",
        "Experience with Python, TensorFlow, PyTorch",
        "Knowledge of cloud platforms (AWS, GCP, Azure)",
        "Experience with large-scale data processing"
      ],
      benefits: ["Competitive salary", "Health insurance", "Remote work", "Professional development"],
      category: "ai"
    },
    {
      id: 2,
      title: "Cybersecurity Specialist",
      department: "Security",
      location: "New York, NY",
      type: "Full-time",
      experience: "3+ years",
      salary: "$90,000 - $140,000",
      description: "Protect our clients' digital assets by implementing advanced security measures and threat detection systems.",
      requirements: [
        "Experience with security frameworks and compliance",
        "Knowledge of network security and penetration testing",
        "Familiarity with SIEM tools and incident response",
        "Security certifications (CISSP, CEH, etc.)"
      ],
      benefits: ["Competitive salary", "Health insurance", "Flexible hours", "Security training"],
      category: "security"
    },
    {
      id: 3,
      title: "Cloud DevOps Engineer",
      department: "Cloud & Infrastructure",
      location: "Remote / Austin, TX",
      type: "Full-time",
      experience: "4+ years",
      salary: "$100,000 - $150,000",
      description: "Build and maintain scalable cloud infrastructure using modern DevOps practices and automation tools.",
      requirements: [
        "Experience with AWS, Azure, or GCP",
        "Knowledge of Docker, Kubernetes, Terraform",
        "CI/CD pipeline experience",
        "Linux system administration skills"
      ],
      benefits: ["Competitive salary", "Health insurance", "Remote work", "Cloud certifications"],
      category: "cloud"
    },
    {
      id: 4,
      title: "Frontend Developer",
      department: "Engineering",
      location: "Remote / Seattle, WA",
      type: "Full-time",
      experience: "3+ years",
      salary: "$80,000 - $130,000",
      description: "Create beautiful and responsive user interfaces using modern web technologies and frameworks.",
      requirements: [
        "Strong React, Vue, or Angular experience",
        "Proficiency in HTML, CSS, JavaScript",
        "Experience with responsive design",
        "Knowledge of modern build tools"
      ],
      benefits: ["Competitive salary", "Health insurance", "Remote work", "Latest equipment"],
      category: "engineering"
    },
    {
      id: 5,
      title: "Data Scientist",
      department: "Data & Analytics",
      location: "Remote / Boston, MA",
      type: "Full-time",
      experience: "4+ years",
      salary: "$110,000 - $160,000",
      description: "Transform raw data into actionable insights using advanced analytics and machine learning techniques.",
      requirements: [
        "Strong statistical and mathematical background",
        "Experience with Python, R, SQL",
        "Knowledge of data visualization tools",
        "Experience with big data technologies"
      ],
      benefits: ["Competitive salary", "Health insurance", "Remote work", "Conference attendance"],
      category: "data"
    },
    {
      id: 6,
      title: "Product Manager",
      department: "Product",
      location: "San Francisco, CA",
      type: "Full-time",
      experience: "5+ years",
      salary: "$130,000 - $190,000",
      description: "Lead product strategy and development for our innovative technology solutions and services.",
      requirements: [
        "Experience in B2B SaaS or enterprise software",
        "Strong analytical and strategic thinking",
        "Experience with agile methodologies",
        "Excellent communication and leadership skills"
      ],
      benefits: ["Competitive salary", "Health insurance", "Stock options", "Professional development"],
      category: "product"
    }
  ];

  const categories = [
    { id: 'all', name: 'All Positions', count: jobListings.length },
    { id: 'ai', name: 'AI & ML', count: jobListings.filter(job => job.category === 'ai').length },
    { id: 'security', name: 'Security', count: jobListings.filter(job => job.category === 'security').length },
    { id: 'cloud', name: 'Cloud & DevOps', count: jobListings.filter(job => job.category === 'cloud').length },
    { id: 'engineering', name: 'Engineering', count: jobListings.filter(job => job.category === 'engineering').length },
    { id: 'data', name: 'Data & Analytics', count: jobListings.filter(job => job.category === 'data').length },
    { id: 'product', name: 'Product', count: jobListings.filter(job => job.category === 'product').length }
  ];

  const filteredJobs = selectedCategory === 'all' 
    ? jobListings 
    : jobListings.filter(job => job.category === selectedCategory);

  const companyValues = [
    {
      icon: Brain,
      title: "Innovation First",
      description: "We push the boundaries of what's possible in technology"
    },
    {
      icon: Shield,
      title: "Security & Trust",
      description: "Building secure solutions that our clients can rely on"
    },
    {
      icon: Cloud,
      title: "Scalable Solutions",
      description: "Creating technology that grows with our clients' needs"
    },
    {
      icon: Code,
      title: "Quality Code",
      description: "Writing clean, maintainable, and efficient code"
    }
  ];

  const benefits = [
    "Competitive salary and equity packages",
    "Comprehensive health, dental, and vision insurance",
    "Flexible work arrangements and remote options",
    "Professional development and learning opportunities",
    "Modern equipment and tools",
    "Regular team events and activities",
    "Generous vacation and time-off policies",
    "401(k) matching and financial planning"
  ];

  return (
    <>
      <Helmet>
        <title>Careers - Zion Tech Group | Join Our Innovation Team</title>
        <meta name="description" content="Join Zion Tech Group's talented team of innovators, engineers, and technology experts. Explore exciting career opportunities in AI, cybersecurity, cloud computing, and more." />
        <meta name="keywords" content="careers, jobs, employment, Zion Tech Group, technology jobs, AI engineer, cybersecurity specialist, cloud engineer" />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-slate-50">
        {/* Hero Section */}
        <section className="relative py-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center"
            >
              <h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-slate-900 via-slate-700 to-slate-900 bg-clip-text text-transparent mb-6">
                Join Our Innovation Team
              </h1>
              <p className="text-xl text-slate-600 max-w-3xl mx-auto mb-8">
                Help us build the future of technology. Join a team of passionate innovators, engineers, and problem-solvers who are shaping the digital landscape.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="px-8 py-4 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors flex items-center gap-2">
                  View Open Positions
                  <ArrowRight className="w-5 h-5" />
                </button>
                <button className="px-8 py-4 border border-blue-600 text-blue-600 font-semibold rounded-lg hover:bg-blue-50 transition-colors">
                  Learn About Culture
                </button>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Company Values Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <h2 className="text-3xl font-bold text-slate-900 text-center mb-12">
                Our Values & Culture
              </h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                {companyValues.map((value, index) => (
                  <motion.div
                    key={value.title}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.1 * index }}
                    className="text-center"
                  >
                    <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                      <value.icon className="w-8 h-8 text-blue-600" />
                    </div>
                    <h3 className="text-xl font-semibold text-slate-900 mb-2">{value.title}</h3>
                    <p className="text-slate-600">{value.description}</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <h2 className="text-3xl font-bold text-slate-900 text-center mb-12">
                Why Work at Zion Tech?
              </h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {benefits.map((benefit, index) => (
                  <motion.div
                    key={benefit}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: 0.05 * index }}
                    className="flex items-center gap-3"
                  >
                    <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                    <span className="text-slate-700">{benefit}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </section>

        {/* Job Listings Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
            >
              <h2 className="text-3xl font-bold text-slate-900 text-center mb-12">
                Open Positions
              </h2>
              
              {/* Category Filter */}
              <div className="flex flex-wrap justify-center gap-3 mb-12">
                {categories.map((category) => (
                  <button
                    key={category.id}
                    onClick={() => setSelectedCategory(category.id)}
                    className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
                      selectedCategory === category.id
                        ? 'bg-blue-600 text-white'
                        : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
                    }`}
                  >
                    {category.name} ({category.count})
                  </button>
                ))}
              </div>
              
              {/* Job Cards */}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                {filteredJobs.map((job, index) => (
                  <motion.div
                    key={job.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.1 * index }}
                    className="bg-white rounded-xl shadow-sm hover:shadow-lg transition-all duration-300 border border-slate-100 hover:border-blue-200 p-6"
                  >
                    <div className="flex items-start justify-between mb-4">
                      <div>
                        <h3 className="text-xl font-bold text-slate-900 mb-2">{job.title}</h3>
                        <p className="text-blue-600 font-medium">{job.department}</p>
                      </div>
                      <div className="text-right">
                        <span className="inline-block px-3 py-1 bg-green-100 text-green-800 text-xs font-medium rounded-full">
                          {job.type}
                        </span>
                      </div>
                    </div>
                    
                    <div className="grid grid-cols-2 gap-4 mb-4 text-sm text-slate-600">
                      <div className="flex items-center gap-2">
                        <MapPin className="w-4 h-4" />
                        {job.location}
                      </div>
                      <div className="flex items-center gap-2">
                        <Clock className="w-4 h-4" />
                        {job.experience}
                      </div>
                      <div className="flex items-center gap-2">
                        <DollarSign className="w-4 h-4" />
                        {job.salary}
                      </div>
                      <div className="flex items-center gap-2">
                        <Users className="w-4 h-4" />
                        {job.department}
                      </div>
                    </div>
                    
                    <p className="text-slate-600 mb-4">{job.description}</p>
                    
                    <div className="mb-4">
                      <h4 className="font-semibold text-slate-900 mb-2">Key Requirements:</h4>
                      <ul className="space-y-1">
                        {job.requirements.slice(0, 3).map((req, idx) => (
                          <li key={idx} className="text-sm text-slate-600 flex items-center gap-2">
                            <CheckCircle className="w-3 h-3 text-green-500" />
                            {req}
                          </li>
                        ))}
                      </ul>
                    </div>
                    
                    <button className="w-full py-3 px-4 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors flex items-center justify-center gap-2">
                      Apply Now
                      <ArrowRight className="w-4 h-4" />
                    </button>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-blue-600 to-indigo-700">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.8 }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Ready to Join Our Team?
              </h2>
              <p className="text-xl text-blue-100 mb-8">
                Don't see a position that fits? Send us your resume and we'll keep you in mind for future opportunities.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="px-8 py-4 bg-white text-blue-600 font-semibold rounded-lg hover:bg-blue-50 transition-colors">
                  Submit Resume
                </button>
                <button className="px-8 py-4 border border-white text-white font-semibold rounded-lg hover:bg-white hover:text-blue-600 transition-colors">
                  Contact Recruiting
                </button>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </>
  );
};

export default Careers;

import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
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
  Globe,
  Star,
  CheckCircle,
  Building,
  Rocket,
  Brain,
  Cpu,
  Shield,
  Cloud,
  Award,
  TrendingUp
} from 'lucide-react';

export function CareersPage() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedDepartment, setSelectedDepartment] = useState('all');
  const [selectedLocation, setSelectedLocation] = useState('all');

  const departments = [
    { id: 'all', name: 'All Departments', icon: Building },
    { id: 'engineering', name: 'Engineering', icon: Cpu },
    { id: 'ai', name: 'AI & Machine Learning', icon: Brain },
    { id: 'cybersecurity', name: 'Cybersecurity', icon: Shield },
    { id: 'cloud', name: 'Cloud & DevOps', icon: Cloud },
    { id: 'sales', name: 'Sales & Business Development', icon: TrendingUp },
    { id: 'marketing', name: 'Marketing', icon: Zap }
  ];

  const locations = [
    { id: 'all', name: 'All Locations', icon: Globe },
    { id: 'remote', name: 'Remote', icon: Globe },
    { id: 'middletown', name: 'Middletown, DE', icon: MapPin },
    { id: 'newyork', name: 'New York, NY', icon: MapPin },
    { id: 'sanfrancisco', name: 'San Francisco, CA', icon: MapPin },
    { id: 'london', name: 'London, UK', icon: MapPin }
  ];

  const jobOpenings = [
    {
      id: 1,
      title: 'Senior AI Engineer',
      department: 'ai',
      location: 'remote',
      type: 'Full-time',
      experience: '5+ years',
      description: 'Join our AI team to develop cutting-edge machine learning models and neural networks.',
      requirements: [
        'Advanced degree in Computer Science, AI, or related field',
        'Experience with PyTorch, TensorFlow, and modern AI frameworks',
        'Strong background in deep learning and neural networks',
        'Experience with large language models and generative AI'
      ],
      benefits: [
        'Competitive salary with equity options',
        'Flexible remote work policy',
        'Professional development budget',
        'Health, dental, and vision insurance'
      ],
      posted: '2024-01-15',
      urgent: true
    },
    {
      id: 2,
      title: 'Quantum Computing Researcher',
      department: 'engineering',
      location: 'sanfrancisco',
      type: 'Full-time',
      experience: '3+ years',
      description: 'Research and develop quantum computing algorithms and applications.',
      requirements: [
        'PhD in Physics, Computer Science, or related field',
        'Experience with quantum computing frameworks (Qiskit, Cirq)',
        'Knowledge of quantum algorithms and quantum information theory',
        'Strong mathematical and analytical skills'
      ],
      benefits: [
        'Competitive salary with equity options',
        'State-of-the-art quantum computing lab access',
        'Conference and research publication support',
        'Comprehensive benefits package'
      ],
      posted: '2024-01-12',
      urgent: false
    },
    {
      id: 3,
      title: 'Cybersecurity Specialist',
      department: 'cybersecurity',
      location: 'middletown',
      type: 'Full-time',
      experience: '4+ years',
      description: 'Protect our systems and clients with advanced cybersecurity solutions.',
      requirements: [
        'Bachelor\'s degree in Cybersecurity, IT, or related field',
        'Certifications: CISSP, CEH, or similar',
        'Experience with penetration testing and security assessments',
        'Knowledge of zero-trust architecture and modern security frameworks'
      ],
      benefits: [
        'Competitive salary with performance bonuses',
        'Professional certification support',
        'Flexible work arrangements',
        'Health and wellness benefits'
      ],
      posted: '2024-01-10',
      urgent: false
    },
    {
      id: 4,
      title: 'DevOps Engineer',
      department: 'cloud',
      location: 'remote',
      type: 'Full-time',
      experience: '3+ years',
      description: 'Build and maintain our cloud infrastructure and CI/CD pipelines.',
      requirements: [
        'Experience with AWS, Azure, or Google Cloud',
        'Knowledge of Docker, Kubernetes, and containerization',
        'Experience with CI/CD tools (Jenkins, GitLab CI, GitHub Actions)',
        'Strong scripting skills (Python, Bash, PowerShell)'
      ],
      benefits: [
        'Competitive salary with equity options',
        'Remote work flexibility',
        'Cloud certification support',
        'Professional development opportunities'
      ],
      posted: '2024-01-08',
      urgent: false
    },
    {
      id: 5,
      title: 'Sales Development Representative',
      department: 'sales',
      location: 'newyork',
      type: 'Full-time',
      experience: '1+ years',
      description: 'Drive business growth by identifying and qualifying new opportunities.',
      requirements: [
        'Bachelor\'s degree in Business, Marketing, or related field',
        'Strong communication and interpersonal skills',
        'Experience with CRM systems (Salesforce preferred)',
        'Motivated and results-driven personality'
      ],
      benefits: [
        'Competitive base salary with commission structure',
        'Career advancement opportunities',
        'Sales training and development programs',
        'Performance-based bonuses and incentives'
      ],
      posted: '2024-01-05',
      urgent: false
    },
    {
      id: 6,
      title: 'Marketing Manager',
      department: 'marketing',
      location: 'london',
      type: 'Full-time',
      experience: '5+ years',
      description: 'Lead our marketing initiatives and brand development globally.',
      requirements: [
        'Bachelor\'s degree in Marketing, Communications, or related field',
        'Experience in B2B technology marketing',
        'Strong digital marketing skills and analytics knowledge',
        'Experience with marketing automation tools and CRM systems'
      ],
      benefits: [
        'Competitive salary with performance bonuses',
        'International travel opportunities',
        'Marketing budget and creative freedom',
        'Professional development and training'
      ],
      posted: '2024-01-03',
      urgent: false
    }
  ];

  const filteredJobs = jobOpenings.filter(job => {
    const matchesSearch = job.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         job.description.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesDepartment = selectedDepartment === 'all' || job.department === selectedDepartment;
    const matchesLocation = selectedLocation === 'all' || job.location === selectedLocation;
    return matchesSearch && matchesDepartment && matchesLocation;
  });

  const companyValues = [
    {
      icon: Brain,
      title: 'Innovation First',
      description: 'We push the boundaries of what\'s possible and encourage creative thinking.',
      color: 'from-purple-500 to-pink-500'
    },
    {
      icon: Heart,
      title: 'People Matter',
      description: 'Our team is our greatest asset. We invest in growth and well-being.',
      color: 'from-red-500 to-orange-500'
    },
    {
      icon: Globe,
      title: 'Global Impact',
      description: 'We work to create positive change on a worldwide scale.',
      color: 'from-blue-500 to-cyan-500'
    },
    {
      icon: Rocket,
      title: 'Excellence',
      description: 'We strive for excellence in everything we do.',
      color: 'from-green-500 to-emerald-500'
    }
  ];

  const benefits = [
    {
      icon: Zap,
      title: 'Flexible Work',
      description: 'Remote work options and flexible schedules'
    },
    {
      icon: GraduationCap,
      title: 'Learning & Growth',
      description: 'Professional development and training programs'
    },
    {
      icon: Star,
      title: 'Competitive Pay',
      description: 'Excellent salaries with equity and bonuses'
    },
    {
      icon: CheckCircle,
      title: 'Health & Wellness',
      description: 'Comprehensive health, dental, and vision coverage'
    }
  ];

  return (
    <>
      <Helmet>
        <title>Careers - Zion Tech Group | Join Our Technology Innovation Team</title>
        <meta name="description" content="Join Zion Tech Group's team of innovators. Explore exciting career opportunities in AI, quantum computing, cybersecurity, and technology." />
        <meta name="keywords" content="careers, jobs, employment, AI engineer, quantum computing, cybersecurity, technology jobs" />
        <link rel="canonical" href="https://ziontechgroup.com/careers" />
      </Helmet>

      {/* Hero Section */}
      <section className="relative py-20 bg-futuristic-enhanced">
        <div className="container-responsive text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto"
          >
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              Join Our
              <span className="block bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
                Innovation Team
              </span>
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Be part of a team that's shaping the future of technology. Work on cutting-edge 
              AI, quantum computing, and cybersecurity solutions that impact millions worldwide.
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-purple-600 text-white rounded-lg font-semibold text-lg flex items-center gap-2 mx-auto hover:shadow-lg hover:shadow-cyan-500/25 transition-all duration-300"
            >
              View Open Positions
              <ArrowRight className="w-5 h-5" />
            </motion.button>
          </motion.div>
        </div>
      </section>

      {/* Company Values Section */}
      <section className="py-20">
        <div className="container-responsive">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Our Company Values
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              The principles that guide our culture and shape how we work together.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {companyValues.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="text-center p-6 bg-gradient-to-br from-gray-900/50 to-gray-800/30 rounded-2xl border border-gray-700/50"
              >
                <div className={`w-16 h-16 bg-gradient-to-r ${value.color} rounded-2xl flex items-center justify-center mx-auto mb-4`}>
                  <value.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">{value.title}</h3>
                <p className="text-gray-300 text-sm">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-black/20 backdrop-blur-sm">
        <div className="container-responsive">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Why Work With Us?
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              We offer competitive benefits and a supportive environment that helps you thrive.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <motion.div
                key={benefit.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="text-center p-6 bg-gradient-to-br from-gray-900/50 to-gray-800/30 rounded-2xl border border-gray-700/50"
              >
                <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <benefit.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">{benefit.title}</h3>
                <p className="text-gray-300 text-sm">{benefit.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Search and Filter Section */}
      <section className="py-16">
        <div className="container-responsive">
          <div className="max-w-4xl mx-auto">
            <div className="flex flex-col lg:flex-row gap-6 mb-8">
              {/* Search */}
              <div className="flex-1 relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <input
                  type="text"
                  placeholder="Search jobs..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-10 pr-4 py-3 bg-gray-900/50 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-cyan-500 transition-colors"
                />
              </div>

              {/* Department Filter */}
              <div className="flex gap-2">
                {departments.map((dept) => (
                  <button
                    key={dept.id}
                    onClick={() => setSelectedDepartment(dept.id)}
                    className={`px-4 py-3 rounded-lg border transition-all duration-300 flex items-center gap-2 ${
                      selectedDepartment === dept.id
                        ? 'bg-cyan-500 border-cyan-500 text-white'
                        : 'bg-gray-900/50 border-gray-700 text-gray-300 hover:border-cyan-500'
                    }`}
                  >
                    <dept.icon className="w-4 h-4" />
                    {dept.name}
                  </button>
                ))}
              </div>
            </div>

            {/* Location Filter */}
            <div className="flex gap-2 mb-8">
              {locations.map((location) => (
                <button
                  key={location.id}
                  onClick={() => setSelectedLocation(location.id)}
                  className={`px-4 py-3 rounded-lg border transition-all duration-300 flex items-center gap-2 ${
                    selectedLocation === location.id
                      ? 'bg-purple-500 border-purple-500 text-white'
                      : 'bg-gray-900/50 border-gray-700 text-gray-300 hover:border-purple-500'
                  }`}
                >
                  <location.icon className="w-4 h-4" />
                  {location.name}
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Job Listings */}
      <section className="py-16">
        <div className="container-responsive">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold text-white mb-4">Open Positions</h2>
            <p className="text-gray-300">Find the perfect role for your skills and career goals</p>
          </motion.div>

          {filteredJobs.length > 0 ? (
            <div className="space-y-6">
              {filteredJobs.map((job, index) => (
                <motion.div
                  key={job.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="p-8 bg-gradient-to-br from-gray-900/50 to-gray-800/30 rounded-2xl border border-gray-700/50 hover:border-cyan-500/50 transition-all duration-300"
                >
                  {/* Job Header */}
                  <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-6">
                    <div className="flex-1">
                      <div className="flex items-center gap-4 mb-3">
                        <h3 className="text-2xl font-bold text-white">{job.title}</h3>
                        {job.urgent && (
                          <span className="px-3 py-1 bg-red-500/20 text-red-400 text-sm rounded-full border border-red-500/30">
                            Urgent
                          </span>
                        )}
                      </div>
                      <div className="flex flex-wrap items-center gap-4 text-sm text-gray-400">
                        <div className="flex items-center gap-2">
                          <Briefcase className="w-4 h-4" />
                          {departments.find(d => d.id === job.department)?.name}
                        </div>
                        <div className="flex items-center gap-2">
                          <MapPin className="w-4 h-4" />
                          {locations.find(l => l.id === job.location)?.name}
                        </div>
                        <div className="flex items-center gap-2">
                          <Clock className="w-4 h-4" />
                          {job.type}
                        </div>
                        <div className="flex items-center gap-2">
                          <Users className="w-4 h-4" />
                          {job.experience}
                        </div>
                      </div>
                    </div>
                    <div className="mt-4 lg:mt-0">
                      <button className="px-6 py-3 bg-gradient-to-r from-cyan-500 to-purple-600 text-white rounded-lg font-semibold hover:shadow-lg hover:shadow-cyan-500/25 transition-all duration-300">
                        Apply Now
                      </button>
                    </div>
                  </div>

                  {/* Job Description */}
                  <p className="text-gray-300 mb-6">{job.description}</p>

                  {/* Requirements */}
                  <div className="mb-6">
                    <h4 className="text-lg font-semibold text-white mb-3">Requirements:</h4>
                    <ul className="space-y-2">
                      {job.requirements.map((req, idx) => (
                        <li key={idx} className="flex items-start gap-3">
                          <CheckCircle className="w-4 h-4 text-emerald-400 flex-shrink-0 mt-0.5" />
                          <span className="text-gray-300 text-sm">{req}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Benefits */}
                  <div className="mb-6">
                    <h4 className="text-lg font-semibold text-white mb-3">Benefits:</h4>
                    <ul className="space-y-2">
                      {job.benefits.map((benefit, idx) => (
                        <li key={idx} className="flex items-start gap-3">
                          <Star className="w-4 h-4 text-yellow-400 flex-shrink-0 mt-0.5" />
                          <span className="text-gray-300 text-sm">{benefit}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Posted Date */}
                  <div className="text-sm text-gray-400">
                    Posted: {new Date(job.posted).toLocaleDateString('en-US', { 
                      year: 'numeric', 
                      month: 'long', 
                      day: 'numeric' 
                    })}
                  </div>
                </motion.div>
              ))}
            </div>
          ) : (
            <div className="text-center py-16">
              <div className="text-gray-400 text-lg mb-4">No jobs found matching your criteria</div>
              <button
                onClick={() => {
                  setSearchQuery('');
                  setSelectedDepartment('all');
                  setSelectedLocation('all');
                }}
                className="px-6 py-3 bg-cyan-500 text-white rounded-lg hover:bg-cyan-600 transition-colors"
              >
                Clear Filters
              </button>
            </div>
          )}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-black/20 backdrop-blur-sm">
        <div className="container-responsive text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Don't See the Right Role?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              We're always looking for talented individuals to join our team. 
              Send us your resume and we'll keep you in mind for future opportunities.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-purple-600 text-white rounded-lg font-semibold text-lg flex items-center gap-2 hover:shadow-lg hover:shadow-cyan-500/25 transition-all duration-300"
              >
                Submit Resume
                <ArrowRight className="w-5 h-5" />
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 border-2 border-cyan-500 text-cyan-400 rounded-lg font-semibold text-lg hover:bg-cyan-500 hover:text-white transition-all duration-300"
              >
                Contact HR
              </motion.button>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
}
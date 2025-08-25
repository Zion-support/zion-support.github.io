import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Briefcase, 
  Users, 
  Award, 
  MapPin, 
  Clock,
  ArrowRight,
  Search,
  Filter,
  Building,
  Brain,
  Shield,
  Cpu,
  Network,
  Rocket,
  Star,
  CheckCircle,
  Globe,
  Heart,
  Zap
} from 'lucide-react';

export default function Careers() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedDepartment, setSelectedDepartment] = useState('all');
  const [selectedLocation, setSelectedLocation] = useState('all');
  const [selectedType, setSelectedType] = useState('all');

  const departments = [
    { id: 'all', name: 'All Departments', count: 23 },
    { id: 'engineering', name: 'Engineering', count: 12 },
    { id: 'ai-research', name: 'AI Research', count: 6 },
    { id: 'sales', name: 'Sales & Business', count: 3 },
    { id: 'marketing', name: 'Marketing', count: 2 }
  ];

  const locations = [
    { id: 'all', name: 'All Locations', count: 23 },
    { id: 'middletown', name: 'Middletown, DE', count: 15 },
    { id: 'remote', name: 'Remote', count: 6 },
    { id: 'amsterdam', name: 'Amsterdam, NL', count: 2 }
  ];

  const jobTypes = [
    { id: 'all', name: 'All Types', count: 23 },
    { id: 'full-time', name: 'Full Time', count: 18 },
    { id: 'part-time', name: 'Part Time', count: 3 },
    { id: 'contract', name: 'Contract', count: 2 }
  ];

  const openPositions = [
    {
      id: 1,
      title: "Senior AI Research Scientist",
      department: "ai-research",
      location: "middletown",
      type: "full-time",
      experience: "5+ years",
      description: "Lead cutting-edge research in artificial intelligence, machine learning, and autonomous systems. Drive innovation in our AI platform development.",
      requirements: [
        "Ph.D. in Computer Science, AI, or related field",
        "Strong background in machine learning and neural networks",
        "Experience with large language models and AI systems",
        "Published research in top-tier conferences/journals"
      ],
      responsibilities: [
        "Lead AI research initiatives and projects",
        "Develop novel machine learning algorithms",
        "Collaborate with engineering teams on implementation",
        "Mentor junior researchers and engineers"
      ],
      benefits: [
        "Competitive salary with equity options",
        "Health, dental, and vision insurance",
        "Flexible work arrangements",
        "Professional development opportunities"
      ],
      featured: true,
      postedDate: "2025-01-15",
      applications: 45
    },
    {
      id: 2,
      title: "Quantum Computing Engineer",
      department: "engineering",
      location: "middletown",
      type: "full-time",
      experience: "3+ years",
      description: "Develop quantum computing solutions and algorithms for enterprise applications. Work on cutting-edge quantum technology integration.",
      requirements: [
        "M.S. or Ph.D. in Physics, Computer Science, or Engineering",
        "Experience with quantum computing frameworks",
        "Knowledge of quantum algorithms and quantum mechanics",
        "Programming experience in Python, C++, or similar"
      ],
      responsibilities: [
        "Design and implement quantum algorithms",
        "Develop quantum software solutions",
        "Optimize quantum circuit implementations",
        "Collaborate with research and engineering teams"
      ],
      benefits: [
        "Competitive salary with equity options",
        "Health, dental, and vision insurance",
        "401(k) with company match",
        "Professional development and training"
      ],
      featured: true,
      postedDate: "2025-01-14",
      applications: 32
    },
    {
      id: 3,
      title: "Full Stack Developer - AI Platform",
      department: "engineering",
      location: "remote",
      type: "full-time",
      experience: "4+ years",
      description: "Build scalable web applications and APIs for our AI platform. Work with modern technologies and contribute to product development.",
      requirements: [
        "Strong experience with React, Node.js, and TypeScript",
        "Experience with cloud platforms (AWS, Azure, GCP)",
        "Knowledge of database design and optimization",
        "Experience with AI/ML integration preferred"
      ],
      responsibilities: [
        "Develop and maintain web applications",
        "Design and implement RESTful APIs",
        "Optimize application performance and scalability",
        "Collaborate with cross-functional teams"
      ],
      benefits: [
        "Competitive salary with equity options",
        "Remote work flexibility",
        "Health, dental, and vision insurance",
        "Professional development opportunities"
      ],
      featured: false,
      postedDate: "2025-01-13",
      applications: 28
    },
    {
      id: 4,
      title: "Cybersecurity Specialist",
      department: "engineering",
      location: "remote",
      type: "full-time",
      experience: "3+ years",
      description: "Ensure the security of our AI platform and client solutions. Implement security best practices and compliance measures.",
      requirements: [
        "Bachelor's degree in Computer Science or related field",
        "Experience with cybersecurity tools and practices",
        "Knowledge of SOC2 compliance and security frameworks",
        "Certifications like CISSP, CISM preferred"
      ],
      responsibilities: [
        "Implement security controls and measures",
        "Conduct security assessments and audits",
        "Monitor and respond to security incidents",
        "Develop security policies and procedures"
      ],
      benefits: [
        "Competitive salary with equity options",
        "Remote work flexibility",
        "Health, dental, and vision insurance",
        "Professional certification support"
      ],
      featured: false,
      postedDate: "2025-01-12",
      applications: 19
    },
    {
      id: 5,
      title: "Business Development Manager",
      department: "sales",
      location: "amsterdam",
      type: "full-time",
      experience: "5+ years",
      description: "Drive business growth in European markets. Build strategic partnerships and expand our client base across the region.",
      requirements: [
        "Bachelor's degree in Business or related field",
        "Experience in B2B sales and business development",
        "Knowledge of AI/ML technology market",
        "Fluent in English and Dutch preferred"
      ],
      responsibilities: [
        "Identify and pursue new business opportunities",
        "Build and maintain client relationships",
        "Develop strategic partnerships",
        "Achieve sales targets and objectives"
      ],
      benefits: [
        "Competitive salary with commission structure",
        "Health insurance and benefits",
        "Professional development opportunities",
        "Travel and expense allowance"
      ],
      featured: false,
      postedDate: "2025-01-11",
      applications: 15
    },
    {
      id: 6,
      title: "DevOps Engineer",
      department: "engineering",
      location: "middletown",
      type: "full-time",
      experience: "3+ years",
      description: "Manage and optimize our cloud infrastructure and deployment pipelines. Ensure high availability and performance of our AI platform.",
      requirements: [
        "Experience with AWS, Docker, and Kubernetes",
        "Knowledge of CI/CD pipelines and automation",
        "Experience with monitoring and logging tools",
        "Scripting skills in Python, Bash, or similar"
      ],
      responsibilities: [
        "Manage cloud infrastructure and services",
        "Automate deployment and scaling processes",
        "Monitor system performance and availability",
        "Implement security and compliance measures"
      ],
      benefits: [
        "Competitive salary with equity options",
        "Health, dental, and vision insurance",
        "401(k) with company match",
        "Professional development opportunities"
      ],
      featured: false,
      postedDate: "2025-01-10",
      applications: 22
    }
  ];

  const filteredPositions = openPositions.filter(position => {
    const matchesDepartment = selectedDepartment === 'all' || position.department === selectedDepartment;
    const matchesLocation = selectedLocation === 'all' || position.location === selectedLocation;
    const matchesType = selectedType === 'all' || position.type === selectedType;
    const matchesSearch = searchQuery === '' || 
      position.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      position.description.toLowerCase().includes(searchQuery.toLowerCase());
    
    return matchesDepartment && matchesLocation && matchesType && matchesSearch;
  });

  const featuredPositions = filteredPositions.filter(position => position.featured);
  const regularPositions = filteredPositions.filter(position => !position.featured);

  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-blue-900 text-white">
      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center px-4 py-2 bg-cyan-500/20 border border-cyan-500/50 rounded-full text-cyan-400 text-sm font-medium mb-6">
              <Briefcase className="w-4 h-4 mr-2" />
              Join Our Team
            </div>
            <h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent mb-6">
              Build the Future with Us
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed mb-8">
              Join our team of innovators, researchers, and technology leaders who are shaping the future of AI, quantum computing, and enterprise technology.
            </p>
            
            {/* Search Bar */}
            <div className="max-w-2xl mx-auto">
              <div className="relative">
                <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <input
                  type="text"
                  placeholder="Search for positions, skills, or keywords..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-12 pr-4 py-4 bg-gray-800/50 border border-gray-700/50 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:border-cyan-500/50 focus:ring-2 focus:ring-cyan-500/20"
                />
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Filters Section */}
      <section className="pb-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col lg:flex-row gap-6 items-start lg:items-center justify-between">
            {/* Departments */}
            <div className="flex flex-wrap gap-3">
              {departments.map((dept) => (
                <button
                  key={dept.id}
                  onClick={() => setSelectedDepartment(dept.id)}
                  className={`flex items-center px-4 py-2 rounded-lg border transition-all duration-300 ${
                    selectedDepartment === dept.id
                      ? 'bg-cyan-500/20 border-cyan-500/50 text-cyan-400'
                      : 'bg-gray-800/50 border-gray-700/50 text-gray-300 hover:border-cyan-500/30'
                  }`}
                >
                  {dept.name}
                  <span className="ml-2 px-2 py-1 bg-gray-700/50 rounded-full text-xs">
                    {dept.count}
                  </span>
                </button>
              ))}
            </div>

            {/* Locations & Types */}
            <div className="flex flex-wrap gap-2">
              {locations.map((location) => (
                <button
                  key={location.id}
                  onClick={() => setSelectedLocation(location.id)}
                  className={`px-3 py-1 rounded-full text-sm border transition-all duration-300 ${
                    selectedLocation === location.id
                      ? 'bg-cyan-500/20 border-cyan-500/50 text-cyan-400'
                      : 'bg-gray-800/50 border-gray-700/50 text-gray-300 hover:border-cyan-500/30'
                  }`}
                >
                  {location.name}
                  <span className="ml-1 text-xs opacity-75">({location.count})</span>
                </button>
              ))}
              {jobTypes.map((type) => (
                <button
                  key={type.id}
                  onClick={() => setSelectedType(type.id)}
                  className={`px-3 py-1 rounded-full text-sm border transition-all duration-300 ${
                    selectedType === type.id
                      ? 'bg-cyan-500/20 border-cyan-500/50 text-cyan-400'
                      : 'bg-gray-800/50 border-gray-700/50 text-gray-300 hover:border-cyan-500/30'
                  }`}
                >
                  {type.name}
                  <span className="ml-1 text-xs opacity-75">({type.count})</span>
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Featured Positions */}
      {featuredPositions.length > 0 && (
        <section className="pb-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-white mb-4">Featured Positions</h2>
              <p className="text-gray-300">High-priority roles with immediate openings</p>
            </div>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {featuredPositions.map((position, index) => (
                <motion.div
                  key={position.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="bg-gray-800/50 backdrop-blur-sm rounded-2xl border border-gray-700/50 overflow-hidden hover:border-cyan-500/50 transition-all duration-300 hover:transform hover:scale-105"
                >
                  <div className="h-48 bg-gradient-to-br from-cyan-500/20 to-blue-500/20 flex items-center justify-center">
                    <Briefcase className="w-16 h-16 text-cyan-400" />
                  </div>
                  
                  <div className="p-6">
                    <div className="flex items-center gap-4 mb-4">
                      <span className="px-3 py-1 bg-cyan-500/20 text-cyan-400 text-sm rounded-full border border-cyan-500/30">
                        Featured
                      </span>
                      <span className="text-gray-400 text-sm capitalize">{position.department}</span>
                    </div>
                    
                    <h3 className="text-2xl font-bold text-white mb-3 hover:text-cyan-400 transition-colors duration-200">
                      {position.title}
                    </h3>
                    
                    <p className="text-gray-300 mb-4 leading-relaxed">
                      {position.description}
                    </p>
                    
                    <div className="flex items-center justify-between mb-4">
                      <div className="flex items-center gap-4 text-sm text-gray-400">
                        <div className="flex items-center gap-2">
                          <MapPin className="w-4 h-4" />
                          {locations.find(l => l.id === position.location)?.name}
                        </div>
                        <div className="flex items-center gap-2">
                          <Clock className="w-4 h-4" />
                          {position.experience}
                        </div>
                        <div className="flex items-center gap-2">
                          <Users className="w-4 h-4" />
                          {position.applications} applications
                        </div>
                      </div>
                    </div>
                    
                    <div className="mb-4">
                      <h4 className="font-semibold text-gray-300 mb-2">Key Requirements:</h4>
                      <ul className="space-y-1">
                        {position.requirements.slice(0, 3).map((req, idx) => (
                          <li key={idx} className="flex items-center text-sm text-gray-400">
                            <CheckCircle className="w-3 h-3 text-green-400 mr-2 flex-shrink-0" />
                            {req}
                          </li>
                        ))}
                      </ul>
                    </div>
                    
                    <div className="flex items-center justify-between">
                      <div className="flex flex-wrap gap-2">
                        <span className="px-2 py-1 bg-gray-700/50 text-gray-300 text-xs rounded-md">
                          {jobTypes.find(t => t.id === position.type)?.name}
                        </span>
                        <span className="px-2 py-1 bg-gray-700/50 text-gray-300 text-xs rounded-md">
                          {departments.find(d => d.id === position.department)?.name}
                        </span>
                      </div>
                      
                      <button className="flex items-center text-cyan-400 hover:text-cyan-300 transition-colors duration-200">
                        Apply Now
                        <ArrowRight className="w-4 h-4 ml-1" />
                      </button>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Regular Positions */}
      <section className="pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-white mb-4">Open Positions</h2>
            <p className="text-gray-300">
              {filteredPositions.length > 0 
                ? `Showing ${filteredPositions.length} positions` 
                : 'No positions found matching your criteria'
              }
            </p>
          </div>
          
          {regularPositions.length > 0 && (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {regularPositions.map((position, index) => (
                <motion.div
                  key={position.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="bg-gray-800/50 backdrop-blur-sm rounded-2xl border border-gray-700/50 overflow-hidden hover:border-cyan-500/50 transition-all duration-300 hover:transform hover:scale-105"
                >
                  <div className="h-48 bg-gradient-to-br from-purple-500/20 to-pink-500/20 flex items-center justify-center">
                    <Briefcase className="w-12 h-12 text-purple-400" />
                  </div>
                  
                  <div className="p-6">
                    <div className="flex items-center gap-2 mb-3">
                      <span className="text-gray-400 text-sm capitalize">{position.department}</span>
                    </div>
                    
                    <h3 className="text-xl font-bold text-white mb-3 hover:text-cyan-400 transition-colors duration-200">
                      {position.title}
                    </h3>
                    
                    <p className="text-gray-300 mb-4 text-sm leading-relaxed">
                      {position.description}
                    </p>
                    
                    <div className="flex items-center justify-between mb-4">
                      <div className="flex items-center gap-4 text-xs text-gray-400">
                        <div className="flex items-center gap-1">
                          <MapPin className="w-3 h-3" />
                          {locations.find(l => l.id === position.location)?.name}
                        </div>
                        <div className="flex items-center gap-1">
                          <Clock className="w-3 h-3" />
                          {position.experience}
                        </div>
                      </div>
                    </div>
                    
                    <div className="flex items-center justify-between mb-4">
                      <div className="flex flex-wrap gap-1">
                        <span className="px-2 py-1 bg-gray-700/50 text-gray-300 text-xs rounded-md">
                          {jobTypes.find(t => t.id === position.type)?.name}
                        </span>
                        <span className="px-2 py-1 bg-gray-700/50 text-gray-300 text-xs rounded-md">
                          {position.applications} apps
                        </span>
                      </div>
                    </div>
                    
                    <button className="w-full text-center text-cyan-400 hover:text-cyan-300 transition-colors duration-200 text-sm py-2 border border-cyan-500/30 rounded-lg hover:border-cyan-500/50">
                      View Details & Apply
                    </button>
                  </div>
                </motion.div>
              ))}
            </div>
          )}
          
          {regularPositions.length === 0 && (
            <div className="text-center py-12">
              <Briefcase className="w-16 h-16 text-gray-400 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-white mb-2">No positions found</h3>
              <p className="text-gray-300">Try adjusting your search or filter criteria</p>
            </div>
          )}
        </div>
      </section>

      {/* Why Work With Us */}
      <section className="pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-white mb-4">Why Work With Zion Tech Group?</h2>
            <p className="text-gray-300">Discover what makes us an exceptional place to grow your career</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: Brain,
                title: "Cutting-Edge Technology",
                description: "Work with the latest AI, quantum computing, and emerging technologies"
              },
              {
                icon: Rocket,
                title: "Career Growth",
                description: "Continuous learning opportunities and clear advancement paths"
              },
              {
                icon: Heart,
                title: "Inclusive Culture",
                description: "Diverse, collaborative environment that values every team member"
              },
              {
                icon: Zap,
                title: "Impact & Innovation",
                description: "Shape the future of technology and transform businesses worldwide"
              }
            ].map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="text-center p-6"
              >
                <div className="w-16 h-16 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <benefit.icon className="w-8 h-8 text-cyan-400" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">{benefit.title}</h3>
                <p className="text-gray-300 text-sm">{benefit.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* General Application CTA */}
      <section className="pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="bg-gradient-to-r from-cyan-500/10 to-blue-500/10 rounded-3xl p-12 border border-cyan-500/20 text-center"
          >
            <Briefcase className="w-16 h-16 text-cyan-400 mx-auto mb-6" />
            <h2 className="text-3xl font-bold text-white mb-4">Don't See the Right Fit?</h2>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              We're always looking for talented individuals. Send us your resume and let's discuss how you can contribute to our mission.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold rounded-xl hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 transform hover:scale-105">
                Submit General Application
              </button>
              <button className="px-8 py-4 border border-cyan-500/50 text-cyan-400 font-semibold rounded-xl hover:bg-cyan-500/10 transition-all duration-300">
                Contact Recruiting Team
              </button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
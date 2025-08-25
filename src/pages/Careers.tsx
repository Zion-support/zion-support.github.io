import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  Search, 
  MapPin, 
  Briefcase, 
  Clock, 
  Users, 
  Zap,
  Brain,
  Shield,
  Cloud,
  Database,
  Network,
  ArrowRight,
  ChevronDown,
  ChevronRight,
  Star,
  Heart,
  Globe,
  Building2,
  GraduationCap,
  Award,
  Coffee,
  Wifi,
  Monitor,
  Smartphone,
  Palette,
  Dumbbell,
  BookOpen,
  Users2,
  Rocket,
  Target,
  Lightbulb,
  CheckCircle,
  Code,
  Settings,
  Eye
} from 'lucide-react';

export default function Careers() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedDepartment, setSelectedDepartment] = useState('all');
  const [selectedLocation, setSelectedLocation] = useState('all');
  const [selectedType, setSelectedType] = useState('all');

  const departments = [
    { id: 'all', name: 'All Departments', count: 24, icon: Building2 },
    { id: 'engineering', name: 'Engineering', count: 12, icon: Code },
    { id: 'ai-ml', name: 'AI & Machine Learning', count: 6, icon: Brain },
    { id: 'cybersecurity', name: 'Cybersecurity', count: 4, icon: Shield },
    { id: 'quantum', name: 'Quantum Technology', count: 3, icon: Zap },
    { id: 'sales', name: 'Sales & Business Development', count: 5, icon: Target },
    { id: 'marketing', name: 'Marketing', count: 3, icon: Lightbulb },
    { id: 'operations', name: 'Operations', count: 2, icon: Settings }
  ];

  const locations = [
    { id: 'all', name: 'All Locations', count: 24 },
    { id: 'remote', name: 'Remote', count: 18 },
    { id: 'middletown-de', name: 'Middletown, DE', count: 4 },
    { id: 'new-york', name: 'New York, NY', count: 2 }
  ];

  const jobTypes = [
    { id: 'all', name: 'All Types', count: 24 },
    { id: 'full-time', name: 'Full-time', count: 20 },
    { id: 'part-time', name: 'Part-time', count: 2 },
    { id: 'contract', name: 'Contract', count: 2 }
  ];

  const jobOpenings = [
    {
      id: 1,
      title: "Senior AI Research Engineer",
      department: "ai-ml",
      location: "remote",
      type: "full-time",
      experience: "5+ years",
      description: "Lead cutting-edge AI research projects, develop autonomous systems, and push the boundaries of machine learning technology.",
      requirements: [
        "PhD in Computer Science, AI, or related field",
        "5+ years experience in AI/ML research",
        "Expertise in deep learning, neural networks",
        "Experience with autonomous systems",
        "Strong publication record in top AI conferences"
      ],
      responsibilities: [
        "Lead AI research initiatives and projects",
        "Develop novel machine learning algorithms",
        "Collaborate with cross-functional teams",
        "Mentor junior researchers",
        "Publish research findings"
      ],
      benefits: [
        "Competitive salary + equity",
        "Flexible remote work",
        "Professional development budget",
        "Health, dental, vision insurance",
        "Unlimited PTO"
      ],
      salary: "$150,000 - $200,000",
      urgent: true,
      postedDate: "2025-01-15"
    },
    {
      id: 2,
      title: "Quantum Software Engineer",
      department: "quantum",
      location: "remote",
      type: "full-time",
      experience: "3+ years",
      description: "Build quantum computing applications and develop quantum algorithms for solving complex optimization problems.",
      requirements: [
        "MS/PhD in Physics, Computer Science, or related field",
        "3+ years experience in quantum computing",
        "Proficiency in Python, Qiskit, or similar",
        "Understanding of quantum algorithms",
        "Experience with quantum error correction"
      ],
      responsibilities: [
        "Develop quantum computing applications",
        "Implement quantum algorithms",
        "Optimize quantum circuits",
        "Collaborate with research team",
        "Document quantum software solutions"
      ],
      benefits: [
        "Competitive salary + equity",
        "Remote work flexibility",
        "Quantum computing lab access",
        "Conference attendance",
        "Comprehensive benefits package"
      ],
      salary: "$120,000 - $160,000",
      urgent: false,
      postedDate: "2025-01-12"
    },
    {
      id: 3,
      title: "Cybersecurity Architect",
      department: "cybersecurity",
      location: "remote",
      type: "full-time",
      experience: "7+ years",
      description: "Design and implement enterprise-grade security solutions, ensuring compliance with SOC2 and other security standards.",
      requirements: [
        "Bachelor's degree in Cybersecurity, IT, or related field",
        "7+ years in cybersecurity architecture",
        "Expertise in SOC2 compliance",
        "Experience with zero-trust security",
        "Knowledge of quantum-safe cryptography"
      ],
      responsibilities: [
        "Design security architectures",
        "Implement security controls",
        "Ensure compliance standards",
        "Lead security assessments",
        "Mentor security team members"
      ],
      benefits: [
        "Competitive salary + equity",
        "Remote work options",
        "Security certifications",
        "Professional development",
        "Health and wellness benefits"
      ],
      salary: "$140,000 - $180,000",
      urgent: true,
      postedDate: "2025-01-10"
    },
    {
      id: 4,
      title: "Full Stack Developer",
      department: "engineering",
      location: "remote",
      type: "full-time",
      experience: "3+ years",
      description: "Build scalable web applications and contribute to our platform development using modern technologies.",
      requirements: [
        "Bachelor's degree in Computer Science or related field",
        "3+ years full-stack development experience",
        "Proficiency in React, Node.js, TypeScript",
        "Experience with cloud platforms (AWS/Azure)",
        "Knowledge of microservices architecture"
      ],
      responsibilities: [
        "Develop web applications",
        "Write clean, maintainable code",
        "Collaborate with design and product teams",
        "Participate in code reviews",
        "Contribute to technical decisions"
      ],
      benefits: [
        "Competitive salary + equity",
        "Remote work flexibility",
        "Latest development tools",
        "Learning and development budget",
        "Flexible work hours"
      ],
      salary: "$90,000 - $130,000",
      urgent: false,
      postedDate: "2025-01-08"
    },
    {
      id: 5,
      title: "DevOps Engineer",
      department: "engineering",
      location: "remote",
      type: "full-time",
      experience: "4+ years",
      description: "Build and maintain our cloud infrastructure, implement CI/CD pipelines, and ensure system reliability.",
      requirements: [
        "Bachelor's degree in Computer Science or related field",
        "4+ years DevOps experience",
        "Expertise in AWS, Docker, Kubernetes",
        "Experience with CI/CD tools",
        "Knowledge of infrastructure as code"
      ],
      responsibilities: [
        "Manage cloud infrastructure",
        "Implement CI/CD pipelines",
        "Monitor system performance",
        "Automate deployment processes",
        "Ensure system security"
      ],
      benefits: [
        "Competitive salary + equity",
        "Remote work options",
        "Cloud certification budget",
        "Professional development",
        "Comprehensive benefits"
      ],
      salary: "$100,000 - $140,000",
      urgent: false,
      postedDate: "2025-01-05"
    },
    {
      id: 6,
      title: "Business Development Manager",
      department: "sales",
      location: "remote",
      type: "full-time",
      experience: "5+ years",
      description: "Drive business growth by identifying new opportunities, building partnerships, and expanding our market presence.",
      requirements: [
        "Bachelor's degree in Business or related field",
        "5+ years in B2B sales or business development",
        "Experience in technology sales",
        "Strong networking skills",
        "Track record of meeting/exceeding targets"
      ],
      responsibilities: [
        "Identify new business opportunities",
        "Build strategic partnerships",
        "Develop sales strategies",
        "Manage client relationships",
        "Achieve revenue targets"
      ],
      benefits: [
        "Competitive base + commission",
        "Remote work flexibility",
        "Travel opportunities",
        "Professional development",
        "Performance bonuses"
      ],
      salary: "$80,000 - $120,000 + commission",
      urgent: false,
      postedDate: "2025-01-03"
    }
  ];

  const companyValues = [
    {
      title: "Innovation First",
      description: "We push boundaries and embrace cutting-edge technologies",
      icon: Rocket,
      color: "from-blue-500 to-cyan-500"
    },
    {
      title: "Excellence",
      description: "We strive for the highest quality in everything we do",
      icon: Star,
      color: "from-yellow-500 to-orange-500"
    },
    {
      title: "Collaboration",
      description: "We believe in the power of diverse teams working together",
      icon: Users2,
      color: "from-green-500 to-emerald-500"
    },
    {
      title: "Continuous Learning",
      description: "We invest in growth and development at every level",
      icon: BookOpen,
      color: "from-purple-500 to-pink-500"
    }
  ];

  const benefits = [
    {
      category: "Health & Wellness",
      items: [
        { name: "Comprehensive Health Insurance", icon: Heart },
        { name: "Dental & Vision Coverage", icon: Eye },
        { name: "Mental Health Support", icon: Brain },
        { name: "Fitness Program Reimbursement", icon: Dumbbell }
      ]
    },
    {
      category: "Work-Life Balance",
      items: [
        { name: "Unlimited PTO", icon: Clock },
        { name: "Flexible Work Hours", icon: Monitor },
        { name: "Remote Work Options", icon: Wifi },
        { name: "Parental Leave", icon: Users }
      ]
    },
    {
      category: "Professional Growth",
      items: [
        { name: "Learning & Development Budget", icon: BookOpen },
        { name: "Conference Attendance", icon: Globe },
        { name: "Certification Programs", icon: Award },
        { name: "Mentorship Programs", icon: Users2 }
      ]
    },
    {
      category: "Perks & Culture",
      items: [
        { name: "Equity Participation", icon: Star },
        { name: "Modern Office Spaces", icon: Building2 },
        { name: "Team Events & Activities", icon: Coffee },
        { name: "Latest Technology Tools", icon: Smartphone }
      ]
    }
  ];

  const filteredJobs = jobOpenings.filter(job => {
    const matchesSearch = job.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         job.description.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesDepartment = selectedDepartment === 'all' || job.department === selectedDepartment;
    const matchesLocation = selectedLocation === 'all' || job.location === selectedLocation;
    const matchesType = selectedType === 'all' || job.type === selectedType;
    
    return matchesSearch && matchesDepartment && matchesLocation && matchesType;
  });

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', { 
      year: 'numeric', 
      month: 'long', 
      day: 'numeric' 
    });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-900">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 to-blue-500/10"></div>
        <div className="relative container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              Join Our Mission to
              <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                {" "}Transform the Future
              </span>
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Be part of a team that's pushing the boundaries of AI, quantum technology, and cybersecurity. 
              Help us build solutions that will shape the future of business and technology.
            </p>
            
            {/* Search Bar */}
            <div className="relative max-w-2xl mx-auto mb-8">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 w-6 h-6 text-gray-400" />
              <input
                type="text"
                placeholder="Search for jobs, departments, or skills..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-12 pr-4 py-4 bg-gray-800/50 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
              />
            </div>

            <div className="flex flex-wrap justify-center gap-4">
              <Link
                to="/contact"
                className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold rounded-lg hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 transform hover:scale-105"
              >
                Apply Now
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
              <Link
                to="/about"
                className="inline-flex items-center px-8 py-4 border-2 border-cyan-500/30 text-cyan-400 font-semibold rounded-lg hover:bg-cyan-500/10 transition-all duration-300"
              >
                Learn About Us
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Company Values */}
      <section className="py-20 bg-black/20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">
              Our Values
            </h2>
            <p className="text-xl text-gray-300">
              The principles that guide everything we do
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {companyValues.map((value, index) => (
              <div
                key={index}
                className="text-center p-6 bg-gray-800/50 rounded-xl border border-gray-700 hover:border-cyan-500/50 transition-all duration-300 hover:bg-gray-800/70"
              >
                <div className={`w-16 h-16 bg-gradient-to-br ${value.color} rounded-xl flex items-center justify-center mx-auto mb-4`}>
                  <value.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">{value.title}</h3>
                <p className="text-gray-300 text-sm">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">
              Why Work With Us?
            </h2>
            <p className="text-xl text-gray-300">
              We invest in our people because they're our greatest asset
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {benefits.map((category, index) => (
              <div
                key={index}
                className="bg-gray-800/50 rounded-xl border border-gray-700 p-6"
              >
                <h3 className="text-xl font-semibold text-white mb-4">{category.category}</h3>
                <div className="space-y-3">
                  {category.items.map((item, itemIndex) => (
                    <div key={itemIndex} className="flex items-center gap-3">
                      <CheckCircle className="w-5 h-5 text-cyan-400 flex-shrink-0" />
                      <span className="text-gray-300">{item.name}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Job Filters */}
      <section className="py-12 bg-black/20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-6">
            {/* Department Filters */}
            <div className="flex flex-wrap gap-3">
              {departments.map((dept) => (
                <button
                  key={dept.id}
                  onClick={() => setSelectedDepartment(dept.id)}
                  className={`flex items-center gap-2 px-4 py-2 rounded-lg border transition-all duration-300 ${
                    selectedDepartment === dept.id
                      ? 'bg-cyan-500/20 border-cyan-500/50 text-cyan-400'
                      : 'bg-gray-800/50 border-gray-700 text-gray-300 hover:border-cyan-500/30 hover:bg-gray-800/70'
                  }`}
                >
                  <dept.icon className="w-4 h-4" />
                  {dept.name}
                  <span className="text-xs bg-gray-700 px-2 py-1 rounded-full">
                    {dept.count}
                  </span>
                </button>
              ))}
            </div>

            {/* Additional Filters */}
            <div className="flex items-center gap-3">
              <select
                value={selectedLocation}
                onChange={(e) => setSelectedLocation(e.target.value)}
                className="bg-gray-800/50 border border-gray-700 text-white rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
              >
                {locations.map((location) => (
                  <option key={location.id} value={location.id}>
                    {location.name} ({location.count})
                  </option>
                ))}
              </select>
              
              <select
                value={selectedType}
                onChange={(e) => setSelectedType(e.target.value)}
                className="bg-gray-800/50 border border-gray-700 text-white rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
              >
                {jobTypes.map((type) => (
                  <option key={type.id} value={type.id}>
                    {type.name} ({type.count})
                  </option>
                ))}
              </select>
            </div>
          </div>
        </div>
      </section>

      {/* Job Openings */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">
              Open Positions
            </h2>
            <p className="text-xl text-gray-300">
              {filteredJobs.length} job{filteredJobs.length !== 1 ? 's' : ''} available
            </p>
          </div>

          <div className="space-y-6">
            {filteredJobs.map((job) => (
              <div
                key={job.id}
                className="bg-gray-800/50 rounded-xl border border-gray-700 p-6 hover:border-cyan-500/50 transition-all duration-300 hover:bg-gray-800/70"
              >
                <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
                  <div className="flex-1">
                    <div className="flex items-start justify-between mb-3">
                      <div>
                        <h3 className="text-2xl font-bold text-white mb-2">
                          {job.title}
                          {job.urgent && (
                            <span className="ml-3 px-2 py-1 bg-red-500/20 text-red-400 text-xs rounded-full border border-red-500/50">
                              Urgent
                            </span>
                          )}
                        </h3>
                        <div className="flex flex-wrap items-center gap-4 text-sm text-gray-400 mb-4">
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
                            {jobTypes.find(t => t.id === job.type)?.name}
                          </div>
                          <div className="flex items-center gap-2">
                            <Users className="w-4 h-4" />
                            {job.experience}
                          </div>
                        </div>
                      </div>
                      <div className="text-right">
                        <p className="text-cyan-400 font-bold text-lg">{job.salary}</p>
                        <p className="text-gray-400 text-sm">Posted {formatDate(job.postedDate)}</p>
                      </div>
                    </div>
                    
                    <p className="text-gray-300 mb-4">{job.description}</p>
                    
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                      <div>
                        <h4 className="text-white font-semibold mb-2">Requirements:</h4>
                        <ul className="space-y-1">
                          {job.requirements.map((req, index) => (
                            <li key={index} className="flex items-start gap-2 text-gray-300 text-sm">
                              <CheckCircle className="w-4 h-4 text-cyan-400 mt-0.5 flex-shrink-0" />
                              {req}
                            </li>
                          ))}
                        </ul>
                      </div>
                      <div>
                        <h4 className="text-white font-semibold mb-2">Responsibilities:</h4>
                        <ul className="space-y-1">
                          {job.responsibilities.map((resp, index) => (
                            <li key={index} className="flex items-start gap-2 text-gray-300 text-sm">
                              <CheckCircle className="w-4 h-4 text-cyan-400 mt-0.5 flex-shrink-0" />
                              {resp}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="mt-6 pt-6 border-t border-gray-700">
                  <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
                    <div className="flex flex-wrap gap-2">
                      {job.benefits.slice(0, 3).map((benefit, index) => (
                        <span
                          key={index}
                          className="px-3 py-1 bg-gray-700/50 text-cyan-400 text-sm rounded-full border border-gray-600"
                        >
                          {benefit}
                        </span>
                      ))}
                    </div>
                    <Link
                      to="/contact"
                      className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold rounded-lg hover:from-cyan-600 hover:to-blue-700 transition-all duration-300"
                    >
                      Apply Now
                      <ArrowRight className="ml-2 w-4 h-4" />
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {filteredJobs.length === 0 && (
            <div className="text-center py-12">
              <Briefcase className="w-16 h-16 text-gray-400 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-white mb-2">No jobs found</h3>
              <p className="text-gray-300">Try adjusting your search or filter criteria</p>
            </div>
          )}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-cyan-500/10 to-blue-500/10">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            Ready to Join Our Team?
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Don't see the perfect role? Send us your resume and we'll keep you in mind for future opportunities.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold rounded-lg hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 transform hover:scale-105"
            >
              Submit Your Resume
              <ArrowRight className="ml-2 w-5 h-5" />
            </Link>
            <Link
              to="/about"
              className="inline-flex items-center px-8 py-4 border-2 border-cyan-500/30 text-cyan-400 font-semibold rounded-lg hover:bg-cyan-500/10 transition-all duration-300"
            >
              Learn More About Us
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
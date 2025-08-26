import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  Briefcase, 
  MapPin, 
  Clock, 
  Users, 
  Heart, 
  Zap, 
  Globe, 
  Award,
  ArrowRight,
  Search,
  Filter,
  Building,
  GraduationCap,
  Coffee,
  Gamepad2
} from 'lucide-react';

export default function Careers() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedDepartment, setSelectedDepartment] = useState('all');
  const [selectedLocation, setSelectedLocation] = useState('all');

  const departments = [
    { id: 'all', name: 'All Departments', count: 15 },
    { id: 'engineering', name: 'Engineering', count: 8 },
    { id: 'ai-research', name: 'AI Research', count: 4 },
    { id: 'cybersecurity', name: 'Cybersecurity', count: 3 },
    { id: 'sales', name: 'Sales & Business Development', count: 2 },
    { id: 'marketing', name: 'Marketing', count: 1 }
  ];

  const locations = [
    { id: 'all', name: 'All Locations', count: 15 },
    { id: 'remote', name: 'Remote', count: 8 },
    { id: 'middletown-de', name: 'Middletown, DE', count: 4 },
    { id: 'new-york', name: 'New York, NY', count: 2 },
    { id: 'san-francisco', name: 'San Francisco, CA', count: 1 }
  ];

  const jobOpenings = [
    {
      id: 1,
      title: "Senior AI Engineer",
      department: "ai-research",
      location: "remote",
      type: "Full-time",
      experience: "5+ years",
      description: "Join our AI research team to develop cutting-edge autonomous systems and machine learning solutions.",
      requirements: [
        "Advanced degree in Computer Science, AI, or related field",
        "Experience with PyTorch, TensorFlow, and modern ML frameworks",
        "Strong background in deep learning and neural networks",
        "Experience with large language models and generative AI"
      ],
      benefits: ["Competitive salary", "Stock options", "Remote work", "Health insurance"],
      posted: "2024-01-15"
    },
    {
      id: 2,
      title: "Cybersecurity Specialist",
      department: "cybersecurity",
      location: "middletown-de",
      type: "Full-time",
      experience: "3+ years",
      description: "Protect our clients' digital assets with advanced security solutions and threat detection systems.",
      requirements: [
        "Bachelor's degree in Cybersecurity or related field",
        "Experience with SIEM tools and security frameworks",
        "Knowledge of threat hunting and incident response",
        "Relevant certifications (CISSP, CEH, etc.)"
      ],
      benefits: ["Competitive salary", "Professional development", "On-site work", "Health insurance"],
      posted: "2024-01-14"
    },
    {
      id: 3,
      title: "Full Stack Developer",
      department: "engineering",
      location: "remote",
      type: "Full-time",
      experience: "3+ years",
      description: "Build scalable web applications and APIs using modern technologies and best practices.",
      requirements: [
        "Experience with React, Node.js, and TypeScript",
        "Knowledge of cloud platforms (AWS, Azure, GCP)",
        "Experience with databases and API design",
        "Understanding of DevOps practices"
      ],
      benefits: ["Competitive salary", "Remote work", "Flexible hours", "Health insurance"],
      posted: "2024-01-13"
    },
    {
      id: 4,
      title: "AI Research Scientist",
      department: "ai-research",
      location: "san-francisco",
      type: "Full-time",
      experience: "PhD + 2+ years",
      description: "Lead research initiatives in quantum computing and advanced AI algorithms.",
      requirements: [
        "PhD in Computer Science, Physics, or related field",
        "Published research in top-tier conferences",
        "Experience with quantum algorithms and quantum ML",
        "Strong mathematical and theoretical background"
      ],
      benefits: ["Competitive salary", "Research budget", "Conference attendance", "Health insurance"],
      posted: "2024-01-12"
    },
    {
      id: 5,
      title: "DevOps Engineer",
      department: "engineering",
      location: "remote",
      type: "Full-time",
      experience: "4+ years",
      description: "Design and maintain our cloud infrastructure and CI/CD pipelines.",
      requirements: [
        "Experience with Kubernetes and containerization",
        "Knowledge of AWS, Azure, or GCP",
        "Experience with Terraform and infrastructure as code",
        "Understanding of monitoring and logging tools"
      ],
      benefits: ["Competitive salary", "Remote work", "Flexible hours", "Health insurance"],
      posted: "2024-01-11"
    },
    {
      id: 6,
      title: "Business Development Manager",
      department: "sales",
      location: "new-york",
      type: "Full-time",
      experience: "5+ years",
      description: "Drive business growth by identifying new opportunities and building client relationships.",
      requirements: [
        "Experience in B2B technology sales",
        "Strong communication and negotiation skills",
        "Understanding of AI and technology markets",
        "Proven track record of meeting sales targets"
      ],
      benefits: ["Competitive salary", "Commission structure", "Travel opportunities", "Health insurance"],
      posted: "2024-01-10"
    }
  ];

  const companyValues = [
    {
      icon: Heart,
      title: "People First",
      description: "We believe our team is our greatest asset and invest in their growth and well-being."
    },
    {
      icon: Zap,
      title: "Innovation Driven",
      description: "We constantly push boundaries and embrace new technologies to solve complex challenges."
    },
    {
      icon: Globe,
      title: "Global Impact",
      description: "Our solutions reach businesses worldwide, creating positive change across industries."
    },
    {
      icon: Award,
      title: "Excellence",
      description: "We maintain the highest standards in everything we do, from code quality to customer service."
    }
  ];

  const benefits = [
    {
      icon: Building,
      title: "Flexible Work",
      description: "Remote work options and flexible hours to support work-life balance."
    },
    {
      icon: GraduationCap,
      title: "Learning & Growth",
      description: "Continuous learning opportunities, conferences, and professional development."
    },
    {
      icon: Coffee,
      title: "Great Culture",
      description: "Collaborative environment with team events and a supportive community."
    },
    {
      icon: Gamepad2,
      title: "Fun & Rewards",
      description: "Team building activities, recognition programs, and competitive benefits."
    }
  ];

  const filteredJobs = jobOpenings.filter(job => {
    const matchesSearch = job.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         job.description.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesDepartment = selectedDepartment === 'all' || job.department === selectedDepartment;
    const matchesLocation = selectedLocation === 'all' || job.location === selectedLocation;
    return matchesSearch && matchesDepartment && matchesLocation;
  });

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  const getLocationName = (locationId: string) => {
    const location = locations.find(loc => loc.id === locationId);
    return location ? location.name : locationId;
  };

  const getDepartmentName = (deptId: string) => {
    const dept = departments.find(d => d.id === deptId);
    return dept ? dept.name : deptId;
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      {/* Hero Section */}
      <section className="pt-32 pb-20 text-center">
        <div className="max-w-4xl mx-auto px-6">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent">
            Join Our Team
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 mb-8">
            Build the future of technology with Zion Tech Group
          </p>
          <p className="text-lg text-gray-400 max-w-3xl mx-auto">
            We're looking for passionate individuals who want to make a difference in the world 
            through innovative technology solutions. Join us in shaping the future of AI, 
            cybersecurity, and digital transformation.
          </p>
        </div>
      </section>

      {/* Company Values */}
      <section className="py-20 bg-black/30">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-white text-center mb-12">Our Values</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {companyValues.map((value, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <value.icon className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">{value.title}</h3>
                <p className="text-gray-300">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-white text-center mb-12">Why Work With Us</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-600 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <benefit.icon className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">{benefit.title}</h3>
                <p className="text-gray-300">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Job Search */}
      <section className="py-20 bg-black/30">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-white text-center mb-12">Open Positions</h2>
          
          {/* Search and Filters */}
          <div className="flex flex-col lg:flex-row gap-6 items-center justify-between mb-8">
            {/* Search */}
            <div className="relative flex-1 max-w-md">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
              <input
                type="text"
                placeholder="Search jobs..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-3 bg-slate-800/50 border border-slate-600/50 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
              />
            </div>

            {/* Filters */}
            <div className="flex items-center space-x-4">
              <div className="flex items-center space-x-2">
                <Filter className="h-5 w-5 text-gray-400" />
                <select
                  value={selectedDepartment}
                  onChange={(e) => setSelectedDepartment(e.target.value)}
                  className="px-4 py-3 bg-slate-800/50 border border-slate-600/50 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
                >
                  {departments.map((dept) => (
                    <option key={dept.id} value={dept.id}>
                      {dept.name} ({dept.count})
                    </option>
                  ))}
                </select>
              </div>
              
              <select
                value={selectedLocation}
                onChange={(e) => setSelectedLocation(e.target.value)}
                className="px-4 py-3 bg-slate-800/50 border border-slate-600/50 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
              >
                {locations.map((location) => (
                  <option key={location.id} value={location.id}>
                    {location.name} ({location.count})
                  </option>
                ))}
              </select>
            </div>
          </div>

          {/* Job Listings */}
          <div className="space-y-6">
            {filteredJobs.map((job) => (
              <div
                key={job.id}
                className="bg-slate-800/50 border border-slate-700/50 rounded-xl p-6 hover:border-cyan-500/50 transition-all duration-300"
              >
                <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between">
                  <div className="flex-1">
                    <div className="flex items-center space-x-4 mb-3">
                      <h3 className="text-2xl font-bold text-white">{job.title}</h3>
                      <span className="px-3 py-1 bg-cyan-500/20 text-cyan-400 text-sm font-medium rounded-full">
                        {job.type}
                      </span>
                    </div>
                    
                    <div className="flex flex-wrap items-center space-x-6 text-sm text-gray-400 mb-4">
                      <div className="flex items-center space-x-2">
                        <Briefcase className="h-4 w-4" />
                        <span>{getDepartmentName(job.department)}</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <MapPin className="h-4 w-4" />
                        <span>{getLocationName(job.location)}</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Clock className="h-4 w-4" />
                        <span>{job.experience}</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <span>Posted: {formatDate(job.posted)}</span>
                      </div>
                    </div>
                    
                    <p className="text-gray-300 mb-4">{job.description}</p>
                    
                    <div className="mb-4">
                      <h4 className="text-sm font-medium text-cyan-400 mb-2">Requirements:</h4>
                      <ul className="space-y-1">
                        {job.requirements.slice(0, 3).map((req, index) => (
                          <li key={index} className="text-sm text-gray-400 flex items-center">
                            <div className="w-1.5 h-1.5 bg-cyan-400 rounded-full mr-2"></div>
                            {req}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                  
                  <div className="lg:ml-6 lg:text-right">
                    <div className="mb-4">
                      <h4 className="text-sm font-medium text-cyan-400 mb-2">Benefits:</h4>
                      <div className="flex flex-wrap gap-2 justify-center lg:justify-end">
                        {job.benefits.slice(0, 2).map((benefit, index) => (
                          <span key={index} className="px-2 py-1 bg-slate-700/50 text-gray-300 text-xs rounded-full">
                            {benefit}
                          </span>
                        ))}
                      </div>
                    </div>
                    
                    <Link
                      to={`/careers/${job.id}`}
                      className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold rounded-lg hover:from-cyan-600 hover:to-blue-700 transition-all duration-200"
                    >
                      Apply Now
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {filteredJobs.length === 0 && (
            <div className="text-center py-16">
              <div className="w-24 h-24 bg-slate-700/50 rounded-full flex items-center justify-center mx-auto mb-6">
                <Briefcase className="h-12 w-12 text-gray-400" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">No positions found</h3>
              <p className="text-gray-300 mb-6">
                Try adjusting your search terms or filters.
              </p>
              <button
                onClick={() => {
                  setSearchQuery('');
                  setSelectedDepartment('all');
                  setSelectedLocation('all');
                }}
                className="text-cyan-400 hover:text-cyan-300 transition-colors"
              >
                Clear filters
              </button>
            </div>
          )}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Don't See the Right Role?
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            We're always looking for talented individuals. Send us your resume and we'll 
            keep you in mind for future opportunities.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="px-8 py-3 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold rounded-lg hover:from-cyan-600 hover:to-blue-700 transition-all duration-200 transform hover:scale-105"
            >
              Send Resume
            </Link>
            <Link
              to="/about"
              className="px-8 py-3 border border-cyan-500 text-cyan-400 font-semibold rounded-lg hover:bg-cyan-500 hover:text-white transition-all duration-200"
            >
              Learn More About Us
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

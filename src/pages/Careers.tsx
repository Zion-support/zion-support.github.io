import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  MapPin, 
  Clock, 
  Users, 
  Building, 
  Rocket, 
  Brain, 
  Shield, 
  Cpu,
  Globe,
  Award,
  ArrowRight,
  Mail,
  Linkedin,
  ExternalLink,
  Filter,
  Search
} from 'lucide-react';

export default function Careers() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedDepartment, setSelectedDepartment] = useState('All');
  const [selectedLocation, setSelectedLocation] = useState('All');

  const departments = [
    'All',
    'Engineering',
    'AI & Research',
    'Sales & Business Development',
    'Marketing',
    'Operations',
    'Customer Success',
    'Finance & Legal'
  ];

  const locations = [
    'All',
    'Remote',
    'Middletown, DE',
    'Silicon Valley, CA',
    'New York, NY',
    'Austin, TX',
    'Seattle, WA'
  ];

  const jobOpenings = [
    {
      id: 1,
      title: "Senior AI Engineer",
      department: "AI & Research",
      location: "Remote",
      type: "Full-time",
      experience: "5+ years",
      description: "Join our AI team to develop cutting-edge autonomous systems and machine learning solutions.",
      requirements: [
        "Advanced degree in Computer Science, AI, or related field",
        "Experience with PyTorch, TensorFlow, and modern ML frameworks",
        "Knowledge of autonomous systems and reinforcement learning",
        "Strong software engineering principles and practices"
      ],
      responsibilities: [
        "Design and implement AI algorithms for autonomous systems",
        "Collaborate with research team on innovative ML approaches",
        "Optimize model performance and scalability",
        "Mentor junior engineers and contribute to technical decisions"
      ],
      benefits: [
        "Competitive salary and equity package",
        "Flexible remote work options",
        "Professional development and conference attendance",
        "Health, dental, and vision insurance"
      ],
      featured: true,
      postedDate: "2025-01-20"
    },
    {
      id: 2,
      title: "Quantum Computing Researcher",
      department: "AI & Research",
      location: "Silicon Valley, CA",
      type: "Full-time",
      experience: "3+ years",
      description: "Research and develop quantum computing algorithms and applications for enterprise solutions.",
      requirements: [
        "PhD in Physics, Computer Science, or related field",
        "Experience with quantum computing platforms (IBM Q, Rigetti)",
        "Knowledge of quantum algorithms and quantum machine learning",
        "Strong mathematical and analytical skills"
      ],
      responsibilities: [
        "Research quantum computing applications for business problems",
        "Develop quantum algorithms and optimization techniques",
        "Collaborate with academic and industry partners",
        "Publish research findings and present at conferences"
      ],
      benefits: [
        "Competitive salary and equity package",
        "Access to state-of-the-art quantum computing resources",
        "Academic collaboration opportunities",
        "Comprehensive benefits package"
      ],
      featured: true,
      postedDate: "2025-01-18"
    },
    {
      id: 3,
      title: "Senior Full-Stack Developer",
      department: "Engineering",
      location: "Remote",
      type: "Full-time",
      experience: "4+ years",
      description: "Build scalable web applications and microservices for our AI-powered platform.",
      requirements: [
        "Strong experience with React, Node.js, and TypeScript",
        "Experience with cloud platforms (AWS, Azure, GCP)",
        "Knowledge of microservices architecture and DevOps practices",
        "Experience with database design and optimization"
      ],
      responsibilities: [
        "Develop and maintain web applications and APIs",
        "Implement responsive and accessible user interfaces",
        "Collaborate with design and product teams",
        "Participate in code reviews and technical planning"
      ],
      benefits: [
        "Competitive salary and equity package",
        "Remote work flexibility",
        "Professional development opportunities",
        "Health and wellness benefits"
      ],
      featured: false,
      postedDate: "2025-01-15"
    },
    {
      id: 4,
      title: "Cybersecurity Engineer",
      department: "Engineering",
      location: "Middletown, DE",
      type: "Full-time",
      experience: "3+ years",
      description: "Ensure the security and compliance of our AI platforms and client solutions.",
      requirements: [
        "Experience with security frameworks and compliance standards",
        "Knowledge of threat detection and incident response",
        "Experience with security tools and penetration testing",
        "Understanding of AI security challenges and solutions"
      ],
      responsibilities: [
        "Implement security controls and monitoring systems",
        "Conduct security assessments and penetration testing",
        "Develop security policies and procedures",
        "Respond to security incidents and threats"
      ],
      benefits: [
        "Competitive salary and equity package",
        "On-site and hybrid work options",
        "Security training and certifications",
        "Comprehensive benefits package"
      ],
      featured: false,
      postedDate: "2025-01-12"
    },
    {
      id: 5,
      title: "Business Development Manager",
      department: "Sales & Business Development",
      location: "New York, NY",
      type: "Full-time",
      experience: "5+ years",
      description: "Drive business growth by identifying and developing strategic partnerships and opportunities.",
      requirements: [
        "Experience in B2B sales and business development",
        "Knowledge of AI, cybersecurity, or enterprise technology",
        "Strong relationship-building and negotiation skills",
        "Experience with enterprise sales cycles"
      ],
      responsibilities: [
        "Identify and pursue new business opportunities",
        "Build and maintain client relationships",
        "Develop strategic partnerships and alliances",
        "Achieve sales targets and business objectives"
      ],
      benefits: [
        "Competitive salary and commission structure",
        "Travel and entertainment budget",
        "Professional development opportunities",
        "Health and wellness benefits"
      ],
      featured: false,
      postedDate: "2025-01-10"
    },
    {
      id: 6,
      title: "Product Marketing Manager",
      department: "Marketing",
      location: "Remote",
      type: "Full-time",
      experience: "4+ years",
      description: "Develop and execute marketing strategies for our AI and technology solutions.",
      requirements: [
        "Experience in B2B technology marketing",
        "Knowledge of AI, cybersecurity, or enterprise technology",
        "Strong analytical and creative skills",
        "Experience with digital marketing and content creation"
      ],
      responsibilities: [
        "Develop product positioning and messaging",
        "Create marketing campaigns and content",
        "Analyze market trends and competitive landscape",
        "Collaborate with sales and product teams"
      ],
      benefits: [
        "Competitive salary and equity package",
        "Remote work flexibility",
        "Marketing tools and resources",
        "Professional development opportunities"
      ],
      featured: false,
      postedDate: "2025-01-08"
    },
    {
      id: 7,
      title: "Customer Success Manager",
      department: "Customer Success",
      location: "Austin, TX",
      type: "Full-time",
      experience: "3+ years",
      description: "Ensure customer satisfaction and success with our AI-powered solutions.",
      requirements: [
        "Experience in customer success or account management",
        "Knowledge of AI, cybersecurity, or enterprise technology",
        "Strong communication and problem-solving skills",
        "Experience with customer success platforms and tools"
      ],
      responsibilities: [
        "Manage customer relationships and success metrics",
        "Onboard new customers and provide training",
        "Identify upsell and expansion opportunities",
        "Gather customer feedback and drive product improvements"
      ],
      benefits: [
        "Competitive salary and equity package",
        "Hybrid work options",
        "Customer success tools and resources",
        "Professional development opportunities"
      ],
      featured: false,
      postedDate: "2025-01-05"
    },
    {
      id: 8,
      title: "DevOps Engineer",
      department: "Engineering",
      location: "Seattle, WA",
      type: "Full-time",
      experience: "3+ years",
      description: "Build and maintain our cloud infrastructure and deployment pipelines.",
      requirements: [
        "Experience with cloud platforms (AWS, Azure, GCP)",
        "Knowledge of containerization and orchestration (Docker, Kubernetes)",
        "Experience with CI/CD pipelines and automation",
        "Understanding of infrastructure as code principles"
      ],
      responsibilities: [
        "Design and implement cloud infrastructure",
        "Automate deployment and scaling processes",
        "Monitor system performance and reliability",
        "Collaborate with development and operations teams"
      ],
      benefits: [
        "Competitive salary and equity package",
        "On-site and hybrid work options",
        "Cloud training and certifications",
        "Comprehensive benefits package"
      ],
      featured: false,
      postedDate: "2025-01-03"
    }
  ];

  const filteredJobs = jobOpenings.filter(job => {
    const matchesSearch = job.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         job.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         job.department.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesDepartment = selectedDepartment === 'All' || job.department === selectedDepartment;
    const matchesLocation = selectedLocation === 'All' || job.location === selectedLocation;
    return matchesSearch && matchesDepartment && matchesLocation;
  });

  const featuredJobs = filteredJobs.filter(job => job.featured);
  const regularJobs = filteredJobs.filter(job => !job.featured);

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', { 
      year: 'numeric', 
      month: 'long', 
      day: 'numeric' 
    });
  };

  const companyValues = [
    {
      title: "Innovation First",
      description: "We push the boundaries of what's possible with cutting-edge technology",
      icon: Rocket
    },
    {
      title: "Excellence",
      description: "We deliver the highest quality solutions and exceptional service",
      icon: Award
    },
    {
      title: "Collaboration",
      description: "We work together to achieve extraordinary results for our clients",
      icon: Users
    },
    {
      title: "Integrity",
      description: "We maintain the highest ethical standards in all our interactions",
      icon: Shield
    }
  ];

  const benefits = [
    {
      title: "Competitive Compensation",
      description: "Attractive salary packages with equity options",
      icon: Award
    },
    {
      title: "Flexible Work",
      description: "Remote and hybrid work options for work-life balance",
      icon: Globe
    },
    {
      title: "Professional Growth",
      description: "Continuous learning and career development opportunities",
      icon: Brain
    },
    {
      title: "Health & Wellness",
      description: "Comprehensive health, dental, and vision coverage",
      icon: Shield
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-blue-900">
      {/* Hero Section */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(0,255,255,0.1),transparent_50%)]"></div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-20">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Join Our Team
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
              Help us shape the future of technology. Join a team of innovators, 
              researchers, and industry experts committed to transforming businesses 
              through cutting-edge AI solutions.
            </p>
            
            {/* Search and Filter */}
            <div className="max-w-4xl mx-auto mb-8">
              <div className="relative mb-6">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <input
                  type="text"
                  placeholder="Search jobs, departments, or keywords..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-10 pr-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
                />
              </div>
              
              <div className="flex flex-wrap gap-4 justify-center">
                <div className="flex items-center gap-2">
                  <Filter className="w-4 h-4 text-gray-400" />
                  <select
                    value={selectedDepartment}
                    onChange={(e) => setSelectedDepartment(e.target.value)}
                    className="px-3 py-2 bg-gray-800 border border-gray-700 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-cyan-500"
                  >
                    {departments.map((dept) => (
                      <option key={dept} value={dept}>{dept}</option>
                    ))}
                  </select>
                </div>
                
                <div className="flex items-center gap-2">
                  <MapPin className="w-4 h-4 text-gray-400" />
                  <select
                    value={selectedLocation}
                    onChange={(e) => setSelectedLocation(e.target.value)}
                    className="px-3 py-2 bg-gray-800 border border-gray-700 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-cyan-500"
                  >
                    {locations.map((location) => (
                      <option key={location} value={location}>{location}</option>
                    ))}
                  </select>
                </div>
              </div>
            </div>

            <div className="flex items-center justify-center space-x-8 text-gray-400">
              <div className="flex items-center">
                <Building className="w-5 h-5 mr-2" />
                <span>{jobOpenings.length} Open Positions</span>
              </div>
              <div className="flex items-center">
                <Globe className="w-5 h-5 mr-2" />
                <span>Multiple Locations</span>
              </div>
              <div className="flex items-center">
                <Users className="w-5 h-5 mr-2" />
                <span>Growing Team</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Featured Jobs */}
      {featuredJobs.length > 0 && (
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-20">
          <h2 className="text-3xl font-bold text-white mb-8 text-center">Featured Positions</h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {featuredJobs.map((job) => (
              <div
                key={job.id}
                className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-xl overflow-hidden hover:transform hover:scale-105 transition-all duration-300 border border-gray-700 hover:border-cyan-500"
              >
                <div className="p-6">
                  <div className="flex items-center gap-2 mb-4">
                    <span className="px-3 py-1 bg-gradient-to-r from-cyan-500 to-blue-600 text-white text-xs font-medium rounded-full">
                      Featured
                    </span>
                    <span className="px-3 py-1 bg-gray-700 text-gray-300 text-xs rounded-full">
                      {job.department}
                    </span>
                  </div>
                  
                  <h3 className="text-2xl font-bold text-white mb-4 leading-tight">
                    {job.title}
                  </h3>
                  
                  <p className="text-gray-300 mb-6 leading-relaxed">
                    {job.description}
                  </p>
                  
                  <div className="flex items-center space-x-6 mb-6 text-sm text-gray-400">
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
                  
                  <div className="mb-6">
                    <h4 className="text-sm font-semibold text-cyan-400 mb-3">Key Requirements</h4>
                    <ul className="space-y-1">
                      {job.requirements.slice(0, 3).map((req, index) => (
                        <li key={index} className="text-gray-300 text-sm flex items-start">
                          <div className="w-1.5 h-1.5 bg-cyan-400 rounded-full mt-2 mr-2 flex-shrink-0" />
                          {req}
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <button className="w-full bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-white font-medium py-3 px-4 rounded-lg transition-all duration-200 flex items-center justify-center group">
                    Apply Now
                    <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform duration-200" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* All Job Openings */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-20">
        <h2 className="text-3xl font-bold text-white mb-8 text-center">
          All Open Positions
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {regularJobs.map((job) => (
            <div
              key={job.id}
              className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-xl overflow-hidden hover:transform hover:scale-105 transition-all duration-300 border border-gray-700 hover:border-cyan-500"
            >
              <div className="p-6">
                <div className="flex items-center gap-2 mb-4">
                  <span className="px-3 py-1 bg-gray-700 text-gray-300 text-xs rounded-full">
                    {job.department}
                  </span>
                </div>
                
                <h3 className="text-xl font-bold text-white mb-4 leading-tight">
                  {job.title}
                </h3>
                
                <p className="text-gray-300 mb-6 text-sm leading-relaxed line-clamp-3">
                  {job.description}
                </p>
                
                <div className="flex items-center space-x-4 mb-6 text-sm text-gray-400">
                  <div className="flex items-center">
                    <MapPin className="w-4 h-4 mr-2" />
                    {job.location}
                  </div>
                  <div className="flex items-center">
                    <Clock className="w-4 h-4 mr-2" />
                    {job.type}
                  </div>
                </div>
                
                <div className="mb-6">
                  <h4 className="text-xs font-semibold text-cyan-400 mb-2">Requirements</h4>
                  <div className="flex flex-wrap gap-1">
                    {job.requirements.slice(0, 2).map((req, index) => (
                      <span
                        key={index}
                        className="px-2 py-1 bg-gray-700 text-gray-300 text-xs rounded text-center"
                      >
                        {req.split(' ').slice(0, 3).join(' ')}...
                      </span>
                    ))}
                  </div>
                </div>
                
                <button className="w-full bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-white font-medium py-3 px-4 rounded-lg transition-all duration-200 flex items-center justify-center group">
                  Apply Now
                  <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform duration-200" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Company Values */}
      <div className="bg-gradient-to-r from-gray-800 to-gray-900 border-t border-gray-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <h2 className="text-3xl font-bold text-white mb-12 text-center">Our Values</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {companyValues.map((value, index) => {
              const Icon = value.icon;
              return (
                <div
                  key={index}
                  className="text-center"
                >
                  <div className="w-20 h-20 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-6">
                    <Icon className="w-10 h-10 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-3">{value.title}</h3>
                  <p className="text-gray-300">{value.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* Benefits */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <h2 className="text-3xl font-bold text-white mb-12 text-center">Why Work With Us</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {benefits.map((benefit, index) => {
            const Icon = benefit.icon;
            return (
              <div
                key={index}
                className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-xl p-6 text-center hover:transform hover:scale-105 transition-all duration-300 border border-gray-700 hover:border-cyan-500"
              >
                <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <Icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-lg font-semibold text-white mb-3">{benefit.title}</h3>
                <p className="text-gray-300 text-sm">{benefit.description}</p>
              </div>
            );
          })}
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-gradient-to-r from-gray-800 to-gray-900 border-t border-gray-700">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="text-center">
            <h2 className="text-3xl font-bold text-white mb-6">
              Don't See the Right Fit?
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              We're always looking for talented individuals. Send us your resume and 
              let's discuss how you can contribute to our mission.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="mailto:careers@ziontechgroup.com"
                className="inline-flex items-center justify-center px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-white font-medium rounded-lg transition-all duration-200 transform hover:scale-105"
              >
                Send Your Resume
                <Mail className="w-5 h-5 ml-2" />
              </a>
              <Link
                to="/contact"
                className="inline-flex items-center justify-center px-8 py-4 border border-cyan-500 text-cyan-400 hover:bg-cyan-500 hover:text-white font-medium rounded-lg transition-all duration-200"
              >
                Contact HR Team
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
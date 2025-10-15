import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { 
  ArrowRight, 
  Search,
  Filter,
  MapPin,
  Clock,
  Users,
  Star,
  CheckCircle,
  Heart,
  Zap,
  Brain,
  Code,
  Shield,
  Cloud,
  Smartphone,
  BarChart3,
  Database,
  Globe,
  Award,
  TrendingUp,
  Target,
  BookOpen,
  Coffee,
  Gamepad2,
  Plane,
  Home,
  Mail,
  Phone,
  ExternalLink
} from 'lucide-react';

const CareersPage: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedDepartment, setSelectedDepartment] = useState('all');
  const [selectedLocation, setSelectedLocation] = useState('all');

  const departments = [
    { id: 'all', name: 'All Departments', count: 15 },
    { id: 'engineering', name: 'Engineering', count: 8 },
    { id: 'ai-research', name: 'AI Research', count: 3 },
    { id: 'design', name: 'Design', count: 2 },
    { id: 'marketing', name: 'Marketing', count: 2 }
  ];

  const locations = [
    { id: 'all', name: 'All Locations', count: 15 },
    { id: 'remote', name: 'Remote', count: 12 },
    { id: 'delaware', name: 'Delaware, US', count: 2 },
    { id: 'california', name: 'California, US', count: 1 }
  ];

  const jobOpenings = [
    {
      id: 1,
      title: 'Senior AI Engineer',
      department: 'engineering',
      location: 'remote',
      type: 'Full-time',
      experience: '5+ years',
      salary: '$120K - $180K',
      description: 'Lead the development of cutting-edge AI solutions and machine learning models.',
      requirements: [
        '5+ years of experience in AI/ML development',
        'Strong background in Python, TensorFlow, PyTorch',
        'Experience with cloud platforms (AWS, GCP, Azure)',
        'PhD or Master\'s degree in Computer Science or related field',
        'Experience with large-scale data processing'
      ],
      benefits: [
        'Competitive salary and equity',
        'Health, dental, and vision insurance',
        'Flexible work arrangements',
        'Professional development budget',
        'Unlimited PTO'
      ],
      posted: '2 days ago',
      applicants: 45,
      featured: true
    },
    {
      id: 2,
      title: 'AI Research Scientist',
      department: 'ai-research',
      location: 'remote',
      type: 'Full-time',
      experience: '3+ years',
      salary: '$100K - $150K',
      description: 'Conduct cutting-edge research in artificial intelligence and machine learning.',
      requirements: [
        'PhD in AI, ML, or related field',
        'Strong publication record in top-tier conferences',
        'Experience with deep learning frameworks',
        'Knowledge of computer vision, NLP, or robotics',
        'Strong programming skills in Python'
      ],
      benefits: [
        'Research budget and conference attendance',
        'Collaboration with top universities',
        'Patent filing support',
        'Flexible work schedule',
        'Health and wellness benefits'
      ],
      posted: '1 week ago',
      applicants: 32,
      featured: true
    },
    {
      id: 3,
      title: 'Senior Frontend Developer',
      department: 'engineering',
      location: 'remote',
      type: 'Full-time',
      experience: '4+ years',
      salary: '$90K - $130K',
      description: 'Build beautiful and intuitive user interfaces for our AI-powered applications.',
      requirements: [
        '4+ years of React/TypeScript experience',
        'Strong CSS and design system skills',
        'Experience with state management (Redux, Zustand)',
        'Knowledge of testing frameworks (Jest, Cypress)',
        'Experience with responsive design'
      ],
      benefits: [
        'Modern tech stack and tools',
        'Design system ownership',
        'Mentorship opportunities',
        'Conference and training budget',
        'Work-life balance'
      ],
      posted: '3 days ago',
      applicants: 28,
      featured: false
    },
    {
      id: 4,
      title: 'UX/UI Designer',
      department: 'design',
      location: 'remote',
      type: 'Full-time',
      experience: '3+ years',
      salary: '$70K - $100K',
      description: 'Create exceptional user experiences for our AI and IT solutions.',
      requirements: [
        '3+ years of UX/UI design experience',
        'Proficiency in Figma, Sketch, or Adobe Creative Suite',
        'Experience with user research and testing',
        'Knowledge of design systems and accessibility',
        'Portfolio demonstrating AI/tech product design'
      ],
      benefits: [
        'Creative freedom and ownership',
        'User research opportunities',
        'Design tool subscriptions',
        'Professional development',
        'Flexible work arrangements'
      ],
      posted: '5 days ago',
      applicants: 22,
      featured: false
    },
    {
      id: 5,
      title: 'DevOps Engineer',
      department: 'engineering',
      location: 'remote',
      type: 'Full-time',
      experience: '4+ years',
      salary: '$95K - $140K',
      description: 'Build and maintain our cloud infrastructure and deployment pipelines.',
      requirements: [
        '4+ years of DevOps/Infrastructure experience',
        'Strong knowledge of AWS, Docker, Kubernetes',
        'Experience with CI/CD pipelines',
        'Infrastructure as Code (Terraform, CloudFormation)',
        'Monitoring and logging tools experience'
      ],
      benefits: [
        'Cutting-edge infrastructure projects',
        'Cloud certification support',
        'On-call compensation',
        'Learning and development budget',
        'Health and wellness benefits'
      ],
      posted: '1 week ago',
      applicants: 18,
      featured: false
    },
    {
      id: 6,
      title: 'Product Marketing Manager',
      department: 'marketing',
      location: 'remote',
      type: 'Full-time',
      experience: '3+ years',
      salary: '$80K - $120K',
      description: 'Drive product marketing strategy for our AI and IT solutions.',
      requirements: [
        '3+ years of B2B product marketing experience',
        'Experience with AI/tech products',
        'Strong analytical and communication skills',
        'Experience with marketing automation tools',
        'Bachelor\'s degree in Marketing or related field'
      ],
      benefits: [
        'Strategic impact and ownership',
        'Marketing tool access',
        'Conference and event attendance',
        'Performance bonuses',
        'Flexible work schedule'
      ],
      posted: '4 days ago',
      applicants: 15,
      featured: false
    }
  ];

  const companyValues = [
    {
      icon: Brain,
      title: 'Innovation',
      description: 'We push the boundaries of what\'s possible with AI and technology.'
    },
    {
      icon: Users,
      title: 'Collaboration',
      description: 'We believe the best solutions come from working together as a team.'
    },
    {
      icon: Heart,
      title: 'Impact',
      description: 'We build solutions that make a real difference in people\'s lives.'
    },
    {
      icon: Award,
      title: 'Excellence',
      description: 'We strive for excellence in everything we do, from code to culture.'
    }
  ];

  const benefits = [
    {
      icon: Home,
      title: 'Remote-First',
      description: 'Work from anywhere in the world with flexible hours'
    },
    {
      icon: TrendingUp,
      title: 'Career Growth',
      description: 'Clear career paths and professional development opportunities'
    },
    {
      icon: BookOpen,
      title: 'Learning Budget',
      description: '$2,000 annual budget for courses, conferences, and books'
    },
    {
      icon: Coffee,
      title: 'Wellness',
      description: 'Health insurance, mental health support, and wellness programs'
    },
    {
      icon: Gamepad2,
      title: 'Fun',
      description: 'Team events, game nights, and company retreats'
    },
    {
      icon: Plane,
      title: 'Travel',
      description: 'Annual company retreat and conference attendance'
    }
  ];

  const filteredJobs = jobOpenings.filter(job => {
    const matchesDepartment = selectedDepartment === 'all' || job.department === selectedDepartment;
    const matchesLocation = selectedLocation === 'all' || job.location === selectedLocation;
    const matchesSearch = job.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         job.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         job.requirements.some(req => req.toLowerCase().includes(searchTerm.toLowerCase()));
    return matchesDepartment && matchesLocation && matchesSearch;
  });

  const featuredJobs = filteredJobs.filter(job => job.featured);
  const regularJobs = filteredJobs.filter(job => !job.featured);

  const getDepartmentIcon = (department: string) => {
    switch (department) {
      case 'engineering': return <Code className="w-5 h-5" />;
      case 'ai-research': return <Brain className="w-5 h-5" />;
      case 'design': return <Target className="w-5 h-5" />;
      case 'marketing': return <TrendingUp className="w-5 h-5" />;
      default: return <Users className="w-5 h-5" />;
    }
  };

  return (
    <>
      <Helmet>
        <title>Careers - Zion Tech Group | Join Our Team</title>
        <meta name="description" content="Join Zion Tech Group and help us build the future of AI and IT solutions. Explore open positions and discover why we're a great place to work." />
        <meta name="keywords" content="careers, jobs, employment, AI engineer, developer, designer, remote work, tech jobs" />
        <link rel="canonical" href="https://ziontechgroup.com/careers" />
      </Helmet>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-16">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-cyan-500/10 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-purple-500/10 rounded-full blur-3xl animate-pulse"></div>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
              Join Our
              <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
                {' '}Team
              </span>
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed">
              Help us build the future of AI and IT solutions. Join a team of passionate innovators 
              who are making a real impact in the world of technology.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link
                to="#open-positions"
                className="bg-gradient-to-r from-cyan-600 to-purple-600 hover:from-cyan-700 hover:to-purple-700 text-white font-semibold py-4 px-8 rounded-lg transition-all duration-300 transform hover:scale-105 hover:shadow-2xl hover:shadow-cyan-500/25 flex items-center"
              >
                View Open Positions
                <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
              <Link
                to="/contact"
                className="border-2 border-white/20 hover:border-cyan-400 text-white font-semibold py-4 px-8 rounded-lg transition-all duration-300 hover:bg-white/5 flex items-center"
              >
                <Mail className="w-5 h-5 mr-2" />
                Contact Us
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Company Values */}
      <section className="py-20 bg-slate-800">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">Our Values</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              The principles that guide everything we do and shape our company culture.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {companyValues.map((value, index) => (
              <div key={index} className="text-center group">
                <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-cyan-500 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform">
                  <value.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-4 group-hover:text-purple-300 transition-colors">
                  {value.title}
                </h3>
                <p className="text-gray-300 group-hover:text-gray-200 transition-colors">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-20 bg-gradient-to-br from-slate-900 to-purple-900">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">Why Work With Us?</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              We offer competitive benefits and a great work environment to help you thrive.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="group bg-slate-800/50 hover:bg-slate-800/70 p-8 rounded-xl border border-slate-700/50 hover:border-cyan-500/50 transition-all duration-300 hover:transform hover:scale-105 text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-lg flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform">
                  <benefit.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-4 group-hover:text-cyan-300 transition-colors">
                  {benefit.title}
                </h3>
                <p className="text-gray-300 group-hover:text-gray-200 transition-colors">
                  {benefit.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Search and Filters */}
      <section className="py-12 bg-slate-800">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row gap-6 items-center justify-between">
            {/* Search */}
            <div className="relative flex-1 max-w-md">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="text"
                placeholder="Search jobs..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-3 bg-slate-700 border border-slate-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
              />
            </div>

            {/* Department Filter */}
            <div className="flex flex-wrap gap-2">
              {departments.map((department) => (
                <button
                  key={department.id}
                  onClick={() => setSelectedDepartment(department.id)}
                  className={`flex items-center px-4 py-2 rounded-lg transition-all duration-300 ${
                    selectedDepartment === department.id
                      ? 'bg-cyan-600 text-white'
                      : 'bg-slate-700 text-gray-300 hover:bg-slate-600 hover:text-white'
                  }`}
                >
                  {getDepartmentIcon(department.id)}
                  <span className="ml-2">{department.name}</span>
                  <span className="ml-2 text-xs bg-white/20 px-2 py-1 rounded-full">
                    {department.count}
                  </span>
                </button>
              ))}
            </div>

            {/* Location Filter */}
            <div className="flex flex-wrap gap-2">
              {locations.map((location) => (
                <button
                  key={location.id}
                  onClick={() => setSelectedLocation(location.id)}
                  className={`flex items-center px-4 py-2 rounded-lg transition-all duration-300 ${
                    selectedLocation === location.id
                      ? 'bg-purple-600 text-white'
                      : 'bg-slate-700 text-gray-300 hover:bg-slate-600 hover:text-white'
                  }`}
                >
                  <MapPin className="w-4 h-4 mr-2" />
                  <span>{location.name}</span>
                  <span className="ml-2 text-xs bg-white/20 px-2 py-1 rounded-full">
                    {location.count}
                  </span>
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Featured Jobs */}
      {featuredJobs.length > 0 && (
        <section className="py-20 bg-slate-800">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-white mb-4">Featured Positions</h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                High-priority roles we're actively hiring for.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {featuredJobs.map((job) => (
                <div key={job.id} className="group bg-slate-700/50 hover:bg-slate-700/70 rounded-xl border border-slate-600/50 hover:border-cyan-500/50 transition-all duration-300 hover:transform hover:scale-105 p-8">
                  <div className="flex items-start justify-between mb-6">
                    <div className="flex items-center space-x-3">
                      {getDepartmentIcon(job.department)}
                      <div>
                        <h3 className="text-2xl font-bold text-white group-hover:text-cyan-300 transition-colors">
                          {job.title}
                        </h3>
                        <div className="flex items-center space-x-4 text-gray-400 text-sm mt-2">
                          <div className="flex items-center space-x-1">
                            <MapPin className="w-4 h-4" />
                            <span>{job.location === 'remote' ? 'Remote' : job.location}</span>
                          </div>
                          <div className="flex items-center space-x-1">
                            <Clock className="w-4 h-4" />
                            <span>{job.type}</span>
                          </div>
                          <div className="flex items-center space-x-1">
                            <Users className="w-4 h-4" />
                            <span>{job.applicants} applicants</span>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Star className="w-4 h-4 text-yellow-400 fill-current" />
                      <span className="text-white font-medium text-sm">Featured</span>
                    </div>
                  </div>

                  <p className="text-gray-300 mb-6 leading-relaxed">{job.description}</p>

                  <div className="mb-6">
                    <h4 className="text-white font-semibold mb-3">Key Requirements:</h4>
                    <ul className="space-y-2">
                      {job.requirements.slice(0, 3).map((requirement, index) => (
                        <li key={index} className="flex items-center text-gray-300 text-sm">
                          <CheckCircle className="w-4 h-4 text-green-400 mr-3 flex-shrink-0" />
                          {requirement}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="flex items-center justify-between">
                    <div className="text-cyan-400 font-semibold">
                      {job.salary}
                    </div>
                    <Link
                      to={`/careers/${job.id}`}
                      className="inline-flex items-center text-cyan-400 hover:text-cyan-300 font-semibold transition-colors"
                    >
                      Apply Now
                      <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* All Jobs */}
      <section id="open-positions" className="py-20 bg-gradient-to-br from-slate-900 to-purple-900">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">Open Positions</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Explore all available positions and find the perfect role for you.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {regularJobs.map((job) => (
              <div key={job.id} className="group bg-slate-800/50 hover:bg-slate-800/70 rounded-xl border border-slate-700/50 hover:border-cyan-500/50 transition-all duration-300 hover:transform hover:scale-105 p-6">
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center space-x-2">
                    {getDepartmentIcon(job.department)}
                    <span className="bg-cyan-500/20 text-cyan-300 px-3 py-1 rounded-full text-sm font-medium">
                      {departments.find(dept => dept.id === job.department)?.name}
                    </span>
                  </div>
                  <span className="text-gray-400 text-sm">{job.posted}</span>
                </div>

                <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-cyan-300 transition-colors">
                  {job.title}
                </h3>
                <p className="text-gray-300 text-sm mb-4 leading-relaxed">{job.description}</p>

                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center space-x-4 text-gray-400 text-sm">
                    <div className="flex items-center space-x-1">
                      <MapPin className="w-4 h-4" />
                      <span>{job.location === 'remote' ? 'Remote' : job.location}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Clock className="w-4 h-4" />
                      <span>{job.type}</span>
                    </div>
                  </div>
                  <div className="text-cyan-400 font-semibold text-sm">
                    {job.salary}
                  </div>
                </div>

                <div className="flex items-center justify-between">
                  <div className="flex items-center text-gray-400 text-sm">
                    <Users className="w-4 h-4 mr-1" />
                    <span>{job.applicants} applicants</span>
                  </div>
                  <Link
                    to={`/careers/${job.id}`}
                    className="inline-flex items-center text-cyan-400 hover:text-cyan-300 font-semibold transition-colors text-sm"
                  >
                    View Details
                    <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </div>
            ))}
          </div>

          {regularJobs.length === 0 && (
            <div className="text-center py-12">
              <div className="w-16 h-16 bg-slate-700 rounded-full flex items-center justify-center mx-auto mb-4">
                <Search className="w-8 h-8 text-gray-400" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">No jobs found</h3>
              <p className="text-gray-400">Try adjusting your search or filter criteria.</p>
            </div>
          )}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-cyan-600 to-purple-600">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold text-white mb-4">Don't See the Right Role?</h2>
          <p className="text-xl text-cyan-100 mb-8 max-w-2xl mx-auto">
            We're always looking for talented individuals. Send us your resume and let us know how you can contribute to our team.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link
              to="/contact"
              className="bg-white text-cyan-600 hover:bg-gray-100 font-semibold py-4 px-8 rounded-lg transition-all duration-300 transform hover:scale-105 flex items-center"
            >
              <Mail className="w-5 h-5 mr-2" />
              Send Your Resume
            </Link>
            <a
              href="mailto:careers@ziontechgroup.com"
              className="border-2 border-white text-white hover:bg-white hover:text-cyan-600 font-semibold py-4 px-8 rounded-lg transition-all duration-300 flex items-center"
            >
              <ExternalLink className="w-5 h-5 mr-2" />
              Email Us
            </a>
          </div>
        </div>
      </section>
    </>
  );
};

export default CareersPage;
import { NextSeo } from "@/components/NextSeo";
import { GradientHeading } from "@/components/GradientHeading";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

export default function Careers() {
  const [activeDepartment, setActiveDepartment] = useState('all');

  const departments = [
    {
      id: 'all',
      name: 'All Departments',
      icon: Users,
      color: 'from-purple-500 to-pink-500'
    },
    {
      id: 'ai-research',
      name: 'AI & Research',
      icon: Brain,
      color: 'from-purple-500 to-pink-500'
    },
    {
      id: 'engineering',
      name: 'Engineering',
      icon: Code,
      color: 'from-blue-500 to-cyan-500'
    },
    {
      id: 'cybersecurity',
      name: 'Cybersecurity',
      icon: Shield,
      color: 'from-red-500 to-pink-500'
    },
    {
      id: 'quantum',
      name: 'Quantum Technology',
      icon: Cpu,
      color: 'from-indigo-500 to-purple-500'
    },
    {
      id: 'cloud',
      name: 'Cloud & Infrastructure',
      icon: Cloud,
      color: 'from-green-500 to-emerald-500'
    }
=======
import { Link } from 'react-router-dom';
import { Link } from 'react-router-dom';
=======
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  BriefcaseIcon, 
  AcademicCapIcon, 
  HeartIcon,
  GlobeAltIcon,
  LightBulbIcon,
  UsersIcon,
  ClockIcon,
  MapPinIcon,
  CurrencyDollarIcon,
  SparklesIcon
} from '@heroicons/react/24/outline';

const Careers: React.FC = () => {
  const benefits = [
    {
      icon: HeartIcon,
      title: 'Health & Wellness',
      description: 'Comprehensive health insurance, mental health support, and wellness programs.'
    },
    {
      icon: AcademicCapIcon,
      title: 'Learning & Development',
      description: 'Continuous learning opportunities, certifications, and professional development budgets.'
    },
    {
      icon: GlobeAltIcon,
      title: 'Remote Work',
      description: 'Flexible remote work options with home office setup support.'
    },
    {
      icon: UsersIcon,
      title: 'Team Building',
      description: 'Regular team events, hackathons, and collaborative projects.'
    },
    {
      icon: LightBulbIcon,
      title: 'Innovation Time',
      description: 'Dedicated time for personal projects and innovation initiatives.'
    },
    {
      icon: CurrencyDollarIcon,
      title: 'Competitive Compensation',
      description: 'Attractive salary packages with equity options and performance bonuses.'
    }
  ];

  const openPositions = [
    {
      title: 'Senior AI Engineer',
      department: 'AI Solutions',
      location: 'Remote / Delaware, USA',
      type: 'Full-time',
      experience: '5+ years',
      description: 'Join our AI team to develop cutting-edge machine learning models and autonomous systems.',
      requirements: [
        'Strong background in machine learning and deep learning',
        'Experience with Python, TensorFlow, PyTorch',
        'Knowledge of cloud platforms (AWS, Azure, GCP)',
        'Experience with large-scale data processing'
      ],
      responsibilities: [
        'Design and implement AI/ML solutions',
        'Collaborate with cross-functional teams',
        'Mentor junior engineers',
        'Stay current with AI research and trends'
      ]
    },
    {
      title: 'Cybersecurity Specialist',
      department: 'Security',
      location: 'Remote / California, USA',
      type: 'Full-time',
      experience: '3+ years',
      description: 'Help protect our clients and systems with advanced cybersecurity solutions.',
      requirements: [
        'Certifications: CISSP, CISM, or equivalent',
        'Experience with security tools and frameworks',
        'Knowledge of compliance standards (SOC2, ISO27001)',
        'Strong analytical and problem-solving skills'
      ],
      responsibilities: [
        'Conduct security assessments and audits',
        'Implement security controls and monitoring',
        'Respond to security incidents',
        'Develop security policies and procedures'
      ]
    },
    {
      title: 'Cloud Solutions Architect',
      department: 'Cloud & DevOps',
      location: 'Remote / Texas, USA',
      type: 'Full-time',
      experience: '7+ years',
      description: 'Design and implement scalable cloud infrastructure solutions for enterprise clients.',
      requirements: [
        'Expertise in AWS, Azure, and GCP',
        'Experience with Kubernetes and containerization',
        'Strong understanding of DevOps practices',
        'Experience with infrastructure as code'
      ],
      responsibilities: [
        'Design cloud architecture solutions',
        'Lead technical implementation projects',
        'Provide technical guidance to clients',
        'Optimize cloud costs and performance'
      ]
    },
    {
      title: 'Digital Marketing Manager',
      department: 'Marketing',
      location: 'Remote / New York, USA',
      type: 'Full-time',
      experience: '4+ years',
      description: 'Drive our digital marketing strategy and grow our brand presence.',
      requirements: [
        'Experience with digital marketing campaigns',
        'Knowledge of SEO, SEM, and social media',
        'Experience with marketing automation tools',
        'Strong analytical and creative skills'
      ],
      responsibilities: [
        'Develop and execute marketing strategies',
        'Manage digital advertising campaigns',
        'Analyze performance metrics',
        'Collaborate with content and design teams'
      ]
    }
  ];

  const culture = [
    {
      icon: LightBulbIcon,
      title: 'Innovation First',
      description: 'We encourage creative thinking and embrace new ideas that push boundaries.'
    },
    {
      icon: UsersIcon,
      title: 'Collaboration',
      description: 'We believe in the power of teamwork and diverse perspectives.'
    },
    {
      icon: HeartIcon,
      title: 'Passion',
      description: 'We\'re passionate about technology and its potential to change the world.'
    },
    {
      icon: SparklesIcon,
      title: 'Excellence',
      description: 'We strive for the highest quality in everything we do.'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-cyan-600/20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
              Join Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">Team</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
              Build the future of technology with us. Join a team of innovators, problem-solvers, and visionaries.
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
=======
import { Link } from 'react-router-dom';
import { 
  Users, 
  Zap, 
  Globe, 
  Heart, 
  Award, 
  BookOpen,
  Briefcase,
  MapPin,
  Clock,
  DollarSign,
  Send,
  CheckCircle,
  AlertCircle
} from 'lucide-react';

const Careers = () => {
  const [selectedDepartment, setSelectedDepartment] = useState<string>('all');
  const [searchTerm, setSearchTerm] = useState<string>('');

  const departments = [
    'all',
    'Engineering',
    'Design',
    'Product',
    'Sales',
    'Marketing',
    'Operations',
    'AI & ML'
  ];

  const jobListings = [
    {
      id: 1,
      title: 'Senior Full Stack Developer',
      department: 'Engineering',
      location: 'Remote / Middletown, DE',
      type: 'Full-time',
      experience: '5+ years',
      salary: '$120k - $180k',
      description: 'We\'re looking for a Senior Full Stack Developer to join our growing engineering team. You\'ll work on cutting-edge projects using modern technologies like React, Node.js, and cloud platforms.',
      requirements: [
        'Strong experience with React, Node.js, and TypeScript',
        'Experience with cloud platforms (AWS, Azure, or GCP)',
        'Knowledge of microservices architecture',
        'Experience with CI/CD pipelines and DevOps practices',
        'Strong problem-solving and communication skills'
      ],
      benefits: [
        'Competitive salary and equity',
        'Flexible remote work options',
        'Health, dental, and vision insurance',
        'Professional development budget',
        'Unlimited PTO'
      ]
    },
    {
      id: 2,
      title: 'AI/ML Engineer',
      department: 'AI & ML',
      location: 'Remote / Middletown, DE',
      type: 'Full-time',
      experience: '3+ years',
      salary: '$130k - $200k',
      description: 'Join our AI team to develop cutting-edge machine learning models and AI solutions that transform businesses. Work on projects involving computer vision, NLP, and predictive analytics.',
      requirements: [
        'MS/PhD in Computer Science, ML, or related field',
        'Experience with PyTorch, TensorFlow, or similar frameworks',
        'Strong Python programming skills',
        'Experience with MLOps and model deployment',
        'Knowledge of cloud ML platforms'
      ],
      benefits: [
        'Competitive salary and equity',
        'Access to latest AI/ML tools and infrastructure',
        'Conference attendance and research opportunities',
        'Health, dental, and vision insurance',
        'Flexible work arrangements'
      ]
    },
    {
      id: 3,
      title: 'UX/UI Designer',
      department: 'Design',
      location: 'Remote / Middletown, DE',
      type: 'Full-time',
      experience: '3+ years',
      salary: '$90k - $140k',
      description: 'Create beautiful and intuitive user experiences for our products. Work closely with product managers and engineers to design solutions that users love.',
      requirements: [
        'Strong portfolio showcasing web and mobile design work',
        'Experience with Figma, Sketch, or similar tools',
        'Understanding of user research and usability principles',
        'Experience with design systems and component libraries',
        'Collaboration with cross-functional teams'
      ],
      benefits: [
        'Competitive salary and equity',
        'Latest design tools and software',
        'Creative freedom and ownership',
        'Health, dental, and vision insurance',
        'Professional development opportunities'
      ]
    },
    {
      id: 4,
      title: 'DevOps Engineer',
      department: 'Engineering',
      location: 'Remote / Middletown, DE',
      type: 'Full-time',
      experience: '4+ years',
      salary: '$110k - $160k',
      description: 'Build and maintain our cloud infrastructure, CI/CD pipelines, and deployment processes. Help us scale our systems and ensure high availability.',
      requirements: [
        'Experience with AWS, Azure, or GCP',
        'Knowledge of Kubernetes and containerization',
        'Experience with Terraform or CloudFormation',
        'Strong scripting skills (Python, Bash)',
        'Experience with monitoring and logging tools'
      ],
      benefits: [
        'Competitive salary and equity',
        'Latest cloud tools and certifications',
        'Flexible remote work options',
        'Health, dental, and vision insurance',
        'Professional development budget'
      ]
    },
    {
      id: 5,
      title: 'Product Manager',
      department: 'Product',
      location: 'Remote / Middletown, DE',
      type: 'Full-time',
      experience: '4+ years',
      salary: '$100k - $150k',
      description: 'Drive product strategy and execution for our AI-powered solutions. Work with customers, stakeholders, and engineering teams to deliver exceptional products.',
      requirements: [
        'Experience in B2B SaaS product management',
        'Strong analytical and strategic thinking',
        'Experience with agile development methodologies',
        'Excellent communication and stakeholder management',
        'Technical background or strong technical aptitude'
      ],
      benefits: [
        'Competitive salary and equity',
        'Product ownership and strategic impact',
        'Customer interaction and market research',
        'Health, dental, and vision insurance',
        'Professional development opportunities'
      ]
    }
  ];

  const filteredJobs = jobListings.filter(job => {
    const matchesDepartment = selectedDepartment === 'all' || job.department === selectedDepartment;
    const matchesSearch = job.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         job.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         job.department.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesDepartment && matchesSearch;
  });

  const companyValues = [
    {
      icon: Zap,
      title: 'Innovation First',
      description: 'We constantly push boundaries and explore new technologies to solve complex problems.'
    },
    {
      icon: Users,
      title: 'Collaboration',
      description: 'Great ideas come from diverse teams working together towards common goals.'
    },
    {
      icon: Heart,
      title: 'Customer Focus',
      description: 'Everything we do is driven by our commitment to customer success.'
=======
  const filteredJobs = selectedDepartment === 'all' 
    ? jobOpenings 
    : jobOpenings.filter(job => job.department === selectedDepartment);

  const companyValues = [
    {
      icon: Heart,
      title: 'People First',
      description: 'We believe our team is our greatest asset and invest in their growth and well-being.',
      color: 'from-red-500 to-pink-500'
    },
    {
      icon: Zap,
      title: 'Innovation Driven',
      description: 'We constantly push boundaries and embrace new technologies to solve complex problems.',
      color: 'from-yellow-500 to-orange-500'
    },
    {
      icon: Globe,
      title: 'Global Impact',
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
      icon: '🚀',
      title: 'Innovation First',
      description: 'Work on cutting-edge AI and quantum technologies'
    },
    {
      icon: '🌍',
      title: 'Remote First',
      description: 'Work from anywhere with flexible schedules'
    },
    {
      icon: '📚',
      title: 'Continuous Learning',
      description: 'Access to courses, conferences, and training programs'
    },
    {
      icon: '💼',
      title: 'Career Growth',
      description: 'Clear career paths and advancement opportunities'
    },
    {
      icon: '🏥',
      title: 'Health & Wellness',
      description: 'Comprehensive health insurance and wellness programs'
    },
    {
      icon: '💰',
      title: 'Competitive Pay',
      description: 'Above-market salaries with equity options'
=======
import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Users, 
  Briefcase, 
  MapPin, 
  Clock, 
  Star, 
  Zap,
  CheckCircle,
  ArrowRight,
  Globe,
  Heart,
  Target,
  TrendingUp,
  Award,
  Lightbulb
} from 'lucide-react';

const Careers = () => {
  const openPositions = [
    {
      title: "Senior AI Engineer",
      department: "Artificial Intelligence",
      location: "Remote / Wilmington, DE",
      type: "Full-time",
      experience: "5+ years",
      description: "Lead development of cutting-edge AI solutions and machine learning models for enterprise clients.",
      skills: ["Python", "TensorFlow", "PyTorch", "MLOps", "Cloud Platforms"]
    },
    {
      title: "Cloud Solutions Architect",
      department: "Cloud & DevOps",
      location: "Remote / Wilmington, DE",
      type: "Full-time",
      experience: "7+ years",
      description: "Design and implement scalable cloud infrastructure solutions for enterprise applications.",
      skills: ["AWS", "Azure", "Kubernetes", "Terraform", "CI/CD"]
    },
    {
      title: "Cybersecurity Specialist",
      department: "Security",
      location: "Remote / Wilmington, DE",
      type: "Full-time",
      experience: "4+ years",
      description: "Protect client systems and data through advanced security measures and threat detection.",
      skills: ["Penetration Testing", "SIEM", "Compliance", "Incident Response"]
    },
    {
      title: "Full Stack Developer",
      department: "Web Development",
      location: "Remote / Wilmington, DE",
      type: "Full-time",
      experience: "3+ years",
      description: "Build modern, responsive web applications using cutting-edge technologies.",
      skills: ["React", "Node.js", "TypeScript", "PostgreSQL", "Docker"]
    },
    {
      title: "Data Scientist",
      department: "Data Analytics",
      location: "Remote / Wilmington, DE",
      type: "Full-time",
      experience: "4+ years",
      description: "Transform raw data into actionable insights for business decision-making.",
      skills: ["Python", "R", "SQL", "Tableau", "Machine Learning"]
    },
    {
      title: "DevOps Engineer",
      department: "Cloud & DevOps",
      location: "Remote / Wilmington, DE",
      type: "Full-time",
      experience: "3+ years",
      description: "Automate and optimize development and deployment processes.",
      skills: ["Docker", "Kubernetes", "Jenkins", "Ansible", "Monitoring"]
    }
  ];

  const benefits = [
    {
      icon: "🏠",
      title: "Remote First",
      description: "Work from anywhere with flexible remote work options"
    },
    {
      icon: "💰",
      title: "Competitive Salary",
      description: "Attractive compensation packages with equity options"
    },
    {
      icon: "🏥",
      title: "Health Benefits",
      description: "Comprehensive health, dental, and vision coverage"
    },
    {
      icon: "📚",
      title: "Learning & Development",
      description: "Continuous learning opportunities and skill development"
    },
    {
      icon: "🎯",
      title: "Career Growth",
      description: "Clear career progression paths and mentorship"
    },
    {
      icon: "🎉",
      title: "Team Events",
      description: "Regular team building and social activities"
    }
  ];

  const values = [
    {
      icon: "🚀",
      title: "Innovation",
      description: "We push boundaries and embrace new technologies"
    },
    {
      icon: "🤝",
      title: "Collaboration",
      description: "Teamwork and knowledge sharing drive our success"
    },
    {
      icon: "💡",
      title: "Excellence",
      description: "We strive for quality in everything we do"
=======
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
    <>
      <NextSeo
        title="Careers at Zion - Join Our Team"
        description="Join the team building the future of AI and technology. Explore career opportunities at Zion's innovative marketplace platform."
=======
    
      <SEO 
        title="Careers at Zion - Join Our Team" 
        description="Join the team building the future of AI and technology. Explore career opportunities at Zion's innovative marketplace platform." 
        keywords="Zion careers, AI jobs, tech careers, remote work, startup jobs"
        canonical="https://ziontechgroup.com/careers"
      />
      <main className="min-h-screen bg-zion-blue pt-24 pb-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Join Our Team
            </h1>
            <p className="text-xl md:text-2xl text-zion-slate-light mb-8 leading-relaxed">
              Build the future of technology with us. Join a team of innovators, 
              problem-solvers, and visionaries transforming businesses worldwide.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <a 
                href="#open-positions"
                className="bg-gradient-to-r from-blue-600 to-cyan-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-blue-700 hover:to-cyan-700 transition-all duration-300 hover:shadow-lg"
              >
                View Open Positions
              </a>
              <a
                href="/contact"
                className="border border-white/20 text-white px-8 py-4 rounded-lg font-semibold hover:bg-white/10 transition-all duration-300"
              >
                Get in Touch
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Why Work With Us */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-4">Why Work With Zion Tech Group?</h2>
            <p className="text-xl text-gray-300">Join a company that values innovation, growth, and your success</p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <motion.div
                key={benefit.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-slate-800/50 rounded-xl p-6 border border-white/10 hover:border-blue-500/30 transition-all duration-300"
              >
                <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-xl flex items-center justify-center mb-4">
                  <benefit.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">{benefit.title}</h3>
                <p className="text-gray-300 leading-relaxed">{benefit.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Company Culture */}
      <section className="py-20 bg-slate-800/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-4">Our Culture</h2>
            <p className="text-xl text-gray-300">The values that make Zion Tech Group a great place to work</p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {culture.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-slate-800/50 rounded-xl p-6 border border-white/10 hover:border-blue-500/30 transition-all duration-300 text-center"
              >
                <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <value.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">{value.title}</h3>
                <p className="text-gray-300 leading-relaxed">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Open Positions */}
      <section id="open-positions" className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-4">Open Positions</h2>
            <p className="text-xl text-gray-300">Join our team and help shape the future of technology</p>
          </motion.div>
          
          <div className="space-y-8">
            {openPositions.map((position, index) => (
              <motion.div
                key={position.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-slate-800/50 rounded-2xl p-8 border border-white/10 hover:border-blue-500/30 transition-all duration-300"
              >
                <div className="flex flex-col lg:flex-row justify-between items-start gap-6">
                  <div className="flex-1">
                    <div className="flex items-center gap-4 mb-4">
                      <h3 className="text-2xl font-bold text-white">{position.title}</h3>
                      <span className="px-3 py-1 bg-blue-500/20 text-blue-300 rounded-full text-sm border border-blue-500/30">
                        {position.type}
                      </span>
                    </div>
                    
                    <div className="flex flex-wrap items-center gap-6 mb-4 text-gray-300">
                      <div className="flex items-center gap-2">
                        <BriefcaseIcon className="w-4 h-4" />
                        <span>{position.department}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <MapPinIcon className="w-4 h-4" />
                        <span>{position.location}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <ClockIcon className="w-4 h-4" />
                        <span>{position.experience}</span>
                      </div>
                    </div>
                    
                    <p className="text-gray-300 leading-relaxed mb-6">{position.description}</p>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <h4 className="text-white font-semibold mb-3">Requirements:</h4>
                        <ul className="space-y-2">
                          {position.requirements.map((req, idx) => (
                            <li key={idx} className="flex items-start gap-2 text-gray-300">
                              <div className="w-1.5 h-1.5 bg-blue-400 rounded-full mt-2 flex-shrink-0"></div>
                              <span className="text-sm">{req}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                      
                      <div>
                        <h4 className="text-white font-semibold mb-3">Responsibilities:</h4>
                        <ul className="space-y-2">
                          {position.responsibilities.map((resp, idx) => (
                            <li key={idx} className="flex items-start gap-2 text-gray-300">
                              <div className="w-1.5 h-1.5 bg-blue-400 rounded-full mt-2 flex-shrink-0"></div>
                              <span className="text-sm">{resp}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                  
                  <div className="lg:flex-shrink-0">
                    <a
                      href="/contact"
                      className="bg-gradient-to-r from-blue-600 to-cyan-600 text-white px-6 py-3 rounded-lg font-semibold hover:from-blue-700 hover:to-cyan-700 transition-all duration-300 hover:shadow-lg whitespace-nowrap"
                    >
                      Apply Now
                    </a>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Growth Opportunities */}
      <section className="py-20 bg-slate-800/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl font-bold text-white mb-6">Grow With Us</h2>
              <p className="text-lg text-gray-300 leading-relaxed mb-6">
                At Zion Tech Group, we believe in investing in our people. We provide continuous learning opportunities, 
                mentorship programs, and clear career progression paths.
              </p>
              <p className="text-lg text-gray-300 leading-relaxed mb-6">
                Whether you're just starting your career or looking to take the next step, we offer the resources, 
                support, and challenges you need to succeed.
              </p>
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
                  <span className="text-gray-300">Professional development budgets</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
                  <span className="text-gray-300">Mentorship programs</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
                  <span className="text-gray-300">Conference and training opportunities</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
                  <span className="text-gray-300">Internal promotion paths</span>
                </div>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="bg-gradient-to-br from-blue-600/20 to-cyan-600/20 rounded-2xl p-8 border border-white/10">
                <h3 className="text-2xl font-bold text-white mb-4">Ready to Apply?</h3>
                <p className="text-lg text-gray-300 leading-relaxed mb-6">
                  Don't see a position that fits? We're always looking for talented individuals. 
                  Send us your resume and let's discuss how you can contribute to our team.
                </p>
                <div className="space-y-3">
                  <a
                    href="/contact"
                    className="block w-full bg-gradient-to-r from-blue-600 to-cyan-600 text-white px-6 py-3 rounded-lg font-semibold hover:from-blue-700 hover:to-cyan-700 transition-all duration-300 hover:shadow-lg text-center"
                  >
                    Send Your Resume
                  </a>
                  <a
                    href="/team"
                    className="block w-full border border-white/20 text-white px-6 py-3 rounded-lg font-semibold hover:bg-white/10 transition-all duration-300 text-center"
                  >
                    Meet Our Team
                  </a>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold text-white mb-6">Ready to Join Our Team?</h2>
            <p className="text-xl text-gray-300 mb-8">
              Take the first step towards an exciting career with Zion Tech Group. 
              We can't wait to see what we can accomplish together.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/contact"
                className="bg-gradient-to-r from-blue-600 to-cyan-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-blue-700 hover:to-cyan-700 transition-all duration-300 hover:shadow-lg"
              >
                Start Your Application
              </a>
              <a
                href="/about"
                className="border border-white/20 text-white px-8 py-4 rounded-lg font-semibold hover:bg-white/10 transition-all duration-300"
              >
                Learn More About Us
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}

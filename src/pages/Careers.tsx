import React, { useState } from 'react';
<<<<<<< HEAD
<<<<<<< HEAD
import { 
  Users, 
  Brain, 
  Shield, 
  Cpu, 
  Cloud, 
  Code, 
  Globe, 
  Award,
  Heart,
  Zap,
  Star,
  ArrowRight,
  CheckCircle,
  Clock,
  MapPin,
  DollarSign,
  GraduationCap,
  Briefcase,
  Mail,
  Linkedin,
  ExternalLink
} from 'lucide-react';

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
import { ArrowRight, MapPin, Clock, DollarSign, Users, Briefcase, GraduationCap, Heart, Zap, Brain, Atom, Shield, Cloud, Rocket, Globe, Star, CheckCircle, Send, Building2, Target, Award, Lightbulb, Code, Database, Network, ShieldCheck, Wifi, Satellite, Factory, Heart as HeartIcon, Gavel, Scale, Eye, Key, Leaf, Sun, Wind } from 'lucide-react';

const Careers = () => {
  const [selectedDepartment, setSelectedDepartment] = useState('All');
  const [selectedLocation, setSelectedLocation] = useState('All');

  const departments = [
    { name: 'All', count: 24, icon: Building2 },
    { name: 'AI & Machine Learning', count: 8, icon: Brain },
    { name: 'Quantum Technology', count: 3, icon: Atom },
    { name: 'Cybersecurity', count: 5, icon: Shield },
    { name: 'Cloud & DevOps', count: 4, icon: Cloud },
    { name: 'Software Engineering', count: 4, icon: Code }
  ];

  const locations = [
    { name: 'All', count: 24, icon: Globe },
    { name: 'Remote', count: 18, icon: Wifi },
    { name: 'Middletown, DE', count: 4, icon: MapPin },
    { name: 'New York, NY', count: 2, icon: Building2 }
>>>>>>> origin/cursor/website-audit-and-enhancement-a3a9
=======
import { Link } from 'react-router-dom';
import { 
  Briefcase, 
  Users, 
  Heart, 
  Zap, 
  Globe, 
  ArrowRight,
  CheckCircle,
  MapPin,
  Clock,
  DollarSign,
  Award,
  BookOpen,
  Coffee,
  Home,
  Building,
  Brain,
  Shield,
  Cloud,
  Cpu
} from 'lucide-react';

export default function Careers() {
  const [selectedDepartment, setSelectedDepartment] = useState('all');

  const departments = [
    { id: 'all', name: 'All Departments', icon: Building, count: 24 },
    { id: 'engineering', name: 'Engineering', icon: Cpu, count: 12 },
    { id: 'ai', name: 'AI & ML', icon: Brain, count: 6 },
    { id: 'security', name: 'Security', icon: Shield, count: 4 },
    { id: 'cloud', name: 'Cloud & DevOps', icon: Cloud, count: 2 }
>>>>>>> origin/cursor/website-audit-and-enhancement-82f7
  ];

  const jobOpenings = [
    {
<<<<<<< HEAD
<<<<<<< HEAD
      id: 'senior-ai-engineer',
      title: 'Senior AI Engineer',
      department: 'ai-research',
      location: 'Remote / Middletown, DE',
      type: 'Full-time',
      experience: '5+ years',
      description: 'Join our AI research team to develop cutting-edge autonomous systems and machine learning solutions.',
      requirements: [
        'Advanced degree in Computer Science, AI, or related field',
        'Expertise in deep learning, neural networks, and AI frameworks',
        'Experience with autonomous systems and reinforcement learning',
        'Strong programming skills in Python, TensorFlow, PyTorch'
      ],
      benefits: [
        'Competitive salary with equity options',
        'Flexible remote work arrangements',
        'Professional development budget',
        'Health, dental, and vision insurance'
=======
      id: 1,
      title: "Senior AI Engineer",
      department: "ai",
      location: "Remote / Middletown, DE",
      type: "Full-time",
      experience: "5+ years",
      salary: "$120k - $180k",
      description: "Join our AI team to develop cutting-edge machine learning models and autonomous systems...",
      requirements: [
        "Advanced degree in Computer Science, AI, or related field",
        "Experience with PyTorch, TensorFlow, and modern ML frameworks",
        "Strong background in deep learning and neural networks",
        "Experience with cloud platforms (AWS, Azure, GCP)"
      ],
      benefits: [
        "Competitive salary and equity",
        "Flexible remote work options",
        "Health, dental, and vision insurance",
        "Professional development budget"
>>>>>>> origin/cursor/website-audit-and-enhancement-82f7
      ],
      urgent: true
    },
    {
<<<<<<< HEAD
      id: 'quantum-computing-researcher',
      title: 'Quantum Computing Researcher',
      department: 'quantum',
      location: 'Remote / Middletown, DE',
      type: 'Full-time',
      experience: '3+ years',
      description: 'Research and develop quantum algorithms and quantum-safe security protocols.',
      requirements: [
        'PhD in Physics, Computer Science, or related field',
        'Experience with quantum computing frameworks (Qiskit, Cirq)',
        'Knowledge of quantum algorithms and quantum cryptography',
        'Strong mathematical and analytical skills'
      ],
      benefits: [
        'Competitive salary with equity options',
        'Access to quantum computing resources',
        'Conference and research publication support',
        'Comprehensive benefits package'
=======
      id: 2,
      title: "Cybersecurity Specialist",
      department: "security",
      location: "Middletown, DE",
      type: "Full-time",
      experience: "3+ years",
      salary: "$90k - $130k",
      description: "Help protect our clients' digital assets with advanced security solutions...",
      requirements: [
        "Bachelor's degree in Cybersecurity or related field",
        "Experience with security tools and frameworks",
        "Knowledge of compliance standards (SOC2, ISO 27001)",
        "Strong analytical and problem-solving skills"
      ],
      benefits: [
        "Competitive salary",
        "Health and wellness benefits",
        "Training and certification support",
        "Career growth opportunities"
>>>>>>> origin/cursor/website-audit-and-enhancement-82f7
      ],
      urgent: false
    },
    {
<<<<<<< HEAD
      id: 'cybersecurity-architect',
      title: 'Cybersecurity Architect',
      department: 'cybersecurity',
      location: 'Remote / Middletown, DE',
      type: 'Full-time',
      experience: '7+ years',
      description: 'Design and implement enterprise-grade security solutions for our clients.',
      requirements: [
        'Expertise in security architecture and design',
        'Experience with SOC2, ISO 27001, and other compliance frameworks',
        'Knowledge of threat modeling and risk assessment',
        'Strong understanding of cloud security and zero-trust architecture'
      ],
      benefits: [
        'Competitive salary with equity options',
        'Remote work flexibility',
        'Professional certifications support',
        'Health and wellness benefits'
      ],
      urgent: true
    },
    {
      id: 'cloud-devops-engineer',
      title: 'Cloud DevOps Engineer',
      department: 'cloud',
      location: 'Remote / Middletown, DE',
      type: 'Full-time',
      experience: '4+ years',
      description: 'Build and maintain scalable cloud infrastructure and CI/CD pipelines.',
      requirements: [
        'Experience with AWS, Azure, or Google Cloud Platform',
        'Proficiency in Docker, Kubernetes, and infrastructure as code',
        'Knowledge of CI/CD tools and practices',
        'Strong scripting skills in Python, Bash, or PowerShell'
      ],
      benefits: [
        'Competitive salary with equity options',
        'Remote work options',
        'Cloud certification support',
        'Flexible work hours'
      ],
      urgent: false
    },
    {
      id: 'frontend-developer',
      title: 'Frontend Developer',
      department: 'engineering',
      location: 'Remote / Middletown, DE',
      type: 'Full-time',
      experience: '3+ years',
      description: 'Create beautiful and responsive user interfaces for our AI-powered applications.',
      requirements: [
        'Expertise in React, TypeScript, and modern frontend frameworks',
        'Experience with responsive design and accessibility',
        'Knowledge of state management and API integration',
        'Strong UI/UX design principles'
      ],
      benefits: [
        'Competitive salary with equity options',
        'Remote work flexibility',
        'Professional development opportunities',
        'Health and dental insurance'
      ],
      urgent: false
    },
    {
      id: 'ai-product-manager',
      title: 'AI Product Manager',
      department: 'ai-research',
      location: 'Remote / Middletown, DE',
      type: 'Full-time',
      experience: '5+ years',
      description: 'Lead product strategy and development for our AI-powered solutions.',
      requirements: [
        'Experience in AI/ML product management',
        'Strong technical background and understanding of AI technologies',
        'Excellent communication and stakeholder management skills',
        'Experience with agile development methodologies'
      ],
      benefits: [
        'Competitive salary with equity options',
        'Remote work options',
        'Professional development budget',
        'Comprehensive benefits package'
      ],
      urgent: true
    }
  ];

  const companyBenefits = [
    {
      icon: Heart,
      title: 'Health & Wellness',
      description: 'Comprehensive health, dental, and vision insurance for you and your family.',
      color: 'from-red-500 to-pink-500'
    },
    {
      icon: DollarSign,
      title: 'Competitive Compensation',
      description: 'Attractive salary packages with equity options and performance bonuses.',
      color: 'from-green-500 to-emerald-500'
    },
    {
      icon: Clock,
      title: 'Flexible Work',
      description: 'Remote work options and flexible hours to support work-life balance.',
      color: 'from-blue-500 to-cyan-500'
    },
    {
      icon: GraduationCap,
      title: 'Learning & Growth',
      description: 'Professional development budget and continuous learning opportunities.',
      color: 'from-purple-500 to-pink-500'
    },
    {
      icon: Globe,
      title: 'Global Impact',
      description: 'Work on cutting-edge technology that transforms businesses worldwide.',
      color: 'from-indigo-500 to-purple-500'
    },
    {
      icon: Star,
      title: 'Innovation Culture',
      description: 'Be part of a team that pushes the boundaries of what\'s possible.',
      color: 'from-yellow-500 to-orange-500'
=======
      id: 1,
      title: "Senior AI Research Scientist",
      department: "AI & Machine Learning",
      location: "Remote",
      type: "Full-time",
      experience: "5+ years",
      salary: "$120,000 - $180,000",
      description: "Lead cutting-edge research in autonomous AI systems and quantum neural networks.",
      requirements: [
        "PhD in Computer Science, AI, or related field",
        "Strong background in machine learning and neural networks",
        "Experience with quantum computing concepts",
        "Published research in top-tier conferences"
      ],
      responsibilities: [
        "Develop novel AI algorithms and architectures",
        "Lead research projects and mentor junior researchers",
        "Collaborate with cross-functional teams",
        "Publish research findings and patents"
      ],
      benefits: [
        "Competitive salary and equity",
        "Flexible remote work options",
        "Professional development budget",
        "Health, dental, and vision insurance"
      ],
      icon: Brain,
      urgent: true,
      postedDate: "2024-12-15"
    },
    {
      id: 2,
      title: "Quantum Computing Engineer",
      department: "Quantum Technology",
      location: "Remote",
      type: "Full-time",
      experience: "3+ years",
      salary: "$100,000 - $150,000",
      description: "Build and optimize quantum computing systems and quantum neural network platforms.",
      requirements: [
        "MS/PhD in Physics, Computer Science, or Engineering",
        "Experience with quantum computing frameworks",
        "Knowledge of quantum algorithms and error correction",
        "Programming experience in Python, C++, or Q#"
      ],
      responsibilities: [
        "Design and implement quantum algorithms",
        "Optimize quantum circuit performance",
        "Develop quantum software tools",
        "Collaborate with research teams"
      ],
      benefits: [
        "Competitive salary and equity",
        "Remote work flexibility",
        "Conference attendance support",
        "Comprehensive benefits package"
      ],
      icon: Atom,
      urgent: false,
      postedDate: "2024-12-12"
    },
    {
      id: 3,
      title: "Cybersecurity Architect",
      department: "Cybersecurity",
      location: "Middletown, DE",
      type: "Full-time",
      experience: "7+ years",
      salary: "$130,000 - $200,000",
      description: "Design and implement enterprise security solutions and SOC2 compliance automation.",
      requirements: [
        "Bachelor's degree in Cybersecurity or related field",
        "CISSP, CISM, or similar certifications",
        "Experience with enterprise security architecture",
        "Knowledge of compliance frameworks (SOC2, ISO 27001)"
      ],
      responsibilities: [
        "Design security architecture for enterprise systems",
        "Implement security controls and monitoring",
        "Lead security assessments and audits",
        "Develop security policies and procedures"
      ],
      benefits: [
        "Competitive salary and benefits",
        "Hybrid work model",
        "Professional certification support",
        "Health and wellness programs"
      ],
      icon: Shield,
      urgent: true,
      postedDate: "2024-12-10"
    },
    {
      id: 4,
      title: "DevOps Engineer",
      department: "Cloud & DevOps",
      location: "Remote",
      type: "Full-time",
      experience: "4+ years",
      salary: "$90,000 - $140,000",
      description: "Build and maintain cloud infrastructure and CI/CD pipelines for autonomous systems.",
      requirements: [
        "Bachelor's degree in Computer Science or related field",
        "Experience with AWS, Azure, or GCP",
        "Knowledge of Docker, Kubernetes, and Terraform",
        "Experience with CI/CD tools and automation"
      ],
      responsibilities: [
        "Design and implement cloud infrastructure",
        "Automate deployment and scaling processes",
        "Monitor system performance and reliability",
        "Collaborate with development teams"
      ],
      benefits: [
        "Competitive salary and equity",
        "Remote work options",
        "Cloud certification support",
        "Flexible work hours"
      ],
      icon: Cloud,
      urgent: false,
      postedDate: "2024-12-08"
    },
    {
      id: 5,
      title: "Full Stack Software Engineer",
      department: "Software Engineering",
      location: "New York, NY",
      type: "Full-time",
      experience: "3+ years",
      salary: "$95,000 - $150,000",
      description: "Develop innovative web applications and AI-powered business solutions.",
      requirements: [
        "Bachelor's degree in Computer Science or related field",
        "Experience with React, Node.js, and Python",
        "Knowledge of cloud services and databases",
        "Experience with AI/ML integration"
      ],
      responsibilities: [
        "Develop full-stack web applications",
        "Integrate AI services and APIs",
        "Optimize application performance",
        "Collaborate with product and design teams"
      ],
      benefits: [
        "Competitive salary and benefits",
        "Office in NYC with hybrid options",
        "Professional development opportunities",
        "Team events and activities"
      ],
      icon: Code,
      urgent: false,
      postedDate: "2024-12-05"
    },
    {
      id: 6,
      title: "AI Product Manager",
      department: "AI & Machine Learning",
      location: "Remote",
      type: "Full-time",
      experience: "5+ years",
      salary: "$110,000 - $170,000",
      description: "Lead product strategy and development for AI-powered business solutions.",
      requirements: [
        "Bachelor's degree in Business, Engineering, or related field",
        "Experience in product management or AI product development",
        "Understanding of AI/ML technologies and market trends",
        "Strong analytical and communication skills"
      ],
      responsibilities: [
        "Define product vision and strategy",
        "Gather and prioritize product requirements",
        "Work with engineering teams on product development",
        "Analyze market trends and competitive landscape"
      ],
      benefits: [
        "Competitive salary and equity",
        "Remote work flexibility",
        "Product management training",
        "Comprehensive benefits package"
      ],
      icon: Target,
      urgent: false,
      postedDate: "2024-12-03"
=======
      id: 3,
      title: "Cloud Infrastructure Engineer",
      department: "cloud",
      location: "Remote",
      type: "Full-time",
      experience: "4+ years",
      salary: "$100k - $150k",
      description: "Design and implement scalable cloud solutions for enterprise clients...",
      requirements: [
        "Experience with AWS, Azure, or Google Cloud",
        "Knowledge of Kubernetes and containerization",
        "Infrastructure as Code experience (Terraform, CloudFormation)",
        "Strong understanding of networking and security"
      ],
      benefits: [
        "Remote work flexibility",
        "Competitive compensation",
        "Health benefits",
        "Professional development"
      ],
      urgent: false
    },
    {
      id: 4,
      title: "Full Stack Developer",
      department: "engineering",
      location: "Hybrid (Middletown, DE)",
      type: "Full-time",
      experience: "3+ years",
      salary: "$80k - $120k",
      description: "Build modern web applications and contribute to our product development...",
      requirements: [
        "Proficiency in React, Node.js, and modern JavaScript",
        "Experience with TypeScript and modern frameworks",
        "Knowledge of databases and API design",
        "Understanding of DevOps practices"
      ],
      benefits: [
        "Competitive salary",
        "Hybrid work model",
        "Health benefits",
        "Learning and development"
      ],
      urgent: false
    }
  ];

  const companyValues = [
    {
      title: "Innovation First",
      description: "We push boundaries and embrace cutting-edge technologies",
      icon: Zap
    },
    {
      title: "People Matter",
      description: "Our team is our greatest asset and we invest in their growth",
      icon: Heart
    },
    {
      title: "Global Impact",
      description: "We solve problems that affect businesses worldwide",
      icon: Globe
    },
    {
      title: "Continuous Learning",
      description: "We foster a culture of curiosity and skill development",
      icon: BookOpen
    }
  ];

  const benefits = [
    {
      title: "Health & Wellness",
      description: "Comprehensive health, dental, and vision coverage",
      icon: Heart
    },
    {
      title: "Flexible Work",
      description: "Remote work options and flexible scheduling",
      icon: Home
    },
    {
      title: "Professional Growth",
      description: "Training budgets and career development programs",
      icon: Award
    },
    {
      title: "Team Building",
      description: "Regular team events and social activities",
      icon: Users
>>>>>>> origin/cursor/website-audit-and-enhancement-82f7
    }
  ];

  const filteredJobs = jobOpenings.filter(job => {
    const matchesDepartment = selectedDepartment === 'All' || job.department === selectedDepartment;
    const matchesLocation = selectedLocation === 'All' || job.location === selectedLocation;
    return matchesDepartment && matchesLocation;
  });

<<<<<<< HEAD
  const companyValues = [
    {
      title: "Innovation First",
      description: "We push the boundaries of what's possible with cutting-edge technology",
      icon: Lightbulb
    },
    {
      title: "Excellence",
      description: "We strive for excellence in everything we do, from code to customer service",
      icon: Star
    },
    {
      title: "Collaboration",
      description: "We believe the best solutions come from diverse teams working together",
      icon: Users
    },
    {
      title: "Impact",
      description: "We're driven by the positive impact our technology has on businesses and society",
      icon: Target
    }
  ];

  const benefits = [
    {
      title: "Competitive Compensation",
      description: "Above-market salaries, equity options, and performance bonuses",
      icon: DollarSign
    },
    {
      title: "Flexible Work",
      description: "Remote work options, flexible hours, and work-life balance",
      icon: Globe
    },
    {
      title: "Professional Growth",
      description: "Continuous learning, conference attendance, and career development",
      icon: GraduationCap
    },
    {
      title: "Health & Wellness",
      description: "Comprehensive health insurance, wellness programs, and mental health support",
      icon: Heart
    },
    {
      title: "Innovation Time",
      description: "20% time for personal projects and innovation initiatives",
      icon: Zap
    },
    {
      title: "Team Culture",
      description: "Collaborative environment, team events, and strong community",
      icon: Users
>>>>>>> origin/cursor/website-audit-and-enhancement-a3a9
    }
  ];

  const cultureValues = [
    {
      icon: Brain,
      title: 'Innovation First',
      description: 'We encourage creative thinking and novel approaches to solving complex problems.',
      color: 'from-purple-500 to-pink-500'
    },
    {
      icon: Users,
      title: 'Collaboration',
      description: 'We believe in the power of teamwork and diverse perspectives to achieve excellence.',
      color: 'from-blue-500 to-cyan-500'
    },
    {
      icon: Zap,
      title: 'Continuous Learning',
      description: 'We foster a culture of curiosity and continuous improvement.',
      color: 'from-green-500 to-emerald-500'
    },
    {
      icon: Shield,
      title: 'Integrity',
      description: 'We maintain the highest ethical standards in all our work and relationships.',
      color: 'from-red-500 to-pink-500'
    }
  ];

  const filteredJobs = activeDepartment === 'all' 
    ? jobOpenings 
    : jobOpenings.filter(job => job.department === activeDepartment);

  return (
<<<<<<< HEAD
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-blue-900 text-white">
      {/* Hero Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(0,255,255,0.1),transparent_50%)]"></div>
        <div className="relative z-10 max-w-7xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
            Join Our Team
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto">
            Be part of a team that's revolutionizing technology and shaping the future of AI, 
            quantum computing, and digital transformation.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a
              href="#openings"
              className="px-8 py-3 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-medium rounded-lg hover:from-cyan-600 hover:to-blue-700 transition-all duration-200"
            >
              View Openings
            </a>
            <a
              href="/contact"
              className="px-8 py-3 border border-cyan-500 text-cyan-400 font-medium rounded-lg hover:bg-cyan-500 hover:text-white transition-all duration-200"
            >
              Get in Touch
            </a>
=======
    <div className="min-h-screen bg-gradient-to-br from-zion-slate via-zion-slate-dark to-zion-slate">
      {/* Hero Section */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-zion-blue/20 to-zion-purple/20"></div>
        <div className="relative container mx-auto px-4 py-24">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              Join Our Mission to
              <span className="text-gradient block">Transform the Future</span>
            </h1>
            <p className="text-xl text-zion-slate-light mb-8 leading-relaxed">
              Be part of a team that's pushing the boundaries of AI, quantum computing, and emerging technologies. 
              Help us build solutions that transform businesses and shape the future of technology.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <div className="flex items-center space-x-2 text-zion-cyan">
                <Users className="h-5 w-5" />
                <span className="text-white">24 Open Positions</span>
              </div>
              <div className="flex items-center space-x-2 text-zion-cyan">
                <Globe className="h-5 w-5" />
                <span className="text-white">Remote & Hybrid Options</span>
              </div>
              <div className="flex items-center space-x-2 text-zion-cyan">
                <Star className="h-5 w-5" />
                <span className="text-white">Competitive Benefits</span>
              </div>
            </div>
>>>>>>> origin/cursor/website-audit-and-enhancement-a3a9
=======
  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-blue-900 text-white">
      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <div className="flex justify-center mb-6">
            <div className="w-20 h-20 bg-gradient-to-r from-purple-500 to-pink-600 rounded-2xl flex items-center justify-center">
              <Briefcase className="w-10 h-10 text-white" />
            </div>
          </div>
          <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
            Join Our Team
          </h1>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Build the future of technology with us. We're looking for passionate, 
            innovative minds to help transform businesses through AI and cutting-edge solutions.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="#openings"
              className="px-8 py-4 bg-gradient-to-r from-purple-500 to-pink-600 rounded-lg text-white font-semibold hover:from-purple-600 hover:to-pink-700 transition-all duration-200 flex items-center justify-center space-x-2"
            >
              <span>View Openings</span>
              <ArrowRight className="w-5 h-5" />
            </Link>
            <button className="px-8 py-4 border border-purple-500 text-purple-400 rounded-lg font-semibold hover:bg-purple-500 hover:text-white transition-all duration-200">
              <span>General Application</span>
            </button>
>>>>>>> origin/cursor/website-audit-and-enhancement-82f7
          </div>
        </div>
      </section>

<<<<<<< HEAD
      {/* Company Culture */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">
              Our Culture
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              We foster an environment of innovation, collaboration, and continuous learning 
              where every team member can thrive and make a meaningful impact.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {cultureValues.map((value, index) => (
              <div key={index} className="text-center group">
                <div className={`w-16 h-16 mx-auto mb-4 rounded-xl bg-gradient-to-r ${value.color} flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                  <value.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold mb-3 text-white">{value.title}</h3>
                <p className="text-gray-400 leading-relaxed">{value.description}</p>
              </div>
            ))}
          </div>
=======
      {/* Company Values */}
<<<<<<< HEAD
      <div className="container mx-auto px-4 py-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-white mb-4">Our Values</h2>
          <p className="text-zion-slate-light text-lg">
            The principles that guide everything we do
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {companyValues.map((value, index) => (
            <div
              key={index}
              className="bg-zion-slate-dark border border-zion-cyan/20 rounded-xl p-6 text-center hover:border-zion-cyan/40 hover:shadow-xl hover:shadow-zion-cyan/10 transition-all duration-300"
            >
              <div className="w-16 h-16 bg-zion-cyan/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <value.icon className="h-8 w-8 text-zion-cyan" />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">{value.title}</h3>
              <p className="text-zion-slate-light">{value.description}</p>
            </div>
          ))}
>>>>>>> origin/cursor/website-audit-and-enhancement-a3a9
        </div>
      </section>

<<<<<<< HEAD
      {/* Benefits */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-black/20">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">
              Why Work With Us?
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              We offer comprehensive benefits and opportunities that support your professional 
              growth and personal well-being.
            </p>
=======
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-800/20">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Our Values
            </h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              These core principles guide everything we do and shape our company culture.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {companyValues.map((value, idx) => (
              <div key={idx} className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <value.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold mb-2">{value.title}</h3>
                <p className="text-gray-300">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Why Work With Us?
            </h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              We believe in taking care of our team so they can do their best work.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {benefits.map((benefit, idx) => (
              <div key={idx} className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-600 rounded-lg flex items-center justify-center flex-shrink-0">
                  <benefit.icon className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">{benefit.title}</h3>
                  <p className="text-gray-300">{benefit.description}</p>
                </div>
              </div>
            ))}
>>>>>>> origin/cursor/website-audit-and-enhancement-82f7
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {companyBenefits.map((benefit, index) => (
              <div
                key={index}
                className="bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-xl p-6 hover:border-cyan-500/50 transition-all duration-300 group"
              >
                <div className={`w-16 h-16 rounded-xl bg-gradient-to-r ${benefit.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                  <benefit.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">{benefit.title}</h3>
                <p className="text-gray-400 leading-relaxed">{benefit.description}</p>
              </div>
            ))}
          </div>
=======
      {/* Benefits Section */}
      <div className="container mx-auto px-4 py-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-white mb-4">Why Work With Us</h2>
          <p className="text-zion-slate-light text-lg">
            We invest in our people because they're our greatest asset
          </p>
        </div>
<<<<<<< HEAD
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => (
            <div
              key={index}
              className="bg-zion-slate-dark border border-zion-cyan/20 rounded-xl p-6 hover:border-zion-cyan/40 hover:shadow-xl hover:shadow-zion-cyan/10 transition-all duration-300"
            >
              <div className="w-12 h-12 bg-zion-cyan/20 rounded-lg flex items-center justify-center mb-4">
                <benefit.icon className="h-6 w-6 text-zion-cyan" />
              </div>
              <h3 className="text-lg font-bold text-white mb-2">{benefit.title}</h3>
              <p className="text-zion-slate-light text-sm">{benefit.description}</p>
            </div>
          ))}
>>>>>>> origin/cursor/website-audit-and-enhancement-a3a9
        </div>
      </section>

      {/* Job Openings */}
<<<<<<< HEAD
      <section id="openings" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">
              Open Positions
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Explore exciting opportunities to join our team and contribute to groundbreaking 
              technology solutions.
=======
      </section>

      {/* Job Openings */}
      <section id="openings" className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-800/20">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Open Positions
            </h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              Find the perfect role for your skills and career goals.
>>>>>>> origin/cursor/website-audit-and-enhancement-82f7
            </p>
          </div>

          {/* Department Filter */}
<<<<<<< HEAD
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {departments.map((dept) => (
              <button
                key={dept.id}
                onClick={() => setActiveDepartment(dept.id)}
                className={`flex items-center space-x-2 px-6 py-3 rounded-lg font-medium transition-all duration-200 ${
                  activeDepartment === dept.id
                    ? 'bg-gradient-to-r from-cyan-500 to-blue-600 text-white'
                    : 'bg-gray-800/50 text-gray-300 hover:bg-gray-700/50 hover:text-white'
                }`}
              >
                <dept.icon className="w-5 h-5" />
                <span>{dept.name}</span>
=======
          <div className="flex flex-wrap justify-center gap-3 mb-12">
            {departments.map((dept) => (
              <button
                key={dept.id}
                onClick={() => setSelectedDepartment(dept.id)}
                className={`flex items-center space-x-2 px-4 py-2 rounded-lg border transition-all duration-200 ${
                  selectedDepartment === dept.id
                    ? 'border-purple-500 bg-purple-500/20 text-purple-400'
                    : 'border-gray-700 text-gray-300 hover:border-purple-500/50 hover:text-purple-400'
                }`}
              >
                <dept.icon className="w-4 h-4" />
                <span>{dept.name}</span>
                <span className="text-xs bg-gray-700 px-2 py-1 rounded-full">
                  {dept.count}
                </span>
>>>>>>> origin/cursor/website-audit-and-enhancement-82f7
              </button>
            ))}
          </div>
          
          <div className="space-y-6">
            {filteredJobs.map((job) => (
<<<<<<< HEAD
              <div
                key={job.id}
                className="bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-xl p-6 hover:border-cyan-500/50 transition-all duration-300"
              >
                <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-4">
                  <div className="mb-4 lg:mb-0">
                    <div className="flex items-center space-x-3 mb-2">
                      <h3 className="text-xl font-semibold text-white">{job.title}</h3>
                      {job.urgent && (
                        <span className="px-2 py-1 bg-gradient-to-r from-red-500 to-pink-500 text-white text-xs font-medium rounded-full">
=======
              <div key={job.id} className="bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-xl p-8 hover:border-purple-500/50 transition-all duration-300">
                <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-6">
                  <div className="mb-4 lg:mb-0">
                    <div className="flex items-center space-x-3 mb-2">
                      <h3 className="text-2xl font-bold">{job.title}</h3>
                      {job.urgent && (
                        <span className="px-3 py-1 bg-red-500/20 text-red-400 text-sm rounded-full border border-red-500/30">
>>>>>>> origin/cursor/website-audit-and-enhancement-82f7
                          Urgent
                        </span>
                      )}
                    </div>
<<<<<<< HEAD
                    <div className="flex flex-wrap items-center gap-4 text-sm text-gray-400">
                      <div className="flex items-center space-x-1">
                        <Briefcase className="w-4 h-4" />
                        <span>{job.type}</span>
=======
                    <div className="flex flex-wrap items-center gap-4 text-gray-400 text-sm">
                      <div className="flex items-center space-x-1">
                        <Building className="w-4 h-4" />
                        <span>{departments.find(d => d.id === job.department)?.name}</span>
>>>>>>> origin/cursor/website-audit-and-enhancement-82f7
                      </div>
                      <div className="flex items-center space-x-1">
                        <MapPin className="w-4 h-4" />
                        <span>{job.location}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <Clock className="w-4 h-4" />
<<<<<<< HEAD
                        <span>{job.experience}</span>
                      </div>
                    </div>
                  </div>
                  <div className="flex space-x-3">
                    <a
                      href={`mailto:careers@ziontechgroup.com?subject=Application for ${job.title}`}
                      className="inline-flex items-center space-x-2 px-4 py-2 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-lg text-white font-medium hover:from-cyan-600 hover:to-blue-700 transition-all duration-200"
                    >
                      <Mail className="w-4 h-4" />
                      <span>Apply</span>
                    </a>
                    <a
                      href={`https://linkedin.com/company/zion-tech-group/jobs`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center space-x-2 px-4 py-2 border border-cyan-500 text-cyan-400 rounded-lg font-medium hover:bg-cyan-500 hover:text-white transition-all duration-200"
                    >
                      <Linkedin className="w-4 h-4" />
                      <span>LinkedIn</span>
                    </a>
                  </div>
=======
                        <span>{job.type}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <Briefcase className="w-4 h-4" />
                        <span>{job.experience}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <DollarSign className="w-4 h-4" />
                        <span>{job.salary}</span>
                      </div>
                    </div>
                  </div>
                  <Link
                    to={`/careers/${job.id}`}
                    className="px-6 py-3 bg-gradient-to-r from-purple-500 to-pink-600 text-white font-semibold rounded-lg hover:from-purple-600 hover:to-pink-700 transition-all duration-200 flex items-center justify-center space-x-2"
                  >
                    <span>Apply Now</span>
                    <ArrowRight className="w-4 h-4" />
                  </Link>
>>>>>>> origin/cursor/website-audit-and-enhancement-82f7
                </div>
                
                <p className="text-gray-300 mb-4">{job.description}</p>
                
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                  <div>
<<<<<<< HEAD
                    <h4 className="font-medium text-white mb-2">Requirements:</h4>
                    <ul className="space-y-1">
                      {job.requirements.map((req, index) => (
                        <li key={index} className="flex items-start space-x-2 text-sm text-gray-400">
                          <CheckCircle className="w-4 h-4 text-cyan-400 mt-0.5 flex-shrink-0" />
                          <span>{req}</span>
=======
                    <h4 className="font-semibold mb-3 text-purple-400">Requirements</h4>
                    <ul className="space-y-2">
                      {job.requirements.map((req, idx) => (
                        <li key={idx} className="flex items-center space-x-2">
                          <CheckCircle className="w-4 h-4 text-purple-400 flex-shrink-0" />
                          <span className="text-gray-300 text-sm">{req}</span>
>>>>>>> origin/cursor/website-audit-and-enhancement-82f7
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
<<<<<<< HEAD
                    <h4 className="font-medium text-white mb-2">Benefits:</h4>
                    <ul className="space-y-1">
                      {job.benefits.map((benefit, index) => (
                        <li key={index} className="flex items-start space-x-2 text-sm text-gray-400">
                          <Star className="w-4 h-4 text-yellow-400 mt-0.5 flex-shrink-0" />
                          <span>{benefit}</span>
=======
                    <h4 className="font-semibold mb-3 text-purple-400">Benefits</h4>
                    <ul className="space-y-2">
                      {job.benefits.map((benefit, idx) => (
                        <li key={idx} className="flex items-center space-x-2">
                          <CheckCircle className="w-4 h-4 text-purple-400 flex-shrink-0" />
                          <span className="text-gray-300 text-sm">{benefit}</span>
>>>>>>> origin/cursor/website-audit-and-enhancement-82f7
                        </li>
                      ))}
                    </ul>
                  </div>
=======
      <div className="container mx-auto px-4 py-16">
        <div className="flex flex-col lg:flex-row gap-8 mb-12">
          <div className="lg:w-1/3">
            <h2 className="text-3xl font-bold text-white mb-6">Open Positions</h2>
            <p className="text-zion-slate-light mb-6">
              Find the perfect role that matches your skills and passion for innovation.
            </p>
            
            {/* Filters */}
            <div className="space-y-6">
              <div>
                <h3 className="text-white font-semibold mb-3">Department</h3>
                <div className="space-y-2">
                  {departments.map((dept) => (
                    <button
                      key={dept.name}
                      onClick={() => setSelectedDepartment(dept.name)}
                      className={`w-full flex items-center justify-between p-3 rounded-lg border transition-all duration-300 ${
                        selectedDepartment === dept.name
                          ? 'bg-zion-cyan text-white border-zion-cyan'
                          : 'bg-zion-slate-dark text-zion-slate-light border-zion-cyan/30 hover:border-zion-cyan/50 hover:text-zion-cyan'
                      }`}
                    >
                      <div className="flex items-center space-x-2">
                        <dept.icon className="h-4 w-4" />
                        <span>{dept.name}</span>
                      </div>
                      <span className="bg-white/20 text-white px-2 py-1 rounded-full text-xs">
                        {dept.count}
                      </span>
                    </button>
                  ))}
>>>>>>> origin/cursor/website-audit-and-enhancement-a3a9
                </div>
              </div>
              
              <div>
                <h3 className="text-white font-semibold mb-3">Location</h3>
                <div className="space-y-2">
                  {locations.map((location) => (
                    <button
                      key={location.name}
                      onClick={() => setSelectedLocation(location.name)}
                      className={`w-full flex items-center justify-between p-3 rounded-lg border transition-all duration-300 ${
                        selectedLocation === location.name
                          ? 'bg-zion-cyan text-white border-zion-cyan'
                          : 'bg-zion-slate-dark text-zion-slate-light border-zion-cyan/30 hover:border-zion-cyan/50 hover:text-zion-cyan'
                      }`}
                    >
                      <div className="flex items-center space-x-2">
                        <location.icon className="h-4 w-4" />
                        <span>{location.name}</span>
                      </div>
                      <span className="bg-white/20 text-white px-2 py-1 rounded-full text-xs">
                        {location.count}
                      </span>
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>
<<<<<<< HEAD

          {filteredJobs.length === 0 && (
            <div className="text-center py-12">
              <p className="text-gray-400 text-lg">No positions available in this department at the moment.</p>
              <p className="text-gray-500 mt-2">Check back later or contact us for future opportunities.</p>
=======
          
          <div className="lg:w-2/3">
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-xl font-bold text-white">
                {filteredJobs.length} Positions Available
              </h3>
              <span className="text-zion-slate-light text-sm">
                Updated {new Date().toLocaleDateString()}
              </span>
>>>>>>> origin/cursor/website-audit-and-enhancement-a3a9
            </div>
            
            <div className="space-y-6">
              {filteredJobs.map((job) => (
                <div
                  key={job.id}
                  className="bg-zion-slate-dark border border-zion-cyan/20 rounded-xl p-6 hover:border-zion-cyan/40 hover:shadow-xl hover:shadow-zion-cyan/10 transition-all duration-300"
                >
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex items-start space-x-4">
                      <div className="p-3 bg-zion-cyan/20 rounded-lg">
                        <job.icon className="h-6 w-6 text-zion-cyan" />
                      </div>
                      <div>
                        <div className="flex items-center space-x-3 mb-2">
                          <h4 className="text-xl font-bold text-white">{job.title}</h4>
                          {job.urgent && (
                            <span className="px-2 py-1 bg-red-500 text-white text-xs rounded-full">
                              Urgent
                            </span>
                          )}
                        </div>
                        <div className="flex items-center space-x-4 text-sm text-zion-slate-light mb-3">
                          <div className="flex items-center space-x-1">
                            <Briefcase className="h-4 w-4" />
                            <span>{job.department}</span>
                          </div>
                          <div className="flex items-center space-x-1">
                            <MapPin className="h-4 w-4" />
                            <span>{job.location}</span>
                          </div>
                          <div className="flex items-center space-x-1">
                            <Clock className="h-4 w-4" />
                            <span>{job.type}</span>
                          </div>
                        </div>
                        <p className="text-zion-slate-light mb-4">{job.description}</p>
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="text-lg font-bold text-zion-cyan mb-1">{job.salary}</div>
                      <div className="text-sm text-zion-slate-light">{job.experience}</div>
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
                    <div>
                      <h5 className="text-zion-cyan font-semibold mb-2">Requirements</h5>
                      <ul className="space-y-1">
                        {job.requirements.slice(0, 3).map((req, index) => (
                          <li key={index} className="flex items-start space-x-2 text-sm text-zion-slate-light">
                            <CheckCircle className="h-4 w-4 text-green-400 mt-0.5 flex-shrink-0" />
                            <span>{req}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <h5 className="text-zion-cyan font-semibold mb-2">Responsibilities</h5>
                      <ul className="space-y-1">
                        {job.responsibilities.slice(0, 3).map((resp, index) => (
                          <li key={index} className="flex items-start space-x-2 text-sm text-zion-slate-light">
                            <CheckCircle className="h-4 w-4 text-green-400 mt-0.5 flex-shrink-0" />
                            <span>{resp}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <h5 className="text-zion-cyan font-semibold mb-2">Benefits</h5>
                      <ul className="space-y-1">
                        {job.benefits.slice(0, 3).map((benefit, index) => (
                          <li key={index} className="flex items-start space-x-2 text-sm text-zion-slate-light">
                            <CheckCircle className="h-4 w-4 text-green-400 mt-0.5 flex-shrink-0" />
                            <span>{benefit}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <div className="text-sm text-zion-slate-light">
                      Posted {new Date(job.postedDate).toLocaleDateString()}
                    </div>
                    <button className="bg-gradient-to-r from-zion-purple to-zion-cyan hover:from-zion-purple-light hover:to-zion-cyan-light text-white px-6 py-3 rounded-lg font-semibold transition-all duration-300 hover:shadow-lg hover:shadow-zion-cyan/30 flex items-center space-x-2">
                      <span>Apply Now</span>
                      <Send className="h-4 w-4" />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

<<<<<<< HEAD
      {/* Application Process */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-black/20">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">
              How to Apply
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Our simple and transparent application process designed to find the best talent.
            </p>
          </div>
<<<<<<< HEAD
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-white">1</span>
              </div>
              <h3 className="text-xl font-semibold mb-3 text-white">Submit Application</h3>
              <p className="text-gray-400">Send your resume and cover letter to careers@ziontechgroup.com</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-white">2</span>
              </div>
              <h3 className="text-xl font-semibold mb-3 text-white">Initial Review</h3>
              <p className="text-gray-400">Our team reviews your application within 48 hours</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-white">3</span>
              </div>
              <h3 className="text-xl font-semibold mb-3 text-white">Technical Interview</h3>
              <p className="text-gray-400">Discuss your skills and experience with our team</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-orange-500 to-yellow-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-white">4</span>
              </div>
              <h3 className="text-xl font-semibold mb-3 text-white">Join Our Team</h3>
              <p className="text-gray-400">Welcome aboard! Start your journey with us</p>
            </div>
=======
      {/* CTA Section */}
      <div className="container mx-auto px-4 py-16">
        <div className="bg-zion-slate-dark border border-zion-cyan/20 rounded-xl p-12 text-center max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-white mb-4">
            Don't See the Right Fit?
          </h2>
          <p className="text-zion-slate-light mb-8 text-lg">
            We're always looking for talented individuals to join our team. Send us your resume 
            and let's discuss how you can contribute to our mission.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-gradient-to-r from-zion-purple to-zion-cyan hover:from-zion-purple-light hover:to-zion-cyan-light text-white px-8 py-4 rounded-lg font-semibold transition-all duration-300 hover:shadow-lg hover:shadow-zion-cyan/30 flex items-center justify-center space-x-2">
              <span>Submit Your Resume</span>
              <Send className="h-5 w-5" />
            </button>
            <Link
              to="/contact"
              className="border border-zion-cyan text-zion-cyan hover:bg-zion-cyan hover:text-white px-8 py-4 rounded-lg font-semibold transition-all duration-300 flex items-center justify-center space-x-2"
            >
              <span>Contact Us</span>
              <ArrowRight className="h-5 w-5" />
            </Link>
>>>>>>> origin/cursor/website-audit-and-enhancement-a3a9
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">
            Ready to Join Our Mission?
          </h2>
          <p className="text-xl text-gray-400 mb-8">
            Help us revolutionize technology and shape the future of AI and digital transformation.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="mailto:careers@ziontechgroup.com"
              className="inline-flex items-center space-x-2 px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-lg text-white font-medium hover:from-cyan-600 hover:to-blue-700 transition-all duration-200"
            >
              <Mail className="w-5 h-5" />
              <span>Send Application</span>
              <ArrowRight className="w-5 h-5" />
            </a>
            <a
              href="/contact"
              className="inline-flex items-center space-x-2 px-8 py-4 border border-cyan-500 text-cyan-400 rounded-lg font-medium hover:bg-cyan-500 hover:text-white transition-all duration-200"
            >
              <span>Get in Touch</span>
              <ArrowRight className="w-5 h-5" />
            </a>
          </div>
        </div>
      </section>
=======

          {filteredJobs.length === 0 && (
            <div className="text-center py-16">
              <Briefcase className="w-16 h-16 text-gray-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-gray-400 mb-2">No positions found</h3>
              <p className="text-gray-500">Try selecting a different department or check back later for new openings.</p>
            </div>
          )}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Don't See the Right Fit?
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            We're always looking for talented individuals. Send us your resume 
            and we'll keep you in mind for future opportunities.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="px-8 py-4 bg-gradient-to-r from-purple-500 to-pink-600 rounded-lg text-white font-semibold hover:from-purple-600 hover:to-pink-700 transition-all duration-200 flex items-center justify-center space-x-2"
            >
              <span>Send General Application</span>
              <ArrowRight className="w-5 h-5" />
            </Link>
            <Link
              to="/about"
              className="px-8 py-4 border border-purple-500 text-purple-400 rounded-lg font-semibold hover:bg-purple-500 hover:text-white transition-all duration-200"
            >
              Learn More About Us
            </Link>
          </div>
        </div>
      </section>
>>>>>>> origin/cursor/website-audit-and-enhancement-82f7
    </div>
  );
}
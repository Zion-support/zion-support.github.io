import React from 'react';;
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { SEO } from '@/components/SEO';
import { GradientHeading } from '@/components/GradientHeading';
import { Button } from '@/components/ui/button';
import { Card;, CardContent } from "@/components/ui/card";
import { Tabs;, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
export default function Careers() {;
const [activeDepartment, setActiveDepartment] = useState('all');
const departments = [;
    {
id: 'all',;,
name: 'All Departments',;,
icon: Users,;,
color: 'from-purple-500 to-pink-500'
}
    },
    {
id: 'ai-research',;,
name: 'AI & Research',;,
icon: Brain,;,
color: 'from-purple-500 to-pink-500'
    },
    {
id: 'engineering',;,
name: 'Engineering',;,
icon: Code,;,
color: 'from-blue-500 to-cyan-500'
    },
    {
id: 'cybersecurity',;,
name: 'Cybersecurity',;,
icon: Shield,;,
color: 'from-red-500 to-pink-500'
    },
    {
id: 'quantum',;,
name: 'Quantum Technology',;,
icon: Cpu,;,
color: 'from-indigo-500 to-purple-500'
    },
    {
id: 'cloud',;,
name: 'Cloud & Infrastructure',;,
icon: Cloud,;,
color: 'from-green-500 to-emerald-500'
    }
import { Link } from 'react-router-dom';
import { Link } from 'react-router-dom';
import React;, { useState } from 'react';
import { motion } from 'framer-motion';
import {;;
Briefcase,;
Users,;
Heart,;
Zap,;
Globe,;
import {;;
Search,;
MapPin,;
Briefcase,;
Clock,;
Users,;
Zap,;
Brain,;
Shield,;
Cloud,;
Database,;
Network,;
ArrowRight,;
ChevronDown,;
ChevronRight,;
Star,;
Heart,;
Globe,;
Building2,;
GraduationCap,;
Award,;
Coffee,;
Wifi,;
Monitor,;
Smartphone,;
Palette,;
Dumbbell,;
BookOpen,;
Users2,;
Rocket,;
Target,;
Lightbulb,;
CheckCircle,;
Code,;
Settings} from 'lucide-react';
export default function Careers() {;
const [searchQuery, setSearchQuery] = useState('');
const [selectedDepartment, setSelectedDepartment] = useState('all');
const [selectedLocation, setSelectedLocation] = useState('all');
const [selectedType, setSelectedType] = useState('all');
const departments = [;
}
    { id: 'all', name: 'All Departments', count: 24, icon: Building2 },
    { id: 'engineering', name: 'Engineering', count: 12, icon: Code },
    { id: 'ai-ml', name: 'AI & Machine Learning', count: 6, icon: Brain },
    { id: 'cybersecurity', name: 'Cybersecurity', count: 4, icon: Shield },
    { id: 'quantum', name: 'Quantum Technology', count: 3, icon: Zap },
    { id: 'sales', name: 'Sales & Business Development', count: 5, icon: Target },
    { id: 'marketing', name: 'Marketing', count: 3, icon: Lightbulb },
    { id: 'operations', name: 'Operations', count: 2, icon: Settings }
  ];
const locations = [;
    { id: 'all', name: 'All Locations', count: 24 },
    { id: 'remote', name: 'Remote', count: 18 },
    { id: 'middletown-de', name: 'Middletown, DE', count: 4 },
    { id: 'new-york', name: 'New York, NY', count: 2 }
  ];
const jobTypes = [;
    { id: 'all', name: 'All Types', count: 24 },
    { id: 'full-time', name: 'Full-time', count: 20 },
    { id: 'part-time', name: 'Part-time', count: 2 },
    { id: 'contract', name: 'Contract', count: 2 }
import { motion } from 'framer-motion';
import {;;
Briefcase,;
Users,;
Award,;
MapPin,;
Clock,;
ArrowRight,;
Search,;
Filter,;
Building,;
Brain,;
Shield,;
Cpu,;
Network,;
Rocket,;
Star,;
CheckCircle,;
Globe,;
Heart} from 'lucide-react';
export default function Careers() {;
const [searchQuery, setSearchQuery] = useState('');
const [selectedDepartment, setSelectedDepartment] = useState('all');
const [selectedLocation, setSelectedLocation] = useState('all');
const [selectedType, setSelectedType] = useState('all');
const departments = [;
}
    { id: 'all', name: 'All Departments', count: 23 },
    { id: 'engineering', name: 'Engineering', count: 12 },
    { id: 'ai-research', name: 'AI Research', count: 6 },
    { id: 'sales', name: 'Sales & Business', count: 3 },
    { id: 'marketing', name: 'Marketing', count: 2 }
  ];
const locations = [;
    { id: 'all', name: 'All Locations', count: 23 },
    { id: 'middletown', name: 'Middletown, DE', count: 15 },
    { id: 'remote', name: 'Remote', count: 6 },
    { id: 'amsterdam', name: 'Amsterdam, NL', count: 2 }
  ];
const jobTypes = [;
    { id: 'all', name: 'All Types', count: 23 },
    { id: 'full-time', name: 'Full Time', count: 18 },
    { id: 'part-time', name: 'Part Time', count: 3 },
    { id: 'contract', name: 'Contract', count: 2 }
  ];
const openPositions = [;
    {
id: 1,;,
title: "Senior AI Engineer",;,
department: "ai",;,
location: "Remote / Middletown, DE",;,
type: "Full-time",;,
experience: "5+ years",;,
salary: "$120k - $180k",;,
description: "Join our AI team to develop cutting-edge machine learning models and autonomous systems...",;,
requirements: [
        "Advanced degree in Computer Science, AI, or related field",
        "Experience with PyTorch, TensorFlow, and modern ML frameworks",
        "Strong background in deep learning and neural networks",
        "Experience with cloud platforms (AWS, Azure, GCP)"
      ],;,
benefits: [
        "Competitive salary and equity",
        "Flexible remote work options",
        "Health, dental, and vision insurance",
        "Professional development budget"
      ],;,
urgent: true
    },
    {
id: 2,;,
title: "Cybersecurity Specialist",;,
department: "security",;,
location: "Middletown, DE",;,
type: "Full-time",;,
experience: "3+ years",;,
salary: "$90k - $130k",;,
description: "Help protect our clients' digital assets with advanced security solutions...",;,
requirements: [
        "Bachelor's degree in Cybersecurity or related field",
        "Experience with security tools and frameworks",
        "Knowledge of compliance standards (SOC2, ISO 27001)",
        "Strong analytical and problem-solving skills"
      ],;,
benefits: [
        "Competitive salary",
        "Health and wellness benefits",
        "Training and certification support",
        "Career growth opportunities"
      ],;,
urgent: false
    },
    {;
Award,;
GraduationCap,;
Clock,;
MapPin,;
DollarSign,;
CheckCircle,;
ArrowRight,;
Send,;
Star} from 'lucide-react';
import { Badge } from '../components/ui/badge';
import { Card } from '../components/ui/card';
import { Button } from '../components/ui/button';
import { Input } from '../components/ui/input';
import { Textarea } from '../components/ui/textarea';
import FuturisticNeonButton from '../components/ui/FuturisticNeonButton';;
import FuturisticAnimatedBackground from '../components/ui/FuturisticAnimatedBackground';;
import { SEO } from '../components/SEO';
const Careers: React.FC = () => {;
const [selectedDepartment, setSelectedDepartment] = useState<string>('all');
const [isApplying, setIsApplying] = useState<string | null>(null);
const departments = [;
}
    { id: 'all', name: 'All Departments', color: 'from-zion-cyan to-zion-blue' },
    { id: 'engineering', name: 'Engineering', color: 'from-purple-500 to-pink-500' },
    { id: 'ai', name: 'AI & ML', color: 'from-blue-500 to-cyan-500' },
    { id: 'design', name: 'Design', color: 'from-green-500 to-emerald-500' },
    { id: 'sales', name: 'Sales & Marketing', color: 'from-yellow-500 to-orange-500' },
    { id: 'operations', name: 'Operations', color: 'from-red-500 to-pink-500' }
import {;;
MapPin,;
Clock,;
Users,;
Building,;
Rocket,;
Brain,;
Shield,;
Cpu,;
Globe,;
Award,;
ArrowRight,;
Mail,;
Linkedin,;
ExternalLink,;
Filter} from 'lucide-react';
export default function Careers() {;
const [searchTerm, setSearchTerm] = useState('');
const [selectedDepartment, setSelectedDepartment] = useState('All');
const [selectedLocation, setSelectedLocation] = useState('All');
const departments = [;
    'All',
    'Engineering',
    'AI & Research',
    'Sales & Business Development',
    'Marketing',
    'Operations',
    'Customer Success',
    'Finance & Legal'
  ];
const locations = [;
    'All',
    'Remote',
    'Middletown, DE',
    'Silicon Valley, CA',
    'New York, NY',
    'Austin, TX',
    'Seattle, WA'
  ];
const jobOpenings = [;
    {
id: 1,;,
title: "Senior AI Research Scientist",;,
department: "AI & Machine Learning",;,
location: "Remote",;,
type: "Full-time",;,
experience: "5+ years",;,
salary: "$120,000 - $180,000",;,
description: "Lead cutting-edge research in autonomous AI systems and quantum neural networks.",;,
requirements: [
        "PhD in Computer Science, AI, or related field",
        "Strong background in machine learning and neural networks",
        "Experience with quantum computing concepts",
        "Published research in top-tier conferences"
      ],;,
responsibilities: [
        "Develop novel AI algorithms and architectures",
        "Lead research projects and mentor junior researchers",
        "Collaborate with cross-functional teams",
        "Publish research findings and patents"
      ],;,
benefits: [
        "Competitive salary and equity",
        "Flexible remote work options",
        "Professional development budget",
        "Health, dental, and vision insurance"
      ],;,
icon: Brain,;,
urgent: true,;,
postedDate: "2024-12-15"
}
    },
    {
id: 2,;,
title: "Quantum Computing Engineer",;,
department: "Quantum Technology",;,
location: "Remote",;,
type: "Full-time",;,
experience: "3+ years",;,
salary: "$100,000 - $150,000",;,
description: "Build and optimize quantum computing systems and quantum neural network platforms.",;,
requirements: [
        "MS/PhD in Physics, Computer Science, or Engineering",
        "Experience with quantum computing frameworks",
        "Knowledge of quantum algorithms and error correction",
        "Programming experience in Python, C++, or Q#"
      ],;,
responsibilities: [
        "Design and implement quantum algorithms",
        "Optimize quantum circuit performance",
        "Develop quantum software tools",
        "Collaborate with research teams"
      ],;,
benefits: [
        "Competitive salary and equity",
        "Remote work flexibility",
        "Conference attendance support",
        "Comprehensive benefits package"
      ],;,
icon: Atom,;,
urgent: false,;,
postedDate: "2024-12-12"
    },
    {
id: 3,;,
title: "Cybersecurity Architect",;,
department: "Cybersecurity",;,
location: "Middletown, DE",;,
type: "Full-time",;,
experience: "7+ years",;,
salary: "$130,000 - $200,000",;,
description: "Design and implement enterprise security solutions and SOC2 compliance automation.",;,
requirements: [
        "Bachelor's degree in Cybersecurity or related field",
        "CISSP, CISM, or similar certifications",
        "Experience with enterprise security architecture",
        "Knowledge of compliance frameworks (SOC2, ISO 27001)"
      ],;,
responsibilities: [
        "Design security architecture for enterprise systems",
        "Implement security controls and monitoring",
        "Lead security assessments and audits",
        "Develop security policies and procedures"
      ],;,
benefits: [
        "Competitive salary and benefits",
        "Hybrid work model",
        "Professional certification support",
        "Health and wellness programs"
      ],;,
icon: Shield,;,
urgent: true,;,
postedDate: "2024-12-10"
    },
    {
id: 4,;,
title: "DevOps Engineer",;,
department: "Cloud & DevOps",;,
location: "Remote",;,
type: "Full-time",;,
experience: "4+ years",;,
salary: "$90,000 - $140,000",;,
description: "Build and maintain cloud infrastructure and CI/CD pipelines for autonomous systems.",;,
requirements: [
        "Bachelor's degree in Computer Science or related field",
        "Experience with AWS, Azure, or GCP",
        "Knowledge of Docker, Kubernetes, and Terraform",
        "Experience with CI/CD tools and automation"
      ],;,
responsibilities: [
        "Design and implement cloud infrastructure",
        "Automate deployment and scaling processes",
        "Monitor system performance and reliability",
        "Collaborate with development teams"
      ],;,
benefits: [
        "Competitive salary and equity",
        "Remote work options",
        "Cloud certification support",
        "Flexible work hours"
      ],;,
icon: Cloud,;,
urgent: false,;,
postedDate: "2024-12-08"
    },
    {
id: 5,;,
title: "Full Stack Software Engineer",;,
department: "Software Engineering",;,
location: "New York, NY",;,
type: "Full-time",;,
experience: "3+ years",;,
salary: "$95,000 - $150,000",;,
description: "Develop innovative web applications and AI-powered business solutions.",;,
requirements: [
        "Bachelor's degree in Computer Science or related field",
        "Experience with React, Node.js, and Python",
        "Knowledge of cloud services and databases",
        "Experience with AI/ML integration"
      ],;,
responsibilities: [
        "Develop full-stack web applications",
        "Integrate AI services and APIs",
        "Optimize application performance",
        "Collaborate with product and design teams"
      ],;,
benefits: [
        "Competitive salary and benefits",
        "Office in NYC with hybrid options",
        "Professional development opportunities",
        "Team events and activities"
      ],;,
icon: Code,;,
urgent: false,;,
postedDate: "2024-12-05"
    },
    {
id: 6,;,
title: "AI Product Manager",;,
department: "AI & Machine Learning",;,
location: "Remote",;,
type: "Full-time",;,
experience: "5+ years",;,
salary: "$110,000 - $170,000",;,
description: "Lead product strategy and development for AI-powered business solutions.",;,
requirements: [
        "Bachelor's degree in Business, Engineering, or related field",
        "Experience in product management or AI product development",
        "Understanding of AI/ML technologies and market trends",
        "Strong analytical and communication skills"
      ],;,
responsibilities: [
        "Define product vision and strategy",
        "Gather and prioritize product requirements",
        "Work with engineering teams on product development",
        "Analyze market trends and competitive landscape"
      ],;,
benefits: [
        "Competitive salary and equity",
        "Remote work flexibility",
        "Product management training",
        "Comprehensive benefits package"
      ],;,
icon: Target,;,
urgent: false,;,
postedDate: "2024-12-03",
id: 3,;,
title: "Cloud Infrastructure Engineer",;,
department: "cloud",;,
location: "Remote",;,
type: "Full-time",;,
experience: "4+ years",;,
salary: "$100k - $150k",;,
description: "Design and implement scalable cloud solutions for enterprise clients...",;,
requirements: [
        "Experience with AWS, Azure, or Google Cloud",
        "Knowledge of Kubernetes and containerization",
        "Infrastructure as Code experience (Terraform, CloudFormation)",
        "Strong understanding of networking and security"
      ],;,
benefits: [
        "Remote work flexibility",
        "Competitive compensation",
        "Health benefits",
        "Professional development"
      ],;,
urgent: false
    },
    {
id: 4,;,
title: "Full Stack Developer",;,
department: "engineering",;,
location: "Hybrid (Middletown, DE)",;,
type: "Full-time",;,
experience: "3+ years",;,
salary: "$80k - $120k",;,
description: "Build modern web applications and contribute to our product development...",;,
requirements: [
        "Proficiency in React, Node.js, and modern JavaScript",
        "Experience with TypeScript and modern frameworks",
        "Knowledge of databases and API design",
        "Understanding of DevOps practices"
      ],;,
benefits: [
        "Competitive salary",
        "Hybrid work model",
        "Health benefits",
        "Learning and development"
      ],;,
urgent: false
    }
  ];
const companyValues = [;
    {
title: "Innovation First",;,
description: "We push boundaries and embrace cutting-edge technologies",;,
icon: Zap
    },
    {
title: "People Matter",;,
description: "Our team is our greatest asset and we invest in their growth",;,
icon: Heart
    },
    {
title: "Global Impact",;,
description: "We solve problems that affect businesses worldwide",;,
icon: Globe
    },
    {
title: "Continuous Learning",;,
description: "We foster a culture of curiosity and skill development",;,
icon: BookOpen
    }
  ];,
id: 1,;,
title: "Senior AI Research Engineer",;,
department: "ai-ml",;,
location: "remote",;,
type: "full-time",;,
experience: "5+ years",;,
description: "Lead cutting-edge AI research projects, develop autonomous systems, and push the boundaries of machine learning technology.",;,
requirements: [
        "PhD in Computer Science, AI, or related field",
        "5+ years experience in AI/ML research",
        "Expertise in deep learning, neural networks",
        "Experience with autonomous systems",
        "Strong publication record in top AI conferences"
      ],;,
responsibilities: [
        "Lead AI research initiatives and projects",
        "Develop novel machine learning algorithms",
        "Collaborate with cross-functional teams",
        "Mentor junior researchers",
        "Publish research findings"
      ],;,
benefits: [
        "Competitive salary + equity",
        "Flexible remote work",
        "Professional development budget",
        "Health, dental, vision insurance",
        "Unlimited PTO"
      ],;,
salary: "$150,000 - $200,000",;,
urgent: true,;,
postedDate: "2025-01-15"
    },
    {
id: 2,;,
title: "Quantum Software Engineer",;,
department: "quantum",;,
location: "remote",;,
type: "full-time",;,
experience: "3+ years",;,
description: "Build quantum computing applications and develop quantum algorithms for solving complex optimization problems.",;,
requirements: [
        "MS/PhD in Physics, Computer Science, or related field",
        "3+ years experience in quantum computing",
        "Proficiency in Python, Qiskit, or similar",
        "Understanding of quantum algorithms",
        "Experience with quantum error correction"
      ],;,
responsibilities: [
        "Develop quantum computing applications",
        "Implement quantum algorithms",
        "Optimize quantum circuits",
        "Collaborate with research team",
        "Document quantum software solutions"
      ],;,
benefits: [
        "Competitive salary + equity",
        "Remote work flexibility",
        "Quantum computing lab access",
        "Conference attendance",
        "Comprehensive benefits package"
      ],;,
salary: "$120,000 - $160,000",;,
urgent: false,;,
postedDate: "2025-01-12"
    },
    {
id: 3,;,
title: "Cybersecurity Architect",;,
department: "cybersecurity",;,
location: "remote",;,
type: "full-time",;,
experience: "7+ years",;,
description: "Design and implement enterprise-grade security solutions, ensuring compliance with SOC2 and other security standards.",;,
requirements: [
        "Bachelor's degree in Cybersecurity, IT, or related field",
        "7+ years in cybersecurity architecture",
        "Expertise in SOC2 compliance",
        "Experience with zero-trust security",
        "Knowledge of quantum-safe cryptography"
      ],;,
responsibilities: [
        "Design security architectures",
        "Implement security controls",
        "Ensure compliance standards",
        "Lead security assessments",
        "Mentor security team members"
      ],;,
benefits: [
        "Competitive salary + equity",
        "Remote work options",
        "Security certifications",
        "Professional development",
        "Health and wellness benefits"
      ],;,
salary: "$140,000 - $180,000",;,
urgent: true,;,
postedDate: "2025-01-10"
    },
    {
id: 4,;,
title: "Full Stack Developer",;,
department: "engineering",;,
location: "remote",;,
type: "full-time",;,
experience: "3+ years",;,
description: "Build scalable web applications and contribute to our platform development using modern technologies.",;,
requirements: [
        "Bachelor's degree in Computer Science or related field",
        "3+ years full-stack development experience",
        "Proficiency in React, Node.js, TypeScript",
        "Experience with cloud platforms (AWS/Azure)",
        "Knowledge of microservices architecture"
      ],;,
responsibilities: [
        "Develop web applications",
        "Write clean, maintainable code",
        "Collaborate with design and product teams",
        "Participate in code reviews",
        "Contribute to technical decisions"
      ],;,
benefits: [
        "Competitive salary + equity",
        "Remote work flexibility",
        "Latest development tools",
        "Learning and development budget",
        "Flexible work hours"
      ],;,
salary: "$90,000 - $130,000",;,
urgent: false,;,
postedDate: "2025-01-08"
    },
    {
id: 5,;,
title: "DevOps Engineer",;,
department: "engineering",;,
location: "remote",;,
type: "full-time",;,
experience: "4+ years",;,
description: "Build and maintain our cloud infrastructure, implement CI/CD pipelines, and ensure system reliability.",;,
requirements: [
        "Bachelor's degree in Computer Science or related field",
        "4+ years DevOps experience",
        "Expertise in AWS, Docker, Kubernetes",
        "Experience with CI/CD tools",
        "Knowledge of infrastructure as code"
      ],;,
responsibilities: [
        "Manage cloud infrastructure",
        "Implement CI/CD pipelines",
        "Monitor system performance",
        "Automate deployment processes",
        "Ensure system security"
      ],;,
benefits: [
        "Competitive salary + equity",
        "Remote work options",
        "Cloud certification budget",
        "Professional development",
        "Comprehensive benefits"
      ],;,
salary: "$100,000 - $140,000",;,
urgent: false,;,
postedDate: "2025-01-05"
    },
    {
id: 6,;,
title: "Business Development Manager",;,
department: "sales",;,
location: "remote",;,
type: "full-time",;,
experience: "5+ years",;,
description: "Drive business growth by identifying new opportunities, building partnerships, and expanding our market presence.",;,
requirements: [
        "Bachelor's degree in Business or related field",
        "5+ years in B2B sales or business development",
        "Experience in technology sales",
        "Strong networking skills",
        "Track record of meeting/exceeding targets"
      ],;,
responsibilities: [
        "Identify new business opportunities",
        "Build strategic partnerships",
        "Develop sales strategies",
        "Manage client relationships",
        "Achieve revenue targets"
      ],;,
benefits: [
        "Competitive base + commission",
        "Remote work flexibility",
        "Travel opportunities",
        "Professional development",
        "Performance bonuses"
      ],;,
salary: "$80,000 - $120,000 + commission",;,
urgent: false,;,
postedDate: "2025-01-03"
    }
  ];
const companyValues = [;
    {
title: "Innovation First",;,
description: "We push boundaries and embrace cutting-edge technologies",;,
icon: Rocket,;,
color: "from-blue-500 to-cyan-500"
    },
    {
title: "Excellence",;,
description: "We strive for the highest quality in everything we do",;,
icon: Star,;,
color: "from-yellow-500 to-orange-500"
    },
    {
title: "Collaboration",;,
description: "We believe in the power of diverse teams working together",;,
icon: Users2,;,
color: "from-green-500 to-emerald-500"
    },
    {
title: "Continuous Learning",;,
description: "We invest in growth and development at every level",;,
icon: BookOpen,;,
color: "from-purple-500 to-pink-500";
import React from 'react';;
import { Link} from 'react-router-dom';
export default function Careers() {;
const openPositions = [;
    {
}
title: 'Senior AI Engineer'},;,
department: 'AI & Machine Learning',;,
location: 'Remote / Middletown, DE',;,
type: 'Full-time',;,
experience: '5+ years',;,
description: 'Lead the development of cutting-edge AI solutions and autonomous systems.',;,
skills: ['Python', 'TensorFlow', 'PyTorch', 'MLOps', 'Cloud Platforms']
    },
    {
title: 'Cybersecurity Specialist',;,
department: 'Security',;,
location: 'Remote / Middletown, DE',;,
type: 'Full-time',;,
experience: '3+ years',;,
description: 'Protect our clients with advanced cybersecurity solutions and quantum-safe security.',;,
skills: ['Network Security', 'Penetration Testing', 'Compliance', 'Incident Response']
    },
    {
title: 'Full-Stack Developer',;,
department: 'Engineering',;,
location: 'Remote / Middletown, DE',;,
type: 'Full-time',;,
experience: '3+ years',;,
description: 'Build scalable web applications and microservices for our clients.',;,
skills: ['React', 'Node.js', 'Python', 'AWS', 'Docker']
    },
    {
title: 'Quantum Computing Researcher',;,
department: 'R&D',;,
location: 'Remote / Middletown, DE',;,
type: 'Full-time',;,
experience: 'PhD or 5+ years',;,
description: 'Pioneer quantum computing solutions and quantum-safe cryptography.',;,
skills: ['Quantum Algorithms', 'Qiskit', 'Quantum Cryptography', 'Research']
    },
    {
title: 'DevOps Engineer',;,
department: 'Infrastructure',;,
location: 'Remote / Middletown, DE',;,
type: 'Full-time',;,
experience: '3+ years',;,
description: 'Automate and optimize our cloud infrastructure and deployment pipelines.',;,
skills: ['AWS', 'Kubernetes', 'Terraform', 'CI/CD', 'Monitoring']
    },
    {
title: 'AI Solutions Architect',;,
department: 'Solutions',;,
location: 'Remote / Middletown, DE',;,
type: 'Full-time',;,
experience: '7+ years',;,
description: 'Design and implement AI solutions for enterprise clients.',;,
skills: ['Solution Architecture', 'AI/ML', 'Enterprise Integration', 'Consulting']
    }
  ];
const benefits = [;
    {
salary: '$90,000 - $140,000',;,
description: 'Build scalable web applications and contribute to our technology platform.',;,
requirements: [
        'Strong proficiency in React, Node.js, and TypeScript',
        'Experience with modern web technologies and APIs',
        'Knowledge of database design and optimization',
        'Understanding of DevOps and CI/CD practices',
        'Experience with cloud services and microservices'
      ],;,
benefits: [
        'Competitive salary with growth opportunities',
        'Remote-first work environment',
        'Latest tools and technology',
        'Collaborative team culture',
        'Career advancement paths'
      ]
    },
    {
id: 'ui-ux-designer',;,
title: 'Senior UI/UX Designer',;,
department: 'design',;,
location: 'Remote / Middletown, DE',;,
type: 'Full-time',;,
experience: '4+ years',;,
salary: '$85,000 - $130,000',;,
description: 'Create exceptional user experiences and beautiful interfaces for our products.',;,
requirements: [
        'Strong portfolio showcasing web and mobile design',
        'Expertise in Figma, Sketch, or similar tools',
        'Understanding of user research and testing',
        'Experience with design systems and component libraries',
        'Knowledge of accessibility and responsive design'
      ],;,
benefits: [
        'Creative freedom and ownership',
        'Latest design tools and resources',
        'Collaboration with cross-functional teams',
        'Professional development opportunities',
        'Competitive compensation package'
      ]
    },
    {
id: 'sales-director',;,
title: 'Sales Director',;,
department: 'sales',;,
location: 'Remote / Middletown, DE',;,
type: 'Full-time',;,
experience: '7+ years',;,
salary: '$100,000 - $150,000 + Commission',;,
description: 'Lead our sales strategy and drive revenue growth for enterprise clients.',;,
requirements: [
        'Proven track record in B2B technology sales',
        'Experience with enterprise software solutions',
        'Strong leadership and team management skills',
        'Understanding of complex sales cycles',
        'Excellent communication and presentation skills'
      ],;,
benefits: [
        'Uncapped commission structure',
        'Leadership development opportunities',
        'High-growth company environment',
        'Competitive base salary',
        'Performance-based bonuses'
      ]
    }
  ];
const filteredPositions = openPositions.filter(position => {;;
const matchesDepartment = selectedDepartment === 'all' || position.department === selectedDepartment;;
const matchesLocation = selectedLocation === 'all' || position.location === selectedLocation;;
const matchesType = selectedType === 'all' || position.type === selectedType;;
const matchesSearch = searchQuery === '' ||;;
position.title.toLowerCase().includes(searchQuery.toLowerCase()) ||;
position.description.toLowerCase().includes(searchQuery.toLowerCase());
return matchesDepartment && matchesLocation && matchesType && matchesSearch;
}
  });
const featuredPositions = filteredPositions.filter(position => position.featured);;
const regularPositions = filteredPositions.filter(position => !position.featured);;
const filteredJobs = jobOpenings.filter(job => {;;
const matchesDepartment = selectedDepartment === 'All' || job.department === selectedDepartment;;
const matchesLocation = selectedLocation === 'All' || job.location === selectedLocation;;
return matchesDepartment && matchesLocation;
}
  })
      {/* Hero Section */}
        <div className="absolute inset-0 bg-gradient-to-r from-zion-blue/20 to-zion-purple/20"></div>
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">;
Join Our Mission to
              <span className="text-gradient block">Transform the Future</span>
            <p className="text-xl text-zion-slate-light mb-8 leading-relaxed">;
Be part of a team that's pushing the boundaries of AI, quantum computing, and emerging technologies.;
Help us build solutions that transform businesses and shape the future of technology.
                <span className="text-white">24 Open Positions</span>
                <span className="text-white">Remote & Hybrid Options</span>
                <span className="text-white">Competitive Benefits</span>
            </div>;
return (;
      {/* Hero Section */}
      {/* Hero Section */}
        <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 to-blue-500/10"></div>
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">;
Join Our Mission to
                {" "}Transform the Future
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">;
Be part of a team that's pushing the boundaries of AI, quantum technology, and cybersecurity.;
Help us build solutions that will shape the future of business and technology.
            
            {/* Search Bar */}
type="text";
placeholder="Search for jobs, departments, or skills...";
value={searchQuery}
                onChange={(e) =>
  </input> setSearchQuery(e.target.value)}
                className="w-full pl-12 pr-4 py-4 bg-gray-800/50 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
              />

              <$2 />;
to="/contact";
className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold rounded-lg hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 transform hover:scale-105"
              >;
Apply Now
              <$2 />;
to="/about";
className="inline-flex items-center px-8 py-4 border-2 border-cyan-500/30 text-cyan-400 font-semibold rounded-lg hover:bg-cyan-500/10 transition-all duration-300"
              >;
Learn About Us
initial={{ opacity: 0}}, y: 20 }}
            animate={{ opacity: 1}}, y: 0 }}
            transition={{ duration: 0.6}}}
          >
              <Briefcase className="w-4 h-4 mr-2" />;
Join Our Team
            <h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent mb-6">;
Build the Future with Us
            <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed mb-8">;
Join our team of innovators, researchers, and technology leaders who are shaping the future of AI, quantum computing, and enterprise technology.
            
            {/* Search Bar */}
type="text";
placeholder="Search for positions, skills, or keywords...";
value={searchQuery}
                  onChange={(e) =>
  </input> setSearchQuery(e.target.value)}
                  className="w-full pl-12 pr-4 py-4 bg-gray-800/50 border border-gray-700/50 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:border-cyan-500/50 focus:ring-2 focus:ring-cyan-500/20"
                />

      {/* Filters Section */}
            {/* Departments */}
              {departments.map((dept) => (
                <$2 />;
key={dept.id}
                  onClick={() => setSelectedDepartment(dept.id)}
                  className={`flex items-center px-4 py-2 rounded-lg border transition-all duration-300 ${};
selectedDepartment === dept.id
                      ? 'bg-cyan-500/20 border-cyan-500/50 text-cyan-400'
                      : 'bg-gray-800/50 border-gray-700/50 text-gray-300 hover:border-cyan-500/30'}`}
                >
                  {dept.name}
                    {dept.count}
              ))}

            {/* Locations & Types */}
              {locations.map((location) => (
                <$2 />;
key={location.id}
                  onClick={() => setSelectedLocation(location.id)}
                  className={`px-3 py-1 rounded-full text-sm border transition-all duration-300 ${};
selectedLocation === location.id
                      ? 'bg-cyan-500/20 border-cyan-500/50 text-cyan-400'
                      : 'bg-gray-800/50 border-gray-700/50 text-gray-300 hover:border-cyan-500/30'}`}
                >
                  {location.name}
                  <span className="ml-1 text-xs opacity-75">({location.count})</span>
              ))}
              {jobTypes.map((type) => (
                <$2 />;
key={type.id}
                  onClick={() => setSelectedType(type.id)}
                  className={`px-3 py-1 rounded-full text-sm border transition-all duration-300 ${};
selectedType === type.id
                      ? 'bg-cyan-500/20 border-cyan-500/50 text-cyan-400'
                      : 'bg-gray-800/50 border-gray-700/50 text-gray-300 hover:border-cyan-500/30'}`}
                >
                  {type.name}
                  <span className="ml-1 text-xs opacity-75">({type.count})</span>
              ))}
            </div>;
import { Link } from 'react-router-dom';
import {;;
Users,;
Zap,;
Globe,;
Heart,;
Award,;
BookOpen,;
Briefcase,;
MapPin,;
Clock,;
DollarSign,;
Send,;
CheckCircle} from 'lucide-react';
const Careers = () => {;;
const [selectedDepartment, setSelectedDepartment] = useState<string>('all');
const [searchTerm, setSearchTerm] = useState<string>('');
const departments = [;
    'all',
    'Engineering',
    'Design',
    'Product',
    'Sales',
    'Marketing',
    'Operations',
    'AI & ML'
  ];
const jobListings = [;
    {
id: 1,;,
title: 'Senior Full Stack Developer',;,
department: 'Engineering',;,
location: 'Remote / Middletown, DE',;,
type: 'Full-time',;,
experience: '5+ years',;,
salary: '$120k - $180k',;,
description: 'We\'re looking for a Senior Full Stack Developer to join our growing engineering team. You\'ll work on cutting-edge projects using modern technologies like React, Node.js, and cloud platforms.',;,
requirements: [
        'Strong experience with React, Node.js, and TypeScript',
        'Experience with cloud platforms (AWS, Azure, or GCP)',
        'Knowledge of microservices architecture',
        'Experience with CI/CD pipelines and DevOps practices',
        'Strong problem-solving and communication skills'
      ],;,
benefits: [
        'Competitive salary and equity',
        'Flexible remote work options',
        'Health, dental, and vision insurance',
        'Professional development budget',
        'Unlimited PTO'
      ]
}
    },
    {
id: 2,;,
title: 'AI/ML Engineer',;,
department: 'AI & ML',;,
location: 'Remote / Middletown, DE',;,
type: 'Full-time',;,
experience: '3+ years',;,
salary: '$130k - $200k',;,
description: 'Join our AI team to develop cutting-edge machine learning models and AI solutions that transform businesses. Work on projects involving computer vision, NLP, and predictive analytics.',;,
requirements: [
        'MS/PhD in Computer Science, ML, or related field',
        'Experience with PyTorch, TensorFlow, or similar frameworks',
        'Strong Python programming skills',
        'Experience with MLOps and model deployment',
        'Knowledge of cloud ML platforms'
      ],;,
benefits: [
        'Competitive salary and equity',
        'Access to latest AI/ML tools and infrastructure',
        'Conference attendance and research opportunities',
        'Health, dental, and vision insurance',
        'Flexible work arrangements'
      ]
    },
    {
id: 3,;,
title: 'UX/UI Designer',;,
department: 'Design',;,
location: 'Remote / Middletown, DE',;,
type: 'Full-time',;,
experience: '3+ years',;,
salary: '$90k - $140k',;,
description: 'Create beautiful and intuitive user experiences for our products. Work closely with product managers and engineers to design solutions that users love.',;,
requirements: [
        'Strong portfolio showcasing web and mobile design work',
        'Experience with Figma, Sketch, or similar tools',
        'Understanding of user research and usability principles',
        'Experience with design systems and component libraries',
        'Collaboration with cross-functional teams'
      ],;,
benefits: [
        'Competitive salary and equity',
        'Latest design tools and software',
        'Creative freedom and ownership',
        'Health, dental, and vision insurance',
        'Professional development opportunities'
      ]
    },
    {
id: 4,;,
title: 'DevOps Engineer',;,
department: 'Engineering',;,
location: 'Remote / Middletown, DE',;,
type: 'Full-time',;,
experience: '4+ years',;,
salary: '$110k - $160k',;,
description: 'Build and maintain our cloud infrastructure, CI/CD pipelines, and deployment processes. Help us scale our systems and ensure high availability.',;,
requirements: [
        'Experience with AWS, Azure, or GCP',
        'Knowledge of Kubernetes and containerization',
        'Experience with Terraform or CloudFormation',
        'Strong scripting skills (Python, Bash)',
        'Experience with monitoring and logging tools'
      ],;,
benefits: [
        'Competitive salary and equity',
        'Latest cloud tools and certifications',
        'Flexible remote work options',
        'Health, dental, and vision insurance',
        'Professional development budget'
      ]
    },
    {
id: 5,;,
title: 'Product Manager',;,
department: 'Product',;,
location: 'Remote / Middletown, DE',;,
type: 'Full-time',;,
experience: '4+ years',;,
salary: '$100k - $150k',;,
description: 'Drive product strategy and execution for our AI-powered solutions. Work with customers, stakeholders, and engineering teams to deliver exceptional products.',;,
requirements: [
        'Experience in B2B SaaS product management',
        'Strong analytical and strategic thinking',
        'Experience with agile development methodologies',
        'Excellent communication and stakeholder management',
        'Technical background or strong technical aptitude'
      ],;,
benefits: [
        'Competitive salary and equity',
        'Product ownership and strategic impact',
        'Customer interaction and market research',
        'Health, dental, and vision insurance',
        'Professional development opportunities'
      ]
    }
  ];
const filteredJobs = jobListings.filter(job => {;;
const matchesDepartment = selectedDepartment === 'all' || job.department === selectedDepartment;;
const matchesSearch = job.title.toLowerCase().includes(searchTerm.toLowerCase()) ||;;
job.description.toLowerCase().includes(searchTerm.toLowerCase()) ||;
job.department.toLowerCase().includes(searchTerm.toLowerCase());
return matchesDepartment && matchesSearch;
}
  });
const companyValues = [;
    {
icon: Zap,;,
title: 'Innovation First',;,
description: 'We constantly push boundaries and explore new technologies to solve complex problems.'
    },
    {
icon: Users,;,
title: 'Collaboration',;,
description: 'Great ideas come from diverse teams working together towards common goals.'
    },
    {
icon: Heart,;,
title: 'Customer Focus',;,
description: 'Everything we do is driven by our commitment to customer success.';
const filteredJobs = selectedDepartment === 'all'; 
    ? jobOpenings 
    : jobOpenings.filter(job => job.department === selectedDepartment);
const companyValues = [;
    {,
icon: Heart,;,
title: 'People First',;,
description: 'We believe our team is our greatest asset and invest in their growth and well-being.',;,
color: 'from-red-500 to-pink-500'
    },
    {
icon: Zap,;,
title: 'Innovation Driven',;,
description: 'We constantly push boundaries and embrace new technologies to solve complex problems.',;,
color: 'from-yellow-500 to-orange-500'
    },
    {
icon: Globe,;,
title: 'Global Impact',;,
id: 1,;,
title: "Senior AI Engineer",;,
department: "AI & Research",;,
location: "Remote",;,
type: "Full-time",;,
experience: "5+ years",;,
description: "Join our AI team to develop cutting-edge autonomous systems and machine learning solutions.",;,
requirements: [
        "Advanced degree in Computer Science, AI, or related field",
        "Experience with PyTorch, TensorFlow, and modern ML frameworks",
        "Knowledge of autonomous systems and reinforcement learning",
        "Strong software engineering principles and practices"
      ],;,
responsibilities: [
        "Design and implement AI algorithms for autonomous systems",
        "Collaborate with research team on innovative ML approaches",
        "Optimize model performance and scalability",
        "Mentor junior engineers and contribute to technical decisions"
      ],;,
benefits: [
        "Competitive salary and equity package",
        "Flexible remote work options",
        "Professional development and conference attendance",
        "Health, dental, and vision insurance"
      ],;,
featured: true,;,
postedDate: "2025-01-20"
    },
    {
id: 2,;,
title: "Quantum Computing Researcher",;,
department: "AI & Research",;,
location: "Silicon Valley, CA",;,
type: "Full-time",;,
experience: "3+ years",;,
description: "Research and develop quantum computing algorithms and applications for enterprise solutions.",;,
requirements: [
        "PhD in Physics, Computer Science, or related field",
        "Experience with quantum computing platforms (IBM Q, Rigetti)",
        "Knowledge of quantum algorithms and quantum machine learning",
        "Strong mathematical and analytical skills"
      ],;,
responsibilities: [
        "Research quantum computing applications for business problems",
        "Develop quantum algorithms and optimization techniques",
        "Collaborate with academic and industry partners",
        "Publish research findings and present at conferences"
      ],;,
benefits: [
        "Competitive salary and equity package",
        "Access to state-of-the-art quantum computing resources",
        "Academic collaboration opportunities",
        "Comprehensive benefits package"
      ],;,
featured: true,;,
postedDate: "2025-01-18"
    },
    {
id: 3,;,
title: "Senior Full-Stack Developer",;,
department: "Engineering",;,
location: "Remote",;,
type: "Full-time",;,
experience: "4+ years",;,
description: "Build scalable web applications and microservices for our AI-powered platform.",;,
requirements: [
        "Strong experience with React, Node.js, and TypeScript",
        "Experience with cloud platforms (AWS, Azure, GCP)",
        "Knowledge of microservices architecture and DevOps practices",
        "Experience with database design and optimization"
      ],;,
responsibilities: [
        "Develop and maintain web applications and APIs",
        "Implement responsive and accessible user interfaces",
        "Collaborate with design and product teams",
        "Participate in code reviews and technical planning"
      ],;,
benefits: [
        "Competitive salary and equity package",
        "Remote work flexibility",
        "Professional development opportunities",
        "Health and wellness benefits"
      ],;,
featured: false,;,
postedDate: "2025-01-15"
    },
    {
id: 4,;,
title: "Cybersecurity Engineer",;,
department: "Engineering",;,
location: "Middletown, DE",;,
type: "Full-time",;,
experience: "3+ years",;,
description: "Ensure the security and compliance of our AI platforms and client solutions.",;,
requirements: [
        "Experience with security frameworks and compliance standards",
        "Knowledge of threat detection and incident response",
        "Experience with security tools and penetration testing",
        "Understanding of AI security challenges and solutions"
      ],;,
responsibilities: [
        "Implement security controls and monitoring systems",
        "Conduct security assessments and penetration testing",
        "Develop security policies and procedures",
        "Respond to security incidents and threats"
      ],;,
benefits: [
        "Competitive salary and equity package",
        "On-site and hybrid work options",
        "Security training and certifications",
        "Comprehensive benefits package"
      ],;,
featured: false,;,
postedDate: "2025-01-12"
    },
    {
id: 5,;,
title: "Business Development Manager",;,
department: "Sales & Business Development",;,
location: "New York, NY",;,
type: "Full-time",;,
experience: "5+ years",;,
description: "Drive business growth by identifying and developing strategic partnerships and opportunities.",;,
requirements: [
        "Experience in B2B sales and business development",
        "Knowledge of AI, cybersecurity, or enterprise technology",
        "Strong relationship-building and negotiation skills",
        "Experience with enterprise sales cycles"
      ],;,
responsibilities: [
        "Identify and pursue new business opportunities",
        "Build and maintain client relationships",
        "Develop strategic partnerships and alliances",
        "Achieve sales targets and business objectives"
      ],;,
benefits: [
        "Competitive salary and commission structure",
        "Travel and entertainment budget",
        "Professional development opportunities",
        "Health and wellness benefits"
      ],;,
featured: false,;,
postedDate: "2025-01-10"
    },
    {
id: 6,;,
title: "Product Marketing Manager",;,
department: "Marketing",;,
location: "Remote",;,
type: "Full-time",;,
experience: "4+ years",;,
description: "Develop and execute marketing strategies for our AI and technology solutions.",;,
requirements: [
        "Experience in B2B technology marketing",
        "Knowledge of AI, cybersecurity, or enterprise technology",
        "Strong analytical and creative skills",
        "Experience with digital marketing and content creation"
      ],;,
responsibilities: [
        "Develop product positioning and messaging",
        "Create marketing campaigns and content",
        "Analyze market trends and competitive landscape",
        "Collaborate with sales and product teams"
      ],;,
benefits: [
        "Competitive salary and equity package",
        "Remote work flexibility",
        "Marketing tools and resources",
        "Professional development opportunities"
      ],;,
featured: false,;,
postedDate: "2025-01-08"
    },
    {
id: 7,;,
title: "Customer Success Manager",;,
department: "Customer Success",;,
location: "Austin, TX",;,
type: "Full-time",;,
experience: "3+ years",;,
description: "Ensure customer satisfaction and success with our AI-powered solutions.",;,
requirements: [
        "Experience in customer success or account management",
        "Knowledge of AI, cybersecurity, or enterprise technology",
        "Strong communication and problem-solving skills",
        "Experience with customer success platforms and tools"
      ],;,
responsibilities: [
        "Manage customer relationships and success metrics",
        "Onboard new customers and provide training",
        "Identify upsell and expansion opportunities",
        "Gather customer feedback and drive product improvements"
      ],;,
benefits: [
        "Competitive salary and equity package",
        "Hybrid work options",
        "Customer success tools and resources",
        "Professional development opportunities"
      ],;,
featured: false,;,
postedDate: "2025-01-05"
    },
    {
id: 8,;,
title: "DevOps Engineer",;,
department: "Engineering",;,
location: "Seattle, WA",;,
type: "Full-time",;,
experience: "3+ years",;,
description: "Build and maintain our cloud infrastructure and deployment pipelines.",;,
requirements: [
        "Experience with cloud platforms (AWS, Azure, GCP)",
        "Knowledge of containerization and orchestration (Docker, Kubernetes)",
        "Experience with CI/CD pipelines and automation",
        "Understanding of infrastructure as code principles"
      ],;,
responsibilities: [
        "Design and implement cloud infrastructure",
        "Automate deployment and scaling processes",
        "Monitor system performance and reliability",
        "Collaborate with development and operations teams"
      ],;,
benefits: [
        "Competitive salary and equity package",
        "On-site and hybrid work options",
        "Cloud training and certifications",
        "Comprehensive benefits package"
      ],;,
featured: false,;,
postedDate: "2025-01-03"
    }
  ];
const filteredJobs = jobOpenings.filter(job => {;;
const matchesSearch = job.title.toLowerCase().includes(searchTerm.toLowerCase()) ||;;
job.description.toLowerCase().includes(searchTerm.toLowerCase()) ||;
job.department.toLowerCase().includes(searchTerm.toLowerCase());
const matchesDepartment = selectedDepartment === 'All' || job.department === selectedDepartment;;
const matchesLocation = selectedLocation === 'All' || job.location === selectedLocation;;
return matchesSearch && matchesDepartment && matchesLocation;
}
  });
const featuredJobs = filteredJobs.filter(job => job.featured);;
const regularJobs = filteredJobs.filter(job => !job.featured);;
const formatDate = (dateString: string) => {;;
const date = new Date(dateString);;
return date.toLocaleDateString('en-US', {
year: 'numeric',;,
month: 'long',;,
day: 'numeric' 
}
    })
  }
  const companyValues = [;
    {
title: "Innovation First",;,
description: "We push the boundaries of what's possible with cutting-edge technology",;,
icon: Rocket
    },
    {
title: "Excellence",;,
description: "We deliver the highest quality solutions and exceptional service",;,
icon: Award
    },
    {
title: "Collaboration",;,
description: "We work together to achieve extraordinary results for our clients",;,
icon: Users
    },
    {
title: "Integrity",;,
description: "We maintain the highest ethical standards in all our interactions",;,
icon: Shield
    }
  ];
const benefits = [;
    {
icon: '🚀',;,
title: 'Innovation First',;,
description: 'Work on cutting-edge AI and quantum technologies'
    },
    {
icon: '🌍',;,
title: 'Remote First',;,
description: 'Work from anywhere with flexible schedules'
    },
    {
icon: '📚',;,
title: 'Continuous Learning',;,
description: 'Access to courses, conferences, and training programs'
    },
    {
icon: '💼',;,
title: 'Career Growth',;,
description: 'Clear career paths and advancement opportunities'
    },
    {
icon: '🏥',;,
title: 'Health & Wellness',;,
description: 'Comprehensive health insurance and wellness programs'
    },
    {
icon: '💰',;,
title: 'Competitive Pay',;,
description: 'Above-market salaries with equity options';
import React from 'react';;
import { Link} from 'react-router-dom';
import {;;
Users,;
Briefcase,;
MapPin,;
Clock,;
Star,;
Zap,;
CheckCircle,;
ArrowRight,;
Globe,;
Heart,;
Target,;
TrendingUp,;
Award} from 'lucide-react';
const Careers = () => {;;
const openPositions = [;
    {
}
title: "Senior AI Engineer"},;,
department: "Artificial Intelligence",;,
location: "Remote / Wilmington, DE",;,
type: "Full-time",;,
experience: "5+ years",;,
description: "Lead development of cutting-edge AI solutions and machine learning models for enterprise clients.",;,
skills: ["Python", "TensorFlow", "PyTorch", "MLOps", "Cloud Platforms"]
    },
    {
title: "Cloud Solutions Architect",;,
department: "Cloud & DevOps",;,
location: "Remote / Wilmington, DE",;,
type: "Full-time",;,
experience: "7+ years",;,
description: "Design and implement scalable cloud infrastructure solutions for enterprise applications.",;,
skills: ["AWS", "Azure", "Kubernetes", "Terraform", "CI/CD"]
    },
    {
title: "Cybersecurity Specialist",;,
department: "Security",;,
location: "Remote / Wilmington, DE",;,
type: "Full-time",;,
experience: "4+ years",;,
description: "Protect client systems and data through advanced security measures and threat detection.",;,
skills: ["Penetration Testing", "SIEM", "Compliance", "Incident Response"]
    },
    {
title: "Full Stack Developer",;,
department: "Web Development",;,
location: "Remote / Wilmington, DE",;,
type: "Full-time",;,
experience: "3+ years",;,
description: "Build modern, responsive web applications using cutting-edge technologies.",;,
skills: ["React", "Node.js", "TypeScript", "PostgreSQL", "Docker"]
    },
    {
title: "Data Scientist",;,
department: "Data Analytics",;,
location: "Remote / Wilmington, DE",;,
type: "Full-time",;,
experience: "4+ years",;,
description: "Transform raw data into actionable insights for business decision-making.",;,
skills: ["Python", "R", "SQL", "Tableau", "Machine Learning"]
    },
    {
title: "DevOps Engineer",;,
department: "Cloud & DevOps",;,
location: "Remote / Wilmington, DE",;,
type: "Full-time",;,
experience: "3+ years",;,
description: "Automate and optimize development and deployment processes.",;,
skills: ["Docker", "Kubernetes", "Jenkins", "Ansible", "Monitoring"]
    }
  ];
const benefits = [;
    {
icon: "🏠",;,
title: "Remote First",;,
description: "Work from anywhere with flexible remote work options"
    },
    {
icon: "💰",;,
title: "Competitive Salary",;,
description: "Attractive compensation packages with equity options"
    },
    {
icon: "🏥",;,
title: "Health Benefits",;,
description: "Comprehensive health, dental, and vision coverage"
    },
    {
icon: "📚",;,
title: "Learning & Development",;,
description: "Continuous learning opportunities and skill development"
    },
    {
icon: "🎯",;,
title: "Career Growth",;,
description: "Clear career progression paths and mentorship"
    },
    {
icon: "🎉",;,
title: "Team Events",;,
description: "Regular team building and social activities"
    }
  ];
const values = [;
    {
icon: "🚀",;,
title: "Innovation",;,
description: "We push boundaries and embrace new technologies"
    },
    {
icon: "🤝",;,
title: "Collaboration",;,
description: "Teamwork and knowledge sharing drive our success"
    },
    {
icon: "💡",;,
title: "Excellence",;,
description: "We strive for quality in everything we do",
title: "Competitive Compensation",;,
description: "Attractive salary packages with equity options",;,
icon: Award
    },
    {
title: "Flexible Work",;,
description: "Remote and hybrid work options for work-life balance",;,
icon: Globe
    },
    {
title: "Professional Growth",;,
description: "Continuous learning and career development opportunities",;,
icon: Brain
    },
    {
title: "Health & Wellness",;,
description: "Comprehensive health, dental, and vision coverage",;,
icon: Shield
    }
  ];
return (;
    <>
title="Careers at Zion - Join Our Team";
description="Join the team building the future of AI and technology. Explore career opportunities at Zion's innovative marketplace platform."
    
title="Careers at Zion - Join Our Team";
description="Join the team building the future of AI and technology. Explore career opportunities at Zion's innovative marketplace platform.";
keywords="Zion careers, AI jobs, tech careers, remote work, startup jobs";
canonical="https://ziontechgroup.com/careers"
      />
            <h1 className="text-5xl md:text-6xl font-bold mb-6">;
Join Our Team
            <p className="text-xl md:text-2xl text-zion-slate-light mb-8 leading-relaxed">;
Build the future of technology with us. Join a team of innovators,;
problem-solvers, and visionaries transforming businesses worldwide.
              <$2 />;
href="#open-positions";
className="inline-flex items-center px-8 py-3 bg-zion-cyan text-white font-semibold rounded-lg hover:bg-zion-cyan-light transition-colors"
              >;
View Open Positions
              <$2 />;
to="/contact";
className="inline-flex items-center px-8 py-3 border-2 border-white text-white font-semibold rounded-lg hover:bg-white hover:text-zion-blue-dark transition-colors"
              >;
Contact Us

      {/* Company Values */}
            <h2 className="text-3xl md:text-4xl font-bold mb-4">;
Our Values
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">;
These core principles guide everything we do and shape our company culture.
          
      {/* Header Section */}
          <h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent mb-6">;
Join Our Team
          <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">;
Help us build the future of AI and technology. Join a team of innovators, problem-solvers, and visionaries.
            <button className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-500 text-white rounded-lg font-medium hover:from-cyan-400 hover:to-blue-400 transition-all duration-300 transform hover:scale-105">;
View Open Positions
            <button className="px-8 py-4 border border-cyan-400 text-cyan-400 rounded-lg font-medium hover:bg-cyan-400/20 transition-all duration-300">;
Submit Application

      {/* Values Section */}
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">;
Our Values
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">;
The principles that guide everything we do

            {values.map((value), index) => (
                <h3 className="text-xl font-semibold text-cyan-400 mb-3">{value.title}</h3>
                <p className="text-gray-300">{value.description}</p>
            ))}
      {/* Benefits Section */}
          <h2 className="text-3xl font-bold text-white mb-4">Why Work With Us</h2>
          <p className="text-zion-slate-light text-lg">;
We invest in our people because they're our greatest asset

      {/* Job Openings */}
            <h2 className="text-3xl md:text-4xl font-bold mb-4">;
Open Positions
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">;
Find the perfect role for your skills and career goals.

          {/* Department Filter */}
            {departments.map((dept) => (
              <$2 />;
key={dept.id}
                onClick={() => setSelectedDepartment(dept.id)}
                className={`flex items-center space-x-2 px-4 py-2 rounded-lg border transition-all duration-200 ${};
selectedDepartment === dept.id
                    ? 'border-purple-500 bg-purple-500/20 text-purple-400'
                    : 'border-gray-700 text-gray-300 hover:border-purple-500/50 hover:text-purple-400'}`}
              >
                <span>{dept.name}</span>
                  {dept.count}
            ))}
              <h2 className="text-3xl font-bold text-white mb-6">Why Work at Zion?</h2>
              <p className="text-zion-slate-light text-lg mb-6">;
At Zion, we're not just building a marketplace; we're creating a new paradigm for how AI and;
technology are accessed, shared, and implemented globally.
              <p className="text-zion-slate-light text-lg mb-6">;
Our team is passionate about democratizing access to cutting-edge technology and connecting;
talented individuals with meaningful opportunities. We value innovation, collaboration, and;
impact in everything we do.
              <p className="text-zion-slate-light text-lg">;
If you're excited about shaping the future of AI and technology while working in a dynamic,;
remote-first environment with a mission-driven team, we'd love to meet you.
src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=800&h=600";
alt="Team collaboration";
className="object-cover w-full h-full"
              />
          
            {filteredJobs.map((job) => (
                      <h3 className="text-2xl font-bold">{job.title}</h3>
                      {job.urgent && (
                        <span className="px-3 py-1 bg-red-500/20 text-red-400 text-sm rounded-full border border-red-500/30">;
                      )}
                        <span>{departments.find(d => d.id === job.department)?.name}</span>
                        <span>{job.location}</span>
                        <span>{job.type}</span>
                        <span>{job.experience}</span>
                        <span>{job.salary}</span>
                  <$2 />;
to={`/careers/${job.id}}`}
                    className="px-6 py-3 bg-gradient-to-r from-purple-500 to-pink-600 text-white font-semibold rounded-lg hover:from-purple-600 hover:to-pink-700 transition-all duration-200 flex items-center justify-center space-x-2"
                  >
                    <span>Apply Now</span>
                
                <p className="text-gray-300 mb-4">{job.description}</p>
                
                    <h4 className="font-semibold mb-3 text-purple-400">Requirements</h4>
                      {job.requirements.map((req), idx) => (
                          <span className="text-gray-300 text-sm">{req}</span>
                      ))}
            <h2 className="text-4xl font-bold text-white mb-4">;
Our Values
            <p className="text-xl text-gray-300">;
The principles that guide everything we do
          
            {companyValues.map((value), index) => (
              <$2 />;
key={index}
                className="text-center p-6 bg-gray-800/50 rounded-xl border border-gray-700 hover:border-cyan-500/50 transition-all duration-300 hover:bg-gray-800/70"
              >
                <h3 className="text-lg font-semibold text-white mb-2">{value.title}</h3>
                <p className="text-gray-300 text-sm">{value.description}</p>
            ))}

      {/* Benefits Section */}
            <h2 className="text-4xl font-bold text-white mb-4">;
Why Work With Us?
            <p className="text-xl text-gray-300">;
We invest in our people because they're our greatest asset

            {benefits.map((category), index) => (
              <$2 />;
key={index}
                className="bg-gray-800/50 rounded-xl border border-gray-700 p-6"
              >
                <h3 className="text-xl font-semibold text-white mb-4">{category.category}</h3>
                  {category.items.map((item), itemIndex) => (
                      <span className="text-gray-300">{item.name}</span>
                  ))}
      {/* Company Culture */}
            <h2 className="text-4xl font-bold text-zion-blue-dark mb-4">;
Why Work at Zion Tech Group?
            <p className="text-xl text-zion-slate max-w-3xl mx-auto">;
We're building more than just technology - we're building a culture;
of innovation, collaboration, and continuous growth.
            {companyValues.map((value), index) => (
                  {value.title}
                  {value.description}
            ))}

      {/* Featured Positions */}
      {featuredPositions.length > 0 && (
              <h2 className="text-3xl font-bold text-white mb-4">Featured Positions</h2>
              <p className="text-gray-300">High-priority roles with immediate openings</p>
            
              {featuredPositions.map((position)}, index) => (
key={position.id}
                  initial={{ opacity: 0}}, y: 20 }}
                  animate={{ opacity: 1}}, y: 0 }}
                  transition={{ duration: 0.6}}, delay: index * 0.1 }}
                  className="bg-gray-800/50 backdrop-blur-sm rounded-2xl border border-gray-700/50 overflow-hidden hover:border-cyan-500/50 transition-all duration-300 hover:transform hover:scale-105"
                >
                  
                      <span className="px-3 py-1 bg-cyan-500/20 text-cyan-400 text-sm rounded-full border border-cyan-500/30">;
                      <span className="text-gray-400 text-sm capitalize">{position.department}</span>
                    
                      {position.title}
                    
                      {position.description}
                    
                          {locations.find(l => l.id === position.location)?.name}
                          {position.experience}
                          {position.applications} applications
                    
                      <h4 className="font-semibold text-gray-300 mb-2">Key Requirements:</h4>
                        {position.requirements.slice(0, 3).map((req), idx) => (
      {/* Benefits */}
            <h2 className="text-4xl font-bold text-zion-blue-dark mb-4">;
Benefits & Perks
            <p className="text-xl text-zion-slate max-w-3xl mx-auto">;
We believe in taking care of our team. Here's what we offer to support;
your professional and personal growth.
            {benefits.map((benefit), index) => (
                  {benefit.title}
                  {benefit.description}

      {/* Benefits Section */}
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">;
Why Work With Us
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">;
We offer more than just a job - we offer a career with purpose

            {benefits.map((benefit), index) => (
                <div className="text-4xl mb-4">{benefit.icon}</div>
                <h3 className="text-xl font-semibold text-white mb-3">{benefit.title}</h3>
                <p className="text-gray-300">{benefit.description}</p>
            ))}
                      <h4 className="font-semibold text-zion-blue-dark mb-2">Benefits:</h4>
                        {job.benefits.map((benefit), index) => (
                            <div className="w-1.5 h-1.5 bg-zion-cyan rounded-full mr-2 mt-2 flex-shrink-0"></div>
                            {benefit}
                        ))}
              ))
            )}
title="Careers - Join Zion Tech Group";
description="Join our team and help build the future of technology. Explore career opportunities at Zion Tech Group.";
keywords="careers, jobs, Zion Tech Group, employment, tech jobs, AI jobs";
canonical="https://ziontechgroup.com/careers"
      />

      {/* Hero Section */}
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">;
Join Our <span className="text-zion-cyan">Team</span>
          <p className="text-xl text-zion-slate-light max-w-3xl mx-auto mb-8">;
Help us build the future of technology. We're looking for passionate,;
innovative minds to join our mission.
            <a href="#open-positions">View Open Positions</a>

      {/* Why Work With Us */}
          <h2 className="text-3xl font-bold text-white text-center mb-16">Why Work With Us?</h2>
            {benefits.map((benefit), index) => (
                    {benefit.icon}
                  <CardTitle className="text-zion-cyan">{benefit.title}</CardTitle>
                    {benefit.description}
            ))}


      {/* Open Positions */}
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">;
Open Positions
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">;
Find your next opportunity to make a difference

    "Innovation at the core of everything we do",
    "Customer success drives our decisions",
    "Continuous learning and improvement",
    "Diversity and inclusion in all aspects",
    "Ethical AI development and deployment",
    "Collaboration and teamwork excellence"
  ];
return (;
      {/* Hero Section */}
              <h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">;
Join Our Team
            <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto mb-8">;
Help us build the future of AI and technology. Join a team of innovators, problem-solvers, and visionaries.
              <button className="px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-500 text-white font-semibold rounded-lg hover:from-blue-400 hover:to-purple-400 transition-all duration-300 transform hover:scale-105">;
View Open Positions
              <button className="px-8 py-4 border border-blue-400/50 text-blue-400 font-semibold rounded-lg hover:bg-blue-400/20 transition-all duration-300">;
Learn About Culture
        
        {/* Background Elements */}
          <div className="absolute top-20 left-10 w-2 h-2 bg-blue-400 rounded-full animate-ping"></div>
          <div className="absolute top-40 right-20 w-3 h-3 bg-purple-400 rounded-full animate-pulse"></div>
          <div className="absolute bottom-20 left-1/4 w-1 h-1 bg-blue-400 rounded-full animate-bounce"></div>

      {/* Values Section */}
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">;
Our Values & Culture
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">;
We're building more than technology - we're building a culture of innovation, collaboration, and growth
          
            {values.map((value), index) => (
                <span className="text-gray-300 text-lg">{value}</span>
            ))}

      {/* Benefits Section */}
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">;
Why Work With Us?
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">;
We offer competitive benefits and a supportive environment where you can thrive and grow
          
            {benefits.map((benefit), index) => {;
const Icon = benefit.icon;;
return (;
}
                  <h3 className="text-xl font-semibold text-white mb-4">{benefit.title}</h3>
                  <p className="text-gray-300">{benefit.description}</p>
              )
            })}

      {/* Open Positions Section */}
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">;
Open Positions
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">;
Join our team and help shape the future of AI and technology
          
            {openPositions.map((position), index) => (
                  <h3 className="text-xl font-semibold text-white">{position.title}</h3>
                    {position.type}
                
                      <span>{position.department}</span>
                      <span>{position.location}</span>
                      <span>{position.experience}</span>
                
                    <h4 className="font-semibold mb-3 text-purple-400">Benefits</h4>
                      {job.benefits.map((benefit), idx) => (
                          <span className="text-gray-300 text-sm">{benefit}</span>
title="Careers - Join Zion Tech Group";
description="Join our team of innovators and technology experts. Explore career opportunities at Zion Tech Group.";
keywords="careers, jobs, employment, Zion Tech Group, technology careers, remote jobs";
canonical="https://ziontechgroup.com/careers"
      />

      {/* Hero Section */}
initial={{ opacity: 0}}, y: 20 }}
            animate={{ opacity: 1}}, y: 0 }}
            transition={{ duration: 0.8}}}
            className="text-center"
          >
            <h1 className="text-4xl md:text-6xl font-bold mb-6 text-white">;
Join Our
              <span className="block bg-gradient-to-r from-zion-cyan to-zion-purple bg-clip-text text-transparent">;
            <p className="text-xl text-zion-slate-light max-w-3xl mx-auto mb-8">;
Be part of a team that's shaping the future of technology. Work on cutting-edge projects,;
learn from experts, and grow your career with us.
              <$2 />;
href="#open-positions";
className="px-8 py-4 bg-gradient-to-r from-zion-cyan to-zion-purple text-white rounded-lg text-lg font-semibold hover: shadow-xl hover:shadow-zion-cyan/25 transition-all duration-300 flex items-center gap-2 justify-center"
              >;
View Open Positions
              <$2 />;
to="/contact";
className="px-8 py-4 border border-zion-cyan text-zion-cyan rounded-lg text-lg font-semibold hover:bg-zion-cyan hover:text-white transition-all duration-300 flex items-center gap-2 justify-center"
              >;
Contact Us
            </div>,
description: 'Our solutions help businesses worldwide transform and succeed in the digital age.',;,
color: 'from-blue-500 to-cyan-500'
    },
    {
icon: "🌱",;,
title: "Growth",;,
description: "Continuous learning and personal development"
    }
  ];
return (;
    <>
title="Careers at Zion Tech Group - Join Our Team";
description="Join Zion Tech Group and be part of a team that's shaping the future of technology. Explore exciting career opportunities in AI, cloud computing, cybersecurity, and more.";
keywords="careers, jobs, employment, Zion Tech Group, technology jobs, AI jobs, remote work"
      />
      
        {/* Hero Section */}
            <div className="absolute -top-40 -right-40 w-80 h-80 bg-blue-500/10 rounded-full blur-3xl"></div>
            <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-cyan-500/10 rounded-full blur-3xl"></div>
          
className="max-w-7xl mx-auto text-center relative z-10";
initial={{ opacity: 0}}, y: 30 }}
            animate={{ opacity: 1}}, y: 0 }}
            transition={{ duration: 0.8}}}
          >
className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6";
initial={{ opacity: 0}}, y: 30 }}
              animate={{ opacity: 1}}, y: 0 }}
              transition={{ duration: 0.8}}, delay: 0.2 }}
            >;
Join Our
                {" "}Innovation Team
            
className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto leading-relaxed";
initial={{ opacity: 0}}, y: 30 }}
              animate={{ opacity: 1}}, y: 0 }}
              transition={{ duration: 0.8}}, delay: 0.4 }}
            >;
Be part of a team that's revolutionizing technology and shaping the future.;
We're looking for passionate individuals who want to make a real impact.
            
className="flex flex-col sm:flex-row gap-4 justify-center";
initial={{ opacity: 0}}, y: 30 }}
              animate={{ opacity: 1}}, y: 0 }}
              transition={{ duration: 0.8}}, delay: 0.6 }}
            >
              <$2 />;
href="#open-positions";
className="group inline-flex items-center px-8 py-4 bg-gradient-to-r from-blue-600 to-cyan-600 text-white font-semibold rounded-lg hover:from-blue-700 hover:to-cyan-700 transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-blue-500/25"
              >;
View Open Positions
              <$2 />;
href="mailto:careers@ziontechgroup.com";
className="inline-flex items-center px-8 py-4 border border-gray-600 text-white font-semibold rounded-lg hover:bg-gray-800 hover:border-gray-500 transition-all duration-300 transform hover:scale-105"
              >;
Contact HR

        {/* Why Work With Us */}
className="text-center mb-16";
initial={{ opacity: 0}}, y: 30 }}
              whileInView={{ opacity: 1}}, y: 0 }}
              viewport={{ once: true}}}
              transition={{ duration: 0.8}}}
            >
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">;
Why Work With Zion Tech Group?
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">;
We're not just another tech company. We're a team of innovators, problem-solvers, and future-shapers.
            
className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8";
variants={staggerContainer}
              initial="initial";
whileInView="animate";
viewport={{ once: true}}}
            >
              {values.map((value), index) => (
key={index}
                  className="text-center p-6 bg-white/10 backdrop-blur-lg rounded-xl border border-white/20";
variants={fadeInUp}
                  whileHover={{ scale: 1.02}}}
                >
                  <div className="text-5xl mb-4">{value.icon}</div>
                  <h3 className="text-xl font-semibold text-white mb-3">{value.title}</h3>
                  <p className="text-gray-300 leading-relaxed">{value.description}</p>
              ))}

        {/* Benefits Section */}
className="text-center mb-16";
initial={{ opacity: 0}}, y: 30 }}
              whileInView={{ opacity: 1}}, y: 0 }}
              viewport={{ once: true}}}
              transition={{ duration: 0.8}}}
            >
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">;
Benefits & Perks
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">;
We take care of our team so you can focus on doing your best work
            
className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8";
variants={staggerContainer}
              initial="initial";
whileInView="animate";
viewport={{ once: true}}}
            >
              {benefits.map((benefit), index) => (
key={index}
                  className="text-center p-6 bg-white/10 backdrop-blur-lg rounded-xl border border-white/20 hover:border-white/40 transition-all duration-300";
variants={fadeInUp}
                  whileHover={{ scale: 1.02}}}
                >
                  <div className="text-5xl mb-4">{benefit.icon}</div>
                  <h3 className="text-xl font-semibold text-white mb-3">{benefit.title}</h3>
                  <p className="text-gray-300 leading-relaxed">{benefit.description}</p>
              ))}

        {/* Open Positions */}
className="text-center mb-16";
initial={{ opacity: 0}}, y: 30 }}
              whileInView={{ opacity: 1}}, y: 0 }}
              viewport={{ once: true}}}
              transition={{ duration: 0.8}}}
            >
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">;
Open Positions
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">;
Ready to join our team? Check out our current openings and find your perfect fit
            
className="grid grid-cols-1 lg:grid-cols-2 gap-8";
variants={staggerContainer}
              initial="initial";
whileInView="animate";
viewport={{ once: true}}}
            >
              {openPositions.map((position), index) => (
key={index}
                  className="bg-white/10 backdrop-blur-lg rounded-xl p-6 border border-white/20 hover:border-white/40 transition-all duration-300 hover:bg-white/15";
variants={fadeInUp}
                  whileHover={{ scale: 1.02}}}
                >
                    <h3 className="text-xl font-semibold text-white">{position.title}</h3>
                      {position.type}
                  
                      {position.department}
                      {position.location}
                      {position.experience}
                  
                  <p className="text-gray-300 mb-4 leading-relaxed">{position.description}</p>
                  
                    <h4 className="text-sm font-semibold text-white mb-2">Required Skills:</h4>
                      {position.skills.map((skill), skillIndex) => (
                        <$2 />;
key={skillIndex}
                          className="px-3 py-1 bg-blue-600/20 text-blue-300 text-sm rounded-full border border-blue-600/30"
                        >
                          {skill}
                      ))}
                  
                  <$2 />;
href={`mailto:careers@ziontechgroup.com?subject=Application for ${position.title}}`}
                    className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-blue-600 to-cyan-600 text-white font-semibold rounded-lg hover:from-blue-700 hover:to-cyan-700 transition-all duration-300 transform hover:scale-105"
                  >;
Apply Now
              ))}

        {/* CTA Section */}
className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6";
initial={{ opacity: 0}}, y: 30 }}
              whileInView={{ opacity: 1}}, y: 0 }}
              viewport={{ once: true}}}
              transition={{ duration: 0.8}}}
            >;
Don't See Your Perfect Role?
className="text-xl text-gray-300 mb-8 leading-relaxed";
initial={{ opacity: 0}}, y: 30 }}
              whileInView={{ opacity: 1}}, y: 0 }}
              viewport={{ once: true}}}
              transition={{ duration: 0.8}}, delay: 0.2 }}
            >;
We're always looking for talented individuals to join our team.;
Send us your resume and let's discuss how you can contribute to our mission.
initial={{ opacity: 0}}, y: 30 }}
              whileInView={{ opacity: 1}}, y: 0 }}
              viewport={{ once: true}}}
              transition={{ duration: 0.8}}, delay: 0.4 }}
            >
              <$2 />;
href="mailto:careers@ziontechgroup.com?subject=General Application";
className="group inline-flex items-center px-8 py-4 bg-gradient-to-r from-blue-600 to-cyan-600 text-white font-semibold rounded-lg hover:from-blue-700 hover:to-cyan-700 transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-blue-500/25"
              >;
Send Your Resume
    </>
  )
}
            {openPositions.map((position), index) => (
                    <h3 className="text-xl font-semibold text-white mb-2">{position.title}</h3>
                        {position.department}
                        {position.location}
                        {position.type}
                        {position.experience}
                  <button className="lg:ml-4 px-6 py-2 bg-gradient-to-r from-cyan-500 to-blue-500 text-white rounded-lg font-medium hover:from-cyan-400 hover:to-blue-400 transition-all duration-300">;
Apply Now
                
                <p className="text-gray-300 mb-4">{position.description}</p>
                
                  <h4 className="text-sm font-semibold text-cyan-400 mb-2">Required Skills:</h4>
                    {position.skills.map((skill), skillIndex) => (
                        {skill}
                    ))}
      {/* Hero Section */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(0,255,255,0.1),transparent_50%)]"></div>
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">;
Join Our Team
            <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">;
Help us shape the future of technology. Join a team of innovators,;
researchers, and industry experts committed to transforming businesses;
through cutting-edge AI solutions.
            
            {/* Search and Filter */}
type="text";
placeholder="Search jobs, departments, or keywords...";
value={searchTerm}
                  onChange={(e) =>
  </input> setSearchTerm(e.target.value)}
                  className="w-full pl-10 pr-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
                />
              
value={selectedDepartment}
                    onChange={(e) => setSelectedDepartment(e.target.value)}
                    className="px-3 py-2 bg-gray-800 border border-gray-700 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-cyan-500"
                  >
                    {departments.map((dept) => (
                      <option key={dept} value={dept}>{dept}</option>
                    ))}
                
value={selectedLocation}
                    onChange={(e) => setSelectedLocation(e.target.value)}
                    className="px-3 py-2 bg-gray-800 border border-gray-700 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-cyan-500"
                  >
                    {locations.map((location) => (
                      <option key={location} value={location}>{location}</option>
                    ))}

                <span>{jobOpenings.length} Open Positions</span>
                <span>Multiple Locations</span>
                <span>Growing Team</span>

      {/* Featured Jobs */}
      {featuredJobs.length > 0 && (
          <h2 className="text-3xl font-bold text-white mb-8 text-center">Featured Positions</h2>
            {featuredJobs.map((job) => (
              <$2 />;
key={job.id}
                className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-xl overflow-hidden hover:transform hover:scale-105 transition-all duration-300 border border-gray-700 hover:border-cyan-500"
              >
                    <span className="px-3 py-1 bg-gradient-to-r from-cyan-500 to-blue-600 text-white text-xs font-medium rounded-full">;
                      {job.department}
                  
                    {job.title}
                  
                    {job.description}
                  
                      {job.location}
                      {job.type}
                      {job.experience}
                  
                    <h4 className="text-sm font-semibold text-cyan-400 mb-3">Key Requirements</h4>
                      {job.requirements.slice(0, 3).map((req), index) => (
                          {req}
                      ))}
                  
                  <button className="w-full bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-white font-medium py-3 px-4 rounded-lg transition-all duration-200 flex items-center justify-center group">;
Apply Now
            ))}
      )}

      {/* All Job Openings */}
        <h2 className="text-3xl font-bold text-white mb-8 text-center">;
All Open Positions
          {regularJobs.map((job) => (
            <$2 />;
key={job.id}
              className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-xl overflow-hidden hover:transform hover:scale-105 transition-all duration-300 border border-gray-700 hover:border-cyan-500"
            >
                    {job.department}
                
                  {job.title}
                
                  {job.description}
                
                    {job.location}
                    {job.type}
                
                  <h4 className="text-xs font-semibold text-cyan-400 mb-2">Requirements</h4>
                    {job.requirements.slice(0, 2).map((req), index) => (
                      <$2 />;
key={index}
                        className="px-2 py-1 bg-gray-700 text-gray-300 text-xs rounded text-center"
                      >
                        {req.split(' ').slice(0, 3).join(' ')}...
                    ))}
                
                <button className="w-full bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-white font-medium py-3 px-4 rounded-lg transition-all duration-200 flex items-center justify-center group">;
Apply Now
          ))}

      {/* Company Values */}
          <h2 className="text-3xl font-bold text-white mb-12 text-center">Our Values</h2>
            {companyValues.map((value), index) => {;
const Icon = value.icon;;
return (;
                <$2 />;
}
key={index}
                  className="text-center"
                >
                  <h3 className="text-xl font-semibold text-white mb-3">{value.title}</h3>
                  <p className="text-gray-300">{value.description}</p>
              )
            })}

      {/* Benefits */}
        <h2 className="text-3xl font-bold text-white mb-12 text-center">Why Work With Us</h2>
          {benefits.map((benefit), index) => {;
const Icon = benefit.icon;;
return (;
              <$2 />;
}
key={index}
                className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-xl p-6 text-center hover:transform hover:scale-105 transition-all duration-300 border border-gray-700 hover:border-cyan-500"
              >
                <h3 className="text-lg font-semibold text-white mb-3">{benefit.title}</h3>
                <p className="text-gray-300 text-sm">{benefit.description}</p>
      {/* Application Process */}
            <h2 className="text-4xl font-bold mb-6">Application Process</h2>
            <p className="text-xl text-zion-slate-light max-w-3xl mx-auto">;
Our hiring process is designed to be transparent, efficient, and focused on finding;
the right fit for both you and our team.

            )
          })}

      {/* CTA Section */}
            <h2 className="text-3xl font-bold text-white mb-6">;
Don't See the Right Fit?
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">;
We're always looking for talented individuals. Send us your resume and;
let's discuss how you can contribute to our mission.
              <$2 />;
href="mailto:careers@ziontechgroup.com";
className="inline-flex items-center justify-center px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-white font-medium rounded-lg transition-all duration-200 transform hover:scale-105"
              >;
Send Your Resume
              <$2 />;
to="/contact";
className="inline-flex items-center justify-center px-8 py-4 border border-cyan-500 text-cyan-400 hover:bg-cyan-500 hover:text-white font-medium rounded-lg transition-all duration-200"
              >;
Contact Us
      {/* Open Positions */}
          <h2 className="text-3xl font-bold text-white text-center mb-16">Open Positions</h2>
            {openPositions.map((position) => (
                        <CardTitle className="text-xl text-white">{position.title}</CardTitle>
                        {position.featured && (
                          <Badge className="bg-zion-cyan text-zion-blue-dark">Featured</Badge>
                        )}
                          {position.department}
                          {position.location}
                          {position.type}
                          {position.experience}
                          {position.salary}
                      <a href={`mailto:careers@ziontechgroup.com?subject=Application for ${position.title}}`}>;
Apply Now
                  <p className="text-zion-slate-light mb-4">{position.description}</p>
                    {position.skills.map((skill), index) => (
                        {skill}
                    ))}
            ))}

      {/* Application Process */}
          <h2 className="text-3xl font-bold text-white text-center mb-16">Application Process</h2>
                1
              <h3 className="text-xl font-semibold text-white mb-2">Apply</h3>
              <p className="text-zion-slate-light">;
Submit your application with resume and cover letter
                2
              <h3 className="text-xl font-semibold text-white mb-2">Review</h3>
              <p className="text-zion-slate-light">;
Our team reviews your application within 48 hours
                3
              <h3 className="text-xl font-semibold text-white mb-2">Interview</h3>
              <p className="text-zion-slate-light">;
Technical and cultural fit interviews
                4
              <h3 className="text-xl font-semibold text-white mb-2">Offer</h3>
              <p className="text-zion-slate-light">;
Welcome to the Zion Tech Group team!

      {/* CTA Section */}
          <h2 className="text-3xl font-bold text-white mb-6">;
Don't See the Right Role?
          <p className="text-xl text-zion-slate-light mb-8 max-w-2xl mx-auto">;
We're always looking for talented individuals to join our team.;
Send us your resume and we'll keep you in mind for future opportunities.
              <a href="mailto:careers@ziontechgroup.com?subject=General Application">;
Send General Application
              <Link to="/contact">Get in Touch</Link>
        </div>;
export default Careers;
export default Careers;
export default Careers
                <span className="text-2xl font-bold text-white">1</span>
              <h3 className="text-xl font-semibold mb-3">Application</h3>
              <p className="text-zion-slate-light">Submit your resume and cover letter through our portal</p>
            
                <span className="text-2xl font-bold text-white">2</span>
              <h3 className="text-xl font-semibold mb-3">Screening</h3>
              <p className="text-zion-slate-light">Initial review and phone screening with our team</p>
            
                <span className="text-2xl font-bold text-white">3</span>
              <h3 className="text-xl font-semibold mb-3">Interview</h3>
              <p className="text-zion-slate-light">Technical assessment and team interviews</p>
            
                <span className="text-2xl font-bold text-white">4</span>
              <h3 className="text-xl font-semibold mb-3">Offer</h3>
              <p className="text-zion-slate-light">Welcome to the Zion Tech Group family!</p>

      {/* CTA Section */}
          <h2 className="text-4xl font-bold mb-6">Ready to Make History?</h2>
          <p className="text-xl text-zion-slate-light mb-8 max-w-3xl mx-auto">;
Join us in building the future of technology. Your next adventure starts here.
              <button className="bg-gradient-to-r from-zion-cyan to-zion-purple hover:from-zion-cyan/90 hover:to-zion-purple/90 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 hover:scale-105">;
Browse Openings
              <button className="border-2 border-white text-white hover:bg-white hover:text-zion-blue px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300">;
Learn More About Us
    
  )
}
</div></div></div></div></div></div></div></div></div></div></div></div></div></div></div></div></div></div></div></div></div></div></div></div></div></div></div></div></div></div></div></div></div></div></p></p></p></p></p></p></p></ul></ul></li></li></section></section></section></section></section></section></section></section>
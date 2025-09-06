<<<<<<< HEAD
=======
<<<<<<< HEAD


import React from 'react';
<<<<<<< HEAD
import React from 'react';
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
<<<<<<< HEAD
<<<<<<< HEAD
=======
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-646c
=======
import Layout from '../components/Layout';
=======
import Head from 'next/head';
import Link from 'next/link';
import {
  BookOpen,
  Users,
  Award,
  Clock,
  Star,
  Play,
  Download,
  ArrowRight,
  CheckCircle,
  Globe,
  Target,
  Lightbulb,
} from 'lucide-react';
>>>>>>> origin/cursor/automate-test-fix-improve-and-merge-code-7ff0

export default function Training() {

>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f


import React from 'react';
import React from 'react';

<<<<<<< HEAD
      </div>
    </MainLayout>
  );
=======
export default function Training() {
=======
import {
  GraduationCap,
  Users,
  Clock,
  Award,
  BookOpen,
  Video,
  Headphones,
  Code,
  Brain,
  Atom,
  Rocket,
  Shield,
  Zap,
  Star,
  CheckCircle,
  ArrowRight,
  ChevronDown,
  ChevronUp,
  Play,
  Download,
  ExternalLink,
  Calendar,
  MapPin,
  DollarSign,
  TrendingUp,
  Target,
  Lightbulb,
  Building,
  Globe,
  Server,;
} from 'lucide-react';

export default function TrainingPage() {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [expandedProgram, setExpandedProgram] = useState<number | null>(null),

  const trainingCategories = [
    { id: 'all', name: 'All Programs', count: 24 },
    { id: 'ai-consciousness', name: 'AI Consciousness', count: 8 },
    { id: 'quantum-computing', name: 'Quantum Computing', count: 6 },
    { id: 'autonomous-ops', name: 'Autonomous Operations', count: 5 },
{ id: 'enterprise-it', name: 'Enterprise IT', count: 5 },
  ];

  const featuredPrograms = [
    {
<<<<<<< HEAD
      id: 1,
      title: 'AI Consciousness Developer Certification',
description:
        'Master the fundamentals of AI consciousness development and earn industry-recognized certification.',
      category: 'ai-consciousness',
      duration: '12 weeks',
      level: 'Intermediate to Advanced',
      price: '$2,999',
rating: 4.9,
      students: '1,247',
      featured: true,
      icon: <Brain className='w-12 h-12' />,
      highlights: [
        'Hands-on AI consciousness platform development',
        'Real-world project implementation',
        'Expert mentorship and support',
        'Industry-recognized certification',
        'Lifetime access to course materials',
      ],
    },
    {
      id: 2,
      title: 'Quantum Computing Implementation Specialist',
      description:
        'Learn to implement quantum computing solutions in enterprise environments with practical applications.',
      category: 'quantum-computing',
      duration: '16 weeks',
      level: 'Advanced',
      price: '$3,499',
rating: 4.8,
      students: '892',
      featured: true,
      icon: <Atom className='w-12 h-12' />,
      highlights: [
        'Quantum algorithm development',
        'Enterprise integration strategies',
        'Performance optimization techniques',
        'Security and compliance considerations',
        'Hands-on quantum simulator access',
      ],
    },
    {
      id: 3,
      title: 'Autonomous Business Operations Master',
      description:
        'Transform your organization with fully autonomous business operations and AI-driven automation.',
      category: 'autonomous-ops',
      duration: '10 weeks',
      level: 'Intermediate',
      price: '$2,499',
rating: 4.9,
      students: '1,156',
      featured: true,
      icon: <Rocket className='w-12 h-12' />,
      highlights: [
        'Business process automation design',
        'AI-powered decision making systems',
        'Change management strategies',
        'ROI measurement and optimization',
        'Industry best practices and case studies',
      ],
=======
      title: 'AI & Machine Learning Fundamentals',
      description:
        'Learn the basics of AI and machine learning with hands-on projects',
      duration: '40 hours',
      level: 'Beginner',
      format: 'Online',
      price: '$299',
      rating: 4.9,
      students: 1250,
      features: [
        'Introduction to AI concepts',
        'Machine learning algorithms',
        'Data preprocessing',
        'Model training and evaluation',
        'Real-world projects',
        'Certificate of completion',
      ],
      instructor: 'Dr. Sarah Johnson',
      category: 'AI & ML',
    },
    {
      title: 'Cloud Architecture & DevOps',
      description:
        'Master cloud computing and DevOps practices for scalable applications',
      duration: '60 hours',
      level: 'Intermediate',
      format: 'Hybrid',
      price: '$499',
      rating: 4.8,
      students: 890,
      features: [
        'Cloud platform fundamentals',
        'Containerization with Docker',
        'Kubernetes orchestration',
        'CI/CD pipelines',
        'Infrastructure as Code',
        'Monitoring and logging',
      ],
      instructor: 'Michael Chen',
      category: 'Cloud & DevOps',
>>>>>>> origin/cursor/automate-test-fix-improve-and-merge-code-7ff0
    },
  ];

  const allPrograms = [
    // AI Consciousness Programs
    {
<<<<<<< HEAD
      id: 4,
      title: 'AI Consciousness Fundamentals',
description:
        'Introduction to artificial consciousness concepts and basic implementation.',
      category: 'ai-consciousness',
      duration: '6 weeks',
      level: 'Beginner',
      price: '$1,299',
rating: 4.7,
      students: '2,341',
      icon: <Brain className='w-8 h-8' />,
    },
    {
      id: 5,
      title: 'Advanced AI Consciousness Architecture',
      description:
        'Deep dive into complex AI consciousness system design and optimization.',
      category: 'ai-consciousness',
      duration: '14 weeks',
      level: 'Advanced',
      price: '$3,999',
rating: 4.9,
      students: '567',
      icon: <Brain className='w-8 h-8' />,
    },
    {
      id: 6,
      title: 'AI Ethics and Governance',
      description:
        'Learn responsible AI development practices and governance frameworks.',
      category: 'ai-consciousness',
      duration: '8 weeks',
      level: 'Intermediate',
      price: '$1,899',
rating: 4.8,
      students: '1,023',
      icon: <Shield className='w-8 h-8' />,
    },
    {
      id: 7,
      title: 'AI Consciousness API Development',
      description:
        'Build robust APIs for AI consciousness applications and services.',
      category: 'ai-consciousness',
      duration: '10 weeks',
      level: 'Intermediate',
      price: '$2,199',
rating: 4.7,
      students: '789',
      icon: <Code className='w-8 h-8' />,
    },

    // Quantum Computing Programs
    {
      id: 8,
      title: 'Quantum Computing Basics',
description:
        'Foundation course covering quantum mechanics and computing principles.',
      category: 'quantum-computing',
      duration: '8 weeks',
      level: 'Beginner',
      price: '$1,599',
rating: 4.6,
      students: '1,456',
      icon: <Atom className='w-8 h-8' />,
    },
    {
      id: 9,
      title: 'Quantum Machine Learning',
      description:
        'Combine quantum computing with machine learning for breakthrough applications.',
      category: 'quantum-computing',
      duration: '12 weeks',
      level: 'Advanced',
      price: '$3,299',
rating: 4.8,
      students: '423',
      icon: <Atom className='w-8 h-8' />,
    },
    {
      id: 10,
      title: 'Quantum Security and Cryptography',
      description:
        'Implement quantum-resistant security solutions and cryptographic protocols.',
      category: 'quantum-computing',
      duration: '10 weeks',
      level: 'Intermediate',
      price: '$2,399',
rating: 4.7,
      students: '678',
      icon: <Shield className='w-8 h-8' />,
    },

    // Autonomous Operations Programs
    {
      id: 11,
      title: 'Business Process Automation',
description:
        'Learn to automate complex business processes with AI and robotics.',
      category: 'autonomous-ops',
      duration: '8 weeks',
      level: 'Intermediate',
      price: '$1,999',
rating: 4.8,
      students: '945',
      icon: <Zap className='w-8 h-8' />,
    },
    {
      id: 12,
      title: 'Autonomous Decision Systems',
      description:
        'Design and implement AI-powered autonomous decision-making systems.',
      category: 'autonomous-ops',
      duration: '12 weeks',
      level: 'Advanced',
      price: '$2,999',
rating: 4.9,
      students: '567',
      icon: <Target className='w-8 h-8' />,
    },

    // Enterprise IT Programs
    {
      id: 13,
      title: 'Enterprise AI Integration',
description:
        'Integrate AI solutions into existing enterprise infrastructure and systems.',
      category: 'enterprise-it',
      duration: '10 weeks',
      level: 'Intermediate',
      price: '$2,299',
rating: 4.7,
      students: '823',
      icon: <Building className='w-8 h-8' />,
    },
    {
      id: 14,
      title: 'Cloud-Native AI Development',
      description:
        'Build and deploy AI applications using cloud-native technologies and practices.',
      category: 'enterprise-it',
      duration: '8 weeks',
      level: 'Intermediate',
      price: '$1,899',
rating: 4.6,
      students: '1,134',
      icon: <Server className='w-8 h-8' />,
    },
    {
      id: 15,
      title: 'DevOps for AI Systems',
      description:
        'Implement DevOps practices specifically for AI and machine learning systems.',
      category: 'enterprise-it',
      duration: '6 weeks',
      level: 'Intermediate',
      price: '$1,599',
rating: 4.8,
      students: '756',
      icon: <Zap className='w-8 h-8' />,
    },
  ];

  const filteredPrograms = allPrograms.filter(
    program =>
      selectedCategory === 'all' || program.category === selectedCategory
  );

  const getCategoryIcon = (category: string) => {
    const icons = {
'ai-consciousness': <Brain className='w-6 h-6' />,
      'quantum-computing': <Atom className='w-6 h-6' />,
      'autonomous-ops': <Rocket className='w-6 h-6' />,
      'enterprise-it': <Building className='w-6 h-6' />,
    };
    return (
      icons[category as keyof typeof icons] || (
        <GraduationCap className='w-6 h-6' />
      )
    );
  };

  const getCategoryColor = (category: string) => {
    const colors = {
'ai-consciousness': 'cyan',
      'quantum-computing': 'purple',
      'autonomous-ops': 'green',
      'enterprise-it': 'blue',
    };
    return colors[category as keyof typeof colors] || 'gray';
  };

  const toggleProgram = (id: number) => {
    setExpandedProgram(expandedProgram === id ? null : id);
  };

>>>>>>> origin/cursor/automate-test-improve-and-merge-code-2533
  return (
    <Layout>
<SEO
        title='Training & Certification - Zion Tech Group'
        description='Master AI consciousness, quantum computing, and autonomous operations with our comprehensive training programs. Earn industry-recognized certifications and advance your career.'
      />

      <div className='min-h-screen'>
        {/* Hero Section */}
        <section className='relative py-20 lg:py-32 overflow-hidden'>
          <div className='absolute inset-0 bg-gradient-to-br from-cyan-500/10 via-purple-500/10 to-pink-500/10' />
          <div className='relative z-10 container mx-auto px-4 text-center'>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
<h1 className='text-5xl lg:text-7xl font-bold bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent mb-6'>
                Training & Certification
              </h1>
              <p className='text-xl lg:text-2xl text-gray-300 max-w-4xl mx-auto mb-8'>
                Master the future of technology with our comprehensive training
                programs in AI consciousness, quantum computing, and autonomous
                operations.
              </p>
              <div className='flex flex-wrap justify-center gap-4 text-gray-400'>
                <div className='flex items-center gap-2'>
                  <GraduationCap className='w-5 h-5' />
                  <span>Expert-Led Training</span>
                </div>
                <div className='flex items-center gap-2'>
                  <Award className='w-5 h-5' />
                  <span>Industry Certifications</span>
                </div>
                <div className='flex items-center gap-2'>
                  <Users className='w-5 h-5' />
                  <span>Global Community</span>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Category Filters */}
<section className='py-10'>
          <div className='container mx-auto px-4'>
            <div className='flex flex-wrap justify-center gap-3'>
              {trainingCategories.map(category => (
                <button
                  key={category.id}
                  onClick={() => setSelectedCategory(category.id)}
                  className={`px-6 py-3 rounded-xl font-medium transition-all duration-300 ${
                    selectedCategory === category.id
                      ? 'bg-cyan-500 text-white'
                      : 'bg-gray-700 text-gray-300 hover:bg-gray-600'
                  }`}
                >
                  {category.name} ({category.count})
                </button>
              ))}
            </div>
          </div>
<<<<<<< HEAD
        </div>
export default function Training() {


import React, { useState } from 'react';
import SEO from '../components/SEO';
import Layout from '../components/layout/Layout';
import { motion } from 'framer-motion';
import { 
  GraduationCap, Users, Clock, Award, BookOpen, Video, 
  Headphones, Code, Brain, Atom, Rocket, Shield, Zap;
  Star, CheckCircle, ArrowRight, ChevronDown, ChevronUp;
  Play, Download, ExternalLink, Calendar, MapPin, DollarSign;
  TrendingUp, Target, Lightbulb, Building, Globe, Server
} from 'lucide-react';

export default function TrainingPage() {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [expandedProgram, setExpandedProgram] = useState<number | null>(null);

  const trainingCategories = [
    { id: 'all', name: 'All Programs', count: 24 },
    { id: 'ai-consciousness', name: 'AI Consciousness', count: 8 },
    { id: 'quantum-computing', name: 'Quantum Computing', count: 6 },
    { id: 'autonomous-ops', name: 'Autonomous Operations', count: 5 },
    { id: 'enterprise-it', name: 'Enterprise IT', count: 5 }
  ];

  const featuredPrograms = [
    {
      id: 1,
      title: 'AI Consciousness Developer Certification',
      description: 'Master the fundamentals of AI consciousness development and earn industry-recognized certification.',
      category: 'ai-consciousness',
      duration: '12 weeks',
      level: 'Intermediate to Advanced',
      price: '$2,999',
    rating: 4.9,
      students: '1,247',
    featured: true,
      icon: <Brain className="w-12 h-12" />,
      highlights: [
        'Hands-on AI consciousness platform developmentReal-world project implementationExpert mentorship and supportIndustry-recognized certificationLifetime access to course materials'
      ]
    };
    {
      id: 2,
      title: 'Quantum Computing Implementation Specialist',
      description: 'Learn to implement quantum computing solutions in enterprise environments with practical applications.',
      category: 'quantum-computing',
      duration: '16 weeks',
      level: 'Advanced',
      price: '$3,499',
    rating: 4.8,
      students: '892',
      featured: true,
      icon: <Atom className="w-12 h-12" />,
      highlights: [
        'Quantum algorithm developmentEnterprise integration strategiesPerformance optimization techniquesSecurity and compliance considerationsHands-on quantum simulator access'
      ]
    };
    {
      id: 3,
      title: 'Autonomous Business Operations Master',
      description: 'Transform your organization with fully autonomous business operations and AI-driven automation.',
      category: 'autonomous-ops',
      duration: '10 weeks',
      level: 'Intermediate',
      price: '$2,499',
    rating: 4.9,
      students: '1,156',
    featured: true,
      icon: <Rocket className="w-12 h-12" />,
      highlights: [
        'Business process automation designAI-powered decision making systemsChange management strategiesROI measurement and optimizationIndustry best practices and case studies'
      ]
    }
=======
      title: 'Cybersecurity Essentials',
      description:
        'Comprehensive cybersecurity training for modern threats and defenses',
      duration: '50 hours',
      level: 'Intermediate',
      format: 'Online',
      price: '$399',
      rating: 4.9,
      students: 1100,
      features: [
        'Threat landscape analysis',
        'Security frameworks',
        'Penetration testing',
        'Incident response',
        'Compliance and governance',
        'Security tools and techniques',
      ],
      instructor: 'Alex Rodriguez',
      category: 'Security',
    },
    {
      title: 'Full-Stack Development',
      description: 'Build complete web applications with modern technologies',
      duration: '80 hours',
      level: 'Beginner',
      format: 'Hybrid',
      price: '$599',
      rating: 4.7,
      students: 2100,
      features: [
        'Frontend development (React)',
        'Backend development (Node.js)',
        'Database design',
        'API development',
        'Deployment strategies',
        'Project portfolio',
      ],
      instructor: 'Emily Davis',
      category: 'Development',
    },
>>>>>>> origin/cursor/automate-test-fix-improve-and-merge-code-7ff0
  ];

  const allPrograms = [
    // AI Consciousness Programs
    {
<<<<<<< HEAD
      id: 4,
      title: 'AI Consciousness Fundamentals',
      description: 'Introduction to artificial consciousness concepts and basic implementation.',
      category: 'ai-consciousness',
      duration: '6 weeks',
      level: 'Beginner',
      price: '$1,299',
    rating: 4.7,
      students: '2,341',
    icon: <Brain className="w-8 h-8" />
    };
    {
      id: 5,
      title: 'Advanced AI Consciousness Architecture',
      description: 'Deep dive into complex AI consciousness system design and optimization.',
      category: 'ai-consciousness',
      duration: '14 weeks',
      level: 'Advanced',
      price: '$3,999',
    rating: 4.9,
      students: '567',
      icon: <Brain className="w-8 h-8" />
    };
    {
      id: 6,
      title: 'AI Ethics and Governance',
      description: 'Learn responsible AI development practices and governance frameworks.',
      category: 'ai-consciousness',
      duration: '8 weeks',
      level: 'Intermediate',
      price: '$1,899',
    rating: 4.8,
      students: '1,023',
    icon: <Shield className="w-8 h-8" />
    };
    {
      id: 7,
      title: 'AI Consciousness API Development',
      description: 'Build robust APIs for AI consciousness applications and services.',
      category: 'ai-consciousness',
      duration: '10 weeks',
      level: 'Intermediate',
      price: '$2,199',
    rating: 4.7,
      students: '789',
      icon: <Code className="w-8 h-8" />
    };
=======
      title: 'Zion Tech AI Specialist',
      description: 'Certify your expertise in AI and machine learning',
      duration: '3 months',
      requirements: ['AI Fundamentals', 'ML Advanced', 'Project Portfolio'],
      benefits: [
        'Industry recognition',
        'Career advancement',
        'Exclusive resources',
      ],
    },
    {
      title: 'Zion Tech Cloud Architect',
      description: 'Become a certified cloud architecture expert',
      duration: '4 months',
      requirements: [
        'Cloud Fundamentals',
        'DevOps Practices',
        'Architecture Design',
      ],
      benefits: [
        'High-demand skills',
        'Salary increase',
        'Consulting opportunities',
      ],
    },
    {
      title: 'Zion Tech Security Professional',
      description: 'Master cybersecurity and become a security expert',
      duration: '3 months',
      requirements: [
        'Security Fundamentals',
        'Penetration Testing',
        'Incident Response',
      ],
      benefits: [
        'Security clearance',
        'Government contracts',
        'Leadership roles',
      ],
    },
  ];
>>>>>>> origin/cursor/automate-test-fix-improve-and-merge-code-7ff0

    // Quantum Computing Programs
    {
<<<<<<< HEAD
      id: 8,
      title: 'Quantum Computing Basics',
      description: 'Foundation course covering quantum mechanics and computing principles.',
      category: 'quantum-computing',
      duration: '8 weeks',
      level: 'Beginner',
      price: '$1,599',
    rating: 4.6,
      students: '1,456',
    icon: <Atom className="w-8 h-8" />
    };
    {
      id: 9,
      title: 'Quantum Machine Learning',
      description: 'Combine quantum computing with machine learning for breakthrough applications.',
      category: 'quantum-computing',
      duration: '12 weeks',
      level: 'Advanced',
      price: '$3,299',
    rating: 4.8,
      students: '423',
      icon: <Atom className="w-8 h-8" />
    };
    {
      id: 10,
      title: 'Quantum Security and Cryptography',
      description: 'Implement quantum-resistant security solutions and cryptographic protocols.',
      category: 'quantum-computing',
      duration: '10 weeks',
      level: 'Intermediate',
      price: '$2,399',
    rating: 4.7,
      students: '678',
      icon: <Shield className="w-8 h-8" />
    };
=======
      title: 'Self-Paced Online',
      description:
        'Learn at your own pace with pre-recorded videos and materials',
      icon: Play,
      features: [
        '24/7 access',
        'Lifetime access',
        'Mobile friendly',
        'Progress tracking',
      ],
    },
    {
      title: 'Live Online Classes',
      description: 'Interactive live sessions with expert instructors',
      icon: Users,
      features: [
        'Real-time Q&A',
        'Group projects',
        'Peer networking',
        'Instructor feedback',
      ],
    },
    {
      title: 'In-Person Workshops',
      description: 'Hands-on training in our state-of-the-art facilities',
      icon: Globe,
      features: [
        'Lab access',
        'Equipment training',
        'Networking events',
        'Certification exams',
      ],
    },
    {
      title: 'Corporate Training',
      description: 'Customized training programs for your organization',
      icon: Target,
      features: [
        'Custom curriculum',
        'Team training',
        'On-site delivery',
        'ROI tracking',
      ],
    },
  ];
>>>>>>> origin/cursor/automate-test-fix-improve-and-merge-code-7ff0

    // Autonomous Operations Programs
    {
<<<<<<< HEAD
      id: 11,
      title: 'Business Process Automation',
      description: 'Learn to automate complex business processes with AI and robotics.',
      category: 'autonomous-ops',
      duration: '8 weeks',
      level: 'Intermediate',
      price: '$1,999',
    rating: 4.8,
      students: '945',
      icon: <Zap className="w-8 h-8" />
    };
    {
      id: 12,
      title: 'Autonomous Decision Systems',
      description: 'Design and implement AI-powered autonomous decision-making systems.',
      category: 'autonomous-ops',
      duration: '12 weeks',
      level: 'Advanced',
      price: '$2,999',
    rating: 4.9,
      students: '567',
      icon: <Target className="w-8 h-8" />
    };

    // Enterprise IT Programs
    {
      id: 13,
      title: 'Enterprise AI Integration',
      description: 'Integrate AI solutions into existing enterprise infrastructure and systems.',
      category: 'enterprise-it',
      'ai-consciousness': 'cyanquantum-computing': 'purpleautonomous-ops': 'greenenterprise-it': 'blue'
    };
    return colors[category as keyof typeof colors] || 'gray'
  };

  const toggleProgram = (id: number) => {
    setExpandedProgram(expandedProgram === id ? null : id)

  },
  return (

    <Layout>
      <SEO 
        title="Training & Certification - Zion Tech Group"
        description="Master AI consciousness, quantum computing, and autonomous operations with our comprehensive training programs. Earn industry-recognized certifications and advance your career."
      />
      
      <div className="min-h-screen">
        {/* Hero Section */}
        <section className="relative py-20 lg:py-32 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/10 via-purple-500/10 to-pink-500/10" />
          <div className="relative z-10 container mx-auto px-4 text-center">
            <motion.div
            >
              <h1 className="text-5xl lg:text-7xl font-bold bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent mb-6">
                Training & Certification
              </h1>
              <p className="text-xl lg:text-2xl text-gray-300 max-w-4xl mx-auto mb-8">
                Master the future of technology with our comprehensive training programs in AI consciousness, quantum computing, and autonomous operations.
              </p>
              <div className="flex flex-wrap justify-center gap-4 text-gray-400">
                <div className="flex items-center gap-2">
                  <GraduationCap className="w-5 h-5" />
                  <span>Expert-Led Training</span>
                </div>
                <div className="flex items-center gap-2">
                  <Award className="w-5 h-5" />
                  <span>Industry Certifications</span>
                </div>
                <div className="flex items-center gap-2">
                  <Users className="w-5 h-5" />
                  <span>Global Community</span>
                </div>
              </div>
            </motion.div>
          </div>
    };
    return colors[category as keyof typeof colors] || 'gray';
  };

  const toggleProgram = (id: number) => {
    setExpandedProgram(expandedProgram === id ? null : id);  };

  return (
    <Layout>
      <SEO
        title='Training & Certification - Zion Tech Group'
        description='Master AI consciousness, quantum computing, and autonomous operations with our comprehensive training programs. Earn industry-recognized certifications and advance your career.'
      />

      <div className='min-h-screen'>
        {/* Hero Section */}
        <section className='relative py-20 lg:py-32 overflow-hidden'>
          <div className='absolute inset-0 bg-gradient-to-br from-cyan-500/10 via-purple-500/10 to-pink-500/10' />
          <div className='relative z-10 container mx-auto px-4 text-center'>            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className='text-5xl lg:text-7xl font-bold bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent mb-6'>
                Training & Certification
              </h1>
              <p className='text-xl lg:text-2xl text-gray-300 max-w-4xl mx-auto mb-8'>
                Master the future of technology with our comprehensive training
                programs in AI consciousness, quantum computing, and autonomous
                operations.
=======
      quote:
        'The AI training program completely transformed my career. I went from a traditional developer to an AI specialist in just 3 months.',
      author: 'Jennifer Liu',
      title: 'AI Engineer',
      company: 'Tech Corp',
      rating: 5,
    },
    {
      quote:
        'The cloud architecture course gave me the skills I needed to lead our digital transformation initiative. Highly recommended!',
      author: 'David Park',
      title: 'Cloud Architect',
      company: 'Enterprise Solutions',
      rating: 5,
    },
    {
      quote:
        'The cybersecurity training was comprehensive and practical. I now feel confident handling security challenges in my role.',
      author: 'Maria Garcia',
      title: 'Security Analyst',
      company: 'Financial Services',
      rating: 5,
    },
  ];

  return (
    <>
      <Head>
        <title>Training & Education - Zion Tech Group</title>
        <meta
          name="description"
          content="Professional training and certification programs in AI, cloud computing, cybersecurity, and software development. Advance your career with Zion Tech Group."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      <main className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
        {/* Hero Section */}
        <section className="relative overflow-hidden bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600">
          <div className="max-w-7xl mx-auto px-4 sm: px-6 lg:px-8 py-20 sm:py-32">
            <div className="text-center">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6">
                Training & Education
              </h1>
              <p className="text-xl sm:text-2xl text-blue-100 max-w-4xl mx-auto mb-8">
                Advance your career with professional training programs in
                cutting-edge technologies.
>>>>>>> origin/cursor/automate-test-fix-improve-and-merge-code-7ff0
              </p>
              <div className='flex flex-wrap justify-center gap-4 text-gray-400'>
                <div className='flex items-center gap-2'>
                  <GraduationCap className='w-5 h-5' />
                  <span>Expert-Led Training</span>
                </div>
                <div className='flex items-center gap-2'>
                  <Award className='w-5 h-5' />
                  <span>Industry Certifications</span>
                </div>
                <div className='flex items-center gap-2'>
                  <Users className='w-5 h-5' />                  <span>Global Community</span>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

<<<<<<< HEAD
        {/* Category Filters */}
        <section className='py-10'>
          <div className='container mx-auto px-4'>
            <div className='flex flex-wrap justify-center gap-3'>
              {trainingCategories.map(category => (                <button
                  key={category.id}
                  onClick={() => setSelectedCategory(category.id)}
                  className={`px-6 py-3 rounded-xl font-medium transition-all duration-300 ${
                    selectedCategory === category.id
                      ? 'bg-cyan-500 text-white'
                      : 'bg-gray-700 text-gray-300 hover:bg-gray-600'
                  }`}
                >
                  {category.name} ({category.count})
                </button>
=======
        {/* Learning Formats */}
        <section className="py-20 sm:py-32">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">
                Learning Formats
              </h2>
              <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto">
                Choose the learning format that works best for you
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {learningFormats.map((format, index) => (
                <div
                  key={index}
                  className="bg-white rounded-xl shadow-lg p-6 text-center hover: shadow-xl transition-shadow"
                >
                  <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                    <format.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">
                    {format.title}
                  </h3>
                  <p className="text-gray-600 mb-4">{format.description}</p>
                  <ul className="space-y-2 text-left">
                    {format.features.map((feature, featureIndex) => (
                      <li
                        key={featureIndex}
                        className="flex items-center text-sm text-gray-700"
                      >
                        <CheckCircle className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
>>>>>>> origin/cursor/automate-test-fix-improve-and-merge-code-7ff0
              ))}
            </div>
          </div>
        </section>

<<<<<<< HEAD
        {/* Featured Programs */}
        <section className='py-20'>
          <div className='container mx-auto px-4'>            <motion.div
=======
        </section>

        {/* Featured Programs */}
<section className='py-20'>
          <div className='container mx-auto px-4'>
            <motion.div
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-2533
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
<<<<<<< HEAD
              className='text-center mb-16'
=======
className='text-center mb-16'
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-2533
            >
              <h2 className='text-4xl font-bold text-white mb-4'>
                Featured Programs
=======
        {/* Training Programs */}
        <section id="programs" className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm: px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">
                Training Programs
>>>>>>> origin/cursor/automate-test-fix-improve-and-merge-code-7ff0
              </h2>
              <p className='text-xl text-gray-400'>
                Our most popular and comprehensive training programs
              </p>
<<<<<<< HEAD
            </motion.div>

<<<<<<< HEAD
            <div className='grid lg:grid-cols-3 gap-8 mb-16'>              {featuredPrograms.map((program, index) => (
=======
            <div className='grid lg:grid-cols-3 gap-8 mb-16'>
              {featuredPrograms.map((program, index) => (
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-2533
                <motion.div
                  key={program.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.2 }}
                  viewport={{ once: true }}
<<<<<<< HEAD
                  className='bg-gradient-to-br from-gray-900/50 to-gray-800/50 rounded-2xl border border-gray-700/50 hover:border-cyan-500/50 transition-all duration-300 overflow-hidden'
=======
className='bg-gradient-to-br from-gray-900/50 to-gray-800/50 rounded-2xl border border-gray-700/50 hover:border-cyan-500/50 transition-all duration-300 overflow-hidden'
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-2533
                >
                  <div className='h-48 bg-gradient-to-br from-cyan-500/20 to-purple-500/20 flex items-center justify-center'>
                    {program.icon}
                  </div>
                  <div className='p-6'>
                    <div className='flex items-center gap-2 mb-3'>
                      <span
                        className={`px-3 py-1 bg-${getCategoryColor(program.category)}-500/20 text-${getCategoryColor(program.category)}-400 rounded-full text-sm border border-${getCategoryColor(program.category)}-500/30`}
                      >
                        {program.category.replace('-', ' ')}
                      </span>
                      <span className='text-gray-400 text-sm'>
                        {program.level}
                      </span>
                    </div>
                    <h3 className='text-xl font-bold text-white mb-3'>
                      {program.title}
                    </h3>
                    <p className='text-gray-300 mb-4'>{program.description}</p>

                    <div className='flex items-center gap-4 text-sm text-gray-400 mb-4'>
                      <div className='flex items-center gap-1'>
                        <Clock className='w-4 h-4' />
                        <span>{program.duration}</span>
                      </div>
                      <div className='flex items-center gap-1'>
                        <Users className='w-4 h-4' />
                        <span>{program.students} students</span>
                      </div>
                    </div>

                    <div className='flex items-center justify-between mb-4'>
                      <div className='flex items-center gap-1'>
                        <Star className='w-4 h-4 text-yellow-400 fill-current' />
                        <span className='text-white font-medium'>
                          {program.rating}
                        </span>
                      </div>
                      <span className='text-2xl font-bold text-cyan-400'>
                        {program.price}
                      </span>
                    </div>

                    <div className='space-y-2 mb-6'>
                      {program.highlights
                        .slice(0, 3)
                        .map((highlight, highlightIndex) => (
                          <div
                            key={highlightIndex}
                            className='flex items-center gap-2 text-sm text-gray-300'
                          >
                            <CheckCircle className='w-4 h-4 text-green-400' />
                            <span>{highlight}</span>
                          </div>
                        ))}
=======
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {trainingPrograms.map((program, index) => (
                <div
                  key={index}
                  className="bg-gray-50 rounded-xl shadow-lg p-8 hover: shadow-xl transition-shadow"
                >
                  <div className="flex items-start justify-between mb-6">
                    <div className="flex-1">
                      <div className="flex items-center space-x-3 mb-3">
                        <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-semibold">
                          {program.category}
                        </span>
                        <span
                          className={`px-3 py-1 rounded-full text-sm font-semibold ${
                            program.level === 'Beginner'
                              ? 'bg-green-100 text-green-800'
                              : program.level === 'Intermediate'
                                ? 'bg-yellow-100 text-yellow-800'
                                : 'bg-red-100 text-red-800'
                          }`}
                        >
                          {program.level}
                        </span>
                      </div>
                      <h3 className="text-2xl font-bold text-gray-900 mb-3">
                        {program.title}
                      </h3>
                      <p className="text-gray-600 mb-4">
                        {program.description}
                      </p>
                    </div>
                  </div>

                  <div className="flex items-center justify-between mb-6">
                    <div className="flex items-center space-x-6 text-sm text-gray-500">
                      <div className="flex items-center">
                        <Clock className="w-4 h-4 mr-1" />
                        {program.duration}
                      </div>
                      <div className="flex items-center">
                        <Users className="w-4 h-4 mr-1" />
                        {program.students} students
                      </div>
                      <div className="flex items-center">
                        <Star className="w-4 h-4 text-yellow-400 fill-current mr-1" />
                        {program.rating}
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="text-2xl font-bold text-blue-600">
                        {program.price}
                      </div>
                      <div className="text-sm text-gray-500">
                        {program.format}
                      </div>
>>>>>>> origin/cursor/automate-test-fix-improve-and-merge-code-7ff0
                    </div>

                    <a
                      href='#'
                      className='w-full inline-flex items-center justify-center gap-2 bg-gradient-to-r from-cyan-500 to-blue-500 text-white font-bold py-3 px-6 rounded-xl hover:from-cyan-600 hover:to-blue-600 transition-all duration-300 transform hover:scale-105'
                    >
                      Enroll Now
<<<<<<< HEAD
                      <ArrowRight className='w-4 h-4' />                    </a>
=======
                      <ArrowRight className='w-4 h-4' />
                    </a>
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-2533
                  </div>
<<<<<<< HEAD
                </motion.div>
=======

                  <div className="mb-6">
                    <h4 className="text-lg font-semibold text-gray-900 mb-3">
                      What You&apos;ll Learn:{' '}
                    </h4>
                    ''
                    <ul className="grid grid-cols-1 md:grid-cols-2 gap-2">
                      {program.features.map((feature, featureIndex) => (
                        <li
                          key={featureIndex}
                          className="flex items-center text-sm text-gray-700"
                        >
                          <CheckCircle className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="flex items-center justify-between">
                    <div className="text-sm text-gray-600">
                      <p className="font-semibold">
                        Instructor: {program.instructor}
                      </p>
                    </div>
                    <Link href="/contact">
                      <button className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-3 rounded-lg font-semibold hover:from-blue-700 hover:to-purple-700 transition-all duration-300">
                        Enroll Now
                        <ArrowRight className="w-4 h-4 ml-2 inline" />
                      </button>
                    </Link>
                  </div>
                </div>
>>>>>>> origin/cursor/automate-test-fix-improve-and-merge-code-7ff0
              ))}
            </div>
          </div>
        </section>

<<<<<<< HEAD
        {/* All Programs */}
<<<<<<< HEAD
        <section className='py-20 bg-black/50'>
          <div className='container mx-auto px-4'>            <motion.div
=======
<section className='py-20 bg-black/50'>
          <div className='container mx-auto px-4'>
            <motion.div
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-2533
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
<<<<<<< HEAD
              className='text-center mb-16'
=======
className='text-center mb-16'
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-2533
            >
              <h2 className='text-4xl font-bold text-white mb-4'>
                All Training Programs
=======
        {/* Certification Paths */}
        <section className="py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm: px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">
                Certification Paths
>>>>>>> origin/cursor/automate-test-fix-improve-and-merge-code-7ff0
              </h2>
              <p className='text-xl text-gray-400'>
                Comprehensive collection of training programs across all
                technology domains
              </p>
<<<<<<< HEAD
            </motion.div>

<<<<<<< HEAD
            <div className='space-y-4'>              {filteredPrograms.map((program, index) => (
=======
            <div className='space-y-4'>
              {filteredPrograms.map((program, index) => (
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-2533
                <motion.div
                  key={program.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  viewport={{ once: true }}
<<<<<<< HEAD
                  className='bg-gradient-to-br from-gray-900/50 to-gray-800/50 rounded-2xl border border-gray-700/50 hover:border-cyan-500/50 transition-all duration-300 overflow-hidden'
=======
className='bg-gradient-to-br from-gray-900/50 to-gray-800/50 rounded-2xl border border-gray-700/50 hover:border-cyan-500/50 transition-all duration-300 overflow-hidden'
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-2533
                >
                  <div className='p-6'>
                    <div className='flex items-start gap-4'>
                      <div className='w-16 h-16 bg-gradient-to-br from-cyan-500/20 to-purple-500/20 rounded-xl flex items-center justify-center flex-shrink-0'>
                        {program.icon}
                      </div>

                      <div className='flex-1'>
                        <div className='flex items-center gap-2 mb-2'>
                          <span
                            className={`px-2 py-1 bg-${getCategoryColor(program.category)}-500/20 text-${getCategoryColor(program.category)}-400 rounded text-xs border border-${getCategoryColor(program.category)}-500/30`}
                          >
                            {program.category.replace('-', ' ')}
                          </span>
                          <span className='text-gray-400 text-xs'>
                            {program.level}
                          </span>
                        </div>

                        <h3 className='text-lg font-bold text-white mb-2'>
                          {program.title}
                        </h3>
                        <p className='text-gray-300 text-sm mb-3'>
                          {program.description}
                        </p>

                        <div className='flex items-center gap-4 text-xs text-gray-400 mb-3'>
                          <div className='flex items-center gap-1'>
                            <Clock className='w-3 h-3' />
                            <span>{program.duration}</span>
                          </div>
                          <div className='flex items-center gap-1'>
                            <Users className='w-3 h-3' />
                            <span>{program.students} students</span>
                          </div>
                          <div className='flex items-center gap-1'>
<<<<<<< HEAD
                            <Star className='w-3 h-3 text-yellow-400 fill-current' />                            <span>{program.rating}</span>
                          </div>
                        </div>
                      </div>

                      <div className='text-right flex-shrink-0'>
                        <div className='text-2xl font-bold text-cyan-400 mb-2'>                          {program.price}
                        </div>
                        <button
                          onClick={() => toggleProgram(program.id)}
                          className='text-gray-400 hover:text-white transition-colors duration-300'
=======
                            <Star className='w-3 h-3 text-yellow-400 fill-current' />
                            <span>{program.rating}</span>
                          </div>
                        </div>
                      </div>
<div className='text-right flex-shrink-0'>
                        <div className='text-2xl font-bold text-cyan-400 mb-2'>
                          {program.price}
                        </div>
                        <button
                          onClick={() => toggleProgram(program.id)}
className='text-gray-400 hover:text-white transition-colors duration-300'
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-2533
                        >
                          {expandedProgram === program.id ? (
                            <ChevronUp className='w-5 h-5' />
                          ) : (
<<<<<<< HEAD
                            <ChevronDown className='w-5 h-5' />                          )}
                        </button>
                      </div>
                    </div>
=======
                            <ChevronDown className='w-5 h-5' />
                          )}
                        </button>
                      </div>
                    </div>

>>>>>>> origin/cursor/automate-test-improve-and-merge-code-2533
                    {expandedProgram === program.id && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.3 }}
<<<<<<< HEAD
                        className='mt-4 pt-4 border-t border-gray-700'
=======
className='mt-4 pt-4 border-t border-gray-700'
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-2533
                      >
                        <div className='grid md:grid-cols-2 gap-6'>
                          <div>
                            <h4 className='text-white font-semibold mb-3'>
                              What You'll Learn
                            </h4>
                            <ul className='space-y-2 text-sm text-gray-300'>
                              <li className='flex items-center gap-2'>
                                <CheckCircle className='w-4 h-4 text-green-400' />
                                <span>Core concepts and principles</span>
                              </li>
                              <li className='flex items-center gap-2'>
                                <CheckCircle className='w-4 h-4 text-green-400' />
                                <span>Hands-on practical exercises</span>
                              </li>
                              <li className='flex items-center gap-2'>
                                <CheckCircle className='w-4 h-4 text-green-400' />
                                <span>Real-world project implementation</span>
                              </li>
                              <li className='flex items-center gap-2'>
<<<<<<< HEAD
                                <CheckCircle className='w-4 h-4 text-green-400' />                                <span>Industry best practices</span>
                              </li>
                            </ul>
                          </div>

                          <div>
=======
                                <CheckCircle className='w-4 h-4 text-green-400' />
                                <span>Industry best practices</span>
                              </li>
                            </ul>
                          </div>
<div>
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-2533
                            <h4 className='text-white font-semibold mb-3'>
                              Program Details
                            </h4>
                            <div className='space-y-2 text-sm text-gray-300'>
                              <div className='flex justify-between'>
                                <span>Duration:</span>
                                <span className='text-white'>
                                  {program.duration}
                                </span>
                              </div>
                              <div className='flex justify-between'>
                                <span>Level:</span>
                                <span className='text-white'>
                                  {program.level}
                                </span>
                              </div>
                              <div className='flex justify-between'>
                                <span>Format:</span>
                                <span className='text-white'>
                                  Online + Live Sessions
                                </span>
                              </div>
                              <div className='flex justify-between'>
                                <span>Support:</span>
                                <span className='text-white'>
                                  24/7 Community + Mentors
<<<<<<< HEAD
                                </span>                              </div>
                            </div>
                          </div>
                        </div>

                        <div className='mt-6 flex gap-3'>
=======
                                </span>
                              </div>
                            </div>
                          </div>
                        </div>
<div className='mt-6 flex gap-3'>
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-2533
                          <a
                            href='#'
                            className='flex-1 inline-flex items-center justify-center gap-2 bg-gradient-to-r from-cyan-500 to-blue-500 text-white font-bold py-3 px-6 rounded-xl hover:from-cyan-600 hover:to-blue-600 transition-all duration-300'
                          >
                            Enroll Now
                            <ArrowRight className='w-4 h-4' />
                          </a>
                          <a
                            href='#'
<<<<<<< HEAD
                            className='inline-flex items-center justify-center gap-2 border-2 border-cyan-500 text-cyan-400 font-bold py-3 px-6 rounded-xl hover:bg-cyan-500 hover:text-white transition-all duration-300'                          >
=======
                            className='inline-flex items-center justify-center gap-2 border-2 border-cyan-500 text-cyan-400 font-bold py-3 px-6 rounded-xl hover:bg-cyan-500 hover:text-white transition-all duration-300'
                          >
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-2533
                            Learn More
                          </a>
                        </div>
                      </motion.div>
                    )}
                  </div>
                </motion.div>
=======
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {certificationPaths.map((path, index) => (
                <div
                  key={index}
                  className="bg-white rounded-xl shadow-lg p-8 text-center hover: shadow-xl transition-shadow"
                >
                  <div className="w-16 h-16 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Award className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-3">
                    {path.title}
                  </h3>
                  <p className="text-gray-600 mb-4">{path.description}</p>
                  <div className="text-blue-600 font-semibold mb-6">
                    Duration: {path.duration}
                  </div>

                  <div className="mb-6">
                    <h4 className="text-lg font-semibold text-gray-900 mb-3">
                      Requirements:
                    </h4>
                    <ul className="space-y-2">
                      {path.requirements.map((req, reqIndex) => (
                        <li
                          key={reqIndex}
                          className="flex items-center text-sm text-gray-700"
                        >
                          <CheckCircle className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
                          {req}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="mb-6">
                    <h4 className="text-lg font-semibold text-gray-900 mb-3">
                      Benefits:{' '}
                    </h4>
                    <ul className="space-y-2">
                      {path.benefits.map((benefit, benefitIndex) => (
                        <li
                          key={benefitIndex}
                          className="flex items-center text-sm text-gray-700"
                        >
                          <Lightbulb className="w-4 h-4 text-yellow-500 mr-2 flex-shrink-0" />
                          {benefit}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <Link href="/contact">
                    <button className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white py-3 px-6 rounded-lg font-semibold hover: from-blue-700 hover:to-purple-700 transition-all duration-300">
                      Start Certification
                      <ArrowRight className="w-4 h-4 ml-2 inline" />
                    </button>
                  </Link>
                </div>
>>>>>>> origin/cursor/automate-test-fix-improve-and-merge-code-7ff0
              ))}
            </div>
          </div>
        </section>

<<<<<<< HEAD
        {/* Learning Paths */}
<<<<<<< HEAD
        <section className='py-20'>
          <div className='container mx-auto px-4'>            <motion.div
=======
<section className='py-20'>
          <div className='container mx-auto px-4'>
            <motion.div
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-2533
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
<<<<<<< HEAD
              className='text-center mb-16'
=======
className='text-center mb-16'
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-2533
            >
              <h2 className='text-4xl font-bold text-white mb-4'>
                Learning Paths
=======
        {/* Testimonials */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm: px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">
                Student Success Stories
>>>>>>> origin/cursor/automate-test-fix-improve-and-merge-code-7ff0
              </h2>
              <p className='text-xl text-gray-400'>
                Structured learning journeys to master complete technology
                domains
              </p>
<<<<<<< HEAD
            </motion.div>

            <div className='grid lg:grid-cols-3 gap-8'>
              {[
                {
                  title: 'AI Consciousness Expert',
                  description:
                    'Complete path from fundamentals to advanced AI consciousness development.',
                  duration: '6-12 months',
                  courses: 8,
                  level: 'Beginner to Expert',
                  icon: <Brain className='w-12 h-12' />,
                  color: 'cyan',
                  path: [
                    'AI Consciousness Fundamentals',
                    'Consciousness Architecture Design',
                    'Advanced Implementation',
                    'Ethics and Governance',
                    'API Development',
                    'System Optimization',
                    'Real-world Applications',
                    'Expert Certification',
                  ],
                },
                {
                  title: 'Quantum Computing Specialist',
                  description:
                    'Master quantum computing from basic principles to enterprise implementation.',
                  duration: '8-16 months',
                  courses: 6,
                  level: 'Intermediate to Expert',
                  icon: <Atom className='w-12 h-12' />,
                  color: 'purple',
                  path: [
                    'Quantum Computing Basics',
                    'Quantum Algorithms',
                    'Machine Learning Integration',
                    'Security Implementation',
                    'Enterprise Solutions',
                    'Advanced Applications',
                  ],
                },
                {
                  title: 'Autonomous Operations Leader',
                  description:
                    'Lead the transformation to fully autonomous business operations.',
                  duration: '6-10 months',
                  courses: 5,
                  level: 'Intermediate to Advanced',
                  icon: <Rocket className='w-12 h-12' />,
                  color: 'green',
                  path: [
                    'Business Process Analysis',
                    'Automation Strategy',
                    'System Implementation',
                    'Change Management',
                    'Performance Optimization',
                  ],
<<<<<<< HEAD
                },              ].map((path, index) => (
=======
                },
              ].map((path, index) => (
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-2533
                <motion.div
                  key={path.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.2 }}
                  viewport={{ once: true }}
<<<<<<< HEAD
                  className='p-8 bg-gradient-to-br from-gray-900/50 to-gray-800/50 rounded-2xl border border-gray-700/50 hover:border-cyan-500/50 transition-all duration-300'
=======
className='p-8 bg-gradient-to-br from-gray-900/50 to-gray-800/50 rounded-2xl border border-gray-700/50 hover:border-cyan-500/50 transition-all duration-300'
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-2533
                >
                  <div className='text-center mb-6'>
                    <div
                      className={`w-20 h-20 bg-${path.color}-500/20 rounded-2xl flex items-center justify-center mx-auto mb-4`}
                    >
                      {path.icon}
                    </div>
                    <h3 className='text-2xl font-bold text-white mb-3'>
                      {path.title}
                    </h3>
                    <p className='text-gray-300 mb-4'>{path.description}</p>
                    <div className='flex items-center justify-center gap-4 text-sm text-gray-400'>
                      <div className='flex items-center gap-1'>
                        <Clock className='w-4 h-4' />
                        <span>{path.duration}</span>
                      </div>
                      <div className='flex items-center gap-1'>
<<<<<<< HEAD
                        <BookOpen className='w-4 h-4' />                        <span>{path.courses} courses</span>
                      </div>
                    </div>
                  </div>

                  <div className='space-y-3 mb-6'>
=======
                        <BookOpen className='w-4 h-4' />
                        <span>{path.courses} courses</span>
                      </div>
                    </div>
                  </div>
<div className='space-y-3 mb-6'>
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-2533
                    {path.path.map((step, stepIndex) => (
                      <div
                        key={stepIndex}
                        className='flex items-center gap-3 text-sm'
                      >
                        <div className='w-6 h-6 bg-cyan-500/20 text-cyan-400 rounded-full flex items-center justify-center text-xs font-bold'>
                          {stepIndex + 1}
                        </div>
                        <span className='text-gray-300'>{step}</span>
                      </div>
                    ))}
                  </div>

                  <a
                    href='#'
                    className={`w-full inline-flex items-center justify-center gap-2 bg-${path.color}-500/20 text-${path.color}-400 font-bold py-3 px-6 rounded-xl border border-${path.color}-500/30 hover:bg-${path.color}-500 hover:text-white transition-all duration-300`}
                  >
                    Start Learning Path
<<<<<<< HEAD
                    <ArrowRight className='w-4 h-4' />                  </a>
=======
                    <ArrowRight className='w-4 h-4' />
                  </a>
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-2533
                </motion.div>
=======
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {testimonials.map((testimonial, index) => (
                <div key={index} className="bg-gray-50 rounded-xl p-8">
                  <div className="flex items-center mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star
                        key={i}
                        className="w-5 h-5 text-yellow-400 fill-current"
                      />
                    ))}
                  </div>
                  <blockquote className="text-gray-700 mb-6 italic">
                    "{testimonial.quote}"
                  </blockquote>
                  <div className="flex items-center">
                    <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center mr-4">
                      <Users className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <p className="font-semibold text-gray-900">
                        {testimonial.author}
                      </p>
                      <p className="text-gray-600">{testimonial.title}</p>
                      <p className="text-blue-600 font-semibold">
                        {testimonial.company}
                      </p>
                    </div>
                  </div>
                </div>
>>>>>>> origin/cursor/automate-test-fix-improve-and-merge-code-7ff0
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
<<<<<<< HEAD
<<<<<<< HEAD
        <section className='py-20 bg-gradient-to-r from-cyan-500/10 via-purple-500/10 to-pink-500/10'>
          <div className='container mx-auto px-4 text-center'>            <motion.div
=======
<section className='py-20 bg-gradient-to-r from-cyan-500/10 via-purple-500/10 to-pink-500/10'>
          <div className='container mx-auto px-4 text-center'>
            <motion.div
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-2533
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
<<<<<<< HEAD
              <h2 className='text-4xl font-bold text-white mb-6'>
=======
<h2 className='text-4xl font-bold text-white mb-6'>
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-2533
                Ready to Transform Your Career?
              </h2>
              <p className='text-xl text-gray-300 mb-8 max-w-3xl mx-auto'>
                Join thousands of professionals who have already mastered the
                future of technology. Start your learning journey today and earn
                industry-recognized certifications.
              </p>
              <div className='flex flex-col sm:flex-row gap-4 justify-center'>
                <a
                  href='/contact'
<<<<<<< HEAD
                  className='px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-500 text-white font-bold rounded-xl hover:from-cyan-600 hover:to-blue-600 transition-all duration-300 transform hover:scale-105'                >
                  Get Personalized Guidance
                </a>
                <a
                  href='/resources'
                  className='px-8 py-4 border-2 border-cyan-500 text-cyan-400 font-bold rounded-xl hover:bg-cyan-500 hover:text-white transition-all duration-300'                >
=======
                  className='px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-500 text-white font-bold rounded-xl hover:from-cyan-600 hover:to-blue-600 transition-all duration-300 transform hover:scale-105'
                >
                  Get Personalized Guidance
                </a>
                <a
href='/resources'
                  className='px-8 py-4 border-2 border-cyan-500 text-cyan-400 font-bold rounded-xl hover:bg-cyan-500 hover:text-white transition-all duration-300'
                >
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-2533
                  Explore Free Resources
                </a>
              </div>
            </motion.div>
=======
        <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600">
          <div className="max-w-7xl mx-auto px-4 sm: px-6 lg:px-8 text-center">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
              Ready to Advance Your Career?
            </h2>
            <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
              Join thousands of professionals who have transformed their careers
              with our training programs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link href="/contact">
                <button className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-4 rounded-lg font-semibold transition-colors text-lg">
                  Get Started Today
                  <ArrowRight className="w-5 h-5 ml-2 inline" />
                </button>
              </Link>
              <Link href="#programs">
                <button className="border-2 border-white text-white hover:bg-white hover:text-blue-600 px-8 py-4 rounded-lg font-semibold transition-colors text-lg">
                  View All Programs
                </button>
              </Link>
            </div>
>>>>>>> origin/cursor/automate-test-fix-improve-and-merge-code-7ff0
          </div>
        </section>
<<<<<<< HEAD
origin/cursor/integrate-build-improve-and-re-verify-c7b5
origin/automation-improvements-final
      </div>
    </Layout>
  ),
origin/cursor/integrate-build-improve-and-re-verify-c7b5
>>>>>>> c56320a4e91ebfd91859a6eed8c13818d8c9efd6
      </div>
    </MainLayout>
  );
<<<<<<< HEAD
<<<<<<< HEAD
};
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f

<<<<<<< HEAD
export default Page;
=======
}
};
}
  )
}
export default Training;
};export default Training;
ursor/integrate-build-improve-and-re-verify-8f7d
      </div>
    </Layout>




  {
  opacity: 0, y: 20 

}animate= {
  {
  opacity: 1, y: 0 

}transition= {
  {
  duration: 0.8 

}> <h1 className="text-5xl lg:text-7xl font-bold bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent mb-6" > Training & Certification </h1> </p> <div className="flex flex-wrap justify-center gap-4 text-gray-400" > <div className="flex items-center gap-2" > <GraduationCap className="w-5 h-5" /> <span>Expert-Led Training</span> </div> <div className="flex items-center gap-2" > <Award className="w-5 h-5" /> <span>Industry Certifications</span> </div> <div className="flex items-center gap-2" > <Users className="w-5 h-5" /> <span>Global Community</span> </div> </div> </motion.div> </div> </section> key= {
  category.id 
}onClick= {
  () => setSelectedCategory (category.id) 
}className= {
  `px-6 py-3 rounded-xl font-medium transition-all duration-300 $ {
  selectedCategory === category.id ? 'bg-cyan-500 text-white' : 'bg-gray-700 text-gray-300 hover:bg-gray-600' 
}` 
}> {
  category.name 
}({
  category.count 
}) </button>) ) 
}</div> </div> </section> > <h2 className="text-4xl font-bold text-white mb-4" > Featured Programs </h2> <p className="text-xl text-gray-400" > Our most popular and comprehensive training programs </p> </motion.div> </div>) ) 
}</div> <a href="#" className="w-full inline-flex items-center justify-center gap-2 bg-gradient-to-r from-cyan-500 to-blue-500 text-white font-bold py-3 px-6 rounded-xl hover:from-cyan-600 hover:to-blue-600 transition-all duration-300 transform hover:scale-105" > Enroll Now <ArrowRight className="w-4 h-4" /> </Link> </div> </motion.div>) ) 
}</div> </div> </section> > <h2 className="text-4xl font-bold text-white mb-4" > All Training Programs </h2> <p className="text-xl text-gray-400" > Comprehensive collection of training programs across all technology domains </p> </motion.div> </div> </div> </div>) : (<ChevronDown className="w-5 h-5" />) 
}</button> </div> </div> {
  expandedProgram === program.id && (<motion.div > <div className="grid md:grid-cols-2 gap-6" > <div> <h4 className="text-white font-semibold mb-3" >What You'll Learn</h4> <ul className="space-y-2 text-sm text-gray-300" > <li className="flex items-center gap-2" > <CheckCircle className="w-4 h-4 text-green-400" /> <span>Core concepts and principles</span> </li> <li className="flex items-center gap-2" > <CheckCircle className="w-4 h-4 text-green-400" /> <span>Hands-on practical exercises</span> </li> <li className="flex items-center gap-2" > <CheckCircle className="w-4 h-4 text-green-400" /> <span>Real-world project implementation</span> </li> <li className="flex items-center gap-2" > <CheckCircle className="w-4 h-4 text-green-400" /> <span>Industry best practices</span> </li> </ul> </div> <div> <h4 className="text-white font-semibold mb-3" >Program Details</h4> <div className="space-y-2 text-sm text-gray-300" > <div className="flex justify-between" > <span>Duration:</span> </div> <div className="flex justify-between" > <span>Level:</span> </div> <div className="flex justify-between" > <span>Format:</span> <span className="text-white" >Online + Live Sessions</span> </div> <div className="flex justify-between" > <span>Support:</span> <span className="text-white" >24/7 Community + Mentors</span> </div> </div> </div> </div> <div className="mt-6 flex gap-3" > <a href="#" className="flex-1 inline-flex items-center justify-center gap-2 bg-gradient-to-r from-cyan-500 to-blue-500 text-white font-bold py-3 px-6 rounded-xl hover:from-cyan-600 hover:to-blue-600 transition-all duration-300" > Enroll Now <ArrowRight className="w-4 h-4" /> </Link> <a href="#" className="inline-flex items-center justify-center gap-2 border-2 border-cyan-500 text-cyan-400 font-bold py-3 px-6 rounded-xl hover:bg-cyan-500 hover:text-white transition-all duration-300" > Learn More </Link> </div> </motion.div>) 
}</div> </motion.div>) ) 
}</div> </div> </section> > <h2 className="text-4xl font-bold text-white mb-4" > Learning Paths </h2> <p className="text-xl text-gray-400" > Structured learning journeys to master complete technology domains </p> </motion.div> </div> </div> </div> </div>) ) 
}</div> <a > Start Learning Path <ArrowRight className="w-4 h-4" /> </Link> </motion.div>) ) 
}</div> </div> </section> <motion.div initial= {
  {
  opacity: 0, y: 20 


};export default Training;

  )
};

export default Training;
};export default Training;

},
export default Training,
            >;
              <h2 className="text-4xl font-bold text-white mb-6">;
                Ready to Transform Your Career?;
              </h2>;
              <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">;
                Join thousands of professionals who have already mastered the future of technology. Start your learning journey today and earn industry-recognized certifications.;
              </p>;
              <div className="flex flex-col sm: flex-row gap-4 justify-center">;
                <a;
                  href="/contact";
                  className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-500 text-white font-bold rounded-xl hover:from-cyan-600 hover:to-blue-600 transition-all duration-300 transform hover:scale-105";
                >;
                  Get Personalized Guidance;
                </a>;
                <a;
                  href="/resources";
                  className="px-8 py-4 border-2 border-cyan-500 text-cyan-400 font-bold rounded-xl hover:bg-cyan-500 hover:text-white transition-all duration-300";
                >;
                  Explore Free Resources;
                </a>;
              </div>;
            </motion.div>;
          </div>;
          <div className="text - center">;
            <p className="text - gray - 600">Training page is under construction.</p>;
          </div>;
        </div>;
      </div>;
    </Layout>);
}
}
  );
}
;
export default Training;
<<<<<<< HEAD
<<<<<<< HEAD
=======
}export default Training;
;
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b
=======
import React from 'react';
import MainLayout from '../src/components/layout/MainLayout';

const Page = () => {
  return (
    <MainLayout 
      title="Page - Zion Tech Group"
      description="Zion Tech Group page"
    >
      <div className="min-h-screen bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 py-20">
          <h1 className="text-4xl font-bold text-gray-900 mb-6">Page</h1>
          <p className="text-xl text-gray-600">Coming soon...</p>
        </div>
      </div>
    </MainLayout>
  );
};

export default Page;
>>>>>>> main
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
>>>>>>> c56320a4e91ebfd91859a6eed8c13818d8c9efd6
<<<<<<< HEAD
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-646c
=======
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-1dc5
=======
>>>>>>> a252feedad80e14c11ed30f5695974c343534e8d
=======
      </div>
    </Layout>
);

  {
  opacity: 0, y: 20 

}animate= {
  {
  opacity: 1, y: 0 

}transition= {
  {
  duration: 0.8 

}> <h1 className="text-5xl lg:text-7xl font-bold bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent mb-6" > Training & Certification </h1> </p> <div className="flex flex-wrap justify-center gap-4 text-gray-400" > <div className="flex items-center gap-2" > <GraduationCap className="w-5 h-5" /> <span>Expert-Led Training</span> </div> <div className="flex items-center gap-2" > <Award className="w-5 h-5" /> <span>Industry Certifications</span> </div> <div className="flex items-center gap-2" > <Users className="w-5 h-5" /> <span>Global Community</span> </div> </div> </motion.div> </div> </section> key= {
  category.id 
}onClick= {
  () => setSelectedCategory (category.id) 
}className= {
  `px-6 py-3 rounded-xl font-medium transition-all duration-300 $ {
  selectedCategory === category.id ? 'bg-cyan-500 text-white' : 'bg-gray-700 text-gray-300 hover:bg-gray-600' 
}` 
}> {
  category.name 
}({
  category.count 
}) </button>) ) 
}</div> </div> </section> > <h2 className="text-4xl font-bold text-white mb-4" > Featured Programs </h2> <p className="text-xl text-gray-400" > Our most popular and comprehensive training programs </p> </motion.div> </div>) ) 
}</div> <a href="#" className="w-full inline-flex items-center justify-center gap-2 bg-gradient-to-r from-cyan-500 to-blue-500 text-white font-bold py-3 px-6 rounded-xl hover:from-cyan-600 hover:to-blue-600 transition-all duration-300 transform hover:scale-105" > Enroll Now <ArrowRight className="w-4 h-4" /> </Link> </div> </motion.div>) ) 
}</div> </div> </section> > <h2 className="text-4xl font-bold text-white mb-4" > All Training Programs </h2> <p className="text-xl text-gray-400" > Comprehensive collection of training programs across all technology domains </p> </motion.div> </div> </div> </div>) : (<ChevronDown className="w-5 h-5" />) 
}</button> </div> </div> {
  expandedProgram === program.id && (<motion.div > <div className="grid md:grid-cols-2 gap-6" > <div> <h4 className="text-white font-semibold mb-3" >What You'll Learn</h4> <ul className="space-y-2 text-sm text-gray-300" > <li className="flex items-center gap-2" > <CheckCircle className="w-4 h-4 text-green-400" /> <span>Core concepts and principles</span> </li> <li className="flex items-center gap-2" > <CheckCircle className="w-4 h-4 text-green-400" /> <span>Hands-on practical exercises</span> </li> <li className="flex items-center gap-2" > <CheckCircle className="w-4 h-4 text-green-400" /> <span>Real-world project implementation</span> </li> <li className="flex items-center gap-2" > <CheckCircle className="w-4 h-4 text-green-400" /> <span>Industry best practices</span> </li> </ul> </div> <div> <h4 className="text-white font-semibold mb-3" >Program Details</h4> <div className="space-y-2 text-sm text-gray-300" > <div className="flex justify-between" > <span>Duration:</span> </div> <div className="flex justify-between" > <span>Level:</span> </div> <div className="flex justify-between" > <span>Format:</span> <span className="text-white" >Online + Live Sessions</span> </div> <div className="flex justify-between" > <span>Support:</span> <span className="text-white" >24/7 Community + Mentors</span> </div> </div> </div> </div> <div className="mt-6 flex gap-3" > <a href="#" className="flex-1 inline-flex items-center justify-center gap-2 bg-gradient-to-r from-cyan-500 to-blue-500 text-white font-bold py-3 px-6 rounded-xl hover:from-cyan-600 hover:to-blue-600 transition-all duration-300" > Enroll Now <ArrowRight className="w-4 h-4" /> </Link> <a href="#" className="inline-flex items-center justify-center gap-2 border-2 border-cyan-500 text-cyan-400 font-bold py-3 px-6 rounded-xl hover:bg-cyan-500 hover:text-white transition-all duration-300" > Learn More </Link> </div> </motion.div>) 
}</div> </motion.div>) ) 
}</div> </div> </section> > <h2 className="text-4xl font-bold text-white mb-4" > Learning Paths </h2> <p className="text-xl text-gray-400" > Structured learning journeys to master complete technology domains </p> </motion.div> </div> </div> </div> </div>) ) 
}</div> <a > Start Learning Path <ArrowRight className="w-4 h-4" /> </Link> </motion.div>) ) 
}</div> </div> </section> <motion.div initial= {
  {
  opacity: 0, y: 20 

}whileInView= {
  {
  opacity: 1, y: 0 

}transition= {
  {
  duration: 0.8 

}viewport= {
  {
  once: true 

}> <h2 className="text-4xl font-bold text-white mb-6" > Ready to Transform Your Career? </h2> <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto" > Join thousands of professionals who have already mastered the future of technology. Start your learning journey today and earn industry-recognized certifications. </p> <a href="/contact" className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-500 text-white font-bold rounded-xl hover:from-cyan-600 hover:to-blue-600 transition-all duration-300 transform hover:scale-105" > Get Personalized Guidance </Link> <a href="/resources" className="px-8 py-4 border-2 border-cyan-500 text-cyan-400 font-bold rounded-xl hover:bg-cyan-500 hover:text-white transition-all duration-300" > Explore Free Resources </Link> </div> </motion.div> </div> </section> </div> </Layout>) 
};
export default Training;
};export default Training;
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-2533
=======
}
>>>>>>> origin/cursor/automate-test-fix-improve-and-merge-code-7ff0
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f

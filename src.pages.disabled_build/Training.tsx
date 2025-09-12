import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  GraduationCap, 
  BookOpen, 
  Users, 
  Clock, 
  Star, 
  Search, 
  Filter, 
  Play, 
  Download, 
  ExternalLink, 
  ArrowRight, 
  Brain, 
  Cloud, 
  Shield, 
  Database, 
  Zap, 
  Globe, 
  Target, 
  TrendingUp, 
  Award, 
  CheckCircle, 
  Calendar, 
  MapPin, 
  DollarSign, 
  FileText, 
  Lightbulb, 
  Microscope, 
  Rocket, 
  Code, 
  Network, 
  Cpu, 
  Lock, 
  BarChart3, 
  Palette, 
  Smartphone, 
  Eye 
} from 'lucide-react';
import { SEO } from '../components/SEO';

export default function Training() {
  const [searchQuery, setSearchQuery] = useState('');
  const [activeCategory, setActiveCategory] = useState('all');
  const [activeLevel, setActiveLevel] = useState('all');
  const [activeFormat, setActiveFormat] = useState('all');

  const categories = [
    { id: 'all', name: 'All Categories', icon: GraduationCap, count: 0 },
    { id: 'ai-ml', name: 'AI & Machine Learning', icon: Brain, count: 8 },
    { id: 'cloud', name: 'Cloud & Infrastructure', icon: Cloud, count: 6 },
    { id: 'security', name: 'Cybersecurity', icon: Shield, count: 5 },
    { id: 'data', name: 'Data & Analytics', icon: Database, count: 7 },
    { id: 'emerging', name: 'Emerging Technologies', icon: Zap, count: 4 },
    { id: 'strategy', name: 'Digital Strategy', icon: Target, count: 3 },
    { id: 'leadership', name: 'Leadership & Management', icon: Users, count: 4 }
  ];

  const levels = [
    { id: 'all', name: 'All Levels', count: 0 },
    { id: 'beginner', name: 'Beginner', count: 0 },
    { id: 'intermediate', name: 'Intermediate', count: 0 },
    { id: 'advanced', name: 'Advanced', count: 0 },
    { id: 'expert', name: 'Expert', count: 0 }
  ];

  const formats = [
    { id: 'all', name: 'All Formats', count: 0 },
    { id: 'online', name: 'Online', count: 0 },
    { id: 'in-person', name: 'In-Person', count: 0 },
    { id: 'hybrid', name: 'Hybrid', count: 0 },
    { id: 'self-paced', name: 'Self-Paced', count: 0 }
  ];

  const trainingPrograms = [
    {
      id: 1,
      title: 'AI Fundamentals & Machine Learning',
      description: 'Master the basics of artificial intelligence and machine learning algorithms',
      category: 'ai-ml',
      level: 'beginner',
      format: 'online',
      duration: '8 weeks',
      instructor: 'Dr. Sarah Chen',
      rating: 4.8,
      students: 1247,
      price: '$299',
      image: '/images/training/ai-fundamentals.jpg',
      tags: ['Python', 'TensorFlow', 'Neural Networks', 'Data Science'],
      features: [
        'Hands-on projects with real datasets',
        'Live Q&A sessions with experts',
        'Certificate upon completion',
        'Lifetime access to materials'
      ]
    },
    {
      id: 2,
      title: 'Advanced Cloud Architecture',
      description: 'Design and implement scalable cloud solutions for enterprise applications',
      category: 'cloud',
      level: 'advanced',
      format: 'hybrid',
      duration: '12 weeks',
      instructor: 'Michael Rodriguez',
      rating: 4.9,
      students: 892,
      price: '$499',
      image: '/images/training/cloud-architecture.jpg',
      tags: ['AWS', 'Azure', 'Kubernetes', 'Microservices'],
      features: [
        'Real-world case studies',
        'Architecture design workshops',
        'Industry best practices',
        'Networking opportunities'
      ]
    },
    {
      id: 3,
      title: 'Cybersecurity Masterclass',
      description: 'Comprehensive security training covering threat detection and prevention',
      category: 'security',
      level: 'intermediate',
      format: 'in-person',
      duration: '6 weeks',
      instructor: 'Lisa Thompson',
      rating: 4.7,
      students: 1563,
      price: '$399',
      image: '/images/training/cybersecurity.jpg',
      tags: ['Penetration Testing', 'Incident Response', 'Compliance', 'Risk Management'],
      features: [
        'Hands-on lab exercises',
        'Security tool training',
        'Industry certifications',
        'Career guidance'
      ]
    },
    {
      id: 4,
      title: 'Data Science & Analytics',
      description: 'Learn data analysis, visualization, and statistical modeling techniques',
      category: 'data',
      level: 'intermediate',
      format: 'online',
      duration: '10 weeks',
      instructor: 'Dr. James Wilson',
      rating: 4.6,
      students: 2103,
      price: '$349',
      image: '/images/training/data-science.jpg',
      tags: ['Python', 'R', 'SQL', 'Tableau', 'Machine Learning'],
      features: [
        'Real-world data projects',
        'Statistical analysis tools',
        'Data visualization skills',
        'Portfolio development'
      ]
    },
    {
      id: 5,
      title: 'Digital Transformation Leadership',
      description: 'Lead organizational change and digital transformation initiatives',
      category: 'leadership',
      level: 'expert',
      format: 'hybrid',
      duration: '4 weeks',
      instructor: 'Jennifer Park',
      rating: 4.8,
      students: 45,
      price: '$3999',
      image: '/images/training/digital-leadership.jpg',
      tags: ['Leadership', 'Digital Transformation', 'Change Management', 'Strategy'],
      features: [
        'Digital Strategy Development',
        'Change Management and Culture',
        'Technology Selection and Implementation',
        'Stakeholder Management',
        'Success Measurement'
      ]
    }
  ];

  // Update counts
  React.useEffect(() => {
    categories.forEach(cat => {
      if (cat.id === 'all') {
        cat.count = trainingPrograms.length;
      } else {
        cat.count = trainingPrograms.filter(program => program.category === cat.id).length;
      }
    });

    levels.forEach(level => {
      if (level.id === 'all') {
        level.count = trainingPrograms.length;
      } else {
        level.count = trainingPrograms.filter(program => program.level === level.id).length;
      }
    });

    formats.forEach(format => {
      if (format.id === 'all') {
        format.count = trainingPrograms.length;
      } else {
        format.count = trainingPrograms.filter(program => program.format === format.id).length;
      }
    });
  }, []);

  const filteredPrograms = trainingPrograms.filter(program => {
    const matchesSearch = program.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         program.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         program.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()));

    const matchesCategory = activeCategory === 'all' || program.category === activeCategory;
    const matchesLevel = activeLevel === 'all' || program.level === activeLevel;
    const matchesFormat = activeFormat === 'all' || program.format === activeFormat;

    return matchesSearch && matchesCategory && matchesLevel && matchesFormat;
  });

  const getCategoryIcon = (categoryId: string) => {
    const category = categories.find(c => c.id === categoryId);
    return category ? React.createElement(category.icon, { className: "w-5 h-5" }) : <GraduationCap className="w-5 h-5" />;
  };

  const getLevelColor = (level: string) => {
    switch (level) {
      case 'beginner': return 'text-green-400';
      case 'intermediate': return 'text-yellow-400';
      case 'advanced': return 'text-orange-400';
      case 'expert': return 'text-red-400';
      default: return 'text-slate-400';
    }
  };

  const getFormatIcon = (format: string) => {
    switch (format) {
      case 'online': return <Globe className="w-4 h-4" />;
      case 'in-person': return <MapPin className="w-4 h-4" />;
      case 'hybrid': return <Users className="w-4 h-4" />;
      case 'self-paced': return <Clock className="w-4 h-4" />;
      default: return <BookOpen className="w-4 h-4" />;
    }
  };

  return (
    <>
      <SEO 
        title="Training & Development - Zion Tech Group"
        description="Comprehensive training programs in AI, cloud computing, cybersecurity, and emerging technologies. Advance your career with expert-led courses."
        keywords="training, AI courses, cloud computing, cybersecurity, machine learning, professional development"
      />
      
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
        {/* Hero Section */}
        <div className="bg-gradient-to-r from-blue-600 to-purple-600 py-20">
          <div className="container mx-auto px-4 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="inline-flex items-center justify-center w-20 h-20 bg-white/20 rounded-2xl mb-6">
                <GraduationCap className="w-10 h-10 text-white" />
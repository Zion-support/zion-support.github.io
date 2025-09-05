import { motion } from 'framer-motion';
import Head from 'next/head';
import Link from 'next/link';
import { 
  MapPin, 
  Clock, 
  Users, 
  Heart, 
  Zap, 
  Award, 
  BookOpen, 
  Coffee, 
  Laptop, 
  Globe, 
  ArrowRight, 
  CheckCircle 
} from 'lucide-react';

const benefits = [
  {
    icon: Heart,
    title: 'Health & Wellness',
    description: 'Comprehensive health insurance and wellness programs'
  },
  {
    icon: Laptop,
    title: 'Remote Work',
    description: 'Work from anywhere with flexible schedules'
  },
  {
    icon: BookOpen,
    title: 'Learning & Development',
    description: 'Annual learning budget and conference attendance'
  },
  {
    icon: Award,
    title: 'Career Growth',
    description: 'Clear career paths and promotion opportunities'
  },
  {
    icon: Coffee,
    title: 'Team Culture',
    description: 'Collaborative and inclusive work environment'
  },
  {
    icon: Globe,
    title: 'Global Impact',
    description: 'Work on projects that make a difference worldwide'
  }
];

const positions = [
  {
    icon: Code,
    title: 'Senior Software Engineer',
    department: 'Engineering',
    description: 'Lead development of cutting-edge AI and machine learning solutions.',
    requirements: [
      '5+ years of software development experience',
      'Strong background in AI/ML technologies',
      'Experience with cloud platforms (AWS, Azure, GCP)',
      'Excellent problem-solving skills'
    ],
    benefits: ['Competitive salary', 'Health insurance', 'Remote work', 'Learning budget']
  },
  {
    icon: Brain,
    title: 'AI Research Scientist',
    department: 'Research',
    description: 'Conduct groundbreaking research in artificial intelligence and machine learning.',
    requirements: [
      'PhD in Computer Science or related field',
      'Strong publication record in AI/ML',
      'Experience with deep learning frameworks',
      'Excellent analytical and research skills'
    ],
    benefits: ['Competitive salary', 'Health insurance', 'Remote work', 'Learning budget']
  },
  {
    icon: Users,
    title: 'Product Manager',
    department: 'Product',
    description: 'Drive product strategy and roadmap for AI-powered solutions.',
    requirements: [
      '5+ years of product management',
      'AI/ML product experience preferred',
      'Strong analytical skills',
      'Excellent communication skills'
    ],
    benefits: ['Competitive salary', 'Health insurance', 'Remote work', 'Learning budget']
  }
];

const jobOpenings = [
  {
    title: 'Senior AI Engineer',
    location: 'Remote / Delaware',
    type: 'Full-time',
    department: 'Engineering',
    description: 'Lead the development of cutting-edge AI solutions and machine learning models.',
    requirements: [
      '5+ years of experience in AI/ML',
      'Strong Python and TensorFlow skills',
      'Experience with cloud platforms',
      'PhD in Computer Science preferred'
    ],
    benefits: ['Competitive salary', 'Health insurance', 'Remote work', 'Learning budget']
  },
  {
    title: 'Full Stack Developer',
    location: 'Remote / Delaware',
    type: 'Full-time',
    department: 'Engineering',
    description: 'Build scalable web applications and APIs using modern technologies.',
    requirements: [
      '3+ years of full-stack development',
      'React, Node.js, and database experience',
      'API design and development',
      'Strong problem-solving skills'
    ],
    benefits: ['Competitive salary', 'Health insurance', 'Remote work', 'Learning budget']
  },
  {
    title: 'DevOps Engineer',
    location: 'Remote / Delaware',
    type: 'Full-time',
    department: 'Engineering',
    description: 'Manage cloud infrastructure and deployment pipelines for our AI services.',
    requirements: [
      '4+ years of DevOps experience',
      'AWS/Azure/GCP expertise',
      'Docker and Kubernetes knowledge',
      'CI/CD pipeline experience'
    ],
    benefits: ['Competitive salary', 'Health insurance', 'Remote work', 'Learning budget']
  },
  {
    title: 'Product Manager',
    location: 'Remote / Delaware',
    type: 'Full-time',
    department: 'Product',
    description: 'Drive product strategy and roadmap for our AI and technology solutions.',
    requirements: [
      '5+ years of product management',
      'AI/ML product experience preferred',
      'Strong analytical skills',
      'Excellent communication skills'
    ],
    benefits: ['Competitive salary', 'Health insurance', 'Remote work', 'Learning budget']
  }
];

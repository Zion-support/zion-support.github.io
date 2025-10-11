'use client'
import React from 'react'
import { Helmet } from 'react-helmet-async'
import Navigation from '../components/Navigation'
import Footer from '../components/Footer'
import { MapPin, Clock, Users, ArrowRight, CheckCircle, Star, Heart, Zap } from 'lucide-react'
const CareersPage: React.FC = () => {
  const jobOpenings = [
    {
      title: 'Senior AI Engineer',
      department: 'AI Solutions',
      location: 'Remote / Delaware',
      type: 'Full-time',
      experience: '5+ years',
      description: 'Lead the development of cutting-edge AI solutions and machine learning models for enterprise clients.',
      requirements: [
        'Master\'s degree in Computer Science or related field',
        '5+ years experience in AI/ML development',
        'Expertise in Python, TensorFlow, PyTorch',
        'Experience with cloud platforms (AWS, Azure, GCP)',
        'Strong problem-solving and communication skills'
      ],
      benefits: [
        'Competitive salary and equity',
        'Health, dental, and vision insurance',
        'Flexible work arrangements',
        'Professional development budget',
        'Unlimited PTO'
      ]
    },
    {
      title: 'Cloud Solutions Architect',
      department: 'IT Services',
      location: 'Remote / Delaware',
      type: 'Full-time',
      experience: '7+ years',
      description: 'Design and implement scalable cloud architectures for enterprise clients.',
      requirements: [
        'Bachelor\'s degree in Computer Science or related field',
        '7+ years experience in cloud architecture',
        'Expertise in AWS, Azure, or GCP',
        'Experience with containerization and orchestration',
        'Strong leadership and communication skills'
      ],
      benefits: [
        'Competitive salary and equity',
        'Health, dental, and vision insurance',
        'Flexible work arrangements',
        'Professional development budget',
        'Unlimited PTO'
      ]
    },
    {
      title: 'Cybersecurity Specialist',
      department: 'Security',
      location: 'New York, NY',
      type: 'Full-time',
      experience: '4+ years',
      description: 'Protect our clients\' digital assets with advanced security solutions.',
      requirements: [
        'Bachelor\'s degree in Cybersecurity or related field',
        '4+ years experience in cybersecurity',
        'Certifications: CISSP, CISM, or equivalent',
        'Experience with security tools and frameworks',
        'Strong analytical and problem-solving skills'
      ],
      benefits: [
        'Competitive salary and equity',
        'Health, dental, and vision insurance',
        'Flexible work arrangements',
        'Professional development budget',
        'Unlimited PTO'
      ]
    }
  ]
location: 'San Francisco, CA',
      type: 'Full-time',
      experience: '5+ years',
      description: 'Lead the development of cutting-edge AI solutions and machine learning models.',
      requirements: [
        'Master\'s degree in Computer Science or related field',
        '5+ years of experience in AI/ML development',
        'Proficiency in Python, TensorFlow, and PyTorch',
        'Experience with cloud platforms (AWS, GCP, Azure)'
      ],
      benefits: [
        'Competitive salary and equity',
        'Health, dental, and vision insurance',
        'Flexible work arrangements',
        'Professional development budget'
      ],
      posted: '2 days ago'
    },
    {
      id: '2',
      title: 'Full Stack Developer',
      department: 'Engineering',
      location: 'Remote',
      type: 'Full-time',
      experience: '3+ years',
      description: 'Build scalable web applications using modern technologies and best practices.',
      requirements: [
        'Bachelor\'s degree in Computer Science or related field',
        '3+ years of full-stack development experience',
        'Proficiency in React, Node.js, and TypeScript',
        'Experience with databases and cloud services'
      ],
      benefits: [
        'Competitive salary',
        'Remote work flexibility',
        'Health insurance',
        'Learning and development opportunities'
      ],
      posted: '1 week ago'
    },
    {
      id: '3',
      title: 'DevOps Engineer',
      department: 'Engineering',
      location: 'New York, NY',
      type: 'Full-time',
      experience: '4+ years',
      description: 'Manage and optimize our cloud infrastructure and deployment pipelines.',
      requirements: [
        'Bachelor\'s degree in Computer Science or related field',
        '4+ years of DevOps experience',
        'Experience with AWS, Docker, and Kubernetes',
        'Knowledge of CI/CD pipelines and monitoring tools'
      ],
      benefits: [
        'Competitive salary and bonuses',
        'Health and dental insurance',
        '401(k) with company matching',
        'Flexible PTO'
      ],
      posted: '3 days ago'
    }
  ];
  const companyBenefits = [
    {
      icon: Star,
      title: 'Competitive Compensation',
      description: 'We offer competitive salaries and equity packages to attract top talent.'
    },
    {
      icon: Heart,
      title: 'Health & Wellness',
      description: 'Comprehensive health, dental, and vision insurance for you and your family.'
    },
    {
      icon: Award,
      title: 'Professional Growth',
      description: 'Continuous learning opportunities and career development programs.'
    },
    {
      icon: Users,
      title: 'Collaborative Culture',
      description: 'Work with talented, passionate people in a supportive environment.'
    },
    {
      icon: Zap,
      title: 'Innovation Focus',
      description: 'Be part of cutting-edge projects that shape the future of technology.'
    },
    {
      icon: GraduationCap,
      title: 'Learning Budget',
      description: 'Annual budget for courses, conferences, and professional development.'
    }
  ];
  return (
    <>

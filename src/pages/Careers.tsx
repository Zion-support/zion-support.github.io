import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { SEO } from '../components/SEO';
import { Briefcase, 
  Users, 
  Globe, 
  Zap, 
  Heart, 
  Award,
  ArrowRight,
  MapPin,
  Clock,
  DollarSign,
  Brain,
  Shield,
  Cloud,
  Database,
  Target,
  CheckCircle,
  Mail,
  Phone,
  ExternalLink
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

export default function Careers() {
  const [selectedCategory, setSelectedCategory] = useState('all');

  const departments = [
    { id: 'all', name: 'All Departments', count: 12 },
    { id: 'engineering', name: 'Engineering', count: 5 },
    { id: 'sales', name: 'Sales & Business Development', count: 3 },
    { id: 'marketing', name: 'Marketing', count: 2 },
    { id: 'operations', name: 'Operations', count: 2 }
  ];

  const jobListings = [
    {
      id: 1,
      title: "Senior AI Engineer",
      department: "Artificial Intelligence",
      location: "Remote / San Francisco",
      type: "Full-time",
      experience: "5+ years",
      salary: "$120,000 - $180,000",
      description: "Lead development of cutting-edge AI solutions for enterprise clients.",
      requirements: [
        "PhD in Computer Science or related field",
        "5+ years of machine learning experience",
        "Expertise in Python, TensorFlow, PyTorch",
        "Experience with large language models",
        "Strong background in NLP and computer vision"
      ],
      benefits: ["Competitive salary", "Health insurance", "Remote work", "AI research opportunities"],
      category: "ai"
    },
    {
      id: 2,
      title: "Cybersecurity Specialist",
      department: "Security",
      location: "Remote / New York",
      type: "Full-time",
      experience: "3+ years",
      salary: "$90,000 - $140,000",
      description: "Protect our systems and data from cyber threats and ensure compliance.",
      requirements: [
        "Bachelor's degree in Cybersecurity or related field",
        "3+ years of security experience",
        "Knowledge of security frameworks and compliance",
        "Experience with penetration testing",
        "Strong analytical and problem-solving skills"
      ],
      benefits: ["Competitive salary", "Health insurance", "Remote work", "Security certifications"],
      category: "security"
    },
    {
      id: 3,
      title: "Cloud Solutions Architect",
      department: "Cloud Infrastructure",
      location: "Remote / Austin",
      type: "Full-time",
      experience: "4+ years",
      salary: "$110,000 - $160,000",
      description: "Design and implement scalable cloud solutions for enterprise clients.",
      requirements: [
        "Bachelor's degree in Computer Science or related field",
        "4+ years of cloud architecture experience",
        "Expertise in AWS, Azure, or GCP",
        "Experience with infrastructure as code",
        "Strong communication and leadership skills"
      ],
      benefits: ["Competitive salary", "Health insurance", "Remote work", "Cloud certifications"],
      category: "cloud"
    }
  ];

  const companyValues = [
    {
      icon: Brain,
      title: "Innovation First",
      description: "We push the boundaries of what's possible in technology"
    },
    {
      icon: Heart,
      title: "People Matter",
      description: "Our team is our greatest asset and we invest in their growth"
    },
    {
      icon: Shield,
      title: "Trust & Security",
      description: "We build secure, reliable solutions that our clients can depend on"
    },
    {
      icon: Globe,
      title: "Global Impact",
      description: "We solve problems that affect people worldwide"
    }
  ];

  const benefits = [
    {
      icon: DollarSign,
      title: "Competitive Compensation",
      description: "Above-market salaries with performance bonuses and equity options"
    },
    {
      icon: Heart,
      title: "Health & Wellness",
      description: "Comprehensive health, dental, and vision coverage for you and your family"
    },
    {
      icon: Globe,
      title: "Remote First",
      description: "Work from anywhere with flexible hours and location independence"
    },
    {
      icon: Award,
      title: "Learning & Development",
      description: "Continuous learning opportunities, conferences, and skill development"
    },
    {
      icon: Users,
      title: "Team Culture",
      description: "Collaborative environment with smart, passionate colleagues"
    },
    {
      icon: Award,
      title: "Recognition",
      description: "Regular recognition and rewards for outstanding contributions"
    }
  ];

  const filteredJobs = jobListings.filter(job => 
    selectedCategory === 'all' || job.category === selectedCategory
  );
<<<<<<< HEAD

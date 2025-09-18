import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { motion } from 'framer-motion';
import {
  BookOpen,
  ArrowRight,
  CheckCircle,
  Star,
  Users,
  BarChart3,
  Clock,
  Award,
  Brain,
  Shield,
  Target,
  TrendingUp,
  Globe,
  Building,
  Rocket,
  Lock,
  Activity,
  GraduationCap,
  FileText,
  Database,
  Video
} from 'lucide-react';
import Layout from '../../components/Layout';

const solutions = [
  {
    title: 'Learning Management System',
    description: 'Comprehensive LMS with AI-powered personalized learning paths and analytics.',
    icon: BookOpen,
    features: ['Personalized Learning', 'Progress Tracking', 'Interactive Content', 'Assessment Tools'],
    benefits: ['40% better outcomes', '60% engagement increase', 'Real-time analytics', 'Mobile access']
  },
  {
    title: 'Virtual Classroom Platform',
    description: 'Advanced virtual classroom with video conferencing and collaboration tools.',
    icon: Video,
    features: ['HD Video Conferencing', 'Screen Sharing', 'Breakout Rooms', 'Recording & Playback'],
    benefits: ['99% uptime', 'Global accessibility', 'Interactive features', 'Seamless integration']
  },
  {
    title: 'Student Analytics',
    description: 'AI-powered student performance analytics and early intervention systems.',
    icon: BarChart3,
    features: ['Performance Tracking', 'Predictive Analytics', 'Early Warning System', 'Intervention Recommendations'],
    benefits: ['30% dropout reduction', '25% grade improvement', 'Proactive support', 'Data-driven insights']
  },
  {
    title: 'Administrative Automation',
    description: 'Streamline administrative processes with automated workflows and systems.',
    icon: Building,
    features: ['Enrollment Management', 'Grade Management', 'Scheduling', 'Communication Tools'],
    benefits: ['50% time savings', 'Reduced errors', 'Better organization', 'Improved efficiency']
  }
];

const benefits = [
  {
    icon: GraduationCap,
    title: 'Student Success',
    description: 'Improve student outcomes with personalized learning and analytics.',
    metric: '40%'
  },
  {
    icon: Users,
    title: 'Engagement',
    description: 'Increase student engagement with interactive and personalized content.',
    metric: '60%'
  },
  {
    icon: Clock,
    title: 'Efficiency',
    description: 'Streamline administrative processes and reduce manual work.',
    metric: '50%'
  },
  {
    icon: Globe,
    title: 'Accessibility',
    description: 'Provide education access to students anywhere, anytime.',
    metric: '99%'
  }
];

export default function Education() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-indigo-900 text-white">
      <Helmet>
        <title>education | Zion Tech Group</title>
        <meta name="description" content="education - Revolutionary technology solutions" />
      </Helmet>
      
      <div className="container mx-auto px-4 py-20">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-6">education</h1>
          <p className="text-xl text-gray-300">Revolutionary technology solutions</p>
        </div>
      </div>
    </div>
  );
};

export default education;

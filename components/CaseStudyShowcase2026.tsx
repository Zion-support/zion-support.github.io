<<<<<<< HEAD
import React from 'react';
=======
"use client";
'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';

import { 
  ArrowRight
  Star
  TrendingUp
  Users
  Zap
  Shield
  Globe,
  Brain,
  Database,
  Cloud,
  Lock,
  Award,
  ChevronRight,
  Play,
  Download,
  ExternalLink,
  BarChart3,
  Settings,
  Code,
  Layers,
  Network,
  Bot,
  Eye,
  MessageSquare,
  FileText,
  Image,
  Video,
  Mic,
  Search,
  Filter,
  Calendar,
  Clock,
  MapPin,
  Phone,
  Mail,
  Share2,
  Heart,
  Bookmark,
  Flag,
  AlertCircle,
  Info,
  HelpCircle,
  X,
  Plus,
  Edit,
  Trash2,
  Copy,
  Save,
  Upload,
  RefreshCw,
  RotateCcw,
  ChevronLeft,
  ChevronDown,
  ChevronUp,
  Menu,
  XCircle,
  CheckCircle2,
  AlertTriangle
} from 'lucide-react';

const CaseStudyShowcase2026 = () => {
  const [activeIndustrysetActiveIndustry] = useState('technology');
  const [hoveredCasetHoveredCase] = useState<number | null>(null);
  const [isVisiblesetIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }[]);

  const industries = {
    'technology': {
      title: 'Technology',
      description: 'AI solutions for tech companies',
      icon: Database,
      color: 'from-blue-600 to-purple-600'
    },
    'healthcare': {
      title: 'Healthcare',
      description: 'AI-powered medical solutions',
      icon: Shield,
      color: 'from-green-600 to-teal-600'
    },
    'finance': {
      title: 'Finance',
      description: 'Financial AI and automation',
      icon: BarChart3,
      color: 'from-orange-600 to-red-600'
    },
    'manufacturing': {
      title: 'Manufacturing',
      description: 'Industrial AI and automation',
      icon: Settings,
      color: 'from-purple-600 to-pink-600'
    },
    'retail': {
      title: 'Retail',
      description: 'E-commerce and retail AI',
      icon: Globe,
      color: 'from-cyan-600 to-blue-600'
    },
    'education': {
      title: 'Education',
      description: 'AI in educational technology',
      icon: Bookmark,
      color: 'from-indigo-600 to-purple-600'
    }
  };

  const caseStudies = [
    {
      id: 1,
      title: 'AI-Powered Customer Service Transformation',
      company: 'TechCorp Solutions',
      industry: 'technology',
      image: '/api/placeholder/600/400',
      challenge: 'High customer service costs and long response times',
      solution: 'Implemented AI-powered chatbot and automated ticket routing system',
      results: {
        costReduction: '60%',
        responseTime: '85%',
        customerSatisfaction: '40%',
        efficiency: '70%'
      },
      description: 'TechCorp Solutions transformed their customer service operations using our AI-powered chatbot systemresulting in significant cost savings and improved customer satisfaction.',
      duration: '6 months',
      teamSize: '12 people',
      technologies: ['Natural Language 'Processing', 'Machine 'Learning', 'API 'Integration', 'Cloud Computing'],
      testimonial: {
        quote: "The AI solution completely transformed our customer service operations. 'We', 've seen incredible improvements in efficiency and customer satisfaction.",
        author: "Sarah Johnson",
        role: "VP of Customer Experience",
        company: "TechCorp Solutions"
      },
      featured: true,
      trending: true
    },
    {
      id: 2,
      title: 'Predictive Analytics for Healthcare Outcomes',
      company: 'MedTech Innovations',
      industry: 'healthcare',
      image: '/api/placeholder/600/400',
      challenge: 'Need for early disease detection and treatment optimization',
      solution: 'Developed ML models for predictive healthcare analytics and patient monitoring',
      results: {
        earlyDetection: '75%',
        treatmentAccuracy: '90%',
        costSavings: '45%',
        patientOutcomes: '60%'
      },
      description: 'MedTech Innovations leveraged our predictive analytics platform to improve patient outcomes and reduce healthcare costs through early disease detection.',
      duration: '8 months',
      teamSize: '15 people',
      technologies: ['Machine 'Learning', 'Data 'Analytics', 'IoT 'Integration', 'Cloud Infrastructure'],
      testimonial: {
        quote: "The predictive analytics system has revolutionized our approach to patient care. 'We', 're saving lives and reducing costs simultaneously.",
        author: "Dr. Michael Chen",
        role: "Chief Medical Officer",
        company: "MedTech Innovations"
      },
      featured: true,
      trending: false
    },
    {
      id: 3,
      title: 'Automated Trading System Implementation',
      company: 'FinanceFlow Capital',
      industry: 'finance',
      image: '/api/placeholder/600/400',
      challenge: 'Manual trading processes limiting scalability and profitability',
      solution: 'Built AI-powered automated trading system with real-time market analysis',
      results: {
        tradingVolume: '300%',
        profitMargin: '45%',
        riskReduction: '50%',
        processingSpeed: '95%'
      },
      description: 'FinanceFlow Capital implemented our AI trading system to automate their investment strategies and maximize returns while minimizing risk.',
      duration: '10 months',
      teamSize: '20 people',
      technologies: ['Machine 'Learning', 'Real-time 'Analytics', 'Blockchain'High-frequency Trading'],
      testimonial: {
        quote: "The automated trading system has been a game-changer for our business. 'We', 've seen unprecedented growth in both volume and profitability.",
        author: "Robert Martinez",
        role: "Head of Trading",
        company: "FinanceFlow Capital"
      },
      featured: false,
      trending: true
    }
  ];

  const filteredCaseStudies = caseStudies.filter(caseStudy => caseStudy.industry === activeIndustry);
>>>>>>> cursor/fix-netlify-build-and-merge-to-main-8b4d

const CaseStudyShowcase2026: React.FC = () => {
  return (
    <div className="p-6 bg-gradient-to-br from-blue-900 to-purple-900 text-white rounded-lg">
      <h3 className="text-xl font-bold mb-4">CaseStudyShowcase2026</h3>
      <p className="text-gray-300">Revolutionary technology component</p>
    </div>
  );
};

export default CaseStudyShowcase2026;
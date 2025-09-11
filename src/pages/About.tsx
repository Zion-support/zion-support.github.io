import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { 
  Users, 
  Target, 
  Award, 
  Globe, 
  Heart, 
  Zap, 
  Brain, 
  Cloud, 
  Shield, 
  ShoppingCart,
  Star,
  Rocket,
  Building,
  Truck,
  Network,
  Eye,
  Lock,
  BarChart3,
  MessageCircle,
  TrendingUp,
  Code,
  Server,
  Smartphone,
  Database,
  Clock,
  BookOpen,
  Briefcase,
  Newspaper,
  Satellite,
  Leaf,
  Gamepad2,
  Coins,
  Cpu,
  PenTool,
  GitFork,
  CheckCircle,
  ArrowRight,
  Phone,
  Mail,
  MapPin
} from 'lucide-react';

interface TeamMember {
  name: string;
  role: string;
  bio: string;
  avatar: string;
  linkedin?: string;
  twitter?: string;
}

interface Achievement {
  year: string;
  title: string;
  description: string;
  icon: any;
}


interface Value {
  title: string;
  description: string;
  icon: any;
  color: string;
}

const teamMembers: TeamMember[] = [
  {
    name: 'Dr. Sarah Chen',
    role: 'Chief Executive Officer',
    bio: 'Former AI Research Director at Google, PhD in Computer Science from Stanford. Leading Zion Tech Group\'s mission to democratize AI technology.',
    avatar: '/avatars/sarah-chen.jpg',
    linkedin: 'https://linkedin.com/in/sarah-chen',
    twitter: 'https://twitter.com/sarahchen'
  },
  {
    name: 'Marcus Rodriguez',
    role: 'Chief Technology Officer',
    bio: 'Ex-Microsoft Principal Engineer with 15+ years in cloud architecture. Expert in scalable AI systems and enterprise solutions.',
    avatar: '/avatars/marcus-rodriguez.jpg',
    linkedin: 'https://linkedin.com/in/marcus-rodriguez'
  },
  {
    name: 'Dr. Emily Watson',
    role: 'Chief AI Officer',
    bio: 'Leading AI researcher with 50+ published papers. Former Director of AI Ethics at OpenAI. PhD in Machine Learning from MIT.',
    avatar: '/avatars/emily-watson.jpg',
    linkedin: 'https://linkedin.com/in/emily-watson',
    twitter: 'https://twitter.com/emilywatson'
  },
  {
    name: 'David Kim',
    role: 'Chief Security Officer',
    bio: 'Cybersecurity expert with 20+ years experience. Former CISO at Fortune 500 companies. Certified in CISSP, CISM, and CISA.',
    avatar: '/avatars/david-kim.jpg',
    linkedin: 'https://linkedin.com/in/david-kim'
  },
  {
    name: 'Lisa Thompson',
    role: 'Chief Marketing Officer',
    bio: 'Digital marketing veteran with expertise in B2B SaaS. Former VP of Marketing at Salesforce. MBA from Harvard Business School.',
    avatar: '/avatars/lisa-thompson.jpg',
    linkedin: 'https://linkedin.com/in/lisa-thompson'
  },
  {
    name: 'James Wilson',
    role: 'VP of Engineering',
    bio: 'Full-stack engineering leader with expertise in React, Node.js, and cloud infrastructure. Former Engineering Manager at Netflix.',
    avatar: '/avatars/james-wilson.jpg',
    linkedin: 'https://linkedin.com/in/james-wilson'
  }
];

const achievements: Achievement[] = [
  {
    year: '2023',
    title: 'AI Innovation Award',
    description: 'Recognized by TechCrunch for breakthrough AI workflow automation technology',
    icon: Award
  },
  {
    year: '2023',
    title: '500+ Enterprise Clients',
    description: 'Successfully onboarded over 500 enterprise customers across 25 countries',
    icon: Users
  },
  {
    year: '2024',
    title: 'ISO 27001 Certification',
    description: 'Achieved international security standard certification for data protection',
    icon: Shield
  },
  {
    year: '2024',
    title: 'AI Ethics Leadership',
    description: 'Named industry leader in responsible AI development by AI Ethics Institute',
    icon: Brain
  },
  {
    year: '2025',
    title: 'Global Expansion',
    description: 'Opened offices in London, Singapore, and Tokyo for international growth',
    icon: Globe
  },
  {
    year: '2025',
    title: 'Patent Portfolio',
    description: 'Filed 15+ patents for AI-powered business intelligence and automation',
    icon: Rocket
  }
];

const values: Value[] = [
  {
    title: 'Innovation First',
    description: 'We push the boundaries of what\'s possible with AI and technology, always staying ahead of the curve.',
    icon: Rocket,
    color: 'from-blue-500 to-cyan-500'
  },
  {
    title: 'Customer Success',
    description: 'Your success is our success. We\'re committed to delivering measurable business value and ROI.',
    icon: Target,
    color: 'from-green-500 to-emerald-500'
  },
  {
    title: 'Ethical AI',
    description: 'We develop AI solutions that are fair, transparent, and beneficial to society as a whole.',
    icon: Heart,
    color: 'from-pink-500 to-rose-500'
  },
  {
    title: 'Security & Privacy',
    description: 'Your data security and privacy are non-negotiable. We implement enterprise-grade security measures.',
    icon: Lock,
    color: 'from-purple-500 to-indigo-500'
  },
  {
    title: 'Continuous Learning',
    description: 'We foster a culture of continuous learning and improvement, both for our team and our AI systems.',
    icon: BookOpen,
    color: 'from-orange-500 to-red-500'
  },
  {
    title: 'Global Impact',
    description: 'We\'re building technology that can positively impact businesses and communities worldwide.',
    icon: Globe,
    color: 'from-teal-500 to-cyan-500'
  }
];

export default function About() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h1 className="text-4xl font-bold text-gray-900 mb-8">About Us</h1>
        <div className="prose max-w-none">
          <p className="text-lg text-gray-600 mb-6">
            Zion Tech Group is a leading technology company specializing in AI, IT services, and micro SaaS solutions.
          </p>
          <p className="text-lg text-gray-600 mb-6">
            We help businesses transform their operations through innovative technology solutions and expert guidance.
          </p>
        </div>
      </div>
    </div>
  );
};
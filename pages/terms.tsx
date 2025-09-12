import Layout from '../components/layout/Layout';
import SEOOptimizer from '../components/SEOOptimizer';
import AnalyticsTracker from '../components/AnalyticsTracker';
import ErrorBoundary from '../components/ErrorBoundary';
import { motion } from 'framer-motion';
import { 
  FileText, Shield, AlertTriangle, CheckCircle, 
  User, Lock, Globe, Scale, Clock, Mail
} from 'lucide-react';

const TermsPage: React.FC = () => {
  const lastUpdated = 'January 17, 2025';

  const termsSections = [
    {
      title: 'Acceptance of Terms',
      icon: <CheckCircle className="w-8 h-8" />,
      color: 'from-cyan-500 to-blue-500',
      content: [
        'By accessing or using our services, you agree to be bound by these terms',
        'If you do not agree to these terms, do not use our services',
        'We may modify these terms at any time with notice',
        'Continued use after changes constitutes acceptance of new terms'
      ]
    },
    {
      title: 'Service Description',
      icon: <Globe className="w-8 h-8" />,
      color: 'from-purple-500 to-pink-500',
      content: [
        'AI and machine learning solutions',
        'Quantum computing services',
        'IT infrastructure and consulting',
        'Micro SAAS applications',
        'Business automation services',
        'Technical support and maintenance'
      ]
    },
    {
      title: 'User Responsibilities',
      icon: <User className="w-8 h-8" />,
      color: 'from-green-500 to-emerald-500',
      content: [
        'Provide accurate and complete information',
        'Maintain security of your account credentials',
        'Comply with applicable laws and regulations',
        'Use services for lawful purposes only',
        'Respect intellectual property rights'
      ]
    },
    {
      title: 'Intellectual Property',
      icon: <Lock className="w-8 h-8" />,
      color: 'from-orange-500 to-red-500',
      content: [
        'Our services and content are protected by copyright',
        'You retain rights to your own content',
        'No transfer of intellectual property rights',
        'License to use our services as intended',
        'Prohibition of reverse engineering'
      ]
    }
  ];

  const prohibitedActivities = [
import { motion } from 'framer-motion';
import { 
  FileText, Shield, CheckCircle, AlertTriangle, 
  Globe, Calendar, Scale, Users, ArrowRight,
  BookOpen, Lock, Zap, Building, Brain, Rocket
} from 'lucide-react';

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-purple-600 py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl font-bold text-white mb-6">Terms of Service</h1>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto">
            Please read these terms carefully before using our website or services.
          </p>
        </div>
      </section>

import { motion } from 'framer-motion';
import { Shield, FileText, Scale, Lock, Eye, Users, Globe, AlertTriangle } from 'lucide-react';
import Layout from '../components/layout/Layout';

const Terms: React.FC = () => {
  const sections = [
    {
      title: 'Acceptance of Terms',
      content: `By accessing and using the Zion Tech Group website and services, you accept and agree to be bound by the terms and provision of this agreement. If you do not agree to abide by the above, please do not use this service.`,
      icon: <FileText className="w-6 h-6 text-purple-400" />
    },
    {
      title: 'Use License',
      content: `Permission is granted to temporarily download one copy of the materials (information or software) on Zion Tech Group's website for personal, non-commercial transitory viewing only. This is the grant of a license, not a transfer of title, and under this license you may not: modify or copy the materials; use the materials for any commercial purpose or for any public display; attempt to reverse engineer any software contained on Zion Tech Group's website; remove any copyright or other proprietary notations from the materials; or transfer the materials to another person or "mirror" the materials on any other server.`,
      icon: <Lock className="w-6 h-6 text-blue-400" />
    },
    {
      title: 'Service Description',
      content: `Zion Tech Group provides AI consciousness technology, quantum computing solutions, autonomous systems, and related consulting services. We reserve the right to modify, suspend, or discontinue any aspect of our services at any time.`,
      icon: <Globe className="w-6 h-6 text-green-400" />
    },
    {
      title: 'User Responsibilities',
      content: `Users are responsible for maintaining the confidentiality of their account information and for all activities that occur under their account. Users must not use our services for any illegal or unauthorized purpose, or in any way that violates applicable laws or regulations.`,
      icon: <Users className="w-6 h-6 text-yellow-400" />
    },
    {
      title: 'Privacy and Data Protection',
      content: `Your privacy is important to us. Our collection and use of personal information is governed by our Privacy Policy, which is incorporated into these Terms by reference. We are committed to protecting your data in accordance with applicable data protection laws.`,
      icon: <Eye className="w-6 h-6 text-cyan-400" />
    },
    {
      title: 'Intellectual Property Rights',
      content: `All content on this website, including but not limited to text, graphics, logos, images, software, and other materials, is the property of Zion Tech Group or its licensors and is protected by copyright, trademark, and other intellectual property laws.`,
      icon: <Shield className="w-6 h-6 text-red-400" />
    }
  ];

  const importantNotices = [
    {
      title: 'AI Technology Risks',
      content: 'Our AI consciousness technology involves experimental and cutting-edge research. Users acknowledge that such technology may carry inherent risks and uncertainties.',
      type: 'warning'
    },
    {
      title: 'Quantum Computing Limitations',
      content: 'Quantum computing services are subject to current technological limitations and may not be suitable for all applications or use cases.',
      type: 'info'
    },
    {
      title: 'Service Availability',
      content: 'We strive to maintain high service availability but cannot guarantee uninterrupted access to our services due to factors beyond our control.',
      type: 'info'
    }
  ];

  return (
    <Layout>
      <div className="min-h-screen bg-gradient-to-br from-black via-purple-900 to-blue-900">
        {/* Hero Section */}
        <section className="relative pt-32 pb-20 px-4">
          <div className="max-w-7xl mx-auto text-center">

import React from 'react';
import MainLayout from '../src/components/layout/MainLayout';
import { motion } from 'framer-motion';
import {
  Eye,
  Ear,
  Hand,
  Brain,
  CheckCircle,
  ArrowRight,
  Users,
  Shield,
  Zap,
  Heart
} from 'lucide-react';

export default function AccessibilityPage() {
  const accessibilityFeatures = [
    {
      title: 'Screen Reader Compatibility',
      description: 'Our website is fully compatible with screen readers and assistive technologies',
      icon: Ear,
      features: [
        'Semantic HTML structure',
        'Alt text for all images',
        'Proper heading hierarchy',
        'ARIA labels and descriptions'
      ]
    },
    {
      title: 'Keyboard Navigation',
      description: 'Complete website functionality accessible via keyboard only',
      icon: Hand,
      features: [
        'Tab navigation support',
        'Skip links for main content',
        'Focus indicators',
        'Keyboard shortcuts'
      ]
    },
    {
      title: 'Visual Accessibility',
      description: 'High contrast and customizable visual elements for better visibility',
      icon: Eye,
      features: [
        'High contrast color schemes',
        'Resizable text up to 200%',
        'Color-blind friendly palettes',
        'Clear visual hierarchy'
      ]
    },
    {
      title: 'Cognitive Accessibility',
      description: 'Clear, simple language and intuitive navigation for all users',
      icon: Brain,
      features: [
        'Plain language content',
        'Consistent navigation',
        'Clear error messages',
        'Logical content flow'
      ]
    }
  ];

  const complianceStandards = [
    {
      standard: 'WCAG 2.1 AA',
      description: 'Web Content Accessibility Guidelines 2.1 Level AA compliance',
      status: 'Compliant',
      icon: CheckCircle
    },
    {
      standard: 'Section 508',
      description: 'U.S. federal accessibility requirements compliance',
      status: 'Compliant',
      icon: CheckCircle
    },
    {
      standard: 'ADA Compliance',
      description: 'Americans with Disabilities Act compliance',
      status: 'Compliant',
      icon: CheckCircle
    },
    {
      standard: 'EN 301 549',
      description: 'European accessibility standard compliance',
      status: 'Compliant',
      icon: CheckCircle
    }
  ];

  const accessibilityTools = [
    {
      name: 'Screen Reader Testing',
      description: 'Regular testing with NVDA, JAWS, and VoiceOver',
      icon: Ear
    },
    {
      name: 'Keyboard Testing',
      description: 'Comprehensive keyboard-only navigation testing',
      icon: Hand
    },
    {
      name: 'Color Contrast Analysis',
      description: 'Automated and manual color contrast verification',
      icon: Eye
    },
    {
      name: 'User Testing',
      description: 'Regular testing with users with disabilities',
      icon: Users
    }
  ];

  const accessibilityCommitments = [
    {
      title: 'Continuous Improvement',
      description: 'We regularly audit and improve our accessibility features',
      icon: Zap
    },
    {
      title: 'User Feedback',
      description: 'We actively seek and incorporate feedback from users with disabilities',
      icon: Heart
    },
    {
      title: 'Training & Awareness',
      description: 'Our team receives regular accessibility training and education',
      icon: Brain
    },
    {
      title: 'Compliance Monitoring',
      description: 'Ongoing monitoring to ensure continued compliance with standards',
      icon: Shield
    }
  ];

const accessibility: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-indigo-900 text-white">
      <Helmet>
        <title>accessibility | Zion Tech Group</title>
        <meta name="description" content="accessibility - Revolutionary technology solutions" />
      </Helmet>
      
      <div className="container mx-auto px-4 py-20">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-6">accessibility</h1>
          <p className="text-xl text-gray-300">Revolutionary technology solutions</p>
        </div>
      </div>
    </div>
  );
};

export default accessibility;

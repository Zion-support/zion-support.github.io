import React from 'react';
<<<<<<< HEAD
  return (,
    <div className="p-6 bg-gradient-to-br from-blue-900 to-purple-900 text-white rounded-lg">,
      <h3 className="text-xl font-bold mb-4">accessibility</h3>,
      <p className="text-gray-300">Revolutionary technology component</p>,
    </div>,
=======
import MainLayout from '../components/layout/MainLayout';
import { motion } from 'framer-motion';
import {
  Eye, 
  Ear, 
  Hand, 
  Brain, 
  CheckCircle, 
  AlertTriangle,
  Globe,
  Users,
  Award,
  Target,
  Heart,
  FileText,
  Settings
} from 'lucide-react';

const accessibilityFeatures = [
  {
    title: "Visual Accessibility",
    description: "Features to support users with visual impairments",
    icon: Eye,
    features: [
      "High contrast color schemes",
      "Scalable text and interface elements",
      "Screen reader compatibility",
      "Alternative text for images",
      "Keyboard navigation support"
    ]
  },
  {
    title: "Auditory Accessibility",
    description: "Support for users with hearing impairments",
    icon: Ear,
    features: [
      "Video captions and transcripts",
      "Visual indicators for audio cues",
      "Text-based communication options",
      "Volume controls and audio descriptions",
      "Sign language support where applicable"
    ]
  },
  {
    title: "Motor Accessibility",
    description: "Features for users with motor impairments",
    icon: Hand,
    features: [
      "Keyboard-only navigation",
      "Voice control compatibility",
      "Large click targets",
      "Customizable interaction timing",
      "Switch control support"
    ]
  },
  {
    title: "Cognitive Accessibility",
    description: "Support for users with cognitive differences",
    icon: Brain,
    features: [
      "Clear and simple language",
      "Consistent navigation patterns",
      "Error prevention and recovery",
      "Progress indicators",
      "Customizable interface complexity"
    ]
  }
];

const standardsCompliance = [
  {
    standard: "WCAG 2.1 AA",
    description: "Web Content Accessibility Guidelines 2.1 Level AA compliance",
    status: "Compliant",
    coverage: "95%",
    icon: Shield
  },
  {
    standard: "Section 508",
    description: "U.S. federal accessibility requirements",
    status: "Compliant",
    coverage: "100%",
    icon: FileText
  },
  {
    standard: "ADA",
    description: "Americans with Disabilities Act compliance",
    status: "Compliant",
    coverage: "100%",
    icon: Users
  },
  {
    standard: "EN 301 549",
    description: "European accessibility standard for ICT products",
    status: "Compliant",
    coverage: "90%",
    icon: Globe
  }
];

const accessibilityTools = [
  {
    name: "Screen Reader Testing",
    description: "Regular testing with popular screen readers including NVDA, JAWS, and VoiceOver",
    frequency: "Monthly"
  },
  {
    name: "Keyboard Navigation",
    description: "Comprehensive keyboard navigation testing for all interactive elements",
    frequency: "Weekly"
  },
  {
    name: "Color Contrast Analysis",
    description: "Automated and manual color contrast testing to ensure readability",
    frequency: "With each design update"
  },
  {
    name: "User Testing",
    description: "Regular testing with users who have disabilities to identify barriers",
    frequency: "Quarterly"
  }
];

const accessibilityGuidelines = [
  {
    category: "Content",
    guidelines: [
      "Use clear and simple language",
      "Provide alternative text for images",
      "Use proper heading structure",
      "Ensure sufficient color contrast",
      "Provide captions for videos"
    ]
  },
  {
    category: "Navigation",
    guidelines: [
      "Logical tab order",
      "Skip links for main content",
      "Consistent navigation patterns",
      "Breadcrumb navigation",
      "Search functionality"
    ]
  },
  {
    category: "Forms",
    guidelines: [
      "Clear labels and instructions",
      "Error messages and validation",
      "Required field indicators",
      "Logical grouping of related fields",
      "Multiple input methods"
    ]
  },
  {
    category: "Interactive Elements",
    guidelines: [
      "Keyboard accessible",
      "Focus indicators",
      "Adequate target sizes",
      "No seizure-inducing content",
      "Customizable timing"
    ]
  }
];

export default function AccessibilityPage() {
  return (
    <div className="p-6 bg-gradient-to-br from-blue-900 to-purple-900 text-white rounded-lg">
      <h3 className="text-xl font-bold mb-4">accessibility</h3>
      <p className="text-gray-300">Revolutionary technology component</p>
    </div>
>>>>>>> 9de841a86934bc4a418b22e98c02b56496dc2aa9
  );
};
export default accessibility;
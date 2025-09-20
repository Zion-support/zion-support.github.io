import React from 'react';
<<<<<<< HEAD
  return (,
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-indigo-900 text-white">,
      <Helmet>,
        <title>Accessibility | Zion Tech Group</title>,
        <meta name="description" content="Accessibility - Revolutionary technology solutions" />,
      </Helmet>,
      <div className="container mx-auto px-4 py-20">,
        <div className="text-center">,
          <h1 className="text-4xl font-bold mb-6">Accessibility</h1>,
          <p className="text-xl text-gray-300">Revolutionary technology solutions</p>,
        </div>,
      </div>,
    </div>,
=======
import { motion  } from 'framer-motion';
import { Accessibility, 
  Eye, 
  Ear, 
  Hand, 
  Brain, 
  CheckCircle, 
  AlertTriangle, 
  Info, 
  Phone, 
  Mail, 
  Globe,
  Monitor,
  Smartphone,
  Tablet,
  Keyboard,
  Mouse,
  Headphones,
  Volume2,
  VolumeX,
  Contrast,
  Type,
  ZoomIn,
  ZoomOut
 } from 'lucide-react';
import { SEO  } from '../components/SEO';

export default function Accessibility() {
  const accessibilityFeatures = [
    {
      category: 'Visual Accessibility',
      icon: Eye,
      color: 'from-blue-500 to-cyan-600',
      features: [
        'High contrast mode support',
        'Adjustable font sizes (12px to 24px)',
        'Color-blind friendly color schemes',
        'Screen reader compatibility',
        'Keyboard navigation support',
        'Focus indicators for all interactive elements'
      ]
    },
    {
      category: 'Auditory Accessibility',
      icon: Ear,
      color: 'from-green-500 to-emerald-600',
      features: [
        'Closed captions for all video content',
        'Audio descriptions for visual content',
        'Volume controls for audio elements',
        'Alternative text for audio content',
        'Hearing aid compatibility',
        'Speech-to-text functionality'
      ]
    },
    {
      category: 'Motor Accessibility',
      icon: Hand,
      color: 'from-purple-500 to-pink-600',
      features: [
        'Full keyboard navigation',
        'Voice control support',
        'Switch device compatibility',
        'Large click targets (minimum 44px)',
        'Customizable mouse sensitivity',
        'Gesture recognition alternatives'
      ]
    },
    {
      category: 'Cognitive Accessibility',
      icon: Brain,
      color: 'from-orange-500 to-red-600',
      features: [
        'Clear, simple language',
        'Consistent navigation structure',
        'Logical content organization',
        'Error prevention and recovery',
        'Multiple ways to complete tasks',
        'Reduced distractions mode'
      ]
    }
  ];

  const complianceStandards = [
    {
      standard: 'WCAG 2.1 AA',
      description: 'Web Content Accessibility Guidelines 2.1 Level AA compliance',
      status: 'Fully Compliant',
      icon: CheckCircle,
      color: 'text-green-400'
    },
    {
      standard: 'Section 508',
      description: 'Federal accessibility requirements for electronic and information technology',
      status: 'Fully Compliant',
      icon: CheckCircle,
      color: 'text-green-400'
    },
    {
      standard: 'ADA Title III',
      description: 'Americans with Disabilities Act requirements for public accommodations',
      status: 'Fully Compliant',
      icon: CheckCircle,
      color: 'text-green-400'
    },
    {
      standard: 'EN 301 549',
      description: 'European accessibility requirements for ICT products and services',
      status: 'Fully Compliant',
      icon: CheckCircle,
      color: 'text-green-400'
    }
  ];

  const assistiveTechnologies = [
    {
      name: 'Screen Readers',
      description: 'Compatible with JAWS, NVDA, VoiceOver, and TalkBack',
      icon: Monitor,
      examples: ['JAWS', 'NVDA', 'VoiceOver', 'TalkBack', 'Narrator']
    },
    {
      name: 'Voice Control',
      description: 'Voice recognition software support for hands-free navigation',
      icon: Volume2,
      examples: ['Dragon NaturallySpeaking', 'Voice Control (macOS)', 'Windows Speech Recognition']
    },
    {
      name: 'Switch Devices',
      description: 'Alternative input devices for users with limited mobility',
      icon: Mouse,
      examples: ['Head switches', 'Eye tracking', 'Sip and puff devices', 'Foot pedals']
    },
    {
      name: 'Mobile Accessibility',
      description: 'Optimized for mobile assistive technologies',
      icon: Smartphone,
      examples: ['iOS VoiceOver', 'Android TalkBack', 'Switch Control', 'AssistiveTouch']
    }
  ];

  const accessibilityTools = [
    {
      name: 'High Contrast Mode',
      icon: Contrast,
      description: 'Toggle high contrast color schemes for better visibility',
      shortcut: 'Ctrl + Shift + H'
    },
    {
      name: 'Font Size Adjuster',
      icon: Type,
      description: 'Increase or decrease text size for better readability',
      shortcut: 'Ctrl + Plus/Minus'
    },
    {
      name: 'Zoom Controls',
      icon: ZoomIn,
      description: 'Zoom in and out of content for better visibility',
      shortcut: 'Ctrl + Scroll or Ctrl + Plus/Minus'
    },
    {
      name: 'Focus Highlighter',
      icon: CheckCircle,
      description: 'Highlight keyboard focus for better navigation',
      shortcut: 'Tab key navigation'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-indigo-900 text-white">
      <Helmet>
        <title>Accessibility | Zion Tech Group</title>
        <meta name="description" content="Accessibility - Revolutionary technology solutions" />
      </Helmet>
      
      <div className="container mx-auto px-4 py-20">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-6">Accessibility</h1>
          <p className="text-xl text-gray-300">Revolutionary technology solutions</p>
        </div>
      </div>
    </div>
>>>>>>> 9de841a86934bc4a418b22e98c02b56496dc2aa9
  );
};
export default Accessibility;
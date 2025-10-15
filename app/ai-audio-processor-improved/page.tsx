'use client';
import React from 'react';
import ServicePageTemplate from '../components/ServicePageTemplate';
import { 
  MicrophoneIcon, 
  CpuChipIcon,
  ShieldCheckIcon,
  DocumentTextIcon,
  SpeakerWaveIcon,
  MusicalNoteIcon,
  ClockIcon,
  CurrencyDollarIcon,
  UserGroupIcon,
  EyeIcon,
  ChartBarIcon
} from '@heroicons/react/24/outline';

const AIAudioProcessorPage: React.FC = () => {
  const features = [
    {
      icon: MicrophoneIcon,
      title: 'Real-time Audio Processing',
      description: 'Advanced AI algorithms process audio in real-time with ultra-low latency for seamless user experience.'
    },
    {
      icon: CpuChipIcon,
      title: 'AI-Powered Analysis',
      description: 'Machine learning models analyze audio patterns, speech recognition, and sound classification with 99.5% accuracy.'
    },
    {
      icon: ShieldCheckIcon,
      title: 'Enterprise Security',
      description: 'Bank-level encryption and secure processing ensure your audio data remains private and protected.'
    },
    {
      icon: DocumentTextIcon,
      title: 'Transcription Services',
      description: 'Convert speech to text with advanced natural language processing and multi-language support.'
    },
    {
      icon: SpeakerWaveIcon,
      title: 'Audio Enhancement',
      description: 'AI-powered noise reduction, echo cancellation, and audio quality improvement for crystal-clear sound.'
    },
    {
      icon: MusicalNoteIcon,
      title: 'Music Analysis',
      description: 'Analyze music patterns, detect genres, extract features, and provide intelligent music recommendations.'
    }
  ];

  const pricing = {
    monthly: '$199/mo',
    original: '$399/mo',
    features: [
      'Unlimited audio processing',
      'Real-time transcription',
      '50+ language support',
      'Advanced noise reduction',
      'API access included',
      '24/7 technical support',
      'Custom model training',
      '99.9% uptime guarantee'
    ]
  };

  const benefits = [
    '95% accuracy in speech recognition',
    'Real-time processing capabilities',
    'Multi-language support',
    'Enterprise-grade security',
    'Scalable cloud infrastructure',
    'Easy API integration',
    'Custom model training',
    '24/7 technical support'
  ];

  const useCases = [
    {
      title: 'Call Center Automation',
      description: 'Automatically transcribe customer calls, analyze sentiment, and extract key insights for improved customer service.'
    },
    {
      title: 'Content Creation',
      description: 'Generate transcripts, captions, and summaries for podcasts, videos, and audio content automatically.'
    },
    {
      title: 'Meeting Intelligence',
      description: 'Transcribe meetings, extract action items, and provide intelligent summaries for better collaboration.'
    },
    {
      title: 'Accessibility Services',
      description: 'Provide real-time captions and audio descriptions to make content accessible to all users.'
    }
  ];

  const technicalSpecs = [
    {
      category: 'Processing',
      specs: [
        'Real-time processing',
        'Batch processing support',
        'Multi-format audio support',
        'Custom model training'
      ]
    },
    {
      category: 'Languages',
      specs: [
        '50+ languages supported',
        'Automatic language detection',
        'Custom vocabulary support',
        'Accent recognition'
      ]
    },
    {
      category: 'Integration',
      specs: [
        'RESTful API',
        'WebSocket support',
        'SDK for major languages',
        'Webhook notifications'
      ]
    }
  ];

  return (
    <ServicePageTemplate
      title="AI Audio Processor Pro"
      description="Advanced AI-powered audio processing solution with real-time transcription, noise reduction, and intelligent analysis capabilities for enterprise applications."
      keywords="AI audio processing, speech recognition, audio transcription, noise reduction, audio analysis, machine learning, audio AI"
      icon={MicrophoneIcon}
      features={features}
      pricing={pricing}
      benefits={benefits}
      useCases={useCases}
      technicalSpecs={technicalSpecs}
      ctaText="Start Free Trial"
      ctaLink="/contact"
    />
  );
};

export default AIAudioProcessorPage;
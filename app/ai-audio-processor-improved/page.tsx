import ServicePageTemplate from '../components/ServicePageTemplate';
import { MicrophoneIcon } from '@heroicons/react/24/outline';

export default function AiAudioProcessorImprovedPage() {
  const features = [
    {
      title: 'AI-Powered Analysis',
      description: 'Machine learning models analyze audio patterns, speech recognition, and sound classification with 99.5% accuracy.',
      items: [
        '99.5% accuracy rate',
        'Real-time processing',
        'Multi-language support',
        'Custom model training'
      ]
    },
    {
      title: 'Enterprise Security',
      description: 'Bank-level encryption and secure processing ensure your audio data remains private and protected.',
      items: [
        'End-to-end encryption',
        'SOC 2 compliance',
        'GDPR compliant',
        'Secure data storage'
      ]
    },
    {
      title: 'Transcription Services',
      description: 'Convert speech to text with advanced natural language processing and multi-language support.',
      items: [
        '50+ language support',
        'Real-time transcription',
        'Speaker identification',
        'Punctuation and formatting'
      ]
    },
    {
      title: 'Audio Enhancement',
      description: 'AI-powered noise reduction, echo cancellation, and audio quality improvement for crystal-clear sound.',
      items: [
        'Noise reduction',
        'Echo cancellation',
        'Volume normalization',
        'Audio quality enhancement'
      ]
    },
    {
      title: 'Music Analysis',
      description: 'Analyze music patterns, detect genres, extract features, and provide intelligent music recommendations.',
      items: [
        'Genre detection',
        'BPM analysis',
        'Key detection',
        'Music recommendation engine'
      ]
    }
  ];

  const pricing = [
    {
      name: 'Starter',
      price: '$99',
      period: 'month',
      features: [
        'Up to 100 hours/month',
        'Basic transcription',
        'Email support',
        'Standard quality'
      ]
    },
    {
      name: 'Professional',
      price: '$199',
      period: 'month',
      features: [
        'Unlimited audio processing',
        'Real-time transcription',
        '50+ language support',
        'Advanced noise reduction',
        'API access included',
        'Priority support',
        'Custom model training',
        '99.9% uptime guarantee'
      ],
      popular: true
    },
    {
      name: 'Enterprise',
      price: 'Custom',
      period: 'month',
      features: [
        'Unlimited everything',
        'Custom integrations',
        'Dedicated support',
        'SLA guarantee',
        'White-label options',
        'Custom development',
        'On-premise deployment'
      ]
    }
  ];

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
      description: 'Automatically transcribe customer calls, analyze sentiment, and extract key insights for improved customer service.',
      items: [
        'Real-time call transcription',
        'Sentiment analysis',
        'Key phrase extraction',
        'Quality assurance scoring'
      ]
    },
    {
      title: 'Content Creation',
      description: 'Generate transcripts, captions, and summaries for podcasts, videos, and audio content.',
      items: [
        'Podcast transcription',
        'Video captioning',
        'Content summarization',
        'SEO optimization'
      ]
    },
    {
      title: 'Medical Transcription',
      description: 'Accurate medical transcription with specialized terminology and compliance requirements.',
      items: [
        'Medical terminology support',
        'HIPAA compliance',
        'High accuracy rates',
        'Secure processing'
      ]
    },
    {
      title: 'Music Industry',
      description: 'Analyze music patterns, detect copyright issues, and provide intelligent recommendations.',
      items: [
        'Copyright detection',
        'Music analysis',
        'Recommendation engine',
        'Trend analysis'
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
    />
  );
}
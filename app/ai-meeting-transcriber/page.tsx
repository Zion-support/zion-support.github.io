'use client';
import React from 'react';
import { Helmet } from 'react-helmet-async';
import { 
  Mic, 
  FileText, 
  Clock, 
  Users, 
  Search, 
  Download, 
  Share2, 
  Zap, 
  CheckCircle, 
  Star, 
  ArrowRight,
  Play,
  Pause,
  Volume2,
  Languages,
  Brain,
  Target,
  BarChart3,
  Calendar,
  Mail,
  MessageSquare,
  Video,
  Headphones,
  Settings,
  Globe
} from 'lucide-react';
import FuturisticBackground from '../components/FuturisticBackground';
import FuturisticCard from '../components/FuturisticCard';
import FuturisticButton from '../components/FuturisticButton';

export default function AIMeetingTranscriberPage() {
  const features = [
    'Real-time transcription with 99.5% accuracy',
    'Multi-language support (50+ languages)',
    'Speaker identification and diarization',
    'Automatic meeting summaries and action items',
    'Searchable transcript database',
    'Integration with Zoom, Teams, Google Meet',
    'AI-powered insights and sentiment analysis',
    'Custom vocabulary and industry terms',
    'Export to multiple formats (PDF, Word, SRT)',
    'Cloud storage and synchronization',
    'Team collaboration and sharing',
    'Compliance and security features'
  ];

  const integrations = [
    { name: 'Zoom', icon: '🔵', description: 'Native integration' },
    { name: 'Microsoft Teams', icon: '🔷', description: 'Seamless sync' },
    { name: 'Google Meet', icon: '🟢', description: 'One-click setup' },
    { name: 'Webex', icon: '🔴', description: 'Enterprise ready' },
    { name: 'Slack', icon: '💬', description: 'Team notifications' },
    { name: 'Notion', icon: '📝', description: 'Document sync' },
    { name: 'Confluence', icon: '📚', description: 'Wiki integration' },
    { name: 'Salesforce', icon: '☁️', description: 'CRM integration' }
  ];

  const pricingPlans = [
    {
      name: 'Individual',
      price: '$29',
      period: '/month',
      description: 'Perfect for freelancers and small teams',
      features: [
        '5 hours of transcription per month',
        'Real-time transcription',
        'Basic speaker identification',
        'Export to PDF, Word, SRT',
        'Cloud storage (10GB)',
        'Email support',
        'Mobile app access'
      ],
      popular: false
    },
    {
      name: 'Professional',
      price: '$79',
      period: '/month',
      description: 'Ideal for growing businesses',
      features: [
        '20 hours of transcription per month',
        'Advanced speaker identification',
        'AI meeting summaries',
        'Action item extraction',
        'Custom vocabulary',
        'Team collaboration (5 users)',
        'Priority support',
        'API access',
        'Cloud storage (100GB)'
      ],
      popular: true
    },
    {
      name: 'Enterprise',
      price: '$199',
      period: '/month',
      description: 'For large organizations',
      features: [
        'Unlimited transcription hours',
        'Advanced AI insights',
        'Custom integrations',
        'White-label solution',
        'Dedicated account manager',
        'Unlimited team members',
        'Advanced security features',
        'Compliance reporting',
        '24/7 phone support',
        'Cloud storage (1TB)'
      ],
      popular: false
    }
  ];

  const stats = [
    { number: '25,000+', label: 'Meetings Transcribed', icon: <Mic className="w-6 h-6" /> },
    { number: '99.5%', label: 'Accuracy Rate', icon: <Target className="w-6 h-6" /> },
    { number: '50+', label: 'Languages Supported', icon: <Globe className="w-6 h-6" /> },
    { number: '2M+', label: 'Hours Processed', icon: <Clock className="w-6 h-6" /> }
  ];

  const useCases = [
    {
      title: 'Business Meetings',
      description: 'Capture every detail from board meetings, client calls, and team standups',
      icon: <Users className="w-8 h-8 text-blue-400" />
    },
    {
      title: 'Interviews',
      description: 'Transcribe job interviews, customer interviews, and research sessions',
      icon: <MessageSquare className="w-8 h-8 text-green-400" />
    },
    {
      title: 'Webinars & Events',
      description: 'Convert live events into searchable, shareable content',
      icon: <Video className="w-8 h-8 text-purple-400" />
    },
    {
      title: 'Legal Proceedings',
      description: 'Accurate transcription for depositions, hearings, and consultations',
      icon: <FileText className="w-8 h-8 text-red-400" />
    },
    {
      title: 'Medical Consultations',
      description: 'HIPAA-compliant transcription for patient consultations',
      icon: <Headphones className="w-8 h-8 text-cyan-400" />
    },
    {
      title: 'Educational Content',
      description: 'Transcribe lectures, training sessions, and educational materials',
      icon: <Brain className="w-8 h-8 text-orange-400" />
    }
  ];

  return (
    <>
      <Helmet>
        <title>AI Meeting Transcriber - Zion Tech Group | Real-time Meeting Transcription</title>
        <meta name="description" content="Transform your meetings with AI-powered real-time transcription. 99.5% accuracy, multi-language support, and automatic summaries. Starting at $29/month." />
        <meta name="keywords" content="ai meeting transcriber, real-time transcription, meeting notes, voice to text, meeting recorder, speech recognition" />
        <link rel="canonical" href="https://ziontechgroup.com/ai-meeting-transcriber" />
      </Helmet>

      <FuturisticBackground variant="service">
        <div className="pt-20 px-4 py-12">
          <div className="max-w-7xl mx-auto">
            {/* Hero Section */}
            <div className="text-center mb-16">
              <div className="flex items-center justify-center mb-6">
                <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-cyan-600 rounded-2xl flex items-center justify-center mr-4">
                  <Mic className="w-8 h-8 text-white" />
                </div>
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white">
                  AI Meeting Transcriber
                </h1>
              </div>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
                Never miss important details again. Our AI-powered transcription service converts your meetings into 
                searchable, shareable text with 99.5% accuracy in real-time.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <FuturisticButton
                  variant="primary"
                  size="lg"
                  onClick={() => window.open('/contact', '_blank')}
                >
                  Start Free Trial
                  <ArrowRight className="w-5 h-5 ml-2" />
                </FuturisticButton>
                <FuturisticButton
                  variant="ghost"
                  size="lg"
                  onClick={() => window.open('/contact', '_blank')}
                >
                  Watch Demo
                </FuturisticButton>
              </div>
            </div>

            {/* Stats Section */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16">
              {stats.map((stat, index) => (
                <FuturisticCard key={index} variant="stat" className="text-center">
                  <div className="flex items-center justify-center mb-4">
                    {stat.icon}
                  </div>
                  <div className="text-3xl font-bold text-white mb-2">{stat.number}</div>
                  <div className="text-gray-300">{stat.label}</div>
                </FuturisticCard>
              ))}
            </div>

            {/* Features Section */}
            <div className="mb-16">
              <h2 className="text-3xl font-bold text-white text-center mb-12">
                Powerful AI Features
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {features.map((feature, index) => (
                  <FuturisticCard key={index} variant="feature">
                    <div className="flex items-start space-x-3">
                      <CheckCircle className="w-6 h-6 text-green-400 flex-shrink-0 mt-1" />
                      <span className="text-gray-300">{feature}</span>
                    </div>
                  </FuturisticCard>
                ))}
              </div>
            </div>

            {/* Use Cases */}
            <div className="mb-16">
              <h2 className="text-3xl font-bold text-white text-center mb-12">
                Perfect For Every Industry
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {useCases.map((useCase, index) => (
                  <FuturisticCard key={index} variant="use-case" className="text-center">
                    <div className="flex items-center justify-center mb-4">
                      {useCase.icon}
                    </div>
                    <h3 className="text-xl font-semibold text-white mb-3">{useCase.title}</h3>
                    <p className="text-gray-300">{useCase.description}</p>
                  </FuturisticCard>
                ))}
              </div>
            </div>

            {/* Integrations */}
            <div className="mb-16">
              <h2 className="text-3xl font-bold text-white text-center mb-12">
                Seamless Integrations
              </h2>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                {integrations.map((integration, index) => (
                  <FuturisticCard key={index} variant="integration" className="text-center">
                    <div className="text-4xl mb-3">{integration.icon}</div>
                    <h3 className="text-lg font-semibold text-white mb-2">{integration.name}</h3>
                    <p className="text-sm text-gray-400">{integration.description}</p>
                  </FuturisticCard>
                ))}
              </div>
            </div>

            {/* Pricing Section */}
            <div className="mb-16">
              <h2 className="text-3xl font-bold text-white text-center mb-12">
                Simple, Transparent Pricing
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {pricingPlans.map((plan, index) => (
                  <FuturisticCard 
                    key={index} 
                    variant={plan.popular ? "pricing-popular" : "pricing"} 
                    className="relative"
                  >
                    {plan.popular && (
                      <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                        <span className="bg-gradient-to-r from-blue-500 to-cyan-600 text-white px-4 py-2 rounded-full text-sm font-semibold">
                          Most Popular
                        </span>
                      </div>
                    )}
                    <div className="text-center mb-8">
                      <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                      <p className="text-gray-300 mb-4">{plan.description}</p>
                      <div className="flex items-baseline justify-center">
                        <span className="text-5xl font-bold text-cyan-400">{plan.price}</span>
                        <span className="text-gray-400 ml-2">{plan.period}</span>
                      </div>
                    </div>
                    <ul className="space-y-4 mb-8">
                      {plan.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-center text-gray-300">
                          <CheckCircle className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                    <FuturisticButton
                      variant={plan.popular ? "primary" : "secondary"}
                      size="lg"
                      className="w-full"
                      onClick={() => window.open('/contact', '_blank')}
                    >
                      Get Started
                    </FuturisticButton>
                  </FuturisticCard>
                ))}
              </div>
            </div>

            {/* CTA Section */}
            <FuturisticCard variant="feature" className="text-center">
              <h2 className="text-3xl font-bold text-white mb-4">
                Ready to Never Miss Important Details?
              </h2>
              <p className="text-xl text-gray-300 mb-8">
                Join 25,000+ professionals who trust our AI to capture every word. 
                Start your free trial today and experience the future of meeting documentation.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <FuturisticButton
                  variant="primary"
                  size="lg"
                  onClick={() => window.open('/contact', '_blank')}
                >
                  Start Free Trial
                  <ArrowRight className="w-5 h-5 ml-2" />
                </FuturisticButton>
                <FuturisticButton
                  variant="secondary"
                  size="lg"
                  onClick={() => window.open('/contact', '_blank')}
                >
                  Schedule Demo
                </FuturisticButton>
              </div>
              <div className="mt-8 text-white/80 text-sm">
                <p>✓ 14-day free trial • ✓ No setup fees • ✓ Cancel anytime</p>
              </div>
            </FuturisticCard>
          </div>
        </div>
      </FuturisticBackground>
    </>
  );
}
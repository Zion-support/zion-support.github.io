'use client';
import React, { useState, useEffect } from 'react';
import { 
  Video, 
  Mic, 
  MicOff, 
  Play, 
  Pause, 
  Download, 
  Share, 
  Settings, 
  Users, 
  Clock, 
  CheckCircle, 
  Star, 
  ArrowRight, 
  MessageSquare,
  Phone,
  Mail,
  MapPin,
  Calendar,
  FileText,
  Search,
  Zap,
  Brain,
  Shield
} from 'lucide-react';

const AIMeetingTranscriberPage: React.FC = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [isRecording, setIsRecording] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  const features = [
    {
      icon: Mic,
      title: 'Real-time Transcription',
      description: '98% accuracy real-time transcription with speaker identification and live editing',
      benefits: ['Live transcription', 'Speaker identification', 'Real-time editing', 'Multi-language support']
    },
    {
      icon: Users,
      title: 'Speaker Identification',
      description: 'Automatically identify and label different speakers with voice recognition',
      benefits: ['Voice fingerprinting', 'Speaker labeling', 'Turn-taking analysis', 'Speaker analytics']
    },
    {
      icon: FileText,
      title: 'Action Items Extraction',
      description: 'AI-powered extraction of action items, decisions, and key points from meetings',
      benefits: ['Auto action items', 'Decision tracking', 'Key points summary', 'Follow-up reminders']
    },
    {
      icon: Search,
      title: 'Smart Search & Playback',
      description: 'Search through meeting transcripts and jump to specific moments instantly',
      benefits: ['Full-text search', 'Timestamp navigation', 'Keyword highlighting', 'Playback controls']
    },
    {
      icon: Calendar,
      title: 'Calendar Integration',
      description: 'Seamless integration with calendar apps for automatic meeting detection',
      benefits: ['Auto meeting detection', 'Calendar sync', 'Meeting reminders', 'Recurring meetings']
    },
    {
      icon: Shield,
      title: 'Enterprise Security',
      description: 'Bank-grade security with encryption, access controls, and compliance features',
      benefits: ['End-to-end encryption', 'Role-based access', 'Audit logs', 'GDPR compliance']
    }
  ];

  const meetingTypes = [
    {
      type: 'Business Meetings',
      icon: Users,
      description: 'Board meetings, team standups, and corporate discussions',
      accuracy: '98.5%',
      features: ['Action items', 'Decision tracking', 'Attendee management', 'Follow-up tasks']
    },
    {
      type: 'Client Calls',
      icon: Phone,
      description: 'Sales calls, client consultations, and customer support',
      accuracy: '97.8%',
      features: ['Client notes', 'Proposal tracking', 'Follow-up reminders', 'CRM integration']
    },
    {
      type: 'Interviews',
      icon: Video,
      description: 'Job interviews, research interviews, and media interviews',
      accuracy: '99.1%',
      features: ['Candidate notes', 'Question tracking', 'Response analysis', 'Evaluation forms']
    },
    {
      type: 'Training Sessions',
      icon: Brain,
      description: 'Employee training, workshops, and educational sessions',
      accuracy: '98.2%',
      features: ['Learning objectives', 'Key concepts', 'Quiz generation', 'Progress tracking']
    }
  ];

  const pricing = [
    {
      name: 'Starter',
      price: '$99',
      period: '/month',
      description: 'Perfect for small teams and individuals',
      features: [
        'Up to 10 hours/month',
        'Basic transcription',
        'Speaker identification',
        'Email support',
        'Standard accuracy',
        'Basic search'
      ],
      popular: false
    },
    {
      name: 'Professional',
      price: '$199',
      period: '/month',
      description: 'Ideal for growing businesses and teams',
      features: [
        'Up to 50 hours/month',
        'Advanced transcription',
        'AI action items extraction',
        'Priority support',
        'High accuracy (98%+)',
        'Advanced search',
        'Calendar integration',
        'Team collaboration'
      ],
      popular: true
    },
    {
      name: 'Enterprise',
      price: '$399',
      period: '/month',
      description: 'For large organizations with high-volume needs',
      features: [
        'Unlimited hours',
        'Premium transcription',
        'AI meeting insights',
        '24/7 dedicated support',
        'Maximum accuracy (99%+)',
        'Advanced analytics',
        'Custom integrations',
        'White-label options',
        'SLA guarantees'
      ],
      popular: false
    }
  ];

  const stats = [
    { number: '98%', label: 'Transcription Accuracy' },
    { number: '4,500+', label: 'Active Users' },
    { number: '50+', label: 'Languages Supported' },
    { number: '99.9%', label: 'Uptime SLA' }
  ];

  const integrations = [
    { name: 'Zoom', icon: '📹' },
    { name: 'Microsoft Teams', icon: '👥' },
    { name: 'Google Meet', icon: '🎥' },
    { name: 'Slack', icon: '💬' },
    { name: 'Notion', icon: '📝' },
    { name: 'Confluence', icon: '📚' },
    { name: 'Salesforce', icon: '⚡' },
    { name: 'HubSpot', icon: '🎯' }
  ];

  if (!isLoaded) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900 flex items-center justify-center">
        <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-white"></div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900 matrix-bg">
      {/* Hero Section */}
      <section className="relative py-20 lg:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/20 to-purple-600/20 animate-pulse"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl lg:text-6xl font-bold text-white mb-6 cyber-text neon-pulse">
              AI Meeting Transcriber Pro
            </h1>
            <p className="text-xl lg:text-2xl text-gray-300 mb-8 leading-relaxed neon-glow-cyan">
              Real-time meeting transcription with 98% accuracy, speaker identification, 
              and AI-powered action items extraction. Never miss important details again.
            </p>
            
            {/* Interactive Demo */}
            <div className="bg-slate-800/50 rounded-2xl p-8 mb-8 max-w-2xl mx-auto">
              <div className="flex items-center justify-center space-x-4 mb-6">
                <button
                  onClick={() => setIsRecording(!isRecording)}
                  className={`w-16 h-16 rounded-full flex items-center justify-center transition-all duration-300 ${
                    isRecording 
                      ? 'bg-red-500 hover:bg-red-600 animate-pulse' 
                      : 'bg-cyan-500 hover:bg-cyan-600'
                  }`}
                >
                  {isRecording ? <MicOff className="w-8 h-8 text-white" /> : <Mic className="w-8 h-8 text-white" />}
                </button>
                <button
                  onClick={() => setIsPlaying(!isPlaying)}
                  className={`w-16 h-16 rounded-full flex items-center justify-center transition-all duration-300 ${
                    isPlaying 
                      ? 'bg-green-500 hover:bg-green-600 animate-pulse' 
                      : 'bg-purple-500 hover:bg-purple-600'
                  }`}
                >
                  {isPlaying ? <Pause className="w-8 h-8 text-white" /> : <Play className="w-8 h-8 text-white" />}
                </button>
              </div>
              <p className="text-gray-300 text-sm mb-4">
                {isRecording ? 'Recording meeting...' : isPlaying ? 'Playing back...' : 'Click to start recording your meeting'}
              </p>
              <div className="flex justify-center space-x-4">
                <button className="px-4 py-2 bg-cyan-500 text-white rounded-lg hover:bg-cyan-600 transition-colors">
                  <Download className="w-4 h-4 inline mr-2" />
                  Download
                </button>
                <button className="px-4 py-2 bg-purple-500 text-white rounded-lg hover:bg-purple-600 transition-colors">
                  <Share className="w-4 h-4 inline mr-2" />
                  Share
                </button>
              </div>
            </div>

            <div className="flex flex-wrap justify-center gap-4">
              <div className="holographic px-6 py-3 rounded-lg">
                <span className="text-cyan-400 font-semibold">98% Accuracy</span>
              </div>
              <div className="holographic px-6 py-3 rounded-lg">
                <span className="text-purple-400 font-semibold">Real-time Processing</span>
              </div>
              <div className="holographic px-6 py-3 rounded-lg">
                <span className="text-pink-400 font-semibold">AI Action Items</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-slate-800/30">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl font-bold text-cyan-400 mb-2">{stat.number}</div>
                <div className="text-gray-300 text-sm">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
              Advanced Meeting Transcription Features
            </h2>
            <p className="text-lg text-gray-300 max-w-3xl mx-auto">
              Powerful AI-driven meeting transcription with industry-leading accuracy and intelligent insights
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="futuristic-card hover-lift p-6">
                <div className="w-16 h-16 bg-gradient-to-br from-cyan-500 to-purple-600 rounded-lg flex items-center justify-center mb-4">
                  <feature.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">{feature.title}</h3>
                <p className="text-gray-300 mb-4">{feature.description}</p>
                <ul className="space-y-2">
                  {feature.benefits.map((benefit, benefitIndex) => (
                    <li key={benefitIndex} className="flex items-center text-sm text-gray-300">
                      <CheckCircle className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
                      {benefit}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Meeting Types Section */}
      <section className="py-20 bg-slate-800/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
              Perfect for Every Meeting Type
            </h2>
            <p className="text-lg text-gray-300 max-w-3xl mx-auto">
              Specialized AI models optimized for different types of meetings and conversations
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {meetingTypes.map((meetingType, index) => (
              <div key={index} className="futuristic-card hover-lift p-6">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-cyan-500 to-purple-600 rounded-lg flex items-center justify-center mr-4">
                    <meetingType.icon className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white">{meetingType.type}</h3>
                    <div className="text-cyan-400 font-semibold">{meetingType.accuracy} accuracy</div>
                  </div>
                </div>
                <p className="text-gray-300 mb-4">{meetingType.description}</p>
                <div>
                  <div className="text-sm text-gray-400 mb-2">Key features:</div>
                  <div className="flex flex-wrap gap-2">
                    {meetingType.features.map((feature, featureIndex) => (
                      <span key={featureIndex} className="px-2 py-1 bg-slate-700 text-gray-300 text-xs rounded">
                        {feature}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Integrations Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
              Seamless Integrations
            </h2>
            <p className="text-lg text-gray-300 max-w-3xl mx-auto">
              Works with all your favorite meeting and productivity tools
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-6">
            {integrations.map((integration, index) => (
              <div key={index} className="futuristic-card hover-lift p-4 text-center">
                <div className="text-3xl mb-2">{integration.icon}</div>
                <div className="text-sm text-gray-300">{integration.name}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-20 bg-slate-800/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
              Simple, Transparent Pricing
            </h2>
            <p className="text-lg text-gray-300 max-w-3xl mx-auto">
              Choose the plan that fits your meeting transcription needs. All plans include our core features.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {pricing.map((plan, index) => (
              <div
                key={index}
                className={`futuristic-card hover-lift p-8 relative ${
                  plan.popular ? 'ring-2 ring-purple-500 neon-glow-purple' : ''
                }`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-4 py-2 rounded-full text-sm font-bold">
                      Most Popular
                    </span>
                  </div>
                )}
                <div className="text-center mb-6">
                  <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                  <p className="text-gray-300 mb-4">{plan.description}</p>
                  <div className="flex items-baseline justify-center">
                    <span className="text-4xl font-bold text-white">{plan.price}</span>
                    <span className="text-gray-400 ml-1">{plan.period}</span>
                  </div>
                </div>
                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-gray-300">
                      <CheckCircle className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <button className="w-full bg-gradient-to-r from-cyan-500 to-purple-600 text-white py-3 px-6 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300">
                  Get Started
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-cyan-600 to-purple-700">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">
            Ready to Never Miss Meeting Details Again?
          </h2>
          <p className="text-xl text-gray-200 mb-8 max-w-3xl mx-auto">
            Join 4,500+ businesses already using our AI Meeting Transcriber Pro. Start your free trial today!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
            <a
              href="https://ziontechgroup.com/contact"
              className="bg-white text-cyan-600 px-8 py-3 rounded-lg font-bold hover:bg-gray-100 transition-colors inline-flex items-center"
            >
              <MessageSquare className="w-5 h-5 mr-2" />
              Start Free Trial
            </a>
            <a
              href="tel:+13024640950"
              className="border-2 border-white text-white px-8 py-3 rounded-lg font-bold hover:bg-white hover:text-cyan-600 transition-colors inline-flex items-center"
            >
              <Phone className="w-5 h-5 mr-2" />
              Call: +1 (302) 464-0950
            </a>
          </div>
          <div className="text-gray-200 text-sm">
            <p>📧 kleber@ziontechgroup.com | 📍 364 E Main St STE 1008, Middletown, DE 19709</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AIMeetingTranscriberPage;
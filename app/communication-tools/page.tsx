import React from 'react';
import Link from 'next/link';
import { 
  ArrowRight, 
  CheckCircle, 
  MessageSquare, 
  Video, 
  Phone, 
  Brain, 
  Target,
  Users,
  Database,
  Smartphone,
  Globe,
  Clock,
  Star,
  Award,
  Phone as PhoneIcon,
  Mail,
  MapPin,
  Activity,
  FileText,
  Settings,
  Shield,
  RefreshCw,
  Monitor,
  PieChart,
  LineChart,
  Zap,
  Mail as MailIcon,
  Calendar,
  FileImage
} from 'lucide-react';

const CommunicationToolsPage: React.FC = () => {
  const features = [
    {
      icon: Brain,
      title: 'AI-Powered Communication',
      description: 'Intelligent communication tools that use AI to optimize messaging, suggest responses, and automate routine communications.',
      benefits: ['Smart responses', 'Tone optimization', 'Auto-translation', 'Sentiment analysis']
    },
    {
      icon: MessageSquare,
      title: 'Unified Messaging',
      description: 'Centralized communication platform that integrates email, chat, video calls, and collaboration tools in one interface.',
      benefits: ['Single interface', 'Cross-platform sync', 'Message history', 'File sharing']
    },
    {
      icon: Video,
      title: 'Video Conferencing',
      description: 'High-quality video conferencing with AI-powered features like noise cancellation, background blur, and automatic transcription.',
      benefits: ['HD video quality', 'AI noise cancellation', 'Auto transcription', 'Screen sharing']
    },
    {
      icon: Zap,
      title: 'Automation & Workflows',
      description: 'Automated communication workflows that handle routine tasks, follow-ups, and notifications based on triggers and schedules.',
      benefits: ['Auto follow-ups', 'Scheduled messages', 'Trigger-based actions', 'Workflow automation']
    }
  ];

  const communicationTools = [
    {
      title: 'Team Chat',
      description: 'Advanced team messaging with channels, threads, and AI-powered features.',
      price: 'Starting at $79/month',
      features: ['Team channels', 'File sharing', 'AI suggestions', 'Message search'],
      icon: MessageSquare
    },
    {
      title: 'Video Conferencing',
      description: 'Professional video meetings with AI enhancements and recording capabilities.',
      price: 'Starting at $99/month',
      features: ['HD video calls', 'Screen sharing', 'Recording', 'AI transcription'],
      icon: Video
    },
    {
      title: 'Email Management',
      description: 'AI-powered email platform with smart categorization and automated responses.',
      price: 'Starting at $59/month',
      features: ['Smart inbox', 'Auto responses', 'Email scheduling', 'Template library'],
      icon: MailIcon
    },
    {
      title: 'Customer Support',
      description: 'Omnichannel customer support platform with AI chatbots and ticketing.',
      price: 'Starting at $149/month',
      features: ['Live chat', 'AI chatbots', 'Ticket management', 'Knowledge base'],
      icon: Users
    }
  ];

  const integrations = [
    { name: 'Slack', description: 'Seamless integration with Slack workspaces', coverage: '100%' },
    { name: 'Microsoft Teams', description: 'Full integration with Microsoft Teams', coverage: '100%' },
    { name: 'Zoom', description: 'Video conferencing integration and scheduling', coverage: '100%' },
    { name: 'Salesforce', description: 'CRM integration for customer communications', coverage: '95%' },
    { name: 'HubSpot', description: 'Marketing automation and lead management', coverage: '90%' },
    { name: 'Google Workspace', description: 'Gmail, Calendar, and Drive integration', coverage: '100%' }
  ];

  const industries = [
    { name: 'Remote Work', description: 'Communication tools for distributed teams and remote workers' },
    { name: 'Customer Service', description: 'Omnichannel support tools for customer-facing teams' },
    { name: 'Sales', description: 'Communication tools for sales teams and lead management' },
    { name: 'Healthcare', description: 'HIPAA-compliant communication for medical teams' },
    { name: 'Education', description: 'Communication tools for schools and educational institutions' },
    { name: 'Consulting', description: 'Client communication and project management tools' }
  ];

  const stats = [
    { number: '50+', label: 'Integrations', icon: Database },
    { number: '99.9%', label: 'Uptime', icon: Clock },
    { number: '10x', label: 'Productivity Boost', icon: Zap },
    { number: '24/7', label: 'AI Support', icon: Brain }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-teal-900 to-slate-900">
      {/* Hero Section */}
      <section className="relative overflow-hidden py-20 px-4">
        <div className="absolute inset-0 bg-gradient-to-r from-teal-600/20 to-cyan-600/20"></div>
        <div className="relative max-w-7xl mx-auto text-center">
          <div className="inline-flex items-center bg-teal-600/20 text-teal-300 px-4 py-2 rounded-full text-sm font-medium mb-6">
            <MessageSquare className="w-4 h-4 mr-2" />
            AI-Powered Communication Tools
          </div>
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
            Communication Tools
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto">
            Enhance team collaboration and customer communication with our comprehensive suite of AI-powered communication tools. 
            Streamline workflows, improve engagement, and boost productivity across all communication channels.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <a
              href="tel:+13024640950"
              className="bg-gradient-to-r from-teal-600 to-cyan-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-teal-700 hover:to-cyan-700 transition-all inline-flex items-center"
            >
              <PhoneIcon className="w-5 h-5 mr-2" />
              Call: (302) 464-0950
            </a>
            <a
              href="/contact"
              className="border-2 border-teal-600 text-teal-300 px-8 py-4 rounded-lg font-semibold hover:bg-teal-600 hover:text-white transition-all"
            >
              Get Communication Demo
            </a>
          </div>
          
          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-teal-400 mb-2">{stat.number}</div>
                <div className="text-sm text-gray-300">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Communication Features
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Our AI-powered communication platform provides intelligent tools for all your communication needs.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-lg rounded-xl p-8 border border-white/20">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-teal-600 rounded-lg flex items-center justify-center mr-4">
                    <feature.icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-white">{feature.title}</h3>
                </div>
                <p className="text-gray-300 mb-6">{feature.description}</p>
                <ul className="space-y-2">
                  {feature.benefits.map((benefit, benefitIndex) => (
                    <li key={benefitIndex} className="flex items-center text-gray-300">
                      <CheckCircle className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" />
                      {benefit}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Communication Tools */}
      <section className="py-20 px-4 bg-white/5">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Communication Tools
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Choose from our comprehensive suite of communication tools designed for different team needs.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {communicationTools.map((tool, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-lg rounded-xl p-6 border border-white/20 hover:border-teal-500/50 transition-all">
                <div className="w-12 h-12 bg-gradient-to-r from-teal-600 to-cyan-600 rounded-lg flex items-center justify-center mb-4">
                  <tool.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">{tool.title}</h3>
                <p className="text-gray-300 mb-4 text-sm">{tool.description}</p>
                <div className="text-2xl font-bold text-teal-400 mb-4">{tool.price}</div>
                <ul className="space-y-2 mb-6">
                  {tool.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-sm text-gray-300">
                      <CheckCircle className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <a
                  href="/contact"
                  className="w-full bg-gradient-to-r from-teal-600 to-cyan-600 text-white py-2 px-4 rounded-lg font-semibold hover:from-teal-700 hover:to-cyan-700 transition-all text-center block"
                >
                  Get Started
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Integrations */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Integrations
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Connect with your favorite tools and platforms for seamless communication workflows.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {integrations.map((integration, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-lg rounded-xl p-6 border border-white/20">
                <div className="flex justify-between items-start mb-4">
                  <h3 className="text-xl font-bold text-white">{integration.name}</h3>
                  <span className="bg-green-600 text-white px-3 py-1 rounded-full text-sm font-bold">
                    {integration.coverage}
                  </span>
                </div>
                <p className="text-gray-300">{integration.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Industries */}
      <section className="py-20 px-4 bg-white/5">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Industry Solutions
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Specialized communication tools for different industries and use cases.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {industries.map((industry, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-lg rounded-xl p-6 border border-white/20">
                <h3 className="text-xl font-bold text-white mb-3">{industry.name}</h3>
                <p className="text-gray-300">{industry.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Communication Pricing
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Flexible pricing options for communication tools. All plans include AI features and 24/7 support.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white/10 backdrop-blur-lg rounded-xl p-8 border border-white/20">
              <h3 className="text-2xl font-bold text-white mb-4">Starter</h3>
              <div className="text-4xl font-bold text-teal-400 mb-6">$79<span className="text-lg text-gray-300">/month</span></div>
              <ul className="space-y-3 mb-8">
                <li className="flex items-center text-gray-300">
                  <CheckCircle className="w-5 h-5 text-green-400 mr-3" />
                  Basic team chat
                </li>
                <li className="flex items-center text-gray-300">
                  <CheckCircle className="w-5 h-5 text-green-400 mr-3" />
                  Video calls (up to 10 users)
                </li>
                <li className="flex items-center text-gray-300">
                  <CheckCircle className="w-5 h-5 text-green-400 mr-3" />
                  File sharing
                </li>
                <li className="flex items-center text-gray-300">
                  <CheckCircle className="w-5 h-5 text-green-400 mr-3" />
                  Email support
                </li>
              </ul>
              <a
                href="/contact"
                className="w-full bg-gradient-to-r from-teal-600 to-cyan-600 text-white py-3 px-6 rounded-lg font-semibold hover:from-teal-700 hover:to-cyan-700 transition-all text-center block"
              >
                Get Started
              </a>
            </div>

            <div className="bg-gradient-to-r from-teal-600 to-cyan-600 rounded-xl p-8 relative">
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                <span className="bg-yellow-400 text-black px-4 py-1 rounded-full text-sm font-bold flex items-center">
                  <Star className="w-4 h-4 mr-1" />
                  Most Popular
                </span>
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">Professional</h3>
              <div className="text-4xl font-bold text-white mb-6">$199<span className="text-lg text-teal-200">/month</span></div>
              <ul className="space-y-3 mb-8">
                <li className="flex items-center text-white">
                  <CheckCircle className="w-5 h-5 text-green-300 mr-3" />
                  Advanced team chat
                </li>
                <li className="flex items-center text-white">
                  <CheckCircle className="w-5 h-5 text-green-300 mr-3" />
                  Video calls (up to 50 users)
                </li>
                <li className="flex items-center text-white">
                  <CheckCircle className="w-5 h-5 text-green-300 mr-3" />
                  AI-powered features
                </li>
                <li className="flex items-center text-white">
                  <CheckCircle className="w-5 h-5 text-green-300 mr-3" />
                  Priority support
                </li>
                <li className="flex items-center text-white">
                  <CheckCircle className="w-5 h-5 text-green-300 mr-3" />
                  Advanced integrations
                </li>
              </ul>
              <a
                href="/contact"
                className="w-full bg-white text-teal-600 py-3 px-6 rounded-lg font-semibold hover:bg-gray-100 transition-all text-center block"
              >
                Get Started
              </a>
            </div>

            <div className="bg-white/10 backdrop-blur-lg rounded-xl p-8 border border-white/20">
              <h3 className="text-2xl font-bold text-white mb-4">Enterprise</h3>
              <div className="text-4xl font-bold text-teal-400 mb-6">Custom<span className="text-lg text-gray-300">/month</span></div>
              <ul className="space-y-3 mb-8">
                <li className="flex items-center text-gray-300">
                  <CheckCircle className="w-5 h-5 text-green-400 mr-3" />
                  Unlimited users
                </li>
                <li className="flex items-center text-gray-300">
                  <CheckCircle className="w-5 h-5 text-green-400 mr-3" />
                  Full AI suite
                </li>
                <li className="flex items-center text-gray-300">
                  <CheckCircle className="w-5 h-5 text-green-400 mr-3" />
                  Custom integrations
                </li>
                <li className="flex items-center text-gray-300">
                  <CheckCircle className="w-5 h-5 text-green-400 mr-3" />
                  Dedicated support
                </li>
                <li className="flex items-center text-gray-300">
                  <CheckCircle className="w-5 h-5 text-green-400 mr-3" />
                  On-premise options
                </li>
              </ul>
              <a
                href="/contact"
                className="w-full bg-gradient-to-r from-teal-600 to-cyan-600 text-white py-3 px-6 rounded-lg font-semibold hover:from-teal-700 hover:to-cyan-700 transition-all text-center block"
              >
                Contact Sales
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Improve Your Communication
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Enhance team collaboration and customer communication with our AI-powered tools.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:+13024640950"
              className="bg-gradient-to-r from-teal-600 to-cyan-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-teal-700 hover:to-cyan-700 transition-all inline-flex items-center"
            >
              <PhoneIcon className="w-5 h-5 mr-2" />
              Call: (302) 464-0950
            </a>
            <a
              href="mailto:kleber@ziontechgroup.com"
              className="border-2 border-teal-600 text-teal-300 px-8 py-4 rounded-lg font-semibold hover:bg-teal-600 hover:text-white transition-all inline-flex items-center"
            >
              <Mail className="w-5 h-5 mr-2" />
              kleber@ziontechgroup.com
            </a>
          </div>
          <div className="mt-8 text-sm text-gray-400">
            <p>📍 364 E Main St STE 1008, Middletown DE 19709</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CommunicationToolsPage;
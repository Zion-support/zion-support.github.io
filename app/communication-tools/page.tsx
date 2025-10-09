import React from 'react';
import Head from 'next/head';
import { CheckCircle, TrendingUp, Phone, Mail, MapPin, MessageCircle, Video, Users, Headphones } from 'lucide-react';

const CommunicationToolsPage: React.FC = () => {
  const communicationServices = [
    {
      title: 'AI-Powered Chat Platform',
      description: 'Intelligent team communication with AI-powered features, smart notifications, and automated workflows.',
      icon: '💬',
      price: '$800/month',
      features: [
        'Real-time Messaging',
        'AI-Powered Search',
        'Smart Notifications',
        'File Sharing',
        'Voice & Video Calls',
        'Bot Integration'
      ],
      benefits: [
        'Improve team collaboration',
        'Reduce communication overhead',
        'Find information instantly',
        'Streamline workflows'
      ],
      marketPrice: '$1,600-3,200/month',
      category: 'Team Communication',
      technologies: ['Real-time Messaging', 'AI/ML', 'WebRTC', 'File Sharing', 'APIs', 'Bot Framework']
    },
    {
      title: 'AI Video Conferencing',
      description: 'Intelligent video conferencing with AI-powered features, automated transcription, and smart meeting insights.',
      icon: '📹',
      price: '$1,200/month',
      features: [
        'HD Video Conferencing',
        'AI Transcription',
        'Meeting Insights',
        'Screen Sharing',
        'Recording & Playback',
        'Virtual Backgrounds'
      ],
      benefits: [
        'Enhance meeting productivity',
        'Automate note-taking',
        'Improve meeting outcomes',
        'Reduce meeting costs by 60%'
      ],
      marketPrice: '$2,400-4,800/month',
      category: 'Video Conferencing',
      technologies: ['WebRTC', 'AI/ML', 'Transcription', 'Video Processing', 'APIs', 'Cloud Infrastructure']
    },
    {
      title: 'AI Customer Support Chat',
      description: 'Intelligent customer support with AI-powered chatbots, automated responses, and seamless human handoff.',
      icon: '🎧',
      price: '$1,000/month',
      features: [
        'AI Chatbots',
        'Automated Responses',
        'Human Handoff',
        'Knowledge Base Integration',
        'Multi-channel Support',
        'Analytics & Reporting'
      ],
      benefits: [
        'Handle 80% of queries automatically',
        'Improve response time by 90%',
        'Enhance customer satisfaction',
        'Reduce support costs by 70%'
      ],
      marketPrice: '$2,000-4,000/month',
      category: 'Customer Support',
      technologies: ['NLP', 'Chatbots', 'Knowledge Base', 'APIs', 'Analytics', 'Multi-channel']
    },
    {
      title: 'AI Email Management',
      description: 'Intelligent email management with AI-powered sorting, automated responses, and smart scheduling.',
      icon: '📧',
      price: '$600/month',
      features: [
        'Smart Email Sorting',
        'Automated Responses',
        'Smart Scheduling',
        'Priority Detection',
        'Spam Filtering',
        'Email Analytics'
      ],
      benefits: [
        'Organize emails automatically',
        'Respond to emails faster',
        'Reduce email overload',
        'Improve email productivity'
      ],
      marketPrice: '$1,200-2,400/month',
      category: 'Email Management',
      technologies: ['Email APIs', 'NLP', 'AI/ML', 'Automation', 'Scheduling', 'Analytics']
    },
    {
      title: 'AI Voice Communication',
      description: 'Intelligent voice communication with AI-powered transcription, translation, and voice analytics.',
      icon: '🎤',
      price: '$900/month',
      features: [
        'Voice Calls',
        'AI Transcription',
        'Real-time Translation',
        'Voice Analytics',
        'Call Recording',
        'Voice Commands'
      ],
      benefits: [
        'Break language barriers',
        'Automate call documentation',
        'Improve call quality',
        'Enable voice automation'
      ],
      marketPrice: '$1,800-3,600/month',
      category: 'Voice Communication',
      technologies: ['Voice APIs', 'Speech Recognition', 'Translation', 'AI/ML', 'Voice Analytics', 'WebRTC']
    },
    {
      title: 'AI Project Communication',
      description: 'Intelligent project communication with AI-powered updates, progress tracking, and stakeholder management.',
      icon: '📋',
      price: '$1,100/month',
      features: [
        'Project Updates',
        'Progress Tracking',
        'Stakeholder Management',
        'Automated Reporting',
        'Task Assignment',
        'Timeline Management'
      ],
      benefits: [
        'Keep everyone informed',
        'Track progress automatically',
        'Improve project visibility',
        'Reduce communication gaps'
      ],
      marketPrice: '$2,200-4,400/month',
      category: 'Project Communication',
      technologies: ['Project Management', 'AI/ML', 'Automation', 'APIs', 'Reporting', 'Task Management']
    },
    {
      title: 'AI Internal Knowledge Base',
      description: 'Intelligent internal knowledge management with AI-powered search, content recommendations, and automated updates.',
      icon: '📚',
      price: '$800/month',
      features: [
        'AI-Powered Search',
        'Content Recommendations',
        'Automated Updates',
        'Version Control',
        'Access Management',
        'Analytics & Insights'
      ],
      benefits: [
        'Find information instantly',
        'Keep knowledge up-to-date',
        'Improve knowledge sharing',
        'Reduce information silos'
      ],
      marketPrice: '$1,600-3,200/month',
      category: 'Knowledge Management',
      technologies: ['Search Engines', 'AI/ML', 'Content Management', 'APIs', 'Analytics', 'Version Control']
    },
    {
      title: 'AI Social Media Management',
      description: 'Intelligent social media communication with AI-powered content creation, scheduling, and engagement optimization.',
      icon: '📱',
      price: '$1,300/month',
      features: [
        'Content Creation',
        'Automated Scheduling',
        'Engagement Optimization',
        'Sentiment Analysis',
        'Multi-platform Management',
        'Performance Analytics'
      ],
      benefits: [
        'Create engaging content',
        'Optimize posting times',
        'Improve engagement rates',
        'Streamline social media management'
      ],
      marketPrice: '$2,600-5,200/month',
      category: 'Social Media',
      technologies: ['Social Media APIs', 'Content Generation', 'AI/ML', 'Scheduling', 'Analytics', 'Multi-platform']
    },
    {
      title: 'AI Document Collaboration',
      description: 'Intelligent document collaboration with AI-powered editing, version control, and real-time collaboration.',
      icon: '📄',
      price: '$700/month',
      features: [
        'Real-time Collaboration',
        'AI-Powered Editing',
        'Version Control',
        'Comment Management',
        'Access Control',
        'Change Tracking'
      ],
      benefits: [
        'Collaborate in real-time',
        'Improve document quality',
        'Track changes automatically',
        'Streamline document workflows'
      ],
      marketPrice: '$1,400-2,800/month',
      category: 'Document Collaboration',
      technologies: ['Document APIs', 'Real-time Sync', 'AI/ML', 'Version Control', 'APIs', 'Collaboration']
    },
    {
      title: 'AI Meeting Assistant',
      description: 'Intelligent meeting assistance with AI-powered scheduling, agenda management, and follow-up automation.',
      icon: '🤖',
      price: '$1,000/month',
      features: [
        'Smart Scheduling',
        'Agenda Management',
        'Meeting Transcription',
        'Action Item Tracking',
        'Follow-up Automation',
        'Meeting Analytics'
      ],
      benefits: [
        'Optimize meeting schedules',
        'Improve meeting efficiency',
        'Automate follow-ups',
        'Track meeting outcomes'
      ],
      marketPrice: '$2,000-4,000/month',
      category: 'Meeting Assistant',
      technologies: ['Calendar APIs', 'AI/ML', 'Transcription', 'Automation', 'APIs', 'Analytics']
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Head>
        <title>AI Communication Tools - Zion Tech Group</title>
        <meta name="description" content="Intelligent communication tools with AI-powered features, automated workflows, and smart collaboration. Enhance team communication starting at $600/month." />
        <meta name="keywords" content="ai communication tools, team collaboration, video conferencing, chat platform, communication automation, ai chatbots" />
      </Head>

      {/* Hero Section */}
      <section className="pt-24 pb-16 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-6">
            AI Communication Tools
          </h1>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Enhance team collaboration and communication with AI-powered tools that automate workflows, improve productivity, and streamline information sharing.
          </p>
          
          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
              <div className="text-3xl font-bold text-cyan-400 mb-2">90%</div>
              <div className="text-gray-300">Faster Response</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
              <div className="text-3xl font-bold text-green-400 mb-2">$600</div>
              <div className="text-gray-300">Starting Price</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
              <div className="text-3xl font-bold text-purple-400 mb-2">80%</div>
              <div className="text-gray-300">Automation</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
              <div className="text-3xl font-bold text-orange-400 mb-2">70%</div>
              <div className="text-gray-300">Cost Reduction</div>
            </div>
          </div>

          {/* Contact Info */}
          <div className="bg-gradient-to-r from-purple-600 to-blue-600 rounded-lg p-6 mb-12">
            <div className="flex flex-col md:flex-row items-center justify-center space-y-4 md:space-y-0 md:space-x-8">
              <div className="flex items-center space-x-2">
                <Phone className="w-5 h-5" />
                <span className="text-white font-medium">+1 302 464 0950</span>
              </div>
              <div className="flex items-center space-x-2">
                <Mail className="w-5 h-5" />
                <span className="text-white font-medium">kleber@ziontechgroup.com</span>
              </div>
              <div className="flex items-center space-x-2">
                <MapPin className="w-5 h-5" />
                <span className="text-white font-medium">Middletown, DE</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-white text-center mb-12">
            Choose Your Communication Solution
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {communicationServices.map((service, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg p-6 hover:shadow-2xl transition-all duration-300 hover:scale-105">
                <div className="text-center mb-6">
                  <div className="text-5xl mb-4">{service.icon}</div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{service.title}</h3>
                  <p className="text-gray-600 text-sm">{service.description}</p>
                </div>
                
                <div className="mb-6">
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-2xl font-bold text-green-600">{service.price}</span>
                    <span className="text-sm text-gray-500">Market: {service.marketPrice}</span>
                  </div>
                  <div className="bg-purple-100 text-purple-800 text-xs px-2 py-1 rounded-full inline-block">
                    {service.category}
                  </div>
                </div>

                <div className="mb-6">
                  <h4 className="font-semibold text-gray-900 mb-3">Key Features:</h4>
                  <ul className="space-y-2">
                    {service.features.slice(0, 4).map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-sm text-gray-600">
                        <CheckCircle className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                    {service.features.length > 4 && (
                      <li className="text-sm text-gray-500">
                        +{service.features.length - 4} more features
                      </li>
                    )}
                  </ul>
                </div>

                <div className="mb-6">
                  <h4 className="font-semibold text-gray-900 mb-3">Benefits:</h4>
                  <ul className="space-y-1">
                    {service.benefits.map((benefit, benefitIndex) => (
                      <li key={benefitIndex} className="text-sm text-gray-600 flex items-center">
                        <TrendingUp className="w-3 h-3 text-blue-500 mr-2 flex-shrink-0" />
                        {benefit}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mb-6">
                  <h4 className="font-semibold text-gray-900 mb-3">Technologies:</h4>
                  <div className="flex flex-wrap gap-2">
                    {service.technologies.map((tech, techIndex) => (
                      <span key={techIndex} className="bg-gray-100 text-gray-700 text-xs px-2 py-1 rounded">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="text-center">
                  <a
                    href={`mailto:kleber@ziontechgroup.com?subject=Interest in ${service.title}`}
                    className="w-full bg-gradient-to-r from-purple-600 to-blue-600 text-white py-2 px-4 rounded-lg font-medium hover:from-purple-700 hover:to-blue-700 transition-all inline-block"
                  >
                    Get Started Now
                  </a>
                  <p className="text-xs text-gray-500 mt-2">
                    Contact: kleber@ziontechgroup.com | +1 302 464 0950
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 bg-gradient-to-r from-purple-600 to-blue-600">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-white mb-6">
            Ready to Enhance Your Team Communication?
          </h2>
          <p className="text-xl text-purple-100 mb-8">
            Get started with our AI communication tools today and transform how your team collaborates and communicates.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:+13024640950"
              className="bg-white text-purple-600 px-8 py-3 rounded-lg font-medium hover:bg-gray-100 transition-colors"
            >
              Call (302) 464-0950
            </a>
            <a
              href="mailto:kleber@ziontechgroup.com"
              className="bg-transparent border-2 border-white text-white px-8 py-3 rounded-lg font-medium hover:bg-white hover:text-purple-600 transition-colors"
            >
              Email Us
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CommunicationToolsPage;
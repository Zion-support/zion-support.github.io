import React from 'react';
import { CheckCircle, ArrowRight, Brain, Calendar, Mail, FileText, Camera, Mic, Globe, Star, Clock, DollarSign } from 'lucide-react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

const AIPersonalAssistantSuitePage: React.FC = () => {
  const assistantServices = [
    {
      icon: <Brain className="w-12 h-12 text-blue-500" />,
      title: 'AI Personal Assistant Pro',
      description: 'Comprehensive AI assistant that manages your schedule, emails, tasks, and communications with natural language processing.',
      features: [
        'Natural language understanding',
        'Email management and responses',
        'Calendar scheduling and optimization',
        'Task prioritization and tracking',
        'Voice commands and responses',
        'Multi-platform integration'
      ],
      pricing: '$39/month',
      popular: true,
      link: '/ai-personal-assistant',
      category: 'Productivity'
    },
    {
      icon: <Calendar className="w-12 h-12 text-green-500" />,
      title: 'Smart Calendar AI',
      description: 'Intelligent calendar management with automatic scheduling, conflict resolution, and meeting optimization.',
      features: [
        'Automatic meeting scheduling',
        'Conflict detection and resolution',
        'Time zone optimization',
        'Meeting preparation reminders',
        'Travel time calculation',
        'Recurring event management'
      ],
      pricing: '$19/month',
      popular: false,
      link: '/ai-smart-calendar',
      category: 'Scheduling'
    },
    {
      icon: <Mail className="w-12 h-12 text-purple-500" />,
      title: 'AI Email Manager',
      description: 'Smart email management with automatic categorization, response suggestions, and priority filtering.',
      features: [
        'Email categorization and filtering',
        'Smart response suggestions',
        'Priority email detection',
        'Unsubscribe management',
        'Email templates and signatures',
        'Spam and phishing protection'
      ],
      pricing: '$25/month',
      popular: true,
      link: '/ai-email-manager',
      category: 'Communication'
    },
    {
      icon: <FileText className="w-12 h-12 text-orange-500" />,
      title: 'AI Document Assistant',
      description: 'Intelligent document creation, editing, and management with AI-powered content generation and formatting.',
      features: [
        'Document creation and editing',
        'AI content generation',
        'Format and style optimization',
        'Document collaboration',
        'Version control and tracking',
        'Template management'
      ],
      pricing: '$29/month',
      popular: false,
      link: '/ai-document-assistant',
      category: 'Documents'
    },
    {
      icon: <Camera className="w-12 h-12 text-red-500" />,
      title: 'AI Visual Assistant',
      description: 'Computer vision-powered assistant for image analysis, OCR, and visual content management.',
      features: [
        'Image recognition and analysis',
        'OCR text extraction',
        'Visual content search',
        'Image editing and enhancement',
        'QR code scanning',
        'Visual data extraction'
      ],
      pricing: '$22/month',
      popular: false,
      link: '/ai-visual-assistant',
      category: 'Visual'
    },
    {
      icon: <Mic className="w-12 h-12 text-yellow-500" />,
      title: 'AI Voice Assistant',
      description: 'Advanced voice assistant with speech recognition, voice commands, and audio content processing.',
      features: [
        'Speech-to-text conversion',
        'Voice command processing',
        'Audio transcription',
        'Voice note management',
        'Language translation',
        'Audio content analysis'
      ],
      pricing: '$32/month',
      popular: true,
      link: '/ai-voice-assistant',
      category: 'Voice'
    }
  ];

  const stats = [
    { number: '100,000+', label: 'Active Users' },
    { number: '99.9%', label: 'Accuracy Rate' },
    { number: '50%', label: 'Time Saved' },
    { number: '24/7', label: 'AI Support' }
  ];

  const useCases = [
    {
      scenario: 'Executive Assistant',
      description: 'Manage complex schedules, coordinate meetings, and handle communications',
      icon: '👔'
    },
    {
      scenario: 'Content Creator',
      description: 'Generate content, manage social media, and optimize workflows',
      icon: '📝'
    },
    {
      scenario: 'Small Business Owner',
      description: 'Streamline operations, manage customers, and automate tasks',
      icon: '💼'
    },
    {
      scenario: 'Student/Researcher',
      description: 'Organize research, manage deadlines, and process information',
      icon: '🎓'
    }
  ];

  const integrations = [
    { name: 'Microsoft 365', description: 'Seamless integration with Office apps' },
    { name: 'Google Workspace', description: 'Full Gmail and Calendar integration' },
    { name: 'Slack', description: 'Team communication and collaboration' },
    { name: 'Zoom', description: 'Meeting scheduling and management' },
    { name: 'Salesforce', description: 'CRM integration and automation' },
    { name: 'Trello', description: 'Project management and task tracking' }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Helmet>
        <title>AI Personal Assistant Suite - Zion Tech Group</title>
        <meta name="description" content="Comprehensive AI personal assistant suite for productivity, scheduling, email management, and task automation. Boost your efficiency with intelligent AI tools." />
        <meta name="keywords" content="AI personal assistant, productivity tools, smart calendar, email management, voice assistant, document assistant, micro saas" />
      </Helmet>
      
      <Navigation />
      
      <main className="pt-20 px-4 py-20">
        <div className="max-w-7xl mx-auto">
          {/* Hero Section */}
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              AI Personal Assistant Suite
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
              Transform your productivity with our comprehensive AI personal assistant suite. 
              Manage your schedule, emails, tasks, and communications with intelligent automation.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                to="/contact" 
                className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-blue-700 hover:to-purple-700 transition-all duration-300 flex items-center justify-center"
              >
                Start Free Trial
                <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
              <Link 
                to="/micro-saas-services" 
                className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white/10 transition-colors"
              >
                Explore All Micro SAAS
              </Link>
            </div>
          </div>

          {/* Stats Section */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-20">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-white mb-2">{stat.number}</div>
                <div className="text-gray-300 text-sm">{stat.label}</div>
              </div>
            ))}
          </div>

          {/* Use Cases */}
          <div className="mb-20">
            <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-12">Perfect For</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {useCases.map((useCase, index) => (
                <div key={index} className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20 hover:bg-white/15 transition-all duration-300">
                  <div className="text-4xl mb-4">{useCase.icon}</div>
                  <h3 className="text-xl font-semibold text-white mb-4">{useCase.scenario}</h3>
                  <p className="text-gray-300 text-sm">{useCase.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Integrations */}
          <div className="mb-20">
            <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-12">Seamless Integrations</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {integrations.map((integration, index) => (
                <div key={index} className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20 hover:bg-white/15 transition-all duration-300">
                  <h3 className="text-xl font-semibold text-white mb-4">{integration.name}</h3>
                  <p className="text-gray-300">{integration.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Assistant Services Grid */}
          <div className="mb-20">
            <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-12">AI Assistant Services</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {assistantServices.map((service, index) => (
                <div key={index} className={`bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20 hover:bg-white/15 transition-all duration-300 group relative ${service.popular ? 'ring-2 ring-purple-500' : ''}`}>
                  {service.popular && (
                    <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                      <span className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-4 py-1 rounded-full text-sm font-semibold">
                        Most Popular
                      </span>
                    </div>
                  )}
                  <div className="mb-6 group-hover:scale-110 transition-transform duration-300">{service.icon}</div>
                  <div className="mb-2">
                    <span className="bg-blue-600/20 text-blue-400 px-3 py-1 rounded-full text-xs font-semibold">
                      {service.category}
                    </span>
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-4 group-hover:text-purple-300 transition-colors">{service.title}</h3>
                  <p className="text-gray-300 mb-6">{service.description}</p>
                  <ul className="space-y-2 mb-6">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-sm text-gray-300">
                        <CheckCircle className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <div className="flex items-center justify-between mb-6">
                    <span className="text-2xl font-bold text-white">{service.pricing}</span>
                    <Link 
                      to={service.link}
                      className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-2 rounded-lg font-semibold hover:from-blue-700 hover:to-purple-700 transition-all duration-300"
                    >
                      Try Free
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Pricing Plans */}
          <div className="mb-20">
            <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-12">Simple Pricing Plans</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20">
                <h3 className="text-2xl font-bold text-white mb-4">Starter</h3>
                <div className="text-4xl font-bold text-white mb-6">$19<span className="text-lg text-gray-400">/month</span></div>
                <ul className="space-y-3 mb-8">
                  <li className="flex items-center text-gray-300">
                    <CheckCircle className="w-5 h-5 text-green-400 mr-3" />
                    1 AI Assistant
                  </li>
                  <li className="flex items-center text-gray-300">
                    <CheckCircle className="w-5 h-5 text-green-400 mr-3" />
                    Basic Features
                  </li>
                  <li className="flex items-center text-gray-300">
                    <CheckCircle className="w-5 h-5 text-green-400 mr-3" />
                    Email Support
                  </li>
                  <li className="flex items-center text-gray-300">
                    <CheckCircle className="w-5 h-5 text-green-400 mr-3" />
                    Mobile App
                  </li>
                </ul>
                <Link 
                  to="/contact" 
                  className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-3 rounded-lg font-semibold hover:from-blue-700 hover:to-purple-700 transition-all duration-300 text-center block"
                >
                  Get Started
                </Link>
              </div>
              
              <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border-2 border-purple-500 relative">
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <span className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-6 py-2 rounded-full text-sm font-semibold">
                    Most Popular
                  </span>
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">Professional</h3>
                <div className="text-4xl font-bold text-white mb-6">$49<span className="text-lg text-gray-400">/month</span></div>
                <ul className="space-y-3 mb-8">
                  <li className="flex items-center text-gray-300">
                    <CheckCircle className="w-5 h-5 text-green-400 mr-3" />
                    All AI Assistants
                  </li>
                  <li className="flex items-center text-gray-300">
                    <CheckCircle className="w-5 h-5 text-green-400 mr-3" />
                    Advanced Features
                  </li>
                  <li className="flex items-center text-gray-300">
                    <CheckCircle className="w-5 h-5 text-green-400 mr-3" />
                    Priority Support
                  </li>
                  <li className="flex items-center text-gray-300">
                    <CheckCircle className="w-5 h-5 text-green-400 mr-3" />
                    Team Collaboration
                  </li>
                  <li className="flex items-center text-gray-300">
                    <CheckCircle className="w-5 h-5 text-green-400 mr-3" />
                    API Access
                  </li>
                </ul>
                <Link 
                  to="/contact" 
                  className="w-full bg-gradient-to-r from-purple-600 to-pink-600 text-white px-6 py-3 rounded-lg font-semibold hover:from-purple-700 hover:to-pink-700 transition-all duration-300 text-center block"
                >
                  Get Started
                </Link>
              </div>
              
              <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20">
                <h3 className="text-2xl font-bold text-white mb-4">Enterprise</h3>
                <div className="text-4xl font-bold text-white mb-6">$99<span className="text-lg text-gray-400">/month</span></div>
                <ul className="space-y-3 mb-8">
                  <li className="flex items-center text-gray-300">
                    <CheckCircle className="w-5 h-5 text-green-400 mr-3" />
                    Unlimited Assistants
                  </li>
                  <li className="flex items-center text-gray-300">
                    <CheckCircle className="w-5 h-5 text-green-400 mr-3" />
                    Premium Features
                  </li>
                  <li className="flex items-center text-gray-300">
                    <CheckCircle className="w-5 h-5 text-green-400 mr-3" />
                    24/7 Phone Support
                  </li>
                  <li className="flex items-center text-gray-300">
                    <CheckCircle className="w-5 h-5 text-green-400 mr-3" />
                    Custom Integrations
                  </li>
                  <li className="flex items-center text-gray-300">
                    <CheckCircle className="w-5 h-5 text-green-400 mr-3" />
                    Dedicated Manager
                  </li>
                </ul>
                <Link 
                  to="/contact" 
                  className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-3 rounded-lg font-semibold hover:from-blue-700 hover:to-purple-700 transition-all duration-300 text-center block"
                >
                  Contact Sales
                </Link>
              </div>
            </div>
          </div>

          {/* CTA Section */}
          <div className="text-center">
            <div className="bg-gradient-to-r from-purple-600 to-pink-600 rounded-3xl p-12">
              <h2 className="text-4xl font-bold text-white mb-4">Ready to Boost Your Productivity?</h2>
              <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
                Start your free trial today and experience the power of AI personal assistants.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link 
                  to="/contact" 
                  className="bg-white text-purple-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
                >
                  Start Free Trial
                </Link>
                <Link 
                  to="/about" 
                  className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white/10 transition-colors"
                >
                  Learn More
                </Link>
              </div>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default AIPersonalAssistantSuitePage;
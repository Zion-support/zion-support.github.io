'use client';
import React from 'react';
import { Helmet } from 'react-helmet-async';
import SEOHead from '../components/SEOHead';
import FuturisticBackground from '../components/FuturisticBackground';
import NeonButton from '../components/NeonButton';
import AnimatedCard from '../components/AnimatedCard';
import { 
  Brain, 
  CpuChip, 
  Eye, 
  MessageSquare, 
  BarChart3, 
  Shield,
  CheckCircle,
  Star,
  ArrowRight,
  Users,
  Clock,
  Target,
  Zap,
  Globe,
  Lock
} from 'lucide-react';

const AISolutionsPage: React.FC = () => {
  const aiServices = [
    {
      id: 'ai-business-intelligence-pro',
      name: 'AI Business Intelligence Pro',
      description: 'Advanced AI-powered business intelligence with predictive analytics, automated insights, and real-time decision support.',
      icon: BarChart3,
      features: [
        'Predictive analytics',
        'Automated insights',
        'Real-time dashboards',
        'Natural language queries',
        'Custom AI models',
        'Data visualization'
      ],
      pricing: {
        starter: { price: 199, period: 'month', features: ['Basic AI analytics', '5 data sources', 'Email support'] },
        professional: { price: 499, period: 'month', features: ['Advanced AI', 'Unlimited sources', 'Priority support', 'API access'] },
        enterprise: { price: 999, period: 'month', features: ['Custom AI models', 'White-label', '24/7 support', 'Dedicated team'] }
      },
      href: '/ai-business-intelligence-pro',
      category: 'Analytics',
      rating: 4.9,
      users: '1,200+'
    },
    {
      id: 'ai-customer-support-chatbot',
      name: 'AI Customer Support Chatbot',
      description: 'Intelligent customer support chatbot with natural language processing, multi-channel deployment, and human handoff.',
      icon: MessageSquare,
      features: [
        'Natural language processing',
        'Multi-channel deployment',
        'Human handoff',
        'Sentiment analysis',
        'Custom training',
        'Analytics dashboard'
      ],
      pricing: {
        starter: { price: 149, period: 'month', features: ['1 chatbot', '1,000 conversations', 'Basic AI'] },
        professional: { price: 399, period: 'month', features: ['5 chatbots', '10,000 conversations', 'Advanced AI', 'API access'] },
        enterprise: { price: 799, period: 'month', features: ['Unlimited chatbots', 'Unlimited conversations', 'Custom AI', 'Dedicated support'] }
      },
      href: '/ai-customer-support-chatbot',
      category: 'Customer Service',
      rating: 4.8,
      users: '3,500+'
    },
    {
      id: 'ai-content-generation-pro',
      name: 'AI Content Generation Pro',
      description: 'Advanced AI content creation platform with multi-format support, brand voice training, and automated publishing.',
      icon: Brain,
      features: [
        'Multi-format content',
        'Brand voice training',
        'Automated publishing',
        'SEO optimization',
        'Plagiarism detection',
        'Content analytics'
      ],
      pricing: {
        starter: { price: 99, period: 'month', features: ['1,000 words/month', 'Basic templates', 'Email support'] },
        professional: { price: 299, period: 'month', features: ['10,000 words/month', 'Advanced AI', 'Priority support', 'API access'] },
        enterprise: { price: 599, period: 'month', features: ['Unlimited words', 'Custom AI models', '24/7 support', 'White-label options'] }
      },
      href: '/ai-content-generation-pro',
      category: 'Content',
      rating: 4.9,
      users: '2,800+'
    },
    {
      id: 'ai-cybersecurity-suite-pro',
      name: 'AI Cybersecurity Suite Pro',
      description: 'Comprehensive AI-powered cybersecurity platform with threat detection, automated response, and compliance monitoring.',
      icon: Shield,
      features: [
        'AI threat detection',
        'Automated response',
        'Behavioral analysis',
        'Compliance monitoring',
        'Incident management',
        'Security analytics'
      ],
      pricing: {
        starter: { price: 299, period: 'month', features: ['10 assets', 'Basic AI', 'Email alerts'] },
        professional: { price: 699, period: 'month', features: ['50 assets', 'Advanced AI', 'Priority support', 'API access'] },
        enterprise: { price: 1299, period: 'month', features: ['Unlimited assets', 'Custom AI', '24/7 support', 'Dedicated team'] }
      },
      href: '/ai-cybersecurity-suite-pro',
      category: 'Security',
      rating: 4.8,
      users: '1,600+'
    },
    {
      id: 'ai-computer-vision',
      name: 'AI Computer Vision',
      description: 'Advanced computer vision platform with image recognition, object detection, and automated visual analysis.',
      icon: Eye,
      features: [
        'Image recognition',
        'Object detection',
        'Facial recognition',
        'OCR capabilities',
        'Video analysis',
        'Custom model training'
      ],
      pricing: {
        starter: { price: 199, period: 'month', features: ['1,000 images/month', 'Basic models', 'Email support'] },
        professional: { price: 499, period: 'month', features: ['10,000 images/month', 'Advanced models', 'Priority support', 'API access'] },
        enterprise: { price: 999, period: 'month', features: ['Unlimited images', 'Custom models', '24/7 support', 'Dedicated team'] }
      },
      href: '/ai-computer-vision',
      category: 'Vision',
      rating: 4.7,
      users: '2,200+'
    },
    {
      id: 'ai-automation-platform',
      name: 'AI Automation Platform',
      description: 'Intelligent automation platform with AI-powered workflow optimization, task automation, and process intelligence.',
      icon: Zap,
      features: [
        'Workflow automation',
        'AI optimization',
        'Process intelligence',
        'Task scheduling',
        'Integration management',
        'Performance analytics'
      ],
      pricing: {
        starter: { price: 149, period: 'month', features: ['10 workflows', 'Basic AI', 'Email support'] },
        professional: { price: 399, period: 'month', features: ['50 workflows', 'Advanced AI', 'Priority support', 'API access'] },
        enterprise: { price: 799, period: 'month', features: ['Unlimited workflows', 'Custom AI', '24/7 support', 'Dedicated team'] }
      },
      href: '/ai-automation-platform',
      category: 'Automation',
      rating: 4.8,
      users: '2,900+'
    },
    {
      id: 'ai-voice-assistant-pro',
      name: 'AI Voice Assistant Pro',
      description: 'Advanced voice AI platform with natural language understanding, multi-language support, and custom voice training.',
      icon: Users,
      features: [
        'Natural language understanding',
        'Multi-language support',
        'Custom voice training',
        'Conversation management',
        'Voice analytics',
        'Integration APIs'
      ],
      pricing: {
        starter: { price: 199, period: 'month', features: ['1,000 interactions/month', 'Basic voice AI', 'Email support'] },
        professional: { price: 499, period: 'month', features: ['10,000 interactions/month', 'Advanced voice AI', 'Priority support', 'API access'] },
        enterprise: { price: 999, period: 'month', features: ['Unlimited interactions', 'Custom voice AI', '24/7 support', 'Dedicated team'] }
      },
      href: '/ai-voice-assistant-pro',
      category: 'Voice',
      rating: 4.9,
      users: '1,800+'
    },
    {
      id: 'ai-fraud-detection-pro',
      name: 'AI Fraud Detection Pro',
      description: 'Advanced fraud detection system with machine learning models, real-time monitoring, and automated risk scoring.',
      icon: Lock,
      features: [
        'Machine learning models',
        'Real-time monitoring',
        'Risk scoring',
        'Pattern recognition',
        'Anomaly detection',
        'Compliance reporting'
      ],
      pricing: {
        starter: { price: 249, period: 'month', features: ['1,000 transactions/month', 'Basic ML models', 'Email support'] },
        professional: { price: 599, period: 'month', features: ['10,000 transactions/month', 'Advanced ML models', 'Priority support', 'API access'] },
        enterprise: { price: 1199, period: 'month', features: ['Unlimited transactions', 'Custom ML models', '24/7 support', 'Dedicated team'] }
      },
      href: '/ai-fraud-detection-pro',
      category: 'Security',
      rating: 4.8,
      users: '1,400+'
    }
  ];

  const categories = ['All', 'Analytics', 'Customer Service', 'Content', 'Security', 'Vision', 'Automation', 'Voice'];

  return (
    <>
      <SEOHead 
        title="AI Solutions - Zion Tech Group"
        description="Discover our comprehensive suite of AI solutions designed to transform your business. From machine learning to computer vision, we have the AI tools you need."
        keywords="AI solutions, artificial intelligence, machine learning, computer vision, natural language processing, AI automation, AI analytics"
      />
      
      <div className="min-h-screen bg-slate-900 text-white relative overflow-hidden">
        <FuturisticBackground />
        
        {/* Hero Section */}
        <section className="relative z-10 py-20 lg:py-32">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <div className="inline-flex items-center space-x-2 bg-purple-500/10 text-purple-400 px-4 py-2 rounded-full text-sm font-medium mb-6">
                <Brain className="w-4 h-4" />
                <span>Artificial Intelligence Solutions</span>
              </div>
              
              <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold mb-6 lg:mb-8">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">
                  AI Solutions
                </span>
              </h1>
              
              <p className="text-lg sm:text-xl lg:text-2xl text-gray-300 mb-8 lg:mb-12 max-w-4xl mx-auto leading-relaxed">
                Transform your business with our comprehensive suite of AI solutions. From machine learning to computer vision, 
                we provide the intelligent tools you need to stay ahead of the competition.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
                <NeonButton href="/contact" size="lg">
                  Get Started Today
                </NeonButton>
                <NeonButton href="/demo" variant="secondary" size="lg">
                  View AI Demo
                </NeonButton>
              </div>
              
              {/* AI Stats */}
              <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 max-w-4xl mx-auto">
                <div className="text-center">
                  <div className="text-3xl font-bold text-purple-400 mb-2">15+</div>
                  <div className="text-gray-300 text-sm">AI Solutions</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-pink-400 mb-2">10,000+</div>
                  <div className="text-gray-300 text-sm">AI Models Deployed</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-cyan-400 mb-2">99.9%</div>
                  <div className="text-gray-300 text-sm">Accuracy Rate</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-green-400 mb-2">24/7</div>
                  <div className="text-gray-300 text-sm">AI Monitoring</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Services Grid */}
        <section className="relative z-10 py-16 lg:py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12 lg:mb-16">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6">
                Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">AI Solutions</span>
              </h2>
              <p className="text-lg sm:text-xl text-gray-300 max-w-3xl mx-auto">
                Choose from our comprehensive collection of AI solutions, each designed to solve specific business challenges.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 lg:gap-8">
              {aiServices.map((service) => (
                <AnimatedCard key={service.id} href={service.href} glowColor="purple">
                  <div className="space-y-4">
                    {/* Service Header */}
                    <div className="flex items-start justify-between">
                      <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-600 rounded-lg flex items-center justify-center">
                        <service.icon className="w-6 h-6 text-white" />
                      </div>
                      <div className="flex items-center space-x-1">
                        <Star className="w-4 h-4 text-yellow-400 fill-current" />
                        <span className="text-sm text-gray-300">{service.rating}</span>
                      </div>
                    </div>
                    
                    {/* Service Info */}
                    <div>
                      <h3 className="text-xl font-semibold text-white mb-2 group-hover:text-purple-300 transition-colors">
                        {service.name}
                      </h3>
                      <p className="text-gray-400 text-sm leading-relaxed mb-3">
                        {service.description}
                      </p>
                      <div className="flex items-center justify-between text-sm">
                        <span className="text-purple-400 font-medium">{service.category}</span>
                        <span className="text-gray-500">{service.users} users</span>
                      </div>
                    </div>
                    
                    {/* Pricing */}
                    <div className="border-t border-slate-700 pt-4">
                      <div className="flex items-baseline space-x-2">
                        <span className="text-2xl font-bold text-white">${service.pricing.starter.price}</span>
                        <span className="text-gray-400 text-sm">/{service.pricing.starter.period}</span>
                        <span className="text-xs text-gray-500">starting</span>
                      </div>
                    </div>
                    
                    {/* Features Preview */}
                    <div className="space-y-2">
                      {service.features.slice(0, 3).map((feature, index) => (
                        <div key={index} className="flex items-center space-x-2">
                          <CheckCircle className="w-4 h-4 text-green-400 flex-shrink-0" />
                          <span className="text-sm text-gray-300">{feature}</span>
                        </div>
                      ))}
                      <div className="text-sm text-purple-400 font-medium">
                        +{service.features.length - 3} more features
                      </div>
                    </div>
                    
                    {/* CTA */}
                    <div className="pt-4">
                      <div className="flex items-center text-purple-400 group-hover:text-purple-300 transition-colors">
                        <span className="text-sm font-medium">Learn More</span>
                        <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                      </div>
                    </div>
                  </div>
                </AnimatedCard>
              ))}
            </div>
          </div>
        </section>

        {/* AI Capabilities Section */}
        <section className="relative z-10 py-16 lg:py-20 bg-slate-800/30">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12 lg:mb-16">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6">
                AI <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">Capabilities</span>
              </h2>
              <p className="text-lg sm:text-xl text-gray-300 max-w-3xl mx-auto">
                Our AI solutions leverage cutting-edge technologies to deliver intelligent automation and insights.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <AnimatedCard glowColor="purple">
                <div className="text-center space-y-4">
                  <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-600 rounded-full flex items-center justify-center mx-auto">
                    <Brain className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-white">Machine Learning</h3>
                  <p className="text-gray-400">
                    Advanced ML algorithms for predictive analytics, pattern recognition, and intelligent decision making.
                  </p>
                </div>
              </AnimatedCard>
              
              <AnimatedCard glowColor="cyan">
                <div className="text-center space-y-4">
                  <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-full flex items-center justify-center mx-auto">
                    <Eye className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-white">Computer Vision</h3>
                  <p className="text-gray-400">
                    Image recognition, object detection, and visual analysis powered by state-of-the-art computer vision AI.
                  </p>
                </div>
              </AnimatedCard>
              
              <AnimatedCard glowColor="green">
                <div className="text-center space-y-4">
                  <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-emerald-600 rounded-full flex items-center justify-center mx-auto">
                    <MessageSquare className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-white">Natural Language Processing</h3>
                  <p className="text-gray-400">
                    Advanced NLP for text analysis, sentiment detection, and intelligent conversation management.
                  </p>
                </div>
              </AnimatedCard>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="relative z-10 py-16 lg:py-20">
          <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6">
              Ready to Harness the Power of AI?
            </h2>
            <p className="text-lg sm:text-xl text-gray-300 mb-8 lg:mb-12">
              Transform your business with our cutting-edge AI solutions. Get started today and experience the future of intelligent automation.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <NeonButton href="/contact" size="lg">
                Start AI Journey
              </NeonButton>
              <NeonButton href="/demo" variant="secondary" size="lg">
                AI Consultation
              </NeonButton>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default AISolutionsPage;
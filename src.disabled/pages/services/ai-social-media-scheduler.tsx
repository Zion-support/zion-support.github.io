import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import {
  Calendar,
  Bot,
  Zap,
  BarChart3,
  Shield,
  Clock,
  Users,
  TrendingUp,
  CheckCircle,
  Star,
  ArrowRight,
  Phone,
  Mail as MailIcon,
  MapPin,
  DollarSign,
  Award,
  Target,
  Brain,
  Settings,
  FileText,
  Send,
  Inbox,
  Filter,
  Search,
  MessageSquare,
  Eye,
  Lock,
  Globe,
  Smartphone,
  Monitor,
  Tablet,
  Share2,
  Heart,
  ThumbsUp,
  MessageCircle,
  Hash,
  Image,
  Video,
  Link,
  Edit3,
  Plus,
  Trash2,
  Copy,
  Download,
  Upload} from 'lucide-react';
const AISocialMediaScheduler = () => {'
  const [activeTab, setActiveTab] = useState('overview');
  const [isVisible, setIsVisible] = useState(false);
  useEffect(() => {
    setIsVisible(true)}, [])
  const features = [
    {'
      icon: <Bot className='w-6 h-6' />,
      title: 'AI Content Generation',
      description: 'Generate engaging posts, captions, and hashtags using advanced AI algorithms tailored to your brand voice.'},
    {'
      icon: <Calendar className='w-6 h-6' />,
      title: 'Smart Scheduling',
      description: 'AI-powered optimal posting times based on your audience engagement patterns and platform algorithms.'},
    {'
      icon: <BarChart3 className='w-6 h-6' />,
      title: 'Advanced Analytics',
      description: 'Comprehensive performance tracking with engagement metrics, reach analysis, and ROI measurement.'},
    {'
      icon: <Shield className='w-6 h-6' />,
      title: 'Multi-Platform Management',
      description: 'Seamlessly manage Facebook, Instagram, Twitter, LinkedIn, TikTok, and YouTube from one dashboard.'},
    {'
      icon: <Zap className='w-6 h-6' />,
      title: 'Automated Engagement',
      description: 'AI-powered responses to comments, mentions, and messages to maintain active community engagement.'},
    {'
      icon: <Users className='w-6 h-6' />,
      title: 'Team Collaboration',
      description: 'Multi-user access with role-based permissions, approval workflows, and collaborative content creation.'}
  ];
  const pricingPlans = [{'
      name: 'Starter',
      price: '$19',
      period: '/month',
      description: 'Perfect for individuals and small businesses',
      features: [;
        'Up to 3 social accounts',
        '30 posts per month',
        'Basic AI content generation',
        'Standard scheduling',
        'Basic analytics',
        'Email support';
      ],
      popular: false},
    {'
      name: 'Professional',
      price: '$49',
      period: '/month',
      description: 'Ideal for growing businesses and agencies',
      features: [;
        'Up to 10 social accounts',
        'Unlimited posts',
        'Advanced AI content generation',
        'Smart scheduling',
        'Advanced analytics',
        'Team collaboration (3 users),
        'Priority support';
      ],
      popular: true},
    {'
      name: 'Enterprise',
      price: '$99',
      period: '/month',
      description: 'For large organizations and agencies',
      features: [;
        'Unlimited social accounts',
        'Unlimited posts',
        'Custom AI training',
        'White-label options',
        'Advanced team features',
        'API access',
        'Dedicated support',
        'Custom integrations';
      ],
      popular: false}
  ]
  const platforms = [
    {'
      name: 'Facebook',
      icon: <div className='w-8 h-8 bg-blue-600 rounded flex items-center justify-center text-white font-bold'>f</div>,
      description: 'Schedule posts, stories, and reels with optimal timing'},
    {'
      name: 'Instagram',
      icon: <div className='w-8 h-8 bg-gradient-to-br from-purple-500 to-pink-500 rounded flex items-center justify-center text-white font-bold'>IG</div>,
      description: 'Auto-publish feed posts, stories, and IGTV content'},
    {'
      name: 'Twitter',
      icon: <div className='w-8 h-8 bg-blue-400 rounded flex items-center justify-center text-white font-bold'>T</div>,
      description: 'Tweet scheduling with thread management and hashtag optimization'},
    {'
      name: 'LinkedIn',
      icon: <div className='w-8 h-8 bg-blue-700 rounded flex items-center justify-center text-white font-bold'>in</div>,
      description: 'Professional content scheduling and company page management'},
    {'
      name: 'TikTok',
      icon: <div className='w-8 h-8 bg-black rounded flex items-center justify-center text-white font-bold'>TT</div>,
      description: 'Video content scheduling with trending hashtag suggestions'},
    {'
      name: 'YouTube',
      icon: <div className='w-8 h-8 bg-red-600 rounded flex items-center justify-center text-white font-bold'>YT</div>,
      description: 'Video upload scheduling and community post management'}
  ]
  const useCases = [
    {'
      title: 'Content Marketing Agencies',
      description: 'Manage multiple client accounts with white-label solutions and advanced reporting.',
      icon: <Users className='w-8 h-8 text-blue-500' />
    },
    {'
      title: 'E-commerce Brands',
      description: 'Automate product promotion across all platforms with AI-generated product descriptions.',
      icon: <ShoppingCart className='w-8 h-8 text-green-500' />
    },
    {'
      title: 'Personal Brands',
      description: 'Maintain consistent online presence with AI-assisted content creation and scheduling.',
      icon: <Star className='w-8 h-8 text-purple-500' />
    }
  ]
  return('
    <div className='min-h-screen bg-gradient-to-br from-slate-50 via-white to-purple-50'>
      {/* Header Section */}
      <div className='bg-gradient-to-r from-purple-600 via-pink-600 to-indigo-800 text-white>
        <div className='max-w-7xl mx-auto px-4 sm: px-6 l,
    g:px-8 py-16'>
          <motion.div
            initial={{ opacit,
    y: 0, y: 20 }}
            animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 20 }}
            transition={{ duration: 0.6 }}
            className='text-center>
            <div className='flex justify-center mb-6>
              <div className='p-4 bg-white/10 rounded-2xl backdrop-blur-sm>
                <Share2 className='w-12 h-12 text-white' />
              </div>
            </div>'
            <h1 className='text-4xl md:text-6xl font-bold mb-6'>
              AI Social Media Scheduler
            </h1>'
            <p className='text-xl m,
    d:text-2xl text-purple-100 mb-8 max-w-3xl mx-auto'>
              Automate your social media presence with AI-powered content creation, smart scheduling, and advanced analytics
            </p>'
            <div className='flex flex-col sm: flex-row gap-4 justify-center>
              <button className='bg-white text-purple-600 px-8 py-4 rounded-lg font-semibold hover:bg-purple-50 transition-colors flex items-center justify-center>
                <Calendar className='w-5 h-5 mr-2' />
                Start Free Trial
              </button>'
              <button className='border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hove,
    r:bg-white hove,
    r:text-purple-600 transition-colors flex items-center justify-center>
                <Play className='w-5 h-5 mr-2' />
                Watch Demo
              </button>
            </div>
          </motion.div>
        </div>
      </div>
      {/* Navigation Tabs */}
      <div className='bg-white shadow-sm sticky top-0 z-40>
        <div className='max-w-7xl mx-auto px-4 sm:px-6 l,
    g:px-8>
          <nav className='flex space-x-8 overflow-x-auto>
            {['overview', 'features', 'platforms', 'pricing', 'use-cases', 'contact'].map((tab) => (
              <button;
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`py-4 px-1 border-b-2 font-medium text-sm whitespace-nowrap capitalize ${
                  activeTab === tab;`
                    ? 'border-purple-500 text-purple-600''
                    : 'border-transparent text-gray-500 hover:text-gray-700 hove,
    r:border-gray-300'}`}`
              >{tab.replace('-', ' ')}
              </button>
            ))}
          </nav>
        </div>
      </div>
      {/* Content Sections */}
      <div className='max-w-7xl mx-auto px-4 sm: px-6 l,
    g:px-8 py-16>
        {activeTab === 'overview' && (
          <motion.div
            initial={{ opacit,
    y: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className='space-y-16'>{/* Problem & Solution */}
            <div className='grid md:grid-cols-2 gap-12 items-center'>
              <div>'
                <h2 className='text-3xl font-bold text-gray-900 mb-6'>
                  The Social Media Challenge
                </h2>'
                <div className='space-y-4 text-gray-600>
                  <div className='flex items-start>
                    <div className='w-2 h-2 bg-red-500 rounded-full mt-2 mr-3 flex-shrink-0'></div>
                    <p>Managing multiple social platforms is time-consuming</p>
                  </div>'
                  <div className='flex items-start>
                    <div className='w-2 h-2 bg-red-500 rounded-full mt-2 mr-3 flex-shrink-0'></div>
                    <p>Creating consistent, engaging content is challenging</p>
                  </div>'
                  <div className='flex items-start>
                    <div className='w-2 h-2 bg-red-500 rounded-full mt-2 mr-3 flex-shrink-0'></div>
                    <p>Finding optimal posting times requires constant analysis</p>
                  </div>
                </div>
              </div>'
              <div className='bg-gradient-to-br from-purple-50 to-pink-100 p-8 rounded-2xl>
                <h3 className='text-2xl font-bold text-gray-900 mb-4'>
                  Our AI Solution
                </h3>'
                <div className='space-y-4>
                  <div className='flex items-center>
                    <CheckCircle className='w-5 h-5 text-green-500 mr-3' />
                    <span className='text-gray-700'>75% reduction in content creation time</span>
                  </div>'
                  <div className='flex items-center>
                    <CheckCircle className='w-5 h-5 text-green-500 mr-3' />
                    <span className='text-gray-700'>3x increase in engagement rates</span>
                  </div>'
                  <div className='flex items-center>
                    <CheckCircle className='w-5 h-5 text-green-500 mr-3' />
                    <span className='text-gray-700'>90% improvement in posting consistency</span>
                  </div>
                </div>
              </div>
            </div>
            {/* Key Benefits */}
            <div className='text-center>
              <h2 className='text-3xl font-bold text-gray-900 mb-12'>
                Why Choose Our AI Social Scheduler?
              </h2>'
              <div className='grid md:grid-cols-3 gap-8>
                <div className='bg-white p-8 rounded-xl shadow-lg>
                  <div className='w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-6>
                    <Brain className='w-8 h-8 text-purple-600' />
                  </div>'
                  <h3 className='text-xl font-semibold mb-4'>AI-Powered Content</h3>'
                  <p className='text-gray-600'>
                    Generate high-quality, brand-aligned content that resonates with your audience.
                  </p>
                </div>'
                <div className='bg-white p-8 rounded-xl shadow-lg>
                  <div className='w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6>
                    <TrendingUp className='w-8 h-8 text-green-600' />
                  </div>'
                  <h3 className='text-xl font-semibold mb-4'>Smart Optimization</h3>'
                  <p className='text-gray-600'>
                    AI algorithms optimize posting times and content for maximum engagement.
                  </p>
                </div>'
                <div className='bg-white p-8 rounded-xl shadow-lg>
                  <div className='w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6>
                    <Shield className='w-8 h-8 text-blue-600' />
                  </div>'
                  <h3 className='text-xl font-semibold mb-4'>Multi-Platform Sync</h3>'
                  <p className='text-gray-600'>
                    Seamlessly manage all your social accounts from one unified dashboard.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        )}
        {activeTab === 'features' && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className='space-y-16>
            <div className='text-center>
              <h2 className='text-3xl font-bold text-gray-900 mb-4'>
                Powerful Features
              </h2>'
              <p className='text-xl text-gray-600 max-w-3xl mx-auto'>
                Everything you need to dominate social media with AI assistance
              </p>
            </div>'
            <div className='grid md:grid-cols-2 l,
    g:grid-cols-3 gap-8'>
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className='bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow>
                  <div className='w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-4 text-purple-600'>
                    {feature.icon}
                  </div>'
                  <h3 className='text-lg font-semibold mb-3'>{feature.title}</h3>'
                  <p className='text-gray-600'>{feature.description}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        )}
        {activeTab === 'platforms' && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className='space-y-16>
            <div className='text-center>
              <h2 className='text-3xl font-bold text-gray-900 mb-4'>
                Supported Platforms
              </h2>'
              <p className='text-xl text-gray-600'>
                Manage all your social media accounts from one place
              </p>
            </div>'
            <div className='grid md:grid-cols-2 l,
    g:grid-cols-3 gap-8'>
              {platforms.map((platform, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className='bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow>
                  <div className='flex items-center mb-4'>
                    {platform.icon}
                    <h3 className='text-lg font-semibold ml-3'>{platform.name}</h3>
                  </div>'
                  <p className='text-gray-600'>{platform.description}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        )}
        {activeTab === 'pricing' && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className='space-y-16>
            <div className='text-center>
              <h2 className='text-3xl font-bold text-gray-900 mb-4'>
                Simple, Transparent Pricing
              </h2>'
              <p className='text-xl text-gray-600'>
                Choose the plan that fits your social media needs
              </p>
            </div>'
            <div className='grid md:grid-cols-3 gap-8'>
              {pricingPlans.map((plan, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className={`bg-white p-8 rounded-2xl shadow-lg relative ${`
                    plan.popular ? 'ring-2 ring-purple-500 scale-105' : ''}`}
                >{plan.popular && (`
                    <div className='absolute -top-4 left-1/2 transform -translate-x-1/2>
                      <span className='bg-purple-500 text-white px-4 py-2 rounded-full text-sm font-semibold'>
                        Most Popular
                      </span>
                    </div>
                  )}
                  <div className='text-center mb-8>
                    <h3 className='text-2xl font-bold text-gray-900 mb-2'>{plan.name}</h3>'
                    <p className='text-gray-600 mb-4'>{plan.description}</p>'
                    <div className='flex items-baseline justify-center>
                      <span className='text-4xl font-bold text-gray-900'>{plan.price}</span>'
                      <span className='text-gray-600 ml-1'>{plan.period}</span>
                    </div>
                  </div>'
                  <ul className='space-y-4 mb-8'>
                    {plan.features.map((feature, featureIndex) => ('
                      <li key={featureIndex} className='flex items-center>
                        <CheckCircle className='w-5 h-5 text-green-500 mr-3 flex-shrink-0' />
                        <span className='text-gray-700'>{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <button'
                    className={`w-full py-3 px-6 rounded-lg font-semibold transition-colors ${
                      plan.popular;`
                        ? 'bg-purple-500 text-white hover:bg-purple-600';
                        : 'bg-gray-100 text-gray-900 hove,
    r:bg-gray-200'}`}
                  >
                    Get Started
                  </button>
                </motion.div>
              ))}
            </div>`
            <div className='bg-gray-50 p-8 rounded-2xl text-center>
              <h3 className='text-2xl font-bold text-gray-900 mb-4'>
                Need a Custom Solution?
              </h3>'
              <p className='text-gray-600 mb-6'>
                Contact us for enterprise pricing and custom integrations
              </p>'
              <button className='bg-purple-500 text-white px-8 py-3 rounded-lg font-semibold hover:bg-purple-600 transition-colors'>
                Contact Sales
              </button>
            </div>
          </motion.div>
        )}
        {activeTab === 'use-cases' && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className='space-y-16>
            <div className='text-center>
              <h2 className='text-3xl font-bold text-gray-900 mb-4'>
                Perfect For
              </h2>'
              <p className='text-xl text-gray-600'>
                See how different businesses use our AI Social Scheduler
              </p>
            </div>'
            <div className='grid md:grid-cols-3 gap-8'>
              {useCases.map((useCase, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className='bg-white p-8 rounded-xl shadow-lg>
                  <div className='mb-6'>{useCase.icon}</div>'
                  <h3 className='text-xl font-semibold mb-4'>{useCase.title}</h3>'
                  <p className='text-gray-600'>{useCase.description}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        )}
        {activeTab === 'contact' && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className='space-y-16>
            <div className='text-center>
              <h2 className='text-3xl font-bold text-gray-900 mb-4'>
                Get Started Today
              </h2>'
              <p className='text-xl text-gray-600>
                Ready to revolutionize your social media strategy? Let's talk.
              </p>
            </div>'
            <div className='grid md:grid-cols-2 gap-12>
              <div className='space-y-8>
                <div className='flex items-center>
                  <div className='w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mr-4>
                    <Phone className='w-6 h-6 text-purple-600' />
                  </div>
                  <div>'
                    <h3 className='text-lg font-semibold'>Phone</h3>'
                    <p className='text-gray-600'>+1 302 464 0950</p>
                  </div>
                </div>'
                <div className='flex items-center>
                  <div className='w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mr-4>
                    <MailIcon className='w-6 h-6 text-green-600' />
                  </div>
                  <div>'
                    <h3 className='text-lg font-semibold'>Email</h3>'
                    <p className='text-gray-600'>kleber@ziontechgroup.com</p>
                  </div>
                </div>'
                <div className='flex items-center>
                  <div className='w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mr-4>
                    <MapPin className='w-6 h-6 text-blue-600' />
                  </div>
                  <div>'
                    <h3 className='text-lg font-semibold'>Address</h3>'
                    <p className='text-gray-600'>
                      364 E Main St STE 1008<br />
                      Middletown, DE 19709
                    </p>
                  </div>
                </div>
              </div>'
              <div className='bg-white p-8 rounded-xl shadow-lg>
                <h3 className='text-xl font-semibold mb-6'>Send us a message</h3>'
                <form className='space-y-4'>
                  <div>'
                    <label className='block text-sm font-medium text-gray-700 mb-2'>
                      Name
                    </label>
                    <input'
                      type='text';
                      className='w-full px-4 py-3 border border-gray-300 rounded-lg focus: ring-2 focus:ring-purple-500 focus:border-transparent';
                      placeholder='Your name'/>
                  </div>
                  <div>'
                    <label className='block text-sm font-medium text-gray-700 mb-2'>
                      Email
                    </label>
                    <input'
                      type='email';
                      className='w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focu,
    s:ring-purple-500 focu,
    s:border-transparent';
                      placeholder='your@email.com'/>
                  </div>
                  <div>'
                    <label className='block text-sm font-medium text-gray-700 mb-2'>
                      Message
                    </label>
                    <textarea;
                      rows={4}
                      className='w-full px-4 py-3 border border-gray-300 rounded-lg focus: ring-2 focus:ring-purple-500 focu,
    s:border-transparent';
                      placeholder='Tell us about your social media needs...'></textarea>
                  </div>
                  <button'
                    type='submit';
                    className='w-full bg-purple-500 text-white py-3 px-6 rounded-lg font-semibold hove,
    r:bg-purple-600 transition-colors'>
                    Send Message
                  </button>
                </form>
              </div>
            </div>
          </motion.div>
        )}
      </div>
      {/* CTA Section */}
      <div className='bg-gradient-to-r from-purple-600 to-pink-600 text-white py-16>
        <div className='max-w-7xl mx-auto px-4 sm: px-6 lg:px-8 text-center>
          <h2 className='text-3xl font-bold mb-4'>
            Ready to Transform Your Social Media?
          </h2>'
          <p className='text-xl text-purple-100 mb-8 max-w-2xl mx-auto'>
            Join thousands of businesses already using our AI Social Media Scheduler
          </p>'
          <div className='flex flex-col sm:flex-row gap-4 justify-center>
            <button className='bg-white text-purple-600 px-8 py-4 rounded-lg font-semibold hover:bg-purple-50 transition-colors'>
              Start Free Trial
            </button>'
            <button className='border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hove,
    r:bg-white hove,
    r:text-purple-600 transition-colors'>
              View Pricing
            </button>
          </div>
        </div>
      </div>
    </div>
  )}
export default AISocialMediaScheduler'
import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import {
  Mail,
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
  Calendar,
  MessageSquare,
  Eye,
  Lock,
  Globe,
  Smartphone,
  Monitor,
  Tablet} from 'lucide-react';
const AIEmailAutomationSuite = () => {'
  const [activeTab, setActiveTab] = useState('overview');
  const [isVisible, setIsVisible] = useState(false)
  useEffect(() => {
    setIsVisible(true)}, [])
  const features = [
<<<<<<< HEAD
    {'
=======
  {
>>>>>>> main
      icon: <Bot className='w-6 h-6' />,
      title: 'AI-Powered Email Responses',
      description: 'Automatically generate contextual responses using advanced NLP and machine learning algorithms.'},
    {'
      icon: <Zap className='w-6 h-6' />,
      title: 'Smart Email Prioritization',
      description: 'Intelligently categorize and prioritize emails based on urgency, sender importance, and content analysis.'},
    {'
      icon: <BarChart3 className='w-6 h-6' />,
      title: 'Advanced Analytics Dashboard',
      description: 'Comprehensive insights into email performance, response times, and customer satisfaction metrics.'},
    {'
      icon: <Shield className='w-6 h-6' />,
      title: 'Enterprise Security',
      description: 'End-to-end encryption, GDPR compliance, and advanced threat detection for secure email management.'},
    {'
      icon: <Clock className='w-6 h-6' />,
      title: '24/7 Automated Support',
      description: 'Round-the-clock email handling with intelligent escalation to human agents when needed.'},
    {'
      icon: <Users className='w-6 h-6' />,
      title: 'Team Collaboration',
      description: 'Seamless team workflows with shared inboxes, assignment capabilities, and collaborative responses.'}
  ];
<<<<<<< HEAD
  const pricingPlans = [{'
=======
  const pricingPlans = [
  {
>>>>>>> main
      name: 'Starter',
      price: '$29',
      period: '/month',
      description: 'Perfect for small teams',
      features: [;
        'Up to 1,000 emails/month,Basic AI responses,Email prioritization,Basic analytics,Email support';
      ],
      popular: false},
    {'
      name: 'Professional',
      price: '$79',
      period: '/month',
      description: 'Ideal for growing businesses',
      features: [;
        'Up to 10,000 emails/month,Advanced AI responses,Smart categorization,Advanced analytics,Team collaboration,Priority support';
      ],
      popular: true},
    {'
      name: 'Enterprise',
      price: '$199',
      period: '/month',
      description: 'For large organizations',
      features: [;
<<<<<<< HEAD
        'Unlimited emails',
        'Custom AI training',
        'Advanced security',
        'Custom integrations',
        'Dedicated support',
        'SLA guarantee'
=======
        'Unlimited emails,Custom AI training,Advanced security,Custom integrations,Dedicated support,SLA guarantee';
>>>>>>> main
      ],
      popular: false}
  ]
  const useCases = [
<<<<<<< HEAD
    {'
=======
  {
>>>>>>> main
      title: 'Customer Support Automation',
      description: 'Reduce response times by 80% with intelligent email routing and automated responses.',
      icon: <MessageSquare className='w-8 h-8 text-blue-500' />
    },
    {'
      title: 'Sales Lead Management',
      description: 'Automatically qualify leads and route them to the appropriate sales team members.',
      icon: <Target className='w-8 h-8 text-green-500' />
    },
    {'
      title: 'Internal Communication',
      description: 'Streamline internal email workflows with smart categorization and automated follow-ups.',
      icon: <Users className='w-8 h-8 text-purple-500' />
    }
  ]
  return('
    <div className='min-h-screen bg-gradient-to-br from-slate-50 via-white to-blue-50'>
      {/* Header Section */}
      <div className='bg-gradient-to-r from-blue-600 via-blue-700 to-indigo-800 text-white>
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
                <Mail className='w-12 h-12 text-white' />
              </div>
            </div>'
            <h1 className='text-4xl md:text-6xl font-bold mb-6'>
              AI Email Automation Suite
            </h1>'
            <p className='text-xl m,
    d:text-2xl text-blue-100 mb-8 max-w-3xl mx-auto'>
              Transform your email management with intelligent automation, smart responses, and advanced analytics
            </p>'
            <div className='flex flex-col sm: flex-row gap-4 justify-center>
              <button className='bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold hover:bg-blue-50 transition-colors flex items-center justify-center>
                <Send className='w-5 h-5 mr-2' />
                Start Free Trial
              </button>'
              <button className='border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hove,
    r:bg-white hove,
    r:text-blue-600 transition-colors flex items-center justify-center>
                <Calendar className='w-5 h-5 mr-2' />
                Schedule Demo
              </button>
            </div>
          </motion.div>
        </div>
      </div>
      {/* Navigation Tabs */}
<<<<<<< HEAD
      <div className='bg-white shadow-sm sticky top-0 z-40>
        <div className='max-w-7xl mx-auto px-4 sm:px-6 l,
    g:px-8>
          <nav className='flex space-x-8 overflow-x-auto>
            {['overview', 'features', 'pricing', 'use-cases', 'contact'].map((tab) => (
=======
      <div className='bg-white shadow-sm sticky top-0 z-40'>
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
          <nav className='flex space-x-8 overflow-x-auto'>
            {['overview,features,pricing,use-cases,contact'].map((tab) => (
>>>>>>> main
              <button;
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`py-4 px-1 border-b-2 font-medium text-sm whitespace-nowrap capitalize ${
<<<<<<< HEAD
                  activeTab === tab
=======
<<<<<<< HEAD
                  activeTab === tab;`
                    ? 'border-blue-500 text-blue-600''
                    : 'border-transparent text-gray-500 hover:text-gray-700 hove,
    r:border-gray-300'}`}`
              >{tab.replace('-', ' ')}
=======
                  activeTab === tab;
>>>>>>> main
                    ? 'border-blue-500 text-blue-600'
                    : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'}`}
              >{tab.replace('-, ')}
>>>>>>> main
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
                  The Email Overload Problem
                </h2>'
                <div className='space-y-4 text-gray-600>
                  <div className='flex items-start>
                    <div className='w-2 h-2 bg-red-500 rounded-full mt-2 mr-3 flex-shrink-0'></div>
                    <p>Average professional receives 121 emails per day</p>
                  </div>'
                  <div className='flex items-start>
                    <div className='w-2 h-2 bg-red-500 rounded-full mt-2 mr-3 flex-shrink-0'></div>
                    <p>2.6 hours daily spent managing emails</p>
                  </div>'
                  <div className='flex items-start>
                    <div className='w-2 h-2 bg-red-500 rounded-full mt-2 mr-3 flex-shrink-0'></div>
                    <p>40% of emails require immediate response</p>
                  </div>
                </div>
              </div>'
              <div className='bg-gradient-to-br from-blue-50 to-indigo-100 p-8 rounded-2xl>
                <h3 className='text-2xl font-bold text-gray-900 mb-4'>
                  Our AI Solution
                </h3>'
                <div className='space-y-4>
                  <div className='flex items-center>
                    <CheckCircle className='w-5 h-5 text-green-500 mr-3' />
                    <span className='text-gray-700'>80% reduction in email response time</span>
                  </div>'
                  <div className='flex items-center>
                    <CheckCircle className='w-5 h-5 text-green-500 mr-3' />
                    <span className='text-gray-700'>95% accuracy in email categorization</span>
                  </div>'
                  <div className='flex items-center>
                    <CheckCircle className='w-5 h-5 text-green-500 mr-3' />
                    <span className='text-gray-700'>60% increase in team productivity</span>
                  </div>
                </div>
              </div>
            </div>
            {/* Key Benefits */}
            <div className='text-center>
              <h2 className='text-3xl font-bold text-gray-900 mb-12'>
                Why Choose Our AI Email Suite?
              </h2>'
              <div className='grid md:grid-cols-3 gap-8>
                <div className='bg-white p-8 rounded-xl shadow-lg>
                  <div className='w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6>
                    <Brain className='w-8 h-8 text-blue-600' />
                  </div>'
                  <h3 className='text-xl font-semibold mb-4'>Intelligent Automation</h3>'
                  <p className='text-gray-600'>
                    Advanced AI algorithms that learn from your communication patterns and improve over time.
                  </p>
                </div>'
                <div className='bg-white p-8 rounded-xl shadow-lg>
                  <div className='w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6>
                    <TrendingUp className='w-8 h-8 text-green-600' />
                  </div>'
                  <h3 className='text-xl font-semibold mb-4'>Measurable Results</h3>'
                  <p className='text-gray-600'>
                    Comprehensive analytics and reporting to track performance and ROI.
                  </p>
                </div>'
                <div className='bg-white p-8 rounded-xl shadow-lg>
                  <div className='w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-6>
                    <Shield className='w-8 h-8 text-purple-600' />
                  </div>'
                  <h3 className='text-xl font-semibold mb-4'>Enterprise Security</h3>'
                  <p className='text-gray-600'>
                    Bank-level security with end-to-end encryption and compliance certifications.
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
                Everything you need to revolutionize your email management
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
                  <div className='w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4 text-blue-600'>
                    {feature.icon}
                  </div>'
                  <h3 className='text-lg font-semibold mb-3'>{feature.title}</h3>'
                  <p className='text-gray-600'>{feature.description}</p>
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
                Choose the plan that fits your needs. No hidden fees, no surprises.
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
                    plan.popular ? 'ring-2 ring-blue-500 scale-105' : ''}`}
                >{plan.popular && (`
                    <div className='absolute -top-4 left-1/2 transform -translate-x-1/2>
                      <span className='bg-blue-500 text-white px-4 py-2 rounded-full text-sm font-semibold'>
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
                        ? 'bg-blue-500 text-white hover:bg-blue-600';
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
              <button className='bg-blue-500 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-600 transition-colors'>
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
                Real-World Applications
              </h2>'
              <p className='text-xl text-gray-600'>
                See how businesses are transforming their email management
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
                Ready to transform your email management? Let's talk.
              </p>
            </div>'
            <div className='grid md:grid-cols-2 gap-12>
              <div className='space-y-8>
                <div className='flex items-center>
                  <div className='w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mr-4>
                    <Phone className='w-6 h-6 text-blue-600' />
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
                  <div className='w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mr-4>
                    <MapPin className='w-6 h-6 text-purple-600' />
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
                      className='w-full px-4 py-3 border border-gray-300 rounded-lg focus: ring-2 focus:ring-blue-500 focus:border-transparent';
                      placeholder='Your name'/>
                  </div>
                  <div>'
                    <label className='block text-sm font-medium text-gray-700 mb-2'>
                      Email
                    </label>
                    <input'
                      type='email';
                      className='w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focu,
    s:ring-blue-500 focu,
    s:border-transparent';
                      placeholder='your@email.com'/>
                  </div>
                  <div>'
                    <label className='block text-sm font-medium text-gray-700 mb-2'>
                      Message
                    </label>
                    <textarea;
                      rows={4}
                      className='w-full px-4 py-3 border border-gray-300 rounded-lg focus: ring-2 focus:ring-blue-500 focu,
    s:border-transparent';
                      placeholder='Tell us about your needs...'></textarea>
                  </div>
                  <button'
                    type='submit';
                    className='w-full bg-blue-500 text-white py-3 px-6 rounded-lg font-semibold hove,
    r:bg-blue-600 transition-colors'>
                    Send Message
                  </button>
                </form>
              </div>
            </div>
          </motion.div>
        )}
      </div>
      {/* CTA Section */}
      <div className='bg-gradient-to-r from-blue-600 to-indigo-700 text-white py-16>
        <div className='max-w-7xl mx-auto px-4 sm: px-6 lg:px-8 text-center>
          <h2 className='text-3xl font-bold mb-4'>
            Ready to Transform Your Email Management?
          </h2>'
          <p className='text-xl text-blue-100 mb-8 max-w-2xl mx-auto'>
            Join thousands of businesses already using our AI Email Automation Suite
          </p>'
          <div className='flex flex-col sm:flex-row gap-4 justify-center>
            <button className='bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold hover:bg-blue-50 transition-colors'>
              Start Free Trial
            </button>'
            <button className='border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hove,
    r:bg-white hove,
    r:text-blue-600 transition-colors'>
              View Pricing
            </button>
          </div>
        </div>
      </div>
    </div>
  )}
<<<<<<< HEAD

export default AIEmailAutomationSuite
=======
export default AIEmailAutomationSuite'
>>>>>>> main

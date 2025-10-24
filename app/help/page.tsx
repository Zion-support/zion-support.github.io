<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
const Component: React.FC = () => {
'use client';
import React from 'react';
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-0361
import { Helmet } from 'react-helmet-async';
<<<<<<< HEAD
import { Link } from 'react-router-dom';
=======
import React from 'react';
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-0659
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

<<<<<<< HEAD
export default function GDataAnalyticsZionTechGroupPage() {

  return (
    <div className="min-h-screen bg-gray-900 text-white">
      <Helmet>
        <title>Help - Zion Tech Group</title>
        <meta name="description" content="Help solutions by Zion Tech Group" />
      </Helmet>
      
      <div className="container mx-auto px-4 py-20">
        <h1 className="text-4xl font-bold mb-8">Help</h1>
        <div className="prose prose-invert max-w-none">
          <p className="text-xl text-gray-300 mb-8">
            Discover our comprehensive help solutions designed to meet your business needs.
          </p>
<<<<<<< HEAD
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
              <h3 className="text-xl font-semibold mb-4">Expert Solutions</h3>
              <p className="text-gray-300">
                Our team of experts delivers tailored solutions for your specific requirements.
              </p>
            </div>
            
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
              <h3 className="text-xl font-semibold mb-4">Cutting-Edge Technology</h3>
              <p className="text-gray-300">
                We use the latest technologies and best practices to ensure optimal performance.
              </p>
            </div>
            
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
              <h3 className="text-xl font-semibold mb-4">24/7 Support</h3>
              <p className="text-gray-300">
                Get round-the-clock support from our dedicated team of professionals.
              </p>
            </div>
          </div>
        </div>
      </div>
=======
          <Link
            href="/contact"
            className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 transition-colors duration-200"
          >
            Contact Us
            <ArrowRight className="ml-2 h-5 w-5" />
          </Link>
        </div>
      </div>
      <Footer />
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-0210
    </div>
=======
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import { CheckCircle, ArrowRight, Star, Clock, Zap, Shield, Brain, BarChart, Target, TrendingUp, Globe, Database, Users, Settings } from 'lucide-react';

<<<<<<< HEAD
const HelpCenterPage: React.FC = () => {
  const features = [
    {
      icon: Brain,
      title: 'AI-Powered Intelligence',
      description: 'Advanced AI algorithms that provide intelligent insights and recommendations.',
      benefits: ['Smart recommendations', 'Predictive analytics', 'Automated insights', 'Real-time analysis']
    },
    {
      icon: BarChart,
      title: 'Advanced Analytics',
      description: 'Comprehensive analytics dashboard with real-time data visualization.',
      benefits: ['Real-time dashboards', 'Custom reports', 'Data visualization', 'Performance metrics']
    },
    {
      icon: Target,
      title: 'Precision Targeting',
      description: 'Target specific goals and objectives with precision and accuracy.',
      benefits: ['Goal tracking', 'Performance optimization', 'Strategic planning', 'Success metrics']
    },
    {
      icon: TrendingUp,
      title: 'Growth Optimization',
      description: 'Optimize your business growth with data-driven strategies.',
      benefits: ['Growth strategies', 'Market analysis', 'Competitive insights', 'ROI optimization']
    },
    {
      icon: Zap,
      title: 'Fast Processing',
      description: 'Process large datasets in seconds with our optimized AI analytics engine.',
      benefits: ['High-speed processing', 'Scalable infrastructure', 'Real-time analysis', 'Batch processing']
    },
    {
      icon: Shield,
      title: 'Secure Analytics',
      description: 'Enterprise-grade security for your sensitive data and analytics.',
      benefits: ['Data encryption', 'Access controls', 'Audit trails', 'Compliance ready']
    }
  ];

  const benefits = [
    'Increase efficiency by up to 50%',
    'Reduce costs by 30% with automation',
    'Improve decision-making with AI insights',
    'Scale operations without proportional staff increases',
    'Gain competitive advantage with advanced technology'
  ];

  return (
    <>
      <Helmet>
        <title>Help Center - Zion Tech Group</title>
        <meta name="description" content="Get help and support for our services." />
        <meta name="keywords" content="help, support, FAQ, assistance" />
      </Helmet>

      <Navigation />
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-amber-900 to-slate-900">
        {/* Hero Section */}
        <section className="relative py-20 px-4 overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,rgba(147,51,234,0.3)_0%,transparent_50%)] animate-pulse" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(59,130,246,0.3)_0%,transparent_50%)] animate-pulse" style={{ animationDelay: '1s' }} />
          <div className="relative max-w-7xl mx-auto text-center">
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
              Help Center
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed">
              Get help and support for our services.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gradient-to-r from-amber-500 to-blue-600 hover:from-amber-600 hover:to-blue-700 text-white font-bold py-4 px-8 rounded-lg transition-all duration-300 transform hover:scale-105">
                Get Started
              </button>
              <button className="border border-amber-400 text-amber-400 hover:bg-amber-400 hover:text-white font-bold py-4 px-8 rounded-lg transition-all duration-300">
                View Demo
              </button>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Key Features
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Advanced AI technology that drives results
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {features.map((feature, index) => (
                <div key={index} className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 hover:bg-white/10 transition-all duration-300 group">
                  <div className="w-16 h-16 bg-gradient-to-br from-amber-500 to-blue-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                    <feature.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-4">{feature.title}</h3>
                  <p className="text-gray-300 mb-4">{feature.description}</p>
                  {feature.benefits && (
                    <ul className="space-y-2">
                      {feature.benefits.map((benefit, idx) => (
                        <li key={idx} className="flex items-center text-sm text-gray-400">
                          <CheckCircle className="w-4 h-4 text-green-400 mr-2" />
                          {benefit}
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-20 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Why Choose Our Solution?
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Proven results that drive business growth and efficiency
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {benefits.map((benefit, index) => (
                <div key={index} className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 hover:bg-white/10 transition-all duration-300 group">
                  <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-blue-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                    <CheckCircle className="w-8 h-8 text-white" />
                  </div>
                  <p className="text-lg text-white font-medium">{benefit}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="bg-white/5 backdrop-blur-sm rounded-3xl p-12">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Ready to Get Started?
              </h2>
              <p className="text-xl text-gray-300 mb-8">
                Contact our experts to discuss your requirements and get started today.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="bg-gradient-to-r from-amber-500 to-blue-600 hover:from-amber-600 hover:to-blue-700 text-white font-bold py-4 px-8 rounded-lg transition-all duration-300 transform hover:scale-105">
                  Contact Us
                </button>
                <button className="border border-amber-400 text-amber-400 hover:bg-amber-400 hover:text-white font-bold py-4 px-8 rounded-lg transition-all duration-300">
                  Learn More
                </button>
              </div>
            </div>
          </div>
        </section>
      </div>
      <Footer />
    </>
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-02f6
  );
}
=======
'use client'
import React from 'react'
import { Helmet } from 'react-helmet-async'
import { Link } from 'react-router-dom'
import Navigation from '../components/Navigation'
import Footer from '../components/Footer'
import { CheckCircle, ArrowRight, Star, Clock, Zap, Shield, Brain, BarChart, Target, TrendingUp, Globe, Database, Users, Settings, HelpCircle, Search, FileText, MessageCircle, Phone, Mail } from 'lucide-react'

<<<<<<< HEAD
<<<<<<< HEAD
const HelpPage: React.FC = () => {
  const faqItems = [
    {
      question: 'How do I get started with your services?',
      answer: 'Getting started is easy! Simply contact us through our contact form or schedule a consultation. Our team will assess your needs and recommend the best solution for your business.'
    },
    {
      question: 'What AI services do you offer?',
      answer: 'We offer a comprehensive range of AI services including chatbots, content generation, data analytics, computer vision, and custom AI model development tailored to your specific needs.'
    },
    {
      question: 'Do you provide ongoing support?',
      answer: 'Yes, we provide 24/7 technical support for all our services. Our dedicated support team is always available to help you with any issues or questions you may have.'
    },
    {
      question: 'How long does implementation take?',
      answer: 'Implementation time varies depending on the complexity of your project. Simple integrations can take 2-4 weeks, while complex custom solutions may take 3-6 months. We provide detailed timelines during consultation.'
    },
    {
      question: 'What is your pricing model?',
      answer: 'We offer flexible pricing models including monthly subscriptions, project-based pricing, and enterprise contracts. Contact us for a customized quote based on your specific requirements.'
    },
    {
      question: 'Do you offer training for our team?',
      answer: 'Absolutely! We provide comprehensive training programs for your team to ensure they can effectively use and maintain the solutions we implement. Training is included with most of our service packages.'
    }
  ]

  const supportChannels = [
    {
      icon: MessageCircle,
      title: 'Live Chat',
      description: 'Get instant help through our live chat support',
      availability: '24/7',
      responseTime: '< 1 minute'
    },
    {
      icon: Phone,
      title: 'Phone Support',
      description: 'Speak directly with our technical experts',
      availability: 'Mon-Fri 9AM-6PM',
      responseTime: 'Immediate'
    },
    {
      icon: Mail,
      title: 'Email Support',
      description: 'Send us detailed questions and get comprehensive answers',
      availability: '24/7',
      responseTime: '< 2 hours'
    },
    {
      icon: FileText,
      title: 'Documentation',
      description: 'Access our comprehensive knowledge base and guides',
      availability: '24/7',
      responseTime: 'Immediate'
    }
  ]

  const resources = [
    {
      title: 'Getting Started Guide',
      description: 'Step-by-step guide to set up your account and begin using our services',
      type: 'Guide',
      icon: FileText
    },
    {
      title: 'API Documentation',
      description: 'Complete API reference for developers integrating with our platform',
      type: 'Technical',
      icon: Code
    },
    {
      title: 'Best Practices',
      description: 'Learn how to maximize the value of our AI and IT solutions',
      type: 'Guide',
      icon: Star
    },
    {
      title: 'Video Tutorials',
      description: 'Watch step-by-step video tutorials for common tasks and features',
      type: 'Video',
      icon: Play
    }
  ]

  return (
    <>
      <Helmet>
        <title>Help & Support | Zion Tech Group</title>
        <meta name="description" content="Get help and support for our AI and IT solutions. Find answers to common questions and contact our support team." />
        <meta name="keywords" content="help, support, FAQ, documentation, Zion Tech Group, AI support" />
      </Helmet>
      
      <Navigation />
      
      <main className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-16">
        {/* Hero Section */}
        <section className="py-20 px-4">
          <div className="container mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400 mb-6">
              Help & Support
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
              We're here to help you succeed. Find answers to common questions, access our documentation, 
              or get in touch with our support team.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-cyan-500 to-purple-600 text-white font-semibold rounded-lg hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 group"
              >
                Contact Support
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                to="/demo"
                className="inline-flex items-center px-8 py-4 border border-cyan-400 text-cyan-400 font-semibold rounded-lg hover:bg-cyan-400/10 transition-all duration-300"
              >
                Schedule Demo
              </Link>
            </div>
          </div>
        </section>

        {/* Support Channels */}
        <section className="py-16 px-4">
          <div className="container mx-auto">
            <h2 className="text-3xl font-bold text-white text-center mb-12">Get Support</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {supportChannels.map((channel, index) => (
                <div key={index} className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 border border-slate-700 hover:border-cyan-400/50 transition-all duration-300 text-center">
                  <channel.icon className="w-12 h-12 text-cyan-400 mx-auto mb-4" />
                  <h3 className="text-xl font-semibold text-white mb-2">{channel.title}</h3>
                  <p className="text-gray-300 mb-4">{channel.description}</p>
                  <div className="space-y-2 text-sm text-gray-400">
                    <div>Available: {channel.availability}</div>
                    <div>Response: {channel.responseTime}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-16 px-4">
          <div className="container mx-auto">
            <h2 className="text-3xl font-bold text-white text-center mb-12">Frequently Asked Questions</h2>
            <div className="max-w-3xl mx-auto space-y-6">
              {faqItems.map((item, index) => (
                <div key={index} className="bg-slate-800/50 backdrop-blur-sm rounded-lg p-6 border border-slate-700">
                  <h3 className="text-lg font-semibold text-white mb-3">{item.question}</h3>
                  <p className="text-gray-300">{item.answer}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Resources Section */}
        <section className="py-16 px-4">
          <div className="container mx-auto">
            <h2 className="text-3xl font-bold text-white text-center mb-12">Resources & Documentation</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {resources.map((resource, index) => (
                <div key={index} className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 border border-slate-700 hover:border-cyan-400/50 transition-all duration-300 group">
                  <resource.icon className="w-12 h-12 text-cyan-400 mb-4" />
                  <div className="mb-2">
                    <span className="px-2 py-1 bg-cyan-500/20 text-cyan-400 text-xs font-medium rounded">
                      {resource.type}
                    </span>
                  </div>
                  <h3 className="text-lg font-semibold text-white mb-2 group-hover:text-cyan-400 transition-colors">
                    {resource.title}
=======
const HelpPage: React.FC = () => {}
  const [searchQuery, setSearchQuery] = useState('');
  const [expandedCategory, setExpandedCategory] = useState<string | null>(null);

  const faqCategories = [
    {}
      title: 'Getting Started',
      icon: BookOpen,
      questions: [
        {}
          question: 'How do I get started with Zion Tech Group services?',
          answer: 'Getting started is easy! Simply contact our sales team through the contact form or call us directly. We\'ll schedule a consultation to understand your needs and recommend the best solutions.'},
        {}
          question: 'What AI services do you offer?',
          answer: 'We offer comprehensive AI services including workflow automation, customer support, data analytics, content generation, healthcare solutions, fintech platforms, and much more. Check our services page for a complete list.'
        },
        {}
          question: 'Do you offer free consultations?',
          answer: 'Yes! We provide free initial consultations to assess your needs and recommend the best solutions for your business. Contact us to schedule yours today.'}
      ]
    },
    {}
      title: 'Technical Support',
      icon: HelpCircle,
      questions: [
        {}
          question: 'How do I access technical support?',
          answer: 'You can access technical support through our support portal, email support@ziontechgroup.com, or call our 24/7 support line at +1 (302) 464-0950.'
        },
        {}
          question: 'What are your support hours?',
          answer: 'We provide 24/7 technical support for all our clients. Our support team is always available to help with any issues or questions you may have.'},
        {}
          question: 'How do I report a bug or issue?',
          answer: 'You can report bugs through our support portal, email support@ziontechgroup.com, or contact your dedicated account manager. We typically respond within 2 hours.'
        }
      ]
    },
    {}
      title: 'Billing & Pricing',
      icon: FileText,
      questions: [
        {}
          question: 'What are your pricing models?',
          answer: 'We offer flexible pricing models including subscription-based plans, project-based pricing, and enterprise agreements. Contact our sales team for a customized quote.'
        },
        {}
          question: 'Do you offer volume discounts?',
          answer: 'Yes, we offer volume discounts for enterprise clients and long-term contracts. Contact our sales team to discuss your specific needs and pricing options.'
        },
        {}
          question: 'How do I update my billing information?',
          answer: 'You can update your billing information through your account dashboard or contact our billing team at billing@ziontechgroup.com.'}
      ]
    }
  ];

  const quickLinks = [
    {}
      title: 'Documentation',
      description: 'Comprehensive guides and API documentation',
      icon: BookOpen,
      link: '/docs',
      color: 'text-blue-400'},
    {}
      title: 'Video Tutorials',
      description: 'Step-by-step video guides',
      icon: Video,
      link: '/tutorials',
      color: 'text-purple-400'},
    {}
      title: 'Download Resources',
      description: 'Templates, guides, and tools',
      icon: Download;
      link: '/downloads',
      color: 'text-green-400'},
    {}
      title: 'Community Forum',
      description: 'Connect with other users',
      icon: MessageSquare,
      link: '/community',
      color: 'text-cyan-400'}
  ];

  const contactMethods = [
    {}
      icon: Phone,
      title: 'Phone Support',
      description: '24/7 technical support',
      contact: '+1 (302) 464-0950',
      action: 'Call Now'},
    {}
      icon: Mail,
      title: 'Email Support',
      description: 'Get help via email',
      contact: 'support@ziontechgroup.com',
      action: 'Send Email'},
    {}
      icon: MessageSquare,
      title: 'Live Chat',
      description: 'Chat with our support team',
      contact: 'Available 24/7',
      action: 'Start Chat'}
  ];

  const toggleCategory = (categoryTitle: string) => {}
    setExpandedCategory(expandedCategory === categoryTitle ? null : categoryTitle);
  };

  return(<div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">)
      <Navigation />)
      {/* Hero Section */})
      <section className="relative py-20 overflow-hidden">)
        <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width="60" height="60" viewBox="0 0 60 60" xmlns="http: //www.w3.org/2000/svg"%3E%3Cg fill="none" fill-rule="evenodd"%3E%3Cg fill="%239C92AC" fill-opacity="0.1"%3E%3Ccircle cx="30" cy="30" r="2"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-20"></div>
        <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg%20width%3D%2260%22%20height%3D%2260%22%20viewBox%3D%220%200%2060%2060%22%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%3E%3Cg%20fill%3D%22none%22%20fill-rule%3D%22evenodd%22%3E%3Cg%20fill%3D%22%239C92AC%22%20fill-opacity%3D%220.1%22%3E%3Ccircle%20cx%3D%2230%22%20cy%3D%2230%22%20r%3D%222%22/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-20"></section>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center"></div>
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent"></h1>
            Help Center;
          </h1>,
          <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto">,
            Find answers, get support, and learn how to make the most of our AI solutions;
          </p>

          {/* Search Bar */}
          <div className="max-w-2xl mx-auto"></div>
            <div className="relative"></div>
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input;
                type="text"
                placeholder="Search for help articles, guides, and FAQs..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-12 pr-4 py-4 bg-slate-800 border border-gray-600 rounded-xl text-white placeholder-gray-400 focus: outline-none focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/20"
              />
            </div>,
          </div>,
        </div>,
      </section>,
,
      {/* Quick Links */}
      <section className="py-16 bg-white/5"></section>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"></section>
          <div className="text-center mb-16"></div>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4"></h2>
              Quick Links;
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto"></p>
              Access our most popular resources and support channels;
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"></div>
            {quickLinks.map((link, index) => (}
              <a
                key={index}
                href={link.link}
                className="cyber-card p-6 hover:scale-105 transition-all duration-300 group"
              ></a>
                <div className="flex items-center mb-4"></div>
                  <link.icon className={`w-8 h-8 ${link.color} mr-3`} />
                  <h3 className="text-xl font-bold text-white group-hover: text-cyan-400 transition-colors">,
                    {link.title}
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-03fc
                  </h3>
                  <p className="text-gray-300 text-sm">{resource.description}</p>
                </div>
<<<<<<< HEAD
              ))}
            </div>
=======
                <p className="text-gray-300 mb-4">{link.description}</p>
                <div className="flex items-center text-cyan-400 group-hover:text-cyan-300 transition-colors"></div>
                  <span className="text-sm font-medium">Learn More</span>
                  <ArrowRight className="w-4 h-4 ml-2" />
                </div>
              </a>
            ))}
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-03fc
          </div>
        </section>

<<<<<<< HEAD
        {/* CTA Section */}
        <section className="py-20 px-4">
          <div className="container mx-auto text-center">
            <h2 className="text-4xl font-bold text-white mb-6">
              Still Need Help?
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Can't find what you're looking for? Our support team is here to help you with any questions or issues.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-cyan-500 to-purple-600 text-white font-semibold rounded-lg hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 group"
              >
                Contact Support
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
              <a
                href="mailto:support@ziontechgroup.com"
                className="inline-flex items-center px-8 py-4 border border-cyan-400 text-cyan-400 font-semibold rounded-lg hover:bg-cyan-400/10 transition-all duration-300"
              >
                Email Us
              </a>
            </div>
=======
      {/* FAQ Section */}
      <section className="py-16 bg-gradient-to-r from-purple-900/20 to-blue-900/20"></section>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"></section>
          <div className="text-center mb-16"></div>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4"></h2>
              Frequently Asked Questions;
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto"></p>
              Find answers to common questions about our services and solutions;
            </p>
          </div>

          <div className="space-y-6"></div>
            {faqCategories.map((category, categoryIndex) => (}
              <div key={categoryIndex} className="cyber-card"></div>
                <button
                  onClick={() => toggleCategory(category.title)}
                  className="w-full flex items-center justify-between p-6 text-left"
                >
                  <div className="flex items-center"></div>
                    <category.icon className="w-6 h-6 text-cyan-400 mr-4" />
                    <h3 className="text-xl font-bold text-white">{category.title}</h3>
                  </div>
                  {expandedCategory === category.title ? (}
                    <ChevronDown className="w-6 h-6 text-cyan-400" />
                  ) : (
                    <ChevronRight className="w-6 h-6 text-cyan-400" /></ChevronRigh>
                  )}
                </button>

                {expandedCategory === category.title && (}
                  <div className="px-6 pb-6 space-y-4"></div>
                    {category.questions.map((faq, faqIndex) => (}
                      <div key={faqIndex} className="border-l-2 border-cyan-400/30 pl-4"></div>
                        <h4 className="text-lg font-semibold text-white mb-2">{faq.question}</h4>
                        <p className="text-gray-300">{faq.answer}</p>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Support */}
      <section className="py-16 bg-white/5"></section>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"></section>
          <div className="text-center mb-16"></div>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4"></h2>
              Still Need Help?
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto"></p>
              Our support team is here to help you succeed;
            </p>
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-03fc
          </div>
        </section>
      </main>
      
      <Footer />
    </>
  )
}

<<<<<<< HEAD
export default HelpPage
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-02d3
=======
export default HelpCenterPage;
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-02f6
=======
=======
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8"></div>
            {contactMethods.map((method, index) => (}
              <div key={index} className="cyber-card p-8 text-center hover:scale-105 transition-all duration-300"></div>
                <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-6"></div>
                  <method.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-2">{method.title}</h3>
                <p className="text-gray-300 mb-4">{method.description}</p>
                <div className="text-cyan-400 font-semibold mb-4">{method.contact}</div>
                <button className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white font-semibold py-2 px-6 rounded-lg hover: from-cyan-600 hover:to-purple-700 transition-all">,
                  {method.action}
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer /></Foote>
    </div>
  );
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-03fc
};

export default Component;
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-0361
=======
import React from 'react';

import {Link} from 'react-router-dom';
import {ArrowRight} from 'lucide-react';

export default function HelpPage() {
  return (
    <>
      <title>5G Data Analytics - Zion Tech Group</title>
        <title>Help - Zion Tech Group</title>
        <h1 className="text-4 xl font-boldtext-whitemb-6">Help</h1>
        <p className="text-lgtext-gray-300mb-8">Professional help services coming soon.</p>
          Contact Us

  );

>>>>>>> origin/cursor/fix-errors-and-merge-to-main-048f
=======
export default function HelpPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Helmet>
        <title>Help - Zion Tech Group</title>
        <meta name="description" content="Professional help services by Zion Tech Group" />
      </Helmet>
      
      <div className="container mx-auto px-4 py-16">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-white mb-6">Help</h1>
          <p className="text-lg text-gray-300 mb-8">Professional help services coming soon.</p>
          
          <Link
            to="/contact"
            className="inline-flex items-center bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-6 py-3 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300"
          >
            Contact Us
            <ArrowRight className="w-4 h-4 ml-2" />
          </Link>
        </div>
      </div>
    </div>
  );
}
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-0659

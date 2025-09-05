import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { motion } from 'framer-motion';
import Layout from './components/Layout';
import {
  HelpCircle,
  Search,
  MessageSquare,
  Phone,
  Mail,
  Clock,
  CheckCircle,
  ArrowRight,
  BookOpen,
  Video,
  FileText,
  Users,
  Star,
  ChevronDown,
  ChevronRight,
  ExternalLink,
  Download,
  Play,
  Globe,
  Smartphone,
  Monitor,
  Server,
  Database,
  Cloud,
  Shield,
  Zap,
  Brain,
  Code,
  Settings,
  Wrench,
  Cog,
  Activity,
  PieChart,
  BarChart,
  TrendingUp,
  DollarSign,
  ShoppingCart,
  Home,
  Trash2,
  Camera,
  Heart,
  ClipboardList,
  TreePine,
  Droplets,
  Award,
  Building,
  Rocket,
  Lightbulb,
  Target,
  MapPin,
  Info,
  AlertCircle,
  CheckCircle2,
  XCircle,
  Plus,
  Minus,
  ChevronUp,
  ChevronLeft,
  ArrowUp,
  ArrowDown,
  ArrowLeft,
  Pause,
  Stop,
  SkipForward,
  SkipBack,
  Volume2,
  VolumeX,
  Maximize,
  Minimize,
  RotateCcw,
  RotateCw,
  RefreshCw,
  Upload,
  Share,
  Copy,
  Edit,
  Trash,
  Save,
  Lock,
  Unlock,
  EyeOff,
  Bell,
  BellOff,
  Star as StarIcon,
  Heart as HeartIcon,
  ThumbsUp,
  ThumbsDown,
  MessageCircle,
  Send,
  Paperclip,
  Smile,
  Frown,
  Meh,
  Laugh,
  Angry,
  Sad,
  Surprised,
  Wink,
  Kiss,
  Tongue,
  Wink2,
  KissWinkHeart,
  KissClosedEyes,
  StuckOutTongue,
  StuckOutTongueWinkingEye,
  StuckOutTongueClosedEyes,
  Disappointed,
  Worried,
  Angry2,
  Rage,
  Cry,
  Scream,
  Confounded,
  Hugging,
  Smirk,
  NoMouth,
  NeutralFace,
  Expressionless,
  Unamused,
  RollingEyes,
  Thinking,
  LyingFace,
  HandOverMouth,
  ShushingFace,
  ExplodingHead,
  CowboyHatFace,
  DisguisedFace,
  Sunglasses,
  NerdFace,
  MonocleFace,
  Confused,
  WorriedFace,
  SlightlyFrowningFace,
  OpenMouth,
  Hushed,
  Astonished,
  Flushed,
  PleadingFace,
  FrowningFace,
  AnguishedFace,
  FearfulFace,
  ColdSweat,
  DisappointedRelieved,
  CryFace,
  LoudlyCryingFace,
  ScreamFace,
  StuckOutTongueFace,
  DroolingFace,
  UnamusedFace,
  SweatSmile,
  Sweat,
  WearyFace,
  TiredFace,
  SleepyFace,
  YawningFace,
  DizzyFace,
  ExplodingHeadFace,
  CowboyHatFace2,
  DisguisedFace2,
  SunglassesFace,
  NerdFace2,
  MonocleFace2,
  ConfusedFace,
  WorriedFace2,
  SlightlyFrowningFace2,
  OpenMouthFace,
  HushedFace,
  AstonishedFace,
  FlushedFace,
  PleadingFace2,
  FrowningFace2,
  AnguishedFace2,
  FearfulFace2,
  ColdSweatFace,
  DisappointedRelievedFace,
  CryFace2,
  LoudlyCryingFace2,
  ScreamFace2,
  StuckOutTongueFace2,
  DroolingFace2,
  UnamusedFace2,
  SweatSmileFace,
  SweatFace,
  WearyFace2,
  TiredFace2,
  SleepyFace2,
  YawningFace2,
  DizzyFace2
} from 'lucide-react';

const faqCategories = [
  {
    id: 'general',
    title: 'General Questions',
    icon: HelpCircle,
    questions: [
      {
        question: 'What services does Zion Tech Group offer?',
        answer: 'Zion Tech Group offers comprehensive AI development, cloud infrastructure, cybersecurity, mobile app development, database design, and web performance optimization services. We specialize in cutting-edge technology solutions for businesses of all sizes.'
      },
      {
        question: 'How can I get started with your services?',
        answer: 'Getting started is easy! Simply contact us through our contact form, schedule a consultation, or call us directly. Our team will assess your needs and provide a customized solution plan.'
      },
      {
        question: 'Do you offer custom development solutions?',
        answer: 'Yes, we specialize in custom development solutions tailored to your specific business requirements. Our team works closely with you to understand your needs and deliver solutions that exceed expectations.'
      },
      {
        question: 'What is your typical project timeline?',
        answer: 'Project timelines vary depending on complexity and scope. Simple projects may take 2-4 weeks, while complex enterprise solutions can take 3-6 months. We provide detailed timelines during the consultation phase.'
      }
    ]
  },
  {
    id: 'technical',
    title: 'Technical Support',
    icon: Settings,
    questions: [
      {
        question: 'What technologies do you work with?',
        answer: 'We work with a wide range of modern technologies including React, Next.js, Node.js, Python, AI/ML frameworks, cloud platforms (AWS, Azure, GCP), databases (SQL and NoSQL), and mobile development frameworks.'
      },
      {
        question: 'Do you provide ongoing maintenance and support?',
        answer: 'Yes, we offer comprehensive maintenance and support packages to ensure your applications run smoothly. Our support includes bug fixes, updates, security patches, and performance monitoring.'
      },
      {
        question: 'Can you help with existing projects?',
        answer: 'Absolutely! We can help improve, maintain, or migrate existing projects. Our team can analyze your current setup and provide recommendations for optimization and modernization.'
      },
      {
        question: 'Do you follow industry best practices?',
        answer: 'Yes, we strictly follow industry best practices including secure coding standards, version control, testing protocols, documentation, and agile development methodologies.'
      }
    ]
  },
  {
    id: 'billing',
    title: 'Billing & Pricing',
    icon: DollarSign,
    questions: [
      {
        question: 'What are your pricing models?',
        answer: 'We offer flexible pricing models including fixed-price projects, hourly rates, and retainer agreements. Pricing depends on project complexity, timeline, and specific requirements.'
      },
      {
        question: 'Do you offer payment plans?',
        answer: 'Yes, we offer flexible payment plans for larger projects. We typically require a project initiation fee, with milestone-based payments throughout the development process.'
      },
      {
        question: 'Are there any hidden costs?',
        answer: 'No hidden costs! We provide transparent pricing with detailed breakdowns. All costs are discussed and agreed upon before project commencement.'
      },
      {
        question: 'Do you offer refunds?',
        answer: 'We stand behind our work and offer satisfaction guarantees. If you\'re not completely satisfied with our services, we\'ll work with you to make it right or provide appropriate refunds.'
      }
    ]
  }
];

const supportChannels = [
  {
    title: 'Live Chat',
    description: 'Get instant help from our support team',
    icon: MessageSquare,
    availability: '24/7',
    responseTime: '< 2 minutes',
    action: 'Start Chat',
    color: 'bg-blue-500'
  },
  {
    title: 'Phone Support',
    description: 'Speak directly with our technical experts',
    icon: Phone,
    availability: 'Mon-Fri 9AM-6PM',
    responseTime: 'Immediate',
    action: 'Call Now',
    color: 'bg-green-500'
  },
  {
    title: 'Email Support',
    description: 'Send us detailed questions and get comprehensive answers',
    icon: Mail,
    availability: '24/7',
    responseTime: '< 4 hours',
    action: 'Send Email',
    color: 'bg-purple-500'
  },
  {
    title: 'Documentation',
    description: 'Browse our comprehensive knowledge base',
    icon: BookOpen,
    availability: '24/7',
    responseTime: 'Immediate',
    action: 'Browse Docs',
    color: 'bg-orange-500'
  }
];

const popularArticles = [
  {
    title: 'Getting Started with AI Development',
    category: 'AI Development',
    readTime: '5 min read',
    views: 1250,
    icon: Brain
  },
  {
    title: 'Cloud Infrastructure Best Practices',
    category: 'Cloud Computing',
    readTime: '8 min read',
    views: 980,
    icon: Cloud
  },
  {
    title: 'Cybersecurity Checklist for 2024',
    category: 'Security',
    readTime: '6 min read',
    views: 750,
    icon: Shield
  },
  {
    title: 'Mobile App Performance Optimization',
    category: 'Mobile Development',
    readTime: '7 min read',
    views: 1100,
    icon: Smartphone
  },
  {
    title: 'Database Design Principles',
    category: 'Database',
    readTime: '9 min read',
    views: 890,
    icon: Database
  },
  {
    title: 'Web Performance Optimization Guide',
    category: 'Performance',
    readTime: '10 min read',
    views: 650,
    icon: Zap
  }
];

export default function HelpPage() {
  return (
    <Layout>
      <Head>
        <title>Help & Support - Zion Tech Group</title>
        <meta name="description" content="Get help and support for all your technology needs. Find answers to common questions, browse documentation, and connect with our expert team." />
      </Head>

      <div className="min-h-screen bg-gray-50">
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-blue-600 to-purple-600 text-white py-20">
          <div className="container mx-auto px-4">
            <motion.div
              className="text-center max-w-4xl mx-auto"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className="text-5xl font-bold mb-6">
                How Can We Help You?
              </h1>
              <p className="text-xl mb-8 text-blue-100">
                Find answers to your questions, get technical support, and access our comprehensive knowledge base.
              </p>
              
              {/* Search Bar */}
              <div className="max-w-2xl mx-auto">
                <div className="relative">
                  <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                  <input
                    type="text"
                    placeholder="Search for help articles, guides, or FAQs..."
                    className="w-full pl-12 pr-4 py-4 rounded-lg text-gray-900 text-lg focus:outline-none focus:ring-2 focus:ring-blue-300"
                  />
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Support Channels */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <motion.div
              className="text-center mb-12"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Get Support
              </h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                Choose the support channel that works best for you. Our team is here to help 24/7.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {supportChannels.map((channel, index) => (
                <motion.div
                  key={channel.title}
                  className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow border border-gray-200"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                >
                  <div className={`w-12 h-12 ${channel.color} rounded-lg flex items-center justify-center mb-4`}>
                    <channel.icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">
                    {channel.title}
                  </h3>
                  <p className="text-gray-600 mb-4">
                    {channel.description}
                  </p>
                  <div className="space-y-2 mb-4">
                    <div className="flex items-center text-sm text-gray-500">
                      <Clock className="w-4 h-4 mr-2" />
                      {channel.availability}
                    </div>
                    <div className="flex items-center text-sm text-gray-500">
                      <CheckCircle className="w-4 h-4 mr-2" />
                      {channel.responseTime}
                    </div>
                  </div>
                  <button className={`w-full ${channel.color} text-white px-4 py-2 rounded-lg font-semibold hover:opacity-90 transition-opacity`}>
                    {channel.action}
                  </button>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <motion.div
              className="text-center mb-12"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Frequently Asked Questions
              </h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                Find quick answers to the most common questions about our services and support.
              </p>
            </motion.div>

            <div className="max-w-4xl mx-auto">
              {faqCategories.map((category, categoryIndex) => (
                <motion.div
                  key={category.id}
                  className="mb-8"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: categoryIndex * 0.1 }}
                >
                  <div className="flex items-center mb-6">
                    <category.icon className="w-6 h-6 text-blue-600 mr-3" />
                    <h3 className="text-2xl font-bold text-gray-900">
                      {category.title}
                    </h3>
                  </div>
                  
                  <div className="space-y-4">
                    {category.questions.map((faq, faqIndex) => (
                      <motion.div
                        key={faqIndex}
                        className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden"
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5, delay: faqIndex * 0.1 }}
                      >
                        <button className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-gray-50 transition-colors">
                          <span className="font-semibold text-gray-900">
                            {faq.question}
                          </span>
                          <ChevronDown className="w-5 h-5 text-gray-400" />
                        </button>
                        <div className="px-6 pb-4">
                          <p className="text-gray-600">
                            {faq.answer}
                          </p>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Popular Articles */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <motion.div
              className="text-center mb-12"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Popular Help Articles
              </h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                Browse our most popular help articles and guides to find quick solutions.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {popularArticles.map((article, index) => (
                <motion.div
                  key={article.title}
                  className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow border border-gray-200"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                >
                  <div className="flex items-center mb-4">
                    <article.icon className="w-8 h-8 text-blue-600 mr-3" />
                    <div>
                      <span className="text-sm font-medium text-blue-600">
                        {article.category}
                      </span>
                    </div>
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 mb-2">
                    {article.title}
                  </h3>
                  <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
                    <span>{article.readTime}</span>
                    <span>{article.views} views</span>
                  </div>
                  <button className="w-full bg-blue-600 text-white px-4 py-2 rounded-lg font-semibold hover:bg-blue-700 transition-colors inline-flex items-center justify-center">
                    Read Article
                    <ArrowRight className="ml-2 w-4 h-4" />
                  </button>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Contact CTA */}
        <section className="py-20 bg-gradient-to-r from-green-600 to-teal-600 text-white">
          <div className="container mx-auto px-4">
            <motion.div
              className="text-center"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-4xl font-bold mb-6">
                Still Need Help?
              </h2>
              <p className="text-xl mb-8 text-green-100">
                Can't find what you're looking for? Our expert team is here to help you with any questions or concerns.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  href="/contact"
                  className="bg-white text-green-600 px-8 py-3 rounded-lg font-semibold hover:bg-green-50 transition-colors inline-flex items-center"
                >
                  Contact Support
                  <MessageSquare className="ml-2 w-5 h-5" />
                </Link>
                <Link
                  href="/guides"
                  className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-green-600 transition-colors inline-flex items-center"
                >
                  Browse Guides
                  <BookOpen className="ml-2 w-5 h-5" />
                </Link>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </Layout>
  );
}
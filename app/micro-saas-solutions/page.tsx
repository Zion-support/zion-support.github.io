'use client';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { 
  CheckCircle, 
  ArrowRight, 
  Star, 
  Users, 
  Shield, 
  Clock, 
  TrendingUp,
  BarChart3,
  Database,
  Smartphone,
  Globe,
  Target,
  Lightbulb,
  Rocket,
  Award,
  Phone,
  Mail,
  MapPin,
  Zap,
  Code,
  Eye,
  MessageSquare,
  Cpu,
  Network,
  FileText,
  Settings,
  CreditCard,
  Lock,
  Cloud,
  Wifi,
  Monitor,
  Server,
  Key,
  Search,
  Filter,
  Download,
  Upload,
  Share,
  Edit,
  Trash,
  Plus,
  Minus,
  Refresh,
  Play,
  Pause,
  Stop,
  SkipBack,
  SkipForward,
  RotateCcw,
  RotateCw,
  Shuffle,
  Repeat,
  Repeat1,
  Shuffle2,
  Maximize,
  Minimize,
  Square,
  Circle,
  Triangle,
  Hexagon,
  Octagon,
  Diamond,
  Star as StarIcon,
  Moon,
  Sun,
  Sunrise,
  Sunset,
  CloudRain,
  CloudSnow,
  CloudLightning,
  Wind,
  Droplets,
  Thermometer,
  Gauge,
  Timer,
  Stopwatch,
  Hourglass
} from 'lucide-react';

const MicroSaaSSolutionsPage: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');

  const microSaaSServices = [
    {
      id: 'task-manager-pro',
      name: 'Task Manager Pro',
      price: '$29/mo',
      originalPrice: '$49/mo',
      description: 'Advanced project management with AI-powered task prioritization and team collaboration',
      longDescription: 'Streamline your workflow with our intelligent task management system that automatically prioritizes tasks and optimizes team productivity.',
      features: [
        'AI-powered task prioritization',
        'Team collaboration tools',
        'Time tracking & reporting',
        'Project templates',
        'Integration with 50+ tools',
        'Mobile & desktop apps',
        'Custom workflows',
        'Advanced analytics',
        'Automated reminders',
        'File sharing & storage'
      ],
      benefits: [
        'Increase productivity by 40%',
        'Reduce project delays by 60%',
        'Improve team collaboration',
        'Better project visibility'
      ],
      category: 'Productivity',
      icon: <Target className="w-8 h-8 text-blue-400" />,
      popular: true,
      link: 'https://ziontechgroup.com/task-manager-pro'
    },
    {
      id: 'ai-chatbot-builder',
      name: 'AI Chatbot Builder',
      price: '$49/mo',
      originalPrice: '$99/mo',
      description: 'Create intelligent chatbots without coding using our drag-and-drop builder',
      longDescription: 'Build sophisticated AI chatbots for your website and social media with our no-code platform that learns from your content.',
      features: [
        'Drag-and-drop builder',
        'Natural language processing',
        'Multi-platform deployment',
        'Analytics & insights',
        'Custom training',
        'Integration APIs',
        'Multi-language support',
        'Voice & text support',
        'A/B testing',
        'White-label options'
      ],
      benefits: [
        'Reduce support costs by 70%',
        '24/7 customer support',
        'Improve response time by 90%',
        'Scale customer service'
      ],
      category: 'AI Tools',
      icon: <MessageSquare className="w-8 h-8 text-cyan-400" />,
      popular: true,
      link: 'https://ziontechgroup.com/ai-chatbot-builder'
    },
    {
      id: 'analytics-dashboard',
      name: 'Analytics Dashboard Pro',
      price: '$39/mo',
      originalPrice: '$79/mo',
      description: 'Comprehensive business analytics with real-time insights and automated reporting',
      longDescription: 'Make data-driven decisions with our powerful analytics platform that provides real-time insights and automated reports.',
      features: [
        'Real-time data visualization',
        'Custom dashboard creation',
        'Automated reporting',
        'Data integration',
        'Predictive analytics',
        'Mobile app',
        'Team collaboration',
        'Export capabilities',
        'API access',
        'Custom metrics'
      ],
      benefits: [
        'Improve decision making',
        'Save 10+ hours weekly',
        'Identify growth opportunities',
        'Track key metrics'
      ],
      category: 'Analytics',
      icon: <BarChart3 className="w-8 h-8 text-green-400" />,
      popular: false,
      link: 'https://ziontechgroup.com/analytics-dashboard'
    },
    {
      id: 'social-media-scheduler',
      name: 'Social Media Scheduler',
      price: '$19/mo',
      originalPrice: '$39/mo',
      description: 'Schedule and manage social media posts across multiple platforms with AI optimization',
      longDescription: 'Boost your social media presence with our intelligent scheduling platform that optimizes posting times and content for maximum engagement.',
      features: [
        'Multi-platform scheduling',
        'AI-optimized posting times',
        'Content calendar',
        'Hashtag suggestions',
        'Analytics & insights',
        'Team collaboration',
        'Content library',
        'Bulk upload',
        'Auto-posting',
        'Engagement tracking'
      ],
      benefits: [
        'Increase engagement by 50%',
        'Save 5+ hours weekly',
        'Improve content strategy',
        'Better social presence'
      ],
      category: 'Marketing',
      icon: <Globe className="w-8 h-8 text-cyan-400" />,
      popular: false,
      link: 'https://ziontechgroup.com/social-media-scheduler'
    }
  ];

  const categories = ['All', 'Productivity', 'AI Tools', 'Analytics', 'Marketing'];

  const filteredServices = selectedCategory === 'All' 
    ? microSaaSServices 
    : microSaaSServices.filter(service => service.category === selectedCategory);

  return (
    <>
      <Helmet>
        <title>Micro SaaS Solutions - Innovative Software as a Service | Zion Tech Group</title>
        <meta name="description" content="Discover our comprehensive suite of micro SaaS solutions including AI tools, marketing automation, project management, CRM, and more. Transform your business with our innovative software solutions." />
        <meta name="keywords" content="micro SaaS, software as a service, AI tools, marketing automation, project management, CRM, business software, productivity tools" />
        <meta property="og:title" content="Micro SaaS Solutions - Innovative Software as a Service" />
        <meta property="og:description" content="Discover our comprehensive suite of micro SaaS solutions including AI tools, marketing automation, project management, CRM, and more." />
        <meta property="og:url" content="https://ziontechgroup.com/micro-saas-solutions" />
        <link rel="canonical" href="https://ziontechgroup.com/micro-saas-solutions" />
      </Helmet>

      <section className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 relative overflow-hidden">
        {/* Background Effects */}
        <div className="absolute inset-0">
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-purple-500/10 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-cyan-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-white via-purple-200 to-cyan-200 bg-clip-text text-transparent">
              Micro SaaS Solutions
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8 leading-relaxed">
              Innovative software solutions designed to streamline your business operations and boost productivity
            </p>
          </div>

          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 ${
                  selectedCategory === category
                    ? 'bg-gradient-to-r from-purple-600 to-cyan-600 text-white shadow-lg'
                    : 'bg-slate-800/50 text-gray-300 hover:bg-slate-700/50'
                }`}
              >
                {category}
              </button>
            ))}
          </div>

          {/* Services Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {filteredServices.map((service) => (
              <div
                key={service.id}
                className="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-8 border border-slate-700/50 hover:border-purple-500/50 transition-all duration-300 hover:transform hover:scale-105 group"
              >
                <div className="flex items-center justify-between mb-4">
                  <div className="p-3 bg-slate-700/50 rounded-xl">
                    {service.icon}
                  </div>
                  {service.popular && (
                    <span className="bg-gradient-to-r from-purple-600 to-cyan-600 text-white px-3 py-1 rounded-full text-sm font-semibold">
                      Popular
                    </span>
                  )}
                </div>

                <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-purple-300 transition-colors">
                  {service.name}
                </h3>

                <p className="text-gray-300 mb-4 text-sm">
                  {service.description}
                </p>

                <div className="flex items-center gap-2 mb-4">
                  <span className="text-3xl font-bold text-white">${service.price.split('/')[0]}</span>
                  <span className="text-gray-400 line-through">${service.originalPrice.split('/')[0]}</span>
                  <span className="text-sm text-gray-400">/mo</span>
                </div>

                <ul className="space-y-2 mb-6">
                  {service.features.slice(0, 4).map((feature, index) => (
                    <li key={index} className="flex items-center text-sm text-gray-300">
                      <CheckCircle className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>

                <Link
                  to={service.link}
                  className="w-full bg-gradient-to-r from-purple-600 to-cyan-600 text-white py-3 px-6 rounded-lg font-semibold hover:from-purple-700 hover:to-cyan-700 transition-all duration-300 flex items-center justify-center group"
                >
                  Get Started
                  <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            ))}
          </div>

          {/* CTA Section */}
          <div className="text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Ready to Transform Your Business?
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Join thousands of businesses already using our micro SaaS solutions to streamline operations and boost productivity.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="bg-gradient-to-r from-purple-600 to-cyan-600 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 hover:scale-105"
              >
                Start Free Trial
              </Link>
              <Link
                to="/demo"
                className="border-2 border-white text-white hover:bg-white hover:text-purple-600 px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 hover:scale-105"
              >
                Schedule Demo
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default MicroSaaSSolutionsPage;
'use client';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import {
  HelpCircle, 
  MessageCircle, 
  Phone, 
  Mail, 
  CheckCircle, 
  Search,
  Clock,
  FileText,
  Video,
  BookOpen,
  ArrowRight,
  ChevronRight,
  Star,
  Users,
  Shield,
  Zap,
  Brain,
  Cloud,
  BarChart,
  Code,
  Settings,
  Globe,
  Lock,
  Award,
  Target,
  MapPin,
  Sparkles,
  Activity,
  Building,
  Factory,
  Car,
  Plane,
  Ship,
  Train,
  Home,
  Heart,
  Stethoscope,
  GraduationCap,
  Briefcase,
  Wrench,
  Hammer,
  Paintbrush,
  Scissors,
  Calculator,
  Calendar,
  Clock3,
  Compass,
  Navigation as NavIcon,
  PieChart,
  TrendingDown,
  TrendingUp,
  Eye,
  MessageSquare
} from 'lucide-react';

const SupportPage: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');

  const categories = [
    { name: 'all', label: 'All Topics', count: 25 },
    { name: 'getting-started', label: 'Getting Started', count: 8 },
    { name: 'billing', label: 'Billing & Plans', count: 5 },
    { name: 'technical', label: 'Technical Issues', count: 7 },
    { name: 'api', label: 'API Support', count: 3 },
    { name: 'account', label: 'Account Management', count: 2 }
  ];

  const faqItems = [
    {
      id: 1,
      question: 'How do I get started with Zion Tech Group?',
      answer: 'Getting started is easy! Simply sign up for an account, choose your plan, and follow our quick start guide. Our team will help you set up your first project.',
      category: 'getting-started',
      helpful: 15
    },
    {
      id: 2,
      question: 'What payment methods do you accept?',
      answer: 'We accept all major credit cards (Visa, MasterCard, American Express), PayPal, and bank transfers for enterprise customers.',
      category: 'billing',
      helpful: 12
    },
    {
      id: 3,
      question: 'How can I integrate your API into my application?',
      answer: 'We provide comprehensive API documentation, SDKs for multiple languages, and code examples. Check our API docs section for detailed integration guides.',
      category: 'api',
      helpful: 18
    },
    {
      id: 4,
      question: 'What security measures do you have in place?',
      answer: 'We implement enterprise-grade security including data encryption, secure authentication, regular security audits, and compliance with industry standards.',
      category: 'technical',
      helpful: 22
    },
    {
      id: 5,
      question: 'Can I upgrade or downgrade my plan anytime?',
      answer: 'Yes! You can upgrade or downgrade your plan at any time. Changes take effect immediately, and we\'ll prorate any billing differences.',
      category: 'billing',
      helpful: 14
    },
    {
      id: 6,
      question: 'Do you offer custom solutions for enterprise clients?',
      answer: 'Absolutely! We provide custom development, white-label solutions, and dedicated support for enterprise clients. Contact our sales team to discuss your needs.',
      category: 'account',
      helpful: 9
    }
  ];

  const supportChannels = [
    {
      icon: MessageCircle,
      title: 'Live Chat',
      description: 'Get instant help from our support team',
      availability: '24/7',
      responseTime: '< 2 minutes',
      color: 'text-green-400'
    },
    {
      icon: Mail,
      title: 'Email Support',
      description: 'Send us a detailed message',
      availability: '24/7',
      responseTime: '< 4 hours',
      color: 'text-blue-400'
    },
    {
      icon: Phone,
      title: 'Phone Support',
      description: 'Speak directly with our experts',
      availability: 'Mon-Fri 9AM-6PM',
      responseTime: 'Immediate',
      color: 'text-purple-400'
    },
    {
      icon: Video,
      title: 'Video Call',
      description: 'Schedule a screen sharing session',
      availability: 'By appointment',
      responseTime: 'Same day',
      color: 'text-orange-400'
    }
  ];

  const resources = [
    {
      icon: BookOpen,
      title: 'Documentation',
      description: 'Comprehensive guides and tutorials',
      link: '/docs',
      type: 'Guide'
    },
    {
      icon: Code,
      title: 'API Reference',
      description: 'Complete API documentation',
      link: '/api-docs',
      type: 'Reference'
    },
    {
      icon: Video,
      title: 'Video Tutorials',
      description: 'Step-by-step video guides',
      link: '/tutorials',
      type: 'Video'
    },
    {
      icon: FileText,
      title: 'Knowledge Base',
      description: 'Searchable articles and FAQs',
      link: '/knowledge-base',
      type: 'Article'
    }
  ];

  const filteredFaqs = faqItems.filter(item => {
    const matchesSearch = item.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         item.answer.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = selectedCategory === 'all' || item.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative py-20 px-4 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,rgba(147,51,234,0.3)_0%,transparent_50%)] animate-pulse" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(59,130,246,0.3)_0%,transparent_50%)] animate-pulse" style={{ animationDelay: '1s' }} />
        <div className="relative max-w-7xl mx-auto text-center">
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
            Support
            <span className="block bg-gradient-to-r from-purple-400 via-blue-400 to-cyan-400 bg-clip-text text-transparent">
              Center
            </span>
          </h1>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed">
            We're here to help! Find answers, get support, and connect with our expert team.
          </p>
        </div>
      </section>

      {/* Search */}
      <section className="py-10 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
            <input
              type="text"
              placeholder="Search for help..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-4 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
            />
          </div>
        </div>
      </section>

      {/* Support Channels */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-white mb-12 text-center">Get Help</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {supportChannels.map((channel, index) => (
              <div key={index} className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6 text-center hover:bg-white/10 transition-all duration-300">
                <channel.icon className={`w-12 h-12 ${channel.color} mx-auto mb-4`} />
                <h3 className="text-xl font-semibold text-white mb-2">{channel.title}</h3>
                <p className="text-gray-300 mb-4">{channel.description}</p>
                <div className="space-y-2 text-sm text-gray-400">
                  <p>Available: {channel.availability}</p>
                  <p>Response: {channel.responseTime}</p>
                </div>
                <button className="mt-4 w-full bg-gradient-to-r from-purple-500 to-blue-600 hover:from-purple-600 hover:to-blue-700 text-white font-bold py-2 px-4 rounded-lg transition-all duration-300">
                  Get Help
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Resources */}
      <section className="py-20 px-4 bg-white/5">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-white mb-12 text-center">Resources</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {resources.map((resource, index) => (
              <Link
                key={index}
                to={resource.link}
                className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6 hover:bg-white/10 transition-all duration-300 group"
              >
                <div className="flex items-center mb-4">
                  <resource.icon className="w-8 h-8 text-purple-400 mr-3" />
                  <span className="px-2 py-1 bg-purple-500/20 text-purple-300 text-xs rounded-full">
                    {resource.type}
                  </span>
                </div>
                <h3 className="text-xl font-semibold text-white mb-2 group-hover:text-purple-400 transition-colors">
                  {resource.title}
                </h3>
                <p className="text-gray-300 mb-4">{resource.description}</p>
                <div className="flex items-center text-purple-400 text-sm">
                  Learn more
                  <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row gap-8">
            <div className="md:w-1/4">
              <h2 className="text-2xl font-bold text-white mb-6">FAQ Categories</h2>
              <div className="space-y-2">
                {categories.map((category) => (
                  <button
                    key={category.name}
                    onClick={() => setSelectedCategory(category.name)}
                    className={`w-full text-left px-4 py-3 rounded-lg transition-all duration-300 ${
                      selectedCategory === category.name
                        ? 'bg-purple-500 text-white'
                        : 'bg-white/5 text-gray-300 hover:bg-white/10'
                    }`}
                  >
                    {category.label} ({category.count})
                  </button>
                ))}
              </div>
            </div>
            
            <div className="md:w-3/4">
              <h2 className="text-2xl font-bold text-white mb-6">Frequently Asked Questions</h2>
              <div className="space-y-4">
                {filteredFaqs.map((item) => (
                  <div key={item.id} className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6">
                    <h3 className="text-lg font-semibold text-white mb-3">{item.question}</h3>
                    <p className="text-gray-300 mb-4">{item.answer}</p>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center text-sm text-gray-400">
                        <Star className="w-4 h-4 text-yellow-400 mr-1" />
                        {item.helpful} people found this helpful
                      </div>
                      <button className="text-purple-400 hover:text-purple-300 text-sm">
                        Was this helpful?
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            Still Need Help?
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Our support team is ready to assist you with any questions or issues.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-gradient-to-r from-purple-500 to-blue-600 hover:from-purple-600 hover:to-blue-700 text-white font-bold py-4 px-8 rounded-lg transition-all duration-300 transform hover:scale-105">
              Contact Support
            </button>
            <button className="border border-purple-400 text-purple-400 hover:bg-purple-400 hover:text-white font-bold py-4 px-8 rounded-lg transition-all duration-300">
              Schedule Call
            </button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default SupportPage;
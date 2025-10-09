'use client';
import React, { useState } from 'react';
import { Brain, Mail, Phone, MessageSquare, Search, FileText, Video, BookOpen, CheckCircle, ArrowRight, Zap, Settings, Code, BarChart, Cloud, Target, Cpu, Database, Users, MapPin, Lock, Eye, Truck, Factory, GraduationCap, Stethoscope, CreditCard, Home, Briefcase, Wrench, Bot, Music, Gamepad2, ShoppingCart, Building, Car, Plane, Ship, Train, Heart, Paintbrush, Scissors, Calculator, Calendar, Clock3, Compass, Navigation as NavIcon, PieChart, TrendingDown, Activity, Zap as Lightning, Target as Crosshair, Shield as Security, Users as People, Star as StarIcon, CheckCircle as Check, ArrowRight as Arrow, Phone as PhoneIcon, Mail as MailIcon, MapPin as Location, TrendingUp, Plus, Minus, ExternalLink } from 'lucide-react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import SEOOptimizer from '../components/SEOOptimizer';

const SupportPage: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [expandedFaq, setExpandedFaq] = useState<number | null>(null);

  const categories = [
    { id: 'all', name: 'All Topics', icon: FileText },
    { id: 'getting-started', name: 'Getting Started', icon: Zap },
    { id: 'ai-services', name: 'AI Services', icon: Brain },
    { id: 'it-services', name: 'IT Services', icon: Settings },
    { id: 'billing', name: 'Billing & Account', icon: CreditCard },
    { id: 'technical', name: 'Technical Support', icon: Code },
    { id: 'security', name: 'Security', icon: Lock }
  ];

  const faqs = [
    {
      id: 1,
      question: 'How do I get started with Zion Tech Group services?',
      answer: 'Getting started is easy! Simply contact our team through our contact form or call us at +1 302 464 0950. We\'ll schedule a consultation to understand your needs and recommend the best AI and IT solutions for your business.',
      category: 'getting-started',
      tags: ['getting-started', 'onboarding', 'consultation']
    },
    {
      id: 2,
      question: 'What AI services do you offer?',
      answer: 'We offer comprehensive AI services including machine learning solutions, natural language processing, computer vision, AI automation, business intelligence, and custom AI model development. Our services are designed to help businesses leverage AI for competitive advantage.',
      category: 'ai-services',
      tags: ['ai-services', 'machine-learning', 'automation']
    },
    {
      id: 3,
      question: 'How secure is my data with Zion Tech Group?',
      answer: 'Data security is our top priority. We implement enterprise-grade security measures including end-to-end encryption, secure data centers, regular security audits, and compliance with industry standards like SOC 2, GDPR, and HIPAA where applicable.',
      category: 'security',
      tags: ['security', 'data-protection', 'compliance']
    },
    {
      id: 4,
      question: 'What is your pricing structure?',
      answer: 'Our pricing varies based on the services and scale required. We offer flexible pricing models including monthly subscriptions for micro SAAS solutions starting at $79/month, and custom enterprise pricing for AI and IT services. Contact us for a personalized quote.',
      category: 'billing',
      tags: ['pricing', 'billing', 'subscription']
    },
    {
      id: 5,
      question: 'Do you provide 24/7 support?',
      answer: 'Yes! We offer 24/7 support for all our enterprise clients. Our support team is available around the clock to help with any technical issues, questions, or concerns you may have.',
      category: 'technical',
      tags: ['support', '24-7', 'technical-help']
    },
    {
      id: 6,
      question: 'Can you help with cloud migration?',
      answer: 'Absolutely! Cloud migration is one of our core IT services. We help businesses migrate to AWS, Azure, or Google Cloud with minimal downtime and maximum security. Our team handles everything from planning to execution.',
      category: 'it-services',
      tags: ['cloud-migration', 'aws', 'azure', 'gcp']
    },
    {
      id: 7,
      question: 'What is the typical project timeline?',
      answer: 'Project timelines vary depending on complexity and scope. Simple AI implementations can take 2-4 weeks, while comprehensive digital transformation projects may take 3-6 months. We provide detailed timelines during our initial consultation.',
      category: 'getting-started',
      tags: ['timeline', 'project-management', 'delivery']
    },
    {
      id: 8,
      question: 'Do you offer training for our team?',
      answer: 'Yes! We provide comprehensive training programs for your team to ensure successful adoption of our solutions. This includes hands-on training, documentation, and ongoing support to maximize the value of your investment.',
      category: 'technical',
      tags: ['training', 'education', 'adoption']
    }
  ];

  const supportChannels = [
    {
      title: 'Phone Support',
      description: 'Speak directly with our technical experts',
      icon: Phone,
      contact: '+1 302 464 0950',
      availability: '24/7 for Enterprise',
      color: 'text-green-400'
    },
    {
      title: 'Email Support',
      description: 'Get detailed responses to your questions',
      icon: Mail,
      contact: 'support@ziontechgroup.com',
      availability: '24/7 Response',
      color: 'text-blue-400'
    },
    {
      title: 'Live Chat',
      description: 'Chat with our support team in real-time',
      icon: MessageSquare,
      contact: 'Available on website',
      availability: 'Business Hours',
      color: 'text-purple-400'
    },
    {
      title: 'Ticket System',
      description: 'Submit and track support requests',
      icon: FileText,
      contact: 'support.ziontechgroup.com',
      availability: '24/7 Access',
      color: 'text-cyan-400'
    }
  ];

  const resources = [
    {
      title: 'Documentation',
      description: 'Comprehensive guides and API documentation',
      icon: BookOpen,
      link: '/docs',
      color: 'text-blue-400'
    },
    {
      title: 'Video Tutorials',
      description: 'Step-by-step video guides and walkthroughs',
      icon: Video,
      link: '/tutorials',
      color: 'text-purple-400'
    },
    {
      title: 'Knowledge Base',
      description: 'Searchable database of articles and solutions',
      icon: Search,
      link: '/knowledge-base',
      color: 'text-green-400'
    },
    {
      title: 'Community Forum',
      description: 'Connect with other users and share experiences',
      icon: Users,
      link: '/forum',
      color: 'text-orange-400'
    }
  ];

  const filteredFaqs = faqs.filter(faq => {
    const matchesCategory = selectedCategory === 'all' || faq.category === selectedCategory;
    const matchesSearch = searchQuery === '' || 
      faq.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
      faq.answer.toLowerCase().includes(searchQuery.toLowerCase()) ||
      faq.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()));
    return matchesCategory && matchesSearch;
  });

  const toggleFaq = (faqId: number) => {
    setExpandedFaq(expandedFaq === faqId ? null : faqId);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <SEOOptimizer
        title="Support Center - Zion Tech Group"
        description="Get help and support for Zion Tech Group's AI and IT services. Find answers, documentation, and contact our support team."
        keywords={['support', 'help', 'documentation', 'Zion Tech Group', 'customer service', 'technical support']}
        canonicalUrl="https://ziontechgroup.com/support"
      />
      <Navigation />
      
      <main className="container mx-auto px-4 py-16 pt-24">
        {/* Hero Section */}
        <section className="text-center mb-16">
          <div className="flex justify-center mb-6">
            <div className="w-16 h-16 bg-gradient-to-br from-cyan-400 to-purple-600 rounded-full flex items-center justify-center">
              <MessageSquare className="w-8 h-8 text-white" />
            </div>
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 neon-text">
            Support Center
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
            We're here to help! Find answers to your questions, access documentation, and get the support you need.
          </p>
        </section>

        {/* Search Bar */}
        <section className="mb-16">
          <div className="max-w-2xl mx-auto">
            <div className="relative">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="text"
                placeholder="Search for help, documentation, or solutions..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-12 pr-4 py-4 bg-slate-800 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/20"
              />
            </div>
          </div>
        </section>

        {/* Support Channels */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-white mb-8 text-center neon-text">
            Get Support
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {supportChannels.map((channel, index) => (
              <div key={index} className="cyber-card p-6 text-center hover:scale-105 transition-all duration-300">
                <channel.icon className={`w-12 h-12 ${channel.color} mx-auto mb-4`} />
                <h3 className="text-xl font-bold text-white mb-2">{channel.title}</h3>
                <p className="text-gray-300 mb-4">{channel.description}</p>
                <div className="space-y-2">
                  <div className="text-cyan-400 font-medium">{channel.contact}</div>
                  <div className="text-sm text-gray-400">{channel.availability}</div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Resources */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-white mb-8 text-center neon-text">
            Resources
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {resources.map((resource, index) => (
              <a
                key={index}
                href={resource.link}
                className="cyber-card p-6 text-center hover:scale-105 transition-all duration-300 block"
              >
                <resource.icon className={`w-12 h-12 ${resource.color} mx-auto mb-4`} />
                <h3 className="text-xl font-bold text-white mb-2">{resource.title}</h3>
                <p className="text-gray-300">{resource.description}</p>
                <ArrowRight className="w-5 h-5 text-cyan-400 mx-auto mt-4" />
              </a>
            ))}
          </div>
        </section>

        {/* FAQ Section */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-white mb-8 text-center neon-text">
            Frequently Asked Questions
          </h2>
          
          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-4 mb-8">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`flex items-center space-x-2 px-4 py-2 rounded-lg transition-all duration-300 ${
                  selectedCategory === category.id
                    ? 'bg-cyan-400 text-slate-900'
                    : 'bg-slate-800 text-gray-300 hover:bg-slate-700'
                }`}
              >
                <category.icon className="w-4 h-4" />
                <span>{category.name}</span>
              </button>
            ))}
          </div>

          {/* FAQ List */}
          <div className="space-y-4">
            {filteredFaqs.map((faq) => (
              <div key={faq.id} className="cyber-card p-6">
                <button
                  onClick={() => toggleFaq(faq.id)}
                  className="w-full flex items-center justify-between text-left"
                >
                  <h3 className="text-lg font-semibold text-white pr-4">{faq.question}</h3>
                  {expandedFaq === faq.id ? <Minus className="w-5 h-5 text-cyan-400 flex-shrink-0" /> : <Plus className="w-5 h-5 text-cyan-400 flex-shrink-0" />}
                </button>
                
                {expandedFaq === faq.id && (
                  <div className="mt-4 pt-4 border-t border-gray-700">
                    <p className="text-gray-300 leading-relaxed">{faq.answer}</p>
                    <div className="flex flex-wrap gap-2 mt-4">
                      {faq.tags.map((tag, tagIndex) => (
                        <span key={tagIndex} className="text-xs bg-slate-800 text-gray-400 px-2 py-1 rounded">
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>

          {filteredFaqs.length === 0 && (
            <div className="cyber-card p-8 text-center">
              <h3 className="text-xl font-bold text-white mb-4">No results found</h3>
              <p className="text-gray-300 mb-6">
                We couldn't find any FAQs matching your search. Try different keywords or contact our support team.
              </p>
              <a
                href="/contact"
                className="cyber-button px-6 py-3"
              >
                Contact Support
              </a>
            </div>
          )}
        </section>

        {/* Contact CTA */}
        <section className="cyber-card p-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4 neon-text">
            Still Need Help?
          </h2>
          <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
            Can't find what you're looking for? Our support team is ready to help you with any questions or issues.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/contact"
              className="cyber-button px-8 py-3 text-lg font-semibold"
            >
              Contact Support
            </a>
            <a
              href="tel:+13024640950"
              className="border-2 border-cyan-400 text-cyan-400 px-8 py-3 rounded-lg font-semibold hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300"
            >
              Call Us Now
            </a>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default SupportPage;
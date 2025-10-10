'use client';
import React, { useState } from 'react';
import { Zap, CheckCircle, Star, Users, DollarSign, Clock, ArrowRight, Brain, Code, BarChart, Settings, Shield, Target, Globe, Smartphone, Mail, MessageSquare, Search, FileText, Bot, Palette, Camera, Music, Video, Gamepad2, ShoppingCart, CreditCard, Building, Factory, Car, Plane, Ship, Train, Home, Heart, Stethoscope, GraduationCap, Briefcase, Wrench, Hammer, Paintbrush, Scissors, BookOpen, Calculator, Calendar, Clock3, Compass, Navigation as NavIcon, PieChart, TrendingDown, Activity, Zap as Lightning, Target as Crosshair, Shield as Security, Users as People, Star as StarIcon, CheckCircle as Check, ArrowRight as Arrow, Phone as PhoneIcon, Mail as MailIcon, MapPin as Location, Cube, Mic, DollarSign as Money, Truck, Link, HardDrive, FileCheck } from 'lucide-react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

const MicroSAASPage: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');

  const categories = [
    { id: 'all', name: 'All Categories', icon: Zap },
    { id: 'productivity', name: 'Productivity', icon: CheckCircle },
    { id: 'marketing', name: 'Marketing', icon: Target },
    { id: 'content', name: 'Content', icon: FileText },
    { id: 'business', name: 'Business', icon: Building },
    { id: 'creative', name: 'Creative', icon: Palette },
    { id: 'analytics', name: 'Analytics', icon: BarChart },
    { id: 'support', name: 'Support', icon: MessageSquare }
  ];

  const microSAASServices = [
    {
      id: 1,
      title: 'AI Project Manager Pro',
      description: 'Intelligent project planning with AI-powered resource optimization, timeline prediction, and risk assessment. Trusted by 10,000+ teams worldwide.',
      icon: BarChart,
      price: '$99/month',
      originalPrice: '$149/month',
      features: ['AI-powered planning', 'Smart task management', 'Predictive analytics', 'Team collaboration', 'Risk assessment', 'Resource optimization', 'Gantt charts', 'Time tracking'],
      benefits: ['40% productivity increase', '70% fewer delays', '85% planning accuracy', '30% cost reduction'],
      link: '/ai-project-manager',
      popular: true,
      category: 'productivity',
      rating: 4.9,
      users: '10,000+',
      freeTrial: '14 days',
      color: 'text-blue-400',
      bgColor: 'bg-blue-500/20',
      borderColor: 'border-blue-400/30'
    },
    {
      id: 2,
      title: 'AI Content Writer Pro',
      description: 'Generate high-quality content with AI-powered writing assistance for blogs, social media, and marketing materials. Create 10x more content in half the time.',
      icon: FileText,
      price: '$89/month',
      originalPrice: '$129/month',
      features: ['Blog posts', 'Social media content', 'Product descriptions', 'SEO optimization', 'Brand voice consistency', 'Multi-language support', 'Content templates', 'Plagiarism check'],
      benefits: ['10x content output', 'SEO optimized', 'Brand voice consistency', '50% time saved'],
      link: '/ai-content-writer',
      popular: true,
      category: 'content',
      rating: 4.8,
      users: '8,500+',
      freeTrial: '14 days',
      color: 'text-green-400',
      bgColor: 'bg-green-500/20',
      borderColor: 'border-green-400/30'
    },
    {
      id: 3,
      title: 'AI Social Media Manager Pro',
      description: 'Automate your social media presence with AI-powered content creation, scheduling, and engagement. Grow your audience 5x faster.',
      icon: MessageSquare,
      price: '$69/month',
      originalPrice: '$99/month',
      features: ['Content generation', 'Auto-posting', 'Engagement tracking', 'Hashtag optimization', 'Analytics dashboard', 'Multi-platform support', 'Brand monitoring', 'Influencer outreach'],
      benefits: ['5x audience growth', '80% time saved', 'Higher engagement', 'Better brand presence'],
      link: '/ai-social-media-manager',
      popular: false,
      category: 'marketing',
      rating: 4.7,
      users: '6,200+',
      freeTrial: '14 days',
      color: 'text-purple-400',
      bgColor: 'bg-purple-500/20',
      borderColor: 'border-purple-400/30'
    },
    {
      id: 4,
      title: 'AI Email Marketing Suite',
      description: 'Create, send, and optimize email campaigns with AI-powered personalization and automation. Increase open rates by 300%.',
      icon: Mail,
      price: '$59/month',
      originalPrice: '$89/month',
      features: ['AI subject lines', 'Personalized content', 'Send time optimization', 'A/B testing', 'List segmentation', 'Automation workflows', 'Analytics & reporting', 'Template library'],
      benefits: ['300% higher open rates', '250% more clicks', 'Automated campaigns', 'Better deliverability'],
      link: '/ai-email-marketing',
      popular: false,
      category: 'marketing',
      rating: 4.6,
      users: '7,800+',
      freeTrial: '14 days',
      color: 'text-orange-400',
      bgColor: 'bg-orange-500/20',
      borderColor: 'border-orange-400/30'
    },
    {
      id: 5,
      title: 'AI SEO Optimizer Pro',
      description: 'Boost your website\'s search rankings with AI-powered SEO analysis, keyword research, and content optimization.',
      icon: Search,
      price: '$79/month',
      originalPrice: '$119/month',
      features: ['Keyword research', 'Content optimization', 'Technical SEO audit', 'Competitor analysis', 'Rank tracking', 'Link building', 'Local SEO', 'Performance monitoring'],
      benefits: ['200% traffic increase', 'Top 3 rankings', 'Comprehensive analysis', 'Automated optimization'],
      link: '/ai-seo-optimizer',
      popular: true,
      category: 'marketing',
      rating: 4.8,
      users: '9,100+',
      freeTrial: '14 days',
      color: 'text-cyan-400',
      bgColor: 'bg-cyan-500/20',
      borderColor: 'border-cyan-400/30'
    },
    {
      id: 6,
      title: 'AI Lead Generation Pro',
      description: 'Find and qualify high-quality leads automatically with AI-powered prospecting and outreach. Generate 500+ leads per month.',
      icon: Target,
      price: '$99/month',
      originalPrice: '$149/month',
      features: ['Lead discovery', 'Contact enrichment', 'Email verification', 'Outreach automation', 'CRM integration', 'Lead scoring', 'Follow-up sequences', 'Analytics dashboard'],
      benefits: ['500+ leads/month', '90% accuracy', 'Automated outreach', 'Higher conversion'],
      link: '/ai-lead-generation',
      popular: false,
      category: 'marketing',
      rating: 4.7,
      users: '5,400+',
      freeTrial: '14 days',
      color: 'text-red-400',
      bgColor: 'bg-red-500/20',
      borderColor: 'border-red-400/30'
    },
    {
      id: 7,
      title: 'AI Customer Support Bot Pro',
      description: '24/7 AI-powered customer support that handles 80% of inquiries automatically. Improve customer satisfaction and reduce costs.',
      icon: Bot,
      price: '$99/month',
      originalPrice: '$149/month',
      features: ['Natural language processing', 'Multi-channel support', 'Knowledge base integration', 'Escalation to humans', 'Sentiment analysis', 'Custom responses', 'Analytics & insights', 'Easy setup'],
      benefits: ['80% automation', '24/7 availability', '90% satisfaction', '60% cost reduction'],
      link: '/ai-customer-support-bot',
      popular: true,
      category: 'support',
      rating: 4.9,
      users: '12,000+',
      freeTrial: '14 days',
      color: 'text-indigo-400',
      bgColor: 'bg-indigo-500/20',
      borderColor: 'border-indigo-400/30'
    },
    {
      id: 8,
      title: 'AI Code Review Assistant Pro',
      description: 'Automated code review and optimization suggestions powered by AI. Catch bugs before they reach production.',
      icon: Code,
      price: '$89/month',
      originalPrice: '$129/month',
      features: ['Automated code review', 'Bug detection', 'Security scanning', 'Performance optimization', 'Code quality metrics', 'Best practices', 'Team collaboration', 'Integration support'],
      benefits: ['90% bug reduction', 'Faster development', 'Better code quality', 'Team productivity'],
      link: '/ai-code-generation',
      popular: false,
      category: 'productivity',
      rating: 4.6,
      users: '4,200+',
      freeTrial: '14 days',
      color: 'text-yellow-400',
      bgColor: 'bg-yellow-500/20',
      borderColor: 'border-yellow-400/30'
    },
    {
      id: 9,
      title: 'AI Data Analytics Pro',
      description: 'Transform raw data into actionable insights with AI-powered analytics and visualization. Make data-driven decisions faster.',
      icon: BarChart,
      price: '$99/month',
      originalPrice: '$149/month',
      features: ['Data visualization', 'Predictive analytics', 'Custom dashboards', 'Automated reports', 'Data integration', 'Real-time monitoring', 'Trend analysis', 'Export capabilities'],
      benefits: ['Faster insights', 'Better decisions', 'Automated reporting', 'Real-time data'],
      link: '/ai-data-analytics',
      popular: true,
      category: 'analytics',
      rating: 4.8,
      users: '6,700+',
      freeTrial: '14 days',
      color: 'text-pink-400',
      bgColor: 'bg-pink-500/20',
      borderColor: 'border-pink-400/30'
    },
    {
      id: 10,
      title: 'AI Video Generator Pro',
      description: 'Create professional videos in minutes with AI-powered video generation. Perfect for marketing, training, and social media.',
      icon: Video,
      price: '$149/month',
      originalPrice: '$199/month',
      features: ['AI video creation', 'Template library', 'Voice synthesis', 'Text-to-video', 'Custom branding', 'Multi-format export', 'Collaboration tools', 'Analytics tracking'],
      benefits: ['90% time saved', 'Professional quality', 'No video skills needed', 'Unlimited videos'],
      link: '/ai-video-generation',
      popular: false,
      category: 'creative',
      rating: 4.7,
      users: '3,800+',
      freeTrial: '14 days',
      color: 'text-teal-400',
      bgColor: 'bg-teal-500/20',
      borderColor: 'border-teal-400/30'
    },
    {
      id: 11,
      title: 'AI Sales Automation Pro',
      description: 'Automate your entire sales process with AI-powered lead qualification, follow-ups, and closing assistance.',
      icon: Target,
      price: '$149/month',
      originalPrice: '$199/month',
      features: ['Lead scoring', 'Email sequences', 'Call scheduling', 'Proposal generation', 'CRM integration', 'Pipeline management', 'Performance tracking', 'ROI analysis'],
      benefits: ['300% more sales', 'Automated follow-ups', 'Better lead quality', 'Higher conversion'],
      link: '/ai-sales-automation',
      popular: true,
      category: 'business',
      rating: 4.9,
      users: '8,900+',
      freeTrial: '14 days',
      color: 'text-emerald-400',
      bgColor: 'bg-emerald-500/20',
      borderColor: 'border-emerald-400/30'
    },
    {
      id: 12,
      title: 'AI Cybersecurity Shield Pro',
      description: 'Protect your business with AI-powered threat detection, vulnerability scanning, and automated security responses.',
      icon: Shield,
      price: '$199/month',
      originalPrice: '$299/month',
      features: ['Threat detection', 'Vulnerability scanning', 'Automated responses', 'Security monitoring', 'Compliance reporting', 'Incident response', 'Risk assessment', '24/7 protection'],
      benefits: ['99.9% protection', 'Automated security', 'Compliance ready', 'Peace of mind'],
      link: '/ai-cybersecurity',
      popular: false,
      category: 'business',
      rating: 4.8,
      users: '2,100+',
      freeTrial: '14 days',
      color: 'text-rose-400',
      bgColor: 'bg-rose-500/20',
      borderColor: 'border-rose-400/30'
    }
  ];

  const filteredServices = selectedCategory === 'all' 
    ? microSAASServices 
    : microSAASServices.filter(service => service.category === selectedCategory);

  const stats = [
    { label: 'Active Users', value: '100,000+', icon: Users },
    { label: 'Micro SAAS Apps', value: '50+', icon: Zap },
    { label: 'Average Rating', value: '4.8/5', icon: Star },
    { label: 'Time Saved', value: '80%', icon: Clock },
    { label: 'Cost Reduction', value: '60%', icon: DollarSign },
    { label: 'Success Rate', value: '99%', icon: CheckCircle }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Navigation />
      
      <main className="container mx-auto px-4 py-16 pt-24">
        {/* Hero Section */}
        <section className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 neon-text">
            Micro <span className="text-cyan-400">SAAS</span> Solutions
          </h1>
          <p className="text-xl text-gray-300 mb-8 max-w-4xl mx-auto">
            Powerful, AI-powered micro SAAS applications designed to solve specific business problems. 
            Each tool is focused, efficient, and delivers immediate value.
          </p>
        </section>

        {/* Stats Section */}
        <section className="mb-16">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {stats.map((stat, index) => (
              <div key={index} className="cyber-card p-6 text-center hover:scale-105 transition-all duration-300">
                <stat.icon className="w-12 h-12 text-cyan-400 mx-auto mb-4" />
                <div className="text-3xl font-bold text-white mb-2 neon-text">{stat.value}</div>
                <div className="text-gray-300 text-sm">{stat.label}</div>
              </div>
            ))}
          </div>
        </section>

        {/* Category Filter */}
        <section className="mb-12">
          <div className="cyber-card p-6">
            <h2 className="text-2xl font-bold text-white mb-6 neon-text">Browse by Category</h2>
            <div className="flex flex-wrap gap-4">
              {categories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => setSelectedCategory(category.id)}
                  className={`flex items-center px-6 py-3 rounded-lg font-medium transition-all duration-300 ${
                    selectedCategory === category.id
                      ? 'bg-cyan-500 text-white'
                      : 'bg-slate-800 text-gray-300 hover:bg-slate-700 hover:text-cyan-400'
                  }`}
                >
                  <category.icon className="w-5 h-5 mr-2" />
                  {category.name}
                </button>
              ))}
            </div>
          </div>
        </section>

        {/* Services Grid */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-white mb-8 neon-text">
            {selectedCategory === 'all' ? 'All Micro SAAS Solutions' : categories.find(c => c.id === selectedCategory)?.name + ' Solutions'}
            <span className="text-gray-400 text-lg ml-4">({filteredServices.length} apps)</span>
          </h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredServices.map((service) => (
              <article key={service.id} className={`cyber-card p-8 hover:scale-105 transition-all duration-300 ${service.borderColor} relative`}>
                {service.popular && (
                  <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                    <span className="bg-gradient-to-r from-cyan-400 to-blue-500 text-white px-4 py-1 rounded-full text-sm font-semibold flex items-center">
                      <Star className="w-4 h-4 mr-1" />
                      Popular
                    </span>
                  </div>
                )}
                
                <div className="flex items-center mb-6">
                  <div className={`w-16 h-16 ${service.bgColor} rounded-xl flex items-center justify-center mr-4`}>
                    <service.icon className={`w-8 h-8 ${service.color}`} />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-white mb-2 neon-text">{service.title}</h3>
                    <div className="flex items-center space-x-2">
                      <div className="flex items-center">
                        <Star className="w-4 h-4 text-yellow-400 fill-current" />
                        <span className="text-sm text-gray-300 ml-1">{service.rating}</span>
                      </div>
                      <span className="text-sm text-gray-400">•</span>
                      <span className="text-sm text-gray-400">{service.users} users</span>
                    </div>
                  </div>
                </div>

                <p className="text-gray-300 mb-6 leading-relaxed">{service.description}</p>

                <div className="mb-6">
                  <h4 className="text-sm font-semibold text-cyan-400 mb-3">Key Features:</h4>
                  <ul className="space-y-2">
                    {service.features.slice(0, 4).map((feature, index) => (
                      <li key={index} className="flex items-center text-sm text-gray-300">
                        <CheckCircle className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                    {service.features.length > 4 && (
                      <li className="text-sm text-gray-400 ml-6">
                        +{service.features.length - 4} more features
                      </li>
                    )}
                  </ul>
                </div>

                <div className="mb-6">
                  <h4 className="text-sm font-semibold text-pink-400 mb-3">Benefits:</h4>
                  <ul className="space-y-2">
                    {service.benefits.map((benefit, index) => (
                      <li key={index} className="flex items-center text-sm text-gray-300">
                        <ArrowRight className="w-4 h-4 text-pink-400 mr-2 flex-shrink-0" />
                        {benefit}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="text-center">
                  <div className="mb-4">
                    <span className={`text-3xl font-bold ${service.color}`}>{service.price}</span>
                    {service.originalPrice && (
                      <span className="text-lg text-gray-400 line-through ml-2">{service.originalPrice}</span>
                    )}
                    <div className="text-sm text-gray-400 mt-1">{service.freeTrial} free trial</div>
                  </div>
                  <a 
                    href={service.link}
                    className={`px-6 py-3 rounded-lg text-sm font-medium transition-all duration-300 hover:scale-105 ${service.color} border border-current hover:bg-current hover:text-slate-900`}
                  >
                    Start Free Trial
                  </a>
                </div>
              </article>
            ))}
          </div>
        </section>

        {/* CTA Section */}
        <section className="text-center">
          <div className="cyber-card p-12 max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6 neon-text">
              Need a Custom Micro SAAS Solution?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              We can build a custom micro SAAS application tailored to your specific business needs. 
              Get a solution that perfectly fits your workflow.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/contact"
                className="cyber-button px-8 py-4 text-lg font-semibold hover:scale-105 transition-all duration-300"
              >
                Request Custom Solution
              </a>
              <a
                href="tel:+13024640950"
                className="border-2 border-cyan-400 text-cyan-400 px-8 py-4 rounded-lg font-semibold hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300"
              >
                Call +1 302 464 0950
              </a>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default MicroSAASPage;
'use client';
import React, { useState, useMemo } from 'react';
import { Helmet } from 'react-helmet-async';
import { Search, Filter, Star, Zap, Shield, Clock, Users, TrendingUp, Globe, Brain, Cpu, Target, BarChart, MessageSquare, Eye, Sparkles, ArrowRight, Phone, Mail, MapPin } from 'lucide-react';
import MicroSAASCard from '../components/MicroSAASCard';

const MicroSAASPage: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [sortBy, setSortBy] = useState('popularity');

  const microSAASServices = useMemo(() => [
    // Featured Services
    {
      title: 'AI Code Review Assistant Pro',
      description: 'Advanced automated code analysis with AI-powered bug detection, security vulnerability scanning, and performance optimization suggestions.',
      icon: '🔍',
      price: '$89/month',
      features: ['Automated code review', 'Security vulnerability detection', 'Performance optimization', 'Code quality metrics', 'Git integration', 'Custom rule sets'],
      benefits: ['Reduce bugs by 70%', 'Improve code quality', 'Save 15+ hours/week', 'Prevent security vulnerabilities'],
      marketPrice: '$150-300/month',
      category: 'Developer Tools',
      technologies: ['GitHub Actions', 'SonarQube', 'ESLint', 'Custom AI Models', 'OpenAI Codex'],
      contactInfo: 'Contact: kleber@ziontechgroup.com | +1 302 464 0950',
      link: 'https://ziontechgroup.com/ai-code-review',
      popular: true
    },
    {
      title: 'AI SEO Optimizer Pro',
      description: 'Advanced SEO analysis and optimization with AI-driven content suggestions, keyword research, and competitor analysis.',
      icon: '🎯',
      price: '$199/month',
      features: ['Keyword research', 'Content optimization', 'Competitor analysis', 'Rank tracking', 'Technical SEO audit', 'Local SEO tools'],
      benefits: ['Increase organic traffic by 150%', 'Improve search rankings', 'Save 20+ hours/week', 'Boost conversion rates'],
      marketPrice: '$300-600/month',
      category: 'Marketing Tools',
      technologies: ['Google Analytics', 'Search Console', 'Custom AI Models', 'React', 'Node.js'],
      contactInfo: 'Contact: kleber@ziontechgroup.com | +1 302 464 0950',
      popular: true
    },
    {
      title: 'Smart Analytics Dashboard',
      description: 'AI-powered business intelligence with real-time analytics, predictive insights, and automated reporting.',
      icon: '📊',
      price: '$149/month',
      features: ['Real-time analytics', 'Predictive insights', 'Automated reports', 'Custom dashboards', 'Data visualization', 'API integration'],
      benefits: ['Make data-driven decisions', 'Save 25+ hours on reporting', 'Identify trends early', 'Improve ROI by 40%'],
      marketPrice: '$250-500/month',
      category: 'Analytics Tools',
      technologies: ['Tableau', 'Power BI', 'Custom AI Models', 'Python', 'React'],
      contactInfo: 'Contact: kleber@ziontechgroup.com | +1 302 464 0950',
      popular: true
    },
    {
      title: 'AI Content Generator Pro',
      description: 'Advanced content creation with AI-powered writing, editing, and optimization for blogs, social media, and marketing materials.',
      icon: '✍️',
      price: '$129/month',
      features: ['AI writing assistant', 'Content optimization', 'SEO-friendly content', 'Multi-language support', 'Brand voice training', 'Plagiarism checker'],
      benefits: ['Create content 10x faster', 'Improve content quality', 'Save 30+ hours/week', 'Increase engagement by 80%'],
      marketPrice: '$200-400/month',
      category: 'Content Tools',
      technologies: ['OpenAI GPT', 'Custom AI Models', 'React', 'Node.js', 'MongoDB'],
      contactInfo: 'Contact: kleber@ziontechgroup.com | +1 302 464 0950'
    },
    {
      title: 'Smart Email Marketing Suite',
      description: 'AI-powered email marketing with automated campaigns, personalization, and advanced analytics.',
      icon: '📧',
      price: '$99/month',
      features: ['Automated campaigns', 'Personalization', 'A/B testing', 'Advanced analytics', 'List management', 'Template library'],
      benefits: ['Increase open rates by 60%', 'Improve click-through rates', 'Save 20+ hours/week', 'Boost conversions by 45%'],
      marketPrice: '$150-300/month',
      category: 'Marketing Tools',
      technologies: ['Mailchimp', 'SendGrid', 'Custom AI Models', 'React', 'Node.js'],
      contactInfo: 'Contact: kleber@ziontechgroup.com | +1 302 464 0950'
    },
    {
      title: 'AI Customer Support Bot',
      description: 'Intelligent customer support automation with natural language processing and 24/7 availability.',
      icon: '🤖',
      price: '$179/month',
      features: ['24/7 support', 'Natural language processing', 'Ticket management', 'Knowledge base', 'Multi-language support', 'Human handoff'],
      benefits: ['Reduce support costs by 70%', 'Improve response time', 'Increase customer satisfaction', 'Handle 80% of queries automatically'],
      marketPrice: '$300-600/month',
      category: 'Support Tools',
      technologies: ['OpenAI GPT', 'Custom AI Models', 'React', 'Node.js', 'WebSocket'],
      contactInfo: 'Contact: kleber@ziontechgroup.com | +1 302 464 0950'
    }
  ], []);

  const categories = ['All', 'Developer Tools', 'Marketing Tools', 'Analytics Tools', 'Content Tools', 'Support Tools'];

  const filteredServices = useMemo(() => {
    return microSAASServices.filter(service => {
      const matchesSearch = service.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                           service.description.toLowerCase().includes(searchTerm.toLowerCase());
      const matchesCategory = selectedCategory === 'All' || service.category === selectedCategory;
      return matchesSearch && matchesCategory;
    });
  }, [microSAASServices, searchTerm, selectedCategory]);

  const stats = [
    { icon: Users, label: 'Active Users', value: '10,000+' },
    { icon: TrendingUp, label: 'Growth Rate', value: '300%' },
    { icon: Star, label: 'Customer Rating', value: '4.9/5' },
    { icon: Globe, label: 'Countries', value: '50+' }
  ];

  return (
    <>
      <Helmet>
        <title>Micro SAAS Solutions - 50+ AI-Powered Tools | Zion Tech Group</title>
        <meta name="description" content="Discover our comprehensive suite of 50+ AI-powered micro SAAS tools. From developer tools to marketing automation, boost your productivity with our cutting-edge solutions." />
        <meta name="keywords" content="micro saas, ai tools, productivity tools, developer tools, marketing automation, business tools" />
        <link rel="canonical" href="https://ziontechgroup.com/micro-saas" />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 cyber-grid neural-network-bg">
        <div className="container mx-auto px-4 py-16 pt-24">
          {/* Header Section */}
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 holographic-text cyber-text">
              Micro SAAS Solutions
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              50+ AI-powered tools designed to supercharge your productivity and transform your business operations
            </p>
            
            {/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto mb-12">
              {stats.map((stat, index) => (
                <div key={index} className="cyber-card p-4 text-center">
                  <stat.icon className="w-8 h-8 text-cyan-400 mx-auto mb-2" />
                  <div className="text-2xl font-bold text-white">{stat.value}</div>
                  <div className="text-sm text-gray-400">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Search and Filter */}
          <div className="mb-12">
            <div className="flex flex-col md:flex-row gap-4 mb-6">
              <div className="flex-1 relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <input
                  type="text"
                  placeholder="Search tools..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-10 pr-4 py-3 bg-gray-800 border border-gray-600 rounded-lg text-white focus:outline-none focus:border-cyan-400"
                />
              </div>
              <div className="flex gap-2">
                <select
                  value={selectedCategory}
                  onChange={(e) => setSelectedCategory(e.target.value)}
                  className="px-4 py-3 bg-gray-800 border border-gray-600 rounded-lg text-white focus:outline-none focus:border-cyan-400"
                >
                  {categories.map(category => (
                    <option key={category} value={category}>{category}</option>
                  ))}
                </select>
                <select
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value)}
                  className="px-4 py-3 bg-gray-800 border border-gray-600 rounded-lg text-white focus:outline-none focus:border-cyan-400"
                >
                  <option value="popularity">Most Popular</option>
                  <option value="price-low">Price: Low to High</option>
                  <option value="price-high">Price: High to Low</option>
                  <option value="name">Name A-Z</option>
                </select>
              </div>
            </div>
          </div>

          {/* Services Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {filteredServices.map((service, index) => (
              <MicroSAASCard key={index} service={service} />
            ))}
          </div>

          {/* CTA Section */}
          <div className="text-center bg-gradient-to-r from-purple-600/20 to-blue-600/20 rounded-lg p-8 cyber-card">
            <h2 className="text-3xl font-bold text-white mb-4">Need a Custom Solution?</h2>
            <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
              We can create a custom micro SAAS tool tailored to your specific business needs. 
              Get a personalized solution that integrates seamlessly with your existing workflow.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="mailto:kleber@ziontechgroup.com"
                className="cyber-button inline-flex items-center"
              >
                <Mail className="w-4 h-4 mr-2" />
                Get Custom Quote
              </a>
              <a
                href="tel:+13024640950"
                className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-indigo-600 transition-all duration-300 inline-flex items-center"
              >
                <Phone className="w-4 h-4 mr-2" />
                Call: (302) 464-0950
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default MicroSAASPage;
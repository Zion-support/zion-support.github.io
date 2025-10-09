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
category: 'Content Strategy',
      technologies: ['Content APIs', 'React', 'Node.js', 'Analytics', 'Custom AI Models']
    },
    {
      title: 'Smart Technical SEO Auditor',
      description: 'AI-powered technical SEO auditing with issue detection and optimization recommendations.',
      icon: '🔧',
      price: '$199/month',
      features: ['Technical SEO audit', 'Issue detection', 'Optimization recommendations', 'Monitoring', 'Reporting'],
      benefits: ['Identify technical issues', 'Improve SEO performance', 'Prevent ranking drops'],
      marketPrice: '$300-600/month',
      category: 'Technical SEO',
      technologies: ['SEO APIs', 'React', 'Node.js', 'Monitoring Tools', 'Custom AI Models']
    },
    {
      title: 'AI-Powered E-commerce SEO Optimizer',
      description: 'Intelligent e-commerce SEO optimization with product page optimization and category management.',
      icon: '🛒',
      price: '$249/month',
      features: ['Product page optimization', 'Category management', 'Schema markup', 'Image optimization', 'Performance tracking'],
      benefits: ['Improve e-commerce SEO', 'Increase product visibility', 'Boost online sales'],
      marketPrice: '$400-800/month',
      category: 'E-commerce SEO',
      technologies: ['E-commerce APIs', 'React', 'Node.js', 'SEO Tools', 'Custom AI Models']
    },
    {
      title: 'Smart Voice Search Optimizer',
      description: 'AI-powered voice search optimization with conversational content and featured snippet optimization.',
      icon: '🎤',
      price: '$149/month',
      features: ['Voice search optimization', 'Conversational content', 'Featured snippet optimization', 'Local voice search', 'Analytics'],
      benefits: ['Optimize for voice search', 'Capture featured snippets', 'Improve local visibility'],
      marketPrice: '$250-500/month',
      category: 'Voice Search SEO',
      technologies: ['Voice Search APIs', 'React', 'Node.js', 'NLP', 'Custom AI Models']
    },
    {
      title: 'AI-Powered Video SEO Optimizer',
      description: 'Intelligent video SEO optimization with YouTube optimization and video content analysis.',
      icon: '🎬',
      price: '$179/month',
      features: ['Video SEO optimization', 'YouTube optimization', 'Video content analysis', 'Thumbnail optimization', 'Performance tracking'],
      benefits: ['Improve video visibility', 'Increase video traffic', 'Optimize video content'],
      marketPrice: '$300-600/month',
      category: 'Video SEO',
      technologies: ['Video APIs', 'React', 'Node.js', 'YouTube APIs', 'Custom AI Models']
    },
    {
      title: 'Smart Featured Snippet Optimizer',
      description: 'AI-powered featured snippet optimization with content analysis and ranking improvements.',
      icon: '📋',
      price: '$129/month',
      features: ['Featured snippet optimization', 'Content analysis', 'Ranking improvements', 'Competitor analysis', 'Monitoring'],
      benefits: ['Capture featured snippets', 'Improve search visibility', 'Increase click-through rates'],
      marketPrice: '$200-400/month',
      category: 'Featured Snippets',
      technologies: ['SEO APIs', 'React', 'Node.js', 'Content Analysis', 'Custom AI Models']
    },
    {
      title: 'AI-Powered Image SEO Optimizer',
      description: 'Intelligent image SEO optimization with alt text generation and image performance analysis.',
      icon: '🖼️',
      price: '$99/month',
      features: ['Image SEO optimization', 'Alt text generation', 'Image performance analysis', 'Bulk optimization', 'Quality scoring'],
      benefits: ['Improve image SEO', 'Increase image traffic', 'Optimize image performance'],
      marketPrice: '$150-300/month',
      category: 'Image SEO',
      technologies: ['Image APIs', 'React', 'Node.js', 'Computer Vision', 'Custom AI Models']
    },
    {
      title: 'Smart International SEO Manager',
      description: 'AI-powered international SEO management with hreflang optimization and multi-language content.',
      icon: '🌍',
      price: '$199/month',
      features: ['International SEO management', 'Hreflang optimization', 'Multi-language content', 'Geographic targeting', 'Performance tracking'],
      benefits: ['Optimize for international markets', 'Improve global visibility', 'Manage multi-language sites'],
      marketPrice: '$300-600/month',
      category: 'International SEO',
      technologies: ['International APIs', 'React', 'Node.js', 'Translation APIs', 'Custom AI Models']
    },
    {
      title: 'AI-Powered SEO Reporting Dashboard',
      description: 'Intelligent SEO reporting with automated insights and performance tracking across all channels.',
      icon: '📊',
      price: '$149/month',
      features: ['Automated SEO reporting', 'Performance tracking', 'Insight generation', 'Custom dashboards', 'Multi-channel analysis'],
      benefits: ['Track SEO performance', 'Generate insights', 'Make data-driven decisions'],
      marketPrice: '$250-500/month',
      category: 'SEO Reporting',
      technologies: ['Analytics APIs', 'React', 'Node.js', 'Dashboard Tools', 'Custom AI Models']
    },
    // Additional Real Micro SAAS Services
    {
      title: 'AI Invoice Generator Pro',
      description: 'Automatically generate professional invoices, track payments, and manage billing with AI-powered smart categorization.',
      icon: '📄',
      price: '$39/month',
      features: ['Auto invoice generation', 'Payment tracking', 'Smart categorization', 'Multi-currency support', 'PDF export', 'Client portal'],
      benefits: ['Save 10+ hours/month', 'Reduce billing errors', 'Faster payments', 'Professional appearance'],
      marketPrice: '$79-150/month',
      category: 'Finance & Billing',
      technologies: ['React', 'Node.js', 'PDF Generation', 'Payment APIs', 'AI Classification'],
      contactInfo: 'Contact: kleber@ziontechgroup.com | +1 302 464 0950',
      link: 'https://ziontechgroup.com/ai-invoice-generator',
      popular: true
    },
    {
      title: 'Smart Meeting Scheduler AI',
      description: 'Intelligent meeting scheduling that finds optimal times, handles timezone conflicts, and sends automated reminders.',
      icon: '📅',
      price: '$29/month',
      features: ['Smart scheduling', 'Timezone handling', 'Calendar integration', 'Auto reminders', 'Meeting analytics', 'Team coordination'],
      benefits: ['Reduce scheduling time by 80%', 'Eliminate double bookings', 'Improve attendance rates', 'Save 5+ hours/week'],
      marketPrice: '$59-120/month',
      category: 'Productivity',
      technologies: ['Calendar APIs', 'AI Optimization', 'React', 'Node.js', 'Email Automation'],
      contactInfo: 'Contact: kleber@ziontechgroup.com | +1 302 464 0950',
      link: 'https://ziontechgroup.com/smart-scheduler'
    },
    {
      title: 'AI Document Analyzer',
      description: 'Extract key information from documents, contracts, and forms using advanced AI text analysis and data extraction.',
      icon: '📋',
      price: '$79/month',
      features: ['Document parsing', 'Data extraction', 'Contract analysis', 'Form processing', 'OCR capabilities', 'Export to databases'],
      benefits: ['Process documents 10x faster', 'Reduce manual data entry', 'Improve accuracy', 'Save 20+ hours/week'],
      marketPrice: '$150-300/month',
      category: 'Document Management',
      technologies: ['OCR APIs', 'NLP Models', 'React', 'Node.js', 'Database Integration'],
      contactInfo: 'Contact: kleber@ziontechgroup.com | +1 302 464 0950',
      link: 'https://ziontechgroup.com/document-analyzer'
    },
    {
      title: 'AI Customer Feedback Analyzer',
      description: 'Analyze customer feedback, reviews, and surveys to extract actionable insights and sentiment analysis.',
      icon: '💬',
      price: '$49/month',
      features: ['Sentiment analysis', 'Topic extraction', 'Trend identification', 'Report generation', 'Multi-language support', 'Real-time monitoring'],
      benefits: ['Understand customer needs', 'Improve products/services', 'Increase satisfaction', 'Make data-driven decisions'],
      marketPrice: '$99-200/month',
      category: 'Customer Analytics',
      technologies: ['NLP APIs', 'Sentiment Analysis', 'React', 'Node.js', 'Analytics Dashboard'],
      contactInfo: 'Contact: kleber@ziontechgroup.com | +1 302 464 0950',
      link: 'https://ziontechgroup.com/feedback-analyzer'
    },
    {
      title: 'Smart Inventory Manager',
      description: 'AI-powered inventory management with demand forecasting, automated reordering, and stock optimization.',
      icon: '📦',
      price: '$99/month',
      features: ['Demand forecasting', 'Auto reordering', 'Stock optimization', 'Barcode scanning', 'Multi-location support', 'Analytics dashboard'],
      benefits: ['Reduce stockouts by 60%', 'Lower inventory costs', 'Improve cash flow', 'Save 15+ hours/week'],
      marketPrice: '$199-400/month',
      category: 'Inventory Management',
      technologies: ['Machine Learning', 'React', 'Node.js', 'Barcode APIs', 'Database Systems'],
      contactInfo: 'Contact: kleber@ziontechgroup.com | +1 302 464 0950',
      link: 'https://ziontechgroup.com/inventory-manager',
      popular: true
    },
    {
      title: 'AI Lead Scoring Engine',
      description: 'Automatically score and prioritize leads using AI to identify the most promising prospects for your sales team.',
      icon: '🎯',
      price: '$69/month',
      features: ['Lead scoring', 'Behavioral analysis', 'Predictive modeling', 'CRM integration', 'Custom scoring rules', 'Performance tracking'],
      benefits: ['Increase conversion by 40%', 'Focus on hot leads', 'Improve sales efficiency', 'Boost revenue'],
      marketPrice: '$149-300/month',
      category: 'Sales & Marketing',
      technologies: ['Machine Learning', 'CRM APIs', 'React', 'Node.js', 'Analytics'],
      contactInfo: 'Contact: kleber@ziontechgroup.com | +1 302 464 0950',
      link: 'https://ziontechgroup.com/lead-scoring'
    },
    {
      title: 'AI Expense Tracker Pro',
      description: 'Smart expense tracking with receipt scanning, automatic categorization, and compliance reporting.',
      icon: '💰',
      price: '$19/month',
      features: ['Receipt scanning', 'Auto categorization', 'Compliance reporting', 'Multi-currency', 'Tax preparation', 'Team management'],
      benefits: ['Save 8+ hours/month', 'Reduce errors', 'Improve compliance', 'Easier tax filing'],
      marketPrice: '$39-80/month',
      category: 'Finance & Billing',
      technologies: ['OCR Technology', 'React', 'Node.js', 'Tax APIs', 'Mobile App'],
      contactInfo: 'Contact: kleber@ziontechgroup.com | +1 302 464 0950',
      link: 'https://ziontechgroup.com/expense-tracker'
    },
    {
      title: 'Smart Password Manager',
      description: 'AI-powered password management with security analysis, breach monitoring, and automated password generation.',
      icon: '🔐',
      price: '$15/month',
      features: ['Password generation', 'Security analysis', 'Breach monitoring', 'Multi-device sync', 'Team sharing', '2FA integration'],
      benefits: ['Improve security', 'Reduce password fatigue', 'Prevent breaches', 'Easy team management'],
      marketPrice: '$30-60/month',
      category: 'Security',
      technologies: ['Encryption', 'React', 'Node.js', 'Security APIs', 'Mobile Apps'],
      contactInfo: 'Contact: kleber@ziontechgroup.com | +1 302 464 0950',
      link: 'https://ziontechgroup.com/password-manager'
    },
    {
      title: 'AI Time Tracking Assistant',
      description: 'Intelligent time tracking with automatic project detection, productivity insights, and team performance analytics.',
      icon: '⏰',
      price: '$25/month',
      features: ['Auto time tracking', 'Project detection', 'Productivity insights', 'Team analytics', 'Integration support', 'Reporting'],
      benefits: ['Accurate time tracking', 'Identify productivity patterns', 'Improve team efficiency', 'Better project management'],
      marketPrice: '$49-100/month',
      category: 'Productivity',
      technologies: ['AI Detection', 'React', 'Node.js', 'Analytics', 'Integration APIs'],
      contactInfo: 'Contact: kleber@ziontechgroup.com | +1 302 464 0950',
      link: 'https://ziontechgroup.com/time-tracking'
    },
    {
      title: 'AI Website Builder',
      description: 'Create professional websites automatically using AI with custom designs, content generation, and SEO optimization.',
      icon: '🌐',
      price: '$79/month',
      features: ['AI design generation', 'Content creation', 'SEO optimization', 'Mobile responsive', 'E-commerce integration', 'Analytics'],
      benefits: ['Build websites 5x faster', 'Professional designs', 'SEO optimized', 'No coding required'],
      marketPrice: '$149-300/month',
      category: 'Web Development',
      technologies: ['AI Design', 'React', 'Node.js', 'SEO Tools', 'E-commerce APIs'],
      contactInfo: 'Contact: kleber@ziontechgroup.com | +1 302 464 0950',
      link: 'https://ziontechgroup.com/website-builder',
      popular: true
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
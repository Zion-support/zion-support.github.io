'use client';
import React, { useState, useMemo } from 'react';
import { Helmet } from 'react-helmet-async';
import { Search, Filter, Star, Zap, Shield, Clock, Users, TrendingUp, Globe, Brain, Cpu, Target, BarChart, MessageSquare, Eye, Sparkles, ArrowRight, Phone, Mail, MapPin, CheckCircle, DollarSign, Award, Rocket } from 'lucide-react';
import MicroSAASCard from '../components/MicroSAASCard';

const MicroSAASPage: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [sortBy, setSortBy] = useState('popularity');

  const microSAASServices = useMemo(() => [
    // Featured AI-Powered Services
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
      popular: true,
      savings: 'Save $60-210/month'
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
      popular: true,
      savings: 'Save $100-400/month'
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
      popular: true,
      savings: 'Save $100-350/month'
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
      contactInfo: 'Contact: kleber@ziontechgroup.com | +1 302 464 0950',
      savings: 'Save $70-270/month'
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
      contactInfo: 'Contact: kleber@ziontechgroup.com | +1 302 464 0950',
      savings: 'Save $50-200/month'
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
      contactInfo: 'Contact: kleber@ziontechgroup.com | +1 302 464 0950',
      savings: 'Save $120-420/month'
    },
    // Real Estate & Property Management
    {
      title: 'AI Property Valuation Platform',
      description: 'Advanced property valuation using machine learning and market data analysis with automated reports.',
      icon: '🏠',
      price: '$199/month',
      features: ['Property valuation', 'Market analysis', 'Investment scoring', 'Rental yield prediction', 'Location insights', 'Trend analysis'],
      benefits: ['Make better investment decisions', 'Save 20+ hours on research', 'Increase ROI by 25%', 'Identify opportunities'],
      marketPrice: '$300-600/month',
      category: 'Real Estate',
      technologies: ['Machine Learning', 'Zillow API', 'React', 'Python', 'PostgreSQL'],
      contactInfo: 'Contact: kleber@ziontechgroup.com | +1 302 464 0950',
      savings: 'Save $100-400/month'
    },
    {
      title: 'AI Tenant Screening Platform',
      description: 'Intelligent tenant screening with credit analysis, background checks, and rental history verification.',
      icon: '🔍',
      price: '$149/month',
      features: ['Credit analysis', 'Background checks', 'Rental history', 'Income verification', 'Risk scoring', 'Automated screening'],
      benefits: ['Reduce bad tenants by 40%', 'Streamline screening process', 'Lower vacancy rates', 'Improve tenant quality'],
      marketPrice: '$200-400/month',
      category: 'Property Management',
      technologies: ['Machine Learning', 'Credit APIs', 'React', 'Node.js', 'PostgreSQL'],
      contactInfo: 'Contact: kleber@ziontechgroup.com | +1 302 464 0950',
      savings: 'Save $50-250/month'
    },
    // Agriculture & Food Tech
    {
      title: 'AI Crop Monitoring System',
      description: 'Smart agriculture solution with crop health monitoring, yield prediction, and automated irrigation control.',
      icon: '🌾',
      price: '$299/month',
      features: ['Crop health monitoring', 'Yield prediction', 'Irrigation control', 'Pest detection', 'Weather integration', 'Farm analytics'],
      benefits: ['Increase yield by 20%', 'Reduce water usage by 30%', 'Early pest detection', 'Optimize farming practices'],
      marketPrice: '$400-800/month',
      category: 'Agriculture',
      technologies: ['Computer Vision', 'IoT', 'Machine Learning', 'React', 'PostgreSQL'],
      contactInfo: 'Contact: kleber@ziontechgroup.com | +1 302 464 0950',
      savings: 'Save $100-500/month'
    },
    {
      title: 'AI Food Safety Inspector',
      description: 'Automated food safety monitoring with contamination detection, temperature tracking, and compliance reporting.',
      icon: '🍎',
      price: '$199/month',
      features: ['Contamination detection', 'Temperature monitoring', 'Compliance reporting', 'Quality control', 'Traceability', 'Alert system'],
      benefits: ['Prevent foodborne illnesses', 'Ensure compliance', 'Reduce waste', 'Improve food safety'],
      marketPrice: '$300-600/month',
      category: 'Food Safety',
      technologies: ['Computer Vision', 'IoT Sensors', 'Machine Learning', 'React', 'PostgreSQL'],
      contactInfo: 'Contact: kleber@ziontechgroup.com | +1 302 464 0950',
      savings: 'Save $100-400/month'
    },
    // Transportation & Logistics
    {
      title: 'AI Route Optimization Pro',
      description: 'Intelligent route planning with traffic analysis, fuel optimization, and delivery time prediction.',
      icon: '🚛',
      price: '$249/month',
      features: ['Route optimization', 'Traffic analysis', 'Fuel optimization', 'Delivery tracking', 'Fleet management', 'Cost analysis'],
      benefits: ['Reduce fuel costs by 25%', 'Improve delivery times', 'Optimize fleet usage', 'Lower operational costs'],
      marketPrice: '$400-800/month',
      category: 'Logistics',
      technologies: ['Machine Learning', 'Maps API', 'React', 'Node.js', 'PostgreSQL'],
      contactInfo: 'Contact: kleber@ziontechgroup.com | +1 302 464 0950',
      savings: 'Save $150-550/month'
    },
    {
      title: 'AI Fleet Maintenance Predictor',
      description: 'Predictive maintenance for vehicles with failure prediction, maintenance scheduling, and cost optimization.',
      icon: '🔧',
      price: '$179/month',
      features: ['Failure prediction', 'Maintenance scheduling', 'Cost optimization', 'Performance monitoring', 'Alert system', 'Parts management'],
      benefits: ['Prevent breakdowns', 'Reduce maintenance costs', 'Extend vehicle life', 'Improve reliability'],
      marketPrice: '$250-500/month',
      category: 'Fleet Management',
      technologies: ['IoT', 'Machine Learning', 'React', 'Node.js', 'PostgreSQL'],
      contactInfo: 'Contact: kleber@ziontechgroup.com | +1 302 464 0950',
      savings: 'Save $70-320/month'
    },
    // Energy & Sustainability
    {
      title: 'AI Energy Management System',
      description: 'Smart energy optimization with consumption analysis, renewable energy integration, and cost reduction.',
      icon: '⚡',
      price: '$199/month',
      features: ['Energy consumption analysis', 'Renewable integration', 'Cost optimization', 'Demand forecasting', 'Carbon tracking', 'Smart grid'],
      benefits: ['Reduce energy costs by 30%', 'Lower carbon footprint', 'Optimize renewable usage', 'Improve sustainability'],
      marketPrice: '$300-600/month',
      category: 'Energy Management',
      technologies: ['IoT', 'Machine Learning', 'React', 'Node.js', 'PostgreSQL'],
      contactInfo: 'Contact: kleber@ziontechgroup.com | +1 302 464 0950',
      savings: 'Save $100-400/month'
    },
    {
      title: 'AI Carbon Footprint Tracker',
      description: 'Automated carbon footprint calculation with sustainability reporting and reduction recommendations.',
      icon: '🌱',
      price: '$99/month',
      features: ['Carbon calculation', 'Sustainability reporting', 'Reduction recommendations', 'Goal tracking', 'Industry benchmarking', 'Certification'],
      benefits: ['Track environmental impact', 'Meet sustainability goals', 'Improve brand reputation', 'Reduce costs'],
      marketPrice: '$150-300/month',
      category: 'Sustainability',
      technologies: ['Machine Learning', 'React', 'Node.js', 'PostgreSQL', 'Environmental APIs'],
      contactInfo: 'Contact: kleber@ziontechgroup.com | +1 302 464 0950',
      savings: 'Save $50-200/month'
    },
    // Entertainment & Media
    {
      title: 'AI Content Moderation Suite',
      description: 'Automated content moderation with inappropriate content detection, hate speech filtering, and community management.',
      icon: '🛡️',
      price: '$299/month',
      features: ['Content detection', 'Hate speech filtering', 'Image moderation', 'Video analysis', 'Community management', 'Custom rules'],
      benefits: ['Reduce moderation costs by 70%', 'Improve user safety', 'Scale content review', 'Maintain brand reputation'],
      marketPrice: '$400-800/month',
      category: 'Content Moderation',
      technologies: ['Computer Vision', 'NLP', 'Machine Learning', 'React', 'PostgreSQL'],
      contactInfo: 'Contact: kleber@ziontechgroup.com | +1 302 464 0950',
      savings: 'Save $100-500/month'
    },
    {
      title: 'AI Video Editor Pro',
      description: 'Automated video editing with AI-powered cuts, transitions, music sync, and content optimization.',
      icon: '🎬',
      price: '$149/month',
      features: ['Auto editing', 'Music sync', 'Transition effects', 'Color correction', 'Audio enhancement', 'Export optimization'],
      benefits: ['Create videos 10x faster', 'Professional quality', 'Reduce editing costs', 'Scale video production'],
      marketPrice: '$200-400/month',
      category: 'Video Production',
      technologies: ['Computer Vision', 'Audio Processing', 'Machine Learning', 'React', 'FFmpeg'],
      contactInfo: 'Contact: kleber@ziontechgroup.com | +1 302 464 0950',
      savings: 'Save $50-250/month'
    },
    // Security & Surveillance
    {
      title: 'AI Security Camera System',
      description: 'Intelligent surveillance with facial recognition, threat detection, and automated alert systems.',
      icon: '📹',
      price: '$199/month',
      features: ['Facial recognition', 'Threat detection', 'Motion analysis', 'Alert system', 'Cloud storage', 'Mobile app'],
      benefits: ['Improve security', 'Reduce false alarms', 'Remote monitoring', 'Cost-effective surveillance'],
      marketPrice: '$300-600/month',
      category: 'Security',
      technologies: ['Computer Vision', 'Facial Recognition', 'React', 'Node.js', 'PostgreSQL'],
      contactInfo: 'Contact: kleber@ziontechgroup.com | +1 302 464 0950',
      savings: 'Save $100-400/month'
    },
    {
      title: 'AI Fraud Detection Engine',
      description: 'Advanced fraud detection with real-time analysis, pattern recognition, and risk scoring.',
      icon: '🔒',
      price: '$249/month',
      features: ['Real-time analysis', 'Pattern recognition', 'Risk scoring', 'Transaction monitoring', 'Alert system', 'Machine learning'],
      benefits: ['Prevent fraud losses', 'Reduce false positives', 'Improve security', 'Protect customers'],
      marketPrice: '$400-800/month',
      category: 'Fraud Prevention',
      technologies: ['Machine Learning', 'Real-time Processing', 'React', 'Node.js', 'PostgreSQL'],
      contactInfo: 'Contact: kleber@ziontechgroup.com | +1 302 464 0950',
      savings: 'Save $150-550/month'
    },
    // Research & Development
    {
      title: 'AI Research Assistant Pro',
      description: 'Intelligent research platform with literature review, data analysis, and hypothesis generation.',
      icon: '🔬',
      price: '$199/month',
      features: ['Literature review', 'Data analysis', 'Hypothesis generation', 'Citation management', 'Collaboration tools', 'Publication tracking'],
      benefits: ['Accelerate research', 'Improve accuracy', 'Save time', 'Enhance collaboration'],
      marketPrice: '$300-600/month',
      category: 'Research',
      technologies: ['NLP', 'Machine Learning', 'React', 'Python', 'PostgreSQL'],
      contactInfo: 'Contact: kleber@ziontechgroup.com | +1 302 464 0950',
      savings: 'Save $100-400/month'
    },
    {
      title: 'AI Patent Search Engine',
      description: 'Intelligent patent search with prior art analysis, patentability assessment, and competitive intelligence.',
      icon: '📋',
      price: '$299/month',
      features: ['Patent search', 'Prior art analysis', 'Patentability assessment', 'Competitive intelligence', 'Citation analysis', 'Trend tracking'],
      benefits: ['Find relevant patents', 'Assess patentability', 'Avoid infringement', 'Competitive advantage'],
      marketPrice: '$400-800/month',
      category: 'Intellectual Property',
      technologies: ['NLP', 'Machine Learning', 'React', 'Python', 'Patent APIs'],
      contactInfo: 'Contact: kleber@ziontechgroup.com | +1 302 464 0950',
      savings: 'Save $100-500/month'
    },
    // Compliance & Legal
    {
      title: 'AI Compliance Monitoring Suite',
      description: 'Automated compliance monitoring with regulatory updates, risk assessment, and audit preparation.',
      icon: '📜',
      price: '$299/month',
      features: ['Regulatory monitoring', 'Risk assessment', 'Audit preparation', 'Policy management', 'Training modules', 'Reporting'],
      benefits: ['Ensure compliance', 'Reduce audit time', 'Minimize risks', 'Stay updated on regulations'],
      marketPrice: '$500-1000/month',
      category: 'Compliance',
      technologies: ['NLP', 'Machine Learning', 'React', 'Node.js', 'PostgreSQL'],
      contactInfo: 'Contact: kleber@ziontechgroup.com | +1 302 464 0950',
      savings: 'Save $200-700/month'
    },
    // HR & Recruitment
    {
      title: 'AI HR Recruitment Suite',
      description: 'Intelligent resume screening, candidate matching, interview scheduling, and onboarding automation.',
      icon: '👥',
      price: '$179/month',
      features: ['Resume parsing', 'Candidate matching', 'Interview scheduling', 'Onboarding automation', 'Skills assessment', 'Background checks'],
      benefits: ['Reduce hiring time by 50%', 'Improve candidate quality', 'Eliminate bias', 'Streamline recruitment'],
      marketPrice: '$250-500/month',
      category: 'HR & Recruitment',
      technologies: ['NLP', 'Machine Learning', 'React', 'Node.js', 'PostgreSQL'],
      contactInfo: 'Contact: kleber@ziontechgroup.com | +1 302 464 0950',
      savings: 'Save $70-320/month'
    },
    {
      title: 'AI Employee Performance Tracker',
      description: 'Comprehensive performance monitoring with goal tracking, feedback analysis, and development recommendations.',
      icon: '📈',
      price: '$129/month',
      features: ['Performance tracking', 'Goal management', 'Feedback analysis', 'Development plans', 'Team analytics', 'Recognition system'],
      benefits: ['Improve performance by 30%', 'Increase engagement', 'Identify top performers', 'Reduce turnover'],
      marketPrice: '$200-400/month',
      category: 'HR & Recruitment',
      technologies: ['Machine Learning', 'React', 'Node.js', 'PostgreSQL', 'Analytics'],
      contactInfo: 'Contact: kleber@ziontechgroup.com | +1 302 464 0950',
      savings: 'Save $70-270/month'
    },
    // Project Management
    {
      title: 'AI Project Manager Pro',
      description: 'Intelligent project management with automated scheduling, resource optimization, and risk prediction.',
      icon: '📋',
      price: '$199/month',
      features: ['Automated scheduling', 'Resource optimization', 'Risk prediction', 'Progress tracking', 'Team collaboration', 'Budget management'],
      benefits: ['Complete projects 25% faster', 'Reduce costs by 20%', 'Improve team productivity', 'Minimize risks'],
      marketPrice: '$300-600/month',
      category: 'Project Management',
      technologies: ['Machine Learning', 'React', 'Node.js', 'PostgreSQL', 'Calendar APIs'],
      contactInfo: 'Contact: kleber@ziontechgroup.com | +1 302 464 0950',
      savings: 'Save $100-400/month'
    },
    // E-commerce & Retail
    {
      title: 'AI Inventory Optimizer',
      description: 'Smart inventory management with demand forecasting, automated reordering, and waste reduction.',
      icon: '📦',
      price: '$179/month',
      features: ['Demand forecasting', 'Automated reordering', 'Waste reduction', 'Price optimization', 'Supplier management', 'Analytics'],
      benefits: ['Reduce inventory costs by 30%', 'Minimize stockouts', 'Optimize pricing', 'Improve cash flow'],
      marketPrice: '$250-500/month',
      category: 'E-commerce',
      technologies: ['Machine Learning', 'React', 'Node.js', 'PostgreSQL', 'Inventory APIs'],
      contactInfo: 'Contact: kleber@ziontechgroup.com | +1 302 464 0950',
      savings: 'Save $70-320/month'
    },
    {
      title: 'AI Customer Behavior Analyzer',
      description: 'Advanced customer analytics with purchase prediction, churn analysis, and personalized recommendations.',
      icon: '🛒',
      price: '$149/month',
      features: ['Purchase prediction', 'Churn analysis', 'Personalized recommendations', 'Customer segmentation', 'Lifetime value', 'A/B testing'],
      benefits: ['Increase sales by 35%', 'Reduce churn by 40%', 'Improve customer satisfaction', 'Optimize marketing spend'],
      marketPrice: '$200-400/month',
      category: 'E-commerce',
      technologies: ['Machine Learning', 'React', 'Node.js', 'PostgreSQL', 'Analytics'],
      contactInfo: 'Contact: kleber@ziontechgroup.com | +1 302 464 0950',
      savings: 'Save $50-250/month'
    },
    // Healthcare & Medical
    {
      title: 'AI Medical Image Analyzer',
      description: 'Advanced medical image analysis with disease detection, diagnosis assistance, and treatment recommendations.',
      icon: '🏥',
      price: '$399/month',
      features: ['Disease detection', 'Diagnosis assistance', 'Treatment recommendations', 'Image enhancement', 'Report generation', 'Integration'],
      benefits: ['Improve diagnostic accuracy', 'Reduce analysis time', 'Early disease detection', 'Better patient outcomes'],
      marketPrice: '$600-1200/month',
      category: 'Healthcare',
      technologies: ['Computer Vision', 'Deep Learning', 'React', 'Python', 'DICOM'],
      contactInfo: 'Contact: kleber@ziontechgroup.com | +1 302 464 0950',
      savings: 'Save $200-800/month'
    },
    {
      title: 'AI Drug Discovery Platform',
      description: 'Intelligent drug discovery with molecular analysis, compound screening, and toxicity prediction.',
      icon: '💊',
      price: '$499/month',
      features: ['Molecular analysis', 'Compound screening', 'Toxicity prediction', 'Drug interaction', 'Clinical trials', 'Regulatory compliance'],
      benefits: ['Accelerate drug development', 'Reduce costs', 'Improve success rates', 'Faster time to market'],
      marketPrice: '$800-1500/month',
      category: 'Healthcare',
      technologies: ['Machine Learning', 'Bioinformatics', 'React', 'Python', 'PostgreSQL'],
      contactInfo: 'Contact: kleber@ziontechgroup.com | +1 302 464 0950',
      savings: 'Save $300-1000/month'
    },
    // Financial Services
    {
      title: 'AI Trading Algorithm Suite',
      description: 'Advanced trading algorithms with market analysis, risk management, and automated execution.',
      icon: '📈',
      price: '$299/month',
      features: ['Market analysis', 'Risk management', 'Automated execution', 'Portfolio optimization', 'Backtesting', 'Real-time alerts'],
      benefits: ['Improve trading performance', 'Reduce emotional trading', 'Optimize risk-return', '24/7 market monitoring'],
      marketPrice: '$500-1000/month',
      category: 'Financial Services',
      technologies: ['Machine Learning', 'Quantitative Analysis', 'React', 'Python', 'Trading APIs'],
      contactInfo: 'Contact: kleber@ziontechgroup.com | +1 302 464 0950',
      savings: 'Save $200-700/month'
    },
    {
      title: 'AI Credit Risk Assessor',
      description: 'Intelligent credit risk assessment with borrower analysis, default prediction, and loan optimization.',
      icon: '💳',
      price: '$249/month',
      features: ['Borrower analysis', 'Default prediction', 'Loan optimization', 'Credit scoring', 'Portfolio management', 'Regulatory compliance'],
      benefits: ['Reduce default rates', 'Improve loan approval', 'Optimize interest rates', 'Better risk management'],
      marketPrice: '$400-800/month',
      category: 'Financial Services',
      technologies: ['Machine Learning', 'Credit APIs', 'React', 'Python', 'PostgreSQL'],
      contactInfo: 'Contact: kleber@ziontechgroup.com | +1 302 464 0950',
      savings: 'Save $150-550/month'
    }
  ], []);

  const categories = [
    'All', 'Developer Tools', 'Marketing Tools', 'Analytics Tools', 'Content Tools', 
    'Support Tools', 'Real Estate', 'Property Management', 'Agriculture', 'Food Safety',
    'Logistics', 'Fleet Management', 'Energy Management', 'Sustainability', 'Content Moderation',
    'Video Production', 'Security', 'Fraud Prevention', 'Research', 'Intellectual Property',
    'Compliance', 'HR & Recruitment', 'Project Management', 'E-commerce', 'Healthcare', 'Financial Services'
  ];

  const filteredServices = useMemo(() => {
    return microSAASServices.filter(service => {
      const matchesSearch = service.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                           service.description.toLowerCase().includes(searchTerm.toLowerCase());
      const matchesCategory = selectedCategory === 'All' || service.category === selectedCategory;
      return matchesSearch && matchesCategory;
    });
  }, [microSAASServices, searchTerm, selectedCategory]);

  const stats = [
    { icon: Users, label: 'Active Users', value: '25,000+' },
    { icon: TrendingUp, label: 'Growth Rate', value: '400%' },
    { icon: Star, label: 'Customer Rating', value: '4.9/5' },
    { icon: Globe, label: 'Countries', value: '75+' },
    { icon: DollarSign, label: 'Avg Savings', value: '$200/month' },
    { icon: Award, label: 'Success Rate', value: '98%' }
  ];

  return (
    <>
      <Helmet>
        <title>Micro SAAS Solutions - Zion Tech Group</title>
        <meta name="description" content="Discover our comprehensive collection of AI-powered micro SAAS solutions. Real, useful services with competitive pricing and proven results." />
        <meta name="keywords" content="micro saas, ai solutions, business automation, software as a service, productivity tools" />
        <link rel="canonical" href="https://ziontechgroup.com/micro-saas" />
      </Helmet>
      
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 cyber-grid neural-network-bg">
        {/* Hero Section */}
        <section className="container mx-auto px-4 py-16 pt-24">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 holographic-text cyber-text glitch" data-text="Micro SAAS Solutions">
              Micro SAAS Solutions
            </h1>
            <p className="text-xl md:text-2xl text-cyan-400 mb-8 font-medium cyber-glow neon-text">
              Real, Useful, AI-Powered Business Solutions
            </p>
            <p className="text-base sm:text-lg md:text-xl text-gray-300 max-w-4xl mx-auto mb-8 leading-relaxed">
              Discover our comprehensive collection of micro SAAS solutions designed to transform your business operations. 
              Each service is built with cutting-edge AI technology and offers significant cost savings compared to market alternatives.
            </p>
            
            {/* Key Benefits */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto mb-12">
              <div className="cyber-card hologram-card p-6 hover:scale-105 transition-all duration-300">
                <div className="text-3xl mb-4">💰</div>
                <h3 className="font-bold text-white mb-3 text-lg">Cost Effective</h3>
                <p className="text-sm text-gray-300 leading-relaxed">Save 30-70% compared to market alternatives with our competitive pricing</p>
              </div>
              <div className="cyber-card hologram-card p-6 hover:scale-105 transition-all duration-300">
                <div className="text-3xl mb-4">⚡</div>
                <h3 className="font-bold text-white mb-3 text-lg">AI-Powered</h3>
                <p className="text-sm text-gray-300 leading-relaxed">Advanced AI technology for maximum efficiency and automation</p>
              </div>
              <div className="cyber-card hologram-card p-6 hover:scale-105 transition-all duration-300">
                <div className="text-3xl mb-4">🚀</div>
                <h3 className="font-bold text-white mb-3 text-lg">Proven Results</h3>
                <p className="text-sm text-gray-300 leading-relaxed">Real solutions with measurable business impact and ROI</p>
              </div>
            </div>
          </div>

          {/* Statistics */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 mb-16">
            {stats.map((stat, index) => (
              <div key={index} className="cyber-card hologram-card p-6 text-center hover:scale-105 transition-all duration-300">
                <stat.icon className="w-8 h-8 text-cyan-400 mx-auto mb-3" />
                <div className="text-2xl font-bold text-white mb-2">{stat.value}</div>
                <div className="text-sm text-gray-300">{stat.label}</div>
              </div>
            ))}
          </div>

          {/* Search and Filter */}
          <div className="max-w-4xl mx-auto mb-12">
            <div className="cyber-card hologram-card p-6">
              <div className="flex flex-col md:flex-row gap-4 mb-6">
                <div className="flex-1 relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                  <input
                    type="text"
                    placeholder="Search services..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="w-full pl-10 pr-4 py-3 bg-gray-800 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:border-transparent"
                  />
                </div>
                <div className="flex gap-4">
                  <select
                    value={selectedCategory}
                    onChange={(e) => setSelectedCategory(e.target.value)}
                    className="px-4 py-3 bg-gray-800 border border-gray-600 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:border-transparent"
                  >
                    {categories.map(category => (
                      <option key={category} value={category}>{category}</option>
                    ))}
                  </select>
                  <select
                    value={sortBy}
                    onChange={(e) => setSortBy(e.target.value)}
                    className="px-4 py-3 bg-gray-800 border border-gray-600 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:border-transparent"
                  >
                    <option value="popularity">Most Popular</option>
                    <option value="price-low">Price: Low to High</option>
                    <option value="price-high">Price: High to Low</option>
                    <option value="savings">Highest Savings</option>
                  </select>
                </div>
              </div>
              <div className="text-center">
                <p className="text-gray-300">
                  Showing {filteredServices.length} of {microSAASServices.length} services
                </p>
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
          <section className="text-center py-16">
            <div className="cyber-card hologram-card p-12 max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Ready to Transform Your Business?
              </h2>
              <p className="text-lg text-gray-300 mb-8">
                Get started with our micro SAAS solutions today and experience the power of AI-driven automation.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="tel:+13024640950"
                  className="cyber-button text-center"
                  aria-label="Call us at (302) 464-0950"
                >
                  📞 Call: (302) 464-0950
                </a>
                <a 
                  href="mailto:kleber@ziontechgroup.com"
                  className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-indigo-600 transition-all duration-300"
                >
                  📧 Email Us
                </a>
              </div>
              <div className="mt-8 text-sm text-gray-400">
                <p>📍 364 E Main St STE 1008, Middletown, DE 19709</p>
                <p>🌐 https://ziontechgroup.com</p>
              </div>
            </div>
          </section>
        </section>
      </div>
    </>
  );
};

export default MicroSAASPage;
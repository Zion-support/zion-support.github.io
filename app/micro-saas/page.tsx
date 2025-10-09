import { Helmet } from 'react-helmet-async';
import { Search, Filter, Star, Zap, Shield, Clock, Users, TrendingUp, Globe, Brain, Cpu, Target, BarChart, MessageSquare, Eye, Sparkles, ArrowRight, Phone, Mail, MapPin } from 'lucide-react';
import MicroSAASCard from '../components/MicroSAASCard';

const MicroSAASPage: React.FC = () => {
    },
    // NEW COMPREHENSIVE MICRO SAAS SERVICES
    // AI Productivity & Time Management
    {
      title: 'AI Time Tracking & Productivity Analyzer',
      description: 'Intelligent time tracking with productivity insights, distraction blocking, and work pattern analysis.',
      icon: '⏰',
      price: '$79/month',
      features: ['Automatic time tracking', 'Productivity analysis', 'Distraction blocking', 'Work pattern insights', 'Goal tracking', 'Team analytics'],
      benefits: ['Increase productivity by 25%', 'Identify time wasters', 'Optimize work patterns', 'Achieve goals faster'],
      marketPrice: '$120-250/month',
      category: 'Productivity',
      technologies: ['Machine Learning', 'Browser Extension', 'React', 'Node.js', 'PostgreSQL'],
      contactInfo: 'Contact: kleber@ziontechgroup.com | +1 302 464 0950'
    },
    {
      title: 'AI Task Management & Prioritization',
      description: 'Smart task management with AI-powered prioritization, deadline prediction, and workload balancing.',
      icon: '✅',
      price: '$89/month',
      features: ['Smart prioritization', 'Deadline prediction', 'Workload balancing', 'Team coordination', 'Progress tracking', 'Integration tools'],
      benefits: ['Complete tasks 30% faster', 'Never miss deadlines', 'Balance workload effectively', 'Improve team coordination'],
      marketPrice: '$150-300/month',
      category: 'Productivity',
      technologies: ['Machine Learning', 'React', 'Node.js', 'PostgreSQL', 'Calendar APIs'],
      contactInfo: 'Contact: kleber@ziontechgroup.com | +1 302 464 0950'
    },
    {
      title: 'AI Email Management & Prioritization',
      description: 'Intelligent email organization with smart filtering, priority scoring, and automated responses.',
      icon: '📧',
      price: '$69/month',
      features: ['Smart filtering', 'Priority scoring', 'Auto responses', 'Email scheduling', 'Follow-up reminders', 'Spam protection'],
      benefits: ['Reduce email overwhelm', 'Respond faster', 'Never miss important emails', 'Save 2+ hours daily'],
      marketPrice: '$100-200/month',
      category: 'Communication',
      technologies: ['NLP', 'Gmail API', 'Outlook API', 'React', 'Node.js'],
      contactInfo: 'Contact: kleber@ziontechgroup.com | +1 302 464 0950'
    },
    // AI HR & Recruitment
    {
      title: 'AI Resume Parser & Candidate Matcher',
      description: 'Intelligent resume analysis with candidate matching, skill assessment, and interview scheduling.',
      icon: '👔',
      price: '$199/month',
      features: ['Resume parsing', 'Candidate matching', 'Skill assessment', 'Interview scheduling', 'Background checks', 'Onboarding automation'],
      benefits: ['Reduce hiring time by 50%', 'Find better candidates', 'Eliminate bias', 'Streamline recruitment'],
      marketPrice: '$300-600/month',
      category: 'HR & Recruitment',
      technologies: ['NLP', 'Machine Learning', 'React', 'Node.js', 'PostgreSQL'],
      contactInfo: 'Contact: kleber@ziontechgroup.com | +1 302 464 0950'
    },
    {
      title: 'AI Employee Performance Tracker',
      description: 'Comprehensive performance monitoring with goal tracking, feedback analysis, and development recommendations.',
      icon: '📊',
      price: '$149/month',
      features: ['Performance tracking', 'Goal monitoring', 'Feedback analysis', 'Development plans', 'Team analytics', 'Recognition system'],
      benefits: ['Improve performance by 35%', 'Identify top performers', 'Support employee growth', 'Reduce turnover'],
      marketPrice: '$200-400/month',
      category: 'HR & Performance',
      technologies: ['Machine Learning', 'React', 'Node.js', 'PostgreSQL', 'Analytics'],
      contactInfo: 'Contact: kleber@ziontechgroup.com | +1 302 464 0950'
    },
    {
      title: 'AI Workplace Safety Monitor',
      description: 'Intelligent safety monitoring with incident prediction, compliance tracking, and emergency response.',
      icon: '🛡️',
      price: '$299/month',
      features: ['Incident prediction', 'Compliance tracking', 'Emergency alerts', 'Safety training', 'Risk assessment', 'Reporting system'],
      benefits: ['Prevent workplace accidents', 'Ensure compliance', 'Reduce insurance costs', 'Protect employees'],
      marketPrice: '$400-800/month',
      category: 'Workplace Safety',
      technologies: ['Computer Vision', 'IoT Sensors', 'Machine Learning', 'React', 'PostgreSQL'],
      contactInfo: 'Contact: kleber@ziontechgroup.com | +1 302 464 0950'
    },
    // AI Customer Service & Support
    {
      title: 'AI Customer Support Ticket Router',
      description: 'Intelligent ticket routing with priority scoring, agent matching, and automated responses.',
      icon: '🎫',
      price: '$129/month',
      features: ['Smart routing', 'Priority scoring', 'Agent matching', 'Auto responses', 'Escalation management', 'Performance analytics'],
      benefits: ['Reduce response time by 60%', 'Improve customer satisfaction', 'Optimize agent workload', 'Lower support costs'],
      marketPrice: '$200-400/month',
      category: 'Customer Support',
      technologies: ['NLP', 'Machine Learning', 'React', 'Node.js', 'PostgreSQL'],
      contactInfo: 'Contact: kleber@ziontechgroup.com | +1 302 464 0950'
    },
    {
      title: 'AI Customer Feedback Analyzer',
      description: 'Advanced sentiment analysis with feedback categorization, trend identification, and action recommendations.',
      icon: '💬',
      price: '$99/month',
      features: ['Sentiment analysis', 'Feedback categorization', 'Trend identification', 'Action recommendations', 'Competitor analysis', 'Reporting'],
      benefits: ['Understand customer needs', 'Identify improvement areas', 'Increase satisfaction', 'Drive product decisions'],
      marketPrice: '$150-300/month',
      category: 'Customer Analytics',
      technologies: ['NLP', 'Machine Learning', 'React', 'Node.js', 'PostgreSQL'],
      contactInfo: 'Contact: kleber@ziontechgroup.com | +1 302 464 0950'
    },
    {
      title: 'AI Live Chat Assistant',
      description: 'Intelligent live chat with instant responses, context awareness, and seamless human handoff.',
      icon: '💬',
      price: '$79/month',
      features: ['Instant responses', 'Context awareness', 'Human handoff', 'Multi-language', 'Integration tools', 'Analytics'],
      benefits: ['Provide 24/7 support', 'Reduce wait times', 'Improve customer experience', 'Lower support costs'],
      marketPrice: '$120-250/month',
      category: 'Customer Support',
      technologies: ['NLP', 'Machine Learning', 'React', 'Node.js', 'WebSocket'],
      contactInfo: 'Contact: kleber@ziontechgroup.com | +1 302 464 0950'
    },
    // AI Sales & CRM
    {
      title: 'AI Sales Pipeline Optimizer',
      description: 'Intelligent sales pipeline management with opportunity scoring, forecasting, and deal acceleration.',
      icon: '📈',
      price: '$199/month',
      features: ['Opportunity scoring', 'Sales forecasting', 'Deal acceleration', 'Pipeline analytics', 'Activity tracking', 'CRM integration'],
      benefits: ['Increase close rates by 40%', 'Improve forecasting accuracy', 'Accelerate deals', 'Optimize sales process'],
      marketPrice: '$300-600/month',
      category: 'Sales & CRM',
      technologies: ['Machine Learning', 'React', 'Node.js', 'PostgreSQL', 'CRM APIs'],
      contactInfo: 'Contact: kleber@ziontechgroup.com | +1 302 464 0950'
    },
    {
      title: 'AI Sales Call Analyzer',
      description: 'Advanced call analysis with sentiment tracking, objection identification, and coaching recommendations.',
      icon: '📞',
      price: '$149/month',
      features: ['Call transcription', 'Sentiment analysis', 'Objection identification', 'Coaching recommendations', 'Performance tracking', 'Team analytics'],
      benefits: ['Improve sales skills', 'Identify coaching opportunities', 'Increase conversion rates', 'Track team performance'],
      marketPrice: '$200-400/month',
      category: 'Sales Training',
      technologies: ['Speech Recognition', 'NLP', 'Machine Learning', 'React', 'Node.js'],
      contactInfo: 'Contact: kleber@ziontechgroup.com | +1 302 464 0950'
    },
    {
      title: 'AI Proposal Generator Pro',
      description: 'Intelligent proposal creation with template optimization, pricing analysis, and win probability scoring.',
      icon: '📋',
      price: '$119/month',
      features: ['Template optimization', 'Pricing analysis', 'Win probability scoring', 'Client personalization', 'Version control', 'Approval workflow'],
      benefits: ['Create proposals 5x faster', 'Increase win rates', 'Optimize pricing', 'Personalize content'],
      marketPrice: '$180-350/month',
      category: 'Sales Tools',
      technologies: ['NLP', 'Machine Learning', 'React', 'Node.js', 'PostgreSQL'],
      contactInfo: 'Contact: kleber@ziontechgroup.com | +1 302 464 0950'
    },
    // AI Project Management
    {
      title: 'AI Project Risk Predictor',
      description: 'Intelligent project risk assessment with early warning systems and mitigation recommendations.',
      icon: '⚠️',
      price: '$179/month',
      features: ['Risk assessment', 'Early warning system', 'Mitigation recommendations', 'Project monitoring', 'Team analysis', 'Resource optimization'],
      benefits: ['Prevent project failures', 'Reduce risks by 50%', 'Improve success rates', 'Optimize resources'],
      marketPrice: '$250-500/month',
      category: 'Project Management',
      technologies: ['Machine Learning', 'React', 'Node.js', 'PostgreSQL', 'Analytics'],
      contactInfo: 'Contact: kleber@ziontechgroup.com | +1 302 464 0950'
    },
    {
      title: 'AI Resource Allocation Optimizer',
      description: 'Smart resource allocation with capacity planning, skill matching, and workload balancing.',
      icon: '👥',
      price: '$199/month',
      features: ['Capacity planning', 'Skill matching', 'Workload balancing', 'Resource forecasting', 'Team optimization', 'Cost analysis'],
      benefits: ['Optimize resource usage', 'Improve team efficiency', 'Reduce costs', 'Balance workloads'],
      marketPrice: '$300-600/month',
      category: 'Resource Management',
      technologies: ['Machine Learning', 'React', 'Node.js', 'PostgreSQL', 'Optimization'],
      contactInfo: 'Contact: kleber@ziontechgroup.com | +1 302 464 0950'
    },
    {
      title: 'AI Project Timeline Predictor',
      description: 'Accurate project timeline prediction with milestone tracking and delay prevention.',
      icon: '📅',
      price: '$149/month',
      features: ['Timeline prediction', 'Milestone tracking', 'Delay prevention', 'Progress monitoring', 'Bottleneck identification', 'Scenario planning'],
      benefits: ['Deliver projects on time', 'Prevent delays', 'Identify bottlenecks', 'Improve planning'],
      marketPrice: '$200-400/month',
      category: 'Project Planning',
      technologies: ['Machine Learning', 'React', 'Node.js', 'PostgreSQL', 'Analytics'],
      contactInfo: 'Contact: kleber@ziontechgroup.com | +1 302 464 0950'
    },
    // AI Security & Compliance
    {
      title: 'AI Security Threat Detector',
      description: 'Advanced threat detection with real-time monitoring, vulnerability assessment, and incident response.',
      icon: '🔒',
      price: '$299/month',
      features: ['Threat detection', 'Real-time monitoring', 'Vulnerability assessment', 'Incident response', 'Compliance tracking', 'Security analytics'],
      benefits: ['Prevent security breaches', 'Detect threats early', 'Ensure compliance', 'Reduce security costs'],
      marketPrice: '$400-800/month',
      category: 'Cybersecurity',
      technologies: ['Machine Learning', 'SIEM', 'React', 'Node.js', 'PostgreSQL'],
      contactInfo: 'Contact: kleber@ziontechgroup.com | +1 302 464 0950'
    },
    {
      title: 'AI Compliance Monitor',
      description: 'Automated compliance monitoring with regulation tracking, audit preparation, and violation alerts.',
      icon: '📋',
      price: '$249/month',
      features: ['Compliance tracking', 'Audit preparation', 'Violation alerts', 'Regulation updates', 'Documentation', 'Reporting'],
      benefits: ['Ensure compliance', 'Reduce audit time', 'Prevent violations', 'Lower compliance costs'],
      marketPrice: '$350-700/month',
      category: 'Compliance',
      technologies: ['NLP', 'Machine Learning', 'React', 'Node.js', 'PostgreSQL'],
      contactInfo: 'Contact: kleber@ziontechgroup.com | +1 302 464 0950'
    },
    {
      title: 'AI Data Privacy Manager',
      description: 'Intelligent data privacy management with GDPR compliance, consent tracking, and data protection.',
      icon: '🔐',
      price: '$199/month',
      features: ['GDPR compliance', 'Consent tracking', 'Data protection', 'Privacy impact assessment', 'Data mapping', 'Breach notification'],
      benefits: ['Ensure data privacy', 'Meet GDPR requirements', 'Protect customer data', 'Avoid penalties'],
      marketPrice: '$300-600/month',
      category: 'Data Privacy',
      technologies: ['NLP', 'Machine Learning', 'React', 'Node.js', 'PostgreSQL'],
      contactInfo: 'Contact: kleber@ziontechgroup.com | +1 302 464 0950'
    },
    // AI Quality Assurance & Testing
    {
      title: 'AI Automated Testing Suite',
      description: 'Comprehensive automated testing with test generation, execution, and maintenance.',
      icon: '🧪',
      price: '$179/month',
      features: ['Test generation', 'Automated execution', 'Test maintenance', 'Coverage analysis', 'Performance testing', 'Regression testing'],
      benefits: ['Reduce testing time by 70%', 'Improve test coverage', 'Catch bugs earlier', 'Lower testing costs'],
      marketPrice: '$250-500/month',
      category: 'Quality Assurance',
      technologies: ['Selenium', 'Cypress', 'Machine Learning', 'React', 'Node.js'],
      contactInfo: 'Contact: kleber@ziontechgroup.com | +1 302 464 0950'
    },
    {
      title: 'AI Bug Prediction & Prevention',
      description: 'Intelligent bug prediction with code analysis, risk assessment, and prevention recommendations.',
      icon: '🐛',
      price: '$149/month',
      features: ['Bug prediction', 'Code analysis', 'Risk assessment', 'Prevention recommendations', 'Quality metrics', 'Team insights'],
      benefits: ['Prevent bugs before they occur', 'Improve code quality', 'Reduce debugging time', 'Lower maintenance costs'],
      marketPrice: '$200-400/month',
      category: 'Quality Assurance',
      technologies: ['Machine Learning', 'Code Analysis', 'React', 'Node.js', 'PostgreSQL'],
      contactInfo: 'Contact: kleber@ziontechgroup.com | +1 302 464 0950'
    },
    {
      title: 'AI Performance Monitoring Pro',
      description: 'Advanced performance monitoring with anomaly detection, optimization recommendations, and capacity planning.',
      icon: '⚡',
      price: '$199/month',
      features: ['Performance monitoring', 'Anomaly detection', 'Optimization recommendations', 'Capacity planning', 'Alert system', 'Analytics'],
      benefits: ['Prevent performance issues', 'Optimize system performance', 'Plan capacity needs', 'Reduce downtime'],
      marketPrice: '$300-600/month',
      category: 'Performance Monitoring',
      technologies: ['Machine Learning', 'Monitoring Tools', 'React', 'Node.js', 'PostgreSQL'],
      contactInfo: 'Contact: kleber@ziontechgroup.com | +1 302 464 0950'
    },
    // AI Content & Media
    {
      title: 'AI Video Content Generator',
      description: 'Intelligent video creation with script generation, editing, and optimization for social media.',
      icon: '🎬',
      price: '$299/month',
      features: ['Script generation', 'Video editing', 'Social media optimization', 'Template library', 'Brand consistency', 'Multi-format export'],
      benefits: ['Create videos 10x faster', 'Reduce production costs', 'Maintain brand consistency', 'Scale content creation'],
      marketPrice: '$400-800/month',
      category: 'Content Creation',
      technologies: ['Computer Vision', 'NLP', 'Video Processing', 'React', 'Node.js'],
      contactInfo: 'Contact: kleber@ziontechgroup.com | +1 302 464 0950'
    },
    {
      title: 'AI Podcast Production Suite',
      description: 'Complete podcast production with audio editing, transcription, and show notes generation.',
      icon: '🎙️',
      price: '$199/month',
      features: ['Audio editing', 'Transcription', 'Show notes generation', 'Intro/outro creation', 'Publishing automation', 'Analytics'],
      benefits: ['Produce podcasts faster', 'Reduce editing time', 'Improve quality', 'Scale production'],
      marketPrice: '$300-600/month',
      category: 'Audio Production',
      technologies: ['Audio Processing', 'Speech Recognition', 'NLP', 'React', 'Node.js'],
      contactInfo: 'Contact: kleber@ziontechgroup.com | +1 302 464 0950'
    },
    {
      title: 'AI Image & Design Generator',
      description: 'Intelligent image creation with design automation, brand consistency, and multi-format optimization.',
      icon: '🎨',
      price: '$149/month',
      features: ['Image generation', 'Design automation', 'Brand consistency', 'Multi-format optimization', 'Template library', 'Batch processing'],
      benefits: ['Create designs instantly', 'Maintain brand consistency', 'Reduce design costs', 'Scale visual content'],
      marketPrice: '$200-400/month',
      category: 'Design',
      technologies: ['Computer Vision', 'DALL-E', 'React', 'Node.js', 'PostgreSQL'],
      contactInfo: 'Contact: kleber@ziontechgroup.com | +1 302 464 0950'
    },
    // AI Research & Development
    {
      title: 'AI Research Assistant Pro',
      description: 'Intelligent research tool with paper analysis, trend identification, and knowledge synthesis.',
      icon: '🔬',
      price: '$199/month',
      features: ['Paper analysis', 'Trend identification', 'Knowledge synthesis', 'Citation management', 'Research tracking', 'Collaboration tools'],
      benefits: ['Accelerate research', 'Stay current with trends', 'Synthesize knowledge', 'Improve research quality'],
      marketPrice: '$300-600/month',
      category: 'Research',
      technologies: ['NLP', 'Machine Learning', 'React', 'Node.js', 'PostgreSQL'],
      contactInfo: 'Contact: kleber@ziontechgroup.com | +1 302 464 0950'
    },
    {
      title: 'AI Patent Analyzer & Generator',
      description: 'Intelligent patent analysis with prior art search, novelty assessment, and patent generation.',
      icon: '📜',
      price: '$399/month',
      features: ['Prior art search', 'Novelty assessment', 'Patent generation', 'Competitor analysis', 'Filing assistance', 'Portfolio management'],
      benefits: ['Identify patent opportunities', 'Avoid infringement', 'Accelerate patent process', 'Manage IP portfolio'],
      marketPrice: '$600-1200/month',
      category: 'Intellectual Property',
      technologies: ['NLP', 'Machine Learning', 'Patent APIs', 'React', 'Node.js'],
      contactInfo: 'Contact: kleber@ziontechgroup.com | +1 302 464 0950'
    },
    {
      title: 'AI Innovation Tracker',
      description: 'Monitor industry innovations with trend analysis, competitor tracking, and opportunity identification.',
      icon: '💡',
      price: '$149/month',
      features: ['Trend analysis', 'Competitor tracking', 'Opportunity identification', 'Innovation scoring', 'Market analysis', 'Alert system'],
      benefits: ['Stay ahead of trends', 'Identify opportunities', 'Track competitors', 'Drive innovation'],
      marketPrice: '$200-400/month',
      category: 'Innovation',
      technologies: ['NLP', 'Machine Learning', 'Web Scraping', 'React', 'Node.js'],
      contactInfo: 'Contact: kleber@ziontechgroup.com | +1 302 464 0950'
    },
    // AI Personal & Lifestyle
    {
      title: 'AI Personal Finance Manager',
      description: 'Comprehensive personal finance management with budgeting, investment tracking, and financial planning.',
      icon: '💰',
      price: '$79/month',
      features: ['Budget management', 'Investment tracking', 'Financial planning', 'Bill reminders', 'Expense categorization', 'Goal tracking'],
      benefits: ['Improve financial health', 'Achieve financial goals', 'Reduce financial stress', 'Optimize investments'],
      marketPrice: '$120-250/month',
      category: 'Personal Finance',
      technologies: ['Machine Learning', 'Banking APIs', 'React', 'Node.js', 'PostgreSQL'],
      contactInfo: 'Contact: kleber@ziontechgroup.com | +1 302 464 0950'
    },
    {
      title: 'AI Personal Assistant Pro',
      description: 'Intelligent personal assistant with task management, scheduling, and lifestyle optimization.',
      icon: '🤖',
      price: '$99/month',
      features: ['Task management', 'Smart scheduling', 'Lifestyle optimization', 'Habit tracking', 'Goal setting', 'Voice commands'],
      benefits: ['Increase productivity', 'Achieve personal goals', 'Optimize daily routines', 'Reduce stress'],
      marketPrice: '$150-300/month',
      category: 'Personal Assistant',
      technologies: ['NLP', 'Machine Learning', 'Voice Recognition', 'React', 'Node.js'],
      contactInfo: 'Contact: kleber@ziontechgroup.com | +1 302 464 0950'
    },
    {
      title: 'AI Home Energy Optimizer',
      description: 'Smart home energy management with usage optimization, cost reduction, and sustainability tracking.',
      icon: '🏠',
      price: '$89/month',
      features: ['Usage optimization', 'Cost reduction', 'Sustainability tracking', 'Smart device control', 'Energy forecasting', 'Savings analysis'],
      benefits: ['Reduce energy costs', 'Lower carbon footprint', 'Optimize energy usage', 'Track sustainability goals'],
      marketPrice: '$120-250/month',
      category: 'Smart Home',
      technologies: ['IoT', 'Machine Learning', 'React', 'Node.js', 'PostgreSQL'],
      contactInfo: 'Contact: kleber@ziontechgroup.com | +1 302 464 0950'
    },
    // AI Gaming & Entertainment
    {
      title: 'AI Game Development Assistant',
      description: 'Intelligent game development with asset generation, level design, and gameplay optimization.',
      icon: '🎮',
      price: '$299/month',
      features: ['Asset generation', 'Level design', 'Gameplay optimization', 'NPC behavior', 'Balancing tools', 'Testing automation'],
      benefits: ['Accelerate game development', 'Create unique content', 'Improve gameplay', 'Reduce development costs'],
      marketPrice: '$400-800/month',
      category: 'Game Development',
      technologies: ['Computer Vision', 'Machine Learning', 'Unity', 'Unreal Engine', 'React'],
      contactInfo: 'Contact: kleber@ziontechgroup.com | +1 302 464 0950'
    },
    {
      title: 'AI Music Composition Studio',
      description: 'Intelligent music creation with composition assistance, style transfer, and production tools.',
      icon: '🎵',
      price: '$199/month',
      features: ['Composition assistance', 'Style transfer', 'Production tools', 'Instrument synthesis', 'Lyrics generation', 'Collaboration'],
      benefits: ['Create music faster', 'Explore new styles', 'Improve composition skills', 'Collaborate effectively'],
      marketPrice: '$300-600/month',
      category: 'Music Production',
      technologies: ['Audio Processing', 'Machine Learning', 'React', 'Node.js', 'Audio APIs'],
      contactInfo: 'Contact: kleber@ziontechgroup.com | +1 302 464 0950'
    },
    {
      title: 'AI Streaming Content Optimizer',
      description: 'Optimize streaming content with quality enhancement, compression, and delivery optimization.',
      icon: '📺',
      price: '$249/month',
      features: ['Quality enhancement', 'Compression optimization', 'Delivery optimization', 'Bandwidth management', 'Analytics', 'Multi-platform'],
      benefits: ['Improve streaming quality', 'Reduce bandwidth costs', 'Optimize delivery', 'Enhance viewer experience'],
      marketPrice: '$350-700/month',
      category: 'Streaming',
      technologies: ['Video Processing', 'Machine Learning', 'CDN', 'React', 'Node.js'],
      contactInfo: 'Contact: kleber@ziontechgroup.com | +1 302 464 0950'
  ];

  const filteredServices = selectedCategory === 'all' 
    ? microSAASServices 
    : microSAASServices.filter(service => service.category === selectedCategory);

  const totalSavings = microSAASServices.reduce((total, service) => {
    const original = parseInt(service.originalPrice.replace('$', '').replace('/month', ''));
    const current = parseInt(service.price.replace('$', '').replace('/month', ''));
    return total + (original - current);
  }, 0);

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
          </div>


          {/* Services Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {filteredServices.map((service, index) => (
              <MicroSAASCard key={index} service={service} />
            ))}
          </div>
=======

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

>>>>>>> origin/main

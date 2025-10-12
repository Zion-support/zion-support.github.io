'use client';
import { use State, use Effect} from 'react';
import { Link } from 'react-router-dom';
import { 
  Arrow Right, Check Circle, Star, Users, Award, Zap, Shield, Brain, Cloud, Code, 
  Bar Chart, File Text, Message Circle, Target, Check Square, Dollar Sign, Box, 
  Settings, Heart, Eye, Mic, Workflow, Link as Link Icon, Wifi, Package, 
  Trending Up, Calendar, Shopping Cart, Sparkles, Cpu, Globe, Database, 
  Smartphone, Lock, Monitor, Server, Mail, Phone, Map Pin, Clock
} from 'lucide-react';
import { Arrow Right, Shopping Cart } from 'lucide-react';
import { Arrow Right, Check Circle, Star, Users, Zap, Shield, Cloud, Code, Bar Chart, File Text, Message Circle, Target, Check Square, Dollar Sign, Box, Settings, Link as Link Icon, Package, Trending Up, Calendar, Globe, Database, Monitor, Mail } from 'lucide-react';
import { Arrow Right, Check Circle, Star, Users, Shield, Cloud, Bar Chart, File Text, Message Circle, Target, Check Square, Dollar Sign, Box, Link as Link Icon, Database, Mail } from 'lucide-react';

const Micro Saas Page: React.F C = () => {

  use Effect(() => {
    set Is Visible(true);
  }, []);

  const micro Saas Products = [
    {
      id: 'zion-analytics-pro',
      title: 'Zion Analytics Pro',
      description: 'Advanced business intelligence platform with A I-powered insights and real-time dashboards',
      price: '$99/month',
      original Price: '$149/month',
      features: [
        'Real-time analytics dashboard',
        'A I-powered predictive insights',
        'Custom report generation',
        'Team collaboration tools',
        'A P I integrations',
        'Mobile app access',
        'Data visualization tools',
        'Export to multiple formats'
      ],
      icon: Bar Chart,
      color: 'from-blue-500 to-purple-500',
      category: 'Analytics',
      rating: 4.9,
      reviews: 127,
      popular: true
    },
    {
      id: 'zion-chat-ai',
      title: 'Zion Chat A I',
      description: 'Intelligent customer support chatbot with natural language processing and multi-channel support',
      price: '$79/month',
      original Price: '$119/month',
      features: [
        'Multi-language support',
        'Sentiment analysis',
        'Escalation management',
        'Performance analytics',
        'Custom training',
        'Integration A P Is',
        'Live chat handoff',
        'Knowledge base management'
      ],
      icon: Message Circle,
      color: 'from-green-500 to-teal-500',
      category: 'Customer Support',
      rating: 4.8,
      reviews: 89,
      popular: false
    },
    {
      id: 'zion-security-shield',
      title: 'Zion Security Shield',
      description: 'Comprehensive cybersecurity monitoring and threat detection for small to medium businesses',
      price: '$149/month',
      original Price: '$199/month',
      features: [
        'Real-time threat detection',
        'Vulnerability scanning',
        'Incident response automation',
        'Compliance reporting',
        'Security awareness training',
        '24/7 monitoring',
        'Mobile device management',
        'Firewall management'
      ],
      icon: Shield,
      color: 'from-red-500 to-orange-500',
      category: 'Security',
      rating: 4.9,
      reviews: 156,
      popular: true
    },
    {
      id: 'zion-cloud-vault',
      title: 'Zion Cloud Vault',
      description: 'Secure cloud backup and disaster recovery solution with automated backups and instant restore',
      price: '$59/month',
      original Price: '$89/month',
      features: [
        'Automated daily backups',
        'Instant file recovery',
        'Version history tracking',
        'Cross-platform sync',
        'End-to-end encryption',
        'Compliance certifications',
        'Unlimited storage',
        'Mobile access'
      ],
      icon: Cloud,
      color: 'from-cyan-500 to-blue-500',
      category: 'Backup & Recovery',
      rating: 4.7,
      reviews: 203,
      popular: false
    },
    {
      id: 'zion-content-studio',
      title: 'Zion Content Studio',
      description: 'A I-powered content creation and management platform for blogs, social media, and marketing',
      price: '$69/month',
      original Price: '$99/month',
      features: [
        'A I content generation',
        'Multi-platform publishing',
        'Brand voice training',
        'Content calendar',
        'S E O optimization',
        'Image generation',
        'Video creation tools',
        'Performance tracking'
      ],
      icon: File Text,
      color: 'from-purple-500 to-pink-500',
      category: 'Content Creation',
      rating: 4.6,
      reviews: 94,
      popular: false
    },
    {
      id: 'zion-crm-intelligence',
      title: 'Zion C R M Intelligence',
      description: 'Smart customer relationship management with A I insights and automated workflows',
      price: '$89/month',
      original Price: '$129/month',
      features: [
        'Lead scoring automation',
        'Sales forecasting',
        'Customer insights',
        'Automation workflows',
        'Email marketing',
        'Pipeline management',
        'Team collaboration',
        'Mobile C R M access'
      ],
      icon: Users,
      color: 'from-indigo-500 to-purple-500',
      category: 'C R M',
      rating: 4.8,
      reviews: 142,
      popular: true
    },
    {
      id: 'zion-data-sync',
      title: 'Zion Data Sync',
      description: 'Automated data synchronization across multiple platforms and databases',
      price: '$49/month',
      original Price: '$79/month',
      features: [
        'Real-time data sync',
        'Multiple platform support',
        'Data transformation',
        'Error handling',
        'Scheduled syncs',
        'Data validation',
        'A P I integrations',
        'Monitoring dashboard'
      ],
      icon: Database,
      color: 'from-emerald-500 to-green-500',
      category: 'Data Management',
      rating: 4.5,
      reviews: 67,
      popular: false
    },
    {
      id: 'zion-lead-magnet',
      title: 'Zion Lead Magnet',
      description: 'Lead generation and nurturing platform with automated email sequences and landing pages',
      price: '$79/month',
      original Price: '$119/month',
      features: [
        'Landing page builder',
        'Email automation',
        'Lead scoring',
        'A/B testing',
        'Analytics dashboard',
        'C R M integration',
        'Form builder',
        'Social media integration'
      ],
      icon: Target,
      color: 'from-yellow-500 to-orange-500',
      category: 'Marketing',
      rating: 4.7,
      reviews: 118,
      popular: false
    },
    {
      id: 'zion-project-master',
      title: 'Zion Project Master',
      description: 'Advanced project management with A I-powered insights and team collaboration tools',
      price: '$99/month',
      original Price: '$149/month',
      features: [
        'Gantt charts',
        'Resource management',
        'Time tracking',
        'Budget monitoring',
        'Team collaboration',
        'File sharing',
        'Progress reporting',
        'Mobile app'
      ],
      icon: Check Square,
      color: 'from-violet-500 to-purple-500',
      category: 'Project Management',
      rating: 4.8,
      reviews: 175,
      popular: true
    },
    {
      id: 'zion-email-automation',
      title: 'Zion Email Automation',
      description: 'Intelligent email marketing platform with A I-powered personalization and automation',
      price: '$59/month',
      original Price: '$89/month',
      features: [
        'Email templates',
        'Automation workflows',
        'Personalization engine',
        'A/B testing',
        'Analytics tracking',
        'List management',
        'Drip campaigns',
        'Integration A P Is'
      ],
      icon: Mail,
      color: 'from-pink-500 to-rose-500',
      category: 'Email Marketing',
      rating: 4.6,
      reviews: 89,
      popular: false
    },
    {
      id: 'zion-inventory-smart',
      title: 'Zion Inventory Smart',
      description: 'A I-powered inventory management with demand forecasting and automated reordering',
      price: '$89/month',
      original Price: '$129/month',
      features: [
        'Demand forecasting',
        'Automated reordering',
        'Stock level monitoring',
        'Supplier management',
        'Barcode scanning',
        'Multi-location support',
        'Reporting dashboard',
        'Mobile app'
      ],
      icon: Box,
      color: 'from-teal-500 to-cyan-500',
      category: 'Inventory',
      rating: 4.7,
      reviews: 134,
      popular: false
    },
    {
      id: 'zion-invoice-genius',
      title: 'Zion Invoice Genius',
      description: 'Automated invoicing and payment processing with A I-powered expense categorization',
      price: '$49/month',
      original Price: '$79/month',
      features: [
        'Automated invoicing',
        'Payment processing',
        'Expense categorization',
        'Tax calculations',
        'Client portal',
        'Recurring billing',
        'Financial reporting',
        'Multi-currency support'
      ],
      icon: Dollar Sign,
      color: 'from-green-500 to-emerald-500',
      category: 'Finance',
      rating: 4.8,
      reviews: 156,
      popular: true
    },
    {
      id: 'zion-ai-video-editor',
      title: 'Zion A I Video Editor',
      description: 'A I-powered video editing with automatic scene detection, color correction, and smart transitions',
      price: '$89/month',
      original Price: '$129/month',
      features: [
        'Auto scene detection',
        'Smart color correction',
        'A I-generated transitions',
        'Voice-over generation',
        'Background removal',
        'Text-to-video',
        'Multi-format export',
        'Cloud rendering'
      ],
      icon: Monitor,
      color: 'from-purple-500 to-pink-500',
      category: 'Video Production',
      rating: 4.7,
      reviews: 98,
      popular: false
    },
    {
      id: 'zion-ai-translator-pro',
      title: 'Zion A I Translator Pro',
      description: 'Advanced A I translation with context awareness and industry-specific terminology support',
      price: '$69/month',
      original Price: '$99/month',
      features: [
        '100+ language support',
        'Context-aware translation',
        'Industry terminology',
        'Real-time translation',
        'Document translation',
        'Voice translation',
        'A P I integration',
        'Quality scoring'
      ],
      icon: Globe,
      color: 'from-blue-500 to-cyan-500',
      category: 'Translation',
      rating: 4.6,
      reviews: 134,
      popular: false
    },
    {
      id: 'zion-ai-code-reviewer',
      title: 'Zion A I Code Reviewer',
      description: 'Intelligent code review with automated bug detection, security analysis, and performance optimization',
      price: '$149/month',
      original Price: '$199/month',
      features: [
        'Automated code review',
        'Bug detection',
        'Security vulnerability scan',
        'Performance optimization',
        'Code quality metrics',
        'Best practice suggestions',
        'Multi-language support',
        'Git integration'
      ],
      icon: Code,
      color: 'from-indigo-500 to-purple-500',
      category: 'Development',
      rating: 4.8,
      reviews: 187,
      popular: true
    },
    {
      id: 'zion-customer-insights',
      title: 'Zion Customer Insights',
      description: 'A I-powered customer behavior analysis with predictive insights and personalized recommendations',
      price: '$119/month',
      original Price: '$159/month',
      features: [
        'Customer segmentation',
        'Behavior prediction',
        'Churn analysis',
        'Personalization engine',
        'Sentiment analysis',
        'Lifetime value prediction',
        'Recommendation system',
        'Real-time insights'
      ],
      icon: Users,
      color: 'from-teal-500 to-cyan-500',
      category: 'Analytics',
      rating: 4.7,
      reviews: 145,
      popular: false
    },
    {
      id: 'zion-ai-email-assistant',
      title: 'Zion A I Email Assistant',
      description: 'Smart email management with A I-powered responses, scheduling, and priority classification',
      price: '$59/month',
      original Price: '$89/month',
      features: [
        'A I email responses',
        'Smart scheduling',
        'Priority classification',
        'Spam filtering',
        'Email templates',
        'Follow-up automation',
        'Sentiment analysis',
        'Calendar integration'
      ],
      icon: Mail,
      color: 'from-orange-500 to-red-500',
      category: 'Productivity',
      rating: 4.5,
      reviews: 112,
      popular: false
    },
    {
      id: 'zion-ai-meeting-assistant',
      title: 'Zion A I Meeting Assistant',
      description: 'Intelligent meeting management with transcription, action items, and follow-up automation',
      price: '$79/month',
      original Price: '$119/month',
      features: [
        'Real-time transcription',
        'Action item extraction',
        'Meeting summaries',
        'Follow-up automation',
        'Voice recognition',
        'Multi-language support',
        'Calendar integration',
        'Team collaboration'
      ],
      icon: Calendar,
      color: 'from-green-500 to-emerald-500',
      category: 'Productivity',
      rating: 4.6,
      reviews: 98,
      popular: false
    },
    {
      id: 'zion-ai-seo-optimizer',
      title: 'Zion A I S E O Optimizer',
      description: 'A I-powered S E O optimization with content analysis, keyword research, and ranking predictions',
      price: '$99/month',
      original Price: '$149/month',
      features: [
        'Content optimization',
        'Keyword research',
        'Ranking predictions',
        'Competitor analysis',
        'Technical S E O audit',
        'Link building suggestions',
        'Performance tracking',
        'Automated reports'
      ],
      icon: Trending Up,
      color: 'from-yellow-500 to-orange-500',
      category: 'Marketing',
      rating: 4.7,
      reviews: 167,
      popular: true
    },
    {
      id: 'zion-ai-data-cleaner',
      title: 'Zion A I Data Cleaner',
      description: 'Intelligent data cleaning and validation with automated error detection and correction',
      price: '$89/month',
      original Price: '$129/month',
      features: [
        'Automated data cleaning',
        'Error detection',
        'Duplicate removal',
        'Data validation',
        'Format standardization',
        'Missing data imputation',
        'Quality scoring',
        'A P I integration'
      ],
      icon: Database,
      color: 'from-gray-500 to-slate-500',
      category: 'Data Management',
      rating: 4.6,
      reviews: 89,
      popular: false
    },
    {
      id: 'zion-ai-contract-analyzer',
      title: 'Zion A I Contract Analyzer',
      description: 'A I-powered contract analysis with risk assessment, clause extraction, and compliance checking',
      price: '$199/month',
      original Price: '$299/month',
      features: [
        'Contract analysis',
        'Risk assessment',
        'Clause extraction',
        'Compliance checking',
        'Version comparison',
        'Automated summaries',
        'Legal insights',
        'Document management'
      ],
      icon: File Text,
      color: 'from-violet-500 to-purple-500',
      category: 'Legal',
      rating: 4.8,
      reviews: 76,
      popular: false
    },
    {
      id: 'zion-ai-survey-builder',
      title: 'Zion A I Survey Builder',
      description: 'Intelligent survey creation with A I-generated questions, response analysis, and insights',
      price: '$69/month',
      original Price: '$99/month',
      features: [
        'A I question generation',
        'Response analysis',
        'Sentiment analysis',
        'Data visualization',
        'Custom themes',
        'Multi-platform distribution',
        'Real-time analytics',
        'Export capabilities'
      ],
      icon: Check Square,
      color: 'from-pink-500 to-rose-500',
      category: 'Research',
      rating: 4.5,
      reviews: 123,
      popular: false
    },
    {
      id: 'zion-ai-accounting-assistant',
      title: 'Zion A I Accounting Assistant',
      description: 'Smart accounting automation with expense categorization, tax preparation, and financial insights',
      price: '$129/month',
      original Price: '$179/month',
      features: [
        'Expense categorization',
        'Tax preparation',
        'Financial insights',
        'Receipt scanning',
        'Invoice matching',
        'Compliance monitoring',
        'Reporting automation',
        'Multi-currency support'
      ],
      icon: Dollar Sign,
      color: 'from-emerald-500 to-green-500',
      category: 'Finance',
      rating: 4.7,
      reviews: 156,
      popular: true
    },
    {
      id: 'zion-ai-recruitment-pro',
      title: 'Zion A I Recruitment Pro',
      description: 'A I-powered recruitment with resume screening, candidate matching, and interview scheduling',
      price: '$179/month',
      original Price: '$249/month',
      features: [
        'Resume screening',
        'Candidate matching',
        'Interview scheduling',
        'Skill assessment',
        'Background checks',
        'Onboarding automation',
        'Performance tracking',
        'Integration capabilities'
      ],
      icon: Users,
      color: 'from-blue-500 to-indigo-500',
      category: 'H R',
      rating: 4.8,
      reviews: 134,
      popular: true
    },
    {
      id: 'zion-ai-content-moderation',
      title: 'Zion A I Content Moderation',
      description: 'Automated content moderation with A I-powered detection of inappropriate content and spam',
      price: '$149/month',
      original Price: '$199/month',
      features: [
        'Content filtering',
        'Spam detection',
        'Image analysis',
        'Text analysis',
        'Video moderation',
        'Real-time processing',
        'Custom rules',
        'A P I integration'
      ],
      icon: Shield,
      color: 'from-red-500 to-orange-500',
      category: 'Security',
      rating: 4.6,
      reviews: 98,
      popular: false
    },
    {
      id: 'zion-ai-predictive-maintenance',
      title: 'Zion A I Predictive Maintenance',
      description: 'A I-powered equipment monitoring with predictive maintenance and failure prevention',
      price: '$299/month',
      original Price: '$399/month',
      features: [
        'Equipment monitoring',
        'Failure prediction',
        'Maintenance scheduling',
        'Performance analytics',
        'Alert system',
        'Cost optimization',
        'Io T integration',
        'Custom dashboards'
      ],
      icon: Settings,
      color: 'from-cyan-500 to-blue-500',
      category: 'Io T',
      rating: 4.7,
      reviews: 67,
      popular: false
    },
    {
      id: 'zion-ai-energy-manager',
      title: 'Zion A I Energy Manager',
      description: 'Smart energy management with consumption optimization and cost reduction recommendations',
      price: '$199/month',
      original Price: '$279/month',
      features: [
        'Energy monitoring',
        'Consumption optimization',
        'Cost analysis',
        'Predictive modeling',
        'Automated controls',
        'Sustainability tracking',
        'Reporting dashboard',
        'Io T integration'
      ],
      icon: Zap,
      color: 'from-yellow-500 to-orange-500',
      category: 'Sustainability',
      rating: 4.5,
      reviews: 89,
      popular: false
    },
    {
      id: 'zion-ai-supply-chain-optimizer',
      title: 'Zion A I Supply Chain Optimizer',
      description: 'A I-powered supply chain optimization with demand forecasting and inventory management',
      price: '$249/month',
      original Price: '$349/month',
      features: [
        'Demand forecasting',
        'Inventory optimization',
        'Route optimization',
        'Supplier analysis',
        'Risk assessment',
        'Cost optimization',
        'Real-time tracking',
        'Integration capabilities'
      ],
      icon: Package,
      color: 'from-indigo-500 to-purple-500',
      category: 'Supply Chain',
      rating: 4.8,
      reviews: 112,
      popular: true
    },
    {
      id: 'zion-ai-fraud-detector',
      title: 'Zion A I Fraud Detector',
      description: 'Advanced fraud detection with machine learning models and real-time transaction monitoring',
      price: '$179/month',
      original Price: '$249/month',
      features: [
        'Real-time monitoring',
        'Pattern recognition',
        'Risk scoring',
        'Transaction analysis',
        'Alert system',
        'Machine learning models',
        'A P I integration',
        'Compliance reporting'
      ],
      icon: Shield,
      color: 'from-red-500 to-pink-500',
      category: 'Security',
      rating: 4.9,
      reviews: 198,
      popular: true
    },
    {
      id: 'zion-ai-customer-service-pro',
      title: 'Zion A I Customer Service Pro',
      description: 'Advanced A I customer service with multi-channel support and intelligent routing',
      price: '$159/month',
      original Price: '$219/month',
      features: [
        'Multi-channel support',
        'Intelligent routing',
        'Sentiment analysis',
        'Escalation management',
        'Knowledge base',
        'Performance analytics',
        'Integration capabilities',
        'Custom training'
      ],
      icon: Message Circle,
      color: 'from-green-500 to-teal-500',
      category: 'Customer Support',
      rating: 4.7,
      reviews: 167,
      popular: true
    },
    {
      id: 'zion-ai-marketing-automation',
      title: 'Zion A I Marketing Automation',
      description: 'Intelligent marketing automation with personalized campaigns and customer journey optimization',
      price: '$139/month',
      original Price: '$189/month',
      features: [
        'Campaign automation',
        'Personalization engine',
        'Customer journey mapping',
        'A/B testing',
        'Performance analytics',
        'Lead scoring',
        'Email marketing',
        'Social media integration'
      ],
      icon: Target,
      color: 'from-purple-500 to-pink-500',
      category: 'Marketing',
      rating: 4.6,
      reviews: 145,
      popular: false
    },
    {
      id: 'zion-ai-document-ai',
      title: 'Zion A I Document A I',
      description: 'Advanced document processing with O C R, data extraction, and intelligent document analysis',
      price: '$119/month',
      original Price: '$159/month',
      features: [
        'O C R technology',
        'Data extraction',
        'Document classification',
        'Form processing',
        'Text analysis',
        'Version control',
        'Search capabilities',
        'A P I integration'
      ],
      icon: File Text,
      color: 'from-gray-500 to-slate-500',
      category: 'Document Management',
      rating: 4.7,
      reviews: 123,
      popular: false
    }
  ];
  const categories = ['All', 'Analytics', 'Customer Support', 'Security', 'Backup & Recovery', 'Content Creation', 'C R M', 'Data Management', 'Marketing', 'Project Management', 'Email Marketing', 'Inventory', 'Finance', 'Video Production', 'Translation', 'Development', 'Productivity', 'Research', 'H R', 'Io T', 'Sustainability', 'Supply Chain', 'Legal', 'Document Management'];
  const [selected Category, set Selected Category] = use State('All');

  const filtered Products = selected Category === 'All' 
    ? micro Saas Products 
    : micro Saas Products.filter(product => product.category === selected Category);
  return (

      <H elmet>
        <t itle>5G Data Analytics - Zion Tech Group</t itle>
        <m eta name="description" content="Professional 5G data analytics services by Zion Tech Group. Transform your business with our expert solutions." />
      </H elmet>
        <t itle>Micro S A A S Products - Zion Tech Group | A I-Powered Business Solutions</t itle>
        <m etaconstname = "description" content="Discover our comprehensive suite of micro S A A S products designed to solve specific business challenges. From A I analytics to cybersecurity, we have the tools you need to succeed." / / />
        <m eta name="keywords" content="micro saas, business software, A I tools, analytics, C R M, project management, cybersecurity, automation" / / />
      </H elmet>

      <d iv class Name="m in-h-s c reen bg-gradient-to-br from-slate-900via-purple-900to-slate-900">
        </d iv>
        {/* Hero Section */}

        <s ection class Name="r e l a tive overflow-hiddenpt-20pb-16" />
          <d iv class Name="a b s o luteinset-0opacity-20" / />
          <d iv class Name="r e l a tive max-w-7 xl mx-auto px-4sm:px-6lg:px-8">
        </d iv>
            <d iv class Name="t e x t-center" />
              <h1 c lass Name="{`t e xt-4" xl md: text-6 xl font-bold text-white mb-6 transition-all duration-1000 ${is Visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`} />

                Micro S A A S

                <s pan class Name="b l o c k bg-gradient-to-r from-purple-400 to-pink-400bg-clip-texttext-transparent">Business Solutions
                </s pan>
              </h1>
              <p c lass Name="{`t e xt-xl" text-gray-300 mb-8 max-w-3 xl mx-auto transition-all duration-1000 delay-300 ${is Visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`} />

                Powerful, ready-to-use software solutions designed to solve specific business challenges. 
                No complex setup, no lengthy implementations - just instant value.

              </p>
              <d iv class Name="{`f l ex" flex-col sm: flex-row gap-4 justify-center transition-all duration-1000 delay-500 ${is Visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`} />
                <L ink to="/contact" class Name="i n l i ne-flex items-center px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-600 text-white font-semibold rounded-lg hover:from-purple-700 hover:to-pink-700 transition-all duration-300 transform hover:scale-105shadow-lghover:shadow-xl" />

                  Start Free Trial

                  <A rrow Rightclass Name="m l-2h-5w-5" />
                </L ink>

                <a
                  h r ef="tel:+13024640950"
                  class Name="i n l i ne-flex items-center px-8 py-4 border-2 border-purple-400 text-purple-400 font-semibold rounded-lg hover:bg-purple-400 hover:text-white transition-all duration-300transformhover:scale-105" />
                  Call +1 302 464 0950

                </a>
              </d iv>
          </d iv>
        </s ection>

        {/* Category Filter */}

        <s ection class Name="p y-8b g-g r ay-900/50" />
          <d iv class Name="m a x-w-7 xl mx-a u to px-4sm:px-6lg:px-8">
        </d iv>
            <d iv class Name="f l ex f l ex-wrapjustify-centergap-4">
        </d iv>

              {categories.map((category) => (
                <b utton
                  key="{category}"
                  on Click="{()" =>set Selected Category(category)}
                  class Name="{`p x-6" py-3 rounded-lg font-semibold transition-all duration-300 ${
                    selected Category === category
                      ? 'bg-gradient-to-r from-purple-600 to-pink-600 text-white shadow-lg'
                      : 'bg-gray-800 text-gray-300 hover: bg-gray-700 hover:text-white'
                  }`}
                >
                  {category}
                </b utton>
              ))}

            </d iv>
        </s ection>

        {/* Products Grid */}

        <s ection class Name="p y-16" />
          <d iv class Name="m a x-w-7 xl mx-a u to px-4sm:px-6lg:px-8">
        </d iv>
            <d iv class Name="g r id g r id-cols-1 md:grid-cols-2 lg:grid-cols-3xl:grid-cols-4gap-8">
        </d iv>

              {filtered Products.map((product, index) => (
                <d iv
                  key="{product.id}"
                  class Name="{`g r o u p" relative bg-gray-800 rounded-xl p-6 hover:bg-gray-700 transition-all duration-300 transform hover:scale-105 border border-gray-700 hover:border-purple-500 ${
                    product.popular ? 'ring-2 ring-purple-500' : ''
                  }`} />
                  {product.popular && (

                    <d iv class Name="a b s o lute -top-3 left-1/2transform-translate-x-1/2">
        </d iv>
                      <s pan class Name="b g-g r a dient-to-r from-purple-600 to-pink-600 text-white px-4 py-1 rounded-fulltext-smfont-semibold">Most Popular
                      </s pan>
                    </d iv>

                  )}

                  <d iv class Name="t e x t-centermb-6">
        </d iv>
                    <d iv class Name="{`i n l i ne-flex" items-center justify-center w-16 h-16 bg-gradient-to-r ${product.color} rounded-xl mb-4`} />
                      <p roduct.icon class Name="h-8w-8t e xt-w h ite" />
                    </d iv>
                    <h3 c lass Name="t e xt-xl f o nt-boldtext-whitemb-2">{product.title}</h3>
                    <p c lass Name="t e xt-g r ay-300text-smmb-4">{product.description}</p>
                    <d iv class Name="f l ex i t ems-center justify-centerspace-x-2mb-4">
        </d iv>
                      <d iv class Name="f l e x items-center" />

                        {[...Array(5)].map((_, i) => (
                          <S tar
                            key="{i}"
                            class Name="{`h-4" w-4 ${
                              i < Math.floor(product.rating) ? 'text-yellow-400 fill-current' : 'text-gray-600'
                            }`}
                          / />
                        ))}

                      </d iv>
                      <s pan class Name="t e xt-s m text-gray-400">({product.reviews} reviews)</s pan>
                    </d iv>

                  <d iv class Name="t e x t-centermb-6">
        </d iv>
                    <d iv class Name="f l ex i t ems-center justify-centerspace-x-2mb-2">
        </d iv>
                      <s pan class Name="t e xt-3 x l font-boldtext-white">{product.price}</s pan>
                      <s pan class Name="t e x t-lgtext-gray-400line-through">{product.original Price}</s pan>
                    </d iv>
                    <s pan class Name="t e xt-s m text-green-400font-semibold">Save {Math.round((1 - parse Int(product.price.replace('$', '')) / parse Int(product.original Price.replace('$', ''))) * 100)}%
                    </s pan>
                  </d iv>

                  <d iv class Name="s p a c e-y-3mb-6">
        </d iv>
                    {product.features.slice(0, 4).map((feature, idx) => (

                      <d ivkey="{idx}" class Name="f l ex i t ems-centertext-smtext-gray-300" />
                        <C heck Circleclass Name="h-4 w-4 t e xt-g r een-400mr-3flex-shrink-0" / />
                        <s pan>{feature}</s pan>
                      </d iv>

                    ))}
                    {product.features.length > 4 && (

                      <d iv class Name="t e xt-s m text-gray-400text-center">+{product.features.length - 4} more features
                      </d iv>

                    )}
                  </d iv>

                  <d iv class Name="s p a c e-y-3">
        </d iv>
                    <L ink to="{`/${product.id}`}" class Name="w-f u ll i n line-flex items-center justify-center px-4 py-3 bg-gradient-to-r from-purple-600 to-pink-600 text-white font-semibold rounded-lg hover:from-purple-700 hover:to-pink-700 transition-all duration-300transformhover:scale-105" />

                      View Details

                      <A rrow Rightclass Name="m l-2h-4w-4" />
                    </L ink>
                    <L ink to="/contact" class Name="w-f u ll i n line-flex items-center justify-center px-4 py-3 border border-purple-400 text-purple-400 font-semibold rounded-lg hover:bg-purple-400 hover:text-whitetransition-allduration-300">Start Free Trial
                    </L ink>
                  </d iv>

              ))}

            </d iv>
        </s ection>

        {/* C T A Section */}

        <s ection class Name="p y-20 b g-g r adient-to-brfrom-gray-900to-purple-900" />
          <d iv class Name="m a x-w-7 xl mx-a u to px-4 sm:px-6lg:px-8text-center">
        </d iv>
            <h2 c lass Name="t e xt-3 xl md:t e xt-4 xl font-boldtext-whitemb-4">Ready to Transform Your Business?
            </h2>
            <p c lass Name="t e xt-xl t e xt-gray-300 mb-8 max-w-3xlmx-auto" />

              Join thousands of businesses already using our micro S A A S solutions to streamline operations, 
              increase productivity, and drive growth.

            </p>
            <d iv class Name="f l ex f l ex-col sm:flex-rowgap-4justify-center">
        </d iv>
              <L ink to="/contact" class Name="i n l i ne-flex items-center px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-600 text-white font-semibold rounded-lg hover:from-purple-700 hover:to-pink-700 transition-all duration-300 transform hover:scale-105shadow-lghover:shadow-xl" />

                Get Started Today

                <A rrow Rightclass Name="m l-2h-5w-5" />
              </L ink>

              <a
                h r ef="tel:+13024640950"
                class Name="i n l i ne-flex items-center px-8 py-4 border-2 border-purple-400 text-purple-400 font-semibold rounded-lg hover:bg-purple-400 hover:text-white transition-all duration-300transformhover:scale-105" />
                Call +1 302 464 0950

              </a>
            </d iv>
            <d iv class Name="m t-8t e x t-gray-400">
        </d iv>
              <p>Email: kleber@ziontechgroup.com</p>
              <p>Address: 364 E Main St S T E 1008, Middletown D E 19709</p>
            </d iv>
        </s ection>
      </d iv>
        </d iv>
      </d iv>
          </d iv>
        </d iv>
      </d iv>
        </d iv>
      </d iv>
          </d iv>
        </d iv>
      </d iv>
        </d iv>
      </d iv>
      </d iv>

  );
};

export default Micro Saas Page;

import { useState, useEffect} from 'react';
import { Link } from 'react-router-dom';
import {;
'use client';
  ArrowRight, CheckCirc l e, Star, Users, Award, Zap, Shield, Brain, Cloud, Code, 
  BarChart, FileText, MessageCirc l e, Target, CheckSqua r e, DollarSign, Box, 
  Settings, Heart, Eye, Mic, Workflow, Link as LinkIcon, Wifi, Package, 
  TrendingUp, Calendar, ShoppingCa r t, Sparkles, Cpu, Globe, Database, 
  Smartphone, Lock, Monitor, Server, Mail, Phone, MapPin, Clock;
} from 'lucide-react';
import { ArrowRight, ShoppingCa r t } from 'lucide-react';
import { ArrowRight, CheckCirc l e, Star, Users, Zap, Shield, Cloud, Code, BarChart, FileText, MessageCirc l e, Target, CheckSqua r e, DollarSign, Box, Settings, Link as LinkIcon, Package, TrendingUp, Calendar, Globe, Database, Monitor, Mail } from 'lucide-react';

const MicroSaasPa g e: React.FC = () => {

  useEffect(() => {)
    setIsVisib l e(true);
  }, []);

  const microSaasProducts= [
    {
      id: 'zion-analytics-pro',
      title: 'Zion Analytics Pro',
      description: 'Advanced business intelligen c e platform with AI-poweredinsightsand real-timedashboards',
      price: '$99/month',
      originalPri c e: '$149/month',
      features: [
        'Real-timeanalyticsdashboard',
        'AI-poweredpredictiveinsights',
        'Custom report generation',
        'Team collaborati o n tools',
        'API integratio n s',
        'Mobile app access',
        'Data visualizati o n tools',
        'Export to multiple formats';
      ],
      icon: BarChart,
      color: 'from-blue-500to-purple-500',
      category: 'Analytics',
      rating: 4.9,
      reviews: 127,
      popular: true;
    },
    {
      id: 'zion-chat-ai',
      title: 'Zion Chat AI',
      description: 'Intellige n t customer support chatbot with natural language processing and multi-channelsupport',
      price: '$79/month',
      originalPri c e: '$119/month',
      features: [
        'Multi-languagesupport',
        'Sentiment analysis',
        'Escalation management',
        'Performan c e analytics',
        'Custom training',
        'Integrati o n APIs',
        'Live chat handoff',
        'Knowledge base management';
      ],
      icon: MessageCirc l e,
      color: 'from-green-500to-teal-500',
      category: 'Customer Support',
      rating: 4.8,
      reviews: 89,
      popular: false;
    },
    {
      id: 'zion-security-shield',
      title: 'Zion Security Shield',
      description: 'Comprehensi v e cybersecuri t y monitoring and threat detection for small to medium businesses',
      price: '$149/month',
      originalPri c e: '$199/month',
      features: [
        'Real-timethreatdetection',
        'Vulnerabili t y scanning',
        'Incident response automation',
        'Compliance reporting',
        'Security awareness training',
        '24/7 monitoring',
        'Mobile device management',
        'Firewall management';
      ],
      icon: Shield,
      color: 'from-red-500to-orange-500',
      category: 'Security',
      rating: 4.9,
      reviews: 156,
      popular: true;
    },
    {
      id: 'zion-cloud-vault',
      title: 'Zion Cloud Vault',
      description: 'Secure cloud backup and disaster recovery solution with automated backups and instant restore',
      price: '$59/month',
      originalPri c e: '$89/month',
      features: [
        'Automated daily backups',
        'Instant file recovery',
        'Version history tracking',
        'Cross-platformsync',
        'End-to-endencryption',
        'Compliance certificatio n s',
        'Unlimited storage',
        'Mobile access';
      ],
      icon: Cloud,
      color: 'from-cyan-500to-blue-500',
      category: 'Backup & Recovery',
      rating: 4.7,
      reviews: 203,
      popular: false;
    },
    {
      id: 'zion-content-studio',
      title: 'Zion Content Studio',
      description: 'AI-poweredcontentcreation and management platform for blogs, social media, and marketing',
      price: '$69/month',
      originalPri c e: '$99/month',
      features: [
        'AI content generation',
        'Multi-platformpublishing',
        'Brand voice training',
        'Content calendar',
        'SEO optimizati o n',
        'Image generation',
        'Video creation tools',
        'Performan c e tracking';
      ],
      icon: FileText,
      color: 'from-purple-500to-pink-500',
      category: 'Content Creation',
      rating: 4.6,
      reviews: 94,
      popular: false;
    },
    {
      id: 'zion-crm-intelligence',
      title: 'Zion CRM Intelligen c e',
      description: 'Smart customer relationsh i p management with AI insights and automated workflows',
      price: '$89/month',
      originalPri c e: '$129/month',
      features: [
        'Lead scoring automation',
        'Sales forecasti n g',
        'Customer insights',
        'Automation workflows',
        'Email marketing',
        'Pipeline management',
        'Team collaborati o n',
        'Mobile CRM access';
      ],
      icon: Users,
      color: 'from-indigo-500to-purple-500',
      category: 'CRM',
      rating: 4.8,
      reviews: 142,
      popular: true;
    },
    {
      id: 'zion-data-sync',
      title: 'Zion Data Sync',
      description: 'Automated data synchronizati o n across multiple platforms and databases',
      price: '$49/month',
      originalPri c e: '$79/month',
      features: [
        'Real-timedatasync',
        'Multiple platform support',
        'Data transformati o n',
        'Error handling',
        'Scheduled syncs',
        'Data validation',
        'API integratio n s',
        'Monitoring dashboard';
      ],
      icon: Database,
      color: 'from-emerald-500to-green-500',
      category: 'Data Management',
      rating: 4.5,
      reviews: 67,
      popular: false;
    },
    {
      id: 'zion-lead-magnet',
      title: 'Zion Lead Magnet',
      description: 'Lead generation and nurturing platform with automated email sequences and landing pages',
      price: '$79/month',
      originalPri c e: '$119/month',
      features: [
        'Landing page builder',
        'Email automation',
        'Lead scoring',
        'A/B testing',
        'Analytics dashboard',
        'CRM integrati o n',
        'Form builder',
        'Social media integrati o n';
      ],
      icon: Target,
      color: 'from-yellow-500to-orange-500',
      category: 'Marketing',
      rating: 4.7,
      reviews: 118,
      popular: false;
    },
    {
      id: 'zion-project-master',
      title: 'Zion Project Master',
      description: 'Advanced project management with AI-poweredinsightsand team collaborati o n tools',
      price: '$99/month',
      originalPri c e: '$149/month',
      features: [
        'Gantt charts',
        'Resource management',
        'Time tracking',
        'Budget monitoring',
        'Team collaborati o n',
        'File sharing',
        'Progress reporting',
        'Mobile app';
      ],
      icon: CheckSqua r e,
      color: 'from-violet-500to-purple-500',
      category: 'Project Management',
      rating: 4.8,
      reviews: 175,
      popular: true;
    },
    {
      id: 'zion-email-automation',
      title: 'Zion Email Automation',
      description: 'Intellige n t email marketing platform with AI-poweredpersonalizatio n and automation',
      price: '$59/month',
      originalPri c e: '$89/month',
      features: [
        'Email templates',
        'Automation workflows',
        'Personalizati o n engine',
        'A/B testing',
        'Analytics tracking',
        'List management',
        'Drip campaigns',
        'Integrati o n APIs';
      ],
      icon: Mail,
      color: 'from-pink-500to-rose-500',
      category: 'Email Marketing',
      rating: 4.6,
      reviews: 89,
      popular: false;
    },
    {
      id: 'zion-inventory-smart',
      title: 'Zion Inventory Smart',
      description: 'AI-poweredinventorymanagement with demand forecasti n g and automated reordering',
      price: '$89/month',
      originalPri c e: '$129/month',
      features: [
        'Demand forecasti n g',
        'Automated reordering',
        'Stock level monitoring',
        'Supplier management',
        'Barcode scanning',
        'Multi-locationsupport',
        'Reporting dashboard',
        'Mobile app';
      ],
      icon: Box,
      color: 'from-teal-500to-cyan-500',
      category: 'Inventory',
      rating: 4.7,
      reviews: 134,
      popular: false;
    },
    {
      id: 'zion-invoice-genius',
      title: 'Zion Invoice Genius',
      description: 'Automated invoicing and payment processing with AI-poweredexpensecategorizati o n',
      price: '$49/month',
      originalPri c e: '$79/month',
      features: [
        'Automated invoicing',
        'Payment processing',
        'Expense categorizati o n',
        'Tax calculatio n s',
        'Client portal',
        'Recurring billing',
        'Financial reporting',
        'Multi-currencysupport';
      ],
      icon: DollarSign,
      color: 'from-green-500to-emerald-500',
      category: 'Finance',
      rating: 4.8,
      reviews: 156,
      popular: true;
    },
    {
      id: 'zion-ai-video-editor',
      title: 'Zion AI Video Editor',
      description: 'AI-poweredvideoediting with automatic scene detection, color correction, and smart transitio n s',
      price: '$89/month',
      originalPri c e: '$129/month',
      features: [
        'Auto scene detection',
        'Smart color correction',
        'AI-generatedtransition s',
        'Voice-overgeneration',
        'Background removal',
        'Text-to-video',
        'Multi-formatexport',
        'Cloud rendering';
      ],
      icon: Monitor,
      color: 'from-purple-500to-pink-500',
      category: 'Video Production',
      rating: 4.7,
      reviews: 98,
      popular: false;
    },
    {
      id: 'zion-ai-translator-pro',
      title: 'Zion AI Translator Pro',
      description: 'Advanced AI translati o n with context awareness and industry-specificterminolog y support',
      price: '$69/month',
      originalPri c e: '$99/month',
      features: [
        '100+ language support',
        'Context-awaretranslation',
        'Industry terminolo g y',
        'Real-timetranslatio n',
        'Document translati o n',
        'Voice translati o n',
        'API integrati o n',
        'Quality scoring';
      ],
      icon: Globe,
      color: 'from-blue-500to-cyan-500',
      category: 'Translati o n',
      rating: 4.6,
      reviews: 134,
      popular: false;
    },
    {
      id: 'zion-ai-code-reviewer',
      title: 'Zion AI Code Reviewer',
      description: 'Intellige n t code review with automated bug detection, security analysis, and performan c e optimizati o n',
      price: '$149/month',
      originalPri c e: '$199/month',
      features: [
        'Automated code review',
        'Bug detection',
        'Security vulnerabili t y scan',
        'Performan c e optimizati o n',
        'Code quality metrics',
        'Best practice suggestio n s',
        'Multi-languagesupport',
        'Git integrati o n';
      ],
      icon: Code,
      color: 'from-indigo-500to-purple-500',
      category: 'Developme n t',
      rating: 4.8,
      reviews: 187,
      popular: true;
    },
    {
      id: 'zion-customer-insights',
      title: 'Zion Customer Insights',
      description: 'AI-poweredcustomerbehavior analysis with predictive insights and personaliz e d recommendatio n s',
      price: '$119/month',
      originalPri c e: '$159/month',
      features: [
        'Customer segmentati o n',
        'Behavior prediction',
        'Churn analysis',
        'Personalizati o n engine',
        'Sentiment analysis',
        'Lifetime value prediction',
        'Recommendati o n system',
        'Real-timeinsights';
      ],
      icon: Users,
      color: 'from-teal-500to-cyan-500',
      category: 'Analytics',
      rating: 4.7,
      reviews: 145,
      popular: false;
    },
    {
      id: 'zion-ai-email-assistant',
      title: 'Zion AI Email Assistant',
      description: 'Smart email management with AI-poweredresponses, scheduling, and priority classificati o n',
      price: '$59/month',
      originalPri c e: '$89/month',
      features: [
        'AI email responses',
        'Smart scheduling',
        'Priority classificati o n',
        'Spam filtering',
        'Email templates',
        'Follow-upautomation',
        'Sentiment analysis',
        'Calendar integrati o n';
      ],
      icon: Mail,
      color: 'from-orange-500to-red-500',
      category: 'Productivi t y',
      rating: 4.5,
      reviews: 112,
      popular: false;
    },
    {
      id: 'zion-ai-meeting-assistant',
      title: 'Zion AI Meeting Assistant',
      description: 'Intellige n t meeting management with transcripti o n, action items, and follow-upautomation',
      price: '$79/month',
      originalPri c e: '$119/month',
      features: [
        'Real-timetranscriptio n',
        'Action item extraction',
        'Meeting summaries',
        'Follow-upautomation',
        'Voice recogniti o n',
        'Multi-languagesupport',
        'Calendar integrati o n',
        'Team collaborati o n';
      ],
      icon: Calendar,
      color: 'from-green-500to-emerald-500',
      category: 'Productivi t y',
      rating: 4.6,
      reviews: 98,
      popular: false;
    },
    {
      id: 'zion-ai-seo-optimizer',
      title: 'Zion AI SEO Optimizer',
      description: 'AI-poweredSEOoptimizati o n with content analysis, keyword research, and ranking predictio n s',
      price: '$99/month',
      originalPri c e: '$149/month',
      features: [
        'Content optimizati o n',
        'Keyword research',
        'Ranking predictio n s',
        'Competitor analysis',
        'Technical SEO audit',
        'Link building suggestio n s',
        'Performan c e tracking',
        'Automated reports';
      ],
      icon: TrendingUp,
      color: 'from-yellow-500to-orange-500',
      category: 'Marketing',
      rating: 4.7,
      reviews: 167,
      popular: true;
    },
    {
      id: 'zion-ai-data-cleaner',
      title: 'Zion AI Data Cleaner',
      description: 'Intellige n t data cleaning and validation with automated error detection and correction',
      price: '$89/month',
      originalPri c e: '$129/month',
      features: [
        'Automated data cleaning',
        'Error detection',
        'Duplicate removal',
        'Data validation',
        'Format standardizati o n',
        'Missing data imputation',
        'Quality scoring',
        'API integrati o n';
      ],
      icon: Database,
      color: 'from-gray-500to-slate-500',
      category: 'Data Management',
      rating: 4.6,
      reviews: 89,
      popular: false;
    },
    {
      id: 'zion-ai-contract-analyzer',
      title: 'Zion AI Contract Analyzer',
      description: 'AI-poweredcontractanalysis with risk assessment, clause extraction, and compliance checking',
      price: '$199/month',
      originalPri c e: '$299/month',
      features: [
        'Contract analysis',
        'Risk assessment',
        'Clause extraction',
        'Compliance checking',
        'Version comparison',
        'Automated summaries',
        'Legal insights',
        'Document management';
      ],
      icon: FileText,
      color: 'from-violet-500to-purple-500',
      category: 'Legal',
      rating: 4.8,
      reviews: 76,
      popular: false;
    },
    {
      id: 'zion-ai-survey-builder',
      title: 'Zion AI Survey Builder',
      description: 'Intellige n t survey creation with AI-generatedquestions, response analysis, and insights',
      price: '$69/month',
      originalPri c e: '$99/month',
      features: [
        'AI question generation',
        'Response analysis',
        'Sentiment analysis',
        'Data visualizati o n',
        'Custom themes',
        'Multi-platformdistributio n',
        'Real-timeanalytics',
        'Export capabiliti e s';
      ],
      icon: CheckSqua r e,
      color: 'from-pink-500to-rose-500',
      category: 'Research',
      rating: 4.5,
      reviews: 123,
      popular: false;
    },
    {
      id: 'zion-ai-accounting-assistant',
      title: 'Zion AI Accounting Assistant',
      description: 'Smart accounting automation with expense categorizati o n, tax preparati o n, and financial insights',
      price: '$129/month',
      originalPri c e: '$179/month',
      features: [
        'Expense categorizati o n',
        'Tax preparati o n',
        'Financial insights',
        'Receipt scanning',
        'Invoice matching',
        'Compliance monitoring',
        'Reporting automation',
        'Multi-currencysupport';
      ],
      icon: DollarSign,
      color: 'from-emerald-500to-green-500',
      category: 'Finance',
      rating: 4.7,
      reviews: 156,
      popular: true;
    },
    {
      id: 'zion-ai-recruitment-pro',
      title: 'Zion AI Recruitme n t Pro',
      description: 'AI-poweredrecruitmen t with resume screening, candidate matching, and interview scheduling',
      price: '$179/month',
      originalPri c e: '$249/month',
      features: [
        'Resume screening',
        'Candidate matching',
        'Interview scheduling',
        'Skill assessment',
        'Background checks',
        'Onboarding automation',
        'Performan c e tracking',
        'Integrati o n capabiliti e s';
      ],
      icon: Users,
      color: 'from-blue-500to-indigo-500',
      category: 'HR',
      rating: 4.8,
      reviews: 134,
      popular: true;
    },
    {
      id: 'zion-ai-content-moderation',
      title: 'Zion AI Content Moderation',
      description: 'Automated content moderation with AI-powereddetectionof inappropria t e content and spam',
      price: '$149/month',
      originalPri c e: '$199/month',
      features: [
        'Content filtering',
        'Spam detection',
        'Image analysis',
        'Text analysis',
        'Video moderation',
        'Real-timeprocessing',
        'Custom rules',
        'API integrati o n';
      ],
      icon: Shield,
      color: 'from-red-500to-orange-500',
      category: 'Security',
      rating: 4.6,
      reviews: 98,
      popular: false;
    },
    {
      id: 'zion-ai-predictive-maintenance',
      title: 'Zion AI Predictive Maintenan c e',
      description: 'AI-poweredequipmentmonitoring with predictive maintenan c e and failure prevention',
      price: '$299/month',
      originalPri c e: '$399/month',
      features: [
        'Equipment monitoring',
        'Failure prediction',
        'Maintenan c e scheduling',
        'Performan c e analytics',
        'Alert system',
        'Cost optimizati o n',
        'IoT integrati o n',
        'Custom dashboards';
      ],
      icon: Settings,
      color: 'from-cyan-500to-blue-500',
      category: 'IoT',
      rating: 4.7,
      reviews: 67,
      popular: false;
    },
    {
      id: 'zion-ai-energy-manager',
      title: 'Zion AI Energy Manager',
      description: 'Smart energy management with consumpti o n optimizati o n and cost reduction recommendatio n s',
      price: '$199/month',
      originalPri c e: '$279/month',
      features: [
        'Energy monitoring',
        'Consumpti o n optimizati o n',
        'Cost analysis',
        'Predictive modeling',
        'Automated controls',
        'Sustainabili t y tracking',
        'Reporting dashboard',
        'IoT integrati o n';
      ],
      icon: Zap,
      color: 'from-yellow-500to-orange-500',
      category: 'Sustainabili t y',
      rating: 4.5,
      reviews: 89,
      popular: false;
    },
    {
      id: 'zion-ai-supply-chain-optimizer',
      title: 'Zion AI Supply Chain Optimizer',
      description: 'AI-poweredsupplychain optimizati o n with demand forecasti n g and inventory management',
      price: '$249/month',
      originalPri c e: '$349/month',
      features: [
        'Demand forecasti n g',
        'Inventory optimizati o n',
        'Route optimizati o n',
        'Supplier analysis',
        'Risk assessment',
        'Cost optimizati o n',
        'Real-timetracking',
        'Integrati o n capabiliti e s';
      ],
      icon: Package,
      color: 'from-indigo-500to-purple-500',
      category: 'Supply Chain',
      rating: 4.8,
      reviews: 112,
      popular: true;
    },
    {
      id: 'zion-ai-fraud-detector',
      title: 'Zion AI Fraud Detector',
      description: 'Advanced fraud detection with machine learning models and real-timetransactio n monitoring',
      price: '$179/month',
      originalPri c e: '$249/month',
      features: [
        'Real-timemonitoring',
        'Pattern recogniti o n',
        'Risk scoring',
        'Transacti o n analysis',
        'Alert system',
        'Machine learning models',
        'API integrati o n',
        'Compliance reporting';
      ],
      icon: Shield,
      color: 'from-red-500to-pink-500',
      category: 'Security',
      rating: 4.9,
      reviews: 198,
      popular: true;
    },
    {
      id: 'zion-ai-customer-service-pro',
      title: 'Zion AI Customer Service Pro',
      description: 'Advanced AI customer service with multi-channelsupportand intellige n t routing',
      price: '$159/month',
      originalPri c e: '$219/month',
      features: [
        'Multi-channelsupport',
        'Intellige n t routing',
        'Sentiment analysis',
        'Escalation management',
        'Knowledge base',
        'Performan c e analytics',
        'Integrati o n capabiliti e s',
        'Custom training';
      ],
      icon: MessageCirc l e,
      color: 'from-green-500to-teal-500',
      category: 'Customer Support',
      rating: 4.7,
      reviews: 167,
      popular: true;
    },
    {
      id: 'zion-ai-marketing-automation',
      title: 'Zion AI Marketing Automation',
      description: 'Intellige n t marketing automation with personaliz e d campaigns and customer journey optimizati o n',
      price: '$139/month',
      originalPri c e: '$189/month',
      features: [
        'Campaign automation',
        'Personalizati o n engine',
        'Customer journey mapping',
        'A/B testing',
        'Performan c e analytics',
        'Lead scoring',
        'Email marketing',
        'Social media integrati o n';
      ],
      icon: Target,
      color: 'from-purple-500to-pink-500',
      category: 'Marketing',
      rating: 4.6,
      reviews: 145,
      popular: false;
    },
    {
      id: 'zion-ai-document-ai',
      title: 'Zion AI Document AI',
      description: 'Advanced document processing with OCR, data extraction, and intellige n t document analysis',
      price: '$119/month',
      originalPri c e: '$159/month',
      features: [
        'OCR technology',
        'Data extraction',
        'Document classificati o n',
        'Form processing',
        'Text analysis',
        'Version control',
        'Search capabiliti e s',
        'API integrati o n';
      ],
      icon: FileText,
      color: 'from-gray-500to-slate-500',
      category: 'Document Management',
      rating: 4.7,
      reviews: 123,
      popular: false;
    }
  ];
  constcategories= ['All', 'Analytics', 'Customer Support', 'Security', 'Backup & Recovery', 'Content Creation', 'CRM', 'Data Management', 'Marketing', 'Project Management', 'Email Marketing', 'Inventory', 'Finance', 'Video Production', 'Translati o n', 'Developme n t', 'Productivi t y', 'Research', 'HR', 'IoT', 'Sustainabili t y', 'Supply Chain', 'Legal', 'Document Management'];
  const [selectedCatego r y, setSelectedCatego r y] = useState('All');

  const filteredProducts= selectedCategory=== 'All' 
    ? microSaasProduc t s;
    : microSaasProduc t s.filter(product => product.category === selectedCatego r y);
return (
    <>
      <Helmet></Helmet>
        <title />Micro SAAS Products - Zion Tech Group | AI-PoweredBusinessSolutions</title>
        <metaconstname= "description" content="Discover our comprehensi v e suite of micro SAAS products designed to solve specific business challenges. From AI analytics to cybersecuri t y, we have the tools you need to succeed." /  />
        <meta name="keywords" content="micro saas, business software, AI tools, analytics, CRM, project management, cybersecuri t y, automation" />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-brfrom-slate-900via-purple-900to-slate-900pt-20">
        {/* Hero Section */}
        <section className="w-5h-5ml-2" />
          <div className="min-h-screen bg-gradient-to-brfrom-slate-900via-purple-900to-slate-900pt-20">
          <div className="min-h-screen bg-gradient-to-brfrom-slate-900via-purple-900to-slate-900pt-20">
            <div className="min-h-screen bg-gradient-to-brfrom-slate-900via-purple-900to-slate-900pt-20">
              <h1 className="{`text-4" xl md: text-6xlfont-boldtext-whitemb-6transition-allduration-1000 ${isVisible ? 'opacity-100translate-y-0' : 'opacity-0translate-y-10',}`} />
                Micro SAAS;
                <span className="w-5h-5ml-2" />Business Solutions;
                </span>
              </h1>
              <p className="{`text-xl" text-gray-300mb-8max-w-3xlmx-autotransition-allduration-1000delay-300 ${isVisible ? 'opacity-100translate-y-0' : 'opacity-0translate-y-10'}`} />
                Powerful, ready-to-usesoftwaresolutions designed to solve specific business challenges.;
                No complex setup, no lengthy implementatio n s - just instant value.;
              </p>
              <div className="{`flex" flex-colsm: flex-rowgap-4justify-centertransition-allduration-1000delay-500 ${isVisible ? 'opacity-100translate-y-0' : 'opacity-0translate-y-10',}`} />
                <Link;
          to="/contact";
          className="inline-flexitems-centerpx-8py-4bg-gradient-to-rfrom-purple-600to-pink-600text-whitefont-semiboldrounded-lghover:from-purple-700hover:to-pink-700transition-allduration-300transformhover:scale-105shadow-lghover:shadow-xl"
        >
          Start Free Trial;
                  
          <ArrowRight className="w-5h-5ml-2" />
        </Link>
                <a;
                  href="tel:+130246409 5 0";
                  className="inline-flexitems-centerpx-8py-4border-2border-purple-400text-purple-400font-semiboldrounded-lghover:bg-purple-400hover:text-whitetransition-allduration-300transformhover:scale-105" />
                  Call +1 302 464 0950;
                </a>
              </div>
          </div>
        </section>

        {/* Category Filter */}
        <section className="w-5h-5ml-2" />
          <div className="min-h-screen bg-gradient-to-brfrom-slate-900via-purple-900to-slate-900pt-20">
            <div className="min-h-screen bg-gradient-to-brfrom-slate-900via-purple-900to-slate-900pt-20">
              {categories.map((category) => ())
                <button;
                  key="{category}";
                  onClick="{()" =  />setSelectedCatego r y(category)}
                  className="{`px-6" py-3rounded-lgfont-semiboldtransition-allduration-300 ${
                    selectedCategory=== category;
                      ? 'bg-gradient-to-rfrom-purple-600to-pink-600text-whiteshadow-lg';
                      : 'bg-gray-800text-gray-300hover: bg-gray-700hover:text-white';
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
        </section>

        {/* Products Grid */}
        <section className="w-5h-5ml-2" />
          <div className="min-h-screen bg-gradient-to-brfrom-slate-900via-purple-900to-slate-900pt-20">
            <div className="min-h-screen bg-gradient-to-brfrom-slate-900via-purple-900to-slate-900pt-20">
              {filteredProduc t s.map((product, index) => ())
                <div>>
                  key="{product.id}";
                  className="{`group" relative bg-gray-800rounded-xlp-6hover:bg-gray-700transition-allduration-300transform hover:scale-105borderborder-gray-700hover:border-purple-500 ${
                    product.popular ? 'ring-2ring-purple-500' : '';
                  }`} />
                  {product.popular && ()
                    <div className="min-h-screen bg-gradient-to-brfrom-slate-900via-purple-900to-slate-900pt-20">
                      <span className="w-5h-5ml-2" />Most Popular;
                      </span>
                    </div>
                  )}
                  
                  <div className="min-h-screen bg-gradient-to-brfrom-slate-900via-purple-900to-slate-900pt-20">
                    <div className="{`inline-flex" items-centerjustify-centerw-16h-16bg-gradient-to-r ${product.color} rounded-xlmb-4`} />
                      <product.iconclassName="h-8w-8text-white"  />
                    </div>
                    <h3 className="w-5h-5ml-2" />{product.title}</h3>
                    <p className="w-5h-5ml-2">{product.description}</p>
                    <div className="min-h-screen bg-gradient-to-brfrom-slate-900via-purple-900to-slate-900pt-20">
                      <div className="min-h-screen bg-gradient-to-brfrom-slate-900via-purple-900to-slate-900pt-20">
                        {[...Array(5)].map((_, i) => ())
                          <Star;
                            key="{i}";
                            className="{`h-4" w-4 ${
                              i < Math.floor(product.rating) ? 'text-yellow-400fill-current' : 'text-gray-600';
                            }`}
                           />
                        ))}
                      </div>
                      <span className="w-5h-5ml-2" />({product.reviews} reviews)</span>
                    </div>

                  <div className="min-h-screen bg-gradient-to-brfrom-slate-900via-purple-900to-slate-900pt-20">
                    <div className="min-h-screen bg-gradient-to-brfrom-slate-900via-purple-900to-slate-900pt-20">
                      <span className="w-5h-5ml-2" />{product.price}</span>
                      <span className="w-5h-5ml-2" />{product.originalPri c e}</span>
                    </div>
                    <span className="w-5h-5ml-2" />Save {Math.round((1 - parseInt(product.price.replace('$', '')) / parseInt(product.originalPri c e.replace('$', ''))) * 100)}%;
                    </span>
                  </div>

                  <div className="min-h-screen bg-gradient-to-brfrom-slate-900via-purple-900to-slate-900pt-20">
                    {product.features.slice(0, 4).map((feature, idx) => ())
                      <divkey="{idx}" className="flexitems-centertext-smtext-gray-300" />
                        <CheckCirc leclassName="w-5h-5ml-2" />
                        <span />{feature}</span>
                      </div>
                    ))}
                    {product.features.length > 4 && ()
                      <div className="min-h-screen bg-gradient-to-brfrom-slate-900via-purple-900to-slate-900pt-20">+{product.features.length - 4} more features>
                      </div>
                    )}
                  </div>

                  <div className="min-h-screen bg-gradient-to-brfrom-slate-900via-purple-900to-slate-900pt-20">
                    <Link;
          to="{`/${product.id}`}";
          className="w-fullinline-flexitems-centerjustify-centerpx-4py-3bg-gradient-to-rfrom-purple-600to-pink-600text-whitefont-semiboldrounded-lghover:from-purple-700hover:to-pink-700transition-allduration-300transformhover:scale-105"
        >
          View Details;
                      
          <ArrowRight className="w-5h-5ml-2" />
        </Link>
                    <Linkto="/contact" className="w-fullinline-flexitems-centerjustify-centerpx-4py-3borderborder-purple-400text-purple-400font-semiboldrounded-lghover:bg-purple-400hover:text-whitetransition-allduration-300">Start Free Trial;
                    </Link>
                  </div>
              ))}
            </div>
        </section>

        {/* CTA Section */}
        <section className="w-5h-5ml-2" />
          <div className="min-h-screen bg-gradient-to-brfrom-slate-900via-purple-900to-slate-900pt-20">
            <h2 className="w-5h-5ml-2" />Ready to Transform Your Business?;
            </h2>
            <p className="w-5h-5ml-2">Join thousands of businesses already using our micro SAAS solutions to streamline operations, 
              increase productivi t y, and drive growth.;
            </p>
            <div className="min-h-screen bg-gradient-to-brfrom-slate-900via-purple-900to-slate-900pt-20">
              <Link;
          to="/contact";
          className="inline-flexitems-centerpx-8py-4bg-gradient-to-rfrom-purple-600to-pink-600text-whitefont-semiboldrounded-lghover:from-purple-700hover:to-pink-700transition-allduration-300transformhover:scale-105shadow-lghover:shadow-xl"
        >
          Get Started Today;
                
          <ArrowRight className="w-5h-5ml-2" />
        </Link>
              <a;
                href="tel:+130246409 5 0";
                className="inline-flexitems-centerpx-8py-4border-2border-purple-400text-purple-400font-semiboldrounded-lghover:bg-purple-400hover:text-whitetransition-allduration-300transformhover:scale-105" />
                Call +1 302 464 0950;
              </a>
            </div>
            <div className="min-h-screen bg-gradient-to-brfrom-slate-900via-purple-900to-slate-900pt-20">
              <p />Email: kleber@ziontechgro u p.com</p>
              <p />Address: 364 E Main St STE 1008, Middletown DE 19709</p>
            </div>
        </section>
      </div>
    </>
  );
};

export default MicroSaasPa g e;
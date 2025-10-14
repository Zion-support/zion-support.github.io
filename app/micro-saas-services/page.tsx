import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { ArrowRight, Shield, Cloud, Users, Mail, Globe, Zap, Target, Calendar, Database, Monitor, Cpu, Phone, CheckCircle, Star, Award, Rocket, Sparkles, TrendingUp, Heart, Receipt, Package, Clock, Code, Cpu as Processor, Database as DataIcon, Mail as EmailIcon, Globe as WebIcon, Smartphone as MobileIcon, Monitor as DesktopIcon, Zap as LightningIcon, Target as MarketingIcon, Calendar as ScheduleIcon, Users as TeamIcon, BarChart3 as AnalyticsIcon, Cloud as CloudIcon, Shield as ProtectionIcon } from "lucide-react";

export default function MicroSaasServices() {
  const microSaasServices = [
    {
      id: "zion-ai-analytics-pro",
      name: "Zion AI Analytics Pro",
      description: "Advanced AI-powered business intelligence platform with real-time dashboards, predictive analytics, and automated reporting. Transform your data into actionable insights with 99.9% accuracy.",
      icon: <AnalyticsIcon className="w-8 h-8" />,
      price: "From $299/month",
      originalPrice: "$599/month",
      features: [
        "Real-time Analytics Dashboard",
        "Predictive Modeling & Forecasting", 
        "Custom Report Generation",
        "API Integration & Data Connectors",
        "Mobile App Access",
        "White-label Solutions",
        "Advanced Data Visualization",
        "Automated Insights & Alerts"
      ],
      category: "AI Analytics",
      popular: true,
      link: "/zion-ai-analytics-pro",
      benefits: [
        "40% increase in decision-making speed",
        "60% reduction in manual reporting time",
        "Real-time business insights",
        "Predictive trend analysis"
      ]
    },
    {
      id: "zion-security-shield-pro",
      name: "Zion Security Shield Pro",
      description: "Advanced cybersecurity protection with AI-powered threat detection, automated response, and 24/7 monitoring. Protect your business with enterprise-grade security.",
      icon: <ProtectionIcon className="w-8 h-8" />,
      price: "From $499/month",
      originalPrice: "$999/month",
      features: [
        "AI-Powered Threat Detection",
        "Automated Incident Response",
        "24/7 Security Monitoring",
        "Compliance Reporting (SOC2, GDPR)",
        "Vulnerability Assessment",
        "Security Training Modules",
        "Multi-factor Authentication",
        "Advanced Firewall Management"
      ],
      category: "Cybersecurity",
      popular: true,
      link: "/zion-security-shield-pro",
      benefits: [
        "99.9% threat detection accuracy",
        "50% faster incident response",
        "Complete compliance coverage",
        "24/7 expert monitoring"
      ]
    },
    {
      id: "zion-cloud-vault-pro",
      name: "Zion Cloud Vault Pro",
      description: "Secure cloud storage solution with end-to-end encryption, unlimited scalability, and advanced backup capabilities. Your data, secured and accessible anywhere.",
      icon: <CloudIcon className="w-8 h-8" />,
      price: "From $99/month",
      originalPrice: "$199/month",
      features: [
        "End-to-End Encryption",
        "Unlimited Storage Capacity",
        "Automated Backup Scheduling",
        "Cross-Platform Sync",
        "Version Control & Recovery",
        "Team Collaboration Tools",
        "Advanced Access Controls",
        "99.99% Uptime Guarantee"
      ],
      category: "Cloud Storage",
      popular: true,
      link: "/zion-cloud-vault-pro",
      benefits: [
        "Unlimited secure storage",
        "99.99% uptime guarantee",
        "Advanced collaboration features",
        "Complete data protection"
      ]
    },
    {
      id: "zion-ai-crm-pro",
      name: "Zion AI CRM Pro",
      description: "AI-powered customer relationship management with intelligent lead scoring, automated follow-ups, and predictive sales analytics. Boost your sales performance.",
      icon: <TeamIcon className="w-8 h-8" />,
      price: "From $199/month",
      originalPrice: "$399/month",
      features: [
        "AI Lead Scoring & Qualification",
        "Automated Follow-up Sequences",
        "Predictive Sales Analytics",
        "Multi-channel Communication",
        "Advanced Pipeline Management",
        "Customer Journey Mapping",
        "Integration with 100+ Tools",
        "Custom Workflow Automation"
      ],
      category: "CRM & Sales",
      popular: true,
      link: "/zion-ai-crm-pro",
      benefits: [
        "35% increase in lead conversion",
        "50% reduction in manual tasks",
        "Predictive sales insights",
        "Complete sales automation"
      ]
    },
    {
      id: "zion-ai-marketing-automation-pro",
      name: "Zion AI Marketing Automation Pro",
      description: "AI-powered marketing automation with predictive content generation, multi-channel orchestration, and advanced personalization. Scale your marketing efforts.",
      icon: <MarketingIcon className="w-8 h-8" />,
      price: "From $149/month",
      originalPrice: "$299/month",
      features: [
        "AI Content Generation",
        "Multi-channel Campaign Management",
        "Advanced Personalization Engine",
        "A/B Testing & Optimization",
        "Lead Nurturing Sequences",
        "Social Media Automation",
        "Email Marketing Platform",
        "ROI Tracking & Analytics"
      ],
      category: "Marketing Automation",
      popular: true,
      link: "/zion-ai-marketing-automation-pro",
      benefits: [
        "300% increase in campaign ROI",
        "80% reduction in manual work",
        "Advanced personalization",
        "Complete marketing automation"
      ]
    },
    {
      id: "zion-ai-project-manager-pro",
      name: "Zion AI Project Manager Pro",
      description: "AI-powered project management with intelligent task prioritization, resource allocation, and predictive project analytics. Manage projects like never before.",
      icon: <ScheduleIcon className="w-8 h-8" />,
      price: "From $99/month",
      originalPrice: "$199/month",
      features: [
        "AI Task Prioritization",
        "Resource Allocation Optimization",
        "Predictive Project Analytics",
        "Team Collaboration Tools",
        "Time Tracking & Reporting",
        "Risk Assessment & Mitigation",
        "Integration with 50+ Tools",
        "Custom Dashboard Creation"
      ],
      category: "Project Management",
      popular: true,
      link: "/zion-ai-project-manager-pro",
      benefits: [
        "25% faster project completion",
        "40% better resource utilization",
                "Predictive risk management",
        "Complete project visibility"
      ]
    },
    {
      id: "zion-ai-email-analyzer-pro",
      name: "Zion AI Email Analyzer Pro",
      description: "Intelligent email analysis with sentiment detection, priority scoring, and automated response suggestions. Transform your email productivity.",
      icon: <EmailIcon className="w-8 h-8" />,
      price: "From $79/month",
      originalPrice: "$159/month",
      features: [
        "AI Sentiment Analysis",
        "Priority Email Scoring",
        "Automated Response Suggestions",
        "Email Template Generation",
        "Spam Detection & Filtering",
        "Email Analytics Dashboard",
        "Team Collaboration Features",
        "Integration with Major Email Clients"
      ],
      category: "Email Management",
      popular: false,
      link: "/zion-ai-email-analyzer-pro",
      benefits: [
        "60% faster email processing",
        "90% accuracy in priority detection",
        "Automated response suggestions",
        "Complete email optimization"
      ]
    },
    {
      id: "zion-smart-inventory-optimizer-pro",
      name: "Zion Smart Inventory Optimizer Pro",
      description: "AI-powered inventory management with demand forecasting, automated reordering, and cost optimization. Streamline your supply chain operations.",
      icon: <Package className="w-8 h-8" />,
      price: "From $179/month",
      originalPrice: "$359/month",
      features: [
        "AI Demand Forecasting",
        "Automated Reorder Points",
        "Cost Optimization Analysis",
        "Multi-location Inventory Tracking",
        "Supplier Performance Analytics",
        "Waste Reduction Insights",
        "Integration with ERP Systems",
        "Real-time Inventory Alerts"
      ],
      category: "Inventory Management",
      popular: false,
      link: "/zion-smart-inventory-optimizer-pro",
      benefits: [
        "30% reduction in inventory costs",
        "50% fewer stockouts",
        "Automated reordering",
        "Complete supply chain visibility"
      ]
    },
    {
      id: "zion-ai-customer-sentiment-tracker-pro",
      name: "Zion AI Customer Sentiment Tracker Pro",
      description: "Advanced customer sentiment analysis across all channels with real-time monitoring, trend analysis, and actionable insights. Understand your customers better.",
      icon: <Heart className="w-8 h-8" />,
      price: "From $129/month",
      originalPrice: "$259/month",
      features: [
        "Multi-channel Sentiment Analysis",
        "Real-time Monitoring Dashboard",
        "Trend Analysis & Reporting",
        "Customer Journey Mapping",
        "Automated Alert System",
        "Competitor Sentiment Tracking",
        "Custom Sentiment Models",
        "Integration with CRM Systems"
      ],
      category: "Customer Analytics",
      popular: false,
      link: "/zion-ai-customer-sentiment-tracker-pro",
      benefits: [
        "Real-time customer insights",
        "40% improvement in customer satisfaction",
        "Proactive issue detection",
        "Complete sentiment visibility"
      ]
    },
    {
      id: "zion-smart-expense-categorizer-pro",
      name: "Zion Smart Expense Categorizer Pro",
      description: "AI-powered expense management with automatic categorization, receipt processing, and financial insights. Simplify your financial management.",
      icon: <Receipt className="w-8 h-8" />,
      price: "From $89/month",
      originalPrice: "$179/month",
      features: [
        "AI Receipt Processing",
        "Automatic Expense Categorization",
        "Fraud Detection & Alerts",
        "Budget Tracking & Alerts",
        "Tax Preparation Support",
        "Multi-currency Support",
        "Team Expense Management",
        "Advanced Financial Reporting"
      ],
      category: "Financial Management",
      popular: false,
      link: "/zion-smart-expense-categorizer-pro",
      benefits: [
        "90% reduction in manual data entry",
        "95% accuracy in categorization",
        "Automated fraud detection",
        "Complete financial visibility"
      ]
    },
    {
      id: "zion-ai-content-studio-pro",
      name: "Zion AI Content Studio Pro",
      description: "Comprehensive AI content creation platform with multi-format support, brand voice training, and SEO optimization. Create content at scale.",
      icon: <DocumentIcon className="w-8 h-8" />,
      price: "From $159/month",
      originalPrice: "$319/month",
      features: [
        "Multi-format Content Generation",
        "Brand Voice Training & Consistency",
        "SEO Optimization & Analysis",
        "Plagiarism Detection & Prevention",
        "Content Calendar Management",
        "Team Collaboration Tools",
        "Performance Analytics",
        "Integration with Publishing Platforms"
      ],
      category: "Content Creation",
      popular: false,
      link: "/zion-ai-content-studio-pro",
      benefits: [
        "500% increase in content output",
        "80% improvement in SEO performance",
        "Consistent brand voice",
        "Complete content automation"
      ]
    },
    {
      id: "zion-ai-devops-automation-pro",
      name: "Zion AI DevOps Automation Pro",
      description: "Intelligent DevOps automation with AI-powered deployment optimization, performance monitoring, and automated testing. Accelerate your development cycle.",
      icon: <ConfigIcon className="w-8 h-8" />,
      price: "From $229/month",
      originalPrice: "$459/month",
      features: [
        "AI-Powered Deployment Optimization",
        "Automated Testing & Quality Assurance",
        "Performance Monitoring & Alerts",
        "Infrastructure as Code Management",
        "Continuous Integration/Deployment",
        "Security Scanning & Compliance",
        "Resource Optimization",
        "Team Collaboration & Workflow"
      ],
      category: "DevOps & Automation",
      popular: false,
      link: "/zion-ai-devops-automation-pro",
      benefits: [
        "50% faster deployment cycles",
        "70% reduction in deployment errors",
        "Automated quality assurance",
        "Complete DevOps automation"
      ]
    }
  ];

  const categories = [
    { name: "AI Analytics", icon: <AnalyticsIcon className="w-5 h-5" />, count: 2 },
    { name: "Cybersecurity", icon: <ProtectionIcon className="w-5 h-5" />, count: 1 },
    { name: "Cloud Storage", icon: <CloudIcon className="w-5 h-5" />, count: 1 },
    { name: "CRM & Sales", icon: <TeamIcon className="w-5 h-5" />, count: 1 },
    { name: "Marketing Automation", icon: <MarketingIcon className="w-5 h-5" />, count: 1 },
    { name: "Project Management", icon: <ScheduleIcon className="w-5 h-5" />, count: 1 },
    { name: "Email Management", icon: <EmailIcon className="w-5 h-5" />, count: 1 },
    { name: "Inventory Management", icon: <Package className="w-5 h-5" />, count: 1 },
    { name: "Customer Analytics", icon: <Heart className="w-5 h-5" />, count: 1 },
    { name: "Financial Management", icon: <Receipt className="w-5 h-5" />, count: 1 },
    { name: "Content Creation", icon: <DocumentIcon className="w-5 h-5" />, count: 1 },
    { name: "DevOps & Automation", icon: <ConfigIcon className="w-5 h-5" />, count: 1 }
  ];

  const stats = [
    { number: "12+", label: "Micro SAAS Solutions", icon: <Rocket className="w-6 h-6" /> },
    { number: "99.9%", label: "Uptime SLA", icon: <Award className="w-6 h-6" /> },
    { number: "24/7", label: "Support Available", icon: <SupportIcon className="w-6 h-6" /> },
    { number: "50%", label: "Average Cost Savings", icon: <TrendingUp className="w-6 h-6" /> }
  ];

  return (
    <>
      <Helmet>
        <title>Micro SAAS Services - Zion Tech Group | AI-Powered Business Solutions</title>
        <meta
          name="description"
          content="Discover our comprehensive suite of micro SAAS solutions including AI analytics, cybersecurity, cloud storage, CRM, marketing automation, and more. Transform your business with cutting-edge technology."
        />
        <meta
          name="keywords"
          content="micro SAAS, AI analytics, cybersecurity, cloud storage, CRM, marketing automation, project management, email management, inventory management, customer analytics, financial management, content creation, DevOps automation"
  Clock, 
  Globe, 
  Target, 
  Calendar, 
  Package, 
  Heart, 
  Receipt, 
  TrendingUp, 
  Cpu, 
  Database, 
  Code, 
  Smartphone, 
  Monitor,
  CheckCircle,
  Star,
  Sparkles,
  Award,
  Phone,
  MapPin
} from "lucide-react";

const MicroSaaSServicesPage = () => {
  const microSaasServices = [
    {
      name: "Zion AI Analytics Pro",
      description: "Advanced AI-powered business intelligence platform with real-time dashboards, predictive analytics, and automated insights generation. Transform your data into actionable business strategies.",
      price: "From $299/month",
      features: ["Real-time analytics", "Predictive modeling", "Custom dashboards", "API integration", "24/7 support"],
      icon: <BarChart3 className="w-8 h-8" />,
      link: "/zion-ai-analytics-pro",
      category: "AI-Powered",
      color: "from-blue-500 to-cyan-500",
      popular: true
    },
    {
      name: "Zion Security Shield Pro",
      description: "Enterprise-grade cybersecurity protection with AI-powered threat detection, automated response, and compliance monitoring. Protect your business from evolving cyber threats.",
      price: "From $499/month",
      features: ["AI threat detection", "Automated response", "Compliance monitoring", "Real-time alerts", "Security audits"],
      icon: <Shield className="w-8 h-8" />,
      link: "/zion-security-shield-pro",
      category: "Security",
      color: "from-red-500 to-pink-500",
      popular: true
    },
    {
      name: "Zion Cloud Vault Enterprise",
      description: "Secure cloud storage solution with end-to-end encryption, unlimited scalability, and advanced collaboration features. Store, share, and collaborate on your files securely.",
      price: "From $99/month",
      features: ["End-to-end encryption", "Unlimited storage", "Team collaboration", "Version control", "Mobile access"],
      icon: <Cloud className="w-8 h-8" />,
      link: "/zion-cloud-vault-enterprise",
      category: "Storage",
      color: "from-purple-500 to-indigo-500"
    },
    {
      name: "Zion AI CRM Pro",
      description: "AI-powered customer relationship management with intelligent lead scoring, automated follow-ups, and predictive customer insights. Maximize your sales potential.",
      price: "From $199/month",
      features: ["AI lead scoring", "Automated follow-ups", "Customer insights", "Sales forecasting", "Integration APIs"],
      icon: <Users className="w-8 h-8" />,
      link: "/zion-ai-crm-pro",
      category: "CRM",
      color: "from-green-500 to-emerald-500",
      popular: true
    },
    {
      name: "Zion AI Marketing Automation Pro",
      description: "Comprehensive marketing automation platform with AI-powered content generation, multi-channel orchestration, and advanced analytics. Scale your marketing efforts.",
      price: "From $149/month",
      features: ["AI content generation", "Multi-channel campaigns", "Advanced analytics", "A/B testing", "Lead nurturing"],
      icon: <Target className="w-8 h-8" />,
      link: "/zion-ai-marketing-automation-pro",
      category: "Marketing",
      color: "from-orange-500 to-yellow-500"
    },
    {
      name: "Zion AI Project Manager Pro",
      description: "Intelligent project management with AI-powered task prioritization, resource allocation, and risk assessment. Streamline your project workflows.",
      price: "From $99/month",
      features: ["AI task prioritization", "Resource optimization", "Risk assessment", "Team collaboration", "Progress tracking"],
      icon: <Calendar className="w-8 h-8" />,
      link: "/zion-ai-project-manager-pro",
      category: "Project Management",
      color: "from-indigo-500 to-purple-500"
    },
    {
      name: "Zion AI Email Analyzer Pro",
      description: "Advanced email analysis tool with sentiment analysis, spam detection, and productivity insights. Optimize your email communication.",
      price: "From $79/month",
      features: ["Sentiment analysis", "Spam detection", "Productivity insights", "Email templates", "Analytics dashboard"],
      icon: <Mail className="w-8 h-8" />,
      link: "/zion-ai-email-analyzer-pro",
      category: "Communication",
      color: "from-cyan-500 to-blue-500"
    },
    {
      name: "Zion Smart Inventory Optimizer",
      description: "AI-powered inventory management with demand forecasting, automated reordering, and cost optimization. Reduce waste and maximize efficiency.",
      price: "From $129/month",
      features: ["Demand forecasting", "Automated reordering", "Cost optimization", "Real-time tracking", "Supplier integration"],
      icon: <Package className="w-8 h-8" />,
      link: "/zion-smart-inventory-optimizer",
      category: "Inventory",
      color: "from-teal-500 to-green-500"
    },
    {
      name: "Zion AI Customer Sentiment Tracker",
      description: "Real-time customer sentiment analysis across all channels with automated alerts and actionable insights. Understand your customers better.",
      price: "From $89/month",
      features: ["Real-time analysis", "Multi-channel monitoring", "Automated alerts", "Sentiment trends", "Actionable insights"],
      icon: <Heart className="w-8 h-8" />,
      link: "/zion-ai-customer-sentiment-tracker",
      category: "Analytics",
      color: "from-pink-500 to-rose-500"
    },
    {
      name: "Zion Smart Expense Categorizer",
      description: "AI-powered expense management with automatic categorization, receipt processing, and compliance monitoring. Simplify your financial tracking.",
      price: "From $59/month",
      features: ["Auto categorization", "Receipt processing", "Compliance monitoring", "Expense reports", "Tax preparation"],
      icon: <Receipt className="w-8 h-8" />,
      link: "/zion-smart-expense-categorizer",
      category: "Finance",
      color: "from-amber-500 to-orange-500"
    },
    {
      name: "Zion AI Code Assistant Pro",
      description: "Advanced AI-powered coding assistant with code generation, debugging, and optimization suggestions. Accelerate your development process.",
      price: "From $199/month",
      features: ["Code generation", "Debugging assistance", "Code optimization", "Multi-language support", "Team collaboration"],
      icon: <Code className="w-8 h-8" />,
      link: "/zion-ai-code-assistant-pro",
      category: "Development",
      color: "from-violet-500 to-purple-500"
    },
    {
      name: "Zion AI Content Studio Pro",
      description: "Comprehensive content creation platform with AI-powered writing, design, and optimization tools. Create engaging content at scale.",
      price: "From $149/month",
      features: ["AI content generation", "Design automation", "SEO optimization", "Multi-format support", "Brand consistency"],
      icon: <Globe className="w-8 h-8" />,
      link: "/zion-ai-content-studio-pro",
      category: "Content",
      color: "from-emerald-500 to-teal-500"
    }
  ];

  const categories = ["All", "AI-Powered", "Security", "Storage", "CRM", "Marketing", "Project Management", "Communication", "Inventory", "Analytics", "Finance", "Development", "Content"];

  const stats = [
    { number: "50+", label: "Micro SAAS Solutions", icon: <Zap className="w-6 h-6" /> },
    { number: "10,000+", label: "Active Users", icon: <Users className="w-6 h-6" /> },
    { number: "99.9%", label: "Uptime SLA", icon: <Shield className="w-6 h-6" /> },
    { number: "24/7", label: "Support Available", icon: <Clock className="w-6 h-6" /> }
  ];

  const testimonials = [
    {
      name: "Sarah Johnson",
      company: "TechStart Inc.",
      role: "CEO",
      content: "Zion AI Analytics Pro transformed our data analysis. We've increased our decision-making speed by 300% and identified new revenue opportunities worth $2M annually.",
      rating: 5,
      avatar: "SJ"
    },
    {
      name: "Michael Chen",
      company: "E-commerce Solutions",
      role: "CTO",
      content: "The micro SAAS solutions are incredibly powerful and easy to implement. We've saved thousands of hours with their automation tools and improved our efficiency by 60%.",
      rating: 5,
      avatar: "MC"
    },
    {
      name: "Emily Rodriguez",
      company: "Digital Marketing Agency",
      role: "Operations Director",
      content: "Outstanding support and cutting-edge technology. Zion Tech Group's micro SAAS solutions have become essential to our daily operations and growth strategy.",
      rating: 5,
      avatar: "ER"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 relative overflow-hidden">
      <Helmet>
        <title>Micro SAAS Services | Zion Tech Group - AI-Powered Business Solutions</title>
        <meta
          name="description"
          content="Discover our comprehensive suite of micro SAAS services including AI analytics, security, CRM, marketing automation, and more. Transform your business with cutting-edge technology solutions."
        />
        <meta
          name="keywords"
          content="micro SAAS, AI analytics, business intelligence, CRM, marketing automation, project management, cloud storage, cybersecurity, business solutions"
        />
        <link rel="canonical" href="https://ziontechgroup.com/micro-saas-services" />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 relative overflow-hidden">
        {/* Animated Background */}
        <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 via-purple-500/10 to-pink-500/10 animate-pulse"></div>
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_50%_50%,rgba(120,119,198,0.3),transparent_50%)]"></div>
        
        {/* Hero Section */}
        <section className="pt-20 pb-16 px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-7xl mx-auto text-center">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-cyan-500/20 to-purple-500/20 border border-cyan-500/30 mb-6">
              <Sparkles className="w-4 h-4 text-cyan-400 mr-2" />
              <span className="text-cyan-400 text-sm font-medium">#1 Micro SAAS Solutions Provider 2024</span>
            </div>
            
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400">
                Micro SAAS Solutions
              </span>
            </h1>
            
            <p className="text-lg md:text-xl lg:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto leading-relaxed text-center">
              Transform your business with our comprehensive suite of AI-powered micro SAAS solutions. 
              Ready-to-deploy software that delivers immediate value and accelerates your digital transformation.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
              <Link
                to="/contact"
                className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 flex items-center justify-center group shadow-lg hover:shadow-cyan-500/25 hover:scale-105"
              >
                Start Free Trial
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                to="/demo"
                className="border border-cyan-400 text-cyan-400 px-8 py-4 rounded-lg font-semibold hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300 group hover:scale-105"
              >
                Watch Demo
                <Sparkles className="w-5 h-5 ml-2 group-hover:rotate-12 transition-transform" />
              </Link>
            </div>
            
            {/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-5xl mx-auto">
              {stats.map((stat, index) => (
                <div key={index} className="text-center group">
                  <div className="w-12 h-12 md:w-16 md:h-16 mx-auto mb-4 rounded-full bg-gradient-to-r from-cyan-500/20 to-purple-500/20 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    {stat.icon}
                  </div>
                  <div className="text-xl md:text-2xl lg:text-3xl font-bold text-white mb-2">{stat.number}</div>
                  <div className="text-gray-300 text-xs md:text-sm">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Categories Filter */}
        <section className="py-8 px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-8">
              <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
                Browse by Category
              </h2>
              <p className="text-gray-300">Find the perfect solution for your business needs</p>
            </div>
            <div className="flex flex-wrap justify-center gap-4">
              {categories.map((category, index) => (
                <div
                  key={index}
                  className="flex items-center space-x-2 px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full border border-white/20 hover:bg-white/20 transition-all duration-300 cursor-pointer group"
                >
                  <span className="text-cyan-400 group-hover:text-cyan-300 transition-colors">
                    {category.icon}
                  </span>
                  <span className="text-white text-sm font-medium">{category.name}</span>
                  <span className="text-cyan-400 text-xs bg-cyan-500/20 px-2 py-1 rounded-full">
                    {category.count}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Services Grid */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400">
                  Our Micro SAAS Solutions
                </span>
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Discover our comprehensive suite of AI-powered micro SAAS solutions designed to transform your business operations.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {microSaasServices.map((service, index) => (
                <div
                  key={index}
                  className="group bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-cyan-500/10 relative overflow-hidden"
                >
                  {service.popular && (
                    <div className="absolute top-4 right-4">
                      <span className="bg-gradient-to-r from-yellow-400 to-orange-500 text-black text-xs font-bold px-2 py-1 rounded-full">
                        POPULAR
                      </span>
                    </div>
                  )}
                  
                  {/* Animated background effect */}
                  <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/5 to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  
                  <div className="relative z-10">
                    <div className="flex items-center mb-4">
                      <div className="w-16 h-16 rounded-lg bg-gradient-to-r from-purple-500 to-cyan-500 flex items-center justify-center text-white mr-4 group-hover:scale-110 transition-transform">
                        {service.icon}
                      </div>
                      <div className="flex-1">
                        <div className="text-center mb-2">
                          <span className="text-xs bg-cyan-500/20 text-cyan-300 px-2 py-1 rounded-full border border-cyan-500/30">
                            {service.category}
                          </span>
                        </div>
                      </div>
                    </div>
                    
                    <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-cyan-300 transition-colors">
                      {service.name}
                    </h3>
                    <p className="text-gray-300 text-sm leading-relaxed mb-4">
                      {service.description}
                    </p>
                    
                    {/* Pricing */}
                    <div className="text-center mb-4">
                      <div className="flex items-center justify-center space-x-2">
                        <span className="text-cyan-400 font-bold text-lg">{service.price}</span>
                        {service.originalPrice && (
                          <span className="text-gray-500 line-through text-sm">{service.originalPrice}</span>
                        )}
                      </div>
                    </div>
                    
                    {/* Key Features */}
                    <div className="space-y-2 mb-6">
                      {service.features.slice(0, 4).map((feature, idx) => (
                        <div key={idx} className="flex items-center text-sm text-gray-300">
                          <CheckCircle className="w-4 h-4 text-cyan-400 mr-2 flex-shrink-0" />
                          <span>{feature}</span>
                        </div>
                      ))}
                      {service.features.length > 4 && (
                        <div className="text-xs text-cyan-400 text-center">
                          +{service.features.length - 4} more features
                        </div>
                      )}
                    </div>
                    
                    {/* Benefits */}
                    <div className="mb-6">
                      <h4 className="text-sm font-semibold text-cyan-400 mb-2">Key Benefits:</h4>
                      <div className="space-y-1">
                        {service.benefits.slice(0, 2).map((benefit, idx) => (
                          <div key={idx} className="text-xs text-gray-300 flex items-center">
                            <div className="w-1.5 h-1.5 bg-cyan-400 rounded-full mr-2 flex-shrink-0"></div>
                            <span>{benefit}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                    
                    <div className="mt-4 text-center">
                      <Link
                        to={service.link}
                        className="inline-flex items-center text-cyan-400 hover:text-cyan-300 font-medium group-hover:translate-x-1 transition-all duration-300"
                      >
                        Learn More
                        <ArrowRight className="w-4 h-4 ml-1" />
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Contact Information Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Ready to Transform Your Business?
              </h2>
              <p className="text-xl text-gray-300 mb-8">
                Join thousands of businesses already using our micro SAAS solutions to drive growth and innovation. 
                Start your free trial today or contact us for a personalized consultation.
              </p>
              
              {/* Contact Details */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                <div className="text-center">
                  <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-lg flex items-center justify-center mx-auto mb-3">
                    <EmailIcon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-white font-semibold mb-2">Email</h3>
                  <p className="text-cyan-400">kleber@ziontechgroup.com</p>
                </div>
                <div className="text-center">
                  <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-lg flex items-center justify-center mx-auto mb-3">
                    <Phone className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-white font-semibold mb-2">Phone</h3>
                  <p className="text-cyan-400">+1 302 464 0950</p>
                </div>
                <div className="text-center">
                  <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-lg flex items-center justify-center mx-auto mb-3">
                    <Globe className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-white font-semibold mb-2">Address</h3>
                  <p className="text-cyan-400 text-sm">364 E Main St STE 1008<br />Middletown DE 19709</p>
                </div>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  to="/contact"
                  className="group bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 flex items-center justify-center shadow-lg hover:shadow-cyan-500/25 hover:scale-105"
                >
                  Start Free Trial
                  <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                </Link>
                <Link
                  to="/demo"
                  className="border border-cyan-400 text-cyan-400 px-8 py-4 rounded-lg font-semibold hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300 hover:scale-105"
                >
                  Schedule Demo
                </Link>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
      {/* Animated Background */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-cyan-500/20 to-purple-500/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-br from-purple-500/20 to-pink-500/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-br from-blue-500/10 to-cyan-500/10 rounded-full blur-3xl animate-pulse delay-500"></div>
      </div>

      {/* Hero Section */}
      <section className="pt-20 pb-16 px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-7xl mx-auto text-center">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-cyan-500/20 to-purple-500/20 border border-cyan-500/30 mb-6">
            <Sparkles className="w-4 h-4 text-cyan-400 mr-2" />
            <span className="text-cyan-400 text-sm font-medium">50+ Micro SAAS Solutions Available</span>
          </div>
          
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400">
              Micro SAAS Services
            </span>
          </h1>
          
          <p className="text-lg md:text-xl lg:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto leading-relaxed">
            Transform your business with our comprehensive suite of AI-powered micro SAAS solutions. 
            From analytics to security, we have everything you need to accelerate growth and efficiency.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
            <Link
              to="/contact"
              className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 flex items-center justify-center group shadow-lg hover:shadow-cyan-500/25 hover:scale-105"
            >
              Get Started Today
              <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link
              to="/demo"
              className="border border-cyan-400 text-cyan-400 px-8 py-4 rounded-lg font-semibold hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300 group hover:scale-105"
            >
              Watch Demo
              <Monitor className="w-5 h-5 ml-2 group-hover:rotate-12 transition-transform" />
            </Link>
          </div>
          
          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-5xl mx-auto">
            {stats.map((stat, index) => (
              <div key={index} className="text-center group">
                <div className="w-12 h-12 md:w-16 md:h-16 mx-auto mb-4 rounded-full bg-gradient-to-r from-cyan-500/20 to-purple-500/20 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  {stat.icon}
                </div>
                <div className="text-xl md:text-2xl lg:text-3xl font-bold text-white mb-2">{stat.number}</div>
                <div className="text-gray-300 text-xs md:text-sm">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
              Our Micro SAAS Solutions
            </h2>
            <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
              Choose from our comprehensive suite of AI-powered micro SAAS solutions designed to 
              address every aspect of modern business operations.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {microSaasServices.map((service, index) => (
              <div
                key={index}
                className="group bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-cyan-500/10 relative overflow-hidden"
              >
                {service.popular && (
                  <div className="absolute top-4 right-4">
                    <span className="bg-gradient-to-r from-cyan-500 to-purple-500 text-white px-3 py-1 rounded-full text-xs font-semibold">
                      Most Popular
                    </span>
                  </div>
                )}
                
                <div className="flex items-center mb-4">
                  <div className={`w-12 h-12 rounded-lg bg-gradient-to-r ${service.color} flex items-center justify-center text-white mr-4 group-hover:scale-110 transition-transform`}>
                    {service.icon}
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-semibold text-white group-hover:text-cyan-400 transition-colors">
                      {service.name}
                    </h3>
                    <p className="text-cyan-400 font-medium">{service.price}</p>
                  </div>
                </div>
                
                <p className="text-gray-300 text-sm leading-relaxed mb-4">
                  {service.description}
                </p>
                
                <div className="mb-4">
                  <div className="flex items-center mb-2">
                    <span className="text-xs font-medium text-gray-400 bg-gray-700/50 px-2 py-1 rounded">
                      {service.category}
                    </span>
                  </div>
                  <div className="flex flex-wrap gap-1">
                    {service.features.slice(0, 3).map((feature, featureIndex) => (
                      <span key={featureIndex} className="text-xs text-gray-400 bg-gray-800/50 px-2 py-1 rounded">
                        {feature}
                      </span>
                    ))}
                    {service.features.length > 3 && (
                      <span className="text-xs text-gray-400 bg-gray-800/50 px-2 py-1 rounded">
                        +{service.features.length - 3} more
                      </span>
                    )}
                  </div>
                </div>
                
                <div className="flex items-center justify-between">
                  <Link
                    to={service.link}
                    className="text-cyan-400 text-sm font-medium group-hover:text-cyan-300 transition-colors flex items-center"
                  >
                    Learn More
                    <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
                  </Link>
                  <Link
                    to="/contact"
                    className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-4 py-2 rounded-lg text-sm font-medium hover:from-cyan-600 hover:to-purple-700 transition-all duration-300"
                  >
                    Get Started
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-slate-800/50 to-purple-800/50 relative z-10">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Trusted by Industry Leaders
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              See what our clients say about our micro SAAS solutions
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="group bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-cyan-500/10 relative overflow-hidden"
              >
                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-300 mb-4 italic leading-relaxed">"{testimonial.content}"</p>
                <div className="flex items-center">
                  <div className="w-10 h-10 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-full flex items-center justify-center text-white font-semibold mr-3">
                    {testimonial.avatar}
                  </div>
                  <div>
                    <div className="font-semibold text-white">{testimonial.name}</div>
                    <div className="text-sm text-gray-400">{testimonial.role}, {testimonial.company}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-cyan-900/30 to-purple-900/30 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
            Ready to Transform Your Business?
          </h2>
          <p className="text-xl text-gray-300 mb-8 leading-relaxed">
            Join thousands of businesses already using our micro SAAS solutions to drive growth and innovation. 
            Start your digital transformation journey today.
          </p>
          
          {/* Contact Information */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            <div className="text-center">
              <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-lg flex items-center justify-center mx-auto mb-3">
                <Mail className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-white font-semibold mb-2">Email</h3>
              <p className="text-cyan-400">kleber@ziontechgroup.com</p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-lg flex items-center justify-center mx-auto mb-3">
                <Phone className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-white font-semibold mb-2">Phone</h3>
              <p className="text-cyan-400">+1 302 464 0950</p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-lg flex items-center justify-center mx-auto mb-3">
                <MapPin className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-white font-semibold mb-2">Address</h3>
              <p className="text-cyan-400 text-sm">364 E Main St STE 1008<br />Middletown DE 19709</p>
            </div>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 flex items-center justify-center group shadow-lg hover:shadow-cyan-500/25 hover:scale-105"
            >
              Start Your Journey
              <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link
              to="/services"
              className="border border-cyan-400 text-cyan-400 px-8 py-4 rounded-lg font-semibold hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300 group hover:scale-105"
            >
              Explore All Services
              <Sparkles className="w-5 h-5 ml-2 group-hover:rotate-12 transition-transform" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default MicroSaaSServicesPage;

import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { 
  ArrowRight, 
  Brain, 
  Shield, 
  Zap, 
  BarChart3, 
  Cloud, 
  Users, 
  Mail, 
  Target, 
  Calendar, 
  Package, 
  Heart, 
  Receipt, 
  Clock, 
  Globe, 
  Code, 
  Database, 
  Settings, 
  Monitor, 
  Smartphone, 
  CheckCircle, 
  Star, 
  Award, 
  Rocket, 
  Sparkles,
  TrendingUp,
  FileText,
  Bot,
  Cpu,
  Network,
  Lock,
  Server,
  HardDrive,
  Headphones,
  Laptop,
  Phone,
  MapPin,
  Mail as EmailIcon,
  Phone as PhoneIcon
} from "lucide-react";

const MicroSaaSServicesPage = () => {
  const microSaasServices = [
    {
      id: "zion-analytics-pro",
      name: "Zion Analytics Pro",
      description: "AI-powered business intelligence platform with real-time dashboards, predictive analytics, and automated reporting. Transform your data into actionable insights with 99.9% accuracy.",
      icon: <BarChart3 className="w-8 h-8" />,
      price: "$299/month",
      originalPrice: "$599/month",
      features: [
        "Real-time Analytics Dashboard",
        "Predictive Analytics & Forecasting",
        "Custom Report Builder",
        "API Integration (REST/GraphQL)",
        "Mobile App (iOS/Android)",
        "White-label Options",
        "Advanced Data Visualization",
        "Automated Alerts & Notifications",
        "Multi-tenant Architecture",
        "24/7 Support"
      ],
      category: "Business Intelligence",
      color: "from-blue-500 to-cyan-500",
      popular: true,
      link: "/zion-analytics-pro",
      marketPrice: "$800-1200/month",
      benefits: [
        "40% increase in decision-making speed",
        "60% reduction in manual reporting time",
        "99.9% data accuracy guarantee",
        "Real-time insights across all departments"
      ]
    },
    {
      id: "zion-security-shield",
      name: "Zion Security Shield",
      description: "Advanced cybersecurity protection with AI-powered threat detection, automated response, and compliance reporting. Protect your business 24/7 with enterprise-grade security.",
      icon: <Shield className="w-8 h-8" />,
      price: "$499/month",
      originalPrice: "$999/month",
      features: [
        "AI Threat Detection & Analysis",
        "Automated Incident Response",
        "Real-time Security Monitoring",
        "Compliance Reporting (SOC2, GDPR, HIPAA)",
        "Vulnerability Assessment",
        "Penetration Testing",
        "Security Training Modules",
        "Multi-factor Authentication",
        "Encrypted Data Storage",
        "24/7 Security Operations Center"
      ],
      category: "Cybersecurity",
      color: "from-red-500 to-orange-500",
      popular: true,
      link: "/zion-security-shield",
      marketPrice: "$1500-2500/month",
      benefits: [
        "99.9% threat detection accuracy",
        "50% faster incident response time",
        "Zero false positive guarantee",
        "Complete compliance coverage"
      ]
    },
    {
      id: "zion-cloud-vault",
      name: "Zion Cloud Vault",
      description: "Secure cloud storage solution with end-to-end encryption, unlimited scalability, and advanced collaboration features. Your data, secured and accessible anywhere.",
      icon: <Cloud className="w-8 h-8" />,
      price: "$99/month",
      originalPrice: "$199/month",
      features: [
        "Unlimited Cloud Storage",
        "End-to-End Encryption (AES-256)",
        "Real-time Collaboration Tools",
        "Version Control & File History",
        "Advanced Search & AI Tagging",
        "Mobile & Desktop Sync",
        "Team Management & Permissions",
        "API Integration",
        "Automated Backups",
        "99.99% Uptime SLA"
      ],
      category: "Cloud Storage",
      color: "from-indigo-500 to-purple-500",
      popular: true,
      link: "/zion-cloud-vault",
      marketPrice: "$300-500/month",
      benefits: [
        "Unlimited storage capacity",
        "Military-grade encryption",
        "99.99% uptime guarantee",
        "50% cost savings vs competitors"
      ]
    },
    {
      id: "zion-ai-crm-pro",
      name: "Zion AI CRM Pro",
      description: "AI-powered customer relationship management with intelligent lead scoring, automated follow-ups, and predictive analytics. Boost your sales by 40% with smart automation.",
      icon: <Users className="w-8 h-8" />,
      price: "$199/month",
      originalPrice: "$399/month",
      features: [
        "AI Lead Scoring & Qualification",
        "Automated Follow-up Sequences",
        "Predictive Sales Analytics",
        "Multi-channel Communication",
        "Custom Pipeline Management",
        "Email & SMS Integration",
        "Advanced Reporting Dashboard",
        "Team Collaboration Tools",
        "Mobile App Access",
        "CRM Integration (Salesforce, HubSpot)"
      ],
      category: "Customer Relationship",
      color: "from-green-500 to-emerald-500",
      popular: true,
      link: "/zion-ai-crm-pro",
      marketPrice: "$600-1000/month",
      benefits: [
        "40% increase in sales conversion",
        "60% reduction in manual follow-ups",
        "AI-powered lead prioritization",
        "Complete sales pipeline visibility"
      ]
    },
    {
      id: "zion-ai-marketing-automation-pro",
      name: "Zion AI Marketing Automation Pro",
      description: "AI-powered marketing automation with predictive content generation, multi-channel orchestration, and advanced personalization. Scale your marketing efforts 10x.",
      icon: <Target className="w-8 h-8" />,
      price: "$149/month",
      originalPrice: "$299/month",
      features: [
        "AI Content Generation",
        "Multi-channel Campaign Management",
        "Advanced Personalization Engine",
        "A/B Testing & Optimization",
        "Email & SMS Automation",
        "Social Media Scheduling",
        "Lead Nurturing Workflows",
        "Advanced Analytics & ROI Tracking",
        "Landing Page Builder",
        "Integration with 100+ tools"
      ],
      category: "Marketing Automation",
      color: "from-pink-500 to-rose-500",
      popular: true,
      link: "/zion-ai-marketing-automation-pro",
      marketPrice: "$400-800/month",
      benefits: [
        "10x marketing efficiency increase",
        "300% higher email open rates",
        "AI-generated content saves 80% time",
        "Complete marketing automation"
      ]
    },
    {
      id: "zion-ai-project-manager-pro",
      name: "Zion AI Project Manager Pro",
      description: "AI-powered project management with intelligent task prioritization, resource allocation, and automated reporting. Complete project visibility and control.",
      icon: <Calendar className="w-8 h-8" />,
      price: "$99/month",
      originalPrice: "$199/month",
      features: [
        "AI Task Prioritization",
        "Smart Resource Allocation",
        "Automated Progress Tracking",
        "Team Collaboration Tools",
        "Gantt Charts & Timeline View",
        "Budget & Cost Management",
        "Risk Assessment & Alerts",
        "Time Tracking & Reporting",
        "Integration with 50+ tools",
        "Mobile Project Management"
      ],
      category: "Project Management",
      color: "from-purple-500 to-violet-500",
      popular: true,
      link: "/zion-ai-project-manager-pro",
      marketPrice: "$200-400/month",
      benefits: [
        "30% faster project completion",
        "AI-powered risk prediction",
        "Complete project visibility",
        "Automated resource optimization"
      ]
    },
    {
      id: "zion-ai-email-analyzer",
      name: "Zion AI Email Analyzer",
      description: "AI-powered email analysis tool that provides sentiment analysis, response suggestions, and productivity insights. Transform your email communication.",
      icon: <Mail className="w-8 h-8" />,
      price: "$79/month",
      originalPrice: "$159/month",
      features: [
        "Sentiment Analysis & Tone Detection",
        "AI Response Suggestions",
        "Email Productivity Metrics",
        "Spam & Phishing Detection",
        "Email Template Generator",
        "Follow-up Reminders",
        "Team Email Analytics",
        "Integration with Gmail, Outlook",
        "Custom Email Rules",
        "Mobile Email Management"
      ],
      category: "Email Management",
      color: "from-cyan-500 to-blue-500",
      popular: false,
      link: "/ai-powered-email-analyzer",
      marketPrice: "$150-300/month",
      benefits: [
        "50% faster email responses",
        "AI-powered tone optimization",
        "Complete email productivity insights",
        "Automated follow-up management"
      ]
    },
    {
      id: "zion-smart-inventory-optimizer",
      name: "Zion Smart Inventory Optimizer",
      description: "AI-powered inventory management with demand forecasting, automated reordering, and cost optimization. Reduce inventory costs by 25% while improving availability.",
      icon: <Package className="w-8 h-8" />,
      price: "$179/month",
      originalPrice: "$359/month",
      features: [
        "AI Demand Forecasting",
        "Automated Reorder Points",
        "Cost Optimization Algorithms",
        "Multi-location Inventory Tracking",
        "Supplier Management",
        "Barcode & QR Code Scanning",
        "Real-time Stock Alerts",
        "Integration with POS Systems",
        "Advanced Analytics Dashboard",
        "Mobile Inventory Management"
      ],
      category: "Inventory Management",
      color: "from-orange-500 to-amber-500",
      popular: false,
      link: "/smart-inventory-optimizer",
      marketPrice: "$400-700/month",
      benefits: [
        "25% reduction in inventory costs",
        "95% inventory accuracy",
        "AI-powered demand prediction",
        "Complete supply chain visibility"
      ]
    },
    {
      id: "zion-ai-customer-sentiment-tracker",
      name: "Zion AI Customer Sentiment Tracker",
      description: "Real-time customer sentiment analysis across all channels with automated alerts and actionable insights. Understand your customers like never before.",
      icon: <Heart className="w-8 h-8" />,
      price: "$129/month",
      originalPrice: "$259/month",
      features: [
        "Real-time Sentiment Analysis",
        "Multi-channel Monitoring (Social, Email, Reviews)",
        "Automated Alert System",
        "Customer Journey Mapping",
        "Sentiment Trend Analysis",
        "Competitor Sentiment Tracking",
        "Custom Dashboard & Reports",
        "API Integration",
        "Team Collaboration Tools",
        "Mobile App Access"
      ],
      category: "Customer Analytics",
      color: "from-rose-500 to-pink-500",
      popular: false,
      link: "/ai-customer-sentiment-tracker",
      marketPrice: "$300-600/month",
      benefits: [
        "Real-time customer insights",
        "50% faster issue resolution",
        "Complete sentiment visibility",
        "Automated customer feedback analysis"
      ]
    },
    {
      id: "zion-smart-expense-categorizer",
      name: "Zion Smart Expense Categorizer",
      description: "AI-powered expense management with automatic categorization, receipt scanning, and compliance reporting. Streamline your financial processes.",
      icon: <Receipt className="w-8 h-8" />,
      price: "$89/month",
      originalPrice: "$179/month",
      features: [
        "AI Receipt Scanning & OCR",
        "Automatic Expense Categorization",
        "Compliance Reporting (Tax, Audit)",
        "Multi-currency Support",
        "Team Expense Management",
        "Integration with Accounting Software",
        "Mobile Receipt Capture",
        "Advanced Analytics & Insights",
        "Automated Approval Workflows",
        "Real-time Expense Tracking"
      ],
      category: "Financial Management",
      color: "from-emerald-500 to-green-500",
      popular: false,
      link: "/smart-expense-categorizer",
      marketPrice: "$200-400/month",
      benefits: [
        "90% reduction in manual data entry",
        "AI-powered expense categorization",
        "Complete compliance automation",
        "Real-time financial insights"
      ]
    },
    {
      id: "zion-ai-content-studio",
      name: "Zion AI Content Studio",
      description: "AI-powered content creation platform with automated writing, SEO optimization, and multi-format output. Create engaging content at scale.",
      icon: <FileText className="w-8 h-8" />,
      price: "$119/month",
      originalPrice: "$239/month",
      features: [
        "AI Content Generation (Blogs, Social, Ads)",
        "SEO Optimization & Keyword Research",
        "Multi-format Output (Text, Video, Audio)",
        "Brand Voice Training",
        "Plagiarism Detection",
        "Content Calendar Management",
        "Team Collaboration Tools",
        "Social Media Scheduling",
        "Performance Analytics",
        "Integration with CMS Platforms"
      ],
      category: "Content Creation",
      color: "from-violet-500 to-purple-500",
      popular: false,
      link: "/zion-ai-content-studio",
      marketPrice: "$300-600/month",
      benefits: [
        "80% faster content creation",
        "AI-powered SEO optimization",
        "Multi-format content generation",
        "Complete content workflow automation"
      ]
    },
    {
      id: "zion-ai-data-sync",
      name: "Zion AI Data Sync",
      description: "Intelligent data synchronization across all your business applications with real-time updates and conflict resolution. Keep your data consistent everywhere.",
      icon: <Database className="w-8 h-8" />,
      price: "$149/month",
      originalPrice: "$299/month",
      features: [
        "Real-time Data Synchronization",
        "AI Conflict Resolution",
        "Multi-platform Integration (100+ apps)",
        "Data Validation & Cleaning",
        "Automated Backup & Recovery",
        "Custom Data Mapping",
        "Real-time Monitoring Dashboard",
        "API Management",
        "Data Security & Encryption",
        "24/7 Support & Monitoring"
      ],
      category: "Data Management",
      color: "from-teal-500 to-cyan-500",
      popular: false,
      link: "/zion-ai-data-sync",
      marketPrice: "$400-800/month",
      benefits: [
        "99.9% data accuracy across platforms",
        "Real-time synchronization",
        "AI-powered conflict resolution",
        "Complete data consistency"
      ]
    }
  ];

  const categories = [
    { name: "All", count: microSaasServices.length },
    { name: "Business Intelligence", count: microSaasServices.filter(s => s.category === "Business Intelligence").length },
    { name: "Cybersecurity", count: microSaasServices.filter(s => s.category === "Cybersecurity").length },
    { name: "Cloud Storage", count: microSaasServices.filter(s => s.category === "Cloud Storage").length },
    { name: "Customer Relationship", count: microSaasServices.filter(s => s.category === "Customer Relationship").length },
    { name: "Marketing Automation", count: microSaasServices.filter(s => s.category === "Marketing Automation").length },
    { name: "Project Management", count: microSaasServices.filter(s => s.category === "Project Management").length },
    { name: "Email Management", count: microSaasServices.filter(s => s.category === "Email Management").length },
    { name: "Inventory Management", count: microSaasServices.filter(s => s.category === "Inventory Management").length },
    { name: "Customer Analytics", count: microSaasServices.filter(s => s.category === "Customer Analytics").length },
    { name: "Financial Management", count: microSaasServices.filter(s => s.category === "Financial Management").length },
    { name: "Content Creation", count: microSaasServices.filter(s => s.category === "Content Creation").length },
    { name: "Data Management", count: microSaasServices.filter(s => s.category === "Data Management").length }
  ];

  return (
    <>
      <Helmet>
        <title>Micro SAAS Services - Zion Tech Group | AI-Powered Business Solutions</title>
        <meta
          name="description"
          content="Discover our comprehensive suite of AI-powered micro SAAS solutions. From analytics and security to CRM and marketing automation - transform your business with cutting-edge technology."
        />
        <meta
          name="keywords"
          content="micro SAAS, business intelligence, AI analytics, cybersecurity, cloud storage, CRM, marketing automation, project management, email management, inventory optimization, customer sentiment, expense management, content creation, data sync"
        />
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
              <span className="text-cyan-400 text-sm font-medium">12+ Micro SAAS Solutions Available</span>
            </div>
            
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400">
                Micro SAAS Services
              </span>
            </h1>
            
            <p className="text-xl text-gray-300 mb-8 max-w-4xl mx-auto leading-relaxed">
              Transform your business with our comprehensive suite of AI-powered micro SAAS solutions. 
              From analytics and security to CRM and marketing automation - everything you need to scale your business.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
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
                Watch Demo
              </Link>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
              <div className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-cyan-400 mb-2">12+</div>
                <div className="text-gray-300 text-sm">Micro SAAS Solutions</div>
              </div>
              <div className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-purple-400 mb-2">50%</div>
                <div className="text-gray-300 text-sm">Cost Savings</div>
              </div>
              <div className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-pink-400 mb-2">99.9%</div>
                <div className="text-gray-300 text-sm">Uptime SLA</div>
              </div>
              <div className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-green-400 mb-2">24/7</div>
                <div className="text-gray-300 text-sm">Support</div>
              </div>
            </div>
          </div>
        </section>

        {/* Services Grid */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400">
                  AI-Powered Micro SAAS Solutions
                </span>
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Choose from our comprehensive suite of micro SAAS solutions designed to automate and optimize your business processes.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {microSaasServices.map((service, index) => (
                <div
                  key={service.id}
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
                    <div
                      className={`w-16 h-16 rounded-lg bg-gradient-to-r ${service.color} flex items-center justify-center mb-4 mx-auto group-hover:scale-110 transition-transform duration-300 shadow-lg`}
                    >
                      {service.icon}
                    </div>
                    
                    <div className="text-center mb-4">
                      <span className="text-xs bg-cyan-500/20 text-cyan-300 px-2 py-1 rounded-full border border-cyan-500/30">
                        {service.category}
                      </span>
                    </div>
                    
                    <h3 className="text-xl font-semibold text-white mb-3 text-center group-hover:text-cyan-300 transition-colors">
                      {service.name}
                    </h3>
                    <p className="text-gray-300 text-center mb-4 leading-relaxed text-sm">
                      {service.description}
                    </p>
                    
                    {/* Pricing */}
                    <div className="text-center mb-4">
                      <div className="flex items-center justify-center space-x-2">
                        <span className="text-cyan-400 font-bold text-lg">{service.price}</span>
                        <span className="text-gray-500 line-through text-sm">{service.originalPrice}</span>
                      </div>
                      <div className="text-xs text-gray-400 mt-1">
                        Market Price: {service.marketPrice}
                      </div>
                    </div>
                    
                    {/* Key Benefits */}
                    <div className="space-y-2 mb-6">
                      {service.benefits.slice(0, 2).map((benefit, idx) => (
                        <div key={idx} className="flex items-center text-sm text-gray-300">
                          <CheckCircle className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
                          <span>{benefit}</span>
                        </div>
                      ))}
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
                Start your free trial today and experience the power of AI-driven micro SAAS solutions. 
                No credit card required, cancel anytime.
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
                    <PhoneIcon className="w-6 h-6 text-white" />
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
};

export default MicroSaaSServicesPage;

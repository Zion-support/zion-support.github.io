import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { 
  ArrowRight, 
  Brain, 
  Shield, 
  Zap, 
  BarChart3, 
  Cloud, 
  Mail, 
  Users, 
  Target, 
  Calendar, 
  Package, 
  Receipt, 
  Heart, 
  Clock, 
  Globe, 
  Smartphone, 
  Monitor,
  CheckCircle,
  Star,
  Award,
  TrendingUp,
  Database,
  Settings,
  FileText,
  Bot,
  Cpu,
  Network,
  Lock,
  Server,
  Headphones,
  Code,
  Sparkles,
  Rocket
} from "lucide-react";

const MicroSaaSServicesPage = () => {
  const microSaasServices = [
    {
      id: "zion-analytics-pro",
      name: "Zion Analytics Pro",
      description: "AI-powered business intelligence platform with real-time dashboards, predictive analytics, and automated reporting. Transform your data into actionable insights with 99.9% accuracy.",
      icon: <BarChart3 className="w-8 h-8" />,
      price: "From $299/month",
      originalPrice: "$599/month",
      features: [
        "Real-time Analytics Dashboard",
        "Predictive Analytics Engine",
        "Custom Report Builder",
        "API Integration Suite",
        "Mobile App Access",
        "White-label Options",
        "Advanced Data Visualization",
        "Automated Alerts & Notifications",
        "Multi-source Data Connectors",
        "Custom KPI Tracking"
      ],
      category: "Business Intelligence",
      popular: true,
      color: "from-blue-500 to-cyan-500",
      link: "/zion-analytics-pro",
      benefits: [
        "Increase decision-making speed by 60%",
        "Reduce manual reporting time by 80%",
        "Improve data accuracy by 99.9%",
        "Scale from startup to enterprise"
      ]
    },
    {
      id: "zion-security-shield",
      name: "Zion Security Shield",
      description: "Advanced cybersecurity protection with AI-powered threat detection, automated response, and 24/7 monitoring. Protect your business from evolving cyber threats.",
      icon: <Shield className="w-8 h-8" />,
      price: "From $499/month",
      originalPrice: "$999/month",
      features: [
        "AI Threat Detection",
        "Automated Incident Response",
        "24/7 Security Monitoring",
        "Compliance Reporting",
        "Vulnerability Scanning",
        "Security Training Modules",
        "Multi-layer Protection",
        "Real-time Alerts",
        "Incident Forensics",
        "Security Dashboard"
      ],
      category: "Cybersecurity",
      popular: true,
      color: "from-red-500 to-orange-500",
      link: "/zion-security-shield",
      benefits: [
        "Prevent 99.9% of cyber attacks",
        "Reduce security incidents by 95%",
        "Comply with industry standards",
        "24/7 expert monitoring"
      ]
    },
    {
      id: "zion-cloud-vault",
      name: "Zion Cloud Vault",
      description: "Secure cloud storage solution with end-to-end encryption, unlimited scalability, and advanced collaboration features. Your data, secured and accessible anywhere.",
      icon: <Cloud className="w-8 h-8" />,
      price: "From $99/month",
      originalPrice: "$199/month",
      features: [
        "End-to-End Encryption",
        "Unlimited Storage",
        "Advanced Collaboration",
        "Version Control",
        "Access Management",
        "Backup & Recovery",
        "Mobile Sync",
        "API Integration",
        "Audit Logs",
        "Custom Branding"
      ],
      category: "Cloud Storage",
      popular: true,
      color: "from-indigo-500 to-purple-500",
      link: "/zion-cloud-vault",
      benefits: [
        "99.99% uptime guarantee",
        "Unlimited storage capacity",
        "Military-grade encryption",
        "Seamless team collaboration"
      ]
    },
    {
      id: "zion-ai-crm-pro",
      name: "Zion AI CRM Pro",
      description: "AI-powered customer relationship management with intelligent lead scoring, automated follow-ups, and predictive analytics. Boost your sales performance by 40%.",
      icon: <Users className="w-8 h-8" />,
      price: "From $199/month",
      originalPrice: "$399/month",
      features: [
        "AI Lead Scoring",
        "Automated Follow-ups",
        "Sales Forecasting",
        "Pipeline Management",
        "Email Integration",
        "Call Tracking",
        "Custom Fields",
        "Reporting Dashboard",
        "Mobile App",
        "API Access"
      ],
      category: "CRM & Sales",
      popular: true,
      color: "from-green-500 to-emerald-500",
      link: "/zion-ai-crm-pro",
      benefits: [
        "Increase sales by 40%",
        "Reduce follow-up time by 70%",
        "Improve lead conversion by 50%",
        "Automate repetitive tasks"
      ]
    },
    {
      id: "zion-ai-marketing-automation-pro",
      name: "Zion AI Marketing Automation Pro",
      description: "AI-powered marketing automation with predictive content generation, multi-channel orchestration, and advanced analytics. Scale your marketing efforts efficiently.",
      icon: <Target className="w-8 h-8" />,
      price: "From $149/month",
      originalPrice: "$299/month",
      features: [
        "AI Content Generation",
        "Multi-channel Campaigns",
        "Lead Scoring & Nurturing",
        "Email Automation",
        "Social Media Management",
        "A/B Testing",
        "Analytics Dashboard",
        "Personalization Engine",
        "Landing Page Builder",
        "ROI Tracking"
      ],
      category: "Marketing Automation",
      popular: true,
      color: "from-pink-500 to-rose-500",
      link: "/zion-ai-marketing-automation-pro",
      benefits: [
        "Increase marketing ROI by 300%",
        "Automate 80% of marketing tasks",
        "Personalize customer experiences",
        "Scale campaigns effortlessly"
      ]
    },
    {
      id: "zion-ai-project-manager-pro",
      name: "Zion AI Project Manager Pro",
      description: "AI-powered project management with intelligent task prioritization, resource allocation, and automated reporting. Complete projects 30% faster with better outcomes.",
      icon: <Calendar className="w-8 h-8" />,
      price: "From $99/month",
      originalPrice: "$199/month",
      features: [
        "AI Task Prioritization",
        "Resource Optimization",
        "Risk Assessment",
        "Progress Tracking",
        "Team Collaboration",
        "Time Tracking",
        "Budget Management",
        "Gantt Charts",
        "Mobile App",
        "Integration Suite"
      ],
      category: "Project Management",
      popular: true,
      color: "from-purple-500 to-violet-500",
      link: "/zion-ai-project-manager-pro",
      benefits: [
        "Complete projects 30% faster",
        "Reduce project overruns by 50%",
        "Optimize resource allocation",
        "Improve team productivity"
      ]
    },
    {
      id: "zion-ai-email-analyzer",
      name: "Zion AI Email Analyzer",
      description: "Intelligent email analysis tool that categorizes, prioritizes, and extracts insights from your email communications. Save 2 hours daily on email management.",
      icon: <Mail className="w-8 h-8" />,
      price: "From $79/month",
      originalPrice: "$159/month",
      features: [
        "Smart Email Categorization",
        "Priority Scoring",
        "Sentiment Analysis",
        "Auto-Response Suggestions",
        "Email Templates",
        "Spam Detection",
        "Attachment Analysis",
        "Contact Management",
        "Email Analytics",
        "Integration Support"
      ],
      category: "Productivity Tools",
      popular: false,
      color: "from-cyan-500 to-blue-500",
      link: "/ai-powered-email-analyzer",
      benefits: [
        "Save 2 hours daily on email",
        "Improve response time by 60%",
        "Never miss important emails",
        "Automate email workflows"
      ]
    },
    {
      id: "zion-smart-inventory-optimizer",
      name: "Zion Smart Inventory Optimizer",
      description: "AI-powered inventory management with demand forecasting, automated reordering, and cost optimization. Reduce inventory costs by 25% while improving availability.",
      icon: <Package className="w-8 h-8" />,
      price: "From $179/month",
      originalPrice: "$359/month",
      features: [
        "Demand Forecasting",
        "Automated Reordering",
        "Cost Optimization",
        "Multi-location Support",
        "Supplier Management",
        "Barcode Scanning",
        "Inventory Analytics",
        "Low Stock Alerts",
        "Seasonal Adjustments",
        "API Integration"
      ],
      category: "Inventory Management",
      popular: false,
      color: "from-orange-500 to-amber-500",
      link: "/smart-inventory-optimizer",
      benefits: [
        "Reduce inventory costs by 25%",
        "Improve stock availability by 95%",
        "Eliminate stockouts",
        "Optimize cash flow"
      ]
    },
    {
      id: "zion-ai-customer-sentiment-tracker",
      name: "Zion AI Customer Sentiment Tracker",
      description: "Real-time customer sentiment analysis across all channels with automated alerts and actionable insights. Improve customer satisfaction by 35%.",
      icon: <Heart className="w-8 h-8" />,
      price: "From $129/month",
      originalPrice: "$259/month",
      features: [
        "Real-time Sentiment Analysis",
        "Multi-channel Monitoring",
        "Automated Alerts",
        "Trend Analysis",
        "Customer Journey Mapping",
        "Feedback Categorization",
        "Competitor Analysis",
        "Custom Dashboards",
        "API Integration",
        "Export Reports"
      ],
      category: "Customer Analytics",
      popular: false,
      color: "from-rose-500 to-pink-500",
      link: "/ai-customer-sentiment-tracker",
      benefits: [
        "Improve customer satisfaction by 35%",
        "Identify issues before they escalate",
        "Track brand sentiment in real-time",
        "Make data-driven decisions"
      ]
    },
    {
      id: "zion-smart-expense-categorizer",
      name: "Zion Smart Expense Categorizer",
      description: "AI-powered expense management with automatic categorization, receipt processing, and compliance reporting. Streamline your financial processes and save time.",
      icon: <Receipt className="w-8 h-8" />,
      price: "From $89/month",
      originalPrice: "$179/month",
      features: [
        "Automatic Categorization",
        "Receipt OCR Processing",
        "Compliance Reporting",
        "Expense Approval Workflow",
        "Budget Tracking",
        "Tax Preparation",
        "Multi-currency Support",
        "Mobile App",
        "Integration Suite",
        "Audit Trail"
      ],
      category: "Financial Management",
      popular: false,
      color: "from-emerald-500 to-green-500",
      link: "/smart-expense-categorizer",
      benefits: [
        "Save 3 hours weekly on expense management",
        "Improve accuracy by 95%",
        "Ensure compliance automatically",
        "Streamline approval processes"
      ]
    },
    {
      id: "zion-ai-content-studio",
      name: "Zion AI Content Studio",
      description: "AI-powered content creation platform with automated writing, SEO optimization, and multi-format publishing. Create 10x more content with consistent quality.",
      icon: <FileText className="w-8 h-8" />,
      price: "From $119/month",
      originalPrice: "$239/month",
      features: [
        "AI Content Generation",
        "SEO Optimization",
        "Multi-format Publishing",
        "Brand Voice Training",
        "Plagiarism Detection",
        "Content Calendar",
        "Team Collaboration",
        "Performance Analytics",
        "Template Library",
        "API Access"
      ],
      category: "Content Creation",
      popular: false,
      color: "from-violet-500 to-purple-500",
      link: "/zion-ai-content-studio",
      benefits: [
        "Create 10x more content",
        "Improve SEO rankings by 40%",
        "Maintain consistent brand voice",
        "Scale content production"
      ]
    },
    {
      id: "zion-ai-data-sync",
      name: "Zion AI Data Sync",
      description: "Intelligent data synchronization platform that connects all your business applications with real-time updates and conflict resolution. Keep your data consistent across all systems.",
      icon: <Database className="w-8 h-8" />,
      price: "From $159/month",
      originalPrice: "$319/month",
      features: [
        "Real-time Data Sync",
        "Conflict Resolution",
        "Multi-platform Support",
        "Data Validation",
        "Error Handling",
        "Custom Mappings",
        "Monitoring Dashboard",
        "API Integration",
        "Data Transformation",
        "Backup & Recovery"
      ],
      category: "Data Management",
      popular: false,
      color: "from-teal-500 to-cyan-500",
      link: "/zion-ai-data-sync",
      benefits: [
        "Eliminate data inconsistencies",
        "Reduce manual data entry by 90%",
        "Improve data accuracy by 99%",
        "Streamline business processes"
      ]
    }
  ];

  const categories = [
    { name: "All", count: microSaasServices.length },
    { name: "Business Intelligence", count: microSaasServices.filter(s => s.category === "Business Intelligence").length },
    { name: "Cybersecurity", count: microSaasServices.filter(s => s.category === "Cybersecurity").length },
    { name: "Cloud Storage", count: microSaasServices.filter(s => s.category === "Cloud Storage").length },
    { name: "CRM & Sales", count: microSaasServices.filter(s => s.category === "CRM & Sales").length },
    { name: "Marketing Automation", count: microSaasServices.filter(s => s.category === "Marketing Automation").length },
    { name: "Project Management", count: microSaasServices.filter(s => s.category === "Project Management").length },
    { name: "Productivity Tools", count: microSaasServices.filter(s => s.category === "Productivity Tools").length },
    { name: "Inventory Management", count: microSaasServices.filter(s => s.category === "Inventory Management").length },
    { name: "Customer Analytics", count: microSaasServices.filter(s => s.category === "Customer Analytics").length },
    { name: "Financial Management", count: microSaasServices.filter(s => s.category === "Financial Management").length },
    { name: "Content Creation", count: microSaasServices.filter(s => s.category === "Content Creation").length },
    { name: "Data Management", count: microSaasServices.filter(s => s.category === "Data Management").length }
  ];

  const stats = [
    { number: "60+", label: "Micro SAAS Solutions", icon: <Zap className="w-6 h-6" /> },
    { number: "10,000+", label: "Active Users", icon: <Users className="w-6 h-6" /> },
    { number: "99.9%", label: "Uptime SLA", icon: <Shield className="w-6 h-6" /> },
    { number: "24/7", label: "Support Available", icon: <Headphones className="w-6 h-6" /> }
  ];

  return (
    <>
      <Helmet>
        <title>Micro SAAS Services - Zion Tech Group | AI-Powered Business Solutions</title>
        <meta
          name="description"
          content="Discover our comprehensive suite of micro SAAS solutions including AI analytics, cybersecurity, CRM, marketing automation, and productivity tools. Transform your business with ready-to-use software solutions."
        />
        <meta
          name="keywords"
          content="micro SAAS, business intelligence, AI analytics, cybersecurity, CRM, marketing automation, project management, productivity tools, inventory management, customer analytics, financial management, content creation, data management"
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
              <span className="text-cyan-400 text-sm font-medium">60+ Ready-to-Use Solutions</span>
            </div>
            
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400">
                Micro SAAS Solutions
              </span>
            </h1>
            
            <p className="text-xl text-gray-300 mb-8 max-w-4xl mx-auto leading-relaxed">
              Transform your business with our comprehensive suite of AI-powered micro SAAS solutions. 
              Ready-to-use software that scales from startup to enterprise with powerful features and competitive pricing.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
              <Link
                to="/contact"
                className="group bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 flex items-center justify-center shadow-lg hover:shadow-cyan-500/25 hover:scale-105"
              >
                Start Free Trial
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
        <section className="py-16 px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400">
                  Featured Micro SAAS Solutions
                </span>
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Choose from our comprehensive suite of AI-powered micro SAAS solutions designed to accelerate your business growth.
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
                        {service.originalPrice && (
                          <span className="text-gray-500 line-through text-sm">{service.originalPrice}</span>
                        )}
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
                Join thousands of businesses already using our micro SAAS solutions to drive growth and efficiency. 
                Start your free trial today or contact us for a personalized consultation.
              </p>
              
              {/* Contact Details */}
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
                    <Smartphone className="w-6 h-6 text-white" />
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
                  <Rocket className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                </Link>
                <Link
                  to="/consultation"
                  className="border border-cyan-400 text-cyan-400 px-8 py-4 rounded-lg font-semibold hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300 hover:scale-105"
                >
                  Free Consultation
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
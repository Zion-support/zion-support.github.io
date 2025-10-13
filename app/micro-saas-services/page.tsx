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
  Receipt,
  Clock,
  Globe,
  Smartphone,
  Settings,
  CheckCircle,
  Star,
  Award,
  TrendingUp,
  FileText,
  Heart,
  Cpu,
  Database,
  Lock,
  Sparkles,
  Rocket,
  Crown,
  DollarSign,
  Phone,
  MapPin
} from "lucide-react";

export default function MicroSaaSServices() {
  const microSaasServices = [
    {
      id: "zion-analytics-pro",
      name: "Zion Analytics Pro",
      description: "AI-powered business intelligence platform with real-time dashboards, predictive analytics, and automated reporting. Transform your data into actionable insights with 99.9% accuracy.",
      icon: <BarChart3 className="w-8 h-8" />,
      price: 299,
      originalPrice: 599,
      period: "month",
      color: "from-blue-500 to-cyan-500",
      category: "Analytics & BI",
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
      benefits: [
        "40% faster decision making",
        "60% reduction in manual reporting",
        "99.9% data accuracy",
        "Real-time insights"
      ],
      popular: true,
      link: "/zion-analytics-pro"
    },
    {
      id: "zion-security-shield",
      name: "Zion Security Shield",
      description: "Advanced cybersecurity protection with AI-powered threat detection, automated response, and 24/7 monitoring. Protect your business from evolving cyber threats with enterprise-grade security.",
      icon: <Shield className="w-8 h-8" />,
      price: 499,
      originalPrice: 999,
      period: "month",
      color: "from-red-500 to-orange-500",
      category: "Cybersecurity",
      features: [
        "AI Threat Detection",
        "Automated Incident Response",
        "24/7 Security Monitoring",
        "Vulnerability Assessment",
        "Compliance Reporting",
        "Security Training Modules",
        "Multi-factor Authentication",
        "Encrypted Data Storage",
        "Real-time Alerts",
        "Penetration Testing"
      ],
      benefits: [
        "99.9% threat detection rate",
        "50% faster incident response",
        "Zero false positives",
        "24/7 protection"
      ],
      popular: true,
      link: "/zion-security-shield"
    },
    {
      id: "zion-cloud-vault",
      name: "Zion Cloud Vault",
      description: "Secure cloud storage solution with end-to-end encryption, unlimited scalability, and advanced collaboration features. Store, share, and manage your files with enterprise-grade security.",
      icon: <Cloud className="w-8 h-8" />,
      price: 99,
      originalPrice: 199,
      period: "month",
      color: "from-indigo-500 to-purple-500",
      category: "Cloud Storage",
      features: [
        "Unlimited Storage Space",
        "End-to-End Encryption",
        "Advanced File Sharing",
        "Version Control",
        "Collaboration Tools",
        "Mobile App Access",
        "API Integration",
        "Automated Backups",
        "Access Control Management",
        "Audit Trail Logging"
      ],
      benefits: [
        "Unlimited storage capacity",
        "Bank-level encryption",
        "99.99% uptime guarantee",
        "Global CDN access"
      ],
      popular: true,
      link: "/zion-cloud-vault"
    },
    {
      id: "zion-ai-crm-pro",
      name: "Zion AI CRM Pro",
      description: "AI-powered customer relationship management with intelligent lead scoring, automated follow-ups, and predictive analytics. Streamline your sales process and boost conversion rates.",
      icon: <Users className="w-8 h-8" />,
      price: 199,
      originalPrice: 399,
      period: "month",
      color: "from-green-500 to-emerald-500",
      category: "CRM & Sales",
      features: [
        "AI Lead Scoring",
        "Automated Follow-ups",
        "Sales Pipeline Management",
        "Customer Segmentation",
        "Email Integration",
        "Call Tracking",
        "Performance Analytics",
        "Custom Workflows",
        "Team Collaboration",
        "Mobile App Access"
      ],
      benefits: [
        "35% increase in conversion rates",
        "50% reduction in manual tasks",
        "Real-time sales insights",
        "Automated lead nurturing"
      ],
      popular: true,
      link: "/zion-ai-crm-pro"
    },
    {
      id: "zion-ai-marketing-automation",
      name: "Zion AI Marketing Automation Pro",
      description: "AI-powered marketing automation platform with intelligent content generation, multi-channel campaigns, and advanced analytics. Scale your marketing efforts with smart automation.",
      icon: <Target className="w-8 h-8" />,
      price: 149,
      originalPrice: 299,
      period: "month",
      color: "from-pink-500 to-rose-500",
      category: "Marketing Automation",
      features: [
        "AI Content Generation",
        "Multi-channel Campaigns",
        "Email Marketing Automation",
        "Social Media Management",
        "Lead Nurturing Workflows",
        "A/B Testing Tools",
        "Performance Analytics",
        "Customer Segmentation",
        "Landing Page Builder",
        "ROI Tracking"
      ],
      benefits: [
        "300% increase in email open rates",
        "45% improvement in lead quality",
        "Automated campaign optimization",
        "Real-time performance tracking"
      ],
      popular: false,
      link: "/zion-ai-marketing-automation"
    },
    {
      id: "zion-project-manager-pro",
      name: "Zion AI Project Manager Pro",
      description: "AI-powered project management with intelligent task prioritization, resource allocation, and automated reporting. Keep your projects on track with smart project management tools.",
      icon: <Calendar className="w-8 h-8" />,
      price: 99,
      originalPrice: 199,
      period: "month",
      color: "from-purple-500 to-violet-500",
      category: "Project Management",
      features: [
        "AI Task Prioritization",
        "Resource Allocation",
        "Gantt Chart Visualization",
        "Team Collaboration Tools",
        "Time Tracking",
        "Budget Management",
        "Risk Assessment",
        "Automated Reporting",
        "Mobile App Access",
        "Integration Suite"
      ],
      benefits: [
        "25% faster project completion",
        "30% reduction in project delays",
        "Automated resource optimization",
        "Real-time project insights"
      ],
      popular: false,
      link: "/zion-project-manager-pro"
    },
    {
      id: "zion-ai-email-analyzer",
      name: "Zion AI Email Analyzer",
      description: "Intelligent email analysis tool that provides insights into email performance, sentiment analysis, and optimization recommendations. Improve your email marketing ROI with AI-powered insights.",
      icon: <Mail className="w-8 h-8" />,
      price: 79,
      originalPrice: 159,
      period: "month",
      color: "from-cyan-500 to-blue-500",
      category: "Email Marketing",
      features: [
        "Email Performance Analytics",
        "Sentiment Analysis",
        "Subject Line Optimization",
        "A/B Testing Tools",
        "Deliverability Monitoring",
        "Spam Score Analysis",
        "Engagement Tracking",
        "Personalization Insights",
        "Competitor Analysis",
        "ROI Reporting"
      ],
      benefits: [
        "40% improvement in open rates",
        "25% increase in click-through rates",
        "Automated optimization suggestions",
        "Real-time performance monitoring"
      ],
      popular: false,
      link: "/ai-powered-email-analyzer"
    },
    {
      id: "zion-smart-inventory-optimizer",
      name: "Zion Smart Inventory Optimizer",
      description: "AI-powered inventory management with demand forecasting, automated reordering, and cost optimization. Reduce inventory costs while maintaining optimal stock levels.",
      icon: <Package className="w-8 h-8" />,
      price: 129,
      originalPrice: 259,
      period: "month",
      color: "from-orange-500 to-amber-500",
      category: "Inventory Management",
      features: [
        "Demand Forecasting",
        "Automated Reordering",
        "Cost Optimization",
        "Stock Level Monitoring",
        "Supplier Management",
        "Barcode Scanning",
        "Multi-location Support",
        "Reporting Dashboard",
        "Mobile App Access",
        "API Integration"
      ],
      benefits: [
        "30% reduction in inventory costs",
        "50% fewer stockouts",
        "Automated reorder management",
        "Real-time inventory tracking"
      ],
      popular: false,
      link: "/smart-inventory-optimizer"
    },
    {
      id: "zion-ai-customer-sentiment-tracker",
      name: "Zion AI Customer Sentiment Tracker",
      description: "Advanced customer sentiment analysis across all channels with real-time monitoring, trend analysis, and actionable insights. Understand your customers better with AI-powered sentiment tracking.",
      icon: <Heart className="w-8 h-8" />,
      price: 89,
      originalPrice: 179,
      period: "month",
      color: "from-rose-500 to-pink-500",
      category: "Customer Analytics",
      features: [
        "Multi-channel Sentiment Analysis",
        "Real-time Monitoring",
        "Trend Analysis",
        "Competitor Comparison",
        "Alert System",
        "Custom Dashboards",
        "API Integration",
        "Historical Data Analysis",
        "Team Collaboration",
        "Export Capabilities"
      ],
      benefits: [
        "Real-time sentiment monitoring",
        "Proactive issue identification",
        "Improved customer satisfaction",
        "Data-driven decision making"
      ],
      popular: false,
      link: "/ai-customer-sentiment-tracker"
    },
    {
      id: "zion-smart-expense-categorizer",
      name: "Zion Smart Expense Categorizer",
      description: "AI-powered expense management with automatic categorization, receipt processing, and compliance reporting. Streamline your financial management with intelligent expense tracking.",
      icon: <Receipt className="w-8 h-8" />,
      price: 59,
      originalPrice: 119,
      period: "month",
      color: "from-emerald-500 to-green-500",
      category: "Financial Management",
      features: [
        "AI Expense Categorization",
        "Receipt OCR Processing",
        "Compliance Reporting",
        "Budget Tracking",
        "Tax Preparation",
        "Multi-currency Support",
        "Mobile App Access",
        "Team Management",
        "Integration Suite",
        "Audit Trail"
      ],
      benefits: [
        "90% reduction in manual categorization",
        "50% faster expense processing",
        "Automated compliance reporting",
        "Real-time budget monitoring"
      ],
      popular: false,
      link: "/smart-expense-categorizer"
    },
    {
      id: "zion-ai-content-studio",
      name: "Zion AI Content Studio",
      description: "Comprehensive content creation platform with AI writing, image generation, and social media management. Create engaging content at scale with AI-powered tools.",
      icon: <FileText className="w-8 h-8" />,
      price: 119,
      originalPrice: 239,
      period: "month",
      color: "from-violet-500 to-purple-500",
      category: "Content Creation",
      features: [
        "AI Content Generation",
        "Image Creation Tools",
        "Social Media Management",
        "SEO Optimization",
        "Content Calendar",
        "Team Collaboration",
        "Brand Voice Training",
        "Plagiarism Detection",
        "Multi-language Support",
        "Analytics Dashboard"
      ],
      benefits: [
        "10x faster content creation",
        "Consistent brand voice",
        "SEO-optimized content",
        "Multi-platform publishing"
      ],
      popular: false,
      link: "/zion-ai-content-studio"
    },
    {
      id: "zion-ai-data-sync",
      name: "Zion AI Data Sync",
      description: "Intelligent data synchronization platform with real-time updates, conflict resolution, and automated data cleaning. Keep your data consistent across all systems.",
      icon: <Database className="w-8 h-8" />,
      price: 149,
      originalPrice: 299,
      period: "month",
      color: "from-teal-500 to-cyan-500",
      category: "Data Management",
      features: [
        "Real-time Data Sync",
        "Conflict Resolution",
        "Data Cleaning Tools",
        "Multi-source Integration",
        "Automated Mapping",
        "Error Detection",
        "Data Validation",
        "Backup & Recovery",
        "API Management",
        "Monitoring Dashboard"
      ],
      benefits: [
        "99.9% data accuracy",
        "Real-time synchronization",
        "Automated conflict resolution",
        "Reduced data inconsistencies"
      ],
      popular: false,
      link: "/zion-ai-data-sync"
    }
  ];

  const categories = [
    "All",
    "Analytics & BI",
    "Cybersecurity",
    "Cloud Storage",
    "CRM & Sales",
    "Marketing Automation",
    "Project Management",
    "Email Marketing",
    "Inventory Management",
    "Customer Analytics",
    "Financial Management",
    "Content Creation",
    "Data Management"
  ];

  const stats = [
    { number: "50+", label: "Micro SAAS Solutions", icon: <Zap className="w-6 h-6" /> },
    { number: "10,000+", label: "Active Users", icon: <Users className="w-6 h-6" /> },
    { number: "99.9%", label: "Uptime SLA", icon: <Shield className="w-6 h-6" /> },
    { number: "24/7", label: "Support Available", icon: <Clock className="w-6 h-6" /> }
  ];

  return (
    <>
      <Helmet>
        <title>Micro SAAS Services - Zion Tech Group | AI-Powered Business Solutions</title>
        <meta
          name="description"
          content="Discover our comprehensive suite of micro SAAS solutions including AI analytics, cybersecurity, cloud storage, CRM, marketing automation, and more. Transform your business with ready-to-use software solutions."
        />
        <meta
          name="keywords"
          content="micro SAAS, business software, AI analytics, cybersecurity, cloud storage, CRM, marketing automation, project management, email marketing, inventory management, customer analytics, financial management, content creation, data management"
        />
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "SoftwareApplication",
            "name": "Zion Tech Group Micro SAAS Services",
            "description": "Comprehensive suite of AI-powered micro SAAS solutions for modern businesses",
            "url": "https://ziontechgroup.com/micro-saas-services",
            "applicationCategory": "BusinessApplication",
            "operatingSystem": "Web, iOS, Android",
            "offers": {
              "@type": "Offer",
              "price": "59",
              "priceCurrency": "USD",
              "priceSpecification": {
                "@type": "RecurringPaymentsPriceSpecification",
                "billingDuration": "P1M"
              }
            },
            "provider": {
              "@type": "Organization",
              "name": "Zion Tech Group",
              "url": "https://ziontechgroup.com",
              "contactPoint": {
                "@type": "ContactPoint",
                "telephone": "+1-302-464-0950",
                "contactType": "customer service",
                "email": "kleber@ziontechgroup.com"
              }
            }
          })}
        </script>
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
              <span className="text-cyan-400 text-sm font-medium">50+ Ready-to-Use Solutions</span>
            </div>
            
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 relative">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400">
                Micro SAAS Services
              </span>
              <div className="absolute -inset-1 bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 rounded-lg blur opacity-30 animate-pulse"></div>
            </h1>
            
            <p className="text-xl text-gray-300 mb-8 max-w-4xl mx-auto leading-relaxed">
              Transform your business with our comprehensive suite of AI-powered micro SAAS solutions. 
              Ready-to-use software that delivers immediate value with enterprise-grade features and pricing that scales with your business.
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
                className="border border-cyan-400 text-cyan-400 px-8 py-4 rounded-lg font-semibold hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300 hover:scale-105"
              >
                Watch Demo
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
                  Choose Your Solutions
                </span>
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Select from our comprehensive suite of micro SAAS solutions designed to address every aspect of your business operations.
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
                      <span className="bg-gradient-to-r from-yellow-400 to-orange-500 text-black text-xs font-bold px-2 py-1 rounded-full flex items-center">
                        <Crown className="w-3 h-3 mr-1" />
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
                        <span className="text-cyan-400 font-bold text-2xl">${service.price}</span>
                        <span className="text-gray-400 text-sm">/{service.period}</span>
                        {service.originalPrice && (
                          <span className="text-gray-500 line-through text-sm">${service.originalPrice}</span>
                        )}
                      </div>
                      {service.originalPrice && (
                        <div className="text-green-400 text-sm font-medium">
                          Save ${service.originalPrice - service.price}/{service.period}
                        </div>
                      )}
                    </div>
                    
                    {/* Key Features */}
                    <div className="space-y-2 mb-6">
                      {service.features.slice(0, 4).map((feature, idx) => (
                        <div key={idx} className="flex items-center text-sm text-gray-300">
                          <CheckCircle className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
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
                      <div className="grid grid-cols-2 gap-2">
                        {service.benefits.map((benefit, idx) => (
                          <div key={idx} className="text-xs text-gray-300 bg-white/5 rounded px-2 py-1 text-center">
                            {benefit}
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
                  className="group bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 flex items-center justify-center shadow-lg hover:shadow-cyan-500/25 hover:scale-105"
                >
                  Start Free Trial
                  <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                </Link>
                <Link
                  to="/consultation"
                  className="border border-cyan-400 text-cyan-400 px-8 py-4 rounded-lg font-semibold hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300 hover:scale-105"
                >
                  Schedule Consultation
                </Link>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
import { ArrowRight, Zap, Shield, Cloud, BarChart3, Brain, Code, Database, Target, Users, Mail, Smartphone, Globe, Star, CheckCircle, TrendingUp, Lock, Clock, Sparkles } from "lucide-react";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";

export default function MicroSaas() {
  const microSaasServices = [
    {
      id: "zion-analytics-pro",
      name: "Zion Analytics Pro",
      tagline: "AI-Powered Business Intelligence Platform",
      description: "Transform your data into actionable insights with our advanced AI analytics platform. Real-time dashboards, predictive analytics, and automated reporting for businesses of all sizes.",
      icon: <BarChart3 className="w-8 h-8" />,
      color: "from-blue-500 to-cyan-500",
      price: "$299",
      period: "month",
      features: [
        "Real-time Analytics Dashboard",
        "AI-Powered Predictive Modeling",
        "Custom Report Generation",
        "Multi-Data Source Integration",
        "Advanced Data Visualization",
        "Automated Alerts & Notifications",
        "Team Collaboration Tools",
        "API Integration Support",
        "Mobile App Access",
        "24/7 Customer Support"
      ],
      benefits: [
        "40% increase in data-driven decisions",
        "60% reduction in reporting time",
        "Real-time insights across all departments",
        "Scalable from startup to enterprise"
      ],
      marketPrice: "$499",
      savings: "40%",
      category: "Analytics",
      popular: true
    },
    {
      id: "zion-security-shield",
      name: "Zion Security Shield",
      tagline: "Advanced Cybersecurity Protection Suite",
      description: "Comprehensive cybersecurity solution with AI-powered threat detection, automated incident response, and compliance management for modern businesses.",
      icon: <Shield className="w-8 h-8" />,
      color: "from-red-500 to-orange-500",
      price: "$499",
      period: "month",
      features: [
        "AI Threat Detection & Response",
        "Real-time Security Monitoring",
        "Automated Incident Response",
        "Compliance Management (SOC2, GDPR, HIPAA)",
        "Vulnerability Assessment",
        "Security Awareness Training",
        "Penetration Testing",
        "24/7 Security Operations Center",
        "Custom Security Policies",
        "Detailed Security Reports"
      ],
      benefits: [
        "99.9% threat detection accuracy",
        "50% faster incident response",
        "Complete compliance coverage",
        "Reduced security costs by 30%"
      ],
      marketPrice: "$799",
      savings: "38%",
      category: "Security",
      popular: true
    },
    {
      id: "zion-cloud-vault",
      name: "Zion Cloud Vault",
      tagline: "Secure Cloud Storage & Backup Solution",
      description: "Enterprise-grade cloud storage with advanced encryption, automated backups, and seamless collaboration tools for secure data management.",
      icon: <Cloud className="w-8 h-8" />,
      color: "from-indigo-500 to-purple-500",
      price: "$99",
      period: "month",
      features: [
        "Unlimited Cloud Storage",
        "End-to-End Encryption",
        "Automated Backup Scheduling",
        "File Versioning & Recovery",
        "Team Collaboration Tools",
        "Advanced Access Controls",
        "Mobile & Desktop Sync",
        "API Integration",
        "Compliance Reporting",
        "99.99% Uptime SLA"
      ],
      benefits: [
        "Unlimited storage capacity",
        "Zero data loss guarantee",
        "50% faster file access",
        "Seamless team collaboration"
      ],
      marketPrice: "$199",
      savings: "50%",
      category: "Storage",
      popular: false
    },
    {
      id: "zion-content-studio",
      name: "Zion Content Studio",
      tagline: "AI-Powered Content Creation Platform",
      description: "Create high-quality content at scale with our AI-powered writing tools. Blog posts, social media content, product descriptions, and marketing materials.",
      icon: <Brain className="w-8 h-8" />,
      color: "from-purple-500 to-pink-500",
      price: "$199",
      period: "month",
      features: [
        "AI Content Generation",
        "SEO Optimization Tools",
        "Brand Voice Training",
        "Multi-format Content Creation",
        "Plagiarism Detection",
        "Content Calendar Management",
        "Team Collaboration",
        "Performance Analytics",
        "Social Media Integration",
        "Content Templates Library"
      ],
      benefits: [
        "10x faster content creation",
        "40% improvement in SEO rankings",
        "Consistent brand voice",
        "Reduced content costs by 60%"
      ],
      marketPrice: "$399",
      savings: "50%",
      category: "Content",
      popular: true
    },
    {
      id: "zion-data-sync",
      name: "Zion Data Sync",
      tagline: "Intelligent Data Integration Platform",
      description: "Seamlessly connect and synchronize data across all your business applications with our intelligent data integration platform.",
      icon: <Database className="w-8 h-8" />,
      color: "from-green-500 to-emerald-500",
      price: "$149",
      period: "month",
      features: [
        "Multi-Platform Data Integration",
        "Real-time Data Synchronization",
        "Data Transformation & Mapping",
        "Error Detection & Correction",
        "Custom Data Workflows",
        "API Management",
        "Data Quality Monitoring",
        "Automated Data Validation",
        "Historical Data Migration",
        "24/7 Data Monitoring"
      ],
      benefits: [
        "Eliminate data silos",
        "99.9% data accuracy",
        "80% reduction in manual data entry",
        "Real-time business insights"
      ],
      marketPrice: "$299",
      savings: "50%",
      category: "Integration",
      popular: false
    },
    {
      id: "zion-lead-magnet",
      name: "Zion Lead Magnet",
      tagline: "AI-Powered Lead Generation & Management",
      description: "Generate, qualify, and nurture leads with our intelligent lead management system powered by AI and automation.",
      icon: <Target className="w-8 h-8" />,
      color: "from-yellow-500 to-orange-500",
      price: "$179",
      period: "month",
      features: [
        "AI Lead Scoring",
        "Automated Lead Nurturing",
        "Multi-Channel Lead Capture",
        "CRM Integration",
        "Email Marketing Automation",
        "Lead Analytics & Reporting",
        "A/B Testing Tools",
        "Custom Lead Forms",
        "Social Media Integration",
        "Lead Quality Assessment"
      ],
      benefits: [
        "3x more qualified leads",
        "60% higher conversion rates",
        "Automated lead nurturing",
        "Complete lead lifecycle management"
      ],
      marketPrice: "$349",
      savings: "49%",
      category: "Marketing",
      popular: false
    },
    {
      id: "zion-project-master",
      name: "Zion Project Master",
      tagline: "AI-Enhanced Project Management Suite",
      description: "Streamline project management with AI-powered planning, resource optimization, and automated task management for teams of all sizes.",
      icon: <Code className="w-8 h-8" />,
      color: "from-teal-500 to-cyan-500",
      price: "$129",
      period: "month",
      features: [
        "AI Project Planning",
        "Resource Optimization",
        "Automated Task Management",
        "Team Collaboration Tools",
        "Progress Tracking & Analytics",
        "Risk Assessment & Mitigation",
        "Time Tracking & Reporting",
        "Budget Management",
        "Custom Workflows",
        "Integration with 50+ Tools"
      ],
      benefits: [
        "30% faster project delivery",
        "25% better resource utilization",
        "Reduced project risks",
        "Improved team productivity"
      ],
      marketPrice: "$249",
      savings: "48%",
      category: "Productivity",
      popular: false
    },
    {
      id: "zion-email-automation",
      name: "Zion Email Automation",
      tagline: "Intelligent Email Marketing Platform",
      description: "Create, send, and optimize email campaigns with AI-powered personalization, automation, and analytics for maximum engagement.",
      icon: <Mail className="w-8 h-8" />,
      color: "from-pink-500 to-rose-500",
      price: "$89",
      period: "month",
      features: [
        "AI-Powered Email Personalization",
        "Advanced Automation Workflows",
        "A/B Testing & Optimization",
        "Email Template Library",
        "Subscriber Segmentation",
        "Performance Analytics",
        "Deliverability Optimization",
        "Mobile-Responsive Design",
        "Integration with CRM",
        "Compliance Management"
      ],
      benefits: [
        "40% higher open rates",
        "60% increase in click-through rates",
        "Automated email sequences",
        "Complete email marketing solution"
      ],
      marketPrice: "$179",
      savings: "50%",
      category: "Marketing",
      popular: false
    },
    {
      id: "zion-crm-assistant",
      name: "Zion CRM Assistant",
      tagline: "AI-Powered Customer Relationship Management",
      description: "Enhance customer relationships with our intelligent CRM system featuring AI insights, automated follow-ups, and predictive analytics.",
      icon: <Users className="w-8 h-8" />,
      color: "from-violet-500 to-purple-500",
      price: "$229",
      period: "month",
      features: [
        "AI Customer Insights",
        "Automated Follow-up Sequences",
        "Sales Forecasting",
        "Lead Qualification",
        "Customer Journey Mapping",
        "Integration with 100+ Tools",
        "Custom Dashboards",
        "Advanced Reporting",
        "Mobile CRM Access",
        "Team Collaboration Tools"
      ],
      benefits: [
        "35% increase in sales",
        "50% better customer retention",
        "Automated sales processes",
        "Complete customer lifecycle management"
      ],
      marketPrice: "$449",
      savings: "49%",
      category: "CRM",
      popular: true
    },
    {
      id: "zion-finance-pro",
      name: "Zion Finance Pro",
      tagline: "AI-Powered Financial Management Suite",
      description: "Streamline financial operations with AI-powered accounting, expense management, and financial analytics for businesses of all sizes.",
      icon: <TrendingUp className="w-8 h-8" />,
      color: "from-amber-500 to-yellow-500",
      price: "$159",
      period: "month",
      features: [
        "AI-Powered Accounting",
        "Automated Expense Tracking",
        "Financial Forecasting",
        "Invoice Generation & Management",
        "Tax Preparation Tools",
        "Budget Planning & Monitoring",
        "Financial Reporting",
        "Multi-Currency Support",
        "Bank Integration",
        "Compliance Management"
      ],
      benefits: [
        "70% reduction in accounting time",
        "95% accuracy in financial reporting",
        "Automated expense management",
        "Complete financial visibility"
      ],
      marketPrice: "$319",
      savings: "50%",
      category: "Finance",
      popular: false
    }
  ];

  const categories = ["All", "Analytics", "Security", "Storage", "Content", "Integration", "Marketing", "Productivity", "CRM", "Finance"];

  return (
    <>
      <Helmet>
        <title>Micro SAAS Solutions - Zion Tech Group | AI-Powered Business Tools</title>
        <meta
          name="description"
          content="Discover our comprehensive suite of micro SAAS solutions including AI analytics, cybersecurity, cloud storage, content creation, and more. Transform your business with innovative technology."
        />
        <meta
          name="keywords"
          content="micro SAAS, business software, AI analytics, cybersecurity, cloud storage, content creation, project management, CRM, email marketing, financial management"
        />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 relative overflow-hidden">
        {/* Animated Background */}
        <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 via-purple-500/10 to-pink-500/10 animate-pulse"></div>
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_50%_50%,rgba(120,119,198,0.3),transparent_50%)]"></div>
        
        {/* Hero Section */}
        <section className="pt-20 pb-16 px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-7xl mx-auto text-center">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-purple-500/20 to-cyan-500/20 border border-purple-500/30 mb-6">
              <Sparkles className="w-4 h-4 text-purple-400 mr-2" />
              <span className="text-purple-400 text-sm font-medium">50+ Micro SAAS Solutions Available</span>
            </div>
            
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
              Micro
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-cyan-400 to-pink-400 animate-pulse">
                {" "}SAAS
              </span>
              <br />
              Solutions
            </h1>
            
            <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto leading-relaxed">
              Transform your business with our comprehensive suite of AI-powered micro SAAS solutions. 
              From analytics to security, we provide everything you need to accelerate growth and innovation.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
              <Link
                to="/contact"
                className="bg-gradient-to-r from-purple-500 to-cyan-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-purple-600 hover:to-cyan-700 transition-all duration-300 flex items-center justify-center group shadow-lg hover:shadow-purple-500/25 hover:scale-105"
              >
                Start Free Trial
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                to="/demo"
                className="border border-purple-400 text-purple-400 px-8 py-4 rounded-lg font-semibold hover:bg-purple-400 hover:text-slate-900 transition-all duration-300 group hover:scale-105"
              >
                Watch Demo
                <Sparkles className="w-5 h-5 ml-2 group-hover:rotate-12 transition-transform" />
              </Link>
            </div>
          </div>
        </section>

        {/* Category Filter */}
        <section className="py-8 px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-7xl mx-auto">
            <div className="flex flex-wrap justify-center gap-4">
              {categories.map((category) => (
                <button
                  key={category}
                  className="px-6 py-3 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 text-white hover:bg-white/20 transition-all duration-300 hover:scale-105"
                >
                  {category}
                </button>
              ))}
            </div>
          </div>
        </section>

        {/* Services Grid */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {microSaasServices.map((service, index) => (
                <div
                  key={service.id}
                  className="group bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-purple-500/10 relative overflow-hidden"
                >
                  {/* Popular Badge */}
                  {service.popular && (
                    <div className="absolute top-4 right-4">
                      <div className="bg-gradient-to-r from-yellow-400 to-orange-500 text-white px-3 py-1 rounded-full text-xs font-bold flex items-center">
                        <Star className="w-3 h-3 mr-1 fill-current" />
                        Popular
                      </div>
                    </div>
                  )}

                  {/* Animated background effect */}
                  <div className="absolute inset-0 bg-gradient-to-r from-purple-500/5 to-cyan-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  
                  <div className="relative z-10">
                    {/* Icon and Category */}
                    <div className="flex items-center justify-between mb-4">
                      <div
                        className={`w-16 h-16 rounded-xl bg-gradient-to-r ${service.color} flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-lg`}
                      >
                        {service.icon}
                      </div>
                      <div className="text-right">
                        <div className="text-xs text-gray-400 uppercase tracking-wider">{service.category}</div>
                        <div className="text-sm text-purple-400 font-medium">Save {service.savings}</div>
                      </div>
                    </div>

                    {/* Title and Tagline */}
                    <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-purple-300 transition-colors">
                      {service.name}
                    </h3>
                    <p className="text-purple-400 text-sm font-medium mb-4">{service.tagline}</p>
                    
                    {/* Description */}
                    <p className="text-gray-300 text-sm leading-relaxed mb-6">
                      {service.description}
                    </p>

                    {/* Pricing */}
                    <div className="mb-6">
                      <div className="flex items-baseline mb-2">
                        <span className="text-3xl font-bold text-white">${service.price}</span>
                        <span className="text-gray-400 ml-2">/{service.period}</span>
                        <span className="text-sm text-gray-500 line-through ml-2">${service.marketPrice}</span>
                      </div>
                      <div className="text-sm text-green-400 font-medium">
                        You save ${parseInt(service.marketPrice) - parseInt(service.price)}/{service.period}
                      </div>
                    </div>

                    {/* Key Features */}
                    <div className="mb-6">
                      <h4 className="text-white font-semibold mb-3">Key Features:</h4>
                      <div className="space-y-2">
                        {service.features.slice(0, 4).map((feature, idx) => (
                          <div key={idx} className="flex items-center text-sm text-gray-300">
                            <CheckCircle className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
                            <span>{feature}</span>
                          </div>
                        ))}
                        {service.features.length > 4 && (
                          <div className="text-sm text-purple-400 font-medium">
                            +{service.features.length - 4} more features
                          </div>
                        )}
                      </div>
                    </div>

                    {/* Benefits */}
                    <div className="mb-6">
                      <h4 className="text-white font-semibold mb-3">Key Benefits:</h4>
                      <div className="space-y-1">
                        {service.benefits.map((benefit, idx) => (
                          <div key={idx} className="text-sm text-cyan-400">
                            • {benefit}
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* CTA Button */}
                    <div className="space-y-3">
                      <Link
                        to={`/${service.id}`}
                        className="w-full bg-gradient-to-r from-purple-500 to-cyan-600 text-white px-6 py-3 rounded-lg font-semibold hover:from-purple-600 hover:to-cyan-700 transition-all duration-300 flex items-center justify-center group-hover:scale-105"
                      >
                        Learn More
                        <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                      </Link>
                      <Link
                        to="/contact"
                        className="w-full border border-purple-400 text-purple-400 px-6 py-3 rounded-lg font-semibold hover:bg-purple-400 hover:text-slate-900 transition-all duration-300 text-center block"
                      >
                        Start Free Trial
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
                Contact us today for a personalized consultation.
              </p>
              
              {/* Contact Details */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                <div className="text-center">
                  <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-cyan-600 rounded-lg flex items-center justify-center mx-auto mb-3">
                    <Mail className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-white font-semibold mb-2">Email</h3>
                  <p className="text-purple-400">kleber@ziontechgroup.com</p>
                </div>
                <div className="text-center">
                  <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-cyan-600 rounded-lg flex items-center justify-center mx-auto mb-3">
                    <Smartphone className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-white font-semibold mb-2">Phone</h3>
                  <p className="text-purple-400">+1 302 464 0950</p>
                </div>
                <div className="text-center">
                  <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-cyan-600 rounded-lg flex items-center justify-center mx-auto mb-3">
                    <Globe className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-white font-semibold mb-2">Address</h3>
                  <p className="text-purple-400 text-sm">364 E Main St STE 1008<br />Middletown DE 19709</p>
                </div>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  to="/contact"
                  className="group bg-gradient-to-r from-purple-500 to-cyan-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-purple-600 hover:to-cyan-700 transition-all duration-300 flex items-center justify-center shadow-lg hover:shadow-purple-500/25 hover:scale-105"
                >
                  Start Your Journey
                  <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                </Link>
                <Link
                  to="/consultation"
                  className="border border-purple-400 text-purple-400 px-8 py-4 rounded-lg font-semibold hover:bg-purple-400 hover:text-slate-900 transition-all duration-300 hover:scale-105"
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
}
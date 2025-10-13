import React from "react";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { 
  ArrowRight, 
  BarChart3, 
  Shield, 
  Cloud, 
  Users, 
  Target, 
  Calendar,
  FileText,
  Database,
  Zap,
  Brain,
  Globe,
  Code,
  Mail,
  Phone,
  MapPin,
  Star,
  CheckCircle,
  Sparkles,
  TrendingUp,
  Lock,
  Smartphone,
  Monitor,
  Server,
  Bot,
  Eye,
  Settings,
  PieChart,
  Activity,
  DollarSign,
  Clock,
  Award,
  ChevronRight
} from "lucide-react";
import FuturisticCard from "../components/FuturisticCard";
import FuturisticButton from "../components/FuturisticButton";
import ResponsiveContainer from "../components/ResponsiveContainer";
import ResponsiveGrid from "../components/ResponsiveGrid";
import ResponsiveText from "../components/ResponsiveText";

const MicroSAASPage = () => {
  const microSaasServices = [
    {
      id: "zion-analytics-pro",
      name: "Zion Analytics Pro",
      description: "AI-powered business intelligence platform with real-time dashboards, predictive analytics, and automated reporting. Transform your data into actionable insights with 99.9% accuracy.",
      price: "From $299/month",
      originalPrice: "$599/month",
      icon: <BarChart3 className="w-8 h-8" />,
      color: "from-blue-500 to-cyan-500",
      category: "Analytics & BI",
      features: [
        "Real-time Analytics Dashboard",
        "Predictive Modeling & Forecasting",
        "Custom Report Builder",
        "API Integration (REST/GraphQL)",
        "Mobile & Desktop Apps",
        "White-label Options",
        "Advanced Data Visualization",
        "Automated Alerts & Notifications",
        "Multi-tenant Architecture",
        "99.9% Uptime SLA"
      ],
      benefits: [
        "40% increase in decision-making speed",
        "60% reduction in manual reporting time",
        "Real-time insights across all departments",
        "Customizable dashboards for every role",
        "Integration with 100+ business tools"
      ],
      link: "/zion-analytics-pro",
      popular: true,
      rating: 4.9,
      reviews: 247
    },
    {
      id: "zion-security-shield",
      name: "Zion Security Shield",
      description: "Advanced cybersecurity protection with AI-powered threat detection, automated response, and compliance monitoring. Protect your business 24/7 with enterprise-grade security.",
      price: "From $499/month",
      originalPrice: "$999/month",
      icon: <Shield className="w-8 h-8" />,
      color: "from-red-500 to-orange-500",
      category: "Cybersecurity",
      features: [
        "AI-Powered Threat Detection",
        "Automated Incident Response",
        "Real-time Security Monitoring",
        "Compliance Reporting (SOC2, GDPR, HIPAA)",
        "Vulnerability Assessment",
        "Penetration Testing",
        "Security Training Modules",
        "24/7 Security Operations Center",
        "Multi-factor Authentication",
        "Zero-trust Architecture"
      ],
      benefits: [
        "99.9% threat detection accuracy",
        "50% faster incident response",
        "Complete compliance coverage",
        "Reduced security costs by 40%",
        "Peace of mind with 24/7 protection"
      ],
      link: "/zion-security-shield",
      popular: true,
      rating: 4.8,
      reviews: 189
    },
    {
      id: "zion-cloud-vault",
      name: "Zion Cloud Vault",
      description: "Secure cloud storage solution with end-to-end encryption, unlimited scalability, and advanced collaboration features. Your data, secured and accessible anywhere.",
      price: "From $99/month",
      originalPrice: "$199/month",
      icon: <Cloud className="w-8 h-8" />,
      color: "from-indigo-500 to-purple-500",
      category: "Cloud Storage",
      features: [
        "End-to-End Encryption",
        "Unlimited Storage Capacity",
        "Advanced File Sharing",
        "Version Control & History",
        "Collaborative Workspaces",
        "Mobile & Desktop Sync",
        "API Access & Integration",
        "Advanced Search & Filtering",
        "Automated Backup",
        "99.99% Uptime Guarantee"
      ],
      benefits: [
        "Unlimited storage for all file types",
        "Bank-level security encryption",
        "Seamless collaboration tools",
        "Access from any device, anywhere",
        "Significant cost savings vs competitors"
      ],
      link: "/zion-cloud-vault",
      popular: true,
      rating: 4.7,
      reviews: 156
    },
    {
      id: "zion-ai-crm-pro",
      name: "Zion AI CRM Pro",
      description: "AI-powered customer relationship management with intelligent lead scoring, automated follow-ups, and predictive sales analytics. Close more deals with AI assistance.",
      price: "From $199/month",
      originalPrice: "$399/month",
      icon: <Users className="w-8 h-8" />,
      color: "from-green-500 to-emerald-500",
      category: "CRM & Sales",
      features: [
        "AI Lead Scoring & Qualification",
        "Automated Follow-up Sequences",
        "Predictive Sales Analytics",
        "Pipeline Management",
        "Email & Call Integration",
        "Custom Workflow Automation",
        "Advanced Reporting & Dashboards",
        "Mobile CRM App",
        "Third-party Integrations",
        "Team Collaboration Tools"
      ],
      benefits: [
        "35% increase in lead conversion",
        "50% reduction in manual follow-ups",
        "Accurate sales forecasting",
        "Streamlined sales processes",
        "Better customer relationship management"
      ],
      link: "/zion-ai-crm-pro",
      popular: true,
      rating: 4.8,
      reviews: 203
    },
    {
      id: "zion-content-studio",
      name: "Zion Content Studio",
      description: "AI-powered content creation platform with automated writing, SEO optimization, and multi-format publishing. Create engaging content at scale with AI assistance.",
      price: "From $149/month",
      originalPrice: "$299/month",
      icon: <FileText className="w-8 h-8" />,
      color: "from-purple-500 to-pink-500",
      category: "Content Creation",
      features: [
        "AI Content Generation",
        "SEO Optimization Tools",
        "Multi-format Publishing",
        "Brand Voice Training",
        "Plagiarism Detection",
        "Content Calendar Management",
        "Team Collaboration",
        "Social Media Integration",
        "Analytics & Performance Tracking",
        "Template Library"
      ],
      benefits: [
        "80% faster content creation",
        "Improved SEO rankings",
        "Consistent brand voice",
        "Reduced content costs",
        "Higher engagement rates"
      ],
      link: "/zion-content-studio",
      popular: false,
      rating: 4.6,
      reviews: 134
    },
    {
      id: "zion-project-master",
      name: "Zion Project Master",
      description: "AI-powered project management with intelligent task prioritization, resource allocation, and automated reporting. Manage projects efficiently with AI insights.",
      price: "From $99/month",
      originalPrice: "$199/month",
      icon: <Calendar className="w-8 h-8" />,
      color: "from-yellow-500 to-orange-500",
      category: "Project Management",
      features: [
        "AI Task Prioritization",
        "Resource Allocation Optimization",
        "Automated Progress Reporting",
        "Team Collaboration Tools",
        "Time Tracking & Analytics",
        "Risk Assessment & Mitigation",
        "Gantt Charts & Timelines",
        "Budget Management",
        "Integration with 50+ tools",
        "Mobile Project Management"
      ],
      benefits: [
        "30% improvement in project delivery",
        "25% reduction in project costs",
        "Better resource utilization",
        "Proactive risk management",
        "Enhanced team productivity"
      ],
      link: "/zion-project-master",
      popular: false,
      rating: 4.7,
      reviews: 98
    },
    {
      id: "zion-data-sync",
      name: "Zion Data Sync",
      description: "Automated data synchronization and integration platform connecting all your business tools. Keep your data consistent across all systems in real-time.",
      price: "From $79/month",
      originalPrice: "$159/month",
      icon: <Database className="w-8 h-8" />,
      color: "from-teal-500 to-cyan-500",
      category: "Data Integration",
      features: [
        "Real-time Data Synchronization",
        "200+ Pre-built Integrations",
        "Custom API Development",
        "Data Transformation & Mapping",
        "Error Handling & Recovery",
        "Data Quality Monitoring",
        "Automated Testing",
        "Scalable Architecture",
        "Security & Compliance",
        "24/7 Monitoring"
      ],
      benefits: [
        "Eliminate data silos",
        "Real-time data consistency",
        "Reduced manual data entry",
        "Improved data accuracy",
        "Faster business processes"
      ],
      link: "/zion-data-sync",
      popular: false,
      rating: 4.5,
      reviews: 87
    },
    {
      id: "zion-ai-marketing-automation",
      name: "Zion AI Marketing Automation",
      description: "End-to-end marketing automation with AI-driven personalization, email campaigns, social media management, and advanced lead scoring algorithms.",
      price: "From $199/month",
      originalPrice: "$399/month",
      icon: <Target className="w-8 h-8" />,
      color: "from-pink-500 to-rose-500",
      category: "Marketing Automation",
      features: [
        "AI-Powered Personalization",
        "Email Marketing Automation",
        "Social Media Management",
        "Lead Scoring & Nurturing",
        "A/B Testing & Optimization",
        "Customer Journey Mapping",
        "Analytics & ROI Tracking",
        "Multi-channel Campaigns",
        "Behavioral Triggers",
        "CRM Integration"
      ],
      benefits: [
        "45% increase in lead conversion",
        "60% improvement in email open rates",
                "Personalized customer experiences",
        "Automated campaign optimization",
        "Higher marketing ROI"
      ],
      link: "/zion-ai-marketing-automation",
      popular: true,
      rating: 4.8,
      reviews: 167
    },
    {
      id: "zion-ai-customer-support",
      name: "Zion AI Customer Support",
      description: "Intelligent customer support automation with AI chatbots, sentiment analysis, and automated ticket routing. Provide 24/7 support with AI assistance.",
      price: "From $149/month",
      originalPrice: "$299/month",
      icon: <Bot className="w-8 h-8" />,
      color: "from-violet-500 to-purple-500",
      category: "Customer Support",
      features: [
        "AI Chatbot with NLP",
        "Sentiment Analysis",
        "Automated Ticket Routing",
        "Knowledge Base Integration",
        "Multi-language Support",
        "Live Chat Handoff",
        "Performance Analytics",
        "Custom Training",
        "API Integration",
        "24/7 Availability"
      ],
      benefits: [
        "70% reduction in support tickets",
        "Instant response to common queries",
        "Improved customer satisfaction",
        "24/7 support availability",
        "Reduced support costs"
      ],
      link: "/zion-ai-customer-support",
      popular: false,
      rating: 4.6,
      reviews: 112
    },
    {
      id: "zion-financial-analytics",
      name: "Zion Financial Analytics",
      description: "Advanced financial modeling and risk assessment with automated reporting, fraud detection, and investment analysis tools for financial institutions.",
      price: "From $349/month",
      originalPrice: "$699/month",
      icon: <TrendingUp className="w-8 h-8" />,
      color: "from-amber-500 to-yellow-500",
      category: "Financial Services",
      features: [
        "Advanced Financial Modeling",
        "Risk Assessment & Management",
        "Fraud Detection Algorithms",
        "Investment Analysis Tools",
        "Compliance Reporting",
        "Portfolio Optimization",
        "Market Prediction Models",
        "Real-time Financial Data",
        "Custom Dashboards",
        "Regulatory Compliance"
      ],
      benefits: [
        "Accurate financial forecasting",
        "Proactive risk management",
        "Reduced fraud losses",
        "Better investment decisions",
        "Compliance automation"
      ],
      link: "/zion-financial-analytics",
      popular: false,
      rating: 4.7,
      reviews: 76
    },
    {
      id: "zion-supply-chain-optimizer",
      name: "Zion Supply Chain Optimizer",
      description: "Intelligent supply chain management with demand forecasting, inventory optimization, and logistics automation for manufacturing and retail.",
      price: "From $279/month",
      originalPrice: "$559/month",
      icon: <Globe className="w-8 h-8" />,
      color: "from-slate-500 to-gray-500",
      category: "Supply Chain",
      features: [
        "Demand Forecasting",
        "Inventory Optimization",
        "Route Planning & Optimization",
        "Supplier Management",
        "Risk Assessment",
        "Cost Analysis & Optimization",
        "Real-time Tracking",
        "Automated Alerts",
        "Integration with ERP Systems",
        "Performance Analytics"
      ],
      benefits: [
        "20% reduction in inventory costs",
        "Improved demand accuracy",
        "Optimized logistics routes",
        "Better supplier relationships",
        "Reduced supply chain risks"
      ],
      link: "/zion-supply-chain-optimizer",
      popular: false,
      rating: 4.5,
      reviews: 89
    },
    {
      id: "zion-legal-research",
      name: "Zion Legal Research Assistant",
      description: "Advanced legal research and document analysis with case law search, contract review, and compliance monitoring for law firms and legal departments.",
      price: "From $329/month",
      originalPrice: "$659/month",
      icon: <FileText className="w-8 h-8" />,
      color: "from-indigo-500 to-blue-500",
      category: "Legal Tech",
      features: [
        "Case Law Search & Analysis",
        "Contract Review & Analysis",
        "Compliance Monitoring",
        "Document Review Automation",
        "Legal Research Tools",
        "Precedent Analysis",
        "Due Diligence Support",
        "Regulatory Updates",
        "Client Portal",
        "Billing Integration"
      ],
      benefits: [
        "50% faster legal research",
        "Improved case outcomes",
        "Reduced manual review time",
        "Better compliance tracking",
        "Enhanced client service"
      ],
      link: "/zion-legal-research",
      popular: false,
      rating: 4.6,
      reviews: 54
    }
  ];

  const categories = [
    { name: "All Services", count: microSaasServices.length, active: true },
    { name: "Analytics & BI", count: microSaasServices.filter(s => s.category === "Analytics & BI").length },
    { name: "Cybersecurity", count: microSaasServices.filter(s => s.category === "Cybersecurity").length },
    { name: "Cloud Storage", count: microSaasServices.filter(s => s.category === "Cloud Storage").length },
    { name: "CRM & Sales", count: microSaasServices.filter(s => s.category === "CRM & Sales").length },
    { name: "Content Creation", count: microSaasServices.filter(s => s.category === "Content Creation").length },
    { name: "Project Management", count: microSaasServices.filter(s => s.category === "Project Management").length },
    { name: "Data Integration", count: microSaasServices.filter(s => s.category === "Data Integration").length },
    { name: "Marketing Automation", count: microSaasServices.filter(s => s.category === "Marketing Automation").length },
    { name: "Customer Support", count: microSaasServices.filter(s => s.category === "Customer Support").length },
    { name: "Financial Services", count: microSaasServices.filter(s => s.category === "Financial Services").length },
    { name: "Supply Chain", count: microSaasServices.filter(s => s.category === "Supply Chain").length },
    { name: "Legal Tech", count: microSaasServices.filter(s => s.category === "Legal Tech").length }
  ];

  const stats = [
    { number: "500+", label: "Active Customers", icon: <Users className="w-6 h-6" /> },
    { number: "99.9%", label: "Uptime SLA", icon: <Shield className="w-6 h-6" /> },
    { number: "24/7", label: "Support Available", icon: <Clock className="w-6 h-6" /> },
    { number: "50+", label: "Integrations", icon: <Zap className="w-6 h-6" /> }
  ];

  return (
    <>
      <Helmet>
        <title>Micro SAAS Solutions - Zion Tech Group | AI-Powered Business Tools</title>
        <meta
          name="description"
          content="Discover our comprehensive suite of micro SAAS solutions including AI analytics, cybersecurity, cloud storage, CRM, content creation, and more. Transform your business with ready-to-use software tools."
        />
        <meta
          name="keywords"
          content="micro SAAS, business software, AI analytics, cybersecurity, cloud storage, CRM, content creation, project management, marketing automation, customer support, financial analytics"
        />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 relative overflow-hidden">
        {/* Animated Background */}
        <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 via-purple-500/10 to-pink-500/10 animate-pulse"></div>
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_50%_50%,rgba(120,119,198,0.3),transparent_50%)]"></div>
        
        {/* Hero Section */}
        <section className="pt-32 pb-16 px-4 sm:px-6 lg:px-8 relative z-10">
          <ResponsiveContainer className="text-center">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-purple-500/20 to-cyan-500/20 border border-purple-500/30 mb-6">
              <Sparkles className="w-4 h-4 text-purple-400 mr-2" />
              <span className="text-purple-400 text-sm font-medium">#1 Micro SAAS Provider 2024</span>
            </div>
            
            <ResponsiveText
              as="h1"
              size="6xl"
              weight="bold"
              color="white"
              className="mb-6 leading-tight"
            >
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-cyan-400 to-pink-400">
                Micro SAAS Solutions
              </span>
            </ResponsiveText>
            
            <ResponsiveText
              as="p"
              size="xl"
              color="gray"
              align="center"
              className="mb-8 max-w-4xl mx-auto leading-relaxed"
            >
              Ready-to-use software solutions that can transform your business operations immediately. 
              From AI-powered analytics to advanced cybersecurity, we provide enterprise-grade tools at micro SAAS prices.
            </ResponsiveText>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
              <FuturisticButton
                href="/contact"
                variant="primary"
                size="lg"
                icon={<Sparkles className="w-5 h-5" />}
              >
                Start Free Trial
              </FuturisticButton>
              <FuturisticButton
                href="/demo"
                variant="outline"
                size="lg"
                icon={<Monitor className="w-5 h-5" />}
              >
                Watch Demo
              </FuturisticButton>
            </div>
            
            {/* Stats */}
            <ResponsiveGrid cols={{ default: 2, md: 4 }} className="max-w-4xl mx-auto">
              {stats.map((stat, index) => (
                <div key={index} className="text-center group">
                  <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-r from-purple-500/20 to-cyan-500/20 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    {stat.icon}
                  </div>
                  <div className="text-2xl md:text-3xl font-bold text-white mb-2">{stat.number}</div>
                  <div className="text-gray-300 text-sm">{stat.label}</div>
                </div>
              ))}
            </ResponsiveGrid>
          </ResponsiveContainer>
        </section>

        {/* Category Filter */}
        <section className="py-8 px-4 sm:px-6 lg:px-8 relative z-10">
          <ResponsiveContainer>
            <div className="flex flex-wrap justify-center gap-2 mb-8">
              {categories.map((category, index) => (
                <button
                  key={index}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                    category.active
                      ? 'bg-gradient-to-r from-purple-500 to-cyan-500 text-white shadow-lg'
                      : 'bg-white/10 text-gray-300 hover:bg-white/20 hover:text-white'
                  }`}
                >
                  {category.name} ({category.count})
                </button>
              ))}
            </div>
          </ResponsiveContainer>
        </section>

        {/* Services Grid */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 relative z-10">
          <ResponsiveContainer>
            <ResponsiveGrid cols={{ default: 1, md: 2, lg: 3 }} className="gap-8">
              {microSaasServices.map((service, index) => (
                <FuturisticCard
                  key={index}
                  className="group cursor-pointer h-full"
                  glowColor={service.color.includes('blue') ? 'cyan' : service.color.includes('red') ? 'red' : service.color.includes('purple') ? 'purple' : 'pink'}
                >
                  <Link
                    to={service.link}
                    className="block p-6 h-full flex flex-col"
                    aria-label={`Learn more about ${service.name}`}
                  >
                    {service.popular && (
                      <div className="absolute top-4 right-4">
                        <span className="bg-gradient-to-r from-yellow-400 to-orange-500 text-black text-xs font-bold px-2 py-1 rounded-full">
                          POPULAR
                        </span>
                      </div>
                    )}
                    
                    <div
                      className={`w-16 h-16 rounded-lg bg-gradient-to-r ${service.color} flex items-center justify-center mb-4 mx-auto group-hover:scale-110 transition-transform duration-300`}
                      aria-hidden="true"
                    >
                      {service.icon}
                    </div>
                    
                    <div className="text-center mb-4">
                      <span className="text-xs bg-purple-500/20 text-purple-300 px-2 py-1 rounded-full border border-purple-500/30">
                        {service.category}
                      </span>
                    </div>
                    
                    <h3 className="text-xl font-semibold text-white mb-3 text-center group-hover:text-cyan-300 transition-colors">
                      {service.name}
                    </h3>
                    
                    <p className="text-gray-300 text-center mb-4 leading-relaxed text-sm flex-grow">
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
                    
                    {/* Rating */}
                    <div className="flex items-center justify-center space-x-1 mb-4">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          className={`w-4 h-4 ${
                            i < Math.floor(service.rating)
                              ? 'text-yellow-400 fill-current'
                              : 'text-gray-600'
                          }`}
                        />
                      ))}
                      <span className="text-sm text-gray-400 ml-2">
                        {service.rating} ({service.reviews} reviews)
                      </span>
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
                    
                    <div className="mt-auto text-center">
                      <span className="inline-flex items-center text-cyan-400 hover:text-cyan-300 font-medium group-hover:translate-x-1 transition-all duration-300">
                        Learn More
                        <ArrowRight className="w-4 h-4 ml-1" />
                      </span>
                    </div>
                  </Link>
                </FuturisticCard>
              ))}
            </ResponsiveGrid>
          </ResponsiveContainer>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-purple-900/30 to-cyan-900/30 relative z-10">
          <ResponsiveContainer className="text-center">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
              Ready to Transform Your Business?
            </h2>
            <p className="text-xl text-gray-300 mb-8 leading-relaxed max-w-3xl mx-auto">
              Join thousands of businesses already using our micro SAAS solutions to drive growth and innovation. 
              Start your free trial today and experience the power of AI-driven business tools.
            </p>
            
            {/* Contact Information */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              <div className="text-center">
                <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-cyan-600 rounded-lg flex items-center justify-center mx-auto mb-3">
                  <Mail className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-white font-semibold mb-2">Email</h3>
                <p className="text-cyan-400">kleber@ziontechgroup.com</p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-cyan-600 rounded-lg flex items-center justify-center mx-auto mb-3">
                  <Phone className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-white font-semibold mb-2">Phone</h3>
                <p className="text-cyan-400">+1 302 464 0950</p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-cyan-600 rounded-lg flex items-center justify-center mx-auto mb-3">
                  <MapPin className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-white font-semibold mb-2">Address</h3>
                <p className="text-cyan-400 text-sm">364 E Main St STE 1008<br />Middletown DE 19709</p>
              </div>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <FuturisticButton
                href="/contact"
                variant="primary"
                size="lg"
                icon={<Sparkles className="w-5 h-5" />}
              >
                Start Free Trial
              </FuturisticButton>
              <FuturisticButton
                href="/demo"
                variant="outline"
                size="lg"
                icon={<Monitor className="w-5 h-5" />}
              >
                Schedule Demo
              </FuturisticButton>
            </div>
          </ResponsiveContainer>
        </section>
      </div>
    </>
  );
};

export default MicroSAASPage;
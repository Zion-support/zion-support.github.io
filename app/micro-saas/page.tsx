import React from "react";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { 
  ArrowRight, 
  BarChart3, 
  Shield, 
  Cloud, 
  Brain, 
  Zap, 
  Database, 
  Mail, 
  Users, 
  FileText, 
  Calendar, 
  CreditCard, 
  CheckCircle, 
  Star,
  TrendingUp,
  Lock,
  Globe,
  Smartphone,
  Monitor,
  Settings,
  Target,
  MessageSquare,
  Workflow,
  FileCheck,
  PieChart,
  Clock,
  DollarSign,
  Award,
  Sparkles
} from "lucide-react";
import FuturisticButton from "../components/FuturisticButton";
import FuturisticCard from "../components/FuturisticCard";
import ResponsiveContainer from "../components/ResponsiveContainer";
import ResponsiveGrid from "../components/ResponsiveGrid";

const MicroSaasPage = () => {
  const microSaasServices = [
    {
      name: "Zion Analytics Pro",
      description: "AI-powered business intelligence platform with real-time dashboards, predictive analytics, and automated reporting. Transform your data into actionable insights.",
      icon: <BarChart3 className="w-8 h-8" />,
      price: "$29",
      period: "month",
      features: [
        "Real-time Analytics Dashboard",
        "Predictive Analytics & Forecasting", 
        "Custom Report Builder",
        "API Integration",
        "Mobile App Access",
        "24/7 Support"
      ],
      color: "from-blue-500 to-cyan-500",
      glowColor: "cyan",
      link: "/zion-analytics-pro",
      popular: true,
      category: "Analytics",
      marketPrice: "$99/month",
      savings: "70%"
    },
    {
      name: "Zion Security Shield",
      description: "Advanced cybersecurity protection with AI-powered threat detection, automated incident response, and compliance monitoring for small to medium businesses.",
      icon: <Shield className="w-8 h-8" />,
      price: "$49",
      period: "month",
      features: [
        "AI Threat Detection",
        "Automated Incident Response",
        "Compliance Monitoring",
        "Security Dashboard",
        "Email Security",
        "24/7 Monitoring"
      ],
      color: "from-green-500 to-emerald-500",
      glowColor: "green",
      link: "/zion-security-shield",
      popular: false,
      category: "Security",
      marketPrice: "$199/month",
      savings: "75%"
    },
    {
      name: "Zion Cloud Vault",
      description: "Secure cloud storage solution with advanced encryption, automated backups, and seamless file synchronization across all your devices.",
      icon: <Cloud className="w-8 h-8" />,
      price: "$9",
      period: "month",
      features: [
        "1TB Secure Storage",
        "End-to-End Encryption",
        "Automated Backups",
        "File Versioning",
        "Team Collaboration",
        "Mobile Sync"
      ],
      color: "from-purple-500 to-pink-500",
      glowColor: "purple",
      link: "/zion-cloud-vault",
      popular: false,
      category: "Storage",
      marketPrice: "$20/month",
      savings: "55%"
    },
    {
      name: "Zion Content Studio",
      description: "AI-powered content creation platform that generates high-quality blog posts, social media content, and marketing materials in minutes.",
      icon: <Brain className="w-8 h-8" />,
      price: "$19",
      period: "month",
      features: [
        "AI Content Generation",
        "SEO Optimization",
        "Multi-format Output",
        "Brand Voice Training",
        "Plagiarism Detection",
        "Content Calendar"
      ],
      color: "from-pink-500 to-rose-500",
      glowColor: "pink",
      link: "/zion-content-studio",
      popular: false,
      category: "Content",
      marketPrice: "$79/month",
      savings: "76%"
    },
    {
      name: "Zion Data Sync",
      description: "Intelligent data synchronization platform that connects and syncs data across multiple platforms, databases, and applications automatically.",
      icon: <Database className="w-8 h-8" />,
      price: "$39",
      period: "month",
      features: [
        "Multi-platform Sync",
        "Real-time Data Updates",
        "Data Transformation",
        "Error Handling",
        "Custom Mappings",
        "API Management"
      ],
      color: "from-indigo-500 to-purple-500",
      glowColor: "indigo",
      link: "/zion-data-sync",
      popular: false,
      category: "Integration",
      marketPrice: "$149/month",
      savings: "74%"
    },
    {
      name: "Zion Lead Magnet",
      description: "Advanced lead generation and nurturing platform with AI-powered lead scoring, automated email sequences, and conversion optimization.",
      icon: <Target className="w-8 h-8" />,
      price: "$24",
      period: "month",
      features: [
        "AI Lead Scoring",
        "Email Automation",
        "Landing Page Builder",
        "A/B Testing",
        "CRM Integration",
        "Analytics Dashboard"
      ],
      color: "from-orange-500 to-red-500",
      glowColor: "orange",
      link: "/zion-lead-magnet",
      popular: false,
      category: "Marketing",
      marketPrice: "$97/month",
      savings: "75%"
    },
    {
      name: "Zion Project Master",
      description: "Comprehensive project management tool with AI-powered task optimization, team collaboration, and automated progress tracking.",
      icon: <Workflow className="w-8 h-8" />,
      price: "$34",
      period: "month",
      features: [
        "AI Task Optimization",
        "Team Collaboration",
        "Time Tracking",
        "Resource Management",
        "Progress Analytics",
        "Integration Hub"
      ],
      color: "from-teal-500 to-cyan-500",
      glowColor: "teal",
      link: "/zion-project-master",
      popular: false,
      category: "Productivity",
      marketPrice: "$89/month",
      savings: "62%"
    },
    {
      name: "Zion Email Automation",
      description: "Intelligent email marketing platform with AI-powered personalization, automated sequences, and advanced analytics for maximum engagement.",
      icon: <Mail className="w-8 h-8" />,
      price: "$14",
      period: "month",
      features: [
        "AI Personalization",
        "Email Sequences",
        "A/B Testing",
        "Subscriber Management",
        "Analytics & Reports",
        "Template Library"
      ],
      color: "from-yellow-500 to-orange-500",
      glowColor: "yellow",
      link: "/zion-email-automation",
      popular: false,
      category: "Marketing",
      marketPrice: "$39/month",
      savings: "64%"
    },
    {
      name: "Zion Social Scheduler",
      description: "AI-powered social media management platform that schedules posts, analyzes performance, and optimizes content for maximum engagement.",
      icon: <MessageSquare className="w-8 h-8" />,
      price: "$16",
      period: "month",
      features: [
        "Multi-platform Scheduling",
        "AI Content Optimization",
        "Performance Analytics",
        "Hashtag Research",
        "Team Collaboration",
        "Content Calendar"
      ],
      color: "from-violet-500 to-purple-500",
      glowColor: "violet",
      link: "/zion-social-scheduler",
      popular: false,
      category: "Social Media",
      marketPrice: "$49/month",
      savings: "67%"
    },
    {
      name: "Zion Workflow Automation",
      description: "No-code workflow automation platform that connects apps and automates repetitive tasks, saving hours of manual work every day.",
      icon: <Zap className="w-8 h-8" />,
      price: "$29",
      period: "month",
      features: [
        "Visual Workflow Builder",
        "500+ App Integrations",
        "Conditional Logic",
        "Error Handling",
        "Team Collaboration",
        "Analytics Dashboard"
      ],
      color: "from-cyan-500 to-blue-500",
      glowColor: "cyan",
      link: "/zion-workflow-automation",
      popular: false,
      category: "Automation",
      marketPrice: "$99/month",
      savings: "71%"
    },
    {
      name: "Zion Invoice Genius",
      description: "Smart invoicing and payment management platform with AI-powered expense tracking, automated reminders, and financial analytics.",
      icon: <CreditCard className="w-8 h-8" />,
      price: "$12",
      period: "month",
      features: [
        "Smart Invoicing",
        "Payment Processing",
        "Expense Tracking",
        "Tax Management",
        "Client Portal",
        "Financial Reports"
      ],
      color: "from-emerald-500 to-green-500",
      glowColor: "emerald",
      link: "/zion-invoice-genius",
      popular: false,
      category: "Finance",
      marketPrice: "$29/month",
      savings: "59%"
    },
    {
      name: "Zion Inventory Smart",
      description: "AI-powered inventory management system with predictive analytics, automated reordering, and real-time tracking across multiple locations.",
      icon: <FileCheck className="w-8 h-8" />,
      price: "$44",
      period: "month",
      features: [
        "AI Demand Forecasting",
        "Automated Reordering",
        "Multi-location Tracking",
        "Barcode Scanning",
        "Supplier Management",
        "Analytics Dashboard"
      ],
      color: "from-amber-500 to-yellow-500",
      glowColor: "amber",
      link: "/zion-inventory-smart",
      popular: false,
      category: "Inventory",
      marketPrice: "$149/month",
      savings: "70%"
    },
    {
      name: "Zion Compliance Manager",
      description: "Automated compliance monitoring and reporting platform that helps businesses stay compliant with industry regulations and standards.",
      icon: <FileText className="w-8 h-8" />,
      price: "$69",
      period: "month",
      features: [
        "Regulatory Monitoring",
        "Automated Reporting",
        "Risk Assessment",
        "Document Management",
        "Audit Trail",
        "Expert Support"
      ],
      color: "from-red-500 to-pink-500",
      glowColor: "red",
      link: "/zion-compliance-manager",
      popular: false,
      category: "Compliance",
      marketPrice: "$299/month",
      savings: "77%"
    },
    {
      name: "Zion Performance Monitor",
      description: "Real-time performance monitoring and optimization platform that tracks website speed, uptime, and user experience metrics.",
      icon: <TrendingUp className="w-8 h-8" />,
      price: "$19",
      period: "month",
      features: [
        "Real-time Monitoring",
        "Performance Analytics",
        "Uptime Tracking",
        "Speed Optimization",
        "Alert System",
        "Detailed Reports"
      ],
      color: "from-lime-500 to-green-500",
      glowColor: "lime",
      link: "/zion-performance-monitor",
      popular: false,
      category: "Monitoring",
      marketPrice: "$79/month",
      savings: "76%"
    }
  ];

  const categories = [
    { name: "All", count: microSaasServices.length },
    { name: "Analytics", count: microSaasServices.filter(s => s.category === "Analytics").length },
    { name: "Security", count: microSaasServices.filter(s => s.category === "Security").length },
    { name: "Storage", count: microSaasServices.filter(s => s.category === "Storage").length },
    { name: "Content", count: microSaasServices.filter(s => s.category === "Content").length },
    { name: "Integration", count: microSaasServices.filter(s => s.category === "Integration").length },
    { name: "Marketing", count: microSaasServices.filter(s => s.category === "Marketing").length },
    { name: "Productivity", count: microSaasServices.filter(s => s.category === "Productivity").length },
    { name: "Social Media", count: microSaasServices.filter(s => s.category === "Social Media").length },
    { name: "Automation", count: microSaasServices.filter(s => s.category === "Automation").length },
    { name: "Finance", count: microSaasServices.filter(s => s.category === "Finance").length },
    { name: "Inventory", count: microSaasServices.filter(s => s.category === "Inventory").length },
    { name: "Compliance", count: microSaasServices.filter(s => s.category === "Compliance").length },
    { name: "Monitoring", count: microSaasServices.filter(s => s.category === "Monitoring").length }
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
        <title>Micro SAAS Solutions - Zion Tech Group | Affordable Business Software</title>
        <meta
          name="description"
          content="Discover our comprehensive suite of micro SAAS solutions designed for small to medium businesses. AI-powered tools for analytics, security, content creation, project management, and more. Starting from $9/month."
        />
        <meta
          name="keywords"
          content="micro saas, business software, analytics, security, content creation, project management, email automation, social media management, workflow automation, inventory management, compliance, affordable software"
        />
        <link rel="canonical" href="https://ziontechgroup.com/micro-saas" />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 relative overflow-hidden">
        {/* Animated Background */}
        <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 via-purple-500/10 to-pink-500/10 animate-pulse"></div>
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_50%_50%,rgba(120,119,198,0.3),transparent_50%)]"></div>
        
        {/* Hero Section */}
        <section className="pt-20 pb-16 px-4 sm:px-6 lg:px-8 relative z-10">
          <ResponsiveContainer className="text-center">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-purple-500/20 to-cyan-500/20 border border-purple-500/30 mb-6">
              <Sparkles className="w-4 h-4 text-purple-400 mr-2" />
              <span className="text-purple-400 text-sm font-medium">50+ Micro SAAS Solutions Available</span>
            </div>
            
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 relative">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-cyan-400 to-pink-400">
                Micro SAAS
              </span>
              <br />
              <span className="text-white">Solutions</span>
              <div className="absolute -inset-1 bg-gradient-to-r from-purple-400 via-cyan-400 to-pink-400 rounded-lg blur opacity-30 animate-pulse"></div>
            </h1>
            
            <p className="text-xl text-gray-300 mb-8 max-w-4xl mx-auto leading-relaxed">
              Powerful, affordable business software solutions designed for small to medium businesses. 
              Get enterprise-grade features at micro SAAS prices with our AI-powered tools and platforms.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
              <FuturisticButton
                href="/contact"
                variant="primary"
                size="lg"
                icon={<Sparkles className="w-5 h-5" />}
              >
                Get Started Today
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
            <ResponsiveGrid cols={{ default: 2, md: 4 }} className="max-w-5xl mx-auto">
              {stats.map((stat, index) => (
                <div key={index} className="text-center group">
                  <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-r from-purple-500/20 to-cyan-500/20 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <div className="text-purple-400">{stat.icon}</div>
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
              {categories.map((category) => (
                <button
                  key={category.name}
                  className="px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 text-gray-300 hover:bg-purple-500/20 hover:text-purple-400 hover:border-purple-500/30 transition-all duration-300 text-sm font-medium"
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
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-cyan-400">
                  Our Micro SAAS Solutions
                </span>
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Choose from our comprehensive suite of business software solutions. 
                All plans include 24/7 support, regular updates, and 30-day money-back guarantee.
              </p>
            </div>
            
            <ResponsiveGrid cols={{ default: 1, md: 2, lg: 3 }}>
              {microSaasServices.map((service, index) => (
                <FuturisticCard
                  key={index}
                  className={`group cursor-pointer relative ${service.popular ? 'ring-2 ring-purple-400' : ''}`}
                  glowColor={service.glowColor}
                >
                  {service.popular && (
                    <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                      <div className="bg-gradient-to-r from-purple-500 to-cyan-500 text-white px-4 py-1 rounded-full text-sm font-semibold flex items-center">
                        <Star className="w-4 h-4 mr-1 fill-current" />
                        Most Popular
                      </div>
                    </div>
                  )}
                  
                  <Link
                    to={service.link}
                    className="block p-6"
                    aria-label={`Learn more about ${service.name}`}
                  >
                    <div className="text-center mb-6">
                      <div
                        className={`w-16 h-16 rounded-lg bg-gradient-to-r ${service.color} flex items-center justify-center mb-4 mx-auto group-hover:scale-110 transition-transform duration-300 shadow-lg`}
                      >
                        <div className="text-white">{service.icon}</div>
                      </div>
                      
                      <h3 className="text-xl font-semibold text-white mb-2 group-hover:text-purple-400 transition-colors">
                        {service.name}
                      </h3>
                      
                      <div className="flex items-center justify-center mb-2">
                        <span className="text-3xl font-bold text-white">${service.price}</span>
                        <span className="text-gray-400 ml-1">/{service.period}</span>
                      </div>
                      
                      <div className="flex items-center justify-center space-x-2 mb-4">
                        <span className="text-sm text-gray-400 line-through">${service.marketPrice}</span>
                        <span className="text-sm text-green-400 font-semibold">Save {service.savings}</span>
                      </div>
                      
                      <div className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-purple-500/20 text-purple-400 border border-purple-500/30">
                        {service.category}
                      </div>
                    </div>
                    
                    <p className="text-gray-300 text-center mb-6 leading-relaxed text-sm">
                      {service.description}
                    </p>
                    
                    <div className="space-y-2 mb-6">
                      {service.features.map((feature, idx) => (
                        <div key={idx} className="flex items-center text-sm text-gray-300">
                          <CheckCircle className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
                          <span>{feature}</span>
                        </div>
                      ))}
                    </div>
                    
                    <div className="text-center">
                      <div className="inline-flex items-center text-purple-400 hover:text-purple-300 font-medium group-hover:translate-x-1 transition-all duration-300">
                        Learn More
                        <ArrowRight className="w-4 h-4 ml-1" />
                      </div>
                    </div>
                  </Link>
                </FuturisticCard>
              ))}
            </ResponsiveGrid>
          </ResponsiveContainer>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 relative z-10">
          <ResponsiveContainer className="text-center">
            <div className="bg-gradient-to-r from-purple-500/10 to-cyan-500/10 rounded-2xl p-8 border border-white/10">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Ready to Transform Your Business?
              </h2>
              <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
                Join thousands of businesses already using our micro SAAS solutions to streamline operations, 
                increase productivity, and drive growth. Start your free trial today.
              </p>
              
              {/* Contact Information */}
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
                <FuturisticButton
                  href="/contact"
                  variant="primary"
                  size="lg"
                  icon={<Sparkles className="w-5 h-5" />}
                >
                  Start Free Trial
                </FuturisticButton>
                <FuturisticButton
                  href="/pricing"
                  variant="outline"
                  size="lg"
                  icon={<DollarSign className="w-5 h-5" />}
                >
                  View All Pricing
                </FuturisticButton>
              </div>
            </div>
          </ResponsiveContainer>
        </section>
      </div>
    </>
  );
};

export default MicroSaasPage;
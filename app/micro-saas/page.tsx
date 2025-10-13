import { ArrowRight, Zap, Shield, Cloud, BarChart3, Brain, Code, Database, Mail, Smartphone, Globe, Star, CheckCircle, TrendingUp, Users, Award } from "lucide-react";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";

export default function MicroSaasPage() {
  const microSaasServices = [
    {
      id: "zion-analytics-pro",
      name: "Zion Analytics Pro",
      description: "AI-powered business intelligence platform with real-time analytics, predictive modeling, and automated reporting. Transform your data into actionable insights.",
      icon: <BarChart3 className="w-8 h-8" />,
      price: "$29/month",
      originalPrice: "$49/month",
      color: "from-blue-500 to-cyan-500",
      features: [
        "Real-time Analytics Dashboard",
        "Predictive Modeling & Forecasting",
        "Custom Report Generation",
        "API Integration & Webhooks",
        "Multi-tenant Architecture",
        "Advanced Data Visualization",
        "Automated Alerts & Notifications",
        "White-label Solutions"
      ],
      benefits: [
        "40% increase in decision-making speed",
        "60% reduction in manual reporting time",
        "Real-time insights across all departments",
        "Scalable from startup to enterprise"
      ],
      link: "/zion-analytics-pro",
      category: "Analytics & BI",
      rating: 4.9,
      users: "10,000+",
      featured: true
    },
    {
      id: "zion-security-shield",
      name: "Zion Security Shield",
      description: "Advanced cybersecurity protection with AI-powered threat detection, automated incident response, and compliance monitoring for modern businesses.",
      icon: <Shield className="w-8 h-8" />,
      price: "$49/month",
      originalPrice: "$79/month",
      color: "from-red-500 to-orange-500",
      features: [
        "AI Threat Detection & Analysis",
        "Automated Incident Response",
        "Compliance Monitoring (GDPR, HIPAA, SOX)",
        "Real-time Security Alerts",
        "Vulnerability Assessment",
        "Penetration Testing Tools",
        "Security Audit Reports",
        "24/7 Security Monitoring"
      ],
      benefits: [
        "99.9% threat detection accuracy",
        "50% faster incident response time",
        "Automated compliance reporting",
        "Reduced security costs by 30%"
      ],
      link: "/zion-security-shield",
      category: "Cybersecurity",
      rating: 4.8,
      users: "5,000+",
      featured: true
    },
    {
      id: "zion-cloud-vault",
      name: "Zion Cloud Vault",
      description: "Secure cloud storage solution with enterprise-grade encryption, automated backup, and advanced file management capabilities.",
      icon: <Cloud className="w-8 h-8" />,
      price: "$9/month",
      originalPrice: "$15/month",
      color: "from-indigo-500 to-purple-500",
      features: [
        "End-to-end Encryption (AES-256)",
        "Automated Backup & Sync",
        "Version Control & File History",
        "Collaborative Workspace",
        "Advanced Search & Filtering",
        "Mobile & Desktop Apps",
        "API Integration",
        "99.99% Uptime SLA"
      ],
      benefits: [
        "Unlimited storage capacity",
        "Zero-knowledge encryption",
        "Cross-platform synchronization",
        "Advanced sharing controls"
      ],
      link: "/zion-cloud-vault",
      category: "Cloud Storage",
      rating: 4.7,
      users: "25,000+",
      featured: true
    },
    {
      id: "zion-content-studio",
      name: "Zion Content Studio",
      description: "AI-powered content creation platform for blogs, social media, marketing materials, and technical documentation with brand voice consistency.",
      icon: <Brain className="w-8 h-8" />,
      price: "$19/month",
      originalPrice: "$35/month",
      color: "from-purple-500 to-pink-500",
      features: [
        "AI Content Generation",
        "Multi-format Output (Blog, Social, Email)",
        "Brand Voice Training",
        "SEO Optimization",
        "Plagiarism Detection",
        "Content Calendar Management",
        "Team Collaboration Tools",
        "Performance Analytics"
      ],
      benefits: [
        "10x faster content creation",
        "Consistent brand voice across all content",
        "SEO-optimized content automatically",
        "Reduced content production costs by 70%"
      ],
      link: "/zion-content-studio",
      category: "Content Creation",
      rating: 4.6,
      users: "15,000+",
      featured: false
    },
    {
      id: "zion-data-sync",
      name: "Zion Data Sync",
      description: "Intelligent data synchronization platform that connects and syncs data across multiple systems, databases, and applications in real-time.",
      icon: <Database className="w-8 h-8" />,
      price: "$39/month",
      originalPrice: "$65/month",
      color: "from-teal-500 to-cyan-500",
      features: [
        "Real-time Data Synchronization",
        "Multi-source Data Integration",
        "Data Transformation & Mapping",
        "Conflict Resolution & Merge",
        "Data Quality Validation",
        "Custom Sync Rules & Triggers",
        "API & Webhook Integration",
        "Data Lineage Tracking"
      ],
      benefits: [
        "Eliminate data silos across systems",
        "Real-time data consistency",
        "Reduced manual data entry by 80%",
        "Improved data accuracy and reliability"
      ],
      link: "/zion-data-sync",
      category: "Data Management",
      rating: 4.8,
      users: "8,000+",
      featured: false
    },
    {
      id: "zion-lead-magnet",
      name: "Zion Lead Magnet",
      description: "AI-powered lead generation and nurturing platform with automated email campaigns, lead scoring, and conversion optimization.",
      icon: <Zap className="w-8 h-8" />,
      price: "$24/month",
      originalPrice: "$40/month",
      color: "from-yellow-500 to-orange-500",
      features: [
        "AI Lead Scoring & Qualification",
        "Automated Email Campaigns",
        "Landing Page Builder",
        "A/B Testing & Optimization",
        "CRM Integration",
        "Lead Nurturing Workflows",
        "Conversion Tracking",
        "Advanced Analytics"
      ],
      benefits: [
        "3x increase in lead conversion rates",
        "Automated lead nurturing workflows",
        "Personalized email campaigns",
        "Real-time lead scoring and prioritization"
      ],
      link: "/zion-lead-magnet",
      category: "Marketing Automation",
      rating: 4.7,
      users: "12,000+",
      featured: false
    },
    {
      id: "zion-project-master",
      name: "Zion Project Master",
      description: "AI-enhanced project management platform with intelligent task allocation, resource optimization, and predictive project analytics.",
      icon: <Code className="w-8 h-8" />,
      price: "$34/month",
      originalPrice: "$55/month",
      color: "from-green-500 to-emerald-500",
      features: [
        "AI Task Allocation & Scheduling",
        "Resource Optimization",
        "Predictive Project Analytics",
        "Risk Assessment & Mitigation",
        "Team Collaboration Tools",
        "Time Tracking & Reporting",
        "Budget Management",
        "Integration with 100+ tools"
      ],
      benefits: [
        "25% improvement in project delivery time",
        "AI-powered resource optimization",
        "Predictive risk identification",
        "Enhanced team productivity and collaboration"
      ],
      link: "/zion-project-master",
      category: "Project Management",
      rating: 4.8,
      users: "7,000+",
      featured: false
    },
    {
      id: "zion-email-automation",
      name: "Zion Email Automation",
      description: "Advanced email marketing automation platform with AI-powered personalization, behavioral triggers, and advanced analytics.",
      icon: <Mail className="w-8 h-8" />,
      price: "$29/month",
      originalPrice: "$45/month",
      color: "from-pink-500 to-rose-500",
      features: [
        "AI Email Personalization",
        "Behavioral Trigger Automation",
        "Advanced Segmentation",
        "A/B Testing & Optimization",
        "Email Template Builder",
        "Deliverability Optimization",
        "Advanced Analytics & Reporting",
        "Integration with 50+ platforms"
      ],
      benefits: [
        "40% increase in email open rates",
        "60% improvement in click-through rates",
        "Automated personalized campaigns",
        "Advanced deliverability optimization"
      ],
      link: "/zion-email-automation",
      category: "Email Marketing",
      rating: 4.6,
      users: "18,000+",
      featured: false
    },
    {
      id: "zion-social-scheduler",
      name: "Zion Social Scheduler",
      description: "AI-powered social media management platform with intelligent content scheduling, engagement optimization, and performance analytics.",
      icon: <TrendingUp className="w-8 h-8" />,
      price: "$22/month",
      originalPrice: "$38/month",
      color: "from-violet-500 to-purple-500",
      features: [
        "AI Content Scheduling",
        "Multi-platform Management",
        "Engagement Optimization",
        "Hashtag Research & Suggestions",
        "Content Calendar Management",
        "Performance Analytics",
        "Team Collaboration",
        "Brand Monitoring"
      ],
      benefits: [
        "50% increase in social media engagement",
        "Optimal posting time recommendations",
        "Automated content optimization",
        "Comprehensive performance insights"
      ],
      link: "/zion-social-scheduler",
      category: "Social Media",
      rating: 4.5,
      users: "20,000+",
      featured: false
    },
    {
      id: "zion-workflow-automation",
      name: "Zion Workflow Automation",
      description: "No-code workflow automation platform that connects apps and automates business processes with AI-powered optimization.",
      icon: <Zap className="w-8 h-8" />,
      price: "$44/month",
      originalPrice: "$70/month",
      color: "from-amber-500 to-yellow-500",
      features: [
        "No-code Workflow Builder",
        "AI Process Optimization",
        "500+ App Integrations",
        "Custom Logic & Conditions",
        "Real-time Monitoring",
        "Error Handling & Recovery",
        "Team Collaboration",
        "Advanced Analytics"
      ],
      benefits: [
        "80% reduction in manual tasks",
        "AI-optimized workflow performance",
        "Easy no-code automation setup",
        "Comprehensive integration ecosystem"
      ],
      link: "/zion-workflow-automation",
      category: "Automation",
      rating: 4.7,
      users: "9,000+",
      featured: false
    },
    {
      id: "zion-invoice-genius",
      name: "Zion Invoice Genius",
      description: "AI-powered invoicing and payment management platform with automated invoice generation, payment tracking, and financial analytics.",
      icon: <Award className="w-8 h-8" />,
      price: "$19/month",
      originalPrice: "$32/month",
      color: "from-emerald-500 to-green-500",
      features: [
        "AI Invoice Generation",
        "Automated Payment Tracking",
        "Multi-currency Support",
        "Payment Reminders",
        "Financial Analytics",
        "Tax Calculation",
        "Client Portal",
        "Integration with Accounting Software"
      ],
      benefits: [
        "90% reduction in invoice processing time",
        "Automated payment follow-ups",
        "Real-time financial insights",
        "Streamlined client payment experience"
      ],
      link: "/zion-invoice-genius",
      category: "Finance & Billing",
      rating: 4.8,
      users: "6,000+",
      featured: false
    },
    {
      id: "zion-inventory-smart",
      name: "Zion Inventory Smart",
      description: "AI-powered inventory management system with demand forecasting, automated reordering, and supply chain optimization.",
      icon: <Database className="w-8 h-8" />,
      price: "$39/month",
      originalPrice: "$60/month",
      color: "from-cyan-500 to-blue-500",
      features: [
        "AI Demand Forecasting",
        "Automated Reordering",
        "Multi-location Inventory",
        "Supplier Management",
        "Cost Optimization",
        "Real-time Tracking",
        "Integration with POS/ERP",
        "Advanced Reporting"
      ],
      benefits: [
        "30% reduction in inventory costs",
        "95% accuracy in demand forecasting",
        "Automated supply chain optimization",
        "Real-time inventory visibility"
      ],
      link: "/zion-inventory-smart",
      category: "Inventory Management",
      rating: 4.6,
      users: "4,000+",
      featured: false
    }
  ];

  const categories = [
    "All",
    "Analytics & BI",
    "Cybersecurity",
    "Cloud Storage",
    "Content Creation",
    "Data Management",
    "Marketing Automation",
    "Project Management",
    "Email Marketing",
    "Social Media",
    "Automation",
    "Finance & Billing",
    "Inventory Management"
  ];

  const stats = [
    { number: "150,000+", label: "Active Users", icon: <Users className="w-6 h-6" /> },
    { number: "99.9%", label: "Uptime SLA", icon: <Award className="w-6 h-6" /> },
    { number: "50+", label: "Micro SAAS Solutions", icon: <Zap className="w-6 h-6" /> },
    { number: "24/7", label: "Support Available", icon: <Shield className="w-6 h-6" /> }
  ];

  return (
    <>
      <Helmet>
        <title>Micro SAAS Solutions - Zion Tech Group | Ready-to-Use Software</title>
        <meta
          name="description"
          content="Comprehensive micro SAAS solutions including analytics, security, cloud storage, content creation, and automation tools. Ready-to-deploy software for immediate business impact."
        />
        <meta
          name="keywords"
          content="micro SAAS, software solutions, business tools, analytics, security, cloud storage, content creation, automation, project management, email marketing, social media"
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
              <Zap className="w-4 h-4 text-purple-400 mr-2" />
              <span className="text-purple-400 text-sm font-medium">50+ Micro SAAS Solutions</span>
            </div>
            
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
              Micro
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-cyan-400 to-pink-400 animate-pulse">
                {" "}SAAS
              </span>
              {" "}Solutions
            </h1>
            
            <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto leading-relaxed">
              Ready-to-use software solutions that transform your business operations immediately. 
              From AI-powered analytics to automated workflows, deploy powerful tools in minutes, not months.
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
                <Zap className="w-5 h-5 ml-2 group-hover:rotate-12 transition-transform" />
              </Link>
            </div>
            
            {/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-5xl mx-auto">
              {stats.map((stat, index) => (
                <div key={index} className="text-center group">
                  <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-r from-purple-500/20 to-cyan-500/20 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    {stat.icon}
                  </div>
                  <div className="text-2xl md:text-3xl font-bold text-white mb-2">{stat.number}</div>
                  <div className="text-gray-300 text-sm">{stat.label}</div>
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
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-cyan-400">
                  Featured Micro SAAS Solutions
                </span>
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Deploy powerful business tools in minutes. Each solution is designed for immediate impact with enterprise-grade security and reliability.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {microSaasServices.map((service, index) => (
                <div
                  key={service.id}
                  className="group bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-purple-500/10 relative overflow-hidden"
                >
                  {/* Featured Badge */}
                  {service.featured && (
                    <div className="absolute top-4 right-4">
                      <div className="flex items-center px-2 py-1 rounded-full bg-gradient-to-r from-yellow-500/20 to-orange-500/20 border border-yellow-500/30">
                        <Star className="w-3 h-3 text-yellow-400 fill-current mr-1" />
                        <span className="text-xs text-yellow-400 font-medium">Featured</span>
                      </div>
                    </div>
                  )}
                  
                  {/* Animated background effect */}
                  <div className="absolute inset-0 bg-gradient-to-r from-purple-500/5 to-cyan-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  
                  <div className="relative z-10">
                    <div className="flex items-center justify-between mb-4">
                      <div
                        className={`w-16 h-16 rounded-lg bg-gradient-to-r ${service.color} flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-lg`}
                      >
                        {service.icon}
                      </div>
                      <div className="text-right">
                        <div className="text-2xl font-bold text-white">{service.price}</div>
                        <div className="text-sm text-gray-400 line-through">{service.originalPrice}</div>
                      </div>
                    </div>
                    
                    <h3 className="text-xl font-semibold text-white mb-2 group-hover:text-purple-300 transition-colors">
                      {service.name}
                    </h3>
                    
                    <div className="flex items-center mb-3">
                      <div className="flex items-center">
                        {[...Array(5)].map((_, i) => (
                          <Star key={i} className={`w-4 h-4 ${i < Math.floor(service.rating) ? 'text-yellow-400 fill-current' : 'text-gray-600'}`} />
                        ))}
                      </div>
                      <span className="text-sm text-gray-300 ml-2">{service.rating} ({service.users} users)</span>
                    </div>
                    
                    <p className="text-gray-300 text-sm mb-4 leading-relaxed">
                      {service.description}
                    </p>
                    
                    <div className="mb-4">
                      <span className="inline-block px-3 py-1 rounded-full text-xs font-medium bg-gradient-to-r from-purple-500/20 to-cyan-500/20 text-purple-300 border border-purple-500/30">
                        {service.category}
                      </span>
                    </div>
                    
                    <div className="space-y-2 mb-6">
                      <h4 className="text-sm font-semibold text-white">Key Features:</h4>
                      <ul className="space-y-1">
                        {service.features.slice(0, 4).map((feature, idx) => (
                          <li key={idx} className="flex items-center text-xs text-gray-300">
                            <CheckCircle className="w-3 h-3 text-green-400 mr-2 flex-shrink-0" />
                            {feature}
                          </li>
                        ))}
                        {service.features.length > 4 && (
                          <li className="text-xs text-purple-300 font-medium">
                            +{service.features.length - 4} more features
                          </li>
                        )}
                      </ul>
                    </div>
                    
                    <div className="space-y-2 mb-6">
                      <h4 className="text-sm font-semibold text-white">Benefits:</h4>
                      <ul className="space-y-1">
                        {service.benefits.slice(0, 2).map((benefit, idx) => (
                          <li key={idx} className="flex items-center text-xs text-gray-300">
                            <TrendingUp className="w-3 h-3 text-cyan-400 mr-2 flex-shrink-0" />
                            {benefit}
                          </li>
                        ))}
                      </ul>
                    </div>
                    
                    <div className="flex gap-2">
                      <Link
                        to={service.link}
                        className="flex-1 bg-gradient-to-r from-purple-500 to-cyan-600 text-white px-4 py-2 rounded-lg text-sm font-semibold hover:from-purple-600 hover:to-cyan-700 transition-all duration-300 text-center group"
                      >
                        Learn More
                        <ArrowRight className="w-4 h-4 ml-1 inline group-hover:translate-x-1 transition-transform" />
                      </Link>
                      <Link
                        to="/contact"
                        className="px-4 py-2 border border-purple-400 text-purple-400 rounded-lg text-sm font-semibold hover:bg-purple-400 hover:text-slate-900 transition-all duration-300"
                      >
                        Start Trial
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-purple-900/30 to-cyan-900/30 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
              Ready to Transform Your Business?
            </h2>
            <p className="text-xl text-gray-300 mb-8 leading-relaxed">
              Join thousands of businesses already using our micro SAAS solutions to drive growth and innovation. 
              Start your free trial today and experience the power of ready-to-deploy software.
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
              <Link
                to="/contact"
                className="bg-gradient-to-r from-purple-500 to-cyan-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-purple-600 hover:to-cyan-700 transition-all duration-300 flex items-center justify-center group shadow-lg hover:shadow-purple-500/25 hover:scale-105"
              >
                Start Your Free Trial
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                to="/pricing"
                className="border border-purple-400 text-purple-400 px-8 py-4 rounded-lg font-semibold hover:bg-purple-400 hover:text-slate-900 transition-all duration-300 group hover:scale-105"
              >
                View All Pricing
                <Zap className="w-5 h-5 ml-2 group-hover:rotate-12 transition-transform" />
              </Link>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
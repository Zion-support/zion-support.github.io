import { ArrowRight, BarChart3, Shield, Cloud, Brain, Zap, Database, Code, Target, Users, Mail, FileText, TrendingUp, Smartphone, Globe, CheckCircle, Star, ExternalLink } from "lucide-react";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";

export default function MicroSaasServices() {
  const microSaasServices = [
    {
      title: "Zion Analytics Pro",
      description: "AI-powered business intelligence platform with real-time analytics, predictive insights, and automated reporting. Transform your data into actionable business strategies.",
      icon: <BarChart3 className="w-8 h-8" />,
      path: "/zion-analytics-pro",
      color: "from-blue-500 to-cyan-500",
      price: "From $29/month",
      features: ["Real-time Dashboards", "Predictive Analytics", "Custom Reports", "API Integration", "Mobile App"],
      benefits: ["40% faster decision making", "ROI tracking", "Multi-source data integration"],
      marketPrice: "$49-199/month",
      category: "Analytics & BI"
    },
    {
      title: "Zion Security Shield",
      description: "Advanced cybersecurity protection with AI threat detection, automated incident response, and compliance monitoring. Enterprise-grade security for small to medium businesses.",
      icon: <Shield className="w-8 h-8" />,
      path: "/zion-security-shield",
      color: "from-red-500 to-orange-500",
      price: "From $49/month",
      features: ["Threat Detection", "Automated Response", "Compliance Reports", "24/7 Monitoring", "Vulnerability Scanning"],
      benefits: ["99.9% threat detection rate", "Reduced security incidents by 85%", "SOC2 compliance ready"],
      marketPrice: "$99-299/month",
      category: "Cybersecurity"
    },
    {
      title: "Zion Cloud Vault",
      description: "Secure cloud storage solution with end-to-end encryption, automated backups, and intelligent file organization. GDPR and HIPAA compliant storage.",
      icon: <Cloud className="w-8 h-8" />,
      path: "/zion-cloud-vault",
      color: "from-indigo-500 to-purple-500",
      price: "From $9/month",
      features: ["End-to-End Encryption", "Automated Backups", "File Sharing", "Version Control", "Mobile Sync"],
      benefits: ["99.99% uptime guarantee", "Unlimited file versions", "Advanced search capabilities"],
      marketPrice: "$15-50/month",
      category: "Cloud Storage"
    },
    {
      title: "Zion Content Studio",
      description: "AI-powered content creation platform with automated writing, SEO optimization, and multi-format publishing. Create engaging content at scale.",
      icon: <Brain className="w-8 h-8" />,
      path: "/zion-content-studio",
      color: "from-purple-500 to-pink-500",
      price: "From $19/month",
      features: ["AI Writing Assistant", "SEO Optimization", "Multi-format Output", "Brand Voice Training", "Plagiarism Detection"],
      benefits: ["10x faster content creation", "Improved SEO rankings", "Consistent brand voice"],
      marketPrice: "$29-99/month",
      category: "Content Creation"
    },
    {
      title: "Zion Data Sync",
      description: "Intelligent data synchronization platform that connects all your business applications. Real-time data flow with conflict resolution and data validation.",
      icon: <Database className="w-8 h-8" />,
      path: "/zion-data-sync",
      color: "from-green-500 to-emerald-500",
      price: "From $39/month",
      features: ["Real-time Sync", "Conflict Resolution", "Data Validation", "Custom Mappings", "Error Handling"],
      benefits: ["Eliminate data silos", "Reduce manual data entry by 90%", "Ensure data consistency"],
      marketPrice: "$59-199/month",
      category: "Data Integration"
    },
    {
      title: "Zion Lead Magnet",
      description: "Advanced lead generation and nurturing platform with AI-powered lead scoring, automated follow-ups, and conversion optimization.",
      icon: <Target className="w-8 h-8" />,
      path: "/zion-lead-magnet",
      color: "from-yellow-500 to-orange-500",
      price: "From $24/month",
      features: ["Lead Scoring", "Automated Follow-ups", "A/B Testing", "CRM Integration", "Analytics Dashboard"],
      benefits: ["3x higher conversion rates", "Automated lead nurturing", "Detailed lead insights"],
      marketPrice: "$39-149/month",
      category: "Marketing Automation"
    },
    {
      title: "Zion Project Master",
      description: "AI-enhanced project management platform with intelligent resource allocation, risk prediction, and automated reporting. Streamline your project workflows.",
      icon: <Code className="w-8 h-8" />,
      path: "/zion-project-master",
      color: "from-teal-500 to-cyan-500",
      price: "From $34/month",
      features: ["AI Resource Planning", "Risk Prediction", "Automated Reports", "Team Collaboration", "Time Tracking"],
      benefits: ["30% faster project delivery", "Reduced project risks", "Improved team productivity"],
      marketPrice: "$49-199/month",
      category: "Project Management"
    },
    {
      title: "Zion Email Automation",
      description: "Intelligent email marketing platform with AI-powered personalization, behavioral triggers, and advanced analytics. Maximize your email ROI.",
      icon: <Mail className="w-8 h-8" />,
      path: "/zion-email-automation",
      color: "from-pink-500 to-rose-500",
      price: "From $29/month",
      features: ["AI Personalization", "Behavioral Triggers", "A/B Testing", "Advanced Analytics", "Template Library"],
      benefits: ["2x higher open rates", "Automated personalization", "Detailed performance insights"],
      marketPrice: "$39-149/month",
      category: "Email Marketing"
    },
    {
      title: "Zion Social Scheduler",
      description: "AI-powered social media management platform with content optimization, optimal posting times, and engagement analytics across all platforms.",
      icon: <Globe className="w-8 h-8" />,
      path: "/zion-social-scheduler",
      color: "from-violet-500 to-purple-500",
      price: "From $19/month",
      features: ["Multi-platform Posting", "Optimal Timing", "Content Optimization", "Engagement Analytics", "Hashtag Research"],
      benefits: ["50% increase in engagement", "Automated posting", "Cross-platform analytics"],
      marketPrice: "$29-99/month",
      category: "Social Media"
    },
    {
      title: "Zion Workflow Automation",
      description: "No-code workflow automation platform that connects your apps and automates repetitive tasks. Increase productivity with intelligent automation.",
      icon: <Zap className="w-8 h-8" />,
      path: "/zion-workflow-automation",
      color: "from-amber-500 to-yellow-500",
      price: "From $39/month",
      features: ["No-code Builder", "App Integrations", "Conditional Logic", "Error Handling", "Analytics"],
      benefits: ["Save 20+ hours per week", "Eliminate manual tasks", "Reduce human errors"],
      marketPrice: "$59-199/month",
      category: "Automation"
    },
    {
      title: "Zion Invoice Genius",
      description: "AI-powered invoicing and payment platform with automated invoice generation, payment tracking, and financial analytics. Streamline your billing process.",
      icon: <FileText className="w-8 h-8" />,
      path: "/zion-invoice-genius",
      color: "from-emerald-500 to-green-500",
      price: "From $24/month",
      features: ["Auto Invoice Generation", "Payment Tracking", "Financial Analytics", "Tax Calculations", "Client Portal"],
      benefits: ["50% faster invoicing", "Improved cash flow", "Automated payment reminders"],
      marketPrice: "$29-99/month",
      category: "Financial Management"
    },
    {
      title: "Zion Inventory Smart",
      description: "Intelligent inventory management system with demand forecasting, automated reordering, and real-time tracking. Optimize your supply chain.",
      icon: <TrendingUp className="w-8 h-8" />,
      path: "/zion-inventory-smart",
      color: "from-cyan-500 to-blue-500",
      price: "From $44/month",
      features: ["Demand Forecasting", "Auto Reordering", "Real-time Tracking", "Multi-location Support", "Analytics"],
      benefits: ["Reduce stockouts by 80%", "Optimize inventory levels", "Lower carrying costs"],
      marketPrice: "$59-249/month",
      category: "Inventory Management"
    },
    {
      title: "Zion Compliance Manager",
      description: "Automated compliance monitoring and reporting platform for GDPR, HIPAA, SOX, and other regulations. Stay compliant with minimal effort.",
      icon: <Shield className="w-8 h-8" />,
      path: "/zion-compliance-manager",
      color: "from-slate-500 to-gray-500",
      price: "From $59/month",
      features: ["Multi-regulation Support", "Automated Audits", "Risk Assessment", "Document Management", "Reporting"],
      benefits: ["Reduce compliance costs by 60%", "Automated audit trails", "Real-time compliance status"],
      marketPrice: "$99-399/month",
      category: "Compliance"
    },
    {
      title: "Zion Performance Monitor",
      description: "Real-time application and infrastructure monitoring with AI-powered alerting, performance optimization, and detailed analytics.",
      icon: <Smartphone className="w-8 h-8" />,
      path: "/zion-performance-monitor",
      color: "from-rose-500 to-pink-500",
      price: "From $34/month",
      features: ["Real-time Monitoring", "AI Alerting", "Performance Optimization", "Uptime Tracking", "Custom Dashboards"],
      benefits: ["99.9% uptime guarantee", "Proactive issue detection", "Performance insights"],
      marketPrice: "$49-199/month",
      category: "Monitoring"
    }
  ];

  const categories = [
    "All",
    "Analytics & BI",
    "Cybersecurity",
    "Cloud Storage",
    "Content Creation",
    "Data Integration",
    "Marketing Automation",
    "Project Management",
    "Email Marketing",
    "Social Media",
    "Automation",
    "Financial Management",
    "Inventory Management",
    "Compliance",
    "Monitoring"
  ];

  const stats = [
    { number: "50+", label: "Micro SAAS Solutions", icon: <Zap className="w-6 h-6" /> },
    { number: "10,000+", label: "Active Users", icon: <Users className="w-6 h-6" /> },
    { number: "99.9%", label: "Uptime SLA", icon: <Shield className="w-6 h-6" /> },
    { number: "24/7", label: "Support Available", icon: <CheckCircle className="w-6 h-6" /> }
  ];

  return (
    <>
      <Helmet>
        <title>Micro SAAS Solutions - Zion Tech Group | Ready-to-Use Software</title>
        <meta
          name="description"
          content="Comprehensive suite of micro SAAS solutions including analytics, security, content creation, automation, and more. Ready-to-deploy software for immediate business impact."
        />
        <meta
          name="keywords"
          content="micro SAAS, software as a service, business software, analytics, security, automation, content creation, project management, email marketing, social media management"
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
              <Star className="w-4 h-4 text-purple-400 mr-2" />
              <span className="text-purple-400 text-sm font-medium">50+ Ready-to-Use Solutions</span>
            </div>
            
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 relative">
              Micro SAAS
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-cyan-400 to-pink-400 animate-pulse">
                {" "}Solutions
              </span>
              <div className="absolute -inset-1 bg-gradient-to-r from-purple-400 via-cyan-400 to-pink-400 rounded-lg blur opacity-30 animate-pulse"></div>
            </h1>
            
            <p className="text-xl text-gray-300 mb-8 max-w-4xl mx-auto leading-relaxed">
              Ready-to-use software solutions that can transform your business operations immediately. 
              From AI-powered analytics to automated workflows, deploy enterprise-grade tools in minutes.
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
                <ExternalLink className="w-5 h-5 ml-2 group-hover:rotate-12 transition-transform" />
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
                  Complete Micro SAAS Suite
                </span>
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Choose from our comprehensive collection of micro SAAS solutions, each designed to solve specific business challenges with immediate impact.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {microSaasServices.map((service, index) => (
                <div
                  key={index}
                  className="group bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-purple-500/10 relative overflow-hidden"
                >
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
                        <div className="text-purple-400 font-bold text-lg">{service.price}</div>
                        <div className="text-xs text-gray-400">vs {service.marketPrice}</div>
                      </div>
                    </div>
                    
                    <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-purple-300 transition-colors">
                      {service.title}
                    </h3>
                    
                    <div className="mb-3">
                      <span className="inline-block px-2 py-1 rounded-full text-xs font-medium bg-purple-500/20 text-purple-300 border border-purple-500/30">
                        {service.category}
                      </span>
                    </div>
                    
                    <p className="text-gray-300 text-sm mb-4 leading-relaxed">
                      {service.description}
                    </p>
                    
                    {/* Features */}
                    <div className="mb-4">
                      <h4 className="text-sm font-semibold text-purple-300 mb-2">Key Features:</h4>
                      <div className="flex flex-wrap gap-1">
                        {service.features.slice(0, 3).map((feature, idx) => (
                          <span
                            key={idx}
                            className="text-xs bg-purple-500/20 text-purple-300 px-2 py-1 rounded-full border border-purple-500/30"
                          >
                            {feature}
                          </span>
                        ))}
                        {service.features.length > 3 && (
                          <span className="text-xs text-gray-400">+{service.features.length - 3} more</span>
                        )}
                      </div>
                    </div>
                    
                    {/* Benefits */}
                    <div className="mb-4">
                      <h4 className="text-sm font-semibold text-cyan-300 mb-2">Benefits:</h4>
                      <ul className="text-xs text-gray-300 space-y-1">
                        {service.benefits.map((benefit, idx) => (
                          <li key={idx} className="flex items-center">
                            <CheckCircle className="w-3 h-3 text-green-400 mr-2 flex-shrink-0" />
                            {benefit}
                          </li>
                        ))}
                      </ul>
                    </div>
                    
                    <div className="mt-4 text-center">
                      <Link
                        to={service.path}
                        className="inline-flex items-center text-purple-400 hover:text-purple-300 font-medium group-hover:translate-x-1 transition-all duration-300"
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

        {/* CTA Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Ready to Transform Your Business?
              </h2>
              <p className="text-xl text-gray-300 mb-8">
                Start with any micro SAAS solution and see immediate results. 
                All solutions come with 14-day free trials and 24/7 support.
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
                  Start Free Trial
                  <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                </Link>
                <Link
                  to="/pricing"
                  className="border border-purple-400 text-purple-400 px-8 py-4 rounded-lg font-semibold hover:bg-purple-400 hover:text-slate-900 transition-all duration-300 hover:scale-105"
                >
                  View Pricing
                </Link>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
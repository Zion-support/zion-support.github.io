import { ArrowRight, BarChart3, Shield, Cloud, Brain, Zap, Database, Code, Target, Users, Mail, FileText, Smartphone, Globe, Star, CheckCircle, Clock, DollarSign } from "lucide-react";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";

export default function MicroSaas() {
  const microSaasServices = [
    {
      title: "Zion Analytics Pro",
      description: "AI-powered business intelligence platform with real-time analytics, predictive modeling, and custom dashboards.",
      icon: <BarChart3 className="w-8 h-8" />,
      path: "/zion-analytics-pro",
      color: "from-blue-500 to-cyan-500",
      price: "$29",
      period: "month",
      features: [
        "Real-time Analytics Dashboard",
        "Predictive Modeling",
        "Custom Report Builder",
        "API Integration",
        "Data Visualization",
        "Mobile App Access",
        "Email Reports",
        "24/7 Support"
      ],
      popular: true,
      category: "Analytics"
    },
    {
      title: "Zion Security Shield",
      description: "Advanced cybersecurity protection with threat detection, automated response, and compliance reporting.",
      icon: <Shield className="w-8 h-8" />,
      path: "/zion-security-shield",
      color: "from-red-500 to-orange-500",
      price: "$49",
      period: "month",
      features: [
        "Threat Detection & Response",
        "Automated Security Scanning",
        "Compliance Reports",
        "24/7 Monitoring",
        "Firewall Management",
        "Vulnerability Assessment",
        "Incident Response",
        "Security Training"
      ],
      popular: false,
      category: "Security"
    },
    {
      title: "Zion Cloud Vault",
      description: "Secure cloud storage solution with encryption, backup, and file sharing capabilities.",
      icon: <Cloud className="w-8 h-8" />,
      path: "/zion-cloud-vault",
      color: "from-indigo-500 to-purple-500",
      price: "$9",
      period: "month",
      features: [
        "1TB Secure Storage",
        "End-to-End Encryption",
        "File Versioning",
        "Team Collaboration",
        "Mobile Access",
        "Automated Backup",
        "File Sharing",
        "Access Control"
      ],
      popular: false,
      category: "Storage"
    },
    {
      title: "Zion Content Studio",
      description: "AI-powered content creation platform for blogs, social media, and marketing materials.",
      icon: <Brain className="w-8 h-8" />,
      path: "/zion-content-studio",
      color: "from-purple-500 to-pink-500",
      price: "$19",
      period: "month",
      features: [
        "AI Content Generation",
        "SEO Optimization",
        "Brand Voice Training",
        "Multi-format Output",
        "Plagiarism Detection",
        "Content Calendar",
        "Social Media Integration",
        "Performance Analytics"
      ],
      popular: false,
      category: "Content"
    },
    {
      title: "Zion Data Sync",
      description: "Automated data synchronization and integration platform for seamless workflow management.",
      icon: <Database className="w-8 h-8" />,
      path: "/zion-data-sync",
      color: "from-green-500 to-emerald-500",
      price: "$39",
      period: "month",
      features: [
        "Real-time Data Sync",
        "API Integration",
        "Data Transformation",
        "Error Handling",
        "Monitoring Dashboard",
        "Custom Connectors",
        "Data Validation",
        "Backup & Recovery"
      ],
      popular: false,
      category: "Integration"
    },
    {
      title: "Zion Lead Magnet",
      description: "Lead generation and management platform with automated nurturing and scoring.",
      icon: <Target className="w-8 h-8" />,
      path: "/zion-lead-magnet",
      color: "from-yellow-500 to-orange-500",
      price: "$24",
      period: "month",
      features: [
        "Lead Capture Forms",
        "Automated Nurturing",
        "Lead Scoring",
        "CRM Integration",
        "Email Campaigns",
        "Analytics Dashboard",
        "A/B Testing",
        "Conversion Tracking"
      ],
      popular: false,
      category: "Marketing"
    },
    {
      title: "Zion Project Master",
      description: "AI-powered project management tool with intelligent planning and resource optimization.",
      icon: <Code className="w-8 h-8" />,
      path: "/zion-project-master",
      color: "from-teal-500 to-cyan-500",
      price: "$34",
      period: "month",
      features: [
        "AI Project Planning",
        "Resource Management",
        "Task Automation",
        "Team Collaboration",
        "Progress Tracking",
        "Risk Assessment",
        "Time Tracking",
        "Reporting Dashboard"
      ],
      popular: false,
      category: "Productivity"
    },
    {
      title: "Zion Email Automation",
      description: "Advanced email marketing automation with AI-driven personalization and analytics.",
      icon: <Mail className="w-8 h-8" />,
      path: "/zion-email-automation",
      color: "from-pink-500 to-rose-500",
      price: "$14",
      period: "month",
      features: [
        "Email Templates",
        "Automated Workflows",
        "Personalization Engine",
        "A/B Testing",
        "Analytics & Reporting",
        "List Management",
        "Compliance Tools",
        "Integration APIs"
      ],
      popular: false,
      category: "Marketing"
    },
    {
      title: "Zion Customer Insights",
      description: "AI-powered customer analytics platform for understanding behavior and improving satisfaction.",
      icon: <Users className="w-8 h-8" />,
      path: "/zion-customer-insights",
      color: "from-violet-500 to-purple-500",
      price: "$44",
      period: "month",
      features: [
        "Customer Segmentation",
        "Behavior Analysis",
        "Sentiment Analysis",
        "Churn Prediction",
        "Lifetime Value",
        "Personalization",
        "Feedback Analysis",
        "ROI Tracking"
      ],
      popular: false,
      category: "Analytics"
    },
    {
      title: "Zion Document AI",
      description: "Intelligent document processing and analysis platform with OCR and automated workflows.",
      icon: <FileText className="w-8 h-8" />,
      path: "/zion-document-ai",
      color: "from-amber-500 to-yellow-500",
      price: "$29",
      period: "month",
      features: [
        "OCR Technology",
        "Document Classification",
        "Data Extraction",
        "Workflow Automation",
        "Template Recognition",
        "Batch Processing",
        "API Integration",
        "Compliance Checks"
      ],
      popular: false,
      category: "Productivity"
    },
    {
      title: "Zion Mobile App Builder",
      description: "No-code mobile app development platform with AI assistance and pre-built templates.",
      icon: <Smartphone className="w-8 h-8" />,
      path: "/zion-mobile-app-builder",
      color: "from-cyan-500 to-blue-500",
      price: "$59",
      period: "month",
      features: [
        "Drag & Drop Builder",
        "AI Code Generation",
        "Pre-built Templates",
        "Cross-platform Support",
        "App Store Publishing",
        "Push Notifications",
        "Analytics Integration",
        "Custom Branding"
      ],
      popular: false,
      category: "Development"
    },
    {
      title: "Zion API Gateway",
      description: "Comprehensive API management platform with monitoring, security, and developer tools.",
      icon: <Globe className="w-8 h-8" />,
      path: "/zion-api-gateway",
      color: "from-emerald-500 to-green-500",
      price: "$39",
      period: "month",
      features: [
        "API Gateway",
        "Rate Limiting",
        "Authentication",
        "Monitoring & Analytics",
        "Developer Portal",
        "Documentation",
        "Testing Tools",
        "Load Balancing"
      ],
      popular: false,
      category: "Development"
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
    { name: "Development", count: microSaasServices.filter(s => s.category === "Development").length }
  ];

  const benefits = [
    {
      title: "No Setup Required",
      description: "Get started in minutes with our ready-to-use solutions",
      icon: <Zap className="w-6 h-6" />
    },
    {
      title: "24/7 Support",
      description: "Round-the-clock assistance from our expert team",
      icon: <Clock className="w-6 h-6" />
    },
    {
      title: "Scalable Pricing",
      description: "Flexible plans that grow with your business",
      icon: <DollarSign className="w-6 h-6" />
    },
    {
      title: "Enterprise Security",
      description: "Bank-level security and compliance standards",
      icon: <Shield className="w-6 h-6" />
    }
  ];

  return (
    <>
      <Helmet>
        <title>Micro SAAS Solutions - Zion Tech Group | Ready-to-Use Software</title>
        <meta
          name="description"
          content="Comprehensive micro SAAS solutions including analytics, security, content creation, project management, and more. Ready-to-use software with competitive pricing starting from $9/month."
        />
        <meta
          name="keywords"
          content="micro SAAS, software as a service, business tools, analytics, security, content creation, project management, email automation, lead generation, document processing"
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
              <span className="text-purple-400 text-sm font-medium">12+ Micro SAAS Solutions Available</span>
            </div>
            
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
              Micro SAAS
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-cyan-400 to-pink-400 animate-pulse">
                {" "}Solutions
              </span>
            </h1>
            
            <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto leading-relaxed">
              Ready-to-use software solutions that can transform your business operations immediately. 
              No setup required, no long-term contracts, just powerful tools that work.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
              <Link
                to="/contact"
                className="bg-gradient-to-r from-purple-500 to-cyan-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-purple-600 hover:to-cyan-700 transition-all duration-300 flex items-center justify-center group shadow-lg hover:shadow-purple-500/25 hover:scale-105"
              >
                Get Started Today
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                to="/demo"
                className="border border-purple-400 text-purple-400 px-8 py-4 rounded-lg font-semibold hover:bg-purple-400 hover:text-slate-900 transition-all duration-300 group hover:scale-105"
              >
                Watch Demo
                <Star className="w-5 h-5 ml-2 group-hover:rotate-12 transition-transform" />
              </Link>
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Why Choose Our Micro SAAS Solutions?
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Built for modern businesses that need powerful tools without the complexity.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {benefits.map((benefit, index) => (
                <div
                  key={index}
                  className="text-center group bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105"
                >
                  <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-r from-purple-500/20 to-cyan-500/20 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    {benefit.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-purple-400 transition-colors">
                    {benefit.title}
                  </h3>
                  <p className="text-gray-300 leading-relaxed">
                    {benefit.description}
                  </p>
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
                Our Micro SAAS Solutions
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Choose from our comprehensive suite of ready-to-use software solutions.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {microSaasServices.map((service, index) => (
                <div
                  key={index}
                  className={`group bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-purple-500/10 relative overflow-hidden ${
                    service.popular ? 'ring-2 ring-purple-400' : ''
                  }`}
                >
                  {service.popular && (
                    <div className="absolute top-4 right-4">
                      <span className="bg-gradient-to-r from-purple-500 to-cyan-500 text-white text-xs font-bold px-3 py-1 rounded-full">
                        Most Popular
                      </span>
                    </div>
                  )}
                  
                  <div className="relative z-10">
                    <div
                      className={`w-16 h-16 rounded-lg bg-gradient-to-r ${service.color} flex items-center justify-center mb-4 mx-auto group-hover:scale-110 transition-transform duration-300 shadow-lg`}
                    >
                      {service.icon}
                    </div>
                    
                    <div className="text-center mb-4">
                      <h3 className="text-xl font-semibold text-white mb-2 group-hover:text-purple-300 transition-colors">
                        {service.title}
                      </h3>
                      <p className="text-gray-300 text-sm leading-relaxed">
                        {service.description}
                      </p>
                    </div>
                    
                    <div className="text-center mb-6">
                      <div className="flex items-center justify-center mb-2">
                        <span className="text-3xl font-bold text-white">{service.price}</span>
                        <span className="text-gray-300 ml-1">/{service.period}</span>
                      </div>
                      <span className="text-xs text-gray-400 bg-gray-700 px-2 py-1 rounded-full">
                        {service.category}
                      </span>
                    </div>
                    
                    <div className="space-y-2 mb-6">
                      {service.features.slice(0, 4).map((feature, idx) => (
                        <div key={idx} className="flex items-center text-sm text-gray-300">
                          <CheckCircle className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
                          <span>{feature}</span>
                        </div>
                      ))}
                      {service.features.length > 4 && (
                        <div className="text-xs text-gray-400 text-center">
                          +{service.features.length - 4} more features
                        </div>
                      )}
                    </div>
                    
                    <div className="text-center">
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
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-purple-900/30 to-cyan-900/30 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
              Ready to Transform Your Business?
            </h2>
            <p className="text-xl text-gray-300 mb-8 leading-relaxed">
              Join thousands of businesses already using our micro SAAS solutions to drive growth and efficiency. 
              Start your digital transformation journey today.
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
                Start Your Journey
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                to="/pricing"
                className="border border-purple-400 text-purple-400 px-8 py-4 rounded-lg font-semibold hover:bg-purple-400 hover:text-slate-900 transition-all duration-300 group hover:scale-105"
              >
                View All Pricing
                <Star className="w-5 h-5 ml-2 group-hover:rotate-12 transition-transform" />
              </Link>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
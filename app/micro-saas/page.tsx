import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { 
  ArrowRight, 
  Brain, 
  Shield, 
  BarChart3, 
  Cloud, 
  Code, 
  Database, 
  Users, 
  Zap,
  Sparkles,
  Target,
  TrendingUp,
  CheckCircle,
  Star,
  Award,
  Clock,
  Mail,
  Phone,
  Globe
} from 'lucide-react';

const MicroSaasPage = () => {
  const microSaasProducts = [
    {
      title: "Zion AI Analytics Pro",
      description: "Advanced AI-powered business intelligence platform with real-time dashboards, predictive analytics, and automated reporting.",
      icon: <BarChart3 className="w-8 h-8" />,
      color: "from-blue-500 to-cyan-500",
      price: "From $299/month",
      originalPrice: "$599/month",
      features: ["Real-time Analytics", "Predictive Modeling", "Custom Dashboards", "API Integration", "Mobile App", "White-label Options"],
      category: "Analytics",
      popular: true,
      link: "/zion-analytics-pro"
    },
    {
      title: "Zion Security Shield",
      description: "Comprehensive cybersecurity protection with AI-powered threat detection, automated response, and 24/7 monitoring.",
      icon: <Shield className="w-8 h-8" />,
      color: "from-red-500 to-orange-500",
      price: "From $499/month",
      originalPrice: "$999/month",
      features: ["Threat Detection", "Automated Response", "Compliance Reports", "24/7 Monitoring", "Incident Response", "Security Training"],
      category: "Security",
      popular: true,
      link: "/zion-security-shield"
    },
    {
      title: "Zion Cloud Vault",
      description: "Secure cloud storage solution with end-to-end encryption, unlimited scalability, and advanced backup features.",
      icon: <Cloud className="w-8 h-8" />,
      color: "from-indigo-500 to-purple-500",
      price: "From $99/month",
      originalPrice: "$199/month",
      features: ["End-to-end Encryption", "Unlimited Storage", "Auto Backup", "File Sharing", "Version Control", "Mobile Access"],
      category: "Cloud Storage",
      popular: true,
      link: "/zion-cloud-vault"
    },
    {
      title: "Zion AI CRM Pro",
      description: "AI-powered customer relationship management with intelligent lead scoring, automated follow-ups, and sales forecasting.",
      icon: <Users className="w-8 h-8" />,
      color: "from-green-500 to-emerald-500",
      price: "From $199/month",
      originalPrice: "$399/month",
      features: ["Lead Scoring", "Sales Forecasting", "Automated Follow-ups", "CRM Integration", "Pipeline Management", "Performance Analytics"],
      category: "CRM",
      popular: true,
      link: "/zion-ai-crm-pro"
    },
    {
      title: "Zion AI Marketing Automation Pro",
      description: "AI-powered marketing automation with predictive content generation, multi-channel orchestration, and advanced analytics.",
      icon: <Target className="w-8 h-8" />,
      color: "from-pink-500 to-rose-500",
      price: "From $149/month",
      originalPrice: "$299/month",
      features: ["Email Automation", "Social Media", "Lead Scoring", "A/B Testing", "Personalization", "Analytics Dashboard"],
      category: "Marketing",
      popular: true,
      link: "/zion-ai-marketing-automation-pro"
    },
    {
      title: "Zion AI Project Manager Pro",
      description: "AI-powered project management with intelligent task prioritization, resource allocation, and automated reporting.",
      icon: <Code className="w-8 h-8" />,
      color: "from-yellow-500 to-orange-500",
      price: "From $99/month",
      originalPrice: "$199/month",
      features: ["Task Automation", "Resource Planning", "Progress Tracking", "Team Collaboration", "Time Tracking", "Reporting"],
      category: "Project Management",
      popular: true,
      link: "/zion-ai-project-manager-pro"
    },
    {
      title: "Zion AI Content Studio",
      description: "AI-powered content creation platform with automated writing, SEO optimization, and multi-format output capabilities.",
      icon: <Brain className="w-8 h-8" />,
      color: "from-purple-500 to-violet-500",
      price: "From $79/month",
      originalPrice: "$159/month",
      features: ["Content Generation", "SEO Optimization", "Brand Voice Training", "Multi-format Output", "Plagiarism Detection", "Content Calendar"],
      category: "Content Creation",
      link: "/zion-content-studio"
    },
    {
      title: "Zion AI Financial Analytics Pro",
      description: "Advanced financial modeling and risk assessment with automated reporting, fraud detection, and investment analysis.",
      icon: <TrendingUp className="w-8 h-8" />,
      color: "from-amber-500 to-yellow-500",
      price: "From $349/month",
      originalPrice: "$699/month",
      features: ["Risk Assessment", "Fraud Detection", "Investment Analysis", "Compliance Reporting", "Portfolio Optimization", "Market Prediction"],
      category: "Financial Services",
      link: "/ai-financial-analytics-pro"
    },
    {
      title: "Zion AI Voice Assistant Pro",
      description: "Intelligent voice assistant with natural language processing, multi-language support, and enterprise integration.",
      icon: <Zap className="w-8 h-8" />,
      color: "from-cyan-500 to-blue-500",
      price: "From $129/month",
      originalPrice: "$259/month",
      features: ["Voice Recognition", "Natural Language Processing", "Multi-language Support", "Enterprise Integration", "Custom Commands", "Analytics"],
      category: "Voice AI",
      link: "/zion-ai-voice-assistant-pro"
    },
    {
      title: "Zion AI Code Reviewer Pro",
      description: "AI-powered code review and optimization with automated testing, security scanning, and performance analysis.",
      icon: <Code className="w-8 h-8" />,
      color: "from-slate-500 to-gray-500",
      price: "From $89/month",
      originalPrice: "$179/month",
      features: ["Code Review", "Bug Detection", "Security Scanning", "Performance Analysis", "Best Practices", "Documentation"],
      category: "Development Tools",
      link: "/zion-ai-code-reviewer"
    },
    {
      title: "Zion AI Data Cleaner Pro",
      description: "Intelligent data cleaning and preprocessing with automated error detection, data validation, and quality assurance.",
      icon: <Database className="w-8 h-8" />,
      color: "from-teal-500 to-cyan-500",
      price: "From $119/month",
      originalPrice: "$239/month",
      features: ["Data Cleaning", "Error Detection", "Data Validation", "Quality Assurance", "Automated Processing", "Data Visualization"],
      category: "Data Management",
      link: "/zion-ai-data-cleaner"
    },
    {
      title: "Zion AI Task Scheduler Pro",
      description: "Intelligent task scheduling and automation with AI-powered optimization, resource management, and deadline tracking.",
      icon: <Clock className="w-8 h-8" />,
      color: "from-emerald-500 to-green-500",
      price: "From $69/month",
      originalPrice: "$139/month",
      features: ["Smart Scheduling", "Resource Optimization", "Deadline Tracking", "Automated Reminders", "Team Coordination", "Progress Monitoring"],
      category: "Task Management",
      link: "/zion-ai-task-scheduler"
    }
  ];

  const benefits = [
    {
      title: "Ready to Deploy",
      description: "All our micro SAAS solutions are ready for immediate deployment with minimal setup time",
      icon: <Zap className="w-6 h-6" />,
      stat: "5 min setup"
    },
    {
      title: "Scalable Solutions",
      description: "Built to scale with your business growth and changing requirements",
      icon: <TrendingUp className="w-6 h-6" />,
      stat: "Unlimited scaling"
    },
    {
      title: "24/7 Support",
      description: "Round-the-clock support and maintenance for all our micro SAAS products",
      icon: <Shield className="w-6 h-6" />,
      stat: "99.9% uptime"
    }
  ];

  const stats = [
    { number: "60+", label: "Micro SAAS Solutions", icon: <Zap className="w-6 h-6" /> },
    { number: "10,000+", label: "Active Users", icon: <Users className="w-6 h-6" /> },
    { number: "99.9%", label: "Uptime SLA", icon: <Shield className="w-6 h-6" /> },
    { number: "24/7", label: "Support Available", icon: <Clock className="w-6 h-6" /> }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Helmet>
        <title>Micro SAAS Solutions - Zion Tech Group | Ready-to-Use Software Solutions</title>
        <meta name="description" content="Discover our comprehensive collection of micro SAAS solutions designed for immediate deployment. AI-powered tools for analytics, security, CRM, marketing, and more." />
        <meta name="keywords" content="micro SAAS, software solutions, AI tools, business automation, ready-to-deploy, analytics, CRM, marketing automation, project management" />
      </Helmet>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-cyan-500/20 to-purple-500/20 border border-cyan-500/30 mb-6">
            <Sparkles className="w-4 h-4 text-cyan-400 mr-2" />
            <span className="text-cyan-400 text-sm font-medium">Ready-to-Deploy Solutions</span>
          </div>
          
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400">
              Micro SAAS Solutions
            </span>
          </h1>
          
          <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
            Discover our comprehensive collection of micro SAAS solutions designed for immediate deployment. 
            From AI-powered analytics to intelligent automation tools, we provide ready-to-use software that transforms your business operations.
          </p>
        </div>

        {/* Stats Section */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-20">
          {stats.map((stat, index) => (
            <div key={index} className="text-center group">
              <div className="w-16 h-16 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                {stat.icon}
              </div>
              <div className="text-3xl font-bold text-cyan-400 mb-2">{stat.number}</div>
              <div className="text-gray-300 text-sm">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Benefits Section */}
        <div className="grid md:grid-cols-3 gap-8 mb-20">
          {benefits.map((benefit, index) => (
            <div key={index} className="text-center group">
              <div className="w-16 h-16 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                {benefit.icon}
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">{benefit.title}</h3>
              <p className="text-gray-300 mb-3">{benefit.description}</p>
              <div className="text-2xl font-bold text-cyan-400">{benefit.stat}</div>
            </div>
          ))}
        </div>

        {/* Micro SAAS Products Grid */}
        <div className="mb-20">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400">
                Our Micro SAAS Collection
              </span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Choose from our extensive collection of micro SAAS solutions, each designed to solve specific business challenges with AI-powered intelligence.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {microSaasProducts.map((product, index) => (
              <div
                key={index}
                className="group bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-cyan-500/10 relative overflow-hidden"
              >
                {product.popular && (
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
                    className={`w-16 h-16 rounded-lg bg-gradient-to-r ${product.color} flex items-center justify-center mb-4 mx-auto group-hover:scale-110 transition-transform duration-300 shadow-lg`}
                  >
                    {product.icon}
                  </div>
                  
                  <div className="text-center mb-4">
                    <span className="text-xs bg-cyan-500/20 text-cyan-300 px-2 py-1 rounded-full border border-cyan-500/30">
                      {product.category}
                    </span>
                  </div>
                  
                  <h3 className="text-xl font-semibold text-white mb-3 text-center group-hover:text-cyan-300 transition-colors">
                    {product.title}
                  </h3>
                  <p className="text-gray-300 text-center mb-4 leading-relaxed text-sm">
                    {product.description}
                  </p>
                  
                  {/* Pricing */}
                  <div className="text-center mb-4">
                    <div className="flex items-center justify-center space-x-2">
                      <span className="text-cyan-400 font-bold text-lg">{product.price}</span>
                      {product.originalPrice && (
                        <span className="text-gray-500 line-through text-sm">{product.originalPrice}</span>
                      )}
                    </div>
                  </div>
                  
                  {/* Features */}
                  <div className="space-y-2 mb-6">
                    {product.features.slice(0, 4).map((feature, idx) => (
                      <div key={idx} className="flex items-center text-sm text-gray-300">
                        <div className="w-1.5 h-1.5 bg-cyan-400 rounded-full mr-2 flex-shrink-0"></div>
                        <span>{feature}</span>
                      </div>
                    ))}
                    {product.features.length > 4 && (
                      <div className="text-xs text-cyan-400 text-center">
                        +{product.features.length - 4} more features
                      </div>
                    )}
                  </div>
                  
                  <div className="mt-4 text-center">
                    <Link
                      to={product.link}
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

        {/* CTA Section */}
        <div className="text-center">
          <div className="bg-gradient-to-r from-cyan-500/10 to-purple-500/10 rounded-xl p-8 border border-cyan-500/20">
            <h2 className="text-3xl font-bold text-white mb-4">
              Ready to Transform Your Business?
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Choose from our comprehensive collection of micro SAAS solutions and start transforming your business operations today. 
              All solutions are ready for immediate deployment with full support and maintenance.
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
                  <Globe className="w-6 h-6 text-white" />
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
                Get Started Today
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                to="/demo"
                className="border border-cyan-400 text-cyan-400 px-8 py-4 rounded-lg font-semibold hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300 group hover:scale-105"
              >
                Schedule Demo
                <Sparkles className="w-5 h-5 ml-2 group-hover:rotate-12 transition-transform" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MicroSaasPage;
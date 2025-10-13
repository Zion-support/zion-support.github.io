import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { 
  Zap, 
  BarChart3, 
  Shield, 
  Cloud, 
  Users, 
  Target, 
  Calendar,
  ArrowRight,
  Star,
  CheckCircle,
  Sparkles,
  Brain,
  Code,
  Database,
  Globe,
  Mail,
  Phone,
  MapPin
} from 'lucide-react';

const MicroSaasPage = () => {
  const microSaasProducts = [
    {
      name: "Zion Analytics Pro",
      description: "AI-powered business intelligence platform with real-time dashboards and predictive analytics",
      price: "From $299/month",
      icon: <BarChart3 className="w-8 h-8" />,
      link: "/zion-analytics-pro",
      features: ["Real-time Analytics", "Predictive Insights", "Custom Dashboards", "API Integration"],
      category: "Analytics",
      featured: true
    },
    {
      name: "Zion Security Shield",
      description: "Advanced cybersecurity protection with AI-powered threat detection and automated response",
      price: "From $499/month",
      icon: <Shield className="w-8 h-8" />,
      link: "/zion-security-shield",
      features: ["AI Threat Detection", "Automated Response", "24/7 Monitoring", "Compliance Reports"],
      category: "Security",
      featured: true
    },
    {
      name: "Zion Cloud Vault",
      description: "Secure cloud storage solution with end-to-end encryption and unlimited scalability",
      price: "From $99/month",
      icon: <Cloud className="w-8 h-8" />,
      link: "/zion-cloud-vault",
      features: ["End-to-End Encryption", "Unlimited Storage", "Cross-Platform Sync", "Backup Automation"],
      category: "Storage",
      featured: true
    },
    {
      name: "Zion AI CRM Pro",
      description: "AI-powered customer relationship management with intelligent lead scoring and automation",
      price: "From $199/month",
      icon: <Users className="w-8 h-8" />,
      link: "/zion-ai-crm-pro",
      features: ["AI Lead Scoring", "Automated Follow-ups", "Sales Forecasting", "Team Collaboration"],
      category: "CRM",
      featured: true
    },
    {
      name: "Zion AI Marketing Automation Pro",
      description: "AI-powered marketing automation with predictive content generation and multi-channel orchestration",
      price: "From $149/month",
      icon: <Target className="w-8 h-8" />,
      link: "/zion-ai-marketing-automation-pro",
      features: ["AI Content Generation", "Multi-Channel Campaigns", "A/B Testing", "ROI Tracking"],
      category: "Marketing",
      featured: true
    },
    {
      name: "Zion AI Project Manager Pro",
      description: "AI-powered project management with intelligent task prioritization and resource allocation",
      price: "From $99/month",
      icon: <Calendar className="w-8 h-8" />,
      link: "/zion-ai-project-manager-pro",
      features: ["AI Task Prioritization", "Resource Optimization", "Progress Tracking", "Team Collaboration"],
      category: "Project Management",
      featured: true
    },
    {
      name: "Zion AI Video Generator",
      description: "Create professional videos with AI-powered editing and automated content generation",
      price: "From $79/month",
      icon: <Brain className="w-8 h-8" />,
      link: "/zion-ai-video-generator",
      features: ["AI Video Editing", "Auto-Generated Content", "Multiple Formats", "Brand Templates"],
      category: "Content Creation"
    },
    {
      name: "Zion AI Invoice Generator",
      description: "Automated invoice generation with AI-powered pricing and payment tracking",
      price: "From $49/month",
      icon: <Code className="w-8 h-8" />,
      link: "/zion-ai-invoice-generator",
      features: ["Auto Invoice Generation", "Payment Tracking", "Tax Calculations", "Multi-Currency"],
      category: "Finance"
    },
    {
      name: "Zion AI Customer Insights",
      description: "Deep customer analytics with AI-powered insights and behavioral predictions",
      price: "From $129/month",
      icon: <Database className="w-8 h-8" />,
      link: "/zion-ai-customer-insights",
      features: ["Customer Segmentation", "Behavioral Analysis", "Churn Prediction", "Personalization"],
      category: "Analytics"
    },
    {
      name: "Zion AI Email Analyzer",
      description: "AI-powered email analysis for improved communication and response optimization",
      price: "From $69/month",
      icon: <Mail className="w-8 h-8" />,
      link: "/zion-ai-email-analyzer",
      features: ["Sentiment Analysis", "Response Optimization", "Email Templates", "Performance Metrics"],
      category: "Communication"
    },
    {
      name: "Zion Smart Inventory Optimizer",
      description: "AI-driven inventory management with predictive restocking and demand forecasting",
      price: "From $159/month",
      icon: <Globe className="w-8 h-8" />,
      link: "/zion-smart-inventory-optimizer",
      features: ["Demand Forecasting", "Auto Reordering", "Cost Optimization", "Multi-Location"],
      category: "Inventory"
    },
    {
      name: "Zion AI Customer Sentiment Tracker",
      description: "Real-time customer sentiment analysis across all touchpoints and channels",
      price: "From $89/month",
      icon: <Star className="w-8 h-8" />,
      link: "/zion-ai-customer-sentiment-tracker",
      features: ["Real-time Analysis", "Multi-Channel Monitoring", "Alert System", "Trend Reports"],
      category: "Analytics"
    }
  ];

  const categories = [...new Set(microSaasProducts.map(product => product.category))];
  const featuredProducts = microSaasProducts.filter(product => product.featured);

  const stats = [
    { number: "60+", label: "Micro SAAS Solutions", icon: <Zap className="w-6 h-6" /> },
    { number: "10,000+", label: "Active Users", icon: <Users className="w-6 h-6" /> },
    { number: "99.9%", label: "Uptime SLA", icon: <Shield className="w-6 h-6" /> },
    { number: "24/7", label: "Support Available", icon: <Phone className="w-6 h-6" /> }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Helmet>
        <title>Micro SAAS Solutions - Zion Tech Group</title>
        <meta name="description" content="Ready-to-use software solutions for immediate deployment. AI-powered tools for analytics, security, productivity, and business automation." />
        <meta name="keywords" content="micro saas, software solutions, AI tools, business automation, productivity software" />
      </Helmet>

      {/* Hero Section */}
      <section className="pt-20 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-cyan-500/20 to-purple-500/20 border border-cyan-500/30 mb-6">
            <Sparkles className="w-4 h-4 text-cyan-400 mr-2" />
            <span className="text-cyan-400 text-sm font-medium">60+ Ready-to-Use Solutions</span>
          </div>
          
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400">
              Micro SAAS Solutions
            </span>
          </h1>
          
          <p className="text-lg md:text-xl lg:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto leading-relaxed">
            Ready-to-use software solutions that can transform your business operations immediately. 
            From AI-powered analytics to automated workflows, deploy powerful tools in minutes.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
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
              Watch Demo
              <Sparkles className="w-5 h-5 ml-2 group-hover:rotate-12 transition-transform" />
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

      {/* Featured Products */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Featured Micro SAAS Solutions
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Our most popular ready-to-use solutions that can be deployed immediately.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredProducts.map((product, index) => (
              <div
                key={index}
                className="group bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-cyan-500/10 relative overflow-hidden"
              >
                <div className="absolute top-4 right-4">
                  <span className="bg-gradient-to-r from-cyan-500 to-purple-500 text-white px-2 py-1 rounded-full text-xs font-semibold">
                    Featured
                  </span>
                </div>
                
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 rounded-lg bg-gradient-to-r from-purple-500 to-cyan-500 flex items-center justify-center text-white mr-4 group-hover:scale-110 transition-transform">
                    {product.icon}
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-semibold text-white group-hover:text-cyan-400 transition-colors">
                      {product.name}
                    </h3>
                    <p className="text-cyan-400 font-medium">{product.price}</p>
                  </div>
                </div>
                
                <p className="text-gray-300 text-sm leading-relaxed mb-4">
                  {product.description}
                </p>
                
                <div className="mb-4">
                  <div className="text-xs text-gray-400 mb-2">Key Features:</div>
                  <div className="flex flex-wrap gap-1">
                    {product.features.slice(0, 2).map((feature, idx) => (
                      <span key={idx} className="text-xs bg-cyan-500/20 text-cyan-300 px-2 py-1 rounded">
                        {feature}
                      </span>
                    ))}
                    {product.features.length > 2 && (
                      <span className="text-xs text-gray-400">
                        +{product.features.length - 2} more
                      </span>
                    )}
                  </div>
                </div>
                
                <Link
                  to={product.link}
                  className="flex items-center text-cyan-400 text-sm font-medium group-hover:text-cyan-300 transition-colors"
                >
                  Learn More
                  <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* All Products by Category */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-slate-800/50 to-purple-800/50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              All Micro SAAS Solutions
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Browse our complete collection of ready-to-use software solutions organized by category.
            </p>
          </div>
          
          {categories.map((category, categoryIndex) => (
            <div key={categoryIndex} className="mb-12">
              <h3 className="text-2xl font-bold text-white mb-6 flex items-center">
                <Zap className="w-6 h-6 mr-3 text-cyan-400" />
                {category}
              </h3>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {microSaasProducts
                  .filter(product => product.category === category)
                  .map((product, index) => (
                    <Link
                      key={index}
                      to={product.link}
                      className="group bg-white/5 backdrop-blur-sm rounded-lg p-4 border border-white/10 hover:bg-white/10 transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-cyan-500/10"
                    >
                      <div className="flex items-center mb-3">
                        <div className="w-8 h-8 rounded-lg bg-gradient-to-r from-purple-500 to-cyan-500 flex items-center justify-center text-white mr-3 group-hover:scale-110 transition-transform">
                          {product.icon}
                        </div>
                        <div className="flex-1">
                          <h4 className="text-white font-semibold group-hover:text-cyan-400 transition-colors">
                            {product.name}
                          </h4>
                          <p className="text-cyan-400 text-sm">{product.price}</p>
                        </div>
                      </div>
                      <p className="text-gray-300 text-sm leading-relaxed">
                        {product.description}
                      </p>
                    </Link>
                  ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-cyan-900/30 to-purple-900/30">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
            Ready to Deploy Your First Solution?
          </h2>
          <p className="text-xl text-gray-300 mb-8 leading-relaxed">
            Choose from our extensive collection of micro SAAS solutions and start transforming your business today. 
            All solutions come with 24/7 support and can be deployed in minutes.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 flex items-center justify-center group shadow-lg hover:shadow-cyan-500/25 hover:scale-105"
            >
              Start Your Journey
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
      </section>
    </div>
  );
};

export default MicroSaasPage;
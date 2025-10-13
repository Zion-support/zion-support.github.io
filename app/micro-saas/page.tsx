import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { 
  ArrowRight, 
  Zap, 
  BarChart3, 
  Shield, 
  Cloud, 
  Users, 
  Target, 
  Calendar,
  Mail,
  Phone,
  Globe,
  CheckCircle,
  Star,
  Sparkles,
  TrendingUp,
  Database,
  Settings,
  Monitor,
  Code,
  FileText,
  Brain,
  Cpu,
  Network,
  HardDrive,
  Smartphone,
  Laptop,
  Headphones,
  Award,
  Clock
} from 'lucide-react';

const MicroSaasPage = () => {
  const microSaasProducts = [
    {
      title: "Zion Analytics Pro",
      description: "AI-powered business intelligence platform with real-time dashboards and predictive analytics",
      icon: <BarChart3 className="w-8 h-8" />,
      color: "from-blue-500 to-cyan-500",
      link: "/zion-analytics-pro",
      price: "From $299/month",
      originalPrice: "$599/month",
      features: ["Real-time Analytics", "Predictive Modeling", "Custom Dashboards", "API Integration", "Mobile App", "White-label Options"],
      category: "Analytics",
      popular: true
    },
    {
      title: "Zion Security Shield",
      description: "Advanced cybersecurity protection with AI-powered threat detection and automated response",
      icon: <Shield className="w-8 h-8" />,
      color: "from-red-500 to-orange-500",
      link: "/zion-security-shield",
      price: "From $499/month",
      originalPrice: "$999/month",
      features: ["Threat Detection", "Automated Response", "Compliance Reports", "24/7 Monitoring", "Incident Response", "Security Training"],
      category: "Security",
      popular: true
    },
    {
      title: "Zion Cloud Vault",
      description: "Secure cloud storage solution with end-to-end encryption and unlimited scalability",
      icon: <Cloud className="w-8 h-8" />,
      color: "from-indigo-500 to-purple-500",
      link: "/zion-cloud-vault",
      price: "From $99/month",
      originalPrice: "$199/month",
      features: ["End-to-end Encryption", "Unlimited Storage", "File Sharing", "Version Control", "Team Collaboration", "Mobile Access"],
      category: "Storage"
    },
    {
      title: "Zion AI CRM Pro",
      description: "AI-powered customer relationship management with intelligent lead scoring and automation",
      icon: <Users className="w-8 h-8" />,
      color: "from-green-500 to-emerald-500",
      link: "/zion-ai-crm-pro",
      price: "From $199/month",
      originalPrice: "$399/month",
      features: ["Lead Scoring", "Automated Follow-ups", "Pipeline Management", "Email Integration", "Analytics Dashboard", "Mobile App"],
      category: "CRM",
      popular: true
    },
    {
      title: "Zion AI Marketing Automation Pro",
      description: "AI-powered marketing automation with predictive content generation and multi-channel orchestration",
      icon: <Target className="w-8 h-8" />,
      color: "from-pink-500 to-rose-500",
      link: "/zion-ai-marketing-automation-pro",
      price: "From $149/month",
      originalPrice: "$299/month",
      features: ["Email Automation", "Social Media", "Lead Scoring", "A/B Testing", "Personalization", "Analytics Dashboard"],
      category: "Marketing"
    },
    {
      title: "Zion AI Project Manager Pro",
      description: "AI-powered project management with intelligent task prioritization and resource allocation",
      icon: <Calendar className="w-8 h-8" />,
      color: "from-purple-500 to-violet-500",
      link: "/zion-ai-project-manager-pro",
      price: "From $99/month",
      originalPrice: "$199/month",
      features: ["Task Automation", "Resource Planning", "Time Tracking", "Team Collaboration", "Progress Reports", "Mobile App"],
      category: "Project Management"
    },
    {
      title: "Zion AI Video Generator",
      description: "AI-powered video creation platform with automated editing, voice synthesis, and content generation",
      icon: <Monitor className="w-8 h-8" />,
      color: "from-cyan-500 to-blue-500",
      link: "/zion-ai-video-generator",
      price: "From $179/month",
      originalPrice: "$359/month",
      features: ["Auto Video Creation", "Voice Synthesis", "Template Library", "Brand Customization", "Social Media Export", "Analytics"],
      category: "Content Creation"
    },
    {
      title: "Zion AI Invoice Generator",
      description: "Intelligent invoice generation with automated billing, payment tracking, and financial reporting",
      icon: <FileText className="w-8 h-8" />,
      color: "from-emerald-500 to-green-500",
      link: "/zion-ai-invoice-generator",
      price: "From $79/month",
      originalPrice: "$159/month",
      features: ["Auto Invoice Generation", "Payment Tracking", "Tax Calculations", "Client Portal", "Financial Reports", "Integration"],
      category: "Finance"
    },
    {
      title: "Zion AI Customer Insights",
      description: "Advanced customer analytics with sentiment analysis, behavior tracking, and predictive insights",
      icon: <Brain className="w-8 h-8" />,
      color: "from-violet-500 to-purple-500",
      link: "/zion-ai-customer-insights",
      price: "From $129/month",
      originalPrice: "$259/month",
      features: ["Sentiment Analysis", "Behavior Tracking", "Predictive Insights", "Customer Segmentation", "Churn Prediction", "ROI Analysis"],
      category: "Analytics"
    },
    {
      title: "Zion AI Email Analyzer",
      description: "Intelligent email analysis with spam detection, sentiment analysis, and automated responses",
      icon: <Mail className="w-8 h-8" />,
      color: "from-orange-500 to-amber-500",
      link: "/zion-ai-email-analyzer",
      price: "From $89/month",
      originalPrice: "$179/month",
      features: ["Spam Detection", "Sentiment Analysis", "Auto Responses", "Email Classification", "Priority Scoring", "Integration"],
      category: "Communication"
    },
    {
      title: "Zion Smart Inventory Optimizer",
      description: "AI-powered inventory management with demand forecasting, automated reordering, and cost optimization",
      icon: <Database className="w-8 h-8" />,
      color: "from-teal-500 to-cyan-500",
      link: "/zion-smart-inventory-optimizer",
      price: "From $159/month",
      originalPrice: "$319/month",
      features: ["Demand Forecasting", "Auto Reordering", "Cost Optimization", "Supplier Management", "Analytics Dashboard", "Mobile App"],
      category: "Inventory"
    },
    {
      title: "Zion AI Customer Sentiment Tracker",
      description: "Real-time customer sentiment monitoring across all channels with automated alerts and insights",
      icon: <TrendingUp className="w-8 h-8" />,
      color: "from-rose-500 to-pink-500",
      link: "/zion-ai-customer-sentiment-tracker",
      price: "From $119/month",
      originalPrice: "$239/month",
      features: ["Real-time Monitoring", "Multi-channel Analysis", "Automated Alerts", "Sentiment Trends", "Competitor Analysis", "Reports"],
      category: "Analytics"
    }
  ];

  const categories = [
    { name: "Analytics", count: 3, icon: <BarChart3 className="w-5 h-5" /> },
    { name: "Security", count: 1, icon: <Shield className="w-5 h-5" /> },
    { name: "Storage", count: 1, icon: <Cloud className="w-5 h-5" /> },
    { name: "CRM", count: 1, icon: <Users className="w-5 h-5" /> },
    { name: "Marketing", count: 1, icon: <Target className="w-5 h-5" /> },
    { name: "Project Management", count: 1, icon: <Calendar className="w-5 h-5" /> },
    { name: "Content Creation", count: 1, icon: <Monitor className="w-5 h-5" /> },
    { name: "Finance", count: 1, icon: <FileText className="w-5 h-5" /> },
    { name: "Communication", count: 1, icon: <Mail className="w-5 h-5" /> },
    { name: "Inventory", count: 1, icon: <Database className="w-5 h-5" /> }
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
      description: "Built to grow with your business from startup to enterprise scale",
      icon: <TrendingUp className="w-6 h-6" />,
      stat: "Unlimited scale"
    },
    {
      title: "24/7 Support",
      description: "Round-the-clock support and maintenance for all our micro SAAS products",
      icon: <Clock className="w-6 h-6" />,
      stat: "99.9% uptime"
    }
  ];

  const stats = [
    { number: "50+", label: "Micro SAAS Solutions", icon: <Zap className="w-6 h-6" /> },
    { number: "10,000+", label: "Active Users", icon: <Users className="w-6 h-6" /> },
    { number: "99.9%", label: "Uptime SLA", icon: <Shield className="w-6 h-6" /> },
    { number: "24/7", label: "Support Available", icon: <Headphones className="w-6 h-6" /> }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Helmet>
        <title>Micro SAAS Solutions - Zion Tech Group | Ready-to-Use Software Solutions</title>
        <meta name="description" content="Discover our comprehensive collection of micro SAAS solutions including analytics, CRM, security, marketing automation, and more. Ready for immediate deployment." />
        <meta name="keywords" content="micro SAAS, software solutions, business automation, analytics, CRM, security, marketing automation, project management, ready-to-use software" />
      </Helmet>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-purple-500/20 to-cyan-500/20 border border-purple-500/30 mb-6">
            <Sparkles className="w-4 h-4 text-purple-400 mr-2" />
            <span className="text-purple-400 text-sm font-medium">Ready-to-Use Solutions</span>
          </div>
          
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-cyan-400 to-pink-400">
              Micro SAAS Solutions
            </span>
          </h1>
          
          <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
            Transform your business with our comprehensive collection of micro SAAS solutions. 
            From analytics to security, we provide ready-to-use software that can be deployed immediately.
          </p>
        </div>

        {/* Stats Section */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-20">
          {stats.map((stat, index) => (
            <div key={index} className="text-center group">
              <div className="w-16 h-16 bg-gradient-to-r from-purple-500/20 to-cyan-500/20 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                {stat.icon}
              </div>
              <div className="text-2xl font-bold text-white mb-2">{stat.number}</div>
              <div className="text-gray-300 text-sm">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Benefits Section */}
        <div className="grid md:grid-cols-3 gap-8 mb-20">
          {benefits.map((benefit, index) => (
            <div key={index} className="text-center group">
              <div className="w-16 h-16 bg-gradient-to-r from-purple-500/20 to-cyan-500/20 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                {benefit.icon}
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">{benefit.title}</h3>
              <p className="text-gray-300 mb-3">{benefit.description}</p>
              <div className="text-2xl font-bold text-purple-400">{benefit.stat}</div>
            </div>
          ))}
        </div>

        {/* Categories Filter */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-white mb-8 text-center">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-cyan-400">
              Browse by Category
            </span>
          </h2>
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((category, index) => (
              <div
                key={index}
                className="flex items-center px-4 py-2 bg-white/10 backdrop-blur-sm rounded-lg border border-white/20 hover:bg-white/20 transition-all duration-300 cursor-pointer"
              >
                {category.icon}
                <span className="text-white ml-2">{category.name}</span>
                <span className="text-gray-400 ml-2">({category.count})</span>
              </div>
            ))}
          </div>
        </div>

        {/* Micro SAAS Products Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {microSaasProducts.map((product, index) => (
            <Link
              key={index}
              to={product.link}
              className="group bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-purple-500/10 relative overflow-hidden"
            >
              {product.popular && (
                <div className="absolute top-4 right-4">
                  <span className="bg-gradient-to-r from-yellow-400 to-orange-500 text-black text-xs font-bold px-2 py-1 rounded-full">
                    POPULAR
                  </span>
                </div>
              )}
              
              <div className={`w-16 h-16 rounded-lg bg-gradient-to-r ${product.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                {product.icon}
              </div>
              
              <div className="text-center mb-4">
                <span className="text-xs bg-purple-500/20 text-purple-300 px-2 py-1 rounded-full border border-purple-500/30">
                  {product.category}
                </span>
              </div>
              
              <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-purple-300 transition-colors">
                {product.title}
              </h3>
              
              <p className="text-gray-300 mb-4 leading-relaxed text-sm">
                {product.description}
              </p>
              
              {/* Pricing */}
              <div className="text-center mb-4">
                <div className="flex items-center justify-center space-x-2">
                  <span className="text-purple-400 font-bold text-lg">{product.price}</span>
                  {product.originalPrice && (
                    <span className="text-gray-500 line-through text-sm">{product.originalPrice}</span>
                  )}
                </div>
              </div>
              
              {/* Features */}
              <div className="space-y-2 mb-6">
                {product.features.slice(0, 4).map((feature, idx) => (
                  <div key={idx} className="flex items-center text-sm text-gray-300">
                    <div className="w-1.5 h-1.5 bg-purple-400 rounded-full mr-2 flex-shrink-0"></div>
                    <span>{feature}</span>
                  </div>
                ))}
                {product.features.length > 4 && (
                  <div className="text-xs text-purple-400 text-center">
                    +{product.features.length - 4} more features
                  </div>
                )}
              </div>
              
              <div className="mt-4 text-center">
                <div className="flex items-center text-purple-400 hover:text-purple-300 font-medium group-hover:translate-x-1 transition-all duration-300 justify-center">
                  Learn More
                  <ArrowRight className="w-4 h-4 ml-1" />
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* CTA Section */}
        <div className="mt-20 text-center">
          <div className="bg-gradient-to-r from-purple-500/10 to-cyan-500/10 rounded-xl p-8 border border-purple-500/20">
            <h2 className="text-3xl font-bold text-white mb-4">
              Ready to Transform Your Business?
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Choose from our comprehensive collection of micro SAAS solutions and start transforming your business today. 
              All solutions are ready for immediate deployment with full support.
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
                  <Phone className="w-6 h-6 text-white" />
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
                Get Started Today
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                to="/demo"
                className="border border-purple-400 text-purple-400 px-8 py-4 rounded-lg font-semibold hover:bg-purple-400 hover:text-slate-900 transition-all duration-300 group hover:scale-105"
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
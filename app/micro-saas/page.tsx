import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { 
  Zap, 
  BarChart3, 
  Shield, 
  Cloud, 
  Users, 
  Code, 
  Database, 
  ArrowRight,
  Sparkles,
  Star,
  CheckCircle,
  TrendingUp
} from 'lucide-react';

const MicroSaasPage = () => {
  const microSaasProducts = [
    {
      name: "Zion Analytics Pro",
      description: "AI-powered business intelligence platform with real-time dashboards and predictive analytics. Transform raw data into actionable insights with 99.9% accuracy.",
      price: "From $299/month",
      originalPrice: "$599/month",
      icon: <BarChart3 className="w-8 h-8" />,
      color: "from-blue-500 to-cyan-500",
      link: "/zion-analytics-pro",
      features: ["Real-time Analytics", "Predictive Insights", "Custom Dashboards", "API Integration", "Mobile App", "White-label Options"],
      popular: true,
      category: "Business Intelligence",
      marketPrice: "$599/month",
      savings: "50% off"
    },
    {
      name: "Zion Security Shield",
      description: "Advanced cybersecurity protection with AI-powered threat detection and automated response. Protect your business 24/7 with enterprise-grade security.",
      price: "From $499/month",
      originalPrice: "$999/month",
      icon: <Shield className="w-8 h-8" />,
      color: "from-red-500 to-orange-500",
      link: "/zion-security-shield",
      features: ["Threat Detection", "Automated Response", "24/7 Monitoring", "Compliance Reports", "Penetration Testing", "Security Training"],
      popular: true,
      category: "Cybersecurity",
      marketPrice: "$999/month",
      savings: "50% off"
    },
    {
      name: "Zion Cloud Vault",
      description: "Secure cloud storage solution with end-to-end encryption and unlimited scalability. Enterprise-grade file management with advanced security features.",
      price: "From $99/month",
      originalPrice: "$199/month",
      icon: <Cloud className="w-8 h-8" />,
      color: "from-green-500 to-emerald-500",
      link: "/zion-cloud-vault",
      features: ["End-to-end Encryption", "Unlimited Storage", "File Sharing", "Version Control", "Collaboration Tools", "Backup & Recovery"],
      category: "Cloud Storage",
      marketPrice: "$199/month",
      savings: "50% off"
    },
    {
      name: "Zion AI CRM Pro",
      description: "AI-powered customer relationship management with intelligent lead scoring and automation. Boost sales by 40% with smart automation.",
      price: "From $199/month",
      originalPrice: "$399/month",
      icon: <Users className="w-8 h-8" />,
      color: "from-purple-500 to-pink-500",
      link: "/zion-ai-crm-pro",
      features: ["Lead Scoring", "Automated Follow-ups", "Sales Analytics", "Integration Hub", "Pipeline Management", "Performance Tracking"],
      category: "CRM",
      marketPrice: "$399/month",
      savings: "50% off"
    },
    {
      name: "Zion AI Marketing Automation Pro",
      description: "AI-powered marketing automation with predictive content generation and multi-channel orchestration. Increase conversions by 60%.",
      price: "From $149/month",
      originalPrice: "$299/month",
      icon: <Code className="w-8 h-8" />,
      color: "from-indigo-500 to-purple-500",
      link: "/zion-ai-marketing-automation-pro",
      features: ["Content Generation", "Multi-channel Campaigns", "A/B Testing", "Performance Analytics", "Email Automation", "Social Media Management"],
      category: "Marketing Automation",
      marketPrice: "$299/month",
      savings: "50% off"
    },
    {
      name: "Zion AI Project Manager Pro",
      description: "AI-powered project management with intelligent task prioritization and resource allocation. Complete projects 30% faster with smart automation.",
      price: "From $99/month",
      originalPrice: "$199/month",
      icon: <Database className="w-8 h-8" />,
      color: "from-yellow-500 to-orange-500",
      link: "/zion-ai-project-manager-pro",
      features: ["Task Automation", "Resource Optimization", "Progress Tracking", "Team Collaboration", "Time Tracking", "Budget Management"],
      category: "Project Management",
      marketPrice: "$199/month",
      savings: "50% off"
    },
    {
      name: "Zion AI Accounting Assistant",
      description: "Intelligent accounting software with automated bookkeeping, tax preparation, and financial reporting. Save 20 hours per week on accounting tasks.",
      price: "From $179/month",
      originalPrice: "$359/month",
      icon: <Receipt className="w-8 h-8" />,
      color: "from-emerald-500 to-green-500",
      link: "/zion-ai-accounting-assistant",
      features: ["Automated Bookkeeping", "Tax Preparation", "Financial Reports", "Invoice Generation", "Expense Tracking", "Compliance Monitoring"],
      category: "Accounting",
      marketPrice: "$359/month",
      savings: "50% off"
    },
    {
      name: "Zion AI Inventory Manager",
      description: "Smart inventory management with demand forecasting, automated reordering, and real-time tracking. Reduce inventory costs by 25%.",
      price: "From $129/month",
      originalPrice: "$259/month",
      icon: <Package className="w-8 h-8" />,
      color: "from-teal-500 to-cyan-500",
      link: "/zion-ai-inventory-manager",
      features: ["Demand Forecasting", "Automated Reordering", "Real-time Tracking", "Barcode Scanning", "Multi-location Support", "Cost Analysis"],
      category: "Inventory Management",
      marketPrice: "$259/month",
      savings: "50% off"
    },
    {
      name: "Zion AI HR Assistant",
      description: "Comprehensive HR management with AI-powered recruitment, employee analytics, and automated workflows. Streamline HR operations by 50%.",
      price: "From $159/month",
      originalPrice: "$319/month",
      icon: <Users className="w-8 h-8" />,
      color: "from-violet-500 to-purple-500",
      link: "/zion-ai-hr-assistant",
      features: ["AI Recruitment", "Employee Analytics", "Payroll Management", "Performance Tracking", "Training Management", "Compliance Monitoring"],
      category: "Human Resources",
      marketPrice: "$319/month",
      savings: "50% off"
    },
    {
      name: "Zion AI Customer Support Bot",
      description: "Advanced AI chatbot with natural language processing, sentiment analysis, and seamless human handoff. Handle 80% of support queries automatically.",
      price: "From $89/month",
      originalPrice: "$179/month",
      icon: <Bot className="w-8 h-8" />,
      color: "from-rose-500 to-pink-500",
      link: "/zion-ai-customer-support-bot",
      features: ["Natural Language Processing", "Sentiment Analysis", "Human Handoff", "Multi-language Support", "Knowledge Base", "Live Chat Integration"],
      category: "Customer Support",
      marketPrice: "$179/month",
      savings: "50% off"
    },
    {
      name: "Zion AI Email Marketing Pro",
      description: "Intelligent email marketing platform with AI-driven personalization, automated campaigns, and advanced analytics. Increase open rates by 45%.",
      price: "From $79/month",
      originalPrice: "$159/month",
      icon: <Mail className="w-8 h-8" />,
      color: "from-amber-500 to-yellow-500",
      link: "/zion-ai-email-marketing-pro",
      features: ["AI Personalization", "Automated Campaigns", "Advanced Analytics", "A/B Testing", "List Segmentation", "Drip Campaigns"],
      category: "Email Marketing",
      marketPrice: "$159/month",
      savings: "50% off"
    },
    {
      name: "Zion AI Social Media Manager",
      description: "Comprehensive social media management with AI content creation, scheduling, and performance analytics. Grow your social presence by 200%.",
      price: "From $119/month",
      originalPrice: "$239/month",
      icon: <Heart className="w-8 h-8" />,
      color: "from-pink-500 to-rose-500",
      link: "/zion-ai-social-media-manager",
      features: ["AI Content Creation", "Multi-platform Scheduling", "Performance Analytics", "Hashtag Optimization", "Engagement Tracking", "Competitor Analysis"],
      category: "Social Media",
      marketPrice: "$239/month",
      savings: "50% off"
    },
    {
      name: "Zion AI Document Processor",
      description: "Intelligent document processing with OCR, data extraction, and automated workflows. Process documents 10x faster with 99% accuracy.",
      price: "From $149/month",
      originalPrice: "$299/month",
      icon: <FileText className="w-8 h-8" />,
      color: "from-slate-500 to-gray-500",
      link: "/zion-ai-document-processor",
      features: ["OCR Technology", "Data Extraction", "Automated Workflows", "Document Classification", "Search & Retrieval", "Version Control"],
      category: "Document Management",
      marketPrice: "$299/month",
      savings: "50% off"
    },
    {
      name: "Zion AI Sales Predictor",
      description: "Advanced sales forecasting with machine learning algorithms and predictive analytics. Improve sales accuracy by 85%.",
      price: "From $199/month",
      originalPrice: "$399/month",
      icon: <TrendingUp className="w-8 h-8" />,
      color: "from-orange-500 to-red-500",
      link: "/zion-ai-sales-predictor",
      features: ["Sales Forecasting", "Lead Scoring", "Pipeline Analysis", "Revenue Prediction", "Market Trends", "Performance Insights"],
      category: "Sales Analytics",
      marketPrice: "$399/month",
      savings: "50% off"
    },
    {
      name: "Zion AI Website Builder",
      description: "AI-powered website builder with intelligent design suggestions, SEO optimization, and automated content generation. Create professional websites in minutes.",
      price: "From $69/month",
      originalPrice: "$139/month",
      icon: <Globe className="w-8 h-8" />,
      color: "from-cyan-500 to-blue-500",
      link: "/zion-ai-website-builder",
      features: ["AI Design Suggestions", "SEO Optimization", "Content Generation", "Mobile Responsive", "E-commerce Integration", "Analytics Dashboard"],
      category: "Web Development",
      marketPrice: "$139/month",
      savings: "50% off"
    },
    {
      name: "Zion AI Data Visualizer",
      description: "Transform complex data into stunning visualizations with AI-powered charts, graphs, and interactive dashboards. Make data-driven decisions faster.",
      price: "From $99/month",
      originalPrice: "$199/month",
      icon: <PieChart className="w-8 h-8" />,
      color: "from-indigo-500 to-purple-500",
      link: "/zion-ai-data-visualizer",
      features: ["Interactive Dashboards", "AI Chart Suggestions", "Real-time Updates", "Custom Visualizations", "Export Options", "Collaboration Tools"],
      category: "Data Visualization",
      marketPrice: "$199/month",
      savings: "50% off"
    },
    {
      name: "Zion AI Code Generator",
      description: "AI-powered code generation tool that writes, reviews, and optimizes code in multiple programming languages. Increase development speed by 300%.",
      price: "From $179/month",
      originalPrice: "$359/month",
      icon: <Code className="w-8 h-8" />,
      color: "from-green-500 to-emerald-500",
      link: "/zion-ai-code-generator",
      features: ["Multi-language Support", "Code Review", "Bug Detection", "Performance Optimization", "Documentation Generation", "Testing Automation"],
      category: "Development Tools",
      marketPrice: "$359/month",
      savings: "50% off"
    },
    {
      name: "Zion AI Legal Assistant",
      description: "Intelligent legal document analysis, contract review, and compliance monitoring. Reduce legal review time by 70%.",
      price: "From $299/month",
      originalPrice: "$599/month",
      icon: <FileText className="w-8 h-8" />,
      color: "from-slate-600 to-gray-600",
      link: "/zion-ai-legal-assistant",
      features: ["Contract Analysis", "Legal Research", "Compliance Monitoring", "Document Review", "Risk Assessment", "Case Law Search"],
      category: "Legal Tech",
      marketPrice: "$599/month",
      savings: "50% off"
    },
    {
      name: "Zion AI Healthcare Analytics",
      description: "Advanced healthcare data analytics with patient insights, treatment recommendations, and predictive health modeling. Improve patient outcomes by 40%.",
      price: "From $399/month",
      originalPrice: "$799/month",
      icon: <Heart className="w-8 h-8" />,
      color: "from-red-500 to-pink-500",
      link: "/zion-ai-healthcare-analytics",
      features: ["Patient Analytics", "Treatment Recommendations", "Predictive Modeling", "Clinical Decision Support", "Outcome Tracking", "Compliance Reporting"],
      category: "Healthcare AI",
      marketPrice: "$799/month",
      savings: "50% off"
    },
    {
      name: "Zion AI Financial Planner",
      description: "Intelligent financial planning with investment recommendations, risk assessment, and portfolio optimization. Maximize returns by 25%.",
      price: "From $249/month",
      originalPrice: "$499/month",
      icon: <TrendingUp className="w-8 h-8" />,
      color: "from-yellow-500 to-orange-500",
      link: "/zion-ai-financial-planner",
      features: ["Investment Recommendations", "Risk Assessment", "Portfolio Optimization", "Market Analysis", "Goal Tracking", "Retirement Planning"],
      category: "Financial Planning",
      marketPrice: "$499/month",
      savings: "50% off"
    }
  ];

  const benefits = [
    {
      title: "Ready to Use",
      description: "Deploy immediately with pre-configured solutions",
      icon: <Zap className="w-6 h-6" />,
      stat: "Instant deployment"
    },
    {
      title: "Cost Effective",
      description: "Affordable pricing with no hidden costs",
      icon: <TrendingUp className="w-6 h-6" />,
      stat: "Up to 70% savings"
    },
    {
      title: "Scalable",
      description: "Grow with your business needs",
      icon: <Cloud className="w-6 h-6" />,
      stat: "Unlimited scaling"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Helmet>
        <title>Micro SAAS Solutions - Zion Tech Group | Ready-to-Use Software Solutions</title>
        <meta name="description" content="Discover our comprehensive range of micro SAAS solutions designed to streamline your business operations with ready-to-use software tools." />
        <meta name="keywords" content="micro SAAS, software solutions, business tools, analytics, CRM, project management, marketing automation" />
      </Helmet>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-cyan-500/20 to-purple-500/20 border border-cyan-500/30 mb-6">
            <Sparkles className="w-4 h-4 text-cyan-400 mr-2" />
            <span className="text-cyan-400 text-sm font-medium">Ready-to-Use Solutions</span>
          </div>
          
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400">
              Micro SAAS Solutions
            </span>
          </h1>
          
          <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
            Transform your business operations with our comprehensive suite of micro SAAS solutions. 
            Ready-to-use software tools that integrate seamlessly with your existing workflow.
          </p>
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
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 lg:gap-8">
          {microSaasProducts.map((product, index) => (
            <Link
              key={index}
              to={product.link}
              className="group bg-white/10 backdrop-blur-sm rounded-xl p-4 sm:p-6 border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-cyan-500/10 relative overflow-hidden"
            >
              {product.popular && (
                <div className="absolute top-4 right-4">
                  <span className="bg-gradient-to-r from-cyan-500 to-purple-500 text-white px-3 py-1 rounded-full text-xs font-semibold flex items-center">
                    <Star className="w-3 h-3 mr-1" />
                    Popular
                  </span>
                </div>
              )}
              
              <div className={`w-16 h-16 rounded-lg bg-gradient-to-r ${product.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                {product.icon}
              </div>
              
              <div className="mb-3">
                <span className="text-xs bg-cyan-500/20 text-cyan-300 px-2 py-1 rounded-full border border-cyan-500/30">
                  {product.category}
                </span>
              </div>
              
              <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-cyan-400 transition-colors">
                {product.name}
              </h3>
              
              <p className="text-gray-300 mb-4 leading-relaxed text-sm">
                {product.description}
              </p>
              
              {/* Pricing */}
              <div className="mb-4">
                <div className="flex items-center space-x-2 mb-1">
                  <span className="text-2xl font-bold text-cyan-400">{product.price}</span>
                  {product.originalPrice && (
                    <span className="text-gray-500 line-through text-sm">{product.originalPrice}</span>
                  )}
                </div>
                {product.savings && (
                  <div className="text-green-400 text-sm font-medium">
                    {product.savings} - Market Price: {product.marketPrice}
                  </div>
                )}
              </div>
              
              <ul className="space-y-2 mb-6">
                {product.features.slice(0, 4).map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center text-sm text-gray-300">
                    <CheckCircle className="w-4 h-4 text-cyan-400 mr-2 flex-shrink-0" />
                    {feature}
                  </li>
                ))}
                {product.features.length > 4 && (
                  <div className="text-xs text-cyan-400 text-center">
                    +{product.features.length - 4} more features
                  </div>
                )}
              </ul>
              
              <div className="flex items-center text-cyan-400 text-sm font-medium group-hover:text-cyan-300 transition-colors">
                Get Started
                <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
              </div>
            </Link>
          ))}
        </div>

        {/* CTA Section */}
        <div className="mt-20 text-center">
          <div className="bg-gradient-to-r from-cyan-500/10 to-purple-500/10 rounded-xl p-8 border border-cyan-500/20">
            <h2 className="text-3xl font-bold text-white mb-4">
              Need a Custom Solution?
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Our team can create a custom micro SAAS solution tailored to your specific business needs. 
              Let's discuss your requirements and build something amazing together.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 flex items-center justify-center group shadow-lg hover:shadow-cyan-500/25 hover:scale-105"
              >
                Discuss Your Needs
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                to="/demo"
                className="border border-cyan-400 text-cyan-400 px-8 py-4 rounded-lg font-semibold hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300 group hover:scale-105"
              >
                View Live Demo
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

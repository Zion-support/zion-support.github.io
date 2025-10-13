import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { 
  BarChart3, 
  Shield, 
  Cloud, 
  Users, 
  ArrowRight,
  Sparkles,
  Target,
  TrendingUp,
  Zap,
  Brain,
  Globe,
  Settings,
  Mail,
  Calendar,
  FileText,
  Search,
  Lock,
  Smartphone,
  Monitor,
  Database,
  Code,
  Palette,
  MessageSquare,
  CreditCard,
  PieChart,
  Clock,
  CheckCircle,
  Star,
  Award,
  DollarSign,
  Phone,
  MapPin,
  ExternalLink
} from 'lucide-react';

const MicroSAASPage = () => {
  const microSaasServices = [
    {
      name: "Zion Analytics Pro",
      description: "AI-powered business intelligence platform with real-time dashboards, predictive analytics, and automated reporting. Transform your data into actionable insights.",
      price: "From $299/month",
      originalPrice: "$399/month",
      icon: <BarChart3 className="w-8 h-8" />,
      link: "/zion-analytics-pro",
      featured: true,
      category: "Analytics",
      features: [
        "Real-time dashboards",
        "Predictive analytics",
        "Automated reporting",
        "Custom KPI tracking",
        "Data visualization",
        "Export capabilities"
      ],
      benefits: "40% faster decision making",
      color: "from-blue-500 to-cyan-500"
    },
    {
      name: "Zion Security Shield Pro",
      description: "Advanced cybersecurity protection with AI-powered threat detection, automated response, and 24/7 monitoring. Enterprise-grade security for your business.",
      price: "From $499/month",
      originalPrice: "$699/month",
      icon: <Shield className="w-8 h-8" />,
      link: "/zion-security-shield-pro",
      featured: true,
      category: "Security",
      features: [
        "AI threat detection",
        "Automated response",
        "24/7 monitoring",
        "Vulnerability scanning",
        "Compliance reporting",
        "Incident management"
      ],
      benefits: "99.9% threat prevention",
      color: "from-red-500 to-orange-500"
    },
    {
      name: "Zion Cloud Vault Pro",
      description: "Secure cloud storage solution with end-to-end encryption, unlimited scalability, and advanced collaboration features. Your data, secured and accessible.",
      price: "From $99/month",
      originalPrice: "$149/month",
      icon: <Cloud className="w-8 h-8" />,
      link: "/zion-cloud-vault-pro",
      featured: true,
      category: "Storage",
      features: [
        "End-to-end encryption",
        "Unlimited storage",
        "Real-time sync",
        "Version control",
        "Team collaboration",
        "Mobile access"
      ],
      benefits: "99.99% uptime guarantee",
      color: "from-purple-500 to-pink-500"
    },
    {
      name: "Zion AI CRM Pro",
      description: "AI-powered customer relationship management with intelligent lead scoring, automated follow-ups, and predictive analytics. Close more deals with AI.",
      price: "From $199/month",
      originalPrice: "$299/month",
      icon: <Users className="w-8 h-8" />,
      link: "/zion-ai-crm-pro",
      featured: true,
      category: "CRM",
      features: [
        "AI lead scoring",
        "Automated follow-ups",
        "Predictive analytics",
        "Pipeline management",
        "Email integration",
        "Sales forecasting"
      ],
      benefits: "35% increase in conversions",
      color: "from-green-500 to-emerald-500"
    },
    {
      name: "Zion AI Marketing Automation Pro",
      description: "AI-powered marketing automation with predictive content generation, multi-channel orchestration, and intelligent audience targeting.",
      price: "From $149/month",
      originalPrice: "$249/month",
      icon: <Target className="w-8 h-8" />,
      link: "/zion-ai-marketing-automation-pro",
      featured: true,
      category: "Marketing",
      features: [
        "AI content generation",
        "Multi-channel campaigns",
        "Audience segmentation",
        "A/B testing",
        "Performance analytics",
        "Email automation"
      ],
      benefits: "60% higher engagement rates",
      color: "from-yellow-500 to-orange-500"
    },
    {
      name: "Zion AI Project Manager Pro",
      description: "AI-powered project management with intelligent task prioritization, resource allocation, and automated progress tracking. Manage projects like never before.",
      price: "From $99/month",
      originalPrice: "$149/month",
      icon: <Calendar className="w-8 h-8" />,
      link: "/zion-ai-project-manager-pro",
      featured: true,
      category: "Project Management",
      features: [
        "AI task prioritization",
        "Resource optimization",
        "Progress tracking",
        "Team collaboration",
        "Time tracking",
        "Risk assessment"
      ],
      benefits: "50% faster project delivery",
      color: "from-indigo-500 to-purple-500"
    },
    {
      name: "Zion AI Accounting Suite Pro",
      description: "Comprehensive AI-powered accounting solution with automated bookkeeping, tax preparation, and financial forecasting. Streamline your finances.",
      price: "From $179/month",
      originalPrice: "$279/month",
      icon: <FileText className="w-8 h-8" />,
      link: "/zion-ai-accounting-suite-pro",
      featured: false,
      category: "Finance",
      features: [
        "Automated bookkeeping",
        "Tax preparation",
        "Financial forecasting",
        "Invoice management",
        "Expense tracking",
        "Compliance reporting"
      ],
      benefits: "80% time savings on accounting",
      color: "from-emerald-500 to-teal-500"
    },
    {
      name: "Zion AI HR Assistant Pro",
      description: "AI-powered human resources management with automated recruitment, employee onboarding, and performance analytics. Transform your HR processes.",
      price: "From $129/month",
      originalPrice: "$199/month",
      icon: <Users className="w-8 h-8" />,
      link: "/zion-ai-hr-assistant-pro",
      featured: false,
      category: "HR",
      features: [
        "AI recruitment",
        "Employee onboarding",
        "Performance tracking",
        "Payroll management",
        "Benefits administration",
        "Compliance monitoring"
      ],
      benefits: "45% reduction in HR workload",
      color: "from-rose-500 to-pink-500"
    },
    {
      name: "Zion AI E-commerce Optimizer Pro",
      description: "AI-powered e-commerce optimization with dynamic pricing, inventory management, and customer behavior analysis. Boost your online sales.",
      price: "From $199/month",
      originalPrice: "$299/month",
      icon: <Globe className="w-8 h-8" />,
      link: "/zion-ai-ecommerce-optimizer-pro",
      featured: false,
      category: "E-commerce",
      features: [
        "Dynamic pricing",
        "Inventory optimization",
        "Customer analytics",
        "Recommendation engine",
        "A/B testing",
        "Sales forecasting"
      ],
      benefits: "25% increase in sales",
      color: "from-cyan-500 to-blue-500"
    },
    {
      name: "Zion AI Document Processor Pro",
      description: "AI-powered document processing with intelligent data extraction, automated classification, and smart search capabilities. Digitize your documents.",
      price: "From $89/month",
      originalPrice: "$139/month",
      icon: <FileText className="w-8 h-8" />,
      link: "/zion-ai-document-processor-pro",
      featured: false,
      category: "Document Management",
      features: [
        "Data extraction",
        "Document classification",
        "Smart search",
        "OCR technology",
        "Version control",
        "Workflow automation"
      ],
      benefits: "90% faster document processing",
      color: "from-violet-500 to-purple-500"
    },
    {
      name: "Zion AI Social Media Manager Pro",
      description: "AI-powered social media management with content generation, scheduling, and performance analytics. Master your social presence.",
      price: "From $119/month",
      originalPrice: "$179/month",
      icon: <MessageSquare className="w-8 h-8" />,
      link: "/zion-ai-social-media-manager-pro",
      featured: false,
      category: "Social Media",
      features: [
        "AI content generation",
        "Multi-platform posting",
        "Engagement analytics",
        "Hashtag optimization",
        "Competitor analysis",
        "Influencer tracking"
      ],
      benefits: "70% increase in engagement",
      color: "from-pink-500 to-rose-500"
    },
    {
      name: "Zion AI Email Marketing Pro",
      description: "AI-powered email marketing platform with intelligent segmentation, automated campaigns, and advanced analytics. Maximize your email ROI.",
      price: "From $79/month",
      originalPrice: "$129/month",
      icon: <Mail className="w-8 h-8" />,
      link: "/zion-ai-email-marketing-pro",
      featured: false,
      category: "Email Marketing",
      features: [
        "AI segmentation",
        "Automated campaigns",
        "A/B testing",
        "Deliverability optimization",
        "Performance analytics",
        "Template library"
      ],
      benefits: "40% higher open rates",
      color: "from-blue-500 to-indigo-500"
    },
    {
      name: "Zion AI Inventory Manager Pro",
      description: "AI-powered inventory management with demand forecasting, automated reordering, and real-time tracking. Optimize your supply chain.",
      price: "From $149/month",
      originalPrice: "$229/month",
      icon: <Database className="w-8 h-8" />,
      link: "/zion-ai-inventory-manager-pro",
      featured: false,
      category: "Inventory",
      features: [
        "Demand forecasting",
        "Automated reordering",
        "Real-time tracking",
        "Supplier management",
        "Cost optimization",
        "Reporting dashboard"
      ],
      benefits: "30% reduction in stockouts",
      color: "from-amber-500 to-orange-500"
    },
    {
      name: "Zion AI Customer Support Pro",
      description: "AI-powered customer support with intelligent chatbots, ticket routing, and sentiment analysis. Deliver exceptional customer service.",
      price: "From $159/month",
      originalPrice: "$239/month",
      icon: <MessageSquare className="w-8 h-8" />,
      link: "/zion-ai-customer-support-pro",
      featured: false,
      category: "Customer Support",
      features: [
        "AI chatbots",
        "Ticket routing",
        "Sentiment analysis",
        "Knowledge base",
        "Multi-channel support",
        "Performance metrics"
      ],
      benefits: "85% faster response times",
      color: "from-teal-500 to-cyan-500"
    },
    {
      name: "Zion AI SEO Optimizer Pro",
      description: "AI-powered SEO optimization with keyword research, content analysis, and ranking tracking. Dominate search results.",
      price: "From $99/month",
      originalPrice: "$159/month",
      icon: <Search className="w-8 h-8" />,
      link: "/zion-ai-seo-optimizer-pro",
      featured: false,
      category: "SEO",
      features: [
        "Keyword research",
        "Content optimization",
        "Ranking tracking",
        "Competitor analysis",
        "Technical SEO",
        "Performance reporting"
      ],
      benefits: "60% improvement in rankings",
      color: "from-green-500 to-lime-500"
    },
    {
      name: "Zion AI Mobile App Builder Pro",
      description: "AI-powered mobile app development platform with drag-and-drop interface, automated testing, and instant deployment. Build apps without coding.",
      price: "From $199/month",
      originalPrice: "$299/month",
      icon: <Smartphone className="w-8 h-8" />,
      link: "/zion-ai-mobile-app-builder-pro",
      featured: false,
      category: "Mobile Development",
      features: [
        "Drag-and-drop builder",
        "AI code generation",
        "Automated testing",
        "Instant deployment",
        "Cross-platform support",
        "App store publishing"
      ],
      benefits: "80% faster app development",
      color: "from-purple-500 to-violet-500"
    },
    {
      name: "Zion AI API Manager Pro",
      description: "AI-powered API management platform with intelligent monitoring, automated documentation, and performance optimization. Manage your APIs like a pro.",
      price: "From $129/month",
      originalPrice: "$199/month",
      icon: <Settings className="w-8 h-8" />,
      link: "/zion-ai-api-manager-pro",
      featured: false,
      category: "API Management",
      features: [
        "API monitoring",
        "Automated documentation",
        "Performance optimization",
        "Rate limiting",
        "Security scanning",
        "Analytics dashboard"
      ],
      benefits: "50% reduction in API issues",
      color: "from-slate-500 to-gray-500"
    },
    {
      name: "Zion AI Backup Manager Pro",
      description: "AI-powered backup solution with intelligent scheduling, automated recovery, and cross-platform sync. Protect your data with AI.",
      price: "From $69/month",
      originalPrice: "$109/month",
      icon: <Cloud className="w-8 h-8" />,
      link: "/zion-ai-backup-manager-pro",
      featured: false,
      category: "Backup",
      features: [
        "Intelligent scheduling",
        "Automated recovery",
        "Cross-platform sync",
        "Version control",
        "Encryption",
        "Cloud storage"
      ],
      benefits: "99.9% data protection",
      color: "from-blue-500 to-cyan-500"
    },
    {
      name: "Zion AI Testing Automation Pro",
      description: "AI-powered testing automation with intelligent test generation, automated execution, and comprehensive reporting. Ensure quality with AI.",
      price: "From $179/month",
      originalPrice: "$279/month",
      icon: <CheckCircle className="w-8 h-8" />,
      link: "/zion-ai-testing-automation-pro",
      featured: false,
      category: "Testing",
      features: [
        "AI test generation",
        "Automated execution",
        "Cross-browser testing",
        "Performance testing",
        "Bug tracking",
        "Detailed reporting"
      ],
      benefits: "70% reduction in testing time",
      color: "from-emerald-500 to-green-500"
    },
    {
      name: "Zion AI Data Warehouse Pro",
      description: "AI-powered data warehouse with intelligent ETL processes, automated analytics, and real-time insights. Unlock your data's potential.",
      price: "From $299/month",
      originalPrice: "$449/month",
      icon: <Database className="w-8 h-8" />,
      link: "/zion-ai-data-warehouse-pro",
      featured: false,
      category: "Data Analytics",
      features: [
        "Intelligent ETL",
        "Automated analytics",
        "Real-time insights",
        "Data visualization",
        "Machine learning",
        "Scalable infrastructure"
      ],
      benefits: "90% faster data processing",
      color: "from-indigo-500 to-blue-500"
    }
  ];

  const categories = [
    { name: "All", count: microSaasServices.length, color: "from-gray-500 to-gray-600" },
    { name: "Analytics", count: microSaasServices.filter(s => s.category === "Analytics").length, color: "from-blue-500 to-cyan-500" },
    { name: "Security", count: microSaasServices.filter(s => s.category === "Security").length, color: "from-red-500 to-orange-500" },
    { name: "Storage", count: microSaasServices.filter(s => s.category === "Storage").length, color: "from-purple-500 to-pink-500" },
    { name: "CRM", count: microSaasServices.filter(s => s.category === "CRM").length, color: "from-green-500 to-emerald-500" },
    { name: "Marketing", count: microSaasServices.filter(s => s.category === "Marketing").length, color: "from-yellow-500 to-orange-500" },
    { name: "Project Management", count: microSaasServices.filter(s => s.category === "Project Management").length, color: "from-indigo-500 to-purple-500" },
    { name: "Finance", count: microSaasServices.filter(s => s.category === "Finance").length, color: "from-emerald-500 to-teal-500" },
    { name: "HR", count: microSaasServices.filter(s => s.category === "HR").length, color: "from-rose-500 to-pink-500" },
    { name: "E-commerce", count: microSaasServices.filter(s => s.category === "E-commerce").length, color: "from-cyan-500 to-blue-500" }
  ];

  const stats = [
    { number: "20+", label: "Micro SAAS Solutions", icon: <Zap className="w-6 h-6" /> },
    { number: "10,000+", label: "Active Users", icon: <Users className="w-6 h-6" /> },
    { number: "99.9%", label: "Uptime SLA", icon: <Award className="w-6 h-6" /> },
    { number: "24/7", label: "Support Available", icon: <Shield className="w-6 h-6" /> }
  ];

  const testimonials = [
    {
      name: "Sarah Johnson",
      company: "TechStart Inc.",
      role: "CEO",
      content: "Zion Analytics Pro transformed our data analysis. We now make decisions 40% faster with real-time insights and predictive analytics.",
      rating: 5,
      service: "Zion Analytics Pro"
    },
    {
      name: "Michael Chen",
      company: "E-commerce Solutions",
      role: "CTO",
      content: "The AI-powered inventory management saved us thousands of dollars in stockouts. The demand forecasting is incredibly accurate.",
      rating: 5,
      service: "Zion AI Inventory Manager Pro"
    },
    {
      name: "Emily Rodriguez",
      company: "Digital Marketing Agency",
      role: "Operations Director",
      content: "Zion AI Marketing Automation Pro increased our email engagement by 40%. The AI content generation is a game-changer.",
      rating: 5,
      service: "Zion AI Marketing Automation Pro"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Helmet>
        <title>Micro SAAS Solutions - Zion Tech Group | Ready-to-Use Software Solutions</title>
        <meta name="description" content="Discover our comprehensive collection of micro SAAS solutions including AI-powered analytics, security, CRM, marketing automation, and more. Start free trials today." />
        <meta name="keywords" content="micro SAAS, software as a service, business software, AI solutions, analytics, CRM, marketing automation, project management" />
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
          
          <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed mb-8">
            Transform your business with our comprehensive collection of AI-powered micro SAAS solutions. 
            From analytics to automation, we have everything you need to accelerate growth and efficiency.
          </p>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
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

        {/* Categories Filter */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category, index) => (
            <button
              key={index}
              className={`px-6 py-3 rounded-full text-sm font-medium transition-all duration-300 ${
                category.name === "All"
                  ? "bg-gradient-to-r from-cyan-500 to-purple-600 text-white shadow-lg"
                  : "bg-white/10 text-gray-300 hover:bg-white/20 hover:text-white"
              }`}
            >
              {category.name} ({category.count})
            </button>
          ))}
        </div>

        {/* Featured Services */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-white text-center mb-8">Featured Solutions</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {microSaasServices.filter(service => service.featured).map((service, index) => (
              <div
                key={index}
                className="group bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-cyan-500/10 relative overflow-hidden"
              >
                <div className="absolute top-4 right-4">
                  <span className="bg-gradient-to-r from-cyan-500 to-purple-500 text-white px-2 py-1 rounded-full text-xs font-semibold">
                    Featured
                  </span>
                </div>
                
                <div className={`w-16 h-16 rounded-lg bg-gradient-to-r ${service.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                  {service.icon}
                </div>
                
                <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-cyan-400 transition-colors">
                  {service.name}
                </h3>
                
                <p className="text-gray-300 mb-4 leading-relaxed text-sm">
                  {service.description}
                </p>
                
                <div className="flex items-center justify-between mb-4">
                  <div>
                    <span className="text-2xl font-bold text-cyan-400">{service.price}</span>
                    <span className="text-sm text-gray-400 line-through ml-2">{service.originalPrice}</span>
                  </div>
                  <span className="text-xs bg-green-500/20 text-green-400 px-2 py-1 rounded-full">
                    {service.benefits}
                  </span>
                </div>
                
                <ul className="space-y-2 mb-6">
                  {service.features.slice(0, 3).map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-sm text-gray-300">
                      <CheckCircle className="w-4 h-4 text-green-400 mr-2" />
                      {feature}
                    </li>
                  ))}
                </ul>
                
                <Link
                  to={service.link}
                  className="w-full bg-gradient-to-r from-cyan-500 to-purple-600 text-white py-3 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 flex items-center justify-center group"
                >
                  Start Free Trial
                  <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            ))}
          </div>
        </div>

        {/* All Services Grid */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-white text-center mb-8">All Solutions</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {microSaasServices.map((service, index) => (
              <div
                key={index}
                className="group bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-cyan-500/10 relative overflow-hidden"
              >
                {service.featured && (
                  <div className="absolute top-4 right-4">
                    <span className="bg-gradient-to-r from-cyan-500 to-purple-500 text-white px-2 py-1 rounded-full text-xs font-semibold">
                      Featured
                    </span>
                  </div>
                )}
                
                <div className={`w-12 h-12 rounded-lg bg-gradient-to-r ${service.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                  {service.icon}
                </div>
                
                <div className="mb-2">
                  <span className="text-xs bg-white/20 text-white px-2 py-1 rounded-full">
                    {service.category}
                  </span>
                </div>
                
                <h3 className="text-lg font-semibold text-white mb-3 group-hover:text-cyan-400 transition-colors">
                  {service.name}
                </h3>
                
                <p className="text-gray-300 mb-4 leading-relaxed text-sm">
                  {service.description}
                </p>
                
                <div className="flex items-center justify-between mb-4">
                  <div>
                    <span className="text-lg font-bold text-cyan-400">{service.price}</span>
                    <span className="text-xs text-gray-400 line-through ml-2">{service.originalPrice}</span>
                  </div>
                </div>
                
                <div className="text-xs text-green-400 mb-4">
                  {service.benefits}
                </div>
                
                <Link
                  to={service.link}
                  className="w-full bg-gradient-to-r from-cyan-500 to-purple-600 text-white py-2 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 flex items-center justify-center group text-sm"
                >
                  Learn More
                  <ArrowRight className="w-3 h-3 ml-1 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            ))}
          </div>
        </div>

        {/* Testimonials */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-white text-center mb-8">What Our Customers Say</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="group bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-cyan-500/10"
              >
                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-300 mb-4 italic leading-relaxed">"{testimonial.content}"</p>
                <div className="mb-2">
                  <div className="font-semibold text-white">{testimonial.name}</div>
                  <div className="text-sm text-gray-400">{testimonial.role}, {testimonial.company}</div>
                </div>
                <div className="text-xs text-cyan-400">{testimonial.service}</div>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="bg-gradient-to-r from-cyan-900/30 to-purple-900/30 rounded-xl p-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Ready to Transform Your Business?
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Start your free trial today and experience the power of AI-driven micro SAAS solutions. 
            No credit card required. Cancel anytime.
          </p>
          
          {/* Contact Information */}
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
                <MapPin className="w-6 h-6 text-white" />
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
              Start Free Trial
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
  );
};

export default MicroSAASPage;

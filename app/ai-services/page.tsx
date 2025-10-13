import React from "react";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { 
  ArrowRight, 
  Brain, 
  BarChart3, 
  Bot, 
  FileText, 
  Shield, 
  Users, 
  Target,
  Code,
  Database,
  Mail,
  Phone,
  MapPin,
  Star,
  CheckCircle,
  Sparkles,
  TrendingUp,
  Clock,
  Award,
  Zap,
  Globe,
  Eye,
  Settings,
  PieChart,
  Activity,
  DollarSign,
  Lock,
  Smartphone,
  Monitor,
  Server,
  ChevronRight,
  PlayCircle
} from "lucide-react";
import FuturisticCard from "../components/FuturisticCard";
import FuturisticButton from "../components/FuturisticButton";
import ResponsiveContainer from "../components/ResponsiveContainer";
import ResponsiveGrid from "../components/ResponsiveGrid";
import ResponsiveText from "../components/ResponsiveText";

const AIServicesPage = () => {
  const aiServices = [
    {
      id: "ai-business-intelligence",
      name: "AI Business Intelligence Pro",
      description: "Transform raw data into actionable insights with our advanced AI analytics platform. Real-time dashboards, predictive analytics, and automated reporting with 99.9% accuracy.",
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
      link: "/ai-business-intelligence",
      popular: true,
      rating: 4.9,
      reviews: 247,
      demo: "https://ziontechgroup.com/demo/ai-bi"
    },
    {
      id: "ai-customer-support",
      name: "AI Customer Support Automation",
      description: "Deploy intelligent chatbots and automated customer service solutions. 24/7 support with natural language processing, sentiment analysis, and multilingual capabilities.",
      price: "From $199/month",
      originalPrice: "$399/month",
      icon: <Bot className="w-8 h-8" />,
      color: "from-green-500 to-emerald-500",
      category: "Customer Service",
      features: [
        "Multi-language Support",
        "Sentiment Analysis",
        "CRM Integration",
        "Live Chat Handoff",
        "Voice Recognition",
        "Custom Training",
        "Knowledge Base Integration",
        "Automated Ticket Routing",
        "Performance Analytics",
        "24/7 Availability"
      ],
      benefits: [
        "70% reduction in support tickets",
        "Instant response to common queries",
        "Improved customer satisfaction",
        "24/7 support availability",
        "Reduced support costs by 50%"
      ],
      link: "/ai-customer-support",
      popular: true,
      rating: 4.8,
      reviews: 189,
      demo: "https://ziontechgroup.com/demo/ai-support"
    },
    {
      id: "ai-content-generation",
      name: "AI Content Generation Studio",
      description: "Create high-quality content at scale with our AI-powered writing tools. Blog posts, social media content, product descriptions, and marketing materials with SEO optimization.",
      price: "From $149/month",
      originalPrice: "$299/month",
      icon: <FileText className="w-8 h-8" />,
      color: "from-purple-500 to-pink-500",
      category: "Content Creation",
      features: [
        "SEO Optimization",
        "Brand Voice Training",
        "Multi-format Output",
        "Plagiarism Detection",
        "Content Calendar",
        "Team Collaboration",
        "AI Writing Assistant",
        "Content Templates",
        "Social Media Integration",
        "Performance Analytics"
      ],
      benefits: [
        "80% faster content creation",
        "Improved SEO rankings",
        "Consistent brand voice",
        "Reduced content costs",
        "Higher engagement rates"
      ],
      link: "/ai-content-generation",
      popular: false,
      rating: 4.7,
      reviews: 156,
      demo: "https://ziontechgroup.com/demo/ai-content"
    },
    {
      id: "ai-cybersecurity",
      name: "AI Cybersecurity Defense Matrix",
      description: "Advanced threat detection and response system with real-time monitoring, automated incident response, and compliance reporting. Protect your business 24/7.",
      price: "From $399/month",
      originalPrice: "$799/month",
      icon: <Shield className="w-8 h-8" />,
      color: "from-red-500 to-orange-500",
      category: "Cybersecurity",
      features: [
        "Threat Detection",
        "Automated Response",
        "Compliance Reports",
        "24/7 Monitoring",
        "Incident Response",
        "Security Training",
        "Vulnerability Assessment",
        "Penetration Testing",
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
      link: "/ai-cybersecurity",
      popular: true,
      rating: 4.8,
      reviews: 203,
      demo: "https://ziontechgroup.com/demo/ai-security"
    },
    {
      id: "ai-data-analytics",
      name: "AI Data Analytics Platform",
      description: "Advanced data processing and visualization platform with machine learning models, automated insights, and interactive dashboards for data-driven decisions.",
      price: "From $179/month",
      originalPrice: "$359/month",
      icon: <Database className="w-8 h-8" />,
      color: "from-teal-500 to-cyan-500",
      category: "Data Analytics",
      features: [
        "ML Models",
        "Interactive Dashboards",
        "Data Pipeline",
        "Real-time Processing",
        "Data Visualization",
        "Custom Reports",
        "Predictive Analytics",
        "Data Integration",
        "Automated Insights",
        "Scalable Architecture"
      ],
      benefits: [
        "Real-time data processing",
        "Automated insight generation",
        "Better data-driven decisions",
        "Reduced analysis time by 60%",
        "Scalable to any data size"
      ],
      link: "/ai-data-analytics",
      popular: false,
      rating: 4.6,
      reviews: 134,
      demo: "https://ziontechgroup.com/demo/ai-analytics"
    },
    {
      id: "ai-code-assistant",
      name: "AI Code Assistant Pro",
      description: "Intelligent code generation, review, and optimization with support for multiple programming languages, automated testing, and documentation generation.",
      price: "From $129/month",
      originalPrice: "$259/month",
      icon: <Code className="w-8 h-8" />,
      color: "from-yellow-500 to-orange-500",
      category: "Development Tools",
      features: [
        "Code Generation",
        "Bug Detection",
        "Performance Optimization",
        "Documentation",
        "Code Review",
        "Refactoring",
        "Multi-language Support",
        "IDE Integration",
        "Automated Testing",
        "Code Quality Metrics"
      ],
      benefits: [
        "50% faster development",
        "Reduced bugs by 70%",
        "Improved code quality",
        "Automated documentation",
        "Better performance optimization"
      ],
      link: "/ai-code-assistant",
      popular: false,
      rating: 4.7,
      reviews: 98,
      demo: "https://ziontechgroup.com/demo/ai-code"
    },
    {
      id: "ai-marketing-automation",
      name: "AI Marketing Automation Hub",
      description: "End-to-end marketing automation with AI-driven personalization, email campaigns, social media management, and advanced lead scoring algorithms.",
      price: "From $199/month",
      originalPrice: "$399/month",
      icon: <Target className="w-8 h-8" />,
      color: "from-pink-500 to-rose-500",
      category: "Marketing Automation",
      features: [
        "Email Automation",
        "Social Media",
        "Lead Scoring",
        "A/B Testing",
        "Personalization",
        "Analytics Dashboard",
        "Campaign Optimization",
        "Customer Journey Mapping",
        "Multi-channel Integration",
        "ROI Tracking"
      ],
      benefits: [
        "45% increase in lead conversion",
        "60% improvement in email open rates",
        "Personalized customer experiences",
        "Automated campaign optimization",
        "Higher marketing ROI"
      ],
      link: "/ai-marketing-automation",
      popular: true,
      rating: 4.8,
      reviews: 167,
      demo: "https://ziontechgroup.com/demo/ai-marketing"
    },
    {
      id: "ai-document-processing",
      name: "AI Document Intelligence Suite",
      description: "Intelligent document analysis, extraction, and processing with OCR technology, form recognition, and automated data entry solutions.",
      price: "From $159/month",
      originalPrice: "$319/month",
      icon: <FileText className="w-8 h-8" />,
      color: "from-emerald-500 to-green-500",
      category: "Document Management",
      features: [
        "OCR Technology",
        "Form Recognition",
        "Data Extraction",
        "Workflow Automation",
        "Document Classification",
        "Search & Retrieval",
        "Multi-format Support",
        "Batch Processing",
        "Quality Assurance",
        "Integration APIs"
      ],
      benefits: [
        "90% reduction in manual data entry",
        "99% accuracy in document processing",
        "Faster document workflows",
        "Improved data quality",
        "Significant cost savings"
      ],
      link: "/ai-document-processing",
      popular: false,
      rating: 4.6,
      reviews: 112,
      demo: "https://ziontechgroup.com/demo/ai-documents"
    },
    {
      id: "ai-crm-assistant",
      name: "AI Sales CRM Assistant Pro",
      description: "Intelligent CRM with AI-powered lead qualification, sales forecasting, and automated follow-ups. Integration with major CRM platforms and sales tools.",
      price: "From $229/month",
      originalPrice: "$459/month",
      icon: <Users className="w-8 h-8" />,
      color: "from-violet-500 to-purple-500",
      category: "Sales & CRM",
      features: [
        "Lead Scoring",
        "Sales Forecasting",
        "Automated Follow-ups",
        "CRM Integration",
        "Pipeline Management",
        "Performance Analytics",
        "Email Automation",
        "Call Scheduling",
        "Deal Tracking",
        "Team Collaboration"
      ],
      benefits: [
        "35% increase in lead conversion",
        "50% reduction in manual follow-ups",
        "Accurate sales forecasting",
        "Streamlined sales processes",
        "Better customer relationship management"
      ],
      link: "/ai-crm-assistant",
      popular: true,
      rating: 4.8,
      reviews: 203,
      demo: "https://ziontechgroup.com/demo/ai-crm"
    },
    {
      id: "ai-financial-analytics",
      name: "AI Financial Analytics Pro",
      description: "Advanced financial modeling and risk assessment with automated reporting, fraud detection, and investment analysis tools for financial institutions.",
      price: "From $349/month",
      originalPrice: "$699/month",
      icon: <TrendingUp className="w-8 h-8" />,
      color: "from-amber-500 to-yellow-500",
      category: "Financial Services",
      features: [
        "Risk Assessment",
        "Fraud Detection",
        "Investment Analysis",
        "Compliance Reporting",
        "Portfolio Optimization",
        "Market Prediction",
        "Financial Modeling",
        "Real-time Alerts",
        "Regulatory Compliance",
        "Custom Dashboards"
      ],
      benefits: [
        "Accurate financial forecasting",
        "Proactive risk management",
        "Reduced fraud losses",
        "Better investment decisions",
        "Compliance automation"
      ],
      link: "/ai-financial-analytics",
      popular: false,
      rating: 4.7,
      reviews: 76,
      demo: "https://ziontechgroup.com/demo/ai-finance"
    },
    {
      id: "ai-healthcare-diagnostics",
      name: "AI Healthcare Diagnostics",
      description: "Revolutionary AI-powered medical diagnostics with image analysis, symptom assessment, and treatment recommendations for healthcare providers.",
      price: "From $499/month",
      originalPrice: "$999/month",
      icon: <Brain className="w-8 h-8" />,
      color: "from-rose-500 to-pink-500",
      category: "Healthcare AI",
      features: [
        "Medical Imaging",
        "Symptom Analysis",
        "Treatment Recommendations",
        "Patient Monitoring",
        "Drug Interaction",
        "Compliance Tracking",
        "Diagnostic Accuracy",
        "Clinical Decision Support",
        "Electronic Health Records",
        "Telemedicine Integration"
      ],
      benefits: [
        "Improved diagnostic accuracy",
        "Faster patient assessments",
        "Reduced medical errors",
        "Better treatment outcomes",
        "Enhanced patient care"
      ],
      link: "/ai-healthcare-diagnostics",
      popular: false,
      rating: 4.9,
      reviews: 89,
      demo: "https://ziontechgroup.com/demo/ai-healthcare"
    },
    {
      id: "ai-supply-chain-optimizer",
      name: "AI Supply Chain Optimizer",
      description: "Intelligent supply chain management with demand forecasting, inventory optimization, and logistics automation for manufacturing and retail.",
      price: "From $279/month",
      originalPrice: "$559/month",
      icon: <Globe className="w-8 h-8" />,
      color: "from-slate-500 to-gray-500",
      category: "Supply Chain",
      features: [
        "Demand Forecasting",
        "Inventory Optimization",
        "Route Planning",
        "Supplier Management",
        "Risk Assessment",
        "Cost Analysis",
        "Real-time Tracking",
        "Automated Alerts",
        "ERP Integration",
        "Performance Analytics"
      ],
      benefits: [
        "20% reduction in inventory costs",
        "Improved demand accuracy",
        "Optimized logistics routes",
        "Better supplier relationships",
        "Reduced supply chain risks"
      ],
      link: "/ai-supply-chain-optimizer",
      popular: false,
      rating: 4.5,
      reviews: 89,
      demo: "https://ziontechgroup.com/demo/ai-supply-chain"
    }
  ];

  const categories = [
    { name: "All AI Services", count: aiServices.length, active: true },
    { name: "Analytics & BI", count: aiServices.filter(s => s.category === "Analytics & BI").length },
    { name: "Customer Service", count: aiServices.filter(s => s.category === "Customer Service").length },
    { name: "Content Creation", count: aiServices.filter(s => s.category === "Content Creation").length },
    { name: "Cybersecurity", count: aiServices.filter(s => s.category === "Cybersecurity").length },
    { name: "Data Analytics", count: aiServices.filter(s => s.category === "Data Analytics").length },
    { name: "Development Tools", count: aiServices.filter(s => s.category === "Development Tools").length },
    { name: "Marketing Automation", count: aiServices.filter(s => s.category === "Marketing Automation").length },
    { name: "Document Management", count: aiServices.filter(s => s.category === "Document Management").length },
    { name: "Sales & CRM", count: aiServices.filter(s => s.category === "Sales & CRM").length },
    { name: "Financial Services", count: aiServices.filter(s => s.category === "Financial Services").length },
    { name: "Healthcare AI", count: aiServices.filter(s => s.category === "Healthcare AI").length },
    { name: "Supply Chain", count: aiServices.filter(s => s.category === "Supply Chain").length }
  ];

  const stats = [
    { number: "1000+", label: "AI Models Deployed", icon: <Brain className="w-6 h-6" /> },
    { number: "99.9%", label: "Accuracy Rate", icon: <Award className="w-6 h-6" /> },
    { number: "24/7", label: "AI Monitoring", icon: <Clock className="w-6 h-6" /> },
    { number: "50+", label: "Industries Served", icon: <Globe className="w-6 h-6" /> }
  ];

  const useCases = [
    {
      title: "E-commerce Optimization",
      description: "AI-powered product recommendations, dynamic pricing, and inventory management",
      icon: <Globe className="w-6 h-6" />,
      color: "from-blue-500 to-cyan-500"
    },
    {
      title: "Healthcare Diagnostics",
      description: "Medical image analysis, symptom assessment, and treatment recommendations",
      icon: <Brain className="w-6 h-6" />,
      color: "from-red-500 to-pink-500"
    },
    {
      title: "Financial Services",
      description: "Fraud detection, risk assessment, and automated trading algorithms",
      icon: <DollarSign className="w-6 h-6" />,
      color: "from-green-500 to-emerald-500"
    },
    {
      title: "Manufacturing",
      description: "Predictive maintenance, quality control, and supply chain optimization",
      icon: <Settings className="w-6 h-6" />,
      color: "from-purple-500 to-violet-500"
    }
  ];

  return (
    <>
      <Helmet>
        <title>AI Services - Zion Tech Group | Artificial Intelligence Solutions</title>
        <meta
          name="description"
          content="Comprehensive AI services including business intelligence, customer support automation, content generation, cybersecurity, data analytics, and more. Transform your business with cutting-edge AI technology."
        />
        <meta
          name="keywords"
          content="AI services, artificial intelligence, machine learning, business intelligence, customer support automation, content generation, cybersecurity, data analytics, code assistant, marketing automation, document processing, CRM, financial analytics"
        />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 relative overflow-hidden">
        {/* Animated Background */}
        <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 via-purple-500/10 to-pink-500/10 animate-pulse"></div>
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_50%_50%,rgba(120,119,198,0.3),transparent_50%)]"></div>
        
        {/* Hero Section */}
        <section className="pt-32 pb-16 px-4 sm:px-6 lg:px-8 relative z-10">
          <ResponsiveContainer className="text-center">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-cyan-500/20 to-purple-500/20 border border-cyan-500/30 mb-6">
              <Sparkles className="w-4 h-4 text-cyan-400 mr-2" />
              <span className="text-cyan-400 text-sm font-medium">#1 AI Solutions Provider 2024</span>
            </div>
            
            <ResponsiveText
              as="h1"
              size="6xl"
              weight="bold"
              color="white"
              className="mb-6 leading-tight"
            >
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400">
                AI Services
              </span>
            </ResponsiveText>
            
            <ResponsiveText
              as="p"
              size="xl"
              color="gray"
              align="center"
              className="mb-8 max-w-4xl mx-auto leading-relaxed"
            >
              Transform your business with cutting-edge artificial intelligence solutions. 
              From intelligent automation to advanced analytics, we provide enterprise-grade AI services 
              that drive innovation and accelerate growth.
            </ResponsiveText>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
              <FuturisticButton
                href="/contact"
                variant="primary"
                size="lg"
                icon={<Sparkles className="w-5 h-5" />}
              >
                Get AI Consultation
              </FuturisticButton>
              <FuturisticButton
                href="/demo"
                variant="outline"
                size="lg"
                icon={<PlayCircle className="w-5 h-5" />}
              >
                Watch AI Demo
              </FuturisticButton>
            </div>
            
            {/* Stats */}
            <ResponsiveGrid cols={{ default: 2, md: 4 }} className="max-w-4xl mx-auto">
              {stats.map((stat, index) => (
                <div key={index} className="text-center group">
                  <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-r from-cyan-500/20 to-purple-500/20 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    {stat.icon}
                  </div>
                  <div className="text-2xl md:text-3xl font-bold text-white mb-2">{stat.number}</div>
                  <div className="text-gray-300 text-sm">{stat.label}</div>
                </div>
              ))}
            </ResponsiveGrid>
          </ResponsiveContainer>
        </section>

        {/* Use Cases Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 relative z-10">
          <ResponsiveContainer>
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                AI Use Cases Across Industries
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Discover how our AI solutions are transforming businesses across different sectors
              </p>
            </div>
            <ResponsiveGrid cols={{ default: 2, md: 4 }} className="gap-6">
              {useCases.map((useCase, index) => (
                <div
                  key={index}
                  className="group bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-cyan-500/10"
                >
                  <div
                    className={`w-12 h-12 rounded-lg bg-gradient-to-r ${useCase.color} flex items-center justify-center mb-4 mx-auto group-hover:scale-110 transition-transform duration-300`}
                  >
                    {useCase.icon}
                  </div>
                  <h3 className="text-lg font-semibold text-white mb-2 text-center group-hover:text-cyan-300 transition-colors">
                    {useCase.title}
                  </h3>
                  <p className="text-gray-300 text-center text-sm leading-relaxed">
                    {useCase.description}
                  </p>
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
                      ? 'bg-gradient-to-r from-cyan-500 to-purple-500 text-white shadow-lg'
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
              {aiServices.map((service, index) => (
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
                      <span className="text-xs bg-cyan-500/20 text-cyan-300 px-2 py-1 rounded-full border border-cyan-500/30">
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
                    
                    <div className="mt-auto space-y-2">
                      <div className="flex space-x-2">
                        <FuturisticButton
                          href={service.link}
                          variant="primary"
                          size="sm"
                          className="flex-1"
                          icon={<ArrowRight className="w-4 h-4" />}
                        >
                          Learn More
                        </FuturisticButton>
                        <FuturisticButton
                          href={service.demo}
                          variant="outline"
                          size="sm"
                          className="flex-1"
                          icon={<PlayCircle className="w-4 h-4" />}
                        >
                          Demo
                        </FuturisticButton>
                      </div>
                    </div>
                  </Link>
                </FuturisticCard>
              ))}
            </ResponsiveGrid>
          </ResponsiveContainer>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-cyan-900/30 to-purple-900/30 relative z-10">
          <ResponsiveContainer className="text-center">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
              Ready to Harness the Power of AI?
            </h2>
            <p className="text-xl text-gray-300 mb-8 leading-relaxed max-w-3xl mx-auto">
              Join thousands of businesses already using our AI solutions to drive innovation and growth. 
              Start your AI transformation journey today with our expert consultation and implementation services.
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
              <FuturisticButton
                href="/contact"
                variant="primary"
                size="lg"
                icon={<Sparkles className="w-5 h-5" />}
              >
                Get AI Consultation
              </FuturisticButton>
              <FuturisticButton
                href="/demo"
                variant="outline"
                size="lg"
                icon={<PlayCircle className="w-5 h-5" />}
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

export default AIServicesPage;
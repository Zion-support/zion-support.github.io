import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { 
  CpuChipIcon,
  ShieldCheckIcon,
  CloudIcon,
  ChartBarIcon,
  GlobeAltIcon,
  RocketLaunchIcon,
  ArrowRightIcon,
  CheckCircleIcon,
  PhoneIcon,
  EnvelopeIcon,
  CurrencyDollarIcon,
  ClockIcon,
  UserGroupIcon,
  CogIcon
} from '@heroicons/react/24/outline';

export default function MicroSaaSSolutionsPage() {
  const microSaaSProducts = [
    {
      title: "AI-Powered Analytics Dashboard",
      description: "Real-time business analytics with AI-driven insights and predictive modeling for data-driven decision making.",
      icon: ChartBarIcon,
      features: [
        "Real-time data visualization",
        "AI-powered insights",
        "Custom dashboard creation",
        "Automated reporting",
        "Multi-source data integration",
        "Mobile-responsive design"
      ],
      color: "from-blue-500 to-indigo-500",
      price: "$299/month",
      setupFee: "$1,500",
      benefits: ["40% faster insights", "Real-time updates", "Custom dashboards"],
      useCases: ["E-commerce analytics", "Marketing performance", "Financial reporting"],
      href: "/ai-analytics-dashboard"
    },
    {
      title: "AI Content Management System",
      description: "Intelligent content management with AI-powered optimization, SEO tools, and automated content generation.",
      icon: GlobeAltIcon,
      features: [
        "AI content generation",
        "SEO optimization",
        "Multi-language support",
        "Content scheduling",
        "Performance analytics",
        "Team collaboration tools"
      ],
      color: "from-green-500 to-emerald-500",
      price: "$199/month",
      setupFee: "$800",
      benefits: ["80% time savings", "SEO optimized", "Multi-language"],
      useCases: ["Blog management", "E-commerce content", "Marketing campaigns"],
      href: "/ai-content-management"
    },
    {
      title: "AI Customer Support Bot",
      description: "Intelligent customer support automation with natural language processing and sentiment analysis.",
      icon: PhoneIcon,
      features: [
        "24/7 AI chatbot",
        "Sentiment analysis",
        "Ticket automation",
        "Knowledge base integration",
        "Multi-channel support",
        "Performance analytics"
      ],
      color: "from-purple-500 to-pink-500",
      price: "$149/month",
      setupFee: "$600",
      benefits: ["24/7 availability", "Instant responses", "95% satisfaction"],
      useCases: ["Customer service", "Lead qualification", "FAQ automation"],
      href: "/ai-customer-support-bot"
    },
    {
      title: "AI Project Management Suite",
      description: "Smart project management with AI-powered task optimization, resource allocation, and deadline prediction.",
      icon: CogIcon,
      features: [
        "AI task optimization",
        "Resource allocation",
        "Deadline prediction",
        "Team collaboration",
        "Progress tracking",
        "Risk assessment"
      ],
      color: "from-orange-500 to-red-500",
      price: "$249/month",
      setupFee: "$1,200",
      benefits: ["30% efficiency gain", "Predictive planning", "Risk mitigation"],
      useCases: ["Software development", "Marketing campaigns", "Event planning"],
      href: "/ai-project-management"
    },
    {
      title: "AI E-commerce Optimizer",
      description: "Complete e-commerce optimization with AI-powered product recommendations, pricing strategies, and inventory management.",
      icon: ChartBarIcon,
      features: [
        "AI product recommendations",
        "Dynamic pricing",
        "Inventory optimization",
        "Customer segmentation",
        "Sales forecasting",
        "A/B testing tools"
      ],
      color: "from-cyan-500 to-blue-500",
      price: "$399/month",
      setupFee: "$2,000",
      benefits: ["25% sales increase", "Optimized pricing", "Reduced inventory costs"],
      useCases: ["Online stores", "Marketplace optimization", "Retail analytics"],
      href: "/ai-ecommerce-optimizer"
    },
    {
      title: "AI HR Management System",
      description: "Intelligent HR management with AI-powered recruitment, employee analytics, and performance optimization.",
      icon: UserGroupIcon,
      features: [
        "AI resume screening",
        "Employee analytics",
        "Performance tracking",
        "Training recommendations",
        "Retention prediction",
        "Compliance monitoring"
      ],
      color: "from-teal-500 to-green-500",
      price: "$179/month",
      setupFee: "$900",
      benefits: ["50% faster hiring", "Reduced turnover", "Better performance"],
      useCases: ["Recruitment", "Performance management", "Employee development"],
      href: "/ai-hr-management"
    },
    {
      title: "AI Financial Analytics",
      description: "Advanced financial analytics with AI-powered forecasting, risk assessment, and automated reporting.",
      icon: CurrencyDollarIcon,
      features: [
        "Financial forecasting",
        "Risk assessment",
        "Automated reporting",
        "Expense tracking",
        "Investment analysis",
        "Compliance monitoring"
      ],
      color: "from-emerald-500 to-teal-500",
      price: "$329/month",
      setupFee: "$1,500",
      benefits: ["Accurate forecasting", "Risk mitigation", "Automated compliance"],
      useCases: ["Financial planning", "Investment analysis", "Risk management"],
      href: "/ai-financial-analytics"
    },
    {
      title: "AI Marketing Automation",
      description: "Comprehensive marketing automation with AI-powered campaign optimization, lead scoring, and personalization.",
      icon: RocketLaunchIcon,
      features: [
        "AI campaign optimization",
        "Lead scoring",
        "Email personalization",
        "Social media automation",
        "ROI tracking",
        "A/B testing"
      ],
      color: "from-pink-500 to-rose-500",
      price: "$279/month",
      setupFee: "$1,200",
      benefits: ["300% ROI increase", "Personalized campaigns", "Automated optimization"],
      useCases: ["Email marketing", "Social media", "Lead generation"],
      href: "/ai-marketing-automation"
    },
    {
      title: "AI Inventory Management",
      description: "Smart inventory management with AI-powered demand forecasting, automated reordering, and optimization.",
      icon: CloudIcon,
      features: [
        "Demand forecasting",
        "Automated reordering",
        "Inventory optimization",
        "Supplier management",
        "Cost analysis",
        "Real-time tracking"
      ],
      color: "from-violet-500 to-purple-500",
      price: "$219/month",
      setupFee: "$1,000",
      benefits: ["30% cost reduction", "Zero stockouts", "Optimized inventory"],
      useCases: ["Retail management", "Manufacturing", "Supply chain"],
      href: "/ai-inventory-management"
    },
    {
      title: "AI Document Processing",
      description: "Intelligent document processing with AI-powered OCR, data extraction, and automated workflow management.",
      icon: ShieldCheckIcon,
      features: [
        "AI OCR technology",
        "Data extraction",
        "Workflow automation",
        "Document classification",
        "Version control",
        "Security compliance"
      ],
      color: "from-indigo-500 to-blue-500",
      price: "$159/month",
      setupFee: "$700",
      benefits: ["90% accuracy", "80% time savings", "Automated workflows"],
      useCases: ["Document management", "Data entry", "Compliance processing"],
      href: "/ai-document-processing"
    },
    {
      title: "AI Social Media Manager",
      description: "Intelligent social media management with AI-powered content creation, scheduling, and engagement optimization.",
      icon: GlobeAltIcon,
      features: [
        "AI content creation",
        "Optimal posting times",
        "Engagement optimization",
        "Hashtag suggestions",
        "Performance analytics",
        "Multi-platform management"
      ],
      color: "from-rose-500 to-pink-500",
      price: "$129/month",
      setupFee: "$500",
      benefits: ["200% engagement increase", "Automated posting", "Optimized timing"],
      useCases: ["Social media marketing", "Brand management", "Community building"],
      href: "/ai-social-media-manager"
    },
    {
      title: "AI Email Marketing Suite",
      description: "Advanced email marketing with AI-powered personalization, send time optimization, and performance analytics.",
      icon: EnvelopeIcon,
      features: [
        "AI personalization",
        "Send time optimization",
        "Subject line testing",
        "Segmentation",
        "Performance analytics",
        "A/B testing"
      ],
      color: "from-amber-500 to-orange-500",
      price: "$99/month",
      setupFee: "$400",
      benefits: ["40% open rates", "Personalized content", "Optimized timing"],
      useCases: ["Email campaigns", "Newsletter management", "Lead nurturing"],
      href: "/ai-email-marketing"
    },
    {
      title: "AI Voice Assistant Platform",
      description: "Custom voice assistant solution with natural language processing, multi-language support, and business integration.",
      icon: PhoneIcon,
      features: [
        "Natural language processing",
        "Multi-language support",
        "Custom voice training",
        "Business integrations",
        "Analytics dashboard",
        "API access"
      ],
      color: "from-violet-500 to-purple-500",
      price: "$399/month",
      setupFee: "$2,500",
      benefits: ["95% accuracy", "24/7 availability", "Multi-language"],
      useCases: ["Customer service", "Voice commands", "Accessibility"],
      href: "/ai-voice-assistant"
    },
    {
      title: "AI Video Analytics Platform",
      description: "Advanced video analytics with AI-powered content analysis, engagement tracking, and performance optimization.",
      icon: ChartBarIcon,
      features: [
        "Content analysis",
        "Engagement tracking",
        "Sentiment analysis",
        "Performance metrics",
        "Automated insights",
        "Real-time monitoring"
      ],
      color: "from-red-500 to-pink-500",
      price: "$349/month",
      setupFee: "$1,800",
      benefits: ["Real-time insights", "Automated analysis", "Performance boost"],
      useCases: ["Video marketing", "Content optimization", "Audience analysis"],
      href: "/ai-video-analytics"
    },
    {
      title: "AI Legal Document Analyzer",
      description: "Intelligent legal document analysis with contract review, compliance checking, and risk assessment.",
      icon: ShieldCheckIcon,
      features: [
        "Contract analysis",
        "Compliance checking",
        "Risk assessment",
        "Legal research",
        "Document comparison",
        "Automated summaries"
      ],
      color: "from-slate-500 to-gray-500",
      price: "$599/month",
      setupFee: "$3,000",
      benefits: ["90% time savings", "Risk reduction", "Compliance assurance"],
      useCases: ["Legal firms", "Contract management", "Compliance"],
      href: "/ai-legal-analyzer"
    },
    {
      title: "AI Real Estate Assistant",
      description: "Comprehensive real estate management with property valuation, market analysis, and lead generation.",
      icon: GlobeAltIcon,
      features: [
        "Property valuation",
        "Market analysis",
        "Lead generation",
        "Price optimization",
        "Investment insights",
        "Client management"
      ],
      color: "from-emerald-500 to-teal-500",
      price: "$279/month",
      setupFee: "$1,500",
      benefits: ["Accurate valuations", "Market insights", "Lead generation"],
      useCases: ["Real estate agents", "Property management", "Investment analysis"],
      href: "/ai-real-estate"
    },
    {
      title: "AI Healthcare Analytics",
      description: "Advanced healthcare analytics with patient insights, treatment optimization, and predictive diagnostics.",
      icon: CpuChipIcon,
      features: [
        "Patient analytics",
        "Treatment optimization",
        "Predictive diagnostics",
        "Health monitoring",
        "Risk assessment",
        "Compliance tracking"
      ],
      color: "from-green-500 to-emerald-500",
      price: "$799/month",
      setupFee: "$4,000",
      benefits: ["Improved outcomes", "Risk reduction", "Cost savings"],
      useCases: ["Hospitals", "Clinics", "Health systems"],
      href: "/ai-healthcare-analytics"
    },
    {
      title: "AI Supply Chain Optimizer",
      description: "Intelligent supply chain management with demand forecasting, route optimization, and cost reduction.",
      icon: CloudIcon,
      features: [
        "Demand forecasting",
        "Route optimization",
        "Cost analysis",
        "Supplier management",
        "Risk assessment",
        "Performance tracking"
      ],
      color: "from-blue-500 to-indigo-500",
      price: "$449/month",
      setupFee: "$2,200",
      benefits: ["20% cost reduction", "Optimized routes", "Risk mitigation"],
      useCases: ["Logistics", "Manufacturing", "Retail"],
      href: "/ai-supply-chain"
    },
    {
      title: "AI Energy Management System",
      description: "Smart energy management with consumption optimization, cost reduction, and sustainability tracking.",
      icon: CogIcon,
      features: [
        "Consumption optimization",
        "Cost analysis",
        "Sustainability tracking",
        "Predictive maintenance",
        "Energy forecasting",
        "Carbon footprint"
      ],
      color: "from-yellow-500 to-orange-500",
      price: "$329/month",
      setupFee: "$1,800",
      benefits: ["30% energy savings", "Cost reduction", "Sustainability"],
      useCases: ["Manufacturing", "Buildings", "Utilities"],
      href: "/ai-energy-management"
    },
    {
      title: "AI Fraud Detection System",
      description: "Advanced fraud detection with real-time monitoring, pattern recognition, and automated alerts.",
      icon: ShieldCheckIcon,
      features: [
        "Real-time monitoring",
        "Pattern recognition",
        "Automated alerts",
        "Risk scoring",
        "Transaction analysis",
        "Compliance reporting"
      ],
      color: "from-red-500 to-rose-500",
      price: "$499/month",
      setupFee: "$2,500",
      benefits: ["99.9% accuracy", "Real-time detection", "Cost savings"],
      useCases: ["Banking", "E-commerce", "Financial services"],
      href: "/ai-fraud-detection"
    },
    {
      title: "AI Learning Management System",
      description: "Intelligent learning platform with personalized content, progress tracking, and adaptive learning paths.",
      icon: UserGroupIcon,
      features: [
        "Personalized content",
        "Progress tracking",
        "Adaptive learning",
        "Skill assessment",
        "Certification management",
        "Analytics dashboard"
      ],
      color: "from-indigo-500 to-purple-500",
      price: "$199/month",
      setupFee: "$1,000",
      benefits: ["Personalized learning", "Better outcomes", "Engagement boost"],
      useCases: ["Education", "Corporate training", "Online courses"],
      href: "/ai-learning-management"
    },
    {
      title: "AI Quality Assurance Platform",
      description: "Automated quality assurance with AI-powered testing, defect detection, and performance monitoring.",
      icon: CheckCircleIcon,
      features: [
        "Automated testing",
        "Defect detection",
        "Performance monitoring",
        "Code analysis",
        "Test generation",
        "Quality metrics"
      ],
      color: "from-teal-500 to-cyan-500",
      price: "$379/month",
      setupFee: "$1,900",
      benefits: ["90% test coverage", "Faster delivery", "Quality improvement"],
      useCases: ["Software development", "Manufacturing", "Quality control"],
      href: "/ai-quality-assurance"
    },
    {
      title: "AI Event Management Suite",
      description: "Comprehensive event management with AI-powered planning, attendee insights, and performance optimization.",
      icon: RocketLaunchIcon,
      features: [
        "Event planning",
        "Attendee insights",
        "Performance optimization",
        "Registration management",
        "Networking facilitation",
        "Analytics dashboard"
      ],
      color: "from-pink-500 to-rose-500",
      price: "$249/month",
      setupFee: "$1,200",
      benefits: ["Better engagement", "Optimized planning", "Success metrics"],
      useCases: ["Conferences", "Webinars", "Corporate events"],
      href: "/ai-event-management"
    }
  ];

  return (
    <>
      <Helmet>
        <title>Micro SaaS Solutions - Zion Tech Group</title>
        <meta name="description" content="Comprehensive micro SaaS solutions including AI-powered analytics, content management, customer support, project management, and more. Transform your business with intelligent software solutions." />
        <meta name="keywords" content="micro SaaS, AI-powered software, business automation, analytics dashboard, content management, customer support, project management" />
      </Helmet>
      
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-slate-900 via-cyan-900 to-slate-900">
        <div className="absolute inset-0 bg-gradient-to-r from-cyan-600/20 to-blue-600/20"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
              Micro SaaS Solutions
            </h1>
            <p className="text-xl text-gray-300 mb-8 leading-relaxed">
              Intelligent software solutions designed to solve specific business challenges
            </p>
            <p className="text-lg text-gray-400 max-w-3xl mx-auto">
              Our comprehensive suite of AI-powered micro SaaS applications helps businesses automate processes, gain insights, and scale efficiently with cost-effective, specialized solutions.
            </p>
          </div>
        </div>
      </section>

      {/* Micro SaaS Products Grid */}
      <section className="py-20 bg-slate-900">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {microSaaSProducts.map((product, index) => {
              const Icon = product.icon;
              return (
                <div key={product.title} className="group bg-gradient-to-br from-slate-800 to-slate-700 p-8 rounded-xl border border-slate-600 hover:border-cyan-500 transition-all duration-300 hover:transform hover:scale-105 hover:shadow-2xl hover:shadow-cyan-500/20">
                  <div className={`w-16 h-16 bg-gradient-to-r ${product.color} rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
                    <Icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-4">{product.title}</h3>
                  <p className="text-gray-300 mb-4 leading-relaxed">
                    {product.description}
                  </p>
                  
                  {/* Pricing */}
                  <div className="mb-4">
                    <span className="text-2xl font-bold text-green-400">{product.price}</span>
                    <span className="text-sm text-gray-400 ml-2">+ {product.setupFee} setup</span>
                  </div>
                  
                  {/* Benefits */}
                  <div className="mb-6">
                    <h4 className="text-sm font-semibold text-gray-400 mb-2">Key Benefits:</h4>
                    <div className="flex flex-wrap gap-2">
                      {product.benefits.map((benefit, benefitIndex) => (
                        <span key={benefitIndex} className="text-xs bg-green-900/30 text-green-300 px-2 py-1 rounded-full">
                          {benefit}
                        </span>
                      ))}
                    </div>
                  </div>
                  
                  {/* Use Cases */}
                  <div className="mb-6">
                    <h4 className="text-sm font-semibold text-gray-400 mb-2">Perfect for:</h4>
                    <div className="flex flex-wrap gap-2">
                      {product.useCases.map((useCase, useCaseIndex) => (
                        <span key={useCaseIndex} className="text-xs bg-blue-900/30 text-blue-300 px-2 py-1 rounded-full">
                          {useCase}
                        </span>
                      ))}
                    </div>
                  </div>
                  
                  <ul className="space-y-2 mb-6">
                    {product.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-gray-300">
                        <CheckCircleIcon className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" />
                        <span className="text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  
                  <div className="flex gap-2">
                    <Link
                      to={product.href}
                      className="flex-1 inline-flex items-center justify-center gap-2 text-cyan-400 hover:text-cyan-300 font-semibold group-hover:gap-3 transition-all border border-cyan-400 px-4 py-2 rounded-lg hover:bg-cyan-400/10"
                    >
                      Learn More <ArrowRightIcon className="w-4 h-4" />
                    </Link>
                    <Link
                      to="/contact"
                      className="bg-gradient-to-r from-cyan-600 to-blue-600 text-white px-4 py-2 rounded-lg hover:from-cyan-700 hover:to-blue-700 transition-all duration-300 font-semibold"
                    >
                      Get Started
                    </Link>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Why Choose Our Micro SaaS Solutions */}
      <section className="py-20 bg-gradient-to-r from-slate-900 to-cyan-900">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Why Choose Our Micro SaaS Solutions?
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Built for modern businesses with cutting-edge AI technology and enterprise-grade security
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
            <div className="text-center">
              <div className="w-20 h-20 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full flex items-center justify-center mx-auto mb-6">
                <CpuChipIcon className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">AI-Powered</h3>
              <p className="text-gray-300">
                Every solution is enhanced with advanced AI capabilities for superior performance and automation.
              </p>
            </div>
            <div className="text-center">
              <div className="w-20 h-20 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full flex items-center justify-center mx-auto mb-6">
                <ClockIcon className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">Quick Setup</h3>
              <p className="text-gray-300">
                Get up and running in minutes with our streamlined onboarding and automated setup process.
              </p>
            </div>
            <div className="text-center">
              <div className="w-20 h-20 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center mx-auto mb-6">
                <ShieldCheckIcon className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">Secure & Reliable</h3>
              <p className="text-gray-300">
                Enterprise-grade security with 99.9% uptime guarantee and comprehensive data protection.
              </p>
            </div>
            <div className="text-center">
              <div className="w-20 h-20 bg-gradient-to-r from-orange-500 to-red-500 rounded-full flex items-center justify-center mx-auto mb-6">
                <CogIcon className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">Scalable</h3>
              <p className="text-gray-300">
                Solutions that grow with your business, from startup to enterprise scale.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Implementation Process */}
      <section className="py-20 bg-slate-900">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Simple Implementation Process
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Get your micro SaaS solution up and running in just a few steps
            </p>
          </div>
          <div className="grid md:grid-cols-4 gap-8 max-w-6xl mx-auto">
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-white font-bold text-xl">1</span>
              </div>
              <h3 className="text-xl font-bold text-white mb-4">Choose Your Solution</h3>
              <p className="text-gray-300">
                Select the micro SaaS solution that best fits your business needs and requirements.
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-white font-bold text-xl">2</span>
              </div>
              <h3 className="text-xl font-bold text-white mb-4">Quick Setup</h3>
              <p className="text-gray-300">
                Our team handles the technical setup and configuration for your specific use case.
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-white font-bold text-xl">3</span>
              </div>
              <h3 className="text-xl font-bold text-white mb-4">Training & Onboarding</h3>
              <p className="text-gray-300">
                We provide comprehensive training and support to get your team up to speed quickly.
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-orange-500 to-red-500 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-white font-bold text-xl">4</span>
              </div>
              <h3 className="text-xl font-bold text-white mb-4">Go Live & Scale</h3>
              <p className="text-gray-300">
                Launch your solution and scale as your business grows with ongoing support.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-slate-900 to-cyan-900">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-8">
              Ready to Transform Your Business?
            </h2>
            <p className="text-xl text-gray-300 mb-12">
              Let's discuss which micro SaaS solution is perfect for your business needs
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <Link
                to="/contact"
                className="bg-gradient-to-r from-cyan-600 to-blue-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-cyan-700 hover:to-blue-700 transition-all duration-300 transform hover:scale-105 flex items-center justify-center gap-2"
              >
                Get Free Consultation
                <ArrowRightIcon className="w-5 h-5" />
              </Link>
              <Link
                to="/demo"
                className="border-2 border-cyan-400 text-cyan-300 px-8 py-4 rounded-lg font-semibold hover:bg-cyan-400 hover:text-white transition-all duration-300 flex items-center justify-center gap-2"
              >
                Schedule Demo
                <ArrowRightIcon className="w-5 h-5" />
              </Link>
            </div>
            <div className="flex flex-col sm:flex-row gap-8 justify-center items-center text-gray-300">
              <div className="flex items-center gap-3">
                <PhoneIcon className="w-6 h-6 text-cyan-400" />
                <span>+1-302-464-0950</span>
              </div>
              <div className="flex items-center gap-3">
                <EnvelopeIcon className="w-6 h-6 text-cyan-400" />
                <span>kleber@ziontechgroup.com</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
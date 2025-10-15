import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Zap, 
  Brain, 
  Shield, 
  BarChart3, 
  Users, 
  Clock, 
  CheckCircle, 
  ArrowRight, 
  Star,
  Cloud,
  Smartphone,
  Database,
  Globe,
  Lock,
  Cpu,
  MessageSquare,
  Eye,
  FileText,
  Mail,
  Settings,
  TrendingUp,
  Target,
  Layers,
  Workflow,
  Bot,
  Code,
  Server,
  Wifi,
  Monitor,
  Headphones,
  CreditCard,
  Calendar,
  FileImage,
  Video,
  Music,
  ShoppingCart,
  Truck,
  Home,
  Building,
  Car,
  Heart,
  BookOpen,
  GraduationCap,
  Briefcase,
  Camera,
  Gamepad2,
  Palette,
  Mic,
  Search,
  Filter,
  Download,
  Upload,
  Share2,
  ThumbsUp,
  MessageCircle,
  Bell,
  User,
  Key,
  MapPin,
  Phone,
  Email,
  Web,
  Package,
  Scale
} from 'lucide-react';

const Services: React.FC = () => {
  const microSaasServices = [
    {
      name: "AI Content Writer Pro",
      description: "Advanced AI-powered content creation with SEO optimization, brand voice customization, and multi-language support.",
      features: ["Natural language generation", "SEO optimization", "Multi-language support", "Brand voice customization", "Plagiarism detection", "Content scheduling"],
      price: "$49/month",
      marketPrice: "$99/month",
      savings: "50% off",
      popular: true,
      icon: <FileText className="w-8 h-8" />,
      category: "Content Creation",
      link: "/ai-content-generation-pro"
    },
    {
      name: "AI Analytics Dashboard Pro",
      description: "Comprehensive business intelligence with real-time data visualization, AI insights, and predictive analytics.",
      features: ["Real-time analytics", "AI-powered insights", "Custom reports", "Data export", "Team collaboration", "Mobile app"],
      price: "$99/month",
      marketPrice: "$199/month",
      savings: "50% off",
      popular: false,
      icon: <BarChart3 className="w-8 h-8" />,
      category: "Analytics",
      link: "/ai-analytics-dashboard-pro"
    },
    {
      name: "AI Security Shield Pro",
      description: "Enterprise-grade security monitoring with AI-powered threat detection and automated response.",
      features: ["24/7 AI monitoring", "Threat detection", "Compliance reporting", "Incident response", "Security scoring", "Risk assessment"],
      price: "$149/month",
      marketPrice: "$299/month",
      savings: "50% off",
      popular: false,
      icon: <Shield className="w-8 h-8" />,
      category: "Security",
      link: "/ai-security-solutions"
    },
    {
      name: "AI Project Manager Pro",
      description: "Intelligent project management with AI-powered task optimization and resource allocation.",
      features: ["Smart scheduling", "Resource optimization", "Progress tracking", "Team communication", "Risk prediction", "Budget management"],
      price: "$79/month",
      marketPrice: "$159/month",
      savings: "50% off",
      popular: false,
      icon: <Users className="w-8 h-8" />,
      category: "Project Management",
      link: "/ai-project-manager"
    },
    {
      name: "AI Email Marketing Pro",
      description: "Intelligent email marketing platform with AI-powered personalization and automated campaigns.",
      features: ["AI personalization", "A/B testing", "Automated campaigns", "Analytics", "List management", "Template library"],
      price: "$69/month",
      marketPrice: "$139/month",
      savings: "50% off",
      popular: false,
      icon: <Mail className="w-8 h-8" />,
      category: "Marketing",
      link: "/ai-email-marketing"
    },
    {
      name: "AI Customer Support Pro",
      description: "Advanced AI-powered customer support with chatbots, ticket management, and sentiment analysis.",
      features: ["AI chatbots", "Ticket management", "Sentiment analysis", "Knowledge base", "Multi-channel support", "Performance analytics"],
      price: "$89/month",
      marketPrice: "$179/month",
      savings: "50% off",
      popular: false,
      icon: <MessageSquare className="w-8 h-8" />,
      category: "Customer Support",
      link: "/ai-chatbot-builder"
    },
    {
      name: "AI Document Processor Pro",
      description: "Intelligent document processing with OCR, data extraction, and automated workflow management.",
      features: ["OCR processing", "Data extraction", "Document classification", "Workflow automation", "Version control", "Collaboration tools"],
      price: "$59/month",
      marketPrice: "$119/month",
      savings: "50% off",
      popular: false,
      icon: <FileText className="w-8 h-8" />,
      category: "Document Management",
      link: "/ai-document-processor"
    },
    {
      name: "AI Social Media Manager Pro",
      description: "Comprehensive social media management with AI-powered content creation and scheduling.",
      features: ["Content creation", "Post scheduling", "Analytics tracking", "Engagement optimization", "Multi-platform support", "Trend analysis"],
      price: "$79/month",
      marketPrice: "$159/month",
      savings: "50% off",
      popular: false,
      icon: <Share2 className="w-8 h-8" />,
      category: "Social Media",
      link: "/ai-social-media-manager"
    },
    {
      name: "AI Inventory Manager Pro",
      description: "Smart inventory management with predictive analytics and automated reordering.",
      features: ["Predictive analytics", "Automated reordering", "Stock optimization", "Demand forecasting", "Multi-location support", "Integration APIs"],
      price: "$89/month",
      marketPrice: "$179/month",
      savings: "50% off",
      popular: false,
      icon: <Package className="w-8 h-8" />,
      category: "Inventory Management",
      link: "/ai-inventory-manager"
    },
    {
      name: "AI Financial Advisor Pro",
      description: "AI-powered financial planning and investment analysis with personalized recommendations.",
      features: ["Financial planning", "Investment analysis", "Risk assessment", "Portfolio optimization", "Tax planning", "Retirement planning"],
      price: "$129/month",
      marketPrice: "$259/month",
      savings: "50% off",
      popular: false,
      icon: <TrendingUp className="w-8 h-8" />,
      category: "Finance",
      link: "/ai-financial-advisor"
    },
    {
      name: "AI HR Assistant Pro",
      description: "Intelligent human resources management with recruitment, performance tracking, and employee engagement.",
      features: ["Recruitment automation", "Performance tracking", "Employee engagement", "Payroll management", "Benefits administration", "Compliance monitoring"],
      price: "$99/month",
      marketPrice: "$199/month",
      savings: "50% off",
      popular: false,
      icon: <Users className="w-8 h-8" />,
      category: "Human Resources",
      link: "/ai-hr-assistant"
    },
    {
      name: "AI Legal Assistant Pro",
      description: "AI-powered legal document analysis, contract review, and compliance monitoring.",
      features: ["Contract analysis", "Legal research", "Compliance monitoring", "Document review", "Case management", "Legal writing assistance"],
      price: "$149/month",
      marketPrice: "$299/month",
      savings: "50% off",
      popular: false,
      icon: <Scale className="w-8 h-8" />,
      category: "Legal",
      link: "/ai-legal-assistant"
    }
  ];

  const itServices = [
    {
      name: "Cloud Migration Services",
      description: "Seamless migration to cloud platforms with zero downtime and enhanced security.",
      features: ["AWS/Azure/GCP migration", "Data migration", "Application modernization", "Security implementation", "Performance optimization", "24/7 support"],
      price: "Starting at $5,000",
      icon: <Cloud className="w-8 h-8" />,
      category: "Cloud Services",
      link: "/cloud-migration-services"
    },
    {
      name: "Cybersecurity Consulting",
      description: "Comprehensive security assessment and implementation of enterprise-grade protection.",
      features: ["Security audit", "Penetration testing", "Compliance consulting", "Incident response", "Security training", "Ongoing monitoring"],
      price: "Starting at $3,000",
      icon: <Shield className="w-8 h-8" />,
      category: "Security",
      link: "/cybersecurity-consulting"
    },
    {
      name: "DevOps Solutions",
      description: "Complete DevOps implementation with CI/CD pipelines and infrastructure automation.",
      features: ["CI/CD pipelines", "Infrastructure as Code", "Container orchestration", "Monitoring & logging", "Automated testing", "Deployment automation"],
      price: "Starting at $4,000",
      icon: <Settings className="w-8 h-8" />,
      category: "DevOps",
      link: "/devops-solutions"
    },
    {
      name: "Mobile App Development",
      description: "Native and cross-platform mobile applications with modern UI/UX design.",
      features: ["iOS & Android apps", "Cross-platform development", "UI/UX design", "API integration", "App store optimization", "Maintenance & support"],
      price: "Starting at $8,000",
      icon: <Smartphone className="w-8 h-8" />,
      category: "Mobile Development",
      link: "/mobile-app-development"
    },
    {
      name: "Web Application Development",
      description: "Custom web applications with modern frameworks and responsive design.",
      features: ["Custom web apps", "Responsive design", "Database integration", "API development", "Performance optimization", "SEO optimization"],
      price: "Starting at $6,000",
      icon: <Globe className="w-8 h-8" />,
      category: "Web Development",
      link: "/web-application-development"
    },
    {
      name: "Database Solutions",
      description: "Database design, optimization, and migration services for optimal performance.",
      features: ["Database design", "Performance optimization", "Data migration", "Backup & recovery", "Security implementation", "Monitoring & maintenance"],
      price: "Starting at $2,500",
      icon: <Database className="w-8 h-8" />,
      category: "Database",
      link: "/database-solutions"
    }
  ];

  const aiServices = [
    {
      name: "Machine Learning Solutions",
      description: "Custom ML models and algorithms tailored to your specific business needs.",
      features: ["Predictive analytics", "Pattern recognition", "Custom model training", "Real-time inference", "Model deployment", "Performance monitoring"],
      price: "Starting at $10,000",
      icon: <Brain className="w-8 h-8" />,
      category: "Machine Learning",
      link: "/machine-learning-solutions"
    },
    {
      name: "Computer Vision",
      description: "Advanced image and video analysis for automation and intelligent decision making.",
      features: ["Object detection", "Facial recognition", "OCR processing", "Video analytics", "Image classification", "Real-time processing"],
      price: "Starting at $8,000",
      icon: <Eye className="w-8 h-8" />,
      category: "Computer Vision",
      link: "/computer-vision-solutions"
    },
    {
      name: "Natural Language Processing",
      description: "Transform text and speech data into actionable insights with advanced NLP.",
      features: ["Sentiment analysis", "Language translation", "Text summarization", "Chatbot development", "Voice recognition", "Text classification"],
      price: "Starting at $7,000",
      icon: <MessageSquare className="w-8 h-8" />,
      category: "NLP",
      link: "/nlp-solutions"
    },
    {
      name: "AI Automation",
      description: "Intelligent automation solutions that streamline workflows and reduce manual processes.",
      features: ["Process automation", "Workflow optimization", "Decision automation", "Integration APIs", "RPA implementation", "Business process analysis"],
      price: "Starting at $6,000",
      icon: <Zap className="w-8 h-8" />,
      category: "Automation",
      link: "/ai-automation-solutions"
    },
    {
      name: "Predictive Analytics",
      description: "Leverage historical data to predict future trends and make informed decisions.",
      features: ["Trend forecasting", "Risk assessment", "Performance prediction", "Scenario modeling", "Data visualization", "Statistical analysis"],
      price: "Starting at $9,000",
      icon: <TrendingUp className="w-8 h-8" />,
      category: "Analytics",
      link: "/predictive-analytics-solutions"
    },
    {
      name: "AI Security Solutions",
      description: "Advanced AI-powered security systems to protect your digital assets.",
      features: ["Threat detection", "Anomaly detection", "Behavioral analysis", "Incident response", "Security scoring", "Risk assessment"],
      price: "Starting at $12,000",
      icon: <Shield className="w-8 h-8" />,
      category: "Security",
      link: "/ai-security-solutions"
    }
  ];

  const categories = [
    { name: "Micro SAAS", services: microSaasServices, color: "from-cyan-500 to-blue-600" },
    { name: "IT Services", services: itServices, color: "from-purple-500 to-pink-600" },
    { name: "AI Services", services: aiServices, color: "from-green-500 to-teal-600" }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400">Services</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Comprehensive AI, IT, and micro SAAS solutions designed to transform your business and drive growth.
          </p>
        </div>

        {categories.map((category, categoryIndex) => (
          <div key={categoryIndex} className="mb-20">
            <div className="text-center mb-12">
              <h3 className={`text-3xl font-bold bg-gradient-to-r ${category.color} bg-clip-text text-transparent mb-4`}>
                {category.name}
              </h3>
              <p className="text-gray-300 max-w-2xl mx-auto">
                {category.name === "Micro SAAS" && "AI-powered micro SAAS solutions for modern businesses"}
                {category.name === "IT Services" && "Comprehensive IT services and infrastructure solutions"}
                {category.name === "AI Services" && "Advanced artificial intelligence and machine learning solutions"}
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {category.services.map((service, serviceIndex) => (
                <div key={serviceIndex} className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:border-cyan-500/40 transition-all duration-300 group">
                  <div className="text-cyan-400 mb-4">
                    {service.icon}
                  </div>
                  
                  <h4 className="text-xl font-bold text-white mb-3 group-hover:text-cyan-400 transition-colors">
                    {service.name}
                  </h4>
                  
                  <p className="text-gray-300 text-sm mb-4 line-clamp-3">
                    {service.description}
                  </p>

                  <div className="mb-4">
                    <span className="inline-block px-2 py-1 bg-cyan-500/20 text-cyan-400 text-xs rounded-full">
                      {service.category}
                    </span>
                  </div>

                  <div className="mb-4">
                    <div className="flex items-center space-x-2">
                      <span className="text-lg font-bold text-white">{service.price}</span>
                      {service.marketPrice && (
                        <>
                          <span className="text-sm text-gray-400 line-through">{service.marketPrice}</span>
                          <span className="bg-green-500 text-white px-2 py-1 rounded text-xs font-semibold">{service.savings}</span>
                        </>
                      )}
                    </div>
                  </div>

                  <Link
                    to={service.link}
                    className="w-full bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-4 py-2 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 flex items-center justify-center text-sm"
                  >
                    Learn More
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Link>
                </div>
              ))}
            </div>

            <div className="text-center mt-8">
              <Link
                to={category.name === "Micro SAAS" ? "/micro-saas" : category.name === "IT Services" ? "/it-services" : "/ai-services"}
                className={`inline-flex items-center px-6 py-3 bg-gradient-to-r ${category.color} text-white rounded-lg font-semibold hover:opacity-90 transition-all duration-300`}
              >
                View All {category.name}
                <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
            </div>
          </div>
        ))}

        {/* CTA Section */}
        <div className="bg-gradient-to-r from-cyan-600 to-purple-600 rounded-2xl p-12 text-center mt-16">
          <h3 className="text-3xl font-bold text-white mb-4">Ready to Get Started?</h3>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Contact us today for a free consultation and discover how our solutions can transform your business.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="bg-white text-cyan-600 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-gray-100 transition-all duration-300"
            >
              Get Free Consultation
            </Link>
            <Link
              to="/pricing"
              className="border-2 border-white text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-white hover:text-cyan-600 transition-all duration-300"
            >
              View Pricing
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;

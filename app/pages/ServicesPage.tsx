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
  CogIcon,
  EyeIcon,
  ChatBubbleLeftRightIcon,
  DocumentTextIcon,
  LightBulbIcon,
  CodeBracketIcon,
  ServerIcon,
  LockClosedIcon,
  WrenchScrewdriverIcon,
  PresentationChartLineIcon,
  DevicePhoneMobileIcon,
  BeakerIcon,
  AcademicCapIcon,
  BuildingOfficeIcon,
  HeartIcon,
  TruckIcon,
  HomeIcon,
  ShoppingCartIcon,
  BanknotesIcon,
  ClipboardDocumentListIcon,
  UserIcon,
  Cog6ToothIcon,
  SparklesIcon,
  BoltIcon,
  FireIcon,
  StarIcon
} from '@heroicons/react/24/outline';

const ServicesPage: React.FC = () => {
  const mainServices = [
    {
      title: "AI Solutions",
      description: "Cutting-edge artificial intelligence solutions to transform your business operations and decision-making processes.",
      icon: CpuChipIcon,
      href: "/ai-solutions",
      color: "from-blue-500 to-cyan-500",
      features: ["Machine Learning", "Natural Language Processing", "Computer Vision", "Predictive Analytics"],
      price: "Starting at $2,500/month"
    },
    {
      title: "IT Services",
      description: "Comprehensive information technology services including infrastructure, support, and digital transformation.",
      icon: ServerIcon,
      href: "/it-solutions",
      color: "from-green-500 to-emerald-500",
      features: ["Infrastructure Management", "Cloud Migration", "System Integration", "Technical Support"],
      price: "Starting at $1,800/month"
    },
    {
      title: "Cloud Infrastructure",
      description: "Scalable and secure cloud infrastructure solutions designed for modern businesses of all sizes.",
      icon: CloudIcon,
      href: "/cloud-infrastructure",
      color: "from-purple-500 to-pink-500",
      features: ["AWS/Azure/GCP", "Auto-scaling", "Disaster Recovery", "Security Compliance"],
      price: "Starting at $1,200/month"
    },
    {
      title: "Cybersecurity",
      description: "Advanced cybersecurity solutions to protect your digital assets and ensure business continuity.",
      icon: ShieldCheckIcon,
      href: "/cybersecurity",
      color: "from-red-500 to-orange-500",
      features: ["Threat Detection", "Vulnerability Assessment", "Incident Response", "Compliance"],
      price: "Starting at $3,000/month"
    },
    {
      title: "Digital Transformation",
      description: "Complete digital transformation services to modernize your business processes and technology stack.",
      icon: RocketLaunchIcon,
      href: "/digital-transformation",
      color: "from-indigo-500 to-purple-500",
      features: ["Process Automation", "Legacy Modernization", "Change Management", "Training"],
      price: "Starting at $5,000/month"
    },
    {
      title: "Micro SaaS Solutions",
      description: "Specialized micro SaaS applications designed to solve specific business challenges efficiently.",
      icon: CogIcon,
      href: "/micro-saas-solutions",
      color: "from-cyan-500 to-blue-500",
      features: ["Custom Applications", "API Integration", "Scalable Architecture", "24/7 Support"],
      price: "Starting at $99/month"
    }
  ];

  const microSaaSServices = [
    {
      title: "AI Analytics Dashboard Pro",
      description: "Advanced business intelligence with AI-powered insights and real-time data visualization.",
      icon: ChartBarIcon,
      features: ["Real-time analytics", "AI predictions", "Custom dashboards", "Automated reports"],
      price: "$199/month",
      category: "Analytics",
      benefits: ["50% faster decisions", "30% cost reduction", "24/7 monitoring"]
    },
    {
      title: "AI Content Generator Studio",
      description: "Professional content creation tool with AI-powered writing, SEO optimization, and brand consistency.",
      icon: DocumentTextIcon,
      features: ["Multi-format content", "SEO optimization", "Brand voice training", "Content calendar"],
      price: "$149/month",
      category: "Content",
      benefits: ["10x content output", "SEO improvement", "Brand consistency"]
    },
    {
      title: "AI Customer Support Suite",
      description: "Intelligent customer support system with chatbots, ticket management, and sentiment analysis.",
      icon: ChatBubbleLeftRightIcon,
      features: ["AI chatbots", "Ticket automation", "Sentiment analysis", "Multi-channel support"],
      price: "$299/month",
      category: "Customer Service",
      benefits: ["80% faster response", "24/7 availability", "Higher satisfaction"]
    },
    {
      title: "AI Project Manager Pro",
      description: "Intelligent project management with AI task optimization, resource allocation, and risk prediction.",
      icon: CogIcon,
      features: ["AI task optimization", "Resource management", "Risk prediction", "Team collaboration"],
      price: "$179/month",
      category: "Project Management",
      benefits: ["25% faster delivery", "Better resource use", "Risk mitigation"]
    },
    {
      title: "AI Inventory Optimizer",
      description: "Smart inventory management with predictive analytics, automated reordering, and demand forecasting.",
      icon: EyeIcon,
      features: ["Predictive analytics", "Auto-reordering", "Demand forecasting", "Multi-location sync"],
      price: "$249/month",
      category: "Inventory",
      benefits: ["30% less waste", "Optimized stock", "Reduced costs"]
    },
    {
      title: "AI Expense Tracker Plus",
      description: "Intelligent expense management with automated categorization, receipt processing, and tax preparation.",
      icon: CurrencyDollarIcon,
      features: ["Auto-categorization", "Receipt OCR", "Tax preparation", "Multi-currency"],
      price: "$89/month",
      category: "Finance",
      benefits: ["90% time savings", "Tax compliance", "Better tracking"]
    },
    {
      title: "AI Code Assistant Pro",
      description: "Advanced coding assistant with AI-powered code generation, debugging, and optimization suggestions.",
      icon: CodeBracketIcon,
      features: ["Code generation", "Bug detection", "Performance optimization", "Documentation"],
      price: "$129/month",
      category: "Development",
      benefits: ["40% faster coding", "Fewer bugs", "Better performance"]
    },
    {
      title: "AI Marketing Automation",
      description: "Comprehensive marketing automation platform with AI-driven campaigns and customer segmentation.",
      icon: PresentationChartLineIcon,
      features: ["Campaign automation", "Customer segmentation", "A/B testing", "ROI tracking"],
      price: "$199/month",
      category: "Marketing",
      benefits: ["3x campaign efficiency", "Higher conversion", "Better targeting"]
    },
    {
      title: "AI HR Management Suite",
      description: "Intelligent HR management with AI-powered recruitment, employee analytics, and performance tracking.",
      icon: UserGroupIcon,
      features: ["AI recruitment", "Performance analytics", "Employee engagement", "Compliance tracking"],
      price: "$159/month",
      category: "Human Resources",
      benefits: ["50% faster hiring", "Better retention", "Compliance assurance"]
    },
    {
      title: "AI Sales Predictor",
      description: "Advanced sales forecasting with AI-powered predictions, lead scoring, and pipeline optimization.",
      icon: ChartBarIcon,
      features: ["Sales forecasting", "Lead scoring", "Pipeline analysis", "Revenue prediction"],
      price: "$179/month",
      category: "Sales",
      benefits: ["25% more accurate forecasts", "Better lead quality", "Increased revenue"]
    },
    {
      title: "AI Quality Assurance",
      description: "Automated quality assurance with AI-powered testing, bug detection, and performance monitoring.",
      icon: BeakerIcon,
      features: ["Automated testing", "Bug detection", "Performance monitoring", "Regression testing"],
      price: "$139/month",
      category: "Quality Assurance",
      benefits: ["90% test coverage", "Faster releases", "Higher quality"]
    },
    {
      title: "AI Compliance Monitor",
      description: "Automated compliance monitoring with AI-powered risk assessment and regulatory reporting.",
      icon: LockClosedIcon,
      features: ["Risk assessment", "Regulatory reporting", "Audit trails", "Compliance alerts"],
      price: "$219/month",
      category: "Compliance",
      benefits: ["100% compliance", "Reduced risk", "Automated reporting"]
    }
  ];

  const industrySolutions = [
    {
      title: "Healthcare AI Solutions",
      description: "Specialized AI solutions for healthcare including patient monitoring, diagnosis assistance, and treatment optimization.",
      icon: HeartIcon,
      features: ["Patient monitoring", "Diagnosis assistance", "Treatment optimization", "HIPAA compliance"],
      price: "Starting at $4,500/month"
    },
    {
      title: "Financial Services AI",
      description: "AI-powered solutions for financial services including fraud detection, risk assessment, and algorithmic trading.",
      icon: BanknotesIcon,
      features: ["Fraud detection", "Risk assessment", "Algorithmic trading", "Regulatory compliance"],
      price: "Starting at $6,000/month"
    },
    {
      title: "E-commerce AI Platform",
      description: "Comprehensive AI platform for e-commerce including recommendation engines, inventory optimization, and customer analytics.",
      icon: ShoppingCartIcon,
      features: ["Recommendation engines", "Inventory optimization", "Customer analytics", "Price optimization"],
      price: "Starting at $2,800/month"
    },
    {
      title: "Manufacturing AI Suite",
      description: "AI solutions for manufacturing including predictive maintenance, quality control, and supply chain optimization.",
      icon: Cog6ToothIcon,
      features: ["Predictive maintenance", "Quality control", "Supply chain optimization", "Process automation"],
      price: "Starting at $3,500/month"
    },
    {
      title: "Real Estate AI Tools",
      description: "AI-powered tools for real estate including property valuation, market analysis, and lead generation.",
      icon: HomeIcon,
      features: ["Property valuation", "Market analysis", "Lead generation", "Investment analysis"],
      price: "Starting at $1,800/month"
    },
    {
      title: "Education AI Platform",
      description: "Comprehensive AI platform for education including personalized learning, assessment automation, and student analytics.",
      icon: AcademicCapIcon,
      features: ["Personalized learning", "Assessment automation", "Student analytics", "Content generation"],
      price: "Starting at $2,200/month"
    }
  ];

  return (
    <>
      <Helmet>
        <title>Services - Zion Tech Group | AI & IT Solutions</title>
        <meta name="description" content="Comprehensive AI and IT services including micro SaaS solutions, cloud infrastructure, cybersecurity, and digital transformation. Contact us at +1 302 464 0950." />
        <meta name="keywords" content="AI services, IT services, micro SaaS, cloud solutions, cybersecurity, digital transformation, business automation" />
      </Helmet>
      
      <div className="min-h-screen bg-white">
        {/* Hero Section */}
        <section className="py-20 px-4 bg-gradient-to-br from-blue-50 to-indigo-100">
          <div className="max-w-6xl mx-auto text-center">
            <h1 className="text-5xl font-bold text-gray-900 mb-6">
              Comprehensive AI & IT Services
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
              Transform your business with our cutting-edge AI solutions, IT services, and innovative micro SaaS applications. 
              We deliver results that drive growth, efficiency, and competitive advantage.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                to="/contact" 
                className="bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition-colors"
              >
                Get Started Today
              </Link>
              <Link 
                to="/demo" 
                className="border border-blue-600 text-blue-600 px-8 py-3 rounded-lg hover:bg-blue-50 transition-colors"
              >
                Schedule Demo
              </Link>
            </div>
          </div>
        </section>

        {/* Main Services Section */}
        <section className="py-20 px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
              Our Core Services
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {mainServices.map((service, index) => (
                <div key={index} className="bg-white border border-gray-200 rounded-lg p-6 hover:shadow-lg transition-shadow">
                  <div className={`w-12 h-12 rounded-lg bg-gradient-to-r ${service.color} flex items-center justify-center mb-4`}>
                    <service.icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">{service.title}</h3>
                  <p className="text-gray-600 mb-4">{service.description}</p>
                  <div className="mb-4">
                    <p className="text-blue-600 font-semibold">{service.price}</p>
                  </div>
                  <div className="mb-4">
                    <div className="flex flex-wrap gap-2">
                      {service.features.map((feature, idx) => (
                        <span key={idx} className="text-xs bg-gray-100 text-gray-700 px-2 py-1 rounded">
                          {feature}
                        </span>
                      ))}
                    </div>
                  </div>
                  <Link 
                    to={service.href}
                    className="text-blue-600 hover:text-blue-700 font-medium flex items-center"
                  >
                    Learn More <ArrowRightIcon className="w-4 h-4 ml-1" />
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Micro SaaS Solutions Section */}
        <section className="py-20 px-4 bg-gray-50">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
              Micro SaaS Solutions
            </h2>
            <p className="text-center text-gray-600 mb-12 max-w-3xl mx-auto">
              Specialized micro SaaS applications designed to solve specific business challenges with AI-powered automation and intelligence.
            </p>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {microSaaSServices.map((service, index) => (
                <div key={index} className="bg-white border border-gray-200 rounded-lg p-6 hover:shadow-lg transition-shadow">
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-lg flex items-center justify-center">
                      <service.icon className="w-5 h-5 text-white" />
                    </div>
                    <span className="text-xs bg-blue-100 text-blue-800 px-2 py-1 rounded">
                      {service.category}
                    </span>
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">{service.title}</h3>
                  <p className="text-gray-600 text-sm mb-3">{service.description}</p>
                  <div className="mb-3">
                    <p className="text-blue-600 font-semibold text-sm">{service.price}</p>
                  </div>
                  <div className="mb-4">
                    <div className="flex flex-wrap gap-1">
                      {service.features.map((feature, idx) => (
                        <span key={idx} className="text-xs bg-gray-100 text-gray-700 px-2 py-1 rounded">
                          {feature}
                        </span>
                      ))}
                    </div>
                  </div>
                  <div className="mb-4">
                    <div className="text-xs text-green-600">
                      <strong>Benefits:</strong> {service.benefits.join(", ")}
                    </div>
                  </div>
                  <Link 
                    to="/contact"
                    className="text-blue-600 hover:text-blue-700 font-medium text-sm flex items-center"
                  >
                    Get Started <ArrowRightIcon className="w-3 h-3 ml-1" />
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Industry Solutions Section */}
        <section className="py-20 px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
              Industry-Specific Solutions
            </h2>
            <p className="text-center text-gray-600 mb-12 max-w-3xl mx-auto">
              Tailored AI and IT solutions designed for specific industries and use cases.
            </p>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {industrySolutions.map((solution, index) => (
                <div key={index} className="bg-white border border-gray-200 rounded-lg p-6 hover:shadow-lg transition-shadow">
                  <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg flex items-center justify-center mb-4">
                    <solution.icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">{solution.title}</h3>
                  <p className="text-gray-600 mb-4">{solution.description}</p>
                  <div className="mb-4">
                    <p className="text-blue-600 font-semibold">{solution.price}</p>
                  </div>
                  <div className="mb-4">
                    <div className="flex flex-wrap gap-2">
                      {solution.features.map((feature, idx) => (
                        <span key={idx} className="text-xs bg-gray-100 text-gray-700 px-2 py-1 rounded">
                          {feature}
                        </span>
                      ))}
                    </div>
                  </div>
                  <Link 
                    to="/contact"
                    className="text-blue-600 hover:text-blue-700 font-medium flex items-center"
                  >
                    Learn More <ArrowRightIcon className="w-4 h-4 ml-1" />
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section className="py-20 px-4 bg-gradient-to-br from-blue-600 to-indigo-700">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-white mb-6">
              Ready to Transform Your Business?
            </h2>
            <p className="text-lg text-blue-100 mb-8">
              Contact us today to discuss how our AI and IT solutions can help you achieve your goals.
            </p>
            <div className="grid md:grid-cols-3 gap-6 mb-8">
              <div className="flex items-center justify-center text-white">
                <PhoneIcon className="w-6 h-6 mr-3" />
                <div>
                  <p className="font-semibold">Phone</p>
                  <p>+1 302 464 0950</p>
                </div>
              </div>
              <div className="flex items-center justify-center text-white">
                <EnvelopeIcon className="w-6 h-6 mr-3" />
                <div>
                  <p className="font-semibold">Email</p>
                  <p>kleber@ziontechgroup.com</p>
                </div>
              </div>
              <div className="flex items-center justify-center text-white">
                <BuildingOfficeIcon className="w-6 h-6 mr-3" />
                <div>
                  <p className="font-semibold">Address</p>
                  <p>364 E Main St STE 1008<br />Middletown DE 19709</p>
                </div>
              </div>
            </div>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                to="/contact" 
                className="bg-white text-blue-600 px-8 py-3 rounded-lg hover:bg-gray-100 transition-colors font-semibold"
              >
                Contact Us Now
              </Link>
              <Link 
                to="/demo" 
                className="border border-white text-white px-8 py-3 rounded-lg hover:bg-white hover:text-blue-600 transition-colors font-semibold"
              >
                Schedule Demo
              </Link>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default ServicesPage;

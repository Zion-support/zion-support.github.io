import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { 
  Brain, 
  Shield, 
  Cloud, 
  Database, 
  Code, 
  Globe, 
  Zap, 
  Users, 
  Target, 
  Rocket,
  CheckCircle,
  ArrowRight,
  Star,
  Clock,
  Award,
  TrendingUp,
  Smartphone,
  Server,
  Lock,
  BarChart3,
  MessageSquare,
  FileText,
  Settings,
  Monitor,
  Cpu,
  Network,
  Wifi,
  Smartphone as Mobile,
  Laptop,
  Tablet
} from 'lucide-react';

const ServicesPage: React.FC = () => {
  const aiServices = [
    {
      title: "AI Content Generation",
      description: "Generate high-quality, SEO-optimized content using advanced AI models. Perfect for blogs, social media, marketing materials, and technical documentation.",
      price: "Starting at $2,500/month",
      features: [
        "Unlimited content generation",
        "Multiple AI models (GPT-4, Claude, etc.)",
        "SEO optimization",
        "Brand voice training",
        "Multi-language support",
        "Content scheduling",
        "Plagiarism detection",
        "Performance analytics"
      ],
      icon: Brain,
      category: "AI Services",
      popular: true,
      deliveryTime: "1-2 weeks"
    },
    {
      title: "Machine Learning Solutions",
      description: "Custom ML models for predictive analytics, recommendation systems, and intelligent automation tailored to your business needs.",
      price: "Starting at $5,000/project",
      features: [
        "Custom model development",
        "Data preprocessing",
        "Model training & validation",
        "API integration",
        "Performance monitoring",
        "Model retraining",
        "Documentation & support",
        "Scalable deployment"
      ],
      icon: Cpu,
      category: "AI Services",
      popular: true,
      deliveryTime: "4-8 weeks"
    },
    {
      title: "Computer Vision",
      description: "Image recognition, object detection, and visual analysis solutions for quality control, security, and automation.",
      price: "Starting at $3,500/project",
      features: [
        "Image classification",
        "Object detection",
        "Facial recognition",
        "OCR (Optical Character Recognition)",
        "Quality inspection",
        "Real-time processing",
        "Mobile integration",
        "Cloud deployment"
      ],
      icon: Target,
      category: "AI Services",
      popular: false,
      deliveryTime: "3-6 weeks"
    },
    {
      title: "Natural Language Processing",
      description: "Text analysis, sentiment analysis, and language understanding systems for customer insights and automation.",
      price: "Starting at $4,000/project",
      features: [
        "Sentiment analysis",
        "Text classification",
        "Named entity recognition",
        "Language translation",
        "Chatbot development",
        "Document processing",
        "API integration",
        "Real-time analysis"
      ],
      icon: MessageSquare,
      category: "AI Services",
      popular: false,
      deliveryTime: "3-5 weeks"
    },
    {
      title: "AI Automation",
      description: "Intelligent process automation and workflow optimization to streamline your business operations.",
      price: "Starting at $6,000/project",
      features: [
        "Process automation",
        "Workflow optimization",
        "RPA integration",
        "Error handling",
        "Performance monitoring",
        "Custom triggers",
        "API connections",
        "Scalable architecture"
      ],
      icon: Rocket,
      category: "AI Services",
      popular: true,
      deliveryTime: "4-10 weeks"
    },
    {
      title: "AI Analytics Dashboard",
      description: "Real-time business analytics with AI-powered insights, predictive forecasting, and intelligent reporting.",
      price: "Starting at $3,000/month",
      features: [
        "Real-time data visualization",
        "AI predictions",
        "Custom reports",
        "API integration",
        "Mobile responsive",
        "Automated alerts",
        "Data export",
        "Custom dashboards"
      ],
      icon: BarChart3,
      category: "AI Services",
      popular: true,
      deliveryTime: "2-4 weeks"
    }
  ];

  const itServices = [
    {
      title: "Cloud Migration & Management",
      description: "Seamless migration to AWS, Azure, or Google Cloud with zero downtime and ongoing management.",
      price: "Starting at $10,000/project",
      features: [
        "Zero-downtime migration",
        "Multi-cloud strategy",
        "Cost optimization",
        "Security implementation",
        "Performance monitoring",
        "Backup & disaster recovery",
        "24/7 support",
        "Compliance management"
      ],
      icon: Cloud,
      category: "IT Services",
      popular: true,
      deliveryTime: "2-6 weeks"
    },
    {
      title: "Cybersecurity Solutions",
      description: "Comprehensive security assessment, implementation, and ongoing monitoring to protect your business.",
      price: "Starting at $2,500/assessment",
      features: [
        "Security audits",
        "Vulnerability testing",
        "Penetration testing",
        "Compliance management",
        "Incident response",
        "Security training",
        "24/7 monitoring",
        "Threat intelligence"
      ],
      icon: Shield,
      category: "IT Services",
      popular: true,
      deliveryTime: "1-3 weeks"
    },
    {
      title: "Web Development",
      description: "Modern, responsive websites and web applications built with the latest technologies and best practices.",
      price: "Starting at $3,000/project",
      features: [
        "Responsive design",
        "SEO optimization",
        "Performance optimization",
        "Security implementation",
        "CMS integration",
        "E-commerce solutions",
        "Mobile optimization",
        "Analytics integration"
      ],
      icon: Globe,
      category: "IT Services",
      popular: true,
      deliveryTime: "2-8 weeks"
    },
    {
      title: "Database Solutions",
      description: "Database design, optimization, migration, and management for improved performance and scalability.",
      price: "Starting at $1,500/optimization",
      features: [
        "Database design",
        "Performance tuning",
        "Migration services",
        "Backup strategies",
        "Security hardening",
        "Monitoring setup",
        "Query optimization",
        "Scalability planning"
      ],
      icon: Database,
      category: "IT Services",
      popular: false,
      deliveryTime: "1-4 weeks"
    },
    {
      title: "Mobile App Development",
      description: "Native and cross-platform mobile applications for iOS and Android with modern UI/UX design.",
      price: "Starting at $8,000/project",
      features: [
        "Native iOS & Android",
        "Cross-platform solutions",
        "Modern UI/UX design",
        "API integration",
        "Push notifications",
        "Offline functionality",
        "App store optimization",
        "Maintenance & updates"
      ],
      icon: Smartphone,
      category: "IT Services",
      popular: true,
      deliveryTime: "6-12 weeks"
    },
    {
      title: "DevOps & CI/CD",
      description: "Automated deployment pipelines, infrastructure as code, and continuous integration for faster development cycles.",
      price: "Starting at $4,000/setup",
      features: [
        "CI/CD pipelines",
        "Infrastructure as code",
        "Container orchestration",
        "Monitoring & logging",
        "Security scanning",
        "Automated testing",
        "Deployment automation",
        "Performance optimization"
      ],
      icon: Settings,
      category: "IT Services",
      popular: false,
      deliveryTime: "2-6 weeks"
    }
  ];

  const microSaasServices = [
    {
      title: "AI Content Generator Pro",
      description: "Advanced AI-powered content generation platform with multiple models and customization options.",
      price: "$29/month",
      features: [
        "Unlimited content generation",
        "Multiple AI models",
        "Brand voice training",
        "SEO optimization",
        "Content scheduling",
        "Team collaboration",
        "Analytics dashboard",
        "API access"
      ],
      icon: FileText,
      category: "Micro SAAS",
      popular: true,
      deliveryTime: "Instant"
    },
    {
      title: "Smart Analytics Dashboard",
      description: "Real-time business analytics with AI-powered insights and predictive forecasting capabilities.",
      price: "$49/month",
      features: [
        "Real-time data visualization",
        "AI predictions",
        "Custom reports",
        "API integration",
        "Mobile app",
        "Automated alerts",
        "Data export",
        "White-label options"
      ],
      icon: TrendingUp,
      category: "Micro SAAS",
      popular: true,
      deliveryTime: "Instant"
    },
    {
      title: "Automated Security Monitor",
      description: "24/7 cybersecurity monitoring with AI threat detection and automated response capabilities.",
      price: "$79/month",
      features: [
        "Real-time threat detection",
        "Automated responses",
        "Compliance reporting",
        "Incident management",
        "Security dashboard",
        "Alert notifications",
        "Integration APIs",
        "Custom rules"
      ],
      icon: Lock,
      category: "Micro SAAS",
      popular: false,
      deliveryTime: "Instant"
    },
    {
      title: "Cloud Infrastructure Manager",
      description: "Automated cloud resource management with intelligent scaling and cost optimization.",
      price: "$99/month",
      features: [
        "Auto-scaling",
        "Cost optimization",
        "Multi-cloud support",
        "Performance monitoring",
        "Resource scheduling",
        "Budget alerts",
        "Usage analytics",
        "API management"
      ],
      icon: Server,
      category: "Micro SAAS",
      popular: false,
      deliveryTime: "Instant"
    },
    {
      title: "AI Customer Support Bot",
      description: "Intelligent chatbot with natural language processing for 24/7 customer support automation.",
      price: "$39/month",
      features: [
        "Natural language processing",
        "Multi-language support",
        "Integration APIs",
        "Analytics dashboard",
        "Custom training",
        "Escalation management",
        "Knowledge base",
        "Performance metrics"
      ],
      icon: Users,
      category: "Micro SAAS",
      popular: true,
      deliveryTime: "Instant"
    },
    {
      title: "Data Processing Pipeline",
      description: "Automated data processing and transformation with real-time streaming capabilities.",
      price: "$59/month",
      features: [
        "Real-time processing",
        "Data transformation",
        "Error handling",
        "Scalable infrastructure",
        "Monitoring dashboard",
        "API endpoints",
        "Data validation",
        "Custom workflows"
      ],
      icon: Network,
      category: "Micro SAAS",
      popular: false,
      deliveryTime: "Instant"
    }
  ];

  const allServices = [...aiServices, ...itServices, ...microSaasServices];

  return (
    <>
      <Helmet>
        <title>Our Services - Zion Tech Group | AI, IT & Micro SAAS Solutions</title>
        <meta name="description" content="Comprehensive AI services, IT solutions, and micro SAAS platforms. From machine learning to cloud migration, we provide cutting-edge technology solutions for your business." />
        <meta name="keywords" content="AI services, IT services, micro SAAS, cloud migration, cybersecurity, web development, mobile apps, machine learning, data analytics" />
      </Helmet>
      
      <div className="min-h-screen bg-slate-900 text-white">
        {/* Hero Section */}
        <section className="py-20 bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
          <div className="container mx-auto px-4">
            <div className="text-center max-w-4xl mx-auto">
              <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
                Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400">Services</span>
              </h1>
              <p className="text-xl text-gray-300 mb-8">
                Comprehensive AI services, IT solutions, and micro SAAS platforms designed to transform your business. 
                From cutting-edge AI implementations to robust IT infrastructure, we provide end-to-end technology solutions.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link 
                  to="/contact" 
                  className="bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 flex items-center justify-center"
                >
                  Get Started Today
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Link>
                <a 
                  href="tel:+13024640950" 
                  className="border-2 border-cyan-400 text-cyan-400 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300 text-center"
                >
                  Call +1 302 464 0950
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* AI Services Section */}
        <section className="py-20 bg-slate-900">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                AI <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-cyan-400">Services</span>
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Custom AI solutions tailored to your business needs. From machine learning models to intelligent automation.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {aiServices.map((service, index) => {
                const Icon = service.icon;
                return (
                  <div key={index} className="bg-slate-800 rounded-xl p-6 border border-slate-700 hover:border-purple-500/50 transition-all duration-300 group">
                    {service.popular && (
                      <div className="flex items-center mb-4">
                        <Star className="w-5 h-5 text-yellow-400 mr-2" />
                        <span className="text-yellow-400 font-semibold">Popular Choice</span>
                      </div>
                    )}
                    
                    <div className="flex items-center mb-4">
                      <div className="p-3 bg-purple-500/20 rounded-lg mr-4">
                        <Icon className="w-6 h-6 text-purple-400" />
                      </div>
                      <div>
                        <div className="text-sm text-purple-400 font-semibold">{service.category}</div>
                        <h3 className="text-xl font-bold text-white">{service.title}</h3>
                      </div>
                    </div>
                    
                    <p className="text-gray-300 mb-6">{service.description}</p>
                    
                    <div className="mb-6">
                      <div className="text-2xl font-bold text-white mb-1">{service.price}</div>
                      <div className="text-sm text-gray-400 flex items-center">
                        <Clock className="w-4 h-4 mr-1" />
                        Delivery: {service.deliveryTime}
                      </div>
                    </div>
                    
                    <ul className="space-y-2 mb-6">
                      {service.features.slice(0, 4).map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-center text-gray-300">
                          <CheckCircle className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
                          <span className="text-sm">{feature}</span>
                        </li>
                      ))}
                      {service.features.length > 4 && (
                        <li className="text-sm text-gray-400">
                          +{service.features.length - 4} more features
                        </li>
                      )}
                    </ul>
                    
                    <Link 
                      to="/contact" 
                      className="w-full bg-gradient-to-r from-purple-500 to-cyan-500 text-white py-3 rounded-lg font-semibold hover:from-purple-600 hover:to-cyan-600 transition-all duration-300 text-center block group-hover:shadow-lg group-hover:shadow-purple-500/25"
                    >
                      Get Quote
                    </Link>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* IT Services Section */}
        <section className="py-20 bg-gradient-to-br from-slate-800 to-slate-900">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                IT <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-400">Services</span>
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Comprehensive IT solutions to modernize your infrastructure and optimize your operations.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {itServices.map((service, index) => {
                const Icon = service.icon;
                return (
                  <div key={index} className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 border border-slate-700 hover:border-cyan-500/50 transition-all duration-300 group">
                    {service.popular && (
                      <div className="flex items-center mb-4">
                        <Star className="w-5 h-5 text-yellow-400 mr-2" />
                        <span className="text-yellow-400 font-semibold">Popular Choice</span>
                      </div>
                    )}
                    
                    <div className="flex items-center mb-4">
                      <div className="p-3 bg-cyan-500/20 rounded-lg mr-4">
                        <Icon className="w-6 h-6 text-cyan-400" />
                      </div>
                      <div>
                        <div className="text-sm text-cyan-400 font-semibold">{service.category}</div>
                        <h3 className="text-xl font-bold text-white">{service.title}</h3>
                      </div>
                    </div>
                    
                    <p className="text-gray-300 mb-6">{service.description}</p>
                    
                    <div className="mb-6">
                      <div className="text-2xl font-bold text-white mb-1">{service.price}</div>
                      <div className="text-sm text-gray-400 flex items-center">
                        <Clock className="w-4 h-4 mr-1" />
                        Delivery: {service.deliveryTime}
                      </div>
                    </div>
                    
                    <ul className="space-y-2 mb-6">
                      {service.features.slice(0, 4).map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-center text-gray-300">
                          <CheckCircle className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
                          <span className="text-sm">{feature}</span>
                        </li>
                      ))}
                      {service.features.length > 4 && (
                        <li className="text-sm text-gray-400">
                          +{service.features.length - 4} more features
                        </li>
                      )}
                    </ul>
                    
                    <Link 
                      to="/contact" 
                      className="w-full bg-gradient-to-r from-cyan-500 to-blue-600 text-white py-3 rounded-lg font-semibold hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 text-center block group-hover:shadow-lg group-hover:shadow-cyan-500/25"
                    >
                      Get Quote
                    </Link>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Micro SAAS Services Section */}
        <section className="py-20 bg-slate-900">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Micro SAAS <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-400">Platforms</span>
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Ready-to-use micro SAAS solutions that can be deployed instantly. No complex setup, just results.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {microSaasServices.map((service, index) => {
                const Icon = service.icon;
                return (
                  <div key={index} className="relative bg-slate-800 rounded-xl p-6 border border-slate-700 hover:border-green-500/50 transition-all duration-300 group">
                    {service.popular && (
                      <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                        <span className="bg-gradient-to-r from-green-500 to-blue-500 text-white px-4 py-1 rounded-full text-sm font-semibold flex items-center">
                          <Star className="w-4 h-4 mr-1" />
                          Popular
                        </span>
                      </div>
                    )}
                    
                    <div className="flex items-center mb-4">
                      <div className="p-3 bg-green-500/20 rounded-lg mr-4">
                        <Icon className="w-6 h-6 text-green-400" />
                      </div>
                      <div>
                        <div className="text-sm text-green-400 font-semibold">{service.category}</div>
                        <h3 className="text-xl font-bold text-white">{service.title}</h3>
                      </div>
                    </div>
                    
                    <p className="text-gray-300 mb-6">{service.description}</p>
                    
                    <div className="mb-6">
                      <div className="text-3xl font-bold text-white mb-1">{service.price}</div>
                      <div className="text-sm text-gray-400 flex items-center">
                        <Zap className="w-4 h-4 mr-1" />
                        {service.deliveryTime} deployment
                      </div>
                    </div>
                    
                    <ul className="space-y-2 mb-6">
                      {service.features.slice(0, 4).map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-center text-gray-300">
                          <CheckCircle className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
                          <span className="text-sm">{feature}</span>
                        </li>
                      ))}
                      {service.features.length > 4 && (
                        <li className="text-sm text-gray-400">
                          +{service.features.length - 4} more features
                        </li>
                      )}
                    </ul>
                    
                    <Link 
                      to="/contact" 
                      className="w-full bg-gradient-to-r from-green-500 to-blue-600 text-white py-3 rounded-lg font-semibold hover:from-green-600 hover:to-blue-700 transition-all duration-300 text-center block group-hover:shadow-lg group-hover:shadow-green-500/25"
                    >
                      Start Free Trial
                    </Link>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-r from-cyan-600 to-blue-600">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Ready to Get Started?
            </h2>
            <p className="text-xl text-cyan-100 mb-8 max-w-3xl mx-auto">
              Contact our experts today to discuss your project requirements and get a personalized quote.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link 
                to="/contact" 
                className="bg-white text-cyan-600 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-gray-100 transition-all duration-300 flex items-center"
              >
                Contact Us Now
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
              <a 
                href="mailto:kleber@ziontechgroup.com" 
                className="border-2 border-white text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-white hover:text-cyan-600 transition-all duration-300"
              >
                Email Us
              </a>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default ServicesPage;
import React from 'react';
import { Helmet } from 'react-helmet-async';
import { 
  Brain, 
  Shield, 
  Globe, 
  Zap, 
  Cloud, 
  Database, 
  Smartphone, 
  Lock, 
  BarChart3, 
  Code, 
  Users, 
  Settings,
  ArrowRight,
  CheckCircle,
  Star,
  ExternalLink,
  Phone,
  Mail,
  MapPin
} from 'lucide-react';

const ServicesPage: React.FC = () => {
  const aiServices = [
    {
      name: "AI-Powered Business Intelligence",
      description: "Transform your data into actionable insights with our advanced AI analytics platform. Real-time dashboards, predictive analytics, and automated reporting.",
      price: "$2,999/month",
      features: ["Real-time analytics", "Predictive modeling", "Custom dashboards", "API integration"],
      icon: <BarChart3 className="w-8 h-8" />,
      link: "https://ziontechgroup.com/ai-business-intelligence"
    },
    {
      name: "AI Content Generation Suite",
      description: "Create high-quality content at scale with our AI-powered content generation platform. Blogs, social media, marketing copy, and technical documentation.",
      price: "$1,499/month",
      features: ["Multi-format content", "Brand voice training", "SEO optimization", "Plagiarism detection"],
      icon: <Code className="w-8 h-8" />,
      link: "https://ziontechgroup.com/ai-content-generation"
    },
    {
      name: "AI Customer Service Automation",
      description: "Deploy intelligent chatbots and virtual assistants that understand context, handle complex queries, and provide 24/7 customer support.",
      price: "$3,999/month",
      features: ["Natural language processing", "Multi-language support", "CRM integration", "Analytics dashboard"],
      icon: <Users className="w-8 h-8" />,
      link: "https://ziontechgroup.com/ai-customer-service"
    },
    {
      name: "AI Code Assistant Pro",
      description: "Accelerate development with our AI-powered coding assistant. Code generation, debugging, optimization, and automated testing.",
      price: "$2,499/month",
      features: ["Code generation", "Bug detection", "Performance optimization", "Security scanning"],
      icon: <Settings className="w-8 h-8" />,
      link: "https://ziontechgroup.com/ai-code-assistant"
    }
  ];

  const itServices = [
    {
      name: "Cloud Infrastructure Management",
      description: "Complete cloud migration, optimization, and management services. AWS, Azure, and Google Cloud expertise with 99.9% uptime guarantee.",
      price: "$4,999/month",
      features: ["Multi-cloud strategy", "Cost optimization", "Security hardening", "24/7 monitoring"],
      icon: <Cloud className="w-8 h-8" />,
      link: "https://ziontechgroup.com/cloud-infrastructure"
    },
    {
      name: "Cybersecurity Suite",
      description: "Comprehensive security solutions including threat detection, vulnerability assessment, compliance management, and incident response.",
      price: "$3,499/month",
      features: ["Threat monitoring", "Penetration testing", "Compliance audit", "Security training"],
      icon: <Shield className="w-8 h-8" />,
      link: "https://ziontechgroup.com/cybersecurity"
    },
    {
      name: "5G Network Implementation",
      description: "Complete 5G network design, deployment, and optimization services. Ultra-low latency, massive IoT connectivity, and edge computing solutions.",
      price: "$7,999/month",
      features: ["Network design", "Hardware deployment", "Performance optimization", "IoT integration"],
      icon: <Globe className="w-8 h-8" />,
      link: "https://ziontechgroup.com/5g-implementation"
    },
    {
      name: "Database Optimization & Migration",
      description: "Database performance tuning, migration services, and data architecture consulting. Support for SQL, NoSQL, and hybrid database environments.",
      price: "$2,999/month",
      features: ["Performance tuning", "Migration planning", "Backup strategies", "Disaster recovery"],
      icon: <Database className="w-8 h-8" />,
      link: "https://ziontechgroup.com/database-services"
    }
  ];

  const microSaasServices = [
    {
      name: "AI-Powered Analytics Dashboard",
      description: "Real-time business intelligence with customizable dashboards, automated reporting, and predictive analytics. Perfect for small to medium businesses.",
      price: "$299/month",
      features: ["Custom dashboards", "Automated reports", "Data visualization", "Mobile app"],
      icon: <BarChart3 className="w-8 h-8" />,
      link: "https://ziontechgroup.com/analytics-dashboard"
    },
    {
      name: "Smart Document Processing",
      description: "Automate document processing with AI-powered OCR, data extraction, and intelligent categorization. Reduce manual work by 90%.",
      price: "$199/month",
      features: ["OCR technology", "Data extraction", "Auto-categorization", "API integration"],
      icon: <Code className="w-8 h-8" />,
      link: "https://ziontechgroup.com/document-processing"
    },
    {
      name: "AI Social Media Manager",
      description: "Automated social media content creation, scheduling, and engagement. AI-powered hashtag optimization and audience analysis.",
      price: "$149/month",
      features: ["Content generation", "Auto-scheduling", "Hashtag optimization", "Analytics"],
      icon: <Smartphone className="w-8 h-8" />,
      link: "https://ziontechgroup.com/social-media-ai"
    },
    {
      name: "Intelligent Email Marketing",
      description: "AI-powered email campaigns with personalization, A/B testing, and automated segmentation. Increase open rates by 40%.",
      price: "$99/month",
      features: ["AI personalization", "A/B testing", "Auto-segmentation", "Performance analytics"],
      icon: <Mail className="w-8 h-8" />,
      link: "https://ziontechgroup.com/email-marketing-ai"
    }
  ];

  return (
    <>
      <Helmet>
        <title>Services - Zion Tech Group | AI & IT Solutions</title>
        <meta name="description" content="Comprehensive AI services, IT solutions, and micro SAAS platforms. Transform your business with cutting-edge technology." />
        <meta name="keywords" content="AI services, IT solutions, micro SAAS, cloud computing, cybersecurity, 5G technology" />
      </Helmet>
      
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        {/* Hero Section */}
        <section className="relative py-20 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-purple-600/20"></div>
          <div className="container mx-auto px-4 relative z-10">
            <div className="text-center max-w-4xl mx-auto">
              <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
                Advanced Technology Services
              </h1>
              <p className="text-xl md:text-2xl text-gray-300 mb-8 leading-relaxed">
                Comprehensive AI solutions, IT services, and micro SAAS platforms designed to accelerate your business growth
              </p>
            </div>
          </div>
        </section>

        {/* AI Services Section */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                AI Services
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Cutting-edge artificial intelligence solutions powered by machine learning and advanced algorithms
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8">
              {aiServices.map((service, index) => (
                <div key={index} className="bg-gradient-to-br from-blue-50 to-purple-50 p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105">
                  <div className="flex items-center mb-6">
                    <div className="w-16 h-16 bg-blue-600 rounded-lg flex items-center justify-center mr-4">
                      {service.icon}
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-gray-900">{service.name}</h3>
                      <p className="text-2xl font-bold text-blue-600">{service.price}</p>
                    </div>
                  </div>
                  <p className="text-gray-600 mb-6">{service.description}</p>
                  <ul className="space-y-2 mb-6">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center text-gray-700">
                        <CheckCircle className="w-5 h-5 text-green-500 mr-2" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <a 
                    href={service.link}
                    className="inline-flex items-center text-blue-600 font-semibold hover:text-blue-700 transition-colors"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Learn More <ArrowRight className="w-4 h-4 ml-2" />
                    <ExternalLink className="w-4 h-4 ml-1" />
                  </a>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* IT Services Section */}
        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                IT Services
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Comprehensive IT solutions including cloud computing, cybersecurity, and network infrastructure
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8">
              {itServices.map((service, index) => (
                <div key={index} className="bg-gradient-to-br from-green-50 to-blue-50 p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105">
                  <div className="flex items-center mb-6">
                    <div className="w-16 h-16 bg-green-600 rounded-lg flex items-center justify-center mr-4">
                      {service.icon}
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-gray-900">{service.name}</h3>
                      <p className="text-2xl font-bold text-green-600">{service.price}</p>
                    </div>
                  </div>
                  <p className="text-gray-600 mb-6">{service.description}</p>
                  <ul className="space-y-2 mb-6">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center text-gray-700">
                        <CheckCircle className="w-5 h-5 text-green-500 mr-2" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <a 
                    href={service.link}
                    className="inline-flex items-center text-green-600 font-semibold hover:text-green-700 transition-colors"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Learn More <ArrowRight className="w-4 h-4 ml-2" />
                    <ExternalLink className="w-4 h-4 ml-1" />
                  </a>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Micro SAAS Services Section */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                Micro SAAS Solutions
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Affordable, scalable software solutions designed for small to medium businesses
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8">
              {microSaasServices.map((service, index) => (
                <div key={index} className="bg-gradient-to-br from-purple-50 to-pink-50 p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105">
                  <div className="flex items-center mb-6">
                    <div className="w-16 h-16 bg-purple-600 rounded-lg flex items-center justify-center mr-4">
                      {service.icon}
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-gray-900">{service.name}</h3>
                      <p className="text-2xl font-bold text-purple-600">{service.price}</p>
                    </div>
                  </div>
                  <p className="text-gray-600 mb-6">{service.description}</p>
                  <ul className="space-y-2 mb-6">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center text-gray-700">
                        <CheckCircle className="w-5 h-5 text-green-500 mr-2" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <a 
                    href={service.link}
                    className="inline-flex items-center text-purple-600 font-semibold hover:text-purple-700 transition-colors"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Learn More <ArrowRight className="w-4 h-4 ml-2" />
                    <ExternalLink className="w-4 h-4 ml-1" />
                  </a>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section className="py-20 bg-gray-900">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Ready to Get Started?
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Contact us today to discuss your specific needs and get a customized solution
              </p>
            </div>
            
            <div className="max-w-4xl mx-auto">
              <div className="grid md:grid-cols-3 gap-8 text-center">
                <div className="flex flex-col items-center">
                  <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mb-4">
                    <Phone className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-2">Call Us</h3>
                  <p className="text-gray-300">+1 302 464 0950</p>
                </div>
                
                <div className="flex flex-col items-center">
                  <div className="w-16 h-16 bg-green-600 rounded-full flex items-center justify-center mb-4">
                    <Mail className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-2">Email Us</h3>
                  <p className="text-gray-300">kleber@ziontechgroup.com</p>
                </div>
                
                <div className="flex flex-col items-center">
                  <div className="w-16 h-16 bg-purple-600 rounded-full flex items-center justify-center mb-4">
                    <MapPin className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-2">Visit Us</h3>
                  <p className="text-gray-300">364 E Main St STE 1008<br />Middletown DE 19709</p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default ServicesPage;
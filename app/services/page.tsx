import React from 'react';
import { Helmet } from 'react-helmet-async';
import { 
  Brain, 
  Shield, 
  Globe, 
  Cloud, 
  Database, 
  Code, 
  Zap, 
  Users, 
  BarChart3, 
  Smartphone, 
  Lock, 
  Cpu,
  ArrowRight,
  CheckCircle,
  Star,
  DollarSign,
  Clock,
  Award
} from 'lucide-react';

const ServicesPage: React.FC = () => {
  const microSaasServices = [
    {
      icon: <Brain className="w-8 h-8" />,
      title: "AI Content Generator Pro",
      description: "Advanced AI-powered content creation platform with 50+ templates, SEO optimization, and multi-language support.",
      features: ["50+ Content Templates", "SEO Optimization", "Multi-language Support", "Brand Voice Training", "Plagiarism Checker"],
      pricing: "$29/month",
      link: "https://ziontechgroup.com/ai-content-generator-pro",
      category: "AI Tools"
    },
    {
      icon: <BarChart3 className="w-8 h-8" />,
      title: "Business Intelligence Dashboard",
      description: "Real-time analytics and reporting dashboard with custom KPIs, automated insights, and data visualization.",
      features: ["Real-time Analytics", "Custom KPIs", "Automated Reports", "Data Visualization", "API Integration"],
      pricing: "$49/month",
      link: "https://ziontechgroup.com/business-intelligence-dashboard",
      category: "Analytics"
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: "Security Audit Suite",
      description: "Comprehensive security scanning and vulnerability assessment tool for websites and applications.",
      features: ["Vulnerability Scanning", "Penetration Testing", "Compliance Reports", "Real-time Monitoring", "Security Recommendations"],
      pricing: "$39/month",
      link: "https://ziontechgroup.com/security-audit-suite",
      category: "Security"
    },
    {
      icon: <Smartphone className="w-8 h-8" />,
      title: "Mobile App Builder",
      description: "No-code mobile app development platform with drag-and-drop interface and instant deployment.",
      features: ["Drag & Drop Builder", "No Code Required", "Instant Deployment", "Cross-platform", "App Store Publishing"],
      pricing: "$59/month",
      link: "https://ziontechgroup.com/mobile-app-builder",
      category: "Development"
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Customer Support AI",
      description: "Intelligent chatbot and customer support automation with natural language processing.",
      features: ["AI Chatbot", "Ticket Management", "Knowledge Base", "Multi-channel Support", "Analytics"],
      pricing: "$25/month",
      link: "https://ziontechgroup.com/customer-support-ai",
      category: "Customer Service"
    },
    {
      icon: <Database className="w-8 h-8" />,
      title: "Data Migration Tool",
      description: "Automated data migration and synchronization tool for databases and cloud platforms.",
      features: ["Automated Migration", "Data Validation", "Real-time Sync", "Error Handling", "Rollback Support"],
      pricing: "$79/month",
      link: "https://ziontechgroup.com/data-migration-tool",
      category: "Data Management"
    }
  ];

  const aiServices = [
    {
      icon: <Brain className="w-8 h-8" />,
      title: "Machine Learning Solutions",
      description: "Custom ML models for predictive analytics, recommendation systems, and automated decision making.",
      features: ["Predictive Analytics", "Recommendation Systems", "Natural Language Processing", "Computer Vision", "Model Training"],
      pricing: "Starting at $5,000",
      link: "https://ziontechgroup.com/machine-learning-solutions"
    },
    {
      icon: <Code className="w-8 h-8" />,
      title: "AI Code Assistant",
      description: "Intelligent code generation, debugging, and optimization using advanced AI models.",
      features: ["Code Generation", "Bug Detection", "Performance Optimization", "Documentation", "Code Review"],
      pricing: "Starting at $2,500",
      link: "https://ziontechgroup.com/ai-code-assistant"
    },
    {
      icon: <BarChart3 className="w-8 h-8" />,
      title: "AI Analytics Platform",
      description: "Advanced data analytics with AI-powered insights and automated reporting.",
      features: ["AI Insights", "Automated Reports", "Predictive Modeling", "Data Visualization", "Real-time Analytics"],
      pricing: "Starting at $3,500",
      link: "https://ziontechgroup.com/ai-analytics-platform"
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Conversational AI",
      description: "Custom chatbot and virtual assistant development with natural language understanding.",
      features: ["Custom Chatbots", "Voice Integration", "Multi-language", "Context Awareness", "Integration APIs"],
      pricing: "Starting at $4,000",
      link: "https://ziontechgroup.com/conversational-ai"
    }
  ];

  const itServices = [
    {
      icon: <Cloud className="w-8 h-8" />,
      title: "Cloud Infrastructure",
      description: "Complete cloud migration, setup, and management services for AWS, Azure, and Google Cloud.",
      features: ["Cloud Migration", "Infrastructure Setup", "Cost Optimization", "Security Configuration", "24/7 Monitoring"],
      pricing: "Starting at $3,000",
      link: "https://ziontechgroup.com/cloud-infrastructure"
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: "Cybersecurity Solutions",
      description: "Comprehensive security assessment, implementation, and ongoing protection services.",
      features: ["Security Assessment", "Threat Detection", "Incident Response", "Compliance", "Security Training"],
      pricing: "Starting at $2,500",
      link: "https://ziontechgroup.com/cybersecurity-solutions"
    },
    {
      icon: <Database className="w-8 h-8" />,
      title: "Database Management",
      description: "Database design, optimization, backup, and maintenance services for all major database systems.",
      features: ["Database Design", "Performance Optimization", "Backup & Recovery", "Data Migration", "Maintenance"],
      pricing: "Starting at $1,500",
      link: "https://ziontechgroup.com/database-management"
    },
    {
      icon: <Globe className="w-8 h-8" />,
      title: "Web Development",
      description: "Custom web applications, e-commerce solutions, and API development services.",
      features: ["Custom Web Apps", "E-commerce Solutions", "API Development", "Responsive Design", "SEO Optimization"],
      pricing: "Starting at $2,000",
      link: "https://ziontechgroup.com/web-development"
    },
    {
      icon: <Smartphone className="w-8 h-8" />,
      title: "Mobile App Development",
      description: "Native and cross-platform mobile application development for iOS and Android.",
      features: ["Native Apps", "Cross-platform", "UI/UX Design", "App Store Publishing", "Maintenance"],
      pricing: "Starting at $5,000",
      link: "https://ziontechgroup.com/mobile-app-development"
    },
    {
      icon: <Cpu className="w-8 h-8" />,
      title: "DevOps & Automation",
      description: "CI/CD pipeline setup, infrastructure automation, and deployment optimization.",
      features: ["CI/CD Pipelines", "Infrastructure Automation", "Monitoring Setup", "Deployment Optimization", "Training"],
      pricing: "Starting at $2,500",
      link: "https://ziontechgroup.com/devops-automation"
    }
  ];

  return (
    <>
      <Helmet>
        <title>Services - Zion Tech Group | AI & IT Solutions</title>
        <meta name="description" content="Comprehensive AI and IT services including micro SAAS solutions, machine learning, cloud infrastructure, cybersecurity, and custom development." />
        <meta name="keywords" content="AI services, IT solutions, micro SAAS, machine learning, cloud computing, cybersecurity, web development, mobile apps" />
      </Helmet>
      
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        {/* Hero Section */}
        <section className="pt-20 pb-16">
          <div className="container mx-auto px-4">
            <div className="text-center max-w-4xl mx-auto">
              <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
                Our Services
              </h1>
              <p className="text-xl text-gray-300 mb-8">
                Comprehensive AI and IT solutions designed to accelerate your business growth and digital transformation
              </p>
            </div>
          </div>
        </section>

        {/* Micro SAAS Services */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">Micro SAAS Solutions</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Ready-to-use software solutions that can be deployed immediately to solve specific business challenges
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {microSaasServices.map((service, index) => (
                <div key={index} className="bg-white border border-gray-200 rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow">
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mr-4 text-blue-600">
                      {service.icon}
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-gray-900">{service.title}</h3>
                      <span className="text-sm text-blue-600 font-medium">{service.category}</span>
                    </div>
                  </div>
                  
                  <p className="text-gray-600 mb-4">{service.description}</p>
                  
                  <div className="mb-4">
                    <h4 className="font-semibold text-gray-900 mb-2">Key Features:</h4>
                    <ul className="space-y-1">
                      {service.features.map((feature, idx) => (
                        <li key={idx} className="flex items-center text-sm text-gray-600">
                          <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center">
                      <DollarSign className="w-5 h-5 text-green-600 mr-1" />
                      <span className="text-2xl font-bold text-gray-900">{service.pricing}</span>
                    </div>
                    <div className="flex items-center text-yellow-500">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 fill-current" />
                      ))}
                    </div>
                  </div>
                  
                  <a 
                    href={service.link}
                    className="w-full bg-blue-600 text-white py-3 px-4 rounded-lg font-semibold hover:bg-blue-700 transition-colors flex items-center justify-center"
                  >
                    Get Started <ArrowRight className="w-4 h-4 ml-2" />
                  </a>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* AI Services */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">AI Services</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Custom artificial intelligence solutions tailored to your specific business needs and challenges
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 gap-8">
              {aiServices.map((service, index) => (
                <div key={index} className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow">
                  <div className="flex items-center mb-6">
                    <div className="w-16 h-16 bg-purple-100 rounded-lg flex items-center justify-center mr-4 text-purple-600">
                      {service.icon}
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-gray-900">{service.title}</h3>
                      <div className="flex items-center mt-2">
                        <Clock className="w-4 h-4 text-gray-500 mr-2" />
                        <span className="text-sm text-gray-600">Custom Development</span>
                      </div>
                    </div>
                  </div>
                  
                  <p className="text-gray-600 mb-6">{service.description}</p>
                  
                  <div className="mb-6">
                    <h4 className="font-semibold text-gray-900 mb-3">What's Included:</h4>
                    <ul className="space-y-2">
                      {service.features.map((feature, idx) => (
                        <li key={idx} className="flex items-center text-gray-600">
                          <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <div className="flex items-center">
                      <DollarSign className="w-5 h-5 text-green-600 mr-1" />
                      <span className="text-xl font-bold text-gray-900">{service.pricing}</span>
                    </div>
                    <a 
                      href={service.link}
                      className="bg-purple-600 text-white py-3 px-6 rounded-lg font-semibold hover:bg-purple-700 transition-colors flex items-center"
                    >
                      Learn More <ArrowRight className="w-4 h-4 ml-2" />
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* IT Services */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">IT Services</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Comprehensive IT solutions including cloud infrastructure, cybersecurity, and custom development
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {itServices.map((service, index) => (
                <div key={index} className="bg-white border border-gray-200 rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow">
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mr-4 text-green-600">
                      {service.icon}
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-gray-900">{service.title}</h3>
                      <div className="flex items-center mt-1">
                        <Award className="w-4 h-4 text-yellow-500 mr-1" />
                        <span className="text-sm text-gray-600">Professional Service</span>
                      </div>
                    </div>
                  </div>
                  
                  <p className="text-gray-600 mb-4">{service.description}</p>
                  
                  <div className="mb-4">
                    <h4 className="font-semibold text-gray-900 mb-2">Services Include:</h4>
                    <ul className="space-y-1">
                      {service.features.map((feature, idx) => (
                        <li key={idx} className="flex items-center text-sm text-gray-600">
                          <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <div className="flex items-center">
                      <DollarSign className="w-5 h-5 text-green-600 mr-1" />
                      <span className="text-xl font-bold text-gray-900">{service.pricing}</span>
                    </div>
                    <a 
                      href={service.link}
                      className="bg-green-600 text-white py-2 px-4 rounded-lg font-semibold hover:bg-green-700 transition-colors flex items-center"
                    >
                      Contact Us <ArrowRight className="w-4 h-4 ml-2" />
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-gradient-to-r from-blue-600 to-purple-600">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-4xl font-bold text-white mb-6">
              Ready to Transform Your Business?
            </h2>
            <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
              Let our expert team help you choose the right solutions for your business needs. 
              Get a free consultation and custom quote today.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="https://ziontechgroup.com/contact"
                className="bg-white text-blue-600 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-gray-100 transition-colors"
              >
                Get Free Consultation
              </a>
              <a 
                href="tel:+13024640950"
                className="border-2 border-white text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors"
              >
                Call +1 302 464 0950
              </a>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default ServicesPage;
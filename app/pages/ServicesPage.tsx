import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { 
  CheckCircle, 
  ArrowRight, 
  Brain, 
  Cloud, 
  Shield, 
  Database, 
  Code, 
  Smartphone, 
  BarChart3, 
  Users, 
  Zap, 
  Lock,
  Globe,
  Target,
  TrendingUp,
  Clock,
  Star
} from 'lucide-react';

export default function ServicesPage() {
  const microSaasServices = [
    {
      name: "AI Content Generator Pro",
      description: "Generate high-quality content for blogs, social media, and marketing materials using advanced AI.",
      price: "$29/month",
      originalPrice: "$49/month",
      features: [
        "Unlimited content generation",
        "50+ content templates",
        "SEO optimization",
        "Multi-language support",
        "Brand voice customization",
        "Content scheduling"
      ],
      icon: Brain,
      category: "AI Services",
      popular: true
    },
    {
      name: "Smart Analytics Dashboard",
      description: "Real-time business analytics with AI-powered insights and automated reporting.",
      price: "$49/month",
      originalPrice: "$79/month",
      features: [
        "Real-time dashboards",
        "Custom reports",
        "Data visualization",
        "Automated alerts",
        "API integrations",
        "White-label options"
      ],
      icon: BarChart3,
      category: "Analytics",
      popular: true
    },
    {
      name: "Code Assistant AI",
      description: "AI-powered coding assistant that helps developers write better code faster.",
      price: "$39/month",
      features: [
        "Code completion",
        "Bug detection",
        "Code review",
        "Documentation generation",
        "Multi-language support",
        "IDE integrations"
      ],
      icon: Code,
      category: "Development"
    },
    {
      name: "Mobile App Builder",
      description: "No-code platform to create professional mobile apps for iOS and Android.",
      price: "$79/month",
      features: [
        "Drag-and-drop builder",
        "Native performance",
        "App store deployment",
        "Analytics integration",
        "Push notifications",
        "User management"
      ],
      icon: Smartphone,
      category: "Mobile"
    },
    {
      name: "Website Performance Monitor",
      description: "Monitor website performance, uptime, and user experience with detailed analytics.",
      price: "$19/month",
      features: [
        "Uptime monitoring",
        "Performance metrics",
        "User experience tracking",
        "Alert system",
        "Historical data",
        "Multi-site support"
      ],
      icon: Globe,
      category: "Monitoring"
    },
    {
      name: "AI Customer Support Bot",
      description: "Intelligent chatbot that handles customer inquiries 24/7 with natural language processing.",
      price: "$59/month",
      features: [
        "24/7 availability",
        "Multi-language support",
        "Integration APIs",
        "Analytics dashboard",
        "Custom training",
        "Human handoff"
      ],
      icon: Users,
      category: "Customer Service"
    },
    {
      name: "Email Marketing Automation",
      description: "Advanced email marketing platform with AI-powered personalization and automation.",
      price: "$39/month",
      features: [
        "Email automation",
        "AI personalization",
        "A/B testing",
        "Analytics tracking",
        "Template library",
        "List management"
      ],
      icon: Target,
      category: "Marketing"
    },
    {
      name: "Social Media Scheduler",
      description: "Schedule and manage social media posts across multiple platforms with AI optimization.",
      price: "$29/month",
      features: [
        "Multi-platform posting",
        "AI content suggestions",
        "Optimal timing",
        "Analytics reports",
        "Team collaboration",
        "Content calendar"
      ],
      icon: TrendingUp,
      category: "Social Media"
    }
  ];

  const itServices = [
    {
      name: "Cloud Infrastructure Setup",
      description: "Complete cloud migration and infrastructure setup for AWS, Azure, and Google Cloud.",
      price: "Starting at $2,500",
      duration: "2-4 weeks",
      features: [
        "Cloud architecture design",
        "Migration planning and execution",
        "Security implementation",
        "24/7 monitoring setup",
        "Cost optimization",
        "Disaster recovery planning"
      ],
      icon: Cloud
    },
    {
      name: "Cybersecurity Audit & Implementation",
      description: "Comprehensive security assessment and implementation of best practices.",
      price: "Starting at $1,500",
      duration: "1-2 weeks",
      features: [
        "Vulnerability assessment",
        "Penetration testing",
        "Security policy development",
        "Staff training",
        "Compliance auditing",
        "Ongoing monitoring"
      ],
      icon: Shield
    },
    {
      name: "Data Backup & Recovery Solutions",
      description: "Automated backup solutions and disaster recovery planning for business continuity.",
      price: "Starting at $500/month",
      duration: "1 week",
      features: [
        "Automated backups",
        "Disaster recovery planning",
        "Data encryption",
        "Recovery testing",
        "Cloud storage integration",
        "24/7 support"
      ],
      icon: Database
    },
    {
      name: "Network Infrastructure Setup",
      description: "Design and implement secure, scalable network infrastructure for your business.",
      price: "Starting at $3,000",
      duration: "2-3 weeks",
      features: [
        "Network design",
        "Hardware installation",
        "Security configuration",
        "Performance optimization",
        "Documentation",
        "Training and support"
      ],
      icon: Globe
    },
    {
      name: "IT Support & Maintenance",
      description: "Ongoing IT support and maintenance services to keep your systems running smoothly.",
      price: "Starting at $200/month",
      duration: "Ongoing",
      features: [
        "24/7 technical support",
        "System maintenance",
        "Software updates",
        "Hardware monitoring",
        "Remote assistance",
        "Preventive maintenance"
      ],
      icon: Users
    }
  ];

  const aiServices = [
    {
      name: "Custom Machine Learning Models",
      description: "Custom ML models for predictive analytics, recommendation systems, and automation.",
      price: "Starting at $5,000",
      duration: "4-8 weeks",
      features: [
        "Custom model development",
        "Data preprocessing and cleaning",
        "Model training and optimization",
        "API integration",
        "Performance monitoring",
        "Ongoing maintenance"
      ],
      icon: Brain
    },
    {
      name: "Computer Vision Solutions",
      description: "Image recognition, object detection, and visual analysis for various industries.",
      price: "Starting at $3,500",
      duration: "3-6 weeks",
      features: [
        "Image classification",
        "Object detection",
        "Facial recognition",
        "Quality control automation",
        "Real-time processing",
        "Custom training"
      ],
      icon: Target
    },
    {
      name: "Natural Language Processing",
      description: "Text analysis, sentiment analysis, and language understanding solutions.",
      price: "Starting at $2,500",
      duration: "2-4 weeks",
      features: [
        "Text classification",
        "Sentiment analysis",
        "Language translation",
        "Chatbot integration",
        "Document processing",
        "API development"
      ],
      icon: Code
    },
    {
      name: "AI-Powered Business Intelligence",
      description: "Advanced analytics and business intelligence solutions powered by AI.",
      price: "Starting at $4,000",
      duration: "4-6 weeks",
      features: [
        "Predictive analytics",
        "Automated reporting",
        "Data visualization",
        "Trend analysis",
        "Custom dashboards",
        "Integration services"
      ],
      icon: BarChart3
    }
  ];

  return (
    <>
      <Helmet>
        <title>Our Services - Zion Tech Group</title>
        <meta name="description" content="Comprehensive AI and IT services including micro SAAS solutions, cloud infrastructure, cybersecurity, and AI-powered tools for modern businesses." />
        <meta name="keywords" content="AI services, IT solutions, micro SAAS, cloud computing, cybersecurity, data analytics, machine learning" />
      </Helmet>
      
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            Our Services
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Comprehensive AI and IT solutions designed to transform your business and drive growth
          </p>
        </div>
      </section>

      {/* Micro SAAS Services */}
      <section className="py-20 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-900 mb-4">Micro SAAS Services</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Affordable, powerful tools that solve specific business problems with modern technology
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {microSaasServices.map((service, index) => {
              const Icon = service.icon;
              return (
                <div key={index} className={`bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 p-6 border-2 ${service.popular ? 'border-cyan-500 relative' : 'border-gray-200'}`}>
                  {service.popular && (
                    <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                      <span className="bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-4 py-1 rounded-full text-sm font-semibold flex items-center">
                        <Star className="w-4 h-4 mr-1" />
                        Most Popular
                      </span>
                    </div>
                  )}
                  
                  <div className="flex items-center mb-4">
                    <div className="bg-gradient-to-r from-cyan-500 to-blue-600 p-3 rounded-lg">
                      <Icon className="w-6 h-6 text-white" />
                    </div>
                    <div className="ml-4">
                      <span className="text-sm text-cyan-600 font-semibold">{service.category}</span>
                      <h3 className="text-xl font-bold text-slate-900">{service.name}</h3>
                    </div>
                  </div>
                  
                  <p className="text-gray-600 mb-4">{service.description}</p>
                  
                  <div className="mb-4">
                    <span className="text-3xl font-bold text-slate-900">{service.price}</span>
                    {service.originalPrice && (
                      <span className="text-lg text-gray-500 line-through ml-2">{service.originalPrice}</span>
                    )}
                    <span className="text-gray-500 ml-2">per month</span>
                  </div>
                  
                  <ul className="space-y-2 mb-6">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-sm text-gray-600">
                        <CheckCircle className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  
                  <Link 
                    to="/contact" 
                    className={`w-full py-3 rounded-lg font-semibold transition-all duration-300 text-center block ${
                      service.popular 
                        ? 'bg-gradient-to-r from-cyan-500 to-blue-600 text-white hover:from-cyan-600 hover:to-blue-700' 
                        : 'bg-slate-900 text-white hover:bg-slate-800'
                    }`}
                  >
                    Get Started
                  </Link>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* IT Services */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-900 mb-4">IT Services & Solutions</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive IT services to modernize your infrastructure and secure your business
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {itServices.map((service, index) => {
              const Icon = service.icon;
              return (
                <div key={index} className="bg-slate-50 rounded-xl p-8 hover:shadow-lg transition-all duration-300">
                  <div className="flex items-center mb-4">
                    <div className="bg-gradient-to-r from-slate-600 to-slate-800 p-3 rounded-lg">
                      <Icon className="w-6 h-6 text-white" />
                    </div>
                    <div className="ml-4">
                      <h3 className="text-2xl font-bold text-slate-900">{service.name}</h3>
                      <div className="flex items-center text-sm text-gray-500">
                        <Clock className="w-4 h-4 mr-1" />
                        {service.duration}
                      </div>
                    </div>
                  </div>
                  
                  <p className="text-gray-600 mb-6">{service.description}</p>
                  
                  <div className="mb-6">
                    <span className="text-2xl font-bold text-cyan-600">{service.price}</span>
                  </div>
                  
                  <ul className="space-y-3 mb-6">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-gray-600">
                        <CheckCircle className="w-5 h-5 text-green-500 mr-3 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  
                  <Link 
                    to="/contact" 
                    className="w-full bg-slate-900 text-white py-3 rounded-lg font-semibold hover:bg-slate-800 transition-all duration-300 text-center block"
                  >
                    Get Quote
                  </Link>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* AI Services */}
      <section className="py-20 bg-gradient-to-br from-slate-900 to-blue-900 text-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">AI Services & Solutions</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Harness the power of artificial intelligence to automate processes and gain competitive advantages
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {aiServices.map((service, index) => {
              const Icon = service.icon;
              return (
                <div key={index} className="bg-white/10 backdrop-blur-sm rounded-xl p-8 hover:bg-white/20 transition-all duration-300">
                  <div className="flex items-center mb-4">
                    <div className="bg-gradient-to-r from-cyan-500 to-blue-600 p-3 rounded-lg">
                      <Icon className="w-6 h-6 text-white" />
                    </div>
                    <div className="ml-4">
                      <h3 className="text-2xl font-bold">{service.name}</h3>
                      <div className="flex items-center text-sm text-gray-300">
                        <Clock className="w-4 h-4 mr-1" />
                        {service.duration}
                      </div>
                    </div>
                  </div>
                  
                  <p className="text-gray-300 mb-6">{service.description}</p>
                  
                  <div className="mb-6">
                    <span className="text-2xl font-bold text-cyan-400">{service.price}</span>
                  </div>
                  
                  <ul className="space-y-3 mb-6">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-gray-300">
                        <CheckCircle className="w-5 h-5 text-cyan-400 mr-3 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  
                  <Link 
                    to="/contact" 
                    className="w-full bg-gradient-to-r from-cyan-500 to-blue-600 text-white py-3 rounded-lg font-semibold hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 text-center block"
                  >
                    Get Quote
                  </Link>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-cyan-500 to-blue-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-4">Ready to Get Started?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Contact us today for a free consultation and discover how our solutions can transform your business
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              to="/contact" 
              className="bg-white text-cyan-600 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-gray-100 transition-all duration-300 flex items-center justify-center"
            >
              Get Free Consultation
              <ArrowRight className="ml-2 w-5 h-5" />
            </Link>
            <Link 
              to="/pricing" 
              className="border-2 border-white text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-white hover:text-cyan-600 transition-all duration-300"
            >
              View Pricing Plans
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
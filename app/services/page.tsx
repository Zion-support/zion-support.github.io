import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Brain, 
  Shield, 
  Zap, 
  Globe, 
  ArrowRight, 
  Star, 
  Users, 
  Award, 
  BarChart3, 
  Cloud, 
  Sparkles, 
  Mail, 
  Smartphone, 
  Monitor, 
  Target, 
  Calendar,
  Settings,
  MessageSquare,
  FileText,
  DollarSign,
  CheckCircle,
  TrendingUp,
  Clock,
  Database,
  Lock,
  Cpu,
  Network,
  Smartphone as Mobile,
  Code,
  Palette,
  Search,
  Headphones,
  BookOpen,
  Zap as Lightning,
  Globe as World,
  Shield as Security,
  BarChart3 as Analytics
} from 'lucide-react';
import EnhancedSEO from '../components/EnhancedSEO';
import FuturisticBackground from '../components/FuturisticBackground';
import ResponsiveContainer from '../components/ResponsiveContainer';

const ServicesPage = () => {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Zion Tech Group",
    "url": "https://ziontechgroup.com",
    "description": "Comprehensive AI, IT, and Micro SAAS solutions for modern businesses",
    "offers": [
      {
        "@type": "Offer",
        "name": "AI Services",
        "description": "Advanced artificial intelligence solutions"
      },
      {
        "@type": "Offer",
        "name": "IT Services", 
        "description": "Complete IT infrastructure and support"
      },
      {
        "@type": "Offer",
        "name": "Micro SAAS",
        "description": "Ready-to-use software solutions"
      }
    ]
  };

  const aiServices = [
    {
      name: "AI Analytics Dashboard Pro",
      description: "Real-time business intelligence with predictive analytics and custom reporting",
      price: "From $299/month",
      icon: <Analytics className="w-8 h-8" />,
      link: "/ai-analytics-dashboard-pro",
      features: ["Real-time dashboards", "Predictive analytics", "Custom reports", "API integration"],
      category: "Analytics",
      color: "from-blue-500 to-cyan-500"
    },
    {
      name: "AI Cybersecurity Suite Pro",
      description: "Advanced threat protection with AI-powered detection and automated response",
      price: "From $499/month",
      icon: <Security className="w-8 h-8" />,
      link: "/ai-cybersecurity-suite-pro",
      features: ["AI threat detection", "Automated response", "24/7 monitoring", "Compliance reporting"],
      category: "Security",
      color: "from-red-500 to-pink-500"
    },
    {
      name: "AI Content Generation Pro",
      description: "AI-powered content creation with SEO optimization and brand voice consistency",
      price: "From $179/month",
      icon: <FileText className="w-8 h-8" />,
      link: "/ai-content-generation-pro",
      features: ["AI content generation", "SEO optimization", "Brand voice", "Multi-format support"],
      category: "Content",
      color: "from-green-500 to-emerald-500"
    },
    {
      name: "AI Customer Support Chatbot",
      description: "Advanced AI chatbot with natural language processing and multi-language support",
      price: "From $149/month",
      icon: <MessageSquare className="w-8 h-8" />,
      link: "/ai-customer-support-chatbot",
      features: ["NLP processing", "Multi-language", "24/7 availability", "Escalation management"],
      category: "Customer Service",
      color: "from-purple-500 to-violet-500"
    },
    {
      name: "AI Code Assistant Pro",
      description: "AI-powered development environment with intelligent code completion and testing",
      price: "From $199/month",
      icon: <Code className="w-8 h-8" />,
      link: "/ai-code-assistant-pro",
      features: ["AI code completion", "Automated testing", "Code review", "Documentation generation"],
      category: "Development",
      color: "from-orange-500 to-red-500"
    },
    {
      name: "AI Business Intelligence Pro",
      description: "Data-driven insights with advanced analytics and machine learning capabilities",
      price: "From $399/month",
      icon: <TrendingUp className="w-8 h-8" />,
      link: "/ai-business-intelligence-pro",
      features: ["Data visualization", "Machine learning", "Trend analysis", "Custom metrics"],
      category: "Business Intelligence",
      color: "from-indigo-500 to-blue-500"
    }
  ];

  const itServices = [
    {
      name: "Cloud Infrastructure Solutions",
      description: "Scalable cloud architecture with 99.9% uptime guarantee and global CDN",
      price: "From $299/month",
      icon: <Cloud className="w-8 h-8" />,
      link: "/cloud-infrastructure",
      features: ["99.9% uptime SLA", "Global CDN", "Auto-scaling", "24/7 monitoring"],
      category: "Infrastructure",
      color: "from-cyan-500 to-blue-500"
    },
    {
      name: "Cybersecurity Audit & Protection",
      description: "Comprehensive security assessment and protection with compliance reporting",
      price: "From $599/month",
      icon: <Security className="w-8 h-8" />,
      link: "/cybersecurity-audit",
      features: ["Security audit", "Threat assessment", "Compliance reporting", "Incident response"],
      category: "Security",
      color: "from-red-500 to-orange-500"
    },
    {
      name: "DevOps & Automation",
      description: "Complete DevOps pipeline with CI/CD, monitoring, and automated deployments",
      price: "From $399/month",
      icon: <Settings className="w-8 h-8" />,
      link: "/devops-solutions",
      features: ["CI/CD pipeline", "Automated testing", "Infrastructure as code", "Monitoring"],
      category: "DevOps",
      color: "from-green-500 to-teal-500"
    },
    {
      name: "Mobile App Development",
      description: "Native and cross-platform mobile applications with modern UI/UX design",
      price: "From $499/month",
      icon: <Mobile className="w-8 h-8" />,
      link: "/mobile-development",
      features: ["Native development", "Cross-platform", "UI/UX design", "App store deployment"],
      category: "Mobile",
      color: "from-purple-500 to-pink-500"
    },
    {
      name: "Web Development & Design",
      description: "Modern web applications with responsive design and performance optimization",
      price: "From $299/month",
      icon: <Globe className="w-8 h-8" />,
      link: "/web-development",
      features: ["Responsive design", "Performance optimization", "SEO friendly", "Modern frameworks"],
      category: "Web Development",
      color: "from-blue-500 to-indigo-500"
    },
    {
      name: "Network Infrastructure",
      description: "Enterprise-grade network solutions with security and performance optimization",
      price: "From $399/month",
      icon: <Network className="w-8 h-8" />,
      link: "/network-infrastructure",
      features: ["Network design", "Security implementation", "Performance monitoring", "24/7 support"],
      category: "Networking",
      color: "from-teal-500 to-cyan-500"
    }
  ];

  const microSaasServices = [
    {
      name: "Zion Analytics Pro",
      description: "AI-powered business intelligence platform with real-time dashboards",
      price: "From $299/month",
      icon: <Analytics className="w-8 h-8" />,
      link: "/zion-analytics-pro",
      features: ["Real-time dashboards", "Predictive analytics", "Custom reports", "API integration"],
      category: "Analytics",
      color: "from-blue-500 to-cyan-500"
    },
    {
      name: "Zion Security Shield",
      description: "Advanced cybersecurity protection with AI-powered threat detection",
      price: "From $499/month",
      icon: <Security className="w-8 h-8" />,
      link: "/zion-security-shield",
      features: ["AI threat detection", "Automated response", "24/7 monitoring", "Compliance reporting"],
      category: "Security",
      color: "from-red-500 to-pink-500"
    },
    {
      name: "Zion Cloud Vault",
      description: "Secure cloud storage with end-to-end encryption and unlimited scalability",
      price: "From $99/month",
      icon: <Cloud className="w-8 h-8" />,
      link: "/zion-cloud-vault",
      features: ["End-to-end encryption", "Unlimited storage", "Global CDN", "Backup automation"],
      category: "Storage",
      color: "from-green-500 to-emerald-500"
    },
    {
      name: "Zion AI CRM Pro",
      description: "AI-powered customer relationship management with intelligent lead scoring",
      price: "From $199/month",
      icon: <Users className="w-8 h-8" />,
      link: "/zion-ai-crm-pro",
      features: ["AI lead scoring", "Automated follow-ups", "Sales forecasting", "Integration hub"],
      category: "CRM",
      color: "from-purple-500 to-violet-500"
    },
    {
      name: "Zion AI Marketing Automation",
      description: "AI-powered marketing automation with predictive content generation",
      price: "From $149/month",
      icon: <Target className="w-8 h-8" />,
      link: "/zion-ai-marketing-automation-pro",
      features: ["AI content generation", "Multi-channel campaigns", "A/B testing", "ROI tracking"],
      category: "Marketing",
      color: "from-orange-500 to-red-500"
    },
    {
      name: "Zion AI Project Manager Pro",
      description: "AI-powered project management with intelligent task prioritization",
      price: "From $99/month",
      icon: <Calendar className="w-8 h-8" />,
      link: "/zion-ai-project-manager-pro",
      features: ["AI task prioritization", "Resource optimization", "Timeline prediction", "Team collaboration"],
      category: "Project Management",
      color: "from-indigo-500 to-blue-500"
    }
  ];

  const stats = [
    { number: "50+", label: "AI Services", icon: <Brain className="w-6 h-6" /> },
    { number: "25+", label: "IT Solutions", icon: <Shield className="w-6 h-6" /> },
    { number: "60+", label: "Micro SAAS", icon: <Zap className="w-6 h-6" /> },
    { number: "99.9%", label: "Uptime SLA", icon: <Award className="w-6 h-6" /> }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 relative overflow-hidden">
      <EnhancedSEO
        title="Our Services - AI, IT & Micro SAAS Solutions | Zion Tech Group"
        description="Comprehensive technology solutions including AI services, IT infrastructure, and micro SAAS applications. Transform your business with cutting-edge technology."
        keywords="AI services, IT solutions, micro SAAS, cloud infrastructure, cybersecurity, business automation, technology consulting"
        canonical="https://ziontechgroup.com/services"
      />
      <FuturisticBackground />

      {/* Hero Section */}
      <section className="pt-20 pb-16 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-cyan-500/20 to-purple-500/20 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-br from-purple-500/20 to-pink-500/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
        </div>
        
        <ResponsiveContainer className="text-center relative z-10">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-cyan-500/20 to-purple-500/20 border border-cyan-500/30 mb-6">
            <Sparkles className="w-4 h-4 text-cyan-400 mr-2" />
            <span className="text-cyan-400 text-sm font-medium">Comprehensive Technology Solutions</span>
          </div>
          
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400">
              Our Services
            </span>
          </h1>
          
          <p className="text-lg md:text-xl lg:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto leading-relaxed">
            Discover our comprehensive suite of AI services, IT solutions, and micro SAAS applications 
            designed to accelerate your business growth and digital transformation.
          </p>
          
          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-5xl mx-auto">
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
        </ResponsiveContainer>
      </section>

      {/* AI Services Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <ResponsiveContainer>
          <div className="text-center mb-16">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-blue-500/20 to-cyan-500/20 border border-blue-500/30 mb-6">
              <Brain className="w-4 h-4 text-blue-400 mr-2" />
              <span className="text-blue-400 text-sm font-medium">Artificial Intelligence</span>
            </div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">
                AI Services
              </span>
            </h2>
            <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
              Harness the power of artificial intelligence with our cutting-edge AI services designed 
              to automate processes, enhance decision-making, and drive innovation.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {aiServices.map((service, index) => (
              <Link
                key={index}
                to={service.link}
                className="group bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-cyan-500/20 relative overflow-hidden"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/5 to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                
                <div className="relative z-10">
                  <div className="flex items-center mb-4">
                    <div className={`w-12 h-12 rounded-lg bg-gradient-to-r ${service.color} flex items-center justify-center text-white mr-4 group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                      {service.icon}
                    </div>
                    <div className="flex-1">
                      <h3 className="text-lg font-semibold text-white group-hover:text-cyan-400 transition-colors">
                        {service.name}
                      </h3>
                      <p className="text-cyan-400 font-medium text-sm">{service.price}</p>
                    </div>
                  </div>
                  
                  <p className="text-gray-300 text-sm leading-relaxed mb-4">
                    {service.description}
                  </p>
                  
                  <div className="mb-4">
                    <div className="flex flex-wrap gap-1">
                      {service.features.slice(0, 2).map((feature, featureIndex) => (
                        <span
                          key={featureIndex}
                          className="text-xs text-cyan-300 bg-cyan-500/10 px-2 py-1 rounded-full border border-cyan-500/20"
                        >
                          {feature}
                        </span>
                      ))}
                      {service.features.length > 2 && (
                        <span className="text-xs text-gray-400 bg-gray-700/50 px-2 py-1 rounded-full">
                          +{service.features.length - 2} more
                        </span>
                      )}
                    </div>
                  </div>
                  
                  <div className="flex items-center text-cyan-400 text-sm font-medium group-hover:text-cyan-300 transition-colors">
                    Learn More
                    <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </ResponsiveContainer>
      </section>

      {/* IT Services Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-slate-800/50 to-purple-800/50">
        <ResponsiveContainer>
          <div className="text-center mb-16">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-green-500/20 to-emerald-500/20 border border-green-500/30 mb-6">
              <Shield className="w-4 h-4 text-green-400 mr-2" />
              <span className="text-green-400 text-sm font-medium">Information Technology</span>
            </div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-emerald-400">
                IT Services
              </span>
            </h2>
            <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
              Complete IT infrastructure solutions including cloud computing, cybersecurity, 
              development services, and ongoing support to keep your business running smoothly.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {itServices.map((service, index) => (
              <Link
                key={index}
                to={service.link}
                className="group bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-green-500/20 relative overflow-hidden"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-green-500/5 to-emerald-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                
                <div className="relative z-10">
                  <div className="flex items-center mb-4">
                    <div className={`w-12 h-12 rounded-lg bg-gradient-to-r ${service.color} flex items-center justify-center text-white mr-4 group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                      {service.icon}
                    </div>
                    <div className="flex-1">
                      <h3 className="text-lg font-semibold text-white group-hover:text-green-400 transition-colors">
                        {service.name}
                      </h3>
                      <p className="text-green-400 font-medium text-sm">{service.price}</p>
                    </div>
                  </div>
                  
                  <p className="text-gray-300 text-sm leading-relaxed mb-4">
                    {service.description}
                  </p>
                  
                  <div className="mb-4">
                    <div className="flex flex-wrap gap-1">
                      {service.features.slice(0, 2).map((feature, featureIndex) => (
                        <span
                          key={featureIndex}
                          className="text-xs text-green-300 bg-green-500/10 px-2 py-1 rounded-full border border-green-500/20"
                        >
                          {feature}
                        </span>
                      ))}
                      {service.features.length > 2 && (
                        <span className="text-xs text-gray-400 bg-gray-700/50 px-2 py-1 rounded-full">
                          +{service.features.length - 2} more
                        </span>
                      )}
                    </div>
                  </div>
                  
                  <div className="flex items-center text-green-400 text-sm font-medium group-hover:text-green-300 transition-colors">
                    Learn More
                    <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </ResponsiveContainer>
      </section>

      {/* Micro SAAS Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <ResponsiveContainer>
          <div className="text-center mb-16">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-purple-500/20 to-pink-500/20 border border-purple-500/30 mb-6">
              <Zap className="w-4 h-4 text-purple-400 mr-2" />
              <span className="text-purple-400 text-sm font-medium">Ready-to-Use Solutions</span>
            </div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">
                Micro SAAS Solutions
              </span>
            </h2>
            <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
              Ready-to-deploy software solutions that can transform your business operations immediately. 
              Each solution is powered by AI and designed for maximum efficiency and ease of use.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {microSaasServices.map((service, index) => (
              <Link
                key={index}
                to={service.link}
                className="group bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-purple-500/20 relative overflow-hidden"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 to-pink-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                
                <div className="relative z-10">
                  <div className="flex items-center mb-4">
                    <div className={`w-12 h-12 rounded-lg bg-gradient-to-r ${service.color} flex items-center justify-center text-white mr-4 group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                      {service.icon}
                    </div>
                    <div className="flex-1">
                      <h3 className="text-lg font-semibold text-white group-hover:text-purple-400 transition-colors">
                        {service.name}
                      </h3>
                      <p className="text-purple-400 font-medium text-sm">{service.price}</p>
                    </div>
                  </div>
                  
                  <p className="text-gray-300 text-sm leading-relaxed mb-4">
                    {service.description}
                  </p>
                  
                  <div className="mb-4">
                    <div className="flex flex-wrap gap-1">
                      {service.features.slice(0, 2).map((feature, featureIndex) => (
                        <span
                          key={featureIndex}
                          className="text-xs text-purple-300 bg-purple-500/10 px-2 py-1 rounded-full border border-purple-500/20"
                        >
                          {feature}
                        </span>
                      ))}
                      {service.features.length > 2 && (
                        <span className="text-xs text-gray-400 bg-gray-700/50 px-2 py-1 rounded-full">
                          +{service.features.length - 2} more
                        </span>
                      )}
                    </div>
                  </div>
                  
                  <div className="flex items-center text-purple-400 text-sm font-medium group-hover:text-purple-300 transition-colors">
                    Learn More
                    <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </ResponsiveContainer>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-cyan-900/30 to-purple-900/30">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
            Ready to Transform Your Business?
          </h2>
          <p className="text-xl text-gray-300 mb-8 leading-relaxed">
            Choose from our comprehensive suite of services and start your digital transformation journey today. 
            Our experts are ready to help you implement the perfect solution for your business needs.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 flex items-center justify-center group shadow-lg hover:shadow-cyan-500/25 hover:scale-105"
            >
              Get Started Today
              <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link
              to="/pricing"
              className="border border-cyan-400 text-cyan-400 px-8 py-4 rounded-lg font-semibold hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300 group hover:scale-105"
            >
              View Pricing
              <Sparkles className="w-5 h-5 ml-2 group-hover:rotate-12 transition-transform" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ServicesPage;
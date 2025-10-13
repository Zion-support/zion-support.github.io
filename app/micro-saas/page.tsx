import { ArrowRight, BarChart3, Shield, Cloud, Zap, Brain, Users, Target, FileText, Mail, Smartphone, Globe, Star, CheckCircle, Clock, DollarSign, TrendingUp, Lock, Smartphone as Phone, Database, Code, Bot, Wifi, Eye, Settings, Monitor } from "lucide-react";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";

export default function MicroSaas() {
  const microSaasServices = [
    {
      id: "zion-analytics-pro",
      name: "Zion Analytics Pro",
      description: "AI-powered business intelligence platform with real-time dashboards, predictive analytics, and automated reporting. Transform your data into actionable insights.",
      icon: <BarChart3 className="w-8 h-8" />,
      price: "$299",
      period: "month",
      features: [
        "Real-time Analytics Dashboard",
        "Predictive Modeling & Forecasting",
        "Custom Report Generation",
        "API Integration & Data Connectors",
        "Mobile App Access",
        "24/7 Support"
      ],
      color: "from-blue-500 to-cyan-500",
      category: "Analytics",
      popular: true,
      link: "/zion-analytics-pro"
    },
    {
      id: "zion-security-shield",
      name: "Zion Security Shield",
      description: "Advanced cybersecurity protection with threat detection, automated incident response, and compliance reporting. Keep your business safe from cyber threats.",
      icon: <Shield className="w-8 h-8" />,
      price: "$499",
      period: "month",
      features: [
        "Real-time Threat Detection",
        "Automated Incident Response",
        "Compliance Reporting (SOC2, GDPR)",
        "Vulnerability Scanning",
        "Security Training Modules",
        "24/7 Security Monitoring"
      ],
      color: "from-red-500 to-orange-500",
      category: "Security",
      popular: false,
      link: "/zion-security-shield"
    },
    {
      id: "zion-cloud-vault",
      name: "Zion Cloud Vault",
      description: "Secure cloud storage solution with advanced encryption, automated backups, and seamless collaboration tools. Your data, secured and accessible anywhere.",
      icon: <Cloud className="w-8 h-8" />,
      price: "$99",
      period: "month",
      features: [
        "1TB Secure Cloud Storage",
        "End-to-End Encryption",
        "Automated Backup & Sync",
        "Team Collaboration Tools",
        "Version Control & Recovery",
        "Mobile & Desktop Apps"
      ],
      color: "from-indigo-500 to-purple-500",
      category: "Storage",
      popular: false,
      link: "/zion-cloud-vault"
    },
    {
      id: "zion-ai-assistant",
      name: "Zion AI Assistant",
      description: "Intelligent virtual assistant for customer support, lead qualification, and business automation. Powered by advanced natural language processing.",
      icon: <Bot className="w-8 h-8" />,
      price: "$199",
      period: "month",
      features: [
        "Multi-language Support",
        "Sentiment Analysis",
        "CRM Integration",
        "Live Chat Handoff",
        "Custom Training",
        "Analytics Dashboard"
      ],
      color: "from-green-500 to-emerald-500",
      category: "AI Assistant",
      popular: true,
      link: "/zion-ai-assistant"
    },
    {
      id: "zion-content-studio",
      name: "Zion Content Studio",
      description: "AI-powered content creation platform for blogs, social media, marketing materials, and more. Create high-quality content at scale with brand consistency.",
      icon: <FileText className="w-8 h-8" />,
      price: "$149",
      period: "month",
      features: [
        "AI Content Generation",
        "SEO Optimization",
        "Brand Voice Training",
        "Multi-format Output",
        "Plagiarism Detection",
        "Content Calendar Management"
      ],
      color: "from-purple-500 to-pink-500",
      category: "Content",
      popular: false,
      link: "/zion-content-studio"
    },
    {
      id: "zion-marketing-automation",
      name: "Zion Marketing Automation",
      description: "End-to-end marketing automation platform with AI-driven personalization, email campaigns, and lead scoring. Maximize your marketing ROI.",
      icon: <Target className="w-8 h-8" />,
      price: "$249",
      period: "month",
      features: [
        "Email Marketing Automation",
        "Social Media Management",
        "Lead Scoring & Nurturing",
        "A/B Testing Tools",
        "Customer Journey Mapping",
        "ROI Analytics"
      ],
      color: "from-pink-500 to-rose-500",
      category: "Marketing",
      popular: false,
      link: "/zion-marketing-automation"
    },
    {
      id: "zion-code-assistant",
      name: "Zion Code Assistant",
      description: "AI-powered code generation, review, and optimization tool. Support for multiple programming languages with automated testing and documentation.",
      icon: <Code className="w-8 h-8" />,
      price: "$179",
      period: "month",
      features: [
        "AI Code Generation",
        "Bug Detection & Fixes",
        "Performance Optimization",
        "Auto Documentation",
        "Multi-language Support",
        "Team Collaboration"
      ],
      color: "from-yellow-500 to-orange-500",
      category: "Development",
      popular: false,
      link: "/zion-code-assistant"
    },
    {
      id: "zion-crm-pro",
      name: "Zion CRM Pro",
      description: "Intelligent CRM with AI-powered lead qualification, sales forecasting, and automated follow-ups. Integration with major business tools.",
      icon: <Users className="w-8 h-8" />,
      price: "$229",
      period: "month",
      features: [
        "AI Lead Scoring",
        "Sales Forecasting",
        "Automated Follow-ups",
        "Pipeline Management",
        "Integration Hub",
        "Mobile CRM App"
      ],
      color: "from-violet-500 to-purple-500",
      category: "CRM",
      popular: true,
      link: "/zion-crm-pro"
    },
    {
      id: "zion-financial-analytics",
      name: "Zion Financial Analytics",
      description: "Advanced financial modeling and risk assessment platform. Automated reporting, fraud detection, and investment analysis tools.",
      icon: <TrendingUp className="w-8 h-8" />,
      price: "$349",
      period: "month",
      features: [
        "Financial Risk Assessment",
        "Fraud Detection System",
        "Investment Analysis",
        "Compliance Reporting",
        "Cash Flow Forecasting",
        "Tax Optimization"
      ],
      color: "from-amber-500 to-yellow-500",
      category: "Finance",
      popular: false,
      link: "/zion-financial-analytics"
    },
    {
      id: "zion-iot-monitor",
      name: "Zion IoT Monitor",
      description: "Comprehensive IoT device management and monitoring platform. Real-time device tracking, predictive maintenance, and data analytics.",
      icon: <Wifi className="w-8 h-8" />,
      price: "$199",
      period: "month",
      features: [
        "Device Management Dashboard",
        "Predictive Maintenance",
        "Real-time Monitoring",
        "Data Analytics & Insights",
        "Alert System",
        "API Integration"
      ],
      color: "from-cyan-500 to-blue-500",
      category: "IoT",
      popular: false,
      link: "/zion-iot-monitor"
    },
    {
      id: "zion-document-ai",
      name: "Zion Document AI",
      description: "Intelligent document processing and analysis platform. OCR, form recognition, automated data entry, and workflow automation.",
      icon: <FileText className="w-8 h-8" />,
      price: "$159",
      period: "month",
      features: [
        "Advanced OCR Technology",
        "Form Recognition & Processing",
        "Automated Data Extraction",
        "Workflow Automation",
        "Document Classification",
        "API Integration"
      ],
      color: "from-emerald-500 to-green-500",
      category: "Document Processing",
      popular: false,
      link: "/zion-document-ai"
    },
    {
      id: "zion-performance-monitor",
      name: "Zion Performance Monitor",
      description: "Real-time application and infrastructure performance monitoring. Identify bottlenecks, optimize performance, and ensure uptime.",
      icon: <Monitor className="w-8 h-8" />,
      price: "$129",
      period: "month",
      features: [
        "Real-time Performance Monitoring",
        "Bottleneck Identification",
        "Automated Alerts",
        "Performance Analytics",
        "Uptime Monitoring",
        "Custom Dashboards"
      ],
      color: "from-teal-500 to-cyan-500",
      category: "Monitoring",
      popular: false,
      link: "/zion-performance-monitor"
    }
  ];

  const categories = ["All", "Analytics", "Security", "Storage", "AI Assistant", "Content", "Marketing", "Development", "CRM", "Finance", "IoT", "Document Processing", "Monitoring"];

  const testimonials = [
    {
      name: "Sarah Johnson",
      company: "TechStart Inc.",
      role: "CEO",
      content: "Zion Analytics Pro transformed our data analysis. We increased our decision-making speed by 70% and identified new revenue opportunities worth $2M annually.",
      rating: 5,
      service: "Zion Analytics Pro"
    },
    {
      name: "Michael Chen",
      company: "E-commerce Solutions",
      role: "CTO",
      content: "The AI Assistant has revolutionized our customer support. Response times dropped by 80% and customer satisfaction increased to 98%. It's like having a super-powered team member.",
      rating: 5,
      service: "Zion AI Assistant"
    },
    {
      name: "Emily Rodriguez",
      company: "Digital Marketing Agency",
      role: "Operations Director",
      content: "Zion Marketing Automation increased our lead conversion by 150%. The AI-driven personalization and automated workflows saved us 20 hours per week.",
      rating: 5,
      service: "Zion Marketing Automation"
    }
  ];

  return (
    <>
      <Helmet>
        <title>Micro SAAS Solutions - Zion Tech Group | AI-Powered Business Tools</title>
        <meta
          name="description"
          content="Discover our comprehensive suite of micro SAAS solutions including AI analytics, cybersecurity, cloud storage, marketing automation, and more. Transform your business with cutting-edge technology."
        />
        <meta
          name="keywords"
          content="micro SAAS, business intelligence, cybersecurity, cloud storage, AI assistant, content creation, marketing automation, CRM, financial analytics, IoT monitoring, document processing, performance monitoring"
        />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 relative overflow-hidden">
        {/* Animated Background */}
        <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 via-purple-500/10 to-pink-500/10 animate-pulse"></div>
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_50%_50%,rgba(120,119,198,0.3),transparent_50%)]"></div>
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-cyan-500/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl animate-pulse delay-1000"></div>

        {/* Hero Section */}
        <section className="pt-20 pb-16 px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-7xl mx-auto text-center">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-cyan-500/20 to-purple-500/20 border border-cyan-500/30 mb-6">
              <Zap className="w-4 h-4 text-cyan-400 mr-2" />
              <span className="text-cyan-400 text-sm font-medium">50+ Micro SAAS Solutions Available</span>
            </div>
            
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
              Micro SAAS
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 animate-pulse">
                {" "}Solutions
              </span>
            </h1>
            
            <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto leading-relaxed">
              Ready-to-use software solutions that can transform your business operations immediately. 
              From AI-powered analytics to cybersecurity, we have everything you need to scale your business.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
              <Link
                to="/contact"
                className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 flex items-center justify-center group shadow-lg hover:shadow-cyan-500/25 hover:scale-105"
              >
                Get Started Today
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                to="/demo"
                className="border border-cyan-400 text-cyan-400 px-8 py-4 rounded-lg font-semibold hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300 group hover:scale-105"
              >
                Watch Demo
                <Eye className="w-5 h-5 ml-2 group-hover:rotate-12 transition-transform" />
              </Link>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-5xl mx-auto">
              <div className="text-center group">
                <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-r from-cyan-500/20 to-purple-500/20 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <Users className="w-8 h-8 text-cyan-400" />
                </div>
                <div className="text-2xl md:text-3xl font-bold text-white mb-2">10,000+</div>
                <div className="text-gray-300 text-sm">Active Users</div>
              </div>
              <div className="text-center group">
                <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-r from-cyan-500/20 to-purple-500/20 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <CheckCircle className="w-8 h-8 text-green-400" />
                </div>
                <div className="text-2xl md:text-3xl font-bold text-white mb-2">99.9%</div>
                <div className="text-gray-300 text-sm">Uptime SLA</div>
              </div>
              <div className="text-center group">
                <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-r from-cyan-500/20 to-purple-500/20 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <Zap className="w-8 h-8 text-purple-400" />
                </div>
                <div className="text-2xl md:text-3xl font-bold text-white mb-2">50+</div>
                <div className="text-gray-300 text-sm">Solutions</div>
              </div>
              <div className="text-center group">
                <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-r from-cyan-500/20 to-purple-500/20 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <Clock className="w-8 h-8 text-orange-400" />
                </div>
                <div className="text-2xl md:text-3xl font-bold text-white mb-2">24/7</div>
                <div className="text-gray-300 text-sm">Support</div>
              </div>
            </div>
          </div>
        </section>

        {/* Category Filter */}
        <section className="py-8 px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-7xl mx-auto">
            <div className="flex flex-wrap justify-center gap-4 mb-8">
              {categories.map((category) => (
                <button
                  key={category}
                  className="px-6 py-3 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 text-white hover:bg-white/20 transition-all duration-300 hover:scale-105"
                >
                  {category}
                </button>
              ))}
            </div>
          </div>
        </section>

        {/* Micro SAAS Services Grid */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400">
                  Our Micro SAAS Solutions
                </span>
              </h2>
              <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
                Choose from our comprehensive suite of micro SAAS solutions designed to address specific business needs. 
                Each solution is ready to deploy and can be integrated with your existing systems.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {microSaasServices.map((service, index) => (
                <div
                  key={index}
                  className="group bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-cyan-500/10 relative overflow-hidden"
                >
                  {/* Popular Badge */}
                  {service.popular && (
                    <div className="absolute top-4 right-4 z-20">
                      <span className="bg-gradient-to-r from-yellow-500 to-orange-500 text-white text-xs font-bold px-3 py-1 rounded-full">
                        Popular
                      </span>
                    </div>
                  )}

                  {/* Animated background effect */}
                  <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/5 to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  
                  <div className="relative z-10">
                    <div className="flex items-center justify-between mb-4">
                      <div
                        className={`w-16 h-16 rounded-lg bg-gradient-to-r ${service.color} flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-lg`}
                      >
                        {service.icon}
                      </div>
                      <div className="text-right">
                        <div className="text-2xl font-bold text-white">{service.price}</div>
                        <div className="text-gray-400 text-sm">/{service.period}</div>
                      </div>
                    </div>
                    
                    <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-cyan-300 transition-colors">
                      {service.name}
                    </h3>
                    
                    <p className="text-gray-300 mb-4 leading-relaxed text-sm">
                      {service.description}
                    </p>
                    
                    <div className="mb-4">
                      <span className="inline-block bg-cyan-500/20 text-cyan-300 px-3 py-1 rounded-full text-xs font-medium border border-cyan-500/30">
                        {service.category}
                      </span>
                    </div>
                    
                    <div className="space-y-2 mb-6">
                      {service.features.slice(0, 3).map((feature, idx) => (
                        <div key={idx} className="flex items-center text-sm text-gray-300">
                          <CheckCircle className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
                          <span>{feature}</span>
                        </div>
                      ))}
                      {service.features.length > 3 && (
                        <div className="text-sm text-cyan-400">
                          +{service.features.length - 3} more features
                        </div>
                      )}
                    </div>
                    
                    <div className="flex gap-2">
                      <Link
                        to={service.link}
                        className="flex-1 bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-4 py-2 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 text-center text-sm group-hover:scale-105"
                      >
                        Learn More
                      </Link>
                      <Link
                        to="/contact"
                        className="flex-1 border border-cyan-400 text-cyan-400 px-4 py-2 rounded-lg font-semibold hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300 text-center text-sm group-hover:scale-105"
                      >
                        Get Started
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-slate-800/50 to-purple-800/50">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Trusted by Industry Leaders
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                See what our clients say about our micro SAAS solutions
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {testimonials.map((testimonial, index) => (
                <div
                  key={index}
                  className="group bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-cyan-500/10 relative overflow-hidden"
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/5 to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  
                  <div className="relative z-10">
                    <div className="flex items-center mb-4">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                      ))}
                    </div>
                    <p className="text-gray-300 mb-4 italic leading-relaxed">"{testimonial.content}"</p>
                    <div className="mb-2">
                      <div className="font-semibold text-white">{testimonial.name}</div>
                      <div className="text-sm text-gray-400">{testimonial.role}, {testimonial.company}</div>
                      <div className="text-xs text-cyan-400 mt-1">Using {testimonial.service}</div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-cyan-900/30 to-purple-900/30 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
                Ready to Transform Your Business?
              </h2>
              <p className="text-xl text-gray-300 mb-8 leading-relaxed">
                Join thousands of businesses already using our micro SAAS solutions to drive growth and innovation. 
                Start your digital transformation journey today with a free trial.
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
                    <Smartphone className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-white font-semibold mb-2">Phone</h3>
                  <p className="text-cyan-400">+1 302 464 0950</p>
                </div>
                <div className="text-center">
                  <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-lg flex items-center justify-center mx-auto mb-3">
                    <Globe className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-white font-semibold mb-2">Address</h3>
                  <p className="text-cyan-400 text-sm">364 E Main St STE 1008<br />Middletown DE 19709</p>
                </div>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  to="/contact"
                  className="group bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 flex items-center justify-center shadow-lg hover:shadow-cyan-500/25 hover:scale-105"
                >
                  Start Free Trial
                  <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                </Link>
                <Link
                  to="/consultation"
                  className="border border-cyan-400 text-cyan-400 px-8 py-4 rounded-lg font-semibold hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300 hover:scale-105"
                >
                  Schedule Demo
                </Link>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}

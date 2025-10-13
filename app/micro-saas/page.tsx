import { ArrowRight, BarChart3, Shield, Cloud, Zap, Brain, Users, Mail, Smartphone, Globe, CheckCircle, Star, TrendingUp, Database, Code, Target, FileText, Settings, Lock, Monitor, Smartphone as PhoneIcon } from "lucide-react";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";

export default function MicroSaas() {
  const microSaasProducts = [
    {
      name: "Zion Analytics Pro",
      description: "AI-powered business intelligence platform with real-time dashboards, predictive analytics, and automated reporting. Transform your data into actionable insights.",
      icon: <BarChart3 className="w-8 h-8" />,
      price: "From $29/month",
      originalPrice: "$49/month",
      features: [
        "Real-time Analytics Dashboard",
        "Predictive Modeling",
        "Custom Report Builder",
        "API Integration",
        "Mobile App Access",
        "Team Collaboration Tools",
        "Data Export/Import",
        "24/7 Support"
      ],
      color: "from-blue-500 to-cyan-500",
      category: "Analytics",
      link: "/zion-analytics-pro",
      popular: true
    },
    {
      name: "Zion Security Shield",
      description: "Advanced cybersecurity protection with threat detection, automated response, and compliance reporting. Keep your business safe from evolving threats.",
      icon: <Shield className="w-8 h-8" />,
      price: "From $49/month",
      originalPrice: "$79/month",
      features: [
        "Real-time Threat Detection",
        "Automated Incident Response",
        "Compliance Reporting",
        "24/7 Security Monitoring",
        "Vulnerability Scanning",
        "Security Training Modules",
        "Incident Response Playbooks",
        "Priority Support"
      ],
      color: "from-red-500 to-orange-500",
      category: "Security",
      link: "/zion-security-shield",
      popular: true
    },
    {
      name: "Zion Cloud Vault",
      description: "Secure cloud storage solution with advanced encryption, automated backups, and seamless collaboration tools. Your data, secured and accessible anywhere.",
      icon: <Cloud className="w-8 h-8" />,
      price: "From $9/month",
      originalPrice: "$15/month",
      features: [
        "1TB Secure Storage",
        "End-to-End Encryption",
        "Automated Backups",
        "File Versioning",
        "Team Collaboration",
        "Mobile Access",
        "Advanced Sharing Controls",
        "99.9% Uptime SLA"
      ],
      color: "from-green-500 to-emerald-500",
      category: "Storage",
      link: "/zion-cloud-vault"
    },
    {
      name: "Zion AI Assistant",
      description: "Intelligent virtual assistant powered by advanced AI. Handle customer inquiries, automate tasks, and provide 24/7 support for your business.",
      icon: <Brain className="w-8 h-8" />,
      price: "From $39/month",
      originalPrice: "$59/month",
      features: [
        "Natural Language Processing",
        "Multi-language Support",
        "CRM Integration",
        "Custom Training",
        "Analytics Dashboard",
        "API Access",
        "Voice & Text Support",
        "Unlimited Conversations"
      ],
      color: "from-purple-500 to-pink-500",
      category: "AI Assistant",
      link: "/zion-ai-assistant",
      popular: true
    },
    {
      name: "Zion Project Manager",
      description: "AI-powered project management tool with intelligent task allocation, progress tracking, and team collaboration features. Manage projects like never before.",
      icon: <Target className="w-8 h-8" />,
      price: "From $19/month",
      originalPrice: "$29/month",
      features: [
        "Smart Task Management",
        "Team Collaboration",
        "Progress Tracking",
        "Resource Planning",
        "Time Tracking",
        "Gantt Charts",
        "Mobile App",
        "Integration Hub"
      ],
      color: "from-indigo-500 to-purple-500",
      category: "Productivity",
      link: "/zion-project-manager"
    },
    {
      name: "Zion Email Marketing Pro",
      description: "Advanced email marketing automation with AI-driven personalization, A/B testing, and detailed analytics. Boost your email campaign performance.",
      icon: <Mail className="w-8 h-8" />,
      price: "From $24/month",
      originalPrice: "$39/month",
      features: [
        "AI-Powered Personalization",
        "Advanced Segmentation",
        "A/B Testing",
        "Email Templates",
        "Analytics Dashboard",
        "Automation Workflows",
        "CRM Integration",
        "Unlimited Emails"
      ],
      color: "from-orange-500 to-red-500",
      category: "Marketing",
      link: "/zion-email-marketing-pro"
    },
    {
      name: "Zion Code Assistant",
      description: "AI-powered coding assistant that helps developers write better code faster. Features intelligent suggestions, bug detection, and automated testing.",
      icon: <Code className="w-8 h-8" />,
      price: "From $34/month",
      originalPrice: "$49/month",
      features: [
        "Code Generation",
        "Bug Detection",
        "Performance Optimization",
        "Documentation Generation",
        "Multi-language Support",
        "IDE Integration",
        "Code Review",
        "Learning Mode"
      ],
      color: "from-yellow-500 to-orange-500",
      category: "Development",
      link: "/zion-code-assistant"
    },
    {
      name: "Zion Data Insights",
      description: "Transform raw data into meaningful insights with our advanced data visualization and analytics platform. Make data-driven decisions with confidence.",
      icon: <Database className="w-8 h-8" />,
      price: "From $44/month",
      originalPrice: "$69/month",
      features: [
        "Interactive Dashboards",
        "Data Visualization",
        "Custom Reports",
        "Real-time Processing",
        "Data Connectors",
        "Machine Learning Models",
        "Collaborative Analysis",
        "Export Capabilities"
      ],
      color: "from-teal-500 to-cyan-500",
      category: "Data Analytics",
      link: "/zion-data-insights"
    },
    {
      name: "Zion Customer Hub",
      description: "Comprehensive customer relationship management with AI-powered insights, automated workflows, and seamless communication tools.",
      icon: <Users className="w-8 h-8" />,
      price: "From $39/month",
      originalPrice: "$59/month",
      features: [
        "Contact Management",
        "Sales Pipeline",
        "AI Lead Scoring",
        "Communication History",
        "Task Automation",
        "Reporting & Analytics",
        "Mobile Access",
        "Third-party Integrations"
      ],
      color: "from-violet-500 to-purple-500",
      category: "CRM",
      link: "/zion-customer-hub"
    },
    {
      name: "Zion Content Studio",
      description: "AI-powered content creation platform for blogs, social media, and marketing materials. Create engaging content at scale with intelligent assistance.",
      icon: <FileText className="w-8 h-8" />,
      price: "From $29/month",
      originalPrice: "$44/month",
      features: [
        "AI Content Generation",
        "SEO Optimization",
        "Brand Voice Training",
        "Multi-format Output",
        "Content Calendar",
        "Collaboration Tools",
        "Plagiarism Detection",
        "Performance Analytics"
      ],
      color: "from-pink-500 to-rose-500",
      category: "Content",
      link: "/zion-content-studio"
    },
    {
      name: "Zion Monitor Pro",
      description: "Advanced website and application monitoring with real-time alerts, performance tracking, and uptime monitoring. Keep your systems running smoothly.",
      icon: <Monitor className="w-8 h-8" />,
      price: "From $19/month",
      originalPrice: "$29/month",
      features: [
        "Uptime Monitoring",
        "Performance Tracking",
        "Real-time Alerts",
        "Error Tracking",
        "API Monitoring",
        "Custom Dashboards",
        "Mobile Notifications",
        "Historical Reports"
      ],
      color: "from-cyan-500 to-blue-500",
      category: "Monitoring",
      link: "/zion-monitor-pro"
    },
    {
      name: "Zion Mobile Builder",
      description: "No-code mobile app builder with AI assistance. Create professional mobile applications without coding knowledge. Perfect for businesses and entrepreneurs.",
      icon: <PhoneIcon className="w-8 h-8" />,
      price: "From $49/month",
      originalPrice: "$79/month",
      features: [
        "Drag & Drop Builder",
        "AI Design Suggestions",
        "Cross-platform Apps",
        "App Store Publishing",
        "Push Notifications",
        "User Analytics",
        "Custom Integrations",
        "White-label Options"
      ],
      color: "from-emerald-500 to-green-500",
      category: "Mobile Development",
      link: "/zion-mobile-builder",
      popular: true
    }
  ];

  const categories = ["All", "Analytics", "Security", "Storage", "AI Assistant", "Productivity", "Marketing", "Development", "Data Analytics", "CRM", "Content", "Monitoring", "Mobile Development"];

  return (
    <>
      <Helmet>
        <title>Micro SAAS Solutions - Zion Tech Group | Ready-to-Use Software</title>
        <meta
          name="description"
          content="Discover our comprehensive collection of micro SAAS solutions including analytics, security, AI assistants, productivity tools, and more. Ready-to-use software for immediate deployment."
        />
        <meta
          name="keywords"
          content="micro SAAS, software as a service, business tools, analytics, security, AI assistant, productivity, marketing automation, CRM, content creation, mobile apps"
        />
        <link rel="canonical" href="https://ziontechgroup.com/micro-saas" />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 relative overflow-hidden">
        {/* Animated Background */}
        <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 via-purple-500/10 to-pink-500/10 animate-pulse"></div>
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_50%_50%,rgba(120,119,198,0.3),transparent_50%)]"></div>
        
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
              From AI-powered analytics to advanced security tools, we have everything you need to succeed.
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
                <Zap className="w-5 h-5 ml-2 group-hover:rotate-12 transition-transform" />
              </Link>
            </div>
            
            {/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-5xl mx-auto">
              <div className="text-center group">
                <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-r from-cyan-500/20 to-purple-500/20 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <BarChart3 className="w-6 h-6 text-cyan-400" />
                </div>
                <div className="text-2xl md:text-3xl font-bold text-white mb-2">50+</div>
                <div className="text-gray-300 text-sm">Micro SAAS Solutions</div>
              </div>
              <div className="text-center group">
                <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-r from-cyan-500/20 to-purple-500/20 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <Users className="w-6 h-6 text-cyan-400" />
                </div>
                <div className="text-2xl md:text-3xl font-bold text-white mb-2">10,000+</div>
                <div className="text-gray-300 text-sm">Active Users</div>
              </div>
              <div className="text-center group">
                <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-r from-cyan-500/20 to-purple-500/20 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <TrendingUp className="w-6 h-6 text-cyan-400" />
                </div>
                <div className="text-2xl md:text-3xl font-bold text-white mb-2">99.9%</div>
                <div className="text-gray-300 text-sm">Uptime SLA</div>
              </div>
              <div className="text-center group">
                <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-r from-cyan-500/20 to-purple-500/20 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <Star className="w-6 h-6 text-cyan-400" />
                </div>
                <div className="text-2xl md:text-3xl font-bold text-white mb-2">4.9/5</div>
                <div className="text-gray-300 text-sm">User Rating</div>
              </div>
            </div>
          </div>
        </section>

        {/* Products Grid */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400">
                  Featured Micro SAAS Solutions
                </span>
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Ready-to-use software solutions that can transform your business operations immediately. 
                Choose from our comprehensive collection of micro SAAS products.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {microSaasProducts.map((product, index) => (
                <div
                  key={index}
                  className="group bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-cyan-500/10 relative overflow-hidden"
                >
                  {product.popular && (
                    <div className="absolute top-4 right-4 bg-gradient-to-r from-yellow-400 to-orange-500 text-black text-xs font-bold px-2 py-1 rounded-full">
                      POPULAR
                    </div>
                  )}
                  
                  <div className="relative z-10">
                    <div className="flex items-center mb-4">
                      <div
                        className={`w-16 h-16 rounded-lg bg-gradient-to-r ${product.color} flex items-center justify-center text-white mr-4 group-hover:scale-110 transition-transform duration-300 shadow-lg`}
                      >
                        {product.icon}
                      </div>
                      <div className="flex-1">
                        <h3 className="text-xl font-semibold text-white group-hover:text-cyan-300 transition-colors">
                          {product.name}
                        </h3>
                        <div className="flex items-center space-x-2">
                          <span className="text-cyan-400 font-bold text-lg">{product.price}</span>
                          <span className="text-gray-400 line-through text-sm">{product.originalPrice}</span>
                        </div>
                      </div>
                    </div>
                    
                    <p className="text-gray-300 mb-4 leading-relaxed">
                      {product.description}
                    </p>
                    
                    <div className="space-y-2 mb-6">
                      {product.features.slice(0, 4).map((feature, idx) => (
                        <div key={idx} className="flex items-center text-sm text-gray-300">
                          <CheckCircle className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
                          <span>{feature}</span>
                        </div>
                      ))}
                      {product.features.length > 4 && (
                        <div className="text-sm text-cyan-400">
                          +{product.features.length - 4} more features
                        </div>
                      )}
                    </div>
                    
                    <div className="flex items-center justify-between">
                      <span className="text-xs bg-cyan-500/20 text-cyan-300 px-2 py-1 rounded-full border border-cyan-500/30">
                        {product.category}
                      </span>
                      <Link
                        to={product.link}
                        className="inline-flex items-center text-cyan-400 hover:text-cyan-300 font-medium group-hover:translate-x-1 transition-all duration-300"
                      >
                        Learn More
                        <ArrowRight className="w-4 h-4 ml-1" />
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Contact Information Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Ready to Get Started?
              </h2>
              <p className="text-xl text-gray-300 mb-8">
                Join thousands of businesses already using our micro SAAS solutions to drive growth and efficiency. 
                Contact us today for a personalized consultation and demo.
              </p>
              
              {/* Contact Details */}
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
                  Start Your Journey
                  <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                </Link>
                <Link
                  to="/consultation"
                  className="border border-cyan-400 text-cyan-400 px-8 py-4 rounded-lg font-semibold hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300 group hover:scale-105"
                >
                  Free Consultation
                  <Zap className="w-5 h-5 ml-2 group-hover:rotate-12 transition-transform" />
                </Link>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}

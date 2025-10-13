import { ArrowRight, BarChart3, Shield, Cloud, Zap, Brain, Users, Mail, Smartphone, Globe, Star, CheckCircle, TrendingUp, Lock, Database, Code, FileText, Target, Settings, Monitor, Smartphone as Phone, Wifi, Bot, Globe as World, Sparkles } from "lucide-react";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";

export default function MicroSaas() {
  const microSaasProducts = [
    {
      name: "Zion Analytics Pro",
      description: "AI-powered business intelligence platform with real-time dashboards, predictive analytics, and automated reporting. Transform your data into actionable insights.",
      price: "From $29/month",
      originalPrice: "$59/month",
      icon: <BarChart3 className="w-8 h-8" />,
      color: "from-blue-500 to-cyan-500",
      features: [
        "Real-time Analytics Dashboard",
        "Predictive Analytics Engine",
        "Custom Report Builder",
        "API Integration",
        "Multi-data Source Support",
        "Automated Alerts",
        "Mobile App Access",
        "24/7 Support"
      ],
      benefits: [
        "40% faster decision making",
        "60% reduction in manual reporting",
        "99.9% uptime guarantee",
        "Unlimited data sources"
      ],
      link: "/zion-analytics-pro",
      category: "Analytics",
      popular: true
    },
    {
      name: "Zion Security Shield",
      description: "Advanced cybersecurity protection with AI-powered threat detection, automated incident response, and compliance reporting. Keep your business secure 24/7.",
      price: "From $49/month",
      originalPrice: "$99/month",
      icon: <Shield className="w-8 h-8" />,
      color: "from-red-500 to-orange-500",
      features: [
        "AI Threat Detection",
        "Automated Incident Response",
        "Compliance Reporting",
        "Real-time Monitoring",
        "Vulnerability Scanning",
        "Security Training",
        "Incident Management",
        "24/7 Security Operations"
      ],
      benefits: [
        "99.8% threat detection accuracy",
        "50% faster incident response",
        "SOC 2 Type II compliant",
        "Zero false positives"
      ],
      link: "/zion-security-shield",
      category: "Security",
      popular: true
    },
    {
      name: "Zion Cloud Vault",
      description: "Secure cloud storage solution with advanced encryption, automated backups, and seamless collaboration tools. Enterprise-grade security for your data.",
      price: "From $9/month",
      originalPrice: "$19/month",
      icon: <Cloud className="w-8 h-8" />,
      color: "from-purple-500 to-pink-500",
      features: [
        "End-to-End Encryption",
        "Automated Backups",
        "File Versioning",
        "Team Collaboration",
        "Access Controls",
        "Sync Across Devices",
        "Large File Support",
        "API Access"
      ],
      benefits: [
        "Unlimited storage capacity",
        "99.99% data durability",
        "Global CDN distribution",
        "GDPR compliant"
      ],
      link: "/zion-cloud-vault",
      category: "Storage",
      popular: false
    },
    {
      name: "Zion AI Assistant",
      description: "Intelligent virtual assistant powered by advanced AI. Handle customer inquiries, automate tasks, and provide 24/7 support with natural language processing.",
      price: "From $39/month",
      originalPrice: "$79/month",
      icon: <Bot className="w-8 h-8" />,
      color: "from-green-500 to-emerald-500",
      features: [
        "Natural Language Processing",
        "Multi-language Support",
        "CRM Integration",
        "Custom Workflows",
        "Voice Recognition",
        "Sentiment Analysis",
        "Live Chat Handoff",
        "Analytics Dashboard"
      ],
      benefits: [
        "80% reduction in support tickets",
        "24/7 availability",
        "95% customer satisfaction",
        "Multi-platform support"
      ],
      link: "/zion-ai-assistant",
      category: "AI Assistant",
      popular: true
    },
    {
      name: "Zion Content Studio",
      description: "AI-powered content creation platform that generates high-quality articles, social media posts, and marketing materials. Scale your content production effortlessly.",
      price: "From $19/month",
      originalPrice: "$39/month",
      icon: <FileText className="w-8 h-8" />,
      color: "from-indigo-500 to-purple-500",
      features: [
        "AI Content Generation",
        "SEO Optimization",
        "Brand Voice Training",
        "Multi-format Output",
        "Plagiarism Detection",
        "Content Calendar",
        "Team Collaboration",
        "Performance Analytics"
      ],
      benefits: [
        "10x faster content creation",
        "SEO-optimized output",
        "Consistent brand voice",
        "Unlimited content generation"
      ],
      link: "/zion-content-studio",
      category: "Content",
      popular: false
    },
    {
      name: "Zion Marketing Hub",
      description: "Comprehensive marketing automation platform with AI-driven personalization, email campaigns, social media management, and lead scoring capabilities.",
      price: "From $59/month",
      originalPrice: "$119/month",
      icon: <Target className="w-8 h-8" />,
      color: "from-pink-500 to-rose-500",
      features: [
        "Email Marketing Automation",
        "Social Media Management",
        "Lead Scoring & Nurturing",
        "A/B Testing",
        "Campaign Analytics",
        "Customer Segmentation",
        "Landing Page Builder",
        "CRM Integration"
      ],
      benefits: [
        "300% increase in lead conversion",
        "50% time savings on campaigns",
        "Advanced personalization",
        "Real-time performance tracking"
      ],
      link: "/zion-marketing-hub",
      category: "Marketing",
      popular: true
    },
    {
      name: "Zion Code Assistant",
      description: "AI-powered coding assistant that helps developers write better code faster. Features intelligent code completion, bug detection, and automated testing.",
      price: "From $29/month",
      originalPrice: "$59/month",
      icon: <Code className="w-8 h-8" />,
      color: "from-yellow-500 to-orange-500",
      features: [
        "Intelligent Code Completion",
        "Bug Detection & Fixes",
        "Code Review Assistant",
        "Documentation Generation",
        "Multi-language Support",
        "Performance Optimization",
        "Security Analysis",
        "Team Collaboration"
      ],
      benefits: [
        "40% faster development",
        "60% fewer bugs",
        "Support for 50+ languages",
        "Real-time code analysis"
      ],
      link: "/zion-code-assistant",
      category: "Development",
      popular: false
    },
    {
      name: "Zion Data Pipeline",
      description: "Automated data processing and ETL platform that connects, transforms, and loads data from multiple sources. Streamline your data workflows with AI-powered automation.",
      price: "From $79/month",
      originalPrice: "$159/month",
      icon: <Database className="w-8 h-8" />,
      color: "from-teal-500 to-cyan-500",
      features: [
        "Automated ETL Processes",
        "Data Quality Monitoring",
        "Real-time Processing",
        "Multiple Data Sources",
        "Custom Transformations",
        "Error Handling",
        "Data Lineage Tracking",
        "Scalable Infrastructure"
      ],
      benefits: [
        "90% reduction in manual data work",
        "Real-time data processing",
        "99.9% data accuracy",
        "Unlimited data volume"
      ],
      link: "/zion-data-pipeline",
      category: "Data",
      popular: true
    },
    {
      name: "Zion Project Manager",
      description: "AI-enhanced project management tool with intelligent task assignment, progress tracking, and resource optimization. Keep your projects on track and on budget.",
      price: "From $39/month",
      originalPrice: "$79/month",
      icon: <Settings className="w-8 h-8" />,
      color: "from-violet-500 to-purple-500",
      features: [
        "AI Task Assignment",
        "Progress Tracking",
        "Resource Optimization",
        "Team Collaboration",
        "Time Tracking",
        "Budget Management",
        "Risk Assessment",
        "Reporting Dashboard"
      ],
      benefits: [
        "25% faster project completion",
        "30% cost reduction",
        "Improved team productivity",
        "Real-time project insights"
      ],
      link: "/zion-project-manager",
      category: "Project Management",
      popular: false
    },
    {
      name: "Zion Monitor Pro",
      description: "Advanced system monitoring and alerting platform with AI-powered anomaly detection, performance optimization, and predictive maintenance capabilities.",
      price: "From $49/month",
      originalPrice: "$99/month",
      icon: <Monitor className="w-8 h-8" />,
      color: "from-amber-500 to-yellow-500",
      features: [
        "Real-time Monitoring",
        "AI Anomaly Detection",
        "Performance Optimization",
        "Predictive Maintenance",
        "Custom Dashboards",
        "Alert Management",
        "Historical Analysis",
        "API Integration"
      ],
      benefits: [
        "99.9% system uptime",
        "50% faster issue resolution",
        "Predictive maintenance",
        "Comprehensive monitoring"
      ],
      link: "/zion-monitor-pro",
      category: "Monitoring",
      popular: true
    }
  ];

  const categories = ["All", "Analytics", "Security", "Storage", "AI Assistant", "Content", "Marketing", "Development", "Data", "Project Management", "Monitoring"];

  const stats = [
    { number: "50+", label: "Micro SAAS Solutions", icon: <Zap className="w-6 h-6" /> },
    { number: "10,000+", label: "Active Users", icon: <Users className="w-6 h-6" /> },
    { number: "99.9%", label: "Uptime SLA", icon: <Shield className="w-6 h-6" /> },
    { number: "24/7", label: "Support Available", icon: <Phone className="w-6 h-6" /> }
  ];

  const testimonials = [
    {
      name: "Sarah Johnson",
      company: "TechStart Inc.",
      role: "CEO",
      content: "Zion Analytics Pro transformed our data analysis. We now make decisions 40% faster and our reporting is completely automated.",
      rating: 5,
      product: "Zion Analytics Pro"
    },
    {
      name: "Michael Chen",
      company: "E-commerce Solutions",
      role: "CTO",
      content: "The micro SAAS solutions are incredibly powerful and easy to implement. We've saved thousands of hours with their automation tools.",
      rating: 5,
      product: "Zion AI Assistant"
    },
    {
      name: "Emily Rodriguez",
      company: "Digital Marketing Agency",
      role: "Operations Director",
      content: "Zion Marketing Hub increased our lead conversion by 300%. The AI-driven personalization is game-changing.",
      rating: 5,
      product: "Zion Marketing Hub"
    }
  ];

  return (
    <>
      <Helmet>
        <title>Micro SAAS Solutions - Zion Tech Group | Ready-to-Use Software</title>
        <meta
          name="description"
          content="Discover our comprehensive collection of micro SAAS solutions. From AI analytics to cybersecurity, cloud storage to marketing automation - ready-to-use software for immediate deployment."
        />
        <meta
          name="keywords"
          content="micro SAAS, software as a service, business software, AI analytics, cybersecurity, cloud storage, marketing automation, project management, data pipeline, content creation"
        />
        <meta property="og:title" content="Micro SAAS Solutions - Zion Tech Group" />
        <meta property="og:description" content="Ready-to-use software solutions for immediate deployment. AI analytics, cybersecurity, cloud storage, and more." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://ziontechgroup.com/micro-saas" />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 relative overflow-hidden">
        {/* Animated Background */}
        <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 via-purple-500/10 to-pink-500/10 animate-pulse"></div>
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_50%_50%,rgba(120,119,198,0.3),transparent_50%)]"></div>
        
        {/* Hero Section */}
        <section className="pt-20 pb-16 px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-7xl mx-auto text-center">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-cyan-500/20 to-purple-500/20 border border-cyan-500/30 mb-6">
              <Sparkles className="w-4 h-4 text-cyan-400 mr-2" />
              <span className="text-cyan-400 text-sm font-medium">50+ Ready-to-Use Solutions</span>
            </div>
            
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
              Micro
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 animate-pulse">
                {" "}SAAS
              </span>
              <br />
              Solutions
            </h1>
            
            <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto leading-relaxed">
              Ready-to-use software solutions for immediate deployment. From AI analytics to cybersecurity, 
              cloud storage to marketing automation - everything you need to transform your business operations.
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
                <Sparkles className="w-5 h-5 ml-2 group-hover:rotate-12 transition-transform" />
              </Link>
            </div>
            
            {/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-5xl mx-auto">
              {stats.map((stat, index) => (
                <div key={index} className="text-center group">
                  <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-r from-cyan-500/20 to-purple-500/20 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    {stat.icon}
                  </div>
                  <div className="text-2xl md:text-3xl font-bold text-white mb-2">{stat.number}</div>
                  <div className="text-gray-300 text-sm">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Products Grid */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400">
                  Featured Micro SAAS Solutions
                </span>
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Choose from our comprehensive collection of ready-to-use software solutions. 
                Each product is designed for immediate deployment with enterprise-grade features.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {microSaasProducts.map((product, index) => (
                <div
                  key={index}
                  className="group bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-cyan-500/10 relative overflow-hidden"
                >
                  {/* Popular Badge */}
                  {product.popular && (
                    <div className="absolute top-4 right-4 bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-3 py-1 rounded-full text-xs font-semibold">
                      Popular
                    </div>
                  )}
                  
                  {/* Animated background effect */}
                  <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/5 to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  
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
                    
                    {/* Features */}
                    <div className="space-y-2 mb-4">
                      <h4 className="text-white font-semibold text-sm">Key Features:</h4>
                      <div className="grid grid-cols-1 gap-1">
                        {product.features.slice(0, 4).map((feature, idx) => (
                          <div key={idx} className="flex items-center text-sm text-gray-300">
                            <CheckCircle className="w-4 h-4 text-cyan-400 mr-2 flex-shrink-0" />
                            {feature}
                          </div>
                        ))}
                      </div>
                    </div>
                    
                    {/* Benefits */}
                    <div className="space-y-2 mb-6">
                      <h4 className="text-white font-semibold text-sm">Benefits:</h4>
                      <div className="flex flex-wrap gap-2">
                        {product.benefits.map((benefit, idx) => (
                          <span
                            key={idx}
                            className="text-xs bg-cyan-500/20 text-cyan-300 px-2 py-1 rounded-full border border-cyan-500/30"
                          >
                            {benefit}
                          </span>
                        ))}
                      </div>
                    </div>
                    
                    <div className="flex items-center justify-between">
                      <span className="text-xs bg-purple-500/20 text-purple-300 px-2 py-1 rounded-full border border-purple-500/30">
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

        {/* Testimonials Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 relative z-10">
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
                  <div className="flex items-center mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  <p className="text-gray-300 mb-4 italic leading-relaxed">"{testimonial.content}"</p>
                  <div className="mb-2">
                    <div className="font-semibold text-white">{testimonial.name}</div>
                    <div className="text-sm text-gray-400">{testimonial.role}, {testimonial.company}</div>
                    <div className="text-xs text-cyan-400 mt-1">{testimonial.product}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-cyan-900/30 to-purple-900/30 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Ready to Transform Your Business?
            </h2>
            <p className="text-xl text-gray-300 mb-8 leading-relaxed">
              Join thousands of businesses already using our micro SAAS solutions to drive growth and innovation. 
              Start your digital transformation journey today.
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
                className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 flex items-center justify-center group shadow-lg hover:shadow-cyan-500/25 hover:scale-105"
              >
                Start Your Journey
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                to="/services"
                className="border border-cyan-400 text-cyan-400 px-8 py-4 rounded-lg font-semibold hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300 group hover:scale-105"
              >
                Explore All Services
                <Sparkles className="w-5 h-5 ml-2 group-hover:rotate-12 transition-transform" />
              </Link>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}

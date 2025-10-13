import { ArrowRight, Brain, Shield, Zap, Globe, BarChart3, Cloud, Bot, FileText, Users, Target, TrendingUp, Mail, Smartphone, CheckCircle, Star, Sparkles } from "lucide-react";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";

export default function MicroSaas() {
  const microSaasServices = [
    {
      title: "Zion Analytics Pro",
      description: "AI-powered business intelligence platform with real-time dashboards, predictive analytics, and automated reporting. Transform your data into actionable insights.",
      icon: <BarChart3 className="w-8 h-8" />,
      price: "From $29/month",
      originalPrice: "$59/month",
      color: "from-blue-500 to-cyan-500",
      features: ["Real-time Analytics", "Predictive Modeling", "Custom Dashboards", "API Integration", "Mobile App", "White-label Options"],
      link: "/zion-analytics-pro",
      category: "Analytics",
      popular: true
    },
    {
      title: "Zion Security Shield",
      description: "Advanced cybersecurity protection with threat detection, automated response, and compliance reporting. Keep your business safe 24/7.",
      icon: <Shield className="w-8 h-8" />,
      price: "From $49/month",
      originalPrice: "$99/month",
      color: "from-red-500 to-orange-500",
      features: ["Threat Detection", "Automated Response", "Compliance Reports", "24/7 Monitoring", "Incident Response", "Security Training"],
      link: "/zion-security-shield",
      category: "Security",
      popular: true
    },
    {
      title: "Zion Cloud Vault",
      description: "Secure cloud storage solution with advanced encryption, automated backups, and seamless collaboration tools for teams of any size.",
      icon: <Cloud className="w-8 h-8" />,
      price: "From $9/month",
      originalPrice: "$19/month",
      color: "from-indigo-500 to-purple-500",
      features: ["End-to-End Encryption", "Automated Backups", "Team Collaboration", "Version Control", "Mobile Access", "API Integration"],
      link: "/zion-cloud-vault",
      category: "Storage"
    },
    {
      title: "Zion AI Assistant",
      description: "Intelligent virtual assistant for customer support, lead generation, and business automation. Multi-language support with natural language processing.",
      icon: <Bot className="w-8 h-8" />,
      price: "From $39/month",
      originalPrice: "$79/month",
      color: "from-green-500 to-emerald-500",
      features: ["24/7 Support", "Multi-language", "CRM Integration", "Live Chat Handoff", "Sentiment Analysis", "Custom Training"],
      link: "/zion-ai-assistant",
      category: "AI Assistant",
      popular: true
    },
    {
      title: "Zion Content Studio",
      description: "AI-powered content creation platform for blogs, social media, marketing materials, and documentation. Create high-quality content at scale.",
      icon: <FileText className="w-8 h-8" />,
      price: "From $19/month",
      originalPrice: "$39/month",
      color: "from-purple-500 to-pink-500",
      features: ["SEO Optimization", "Brand Voice Training", "Multi-format Output", "Plagiarism Detection", "Content Calendar", "Team Collaboration"],
      link: "/zion-content-studio",
      category: "Content"
    },
    {
      title: "Zion CRM Pro",
      description: "Intelligent customer relationship management with AI-powered lead scoring, sales forecasting, and automated follow-ups.",
      icon: <Users className="w-8 h-8" />,
      price: "From $59/month",
      originalPrice: "$119/month",
      color: "from-violet-500 to-purple-500",
      features: ["Lead Scoring", "Sales Forecasting", "Automated Follow-ups", "Pipeline Management", "Email Integration", "Mobile App"],
      link: "/zion-crm-pro",
      category: "CRM"
    },
    {
      title: "Zion Marketing Hub",
      description: "Complete marketing automation platform with email campaigns, social media management, and lead generation tools.",
      icon: <Target className="w-8 h-8" />,
      price: "From $39/month",
      originalPrice: "$79/month",
      color: "from-pink-500 to-rose-500",
      features: ["Email Automation", "Social Media", "Lead Scoring", "A/B Testing", "Analytics Dashboard", "Template Library"],
      link: "/zion-marketing-hub",
      category: "Marketing"
    },
    {
      title: "Zion Financial Tracker",
      description: "AI-powered financial management with expense tracking, budgeting, investment analysis, and automated reporting.",
      icon: <TrendingUp className="w-8 h-8" />,
      price: "From $29/month",
      originalPrice: "$59/month",
      color: "from-amber-500 to-yellow-500",
      features: ["Expense Tracking", "Budget Planning", "Investment Analysis", "Tax Preparation", "Bill Reminders", "Financial Reports"],
      link: "/zion-financial-tracker",
      category: "Finance"
    },
    {
      title: "Zion Project Manager",
      description: "Intelligent project management with task automation, team collaboration, and progress tracking. Perfect for remote teams.",
      icon: <Zap className="w-8 h-8" />,
      price: "From $24/month",
      originalPrice: "$49/month",
      color: "from-teal-500 to-cyan-500",
      features: ["Task Automation", "Team Collaboration", "Progress Tracking", "Resource Management", "Time Tracking", "Gantt Charts"],
      link: "/zion-project-manager",
      category: "Project Management"
    },
    {
      title: "Zion Email Marketing Pro",
      description: "Advanced email marketing platform with AI-powered personalization, automation workflows, and detailed analytics.",
      icon: <Mail className="w-8 h-8" />,
      price: "From $19/month",
      originalPrice: "$39/month",
      color: "from-orange-500 to-red-500",
      features: ["AI Personalization", "Automation Workflows", "A/B Testing", "Analytics Dashboard", "Template Designer", "List Management"],
      link: "/zion-email-marketing-pro",
      category: "Email Marketing"
    },
    {
      title: "Zion Inventory Manager",
      description: "Smart inventory management with demand forecasting, automated reordering, and real-time tracking across multiple locations.",
      icon: <Globe className="w-8 h-8" />,
      price: "From $34/month",
      originalPrice: "$69/month",
      color: "from-emerald-500 to-green-500",
      features: ["Demand Forecasting", "Automated Reordering", "Multi-location", "Barcode Scanning", "Supplier Management", "Cost Analysis"],
      link: "/zion-inventory-manager",
      category: "Inventory"
    },
    {
      title: "Zion HR Assistant",
      description: "AI-powered human resources management with recruitment automation, employee onboarding, and performance tracking.",
      icon: <Brain className="w-8 h-8" />,
      price: "From $44/month",
      originalPrice: "$89/month",
      color: "from-cyan-500 to-blue-500",
      features: ["Recruitment Automation", "Employee Onboarding", "Performance Tracking", "Time & Attendance", "Payroll Integration", "Compliance Tools"],
      link: "/zion-hr-assistant",
      category: "HR Management"
    }
  ];

  const categories = ["All", "Analytics", "Security", "Storage", "AI Assistant", "Content", "CRM", "Marketing", "Finance", "Project Management", "Email Marketing", "Inventory", "HR Management"];

  const stats = [
    { number: "50+", label: "Micro SAAS Solutions", icon: <Zap className="w-6 h-6" /> },
    { number: "10,000+", label: "Active Users", icon: <Users className="w-6 h-6" /> },
    { number: "99.9%", label: "Uptime SLA", icon: <Shield className="w-6 h-6" /> },
    { number: "24/7", label: "Support Available", icon: <Brain className="w-6 h-6" /> }
  ];

  const testimonials = [
    {
      name: "Sarah Johnson",
      company: "TechStart Inc.",
      role: "CEO",
      content: "Zion Analytics Pro transformed our data analysis. We increased our efficiency by 60% in just 2 months.",
      rating: 5,
      avatar: "SJ"
    },
    {
      name: "Michael Chen",
      company: "E-commerce Solutions",
      role: "CTO",
      content: "The micro SAAS solutions are incredibly powerful and easy to implement. We've saved thousands of hours.",
      rating: 5,
      avatar: "MC"
    },
    {
      name: "Emily Rodriguez",
      company: "Digital Marketing Agency",
      role: "Operations Director",
      content: "Zion Marketing Hub streamlined our entire marketing process. ROI increased by 45% in the first quarter.",
      rating: 5,
      avatar: "ER"
    }
  ];

  return (
    <>
      <Helmet>
        <title>Micro SAAS Solutions - Zion Tech Group | Ready-to-Use Business Software</title>
        <meta
          name="description"
          content="Discover our comprehensive suite of micro SAAS solutions including analytics, security, CRM, marketing automation, and more. Ready-to-use business software starting from $9/month."
        />
        <meta
          name="keywords"
          content="micro saas, business software, analytics, CRM, marketing automation, project management, inventory management, HR software, cloud storage, AI assistant"
        />
        <link rel="canonical" href="https://ziontechgroup.com/micro-saas" />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 relative overflow-hidden">
        {/* Animated Background Elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-cyan-500/20 to-purple-500/20 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-br from-purple-500/20 to-pink-500/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
        </div>

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
              Ready-to-use business software solutions that can transform your operations immediately. 
              From analytics to security, CRM to marketing automation - everything you need to grow your business.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
              <Link
                to="/contact"
                className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 flex items-center justify-center group shadow-lg hover:shadow-cyan-500/25 hover:scale-105"
              >
                Start Free Trial
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

        {/* Services Grid */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
                Our Micro SAAS Solutions
              </h2>
              <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
                Choose from our comprehensive suite of business software solutions. Each tool is designed to solve specific business challenges with powerful features and intuitive interfaces.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {microSaasServices.map((service, index) => (
                <div
                  key={index}
                  className="group bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-cyan-500/10 relative overflow-hidden"
                >
                  {service.popular && (
                    <div className="absolute top-4 right-4">
                      <span className="bg-gradient-to-r from-yellow-400 to-orange-500 text-black text-xs font-bold px-2 py-1 rounded-full">
                        POPULAR
                      </span>
                    </div>
                  )}
                  
                  <div className="relative z-10">
                    <div
                      className={`w-16 h-16 rounded-lg bg-gradient-to-r ${service.color} flex items-center justify-center mb-4 mx-auto group-hover:scale-110 transition-transform duration-300 shadow-lg`}
                    >
                      {service.icon}
                    </div>
                    
                    <div className="text-center mb-4">
                      <span className="text-xs bg-cyan-500/20 text-cyan-300 px-2 py-1 rounded-full border border-cyan-500/30">
                        {service.category}
                      </span>
                    </div>
                    
                    <h3 className="text-xl font-semibold text-white mb-3 text-center group-hover:text-cyan-300 transition-colors">
                      {service.title}
                    </h3>
                    
                    <p className="text-gray-300 text-center mb-4 leading-relaxed text-sm">
                      {service.description}
                    </p>
                    
                    {/* Pricing */}
                    <div className="text-center mb-4">
                      <div className="flex items-center justify-center space-x-2">
                        <span className="text-cyan-400 font-bold text-lg">{service.price}</span>
                        <span className="text-gray-500 line-through text-sm">{service.originalPrice}</span>
                      </div>
                    </div>
                    
                    {/* Features */}
                    <div className="space-y-2 mb-6">
                      {service.features.slice(0, 3).map((feature, idx) => (
                        <div key={idx} className="flex items-center text-sm text-gray-300">
                          <CheckCircle className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
                          <span>{feature}</span>
                        </div>
                      ))}
                      {service.features.length > 3 && (
                        <div className="text-xs text-cyan-400">
                          +{service.features.length - 3} more features
                        </div>
                      )}
                    </div>
                    
                    <div className="text-center">
                      <Link
                        to={service.link}
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
                  <div className="flex items-center mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  <p className="text-gray-300 mb-4 italic leading-relaxed">"{testimonial.content}"</p>
                  <div className="flex items-center">
                    <div className="w-10 h-10 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-full flex items-center justify-center text-white font-bold text-sm mr-3">
                      {testimonial.avatar}
                    </div>
                    <div>
                      <div className="font-semibold text-white">{testimonial.name}</div>
                      <div className="text-sm text-gray-400">{testimonial.role}, {testimonial.company}</div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-cyan-900/30 to-purple-900/30">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
              Ready to Transform Your Business?
            </h2>
            <p className="text-xl text-gray-300 mb-8 leading-relaxed">
              Join thousands of businesses already using our micro SAAS solutions to drive growth and efficiency. 
              Start your free trial today - no credit card required.
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
                Start Free Trial
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                to="/services"
                className="border border-cyan-400 text-cyan-400 px-8 py-4 rounded-lg font-semibold hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300 group hover:scale-105"
              >
                View All Services
                <Sparkles className="w-5 h-5 ml-2 group-hover:rotate-12 transition-transform" />
              </Link>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}

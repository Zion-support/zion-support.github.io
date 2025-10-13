import { ArrowRight, BarChart3, Shield, Cloud, Zap, Users, FileText, Mail, Smartphone, Globe, Brain, Target, TrendingUp, Code, Database, Settings, CheckCircle, Star } from "lucide-react";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";

export default function MicroSaas() {
  const microSaasProducts = [
    {
      name: "Zion Analytics Pro",
      description: "AI-powered business intelligence platform with real-time dashboards, predictive analytics, and automated reporting. Transform your data into actionable insights.",
      price: "From $29/month",
      originalPrice: "$49/month",
      icon: <BarChart3 className="w-8 h-8" />,
      color: "from-blue-500 to-cyan-500",
      features: ["Real-time Analytics", "Predictive Modeling", "Custom Dashboards", "API Integration", "Mobile App", "White-label Options"],
      link: "/zion-analytics-pro",
      category: "Analytics",
      popular: true
    },
    {
      name: "Zion Security Shield",
      description: "Advanced cybersecurity protection with real-time threat detection, automated incident response, and compliance reporting. Enterprise-grade security for small businesses.",
      price: "From $49/month",
      originalPrice: "$79/month",
      icon: <Shield className="w-8 h-8" />,
      color: "from-red-500 to-orange-500",
      features: ["Threat Detection", "Automated Response", "Compliance Reports", "24/7 Monitoring", "Vulnerability Scanning", "Incident Management"],
      link: "/zion-security-shield",
      category: "Security",
      popular: true
    },
    {
      name: "Zion Cloud Vault",
      description: "Secure cloud storage solution with advanced encryption, automated backups, and seamless collaboration tools. Your data, secured and accessible anywhere.",
      price: "From $9/month",
      originalPrice: "$19/month",
      icon: <Cloud className="w-8 h-8" />,
      color: "from-purple-500 to-pink-500",
      features: ["End-to-End Encryption", "Automated Backups", "File Sharing", "Version Control", "Mobile Sync", "Team Collaboration"],
      link: "/zion-cloud-vault",
      category: "Storage"
    },
    {
      name: "Zion AI Content Studio",
      description: "AI-powered content creation platform that generates high-quality blog posts, social media content, product descriptions, and marketing materials at scale.",
      price: "From $39/month",
      originalPrice: "$69/month",
      icon: <FileText className="w-8 h-8" />,
      color: "from-green-500 to-emerald-500",
      features: ["AI Writing Assistant", "SEO Optimization", "Brand Voice Training", "Multi-format Output", "Plagiarism Detection", "Content Calendar"],
      link: "/zion-ai-content-studio",
      category: "Content",
      popular: true
    },
    {
      name: "Zion CRM Assistant",
      description: "Intelligent customer relationship management with AI-powered lead scoring, automated follow-ups, and sales forecasting. Boost your sales productivity.",
      price: "From $59/month",
      originalPrice: "$99/month",
      icon: <Users className="w-8 h-8" />,
      color: "from-indigo-500 to-purple-500",
      features: ["Lead Scoring", "Sales Forecasting", "Automated Follow-ups", "CRM Integration", "Pipeline Management", "Performance Analytics"],
      link: "/zion-crm-assistant",
      category: "CRM"
    },
    {
      name: "Zion Email Optimizer",
      description: "AI-powered email marketing automation with advanced segmentation, A/B testing, and performance analytics. Maximize your email campaign ROI.",
      price: "From $19/month",
      originalPrice: "$39/month",
      icon: <Mail className="w-8 h-8" />,
      color: "from-cyan-500 to-blue-500",
      features: ["Email Automation", "Advanced Segmentation", "A/B Testing", "Performance Analytics", "Template Library", "Deliverability Optimization"],
      link: "/zion-email-optimizer",
      category: "Marketing"
    },
    {
      name: "Zion Project Manager Pro",
      description: "AI-enhanced project management tool with intelligent task allocation, resource optimization, and automated progress tracking. Complete project visibility.",
      price: "From $39/month",
      originalPrice: "$69/month",
      icon: <Target className="w-8 h-8" />,
      color: "from-orange-500 to-red-500",
      features: ["Task Automation", "Resource Optimization", "Progress Tracking", "Team Collaboration", "Time Tracking", "Risk Management"],
      link: "/zion-project-manager-pro",
      category: "Productivity"
    },
    {
      name: "Zion Financial Tracker",
      description: "Comprehensive financial management with AI-powered expense categorization, budget forecasting, and investment tracking. Take control of your finances.",
      price: "From $29/month",
      originalPrice: "$49/month",
      icon: <TrendingUp className="w-8 h-8" />,
      color: "from-emerald-500 to-green-500",
      features: ["Expense Categorization", "Budget Forecasting", "Investment Tracking", "Tax Preparation", "Financial Reports", "Goal Setting"],
      link: "/zion-financial-tracker",
      category: "Finance"
    },
    {
      name: "Zion Code Assistant",
      description: "AI-powered code generation, review, and optimization tool supporting multiple programming languages. Accelerate your development process.",
      price: "From $49/month",
      originalPrice: "$89/month",
      icon: <Code className="w-8 h-8" />,
      color: "from-yellow-500 to-orange-500",
      features: ["Code Generation", "Bug Detection", "Performance Optimization", "Documentation", "Code Review", "Multi-language Support"],
      link: "/zion-code-assistant",
      category: "Development"
    },
    {
      name: "Zion Data Pipeline",
      description: "Automated data processing and integration platform that connects your systems, cleans data, and provides real-time insights. Streamline your data workflow.",
      price: "From $79/month",
      originalPrice: "$149/month",
      icon: <Database className="w-8 h-8" />,
      color: "from-teal-500 to-cyan-500",
      features: ["Data Integration", "ETL Processing", "Real-time Sync", "Data Quality", "API Management", "Custom Connectors"],
      link: "/zion-data-pipeline",
      category: "Data"
    },
    {
      name: "Zion Social Media Manager",
      description: "AI-powered social media management with automated posting, content optimization, and engagement analytics. Grow your social presence intelligently.",
      price: "From $29/month",
      originalPrice: "$59/month",
      icon: <Globe className="w-8 h-8" />,
      color: "from-pink-500 to-rose-500",
      features: ["Automated Posting", "Content Optimization", "Engagement Analytics", "Hashtag Research", "Competitor Analysis", "Multi-platform Support"],
      link: "/zion-social-manager",
      category: "Social Media"
    },
    {
      name: "Zion AI Chatbot Builder",
      description: "No-code chatbot creation platform with natural language processing, multi-language support, and seamless integration. Enhance customer engagement.",
      price: "From $39/month",
      originalPrice: "$79/month",
      icon: <Brain className="w-8 h-8" />,
      color: "from-violet-500 to-purple-500",
      features: ["No-code Builder", "NLP Processing", "Multi-language", "Live Chat Handoff", "Analytics Dashboard", "Custom Integrations"],
      link: "/zion-chatbot-builder",
      category: "AI"
    }
  ];

  const categories = ["All", "Analytics", "Security", "Storage", "Content", "CRM", "Marketing", "Productivity", "Finance", "Development", "Data", "Social Media", "AI"];

  const testimonials = [
    {
      name: "Sarah Johnson",
      company: "TechStart Inc.",
      role: "CEO",
      content: "Zion Analytics Pro transformed our data analysis. We increased our efficiency by 60% and made better business decisions with real-time insights.",
      rating: 5,
      avatar: "SJ"
    },
    {
      name: "Michael Chen",
      company: "E-commerce Solutions",
      role: "CTO",
      content: "The micro SAAS solutions are incredibly powerful and easy to implement. We've saved thousands of hours with their automation tools.",
      rating: 5,
      avatar: "MC"
    },
    {
      name: "Emily Rodriguez",
      company: "Digital Marketing Agency",
      role: "Operations Director",
      content: "Zion AI Content Studio has revolutionized our content creation process. We now produce 5x more content with higher quality and better engagement.",
      rating: 5,
      avatar: "ER"
    }
  ];

  return (
    <>
      <Helmet>
        <title>Micro SAAS Solutions - Zion Tech Group | Ready-to-Use Software Tools</title>
        <meta
          name="description"
          content="Discover our comprehensive collection of micro SAAS solutions including analytics, security, content creation, CRM, marketing automation, and more. Ready-to-deploy software tools for immediate business impact."
        />
        <meta
          name="keywords"
          content="micro SAAS, software as a service, business tools, analytics platform, security solutions, content creation, CRM, marketing automation, project management, financial tracking, code assistant, data pipeline, social media management, AI chatbot"
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
              Micro
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 animate-pulse">
                {" "}SAAS
              </span>
              <br />
              Solutions
            </h1>
            
            <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto leading-relaxed">
              Ready-to-use software solutions that can transform your business operations immediately. 
              From analytics to security, content creation to project management - we have the tools you need.
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
                Discover our comprehensive collection of micro SAAS solutions designed to accelerate your business growth and digital transformation.
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
                    <div className="absolute top-4 right-4">
                      <span className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-gradient-to-r from-yellow-500 to-orange-500 text-white">
                        <Star className="w-3 h-3 mr-1" />
                        Popular
                      </span>
                    </div>
                  )}

                  {/* Animated background effect */}
                  <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/5 to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  
                  <div className="relative z-10">
                    <div className="flex items-center mb-4">
                      <div
                        className={`w-16 h-16 rounded-lg bg-gradient-to-r ${product.color} flex items-center justify-center mr-4 group-hover:scale-110 transition-transform duration-300 shadow-lg`}
                      >
                        {product.icon}
                      </div>
                      <div className="flex-1">
                        <h3 className="text-xl font-semibold text-white group-hover:text-cyan-300 transition-colors">
                          {product.name}
                        </h3>
                        <span className="text-sm text-cyan-400 font-medium">{product.category}</span>
                      </div>
                    </div>

                    <p className="text-gray-300 mb-4 leading-relaxed">
                      {product.description}
                    </p>

                    {/* Pricing */}
                    <div className="mb-4">
                      <div className="flex items-center space-x-2">
                        <span className="text-2xl font-bold text-cyan-400">{product.price}</span>
                        <span className="text-sm text-gray-400 line-through">{product.originalPrice}</span>
                      </div>
                    </div>

                    {/* Features */}
                    <div className="space-y-2 mb-6">
                      {product.features.slice(0, 3).map((feature, idx) => (
                        <div key={idx} className="flex items-center text-sm text-gray-300">
                          <CheckCircle className="w-4 h-4 text-cyan-400 mr-2 flex-shrink-0" />
                          {feature}
                        </div>
                      ))}
                      {product.features.length > 3 && (
                        <div className="text-sm text-cyan-400">
                          +{product.features.length - 3} more features
                        </div>
                      )}
                    </div>

                    <div className="flex space-x-2">
                      <Link
                        to={product.link}
                        className="flex-1 bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-4 py-2 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 text-center group-hover:scale-105"
                      >
                        Learn More
                      </Link>
                      <Link
                        to="/contact"
                        className="px-4 py-2 border border-cyan-400 text-cyan-400 rounded-lg font-semibold hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300 group-hover:scale-105"
                      >
                        Contact
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
                  <div className="flex items-center">
                    <div className="w-10 h-10 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-full flex items-center justify-center text-white font-bold mr-3">
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
        <section className="py-16 px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Ready to Transform Your Business?
              </h2>
              <p className="text-xl text-gray-300 mb-8">
                Join thousands of businesses already using our micro SAAS solutions to drive growth and innovation. 
                Start your digital transformation journey today.
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
                  to="/services"
                  className="border border-cyan-400 text-cyan-400 px-8 py-4 rounded-lg font-semibold hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300 group hover:scale-105"
                >
                  Explore All Services
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

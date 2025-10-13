import { ArrowRight, Zap, Shield, Globe, Database, Code, Smartphone, Brain, BarChart3, Target, Users, Mail, TrendingUp, FileText, Bot, Sparkles, CheckCircle, Star, Award, Clock } from "lucide-react";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";

export default function AiServices() {
  const aiServices = [
    {
      title: "AI Business Intelligence Pro",
      description: "Transform your data into actionable insights with advanced AI analytics, predictive modeling, and real-time dashboards.",
      icon: <BarChart3 className="w-8 h-8" />,
      path: "/ai-business-intelligence-pro",
      color: "from-blue-500 to-cyan-500",
      price: "From $299/month",
      features: ["Real-time Analytics", "Predictive Modeling", "Custom Dashboards", "API Integration"],
      popular: true
    },
    {
      title: "AI Content Generation Suite",
      description: "Create high-quality content at scale with AI-powered writing tools, SEO optimization, and brand voice training.",
      icon: <FileText className="w-8 h-8" />,
      path: "/ai-content-generation-pro",
      color: "from-purple-500 to-pink-500",
      price: "From $199/month",
      features: ["SEO Optimization", "Brand Voice Training", "Multi-format Output", "Plagiarism Detection"],
      popular: true
    },
    {
      title: "AI Customer Support Chatbot",
      description: "Deploy intelligent chatbots with natural language processing, sentiment analysis, and seamless human handoff.",
      icon: <Bot className="w-8 h-8" />,
      path: "/ai-customer-support-chatbot",
      color: "from-green-500 to-emerald-500",
      price: "From $149/month",
      features: ["Multi-language Support", "Sentiment Analysis", "CRM Integration", "Live Chat Handoff"],
      popular: false
    },
    {
      title: "AI Cybersecurity Suite Pro",
      description: "Advanced threat detection and response with AI-powered monitoring, automated incident response, and compliance management.",
      icon: <Shield className="w-8 h-8" />,
      path: "/ai-cybersecurity-suite-pro",
      color: "from-red-500 to-orange-500",
      price: "From $499/month",
      features: ["Threat Detection", "Automated Response", "Compliance Reports", "24/7 Monitoring"],
      popular: true
    },
    {
      title: "AI Marketing Automation",
      description: "End-to-end marketing automation with AI-driven personalization, lead scoring, and campaign optimization.",
      icon: <Target className="w-8 h-8" />,
      path: "/ai-marketing-automation",
      color: "from-indigo-500 to-purple-500",
      price: "From $179/month",
      features: ["Email Automation", "Social Media", "Lead Scoring", "A/B Testing"],
      popular: false
    },
    {
      title: "AI Code Assistant Pro",
      description: "Intelligent code generation, review, and optimization with support for multiple programming languages.",
      icon: <Code className="w-8 h-8" />,
      path: "/ai-code-assistant-pro",
      color: "from-yellow-500 to-orange-500",
      price: "From $129/month",
      features: ["Code Generation", "Bug Detection", "Performance Optimization", "Documentation"],
      popular: false
    },
    {
      title: "AI Data Analytics Dashboard",
      description: "Advanced data processing and visualization with machine learning models and interactive dashboards.",
      icon: <Database className="w-8 h-8" />,
      path: "/ai-analytics-dashboard-pro",
      color: "from-teal-500 to-cyan-500",
      price: "From $249/month",
      features: ["ML Models", "Interactive Dashboards", "Data Pipeline", "Real-time Processing"],
      popular: false
    },
    {
      title: "AI Document Intelligence",
      description: "Intelligent document analysis, extraction, and processing with OCR, form recognition, and workflow automation.",
      icon: <FileText className="w-8 h-8" />,
      path: "/ai-document-intelligence",
      color: "from-emerald-500 to-green-500",
      price: "From $159/month",
      features: ["OCR Technology", "Form Recognition", "Data Extraction", "Workflow Automation"],
      popular: false
    },
    {
      title: "AI Sales CRM Assistant",
      description: "Intelligent CRM with AI-powered lead qualification, sales forecasting, and automated follow-ups.",
      icon: <Users className="w-8 h-8" />,
      path: "/ai-crm-assistant",
      color: "from-violet-500 to-purple-500",
      price: "From $229/month",
      features: ["Lead Scoring", "Sales Forecasting", "Automated Follow-ups", "CRM Integration"],
      popular: false
    },
    {
      title: "AI Financial Analytics",
      description: "Advanced financial modeling and risk assessment with automated reporting, fraud detection, and investment analysis.",
      icon: <TrendingUp className="w-8 h-8" />,
      path: "/ai-financial-analytics",
      color: "from-amber-500 to-yellow-500",
      price: "From $349/month",
      features: ["Risk Assessment", "Fraud Detection", "Investment Analysis", "Compliance Reporting"],
      popular: false
    },
    {
      title: "AI Automation Platform",
      description: "Comprehensive business process automation with AI-powered workflows, decision making, and integration capabilities.",
      icon: <Zap className="w-8 h-8" />,
      path: "/ai-automation",
      color: "from-pink-500 to-rose-500",
      price: "From $199/month",
      features: ["Workflow Automation", "Decision Making", "Integration Hub", "Process Optimization"],
      popular: false
    },
    {
      title: "AI Project Management",
      description: "AI-enhanced project management with intelligent planning, resource optimization, and risk assessment.",
      icon: <Smartphone className="w-8 h-8" />,
      path: "/ai-project-management",
      color: "from-cyan-500 to-blue-500",
      price: "From $179/month",
      features: ["AI Planning", "Resource Optimization", "Risk Assessment", "Progress Tracking"],
      popular: false
    }
  ];

  const stats = [
    { number: "50+", label: "AI Solutions", icon: <Brain className="w-6 h-6" /> },
    { number: "99.9%", label: "Accuracy Rate", icon: <Award className="w-6 h-6" /> },
    { number: "40%", label: "Efficiency Boost", icon: <TrendingUp className="w-6 h-6" /> },
    { number: "24/7", label: "AI Support", icon: <Clock className="w-6 h-6" /> }
  ];

  const testimonials = [
    {
      name: "Sarah Johnson",
      company: "TechStart Inc.",
      role: "CEO",
      content: "Zion's AI solutions transformed our entire business. We're now 40% more efficient and making data-driven decisions every day.",
      rating: 5,
      avatar: "SJ"
    },
    {
      name: "Michael Chen",
      company: "E-commerce Solutions",
      role: "CTO",
      content: "The AI automation platform saved us thousands of hours. Our team can now focus on strategic initiatives instead of repetitive tasks.",
      rating: 5,
      avatar: "MC"
    },
    {
      name: "Emily Rodriguez",
      company: "Digital Marketing Agency",
      role: "Operations Director",
      content: "Outstanding AI services with incredible support. Zion Tech Group is our trusted partner for all AI implementations.",
      rating: 5,
      avatar: "ER"
    }
  ];

  return (
    <>
      <Helmet>
        <title>AI Services - Zion Tech Group | Advanced Artificial Intelligence Solutions</title>
        <meta
          name="description"
          content="Comprehensive AI services including business intelligence, content generation, customer support, cybersecurity, marketing automation, and more. Transform your business with cutting-edge AI technology."
        />
        <meta
          name="keywords"
          content="AI services, artificial intelligence, machine learning, business intelligence, content generation, customer support, cybersecurity, marketing automation, data analytics, document intelligence"
        />
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
              <span className="text-cyan-400 text-sm font-medium">50+ AI Solutions Available</span>
            </div>
            
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
              AI
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 animate-pulse">
                {" "}Services
              </span>
            </h1>
            
            <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto leading-relaxed">
              Transform your business with cutting-edge artificial intelligence solutions. 
              From analytics to automation, we provide comprehensive AI services that drive growth and innovation.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
              <Link
                to="/contact"
                className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 flex items-center justify-center group shadow-lg hover:shadow-cyan-500/25 hover:scale-105"
              >
                Start AI Journey
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
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
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
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Our AI Solutions
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Comprehensive AI services designed to accelerate your business growth and digital transformation.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {aiServices.map((service, index) => (
                <div
                  key={index}
                  className="group bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-cyan-500/10 relative overflow-hidden"
                >
                  {/* Popular Badge */}
                  {service.popular && (
                    <div className="absolute top-4 right-4">
                      <div className="bg-gradient-to-r from-yellow-400 to-orange-500 text-white px-3 py-1 rounded-full text-xs font-bold flex items-center">
                        <Star className="w-3 h-3 mr-1 fill-current" />
                        Popular
                      </div>
                    </div>
                  )}

                  {/* Animated background effect */}
                  <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/5 to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  
                  <div className="relative z-10">
                    <div
                      className={`w-16 h-16 rounded-lg bg-gradient-to-r ${service.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300 shadow-lg`}
                    >
                      {service.icon}
                    </div>
                    <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-cyan-300 transition-colors">
                      {service.title}
                    </h3>
                    <p className="text-gray-300 mb-4 leading-relaxed">
                      {service.description}
                    </p>
                    
                    {/* Price and Features */}
                    <div className="space-y-3">
                      <div className="text-center">
                        <span className="text-cyan-400 font-bold text-lg">{service.price}</span>
                      </div>
                      <div className="flex flex-wrap gap-2 justify-center">
                        {service.features.map((feature, idx) => (
                          <span
                            key={idx}
                            className="text-xs bg-cyan-500/20 text-cyan-300 px-2 py-1 rounded-full border border-cyan-500/30"
                          >
                            {feature}
                          </span>
                        ))}
                      </div>
                    </div>
                    
                    <div className="mt-4 text-center">
                      <Link
                        to={service.path}
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
        <section className="py-20 px-4 sm:px-6 lg:px-8 relative z-10 bg-gradient-to-r from-slate-800/50 to-purple-800/50">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Trusted by Industry Leaders
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                See what our clients say about our AI solutions
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {testimonials.map((testimonial, index) => (
                <div
                  key={index}
                  className="group bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-cyan-500/10"
                >
                  <div className="flex items-center mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  <p className="text-gray-300 mb-4 italic leading-relaxed">"{testimonial.content}"</p>
                  <div className="flex items-center">
                    <div className="w-10 h-10 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-full flex items-center justify-center text-white font-bold mr-3">
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
                Ready to Transform Your Business with AI?
              </h2>
              <p className="text-xl text-gray-300 mb-8">
                Join thousands of businesses already using our AI solutions to drive growth and innovation. 
                Start your AI journey today!
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
                  Start Your AI Journey
                  <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                </Link>
                <Link
                  to="/consultation"
                  className="border border-cyan-400 text-cyan-400 px-8 py-4 rounded-lg font-semibold hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300 hover:scale-105"
                >
                  Free AI Consultation
                </Link>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}

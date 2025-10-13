import { ArrowRight, Zap, Shield, Globe, Database, Code, Smartphone, Brain, Target, Users, FileText, Mail, CheckCircle, Star, TrendingUp, Cpu, Eye, MessageSquare, BarChart3, Settings, Sparkles, Lock, Wifi } from "lucide-react";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";

export default function AiServices() {
  const aiServices = [
    {
      title: "AI Business Intelligence Pro",
      description: "Advanced AI-powered analytics platform with predictive modeling, real-time dashboards, and automated insights. Transform raw data into strategic business intelligence.",
      icon: <BarChart3 className="w-8 h-8" />,
      path: "/ai-business-intelligence-pro",
      color: "from-blue-500 to-cyan-500",
      price: "Starting at $399/month",
      features: ["Predictive Analytics", "Real-time Dashboards", "Automated Insights", "Custom ML Models", "API Integration", "White-label Options"],
      popular: true
    },
    {
      title: "AI Customer Experience Suite",
      description: "Comprehensive customer experience platform with intelligent chatbots, sentiment analysis, and personalized recommendations. Enhance customer satisfaction and loyalty.",
      icon: <Users className="w-8 h-8" />,
      path: "/ai-customer-experience",
      color: "from-purple-500 to-pink-500",
      price: "Starting at $299/month",
      features: ["Intelligent Chatbots", "Sentiment Analysis", "Personalization", "Multi-channel Support", "Analytics Dashboard", "CRM Integration"],
      popular: true
    },
    {
      title: "AI Content Generation Studio",
      description: "Advanced content creation platform with AI writing, image generation, video production, and SEO optimization. Scale your content marketing with AI.",
      icon: <FileText className="w-8 h-8" />,
      path: "/ai-content-generation-pro",
      color: "from-green-500 to-emerald-500",
      price: "Starting at $199/month",
      features: ["AI Writing Assistant", "Image Generation", "Video Creation", "SEO Optimization", "Brand Voice Training", "Content Calendar"],
      popular: true
    },
    {
      title: "AI Cybersecurity Monitor",
      description: "Next-generation AI security platform with threat detection, automated response, and compliance monitoring. Protect your business with intelligent security.",
      icon: <Shield className="w-8 h-8" />,
      path: "/ai-cybersecurity-monitor-pro",
      color: "from-red-500 to-orange-500",
      price: "Starting at $499/month",
      features: ["Threat Detection", "Automated Response", "Compliance Monitoring", "Behavioral Analysis", "Incident Management", "24/7 Monitoring"]
    },
    {
      title: "AI Marketing Automation Pro",
      description: "Intelligent marketing automation with AI-driven personalization, campaign optimization, and customer journey mapping. Maximize your marketing ROI.",
      icon: <Target className="w-8 h-8" />,
      path: "/ai-marketing-automation-pro",
      color: "from-indigo-500 to-purple-500",
      price: "Starting at $349/month",
      features: ["Campaign Optimization", "Customer Journey Mapping", "A/B Testing", "Lead Scoring", "Email Personalization", "Social Media Automation"]
    },
    {
      title: "AI Project Management Intelligence",
      description: "AI-enhanced project management with intelligent resource allocation, risk prediction, and automated reporting. Optimize your project delivery.",
      icon: <Smartphone className="w-8 h-8" />,
      path: "/ai-project-management-pro",
      color: "from-teal-500 to-cyan-500",
      price: "Starting at $249/month",
      features: ["Resource Optimization", "Risk Prediction", "Automated Reporting", "Task Prioritization", "Team Collaboration", "Performance Analytics"]
    },
    {
      title: "AI Document Intelligence",
      description: "Advanced document processing with OCR, intelligent extraction, and automated workflow. Transform your document management with AI.",
      icon: <FileText className="w-8 h-8" />,
      path: "/ai-document-intelligence",
      color: "from-yellow-500 to-orange-500",
      price: "Starting at $179/month",
      features: ["OCR Technology", "Intelligent Extraction", "Workflow Automation", "Document Classification", "Data Validation", "Integration APIs"]
    },
    {
      title: "AI Computer Vision Solutions",
      description: "Advanced computer vision services for image recognition, object detection, and visual analytics. Unlock insights from visual data.",
      icon: <Eye className="w-8 h-8" />,
      path: "/ai-computer-vision",
      color: "from-pink-500 to-rose-500",
      price: "Starting at $399/month",
      features: ["Image Recognition", "Object Detection", "Visual Analytics", "Quality Control", "Surveillance Systems", "Custom Models"]
    },
    {
      title: "AI Conversational AI Platform",
      description: "Enterprise-grade conversational AI with natural language processing, voice recognition, and multi-language support. Build intelligent conversations.",
      icon: <MessageSquare className="w-8 h-8" />,
      path: "/ai-conversational-ai",
      color: "from-violet-500 to-purple-500",
      price: "Starting at $279/month",
      features: ["Natural Language Processing", "Voice Recognition", "Multi-language Support", "Context Awareness", "Integration APIs", "Analytics Dashboard"]
    },
    {
      title: "AI Data Analytics Engine",
      description: "Powerful AI-driven data analytics with machine learning models, predictive insights, and automated reporting. Make data-driven decisions with AI.",
      icon: <Database className="w-8 h-8" />,
      path: "/ai-data-analytics",
      color: "from-emerald-500 to-green-500",
      price: "Starting at $329/month",
      features: ["ML Models", "Predictive Insights", "Automated Reporting", "Data Visualization", "Real-time Processing", "Custom Dashboards"]
    },
    {
      title: "AI Code Assistant Pro",
      description: "Advanced AI code generation, review, and optimization with support for multiple languages. Accelerate your development with intelligent coding assistance.",
      icon: <Code className="w-8 h-8" />,
      path: "/ai-code-assistant-pro",
      color: "from-amber-500 to-yellow-500",
      price: "Starting at $149/month",
      features: ["Code Generation", "Bug Detection", "Performance Optimization", "Documentation", "Code Review", "Multi-language Support"]
    },
    {
      title: "AI Financial Analytics Suite",
      description: "Comprehensive AI financial analysis with fraud detection, risk assessment, and investment optimization. Make smarter financial decisions with AI.",
      icon: <TrendingUp className="w-8 h-8" />,
      path: "/ai-financial-analytics-pro",
      color: "from-cyan-500 to-blue-500",
      price: "Starting at $449/month",
      features: ["Fraud Detection", "Risk Assessment", "Investment Analysis", "Financial Forecasting", "Compliance Monitoring", "Real-time Alerts"]
    }
  ];

  const testimonials = [
    {
      name: "Jennifer Liu",
      company: "Tech Innovations Inc.",
      role: "CEO",
      content: "Zion's AI Business Intelligence Pro transformed our decision-making process. We now have real-time insights that helped us increase revenue by 45% in just 6 months.",
      rating: 5,
      avatar: "JL"
    },
    {
      name: "Marcus Johnson",
      company: "E-commerce Solutions",
      role: "CTO",
      content: "The AI Customer Experience Suite revolutionized our customer support. Response times improved by 80% and customer satisfaction increased to 98%.",
      rating: 5,
      avatar: "MJ"
    },
    {
      name: "Sarah Chen",
      company: "Digital Marketing Agency",
      role: "Operations Director",
      content: "AI Content Generation Studio has been a game-changer. We now produce 10x more content with higher quality and better engagement rates.",
      rating: 5,
      avatar: "SC"
    }
  ];

  const stats = [
    { number: "1000+", label: "AI Models Deployed", icon: <Brain className="w-6 h-6" /> },
    { number: "99.9%", label: "Accuracy Rate", icon: <Target className="w-6 h-6" /> },
    { number: "24/7", label: "AI Monitoring", icon: <Cpu className="w-6 h-6" /> },
    { number: "50+", label: "AI Solutions", icon: <Sparkles className="w-6 h-6" /> }
  ];

  return (
    <>
      <Helmet>
        <title>AI Services - Zion Tech Group | Advanced Artificial Intelligence Solutions</title>
        <meta
          name="description"
          content="Comprehensive AI services including business intelligence, customer experience, content generation, cybersecurity, marketing automation, and computer vision. Transform your business with cutting-edge artificial intelligence solutions."
        />
        <meta
          name="keywords"
          content="AI services, artificial intelligence, machine learning, business intelligence, customer experience, content generation, cybersecurity, marketing automation, computer vision, conversational AI, data analytics, code assistant, financial analytics"
        />
        <link rel="canonical" href="https://ziontechgroup.com/ai-services" />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 relative overflow-hidden">
        {/* Animated Background */}
        <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 via-purple-500/10 to-pink-500/10 animate-pulse"></div>
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_50%_50%,rgba(120,119,198,0.3),transparent_50%)]"></div>
        
        {/* Hero Section */}
        <section className="pt-20 pb-16 px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-7xl mx-auto text-center">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-cyan-500/20 to-purple-500/20 border border-cyan-500/30 mb-6">
              <Brain className="w-4 h-4 text-cyan-400 mr-2" />
              <span className="text-cyan-400 text-sm font-medium">50+ AI Solutions Available</span>
            </div>
            
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
              Advanced
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 animate-pulse">
                {" "}AI Services
              </span>
            </h1>
            
            <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto leading-relaxed">
              Transform your business with cutting-edge artificial intelligence solutions. 
              From business intelligence to computer vision, we provide comprehensive AI services that drive innovation and growth.
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
                to="/consultation"
                className="border border-cyan-400 text-cyan-400 px-8 py-4 rounded-lg font-semibold hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300 group hover:scale-105"
              >
                Free Consultation
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
        <section className="py-16 px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400">
                  Our AI Solutions
                </span>
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
                        className={`w-16 h-16 rounded-lg bg-gradient-to-r ${service.color} flex items-center justify-center mr-4 group-hover:scale-110 transition-transform duration-300 shadow-lg`}
                      >
                        {service.icon}
                      </div>
                      <div className="flex-1">
                        <h3 className="text-xl font-semibold text-white group-hover:text-cyan-300 transition-colors">
                          {service.title}
                        </h3>
                        <span className="text-sm text-cyan-400 font-medium">{service.price}</span>
                      </div>
                    </div>

                    <p className="text-gray-300 mb-4 leading-relaxed">
                      {service.description}
                    </p>

                    {/* Features */}
                    <div className="space-y-2 mb-6">
                      {service.features.slice(0, 3).map((feature, idx) => (
                        <div key={idx} className="flex items-center text-sm text-gray-300">
                          <CheckCircle className="w-4 h-4 text-cyan-400 mr-2 flex-shrink-0" />
                          {feature}
                        </div>
                      ))}
                      {service.features.length > 3 && (
                        <div className="text-sm text-cyan-400">
                          +{service.features.length - 3} more features
                        </div>
                      )}
                    </div>

                    <div className="flex space-x-2">
                      <Link
                        to={service.path}
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
                See what our clients say about our AI services
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
                Ready to Transform Your Business with AI?
              </h2>
              <p className="text-xl text-gray-300 mb-8">
                Join thousands of businesses already using our AI solutions to drive growth and innovation. 
                Contact us today for a personalized consultation.
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
                  to="/services"
                  className="border border-cyan-400 text-cyan-400 px-8 py-4 rounded-lg font-semibold hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300 group hover:scale-105"
                >
                  Explore All Services
                  <Sparkles className="w-5 h-5 ml-2 group-hover:rotate-12 transition-transform" />
                </Link>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}

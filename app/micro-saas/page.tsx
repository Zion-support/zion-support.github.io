import { ArrowRight, Zap, Shield, Globe, BarChart3, Cloud, Bot, Code, Mail, Smartphone, Star, CheckCircle, Users, TrendingUp, Clock, DollarSign } from "lucide-react";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";

export default function MicroSaas() {
  const microSaasServices = [
    {
      name: "Zion Analytics Pro",
      description: "AI-powered business intelligence platform with real-time dashboards, predictive analytics, and automated reporting. Transform your data into actionable insights.",
      price: "From $29/month",
      originalPrice: "$49/month",
      icon: <BarChart3 className="w-8 h-8" />,
      color: "from-blue-500 to-cyan-500",
      features: ["Real-time Analytics", "Predictive Modeling", "Custom Dashboards", "API Integration", "Mobile App", "White-label Options"],
      category: "Analytics",
      link: "/zion-analytics-pro",
      popular: true
    },
    {
      name: "Zion Security Shield",
      description: "Advanced cybersecurity protection with threat detection, automated response, and compliance reporting. Enterprise-grade security for small to medium businesses.",
      price: "From $49/month",
      originalPrice: "$79/month",
      icon: <Shield className="w-8 h-8" />,
      color: "from-red-500 to-orange-500",
      features: ["Threat Detection", "Automated Response", "Compliance Reports", "24/7 Monitoring", "Incident Response", "Security Training"],
      category: "Security",
      link: "/zion-security-shield",
      popular: true
    },
    {
      name: "Zion Cloud Vault",
      description: "Secure cloud storage solution with advanced encryption, file sharing, and collaboration tools. Perfect for teams and businesses of all sizes.",
      price: "From $9/month",
      originalPrice: "$15/month",
      icon: <Cloud className="w-8 h-8" />,
      color: "from-purple-500 to-pink-500",
      features: ["1TB Storage", "End-to-end Encryption", "File Sharing", "Version Control", "Mobile Sync", "Team Collaboration"],
      category: "Storage",
      link: "/zion-cloud-vault"
    },
    {
      name: "Zion AI Chatbot Builder",
      description: "Create intelligent chatbots for your website and social media. No coding required. Deploy in minutes with our drag-and-drop interface.",
      price: "From $19/month",
      originalPrice: "$35/month",
      icon: <Bot className="w-8 h-8" />,
      color: "from-green-500 to-emerald-500",
      features: ["Drag-and-drop Builder", "Multi-language Support", "CRM Integration", "Analytics Dashboard", "Custom Branding", "API Access"],
      category: "AI Tools",
      link: "/zion-ai-chatbot-builder",
      popular: true
    },
    {
      name: "Zion Code Assistant",
      description: "AI-powered code generation, review, and optimization tool. Support for 20+ programming languages with automated testing and documentation.",
      price: "From $39/month",
      originalPrice: "$69/month",
      icon: <Code className="w-8 h-8" />,
      color: "from-yellow-500 to-orange-500",
      features: ["Code Generation", "Bug Detection", "Performance Optimization", "Auto Documentation", "Multi-language Support", "Git Integration"],
      category: "Development",
      link: "/zion-code-assistant"
    },
    {
      name: "Zion Marketing Automation",
      description: "End-to-end marketing automation with AI-driven personalization. Email campaigns, social media management, and lead scoring in one platform.",
      price: "From $29/month",
      originalPrice: "$49/month",
      icon: <TrendingUp className="w-8 h-8" />,
      color: "from-indigo-500 to-purple-500",
      features: ["Email Automation", "Social Media", "Lead Scoring", "A/B Testing", "Analytics", "CRM Integration"],
      category: "Marketing",
      link: "/zion-marketing-automation"
    },
    {
      name: "Zion Document AI",
      description: "Intelligent document processing with OCR, form recognition, and automated data entry. Process thousands of documents in minutes.",
      price: "From $24/month",
      originalPrice: "$39/month",
      icon: <Globe className="w-8 h-8" />,
      color: "from-teal-500 to-cyan-500",
      features: ["OCR Technology", "Form Recognition", "Data Extraction", "Workflow Automation", "API Integration", "Batch Processing"],
      category: "Productivity",
      link: "/zion-document-ai"
    },
    {
      name: "Zion Team Collaboration",
      description: "All-in-one team collaboration platform with project management, communication tools, and file sharing. Boost your team's productivity.",
      price: "From $15/month",
      originalPrice: "$25/month",
      icon: <Users className="w-8 h-8" />,
      color: "from-pink-500 to-rose-500",
      features: ["Project Management", "Team Chat", "File Sharing", "Video Calls", "Task Tracking", "Time Tracking"],
      category: "Collaboration",
      link: "/zion-team-collaboration"
    }
  ];

  const categories = ["All", "Analytics", "Security", "Storage", "AI Tools", "Development", "Marketing", "Productivity", "Collaboration"];

  const stats = [
    { number: "50+", label: "Micro SAAS Solutions", icon: <Zap className="w-6 h-6" /> },
    { number: "10,000+", label: "Active Users", icon: <Users className="w-6 h-6" /> },
    { number: "99.9%", label: "Uptime SLA", icon: <Shield className="w-6 h-6" /> },
    { number: "24/7", label: "Support Available", icon: <Clock className="w-6 h-6" /> }
  ];

  const testimonials = [
    {
      name: "Sarah Johnson",
      company: "TechStart Inc.",
      role: "CEO",
      content: "Zion Analytics Pro transformed our data analysis. We increased our efficiency by 60% and made better business decisions.",
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
      content: "Zion Security Shield gives us peace of mind. The automated threat detection has prevented several potential security breaches.",
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
          content="Discover our comprehensive collection of micro SAAS solutions including analytics, security, storage, AI tools, development, marketing, and productivity software. Ready-to-use tools for immediate deployment."
        />
        <meta
          name="keywords"
          content="micro saas, software as a service, business tools, analytics software, security tools, cloud storage, AI tools, development tools, marketing automation, productivity software, team collaboration"
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
              <Zap className="w-4 h-4 text-cyan-400 mr-2" />
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
              Ready-to-use software solutions that can transform your business operations immediately. 
              No complex setup, no lengthy implementations - just powerful tools that work from day one.
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

        {/* Category Filter */}
        <section className="py-8 px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-7xl mx-auto">
            <div className="flex flex-wrap justify-center gap-4">
              {categories.map((category, index) => (
                <button
                  key={index}
                  className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                    category === "All"
                      ? "bg-gradient-to-r from-cyan-500 to-purple-600 text-white shadow-lg"
                      : "bg-white/10 text-gray-300 hover:bg-white/20 hover:text-white"
                  }`}
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
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400">
                  Featured Micro SAAS Solutions
                </span>
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Choose from our comprehensive collection of ready-to-use software solutions. 
                Each tool is designed to solve specific business challenges with minimal setup time.
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
                  
                  <div className="flex items-center mb-4">
                    <div
                      className={`w-16 h-16 rounded-lg bg-gradient-to-r ${service.color} flex items-center justify-center text-white mr-4 group-hover:scale-110 transition-transform duration-300 shadow-lg`}
                    >
                      {service.icon}
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-semibold text-white group-hover:text-cyan-300 transition-colors">
                        {service.name}
                      </h3>
                      <span className="text-sm text-cyan-400 bg-cyan-500/20 px-2 py-1 rounded-full">
                        {service.category}
                      </span>
                    </div>
                  </div>
                  
                  <p className="text-gray-300 mb-4 leading-relaxed">
                    {service.description}
                  </p>
                  
                  <div className="space-y-3 mb-6">
                    <div className="flex items-center justify-between">
                      <div>
                        <span className="text-2xl font-bold text-cyan-400">{service.price}</span>
                        {service.originalPrice && (
                          <span className="text-sm text-gray-400 line-through ml-2">{service.originalPrice}</span>
                        )}
                      </div>
                      <div className="flex items-center text-yellow-400">
                        <Star className="w-4 h-4 fill-current" />
                        <span className="text-sm ml-1">4.9</span>
                      </div>
                    </div>
                    
                    <div className="flex flex-wrap gap-2">
                      {service.features.slice(0, 3).map((feature, idx) => (
                        <span
                          key={idx}
                          className="text-xs bg-cyan-500/20 text-cyan-300 px-2 py-1 rounded-full border border-cyan-500/30"
                        >
                          {feature}
                        </span>
                      ))}
                      {service.features.length > 3 && (
                        <span className="text-xs text-gray-400">
                          +{service.features.length - 3} more
                        </span>
                      )}
                    </div>
                  </div>
                  
                  <div className="flex gap-2">
                    <Link
                      to={service.link}
                      className="flex-1 bg-gradient-to-r from-cyan-500 to-purple-600 text-white py-2 px-4 rounded-lg font-medium text-center hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 group-hover:scale-105"
                    >
                      Learn More
                    </Link>
                    <Link
                      to="/contact"
                      className="border border-cyan-400 text-cyan-400 py-2 px-4 rounded-lg font-medium hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300"
                    >
                      Contact
                    </Link>
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
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-cyan-900/30 to-purple-900/30 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
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
                <Zap className="w-5 h-5 ml-2 group-hover:rotate-12 transition-transform" />
              </Link>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}

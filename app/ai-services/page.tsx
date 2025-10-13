import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { ArrowRight, Brain, Zap, Shield, Target, BarChart3, Users, DollarSign, Clock, CheckCircle, Star, Sparkles, Cpu, Atom } from "lucide-react";

export default function AIServicesPage() {
  const aiServices = [
    {
      name: "AI Business Intelligence",
      description: "Transform raw data into actionable insights with advanced AI analytics",
      price: "Starting at $299/month",
      icon: <BarChart3 className="w-8 h-8" />,
      link: "/ai-business-intelligence",
      color: "from-blue-500 to-cyan-500",
      features: ["Real-time Analytics", "Predictive Modeling", "Custom Dashboards", "API Integration"]
    },
    {
      name: "AI Customer Support",
      description: "Intelligent chatbots and automated customer service solutions",
      price: "Starting at $199/month",
      icon: <Users className="w-8 h-8" />,
      link: "/ai-customer-support",
      color: "from-green-500 to-emerald-500",
      features: ["Multi-language Support", "Sentiment Analysis", "CRM Integration", "Live Chat Handoff"]
    },
    {
      name: "AI Content Generation",
      description: "Create high-quality content at scale with AI-powered writing tools",
      price: "Starting at $149/month",
      icon: <Target className="w-8 h-8" />,
      link: "/ai-content-generation",
      color: "from-purple-500 to-pink-500",
      features: ["SEO Optimization", "Brand Voice Training", "Multi-format Output", "Plagiarism Detection"]
    },
    {
      name: "AI Cybersecurity",
      description: "Advanced threat detection and response with AI-powered security",
      price: "Starting at $399/month",
      icon: <Shield className="w-8 h-8" />,
      link: "/ai-cybersecurity",
      color: "from-red-500 to-orange-500",
      features: ["Threat Detection", "Automated Response", "Compliance Reports", "24/7 Monitoring"]
    },
    {
      name: "AI Autonomous Systems",
      description: "Self-learning AI systems that operate independently",
      price: "Starting at $2,999/month",
      icon: <Brain className="w-8 h-8" />,
      link: "/ai-autonomous-systems",
      color: "from-indigo-500 to-purple-500",
      features: ["Self-Learning AI", "Real-time Decisions", "Predictive Maintenance", "Safety Protocols"]
    },
    {
      name: "AI Quantum Computing",
      description: "Revolutionary quantum AI algorithms for complex problem solving",
      price: "Starting at $4,999/month",
      icon: <Atom className="w-8 h-8" />,
      link: "/ai-quantum-computing",
      color: "from-cyan-500 to-blue-500",
      features: ["Quantum Algorithms", "Quantum Processing", "Quantum Speedup", "Quantum Security"]
    },
    {
      name: "AI Data Analytics",
      description: "Advanced data processing and visualization with machine learning",
      price: "Starting at $179/month",
      icon: <BarChart3 className="w-8 h-8" />,
      link: "/ai-data-analytics",
      color: "from-teal-500 to-cyan-500",
      features: ["ML Models", "Interactive Dashboards", "Data Pipeline", "Real-time Processing"]
    },
    {
      name: "AI Code Assistant",
      description: "Intelligent code generation, review, and optimization",
      price: "Starting at $129/month",
      icon: <Cpu className="w-8 h-8" />,
      link: "/ai-code-assistant",
      color: "from-yellow-500 to-orange-500",
      features: ["Code Generation", "Bug Detection", "Performance Optimization", "Documentation"]
    },
    {
      name: "AI Marketing Automation",
      description: "End-to-end marketing automation with AI-driven personalization",
      price: "Starting at $199/month",
      icon: <Target className="w-8 h-8" />,
      link: "/ai-marketing-automation",
      color: "from-pink-500 to-rose-500",
      features: ["Email Automation", "Social Media", "Lead Scoring", "A/B Testing"]
    }
  ];

  const categories = [
    { name: "All", count: aiServices.length },
    { name: "Analytics", count: aiServices.filter(s => s.name.includes("Analytics") || s.name.includes("Intelligence")).length },
    { name: "Automation", count: aiServices.filter(s => s.name.includes("Automation") || s.name.includes("Autonomous")).length },
    { name: "Security", count: aiServices.filter(s => s.name.includes("Security") || s.name.includes("Cybersecurity")).length },
    { name: "Content", count: aiServices.filter(s => s.name.includes("Content") || s.name.includes("Generation")).length },
    { name: "Advanced", count: aiServices.filter(s => s.name.includes("Quantum") || s.name.includes("Autonomous")).length }
  ];

  const benefits = [
    {
      icon: <Brain className="w-8 h-8" />,
      title: "Cutting-Edge AI",
      description: "Latest artificial intelligence technologies and machine learning algorithms"
    },
    {
      icon: <Zap className="w-8 h-8" />,
      title: "Instant Results",
      description: "Deploy AI solutions quickly with our pre-built models and APIs"
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: "Enterprise Security",
      description: "Bank-level security with GDPR compliance and data protection"
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Expert Support",
      description: "24/7 support from our team of AI specialists and data scientists"
    }
  ];

  const testimonials = [
    {
      name: "Dr. Sarah Johnson",
      company: "Tech Innovations Inc.",
      role: "CTO",
      content: "Zion's AI services have transformed our entire technology stack. The AI solutions increased our efficiency by 70% in just 6 months.",
      rating: 5
    },
    {
      name: "Michael Chen",
      company: "Data Solutions Corp",
      role: "Head of AI",
      content: "Outstanding AI capabilities and support. The autonomous systems have revolutionized our operations and reduced costs by 50%.",
      rating: 5
    },
    {
      name: "Emily Rodriguez",
      company: "Digital Marketing Agency",
      role: "AI Director",
      content: "The AI content generation and marketing automation tools are incredible. We've scaled our content production by 300% while maintaining quality.",
      rating: 5
    }
  ];

  return (
    <>
      <Helmet>
        <title>AI Services - Advanced Artificial Intelligence Solutions | Zion Tech Group</title>
        <meta
          name="description"
          content="Comprehensive AI services including business intelligence, customer support, content generation, cybersecurity, autonomous systems, and quantum computing. Transform your business with cutting-edge AI."
        />
        <meta
          name="keywords"
          content="AI services, artificial intelligence, machine learning, business intelligence, customer support AI, content generation, AI cybersecurity, autonomous systems, quantum computing, AI automation"
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
              <Brain className="w-4 h-4 text-cyan-400 mr-2" />
              <span className="text-cyan-400 text-sm font-medium">Advanced AI Solutions</span>
            </div>
            
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
              AI
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400">
                {" "}Services
              </span>
            </h1>
            
            <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto leading-relaxed">
              Transform your business with our comprehensive suite of AI services. From business intelligence to autonomous systems, 
              leverage cutting-edge artificial intelligence to drive growth and innovation.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <Link
                to="/contact"
                className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 flex items-center justify-center group shadow-lg hover:shadow-cyan-500/25 hover:scale-105"
              >
                Get Started
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                to="/demo"
                className="border border-cyan-400 text-cyan-400 px-8 py-4 rounded-lg font-semibold hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300 group hover:scale-105"
              >
                Watch Demo
                <Brain className="w-5 h-5 ml-2 group-hover:rotate-12 transition-transform" />
              </Link>
            </div>

            {/* Key Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
              <div className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-cyan-400 mb-2">50+</div>
                <div className="text-gray-300 text-sm">AI Services</div>
              </div>
              <div className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-cyan-400 mb-2">95%</div>
                <div className="text-gray-300 text-sm">Accuracy Rate</div>
              </div>
              <div className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-cyan-400 mb-2">70%</div>
                <div className="text-gray-300 text-sm">Efficiency Gain</div>
              </div>
              <div className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-cyan-400 mb-2">24/7</div>
                <div className="text-gray-300 text-sm">AI Support</div>
              </div>
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400">
                  Why Choose Our AI Services?
                </span>
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Experience the power of cutting-edge artificial intelligence designed for modern enterprises.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {benefits.map((benefit, index) => (
                <div
                  key={index}
                  className="group bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-cyan-500/10"
                >
                  <div className="w-16 h-16 rounded-lg bg-gradient-to-r from-cyan-500 to-purple-600 flex items-center justify-center mb-4 mx-auto group-hover:scale-110 transition-transform duration-300">
                    {benefit.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-3 text-center group-hover:text-cyan-300 transition-colors">
                    {benefit.title}
                  </h3>
                  <p className="text-gray-300 text-center leading-relaxed">
                    {benefit.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* AI Services Grid */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 relative z-10 bg-gradient-to-r from-slate-800/50 to-purple-800/50">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400">
                  Our AI Services
                </span>
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Discover our comprehensive suite of AI services designed to transform your business operations.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {aiServices.map((service, index) => (
                <Link
                  key={index}
                  to={service.link}
                  className="group bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-cyan-500/10"
                >
                  <div className="flex items-center mb-4">
                    <div className={`w-16 h-16 rounded-lg bg-gradient-to-r ${service.color} flex items-center justify-center text-white mr-4 group-hover:scale-110 transition-transform`}>
                      {service.icon}
                    </div>
                    <div className="flex-1">
                      <h3 className="text-lg font-semibold text-white group-hover:text-cyan-300 transition-colors">
                        {service.name}
                      </h3>
                      <p className="text-cyan-400 font-medium text-sm">{service.price}</p>
                    </div>
                  </div>
                  
                  <p className="text-gray-300 text-sm leading-relaxed mb-4">
                    {service.description}
                  </p>
                  
                  <div className="flex flex-wrap gap-2 mb-4">
                    {service.features.map((feature, idx) => (
                      <span
                        key={idx}
                        className="text-xs bg-cyan-500/20 text-cyan-300 px-2 py-1 rounded-full border border-cyan-500/30"
                      >
                        {feature}
                      </span>
                    ))}
                  </div>
                  
                  <div className="flex items-center justify-end">
                    <ArrowRight className="w-4 h-4 text-cyan-400 group-hover:translate-x-1 transition-transform" />
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400">
                  Trusted by Industry Leaders
                </span>
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                See how companies are transforming their operations with our AI services.
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
                  <div>
                    <div className="font-semibold text-white">{testimonial.name}</div>
                    <div className="text-sm text-gray-400">{testimonial.role}, {testimonial.company}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 relative z-10 bg-gradient-to-r from-cyan-900/30 to-purple-900/30">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Ready to Transform with AI?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Join thousands of businesses already using our AI services to drive growth and innovation. 
              Start your AI transformation journey today.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 flex items-center justify-center group shadow-lg hover:shadow-cyan-500/25 hover:scale-105"
              >
                Start Your AI Journey
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                to="/demo"
                className="border border-cyan-400 text-cyan-400 px-8 py-4 rounded-lg font-semibold hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300 group hover:scale-105"
              >
                Schedule Demo
                <Brain className="w-5 h-5 ml-2 group-hover:rotate-12 transition-transform" />
              </Link>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { ArrowRight, Zap, Brain, BarChart3, Shield, Users, Package, Target, TrendingUp, DollarSign, Clock, CheckCircle, Star, Sparkles } from "lucide-react";

export default function MicroSaasPage() {
  const microSaasSolutions = [
    {
      name: "Zion AI Sales Predictor",
      description: "AI-powered sales forecasting and lead scoring with 95% accuracy",
      price: "From $49/month",
      icon: <TrendingUp className="w-8 h-8" />,
      link: "/zion-ai-sales-predictor",
      color: "from-blue-500 to-cyan-500",
      features: ["AI Forecasting", "Lead Scoring", "Revenue Optimization", "Real-time Analytics"],
      category: "Sales & Marketing"
    },
    {
      name: "Zion Smart Inventory",
      description: "AI-powered inventory optimization and demand forecasting",
      price: "From $29/month",
      icon: <Package className="w-8 h-8" />,
      link: "/zion-smart-inventory",
      color: "from-green-500 to-emerald-500",
      features: ["Inventory Optimization", "Demand Forecasting", "Stock Alerts", "Analytics Dashboard"],
      category: "Operations"
    },
    {
      name: "Zion AI Customer Insights",
      description: "Advanced customer segmentation and behavioral analytics",
      price: "From $79/month",
      icon: <Users className="w-8 h-8" />,
      link: "/zion-ai-customer-insights",
      color: "from-purple-500 to-pink-500",
      features: ["Customer Segmentation", "Behavioral Analytics", "Churn Prediction", "Real-time Insights"],
      category: "Customer Analytics"
    },
    {
      name: "Zion Analytics Pro",
      description: "AI-powered business intelligence platform with real-time dashboards",
      price: "From $99/month",
      icon: <BarChart3 className="w-8 h-8" />,
      link: "/zion-analytics-pro",
      color: "from-orange-500 to-red-500",
      features: ["Real-time Analytics", "Predictive Modeling", "Custom Dashboards", "API Integration"],
      category: "Analytics"
    },
    {
      name: "Zion Security Shield",
      description: "Advanced cybersecurity protection with AI threat detection",
      price: "From $149/month",
      icon: <Shield className="w-8 h-8" />,
      link: "/zion-security-shield",
      color: "from-red-500 to-pink-500",
      features: ["Threat Detection", "Automated Response", "Compliance Reports", "24/7 Monitoring"],
      category: "Security"
    },
    {
      name: "Zion Cloud Vault",
      description: "Secure cloud storage solution with advanced encryption",
      price: "From $19/month",
      icon: <Zap className="w-8 h-8" />,
      link: "/zion-cloud-vault",
      color: "from-cyan-500 to-blue-500",
      features: ["Secure Storage", "Advanced Encryption", "File Sync", "Backup Automation"],
      category: "Storage"
    },
    {
      name: "Zion Content Studio",
      description: "AI-powered content creation and management platform",
      price: "From $79/month",
      icon: <Brain className="w-8 h-8" />,
      link: "/zion-content-studio",
      color: "from-indigo-500 to-purple-500",
      features: ["AI Content Generation", "SEO Optimization", "Brand Voice Training", "Multi-format Output"],
      category: "Content"
    },
    {
      name: "Zion Data Sync",
      description: "Automated data synchronization across multiple platforms",
      price: "From $59/month",
      icon: <Target className="w-8 h-8" />,
      link: "/zion-data-sync",
      color: "from-teal-500 to-cyan-500",
      features: ["Real-time Sync", "Data Validation", "Error Handling", "Custom Mappings"],
      category: "Data Management"
    },
    {
      name: "Zion Lead Magnet",
      description: "AI-powered lead generation and qualification system",
      price: "From $89/month",
      icon: <Target className="w-8 h-8" />,
      link: "/zion-lead-magnet",
      color: "from-yellow-500 to-orange-500",
      features: ["Lead Scoring", "Automated Follow-ups", "CRM Integration", "A/B Testing"],
      category: "Sales & Marketing"
    },
    {
      name: "Zion Project Master",
      description: "AI-enhanced project management and team collaboration",
      price: "From $69/month",
      icon: <Users className="w-8 h-8" />,
      link: "/zion-project-master",
      color: "from-violet-500 to-purple-500",
      features: ["Task Automation", "Resource Planning", "Progress Tracking", "Team Collaboration"],
      category: "Project Management"
    },
    {
      name: "Zion Email Automation",
      description: "Intelligent email marketing and automation platform",
      price: "From $49/month",
      icon: <Zap className="w-8 h-8" />,
      link: "/zion-email-automation",
      color: "from-pink-500 to-rose-500",
      features: ["Email Automation", "Personalization", "A/B Testing", "Analytics"],
      category: "Marketing"
    },
    {
      name: "Zion Social Scheduler",
      description: "AI-powered social media management and scheduling",
      price: "From $39/month",
      icon: <Sparkles className="w-8 h-8" />,
      link: "/zion-social-scheduler",
      color: "from-emerald-500 to-green-500",
      features: ["Auto-scheduling", "Content Optimization", "Engagement Tracking", "Multi-platform"],
      category: "Social Media"
    }
  ];

  const categories = [
    { name: "All", count: microSaasSolutions.length },
    { name: "Sales & Marketing", count: microSaasSolutions.filter(s => s.category === "Sales & Marketing").length },
    { name: "Analytics", count: microSaasSolutions.filter(s => s.category === "Analytics").length },
    { name: "Operations", count: microSaasSolutions.filter(s => s.category === "Operations").length },
    { name: "Security", count: microSaasSolutions.filter(s => s.category === "Security").length },
    { name: "Content", count: microSaasSolutions.filter(s => s.category === "Content").length }
  ];

  const benefits = [
    {
      icon: <Zap className="w-8 h-8" />,
      title: "Instant Deployment",
      description: "Get up and running in minutes with our ready-to-use solutions"
    },
    {
      icon: <Brain className="w-8 h-8" />,
      title: "AI-Powered Intelligence",
      description: "Leverage cutting-edge AI to automate and optimize your business processes"
    },
    {
      icon: <DollarSign className="w-8 h-8" />,
      title: "Cost-Effective",
      description: "Affordable pricing with no hidden fees or long-term contracts"
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: "Enterprise Security",
      description: "Bank-level security with GDPR compliance and data protection"
    }
  ];

  const testimonials = [
    {
      name: "Sarah Johnson",
      company: "TechStart Inc.",
      role: "CEO",
      content: "Zion's micro SAAS solutions transformed our entire operation. We've increased efficiency by 60% and reduced costs by 40%.",
      rating: 5
    },
    {
      name: "Michael Chen",
      company: "E-commerce Solutions",
      role: "CTO",
      content: "The AI-powered tools are incredibly powerful and easy to implement. We've saved thousands of hours with automation.",
      rating: 5
    },
    {
      name: "Emily Rodriguez",
      company: "Digital Marketing Agency",
      role: "Operations Director",
      content: "Outstanding support and cutting-edge technology. Zion Tech Group is our trusted partner for all digital solutions.",
      rating: 5
    }
  ];

  return (
    <>
      <Helmet>
        <title>Micro SAAS Solutions - AI-Powered Business Tools | Zion Tech Group</title>
        <meta
          name="description"
          content="Discover our comprehensive suite of micro SAAS solutions. AI-powered tools for sales, marketing, analytics, operations, and more. Ready-to-use software that transforms your business instantly."
        />
        <meta
          name="keywords"
          content="micro SAAS, business software, AI tools, sales automation, marketing automation, analytics, inventory management, customer insights, project management, email automation"
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
              <Zap className="w-4 h-4 text-cyan-400 mr-2" />
              <span className="text-cyan-400 text-sm font-medium">Ready-to-Use AI Solutions</span>
            </div>
            
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
              Micro SAAS
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400">
                {" "}Solutions
              </span>
            </h1>
            
            <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto leading-relaxed">
              Transform your business with our comprehensive suite of AI-powered micro SAAS solutions. 
              Ready-to-use software that delivers instant results and measurable growth.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
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

            {/* Key Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
              <div className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-cyan-400 mb-2">50+</div>
                <div className="text-gray-300 text-sm">Solutions Available</div>
              </div>
              <div className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-cyan-400 mb-2">10,000+</div>
                <div className="text-gray-300 text-sm">Active Users</div>
              </div>
              <div className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-cyan-400 mb-2">99.9%</div>
                <div className="text-gray-300 text-sm">Uptime SLA</div>
              </div>
              <div className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-cyan-400 mb-2">24/7</div>
                <div className="text-gray-300 text-sm">Support</div>
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
                  Why Choose Our Micro SAAS Solutions?
                </span>
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Experience the power of AI-driven business tools designed for modern enterprises.
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

        {/* Solutions Grid */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 relative z-10 bg-gradient-to-r from-slate-800/50 to-purple-800/50">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400">
                  Our Micro SAAS Solutions
                </span>
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Choose from our comprehensive suite of AI-powered business solutions designed to drive growth and efficiency.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {microSaasSolutions.map((solution, index) => (
                <Link
                  key={index}
                  to={solution.link}
                  className="group bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-cyan-500/10"
                >
                  <div className="flex items-center mb-4">
                    <div className={`w-16 h-16 rounded-lg bg-gradient-to-r ${solution.color} flex items-center justify-center text-white mr-4 group-hover:scale-110 transition-transform`}>
                      {solution.icon}
                    </div>
                    <div className="flex-1">
                      <h3 className="text-lg font-semibold text-white group-hover:text-cyan-300 transition-colors">
                        {solution.name}
                      </h3>
                      <p className="text-cyan-400 font-medium text-sm">{solution.price}</p>
                    </div>
                  </div>
                  
                  <p className="text-gray-300 text-sm leading-relaxed mb-4">
                    {solution.description}
                  </p>
                  
                  <div className="flex flex-wrap gap-2 mb-4">
                    {solution.features.map((feature, idx) => (
                      <span
                        key={idx}
                        className="text-xs bg-cyan-500/20 text-cyan-300 px-2 py-1 rounded-full border border-cyan-500/30"
                      >
                        {feature}
                      </span>
                    ))}
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <span className="text-xs text-gray-400 bg-gray-700/50 px-2 py-1 rounded">
                      {solution.category}
                    </span>
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
                  Trusted by Businesses Worldwide
                </span>
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                See how companies are transforming their operations with our micro SAAS solutions.
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
              Ready to Transform Your Business?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Join thousands of businesses already using our micro SAAS solutions to drive growth and efficiency. 
              Start your free trial today.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
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
                Schedule Demo
                <Sparkles className="w-5 h-5 ml-2 group-hover:rotate-12 transition-transform" />
              </Link>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
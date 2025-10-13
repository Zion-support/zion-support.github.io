import { ArrowRight, BarChart3, Shield, Cloud, Brain, Zap, Star, CheckCircle, Users, TrendingUp, Mail, Smartphone, Globe } from "lucide-react";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";

export default function MicroSaas() {
  const microSaasServices = [
    {
      name: "Zion Analytics Pro",
      description: "AI-powered business intelligence platform with real-time dashboards and predictive analytics",
      price: "From $29/month",
      icon: <BarChart3 className="w-8 h-8" />,
      link: "/zion-analytics-pro",
      color: "from-blue-500 to-cyan-500",
      features: ["Real-time Analytics", "Predictive Modeling", "Custom Dashboards", "50+ Integrations"],
      popular: true
    },
    {
      name: "Zion Security Shield",
      description: "Advanced cybersecurity protection with AI threat detection and automated incident response",
      price: "From $49/month",
      icon: <Shield className="w-8 h-8" />,
      link: "/zion-security-shield",
      color: "from-red-500 to-orange-500",
      features: ["AI Threat Detection", "24/7 Monitoring", "Compliance Reporting", "Zero-Trust Architecture"],
      popular: true
    },
    {
      name: "Zion Cloud Vault",
      description: "Secure cloud storage solution with enterprise-grade encryption and automated backup",
      price: "From $9/month",
      icon: <Cloud className="w-8 h-8" />,
      link: "/zion-cloud-vault",
      color: "from-indigo-500 to-purple-500",
      features: ["End-to-End Encryption", "Automated Backup", "File Sharing", "Version Control"],
      popular: false
    },
    {
      name: "Zion Content Studio",
      description: "AI-powered content creation platform for blogs, social media, and marketing materials",
      price: "From $19/month",
      icon: <Brain className="w-8 h-8" />,
      link: "/zion-content-studio",
      color: "from-purple-500 to-pink-500",
      features: ["AI Content Generation", "SEO Optimization", "Multi-format Output", "Brand Voice Training"],
      popular: false
    },
    {
      name: "Zion Data Sync",
      description: "Automated data synchronization across multiple platforms and databases",
      price: "From $39/month",
      icon: <Zap className="w-8 h-8" />,
      link: "/zion-data-sync",
      color: "from-green-500 to-emerald-500",
      features: ["Real-time Sync", "Data Validation", "Error Handling", "Custom Mappings"],
      popular: false
    },
    {
      name: "Zion Lead Magnet",
      description: "AI-powered lead generation and qualification platform with automated follow-ups",
      price: "From $59/month",
      icon: <TrendingUp className="w-8 h-8" />,
      link: "/zion-lead-magnet",
      color: "from-yellow-500 to-orange-500",
      features: ["Lead Scoring", "Automated Follow-ups", "CRM Integration", "Analytics Dashboard"],
      popular: false
    },
    {
      name: "Zion Project Master",
      description: "Comprehensive project management with AI-powered insights and team collaboration",
      price: "From $29/month",
      icon: <Users className="w-8 h-8" />,
      link: "/zion-project-master",
      color: "from-teal-500 to-cyan-500",
      features: ["Task Management", "Team Collaboration", "AI Insights", "Progress Tracking"],
      popular: false
    },
    {
      name: "Zion Email Automation",
      description: "Intelligent email marketing platform with AI-driven personalization and automation",
      price: "From $39/month",
      icon: <Mail className="w-8 h-8" />,
      link: "/zion-email-automation",
      color: "from-pink-500 to-rose-500",
      features: ["Email Automation", "A/B Testing", "Personalization", "Analytics"],
      popular: false
    },
    {
      name: "Zion Social Scheduler",
      description: "AI-powered social media management with content scheduling and analytics",
      price: "From $24/month",
      icon: <Zap className="w-8 h-8" />,
      link: "/zion-social-scheduler",
      color: "from-violet-500 to-purple-500",
      features: ["Multi-platform Posting", "Content Calendar", "Analytics", "Hashtag Optimization"],
      popular: false
    },
    {
      name: "Zion Workflow Automation",
      description: "No-code workflow automation platform for business process optimization",
      price: "From $49/month",
      icon: <Zap className="w-8 h-8" />,
      link: "/zion-workflow-automation",
      color: "from-amber-500 to-yellow-500",
      features: ["Drag & Drop Builder", "API Integrations", "Conditional Logic", "Monitoring"],
      popular: false
    },
    {
      name: "Zion Invoice Genius",
      description: "AI-powered invoicing and payment processing with automated reminders",
      price: "From $19/month",
      icon: <BarChart3 className="w-8 h-8" />,
      link: "/zion-invoice-genius",
      color: "from-emerald-500 to-green-500",
      features: ["Auto Invoicing", "Payment Processing", "Expense Tracking", "Tax Calculations"],
      popular: false
    },
    {
      name: "Zion Inventory Smart",
      description: "Intelligent inventory management with predictive analytics and automated reordering",
      price: "From $34/month",
      icon: <BarChart3 className="w-8 h-8" />,
      link: "/zion-inventory-smart",
      color: "from-cyan-500 to-blue-500",
      features: ["Stock Tracking", "Predictive Analytics", "Auto Reordering", "Multi-location"],
      popular: false
    },
    {
      name: "Zion Compliance Manager",
      description: "Automated compliance monitoring and reporting for various industry standards",
      price: "From $79/month",
      icon: <Shield className="w-8 h-8" />,
      link: "/zion-compliance-manager",
      color: "from-red-500 to-pink-500",
      features: ["Compliance Monitoring", "Automated Reports", "Audit Trails", "Risk Assessment"],
      popular: false
    },
    {
      name: "Zion Performance Monitor",
      description: "Real-time application and infrastructure performance monitoring with AI insights",
      price: "From $44/month",
      icon: <BarChart3 className="w-8 h-8" />,
      link: "/zion-performance-monitor",
      color: "from-orange-500 to-red-500",
      features: ["Real-time Monitoring", "AI Alerts", "Performance Analytics", "Uptime Tracking"],
      popular: false
    }
  ];

  const stats = [
    { number: "50+", label: "Micro SAAS Solutions", icon: <Zap className="w-6 h-6" /> },
    { number: "10,000+", label: "Active Users", icon: <Users className="w-6 h-6" /> },
    { number: "99.9%", label: "Uptime SLA", icon: <Shield className="w-6 h-6" /> },
    { number: "24/7", label: "Support Available", icon: <Star className="w-6 h-6" /> }
  ];

  const testimonials = [
    {
      name: "Sarah Johnson",
      company: "TechStart Inc.",
      role: "CEO",
      content: "Zion's micro SAAS solutions transformed our operations. We've increased efficiency by 60% and reduced costs by 40%.",
      rating: 5
    },
    {
      name: "Michael Chen",
      company: "E-commerce Solutions",
      role: "CTO",
      content: "The AI-powered features are incredible. Zion Analytics Pro helped us make data-driven decisions that increased revenue by 35%.",
      rating: 5
    },
    {
      name: "Emily Rodriguez",
      company: "Digital Marketing Agency",
      role: "Operations Director",
      content: "Outstanding support and powerful features. Zion Security Shield gives us peace of mind with enterprise-grade protection.",
      rating: 5
    }
  ];

  return (
    <>
      <Helmet>
        <title>Micro SAAS Solutions - Zion Tech Group | AI-Powered Business Tools</title>
        <meta
          name="description"
          content="Discover our comprehensive suite of micro SAAS solutions. AI-powered business tools including analytics, security, content creation, automation, and more. Start your free trial today."
        />
        <meta
          name="keywords"
          content="micro SAAS, business tools, AI solutions, analytics, security, content creation, automation, project management, email marketing, workflow automation"
        />
        <link rel="canonical" href="https://ziontechgroup.com/micro-saas" />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        {/* Hero Section */}
        <section className="pt-20 pb-16 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
          {/* Animated Background Elements */}
          <div className="absolute inset-0 overflow-hidden">
            <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-cyan-500/20 to-purple-500/20 rounded-full blur-3xl animate-pulse"></div>
            <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-br from-purple-500/20 to-pink-500/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
          </div>
          
          <div className="max-w-7xl mx-auto text-center relative z-10">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-cyan-500/20 to-purple-500/20 border border-cyan-500/30 mb-6">
              <Zap className="w-4 h-4 text-cyan-400 mr-2" />
              <span className="text-cyan-400 text-sm font-medium">50+ Micro SAAS Solutions</span>
            </div>
            
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 animate-pulse">
                Micro SAAS Solutions
              </span>
            </h1>
            
            <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto leading-relaxed">
              Powerful AI-driven micro SAAS tools designed to streamline your business operations. 
              From analytics to security, content creation to automation - everything you need to scale efficiently.
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
                <Star className="w-5 h-5 ml-2 group-hover:rotate-12 transition-transform" />
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

        {/* Featured Solutions */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
                Featured Micro SAAS Solutions
              </h2>
              <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
                Discover our most popular AI-powered business tools designed to accelerate growth and streamline operations.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {microSaasServices.slice(0, 6).map((service, index) => (
                <Link
                  key={index}
                  to={service.link}
                  className="group bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-cyan-500/10 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:ring-offset-2 focus:ring-offset-slate-900"
                  aria-label={`Learn more about ${service.name}`}
                >
                  <div className="flex items-center mb-4">
                    <div className={`w-12 h-12 rounded-lg bg-gradient-to-r ${service.color} flex items-center justify-center text-white mr-4 group-hover:scale-110 transition-transform`}>
                      {service.icon}
                    </div>
                    <div className="flex-1">
                      <h3 className="text-lg font-semibold text-white group-hover:text-cyan-400 transition-colors">
                        {service.name}
                      </h3>
                      <p className="text-cyan-400 font-medium">{service.price}</p>
                      {service.popular && (
                        <div className="flex items-center mt-1">
                          <Star className="w-3 h-3 text-yellow-400 fill-current mr-1" />
                          <span className="text-xs text-yellow-400">Popular</span>
                        </div>
                      )}
                    </div>
                  </div>
                  <p className="text-gray-300 text-sm leading-relaxed mb-4">
                    {service.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {service.features.slice(0, 2).map((feature, idx) => (
                      <span
                        key={idx}
                        className="text-xs bg-cyan-500/20 text-cyan-300 px-2 py-1 rounded-full border border-cyan-500/30"
                      >
                        {feature}
                      </span>
                    ))}
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* All Solutions Grid */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-slate-800/50 to-purple-800/50">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Complete Micro SAAS Suite
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Explore our full range of AI-powered business solutions. Each tool is designed to solve specific business challenges.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {microSaasServices.map((service, index) => (
                <Link
                  key={index}
                  to={service.link}
                  className="group bg-white/5 backdrop-blur-sm rounded-lg p-4 border border-white/10 hover:bg-white/10 transition-all duration-300 hover:scale-105"
                >
                  <div className="flex items-center mb-3">
                    <div className={`w-8 h-8 rounded-lg bg-gradient-to-r ${service.color} flex items-center justify-center text-white mr-3 group-hover:scale-110 transition-transform`}>
                      {service.icon}
                    </div>
                    <div className="flex-1">
                      <h3 className="text-sm font-semibold text-white group-hover:text-cyan-400 transition-colors">
                        {service.name}
                      </h3>
                      <p className="text-xs text-cyan-400">{service.price}</p>
                    </div>
                  </div>
                  <p className="text-gray-300 text-xs leading-relaxed">
                    {service.description}
                  </p>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Trusted by Business Leaders
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                See what our customers say about our micro SAAS solutions
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
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-cyan-900/30 to-purple-900/30">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
              Ready to Transform Your Business?
            </h2>
            <p className="text-xl text-gray-300 mb-8 leading-relaxed">
              Join thousands of businesses already using our micro SAAS solutions to drive growth and innovation. 
              Start your free trial today.
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
                Start Your Free Trial
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                to="/services"
                className="border border-cyan-400 text-cyan-400 px-8 py-4 rounded-lg font-semibold hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300 group hover:scale-105"
              >
                Explore All Services
                <Star className="w-5 h-5 ml-2 group-hover:rotate-12 transition-transform" />
              </Link>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}

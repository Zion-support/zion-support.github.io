import { ArrowRight, Star, Check, Zap, Shield, BarChart3, Cloud, Mail, Smartphone, Globe, Sparkles, Users, Award, TrendingUp, Brain, Code, Target, FileText, Bot, Wifi, Database, Lock, Settings, Monitor, Smartphone as Phone, Globe as Web, Mail as Email, Users as Team, Award as Trophy, TrendingUp as Growth, Brain as AI, Code as Dev, Target as Marketing, FileText as Docs, Bot as ChatBot, Wifi as Network, Database as Data, Lock as Security, Settings as Config, Monitor as Analytics } from "lucide-react";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";

export default function MicroSaas() {
  const microSaasServices = [
    {
      id: "zion-analytics-pro",
      name: "Zion Analytics Pro",
      description: "AI-powered business intelligence platform with real-time dashboards, predictive analytics, and automated reporting. Transform your data into actionable insights.",
      icon: <BarChart3 className="w-8 h-8" />,
      price: "$29",
      period: "month",
      features: [
        "Real-time Analytics Dashboard",
        "Predictive Analytics Engine",
        "Custom Report Builder",
        "API Integration",
        "Multi-data Source Support",
        "Automated Alerts",
        "Export to PDF/Excel",
        "White-label Options"
      ],
      color: "from-blue-500 to-cyan-500",
      popular: true,
      link: "/zion-analytics-pro"
    },
    {
      id: "zion-security-shield",
      name: "Zion Security Shield",
      description: "Advanced cybersecurity protection with real-time threat detection, automated incident response, and compliance monitoring for your business.",
      icon: <Shield className="w-8 h-8" />,
      price: "$49",
      period: "month",
      features: [
        "Real-time Threat Detection",
        "Automated Incident Response",
        "Compliance Monitoring",
        "Vulnerability Scanning",
        "Security Audit Reports",
        "24/7 Monitoring",
        "Multi-layer Protection",
        "Emergency Response Team"
      ],
      color: "from-red-500 to-orange-500",
      popular: false,
      link: "/zion-security-shield"
    },
    {
      id: "zion-cloud-vault",
      name: "Zion Cloud Vault",
      description: "Secure cloud storage solution with enterprise-grade encryption, automated backups, and seamless file synchronization across all devices.",
      icon: <Cloud className="w-8 h-8" />,
      price: "$9",
      period: "month",
      features: [
        "1TB Secure Storage",
        "End-to-end Encryption",
        "Automated Backups",
        "File Versioning",
        "Cross-device Sync",
        "Team Collaboration",
        "Access Controls",
        "99.9% Uptime SLA"
      ],
      color: "from-green-500 to-emerald-500",
      popular: false,
      link: "/zion-cloud-vault"
    },
    {
      id: "zion-content-studio",
      name: "Zion Content Studio",
      description: "AI-powered content creation platform that generates high-quality blog posts, social media content, and marketing materials at scale.",
      icon: <FileText className="w-8 h-8" />,
      price: "$39",
      period: "month",
      features: [
        "AI Content Generation",
        "SEO Optimization",
        "Brand Voice Training",
        "Multi-format Output",
        "Plagiarism Detection",
        "Content Calendar",
        "Social Media Scheduling",
        "Performance Analytics"
      ],
      color: "from-purple-500 to-pink-500",
      popular: true,
      link: "/zion-content-studio"
    },
    {
      id: "zion-data-sync",
      name: "Zion Data Sync",
      description: "Automated data synchronization and integration platform that connects all your business applications and keeps data consistent across systems.",
      icon: <Database className="w-8 h-8" />,
      price: "$19",
      period: "month",
      features: [
        "Multi-platform Integration",
        "Real-time Data Sync",
        "Data Transformation",
        "Error Handling",
        "Custom Connectors",
        "Data Validation",
        "Scheduled Sync",
        "API Management"
      ],
      color: "from-indigo-500 to-purple-500",
      popular: false,
      link: "/zion-data-sync"
    },
    {
      id: "zion-lead-magnet",
      name: "Zion Lead Magnet",
      description: "Advanced lead generation and nurturing platform with AI-powered lead scoring, automated email sequences, and conversion optimization.",
      icon: <Target className="w-8 h-8" />,
      price: "$59",
      period: "month",
      features: [
        "AI Lead Scoring",
        "Automated Email Sequences",
        "Landing Page Builder",
        "A/B Testing",
        "CRM Integration",
        "Lead Analytics",
        "Conversion Tracking",
        "Personalization Engine"
      ],
      color: "from-yellow-500 to-orange-500",
      popular: false,
      link: "/zion-lead-magnet"
    },
    {
      id: "zion-project-master",
      name: "Zion Project Master",
      description: "Comprehensive project management platform with AI-powered task optimization, team collaboration tools, and advanced reporting capabilities.",
      icon: <Settings className="w-8 h-8" />,
      price: "$79",
      period: "month",
      features: [
        "AI Task Optimization",
        "Team Collaboration",
        "Gantt Charts",
        "Resource Management",
        "Time Tracking",
        "Budget Monitoring",
        "Risk Assessment",
        "Progress Analytics"
      ],
      color: "from-teal-500 to-cyan-500",
      popular: true,
      link: "/zion-project-master"
    },
    {
      id: "zion-email-automation",
      name: "Zion Email Automation",
      description: "Intelligent email marketing platform with AI-driven personalization, automated workflows, and advanced segmentation capabilities.",
      icon: <Mail className="w-8 h-8" />,
      price: "$34",
      period: "month",
      features: [
        "AI Personalization",
        "Automated Workflows",
        "Advanced Segmentation",
        "A/B Testing",
        "Email Templates",
        "Deliverability Optimization",
        "Performance Analytics",
        "Compliance Tools"
      ],
      color: "from-pink-500 to-rose-500",
      popular: false,
      link: "/zion-email-automation"
    },
    {
      id: "zion-social-scheduler",
      name: "Zion Social Scheduler",
      description: "AI-powered social media management platform that schedules posts, analyzes performance, and optimizes content for maximum engagement.",
      icon: <Globe className="w-8 h-8" />,
      price: "$24",
      period: "month",
      features: [
        "Multi-platform Scheduling",
        "AI Content Optimization",
        "Hashtag Research",
        "Engagement Analytics",
        "Content Calendar",
        "Team Collaboration",
        "Brand Monitoring",
        "Influencer Tracking"
      ],
      color: "from-cyan-500 to-blue-500",
      popular: false,
      link: "/zion-social-scheduler"
    },
    {
      id: "zion-workflow-automation",
      name: "Zion Workflow Automation",
      description: "No-code workflow automation platform that streamlines business processes, reduces manual work, and increases operational efficiency.",
      icon: <Zap className="w-8 h-8" />,
      price: "$44",
      period: "month",
      features: [
        "Visual Workflow Builder",
        "Pre-built Templates",
        "API Integrations",
        "Conditional Logic",
        "Error Handling",
        "Performance Monitoring",
        "Custom Triggers",
        "Team Permissions"
      ],
      color: "from-violet-500 to-purple-500",
      popular: false,
      link: "/zion-workflow-automation"
    },
    {
      id: "zion-invoice-genius",
      name: "Zion Invoice Genius",
      description: "Smart invoicing and payment management platform with AI-powered expense tracking, automated reminders, and financial reporting.",
      icon: <FileText className="w-8 h-8" />,
      price: "$29",
      period: "month",
      features: [
        "AI Invoice Generation",
        "Automated Payment Reminders",
        "Expense Tracking",
        "Financial Reporting",
        "Multi-currency Support",
        "Tax Calculations",
        "Client Portal",
        "Payment Processing"
      ],
      color: "from-emerald-500 to-green-500",
      popular: false,
      link: "/zion-invoice-genius"
    },
    {
      id: "zion-inventory-smart",
      name: "Zion Inventory Smart",
      description: "Intelligent inventory management system with AI-powered demand forecasting, automated reordering, and real-time stock monitoring.",
      icon: <Database className="w-8 h-8" />,
      price: "$39",
      period: "month",
      features: [
        "AI Demand Forecasting",
        "Automated Reordering",
        "Real-time Stock Monitoring",
        "Barcode Scanning",
        "Multi-location Support",
        "Supplier Management",
        "Cost Tracking",
        "Reporting Dashboard"
      ],
      color: "from-amber-500 to-yellow-500",
      popular: false,
      link: "/zion-inventory-smart"
    },
    {
      id: "zion-compliance-manager",
      name: "Zion Compliance Manager",
      description: "Automated compliance monitoring and reporting platform that ensures your business meets industry regulations and standards.",
      icon: <Lock className="w-8 h-8" />,
      price: "$69",
      period: "month",
      features: [
        "Regulatory Monitoring",
        "Automated Reporting",
        "Risk Assessment",
        "Audit Trail",
        "Policy Management",
        "Training Modules",
        "Compliance Alerts",
        "Document Management"
      ],
      color: "from-red-500 to-pink-500",
      popular: false,
      link: "/zion-compliance-manager"
    },
    {
      id: "zion-performance-monitor",
      name: "Zion Performance Monitor",
      description: "Real-time performance monitoring and optimization platform that tracks system health, identifies bottlenecks, and provides actionable insights.",
      icon: <Monitor className="w-8 h-8" />,
      price: "$54",
      period: "month",
      features: [
        "Real-time Monitoring",
        "Performance Analytics",
        "Bottleneck Detection",
        "Automated Alerts",
        "Custom Dashboards",
        "Historical Data",
        "Capacity Planning",
        "Optimization Recommendations"
      ],
      color: "from-blue-500 to-indigo-500",
      popular: false,
      link: "/zion-performance-monitor"
    }
  ];

  const stats = [
    { number: "50+", label: "Micro SAAS Solutions", icon: <Zap className="w-6 h-6" /> },
    { number: "10,000+", label: "Active Users", icon: <Users className="w-6 h-6" /> },
    { number: "99.9%", label: "Uptime SLA", icon: <Award className="w-6 h-6" /> },
    { number: "24/7", label: "Support Available", icon: <Shield className="w-6 h-6" /> }
  ];

  const testimonials = [
    {
      name: "Sarah Johnson",
      company: "TechStart Inc.",
      role: "CEO",
      content: "Zion Analytics Pro transformed our data analysis. We've increased our decision-making speed by 300% and identified new revenue opportunities worth $2M annually.",
      rating: 5,
      service: "Zion Analytics Pro"
    },
    {
      name: "Michael Chen",
      company: "E-commerce Solutions",
      role: "CTO",
      content: "The micro SAAS solutions are incredibly powerful and easy to implement. We've saved thousands of hours with their automation tools and improved our efficiency by 150%.",
      rating: 5,
      service: "Zion Workflow Automation"
    },
    {
      name: "Emily Rodriguez",
      company: "Digital Marketing Agency",
      role: "Operations Director",
      content: "Zion Content Studio has revolutionized our content creation process. We now produce 5x more content with better quality and our engagement rates have increased by 200%.",
      rating: 5,
      service: "Zion Content Studio"
    }
  ];

  return (
    <>
      <Helmet>
        <title>Micro SAAS Solutions - Zion Tech Group | Ready-to-Use Business Tools</title>
        <meta
          name="description"
          content="Discover our comprehensive suite of micro SAAS solutions designed to streamline your business operations. From AI analytics to workflow automation, we have the tools you need to succeed."
        />
        <meta
          name="keywords"
          content="micro SAAS, business tools, AI analytics, workflow automation, content creation, project management, email marketing, social media management, inventory management, compliance monitoring"
        />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 relative overflow-hidden">
        {/* Animated Background Elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-cyan-500/20 to-purple-500/20 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-br from-purple-500/20 to-pink-500/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-br from-blue-500/10 to-cyan-500/10 rounded-full blur-3xl animate-pulse delay-500"></div>
        </div>

        {/* Hero Section */}
        <section className="pt-20 pb-16 px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-7xl mx-auto text-center">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-cyan-500/20 to-purple-500/20 border border-cyan-500/30 mb-6">
              <Sparkles className="w-4 h-4 text-cyan-400 mr-2" />
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
              From AI-powered analytics to automated workflows, we have everything you need to succeed.
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

        {/* Micro SAAS Services Grid */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
                Our Micro SAAS Solutions
              </h2>
              <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
                Choose from our comprehensive suite of micro SAAS solutions designed to address specific business needs. 
                Each solution is ready to deploy and comes with full support and regular updates.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {microSaasServices.map((service, index) => (
                <div
                  key={service.id}
                  className={`group bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-cyan-500/10 relative overflow-hidden ${service.popular ? 'ring-2 ring-cyan-400/50' : ''}`}
                >
                  {service.popular && (
                    <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                      <span className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-4 py-1 rounded-full text-sm font-semibold">
                        Most Popular
                      </span>
                    </div>
                  )}
                  
                  {/* Animated background effect */}
                  <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/5 to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  
                  <div className="relative z-10">
                    <div className="flex items-center justify-between mb-4">
                      <div
                        className={`w-16 h-16 rounded-lg bg-gradient-to-r ${service.color} flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-lg`}
                      >
                        {service.icon}
                      </div>
                      <div className="text-right">
                        <div className="text-3xl font-bold text-white">
                          {service.price}
                          <span className="text-lg text-gray-400">/{service.period}</span>
                        </div>
                      </div>
                    </div>
                    
                    <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-cyan-300 transition-colors">
                      {service.name}
                    </h3>
                    
                    <p className="text-gray-300 mb-6 leading-relaxed">
                      {service.description}
                    </p>
                    
                    {/* Features List */}
                    <div className="space-y-2 mb-6">
                      {service.features.slice(0, 4).map((feature, idx) => (
                        <div key={idx} className="flex items-center text-sm text-gray-300">
                          <Check className="w-4 h-4 text-cyan-400 mr-2 flex-shrink-0" />
                          <span>{feature}</span>
                        </div>
                      ))}
                      {service.features.length > 4 && (
                        <div className="text-sm text-cyan-400 font-medium">
                          +{service.features.length - 4} more features
                        </div>
                      )}
                    </div>
                    
                    <div className="flex flex-col gap-2">
                      <Link
                        to={service.link}
                        className="w-full bg-gradient-to-r from-cyan-500 to-purple-600 text-white py-2 px-4 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 text-center group-hover:scale-105"
                      >
                        Learn More
                      </Link>
                      <Link
                        to="/contact"
                        className="w-full border border-cyan-400 text-cyan-400 py-2 px-4 rounded-lg font-semibold hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300 text-center"
                      >
                        Get Started
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 relative z-10">
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
                    <div className="text-xs text-cyan-400 mt-1">Using {testimonial.service}</div>
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
              Start your digital transformation journey today with our ready-to-use tools.
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
                to="/consultation"
                className="border border-cyan-400 text-cyan-400 px-8 py-4 rounded-lg font-semibold hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300 group hover:scale-105"
              >
                Free Consultation
                <Sparkles className="w-5 h-5 ml-2 group-hover:rotate-12 transition-transform" />
              </Link>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}

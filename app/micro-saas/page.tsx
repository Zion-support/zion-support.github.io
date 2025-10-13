import { ArrowRight, Star, Check, Zap, Shield, Cloud, BarChart3, Code, Users, Target, Globe, Smartphone, Mail, Phone, MapPin, ExternalLink, TrendingUp, Clock, Award, Sparkles } from "lucide-react";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";

export default function MicroSaas() {
  const microSaasProducts = [
    {
      name: "Zion Analytics Pro",
      description: "AI-powered business intelligence platform with real-time analytics, predictive modeling, and automated reporting. Transform your data into actionable insights.",
      price: "From $29/month",
      originalPrice: "$49/month",
      discount: "40% OFF",
      icon: <BarChart3 className="w-8 h-8" />,
      color: "from-blue-500 to-cyan-500",
      features: [
        "Real-time Analytics Dashboard",
        "AI-Powered Predictive Modeling",
        "Automated Report Generation",
        "Custom Data Visualizations",
        "API Integration Support",
        "Multi-User Collaboration",
        "Mobile App Access",
        "24/7 Customer Support"
      ],
      link: "/zion-analytics-pro",
      category: "Analytics",
      rating: 4.9,
      users: "10,000+",
      badge: "Most Popular"
    },
    {
      name: "Zion Security Shield",
      description: "Advanced cybersecurity protection with AI threat detection, automated incident response, and compliance monitoring. Keep your business secure 24/7.",
      price: "From $49/month",
      originalPrice: "$79/month",
      discount: "38% OFF",
      icon: <Shield className="w-8 h-8" />,
      color: "from-red-500 to-orange-500",
      features: [
        "AI Threat Detection",
        "Automated Incident Response",
        "Compliance Monitoring",
        "Real-time Security Alerts",
        "Vulnerability Scanning",
        "Security Audit Reports",
        "Multi-Factor Authentication",
        "Emergency Response Team"
      ],
      link: "/zion-security-shield",
      category: "Security",
      rating: 4.8,
      users: "8,500+",
      badge: "Enterprise Ready"
    },
    {
      name: "Zion Cloud Vault",
      description: "Secure cloud storage solution with advanced encryption, automated backups, and seamless file synchronization across all devices.",
      price: "From $9/month",
      originalPrice: "$15/month",
      discount: "40% OFF",
      icon: <Cloud className="w-8 h-8" />,
      color: "from-purple-500 to-pink-500",
      features: [
        "End-to-End Encryption",
        "Automated Backups",
        "File Versioning",
        "Cross-Device Sync",
        "Team Collaboration",
        "Advanced Search",
        "Mobile Access",
        "99.9% Uptime SLA"
      ],
      link: "/zion-cloud-vault",
      category: "Storage",
      rating: 4.7,
      users: "25,000+",
      badge: "Best Value"
    },
    {
      name: "Zion Content Studio",
      description: "AI-powered content creation platform for blogs, social media, marketing materials, and technical documentation. Create professional content at scale.",
      price: "From $19/month",
      originalPrice: "$35/month",
      discount: "46% OFF",
      icon: <Code className="w-8 h-8" />,
      color: "from-green-500 to-emerald-500",
      features: [
        "AI Content Generation",
        "SEO Optimization",
        "Brand Voice Training",
        "Multi-Format Output",
        "Plagiarism Detection",
        "Content Calendar",
        "Team Collaboration",
        "Analytics Dashboard"
      ],
      link: "/zion-content-studio",
      category: "Content",
      rating: 4.6,
      users: "15,000+",
      badge: "AI Powered"
    },
    {
      name: "Zion Data Sync",
      description: "Automated data synchronization and integration platform. Connect all your business tools and keep data flowing seamlessly across systems.",
      price: "From $39/month",
      originalPrice: "$65/month",
      discount: "40% OFF",
      icon: <Zap className="w-8 h-8" />,
      color: "from-yellow-500 to-orange-500",
      features: [
        "Real-time Data Sync",
        "100+ App Integrations",
        "Custom Workflow Builder",
        "Data Transformation",
        "Error Handling",
        "Monitoring Dashboard",
        "API Management",
        "Priority Support"
      ],
      link: "/zion-data-sync",
      category: "Integration",
      rating: 4.8,
      users: "12,000+",
      badge: "Developer Favorite"
    },
    {
      name: "Zion Project Master",
      description: "AI-enhanced project management platform with intelligent task allocation, resource optimization, and predictive project analytics.",
      price: "From $25/month",
      originalPrice: "$45/month",
      discount: "44% OFF",
      icon: <Users className="w-8 h-8" />,
      color: "from-indigo-500 to-purple-500",
      features: [
        "AI Task Allocation",
        "Resource Optimization",
        "Predictive Analytics",
        "Team Collaboration",
        "Time Tracking",
        "Budget Management",
        "Risk Assessment",
        "Custom Workflows"
      ],
      link: "/zion-project-master",
      category: "Project Management",
      rating: 4.7,
      users: "18,000+",
      badge: "Team Choice"
    },
    {
      name: "Zion Marketing Hub",
      description: "Comprehensive marketing automation platform with AI-driven campaign optimization, lead scoring, and customer journey mapping.",
      price: "From $35/month",
      originalPrice: "$60/month",
      discount: "42% OFF",
      icon: <Target className="w-8 h-8" />,
      color: "from-pink-500 to-rose-500",
      features: [
        "AI Campaign Optimization",
        "Lead Scoring & Nurturing",
        "Email Marketing Automation",
        "Social Media Management",
        "Customer Journey Mapping",
        "A/B Testing Tools",
        "Analytics & Reporting",
        "CRM Integration"
      ],
      link: "/zion-marketing-hub",
      category: "Marketing",
      rating: 4.8,
      users: "14,000+",
      badge: "Marketing Pro"
    },
    {
      name: "Zion Customer Success",
      description: "AI-powered customer success platform with predictive churn analysis, automated onboarding, and intelligent support ticket routing.",
      price: "From $29/month",
      originalPrice: "$50/month",
      discount: "42% OFF",
      icon: <Globe className="w-8 h-8" />,
      color: "from-teal-500 to-cyan-500",
      features: [
        "Predictive Churn Analysis",
        "Automated Onboarding",
        "Smart Ticket Routing",
        "Customer Health Scoring",
        "Success Metrics Tracking",
        "Automated Follow-ups",
        "Integration Hub",
        "Success Manager"
      ],
      link: "/zion-customer-success",
      category: "Customer Success",
      rating: 4.9,
      users: "9,500+",
      badge: "Customer Favorite"
    }
  ];

  const categories = [
    { name: "All", count: microSaasProducts.length },
    { name: "Analytics", count: microSaasProducts.filter(p => p.category === "Analytics").length },
    { name: "Security", count: microSaasProducts.filter(p => p.category === "Security").length },
    { name: "Storage", count: microSaasProducts.filter(p => p.category === "Storage").length },
    { name: "Content", count: microSaasProducts.filter(p => p.category === "Content").length },
    { name: "Integration", count: microSaasProducts.filter(p => p.category === "Integration").length },
    { name: "Project Management", count: microSaasProducts.filter(p => p.category === "Project Management").length },
    { name: "Marketing", count: microSaasProducts.filter(p => p.category === "Marketing").length },
    { name: "Customer Success", count: microSaasProducts.filter(p => p.category === "Customer Success").length }
  ];

  const testimonials = [
    {
      name: "Sarah Johnson",
      company: "TechStart Inc.",
      role: "CEO",
      content: "Zion Analytics Pro transformed our data strategy. We now make decisions 3x faster with real-time insights and predictive analytics.",
      rating: 5,
      product: "Zion Analytics Pro"
    },
    {
      name: "Michael Chen",
      company: "E-commerce Solutions",
      role: "CTO",
      content: "Zion Security Shield gives us peace of mind. The AI threat detection has prevented multiple security incidents before they could impact our business.",
      rating: 5,
      product: "Zion Security Shield"
    },
    {
      name: "Emily Rodriguez",
      company: "Digital Marketing Agency",
      role: "Operations Director",
      content: "Zion Content Studio has revolutionized our content creation process. We're producing 5x more content with better quality and consistency.",
      rating: 5,
      product: "Zion Content Studio"
    }
  ];

  return (
    <>
      <Helmet>
        <title>Micro SAAS Solutions - Zion Tech Group | AI-Powered Business Tools</title>
        <meta
          name="description"
          content="Discover our comprehensive suite of micro SAAS solutions including analytics, security, content creation, project management, and more. AI-powered tools for modern businesses."
        />
        <meta
          name="keywords"
          content="micro SAAS, business tools, AI analytics, cybersecurity, cloud storage, content creation, project management, marketing automation, customer success"
        />
        <meta property="og:title" content="Micro SAAS Solutions - Zion Tech Group" />
        <meta property="og:description" content="AI-powered micro SAAS solutions for modern businesses. Analytics, security, content creation, and more." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://ziontechgroup.com/micro-saas" />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 relative overflow-hidden">
        {/* Animated Background Elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-cyan-500/20 to-purple-500/20 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-br from-purple-500/20 to-pink-500/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-br from-pink-500/10 to-cyan-500/10 rounded-full blur-3xl animate-pulse delay-500"></div>
        </div>

        {/* Hero Section */}
        <section className="pt-20 pb-16 px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-7xl mx-auto text-center">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-cyan-500/20 to-purple-500/20 border border-cyan-500/30 mb-6">
              <Sparkles className="w-4 h-4 text-cyan-400 mr-2" />
              <span className="text-cyan-400 text-sm font-medium">8 Powerful Micro SAAS Solutions</span>
            </div>
            
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
              Micro SAAS
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 animate-pulse">
                {" "}Solutions
              </span>
            </h1>
            
            <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto leading-relaxed">
              AI-powered micro SAAS solutions designed to accelerate your business growth. 
              From analytics to security, choose from our comprehensive suite of intelligent business tools.
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
              <div className="text-center group">
                <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-r from-cyan-500/20 to-purple-500/20 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <Users className="w-6 h-6 text-cyan-400" />
                </div>
                <div className="text-2xl md:text-3xl font-bold text-white mb-2">100,000+</div>
                <div className="text-gray-300 text-sm">Active Users</div>
              </div>
              <div className="text-center group">
                <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-r from-cyan-500/20 to-purple-500/20 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <Award className="w-6 h-6 text-cyan-400" />
                </div>
                <div className="text-2xl md:text-3xl font-bold text-white mb-2">99.9%</div>
                <div className="text-gray-300 text-sm">Uptime SLA</div>
              </div>
              <div className="text-center group">
                <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-r from-cyan-500/20 to-purple-500/20 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <Zap className="w-6 h-6 text-cyan-400" />
                </div>
                <div className="text-2xl md:text-3xl font-bold text-white mb-2">8</div>
                <div className="text-gray-300 text-sm">Micro SAAS Solutions</div>
              </div>
              <div className="text-center group">
                <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-r from-cyan-500/20 to-purple-500/20 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <Clock className="w-6 h-6 text-cyan-400" />
                </div>
                <div className="text-2xl md:text-3xl font-bold text-white mb-2">24/7</div>
                <div className="text-gray-300 text-sm">Support Available</div>
              </div>
            </div>
          </div>
        </section>

        {/* Category Filter */}
        <section className="py-8 px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-7xl mx-auto">
            <div className="flex flex-wrap justify-center gap-4">
              {categories.map((category) => (
                <button
                  key={category.name}
                  className="px-6 py-3 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 text-gray-300 hover:text-cyan-400 hover:bg-cyan-500/10 hover:border-cyan-500/30 transition-all duration-300 hover:scale-105"
                >
                  {category.name} ({category.count})
                </button>
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
                  Our Micro SAAS Solutions
                </span>
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Choose from our comprehensive suite of AI-powered micro SAAS solutions designed to transform your business operations.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {microSaasProducts.map((product, index) => (
                <div
                  key={index}
                  className="group bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-cyan-500/10 relative overflow-hidden"
                >
                  {/* Badge */}
                  {product.badge && (
                    <div className="absolute top-4 right-4">
                      <span className="px-3 py-1 text-xs font-semibold bg-gradient-to-r from-cyan-500 to-purple-600 text-white rounded-full">
                        {product.badge}
                      </span>
                    </div>
                  )}

                  {/* Animated background effect */}
                  <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/5 to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  
                  <div className="relative z-10">
                    <div className="flex items-center justify-between mb-4">
                      <div
                        className={`w-16 h-16 rounded-lg bg-gradient-to-r ${product.color} flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-lg`}
                      >
                        {product.icon}
                      </div>
                      <div className="text-right">
                        <div className="text-2xl font-bold text-white">{product.price}</div>
                        <div className="text-sm text-gray-400 line-through">{product.originalPrice}</div>
                        <div className="text-xs text-green-400 font-semibold">{product.discount}</div>
                      </div>
                    </div>

                    <h3 className="text-xl font-semibold text-white mb-2 group-hover:text-cyan-300 transition-colors">
                      {product.name}
                    </h3>
                    
                    <div className="flex items-center mb-3">
                      <div className="flex items-center">
                        {[...Array(5)].map((_, i) => (
                          <Star key={i} className={`w-4 h-4 ${i < Math.floor(product.rating) ? 'text-yellow-400 fill-current' : 'text-gray-600'}`} />
                        ))}
                      </div>
                      <span className="text-sm text-gray-400 ml-2">{product.rating} ({product.users} users)</span>
                    </div>

                    <p className="text-gray-300 mb-4 leading-relaxed text-sm">
                      {product.description}
                    </p>

                    <div className="mb-4">
                      <div className="text-xs text-cyan-400 font-semibold mb-2">Key Features:</div>
                      <div className="grid grid-cols-1 gap-1">
                        {product.features.slice(0, 4).map((feature, idx) => (
                          <div key={idx} className="flex items-center text-xs text-gray-300">
                            <Check className="w-3 h-3 text-green-400 mr-2 flex-shrink-0" />
                            {feature}
                          </div>
                        ))}
                        {product.features.length > 4 && (
                          <div className="text-xs text-cyan-400 font-medium">
                            +{product.features.length - 4} more features
                          </div>
                        )}
                      </div>
                    </div>

                    <div className="flex flex-col sm:flex-row gap-2">
                      <Link
                        to={product.link}
                        className="flex-1 bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-4 py-2 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 text-center text-sm group-hover:scale-105"
                      >
                        Get Started
                      </Link>
                      <Link
                        to={`${product.link}#demo`}
                        className="flex-1 border border-cyan-400 text-cyan-400 px-4 py-2 rounded-lg font-semibold hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300 text-center text-sm group-hover:scale-105"
                      >
                        Demo
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
                    <div className="text-xs text-cyan-400 font-medium">{testimonial.product}</div>
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
              Join over 100,000 businesses already using our micro SAAS solutions to drive growth and innovation. 
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
                  <Phone className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-white font-semibold mb-2">Phone</h3>
                <p className="text-cyan-400">+1 302 464 0950</p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-lg flex items-center justify-center mx-auto mb-3">
                  <MapPin className="w-6 h-6 text-white" />
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
                to="/pricing"
                className="border border-cyan-400 text-cyan-400 px-8 py-4 rounded-lg font-semibold hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300 group hover:scale-105"
              >
                View Pricing
                <ExternalLink className="w-5 h-5 ml-2 group-hover:rotate-12 transition-transform" />
              </Link>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}

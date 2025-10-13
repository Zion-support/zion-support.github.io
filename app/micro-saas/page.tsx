import { ArrowRight, Brain, Shield, Cloud, BarChart3, Code, Zap, Star, CheckCircle, Mail, Smartphone, Globe, Play, Download, Users, TrendingUp, Clock, Award } from "lucide-react";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";

export default function MicroSaas() {
  const microSaasProducts = [
    {
      name: "Zion AI Video Generator",
      description: "Create professional videos with AI in minutes. Generate engaging content for social media, marketing, and presentations.",
      price: "From $29/month",
      icon: <Brain className="w-8 h-8" />,
      color: "from-purple-500 to-pink-500",
      features: ["AI Video Creation", "Multiple Templates", "Auto Voiceover", "HD Export", "Social Media Ready"],
      link: "/zion-ai-video-generator",
      popular: true,
      stats: "10,000+ videos created"
    },
    {
      name: "Zion AI Customer Insights",
      description: "AI-powered customer analytics and insights. Understand your customers better with advanced behavioral analysis.",
      price: "From $49/month",
      icon: <BarChart3 className="w-8 h-8" />,
      color: "from-blue-500 to-cyan-500",
      features: ["Customer Analytics", "Behavior Tracking", "Predictive Insights", "Custom Reports", "API Integration"],
      link: "/zion-ai-customer-insights",
      popular: true,
      stats: "500+ businesses using"
    },
    {
      name: "Zion Analytics Pro",
      description: "Comprehensive business intelligence platform with real-time dashboards and predictive analytics.",
      price: "From $29/month",
      icon: <BarChart3 className="w-8 h-8" />,
      color: "from-green-500 to-emerald-500",
      features: ["Real-time Dashboards", "Predictive Analytics", "Custom Reports", "Data Visualization", "Team Collaboration"],
      link: "/zion-analytics-pro",
      popular: false,
      stats: "2,000+ active users"
    },
    {
      name: "Zion Security Shield",
      description: "Advanced cybersecurity protection for small to medium businesses. Real-time threat detection and response.",
      price: "From $49/month",
      icon: <Shield className="w-8 h-8" />,
      color: "from-red-500 to-orange-500",
      features: ["Threat Detection", "Real-time Monitoring", "Vulnerability Scanning", "Incident Response", "Compliance Reports"],
      link: "/zion-security-shield",
      popular: true,
      stats: "99.9% threat detection rate"
    },
    {
      name: "Zion Cloud Vault",
      description: "Secure cloud storage solution with end-to-end encryption and advanced file management features.",
      price: "From $9/month",
      icon: <Cloud className="w-8 h-8" />,
      color: "from-indigo-500 to-purple-500",
      features: ["1TB Storage", "End-to-end Encryption", "File Synchronization", "Mobile Apps", "Version Control"],
      link: "/zion-cloud-vault",
      popular: false,
      stats: "50,000+ files secured"
    },
    {
      name: "Zion Content Studio",
      description: "AI-powered content creation suite for blogs, social media, and marketing materials.",
      price: "From $19/month",
      icon: <Code className="w-8 h-8" />,
      color: "from-teal-500 to-cyan-500",
      features: ["AI Content Writing", "SEO Optimization", "Multi-format Export", "Brand Voice Training", "Plagiarism Check"],
      link: "/zion-content-studio",
      popular: false,
      stats: "1M+ articles generated"
    },
    {
      name: "Zion Data Sync",
      description: "Automated data synchronization across multiple platforms and databases with real-time updates.",
      price: "From $39/month",
      icon: <Zap className="w-8 h-8" />,
      color: "from-yellow-500 to-orange-500",
      features: ["Multi-platform Sync", "Real-time Updates", "Data Validation", "Error Handling", "Custom Mappings"],
      link: "/zion-data-sync",
      popular: false,
      stats: "99.9% sync accuracy"
    },
    {
      name: "Zion Lead Magnet",
      description: "AI-powered lead generation and nurturing platform with automated follow-ups and scoring.",
      price: "From $39/month",
      icon: <Users className="w-8 h-8" />,
      color: "from-pink-500 to-rose-500",
      features: ["Lead Scoring", "Automated Follow-ups", "Email Campaigns", "CRM Integration", "Analytics Dashboard"],
      link: "/zion-lead-magnet",
      popular: false,
      stats: "300% increase in leads"
    },
    {
      name: "Zion Project Master",
      description: "AI-enhanced project management tool with intelligent task assignment and progress tracking.",
      price: "From $29/month",
      icon: <Code className="w-8 h-8" />,
      color: "from-violet-500 to-purple-500",
      features: ["AI Task Assignment", "Progress Tracking", "Team Collaboration", "Resource Planning", "Time Tracking"],
      link: "/zion-project-master",
      popular: false,
      stats: "40% faster project completion"
    },
    {
      name: "Zion Email Automation",
      description: "Intelligent email marketing automation with AI-driven personalization and optimization.",
      price: "From $19/month",
      icon: <Mail className="w-8 h-8" />,
      color: "from-emerald-500 to-green-500",
      features: ["AI Personalization", "A/B Testing", "Send Time Optimization", "List Segmentation", "Performance Analytics"],
      link: "/zion-email-automation",
      popular: false,
      stats: "60% higher open rates"
    }
  ];

  const benefits = [
    {
      title: "Instant Deployment",
      description: "Get started in minutes with our ready-to-use solutions",
      icon: <Zap className="w-6 h-6" />
    },
    {
      title: "No Setup Required",
      description: "Skip complex installations and configurations",
      icon: <CheckCircle className="w-6 h-6" />
    },
    {
      title: "24/7 Support",
      description: "Round-the-clock assistance from our expert team",
      icon: <Clock className="w-6 h-6" />
    },
    {
      title: "Regular Updates",
      description: "Continuous improvements and new features",
      icon: <TrendingUp className="w-6 h-6" />
    }
  ];

  const testimonials = [
    {
      name: "Sarah Johnson",
      company: "TechStart Inc.",
      role: "CEO",
      content: "Zion AI Video Generator saved us hours of work. We can now create professional videos in minutes instead of days.",
      rating: 5,
      product: "Zion AI Video Generator"
    },
    {
      name: "Michael Chen",
      company: "E-commerce Solutions",
      role: "Marketing Director",
      content: "Zion AI Customer Insights helped us understand our customers better than ever. Our conversion rates increased by 45%.",
      rating: 5,
      product: "Zion AI Customer Insights"
    },
    {
      name: "Emily Rodriguez",
      company: "Digital Agency",
      role: "Operations Manager",
      content: "Zion Security Shield gives us peace of mind. The real-time monitoring and threat detection are outstanding.",
      rating: 5,
      product: "Zion Security Shield"
    }
  ];

  return (
    <>
      <Helmet>
        <title>Micro SAAS Solutions - Zion Tech Group | Ready-to-Use Software</title>
        <meta
          name="description"
          content="Discover our comprehensive collection of micro SAAS solutions. Ready-to-use software for video generation, analytics, security, content creation, and more. Start free trials today."
        />
        <meta
          name="keywords"
          content="micro SAAS, software as a service, AI video generator, customer insights, analytics, security, content creation, business tools, automation"
        />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 relative overflow-hidden">
        {/* Animated Background */}
        <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 via-purple-500/10 to-pink-500/10 animate-pulse"></div>
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_50%_50%,rgba(120,119,198,0.3),transparent_50%)]"></div>
        
        {/* Hero Section */}
        <section className="pt-20 pb-16 px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-7xl mx-auto text-center">
            <div className="inline-block">
              <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 relative">
                Micro
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 animate-pulse">
                  {" "}SAAS
                </span>
                <div className="absolute -inset-1 bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 rounded-lg blur opacity-30 animate-pulse"></div>
              </h1>
            </div>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed">
              Ready-to-use software solutions that can transform your business operations immediately. 
              No complex setup, no lengthy implementations - just powerful tools that work out of the box.
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
                Watch Demo
                <Play className="w-5 h-5 ml-2 group-hover:scale-110 transition-transform" />
              </Link>
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Why Choose Our Micro SAAS Solutions?
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Get enterprise-grade functionality without the complexity. Our solutions are designed for immediate deployment and maximum impact.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {benefits.map((benefit, index) => (
                <div
                  key={index}
                  className="text-center group bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105"
                >
                  <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-lg flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                    {benefit.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-3">{benefit.title}</h3>
                  <p className="text-gray-300">{benefit.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Products Grid */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 relative z-10 bg-gradient-to-r from-slate-800/50 to-purple-800/50">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Our Micro SAAS Solutions
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Choose from our comprehensive collection of ready-to-use software solutions designed for modern businesses.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {microSaasProducts.map((product, index) => (
                <div
                  key={index}
                  className={`group bg-white/10 backdrop-blur-sm rounded-xl p-6 border transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-cyan-500/10 relative overflow-hidden ${
                    product.popular
                      ? 'border-cyan-400 bg-gradient-to-br from-cyan-500/10 to-purple-500/10'
                      : 'border-white/20 hover:border-cyan-400'
                  }`}
                >
                  {product.popular && (
                    <div className="absolute -top-3 -right-3">
                      <div className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-3 py-1 rounded-full text-xs font-semibold flex items-center">
                        <Star className="w-3 h-3 mr-1 fill-current" />
                        Popular
                      </div>
                    </div>
                  )}
                  
                  <div className="text-center mb-6">
                    <div
                      className={`w-16 h-16 rounded-lg bg-gradient-to-r ${product.color} flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300 shadow-lg`}
                    >
                      {product.icon}
                    </div>
                    <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-cyan-300 transition-colors">
                      {product.name}
                    </h3>
                    <p className="text-gray-300 text-sm leading-relaxed mb-4">
                      {product.description}
                    </p>
                    <div className="text-cyan-400 font-bold text-lg mb-2">{product.price}</div>
                    <div className="text-xs text-gray-400">{product.stats}</div>
                  </div>
                  
                  <div className="space-y-2 mb-6">
                    {product.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-center text-sm">
                        <CheckCircle className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
                        <span className="text-gray-300">{feature}</span>
                      </div>
                    ))}
                  </div>
                  
                  <div className="space-y-2">
                    <Link
                      to={product.link}
                      className={`w-full block text-center py-3 px-4 rounded-lg font-semibold transition-all duration-300 ${
                        product.popular
                          ? 'bg-gradient-to-r from-cyan-500 to-purple-600 text-white hover:from-cyan-600 hover:to-purple-700'
                          : 'border border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-slate-900'
                      }`}
                    >
                      Learn More
                    </Link>
                    <Link
                      to="/contact"
                      className="w-full block text-center py-2 px-4 rounded-lg border border-gray-500 text-gray-300 hover:border-cyan-400 hover:text-cyan-400 transition-all duration-300 text-sm"
                    >
                      Start Free Trial
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
                What Our Customers Say
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Join thousands of businesses already using our micro SAAS solutions to drive growth and efficiency.
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
                  <div className="border-t border-gray-700 pt-4">
                    <div className="font-semibold text-white">{testimonial.name}</div>
                    <div className="text-sm text-gray-400">{testimonial.role}, {testimonial.company}</div>
                    <div className="text-xs text-cyan-400 mt-1">{testimonial.product}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 relative z-10 bg-gradient-to-r from-cyan-900/30 to-purple-900/30">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Ready to Transform Your Business?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Start your free trial today and experience the power of our micro SAAS solutions. 
              No credit card required, cancel anytime.
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
                to="/pricing"
                className="border border-cyan-400 text-cyan-400 px-8 py-4 rounded-lg font-semibold hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300 group hover:scale-105"
              >
                View Pricing
                <Award className="w-5 h-5 ml-2 group-hover:rotate-12 transition-transform" />
              </Link>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}

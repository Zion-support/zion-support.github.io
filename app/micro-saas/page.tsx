import React from "react";
import { ArrowRight, CheckCircle, Star, Zap, Shield, BarChart3, Cloud, Code, Database, Mail, Users, Clock, DollarSign, TrendingUp, Target, Globe, Smartphone, Monitor, Cpu, Network, Package, Heart, Receipt } from "lucide-react";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";

export default function MicroSaas() {
  const microSaasProducts = [
    {
      id: 1,
      title: "Zion Analytics Pro",
      description: "AI-powered business intelligence platform with real-time dashboards and predictive analytics.",
      icon: <BarChart3 className="w-8 h-8" />,
      features: ["Real-time analytics", "Predictive insights", "Custom dashboards", "Data visualization"],
      price: "From $299/month",
      link: "/zion-analytics-pro",
      popular: true,
      category: "Analytics"
    },
    {
      id: 2,
      title: "Zion Security Shield",
      description: "Advanced cybersecurity protection with AI-powered threat detection and automated response.",
      icon: <Shield className="w-8 h-8" />,
      features: ["Threat detection", "Automated response", "Compliance monitoring", "Security analytics"],
      price: "From $499/month",
      link: "/zion-security-shield",
      popular: true,
      category: "Security"
    },
    {
      id: 3,
      title: "Zion Cloud Vault",
      description: "Secure cloud storage solution with end-to-end encryption and unlimited scalability.",
      icon: <Cloud className="w-8 h-8" />,
      features: ["End-to-end encryption", "Unlimited storage", "File sharing", "Backup automation"],
      price: "From $99/month",
      link: "/zion-cloud-vault",
      popular: false,
      category: "Storage"
    },
    {
      id: 4,
      title: "Zion AI CRM Pro",
      description: "AI-powered customer relationship management with intelligent lead scoring and automation.",
      icon: <Users className="w-8 h-8" />,
      features: ["Lead scoring", "Automated follow-ups", "Customer insights", "Sales forecasting"],
      price: "From $199/month",
      link: "/zion-ai-crm-pro",
      popular: false,
      category: "CRM"
    },
    {
      id: 5,
      title: "Zion AI Marketing Automation Pro",
      description: "AI-powered marketing automation with predictive content generation and multi-channel orchestration.",
      icon: <Target className="w-8 h-8" />,
      features: ["Content generation", "Multi-channel campaigns", "A/B testing", "ROI tracking"],
      price: "From $149/month",
      link: "/zion-ai-marketing-automation-pro",
      popular: false,
      category: "Marketing"
    },
    {
      id: 6,
      title: "Zion AI Project Manager Pro",
      description: "AI-powered project management with intelligent task prioritization and resource allocation.",
      icon: <Package className="w-8 h-8" />,
      features: ["Task automation", "Resource optimization", "Progress tracking", "Team collaboration"],
      price: "From $99/month",
      link: "/zion-ai-project-manager-pro",
      popular: false,
      category: "Project Management"
    }
  ];

  const categories = [
    { name: "All Products", count: 6, icon: <Package className="w-5 h-5" /> },
    { name: "Analytics", count: 1, icon: <BarChart3 className="w-5 h-5" /> },
    { name: "Security", count: 1, icon: <Shield className="w-5 h-5" /> },
    { name: "Storage", count: 1, icon: <Cloud className="w-5 h-5" /> },
    { name: "CRM", count: 1, icon: <Users className="w-5 h-5" /> },
    { name: "Marketing", count: 1, icon: <Target className="w-5 h-5" /> },
    { name: "Project Management", count: 1, icon: <Package className="w-5 h-5" /> }
  ];

  const benefits = [
    {
      title: "Quick Setup",
      description: "Get up and running in minutes with our plug-and-play solutions",
      icon: <Zap className="w-6 h-6" />,
      stat: "5 min"
    },
    {
      title: "Cost Effective",
      description: "Affordable pricing with no hidden fees or long-term contracts",
      icon: <DollarSign className="w-6 h-6" />,
      stat: "50%"
    },
    {
      title: "Scalable",
      description: "Grow with your business with flexible plans and features",
      icon: <TrendingUp className="w-6 h-6" />,
      stat: "∞"
    },
    {
      title: "24/7 Support",
      description: "Round-the-clock support to help you succeed",
      icon: <Clock className="w-6 h-6" />,
      stat: "24/7"
    }
  ];

  const testimonials = [
    {
      name: "Sarah Johnson",
      company: "TechStart Inc.",
      role: "CEO",
      content: "Zion Analytics Pro transformed our data analysis. We now make decisions 3x faster with real-time insights.",
      rating: 5,
      product: "Zion Analytics Pro"
    },
    {
      name: "Michael Chen",
      company: "E-commerce Solutions",
      role: "CTO",
      content: "The security features in Zion Security Shield are incredible. We've had zero security incidents since implementation.",
      rating: 5,
      product: "Zion Security Shield"
    },
    {
      name: "Emily Rodriguez",
      company: "Digital Marketing Agency",
      role: "Operations Director",
      content: "Zion AI Marketing Automation Pro increased our campaign effectiveness by 200%. The ROI is outstanding.",
      rating: 5,
      product: "Zion AI Marketing Automation Pro"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Helmet>
        <title>Micro SAAS - Zion Tech Group | Ready-to-Use Software Solutions</title>
        <meta name="description" content="Discover our comprehensive suite of micro SAAS solutions including analytics, security, storage, CRM, marketing automation, and project management tools." />
        <meta name="keywords" content="micro SAAS, software solutions, business tools, analytics, security, CRM, marketing automation, project management, cloud storage" />
      </Helmet>

      {/* Hero Section */}
      <section className="pt-20 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-cyan-500/20 to-purple-500/20 border border-cyan-500/30 mb-6">
            <Package className="w-4 h-4 text-cyan-400 mr-2" />
            <span className="text-cyan-400 text-sm font-medium">Micro SAAS Solutions</span>
          </div>
          
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Ready-to-Use <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">Software Solutions</span>
          </h1>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Powerful, affordable, and easy-to-use software solutions that help your business grow. No complex setup, no long-term contracts - just results.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 flex items-center justify-center space-x-2"
            >
              <span>Get Started</span>
              <ArrowRight className="w-5 h-5" />
            </Link>
            <Link
              to="/demo"
              className="bg-white/10 text-white px-8 py-4 rounded-lg font-semibold hover:bg-white/20 transition-all duration-300 flex items-center justify-center space-x-2"
            >
              <Monitor className="w-5 h-5" />
              <span>View Demo</span>
            </Link>
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="py-8 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-wrap justify-center gap-4 mb-8">
            {categories.map((category) => (
              <button
                key={category.name}
                className="flex items-center space-x-2 px-6 py-3 rounded-full font-medium transition-all duration-300 bg-white/10 text-gray-300 hover:bg-white/20 hover:text-white"
              >
                {category.icon}
                <span>{category.name} ({category.count})</span>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-white mb-4">Our Micro SAAS Products</h2>
            <p className="text-gray-300 text-lg">Choose from our comprehensive suite of business solutions</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {microSaasProducts.map((product) => (
              <div key={product.id} className={`relative group ${product.popular ? 'md:col-span-2 lg:col-span-1' : ''}`}>
                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8 border border-white/20 hover:border-cyan-500/50 transition-all duration-300 hover:shadow-lg hover:shadow-cyan-500/25 h-full">
                  {product.popular && (
                    <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                      <span className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-4 py-1 rounded-full text-sm font-medium">
                        Most Popular
                      </span>
                    </div>
                  )}
                  
                  <div className="text-cyan-400 mb-4">
                    {product.icon}
                  </div>
                  
                  <div className="flex items-center justify-between mb-3">
                    <span className="px-3 py-1 bg-cyan-500/20 text-cyan-400 text-xs font-medium rounded-full">
                      {product.category}
                    </span>
                  </div>
                  
                  <h3 className="text-xl font-bold text-white mb-3 group-hover:text-cyan-400 transition-colors duration-300">
                    {product.title}
                  </h3>
                  
                  <p className="text-gray-300 mb-6">
                    {product.description}
                  </p>
                  
                  <ul className="space-y-2 mb-6">
                    {product.features.map((feature, index) => (
                      <li key={index} className="flex items-center space-x-2 text-gray-300">
                        <CheckCircle className="w-4 h-4 text-green-400 flex-shrink-0" />
                        <span className="text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  
                  <div className="text-2xl font-bold text-white mb-4">
                    {product.price}
                  </div>
                  
                  <Link
                    to={product.link}
                    className="w-full bg-gradient-to-r from-cyan-500 to-purple-600 text-white py-3 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 flex items-center justify-center space-x-2"
                  >
                    <span>Learn More</span>
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white/5">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-white mb-4">Why Choose Our Micro SAAS Solutions?</h2>
            <p className="text-gray-300 text-lg">Built for modern businesses that need results fast</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <div className="text-white">
                    {benefit.icon}
                  </div>
                </div>
                <div className="text-4xl font-bold text-white mb-2">{benefit.stat}</div>
                <h3 className="text-xl font-semibold text-white mb-2">{benefit.title}</h3>
                <p className="text-gray-300">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-white mb-4">What Our Customers Say</h2>
            <p className="text-gray-300 text-lg">Real results from real businesses</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-300 mb-4 italic">"{testimonial.content}"</p>
                <div className="flex items-center space-x-3">
                  <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-full flex items-center justify-center">
                    <Users className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <p className="font-semibold text-white">{testimonial.name}</p>
                    <p className="text-sm text-gray-400">{testimonial.role}, {testimonial.company}</p>
                    <p className="text-xs text-cyan-400">{testimonial.product}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <div className="bg-gradient-to-r from-cyan-500/20 to-purple-500/20 rounded-2xl p-8 border border-cyan-500/30">
            <h2 className="text-3xl font-bold text-white mb-4">Ready to Transform Your Business?</h2>
            <p className="text-gray-300 mb-8 text-lg">
              Start with any of our micro SAAS solutions and see the difference in just days, not months.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 flex items-center justify-center space-x-2"
              >
                <span>Get Started Today</span>
                <ArrowRight className="w-5 h-5" />
              </Link>
              <Link
                to="/demo"
                className="bg-white/10 text-white px-8 py-4 rounded-lg font-semibold hover:bg-white/20 transition-all duration-300 flex items-center justify-center space-x-2"
              >
                <Monitor className="w-5 h-5" />
                <span>Schedule Demo</span>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

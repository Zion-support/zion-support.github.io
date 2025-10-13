import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { Zap, ArrowRight, CheckCircle, Star, Users, BarChart3, Shield, Cloud, Code, Database, Globe, Sparkles } from 'lucide-react';

const MicroSaasPage: React.FC = () => {
  const microSaasProducts = [
    {
      title: "Zion Analytics Pro",
      description: "AI-powered business intelligence platform with real-time dashboards and predictive analytics.",
      price: "From $299/month",
      icon: <BarChart3 className="w-8 h-8" />,
      features: ["Real-time Dashboards", "Predictive Analytics", "Custom Reports", "Data Visualization"],
      link: "/zion-analytics-pro",
      color: "from-blue-500 to-cyan-500",
      popular: true
    },
    {
      title: "Zion Security Shield",
      description: "Advanced cybersecurity protection with AI-powered threat detection and automated response.",
      price: "From $499/month",
      icon: <Shield className="w-8 h-8" />,
      features: ["Threat Detection", "Automated Response", "Security Analytics", "Compliance Monitoring"],
      link: "/zion-security-shield",
      color: "from-red-500 to-orange-500"
    },
    {
      title: "Zion Cloud Vault",
      description: "Secure cloud storage solution with end-to-end encryption and unlimited scalability.",
      price: "From $99/month",
      icon: <Cloud className="w-8 h-8" />,
      features: ["End-to-end Encryption", "Unlimited Storage", "File Sync", "Team Collaboration"],
      link: "/zion-cloud-vault",
      color: "from-green-500 to-emerald-500"
    },
    {
      title: "Zion AI CRM Pro",
      description: "AI-powered customer relationship management with intelligent lead scoring and automation.",
      price: "From $199/month",
      icon: <Users className="w-8 h-8" />,
      features: ["Lead Scoring", "Sales Automation", "Customer Insights", "Pipeline Management"],
      link: "/zion-ai-crm-pro",
      color: "from-purple-500 to-pink-500"
    },
    {
      title: "Zion Content Studio",
      description: "AI-powered content creation platform for blogs, social media, and marketing materials.",
      price: "From $149/month",
      icon: <Code className="w-8 h-8" />,
      features: ["Content Generation", "SEO Optimization", "Multi-platform Publishing", "Brand Consistency"],
      link: "/zion-content-studio",
      color: "from-indigo-500 to-purple-500"
    },
    {
      title: "Zion Data Cleaner",
      description: "Intelligent data cleaning and validation tool with automated quality checks.",
      price: "From $79/month",
      icon: <Database className="w-8 h-8" />,
      features: ["Data Validation", "Duplicate Removal", "Format Standardization", "Quality Reports"],
      link: "/zion-ai-data-cleaner",
      color: "from-yellow-500 to-orange-500"
    }
  ];

  const benefits = [
    {
      title: "Ready to Use",
      description: "Deploy in minutes with pre-configured solutions",
      icon: <Zap className="w-6 h-6" />
    },
    {
      title: "Scalable",
      description: "Grow with your business needs and requirements",
      icon: <BarChart3 className="w-6 h-6" />
    },
    {
      title: "Cost Effective",
      description: "No upfront costs, pay only for what you use",
      icon: <CheckCircle className="w-6 h-6" />
    },
    {
      title: "24/7 Support",
      description: "Round-the-clock technical support and assistance",
      icon: <Globe className="w-6 h-6" />
    }
  ];

  const stats = [
    { number: "50+", label: "Micro SAAS Solutions", icon: <Zap className="w-6 h-6" /> },
    { number: "10,000+", label: "Active Users", icon: <Users className="w-6 h-6" /> },
    { number: "99.9%", label: "Uptime SLA", icon: <Shield className="w-6 h-6" /> },
    { number: "24/7", label: "Support Available", icon: <Globe className="w-6 h-6" /> }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Helmet>
        <title>Micro SAAS Solutions - Zion Tech Group | Ready-to-Use Software Products</title>
        <meta name="description" content="Discover our comprehensive suite of micro SAAS solutions including analytics, security, CRM, content creation, and data management tools." />
        <meta name="keywords" content="micro SAAS, software as a service, business tools, analytics, CRM, content creation, data management" />
      </Helmet>

      {/* Hero Section */}
      <section className="pt-20 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-cyan-500/20 to-purple-500/20 border border-cyan-500/30 mb-6">
            <Zap className="w-5 h-5 text-cyan-400 mr-2" />
            <span className="text-cyan-400 text-sm font-medium">Micro SAAS Solutions</span>
          </div>
          
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Ready-to-Use <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400">Software Solutions</span>
          </h1>
          
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Deploy powerful business tools instantly with our comprehensive suite of micro SAAS solutions. 
            No complex setup, no lengthy implementations - just powerful software that works.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-cyan-500 to-purple-600 text-white rounded-lg font-semibold hover:shadow-lg hover:shadow-cyan-500/25 transition-all duration-300"
            >
              Get Started
              <ArrowRight className="w-5 h-5 ml-2" />
            </Link>
            <Link
              to="/demo"
              className="inline-flex items-center px-8 py-4 border border-cyan-500/30 text-cyan-400 rounded-lg font-semibold hover:bg-cyan-500/10 transition-all duration-300"
            >
              View Demo
            </Link>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <div className="text-cyan-400">
                    {stat.icon}
                  </div>
                </div>
                <div className="text-3xl font-bold text-white mb-2">{stat.number}</div>
                <div className="text-gray-400">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Our Micro SAAS Portfolio
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Comprehensive business tools designed to solve specific problems and drive growth
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {microSaasProducts.map((product, index) => (
              <div key={index} className="group relative">
                {product.popular && (
                  <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 z-10">
                    <div className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-4 py-1 rounded-full text-sm font-medium flex items-center">
                      <Star className="w-4 h-4 mr-1" />
                      Most Popular
                    </div>
                  </div>
                )}
                
                <div className="bg-slate-800/50 backdrop-blur-sm border border-cyan-500/20 rounded-xl p-8 hover:border-cyan-400/40 transition-all duration-300 hover:transform hover:scale-105 h-full">
                  <div className={`w-16 h-16 bg-gradient-to-r ${product.color} rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
                    <div className="text-white">
                      {product.icon}
                    </div>
                  </div>
                  
                  <h3 className="text-xl font-bold text-white mb-4 group-hover:text-cyan-400 transition-colors">
                    {product.title}
                  </h3>
                  
                  <p className="text-gray-300 mb-4">
                    {product.description}
                  </p>
                  
                  <div className="text-2xl font-bold text-cyan-400 mb-6">
                    {product.price}
                  </div>
                  
                  <ul className="space-y-2 mb-6">
                    {product.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-sm text-gray-400">
                        <CheckCircle className="w-4 h-4 text-cyan-400 mr-2 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  
                  <Link
                    to={product.link}
                    className="inline-flex items-center text-cyan-400 hover:text-cyan-300 font-medium transition-colors"
                  >
                    Learn More
                    <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-slate-800/30">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Why Choose Our Micro SAAS Solutions?
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Experience the benefits of ready-to-use software solutions designed for modern businesses
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <div className="text-cyan-400">
                    {benefit.icon}
                  </div>
                </div>
                <h3 className="text-xl font-bold text-white mb-3">
                  {benefit.title}
                </h3>
                <p className="text-gray-300">
                  {benefit.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <div className="bg-gradient-to-r from-cyan-500/10 to-purple-500/10 border border-cyan-500/20 rounded-2xl p-12">
            <Sparkles className="w-16 h-16 text-cyan-400 mx-auto mb-6" />
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Ready to Transform Your Business?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Start using our micro SAAS solutions today and see immediate results in your business operations.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-cyan-500 to-purple-600 text-white rounded-lg font-semibold hover:shadow-lg hover:shadow-cyan-500/25 transition-all duration-300"
              >
                Get Started Today
                <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
              <Link
                to="/demo"
                className="inline-flex items-center px-8 py-4 border border-cyan-500/30 text-cyan-400 rounded-lg font-semibold hover:bg-cyan-500/10 transition-all duration-300"
              >
                Schedule Demo
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default MicroSaasPage;